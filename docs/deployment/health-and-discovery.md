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
operations admitted by current runtime policy. Each entry includes its stable
operation ID, service and RPC, effect, replay safety, and execution scope.

Discovery deliberately excludes hostnames, ports, process IDs, SDK status
codes, credentials, license information, raw diagnostics, arguments, returned
values, and the installed SA command inventory.

See the [gRPC lifecycle API](/api/grpc/lifecycle) for the operations that move
between these states.

[Read the source-of-truth health guide](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/health-and-discovery.md).
