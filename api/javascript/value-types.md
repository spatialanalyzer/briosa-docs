---
title: MP Value Types
description: Released client 0.5.0 MP value types and choices for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# MP Value Types

[SA 2026.1.0529.7](/api/javascript/value-types) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/value-types)

These declarations describe the handwritten client **0.5.0** for **SA 2026.1.0529.7**. Generated transport types remain private. Operation pages define required inputs and omission behavior. In an input value, a member without `?` is required: at contract major 3 the client fills in no settings value, transform, or list that the server requires. A `ReportOutputOptions` value takes exactly one destination, and `ToleranceVectorOptions.noLimits` is the named value for a relationship without limits. Numeric protobuf values and public language values are separate representations; do not substitute values from another target.

## `AngularUnits`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const BaseColorType = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue',
} as const);
export type BaseColorType = (typeof BaseColorType)[keyof typeof BaseColorType];
```

## `BaseMidColorType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface CalibrationApplianceNodeStatus {
  readonly instrumentConnected: boolean;
  readonly calibrationApplianceConnected: boolean;
}
```

## `CalloutPosition`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface ChartName {
  readonly name: string;
}
```

## `ChartType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const ChartType = Object.freeze({
  runChart: 'runChart',
  individualXMovingRange: 'individualXMovingRange',
  bullseyeChart: 'bullseyeChart',
} as const);
export type ChartType = (typeof ChartType)[keyof typeof ChartType];
```

## `CloudThinningOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface CloudThinningOptions {
  readonly mode?: CloudThinningMode;
  readonly pointIncrement?: number;
  readonly minimumNumberOfPoints?: number;
  readonly maximumNumberOfPoints?: number;
}
```

## `CloudToCadAlignmentResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface CloudToCadAlignmentResult {
  readonly rmsDeviation: number;
  readonly averageDeviation: number;
  readonly maximumAbsoluteDeviation: number;
  readonly resultantTransformInWorking: Transform;
}
```

## `CloudViewerInstrumentInput`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface CloudViewerInstrumentInput {
  readonly instrument: CollectionInstrumentId;
}
```

## `CollectionGroupName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface CollectionGroupName {
  readonly collectionName: string;
  readonly groupName: string;
}
```

## `CollectionInstrumentId`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface CollectionInstrumentId {
  readonly collectionName: string;
  readonly instrumentId: number;
}
```

## `CollectionItemName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface CollectionItemName {
  readonly collectionName: string;
  readonly itemName: string;
  readonly itemType?: ItemType;
}
```

## `CollectionMachineId`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface CollectionMachineId {
  readonly collectionName: string;
  readonly machineId: number;
}
```

## `CollectionName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface CollectionName {
  readonly name: string;
}
```

## `CollectionObjectName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface CollectionObjectName {
  readonly collectionName: string;
  readonly objectName: string;
  readonly objectType: ObjectType;
}
```

## `CollectionVectorGroupName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface CollectionVectorGroupName {
  readonly collectionName: string;
  readonly vectorGroupName: string;
}
```

## `Color`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface Color {
  readonly red: number;
  readonly green: number;
  readonly blue: number;
}
```

## `ColorRangeMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface ColorizationOptions {
  readonly colorRangeMethod: ColorRangeMethod;
  readonly baseHighColor: BaseColorType;
  readonly baseMidColor: BaseMidColorType;
  readonly baseLowColor: BaseColorType;
  readonly drawTubes: boolean;
  readonly drawArrowheads: boolean;
  readonly indicateValues: boolean;
  readonly vectorMagnification: number;
  readonly vectorWidth: number;
  readonly drawBlotches: boolean;
  readonly blotchSize: number;
  readonly showOutOfToleranceOnly: boolean;
  readonly showColorBarInView: boolean;
  readonly showColorBarPercentages: boolean;
  readonly showColorBarFractions: boolean;
  readonly highSaturationLimit: number;
  readonly lowSaturationLimit: number;
  readonly highTolerance: number;
  readonly lowTolerance: number;
}

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
});
```

## `CompTechnique`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const CompTechnique = Object.freeze({
  standard: 'standard',
  maxInscribed: 'maxInscribed',
  minCircumscribed: 'minCircumscribed',
} as const);
export type CompTechnique = (typeof CompTechnique)[keyof typeof CompTechnique];
```

