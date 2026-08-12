---
title: Contribute Documentation
---

# Contribute Documentation

Documentation work follows the same issue-driven workflow as the server:

1. start from a focused issue;
2. create `<issue-number>-<short-description>`;
3. ground released API claims in committed source, and ground **Next** API
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

Each API section is an independent Docusaurus docs plugin with its own release
history. Source pages under `api/grpc/`, `api/dotnet/`, `api/python/`, and
`api/javascript/` are the built-in **Next** version. They may define a reviewed
public contract before its coordinated implementation. Every API page must
display Docusaurus's built-in **Version: Next** badge and section-specific
version selector, and it must not claim that current packages already provide
the contract.

The server and three clients may release at different versions. After an API's
implementation and conformance tests satisfy its Next contract, snapshot only
that API instance:

```powershell
npm run docusaurus docs:version:grpc 0.2.0
npm run docusaurus docs:version:dotnet 0.2.0
npm run docusaurus docs:version:python 0.2.0
npm run docusaurus docs:version:javascript 0.2.0
```

Replace each example version with the actual product release. Docusaurus copies
that API's current source and sidebar into its plugin-specific versioned
directories. Continued work remains in the source directory as the next
unreleased contract.

Do not snapshot the version-independent product guidance or MP Command Catalog
as part of an API release.

## Review Checklist

- Does each released API claim match committed implementation? If the page is
  Next, does it trace to the reviewed contract that the implementation issue
  must satisfy?
- Does catalog content follow the [MP Command Catalog Authoring Guide](./mp-command-catalog.md)
  without presenting planned or unsupported work as API?
- Is the exact SpatialAnalyzer target explicit where compatibility matters?
- Are runtime observations described as evidence rather than vendor guarantees?
- Are returned values, paths, credentials, licensed data, and proprietary text absent?
- Does the page preserve the independent-project disclaimer?
- Do page titles, section headings, navigation labels, and table headers use
  title case while preserving exact API identifiers and MP Editor labels?
- Do all links work under `/briosa-docs/`?
- Is the page readable with keyboard navigation, high zoom, and reduced motion?

Edit links on each page open a change against this repository. Released
protocol and runtime corrections should begin in
[spatialanalyzer/briosa](https://github.com/spatialanalyzer/briosa). A reviewed
Next API contract may begin here, but it must be implemented and verified
before that API documentation is snapshotted as a release.
