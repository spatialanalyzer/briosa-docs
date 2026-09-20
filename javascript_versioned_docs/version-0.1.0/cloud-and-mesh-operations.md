---
title: Cloud and Mesh Operations
description: Briosa 0.1.0 JavaScript and TypeScript APIs for supported Cloud and Mesh Operations MP commands.
toc_max_heading_level: 2
---

# Cloud and Mesh Operations

Exact MP command words map mechanically to `lowerCamelCase`. Commands use one
readonly input object; call controls remain a separate final value.

## Cloud Display Control

:::note[Validation]

Validation: Portable contract review.

:::

[Cloud Display Control](/mp-command-catalog/commands/cloud-and-mesh-operations#cloud-display-control) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#cloud-display-control)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `thinDrawIncrement` | `number` | `Thin (Draw Increment)` | 1 |
| `pointSize` | `number` | `Point Size` | 1 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface CloudDisplayControlInput {
  readonly thinDrawIncrement?: number;
  readonly pointSize?: number;
}

function cloudDisplayControl(
  briosa: BriosaClient,
  input?: CloudDisplayControlInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await cloudDisplayControl(briosa);
```

Adjusts SpatialAnalyzer cloud drawing density and point size.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Reset Cloud Bounding Box

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Reset Cloud Bounding Box](/mp-command-catalog/commands/cloud-and-mesh-operations#reset-cloud-bounding-box) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#reset-cloud-bounding-box)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudName` | `CollectionObjectName` | `Cloud Name` | Required |
| `cloudBoxType` | `CloudBoxType` | `Cloud Box Type` | World Axis Aligned Box |
| `showBoundingBox` | `boolean` | `Show Bounding Box?` | true |
| `useAllPoints` | `boolean` | `Use All Points?` | false |
| `desiredPointCount` | `number` | `Desired Point Count` | 1000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `xAxisDimension` | `number` | `X-Axis Dimension` |
| `yAxisDimension` | `number` | `Y-Axis Dimension` |
| `zAxisDimension` | `number` | `Z-Axis Dimension` |
| `xAxisInWorld` | `Vector` | `X-Axis (in WORLD)` |
| `yAxisInWorld` | `Vector` | `Y-Axis (in WORLD)` |
| `zAxisInWorld` | `Vector` | `Z-Axis (in WORLD)` |
| `centroidInWorld` | `Vector` | `Centroid (in WORLD)` |
| `referenceTransformInWorld` | `Transform` | `Reference Transform (in WORLD)` |
| `referenceTransformInWorking` | `Transform` | `Reference Transform (in WORKING)` |
| `pointsUsedForBoundingBox` | `number` | `Points Used for Bounding Box` |

```ts
export interface ResetCloudBoundingBoxResult {
  readonly xAxisDimension: number;
  readonly yAxisDimension: number;
  readonly zAxisDimension: number;
  readonly xAxisInWorld: Vector;
  readonly yAxisInWorld: Vector;
  readonly zAxisInWorld: Vector;
  readonly centroidInWorld: Vector;
  readonly referenceTransformInWorld: Transform;
  readonly referenceTransformInWorking: Transform;
  readonly pointsUsedForBoundingBox: number;
}

export interface ResetCloudBoundingBoxInput {
  readonly cloudName: CollectionObjectName;
  readonly cloudBoxType?: CloudBoxType;
  readonly showBoundingBox?: boolean;
  readonly useAllPoints?: boolean;
  readonly desiredPointCount?: number;
}

function resetCloudBoundingBox(
  briosa: BriosaClient,
  input: ResetCloudBoundingBoxInput,
  options?: BriosaCallOptions,
): Promise<ResetCloudBoundingBoxResult>;
```

```ts
await resetCloudBoundingBox(briosa, { cloudName: ... });
```

Recomputes one cloud bounding box and returns its dimensions, axes, centroid, transforms, and sample count.

Returns all 10 MP outputs in the detached readonly `ResetCloudBoundingBoxResult` value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Get Cloud Point Count

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Get Cloud Point Count](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-point-count) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#get-cloud-point-count)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudName` | `CollectionObjectName` | `Cloud Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `pointsCount` | `number` | `Points Count` |
| `planarOffset` | `number` | `Planar Offset` |
| `radialOffset` | `number` | `Radial Offset` |
| `activeClippingPlanes` | `number` | `Active Clipping Planes` |

```ts
export interface GetCloudPointCountResult {
  readonly pointsCount: number;
  readonly planarOffset: number;
  readonly radialOffset: number;
  readonly activeClippingPlanes: number;
}

export interface GetCloudPointCountInput {
  readonly cloudName: CollectionObjectName;
}

function getCloudPointCount(
  briosa: BriosaClient,
  input: GetCloudPointCountInput,
  options?: BriosaCallOptions,
): Promise<GetCloudPointCountResult>;
```

```ts
await getCloudPointCount(briosa, { cloudName: ... });
```

Returns the selected cloud point count and current clipping-related values.

Returns all 4 MP outputs in the detached readonly `GetCloudPointCountResult` value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Set Cloud Default Clipping Plane

:::note[Validation]

Validation: Licensed SA 2026.1.0529.7 probe.

:::

[Set Cloud Default Clipping Plane](/mp-command-catalog/commands/cloud-and-mesh-operations#set-cloud-default-clipping-plane) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#set-cloud-default-clipping-plane)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `enableCloudClipping` | `boolean` | `Enable Cloud Clipping?` | false |
| `referenceObject` | `CollectionObjectName` | `Reference Object` | Omitted when disabling |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface SetCloudDefaultClippingPlaneInput {
  readonly enableCloudClipping?: boolean;
  readonly referenceObject?: CollectionObjectName;
}

function setCloudDefaultClippingPlane(
  briosa: BriosaClient,
  input?: SetCloudDefaultClippingPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCloudDefaultClippingPlane(briosa);
```

Controls the default clipping plane for newly measured clouds. The exact SDK cannot set the MP Clipping Options value, so enabling uses SpatialAnalyzer current default clipping components. Briosa defaults to disabled to avoid an interactive object selector; reference_object is required only when enabling.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Raster Scan Edge Inspection

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Raster Scan Edge Inspection](/mp-command-catalog/commands/cloud-and-mesh-operations#raster-scan-edge-inspection) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#raster-scan-edge-inspection)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `edgeSurfaceName` | `CollectionObjectName` | `Edge Surface Name` | Required |
| `bSplineEdgeList` | `Iterable<CollectionObjectName>` | `BSpline Edge List` | Required |
| `prefixForOutputGroups` | `CollectionObjectName` | `Prefix for Output Groups` | Required |
| `tolerance` | `number` | `Tolerance` | 0.000000 |
| `minimumGoodPointsPerUnitLength` | `number` | `Minimum Number of Good Points per Unit Length` | 0 |
| `maximumBadPointsPercentage` | `number` | `Maximum Percentage of Bad Points (0-100)` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `summaryResult` | `string` | `Summary Result` |

```ts
export interface RasterScanEdgeInspectionInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly edgeSurfaceName: CollectionObjectName;
  readonly bSplineEdgeList: Iterable<CollectionObjectName>;
  readonly prefixForOutputGroups: CollectionObjectName;
  readonly tolerance?: number;
  readonly minimumGoodPointsPerUnitLength?: number;
  readonly maximumBadPointsPercentage?: number;
}

function rasterScanEdgeInspection(
  briosa: BriosaClient,
  input: RasterScanEdgeInspectionInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await rasterScanEdgeInspection(briosa, { cloudNames: ..., edgeSurfaceName: ..., bSplineEdgeList: ..., prefixForOutputGroups: ... });
```

Runs the legacy raster-scan edge inspection workflow and returns the SA summary result.

Returns the MP output `Summary Result` directly as `string`. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## New Raster Scan Edge Inspection

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[New Raster Scan Edge Inspection](/mp-command-catalog/commands/cloud-and-mesh-operations#new-raster-scan-edge-inspection) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#new-raster-scan-edge-inspection)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `edgeCloudNames` | `Iterable<CollectionObjectName>` | `Edge Cloud Names` | Required |
| `edgeSurfaceName` | `CollectionObjectName` | `Edge Surface Name` | Required |
| `edgeBSplineName` | `CollectionObjectName` | `Edge BSpline Name` | Required |
| `outputPrefix` | `CollectionObjectName` | `Output Prefix` | Required |
| `inspectionIncrement` | `number` | `Inspection Increment` | 0.000000 |
| `proximityFilterDistance` | `number` | `Proximity Filter Distance` | 0.000000 |
| `edgeBiasValue` | `number` | `Edge Bias Value` | 0.000000 |
| `errorTolerance` | `number` | `Error Tolerance` | 0.000000 |
| `useCosineProjectionMethod` | `boolean` | `Use Cosine Projection Method` | false |
| `minimumEdgePointsPerSegment` | `number` | `Minimum Number of Edge Points per segment` | 0 |
| `intermediateCalculationResultsFile` | `FileReference` | `Intermediate Calculation Results File(optional)` | Omitted |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `summaryResult` | `string` | `Summary Result` |

```ts
export interface NewRasterScanEdgeInspectionInput {
  readonly edgeCloudNames: Iterable<CollectionObjectName>;
  readonly edgeSurfaceName: CollectionObjectName;
  readonly edgeBSplineName: CollectionObjectName;
  readonly outputPrefix: CollectionObjectName;
  readonly inspectionIncrement?: number;
  readonly proximityFilterDistance?: number;
  readonly edgeBiasValue?: number;
  readonly errorTolerance?: number;
  readonly useCosineProjectionMethod?: boolean;
  readonly minimumEdgePointsPerSegment?: number;
  readonly intermediateCalculationResultsFile?: FileReference;
}

function newRasterScanEdgeInspection(
  briosa: BriosaClient,
  input: NewRasterScanEdgeInspectionInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await newRasterScanEdgeInspection(briosa, { edgeCloudNames: ..., edgeSurfaceName: ..., edgeBSplineName: ..., outputPrefix: ... });
```

Runs the newer raster-scan edge inspection workflow and optionally writes intermediate calculations.

Returns the MP output `Summary Result` directly as `string`. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Clear Cloud Point Deviations

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Clear Cloud Point Deviations](/mp-command-catalog/commands/cloud-and-mesh-operations#clear-cloud-point-deviations) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#clear-cloud-point-deviations)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudName` | `CollectionObjectName` | `Cloud Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface ClearCloudPointDeviationsInput {
  readonly cloudName: CollectionObjectName;
}

function clearCloudPointDeviations(
  briosa: BriosaClient,
  input: ClearCloudPointDeviationsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await clearCloudPointDeviations(briosa, { cloudName: ... });
```

Clears point-deviation data stored on the selected cloud.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Enable All Cloud Cross Sections

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Enable All Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#enable-all-cloud-cross-sections)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `crossSectionCloudName` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface EnableAllCloudCrossSectionsInput {
  readonly crossSectionCloudName: CollectionObjectName;
}

function enableAllCloudCrossSections(
  briosa: BriosaClient,
  input: EnableAllCloudCrossSectionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await enableAllCloudCrossSections(briosa, { crossSectionCloudName: ... });
```

Enables every cross section in one cross-section cloud.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Enable/Disable Cloud Cross Sections

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Enable/Disable Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#enabledisable-cloud-cross-sections)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `crossSectionCloudName` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| `crossSectionId` | `number` | `Cross Section ID` | 0 |
| `enable` | `boolean` | `Enable (TRUE) / Disable (FALSE)?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface EnableDisableCloudCrossSectionsInput {
  readonly crossSectionCloudName: CollectionObjectName;
  readonly crossSectionId?: number;
  readonly enable?: boolean;
}

function enableDisableCloudCrossSections(
  briosa: BriosaClient,
  input: EnableDisableCloudCrossSectionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await enableDisableCloudCrossSections(briosa, { crossSectionCloudName: ... });
```

Enables or disables one identified cross section.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Enable Single Cloud Cross Section

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Enable Single Cloud Cross Section](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#enable-single-cloud-cross-section)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `crossSectionCloudName` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| `crossSectionId` | `number` | `Cross Section ID` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface EnableSingleCloudCrossSectionInput {
  readonly crossSectionCloudName: CollectionObjectName;
  readonly crossSectionId?: number;
}

function enableSingleCloudCrossSection(
  briosa: BriosaClient,
  input: EnableSingleCloudCrossSectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await enableSingleCloudCrossSection(briosa, { crossSectionCloudName: ... });
```

Enables one cross section and leaves it as the single enabled section.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Get Number of Cross Sections in Cross Section Cloud

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Get Number of Cross Sections in Cross Section Cloud](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `crossSectionCloudName` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `crossSectionCount` | `number` | `Cross Section Count` |

```ts
export interface GetNumberOfCrossSectionsInCrossSectionCloudInput {
  readonly crossSectionCloudName: CollectionObjectName;
}

function getNumberOfCrossSectionsInCrossSectionCloud(
  briosa: BriosaClient,
  input: GetNumberOfCrossSectionsInCrossSectionCloudInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getNumberOfCrossSectionsInCrossSectionCloud(briosa, { crossSectionCloudName: ... });
```

Returns the number of cross sections in the selected cross-section cloud.

Returns the MP output `Cross Section Count` directly as `number`. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Filter Clouds to Plane

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Plane](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-plane) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#filter-clouds-to-plane)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterPlaneName` | `CollectionObjectName` | `Filter Plane's Name` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `proximity` | `number` | `Proximity` | 0.000000 |
| `allowableOffsetDirection` | `OffsetDirectionType` | `Allowable Offset Dir` | Both |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface FilterCloudsToPlaneInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterPlaneName: CollectionObjectName;
  readonly outputGroupName: CollectionObjectName;
  readonly proximity?: number;
  readonly allowableOffsetDirection?: OffsetDirectionType;
  readonly outputType?: PointOutputType;
}

function filterCloudsToPlane(
  briosa: BriosaClient,
  input: FilterCloudsToPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await filterCloudsToPlane(briosa, { cloudNames: ..., filterPlaneName: ..., outputGroupName: ... });
```

Filters cloud points by proximity to a plane. Briosa supplies non-interactive Both and Points defaults where the MP Editor export is blank.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Filter Clouds to Group

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Group](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-group) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#filter-clouds-to-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterGroupName` | `CollectionObjectName` | `Filter Group's Name` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `proximity` | `number` | `Proximity (0 for Closest Point only)` | 0.000000 |
| `maximumNumberOfPoints` | `number` | `Maximum Number of Points (0 for Unlimited)` | 0 |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface FilterCloudsToGroupInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterGroupName: CollectionObjectName;
  readonly outputGroupName: CollectionObjectName;
  readonly proximity?: number;
  readonly maximumNumberOfPoints?: number;
  readonly outputType?: PointOutputType;
}

function filterCloudsToGroup(
  briosa: BriosaClient,
  input: FilterCloudsToGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await filterCloudsToGroup(briosa, { cloudNames: ..., filterGroupName: ..., outputGroupName: ... });
```

Filters clouds by proximity to a point group.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Filter Clouds to Surface

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Surface](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-surface) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#filter-clouds-to-surface)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterSurfaceName` | `CollectionObjectName` | `Filter Surface's Name` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `lowProximity` | `number` | `Low Proximity` | 0.000000 |
| `highProximity` | `number` | `High Proximity` | 0.000000 |
| `skipFactor` | `number` | `Skip Factor` | 0 |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface FilterCloudsToSurfaceInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterSurfaceName: CollectionObjectName;
  readonly outputGroupName: CollectionObjectName;
  readonly lowProximity?: number;
  readonly highProximity?: number;
  readonly skipFactor?: number;
  readonly outputType?: PointOutputType;
}

function filterCloudsToSurface(
  briosa: BriosaClient,
  input: FilterCloudsToSurfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await filterCloudsToSurface(briosa, { cloudNames: ..., filterSurfaceName: ..., outputGroupName: ... });
```

Filters clouds to a surface using low and high proximity limits.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Filter Clouds to BSplines

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to BSplines](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-bsplines) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#filter-clouds-to-bsplines)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterBSplineNames` | `Iterable<CollectionObjectName>` | `Filter BSpline Names` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimumProximity` | `number` | `Minimum Proximity` | 0.000000 |
| `maximumProximity` | `number` | `Maximum Proximity` | 0.000000 |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface FilterCloudsToBSplinesInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterBSplineNames: Iterable<CollectionObjectName>;
  readonly outputGroupName: CollectionObjectName;
  readonly minimumProximity?: number;
  readonly maximumProximity?: number;
  readonly outputType?: PointOutputType;
}

function filterCloudsToBSplines(
  briosa: BriosaClient,
  input: FilterCloudsToBSplinesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await filterCloudsToBSplines(briosa, { cloudNames: ..., filterBSplineNames: ..., outputGroupName: ... });
```

Filters clouds by proximity to one or more BSplines.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Filter Clouds to Line Segment

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Line Segment](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-line-segment) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#filter-clouds-to-line-segment)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `firstLineEndPoint` | `PointName` | `First Line End Point` | Required |
| `secondLineEndPoint` | `PointName` | `Second Line End Point` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimumProximity` | `number` | `Minimum Proximity` | 0.000000 |
| `maximumProximity` | `number` | `Maximum Proximity` | 0.000000 |
| `outputType` | `PointOutputType` | `Output Type` | Points |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface FilterCloudsToLineSegmentInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly firstLineEndPoint: PointName;
  readonly secondLineEndPoint: PointName;
  readonly outputGroupName: CollectionObjectName;
  readonly minimumProximity?: number;
  readonly maximumProximity?: number;
  readonly outputType?: PointOutputType;
}

function filterCloudsToLineSegment(
  briosa: BriosaClient,
  input: FilterCloudsToLineSegmentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await filterCloudsToLineSegment(briosa, { cloudNames: ..., firstLineEndPoint: ..., secondLineEndPoint: ..., outputGroupName: ... });
```

Filters clouds by proximity to a line segment defined by two SA points.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Filter Clouds to Vector Groups - Resolve points

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Vector Groups - Resolve points](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `vectorGroupNames` | `Iterable<CollectionObjectName>` | `Vector Group Names` | Required |
| `outputGroupName` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimumProximity` | `number` | `Minimum Proximity` | 0.000000 |
| `maximumProximity` | `number` | `Maximum Proximity` | 0.000000 |
| `maximumDistanceFromVectorBegin` | `number` | `Maximum Distance From Vector Begin` | 0.000000 |
| `minimumNumberOfRequiredPoints` | `number` | `Minimum number of required points` | 0 |
| `outputType` | `PointOutputType` | `Output Type` | Points |
| `includeProximityPoints` | `boolean` | `Include Proximity Points?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface FilterCloudsToVectorGroupsResolvePointsInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly vectorGroupNames: Iterable<CollectionObjectName>;
  readonly outputGroupName: CollectionObjectName;
  readonly minimumProximity?: number;
  readonly maximumProximity?: number;
  readonly maximumDistanceFromVectorBegin?: number;
  readonly minimumNumberOfRequiredPoints?: number;
  readonly outputType?: PointOutputType;
  readonly includeProximityPoints?: boolean;
}

function filterCloudsToVectorGroupsResolvePoints(
  briosa: BriosaClient,
  input: FilterCloudsToVectorGroupsResolvePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await filterCloudsToVectorGroupsResolvePoints(briosa, { cloudNames: ..., vectorGroupNames: ..., outputGroupName: ... });
```

Resolves cloud points against vector groups. The exact 2026.1 target includes the Include Proximity Points input absent from ObjectiveSA 2024.1.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Filter Clouds to Vector Groups - Resolve Clouds

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Vector Groups - Resolve Clouds](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `vectorGroupNames` | `Iterable<CollectionObjectName>` | `Vector Group Names` | Required |
| `radialCutoff` | `number` | `Radial Cutoff` | 0.100000 |
| `lowerCutoff` | `number` | `Lower Cutoff` | -0.100000 |
| `upperCutoff` | `number` | `Upper Cutoff` | 0.100000 |
| `outputCollectionName` | `string` | `Output Collection Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `filteredClouds` | `readonly CollectionObjectName[]` | `Filtered Clouds` |

```ts
export interface FilterCloudsToVectorGroupsResolveCloudsInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly vectorGroupNames: Iterable<CollectionObjectName>;
  readonly radialCutoff?: number;
  readonly lowerCutoff?: number;
  readonly upperCutoff?: number;
  readonly outputCollectionName: string;
}

function filterCloudsToVectorGroupsResolveClouds(
  briosa: BriosaClient,
  input: FilterCloudsToVectorGroupsResolveCloudsInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

```ts
await filterCloudsToVectorGroupsResolveClouds(briosa, { cloudNames: ..., vectorGroupNames: ..., outputCollectionName: ... });
```

Creates filtered clouds from vector-group cutoffs and returns the resulting cloud references.

Returns the MP output `Filtered Clouds` directly as `readonly CollectionObjectName[]`. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## RGB Cloud Point Filter

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[RGB Cloud Point Filter](/mp-command-catalog/commands/cloud-and-mesh-operations#rgb-cloud-point-filter) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#rgb-cloud-point-filter)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filterName` | `string` | `Filter Name` | Default Filter |
| `cloudsToBeFiltered` | `Iterable<CollectionObjectName>` | `Clouds To Be Filtered` | Required |
| `redEnabled` | `boolean` | `Red Enabled` | true |
| `redHighEnabled` | `boolean` | `Red High Enabled` | false |
| `redHighThreshold` | `number` | `Red High Threshold` | 255 |
| `redLowEnabled` | `boolean` | `Red Low Enabled` | false |
| `redLowThreshold` | `number` | `Red Low Threshold` | 0 |
| `greenEnabled` | `boolean` | `Green Enabled` | true |
| `greenHighEnabled` | `boolean` | `Green High Enabled` | false |
| `greenHighThreshold` | `number` | `Green High Threshold` | 255 |
| `greenLowEnabled` | `boolean` | `Green Low Enabled` | false |
| `greenLowThreshold` | `number` | `Green Low Threshold` | 0 |
| `blueEnabled` | `boolean` | `Blue Enabled` | true |
| `blueHighEnabled` | `boolean` | `Blue High Enabled` | false |
| `blueHighThreshold` | `number` | `Blue High Threshold` | 255 |
| `blueLowEnabled` | `boolean` | `Blue Low Enabled` | false |
| `blueLowThreshold` | `number` | `Blue Low Threshold` | 0 |
| `grayScaleEnabled` | `boolean` | `Gray Scale Enabled` | false |
| `grayScaleHighEnabled` | `boolean` | `Gray Scale High Enabled` | false |
| `grayScaleHighThreshold` | `number` | `Gray Scale High Threshold` | 255 |
| `grayScaleLowEnabled` | `boolean` | `Gray Scale Low Enabled` | false |
| `grayScaleLowThreshold` | `number` | `Gray Scale Low Threshold` | 0 |
| `rgbFilterOperation` | `RGBFilterOperation` | `RGB Filter Operation` | Reset and Apply Filter |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface RGBCloudPointFilterInput {
  readonly filterName?: string;
  readonly cloudsToBeFiltered: Iterable<CollectionObjectName>;
  readonly redEnabled?: boolean;
  readonly redHighEnabled?: boolean;
  readonly redHighThreshold?: number;
  readonly redLowEnabled?: boolean;
  readonly redLowThreshold?: number;
  readonly greenEnabled?: boolean;
  readonly greenHighEnabled?: boolean;
  readonly greenHighThreshold?: number;
  readonly greenLowEnabled?: boolean;
  readonly greenLowThreshold?: number;
  readonly blueEnabled?: boolean;
  readonly blueHighEnabled?: boolean;
  readonly blueHighThreshold?: number;
  readonly blueLowEnabled?: boolean;
  readonly blueLowThreshold?: number;
  readonly grayScaleEnabled?: boolean;
  readonly grayScaleHighEnabled?: boolean;
  readonly grayScaleHighThreshold?: number;
  readonly grayScaleLowEnabled?: boolean;
  readonly grayScaleLowThreshold?: number;
  readonly rgbFilterOperation?: RGBFilterOperation;
}

function rgbCloudPointFilter(
  briosa: BriosaClient,
  input: RGBCloudPointFilterInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await rgbCloudPointFilter(briosa, { cloudsToBeFiltered: ... });
```

Applies the selected RGB, intensity, and grayscale thresholds to one or more clouds.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Get Cloud RGB Values

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Get Cloud RGB Values](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#get-cloud-rgb-values)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceCloudName` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `rgbColorChannel` | `RGBColorChannel` | `RGB Color Channel` | Intensity |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `lowValue` | `number` | `Low Value` |
| `highValue` | `number` | `High Value` |
| `averageValue` | `number` | `Average Value` |
| `standardDeviation` | `number` | `Standard Deviation` |

```ts
export interface GetCloudRGBValuesResult {
  readonly lowValue: number;
  readonly highValue: number;
  readonly averageValue: number;
  readonly standardDeviation: number;
}

export interface GetCloudRGBValuesInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly rgbColorChannel?: RGBColorChannel;
}

function getCloudRGBValues(
  briosa: BriosaClient,
  input: GetCloudRGBValuesInput,
  options?: BriosaCallOptions,
): Promise<GetCloudRGBValuesResult>;
```

```ts
await getCloudRGBValues(briosa, { sourceCloudName: ... });
```

Returns channel statistics for a cloud.

Returns all 4 MP outputs in the detached readonly `GetCloudRGBValuesResult` value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Get Cloud RGB Values Near Point

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Get Cloud RGB Values Near Point](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values-near-point) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#get-cloud-rgb-values-near-point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceCloudName` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `singlePoint` | `PointName` | `Single Point` | Required |
| `diameter` | `number` | `Diameter` | 10.000000 |
| `rgbColorChannel` | `RGBColorChannel` | `RGB Color Channel` | Intensity |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `lowValue` | `number` | `Low Value` |
| `highValue` | `number` | `High Value` |
| `averageValue` | `number` | `Average Value` |
| `standardDeviation` | `number` | `Standard Deviation` |

```ts
export interface GetCloudRGBValuesNearPointResult {
  readonly lowValue: number;
  readonly highValue: number;
  readonly averageValue: number;
  readonly standardDeviation: number;
}

export interface GetCloudRGBValuesNearPointInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly singlePoint: PointName;
  readonly diameter?: number;
  readonly rgbColorChannel?: RGBColorChannel;
}

function getCloudRGBValuesNearPoint(
  briosa: BriosaClient,
  input: GetCloudRGBValuesNearPointInput,
  options?: BriosaCallOptions,
): Promise<GetCloudRGBValuesNearPointResult>;
```

```ts
await getCloudRGBValuesNearPoint(briosa, { sourceCloudName: ..., singlePoint: ... });
```

Returns channel statistics for cloud points within a diameter around an SA point.

Returns all 4 MP outputs in the detached readonly `GetCloudRGBValuesNearPointResult` value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Subdivide Cloud by Point Spacing

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Subdivide Cloud by Point Spacing](/mp-command-catalog/commands/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceCloudName` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `pointSpacing` | `number` | `Point Spacing` | 0.000000 |
| `minimumPointsPerGroup` | `number` | `Minimum Points Per Group` | 0 |
| `newCloudName` | `CollectionObjectName` | `New Cloud Name` | Required |
| `keepAllGroups` | `boolean` | `Keep All Groups?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface SubdivideCloudByPointSpacingInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly pointSpacing?: number;
  readonly minimumPointsPerGroup?: number;
  readonly newCloudName: CollectionObjectName;
  readonly keepAllGroups?: boolean;
}

function subdivideCloudByPointSpacing(
  briosa: BriosaClient,
  input: SubdivideCloudByPointSpacingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await subdivideCloudByPointSpacing(briosa, { sourceCloudName: ..., newCloudName: ... });
```

Subdivides an enhanced cloud by point spacing into a new enhanced cloud.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Delete Cloud Points by Radial Distance from Points

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Delete Cloud Points by Radial Distance from Points](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `points` | `Iterable<PointName>` | `Points` | Required |
| `radius` | `number` | `Radius` | 0.000000 |
| `deleteInside` | `boolean` | `Delete Inside` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface DeleteCloudPointsByRadialDistanceFromPointsInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly points: Iterable<PointName>;
  readonly radius?: number;
  readonly deleteInside?: boolean;
}

function deleteCloudPointsByRadialDistanceFromPoints(
  briosa: BriosaClient,
  input: DeleteCloudPointsByRadialDistanceFromPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteCloudPointsByRadialDistanceFromPoints(briosa, { cloudNames: ..., points: ... });
```

Deletes cloud points inside or outside the radial neighborhoods of selected SA points.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Delete Cloud Points by X Y Z Range

:::note[Validation]

Validation: At Risk — destructive fixture validation required.

:::

[Delete Cloud Points by X Y Z Range](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `xMin` | `number` | `X Min` | Omitted |
| `xMax` | `number` | `X Max` | Omitted |
| `yMin` | `number` | `Y Min` | Omitted |
| `yMax` | `number` | `Y Max` | Omitted |
| `zMin` | `number` | `Z Min` | Omitted |
| `zMax` | `number` | `Z Max` | Omitted |
| `deleteInside` | `boolean` | `Delete Inside` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface DeleteCloudPointsByXYZRangeInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly xMin?: number;
  readonly xMax?: number;
  readonly yMin?: number;
  readonly yMax?: number;
  readonly zMin?: number;
  readonly zMax?: number;
  readonly deleteInside?: boolean;
}

function deleteCloudPointsByXYZRange(
  briosa: BriosaClient,
  input: DeleteCloudPointsByXYZRangeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteCloudPointsByXYZRange(briosa, { cloudNames: ... });
```

Deletes cloud points inside or outside supplied axis bounds. A licensed 2026.1.0529.7 probe confirmed that each exported NOT_SUPPORTED optional bound is accepted through SetDoubleArg; omitting a bound preserves MP Ignore. Destructive fixture semantics still require validation.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Generate General Mesh

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Generate General Mesh](/mp-command-catalog/commands/cloud-and-mesh-operations#generate-general-mesh) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#generate-general-mesh)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `outputMeshName` | `CollectionObjectName` | `Output Mesh Name` | Required |
| `cloudsToMesh` | `Iterable<CollectionObjectName>` | `Clouds to Mesh` | Required |
| `maximumTriangleSize` | `number` | `Maximum Triangle Size` | 0.050000 |
| `smallestHoleDiameter` | `number` | `Smallest Hole Diameter` | 0.250000 |
| `finalize` | `boolean` | `Finalize` | true |
| `useScanDirectionForPointNormal` | `boolean` | `Use Scan Direction For Point Normal` | true |
| `jsonFile` | `FileReference` | `JSON File(optional)` | Omitted |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface GenerateGeneralMeshInput {
  readonly outputMeshName: CollectionObjectName;
  readonly cloudsToMesh: Iterable<CollectionObjectName>;
  readonly maximumTriangleSize?: number;
  readonly smallestHoleDiameter?: number;
  readonly finalize?: boolean;
  readonly useScanDirectionForPointNormal?: boolean;
  readonly jsonFile?: FileReference;
}

function generateGeneralMesh(
  briosa: BriosaClient,
  input: GenerateGeneralMeshInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await generateGeneralMesh(briosa, { outputMeshName: ..., cloudsToMesh: ... });
```

Generates a scan-stripe mesh from one or more clouds and can optionally write a JSON file.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Consolidate Mesh

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Consolidate Mesh](/mp-command-catalog/commands/cloud-and-mesh-operations#consolidate-mesh) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#consolidate-mesh)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface ConsolidateMeshInput {
  readonly mesh: CollectionObjectName;
}

function consolidateMesh(
  briosa: BriosaClient,
  input: ConsolidateMeshInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await consolidateMesh(briosa, { mesh: ... });
```

Consolidates the selected scan-stripe mesh.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Mesh Volume

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Mesh Volume](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-volume) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#mesh-volume)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |
| `plane` | `CollectionObjectName` | `Plane` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `above` | `number` | `Above` |
| `below` | `number` | `Below` |

```ts
export interface MeshVolumeResult {
  readonly above: number;
  readonly below: number;
}

export interface MeshVolumeInput {
  readonly mesh: CollectionObjectName;
  readonly plane: CollectionObjectName;
}

function meshVolume(
  briosa: BriosaClient,
  input: MeshVolumeInput,
  options?: BriosaCallOptions,
): Promise<MeshVolumeResult>;
```

```ts
await meshVolume(briosa, { mesh: ..., plane: ... });
```

Returns the mesh volume above and below the selected plane.

Returns all 2 MP outputs in the detached readonly `MeshVolumeResult` value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.

## Mesh Fill Holes

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Mesh Fill Holes](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-fill-holes) · [gRPC contract](/api/grpc/0.5.1/cloud-and-mesh-operations#mesh-fill-holes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |
| `maximumTriangleLength` | `number` | `Maximum Triangle Length` | -1.000000 |
| `tension` | `number` | `Tension` | 0.000000 |
| `unconditionalFilling` | `boolean` | `Unconditional Filling?` | false |
| `fillAllHoles` | `boolean` | `Fill All Holes?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```ts
export interface MeshFillHolesInput {
  readonly mesh: CollectionObjectName;
  readonly maximumTriangleLength?: number;
  readonly tension?: number;
  readonly unconditionalFilling?: boolean;
  readonly fillAllHoles?: boolean;
}

function meshFillHoles(
  briosa: BriosaClient,
  input: MeshFillHolesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await meshFillHoles(briosa, { mesh: ... });
```

Fills holes in the selected mesh. Briosa keeps Fill All Holes true by default so the command does not open an interactive hole-selection dialog.

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and contains only caller controls such as an `AbortSignal`.