## `CoordinateSystemType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const CoordinateSystemType = Object.freeze({
  cartesian: 'cartesian',
  cylindric: 'cylindric',
  polar: 'polar',
} as const);
export type CoordinateSystemType = (typeof CoordinateSystemType)[keyof typeof CoordinateSystemType];
```

## `CurrentTrappingStatus`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface CurrentTrappingStatus {
  readonly active: boolean;
  readonly focusedItem?: CollectionItemName;
  readonly instrument?: CollectionInstrumentId;
}
```

## `DatasetType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface DatumInput {
  readonly datum: CollectionItemName;
}
```

## `DegreeOfFreedom`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const DegreeOfFreedom = Object.freeze({
  any: 'any',
  lockFocusLocation: 'lockFocusLocation',
  lockVertexLocation: 'lockVertexLocation',
} as const);
export type DegreeOfFreedom = (typeof DegreeOfFreedom)[keyof typeof DegreeOfFreedom];
```

## `DistanceUnits`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface EmbeddedReportFile {
  readonly collectionName: string;
  readonly fileName: string;
}
```

## `EulerZxzTransformComponents`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const ExportDataDelimeterType = Object.freeze({
  space: 'space',
  comma: 'comma',
  tab: 'tab',
} as const);
export type ExportDataDelimeterType = (typeof ExportDataDelimeterType)[keyof typeof ExportDataDelimeterType];
```

## `ExportTargetNameFormat`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckCylinderEvalOptions {
  readonly enableActualDiameterOverride: boolean;
  readonly actualDiameterOverride: number;
}
```

## `FeatureCheckDatumReference`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckDatumReferencesResult {
  readonly datum1: FeatureCheckDatumReference;
  readonly datum2: FeatureCheckDatumReference;
  readonly datum3: FeatureCheckDatumReference;
}
```

## `FeatureCheckInput`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckInput {
  readonly featureCheck: CollectionItemName;
}
```

## `FeatureCheckReportingOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface FeatureCheckReportingOptions {
  readonly showFeatureControlFrameSummary: boolean;
  readonly includeTitle: boolean;
  readonly showDatumAndToleranceSummary: boolean;
  readonly showFeatureSummary: boolean;
  readonly onlyCreateFailedVectors: boolean;
  readonly showPointDetails: boolean;
  readonly showLowerTierTables: boolean;
}
```

## `FileReference`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface FileReference {
  readonly path: string;
  readonly embeddedFile: boolean;
}
```

## `FilterProximitySettings`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface FilterProximitySettings {
  readonly surfaceInclusionProximity: number;
  readonly edgeExclusionProximity: number;
  readonly planarInclusionProximity: number;
  readonly planarExclusionProximity: number;
  readonly radialInclusionProximity: number;
  readonly geometryExtractionTolerance: number;
  readonly surfaceProximityMode: OffsetDirectionType;
  readonly planarProximityMode: OffsetDirectionType;
  readonly radialProximityMode: OffsetDirectionType;
  readonly projectToPlane: boolean;
  readonly assertPlaneBoundaries: boolean;
}
```

## `FitConstraintScalarOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface FitConstraintScalarOptions {
  readonly high: ScalarToleranceLimit;
  readonly low: ScalarToleranceLimit;
}

export const FitConstraintScalarOptions = Object.freeze({
  default: deepFreeze<FitConstraintScalarOptions>({
    high: disabledScalarLimit,
    low: disabledScalarLimit,
  }),
});
```

## `FitDofOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface FitErrorResult {
  readonly rmsError: number;
  readonly maximumError: number;
}
```

## `FitMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const FitMethod = Object.freeze({
  minimumRms: 'minimumRms',
  bestAxis: 'bestAxis',
} as const);
export type FitMethod = (typeof FitMethod)[keyof typeof FitMethod];
```

## `FixedXyzTransformComponents`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface FixedXyzTransformVectors {
  readonly positionInWorking: Vector;
  readonly orientationInWorking: Vector;
}
```

