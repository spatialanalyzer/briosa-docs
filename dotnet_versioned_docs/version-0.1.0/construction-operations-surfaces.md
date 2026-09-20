---
title: Construction Operations / Surfaces
description: Briosa 0.1.0 .NET APIs for surface construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Surfaces

```csharp
public enum SurfaceDissectionMode
{
    EntireSolid,
    SelectFaces,
}
```

## ConstructSurfacesFromObjectsAsync

```csharp
public Task ConstructSurfacesFromObjectsAsync(
    IEnumerable<CollectionObjectName> objects,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfacesFromObjectsAsync(objects);
```

## ConstructSurfaceFromBSplinesAsync

```csharp
public Task ConstructSurfaceFromBSplinesAsync(
    CollectionObjectName resultingSurfaceName,
    IEnumerable<CollectionObjectName> bSplineList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceFromBSplinesAsync(
    resultingSurface,
    bSplines);
```

`bSplineList` maps to exact MP argument `BSpline List`.

## ConstructSurfaceFromCylinderAsync

```csharp
public Task ConstructSurfaceFromCylinderAsync(
    CollectionObjectName resultingSurfaceName,
    CollectionObjectName cylinderName,
    bool internalCylinder = true,
    bool useThetaExtentMode = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceFromCylinderAsync(
    resultingSurface,
    cylinder);
```

## ConstructSurfaceFromPlaneAsync

```csharp
public Task ConstructSurfaceFromPlaneAsync(
    CollectionObjectName resultingSurfaceName,
    CollectionObjectName planeName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceFromPlaneAsync(
    resultingSurface,
    plane);
```

## ConstructSurfaceFromSphereAsync

```csharp
public Task ConstructSurfaceFromSphereAsync(
    CollectionObjectName resultingSurfaceName,
    CollectionObjectName sphereName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceFromSphereAsync(
    resultingSurface,
    sphere);
```

## ConstructSurfaceFromConeAsync

```csharp
public Task ConstructSurfaceFromConeAsync(
    CollectionObjectName resultingSurfaceName,
    CollectionObjectName coneName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceFromConeAsync(
    resultingSurface,
    cone);
```

## ConstructSurfaceFromCollectionOfSurfacesAsync

```csharp
public Task ConstructSurfaceFromCollectionOfSurfacesAsync(
    IEnumerable<CollectionObjectName> surfacesToCombine,
    CollectionObjectName resultingSurfaceName,
    bool hideOriginalSurfaces = true,
    bool deleteOriginalSurfaces = false,
    bool enableSewingTolerance = false,
    double sewingTolerance = -1.0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceFromCollectionOfSurfacesAsync(
    surfaces,
    resultingSurface);
```

## ConstructSurfaceFitFromNominalSurfacesAndActualDataAsync

```csharp
public Task ConstructSurfaceFitFromNominalSurfacesAndActualDataAsync(
    CollectionObjectName nominalSurface,
    IEnumerable<PointName> actualDataPointList,
    CollectionObjectName resultingSurfaceName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations
    .ConstructSurfaceFitFromNominalSurfacesAndActualDataAsync(
        nominalSurface,
        actualPoints,
        resultingSurface);
```

The singular `nominalSurface` name preserves exact MP argument
`Nominal Surface`.

## ConstructSurfaceByDissectingSurfacesAsync

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    ConstructSurfaceByDissectingSurfacesAsync(
        SurfaceDissectionMode dissectionMode,
        CancellationToken cancellationToken = default);
```

```csharp
var createdSurfaces = await briosa.ConstructionOperations
    .ConstructSurfaceByDissectingSurfacesAsync(
        SurfaceDissectionMode.SelectFaces);
```

`SelectFaces` is operator-interactive. Cancellation does not prove the SA
interaction stopped.

## ConstructSurfacesByDissectingSurfacesFromRefListAsync

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    ConstructSurfacesByDissectingSurfacesFromRefListAsync(
        IEnumerable<CollectionObjectName> surfacesToDissect,
        CancellationToken cancellationToken = default);
```

```csharp
var createdSurfaces = await briosa.ConstructionOperations
    .ConstructSurfacesByDissectingSurfacesFromRefListAsync(surfaces);
```

## ConstructSurfaceFromPointGroupsAsync

```csharp
public Task ConstructSurfaceFromPointGroupsAsync(
    IEnumerable<CollectionObjectName> groupNameList,
    CollectionObjectName resultingSurfaceName,
    CancellationToken cancellationToken = default);

public Task ConstructSurfaceFromPointGroupsAsync(
    IEnumerable<CollectionObjectName> groupNameList,
    BSplineFitOptions bSplineFitOptions,
    CollectionObjectName resultingSurfaceName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceFromPointGroupsAsync(
    pointGroups,
    resultingSurface);
```

The overload without options applies the shared
[`BSplineFitOptions` defaults](./construction-operations-bsplines#b-spline-fit-options-value).

## ConstructSurfacesByProjectingPointsAsync

```csharp
public Task ConstructSurfacesByProjectingPointsAsync(
    IEnumerable<CollectionObjectName> projectionTargetNameList,
    IEnumerable<PointName> pointList,
    CollectionObjectName resultingSurfaceName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfacesByProjectingPointsAsync(
    projectionTargets,
    points,
    resultingSurface);
```

## ConstructSurfaceByOffsettingSurfaceAsync

```csharp
public Task ConstructSurfaceByOffsettingSurfaceAsync(
    IEnumerable<CollectionObjectName> referenceSurface,
    double surfaceOffset = 0.0,
    bool hideOriginalSurface = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceByOffsettingSurfaceAsync(
    surfaces,
    surfaceOffset: 5.0);
```

## ConstructSurfaceFromAnnotationLinksAsync

```csharp
public Task ConstructSurfaceFromAnnotationLinksAsync(
    IEnumerable<CollectionObjectName> annotationList,
    CollectionObjectName resultingSurfaceName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructSurfaceFromAnnotationLinksAsync(
    annotations,
    resultingSurface);
```

## ConstructGeometryFromSurfacesAsync

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructGeometryFromSurfacesAsync(
    IEnumerable<CollectionObjectName> surfaces,
    double minimumDiameter = 0.0,
    double maximumDiameter = 0.0,
    CollectionObjectName? referenceFrame = null,
    CollectionName? destinationCollectionName = null,
    string baseName = "Geometry Object",
    CancellationToken cancellationToken = default);
```

```csharp
var cylinders = await briosa.ConstructionOperations.ConstructGeometryFromSurfacesAsync(
    surfaces,
    minimumDiameter: 10.0,
    maximumDiameter: 100.0,
    destinationCollectionName: destination);
```

:::warning[SA 2026.1 Partial Contract]

This method extracts cylinder geometry only. It intentionally has no geometry
mode parameter because the SDK cannot reliably select the MP's line, circle,
or cylinder mode. Use another workflow for line or circle extraction.

:::

Briosa adds no operation-specific geometry or list-cardinality safeguards, and
none of these calls is automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-surfaces) · [gRPC](/api/grpc/0.5.1/construction-operations-surfaces)
