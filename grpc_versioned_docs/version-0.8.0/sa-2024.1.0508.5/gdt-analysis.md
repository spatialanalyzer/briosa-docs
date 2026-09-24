---
title: GDT Operations / GDT Analysis
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# GDT Operations / GDT Analysis

[SA 2026.1.0529.7](/api/grpc/gdt-analysis) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/gdt-analysis)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Get Feature Check Datum References {/* #get-feature-check-datum-references */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-datum-references)

`/briosa.GdtOperations/GetFeatureCheckDatumReferences` · Operation ID: `gdt_operations.get_feature_check_datum_references`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Result | 1 | `datum_1` | `optional FeatureCheckDatumReference` | Datum 1 Aux Geometry Relationships | — |
| Result | 2 | `datum_2` | `optional FeatureCheckDatumReference` | Datum 2 Aux Geometry Relationships | — |
| Result | 3 | `datum_3` | `optional FeatureCheckDatumReference` | Datum 3 Aux Geometry Relationships | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetFeatureCheckDatumReferences(GetFeatureCheckDatumReferencesRequest) returns (GetFeatureCheckDatumReferencesResult);

message GetFeatureCheckDatumReferencesRequest {
  optional CollectionItemName feature_check = 1;
}

message GetFeatureCheckDatumReferencesResult {
  optional FeatureCheckDatumReference datum_1 = 1;
  optional FeatureCheckDatumReference datum_2 = 2;
  optional FeatureCheckDatumReference datum_3 = 3;
  MpExecutionDetails execution = 1000;
}
```

## Get Datum Measurements {/* #get-datum-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-datum-measurements)

`/briosa.GdtOperations/GetDatumMeasurements` · Operation ID: `gdt_operations.get_datum_measurements`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `datum` | `optional CollectionItemName` | Datum | Required |
| Result | 1 | `measurements` | `optional GdtMeasurements` | Cloud Names | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetDatumMeasurements(GetDatumMeasurementsRequest) returns (GetDatumMeasurementsResult);

message GetDatumMeasurementsRequest {
  optional CollectionItemName datum = 1;
}

message GetDatumMeasurementsResult {
  optional GdtMeasurements measurements = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Datum Measurements {/* #set-datum-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-datum-measurements)

`/briosa.GdtOperations/SetDatumMeasurements` · Operation ID: `gdt_operations.set_datum_measurements`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `datum` | `optional CollectionItemName` | Datum | Required |
| Request | 2 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 3 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 4 | `replace_existing_measurements` | `optional bool` | Replace Existing Measurements? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetDatumMeasurements(SetDatumMeasurementsRequest) returns (SetDatumMeasurementsResult);

message SetDatumMeasurementsRequest {
  optional CollectionItemName datum = 1;
  repeated PointName point_names = 2;
  repeated CollectionObjectName cloud_names = 3;
  optional bool replace_existing_measurements = 4;
}

message SetDatumMeasurementsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Feature Check Measurements {/* #get-feature-check-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-measurements)

`/briosa.GdtOperations/GetFeatureCheckMeasurements` · Operation ID: `gdt_operations.get_feature_check_measurements`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Result | 1 | `measurements` | `optional GdtMeasurements` | Cloud Names | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetFeatureCheckMeasurements(GetFeatureCheckMeasurementsRequest) returns (GetFeatureCheckMeasurementsResult);

message GetFeatureCheckMeasurementsRequest {
  optional CollectionItemName feature_check = 1;
}

message GetFeatureCheckMeasurementsResult {
  optional GdtMeasurements measurements = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Feature Check Measurements {/* #set-feature-check-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-measurements)

`/briosa.GdtOperations/SetFeatureCheckMeasurements` · Operation ID: `gdt_operations.set_feature_check_measurements`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Request | 2 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 3 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 4 | `replace_existing_measurements` | `optional bool` | Replace Existing Measurements? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetFeatureCheckMeasurements(SetFeatureCheckMeasurementsRequest) returns (SetFeatureCheckMeasurementsResult);

message SetFeatureCheckMeasurementsRequest {
  optional CollectionItemName feature_check = 1;
  repeated PointName point_names = 2;
  repeated CollectionObjectName cloud_names = 3;
  optional bool replace_existing_measurements = 4;
}

message SetFeatureCheckMeasurementsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Feature Check Cylinder Eval Options {/* #get-feature-check-cylinder-eval-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-cylinder-eval-options)

`/briosa.GdtOperations/GetFeatureCheckCylinderEvalOptions` · Operation ID: `gdt_operations.get_feature_check_cylinder_eval_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Result | 1 | `options` | `optional FeatureCheckCylinderEvalOptions` | Actual Diameter Override | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetFeatureCheckCylinderEvalOptions(GetFeatureCheckCylinderEvalOptionsRequest) returns (GetFeatureCheckCylinderEvalOptionsResult);

