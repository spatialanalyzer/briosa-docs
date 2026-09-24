---
title: Analysis Operations
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Analysis Operations

[SA 2026.1.0529.7](/api/javascript/analysis-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/analysis-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Angle Between Line and Plane {/* #angle-between-line-and-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-line-and-plane)

```ts
export interface AngleBetweenLineAndPlaneInput {
  readonly selectedLine: CollectionObjectName;
  readonly selectedPlane: CollectionObjectName;
  readonly nominalAngle?: number;
  readonly angleTolerance?: number;
}

export declare function angleBetweenLineAndPlane(
  briosa: BriosaClient,
  input: AngleBetweenLineAndPlaneInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angleTolerance` | 0.0 disables this tolerance. |

## Angle Between Two Lines {/* #angle-between-two-lines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-two-lines)

```ts
export interface AngleBetweenTwoLinesInput {
  readonly line1: CollectionObjectName;
  readonly line2: CollectionObjectName;
  readonly nominalAngle?: number;
  readonly angleTolerance?: number;
}

export declare function angleBetweenTwoLines(
  briosa: BriosaClient,
  input: AngleBetweenTwoLinesInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angleTolerance` | 0.0 disables this tolerance. |

## Angle Between Two Planes' normals {/* #angle-between-two-planes-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-two-planes-normals)

```ts
export interface AngleBetweenTwoPlanesNormalsInput {
  readonly planeA: CollectionObjectName;
  readonly planeB: CollectionObjectName;
  readonly nominalAngle?: number;
  readonly angleTolerance?: number;
}

export declare function angleBetweenTwoPlanesNormals(
  briosa: BriosaClient,
  input: AngleBetweenTwoPlanesNormalsInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angleTolerance` | 0.0 disables this tolerance. |

## Best Fit Transformation - Group to Group {/* #best-fit-transformation---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#best-fit-transformation---group-to-group)

```ts
export interface BestFitTransformationGroupToGroupInput {
  readonly referenceGroup: CollectionObjectName;
  readonly correspondingGroup: CollectionObjectName;
  readonly showInterface?: boolean;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
  readonly allowScale?: boolean;
  readonly allowX?: boolean;
  readonly allowY?: boolean;
  readonly allowZ?: boolean;
  readonly allowRx?: boolean;
  readonly allowRy?: boolean;
  readonly allowRz?: boolean;
  readonly lockDegreesOfFreedom?: boolean;
  readonly generateEvent?: boolean;
  readonly filePathForCsvTextReport: FileReference;
}

export declare function bestFitTransformationGroupToGroup(
  briosa: BriosaClient,
  input: BestFitTransformationGroupToGroupInput,
  options?: BriosaCallOptions,
): Promise<BestFitTransformationGroupToGroupResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |
| `filePathForCsvTextReport` | Requires Show Interface to be true. |

## Compute Group to Group Orientation (Rx,Ry,Rz) {/* #compute-group-to-group-orientation-rxryrz */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#compute-group-to-group-orientation-rxryrz)

```ts
export interface ComputeGroupToGroupOrientationRxRyRzInput {
  readonly referenceGroup: CollectionObjectName;
  readonly correspondingGroup: CollectionObjectName;
}

export declare function computeGroupToGroupOrientationRxRyRz(
  briosa: BriosaClient,
  input: ComputeGroupToGroupOrientationRxRyRzInput,
  options?: BriosaCallOptions,
): Promise<ComputeGroupToGroupOrientationRxRyRzResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Uncertainty Cloud Point Sets {/* #create-point-uncertainty-cloud-point-sets */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#create-point-uncertainty-cloud-point-sets)

```ts
export interface CreatePointUncertaintyCloudPointSetsInput {
  readonly pointNameList: Iterable<PointName>;
  readonly numberOfSamples?: number;
  readonly uncertaintyReferenceFrameMode?: string;
  readonly groupingMode?: string;
  readonly pointSetMode?: string;
}

export declare function createPointUncertaintyCloudPointSets(
  briosa: BriosaClient,
  input: CreatePointUncertaintyCloudPointSetsInput,
  options?: BriosaCallOptions,
): Promise<CreatePointUncertaintyCloudPointSetsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Uncertainty Fields {/* #create-point-uncertainty-fields */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#create-point-uncertainty-fields)

```ts
export interface CreatePointUncertaintyFieldsInput {
  readonly pointNameList: Iterable<PointName>;
  readonly numberOfSamples?: number;
}

export declare function createPointUncertaintyFields(
  briosa: BriosaClient,
  input: CreatePointUncertaintyFieldsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Fit Geometry to Point Group {/* #fit-geometry-to-point-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-point-group)

```ts
export interface FitGeometryToPointGroupInput {
  readonly geometryType: GeometryType;
  readonly groupToFit: CollectionObjectName;
  readonly resultingObjectName: CollectionObjectName;
  readonly fitProfileName?: string;
  readonly reportDeviations?: boolean;
  readonly fitInterfaceTolerance?: number;
  readonly ignoreOutOfTolerancePoints?: boolean;
  readonly startingConditionGeometry: CollectionObjectName;
}

export declare function fitGeometryToPointGroup(
  briosa: BriosaClient,
  input: FitGeometryToPointGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fitInterfaceTolerance` | -1.0 uses the profile tolerance. |
| `startingConditionGeometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Fit Geometry to Point Group Projected to Plane {/* #fit-geometry-to-point-group-projected-to-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-point-group-projected-to-plane)

```ts
export interface FitGeometryToPointGroupProjectedToPlaneInput {
  readonly geometryType: GeometryType;
  readonly groupToFit: CollectionObjectName;
  readonly planeName: CollectionObjectName;
  readonly resultingObjectName: CollectionObjectName;
  readonly fitProfileName?: string;
  readonly reportDeviations?: boolean;
  readonly fitInterfaceTolerance?: number;
  readonly ignoreOutOfTolerancePoints?: boolean;
  readonly startingConditionGeometry: CollectionObjectName;
}

export declare function fitGeometryToPointGroupProjectedToPlane(
  briosa: BriosaClient,
  input: FitGeometryToPointGroupProjectedToPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fitInterfaceTolerance` | -1.0 uses the profile tolerance. |
| `startingConditionGeometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Fit Geometry to Points {/* #fit-geometry-to-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-points)

```ts
export interface FitGeometryToPointsInput {
  readonly geometryType: GeometryType;
  readonly pointsToFit: Iterable<PointName>;
  readonly resultingObjectName: CollectionObjectName;
  readonly fitProfileName?: string;
  readonly reportDeviations?: boolean;
  readonly fitInterfaceTolerance?: number;
  readonly ignoreOutOfTolerancePoints?: boolean;
  readonly startingConditionGeometry: CollectionObjectName;
}

export declare function fitGeometryToPoints(
  briosa: BriosaClient,
  input: FitGeometryToPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fitInterfaceTolerance` | -1.0 uses the profile tolerance. |
| `startingConditionGeometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Get B-Spline Properties {/* #get-b-spline-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-b-spline-properties)

```ts
export interface GetBSplinePropertiesInput {
  readonly bSplineName: CollectionObjectName;
}

export declare function getBSplineProperties(
  briosa: BriosaClient,
  input: GetBSplinePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetBSplinePropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Circle Properties {/* #get-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-circle-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-circle-properties)

```ts
export interface GetCirclePropertiesInput {
  readonly circleName: CollectionObjectName;
}

export declare function getCircleProperties(
  briosa: BriosaClient,
  input: GetCirclePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetCirclePropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cone Properties {/* #get-cone-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cone-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-cone-properties)

```ts
export interface GetConePropertiesInput {
  readonly coneName: CollectionObjectName;
}

export declare function getConeProperties(
  briosa: BriosaClient,
  input: GetConePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetConePropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `coneEndPoint` | Expressed in working coordinates. |
| `coneAxis` | Expressed in working coordinates. |

## Get Coordinate for i-th Point in Point Set {/* #get-coordinate-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-coordinate-for-i-th-point-in-point-set)

```ts
export interface GetCoordinateForIthPointInPointSetInput {
  readonly pointSet: CollectionObjectName;
  readonly pointSetIndex?: number;
}

export declare function getCoordinateForIthPointInPointSet(
  briosa: BriosaClient,
  input: GetCoordinateForIthPointInPointSetInput,
  options?: BriosaCallOptions,
): Promise<GetCoordinateForIthPointInPointSetResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cylinder Properties {/* #get-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-cylinder-properties)

```ts
export interface GetCylinderPropertiesInput {
  readonly cylinderName: CollectionObjectName;
}

export declare function getCylinderProperties(
  briosa: BriosaClient,
  input: GetCylinderPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetCylinderPropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Ellipse Properties {/* #get-ellipse-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-ellipse-properties)

```ts
export interface GetEllipsePropertiesInput {
  readonly ellipseName: CollectionObjectName;
}

export declare function getEllipseProperties(
  briosa: BriosaClient,
  input: GetEllipsePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetEllipsePropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Euler Parameters for Frame {/* #get-euler-parameters-for-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-euler-parameters-for-frame)

```ts
export interface GetEulerParametersForFrameInput {
  readonly frame: CollectionObjectName;
}

export declare function getEulerParametersForFrame(
  briosa: BriosaClient,
  input: GetEulerParametersForFrameInput,
  options?: BriosaCallOptions,
): Promise<GetEulerParametersForFrameResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Euler Parameters for i-th Frame in Frame Set {/* #get-euler-parameters-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set)

```ts
export interface GetEulerParametersForIthFrameInFrameSetInput {
  readonly frameSet: CollectionObjectName;
  readonly frameSetIndex?: number;
}

export declare function getEulerParametersForIthFrameInFrameSet(
  briosa: BriosaClient,
  input: GetEulerParametersForIthFrameInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<GetEulerParametersForIthFrameInFrameSetResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Collection Name {/* #get-i-th-collection-name */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-i-th-collection-name)

```ts
export interface GetIthCollectionNameInput {
  readonly collectionIndex?: number;
}

export declare function getIthCollectionName(
  briosa: BriosaClient,
  input: GetIthCollectionNameInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Point From Group {/* #get-i-th-point-from-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-i-th-point-from-group)

```ts
export interface GetIthPointFromGroupInput {
  readonly groupName: CollectionObjectName;
  readonly pointIndex?: number;
}

export declare function getIthPointFromGroup(
  briosa: BriosaClient,
  input: GetIthPointFromGroupInput,
  options?: BriosaCallOptions,
): Promise<GetIthPointFromGroupResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Line Properties {/* #get-line-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-line-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-line-properties)

```ts
export interface GetLinePropertiesInput {
  readonly lineName: CollectionObjectName;
}

export declare function getLineProperties(
  briosa: BriosaClient,
  input: GetLinePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetLinePropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Auxiliary Data {/* #get-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-auxiliary-data)

```ts
export interface GetMeasurementAuxiliaryDataInput {
  readonly pointName: PointName;
  readonly auxiliaryName?: string;
}

export declare function getMeasurementAuxiliaryData(
  briosa: BriosaClient,
  input: GetMeasurementAuxiliaryDataInput,
  options?: BriosaCallOptions,
): Promise<GetMeasurementAuxiliaryDataResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Info Data {/* #get-measurement-info-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-info-data)

```ts
export interface GetMeasurementInfoDataInput {
  readonly pointName: PointName;
}

export declare function getMeasurementInfoData(
  briosa: BriosaClient,
  input: GetMeasurementInfoDataInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Weather Data {/* #get-measurement-weather-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-weather-data)

```ts
export interface GetMeasurementWeatherDataInput {
  readonly pointName: PointName;
}

export declare function getMeasurementWeatherData(
  briosa: BriosaClient,
  input: GetMeasurementWeatherDataInput,
  options?: BriosaCallOptions,
): Promise<GetMeasurementWeatherDataResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in inches of mercury. |
| `humidity` | Relative humidity in percent. |

## Get Number of Collections {/* #get-number-of-collections */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-collections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-collections)

```ts
export declare function getNumberOfCollections(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Frames In Frame Set {/* #get-number-of-frames-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-frames-in-frame-set)

```ts
export interface GetNumberOfFramesInFrameSetInput {
  readonly frameSetContainer: CollectionObjectName;
}

export declare function getNumberOfFramesInFrameSet(
  briosa: BriosaClient,
  input: GetNumberOfFramesInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Points in Group {/* #get-number-of-points-in-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-points-in-group)

```ts
export interface GetNumberOfPointsInGroupInput {
  readonly groupName: CollectionObjectName;
}

export declare function getNumberOfPointsInGroup(
  briosa: BriosaClient,
  input: GetNumberOfPointsInGroupInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Points In Point Set {/* #get-number-of-points-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-points-in-point-set)

```ts
export interface GetNumberOfPointsInPointSetInput {
  readonly pointSetContainer: CollectionObjectName;
}

export declare function getNumberOfPointsInPointSet(
  briosa: BriosaClient,
  input: GetNumberOfPointsInPointSetInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Object Reporting Frame {/* #get-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-object-reporting-frame)

```ts
export interface GetObjectReportingFrameInput {
  readonly objectName: CollectionObjectName;
}

export declare function getObjectReportingFrame(
  briosa: BriosaClient,
  input: GetObjectReportingFrameInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Plane Properties {/* #get-plane-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-plane-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-plane-properties)

```ts
export interface GetPlanePropertiesInput {
  readonly planeName: CollectionObjectName;
}

export declare function getPlaneProperties(
  briosa: BriosaClient,
  input: GetPlanePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetPlanePropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate {/* #get-point-coordinate */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate)

```ts
export interface GetPointCoordinateInput {
  readonly pointName: PointName;
}

export declare function getPointCoordinate(
  briosa: BriosaClient,
  input: GetPointCoordinateInput,
  options?: BriosaCallOptions,
): Promise<GetPointCoordinateResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate (Cylindrical) {/* #get-point-coordinate-cylindrical */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate-cylindrical)

```ts
export interface GetPointCoordinateCylindricalInput {
  readonly pointName: PointName;
}

export declare function getPointCoordinateCylindrical(
  briosa: BriosaClient,
  input: GetPointCoordinateCylindricalInput,
  options?: BriosaCallOptions,
): Promise<GetPointCoordinateCylindricalResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate (Polar) {/* #get-point-coordinate-polar */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate-polar)

```ts
export interface GetPointCoordinatePolarInput {
  readonly pointName: PointName;
}

export declare function getPointCoordinatePolar(
  briosa: BriosaClient,
  input: GetPointCoordinatePolarInput,
  options?: BriosaCallOptions,
): Promise<GetPointCoordinatePolarResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Properties {/* #get-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-properties)

```ts
export interface GetPointPropertiesInput {
  readonly pointName: PointName;
}

export declare function getPointProperties(
  briosa: BriosaClient,
  input: GetPointPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetPointPropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point To Line Distance {/* #get-point-to-line-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-to-line-distance)

```ts
export interface GetPointToLineDistanceInput {
  readonly point: PointName;
  readonly line: CollectionObjectName;
}

export declare function getPointToLineDistance(
  briosa: BriosaClient,
  input: GetPointToLineDistanceInput,
  options?: BriosaCallOptions,
): Promise<GetPointToLineDistanceResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point To Point Distance {/* #get-point-to-point-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-to-point-distance)

```ts
export interface GetPointToPointDistanceInput {
  readonly firstPoint: PointName;
  readonly secondPoint: PointName;
}

export declare function getPointToPointDistance(
  briosa: BriosaClient,
  input: GetPointToPointDistanceInput,
  options?: BriosaCallOptions,
): Promise<GetPointToPointDistanceResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Tolerance {/* #get-point-tolerance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-tolerance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-tolerance)

```ts
export interface GetPointToleranceInput {
  readonly pointName: PointName;
}

export declare function getPointTolerance(
  briosa: BriosaClient,
  input: GetPointToleranceInput,
  options?: BriosaCallOptions,
): Promise<GetPointToleranceResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Slot Properties {/* #get-slot-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-slot-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-slot-properties)

```ts
export interface GetSlotPropertiesInput {
  readonly slotName: CollectionObjectName;
}

export declare function getSlotProperties(
  briosa: BriosaClient,
  input: GetSlotPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetSlotPropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `slotTransform` | Expressed in working coordinates. |
| `center` | Expressed in working coordinates. |
| `normalDirection` | Expressed in working coordinates. |
| `centerlinePt1` | Expressed in working coordinates. |
| `centerlinePt2` | Expressed in working coordinates. |

## Get Sphere Properties {/* #get-sphere-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-sphere-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-sphere-properties)

```ts
export interface GetSpherePropertiesInput {
  readonly sphereName: CollectionObjectName;
}

export declare function getSphereProperties(
  briosa: BriosaClient,
  input: GetSpherePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetSpherePropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Surface Physical Stats {/* #get-surface-physical-stats */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-surface-physical-stats)

```ts
export interface GetSurfacePhysicalStatsInput {
  readonly surfaceName: CollectionObjectName;
}

export declare function getSurfacePhysicalStats(
  briosa: BriosaClient,
  input: GetSurfacePhysicalStatsInput,
  options?: BriosaCallOptions,
): Promise<GetSurfacePhysicalStatsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Timestamp for i-th Frame in Frame Set {/* #get-timestamp-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set)

```ts
export interface GetTimestampForIthFrameInFrameSetInput {
  readonly frameSet: CollectionObjectName;
  readonly frameSetIndex?: number;
}

export declare function getTimestampForIthFrameInFrameSet(
  briosa: BriosaClient,
  input: GetTimestampForIthFrameInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Timestamp for i-th Point in Point Set {/* #get-timestamp-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-timestamp-for-i-th-point-in-point-set)

```ts
export interface GetTimestampForIthPointInPointSetInput {
  readonly pointSet: CollectionObjectName;
  readonly pointSetIndex?: number;
}

export declare function getTimestampForIthPointInPointSet(
  briosa: BriosaClient,
  input: GetTimestampForIthPointInPointSetInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Torus Properties {/* #get-torus-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-torus-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-torus-properties)

```ts
export interface GetTorusPropertiesInput {
  readonly torusName: CollectionObjectName;
}

export declare function getTorusProperties(
  briosa: BriosaClient,
  input: GetTorusPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetTorusPropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform for i-th Frame in Frame Set {/* #get-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-transform-for-i-th-frame-in-frame-set)

```ts
export interface GetTransformForIthFrameInFrameSetInput {
  readonly frameSet: CollectionObjectName;
  readonly frameSetIndex?: number;
}

export declare function getTransformForIthFrameInFrameSet(
  briosa: BriosaClient,
  input: GetTransformForIthFrameInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Group To Surface Fit {/* #group-to-surface-fit */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#group-to-surface-fit)

```ts
export interface GroupToSurfaceFitInput {
  readonly groupToFit: CollectionObjectName;
  readonly surface: CollectionObjectName;
  readonly doConventionalFit?: boolean;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
}

export declare function groupToSurfaceFit(
  briosa: BriosaClient,
  input: GroupToSurfaceFitInput,
  options?: BriosaCallOptions,
): Promise<GroupToSurfaceFitResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Import Geometry Fit Profiles {/* #import-geometry-fit-profiles */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#import-geometry-fit-profiles)

```ts
export interface ImportGeometryFitProfilesInput {
  readonly geometryFitProfilesFilePath: FileReference;
  readonly overwriteProfilesWithSameName?: boolean;
}

export declare function importGeometryFitProfiles(
  briosa: BriosaClient,
  input: ImportGeometryFitProfilesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Is Object of Type {/* #is-object-of-type */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#is-object-of-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#is-object-of-type)

```ts
export interface IsObjectOfTypeInput {
  readonly objectName: CollectionObjectName;
  readonly objectType?: ObjectType;
}

export declare function isObjectOfType(
  briosa: BriosaClient,
  input: IsObjectOfTypeInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Circle Fit Profile {/* #make-circle-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-circle-fit-profile)

```ts
export interface MakeCircleFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset?: number;
  readonly measuredSideForPlanarOffset?: MeasuredSideForPlanarOffset;
  readonly overridePlanarOffset?: number;
  readonly planarOffsetDirection?: NormalDirection;
  readonly lockRadius?: number;
  readonly circleComputationTechnique?: CompTechnique;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Center?: boolean;
  readonly cardinalPt2PointOnNormal?: boolean;
}

export declare function makeCircleFitProfile(
  briosa: BriosaClient,
  input: MakeCircleFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `overridePlanarOffset` | -1.0 uses the current offset. |
| `lockRadius` | -1.0 leaves this dimension unlocked. |

## Make Cone Fit Profile {/* #make-cone-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-cone-fit-profile)

```ts
export interface MakeConeFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset?: number;
  readonly lockAngleInDegrees?: number;
  readonly useExhaustiveSearch?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Vertex?: boolean;
  readonly cardinalPt2PointOnAxis?: boolean;
  readonly cardinalPt3CutPointOnAxis?: boolean;
}

export declare function makeConeFitProfile(
  briosa: BriosaClient,
  input: MakeConeFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `lockAngleInDegrees` | -1.0 leaves this dimension unlocked. |

## Make Cylinder Fit Profile {/* #make-cylinder-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-cylinder-fit-profile)

```ts
export interface MakeCylinderFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset?: number;
  readonly lockRadius?: number;
  readonly lockedRadiusFitMethod?: FitMethod;
  readonly cylinderComputationTechnique?: CompTechnique;
  readonly useExhaustiveSearch?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1BeginPt?: boolean;
  readonly cardinalPt2EndPt?: boolean;
  readonly cardinalPt3Center?: boolean;
}

export declare function makeCylinderFitProfile(
  briosa: BriosaClient,
  input: MakeCylinderFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `lockRadius` | -1.0 leaves this dimension unlocked. |

## Make Ellipse Fit Profile {/* #make-ellipse-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-ellipse-fit-profile)

```ts
export interface MakeEllipseFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset?: number;
  readonly measuredSideForPlanarOffset?: MeasuredSideForPlanarOffset;
  readonly overridePlanarOffset?: number;
  readonly planarOffsetDirection?: NormalDirection;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Center?: boolean;
  readonly cardinalPt2PointOnNormal?: boolean;
  readonly cardinalPt3FocalPt1?: boolean;
  readonly cardinalPt4FocalPt2?: boolean;
}

export declare function makeEllipseFitProfile(
  briosa: BriosaClient,
  input: MakeEllipseFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `overridePlanarOffset` | -1.0 uses the current offset. |

## Make Line Fit Profile {/* #make-line-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-line-fit-profile)

```ts
export interface MakeLineFitProfileInput {
  readonly fitProfileName?: string;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1PointA?: boolean;
  readonly cardinalPt2PointB?: boolean;
  readonly cardinalPt3MidPoint?: boolean;
}

export declare function makeLineFitProfile(
  briosa: BriosaClient,
  input: MakeLineFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Paraboloid Fit Profile {/* #make-paraboloid-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-paraboloid-fit-profile)

```ts
export interface MakeParaboloidFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset?: number;
  readonly lockFocalLength?: number;
  readonly degreeOfFreedom?: DegreeOfFreedom;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Vertex?: boolean;
  readonly cardinalPt2FocalPoint?: boolean;
}

export declare function makeParaboloidFitProfile(
  briosa: BriosaClient,
  input: MakeParaboloidFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `lockFocalLength` | -1.0 leaves this dimension unlocked. |

## Make Plane Fit Profile {/* #make-plane-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-plane-fit-profile)

```ts
export interface MakePlaneFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForPlanarOffset?: MeasuredSideForPlanarOffset;
  readonly overridePlanarOffset?: number;
  readonly planarOffsetDirection?: NormalDirection;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Centroid?: boolean;
  readonly cardinalPt2PointOnNormal?: boolean;
}

export declare function makePlaneFitProfile(
  briosa: BriosaClient,
  input: MakePlaneFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overridePlanarOffset` | -1.0 uses the current offset. |

## Make Slot Fit Profile {/* #make-slot-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-slot-fit-profile)

```ts
export interface MakeSlotFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset?: number;
  readonly measuredSideForPlanarOffset?: MeasuredSideForPlanarOffset;
  readonly overridePlanarOffset?: number;
  readonly planarOffsetDirection?: NormalDirection;
  readonly slotType?: SlotType;
  readonly slotComputationTechnique?: CompTechnique;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Center?: boolean;
  readonly cardinalPt2PointOnNormal?: boolean;
  readonly cardinalPt3CenterlinePt1?: boolean;
  readonly cardinalPt4CenterlinePt2?: boolean;
}

export declare function makeSlotFitProfile(
  briosa: BriosaClient,
  input: MakeSlotFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `overridePlanarOffset` | -1.0 uses the current offset. |

## Make Sphere Fit Profile {/* #make-sphere-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-sphere-fit-profile)

```ts
export interface MakeSphereFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset?: number;
  readonly lockRadius?: number;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Center?: boolean;
  readonly computationMethod?: SphereFitComputationMode;
}

export declare function makeSphereFitProfile(
  briosa: BriosaClient,
  input: MakeSphereFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `lockRadius` | -1.0 leaves this dimension unlocked. |

## Mushroom Target Hole Inspection {/* #mushroom-target-hole-inspection */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#mushroom-target-hole-inspection)

```ts
export interface MushroomTargetHoleInspectionInput {
  readonly namePrefixForIntermediateConstructions?: string;
  readonly spherePointsGroupName: CollectionObjectName;
  readonly sphereTargetRadius?: number;
  readonly targetContactPlane: CollectionObjectName;
  readonly pointToCreateAtHole: PointName;
}

export declare function mushroomTargetHoleInspection(
  briosa: BriosaClient,
  input: MushroomTargetHoleInspectionInput,
  options?: BriosaCallOptions,
): Promise<MushroomTargetHoleInspectionResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Patch Normal Shift - Hole / Pin {/* #patch-normal-shift---hole--pin */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#patch-normal-shift---hole--pin)

```ts
export interface PatchNormalShiftHolePinInput {
  readonly planePointsGroupName: CollectionObjectName;
  readonly perimeterPointsGroupName: CollectionObjectName;
  readonly resultingPointName: PointName;
  readonly additionalMaterialThickness?: number;
}

export declare function patchNormalShiftHolePin(
  briosa: BriosaClient,
  input: PatchNormalShiftHolePinInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Patch Normal Shift - Point {/* #patch-normal-shift---point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#patch-normal-shift---point)

```ts
export interface PatchNormalShiftPointInput {
  readonly planePointsGroupName: CollectionObjectName;
  readonly pointToShift: PointName;
  readonly resultingPointName: PointName;
  readonly additionalMaterialThickness?: number;
}

export declare function patchNormalShiftPoint(
  briosa: BriosaClient,
  input: PatchNormalShiftPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Clouds to Objects {/* #query-clouds-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-clouds-to-objects)

```ts
export interface QueryCloudsToObjectsInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly objectNames: Iterable<CollectionObjectName>;
  readonly resultingObjectName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
  readonly proximity?: number;
  readonly skipFactor?: number;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
}

export declare function queryCloudsToObjects(
  briosa: BriosaClient,
  input: QueryCloudsToObjectsInput,
  options?: BriosaCallOptions,
): Promise<QueryCloudsToObjectsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Query Clouds to Surface {/* #query-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-clouds-to-surface)

```ts
export interface QueryCloudsToSurfaceInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterSurfaceName: CollectionObjectName;
  readonly resultingObjectName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
  readonly proximity?: number;
  readonly skipFactor?: number;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
}

export declare function queryCloudsToSurface(
  briosa: BriosaClient,
  input: QueryCloudsToSurfaceInput,
  options?: BriosaCallOptions,
): Promise<QueryCloudsToSurfaceResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Query Frame to Frame {/* #query-frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-frame-to-frame)

```ts
export interface QueryFrameToFrameInput {
  readonly referenceFrameName: CollectionObjectName;
  readonly correspondingFrameName: CollectionObjectName;
}

export declare function queryFrameToFrame(
  briosa: BriosaClient,
  input: QueryFrameToFrameInput,
  options?: BriosaCallOptions,
): Promise<QueryFrameToFrameResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rx` | MP qualifier: Roll. |
| `ry` | MP qualifier: Pitch. |
| `rz` | MP qualifier: Yaw. |

## Query Groups to Objects {/* #query-groups-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-groups-to-objects)

```ts
export interface QueryGroupsToObjectsInput {
  readonly groupNameList: Iterable<CollectionObjectName>;
  readonly objectNameList: Iterable<CollectionObjectName>;
  readonly resultingObjectName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
  readonly showResultsDialog?: boolean;
}

export declare function queryGroupsToObjects(
  briosa: BriosaClient,
  input: QueryGroupsToObjectsInput,
  options?: BriosaCallOptions,
): Promise<QueryGroupsToObjectsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `groupNameList` | MP qualifier: Groups to Project. |
| `objectNameList` | MP qualifier: Objects to Project to. |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Query Point to Objects {/* #query-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-point-to-objects)

```ts
export interface QueryPointToObjectsInput {
  readonly pointName: PointName;
  readonly objects: Iterable<CollectionObjectName>;
  readonly ignoreTargetOffset?: boolean;
}

export declare function queryPointToObjects(
  briosa: BriosaClient,
  input: QueryPointToObjectsInput,
  options?: BriosaCallOptions,
): Promise<QueryPointToObjectsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Point to Point Along Curve {/* #query-point-to-point-along-curve */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-point-to-point-along-curve)

```ts
export interface QueryPointToPointAlongCurveInput {
  readonly value1stPoint: PointName;
  readonly value2ndPoint: PointName;
  readonly curve: CollectionObjectName;
}

export declare function queryPointToPointAlongCurve(
  briosa: BriosaClient,
  input: QueryPointToPointAlongCurveInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Points to Circle {/* #query-points-to-circle */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-circle) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-circle)

```ts
export interface QueryPointsToCircleInput {
  readonly circleName: CollectionObjectName;
  readonly pointGroupName: CollectionObjectName;
  readonly isInsideMeasurement?: boolean;
  readonly autoScaleVectorsToOfRadius?: number;
  readonly vectorGroupNameForRadial: CollectionObjectName;
  readonly vectorGroupNameForPlanar: CollectionObjectName;
  readonly vectorGroupNameForCombined: CollectionObjectName;
}

export declare function queryPointsToCircle(
  briosa: BriosaClient,
  input: QueryPointsToCircleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Points to Objects {/* #query-points-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-objects)

```ts
export interface QueryPointsToObjectsInput {
  readonly pointNames: Iterable<PointName>;
  readonly objectNameList: Iterable<CollectionObjectName>;
  readonly resultingObjectName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
  readonly showResultsDialog?: boolean;
}

export declare function queryPointsToObjects(
  briosa: BriosaClient,
  input: QueryPointsToObjectsInput,
  options?: BriosaCallOptions,
): Promise<QueryPointsToObjectsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `objectNameList` | MP qualifier: Objects to Project to. |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Query Points to Single Point {/* #query-points-to-single-point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-single-point)

```ts
export interface QueryPointsToSinglePointInput {
  readonly pointNames: Iterable<PointName>;
  readonly singlePoint: PointName;
  readonly showVectorProperties?: boolean;
}

export declare function queryPointsToSinglePoint(
  briosa: BriosaClient,
  input: QueryPointsToSinglePointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Re-Compute Calculated Items {/* #re-compute-calculated-items */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#re-compute-calculated-items)

```ts
export interface ReComputeCalculatedItemsInput {
  readonly targetsFromShots?: boolean;
  readonly hiddenPoints?: boolean;
  readonly relationships?: boolean;
}

export declare function reComputeCalculatedItems(
  briosa: BriosaClient,
  input: ReComputeCalculatedItemsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename points based on inter-point distance to reference points {/* #rename-points-based-on-inter-point-distance-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points)

```ts
export interface RenamePointsBasedOnInterPointDistanceToReferencePointsInput {
  readonly referenceGroupName: CollectionObjectName;
  readonly groupToRenamePoints: CollectionObjectName;
  readonly distanceThreshold?: number;
  readonly verifyResults?: boolean;
}

export declare function renamePointsBasedOnInterPointDistanceToReferencePoints(
  briosa: BriosaClient,
  input: RenamePointsBasedOnInterPointDistanceToReferencePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename points based on proximity to reference points {/* #rename-points-based-on-proximity-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#rename-points-based-on-proximity-to-reference-points)

```ts
export interface RenamePointsBasedOnProximityToReferencePointsInput {
  readonly referenceGroupName: CollectionObjectName;
  readonly groupToRenamePoints: CollectionObjectName;
  readonly proximityThreshold?: number;
  readonly verifyResults?: boolean;
  readonly renameAllProximatePoints?: boolean;
}

export declare function renamePointsBasedOnProximityToReferencePoints(
  briosa: BriosaClient,
  input: RenamePointsBasedOnProximityToReferencePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse B-Splines {/* #reverse-b-splines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-b-splines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-b-splines)

```ts
export interface ReverseBSplinesInput {
  readonly bSplineList: Iterable<CollectionObjectName>;
}

export declare function reverseBSplines(
  briosa: BriosaClient,
  input: ReverseBSplinesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse Plane Normals {/* #reverse-plane-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-plane-normals)

```ts
export interface ReversePlaneNormalsInput {
  readonly planeList: Iterable<CollectionObjectName>;
}

export declare function reversePlaneNormals(
  briosa: BriosaClient,
  input: ReversePlaneNormalsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse Surface Normals {/* #reverse-surface-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-surface-normals)

```ts
export interface ReverseSurfaceNormalsInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
}

export declare function reverseSurfaceNormals(
  briosa: BriosaClient,
  input: ReverseSurfaceNormalsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Circle Properties {/* #set-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-circle-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-circle-properties)

```ts
export interface SetCirclePropertiesInput {
  readonly circleName: CollectionObjectName;
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly radius?: number;
}

export declare function setCircleProperties(
  briosa: BriosaClient,
  input: SetCirclePropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cylinder Properties {/* #set-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-cylinder-properties)

```ts
export interface SetCylinderPropertiesInput {
  readonly cylinderName: CollectionObjectName;
  readonly beginCoordinate: Vector;
  readonly axisDirection: Vector;
  readonly length?: number;
  readonly diameter?: number;
  readonly nominalsPointInward?: boolean;
  readonly facets?: number;
  readonly enableThetaExtentDisplayMode?: boolean;
  readonly thetaStartInDegrees?: number;
  readonly thetaSpanInDegrees?: number;
}

export declare function setCylinderProperties(
  briosa: BriosaClient,
  input: SetCylinderPropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Default Colorization Options {/* #set-default-colorization-options */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-default-colorization-options)

```ts
export interface SetDefaultColorizationOptionsInput {
  readonly colorizationOptions?: ColorizationOptions;
}

export declare function setDefaultColorizationOptions(
  briosa: BriosaClient,
  input: SetDefaultColorizationOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geometry Relationship Fit Profile {/* #set-geometry-relationship-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-geometry-relationship-fit-profile)

```ts
export interface SetGeometryRelationshipFitProfileInput {
  readonly geometryType: GeometryType;
  readonly relationshipRefList: Iterable<CollectionItemName>;
  readonly fitProfileName?: string;
  readonly applyCardinalPointSettings?: boolean;
}

export declare function setGeometryRelationshipFitProfile(
  briosa: BriosaClient,
  input: SetGeometryRelationshipFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Measurement Auxiliary Data {/* #set-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-measurement-auxiliary-data)

```ts
export interface SetMeasurementAuxiliaryDataInput {
  readonly pointName: PointName;
  readonly auxiliaryName?: string;
  readonly value?: number;
  readonly units?: string;
}

export declare function setMeasurementAuxiliaryData(
  briosa: BriosaClient,
  input: SetMeasurementAuxiliaryDataInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object Reporting Frame {/* #set-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-object-reporting-frame)

```ts
export interface SetObjectReportingFrameInput {
  readonly objectName: CollectionObjectName;
  readonly reportingFrame: CollectionObjectName;
}

export declare function setObjectReportingFrame(
  briosa: BriosaClient,
  input: SetObjectReportingFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Properties {/* #set-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-point-properties)

```ts
export interface SetPointPropertiesInput {
  readonly pointNameList: Iterable<PointName>;
  readonly planarOffset?: number;
  readonly radialOffset?: number;
  readonly positionTolerance: ToleranceVectorOptions;
  readonly componentWeights: Vector;
}

export declare function setPointProperties(
  briosa: BriosaClient,
  input: SetPointPropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Weights From Uncertainties {/* #set-point-weights-from-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-point-weights-from-uncertainties)

```ts
export interface SetPointWeightsFromUncertaintiesInput {
  readonly pointNameList: Iterable<PointName>;
  readonly uncertaintyReferenceFrameMode?: string;
  readonly reportingFrame: CollectionObjectName;
  readonly weightNormalizationMode?: string;
  readonly fixedWeightValue?: number;
  readonly outputWeightedPointGroup: CollectionObjectName;
}

export declare function setPointWeightsFromUncertainties(
  briosa: BriosaClient,
  input: SetPointWeightsFromUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<readonly PointName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform for i-th Frame in Frame Set {/* #set-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-transform-for-i-th-frame-in-frame-set)

```ts
export interface SetTransformForIthFrameInFrameSetInput {
  readonly frameSet: CollectionObjectName;
  readonly frameSetIndex?: number;
  readonly transformInWorking: Transform;
}

export declare function setTransformForIthFrameInFrameSet(
  briosa: BriosaClient,
  input: SetTransformForIthFrameInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Sphere Axis Check {/* #sphere-axis-check */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#sphere-axis-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#sphere-axis-check)

```ts
export interface SphereAxisCheckInput {
  readonly spherePointsGroupName: CollectionObjectName;
  readonly sphereTargetRadius?: number;
  readonly pointToCreateAtSphereCenter: PointName;
  readonly lineDefiningTheAxis: CollectionObjectName;
}

export declare function sphereAxisCheck(
  briosa: BriosaClient,
  input: SphereAxisCheckInput,
  options?: BriosaCallOptions,
): Promise<SphereAxisCheckResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Temperature Compensate a group {/* #temperature-compensate-a-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#temperature-compensate-a-group)

```ts
export interface TemperatureCompensateAGroupInput {
  readonly originalGroup: CollectionObjectName;
  readonly scalingOrigin: FrameName;
  readonly materialCte?: number;
  readonly initialTemperature?: number;
  readonly finalTemperature?: number;
  readonly scaledGroupName: CollectionObjectName;
}

export declare function temperatureCompensateAGroup(
  briosa: BriosaClient,
  input: TemperatureCompensateAGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `scalingOrigin` | MP qualifier: coordinate frame. |
| `materialCte` | Coefficient per degree Fahrenheit. |
| `initialTemperature` | Temperature in degrees Fahrenheit. |
| `finalTemperature` | Temperature in degrees Fahrenheit. |

## Transform Objects - Frame To Frame {/* #transform-objects---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects---frame-to-frame)

```ts
export interface TransformObjectsFrameToFrameInput {
  readonly objectNameList: Iterable<CollectionObjectName>;
  readonly initialFrameName: CollectionObjectName;
  readonly destinationFrameName: CollectionObjectName;
  readonly numberOfSteps?: number;
}

export declare function transformObjectsFrameToFrame(
  briosa: BriosaClient,
  input: TransformObjectsFrameToFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Objects by Delta (About Working Frame) {/* #transform-objects-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects-by-delta-about-working-frame)

```ts
export interface TransformObjectsByDeltaAboutWorkingFrameInput {
  readonly objectsToTransform: Iterable<CollectionObjectName>;
  readonly deltaTransform: Transform;
}

export declare function transformObjectsByDeltaAboutWorkingFrame(
  briosa: BriosaClient,
  input: TransformObjectsByDeltaAboutWorkingFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Objects by Delta (World Transform Operator) {/* #transform-objects-by-delta-world-transform-operator */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects-by-delta-world-transform-operator)

```ts
export interface TransformObjectsByDeltaWorldTransformOperatorInput {
  readonly objectsToTransform: Iterable<CollectionObjectName>;
  readonly deltaTransform: WorldTransform;
}

export declare function transformObjectsByDeltaWorldTransformOperator(
  briosa: BriosaClient,
  input: TransformObjectsByDeltaWorldTransformOperatorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Translate Objects by Delta {/* #translate-objects-by-delta */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#translate-objects-by-delta)

```ts
export interface TranslateObjectsByDeltaInput {
  readonly objectsToTranslate: Iterable<CollectionObjectName>;
  readonly deltaTranslation: Vector;
}

export declare function translateObjectsByDelta(
  briosa: BriosaClient,
  input: TranslateObjectsByDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cone Properties {/* #set-cone-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Ellipse Properties {/* #set-ellipse-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Line Properties {/* #set-line-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2024.1.0508.5)
