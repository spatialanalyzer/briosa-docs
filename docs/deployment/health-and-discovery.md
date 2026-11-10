---
title: Health and Discovery
---

# Health and Discovery

Briosa exposes standard gRPC health checks plus a low-sensitivity discovery
service.

## Health Checks

| Service | Use |
| --- | --- |
| `briosa.liveness` | Confirm the public host and lifecycle control plane are serving. |
| `briosa.readiness` | Confirm the current SDK generation may accept MP work. |

Use both. A live but unready host is a valid control state: it can accept
SpatialAnalyzer and SDK lifecycle RPCs and explain application, ownership, SDK,
connection, identity, incident, recovery, and execution-readiness state.

## Discovery

`briosa.DiscoveryService/GetServerInfo` reports safe build coordinates,
configured exact target, curated SpatialAnalyzer application and ownership
state, SDK/worker/connection state, effective activated-SDK and connected-SA
identity evidence, target isolation mode, and `ready_for_mp`.

Use `SpatialAnalyzerSdkLifecycle/GetSpatialAnalyzerSdkState` for the complete
SDK management view, including the most recent termination kind, affected
operation disposition, and current recovery state. That incident remains
available after SDK replacement.

`briosa.DiscoveryService/ListCapabilities` reports only implemented
operations admitted by the current [admission profile](./operation-admission.md),
with flags and overrides applied. The response names the resolved profile and a
value-free `policy_fingerprint`; equal fingerprints mean equal static admission
decisions. Each entry includes its stable operation ID, service and RPC, effect,
replay safety, and execution scope, plus its reviewed risk flags, duration class,
validation status, and admission. Set `include_denied` to also list every
denied operation with the precedence step that denied it. A denied entry never
becomes callable, and a request option can still deny an admitted operation at
call time.

Discovery deliberately excludes hostnames, ports, process IDs, SDK status
codes, credentials, license information, raw diagnostics, arguments, returned
values, and the installed SA command inventory.

See the [gRPC lifecycle API](/api/grpc/sa-2026.1.0529.7/lifecycle) for the operations that move
between these states.

[Read the source-of-truth health guide](https://github.com/spatialanalyzer/briosa/blob/2960705eb3152646513dca2b5d2043cd7cfffb75/targets/2026.1.0529.7/docs/operations/health-and-discovery.md).{/* release-pending */}

## Behavioral Compatibility

`GetServerInfoResponse.compatibility` reports the behavioral contract for the exact target. Server 0.7.0 introduced it with major **1**, revision **0**, and Server 0.9.0 moved to major **2**. The current Server **0.10.0** reports major **3**, revision **0** for both exact targets, and the published 0.5.0 clients require major 3 with revision at least 0. Client 0.4.0 still requires major 2 and selects Server 0.9.2. These are behavioral coordinates, not a product v1 release. They do not replace build/source identity or runtime SA/SDK verification. See the complete [SA 2026 discovery contract](/api/grpc/sa-2026.1.0529.7/discovery) or [SA 2024 discovery contract](/api/grpc/sa-2024.1.0508.5/discovery).
