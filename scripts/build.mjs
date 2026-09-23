import {availableParallelism} from 'node:os';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

// Docusaurus reads this setting when its CLI modules are first imported.
// Each renderer loads the full route registry, so cap workers before startup.
const env = {...process.env};
env.DOCUSAURUS_SSG_WORKER_THREAD_COUNT ??= String(Math.min(2, availableParallelism()));
const cli = fileURLToPath(new URL('../node_modules/@docusaurus/core/bin/docusaurus.mjs', import.meta.url));
const result = spawnSync(process.execPath, [cli, 'build', ...process.argv.slice(2)], {env, stdio: 'inherit'});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
