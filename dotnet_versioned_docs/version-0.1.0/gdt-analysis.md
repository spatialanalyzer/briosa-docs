---
title: GDT Operations / GDT Analysis
description: Briosa 0.1.0 .NET APIs for selected GDT Analysis MP commands.
toc_max_heading_level: 2
---

# GDT Operations / GDT Analysis

## Shared Types

```csharp
public enum GdtDistanceBetweenMode { Centroid, MinMax }

public enum GdtEvaluationMethod
{
    None,
    Asme1994,
    Asme2009,
    Asme2018,
    Iso1983,
    Iso2004,
    Iso2017,
}

public enum GdtExtendedEvaluationMethod
{
    LeastSquares,
    HighPoint,
    MinimumSeparation,
    LeastSquaresHighPoint,
    LeastSquares3D,
    LeastSquaresHighPoint1StdDev,
    LeastSquaresHighPoint2StdDev,
    LeastSquaresHighPointHalfway,
    MinimumSeparationHighPoint,
    EqualizedHighPoint,
    EqualizedLsqHighPoint,
}

public sealed record GdtMeasurements(
    IReadOnlyList<PointName> PointNames,
    IReadOnlyList<CollectionObjectName> CloudNames);

public sealed record FeatureCheckDatumReference(
    string ReferenceString,
    string CadFaces,
    IReadOnlyList<CollectionObjectName> SaObjects,
    IReadOnlyList<CollectionObjectName> AuxiliarySaObjects,
    IReadOnlyList<CollectionItemName> GeometryRelationships,
    IReadOnlyList<CollectionItemName> AuxiliaryGeometryRelationships);

public sealed record FeatureCheckDatumReferencesResult(
    FeatureCheckDatumReference Datum1,
    FeatureCheckDatumReference Datum2,
    FeatureCheckDatumReference Datum3);

public sealed record FeatureCheckCylinderEvalOptions(
    bool EnableActualDiameterOverride,
    double ActualDiameterOverride);

public sealed record EvaluateFeatureCheckResult(
    bool CheckEvaluated,
    string CheckResult,
    bool NonUniqueResult,
    double MeasuredDeviationUpper,
    double DistanceOutOfToleranceUpper,
    WorldTransform EvalDeltaTransformUpper,
    double MeasuredDeviationLower,
    double DistanceOutOfToleranceLower,
    WorldTransform EvalDeltaTransformLower,
    string CheckType,
    string ToleranceType,
    double ToleranceSimple,
    double ToleranceCompositeUpper,
    double ToleranceCompositeLower,
    double ToleranceRangeMin,
    double ToleranceRangeMax,
    double ToleranceNominalPlusMinusNominal,
    double ToleranceNominalPlusMinusMinus,
    double ToleranceNominalPlusMinusPlus);

public sealed record EvaluateFeatureChecksResult(
    int TotalPassed,
    int TotalFailed,
    int TotalIncomplete);

public sealed record GdtOptions(
    bool UseHighPoints,
    bool ExtrapolateAxialExtent,
    bool ExcludeFromAutoEvaluation,
    GdtDistanceBetweenMode? DistanceBetweenMode,
    GdtEvaluationMethod? EvaluationMethod,
    bool CreateActualFeatures,
    bool CreateSolvedPoints,
    double CrossSectionCriteria,
    bool EnableAutoFeatureDetection);

public sealed record FeatureCheckReportingOptions(
    bool ShowFeatureControlFrameSummary,
    bool IncludeTitle,
    bool ShowDatumAndToleranceSummary,
    bool ShowFeatureSummary,
    bool OnlyCreateFailedVectors,
    bool ShowPointDetails,
    bool ShowLowerTierTables);
```

The evaluation result preserves all 19 MP outputs and uses `WorldTransform`
for both evaluation delta transforms.

## GetFeatureCheckDatumReferencesAsync

```csharp
public Task<FeatureCheckDatumReferencesResult> GetFeatureCheckDatumReferencesAsync(
    CollectionItemName featureCheck,
    CancellationToken cancellationToken = default);

var references = await briosa.GdtOperations
    .GetFeatureCheckDatumReferencesAsync(featureCheck);
```

## GetDatumMeasurementsAsync

```csharp
public Task<GdtMeasurements> GetDatumMeasurementsAsync(
    CollectionItemName datum,
    CancellationToken cancellationToken = default);

var measurements = await briosa.GdtOperations.GetDatumMeasurementsAsync(datum);
```

## SetDatumMeasurementsAsync

```csharp
public Task SetDatumMeasurementsAsync(
    CollectionItemName datum,
    IEnumerable<PointName> pointNames,
    IEnumerable<CollectionObjectName> cloudNames,
    bool replaceExistingMeasurements = false,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.SetDatumMeasurementsAsync(
    datum,
    pointNames,
    cloudNames);
```

## GetFeatureCheckMeasurementsAsync

