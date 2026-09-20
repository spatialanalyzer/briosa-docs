---
title: Instrument Operations / Crib Sheet Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Crib Sheet Operations

[SA 2026.1.0529.7](/api/grpc/instrument-operations-crib-sheet-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations-crib-sheet-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Run Crib Sheet {/* #run-crib-sheet */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-crib-sheet-operations#run-crib-sheet)

`/briosa.InstrumentOperations/RunCribSheet` · Operation ID: `instrument_operations.run_crib_sheet`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection Name | Required |
| Request | 2 | `crib_sheet_name` | `optional string` | Crib Sheet Name | Required |
| Request | 3 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RunCribSheet(RunCribSheetRequest) returns (RunCribSheetResult);

message RunCribSheetRequest {
  optional CollectionName collection = 1;
  optional string crib_sheet_name = 2;
  optional CollectionInstrumentId instrument = 3;
}

message RunCribSheetResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
