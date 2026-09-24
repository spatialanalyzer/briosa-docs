---
title: Instrument Operations / Nikon Metrology Laser Radars LR
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR

[SA 2026.1.0529.7](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## LR Hardware Connect {/* #lr-hardware-connect */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-connect)

`/briosa.InstrumentOperations/LrHardwareConnect` · Operation ID: `instrument_operations.lr_hardware_connect`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `host` | `optional string` | Host | Empty |
| Request | 3 | `port` | `optional int32` | Port | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LrHardwareConnect(LrHardwareConnectRequest) returns (LrHardwareConnectResult);

message LrHardwareConnectRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string host = 2;
  optional int32 port = 3;
}

message LrHardwareConnectResult {
  MpExecutionDetails execution = 1000;
}
```

## LR Hardware Disconnect {/* #lr-hardware-disconnect */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-hardware-disconnect)

`/briosa.InstrumentOperations/LrHardwareDisconnect` · Operation ID: `instrument_operations.lr_hardware_disconnect`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LrHardwareDisconnect(LrHardwareDisconnectRequest) returns (LrHardwareDisconnectResult);

message LrHardwareDisconnectRequest {
  optional CollectionInstrumentId instrument = 1;
}

message LrHardwareDisconnectResult {
  MpExecutionDetails execution = 1000;
}
```

## LR Verify Hardware Connection {/* #lr-verify-hardware-connection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-verify-hardware-connection)

`/briosa.InstrumentOperations/LrVerifyHardwareConnection` · Operation ID: `instrument_operations.lr_verify_hardware_connection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `connected_to_hardware` | `bool` | Connected to Hardware? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LrVerifyHardwareConnection(LrVerifyHardwareConnectionRequest) returns (LrVerifyHardwareConnectionResult);

message LrVerifyHardwareConnectionRequest {
  optional CollectionInstrumentId instrument = 1;
}

message LrVerifyHardwareConnectionResult {
  bool connected_to_hardware = 1;
  MpExecutionDetails execution = 1000;
}
```

## LR Set Red Laser Intensity {/* #lr-set-red-laser-intensity */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-set-red-laser-intensity)

`/briosa.InstrumentOperations/LrSetRedLaserIntensity` · Operation ID: `instrument_operations.lr_set_red_laser_intensity`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `intensity` | `optional int32` | Intensity (0-100) | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LrSetRedLaserIntensity(LrSetRedLaserIntensityRequest) returns (LrSetRedLaserIntensityResult);

message LrSetRedLaserIntensityRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 intensity = 2;
}

