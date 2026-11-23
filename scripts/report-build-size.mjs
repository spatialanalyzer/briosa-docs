import {appendFileSync} from 'node:fs';
import {open, readdir, stat} from 'node:fs/promises';
import path from 'node:path';

// Reports the size of the built site, which the Pages workflow uploads as its
// artifact, against the budgets in #94 and #113: excluding the frozen
// compatibility redirect documents, under 20,000 files and 800 MB; in total,
// under GitHub Pages' 1 GB limit for a published site. MB and GB are decimal.
// A redirect document is a static file the API reference plugin writes after
// the build, including the directory index copied for a dotted address. Its
// head carries this marker. Measurement never fails the build.
const marker = Buffer.from('<script>window.briosaRedirect=');
const budget = {bytes: 800e6, files: 20_000, limit: 1e9};

const root = path.resolve(process.argv[2] ?? 'build');
const github = process.env.GITHUB_ACTIONS === 'true';
const warn = (message) => console.log(github ? `::warning title=Artifact size::${message}` : `Warning: ${message}`);
const mb = (bytes) => `${(bytes / 1e6).toFixed(1)} MB`;
const count = (n) => n.toLocaleString('en-US');

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
  const total = {files: 0, bytes: 0};
  const redirects = {files: 0, bytes: 0};
  const files = (await readdir(root, {recursive: true, withFileTypes: true})).filter((entry) => entry.isFile());
  // Read files concurrently: the site has tens of thousands of them.
  let next = 0;
  await Promise.all(Array.from({length: 32}, async () => {
    while (next < files.length) {
      const entry = files[next++];
      const file = path.join(entry.parentPath, entry.name);
      const {size} = await stat(file);
      total.files++;
      total.bytes += size;
      if (entry.name.endsWith('.html') && await isRedirect(file)) {
        redirects.files++;
        redirects.bytes += size;
      }
    }
  }));
  const pages = {files: total.files - redirects.files, bytes: total.bytes - redirects.bytes};
  const line = `Pages artifact: ${count(total.files)} files, ${mb(total.bytes)} of GitHub Pages' 1 GB limit. `
    + `Excluding ${count(redirects.files)} frozen redirect documents (${mb(redirects.bytes)}): ${count(pages.files)} files, ${mb(pages.bytes)} of the 800 MB budget in #113.`;
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, line + '\n');
  if (total.files === 0) warn(`No files were found in ${root}, so the artifact was not measured.`);
  if (pages.bytes > budget.bytes) warn(`Excluding redirect documents, the artifact is ${mb(pages.bytes)}, above the 800 MB budget in #113.`);
  if (pages.files >= budget.files) warn(`Excluding redirect documents, the artifact has ${count(pages.files)} files, above the 20,000-file budget in #94.`);
  if (total.bytes > budget.limit) warn(`The artifact is ${mb(total.bytes)}, above GitHub Pages' 1 GB limit for a published site.`);
} catch (error) {
  warn(`The artifact was not measured: ${error.message}`);
}
