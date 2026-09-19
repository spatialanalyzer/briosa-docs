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
| Briosa Server and Control Center | [0.7.0](https://github.com/spatialanalyzer/briosa/releases/tag/v0.7.0) | Independent Windows distributions and protocols for SA 2024.1.0508.5 and SA 2026.1.0529.7; behavioral compatibility contract 1.0 |
| Briosa Installer | [0.3.0](https://github.com/spatialanalyzer/briosa-installer/releases/tag/v0.3.0) | Signed Windows setup and portable distribution; side-by-side installation registration |
| .NET client | 0.1.1 | NuGet: [SA 2024](https://www.nuget.org/packages/Briosa.2024.1.0508.5/0.1.1), [SA 2026](https://www.nuget.org/packages/Briosa.2026.1.0529.7/0.1.1) |
| Python client | 0.1.1 | PyPI: [SA 2024](https://pypi.org/project/briosa-2024-1-0508-5/0.1.1/), [SA 2026](https://pypi.org/project/briosa-2026-1-0529-7/0.1.1/) |
| JavaScript/TypeScript client | 0.1.1 | npm: [SA 2024](https://www.npmjs.com/package/@spatialanalyzer/briosa-2024.1.0508.5/v/0.1.1), [SA 2026](https://www.npmjs.com/package/@spatialanalyzer/briosa-2026.1.0529.7/v/0.1.1) |

Use [Install Briosa](/install) to obtain the released Windows products and
[Install the Exact-Target Client](/docs/getting-started/run-the-server#install-the-exact-target-client)
for registry installation commands. A separately installed and licensed
SpatialAnalyzer environment remains required for MP execution. Connections
remain local and use loopback.

Each package name contains the exact SA target; its **0.1.1** package version is
independent of SA and the pinned **0.6.1** server version. C# uses `using Briosa;`,
Python uses `import briosa`, and JavaScript uses the npm alias `briosa`.
Use separate environments or applications for different targets.

## Example Applications

The [Point Inspection Workbench](https://github.com/spatialanalyzer/briosa-examples)
implements one inspection workflow with direct gRPC, .NET, TypeScript, and
Python. It includes a shared synthetic fixture and CSV/JSON reports, plus an
explicit live mode for a prepared SA 2026.1.0529.7 job. Synthetic mode and
portable tests run without SpatialAnalyzer. Licensed acceptance for this
example and SA 2024 qualification remain outstanding.

## Supported SpatialAnalyzer Targets

SA **2024.1.0508.5** and **2026.1.0529.7** have independent server and client
products. The [SA 2024 review notes](/mp-command-catalog/2024.1.0508.5/review-notes)
describe command differences. Six read-only operations and basic lifecycle
behavior have local licensed SA 2024 validation; broader runtime coverage
remains outstanding. See the [SA 2024 compatibility record](https://github.com/spatialanalyzer/briosa/blob/v0.6.1/targets/2024.1.0508.5/docs/development/sa2024-compatibility.md).
SA 2026 observations do not establish SA 2024 runtime validation.

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

The gRPC reference currently retains its **Server 0.5.1** snapshot. Each client
reference has a **0.1.0** snapshot describing the SA 2026 API; use the installed
SA 2024 package types and reviewed differences for legacy signatures. The
[Server 0.7.0 source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets)
provides the authoritative exact-target contracts. Client 0.1.1 changes the
exact server pairing; its public API schemas are unchanged from 0.1.0.
The product guides, installation instructions, release status, and MP catalog
remain unversioned so they can describe current availability across products.

Documentation publication does not promote a product to v1.0 or change its
validation status. Release availability, API implementation, runtime admission,
and validation evidence are separate claims.