```csharp
public Task<GdtMeasurements> GetFeatureCheckMeasurementsAsync(
    CollectionItemName featureCheck,
    CancellationToken cancellationToken = default);

var measurements = await briosa.GdtOperations
    .GetFeatureCheckMeasurementsAsync(featureCheck);
```

## SetFeatureCheckMeasurementsAsync

```csharp
public Task SetFeatureCheckMeasurementsAsync(
    CollectionItemName featureCheck,
    IEnumerable<PointName> pointNames,
    IEnumerable<CollectionObjectName> cloudNames,
    bool replaceExistingMeasurements = false,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.SetFeatureCheckMeasurementsAsync(
    featureCheck,
    pointNames,
    cloudNames);
```

## GetFeatureCheckCylinderEvalOptionsAsync

```csharp
public Task<FeatureCheckCylinderEvalOptions> GetFeatureCheckCylinderEvalOptionsAsync(
    CollectionItemName featureCheck,
    CancellationToken cancellationToken = default);

var options = await briosa.GdtOperations
    .GetFeatureCheckCylinderEvalOptionsAsync(featureCheck);
```

## SetFeatureCheckCylinderEvalOptionsAsync

```csharp
public Task SetFeatureCheckCylinderEvalOptionsAsync(
    CollectionItemName featureCheck,
    bool enableActualDiameterOverride = false,
    double actualDiameterOverride = 0.0,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.SetFeatureCheckCylinderEvalOptionsAsync(
    featureCheck,
    enableActualDiameterOverride: true,
    actualDiameterOverride: 25.0);
```

## FeatureInspectionAutoFilterAsync

```csharp
public Task FeatureInspectionAutoFilterAsync(
    IEnumerable<PointName>? pointNames = null,
    IEnumerable<CollectionObjectName>? groupNames = null,
    IEnumerable<CollectionObjectName>? cloudNames = null,
    double surfaceOffset = 0.1,
    double edgeOffset = 0.1,
    OffsetDirectionType offsetDirection = OffsetDirectionType.Both,
    bool includePointsWithinCylinderAxisProximity = false,
    bool enforceMaxPointsPerFaceInOutput = false,
    int maxPointsPerFace = 0,
    IEnumerable<CollectionItemName>? featureCheckNameList = null,
    bool includeDatums = true,
    bool createCloudForEachDatumOrCheck = false,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.FeatureInspectionAutoFilterAsync(
    pointNames: measuredPoints,
    featureCheckNameList: featureChecks);
```

## SetGlobalForceSimultaneousEvaluationAsync

```csharp
public Task SetGlobalForceSimultaneousEvaluationAsync(
    bool globalSimultaneousEvaluation = false,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.SetGlobalForceSimultaneousEvaluationAsync(true);
```

## EvaluateFeatureCheckAsync

```csharp
public Task<EvaluateFeatureCheckResult> EvaluateFeatureCheckAsync(
    CollectionItemName featureCheck,
    bool performEvaluation = true,
    bool simultaneousEvaluation = false,
    CancellationToken cancellationToken = default);

var result = await briosa.GdtOperations.EvaluateFeatureCheckAsync(featureCheck);
```

## EvaluateFeatureChecksAsync

```csharp
public Task<EvaluateFeatureChecksResult> EvaluateFeatureChecksAsync(
    IEnumerable<CollectionItemName> featureCheckList,
    bool simultaneousEvaluation = false,
    bool restrictEvaluationsToListedChecks = false,
    CancellationToken cancellationToken = default);

var totals = await briosa.GdtOperations.EvaluateFeatureChecksAsync(featureChecks);
```

## GenerateFeatureCheckSummaryAsync

```csharp
public Task GenerateFeatureCheckSummaryAsync(
    IEnumerable<CollectionItemName> featureCheckList,
    string summaryTableName = "GDT Feature Check Summary",
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.GenerateFeatureCheckSummaryAsync(featureChecks);
```

## StartStopFeatureCheckTrappingAsync

```csharp
public Task StartStopFeatureCheckTrappingAsync(
    CollectionItemName featureCheck,
    CollectionInstrumentId instrumentId,
    bool startTrapping = false,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.StartStopFeatureCheckTrappingAsync(
    featureCheck,
    instrumentId,
    startTrapping: true);
```

## EnableDisableDatumAlignmentForFeatureCheckAsync

```csharp
public Task EnableDisableDatumAlignmentForFeatureCheckAsync(
    CollectionItemName featureCheck,
    bool enableDatumAlignment = true,
    bool enableCustomInitialAlignment = false,
    bool enableInitialDatumAlignment = true,
    CollectionItemName? alignment = null,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.EnableDisableDatumAlignmentForFeatureCheckAsync(
    featureCheck);
```

## DatumAlignmentAsync

```csharp
public Task DatumAlignmentAsync(
    CollectionItemName featureCheck,
    IEnumerable<CollectionObjectName> objectsToMove,
    IEnumerable<CollectionInstrumentId> instrumentsToMove,
    bool applyFeatureCheckTransform = false,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.DatumAlignmentAsync(
    featureCheck,
    objectsToMove,
    instrumentsToMove);
```

