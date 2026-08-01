---
title: Supported operations
---

# Supported operations

The current exact target exposes three handwritten read-only MP operations.
Each is classified as a global-state read and safe to replay, but runtime policy
may still deny it.

| Operation ID | gRPC method | Result |
| --- | --- | --- |
| `file_operations.get_working_directory` | `briosa.FileOperations/GetWorkingDirectory` | current working directory |
| `analysis_operations.get_number_of_collections` | `briosa.AnalysisOperations/GetNumberOfCollections` | collection count |
| `analysis_operations.get_i_th_collection_name` | `briosa.AnalysisOperations/GetIThCollectionName` | collection name |

`DiscoveryService/ListCapabilities` returns the intersection of handwritten
operations, the current isolation mode, and runtime allow/deny policy. It is
the authority for the operations admitted by a running process.

There is no generic public `ExecuteCommand` RPC and no generated operation
catalog. New support arrives as reviewed vertical slices with a protobuf
contract, handwritten mappings, capability metadata, portable tests, explicit
real-SA validation status, and user documentation.

The authoritative contracts live in the
[Briosa server repository](https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7/proto/briosa).
