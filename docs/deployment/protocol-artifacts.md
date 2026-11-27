---
title: Protocol Artifacts for Raw gRPC Clients
description: Choose, verify, and use the exact-target Server 0.10.1 protobuf distribution.
---

# Protocol Artifacts for Raw gRPC Clients

First-party clients package their own transport bindings. Raw gRPC applications can generate bindings from the separately released protocol ZIP. Choose the exact SA target before generating code; target differences include fields, enum choices, defaults, and available RPCs.

## Choose and Verify the Artifact

From the [Server 0.10.1 release](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.1), download one of:

- `briosa-protocol-0.10.1-sa-2024.1.0508.5.zip`
- `briosa-protocol-0.10.1-sa-2026.1.0529.7.zip`

Bindings generated from the 0.10.0 protocol artifact remain compatible with Server 0.10.1. Regenerate from the 0.10.1 artifact to read the fields it adds: lifecycle bounds and the configured interaction mode in `GetServerInfo`, request options and policy-denial details in `ListCapabilities`, and policy-denial details in the operation error trailer.

Download its adjacent `.sha256` and `.provenance.json` files. In PowerShell, calculate `Get-FileHash -Algorithm SHA256 <zip-path>` and compare the complete digest with the checksum before extracting. Inspect provenance for the release, source revision, and exact target. A matching checksum establishes file agreement; use the official release as the provenance source.

The matching source revision is recorded in the verified release provenance. Keep the artifact identity and source revision with your generated client build.

## Generate and Use a Client

Extract the complete archive and locate its protobuf import root containing `briosa/`. Configure your language's protobuf and gRPC plugins with that directory as an include path, then generate the required services and imported messages together. Do not combine proto files from different targets or releases. Follow the chosen plugin's instructions for its runtime dependencies.

Use the artifact for the exact SA target that the server reports in discovery. Both targets use the `briosa` package and mostly the same message names, but a same-named message can differ on the wire where the SA releases differ. For example, `ConstructObjectsFromSurfaceFacesRuntimeSelectRequest` takes an object-type choice and a point offset for SA 2026.1.0529.7, and seven per-shape Booleans for SA 2024.1.0508.5, so a request built from the wrong target's artifact can be misread instead of rejected. First-party clients bind one exact target and check the server's target before any call.

Run the matching Windows server locally and inspect [Server Discovery](/api/grpc/sa-2026.1.0529.7/discovery) ([SA 2024](/api/grpc/sa-2024.1.0508.5/discovery)) before SDK/SA activity. Implement the required lifecycle, exact-target checks, capability/readiness checks, cancellation, and execution-outcome handling. Raw bindings do not supply the first-party clients' installation selector or lifecycle policy automatically.

Server 0.10.1 accepts inbound gRPC messages of at most **64 KiB (65,536 bytes)**
for either exact target. This is the encoded request size. Requests above the
limit are rejected at the transport boundary before MP operation mapping.

Results can be larger. Server 0.10.1 raises the worker's result budget from
64 KiB to **1 MiB (1,048,576 bytes)**; the public protobuf message can differ
in size. Set your gRPC client's receive limit to at least **4 MiB** to receive
results up to that budget. If the completed worker result frame exceeds 1 MiB,
the call returns `DATA_LOSS` with disposition `COMPLETED`, replay guidance
`DO_NOT_REPLAY`, and the original MP result code. When no output getter
faulted, the failure kind is `OUTPUT_RETRIEVAL_FAILURE` with diagnostic
`worker-output-encoding-rejected`. If an output getter also faulted, the
failure kind is `SDK_CALL_FAULTED`. Outputs retained in the frame are reported
as retrieved, and outputs dropped for size carry
`worker-output-encoding-rejected`.

## Build Pins and Runtime Compatibility

The protocol ZIP's version and source pin identify the schema used to build your client. The published 0.5.0 and 0.5.1 clients passed conformance scenarios against Server 0.10.1, with a fake worker, for each exact SA target; a matching schema alone does not establish runtime compatibility. A raw client must implement and validate its own admission handling, including the [admission profile](./operation-admission.md) that discovery reports. Never retry uncertain MP work automatically.

SpatialAnalyzer must be separately installed, running when MP work executes, and licensed. Briosa is independent and does not imply Hexagon endorsement or support.
