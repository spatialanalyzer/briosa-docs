---
title: Instrument Operations / Crib Sheet Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Crib Sheet Operations

[SA 2026.1.0529.7](/api/dotnet/instrument-operations-crib-sheet-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/instrument-operations-crib-sheet-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Run Crib Sheet {/* #run-crib-sheet */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-crib-sheet-operations#run-crib-sheet) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-crib-sheet-operations#run-crib-sheet)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task RunCribSheetAsync(
        CollectionName collection,
        string cribSheetName,
        CollectionInstrumentId instrument,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
