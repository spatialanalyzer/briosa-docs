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

`scripts/javascript-owner-maps.mjs` builds a map from the tag's source,
starting at `targets/<target>/src/index.ts`, and stops unless the published
package's type declarations give the same owners:

```powershell
git clone https://github.com/spatialanalyzer/briosa-js ../briosa-js
node scripts/javascript-owner-maps.mjs ../briosa-js 0.6.0
```

Build the map when you cut a JavaScript reference snapshot for a new client
release, and when the working reference moves to a new release. Pass several
releases to rebuild several maps.

## References

`references.json` records:

- `working`: the client release that the working reference, `api/javascript`,
  documents. Each versioned snapshot uses the map of its own release. Pages
  that state a client release must state the one they are checked against.
- `knownDifferences`: differences between the reference and its maps that
  await a separate decision. The test fails on any other difference, and on a
  listed difference that it no longer finds. Keys are reference folders; `*`
  applies to every folder.

The listed differences are:

- `*`, undocumented: `createConstructionOperations`, `createGdtOperations`,
  `createInstrumentOperations`, `createRobotCalibrationApplianceNodeOperations`
  and `createRobotOperations`. Every release exports these package-level
  functions, which build an operation group from a client. No page declares
  them.
- Snapshots 0.1.0 to 0.4.0, undocumented: `getServerSnapshot`. These releases
  have the `BriosaClient` member, but no page declares it.
- Snapshot 0.1.0, `documentedOwners`: every operation-group method, 461 in
  all. The 0.1.0 pages declare them as package-level functions. 450 are
  written as `function <method>(briosa: BriosaClient, ...)`, and some examples
  call them that way. The v0.1.0 client exposes them only through its group
  properties, such as `briosa.constructionOperations.constructBSplineFromPoints(...)`.
  The other 11, on `gdt-construction.md`, are declared with `function` but
  without the client, and their examples call them through
  `briosa.gdtOperations`.

The 0.1.0 reference documents only SA 2026.1.0529.7, so the check does not use
the 0.1.0 map's SA 2024.1.0508.5 entries.
