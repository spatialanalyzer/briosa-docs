---
title: Instrument Operations / Nikon Metrology Laser Radars LR
description: Released gRPC contracts for reviewed Nikon Metrology Laser Radars LR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs use `briosa.InstrumentOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## Shared Types

```proto
message LrSnrInfo {
  double snr = 1;
  int32 size_of_data_array = 2;
  int32 peak_value_index = 3;
  double peak_value_db = 4;
  double measured_range_meters = 5;
}

message LrSelfTestResult {
  double reference_arm_length_inches = 1;
  double reference_arm_quality = 2;
  int32 mirror_measurement_count = 3;
  double mirror_measurement_range_mean_inches = 4;
  double mirror_measurement_range_standard_deviation_inches = 5;
  double mirror_measurement_quality_mean = 6;
  double mirror_measurement_quality_standard_deviation = 7;
  bool passed_reference_arm_quality_threshold = 8;
  bool passed_mirror_offset_delta_threshold = 9;
  bool passed_mirror_offset_standard_deviation_threshold = 10;
  bool passed_mirror_mean_quality_threshold = 11;
  bool passed_overall = 12;
  MpExecutionDetails execution = 1000;
}

message LrFlipTestResult {
  double front_range_inches = 1;
  double front_azimuth_degrees = 2;
  double front_elevation_degrees = 3;
  double front_quality = 4;
  double back_range_inches = 5;
  double back_azimuth_degrees = 6;
  double back_elevation_degrees = 7;
  double back_quality = 8;
  double front_back_difference_range_inches = 9;
  double front_back_difference_azimuth_degrees = 10;
  double front_back_difference_elevation_degrees = 11;
}

