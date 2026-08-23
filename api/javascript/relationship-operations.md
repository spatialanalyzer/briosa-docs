---
title: Relationship Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Relationship Operations MP commands.
toc_max_heading_level: 2
---

# Relationship Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Wave B Root-Group Types

```ts
export type GeometryRelationshipPointEditMode =
  | "Point List"
  | "Point Graph"
  | "Sub-Sampler Settings";

export interface GeometryRelationshipOutlierFilterMetrics {
  readonly firstPassRmsError: number;
  readonly firstPassMaximumError: number;
  readonly firstPassMinimumError: number;
  readonly firstPassAverageError: number;
  readonly finalPassRmsError: number;
  readonly finalPassMaximumError: number;
  readonly finalPassMinimumError: number;
  readonly finalPassAverageError: number;
  readonly totalInputPointCount: number;
  readonly excludePointCount: number;
}

export interface RelationshipWatchWindowUdpSettings {
  readonly enabled?: boolean;
  readonly broadcast?: boolean;
  readonly ipAddress?: string;
  readonly port?: number;
}

export interface RelationshipWatchWindowTemplateOptions {
  readonly linearPrecision?: number;
  readonly angularPrecision?: number;
  readonly font?: Font;
  readonly textColor?: Color;
  readonly backgroundColor?: Color;
  readonly highlightColor?: Color;
  readonly showDeviationXRx?: boolean;
  readonly showDeviationYRy?: boolean;
  readonly showDeviationZRz?: boolean;
  readonly showDeviationMagnitude?: boolean;
  readonly udpNetworkTransmitSettings?: RelationshipWatchWindowUdpSettings;
  readonly transparentBackground?: boolean;
  readonly hideUnits?: boolean;
}
```

The watch-window defaults are linear precision `4`, angular precision `3`, the
default MP font, blue text, white background, red highlight, all four deviation
values visible, UDP disabled with broadcast enabled and port `10000`, an opaque
background, and visible units.

