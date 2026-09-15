---
title: GDT Operations / GDT Analysis
description: Unreleased Briosa JavaScript and TypeScript APIs for selected GDT Analysis MP commands.
toc_max_heading_level: 2
---

# GDT Operations / GDT Analysis

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## Shared Types

```ts
export type GdtDistanceBetweenMode = 'centroid' | 'minMax';
export type GdtEvaluationMethod =
  | 'none'
  | 'asme1994'
  | 'asme2009'
  | 'asme2018'
  | 'iso1983'
  | 'iso2004'
  | 'iso2017';

export type GdtExtendedEvaluationMethod =
  | 'leastSquares'
  | 'highPoint'
  | 'minimumSeparation'
  | 'leastSquaresHighPoint'
  | 'leastSquares3d'
  | 'leastSquaresHighPoint1StdDev'
  | 'leastSquaresHighPoint2StdDev'
  | 'leastSquaresHighPointHalfway'
  | 'minimumSeparationHighPoint'
  | 'equalizedHighPoint'
  | 'equalizedLsqHighPoint';

export interface GdtMeasurements {
  readonly pointNames: readonly PointName[];
  readonly cloudNames: readonly CollectionObjectName[];
}

export interface FeatureCheckDatumReference {
  readonly referenceString: string;
  readonly cadFaces: string;
  readonly saObjects: readonly CollectionObjectName[];
  readonly auxiliarySaObjects: readonly CollectionObjectName[];
  readonly geometryRelationships: readonly CollectionItemName[];
  readonly auxiliaryGeometryRelationships: readonly CollectionItemName[];
}

export interface FeatureCheckDatumReferencesResult {
  readonly datum1: FeatureCheckDatumReference;
  readonly datum2: FeatureCheckDatumReference;
  readonly datum3: FeatureCheckDatumReference;
}

export interface FeatureCheckCylinderEvalOptions {
  readonly enableActualDiameterOverride: boolean;
  readonly actualDiameterOverride: number;
}

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

export interface EvaluateFeatureChecksResult {
  readonly totalPassed: number;
  readonly totalFailed: number;
  readonly totalIncomplete: number;
}

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

## Input Types

```ts
export interface FeatureCheckInput { readonly featureCheck: CollectionItemName; }
export interface DatumInput { readonly datum: CollectionItemName; }

export interface SetMeasurementsInput {
  readonly pointNames: Iterable<PointName>;
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly replaceExistingMeasurements?: boolean;
}

export interface SetDatumMeasurementsInput extends SetMeasurementsInput {
  readonly datum: CollectionItemName;
}

export interface SetFeatureCheckMeasurementsInput extends SetMeasurementsInput {
  readonly featureCheck: CollectionItemName;
}

export interface SetFeatureCheckCylinderEvalOptionsInput {
  readonly featureCheck: CollectionItemName;
  readonly enableActualDiameterOverride?: boolean;
  readonly actualDiameterOverride?: number;
}

export interface FeatureInspectionAutoFilterInput {
  readonly pointNames?: Iterable<PointName>;
  readonly groupNames?: Iterable<CollectionObjectName>;
  readonly cloudNames?: Iterable<CollectionObjectName>;
  readonly surfaceOffset?: number;
  readonly edgeOffset?: number;
  readonly offsetDirection?: OffsetDirectionType;
  readonly includePointsWithinCylinderAxisProximity?: boolean;
  readonly enforceMaxPointsPerFaceInOutput?: boolean;
  readonly maxPointsPerFace?: number;
  readonly featureCheckNameList?: Iterable<CollectionItemName>;
  readonly includeDatums?: boolean;
  readonly createCloudForEachDatumOrCheck?: boolean;
}

export interface EvaluateFeatureCheckInput extends FeatureCheckInput {
  readonly performEvaluation?: boolean;
  readonly simultaneousEvaluation?: boolean;
}

export interface EvaluateFeatureChecksInput {
  readonly featureCheckList: Iterable<CollectionItemName>;
  readonly simultaneousEvaluation?: boolean;
  readonly restrictEvaluationsToListedChecks?: boolean;
}

export interface GenerateFeatureCheckSummaryInput {
  readonly featureCheckList: Iterable<CollectionItemName>;
  readonly summaryTableName?: string;
}

export interface StartStopFeatureCheckTrappingInput extends FeatureCheckInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly startTrapping?: boolean;
}

export interface EnableDisableDatumAlignmentForFeatureCheckInput extends FeatureCheckInput {
  readonly enableDatumAlignment?: boolean;
  readonly enableCustomInitialAlignment?: boolean;
  readonly enableInitialDatumAlignment?: boolean;
  readonly alignment?: CollectionItemName;
}

