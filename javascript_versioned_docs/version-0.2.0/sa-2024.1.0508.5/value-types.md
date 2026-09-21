---
title: MP Value Types
description: Released client 0.2.0 MP value types and choices for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# MP Value Types

[SA 2026.1.0529.7](/api/javascript/value-types) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/value-types)

These declarations describe the handwritten client **0.2.0** for **SA 2024.1.0508.5**. Generated transport types remain private. Operation pages define required inputs and omission behavior. Numeric protobuf values and public language values are separate representations; do not substitute values from another target.

## `AngularUnits`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const AngularUnits = Object.freeze({
  degrees: 'degrees',
  degreesMinutesSeconds: 'degreesMinutesSeconds',
  radians: 'radians',
  milliradians: 'milliradians',
  gonsGrad: 'gonsGrad',
  mils: 'mils',
  arcseconds: 'arcseconds',
  degreesMinutes: 'degreesMinutes',
} as const);
export type AngularUnits = (typeof AngularUnits)[keyof typeof AngularUnits];
```

## `AsciiFileFormat`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const AsciiFileFormat = Object.freeze({
  xYZ: 'xYZ',
  xYZOffsetOffset2: 'xYZOffsetOffset2',
  xYZNotes: 'xYZNotes',
  radiusThetaPhi: 'radiusThetaPhi',
  radiusThetaZ: 'radiusThetaZ',
  pointNameXYZ: 'pointNameXYZ',
  pointNameXYZNotes: 'pointNameXYZNotes',
  pointNameXYZOffsetOffset2: 'pointNameXYZOffsetOffset2',
  pointNameXYZUxUyUz: 'pointNameXYZUxUyUz',
  pointNameXYZTxTyTzTd: 'pointNameXYZTxTyTzTd',
  pointNameXYZWxWyWzWmag: 'pointNameXYZWxWyWzWmag',
  pointNameXYZHighLowTolerance: 'pointNameXYZHighLowTolerance',
  pointNameXYZTxTyTzTdWxWyWz: 'pointNameXYZTxTyTzTdWxWyWz',
  pointNameXYZWxWyWzTxTyTzTd: 'pointNameXYZWxWyWzTxTyTzTd',
  pointNameXYZHighLowToleranceWxWyWz: 'pointNameXYZHighLowToleranceWxWyWz',
  pointNameXYZWxWyWzHighLowTolerance: 'pointNameXYZWxWyWzHighLowTolerance',
  pointNameRadiusThetaPhi: 'pointNameRadiusThetaPhi',
  pointNameRadiusThetaZ: 'pointNameRadiusThetaZ',
  pointNameXYZGroupName: 'pointNameXYZGroupName',
  pointNameYXZGroupName: 'pointNameYXZGroupName',
  groupNamePointNameXYZ: 'groupNamePointNameXYZ',
  groupNamePointNameXYZOffsetOffset2: 'groupNamePointNameXYZOffsetOffset2',
  groupNamePointNameXYZNotes: 'groupNamePointNameXYZNotes',
  groupNamePointNameXYZUxUyUz: 'groupNamePointNameXYZUxUyUz',
  groupNamePointNameRadiusThetaPhi: 'groupNamePointNameRadiusThetaPhi',
  groupNamePointNameRadiusThetaZ: 'groupNamePointNameRadiusThetaZ',
  collectionGroupPointXYZ: 'collectionGroupPointXYZ',
  collectionGroupPointXYZNotes: 'collectionGroupPointXYZNotes',
  collectionGroupPointRadiusThetaPhi: 'collectionGroupPointRadiusThetaPhi',
  collectionGroupPointRadiusThetaZ: 'collectionGroupPointRadiusThetaZ',
  xYZIJK: 'xYZIJK',
  vectorNameXYZIJK: 'vectorNameXYZIJK',
  vectorNameXYZDxDyDzSignedMagnitude: 'vectorNameXYZDxDyDzSignedMagnitude',
  vectorGroupNameVectorNameXYZIJK: 'vectorGroupNameVectorNameXYZIJK',
  vectorGroupNameVectorNameXYZDxDyDzSignedMagnitude:
    'vectorGroupNameVectorNameXYZDxDyDzSignedMagnitude',
  frameNameXYZRxRyRzTimestamp: 'frameNameXYZRxRyRzTimestamp',
  frameNameXYZEulerXYZTimestamp: 'frameNameXYZEulerXYZTimestamp',
  frameNameXYZEulerZYXTimestamp: 'frameNameXYZEulerZYXTimestamp',
  frameNameXYZEulerZYZTimestamp: 'frameNameXYZEulerZYZTimestamp',
  frameNameXYZEulerZXZTimestamp: 'frameNameXYZEulerZXZTimestamp',
  frameNameTransformationMatrixTimestamp:
    'frameNameTransformationMatrixTimestamp',
  transformationMatrixTimestamp: 'transformationMatrixTimestamp',
  frameNameXYZQuaternionTimestamp: 'frameNameXYZQuaternionTimestamp',
  planeNameXYZDxDyDzPlaneSize: 'planeNameXYZDxDyDzPlaneSize',
} as const);
export type AsciiFileFormat = (typeof AsciiFileFormat)[keyof typeof AsciiFileFormat];
```

## `BSplineFitOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface BSplineFitOptions {
  readonly openCurve?: boolean;
  readonly useInterpolationForFit?: boolean;
  readonly numberOfControlPoints?: number;
  readonly degreeOfCurve?: number;
  readonly sortMethod?: BSplinePointSortMode;
  readonly spanAnyGap?: boolean;
  readonly terminationGapLength?: number;
  readonly ignoreProximatePoints?: boolean;
  readonly proximatePointThreshold?: number;
  readonly useGlobalTessellationOptions?: boolean;
  readonly maximumChordalDeviation?: number;
  readonly maximumTrimEdgeAngle?: number;
  readonly terminationAverageMultiplier?: number;
  readonly extension?: number;
}
```

## `BaseColorType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const BaseColorType = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue',
} as const);
export type BaseColorType = (typeof BaseColorType)[keyof typeof BaseColorType];
```

## `BaseMidColorType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const BaseMidColorType = Object.freeze({
  red: 'red',
  green: 'green',
  gray: 'gray',
  blue: 'blue',
} as const);
export type BaseMidColorType = (typeof BaseMidColorType)[keyof typeof BaseMidColorType];
```

## `CalibrationApplianceNodeStatus`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface CalibrationApplianceNodeStatus {
  readonly instrumentConnected: boolean;
  readonly calibrationApplianceConnected: boolean;
}
```

## `CalloutPosition`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface CalloutPosition {
  readonly xPosition: number;
  readonly yPosition: number;
  readonly xAnchorPosition: number;
  readonly yAnchorPosition: number;
  readonly calloutWidth: number;
  readonly calloutHeight: number;
}
```

## `CalloutViewProperties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface CalloutViewProperties {
  readonly lockViewPoint?: boolean;
  readonly recallWorkingFrame?: boolean;
  readonly recallVisibleLayer?: boolean;
  readonly calloutLeaderThickness?: number; // 2
  readonly calloutLeaderColor?: Color; // RGB 128, 128, 128
  readonly calloutBorderThickness?: number; // 2
  readonly calloutBorderColor?: Color; // RGB 0, 0, 255
  readonly divideTextWithLines?: boolean;
  readonly font?: Font;
}
```

## `ChartName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface ChartName {
  readonly name: string;
}
```

## `ChartType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ChartType = Object.freeze({
  runChart: 'runChart',
  individualXMovingRange: 'individualXMovingRange',
  bullseyeChart: 'bullseyeChart',
} as const);
export type ChartType = (typeof ChartType)[keyof typeof ChartType];
```

## `CloudThinningOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface CloudThinningOptions {
  readonly mode?: CloudThinningMode;
  readonly pointIncrement?: number;
  readonly minimumNumberOfPoints?: number;
  readonly maximumNumberOfPoints?: number;
}
```

## `CloudToCadAlignmentResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface CloudToCadAlignmentResult {
  readonly rmsDeviation: number;
  readonly averageDeviation: number;
  readonly maximumAbsoluteDeviation: number;
  readonly resultantTransformInWorking: Transform;
}
```

## `CloudViewerInstrumentInput`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface CloudViewerInstrumentInput {
  readonly instrument: CollectionInstrumentId;
}
```

