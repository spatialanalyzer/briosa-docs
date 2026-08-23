---
title: Construction Operations / Ellipsoids
description: Next Briosa .NET API for the selected ellipsoid-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

## Construct Ellipsoid

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

An omitted transform maps to identity, and an omitted color maps to
`new Color(255, 0, 255)`. Values are passed through without client-side
geometry validation. The client never automatically replays this operation.

[Catalog](/mp-command-catalog/commands/construction-operations-ellipsoids#construct-ellipsoid) · [gRPC](/api/grpc/construction-operations-ellipsoids#construct-ellipsoid)
