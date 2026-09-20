---
title: Construction Operations / Cones
description: Briosa 0.1.0 .NET APIs for selected cone-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Cones

## Construct Cone

```csharp
public Task ConstructConeAsync(
    CollectionObjectName coneName,
    Vector coneEndPoint,
    Vector coneAxis,
    double coneLength,
    double coneThetaStart,
    double coneThetaSpan,
    double coneIncludedAngle,
    CancellationToken cancellationToken = default);
```

Every geometry value is required and passed through without client-side range
validation. [Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cone) · [gRPC](/api/grpc/0.5.1/construction-operations-cones#construct-cone)

## Construct Cones From Surface Faces - Runtime Select

```csharp
public Task ConstructConesFromSurfaceFacesRuntimeSelectAsync(
    CancellationToken cancellationToken = default);
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped, and the client never automatically replays this call.

[Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [gRPC](/api/grpc/0.5.1/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)