## `Font`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface Font {
  readonly fontName: string;
  readonly size: number;
  readonly color: Color;
}

export const Font = Object.freeze({
  default: deepFreeze<Font>({
    fontName: 'MS Shell Dlg',
    size: 8,
    color: { red: 0, green: 0, blue: 0 },
  }),
});
```

## `FrameName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface FrameName {
  readonly name: string;
}
```

## `GdtMeasurements`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface GdtMeasurements {
  readonly pointNames: readonly PointName[];
  readonly cloudNames: readonly CollectionObjectName[];
}
```

## `GdtOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface GeneralRelationshipStatistics {
  readonly absoluteMaxDeviation: number;
  readonly rms: number;
  readonly hasSignedDeviation: boolean;
  readonly signedMaxDeviation: number;
  readonly signedMinDeviation: number;
}
```

## `GeometryRelationshipOutlierFilterMetrics`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface GroupAverageResult {
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
}
```

## `InstrumentBestFitResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface InstrumentModelResult {
  readonly name: string;
  readonly model: string;
}
```

## `InstrumentPositionUpdate`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface InstrumentPositionUpdate {
  readonly xOrR: number;
  readonly yOrTheta: number;
  readonly zOrPhi: number;
  readonly timeSinceUpdate: number;
  readonly timestamp: string;
}
```

## `InstrumentTargetStatus`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface InstrumentTargetStatus {
  readonly isLocked: boolean;
  readonly name: string;
  readonly numberOfFaces: number;
  readonly lockedFace: number;
}
```

## `InstrumentTargetsAndModeProfiles`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface InstrumentTargetsAndModeProfiles {
  readonly modeProfiles: readonly string[];
  readonly targetNames: readonly string[];
}
```

## `InstrumentTypeName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface InstrumentTypeName {
  readonly value: string;
}
```

## `InstrumentWeatherSetting`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface InstrumentWeatherSetting {
  readonly temperature: number;
  readonly pressure: number;
  readonly relativeHumidity: number;
  readonly setAutomatically: boolean;
}
```

## `InstrumentXyzUncertainties`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface InstrumentXyzUncertainties {
  readonly xUncertainty: number;
  readonly yUncertainty: number;
  readonly zUncertainty: number;
}
```

## `ItemType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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
  enhancedCloud: 'enhancedCloud',
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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface LastInstrumentIndexResult {
  readonly instrumentIndex: number;
  readonly instrument: CollectionInstrumentId;
}
```

## `LrFlipTestResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface LrFlipTestResult {
  readonly frontRange: number;
  readonly frontAzimuth: number;
  readonly frontElevation: number;
  readonly frontQuality: number;
  readonly backRange: number;
  readonly backAzimuth: number;
  readonly backElevation: number;
  readonly backQuality: number;
  readonly frontBackDifferenceRange: number;
  readonly frontBackDifferenceAzimuth: number;
  readonly frontBackDifferenceElevation: number;
}
```

## `LrInstrumentInput`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface LrInstrumentInput {
  readonly instrument: CollectionInstrumentId;
}
```

## `LrLoSeparationTestResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface LrLoSeparationTestResult {
  readonly primaryLo: number;
  readonly secondaryLo: number;
  readonly primaryLoMeasurementCount: number;
  readonly primaryLoRangeMean: number;
  readonly primaryLoRangeStandardDeviation: number;
  readonly primaryLoQualityMean: number;
  readonly primaryLoQualityStandardDeviation: number;
  readonly secondaryLoMeasurementCount: number;
  readonly secondaryLoRangeMean: number;
  readonly secondaryLoRangeStandardDeviation: number;
  readonly secondaryLoQualityMean: number;
  readonly secondaryLoQualityStandardDeviation: number;
}
```

## `LrSnrInfo`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface LrSnrInfo {
  readonly snr: number;
  readonly sizeOfDataArray: number;
  readonly peakValueIndex: number;
  readonly peakValue: number;
  readonly measuredRange: number;
}
```

## `MakeGdtDatumAnnotationOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface MakeGdtDatumAnnotationOptions {
  datumName: string;
  objects: readonly CollectionObjectName[];
  geometryRelationships: readonly CollectionItemName[];
  surfaceFaces?: SurfaceFaceList;
  auxiliaryObject: CollectionObjectName;
  auxiliaryGeometryRelationship: CollectionItemName;
  isSlot?: boolean;
  forceSurfaceFeature?: boolean;
}
```

## `MakeGdtFeatureCheckAnnotationOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface MakeGdtFeatureCheckAnnotationOptions {
  featureAnnotationName: string;
  featureType?: GdtFeatureType;
  objects: readonly CollectionObjectName[];
  geometryRelationships: readonly CollectionItemName[];
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
  perUnitLengthDistance?: number;
  perUnitLengthStepOverPercent?: number;
  perUnitAreaWidthDistance?: number;
  perUnitAreaWidthStepOverPercent?: number;
  perUnitAreaCircleDiameter?: number;
  perUnitAreaDiameterStepOver?: number;
  auxiliaryObject: CollectionObjectName;
  auxiliaryGeometryRelationship: CollectionItemName;
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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const MeasuredSideForPlanarOffset = Object.freeze({
  abovePlane: 'abovePlane',
  probeCenter: 'probeCenter',
  belowPlane: 'belowPlane',
} as const);
export type MeasuredSideForPlanarOffset = (typeof MeasuredSideForPlanarOffset)[keyof typeof MeasuredSideForPlanarOffset];
```

## `MeasuredSideForRadialOffset`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const MeasuredSideForRadialOffset = Object.freeze({
  inside: 'inside',
  probeCenter: 'probeCenter',
  outside: 'outside',
} as const);
export type MeasuredSideForRadialOffset = (typeof MeasuredSideForRadialOffset)[keyof typeof MeasuredSideForRadialOffset];
```

## `MpDialogInteractionMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const MpDialogInteractionMode = Object.freeze({
  blockApplicationInteraction: 'blockApplicationInteraction',
  allowApplicationInteraction: 'allowApplicationInteraction',
} as const);
export type MpDialogInteractionMode = (typeof MpDialogInteractionMode)[keyof typeof MpDialogInteractionMode];
```

## `MpInteractionMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const MpInteractionMode = Object.freeze({
  haltOnFailureOnly: 'haltOnFailureOnly',
  haltOnFailureOrPartialSuccess: 'haltOnFailureOrPartialSuccess',
  neverHalt: 'neverHalt',
} as const);
export type MpInteractionMode = (typeof MpInteractionMode)[keyof typeof MpInteractionMode];
```

## `NormalDirection`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const NormalDirection = Object.freeze({
  probingDirection: 'probingDirection',
  workingOriginPositive: 'workingOriginPositive',
  rightHandRule: 'rightHandRule',
} as const);
export type NormalDirection = (typeof NormalDirection)[keyof typeof NormalDirection];
```

## `ObjectOriginResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface ObjectOriginResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
}
```

## `ObjectType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const ObjectType = Object.freeze({
  any: 'any',
  bSpline: 'bSpline',
  circle: 'circle',
  cloud: 'cloud',
  enhancedCloud: 'enhancedCloud',
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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface ObservationInfo {
  readonly instrument: CollectionInstrumentId;
  readonly sphericalValues: ObservationSphericalValues;
  readonly active: boolean;
  readonly timestamp: string;
  readonly rmsError: number;
  readonly temperature: number;
  readonly pressure: number;
  readonly relativeHumidity: number;
  readonly infoData: string;
}
```

## `ObservationSphericalValues`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface ObservationSphericalValues {
  readonly distance: number;
  readonly azimuth: number;
  readonly elevation: number;
}
```

## `PerimeterLists`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface PerimeterLists {
  readonly scanPerimeters: readonly CollectionObjectName[];
  readonly exclusionPerimeters: readonly CollectionObjectName[];
}
```

## `PointComparisonResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface PointDeltaReportOptions {
  readonly coordinateSystem: CoordinateSystemType;
  readonly detailsFormat: string;
  readonly showPointA: boolean;
  readonly showPointB: boolean;
  readonly showDelta: boolean;
  readonly showMagnitude: boolean;
  readonly showComponent1: boolean;
  readonly showComponent2: boolean;
  readonly showComponent3: boolean;
  readonly sortPointNames: boolean;
  readonly showToleranceFields: boolean;
  readonly colorizeInToleranceFields: boolean;
}

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
});
```

## `PointFilterInputType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const PointFilterInputType = Object.freeze({
  cardinalPoints: 'cardinalPoints',
  inputPoints: 'inputPoints',
  nominalCardinalPoints: 'nominalCardinalPoints',
} as const);
export type PointFilterInputType = (typeof PointFilterInputType)[keyof typeof PointFilterInputType];
```

## `PointName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface PointName {
  readonly collectionName: string;
  readonly groupName: string;
  readonly targetName: string;
}
```

## `PointToPointRelationshipStatistics`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
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
```

