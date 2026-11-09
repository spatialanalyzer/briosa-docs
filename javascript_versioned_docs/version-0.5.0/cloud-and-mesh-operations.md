---
title: Cloud and Mesh Operations
description: Released javascript 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Cloud and Mesh Operations

[SA 2026.1.0529.7](/api/javascript/cloud-and-mesh-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/cloud-and-mesh-operations)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. A method that takes `BriosaCallOptions` can pass `onMpCompletion` to observe how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Cloud Display Control {/* #cloud-display-control */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#cloud-display-control) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#cloud-display-control)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface CloudDisplayControlInput {
  readonly thin?: number;
  readonly pointSize?: number;
}

export declare function cloudDisplayControl(
  briosa: BriosaClient,
  input?: CloudDisplayControlInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `thin` | MP qualifier: Draw Increment. |

## Reset Cloud Bounding Box {/* #reset-cloud-bounding-box */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#reset-cloud-bounding-box) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#reset-cloud-bounding-box)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ResetCloudBoundingBoxInput {
  readonly cloudName: CollectionObjectName;
  readonly cloudBoxType?: CloudBoxType;
  readonly showBoundingBox?: boolean;
  readonly useAllPoints?: boolean;
  readonly desiredPointCount?: number;
}

export declare function resetCloudBoundingBox(
  briosa: BriosaClient,
  input: ResetCloudBoundingBoxInput,
  options?: BriosaCallOptions,
): Promise<ResetCloudBoundingBoxResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cloud Point Count {/* #get-cloud-point-count */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-point-count) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#get-cloud-point-count)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface GetCloudPointCountInput {
  readonly cloudName: CollectionObjectName;
}

export declare function getCloudPointCount(
  briosa: BriosaClient,
  input: GetCloudPointCountInput,
  options?: BriosaCallOptions,
): Promise<GetCloudPointCountResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cloud Default Clipping Plane {/* #set-cloud-default-clipping-plane */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#set-cloud-default-clipping-plane) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#set-cloud-default-clipping-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetCloudDefaultClippingPlaneInput {
  readonly enableCloudClipping?: boolean;
  readonly referenceObject?: CollectionObjectName;
}

