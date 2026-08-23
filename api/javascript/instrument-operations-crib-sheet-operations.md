---
title: Instrument Operations / Crib Sheet Operations
description: Next Briosa JavaScript and TypeScript API for the Crib Sheet Operations MP command.
toc_max_heading_level: 2
---

# Instrument Operations / Crib Sheet Operations

:::note[Next JavaScript and TypeScript Contract]

This function is not released support until this documentation is versioned
for a published package.

:::

## runCribSheet

[MP command](/mp-command-catalog/commands/instrument-operations-crib-sheet-operations#run-crib-sheet) · [gRPC contract](/api/grpc/instrument-operations-crib-sheet-operations#run-crib-sheet)

```ts
export interface RunCribSheetInput {
  readonly collection: CollectionName;
  readonly cribSheetName: string;
  readonly instrument: CollectionInstrumentId;
}

function runCribSheet(
  briosa: BriosaClient,
  input: RunCribSheetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The instrument must be in the active collection and its interface must be
running. Cancellation does not prove that execution stopped, and the function
is never automatically replayed after an unknown outcome.
