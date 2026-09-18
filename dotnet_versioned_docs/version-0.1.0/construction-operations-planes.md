---
title: Construction Operations / Planes
description: Briosa 0.1.0 .NET APIs for the selected plane-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Planes

## Construct Plane

```csharp
public Task ConstructPlaneAsync(
    CollectionObjectName planeName,
    Vector planeCenter,
    Vector planeNormal,
    double planeEdgeDimension = 0.0,
    CancellationToken cancellationToken = default);
```

## Construct Plane, Normal to Object, Through Point

```csharp
public Task ConstructPlaneNormalToObjectThroughPointAsync(
    CollectionObjectName resultantPlaneName,
    CollectionObjectName normalToObjectName,
    PointName throughPointName,
    double planeEdgeDimension = 0.0,
    CancellationToken cancellationToken = default);
```

## Construct Planes, Bounding Point Group

```csharp
public Task ConstructPlanesBoundingPointGroupAsync(
    CollectionObjectName referencePlaneName,
    CollectionObjectName groupToBound,
    CollectionObjectName? resultingHighPlaneName = null,
    CollectionObjectName? resultingLowPlaneName = null,
    bool overrideTargetPointOffsets = false,
    double offsetValue = 0.0,
    CancellationToken cancellationToken = default);
```

Omitted result identities use `HighPlane` and `LowPlane` in the active
collection.

## Construct Planes, Bisect 2 Planes

```csharp
public Task ConstructPlanesBisectTwoPlanesAsync(
    CollectionObjectName resultantPlaneName,
    CollectionObjectName firstPlane,
    CollectionObjectName secondPlane,
    CancellationToken cancellationToken = default);
```

## Shift Plane

```csharp
public Task ShiftPlaneAsync(
    CollectionObjectName plane,
    double shiftAlongNormal = 0.0,
    double growBoundsByFactor = 0.0,
    CancellationToken cancellationToken = default);
```

## Construct Planes From Surface Faces - Runtime Select

```csharp
public Task ConstructPlanesFromSurfaceFacesRuntimeSelectAsync(
    CancellationToken cancellationToken = default);
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped.

The client passes all values through without additional geometry safeguards
and never automatically replays these operations.

[Catalog](/mp-command-catalog/commands/construction-operations-planes) · [gRPC](/api/grpc/construction-operations-planes)
