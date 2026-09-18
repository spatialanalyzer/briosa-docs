---
title: Construction Operations / BSpines
description: Briosa 0.1.0 .NET APIs for selected Construction Operations / BSpines MP commands.
toc_max_heading_level: 2
---

# Construction Operations / BSpines

## B-Spline Fit Options Value

`BSplineFitOptions` replaces the MP-only `Construct B-Spline Fit Options`
constructor command. Omitting fit options from a construction overload applies
these defaults.

```csharp
public enum BSplinePointSortMode
{
    UseSelectionOrder,
    ClosestNeighborsFromFirstSelection,
    ClosestNeighborsInCurveDirection,
}

public sealed record BSplineFitOptions
{
    public bool OpenCurve { get; init; } = true;
    public bool UseInterpolationForFit { get; init; } = true;
    public int NumberOfControlPoints { get; init; } = 8;
    public int DegreeOfCurve { get; init; } = 3;
    public BSplinePointSortMode SortMethod { get; init; } = BSplinePointSortMode.UseSelectionOrder;
    public bool SpanAnyGap { get; init; } = true;
    public double TerminationGapLength { get; init; } = 0.0;
    public bool IgnoreProximatePoints { get; init; } = false;
    public double ProximatePointThreshold { get; init; } = 0.0;
    public bool UseGlobalTessellationOptions { get; init; } = true;
    public double MaximumChordalDeviation { get; init; } = 0.05;
    public double MaximumTrimEdgeAngle { get; init; } = 15.0;
    public double TerminationAverageMultiplier { get; init; } = 10.0;
    public double Extension { get; init; } = 0.0;
}
```

`UseInterpolationForFit` keeps the MP-facing meaning. Briosa performs the
SA-version-specific translation to the exact SDK representation internally.

## Construct B-Spline From Points

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Points](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-points) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `bSplineFitOptions` | `BSplineFitOptions` | `B-Spline Fit Options` | Type defaults |
| `pointList` | `IEnumerable<PointName>` | `Point List` | Required |

```csharp
public Task ConstructBSplineFromPointsAsync(
    CollectionObjectName resultingBSplineName,
    IEnumerable<PointName> pointList,
    CancellationToken cancellationToken = default);

public Task ConstructBSplineFromPointsAsync(
    CollectionObjectName resultingBSplineName,
    BSplineFitOptions bSplineFitOptions,
    IEnumerable<PointName> pointList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructBSplineFromPointsAsync(resultingBSplineName, pointList);
```

The overload without options applies the documented `BSplineFitOptions`
defaults. The point order is preserved.

## Construct B-Spline From Point Set

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Point Set](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-point-set) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-point-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `bSplineFitOptions` | `BSplineFitOptions` | `B-Spline Fit Options` | Type defaults |
| `pointSetContainer` | `CollectionObjectName` | `Point Set Container` | Required |

```csharp
public Task ConstructBSplineFromPointSetAsync(
    CollectionObjectName resultingBSplineName,
    CollectionObjectName pointSetContainer,
    CancellationToken cancellationToken = default);

public Task ConstructBSplineFromPointSetAsync(
    CollectionObjectName resultingBSplineName,
    BSplineFitOptions bSplineFitOptions,
    CollectionObjectName pointSetContainer,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructBSplineFromPointSetAsync(
    resultingBSplineName,
    pointSetContainer);
```

## Construct B-Spline From Several B-Splines

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Several B-Splines](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-several-b-splines) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-several-b-splines)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `bSplineList` | `IEnumerable<CollectionObjectName>` | `B-Spline List` | Required |
| `closeResultingBSpline` | `bool` | `Close Resulting B-Spline` | false |

```csharp
public Task ConstructBSplineFromSeveralBSplinesAsync(
    CollectionObjectName resultingBSplineName,
    IEnumerable<CollectionObjectName> bSplineList,
    bool closeResultingBSpline = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructBSplineFromSeveralBSplinesAsync(
    resultingBSplineName,
    bSplineList);
```

