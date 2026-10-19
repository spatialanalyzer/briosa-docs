import {availableParallelism} from 'node:os';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

// Docusaurus reads these settings when its CLI modules are first imported.
// Each renderer loads the full route registry, so cap workers before startup.
const env = {...process.env};
env.DOCUSAURUS_SSG_WORKER_THREAD_COUNT ??= String(Math.min(2, availableParallelism()));
// A renderer's heap grows with every page until Docusaurus replaces the worker,
// by default at 1 GB. Replacing it at 500 MB lowers the build's peak by about
// 1 GB (#94) for a few more worker restarts and no measurable build time.
env.DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY ??= String(500_000_000);
const cli = fileURLToPath(new URL('../node_modules/@docusaurus/core/bin/docusaurus.mjs', import.meta.url));
const result = spawnSync(process.execPath, [cli, 'build', ...process.argv.slice(2)], {env, stdio: 'inherit'});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
