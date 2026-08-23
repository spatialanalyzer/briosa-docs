---
title: Instrument Operations / Crib Sheet Operations
description: Next Briosa Python API for the Crib Sheet Operations MP command.
toc_max_heading_level: 2
---

# Instrument Operations / Crib Sheet Operations

:::note[Next Python Contract]

This coroutine is not released support until this documentation is versioned
for a published package.

:::

## run_crib_sheet

[MP command](/mp-command-catalog/commands/instrument-operations-crib-sheet-operations#run-crib-sheet) · [gRPC contract](/api/grpc/instrument-operations-crib-sheet-operations#run-crib-sheet)

```python
async def run_crib_sheet(
    self,
    collection: CollectionName,
    crib_sheet_name: str,
    instrument: CollectionInstrumentId,
) -> None: ...
```

The instrument must be in the active collection and its interface must be
running. Cancellation does not prove that execution stopped, and the coroutine
is never automatically replayed after an unknown outcome.
