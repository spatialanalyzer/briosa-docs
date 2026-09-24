---
title: Instrument Operations
description: Unreleased grpc 0.8.0-dev.1 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations

[SA 2026.1.0529.7](/api/grpc/instrument-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0-dev.1** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Get Last Instrument Index {/* #get-last-instrument-index */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index)

`/briosa.InstrumentOperations/GetLastInstrumentIndex` · Operation ID: `instrument_operations.get_last_instrument_index`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `instrument_index` | `int32` | Instrument ID | — |
| Result | 2 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetLastInstrumentIndex(GetLastInstrumentIndexRequest) returns (GetLastInstrumentIndexResult);

message GetLastInstrumentIndexRequest {}

message GetLastInstrumentIndexResult {
  int32 instrument_index = 1;
  optional CollectionInstrumentId instrument = 2;
  MpExecutionDetails execution = 1000;
}
```

## Rename Instrument {/* #rename-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#rename-instrument)

`/briosa.InstrumentOperations/RenameInstrument` · Operation ID: `instrument_operations.rename_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `new_name` | `string` | New Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenameInstrument(RenameInstrumentRequest) returns (RenameInstrumentResult);

message RenameInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  string new_name = 2;
}

message RenameInstrumentResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument ID from Name {/* #get-instrument-id-from-name */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name)

`/briosa.InstrumentOperations/GetInstrumentIdFromName` · Operation ID: `instrument_operations.get_instrument_id_from_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | Name | Empty |
| Result | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentIdFromName(GetInstrumentIdFromNameRequest) returns (GetInstrumentIdFromNameResult);

message GetInstrumentIdFromNameRequest {
  string name = 1;
}

message GetInstrumentIdFromNameResult {
  optional CollectionInstrumentId instrument = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Model {/* #get-instrument-model */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-model)

`/briosa.InstrumentOperations/GetInstrumentModel` · Operation ID: `instrument_operations.get_instrument_model`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `name` | `string` | Name | — |
| Result | 2 | `model` | `string` | Model | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentModel(GetInstrumentModelRequest) returns (GetInstrumentModelResult);

message GetInstrumentModelRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetInstrumentModelResult {
  string name = 1;
  string model = 2;
  MpExecutionDetails execution = 1000;
}
```

## Move Instrument to Another Collection {/* #move-instrument-to-another-collection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection)

`/briosa.InstrumentOperations/MoveInstrumentToAnotherCollection` · Operation ID: `instrument_operations.move_instrument_to_another_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `collection_name` | `optional CollectionName` | Collection Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MoveInstrumentToAnotherCollection(MoveInstrumentToAnotherCollectionRequest) returns (MoveInstrumentToAnotherCollectionResult);

message MoveInstrumentToAnotherCollectionRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionName collection_name = 2;
}

message MoveInstrumentToAnotherCollectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Save Instrument Configuration {/* #save-instrument-configuration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration)

`/briosa.InstrumentOperations/SaveInstrumentConfiguration` · Operation ID: `instrument_operations.save_instrument_configuration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `configuration_file` | `optional FileReference` | Configuration File | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SaveInstrumentConfiguration(SaveInstrumentConfigurationRequest) returns (SaveInstrumentConfigurationResult);

message SaveInstrumentConfigurationRequest {
  optional CollectionInstrumentId instrument = 1;
  optional FileReference configuration_file = 2;
}

message SaveInstrumentConfigurationResult {
  MpExecutionDetails execution = 1000;
}
```

## Load Instrument Configuration {/* #load-instrument-configuration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration)

`/briosa.InstrumentOperations/LoadInstrumentConfiguration` · Operation ID: `instrument_operations.load_instrument_configuration`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `configuration_file` | `optional FileReference` | Configuration File | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LoadInstrumentConfiguration(LoadInstrumentConfigurationRequest) returns (LoadInstrumentConfigurationResult);

message LoadInstrumentConfigurationRequest {
  optional CollectionInstrumentId instrument = 1;
  optional FileReference configuration_file = 2;
}

message LoadInstrumentConfigurationResult {
  MpExecutionDetails execution = 1000;
}
```

## Export Instrument History to XML File {/* #export-instrument-history-to-xml-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file)

`/briosa.InstrumentOperations/ExportInstrumentHistoryToXmlFile` · Operation ID: `instrument_operations.export_instrument_history_to_xml_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `file_path` | `optional FileReference` | File Path | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportInstrumentHistoryToXmlFile(ExportInstrumentHistoryToXmlFileRequest) returns (ExportInstrumentHistoryToXmlFileResult);

message ExportInstrumentHistoryToXmlFileRequest {
  optional CollectionInstrumentId instrument = 1;
  optional FileReference file_path = 2;
}

message ExportInstrumentHistoryToXmlFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Point At Target {/* #point-at-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#point-at-target)

`/briosa.InstrumentOperations/PointAtTarget` · Operation ID: `instrument_operations.point_at_target`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `target_id` | `optional PointName` | Target ID | Required |
| Request | 3 | `html_prompt_file` | `optional FileReference` | HTML Prompt File (optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc PointAtTarget(PointAtTargetRequest) returns (PointAtTargetResult);

message PointAtTargetRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName target_id = 2;
  optional FileReference html_prompt_file = 3;
}

message PointAtTargetResult {
  MpExecutionDetails execution = 1000;
}
```

## Measure Single Point Here {/* #measure-single-point-here */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-single-point-here)

`/briosa.InstrumentOperations/MeasureSinglePointHere` · Operation ID: `instrument_operations.measure_single_point_here`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `target_id` | `optional PointName` | Target ID | Required |
| Request | 3 | `measure_immediately` | `optional bool` | Measure Immediately | false |
| Request | 4 | `html_prompt_file` | `optional FileReference` | HTML Prompt File (optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MeasureSinglePointHere(MeasureSinglePointHereRequest) returns (MeasureSinglePointHereResult);

message MeasureSinglePointHereRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName target_id = 2;
  optional bool measure_immediately = 3;
  optional FileReference html_prompt_file = 4;
}

message MeasureSinglePointHereResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Current Instrument Position Update {/* #get-current-instrument-position-update */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update)

`/briosa.InstrumentOperations/GetCurrentInstrumentPositionUpdate` · Operation ID: `instrument_operations.get_current_instrument_position_update`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `reporting_frame` | `optional InstrumentPositionReportingFrame` | Reporting Frame | Instrument Base |
| Request | 3 | `polar_coordinates` | `optional bool` | Polar Coordinates? | false |
| Result | 1 | `x_or_r` | `double` | X / R | — |
| Result | 2 | `y_or_theta` | `double` | Y / Theta (Degrees) | — |
| Result | 3 | `z_or_phi` | `double` | Z / Phi (Degrees) | — |
| Result | 4 | `time_since_update` | `double` | Time Since Update (sec) | — |
| Result | 5 | `timestamp` | `string` | Timestamp (Approximate) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetCurrentInstrumentPositionUpdate(GetCurrentInstrumentPositionUpdateRequest) returns (GetCurrentInstrumentPositionUpdateResult);

message GetCurrentInstrumentPositionUpdateRequest {
  optional CollectionInstrumentId instrument = 1;
  optional InstrumentPositionReportingFrame reporting_frame = 2;
  optional bool polar_coordinates = 3;
}

message GetCurrentInstrumentPositionUpdateResult {
  double x_or_r = 1;
  double y_or_theta = 2;
  double z_or_phi = 3;
  double time_since_update = 4;
  string timestamp = 5;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `y_or_theta` | Angle in degrees. |
| `z_or_phi` | Angle in degrees. |
| `time_since_update` | Time in seconds. |
| `timestamp` | MP qualifier: Approximate. |

## 'Build' Target {/* #build-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#build-target)

`/briosa.InstrumentOperations/BuildTarget` · Operation ID: `instrument_operations.build_target`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `output_target_name` | `optional PointName` | Output Target Name | Required |
| Request | 3 | `nominal_point` | `optional PointName` | Nominal Point | Required |
| Request | 4 | `tolerance` | `optional ToleranceVectorOptions` | Tolerance | Required |
| Request | 5 | `html_prompt_file` | `optional FileReference` | HTML Prompt File (optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc BuildTarget(BuildTargetRequest) returns (BuildTargetResult);

message BuildTargetRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName output_target_name = 2;
  optional PointName nominal_point = 3;
  optional ToleranceVectorOptions tolerance = 4;
  optional FileReference html_prompt_file = 5;
}

message BuildTargetResult {
  MpExecutionDetails execution = 1000;
}
```

## Measure Existing Single Point {/* #measure-existing-single-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point)

`/briosa.InstrumentOperations/MeasureExistingSinglePoint` · Operation ID: `instrument_operations.measure_existing_single_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `existing_target_id` | `optional PointName` | Existing Target ID | Required |
| Request | 3 | `group_name_for_new_point` | `optional CollectionObjectName` | Group name for new point | Required |
| Request | 4 | `measure_immediately` | `optional bool` | Measure Immediately | false |
| Request | 5 | `html_prompt_file` | `optional FileReference` | HTML Prompt File (optional) | Omitted |
| Result | 1 | `resulting_point_name` | `optional PointName` | Resulting Point Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MeasureExistingSinglePoint(MeasureExistingSinglePointRequest) returns (MeasureExistingSinglePointResult);

message MeasureExistingSinglePointRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName existing_target_id = 2;
  optional CollectionObjectName group_name_for_new_point = 3;
  optional bool measure_immediately = 4;
  optional FileReference html_prompt_file = 5;
}

message MeasureExistingSinglePointResult {
  optional PointName resulting_point_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Measure Existing Single Point (Manual Guide) {/* #measure-existing-single-point-manual-guide */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide)

`/briosa.InstrumentOperations/MeasureExistingSinglePointManualGuide` · Operation ID: `instrument_operations.measure_existing_single_point_manual_guide`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `existing_target_id` | `optional PointName` | Existing Target ID | Required |
| Request | 3 | `group_name_for_new_point` | `optional CollectionObjectName` | Group name for new point | Required |
| Request | 4 | `measure_immediately` | `optional bool` | Measure Immediately | false |
| Request | 5 | `html_prompt_file` | `optional FileReference` | HTML Prompt File (optional) | Omitted |
| Result | 1 | `resulting_point_name` | `optional PointName` | Resulting Point Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MeasureExistingSinglePointManualGuide(MeasureExistingSinglePointManualGuideRequest) returns (MeasureExistingSinglePointManualGuideResult);

message MeasureExistingSinglePointManualGuideRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName existing_target_id = 2;
  optional CollectionObjectName group_name_for_new_point = 3;
  optional bool measure_immediately = 4;
  optional FileReference html_prompt_file = 5;
}

message MeasureExistingSinglePointManualGuideResult {
  optional PointName resulting_point_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Measure Existing Single Point and Compare {/* #measure-existing-single-point-and-compare */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare)

`/briosa.InstrumentOperations/MeasureExistingSinglePointAndCompare` · Operation ID: `instrument_operations.measure_existing_single_point_and_compare`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `existing_target_id` | `optional PointName` | Existing Target ID | Required |
| Request | 3 | `group_name_for_new_point` | `optional CollectionObjectName` | Group name for new point | Required |
| Request | 4 | `measure_immediately` | `optional bool` | Measure Immediately | false |
| Request | 5 | `html_prompt_file` | `optional FileReference` | HTML Prompt File (optional) | Omitted |
| Request | 6 | `tolerance` | `optional double` | Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `vector_representation` | `optional Vector` | Vector Representation | — |
| Result | 2 | `x_value` | `double` | X Value | — |
| Result | 3 | `y_value` | `double` | Y Value | — |
| Result | 4 | `z_value` | `double` | Z Value | — |
| Result | 5 | `magnitude` | `double` | Magnitude | — |
| Result | 6 | `resulting_point_name` | `optional PointName` | Resulting Point Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MeasureExistingSinglePointAndCompare(MeasureExistingSinglePointAndCompareRequest) returns (MeasureExistingSinglePointAndCompareResult);

message MeasureExistingSinglePointAndCompareRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName existing_target_id = 2;
  optional CollectionObjectName group_name_for_new_point = 3;
  optional bool measure_immediately = 4;
  optional FileReference html_prompt_file = 5;
  optional double tolerance = 6;
}

message MeasureExistingSinglePointAndCompareResult {
  optional Vector vector_representation = 1;
  double x_value = 2;
  double y_value = 3;
  double z_value = 4;
  double magnitude = 5;
  optional PointName resulting_point_name = 6;
  MpExecutionDetails execution = 1000;
}
```

## Set Probe Offset Frame Online (Measure Raw Frame) {/* #set-probe-offset-frame-online-measure-raw-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame)

`/briosa.InstrumentOperations/SetProbeOffsetFrameOnline` · Operation ID: `instrument_operations.set_probe_offset_frame_online`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `probe_name` | `string` | Probe Name | Empty |
| Request | 3 | `face_id` | `optional int32` | Face ID  | 0 |
| Request | 4 | `measure_profile_name` | `optional string` | Measure Profile Name | Empty |
| Request | 5 | `timeout_seconds` | `optional double` | Timeout in Seconds | 15.000000 |
| Request | 6 | `offset_frame` | `optional CollectionObjectName` | Offset Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetProbeOffsetFrameOnline(SetProbeOffsetFrameOnlineRequest) returns (SetProbeOffsetFrameOnlineResult);

message SetProbeOffsetFrameOnlineRequest {
  optional CollectionInstrumentId instrument = 1;
  string probe_name = 2;
  optional int32 face_id = 3;
  optional string measure_profile_name = 4;
  optional double timeout_seconds = 5;
  optional CollectionObjectName offset_frame = 6;
}

message SetProbeOffsetFrameOnlineResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Probe Offset Frame Offline (Select Previously Measured Frame) {/* #set-probe-offset-frame-offline-select-previously-measured-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame)

`/briosa.InstrumentOperations/SetProbeOffsetFrameOffline` · Operation ID: `instrument_operations.set_probe_offset_frame_offline`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `probe_name` | `string` | Probe Name | Empty |
| Request | 3 | `face_id` | `optional int32` | Face ID  | 0 |
| Request | 4 | `raw_measured_frame` | `optional CollectionObjectName` | Raw Measured Frame | Required |
| Request | 5 | `offset_frame` | `optional CollectionObjectName` | Offset Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetProbeOffsetFrameOffline(SetProbeOffsetFrameOfflineRequest) returns (SetProbeOffsetFrameOfflineResult);

message SetProbeOffsetFrameOfflineRequest {
  optional CollectionInstrumentId instrument = 1;
  string probe_name = 2;
  optional int32 face_id = 3;
  optional CollectionObjectName raw_measured_frame = 4;
  optional CollectionObjectName offset_frame = 5;
}

message SetProbeOffsetFrameOfflineResult {
  MpExecutionDetails execution = 1000;
}
```

