---
title: Construction Operations / Perimeters
description: Briosa 0.1.0 .NET API for the selected perimeter-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Perimeters

## Construct Perimeter From Points

```csharp
public Task ConstructPerimeterFromPointsAsync(
    CollectionObjectName resultingPerimeterName,
    IEnumerable<PointName> pointList,
    bool openPerimeter = false,
    CancellationToken cancellationToken = default);
```

The point order determines the perimeter path. The client forwards the list
without imposing a minimum count. SpatialAnalyzer reports missing points and
lists with fewer than two points. `openPerimeter` defaults to `false`, which
creates a closed perimeter. The client never automatically replays this
operation.

[Catalog](/mp-command-catalog/commands/construction-operations-perimeters#construct-perimeter-from-points) · [gRPC](/api/grpc/0.5.1/construction-operations-perimeters#construct-perimeter-from-points)
