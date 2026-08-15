---
title: Briosa gRPC API
slug: /
---

# Briosa gRPC API

This reference documents the public gRPC services and MP operations exposed by
the Briosa server. Use the [.NET](/api/dotnet),
[Python](/api/python), or
[JavaScript/TypeScript](/api/javascript) reference when working
through a first-party client library.

:::warning[Local-Only API]

Current releases and the v1 contract expose this API only through a loopback
endpoint on the same Windows machine as SpatialAnalyzer. Do not bind, proxy, or
tunnel the server onto a network. Authenticated remote Briosa connections are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

## Lifecycle Control Plane

The public server can be live without an active SpatialAnalyzer application or
SA SDK. The planned [lifecycle services](/api/grpc/lifecycle) let a local caller
manage those resources independently. `briosa.SpatialAnalyzerLifecycle`
observes, launches, and closes an owned application.
`briosa.SpatialAnalyzerSdkLifecycle` starts, connects, reconnects, stops,
diagnoses, and recovers Briosa's isolated SDK generation.

MP services remain unavailable until an explicit connection verifies the exact
runtime identities and execution channel. Starting or recovering an SDK leaves
it disconnected. If the SDK is closed externally, its state records the
incident and exposes safe recovery without command replay. Stopping the public
server never closes SpatialAnalyzer.

## Supported Operations

The current exact target exposes six handwritten read-only MP operations.
Each is classified as a global-state read and safe to replay, but runtime policy
may still deny it.

| Operation ID | gRPC Method | Result |
| --- | --- | --- |
| `file_operations.get_working_directory` | `briosa.FileOperations/GetWorkingDirectory` | current working directory |
| `analysis_operations.get_number_of_collections` | `briosa.AnalysisOperations/GetNumberOfCollections` | collection count |
| `analysis_operations.get_ith_collection_name` | `briosa.AnalysisOperations/GetIthCollectionName` | collection name |
| `construction_operations.get_active_collection_name` | `briosa.ConstructionOperations/GetActiveCollectionName` | active collection name |
| `utility_operations.get_active_units` | `briosa.UtilityOperations/GetActiveUnits` | active length, angular, and temperature units |
| `utility_operations.get_working_frame_properties` | `briosa.UtilityOperations/GetWorkingFrameProperties` | working-frame context |

Browse these commands by workflow in the
[MP Command Catalog](/mp-command-catalog).

`DiscoveryService/ListCapabilities` returns the intersection of handwritten
operations, the current isolation mode, and runtime allow/deny policy. It is
the authority for the operations admitted by a running process.

There is no generic public `ExecuteCommand` RPC and no generated operation
catalog. New support arrives as reviewed vertical slices with a protobuf
contract, handwritten mappings, capability metadata, portable tests, explicit
real-SA validation status, and user documentation.

The authoritative contracts live in the
[Briosa server repository](https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7/proto/briosa).

## Wave A Next Contracts

The sidebar's **Wave A MP Commands (Next)** section defines the gRPC service,
RPC, operation ID, request fields, result fields, MP argument mapping, and
reviewed defaults for every operation selected in the first catalog wave.
Those entries are implementation contracts, not a claim that the current
server already exposes them. Each one links back to its reviewed catalog
disposition and forward to the three client-library expressions.