## `CollectionGroupName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface CollectionGroupName {
  readonly collectionName: string;
  readonly groupName: string;
}
```

## `CollectionInstrumentId`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface CollectionInstrumentId {
  readonly collectionName: string;
  readonly instrumentId: number;
}
```

## `CollectionItemName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface CollectionItemName {
  readonly collectionName: string;
  readonly itemName: string;
  readonly itemType?: ItemType;
}
```

## `CollectionMachineId`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface CollectionMachineId {
  readonly collectionName: string;
  readonly machineId: number;
}
```

## `CollectionName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface CollectionName {
  readonly name: string;
}
```

## `CollectionObjectName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface CollectionObjectName {
  readonly collectionName: string;
  readonly objectName: string;
  readonly objectType: ObjectType;
}
```

## `CollectionVectorGroupName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface CollectionVectorGroupName {
  readonly collectionName: string;
  readonly vectorGroupName: string;
}
```

## `Color`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface Color {
  readonly red: number;
  readonly green: number;
  readonly blue: number;
}
```

## `ColorRangeMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ColorRangeMethod = Object.freeze({
  singleColor: 'singleColor',
  continuous: 'continuous',
  tolerancedContinuous: 'tolerancedContinuous',
  tolerancedGoNoGo: 'tolerancedGoNoGo',
  tolerancedGoNoGoWithWarning: 'tolerancedGoNoGoWithWarning',
  discreteColors: 'discreteColors',
} as const);
export type ColorRangeMethod = (typeof ColorRangeMethod)[keyof typeof ColorRangeMethod];
```

## `ColorizationOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ColorizationOptions = Object.freeze({
  default: deepFreeze<ColorizationOptions>({
    colorRangeMethod: ColorRangeMethod.continuous,
    baseHighColor: BaseColorType.blue,
    baseMidColor: BaseMidColorType.green,
    baseLowColor: BaseColorType.red,
    drawTubes: false,
    drawArrowheads: true,
    indicateValues: false,
    vectorMagnification: 100,
    vectorWidth: 1,
    drawBlotches: false,
    blotchSize: 0.1,
    showOutOfToleranceOnly: false,
    showColorBarInView: false,
    showColorBarPercentages: true,
    showColorBarFractions: false,
    highSaturationLimit: 0.5,
    lowSaturationLimit: -0.5,
    highTolerance: 0.03,
    lowTolerance: -0.03,
  }),
} as const);
export type ColorizationOptions = (typeof ColorizationOptions)[keyof typeof ColorizationOptions];
```

## `CompTechnique`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const CompTechnique = Object.freeze({
  standard: 'standard',
  maxInscribed: 'maxInscribed',
  minCircumscribed: 'minCircumscribed',
} as const);
export type CompTechnique = (typeof CompTechnique)[keyof typeof CompTechnique];
```

## `CoordinateSystemType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const CoordinateSystemType = Object.freeze({
  cartesian: 'cartesian',
  cylindric: 'cylindric',
  polar: 'polar',
} as const);
export type CoordinateSystemType = (typeof CoordinateSystemType)[keyof typeof CoordinateSystemType];
```

## `CurrentTrappingStatus`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface CurrentTrappingStatus {
  readonly active: boolean;
  readonly focusedItem?: CollectionItemName;
  readonly instrument?: CollectionInstrumentId;
}
```

## `DatasetType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const DatasetType = Object.freeze({
  x: 'x',
  y: 'y',
  z: 'z',
  magnitude: 'magnitude',
} as const);
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];
```

## `DatumInput`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface DatumInput {
  readonly datum: CollectionItemName;
}
```

## `DegreeOfFreedom`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const DegreeOfFreedom = Object.freeze({
  any: 'any',
  lockFocusLocation: 'lockFocusLocation',
  lockVertexLocation: 'lockVertexLocation',
} as const);
export type DegreeOfFreedom = (typeof DegreeOfFreedom)[keyof typeof DegreeOfFreedom];
```

## `DistanceUnits`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const DistanceUnits = Object.freeze({
  meters: 'meters',
  centimeters: 'centimeters',
  millimeters: 'millimeters',
  feet: 'feet',
  inches: 'inches',
  usSurveyFeet: 'usSurveyFeet',
} as const);
export type DistanceUnits = (typeof DistanceUnits)[keyof typeof DistanceUnits];
```

## `EmbeddedReportFile`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface EmbeddedReportFile {
  readonly collectionName: string;
  readonly fileName: string;
}
```

## `EulerZxzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface EulerZxzTransformComponents {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly firstRz: number;
  readonly rx: number;
  readonly secondRz: number;
}
```

## `EulerZyxTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface EulerZyxTransformComponents {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly rz: number;
  readonly ry: number;
  readonly rx: number;
}
```

## `EulerZyzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface EulerZyzTransformComponents {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly firstRz: number;
  readonly ry: number;
  readonly secondRz: number;
}
```

## `ExportDataDelimeterType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ExportDataDelimeterType = Object.freeze({
  space: 'space',
  comma: 'comma',
  tab: 'tab',
} as const);
export type ExportDataDelimeterType = (typeof ExportDataDelimeterType)[keyof typeof ExportDataDelimeterType];
```

## `ExportTargetNameFormat`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ExportTargetNameFormat = Object.freeze({
  collectionGroupTarget: 'collectionGroupTarget',
  groupTarget: 'groupTarget',
  target: 'target',
  none: 'none',
} as const);
export type ExportTargetNameFormat = (typeof ExportTargetNameFormat)[keyof typeof ExportTargetNameFormat];
```

## `ExportVectorNameFormat`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ExportVectorNameFormat = Object.freeze({
  collectionGroupVector: 'collectionGroupVector',
  groupVector: 'groupVector',
  vector: 'vector',
  none: 'none',
} as const);
export type ExportVectorNameFormat = (typeof ExportVectorNameFormat)[keyof typeof ExportVectorNameFormat];
```

## `FeatureCheckCylinderEvalOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckCylinderEvalOptions {
  readonly enableActualDiameterOverride: boolean;
  readonly actualDiameterOverride: number;
}
```

## `FeatureCheckDatumReference`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckDatumReference {
  readonly referenceString: string;
  readonly cadFaces: string;
  readonly saObjects: readonly CollectionObjectName[];
  readonly auxiliarySaObjects: readonly CollectionObjectName[];
  readonly geometryRelationships: readonly CollectionItemName[];
  readonly auxiliaryGeometryRelationships: readonly CollectionItemName[];
}
```

## `FeatureCheckDatumReferencesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckDatumReferencesResult {
  readonly datum1: FeatureCheckDatumReference;
  readonly datum2: FeatureCheckDatumReference;
  readonly datum3: FeatureCheckDatumReference;
}
```

## `FeatureCheckInput`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckInput {
  readonly featureCheck: CollectionItemName;
}
```