## Generate Geometry Relationship Summary

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary) · [gRPC contract](/api/grpc/relationship-operations#generate-geometry-relationship-summary)

```ts
export interface GenerateGeometryRelationshipSummaryInput {
  readonly relationshipRefList: Iterable<CollectionItemName>;
  readonly summaryTableName?: string;
}

function generateGeometryRelationshipSummary(
  briosa: BriosaClient,
  input: GenerateGeometryRelationshipSummaryInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`summaryTableName` defaults to `"Geometry Relationship Summary"`.

## Edit Geometry Relationship Point List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list) · [gRPC contract](/api/grpc/relationship-operations#edit-geometry-relationship-point-list)

```ts
export interface EditGeometryRelationshipPointListInput {
  readonly relationshipName: CollectionObjectName;
  readonly pointEditMode?: GeometryRelationshipPointEditMode;
}

function editGeometryRelationshipPointList(
  briosa: BriosaClient,
  input: EditGeometryRelationshipPointListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The mode defaults to `"Point List"`. This operation opens an SA dialog; aborting
the client call does not prove that the interaction stopped.

## Filter Geometry Relationship Outlier Cloud Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [gRPC contract](/api/grpc/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

```ts
export interface FilterGeometryRelationshipOutlierCloudPointsInput {
  readonly relationshipName: CollectionObjectName;
  readonly sigmaThreshold?: number;
  readonly modifyExistingInputClouds?: boolean;
}

function filterGeometryRelationshipOutlierCloudPoints(
  briosa: BriosaClient,
  input: FilterGeometryRelationshipOutlierCloudPointsInput,
  options?: BriosaCallOptions,
): Promise<GeometryRelationshipOutlierFilterMetrics>;
```

The threshold defaults to `3`, cloud mutation defaults to `false`, and the
result preserves all ten exact MP outputs.

## Relationship Watch Window Template

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template) · [gRPC contract](/api/grpc/relationship-operations#relationship-watch-window-template)

```ts
export interface RelationshipWatchWindowTemplateInput {
  readonly watchWindowTemplateName?: CollectionObjectName;
  readonly options?: RelationshipWatchWindowTemplateOptions;
}

function relationshipWatchWindowTemplate(
  briosa: BriosaClient,
  input?: RelationshipWatchWindowTemplateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting `input` applies every exact MP default, including the empty object in
the `Relationship Template` collection.

## Make Point to Point Relationship

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-point-to-point-relationship)

```ts
export interface MakePointToPointRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstPointName: PointName;
  readonly secondPointName: PointName;
  readonly tolerance?: ToleranceVectorOptions;
  readonly constraint?: ToleranceVectorOptions;
}

function makePointToPointRelationship(
  briosa: BriosaClient,
  input: MakePointToPointRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted option values use the distinct exact MP tolerance and constraint
defaults. Briosa adds no point or constraint preflight.

## Make Frame to Frame Relationship

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-frame-to-frame-relationship)

```ts
export interface MakeFrameToFrameRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstFrameName: CollectionObjectName;
  readonly secondFrameName: CollectionObjectName;
  readonly orientationTolerance?: ToleranceScalarOptions;
  readonly positionTolerance?: ToleranceVectorOptions;
}

function makeFrameToFrameRelationship(
  briosa: BriosaClient,
  input: MakeFrameToFrameRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted tolerances use the exact all-limits-disabled zero defaults. These
functions retain no Relationship state and never automatically replay uncertain
work.

## Enable/Disable Relationships for Optimization

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Enable/Disable Relationships for Optimization](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) · [gRPC contract](/api/grpc/relationship-operations#enabledisable-relationships-for-optimization)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `Iterable<CollectionItemName>` | `Relationships` | Required |
| `enable` | `boolean` | `Enable?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface EnableDisableRelationshipsForOptimizationInput {
  readonly relationships: Iterable<CollectionItemName>;
  readonly enable?: boolean;
}

function enableDisableRelationshipsForOptimization(
  briosa: BriosaClient,
  input: EnableDisableRelationshipsForOptimizationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await enableDisableRelationshipsForOptimization(briosa, { relationships: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Dynamic Relationship Types

```ts
export type DynamicPointMode =
  | "Intersection of Line and Plane"
  | "Intersection of Cylinder and Plane"
  | "Intersection of Cone and Plane"
  | "Intersection of Three Planes"
  | "Mid-Point of Perpendicular to Two Lines";

export type DynamicLineMode =
  | "Cone Axis"
  | "Cylinder Axis"
  | "Intersection of Two Planes"
  | "Bisect Two Lines"
  | "Slot Centerline Along Length";

export type DynamicPlaneMode =
  | "Bisect Two Planes"
  | "Two Cones Intersection - Hold Normal to Best-Fit Plane"
  | "Two Cones Intersection - Hold Normal to First Cone Axis"
  | "Two Cones Intersection - Hold Normal to Second Cone Axis"
  | "Cone and Cylinder Intersection - Hold Normal to Best-Fit Plane"
  | "Cone and Cylinder Intersection - Hold Normal to Cone Axis"
  | "Cone and Cylinder Intersection - Hold Normal to Cylinder Axis"
  | "Offset Plane From Plane";

export type DynamicCircleMode =
  | "Cylinder and Plane Intersection - Hold Plane Normal"
  | "Cylinder and Plane Intersection - Hold Cylinder Axis"
  | "Cone and Plane Intersection - Hold Plane Normal"
  | "Cone and Plane Intersection - Hold Cone Axis"
  | "Sphere and Plane Intersection"
  | "Two Cones Intersection"
  | "Cone and Cylinder Intersection";

export type DynamicEllipseMode =
  | "Cylinder and Plane Intersection"
  | "Cone and Plane Intersection";
```

The TypeScript value uses the correctly spelled first-cone-axis label and maps
to SA's exact misspelled SDK literal internally.

## Make Points to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-points-to-objects-relationship)

```ts
export interface MakePointsToObjectsRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly pointsInRelationship: Iterable<PointName>;
  readonly objectsInRelationship: Iterable<CollectionObjectName>;
  readonly projectionOptions?: ProjectionOptions;
  readonly autoUpdateAVectorGroup?: boolean;
}
function makePointsToObjectsRelationship(
  briosa: BriosaClient,
  input: MakePointsToObjectsRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted projection options use `Object To Probe Vectors` with all projection
controls disabled; auto-update defaults to `false`.

## Make Points to Points Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-points-to-points-relationship)

```ts
export interface MakePointsToPointsRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly nominalPoints: Iterable<PointName>;
  readonly measuredPoints: Iterable<PointName>;
  readonly autoUpdateAVectorGroup?: boolean;
  readonly tolerance?: ToleranceVectorOptions;
  readonly constraint?: ToleranceVectorOptions;
}
function makePointsToPointsRelationship(
  briosa: BriosaClient,
  input: MakePointsToPointsRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted tolerance and constraint values use their distinct exact MP defaults.

## Make Groups to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-groups-to-objects-relationship)

```ts
export interface MakeGroupsToObjectsRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly pointGroupsInRelationship: Iterable<CollectionObjectName>;
  readonly objectsInRelationship: Iterable<CollectionObjectName>;
  readonly projectionOptions?: ProjectionOptions;
  readonly autoUpdateAVectorGroup?: boolean;
}
function makeGroupsToObjectsRelationship(
  briosa: BriosaClient,
  input: MakeGroupsToObjectsRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make Object to Object Direction Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-object-to-object-direction-relationship)

```ts
export interface MakeObjectToObjectDirectionRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstObjectInRelationship: CollectionObjectName;
  readonly secondObjectInRelationship: CollectionObjectName;
  readonly nominalAngle?: number;
}
function makeObjectToObjectDirectionRelationship(
  briosa: BriosaClient,
  input: MakeObjectToObjectDirectionRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`nominalAngle` defaults to `0`.

## Make Point Clouds to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-point-clouds-to-objects-relationship)

```ts
export interface MakePointCloudsToObjectsRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly pointCloudsInRelationship: Iterable<CollectionObjectName>;
  readonly objectsInRelationship: Iterable<CollectionObjectName>;
  readonly projectionOptions?: ProjectionOptions;
  readonly autoUpdateAVectorGroup?: boolean;
}
function makePointCloudsToObjectsRelationship(
  briosa: BriosaClient,
  input: MakePointCloudsToObjectsRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make Group to Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-group-to-group-relationship)

```ts
export interface MakeGroupToGroupRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstGroupName: CollectionObjectName;
  readonly secondGroupName: CollectionObjectName;
  readonly autoUpdateAVectorGroup?: boolean;
  readonly tolerance?: ToleranceVectorOptions;
  readonly constraint?: ToleranceVectorOptions;
}
function makeGroupToGroupRelationship(
  briosa: BriosaClient,
  input: MakeGroupToGroupRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make Group to Nominal Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-group-to-nominal-group-relationship)

```ts
export interface MakeGroupToNominalGroupRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly nominalGroupName: CollectionObjectName;
  readonly measuredGroupName: CollectionObjectName;
  readonly autoUpdateAVectorGroup?: boolean;
  readonly useClosestPoint?: boolean;
  readonly displayClosestPointWatchWindow?: boolean;
  readonly useViewZoomingWithProximity?: boolean;
  readonly ignorePointsBeyondThreshold?: boolean;
  readonly proximityThreshold?: number;
  readonly tolerance?: ToleranceVectorOptions;
  readonly constraint?: ToleranceVectorOptions;
  readonly fitWeight?: number;
}
function makeGroupToNominalGroupRelationship(
  briosa: BriosaClient,
  input: MakeGroupToNominalGroupRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The exact defaults are auto-update `false`, closest-point matching `true`, the
three display and threshold controls `false`, threshold `0.01`, and fit weight
`1`.

## Make Average Point Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-average-point-relationship)

```ts
export interface MakeAveragePointRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly pointsInRelationship: Iterable<PointName>;
  readonly averagePointName?: PointName;
  readonly nominalPointName?: PointName;
}
function makeAveragePointRelationship(
  briosa: BriosaClient,
  input: MakeAveragePointRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make Geometry Fit Only Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-geometry-fit-only-relationship)

```ts
export interface MakeGeometryFitOnlyRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly pointGroupsToFit: Iterable<CollectionObjectName>;
  readonly geometryType: GeometryType;
  readonly resultingObjectName?: CollectionObjectName;
  readonly fitProfileName?: string;
}
function makeGeometryFitOnlyRelationship(
  briosa: BriosaClient,
  input: MakeGeometryFitOnlyRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make Geometry Fit and Compare to Nominal Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

```ts
export interface MakeGeometryFitAndCompareToNominalRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly nominalGeometry: CollectionObjectName;
  readonly pointGroupsToFit: Iterable<CollectionObjectName>;
  readonly resultingObjectName?: CollectionObjectName;
  readonly fitProfileName?: string;
}
function makeGeometryFitAndCompareToNominalRelationship(
  briosa: BriosaClient,
  input: MakeGeometryFitAndCompareToNominalRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

MP partial success remains distinct in Briosa's execution outcome. These
functions retain no Relationship state and never replay uncertain work.

## Relationship Fit and Statistics Types

```ts
export type SolverMode =
  | "Gauss-Newton"
  | "Levenberg-Marquardt"
  | "Gauss-Newton /w Gradient Search"
  | "Direct Search";

export interface FitDofOptions {
  readonly allowX?: boolean;
  readonly allowY?: boolean;
  readonly allowZ?: boolean;
  readonly allowRx?: boolean;
  readonly allowRy?: boolean;
  readonly allowRz?: boolean;
  readonly rotateAboutCentroid?: boolean;
}

export interface RelationshipFitResult {
  readonly transformInReference: Transform;
  readonly transformInWorking: WorldTransform;
  readonly transformInWorld: WorldTransform;
  readonly fitObjectiveValue: number;
}

export interface GeneralRelationshipStatistics {
  readonly absoluteMaxDeviation: number;
  readonly rms: number;
  readonly hasSignedDeviation: boolean;
  readonly signedMaxDeviation: number;
  readonly signedMinDeviation: number;
}

export interface PointsToObjectsRelationshipStatistics {
  readonly absoluteMaxDeviation: number;
  readonly maxDeviation: number;
  readonly minDeviation: number;
  readonly avgDeviation: number;
  readonly rms: number;
  readonly candidatePointCount: number;
  readonly sampledPointCount: number;
  readonly rejectedPointCount: number;
  readonly usedPointCount: number;
  readonly outOfTolerancePointCount: number;
}

export interface PointToPointRelationshipStatistics {
  readonly deltaX: number;
  readonly deltaY: number;
  readonly deltaZ: number;
  readonly deltaMagnitude: number;
  readonly referenceFrame: CollectionObjectName;
}
```

`WorldTransform` preserves the scale returned with each working/world matrix.

## Make Geometry Compare Only Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-geometry-compare-only-relationship)

```ts
export interface MakeGeometryCompareOnlyRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly nominalGeometry: CollectionObjectName;
  readonly measuredGeometry: CollectionObjectName;
}
function makeGeometryCompareOnlyRelationship(
  briosa: BriosaClient,
  input: MakeGeometryCompareOnlyRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make Dynamic Point Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-point-relationship)

```ts
export interface MakeDynamicPointRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicPointMode;
  readonly thirdReferenceGeometry?: CollectionObjectName;
}
function makeDynamicPointRelationship(
  briosa: BriosaClient,
  input: MakeDynamicPointRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The mode defaults to line/Plane intersection. The third reference is optional
unless the selected construction mode needs it.

## Make Dynamic Line Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-line-relationship)

```ts
export interface MakeDynamicLineRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicLineMode;
}
function makeDynamicLineRelationship(
  briosa: BriosaClient,
  input: MakeDynamicLineRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The mode defaults to `"Intersection of Two Planes"`.

## Make Dynamic Plane Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-plane-relationship)

```ts
export interface MakeDynamicPlaneRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicPlaneMode;
  readonly offsetPlaneOffset?: number;
}
function makeDynamicPlaneRelationship(
  briosa: BriosaClient,
  input: MakeDynamicPlaneRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The mode defaults to `"Bisect Two Planes"` and the offset defaults to `0`.

## Make Dynamic Circle Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-circle-relationship)

```ts
export interface MakeDynamicCircleRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicCircleMode;
}
function makeDynamicCircleRelationship(
  briosa: BriosaClient,
  input: MakeDynamicCircleRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make Dynamic Ellipse Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-ellipse-relationship)

```ts
export interface MakeDynamicEllipseRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicEllipseMode;
}
function makeDynamicEllipseRelationship(
  briosa: BriosaClient,
  input: MakeDynamicEllipseRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Make Vector Group To Vector Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-vector-group-to-vector-group-relationship)

```ts
export interface MakeVectorGroupToVectorGroupRelationshipInput {
  readonly newVgToVgRelationship: CollectionObjectName;
  readonly referenceVectorGroup: CollectionObjectName;
  readonly correspondingVectorGroup: CollectionObjectName;
  readonly setOpposingVectorGroupPolarity?: boolean;
}
function makeVectorGroupToVectorGroupRelationship(
  briosa: BriosaClient,
  input: MakeVectorGroupToVectorGroupRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Opposing polarity defaults to `true`.

## Set Vector Group To Vector Group Cylindrical Zone

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [gRPC contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

```ts
export interface SetVectorGroupToVectorGroupCylindricalZoneInput {
  readonly vgToVgRelationship: CollectionObjectName;
  readonly radialOffset?: number;
  readonly minimumAxialOffset?: number;
  readonly maximumAxialOffset?: number;
}
function setVectorGroupToVectorGroupCylindricalZone(
  briosa: BriosaClient,
  input: SetVectorGroupToVectorGroupCylindricalZoneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The offsets default to `1`, `-10`, and `10`.

## Set Vector Group To Vector Group Fit Weights

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [gRPC contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-weights)

```ts
export interface SetVectorGroupToVectorGroupFitWeightsInput {
  readonly vgToVgRelationship: CollectionObjectName;
  readonly minimumGap?: number;
  readonly minimumGapFitWeight?: number;
  readonly maximumGap?: number;
  readonly maximumGapFitWeight?: number;
  readonly nominalGap?: number;
  readonly nominalGapFitWeight?: number;
}
function setVectorGroupToVectorGroupFitWeights(
  briosa: BriosaClient,
  input: SetVectorGroupToVectorGroupFitWeightsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The gap defaults are `0`; minimum and maximum weights default to `10`, and the
nominal weight defaults to `1`.

## Set Vector Group To Vector Group Fit Gradient Factor

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [gRPC contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

```ts
export interface SetVectorGroupToVectorGroupFitGradientFactorInput {
  readonly vgToVgRelationship: CollectionObjectName;
  readonly fitGradientFactor?: number;
}
function setVectorGroupToVectorGroupFitGradientFactor(
  briosa: BriosaClient,
  input: SetVectorGroupToVectorGroupFitGradientFactorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The factor defaults to `50`. These functions retain no Relationship state and
never replay uncertain work.

## Set Vector Group To Vector Group Relative Polarity

```ts
export interface SetVectorGroupToVectorGroupRelativePolarityInput {
  readonly vgToVgRelationship: CollectionObjectName;
  readonly setOpposingVectorGroupPolarity?: boolean;
}
function setVectorGroupToVectorGroupRelativePolarity(
  briosa: BriosaClient,
  input: SetVectorGroupToVectorGroupRelativePolarityInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Delete Relationship

```ts
export interface DeleteRelationshipInput {
  readonly relationshipName: CollectionObjectName;
}
function deleteRelationship(
  briosa: BriosaClient,
  input: DeleteRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The client adds no confirmation prompt.

## Set Optimization Search Options

```ts
export interface SetOptimizationSearchOptionsInput {
  readonly maxNumberOfStepSizeReduction?: number;
}
function setOptimizationSearchOptions(
  briosa: BriosaClient,
  input?: SetOptimizationSearchOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The exact default is `5`.

## Set Optimization Perturbation Parameters

```ts
export interface SetOptimizationPerturbationParametersInput {
  readonly lengthPerturbation?: number;
  readonly angularPerturbation?: number;
  readonly damping?: number;
}
function setOptimizationPerturbationParameters(
  briosa: BriosaClient,
  input?: SetOptimizationPerturbationParametersInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Defaults are `0.0001`, `0.0001`, and `1`.

## Do Relationship Fit

[MP command](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) · [gRPC contract](/api/grpc/relationship-operations#do-relationship-fit)

```ts
export interface DoRelationshipFitInput {
  readonly collectionContainingRelationships: string;
  readonly objectsToMove: Iterable<CollectionObjectName>;
  readonly instrumentsToMove: Iterable<CollectionInstrumentId>;
  readonly solverMode?: SolverMode;
  readonly motionToAllow?: FitDofOptions;
  readonly enableRandomizedStart?: boolean;
  readonly useFitDialog?: boolean;
}
function doRelationshipFit(
  briosa: BriosaClient,
  input: DoRelationshipFitInput,
  options?: BriosaCallOptions,
): Promise<RelationshipFitResult>;
```

Use an empty iterable for either move category that is not used. All motion is
allowed about the centroid by default; randomized start and the dialog default
to `false`.

## Move Collections by Minimizing Relationships

```ts
export interface MoveCollectionsByMinimizingRelationshipsInput {
  readonly collectionsToMove: Iterable<string>;
  readonly relationshipsToMinimize: Iterable<CollectionObjectName>;
  readonly solverMode?: SolverMode;
  readonly motionToAllow?: FitDofOptions;
  readonly useFitDialog?: boolean;
  readonly convergenceThreshold?: number;
}
function moveCollectionsByMinimizingRelationships(
  briosa: BriosaClient,
  input: MoveCollectionsByMinimizingRelationshipsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The convergence threshold defaults to the exact SA 2026.1 value of `0`.

## Get General Relationship Statistics

```ts
export interface GetGeneralRelationshipStatisticsInput {
  readonly relationshipName: CollectionObjectName;
}
function getGeneralRelationshipStatistics(
  briosa: BriosaClient,
  input: GetGeneralRelationshipStatisticsInput,
  options?: BriosaCallOptions,
): Promise<GeneralRelationshipStatistics>;
```

## Get Points to Objects Relationship Statistics

```ts
export interface GetPointsToObjectsRelationshipStatisticsInput {
  readonly relationshipName: CollectionObjectName;
}
function getPointsToObjectsRelationshipStatistics(
  briosa: BriosaClient,
  input: GetPointsToObjectsRelationshipStatisticsInput,
  options?: BriosaCallOptions,
): Promise<PointsToObjectsRelationshipStatistics>;
```

The result includes SA 2026.1's `avgDeviation` output.

## Start/Stop Relationship Trapping

```ts
export interface StartStopRelationshipTrappingInput {
  readonly relationshipName: CollectionObjectName;
  readonly instrumentId: CollectionInstrumentId;
  readonly startTrapping?: boolean;
}
function startStopRelationshipTrapping(
  briosa: BriosaClient,
  input: StartStopRelationshipTrappingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Get Point to Point Relationship Statistics

```ts
export interface GetPointToPointRelationshipStatisticsInput {
  readonly relationshipName: CollectionObjectName;
}
function getPointToPointRelationshipStatistics(
  briosa: BriosaClient,
  input: GetPointToPointRelationshipStatisticsInput,
  options?: BriosaCallOptions,
): Promise<PointToPointRelationshipStatistics>;
```

These functions retain no Relationship or optimizer state and never replay
uncertain work.

## Associated-Data and Auto-Filter Types

```ts
export interface FilterProximitySettings {
  readonly surfaceInclusionProximity?: number;
  readonly edgeExclusionProximity?: number;
  readonly planarInclusionProximity?: number;
  readonly planarExclusionProximity?: number;
  readonly radialInclusionProximity?: number;
  readonly geometryExtractionTolerance?: number;
  readonly surfaceProximityMode?: OffsetDirectionType;
  readonly planarProximityMode?: OffsetDirectionType;
  readonly radialProximityMode?: OffsetDirectionType;
  readonly projectToPlane?: boolean;
  readonly assertPlaneBoundaries?: boolean;
}

export interface RelationshipAssociatedData {
  readonly relationshipType: string;
  readonly individualPoints: readonly PointName[];
  readonly pointGroups: readonly CollectionObjectName[];
  readonly pointClouds: readonly CollectionObjectName[];
  readonly objects: readonly CollectionObjectName[];
}

export interface PointsToPointsRelationshipAssociatedData {
  readonly nominalPoints: readonly PointName[];
  readonly actualPoints: readonly PointName[];
}
```

An empty `FilterProximitySettings` uses the exact defaults `0.1`, `0.1`, `0.5`,
`0.1`, `0.1`, `0.01`, `"Both"` for all modes, `true`, and `false`. It replaces
the excluded MP-only construction helper. `CloudThinningOptions` is shared with
Construction Operations / Point Clouds.

## Set Group To Nominal Group View Zooming

[MP command](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming) · [gRPC contract](/api/grpc/relationship-operations#set-group-to-nominal-group-view-zooming)

```ts
export interface SetGroupToNominalGroupViewZoomingInput {
  readonly relationshipName: CollectionObjectName;
  readonly useClosestPoint?: boolean;
  readonly showClosestPointWatchWindow?: boolean;
  readonly useViewZooming?: boolean;
  readonly ignorePointsBeyondThreshold?: boolean;
  readonly proximityThreshold?: number;
}
function setGroupToNominalGroupViewZooming(
  briosa: BriosaClient,
  input: SetGroupToNominalGroupViewZoomingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The five defaults are `true`, `false`, `true`, `true`, and `0.01`.

## Set Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-associated-data)

```ts
export interface SetRelationshipAssociatedDataInput {
  readonly relationshipName: CollectionItemName;
  readonly individualPoints?: Iterable<PointName>;
  readonly pointGroups?: Iterable<CollectionObjectName>;
  readonly pointClouds?: Iterable<CollectionObjectName>;
  readonly objects?: Iterable<CollectionObjectName>;
  readonly ignoreEmptyArguments?: boolean;
}
function setRelationshipAssociatedData(
  briosa: BriosaClient,
  input: SetRelationshipAssociatedDataInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

An omitted collection does not call that exact SDK setter. An empty iterable
remains a supplied collection. `ignoreEmptyArguments` defaults to `true`.

## Get Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-associated-data)

```ts
export interface GetRelationshipAssociatedDataInput {
  readonly relationshipName: CollectionItemName;
}
function getRelationshipAssociatedData(
  briosa: BriosaClient,
  input: GetRelationshipAssociatedDataInput,
  options?: BriosaCallOptions,
): Promise<RelationshipAssociatedData>;
```

## Set Points to Points Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data) · [gRPC contract](/api/grpc/relationship-operations#set-points-to-points-relationship-associated-data)

```ts
export interface SetPointsToPointsRelationshipAssociatedDataInput {
  readonly relationshipName: CollectionItemName;
  readonly nominalPoints?: Iterable<PointName>;
  readonly actualPoints?: Iterable<PointName>;
  readonly ignoreEmptyArguments?: boolean;
}
function setPointsToPointsRelationshipAssociatedData(
  briosa: BriosaClient,
  input: SetPointsToPointsRelationshipAssociatedDataInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Get Points to Points Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data) · [gRPC contract](/api/grpc/relationship-operations#get-points-to-points-relationship-associated-data)

```ts
export interface GetPointsToPointsRelationshipAssociatedDataInput {
  readonly relationshipName: CollectionItemName;
}
function getPointsToPointsRelationshipAssociatedData(
  briosa: BriosaClient,
  input: GetPointsToPointsRelationshipAssociatedDataInput,
  options?: BriosaCallOptions,
): Promise<PointsToPointsRelationshipAssociatedData>;
```

## Auto Filter Clouds to Nominal Geometry 3D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [gRPC contract](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

```ts
export interface AutoFilterCloudsToNominalGeometry3DInput {
  readonly autoFilterTargetRelationships: Iterable<CollectionItemName>;
  readonly clouds: Iterable<CollectionObjectName>;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly filterProximitySettings3D?: FilterProximitySettings;
  readonly useFeatureSpecificFilterSettings?: boolean;
}
function autoFilterCloudsToNominalGeometry3D(
  briosa: BriosaClient,
  input: AutoFilterCloudsToNominalGeometry3DInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Auto Filter Clouds to Nominal Geometry 2D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [gRPC contract](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

```ts
export interface AutoFilterCloudsToNominalGeometry2DInput {
  readonly autoFilterTargetRelationships: Iterable<CollectionItemName>;
  readonly clouds: Iterable<CollectionObjectName>;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly filterProximitySettings2D?: FilterProximitySettings;
  readonly geometryExtractionTolerance?: number;
  readonly useFeatureSpecificFilterSettings?: boolean;
}
function autoFilterCloudsToNominalGeometry2D(
  briosa: BriosaClient,
  input: AutoFilterCloudsToNominalGeometry2DInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The tolerance defaults to `0.01`; the SA 2026.1 feature-specific flag defaults
to `false`.

## Auto Filter Points to Nominal Geometry 3D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [gRPC contract](/api/grpc/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

```ts
export interface AutoFilterPointsToNominalGeometry3DInput {
  readonly autoFilterTargetRelationships: Iterable<CollectionItemName>;
  readonly points: Iterable<PointName>;
  readonly filterProximitySettings3D?: FilterProximitySettings;
}
function autoFilterPointsToNominalGeometry3D(
  briosa: BriosaClient,
  input: AutoFilterPointsToNominalGeometry3DInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Auto Filter Points/Groups/Clouds to Surface Faces

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [gRPC contract](/api/grpc/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

```ts
export interface AutoFilterPointsGroupsCloudsToSurfaceFacesInput {
  readonly points?: Iterable<PointName>;
  readonly groups?: Iterable<CollectionObjectName>;
  readonly clouds?: Iterable<CollectionObjectName>;
  readonly surfaceOffset?: number;
  readonly edgeOffset?: number;
  readonly offsetDirection?: OffsetDirectionType;
  readonly enforceMaxPointsPerFaceInOutput?: boolean;
  readonly maxPointsPerFace?: number;
  readonly surfaces: Iterable<CollectionObjectName>;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly outputCloudBaseName?: string;
  readonly useFaceIdsForSuffix?: boolean;
}
function autoFilterPointsGroupsCloudsToSurfaceFaces(
  briosa: BriosaClient,
  input: AutoFilterPointsGroupsCloudsToSurfaceFacesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Defaults are the exact MP offsets, direction, thinning settings, base name,
and suffix behavior. These functions retain no SA state and never replay
uncertain work.

## Extract Geometry From Point Clouds

[MP command](/mp-command-catalog/commands/relationship-operations#extract-geometry-from-point-clouds) · [gRPC contract](/api/grpc/relationship-operations#extract-geometry-from-point-clouds)

```ts
export interface ExtractGeometryFromPointCloudsInput {
  readonly relationshipName: CollectionItemName;
  readonly geometryType?: GeometryType;
  readonly cloudName: CollectionObjectName;
  readonly boundingPoints?: Iterable<PointName>;
  readonly seedPoints: Iterable<PointName>;
  readonly tolerance?: number;
  readonly reverseNormal?: boolean;
  readonly planarPointCount?: number;
}
function extractGeometryFromPointClouds(
  briosa: BriosaClient,
  input: ExtractGeometryFromPointCloudsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Defaults are `"Circle"`, `0.1`, `false`, and `1000`. This SA 2026.1 operation
has no ObjectiveSA SA 2024.1 counterpart.

## Create Points to Objects Map

[MP command](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map) · [gRPC contract](/api/grpc/relationship-operations#create-points-to-objects-map)

```ts
export interface CreatePointsToObjectsMapInput {
  readonly points?: Iterable<PointName>;
  readonly groups?: Iterable<CollectionObjectName>;
  readonly objects: Iterable<CollectionObjectName>;
  readonly proximityTolerance?: number;
  readonly pointsToObjectsMapName: string;
}
function createPointsToObjectsMap(
  briosa: BriosaClient,
  input: CreatePointsToObjectsMapInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The tolerance defaults to `0`. SA owns the named map; the client keeps no map
registry or intermediate workflow state.

## Get Objects From Points to Objects Map (Point List)

[MP command](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [gRPC contract](/api/grpc/relationship-operations#get-objects-from-points-to-objects-map-point-list)

```ts
export interface GetObjectsFromPointsToObjectsMapPointListInput {
  readonly pointsToObjectsMapName: string;
  readonly points: Iterable<PointName>;
}
function getObjectsFromPointsToObjectsMapPointList(
  briosa: BriosaClient,
  input: GetObjectsFromPointsToObjectsMapPointListInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

The function follows the exact SA 2026.1 Point-list binding.

## Compute Geometry Relationship Uncertainties

[MP command](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties) · [gRPC contract](/api/grpc/relationship-operations#compute-geometry-relationship-uncertainties)

```ts
export interface ComputeGeometryRelationshipUncertaintiesInput {
  readonly relationshipName: CollectionItemName;
  readonly displayResults?: boolean;
}
function computeGeometryRelationshipUncertainties(
  briosa: BriosaClient,
  input: ComputeGeometryRelationshipUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`displayResults` defaults to `false`. SA may make the Relationship dormant.

## Make Cloud to Swatch Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-cloud-to-swatch-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-cloud-to-swatch-relationship)

```ts
export interface MakeCloudToSwatchRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly inputCloudName: CollectionObjectName;
  readonly surfaceFaceList: string;
  readonly referencePoint: PointName;
  readonly maximumRadialOffset?: number;
  readonly minimumAxialOffset?: number;
  readonly maximumAxialOffset?: number;
  readonly cardinalPointGroupName: CollectionObjectName;
}
function makeCloudToSwatchRelationship(
  briosa: BriosaClient,
  input: MakeCloudToSwatchRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The offsets default to `0.125`, `-0.125`, and `0.125`. The function has no
ObjectiveSA parity, adds no Swatch preflight, and never automatically replays
uncertain work.

## Final Reconciled Subgroup Types

```ts
export interface SigmoidalGapFitConstraints {
  readonly useSigmoidalGapConstraints: boolean;
  readonly minimumGapBoundary: number;
  readonly minimumGapWeight: number;
  readonly maximumGapBoundary: number;
  readonly maximumGapWeight: number;
  readonly nominalGap: number;
  readonly nominalGapWeight: number;
  readonly gradientSteepnessFactor: number;
}

export interface RelationshipStatusFlags {
  readonly dormant: boolean;
  readonly success: boolean;
  readonly measured: boolean;
  readonly failed: boolean;
  readonly unmeasured: boolean;
}
```

## Get Relationship Sigmoidal Gap Fit Constraints

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints)

```ts
export interface GetRelationshipSigmoidalGapFitConstraintsInput {
  readonly relationshipName: CollectionItemName;
}
function getRelationshipSigmoidalGapFitConstraints(
  briosa: BriosaClient,
  input: GetRelationshipSigmoidalGapFitConstraintsInput,
  options?: BriosaCallOptions,
): Promise<SigmoidalGapFitConstraints>;
```

## Set Object to Object Direction Relationship Tolerances

[MP command](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [gRPC contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-tolerances)

```ts
export interface SetObjectToObjectDirectionRelationshipTolerancesInput {
  readonly relationshipName: CollectionItemName;
  readonly angleBetweenVectorsTolerances?: ToleranceScalarOptions;
  readonly mutualPerpendicularLengthTolerances?: ToleranceScalarOptions;
}
function setObjectToObjectDirectionRelationshipTolerances(
  briosa: BriosaClient,
  input: SetObjectToObjectDirectionRelationshipTolerancesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted tolerance values use the exact all-limits-disabled zero defaults.

## Get Geom Relationship Criteria Name List

[MP command](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-criteria-name-list)

```ts
export interface GetGeomRelationshipCriteriaNameListInput {
  readonly relationshipName: CollectionItemName;
  readonly includeAllCriteria?: boolean;
}
function getGeomRelationshipCriteriaNameList(
  briosa: BriosaClient,
  input: GetGeomRelationshipCriteriaNameListInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

## Get Relationship Status

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-status) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-status)

```ts
export interface GetRelationshipStatusInput {
  readonly relationshipName: CollectionItemName;
}
function getRelationshipStatus(
  briosa: BriosaClient,
  input: GetRelationshipStatusInput,
  options?: BriosaCallOptions,
): Promise<RelationshipStatusFlags>;
```

All five raw SA flags are returned without an invented client status enum.
These functions retain no Relationship state and never replay uncertain work.

## Geom Relationship Ignore Input Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Geom Relationship Ignore Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC contract](/api/grpc/relationship-operations#geom-relationship-ignore-input-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface GeomRelationshipIgnoreInputPointsInput {
  readonly relationshipName: CollectionItemName;
}

function geomRelationshipIgnoreInputPoints(
  briosa: BriosaClient,
  input: GeomRelationshipIgnoreInputPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await geomRelationshipIgnoreInputPoints(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Geom Relationship Reuse Ignored Input Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Geom Relationship Reuse Ignored Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) · [gRPC contract](/api/grpc/relationship-operations#geom-relationship-reuse-ignored-input-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface GeomRelationshipReuseIgnoredInputPointsInput {
  readonly relationshipName: CollectionItemName;
}

function geomRelationshipReuseIgnoredInputPoints(
  briosa: BriosaClient,
  input: GeomRelationshipReuseIgnoredInputPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await geomRelationshipReuseIgnoredInputPoints(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Auto Vectors

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Auto Vectors](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-auto-vectors)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `autoVectorsNominalAvnEnabled` | `boolean` | `Auto Vectors Nominal (AVN) - Enabled?` |
| `autoVectorsNominalAvnName` | `CollectionObjectName` | `Auto Vectors Nominal (AVN) - Name` |
| `autoVectorsFitAvfEnabled` | `boolean` | `Auto Vectors Fit (AVF) - Enabled?` |
| `autoVectorsFitAvfName` | `CollectionObjectName` | `Auto Vectors Fit (AVF) - Name` |
| `pointsType` | `string` | `Points Type` |

```ts
export interface GetGeomRelationshipAutoVectorsResult {
  readonly autoVectorsNominalAvnEnabled: boolean;
  readonly autoVectorsNominalAvnName: CollectionObjectName;
  readonly autoVectorsFitAvfEnabled: boolean;
  readonly autoVectorsFitAvfName: CollectionObjectName;
  readonly pointsType: string;
}

export interface GetGeomRelationshipAutoVectorsInput {
  readonly relationshipName: CollectionItemName;
}

function getGeomRelationshipAutoVectors(
  briosa: BriosaClient,
  input: GetGeomRelationshipAutoVectorsInput,
  options?: BriosaCallOptions,
): Promise<GetGeomRelationshipAutoVectorsResult>;
```

```ts
await getGeomRelationshipAutoVectors(briosa, { relationshipName: ... });
```

Returns the 5 MP outputs in the named `GetGeomRelationshipAutoVectorsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Cardinal Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-cardinal-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `cardinalPointNameList` | `readonly PointName[]` | `Cardinal Point Name List` |

```ts
export interface GetGeomRelationshipCardinalPointsInput {
  readonly relationshipName: CollectionItemName;
}

function getGeomRelationshipCardinalPoints(
  briosa: BriosaClient,
  input: GetGeomRelationshipCardinalPointsInput,
  options?: BriosaCallOptions,
): Promise<readonly PointName[]>;
```

```ts
await getGeomRelationshipCardinalPoints(briosa, { relationshipName: ... });
```

Returns the MP output `Cardinal Point Name List` directly as `readonly PointName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Criteria

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-criteria)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `criteria` | `string` | `Criteria` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `nominal` | `number` | `Nominal` |
| `measured` | `number` | `Measured` |
| `delta` | `number` | `Delta` |
| `lowTolerance` | `number` | `Low Tolerance` |
| `highTolerance` | `number` | `High Tolerance` |
| `optimizationDeltaWeight` | `number` | `Optimization: Delta Weight` |
| `optimizationOutOfToleranceWeight` | `number` | `Optimization: Out of Tolerance Weight` |
| `isWithinTolerance` | `string` | `Is within Tolerance?` |
| `hasUncertainty` | `boolean` | `Has Uncertainty?` |
| `uncertainty` | `number` | `Uncertainty` |

```ts
export interface GetGeomRelationshipCriteriaResult {
  readonly nominal: number;
  readonly measured: number;
  readonly delta: number;
  readonly lowTolerance: number;
  readonly highTolerance: number;
  readonly optimizationDeltaWeight: number;
  readonly optimizationOutOfToleranceWeight: number;
  readonly isWithinTolerance: string;
  readonly hasUncertainty: boolean;
  readonly uncertainty: number;
}

export interface GetGeomRelationshipCriteriaInput {
  readonly relationshipName: CollectionItemName;
  readonly criteria?: string;
}

function getGeomRelationshipCriteria(
  briosa: BriosaClient,
  input: GetGeomRelationshipCriteriaInput,
  options?: BriosaCallOptions,
): Promise<GetGeomRelationshipCriteriaResult>;
```

```ts
await getGeomRelationshipCriteria(briosa, { relationshipName: ... });
```

Returns the 10 MP outputs in the named `GetGeomRelationshipCriteriaResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Measured Avg Point

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Measured Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-measured-avg-point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `measuredAveragePoint` | `PointName` | `Measured Average Point` |

```ts
export interface GetGeomRelationshipMeasuredAvgPointInput {
  readonly relationshipName: CollectionItemName;
}

function getGeomRelationshipMeasuredAvgPoint(
  briosa: BriosaClient,
  input: GetGeomRelationshipMeasuredAvgPointInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

```ts
await getGeomRelationshipMeasuredAvgPoint(briosa, { relationshipName: ... });
```

Returns the MP output `Measured Average Point` directly as `PointName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Measured Geometry

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-measured-geometry)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `measuredGeometry` | `CollectionObjectName` | `Measured Geometry` |

```ts
export interface GetGeomRelationshipMeasuredGeometryInput {
  readonly relationshipName: CollectionItemName;
}

function getGeomRelationshipMeasuredGeometry(
  briosa: BriosaClient,
  input: GetGeomRelationshipMeasuredGeometryInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

```ts
await getGeomRelationshipMeasuredGeometry(briosa, { relationshipName: ... });
```

Returns the MP output `Measured Geometry` directly as `CollectionObjectName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Nominal Avg Point

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-avg-point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `nominalAveragePoint` | `PointName` | `Nominal Average Point` |

```ts
export interface GetGeomRelationshipNominalAvgPointInput {
  readonly relationshipName: CollectionItemName;
}

function getGeomRelationshipNominalAvgPoint(
  briosa: BriosaClient,
  input: GetGeomRelationshipNominalAvgPointInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

```ts
await getGeomRelationshipNominalAvgPoint(briosa, { relationshipName: ... });
```

Returns the MP output `Nominal Average Point` directly as `PointName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Nominal Geometry

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-geometry)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `nominalGeometry` | `CollectionObjectName` | `Nominal Geometry` |

```ts
export interface GetGeomRelationshipNominalGeometryInput {
  readonly relationshipName: CollectionItemName;
}

function getGeomRelationshipNominalGeometry(
  briosa: BriosaClient,
  input: GetGeomRelationshipNominalGeometryInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

```ts
await getGeomRelationshipNominalGeometry(briosa, { relationshipName: ... });
```

Returns the MP output `Nominal Geometry` directly as `CollectionObjectName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Point List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Point List](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-point-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `allPoints` | `readonly PointName[]` | `All Points` |
| `usedPoints` | `readonly PointName[]` | `Used Points` |
| `ignoredPoints` | `readonly PointName[]` | `Ignored Points` |

```ts
export interface GetGeomRelationshipPointListResult {
  readonly allPoints: readonly PointName[];
  readonly usedPoints: readonly PointName[];
  readonly ignoredPoints: readonly PointName[];
}

export interface GetGeomRelationshipPointListInput {
  readonly relationshipName: CollectionItemName;
}

function getGeomRelationshipPointList(
  briosa: BriosaClient,
  input: GetGeomRelationshipPointListInput,
  options?: BriosaCallOptions,
): Promise<GetGeomRelationshipPointListResult>;
```

```ts
await getGeomRelationshipPointList(briosa, { relationshipName: ... });
```

Returns the 3 MP outputs in the named `GetGeomRelationshipPointListResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Geom Relationship Projection Plane

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-projection-plane)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `projectionPlaneName` | `CollectionObjectName` | `Projection Plane Name` |

```ts
export interface GetGeomRelationshipProjectionPlaneInput {
  readonly relationshipName: CollectionItemName;
}

function getGeomRelationshipProjectionPlane(
  briosa: BriosaClient,
  input: GetGeomRelationshipProjectionPlaneInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

```ts
await getGeomRelationshipProjectionPlane(briosa, { relationshipName: ... });
```

Returns the MP output `Projection Plane Name` directly as `CollectionObjectName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Pipe Relationship Cut Status

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Pipe Relationship Cut Status](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-cut-status)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `pipe1CutAvailable` | `boolean` | `Pipe 1 - Cut Available?` |
| `pipe1CutActive` | `boolean` | `Pipe 1 - Cut Active?` |
| `pipe2CutAvailable` | `boolean` | `Pipe 2 - Cut Available?` |
| `pipe2CutActive` | `boolean` | `Pipe 2 - Cut Active?` |

```ts
export interface GetPipeRelationshipCutStatusResult {
  readonly pipe1CutAvailable: boolean;
  readonly pipe1CutActive: boolean;
  readonly pipe2CutAvailable: boolean;
  readonly pipe2CutActive: boolean;
}

export interface GetPipeRelationshipCutStatusInput {
  readonly relationshipName: CollectionItemName;
}

function getPipeRelationshipCutStatus(
  briosa: BriosaClient,
  input: GetPipeRelationshipCutStatusInput,
  options?: BriosaCallOptions,
): Promise<GetPipeRelationshipCutStatusResult>;
```

```ts
await getPipeRelationshipCutStatus(briosa, { relationshipName: ... });
```

Returns the 4 MP outputs in the named `GetPipeRelationshipCutStatusResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Pipe Relationship Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Pipe Relationship Properties](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `pipe1ObjectName` | `CollectionObjectName` | `Pipe 1 - Object Name` |
| `pipe1InnerDiameter` | `number` | `Pipe 1 - Inner Diameter` |
| `pipe1OuterDiameter` | `number` | `Pipe 1 - Outer Diameter` |
| `pipe1CutBegin` | `number` | `Pipe 1 - Cut Begin` |
| `pipe1CutEnd` | `number` | `Pipe 1 - Cut End` |
| `pipe2ObjectName` | `CollectionObjectName` | `Pipe 2 - Object Name` |
| `pipe2InnerDiameter` | `number` | `Pipe 2 - Inner Diameter` |
| `pipe2OuterDiameter` | `number` | `Pipe 2 - Outer Diameter` |
| `pipe2CutBegin` | `number` | `Pipe 2 - Cut Begin` |
| `pipe2CutEnd` | `number` | `Pipe 2 - Cut End` |

```ts
export interface GetPipeRelationshipPropertiesResult {
  readonly pipe1ObjectName: CollectionObjectName;
  readonly pipe1InnerDiameter: number;
  readonly pipe1OuterDiameter: number;
  readonly pipe1CutBegin: number;
  readonly pipe1CutEnd: number;
  readonly pipe2ObjectName: CollectionObjectName;
  readonly pipe2InnerDiameter: number;
  readonly pipe2OuterDiameter: number;
  readonly pipe2CutBegin: number;
  readonly pipe2CutEnd: number;
}

export interface GetPipeRelationshipPropertiesInput {
  readonly relationshipName: CollectionItemName;
}

function getPipeRelationshipProperties(
  briosa: BriosaClient,
  input: GetPipeRelationshipPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetPipeRelationshipPropertiesResult>;
```

```ts
await getPipeRelationshipProperties(briosa, { relationshipName: ... });
```

Returns the 10 MP outputs in the named `GetPipeRelationshipPropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Pipe Relationship Weights

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-weights)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `overallWeight` | `number` | `Overall Weight` |
| `axisOffset` | `number` | `Axis Offset` |
| `axisAlignment` | `number` | `Axis Alignment` |
| `centerPull` | `number` | `Center Pull` |
| `outOfMaterialWeight` | `number` | `Out of material - Weight` |
| `outOfMaterialStaticOffset` | `number` | `Out of material - Static Offset` |
| `constrainRegionAtOd` | `boolean` | `Constrain Region at OD` |
| `constrainIdOdOverlap` | `boolean` | `Constrain ID/OD overlap` |

```ts
export interface GetPipeRelationshipWeightsResult {
  readonly overallWeight: number;
  readonly axisOffset: number;
  readonly axisAlignment: number;
  readonly centerPull: number;
  readonly outOfMaterialWeight: number;
  readonly outOfMaterialStaticOffset: number;
  readonly constrainRegionAtOd: boolean;
  readonly constrainIdOdOverlap: boolean;
}

export interface GetPipeRelationshipWeightsInput {
  readonly relationshipName: CollectionItemName;
}

function getPipeRelationshipWeights(
  briosa: BriosaClient,
  input: GetPipeRelationshipWeightsInput,
  options?: BriosaCallOptions,
): Promise<GetPipeRelationshipWeightsResult>;
```

```ts
await getPipeRelationshipWeights(briosa, { relationshipName: ... });
```

Returns the 8 MP outputs in the named `GetPipeRelationshipWeightsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Fit Constraints (Scalar Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-fit-constraints-scalar-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `useHighTolerance` | `boolean` | `Use High Tolerance?` |
| `highTolerance` | `number` | `High Tolerance` |
| `useLowTolerance` | `boolean` | `Use Low Tolerance?` |
| `lowTolerance` | `number` | `Low Tolerance` |
| `fitConstraintOptions` | `FitConstraintScalarOptions` | `Fit Constraint Options` |

```ts
export interface GetRelationshipFitConstraintsScalarTypeResult {
  readonly useHighTolerance: boolean;
  readonly highTolerance: number;
  readonly useLowTolerance: boolean;
  readonly lowTolerance: number;
  readonly fitConstraintOptions: FitConstraintScalarOptions;
}

export interface GetRelationshipFitConstraintsScalarTypeInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipFitConstraintsScalarType(
  briosa: BriosaClient,
  input: GetRelationshipFitConstraintsScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipFitConstraintsScalarTypeResult>;
```

```ts
await getRelationshipFitConstraintsScalarType(briosa, { relationshipName: ... });
```

Returns the 5 MP outputs in the named `GetRelationshipFitConstraintsScalarTypeResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Outlier Rejection (Scalar Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-outlier-rejection-scalar-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `useHighLimit` | `boolean` | `Use High Limit?` |
| `highLimit` | `number` | `High Limit` |
| `useLowLimit` | `boolean` | `Use Low Limit?` |
| `lowLimit` | `number` | `Low Limit` |

```ts
export interface GetRelationshipOutlierRejectionScalarTypeResult {
  readonly useHighLimit: boolean;
  readonly highLimit: number;
  readonly useLowLimit: boolean;
  readonly lowLimit: number;
}

export interface GetRelationshipOutlierRejectionScalarTypeInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipOutlierRejectionScalarType(
  briosa: BriosaClient,
  input: GetRelationshipOutlierRejectionScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipOutlierRejectionScalarTypeResult>;
```

```ts
await getRelationshipOutlierRejectionScalarType(briosa, { relationshipName: ... });
```

Returns the 4 MP outputs in the named `GetRelationshipOutlierRejectionScalarTypeResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Projection Options

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-projection-options)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `ignoreEdgeProjections` | `boolean` | `Ignore Edge Projections?` |
| `probeOffsetsOverrideTargetValues` | `boolean` | `Probe Offsets - Override Target Values?` |
| `probeOffsetsOverrideValue` | `number` | `Probe Offsets - Override Value` |
| `addExtraMaterial` | `boolean` | `Add Extra Material?` |
| `extraMaterialThickness` | `number` | `Extra Material Thickness` |

```ts
export interface GetRelationshipProjectionOptionsResult {
  readonly ignoreEdgeProjections: boolean;
  readonly probeOffsetsOverrideTargetValues: boolean;
  readonly probeOffsetsOverrideValue: number;
  readonly addExtraMaterial: boolean;
  readonly extraMaterialThickness: number;
}

export interface GetRelationshipProjectionOptionsInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipProjectionOptions(
  briosa: BriosaClient,
  input: GetRelationshipProjectionOptionsInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipProjectionOptionsResult>;
```

```ts
await getRelationshipProjectionOptions(briosa, { relationshipName: ... });
```

Returns the 5 MP outputs in the named `GetRelationshipProjectionOptionsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Reporting Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-reporting-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` |

```ts
export interface GetRelationshipReportingFrameInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipReportingFrame(
  briosa: BriosaClient,
  input: GetRelationshipReportingFrameInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

```ts
await getRelationshipReportingFrame(briosa, { relationshipName: ... });
```

Returns the MP output `Reporting Frame` directly as `CollectionObjectName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Sub Sampling Options

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-sub-sampling-options)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `useEveryIthPoint` | `boolean` | `Use every i-th point` |
| `iValue` | `number` | `i value` |
| `useNoMoreThanNPoints` | `boolean` | `Use no more than n points` |
| `nValue` | `number` | `n value` |

```ts
export interface GetRelationshipSubSamplingOptionsResult {
  readonly useEveryIthPoint: boolean;
  readonly iValue: number;
  readonly useNoMoreThanNPoints: boolean;
  readonly nValue: number;
}

export interface GetRelationshipSubSamplingOptionsInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipSubSamplingOptions(
  briosa: BriosaClient,
  input: GetRelationshipSubSamplingOptionsInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipSubSamplingOptionsResult>;
```

```ts
await getRelationshipSubSamplingOptions(briosa, { relationshipName: ... });
```

Returns the 4 MP outputs in the named `GetRelationshipSubSamplingOptionsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Tolerance (Scalar Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-tolerance-scalar-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `useHighTolerance` | `boolean` | `Use High Tolerance?` |
| `highTolerance` | `number` | `High Tolerance` |
| `useLowTolerance` | `boolean` | `Use Low Tolerance?` |
| `lowTolerance` | `number` | `Low Tolerance` |
| `toleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` |

```ts
export interface GetRelationshipToleranceScalarTypeResult {
  readonly useHighTolerance: boolean;
  readonly highTolerance: number;
  readonly useLowTolerance: boolean;
  readonly lowTolerance: number;
  readonly toleranceOptions: ToleranceScalarOptions;
}

export interface GetRelationshipToleranceScalarTypeInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipToleranceScalarType(
  briosa: BriosaClient,
  input: GetRelationshipToleranceScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipToleranceScalarTypeResult>;
```

```ts
await getRelationshipToleranceScalarType(briosa, { relationshipName: ... });
```

Returns the 5 MP outputs in the named `GetRelationshipToleranceScalarTypeResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Tolerance (Vector Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-tolerance-vector-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `useHighXTolerance` | `boolean` | `Use High X Tolerance?` |
| `highXTolerance` | `number` | `High X Tolerance` |
| `useHighYTolerance` | `boolean` | `Use High Y Tolerance?` |
| `highYTolerance` | `number` | `High Y Tolerance` |
| `useHighZTolerance` | `boolean` | `Use High Z Tolerance?` |
| `highZTolerance` | `number` | `High Z Tolerance` |
| `useHighMagTolerance` | `boolean` | `Use High Mag Tolerance?` |
| `highMagTolerance` | `number` | `High Mag Tolerance` |
| `useLowXTolerance` | `boolean` | `Use Low X Tolerance?` |
| `lowXTolerance` | `number` | `Low X Tolerance` |
| `useLowYTolerance` | `boolean` | `Use Low Y Tolerance?` |
| `lowYTolerance` | `number` | `Low Y Tolerance` |
| `useLowZTolerance` | `boolean` | `Use Low Z Tolerance?` |
| `lowZTolerance` | `number` | `Low Z Tolerance` |
| `useLowMagTolerance` | `boolean` | `Use Low Mag Tolerance?` |
| `lowMagTolerance` | `number` | `Low Mag Tolerance` |
| `vectorTolerance` | `ToleranceVectorOptions` | `Vector Tolerance` |

```ts
export interface GetRelationshipToleranceVectorTypeResult {
  readonly useHighXTolerance: boolean;
  readonly highXTolerance: number;
  readonly useHighYTolerance: boolean;
  readonly highYTolerance: number;
  readonly useHighZTolerance: boolean;
  readonly highZTolerance: number;
  readonly useHighMagTolerance: boolean;
  readonly highMagTolerance: number;
  readonly useLowXTolerance: boolean;
  readonly lowXTolerance: number;
  readonly useLowYTolerance: boolean;
  readonly lowYTolerance: number;
  readonly useLowZTolerance: boolean;
  readonly lowZTolerance: number;
  readonly useLowMagTolerance: boolean;
  readonly lowMagTolerance: number;
  readonly vectorTolerance: ToleranceVectorOptions;
}

export interface GetRelationshipToleranceVectorTypeInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipToleranceVectorType(
  briosa: BriosaClient,
  input: GetRelationshipToleranceVectorTypeInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipToleranceVectorTypeResult>;
```

```ts
await getRelationshipToleranceVectorType(briosa, { relationshipName: ... });
```

Returns the 17 MP outputs in the named `GetRelationshipToleranceVectorTypeResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Type

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Type](/mp-command-catalog/commands/relationship-operations#get-relationship-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `relationshipType` | `string` | `Relationship Type` |

```ts
export interface GetRelationshipTypeInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipType(
  briosa: BriosaClient,
  input: GetRelationshipTypeInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await getRelationshipType(briosa, { relationshipName: ... });
```

Returns the MP output `Relationship Type` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Weighting

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Weighting](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-weighting)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `weight` | `number` | `Weight` |

```ts
export interface GetRelationshipWeightingInput {
  readonly relationshipName: CollectionItemName;
}

function getRelationshipWeighting(
  briosa: BriosaClient,
  input: GetRelationshipWeightingInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getRelationshipWeighting(briosa, { relationshipName: ... });
```

Returns the MP output `Weight` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Pipe Fitting Relationship

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Pipe Fitting Relationship](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-pipe-fitting-relationship)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `pipe1ObjectName` | `CollectionObjectName` | `Pipe 1 - Object Name` | Required |
| `pipe2ObjectName` | `CollectionObjectName` | `Pipe 2 - Object Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakePipeFittingRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly pipe1ObjectName: CollectionObjectName;
  readonly pipe2ObjectName: CollectionObjectName;
}

function makePipeFittingRelationship(
  briosa: BriosaClient,
  input: MakePipeFittingRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makePipeFittingRelationship(briosa, { relationshipName: ..., pipe1ObjectName: ..., pipe2ObjectName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Pipe Relationship Cut

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Pipe Relationship Cut](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC contract](/api/grpc/relationship-operations#make-pipe-relationship-cut)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `pipe1MakeCut` | `boolean` | `Pipe 1 - Make Cut` | true |
| `pipe1CreateFrame` | `boolean` | `Pipe 1 - Create Frame` | false |
| `pipe1FrameName` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe2MakeCut` | `boolean` | `Pipe 2 - Make Cut` | true |
| `pipe2CreateFrame` | `boolean` | `Pipe 2 - Create Frame` | false |
| `pipe2FrameName` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakePipeRelationshipCutInput {
  readonly relationshipName: CollectionItemName;
  readonly pipe1MakeCut?: boolean;
  readonly pipe1CreateFrame?: boolean;
  readonly pipe1FrameName: CollectionObjectName;
  readonly pipe2MakeCut?: boolean;
  readonly pipe2CreateFrame?: boolean;
  readonly pipe2FrameName: CollectionObjectName;
}

function makePipeRelationshipCut(
  briosa: BriosaClient,
  input: MakePipeRelationshipCutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makePipeRelationshipCut(briosa, { relationshipName: ..., pipe1FrameName: ..., pipe2FrameName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Pipe Relationship Force Cut to Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Pipe Relationship Force Cut to Frame](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) · [gRPC contract](/api/grpc/relationship-operations#pipe-relationship-force-cut-to-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `pipe1ForceCutToFrame` | `boolean` | `Pipe 1 - Force Cut to Frame?` | true |
| `pipe1FrameName` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe2ForceCutToFrame` | `boolean` | `Pipe 2 - Force Cut to Frame?` | true |
| `pipe2FrameName` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface PipeRelationshipForceCutToFrameInput {
  readonly relationshipName: CollectionItemName;
  readonly pipe1ForceCutToFrame?: boolean;
  readonly pipe1FrameName: CollectionObjectName;
  readonly pipe2ForceCutToFrame?: boolean;
  readonly pipe2FrameName: CollectionObjectName;
}

function pipeRelationshipForceCutToFrame(
  briosa: BriosaClient,
  input: PipeRelationshipForceCutToFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await pipeRelationshipForceCutToFrame(briosa, { relationshipName: ..., pipe1FrameName: ..., pipe2FrameName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geom Relationship Auto Measure Nominal Feature

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geom Relationship Auto Measure Nominal Feature](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-auto-measure-nominal-feature)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `trapCloudsFalseGeometry` | `boolean` | `Trap Clouds? (FALSE = Geometry)` | true |
| `instrumentId` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `measurementMode` | `string` | `Measurement Mode` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipAutoMeasureNominalFeatureInput {
  readonly relationshipName: CollectionItemName;
  readonly trapCloudsFalseGeometry?: boolean;
  readonly instrumentId: CollectionInstrumentId;
  readonly measurementMode?: string;
}

function setGeomRelationshipAutoMeasureNominalFeature(
  briosa: BriosaClient,
  input: SetGeomRelationshipAutoMeasureNominalFeatureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeomRelationshipAutoMeasureNominalFeature(briosa, { relationshipName: ..., instrumentId: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geom Relationship Auto Vectors Nominal (AVN)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geom Relationship Auto Vectors Nominal (AVN)](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `createAutoVectorsAvn` | `boolean` | `Create Auto Vectors AVN` | false |
| `pointsType` | `PointFilterInputType` | `Points Type` | Cardinal Points |
| `useVectorGroupCustomPrefix` | `boolean` | `Use Vector Group Custom Prefix?` | false |
| `vectorGroupCustomPrefix` | `string` | `Vector Group Custom Prefix` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipAutoVectorsNominalAvnInput {
  readonly relationshipName: CollectionItemName;
  readonly createAutoVectorsAvn?: boolean;
  readonly pointsType?: PointFilterInputType;
  readonly useVectorGroupCustomPrefix?: boolean;
  readonly vectorGroupCustomPrefix?: string;
}

function setGeomRelationshipAutoVectorsNominalAvn(
  briosa: BriosaClient,
  input: SetGeomRelationshipAutoVectorsNominalAvnInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeomRelationshipAutoVectorsNominalAvn(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geom Relationship Cardinal Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-cardinal-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `createCardinalPtsWhenFitting` | `boolean` | `Create Cardinal Pts when Fitting?` | true |
| `prefixCardinalPtsNameWithRelName` | `boolean` | `Prefix Cardinal Pts name with Rel name?` | true |
| `cardinalPtsGroupName` | `string` | `Cardinal Pts Group Name` | GR-Cardinal Pts |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipCardinalPointsInput {
  readonly relationshipName: CollectionItemName;
  readonly createCardinalPtsWhenFitting?: boolean;
  readonly prefixCardinalPtsNameWithRelName?: boolean;
  readonly cardinalPtsGroupName?: string;
}

function setGeomRelationshipCardinalPoints(
  briosa: BriosaClient,
  input: SetGeomRelationshipCardinalPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeomRelationshipCardinalPoints(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geom Relationship Criteria

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-criteria)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `criteria` | `string` | `Criteria` | Empty |
| `showInReport` | `boolean` | `Show in Report` | true |
| `toleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |
| `optimizationDeltaWeight` | `number` | `Optimization: Delta Weight` | 0.000000 |
| `optimizationOutOfToleranceWeight` | `number` | `Optimization: Out of Tolerance Weight` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipCriteriaInput {
  readonly relationshipName: CollectionItemName;
  readonly criteria?: string;
  readonly showInReport?: boolean;
  readonly toleranceOptions?: ToleranceScalarOptions;
  readonly optimizationDeltaWeight?: number;
  readonly optimizationOutOfToleranceWeight?: number;
}

function setGeomRelationshipCriteria(
  briosa: BriosaClient,
  input: SetGeomRelationshipCriteriaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeomRelationshipCriteria(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geom Relationship Measured Geometry

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-measured-geometry)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `measuredGeometry` | `CollectionObjectName` | `Measured Geometry` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipMeasuredGeometryInput {
  readonly relationshipName: CollectionItemName;
  readonly measuredGeometry: CollectionObjectName;
}

function setGeomRelationshipMeasuredGeometry(
  briosa: BriosaClient,
  input: SetGeomRelationshipMeasuredGeometryInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeomRelationshipMeasuredGeometry(briosa, { relationshipName: ..., measuredGeometry: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geom Relationship Nominal Avg Point

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-avg-point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `compareToNominal` | `boolean` | `Compare To Nominal?` | true |
| `nominalAveragePoint` | `PointName` | `Nominal Average Point` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipNominalAvgPointInput {
  readonly relationshipName: CollectionItemName;
  readonly compareToNominal?: boolean;
  readonly nominalAveragePoint: PointName;
}

function setGeomRelationshipNominalAvgPoint(
  briosa: BriosaClient,
  input: SetGeomRelationshipNominalAvgPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeomRelationshipNominalAvgPoint(briosa, { relationshipName: ..., nominalAveragePoint: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geom Relationship Nominal Geometry

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-geometry)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `compareToNominal` | `boolean` | `Compare To Nominal?` | true |
| `nominalGeometry` | `CollectionObjectName` | `Nominal Geometry` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipNominalGeometryInput {
  readonly relationshipName: CollectionItemName;
  readonly compareToNominal?: boolean;
  readonly nominalGeometry: CollectionObjectName;
}

function setGeomRelationshipNominalGeometry(
  briosa: BriosaClient,
  input: SetGeomRelationshipNominalGeometryInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeomRelationshipNominalGeometry(briosa, { relationshipName: ..., nominalGeometry: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geom Relationship Projection Plane

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-projection-plane)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `projectToPlane` | `boolean` | `Project to Plane?` | true |
| `projectionPlaneName` | `CollectionObjectName` | `Projection Plane Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipProjectionPlaneInput {
  readonly relationshipName: CollectionItemName;
  readonly projectToPlane?: boolean;
  readonly projectionPlaneName: CollectionObjectName;
}

function setGeomRelationshipProjectionPlane(
  briosa: BriosaClient,
  input: SetGeomRelationshipProjectionPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeomRelationshipProjectionPlane(briosa, { relationshipName: ..., projectionPlaneName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Object to Object Direction Relationship Fit Constraints

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Object to Object Direction Relationship Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [gRPC contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `angleBetweenVectorsFitConstraints` | `FitConstraintScalarOptions` | `Angle Between Vectors Fit Constraints` | Both limits disabled |
| `mutualPerpendicularLengthFitConstraints` | `FitConstraintScalarOptions` | `Mutual Perpendicular Length Fit Constraints` | Both limits disabled |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetObjectToObjectDirectionRelationshipFitConstraintsInput {
  readonly relationshipName: CollectionItemName;
  readonly angleBetweenVectorsFitConstraints?: FitConstraintScalarOptions;
  readonly mutualPerpendicularLengthFitConstraints?: FitConstraintScalarOptions;
}

function setObjectToObjectDirectionRelationshipFitConstraints(
  briosa: BriosaClient,
  input: SetObjectToObjectDirectionRelationshipFitConstraintsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setObjectToObjectDirectionRelationshipFitConstraints(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Pipe Relationship Segment Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Pipe Relationship Segment Properties](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) · [gRPC contract](/api/grpc/relationship-operations#set-pipe-relationship-segment-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `pipe1InnerDiameter` | `number` | `Pipe 1 - Inner Diameter` | 0.000000 |
| `pipe1OuterDiameter` | `number` | `Pipe 1 - Outer Diameter` | 0.000000 |
| `pipe1CutBegin` | `number` | `Pipe 1 - Cut Begin` | 0.000000 |
| `pipe1CutEnd` | `number` | `Pipe 1 - Cut End` | 0.000000 |
| `pipe2InnerDiameter` | `number` | `Pipe 2 - Inner Diameter` | 0.000000 |
| `pipe2OuterDiameter` | `number` | `Pipe 2 - Outer Diameter` | 0.000000 |
| `pipe2CutBegin` | `number` | `Pipe 2 - Cut Begin` | 0.000000 |
| `pipe2CutEnd` | `number` | `Pipe 2 - Cut End` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPipeRelationshipSegmentPropertiesInput {
  readonly relationshipName: CollectionItemName;
  readonly pipe1InnerDiameter?: number;
  readonly pipe1OuterDiameter?: number;
  readonly pipe1CutBegin?: number;
  readonly pipe1CutEnd?: number;
  readonly pipe2InnerDiameter?: number;
  readonly pipe2OuterDiameter?: number;
  readonly pipe2CutBegin?: number;
  readonly pipe2CutEnd?: number;
}

function setPipeRelationshipSegmentProperties(
  briosa: BriosaClient,
  input: SetPipeRelationshipSegmentPropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPipeRelationshipSegmentProperties(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Pipe Relationship Weights

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) · [gRPC contract](/api/grpc/relationship-operations#set-pipe-relationship-weights)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `overallWeight` | `number` | `Overall Weight` | 1.000000 |
| `axisOffset` | `number` | `Axis Offset` | 2.000000 |
| `axisAlignment` | `number` | `Axis Alignment` | 1.000000 |
| `centerPull` | `number` | `Center Pull` | 0.100000 |
| `outOfMaterialWeight` | `number` | `Out of material - Weight` | 10.000000 |
| `outOfMaterialOffset` | `number` | `Out of material - Offset` | 1.000000 |
| `constrainRegionAtOd` | `boolean` | `Constrain Region at OD` | false |
| `constrainIdOdOverlap` | `boolean` | `Constrain ID/OD overlap` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPipeRelationshipWeightsInput {
  readonly relationshipName: CollectionItemName;
  readonly overallWeight?: number;
  readonly axisOffset?: number;
  readonly axisAlignment?: number;
  readonly centerPull?: number;
  readonly outOfMaterialWeight?: number;
  readonly outOfMaterialOffset?: number;
  readonly constrainRegionAtOd?: boolean;
  readonly constrainIdOdOverlap?: boolean;
}

function setPipeRelationshipWeights(
  briosa: BriosaClient,
  input: SetPipeRelationshipWeightsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPipeRelationshipWeights(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Auto Vectors Fit (AVF)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Auto Vectors Fit (AVF)](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-fit-avf)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `createAutoVectorsAvf` | `boolean` | `Create Auto Vectors AVF` | false |
| `useVectorGroupCustomPrefix` | `boolean` | `Use Vector Group Custom Prefix?` | false |
| `vectorGroupCustomPrefix` | `string` | `Vector Group Custom Prefix` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipAutoVectorsFitAvfInput {
  readonly relationshipName: CollectionItemName;
  readonly createAutoVectorsAvf?: boolean;
  readonly useVectorGroupCustomPrefix?: boolean;
  readonly vectorGroupCustomPrefix?: string;
}

function setRelationshipAutoVectorsFitAvf(
  briosa: BriosaClient,
  input: SetRelationshipAutoVectorsFitAvfInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipAutoVectorsFitAvf(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Auto Vectors Group Default Prefix

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Auto Vectors Group Default Prefix](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-group-default-prefix)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geomRelAvnVgDefaultPrefix` | `string` | `Geom Rel AVN VG Default Prefix` | GR-AVN- |
| `geomRelAvfVgDefaultPrefix` | `string` | `Geom Rel AVF VG Default Prefix` | GR-AVF- |
| `nonGeomRelVgDefaultPrefix` | `string` | `Non-Geom Rel VG Default Prefix` | Auto Vectors:  |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipAutoVectorsGroupDefaultPrefixInput {
  readonly geomRelAvnVgDefaultPrefix?: string;
  readonly geomRelAvfVgDefaultPrefix?: string;
  readonly nonGeomRelVgDefaultPrefix?: string;
}

function setRelationshipAutoVectorsGroupDefaultPrefix(
  briosa: BriosaClient,
  input?: SetRelationshipAutoVectorsGroupDefaultPrefixInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipAutoVectorsGroupDefaultPrefix(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Desired Meas Count

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Desired Meas Count](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-desired-meas-count)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `desiredMeasurementCount` | `number` | `Desired Measurement Count` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipDesiredMeasCountInput {
  readonly relationshipName: CollectionItemName;
  readonly desiredMeasurementCount?: number;
}

function setRelationshipDesiredMeasCount(
  briosa: BriosaClient,
  input: SetRelationshipDesiredMeasCountInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipDesiredMeasCount(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Dormant Status

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Dormant Status](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-dormant-status)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `Iterable<CollectionItemName>` | `Relationships` | Required |
| `dormantStatus` | `boolean` | `Dormant Status` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipDormantStatusInput {
  readonly relationships: Iterable<CollectionItemName>;
  readonly dormantStatus?: boolean;
}

function setRelationshipDormantStatus(
  briosa: BriosaClient,
  input: SetRelationshipDormantStatusInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipDormantStatus(briosa, { relationships: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Fit Constraints (Scalar Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-fit-constraints-scalar-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `fitConstraintOptions` | `FitConstraintScalarOptions` | `Fit Constraint Options` | Both limits disabled |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipFitConstraintsScalarTypeInput {
  readonly relationshipName: CollectionItemName;
  readonly fitConstraintOptions?: FitConstraintScalarOptions;
}

function setRelationshipFitConstraintsScalarType(
  briosa: BriosaClient,
  input: SetRelationshipFitConstraintsScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipFitConstraintsScalarType(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Orientation Fit Constraints (Vector Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Orientation Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `orientationVectorConstraint` | `ToleranceVectorOptions` | `Orientation Vector Constraint` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipOrientationFitConstraintsVectorTypeInput {
  readonly relationshipName: CollectionItemName;
  readonly orientationVectorConstraint: ToleranceVectorOptions;
}

function setRelationshipOrientationFitConstraintsVectorType(
  briosa: BriosaClient,
  input: SetRelationshipOrientationFitConstraintsVectorTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipOrientationFitConstraintsVectorType(briosa, { relationshipName: ..., orientationVectorConstraint: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Outlier Rejection (Scalar Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-outlier-rejection-scalar-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipOutlierRejectionScalarTypeInput {
  readonly relationshipName: CollectionItemName;
}

function setRelationshipOutlierRejectionScalarType(
  briosa: BriosaClient,
  input: SetRelationshipOutlierRejectionScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipOutlierRejectionScalarType(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Position Fit Constraints (Vector Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Position Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-position-fit-constraints-vector-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `positionVectorConstraint` | `ToleranceVectorOptions` | `Position Vector Constraint` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipPositionFitConstraintsVectorTypeInput {
  readonly relationshipName: CollectionItemName;
  readonly positionVectorConstraint: ToleranceVectorOptions;
}

function setRelationshipPositionFitConstraintsVectorType(
  briosa: BriosaClient,
  input: SetRelationshipPositionFitConstraintsVectorTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipPositionFitConstraintsVectorType(briosa, { relationshipName: ..., positionVectorConstraint: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Projection Options

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-projection-options)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipProjectionOptionsInput {
  readonly relationshipName: CollectionItemName;
  readonly projectionOptions?: ProjectionOptions;
}

function setRelationshipProjectionOptions(
  briosa: BriosaClient,
  input: SetRelationshipProjectionOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipProjectionOptions(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Reporting Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-reporting-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipReportingFrameInput {
  readonly relationshipName: CollectionItemName;
  readonly reportingFrame: CollectionObjectName;
}

function setRelationshipReportingFrame(
  briosa: BriosaClient,
  input: SetRelationshipReportingFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipReportingFrame(briosa, { relationshipName: ..., reportingFrame: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Sigmoidal Gap Fit Constraints

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Sigmoidal Gap Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `useSigmoidalGapConstraints` | `boolean` | `Use Sigmoidal Gap Constraints` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipSigmoidalGapFitConstraintsInput {
  readonly relationshipName: CollectionItemName;
  readonly useSigmoidalGapConstraints?: boolean;
}

function setRelationshipSigmoidalGapFitConstraints(
  briosa: BriosaClient,
  input: SetRelationshipSigmoidalGapFitConstraintsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipSigmoidalGapFitConstraints(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Sub Sampling Options

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-sub-sampling-options)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `useEveryIthPoint` | `boolean` | `Use every i-th point` | false |
| `iValue` | `number` | `i value` | 20 |
| `useNoMoreThanNPoints` | `boolean` | `Use no more than n points` | true |
| `nValue` | `number` | `n value` | 10000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipSubSamplingOptionsInput {
  readonly relationshipName: CollectionItemName;
  readonly useEveryIthPoint?: boolean;
  readonly iValue?: number;
  readonly useNoMoreThanNPoints?: boolean;
  readonly nValue?: number;
}

function setRelationshipSubSamplingOptions(
  briosa: BriosaClient,
  input: SetRelationshipSubSamplingOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipSubSamplingOptions(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Tolerance (Scalar Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-tolerance-scalar-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `toleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipToleranceScalarTypeInput {
  readonly relationshipName: CollectionItemName;
  readonly toleranceOptions?: ToleranceScalarOptions;
}

function setRelationshipToleranceScalarType(
  briosa: BriosaClient,
  input: SetRelationshipToleranceScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipToleranceScalarType(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Tolerance (Vector Type)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-tolerance-vector-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `vectorTolerance` | `ToleranceVectorOptions` | `Vector Tolerance` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipToleranceVectorTypeInput {
  readonly relationshipName: CollectionItemName;
  readonly vectorTolerance: ToleranceVectorOptions;
}

function setRelationshipToleranceVectorType(
  briosa: BriosaClient,
  input: SetRelationshipToleranceVectorTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipToleranceVectorType(briosa, { relationshipName: ..., vectorTolerance: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Voxel Cloud Display

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Voxel Cloud Display](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-voxel-cloud-display)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `enableVoxelCloudDisplay` | `boolean` | `Enable Voxel Cloud Display?` | true |
| `voxelSize10Autodetect` | `number` | `Voxel Size (-1.0 autodetect)` | -1.000000 |
| `minPtsCountPerVoxel` | `number` | `Min Pts Count Per Voxel` | 3 |
| `voxelRenderingDiameter10Fast` | `number` | `Voxel Rendering Diameter % (-1.0 fast)` | 125.000000 |
| `surfaceAnalysisMode` | `SurfaceAnalysisMode` | `Surface Analysis Mode` | Relationship |
| `colorizationOptions` | `ColorizationOptions` | `Colorization Options` | Red |
| `showColorBarInView` | `boolean` | `Show Color Bar in View?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipVoxelCloudDisplayInput {
  readonly relationshipName: CollectionItemName;
  readonly enableVoxelCloudDisplay?: boolean;
  readonly voxelSize10Autodetect?: number;
  readonly minPtsCountPerVoxel?: number;
  readonly voxelRenderingDiameter10Fast?: number;
  readonly surfaceAnalysisMode?: SurfaceAnalysisMode;
  readonly colorizationOptions?: ColorizationOptions;
  readonly showColorBarInView?: boolean;
}

function setRelationshipVoxelCloudDisplay(
  briosa: BriosaClient,
  input: SetRelationshipVoxelCloudDisplayInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipVoxelCloudDisplay(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Weighting

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Weighting](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-weighting)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `weight` | `number` | `Weight` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipWeightingInput {
  readonly relationshipName: CollectionItemName;
  readonly weight?: number;
}

function setRelationshipWeighting(
  briosa: BriosaClient,
  input: SetRelationshipWeightingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipWeighting(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Weights Normalized

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Weights Normalized](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-weights-normalized)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionName` | `CollectionName` | `Collection Name` | Required |
| `pickWeightingMode` | `RelWeightingMode` | `Pick Weighting Mode` | Normalize on equation count |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipWeightsNormalizedInput {
  readonly collectionName: CollectionName;
  readonly pickWeightingMode?: RelWeightingMode;
}

function setRelationshipWeightsNormalized(
  briosa: BriosaClient,
  input: SetRelationshipWeightsNormalizedInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipWeightsNormalized(briosa, { collectionName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
