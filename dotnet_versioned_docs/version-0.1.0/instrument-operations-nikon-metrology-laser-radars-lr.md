---
title: Instrument Operations / Nikon Metrology Laser Radars LR
description: Briosa 0.1.0 .NET APIs for reviewed Nikon Metrology Laser Radars LR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR

## Result Types

```csharp
public sealed record LrSnrInfo(
    double Snr,
    int SizeOfDataArray,
    int PeakValueIndex,
    double PeakValueDb,
    double MeasuredRangeMeters);

public sealed record LrSelfTestResult(
    double ReferenceArmLengthInches,
    double ReferenceArmQuality,
    int MirrorMeasurementCount,
    double MirrorMeasurementRangeMeanInches,
    double MirrorMeasurementRangeStandardDeviationInches,
    double MirrorMeasurementQualityMean,
    double MirrorMeasurementQualityStandardDeviation,
    bool PassedReferenceArmQualityThreshold,
    bool PassedMirrorOffsetDeltaThreshold,
    bool PassedMirrorOffsetStandardDeviationThreshold,
    bool PassedMirrorMeanQualityThreshold,
    bool PassedOverall);

public sealed record LrFlipTestResult(
    double FrontRangeInches,
    double FrontAzimuthDegrees,
    double FrontElevationDegrees,
    double FrontQuality,
    double BackRangeInches,
    double BackAzimuthDegrees,
    double BackElevationDegrees,
    double BackQuality,
    double FrontBackDifferenceRangeInches,
    double FrontBackDifferenceAzimuthDegrees,
    double FrontBackDifferenceElevationDegrees);

public sealed record LrLoSeparationTestResult(
    int PrimaryLoIndex,
    int SecondaryLoIndex,
    int PrimaryLoMeasurementCount,
    double PrimaryLoRangeMeanInches,
    double PrimaryLoRangeStandardDeviationInches,
    double PrimaryLoQualityMean,
    double PrimaryLoQualityStandardDeviation,
    int SecondaryLoMeasurementCount,
    double SecondaryLoRangeMeanInches,
    double SecondaryLoRangeStandardDeviationInches,
    double SecondaryLoQualityMean,
    double SecondaryLoQualityStandardDeviation);
```

## LrHardwareConnectAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect)

```csharp
public Task LrHardwareConnectAsync(
    CollectionInstrumentId instrument,
    string host,
    int port,
    CancellationToken cancellationToken = default);
```

The host and port configure the LR hardware connection owned by local SA, not
the Briosa server listener.

## LrHardwareDisconnectAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect)

```csharp
public Task LrHardwareDisconnectAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

## LrVerifyHardwareConnectionAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection)

```csharp
public Task<bool> LrVerifyHardwareConnectionAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

## LrSetRedLaserIntensityAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity)

```csharp
public Task LrSetRedLaserIntensityAsync(
    CollectionInstrumentId instrument,
    int intensity = 0,
    CancellationToken cancellationToken = default);
```

SA labels the scale `0–100`; Briosa adds no range validation.

## LrGetMostRecentSnrInfoAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info)

```csharp
public Task<LrSnrInfo> LrGetMostRecentSnrInfoAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

## LrSelfTestAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test)

```csharp
public Task<LrSelfTestResult> LrSelfTestAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

## LrSelfTestLinearizationAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization)

```csharp
public Task<double> LrSelfTestLinearizationAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

The result is linearity in kHz.

## LrSelfTestFlipTestAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test)

```csharp
public Task<LrFlipTestResult> LrSelfTestFlipTestAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

## LrSelfTestLoSepAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep)

```csharp
public Task<LrLoSeparationTestResult> LrSelfTestLoSepAsync(
    CollectionInstrumentId instrument,
    int region = 0,
    int numRangeMeasurements = 0,
    CancellationToken cancellationToken = default);
```

Briosa preserves both exact MP defaults and adds no region constraint.

## LrApdisPerformMcmCalibrationAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration)

```csharp
public Task LrApdisPerformMcmCalibrationAsync(
    CollectionInstrumentId instrument,
    CollectionObjectName nominalGroup,
    bool useMatteToolingBall = true,
    string newCalibrationName = "",
    CancellationToken cancellationToken = default);
```

`nominalGroup` must identify an SA Point Group. This calibration operation is
never automatically replayed.

## LrApdisActivateMcmCalibrationAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration)

```csharp
public Task<string> LrApdisActivateMcmCalibrationAsync(
    CollectionInstrumentId instrument,
    string calibrationName = "",
    int calibrationId = -1,
    CancellationToken cancellationToken = default);
```

The exact defaults request SA's automatic orientation-based lookup. Supplying a
name, an ID, or both preserves the MP's native selection and partial-success
behavior. The return value is the active MCM name.

## LrApdisGetActiveMcmCalibrationAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration)

```csharp
public Task<string> LrApdisGetActiveMcmCalibrationAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

Exact inch, degree, dB, meter, and kHz units are retained. These methods retain
no Briosa-owned hardware or diagnostic state and are never automatically
replayed.