## `FeatureCheckReportingOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckReportingOptions {
  readonly showFeatureControlFrameSummary: boolean;
  readonly includeTitle: boolean;
  readonly showDatumAndToleranceSummary: boolean;
  readonly showFeatureSummary: boolean;
  readonly showPointDetails: boolean;
  readonly showLowerTierTables: boolean;
}
```

## `FileReference`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface FileReference {
  readonly path: string;
  readonly embeddedFile: boolean;
}
```

## `FilterProximitySettings`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

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
```

## `FitConstraintScalarOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const FitConstraintScalarOptions = Object.freeze({
  default: deepFreeze<FitConstraintScalarOptions>({
    high: disabledScalarLimit,
    low: disabledScalarLimit,
  }),
} as const);
export type FitConstraintScalarOptions = (typeof FitConstraintScalarOptions)[keyof typeof FitConstraintScalarOptions];
```

## `FitDofOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FitDofOptions {
  readonly allowX?: boolean;
  readonly allowY?: boolean;
  readonly allowZ?: boolean;
  readonly allowRx?: boolean;
  readonly allowRy?: boolean;
  readonly allowRz?: boolean;
  readonly rotateAboutCentroid?: boolean;
}
```

## `FitErrorResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FitErrorResult {
  readonly rmsError: number;
  readonly maximumError: number;
}
```

## `FitMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const FitMethod = Object.freeze({
  minimumRms: 'minimumRms',
  bestAxis: 'bestAxis',
} as const);
export type FitMethod = (typeof FitMethod)[keyof typeof FitMethod];
```

## `FixedXyzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FixedXyzTransformComponents {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly rx: number;
  readonly ry: number;
  readonly rz: number;
}
```

## `FixedXyzTransformVectors`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface FixedXyzTransformVectors {
  readonly positionInWorking: Vector;
  readonly orientationInWorking: Vector;
}
```

## `Font`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const Font = Object.freeze({
  default: deepFreeze<Font>({
    fontName: 'MS Shell Dlg',
    size: 8,
    color: { red: 0, green: 0, blue: 0 },
  }),
} as const);
export type Font = (typeof Font)[keyof typeof Font];
```

## `FrameName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface FrameName {
  readonly name: string;
}
```

## `GdtMeasurements`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface GdtMeasurements {
  readonly pointNames: readonly PointName[];
  readonly cloudNames: readonly CollectionObjectName[];
}
```

## `GdtOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface GdtOptions {
  readonly useHighPoints: boolean;
  readonly extrapolateAxialExtent: boolean;
  readonly excludeFromAutoEvaluation: boolean;
  readonly distanceBetweenMode?: GdtDistanceBetweenMode;
  readonly evaluationMethod?: GdtEvaluationMethod;
  readonly createActualFeatures: boolean;
  readonly createSolvedPoints: boolean;
  readonly crossSectionCriteria: number;
  readonly enableAutoFeatureDetection: boolean;
}
```

## `GeneralRelationshipStatistics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface GeneralRelationshipStatistics {
  readonly maxDeviation: number;
  readonly rms: number;
  readonly hasSignedDeviation: boolean;
  readonly signedMaxDeviation: number;
  readonly signedMinDeviation: number;
}
```

## `GeometryRelationshipOutlierFilterMetrics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
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
```

## `GeometryType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const GeometryType = Object.freeze({
  line: 'line',
  plane: 'plane',
  circle: 'circle',
  sphere: 'sphere',
  cylinder: 'cylinder',
  cone: 'cone',
  paraboloid: 'paraboloid',
  ellipse: 'ellipse',
  slot: 'slot',
  torus: 'torus',
} as const);
export type GeometryType = (typeof GeometryType)[keyof typeof GeometryType];
```

## `GroupAverageResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface GroupAverageResult {
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
}
```

## `InstrumentBestFitResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface InstrumentBestFitResult {
  readonly transformInWorking: Transform;
  readonly optimumTransform: WorldTransform;
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
  readonly numberOfUnknowns: number;
  readonly numberOfEquations: number;
  readonly robustness: number;
}
```

## `InstrumentModelResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface InstrumentModelResult {
  readonly name: string;
  readonly model: string;
}
```

## `InstrumentPositionUpdate`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface InstrumentPositionUpdate {
  readonly xOrR: number;
  readonly yOrThetaDegrees: number;
  readonly zOrPhiDegrees: number;
  readonly timeSinceUpdateSeconds: number;
  readonly timestampApproximate: string;
}
```

## `InstrumentTargetStatus`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface InstrumentTargetStatus {
  readonly isLocked: boolean;
  readonly name: string;
  readonly numberOfFaces: number;
  readonly lockedFace: number;
}
```

## `InstrumentTargetsAndModeProfiles`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface InstrumentTargetsAndModeProfiles {
  readonly modeProfiles: readonly string[];
  readonly targetNames: readonly string[];
}
```

## `InstrumentTypeName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface InstrumentTypeName {
  readonly value: string;
}
```

## `InstrumentWeatherSetting`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface InstrumentWeatherSetting {
  readonly temperatureFahrenheit: number;
  readonly pressureMmHg: number;
  readonly relativeHumidityPercent: number;
  readonly setAutomatically: boolean;
}
```

## `InstrumentXyzUncertainties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface InstrumentXyzUncertainties {
  readonly xUncertainty: number;
  readonly yUncertainty: number;
  readonly zUncertainty: number;
}
```

## `ItemType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ItemType = Object.freeze({
  any: 'any',
  alignment: 'alignment',
  annotation: 'annotation',
  bSpline: 'bSpline',
  calibrationApplianceNode: 'calibrationApplianceNode',
  calloutView: 'calloutView',
  chart: 'chart',
  circle: 'circle',
  cloud: 'cloud',
  scanStripeCloud: 'scanStripeCloud',
  crossSectionCloud: 'crossSectionCloud',
  cone: 'cone',
  cylinder: 'cylinder',
  datum: 'datum',
  dimension: 'dimension',
  ellipse: 'ellipse',
  event: 'event',
  featureCheck: 'featureCheck',
  frame: 'frame',
  frameSet: 'frameSet',
  line: 'line',
  paraboloid: 'paraboloid',
  perimeter: 'perimeter',
  picture: 'picture',
  plane: 'plane',
  pointGroup: 'pointGroup',
  pointSet: 'pointSet',
  polySurface: 'polySurface',
  relationship: 'relationship',
  saDoc: 'saDoc',
  saReport: 'saReport',
  saReportTemplate: 'saReportTemplate',
  scaleBar: 'scaleBar',
  scanStripeMesh: 'scanStripeMesh',
  slot: 'slot',
  sphere: 'sphere',
  surface: 'surface',
  table: 'table',
  tcpFixture: 'tcpFixture',
  torus: 'torus',
  vectorGroup: 'vectorGroup',
} as const);
export type ItemType = (typeof ItemType)[keyof typeof ItemType];
```

## `LastInstrumentIndexResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface LastInstrumentIndexResult {
  readonly instrumentIndex: number;
  readonly instrument: CollectionInstrumentId;
}
```

## `LrFlipTestResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface LrFlipTestResult {
  readonly frontRangeInches: number;
  readonly frontAzimuthDegrees: number;
  readonly frontElevationDegrees: number;
  readonly frontQuality: number;
  readonly backRangeInches: number;
  readonly backAzimuthDegrees: number;
  readonly backElevationDegrees: number;
  readonly backQuality: number;
  readonly frontBackDifferenceRangeInches: number;
  readonly frontBackDifferenceAzimuthDegrees: number;
  readonly frontBackDifferenceElevationDegrees: number;
}
```

## `LrInstrumentInput`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface LrInstrumentInput {
  readonly instrument: CollectionInstrumentId;
}
```