Briosa does not retain a parallel model of trapping or alignment state and does
not add movement safeguards.

## GetGdtOptionsAsync

```csharp
public Task<GdtOptions> GetGdtOptionsAsync(
    CancellationToken cancellationToken = default);

var options = await briosa.GdtOperations.GetGdtOptionsAsync();
```

The exact getter returns seven properties. `DistanceBetweenMode` and
`EvaluationMethod` are `null` because the MP command does not expose them as
outputs.

## SetGdtOptionsAsync

```csharp
public Task SetGdtOptionsAsync(
    bool useHighPoints = false,
    bool extrapolateAxialExtent = true,
    bool excludeFromAutoEvaluation = true,
    GdtDistanceBetweenMode distanceBetweenMode = GdtDistanceBetweenMode.Centroid,
    GdtEvaluationMethod evaluationMethod = GdtEvaluationMethod.None,
    bool createActualFeatures = false,
    bool createSolvedPoints = false,
    double crossSectionCriteria = 0.039370,
    bool enableAutoFeatureDetection = true,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.SetGdtOptionsAsync();
```

## SetGdtExtendedOptionsAsync

```csharp
public Task SetGdtExtendedOptionsAsync(
    bool useExtendedOptions = true,
    GdtExtendedEvaluationMethod circle = GdtExtendedEvaluationMethod.LeastSquares,
    GdtExtendedEvaluationMethod cone = GdtExtendedEvaluationMethod.LeastSquares,
    GdtExtendedEvaluationMethod cylinder = GdtExtendedEvaluationMethod.LeastSquares,
    GdtExtendedEvaluationMethod ellipse = GdtExtendedEvaluationMethod.LeastSquares,
    GdtExtendedEvaluationMethod line = GdtExtendedEvaluationMethod.LeastSquares,
    GdtExtendedEvaluationMethod openSlot = GdtExtendedEvaluationMethod.LeastSquares,
    GdtExtendedEvaluationMethod plane = GdtExtendedEvaluationMethod.LeastSquares,
    GdtExtendedEvaluationMethod slot = GdtExtendedEvaluationMethod.LeastSquares,
    GdtExtendedEvaluationMethod sphere = GdtExtendedEvaluationMethod.LeastSquares,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.SetGdtExtendedOptionsAsync();
```

Each geometry accepts only its documented subset of the shared enum.

## GetGdtExtendedOptionsAsync

```csharp
public Task<bool> GetGdtExtendedOptionsAsync(
    CancellationToken cancellationToken = default);

var enabled = await briosa.GdtOperations.GetGdtExtendedOptionsAsync();
```

The exact MP getter returns only `Use Extended Options`; it does not return the
per-geometry selections.

## RefreshDatumsFeatureChecksFromAnnotationsAsync

```csharp
public Task RefreshDatumsFeatureChecksFromAnnotationsAsync(
    CollectionName collection,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.RefreshDatumsFeatureChecksFromAnnotationsAsync(collection);
```

## SetFeatureCheckReportingFrameAsync

```csharp
public Task SetFeatureCheckReportingFrameAsync(
    CollectionItemName featureCheck,
    CollectionObjectName reportingFrame,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.SetFeatureCheckReportingFrameAsync(
    featureCheck,
    reportingFrame);
```

## GetFeatureCheckReportingFrameAsync

```csharp
public Task<CollectionObjectName> GetFeatureCheckReportingFrameAsync(
    CollectionItemName featureCheck,
    CancellationToken cancellationToken = default);

var frame = await briosa.GdtOperations.GetFeatureCheckReportingFrameAsync(featureCheck);
```

## SetFeatureCheckReportingOptionsAsync

```csharp
public Task SetFeatureCheckReportingOptionsAsync(
    CollectionItemName featureCheck,
    bool showFeatureControlFrameSummary = true,
    bool includeTitle = false,
    bool showDatumAndToleranceSummary = false,
    bool showFeatureSummary = false,
    bool onlyCreateFailedVectors = false,
    bool showPointDetailsSummary = false,
    bool showLowerTierTables = false,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.SetFeatureCheckReportingOptionsAsync(featureCheck);
```

## GetFeatureCheckReportingOptionsAsync

```csharp
public Task<FeatureCheckReportingOptions> GetFeatureCheckReportingOptionsAsync(
    CollectionItemName featureCheck,
    CancellationToken cancellationToken = default);

var options = await briosa.GdtOperations
    .GetFeatureCheckReportingOptionsAsync(featureCheck);
```

:::warning[Partial Reporting-Options Contract]

The exact SDK cannot bind `Vector Creation`. These methods omit it and leave
the current SA setting unchanged. The getter returns the seven available
Boolean options.

:::

None of the mutation or evaluation methods is automatically replayed after an
unknown execution outcome.

[Catalog](/mp-command-catalog/commands/gdt-analysis) · [gRPC](/api/grpc/gdt-analysis)
