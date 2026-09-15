---
title: Construction Operations / Spheres
description: Unreleased Briosa .NET APIs for sphere construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Spheres

## ConstructSphereAsync

```csharp
public Task ConstructSphereAsync(
    CollectionObjectName sphereName,
    Vector sphereCenterInWorkingCoordinates,
    double sphereRadius,
    CancellationToken cancellationToken = default);
```

Briosa adds no radius validation and never automatically replays the call.

```csharp
await briosa.ConstructionOperations.ConstructSphereAsync(
    sphere,
    new Vector(0.0, 0.0, 0.0),
    sphereRadius: 25.0);
```

## ConstructSpheresFromSurfaceFacesRuntimeSelectAsync

```csharp
public Task ConstructSpheresFromSurfaceFacesRuntimeSelectAsync(
    CancellationToken cancellationToken = default);
```

The operator selects CAD faces in SpatialAnalyzer. Escape is an MP failure;
cancellation does not prove the interaction stopped. The call is never
automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-spheres) · [gRPC](/api/grpc/construction-operations-spheres)