## `LrLoSeparationTestResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface LrLoSeparationTestResult {
  readonly primaryLoIndex: number;
  readonly secondaryLoIndex: number;
  readonly primaryLoMeasurementCount: number;
  readonly primaryLoRangeMeanInches: number;
  readonly primaryLoRangeStandardDeviationInches: number;
  readonly primaryLoQualityMean: number;
  readonly primaryLoQualityStandardDeviation: number;
  readonly secondaryLoMeasurementCount: number;
  readonly secondaryLoRangeMeanInches: number;
  readonly secondaryLoRangeStandardDeviationInches: number;
  readonly secondaryLoQualityMean: number;
  readonly secondaryLoQualityStandardDeviation: number;
}
```

## `LrSnrInfo`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface LrSnrInfo {
  readonly snr: number;
  readonly sizeOfDataArray: number;
  readonly peakValueIndex: number;
  readonly peakValueDb: number;
  readonly measuredRangeMeters: number;
}
```

## `MakeGdtDatumAnnotationOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface MakeGdtDatumAnnotationOptions {
  datumName: string;
  objects?: readonly CollectionObjectName[];
  geometryRelationships?: readonly CollectionItemName[];
  surfaceFaces?: SurfaceFaceList;
  auxiliaryObject?: CollectionObjectName;
  auxiliaryGeometryRelationship?: CollectionItemName;
  isSlot?: boolean;
  forceSurfaceFeature?: boolean;
}
```

## `MakeGdtFeatureCheckAnnotationOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface MakeGdtFeatureCheckAnnotationOptions {
  featureAnnotationName: string;
  featureType?: GdtFeatureType;
  objects?: readonly CollectionObjectName[];
  geometryRelationships?: readonly CollectionItemName[];
  surfaceFaces?: SurfaceFaceList;
  decomposeMultipleFeatures?: boolean;
  autoCreateDiameterChecks?: boolean;
  autoCreateSlotWidthChecks?: boolean;
  autoCreateSlotLengthChecks?: boolean;
  datumReferences?: string;
  tolerance?: string;
  isSlot?: boolean;
  perUnitLengthOrArea?: boolean;
  circularArea?: boolean;
  perUnitAreaLengthDistance?: number;
  perUnitAreaLengthStepOverPercent?: number;
  perUnitAreaWidthDistance?: number;
  perUnitAreaWidthStepOverPercent?: number;
  perUnitAreaCircleDiameter?: number;
  perUnitAreaDiameterStepOver?: number;
  auxiliaryObject?: CollectionObjectName;
  auxiliaryGeometryRelationship?: CollectionItemName;
  useNominalForDimensionTolerance?: boolean;
  useReferenceObjectForNominal?: boolean;
  nominalDimensionTolerance?: number;
  lowDimensionTolerance?: number;
  highDimensionTolerance?: number;
  toleranceZoneType?: GdtToleranceZoneType;
  useProjectedToleranceZone?: boolean;
  projectedToleranceZone?: number;
}
```

## `MeasuredSideForPlanarOffset`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const MeasuredSideForPlanarOffset = Object.freeze({
  abovePlane: 'abovePlane',
  probeCenter: 'probeCenter',
  belowPlane: 'belowPlane',
} as const);
export type MeasuredSideForPlanarOffset = (typeof MeasuredSideForPlanarOffset)[keyof typeof MeasuredSideForPlanarOffset];
```

## `MeasuredSideForRadialOffset`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const MeasuredSideForRadialOffset = Object.freeze({
  inside: 'inside',
  probeCenter: 'probeCenter',
  outside: 'outside',
} as const);
export type MeasuredSideForRadialOffset = (typeof MeasuredSideForRadialOffset)[keyof typeof MeasuredSideForRadialOffset];
```

## `MpDialogInteractionMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const MpDialogInteractionMode = Object.freeze({
  blockApplicationInteraction: 'blockApplicationInteraction',
  allowApplicationInteraction: 'allowApplicationInteraction',
} as const);
export type MpDialogInteractionMode = (typeof MpDialogInteractionMode)[keyof typeof MpDialogInteractionMode];
```

## `MpInteractionMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const MpInteractionMode = Object.freeze({
  haltOnFailureOnly: 'haltOnFailureOnly',
  haltOnFailureOrPartialSuccess: 'haltOnFailureOrPartialSuccess',
  neverHalt: 'neverHalt',
} as const);
export type MpInteractionMode = (typeof MpInteractionMode)[keyof typeof MpInteractionMode];
```

## `NormalDirection`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const NormalDirection = Object.freeze({
  probingDirection: 'probingDirection',
  workingOriginPositive: 'workingOriginPositive',
  rightHandRule: 'rightHandRule',
} as const);
export type NormalDirection = (typeof NormalDirection)[keyof typeof NormalDirection];
```

## `ObjectOriginResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface ObjectOriginResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
}
```

## `ObjectType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ObjectType = Object.freeze({
  any: 'any',
  bSpline: 'bSpline',
  circle: 'circle',
  cloud: 'cloud',
  scanStripeCloud: 'scanStripeCloud',
  crossSectionCloud: 'crossSectionCloud',
  cone: 'cone',
  cylinder: 'cylinder',
  datum: 'datum',
  ellipse: 'ellipse',
  frame: 'frame',
  frameSet: 'frameSet',
  line: 'line',
  paraboloid: 'paraboloid',
  perimeter: 'perimeter',
  plane: 'plane',
  pointGroup: 'pointGroup',
  pointSet: 'pointSet',
  polySurface: 'polySurface',
  scanStripeMesh: 'scanStripeMesh',
  slot: 'slot',
  sphere: 'sphere',
  surface: 'surface',
  torus: 'torus',
  vectorGroup: 'vectorGroup',
} as const);
export type ObjectType = (typeof ObjectType)[keyof typeof ObjectType];
```

## `ObservationInfo`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface ObservationInfo {
  readonly instrument: CollectionInstrumentId;
  readonly sphericalValues: ObservationSphericalValues;
  readonly active: boolean;
  readonly timestamp: string;
  readonly rmsError: number;
  readonly temperatureFahrenheit: number;
  readonly pressureInHg: number;
  readonly relativeHumidityPercent: number;
  readonly infoData: string;
}
```

## `ObservationSphericalValues`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface ObservationSphericalValues {
  readonly distance: number;
  readonly azimuth: number;
  readonly elevation: number;
}
```

## `PerimeterLists`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface PerimeterLists {
  readonly scanPerimeters: readonly CollectionObjectName[];
  readonly exclusionPerimeters: readonly CollectionObjectName[];
}
```

