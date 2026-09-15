---
title: Construction Operations / Lines
description: Unreleased Briosa .NET APIs for selected line-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Lines

These methods preserve MP-compatible inputs and defaults without adding
client-side geometry safeguards. None is automatically replayed.

## Construct Line 2 Points

```csharp
public Task ConstructLineTwoPointsAsync(
    CollectionObjectName lineName,
    PointName firstPoint,
    PointName secondPoint,
    CancellationToken cancellationToken = default);
```

Coincident points are passed through to SpatialAnalyzer.

## Construct Line 2 Points (Vector Notation)

```csharp
public Task ConstructLineTwoPointsVectorNotationAsync(
    CollectionObjectName lineName,
    Vector firstVector,
    Vector secondVector,
    CancellationToken cancellationToken = default);
```

## Construct Line Normal to Object

```csharp
public Task ConstructLineNormalToObjectAsync(
    CollectionObjectName lineName,
    CollectionObjectName @object,
    double lineLength = 1,
    CancellationToken cancellationToken = default);
```

Any line length is passed through to SpatialAnalyzer.

## Construct Line - Project Line to Object Reference Plane

```csharp
public Task ConstructLineProjectLineToObjectReferencePlaneAsync(
    CollectionObjectName lineToCreate,
    CollectionObjectName lineToProject,
    CollectionObjectName objectToProjectTo,
    CancellationToken cancellationToken = default);
```

`objectToProjectTo` retains the MP's `Any` object domain.

## Construct Line - Normal to Object through Point

```csharp
public Task ConstructLineNormalToObjectThroughPointAsync(
    CollectionObjectName lineToCreate,
    CollectionObjectName objectName,
    PointName pointName,
    CancellationToken cancellationToken = default);
```

## Construct Line 2 Plane Intersection

```csharp
public Task ConstructLineTwoPlaneIntersectionAsync(
    CollectionObjectName lineName,
    CollectionObjectName firstPlane,
    CollectionObjectName secondPlane,
    CancellationToken cancellationToken = default);
```

The client does not prevalidate whether the planes intersect.

## Construct Lines From Surface Faces - Runtime Select

```csharp
public Task ConstructLinesFromSurfaceFacesRuntimeSelectAsync(
    CancellationToken cancellationToken = default);
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped.

## Construct Line Center of Slot

```csharp
public Task ConstructLineCenterOfSlotAsync(
    CollectionObjectName lineName,
    CollectionObjectName slotName,
    CancellationToken cancellationToken = default);
```

## Construct Line From Instrument Shot

```csharp
public Task ConstructLineFromInstrumentShotAsync(
    PointName pointName,
    CollectionObjectName lineName,
    int observationIndex = 0,
    CancellationToken cancellationToken = default);
```

The parameter order keeps the defaulted observation index last while the
server maps it to the exact MP argument. No client-side range rule is added.

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-lines) ·
[gRPC](/api/grpc/construction-operations-lines)
