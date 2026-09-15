---
title: MP Subroutines
description: Released gRPC contracts for supported MP Subroutines MP commands.
toc_max_heading_level: 2
---

# MP Subroutines

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Run Subroutine

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Run Subroutine](/mp-command-catalog/commands/mp-subroutines#run-subroutine) |
| Service | `briosa.MpSubroutines` |
| RPC | `RunSubroutine` |
| Operation ID | `mp_subroutines.run_subroutine` |
| Route | `/briosa.MpSubroutines/RunSubroutine` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mp_subroutine_file_path` | `FileReference` | `MP Subroutine File Path` | Required |
| Request | 2 | `share_parent_variables` | `bool` | `Share Parent Variables?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RunSubroutine(RunSubroutineRequest) returns (RunSubroutineResult);

message RunSubroutineRequest {
  optional FileReference mp_subroutine_file_path = 1;
  optional bool share_parent_variables = 2;
}

message RunSubroutineResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