export interface DatumAlignmentInput extends FeatureCheckInput {
  readonly objectsToMove: Iterable<CollectionObjectName>;
  readonly instrumentsToMove: Iterable<CollectionInstrumentId>;
  readonly applyFeatureCheckTransform?: boolean;
}

export interface SetGdtOptionsInput {
  readonly useHighPoints?: boolean;
  readonly extrapolateAxialExtent?: boolean;
  readonly excludeFromAutoEvaluation?: boolean;
  readonly distanceBetweenMode?: GdtDistanceBetweenMode;
  readonly evaluationMethod?: GdtEvaluationMethod;
  readonly createActualFeatures?: boolean;
  readonly createSolvedPoints?: boolean;
  readonly crossSectionCriteria?: number;
  readonly enableAutoFeatureDetection?: boolean;
}

export interface SetGdtExtendedOptionsInput {
  readonly useExtendedOptions?: boolean;
  readonly circle?: GdtExtendedEvaluationMethod;
  readonly cone?: GdtExtendedEvaluationMethod;
  readonly cylinder?: GdtExtendedEvaluationMethod;
  readonly ellipse?: GdtExtendedEvaluationMethod;
  readonly line?: GdtExtendedEvaluationMethod;
  readonly openSlot?: GdtExtendedEvaluationMethod;
  readonly plane?: GdtExtendedEvaluationMethod;
  readonly slot?: GdtExtendedEvaluationMethod;
  readonly sphere?: GdtExtendedEvaluationMethod;
}

export interface SetFeatureCheckReportingFrameInput extends FeatureCheckInput {
  readonly reportingFrame: CollectionObjectName;
}

export interface SetFeatureCheckReportingOptionsInput extends FeatureCheckInput {
  readonly showFeatureControlFrameSummary?: boolean;
  readonly includeTitle?: boolean;
  readonly showDatumAndToleranceSummary?: boolean;
  readonly showFeatureSummary?: boolean;
  readonly onlyCreateFailedVectors?: boolean;
  readonly showPointDetailsSummary?: boolean;
  readonly showLowerTierTables?: boolean;
}

export interface SetGlobalForceSimultaneousEvaluationInput {
  readonly globalSimultaneousEvaluation?: boolean;
}

