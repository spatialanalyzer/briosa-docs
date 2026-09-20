---
title: Instrument Operations / Nikon Metrology Laser Radars LR
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR

[SA 2026.1.0529.7](/api/dotnet/instrument-operations-nikon-metrology-laser-radars-lr) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## LR Hardware Connect {/* #lr-hardware-connect */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect)

```csharp
public Task LrHardwareConnectAsync(
        CollectionInstrumentId instrument,
        string host,
        int port,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Hardware Disconnect {/* #lr-hardware-disconnect */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect)

```csharp
public Task LrHardwareDisconnectAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Verify Hardware Connection {/* #lr-verify-hardware-connection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection)

```csharp
public Task<bool> LrVerifyHardwareConnectionAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Set Red Laser Intensity {/* #lr-set-red-laser-intensity */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity)

```csharp
public Task LrSetRedLaserIntensityAsync(
        CollectionInstrumentId instrument,
        int intensity = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Get Most Recent SNR Info {/* #lr-get-most-recent-snr-info */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info)

```csharp
public Task<LrSnrInfo> LrGetMostRecentSnrInfoAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test {/* #lr-self-test */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test)

```csharp
public Task<LrSelfTestResult> LrSelfTestAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - Linearization {/* #lr-self-test---linearization */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization)

```csharp
public Task<double> LrSelfTestLinearizationAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - Flip Test {/* #lr-self-test---flip-test */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test)

```csharp
public Task<LrFlipTestResult> LrSelfTestFlipTestAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - LO Sep {/* #lr-self-test---lo-sep */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep)

```csharp
public Task<LrLoSeparationTestResult> LrSelfTestLoSepAsync(
        CollectionInstrumentId instrument,
        int region = 0,
        int numRangeMeasurements = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Perform MCM Calibration {/* #lr-apdis-perform-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration)

```csharp
public Task LrApdisPerformMcmCalibrationAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName nominalGroup,
        bool useMatteToolingBall = true,
        string newCalibrationName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Activate MCM Calibration {/* #lr-apdis-activate-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration)

```csharp
public Task<string> LrApdisActivateMcmCalibrationAsync(
        CollectionInstrumentId instrument,
        string calibrationName = "",
        int calibrationId = -1,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Get Active MCM Calibration {/* #lr-apdis-get-active-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration)

```csharp
public Task<string> LrApdisGetActiveMcmCalibrationAsync(
        CollectionInstrumentId instrument,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Result Types {/* #result-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrHardwareConnectAsync {/* #lrhardwareconnectasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrHardwareDisconnectAsync {/* #lrhardwaredisconnectasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrVerifyHardwareConnectionAsync {/* #lrverifyhardwareconnectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrSetRedLaserIntensityAsync {/* #lrsetredlaserintensityasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrGetMostRecentSnrInfoAsync {/* #lrgetmostrecentsnrinfoasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrSelfTestAsync {/* #lrselftestasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrSelfTestLinearizationAsync {/* #lrselftestlinearizationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrSelfTestFlipTestAsync {/* #lrselftestfliptestasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrSelfTestLoSepAsync {/* #lrselftestlosepasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrApdisPerformMcmCalibrationAsync {/* #lrapdisperformmcmcalibrationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrApdisActivateMcmCalibrationAsync {/* #lrapdisactivatemcmcalibrationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LrApdisGetActiveMcmCalibrationAsync {/* #lrapdisgetactivemcmcalibrationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2024.1.0508.5)
