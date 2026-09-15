---
title: Contribute Documentation
---

# Contribute Documentation

Documentation work follows the same issue-driven workflow as the server:

1. start from a focused issue;
2. create `<issue-number>-<short-description>`;
3. ground released API claims in committed source, and ground **Unreleased** API
contracts in an explicitly reviewed implementation issue;
4. run `npm ci` and `npm run check` with Node.js 24; and
5. open a focused pull request.

## Choose the Right Section

- Add task-oriented product guidance to `docs/`
- Add server and protobuf reference material to `api/grpc/`
- Add client-specific reference material to `api/dotnet/`, `api/python/`, or
  `api/javascript/`
- Add SpatialAnalyzer command coverage, support status, rationale, and
  alternatives to `mp-command-catalog/`

Supported catalog entries should link to the API reference instead of
duplicating client usage guidance.

## Draft and Release API Contracts

Each API reference has its own Docusaurus release history. The gRPC reference
is published as **0.5.1**, matching Briosa Server 0.5.1. Product guides and the
MP catalog remain unversioned.

The source directories under `api/` hold working documentation. Unpublished
client references are labeled **Unreleased**. The server's working reference
is omitted from the public build while the released snapshot is the default.
Do not present a source implementation as an available package.

Before cutting a reference, reconcile its contracts and availability against
the exact published product. Preserve unimplemented proposals as unavailable
and keep validation qualifications separate from release status. Then use the
standard versioning command for that API instance, with the actual release:

```powershell
npm run docusaurus docs:version:grpc <server-version>
npm run docusaurus docs:version:dotnet <dotnet-package-version>
npm run docusaurus docs:version:python <python-package-version>
npm run docusaurus docs:version:javascript <javascript-package-version>
```

Docusaurus copies the API source and sidebar into plugin-specific versioned
directories. Update the plugin's default version after a new release and verify
incoming links, version selectors, and search metadata. Apply factual corrections
to both the maintained snapshot and working source where they still apply.
Do not snapshot a client reference before its package is published, and do not
invent a separate whole-site version to represent several independent products.

## Review Checklist

- Does each released API claim match committed implementation? If the page is
  Unreleased, does it trace to the reviewed contract that the implementation issue
  must satisfy?
- Does catalog content follow the [MP Command Catalog Authoring Guide](./mp-command-catalog.md)
  without presenting planned or unsupported work as API?
- Is the exact SpatialAnalyzer target explicit where compatibility matters?
- Are runtime observations described as evidence rather than vendor guarantees?
- Are returned values, paths, credentials, licensed data, and proprietary text absent?
- Does the page preserve the independent-project disclaimer?
- Do page titles, section headings, navigation labels, and table headers use
  title case while preserving exact API identifiers and MP Editor labels?
- Do all links and assets work from the site root (`/`) at `https://briosa.dev/`?
- Is the page readable with keyboard navigation, high zoom, and reduced motion?

Edit links on each page open a change against this repository. Released
protocol and runtime corrections should begin in
[spatialanalyzer/briosa](https://github.com/spatialanalyzer/briosa). A reviewed
Unreleased API contract may begin here, but it must be implemented and verified
before that API documentation is snapshotted as a release.
