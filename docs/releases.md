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
| Briosa Server and Control Center | [0.8.0](https://github.com/spatialanalyzer/briosa/releases/tag/v0.8.0) | Independent Windows distributions and protocols for SA 2024.1.0508.5 and SA 2026.1.0529.7; behavioral compatibility contract 1.0 |
| Briosa Installer | [0.3.0](https://github.com/spatialanalyzer/briosa-installer/releases/tag/v0.3.0) | Signed Windows setup and portable distribution; side-by-side installation registration |
| .NET client | 0.3.0 | NuGet: [SA 2024](https://www.nuget.org/packages/Briosa.2024.1.0508.5/0.3.0), [SA 2026](https://www.nuget.org/packages/Briosa.2026.1.0529.7/0.3.0) |
| Python client | 0.3.0 | PyPI: [SA 2024](https://pypi.org/project/briosa-2024-1-0508-5/0.3.0/), [SA 2026](https://pypi.org/project/briosa-2026-1-0529-7/0.3.0/) |
| JavaScript/TypeScript client | 0.3.0 | npm: [SA 2024](https://www.npmjs.com/package/@spatialanalyzer/briosa-2024.1.0508.5/v/0.3.0), [SA 2026](https://www.npmjs.com/package/@spatialanalyzer/briosa-2026.1.0529.7/v/0.3.0) |

Use [Install Briosa](/install) to obtain the released Windows products and
[Install the Exact-Target Client](/docs/getting-started/run-the-server#install-the-exact-target-client)
for registry installation commands. A separately installed and licensed
SpatialAnalyzer environment remains required for MP execution. Connections
remain local and use loopback.

Each package name contains the exact SA target; its **0.3.0** package version is
independent of SA and the server version. Client 0.3.0 selects a server implementing
behavioral contract major 1 with revision at least 0, with a tested exception for
the exact published Server 0.6.1. Its generation artifact remains pinned to Server
0.8.0. C# uses `using Briosa;`, Python uses `import briosa`, and JavaScript uses
the npm alias `briosa`. Use separate environments or applications for different targets.
See [installation selection and migration](/docs/deployment/installation-selection).

## Example Applications

The [Briosa tutorials](https://github.com/spatialanalyzer/briosa-examples)
show how to create two points, read their coordinates, and measure their distance
in an empty SA 2026.1.0529.7 job. Choose .NET, TypeScript, Python, or direct gRPC;
each example is a short program that constructs its own demo points.
The language clients use their built-in server discovery and cleanup. The
gRPC example connects to a server prepared in Control Center.
All four ran successfully with Server 0.7.0 and licensed SA 2026.1.0529.7;
see the [validation record](https://github.com/spatialanalyzer/briosa-examples/blob/main/docs/evidence/licensed-2026-09-19.md).
SA 2024 qualification remains outstanding.

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

The current [gRPC reference](/api/grpc) documents **Server 0.8.0**; the [.NET](/api/dotnet), [Python](/api/python), and [JavaScript/TypeScript](/api/javascript) references document **client 0.3.0**. Each includes a separate SA 2024 section alongside SA 2026. Historical references include [Server 0.7.0](/api/grpc/0.7.0), [.NET 0.2.0](/api/dotnet/0.2.0), [Python 0.2.0](/api/python/0.2.0), [JavaScript 0.2.0](/api/javascript/0.2.0), and the earlier [Server 0.5.1](/api/grpc/0.5.1), [.NET 0.1.0](/api/dotnet/0.1.0), [Python 0.1.0](/api/python/0.1.0), and [JavaScript 0.1.0](/api/javascript/0.1.0).

| Client Line | Server Selection | Reference Guidance |
| --- | --- | --- |
| 0.1.0 | Exact Server 0.6.0 build | Retained 0.1.0 API |
| 0.1.1 | Exact Server 0.6.1 build | Same public schemas as 0.1.0; changed server pin |
| 0.2.0 | Contract major 1, revision at least 0, plus the exact reviewed 0.6.1 exception | Retained API, including discovery and selection |
| 0.3.0 | Same runtime contract | Current API with clean MP argument names; [migration guide](/docs/mp-argument-name-migration) |

The [public compatibility matrix](https://github.com/spatialanalyzer/briosa/blob/main/compatibility/matrix.json) records the tested package identities and their fake-SDK scenarios, distinguishing published artifacts from development candidates. This is compatibility evidence, not licensed validation of every MP operation. Preserve legacy installations until their consuming applications migrate. `BRIOSA_SERVER_PATH` requires explicit opt-in; prefer per-application selectors.
The product guides, installation instructions, release status, and MP catalog
remain unversioned so they can describe current availability across products.

Documentation publication does not promote a product to v1.0 or change its
validation status. Release availability, API implementation, runtime admission,
and validation evidence are separate claims.
