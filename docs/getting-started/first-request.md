---
title: Make the first request
---

# Make the first request

These examples use the Development source host, where gRPC reflection is
available, and `grpcurl` against the loopback endpoint.

## Check liveness and readiness

Host liveness and MP readiness are intentionally separate:

```powershell
'{"service":"briosa.liveness"}' | grpcurl -plaintext -d '@' 127.0.0.1:50051 grpc.health.v1.Health/Check
'{"service":"briosa.readiness"}' | grpcurl -plaintext -d '@' 127.0.0.1:50051 grpc.health.v1.Health/Check
```

Both should report `SERVING` before you invoke an MP operation.

Inspect the safe runtime summary and the operations admitted by current policy:

```powershell
grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.DiscoveryService/GetServerInfo
grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.DiscoveryService/ListCapabilities
```

For a ready baseline, `readyForMp` is `true`, execution readiness is
`EXECUTION_READY`, both runtime identity claims are exact matches, and the
capability list contains the six documented operations.

## Invoke a read-only MP

```powershell
grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.AnalysisOperations/GetNumberOfCollections
```

Then, when at least one collection exists:

```powershell
grpcurl -plaintext -d '{"collectionIndex":0}' 127.0.0.1:50051 briosa.AnalysisOperations/GetIThCollectionName
```

:::caution[Treat returned values as application data]

Do not paste working directories, collection counts, collection names, raw
arguments, or complete logs into screenshots, public issues, or validation
reports.

:::

Reflection shows mapped schemas; it does not authorize an operation or prove
readiness. `ListCapabilities` is the authority for the operations admitted by
the current process.
