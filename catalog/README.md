# MP command catalog data

This directory contains documentation-only, exact-target records for the full
retained SpatialAnalyzer MP command inventory. See the
[catalog authoring model](../docs/contributing/mp-command-catalog.md).

The data may be consumed only while building the Briosa documentation site. It
must not generate or configure the Briosa server, protobuf contracts, client
libraries, runtime policy, packages, or Briosa build-completeness checks.

Schemas are versioned under `schemas`. Target manifests and command records are
under `sa/<exact-target>`.