## `PointsToPointsRelationshipAssociatedData`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface PointsToPointsRelationshipAssociatedData {
  readonly nominalPoints: readonly PointName[];
  readonly actualPoints: readonly PointName[];
}
```

## `ProjectedPointGradient`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface ProjectedPointGradient {
  readonly projectedPoint: Vector;
  readonly normalVector: Vector;
  readonly uDirection: Vector;
  readonly vDirection: Vector;
}
```

## `ProjectionOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface ProjectionOptions {
  readonly projectionType: string;
  readonly ignoreEdgeProjections: boolean;
  readonly overrideTargetOffsets: boolean;
  readonly overrideTargetOffsetsValue: number;
  readonly addExtraMaterialThickness: boolean;
  readonly extraMaterialThicknessValue: number;
}

export const ProjectionOptions = Object.freeze({
  default: deepFreeze<ProjectionOptions>({
    projectionType: 'Object To Probe Vectors',
    ignoreEdgeProjections: false,
    overrideTargetOffsets: false,
    overrideTargetOffsetsValue: 0,
    addExtraMaterialThickness: false,
    extraMaterialThicknessValue: 0,
  }),
});
```

## `RelWeightingMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface RelationshipFitResult {
  readonly transformInReference: Transform;
  readonly transformInWorking: WorldTransform;
  readonly transformInWorld: WorldTransform;
  readonly fitObjectiveValue: number;
}
```

## `RelationshipStatusFlags`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface RelationshipWatchWindowTemplateOptions {
  readonly linearPrecision?: number;
  readonly angularPrecision?: number;
  readonly font?: Font;
  readonly textColor?: Color;
  readonly backgroundColor?: Color;
  readonly highlightColor?: Color;
  readonly showDeviationX?: boolean;
  readonly showDeviationY?: boolean;
  readonly showDeviationZ?: boolean;
  readonly showDeviationMagnitude?: boolean;
  readonly udpNetworkTransmitSettings: RelationshipWatchWindowUdpSettings;
  readonly transparentBackground?: boolean;
  readonly hideUnits?: boolean;
}
```

## `RelationshipWatchWindowUdpSettings`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface RelationshipWatchWindowUdpSettings {
  readonly enabled?: boolean;
  readonly broadcast?: boolean;
  readonly ipAddress?: string;
  readonly port?: number;
}
```

## `RenderModeType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export type ReportOutputOptions =
  | {
      readonly outputType: ReportOutputType;
      readonly externalPath: string;
      readonly embeddedFile?: never;
    }
  | {
      readonly outputType: ReportOutputType;
      readonly embeddedFile: EmbeddedReportFile;
      readonly externalPath?: never;
    };

