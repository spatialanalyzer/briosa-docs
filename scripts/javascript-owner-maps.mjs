// Rebuilds the JavaScript owner maps in tests/javascript-owner-maps/. Each map
// records, for one released briosa-js client and each of its exact targets,
// which methods are direct BriosaClient members, which belong to an operation
// group (and the client property that reaches it), and which are package-level
// functions. tests/api-reference-working.test.cjs checks the JavaScript
// reference against these maps offline.
//
// A map is read with the TypeScript compiler from the release tag's source
// (targets/<target>/src, starting at index.ts) and cross-checked against the
// type declarations of the npm package published for that release and target.
// The script stops if the two disagree, if a tagged package.json names another
// version, if the downloaded package fails its registry integrity check or is
// not a well-formed archive, or if a public export or client member has a kind
// it cannot classify.
//
//   git clone https://github.com/spatialanalyzer/briosa-js ../briosa-js
//   node scripts/javascript-owner-maps.mjs ../briosa-js 0.5.0
//
// Pass several releases to rebuild several maps. The checkout must have the
// v<release> tags; the script reads them with git and never checks them out.
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {existsSync, readFileSync, realpathSync} from 'node:fs';
import {mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {gunzipSync} from 'node:zlib';
import ts from 'typescript';

const repository = 'https://github.com/spatialanalyzer/briosa-js';
const registry = 'https://registry.npmjs.org';
const clientInterface = 'BriosaClient';
const outDir = path.resolve(import.meta.dirname, '..', 'tests', 'javascript-owner-maps');

const git = (cwd, ...args) => execFileSync('git', ['-C', cwd, ...args], {encoding: 'utf8', maxBuffer: 1 << 28});

// Reads the public owners of one package from its module graph: source files
// (entry index.ts) or published declarations (entry dist/index.d.ts). `files`
// maps package-relative paths to their text.
export function owners(files, entry) {
  const root = '/package/';
  const sources = new Map([...files].map(([name, text]) => [root + name, text]));
  const options = {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    lib: ['lib.esnext.d.ts'],
    types: [],
    strict: true,
    noEmit: true,
  };
  const libDir = path.dirname(ts.getDefaultLibFilePath(options)).replaceAll('\\', '/');
  const inLib = (name) => name.replaceAll('\\', '/').startsWith(`${libDir}/`);
  const read = (name) => sources.get(name) ?? (inLib(name) && existsSync(name) ? readFileSync(name, 'utf8') : undefined);
  const host = {
    fileExists: (name) => read(name) !== undefined,
    readFile: read,
    directoryExists: (dir) => inLib(`${dir}/`) || [...sources.keys()].some((name) => name.startsWith(dir.endsWith('/') ? dir : `${dir}/`)),
    getDirectories: () => [],
    getSourceFile: (name, version) => {
      const text = read(name);
      return text === undefined ? undefined : ts.createSourceFile(name, text, version, true);
    },
    getDefaultLibFileName: (o) => ts.getDefaultLibFilePath(o),
    getDefaultLibLocation: () => libDir,
    writeFile: () => {},
    getCurrentDirectory: () => root,
    getCanonicalFileName: (name) => name,
    useCaseSensitiveFileNames: () => true,
    getNewLine: () => '\n',
  };
  const program = ts.createProgram([root + entry], options, host);
  const checker = program.getTypeChecker();
  const entryFile = program.getSourceFile(root + entry);
  if (!entryFile) throw new Error(`Missing entry module ${entry}`);
  const resolve = (symbol) => (symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol);
  const unclassifiable = (type) => type.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown);
  const memberName = (symbol) => {
    const name = (symbol.valueDeclaration ?? symbol.declarations?.[0])?.name;
    if (name && ts.isComputedPropertyName(name)) return `[${name.expression.getText()}]`;
    if (name && (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isPrivateIdentifier(name))) return name.text;
    throw new Error(`Cannot read the name of member ${symbol.name}`);
  };
  // A member is a method when it is declared as one, or when its type is callable.
  const isMethod = (symbol, where) => {
    const declaration = symbol.valueDeclaration ?? symbol.declarations?.[0];
    if (declaration && (ts.isMethodSignature(declaration) || ts.isMethodDeclaration(declaration))) return true;
    const type = checker.getTypeOfSymbol(symbol);
    if (unclassifiable(type)) throw new Error(`${where}.${memberName(symbol)} has a type the compiler cannot resolve; it needs review`);
    return type.getCallSignatures().length > 0;
  };

  const functions = [];
  let client;
  for (const exported of checker.getExportsOfModule(checker.getSymbolAtLocation(entryFile))) {
    const symbol = resolve(exported);
    if (!symbol.declarations?.length) throw new Error(`Cannot resolve the export ${exported.name} of ${entry}`);
    if (exported.name === clientInterface) client = symbol;
    if (symbol.flags & ts.SymbolFlags.Function) functions.push(exported.name);
    else if (symbol.flags & ts.SymbolFlags.Variable) {
      // A callable value, such as `export const run = () => ...`, is a package-level function.
      const type = checker.getTypeOfSymbol(symbol);
      if (unclassifiable(type)) throw new Error(`The export ${exported.name} of ${entry} has a type the compiler cannot resolve; it needs review`);
      if (type.getCallSignatures().length) functions.push(exported.name);
    } else if (!(symbol.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.Enum | ts.SymbolFlags.Interface | ts.SymbolFlags.TypeAlias))) {
      throw new Error(`The export ${exported.name} of ${entry} is neither a function, a value, a class, an enum nor a type; it needs review`);
    }
  }
  if (!client || !(client.flags & ts.SymbolFlags.Interface)) throw new Error(`${entry} does not export the ${clientInterface} interface`);

  const clientMembers = [];
  const groups = {};
  for (const member of checker.getPropertiesOfType(checker.getDeclaredTypeOfSymbol(client))) {
    const name = memberName(member);
    if (isMethod(member, clientInterface)) {
      clientMembers.push(name);
      continue;
    }
    // A property whose type is a named interface of methods is an operation group.
    const type = checker.getTypeOfSymbol(member);
    const group = type.getSymbol();
    if (!group || !(group.flags & ts.SymbolFlags.Interface)) throw new Error(`${clientInterface}.${name} has type ${checker.typeToString(type)}, which is not an operation-group interface`);
    const groupMembers = checker.getPropertiesOfType(type);
    const methods = groupMembers.filter((m) => isMethod(m, group.name)).map(memberName);
    if (!methods.length || methods.length !== groupMembers.length) throw new Error(`${clientInterface}.${name} (${group.name}) is not an interface of methods`);
    if (groups[group.name]) throw new Error(`${group.name} is reached through both ${groups[group.name].property} and ${name}`);
    groups[group.name] = {property: name, methods: [...new Set(methods)].sort()};
  }
  const sorted = (names) => [...new Set(names)].sort();
  return {
    client: {interface: clientInterface, members: sorted(clientMembers)},
    groups: Object.fromEntries(Object.entries(groups).sort(([a], [b]) => (a < b ? -1 : 1))),
    functions: sorted(functions),
  };
}