message GetFeatureCheckCylinderEvalOptionsRequest {
  optional CollectionItemName feature_check = 1;
}

message GetFeatureCheckCylinderEvalOptionsResult {
  optional FeatureCheckCylinderEvalOptions options = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Feature Check Cylinder Eval Options {/* #set-feature-check-cylinder-eval-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-cylinder-eval-options)

`/briosa.GdtOperations/SetFeatureCheckCylinderEvalOptions` · Operation ID: `gdt_operations.set_feature_check_cylinder_eval_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Request | 2 | `enable_actual_diameter_override` | `optional bool` | Enable Actual Diameter Override | false |
| Request | 3 | `actual_diameter_override` | `optional double` | Actual Diameter Override | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetFeatureCheckCylinderEvalOptions(SetFeatureCheckCylinderEvalOptionsRequest) returns (SetFeatureCheckCylinderEvalOptionsResult);

message SetFeatureCheckCylinderEvalOptionsRequest {
  optional CollectionItemName feature_check = 1;
  optional bool enable_actual_diameter_override = 2;
  optional double actual_diameter_override = 3;
}

message SetFeatureCheckCylinderEvalOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Feature Inspection Auto Filter {/* #feature-inspection-auto-filter */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#feature-inspection-auto-filter)

`/briosa.GdtOperations/FeatureInspectionAutoFilter` · Operation ID: `gdt_operations.feature_inspection_auto_filter`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 2 | `group_names` | `repeated CollectionObjectName` | Group Names | Required |
| Request | 3 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 4 | `surface_offset` | `optional double` | Surface Offset | 0.100000 |
| Request | 5 | `edge_offset` | `optional double` | Edge Offset | 0.100000 |
| Request | 6 | `offset_direction` | `optional OffsetDirectionType` | Offset Direction | Required |
| Request | 7 | `include_points_within_cylinder_axis_proximity` | `optional bool` | Include Pts within Cylinder Axis Proximity? | false |
| Request | 8 | `enforce_max_points_per_face_in_output` | `optional bool` | Enforce Max Pts per Face in Output? | false |
| Request | 9 | `max_points_per_face` | `optional int32` | Max Pts per Face | 0 |
| Request | 10 | `feature_check_name_list` | `repeated CollectionItemName` | Feature Check Name List | Required |
| Request | 11 | `include_datums` | `optional bool` | Include Datums? | true |
| Request | 12 | `create_cloud_for_each_datum_or_check` | `optional bool` | Create Cloud for Each Datum/Check | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FeatureInspectionAutoFilter(FeatureInspectionAutoFilterRequest) returns (FeatureInspectionAutoFilterResult);

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

message FeatureInspectionAutoFilterResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Global Force Simultaneous Evaluation {/* #set-global-force-simultaneous-evaluation */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-global-force-simultaneous-evaluation)

`/briosa.GdtOperations/SetGlobalForceSimultaneousEvaluation` · Operation ID: `gdt_operations.set_global_force_simultaneous_evaluation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `global_simultaneous_evaluation` | `optional bool` | Global Simultaneous Evaluation? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGlobalForceSimultaneousEvaluation(SetGlobalForceSimultaneousEvaluationRequest) returns (SetGlobalForceSimultaneousEvaluationResult);

message SetGlobalForceSimultaneousEvaluationRequest {
  optional bool global_simultaneous_evaluation = 1;
}

message SetGlobalForceSimultaneousEvaluationResult {
  MpExecutionDetails execution = 1000;
}
```

## Evaluate Feature Check {/* #evaluate-feature-check */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-check)

`/briosa.GdtOperations/EvaluateFeatureCheck` · Operation ID: `gdt_operations.evaluate_feature_check`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Request | 2 | `perform_evaluation` | `optional bool` | Perform Evaluation? | true |
| Request | 3 | `simultaneous_evaluation` | `optional bool` | Simultaneous Evaluation? | false |
| Result | 1 | `check_evaluated` | `bool` | Check Evaluated? | — |
| Result | 2 | `check_result` | `string` | Check Result | — |
| Result | 3 | `non_unique_result` | `bool` | Non-unique Result? | — |
| Result | 4 | `measured_deviation_upper` | `double` | Measured Deviation (Upper) | — |
| Result | 5 | `distance_out_of_tolerance_upper` | `double` | Distance Out of Tolerance (Upper) | — |
| Result | 6 | `eval_delta_transform_upper` | `optional WorldTransform` | Eval Delta Transform (Upper) | — |
| Result | 7 | `measured_deviation_lower` | `double` | Measured Deviation (Lower) | — |
| Result | 8 | `distance_out_of_tolerance_lower` | `double` | Distance Out of Tolerance (Lower) | — |
| Result | 9 | `eval_delta_transform_lower` | `optional WorldTransform` | Eval Delta Transform (Lower) | — |
| Result | 10 | `check_type` | `string` | Check Type | — |
| Result | 11 | `tolerance_type` | `string` | Tolerance Type | — |
| Result | 12 | `tolerance_simple` | `double` | Tolerance, Simple | — |
| Result | 13 | `tolerance_composite_upper` | `double` | Tolerance, Composite (Upper) | — |
| Result | 14 | `tolerance_composite_lower` | `double` | Tolerance, Composite (Lower) | — |
| Result | 15 | `tolerance_range_min` | `double` | Tolerance, Range (Min) | — |
| Result | 16 | `tolerance_range_max` | `double` | Tolerance, Range (Max) | — |
| Result | 17 | `tolerance_nominal_plus_minus_nominal` | `double` | Tolerance, NominalPlusMinus (Nominal) | — |
| Result | 18 | `tolerance_nominal_plus_minus_minus` | `double` | Tolerance, NominalPlusMinus (Minus) | — |
| Result | 19 | `tolerance_nominal_plus_minus_plus` | `double` | Tolerance, NominalPlusMinus (Plus) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EvaluateFeatureCheck(EvaluateFeatureCheckRequest) returns (EvaluateFeatureCheckResult);

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
```

## Evaluate Feature Checks {/* #evaluate-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-checks)

`/briosa.GdtOperations/EvaluateFeatureChecks` · Operation ID: `gdt_operations.evaluate_feature_checks`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check_list` | `repeated CollectionItemName` | Feature Check List | Required |
| Request | 2 | `simultaneous_evaluation` | `optional bool` | Simultaneous Evaluation? | false |
| Request | 3 | `restrict_evaluations_to_listed_checks` | `optional bool` | Restrict Evaluations To Listed Checks? | false |
| Result | 1 | `total_passed` | `int32` | Total Passed | — |
| Result | 2 | `total_failed` | `int32` | Total Failed | — |
| Result | 3 | `total_incomplete` | `int32` | Total Incomplete | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EvaluateFeatureChecks(EvaluateFeatureChecksRequest) returns (EvaluateFeatureChecksResult);

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
```

## Generate Feature Check Summary {/* #generate-feature-check-summary */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#generate-feature-check-summary)

`/briosa.GdtOperations/GenerateFeatureCheckSummary` · Operation ID: `gdt_operations.generate_feature_check_summary`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check_list` | `repeated CollectionItemName` | Feature Check List | Required |
| Request | 2 | `summary_table_name` | `optional string` | Summary Table Name | GDT Feature Check Summary |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GenerateFeatureCheckSummary(GenerateFeatureCheckSummaryRequest) returns (GenerateFeatureCheckSummaryResult);

message GenerateFeatureCheckSummaryRequest {
  repeated CollectionItemName feature_check_list = 1;
  optional string summary_table_name = 2;
}

message GenerateFeatureCheckSummaryResult {
  MpExecutionDetails execution = 1000;
}
```

## Start/Stop Feature Check Trapping {/* #startstop-feature-check-trapping */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#startstop-feature-check-trapping)

`/briosa.GdtOperations/StartStopFeatureCheckTrapping` · Operation ID: `gdt_operations.start_stop_feature_check_trapping`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Request | 2 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 3 | `start_trapping` | `optional bool` | Start Trapping (FALSE = Stop) | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StartStopFeatureCheckTrapping(StartStopFeatureCheckTrappingRequest) returns (StartStopFeatureCheckTrappingResult);

message StartStopFeatureCheckTrappingRequest {
  optional CollectionItemName feature_check = 1;
  optional CollectionInstrumentId instrument_id = 2;
  optional bool start_trapping = 3;
}

message StartStopFeatureCheckTrappingResult {
  MpExecutionDetails execution = 1000;
}
```

## Enable/Disable Datum Alignment for Feature Check {/* #enabledisable-datum-alignment-for-feature-check */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#enabledisable-datum-alignment-for-feature-check)

`/briosa.GdtOperations/EnableDisableDatumAlignmentForFeatureCheck` · Operation ID: `gdt_operations.enable_disable_datum_alignment_for_feature_check`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Request | 2 | `enable_datum_alignment` | `optional bool` | Enable Datum Alignment? | true |
| Request | 3 | `enable_custom_initial_alignment` | `optional bool` | Enable Custom Initial Alignment? | false |
| Request | 4 | `enable_initial_datum_alignment` | `optional bool` | Enable Initial Datum Alignment? | true |
| Request | 5 | `alignment` | `optional CollectionItemName` | Alignment | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EnableDisableDatumAlignmentForFeatureCheck(EnableDisableDatumAlignmentForFeatureCheckRequest) returns (EnableDisableDatumAlignmentForFeatureCheckResult);

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
```

## Datum Alignment {/* #datum-alignment */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#datum-alignment)

`/briosa.GdtOperations/DatumAlignment` · Operation ID: `gdt_operations.datum_alignment`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Request | 2 | `objects_to_move` | `repeated CollectionObjectName` | Objects to Move | Required |
| Request | 3 | `instruments_to_move` | `repeated CollectionInstrumentId` | Instruments to Move | Required |
| Request | 4 | `apply_feature_check_transform` | `optional bool` | Apply Feature Check Transform? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DatumAlignment(DatumAlignmentRequest) returns (DatumAlignmentResult);

message DatumAlignmentRequest {
  optional CollectionItemName feature_check = 1;
  repeated CollectionObjectName objects_to_move = 2;
  repeated CollectionInstrumentId instruments_to_move = 3;
  optional bool apply_feature_check_transform = 4;
}

message DatumAlignmentResult {
  MpExecutionDetails execution = 1000;
}
```

## Get GD&amp;T Options {/* #get-gdt-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-gdt-options)

`/briosa.GdtOperations/GetGdtOptions` · Operation ID: `gdt_operations.get_gdt_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `options` | `optional GdtOptions` | Enable Auto Feature Detection? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGdtOptions(GetGdtOptionsRequest) returns (GetGdtOptionsResult);

message GetGdtOptionsRequest {}

message GetGdtOptionsResult {
  optional GdtOptions options = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set GD&amp;T Options {/* #set-gdt-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-gdt-options)

`/briosa.GdtOperations/SetGdtOptions` · Operation ID: `gdt_operations.set_gdt_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `use_high_points` | `optional bool` | Use High Points | false |
| Request | 2 | `extrapolate_axial_extent` | `optional bool` | Extrapolate Axial Extent | true |
| Request | 3 | `exclude_from_auto_evaluation` | `optional bool` | Exclude From Auto Evaluation | true |
| Request | 4 | `distance_between_mode` | `optional GdtDistanceBetweenMode` | Distance Between Mode | Required |
| Request | 5 | `evaluation_method` | `optional GdtEvaluationMethod` | Evaluation Method | Required |
| Request | 6 | `create_actual_features` | `optional bool` | Create Actual Features | false |
| Request | 7 | `create_solved_points` | `optional bool` | Create Solved Points | false |
| Request | 8 | `cross_section_criteria` | `optional double` | Cross Section Criteria | 0.039370 |
| Request | 9 | `enable_auto_feature_detection` | `optional bool` | Enable Auto Feature Detection? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGdtOptions(SetGdtOptionsRequest) returns (SetGdtOptionsResult);

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

message SetGdtOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Refresh Datums/Feature Checks from Annotations {/* #refresh-datumsfeature-checks-from-annotations */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#refresh-datumsfeature-checks-from-annotations)

`/briosa.GdtOperations/RefreshDatumsFeatureChecksFromAnnotations` · Operation ID: `gdt_operations.refresh_datums_feature_checks_from_annotations`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RefreshDatumsFeatureChecksFromAnnotations(RefreshDatumsFeatureChecksFromAnnotationsRequest) returns (RefreshDatumsFeatureChecksFromAnnotationsResult);

message RefreshDatumsFeatureChecksFromAnnotationsRequest {
  optional CollectionName collection = 1;
}

message RefreshDatumsFeatureChecksFromAnnotationsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Feature Check Reporting Frame {/* #set-feature-check-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-frame)

`/briosa.GdtOperations/SetFeatureCheckReportingFrame` · Operation ID: `gdt_operations.set_feature_check_reporting_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Request | 2 | `reporting_frame` | `optional CollectionObjectName` | Reporting Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetFeatureCheckReportingFrame(SetFeatureCheckReportingFrameRequest) returns (SetFeatureCheckReportingFrameResult);

message SetFeatureCheckReportingFrameRequest {
  optional CollectionItemName feature_check = 1;
  optional CollectionObjectName reporting_frame = 2;
}

message SetFeatureCheckReportingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Feature Check Reporting Frame {/* #get-feature-check-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-frame)

`/briosa.GdtOperations/GetFeatureCheckReportingFrame` · Operation ID: `gdt_operations.get_feature_check_reporting_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Result | 1 | `reporting_frame` | `optional CollectionObjectName` | Reporting Frame | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetFeatureCheckReportingFrame(GetFeatureCheckReportingFrameRequest) returns (GetFeatureCheckReportingFrameResult);

message GetFeatureCheckReportingFrameRequest {
  optional CollectionItemName feature_check = 1;
}

message GetFeatureCheckReportingFrameResult {
  optional CollectionObjectName reporting_frame = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Feature Check Reporting Options {/* #set-feature-check-reporting-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-options)

`/briosa.GdtOperations/SetFeatureCheckReportingOptions` · Operation ID: `gdt_operations.set_feature_check_reporting_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Request | 2 | `show_feature_control_frame_summary` | `optional bool` | Show Feature Control Frame Summary? | true |
| Request | 3 | `include_title` | `optional bool` | Include Title? | false |
| Request | 4 | `show_datum_and_tolerance_summary` | `optional bool` | Show Datum and Tolerance Summary? | false |
| Request | 5 | `show_feature_summary` | `optional bool` | Show Feature Summary? | false |
| Request | 7 | `show_point_details_summary` | `optional bool` | Show Point Details Summary? | false |
| Request | 8 | `show_lower_tier_tables` | `optional bool` | Show Lower Tier Tables? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetFeatureCheckReportingOptions(SetFeatureCheckReportingOptionsRequest) returns (SetFeatureCheckReportingOptionsResult);

message SetFeatureCheckReportingOptionsRequest {
  optional CollectionItemName feature_check = 1;
  optional bool show_feature_control_frame_summary = 2;
  optional bool include_title = 3;
  optional bool show_datum_and_tolerance_summary = 4;
  optional bool show_feature_summary = 5;
  optional bool show_point_details_summary = 7;
  optional bool show_lower_tier_tables = 8;
}

message SetFeatureCheckReportingOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Feature Check Reporting Options {/* #get-feature-check-reporting-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-options)

`/briosa.GdtOperations/GetFeatureCheckReportingOptions` · Operation ID: `gdt_operations.get_feature_check_reporting_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_check` | `optional CollectionItemName` | Feature Check | Required |
| Result | 1 | `options` | `optional FeatureCheckReportingOptions` | Show Lower Tier Tables? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetFeatureCheckReportingOptions(GetFeatureCheckReportingOptionsRequest) returns (GetFeatureCheckReportingOptionsResult);

message GetFeatureCheckReportingOptionsRequest {
  optional CollectionItemName feature_check = 1;
}

message GetFeatureCheckReportingOptionsResult {
  optional FeatureCheckReportingOptions options = 1;
  MpExecutionDetails execution = 1000;
}
```

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Feature Check and Datum Data {/* #feature-check-and-datum-data */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Filtering and Evaluation {/* #filtering-and-evaluation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Trapping and Datum Alignment {/* #trapping-and-datum-alignment */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GD&T Options {/* #gdt-options */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Reporting and Annotation Refresh {/* #reporting-and-annotation-refresh */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2024.1.0508.5)