export const ReportOutputOptions = Object.freeze({
  default: deepFreeze<ReportOutputOptions>({
    outputType: ReportOutputType.saReport,
    embeddedFile: { collectionName: '', fileName: 'My Report' },
  }),
});
```

## `ReportOutputType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const ReportPageSettings = Object.freeze({
  portrait: 'portrait',
  landscape: 'landscape',
} as const);
export type ReportPageSettings = (typeof ReportPageSettings)[keyof typeof ReportPageSettings];
```

## `ReportViewOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface ReportViewOptions {
  readonly viewType: ReportViewType;
  readonly collectionName: string;
  readonly calloutName: string;
}
```

## `ReportViewType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const ReportViewType = Object.freeze({
  none: 'none',
  currentView: 'currentView',
  calloutView: 'calloutView',
} as const);
export type ReportViewType = (typeof ReportViewType)[keyof typeof ReportViewType];
```

## `RobotCalibrationMetrics`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface RobotModelLinkConfiguration {
  readonly linkType: RobotModelLinkType;
  readonly dhAlphaComponent: number;
  readonly dhAComponent: number;
  readonly dhDComponent: number;
  readonly dhThetaComponent: number;
  readonly dhXAxisDeflectionFactor: number;
  readonly dhYAxisDeflectionFactor: number;
  readonly dhZAxisDeflectionFactor: number;
  readonly sixDofXComponent: number;
  readonly sixDofYComponent: number;
  readonly sixDofZComponent: number;
  readonly sixDofRxComponent: number;
  readonly sixDofRyComponent: number;
  readonly sixDofRzComponent: number;
  readonly activeJointComponent: RobotActiveJointComponent;
  readonly encoderOffsetValue: number;
  readonly minimumEncoderLimit: number;
  readonly maximumEncoderLimit: number;
  readonly encoderSenseNegative: boolean;
  readonly includeAdditionalEncoder: boolean;
  readonly additionalEncoderIndexOffset: number;
  readonly additionalEncoderSenseNegative: boolean;
  readonly segmentOriginMassKg: number;
  readonly segmentCgMassKg: number;
  readonly segmentCgInSegment: Vector;
}
```

## `RobotModelLinkParameters`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface RobotModelLinkParameters {
  readonly configuration: RobotModelLinkConfiguration;
  readonly encoderValue: number;
}
```

## `SaInteractionMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const SaInteractionMode = Object.freeze({
  manual: 'manual',
  automatic: 'automatic',
  silent: 'silent',
} as const);
export type SaInteractionMode = (typeof SaInteractionMode)[keyof typeof SaInteractionMode];
```

## `ScalarToleranceLimit`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface ScalarToleranceLimit {
  readonly enabled: boolean;
  readonly value: number;
}
```

## `SetInstrumentBaseUncertaintyCovarianceMatrixInput`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface SetInstrumentBaseUncertaintyCovarianceMatrixInput {
  readonly instrument: CollectionInstrumentId;
  readonly covarianceMatrix: UncertaintyCovarianceMatrix;
}
```

## `SetMeasurementsInput`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface SetMeasurementsInput {
  readonly pointNames: Iterable<PointName>;
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly replaceExistingMeasurements?: boolean;
}
```

## `SigmoidalGapFitConstraints`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const SlotType = Object.freeze({
  round: 'round',
  square: 'square',
} as const);
export type SlotType = (typeof SlotType)[keyof typeof SlotType];
```

## `SphereFitComputationMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const SphereFitComputationMode = Object.freeze({
  standard: 'standard',
  maxInscribed: 'maxInscribed',
  minCircumscribed: 'minCircumscribed',
} as const);
export type SphereFitComputationMode = (typeof SphereFitComputationMode)[keyof typeof SphereFitComputationMode];
```

## `SurfaceAnalysisMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface SurfaceFaceList {
  readonly value: string;
}
```

## `TcpFixtureUncertainties`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const TemperatureUnits = Object.freeze({
  fahrenheit: 'fahrenheit',
  celsius: 'celsius',
} as const);
export type TemperatureUnits = (typeof TemperatureUnits)[keyof typeof TemperatureUnits];
```

## `ToleranceLimit`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface ToleranceLimit {
  readonly enabled: boolean;
  readonly value: number;
}
```

## `ToleranceScalarOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface ToleranceScalarOptions {
  readonly high: ScalarToleranceLimit;
  readonly low: ScalarToleranceLimit;
}

export const ToleranceScalarOptions = Object.freeze({
  default: deepFreeze<ToleranceScalarOptions>({
    high: disabledScalarLimit,
    low: disabledScalarLimit,
  }),
});
```

## `ToleranceVectorOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

