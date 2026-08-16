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

## Geom Relationship Ignore Input Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Geom Relationship Ignore Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC contract](/api/grpc/relationship-operations#geom-relationship-ignore-input-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface GeomRelationshipIgnoreInputPointsInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface GeomRelationshipReuseIgnoredInputPointsInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `cardinalPointNameList` | `readonly PointName[]` | `Cardinal Point Name List` |

```ts
export interface GetGeomRelationshipCardinalPointsInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `measuredAveragePoint` | `PointName` | `Measured Average Point` |

```ts
export interface GetGeomRelationshipMeasuredAvgPointInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `measuredGeometry` | `CollectionObjectName` | `Measured Geometry` |

```ts
export interface GetGeomRelationshipMeasuredGeometryInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `nominalAveragePoint` | `PointName` | `Nominal Average Point` |

```ts
export interface GetGeomRelationshipNominalAvgPointInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `nominalGeometry` | `CollectionObjectName` | `Nominal Geometry` |

```ts
export interface GetGeomRelationshipNominalGeometryInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `projectionPlaneName` | `CollectionObjectName` | `Projection Plane Name` |

```ts
export interface GetGeomRelationshipProjectionPlaneInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` |

```ts
export interface GetRelationshipReportingFrameInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `relationshipType` | `string` | `Relationship Type` |

```ts
export interface GetRelationshipTypeInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `weight` | `number` | `Weight` |

```ts
export interface GetRelationshipWeightingInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe1ObjectName` | `CollectionObjectName` | `Pipe 1 - Object Name` | Required |
| `pipe2ObjectName` | `CollectionObjectName` | `Pipe 2 - Object Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakePipeFittingRelationshipInput {
  readonly relationshipName: CollectionObjectName;
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

## Make pipe Relationship Cut

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make pipe Relationship Cut](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC contract](/api/grpc/relationship-operations#make-pipe-relationship-cut)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe1ForceCutToFrame` | `boolean` | `Pipe 1 - Force Cut to Frame?` | true |
| `pipe1FrameName` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe2ForceCutToFrame` | `boolean` | `Pipe 2 - Force Cut to Frame?` | true |
| `pipe2FrameName` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface PipeRelationshipForceCutToFrameInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `trapCloudsFalseGeometry` | `boolean` | `Trap Clouds? (FALSE = Geometry)` | true |
| `instrumentId` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `measurementMode` | `string` | `Measurement Mode` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipAutoMeasureNominalFeatureInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `createAutoVectorsAvn` | `boolean` | `Create Auto Vectors AVN` | false |
| `pointsType` | `PointFilterInputType` | `Points Type` | Cardinal Points |
| `useVectorGroupCustomPrefix` | `boolean` | `Use Vector Group Custom Prefix?` | false |
| `vectorGroupCustomPrefix` | `string` | `Vector Group Custom Prefix` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipAutoVectorsNominalAvnInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `createCardinalPtsWhenFitting` | `boolean` | `Create Cardinal Pts when Fitting?` | true |
| `prefixCardinalPtsNameWithRelName` | `boolean` | `Prefix Cardinal Pts name with Rel name?` | true |
| `cardinalPtsGroupName` | `string` | `Cardinal Pts Group Name` | GR-Cardinal Pts |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipCardinalPointsInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `measuredGeometry` | `CollectionObjectName` | `Measured Geometry` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipMeasuredGeometryInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `compareToNominal` | `boolean` | `Compare To Nominal?` | true |
| `nominalAveragePoint` | `PointName` | `Nominal Average Point` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipNominalAvgPointInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `compareToNominal` | `boolean` | `Compare To Nominal?` | true |
| `nominalGeometry` | `CollectionObjectName` | `Nominal Geometry` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipNominalGeometryInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `projectToPlane` | `boolean` | `Project to Plane?` | true |
| `projectionPlaneName` | `CollectionObjectName` | `Projection Plane Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeomRelationshipProjectionPlaneInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `angleBetweenVectorsFitConstraints` | `FitConstraintScalarOptions` | `Angle Between Vectors Fit Constraints` | Both limits disabled |
| `mutualPerpendicularLengthFitConstraints` | `FitConstraintScalarOptions` | `Mutual Perpendicular Length Fit Constraints` | Both limits disabled |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetObjectToObjectDirectionRelationshipFitConstraintsInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `createAutoVectorsAvf` | `boolean` | `Create Auto Vectors AVF` | false |
| `useVectorGroupCustomPrefix` | `boolean` | `Use Vector Group Custom Prefix?` | false |
| `vectorGroupCustomPrefix` | `string` | `Vector Group Custom Prefix` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipAutoVectorsFitAvfInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `desiredMeasurementCount` | `number` | `Desired Measurement Count` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipDesiredMeasCountInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `fitConstraintOptions` | `FitConstraintScalarOptions` | `Fit Constraint Options` | Both limits disabled |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipFitConstraintsScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `orientationVectorConstraint` | `ToleranceVectorOptions` | `Orientation Vector Constraint` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipOrientationFitConstraintsVectorTypeInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipOutlierRejectionScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `positionVectorConstraint` | `ToleranceVectorOptions` | `Position Vector Constraint` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipPositionFitConstraintsVectorTypeInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipProjectionOptionsInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipReportingFrameInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `useSigmoidalGapConstraints` | `boolean` | `Use Sigmoidal Gap Constraints` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipSigmoidalGapFitConstraintsInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `useEveryIthPoint` | `boolean` | `Use every i-th point` | false |
| `iValue` | `number` | `i value` | 20 |
| `useNoMoreThanNPoints` | `boolean` | `Use no more than n points` | true |
| `nValue` | `number` | `n value` | 10000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipSubSamplingOptionsInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `toleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipToleranceScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `vectorTolerance` | `ToleranceVectorOptions` | `Vector Tolerance` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipToleranceVectorTypeInput {
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
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
  readonly relationshipName: CollectionObjectName;
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
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `weight` | `number` | `Weight` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipWeightingInput {
  readonly relationshipName: CollectionObjectName;
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
