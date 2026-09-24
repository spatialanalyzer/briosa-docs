---
title: Windows Deployment
---

# Windows Deployment

Use [Briosa Installer](/install) to manage server packages, including installation,
verification, repair, and removal. That guide also records current download
availability. This page covers the server package layout, manual extraction,
diagnostics, and startup.

Installer 0.3.0 also registers committed products in the 64-bit Windows Registry.
Use its registration rescan for existing custom stores. Registry entries are
discovery hints backed by receipts; they never select a machine-wide default.
See [Compatible Side-by-Side Installations](./installation-selection) for the
new client selection contract and migration guidance.

Briosa release archives are self-contained .NET 10 Windows x64 products for one
exact SpatialAnalyzer target:

```text
briosa-0.8.0-sa-<exact-sa-target>-win-x64.zip
```

Choose exact target `2024.1.0508.5` or `2026.1.0529.7` from the [Server 0.8.0 assets](https://github.com/spatialanalyzer/briosa/releases/tag/v0.8.0). Use the adjacent ZIP checksum and provenance. Schema-3 packages require Installer **0.3.0** or later. Manual extraction alone does not create a registered, committed package-store receipt; use Installer to manage discovery, or an explicitly selected validated server path as described in [Installation Selection](./installation-selection). Raw gRPC users should also read [Protocol Artifacts](./protocol-artifacts).

The archive does not contain SpatialAnalyzer, its installer, SDK executable,
original type library, license material, or vendor documentation.

## Verify and Extract

1. Verify the ZIP against its adjacent `.sha256` file.
2. Extract the complete top-level directory.
3. Keep the server, worker, and approved interop assembly together.
4. Run `./Briosa.Server.exe diagnostics` before startup.

Offline diagnostics report safe build coordinates and package-layout checks.
They do not activate COM, connect to SpatialAnalyzer, or expose paths,
hostnames, license information, or raw diagnostics.

## Start Securely

The package binds cleartext HTTP/2 to `127.0.0.1:50051` by default:

```powershell
./Briosa.Server.exe
```

Keep the endpoint loopback-only. The baseline has no remote client
authentication, per-operation authorization, or TLS configuration. Deploying
Briosa beside SpatialAnalyzer on another machine and connecting to it securely
is [planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156),
not supported by current releases or the v1 contract.

The execution watchdog defaults to 30 seconds. A caller deadline or
cancellation stops that caller from waiting; it does not prove that synchronous
COM work stopped. If Briosa reports operator recovery required, establish a
clean SpatialAnalyzer/SDK ownership state before restarting.

For the full package contract, use the
[authoritative Windows guide](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/windows-package.md).