// Reads a tar archive and returns its regular files by path, without the
// leading package/ folder. It rejects a corrupt header, a malformed size, a
// member or its padding that runs past the archive, an unsupported member
// type, and an archive without an end-of-archive block.
export function readTar(tar) {
  const files = new Map();
  let pax = {};
  for (let offset = 0; ;) {
    if (offset + 512 > tar.length) throw new Error(`The archive ends at byte ${tar.length} without an end-of-archive block`);
    const header = tar.subarray(offset, offset + 512);
    if (header.every((b) => b === 0)) {
      if (!tar.subarray(offset).every((b) => b === 0)) throw new Error(`The archive has data after its end-of-archive block at byte ${offset}`);
      return files;
    }
    const field = (start, length) => header.subarray(start, start + length).toString('latin1').replace(/\0.*$/s, '');
    const octal = (start, length, what) => {
      const text = field(start, length).trim();
      if (!/^[0-7]+$/.test(text)) throw new Error(`The archive header at byte ${offset} has a malformed ${what} "${text}"`);
      return parseInt(text, 8);
    };
    let sum = 0;
    for (let i = 0; i < 512; i++) sum += i >= 148 && i < 156 ? 32 : header[i];
    if (octal(148, 8, 'checksum') !== sum) throw new Error(`The archive header at byte ${offset} fails its checksum`);
    const magic = header.subarray(257, 263).toString('latin1');
    if (magic !== 'ustar\0' && magic !== 'ustar ') throw new Error(`The archive header at byte ${offset} is not a ustar header`);
    const size = octal(124, 12, 'size');
    const type = field(156, 1) || '0';
    const name = pax.path ?? [field(345, 155), field(0, 100)].filter(Boolean).join('/');
    const start = offset + 512;
    const next = start + Math.ceil(size / 512) * 512;
    if (next > tar.length) throw new Error(`The archive is truncated: ${name} declares ${size} bytes, but ${Math.max(0, tar.length - start)} bytes remain`);
    const body = tar.subarray(start, start + size);
    offset = next;
    if (type === 'x') {
      pax = Object.fromEntries(body.toString('utf8').split('\n').filter(Boolean).map((record) => {
        const m = record.match(/^\d+ ([^=]+)=(.*)$/s);
        if (!m) throw new Error(`The archive has a malformed extended header for ${name}`);
        return [m[1], m[2]];
      }));
      continue;
    }
    pax = {};
    if (type === '0' || type === '7') files.set(name.replace(/^package\//, ''), body.toString('utf8'));
    else if (type !== '5' && type !== 'g') throw new Error(`The archive member ${name} has unsupported type ${type}`);
  }
}

function sourceFiles(checkout, commit, dir) {
  const files = new Map();
  for (const name of git(checkout, 'ls-tree', '-r', '--name-only', commit, '--', `${dir}/`).split('\n').filter((n) => n.endsWith('.ts'))) {
    files.set(name.slice(dir.length + 1), git(checkout, 'show', `${commit}:${name}`));
  }
  return files;
}

// Downloads the published package, verifies it against the registry's
// integrity value, and returns its type declarations.
export async function packageFiles(name, version) {
  const meta = await (await fetch(`${registry}/${name.replace('/', '%2f')}/${version}`)).json();
  if (meta.version !== version) throw new Error(`The registry has no ${name}@${version}`);
  const tarball = Buffer.from(await (await fetch(meta.dist.tarball)).arrayBuffer());
  const [algorithm, expected] = meta.dist.integrity.split('-');
  if (createHash(algorithm).update(tarball).digest('base64') !== expected) throw new Error(`${name}@${version} failed its integrity check`);
  let files;
  try {
    files = readTar(gunzipSync(tarball));
  } catch (error) {
    throw new Error(`${name}@${version}: ${error.message}`);
  }
  return {files: new Map([...files].filter(([file]) => file.endsWith('.d.ts'))), integrity: meta.dist.integrity};
}

function differences(a, b) {
  const out = [];
  const diff = (label, x = [], y = []) => {
    for (const n of x) if (!y.includes(n)) out.push(`${label}: ${n} is only in the tagged source`);
    for (const n of y) if (!x.includes(n)) out.push(`${label}: ${n} is only in the published package`);
  };
  diff('client members', a.client.members, b.client.members);
  diff('groups', Object.keys(a.groups), Object.keys(b.groups));
  for (const [group, {property, methods}] of Object.entries(a.groups)) {
    if (b.groups[group] && b.groups[group].property !== property) out.push(`${group}: property ${property} differs from ${b.groups[group].property}`);
    diff(group, methods, b.groups[group]?.methods);
  }
  diff('package-level functions', a.functions, b.functions);
  return out;
}

async function ownerMap(checkout, release) {
  const tag = `v${release}`;
  const commit = git(checkout, 'rev-parse', '--verify', `${tag}^{commit}`).trim();
  const targets = {};
  for (const dir of git(checkout, 'ls-tree', '--name-only', commit, 'targets/').split('\n').filter(Boolean)) {
    const target = path.posix.basename(dir);
    const pkg = JSON.parse(git(checkout, 'show', `${commit}:${dir}/package.json`));
    if (pkg.version !== release) throw new Error(`${tag} ${dir}/package.json has version ${pkg.version}, not ${release}`);
    const source = owners(sourceFiles(checkout, commit, `${dir}/src`), 'index.ts');
    const published = await packageFiles(pkg.name, release);
    const declared = owners(published.files, 'dist/index.d.ts');
    const diff = differences(source, declared);
    if (diff.length) throw new Error(`${tag} ${target} disagrees with ${pkg.name}@${release}:\n  ${diff.join('\n  ')}`);
    targets[target] = {package: {name: pkg.name, version: release, integrity: published.integrity}, ...source};
  }
  return {release, source: {repository, tag, commit}, targets};
}

async function main(args) {
  const [checkout, ...releases] = args;
  if (!checkout || !releases.length) {
    console.error('Usage: node scripts/javascript-owner-maps.mjs <briosa-js checkout> <release>...');
    process.exitCode = 2;
    return;
  }
  await mkdir(outDir, {recursive: true});
  for (const release of releases) {
    const map = await ownerMap(path.resolve(checkout), release);
    const file = path.join(outDir, `${release}.json`);
    await writeFile(file, `${JSON.stringify(map, null, 2)}\n`);
    const counts = Object.entries(map.targets).map(([target, t]) => `SA ${target}: ${t.client.members.length} client members, ${Object.keys(t.groups).length} groups with ${Object.values(t.groups).reduce((n, g) => n + g.methods.length, 0)} methods, ${t.functions.length} package-level functions`);
    console.log(`${path.relative(process.cwd(), file)} from ${map.source.tag} (${map.source.commit})\n  ${counts.join('\n  ')}`);
  }
}

// Run only as a command, so tests can import the readers above.
if (process.argv[1] && realpathSync.native(process.argv[1]) === realpathSync.native(fileURLToPath(import.meta.url))) {
  await main(process.argv.slice(2));
}
