---
title: Release Status
description: Released Briosa products, client package availability, and remaining validation before v1.0.
---

# Release Status

Briosa continues to ship **v0.x releases** while validation and product adoption
progress. These releases include working implementations; a v0.x version does
not mean that every documented API is only a proposal.

## Available Products

| Product | Released Version | Availability |
| --- | --- | --- |
| Briosa Server and Control Center for SA 2026.1.0529.7 | [0.5.1](https://github.com/spatialanalyzer/briosa/releases/tag/v0.5.1) | Published Windows package and matching protocol artifact |
| Briosa Installer | [0.2.0](https://github.com/spatialanalyzer/briosa-installer/releases/tag/v0.2.0) | Published Windows setup and portable distribution |
| .NET client | Unreleased | Implemented source; no NuGet package published |
| Python client | Unreleased | Implemented source; no PyPI distribution published |
| JavaScript/TypeScript client | Unreleased | Implemented source; no npm package published |

Use [Install Briosa](/install) to obtain the released Windows products. A
separately installed and licensed SpatialAnalyzer environment remains required
for MP execution. The server targets **2026.1.0529.7** exactly and supports local,
loopback connections.

Client source and build instructions are available in the
[.NET](https://github.com/spatialanalyzer/briosa-dotnet),
[Python](https://github.com/spatialanalyzer/briosa-py), and
[JavaScript/TypeScript](https://github.com/spatialanalyzer/briosa-js) repositories.
Their reference pages are labeled **Unreleased** until package publication.
Do not treat the server version as a client package version.

## Planned SpatialAnalyzer Targets

The [SA 2024.1.0508.5 command catalog](/mp-command-catalog/2024.1.0508.5/overview)
records the completed command-evidence review and planned dispositions. No server
or client package for that target is released. Its review and SDK-interface
comparison do not establish licensed runtime validation.

## What Has Been Validated

Portable server, worker, protocol, client, and packaging tests exercise behavior
without requiring SpatialAnalyzer. Selected local licensed tests provide
additional evidence for specific operations and lifecycle paths. For example,
the [September 15 Control Center validation](https://github.com/spatialanalyzer/briosa/blob/v0.5.1/targets/2026.1.0529.7/docs/testing/evidence/control-center-local-2026-09-15.md)
records startup, identity gating, connection, read-only commands, and restart.

Those results do not establish that every operation or deployment environment
has been exercised. Individual API and catalog entries retain their validation
qualifications, including **At Risk** where fixtures or equipment are unavailable.

## Current v1.0 Gates

The following validation remains outstanding and currently holds the relevant
product below v1.0:

- **Server:** provision a protected Windows environment with licensed SA and
  complete the reviewed real-runtime validation scenarios. Repeatable fixtures,
  cleanup, and identity evidence are part of this work.
- **Installer:** validate enterprise deployment against a representative
  Artifactory/generic mirror, including applicable authentication, proxy,
  offline, and managed-workstation behavior. Remaining native Windows
  acceptance checks are tracked alongside this work.

These environments are currently unavailable. This does not block continued
v0.x development or releases, and it does not turn an unexecuted check into a
passing result. The v1.0 requirements are the current maintainer decision and
may be revisited explicitly.

Tracking: [licensed environment](https://github.com/spatialanalyzer/briosa/issues/20),
[runtime scenarios](https://github.com/spatialanalyzer/briosa/issues/69),
[repeatable SA fixtures](https://github.com/spatialanalyzer/briosa/issues/137), and
[enterprise and Windows acceptance](https://github.com/spatialanalyzer/briosa-installer/issues/11).

## Documentation Versions

The gRPC reference is versioned for **Server 0.5.1**. Each client reference will
receive its own version when the corresponding package is published.
The product guides, installation instructions, release status, and MP catalog
remain unversioned so they can describe current availability across products.

Documentation publication does not promote a product to v1.0 or change its
validation status. Release availability, API implementation, runtime admission,
and validation evidence are separate claims.