## Stop Active Measurement Mode {/* #stop-active-measurement-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode)

`/briosa.InstrumentOperations/StopActiveMeasurementMode` · Operation ID: `instrument_operations.stop_active_measurement_mode`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StopActiveMeasurementMode(StopActiveMeasurementModeRequest) returns (StopActiveMeasurementModeResult);

message StopActiveMeasurementModeRequest {
  optional CollectionInstrumentId instrument = 1;
}

message StopActiveMeasurementModeResult {
  MpExecutionDetails execution = 1000;
}
```

## Enable/Disable Frame Set Scan Mode (All Instruments) {/* #enabledisable-frame-set-scan-mode-all-instruments */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments)

`/briosa.InstrumentOperations/EnableDisableFrameSetScanModeAllInstruments` · Operation ID: `instrument_operations.enable_disable_frame_set_scan_mode_all_instruments`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `enable_frame_set_scan_mode` | `optional bool` | Enable Frame Set Scan Mode | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EnableDisableFrameSetScanModeAllInstruments(EnableDisableFrameSetScanModeAllInstrumentsRequest) returns (EnableDisableFrameSetScanModeAllInstrumentsResult);

message EnableDisableFrameSetScanModeAllInstrumentsRequest {
  optional bool enable_frame_set_scan_mode = 1;
}

message EnableDisableFrameSetScanModeAllInstrumentsResult {
  MpExecutionDetails execution = 1000;
}
```

## Enable/Disable Frame Set Scan Mode (By Instrument) {/* #enabledisable-frame-set-scan-mode-by-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument)

`/briosa.InstrumentOperations/EnableDisableFrameSetScanModeByInstrument` · Operation ID: `instrument_operations.enable_disable_frame_set_scan_mode_by_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `enable_frame_set_scan_mode` | `optional bool` | Enable Frame Set Scan Mode | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EnableDisableFrameSetScanModeByInstrument(EnableDisableFrameSetScanModeByInstrumentRequest) returns (EnableDisableFrameSetScanModeByInstrumentResult);

message EnableDisableFrameSetScanModeByInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool enable_frame_set_scan_mode = 2;
}

message EnableDisableFrameSetScanModeByInstrumentResult {
  MpExecutionDetails execution = 1000;
}
```

## Enable/Disable Point Set Scan Mode {/* #enabledisable-point-set-scan-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode)

`/briosa.InstrumentOperations/EnableDisablePointSetScanMode` · Operation ID: `instrument_operations.enable_disable_point_set_scan_mode`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `enable_point_set_scan_mode` | `optional bool` | Enable Point Set Scan Mode | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EnableDisablePointSetScanMode(EnableDisablePointSetScanModeRequest) returns (EnableDisablePointSetScanModeResult);

message EnableDisablePointSetScanModeRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool enable_point_set_scan_mode = 2;
}

message EnableDisablePointSetScanModeResult {
  MpExecutionDetails execution = 1000;
}
```

## Add New Instrument {/* #add-new-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#add-new-instrument)

`/briosa.InstrumentOperations/AddNewInstrument` · Operation ID: `instrument_operations.add_new_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_type` | `optional InstrumentTypeName` | Instrument Type | Required |
| Result | 1 | `instrument_added` | `optional CollectionInstrumentId` | Instrument Added (result) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddNewInstrument(AddNewInstrumentRequest) returns (AddNewInstrumentResult);

message AddNewInstrumentRequest {
  optional InstrumentTypeName instrument_type = 1;
}

message AddNewInstrumentResult {
  optional CollectionInstrumentId instrument_added = 1;
  MpExecutionDetails execution = 1000;
}
```

## Delete Instrument {/* #delete-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-instrument)

`/briosa.InstrumentOperations/DeleteInstrument` · Operation ID: `instrument_operations.delete_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `prompt_user_to_confirm` | `optional bool` | Prompt user to confirm? | false |
| Request | 3 | `keep_resulting_points` | `optional bool` | Keep resulting points? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteInstrument(DeleteInstrumentRequest) returns (DeleteInstrumentResult);

message DeleteInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool prompt_user_to_confirm = 2;
  optional bool keep_resulting_points = 3;
}

message DeleteInstrumentResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Measurements {/* #delete-measurements */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-measurements)

`/briosa.InstrumentOperations/DeleteMeasurements` · Operation ID: `instrument_operations.delete_measurements`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 3 | `delete_point_if_no_measurements_remain` | `optional bool` | Delete point if no measurements remain? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteMeasurements(DeleteMeasurementsRequest) returns (DeleteMeasurementsResult);

message DeleteMeasurementsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName point_name = 2;
  optional bool delete_point_if_no_measurements_remain = 3;
}

message DeleteMeasurementsResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Measurement Observation {/* #delete-measurement-observation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation)

`/briosa.InstrumentOperations/DeleteMeasurementObservation` · Operation ID: `instrument_operations.delete_measurement_observation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 2 | `observation_index` | `optional int32` | Observation index | 0 |
| Request | 3 | `delete_point_if_no_measurements_remain` | `optional bool` | Delete point if no measurements remain? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteMeasurementObservation(DeleteMeasurementObservationRequest) returns (DeleteMeasurementObservationResult);

message DeleteMeasurementObservationRequest {
  optional PointName point_name = 1;
  optional int32 observation_index = 2;
  optional bool delete_point_if_no_measurements_remain = 3;
}

message DeleteMeasurementObservationResult {
  MpExecutionDetails execution = 1000;
}
```

## Move Measurement Observation {/* #move-measurement-observation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-measurement-observation)

`/briosa.InstrumentOperations/MoveMeasurementObservation` · Operation ID: `instrument_operations.move_measurement_observation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_point_name` | `optional PointName` | Source Point Name | Required |
| Request | 2 | `observation_index` | `optional int32` | Observation index | 0 |
| Request | 3 | `delete_point_if_no_measurements_remain` | `optional bool` | Delete point if no measurements remain? | false |
| Request | 4 | `destination_point_name` | `optional PointName` | Destination Point Name | Required |
| Request | 5 | `force_observation_active` | `optional bool` | Force observation to be active? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MoveMeasurementObservation(MoveMeasurementObservationRequest) returns (MoveMeasurementObservationResult);

message MoveMeasurementObservationRequest {
  optional PointName source_point_name = 1;
  optional int32 observation_index = 2;
  optional bool delete_point_if_no_measurements_remain = 3;
  optional PointName destination_point_name = 4;
  optional bool force_observation_active = 5;
}

message MoveMeasurementObservationResult {
  MpExecutionDetails execution = 1000;
}
```

## Initiate Servo-Guide {/* #initiate-servo-guide */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide)

`/briosa.InstrumentOperations/InitiateServoGuide` · Operation ID: `instrument_operations.initiate_servo_guide`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `nominal_points` | `repeated PointName` | Nominal Points | Required |
| Request | 3 | `group_name_suffix` | `optional string` | Group name suffix | Empty |
| Request | 4 | `target_name_suffix` | `optional string` | Target name suffix | Empty |
| Request | 5 | `tolerance` | `optional double` | Tolerance | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc InitiateServoGuide(InitiateServoGuideRequest) returns (InitiateServoGuideResult);

message InitiateServoGuideRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated PointName nominal_points = 2;
  optional string group_name_suffix = 3;
  optional string target_name_suffix = 4;
  optional double tolerance = 5;
}

message InitiateServoGuideResult {
  MpExecutionDetails execution = 1000;
}
```

## Start Theodolite Interface {/* #start-theodolite-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface)

`/briosa.InstrumentOperations/StartTheodoliteInterface` · Operation ID: `instrument_operations.start_theodolite_interface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `theodolite_type` | `optional string` | Theodolite Type (Must match Theodolite Manager Add Instrument type) | Empty |
| Request | 3 | `comm_port` | `optional int32` | Comm Port | 0 |
| Request | 4 | `device_ip_address` | `optional string` | Device IP Address (optional) | Omitted |
| Request | 5 | `simulation` | `optional bool` | Simulation | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StartTheodoliteInterface(StartTheodoliteInterfaceRequest) returns (StartTheodoliteInterfaceResult);

message StartTheodoliteInterfaceRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string theodolite_type = 2;
  optional int32 comm_port = 3;
  optional string device_ip_address = 4;
  optional bool simulation = 5;
}

message StartTheodoliteInterfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Start Instrument Interface {/* #start-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-instrument-interface)

`/briosa.InstrumentOperations/StartInstrumentInterface` · Operation ID: `instrument_operations.start_instrument_interface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `initialize_at_startup` | `optional bool` | Initialize at Startup | false |
| Request | 3 | `device_ip_address` | `optional string` | Device IP Address (optional) | Omitted |
| Request | 4 | `interface_type` | `optional int32` | Interface Type (0=default) | 0 |
| Request | 5 | `run_in_simulation` | `optional bool` | Run in Simulation | false |
| Request | 6 | `allow_start_without_initialization_requirements` | `optional bool` | Allow Start w/o Init Requirements | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StartInstrumentInterface(StartInstrumentInterfaceRequest) returns (StartInstrumentInterfaceResult);

message StartInstrumentInterfaceRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool initialize_at_startup = 2;
  optional string device_ip_address = 3;
  optional int32 interface_type = 4;
  optional bool run_in_simulation = 5;
  optional bool allow_start_without_initialization_requirements = 6;
}

message StartInstrumentInterfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Stop Instrument Interface {/* #stop-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface)

`/briosa.InstrumentOperations/StopInstrumentInterface` · Operation ID: `instrument_operations.stop_instrument_interface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StopInstrumentInterface(StopInstrumentInterfaceRequest) returns (StopInstrumentInterfaceResult);

message StopInstrumentInterfaceRequest {
  optional CollectionInstrumentId instrument = 1;
}

message StopInstrumentInterfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Activate/Deactivate Instrument Toolbar {/* #activatedeactivate-instrument-toolbar */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar)

`/briosa.InstrumentOperations/ActivateDeactivateInstrumentToolbar` · Operation ID: `instrument_operations.activate_deactivate_instrument_toolbar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `deactivate_toolbar` | `optional bool` | Deactivate Toolbar? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ActivateDeactivateInstrumentToolbar(ActivateDeactivateInstrumentToolbarRequest) returns (ActivateDeactivateInstrumentToolbarResult);

message ActivateDeactivateInstrumentToolbarRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool deactivate_toolbar = 2;
}

message ActivateDeactivateInstrumentToolbarResult {
  MpExecutionDetails execution = 1000;
}
```

## Verify Instrument Connection {/* #verify-instrument-connection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection)

`/briosa.InstrumentOperations/VerifyInstrumentConnection` · Operation ID: `instrument_operations.verify_instrument_connection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1 | `connected` | `optional bool` | Connected? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc VerifyInstrumentConnection(VerifyInstrumentConnectionRequest) returns (VerifyInstrumentConnectionResult);

message VerifyInstrumentConnectionRequest {
  optional CollectionInstrumentId instrument = 1;
}

message VerifyInstrumentConnectionResult {
  optional bool connected = 1;
  MpExecutionDetails execution = 1000;
}
```

## Configure and Measure {/* #configure-and-measure */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#configure-and-measure)

`/briosa.InstrumentOperations/ConfigureAndMeasure` · Operation ID: `instrument_operations.configure_and_measure`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `target` | `optional PointName` | Target Name | Required |
| Request | 3 | `measurement_mode` | `optional string` | Measurement Mode | Empty |
| Request | 4 | `measure_immediately` | `optional bool` | Measure Immediately | false |
| Request | 5 | `wait_for_completion` | `optional bool` | Wait for Completion | true |
| Request | 6 | `timeout_seconds` | `optional double` | Timeout in Seconds | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConfigureAndMeasure(ConfigureAndMeasureRequest) returns (ConfigureAndMeasureResult);

message ConfigureAndMeasureRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName target = 2;
  optional string measurement_mode = 3;
  optional bool measure_immediately = 4;
  optional bool wait_for_completion = 5;
  optional double timeout_seconds = 6;
}

message ConfigureAndMeasureResult {
  MpExecutionDetails execution = 1000;
}
```

## Measure {/* #measure */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure)

`/briosa.InstrumentOperations/Measure` · Operation ID: `instrument_operations.measure`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc Measure(MeasureRequest) returns (MeasureResult);

message MeasureRequest {
  optional CollectionInstrumentId instrument = 1;
}

message MeasureResult {
  MpExecutionDetails execution = 1000;
}
```

## Set XYZ Reference Frame Instrument Base Anchor Frame {/* #set-xyz-reference-frame-instrument-base-anchor-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame)

`/briosa.InstrumentOperations/SetXyzReferenceFrameInstrumentBaseAnchorFrame` · Operation ID: `instrument_operations.set_xyz_reference_frame_instrument_base_anchor_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `anchor_frame` | `optional CollectionObjectName` | Anchor Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetXyzReferenceFrameInstrumentBaseAnchorFrame(SetXyzReferenceFrameInstrumentBaseAnchorFrameRequest) returns (SetXyzReferenceFrameInstrumentBaseAnchorFrameResult);

message SetXyzReferenceFrameInstrumentBaseAnchorFrameRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName anchor_frame = 2;
}

message SetXyzReferenceFrameInstrumentBaseAnchorFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Dock Instrument Interface {/* #dock-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface)

`/briosa.InstrumentOperations/DockInstrumentInterface` · Operation ID: `instrument_operations.dock_instrument_interface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `dock_interface` | `optional bool` | Dock Interface? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DockInstrumentInterface(DockInstrumentInterfaceRequest) returns (DockInstrumentInterfaceResult);

message DockInstrumentInterfaceRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool dock_interface = 2;
}

message DockInstrumentInterfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Locate Instrument (Ref. Tie-In) {/* #locate-instrument-ref-tie-in */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in)

`/briosa.InstrumentOperations/LocateInstrumentRefTieIn` · Operation ID: `instrument_operations.locate_instrument_ref_tie_in`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to Locate | Required |
| Request | 2 | `reference_group` | `optional CollectionObjectName` | Reference Group Name | Required |
| Request | 3 | `actuals_group` | `optional CollectionObjectName` | Actuals Group Name (to be measured) | Required |
| Request | 4 | `tolerance` | `optional double` | Tolerance | 0.000000 |
| Request | 5 | `auto_survey` | `optional bool` | Auto Survey | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LocateInstrumentRefTieIn(LocateInstrumentRefTieInRequest) returns (LocateInstrumentRefTieInResult);

message LocateInstrumentRefTieInRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional double tolerance = 4;
  optional bool auto_survey = 5;
}

message LocateInstrumentRefTieInResult {
  MpExecutionDetails execution = 1000;
}
```

## Locate Instrument (Group to Surface Quick Fit) {/* #locate-instrument-group-to-surface-quick-fit */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit)

`/briosa.InstrumentOperations/LocateInstrumentGroupToSurfaceQuickFit` · Operation ID: `instrument_operations.locate_instrument_group_to_surface_quick_fit`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to Locate | Required |
| Request | 2 | `measured_group` | `optional CollectionObjectName` | Name of Measured Group | Required |
| Request | 3 | `surface_points_group` | `optional CollectionObjectName` | Name of Group containing Surface Pts | Required |
| Request | 4 | `surface_to_fit` | `optional CollectionObjectName` | Surface to fit | Required |
| Request | 5 | `other_objects_to_transform` | `repeated CollectionObjectName` | Other Objects to Transform | Required |
| Request | 6 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0.000000 |
| Request | 7 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `rms_error` | `optional double` | RMS Error | — |
| Result | 2 | `maximum_absolute_error` | `optional double` | Maximum Absolute Error | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LocateInstrumentGroupToSurfaceQuickFit(LocateInstrumentGroupToSurfaceQuickFitRequest) returns (LocateInstrumentGroupToSurfaceQuickFitResult);

message LocateInstrumentGroupToSurfaceQuickFitRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName measured_group = 2;
  optional CollectionObjectName surface_points_group = 3;
  optional CollectionObjectName surface_to_fit = 4;
  repeated CollectionObjectName other_objects_to_transform = 5;
  optional double rms_tolerance = 6;
  optional double maximum_absolute_tolerance = 7;
}

message LocateInstrumentGroupToSurfaceQuickFitResult {
  optional double rms_error = 1;
  optional double maximum_absolute_error = 2;
  MpExecutionDetails execution = 1000;
}
```

## Multi Measurement Initiate {/* #multi-measurement-initiate */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate)

`/briosa.InstrumentOperations/MultiMeasurementInitiate` · Operation ID: `instrument_operations.multi_measurement_initiate`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | `repeated CollectionInstrumentId` | Instruments | Required |
| Request | 2 | `measurement_mode` | `optional string` | Measurement Mode | Empty |
| Request | 3 | `wait_for_completion` | `optional bool` | Wait for Completion | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MultiMeasurementInitiate(MultiMeasurementInitiateRequest) returns (MultiMeasurementInitiateResult);

message MultiMeasurementInitiateRequest {
  repeated CollectionInstrumentId instruments = 1;
  optional string measurement_mode = 2;
  optional bool wait_for_completion = 3;
}

message MultiMeasurementInitiateResult {
  MpExecutionDetails execution = 1000;
}
```

## Multi Measurement Stop {/* #multi-measurement-stop */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop)

`/briosa.InstrumentOperations/MultiMeasurementStop` · Operation ID: `instrument_operations.multi_measurement_stop`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | `repeated CollectionInstrumentId` | Instruments | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MultiMeasurementStop(MultiMeasurementStopRequest) returns (MultiMeasurementStopResult);

message MultiMeasurementStopRequest {
  repeated CollectionInstrumentId instruments = 1;
}

message MultiMeasurementStopResult {
  MpExecutionDetails execution = 1000;
}
```

## Align Laser Projector {/* #align-laser-projector */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-laser-projector)

`/briosa.InstrumentOperations/AlignLaserProjector` · Operation ID: `instrument_operations.align_laser_projector`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `group` | `optional CollectionObjectName` | Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AlignLaserProjector(AlignLaserProjectorRequest) returns (AlignLaserProjectorResult);

message AlignLaserProjectorRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName group = 2;
}

message AlignLaserProjectorResult {
  MpExecutionDetails execution = 1000;
}
```

## Locate Instruments (USMN) {/* #locate-instruments-usmn */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn)

`/briosa.InstrumentOperations/LocateInstrumentsUsmn` · Operation ID: `instrument_operations.locate_instruments_usmn`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | `repeated CollectionInstrumentId` | Instruments to Locate | Required |
| Request | 2 | `nominals_group` | `optional CollectionObjectName` | Nominals Group Name (blank for none) | Required |
| Request | 3 | `output_group` | `optional CollectionObjectName` | Output Group Name (to be established) | Required |
| Request | 4 | `move_in_working_frame` | `optional bool` | Move In Working Frame (TRUE) or Instrument Frame (FALSE) | false |
| Request | 5 | `auto_reject_outliers_and_resolve` | `optional bool` | AutoReject Outliers and Resolve | false |
| Request | 6 | `show_usmn_dialog` | `optional ShowUsmnDialog` | Show USMN Dialog | Required |
| Request | 7 | `maximum_acceptable_rms_error` | `optional double` | Max Acceptable RMS Error Value (0.0 for none) | 0.000000 |
| Request | 8 | `maximum_acceptable_error` | `optional double` | Max Acceptable Error Value (0.0 for none) | 0.000000 |
| Request | 9 | `excluded_groups` | `repeated CollectionObjectName` | Groups to be Excluded | Required |
| Request | 10 | `exclude_single_instrument_points` | `optional bool` | Exclude Points Measured By Only One Instrument | false |
| Request | 11 | `run_uncertainty_field_analysis` | `optional bool` | Run Uncertainty Field Analysis? | false |
| Request | 12 | `analysis_samples` | `optional int32` | Analysis Samples | 300 |
| Request | 13 | `analysis_time_limit` | `optional double` | Analysis Time Limit (Minutes - 0 for none) | 4.000000 |
| Result | 1 | `rms_error` | `optional double` | RMS Error Value | — |
| Result | 2 | `maximum_error` | `optional double` | Max Error Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LocateInstrumentsUsmn(LocateInstrumentsUsmnRequest) returns (LocateInstrumentsUsmnResult);

message LocateInstrumentsUsmnRequest {
  repeated CollectionInstrumentId instruments = 1;
  optional CollectionObjectName nominals_group = 2;
  optional CollectionObjectName output_group = 3;
  optional bool move_in_working_frame = 4;
  optional bool auto_reject_outliers_and_resolve = 5;
  optional ShowUsmnDialog show_usmn_dialog = 6;
  optional double maximum_acceptable_rms_error = 7;
  optional double maximum_acceptable_error = 8;
  repeated CollectionObjectName excluded_groups = 9;
  optional bool exclude_single_instrument_points = 10;
  optional bool run_uncertainty_field_analysis = 11;
  optional int32 analysis_samples = 12;
  optional double analysis_time_limit = 13;
}

message LocateInstrumentsUsmnResult {
  optional double rms_error = 1;
  optional double maximum_error = 2;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `analysis_time_limit` | Time in minutes; 0 disables the time limit. |

## Create Templated Instrument (USMN) {/* #create-templated-instrument-usmn */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn)

`/briosa.InstrumentOperations/CreateTemplatedInstrumentUsmn` · Operation ID: `instrument_operations.create_templated_instrument_usmn`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_template_name` | `optional CollectionObjectName` | Instrument Template Name | Required |
| Request | 2 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 3 | `overall_instrument_weight` | `optional double` | Overal Instrument Weight | 1.000000 |
| Request | 4 | `moving` | `optional bool` | Moving | true |
| Request | 5 | `enable_x` | `optional bool` | Enable X | true |
| Request | 6 | `enable_y` | `optional bool` | Enable Y | true |
| Request | 7 | `enable_z` | `optional bool` | Enable Z | true |
| Request | 8 | `enable_rx` | `optional bool` | Enable Rx | true |
| Request | 9 | `enable_ry` | `optional bool` | Enable Ry | true |
| Request | 10 | `enable_rz` | `optional bool` | Enable Rz | true |
| Request | 11 | `enable_scale` | `optional bool` | Enable Scale | false |
| Request | 12 | `enable_component_weights` | `optional bool` | Enable Component Weights | true |
| Request | 13 | `component_1_weight` | `optional double` | Component 1 (Azimuth) Weight | 1.000000 |
| Request | 14 | `component_2_weight` | `optional double` | Component 2 (Elevation) Weight | 1.000000 |
| Request | 15 | `component_3_weight` | `optional double` | Component 3 (Distance) Weight | 1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateTemplatedInstrumentUsmn(CreateTemplatedInstrumentUsmnRequest) returns (CreateTemplatedInstrumentUsmnResult);

message CreateTemplatedInstrumentUsmnRequest {
  optional CollectionObjectName instrument_template_name = 1;
  optional CollectionInstrumentId instrument = 2;
  optional double overall_instrument_weight = 3;
  optional bool moving = 4;
  optional bool enable_x = 5;
  optional bool enable_y = 6;
  optional bool enable_z = 7;
  optional bool enable_rx = 8;
  optional bool enable_ry = 9;
  optional bool enable_rz = 10;
  optional bool enable_scale = 11;
  optional bool enable_component_weights = 12;
  optional double component_1_weight = 13;
  optional double component_2_weight = 14;
  optional double component_3_weight = 15;
}

message CreateTemplatedInstrumentUsmnResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `component_1_weight` | MP qualifier: Azimuth. |
| `component_2_weight` | MP qualifier: Elevation. |
| `component_3_weight` | MP qualifier: Distance. |

## Locate Instrument (Best Fit - Group to Group) {/* #locate-instrument-best-fit---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group)

`/briosa.InstrumentOperations/LocateInstrumentBestFitGroupToGroup` · Operation ID: `instrument_operations.locate_instrument_best_fit_group_to_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group` | `optional CollectionObjectName` | Reference Group | Required |
| Request | 2 | `corresponding_group` | `optional CollectionObjectName` | Corresponding Group | Required |
| Request | 3 | `show_interface` | `optional bool` | Show Interface | false |
| Request | 4 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0.000000 |
| Request | 5 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0.000000 |
| Request | 6 | `allow_scale` | `optional bool` | Allow Scale | false |
| Request | 7 | `allow_x` | `optional bool` | Allow X | true |
| Request | 8 | `allow_y` | `optional bool` | Allow Y | true |
| Request | 9 | `allow_z` | `optional bool` | Allow Z | true |
| Request | 10 | `allow_rx` | `optional bool` | Allow Rx | true |
| Request | 11 | `allow_ry` | `optional bool` | Allow Ry | true |
| Request | 12 | `allow_rz` | `optional bool` | Allow Rz | true |
| Request | 13 | `lock_degrees_of_freedom` | `optional bool` | Lock Degrees of Freedom | false |
| Request | 14 | `generate_event` | `optional bool` | Generate Event | false |
| Request | 15 | `csv_report` | `optional FileReference` | File Path for CSV Text Report (requires Show Interface = TRUE) | Omitted |
| Result | 1 | `transform_in_working` | `optional Transform` | Transform in Working | — |
| Result | 2 | `optimum_transform` | `optional WorldTransform` | Optimum Transform | — |
| Result | 3 | `rms_deviation` | `optional double` | RMS Deviation | — |
| Result | 4 | `maximum_absolute_deviation` | `optional double` | Maximum Absolute Deviation | — |
| Result | 5 | `number_of_unknowns` | `optional int32` | Number of Unknowns | — |
| Result | 6 | `number_of_equations` | `optional int32` | Number of Equations | — |
| Result | 7 | `robustness` | `optional double` | Robustness | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LocateInstrumentBestFitGroupToGroup(LocateInstrumentBestFitGroupToGroupRequest) returns (LocateInstrumentBestFitGroupToGroupResult);

message LocateInstrumentBestFitGroupToGroupRequest {
  optional CollectionObjectName reference_group = 1;
  optional CollectionObjectName corresponding_group = 2;
  optional bool show_interface = 3;
  optional double rms_tolerance = 4;
  optional double maximum_absolute_tolerance = 5;
  optional bool allow_scale = 6;
  optional bool allow_x = 7;
  optional bool allow_y = 8;
  optional bool allow_z = 9;
  optional bool allow_rx = 10;
  optional bool allow_ry = 11;
  optional bool allow_rz = 12;
  optional bool lock_degrees_of_freedom = 13;
  optional bool generate_event = 14;
  optional FileReference csv_report = 15;
}

