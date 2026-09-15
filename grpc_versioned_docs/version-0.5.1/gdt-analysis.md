---
title: GDT Operations / GDT Analysis
description: Released gRPC contracts for selected GDT Analysis MP commands.
toc_max_heading_level: 2
---

# GDT Operations / GDT Analysis

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs use `briosa.GdtOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## Shared Types

```proto
enum GdtDistanceBetweenMode {
  GDT_DISTANCE_BETWEEN_MODE_UNSPECIFIED = 0;
  GDT_DISTANCE_BETWEEN_MODE_CENTROID = 1;
  GDT_DISTANCE_BETWEEN_MODE_MIN_MAX = 2;
}

enum GdtEvaluationMethod {
  GDT_EVALUATION_METHOD_UNSPECIFIED = 0;
  GDT_EVALUATION_METHOD_NONE = 1;
  GDT_EVALUATION_METHOD_ASME_1994 = 2;
  GDT_EVALUATION_METHOD_ASME_2009 = 3;
  GDT_EVALUATION_METHOD_ASME_2018 = 4;
  GDT_EVALUATION_METHOD_ISO_1983 = 5;
  GDT_EVALUATION_METHOD_ISO_2004 = 6;
  GDT_EVALUATION_METHOD_ISO_2017 = 7;
}

enum GdtExtendedEvaluationMethod {
  GDT_EXTENDED_EVALUATION_METHOD_UNSPECIFIED = 0;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES = 1;
  GDT_EXTENDED_EVALUATION_METHOD_HIGH_POINT = 2;
  GDT_EXTENDED_EVALUATION_METHOD_MINIMUM_SEPARATION = 3;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_HIGH_POINT = 4;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_3D = 5;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_HIGH_POINT_1_STD_DEV = 6;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_HIGH_POINT_2_STD_DEV = 7;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_HIGH_POINT_HALFWAY = 8;
  GDT_EXTENDED_EVALUATION_METHOD_MINIMUM_SEPARATION_HIGH_POINT = 9;
  GDT_EXTENDED_EVALUATION_METHOD_EQUALIZED_HIGH_POINT = 10;
  GDT_EXTENDED_EVALUATION_METHOD_EQUALIZED_LSQ_HIGH_POINT = 11;
}

message GdtMeasurements {
  repeated PointName point_names = 1;
  repeated CollectionObjectName cloud_names = 2;
}

message FeatureCheckDatumReference {
  string reference_string = 1;
  string cad_faces = 2;
  repeated CollectionObjectName sa_objects = 3;
  repeated CollectionObjectName auxiliary_sa_objects = 4;
  repeated CollectionItemName geometry_relationships = 5;
  repeated CollectionItemName auxiliary_geometry_relationships = 6;
}

message FeatureCheckCylinderEvalOptions {
  bool enable_actual_diameter_override = 1;
  double actual_diameter_override = 2;
}

message GdtOptions {
  bool use_high_points = 1;
  bool extrapolate_axial_extent = 2;
  bool exclude_from_auto_evaluation = 3;
  optional GdtDistanceBetweenMode distance_between_mode = 4;
  optional GdtEvaluationMethod evaluation_method = 5;
  bool create_actual_features = 6;
  bool create_solved_points = 7;
  double cross_section_criteria = 8;
  bool enable_auto_feature_detection = 9;
}

