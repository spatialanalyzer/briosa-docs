# JavaScript Owner Maps

`tests/api-reference-working.test.cjs` checks that the JavaScript reference
documents each method under the owner the released client gives it. A method
has one of three owners:

- an operation-group interface, such as `GdtOperations`, reached through a
  client property, such as `briosa.gdtOperations`;
- the client interface, `BriosaClient`, for its direct members; or
- the package, for a package-level function such as `getWorkingDirectory`.

The check runs offline under `npm run check`. It never reads GitHub or npm.

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
