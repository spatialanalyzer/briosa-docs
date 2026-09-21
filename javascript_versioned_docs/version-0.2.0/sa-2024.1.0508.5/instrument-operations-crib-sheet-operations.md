---
title: Instrument Operations / Crib Sheet Operations
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Crib Sheet Operations

[SA 2026.1.0529.7](/api/javascript/instrument-operations-crib-sheet-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/instrument-operations-crib-sheet-operations)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Run Crib Sheet {/* #run-crib-sheet */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-crib-sheet-operations#run-crib-sheet) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-crib-sheet-operations#run-crib-sheet)

```ts
export interface RunCribSheetInput {
  readonly collection: CollectionName;
  readonly cribSheetName: string;
  readonly instrument: CollectionInstrumentId;
}

export declare function runCribSheet(
  briosa: BriosaClient,
  input: RunCribSheetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
