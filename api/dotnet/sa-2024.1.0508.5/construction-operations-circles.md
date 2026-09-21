---
title: Construction Operations / Circles
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Circles

[SA 2026.1.0529.7](/api/dotnet/construction-operations-circles) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-circles)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Circle {/* #construct-circle */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circle) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circle)

```csharp
public Task ConstructCircleAsync(
        CollectionObjectName circleName,
        Vector circleCenter,
        Vector circleNormal,
        double circleRadius,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Circles From Surface Faces - Runtime Select {/* #construct-circles-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)

```csharp
public Task ConstructCirclesFromSurfaceFacesRuntimeSelectAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Circles (Lines) From Surfaces {/* #construct-circles-lines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-lines-from-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circles-lines-from-surfaces)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructCirclesLinesFromSurfacesAsync(
        IEnumerable<CollectionObjectName> surfaces,
        CircleLineMode circleLineMode,
        double minimumDiameter = 0.0,
        double maximumDiameter = 0.0,
        double tolerance = 0.02,
        bool singleSurface = false,
        CollectionName? destinationCollectionName = null,
        string baseName = "Geometry Object",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2024.1.0508.5)
