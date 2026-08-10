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
  behavior. The MP command catalog may also document next, undecided,
  uncommitted, excluded, and SDK-unavailable commands when each entry is
  clearly labeled and traces to a reviewed disposition.
- A catalog entry does not make a command part of the Briosa API. Only the
  `current` catalog status is a runtime-support claim, and it must agree with
  authoritative handwritten protobuf, operation registration, and runtime
  capability source in `spatialanalyzer/briosa`.
- Retained inventories and historical evidence may support documentation
  review, but their membership never establishes current or next status.
- Preserve the exact target's SpatialAnalyzer MP group hierarchy as the primary
  catalog information architecture. For an SDK-observed command, use the
  reviewed exact-target group path supplied by the maintainers.
- Keep exact-target group pages as lightweight navigation indexes that link to
  canonical cross-version command sections. A canonical section records
  reviewed SA availability, group history, signature revisions, and per-target
  Briosa status without duplicating the full command prose for every SA release.
- Preserve one stable canonical anchor per reviewed command lineage. Do not
  merge renamed or superseded identities into one lineage without maintainer
  review. When search is introduced, index canonical command sections rather
  than the exact-target navigation indexes.
- Never expose private evidence-repository paths or internal evidence filenames
  in the published site. Preserve the exact MP editor label and punctuation in
  catalog prose, including labels such as `BSplines` and `API - LADAR`.
- Use workflow pages only as secondary cross-links. Do not move a command out
  of its SA group to create a Briosa-specific primary grouping, and do not
  default to one page per command.
- Some documentation-only records and installed-document paths use labels that
  differ from the SDK-observed hierarchy. Preserve the evidence and resolve those
  placements through reviewed catalog work instead of silently inventing a
  crosswalk.
- Keep the catalog content-first while its information architecture matures.
  Do not introduce a separate command-data schema, generated index, or
  catalog-specific validation framework without a focused reviewed issue.
- Preserve MP terminology where the source contract does.
- Use title case for page titles, structural headings, navigation labels,
  footer headings, and table headers. Preserve exact API identifiers and MP
  Editor labels even when their casing differs from the surrounding site.

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
