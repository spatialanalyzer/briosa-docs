// Rebuilds the JavaScript owner maps in tests/javascript-owner-maps/. Each map
// records, for one released briosa-js client and each of its exact targets,
// which methods are direct BriosaClient members, which belong to an operation
// group (and the client property that reaches it), and which are package-level
// functions. tests/api-reference-working.test.cjs checks the JavaScript
// reference against these maps offline.
//
// A map is read from the release tag's source (targets/<target>/src, starting
// at index.ts) and cross-checked against the type declarations of the npm
// package published for that release and target. The script stops if the two
// disagree, if a tagged package.json names another version, or if the
// downloaded package fails its registry integrity check.
//
//   git clone https://github.com/spatialanalyzer/briosa-js ../briosa-js
//   node scripts/javascript-owner-maps.mjs ../briosa-js 0.5.0
//
// Pass several releases to rebuild several maps. The checkout must have the
// v<release> tags; the script reads them with git and never checks them out.
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {gunzipSync} from 'node:zlib';

const repository = 'https://github.com/spatialanalyzer/briosa-js';
const registry = 'https://registry.npmjs.org';
const clientInterface = 'BriosaClient';
const outDir = path.resolve(import.meta.dirname, '..', 'tests', 'javascript-owner-maps');

const git = (cwd, ...args) => execFileSync('git', ['-C', cwd, ...args], {encoding: 'utf8', maxBuffer: 1 << 28});

// Removes comments from a TypeScript fragment that holds types only (an
// interface body), keeping string literals intact.
function stripComments(text) {
  let out = '';
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '/' && text[i + 1] === '/') {
      while (i < text.length && text[i] !== '\n') i++;
      out += '\n';
    } else if (c === '/' && text[i + 1] === '*') {
      const end = text.indexOf('*/', i + 2);
      if (end < 0) throw new Error('Unterminated comment');
      i = end + 1;
      out += ' ';
    } else if (c === '"' || c === "'" || c === '`') {
      let j = i + 1;
      while (j < text.length && text[j] !== c) j += text[j] === '\\' ? 2 : 1;
      out += text.slice(i, j + 1);
      i = j;
    } else out += c;
  }
  return out;
}

// Splits an interface body into its members at top-level semicolons.
function members(body) {
  const parts = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    if (c === '"' || c === "'" || c === '`') {
      let j = i + 1;
      while (j < body.length && body[j] !== c) j += body[j] === '\\' ? 2 : 1;
      i = j;
    } else if ('({[<'.includes(c)) depth++;
    else if (')}]'.includes(c) || (c === '>' && body[i - 1] !== '=')) depth--;
    else if (c === ';' && depth === 0) {
      parts.push(body.slice(start, i).trim());
      start = i + 1;
    }
  }
  if (depth !== 0) throw new Error('Unbalanced interface body');
  if (body.slice(start).trim()) parts.push(body.slice(start).trim());
  return parts.filter(Boolean).map((text) => {
    const m = text.match(/^(?:readonly\s+)?(\[Symbol\.\w+\]|[A-Za-z_$][\w$]*)\??\s*([(<:])/);
    if (!m) throw new Error(`Unrecognized interface member: ${text.slice(0, 80)}`);
    return m[2] === ':' ? {name: m[1], property: text.slice(text.indexOf(':') + 1).trim()} : {name: m[1], method: true};
  });
}

