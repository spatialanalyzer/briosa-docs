---
title: Instrument Operations / Nikon Metrology Laser Radars LR
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR

[SA 2026.1.0529.7](/api/javascript/instrument-operations-nikon-metrology-laser-radars-lr) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## LR Hardware Connect {/* #lr-hardware-connect */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect)

```ts
export interface LrHardwareConnectInput {
  readonly instrument: CollectionInstrumentId;
  readonly host: string;
  readonly port: number;
}

// Member of BriosaClient
interface BriosaClient {
  lrHardwareConnect(
    input: LrHardwareConnectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Hardware Disconnect {/* #lr-hardware-disconnect */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrHardwareDisconnect(
    input: LrInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Verify Hardware Connection {/* #lr-verify-hardware-connection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrVerifyHardwareConnection(
    input: LrInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<boolean>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Set Red Laser Intensity {/* #lr-set-red-laser-intensity */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity)

```ts
export interface LrSetRedLaserIntensityInput {
  readonly instrument: CollectionInstrumentId;
  readonly intensity?: number;
}

// Member of BriosaClient
interface BriosaClient {
  lrSetRedLaserIntensity(
    input: LrSetRedLaserIntensityInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Get Most Recent SNR Info {/* #lr-get-most-recent-snr-info */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrGetMostRecentSnrInfo(
    input: LrInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<LrSnrInfo>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test {/* #lr-self-test */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrSelfTest(
    input: LrInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<LrSelfTestResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - Linearization {/* #lr-self-test---linearization */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrSelfTestLinearization(
    input: LrInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - Flip Test {/* #lr-self-test---flip-test */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrSelfTestFlipTest(
    input: LrInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<LrFlipTestResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - LO Sep {/* #lr-self-test---lo-sep */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrSelfTestLoSep(
    input: LrSelfTestLoSepInput,
    callOptions?: BriosaCallOptions,
  ): Promise<LrLoSeparationTestResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Perform MCM Calibration {/* #lr-apdis-perform-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrApdisPerformMcmCalibration(
    input: LrApdisPerformMcmCalibrationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Activate MCM Calibration {/* #lr-apdis-activate-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrApdisActivateMcmCalibration(
    input: LrApdisActivateMcmCalibrationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<string>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Get Active MCM Calibration {/* #lr-apdis-get-active-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration)

```ts
// Member of BriosaClient
interface BriosaClient {
  lrApdisGetActiveMcmCalibration(
    input: LrInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<string>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Types {/* #types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrHardwareConnect {/* #lrhardwareconnect */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrHardwareDisconnect {/* #lrhardwaredisconnect */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrVerifyHardwareConnection {/* #lrverifyhardwareconnection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrSetRedLaserIntensity {/* #lrsetredlaserintensity */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrGetMostRecentSnrInfo {/* #lrgetmostrecentsnrinfo */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrSelfTest {/* #lrselftest */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrSelfTestLinearization {/* #lrselftestlinearization */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrSelfTestFlipTest {/* #lrselftestfliptest */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrSelfTestLoSep {/* #lrselftestlosep */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrApdisPerformMcmCalibration {/* #lrapdisperformmcmcalibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrApdisActivateMcmCalibration {/* #lrapdisactivatemcmcalibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lrApdisGetActiveMcmCalibration {/* #lrapdisgetactivemcmcalibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
