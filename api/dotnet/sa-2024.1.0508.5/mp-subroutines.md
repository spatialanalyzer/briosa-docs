---
title: MP Subroutines
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# MP Subroutines

[SA 2026.1.0529.7](/api/dotnet/mp-subroutines) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/mp-subroutines)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Run Subroutine {/* #run-subroutine */}

[MP Catalog](/mp-command-catalog/commands/mp-subroutines#run-subroutine) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-subroutines#run-subroutine)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `filesystem_read`, `code_execution` · **Duration Class:** `long_running`

```csharp
public Task RunSubroutineAsync(
        FileReference mpSubroutineFilePath,
        bool shareParentVariables = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
