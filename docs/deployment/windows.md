---
title: Windows Deployment
---

# Windows Deployment

Briosa release archives are self-contained .NET 10 Windows x64 products for one
exact SpatialAnalyzer target:

```text
briosa-<briosa-version>-sa-2026.1.0529.7-win-x64.zip
```

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
authentication, per-operation authorization, or TLS configuration.

The execution watchdog defaults to 30 seconds. A caller deadline or
cancellation stops that caller from waiting; it does not prove that synchronous
COM work stopped. If Briosa reports operator recovery required, establish a
clean SpatialAnalyzer/SDK ownership state before restarting.

For the full package contract, use the
[authoritative Windows guide](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/windows-package.md).
