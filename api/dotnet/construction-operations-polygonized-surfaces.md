---
title: Construction Operations / Polygonized Surfaces
description: Next Briosa .NET API for polygonized-surface construction.
toc_max_heading_level: 2
---

# Construction Operations / Polygonized Surfaces

## Shared Type

```csharp
public enum MeshOrientationType
{
    UseCurrentPointOfView,
    UseCurrentWorkingFrame,
}
```

## ConstructPolygonizedSurfaceFromPointCloudsAsync

```csharp
public Task ConstructPolygonizedSurfaceFromPointCloudsAsync(
    IEnumerable<CollectionObjectName> pointCloudList,
    MeshOrientationType meshOrientation,
    CollectionObjectName polygonizedSurfaceName,
    double gridResolution = 0.0,
    CancellationToken cancellationToken = default);
```

The point-cloud list must be nonempty. Orientation is required because the MP
Editor export does not provide a valid default. `UseCurrentWorkingFrame` uses
the current working frame's Z axis. Briosa adds no resolution or point-density
safeguards and never automatically replays this call.

```csharp
await briosa.ConstructionOperations.ConstructPolygonizedSurfaceFromPointCloudsAsync(
    pointClouds,
    MeshOrientationType.UseCurrentWorkingFrame,
    destinationSurface,
    gridResolution: 0.05);
```

[Catalog](/mp-command-catalog/commands/construction-operations-polygonized-surfaces) · [gRPC](/api/grpc/construction-operations-polygonized-surfaces)
