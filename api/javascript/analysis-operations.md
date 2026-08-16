---
title: Analysis Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Analysis Operations MP commands.
toc_max_heading_level: 2
---

# Analysis Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Angle Between Line and Plane

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Angle Between Line and Plane](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane) · [gRPC contract](/api/grpc/analysis-operations#angle-between-line-and-plane)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `selectedLine` | `CollectionObjectName` | `Selected Line` | Required |
| `selectedPlane` | `CollectionObjectName` | `Selected Plane` | Required |
| `nominalAngle` | `number` | `Nominal Angle` | 0.000000 |
| `angleTolerance00ForNone` | `number` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `angle` | `number` | `Angle` |

```ts
export interface AngleBetweenLineAndPlaneInput {
  readonly selectedLine: CollectionObjectName;
  readonly selectedPlane: CollectionObjectName;
  readonly nominalAngle?: number;
  readonly angleTolerance00ForNone?: number;
}

function angleBetweenLineAndPlane(
  briosa: BriosaClient,
  input: AngleBetweenLineAndPlaneInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await angleBetweenLineAndPlane(briosa, { selectedLine: ..., selectedPlane: ... });
```

Returns the MP output `Angle` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Angle Between Two Lines

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Angle Between Two Lines](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines) · [gRPC contract](/api/grpc/analysis-operations#angle-between-two-lines)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `line1` | `CollectionObjectName` | `Line 1` | Required |
| `line2` | `CollectionObjectName` | `Line 2` | Required |
| `nominalAngle` | `number` | `Nominal Angle` | 0.000000 |
| `angleTolerance00ForNone` | `number` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `angle` | `number` | `Angle` |

```ts
export interface AngleBetweenTwoLinesInput {
  readonly line1: CollectionObjectName;
  readonly line2: CollectionObjectName;
  readonly nominalAngle?: number;
  readonly angleTolerance00ForNone?: number;
}

function angleBetweenTwoLines(
  briosa: BriosaClient,
  input: AngleBetweenTwoLinesInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await angleBetweenTwoLines(briosa, { line1: ..., line2: ... });
```

Returns the MP output `Angle` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Angle Between Two Planes' normals

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Angle Between Two Planes' normals](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals) · [gRPC contract](/api/grpc/analysis-operations#angle-between-two-planes-normals)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planeA` | `CollectionObjectName` | `Plane A` | Required |
| `planeB` | `CollectionObjectName` | `Plane B` | Required |
| `nominalAngle` | `number` | `Nominal Angle` | 0.000000 |
| `angleTolerance00ForNone` | `number` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `angle` | `number` | `Angle` |

```ts
export interface AngleBetweenTwoPlanesNormalsInput {
  readonly planeA: CollectionObjectName;
  readonly planeB: CollectionObjectName;
  readonly nominalAngle?: number;
  readonly angleTolerance00ForNone?: number;
}

function angleBetweenTwoPlanesNormals(
  briosa: BriosaClient,
  input: AngleBetweenTwoPlanesNormalsInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await angleBetweenTwoPlanesNormals(briosa, { planeA: ..., planeB: ... });
```

Returns the MP output `Angle` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Best Fit Transformation - Group to Group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Best Fit Transformation - Group to Group](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group) · [gRPC contract](/api/grpc/analysis-operations#best-fit-transformation---group-to-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceGroup` | `CollectionObjectName` | `Reference Group` | Required |
| `correspondingGroup` | `CollectionObjectName` | `Corresponding Group` | Required |
| `showInterface` | `boolean` | `Show Interface` | false |
| `rmsTolerance00ForNone` | `number` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `number` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `allowScale` | `boolean` | `Allow Scale` | false |
| `allowX` | `boolean` | `Allow X` | true |
| `allowY` | `boolean` | `Allow Y` | true |
| `allowZ` | `boolean` | `Allow Z` | true |
| `allowRx` | `boolean` | `Allow Rx` | true |
| `allowRy` | `boolean` | `Allow Ry` | true |
| `allowRz` | `boolean` | `Allow Rz` | true |
| `lockDegreesOfFreedom` | `boolean` | `Lock Degrees of Freedom` | false |
| `generateEvent` | `boolean` | `Generate Event` | false |
| `filePathForCsvTextReportRequiresShowInterfaceTrue` | `FileReference` | `File Path for CSV Text Report (requires Show Interface = TRUE)` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `transformInWorking` | `Transform` | `Transform in Working` |
| `optimumTransform` | `WorldTransform` | `Optimum Transform` |
| `rmsDeviation` | `number` | `RMS Deviation` |
| `maximumAbsoluteDeviation` | `number` | `Maximum Absolute Deviation` |
| `numberOfUnknowns` | `number` | `Number of Unknowns` |
| `numberOfEquations` | `number` | `Number of Equations` |
| `robustness` | `number` | `Robustness` |

```ts
export interface BestFitTransformationGroupToGroupResult {
  readonly transformInWorking: Transform;
  readonly optimumTransform: WorldTransform;
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
  readonly numberOfUnknowns: number;
  readonly numberOfEquations: number;
  readonly robustness: number;
}

export interface BestFitTransformationGroupToGroupInput {
  readonly referenceGroup: CollectionObjectName;
  readonly correspondingGroup: CollectionObjectName;
  readonly showInterface?: boolean;
  readonly rmsTolerance00ForNone?: number;
  readonly maximumAbsoluteTolerance00ForNone?: number;
  readonly allowScale?: boolean;
  readonly allowX?: boolean;
  readonly allowY?: boolean;
  readonly allowZ?: boolean;
  readonly allowRx?: boolean;
  readonly allowRy?: boolean;
  readonly allowRz?: boolean;
  readonly lockDegreesOfFreedom?: boolean;
  readonly generateEvent?: boolean;
  readonly filePathForCsvTextReportRequiresShowInterfaceTrue: FileReference;
}

function bestFitTransformationGroupToGroup(
  briosa: BriosaClient,
  input: BestFitTransformationGroupToGroupInput,
  options?: BriosaCallOptions,
): Promise<BestFitTransformationGroupToGroupResult>;
```

```ts
await bestFitTransformationGroupToGroup(briosa, { referenceGroup: ..., correspondingGroup: ..., filePathForCsvTextReportRequiresShowInterfaceTrue: ... });
```

Returns the 7 MP outputs in the named `BestFitTransformationGroupToGroupResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Compute Group to Group Orientation (Rx,Ry,Rz)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Compute Group to Group Orientation (Rx,Ry,Rz)](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz) · [gRPC contract](/api/grpc/analysis-operations#compute-group-to-group-orientation-rxryrz)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceGroup` | `CollectionObjectName` | `Reference Group` | Required |
| `correspondingGroup` | `CollectionObjectName` | `Corresponding Group` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `rx` | `number` | `Rx` |
| `ry` | `number` | `Ry` |
| `rz` | `number` | `Rz` |

```ts
export interface ComputeGroupToGroupOrientationRxRyRzResult {
  readonly rx: number;
  readonly ry: number;
  readonly rz: number;
}

export interface ComputeGroupToGroupOrientationRxRyRzInput {
  readonly referenceGroup: CollectionObjectName;
  readonly correspondingGroup: CollectionObjectName;
}

function computeGroupToGroupOrientationRxRyRz(
  briosa: BriosaClient,
  input: ComputeGroupToGroupOrientationRxRyRzInput,
  options?: BriosaCallOptions,
): Promise<ComputeGroupToGroupOrientationRxRyRzResult>;
```

```ts
await computeGroupToGroupOrientationRxRyRz(briosa, { referenceGroup: ..., correspondingGroup: ... });
```

Returns the 3 MP outputs in the named `ComputeGroupToGroupOrientationRxRyRzResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Create Point Uncertainty Cloud Point Sets

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Create Point Uncertainty Cloud Point Sets](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets) · [gRPC contract](/api/grpc/analysis-operations#create-point-uncertainty-cloud-point-sets)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameList` | `Iterable<PointName>` | `Point Name List` | Required |
| `numberOfSamples` | `number` | `Number of Samples` | 1000 |
| `uncertaintyReferenceFrameMode` | `string` | `Uncertainty Reference Frame Mode` | With respect to WORLD |
| `groupingMode` | `string` | `Grouping mode` | Group per point |
| `pointSetMode` | `string` | `Point set mode` | Point clouds |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `pointGroups` | `readonly CollectionObjectName[]` | `Point Groups` |
| `pointSets` | `readonly CollectionObjectName[]` | `Point Sets` |
| `pointClouds` | `readonly CollectionObjectName[]` | `Point Clouds` |

```ts
export interface CreatePointUncertaintyCloudPointSetsResult {
  readonly pointGroups: readonly CollectionObjectName[];
  readonly pointSets: readonly CollectionObjectName[];
  readonly pointClouds: readonly CollectionObjectName[];
}

export interface CreatePointUncertaintyCloudPointSetsInput {
  readonly pointNameList: Iterable<PointName>;
  readonly numberOfSamples?: number;
  readonly uncertaintyReferenceFrameMode?: string;
  readonly groupingMode?: string;
  readonly pointSetMode?: string;
}

function createPointUncertaintyCloudPointSets(
  briosa: BriosaClient,
  input: CreatePointUncertaintyCloudPointSetsInput,
  options?: BriosaCallOptions,
): Promise<CreatePointUncertaintyCloudPointSetsResult>;
```

```ts
await createPointUncertaintyCloudPointSets(briosa, { pointNameList: ... });
```

Returns the 3 MP outputs in the named `CreatePointUncertaintyCloudPointSetsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Create Point Uncertainty Fields

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Create Point Uncertainty Fields](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields) · [gRPC contract](/api/grpc/analysis-operations#create-point-uncertainty-fields)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameList` | `Iterable<PointName>` | `Point Name List` | Required |
| `numberOfSamples` | `number` | `Number of Samples` | 1000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CreatePointUncertaintyFieldsInput {
  readonly pointNameList: Iterable<PointName>;
  readonly numberOfSamples?: number;
}

function createPointUncertaintyFields(
  briosa: BriosaClient,
  input: CreatePointUncertaintyFieldsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await createPointUncertaintyFields(briosa, { pointNameList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Fit Geometry to Point Group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Fit Geometry to Point Group](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-point-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryType` | `GeometryType` | `Geometry Type` | Required |
| `groupToFit` | `CollectionObjectName` | `Group To Fit` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `reportDeviations` | `boolean` | `Report Deviations` | false |
| `fitInterfaceTolerance10UseProfile` | `number` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignoreOutOfTolerancePoints` | `boolean` | `Ignore Out of Tolerance Points` | false |
| `startingConditionGeometryOptional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface FitGeometryToPointGroupInput {
  readonly geometryType: GeometryType;
  readonly groupToFit: CollectionObjectName;
  readonly resultingObjectName: CollectionObjectName;
  readonly fitProfileName?: string;
  readonly reportDeviations?: boolean;
  readonly fitInterfaceTolerance10UseProfile?: number;
  readonly ignoreOutOfTolerancePoints?: boolean;
  readonly startingConditionGeometryOptional: CollectionObjectName;
}

function fitGeometryToPointGroup(
  briosa: BriosaClient,
  input: FitGeometryToPointGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await fitGeometryToPointGroup(briosa, { geometryType: ..., groupToFit: ..., resultingObjectName: ..., startingConditionGeometryOptional: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Fit Geometry to Point Group Projected to Plane

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Fit Geometry to Point Group Projected to Plane](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-point-group-projected-to-plane)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryType` | `GeometryType` | `Geometry Type` | Required |
| `groupToFit` | `CollectionObjectName` | `Group To Fit` | Required |
| `planeName` | `CollectionObjectName` | `Plane Name` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `reportDeviations` | `boolean` | `Report Deviations` | false |
| `fitInterfaceTolerance10UseProfile` | `number` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignoreOutOfTolerancePoints` | `boolean` | `Ignore Out of Tolerance Points` | false |
| `startingConditionGeometryOptional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface FitGeometryToPointGroupProjectedToPlaneInput {
  readonly geometryType: GeometryType;
  readonly groupToFit: CollectionObjectName;
  readonly planeName: CollectionObjectName;
  readonly resultingObjectName: CollectionObjectName;
  readonly fitProfileName?: string;
  readonly reportDeviations?: boolean;
  readonly fitInterfaceTolerance10UseProfile?: number;
  readonly ignoreOutOfTolerancePoints?: boolean;
  readonly startingConditionGeometryOptional: CollectionObjectName;
}

function fitGeometryToPointGroupProjectedToPlane(
  briosa: BriosaClient,
  input: FitGeometryToPointGroupProjectedToPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await fitGeometryToPointGroupProjectedToPlane(briosa, { geometryType: ..., groupToFit: ..., planeName: ..., resultingObjectName: ..., startingConditionGeometryOptional: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Fit Geometry to Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Fit Geometry to Points](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryType` | `GeometryType` | `Geometry Type` | Required |
| `pointsToFit` | `Iterable<PointName>` | `Points to Fit` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `reportDeviations` | `boolean` | `Report Deviations` | false |
| `fitInterfaceTolerance10UseProfile` | `number` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignoreOutOfTolerancePoints` | `boolean` | `Ignore Out of Tolerance Points` | false |
| `startingConditionGeometryOptional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface FitGeometryToPointsInput {
  readonly geometryType: GeometryType;
  readonly pointsToFit: Iterable<PointName>;
  readonly resultingObjectName: CollectionObjectName;
  readonly fitProfileName?: string;
  readonly reportDeviations?: boolean;
  readonly fitInterfaceTolerance10UseProfile?: number;
  readonly ignoreOutOfTolerancePoints?: boolean;
  readonly startingConditionGeometryOptional: CollectionObjectName;
}

function fitGeometryToPoints(
  briosa: BriosaClient,
  input: FitGeometryToPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await fitGeometryToPoints(briosa, { geometryType: ..., pointsToFit: ..., resultingObjectName: ..., startingConditionGeometryOptional: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get B-Spline Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get B-Spline Properties](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties) · [gRPC contract](/api/grpc/analysis-operations#get-b-spline-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `bSplineName` | `CollectionObjectName` | `B-Spline Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `degree` | `number` | `Degree` |
| `knots` | `number` | `Knots` |
| `controlPoints` | `number` | `Control Points` |
| `rangeMin` | `number` | `Range Min` |
| `rangeMax` | `number` | `Range Max` |
| `length` | `number` | `Length` |

```ts
export interface GetBSplinePropertiesResult {
  readonly degree: number;
  readonly knots: number;
  readonly controlPoints: number;
  readonly rangeMin: number;
  readonly rangeMax: number;
  readonly length: number;
}

export interface GetBSplinePropertiesInput {
  readonly bSplineName: CollectionObjectName;
}

function getBSplineProperties(
  briosa: BriosaClient,
  input: GetBSplinePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetBSplinePropertiesResult>;
```

```ts
await getBSplineProperties(briosa, { bSplineName: ... });
```

Returns the 6 MP outputs in the named `GetBSplinePropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Circle Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Circle Properties](/mp-command-catalog/commands/analysis-operations#get-circle-properties) · [gRPC contract](/api/grpc/analysis-operations#get-circle-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circleName` | `CollectionObjectName` | `Circle Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `centerCoordinate` | `Vector` | `Center Coordinate` |
| `normalDirection` | `Vector` | `Normal Direction` |
| `radius` | `number` | `Radius` |
| `diameter` | `number` | `Diameter` |

```ts
export interface GetCirclePropertiesResult {
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly radius: number;
  readonly diameter: number;
}

export interface GetCirclePropertiesInput {
  readonly circleName: CollectionObjectName;
}

function getCircleProperties(
  briosa: BriosaClient,
  input: GetCirclePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetCirclePropertiesResult>;
```

```ts
await getCircleProperties(briosa, { circleName: ... });
```

Returns the 4 MP outputs in the named `GetCirclePropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Cone Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Cone Properties](/mp-command-catalog/commands/analysis-operations#get-cone-properties) · [gRPC contract](/api/grpc/analysis-operations#get-cone-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `coneName` | `CollectionObjectName` | `Cone Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `coneEndPointInWorkingCoordinates` | `Vector` | `Cone End Point (in working coordinates)` |
| `coneAxisInWorkingCoordinates` | `Vector` | `Cone Axis (in working coordinates)` |
| `coneLength` | `number` | `Cone Length` |
| `coneThetaStart` | `number` | `Cone Theta Start` |
| `coneThetaSpan` | `number` | `Cone Theta Span` |
| `coneIncludedAngle` | `number` | `Cone Included Angle` |
| `cutLengthFromApex` | `number` | `Cut Length from Apex` |

```ts
export interface GetConePropertiesResult {
  readonly coneEndPointInWorkingCoordinates: Vector;
  readonly coneAxisInWorkingCoordinates: Vector;
  readonly coneLength: number;
  readonly coneThetaStart: number;
  readonly coneThetaSpan: number;
  readonly coneIncludedAngle: number;
  readonly cutLengthFromApex: number;
}

export interface GetConePropertiesInput {
  readonly coneName: CollectionObjectName;
}

function getConeProperties(
  briosa: BriosaClient,
  input: GetConePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetConePropertiesResult>;
```

```ts
await getConeProperties(briosa, { coneName: ... });
```

Returns the 7 MP outputs in the named `GetConePropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Coordinate for i-th Point in Point Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Coordinate for i-th Point in Point Set](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-coordinate-for-i-th-point-in-point-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointSet` | `CollectionObjectName` | `Point Set` | Required |
| `pointSetIndex` | `number` | `Point Set Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `pointName` | `string` | `Point Name` |
| `pointCoordinates` | `Vector` | `Point Coordinates` |

```ts
export interface GetCoordinateForIthPointInPointSetResult {
  readonly pointName: string;
  readonly pointCoordinates: Vector;
}

export interface GetCoordinateForIthPointInPointSetInput {
  readonly pointSet: CollectionObjectName;
  readonly pointSetIndex?: number;
}

function getCoordinateForIthPointInPointSet(
  briosa: BriosaClient,
  input: GetCoordinateForIthPointInPointSetInput,
  options?: BriosaCallOptions,
): Promise<GetCoordinateForIthPointInPointSetResult>;
```

```ts
await getCoordinateForIthPointInPointSet(briosa, { pointSet: ... });
```

Returns the 2 MP outputs in the named `GetCoordinateForIthPointInPointSetResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Cylinder Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Cylinder Properties](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties) · [gRPC contract](/api/grpc/analysis-operations#get-cylinder-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cylinderName` | `CollectionObjectName` | `Cylinder Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `beginCoordinate` | `Vector` | `Begin Coordinate` |
| `endCoordinate` | `Vector` | `End Coordinate` |
| `axisDirection` | `Vector` | `Axis Direction` |
| `length` | `number` | `Length` |
| `radius` | `number` | `Radius` |
| `diameter` | `number` | `Diameter` |
| `nominalsPointInward` | `boolean` | `Nominals Point Inward` |
| `facets` | `number` | `Facets` |
| `enableThetaExtentDisplayMode` | `boolean` | `Enable Theta Extent Display Mode` |
| `thetaStartInDegrees` | `number` | `Theta Start in Degrees` |
| `thetaSpanInDegrees` | `number` | `Theta Span in Degrees` |

```ts
export interface GetCylinderPropertiesResult {
  readonly beginCoordinate: Vector;
  readonly endCoordinate: Vector;
  readonly axisDirection: Vector;
  readonly length: number;
  readonly radius: number;
  readonly diameter: number;
  readonly nominalsPointInward: boolean;
  readonly facets: number;
  readonly enableThetaExtentDisplayMode: boolean;
  readonly thetaStartInDegrees: number;
  readonly thetaSpanInDegrees: number;
}

export interface GetCylinderPropertiesInput {
  readonly cylinderName: CollectionObjectName;
}

function getCylinderProperties(
  briosa: BriosaClient,
  input: GetCylinderPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetCylinderPropertiesResult>;
```

```ts
await getCylinderProperties(briosa, { cylinderName: ... });
```

Returns the 11 MP outputs in the named `GetCylinderPropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Ellipse Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Ellipse Properties](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties) · [gRPC contract](/api/grpc/analysis-operations#get-ellipse-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ellipseName` | `CollectionObjectName` | `Ellipse Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `centerCoordinate` | `Vector` | `Center Coordinate` |
| `normalDirection` | `Vector` | `Normal Direction` |
| `majorAxisRadius` | `number` | `Major Axis Radius` |
| `minorAxisRadius` | `number` | `Minor Axis Radius` |

```ts
export interface GetEllipsePropertiesResult {
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly majorAxisRadius: number;
  readonly minorAxisRadius: number;
}

export interface GetEllipsePropertiesInput {
  readonly ellipseName: CollectionObjectName;
}

function getEllipseProperties(
  briosa: BriosaClient,
  input: GetEllipsePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetEllipsePropertiesResult>;
```

```ts
await getEllipseProperties(briosa, { ellipseName: ... });
```

Returns the 4 MP outputs in the named `GetEllipsePropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Euler Parameters for Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Euler Parameters for Frame](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame) · [gRPC contract](/api/grpc/analysis-operations#get-euler-parameters-for-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame` | `CollectionObjectName` | `Frame` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `x` | `number` | `X` |
| `y` | `number` | `Y` |
| `z` | `number` | `Z` |
| `e1` | `number` | `e1` |
| `e2` | `number` | `e2` |
| `e3` | `number` | `e3` |
| `e4` | `number` | `e4` |

```ts
export interface GetEulerParametersForFrameResult {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly e1: number;
  readonly e2: number;
  readonly e3: number;
  readonly e4: number;
}

export interface GetEulerParametersForFrameInput {
  readonly frame: CollectionObjectName;
}

function getEulerParametersForFrame(
  briosa: BriosaClient,
  input: GetEulerParametersForFrameInput,
  options?: BriosaCallOptions,
): Promise<GetEulerParametersForFrameResult>;
```

```ts
await getEulerParametersForFrame(briosa, { frame: ... });
```

Returns the 7 MP outputs in the named `GetEulerParametersForFrameResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Euler Parameters for i-th Frame in Frame Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Euler Parameters for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSet` | `CollectionObjectName` | `Frame Set` | Required |
| `frameSetIndex` | `number` | `Frame Set Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `x` | `number` | `X` |
| `y` | `number` | `Y` |
| `z` | `number` | `Z` |
| `e1` | `number` | `e1` |
| `e2` | `number` | `e2` |
| `e3` | `number` | `e3` |
| `e4` | `number` | `e4` |

```ts
export interface GetEulerParametersForIthFrameInFrameSetResult {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly e1: number;
  readonly e2: number;
  readonly e3: number;
  readonly e4: number;
}

export interface GetEulerParametersForIthFrameInFrameSetInput {
  readonly frameSet: CollectionObjectName;
  readonly frameSetIndex?: number;
}

function getEulerParametersForIthFrameInFrameSet(
  briosa: BriosaClient,
  input: GetEulerParametersForIthFrameInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<GetEulerParametersForIthFrameInFrameSetResult>;
```

```ts
await getEulerParametersForIthFrameInFrameSet(briosa, { frameSet: ... });
```

Returns the 7 MP outputs in the named `GetEulerParametersForIthFrameInFrameSetResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get i-th Collection Name

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get i-th Collection Name](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name) · [gRPC contract](/api/grpc/analysis-operations#get-i-th-collection-name)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionIndex` | `number` | `Collection Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `resultantName` | `string` | `Resultant Name` |

```ts
export interface GetIthCollectionNameInput {
  readonly collectionIndex?: number;
}

function getIthCollectionName(
  briosa: BriosaClient,
  input?: GetIthCollectionNameInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await getIthCollectionName(briosa);
```

Returns the MP output `Resultant Name` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get i-th Point From Group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get i-th Point From Group](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group) · [gRPC contract](/api/grpc/analysis-operations#get-i-th-point-from-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |
| `pointIndex` | `number` | `Point Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `completePointName` | `PointName` | `Complete Point Name` |
| `pointNameOnly` | `string` | `Point Name Only` |
| `vectorInWorking` | `Vector` | `Vector in Working` |

```ts
export interface GetIthPointFromGroupResult {
  readonly completePointName: PointName;
  readonly pointNameOnly: string;
  readonly vectorInWorking: Vector;
}

export interface GetIthPointFromGroupInput {
  readonly groupName: CollectionObjectName;
  readonly pointIndex?: number;
}

function getIthPointFromGroup(
  briosa: BriosaClient,
  input: GetIthPointFromGroupInput,
  options?: BriosaCallOptions,
): Promise<GetIthPointFromGroupResult>;
```

```ts
await getIthPointFromGroup(briosa, { groupName: ... });
```

Returns the 3 MP outputs in the named `GetIthPointFromGroupResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Line Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Line Properties](/mp-command-catalog/commands/analysis-operations#get-line-properties) · [gRPC contract](/api/grpc/analysis-operations#get-line-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lineName` | `CollectionObjectName` | `Line Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `beginCoordinate` | `Vector` | `Begin Coordinate` |
| `endCoordinate` | `Vector` | `End Coordinate` |
| `deltaComponents` | `Vector` | `Delta Components` |
| `length` | `number` | `Length` |
| `angleAboutXFromYInYzPlane` | `number` | `Angle about +X from +Y in YZ plane` |
| `angleAboutYFromZInXzPlane` | `number` | `Angle about +Y from +Z in XZ plane` |
| `angleAboutZFromXInXyPlane` | `number` | `Angle about +Z from +X in XY plane` |

```ts
export interface GetLinePropertiesResult {
  readonly beginCoordinate: Vector;
  readonly endCoordinate: Vector;
  readonly deltaComponents: Vector;
  readonly length: number;
  readonly angleAboutXFromYInYzPlane: number;
  readonly angleAboutYFromZInXzPlane: number;
  readonly angleAboutZFromXInXyPlane: number;
}

export interface GetLinePropertiesInput {
  readonly lineName: CollectionObjectName;
}

function getLineProperties(
  briosa: BriosaClient,
  input: GetLinePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetLinePropertiesResult>;
```

```ts
await getLineProperties(briosa, { lineName: ... });
```

Returns the 7 MP outputs in the named `GetLinePropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Measurement Auxiliary Data

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Measurement Auxiliary Data](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-auxiliary-data)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |
| `auxiliaryName` | `string` | `Auxiliary Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `number` | `Value` |
| `units` | `string` | `Units` |

```ts
export interface GetMeasurementAuxiliaryDataResult {
  readonly value: number;
  readonly units: string;
}

export interface GetMeasurementAuxiliaryDataInput {
  readonly pointName: PointName;
  readonly auxiliaryName?: string;
}

function getMeasurementAuxiliaryData(
  briosa: BriosaClient,
  input: GetMeasurementAuxiliaryDataInput,
  options?: BriosaCallOptions,
): Promise<GetMeasurementAuxiliaryDataResult>;
```

```ts
await getMeasurementAuxiliaryData(briosa, { pointName: ... });
```

Returns the 2 MP outputs in the named `GetMeasurementAuxiliaryDataResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Measurement Info Data

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Measurement Info Data](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-info-data)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `infoData` | `string` | `Info Data` |

```ts
export interface GetMeasurementInfoDataInput {
  readonly pointName: PointName;
}

function getMeasurementInfoData(
  briosa: BriosaClient,
  input: GetMeasurementInfoDataInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await getMeasurementInfoData(briosa, { pointName: ... });
```

Returns the MP output `Info Data` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Measurement Weather Data

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Measurement Weather Data](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-weather-data)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `temperatureDegF` | `number` | `Temperature (deg F)` |
| `pressureInHg` | `number` | `Pressure (in. Hg)` |
| `humidityRh` | `number` | `Humidity (% RH)` |

```ts
export interface GetMeasurementWeatherDataResult {
  readonly temperatureDegF: number;
  readonly pressureInHg: number;
  readonly humidityRh: number;
}

export interface GetMeasurementWeatherDataInput {
  readonly pointName: PointName;
}

function getMeasurementWeatherData(
  briosa: BriosaClient,
  input: GetMeasurementWeatherDataInput,
  options?: BriosaCallOptions,
): Promise<GetMeasurementWeatherDataResult>;
```

```ts
await getMeasurementWeatherData(briosa, { pointName: ... });
```

Returns the 3 MP outputs in the named `GetMeasurementWeatherDataResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Number of Collections

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Number of Collections](/mp-command-catalog/commands/analysis-operations#get-number-of-collections) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-collections)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `totalCount` | `number` | `Total Count` |

```ts
function getNumberOfCollections(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getNumberOfCollections(briosa);
```

Returns the MP output `Total Count` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Number of Frames In Frame Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Number of Frames In Frame Set](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-frames-in-frame-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSetContainer` | `CollectionObjectName` | `Frame Set Container` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `totalCount` | `number` | `Total Count` |

```ts
export interface GetNumberOfFramesInFrameSetInput {
  readonly frameSetContainer: CollectionObjectName;
}

function getNumberOfFramesInFrameSet(
  briosa: BriosaClient,
  input: GetNumberOfFramesInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getNumberOfFramesInFrameSet(briosa, { frameSetContainer: ... });
```

Returns the MP output `Total Count` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Number of Points in Group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Number of Points in Group](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-points-in-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `totalCount` | `number` | `Total Count` |

```ts
export interface GetNumberOfPointsInGroupInput {
  readonly groupName: CollectionObjectName;
}

function getNumberOfPointsInGroup(
  briosa: BriosaClient,
  input: GetNumberOfPointsInGroupInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getNumberOfPointsInGroup(briosa, { groupName: ... });
```

Returns the MP output `Total Count` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Number of Points In Point Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Number of Points In Point Set](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-points-in-point-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointSetContainer` | `CollectionObjectName` | `Point Set Container` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `totalCount` | `number` | `Total Count` |

```ts
export interface GetNumberOfPointsInPointSetInput {
  readonly pointSetContainer: CollectionObjectName;
}

function getNumberOfPointsInPointSet(
  briosa: BriosaClient,
  input: GetNumberOfPointsInPointSetInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getNumberOfPointsInPointSet(briosa, { pointSetContainer: ... });
```

Returns the MP output `Total Count` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Object Reporting Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Object Reporting Frame](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame) · [gRPC contract](/api/grpc/analysis-operations#get-object-reporting-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` |

```ts
export interface GetObjectReportingFrameInput {
  readonly objectName: CollectionObjectName;
}

function getObjectReportingFrame(
  briosa: BriosaClient,
  input: GetObjectReportingFrameInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

```ts
await getObjectReportingFrame(briosa, { objectName: ... });
```

Returns the MP output `Reporting Frame` directly as `CollectionObjectName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Plane Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Plane Properties](/mp-command-catalog/commands/analysis-operations#get-plane-properties) · [gRPC contract](/api/grpc/analysis-operations#get-plane-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planeName` | `CollectionObjectName` | `Plane Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `normalDirection` | `Vector` | `Normal Direction` |
| `pointOnPlane` | `Vector` | `Point on Plane` |
| `dParameter` | `number` | `D Parameter` |

```ts
export interface GetPlanePropertiesResult {
  readonly normalDirection: Vector;
  readonly pointOnPlane: Vector;
  readonly dParameter: number;
}

export interface GetPlanePropertiesInput {
  readonly planeName: CollectionObjectName;
}

function getPlaneProperties(
  briosa: BriosaClient,
  input: GetPlanePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetPlanePropertiesResult>;
```

```ts
await getPlaneProperties(briosa, { planeName: ... });
```

Returns the 3 MP outputs in the named `GetPlanePropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point Coordinate

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point Coordinate](/mp-command-catalog/commands/analysis-operations#get-point-coordinate) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `vectorRepresentation` | `Vector` | `Vector Representation` |
| `xValue` | `number` | `X Value` |
| `yValue` | `number` | `Y Value` |
| `zValue` | `number` | `Z Value` |

```ts
export interface GetPointCoordinateResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
}

export interface GetPointCoordinateInput {
  readonly pointName: PointName;
}

function getPointCoordinate(
  briosa: BriosaClient,
  input: GetPointCoordinateInput,
  options?: BriosaCallOptions,
): Promise<GetPointCoordinateResult>;
```

```ts
await getPointCoordinate(briosa, { pointName: ... });
```

Returns the 4 MP outputs in the named `GetPointCoordinateResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point Coordinate (Cylindrical)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point Coordinate (Cylindrical)](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate-cylindrical)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `radiusValue` | `number` | `Radius Value` |
| `thetaValue` | `number` | `Theta Value` |
| `zValue` | `number` | `Z Value` |

```ts
export interface GetPointCoordinateCylindricalResult {
  readonly radiusValue: number;
  readonly thetaValue: number;
  readonly zValue: number;
}

export interface GetPointCoordinateCylindricalInput {
  readonly pointName: PointName;
}

function getPointCoordinateCylindrical(
  briosa: BriosaClient,
  input: GetPointCoordinateCylindricalInput,
  options?: BriosaCallOptions,
): Promise<GetPointCoordinateCylindricalResult>;
```

```ts
await getPointCoordinateCylindrical(briosa, { pointName: ... });
```

Returns the 3 MP outputs in the named `GetPointCoordinateCylindricalResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point Coordinate (Polar)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point Coordinate (Polar)](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate-polar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `radiusValue` | `number` | `Radius Value` |
| `thetaValue` | `number` | `Theta Value` |
| `phiValue` | `number` | `Phi Value` |

```ts
export interface GetPointCoordinatePolarResult {
  readonly radiusValue: number;
  readonly thetaValue: number;
  readonly phiValue: number;
}

export interface GetPointCoordinatePolarInput {
  readonly pointName: PointName;
}

function getPointCoordinatePolar(
  briosa: BriosaClient,
  input: GetPointCoordinatePolarInput,
  options?: BriosaCallOptions,
): Promise<GetPointCoordinatePolarResult>;
```

```ts
await getPointCoordinatePolar(briosa, { pointName: ... });
```

Returns the 3 MP outputs in the named `GetPointCoordinatePolarResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point Properties](/mp-command-catalog/commands/analysis-operations#get-point-properties) · [gRPC contract](/api/grpc/analysis-operations#get-point-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `planarOffset` | `number` | `Planar Offset` |
| `radialOffset` | `number` | `Radial Offset` |
| `ux` | `number` | `Ux` |
| `uy` | `number` | `Uy` |
| `uz` | `number` | `Uz` |
| `umag` | `number` | `Umag` |
| `positionTolerance` | `ToleranceVectorOptions` | `Position Tolerance` |
| `componentWeights` | `Vector` | `Component Weights` |

```ts
export interface GetPointPropertiesResult {
  readonly planarOffset: number;
  readonly radialOffset: number;
  readonly ux: number;
  readonly uy: number;
  readonly uz: number;
  readonly umag: number;
  readonly positionTolerance: ToleranceVectorOptions;
  readonly componentWeights: Vector;
}

export interface GetPointPropertiesInput {
  readonly pointName: PointName;
}

function getPointProperties(
  briosa: BriosaClient,
  input: GetPointPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetPointPropertiesResult>;
```

```ts
await getPointProperties(briosa, { pointName: ... });
```

Returns the 8 MP outputs in the named `GetPointPropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point To Line Distance

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point To Line Distance](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance) · [gRPC contract](/api/grpc/analysis-operations#get-point-to-line-distance)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |
| `line` | `CollectionObjectName` | `Line` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `vectorRepresentation` | `Vector` | `Vector Representation` |
| `xValue` | `number` | `X Value` |
| `yValue` | `number` | `Y Value` |
| `zValue` | `number` | `Z Value` |
| `magnitude` | `number` | `Magnitude` |

```ts
export interface GetPointToLineDistanceResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
  readonly magnitude: number;
}

export interface GetPointToLineDistanceInput {
  readonly point: PointName;
  readonly line: CollectionObjectName;
}

function getPointToLineDistance(
  briosa: BriosaClient,
  input: GetPointToLineDistanceInput,
  options?: BriosaCallOptions,
): Promise<GetPointToLineDistanceResult>;
```

```ts
await getPointToLineDistance(briosa, { point: ..., line: ... });
```

Returns the 5 MP outputs in the named `GetPointToLineDistanceResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point To Point Distance

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point To Point Distance](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance) · [gRPC contract](/api/grpc/analysis-operations#get-point-to-point-distance)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `firstPoint` | `PointName` | `First Point` | Required |
| `secondPoint` | `PointName` | `Second Point` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `vectorRepresentation` | `Vector` | `Vector Representation` |
| `xValue` | `number` | `X Value` |
| `yValue` | `number` | `Y Value` |
| `zValue` | `number` | `Z Value` |
| `magnitude` | `number` | `Magnitude` |

```ts
export interface GetPointToPointDistanceResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
  readonly magnitude: number;
}

export interface GetPointToPointDistanceInput {
  readonly firstPoint: PointName;
  readonly secondPoint: PointName;
}

function getPointToPointDistance(
  briosa: BriosaClient,
  input: GetPointToPointDistanceInput,
  options?: BriosaCallOptions,
): Promise<GetPointToPointDistanceResult>;
```

```ts
await getPointToPointDistance(briosa, { firstPoint: ..., secondPoint: ... });
```

Returns the 5 MP outputs in the named `GetPointToPointDistanceResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point Tolerance

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point Tolerance](/mp-command-catalog/commands/analysis-operations#get-point-tolerance) · [gRPC contract](/api/grpc/analysis-operations#get-point-tolerance)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

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
export interface GetPointToleranceResult {
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

export interface GetPointToleranceInput {
  readonly pointName: PointName;
}

function getPointTolerance(
  briosa: BriosaClient,
  input: GetPointToleranceInput,
  options?: BriosaCallOptions,
): Promise<GetPointToleranceResult>;
```

```ts
await getPointTolerance(briosa, { pointName: ... });
```

Returns the 17 MP outputs in the named `GetPointToleranceResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Slot Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Slot Properties](/mp-command-catalog/commands/analysis-operations#get-slot-properties) · [gRPC contract](/api/grpc/analysis-operations#get-slot-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `slotName` | `CollectionObjectName` | `Slot Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `slotTransformInWorkingCoordinates` | `Transform` | `Slot Transform (in working coordinates` |
| `centerInWorkingCoordinates` | `Vector` | `Center (in working coordinates)` |
| `normalDirectionInWorkingCoordinates` | `Vector` | `Normal Direction (in working coordinates)` |
| `slotLength` | `number` | `Slot Length` |
| `slotWidth` | `number` | `Slot Width` |
| `roundSlotType` | `boolean` | `Round Slot Type` |
| `centerlinePt1InWorkingCoordinates` | `Vector` | `Centerline Pt. 1 (in working coordinates)` |
| `centerlinePt2InWorkingCoordinates` | `Vector` | `Centerline Pt. 2 (in working coordinates)` |

```ts
export interface GetSlotPropertiesResult {
  readonly slotTransformInWorkingCoordinates: Transform;
  readonly centerInWorkingCoordinates: Vector;
  readonly normalDirectionInWorkingCoordinates: Vector;
  readonly slotLength: number;
  readonly slotWidth: number;
  readonly roundSlotType: boolean;
  readonly centerlinePt1InWorkingCoordinates: Vector;
  readonly centerlinePt2InWorkingCoordinates: Vector;
}

export interface GetSlotPropertiesInput {
  readonly slotName: CollectionObjectName;
}

function getSlotProperties(
  briosa: BriosaClient,
  input: GetSlotPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetSlotPropertiesResult>;
```

```ts
await getSlotProperties(briosa, { slotName: ... });
```

Returns the 8 MP outputs in the named `GetSlotPropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Sphere Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Sphere Properties](/mp-command-catalog/commands/analysis-operations#get-sphere-properties) · [gRPC contract](/api/grpc/analysis-operations#get-sphere-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sphereName` | `CollectionObjectName` | `Sphere Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `centerCoordinate` | `Vector` | `Center Coordinate` |
| `radius` | `number` | `Radius` |
| `diameter` | `number` | `Diameter` |

```ts
export interface GetSpherePropertiesResult {
  readonly centerCoordinate: Vector;
  readonly radius: number;
  readonly diameter: number;
}

export interface GetSpherePropertiesInput {
  readonly sphereName: CollectionObjectName;
}

function getSphereProperties(
  briosa: BriosaClient,
  input: GetSpherePropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetSpherePropertiesResult>;
```

```ts
await getSphereProperties(briosa, { sphereName: ... });
```

Returns the 3 MP outputs in the named `GetSpherePropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Surface Physical Stats

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Surface Physical Stats](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats) · [gRPC contract](/api/grpc/analysis-operations#get-surface-physical-stats)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surfaceName` | `CollectionObjectName` | `Surface Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `volume` | `number` | `Volume` |
| `area` | `number` | `Area` |

```ts
export interface GetSurfacePhysicalStatsResult {
  readonly volume: number;
  readonly area: number;
}

export interface GetSurfacePhysicalStatsInput {
  readonly surfaceName: CollectionObjectName;
}

function getSurfacePhysicalStats(
  briosa: BriosaClient,
  input: GetSurfacePhysicalStatsInput,
  options?: BriosaCallOptions,
): Promise<GetSurfacePhysicalStatsResult>;
```

```ts
await getSurfacePhysicalStats(briosa, { surfaceName: ... });
```

Returns the 2 MP outputs in the named `GetSurfacePhysicalStatsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Timestamp for i-th Frame in Frame Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Timestamp for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSet` | `CollectionObjectName` | `Frame Set` | Required |
| `frameSetIndex` | `number` | `Frame Set Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `timestamp` | `number` | `Timestamp` |

```ts
export interface GetTimestampForIthFrameInFrameSetInput {
  readonly frameSet: CollectionObjectName;
  readonly frameSetIndex?: number;
}

function getTimestampForIthFrameInFrameSet(
  briosa: BriosaClient,
  input: GetTimestampForIthFrameInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getTimestampForIthFrameInFrameSet(briosa, { frameSet: ... });
```

Returns the MP output `Timestamp` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Timestamp for i-th Point in Point Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Timestamp for i-th Point in Point Set](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-timestamp-for-i-th-point-in-point-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointSet` | `CollectionObjectName` | `Point Set` | Required |
| `pointSetIndex` | `number` | `Point Set Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `timestamp` | `number` | `Timestamp` |

```ts
export interface GetTimestampForIthPointInPointSetInput {
  readonly pointSet: CollectionObjectName;
  readonly pointSetIndex?: number;
}

function getTimestampForIthPointInPointSet(
  briosa: BriosaClient,
  input: GetTimestampForIthPointInPointSetInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getTimestampForIthPointInPointSet(briosa, { pointSet: ... });
```

Returns the MP output `Timestamp` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Torus Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Torus Properties](/mp-command-catalog/commands/analysis-operations#get-torus-properties) · [gRPC contract](/api/grpc/analysis-operations#get-torus-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `torusName` | `CollectionObjectName` | `Torus Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `centerCoordinate` | `Vector` | `Center Coordinate` |
| `normalDirection` | `Vector` | `Normal Direction` |
| `majorRadius` | `number` | `Major Radius` |
| `minorRadius` | `number` | `Minor Radius` |

```ts
export interface GetTorusPropertiesResult {
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly majorRadius: number;
  readonly minorRadius: number;
}

export interface GetTorusPropertiesInput {
  readonly torusName: CollectionObjectName;
}

function getTorusProperties(
  briosa: BriosaClient,
  input: GetTorusPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetTorusPropertiesResult>;
```

```ts
await getTorusProperties(briosa, { torusName: ... });
```

Returns the 4 MP outputs in the named `GetTorusPropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Transform for i-th Frame in Frame Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Transform for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-transform-for-i-th-frame-in-frame-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSet` | `CollectionObjectName` | `Frame Set` | Required |
| `frameSetIndex` | `number` | `Frame Set Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `transformInWorking` | `Transform` | `Transform in Working` |

```ts
export interface GetTransformForIthFrameInFrameSetInput {
  readonly frameSet: CollectionObjectName;
  readonly frameSetIndex?: number;
}

function getTransformForIthFrameInFrameSet(
  briosa: BriosaClient,
  input: GetTransformForIthFrameInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

```ts
await getTransformForIthFrameInFrameSet(briosa, { frameSet: ... });
```

Returns the MP output `Transform in Working` directly as `Transform`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Group To Surface Fit

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Group To Surface Fit](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit) · [gRPC contract](/api/grpc/analysis-operations#group-to-surface-fit)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupToFit` | `CollectionObjectName` | `Group to Fit` | Required |
| `surface` | `CollectionObjectName` | `Surface` | Required |
| `doConventionalFit` | `boolean` | `Do Conventional Fit` | false |
| `rmsTolerance00ForNone` | `number` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `number` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `optimumTransform` | `WorldTransform` | `Optimum Transform` |
| `rmsDeviation` | `number` | `RMS Deviation` |
| `maximumAbsoluteDeviation` | `number` | `Maximum Absolute Deviation` |

```ts
export interface GroupToSurfaceFitResult {
  readonly optimumTransform: WorldTransform;
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
}

export interface GroupToSurfaceFitInput {
  readonly groupToFit: CollectionObjectName;
  readonly surface: CollectionObjectName;
  readonly doConventionalFit?: boolean;
  readonly rmsTolerance00ForNone?: number;
  readonly maximumAbsoluteTolerance00ForNone?: number;
}

function groupToSurfaceFit(
  briosa: BriosaClient,
  input: GroupToSurfaceFitInput,
  options?: BriosaCallOptions,
): Promise<GroupToSurfaceFitResult>;
```

```ts
await groupToSurfaceFit(briosa, { groupToFit: ..., surface: ... });
```

Returns the 3 MP outputs in the named `GroupToSurfaceFitResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import Geometry Fit Profiles

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import Geometry Fit Profiles](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles) · [gRPC contract](/api/grpc/analysis-operations#import-geometry-fit-profiles)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryFitProfilesFilePath` | `FileReference` | `Geometry Fit Profiles File Path` | Required |
| `overwriteProfilesWithSameName` | `boolean` | `Overwrite Profiles with Same Name?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportGeometryFitProfilesInput {
  readonly geometryFitProfilesFilePath: FileReference;
  readonly overwriteProfilesWithSameName?: boolean;
}

function importGeometryFitProfiles(
  briosa: BriosaClient,
  input: ImportGeometryFitProfilesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importGeometryFitProfiles(briosa, { geometryFitProfilesFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Is Object of Type

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Is Object of Type](/mp-command-catalog/commands/analysis-operations#is-object-of-type) · [gRPC contract](/api/grpc/analysis-operations#is-object-of-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |
| `objectType` | `ObjectType` | `Object Type` | Any |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `resultant` | `boolean` | `Resultant` |

```ts
export interface IsObjectOfTypeInput {
  readonly objectName: CollectionObjectName;
  readonly objectType?: ObjectType;
}

function isObjectOfType(
  briosa: BriosaClient,
  input: IsObjectOfTypeInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

```ts
await isObjectOfType(briosa, { objectName: ... });
```

Returns the MP output `Resultant` directly as `boolean`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Circle Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Circle Fit Profile](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-circle-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `number` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measuredSideForPlanarOffset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `overridePlanarOffset10UseCurrent` | `number` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planarOffsetDirection` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `lockRadius10DoNotLock` | `number` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `circleComputationTechnique` | `CompTechnique` | `Circle Computation Technique` | Standard |
| `reverseNormalVectorAfterFit` | `boolean` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1Center` | `boolean` | `Cardinal Pt.1: Center?` | true |
| `cardinalPt2PointOnNormal` | `boolean` | `Cardinal Pt.2: Point on Normal?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeCircleFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset10UseCurrent?: number;
  readonly measuredSideForPlanarOffset?: MeasuredSideForPlanarOffset;
  readonly overridePlanarOffset10UseCurrent?: number;
  readonly planarOffsetDirection?: NormalDirection;
  readonly lockRadius10DoNotLock?: number;
  readonly circleComputationTechnique?: CompTechnique;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Center?: boolean;
  readonly cardinalPt2PointOnNormal?: boolean;
}

function makeCircleFitProfile(
  briosa: BriosaClient,
  input?: MakeCircleFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeCircleFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Cone Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Cone Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-cone-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `number` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lockAngleInDegrees10DoNotLock` | `number` | `Lock Angle in degrees (-1.0 do not lock)` | -1.000000 |
| `useExhaustiveSearch` | `boolean` | `Use Exhaustive Search?` | true |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1Vertex` | `boolean` | `Cardinal Pt.1: Vertex?` | true |
| `cardinalPt2PointOnAxis` | `boolean` | `Cardinal Pt.2: Point on Axis?` | true |
| `cardinalPt3CutPointOnAxis` | `boolean` | `Cardinal Pt.3: Cut Point on Axis?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeConeFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset10UseCurrent?: number;
  readonly lockAngleInDegrees10DoNotLock?: number;
  readonly useExhaustiveSearch?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Vertex?: boolean;
  readonly cardinalPt2PointOnAxis?: boolean;
  readonly cardinalPt3CutPointOnAxis?: boolean;
}

function makeConeFitProfile(
  briosa: BriosaClient,
  input?: MakeConeFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeConeFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Cylinder Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Cylinder Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-cylinder-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `number` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lockRadius10DoNotLock` | `number` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `lockedRadiusFitMethod` | `FitMethod` | `Locked Radius Fit Method` | Minimum RMS |
| `constrainToNominalAxis` | `boolean` | `Constrain to Nominal Axis?` | false |
| `constrainToNominalOrientation` | `boolean` | `Constrain to Nominal Orientation?` | false |
| `alignWithNominal` | `boolean` | `Align with Nominal?` | false |
| `reverseAxis` | `boolean` | `Reverse Axis?` | false |
| `setAxisFirstToLastPoint` | `boolean` | `Set Axis First to Last Point?` | false |
| `cylinderComputationTechnique` | `CompTechnique` | `Cylinder Computation Technique` | Standard |
| `useExhaustiveSearch` | `boolean` | `Use Exhaustive Search?` | false |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1BeginPt` | `boolean` | `Cardinal Pt.1: Begin Pt?` | true |
| `cardinalPt2EndPt` | `boolean` | `Cardinal Pt.2: End Pt?` | true |
| `cardinalPt3Center` | `boolean` | `Cardinal Pt.3: Center?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeCylinderFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset10UseCurrent?: number;
  readonly lockRadius10DoNotLock?: number;
  readonly lockedRadiusFitMethod?: FitMethod;
  readonly constrainToNominalAxis?: boolean;
  readonly constrainToNominalOrientation?: boolean;
  readonly alignWithNominal?: boolean;
  readonly reverseAxis?: boolean;
  readonly setAxisFirstToLastPoint?: boolean;
  readonly cylinderComputationTechnique?: CompTechnique;
  readonly useExhaustiveSearch?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1BeginPt?: boolean;
  readonly cardinalPt2EndPt?: boolean;
  readonly cardinalPt3Center?: boolean;
}

function makeCylinderFitProfile(
  briosa: BriosaClient,
  input?: MakeCylinderFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeCylinderFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Ellipse Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Ellipse Fit Profile](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-ellipse-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `number` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measuredSideForPlanarOffset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `overridePlanarOffset10UseCurrent` | `number` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planarOffsetDirection` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `reverseNormalVectorAfterFit` | `boolean` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1Center` | `boolean` | `Cardinal Pt.1: Center?` | true |
| `cardinalPt2PointOnNormal` | `boolean` | `Cardinal Pt.2: Point on Normal?` | true |
| `cardinalPt3FocalPt1` | `boolean` | `Cardinal Pt.3: Focal Pt.1?` | true |
| `cardinalPt4FocalPt2` | `boolean` | `Cardinal Pt.4: Focal Pt.2?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeEllipseFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset10UseCurrent?: number;
  readonly measuredSideForPlanarOffset?: MeasuredSideForPlanarOffset;
  readonly overridePlanarOffset10UseCurrent?: number;
  readonly planarOffsetDirection?: NormalDirection;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Center?: boolean;
  readonly cardinalPt2PointOnNormal?: boolean;
  readonly cardinalPt3FocalPt1?: boolean;
  readonly cardinalPt4FocalPt2?: boolean;
}

function makeEllipseFitProfile(
  briosa: BriosaClient,
  input?: MakeEllipseFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeEllipseFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Line Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Line Fit Profile](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-line-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `reverseNormalVectorAfterFit` | `boolean` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1PointA` | `boolean` | `Cardinal Pt.1: Point A?` | true |
| `cardinalPt2PointB` | `boolean` | `Cardinal Pt.2: Point B?` | true |
| `cardinalPt3MidPoint` | `boolean` | `Cardinal Pt.3: Mid Point?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeLineFitProfileInput {
  readonly fitProfileName?: string;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1PointA?: boolean;
  readonly cardinalPt2PointB?: boolean;
  readonly cardinalPt3MidPoint?: boolean;
}

function makeLineFitProfile(
  briosa: BriosaClient,
  input?: MakeLineFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeLineFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Paraboloid Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Paraboloid Fit Profile](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-paraboloid-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `number` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lockFocalLength10DoNotLock` | `number` | `Lock Focal Length (-1.0 do not lock)` | -1.000000 |
| `degreeOfFreedom` | `DegreeOfFreedom` | `Degree of Freedom` | Any |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1Vertex` | `boolean` | `Cardinal Pt.1: Vertex?` | true |
| `cardinalPt2FocalPoint` | `boolean` | `Cardinal Pt.2: Focal Point?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeParaboloidFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset10UseCurrent?: number;
  readonly lockFocalLength10DoNotLock?: number;
  readonly degreeOfFreedom?: DegreeOfFreedom;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Vertex?: boolean;
  readonly cardinalPt2FocalPoint?: boolean;
}

function makeParaboloidFitProfile(
  briosa: BriosaClient,
  input?: MakeParaboloidFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeParaboloidFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Plane Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Plane Fit Profile](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-plane-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForPlanarOffset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `overridePlanarOffset10UseCurrent` | `number` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planarOffsetDirection` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `reverseNormalVectorAfterFit` | `boolean` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1Centroid` | `boolean` | `Cardinal Pt.1: Centroid?` | true |
| `cardinalPt2PointOnNormal` | `boolean` | `Cardinal Pt.2: Point on Normal?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakePlaneFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForPlanarOffset?: MeasuredSideForPlanarOffset;
  readonly overridePlanarOffset10UseCurrent?: number;
  readonly planarOffsetDirection?: NormalDirection;
  readonly reverseNormalVectorAfterFit?: boolean;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Centroid?: boolean;
  readonly cardinalPt2PointOnNormal?: boolean;
}

function makePlaneFitProfile(
  briosa: BriosaClient,
  input?: MakePlaneFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makePlaneFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Slot Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Slot Fit Profile](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-slot-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `number` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measuredSideForPlanarOffset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `overridePlanarOffset10UseCurrent` | `number` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planarOffsetDirection` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `slotType` | `SlotType` | `Slot Type` | Round |
| `slotComputationTechnique` | `CompTechnique` | `Slot Computation Technique` | Standard |
| `reverseNormalVectorAfterFit` | `boolean` | `Reverse Normal Vector after fit?` | false |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1Center` | `boolean` | `Cardinal Pt.1: Center?` | true |
| `cardinalPt2PointOnNormal` | `boolean` | `Cardinal Pt.2: Point on Normal?` | true |
| `cardinalPt3CenterlinePt1` | `boolean` | `Cardinal Pt.3: Centerline Pt.1?` | true |
| `cardinalPt4CenterlinePt2` | `boolean` | `Cardinal Pt.4: Centerline Pt.2?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeSlotFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset10UseCurrent?: number;
  readonly measuredSideForPlanarOffset?: MeasuredSideForPlanarOffset;
  readonly overridePlanarOffset10UseCurrent?: number;
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

function makeSlotFitProfile(
  briosa: BriosaClient,
  input?: MakeSlotFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeSlotFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Sphere Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Sphere Fit Profile](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-sphere-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `measuredSideForRadialOffset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `overrideRadialOffset10UseCurrent` | `number` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lockRadius10DoNotLock` | `number` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `makeCardinalPoints` | `boolean` | `Make Cardinal Points?` | true |
| `cardinalPt1Center` | `boolean` | `Cardinal Pt.1: Center?` | true |
| `computationMethod` | `SphereFitComputationMode` | `Computation Method` | Standard |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeSphereFitProfileInput {
  readonly fitProfileName?: string;
  readonly measuredSideForRadialOffset?: MeasuredSideForRadialOffset;
  readonly overrideRadialOffset10UseCurrent?: number;
  readonly lockRadius10DoNotLock?: number;
  readonly makeCardinalPoints?: boolean;
  readonly cardinalPt1Center?: boolean;
  readonly computationMethod?: SphereFitComputationMode;
}

function makeSphereFitProfile(
  briosa: BriosaClient,
  input?: MakeSphereFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeSphereFitProfile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Mushroom Target Hole Inspection

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Mushroom Target Hole Inspection](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection) · [gRPC contract](/api/grpc/analysis-operations#mushroom-target-hole-inspection)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `namePrefixForIntermediateConstructions` | `string` | `Name Prefix for Intermediate Constructions` | Empty |
| `spherePointsGroupName` | `CollectionObjectName` | `Sphere Points Group Name` | Required |
| `sphereTargetRadius` | `number` | `Sphere Target Radius` | 0.000000 |
| `targetContactPlane` | `CollectionObjectName` | `Target Contact Plane` | Required |
| `pointToCreateAtHole` | `PointName` | `Point To Create at Hole` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `sphereFitRmsError` | `number` | `Sphere Fit RMS Error` |
| `sphereFitMaxError` | `number` | `Sphere Fit Max Error` |

```ts
export interface MushroomTargetHoleInspectionResult {
  readonly sphereFitRmsError: number;
  readonly sphereFitMaxError: number;
}

export interface MushroomTargetHoleInspectionInput {
  readonly namePrefixForIntermediateConstructions?: string;
  readonly spherePointsGroupName: CollectionObjectName;
  readonly sphereTargetRadius?: number;
  readonly targetContactPlane: CollectionObjectName;
  readonly pointToCreateAtHole: PointName;
}

function mushroomTargetHoleInspection(
  briosa: BriosaClient,
  input: MushroomTargetHoleInspectionInput,
  options?: BriosaCallOptions,
): Promise<MushroomTargetHoleInspectionResult>;
```

```ts
await mushroomTargetHoleInspection(briosa, { spherePointsGroupName: ..., targetContactPlane: ..., pointToCreateAtHole: ... });
```

Returns the 2 MP outputs in the named `MushroomTargetHoleInspectionResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Patch Normal Shift - Hole / Pin

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Patch Normal Shift - Hole / Pin](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin) · [gRPC contract](/api/grpc/analysis-operations#patch-normal-shift---hole--pin)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planePointsGroupName` | `CollectionObjectName` | `Plane Points Group Name` | Required |
| `perimeterPointsGroupName` | `CollectionObjectName` | `Perimeter Points Group Name` | Required |
| `resultingPointName` | `PointName` | `Resulting Point Name` | Required |
| `additionalMaterialThickness` | `number` | `Additional Material Thickness` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface PatchNormalShiftHolePinInput {
  readonly planePointsGroupName: CollectionObjectName;
  readonly perimeterPointsGroupName: CollectionObjectName;
  readonly resultingPointName: PointName;
  readonly additionalMaterialThickness?: number;
}

function patchNormalShiftHolePin(
  briosa: BriosaClient,
  input: PatchNormalShiftHolePinInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await patchNormalShiftHolePin(briosa, { planePointsGroupName: ..., perimeterPointsGroupName: ..., resultingPointName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Patch Normal Shift - Point

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Patch Normal Shift - Point](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point) · [gRPC contract](/api/grpc/analysis-operations#patch-normal-shift---point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planePointsGroupName` | `CollectionObjectName` | `Plane Points Group Name` | Required |
| `pointToShift` | `PointName` | `Point to Shift` | Required |
| `resultingPointName` | `PointName` | `Resulting Point Name` | Required |
| `additionalMaterialThickness` | `number` | `Additional Material Thickness` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface PatchNormalShiftPointInput {
  readonly planePointsGroupName: CollectionObjectName;
  readonly pointToShift: PointName;
  readonly resultingPointName: PointName;
  readonly additionalMaterialThickness?: number;
}

function patchNormalShiftPoint(
  briosa: BriosaClient,
  input: PatchNormalShiftPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await patchNormalShiftPoint(briosa, { planePointsGroupName: ..., pointToShift: ..., resultingPointName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Clouds to Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Clouds to Objects](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-clouds-to-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `objectNames` | `Iterable<CollectionObjectName>` | `Object Names` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `proximity` | `number` | `Proximity` | 0.000000 |
| `skipFactor` | `number` | `Skip Factor` | 0 |
| `rmsTolerance00ForNone` | `number` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `number` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `rmsDeviation` | `number` | `RMS Deviation` |
| `maximumAbsoluteDeviation` | `number` | `Maximum Absolute Deviation` |

```ts
export interface QueryCloudsToObjectsResult {
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
}

export interface QueryCloudsToObjectsInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly objectNames: Iterable<CollectionObjectName>;
  readonly resultingObjectName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
  readonly proximity?: number;
  readonly skipFactor?: number;
  readonly rmsTolerance00ForNone?: number;
  readonly maximumAbsoluteTolerance00ForNone?: number;
}

function queryCloudsToObjects(
  briosa: BriosaClient,
  input: QueryCloudsToObjectsInput,
  options?: BriosaCallOptions,
): Promise<QueryCloudsToObjectsResult>;
```

```ts
await queryCloudsToObjects(briosa, { cloudNames: ..., objectNames: ..., resultingObjectName: ... });
```

Returns the 2 MP outputs in the named `QueryCloudsToObjectsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Clouds to Surface

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Clouds to Surface](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface) · [gRPC contract](/api/grpc/analysis-operations#query-clouds-to-surface)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `filterSurfaceName` | `CollectionObjectName` | `Filter Surface Name` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `proximity` | `number` | `Proximity` | 0.000000 |
| `skipFactor` | `number` | `Skip Factor` | 0 |
| `rmsTolerance00ForNone` | `number` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `number` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `rmsDeviation` | `number` | `RMS Deviation` |
| `maximumAbsoluteDeviation` | `number` | `Maximum Absolute Deviation` |

```ts
export interface QueryCloudsToSurfaceResult {
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
}

export interface QueryCloudsToSurfaceInput {
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly filterSurfaceName: CollectionObjectName;
  readonly resultingObjectName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
  readonly proximity?: number;
  readonly skipFactor?: number;
  readonly rmsTolerance00ForNone?: number;
  readonly maximumAbsoluteTolerance00ForNone?: number;
}

function queryCloudsToSurface(
  briosa: BriosaClient,
  input: QueryCloudsToSurfaceInput,
  options?: BriosaCallOptions,
): Promise<QueryCloudsToSurfaceResult>;
```

```ts
await queryCloudsToSurface(briosa, { cloudNames: ..., filterSurfaceName: ..., resultingObjectName: ... });
```

Returns the 2 MP outputs in the named `QueryCloudsToSurfaceResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Frame to Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Frame to Frame](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame) · [gRPC contract](/api/grpc/analysis-operations#query-frame-to-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceFrameName` | `CollectionObjectName` | `Reference Frame Name` | Required |
| `correspondingFrameName` | `CollectionObjectName` | `Corresponding Frame Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `x` | `number` | `X` |
| `y` | `number` | `Y` |
| `z` | `number` | `Z` |
| `rxRoll` | `number` | `Rx (Roll)` |
| `ryPitch` | `number` | `Ry (Pitch)` |
| `rzYaw` | `number` | `Rz (Yaw)` |

```ts
export interface QueryFrameToFrameResult {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly rxRoll: number;
  readonly ryPitch: number;
  readonly rzYaw: number;
}

export interface QueryFrameToFrameInput {
  readonly referenceFrameName: CollectionObjectName;
  readonly correspondingFrameName: CollectionObjectName;
}

function queryFrameToFrame(
  briosa: BriosaClient,
  input: QueryFrameToFrameInput,
  options?: BriosaCallOptions,
): Promise<QueryFrameToFrameResult>;
```

```ts
await queryFrameToFrame(briosa, { referenceFrameName: ..., correspondingFrameName: ... });
```

Returns the 6 MP outputs in the named `QueryFrameToFrameResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Groups to Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Groups to Objects](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-groups-to-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupNameListGroupsToProject` | `Iterable<CollectionObjectName>` | `Group Name List (Groups to Project)` | Required |
| `objectNameListObjectsToProjectTo` | `Iterable<CollectionObjectName>` | `Object Name List (Objects to Project to)` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `rmsTolerance00ForNone` | `number` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `number` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `showResultsDialog` | `boolean` | `Show Results Dialog?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `rmsDeviation` | `number` | `RMS Deviation` |
| `maxAbsoluteDeviation` | `number` | `Max Absolute Deviation` |
| `averageDeviation` | `number` | `Average Deviation` |
| `standardDeviation` | `number` | `Standard Deviation` |

```ts
export interface QueryGroupsToObjectsResult {
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
  readonly standardDeviation: number;
}

export interface QueryGroupsToObjectsInput {
  readonly groupNameListGroupsToProject: Iterable<CollectionObjectName>;
  readonly objectNameListObjectsToProjectTo: Iterable<CollectionObjectName>;
  readonly resultingObjectName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
  readonly rmsTolerance00ForNone?: number;
  readonly maximumAbsoluteTolerance00ForNone?: number;
  readonly showResultsDialog?: boolean;
}

function queryGroupsToObjects(
  briosa: BriosaClient,
  input: QueryGroupsToObjectsInput,
  options?: BriosaCallOptions,
): Promise<QueryGroupsToObjectsResult>;
```

```ts
await queryGroupsToObjects(briosa, { groupNameListGroupsToProject: ..., objectNameListObjectsToProjectTo: ..., resultingObjectName: ... });
```

Returns the 4 MP outputs in the named `QueryGroupsToObjectsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Point to Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Point to Objects](/mp-command-catalog/commands/analysis-operations#query-point-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-point-to-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |
| `objects` | `Iterable<CollectionObjectName>` | `Objects` | Required |
| `ignoreTargetOffset` | `boolean` | `Ignore Target Offset` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `dX` | `number` | `dX` |
| `dY` | `number` | `dY` |
| `dZ` | `number` | `dZ` |
| `dMag` | `number` | `dMag` |
| `resultantObject` | `CollectionObjectName` | `Resultant Object` |

```ts
export interface QueryPointToObjectsResult {
  readonly dX: number;
  readonly dY: number;
  readonly dZ: number;
  readonly dMag: number;
  readonly resultantObject: CollectionObjectName;
}

export interface QueryPointToObjectsInput {
  readonly pointName: PointName;
  readonly objects: Iterable<CollectionObjectName>;
  readonly ignoreTargetOffset?: boolean;
}

function queryPointToObjects(
  briosa: BriosaClient,
  input: QueryPointToObjectsInput,
  options?: BriosaCallOptions,
): Promise<QueryPointToObjectsResult>;
```

```ts
await queryPointToObjects(briosa, { pointName: ..., objects: ... });
```

Returns the 5 MP outputs in the named `QueryPointToObjectsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Point to Point Along Curve

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Point to Point Along Curve](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve) · [gRPC contract](/api/grpc/analysis-operations#query-point-to-point-along-curve)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `value1stPoint` | `PointName` | `1st Point` | Required |
| `value2ndPoint` | `PointName` | `2nd Point` | Required |
| `curve` | `CollectionObjectName` | `Curve` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `distanceAlongCurve` | `number` | `Distance Along Curve` |

```ts
export interface QueryPointToPointAlongCurveInput {
  readonly value1stPoint: PointName;
  readonly value2ndPoint: PointName;
  readonly curve: CollectionObjectName;
}

function queryPointToPointAlongCurve(
  briosa: BriosaClient,
  input: QueryPointToPointAlongCurveInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await queryPointToPointAlongCurve(briosa, { value1stPoint: ..., value2ndPoint: ..., curve: ... });
```

Returns the MP output `Distance Along Curve` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Points to Circle

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Points to Circle](/mp-command-catalog/commands/analysis-operations#query-points-to-circle) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-circle)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circleName` | `CollectionObjectName` | `Circle Name` | Required |
| `pointGroupName` | `CollectionObjectName` | `Point Group Name` | Required |
| `isInsideMeasurement` | `boolean` | `Is Inside Measurement` | true |
| `autoScaleVectorsToOfRadius` | `number` | `Auto Scale Vectors to % of Radius` | 40 |
| `vectorGroupNameForRadial` | `CollectionObjectName` | `Vector Group Name for Radial` | Required |
| `vectorGroupNameForPlanar` | `CollectionObjectName` | `Vector Group Name for Planar` | Required |
| `vectorGroupNameForCombined` | `CollectionObjectName` | `Vector Group Name for Combined` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

function queryPointsToCircle(
  briosa: BriosaClient,
  input: QueryPointsToCircleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await queryPointsToCircle(briosa, { circleName: ..., pointGroupName: ..., vectorGroupNameForRadial: ..., vectorGroupNameForPlanar: ..., vectorGroupNameForCombined: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Points to Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Points to Objects](/mp-command-catalog/commands/analysis-operations#query-points-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `Iterable<PointName>` | `Point Names` | Required |
| `objectNameListObjectsToProjectTo` | `Iterable<CollectionObjectName>` | `Object Name List (Objects to Project to)` | Required |
| `resultingObjectName` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `rmsTolerance00ForNone` | `number` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximumAbsoluteTolerance00ForNone` | `number` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `showResultsDialog` | `boolean` | `Show Results Dialog?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `rmsDeviation` | `number` | `RMS Deviation` |
| `maxAbsoluteDeviation` | `number` | `Max Absolute Deviation` |
| `averageDeviation` | `number` | `Average Deviation` |
| `standardDeviation` | `number` | `Standard Deviation` |

```ts
export interface QueryPointsToObjectsResult {
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
  readonly standardDeviation: number;
}

export interface QueryPointsToObjectsInput {
  readonly pointNames: Iterable<PointName>;
  readonly objectNameListObjectsToProjectTo: Iterable<CollectionObjectName>;
  readonly resultingObjectName: CollectionObjectName;
  readonly projectionOptions?: ProjectionOptions;
  readonly rmsTolerance00ForNone?: number;
  readonly maximumAbsoluteTolerance00ForNone?: number;
  readonly showResultsDialog?: boolean;
}

function queryPointsToObjects(
  briosa: BriosaClient,
  input: QueryPointsToObjectsInput,
  options?: BriosaCallOptions,
): Promise<QueryPointsToObjectsResult>;
```

```ts
await queryPointsToObjects(briosa, { pointNames: ..., objectNameListObjectsToProjectTo: ..., resultingObjectName: ... });
```

Returns the 4 MP outputs in the named `QueryPointsToObjectsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Query Points to Single Point

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Query Points to Single Point](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-single-point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `Iterable<PointName>` | `Point Names` | Required |
| `singlePoint` | `PointName` | `Single Point` | Required |
| `showVectorProperties` | `boolean` | `Show Vector Properties?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface QueryPointsToSinglePointInput {
  readonly pointNames: Iterable<PointName>;
  readonly singlePoint: PointName;
  readonly showVectorProperties?: boolean;
}

function queryPointsToSinglePoint(
  briosa: BriosaClient,
  input: QueryPointsToSinglePointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await queryPointsToSinglePoint(briosa, { pointNames: ..., singlePoint: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Re-Compute Calculated Items

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Re-Compute Calculated Items](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) · [gRPC contract](/api/grpc/analysis-operations#re-compute-calculated-items)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `targetsFromShots` | `boolean` | `Targets from Shots` | false |
| `hiddenPoints` | `boolean` | `Hidden Points` | false |
| `relationships` | `boolean` | `Relationships` | false |
| `refreshFilteredCloudData` | `boolean` | `Refresh Filtered Cloud Data?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ReComputeCalculatedItemsInput {
  readonly targetsFromShots?: boolean;
  readonly hiddenPoints?: boolean;
  readonly relationships?: boolean;
  readonly refreshFilteredCloudData?: boolean;
}

function reComputeCalculatedItems(
  briosa: BriosaClient,
  input?: ReComputeCalculatedItemsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await reComputeCalculatedItems(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Rename points based on inter-point distance to reference points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Rename points based on inter-point distance to reference points](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points) · [gRPC contract](/api/grpc/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceGroupName` | `CollectionObjectName` | `Reference Group Name` | Required |
| `groupToRenamePoints` | `CollectionObjectName` | `Group To Rename Points` | Required |
| `distanceThreshold` | `number` | `Distance Threshold` | 0.000000 |
| `verifyResults` | `boolean` | `Verify Results?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface RenamePointsBasedOnInterPointDistanceToReferencePointsInput {
  readonly referenceGroupName: CollectionObjectName;
  readonly groupToRenamePoints: CollectionObjectName;
  readonly distanceThreshold?: number;
  readonly verifyResults?: boolean;
}

function renamePointsBasedOnInterPointDistanceToReferencePoints(
  briosa: BriosaClient,
  input: RenamePointsBasedOnInterPointDistanceToReferencePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renamePointsBasedOnInterPointDistanceToReferencePoints(briosa, { referenceGroupName: ..., groupToRenamePoints: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Rename points based on proximity to reference points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Rename points based on proximity to reference points](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points) · [gRPC contract](/api/grpc/analysis-operations#rename-points-based-on-proximity-to-reference-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `referenceGroupName` | `CollectionObjectName` | `Reference Group Name` | Required |
| `groupToRenamePoints` | `CollectionObjectName` | `Group To Rename Points` | Required |
| `proximityThreshold` | `number` | `Proximity Threshold` | 0.000000 |
| `verifyResults` | `boolean` | `Verify Results?` | false |
| `renameAllProximatePoints` | `boolean` | `Rename All Proximate Points?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface RenamePointsBasedOnProximityToReferencePointsInput {
  readonly referenceGroupName: CollectionObjectName;
  readonly groupToRenamePoints: CollectionObjectName;
  readonly proximityThreshold?: number;
  readonly verifyResults?: boolean;
  readonly renameAllProximatePoints?: boolean;
}

function renamePointsBasedOnProximityToReferencePoints(
  briosa: BriosaClient,
  input: RenamePointsBasedOnProximityToReferencePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renamePointsBasedOnProximityToReferencePoints(briosa, { referenceGroupName: ..., groupToRenamePoints: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Reverse B-Splines

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Reverse B-Splines](/mp-command-catalog/commands/analysis-operations#reverse-b-splines) · [gRPC contract](/api/grpc/analysis-operations#reverse-b-splines)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `bSplineList` | `Iterable<CollectionObjectName>` | `B-Spline List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ReverseBSplinesInput {
  readonly bSplineList: Iterable<CollectionObjectName>;
}

function reverseBSplines(
  briosa: BriosaClient,
  input: ReverseBSplinesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await reverseBSplines(briosa, { bSplineList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Reverse Plane Normals

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Reverse Plane Normals](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals) · [gRPC contract](/api/grpc/analysis-operations#reverse-plane-normals)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `planeList` | `Iterable<CollectionObjectName>` | `Plane List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ReversePlaneNormalsInput {
  readonly planeList: Iterable<CollectionObjectName>;
}

function reversePlaneNormals(
  briosa: BriosaClient,
  input: ReversePlaneNormalsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await reversePlaneNormals(briosa, { planeList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Reverse Surface Normals

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Reverse Surface Normals](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals) · [gRPC contract](/api/grpc/analysis-operations#reverse-surface-normals)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surfaceList` | `Iterable<CollectionObjectName>` | `Surface List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ReverseSurfaceNormalsInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
}

function reverseSurfaceNormals(
  briosa: BriosaClient,
  input: ReverseSurfaceNormalsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await reverseSurfaceNormals(briosa, { surfaceList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Circle Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Circle Properties](/mp-command-catalog/commands/analysis-operations#set-circle-properties) · [gRPC contract](/api/grpc/analysis-operations#set-circle-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circleName` | `CollectionObjectName` | `Circle Name` | Required |
| `centerCoordinate` | `Vector` | `Center Coordinate` | Required |
| `normalDirection` | `Vector` | `Normal Direction` | Required |
| `radius` | `number` | `Radius` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCirclePropertiesInput {
  readonly circleName: CollectionObjectName;
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly radius?: number;
}

function setCircleProperties(
  briosa: BriosaClient,
  input: SetCirclePropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCircleProperties(briosa, { circleName: ..., centerCoordinate: ..., normalDirection: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Cone Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Cone Properties](/mp-command-catalog/commands/analysis-operations#set-cone-properties) · [gRPC contract](/api/grpc/analysis-operations#set-cone-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `coneName` | `CollectionObjectName` | `Cone Name` | Required |
| `coneEndPointInWorkingCoordinates` | `Vector` | `Cone End Point (in working coordinates)` | Required |
| `coneAxisInWorkingCoordinates` | `Vector` | `Cone Axis (in working coordinates)` | Required |
| `coneLength` | `number` | `Cone Length` | 0.000000 |
| `coneThetaStart` | `number` | `Cone Theta Start` | 0.000000 |
| `coneThetaSpan` | `number` | `Cone Theta Span` | 0.000000 |
| `coneIncludedAngle` | `number` | `Cone Included Angle` | 0.000000 |
| `cutLengthFromApex` | `number` | `Cut Length from Apex` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetConePropertiesInput {
  readonly coneName: CollectionObjectName;
  readonly coneEndPointInWorkingCoordinates: Vector;
  readonly coneAxisInWorkingCoordinates: Vector;
  readonly coneLength?: number;
  readonly coneThetaStart?: number;
  readonly coneThetaSpan?: number;
  readonly coneIncludedAngle?: number;
  readonly cutLengthFromApex?: number;
}

function setConeProperties(
  briosa: BriosaClient,
  input: SetConePropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setConeProperties(briosa, { coneName: ..., coneEndPointInWorkingCoordinates: ..., coneAxisInWorkingCoordinates: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Cylinder Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Cylinder Properties](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties) · [gRPC contract](/api/grpc/analysis-operations#set-cylinder-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cylinderName` | `CollectionObjectName` | `Cylinder Name` | Required |
| `beginCoordinate` | `Vector` | `Begin Coordinate` | Required |
| `axisDirection` | `Vector` | `Axis Direction` | Required |
| `length` | `number` | `Length` | 0.000000 |
| `diameter` | `number` | `Diameter` | 0.000000 |
| `nominalsPointInward` | `boolean` | `Nominals Point Inward` | true |
| `facets` | `number` | `Facets` | 32 |
| `enableThetaExtentDisplayMode` | `boolean` | `Enable Theta Extent Display Mode` | true |
| `thetaStartInDegrees` | `number` | `Theta Start in Degrees` | 0.000000 |
| `thetaSpanInDegrees` | `number` | `Theta Span in Degrees` | 360.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

function setCylinderProperties(
  briosa: BriosaClient,
  input: SetCylinderPropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCylinderProperties(briosa, { cylinderName: ..., beginCoordinate: ..., axisDirection: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Default Colorization Options

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Default Colorization Options](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options) · [gRPC contract](/api/grpc/analysis-operations#set-default-colorization-options)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `colorizationOptions` | `ColorizationOptions` | `Colorization Options` | Red |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetDefaultColorizationOptionsInput {
  readonly colorizationOptions?: ColorizationOptions;
}

function setDefaultColorizationOptions(
  briosa: BriosaClient,
  input?: SetDefaultColorizationOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setDefaultColorizationOptions(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Ellipse Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Ellipse Properties](/mp-command-catalog/commands/analysis-operations#set-ellipse-properties) · [gRPC contract](/api/grpc/analysis-operations#set-ellipse-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ellipseName` | `CollectionObjectName` | `Ellipse Name` | Required |
| `centerCoordinate` | `Vector` | `Center Coordinate` | Required |
| `normalDirection` | `Vector` | `Normal Direction` | Required |
| `majorAxisRadius` | `number` | `Major Axis Radius` | 0.000000 |
| `minorAxisRadius` | `number` | `Minor Axis Radius` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetEllipsePropertiesInput {
  readonly ellipseName: CollectionObjectName;
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly majorAxisRadius?: number;
  readonly minorAxisRadius?: number;
}

function setEllipseProperties(
  briosa: BriosaClient,
  input: SetEllipsePropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setEllipseProperties(briosa, { ellipseName: ..., centerCoordinate: ..., normalDirection: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Geometry Relationship Fit Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Geometry Relationship Fit Profile](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#set-geometry-relationship-fit-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometryType` | `GeometryType` | `Geometry Type` | Required |
| `relationshipRefList` | `Iterable<CollectionItemName>` | `Relationship Ref List` | Required |
| `fitProfileName` | `string` | `Fit Profile Name` | Empty |
| `applyCardinalPointSettings` | `boolean` | `Apply Cardinal Point Settings` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetGeometryRelationshipFitProfileInput {
  readonly geometryType: GeometryType;
  readonly relationshipRefList: Iterable<CollectionItemName>;
  readonly fitProfileName?: string;
  readonly applyCardinalPointSettings?: boolean;
}

function setGeometryRelationshipFitProfile(
  briosa: BriosaClient,
  input: SetGeometryRelationshipFitProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setGeometryRelationshipFitProfile(briosa, { geometryType: ..., relationshipRefList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Line Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Line Properties](/mp-command-catalog/commands/analysis-operations#set-line-properties) · [gRPC contract](/api/grpc/analysis-operations#set-line-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lineName` | `CollectionObjectName` | `Line Name` | Required |
| `beginCoordinate` | `Vector` | `Begin Coordinate` | Required |
| `endCoordinate` | `Vector` | `End Coordinate` | Required |
| `lengthOptional` | `number` | `Length (optional)` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetLinePropertiesInput {
  readonly lineName: CollectionObjectName;
  readonly beginCoordinate: Vector;
  readonly endCoordinate: Vector;
  readonly lengthOptional?: number;
}

function setLineProperties(
  briosa: BriosaClient,
  input: SetLinePropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setLineProperties(briosa, { lineName: ..., beginCoordinate: ..., endCoordinate: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Measurement Auxiliary Data

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Measurement Auxiliary Data](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data) · [gRPC contract](/api/grpc/analysis-operations#set-measurement-auxiliary-data)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |
| `auxiliaryName` | `string` | `Auxiliary Name` | Empty |
| `value` | `number` | `Value` | 0.000000 |
| `units` | `string` | `Units` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetMeasurementAuxiliaryDataInput {
  readonly pointName: PointName;
  readonly auxiliaryName?: string;
  readonly value?: number;
  readonly units?: string;
}

function setMeasurementAuxiliaryData(
  briosa: BriosaClient,
  input: SetMeasurementAuxiliaryDataInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setMeasurementAuxiliaryData(briosa, { pointName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Object Reporting Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Object Reporting Frame](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame) · [gRPC contract](/api/grpc/analysis-operations#set-object-reporting-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetObjectReportingFrameInput {
  readonly objectName: CollectionObjectName;
  readonly reportingFrame: CollectionObjectName;
}

function setObjectReportingFrame(
  briosa: BriosaClient,
  input: SetObjectReportingFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setObjectReportingFrame(briosa, { objectName: ..., reportingFrame: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Point Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Point Properties](/mp-command-catalog/commands/analysis-operations#set-point-properties) · [gRPC contract](/api/grpc/analysis-operations#set-point-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameList` | `Iterable<PointName>` | `Point Name List` | Required |
| `planarOffset` | `number` | `Planar Offset` | 0.000000 |
| `radialOffset` | `number` | `Radial Offset` | 0.000000 |
| `positionTolerance` | `ToleranceVectorOptions` | `Position Tolerance` | Required |
| `componentWeights` | `Vector` | `Component Weights` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPointPropertiesInput {
  readonly pointNameList: Iterable<PointName>;
  readonly planarOffset?: number;
  readonly radialOffset?: number;
  readonly positionTolerance: ToleranceVectorOptions;
  readonly componentWeights: Vector;
}

function setPointProperties(
  briosa: BriosaClient,
  input: SetPointPropertiesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPointProperties(briosa, { pointNameList: ..., positionTolerance: ..., componentWeights: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Point Weights From Uncertainties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Point Weights From Uncertainties](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties) · [gRPC contract](/api/grpc/analysis-operations#set-point-weights-from-uncertainties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameList` | `Iterable<PointName>` | `Point Name List` | Required |
| `uncertaintyReferenceFrameMode` | `string` | `Uncertainty Reference Frame Mode` | With respect to WORLD |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` | Required |
| `weightNormalizationMode` | `string` | `Weight Normalization Mode` | Set to fixed value |
| `fixedWeightValue` | `number` | `Fixed Weight Value` | 1.000000 |
| `outputWeightedPointGroup` | `CollectionObjectName` | `Output Weighted Point Group` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `outputWeightedPointList` | `readonly PointName[]` | `Output Weighted Point List` |

```ts
export interface SetPointWeightsFromUncertaintiesInput {
  readonly pointNameList: Iterable<PointName>;
  readonly uncertaintyReferenceFrameMode?: string;
  readonly reportingFrame: CollectionObjectName;
  readonly weightNormalizationMode?: string;
  readonly fixedWeightValue?: number;
  readonly outputWeightedPointGroup: CollectionObjectName;
}

function setPointWeightsFromUncertainties(
  briosa: BriosaClient,
  input: SetPointWeightsFromUncertaintiesInput,
  options?: BriosaCallOptions,
): Promise<readonly PointName[]>;
```

```ts
await setPointWeightsFromUncertainties(briosa, { pointNameList: ..., reportingFrame: ..., outputWeightedPointGroup: ... });
```

Returns the MP output `Output Weighted Point List` directly as `readonly PointName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Transform for i-th Frame in Frame Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Transform for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#set-transform-for-i-th-frame-in-frame-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frameSet` | `CollectionObjectName` | `Frame Set` | Required |
| `frameSetIndex` | `number` | `Frame Set Index` | 0 |
| `transformInWorking` | `Transform` | `Transform in Working` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetTransformForIthFrameInFrameSetInput {
  readonly frameSet: CollectionObjectName;
  readonly frameSetIndex?: number;
  readonly transformInWorking: Transform;
}

function setTransformForIthFrameInFrameSet(
  briosa: BriosaClient,
  input: SetTransformForIthFrameInFrameSetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setTransformForIthFrameInFrameSet(briosa, { frameSet: ..., transformInWorking: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Sphere Axis Check

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Sphere Axis Check](/mp-command-catalog/commands/analysis-operations#sphere-axis-check) · [gRPC contract](/api/grpc/analysis-operations#sphere-axis-check)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `spherePointsGroupName` | `CollectionObjectName` | `Sphere Points Group Name` | Required |
| `sphereTargetRadius` | `number` | `Sphere Target Radius` | 0.000000 |
| `pointToCreateAtSphereCenter` | `PointName` | `Point To Create at Sphere Center` | Required |
| `lineDefiningTheAxis` | `CollectionObjectName` | `Line defining the axis` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `sphereFitRmsError` | `number` | `Sphere Fit RMS Error` |
| `sphereFitMaxError` | `number` | `Sphere Fit Max Error` |
| `vectorRepresentation` | `Vector` | `Vector Representation` |
| `xValue` | `number` | `X Value` |
| `yValue` | `number` | `Y Value` |
| `zValue` | `number` | `Z Value` |
| `magnitude` | `number` | `Magnitude` |

```ts
export interface SphereAxisCheckResult {
  readonly sphereFitRmsError: number;
  readonly sphereFitMaxError: number;
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
  readonly magnitude: number;
}

export interface SphereAxisCheckInput {
  readonly spherePointsGroupName: CollectionObjectName;
  readonly sphereTargetRadius?: number;
  readonly pointToCreateAtSphereCenter: PointName;
  readonly lineDefiningTheAxis: CollectionObjectName;
}

function sphereAxisCheck(
  briosa: BriosaClient,
  input: SphereAxisCheckInput,
  options?: BriosaCallOptions,
): Promise<SphereAxisCheckResult>;
```

```ts
await sphereAxisCheck(briosa, { spherePointsGroupName: ..., pointToCreateAtSphereCenter: ..., lineDefiningTheAxis: ... });
```

Returns the 7 MP outputs in the named `SphereAxisCheckResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Temperature Compensate a group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Temperature Compensate a group](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group) · [gRPC contract](/api/grpc/analysis-operations#temperature-compensate-a-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalGroup` | `CollectionObjectName` | `Original Group` | Required |
| `scalingOriginCoordinateFrame` | `FrameName` | `Scaling Origin (coordinate frame)` | Required |
| `materialCte1DegF` | `number` | `Material CTE (1/Deg F)` | 0.000000 |
| `initialTemperatureF` | `number` | `Initial Temperature (F)` | 0.000000 |
| `finalTemperatureF` | `number` | `Final Temperature (F)` | 0.000000 |
| `scaledGroupName` | `CollectionObjectName` | `Scaled Group Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface TemperatureCompensateAGroupInput {
  readonly originalGroup: CollectionObjectName;
  readonly scalingOriginCoordinateFrame: FrameName;
  readonly materialCte1DegF?: number;
  readonly initialTemperatureF?: number;
  readonly finalTemperatureF?: number;
  readonly scaledGroupName: CollectionObjectName;
}

function temperatureCompensateAGroup(
  briosa: BriosaClient,
  input: TemperatureCompensateAGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await temperatureCompensateAGroup(briosa, { originalGroup: ..., scalingOriginCoordinateFrame: ..., scaledGroupName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Transform Objects - Frame To Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Transform Objects - Frame To Frame](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame) · [gRPC contract](/api/grpc/analysis-operations#transform-objects---frame-to-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectNameList` | `Iterable<CollectionObjectName>` | `Object Name List` | Required |
| `initialFrameName` | `CollectionObjectName` | `Initial Frame Name` | Required |
| `destinationFrameName` | `CollectionObjectName` | `Destination Frame Name` | Required |
| `numberOfSteps` | `number` | `Number of Steps` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface TransformObjectsFrameToFrameInput {
  readonly objectNameList: Iterable<CollectionObjectName>;
  readonly initialFrameName: CollectionObjectName;
  readonly destinationFrameName: CollectionObjectName;
  readonly numberOfSteps?: number;
}

function transformObjectsFrameToFrame(
  briosa: BriosaClient,
  input: TransformObjectsFrameToFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await transformObjectsFrameToFrame(briosa, { objectNameList: ..., initialFrameName: ..., destinationFrameName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Transform Objects by Delta (About Working Frame)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Transform Objects by Delta (About Working Frame)](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame) · [gRPC contract](/api/grpc/analysis-operations#transform-objects-by-delta-about-working-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToTransform` | `Iterable<CollectionObjectName>` | `Objects to Transform` | Required |
| `deltaTransform` | `Transform` | `Delta Transform` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface TransformObjectsByDeltaAboutWorkingFrameInput {
  readonly objectsToTransform: Iterable<CollectionObjectName>;
  readonly deltaTransform: Transform;
}

function transformObjectsByDeltaAboutWorkingFrame(
  briosa: BriosaClient,
  input: TransformObjectsByDeltaAboutWorkingFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await transformObjectsByDeltaAboutWorkingFrame(briosa, { objectsToTransform: ..., deltaTransform: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Transform Objects by Delta (World Transform Operator)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Transform Objects by Delta (World Transform Operator)](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator) · [gRPC contract](/api/grpc/analysis-operations#transform-objects-by-delta-world-transform-operator)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToTransform` | `Iterable<CollectionObjectName>` | `Objects to Transform` | Required |
| `deltaTransform` | `WorldTransform` | `Delta Transform` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface TransformObjectsByDeltaWorldTransformOperatorInput {
  readonly objectsToTransform: Iterable<CollectionObjectName>;
  readonly deltaTransform: WorldTransform;
}

function transformObjectsByDeltaWorldTransformOperator(
  briosa: BriosaClient,
  input: TransformObjectsByDeltaWorldTransformOperatorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await transformObjectsByDeltaWorldTransformOperator(briosa, { objectsToTransform: ..., deltaTransform: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Translate Objects by Delta

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Translate Objects by Delta](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta) · [gRPC contract](/api/grpc/analysis-operations#translate-objects-by-delta)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToTranslate` | `Iterable<CollectionObjectName>` | `Objects to Translate` | Required |
| `deltaTranslation` | `Vector` | `Delta Translation` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface TranslateObjectsByDeltaInput {
  readonly objectsToTranslate: Iterable<CollectionObjectName>;
  readonly deltaTranslation: Vector;
}

function translateObjectsByDelta(
  briosa: BriosaClient,
  input: TranslateObjectsByDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await translateObjectsByDelta(briosa, { objectsToTranslate: ..., deltaTranslation: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
