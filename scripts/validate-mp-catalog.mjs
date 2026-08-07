import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const scriptPath = fileURLToPath(import.meta.url);
const repositoryRoot = path.resolve(path.dirname(scriptPath), '..');

async function readJson(filePath) {
  try {
    return JSON.parse(await readFile(filePath, 'utf8'));
  } catch (error) {
    throw new Error(`${path.relative(repositoryRoot, filePath)}: ${error.message}`);
  }
}

async function listJsonFiles(directory) {
  const files = [];

  for (const entry of await readdir(directory, {withFileTypes: true})) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listJsonFiles(entryPath)));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      files.push(entryPath);
    }
  }

  return files.sort((left, right) => left.localeCompare(right));
}

function formatSchemaErrors(errors = []) {
  return errors
    .map((error) => `${error.instancePath || '/'} ${error.message}`)
    .join('; ');
}

export async function loadCatalogValidators(root = repositoryRoot) {
  const schemaRoot = path.join(root, 'catalog', 'schemas', 'v1');
  const [targetSchema, commandSchema] = await Promise.all([
    readJson(path.join(schemaRoot, 'target.schema.json')),
    readJson(path.join(schemaRoot, 'command.schema.json')),
  ]);
  const ajv = new Ajv({
    allErrors: true,
    strict: true,
    // Conditional required/not-required rules intentionally refer to fields
    // declared on the root record schema.
    strictRequired: false,
  });
  addFormats(ajv);

  return {
    validateTarget: ajv.compile(targetSchema),
    validateCommand: ajv.compile(commandSchema),
  };
}

export function validatePublicationPolicy(target, commands) {
  const errors = [];

  if (
    target.coverage.require_complete &&
    commands.length !== target.coverage.expected_command_count
  ) {
    errors.push(
      `expected ${target.coverage.expected_command_count} command records, found ${commands.length}`,
    );
  }

  if (target.publication_phase === 'v1_release') {
    for (const command of commands) {
      if (command.status === 'under_review') {
        errors.push(`${command.command_id}: under_review is not a final v1 status`);
      }
      if (command.status === 'selected_for_v1') {
        errors.push(
          `${command.command_id}: selected_for_v1 must become supported or receive a final disposition before v1`,
        );
      }
    }
  }

  return errors;
}

export async function validateCatalog(root = repositoryRoot) {
  const {validateTarget, validateCommand} = await loadCatalogValidators(root);
  const targetsRoot = path.join(root, 'catalog', 'sa');
  const targetEntries = (await readdir(targetsRoot, {withFileTypes: true}))
    .filter((entry) => entry.isDirectory())
    .sort((left, right) => left.name.localeCompare(right.name));
  const errors = [];
  let commandCount = 0;

  for (const targetEntry of targetEntries) {
    const targetRoot = path.join(targetsRoot, targetEntry.name);
    const targetFile = path.join(targetRoot, 'target.json');
    const target = await readJson(targetFile);

    if (!validateTarget(target)) {
      errors.push(
        `${path.relative(root, targetFile)}: ${formatSchemaErrors(validateTarget.errors)}`,
      );
      continue;
    }
    if (target.exact_target !== targetEntry.name) {
      errors.push(
        `${path.relative(root, targetFile)}: exact_target must match directory ${targetEntry.name}`,
      );
    }

    const commandsRoot = path.join(targetRoot, target.record_directory);
    const commandFiles = await listJsonFiles(commandsRoot);
    const commands = [];
    const commandIds = new Map();
    const slugs = new Map();

    for (const commandFile of commandFiles) {
      const command = await readJson(commandFile);
      const relativeFile = path.relative(root, commandFile);

      if (!validateCommand(command)) {
        errors.push(`${relativeFile}: ${formatSchemaErrors(validateCommand.errors)}`);
        continue;
      }

      commands.push(command);
      commandCount += 1;

      if (command.exact_target !== target.exact_target) {
        errors.push(
          `${relativeFile}: exact_target must equal ${target.exact_target}`,
        );
      }

      const expectedSlug = path
        .relative(commandsRoot, commandFile)
        .split(path.sep)
        .join('/')
        .replace(/\.json$/, '');
      if (command.slug !== expectedSlug) {
        errors.push(`${relativeFile}: slug must equal ${expectedSlug}`);
      }

      for (const [label, value, seen] of [
        ['command_id', command.command_id, commandIds],
        ['slug', command.slug, slugs],
      ]) {
        if (seen.has(value)) {
          errors.push(`${relativeFile}: duplicate ${label} also used by ${seen.get(value)}`);
        } else {
          seen.set(value, relativeFile);
        }
      }
    }

    errors.push(
      ...validatePublicationPolicy(target, commands).map(
        (error) => `${path.relative(root, targetFile)}: ${error}`,
      ),
    );
  }

  if (errors.length > 0) {
    throw new Error(`MP catalog validation failed:\n- ${errors.join('\n- ')}`);
  }

  return {targetCount: targetEntries.length, commandCount};
}

const invokedPath = process.argv[1]
  ? pathToFileURL(path.resolve(process.argv[1])).href
  : undefined;

if (invokedPath === import.meta.url) {
  try {
    const result = await validateCatalog();
    console.log(
      `Validated ${result.commandCount} MP catalog records across ${result.targetCount} exact target(s).`,
    );
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
