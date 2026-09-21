---
title: Construction Operations / Cylinders
description: Briosa 0.1.0 .NET APIs for selected cylinder-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Cylinders

## Construct Cylinder

```csharp
public Task ConstructCylinderAsync(
    CollectionObjectName cylinderName,
    Vector cylinderEndPoint,
    Vector cylinderAxis,
    double cylinderDiameter,
    double cylinderLength,
    CancellationToken cancellationToken = default);
```

Every value is required and passed through without client-side geometry
validation. [Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinder) · [gRPC](/api/grpc/0.5.1/construction-operations-cylinders#construct-cylinder)

## Construct Cylinder From End Points

```csharp
public Task ConstructCylinderFromEndPointsAsync(
    CollectionObjectName cylinderName,
    Vector cylinderEndPointA,
    Vector cylinderEndPointB,
    double cylinderDiameter,
    CancellationToken cancellationToken = default);
```

Coincident endpoints and any diameter value are passed through to
SpatialAnalyzer.

## Construct Cylinders From Surface Faces - Runtime Select

```csharp
public Task ConstructCylindersFromSurfaceFacesRuntimeSelectAsync(
    CancellationToken cancellationToken = default);
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped, and the client never automatically replays this call.