message LocateInstrumentBestFitGroupToGroupResult {
  optional Transform transform_in_working = 1;
  optional WorldTransform optimum_transform = 2;
  optional double rms_deviation = 3;
  optional double maximum_absolute_deviation = 4;
  optional int32 number_of_unknowns = 5;
  optional int32 number_of_equations = 6;
  optional double robustness = 7;
  MpExecutionDetails execution = 1000;
}
```

## Locate Instrument (Best Fit - Nominal Geometry) {/* #locate-instrument-best-fit---nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry)

`/briosa.InstrumentOperations/LocateInstrumentBestFitNominalGeometry` · Operation ID: `instrument_operations.locate_instrument_best_fit_nominal_geometry`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `geometry_relationships` | `repeated CollectionObjectName` | Geometry Relationships | Required |
| Request | 3 | `show_interface` | `optional bool` | Show Interface | false |
| Request | 4 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0.000000 |
| Request | 5 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0.000000 |
| Request | 6 | `allow_scale` | `optional bool` | Allow Scale | false |
| Request | 7 | `allow_x` | `optional bool` | Allow X | true |
| Request | 8 | `allow_y` | `optional bool` | Allow Y | true |
| Request | 9 | `allow_z` | `optional bool` | Allow Z | true |
| Request | 10 | `allow_rx` | `optional bool` | Allow Rx | true |
| Request | 11 | `allow_ry` | `optional bool` | Allow Ry | true |
| Request | 12 | `allow_rz` | `optional bool` | Allow Rz | true |
| Request | 13 | `lock_degrees_of_freedom` | `optional bool` | Lock Degrees of Freedom | false |
| Request | 14 | `generate_event` | `optional bool` | Generate Event | false |
| Request | 15 | `csv_report` | `optional FileReference` | File Path for CSV Text Report (requires Show Interface = TRUE) | Omitted |
| Result | 1 | `transform_in_working` | `optional Transform` | Transform in Working | — |
| Result | 2 | `optimum_transform` | `optional WorldTransform` | Optimum Transform | — |
| Result | 3 | `rms_deviation` | `optional double` | RMS Deviation | — |
| Result | 4 | `maximum_absolute_deviation` | `optional double` | Maximum Absolute Deviation | — |
| Result | 5 | `number_of_unknowns` | `optional int32` | Number of Unknowns | — |
| Result | 6 | `number_of_equations` | `optional int32` | Number of Equations | — |
| Result | 7 | `robustness` | `optional double` | Robustness | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LocateInstrumentBestFitNominalGeometry(LocateInstrumentBestFitNominalGeometryRequest) returns (LocateInstrumentBestFitNominalGeometryResult);

message LocateInstrumentBestFitNominalGeometryRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName geometry_relationships = 2;
  optional bool show_interface = 3;
  optional double rms_tolerance = 4;
  optional double maximum_absolute_tolerance = 5;
  optional bool allow_scale = 6;
  optional bool allow_x = 7;
  optional bool allow_y = 8;
  optional bool allow_z = 9;
  optional bool allow_rx = 10;
  optional bool allow_ry = 11;
  optional bool allow_rz = 12;
  optional bool lock_degrees_of_freedom = 13;
  optional bool generate_event = 14;
  optional FileReference csv_report = 15;
}

message LocateInstrumentBestFitNominalGeometryResult {
  optional Transform transform_in_working = 1;
  optional WorldTransform optimum_transform = 2;
  optional double rms_deviation = 3;
  optional double maximum_absolute_deviation = 4;
  optional int32 number_of_unknowns = 5;
  optional int32 number_of_equations = 6;
  optional double robustness = 7;
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Transform {/* #get-instrument-transform */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-transform)

`/briosa.InstrumentOperations/GetInstrumentTransform` · Operation ID: `instrument_operations.get_instrument_transform`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `reference_frame` | `optional CollectionObjectName` | Reference Frame | Required |
| Result | 1 | `transform` | `optional Transform` | Transform | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentTransform(GetInstrumentTransformRequest) returns (GetInstrumentTransformResult);

message GetInstrumentTransformRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_frame = 2;
}

message GetInstrumentTransformResult {
  optional Transform transform = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Transform {/* #set-instrument-transform */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-transform)

`/briosa.InstrumentOperations/SetInstrumentTransform` · Operation ID: `instrument_operations.set_instrument_transform`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to Move | Required |
| Request | 2 | `destination_transform` | `optional Transform` | Destination Transform | Required |
| Request | 3 | `reference_frame` | `optional CollectionObjectName` | Reference Frame | Required |
| Request | 4 | `number_of_steps` | `optional int32` | Number of Steps | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentTransform(SetInstrumentTransformRequest) returns (SetInstrumentTransformResult);

message SetInstrumentTransformRequest {
  optional CollectionInstrumentId instrument = 1;
  optional Transform destination_transform = 2;
  optional CollectionObjectName reference_frame = 3;
  optional int32 number_of_steps = 4;
}

message SetInstrumentTransformResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Tracker/EDM Theodolite Uncertainties {/* #get-trackeredm-theodolite-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties)

`/briosa.InstrumentOperations/GetTrackerEdmTheodoliteUncertainties` · Operation ID: `instrument_operations.get_tracker_edm_theodolite_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1 | `theta_dispersion` | `optional double` | Theta Dispersion (arcseconds) | — |
| Result | 2 | `theta_threshold` | `optional double` | Theta Threshold (linear units) | — |
| Result | 3 | `phi_dispersion` | `optional double` | Phi Dispersion (arcseconds) | — |
| Result | 4 | `phi_threshold` | `optional double` | Phi Threshold (linear units) | — |
| Result | 5 | `distance` | `optional double` | Distance (PPM) | — |
| Result | 6 | `distance_threshold` | `optional double` | Distance Threshold (linear units) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetTrackerEdmTheodoliteUncertainties(GetTrackerEdmTheodoliteUncertaintiesRequest) returns (GetTrackerEdmTheodoliteUncertaintiesResult);

message GetTrackerEdmTheodoliteUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetTrackerEdmTheodoliteUncertaintiesResult {
  optional double theta_dispersion = 1;
  optional double theta_threshold = 2;
  optional double phi_dispersion = 3;
  optional double phi_threshold = 4;
  optional double distance = 5;
  optional double distance_threshold = 6;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `theta_dispersion` | Angle in arcseconds. |
| `phi_dispersion` | Angle in arcseconds. |
| `distance` | Value in parts per million. |

## Set Tracker/EDM Theodolite Uncertainties {/* #set-trackeredm-theodolite-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties)

`/briosa.InstrumentOperations/SetTrackerEdmTheodoliteUncertainties` · Operation ID: `instrument_operations.set_tracker_edm_theodolite_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `theta_dispersion` | `optional double` | Theta Dispersion (arcseconds) | 1.000000 |
| Request | 3 | `theta_threshold` | `optional double` | Theta Threshold (linear units) | 0.001000 |
| Request | 4 | `phi_dispersion` | `optional double` | Phi Dispersion(arcseconds) | 1.000000 |
| Request | 5 | `phi_threshold` | `optional double` | Phi Threshold(linear units) | 0.001000 |
| Request | 6 | `distance` | `optional double` | Distance (PPM) | 2.500000 |
| Request | 7 | `distance_threshold` | `optional double` | Distance Threshold (linear units) | 0.000300 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetTrackerEdmTheodoliteUncertainties(SetTrackerEdmTheodoliteUncertaintiesRequest) returns (SetTrackerEdmTheodoliteUncertaintiesResult);

message SetTrackerEdmTheodoliteUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double theta_dispersion = 2;
  optional double theta_threshold = 3;
  optional double phi_dispersion = 4;
  optional double phi_threshold = 5;
  optional double distance = 6;
  optional double distance_threshold = 7;
}

message SetTrackerEdmTheodoliteUncertaintiesResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `theta_dispersion` | Angle in arcseconds. |
| `phi_dispersion` | Angle in arcseconds. |
| `distance` | Value in parts per million. |

## Get PCMM Instrument XYZ Uncertainties {/* #get-pcmm-instrument-xyz-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties)

`/briosa.InstrumentOperations/GetPcmmInstrumentXyzUncertainties` · Operation ID: `instrument_operations.get_pcmm_instrument_xyz_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1 | `x_uncertainty` | `optional double` | X Uncertainty | — |
| Result | 2 | `y_uncertainty` | `optional double` | Y Uncertainty | — |
| Result | 3 | `z_uncertainty` | `optional double` | Z Uncertainty | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPcmmInstrumentXyzUncertainties(GetPcmmInstrumentXyzUncertaintiesRequest) returns (GetPcmmInstrumentXyzUncertaintiesResult);

message GetPcmmInstrumentXyzUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetPcmmInstrumentXyzUncertaintiesResult {
  optional double x_uncertainty = 1;
  optional double y_uncertainty = 2;
  optional double z_uncertainty = 3;
  MpExecutionDetails execution = 1000;
}
```

## Set PCMM Instrument XYZ Uncertainties {/* #set-pcmm-instrument-xyz-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties)

`/briosa.InstrumentOperations/SetPcmmInstrumentXyzUncertainties` · Operation ID: `instrument_operations.set_pcmm_instrument_xyz_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `x_uncertainty` | `optional double` | X Uncertainty | 0.001000 |
| Request | 3 | `y_uncertainty` | `optional double` | Y Uncertainty) | 0.001000 |
| Request | 4 | `z_uncertainty` | `optional double` | Z Uncertainty | 0.001000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPcmmInstrumentXyzUncertainties(SetPcmmInstrumentXyzUncertaintiesRequest) returns (SetPcmmInstrumentXyzUncertaintiesResult);

message SetPcmmInstrumentXyzUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double x_uncertainty = 2;
  optional double y_uncertainty = 3;
  optional double z_uncertainty = 4;
}

message SetPcmmInstrumentXyzUncertaintiesResult {
  MpExecutionDetails execution = 1000;
}
```

## Get XYZ Instrument Uncertainties {/* #get-xyz-instrument-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties)

`/briosa.InstrumentOperations/GetXyzInstrumentUncertainties` · Operation ID: `instrument_operations.get_xyz_instrument_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1 | `x_uncertainty` | `optional double` | X Uncertainty | — |
| Result | 2 | `y_uncertainty` | `optional double` | Y Uncertainty | — |
| Result | 3 | `z_uncertainty` | `optional double` | Z Uncertainty | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetXyzInstrumentUncertainties(GetXyzInstrumentUncertaintiesRequest) returns (GetXyzInstrumentUncertaintiesResult);

message GetXyzInstrumentUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetXyzInstrumentUncertaintiesResult {
  optional double x_uncertainty = 1;
  optional double y_uncertainty = 2;
  optional double z_uncertainty = 3;
  MpExecutionDetails execution = 1000;
}
```

## Set XYZ Instrument Uncertainties {/* #set-xyz-instrument-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties)

`/briosa.InstrumentOperations/SetXyzInstrumentUncertainties` · Operation ID: `instrument_operations.set_xyz_instrument_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `x_uncertainty` | `optional double` | X Uncertainty | 0.000500 |
| Request | 3 | `y_uncertainty` | `optional double` | Y Uncertainty | 0.000500 |
| Request | 4 | `z_uncertainty` | `optional double` | Z Uncertainty) | 0.000500 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetXyzInstrumentUncertainties(SetXyzInstrumentUncertaintiesRequest) returns (SetXyzInstrumentUncertaintiesResult);

message SetXyzInstrumentUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double x_uncertainty = 2;
  optional double y_uncertainty = 3;
  optional double z_uncertainty = 4;
}

message SetXyzInstrumentUncertaintiesResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Weather Setting {/* #get-instrument-weather-setting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting)

`/briosa.InstrumentOperations/GetInstrumentWeatherSetting` · Operation ID: `instrument_operations.get_instrument_weather_setting`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1 | `temperature` | `optional double` | Temperature (F) | — |
| Result | 2 | `pressure` | `optional double` | Pressure (mmHg) | — |
| Result | 3 | `relative_humidity` | `optional double` | Humidity (%Rel) | — |
| Result | 4 | `set_automatically` | `optional bool` | Was Set Automatically? (using Inst or external sensor | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentWeatherSetting(GetInstrumentWeatherSettingRequest) returns (GetInstrumentWeatherSettingResult);

message GetInstrumentWeatherSettingRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetInstrumentWeatherSettingResult {
  optional double temperature = 1;
  optional double pressure = 2;
  optional double relative_humidity = 3;
  optional bool set_automatically = 4;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in millimeters of mercury. |
| `relative_humidity` | Relative humidity in percent. |

## Set Instrument Weather Setting {/* #set-instrument-weather-setting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting)

`/briosa.InstrumentOperations/SetInstrumentWeatherSetting` · Operation ID: `instrument_operations.set_instrument_weather_setting`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `temperature` | `optional double` | Temperature (F) | 0.000000 |
| Request | 3 | `pressure` | `optional double` | Pressure (mmHg) | 0.000000 |
| Request | 4 | `relative_humidity` | `optional double` | Humidity (%Rel) | 0.000000 |
| Request | 5 | `set_automatically` | `optional bool` | Set Automatically? (Ignore above values) | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentWeatherSetting(SetInstrumentWeatherSettingRequest) returns (SetInstrumentWeatherSettingResult);

message SetInstrumentWeatherSettingRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double temperature = 2;
  optional double pressure = 3;
  optional double relative_humidity = 4;
  optional bool set_automatically = 5;
}

message SetInstrumentWeatherSettingResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in millimeters of mercury. |
| `relative_humidity` | Relative humidity in percent. |

## Get Instrument Part Temperature {/* #get-instrument-part-temperature */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature)

`/briosa.InstrumentOperations/GetInstrumentPartTemperature` · Operation ID: `instrument_operations.get_instrument_part_temperature`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1 | `part_temperature` | `optional double` | Part Temperature (F) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentPartTemperature(GetInstrumentPartTemperatureRequest) returns (GetInstrumentPartTemperatureResult);

message GetInstrumentPartTemperatureRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetInstrumentPartTemperatureResult {
  optional double part_temperature = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `part_temperature` | Temperature in degrees Fahrenheit. |

## Compute CTE Scale Factor {/* #compute-cte-scale-factor */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor)

`/briosa.InstrumentOperations/ComputeCteScaleFactor` · Operation ID: `instrument_operations.compute_cte_scale_factor`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `material_cte` | `optional double` | Material CTE (1/Deg F) | 0.000000 |
| Request | 2 | `initial_temperature` | `optional double` | Initial Temperature (F) | 0.000000 |
| Request | 3 | `final_temperature` | `optional double` | Final Temperature (F) | 0.000000 |
| Result | 1 | `scale_factor` | `optional double` | Scale Factor | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ComputeCteScaleFactor(ComputeCteScaleFactorRequest) returns (ComputeCteScaleFactorResult);

message ComputeCteScaleFactorRequest {
  optional double material_cte = 1;
  optional double initial_temperature = 2;
  optional double final_temperature = 3;
}

message ComputeCteScaleFactorResult {
  optional double scale_factor = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `material_cte` | Coefficient per degree Fahrenheit. |
| `initial_temperature` | Temperature in degrees Fahrenheit. |
| `final_temperature` | Temperature in degrees Fahrenheit. |

## Set (multiply) Instrument Scale Factor (CAUTION!) {/* #set-multiply-instrument-scale-factor-caution */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution)

`/briosa.InstrumentOperations/SetMultiplyInstrumentScaleFactor` · Operation ID: `instrument_operations.set_multiply_instrument_scale_factor`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `scale_factor` | `optional double` | Scale Factor | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetMultiplyInstrumentScaleFactor(SetMultiplyInstrumentScaleFactorRequest) returns (SetMultiplyInstrumentScaleFactorResult);

message SetMultiplyInstrumentScaleFactorRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scale_factor = 2;
}

message SetMultiplyInstrumentScaleFactorResult {
  MpExecutionDetails execution = 1000;
}
```

## Set (absolute) Instrument Scale Factor (CAUTION!) {/* #set-absolute-instrument-scale-factor-caution */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution)

`/briosa.InstrumentOperations/SetAbsoluteInstrumentScaleFactor` · Operation ID: `instrument_operations.set_absolute_instrument_scale_factor`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `scale_factor` | `optional double` | Scale Factor | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetAbsoluteInstrumentScaleFactor(SetAbsoluteInstrumentScaleFactorRequest) returns (SetAbsoluteInstrumentScaleFactorResult);

message SetAbsoluteInstrumentScaleFactorRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scale_factor = 2;
}

message SetAbsoluteInstrumentScaleFactorResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Scale Factor {/* #get-instrument-scale-factor */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor)

`/briosa.InstrumentOperations/GetInstrumentScaleFactor` · Operation ID: `instrument_operations.get_instrument_scale_factor`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1 | `scale_factor` | `optional double` | Scale Factor | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentScaleFactor(GetInstrumentScaleFactorRequest) returns (GetInstrumentScaleFactorResult);

message GetInstrumentScaleFactorRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetInstrumentScaleFactorResult {
  optional double scale_factor = 1;
  MpExecutionDetails execution = 1000;
}
```

## Transform Instrument - Frame To Frame {/* #transform-instrument---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame)

`/briosa.InstrumentOperations/TransformInstrumentFrameToFrame` · Operation ID: `instrument_operations.transform_instrument_frame_to_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to move | Required |
| Request | 2 | `initial_frame` | `optional CollectionObjectName` | Initial Frame Name | Required |
| Request | 3 | `destination_frame` | `optional CollectionObjectName` | Destination Frame Name | Required |
| Request | 4 | `number_of_steps` | `optional int32` | Number of Steps | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TransformInstrumentFrameToFrame(TransformInstrumentFrameToFrameRequest) returns (TransformInstrumentFrameToFrameResult);

message TransformInstrumentFrameToFrameRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName initial_frame = 2;
  optional CollectionObjectName destination_frame = 3;
  optional int32 number_of_steps = 4;
}

message TransformInstrumentFrameToFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Transform Instrument by Delta {/* #transform-instrument-by-delta */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta)

`/briosa.InstrumentOperations/TransformInstrumentByDelta` · Operation ID: `instrument_operations.transform_instrument_by_delta`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to Transform | Required |
| Request | 2 | `delta_transform` | `optional WorldTransform` | Delta Transform | Required |
| Request | 3 | `apply_scale_to_instrument` | `optional bool` | Apply Scale from Transform to Instrument | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TransformInstrumentByDelta(TransformInstrumentByDeltaRequest) returns (TransformInstrumentByDeltaResult);

message TransformInstrumentByDeltaRequest {
  optional CollectionInstrumentId instrument = 1;
  optional WorldTransform delta_transform = 2;
  optional bool apply_scale_to_instrument = 3;
}

message TransformInstrumentByDeltaResult {
  MpExecutionDetails execution = 1000;
}
```

## Transform Multiple Instruments By Delta {/* #transform-multiple-instruments-by-delta */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta)

`/briosa.InstrumentOperations/TransformMultipleInstrumentsByDelta` · Operation ID: `instrument_operations.transform_multiple_instruments_by_delta`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | `repeated CollectionInstrumentId` | Instruments to Move | Required |
| Request | 2 | `delta_transform` | `optional WorldTransform` | Delta Transform | Required |
| Request | 3 | `apply_scale_to_instruments` | `optional bool` | Apply Scale from Transform to Instrument | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TransformMultipleInstrumentsByDelta(TransformMultipleInstrumentsByDeltaRequest) returns (TransformMultipleInstrumentsByDeltaResult);

message TransformMultipleInstrumentsByDeltaRequest {
  repeated CollectionInstrumentId instruments = 1;
  optional WorldTransform delta_transform = 2;
  optional bool apply_scale_to_instruments = 3;
}

message TransformMultipleInstrumentsByDeltaResult {
  MpExecutionDetails execution = 1000;
}
```

## Instrument Operational Check {/* #instrument-operational-check */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#instrument-operational-check)

`/briosa.InstrumentOperations/InstrumentOperationalCheck` · Operation ID: `instrument_operations.instrument_operational_check`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to Check | Required |
| Request | 2 | `check_type` | `optional string` | Check Type | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc InstrumentOperationalCheck(InstrumentOperationalCheckRequest) returns (InstrumentOperationalCheckResult);

message InstrumentOperationalCheckRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string check_type = 2;
}

message InstrumentOperationalCheckResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Number of Observations on Target {/* #get-number-of-observations-on-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target)

`/briosa.InstrumentOperations/GetNumberOfObservationsOnTarget` · Operation ID: `instrument_operations.get_number_of_observations_on_target`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point Name | Required |
| Result | 1 | `observation_count` | `int32` | Number of Shots | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetNumberOfObservationsOnTarget(GetNumberOfObservationsOnTargetRequest) returns (GetNumberOfObservationsOnTargetResult);

message GetNumberOfObservationsOnTargetRequest {
  optional PointName point = 1;
}

message GetNumberOfObservationsOnTargetResult {
  int32 observation_count = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Instruments with Observations on Target {/* #get-instruments-with-observations-on-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target)

`/briosa.InstrumentOperations/GetInstrumentsWithObservationsOnTarget` · Operation ID: `instrument_operations.get_instruments_with_observations_on_target`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point Name | Required |
| Result | 1 | `instruments` | `repeated CollectionInstrumentId` | Resultant Collection Instrument Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentsWithObservationsOnTarget(GetInstrumentsWithObservationsOnTargetRequest) returns (GetInstrumentsWithObservationsOnTargetResult);

message GetInstrumentsWithObservationsOnTargetRequest {
  optional PointName point = 1;
}

message GetInstrumentsWithObservationsOnTargetResult {
  repeated CollectionInstrumentId instruments = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Targets Measured by Instrument {/* #get-targets-measured-by-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument)

`/briosa.InstrumentOperations/GetTargetsMeasuredByInstrument` · Operation ID: `instrument_operations.get_targets_measured_by_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Measuring Instrument ID | Required |
| Result | 1 | `targets` | `repeated PointName` | Points Measured by Instrument | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetTargetsMeasuredByInstrument(GetTargetsMeasuredByInstrumentRequest) returns (GetTargetsMeasuredByInstrumentResult);

message GetTargetsMeasuredByInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetTargetsMeasuredByInstrumentResult {
  repeated PointName targets = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Observation Status {/* #set-observation-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-status)

`/briosa.InstrumentOperations/SetObservationStatus` · Operation ID: `instrument_operations.set_observation_status`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point Name | Required |
| Request | 2 | `observation_index` | `optional int32` | Observation Index | 0 |
| Request | 3 | `active` | `optional bool` | Active? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetObservationStatus(SetObservationStatusRequest) returns (SetObservationStatusResult);

message SetObservationStatusRequest {
  optional PointName point = 1;
  optional int32 observation_index = 2;
  optional bool active = 3;
}

message SetObservationStatusResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Observation Info {/* #get-observation-info */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-observation-info)

`/briosa.InstrumentOperations/GetObservationInfo` · Operation ID: `instrument_operations.get_observation_info`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point Name | Required |
| Request | 2 | `observation_index` | `optional int32` | Observation Index | 0 |
| Result | 1 | `observation` | `optional ObservationInfo` | Info Data | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetObservationInfo(GetObservationInfoRequest) returns (GetObservationInfoResult);

message GetObservationInfoRequest {
  optional PointName point = 1;
  optional int32 observation_index = 2;
}

message GetObservationInfoResult {
  optional ObservationInfo observation = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in inches of mercury. |
| `relative_humidity` | Relative humidity in percent. |

## Fabricate Observations {/* #fabricate-observations */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#fabricate-observations)

`/briosa.InstrumentOperations/FabricateObservations` · Operation ID: `instrument_operations.fabricate_observations`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to shoot | Required |
| Request | 2 | `point_group` | `optional CollectionObjectName` | Group name to shoot | Required |
| Request | 3 | `introduce_instrument_error` | `optional bool` | Introduce instrument error? | false |
| Request | 4 | `limit_distance` | `optional bool` | Limit Distance? | false |
| Request | 5 | `minimum_distance` | `optional double` | Min Distance | 0.000000 |
| Request | 6 | `maximum_distance` | `optional double` | Max Distance | 1000000.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FabricateObservations(FabricateObservationsRequest) returns (FabricateObservationsResult);

message FabricateObservationsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName point_group = 2;
  optional bool introduce_instrument_error = 3;
  optional bool limit_distance = 4;
  optional double minimum_distance = 5;
  optional double maximum_distance = 6;
}

message FabricateObservationsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Obscured Points from Instrument {/* #get-obscured-points-from-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument)

`/briosa.InstrumentOperations/GetObscuredPointsFromInstrument` · Operation ID: `instrument_operations.get_obscured_points_from_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `candidate_points` | `repeated PointName` | Candidate Points | Required |
| Request | 3 | `show_obscured_shots` | `optional bool` | Show Obscured Shots | false |
| Result | 1 | `obscured_points` | `repeated PointName` | Obscured Points | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetObscuredPointsFromInstrument(GetObscuredPointsFromInstrumentRequest) returns (GetObscuredPointsFromInstrumentResult);

message GetObscuredPointsFromInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated PointName candidate_points = 2;
  optional bool show_obscured_shots = 3;
}

message GetObscuredPointsFromInstrumentResult {
  repeated PointName obscured_points = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Targets and Mode/Profiles {/* #get-instrument-targets-and-modeprofiles */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles)

`/briosa.InstrumentOperations/GetInstrumentTargetsAndModeProfiles` · Operation ID: `instrument_operations.get_instrument_targets_and_mode_profiles`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to set | Required |
| Result | 1 | `mode_profiles` | `repeated string` | Mode/Profile | — |
| Result | 2 | `target_names` | `repeated string` | Target Names | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentTargetsAndModeProfiles(GetInstrumentTargetsAndModeProfilesRequest) returns (GetInstrumentTargetsAndModeProfilesResult);

message GetInstrumentTargetsAndModeProfilesRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetInstrumentTargetsAndModeProfilesResult {
  repeated string mode_profiles = 1;
  repeated string target_names = 2;
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Measurement Mode/Profile {/* #set-instrument-measurement-modeprofile */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile)

`/briosa.InstrumentOperations/SetInstrumentMeasurementModeProfile` · Operation ID: `instrument_operations.set_instrument_measurement_mode_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to set | Required |
| Request | 2 | `mode_profile` | `optional string` | Mode/Profile | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentMeasurementModeProfile(SetInstrumentMeasurementModeProfileRequest) returns (SetInstrumentMeasurementModeProfileResult);

message SetInstrumentMeasurementModeProfileRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string mode_profile = 2;
}

message SetInstrumentMeasurementModeProfileResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Group and Target {/* #set-instrument-group-and-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target)

`/briosa.InstrumentOperations/SetInstrumentGroupAndTarget` · Operation ID: `instrument_operations.set_instrument_group_and_target`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `point` | `optional PointName` | Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentGroupAndTarget(SetInstrumentGroupAndTargetRequest) returns (SetInstrumentGroupAndTargetResult);

message SetInstrumentGroupAndTargetRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName point = 2;
}

message SetInstrumentGroupAndTargetResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Targeting {/* #set-instrument-targeting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting)

`/briosa.InstrumentOperations/SetInstrumentTargeting` · Operation ID: `instrument_operations.set_instrument_targeting`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `targeting_name` | `optional string` | Targeting Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentTargeting(SetInstrumentTargetingRequest) returns (SetInstrumentTargetingResult);

message SetInstrumentTargetingRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string targeting_name = 2;
}

message SetInstrumentTargetingResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Target Computation Options {/* #set-target-computation-options */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-target-computation-options)

`/briosa.InstrumentOperations/SetTargetComputationOptions` · Operation ID: `instrument_operations.set_target_computation_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `computation_method` | `optional TargetComputationMethod` | Target Computation Method | Required |
| Request | 2 | `ignore_distance_measurements` | `optional bool` | Ignore Distance Measurements | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetTargetComputationOptions(SetTargetComputationOptionsRequest) returns (SetTargetComputationOptionsResult);

message SetTargetComputationOptionsRequest {
  optional TargetComputationMethod computation_method = 1;
  optional bool ignore_distance_measurements = 2;
}

message SetTargetComputationOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Observation Mirror Cube Shot Face {/* #set-observation-mirror-cube-shot-face */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face)

`/briosa.InstrumentOperations/SetObservationMirrorCubeShotFace` · Operation ID: `instrument_operations.set_observation_mirror_cube_shot_face`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point Name | Required |
| Request | 2 | `observation_index` | `optional int32` | Observation Index | 0 |
| Request | 3 | `is_mirror_cube_shot` | `optional bool` | Is Mirror Cube Shot? (FALSE = Normal) | false |
| Request | 4 | `mirror_cube_shot_face` | `optional int32` | Mirror Cube Shot Face (1 .. 6) | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetObservationMirrorCubeShotFace(SetObservationMirrorCubeShotFaceRequest) returns (SetObservationMirrorCubeShotFaceResult);

message SetObservationMirrorCubeShotFaceRequest {
  optional PointName point = 1;
  optional int32 observation_index = 2;
  optional bool is_mirror_cube_shot = 3;
  optional int32 mirror_cube_shot_face = 4;
}

message SetObservationMirrorCubeShotFaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Observation Collimation Shot Options {/* #set-observation-collimation-shot-options */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options)

`/briosa.InstrumentOperations/SetObservationCollimationShotOptions` · Operation ID: `instrument_operations.set_observation_collimation_shot_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point Name | Required |
| Request | 2 | `observation_index` | `optional int32` | Observation Index | 0 |
| Request | 3 | `is_collimation_shot` | `optional bool` | Is Collimation Shot? (FALSE = Normal | false |
| Request | 4 | `targeted_instrument` | `optional CollectionInstrumentId` | Targeted Instrument | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetObservationCollimationShotOptions(SetObservationCollimationShotOptionsRequest) returns (SetObservationCollimationShotOptionsResult);

message SetObservationCollimationShotOptionsRequest {
  optional PointName point = 1;
  optional int32 observation_index = 2;
  optional bool is_collimation_shot = 3;
  optional CollectionInstrumentId targeted_instrument = 4;
}

message SetObservationCollimationShotOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Collimation {/* #collimation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#collimation)

`/briosa.InstrumentOperations/Collimation` · Operation ID: `instrument_operations.collimation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `stationary_instrument` | `optional CollectionInstrumentId` | Stationary Instrument ID | Required |
| Request | 2 | `moving_instrument` | `optional CollectionInstrumentId` | Moving Instrument ID | Required |
| Request | 3 | `collimation_point` | `optional PointName` | Collimation Point | Required |
| Request | 4 | `zero_moving_instrument` | `optional bool` | Zero Moving Instrument | false |
| Request | 5 | `tilt_mode` | `optional CollimationTiltMode` | Collimation Tilt Mode | Required |
| Request | 6 | `baseline_method` | `optional CollimationBaselineMethod` | Collimation Baseline Mode | Required |
| Request | 7 | `baseline_distance` | `optional double` | Baseline Distance | 0.000000 |
| Request | 8 | `scale_point_1` | `optional PointName` | Scale Point 1 | Required |
| Request | 9 | `scale_point_2` | `optional PointName` | Scale Point 2 | Required |
| Request | 10 | `not_measured_by_moving_instrument` | `optional PointName` | Not Measured By Moving Instrument | Required |
| Request | 11 | `as_measured_by_moving_instrument` | `optional PointName` | As Measured By Moving Instrument | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc Collimation(CollimationRequest) returns (CollimationResult);

message CollimationRequest {
  optional CollectionInstrumentId stationary_instrument = 1;
  optional CollectionInstrumentId moving_instrument = 2;
  optional PointName collimation_point = 3;
  optional bool zero_moving_instrument = 4;
  optional CollimationTiltMode tilt_mode = 5;
  optional CollimationBaselineMethod baseline_method = 6;
  optional double baseline_distance = 7;
  optional PointName scale_point_1 = 8;
  optional PointName scale_point_2 = 9;
  optional PointName not_measured_by_moving_instrument = 10;
  optional PointName as_measured_by_moving_instrument = 11;
}

message CollimationResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Target Status {/* #get-instrument-target-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status)

`/briosa.InstrumentOperations/GetInstrumentTargetStatus` · Operation ID: `instrument_operations.get_instrument_target_status`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Result | 1 | `status` | `optional InstrumentTargetStatus` | Locked Face | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentTargetStatus(GetInstrumentTargetStatusRequest) returns (GetInstrumentTargetStatusResult);

message GetInstrumentTargetStatusRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetInstrumentTargetStatusResult {
  optional InstrumentTargetStatus status = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make Surface Face List from Point Proximity {/* #make-surface-face-list-from-point-proximity */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity)

`/briosa.InstrumentOperations/MakeSurfaceFaceListFromPointProximity` · Operation ID: `instrument_operations.make_surface_face_list_from_point_proximity`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `measured_points` | `repeated PointName` | Measured Points | Required |
| Result | 1 | `surface_faces` | `optional SurfaceFaceList` | Selected Surface Faces | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeSurfaceFaceListFromPointProximity(MakeSurfaceFaceListFromPointProximityRequest) returns (MakeSurfaceFaceListFromPointProximityResult);

message MakeSurfaceFaceListFromPointProximityRequest {
  repeated PointName measured_points = 1;
}

message MakeSurfaceFaceListFromPointProximityResult {
  optional SurfaceFaceList surface_faces = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Estimated Scan Time {/* #get-estimated-scan-time */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time)

`/briosa.InstrumentOperations/GetEstimatedScanTime` · Operation ID: `instrument_operations.get_estimated_scan_time`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument | Required |
| Request | 2 | `profile_name` | `optional string` | Profile name | Empty |
| Result | 1 | `estimated_scan_time` | `double` | Estimated Scan Time | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetEstimatedScanTime(GetEstimatedScanTimeRequest) returns (GetEstimatedScanTimeResult);

message GetEstimatedScanTimeRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string profile_name = 2;
}

message GetEstimatedScanTimeResult {
  double estimated_scan_time = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct Perimeters from Surface Face List {/* #construct-perimeters-from-surface-face-list */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list)

`/briosa.InstrumentOperations/ConstructPerimetersFromSurfaceFaceList` · Operation ID: `instrument_operations.construct_perimeters_from_surface_face_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_faces` | `optional SurfaceFaceList` | Selected Surface Faces | Empty |
| Result | 1 | `perimeters` | `optional PerimeterLists` | Exclusion perimeter list | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPerimetersFromSurfaceFaceList(ConstructPerimetersFromSurfaceFaceListRequest) returns (ConstructPerimetersFromSurfaceFaceListResult);

message ConstructPerimetersFromSurfaceFaceListRequest {
  optional SurfaceFaceList surface_faces = 1;
}

message ConstructPerimetersFromSurfaceFaceListResult {
  optional PerimeterLists perimeters = 1;
  MpExecutionDetails execution = 1000;
}
```

## Edge Scan Measurement {/* #edge-scan-measurement */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement)

`/briosa.InstrumentOperations/EdgeScanMeasurement` · Operation ID: `instrument_operations.edge_scan_measurement`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to scan | Required |
| Request | 2 | `point_near_edge` | `optional PointName` | Point near edge | Required |
| Request | 3 | `edge_search_direction_point` | `optional PointName` | Point in edge search direction | Required |
| Request | 4 | `parameter_set_name` | `optional string` | Parameter set name | Empty |
| Request | 5 | `point_group` | `optional CollectionObjectName` | Group Name | Required |
| Request | 6 | `target_name` | `optional string` | Target Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EdgeScanMeasurement(EdgeScanMeasurementRequest) returns (EdgeScanMeasurementResult);

message EdgeScanMeasurementRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName point_near_edge = 2;
  optional PointName edge_search_direction_point = 3;
  optional string parameter_set_name = 4;
  optional CollectionObjectName point_group = 5;
  optional string target_name = 6;
}

message EdgeScanMeasurementResult {
  MpExecutionDetails execution = 1000;
}
```

## Track Tape Measurement {/* #track-tape-measurement */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#track-tape-measurement)

`/briosa.InstrumentOperations/TrackTapeMeasurement` · Operation ID: `instrument_operations.track_tape_measurement`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to scan | Required |
| Request | 2 | `point_on_tape` | `optional PointName` | Point on Tape | Required |
| Request | 3 | `point_on_part` | `optional PointName` | Point on Part | Required |
| Request | 4 | `direction_point` | `optional PointName` | Point for Direction | Required |
| Request | 5 | `termination_point` | `optional PointName` | Point for Termination | Required |
| Request | 6 | `parameter_set_name` | `optional string` | Parameter set name | Empty |
| Request | 7 | `point_group` | `optional CollectionObjectName` | Group Name | Required |
| Request | 8 | `initial_target_name` | `optional string` | Initial Target Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TrackTapeMeasurement(TrackTapeMeasurementRequest) returns (TrackTapeMeasurementResult);

message TrackTapeMeasurementRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName point_on_tape = 2;
  optional PointName point_on_part = 3;
  optional PointName direction_point = 4;
  optional PointName termination_point = 5;
  optional string parameter_set_name = 6;
  optional CollectionObjectName point_group = 7;
  optional string initial_target_name = 8;
}

message TrackTapeMeasurementResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto Measure Points {/* #auto-measure-points */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-points)

`/briosa.InstrumentOperations/AutoMeasurePoints` · Operation ID: `instrument_operations.auto_measure_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `reference_group` | `optional CollectionObjectName` | Reference Group Name | Required |
| Request | 3 | `actuals_group` | `optional CollectionObjectName` | Actuals Group Name (to be measured) | Required |
| Request | 4 | `force_existing_group` | `optional bool` | Force use of existing group? | false |
| Request | 5 | `show_complete_dialog` | `optional bool` | Show complete dialog? | false |
| Request | 6 | `wait_for_completion` | `optional bool` | Wait for Completion? | true |
| Request | 7 | `auto_start` | `optional bool` | Auto Start? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoMeasurePoints(AutoMeasurePointsRequest) returns (AutoMeasurePointsResult);

message AutoMeasurePointsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional bool force_existing_group = 4;
  optional bool show_complete_dialog = 5;
  optional bool wait_for_completion = 6;
  optional bool auto_start = 7;
}

message AutoMeasurePointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto-Measure Vectors {/* #auto-measure-vectors */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors)

`/briosa.InstrumentOperations/AutoMeasureVectors` · Operation ID: `instrument_operations.auto_measure_vectors`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `vector_group` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 3 | `actuals_group` | `optional CollectionObjectName` | Actuals Group Name (to be measured) | Required |
| Request | 4 | `project_point_to_vector` | `optional bool` | Project Point to Vector | false |
| Request | 5 | `angle_tolerance` | `optional double` | Angle Tolerance | 0.000000 |
| Request | 6 | `high_tolerance` | `optional double` | High Tolerance | 0.000000 |
| Request | 7 | `low_tolerance` | `optional double` | Low Tolerance | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoMeasureVectors(AutoMeasureVectorsRequest) returns (AutoMeasureVectorsResult);

message AutoMeasureVectorsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName vector_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional bool project_point_to_vector = 4;
  optional double angle_tolerance = 5;
  optional double high_tolerance = 6;
  optional double low_tolerance = 7;
}

message AutoMeasureVectorsResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto-Measure Surface Vector Intersections {/* #auto-measure-surface-vector-intersections */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections)

`/briosa.InstrumentOperations/AutoMeasureSurfaceVectorIntersections` · Operation ID: `instrument_operations.auto_measure_surface_vector_intersections`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `vector_group` | `optional CollectionObjectName` | Vector Group Name (to be measured) | Required |
| Request | 3 | `resultant_group` | `optional CollectionObjectName` | Resultant Group Name | Required |
| Request | 4 | `wait_for_complete` | `optional bool` | Wait for Complete | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoMeasureSurfaceVectorIntersections(AutoMeasureSurfaceVectorIntersectionsRequest) returns (AutoMeasureSurfaceVectorIntersectionsResult);

message AutoMeasureSurfaceVectorIntersectionsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName vector_group = 2;
  optional CollectionObjectName resultant_group = 3;
  optional bool wait_for_complete = 4;
}

message AutoMeasureSurfaceVectorIntersectionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto-Measure Specified Geometry {/* #auto-measure-specified-geometry */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry)

`/briosa.InstrumentOperations/AutoMeasureSpecifiedGeometry` · Operation ID: `instrument_operations.auto_measure_specified_geometry`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `geometry` | `optional CollectionObjectName` | Object | Required |
| Request | 3 | `mode_profile` | `optional string` | Mode/Profile | Empty |
| Request | 4 | `wait_for_complete` | `optional bool` | Wait for Complete | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoMeasureSpecifiedGeometry(AutoMeasureSpecifiedGeometryRequest) returns (AutoMeasureSpecifiedGeometryResult);

message AutoMeasureSpecifiedGeometryRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName geometry = 2;
  optional string mode_profile = 3;
  optional bool wait_for_complete = 4;
}

message AutoMeasureSpecifiedGeometryResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto-Measure Batch of Features {/* #auto-measure-batch-of-features */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features)

`/briosa.InstrumentOperations/AutoMeasureBatchOfFeatures` · Operation ID: `instrument_operations.auto_measure_batch_of_features`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `features` | `repeated CollectionItemName` | Feature List | Required |
| Request | 3 | `wait_for_complete` | `optional bool` | Wait for Complete | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoMeasureBatchOfFeatures(AutoMeasureBatchOfFeaturesRequest) returns (AutoMeasureBatchOfFeaturesResult);

message AutoMeasureBatchOfFeaturesRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionItemName features = 2;
  optional bool wait_for_complete = 3;
}

message AutoMeasureBatchOfFeaturesResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto-Correspond Closest Point {/* #auto-correspond-closest-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point)

`/briosa.InstrumentOperations/AutoCorrespondClosestPoint` · Operation ID: `instrument_operations.auto_correspond_closest_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `reference_group` | `optional CollectionObjectName` | Reference Group Name | Required |
| Request | 3 | `actuals_group` | `optional CollectionObjectName` | Actuals Group Name (to be measured) | Required |
| Request | 4 | `wait_for_completion` | `optional bool` | Wait for Completion? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoCorrespondClosestPoint(AutoCorrespondClosestPointRequest) returns (AutoCorrespondClosestPointResult);

message AutoCorrespondClosestPointRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional bool wait_for_completion = 4;
}

message AutoCorrespondClosestPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Close Auto-Correspond Closest Point Dialog {/* #close-auto-correspond-closest-point-dialog */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog)

`/briosa.InstrumentOperations/CloseAutoCorrespondClosestPointDialog` · Operation ID: `instrument_operations.close_auto_correspond_closest_point_dialog`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CloseAutoCorrespondClosestPointDialog(CloseAutoCorrespondClosestPointDialogRequest) returns (CloseAutoCorrespondClosestPointDialogResult);

message CloseAutoCorrespondClosestPointDialogRequest {
  optional CollectionInstrumentId instrument = 1;
}

message CloseAutoCorrespondClosestPointDialogResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto-Correspond with Proximity Trigger {/* #auto-correspond-with-proximity-trigger */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger)

`/briosa.InstrumentOperations/AutoCorrespondWithProximityTrigger` · Operation ID: `instrument_operations.auto_correspond_with_proximity_trigger`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `nominal_group` | `optional CollectionObjectName` | Nominal Point Group or Vector Group | Required |
| Request | 3 | `results_group` | `optional CollectionObjectName` | Results Point Group for measurements | Required |
| Request | 4 | `point_distance_threshold` | `optional double` | Point distance threshold | 0.500000 |
| Request | 5 | `vector_axis_threshold` | `optional double` | Vector axis threshold | 0.250000 |
| Request | 6 | `project_results_to_nominal_vector` | `optional bool` | Project results to nominal vector | false |
| Request | 7 | `warbler_ramp_start_distance` | `optional double` | Warbler ramp start zone distance | 12.000000 |
| Request | 8 | `show_watch_window` | `optional bool` | Show Watch window on startup | false |
| Request | 9 | `deviation_vector_group_name` | `optional string` | Vector Group to make while Measuring (blank means ignore) | Required |
| Request | 10 | `make_unmeasured_group` | `optional bool` | Make unmeasured group when done | false |
| Request | 11 | `measure_each_point_only_once` | `optional bool` | Measure each point only once | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoCorrespondWithProximityTrigger(AutoCorrespondWithProximityTriggerRequest) returns (AutoCorrespondWithProximityTriggerResult);

message AutoCorrespondWithProximityTriggerRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName nominal_group = 2;
  optional CollectionObjectName results_group = 3;
  optional double point_distance_threshold = 4;
  optional double vector_axis_threshold = 5;
  optional bool project_results_to_nominal_vector = 6;
  optional double warbler_ramp_start_distance = 7;
  optional bool show_watch_window = 8;
  optional string deviation_vector_group_name = 9;
  optional bool make_unmeasured_group = 10;
  optional bool measure_each_point_only_once = 11;
}

message AutoCorrespondWithProximityTriggerResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Mirror from Plane {/* #construct-mirror-from-plane */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane)

`/briosa.InstrumentOperations/ConstructMirrorFromPlane` · Operation ID: `instrument_operations.construct_mirror_from_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `mirror_name` | `optional string` | Mirror Name | Empty |
| Request | 3 | `plane` | `optional CollectionObjectName` | Plane | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructMirrorFromPlane(ConstructMirrorFromPlaneRequest) returns (ConstructMirrorFromPlaneResult);

message ConstructMirrorFromPlaneRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string mirror_name = 2;
  optional CollectionObjectName plane = 3;
}

message ConstructMirrorFromPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Mirror from Two Points {/* #construct-mirror-from-two-points */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points)

`/briosa.InstrumentOperations/ConstructMirrorFromTwoPoints` · Operation ID: `instrument_operations.construct_mirror_from_two_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `mirror_name` | `optional string` | Mirror Name | Empty |
| Request | 3 | `point_measured_directly` | `optional PointName` | Point Measured Directly | Required |
| Request | 4 | `point_measured_through_mirror` | `optional PointName` | Point Measured Through Mirror | Required |
| Request | 5 | `send_mirror_to_instrument` | `optional bool` | Send Mirror to Instrument? | true |
| Result | 1 | `mirror_plane` | `optional CollectionObjectName` | Mirror Plane | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructMirrorFromTwoPoints(ConstructMirrorFromTwoPointsRequest) returns (ConstructMirrorFromTwoPointsResult);

message ConstructMirrorFromTwoPointsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string mirror_name = 2;
  optional PointName point_measured_directly = 3;
  optional PointName point_measured_through_mirror = 4;
  optional bool send_mirror_to_instrument = 5;
}

