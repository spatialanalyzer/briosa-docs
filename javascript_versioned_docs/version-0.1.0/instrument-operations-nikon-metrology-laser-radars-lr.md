---
title: Instrument Operations / Nikon Metrology Laser Radars LR
description: Briosa 0.1.0 JavaScript and TypeScript APIs for reviewed Nikon Metrology Laser Radars LR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR

## Types

```ts
export interface LrSnrInfo {
  readonly snr: number;
  readonly sizeOfDataArray: number;
  readonly peakValueIndex: number;
  readonly peakValueDb: number;
  readonly measuredRangeMeters: number;
}

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

## lrHardwareConnect

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect)

```ts
export interface LrHardwareConnectInput {
  readonly instrument: CollectionInstrumentId;
  readonly host: string;
  readonly port: number;
}

function lrHardwareConnect(
  briosa: BriosaClient,
  input: LrHardwareConnectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## lrHardwareDisconnect

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect)

```ts
export interface LrInstrumentInput {
  readonly instrument: CollectionInstrumentId;
}

function lrHardwareDisconnect(
  briosa: BriosaClient,
  input: LrInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## lrVerifyHardwareConnection

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection)

```ts
function lrVerifyHardwareConnection(
  briosa: BriosaClient,
  input: LrInstrumentInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

## lrSetRedLaserIntensity

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity)

```ts
export interface LrSetRedLaserIntensityInput {
  readonly instrument: CollectionInstrumentId;
  readonly intensity?: number;
}

function lrSetRedLaserIntensity(
  briosa: BriosaClient,
  input: LrSetRedLaserIntensityInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Intensity defaults to `0`; Briosa adds no `0–100` range validation.

## lrGetMostRecentSnrInfo

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info)

```ts
function lrGetMostRecentSnrInfo(
  briosa: BriosaClient,
  input: LrInstrumentInput,
  options?: BriosaCallOptions,
): Promise<LrSnrInfo>;
```

## lrSelfTest

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test)

```ts
function lrSelfTest(
  briosa: BriosaClient,
  input: LrInstrumentInput,
  options?: BriosaCallOptions,
): Promise<LrSelfTestResult>;
```

## lrSelfTestLinearization

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization)

```ts
function lrSelfTestLinearization(
  briosa: BriosaClient,
  input: LrInstrumentInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The result is linearity in kHz.

## lrSelfTestFlipTest

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test)

```ts
function lrSelfTestFlipTest(
  briosa: BriosaClient,
  input: LrInstrumentInput,
  options?: BriosaCallOptions,
): Promise<LrFlipTestResult>;
```

## lrSelfTestLoSep

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep)

```ts
export interface LrSelfTestLoSepInput extends LrInstrumentInput {
  readonly region?: number;
  readonly numRangeMeasurements?: number;
}

function lrSelfTestLoSep(
  briosa: BriosaClient,
  input: LrSelfTestLoSepInput,
  options?: BriosaCallOptions,
): Promise<LrLoSeparationTestResult>;
```

Both optional values default to `0`; Briosa adds no region constraint.

## lrApdisPerformMcmCalibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration)

```ts
export interface LrApdisPerformMcmCalibrationInput extends LrInstrumentInput {
  readonly nominalGroup: CollectionObjectName;
  readonly useMatteToolingBall?: boolean;
  readonly newCalibrationName?: string;
}

function lrApdisPerformMcmCalibration(
  briosa: BriosaClient,
  input: LrApdisPerformMcmCalibrationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`nominalGroup` must identify an SA Point Group. The optional values default to
`true` and an empty string. This calibration operation is never automatically
replayed.

## lrApdisActivateMcmCalibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration)

```ts
export interface LrApdisActivateMcmCalibrationInput extends LrInstrumentInput {
  readonly calibrationName?: string;
  readonly calibrationId?: number;
}

function lrApdisActivateMcmCalibration(
  briosa: BriosaClient,
  input: LrApdisActivateMcmCalibrationInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

Omitted selectors map to the exact MP defaults `""` and `-1`, requesting SA's
automatic orientation-based lookup. Supplied selectors preserve the MP's native
selection and partial-success behavior. The result is the active MCM name.

## lrApdisGetActiveMcmCalibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration)

```ts
function lrApdisGetActiveMcmCalibration(
  briosa: BriosaClient,
  input: LrInstrumentInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

Exact inch, degree, dB, meter, and kHz units are retained. These functions
retain no Briosa-owned hardware or diagnostic state and are never automatically
replayed.