## `PointComparisonResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface PointComparisonResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
  readonly magnitude: number;
  readonly resultingPointName: PointName;
}
```

## `PointDeltaReportOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const PointDeltaReportOptions = Object.freeze({
  default: deepFreeze<PointDeltaReportOptions>({
    coordinateSystem: CoordinateSystemType.cartesian,
    detailsFormat: 'Single',
    showPointA: true,
    showPointB: true,
    showDelta: true,
    showMagnitude: true,
    showComponent1: true,
    showComponent2: true,
    showComponent3: true,
    sortPointNames: false,
    showToleranceFields: true,
    colorizeInToleranceFields: true,
  }),
} as const);
export type PointDeltaReportOptions = (typeof PointDeltaReportOptions)[keyof typeof PointDeltaReportOptions];
```

## `PointFilterInputType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const PointFilterInputType = Object.freeze({
  cardinalPoints: 'cardinalPoints',
  inputPoints: 'inputPoints',
  nominalCardinalPoints: 'nominalCardinalPoints',
} as const);
export type PointFilterInputType = (typeof PointFilterInputType)[keyof typeof PointFilterInputType];
```

## `PointName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface PointName {
  readonly collectionName: string;
  readonly groupName: string;
  readonly targetName: string;
}
```

## `PointToPointRelationshipStatistics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface PointToPointRelationshipStatistics {
  readonly deltaX: number;
  readonly deltaY: number;
  readonly deltaZ: number;
  readonly deltaMagnitude: number;
  readonly referenceFrame: CollectionObjectName;
}
```

## `PointsToObjectsRelationshipStatistics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface PointsToObjectsRelationshipStatistics {
  readonly absoluteMaxDeviation: number;
  readonly maxDeviation: number;
  readonly minDeviation: number;
  readonly rms: number;
  readonly candidatePointCount: number;
  readonly sampledPointCount: number;
  readonly rejectedPointCount: number;
  readonly usedPointCount: number;
  readonly outOfTolerancePointCount: number;
}
```

## `PointsToPointsRelationshipAssociatedData`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface PointsToPointsRelationshipAssociatedData {
  readonly nominalPoints: readonly PointName[];
  readonly actualPoints: readonly PointName[];
}
```

## `ProjectedPointGradient`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface ProjectedPointGradient {
  readonly projectedPoint: Vector;
  readonly normalVector: Vector;
  readonly uDirection: Vector;
  readonly vDirection: Vector;
}
```

## `ProjectionOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ProjectionOptions = Object.freeze({
  default: deepFreeze<ProjectionOptions>({
    projectionType: 'Object To Probe Vectors',
    ignoreEdgeProjections: false,
    overrideTargetOffsets: false,
    overrideTargetOffsetsValue: 0,
    addExtraMaterialThickness: false,
    extraMaterialThicknessValue: 0,
  }),
} as const);
export type ProjectionOptions = (typeof ProjectionOptions)[keyof typeof ProjectionOptions];
```

## `RelWeightingMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const RelWeightingMode = Object.freeze({
  normalizeEquationCount: 'normalizeEquationCount',
  normalizeEquationCountAndToleranceWidth:
    'normalizeEquationCountAndToleranceWidth',
  resetAllWeights: 'resetAllWeights',
  normalizeSquareRootEquationCount: 'normalizeSquareRootEquationCount',
  normalizeSquareRootAndToleranceWidth: 'normalizeSquareRootAndToleranceWidth',
} as const);
export type RelWeightingMode = (typeof RelWeightingMode)[keyof typeof RelWeightingMode];
```

## `RelationshipAssociatedData`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface RelationshipAssociatedData {
  readonly relationshipType: string;
  readonly individualPoints: readonly PointName[];
  readonly pointGroups: readonly CollectionObjectName[];
  readonly pointClouds: readonly CollectionObjectName[];
  readonly objects: readonly CollectionObjectName[];
}
```

## `RelationshipFitResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface RelationshipFitResult {
  readonly transformInReference: Transform;
  readonly transformInWorking: WorldTransform;
  readonly transformInWorld: WorldTransform;
  readonly fitObjectiveValue: number;
}
```

## `RelationshipStatusFlags`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface RelationshipStatusFlags {
  readonly dormant: boolean;
  readonly success: boolean;
  readonly measured: boolean;
  readonly failed: boolean;
  readonly unmeasured: boolean;
}
```

## `RelationshipWatchWindowTemplateOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
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

## `RelationshipWatchWindowUdpSettings`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface RelationshipWatchWindowUdpSettings {
  readonly enabled?: boolean;
  readonly broadcast?: boolean;
  readonly ipAddress?: string;
  readonly port?: number;
}
```

## `RenderModeType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const RenderModeType = Object.freeze({
  wireframe: 'wireframe',
  hiddenLineRemoved: 'hiddenLineRemoved',
  solidAndEdges: 'solidAndEdges',
  solid: 'solid',
} as const);
export type RenderModeType = (typeof RenderModeType)[keyof typeof RenderModeType];
```

## `ReportOutputOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ReportOutputOptions = Object.freeze({
  default: deepFreeze<ReportOutputOptions>({
    outputType: ReportOutputType.saReport,
    embeddedFile: { collectionName: '', fileName: 'My Report' },
  }),
} as const);
export type ReportOutputOptions = (typeof ReportOutputOptions)[keyof typeof ReportOutputOptions];
```

## `ReportOutputType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ReportOutputType = Object.freeze({
  none: 'none',
  saReport: 'saReport',
  saDocument: 'saDocument',
  pdf: 'pdf',
  rtf: 'rtf',
} as const);
export type ReportOutputType = (typeof ReportOutputType)[keyof typeof ReportOutputType];
```

## `ReportPageSettings`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ReportPageSettings = Object.freeze({
  portrait: 'portrait',
  landscape: 'landscape',
} as const);
export type ReportPageSettings = (typeof ReportPageSettings)[keyof typeof ReportPageSettings];
```

## `ReportViewOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface ReportViewOptions {
  readonly viewType: ReportViewType;
  readonly collectionName: string;
  readonly calloutName: string;
}
```

## `ReportViewType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ReportViewType = Object.freeze({
  none: 'none',
  currentView: 'currentView',
  calloutView: 'calloutView',
} as const);
export type ReportViewType = (typeof ReportViewType)[keyof typeof ReportViewType];
```

## `RobotCalibrationMetrics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface RobotCalibrationMetrics {
  readonly xyzMax: number;
  readonly xyzAverage: number;
  readonly xyzRms: number;
  readonly orientMax: number;
  readonly orientAverage: number;
  readonly orientRms: number;
  readonly robustness: number;
}
```

## `RobotModelLinkConfiguration`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface RobotModelLinkConfiguration {
  readonly linkType?: RobotModelLinkType;
  readonly dhAlphaComponent?: number;
  readonly dhAComponent?: number;
  readonly dhDComponent?: number;
  readonly dhThetaComponent?: number;
  readonly dhXAxisDeflectionFactor?: number;
  readonly dhYAxisDeflectionFactor?: number;
  readonly dhZAxisDeflectionFactor?: number;
  readonly sixDofXComponent?: number;
  readonly sixDofYComponent?: number;
  readonly sixDofZComponent?: number;
  readonly sixDofRxComponent?: number;
  readonly sixDofRyComponent?: number;
  readonly sixDofRzComponent?: number;
  readonly activeJointComponent?: RobotActiveJointComponent;
  readonly encoderOffsetValue?: number;
  readonly minimumEncoderLimit?: number;
  readonly maximumEncoderLimit?: number;
  readonly encoderSenseNegative?: boolean;
  readonly includeAdditionalEncoder?: boolean;
  readonly additionalEncoderIndexOffset?: number;
  readonly additionalEncoderSenseNegative?: boolean;
  readonly segmentOriginMassKg?: number;
  readonly segmentCgMassKg?: number;
  readonly segmentCgInSegment?: Vector;
}
```

## `RobotModelLinkParameters`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface RobotModelLinkParameters {
  readonly configuration: Required<RobotModelLinkConfiguration>;
  readonly encoderValue: number;
}
```

## `SaInteractionMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const SaInteractionMode = Object.freeze({
  manual: 'manual',
  automatic: 'automatic',
  silent: 'silent',
} as const);
export type SaInteractionMode = (typeof SaInteractionMode)[keyof typeof SaInteractionMode];
```

## `ScalarToleranceLimit`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface ScalarToleranceLimit {
  readonly enabled: boolean;
  readonly value: number;
}
```

