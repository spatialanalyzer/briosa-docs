# Briosa documentation agent guide

Read this file before changing site content, navigation, assets, workflows, or
repository settings.

## Source-of-truth boundary

- `spatialanalyzer/briosa` defines public protobuf contracts, supported
  operations, exact-target compatibility, and runtime behavior.
- This repository explains that surface and publishes the complete,
  exact-target MP command catalog. Never make prose, examples, navigation, or
  catalog pages the accidental source of truth for protocol semantics.
- Product and operation guidance may describe only committed, supported Briosa
  behavior. The MP command catalog may also document selected, under-review,
  deferred, intentionally excluded, and SDK-unavailable commands when each
  entry is clearly labeled and traces to a reviewed disposition.
- A catalog entry does not make a command part of the Briosa API. Only the
  `supported` catalog status is a runtime-support claim, and it must agree with
  authoritative handwritten protobuf, operation registration, and runtime
  capability source in `spatialanalyzer/briosa`.
- Retained inventories and historical evidence may support documentation
  review, but their membership never establishes support or v1 selection.
- Organize catalog content as logical category or workflow pages containing
  several related MP commands. Do not default to one page per command.
- Keep the catalog content-first while its information architecture matures.
  Do not introduce a separate command-data schema, generated index, or
  catalog-specific validation framework without a focused reviewed issue.
- Preserve MP terminology where the source contract does.

## Intellectual property and positioning

- Briosa is Apache-2.0 and independent.
- SpatialAnalyzer, the SA SDK, their brands, binaries, and proprietary
  implementation are Hexagon intellectual property.
- State that users need a separately installed, running, and licensed
  SpatialAnalyzer environment.
- Do not imply affiliation, endorsement, or support by Hexagon.
- Do not copy vendor text wholesale or commit proprietary binaries, licensed
  data, machine-specific paths, credentials, or raw arguments/results.
- Catalog entries must contain concise project-authored facts, rationale, and
  recommendations. Reference only safe, committed project evidence; never
  publish raw installed documentation or generated SDK samples.

## Site development

- Use Node.js 24 and the committed lockfile.
- Keep links valid under the GitHub Pages base path `/briosa-docs/`.
- Prefer accessible semantic HTML and CSS. Preserve keyboard focus, readable
  contrast, and reduced-motion behavior.
- Run `npm ci` and `npm run check` before proposing changes.
- Pin GitHub Actions to immutable full commit SHAs.
- Pull-request jobs must remain read-only, GitHub-hosted, and secret-free.

## Workflow

Start from an issue and use a short-lived branch named
`<issue-number>-<short-description>`. Keep the change scoped to that issue.
Use `Closes #<issue-number>` only when every acceptance criterion is met.
