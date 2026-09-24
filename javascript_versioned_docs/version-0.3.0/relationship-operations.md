---
title: Relationship Operations
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Relationship Operations

[SA 2026.1.0529.7](/api/javascript/relationship-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/relationship-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Enable/Disable Relationships for Optimization {/* #enabledisable-relationships-for-optimization */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) · [gRPC Contract](/api/grpc/relationship-operations#enabledisable-relationships-for-optimization)

```ts
export interface EnableDisableRelationshipsForOptimizationInput {
  readonly relationships: Iterable<CollectionItemName>;
  readonly enable?: boolean;
}

export declare function enableDisableRelationshipsForOptimization(
  briosa: BriosaClient,
  input: EnableDisableRelationshipsForOptimizationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Geom Relationship Ignore Input Points {/* #geom-relationship-ignore-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC Contract](/api/grpc/relationship-operations#geom-relationship-ignore-input-points)

```ts
export interface GeomRelationshipIgnoreInputPointsInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function geomRelationshipIgnoreInputPoints(
  briosa: BriosaClient,
  input: GeomRelationshipIgnoreInputPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Geom Relationship Reuse Ignored Input Points {/* #geom-relationship-reuse-ignored-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) · [gRPC Contract](/api/grpc/relationship-operations#geom-relationship-reuse-ignored-input-points)

```ts
export interface GeomRelationshipReuseIgnoredInputPointsInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function geomRelationshipReuseIgnoredInputPoints(
  briosa: BriosaClient,
  input: GeomRelationshipReuseIgnoredInputPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Auto Vectors {/* #get-geom-relationship-auto-vectors */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-auto-vectors)

```ts
export interface GetGeomRelationshipAutoVectorsInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getGeomRelationshipAutoVectors(
  briosa: BriosaClient,
  input: GetGeomRelationshipAutoVectorsInput,
  options?: BriosaCallOptions,
): Promise<GetGeomRelationshipAutoVectorsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `autoVectorsNominalEnabled` | MP qualifier: AVN. |
| `autoVectorsNominalName` | MP qualifier: AVN. |
| `autoVectorsFitEnabled` | MP qualifier: AVF. |
| `autoVectorsFitName` | MP qualifier: AVF. |

## Get Geom Relationship Cardinal Points {/* #get-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-cardinal-points)

```ts
export interface GetGeomRelationshipCardinalPointsInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getGeomRelationshipCardinalPoints(
  briosa: BriosaClient,
  input: GetGeomRelationshipCardinalPointsInput,
  options?: BriosaCallOptions,
): Promise<readonly PointName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Criteria {/* #get-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-criteria)

```ts
export interface GetGeomRelationshipCriteriaInput {
  readonly relationshipName: CollectionObjectName;
  readonly criteria?: string;
}

export declare function getGeomRelationshipCriteria(
  briosa: BriosaClient,
  input: GetGeomRelationshipCriteriaInput,
  options?: BriosaCallOptions,
): Promise<GetGeomRelationshipCriteriaResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Measured Avg Point {/* #get-geom-relationship-measured-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-measured-avg-point)

```ts
export interface GetGeomRelationshipMeasuredAvgPointInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getGeomRelationshipMeasuredAvgPoint(
  briosa: BriosaClient,
  input: GetGeomRelationshipMeasuredAvgPointInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Measured Geometry {/* #get-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-measured-geometry)

```ts
export interface GetGeomRelationshipMeasuredGeometryInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getGeomRelationshipMeasuredGeometry(
  briosa: BriosaClient,
  input: GetGeomRelationshipMeasuredGeometryInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Nominal Avg Point {/* #get-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-avg-point)

```ts
export interface GetGeomRelationshipNominalAvgPointInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getGeomRelationshipNominalAvgPoint(
  briosa: BriosaClient,
  input: GetGeomRelationshipNominalAvgPointInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Nominal Geometry {/* #get-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-geometry)

```ts
export interface GetGeomRelationshipNominalGeometryInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getGeomRelationshipNominalGeometry(
  briosa: BriosaClient,
  input: GetGeomRelationshipNominalGeometryInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Point List {/* #get-geom-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-point-list)

```ts
export interface GetGeomRelationshipPointListInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getGeomRelationshipPointList(
  briosa: BriosaClient,
  input: GetGeomRelationshipPointListInput,
  options?: BriosaCallOptions,
): Promise<GetGeomRelationshipPointListResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Projection Plane {/* #get-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-projection-plane)

```ts
export interface GetGeomRelationshipProjectionPlaneInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getGeomRelationshipProjectionPlane(
  briosa: BriosaClient,
  input: GetGeomRelationshipProjectionPlaneInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Cut Status {/* #get-pipe-relationship-cut-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) · [gRPC Contract](/api/grpc/relationship-operations#get-pipe-relationship-cut-status)

```ts
export interface GetPipeRelationshipCutStatusInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getPipeRelationshipCutStatus(
  briosa: BriosaClient,
  input: GetPipeRelationshipCutStatusInput,
  options?: BriosaCallOptions,
): Promise<GetPipeRelationshipCutStatusResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Properties {/* #get-pipe-relationship-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) · [gRPC Contract](/api/grpc/relationship-operations#get-pipe-relationship-properties)

```ts
export interface GetPipeRelationshipPropertiesInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getPipeRelationshipProperties(
  briosa: BriosaClient,
  input: GetPipeRelationshipPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetPipeRelationshipPropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Weights {/* #get-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) · [gRPC Contract](/api/grpc/relationship-operations#get-pipe-relationship-weights)

```ts
export interface GetPipeRelationshipWeightsInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getPipeRelationshipWeights(
  briosa: BriosaClient,
  input: GetPipeRelationshipWeightsInput,
  options?: BriosaCallOptions,
): Promise<GetPipeRelationshipWeightsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Fit Constraints (Scalar Type) {/* #get-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-fit-constraints-scalar-type)

```ts
export interface GetRelationshipFitConstraintsScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipFitConstraintsScalarType(
  briosa: BriosaClient,
  input: GetRelationshipFitConstraintsScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipFitConstraintsScalarTypeResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Outlier Rejection (Scalar Type) {/* #get-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-outlier-rejection-scalar-type)

```ts
export interface GetRelationshipOutlierRejectionScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipOutlierRejectionScalarType(
  briosa: BriosaClient,
  input: GetRelationshipOutlierRejectionScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipOutlierRejectionScalarTypeResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Projection Options {/* #get-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-projection-options)

```ts
export interface GetRelationshipProjectionOptionsInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipProjectionOptions(
  briosa: BriosaClient,
  input: GetRelationshipProjectionOptionsInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipProjectionOptionsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Reporting Frame {/* #get-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-reporting-frame)

```ts
export interface GetRelationshipReportingFrameInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipReportingFrame(
  briosa: BriosaClient,
  input: GetRelationshipReportingFrameInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Sigmoidal Gap Fit Constraints {/* #get-relationship-sigmoidal-gap-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints)

```ts
export interface GetRelationshipSigmoidalGapFitConstraintsInput {
  readonly relationshipName: CollectionItemName;
}

export declare function getRelationshipSigmoidalGapFitConstraints(
  briosa: BriosaClient,
  input: GetRelationshipSigmoidalGapFitConstraintsInput,
  options?: BriosaCallOptions,
): Promise<SigmoidalGapFitConstraints>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Sub Sampling Options {/* #get-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-sub-sampling-options)

```ts
export interface GetRelationshipSubSamplingOptionsInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipSubSamplingOptions(
  briosa: BriosaClient,
  input: GetRelationshipSubSamplingOptionsInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipSubSamplingOptionsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Tolerance (Scalar Type) {/* #get-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-tolerance-scalar-type)

```ts
export interface GetRelationshipToleranceScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipToleranceScalarType(
  briosa: BriosaClient,
  input: GetRelationshipToleranceScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipToleranceScalarTypeResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Tolerance (Vector Type) {/* #get-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-tolerance-vector-type)

```ts
export interface GetRelationshipToleranceVectorTypeInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipToleranceVectorType(
  briosa: BriosaClient,
  input: GetRelationshipToleranceVectorTypeInput,
  options?: BriosaCallOptions,
): Promise<GetRelationshipToleranceVectorTypeResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Type {/* #get-relationship-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-type)

```ts
export interface GetRelationshipTypeInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipType(
  briosa: BriosaClient,
  input: GetRelationshipTypeInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Weighting {/* #get-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-weighting)

```ts
export interface GetRelationshipWeightingInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function getRelationshipWeighting(
  briosa: BriosaClient,
  input: GetRelationshipWeightingInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Pipe Fitting Relationship {/* #make-pipe-fitting-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-pipe-fitting-relationship)

```ts
export interface MakePipeFittingRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly pipe1ObjectName: CollectionObjectName;
  readonly pipe2ObjectName: CollectionObjectName;
}

export declare function makePipeFittingRelationship(
  briosa: BriosaClient,
  input: MakePipeFittingRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Pipe Relationship Cut {/* #make-pipe-relationship-cut */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC Contract](/api/grpc/relationship-operations#make-pipe-relationship-cut)

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

export declare function makePipeRelationshipCut(
  briosa: BriosaClient,
  input: MakePipeRelationshipCutInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Pipe Relationship Force Cut to Frame {/* #pipe-relationship-force-cut-to-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) · [gRPC Contract](/api/grpc/relationship-operations#pipe-relationship-force-cut-to-frame)

```ts
export interface PipeRelationshipForceCutToFrameInput {
  readonly relationshipName: CollectionObjectName;
  readonly pipe1ForceCutToFrame?: boolean;
  readonly pipe1FrameName: CollectionObjectName;
  readonly pipe2ForceCutToFrame?: boolean;
  readonly pipe2FrameName: CollectionObjectName;
}

export declare function pipeRelationshipForceCutToFrame(
  briosa: BriosaClient,
  input: PipeRelationshipForceCutToFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Auto Measure Nominal Feature {/* #set-geom-relationship-auto-measure-nominal-feature */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-auto-measure-nominal-feature)

```ts
export interface SetGeomRelationshipAutoMeasureNominalFeatureInput {
  readonly relationshipName: CollectionObjectName;
  readonly trapClouds?: boolean;
  readonly instrumentId: CollectionInstrumentId;
  readonly measurementMode?: string;
}

export declare function setGeomRelationshipAutoMeasureNominalFeature(
  briosa: BriosaClient,
  input: SetGeomRelationshipAutoMeasureNominalFeatureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `trapClouds` | False selects geometry. |

## Set Geom Relationship Auto Vectors Nominal (AVN) {/* #set-geom-relationship-auto-vectors-nominal-avn */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

```ts
export interface SetGeomRelationshipAutoVectorsNominalAvnInput {
  readonly relationshipName: CollectionObjectName;
  readonly createAutoVectorsAvn?: boolean;
  readonly pointsType?: PointFilterInputType;
  readonly useVectorGroupCustomPrefix?: boolean;
  readonly vectorGroupCustomPrefix?: string;
}

export declare function setGeomRelationshipAutoVectorsNominalAvn(
  briosa: BriosaClient,
  input: SetGeomRelationshipAutoVectorsNominalAvnInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Cardinal Points {/* #set-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-cardinal-points)

```ts
export interface SetGeomRelationshipCardinalPointsInput {
  readonly relationshipName: CollectionObjectName;
  readonly createCardinalPtsWhenFitting?: boolean;
  readonly prefixCardinalPtsNameWithRelName?: boolean;
  readonly cardinalPtsGroupName?: string;
}

export declare function setGeomRelationshipCardinalPoints(
  briosa: BriosaClient,
  input: SetGeomRelationshipCardinalPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Criteria {/* #set-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-criteria)

```ts
export interface SetGeomRelationshipCriteriaInput {
  readonly relationshipName: CollectionObjectName;
  readonly criteria?: string;
  readonly showInReport?: boolean;
  readonly toleranceOptions?: ToleranceScalarOptions;
  readonly optimizationDeltaWeight?: number;
  readonly optimizationOutOfToleranceWeight?: number;
}

export declare function setGeomRelationshipCriteria(
  briosa: BriosaClient,
  input: SetGeomRelationshipCriteriaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Measured Geometry {/* #set-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-measured-geometry)

```ts
export interface SetGeomRelationshipMeasuredGeometryInput {
  readonly relationshipName: CollectionObjectName;
  readonly measuredGeometry: CollectionObjectName;
}

export declare function setGeomRelationshipMeasuredGeometry(
  briosa: BriosaClient,
  input: SetGeomRelationshipMeasuredGeometryInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Nominal Avg Point {/* #set-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-avg-point)

```ts
export interface SetGeomRelationshipNominalAvgPointInput {
  readonly relationshipName: CollectionObjectName;
  readonly compareToNominal?: boolean;
  readonly nominalAveragePoint: PointName;
}

export declare function setGeomRelationshipNominalAvgPoint(
  briosa: BriosaClient,
  input: SetGeomRelationshipNominalAvgPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Nominal Geometry {/* #set-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-geometry)

```ts
export interface SetGeomRelationshipNominalGeometryInput {
  readonly relationshipName: CollectionObjectName;
  readonly compareToNominal?: boolean;
  readonly nominalGeometry: CollectionObjectName;
}

export declare function setGeomRelationshipNominalGeometry(
  briosa: BriosaClient,
  input: SetGeomRelationshipNominalGeometryInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Projection Plane {/* #set-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-projection-plane)

```ts
export interface SetGeomRelationshipProjectionPlaneInput {
  readonly relationshipName: CollectionObjectName;
  readonly projectToPlane?: boolean;
  readonly projectionPlaneName: CollectionObjectName;
}

export declare function setGeomRelationshipProjectionPlane(
  briosa: BriosaClient,
  input: SetGeomRelationshipProjectionPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object to Object Direction Relationship Fit Constraints {/* #set-object-to-object-direction-relationship-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [gRPC Contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

```ts
export interface SetObjectToObjectDirectionRelationshipFitConstraintsInput {
  readonly relationshipName: CollectionObjectName;
  readonly angleBetweenVectorsFitConstraints?: FitConstraintScalarOptions;
  readonly mutualPerpendicularLengthFitConstraints?: FitConstraintScalarOptions;
}

export declare function setObjectToObjectDirectionRelationshipFitConstraints(
  briosa: BriosaClient,
  input: SetObjectToObjectDirectionRelationshipFitConstraintsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object to Object Direction Relationship Tolerances {/* #set-object-to-object-direction-relationship-tolerances */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [gRPC Contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-tolerances)

```ts
export interface SetObjectToObjectDirectionRelationshipTolerancesInput {
  readonly relationshipName: CollectionItemName;
  readonly angleBetweenVectorsTolerances?: ToleranceScalarOptions;
  readonly mutualPerpendicularLengthTolerances?: ToleranceScalarOptions;
}

export declare function setObjectToObjectDirectionRelationshipTolerances(
  briosa: BriosaClient,
  input: SetObjectToObjectDirectionRelationshipTolerancesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Pipe Relationship Segment Properties {/* #set-pipe-relationship-segment-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) · [gRPC Contract](/api/grpc/relationship-operations#set-pipe-relationship-segment-properties)

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

export declare function setPipeRelationshipSegmentProperties(
  briosa: BriosaClient,
  input: SetPipeRelationshipSegmentPropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Pipe Relationship Weights {/* #set-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) · [gRPC Contract](/api/grpc/relationship-operations#set-pipe-relationship-weights)

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

export declare function setPipeRelationshipWeights(
  briosa: BriosaClient,
  input: SetPipeRelationshipWeightsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Auto Vectors Fit (AVF) {/* #set-relationship-auto-vectors-fit-avf */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-fit-avf)

```ts
export interface SetRelationshipAutoVectorsFitAvfInput {
  readonly relationshipName: CollectionObjectName;
  readonly createAutoVectorsAvf?: boolean;
  readonly useVectorGroupCustomPrefix?: boolean;
  readonly vectorGroupCustomPrefix?: string;
}

export declare function setRelationshipAutoVectorsFitAvf(
  briosa: BriosaClient,
  input: SetRelationshipAutoVectorsFitAvfInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Auto Vectors Group Default Prefix {/* #set-relationship-auto-vectors-group-default-prefix */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-group-default-prefix)

```ts
export interface SetRelationshipAutoVectorsGroupDefaultPrefixInput {
  readonly geomRelAvnVgDefaultPrefix?: string;
  readonly geomRelAvfVgDefaultPrefix?: string;
  readonly nonGeomRelVgDefaultPrefix?: string;
}

export declare function setRelationshipAutoVectorsGroupDefaultPrefix(
  briosa: BriosaClient,
  input: SetRelationshipAutoVectorsGroupDefaultPrefixInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Desired Meas Count {/* #set-relationship-desired-meas-count */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-desired-meas-count)

```ts
export interface SetRelationshipDesiredMeasCountInput {
  readonly relationshipName: CollectionObjectName;
  readonly desiredMeasurementCount?: number;
}

export declare function setRelationshipDesiredMeasCount(
  briosa: BriosaClient,
  input: SetRelationshipDesiredMeasCountInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Dormant Status {/* #set-relationship-dormant-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-dormant-status)

```ts
export interface SetRelationshipDormantStatusInput {
  readonly relationships: Iterable<CollectionItemName>;
  readonly dormantStatus?: boolean;
}

export declare function setRelationshipDormantStatus(
  briosa: BriosaClient,
  input: SetRelationshipDormantStatusInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Fit Constraints (Scalar Type) {/* #set-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-fit-constraints-scalar-type)

```ts
export interface SetRelationshipFitConstraintsScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
  readonly fitConstraintOptions?: FitConstraintScalarOptions;
}

export declare function setRelationshipFitConstraintsScalarType(
  briosa: BriosaClient,
  input: SetRelationshipFitConstraintsScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Orientation Fit Constraints (Vector Type) {/* #set-relationship-orientation-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

```ts
export interface SetRelationshipOrientationFitConstraintsVectorTypeInput {
  readonly relationshipName: CollectionObjectName;
  readonly orientationVectorConstraint: ToleranceVectorOptions;
}

export declare function setRelationshipOrientationFitConstraintsVectorType(
  briosa: BriosaClient,
  input: SetRelationshipOrientationFitConstraintsVectorTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Outlier Rejection (Scalar Type) {/* #set-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-outlier-rejection-scalar-type)

```ts
export interface SetRelationshipOutlierRejectionScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
}

export declare function setRelationshipOutlierRejectionScalarType(
  briosa: BriosaClient,
  input: SetRelationshipOutlierRejectionScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Position Fit Constraints (Vector Type) {/* #set-relationship-position-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-position-fit-constraints-vector-type)

```ts
export interface SetRelationshipPositionFitConstraintsVectorTypeInput {
  readonly relationshipName: CollectionObjectName;
  readonly positionVectorConstraint: ToleranceVectorOptions;
}

export declare function setRelationshipPositionFitConstraintsVectorType(
  briosa: BriosaClient,
  input: SetRelationshipPositionFitConstraintsVectorTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Projection Options {/* #set-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-projection-options)

```ts
export interface SetRelationshipProjectionOptionsInput {
  readonly relationshipName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
}

export declare function setRelationshipProjectionOptions(
  briosa: BriosaClient,
  input: SetRelationshipProjectionOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Reporting Frame {/* #set-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-reporting-frame)

```ts
export interface SetRelationshipReportingFrameInput {
  readonly relationshipName: CollectionObjectName;
  readonly reportingFrame: CollectionObjectName;
}

export declare function setRelationshipReportingFrame(
  briosa: BriosaClient,
  input: SetRelationshipReportingFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Sigmoidal Gap Fit Constraints {/* #set-relationship-sigmoidal-gap-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints)

```ts
export interface SetRelationshipSigmoidalGapFitConstraintsInput {
  readonly relationshipName: CollectionObjectName;
  readonly useSigmoidalGapConstraints?: boolean;
}

export declare function setRelationshipSigmoidalGapFitConstraints(
  briosa: BriosaClient,
  input: SetRelationshipSigmoidalGapFitConstraintsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Sub Sampling Options {/* #set-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-sub-sampling-options)

```ts
export interface SetRelationshipSubSamplingOptionsInput {
  readonly relationshipName: CollectionObjectName;
  readonly useEveryIthPoint?: boolean;
  readonly iValue?: number;
  readonly useNoMoreThanNPoints?: boolean;
  readonly nValue?: number;
}

export declare function setRelationshipSubSamplingOptions(
  briosa: BriosaClient,
  input: SetRelationshipSubSamplingOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Tolerance (Scalar Type) {/* #set-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-tolerance-scalar-type)

```ts
export interface SetRelationshipToleranceScalarTypeInput {
  readonly relationshipName: CollectionObjectName;
  readonly toleranceOptions?: ToleranceScalarOptions;
}

export declare function setRelationshipToleranceScalarType(
  briosa: BriosaClient,
  input: SetRelationshipToleranceScalarTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Tolerance (Vector Type) {/* #set-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-tolerance-vector-type)

```ts
export interface SetRelationshipToleranceVectorTypeInput {
  readonly relationshipName: CollectionObjectName;
  readonly vectorTolerance: ToleranceVectorOptions;
}

export declare function setRelationshipToleranceVectorType(
  briosa: BriosaClient,
  input: SetRelationshipToleranceVectorTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Voxel Cloud Display {/* #set-relationship-voxel-cloud-display */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-voxel-cloud-display)

```ts
export interface SetRelationshipVoxelCloudDisplayInput {
  readonly relationshipName: CollectionObjectName;
  readonly enableVoxelCloudDisplay?: boolean;
  readonly voxelSize?: number;
  readonly minPtsCountPerVoxel?: number;
  readonly voxelRenderingDiameter?: number;
  readonly surfaceAnalysisMode?: SurfaceAnalysisMode;
  readonly colorizationOptions?: ColorizationOptions;
  readonly showColorBarInView?: boolean;
}

export declare function setRelationshipVoxelCloudDisplay(
  briosa: BriosaClient,
  input: SetRelationshipVoxelCloudDisplayInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `voxelSize` | -1.0 selects automatic detection. |
| `voxelRenderingDiameter` | -1.0 selects fast rendering. |

## Set Relationship Weighting {/* #set-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-weighting)

```ts
export interface SetRelationshipWeightingInput {
  readonly relationshipName: CollectionObjectName;
  readonly weight?: number;
}

export declare function setRelationshipWeighting(
  briosa: BriosaClient,
  input: SetRelationshipWeightingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Weights Normalized {/* #set-relationship-weights-normalized */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-weights-normalized)

```ts
export interface SetRelationshipWeightsNormalizedInput {
  readonly collectionName: CollectionName;
  readonly pickWeightingMode?: RelWeightingMode;
}

export declare function setRelationshipWeightsNormalized(
  briosa: BriosaClient,
  input: SetRelationshipWeightsNormalizedInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Geometry Relationship Summary {/* #generate-geometry-relationship-summary */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary) · [gRPC Contract](/api/grpc/relationship-operations#generate-geometry-relationship-summary)

```ts
export interface GenerateGeometryRelationshipSummaryInput {
  readonly relationshipRefList: Iterable<CollectionItemName>;
  readonly summaryTableName?: string;
}

export declare function generateGeometryRelationshipSummary(
  briosa: BriosaClient,
  input: GenerateGeometryRelationshipSummaryInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Edit Geometry Relationship Point List {/* #edit-geometry-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list) · [gRPC Contract](/api/grpc/relationship-operations#edit-geometry-relationship-point-list)

```ts
export interface EditGeometryRelationshipPointListInput {
  readonly relationshipName: CollectionItemName;
  readonly pointEditMode?: GeometryRelationshipPointEditMode;
}

export declare function editGeometryRelationshipPointList(
  briosa: BriosaClient,
  input: EditGeometryRelationshipPointListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Geometry Relationship Outlier Cloud Points {/* #filter-geometry-relationship-outlier-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [gRPC Contract](/api/grpc/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

```ts
export interface FilterGeometryRelationshipOutlierCloudPointsInput {
  readonly relationshipName: CollectionItemName;
  readonly sigmaThreshold?: number;
  readonly modifyExistingInputClouds?: boolean;
}

export declare function filterGeometryRelationshipOutlierCloudPoints(
  briosa: BriosaClient,
  input: FilterGeometryRelationshipOutlierCloudPointsInput,
  options?: BriosaCallOptions,
): Promise<GeometryRelationshipOutlierFilterMetrics>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Relationship Watch Window Template {/* #relationship-watch-window-template */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template) · [gRPC Contract](/api/grpc/relationship-operations#relationship-watch-window-template)

```ts
export interface RelationshipWatchWindowTemplateInput {
  readonly watchWindowTemplateName?: CollectionObjectName;
  readonly options?: RelationshipWatchWindowTemplateOptions;
}

export declare function relationshipWatchWindowTemplate(
  briosa: BriosaClient,
  input?: RelationshipWatchWindowTemplateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `showDeviationX` | MP qualifier: Rx. |
| `showDeviationY` | MP qualifier: Ry. |
| `showDeviationZ` | MP qualifier: Rz. |

## Make Point to Point Relationship {/* #make-point-to-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-point-to-point-relationship)

```ts
export interface MakePointToPointRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstPointName: PointName;
  readonly secondPointName: PointName;
  readonly tolerance?: ToleranceVectorOptions;
  readonly constraint?: ToleranceVectorOptions;
}

export declare function makePointToPointRelationship(
  briosa: BriosaClient,
  input: MakePointToPointRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Frame to Frame Relationship {/* #make-frame-to-frame-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-frame-to-frame-relationship)

```ts
export interface MakeFrameToFrameRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstFrameName: CollectionObjectName;
  readonly secondFrameName: CollectionObjectName;
  readonly orientationTolerance?: ToleranceScalarOptions;
  readonly positionTolerance?: ToleranceVectorOptions;
}

export declare function makeFrameToFrameRelationship(
  briosa: BriosaClient,
  input: MakeFrameToFrameRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Points to Objects Relationship {/* #make-points-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-points-to-objects-relationship)

```ts
export interface MakePointsToObjectsRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly pointsInRelationship: Iterable<PointName>;
  readonly objectsInRelationship: Iterable<CollectionObjectName>;
  readonly projectionOptions?: ProjectionOptions;
  readonly autoUpdateAVectorGroup?: boolean;
}

export declare function makePointsToObjectsRelationship(
  briosa: BriosaClient,
  input: MakePointsToObjectsRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Points to Points Relationship {/* #make-points-to-points-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-points-to-points-relationship)

```ts
export interface MakePointsToPointsRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly nominalPoints: Iterable<PointName>;
  readonly measuredPoints: Iterable<PointName>;
  readonly autoUpdateAVectorGroup?: boolean;
  readonly tolerance?: ToleranceVectorOptions;
  readonly constraint?: ToleranceVectorOptions;
}

export declare function makePointsToPointsRelationship(
  briosa: BriosaClient,
  input: MakePointsToPointsRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Groups to Objects Relationship {/* #make-groups-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-groups-to-objects-relationship)

```ts
export interface MakeGroupsToObjectsRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly pointGroupsInRelationship: Iterable<CollectionObjectName>;
  readonly objectsInRelationship: Iterable<CollectionObjectName>;
  readonly projectionOptions?: ProjectionOptions;
  readonly autoUpdateAVectorGroup?: boolean;
}

export declare function makeGroupsToObjectsRelationship(
  briosa: BriosaClient,
  input: MakeGroupsToObjectsRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Object to Object Direction Relationship {/* #make-object-to-object-direction-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-object-to-object-direction-relationship)

```ts
export interface MakeObjectToObjectDirectionRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstObjectInRelationship: CollectionObjectName;
  readonly secondObjectInRelationship: CollectionObjectName;
  readonly nominalAngle?: number;
}

export declare function makeObjectToObjectDirectionRelationship(
  briosa: BriosaClient,
  input: MakeObjectToObjectDirectionRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Point Clouds to Objects Relationship {/* #make-point-clouds-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-point-clouds-to-objects-relationship)

```ts
export interface MakePointCloudsToObjectsRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly pointCloudsInRelationship: Iterable<CollectionObjectName>;
  readonly objectsInRelationship: Iterable<CollectionObjectName>;
  readonly projectionOptions?: ProjectionOptions;
  readonly autoUpdateAVectorGroup?: boolean;
}

export declare function makePointCloudsToObjectsRelationship(
  briosa: BriosaClient,
  input: MakePointCloudsToObjectsRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Group to Group Relationship {/* #make-group-to-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-group-to-group-relationship)

```ts
export interface MakeGroupToGroupRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstGroupName: CollectionObjectName;
  readonly secondGroupName: CollectionObjectName;
  readonly autoUpdateAVectorGroup?: boolean;
  readonly tolerance?: ToleranceVectorOptions;
  readonly constraint?: ToleranceVectorOptions;
}

export declare function makeGroupToGroupRelationship(
  briosa: BriosaClient,
  input: MakeGroupToGroupRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Group to Nominal Group Relationship {/* #make-group-to-nominal-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-group-to-nominal-group-relationship)

```ts
export interface MakeGroupToNominalGroupRelationshipInput {
  readonly relationshipName: CollectionItemName;
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

export declare function makeGroupToNominalGroupRelationship(
  briosa: BriosaClient,
  input: MakeGroupToNominalGroupRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Average Point Relationship {/* #make-average-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-average-point-relationship)

```ts
export interface MakeAveragePointRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly pointsInRelationship: Iterable<PointName>;
  readonly averagePointName?: PointName;
  readonly nominalPointName?: PointName;
}

export declare function makeAveragePointRelationship(
  briosa: BriosaClient,
  input: MakeAveragePointRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Fit Only Relationship {/* #make-geometry-fit-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-geometry-fit-only-relationship)

```ts
export interface MakeGeometryFitOnlyRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly pointGroupsToFit: Iterable<CollectionObjectName>;
  readonly geometryType: GeometryType;
  readonly resultingObjectName?: CollectionObjectName;
  readonly fitProfileName?: string;
}

export declare function makeGeometryFitOnlyRelationship(
  briosa: BriosaClient,
  input: MakeGeometryFitOnlyRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Fit and Compare to Nominal Relationship {/* #make-geometry-fit-and-compare-to-nominal-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

```ts
export interface MakeGeometryFitAndCompareToNominalRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly nominalGeometry: CollectionObjectName;
  readonly pointGroupsToFit: Iterable<CollectionObjectName>;
  readonly resultingObjectName?: CollectionObjectName;
  readonly fitProfileName?: string;
}

export declare function makeGeometryFitAndCompareToNominalRelationship(
  briosa: BriosaClient,
  input: MakeGeometryFitAndCompareToNominalRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Compare Only Relationship {/* #make-geometry-compare-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-geometry-compare-only-relationship)

```ts
export interface MakeGeometryCompareOnlyRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly nominalGeometry: CollectionObjectName;
  readonly measuredGeometry: CollectionObjectName;
}

export declare function makeGeometryCompareOnlyRelationship(
  briosa: BriosaClient,
  input: MakeGeometryCompareOnlyRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Point Relationship {/* #make-dynamic-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-point-relationship)

```ts
export interface MakeDynamicPointRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicPointMode;
  readonly thirdReferenceGeometry?: CollectionObjectName;
}

export declare function makeDynamicPointRelationship(
  briosa: BriosaClient,
  input: MakeDynamicPointRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Line Relationship {/* #make-dynamic-line-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-line-relationship)

```ts
export interface MakeDynamicLineRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicLineMode;
}

export declare function makeDynamicLineRelationship(
  briosa: BriosaClient,
  input: MakeDynamicLineRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Plane Relationship {/* #make-dynamic-plane-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-plane-relationship)

```ts
export interface MakeDynamicPlaneRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicPlaneMode;
  readonly offsetPlaneOffset?: number;
}

export declare function makeDynamicPlaneRelationship(
  briosa: BriosaClient,
  input: MakeDynamicPlaneRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Circle Relationship {/* #make-dynamic-circle-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-circle-relationship)

```ts
export interface MakeDynamicCircleRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicCircleMode;
}

export declare function makeDynamicCircleRelationship(
  briosa: BriosaClient,
  input: MakeDynamicCircleRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Ellipse Relationship {/* #make-dynamic-ellipse-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-ellipse-relationship)

```ts
export interface MakeDynamicEllipseRelationshipInput {
  readonly relationshipName: CollectionItemName;
  readonly firstReferenceGeometry: CollectionObjectName;
  readonly secondReferenceGeometry: CollectionObjectName;
  readonly constructionMode?: DynamicEllipseMode;
}

export declare function makeDynamicEllipseRelationship(
  briosa: BriosaClient,
  input: MakeDynamicEllipseRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Vector Group To Vector Group Relationship {/* #make-vector-group-to-vector-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-vector-group-to-vector-group-relationship)

```ts
export interface MakeVectorGroupToVectorGroupRelationshipInput {
  readonly newVgToVgRelationship: CollectionItemName;
  readonly referenceVectorGroup: CollectionObjectName;
  readonly correspondingVectorGroup: CollectionObjectName;
  readonly setOpposingVectorGroupPolarity?: boolean;
}

export declare function makeVectorGroupToVectorGroupRelationship(
  briosa: BriosaClient,
  input: MakeVectorGroupToVectorGroupRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Cylindrical Zone {/* #set-vector-group-to-vector-group-cylindrical-zone */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [gRPC Contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

```ts
export interface SetVectorGroupToVectorGroupCylindricalZoneInput {
  readonly vgToVgRelationship: CollectionItemName;
  readonly radialOffset?: number;
  readonly minimumAxialOffset?: number;
  readonly maximumAxialOffset?: number;
}

export declare function setVectorGroupToVectorGroupCylindricalZone(
  briosa: BriosaClient,
  input: SetVectorGroupToVectorGroupCylindricalZoneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Fit Weights {/* #set-vector-group-to-vector-group-fit-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [gRPC Contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-weights)

```ts
export interface SetVectorGroupToVectorGroupFitWeightsInput {
  readonly vgToVgRelationship: CollectionItemName;
  readonly minimumGap?: number;
  readonly minimumGapFitWeight?: number;
  readonly maximumGap?: number;
  readonly maximumGapFitWeight?: number;
  readonly nominalGap?: number;
  readonly nominalGapFitWeight?: number;
}

export declare function setVectorGroupToVectorGroupFitWeights(
  briosa: BriosaClient,
  input: SetVectorGroupToVectorGroupFitWeightsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Fit Gradient Factor {/* #set-vector-group-to-vector-group-fit-gradient-factor */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [gRPC Contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

```ts
export interface SetVectorGroupToVectorGroupFitGradientFactorInput {
  readonly vgToVgRelationship: CollectionItemName;
  readonly fitGradientFactor?: number;
}

export declare function setVectorGroupToVectorGroupFitGradientFactor(
  briosa: BriosaClient,
  input: SetVectorGroupToVectorGroupFitGradientFactorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Relative Polarity {/* #set-vector-group-to-vector-group-relative-polarity */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [gRPC Contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-relative-polarity)

```ts
export interface SetVectorGroupToVectorGroupRelativePolarityInput {
  readonly vgToVgRelationship: CollectionItemName;
  readonly setOpposingVectorGroupPolarity?: boolean;
}

export declare function setVectorGroupToVectorGroupRelativePolarity(
  briosa: BriosaClient,
  input: SetVectorGroupToVectorGroupRelativePolarityInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Relationship {/* #delete-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#delete-relationship) · [gRPC Contract](/api/grpc/relationship-operations#delete-relationship)

```ts
export interface DeleteRelationshipInput {
  readonly relationshipName: CollectionItemName;
}

export declare function deleteRelationship(
  briosa: BriosaClient,
  input: DeleteRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Optimization Search Options {/* #set-optimization-search-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-search-options) · [gRPC Contract](/api/grpc/relationship-operations#set-optimization-search-options)

```ts
export interface SetOptimizationSearchOptionsInput {
  readonly maxNumberOfStepSizeReduction?: number;
}

export declare function setOptimizationSearchOptions(
  briosa: BriosaClient,
  input?: SetOptimizationSearchOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Optimization Perturbation Parameters {/* #set-optimization-perturbation-parameters */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-perturbation-parameters) · [gRPC Contract](/api/grpc/relationship-operations#set-optimization-perturbation-parameters)

```ts
export interface SetOptimizationPerturbationParametersInput {
  readonly lengthPerturbation?: number;
  readonly angularPerturbation?: number;
  readonly damping?: number;
}

export declare function setOptimizationPerturbationParameters(
  briosa: BriosaClient,
  input?: SetOptimizationPerturbationParametersInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Do Relationship Fit {/* #do-relationship-fit */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) · [gRPC Contract](/api/grpc/relationship-operations#do-relationship-fit)

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

export declare function doRelationshipFit(
  briosa: BriosaClient,
  input: DoRelationshipFitInput,
  options?: BriosaCallOptions,
): Promise<RelationshipFitResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Collections by Minimizing Relationships {/* #move-collections-by-minimizing-relationships */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#move-collections-by-minimizing-relationships) · [gRPC Contract](/api/grpc/relationship-operations#move-collections-by-minimizing-relationships)

```ts
export interface MoveCollectionsByMinimizingRelationshipsInput {
  readonly collectionsToMove: Iterable<string>;
  readonly relationshipsToMinimize: Iterable<CollectionItemName>;
  readonly solverMode?: SolverMode;
  readonly motionToAllow?: FitDofOptions;
  readonly useFitDialog?: boolean;
  readonly convergenceThreshold?: number;
}

export declare function moveCollectionsByMinimizingRelationships(
  briosa: BriosaClient,
  input: MoveCollectionsByMinimizingRelationshipsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get General Relationship Statistics {/* #get-general-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-general-relationship-statistics) · [gRPC Contract](/api/grpc/relationship-operations#get-general-relationship-statistics)

```ts
export interface GetGeneralRelationshipStatisticsInput {
  readonly relationshipName: CollectionItemName;
}

export declare function getGeneralRelationshipStatistics(
  briosa: BriosaClient,
  input: GetGeneralRelationshipStatisticsInput,
  options?: BriosaCallOptions,
): Promise<GeneralRelationshipStatistics>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Points to Objects Relationship Statistics {/* #get-points-to-objects-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-objects-relationship-statistics) · [gRPC Contract](/api/grpc/relationship-operations#get-points-to-objects-relationship-statistics)

```ts
export interface GetPointsToObjectsRelationshipStatisticsInput {
  readonly relationshipName: CollectionItemName;
}

export declare function getPointsToObjectsRelationshipStatistics(
  briosa: BriosaClient,
  input: GetPointsToObjectsRelationshipStatisticsInput,
  options?: BriosaCallOptions,
): Promise<PointsToObjectsRelationshipStatistics>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Relationship Trapping {/* #startstop-relationship-trapping */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#startstop-relationship-trapping) · [gRPC Contract](/api/grpc/relationship-operations#startstop-relationship-trapping)

```ts
export interface StartStopRelationshipTrappingInput {
  readonly relationshipName: CollectionItemName;
  readonly instrumentId: CollectionInstrumentId;
  readonly startTrapping?: boolean;
}

export declare function startStopRelationshipTrapping(
  briosa: BriosaClient,
  input: StartStopRelationshipTrappingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point to Point Relationship Statistics {/* #get-point-to-point-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-point-to-point-relationship-statistics) · [gRPC Contract](/api/grpc/relationship-operations#get-point-to-point-relationship-statistics)

```ts
export interface GetPointToPointRelationshipStatisticsInput {
  readonly relationshipName: CollectionItemName;
}

export declare function getPointToPointRelationshipStatistics(
  briosa: BriosaClient,
  input: GetPointToPointRelationshipStatisticsInput,
  options?: BriosaCallOptions,
): Promise<PointToPointRelationshipStatistics>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Group To Nominal Group View Zooming {/* #set-group-to-nominal-group-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming) · [gRPC Contract](/api/grpc/relationship-operations#set-group-to-nominal-group-view-zooming)

```ts
export interface SetGroupToNominalGroupViewZoomingInput {
  readonly relationshipName: CollectionItemName;
  readonly useClosestPoint?: boolean;
  readonly showClosestPointWatchWindow?: boolean;
  readonly useViewZooming?: boolean;
  readonly ignorePointsBeyondThreshold?: boolean;
  readonly proximityThreshold?: number;
}

export declare function setGroupToNominalGroupViewZooming(
  briosa: BriosaClient,
  input: SetGroupToNominalGroupViewZoomingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Associated Data {/* #set-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-associated-data)

```ts
export interface SetRelationshipAssociatedDataInput {
  readonly relationshipName: CollectionItemName;
  readonly individualPoints?: Iterable<PointName>;
  readonly pointGroups?: Iterable<CollectionObjectName>;
  readonly pointClouds?: Iterable<CollectionObjectName>;
  readonly objects?: Iterable<CollectionObjectName>;
  readonly ignoreEmptyArguments?: boolean;
}

export declare function setRelationshipAssociatedData(
  briosa: BriosaClient,
  input: SetRelationshipAssociatedDataInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Associated Data {/* #get-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-associated-data)

```ts
export interface GetRelationshipAssociatedDataInput {
  readonly relationshipName: CollectionItemName;
}

export declare function getRelationshipAssociatedData(
  briosa: BriosaClient,
  input: GetRelationshipAssociatedDataInput,
  options?: BriosaCallOptions,
): Promise<RelationshipAssociatedData>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Points to Points Relationship Associated Data {/* #set-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data) · [gRPC Contract](/api/grpc/relationship-operations#set-points-to-points-relationship-associated-data)

```ts
export interface SetPointsToPointsRelationshipAssociatedDataInput {
  readonly relationshipName: CollectionItemName;
  readonly nominalPoints?: Iterable<PointName>;
  readonly actualPoints?: Iterable<PointName>;
  readonly ignoreEmptyArguments?: boolean;
}

export declare function setPointsToPointsRelationshipAssociatedData(
  briosa: BriosaClient,
  input: SetPointsToPointsRelationshipAssociatedDataInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Points to Points Relationship Associated Data {/* #get-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data) · [gRPC Contract](/api/grpc/relationship-operations#get-points-to-points-relationship-associated-data)

```ts
export interface GetPointsToPointsRelationshipAssociatedDataInput {
  readonly relationshipName: CollectionItemName;
}

export declare function getPointsToPointsRelationshipAssociatedData(
  briosa: BriosaClient,
  input: GetPointsToPointsRelationshipAssociatedDataInput,
  options?: BriosaCallOptions,
): Promise<PointsToPointsRelationshipAssociatedData>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Clouds to Nominal Geometry 3D {/* #auto-filter-clouds-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [gRPC Contract](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

```ts
export interface AutoFilterCloudsToNominalGeometry3DInput {
  readonly autoFilterTargetRelationships: Iterable<CollectionItemName>;
  readonly clouds: Iterable<CollectionObjectName>;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly filterProximitySettings3D?: FilterProximitySettings;
  readonly useFeatureSpecificFilterSettings?: boolean;
}

export declare function autoFilterCloudsToNominalGeometry3D(
  briosa: BriosaClient,
  input: AutoFilterCloudsToNominalGeometry3DInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Clouds to Nominal Geometry 2D {/* #auto-filter-clouds-to-nominal-geometry-2d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [gRPC Contract](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

```ts
export interface AutoFilterCloudsToNominalGeometry2DInput {
  readonly autoFilterTargetRelationships: Iterable<CollectionItemName>;
  readonly clouds: Iterable<CollectionObjectName>;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly filterProximitySettings2D?: FilterProximitySettings;
  readonly geometryExtractionTolerance?: number;
  readonly useFeatureSpecificFilterSettings?: boolean;
}

export declare function autoFilterCloudsToNominalGeometry2D(
  briosa: BriosaClient,
  input: AutoFilterCloudsToNominalGeometry2DInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Points to Nominal Geometry 3D {/* #auto-filter-points-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [gRPC Contract](/api/grpc/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

```ts
export interface AutoFilterPointsToNominalGeometry3DInput {
  readonly autoFilterTargetRelationships: Iterable<CollectionItemName>;
  readonly points: Iterable<PointName>;
  readonly filterProximitySettings3D?: FilterProximitySettings;
}

export declare function autoFilterPointsToNominalGeometry3D(
  briosa: BriosaClient,
  input: AutoFilterPointsToNominalGeometry3DInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Points/Groups/Clouds to Surface Faces {/* #auto-filter-pointsgroupsclouds-to-surface-faces */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [gRPC Contract](/api/grpc/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

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

export declare function autoFilterPointsGroupsCloudsToSurfaceFaces(
  briosa: BriosaClient,
  input: AutoFilterPointsGroupsCloudsToSurfaceFacesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Extract Geometry From Point Clouds {/* #extract-geometry-from-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#extract-geometry-from-point-clouds) · [gRPC Contract](/api/grpc/relationship-operations#extract-geometry-from-point-clouds)

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

export declare function extractGeometryFromPointClouds(
  briosa: BriosaClient,
  input: ExtractGeometryFromPointCloudsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Points to Objects Map {/* #create-points-to-objects-map */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map) · [gRPC Contract](/api/grpc/relationship-operations#create-points-to-objects-map)

```ts
export interface CreatePointsToObjectsMapInput {
  readonly points?: Iterable<PointName>;
  readonly groups?: Iterable<CollectionObjectName>;
  readonly objects: Iterable<CollectionObjectName>;
  readonly proximityTolerance?: number;
  readonly pointsToObjectsMapName: string;
}

export declare function createPointsToObjectsMap(
  briosa: BriosaClient,
  input: CreatePointsToObjectsMapInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Objects From Points to Objects Map (Point List) {/* #get-objects-from-points-to-objects-map-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [gRPC Contract](/api/grpc/relationship-operations#get-objects-from-points-to-objects-map-point-list)

```ts
export interface GetObjectsFromPointsToObjectsMapPointListInput {
  readonly pointsToObjectsMapName: string;
  readonly points: Iterable<PointName>;
}

export declare function getObjectsFromPointsToObjectsMapPointList(
  briosa: BriosaClient,
  input: GetObjectsFromPointsToObjectsMapPointListInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Compute Geometry Relationship Uncertainties {/* #compute-geometry-relationship-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties) · [gRPC Contract](/api/grpc/relationship-operations#compute-geometry-relationship-uncertainties)

```ts
export interface ComputeGeometryRelationshipUncertaintiesInput {
  readonly relationshipName: CollectionItemName;
  readonly displayResults?: boolean;
}

export declare function computeGeometryRelationshipUncertainties(
  briosa: BriosaClient,
  input: ComputeGeometryRelationshipUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Cloud to Swatch Relationship {/* #make-cloud-to-swatch-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-cloud-to-swatch-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-cloud-to-swatch-relationship)

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

export declare function makeCloudToSwatchRelationship(
  briosa: BriosaClient,
  input: MakeCloudToSwatchRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Criteria Name List {/* #get-geom-relationship-criteria-name-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-criteria-name-list)

```ts
export interface GetGeomRelationshipCriteriaNameListInput {
  readonly relationshipName: CollectionItemName;
  readonly includeAllCriteria?: boolean;
}

export declare function getGeomRelationshipCriteriaNameList(
  briosa: BriosaClient,
  input: GetGeomRelationshipCriteriaNameListInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Status {/* #get-relationship-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-status) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-status)

```ts
export interface GetRelationshipStatusInput {
  readonly relationshipName: CollectionItemName;
}

export declare function getRelationshipStatus(
  briosa: BriosaClient,
  input: GetRelationshipStatusInput,
  options?: BriosaCallOptions,
): Promise<RelationshipStatusFlags>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Relationship Types {/* #relationship-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Dynamic Relationship Types {/* #dynamic-relationship-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Relationship Fit and Statistics Types {/* #relationship-fit-and-statistics-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Associated-Data and Auto-Filter Types {/* #associated-data-and-auto-filter-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Final Reconciled Subgroup Types {/* #final-reconciled-subgroup-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
