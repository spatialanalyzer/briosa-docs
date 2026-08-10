---
title: File Operations Commands
description: Canonical, cross-version SpatialAnalyzer MP command entries associated with File Operations.
toc_max_heading_level: 2
---

# File Operations Commands

This page documents each published command once and records how its
SpatialAnalyzer signature and MP Editor location vary across reviewed releases.
Use an [exact-target group hierarchy](../2026.1.0529.7/group-hierarchy.md) when
you need to browse the command locations for one particular SA release.

<div className="catalog-context-grid">
  <div><span>Published Commands</span><strong>3</strong></div>
  <div><span>Reviewed SA Releases</span><strong>1</strong></div>
  <div><span>Signature Revisions</span><strong>3</strong></div>
</div>

| MP Command | Reviewed SA Availability | Briosa Status |
| --- | --- | --- |
| [Get Working Directory](#get-working-directory) | `2026.1.0529.7` | **Current** |
| [Open SA File](#open-sa-file) | `2026.1.0529.7` | **Undecided** |
| [Save As...](#save-as) | `2026.1.0529.7` | **Undecided** |

## Get Working Directory

<span className="catalog-status catalog-status--current">Current</span>

Returns the working directory currently reported by SpatialAnalyzer.

### SpatialAnalyzer History

| Reviewed SA Releases | MP Group | Signature | Change |
| --- | --- | --- | --- |
| `2026.1.0529.7` | File Operations | Revision A | First and latest reviewed target |

The availability shown here covers only releases reviewed by the Briosa
project. It does not predict compatibility with a later SpatialAnalyzer
release.

### Revision A

**Applies to Reviewed SA Releases:** `2026.1.0529.7`

| Contract Item | MP Definition |
| --- | --- |
| Command Name | `Get Working Directory` |
| Inputs | None |
| Output | `Directory` — string |

### Briosa Support

| SA Target | Status | Operation ID |
| --- | --- | --- |
| `2026.1.0529.7` | **Current** | `file_operations.get_working_directory` |

**Call This Command:** [gRPC](/api/grpc/get-working-directory) ·
[.NET](/api/dotnet/get-working-directory) ·
[Python](/api/python/get-working-directory) ·
[JavaScript and TypeScript](/api/javascript/get-working-directory)

The public gRPC method is
`briosa.FileOperations/GetWorkingDirectory`. The result contains the optional
`directory` string and shared execution details.

The
[authoritative protobuf](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/proto/briosa/file_operations.proto)
lives in the Briosa server repository.

:::caution[Returned Values Are Application Data]

Briosa returns the working directory to the caller but does not log it by
default. Do not include machine-specific paths in public validation evidence.

:::

## Open SA File

<span className="catalog-status catalog-status--undecided">Undecided</span>

Opens an existing SpatialAnalyzer file.

### SpatialAnalyzer History

| Reviewed SA Releases | MP Group | Signature | Change |
| --- | --- | --- | --- |
| `2026.1.0529.7` | File Operations | Revision A | First and latest reviewed target |

The availability shown here covers only releases reviewed by the Briosa
project. It does not predict compatibility with a later SpatialAnalyzer
release.

### Revision A

**Applies to Reviewed SA Releases:** `2026.1.0529.7`

| Contract Item | MP Definition |
| --- | --- |
| Command Name | `Open SA File` |
| Input | `SA File Name` — file path |
| Outputs | None |

### Briosa Support

| SA Target | Status | Operation ID | API Reference |
| --- | --- | --- | --- |
| `2026.1.0529.7` | **Undecided** | — | — |

This command has not yet received a reviewed Briosa disposition. No Briosa
operation or release commitment is currently published for it.

## Save As...

<span className="catalog-status catalog-status--undecided">Undecided</span>

Saves the current SpatialAnalyzer file under a new file name.

### SpatialAnalyzer History

| Reviewed SA Releases | MP Group | Signature | Change |
| --- | --- | --- | --- |
| `2026.1.0529.7` | File Operations | Revision A | First and latest reviewed target |

The availability shown here covers only releases reviewed by the Briosa
project. It does not predict compatibility with a later SpatialAnalyzer
release.

### Revision A

**Applies to Reviewed SA Releases:** `2026.1.0529.7`

| Contract Item | MP Definition |
| --- | --- |
| Command Name | `Save As...` |
| Input | `File Name` — file path |
| Input | `Add Serial Number?` — boolean, default `false` |
| Input | `Optional Number` — integer, default `0` |
| Outputs | None |

### Briosa Support

| SA Target | Status | Operation ID | API Reference |
| --- | --- | --- | --- |
| `2026.1.0529.7` | **Undecided** | — | — |

This command has not yet received a reviewed Briosa disposition. No Briosa
operation or release commitment is currently published for it.
