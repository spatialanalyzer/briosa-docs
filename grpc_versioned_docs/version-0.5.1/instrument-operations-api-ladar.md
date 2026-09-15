---
title: Instrument Operations / API - LADAR
description: Released gRPC contracts for API - LADAR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs use `briosa.InstrumentOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Set LADAR AutoMeas Point | `SetLadarAutoMeasPoint` | `instrument_operations.set_ladar_auto_meas_point` |
| Set LADAR AutoMeas Sphere | `SetLadarAutoMeasSphere` | `instrument_operations.set_ladar_auto_meas_sphere` |
| Set LADAR FeatureMeas Sphere | `SetLadarFeatureMeasSphere` | `instrument_operations.set_ladar_feature_meas_sphere` |
| Set LADAR FeatureMeas Circle | `SetLadarFeatureMeasCircle` | `instrument_operations.set_ladar_feature_meas_circle` |
| Set LADAR FeatureMeas Slot | `SetLadarFeatureMeasSlot` | `instrument_operations.set_ladar_feature_meas_slot` |
| Set LADAR FeatureMeas Cylinder | `SetLadarFeatureMeasCylinder` | `instrument_operations.set_ladar_feature_meas_cylinder` |

## Set LADAR AutoMeas Point

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-point)

```proto
rpc SetLadarAutoMeasPoint(SetLadarAutoMeasPointRequest) returns (SetLadarAutoMeasPointResult);
message SetLadarAutoMeasPointRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 sample_time_milliseconds = 2;
}
message SetLadarAutoMeasPointResult { MpExecutionDetails execution = 1000; }
```

Sample time defaults to the exact MP value `0`. The MP label documents
`1–2000`, but Briosa adds no preflight range check.

## Set LADAR AutoMeas Sphere

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-sphere)

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
message SetLadarAutoMeasSphereResult { MpExecutionDetails execution = 1000; }
```

Defaults are `1.1875`, `0.05`, `true`, `false`, and `false` in field order.

## Set LADAR FeatureMeas Sphere

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-sphere)

```proto
rpc SetLadarFeatureMeasSphere(SetLadarFeatureMeasSphereRequest) returns (SetLadarFeatureMeasSphereResult);
message SetLadarFeatureMeasSphereRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scan_line_spacing = 2;
}
message SetLadarFeatureMeasSphereResult { MpExecutionDetails execution = 1000; }
```

Scan-line spacing defaults to `0.05`.

## Set LADAR FeatureMeas Circle

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-circle)

```proto
rpc SetLadarFeatureMeasCircle(SetLadarFeatureMeasCircleRequest) returns (SetLadarFeatureMeasCircleResult);
message SetLadarFeatureMeasCircleRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scan_line_spacing = 2;
  optional double width_of_extra_area_around_scan = 3;
}
message SetLadarFeatureMeasCircleResult { MpExecutionDetails execution = 1000; }
```

## Set LADAR FeatureMeas Slot

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-slot)

```proto
rpc SetLadarFeatureMeasSlot(SetLadarFeatureMeasSlotRequest) returns (SetLadarFeatureMeasSlotResult);
message SetLadarFeatureMeasSlotRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scan_line_spacing = 2;
  optional double width_of_extra_area_around_scan = 3;
}
message SetLadarFeatureMeasSlotResult { MpExecutionDetails execution = 1000; }
```

## Set LADAR FeatureMeas Cylinder

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder)

```proto
rpc SetLadarFeatureMeasCylinder(SetLadarFeatureMeasCylinderRequest) returns (SetLadarFeatureMeasCylinderResult);
message SetLadarFeatureMeasCylinderRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scan_line_spacing = 2;
  optional double width_of_extra_area_around_scan = 3;
}
message SetLadarFeatureMeasCylinderResult { MpExecutionDetails execution = 1000; }
```

Circle, Slot, and Cylinder spacing defaults to `0.05`; extra scan-area width
defaults to `0.0`. Briosa does not convert units or add setting ranges.
