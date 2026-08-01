---
title: Run the server
---

# Run the server

You can run the current target from source or from a matching Windows release
archive. Both paths require an already-running, separately licensed
SpatialAnalyzer `2026.1.0529.7`.

## From source

Clone [spatialanalyzer/briosa](https://github.com/spatialanalyzer/briosa), then
run commands from `targets/2026.1.0529.7`.

Restore once:

```powershell
dotnet restore Briosa.slnx --locked-mode
```

The production adapter currently needs two independently established identity
claims. Store each version and a non-sensitive reference to separately retained
evidence in .NET user secrets:

```powershell
dotnet user-secrets set "Briosa:SpatialAnalyzer:Identity:ActivatedSdk:OperatorAttestation:Version" "2026.1.0529.7" --project src/Briosa.Server
dotnet user-secrets set "Briosa:SpatialAnalyzer:Identity:ActivatedSdk:OperatorAttestation:Reference" "<approved-reference>" --project src/Briosa.Server
dotnet user-secrets set "Briosa:SpatialAnalyzer:Identity:ConnectedSpatialAnalyzer:OperatorAttestation:Version" "2026.1.0529.7" --project src/Briosa.Server
dotnet user-secrets set "Briosa:SpatialAnalyzer:Identity:ConnectedSpatialAnalyzer:OperatorAttestation:Reference" "<approved-reference>" --project src/Briosa.Server
```

The reference must not contain a path, credential, license value, hostname, or
returned SpatialAnalyzer data. Do not copy the configured target into a claim
without independently establishing that identity.

Start exactly one matching SpatialAnalyzer instance, wait for it to finish
starting, and then run:

```powershell
dotnet run --project src/Briosa.Server --launch-profile SpatialAnalyzer
```

This Debug-only profile enables Development gRPC reflection and starts the
worker as a separate supervised process.

## From a Windows archive

A release archive is named like:

```text
briosa-<version>-sa-2026.1.0529.7-win-x64.zip
```

Verify its adjacent SHA-256 checksum, extract the complete top-level directory,
and keep `Briosa.Server.exe`, `Briosa.Worker.exe`, and the approved interop
assembly together. Run offline diagnostics before startup:

```powershell
./Briosa.Server.exe diagnostics
./Briosa.Server.exe
```

Release builds do not use the Debug user-secrets identity. Configure the
equivalent deployment settings through an approved local configuration source.
See [Windows deployment](../deployment/windows) for the packaging and security
boundary.

[Make the first request →](./first-request)