// Reads the public owners of one package from its module graph: source
// (index.ts) or published declarations (dist/index.d.ts).
function owners(files, entry, ext) {
  const parsed = new Map();
  const load = (file) => {
    if (parsed.has(file)) return parsed.get(file);
    const text = files.get(file);
    if (text === undefined) throw new Error(`Missing module ${file}`);
    const names = (re) => new Set([...text.matchAll(re)].map((m) => m[1]));
    const list = (s) => s.split(',').map((x) => x.trim()).filter(Boolean).map((x) => {
      const m = x.match(/^(type\s+)?([\w$]+)(?:\s+as\s+([\w$]+))?$/);
      if (!m) throw new Error(`Unrecognized export or import name "${x}" in ${file}`);
      return {typeOnly: Boolean(m[1]), local: m[2], name: m[3] ?? m[2]};
    });
    if (/^export \* as /m.test(text)) throw new Error(`Namespace re-export in ${file} needs review`);
    const module = {
      functions: names(/^(?:export\s+)?(?:declare\s+)?(?:async\s+)?function\s+([\w$]+)/gm),
      interfaces: names(/^(?:export\s+)?(?:declare\s+)?interface\s+([\w$]+)/gm),
      others: names(/^(?:export\s+)?(?:declare\s+)?(?:abstract\s+)?(?:class|const|let|var|type|enum)\s+([\w$]+)/gm),
      stars: [...text.matchAll(/^export\s+\*\s+from\s+['"]([^'"]+)['"]/gm)].map((m) => m[1]),
      named: [...text.matchAll(/^export\s+(type\s+)?\{([^}]*)\}(?:\s*from\s+['"]([^'"]+)['"])?/gm)]
        .flatMap((m) => list(m[2]).map((e) => ({...e, typeOnly: e.typeOnly || Boolean(m[1]), from: m[3]}))),
      imports: new Map([...text.matchAll(/^import\s+(type\s+)?\{([^}]*)\}\s*from\s+['"]([^'"]+)['"]/gm)]
        .flatMap((m) => list(m[2]).map((e) => [e.name, {name: e.local, from: m[3]}]))),
      text,
    };
    parsed.set(file, module);
    return module;
  };
  const resolve = (from, specifier) => {
    if (!specifier.startsWith('.')) return null;
    const base = path.posix.join(path.posix.dirname(from), specifier);
    const found = [base.replace(/\.js$/, ext), base + ext, `${base.replace(/\.js$/, '')}/index${ext}`].find((c) => files.has(c));
    if (!found) throw new Error(`Cannot resolve ${specifier} from ${from}`);
    return found;
  };
  // The module that declares `name` as seen from `file`, and its kind.
  const locate = (file, name, seen = new Set()) => {
    const key = `${file}#${name}`;
    if (seen.has(key)) return null;
    seen.add(key);
    const m = load(file);
    if (m.functions.has(name)) return {file, kind: 'function'};
    if (m.interfaces.has(name)) return {file, kind: 'interface'};
    if (m.others.has(name)) return {file, kind: 'other'};
    const follow = (from, local) => {
      const target = resolve(file, from);
      return target ? locate(target, local, seen) : {file: from, kind: 'external'};
    };
    const named = m.named.find((e) => e.name === name);
    if (named) return named.from ? follow(named.from, named.local) : locate(file, named.local, seen);
    const imported = m.imports.get(name);
    if (imported) return follow(imported.from, imported.name);
    for (const star of m.stars) {
      const found = follow(star, name);
      if (found) return found;
    }
    return null;
  };
  const exportedFunctions = (file, seen = new Set()) => {
    if (seen.has(file)) return [];
    seen.add(file);
    const m = load(file);
    const own = [...m.text.matchAll(/^export\s+(?:declare\s+)?(?:async\s+)?function\s+([\w$]+)/gm)].map((x) => x[1]);
    const named = m.named.filter((e) => !e.typeOnly).filter((e) => {
      const found = e.from ? (resolve(file, e.from) ? locate(resolve(file, e.from), e.local) : {kind: 'external'}) : locate(file, e.local);
      if (!found) throw new Error(`Cannot find ${e.local} exported from ${file}`);
      return found.kind === 'function';
    }).map((e) => e.name);
    return [...own, ...named, ...m.stars.flatMap((s) => resolve(file, s) ? exportedFunctions(resolve(file, s), seen) : [])];
  };
  const interfaceMembers = (from, name) => {
    const found = locate(from, name);
    if (found?.kind !== 'interface') throw new Error(`${name} is not an interface reachable from ${from}`);
    const {text} = load(found.file);
    const start = text.match(new RegExp(`^(?:export\\s+)?(?:declare\\s+)?interface\\s+${name}\\b([^{]*)\\{`, 'm'));
    if (/\bextends\b/.test(start[1])) throw new Error(`${name} extends another interface; its inherited members need review`);
    const open = start.index + start[0].length;
    const close = text.indexOf('\n}', open);
    return {file: found.file, members: members(stripComments(text.slice(open, close)))};
  };

  const client = interfaceMembers(entry, clientInterface);
  const groups = {};
  const clientMembers = [];
  for (const member of client.members) {
    if (member.method) {
      clientMembers.push(member.name);
      continue;
    }
    const type = member.property.match(/^([A-Za-z_$][\w$]*)$/)?.[1];
    if (!type) throw new Error(`${clientInterface}.${member.name} has type ${member.property}, which is not an operation group`);
    const group = interfaceMembers(client.file, type);
    const methods = group.members.filter((m) => m.method).map((m) => m.name);
    if (!methods.length || methods.length !== group.members.length) throw new Error(`${clientInterface}.${member.name} (${type}) is not an interface of methods`);
    groups[type] = {property: member.name, methods: [...new Set(methods)].sort()};
  }
  const sorted = (names) => [...new Set(names)].sort();
  return {
    client: {interface: clientInterface, members: sorted(clientMembers)},
    groups: Object.fromEntries(Object.entries(groups).sort(([a], [b]) => (a < b ? -1 : 1))),
    functions: sorted(exportedFunctions(entry)),
  };
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
async function packageFiles(name, version) {
  const meta = await (await fetch(`${registry}/${name.replace('/', '%2f')}/${version}`)).json();
  if (meta.version !== version) throw new Error(`The registry has no ${name}@${version}`);
  const tarball = Buffer.from(await (await fetch(meta.dist.tarball)).arrayBuffer());
  const [algorithm, expected] = meta.dist.integrity.split('-');
  if (createHash(algorithm).update(tarball).digest('base64') !== expected) throw new Error(`${name}@${version} failed its integrity check`);
  const tar = gunzipSync(tarball);
  const files = new Map();
  for (let offset = 0; offset + 512 <= tar.length;) {
    const header = tar.subarray(offset, offset + 512);
    if (header.every((b) => b === 0)) break;
    const field = (start, length) => header.subarray(start, start + length).toString('utf8').replace(/\0.*$/s, '');
    const size = parseInt(field(124, 12).trim() || '0', 8);
    const type = field(156, 1);
    const file = [field(345, 155), field(0, 100)].filter(Boolean).join('/');
    if ((type === '0' || type === '') && file.endsWith('.d.ts')) {
      files.set(file.replace(/^package\//, ''), tar.subarray(offset + 512, offset + 512 + size).toString('utf8'));
    }
    offset += 512 + Math.ceil(size / 512) * 512;
  }
  return {files, integrity: meta.dist.integrity};
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
    const source = owners(sourceFiles(checkout, commit, `${dir}/src`), 'index.ts', '.ts');
    const published = await packageFiles(pkg.name, release);
    const declared = owners(published.files, 'dist/index.d.ts', '.d.ts');
    const diff = differences(source, declared);
    if (diff.length) throw new Error(`${tag} ${target} disagrees with ${pkg.name}@${release}:\n  ${diff.join('\n  ')}`);
    targets[target] = {package: {name: pkg.name, version: release, integrity: published.integrity}, ...source};
  }
  return {release, source: {repository, tag, commit}, targets};
}

const [checkout, ...releases] = process.argv.slice(2);
if (!checkout || !releases.length) {
  console.error('Usage: node scripts/javascript-owner-maps.mjs <briosa-js checkout> <release>...');
  process.exit(2);
}
await mkdir(outDir, {recursive: true});
for (const release of releases) {
  const map = await ownerMap(path.resolve(checkout), release);
  const file = path.join(outDir, `${release}.json`);
  await writeFile(file, `${JSON.stringify(map, null, 2)}\n`);
  const counts = Object.entries(map.targets).map(([target, t]) => `SA ${target}: ${t.client.members.length} client members, ${Object.keys(t.groups).length} groups with ${Object.values(t.groups).reduce((n, g) => n + g.methods.length, 0)} methods, ${t.functions.length} package-level functions`);
  console.log(`${path.relative(process.cwd(), file)} from ${map.source.tag} (${map.source.commit})\n  ${counts.join('\n  ')}`);
}
