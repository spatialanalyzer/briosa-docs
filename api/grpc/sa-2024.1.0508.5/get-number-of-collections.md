---
title: GetNumberOfCollections
---

# GetNumberOfCollections

[SA 2026.1.0529.7](/api/grpc/get-number-of-collections) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/get-number-of-collections)

Implements the `Get Number of Collections` MP for exact target
`2024.1.0508.5`.

| Contract Item | Value |
| --- | --- |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetNumberOfCollections` |
| Operation ID | `analysis_operations.get_number_of_collections` |
| Request | no fields |
| Result | optional `int32 total_count` plus shared `execution` details |
| Classification | read only · global-state read · replay safe |

```powershell
grpcurl -plaintext -d '{}' 127.0.0.1:50051 briosa.AnalysisOperations/GetNumberOfCollections
```

The worker sets the MP step, executes it, retrieves the MP result, requires
result code `2`, and only then retrieves the `Total Count` integer. MP or
getter failure never substitutes a count.

[View the authoritative operation source](https://github.com/spatialanalyzer/briosa/blob/v0.7.0/targets/2024.1.0508.5/docs/operations/get-number-of-collections.md).