message ConstructMirrorFromTwoPointsResult {
  optional CollectionObjectName mirror_plane = 1;
  MpExecutionDetails execution = 1000;
}
```

## Drift Check {/* #drift-check */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#drift-check)

`/briosa.InstrumentOperations/DriftCheck` · Operation ID: `instrument_operations.drift_check`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument to check | Required |
| Request | 2 | `reference_group` | `optional CollectionObjectName` | Reference Group Name | Required |
| Request | 3 | `actuals_group` | `optional CollectionObjectName` | Actuals Group Name (to be measured) | Required |
| Request | 4 | `tolerance` | `optional double` | Tolerance | 0.000000 |
| Request | 5 | `minimum_point_count` | `optional int32` | Minimum point count | 0 |
| Request | 6 | `use_closest_reference_point` | `optional bool` | Use Closest Reference Point | true |
| Result | 1 | `maximum_error` | `double` | Max error | — |
| Result | 2 | `rms_error` | `double` | RMS error | — |
| Result | 3 | `instrument_added` | `bool` | Instrument added? | — |
| Result | 4 | `new_instrument` | `optional CollectionInstrumentId` | New Instrument | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DriftCheck(DriftCheckRequest) returns (DriftCheckResult);

message DriftCheckRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional double tolerance = 4;
  optional int32 minimum_point_count = 5;
  optional bool use_closest_reference_point = 6;
}

message DriftCheckResult {
  double maximum_error = 1;
  double rms_error = 2;
  bool instrument_added = 3;
  optional CollectionInstrumentId new_instrument = 4;
  MpExecutionDetails execution = 1000;
}
```

