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

[Read the source-of-truth health guide](https://github.com/spatialanalyzer/briosa/blob/v0.10.0/targets/2026.1.0529.7/docs/operations/health-and-discovery.md).

## Version Compatibility

`GetServerInfoResponse.compatibility` reports the compatibility metadata that clients check for the exact target. Client **0.5.x** works with Server **0.10.x** (Client 0.5.0 was tested with Server 0.10.0), and Client **0.4.0** works with Server **0.9.x** (0.9.0 through 0.9.2); before launch, client 0.5.x checks that the installation matches the exact SA target and declares support for this client, rejecting Server 0.9.x and earlier, while clients 0.4.x and earlier reject Server 0.10.x. Earlier pairings: Servers **0.7.0** and **0.8.0** work with clients **0.2.0** and **0.3.0**, Server **0.6.1** works with clients **0.1.1**, **0.2.0**, and **0.3.0**, and Server **0.6.0** works only with client **0.1.0**. Direct gRPC from the published protocol artifact is also supported. For server releases after 0.10.0, a patch update keeps the same clients working; a minor update may require a client upgrade. Compatibility metadata does not indicate a product v1 release, and it does not replace build/source identity or runtime SA/SDK verification. See the complete [SA 2026 discovery contract](/api/grpc/sa-2026.1.0529.7/discovery) or [SA 2024 discovery contract](/api/grpc/sa-2024.1.0508.5/discovery).