export declare function setCloudDefaultClippingPlane(
  briosa: BriosaClient,
  input?: SetCloudDefaultClippingPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Raster Scan Edge Inspection {/* #raster-scan-edge-inspection */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#raster-scan-edge-inspection) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#raster-scan-edge-inspection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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

export declare function rasterScanEdgeInspection(
  briosa: BriosaClient,
  input: RasterScanEdgeInspectionInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## New Raster Scan Edge Inspection {/* #new-raster-scan-edge-inspection */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#new-raster-scan-edge-inspection) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#new-raster-scan-edge-inspection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

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

export declare function newRasterScanEdgeInspection(
  briosa: BriosaClient,
  input: NewRasterScanEdgeInspectionInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Cloud Point Deviations {/* #clear-cloud-point-deviations */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#clear-cloud-point-deviations) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#clear-cloud-point-deviations)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface ClearCloudPointDeviationsInput {
  readonly cloudName: CollectionObjectName;
}

export declare function clearCloudPointDeviations(
  briosa: BriosaClient,
  input: ClearCloudPointDeviationsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable All Cloud Cross Sections {/* #enable-all-cloud-cross-sections */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#enable-all-cloud-cross-sections)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface EnableAllCloudCrossSectionsInput {
  readonly crossSectionCloudName: CollectionObjectName;
}

export declare function enableAllCloudCrossSections(
  briosa: BriosaClient,
  input: EnableAllCloudCrossSectionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Cloud Cross Sections {/* #enabledisable-cloud-cross-sections */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#enabledisable-cloud-cross-sections)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface EnableDisableCloudCrossSectionsInput {
  readonly crossSectionCloudName: CollectionObjectName;
  readonly crossSectionId?: number;
  readonly enable?: boolean;
}

export declare function enableDisableCloudCrossSections(
  briosa: BriosaClient,
  input: EnableDisableCloudCrossSectionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable Single Cloud Cross Section {/* #enable-single-cloud-cross-section */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#enable-single-cloud-cross-section)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface EnableSingleCloudCrossSectionInput {
  readonly crossSectionCloudName: CollectionObjectName;
  readonly crossSectionId?: number;
}

export declare function enableSingleCloudCrossSection(
  briosa: BriosaClient,
  input: EnableSingleCloudCrossSectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Cross Sections in Cross Section Cloud {/* #get-number-of-cross-sections-in-cross-section-cloud */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface GetNumberOfCrossSectionsInCrossSectionCloudInput {
  readonly crossSectionCloudName: CollectionObjectName;
}

export declare function getNumberOfCrossSectionsInCrossSectionCloud(
  briosa: BriosaClient,
  input: GetNumberOfCrossSectionsInCrossSectionCloudInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Plane {/* #filter-clouds-to-plane */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-plane) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface FilterCloudsToPlaneInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterPlaneName: CollectionObjectName;
  readonly outputGroupName: CollectionObjectName;
  readonly proximity?: number;
  readonly allowableOffsetDirection?: OffsetDirectionType;
  readonly outputType?: PointOutputType;
}

export declare function filterCloudsToPlane(
  briosa: BriosaClient,
  input: FilterCloudsToPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Group {/* #filter-clouds-to-group */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-group) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface FilterCloudsToGroupInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterGroupName: CollectionObjectName;
  readonly outputGroupName: CollectionObjectName;
  readonly proximity?: number;
  readonly maximumNumberOfPoints?: number;
  readonly outputType?: PointOutputType;
}

export declare function filterCloudsToGroup(
  briosa: BriosaClient,
  input: FilterCloudsToGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Surface {/* #filter-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-surface) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-surface)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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

export declare function filterCloudsToSurface(
  briosa: BriosaClient,
  input: FilterCloudsToSurfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to BSplines {/* #filter-clouds-to-bsplines */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-bsplines) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-bsplines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface FilterCloudsToBSplinesInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterBSplineNames: Iterable<CollectionObjectName>;
  readonly outputGroupName: CollectionObjectName;
  readonly minimumProximity?: number;
  readonly maximumProximity?: number;
  readonly outputType?: PointOutputType;
}

export declare function filterCloudsToBSplines(
  briosa: BriosaClient,
  input: FilterCloudsToBSplinesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Line Segment {/* #filter-clouds-to-line-segment */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-line-segment) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-line-segment)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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

export declare function filterCloudsToLineSegment(
  briosa: BriosaClient,
  input: FilterCloudsToLineSegmentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Vector Groups - Resolve points {/* #filter-clouds-to-vector-groups---resolve-points */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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

export declare function filterCloudsToVectorGroupsResolvePoints(
  briosa: BriosaClient,
  input: FilterCloudsToVectorGroupsResolvePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Vector Groups - Resolve Clouds {/* #filter-clouds-to-vector-groups---resolve-clouds */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface FilterCloudsToVectorGroupsResolveCloudsInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly vectorGroupNames: Iterable<CollectionObjectName>;
  readonly radialCutoff?: number;
  readonly lowerCutoff?: number;
  readonly upperCutoff?: number;
  readonly outputCollectionName: string;
}

export declare function filterCloudsToVectorGroupsResolveClouds(
  briosa: BriosaClient,
  input: FilterCloudsToVectorGroupsResolveCloudsInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## RGB Cloud Point Filter {/* #rgb-cloud-point-filter */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#rgb-cloud-point-filter) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#rgb-cloud-point-filter)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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

export declare function rgbCloudPointFilter(
  briosa: BriosaClient,
  input: RGBCloudPointFilterInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cloud RGB Values {/* #get-cloud-rgb-values */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#get-cloud-rgb-values)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface GetCloudRGBValuesInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly rgbColorChannel?: RGBColorChannel;
}

export declare function getCloudRGBValues(
  briosa: BriosaClient,
  input: GetCloudRGBValuesInput,
  options?: BriosaCallOptions,
): Promise<GetCloudRGBValuesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cloud RGB Values Near Point {/* #get-cloud-rgb-values-near-point */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values-near-point) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#get-cloud-rgb-values-near-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface GetCloudRGBValuesNearPointInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly singlePoint: PointName;
  readonly diameter?: number;
  readonly rgbColorChannel?: RGBColorChannel;
}

export declare function getCloudRGBValuesNearPoint(
  briosa: BriosaClient,
  input: GetCloudRGBValuesNearPointInput,
  options?: BriosaCallOptions,
): Promise<GetCloudRGBValuesNearPointResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Subdivide Cloud by Point Spacing {/* #subdivide-cloud-by-point-spacing */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SubdivideCloudByPointSpacingInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly pointSpacing?: number;
  readonly minimumPointsPerGroup?: number;
  readonly newCloudName: CollectionObjectName;
  readonly keepAllGroups?: boolean;
}

export declare function subdivideCloudByPointSpacing(
  briosa: BriosaClient,
  input: SubdivideCloudByPointSpacingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Cloud Points by Radial Distance from Points {/* #delete-cloud-points-by-radial-distance-from-points */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface DeleteCloudPointsByRadialDistanceFromPointsInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly points: Iterable<PointName>;
  readonly radius?: number;
  readonly deleteInside?: boolean;
}

export declare function deleteCloudPointsByRadialDistanceFromPoints(
  briosa: BriosaClient,
  input: DeleteCloudPointsByRadialDistanceFromPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Cloud Points by X Y Z Range {/* #delete-cloud-points-by-x-y-z-range */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range)

Client 0.5.0 removed this method with behavioral contract major 3. With bounds set, SpatialAnalyzer returned MP code -1 on both exact targets and deleted no points. No X Y Z box delete replaces it. Delete Cloud Points by Radial Distance from Points deletes by distance from points instead; its semantics differ, and it has no licensed validation yet. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Generate General Mesh {/* #generate-general-mesh */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#generate-general-mesh) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#generate-general-mesh)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `long_running`

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

export declare function generateGeneralMesh(
  briosa: BriosaClient,
  input: GenerateGeneralMeshInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Consolidate Mesh {/* #consolidate-mesh */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#consolidate-mesh) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#consolidate-mesh)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConsolidateMeshInput {
  readonly mesh: CollectionObjectName;
}

export declare function consolidateMesh(
  briosa: BriosaClient,
  input: ConsolidateMeshInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Mesh Volume {/* #mesh-volume */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-volume) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#mesh-volume)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface MeshVolumeInput {
  readonly mesh: CollectionObjectName;
  readonly plane: CollectionObjectName;
}

export declare function meshVolume(
  briosa: BriosaClient,
  input: MeshVolumeInput,
  options?: BriosaCallOptions,
): Promise<MeshVolumeResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Mesh Fill Holes {/* #mesh-fill-holes */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-fill-holes) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#mesh-fill-holes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `fillAllHoles` to false also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface MeshFillHolesInput {
  readonly mesh: CollectionObjectName;
  readonly maximumTriangleLength?: number;
  readonly tension?: number;
  readonly unconditionalFilling?: boolean;
  readonly fillAllHoles?: boolean;
}

export declare function meshFillHoles(
  briosa: BriosaClient,
  input: MeshFillHolesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7)
