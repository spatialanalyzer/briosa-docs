---
title: Construction Operations / Circles
description: Briosa 0.1.0 .NET APIs for selected circle-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Circles

## Construct Circle

```csharp
public Task ConstructCircleAsync(
    CollectionObjectName circleName,
    Vector circleCenter,
    Vector circleNormal,
    double circleRadius,
    CancellationToken cancellationToken = default);
```

Values are passed through without client-side geometry-range validation.
[Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circle) · [gRPC](/api/grpc/construction-operations-circles#construct-circle)

## Construct Circles From Surface Faces - Runtime Select

```csharp
public Task ConstructCirclesFromSurfaceFacesRuntimeSelectAsync(
    CancellationToken cancellationToken = default);
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped.

## Construct Circles (Lines) From Surfaces

```csharp
public enum CircleLineMode { Circle, Line }

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

Returns the complete `Geometry Objects` output list. [Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-lines-from-surfaces) · [gRPC](/api/grpc/construction-operations-circles#construct-circles-lines-from-surfaces)