export const ToleranceVectorOptions = Object.freeze({
  noLimits: deepFreeze<ToleranceVectorOptions>({
    highX: disabledLimit,
    highY: disabledLimit,
    highZ: disabledLimit,
    highMagnitude: disabledLimit,
    lowX: disabledLimit,
    lowY: disabledLimit,
    lowZ: disabledLimit,
    lowMagnitude: disabledLimit,
  }),
});
```

## `TrackerEdmTheodoliteUncertainties`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface TrackerEdmTheodoliteUncertainties {
  readonly thetaDispersion: number;
  readonly thetaThreshold: number;
  readonly phiDispersion: number;
  readonly phiThreshold: number;
  readonly distance: number;
  readonly distanceThreshold: number;
}
```

## `Transform`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface Transform {
  readonly values: readonly number[];
}
```

## `TransformAxes`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface TransformAxes {
  readonly origin: Vector;
  readonly xAxis: Vector;
  readonly yAxis: Vector;
  readonly zAxis: Vector;
}
```

## `TranslucencyType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export const TranslucencyType = Object.freeze({
  solid: 'solid',
  translucent: 'translucent',
  wireframe: 'wireframe',
} as const);
export type TranslucencyType = (typeof TranslucencyType)[keyof typeof TranslucencyType];
```

## `UncertaintyCovarianceMatrix`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface Vector {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}
```

## `VectorName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface VectorName {
  readonly collectionName: string;
  readonly groupName: string;
  readonly name: string;
}
```

## `ViewName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface ViewName {
  readonly name: string;
}
```

## `WindowState`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

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

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface WorldFixedXyzTransformComponents extends FixedXyzTransformComponents {
  readonly scale: number;
}
```

## `WorldFixedXyzTransformVectors`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

```ts
export interface WorldFixedXyzTransformVectors {
  readonly positionInWorking: Vector;
  readonly orientationInWorking: Vector;
  readonly scale: number;
}
```

## `WorldTransform`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/operationValues.ts)

```ts
export interface WorldTransform {
  readonly transform: Transform;
  readonly scaleFactor: number;
}
```

## `WrtlChannelStatus`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-js/blob/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7/src/waveBOperationValues.ts)

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
  readonly coneEndPoint: Vector;
  readonly coneAxis: Vector;
  readonly coneLength: number;
  readonly coneThetaStart: number;
  readonly coneThetaSpan: number;
  readonly coneIncludedAngle: number;
  readonly cutLengthFromApex: number;
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
  readonly autoVectorsNominalEnabled: boolean;
  readonly autoVectorsNominalName: CollectionObjectName;
  readonly autoVectorsFitEnabled: boolean;
  readonly autoVectorsFitName: CollectionObjectName;
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
  readonly temperature: number;
  readonly pressure: number;
  readonly humidity: number;
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
  readonly slotTransform: Transform;
  readonly center: Vector;
  readonly normalDirection: Vector;
  readonly slotLength: number;
  readonly slotWidth: number;
  readonly roundSlotType: boolean;
  readonly centerlinePt1: Vector;
  readonly centerlinePt2: Vector;
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
  readonly rx: number;
  readonly ry: number;
  readonly rz: number;
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

## `GetCloudRGBValuesResult`

```ts
export interface GetCloudRGBValuesResult {
  readonly lowValue: number;
  readonly highValue: number;
  readonly averageValue: number;
  readonly standardDeviation: number;
}
```

## `GetCloudRGBValuesNearPointResult`

```ts
export interface GetCloudRGBValuesNearPointResult {
  readonly lowValue: number;
  readonly highValue: number;
  readonly averageValue: number;
  readonly standardDeviation: number;
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
  readonly referenceArmLength: number;
  readonly referenceArmQuality: number;
  readonly mirrorMeasurementCount: number;
  readonly mirrorMeasurementRangeMean: number;
  readonly mirrorMeasurementRangeStandardDeviation: number;
  readonly mirrorMeasurementQualityMean: number;
  readonly mirrorMeasurementQualityStandardDeviation: number;
  readonly passedReferenceArmQualityThreshold: boolean;
  readonly passedMirrorOffsetDeltaThreshold: boolean;
  readonly passedMirrorOffsetStandardDeviationThreshold: boolean;
  readonly passedMirrorMeanQualityThreshold: boolean;
  readonly passedOverall: boolean;
}
```
