# Briosa documentation agent guide

Read this file before changing site content, navigation, assets, workflows, or
repository settings.

## Source-of-truth boundary

- `spatialanalyzer/briosa` defines public protobuf contracts, supported
  operations, exact-target compatibility, and runtime behavior.
- This repository explains that surface. Never make prose, examples, or
  navigation the accidental source of truth for protocol semantics.
- Document only committed, supported behavior. In-progress branches, retained
  inventories, and historical evidence are not public API.
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
