---
title: Construction Operations / Ellipses
description: Next Briosa .NET API for the selected ellipse-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Ellipses

## Construct Ellipse

```csharp
public Task ConstructEllipseAsync(
    CollectionObjectName ellipseName,
    Vector centerCoordinate,
    Vector normalDirection,
    double majorAxisRadius,
    double minorAxisRadius,
    CancellationToken cancellationToken = default);
```

Every value is required and passed through without client-side geometry
validation. The client never automatically replays this operation.

[Catalog](/mp-command-catalog/commands/construction-operations-ellipses#construct-ellipse) · [gRPC](/api/grpc/construction-operations-ellipses#construct-ellipse)
