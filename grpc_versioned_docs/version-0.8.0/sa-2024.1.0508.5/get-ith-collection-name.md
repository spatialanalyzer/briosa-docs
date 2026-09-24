---
title: GetIthCollectionName
---

# GetIthCollectionName

[SA 2026.1.0529.7](/api/grpc/get-ith-collection-name) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/get-ith-collection-name)

Implements the `Get i-th Collection Name` MP for exact target
`2024.1.0508.5`.

| Contract Item | Value |
| --- | --- |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetIthCollectionName` |
| Operation ID | `analysis_operations.get_ith_collection_name` |
| Request | optional-presence `int32 collection_index` |
| Result | optional string `resultant_name` plus shared `execution` details |
| Classification | read only · global-state read · replay safe |

`collection_index` is zero-based. Explicit protobuf presence makes `0` valid
while omission fails with `InvalidArgument`. Briosa does not invent an upper
bound; SpatialAnalyzer reports an out-of-range value through the MP outcome.

```powershell
grpcurl -plaintext -d '{"collectionIndex":0}' 127.0.0.1:50051 briosa.AnalysisOperations/GetIthCollectionName
```

The returned name is application data and is not logged by default. After MP
success, the worker retrieves `Resultant Name`; getter failure produces a
data-loss outcome rather than an empty name.

[View the authoritative operation source](https://github.com/spatialanalyzer/briosa/blob/v0.8.0/targets/2024.1.0508.5/docs/operations/get-i-th-collection-name.md).