## `SetInstrumentBaseUncertaintyCovarianceMatrixInput`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface SetInstrumentBaseUncertaintyCovarianceMatrixInput {
  readonly instrument: CollectionInstrumentId;
  readonly covarianceMatrix: UncertaintyCovarianceMatrix;
}
```

## `SetMeasurementsInput`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface SetMeasurementsInput {
  readonly pointNames: Iterable<PointName>;
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly replaceExistingMeasurements?: boolean;
}
```

## `SigmoidalGapFitConstraints`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

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
```

## `SlotType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const SlotType = Object.freeze({
  round: 'round',
  square: 'square',
} as const);
export type SlotType = (typeof SlotType)[keyof typeof SlotType];
```

## `SphereFitComputationMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const SphereFitComputationMode = Object.freeze({
  standard: 'standard',
  maxInscribed: 'maxInscribed',
  minCircumscribed: 'minCircumscribed',
} as const);
export type SphereFitComputationMode = (typeof SphereFitComputationMode)[keyof typeof SphereFitComputationMode];
```

## `SurfaceAnalysisMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const SurfaceAnalysisMode = Object.freeze({
  none: 'none',
  relationship: 'relationship',
  normals: 'normals',
  curvature: 'curvature',
  deviationRms: 'deviationRms',
  deviationMax: 'deviationMax',
  deviationAverage: 'deviationAverage',
  deviationMin: 'deviationMin',
  deviationMaxAbsolute: 'deviationMaxAbsolute',
  deviationMaxDelta: 'deviationMaxDelta',
  pseudoSurface: 'pseudoSurface',
} as const);
export type SurfaceAnalysisMode = (typeof SurfaceAnalysisMode)[keyof typeof SurfaceAnalysisMode];
```

## `SurfaceFaceList`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface SurfaceFaceList {
  readonly value: string;
}
```

## `TcpFixtureUncertainties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface TcpFixtureUncertainties {
  readonly solutionValid: boolean;
  readonly refinedTcpInWorking: Transform;
  readonly uncertaintiesInTcpFixtureFrame: DoubleVector6;
  readonly uncertaintiesInWorkingFrame: DoubleVector6;
  readonly rmsError: number;
  readonly maximumAbsoluteError: number;
  readonly goodnessOfFit: number;
  readonly robustness: number;
  readonly resultNotes: readonly string[];
}
```

## `TemperatureUnits`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const TemperatureUnits = Object.freeze({
  fahrenheit: 'fahrenheit',
  celsius: 'celsius',
} as const);
export type TemperatureUnits = (typeof TemperatureUnits)[keyof typeof TemperatureUnits];
```

## `ToleranceLimit`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface ToleranceLimit {
  readonly enabled: boolean;
  readonly value: number;
}
```

## `ToleranceScalarOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const ToleranceScalarOptions = Object.freeze({
  default: deepFreeze<ToleranceScalarOptions>({
    high: disabledScalarLimit,
    low: disabledScalarLimit,
  }),
} as const);
export type ToleranceScalarOptions = (typeof ToleranceScalarOptions)[keyof typeof ToleranceScalarOptions];
```

## `ToleranceVectorOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface ToleranceVectorOptions {
  readonly highX: ToleranceLimit;
  readonly highY: ToleranceLimit;
  readonly highZ: ToleranceLimit;
  readonly highMagnitude: ToleranceLimit;
  readonly lowX: ToleranceLimit;
  readonly lowY: ToleranceLimit;
  readonly lowZ: ToleranceLimit;
  readonly lowMagnitude: ToleranceLimit;
}
```

## `TrackerEdmTheodoliteUncertainties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface TrackerEdmTheodoliteUncertainties {
  readonly thetaDispersionArcseconds: number;
  readonly thetaThreshold: number;
  readonly phiDispersionArcseconds: number;
  readonly phiThreshold: number;
  readonly distancePpm: number;
  readonly distanceThreshold: number;
}
```

## `Transform`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface Transform {
  readonly values: readonly number[];
}
```

## `TransformAxes`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface TransformAxes {
  readonly origin: Vector;
  readonly xAxis: Vector;
  readonly yAxis: Vector;
  readonly zAxis: Vector;
}
```

## `TranslucencyType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const TranslucencyType = Object.freeze({
  solid: 'solid',
  translucent: 'translucent',
  wireframe: 'wireframe',
} as const);
export type TranslucencyType = (typeof TranslucencyType)[keyof typeof TranslucencyType];
```

## `UncertaintyCovarianceMatrix`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface UncertaintyCovarianceMatrix {
  readonly row1: DoubleVector6;
  readonly row2: DoubleVector6;
  readonly row3: DoubleVector6;
  readonly row4: DoubleVector6;
  readonly row5: DoubleVector6;
  readonly row6: DoubleVector6;
}
```

## `Vector`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface Vector {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}
```

## `VectorName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface VectorName {
  readonly collectionName: string;
  readonly groupName: string;
  readonly name: string;
}
```

## `ViewName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface ViewName {
  readonly name: string;
}
```

## `WindowState`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export const WindowState = Object.freeze({
  maximize: 'maximize',
  minimize: 'minimize',
  restore: 'restore',
  show: 'show',
  hide: 'hide',
} as const);
export type WindowState = (typeof WindowState)[keyof typeof WindowState];
```

## `WorldFixedXyzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface WorldFixedXyzTransformComponents extends FixedXyzTransformComponents {
  readonly scale: number;
}
```

## `WorldFixedXyzTransformVectors`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface WorldFixedXyzTransformVectors {
  readonly positionInWorking: Vector;
  readonly orientationInWorking: Vector;
  readonly scale: number;
}
```

## `WorldTransform`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/operationValues.ts)

```ts
export interface WorldTransform {
  readonly transform: Transform;
  readonly scaleFactor: number;
}
```

## `WrtlChannelStatus`