message LrSetRedLaserIntensityResult {
  MpExecutionDetails execution = 1000;
}
```

## LR Get Most Recent SNR Info {/* #lr-get-most-recent-snr-info */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-get-most-recent-snr-info)

`/briosa.InstrumentOperations/LrGetMostRecentSnrInfo` · Operation ID: `instrument_operations.lr_get_most_recent_snr_info`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `info` | `optional LrSnrInfo` | Measured Range (m) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LrGetMostRecentSnrInfo(LrGetMostRecentSnrInfoRequest) returns (LrGetMostRecentSnrInfoResult);

message LrGetMostRecentSnrInfoRequest {
  optional CollectionInstrumentId instrument = 1;
}

message LrGetMostRecentSnrInfoResult {
  optional LrSnrInfo info = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `peak_value` | Value in decibels. |
| `measured_range` | Range in meters. |

## LR Self Test {/* #lr-self-test */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test)

`/briosa.InstrumentOperations/LrSelfTest` · Operation ID: `instrument_operations.lr_self_test`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `reference_arm_length` | `double` | Ref Arm Length (Inches) | — |
| Result | 2 | `reference_arm_quality` | `double` | Ref Arm Quality | — |
| Result | 3 | `mirror_measurement_count` | `int32` | Mirror Measurement Count | — |
| Result | 4 | `mirror_measurement_range_mean` | `double` | Mirror Measurement Range - Mean (Inches) | — |
| Result | 5 | `mirror_measurement_range_standard_deviation` | `double` | Mirror Measurement Range - StdDev (Inches) | — |
| Result | 6 | `mirror_measurement_quality_mean` | `double` | Mirror Measurement Quality - Mean | — |
| Result | 7 | `mirror_measurement_quality_standard_deviation` | `double` | Mirror Measurement Quality - StdDev | — |
| Result | 8 | `passed_reference_arm_quality_threshold` | `bool` | Passed Ref Arm Quality Threshold? | — |
| Result | 9 | `passed_mirror_offset_delta_threshold` | `bool` | Passed Mirror Offset Delta Threshold? | — |
| Result | 10 | `passed_mirror_offset_standard_deviation_threshold` | `bool` | Passed Mirror Offset StdDev Threshold? | — |
| Result | 11 | `passed_mirror_mean_quality_threshold` | `bool` | Passed Mirror Mean Quality Threshold? | — |
| Result | 12 | `passed_overall` | `bool` | Passed Overall? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LrSelfTest(LrSelfTestRequest) returns (LrSelfTestResult);

message LrSelfTestRequest {
  optional CollectionInstrumentId instrument = 1;
}

message LrSelfTestResult {
  double reference_arm_length = 1;
  double reference_arm_quality = 2;
  int32 mirror_measurement_count = 3;
  double mirror_measurement_range_mean = 4;
  double mirror_measurement_range_standard_deviation = 5;
  double mirror_measurement_quality_mean = 6;
  double mirror_measurement_quality_standard_deviation = 7;
  bool passed_reference_arm_quality_threshold = 8;
  bool passed_mirror_offset_delta_threshold = 9;
  bool passed_mirror_offset_standard_deviation_threshold = 10;
  bool passed_mirror_mean_quality_threshold = 11;
  bool passed_overall = 12;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `reference_arm_length` | Length in inches. |
| `mirror_measurement_range_mean` | Length in inches. |
| `mirror_measurement_range_standard_deviation` | Length in inches. |

## LR Self Test - Linearization {/* #lr-self-test---linearization */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---linearization)

`/briosa.InstrumentOperations/LrSelfTestLinearization` · Operation ID: `instrument_operations.lr_self_test_linearization`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `linearity` | `double` | Linearity (kHz) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LrSelfTestLinearization(LrSelfTestLinearizationRequest) returns (LrSelfTestLinearizationResult);

message LrSelfTestLinearizationRequest {
  optional CollectionInstrumentId instrument = 1;
}

message LrSelfTestLinearizationResult {
  double linearity = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `linearity` | Frequency in kilohertz. |

## LR Self Test - Flip Test {/* #lr-self-test---flip-test */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---flip-test)

`/briosa.InstrumentOperations/LrSelfTestFlipTest` · Operation ID: `instrument_operations.lr_self_test_flip_test`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `result` | `optional LrFlipTestResult` | Front/Back Difference - Elevation (Degs) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LrSelfTestFlipTest(LrSelfTestFlipTestRequest) returns (LrSelfTestFlipTestResult);

message LrSelfTestFlipTestRequest {
  optional CollectionInstrumentId instrument = 1;
}

message LrSelfTestFlipTestResult {
  optional LrFlipTestResult result = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `front_range` | Length in inches. |
| `front_azimuth` | Angle in degrees. |
| `front_elevation` | Angle in degrees. |
| `back_range` | Length in inches. |
| `back_azimuth` | Angle in degrees. |
| `back_elevation` | Angle in degrees. |
| `front_back_difference_range` | Length in inches. |
| `front_back_difference_azimuth` | Angle in degrees. |
| `front_back_difference_elevation` | Angle in degrees. |

## LR Self Test - LO Sep {/* #lr-self-test---lo-sep */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-self-test---lo-sep)

`/briosa.InstrumentOperations/LrSelfTestLoSep` · Operation ID: `instrument_operations.lr_self_test_lo_sep`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `region` | `optional int32` | Region (1=Region12,2=Region23,3=Region34) | 0 |
| Request | 3 | `num_range_measurements` | `optional int32` | Num Range Measurements | 0 |
| Result | 1 | `result` | `optional LrLoSeparationTestResult` | Secondary LO Measurement Quality - StdDev | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `primary_lo` | Indexing starts at 1. |
| `secondary_lo` | Indexing starts at 1. |
| `primary_lo_range_mean` | Length in inches. |
| `primary_lo_range_standard_deviation` | Length in inches. |
| `secondary_lo_range_mean` | Length in inches. |
| `secondary_lo_range_standard_deviation` | Length in inches. |

## LR APDIS Perform MCM Calibration {/* #lr-apdis-perform-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-perform-mcm-calibration)

`/briosa.InstrumentOperations/LrApdisPerformMcmCalibration` · Operation ID: `instrument_operations.lr_apdis_perform_mcm_calibration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `nominal_group` | `optional CollectionObjectName` | Nominal Group Name | Required |
| Request | 3 | `use_matte_tooling_ball` | `optional bool` | Use Matte Tooling Ball? | true |
| Request | 4 | `new_calibration_name` | `optional string` | New Calibration Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## LR APDIS Activate MCM Calibration {/* #lr-apdis-activate-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-activate-mcm-calibration)

`/briosa.InstrumentOperations/LrApdisActivateMcmCalibration` · Operation ID: `instrument_operations.lr_apdis_activate_mcm_calibration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `calibration_name` | `optional string` | Calibration Name (Optional) | Omitted |
| Request | 3 | `calibration_id` | `optional int32` | Calibration ID (Optional) | Omitted |
| Result | 1 | `active_mcm_name` | `string` | Active MCM Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## LR APDIS Get Active MCM Calibration {/* #lr-apdis-get-active-mcm-calibration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr#lr-apdis-get-active-mcm-calibration)

`/briosa.InstrumentOperations/LrApdisGetActiveMcmCalibration` · Operation ID: `instrument_operations.lr_apdis_get_active_mcm_calibration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `active_mcm_name` | `string` | Active MCM Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