export interface RefreshDatumsFeatureChecksFromAnnotationsInput {
  readonly collection: CollectionName;
}
```

## Functions

```ts
function getFeatureCheckDatumReferences(briosa: BriosaClient, input: FeatureCheckInput, options?: BriosaCallOptions): Promise<FeatureCheckDatumReferencesResult>;
function getDatumMeasurements(briosa: BriosaClient, input: DatumInput, options?: BriosaCallOptions): Promise<GdtMeasurements>;
function setDatumMeasurements(briosa: BriosaClient, input: SetDatumMeasurementsInput, options?: BriosaCallOptions): Promise<void>;
function getFeatureCheckMeasurements(briosa: BriosaClient, input: FeatureCheckInput, options?: BriosaCallOptions): Promise<GdtMeasurements>;
function setFeatureCheckMeasurements(briosa: BriosaClient, input: SetFeatureCheckMeasurementsInput, options?: BriosaCallOptions): Promise<void>;
function getFeatureCheckCylinderEvalOptions(briosa: BriosaClient, input: FeatureCheckInput, options?: BriosaCallOptions): Promise<FeatureCheckCylinderEvalOptions>;
function setFeatureCheckCylinderEvalOptions(briosa: BriosaClient, input: SetFeatureCheckCylinderEvalOptionsInput, options?: BriosaCallOptions): Promise<void>;
function featureInspectionAutoFilter(briosa: BriosaClient, input?: FeatureInspectionAutoFilterInput, options?: BriosaCallOptions): Promise<void>;
function setGlobalForceSimultaneousEvaluation(briosa: BriosaClient, input?: SetGlobalForceSimultaneousEvaluationInput, options?: BriosaCallOptions): Promise<void>;
function evaluateFeatureCheck(briosa: BriosaClient, input: EvaluateFeatureCheckInput, options?: BriosaCallOptions): Promise<EvaluateFeatureCheckResult>;
function evaluateFeatureChecks(briosa: BriosaClient, input: EvaluateFeatureChecksInput, options?: BriosaCallOptions): Promise<EvaluateFeatureChecksResult>;
function generateFeatureCheckSummary(briosa: BriosaClient, input: GenerateFeatureCheckSummaryInput, options?: BriosaCallOptions): Promise<void>;
function startStopFeatureCheckTrapping(briosa: BriosaClient, input: StartStopFeatureCheckTrappingInput, options?: BriosaCallOptions): Promise<void>;
function enableDisableDatumAlignmentForFeatureCheck(briosa: BriosaClient, input: EnableDisableDatumAlignmentForFeatureCheckInput, options?: BriosaCallOptions): Promise<void>;
function datumAlignment(briosa: BriosaClient, input: DatumAlignmentInput, options?: BriosaCallOptions): Promise<void>;
function getGdtOptions(briosa: BriosaClient, options?: BriosaCallOptions): Promise<GdtOptions>;
function setGdtOptions(briosa: BriosaClient, input?: SetGdtOptionsInput, options?: BriosaCallOptions): Promise<void>;
function setGdtExtendedOptions(briosa: BriosaClient, input?: SetGdtExtendedOptionsInput, options?: BriosaCallOptions): Promise<void>;
function getGdtExtendedOptions(briosa: BriosaClient, options?: BriosaCallOptions): Promise<boolean>;
function refreshDatumsFeatureChecksFromAnnotations(briosa: BriosaClient, input: RefreshDatumsFeatureChecksFromAnnotationsInput, options?: BriosaCallOptions): Promise<void>;
function setFeatureCheckReportingFrame(briosa: BriosaClient, input: SetFeatureCheckReportingFrameInput, options?: BriosaCallOptions): Promise<void>;
function getFeatureCheckReportingFrame(briosa: BriosaClient, input: FeatureCheckInput, options?: BriosaCallOptions): Promise<CollectionObjectName>;
function setFeatureCheckReportingOptions(briosa: BriosaClient, input: SetFeatureCheckReportingOptionsInput, options?: BriosaCallOptions): Promise<void>;
function getFeatureCheckReportingOptions(briosa: BriosaClient, input: FeatureCheckInput, options?: BriosaCallOptions): Promise<FeatureCheckReportingOptions>;
```

## Examples

```ts
const references = await getFeatureCheckDatumReferences(briosa, {featureCheck});
const datumMeasurements = await getDatumMeasurements(briosa, {datum});
await setDatumMeasurements(briosa, {datum, pointNames, cloudNames});
const checkMeasurements = await getFeatureCheckMeasurements(briosa, {featureCheck});
await setFeatureCheckMeasurements(briosa, {featureCheck, pointNames, cloudNames});
const cylinderOptions = await getFeatureCheckCylinderEvalOptions(briosa, {featureCheck});
await setFeatureCheckCylinderEvalOptions(briosa, {featureCheck, enableActualDiameterOverride: true, actualDiameterOverride: 25});
await featureInspectionAutoFilter(briosa, {pointNames, featureCheckNameList: featureChecks});
await setGlobalForceSimultaneousEvaluation(briosa, {globalSimultaneousEvaluation: true});
const result = await evaluateFeatureCheck(briosa, {featureCheck});
const totals = await evaluateFeatureChecks(briosa, {featureCheckList: featureChecks});
await generateFeatureCheckSummary(briosa, {featureCheckList: featureChecks});
await startStopFeatureCheckTrapping(briosa, {featureCheck, instrumentId, startTrapping: true});
await enableDisableDatumAlignmentForFeatureCheck(briosa, {featureCheck});
await datumAlignment(briosa, {featureCheck, objectsToMove, instrumentsToMove});
const gdtOptions = await getGdtOptions(briosa);
await setGdtOptions(briosa);
await setGdtExtendedOptions(briosa);
const extendedOptionsEnabled = await getGdtExtendedOptions(briosa);
await refreshDatumsFeatureChecksFromAnnotations(briosa, {collection});
await setFeatureCheckReportingFrame(briosa, {featureCheck, reportingFrame});
const frame = await getFeatureCheckReportingFrame(briosa, {featureCheck});
await setFeatureCheckReportingOptions(briosa, {featureCheck});
const reporting = await getFeatureCheckReportingOptions(briosa, {featureCheck});
```

Set defaults match the MP Editor and are listed in the
[gRPC contract](/api/grpc/gdt-analysis). The exact getter returns seven
`GdtOptions` properties; `distanceBetweenMode` and `evaluationMethod` are
absent. `getGdtExtendedOptions` intentionally returns only the enable state.

:::warning[Partial Reporting-Options Contract]

The exact SDK cannot bind `Vector Creation`. These functions omit it and leave
the current SA setting unchanged. The getter returns the seven available
Boolean options.

:::

Briosa does not maintain trapping or alignment workflow state, add movement
safeguards, or automatically replay uncertain mutation or evaluation calls.

[Catalog](/mp-command-catalog/commands/gdt-analysis) · [gRPC](/api/grpc/gdt-analysis)
