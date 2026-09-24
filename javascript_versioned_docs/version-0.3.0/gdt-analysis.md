---
title: GDT Operations / GDT Analysis
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# GDT Operations / GDT Analysis

[SA 2026.1.0529.7](/api/javascript/gdt-analysis) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/gdt-analysis)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Get Feature Check Datum References {/* #get-feature-check-datum-references */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-datum-references) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-datum-references)

```ts
// Member of BriosaClient
interface BriosaClient {
  getFeatureCheckDatumReferences(
    input: FeatureCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<FeatureCheckDatumReferencesResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Datum Measurements {/* #get-datum-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-datum-measurements) · [gRPC Contract](/api/grpc/gdt-analysis#get-datum-measurements)

```ts
// Member of BriosaClient
interface BriosaClient {
  getDatumMeasurements(
    input: DatumInput,
    callOptions?: BriosaCallOptions,
  ): Promise<GdtMeasurements>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Datum Measurements {/* #set-datum-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-datum-measurements) · [gRPC Contract](/api/grpc/gdt-analysis#set-datum-measurements)

```ts
// Member of BriosaClient
interface BriosaClient {
  setDatumMeasurements(
    input: SetDatumMeasurementsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Measurements {/* #get-feature-check-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-measurements) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-measurements)

```ts
// Member of BriosaClient
interface BriosaClient {
  getFeatureCheckMeasurements(
    input: FeatureCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<GdtMeasurements>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Measurements {/* #set-feature-check-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-measurements) · [gRPC Contract](/api/grpc/gdt-analysis#set-feature-check-measurements)

```ts
// Member of BriosaClient
interface BriosaClient {
  setFeatureCheckMeasurements(
    input: SetFeatureCheckMeasurementsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Cylinder Eval Options {/* #get-feature-check-cylinder-eval-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-cylinder-eval-options) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-cylinder-eval-options)

```ts
// Member of BriosaClient
interface BriosaClient {
  getFeatureCheckCylinderEvalOptions(
    input: FeatureCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<FeatureCheckCylinderEvalOptions>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Cylinder Eval Options {/* #set-feature-check-cylinder-eval-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-cylinder-eval-options) · [gRPC Contract](/api/grpc/gdt-analysis#set-feature-check-cylinder-eval-options)

```ts
export interface SetFeatureCheckCylinderEvalOptionsInput {
  readonly featureCheck: CollectionItemName;
  readonly enableActualDiameterOverride?: boolean;
  readonly actualDiameterOverride?: number;
}

// Member of BriosaClient
interface BriosaClient {
  setFeatureCheckCylinderEvalOptions(
    input: SetFeatureCheckCylinderEvalOptionsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Feature Inspection Auto Filter {/* #feature-inspection-auto-filter */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#feature-inspection-auto-filter) · [gRPC Contract](/api/grpc/gdt-analysis#feature-inspection-auto-filter)

```ts
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

// Member of BriosaClient
interface BriosaClient {
  featureInspectionAutoFilter(
    input?: FeatureInspectionAutoFilterInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Global Force Simultaneous Evaluation {/* #set-global-force-simultaneous-evaluation */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-global-force-simultaneous-evaluation) · [gRPC Contract](/api/grpc/gdt-analysis#set-global-force-simultaneous-evaluation)

```ts
export interface SetGlobalForceSimultaneousEvaluationInput {
  readonly globalSimultaneousEvaluation?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  setGlobalForceSimultaneousEvaluation(
    input?: SetGlobalForceSimultaneousEvaluationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Evaluate Feature Check {/* #evaluate-feature-check */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-check) · [gRPC Contract](/api/grpc/gdt-analysis#evaluate-feature-check)

```ts
// Member of BriosaClient
interface BriosaClient {
  evaluateFeatureCheck(
    input: EvaluateFeatureCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<EvaluateFeatureCheckResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Evaluate Feature Checks {/* #evaluate-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-checks) · [gRPC Contract](/api/grpc/gdt-analysis#evaluate-feature-checks)

```ts
export interface EvaluateFeatureChecksInput {
  readonly featureCheckList: Iterable<CollectionItemName>;
  readonly simultaneousEvaluation?: boolean;
  readonly restrictEvaluationsToListedChecks?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  evaluateFeatureChecks(
    input: EvaluateFeatureChecksInput,
    callOptions?: BriosaCallOptions,
  ): Promise<EvaluateFeatureChecksResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Feature Check Summary {/* #generate-feature-check-summary */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#generate-feature-check-summary) · [gRPC Contract](/api/grpc/gdt-analysis#generate-feature-check-summary)

```ts
export interface GenerateFeatureCheckSummaryInput {
  readonly featureCheckList: Iterable<CollectionItemName>;
  readonly summaryTableName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  generateFeatureCheckSummary(
    input: GenerateFeatureCheckSummaryInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Feature Check Trapping {/* #startstop-feature-check-trapping */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#startstop-feature-check-trapping) · [gRPC Contract](/api/grpc/gdt-analysis#startstop-feature-check-trapping)

```ts
// Member of BriosaClient
interface BriosaClient {
  startStopFeatureCheckTrapping(
    input: StartStopFeatureCheckTrappingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Datum Alignment for Feature Check {/* #enabledisable-datum-alignment-for-feature-check */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#enabledisable-datum-alignment-for-feature-check) · [gRPC Contract](/api/grpc/gdt-analysis#enabledisable-datum-alignment-for-feature-check)

```ts
// Member of BriosaClient
interface BriosaClient {
  enableDisableDatumAlignmentForFeatureCheck(
    input: EnableDisableDatumAlignmentForFeatureCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Datum Alignment {/* #datum-alignment */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#datum-alignment) · [gRPC Contract](/api/grpc/gdt-analysis#datum-alignment)

```ts
// Member of BriosaClient
interface BriosaClient {
  datumAlignment(
    input: DatumAlignmentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get GD&amp;T Options {/* #get-gdt-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-gdt-options) · [gRPC Contract](/api/grpc/gdt-analysis#get-gdt-options)

```ts
// Member of BriosaClient
interface BriosaClient {
  getGdtOptions(callOptions?: BriosaCallOptions): Promise<GdtOptions>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set GD&amp;T Options {/* #set-gdt-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-gdt-options) · [gRPC Contract](/api/grpc/gdt-analysis#set-gdt-options)

```ts
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

// Member of BriosaClient
interface BriosaClient {
  setGdtOptions(
    input?: SetGdtOptionsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set GD&amp;T Extended Options {/* #set-gdt-extended-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-gdt-extended-options) · [gRPC Contract](/api/grpc/gdt-analysis#set-gdt-extended-options)

```ts
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

// Member of BriosaClient
interface BriosaClient {
  setGdtExtendedOptions(
    input?: SetGdtExtendedOptionsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get GD&amp;T Extended Options {/* #get-gdt-extended-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-gdt-extended-options) · [gRPC Contract](/api/grpc/gdt-analysis#get-gdt-extended-options)

```ts
// Member of BriosaClient
interface BriosaClient {
  getGdtExtendedOptions(callOptions?: BriosaCallOptions): Promise<boolean>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Datums/Feature Checks from Annotations {/* #refresh-datumsfeature-checks-from-annotations */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#refresh-datumsfeature-checks-from-annotations) · [gRPC Contract](/api/grpc/gdt-analysis#refresh-datumsfeature-checks-from-annotations)

```ts
export interface RefreshDatumsFeatureChecksFromAnnotationsInput {
  readonly collection: CollectionName;
}

// Member of BriosaClient
interface BriosaClient {
  refreshDatumsFeatureChecksFromAnnotations(
    input: RefreshDatumsFeatureChecksFromAnnotationsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Reporting Frame {/* #set-feature-check-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-frame) · [gRPC Contract](/api/grpc/gdt-analysis#set-feature-check-reporting-frame)

```ts
// Member of BriosaClient
interface BriosaClient {
  setFeatureCheckReportingFrame(
    input: SetFeatureCheckReportingFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Reporting Frame {/* #get-feature-check-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-frame) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-reporting-frame)

```ts
// Member of BriosaClient
interface BriosaClient {
  getFeatureCheckReportingFrame(
    input: FeatureCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionObjectName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Reporting Options {/* #set-feature-check-reporting-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-options) · [gRPC Contract](/api/grpc/gdt-analysis#set-feature-check-reporting-options)

```ts
// Member of BriosaClient
interface BriosaClient {
  setFeatureCheckReportingOptions(
    input: SetFeatureCheckReportingOptionsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Reporting Options {/* #get-feature-check-reporting-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-options) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-reporting-options)

```ts
// Member of BriosaClient
interface BriosaClient {
  getFeatureCheckReportingOptions(
    input: FeatureCheckInput,
    callOptions?: BriosaCallOptions,
  ): Promise<FeatureCheckReportingOptions>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Input Types {/* #input-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Functions {/* #functions */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Examples {/* #examples */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