[Released Declaration](https://github.com/spatialanalyzer/briosa-js/blob/v0.2.0/targets/2024.1.0508.5/src/waveBOperationValues.ts)

```ts
export interface WrtlChannelStatus {
  readonly connectionStatus: boolean;
  readonly activeChannel: number;
}
```


## `ActiveUnits`

```ts
export interface ActiveUnits {
  readonly length: string;
  readonly angular: string;
  readonly temperature: string;
}
```

## `AskForStringPullDownVersionResult`

```ts
export interface AskForStringPullDownVersionResult {
  readonly answer: string;
  readonly answerIndex: number;
}
```

## `BestFitTransformationGroupToGroupResult`

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
```

## `ComputeGroupToGroupOrientationRxRyRzResult`

```ts
export interface ComputeGroupToGroupOrientationRxRyRzResult {
  readonly rx: number;
  readonly ry: number;
  readonly rz: number;
}
```

## `CreatePointUncertaintyCloudPointSetsResult`

```ts
export interface CreatePointUncertaintyCloudPointSetsResult {
  readonly pointGroups: readonly CollectionObjectName[];
  readonly pointSets: readonly CollectionObjectName[];
  readonly pointClouds: readonly CollectionObjectName[];
}
```

## `DirectCadAccessResult`

```ts
export interface DirectCadAccessResult {
  readonly importWarnings: boolean;
  readonly importWarningMessages: string;
  readonly extentsMin: Vector;
  readonly extentsMax: Vector;
}
```

## `GetActiveLanguageResult`

```ts
export interface GetActiveLanguageResult {
  readonly languageFileName: FileReference;
  readonly customLanguage: boolean;
}
```

## `GetBSplinePropertiesResult`

```ts
export interface GetBSplinePropertiesResult {
  readonly degree: number;
  readonly knots: number;
  readonly controlPoints: number;
  readonly rangeMin: number;
  readonly rangeMax: number;
  readonly length: number;
}
```

## `GetCirclePropertiesResult`

```ts
export interface GetCirclePropertiesResult {
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly radius: number;
  readonly diameter: number;
}
```

## `GetConePropertiesResult`

```ts
export interface GetConePropertiesResult {
  readonly coneEndPointInWorkingCoordinates: Vector;
  readonly coneAxisInWorkingCoordinates: Vector;
  readonly coneLength: number;
  readonly coneThetaStart: number;
  readonly coneThetaSpan: number;
  readonly coneIncludedAngle: number;
}
```

## `GetCoordinateForIthPointInPointSetResult`

```ts
export interface GetCoordinateForIthPointInPointSetResult {
  readonly pointName: string;
  readonly pointCoordinates: Vector;
}
```

## `GetCylinderPropertiesResult`

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
```

## `GetDimensionValueResult`

```ts
export interface GetDimensionValueResult {
  readonly dimensionsValue: number;
  readonly nominalValueEnabled: boolean;
  readonly highToleranceEnabled: boolean;
  readonly lowToleranceEnabled: boolean;
  readonly nominalValue: number;
  readonly highTolerance: number;
  readonly lowTolerance: number;
}
```

## `GetEllipsePropertiesResult`

```ts
export interface GetEllipsePropertiesResult {
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly majorAxisRadius: number;
  readonly minorAxisRadius: number;
}
```

## `GetEulerParametersForFrameResult`

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
```

## `GetEulerParametersForIthFrameInFrameSetResult`

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
```

## `GetGeomRelationshipAutoVectorsResult`

```ts
export interface GetGeomRelationshipAutoVectorsResult {
  readonly autoVectorsNominalAvnEnabled: boolean;
  readonly autoVectorsNominalAvnName: CollectionObjectName;
  readonly autoVectorsFitAvfEnabled: boolean;
  readonly autoVectorsFitAvfName: CollectionObjectName;
  readonly pointsType: string;
}
```

## `GetGeomRelationshipCriteriaResult`

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
```

## `GetGeomRelationshipPointListResult`

```ts
export interface GetGeomRelationshipPointListResult {
  readonly allPoints: readonly PointName[];
  readonly usedPoints: readonly PointName[];
  readonly ignoredPoints: readonly PointName[];
}
```

## `GetIthPointFromGroupResult`

```ts
export interface GetIthPointFromGroupResult {
  readonly completePointName: PointName;
  readonly pointNameOnly: string;
  readonly vectorInWorking: Vector;
}
```

## `GetIthVectorFromVectorGroupResult`

```ts
export interface GetIthVectorFromVectorGroupResult {
  readonly vectorName: string;
  readonly beginInWorking: Vector;
  readonly endInWorking: Vector;
  readonly totalDeltaInWorking: Vector;
  readonly ijkUnitVectorInWorking: Vector;
  readonly magnitude: number;
}
```

## `GetIthVectorFromVectorNameRefListResult`

```ts
export interface GetIthVectorFromVectorNameRefListResult {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName: string;
  readonly beginInWorking: Vector;
  readonly endInWorking: Vector;
  readonly totalDeltaInWorking: Vector;
  readonly ijkUnitVectorInWorking: Vector;
  readonly magnitude: number;
}
```

## `GetLinePropertiesResult`

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
```

## `GetMeasurementAuxiliaryDataResult`

```ts
export interface GetMeasurementAuxiliaryDataResult {
  readonly value: number;
  readonly units: string;
}
```

## `GetMeasurementWeatherDataResult`

```ts
export interface GetMeasurementWeatherDataResult {
  readonly temperatureDegF: number;
  readonly pressureInHg: number;
  readonly humidityRh: number;
}
```

## `GetNamedDoubleListVariableMinMaxResult`

```ts
export interface GetNamedDoubleListVariableMinMaxResult {
  readonly minimumValue: number;
  readonly maximumValue: number;
}
```

## `GetPipeRelationshipCutStatusResult`

```ts
export interface GetPipeRelationshipCutStatusResult {
  readonly pipe1CutAvailable: boolean;
  readonly pipe1CutActive: boolean;
  readonly pipe2CutAvailable: boolean;
  readonly pipe2CutActive: boolean;
}
```

## `GetPipeRelationshipPropertiesResult`

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
```

## `GetPipeRelationshipWeightsResult`

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
```

## `GetPlanePropertiesResult`

```ts
export interface GetPlanePropertiesResult {
  readonly normalDirection: Vector;
  readonly pointOnPlane: Vector;
  readonly dParameter: number;
}
```

## `GetPointCoordinateCylindricalResult`

```ts
export interface GetPointCoordinateCylindricalResult {
  readonly radiusValue: number;
  readonly thetaValue: number;
  readonly zValue: number;
}
```

## `GetPointCoordinatePolarResult`

```ts
export interface GetPointCoordinatePolarResult {
  readonly radiusValue: number;
  readonly thetaValue: number;
  readonly phiValue: number;
}
```

## `GetPointCoordinateResult`

```ts
export interface GetPointCoordinateResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
}
```

## `GetPointOfViewParametersResult`

```ts
export interface GetPointOfViewParametersResult {
  readonly rotationX: number;
  readonly rotationY: number;
  readonly rotationZ: number;
  readonly restoreZoomSettings: boolean;
  readonly scaleFactor: number;
  readonly originX: number;
  readonly originY: number;
  readonly restoreRenderMode: boolean;
}
```

## `GetPointPropertiesResult`

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
```

## `GetPointToLineDistanceResult`

```ts
export interface GetPointToLineDistanceResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
  readonly magnitude: number;
}
```

## `GetPointToPointDistanceResult`

```ts
export interface GetPointToPointDistanceResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
  readonly magnitude: number;
}
```

## `GetPointToleranceResult`

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
```

## `GetRelationshipFitConstraintsScalarTypeResult`

```ts
export interface GetRelationshipFitConstraintsScalarTypeResult {
  readonly useHighTolerance: boolean;
  readonly highTolerance: number;
  readonly useLowTolerance: boolean;
  readonly lowTolerance: number;
  readonly fitConstraintOptions: FitConstraintScalarOptions;
}
```

## `GetRelationshipOutlierRejectionScalarTypeResult`

```ts
export interface GetRelationshipOutlierRejectionScalarTypeResult {
  readonly useHighLimit: boolean;
  readonly highLimit: number;
  readonly useLowLimit: boolean;
  readonly lowLimit: number;
}
```

## `GetRelationshipProjectionOptionsResult`

```ts
export interface GetRelationshipProjectionOptionsResult {
  readonly ignoreEdgeProjections: boolean;
  readonly probeOffsetsOverrideTargetValues: boolean;
  readonly probeOffsetsOverrideValue: number;
  readonly addExtraMaterial: boolean;
  readonly extraMaterialThickness: number;
}
```

## `GetRelationshipSubSamplingOptionsResult`

```ts
export interface GetRelationshipSubSamplingOptionsResult {
  readonly useEveryIthPoint: boolean;
  readonly iValue: number;
  readonly useNoMoreThanNPoints: boolean;
  readonly nValue: number;
}
```

## `GetRelationshipToleranceScalarTypeResult`

```ts
export interface GetRelationshipToleranceScalarTypeResult {
  readonly useHighTolerance: boolean;
  readonly highTolerance: number;
  readonly useLowTolerance: boolean;
  readonly lowTolerance: number;
  readonly toleranceOptions: ToleranceScalarOptions;
}
```

