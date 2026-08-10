---
title: Contribute Documentation
---

# Contribute Documentation

Documentation work follows the same issue-driven workflow as the server:

1. start from a focused issue;
2. create `<issue-number>-<short-description>`;
3. ground API claims in committed `spatialanalyzer/briosa` source and catalog
   dispositions in reviewed Briosa issues;
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

## Review Checklist

- Does the protobuf contract or handwritten operation registry support every API claim?
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

Edit links on each page open a change against this repository. Protocol and
runtime corrections should begin in
[spatialanalyzer/briosa](https://github.com/spatialanalyzer/briosa); update the
website after the authoritative change lands.