message FeatureCheckReportingOptions {
  bool show_feature_control_frame_summary = 1;
  bool include_title = 2;
  bool show_datum_and_tolerance_summary = 3;
  bool show_feature_summary = 4;
  bool only_create_failed_vectors = 5;
  bool show_point_details = 6;
  bool show_lower_tier_tables = 7;
}
```

`GdtExtendedEvaluationMethod` is a closed union. Each geometry field accepts
only the choices offered by that exact MP argument; the server rejects a known
enum value that is invalid for the selected geometry.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Get Feature Check Datum References | `GetFeatureCheckDatumReferences` | `gdt_operations.get_feature_check_datum_references` |
| Get Datum Measurements | `GetDatumMeasurements` | `gdt_operations.get_datum_measurements` |
| Set Datum Measurements | `SetDatumMeasurements` | `gdt_operations.set_datum_measurements` |
| Get Feature Check Measurements | `GetFeatureCheckMeasurements` | `gdt_operations.get_feature_check_measurements` |
| Set Feature Check Measurements | `SetFeatureCheckMeasurements` | `gdt_operations.set_feature_check_measurements` |
| Get Feature Check Cylinder Eval Options | `GetFeatureCheckCylinderEvalOptions` | `gdt_operations.get_feature_check_cylinder_eval_options` |
| Set Feature Check Cylinder Eval Options | `SetFeatureCheckCylinderEvalOptions` | `gdt_operations.set_feature_check_cylinder_eval_options` |
| Feature Inspection Auto Filter | `FeatureInspectionAutoFilter` | `gdt_operations.feature_inspection_auto_filter` |
| Set Global Force Simultaneous Evaluation | `SetGlobalForceSimultaneousEvaluation` | `gdt_operations.set_global_force_simultaneous_evaluation` |
| Evaluate Feature Check | `EvaluateFeatureCheck` | `gdt_operations.evaluate_feature_check` |
| Evaluate Feature Checks | `EvaluateFeatureChecks` | `gdt_operations.evaluate_feature_checks` |
| Generate Feature Check Summary | `GenerateFeatureCheckSummary` | `gdt_operations.generate_feature_check_summary` |
| Start/Stop Feature Check Trapping | `StartStopFeatureCheckTrapping` | `gdt_operations.start_stop_feature_check_trapping` |
| Enable/Disable Datum Alignment for Feature Check | `EnableDisableDatumAlignmentForFeatureCheck` | `gdt_operations.enable_disable_datum_alignment_for_feature_check` |
| Datum Alignment | `DatumAlignment` | `gdt_operations.datum_alignment` |
| Get GD&amp;T Options | `GetGdtOptions` | `gdt_operations.get_gdt_options` |
| Set GD&amp;T Options | `SetGdtOptions` | `gdt_operations.set_gdt_options` |
| Set GD&amp;T Extended Options | `SetGdtExtendedOptions` | `gdt_operations.set_gdt_extended_options` |
| Get GD&amp;T Extended Options | `GetGdtExtendedOptions` | `gdt_operations.get_gdt_extended_options` |
| Refresh Datums/Feature Checks from Annotations | `RefreshDatumsFeatureChecksFromAnnotations` | `gdt_operations.refresh_datums_feature_checks_from_annotations` |
| Set Feature Check Reporting Frame | `SetFeatureCheckReportingFrame` | `gdt_operations.set_feature_check_reporting_frame` |
| Get Feature Check Reporting Frame | `GetFeatureCheckReportingFrame` | `gdt_operations.get_feature_check_reporting_frame` |
| Set Feature Check Reporting Options | `SetFeatureCheckReportingOptions` | `gdt_operations.set_feature_check_reporting_options` |
| Get Feature Check Reporting Options | `GetFeatureCheckReportingOptions` | `gdt_operations.get_feature_check_reporting_options` |

Each route is `/briosa.GdtOperations/<RPC>`.

## Feature Check and Datum Data

```proto
message GetFeatureCheckDatumReferencesRequest {
  optional CollectionItemName feature_check = 1;
}
message GetFeatureCheckDatumReferencesResult {
  optional FeatureCheckDatumReference datum_1 = 1;
  optional FeatureCheckDatumReference datum_2 = 2;
  optional FeatureCheckDatumReference datum_3 = 3;
  MpExecutionDetails execution = 1000;
}

message GetDatumMeasurementsRequest {
  optional CollectionItemName datum = 1;
}
message GetDatumMeasurementsResult {
  optional GdtMeasurements measurements = 1;
  MpExecutionDetails execution = 1000;
}

message SetDatumMeasurementsRequest {
  optional CollectionItemName datum = 1;
  repeated PointName point_names = 2;
  repeated CollectionObjectName cloud_names = 3;
  optional bool replace_existing_measurements = 4;
}
message SetDatumMeasurementsResult { MpExecutionDetails execution = 1000; }

message GetFeatureCheckMeasurementsRequest {
  optional CollectionItemName feature_check = 1;
}
message GetFeatureCheckMeasurementsResult {
  optional GdtMeasurements measurements = 1;
  MpExecutionDetails execution = 1000;
}

message SetFeatureCheckMeasurementsRequest {
  optional CollectionItemName feature_check = 1;
  repeated PointName point_names = 2;
  repeated CollectionObjectName cloud_names = 3;
  optional bool replace_existing_measurements = 4;
}
message SetFeatureCheckMeasurementsResult { MpExecutionDetails execution = 1000; }

message GetFeatureCheckCylinderEvalOptionsRequest {
  optional CollectionItemName feature_check = 1;
}
message GetFeatureCheckCylinderEvalOptionsResult {
  optional FeatureCheckCylinderEvalOptions options = 1;
  MpExecutionDetails execution = 1000;
}

message SetFeatureCheckCylinderEvalOptionsRequest {
  optional CollectionItemName feature_check = 1;
  optional bool enable_actual_diameter_override = 2;
  optional double actual_diameter_override = 3;
}
message SetFeatureCheckCylinderEvalOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

