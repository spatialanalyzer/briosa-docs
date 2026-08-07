---
title: File Operations
description: Published MP command entries from the SA 2026.1.0529.7 File Operations group.
---

# File Operations

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> File Operations</p>

<div className="catalog-context-grid">
  <div><span>Exact target</span><strong>2026.1.0529.7</strong></div>
  <div><span>Group evidence</span><strong><code>FileOperations.txt</code></strong></div>
  <div><span>Published entries</span><strong>1 supported</strong></div>
</div>

The exact-target SDK output contains 36 step observations directly in this
root group and 89 more across its nested subgroups. This page currently
publishes the one root File Operations command supported by Briosa; an absent
command has no implied disposition during v0.x.

| MP command | Input | Result | Status |
| --- | --- | --- | --- |
| [Get Working Directory](#get-working-directory) | none | working directory | **Supported** |

## Get Working Directory

<span className="catalog-status catalog-status--supported">Supported</span>

<div className="catalog-command-meta">
  <div><span>Operation ID</span><code>file_operations.get_working_directory</code></div>
  <div><span>gRPC method</span><code>briosa.FileOperations/GetWorkingDirectory</code></div>
</div>

`Get Working Directory` has no MP inputs and returns the optional MP
`Directory` string.

See the [operation guide](../../operations/get-working-directory.md) for a
request example and result-handling details. The
[authoritative protobuf](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/proto/briosa/file_operations.proto)
lives in the server repository.

:::caution[Returned values are application data]

Briosa returns the working directory to the caller but does not log it by
default. Do not include machine-specific paths in public validation evidence.

:::