## Measure Nominal Feature {/* #measure-nominal-feature */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature)

`/briosa.InstrumentOperations/MeasureNominalFeature` · Operation ID: `instrument_operations.measure_nominal_feature`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `feature` | `optional CollectionObjectName` | Feature Name | Required |
| Request | 3 | `resulting_point` | `optional PointName` | Resulting Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MeasureNominalFeature(MeasureNominalFeatureRequest) returns (MeasureNominalFeatureResult);

message MeasureNominalFeatureRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName feature = 2;
  optional PointName resulting_point = 3;
}

message MeasureNominalFeatureResult {
  MpExecutionDetails execution = 1000;
}
```

## Guide Objects in 6D based on Point Measurements {/* #guide-objects-in-6d-based-on-point-measurements */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements)

`/briosa.InstrumentOperations/GuideObjectsIn6dBasedOnPointMeasurements` · Operation ID: `instrument_operations.guide_objects_in_6d_based_on_point_measurements`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `destination_group` | `optional CollectionObjectName` | Destination Group (goal) | Required |
| Request | 3 | `moving_reference_group` | `optional CollectionObjectName` | Moving Reference Group (attached to objects) | Required |
| Request | 4 | `objects_to_move` | `repeated CollectionObjectName` | Objects to Move | Required |
| Request | 5 | `initial_survey_group` | `optional CollectionObjectName` | Initially surveyed Group (First Position Measurements - Optional) | Omitted |
| Request | 6 | `positional_tolerance` | `optional ToleranceVectorOptions` | Positional Tolerance - Optional | Omitted |
| Request | 7 | `rotational_tolerance` | `optional ToleranceVectorOptions` | Rotational Tolerance - Optional | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GuideObjectsIn6dBasedOnPointMeasurements(GuideObjectsIn6dBasedOnPointMeasurementsRequest) returns (GuideObjectsIn6dBasedOnPointMeasurementsResult);

message GuideObjectsIn6dBasedOnPointMeasurementsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName destination_group = 2;
  optional CollectionObjectName moving_reference_group = 3;
  repeated CollectionObjectName objects_to_move = 4;
  optional CollectionObjectName initial_survey_group = 5;
  optional ToleranceVectorOptions positional_tolerance = 6;
  optional ToleranceVectorOptions rotational_tolerance = 7;
}

message GuideObjectsIn6dBasedOnPointMeasurementsResult {
  MpExecutionDetails execution = 1000;
}
```

## Move Objects in 6D using Instrument Updates {/* #move-objects-in-6d-using-instrument-updates */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates)

`/briosa.InstrumentOperations/MoveObjectsIn6dUsingInstrumentUpdates` · Operation ID: `instrument_operations.move_objects_in_6d_using_instrument_updates`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `objects_to_move` | `repeated CollectionObjectName` | Objects to Move | Required |
| Request | 3 | `measurement_mode` | `optional string` | Measurement Mode | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MoveObjectsIn6dUsingInstrumentUpdates(MoveObjectsIn6dUsingInstrumentUpdatesRequest) returns (MoveObjectsIn6dUsingInstrumentUpdatesResult);

message MoveObjectsIn6dUsingInstrumentUpdatesRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName objects_to_move = 2;
  optional string measurement_mode = 3;
}

message MoveObjectsIn6dUsingInstrumentUpdatesResult {
  MpExecutionDetails execution = 1000;
}
```

## Align Two Targets with Axis (WCF - X) {/* #align-two-targets-with-axis-wcf---x */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x)

`/briosa.InstrumentOperations/AlignTwoTargetsWithAxisWcfX` · Operation ID: `instrument_operations.align_two_targets_with_axis_wcf_x`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `first_point_on_axis` | `optional PointName` | First Point On Axis | Required |
| Request | 3 | `second_point_on_axis` | `optional PointName` | Second Point On Axis | Required |
| Request | 4 | `initial_measured_group` | `optional CollectionObjectName` | Initial Measured Group | Required |
| Request | 5 | `rotational_tolerance` | `optional ToleranceVectorOptions` | Rotational Tolerance - Optional | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AlignTwoTargetsWithAxisWcfX(AlignTwoTargetsWithAxisWcfXRequest) returns (AlignTwoTargetsWithAxisWcfXResult);

message AlignTwoTargetsWithAxisWcfXRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName first_point_on_axis = 2;
  optional PointName second_point_on_axis = 3;
  optional CollectionObjectName initial_measured_group = 4;
  optional ToleranceVectorOptions rotational_tolerance = 5;
}

message AlignTwoTargetsWithAxisWcfXResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Interface Response Timeout {/* #get-instrument-interface-response-timeout */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout)

`/briosa.InstrumentOperations/GetInstrumentInterfaceResponseTimeout` · Operation ID: `instrument_operations.get_instrument_interface_response_timeout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `timeout` | `double` | Resulting Timeout Value (secs) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentInterfaceResponseTimeout(GetInstrumentInterfaceResponseTimeoutRequest) returns (GetInstrumentInterfaceResponseTimeoutResult);

message GetInstrumentInterfaceResponseTimeoutRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetInstrumentInterfaceResponseTimeoutResult {
  double timeout = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `timeout` | Time in seconds. |

## Set Instrument Interface Response Timeout {/* #set-instrument-interface-response-timeout */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout)

`/briosa.InstrumentOperations/SetInstrumentInterfaceResponseTimeout` · Operation ID: `instrument_operations.set_instrument_interface_response_timeout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `timeout` | `optional double` | Timeout (secs) | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentInterfaceResponseTimeout(SetInstrumentInterfaceResponseTimeoutRequest) returns (SetInstrumentInterfaceResponseTimeoutResult);

message SetInstrumentInterfaceResponseTimeoutRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double timeout = 2;
}

message SetInstrumentInterfaceResponseTimeoutResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `timeout` | Time in seconds. |

## Get Current Trapping Status {/* #get-current-trapping-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status)

`/briosa.InstrumentOperations/GetCurrentTrappingStatus` · Operation ID: `instrument_operations.get_current_trapping_status`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `status` | `optional CurrentTrappingStatus` | Instrument ID | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetCurrentTrappingStatus(GetCurrentTrappingStatusRequest) returns (GetCurrentTrappingStatusResult);

message GetCurrentTrappingStatusRequest {}

message GetCurrentTrappingStatusResult {
  optional CurrentTrappingStatus status = 1;
  MpExecutionDetails execution = 1000;
}
```

## Wait For Trapping To Complete {/* #wait-for-trapping-to-complete */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete)

`/briosa.InstrumentOperations/WaitForTrappingToComplete` · Operation ID: `instrument_operations.wait_for_trapping_to_complete`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc WaitForTrappingToComplete(WaitForTrappingToCompleteRequest) returns (WaitForTrappingToCompleteResult);

message WaitForTrappingToCompleteRequest {}

message WaitForTrappingToCompleteResult {
  MpExecutionDetails execution = 1000;
}
```

## Jump Instrument To New Location {/* #jump-instrument-to-new-location */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location)

`/briosa.InstrumentOperations/JumpInstrumentToNewLocation` · Operation ID: `instrument_operations.jump_instrument_to_new_location`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `live_instrument` | `optional CollectionInstrumentId` | Live Instrument ID | Required |
| Request | 2 | `hide_previous_instrument` | `optional bool` | Hide the Previous Instrument? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc JumpInstrumentToNewLocation(JumpInstrumentToNewLocationRequest) returns (JumpInstrumentToNewLocationResult);

message JumpInstrumentToNewLocationRequest {
  optional CollectionInstrumentId live_instrument = 1;
  optional bool hide_previous_instrument = 2;
}

message JumpInstrumentToNewLocationResult {
  MpExecutionDetails execution = 1000;
}
```

## Quick Align {/* #quick-align */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#quick-align)

`/briosa.InstrumentOperations/QuickAlign` · Operation ID: `instrument_operations.quick_align`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | `repeated CollectionInstrumentId` | Instrument IDs | Required |
| Request | 2 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Request | 3 | `nominal_points` | `repeated PointName` | Nominal Points (optional) | Omitted |
| Request | 4 | `nominal_point_of_view_names` | `repeated string` | Nominal Point of View Names (optional) | Omitted |
| Request | 5 | `align_to_individual_faces_only` | `optional bool` | Align to Individual Faces Only (not Entire Surface) | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc QuickAlign(QuickAlignRequest) returns (QuickAlignResult);

message QuickAlignRequest {
  repeated CollectionInstrumentId instruments = 1;
  repeated CollectionObjectName objects = 2;
  repeated PointName nominal_points = 3;
  repeated string nominal_point_of_view_names = 4;
  optional bool align_to_individual_faces_only = 5;
}

message QuickAlignResult {
  MpExecutionDetails execution = 1000;
}
```

## Align Cloud to CAD {/* #align-cloud-to-cad */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad)

`/briosa.InstrumentOperations/AlignCloudToCad` · Operation ID: `instrument_operations.align_cloud_to_cad`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud` | `optional CollectionObjectName` | Cloud Name | Required |
| Request | 2 | `surfaces` | `repeated CollectionObjectName` | Surfaces | Required |
| Request | 3 | `maximum_coarse_cad_mesh_edge_length` | `optional double` | Maximum Coarse CAD Mesh Edge Length | 0.000000 |
| Request | 4 | `use_fine_cad_mesh` | `optional bool` | Use Fine CAD Mesh (50% of Coarse)? | false |
| Request | 5 | `execute_alignment` | `optional bool` | Execute Alignment? | true |
| Result | 1 | `alignment` | `optional CloudToCadAlignmentResult` | Resultant Transform in Working Frame | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AlignCloudToCad(AlignCloudToCadRequest) returns (AlignCloudToCadResult);

message AlignCloudToCadRequest {
  optional CollectionObjectName cloud = 1;
  repeated CollectionObjectName surfaces = 2;
  optional double maximum_coarse_cad_mesh_edge_length = 3;
  optional bool use_fine_cad_mesh = 4;
  optional bool execute_alignment = 5;
}

message AlignCloudToCadResult {
  optional CloudToCadAlignmentResult alignment = 1;
  MpExecutionDetails execution = 1000;
}
```

## Start GD&amp;T Inspection Design {/* #start-gdt-inspection-design */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design)

`/briosa.InstrumentOperations/StartGdtInspectionDesign` · Operation ID: `instrument_operations.start_gdt_inspection_design`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection Name | Required |
| Request | 2 | `filter` | `optional InspectionFilter` | Filter (ALL/CHECKS/DATUMS) | ALL |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StartGdtInspectionDesign(StartGdtInspectionDesignRequest) returns (StartGdtInspectionDesignResult);

message StartGdtInspectionDesignRequest {
  optional CollectionName collection = 1;
  optional InspectionFilter filter = 2;
}

message StartGdtInspectionDesignResult {
  MpExecutionDetails execution = 1000;
}
```

## Start GD&amp;T Inspection Rehearse {/* #start-gdt-inspection-rehearse */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse)

`/briosa.InstrumentOperations/StartGdtInspectionRehearse` · Operation ID: `instrument_operations.start_gdt_inspection_rehearse`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection Name | Required |
| Request | 2 | `filter` | `optional InspectionFilter` | Filter (ALL/CHECKS/DATUMS) | ALL |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StartGdtInspectionRehearse(StartGdtInspectionRehearseRequest) returns (StartGdtInspectionRehearseResult);

message StartGdtInspectionRehearseRequest {
  optional CollectionName collection = 1;
  optional InspectionFilter filter = 2;
}

message StartGdtInspectionRehearseResult {
  MpExecutionDetails execution = 1000;
}
```

## Start GD&amp;T Inspection {/* #start-gdt-inspection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection)

`/briosa.InstrumentOperations/StartGdtInspection` · Operation ID: `instrument_operations.start_gdt_inspection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `collection` | `optional CollectionName` | Collection Name | Required |
| Request | 3 | `filter` | `optional InspectionFilter` | Filter (ALL/CHECKS/DATUMS) | ALL |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StartGdtInspection(StartGdtInspectionRequest) returns (StartGdtInspectionResult);

message StartGdtInspectionRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionName collection = 2;
  optional InspectionFilter filter = 3;
}

message StartGdtInspectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Remeasure Failed Checks Only {/* #set-remeasure-failed-checks-only */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only)

`/briosa.InstrumentOperations/SetRemeasureFailedChecksOnly` · Operation ID: `instrument_operations.set_remeasure_failed_checks_only`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRemeasureFailedChecksOnly(SetRemeasureFailedChecksOnlyRequest) returns (SetRemeasureFailedChecksOnlyResult);

