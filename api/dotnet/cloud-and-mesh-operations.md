---
title: Cloud and Mesh Operations
description: Next Briosa .NET APIs for supported Cloud and Mesh Operations MP commands.
toc_max_heading_level: 2
---

# Cloud and Mesh Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use .NET casing, append `Async`, and
expose one final optional `CancellationToken`. Required parameters precede
defaulted parameters where C# syntax requires it.

## Cloud Display Control

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: Portable contract review.
:::

[Cloud Display Control](/mp-command-catalog/commands/cloud-and-mesh-operations#cloud-display-control) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#cloud-display-control)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `thinDrawIncrement` | `int` | `Thin (Draw Increment)` | 1 |
| `pointSize` | `int` | `Point Size` | 1 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task CloudDisplayControlAsync(
    int thinDrawIncrement = 1,
    int pointSize = 1,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CloudDisplayControlAsync();
```

Adjusts SpatialAnalyzer cloud drawing density and point size.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Reset Cloud Bounding Box

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Reset Cloud Bounding Box](/mp-command-catalog/commands/cloud-and-mesh-operations#reset-cloud-bounding-box) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#reset-cloud-bounding-box)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudName` | `CollectionObjectName` | `Cloud Name` | Required |
| `cloudBoxType` | `CloudBoxType` | `Cloud Box Type` | World Axis Aligned Box |
| `showBoundingBox` | `bool` | `Show Bounding Box?` | true |
| `useAllPoints` | `bool` | `Use All Points?` | false |
| `desiredPointCount` | `int` | `Desired Point Count` | 1000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `XAxisDimension` | `double` | `X-Axis Dimension` |
| `YAxisDimension` | `double` | `Y-Axis Dimension` |
| `ZAxisDimension` | `double` | `Z-Axis Dimension` |
| `XAxisInWorld` | `Vector` | `X-Axis (in WORLD)` |
| `YAxisInWorld` | `Vector` | `Y-Axis (in WORLD)` |
| `ZAxisInWorld` | `Vector` | `Z-Axis (in WORLD)` |
| `CentroidInWorld` | `Vector` | `Centroid (in WORLD)` |
| `ReferenceTransformInWorld` | `Transform` | `Reference Transform (in WORLD)` |
| `ReferenceTransformInWorking` | `Transform` | `Reference Transform (in WORKING)` |
| `PointsUsedForBoundingBox` | `int` | `Points Used for Bounding Box` |

```csharp
public sealed record ResetCloudBoundingBoxResult
{
    public required double XAxisDimension { get; init; }

    public required double YAxisDimension { get; init; }

    public required double ZAxisDimension { get; init; }

    public required Vector XAxisInWorld { get; init; }

    public required Vector YAxisInWorld { get; init; }

    public required Vector ZAxisInWorld { get; init; }

    public required Vector CentroidInWorld { get; init; }

    public required Transform ReferenceTransformInWorld { get; init; }

    public required Transform ReferenceTransformInWorking { get; init; }

    public required int PointsUsedForBoundingBox { get; init; }

}

public Task<ResetCloudBoundingBoxResult> ResetCloudBoundingBoxAsync(
    CollectionObjectName cloudName,
    CloudBoxType cloudBoxType = CloudBoxType.WorldAxisAlignedBox,
    bool showBoundingBox = true,
    bool useAllPoints = false,
    int desiredPointCount = 1000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ResetCloudBoundingBoxAsync(cloudName: cloudName);
```

Recomputes one cloud bounding box and returns its dimensions, axes, centroid, transforms, and sample count.

Returns all 10 MP outputs in the named `ResetCloudBoundingBoxResult` value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Get Cloud Point Count

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Get Cloud Point Count](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-point-count) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#get-cloud-point-count)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudName` | `CollectionObjectName` | `Cloud Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `PointsCount` | `int` | `Points Count` |
| `PlanarOffset` | `double` | `Planar Offset` |
| `RadialOffset` | `double` | `Radial Offset` |
| `ActiveClippingPlanes` | `int` | `Active Clipping Planes` |

```csharp
public sealed record GetCloudPointCountResult
{
    public required int PointsCount { get; init; }

    public required double PlanarOffset { get; init; }

    public required double RadialOffset { get; init; }

    public required int ActiveClippingPlanes { get; init; }

}

public Task<GetCloudPointCountResult> GetCloudPointCountAsync(
    CollectionObjectName cloudName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCloudPointCountAsync(cloudName: cloudName);
```

Returns the selected cloud point count and current clipping-related values.

Returns all 4 MP outputs in the named `GetCloudPointCountResult` value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Set Cloud Default Clipping Plane

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: Licensed SA 2026.1.0529.7 probe.
:::

[Set Cloud Default Clipping Plane](/mp-command-catalog/commands/cloud-and-mesh-operations#set-cloud-default-clipping-plane) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#set-cloud-default-clipping-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `enableCloudClipping` | `bool` | `Enable Cloud Clipping?` | false |
| `referenceObject` | `CollectionObjectName?` | `Reference Object` | Omitted when disabling |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task SetCloudDefaultClippingPlaneAsync(
    bool enableCloudClipping = false,
    CollectionObjectName? referenceObject = null,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCloudDefaultClippingPlaneAsync();
```

Controls the default clipping plane for newly measured clouds. The exact SDK cannot set the MP Clipping Options value, so enabling uses SpatialAnalyzer current default clipping components. Briosa defaults to disabled to avoid an interactive object selector; reference_object is required only when enabling.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Raster Scan Edge Inspection

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Raster Scan Edge Inspection](/mp-command-catalog/commands/cloud-and-mesh-operations#raster-scan-edge-inspection) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#raster-scan-edge-inspection)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `edgeSurfaceName` | `CollectionObjectName` | `Edge Surface Name` | Required |
| `bSplineEdgeList` | `IEnumerable<CollectionObjectName>` | `BSpline Edge List` | Required |
| `prefixForOutputGroups` | `CollectionObjectName` | `Prefix for Output Groups` | Required |
| `tolerance` | `double` | `Tolerance` | 0.000000 |
| `minimumGoodPointsPerUnitLength` | `int` | `Minimum Number of Good Points per Unit Length` | 0 |
| `maximumBadPointsPercentage` | `double` | `Maximum Percentage of Bad Points (0-100)` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `SummaryResult` | `string` | `Summary Result` |

```csharp
public Task<string> RasterScanEdgeInspectionAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    CollectionObjectName edgeSurfaceName,
    IEnumerable<CollectionObjectName> bSplineEdgeList,
    CollectionObjectName prefixForOutputGroups,
    double tolerance = 0.0,
    int minimumGoodPointsPerUnitLength = 0,
    double maximumBadPointsPercentage = 0.0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RasterScanEdgeInspectionAsync(cloudNames: cloudNames, edgeSurfaceName: edgeSurfaceName, bSplineEdgeList: bSplineEdgeList, prefixForOutputGroups: prefixForOutputGroups);
```

Runs the legacy raster-scan edge inspection workflow and returns the SA summary result.

Returns the MP output `Summary Result` directly as `string`. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## New Raster Scan Edge Inspection

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[New Raster Scan Edge Inspection](/mp-command-catalog/commands/cloud-and-mesh-operations#new-raster-scan-edge-inspection) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#new-raster-scan-edge-inspection)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `edgeCloudNames` | `IEnumerable<CollectionObjectName>` | `Edge Cloud Names` | Required |
| `edgeSurfaceName` | `CollectionObjectName` | `Edge Surface Name` | Required |
| `edgeBSplineName` | `CollectionObjectName` | `Edge BSpline Name` | Required |
| `outputPrefix` | `CollectionObjectName` | `Output Prefix` | Required |
| `inspectionIncrement` | `double` | `Inspection Increment` | 0.000000 |
| `proximityFilterDistance` | `double` | `Proximity Filter Distance` | 0.000000 |
| `edgeBiasValue` | `double` | `Edge Bias Value` | 0.000000 |
| `errorTolerance` | `double` | `Error Tolerance` | 0.000000 |
| `useCosineProjectionMethod` | `bool` | `Use Cosine Projection Method` | false |
| `minimumEdgePointsPerSegment` | `int` | `Minimum Number of Edge Points per segment` | 0 |
| `intermediateCalculationResultsFile` | `FileReference?` | `Intermediate Calculation Results File(optional)` | Omitted |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `SummaryResult` | `string` | `Summary Result` |

```csharp
public Task<string> NewRasterScanEdgeInspectionAsync(
    IEnumerable<CollectionObjectName> edgeCloudNames,
    CollectionObjectName edgeSurfaceName,
    CollectionObjectName edgeBSplineName,
    CollectionObjectName outputPrefix,
    double inspectionIncrement = 0.0,
    double proximityFilterDistance = 0.0,
    double edgeBiasValue = 0.0,
    double errorTolerance = 0.0,
    bool useCosineProjectionMethod = false,
    int minimumEdgePointsPerSegment = 0,
    FileReference? intermediateCalculationResultsFile = null,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.NewRasterScanEdgeInspectionAsync(edgeCloudNames: edgeCloudNames, edgeSurfaceName: edgeSurfaceName, edgeBSplineName: edgeBSplineName, outputPrefix: outputPrefix);
```

Runs the newer raster-scan edge inspection workflow and optionally writes intermediate calculations.

Returns the MP output `Summary Result` directly as `string`. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Clear Cloud Point Deviations

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Clear Cloud Point Deviations](/mp-command-catalog/commands/cloud-and-mesh-operations#clear-cloud-point-deviations) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#clear-cloud-point-deviations)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudName` | `CollectionObjectName` | `Cloud Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task ClearCloudPointDeviationsAsync(
    CollectionObjectName cloudName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ClearCloudPointDeviationsAsync(cloudName: cloudName);
```

Clears point-deviation data stored on the selected cloud.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Enable All Cloud Cross Sections

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Enable All Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#enable-all-cloud-cross-sections)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `crossSectionCloudName` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task EnableAllCloudCrossSectionsAsync(
    CollectionObjectName crossSectionCloudName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.EnableAllCloudCrossSectionsAsync(crossSectionCloudName: crossSectionCloudName);
```

Enables every cross section in one cross-section cloud.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Enable/Disable Cloud Cross Sections

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Enable/Disable Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#enabledisable-cloud-cross-sections)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `crossSectionCloudName` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| `crossSectionId` | `int` | `Cross Section ID` | 0 |
| `enable` | `bool` | `Enable (TRUE) / Disable (FALSE)?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task EnableDisableCloudCrossSectionsAsync(
    CollectionObjectName crossSectionCloudName,
    int crossSectionId = 0,
    bool enable = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.EnableDisableCloudCrossSectionsAsync(crossSectionCloudName: crossSectionCloudName);
```

Enables or disables one identified cross section.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Enable Single Cloud Cross Section

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Enable Single Cloud Cross Section](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#enable-single-cloud-cross-section)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `crossSectionCloudName` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| `crossSectionId` | `int` | `Cross Section ID` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task EnableSingleCloudCrossSectionAsync(
    CollectionObjectName crossSectionCloudName,
    int crossSectionId = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.EnableSingleCloudCrossSectionAsync(crossSectionCloudName: crossSectionCloudName);
```

Enables one cross section and leaves it as the single enabled section.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Get Number of Cross Sections in Cross Section Cloud

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Get Number of Cross Sections in Cross Section Cloud](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `crossSectionCloudName` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CrossSectionCount` | `int` | `Cross Section Count` |

```csharp
public Task<int> GetNumberOfCrossSectionsInCrossSectionCloudAsync(
    CollectionObjectName crossSectionCloudName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNumberOfCrossSectionsInCrossSectionCloudAsync(crossSectionCloudName: crossSectionCloudName);
```

Returns the number of cross sections in the selected cross-section cloud.

Returns the MP output `Cross Section Count` directly as `int`. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Filter Clouds to Plane

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Filter Clouds to Plane](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-plane) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterPlaneName` | `CollectionObjectName` | `Filter Plane's Name` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `proximity` | `double` | `Proximity` | 0.000000 |
| `allowableOffsetDirection` | `OffsetDirectionType` | `Allowable Offset Dir` | Both |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task FilterCloudsToPlaneAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    CollectionObjectName filterPlaneName,
    CollectionObjectName outputGroupName,
    double proximity = 0.0,
    OffsetDirectionType allowableOffsetDirection = OffsetDirectionType.Both,
    PointOutputType outputType = PointOutputType.Points,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FilterCloudsToPlaneAsync(cloudNames: cloudNames, filterPlaneName: filterPlaneName, outputGroupName: outputGroupName);
```

Filters cloud points by proximity to a plane. Briosa supplies non-interactive Both and Points defaults where the MP Editor export is blank.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Filter Clouds to Group

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Filter Clouds to Group](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-group) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterGroupName` | `CollectionObjectName` | `Filter Group's Name` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `proximity` | `double` | `Proximity (0 for Closest Point only)` | 0.000000 |
| `maximumNumberOfPoints` | `int` | `Maximum Number of Points (0 for Unlimited)` | 0 |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task FilterCloudsToGroupAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    CollectionObjectName filterGroupName,
    CollectionObjectName outputGroupName,
    double proximity = 0.0,
    int maximumNumberOfPoints = 0,
    PointOutputType outputType = PointOutputType.Points,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FilterCloudsToGroupAsync(cloudNames: cloudNames, filterGroupName: filterGroupName, outputGroupName: outputGroupName);
```

Filters clouds by proximity to a point group.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Filter Clouds to Surface

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Filter Clouds to Surface](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-surface) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-surface)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterSurfaceName` | `CollectionObjectName` | `Filter Surface's Name` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `lowProximity` | `double` | `Low Proximity` | 0.000000 |
| `highProximity` | `double` | `High Proximity` | 0.000000 |
| `skipFactor` | `int` | `Skip Factor` | 0 |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task FilterCloudsToSurfaceAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    CollectionObjectName filterSurfaceName,
    CollectionObjectName outputGroupName,
    double lowProximity = 0.0,
    double highProximity = 0.0,
    int skipFactor = 0,
    PointOutputType outputType = PointOutputType.Points,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FilterCloudsToSurfaceAsync(cloudNames: cloudNames, filterSurfaceName: filterSurfaceName, outputGroupName: outputGroupName);
```

Filters clouds to a surface using low and high proximity limits.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Filter Clouds to BSplines

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Filter Clouds to BSplines](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-bsplines) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-bsplines)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterBSplineNames` | `IEnumerable<CollectionObjectName>` | `Filter BSpline Names` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimumProximity` | `double` | `Minimum Proximity` | 0.000000 |
| `maximumProximity` | `double` | `Maximum Proximity` | 0.000000 |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task FilterCloudsToBSplinesAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    IEnumerable<CollectionObjectName> filterBSplineNames,
    CollectionObjectName outputGroupName,
    double minimumProximity = 0.0,
    double maximumProximity = 0.0,
    PointOutputType outputType = PointOutputType.Points,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FilterCloudsToBSplinesAsync(cloudNames: cloudNames, filterBSplineNames: filterBSplineNames, outputGroupName: outputGroupName);
```

Filters clouds by proximity to one or more BSplines.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Filter Clouds to Line Segment

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Filter Clouds to Line Segment](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-line-segment) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-line-segment)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `firstLineEndPoint` | `PointName` | `First Line End Point` | Required |
| `secondLineEndPoint` | `PointName` | `Second Line End Point` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimumProximity` | `double` | `Minimum Proximity` | 0.000000 |
| `maximumProximity` | `double` | `Maximum Proximity` | 0.000000 |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task FilterCloudsToLineSegmentAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    PointName firstLineEndPoint,
    PointName secondLineEndPoint,
    CollectionObjectName outputGroupName,
    double minimumProximity = 0.0,
    double maximumProximity = 0.0,
    PointOutputType outputType = PointOutputType.Points,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FilterCloudsToLineSegmentAsync(cloudNames: cloudNames, firstLineEndPoint: firstLineEndPoint, secondLineEndPoint: secondLineEndPoint, outputGroupName: outputGroupName);
```

Filters clouds by proximity to a line segment defined by two SA points.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Filter Clouds to Vector Groups - Resolve points

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Filter Clouds to Vector Groups - Resolve points](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `vectorGroupNames` | `IEnumerable<CollectionObjectName>` | `Vector Group Names` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimumProximity` | `double` | `Minimum Proximity` | 0.000000 |
| `maximumProximity` | `double` | `Maximum Proximity` | 0.000000 |
| `maximumDistanceFromVectorBegin` | `double` | `Maximum Distance From Vector Begin` | 0.000000 |
| `minimumNumberOfRequiredPoints` | `int` | `Minimum number of required points` | 0 |
| `outputType` | `PointOutputType` | `Output Type` | Points |
| `includeProximityPoints` | `bool` | `Include Proximity Points?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task FilterCloudsToVectorGroupsResolvePointsAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    IEnumerable<CollectionObjectName> vectorGroupNames,
    CollectionObjectName outputGroupName,
    double minimumProximity = 0.0,
    double maximumProximity = 0.0,
    double maximumDistanceFromVectorBegin = 0.0,
    int minimumNumberOfRequiredPoints = 0,
    PointOutputType outputType = PointOutputType.Points,
    bool includeProximityPoints = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FilterCloudsToVectorGroupsResolvePointsAsync(cloudNames: cloudNames, vectorGroupNames: vectorGroupNames, outputGroupName: outputGroupName);
```

Resolves cloud points against vector groups. The exact 2026.1 target includes the Include Proximity Points input absent from ObjectiveSA 2024.1.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Filter Clouds to Vector Groups - Resolve Clouds

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Filter Clouds to Vector Groups - Resolve Clouds](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `vectorGroupNames` | `IEnumerable<CollectionObjectName>` | `Vector Group Names` | Required |
| `radialCutoff` | `double` | `Radial Cutoff` | 0.100000 |
| `lowerCutoff` | `double` | `Lower Cutoff` | -0.100000 |
| `upperCutoff` | `double` | `Upper Cutoff` | 0.100000 |
| `outputCollectionName` | `string` | `Output Collection Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `FilteredClouds` | `IReadOnlyList<CollectionObjectName>` | `Filtered Clouds` |

```csharp
public Task<IReadOnlyList<CollectionObjectName>> FilterCloudsToVectorGroupsResolveCloudsAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    IEnumerable<CollectionObjectName> vectorGroupNames,
    string outputCollectionName,
    double radialCutoff = 0.1,
    double lowerCutoff = -0.1,
    double upperCutoff = 0.1,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.FilterCloudsToVectorGroupsResolveCloudsAsync(cloudNames: cloudNames, vectorGroupNames: vectorGroupNames, outputCollectionName: outputCollectionName);
```

Creates filtered clouds from vector-group cutoffs and returns the resulting cloud references.

Returns the MP output `Filtered Clouds` directly as `IReadOnlyList<CollectionObjectName>`. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## RGB Cloud Point Filter

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[RGB Cloud Point Filter](/mp-command-catalog/commands/cloud-and-mesh-operations#rgb-cloud-point-filter) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#rgb-cloud-point-filter)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filterName` | `string` | `Filter Name` | Default Filter |
| `cloudsToBeFiltered` | `IEnumerable<CollectionObjectName>` | `Clouds To Be Filtered` | Required |
| `redEnabled` | `bool` | `Red Enabled` | true |
| `redHighEnabled` | `bool` | `Red High Enabled` | false |
| `redHighThreshold` | `int` | `Red High Threshold` | 255 |
| `redLowEnabled` | `bool` | `Red Low Enabled` | false |
| `redLowThreshold` | `int` | `Red Low Threshold` | 0 |
| `greenEnabled` | `bool` | `Green Enabled` | true |
| `greenHighEnabled` | `bool` | `Green High Enabled` | false |
| `greenHighThreshold` | `int` | `Green High Threshold` | 255 |
| `greenLowEnabled` | `bool` | `Green Low Enabled` | false |
| `greenLowThreshold` | `int` | `Green Low Threshold` | 0 |
| `blueEnabled` | `bool` | `Blue Enabled` | true |
| `blueHighEnabled` | `bool` | `Blue High Enabled` | false |
| `blueHighThreshold` | `int` | `Blue High Threshold` | 255 |
| `blueLowEnabled` | `bool` | `Blue Low Enabled` | false |
| `blueLowThreshold` | `int` | `Blue Low Threshold` | 0 |
| `grayScaleEnabled` | `bool` | `Gray Scale Enabled` | false |
| `grayScaleHighEnabled` | `bool` | `Gray Scale High Enabled` | false |
| `grayScaleHighThreshold` | `int` | `Gray Scale High Threshold` | 255 |
| `grayScaleLowEnabled` | `bool` | `Gray Scale Low Enabled` | false |
| `grayScaleLowThreshold` | `int` | `Gray Scale Low Threshold` | 0 |
| `rgbFilterOperation` | `RGBFilterOperation` | `RGB Filter Operation` | Reset and Apply Filter |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task RGBCloudPointFilterAsync(
    IEnumerable<CollectionObjectName> cloudsToBeFiltered,
    string filterName = "Default Filter",
    bool redEnabled = true,
    bool redHighEnabled = false,
    int redHighThreshold = 255,
    bool redLowEnabled = false,
    int redLowThreshold = 0,
    bool greenEnabled = true,
    bool greenHighEnabled = false,
    int greenHighThreshold = 255,
    bool greenLowEnabled = false,
    int greenLowThreshold = 0,
    bool blueEnabled = true,
    bool blueHighEnabled = false,
    int blueHighThreshold = 255,
    bool blueLowEnabled = false,
    int blueLowThreshold = 0,
    bool grayScaleEnabled = false,
    bool grayScaleHighEnabled = false,
    int grayScaleHighThreshold = 255,
    bool grayScaleLowEnabled = false,
    int grayScaleLowThreshold = 0,
    RGBFilterOperation rgbFilterOperation = RGBFilterOperation.ResetAndApplyFilter,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RGBCloudPointFilterAsync(cloudsToBeFiltered: cloudsToBeFiltered);
```

Applies the selected RGB, intensity, and grayscale thresholds to one or more clouds.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Get Cloud RGB Values

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Get Cloud RGB Values](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#get-cloud-rgb-values)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceCloudName` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `rgbColorChannel` | `RGBColorChannel` | `RGB Color Channel` | Intensity |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `LowValue` | `int` | `Low Value` |
| `HighValue` | `int` | `High Value` |
| `AverageValue` | `int` | `Average Value` |
| `StandardDeviation` | `int` | `Standard Deviation` |

```csharp
public sealed record GetCloudRGBValuesResult
{
    public required int LowValue { get; init; }

    public required int HighValue { get; init; }

    public required int AverageValue { get; init; }

    public required int StandardDeviation { get; init; }

}

public Task<GetCloudRGBValuesResult> GetCloudRGBValuesAsync(
    CollectionObjectName sourceCloudName,
    RGBColorChannel rgbColorChannel = RGBColorChannel.Intensity,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCloudRGBValuesAsync(sourceCloudName: sourceCloudName);
```

Returns channel statistics for a cloud.

Returns all 4 MP outputs in the named `GetCloudRGBValuesResult` value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Get Cloud RGB Values Near Point

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Get Cloud RGB Values Near Point](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values-near-point) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#get-cloud-rgb-values-near-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceCloudName` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `singlePoint` | `PointName` | `Single Point` | Required |
| `diameter` | `double` | `Diameter` | 10.000000 |
| `rgbColorChannel` | `RGBColorChannel` | `RGB Color Channel` | Intensity |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `LowValue` | `int` | `Low Value` |
| `HighValue` | `int` | `High Value` |
| `AverageValue` | `int` | `Average Value` |
| `StandardDeviation` | `int` | `Standard Deviation` |

```csharp
public sealed record GetCloudRGBValuesNearPointResult
{
    public required int LowValue { get; init; }

    public required int HighValue { get; init; }

    public required int AverageValue { get; init; }

    public required int StandardDeviation { get; init; }

}

public Task<GetCloudRGBValuesNearPointResult> GetCloudRGBValuesNearPointAsync(
    CollectionObjectName sourceCloudName,
    PointName singlePoint,
    double diameter = 10.0,
    RGBColorChannel rgbColorChannel = RGBColorChannel.Intensity,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCloudRGBValuesNearPointAsync(sourceCloudName: sourceCloudName, singlePoint: singlePoint);
```

Returns channel statistics for cloud points within a diameter around an SA point.

Returns all 4 MP outputs in the named `GetCloudRGBValuesNearPointResult` value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Subdivide Cloud by Point Spacing

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Subdivide Cloud by Point Spacing](/mp-command-catalog/commands/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceCloudName` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `pointSpacing` | `double` | `Point Spacing` | 0.000000 |
| `minimumPointsPerGroup` | `int` | `Minimum Points Per Group` | 0 |
| `newCloudName` | `CollectionObjectName` | `New Cloud Name` | Required |
| `keepAllGroups` | `bool` | `Keep All Groups?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task SubdivideCloudByPointSpacingAsync(
    CollectionObjectName sourceCloudName,
    CollectionObjectName newCloudName,
    double pointSpacing = 0.0,
    int minimumPointsPerGroup = 0,
    bool keepAllGroups = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SubdivideCloudByPointSpacingAsync(sourceCloudName: sourceCloudName, newCloudName: newCloudName);
```

Subdivides an enhanced cloud by point spacing into a new enhanced cloud.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Delete Cloud Points by Radial Distance from Points

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Delete Cloud Points by Radial Distance from Points](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `points` | `IEnumerable<PointName>` | `Points` | Required |
| `radius` | `double` | `Radius` | 0.000000 |
| `deleteInside` | `bool` | `Delete Inside` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task DeleteCloudPointsByRadialDistanceFromPointsAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    IEnumerable<PointName> points,
    double radius = 0.0,
    bool deleteInside = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteCloudPointsByRadialDistanceFromPointsAsync(cloudNames: cloudNames, points: points);
```

Deletes cloud points inside or outside the radial neighborhoods of selected SA points.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Delete Cloud Points by X Y Z Range

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — destructive fixture validation required.
:::

[Delete Cloud Points by X Y Z Range](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `IEnumerable<CollectionObjectName>` | `Cloud Names` | Required |
| `xMin` | `double?` | `X Min` | Omitted |
| `xMax` | `double?` | `X Max` | Omitted |
| `yMin` | `double?` | `Y Min` | Omitted |
| `yMax` | `double?` | `Y Max` | Omitted |
| `zMin` | `double?` | `Z Min` | Omitted |
| `zMax` | `double?` | `Z Max` | Omitted |
| `deleteInside` | `bool` | `Delete Inside` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task DeleteCloudPointsByXYZRangeAsync(
    IEnumerable<CollectionObjectName> cloudNames,
    double? xMin = null,
    double? xMax = null,
    double? yMin = null,
    double? yMax = null,
    double? zMin = null,
    double? zMax = null,
    bool deleteInside = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteCloudPointsByXYZRangeAsync(cloudNames: cloudNames);
```

Deletes cloud points inside or outside supplied axis bounds. A licensed 2026.1.0529.7 probe confirmed that each exported NOT_SUPPORTED optional bound is accepted through SetDoubleArg; omitting a bound preserves MP Ignore. Destructive fixture semantics still require validation.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Generate General Mesh

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Generate General Mesh](/mp-command-catalog/commands/cloud-and-mesh-operations#generate-general-mesh) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#generate-general-mesh)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `outputMeshName` | `CollectionObjectName` | `Output Mesh Name` | Required |
| `cloudsToMesh` | `IEnumerable<CollectionObjectName>` | `Clouds to Mesh` | Required |
| `maximumTriangleSize` | `double` | `Maximum Triangle Size` | 0.050000 |
| `smallestHoleDiameter` | `double` | `Smallest Hole Diameter` | 0.250000 |
| `finalize` | `bool` | `Finalize` | true |
| `useScanDirectionForPointNormal` | `bool` | `Use Scan Direction For Point Normal` | true |
| `jsonFile` | `FileReference?` | `JSON File(optional)` | Omitted |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task GenerateGeneralMeshAsync(
    CollectionObjectName outputMeshName,
    IEnumerable<CollectionObjectName> cloudsToMesh,
    double maximumTriangleSize = 0.05,
    double smallestHoleDiameter = 0.25,
    bool finalize = true,
    bool useScanDirectionForPointNormal = true,
    FileReference? jsonFile = null,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GenerateGeneralMeshAsync(outputMeshName: outputMeshName, cloudsToMesh: cloudsToMesh);
```

Generates a scan-stripe mesh from one or more clouds and can optionally write a JSON file.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Consolidate Mesh

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Consolidate Mesh](/mp-command-catalog/commands/cloud-and-mesh-operations#consolidate-mesh) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#consolidate-mesh)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task ConsolidateMeshAsync(
    CollectionObjectName mesh,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConsolidateMeshAsync(mesh: mesh);
```

Consolidates the selected scan-stripe mesh.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Mesh Volume

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Mesh Volume](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-volume) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#mesh-volume)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |
| `plane` | `CollectionObjectName` | `Plane` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Above` | `double` | `Above` |
| `Below` | `double` | `Below` |

```csharp
public sealed record MeshVolumeResult
{
    public required double Above { get; init; }

    public required double Below { get; init; }

}

public Task<MeshVolumeResult> MeshVolumeAsync(
    CollectionObjectName mesh,
    CollectionObjectName plane,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MeshVolumeAsync(mesh: mesh, plane: plane);
```

Returns the mesh volume above and below the selected plane.

Returns all 2 MP outputs in the named `MeshVolumeResult` value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.

## Mesh Fill Holes

:::note[Status: Next]
This client API is part of the next .NET package contract. Validation: At Risk — fixture or interactive validation required.
:::

[Mesh Fill Holes](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-fill-holes) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#mesh-fill-holes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |
| `maximumTriangleLength` | `double` | `Maximum Triangle Length` | -1.000000 |
| `tension` | `double` | `Tension` | 0.000000 |
| `unconditionalFilling` | `bool` | `Unconditional Filling?` | false |
| `fillAllHoles` | `bool` | `Fill All Holes?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```csharp
public Task MeshFillHolesAsync(
    CollectionObjectName mesh,
    double maximumTriangleLength = -1.0,
    double tension = 0.0,
    bool unconditionalFilling = false,
    bool fillAllHoles = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MeshFillHolesAsync(mesh: mesh);
```

Fills holes in the selected mesh. Briosa keeps Fill All Holes true by default so the command does not open an interactive hole-selection dialog.

Completes without a command value. Caller cancellation does not prove that in-flight SA work stopped and never causes automatic replay.
