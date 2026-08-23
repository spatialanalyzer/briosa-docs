---
title: Instrument Operations / Crib Sheet Operations
description: Next gRPC contract for the Crib Sheet Operations MP command.
toc_max_heading_level: 2
---

# Instrument Operations / Crib Sheet Operations

:::note[Next Contract]

This contract is not callable until released.

:::

The RPC uses `briosa.InstrumentOperations`, returns
`MpExecutionDetails execution = 1000`, and prohibits automatic replay.

## Run Crib Sheet

[MP command](/mp-command-catalog/commands/instrument-operations-crib-sheet-operations#run-crib-sheet)

```proto
rpc RunCribSheet(RunCribSheetRequest) returns (RunCribSheetResult);
message RunCribSheetRequest {
  optional CollectionName collection = 1;
  optional string crib_sheet_name = 2;
  optional CollectionInstrumentId instrument = 3;
}
message RunCribSheetResult { MpExecutionDetails execution = 1000; }
```

All fields are required. The instrument must be in the active collection and
its interface must be running. A deadline or cancellation does not prove that
the crib sheet stopped, and the server never automatically replays this call.
