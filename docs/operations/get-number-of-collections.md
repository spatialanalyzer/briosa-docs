---
title: GetNumberOfCollections
---

# GetNumberOfCollections

Implements the `Get Number of Collections` MP for exact target
`2026.1.0529.7`.

| Contract item | Value |
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

[View the authoritative operation source](https://github.com/spatialanalyzer/briosa/blob/main/targets/2026.1.0529.7/docs/operations/get-number-of-collections.md).
