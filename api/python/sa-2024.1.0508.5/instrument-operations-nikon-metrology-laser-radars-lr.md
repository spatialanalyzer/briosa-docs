---
title: Instrument Operations / Nikon Metrology Laser Radars LR
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR

[SA 2026.1.0529.7](/api/python/instrument-operations-nikon-metrology-laser-radars-lr) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## LR Hardware Connect {/* #lr-hardware-connect */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect)

```python
async def lr_hardware_connect(
        self,
        instrument: CollectionInstrumentId,
        host: str,
        port: int,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Hardware Disconnect {/* #lr-hardware-disconnect */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect)

```python
async def lr_hardware_disconnect(
        self,
        instrument: CollectionInstrumentId,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Verify Hardware Connection {/* #lr-verify-hardware-connection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection)

```python
async def lr_verify_hardware_connection(
        self,
        instrument: CollectionInstrumentId,
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Set Red Laser Intensity {/* #lr-set-red-laser-intensity */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity)

```python
async def lr_set_red_laser_intensity(
        self,
        instrument: CollectionInstrumentId,
        *,
        intensity: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Get Most Recent SNR Info {/* #lr-get-most-recent-snr-info */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info)

```python
async def lr_get_most_recent_snr_info(
        self,
        instrument: CollectionInstrumentId,
    ) -> LrSnrInfo: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test {/* #lr-self-test */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test)

```python
async def lr_self_test(
        self,
        instrument: CollectionInstrumentId,
    ) -> LrSelfTestResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - Linearization {/* #lr-self-test---linearization */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization)

```python
async def lr_self_test_linearization(
        self,
        instrument: CollectionInstrumentId,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - Flip Test {/* #lr-self-test---flip-test */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test)

```python
async def lr_self_test_flip_test(
        self,
        instrument: CollectionInstrumentId,
    ) -> LrFlipTestResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR Self Test - LO Sep {/* #lr-self-test---lo-sep */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep)

```python
async def lr_self_test_lo_sep(
        self,
        instrument: CollectionInstrumentId,
        *,
        region: int = 0,
        num_range_measurements: int = 0,
    ) -> LrLoSeparationTestResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Perform MCM Calibration {/* #lr-apdis-perform-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration)

```python
async def lr_apdis_perform_mcm_calibration(
        self,
        instrument: CollectionInstrumentId,
        nominal_group: CollectionObjectName,
        *,
        use_matte_tooling_ball: bool = True,
        new_calibration_name: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Activate MCM Calibration {/* #lr-apdis-activate-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration)

```python
async def lr_apdis_activate_mcm_calibration(
        self,
        instrument: CollectionInstrumentId,
        *,
        calibration_name: str = "",
        calibration_id: int = -1,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## LR APDIS Get Active MCM Calibration {/* #lr-apdis-get-active-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration)

```python
async def lr_apdis_get_active_mcm_calibration(
        self,
        instrument: CollectionInstrumentId,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Result Types {/* #result-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_hardware_connect {/* #lr_hardware_connect */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_hardware_disconnect {/* #lr_hardware_disconnect */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_verify_hardware_connection {/* #lr_verify_hardware_connection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_set_red_laser_intensity {/* #lr_set_red_laser_intensity */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_get_most_recent_snr_info {/* #lr_get_most_recent_snr_info */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_self_test {/* #lr_self_test */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_self_test_linearization {/* #lr_self_test_linearization */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_self_test_flip_test {/* #lr_self_test_flip_test */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_self_test_lo_sep {/* #lr_self_test_lo_sep */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_apdis_perform_mcm_calibration {/* #lr_apdis_perform_mcm_calibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_apdis_activate_mcm_calibration {/* #lr_apdis_activate_mcm_calibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## lr_apdis_get_active_mcm_calibration {/* #lr_apdis_get_active_mcm_calibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2024.1.0508.5)
