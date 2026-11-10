---
title: Construction Operations / Ellipsoids
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

[SA 2026.1.0529.7](/api/dotnet/construction-operations-ellipsoids) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-ellipsoids)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Construct Ellipsoid {/* #construct-ellipsoid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-ellipsoids#construct-ellipsoid) · [gRPC Contract](/api/grpc/construction-operations-ellipsoids#construct-ellipsoid)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructEllipsoidAsync(
        CollectionObjectName ellipseName,
        Transform transformInWorkingCoordinates,
        double xAxisRadius = 5.0,
        double yAxisRadius = 4.0,
        double zAxisRadius = 3.0,
        double magnification = 1.0,
        bool uncertaintyEllipsoid = false,
        Color? ellipseColor = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7)