message SetRemeasureFailedChecksOnlyRequest {
  optional CollectionName collection = 1;
}

message SetRemeasureFailedChecksOnlyResult {
  MpExecutionDetails execution = 1000;
}
```

## Associate Objects with Instrument {/* #associate-objects-with-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument)

`/briosa.InstrumentOperations/AssociateObjectsWithInstrument` · Operation ID: `instrument_operations.associate_objects_with_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AssociateObjectsWithInstrument(AssociateObjectsWithInstrumentRequest) returns (AssociateObjectsWithInstrumentResult);

message AssociateObjectsWithInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName objects = 2;
}

message AssociateObjectsWithInstrumentResult {
  MpExecutionDetails execution = 1000;
}
```

## Disassociate Objects from Instrument {/* #disassociate-objects-from-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument)

`/briosa.InstrumentOperations/DisassociateObjectsFromInstrument` · Operation ID: `instrument_operations.disassociate_objects_from_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DisassociateObjectsFromInstrument(DisassociateObjectsFromInstrumentRequest) returns (DisassociateObjectsFromInstrumentResult);

message DisassociateObjectsFromInstrumentRequest {
  repeated CollectionObjectName objects = 1;
}

message DisassociateObjectsFromInstrumentResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Collection Object Name Ref List from Objects associated with Instruments {/* #make-collection-object-name-ref-list-from-objects-associated-with-instruments */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments)

`/briosa.InstrumentOperations/MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstruments` · Operation ID: `instrument_operations.make_collection_object_name_ref_list_from_objects_associated_with_instruments`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | `repeated CollectionInstrumentId` | Instrument IDs | Required |
| Result | 1 | `objects` | `repeated CollectionObjectName` | Resultant Collection Object Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstruments(MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsRequest) returns (MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsResult);

message MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsRequest {
  repeated CollectionInstrumentId instruments = 1;
}

message MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsResult {
  repeated CollectionObjectName objects = 1;
  MpExecutionDetails execution = 1000;
}
```

## Combine Point Groups {/* #combine-point-groups */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#combine-point-groups)

`/briosa.InstrumentOperations/CombinePointGroups` · Operation ID: `instrument_operations.combine_point_groups`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `groups_to_combine` | `repeated CollectionObjectName` | Groups to Combine | Required |
| Request | 2 | `combined_point_group` | `optional CollectionObjectName` | Combined Point Group | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CombinePointGroups(CombinePointGroupsRequest) returns (CombinePointGroupsResult);

message CombinePointGroupsRequest {
  repeated CollectionObjectName groups_to_combine = 1;
  optional CollectionObjectName combined_point_group = 2;
}

message CombinePointGroupsResult {
  MpExecutionDetails execution = 1000;
}
```

## Dissect Point Group {/* #dissect-point-group */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#dissect-point-group)

`/briosa.InstrumentOperations/DissectPointGroup` · Operation ID: `instrument_operations.dissect_point_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_to_dissect` | `optional CollectionObjectName` | Group to Dissect | Required |
| Request | 2 | `base_name_for_dissected_groups` | `optional string` | Base Name for Disected Groups | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DissectPointGroup(DissectPointGroupRequest) returns (DissectPointGroupResult);

message DissectPointGroupRequest {
  optional CollectionObjectName group_to_dissect = 1;
  optional string base_name_for_dissected_groups = 2;
}

message DissectPointGroupResult {
  MpExecutionDetails execution = 1000;
}
```

## Synchronized Measurement (Master/Slave) {/* #synchronized-measurement-masterslave */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave)

`/briosa.InstrumentOperations/SynchronizedMeasurementMasterSlave` · Operation ID: `instrument_operations.synchronized_measurement_master_slave`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `master_instrument` | `optional CollectionInstrumentId` | Master Instrument | Required |
| Request | 2 | `slave_instrument` | `optional CollectionInstrumentId` | Slave Instrument | Required |
| Request | 3 | `slave_group_suffix` | `optional string` | Slave Group Suffix | _Slave |
| Request | 4 | `locate_one_of_the_instruments` | `optional bool` | Locate One of the Instruments? | true |
| Request | 5 | `locate_master` | `optional bool` | Locate Master (FALSE = Slave) | false |
| Request | 6 | `wait_for_completion` | `optional bool` | Wait for Completion? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SynchronizedMeasurementMasterSlave(SynchronizedMeasurementMasterSlaveRequest) returns (SynchronizedMeasurementMasterSlaveResult);

message SynchronizedMeasurementMasterSlaveRequest {
  optional CollectionInstrumentId master_instrument = 1;
  optional CollectionInstrumentId slave_instrument = 2;
  optional string slave_group_suffix = 3;
  optional bool locate_one_of_the_instruments = 4;
  optional bool locate_master = 5;
  optional bool wait_for_completion = 6;
}

message SynchronizedMeasurementMasterSlaveResult {
  MpExecutionDetails execution = 1000;
}
```

## Create New Dynamic Reference {/* #create-new-dynamic-reference */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference)

`/briosa.InstrumentOperations/CreateNewDynamicReference` · Operation ID: `instrument_operations.create_new_dynamic_reference`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `points_defining_dynamic_reference` | `repeated PointName` | Points defining Dynamic Reference | Required |
| Request | 3 | `dynamic_reference_name` | `optional string` | Dynamic Reference Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateNewDynamicReference(CreateNewDynamicReferenceRequest) returns (CreateNewDynamicReferenceResult);

message CreateNewDynamicReferenceRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated PointName points_defining_dynamic_reference = 2;
  optional string dynamic_reference_name = 3;
}

message CreateNewDynamicReferenceResult {
  MpExecutionDetails execution = 1000;
}
```

## Calculate TCP Fixture Uncertainties {/* #calculate-tcp-fixture-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties)

`/briosa.InstrumentOperations/CalculateTcpFixtureUncertainties` · Operation ID: `instrument_operations.calculate_tcp_fixture_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tcp_fixture` | `optional CollectionObjectName` | TCP Fixture | Required |
| Request | 2 | `tcp_in_working` | `optional Transform` | TCP In Working Frame | Required |
| Request | 3 | `tcp_measurements` | `repeated PointName` | TCP Measurements | Required |
| Result | 1 | `uncertainties` | `optional TcpFixtureUncertainties` | Result Notes | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CalculateTcpFixtureUncertainties(CalculateTcpFixtureUncertaintiesRequest) returns (CalculateTcpFixtureUncertaintiesResult);

message CalculateTcpFixtureUncertaintiesRequest {
  optional CollectionObjectName tcp_fixture = 1;
  optional Transform tcp_in_working = 2;
  repeated PointName tcp_measurements = 3;
}

message CalculateTcpFixtureUncertaintiesResult {
  optional TcpFixtureUncertainties uncertainties = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct TCP Fixture {/* #construct-tcp-fixture */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture)

`/briosa.InstrumentOperations/ConstructTcpFixture` · Operation ID: `instrument_operations.construct_tcp_fixture`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `requested_tcp_fixture` | `optional CollectionObjectName` | Requested TCP Fixture | Required |
| Request | 2 | `point_match_threshold` | `optional double` | Point Match Threshold | 0.000000 |
| Request | 3 | `replace_existing_tcp_fixture` | `optional bool` | Replace Existing TCP Fixture | false |
| Result | 1 | `resulting_tcp_fixture` | `optional CollectionObjectName` | Resulting TCP Fixture | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructTcpFixture(ConstructTcpFixtureRequest) returns (ConstructTcpFixtureResult);

message ConstructTcpFixtureRequest {
  optional CollectionObjectName requested_tcp_fixture = 1;
  optional double point_match_threshold = 2;
  optional bool replace_existing_tcp_fixture = 3;
}

message ConstructTcpFixtureResult {
  optional CollectionObjectName resulting_tcp_fixture = 1;
  MpExecutionDetails execution = 1000;
}
```

## Add Nominal Point to TCP Fixture {/* #add-nominal-point-to-tcp-fixture */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture)

`/briosa.InstrumentOperations/AddNominalPointToTcpFixture` · Operation ID: `instrument_operations.add_nominal_point_to_tcp_fixture`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tcp_fixture` | `optional CollectionObjectName` | TCP Fixture | Required |
| Request | 2 | `nominal_point_name` | `optional string` | Nominal Point Name | Empty |
| Request | 3 | `nominal_point_location` | `optional Vector` | Nominal Point Location | Required |
| Request | 4 | `var_xx` | `optional double` | Var XX | 0.000000 |
| Request | 5 | `var_yy` | `optional double` | Var YY | 0.000000 |
| Request | 6 | `var_zz` | `optional double` | Var ZZ | 0.000000 |
| Request | 7 | `covar_xy` | `optional double` | CoVar XY | 0.000000 |
| Request | 8 | `covar_xz` | `optional double` | CoVar XZ | 0.000000 |
| Request | 9 | `covar_yz` | `optional double` | CoVar YZ | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddNominalPointToTcpFixture(AddNominalPointToTcpFixtureRequest) returns (AddNominalPointToTcpFixtureResult);

message AddNominalPointToTcpFixtureRequest {
  optional CollectionObjectName tcp_fixture = 1;
  optional string nominal_point_name = 2;
  optional Vector nominal_point_location = 3;
  optional double var_xx = 4;
  optional double var_yy = 5;
  optional double var_zz = 6;
  optional double covar_xy = 7;
  optional double covar_xz = 8;
  optional double covar_yz = 9;
}

message AddNominalPointToTcpFixtureResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Last Solved TCP Fixture Uncertainty Covariance Matrix {/* #get-last-solved-tcp-fixture-uncertainty-covariance-matrix */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix)

`/briosa.InstrumentOperations/GetLastSolvedTcpFixtureUncertaintyCovarianceMatrix` · Operation ID: `instrument_operations.get_last_solved_tcp_fixture_uncertainty_covariance_matrix`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tcp_fixture` | `optional CollectionObjectName` | TCP Fixture | Required |
| Result | 1 | `covariance_matrix` | `optional UncertaintyCovarianceMatrix` | Covar Row 6 | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetLastSolvedTcpFixtureUncertaintyCovarianceMatrix(GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixRequest) returns (GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixResult);

message GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixRequest {
  optional CollectionObjectName tcp_fixture = 1;
}

message GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixResult {
  optional UncertaintyCovarianceMatrix covariance_matrix = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Base Uncertainty Covariance Matrix WRT Base {/* #set-instrument-base-uncertainty-covariance-matrix-wrt-base */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base)

`/briosa.InstrumentOperations/SetInstrumentBaseUncertaintyCovarianceMatrixWrtBase` · Operation ID: `instrument_operations.set_instrument_base_uncertainty_covariance_matrix_wrt_base`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `covariance_matrix` | `optional UncertaintyCovarianceMatrix` | Covar Row 6 | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentBaseUncertaintyCovarianceMatrixWrtBase(SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseRequest) returns (SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseResult);

message SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseRequest {
  optional CollectionInstrumentId instrument = 1;
  optional UncertaintyCovarianceMatrix covariance_matrix = 2;
}

message SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Base Uncertainty Covariance Matrix WRT WORLD {/* #set-instrument-base-uncertainty-covariance-matrix-wrt-world */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world)

`/briosa.InstrumentOperations/SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorld` · Operation ID: `instrument_operations.set_instrument_base_uncertainty_covariance_matrix_wrt_world`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `covariance_matrix` | `optional UncertaintyCovarianceMatrix` | Covar Row 6 | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorld(SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldRequest) returns (SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldResult);

message SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldRequest {
  optional CollectionInstrumentId instrument = 1;
  optional UncertaintyCovarianceMatrix covariance_matrix = 2;
}

message SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Base Uncertainty Covariance Matrix WRT WORLD {/* #get-instrument-base-uncertainty-covariance-matrix-wrt-world */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world)

`/briosa.InstrumentOperations/GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorld` · Operation ID: `instrument_operations.get_instrument_base_uncertainty_covariance_matrix_wrt_world`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1 | `covariance_matrix` | `optional UncertaintyCovarianceMatrix` | Covar Row 6 | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorld(GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldRequest) returns (GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldResult);

message GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldResult {
  optional UncertaintyCovarianceMatrix covariance_matrix = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct Measured Point Uncertainty Ellipsoids {/* #construct-measured-point-uncertainty-ellipsoids */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids)

`/briosa.InstrumentOperations/ConstructMeasuredPointUncertaintyEllipsoids` · Operation ID: `instrument_operations.construct_measured_point_uncertainty_ellipsoids`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `measurements` | `repeated PointName` | Measurements | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructMeasuredPointUncertaintyEllipsoids(ConstructMeasuredPointUncertaintyEllipsoidsRequest) returns (ConstructMeasuredPointUncertaintyEllipsoidsResult);

message ConstructMeasuredPointUncertaintyEllipsoidsRequest {
  repeated PointName measurements = 1;
}

message ConstructMeasuredPointUncertaintyEllipsoidsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get WRTL Channel and Status {/* #get-wrtl-channel-and-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status)

`/briosa.InstrumentOperations/GetWrtlChannelAndStatus` · Operation ID: `instrument_operations.get_wrtl_channel_and_status`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument | Required |
| Result | 1 | `status` | `optional WrtlChannelStatus` | Active Channel | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetWrtlChannelAndStatus(GetWrtlChannelAndStatusRequest) returns (GetWrtlChannelAndStatusResult);

message GetWrtlChannelAndStatusRequest {
  optional CollectionInstrumentId instrument = 1;
}

message GetWrtlChannelAndStatusResult {
  optional WrtlChannelStatus status = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set WRTL Channel {/* #set-wrtl-channel */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel)

`/briosa.InstrumentOperations/SetWrtlChannel` · Operation ID: `instrument_operations.set_wrtl_channel`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument | Required |
| Request | 2 | `channel` | `optional int32` | Channel | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetWrtlChannel(SetWrtlChannelRequest) returns (SetWrtlChannelResult);

message SetWrtlChannelRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 channel = 2;
}

message SetWrtlChannelResult {
  MpExecutionDetails execution = 1000;
}
```

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Instrument Measurement Mode/Profile {/* #get-instrument-measurement-modeprofile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Instrument Group and Target {/* #get-instrument-group-and-target */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Instrument Targeting {/* #get-instrument-targeting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Scan within perimeter {/* #scan-within-perimeter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Edit Scan Perimeter Profile {/* #edit-scan-perimeter-profile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Scan CAD Faces {/* #scan-cad-faces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Inspection Verification Mode {/* #get-inspection-verification-mode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Inspection Verification Mode {/* #set-inspection-verification-mode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa/tree/3306d43253a1e4e41b75b83360ad4f6f2b7f60b7/targets/2024.1.0508.5)
