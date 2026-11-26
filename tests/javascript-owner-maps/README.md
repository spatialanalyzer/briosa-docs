# JavaScript Owner Maps

`tests/api-reference-working.test.cjs` checks that the JavaScript reference
documents each method under the owner the released client gives it. A method
has one of three owners:

- an operation-group interface, such as `GdtOperations`, reached through a
  client property, such as `briosa.gdtOperations`;
- the client interface, `BriosaClient`, for its direct members; or
- the package, for a package-level function such as `getWorkingDirectory`.

The check runs offline under `npm run check`. It never reads GitHub or npm.

## Supported Declaration Forms

The check accepts the declaration forms below and rejects the others it reads.
It is not complete: [Known Limits](#known-limits) lists forms it does not read.

The site's Markdown parser finds every code block on every page. Blocks in
`ts`, `typescript`, `tsx`, `mts`, `cts`, `js`, `javascript`, `jsx`, `mjs` or
`cjs`, with any metadata after the language, are read with the TypeScript
parser, and each declaration in them should take one of the forms below. A
block in any other language, or raw HTML, may not name a pinned method
followed by `(`.

These forms fail as unsupported, with the page line, the owner and method,
and the form to use:
- a class other than an error class;
- a namespace or module, or a nested declaration;
- an object type or type alias with a method, call signature or function type;
- an object-literal method;
- a function value outside a call.

A parse error fails with the compiler's message, apart from the bare
signatures and placeholders below.

A data interface or error class may not declare its own method under a name
that a pinned method has, because the check cannot tell it from a misplaced
pinned method. Describe such a method in prose, for example
`FeatureValidator.makeFeatureChecks`, and leave it out of the declaration.

The counts are the blocks that use each form across the eleven reference
folders, which have 14,107 blocks in all.

| Form | Example | Blocks |
| --- | --- | ---: |
| Group interface: a root, unexported interface whose label names its only method; an overload set repeats that name | `// Member of GdtOperations (briosa.gdtOperations.makeFeatureChecks(...))`<br>`interface GdtOperations { makeFeatureChecks(collection: CollectionName): Promise<void>; }` | 4,497 |
| Bare member signature, for a client member: a root statement on its own line that parses as one interface member; indentation and a space before `(` are allowed | `stop(): Promise<void>;` | 136 |
| Package-level function: a root `function`, `export function` or `export declare function` without a body | `export declare function getWorkingDirectory(client: BriosaClient): Promise<string>;` | 6,533 |
| Data interface: an exported interface whose methods and function-typed properties are not pinned methods | `export interface BriosaServerSnapshot { readonly briosaVersion: string; supports(method: string): boolean; }` | 11,718 |
| Data type: a type alias with no method, call signature or function type | `export type InstallationScope = 'machine' \| 'user' \| 'portable';` | 470 |
| Value object: an exported constant with no function value | `export const AngularUnits = Object.freeze({ degrees: 'degrees' });` | 434 |
| Error class: an exported class that extends another, with only properties and getters | `export class BriosaOperationError extends BriosaError { readonly operationId: string; }` | 19 |
| Enum | `export enum GdtFeatureType { Diameter = "diameter" }` | 1 |
| Example: imports, statements and local constants; a function value only as a call argument | `await getWorkingDirectory(briosa, { onMpCompletion: ({ state }) => {} });` | 835 |
| Placeholder: `...` standing for a value before `,`, `)`, `]` or `}` | `await getLineProperties(briosa, { lineName: ... });` | 371 |

A labelled client interface (`// Member of BriosaClient`) is not a supported
form; client members are bare signatures. To support a new form, change the
check and this table in the same reviewed change.

## Known Limits

The check reads declarations, and these still pass without an owner check.
https://github.com/spatialanalyzer/briosa-docs/issues/154 tracks them.

- **A type alias that reuses another group's signature**, through `Pick` or
  an indexed access, such as
  `export type RobotOperations = Pick<GdtOperations, "makeFeatureChecks">;` or
  `{ readonly makeFeatureChecks: GdtOperations["makeFeatureChecks"] }`.
- **A JavaScript object or destructuring export**, such as
  `export const robotOperations = { makeFeatureChecks };` after
  `const { makeFeatureChecks } = briosa.gdtOperations;`, or
  `export const { makeFeatureChecks } = briosa.gdtOperations;`.
- **A JSDoc type in a `js` fence**, such as `@typedef {object} RobotOperations`
  with `@property {(collection: string) => Promise<void>} makeFeatureChecks`.
- **A literal computed method name**, such as `["makeFeatureChecks"](): void`
  on a data interface.
- **Text outside declarations.** Prose, inline code, `text` fences and calls
  in examples are outside a declaration check. A `text` fence is read only for
  a pinned name followed by `(`. A sentence or example that calls
  `briosa.robotOperations.makeFeatureChecks(...)` passes.

## Maps

Each `<release>.json` file is the owner map of one
[briosa-js](https://github.com/spatialanalyzer/briosa-js) release, for each of
its exact targets. `source` records the tag and commit it was read from, and
each target's `package` records the npm package and the registry integrity
value of the tarball it was compared with. Do not edit a map by hand.

`scripts/javascript-owner-maps.mjs` reads a map with the TypeScript compiler
from the tag's source, starting at `targets/<target>/src/index.ts`. It stops
unless the published package's type declarations give the same owners. For
example, to rebuild the 0.5.0 map:

```powershell
git clone https://github.com/spatialanalyzer/briosa-js ../briosa-js
node scripts/javascript-owner-maps.mjs ../briosa-js 0.5.0
```

For a newly published client release, pass its version instead, such as
`0.6.0` once tag `v0.6.0` and its npm packages exist. The script writes
`tests/javascript-owner-maps/<release>.json`. Build the map when you cut a
JavaScript reference snapshot for that release. Pass several releases to
rebuild several maps.

## Working Reference

`working.json` records the client release that the working reference,
`api/javascript`, documents. Update it when the working reference moves to a
new release. Each versioned snapshot uses the map of its own release.

For each reference, the check covers the default target and every exact target
that the reference's sidebar lists (`sidebarsJavascript.ts` for the working
reference, `javascript_versioned_sidebars/` for snapshots). A listed target
without its folder fails. Each map must name the release it is checked against,
and each target's overview must state "This is the **<release>** client
reference" for that release.

## Recorded Exceptions

These files record documentation errors in the published reference, which
https://github.com/spatialanalyzer/briosa-docs/issues/152 corrects. As each
page is fixed, remove its entries. Never add entries by rerunning the check.

- **`omissions.json`.** Pinned methods that no page declares, reviewed for an
  explicit reference, release, and exact target:
  - `createConstructionOperations`, `createGdtOperations`,
    `createInstrumentOperations`,
    `createRobotCalibrationApplianceNodeOperations` and `createRobotOperations`
    are missing from all eleven reference folders. Every release exports these
    package-level functions, which build an operation group from a client.
  - `BriosaClient.getServerSnapshot` is missing from 0.1.0 and from both
    targets of 0.2.0, 0.3.0 and 0.4.0.

  Each method in each scope is checked on its own. Once it is documented
  there, the check fails until that scope is removed. An omission in a scope
  that is not listed, such as a new release, fails.
- **`baseline-0.1.0.json`.** The frozen baseline of the 0.1.0 snapshot for
  SA 2026.1.0529.7. Its pages declare all 461 operation-group methods as
  package-level functions:
  - 450 of them are written as `function <method>(briosa: BriosaClient, ...)`,
    and 154 of those also show a call in that form. The v0.1.0 client exposes
    these methods only through its group properties, such as
    `briosa.constructionOperations.constructBSplineFromPoints(...)`.
  - The other 11, on `gdt-construction.md`, are declared with `function` but
    without the client, and their examples call them through
    `briosa.gdtOperations`.

  Each entry records the page, method, pinned owner, documented owner, and the
  number of declarations that may have that error. Any other wrong owner in that
  scope fails, and so does a different count or an entry that no longer occurs.
  The baseline was read once from the published 0.1.0 snapshot and reviewed
  against the v0.1.0 tag and package.

The 0.1.0 reference documents only SA 2026.1.0529.7, as its sidebar shows, so
the check does not use the 0.1.0 map's SA 2024.1.0508.5 entries.
