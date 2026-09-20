---
title: Instrument Operations / API - LADAR
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

[SA 2026.1.0529.7](/api/grpc/instrument-operations-api-ladar) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations-api-ladar)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Set LADAR AutoMeas Point {/* #set-ladar-automeas-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-point)

`/briosa.InstrumentOperations/SetLadarAutoMeasPoint` · Operation ID: `instrument_operations.set_ladar_auto_meas_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `sample_time_milliseconds` | `optional int32` | Sample Time MS (1-2000) | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetLadarAutoMeasPoint(SetLadarAutoMeasPointRequest) returns (SetLadarAutoMeasPointResult);

message SetLadarAutoMeasPointRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 sample_time_milliseconds = 2;
}

message SetLadarAutoMeasPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Set LADAR AutoMeas Sphere {/* #set-ladar-automeas-sphere */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-sphere)

`/briosa.InstrumentOperations/SetLadarAutoMeasSphere` · Operation ID: `instrument_operations.set_ladar_auto_meas_sphere`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `sphere_radius` | `optional double` | Sphere Radius | 1.187500 |
| Request | 3 | `scan_line_spacing` | `optional double` | Scan Line Spacing | 0.050000 |
| Request | 4 | `send_center_point` | `optional bool` | Send Center Point? | true |
| Request | 5 | `send_sphere` | `optional bool` | Send Sphere? | false |
| Request | 6 | `send_measured_cloud` | `optional bool` | Send Measured Cloud? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetLadarAutoMeasSphere(SetLadarAutoMeasSphereRequest) returns (SetLadarAutoMeasSphereResult);

message SetLadarAutoMeasSphereRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double sphere_radius = 2;
  optional double scan_line_spacing = 3;
  optional bool send_center_point = 4;
  optional bool send_sphere = 5;
  optional bool send_measured_cloud = 6;
}

message SetLadarAutoMeasSphereResult {
  MpExecutionDetails execution = 1000;
}
```

## Set LADAR FeatureMeas Sphere {/* #set-ladar-featuremeas-sphere */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-sphere)

`/briosa.InstrumentOperations/SetLadarFeatureMeasSphere` · Operation ID: `instrument_operations.set_ladar_feature_meas_sphere`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `scan_line_spacing` | `optional double` | Scan Line Spacing | 0.050000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetLadarFeatureMeasSphere(SetLadarFeatureMeasSphereRequest) returns (SetLadarFeatureMeasSphereResult);

message SetLadarFeatureMeasSphereRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scan_line_spacing = 2;
}

message SetLadarFeatureMeasSphereResult {
  MpExecutionDetails execution = 1000;
}
```

## Set LADAR FeatureMeas Circle {/* #set-ladar-featuremeas-circle */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-circle)

`/briosa.InstrumentOperations/SetLadarFeatureMeasCircle` · Operation ID: `instrument_operations.set_ladar_feature_meas_circle`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `scan_line_spacing` | `optional double` | Scan Line Spacing | 0.050000 |
| Request | 3 | `width_of_extra_area_around_scan` | `optional double` | Width of Extra Area Around Scan | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetLadarFeatureMeasCircle(SetLadarFeatureMeasCircleRequest) returns (SetLadarFeatureMeasCircleResult);

message SetLadarFeatureMeasCircleRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scan_line_spacing = 2;
  optional double width_of_extra_area_around_scan = 3;
}

message SetLadarFeatureMeasCircleResult {
  MpExecutionDetails execution = 1000;
}
```

## Set LADAR FeatureMeas Slot {/* #set-ladar-featuremeas-slot */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-slot)

`/briosa.InstrumentOperations/SetLadarFeatureMeasSlot` · Operation ID: `instrument_operations.set_ladar_feature_meas_slot`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `scan_line_spacing` | `optional double` | Scan Line Spacing | 0.050000 |
| Request | 3 | `width_of_extra_area_around_scan` | `optional double` | Width of Extra Area Around Scan | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetLadarFeatureMeasSlot(SetLadarFeatureMeasSlotRequest) returns (SetLadarFeatureMeasSlotResult);

message SetLadarFeatureMeasSlotRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scan_line_spacing = 2;
  optional double width_of_extra_area_around_scan = 3;
}

message SetLadarFeatureMeasSlotResult {
  MpExecutionDetails execution = 1000;
}
```

## Set LADAR FeatureMeas Cylinder {/* #set-ladar-featuremeas-cylinder */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder)

`/briosa.InstrumentOperations/SetLadarFeatureMeasCylinder` · Operation ID: `instrument_operations.set_ladar_feature_meas_cylinder`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `scan_line_spacing` | `optional double` | Scan Line Spacing | 0.050000 |
| Request | 3 | `width_of_extra_area_around_scan` | `optional double` | Width of Extra Area Around Scan | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetLadarFeatureMeasCylinder(SetLadarFeatureMeasCylinderRequest) returns (SetLadarFeatureMeasCylinderResult);

message SetLadarFeatureMeasCylinderRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scan_line_spacing = 2;
  optional double width_of_extra_area_around_scan = 3;
}

message SetLadarFeatureMeasCylinderResult {
  MpExecutionDetails execution = 1000;
}
```

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
