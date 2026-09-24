---
title: Construction Operations / Ellipsoids
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

[SA 2026.1.0529.7](/api/dotnet/construction-operations-ellipsoids) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-ellipsoids)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Ellipsoid {/* #construct-ellipsoid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-ellipsoids#construct-ellipsoid) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-ellipsoids#construct-ellipsoid)

```csharp
public Task ConstructEllipsoidAsync(
        CollectionObjectName ellipseName,
        double xAxisRadius = 5.0,
        double yAxisRadius = 4.0,
        double zAxisRadius = 3.0,
        double magnification = 1.0,
        bool uncertaintyEllipsoid = false,
        Transform? transformInWorkingCoordinates = null,
        Color? ellipseColor = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
