---
title: GDT Operations / GDT Analysis
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# GDT Operations / GDT Analysis

[SA 2026.1.0529.7](/api/dotnet/gdt-analysis) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/gdt-analysis)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Get Feature Check Datum References {/* #get-feature-check-datum-references */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-datum-references) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#get-feature-check-datum-references)

```csharp
public Task<FeatureCheckDatumReferencesResult> GetFeatureCheckDatumReferencesAsync(
        CollectionItemName featureCheck,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Datum Measurements {/* #get-datum-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-datum-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#get-datum-measurements)

```csharp
public Task<GdtMeasurements> GetDatumMeasurementsAsync(
        CollectionItemName datum,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Datum Measurements {/* #set-datum-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-datum-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#set-datum-measurements)

```csharp
public Task SetDatumMeasurementsAsync(
        CollectionItemName datum,
        IEnumerable<PointName> pointNames,
        IEnumerable<CollectionObjectName> cloudNames,
        bool replaceExistingMeasurements = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Measurements {/* #get-feature-check-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#get-feature-check-measurements)

```csharp
public Task<GdtMeasurements> GetFeatureCheckMeasurementsAsync(
        CollectionItemName featureCheck,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Measurements {/* #set-feature-check-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#set-feature-check-measurements)

```csharp
public Task SetFeatureCheckMeasurementsAsync(
        CollectionItemName featureCheck,
        IEnumerable<PointName> pointNames,
        IEnumerable<CollectionObjectName> cloudNames,
        bool replaceExistingMeasurements = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Cylinder Eval Options {/* #get-feature-check-cylinder-eval-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-cylinder-eval-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#get-feature-check-cylinder-eval-options)

```csharp
public Task<FeatureCheckCylinderEvalOptions> GetFeatureCheckCylinderEvalOptionsAsync(
        CollectionItemName featureCheck,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Cylinder Eval Options {/* #set-feature-check-cylinder-eval-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-cylinder-eval-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#set-feature-check-cylinder-eval-options)

```csharp
public Task SetFeatureCheckCylinderEvalOptionsAsync(
        CollectionItemName featureCheck,
        bool enableActualDiameterOverride = false,
        double actualDiameterOverride = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Feature Inspection Auto Filter {/* #feature-inspection-auto-filter */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#feature-inspection-auto-filter) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#feature-inspection-auto-filter)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Global Force Simultaneous Evaluation {/* #set-global-force-simultaneous-evaluation */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-global-force-simultaneous-evaluation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#set-global-force-simultaneous-evaluation)

```csharp
public Task SetGlobalForceSimultaneousEvaluationAsync(
        bool globalSimultaneousEvaluation = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Evaluate Feature Check {/* #evaluate-feature-check */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#evaluate-feature-check)

```csharp
public Task<EvaluateFeatureCheckResult> EvaluateFeatureCheckAsync(
        CollectionItemName featureCheck,
        bool performEvaluation = true,
        bool simultaneousEvaluation = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Evaluate Feature Checks {/* #evaluate-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-checks) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#evaluate-feature-checks)

```csharp
public Task<EvaluateFeatureChecksResult> EvaluateFeatureChecksAsync(
        IEnumerable<CollectionItemName> featureCheckList,
        bool simultaneousEvaluation = false,
        bool restrictEvaluationsToListedChecks = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Feature Check Summary {/* #generate-feature-check-summary */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#generate-feature-check-summary) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#generate-feature-check-summary)

```csharp
public Task GenerateFeatureCheckSummaryAsync(
        IEnumerable<CollectionItemName> featureCheckList,
        string summaryTableName = "GDT Feature Check Summary",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Feature Check Trapping {/* #startstop-feature-check-trapping */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#startstop-feature-check-trapping) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#startstop-feature-check-trapping)

```csharp
public Task StartStopFeatureCheckTrappingAsync(
        CollectionItemName featureCheck,
        CollectionInstrumentId instrumentId,
        bool startTrapping = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Datum Alignment for Feature Check {/* #enabledisable-datum-alignment-for-feature-check */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#enabledisable-datum-alignment-for-feature-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#enabledisable-datum-alignment-for-feature-check)

```csharp
public Task EnableDisableDatumAlignmentForFeatureCheckAsync(
        CollectionItemName featureCheck,
        bool enableDatumAlignment = true,
        bool enableCustomInitialAlignment = false,
        bool enableInitialDatumAlignment = true,
        CollectionItemName? alignment = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Datum Alignment {/* #datum-alignment */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#datum-alignment) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#datum-alignment)

```csharp
public Task DatumAlignmentAsync(
        CollectionItemName featureCheck,
        IEnumerable<CollectionObjectName> objectsToMove,
        IEnumerable<CollectionInstrumentId> instrumentsToMove,
        bool applyFeatureCheckTransform = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get GD&amp;T Options {/* #get-gdt-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-gdt-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#get-gdt-options)

```csharp
public Task<GdtOptions> GetGdtOptionsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set GD&amp;T Options {/* #set-gdt-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-gdt-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#set-gdt-options)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Datums/Feature Checks from Annotations {/* #refresh-datumsfeature-checks-from-annotations */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#refresh-datumsfeature-checks-from-annotations) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#refresh-datumsfeature-checks-from-annotations)

```csharp
public Task RefreshDatumsFeatureChecksFromAnnotationsAsync(
        CollectionName collection,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Reporting Frame {/* #set-feature-check-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#set-feature-check-reporting-frame)

```csharp
public Task SetFeatureCheckReportingFrameAsync(
        CollectionItemName featureCheck,
        CollectionObjectName reportingFrame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Reporting Frame {/* #get-feature-check-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#get-feature-check-reporting-frame)

```csharp
public Task<CollectionObjectName> GetFeatureCheckReportingFrameAsync(
        CollectionItemName featureCheck,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Reporting Options {/* #set-feature-check-reporting-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#set-feature-check-reporting-options)

```csharp
public Task SetFeatureCheckReportingOptionsAsync(
        CollectionItemName featureCheck,
        bool showFeatureControlFrameSummary = true,
        bool includeTitle = false,
        bool showDatumAndToleranceSummary = false,
        bool showFeatureSummary = false,
        bool showPointDetailsSummary = false,
        bool showLowerTierTables = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Reporting Options {/* #get-feature-check-reporting-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/gdt-analysis#get-feature-check-reporting-options)

```csharp
public Task<FeatureCheckReportingOptions> GetFeatureCheckReportingOptionsAsync(
        CollectionItemName featureCheck,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetFeatureCheckDatumReferencesAsync {/* #getfeaturecheckdatumreferencesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetDatumMeasurementsAsync {/* #getdatummeasurementsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetDatumMeasurementsAsync {/* #setdatummeasurementsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetFeatureCheckMeasurementsAsync {/* #getfeaturecheckmeasurementsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetFeatureCheckMeasurementsAsync {/* #setfeaturecheckmeasurementsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetFeatureCheckCylinderEvalOptionsAsync {/* #getfeaturecheckcylinderevaloptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetFeatureCheckCylinderEvalOptionsAsync {/* #setfeaturecheckcylinderevaloptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## FeatureInspectionAutoFilterAsync {/* #featureinspectionautofilterasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetGlobalForceSimultaneousEvaluationAsync {/* #setglobalforcesimultaneousevaluationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EvaluateFeatureCheckAsync {/* #evaluatefeaturecheckasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EvaluateFeatureChecksAsync {/* #evaluatefeaturechecksasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GenerateFeatureCheckSummaryAsync {/* #generatefeaturechecksummaryasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## StartStopFeatureCheckTrappingAsync {/* #startstopfeaturechecktrappingasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## EnableDisableDatumAlignmentForFeatureCheckAsync {/* #enabledisabledatumalignmentforfeaturecheckasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DatumAlignmentAsync {/* #datumalignmentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetGdtOptionsAsync {/* #getgdtoptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetGdtOptionsAsync {/* #setgdtoptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetGdtExtendedOptionsAsync {/* #setgdtextendedoptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetGdtExtendedOptionsAsync {/* #getgdtextendedoptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RefreshDatumsFeatureChecksFromAnnotationsAsync {/* #refreshdatumsfeaturechecksfromannotationsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetFeatureCheckReportingFrameAsync {/* #setfeaturecheckreportingframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetFeatureCheckReportingFrameAsync {/* #getfeaturecheckreportingframeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetFeatureCheckReportingOptionsAsync {/* #setfeaturecheckreportingoptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GetFeatureCheckReportingOptionsAsync {/* #getfeaturecheckreportingoptionsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
