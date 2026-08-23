---
title: Instrument Operations / Crib Sheet Operations
description: Next Briosa .NET API for the Crib Sheet Operations MP command.
toc_max_heading_level: 2
---

# Instrument Operations / Crib Sheet Operations

:::note[Next .NET Contract]

This method is not released support until this documentation is versioned for
a published package.

:::

## RunCribSheetAsync

[MP command](/mp-command-catalog/commands/instrument-operations-crib-sheet-operations#run-crib-sheet) · [gRPC contract](/api/grpc/instrument-operations-crib-sheet-operations#run-crib-sheet)

```csharp
public Task RunCribSheetAsync(
    CollectionName collection,
    string cribSheetName,
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

The instrument must be in the active collection and its interface must be
running. Cancellation does not prove that execution stopped, and the method is
never automatically replayed after an unknown outcome.
