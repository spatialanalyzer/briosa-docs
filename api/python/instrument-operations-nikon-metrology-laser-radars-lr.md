---
title: Instrument Operations / Nikon Metrology Laser Radars LR
description: Next Briosa Python APIs for reviewed Nikon Metrology Laser Radars LR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR

:::note[Next Python Contract]

These coroutines cover all twelve subgroup commands and are not
released support until this documentation is versioned for a published package.

:::

## Result Types

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class LrSnrInfo:
    snr: float
    size_of_data_array: int
    peak_value_index: int
    peak_value_db: float
    measured_range_meters: float

@dataclass(frozen=True, slots=True, kw_only=True)
class LrSelfTestResult:
    reference_arm_length_inches: float
    reference_arm_quality: float
    mirror_measurement_count: int
    mirror_measurement_range_mean_inches: float
    mirror_measurement_range_standard_deviation_inches: float
    mirror_measurement_quality_mean: float
    mirror_measurement_quality_standard_deviation: float
    passed_reference_arm_quality_threshold: bool
    passed_mirror_offset_delta_threshold: bool
    passed_mirror_offset_standard_deviation_threshold: bool
    passed_mirror_mean_quality_threshold: bool
    passed_overall: bool

@dataclass(frozen=True, slots=True, kw_only=True)
class LrFlipTestResult:
    front_range_inches: float
    front_azimuth_degrees: float
    front_elevation_degrees: float
    front_quality: float
    back_range_inches: float
    back_azimuth_degrees: float
    back_elevation_degrees: float
    back_quality: float
    front_back_difference_range_inches: float
    front_back_difference_azimuth_degrees: float
    front_back_difference_elevation_degrees: float

@dataclass(frozen=True, slots=True, kw_only=True)
class LrLoSeparationTestResult:
    primary_lo_index: int
    secondary_lo_index: int
    primary_lo_measurement_count: int
    primary_lo_range_mean_inches: float
    primary_lo_range_standard_deviation_inches: float
    primary_lo_quality_mean: float
    primary_lo_quality_standard_deviation: float
    secondary_lo_measurement_count: int
    secondary_lo_range_mean_inches: float
    secondary_lo_range_standard_deviation_inches: float
    secondary_lo_quality_mean: float
    secondary_lo_quality_standard_deviation: float
```

## lr_hardware_connect

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect)

```python
async def lr_hardware_connect(
    self,
    instrument: CollectionInstrumentId,
    host: str,
    port: int,
) -> None: ...
```

## lr_hardware_disconnect

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect)

```python
async def lr_hardware_disconnect(
    self,
    instrument: CollectionInstrumentId,
) -> None: ...
```

## lr_verify_hardware_connection

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection)

```python
async def lr_verify_hardware_connection(
    self,
    instrument: CollectionInstrumentId,
) -> bool: ...
```

## lr_set_red_laser_intensity

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity)

```python
async def lr_set_red_laser_intensity(
    self,
    instrument: CollectionInstrumentId,
    *,
    intensity: int = 0,
) -> None: ...
```

SA labels the scale `0–100`; Briosa adds no range validation.

## lr_get_most_recent_snr_info

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info)

```python
async def lr_get_most_recent_snr_info(
    self,
    instrument: CollectionInstrumentId,
) -> LrSnrInfo: ...
```

## lr_self_test

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test)

```python
async def lr_self_test(
    self,
    instrument: CollectionInstrumentId,
) -> LrSelfTestResult: ...
```

## lr_self_test_linearization

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization)

```python
async def lr_self_test_linearization(
    self,
    instrument: CollectionInstrumentId,
) -> float: ...
```

The return value is linearity in kHz.

## lr_self_test_flip_test

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test)

```python
async def lr_self_test_flip_test(
    self,
    instrument: CollectionInstrumentId,
) -> LrFlipTestResult: ...
```

## lr_self_test_lo_sep

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep)

```python
async def lr_self_test_lo_sep(
    self,
    instrument: CollectionInstrumentId,
    *,
    region: int = 0,
    num_range_measurements: int = 0,
) -> LrLoSeparationTestResult: ...
```

Briosa preserves both exact MP defaults and adds no region constraint.

## lr_apdis_perform_mcm_calibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration)

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

`nominal_group` must identify an SA Point Group. This calibration operation is
never automatically replayed.

## lr_apdis_activate_mcm_calibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration)

```python
async def lr_apdis_activate_mcm_calibration(
    self,
    instrument: CollectionInstrumentId,
    *,
    calibration_name: str = "",
    calibration_id: int = -1,
) -> str: ...
```

The exact defaults request SA's automatic orientation-based lookup. Supplying a
name, an ID, or both preserves the MP's native selection and partial-success
behavior. The return value is the active MCM name.

## lr_apdis_get_active_mcm_calibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration)

```python
async def lr_apdis_get_active_mcm_calibration(
    self,
    instrument: CollectionInstrumentId,
) -> str: ...
```

Exact inch, degree, dB, meter, and kHz units are retained. These coroutines
retain no Briosa-owned hardware or diagnostic state and are never automatically
replayed.
