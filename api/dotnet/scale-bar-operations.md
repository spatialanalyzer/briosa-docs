---
title: Scale Bar Operations
description: Next Briosa .NET APIs for supported Scale Bar Operations MP commands.
toc_max_heading_level: 2
---

# Scale Bar Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Delete Scale Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Scale Bar](/mp-command-catalog/commands/scale-bar-operations#delete-scale-bar) · [gRPC contract](/api/grpc/scale-bar-operations#delete-scale-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scaleBarName` | `CollectionObjectName` | `Scale Bar Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteScaleBarAsync(
    CollectionObjectName scaleBarName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteScaleBarAsync(scaleBarName: scaleBarName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Scale Bar Stats

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Scale Bar Stats](/mp-command-catalog/commands/scale-bar-operations#get-scale-bar-stats) · [gRPC contract](/api/grpc/scale-bar-operations#get-scale-bar-stats)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scaleBarName` | `CollectionObjectName` | `Scale Bar Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `NominalLength` | `double` | `Nominal Length` |
| `ActualLength` | `double` | `Actual Length` |
| `Deviation` | `double` | `Deviation` |

```csharp
public sealed record GetScaleBarStatsResult
{
    public required double NominalLength { get; init; }

    public required double ActualLength { get; init; }

    public required double Deviation { get; init; }
}

public Task<GetScaleBarStatsResult> GetScaleBarStatsAsync(
    CollectionObjectName scaleBarName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetScaleBarStatsAsync(scaleBarName: scaleBarName);
```

Returns the 3 MP outputs in the named `GetScaleBarStatsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Scale Bar Check

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Scale Bar Check](/mp-command-catalog/commands/scale-bar-operations#scale-bar-check) · [gRPC contract](/api/grpc/scale-bar-operations#scale-bar-check)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scaleBarPointA` | `PointName` | `ScaleBar Point A` | Required |
| `scaleBarPointB` | `PointName` | `ScaleBar Point B` | Required |
| `currentTemperatureF` | `double` | `Current Temperature (F)` | 0.000000 |
| `lengthOfBarAt68F` | `double` | `Length of Bar at 68F` | 0.000000 |
| `materialCtePpmF` | `double` | `Material CTE (PPM/F)` | 0.000000 |
| `tolerance` | `double` | `Tolerance` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `DeviationAt68F` | `double` | `Deviation at 68F` |

```csharp
public Task<double> ScaleBarCheckAsync(
    PointName scaleBarPointA,
    PointName scaleBarPointB,
    double currentTemperatureF = 0.000000,
    double lengthOfBarAt68F = 0.000000,
    double materialCtePpmF = 0.000000,
    double tolerance = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ScaleBarCheckAsync(scaleBarPointA: scaleBarPointA, scaleBarPointB: scaleBarPointB);
```

Returns the MP output `Deviation at 68F` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Inward Positive Normal

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Inward Positive Normal](/mp-command-catalog/commands/scale-bar-operations#set-inward-positive-normal) · [gRPC contract](/api/grpc/scale-bar-operations#set-inward-positive-normal)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |
| `inwardPositive` | `bool` | `Inward Positive?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetInwardPositiveNormalAsync(
    CollectionObjectName objectName,
    bool inwardPositive = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetInwardPositiveNormalAsync(objectName: objectName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
