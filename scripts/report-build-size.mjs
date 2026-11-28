import {createHash} from 'node:crypto';
import {appendFileSync, existsSync, readFileSync} from 'node:fs';
import {open, readdir, readFile, stat} from 'node:fs/promises';
import path from 'node:path';

// Reports the size and health of the built site against Cloudflare Workers
// Static Assets (Workers Paid) limits and project budgets (#146):
//   - Hard limits: 100,000 static asset files per Worker version; 25 MiB per file.
//   - Project warning budgets: 80,000 manifest files, 20 MiB per file, 1,500 MB total.
// Excludes Wrangler control files (.assetsignore, _headers, _redirects) and
// filenames listed in build/.assetsignore (such as .nojekyll) so the count
// matches the uploaded Workers asset manifest. Measurement never fails the build.
const marker = Buffer.from('<script>window.briosaRedirect=');
const workersControlFiles = new Set(['.assetsignore', '_headers', '_redirects']);
const dottedApiRoute = /^api\/(?:grpc|dotnet|python|javascript)\/.*\.\d+$/;
const MiB = 1024 * 1024;
const budget = {
  filesWarn: 80_000,
  filesLimit: 100_000,
  maxFileWarn: 20 * MiB,
  maxFileLimit: 25 * MiB,
  totalBytesWarn: 1_500e6,
};

const root = path.resolve(process.argv[2] ?? 'build');
const github = process.env.GITHUB_ACTIONS === 'true';
const warn = (message) => console.log(github ? `::warning title=Artifact size::${message}` : `Warning: ${message}`);
const mb = (bytes) => `${(bytes / 1e6).toFixed(1)} MB`;
const mib = (bytes) => `${(bytes / MiB).toFixed(2)} MiB`;
const count = (n) => n.toLocaleString('en-US');

function loadAssetsIgnore(dir) {
  const ignoreFile = path.join(dir, '.assetsignore');
  if (!existsSync(ignoreFile)) return new Set();
  const names = new Set();
  for (const rawLine of readFileSync(ignoreFile, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#') || line.startsWith('!')) continue;
    names.add(line.replace(/^\//, ''));
  }
  return names;
}

async function isRedirect(file) {
  const handle = await open(file);
  try {
    const head = Buffer.alloc(4096);
    const {bytesRead} = await handle.read(head, 0, head.length, 0);
    return head.subarray(0, bytesRead).includes(marker);
  } finally {
    await handle.close();
  }
}

try {
  const ignored = loadAssetsIgnore(root);
  const total = {files: 0, bytes: 0};
  const redirects = {files: 0, bytes: 0};
  let largest = {path: '', bytes: 0};
  const byLower = new Map();
  const byRoute = new Map();

  const files = (await readdir(root, {recursive: true, withFileTypes: true})).filter((entry) => {
    if (!entry.isFile()) return false;
    const rel = path.relative(root, path.join(entry.parentPath, entry.name)).split(path.sep).join('/');
    if (workersControlFiles.has(rel)) return false;
    const parts = rel.split('/');
    if (ignored.has(rel) || parts.some((part) => ignored.has(part))) return false;
    return true;
  });

  // Read files concurrently: the site has tens of thousands of them.
  let next = 0;
  await Promise.all(Array.from({length: 32}, async () => {
    while (next < files.length) {
      const entry = files[next++];
      const file = path.join(entry.parentPath, entry.name);
      const rel = path.relative(root, file).split(path.sep).join('/');
      const {size} = await stat(file);
      total.files++;
      total.bytes += size;
      if (size > largest.bytes) largest = {path: rel, bytes: size};

      const lower = rel.toLowerCase();
      if (!byLower.has(lower)) byLower.set(lower, []);
      byLower.get(lower).push(rel);

      let base = rel;
      let kind = 'exact';
      if (rel === 'index.html') {
        base = '';
        kind = 'index';
      } else if (rel.endsWith('/index.html')) {
        base = rel.slice(0, -'/index.html'.length);
        kind = 'index';
      } else if (rel.endsWith('.html')) {
        base = rel.slice(0, -'.html'.length);
        kind = 'html';
      }
      if (!byRoute.has(base)) byRoute.set(base, []);
      byRoute.get(base).push({kind, rel, file});

      if (entry.name.endsWith('.html') && await isRedirect(file)) {
        redirects.files++;
        redirects.bytes += size;
      }
    }
  }));

  const caseCollisions = [...byLower.values()].filter((list) => list.length > 1);
  let expectedDottedPairs = 0;
  const unexpectedCollisions = [];
  for (const [base, entries] of byRoute) {
    if (entries.length <= 1) continue;
    const kinds = entries.map((e) => e.kind).sort().join('+');
    if (kinds === 'html+index' && dottedApiRoute.test(base)) {
      const hashes = await Promise.all(entries.map(async (e) => createHash('sha256').update(await readFile(e.file)).digest('hex')));
      if (new Set(hashes).size === 1) {
        expectedDottedPairs++;
        continue;
      }
    }
    unexpectedCollisions.push(`/${base} (${entries.map((e) => e.rel).join(', ')})`);
  }

  const pages = {files: total.files - redirects.files, bytes: total.bytes - redirects.bytes};
  const line = `Workers asset manifest: ${count(total.files)} files of ${count(budget.filesLimit)} limit (${count(budget.filesWarn)} budget), `
    + `${mb(total.bytes)} total (${mb(budget.totalBytesWarn)} budget), `
    + `largest file ${mib(largest.bytes)} of 25 MiB limit (${largest.path || 'none'}). `
    + `Excluding ${count(redirects.files)} frozen redirect documents (${mb(redirects.bytes)}): ${count(pages.files)} files, ${mb(pages.bytes)}. `
    + `Collisions: ${caseCollisions.length} case, ${unexpectedCollisions.length} unexpected path-form (${expectedDottedPairs} expected identical dotted api/ pairs).`;
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, line + '\n');

  if (total.files === 0) warn(`No files were found in ${root}, so the artifact was not measured.`);
  if (total.files > budget.filesLimit) warn(`Manifest has ${count(total.files)} files, above Cloudflare Workers Paid's ${count(budget.filesLimit)}-file limit.`);
  else if (total.files > budget.filesWarn) warn(`Manifest has ${count(total.files)} files, above the ${count(budget.filesWarn)}-file warning budget in #146.`);
  if (largest.bytes > budget.maxFileLimit) warn(`Largest file ${largest.path} is ${mib(largest.bytes)}, above Cloudflare Workers' 25 MiB per-file limit.`);
  else if (largest.bytes > budget.maxFileWarn) warn(`Largest file ${largest.path} is ${mib(largest.bytes)}, above the 20 MiB per-file warning budget in #146.`);
  if (total.bytes > budget.totalBytesWarn) warn(`Total build size is ${mb(total.bytes)}, above the ${mb(budget.totalBytesWarn)} warning budget in #146.`);
  if (caseCollisions.length > 0) warn(`Found ${caseCollisions.length} case-only path collision(s): ${caseCollisions.slice(0, 5).map((c) => c.join(' vs ')).join('; ')}.`);
  if (unexpectedCollisions.length > 0) warn(`Found ${unexpectedCollisions.length} unexpected or diverging path-form collision(s): ${unexpectedCollisions.slice(0, 5).join('; ')}.`);
} catch (error) {
  warn(`The artifact was not measured: ${error.message}`);
}
