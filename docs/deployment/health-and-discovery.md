---
title: Health and Discovery
---

# Health and Discovery

Briosa exposes standard gRPC health checks plus a low-sensitivity discovery
service.

## Health Checks

| Service | Use |
| --- | --- |
| `briosa.liveness` | Confirm the public host is serving. |
| `briosa.readiness` | Confirm the current worker generation may accept MP work. |

Use both. A live but unready host can still explain its worker, connection,
identity, and execution-readiness state.

## Discovery

`briosa.DiscoveryService/GetServerInfo` reports safe build coordinates,
configured exact target, worker/connection state, effective activated-SDK and
connected-SA identity evidence, target isolation mode, and `ready_for_mp`.

`briosa.DiscoveryService/ListCapabilities` reports only implemented
operations admitted by current runtime policy. Each entry includes its stable
operation ID, service and RPC, effect, replay safety, and execution scope.

Discovery deliberately excludes hostnames, ports, process IDs, SDK status
codes, credentials, license information, raw diagnostics, arguments, returned
values, and the installed SA command inventory.

[Read the source-of-truth health guide](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/health-and-discovery.md).
