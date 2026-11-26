// Offline checks of scripts/javascript-owner-maps.mjs, which builds the owner
// maps that tests/api-reference-working.test.cjs uses.
const test = require('node:test');
const assert = require('node:assert/strict');

const generator = () => import('../scripts/javascript-owner-maps.mjs');

test('the owner-map generator lists a callable exported value as a package-level function', async () => {
  const {owners} = await generator();
  const client = (indent) => [
    'export interface BriosaClient {',
    `${indent}readonly gdtOperations: GdtOperations;`,
    `${indent}start(): Promise<void>;`,
    `${indent}[Symbol.asyncDispose](): Promise<void>;`,
    '}',
    'export interface GdtOperations {',
    `${indent}makeFeatureChecks(): Promise<void>;`,
    '}',
    '',
  ].join('\n');
  const expected = {
    client: {interface: 'BriosaClient', members: ['[Symbol.asyncDispose]', 'start']},
    groups: {GdtOperations: {property: 'gdtOperations', methods: ['makeFeatureChecks']}},
    functions: ['getWorkingDirectory', 'newUtility'],
  };
  const source = new Map([
    ['index.ts', "export const newUtility = (): void => {};\nexport { getWorkingDirectory } from './client.js';\nexport type { BriosaClient } from './client.js';\nexport class BriosaError extends Error {}\nexport const Units = { mm: 'mm' } as const;\n"],
    ['client.ts', `${client('  ')}export function getWorkingDirectory(client: BriosaClient): Promise<string> {\n  return Promise.resolve('');\n}\n`],
  ]);
  assert.deepEqual(owners(source, 'index.ts'), expected);
  const declarations = new Map([
    ['dist/index.d.ts', "export declare const newUtility: () => void;\nexport { getWorkingDirectory } from './client.js';\nexport type { BriosaClient } from './client.js';\nexport declare class BriosaError extends Error {\n}\nexport declare const Units: {\n    readonly mm: \"mm\";\n};\n"],
    ['dist/client.d.ts', `${client('    ')}export declare function getWorkingDirectory(client: BriosaClient): Promise<string>;\n`],
  ]);
  assert.deepEqual(owners(declarations, 'dist/index.d.ts'), expected);
});

test('the owner-map generator stops on an export or member it cannot classify', async () => {
  const {owners} = await generator();
  const files = (index) => new Map([
    ['index.ts', `${index}\nexport type { BriosaClient } from './client.js';\n`],
    ['client.ts', 'export interface BriosaClient {\n  start(): Promise<void>;\n}\n'],
  ]);
  assert.throws(() => owners(files("import { helper } from 'unpublished-package';\nexport const run = helper;"), 'index.ts'), /The export run of index\.ts has a type the compiler cannot resolve; it needs review/);
  const group = new Map([
    ['index.ts', "export type { BriosaClient } from './client.js';\n"],
    ['client.ts', 'export interface BriosaClient {\n  readonly settings: { readonly name: string };\n}\n'],
  ]);
  assert.throws(() => owners(group, 'index.ts'), /BriosaClient\.settings has type .* which is not an operation-group interface/);
});

// A ustar header for one regular file, with `size` written as given.
function tarHeader(name, size) {
  const header = Buffer.alloc(512);
  header.write(name, 0, 'latin1');
  for (const [offset, value] of [[100, '0000644\0'], [108, '0000000\0'], [116, '0000000\0'], [136, '00000000000\0'], [148, '        '], [156, '0'], [257, 'ustar\0'], [263, '00']]) header.write(value, offset, 'latin1');
  header.write(typeof size === 'number' ? `${size.toString(8).padStart(11, '0')}\0` : size, 124, 'latin1');
  const sum = header.reduce((n, b) => n + b, 0);
  header.write(`${sum.toString(8).padStart(6, '0')}\0 `, 148, 'latin1');
  return header;
}

test('the owner-map generator rejects a truncated or malformed package archive', async () => {
  const {readTar} = await generator();
  const text = 'export declare function f(): void;\n';
  const member = Buffer.concat([tarHeader('package/dist/index.d.ts', text.length), Buffer.from(text), Buffer.alloc(512 - text.length)]);
  const end = Buffer.alloc(1024);
  assert.deepEqual(readTar(Buffer.concat([member, end])), new Map([['dist/index.d.ts', text]]));
  // A member shorter than its header declares, as in a cut-off download.
  assert.throws(() => readTar(Buffer.concat([tarHeader('package/dist/index.d.ts', 29), Buffer.from(text.slice(0, 5))])), /The archive is truncated: package\/dist\/index\.d\.ts declares 29 bytes, but 5 bytes remain/);
  assert.throws(() => readTar(member), /without an end-of-archive block/);
  const corrupt = Buffer.from(member);
  corrupt[0] ^= 1;
  assert.throws(() => readTar(Buffer.concat([corrupt, end])), /fails its checksum/);
  assert.throws(() => readTar(Buffer.concat([tarHeader('package/dist/index.d.ts', '0000000043x\0'), Buffer.alloc(512), end])), /has a malformed size "0000000043x"/);
});