message LrLoSeparationTestResult {
  int32 primary_lo_index = 1;
  int32 secondary_lo_index = 2;
  int32 primary_lo_measurement_count = 3;
  double primary_lo_range_mean_inches = 4;
  double primary_lo_range_standard_deviation_inches = 5;
  double primary_lo_quality_mean = 6;
  double primary_lo_quality_standard_deviation = 7;
  int32 secondary_lo_measurement_count = 8;
  double secondary_lo_range_mean_inches = 9;
  double secondary_lo_range_standard_deviation_inches = 10;
  double secondary_lo_quality_mean = 11;
  double secondary_lo_quality_standard_deviation = 12;
}
```

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| LR Hardware Connect | `LrHardwareConnect` | `instrument_operations.lr_hardware_connect` |
| LR Hardware Disconnect | `LrHardwareDisconnect` | `instrument_operations.lr_hardware_disconnect` |
| LR Verify Hardware Connection | `LrVerifyHardwareConnection` | `instrument_operations.lr_verify_hardware_connection` |
| LR Set Red Laser Intensity | `LrSetRedLaserIntensity` | `instrument_operations.lr_set_red_laser_intensity` |
| LR Get Most Recent SNR Info | `LrGetMostRecentSnrInfo` | `instrument_operations.lr_get_most_recent_snr_info` |
| LR Self Test | `LrSelfTest` | `instrument_operations.lr_self_test` |
| LR Self Test - Linearization | `LrSelfTestLinearization` | `instrument_operations.lr_self_test_linearization` |
| LR Self Test - Flip Test | `LrSelfTestFlipTest` | `instrument_operations.lr_self_test_flip_test` |
| LR Self Test - LO Sep | `LrSelfTestLoSep` | `instrument_operations.lr_self_test_lo_sep` |
| LR APDIS Perform MCM Calibration | `LrApdisPerformMcmCalibration` | `instrument_operations.lr_apdis_perform_mcm_calibration` |
| LR APDIS Activate MCM Calibration | `LrApdisActivateMcmCalibration` | `instrument_operations.lr_apdis_activate_mcm_calibration` |
| LR APDIS Get Active MCM Calibration | `LrApdisGetActiveMcmCalibration` | `instrument_operations.lr_apdis_get_active_mcm_calibration` |

## LR Hardware Connect

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect)

```proto
rpc LrHardwareConnect(LrHardwareConnectRequest) returns (LrHardwareConnectResult);
message LrHardwareConnectRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string host = 2;
  optional int32 port = 3;
}
message LrHardwareConnectResult { MpExecutionDetails execution = 1000; }
```

All fields are required. The host and port identify LR hardware reached by the
local SA instrument interface; they do not configure Briosa's listener.

## LR Hardware Disconnect

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect)

```proto
rpc LrHardwareDisconnect(LrHardwareDisconnectRequest) returns (LrHardwareDisconnectResult);
message LrHardwareDisconnectRequest { optional CollectionInstrumentId instrument = 1; }
message LrHardwareDisconnectResult { MpExecutionDetails execution = 1000; }
```

## LR Verify Hardware Connection

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection)

```proto
rpc LrVerifyHardwareConnection(LrVerifyHardwareConnectionRequest) returns (LrVerifyHardwareConnectionResult);
message LrVerifyHardwareConnectionRequest { optional CollectionInstrumentId instrument = 1; }
message LrVerifyHardwareConnectionResult {
  bool connected_to_hardware = 1;
  MpExecutionDetails execution = 1000;
}
```

## LR Set Red Laser Intensity

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity)

```proto
rpc LrSetRedLaserIntensity(LrSetRedLaserIntensityRequest) returns (LrSetRedLaserIntensityResult);
message LrSetRedLaserIntensityRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 intensity = 2;
}
message LrSetRedLaserIntensityResult { MpExecutionDetails execution = 1000; }
```

Intensity defaults to `0`. SA labels the scale `0–100`; Briosa adds no range
validation.

## LR Get Most Recent SNR Info

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info)

```proto
rpc LrGetMostRecentSnrInfo(LrGetMostRecentSnrInfoRequest) returns (LrGetMostRecentSnrInfoResult);
message LrGetMostRecentSnrInfoRequest { optional CollectionInstrumentId instrument = 1; }
message LrGetMostRecentSnrInfoResult {
  optional LrSnrInfo info = 1;
  MpExecutionDetails execution = 1000;
}
```

SA documents the operation for Nikon APDIS MV400 LR models.

## LR Self Test

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test)

```proto
rpc LrSelfTest(LrSelfTestRequest) returns (LrSelfTestResult);
message LrSelfTestRequest { optional CollectionInstrumentId instrument = 1; }
```

## LR Self Test - Linearization

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization)

```proto
rpc LrSelfTestLinearization(LrSelfTestLinearizationRequest) returns (LrSelfTestLinearizationResult);
message LrSelfTestLinearizationRequest { optional CollectionInstrumentId instrument = 1; }
message LrSelfTestLinearizationResult {
  double linearity_khz = 1;
  MpExecutionDetails execution = 1000;
}
```

## LR Self Test - Flip Test

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test)

```proto
rpc LrSelfTestFlipTest(LrSelfTestFlipTestRequest) returns (LrSelfTestFlipTestResult);
message LrSelfTestFlipTestRequest { optional CollectionInstrumentId instrument = 1; }
message LrSelfTestFlipTestResult {
  optional LrFlipTestResult result = 1;
  MpExecutionDetails execution = 1000;
}
```

## LR Self Test - LO Sep

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep)

```proto
rpc LrSelfTestLoSep(LrSelfTestLoSepRequest) returns (LrSelfTestLoSepResult);
message LrSelfTestLoSepRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 region = 2;
  optional int32 num_range_measurements = 3;
}
message LrSelfTestLoSepResult {
  optional LrLoSeparationTestResult result = 1;
  MpExecutionDetails execution = 1000;
}
```

`region` and `num_range_measurements` both default to `0`. Briosa forwards the
values without adding a region constraint.

## LR APDIS Perform MCM Calibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration)

```proto
rpc LrApdisPerformMcmCalibration(LrApdisPerformMcmCalibrationRequest) returns (LrApdisPerformMcmCalibrationResult);
message LrApdisPerformMcmCalibrationRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName nominal_group = 2;
  optional bool use_matte_tooling_ball = 3;
  optional string new_calibration_name = 4;
}
message LrApdisPerformMcmCalibrationResult {
  MpExecutionDetails execution = 1000;
}
```

`nominal_group` identifies a Point Group. `use_matte_tooling_ball` defaults to
`true`, and `new_calibration_name` defaults to an empty string. The operation is
never automatically replayed.

## LR APDIS Activate MCM Calibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration)

```proto
rpc LrApdisActivateMcmCalibration(LrApdisActivateMcmCalibrationRequest) returns (LrApdisActivateMcmCalibrationResult);
message LrApdisActivateMcmCalibrationRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string calibration_name = 2;
  optional int32 calibration_id = 3;
}
message LrApdisActivateMcmCalibrationResult {
  string active_mcm_name = 1;
  MpExecutionDetails execution = 1000;
}
```

An omitted name maps to the MP default `""`; an omitted ID maps to `-1`. Those
defaults request SA's automatic orientation-based lookup. A supplied name or ID
selects that calibration using SA's MP behavior, including its partial-success
outcome when both selectors disagree.

## LR APDIS Get Active MCM Calibration

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration)

```proto
rpc LrApdisGetActiveMcmCalibration(LrApdisGetActiveMcmCalibrationRequest) returns (LrApdisGetActiveMcmCalibrationResult);
message LrApdisGetActiveMcmCalibrationRequest {
  optional CollectionInstrumentId instrument = 1;
}
message LrApdisGetActiveMcmCalibrationResult {
  string active_mcm_name = 1;
  MpExecutionDetails execution = 1000;
}
```

The result names preserve exact inch, degree, dB, meter, and kHz units. These
operations retain no Briosa-owned hardware or diagnostic state.