Every Datum or Feature Check identity is required. Measurement lists may be
empty; `replace_existing_measurements` defaults to `false`. Cylinder override
settings default to `false` and `0.0`.

## Filtering and Evaluation

```proto
message FeatureInspectionAutoFilterRequest {
  repeated PointName point_names = 1;
  repeated CollectionObjectName group_names = 2;
  repeated CollectionObjectName cloud_names = 3;
  optional double surface_offset = 4;
  optional double edge_offset = 5;
  optional OffsetDirectionType offset_direction = 6;
  optional bool include_points_within_cylinder_axis_proximity = 7;
  optional bool enforce_max_points_per_face_in_output = 8;
  optional int32 max_points_per_face = 9;
  repeated CollectionItemName feature_check_name_list = 10;
  optional bool include_datums = 11;
  optional bool create_cloud_for_each_datum_or_check = 12;
}
message FeatureInspectionAutoFilterResult { MpExecutionDetails execution = 1000; }

message SetGlobalForceSimultaneousEvaluationRequest {
  optional bool global_simultaneous_evaluation = 1;
}
message SetGlobalForceSimultaneousEvaluationResult {
  MpExecutionDetails execution = 1000;
}

message EvaluateFeatureCheckRequest {
  optional CollectionItemName feature_check = 1;
  optional bool perform_evaluation = 2;
  optional bool simultaneous_evaluation = 3;
}
message EvaluateFeatureCheckResult {
  bool check_evaluated = 1;
  string check_result = 2;
  bool non_unique_result = 3;
  double measured_deviation_upper = 4;
  double distance_out_of_tolerance_upper = 5;
  optional WorldTransform eval_delta_transform_upper = 6;
  double measured_deviation_lower = 7;
  double distance_out_of_tolerance_lower = 8;
  optional WorldTransform eval_delta_transform_lower = 9;
  string check_type = 10;
  string tolerance_type = 11;
  double tolerance_simple = 12;
  double tolerance_composite_upper = 13;
  double tolerance_composite_lower = 14;
  double tolerance_range_min = 15;
  double tolerance_range_max = 16;
  double tolerance_nominal_plus_minus_nominal = 17;
  double tolerance_nominal_plus_minus_minus = 18;
  double tolerance_nominal_plus_minus_plus = 19;
  MpExecutionDetails execution = 1000;
}

message EvaluateFeatureChecksRequest {
  repeated CollectionItemName feature_check_list = 1;
  optional bool simultaneous_evaluation = 2;
  optional bool restrict_evaluations_to_listed_checks = 3;
}
message EvaluateFeatureChecksResult {
  int32 total_passed = 1;
  int32 total_failed = 2;
  int32 total_incomplete = 3;
  MpExecutionDetails execution = 1000;
}

message GenerateFeatureCheckSummaryRequest {
  repeated CollectionItemName feature_check_list = 1;
  optional string summary_table_name = 2;
}
message GenerateFeatureCheckSummaryResult { MpExecutionDetails execution = 1000; }
```

Auto-filter defaults are offsets `0.1`, direction `Both`, both limiting options
`false`, maximum points `0`, include Datums `true`, and cloud creation `false`.
Global simultaneous evaluation defaults to `false`. Single evaluation defaults
to perform `true` and simultaneous `false`; batch Booleans default to `false`.
The summary name defaults to `GDT Feature Check Summary`.

## Trapping and Datum Alignment

```proto
message StartStopFeatureCheckTrappingRequest {
  optional CollectionItemName feature_check = 1;
  optional CollectionInstrumentId instrument_id = 2;
  optional bool start_trapping = 3;
}
message StartStopFeatureCheckTrappingResult { MpExecutionDetails execution = 1000; }

message EnableDisableDatumAlignmentForFeatureCheckRequest {
  optional CollectionItemName feature_check = 1;
  optional bool enable_datum_alignment = 2;
  optional bool enable_custom_initial_alignment = 3;
  optional bool enable_initial_datum_alignment = 4;
  optional CollectionItemName alignment = 5;
}
message EnableDisableDatumAlignmentForFeatureCheckResult {
  MpExecutionDetails execution = 1000;
}

message DatumAlignmentRequest {
  optional CollectionItemName feature_check = 1;
  repeated CollectionObjectName objects_to_move = 2;
  repeated CollectionInstrumentId instruments_to_move = 3;
  optional bool apply_feature_check_transform = 4;
}
message DatumAlignmentResult { MpExecutionDetails execution = 1000; }
```

The Feature Check and instrument are required for trapping; `start_trapping`
defaults to `false`. Datum-alignment enable flags default to `true`, `false`,
and `true`; `alignment` is optional. `apply_feature_check_transform` defaults
to `false`. Briosa does not add workflow state or movement safeguards.

