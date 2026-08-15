---
title: Analysis Operations
description: Next Briosa .NET APIs for supported Analysis Operations MP commands.
toc_max_heading_level: 2
---

# Analysis Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Angle Between Line and Plane

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Angle Between Line and Plane](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane) · [gRPC contract](/api/grpc/analysis-operations#angle-between-line-and-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `selectedLine` | `CollectionObjectName` | `Selected Line` | Required |
| `selectedPlane` | `CollectionObjectName` | `Selected Plane` | Required |
| `nominalAngle` | `double` | `Nominal Angle` | 0.000000 |
| `angleTolerance00ForNone` | `double` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Angle` | `double` | `Angle` |

```csharp
public Task<double> AngleBetweenLineAndPlaneAsync(
    CollectionObjectName selectedLine,
    CollectionObjectName selectedPlane,
    double nominalAngle = 0.000000,
    double angleTolerance00ForNone = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AngleBetweenLineAndPlaneAsync(selectedLine: selectedLine, selectedPlane: selectedPlane);
```

Returns the MP output `Angle` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Angle Between Two Lines

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Angle Between Two Lines](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines) · [gRPC contract](/api/grpc/analysis-operations#angle-between-two-lines)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `line1` | `CollectionObjectName` | `Line 1` | Required |
| `line2` | `CollectionObjectName` | `Line 2` | Required |
| `nominalAngle` | `double` | `Nominal Angle` | 0.000000 |
| `angleTolerance00ForNone` | `double` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Angle` | `double` | `Angle` |

```csharp
public Task<double> AngleBetweenTwoLinesAsync(
    CollectionObjectName line1,
    CollectionObjectName line2,
    double nominalAngle = 0.000000,
    double angleTolerance00ForNone = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AngleBetweenTwoLinesAsync(line1: line1, line2: line2);
```

Returns the MP output `Angle` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Angle Between Two Planes' normals

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Angle Between Two Planes' normals](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals) · [gRPC contract](/api/grpc/analysis-operations#angle-between-two-planes-normals)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planeA` | `CollectionObjectName` | `Plane A` | Required |
| `planeB` | `CollectionObjectName` | `Plane B` | Required |
| `nominalAngle` | `double` | `Nominal Angle` | 0.000000 |
| `angleTolerance00ForNone` | `double` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Angle` | `double` | `Angle` |

```csharp
public Task<double> AngleBetweenTwoPlanesNormalsAsync(
    CollectionObjectName planeA,
    CollectionObjectName planeB,
    double nominalAngle = 0.000000,
    double angleTolerance00ForNone = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AngleBetweenTwoPlanesNormalsAsync(planeA: planeA, planeB: planeB);
```

Returns the MP output `Angle` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Best Fit Transformation - Group to Group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Best Fit Transformation - Group to Group](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group) · [gRPC contract](/api/grpc/analysis-operations#best-fit-transformation---group-to-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceGroup` | `CollectionObjectName` | `Reference Group` | Required |
| `correspondingGroup` | `CollectionObjectName` | `Corresponding Group` | Required |
| `showInterface` | `bool` | `Show Interface` | false |
| `rmsTolerance00ForNone` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `allowScale` | `bool` | `Allow Scale` | false |
| `allowX` | `bool` | `Allow X` | true |
| `allowY` | `bool` | `Allow Y` | true |
| `allowZ` | `bool` | `Allow Z` | true |
| `allowRx` | `bool` | `Allow Rx` | true |
| `allowRy` | `bool` | `Allow Ry` | true |
| `allowRz` | `bool` | `Allow Rz` | true |
| `lockDegreesOfFreedom` | `bool` | `Lock Degrees of Freedom` | false |
| `generateEvent` | `bool` | `Generate Event` | false |
| `filePathForCsvTextReportRequiresShowInterfaceTrue` | `FileReference` | `File Path for CSV Text Report (requires Show Interface = TRUE)` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TransformInWorking` | `Transform` | `Transform in Working` |
| `OptimumTransform` | `Transform` | `Optimum Transform` |
| `RmsDeviation` | `double` | `RMS Deviation` |
| `MaximumAbsoluteDeviation` | `double` | `Maximum Absolute Deviation` |
| `NumberOfUnknowns` | `int` | `Number of Unknowns` |
| `NumberOfEquations` | `int` | `Number of Equations` |
| `Robustness` | `double` | `Robustness` |

```csharp
public sealed record BestFitTransformationGroupToGroupResult
{
    public required Transform TransformInWorking { get; init; }

    public required Transform OptimumTransform { get; init; }

    public required double RmsDeviation { get; init; }

    public required double MaximumAbsoluteDeviation { get; init; }

    public required int NumberOfUnknowns { get; init; }

    public required int NumberOfEquations { get; init; }

    public required double Robustness { get; init; }
}

public Task<BestFitTransformationGroupToGroupResult> BestFitTransformationGroupToGroupAsync(
    CollectionObjectName referenceGroup,
    CollectionObjectName correspondingGroup,
    bool showInterface,
    double rmsTolerance00ForNone,
    double maximumAbsoluteTolerance00ForNone,
    bool allowScale,
    bool allowX,
    bool allowY,
    bool allowZ,
    bool allowRx,
    bool allowRy,
    bool allowRz,
    bool lockDegreesOfFreedom,
    bool generateEvent,
    FileReference filePathForCsvTextReportRequiresShowInterfaceTrue,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.BestFitTransformationGroupToGroupAsync(referenceGroup: referenceGroup, correspondingGroup: correspondingGroup, showInterface: showInterface, rmsTolerance00ForNone: rmsTolerance00ForNone, maximumAbsoluteTolerance00ForNone: maximumAbsoluteTolerance00ForNone, allowScale: allowScale, allowX: allowX, allowY: allowY, allowZ: allowZ, allowRx: allowRx, allowRy: allowRy, allowRz: allowRz, lockDegreesOfFreedom: lockDegreesOfFreedom, generateEvent: generateEvent, filePathForCsvTextReportRequiresShowInterfaceTrue: filePathForCsvTextReportRequiresShowInterfaceTrue);
```

Returns the 7 MP outputs in the named `BestFitTransformationGroupToGroupResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Compute Group to Group Orientation (Rx,Ry,Rz)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Compute Group to Group Orientation (Rx,Ry,Rz)](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz) · [gRPC contract](/api/grpc/analysis-operations#compute-group-to-group-orientation-rxryrz)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceGroup` | `CollectionObjectName` | `Reference Group` | Required |
| `correspondingGroup` | `CollectionObjectName` | `Corresponding Group` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Rx` | `double` | `Rx` |
| `Ry` | `double` | `Ry` |
| `Rz` | `double` | `Rz` |

```csharp
public sealed record ComputeGroupToGroupOrientationRxRyRzResult
{
    public required double Rx { get; init; }

    public required double Ry { get; init; }

    public required double Rz { get; init; }
}

public Task<ComputeGroupToGroupOrientationRxRyRzResult> ComputeGroupToGroupOrientationRxRyRzAsync(
    CollectionObjectName referenceGroup,
    CollectionObjectName correspondingGroup,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ComputeGroupToGroupOrientationRxRyRzAsync(referenceGroup: referenceGroup, correspondingGroup: correspondingGroup);
```

Returns the 3 MP outputs in the named `ComputeGroupToGroupOrientationRxRyRzResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Create Point Uncertainty Cloud Point Sets

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Create Point Uncertainty Cloud Point Sets](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets) · [gRPC contract](/api/grpc/analysis-operations#create-point-uncertainty-cloud-point-sets)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameList` | `IEnumerable<PointName>` | `Point Name List` | Required |
| `numberOfSamples` | `int` | `Number of Samples` | 1000 |
| `uncertaintyReferenceFrameMode` | `string` | `Uncertainty Reference Frame Mode` | With respect to WORLD |
| `groupingMode` | `string` | `Grouping mode` | Group per point |
| `pointSetMode` | `string` | `Point set mode` | Point clouds |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `PointGroups` | `CollectionObjectName[]` | `Point Groups` |
| `PointSets` | `CollectionObjectName[]` | `Point Sets` |
| `PointClouds` | `CollectionObjectName[]` | `Point Clouds` |

```csharp
public sealed record CreatePointUncertaintyCloudPointSetsResult
{
    public required CollectionObjectName[] PointGroups { get; init; }

    public required CollectionObjectName[] PointSets { get; init; }

    public required CollectionObjectName[] PointClouds { get; init; }
}

public Task<CreatePointUncertaintyCloudPointSetsResult> CreatePointUncertaintyCloudPointSetsAsync(
    IEnumerable<PointName> pointNameList,
    int numberOfSamples = 1000,
    string uncertaintyReferenceFrameMode = "With respect to WORLD",
    string groupingMode = "Group per point",
    string pointSetMode = "Point clouds",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CreatePointUncertaintyCloudPointSetsAsync(pointNameList: pointNameList);
```

Returns the 3 MP outputs in the named `CreatePointUncertaintyCloudPointSetsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Create Point Uncertainty Fields

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Create Point Uncertainty Fields](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields) · [gRPC contract](/api/grpc/analysis-operations#create-point-uncertainty-fields)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameList` | `IEnumerable<PointName>` | `Point Name List` | Required |
| `numberOfSamples` | `int` | `Number of Samples` | 1000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CreatePointUncertaintyFieldsAsync(
    IEnumerable<PointName> pointNameList,
    int numberOfSamples = 1000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CreatePointUncertaintyFieldsAsync(pointNameList: pointNameList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Fit Geometry to Point Group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Fit Geometry to Point Group](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-point-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryType` | `GeometryType` | `Geometry Type` | Required |
| `groupToFit` | `CollectionObjectName` | `Group To Fit` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `reportDeviations` | `bool` | `Report Deviations` | false |
| `fitInterfaceTolerance10UseProfile` | `double` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignoreOutOfTolerancePoints` | `bool` | `Ignore Out of Tolerance Points` | false |
| `startingConditionGeometryOptional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task FitGeometryToPointGroupAsync(
    GeometryType geometryType,
    CollectionObjectName groupToFit,
    CollectionObjectName resultingObjectName,
    string fitProfileName,
    bool reportDeviations,
    double fitInterfaceTolerance10UseProfile,
    bool ignoreOutOfTolerancePoints,
    CollectionObjectName startingConditionGeometryOptional,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FitGeometryToPointGroupAsync(geometryType: geometryType, groupToFit: groupToFit, resultingObjectName: resultingObjectName, fitProfileName: fitProfileName, reportDeviations: reportDeviations, fitInterfaceTolerance10UseProfile: fitInterfaceTolerance10UseProfile, ignoreOutOfTolerancePoints: ignoreOutOfTolerancePoints, startingConditionGeometryOptional: startingConditionGeometryOptional);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Fit Geometry to Point Group Projected to Plane

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Fit Geometry to Point Group Projected to Plane](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-point-group-projected-to-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryType` | `GeometryType` | `Geometry Type` | Required |
| `groupToFit` | `CollectionObjectName` | `Group To Fit` | Required |
| `planeName` | `CollectionObjectName` | `Plane Name` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `reportDeviations` | `bool` | `Report Deviations` | false |
| `fitInterfaceTolerance10UseProfile` | `double` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignoreOutOfTolerancePoints` | `bool` | `Ignore Out of Tolerance Points` | false |
| `startingConditionGeometryOptional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task FitGeometryToPointGroupProjectedToPlaneAsync(
    GeometryType geometryType,
    CollectionObjectName groupToFit,
    CollectionObjectName planeName,
    CollectionObjectName resultingObjectName,
    string fitProfileName,
    bool reportDeviations,
    double fitInterfaceTolerance10UseProfile,
    bool ignoreOutOfTolerancePoints,
    CollectionObjectName startingConditionGeometryOptional,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FitGeometryToPointGroupProjectedToPlaneAsync(geometryType: geometryType, groupToFit: groupToFit, planeName: planeName, resultingObjectName: resultingObjectName, fitProfileName: fitProfileName, reportDeviations: reportDeviations, fitInterfaceTolerance10UseProfile: fitInterfaceTolerance10UseProfile, ignoreOutOfTolerancePoints: ignoreOutOfTolerancePoints, startingConditionGeometryOptional: startingConditionGeometryOptional);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Fit Geometry to Points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Fit Geometry to Points](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryType` | `GeometryType` | `Geometry Type` | Required |
| `pointsToFit` | `IEnumerable<PointName>` | `Points to Fit` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `reportDeviations` | `bool` | `Report Deviations` | false |
| `fitInterfaceTolerance10UseProfile` | `double` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignoreOutOfTolerancePoints` | `bool` | `Ignore Out of Tolerance Points` | false |
| `startingConditionGeometryOptional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task FitGeometryToPointsAsync(
    GeometryType geometryType,
    IEnumerable<PointName> pointsToFit,
    CollectionObjectName resultingObjectName,
    string fitProfileName,
    bool reportDeviations,
    double fitInterfaceTolerance10UseProfile,
    bool ignoreOutOfTolerancePoints,
    CollectionObjectName startingConditionGeometryOptional,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FitGeometryToPointsAsync(geometryType: geometryType, pointsToFit: pointsToFit, resultingObjectName: resultingObjectName, fitProfileName: fitProfileName, reportDeviations: reportDeviations, fitInterfaceTolerance10UseProfile: fitInterfaceTolerance10UseProfile, ignoreOutOfTolerancePoints: ignoreOutOfTolerancePoints, startingConditionGeometryOptional: startingConditionGeometryOptional);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get B-Spline Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get B-Spline Properties](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties) · [gRPC contract](/api/grpc/analysis-operations#get-b-spline-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `bSplineName` | `CollectionObjectName` | `B-Spline Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Degree` | `int` | `Degree` |
| `Knots` | `int` | `Knots` |
| `ControlPoints` | `int` | `Control Points` |
| `RangeMin` | `double` | `Range Min` |
| `RangeMax` | `double` | `Range Max` |
| `Length` | `double` | `Length` |

```csharp
public sealed record GetBSplinePropertiesResult
{
    public required int Degree { get; init; }

    public required int Knots { get; init; }

    public required int ControlPoints { get; init; }

    public required double RangeMin { get; init; }

    public required double RangeMax { get; init; }

    public required double Length { get; init; }
}

public Task<GetBSplinePropertiesResult> GetBSplinePropertiesAsync(
    CollectionObjectName bSplineName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetBSplinePropertiesAsync(bSplineName: bSplineName);
```

Returns the 6 MP outputs in the named `GetBSplinePropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Circle Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Circle Properties](/mp-command-catalog/commands/analysis-operations#get-circle-properties) · [gRPC contract](/api/grpc/analysis-operations#get-circle-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circleName` | `CollectionObjectName` | `Circle Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CenterCoordinate` | `Vector` | `Center Coordinate` |
| `NormalDirection` | `Vector` | `Normal Direction` |
| `Radius` | `double` | `Radius` |
| `Diameter` | `double` | `Diameter` |

```csharp
public sealed record GetCirclePropertiesResult
{
    public required Vector CenterCoordinate { get; init; }

    public required Vector NormalDirection { get; init; }

    public required double Radius { get; init; }

    public required double Diameter { get; init; }
}

public Task<GetCirclePropertiesResult> GetCirclePropertiesAsync(
    CollectionObjectName circleName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCirclePropertiesAsync(circleName: circleName);
```

Returns the 4 MP outputs in the named `GetCirclePropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Cone Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Cone Properties](/mp-command-catalog/commands/analysis-operations#get-cone-properties) · [gRPC contract](/api/grpc/analysis-operations#get-cone-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `coneName` | `CollectionObjectName` | `Cone Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ConeEndPointInWorkingCoordinates` | `Vector` | `Cone End Point (in working coordinates)` |
| `ConeAxisInWorkingCoordinates` | `Vector` | `Cone Axis (in working coordinates)` |
| `ConeLength` | `double` | `Cone Length` |
| `ConeThetaStart` | `double` | `Cone Theta Start` |
| `ConeThetaSpan` | `double` | `Cone Theta Span` |
| `ConeIncludedAngle` | `double` | `Cone Included Angle` |
| `CutLengthFromApex` | `double` | `Cut Length from Apex` |

```csharp
public sealed record GetConePropertiesResult
{
    public required Vector ConeEndPointInWorkingCoordinates { get; init; }

    public required Vector ConeAxisInWorkingCoordinates { get; init; }

    public required double ConeLength { get; init; }

    public required double ConeThetaStart { get; init; }

    public required double ConeThetaSpan { get; init; }

    public required double ConeIncludedAngle { get; init; }

    public required double CutLengthFromApex { get; init; }
}

public Task<GetConePropertiesResult> GetConePropertiesAsync(
    CollectionObjectName coneName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetConePropertiesAsync(coneName: coneName);
```

Returns the 7 MP outputs in the named `GetConePropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Coordinate for i-th Point in Point Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Coordinate for i-th Point in Point Set](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-coordinate-for-i-th-point-in-point-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointSet` | `CollectionObjectName` | `Point Set` | Required |
| `pointSetIndex` | `int` | `Point Set Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `PointName` | `string` | `Point Name` |
| `PointCoordinates` | `Vector` | `Point Coordinates` |

```csharp
public sealed record GetCoordinateForIthPointInPointSetResult
{
    public required string PointName { get; init; }

    public required Vector PointCoordinates { get; init; }
}

public Task<GetCoordinateForIthPointInPointSetResult> GetCoordinateForIthPointInPointSetAsync(
    CollectionObjectName pointSet,
    int pointSetIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCoordinateForIthPointInPointSetAsync(pointSet: pointSet);
```

Returns the 2 MP outputs in the named `GetCoordinateForIthPointInPointSetResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Cylinder Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Cylinder Properties](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties) · [gRPC contract](/api/grpc/analysis-operations#get-cylinder-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cylinderName` | `CollectionObjectName` | `Cylinder Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `BeginCoordinate` | `Vector` | `Begin Coordinate` |
| `EndCoordinate` | `Vector` | `End Coordinate` |
| `AxisDirection` | `Vector` | `Axis Direction` |
| `Length` | `double` | `Length` |
| `Radius` | `double` | `Radius` |
| `Diameter` | `double` | `Diameter` |
| `NominalsPointInward` | `bool` | `Nominals Point Inward` |
| `Facets` | `int` | `Facets` |
| `EnableThetaExtentDisplayMode` | `bool` | `Enable Theta Extent Display Mode` |
| `ThetaStartInDegrees` | `double` | `Theta Start in Degrees` |
| `ThetaSpanInDegrees` | `double` | `Theta Span in Degrees` |

```csharp
public sealed record GetCylinderPropertiesResult
{
    public required Vector BeginCoordinate { get; init; }

    public required Vector EndCoordinate { get; init; }

    public required Vector AxisDirection { get; init; }

    public required double Length { get; init; }

    public required double Radius { get; init; }

    public required double Diameter { get; init; }

    public required bool NominalsPointInward { get; init; }

    public required int Facets { get; init; }

    public required bool EnableThetaExtentDisplayMode { get; init; }

    public required double ThetaStartInDegrees { get; init; }

    public required double ThetaSpanInDegrees { get; init; }
}

public Task<GetCylinderPropertiesResult> GetCylinderPropertiesAsync(
    CollectionObjectName cylinderName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCylinderPropertiesAsync(cylinderName: cylinderName);
```

Returns the 11 MP outputs in the named `GetCylinderPropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Ellipse Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Ellipse Properties](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties) · [gRPC contract](/api/grpc/analysis-operations#get-ellipse-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ellipseName` | `CollectionObjectName` | `Ellipse Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CenterCoordinate` | `Vector` | `Center Coordinate` |
| `NormalDirection` | `Vector` | `Normal Direction` |
| `MajorAxisRadius` | `double` | `Major Axis Radius` |
| `MinorAxisRadius` | `double` | `Minor Axis Radius` |

```csharp
public sealed record GetEllipsePropertiesResult
{
    public required Vector CenterCoordinate { get; init; }

    public required Vector NormalDirection { get; init; }

    public required double MajorAxisRadius { get; init; }

    public required double MinorAxisRadius { get; init; }
}

public Task<GetEllipsePropertiesResult> GetEllipsePropertiesAsync(
    CollectionObjectName ellipseName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetEllipsePropertiesAsync(ellipseName: ellipseName);
```

Returns the 4 MP outputs in the named `GetEllipsePropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Euler Parameters for Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Euler Parameters for Frame](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame) · [gRPC contract](/api/grpc/analysis-operations#get-euler-parameters-for-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame` | `CollectionObjectName` | `Frame` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `X` | `double` | `X` |
| `Y` | `double` | `Y` |
| `Z` | `double` | `Z` |
| `E1` | `double` | `e1` |
| `E2` | `double` | `e2` |
| `E3` | `double` | `e3` |
| `E4` | `double` | `e4` |

```csharp
public sealed record GetEulerParametersForFrameResult
{
    public required double X { get; init; }

    public required double Y { get; init; }

    public required double Z { get; init; }

    public required double E1 { get; init; }

    public required double E2 { get; init; }

    public required double E3 { get; init; }

    public required double E4 { get; init; }
}

public Task<GetEulerParametersForFrameResult> GetEulerParametersForFrameAsync(
    CollectionObjectName frame,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetEulerParametersForFrameAsync(frame: frame);
```

Returns the 7 MP outputs in the named `GetEulerParametersForFrameResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Euler Parameters for i-th Frame in Frame Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Euler Parameters for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSet` | `CollectionObjectName` | `Frame Set` | Required |
| `frameSetIndex` | `int` | `Frame Set Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `X` | `double` | `X` |
| `Y` | `double` | `Y` |
| `Z` | `double` | `Z` |
| `E1` | `double` | `e1` |
| `E2` | `double` | `e2` |
| `E3` | `double` | `e3` |
| `E4` | `double` | `e4` |

```csharp
public sealed record GetEulerParametersForIthFrameInFrameSetResult
{
    public required double X { get; init; }

    public required double Y { get; init; }

    public required double Z { get; init; }

    public required double E1 { get; init; }

    public required double E2 { get; init; }

    public required double E3 { get; init; }

    public required double E4 { get; init; }
}

public Task<GetEulerParametersForIthFrameInFrameSetResult> GetEulerParametersForIthFrameInFrameSetAsync(
    CollectionObjectName frameSet,
    int frameSetIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetEulerParametersForIthFrameInFrameSetAsync(frameSet: frameSet);
```

Returns the 7 MP outputs in the named `GetEulerParametersForIthFrameInFrameSetResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get i-th Collection Name

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get i-th Collection Name](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name) · [gRPC contract](/api/grpc/analysis-operations#get-i-th-collection-name)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionIndex` | `int` | `Collection Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ResultantName` | `string` | `Resultant Name` |

```csharp
public Task<string> GetIthCollectionNameAsync(
    int collectionIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetIthCollectionNameAsync();
```

Returns the MP output `Resultant Name` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get i-th Point From Group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get i-th Point From Group](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group) · [gRPC contract](/api/grpc/analysis-operations#get-i-th-point-from-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |
| `pointIndex` | `int` | `Point Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CompletePointName` | `PointName` | `Complete Point Name` |
| `PointNameOnly` | `string` | `Point Name Only` |
| `VectorInWorking` | `Vector` | `Vector in Working` |

```csharp
public sealed record GetIthPointFromGroupResult
{
    public required PointName CompletePointName { get; init; }

    public required string PointNameOnly { get; init; }

    public required Vector VectorInWorking { get; init; }
}

public Task<GetIthPointFromGroupResult> GetIthPointFromGroupAsync(
    CollectionObjectName groupName,
    int pointIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetIthPointFromGroupAsync(groupName: groupName);
```

Returns the 3 MP outputs in the named `GetIthPointFromGroupResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Line Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Line Properties](/mp-command-catalog/commands/analysis-operations#get-line-properties) · [gRPC contract](/api/grpc/analysis-operations#get-line-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lineName` | `CollectionObjectName` | `Line Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `BeginCoordinate` | `Vector` | `Begin Coordinate` |
| `EndCoordinate` | `Vector` | `End Coordinate` |
| `DeltaComponents` | `Vector` | `Delta Components` |
| `Length` | `double` | `Length` |
| `AngleAboutXFromYInYzPlane` | `double` | `Angle about +X from +Y in YZ plane` |
| `AngleAboutYFromZInXzPlane` | `double` | `Angle about +Y from +Z in XZ plane` |
| `AngleAboutZFromXInXyPlane` | `double` | `Angle about +Z from +X in XY plane` |

```csharp
public sealed record GetLinePropertiesResult
{
    public required Vector BeginCoordinate { get; init; }

    public required Vector EndCoordinate { get; init; }

    public required Vector DeltaComponents { get; init; }

    public required double Length { get; init; }

    public required double AngleAboutXFromYInYzPlane { get; init; }

    public required double AngleAboutYFromZInXzPlane { get; init; }

    public required double AngleAboutZFromXInXyPlane { get; init; }
}

public Task<GetLinePropertiesResult> GetLinePropertiesAsync(
    CollectionObjectName lineName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetLinePropertiesAsync(lineName: lineName);
```

Returns the 7 MP outputs in the named `GetLinePropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Measurement Auxiliary Data

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Measurement Auxiliary Data](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-auxiliary-data)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |
| `auxiliaryName` | `string` | `Auxiliary Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `double` | `Value` |
| `Units` | `string` | `Units` |

```csharp
public sealed record GetMeasurementAuxiliaryDataResult
{
    public required double Value { get; init; }

    public required string Units { get; init; }
}

public Task<GetMeasurementAuxiliaryDataResult> GetMeasurementAuxiliaryDataAsync(
    PointName pointName,
    string auxiliaryName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetMeasurementAuxiliaryDataAsync(pointName: pointName);
```

Returns the 2 MP outputs in the named `GetMeasurementAuxiliaryDataResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Measurement Info Data

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Measurement Info Data](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-info-data)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `InfoData` | `string` | `Info Data` |

```csharp
public Task<string> GetMeasurementInfoDataAsync(
    PointName pointName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetMeasurementInfoDataAsync(pointName: pointName);
```

Returns the MP output `Info Data` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Measurement Weather Data

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Measurement Weather Data](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-weather-data)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TemperatureDegF` | `double` | `Temperature (deg F)` |
| `PressureInHg` | `double` | `Pressure (in. Hg)` |
| `HumidityRh` | `double` | `Humidity (% RH)` |

```csharp
public sealed record GetMeasurementWeatherDataResult
{
    public required double TemperatureDegF { get; init; }

    public required double PressureInHg { get; init; }

    public required double HumidityRh { get; init; }
}

public Task<GetMeasurementWeatherDataResult> GetMeasurementWeatherDataAsync(
    PointName pointName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetMeasurementWeatherDataAsync(pointName: pointName);
```

Returns the 3 MP outputs in the named `GetMeasurementWeatherDataResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Number of Collections

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Number of Collections](/mp-command-catalog/commands/analysis-operations#get-number-of-collections) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-collections)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TotalCount` | `int` | `Total Count` |

```csharp
public Task<int> GetNumberOfCollectionsAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNumberOfCollectionsAsync();
```

Returns the MP output `Total Count` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Number of Frames In Frame Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Number of Frames In Frame Set](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-frames-in-frame-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSetContainer` | `CollectionObjectName` | `Frame Set Container` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TotalCount` | `int` | `Total Count` |

```csharp
public Task<int> GetNumberOfFramesInFrameSetAsync(
    CollectionObjectName frameSetContainer,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNumberOfFramesInFrameSetAsync(frameSetContainer: frameSetContainer);
```

Returns the MP output `Total Count` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Number of Points in Group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Number of Points in Group](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-points-in-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TotalCount` | `int` | `Total Count` |

```csharp
public Task<int> GetNumberOfPointsInGroupAsync(
    CollectionObjectName groupName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNumberOfPointsInGroupAsync(groupName: groupName);
```

Returns the MP output `Total Count` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Number of Points In Point Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Number of Points In Point Set](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-points-in-point-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointSetContainer` | `CollectionObjectName` | `Point Set Container` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TotalCount` | `int` | `Total Count` |

```csharp
public Task<int> GetNumberOfPointsInPointSetAsync(
    CollectionObjectName pointSetContainer,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNumberOfPointsInPointSetAsync(pointSetContainer: pointSetContainer);
```

Returns the MP output `Total Count` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Object Reporting Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Object Reporting Frame](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame) · [gRPC contract](/api/grpc/analysis-operations#get-object-reporting-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ReportingFrame` | `CollectionObjectName` | `Reporting Frame` |

```csharp
public Task<CollectionObjectName> GetObjectReportingFrameAsync(
    CollectionObjectName objectName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetObjectReportingFrameAsync(objectName: objectName);
```

Returns the MP output `Reporting Frame` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Plane Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Plane Properties](/mp-command-catalog/commands/analysis-operations#get-plane-properties) · [gRPC contract](/api/grpc/analysis-operations#get-plane-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planeName` | `CollectionObjectName` | `Plane Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `NormalDirection` | `Vector` | `Normal Direction` |
| `PointOnPlane` | `Vector` | `Point on Plane` |
| `DParameter` | `double` | `D Parameter` |

```csharp
public sealed record GetPlanePropertiesResult
{
    public required Vector NormalDirection { get; init; }

    public required Vector PointOnPlane { get; init; }

    public required double DParameter { get; init; }
}

public Task<GetPlanePropertiesResult> GetPlanePropertiesAsync(
    CollectionObjectName planeName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPlanePropertiesAsync(planeName: planeName);
```

Returns the 3 MP outputs in the named `GetPlanePropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point Coordinate

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point Coordinate](/mp-command-catalog/commands/analysis-operations#get-point-coordinate) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `VectorRepresentation` | `Vector` | `Vector Representation` |
| `XValue` | `double` | `X Value` |
| `YValue` | `double` | `Y Value` |
| `ZValue` | `double` | `Z Value` |

```csharp
public sealed record GetPointCoordinateResult
{
    public required Vector VectorRepresentation { get; init; }

    public required double XValue { get; init; }

    public required double YValue { get; init; }

    public required double ZValue { get; init; }
}

public Task<GetPointCoordinateResult> GetPointCoordinateAsync(
    PointName pointName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointCoordinateAsync(pointName: pointName);
```

Returns the 4 MP outputs in the named `GetPointCoordinateResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point Coordinate (Cylindrical)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point Coordinate (Cylindrical)](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate-cylindrical)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RadiusValue` | `double` | `Radius Value` |
| `ThetaValue` | `double` | `Theta Value` |
| `ZValue` | `double` | `Z Value` |

```csharp
public sealed record GetPointCoordinateCylindricalResult
{
    public required double RadiusValue { get; init; }

    public required double ThetaValue { get; init; }

    public required double ZValue { get; init; }
}

public Task<GetPointCoordinateCylindricalResult> GetPointCoordinateCylindricalAsync(
    PointName pointName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointCoordinateCylindricalAsync(pointName: pointName);
```

Returns the 3 MP outputs in the named `GetPointCoordinateCylindricalResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point Coordinate (Polar)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point Coordinate (Polar)](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate-polar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RadiusValue` | `double` | `Radius Value` |
| `ThetaValue` | `double` | `Theta Value` |
| `PhiValue` | `double` | `Phi Value` |

```csharp
public sealed record GetPointCoordinatePolarResult
{
    public required double RadiusValue { get; init; }

    public required double ThetaValue { get; init; }

    public required double PhiValue { get; init; }
}

public Task<GetPointCoordinatePolarResult> GetPointCoordinatePolarAsync(
    PointName pointName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointCoordinatePolarAsync(pointName: pointName);
```

Returns the 3 MP outputs in the named `GetPointCoordinatePolarResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point Properties](/mp-command-catalog/commands/analysis-operations#get-point-properties) · [gRPC contract](/api/grpc/analysis-operations#get-point-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `PlanarOffset` | `double` | `Planar Offset` |
| `RadialOffset` | `double` | `Radial Offset` |
| `Ux` | `double` | `Ux` |
| `Uy` | `double` | `Uy` |
| `Uz` | `double` | `Uz` |
| `Umag` | `double` | `Umag` |
| `PositionTolerance` | `Vector` | `Position Tolerance` |
| `ComponentWeights` | `Vector` | `Component Weights` |

```csharp
public sealed record GetPointPropertiesResult
{
    public required double PlanarOffset { get; init; }

    public required double RadialOffset { get; init; }

    public required double Ux { get; init; }

    public required double Uy { get; init; }

    public required double Uz { get; init; }

    public required double Umag { get; init; }

    public required Vector PositionTolerance { get; init; }

    public required Vector ComponentWeights { get; init; }
}

public Task<GetPointPropertiesResult> GetPointPropertiesAsync(
    PointName pointName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointPropertiesAsync(pointName: pointName);
```

Returns the 8 MP outputs in the named `GetPointPropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point To Line Distance

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point To Line Distance](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance) · [gRPC contract](/api/grpc/analysis-operations#get-point-to-line-distance)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |
| `line` | `CollectionObjectName` | `Line` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `VectorRepresentation` | `Vector` | `Vector Representation` |
| `XValue` | `double` | `X Value` |
| `YValue` | `double` | `Y Value` |
| `ZValue` | `double` | `Z Value` |
| `Magnitude` | `double` | `Magnitude` |

```csharp
public sealed record GetPointToLineDistanceResult
{
    public required Vector VectorRepresentation { get; init; }

    public required double XValue { get; init; }

    public required double YValue { get; init; }

    public required double ZValue { get; init; }

    public required double Magnitude { get; init; }
}

public Task<GetPointToLineDistanceResult> GetPointToLineDistanceAsync(
    PointName point,
    CollectionObjectName line,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointToLineDistanceAsync(point: point, line: line);
```

Returns the 5 MP outputs in the named `GetPointToLineDistanceResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point To Point Distance

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point To Point Distance](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance) · [gRPC contract](/api/grpc/analysis-operations#get-point-to-point-distance)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `firstPoint` | `PointName` | `First Point` | Required |
| `secondPoint` | `PointName` | `Second Point` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `VectorRepresentation` | `Vector` | `Vector Representation` |
| `XValue` | `double` | `X Value` |
| `YValue` | `double` | `Y Value` |
| `ZValue` | `double` | `Z Value` |
| `Magnitude` | `double` | `Magnitude` |

```csharp
public sealed record GetPointToPointDistanceResult
{
    public required Vector VectorRepresentation { get; init; }

    public required double XValue { get; init; }

    public required double YValue { get; init; }

    public required double ZValue { get; init; }

    public required double Magnitude { get; init; }
}

public Task<GetPointToPointDistanceResult> GetPointToPointDistanceAsync(
    PointName firstPoint,
    PointName secondPoint,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointToPointDistanceAsync(firstPoint: firstPoint, secondPoint: secondPoint);
```

Returns the 5 MP outputs in the named `GetPointToPointDistanceResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point Tolerance

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point Tolerance](/mp-command-catalog/commands/analysis-operations#get-point-tolerance) · [gRPC contract](/api/grpc/analysis-operations#get-point-tolerance)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighXTolerance` | `bool` | `Use High X Tolerance?` |
| `HighXTolerance` | `double` | `High X Tolerance` |
| `UseHighYTolerance` | `bool` | `Use High Y Tolerance?` |
| `HighYTolerance` | `double` | `High Y Tolerance` |
| `UseHighZTolerance` | `bool` | `Use High Z Tolerance?` |
| `HighZTolerance` | `double` | `High Z Tolerance` |
| `UseHighMagTolerance` | `bool` | `Use High Mag Tolerance?` |
| `HighMagTolerance` | `double` | `High Mag Tolerance` |
| `UseLowXTolerance` | `bool` | `Use Low X Tolerance?` |
| `LowXTolerance` | `double` | `Low X Tolerance` |
| `UseLowYTolerance` | `bool` | `Use Low Y Tolerance?` |
| `LowYTolerance` | `double` | `Low Y Tolerance` |
| `UseLowZTolerance` | `bool` | `Use Low Z Tolerance?` |
| `LowZTolerance` | `double` | `Low Z Tolerance` |
| `UseLowMagTolerance` | `bool` | `Use Low Mag Tolerance?` |
| `LowMagTolerance` | `double` | `Low Mag Tolerance` |
| `VectorTolerance` | `Vector` | `Vector Tolerance` |

```csharp
public sealed record GetPointToleranceResult
{
    public required bool UseHighXTolerance { get; init; }

    public required double HighXTolerance { get; init; }

    public required bool UseHighYTolerance { get; init; }

    public required double HighYTolerance { get; init; }

    public required bool UseHighZTolerance { get; init; }

    public required double HighZTolerance { get; init; }

    public required bool UseHighMagTolerance { get; init; }

    public required double HighMagTolerance { get; init; }

    public required bool UseLowXTolerance { get; init; }

    public required double LowXTolerance { get; init; }

    public required bool UseLowYTolerance { get; init; }

    public required double LowYTolerance { get; init; }

    public required bool UseLowZTolerance { get; init; }

    public required double LowZTolerance { get; init; }

    public required bool UseLowMagTolerance { get; init; }

    public required double LowMagTolerance { get; init; }

    public required Vector VectorTolerance { get; init; }
}

public Task<GetPointToleranceResult> GetPointToleranceAsync(
    PointName pointName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointToleranceAsync(pointName: pointName);
```

Returns the 17 MP outputs in the named `GetPointToleranceResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Slot Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Slot Properties](/mp-command-catalog/commands/analysis-operations#get-slot-properties) · [gRPC contract](/api/grpc/analysis-operations#get-slot-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `slotName` | `CollectionObjectName` | `Slot Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `SlotTransformInWorkingCoordinates` | `Transform` | `Slot Transform (in working coordinates` |
| `CenterInWorkingCoordinates` | `Vector` | `Center (in working coordinates)` |
| `NormalDirectionInWorkingCoordinates` | `Vector` | `Normal Direction (in working coordinates)` |
| `SlotLength` | `double` | `Slot Length` |
| `SlotWidth` | `double` | `Slot Width` |
| `RoundSlotType` | `bool` | `Round Slot Type` |
| `CenterlinePt1InWorkingCoordinates` | `Vector` | `Centerline Pt. 1 (in working coordinates)` |
| `CenterlinePt2InWorkingCoordinates` | `Vector` | `Centerline Pt. 2 (in working coordinates)` |

```csharp
public sealed record GetSlotPropertiesResult
{
    public required Transform SlotTransformInWorkingCoordinates { get; init; }

    public required Vector CenterInWorkingCoordinates { get; init; }

    public required Vector NormalDirectionInWorkingCoordinates { get; init; }

    public required double SlotLength { get; init; }

    public required double SlotWidth { get; init; }

    public required bool RoundSlotType { get; init; }

    public required Vector CenterlinePt1InWorkingCoordinates { get; init; }

    public required Vector CenterlinePt2InWorkingCoordinates { get; init; }
}

public Task<GetSlotPropertiesResult> GetSlotPropertiesAsync(
    CollectionObjectName slotName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetSlotPropertiesAsync(slotName: slotName);
```

Returns the 8 MP outputs in the named `GetSlotPropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Sphere Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Sphere Properties](/mp-command-catalog/commands/analysis-operations#get-sphere-properties) · [gRPC contract](/api/grpc/analysis-operations#get-sphere-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sphereName` | `CollectionObjectName` | `Sphere Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CenterCoordinate` | `Vector` | `Center Coordinate` |
| `Radius` | `double` | `Radius` |
| `Diameter` | `double` | `Diameter` |

```csharp
public sealed record GetSpherePropertiesResult
{
    public required Vector CenterCoordinate { get; init; }

    public required double Radius { get; init; }

    public required double Diameter { get; init; }
}

public Task<GetSpherePropertiesResult> GetSpherePropertiesAsync(
    CollectionObjectName sphereName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetSpherePropertiesAsync(sphereName: sphereName);
```

Returns the 3 MP outputs in the named `GetSpherePropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Surface Physical Stats

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Surface Physical Stats](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats) · [gRPC contract](/api/grpc/analysis-operations#get-surface-physical-stats)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surfaceName` | `CollectionObjectName` | `Surface Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Volume` | `double` | `Volume` |
| `Area` | `double` | `Area` |

```csharp
public sealed record GetSurfacePhysicalStatsResult
{
    public required double Volume { get; init; }

    public required double Area { get; init; }
}

public Task<GetSurfacePhysicalStatsResult> GetSurfacePhysicalStatsAsync(
    CollectionObjectName surfaceName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetSurfacePhysicalStatsAsync(surfaceName: surfaceName);
```

Returns the 2 MP outputs in the named `GetSurfacePhysicalStatsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Timestamp for i-th Frame in Frame Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Timestamp for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSet` | `CollectionObjectName` | `Frame Set` | Required |
| `frameSetIndex` | `int` | `Frame Set Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Timestamp` | `double` | `Timestamp` |

```csharp
public Task<double> GetTimestampForIthFrameInFrameSetAsync(
    CollectionObjectName frameSet,
    int frameSetIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetTimestampForIthFrameInFrameSetAsync(frameSet: frameSet);
```

Returns the MP output `Timestamp` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Timestamp for i-th Point in Point Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Timestamp for i-th Point in Point Set](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-timestamp-for-i-th-point-in-point-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointSet` | `CollectionObjectName` | `Point Set` | Required |
| `pointSetIndex` | `int` | `Point Set Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Timestamp` | `double` | `Timestamp` |

```csharp
public Task<double> GetTimestampForIthPointInPointSetAsync(
    CollectionObjectName pointSet,
    int pointSetIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetTimestampForIthPointInPointSetAsync(pointSet: pointSet);
```

Returns the MP output `Timestamp` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Torus Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Torus Properties](/mp-command-catalog/commands/analysis-operations#get-torus-properties) · [gRPC contract](/api/grpc/analysis-operations#get-torus-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `torusName` | `CollectionObjectName` | `Torus Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CenterCoordinate` | `Vector` | `Center Coordinate` |
| `NormalDirection` | `Vector` | `Normal Direction` |
| `MajorRadius` | `double` | `Major Radius` |
| `MinorRadius` | `double` | `Minor Radius` |

```csharp
public sealed record GetTorusPropertiesResult
{
    public required Vector CenterCoordinate { get; init; }

    public required Vector NormalDirection { get; init; }

    public required double MajorRadius { get; init; }

    public required double MinorRadius { get; init; }
}

public Task<GetTorusPropertiesResult> GetTorusPropertiesAsync(
    CollectionObjectName torusName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetTorusPropertiesAsync(torusName: torusName);
```

Returns the 4 MP outputs in the named `GetTorusPropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Transform for i-th Frame in Frame Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Transform for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-transform-for-i-th-frame-in-frame-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSet` | `CollectionObjectName` | `Frame Set` | Required |
| `frameSetIndex` | `int` | `Frame Set Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TransformInWorking` | `Transform` | `Transform in Working` |

```csharp
public Task<Transform> GetTransformForIthFrameInFrameSetAsync(
    CollectionObjectName frameSet,
    int frameSetIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetTransformForIthFrameInFrameSetAsync(frameSet: frameSet);
```

Returns the MP output `Transform in Working` directly as `Transform`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Group To Surface Fit

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Group To Surface Fit](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit) · [gRPC contract](/api/grpc/analysis-operations#group-to-surface-fit)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupToFit` | `CollectionObjectName` | `Group to Fit` | Required |
| `surface` | `CollectionObjectName` | `Surface` | Required |
| `doConventionalFit` | `bool` | `Do Conventional Fit` | false |
| `rmsTolerance00ForNone` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `OptimumTransform` | `Transform` | `Optimum Transform` |
| `RmsDeviation` | `double` | `RMS Deviation` |
| `MaximumAbsoluteDeviation` | `double` | `Maximum Absolute Deviation` |

```csharp
public sealed record GroupToSurfaceFitResult
{
    public required Transform OptimumTransform { get; init; }

    public required double RmsDeviation { get; init; }

    public required double MaximumAbsoluteDeviation { get; init; }
}

public Task<GroupToSurfaceFitResult> GroupToSurfaceFitAsync(
    CollectionObjectName groupToFit,
    CollectionObjectName surface,
    bool doConventionalFit = false,
    double rmsTolerance00ForNone = 0.000000,
    double maximumAbsoluteTolerance00ForNone = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GroupToSurfaceFitAsync(groupToFit: groupToFit, surface: surface);
```

Returns the 3 MP outputs in the named `GroupToSurfaceFitResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Import Geometry Fit Profiles

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Import Geometry Fit Profiles](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles) · [gRPC contract](/api/grpc/analysis-operations#import-geometry-fit-profiles)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryFitProfilesFilePath` | `FileReference` | `Geometry Fit Profiles File Path` | Required |
| `overwriteProfilesWithSameName` | `bool` | `Overwrite Profiles with Same Name?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ImportGeometryFitProfilesAsync(
    FileReference geometryFitProfilesFilePath,
    bool overwriteProfilesWithSameName = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ImportGeometryFitProfilesAsync(geometryFitProfilesFilePath: geometryFitProfilesFilePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Is Object of Type

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Is Object of Type](/mp-command-catalog/commands/analysis-operations#is-object-of-type) · [gRPC contract](/api/grpc/analysis-operations#is-object-of-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |
| `objectType` | `ObjectType` | `Object Type` | Any |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Resultant` | `bool` | `Resultant` |

```csharp
public Task<bool> IsObjectOfTypeAsync(
    CollectionObjectName objectName,
    ObjectType objectType,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.IsObjectOfTypeAsync(objectName: objectName, objectType: objectType);
```

Returns the MP output `Resultant` directly as `bool`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Circle Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Circle Fit Profile](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-circle-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measuredSideForPlanarOffset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `overridePlanarOffset10UseCurrent` | `double` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planarOffsetDirection` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `lockRadius10DoNotLock` | `double` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `circleComputationTechnique` | `CompTechnique` | `Circle Computation Technique` | Standard |
| `reverseNormalVectorAfterFit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1Center` | `bool` | `Cardinal Pt.1: Center?` | true |
| `cardinalPt2PointOnNormal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeCircleFitProfileAsync(
    string fitProfileName,
    MeasuredSideForRadialOffset measuredSideForRadialOffset,
    double overrideRadialOffset10UseCurrent,
    MeasuredSideForPlanarOffset measuredSideForPlanarOffset,
    double overridePlanarOffset10UseCurrent,
    NormalDirection planarOffsetDirection,
    double lockRadius10DoNotLock,
    CompTechnique circleComputationTechnique,
    bool reverseNormalVectorAfterFit = false,
    bool makeCardinalPoints = true,
    bool cardinalPt1Center = true,
    bool cardinalPt2PointOnNormal = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeCircleFitProfileAsync(fitProfileName: fitProfileName, measuredSideForRadialOffset: measuredSideForRadialOffset, overrideRadialOffset10UseCurrent: overrideRadialOffset10UseCurrent, measuredSideForPlanarOffset: measuredSideForPlanarOffset, overridePlanarOffset10UseCurrent: overridePlanarOffset10UseCurrent, planarOffsetDirection: planarOffsetDirection, lockRadius10DoNotLock: lockRadius10DoNotLock, circleComputationTechnique: circleComputationTechnique);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Cone Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Cone Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-cone-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lockAngleInDegrees10DoNotLock` | `double` | `Lock Angle in degrees (-1.0 do not lock)` | -1.000000 |
| `useExhaustiveSearch` | `bool` | `Use Exhaustive Search?` | true |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1Vertex` | `bool` | `Cardinal Pt.1: Vertex?` | true |
| `cardinalPt2PointOnAxis` | `bool` | `Cardinal Pt.2: Point on Axis?` | true |
| `cardinalPt3CutPointOnAxis` | `bool` | `Cardinal Pt.3: Cut Point on Axis?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeConeFitProfileAsync(
    string fitProfileName,
    MeasuredSideForRadialOffset measuredSideForRadialOffset,
    double overrideRadialOffset10UseCurrent = -1.000000,
    double lockAngleInDegrees10DoNotLock = -1.000000,
    bool useExhaustiveSearch = true,
    bool makeCardinalPoints = true,
    bool cardinalPt1Vertex = true,
    bool cardinalPt2PointOnAxis = true,
    bool cardinalPt3CutPointOnAxis = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeConeFitProfileAsync(fitProfileName: fitProfileName, measuredSideForRadialOffset: measuredSideForRadialOffset);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Cylinder Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Cylinder Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-cylinder-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lockRadius10DoNotLock` | `double` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `lockedRadiusFitMethod` | `FitMethod` | `Locked Radius Fit Method` | Minimum RMS |
| `constrainToNominalAxis` | `bool` | `Constrain to Nominal Axis?` | false |
| `constrainToNominalOrientation` | `bool` | `Constrain to Nominal Orientation?` | false |
| `alignWithNominal` | `bool` | `Align with Nominal?` | false |
| `reverseAxis` | `bool` | `Reverse Axis?` | false |
| `setAxisFirstToLastPoint` | `bool` | `Set Axis First to Last Point?` | false |
| `cylinderComputationTechnique` | `CompTechnique` | `Cylinder Computation Technique` | Standard |
| `useExhaustiveSearch` | `bool` | `Use Exhaustive Search?` | false |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1BeginPt` | `bool` | `Cardinal Pt.1: Begin Pt?` | true |
| `cardinalPt2EndPt` | `bool` | `Cardinal Pt.2: End Pt?` | true |
| `cardinalPt3Center` | `bool` | `Cardinal Pt.3: Center?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeCylinderFitProfileAsync(
    string fitProfileName,
    MeasuredSideForRadialOffset measuredSideForRadialOffset,
    double overrideRadialOffset10UseCurrent,
    double lockRadius10DoNotLock,
    FitMethod lockedRadiusFitMethod,
    bool constrainToNominalAxis,
    bool constrainToNominalOrientation,
    bool alignWithNominal,
    bool reverseAxis,
    bool setAxisFirstToLastPoint,
    CompTechnique cylinderComputationTechnique,
    bool useExhaustiveSearch = false,
    bool makeCardinalPoints = true,
    bool cardinalPt1BeginPt = true,
    bool cardinalPt2EndPt = true,
    bool cardinalPt3Center = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeCylinderFitProfileAsync(fitProfileName: fitProfileName, measuredSideForRadialOffset: measuredSideForRadialOffset, overrideRadialOffset10UseCurrent: overrideRadialOffset10UseCurrent, lockRadius10DoNotLock: lockRadius10DoNotLock, lockedRadiusFitMethod: lockedRadiusFitMethod, constrainToNominalAxis: constrainToNominalAxis, constrainToNominalOrientation: constrainToNominalOrientation, alignWithNominal: alignWithNominal, reverseAxis: reverseAxis, setAxisFirstToLastPoint: setAxisFirstToLastPoint, cylinderComputationTechnique: cylinderComputationTechnique);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Ellipse Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Ellipse Fit Profile](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-ellipse-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measuredSideForPlanarOffset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `overridePlanarOffset10UseCurrent` | `double` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planarOffsetDirection` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `reverseNormalVectorAfterFit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1Center` | `bool` | `Cardinal Pt.1: Center?` | true |
| `cardinalPt2PointOnNormal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |
| `cardinalPt3FocalPt1` | `bool` | `Cardinal Pt.3: Focal Pt.1?` | true |
| `cardinalPt4FocalPt2` | `bool` | `Cardinal Pt.4: Focal Pt.2?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeEllipseFitProfileAsync(
    string fitProfileName,
    MeasuredSideForRadialOffset measuredSideForRadialOffset,
    double overrideRadialOffset10UseCurrent,
    MeasuredSideForPlanarOffset measuredSideForPlanarOffset,
    double overridePlanarOffset10UseCurrent,
    NormalDirection planarOffsetDirection,
    bool reverseNormalVectorAfterFit = false,
    bool makeCardinalPoints = true,
    bool cardinalPt1Center = true,
    bool cardinalPt2PointOnNormal = true,
    bool cardinalPt3FocalPt1 = true,
    bool cardinalPt4FocalPt2 = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeEllipseFitProfileAsync(fitProfileName: fitProfileName, measuredSideForRadialOffset: measuredSideForRadialOffset, overrideRadialOffset10UseCurrent: overrideRadialOffset10UseCurrent, measuredSideForPlanarOffset: measuredSideForPlanarOffset, overridePlanarOffset10UseCurrent: overridePlanarOffset10UseCurrent, planarOffsetDirection: planarOffsetDirection);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Line Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Line Fit Profile](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-line-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `reverseNormalVectorAfterFit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1PointA` | `bool` | `Cardinal Pt.1: Point A?` | true |
| `cardinalPt2PointB` | `bool` | `Cardinal Pt.2: Point B?` | true |
| `cardinalPt3MidPoint` | `bool` | `Cardinal Pt.3: Mid Point?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeLineFitProfileAsync(
    string fitProfileName = "",
    bool reverseNormalVectorAfterFit = false,
    bool makeCardinalPoints = true,
    bool cardinalPt1PointA = true,
    bool cardinalPt2PointB = true,
    bool cardinalPt3MidPoint = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeLineFitProfileAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Paraboloid Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Paraboloid Fit Profile](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-paraboloid-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lockFocalLength10DoNotLock` | `double` | `Lock Focal Length (-1.0 do not lock)` | -1.000000 |
| `degreeOfFreedom` | `DegreeOfFreedom` | `Degree of Freedom` | Any |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1Vertex` | `bool` | `Cardinal Pt.1: Vertex?` | true |
| `cardinalPt2FocalPoint` | `bool` | `Cardinal Pt.2: Focal Point?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeParaboloidFitProfileAsync(
    string fitProfileName,
    MeasuredSideForRadialOffset measuredSideForRadialOffset,
    double overrideRadialOffset10UseCurrent,
    double lockFocalLength10DoNotLock,
    DegreeOfFreedom degreeOfFreedom,
    bool makeCardinalPoints = true,
    bool cardinalPt1Vertex = true,
    bool cardinalPt2FocalPoint = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeParaboloidFitProfileAsync(fitProfileName: fitProfileName, measuredSideForRadialOffset: measuredSideForRadialOffset, overrideRadialOffset10UseCurrent: overrideRadialOffset10UseCurrent, lockFocalLength10DoNotLock: lockFocalLength10DoNotLock, degreeOfFreedom: degreeOfFreedom);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Plane Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Plane Fit Profile](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-plane-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForPlanarOffset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `overridePlanarOffset10UseCurrent` | `double` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planarOffsetDirection` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `reverseNormalVectorAfterFit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1Centroid` | `bool` | `Cardinal Pt.1: Centroid?` | true |
| `cardinalPt2PointOnNormal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakePlaneFitProfileAsync(
    string fitProfileName,
    MeasuredSideForPlanarOffset measuredSideForPlanarOffset,
    double overridePlanarOffset10UseCurrent,
    NormalDirection planarOffsetDirection,
    bool reverseNormalVectorAfterFit = false,
    bool makeCardinalPoints = true,
    bool cardinalPt1Centroid = true,
    bool cardinalPt2PointOnNormal = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakePlaneFitProfileAsync(fitProfileName: fitProfileName, measuredSideForPlanarOffset: measuredSideForPlanarOffset, overridePlanarOffset10UseCurrent: overridePlanarOffset10UseCurrent, planarOffsetDirection: planarOffsetDirection);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Slot Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Slot Fit Profile](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-slot-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measuredSideForPlanarOffset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `overridePlanarOffset10UseCurrent` | `double` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planarOffsetDirection` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `slotType` | `SlotType` | `Slot Type` | Round |
| `slotComputationTechnique` | `CompTechnique` | `Slot Computation Technique` | Standard |
| `reverseNormalVectorAfterFit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1Center` | `bool` | `Cardinal Pt.1: Center?` | true |
| `cardinalPt2PointOnNormal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |
| `cardinalPt3CenterlinePt1` | `bool` | `Cardinal Pt.3: Centerline Pt.1?` | true |
| `cardinalPt4CenterlinePt2` | `bool` | `Cardinal Pt.4: Centerline Pt.2?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeSlotFitProfileAsync(
    string fitProfileName,
    MeasuredSideForRadialOffset measuredSideForRadialOffset,
    double overrideRadialOffset10UseCurrent,
    MeasuredSideForPlanarOffset measuredSideForPlanarOffset,
    double overridePlanarOffset10UseCurrent,
    NormalDirection planarOffsetDirection,
    SlotType slotType,
    CompTechnique slotComputationTechnique,
    bool reverseNormalVectorAfterFit = false,
    bool makeCardinalPoints = true,
    bool cardinalPt1Center = true,
    bool cardinalPt2PointOnNormal = true,
    bool cardinalPt3CenterlinePt1 = true,
    bool cardinalPt4CenterlinePt2 = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeSlotFitProfileAsync(fitProfileName: fitProfileName, measuredSideForRadialOffset: measuredSideForRadialOffset, overrideRadialOffset10UseCurrent: overrideRadialOffset10UseCurrent, measuredSideForPlanarOffset: measuredSideForPlanarOffset, overridePlanarOffset10UseCurrent: overridePlanarOffset10UseCurrent, planarOffsetDirection: planarOffsetDirection, slotType: slotType, slotComputationTechnique: slotComputationTechnique);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Sphere Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Sphere Fit Profile](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-sphere-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lockRadius10DoNotLock` | `double` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `makeCardinalPoints` | `bool` | `Make Cardinal Points?` | true |
| `cardinalPt1Center` | `bool` | `Cardinal Pt.1: Center?` | true |
| `computationMethod` | `SphereFitComputationMode` | `Computation Method` | Standard |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakeSphereFitProfileAsync(
    string fitProfileName,
    MeasuredSideForRadialOffset measuredSideForRadialOffset,
    double overrideRadialOffset10UseCurrent,
    double lockRadius10DoNotLock,
    bool makeCardinalPoints,
    bool cardinalPt1Center,
    SphereFitComputationMode computationMethod,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakeSphereFitProfileAsync(fitProfileName: fitProfileName, measuredSideForRadialOffset: measuredSideForRadialOffset, overrideRadialOffset10UseCurrent: overrideRadialOffset10UseCurrent, lockRadius10DoNotLock: lockRadius10DoNotLock, makeCardinalPoints: makeCardinalPoints, cardinalPt1Center: cardinalPt1Center, computationMethod: computationMethod);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Mushroom Target Hole Inspection

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Mushroom Target Hole Inspection](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection) · [gRPC contract](/api/grpc/analysis-operations#mushroom-target-hole-inspection)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `namePrefixForIntermediateConstructions` | `string` | `Name Prefix for Intermediate Constructions` | Empty |
| `spherePointsGroupName` | `CollectionObjectName` | `Sphere Points Group Name` | Required |
| `sphereTargetRadius` | `double` | `Sphere Target Radius` | 0.000000 |
| `targetContactPlane` | `CollectionObjectName` | `Target Contact Plane` | Required |
| `pointToCreateAtHole` | `PointName` | `Point To Create at Hole` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `SphereFitRmsError` | `double` | `Sphere Fit RMS Error` |
| `SphereFitMaxError` | `double` | `Sphere Fit Max Error` |

```csharp
public sealed record MushroomTargetHoleInspectionResult
{
    public required double SphereFitRmsError { get; init; }

    public required double SphereFitMaxError { get; init; }
}

public Task<MushroomTargetHoleInspectionResult> MushroomTargetHoleInspectionAsync(
    string namePrefixForIntermediateConstructions,
    CollectionObjectName spherePointsGroupName,
    double sphereTargetRadius,
    CollectionObjectName targetContactPlane,
    PointName pointToCreateAtHole,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MushroomTargetHoleInspectionAsync(namePrefixForIntermediateConstructions: namePrefixForIntermediateConstructions, spherePointsGroupName: spherePointsGroupName, sphereTargetRadius: sphereTargetRadius, targetContactPlane: targetContactPlane, pointToCreateAtHole: pointToCreateAtHole);
```

Returns the 2 MP outputs in the named `MushroomTargetHoleInspectionResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Patch Normal Shift - Hole / Pin

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Patch Normal Shift - Hole / Pin](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin) · [gRPC contract](/api/grpc/analysis-operations#patch-normal-shift---hole--pin)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planePointsGroupName` | `CollectionObjectName` | `Plane Points Group Name` | Required |
| `perimeterPointsGroupName` | `CollectionObjectName` | `Perimeter Points Group Name` | Required |
| `resultingPointName` | `PointName` | `Resulting Point Name` | Required |
| `additionalMaterialThickness` | `double` | `Additional Material Thickness` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task PatchNormalShiftHolePinAsync(
    CollectionObjectName planePointsGroupName,
    CollectionObjectName perimeterPointsGroupName,
    PointName resultingPointName,
    double additionalMaterialThickness = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.PatchNormalShiftHolePinAsync(planePointsGroupName: planePointsGroupName, perimeterPointsGroupName: perimeterPointsGroupName, resultingPointName: resultingPointName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Patch Normal Shift - Point

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Patch Normal Shift - Point](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point) · [gRPC contract](/api/grpc/analysis-operations#patch-normal-shift---point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planePointsGroupName` | `CollectionObjectName` | `Plane Points Group Name` | Required |
| `pointToShift` | `PointName` | `Point to Shift` | Required |
| `resultingPointName` | `PointName` | `Resulting Point Name` | Required |
| `additionalMaterialThickness` | `double` | `Additional Material Thickness` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task PatchNormalShiftPointAsync(
    CollectionObjectName planePointsGroupName,
    PointName pointToShift,
    PointName resultingPointName,
    double additionalMaterialThickness = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.PatchNormalShiftPointAsync(planePointsGroupName: planePointsGroupName, pointToShift: pointToShift, resultingPointName: resultingPointName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Clouds to Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Clouds to Objects](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-clouds-to-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `objectNames` | `IEnumerable<CollectionObjectName>` | `Object Names` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `proximity` | `double` | `Proximity` | 0.000000 |
| `skipFactor` | `int` | `Skip Factor` | 0 |
| `rmsTolerance00ForNone` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RmsDeviation` | `double` | `RMS Deviation` |
| `MaximumAbsoluteDeviation` | `double` | `Maximum Absolute Deviation` |

```csharp
public sealed record QueryCloudsToObjectsResult
{
    public required double RmsDeviation { get; init; }

    public required double MaximumAbsoluteDeviation { get; init; }
}

public Task<QueryCloudsToObjectsResult> QueryCloudsToObjectsAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    IEnumerable<CollectionObjectName> objectNames,
    CollectionObjectName resultingObjectName,
    ProjectionOptions projectionOptions,
    double proximity = 0.000000,
    int skipFactor = 0,
    double rmsTolerance00ForNone = 0.000000,
    double maximumAbsoluteTolerance00ForNone = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryCloudsToObjectsAsync(cloudNames: cloudNames, objectNames: objectNames, resultingObjectName: resultingObjectName, projectionOptions: projectionOptions);
```

Returns the 2 MP outputs in the named `QueryCloudsToObjectsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Clouds to Surface

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Clouds to Surface](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface) · [gRPC contract](/api/grpc/analysis-operations#query-clouds-to-surface)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterSurfaceName` | `CollectionObjectName` | `Filter Surface Name` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `proximity` | `double` | `Proximity` | 0.000000 |
| `skipFactor` | `int` | `Skip Factor` | 0 |
| `rmsTolerance00ForNone` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RmsDeviation` | `double` | `RMS Deviation` |
| `MaximumAbsoluteDeviation` | `double` | `Maximum Absolute Deviation` |

```csharp
public sealed record QueryCloudsToSurfaceResult
{
    public required double RmsDeviation { get; init; }

    public required double MaximumAbsoluteDeviation { get; init; }
}

public Task<QueryCloudsToSurfaceResult> QueryCloudsToSurfaceAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    CollectionObjectName filterSurfaceName,
    CollectionObjectName resultingObjectName,
    ProjectionOptions projectionOptions,
    double proximity = 0.000000,
    int skipFactor = 0,
    double rmsTolerance00ForNone = 0.000000,
    double maximumAbsoluteTolerance00ForNone = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryCloudsToSurfaceAsync(cloudNames: cloudNames, filterSurfaceName: filterSurfaceName, resultingObjectName: resultingObjectName, projectionOptions: projectionOptions);
```

Returns the 2 MP outputs in the named `QueryCloudsToSurfaceResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Frame to Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Frame to Frame](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame) · [gRPC contract](/api/grpc/analysis-operations#query-frame-to-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceFrameName` | `CollectionObjectName` | `Reference Frame Name` | Required |
| `correspondingFrameName` | `CollectionObjectName` | `Corresponding Frame Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `X` | `double` | `X` |
| `Y` | `double` | `Y` |
| `Z` | `double` | `Z` |
| `RxRoll` | `double` | `Rx (Roll)` |
| `RyPitch` | `double` | `Ry (Pitch)` |
| `RzYaw` | `double` | `Rz (Yaw)` |

```csharp
public sealed record QueryFrameToFrameResult
{
    public required double X { get; init; }

    public required double Y { get; init; }

    public required double Z { get; init; }

    public required double RxRoll { get; init; }

    public required double RyPitch { get; init; }

    public required double RzYaw { get; init; }
}

public Task<QueryFrameToFrameResult> QueryFrameToFrameAsync(
    CollectionObjectName referenceFrameName,
    CollectionObjectName correspondingFrameName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryFrameToFrameAsync(referenceFrameName: referenceFrameName, correspondingFrameName: correspondingFrameName);
```

Returns the 6 MP outputs in the named `QueryFrameToFrameResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Groups to Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Groups to Objects](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-groups-to-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupNameListGroupsToProject` | `IEnumerable<CollectionObjectName>` | `Group Name List (Groups to Project)` | Required |
| `objectNameListObjectsToProjectTo` | `IEnumerable<CollectionObjectName>` | `Object Name List (Objects to Project to)` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `rmsTolerance00ForNone` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `showResultsDialog` | `bool` | `Show Results Dialog?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RmsDeviation` | `double` | `RMS Deviation` |
| `MaxAbsoluteDeviation` | `double` | `Max Absolute Deviation` |
| `AverageDeviation` | `double` | `Average Deviation` |
| `StandardDeviation` | `double` | `Standard Deviation` |

```csharp
public sealed record QueryGroupsToObjectsResult
{
    public required double RmsDeviation { get; init; }

    public required double MaxAbsoluteDeviation { get; init; }

    public required double AverageDeviation { get; init; }

    public required double StandardDeviation { get; init; }
}

public Task<QueryGroupsToObjectsResult> QueryGroupsToObjectsAsync(
    IEnumerable<CollectionObjectName> groupNameListGroupsToProject,
    IEnumerable<CollectionObjectName> objectNameListObjectsToProjectTo,
    CollectionObjectName resultingObjectName,
    ProjectionOptions projectionOptions,
    double rmsTolerance00ForNone = 0.000000,
    double maximumAbsoluteTolerance00ForNone = 0.000000,
    bool showResultsDialog = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryGroupsToObjectsAsync(groupNameListGroupsToProject: groupNameListGroupsToProject, objectNameListObjectsToProjectTo: objectNameListObjectsToProjectTo, resultingObjectName: resultingObjectName, projectionOptions: projectionOptions);
```

Returns the 4 MP outputs in the named `QueryGroupsToObjectsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Point to Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Point to Objects](/mp-command-catalog/commands/analysis-operations#query-point-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-point-to-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |
| `objects` | `IEnumerable<CollectionObjectName>` | `Objects` | Required |
| `ignoreTargetOffset` | `bool` | `Ignore Target Offset` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `DX` | `double` | `dX` |
| `DY` | `double` | `dY` |
| `DZ` | `double` | `dZ` |
| `DMag` | `double` | `dMag` |
| `ResultantObject` | `CollectionObjectName` | `Resultant Object` |

```csharp
public sealed record QueryPointToObjectsResult
{
    public required double DX { get; init; }

    public required double DY { get; init; }

    public required double DZ { get; init; }

    public required double DMag { get; init; }

    public required CollectionObjectName ResultantObject { get; init; }
}

public Task<QueryPointToObjectsResult> QueryPointToObjectsAsync(
    PointName pointName,
    IEnumerable<CollectionObjectName> objects,
    bool ignoreTargetOffset = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryPointToObjectsAsync(pointName: pointName, objects: objects);
```

Returns the 5 MP outputs in the named `QueryPointToObjectsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Point to Point Along Curve

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Point to Point Along Curve](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve) · [gRPC contract](/api/grpc/analysis-operations#query-point-to-point-along-curve)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `value1stPoint` | `PointName` | `1st Point` | Required |
| `value2ndPoint` | `PointName` | `2nd Point` | Required |
| `curve` | `CollectionObjectName` | `Curve` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `DistanceAlongCurve` | `double` | `Distance Along Curve` |

```csharp
public Task<double> QueryPointToPointAlongCurveAsync(
    PointName value1stPoint,
    PointName value2ndPoint,
    CollectionObjectName curve,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryPointToPointAlongCurveAsync(value1stPoint: value1stPoint, value2ndPoint: value2ndPoint, curve: curve);
```

Returns the MP output `Distance Along Curve` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Points to Circle

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Points to Circle](/mp-command-catalog/commands/analysis-operations#query-points-to-circle) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-circle)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circleName` | `CollectionObjectName` | `Circle Name` | Required |
| `pointGroupName` | `CollectionObjectName` | `Point Group Name` | Required |
| `isInsideMeasurement` | `bool` | `Is Inside Measurement` | true |
| `autoScaleVectorsToOfRadius` | `int` | `Auto Scale Vectors to % of Radius` | 40 |
| `vectorGroupNameForRadial` | `CollectionObjectName` | `Vector Group Name for Radial` | Required |
| `vectorGroupNameForPlanar` | `CollectionObjectName` | `Vector Group Name for Planar` | Required |
| `vectorGroupNameForCombined` | `CollectionObjectName` | `Vector Group Name for Combined` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task QueryPointsToCircleAsync(
    CollectionObjectName circleName,
    CollectionObjectName pointGroupName,
    bool isInsideMeasurement,
    int autoScaleVectorsToOfRadius,
    CollectionObjectName vectorGroupNameForRadial,
    CollectionObjectName vectorGroupNameForPlanar,
    CollectionObjectName vectorGroupNameForCombined,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryPointsToCircleAsync(circleName: circleName, pointGroupName: pointGroupName, isInsideMeasurement: isInsideMeasurement, autoScaleVectorsToOfRadius: autoScaleVectorsToOfRadius, vectorGroupNameForRadial: vectorGroupNameForRadial, vectorGroupNameForPlanar: vectorGroupNameForPlanar, vectorGroupNameForCombined: vectorGroupNameForCombined);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Points to Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Points to Objects](/mp-command-catalog/commands/analysis-operations#query-points-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `IEnumerable<PointName>` | `Point Names` | Required |
| `objectNameListObjectsToProjectTo` | `IEnumerable<CollectionObjectName>` | `Object Name List (Objects to Project to)` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `rmsTolerance00ForNone` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `showResultsDialog` | `bool` | `Show Results Dialog?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RmsDeviation` | `double` | `RMS Deviation` |
| `MaxAbsoluteDeviation` | `double` | `Max Absolute Deviation` |
| `AverageDeviation` | `double` | `Average Deviation` |
| `StandardDeviation` | `double` | `Standard Deviation` |

```csharp
public sealed record QueryPointsToObjectsResult
{
    public required double RmsDeviation { get; init; }

    public required double MaxAbsoluteDeviation { get; init; }

    public required double AverageDeviation { get; init; }

    public required double StandardDeviation { get; init; }
}

public Task<QueryPointsToObjectsResult> QueryPointsToObjectsAsync(
    IEnumerable<PointName> pointNames,
    IEnumerable<CollectionObjectName> objectNameListObjectsToProjectTo,
    CollectionObjectName resultingObjectName,
    ProjectionOptions projectionOptions,
    double rmsTolerance00ForNone = 0.000000,
    double maximumAbsoluteTolerance00ForNone = 0.000000,
    bool showResultsDialog = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryPointsToObjectsAsync(pointNames: pointNames, objectNameListObjectsToProjectTo: objectNameListObjectsToProjectTo, resultingObjectName: resultingObjectName, projectionOptions: projectionOptions);
```

Returns the 4 MP outputs in the named `QueryPointsToObjectsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Query Points to Single Point

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Query Points to Single Point](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-single-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `IEnumerable<PointName>` | `Point Names` | Required |
| `singlePoint` | `PointName` | `Single Point` | Required |
| `showVectorProperties` | `bool` | `Show Vector Properties?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task QueryPointsToSinglePointAsync(
    IEnumerable<PointName> pointNames,
    PointName singlePoint,
    bool showVectorProperties = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.QueryPointsToSinglePointAsync(pointNames: pointNames, singlePoint: singlePoint);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Re-Compute Calculated Items

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Re-Compute Calculated Items](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) · [gRPC contract](/api/grpc/analysis-operations#re-compute-calculated-items)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `targetsFromShots` | `bool` | `Targets from Shots` | false |
| `hiddenPoints` | `bool` | `Hidden Points` | false |
| `relationships` | `bool` | `Relationships` | false |
| `refreshFilteredCloudData` | `bool` | `Refresh Filtered Cloud Data?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ReComputeCalculatedItemsAsync(
    bool targetsFromShots = false,
    bool hiddenPoints = false,
    bool relationships = false,
    bool refreshFilteredCloudData = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ReComputeCalculatedItemsAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Rename points based on inter-point distance to reference points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Rename points based on inter-point distance to reference points](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points) · [gRPC contract](/api/grpc/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceGroupName` | `CollectionObjectName` | `Reference Group Name` | Required |
| `groupToRenamePoints` | `CollectionObjectName` | `Group To Rename Points` | Required |
| `distanceThreshold` | `double` | `Distance Threshold` | 0.000000 |
| `verifyResults` | `bool` | `Verify Results?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RenamePointsBasedOnInterPointDistanceToReferencePointsAsync(
    CollectionObjectName referenceGroupName,
    CollectionObjectName groupToRenamePoints,
    double distanceThreshold = 0.000000,
    bool verifyResults = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenamePointsBasedOnInterPointDistanceToReferencePointsAsync(referenceGroupName: referenceGroupName, groupToRenamePoints: groupToRenamePoints);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Rename points based on proximity to reference points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Rename points based on proximity to reference points](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points) · [gRPC contract](/api/grpc/analysis-operations#rename-points-based-on-proximity-to-reference-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceGroupName` | `CollectionObjectName` | `Reference Group Name` | Required |
| `groupToRenamePoints` | `CollectionObjectName` | `Group To Rename Points` | Required |
| `proximityThreshold` | `double` | `Proximity Threshold` | 0.000000 |
| `verifyResults` | `bool` | `Verify Results?` | false |
| `renameAllProximatePoints` | `bool` | `Rename All Proximate Points?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RenamePointsBasedOnProximityToReferencePointsAsync(
    CollectionObjectName referenceGroupName,
    CollectionObjectName groupToRenamePoints,
    double proximityThreshold = 0.000000,
    bool verifyResults = false,
    bool renameAllProximatePoints = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenamePointsBasedOnProximityToReferencePointsAsync(referenceGroupName: referenceGroupName, groupToRenamePoints: groupToRenamePoints);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Reverse B-Splines

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Reverse B-Splines](/mp-command-catalog/commands/analysis-operations#reverse-b-splines) · [gRPC contract](/api/grpc/analysis-operations#reverse-b-splines)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `bSplineList` | `IEnumerable<CollectionObjectName>` | `B-Spline List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ReverseBSplinesAsync(
    IEnumerable<CollectionObjectName> bSplineList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ReverseBSplinesAsync(bSplineList: bSplineList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Reverse Plane Normals

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Reverse Plane Normals](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals) · [gRPC contract](/api/grpc/analysis-operations#reverse-plane-normals)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planeList` | `IEnumerable<CollectionObjectName>` | `Plane List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ReversePlaneNormalsAsync(
    IEnumerable<CollectionObjectName> planeList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ReversePlaneNormalsAsync(planeList: planeList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Reverse Surface Normals

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Reverse Surface Normals](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals) · [gRPC contract](/api/grpc/analysis-operations#reverse-surface-normals)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surfaceList` | `IEnumerable<CollectionObjectName>` | `Surface List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ReverseSurfaceNormalsAsync(
    IEnumerable<CollectionObjectName> surfaceList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ReverseSurfaceNormalsAsync(surfaceList: surfaceList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Circle Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Circle Properties](/mp-command-catalog/commands/analysis-operations#set-circle-properties) · [gRPC contract](/api/grpc/analysis-operations#set-circle-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circleName` | `CollectionObjectName` | `Circle Name` | Required |
| `centerCoordinate` | `Vector` | `Center Coordinate` | Required |
| `normalDirection` | `Vector` | `Normal Direction` | Required |
| `radius` | `double` | `Radius` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCirclePropertiesAsync(
    CollectionObjectName circleName,
    Vector centerCoordinate,
    Vector normalDirection,
    double radius = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCirclePropertiesAsync(circleName: circleName, centerCoordinate: centerCoordinate, normalDirection: normalDirection);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Cone Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Cone Properties](/mp-command-catalog/commands/analysis-operations#set-cone-properties) · [gRPC contract](/api/grpc/analysis-operations#set-cone-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `coneName` | `CollectionObjectName` | `Cone Name` | Required |
| `coneEndPointInWorkingCoordinates` | `Vector` | `Cone End Point (in working coordinates)` | Required |
| `coneAxisInWorkingCoordinates` | `Vector` | `Cone Axis (in working coordinates)` | Required |
| `coneLength` | `double` | `Cone Length` | 0.000000 |
| `coneThetaStart` | `double` | `Cone Theta Start` | 0.000000 |
| `coneThetaSpan` | `double` | `Cone Theta Span` | 0.000000 |
| `coneIncludedAngle` | `double` | `Cone Included Angle` | 0.000000 |
| `cutLengthFromApex` | `double` | `Cut Length from Apex` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetConePropertiesAsync(
    CollectionObjectName coneName,
    Vector coneEndPointInWorkingCoordinates,
    Vector coneAxisInWorkingCoordinates,
    double coneLength = 0.000000,
    double coneThetaStart = 0.000000,
    double coneThetaSpan = 0.000000,
    double coneIncludedAngle = 0.000000,
    double cutLengthFromApex = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetConePropertiesAsync(coneName: coneName, coneEndPointInWorkingCoordinates: coneEndPointInWorkingCoordinates, coneAxisInWorkingCoordinates: coneAxisInWorkingCoordinates);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Cylinder Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Cylinder Properties](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties) · [gRPC contract](/api/grpc/analysis-operations#set-cylinder-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cylinderName` | `CollectionObjectName` | `Cylinder Name` | Required |
| `beginCoordinate` | `Vector` | `Begin Coordinate` | Required |
| `axisDirection` | `Vector` | `Axis Direction` | Required |
| `length` | `double` | `Length` | 0.000000 |
| `diameter` | `double` | `Diameter` | 0.000000 |
| `nominalsPointInward` | `bool` | `Nominals Point Inward` | true |
| `facets` | `int` | `Facets` | 32 |
| `enableThetaExtentDisplayMode` | `bool` | `Enable Theta Extent Display Mode` | true |
| `thetaStartInDegrees` | `double` | `Theta Start in Degrees` | 0.000000 |
| `thetaSpanInDegrees` | `double` | `Theta Span in Degrees` | 360.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCylinderPropertiesAsync(
    CollectionObjectName cylinderName,
    Vector beginCoordinate,
    Vector axisDirection,
    double length = 0.000000,
    double diameter = 0.000000,
    bool nominalsPointInward = true,
    int facets = 32,
    bool enableThetaExtentDisplayMode = true,
    double thetaStartInDegrees = 0.000000,
    double thetaSpanInDegrees = 360.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCylinderPropertiesAsync(cylinderName: cylinderName, beginCoordinate: beginCoordinate, axisDirection: axisDirection);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Default Colorization Options

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Default Colorization Options](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options) · [gRPC contract](/api/grpc/analysis-operations#set-default-colorization-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `colorizationOptions` | `Color` | `Colorization Options` | Red |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetDefaultColorizationOptionsAsync(
    Color colorizationOptions,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetDefaultColorizationOptionsAsync(colorizationOptions: colorizationOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Ellipse Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Ellipse Properties](/mp-command-catalog/commands/analysis-operations#set-ellipse-properties) · [gRPC contract](/api/grpc/analysis-operations#set-ellipse-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ellipseName` | `CollectionObjectName` | `Ellipse Name` | Required |
| `centerCoordinate` | `Vector` | `Center Coordinate` | Required |
| `normalDirection` | `Vector` | `Normal Direction` | Required |
| `majorAxisRadius` | `double` | `Major Axis Radius` | 0.000000 |
| `minorAxisRadius` | `double` | `Minor Axis Radius` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetEllipsePropertiesAsync(
    CollectionObjectName ellipseName,
    Vector centerCoordinate,
    Vector normalDirection,
    double majorAxisRadius = 0.000000,
    double minorAxisRadius = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetEllipsePropertiesAsync(ellipseName: ellipseName, centerCoordinate: centerCoordinate, normalDirection: normalDirection);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geometry Relationship Fit Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geometry Relationship Fit Profile](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#set-geometry-relationship-fit-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryType` | `GeometryType` | `Geometry Type` | Required |
| `relationshipRefList` | `IEnumerable<CollectionObjectName>` | `Relationship Ref List` | Required |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `applyCardinalPointSettings` | `bool` | `Apply Cardinal Point Settings` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeometryRelationshipFitProfileAsync(
    GeometryType geometryType,
    IEnumerable<CollectionObjectName> relationshipRefList,
    string fitProfileName = "",
    bool applyCardinalPointSettings = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeometryRelationshipFitProfileAsync(geometryType: geometryType, relationshipRefList: relationshipRefList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Line Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Line Properties](/mp-command-catalog/commands/analysis-operations#set-line-properties) · [gRPC contract](/api/grpc/analysis-operations#set-line-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lineName` | `CollectionObjectName` | `Line Name` | Required |
| `beginCoordinate` | `Vector` | `Begin Coordinate` | Required |
| `endCoordinate` | `Vector` | `End Coordinate` | Required |
| `lengthOptional` | `double` | `Length (optional)` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetLinePropertiesAsync(
    CollectionObjectName lineName,
    Vector beginCoordinate,
    Vector endCoordinate,
    double lengthOptional = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetLinePropertiesAsync(lineName: lineName, beginCoordinate: beginCoordinate, endCoordinate: endCoordinate);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Measurement Auxiliary Data

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Measurement Auxiliary Data](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data) · [gRPC contract](/api/grpc/analysis-operations#set-measurement-auxiliary-data)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |
| `auxiliaryName` | `string` | `Auxiliary Name` | Empty |
| `value` | `double` | `Value` | 0.000000 |
| `units` | `string` | `Units` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetMeasurementAuxiliaryDataAsync(
    PointName pointName,
    string auxiliaryName = "",
    double value = 0.000000,
    string units = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetMeasurementAuxiliaryDataAsync(pointName: pointName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Object Reporting Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Object Reporting Frame](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame) · [gRPC contract](/api/grpc/analysis-operations#set-object-reporting-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetObjectReportingFrameAsync(
    CollectionObjectName objectName,
    CollectionObjectName reportingFrame,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetObjectReportingFrameAsync(objectName: objectName, reportingFrame: reportingFrame);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Point Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Point Properties](/mp-command-catalog/commands/analysis-operations#set-point-properties) · [gRPC contract](/api/grpc/analysis-operations#set-point-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameList` | `IEnumerable<PointName>` | `Point Name List` | Required |
| `planarOffset` | `double` | `Planar Offset` | 0.000000 |
| `radialOffset` | `double` | `Radial Offset` | 0.000000 |
| `positionTolerance` | `Vector` | `Position Tolerance` | Required |
| `componentWeights` | `Vector` | `Component Weights` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPointPropertiesAsync(
    IEnumerable<PointName> pointNameList,
    double planarOffset,
    double radialOffset,
    Vector positionTolerance,
    Vector componentWeights,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPointPropertiesAsync(pointNameList: pointNameList, planarOffset: planarOffset, radialOffset: radialOffset, positionTolerance: positionTolerance, componentWeights: componentWeights);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Point Weights From Uncertainties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Point Weights From Uncertainties](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties) · [gRPC contract](/api/grpc/analysis-operations#set-point-weights-from-uncertainties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameList` | `IEnumerable<PointName>` | `Point Name List` | Required |
| `uncertaintyReferenceFrameMode` | `string` | `Uncertainty Reference Frame Mode` | With respect to WORLD |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` | Required |
| `weightNormalizationMode` | `string` | `Weight Normalization Mode` | Set to fixed value |
| `fixedWeightValue` | `double` | `Fixed Weight Value` | 1.000000 |
| `outputWeightedPointGroup` | `CollectionObjectName` | `Output Weighted Point Group` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `OutputWeightedPointList` | `PointName[]` | `Output Weighted Point List` |

```csharp
public Task<PointName[]> SetPointWeightsFromUncertaintiesAsync(
    IEnumerable<PointName> pointNameList,
    string uncertaintyReferenceFrameMode,
    CollectionObjectName reportingFrame,
    string weightNormalizationMode,
    double fixedWeightValue,
    CollectionObjectName outputWeightedPointGroup,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPointWeightsFromUncertaintiesAsync(pointNameList: pointNameList, uncertaintyReferenceFrameMode: uncertaintyReferenceFrameMode, reportingFrame: reportingFrame, weightNormalizationMode: weightNormalizationMode, fixedWeightValue: fixedWeightValue, outputWeightedPointGroup: outputWeightedPointGroup);
```

Returns the MP output `Output Weighted Point List` directly as `PointName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Transform for i-th Frame in Frame Set

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Transform for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#set-transform-for-i-th-frame-in-frame-set)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSet` | `CollectionObjectName` | `Frame Set` | Required |
| `frameSetIndex` | `int` | `Frame Set Index` | 0 |
| `transformInWorking` | `Transform` | `Transform in Working` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetTransformForIthFrameInFrameSetAsync(
    CollectionObjectName frameSet,
    int frameSetIndex,
    Transform transformInWorking,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetTransformForIthFrameInFrameSetAsync(frameSet: frameSet, frameSetIndex: frameSetIndex, transformInWorking: transformInWorking);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Sphere Axis Check

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Sphere Axis Check](/mp-command-catalog/commands/analysis-operations#sphere-axis-check) · [gRPC contract](/api/grpc/analysis-operations#sphere-axis-check)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `spherePointsGroupName` | `CollectionObjectName` | `Sphere Points Group Name` | Required |
| `sphereTargetRadius` | `double` | `Sphere Target Radius` | 0.000000 |
| `pointToCreateAtSphereCenter` | `PointName` | `Point To Create at Sphere Center` | Required |
| `lineDefiningTheAxis` | `CollectionObjectName` | `Line defining the axis` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `SphereFitRmsError` | `double` | `Sphere Fit RMS Error` |
| `SphereFitMaxError` | `double` | `Sphere Fit Max Error` |
| `VectorRepresentation` | `Vector` | `Vector Representation` |
| `XValue` | `double` | `X Value` |
| `YValue` | `double` | `Y Value` |
| `ZValue` | `double` | `Z Value` |
| `Magnitude` | `double` | `Magnitude` |

```csharp
public sealed record SphereAxisCheckResult
{
    public required double SphereFitRmsError { get; init; }

    public required double SphereFitMaxError { get; init; }

    public required Vector VectorRepresentation { get; init; }

    public required double XValue { get; init; }

    public required double YValue { get; init; }

    public required double ZValue { get; init; }

    public required double Magnitude { get; init; }
}

public Task<SphereAxisCheckResult> SphereAxisCheckAsync(
    CollectionObjectName spherePointsGroupName,
    double sphereTargetRadius,
    PointName pointToCreateAtSphereCenter,
    CollectionObjectName lineDefiningTheAxis,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SphereAxisCheckAsync(spherePointsGroupName: spherePointsGroupName, sphereTargetRadius: sphereTargetRadius, pointToCreateAtSphereCenter: pointToCreateAtSphereCenter, lineDefiningTheAxis: lineDefiningTheAxis);
```

Returns the 7 MP outputs in the named `SphereAxisCheckResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Temperature Compensate a group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Temperature Compensate a group](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group) · [gRPC contract](/api/grpc/analysis-operations#temperature-compensate-a-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalGroup` | `CollectionObjectName` | `Original Group` | Required |
| `scalingOriginCoordinateFrame` | `FrameName` | `Scaling Origin (coordinate frame)` | Required |
| `materialCte1DegF` | `double` | `Material CTE (1/Deg F)` | 0.000000 |
| `initialTemperatureF` | `double` | `Initial Temperature (F)` | 0.000000 |
| `finalTemperatureF` | `double` | `Final Temperature (F)` | 0.000000 |
| `scaledGroupName` | `CollectionObjectName` | `Scaled Group Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task TemperatureCompensateAGroupAsync(
    CollectionObjectName originalGroup,
    FrameName scalingOriginCoordinateFrame,
    double materialCte1DegF,
    double initialTemperatureF,
    double finalTemperatureF,
    CollectionObjectName scaledGroupName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.TemperatureCompensateAGroupAsync(originalGroup: originalGroup, scalingOriginCoordinateFrame: scalingOriginCoordinateFrame, materialCte1DegF: materialCte1DegF, initialTemperatureF: initialTemperatureF, finalTemperatureF: finalTemperatureF, scaledGroupName: scaledGroupName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Transform Objects - Frame To Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Transform Objects - Frame To Frame](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame) · [gRPC contract](/api/grpc/analysis-operations#transform-objects---frame-to-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectNameList` | `IEnumerable<CollectionObjectName>` | `Object Name List` | Required |
| `initialFrameName` | `CollectionObjectName` | `Initial Frame Name` | Required |
| `destinationFrameName` | `CollectionObjectName` | `Destination Frame Name` | Required |
| `numberOfSteps` | `int` | `Number of Steps` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task TransformObjectsFrameToFrameAsync(
    IEnumerable<CollectionObjectName> objectNameList,
    CollectionObjectName initialFrameName,
    CollectionObjectName destinationFrameName,
    int numberOfSteps = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.TransformObjectsFrameToFrameAsync(objectNameList: objectNameList, initialFrameName: initialFrameName, destinationFrameName: destinationFrameName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Transform Objects by Delta (About Working Frame)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Transform Objects by Delta (About Working Frame)](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame) · [gRPC contract](/api/grpc/analysis-operations#transform-objects-by-delta-about-working-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToTransform` | `IEnumerable<CollectionObjectName>` | `Objects to Transform` | Required |
| `deltaTransform` | `Transform` | `Delta Transform` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task TransformObjectsByDeltaAboutWorkingFrameAsync(
    IEnumerable<CollectionObjectName> objectsToTransform,
    Transform deltaTransform,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.TransformObjectsByDeltaAboutWorkingFrameAsync(objectsToTransform: objectsToTransform, deltaTransform: deltaTransform);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Transform Objects by Delta (World Transform Operator)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Transform Objects by Delta (World Transform Operator)](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator) · [gRPC contract](/api/grpc/analysis-operations#transform-objects-by-delta-world-transform-operator)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToTransform` | `IEnumerable<CollectionObjectName>` | `Objects to Transform` | Required |
| `deltaTransform` | `Transform` | `Delta Transform` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task TransformObjectsByDeltaWorldTransformOperatorAsync(
    IEnumerable<CollectionObjectName> objectsToTransform,
    Transform deltaTransform,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.TransformObjectsByDeltaWorldTransformOperatorAsync(objectsToTransform: objectsToTransform, deltaTransform: deltaTransform);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Translate Objects by Delta

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Translate Objects by Delta](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta) · [gRPC contract](/api/grpc/analysis-operations#translate-objects-by-delta)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToTranslate` | `IEnumerable<CollectionObjectName>` | `Objects to Translate` | Required |
| `deltaTranslation` | `Vector` | `Delta Translation` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task TranslateObjectsByDeltaAsync(
    IEnumerable<CollectionObjectName> objectsToTranslate,
    Vector deltaTranslation,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.TranslateObjectsByDeltaAsync(objectsToTranslate: objectsToTranslate, deltaTranslation: deltaTranslation);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
