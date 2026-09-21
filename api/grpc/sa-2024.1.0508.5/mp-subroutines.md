---
title: MP Subroutines
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# MP Subroutines

[SA 2026.1.0529.7](/api/grpc/mp-subroutines) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/mp-subroutines)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Run Subroutine {/* #run-subroutine */}

[MP Catalog](/mp-command-catalog/commands/mp-subroutines#run-subroutine)

`/briosa.MpSubroutines/RunSubroutine` · Operation ID: `mp_subroutines.run_subroutine`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mp_subroutine_file_path` | `optional FileReference` | MP Subroutine File Path | Required |
| Request | 2 | `share_parent_variables` | `optional bool` | Share Parent Variables? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