## `GetRelationshipToleranceVectorTypeResult`

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
```

## `GetReportTagValueResult`

```ts
export interface GetReportTagValueResult {
  readonly tagValueAsString: string;
  readonly tagValueAsInteger: number;
  readonly tagValueAsDouble: number;
}
```

## `GetScaleBarStatsResult`

```ts
export interface GetScaleBarStatsResult {
  readonly nominalLength: number;
  readonly actualLength: number;
  readonly deviation: number;
}
```

## `GetScreenResolutionResult`

```ts
export interface GetScreenResolutionResult {
  readonly integerWindowTopLeftXPosition: number;
  readonly integerWindowTopLeftYPosition: number;
  readonly integerWidth: number;
  readonly integerHeight: number;
  readonly viewWidth: number;
  readonly viewHeight: number;
}
```

## `GetSlotPropertiesResult`

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
```

## `GetSpherePropertiesResult`

```ts
export interface GetSpherePropertiesResult {
  readonly centerCoordinate: Vector;
  readonly radius: number;
  readonly diameter: number;
}
```

## `GetSurfacePhysicalStatsResult`

```ts
export interface GetSurfacePhysicalStatsResult {
  readonly volume: number;
  readonly area: number;
}
```

## `GetTorusPropertiesResult`

```ts
export interface GetTorusPropertiesResult {
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly majorRadius: number;
  readonly minorRadius: number;
}
```

## `GetVectorFromVectorGroupByNameResult`

```ts
export interface GetVectorFromVectorGroupByNameResult {
  readonly beginInWorking: Vector;
  readonly endInWorking: Vector;
  readonly totalDeltaInWorking: Vector;
  readonly ijkUnitVectorInWorking: Vector;
  readonly magnitude: number;
}
```

## `GetVectorGroupPropertiesResult`

```ts
export interface GetVectorGroupPropertiesResult {
  readonly totalVectors: number;
  readonly vectorsInTolerance: number;
  readonly vectorsOutOfTolerance: number;
  readonly invalidVectors: number;
  readonly vectorsInTolerance2: number;
  readonly vectorsOutOfTolerance2: number;
  readonly absoluteMaxMagnitude: number;
  readonly absoluteMinMagnitude: number;
  readonly maxMagnitude: number;
  readonly minMagnitude: number;
  readonly standardDeviationFromZero: number;
  readonly standardDeviationFromMean: number;
  readonly avgMagnitude: number;
  readonly avgOfAbsMagnitude: number;
  readonly highToleranceValue: number;
  readonly lowToleranceValue: number;
  readonly rmsValue: number;
}
```

## `GroupToSurfaceFitResult`

```ts
export interface GroupToSurfaceFitResult {
  readonly optimumTransform: WorldTransform;
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
}
```

## `MushroomTargetHoleInspectionResult`

```ts
export interface MushroomTargetHoleInspectionResult {
  readonly sphereFitRmsError: number;
  readonly sphereFitMaxError: number;
}
```

## `QueryCloudsToObjectsResult`

```ts
export interface QueryCloudsToObjectsResult {
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
}
```

## `QueryCloudsToSurfaceResult`

```ts
export interface QueryCloudsToSurfaceResult {
  readonly rmsDeviation: number;
  readonly maximumAbsoluteDeviation: number;
}
```

## `QueryFrameToFrameResult`

```ts
export interface QueryFrameToFrameResult {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly rxRoll: number;
  readonly ryPitch: number;
  readonly rzYaw: number;
}
```

## `QueryGroupsToObjectsResult`

```ts
export interface QueryGroupsToObjectsResult {
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
  readonly standardDeviation: number;
}
```

## `QueryPointToObjectsResult`

```ts
export interface QueryPointToObjectsResult {
  readonly dX: number;
  readonly dY: number;
  readonly dZ: number;
  readonly dMag: number;
  readonly resultantObject: CollectionObjectName;
}
```

## `QueryPointsToObjectsResult`

```ts
export interface QueryPointsToObjectsResult {
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
  readonly standardDeviation: number;
}
```

## `SphereAxisCheckResult`

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
```

## `WorkingFrameProperties`

```ts
export interface WorkingFrameProperties {
  readonly frameName: string;
  readonly collectionName: string;
  readonly workingFrame: CollectionObjectName;
}
```

## `ResetCloudBoundingBoxResult`

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
```

## `GetCloudPointCountResult`

```ts
export interface GetCloudPointCountResult {
  readonly pointsCount: number;
  readonly planarOffset: number;
  readonly radialOffset: number;
  readonly activeClippingPlanes: number;
}
```

## `MeshVolumeResult`

```ts
export interface MeshVolumeResult {
  readonly above: number;
  readonly below: number;
}
```

## `ConstructVectorGroupGroupToGroupCompareResult`

```ts
export interface ConstructVectorGroupGroupToGroupCompareResult {
  readonly vectorCount: number;
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
}
```

## `DeleteCollectionsByWildcardResult`

```ts
export interface DeleteCollectionsByWildcardResult {
  readonly numDeleted: number;
  readonly numFailed: number;
}
```

## `DeleteFoldersByWildcardResult`

```ts
export interface DeleteFoldersByWildcardResult {
  readonly numDeleted: number;
  readonly numFailed: number;
}
```

## `EvaluateFeatureCheckResult`

```ts
export interface EvaluateFeatureCheckResult {
  readonly checkEvaluated: boolean;
  readonly checkResult: string;
  readonly nonUniqueResult: boolean;
  readonly measuredDeviationUpper: number;
  readonly distanceOutOfToleranceUpper: number;
  readonly evalDeltaTransformUpper: WorldTransform;
  readonly measuredDeviationLower: number;
  readonly distanceOutOfToleranceLower: number;
  readonly evalDeltaTransformLower: WorldTransform;
  readonly checkType: string;
  readonly toleranceType: string;
  readonly toleranceSimple: number;
  readonly toleranceCompositeUpper: number;
  readonly toleranceCompositeLower: number;
  readonly toleranceRangeMin: number;
  readonly toleranceRangeMax: number;
  readonly toleranceNominalPlusMinusNominal: number;
  readonly toleranceNominalPlusMinusMinus: number;
  readonly toleranceNominalPlusMinusPlus: number;
}
```

## `EvaluateFeatureChecksResult`

```ts
export interface EvaluateFeatureChecksResult {
  readonly totalPassed: number;
  readonly totalFailed: number;
  readonly totalIncomplete: number;
}
```

## `DriftCheckResult`

```ts
export interface DriftCheckResult {
  readonly maximumError: number;
  readonly rmsError: number;
  readonly instrumentAdded: boolean;
  readonly newInstrument: CollectionInstrumentId;
}
```

## `LrSelfTestResult`

```ts
export interface LrSelfTestResult {
  readonly referenceArmLengthInches: number;
  readonly referenceArmQuality: number;
  readonly mirrorMeasurementCount: number;
  readonly mirrorMeasurementRangeMeanInches: number;
  readonly mirrorMeasurementRangeStandardDeviationInches: number;
  readonly mirrorMeasurementQualityMean: number;
  readonly mirrorMeasurementQualityStandardDeviation: number;
  readonly passedReferenceArmQualityThreshold: boolean;
  readonly passedMirrorOffsetDeltaThreshold: boolean;
  readonly passedMirrorOffsetStandardDeviationThreshold: boolean;
  readonly passedMirrorMeanQualityThreshold: boolean;
  readonly passedOverall: boolean;
}
```
