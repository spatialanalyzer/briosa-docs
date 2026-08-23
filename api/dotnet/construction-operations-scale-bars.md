---
title: Construction Operations / Scale Bars
description: Next Briosa .NET API for scale-bar construction.
toc_max_heading_level: 2
---

# Construction Operations / Scale Bars

## ConstructScaleBarAsync

```csharp
public Task ConstructScaleBarAsync(
    CollectionObjectName scaleBarName,
    PointName beginTarget,
    PointName endTarget,
    double length = 0.0,
    double uncertainty = 0.0,
    bool useRelativeTolerances = true,
    bool useHighTolerances = false,
    bool useLowTolerances = false,
    double highTolerance = 0.0,
    double lowTolerance = 0.0,
    CancellationToken cancellationToken = default);
```

Relative high/low values are offsets from nominal; with relative tolerances
disabled they are the actual upper and lower bounds. The client does not reject
unusual combinations or automatically replay the call.

```csharp
await briosa.ConstructionOperations.ConstructScaleBarAsync(
    scaleBar,
    beginPoint,
    endPoint,
    length: 64.0,
    uncertainty: 0.001,
    useHighTolerances: true,
    useLowTolerances: true,
    highTolerance: 0.005,
    lowTolerance: -0.005);
```

[Catalog](/mp-command-catalog/commands/construction-operations-scale-bars) · [gRPC](/api/grpc/construction-operations-scale-bars)
