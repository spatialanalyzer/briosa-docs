---
title: Protocol Artifacts for Raw gRPC Clients
description: Choose, verify, and use the exact-target Server 0.7.0 protobuf distribution.
---

# Protocol Artifacts for Raw gRPC Clients

First-party clients package their own transport bindings. Raw gRPC applications can generate bindings from the separately released protocol ZIP. Choose the exact SA target before generating code; target differences include fields, enum choices, defaults, and available RPCs.

## Choose and Verify the Artifact

From the [Server 0.7.0 release](https://github.com/spatialanalyzer/briosa/releases/tag/v0.7.0), download one of:

- `briosa-protocol-0.7.0-sa-2024.1.0508.5.zip`
- `briosa-protocol-0.7.0-sa-2026.1.0529.7.zip`

Download its adjacent `.sha256` and `.provenance.json` files. In PowerShell, calculate `Get-FileHash -Algorithm SHA256 <zip-path>` and compare the complete digest with the checksum before extracting. Inspect provenance for the release, source revision, and exact target. A matching checksum establishes file agreement; use the official release as the provenance source.

The release source is `4303a3322074869b35a3f16f9e35484a7bd5c830`. Keep the artifact identity and source revision with your generated client build.

## Generate and Use a Client

Extract the complete archive and locate its protobuf import root containing `briosa/`. Configure your language's protobuf and gRPC plugins with that directory as an include path, then generate the required services and imported messages together. Do not combine proto files from different targets or releases. Follow the chosen plugin's instructions for its runtime dependencies.

Run the matching Windows server locally and inspect [Server Discovery](/api/grpc/discovery) ([SA 2024](/api/grpc/sa-2024.1.0508.5/discovery)) before SDK/SA activity. Implement the required lifecycle, exact-target checks, capability/readiness checks, cancellation, and execution-outcome handling. Raw bindings do not supply the first-party clients' installation selector or lifecycle policy automatically.

## Build Pins and Runtime Compatibility

The protocol ZIP's version and source pin identify the schema used to build your client. Server behavioral contract 1.0 is a separate runtime promise for an exact target, not a product v1 release. A raw client must implement and validate its own admission policy; downloading a compatible-looking schema alone does not establish runtime compatibility. Never retry uncertain MP work automatically.

SpatialAnalyzer must be separately installed, running when MP work executes, and licensed. Briosa is independent and does not imply Hexagon endorsement or support.