## GD&T Options

```proto
message GetGdtOptionsRequest {}
message GetGdtOptionsResult {
  optional GdtOptions options = 1;
  MpExecutionDetails execution = 1000;
}

message SetGdtOptionsRequest {
  optional bool use_high_points = 1;
  optional bool extrapolate_axial_extent = 2;
  optional bool exclude_from_auto_evaluation = 3;
  optional GdtDistanceBetweenMode distance_between_mode = 4;
  optional GdtEvaluationMethod evaluation_method = 5;
  optional bool create_actual_features = 6;
  optional bool create_solved_points = 7;
  optional double cross_section_criteria = 8;
  optional bool enable_auto_feature_detection = 9;
}
message SetGdtOptionsResult { MpExecutionDetails execution = 1000; }

message SetGdtExtendedOptionsRequest {
  optional bool use_extended_options = 1;
  optional GdtExtendedEvaluationMethod circle_extended_options = 2;
  optional GdtExtendedEvaluationMethod cone_extended_options = 3;
  optional GdtExtendedEvaluationMethod cylinder_extended_options = 4;
  optional GdtExtendedEvaluationMethod ellipse_extended_options = 5;
  optional GdtExtendedEvaluationMethod line_extended_options = 6;
  optional GdtExtendedEvaluationMethod open_slot_extended_options = 7;
  optional GdtExtendedEvaluationMethod plane_extended_options = 8;
  optional GdtExtendedEvaluationMethod slot_extended_options = 9;
  optional GdtExtendedEvaluationMethod sphere_extended_options = 10;
}
message SetGdtExtendedOptionsResult { MpExecutionDetails execution = 1000; }

message GetGdtExtendedOptionsRequest {}
message GetGdtExtendedOptionsResult {
  bool use_extended_options = 1;
  MpExecutionDetails execution = 1000;
}
```

Set defaults are `false`, `true`, `true`, `Centroid`, `None`, `false`, `false`,
`0.039370`, and `true` in field order. `GetGdtOptions` returns the seven Boolean
and numeric values exposed by the exact MP command. It does not return Distance
Between Mode or Evaluation Method, so those optional fields remain absent in a
get result.

Extended settings default to enabled with `Least Squares` for every geometry.
The getter deliberately returns only the enable flag because that is the only
output exposed by the exact command.

## Reporting and Annotation Refresh

```proto
message RefreshDatumsFeatureChecksFromAnnotationsRequest {
  optional CollectionName collection = 1;
}
message RefreshDatumsFeatureChecksFromAnnotationsResult {
  MpExecutionDetails execution = 1000;
}

message SetFeatureCheckReportingFrameRequest {
  optional CollectionItemName feature_check = 1;
  optional CollectionObjectName reporting_frame = 2;
}
message SetFeatureCheckReportingFrameResult { MpExecutionDetails execution = 1000; }

message GetFeatureCheckReportingFrameRequest {
  optional CollectionItemName feature_check = 1;
}
message GetFeatureCheckReportingFrameResult {
  optional CollectionObjectName reporting_frame = 1;
  MpExecutionDetails execution = 1000;
}

message SetFeatureCheckReportingOptionsRequest {
  optional CollectionItemName feature_check = 1;
  optional bool show_feature_control_frame_summary = 2;
  optional bool include_title = 3;
  optional bool show_datum_and_tolerance_summary = 4;
  optional bool show_feature_summary = 5;
  optional bool only_create_failed_vectors = 6;
  optional bool show_point_details_summary = 7;
  optional bool show_lower_tier_tables = 8;
}
message SetFeatureCheckReportingOptionsResult { MpExecutionDetails execution = 1000; }

message GetFeatureCheckReportingOptionsRequest {
  optional CollectionItemName feature_check = 1;
}
message GetFeatureCheckReportingOptionsResult {
  optional FeatureCheckReportingOptions options = 1;
  MpExecutionDetails execution = 1000;
}
```

All identities are required. Reporting defaults are `true` followed by six
`false` values. The result's `show_point_details` maps to exact output `Show
Point Details Table?`; the setter maps its corresponding field to `Show Point
Details Summary?`.

:::warning[Partial Reporting-Options Contract]

The exact SDK cannot bind the MP's `Vector Creation` value. These RPCs omit
that field and leave its current SA setting unchanged. The getter returns only
the seven Boolean options the SDK can retrieve.

:::

[Catalog](/mp-command-catalog/commands/gdt-analysis) · [.NET](/api/dotnet/gdt-analysis) · [Python](/api/python/gdt-analysis) · [JavaScript and TypeScript](/api/javascript/gdt-analysis)