## Construct B-Spline From Intersection of Plane and Surface

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Intersection of Plane and Surface](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `planeName` | `CollectionObjectName` | `Plane Name` | Required |
| `surfaceName` | `CollectionObjectName` | `Surface Name` | Required |
| `approximationTolerance` | `double` | `Approximation Tolerance` | 0.0001 |

```csharp
public Task ConstructBSplineFromIntersectionOfPlaneAndSurfaceAsync(
    CollectionObjectName resultingBSplineName,
    CollectionObjectName planeName,
    CollectionObjectName surfaceName,
    double approximationTolerance = 0.0001,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructBSplineFromIntersectionOfPlaneAndSurfaceAsync(
    resultingBSplineName,
    planeName,
    surfaceName);
```

## Construct B-Spline From Intersection of Surfaces

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Intersection of Surfaces](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `firstSurfaceName` | `CollectionObjectName` | `First Surface Name` | Required |
| `secondSurfaceName` | `CollectionObjectName` | `Second Surface Name` | Required |
| `approximationTolerance` | `double` | `Approximation Tolerance` | 0.0001 |

```csharp
public Task ConstructBSplineFromIntersectionOfSurfacesAsync(
    CollectionObjectName resultingBSplineName,
    CollectionObjectName firstSurfaceName,
    CollectionObjectName secondSurfaceName,
    double approximationTolerance = 0.0001,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructBSplineFromIntersectionOfSurfacesAsync(
    resultingBSplineName,
    firstSurfaceName,
    secondSurfaceName);
```

SpatialAnalyzer may derive additional result names when the intersection
creates more than one curve.

## Construct B-Splines From Surfaces

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Splines From Surfaces](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-surfaces) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-surfaces)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surfaceList` | `IEnumerable<CollectionObjectName>` | `Surface List` | Required |
| `resultingBSplineNamePrefix` | `string?` | `Resulting B-Spline Name prefix (Optional)` | Omitted |
| Return | `IReadOnlyList<CollectionObjectName>` | `B-Spline List` | Returned |

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructBSplinesFromSurfacesAsync(
    IEnumerable<CollectionObjectName> surfaceList,
    string? resultingBSplineNamePrefix = null,
    CancellationToken cancellationToken = default);
```

```csharp
IReadOnlyList<CollectionObjectName> bSplines =
    await briosa.ConstructBSplinesFromSurfacesAsync(surfaceList);
```

## Construct B-Splines From Lines

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Splines From Lines](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-lines) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-lines)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lineList` | `IEnumerable<CollectionObjectName>` | `Line List` | Required |
| `resultingBSplineNamePrefix` | `string?` | `Resulting B-Spline Name prefix (Optional)` | Omitted |
| Return | `IReadOnlyList<CollectionObjectName>` | `B-Spline List` | Returned |

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructBSplinesFromLinesAsync(
    IEnumerable<CollectionObjectName> lineList,
    string? resultingBSplineNamePrefix = null,
    CancellationToken cancellationToken = default);
```

```csharp
IReadOnlyList<CollectionObjectName> bSplines =
    await briosa.ConstructBSplinesFromLinesAsync(lineList);
```

## Construct B-Splines From Intersection of Plane and Mesh

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Splines From Intersection of Plane and Mesh](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `planeName` | `CollectionObjectName` | `Plane Name` | Required |
| `meshName` | `CollectionObjectName` | `Mesh Name` | Required |
| `closedLineSegmentLimit` | `int` | `Delete closed lines whose number of segment is less than this value` | 3 |
| `unclosedLineSegmentLimit` | `int` | `Delete unclosed lines whose number of segment is less than this value` | 3 |
| `createIntersectionPoints` | `bool` | `Create Intersection Points?` | true |
| Return | `IReadOnlyList<CollectionObjectName>` | `B-Spline List` | Returned |

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    ConstructBSplinesFromIntersectionOfPlaneAndMeshAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName planeName,
        CollectionObjectName meshName,
        int closedLineSegmentLimit = 3,
        int unclosedLineSegmentLimit = 3,
        bool createIntersectionPoints = true,
        CancellationToken cancellationToken = default);
```

```csharp
IReadOnlyList<CollectionObjectName> bSplines =
    await briosa.ConstructBSplinesFromIntersectionOfPlaneAndMeshAsync(
        resultingBSplineName,
        planeName,
        meshName);
```

Negative segment limits are rejected before the request is sent.
