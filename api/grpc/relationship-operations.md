---
title: Relationship Operations
description: Unreleased grpc 0.8.0-dev.1 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Relationship Operations

[SA 2026.1.0529.7](/api/grpc/relationship-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/relationship-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0-dev.1** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Enable/Disable Relationships for Optimization {/* #enabledisable-relationships-for-optimization */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization)

`/briosa.RelationshipOperations/EnableDisableRelationshipsForOptimization` · Operation ID: `relationship_operations.enable_disable_relationships_for_optimization`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships` | `repeated CollectionItemName` | Relationships | Required |
| Request | 2 | `enable` | `optional bool` | Enable? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EnableDisableRelationshipsForOptimization(EnableDisableRelationshipsForOptimizationRequest) returns (EnableDisableRelationshipsForOptimizationResult);

message EnableDisableRelationshipsForOptimizationRequest {
  repeated CollectionItemName relationships = 1;
  optional bool enable = 2;
}

message EnableDisableRelationshipsForOptimizationResult {
  MpExecutionDetails execution = 1000;
}
```

## Geom Relationship Ignore Input Points {/* #geom-relationship-ignore-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points)

`/briosa.RelationshipOperations/GeomRelationshipIgnoreInputPoints` · Operation ID: `relationship_operations.geom_relationship_ignore_input_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GeomRelationshipIgnoreInputPoints(GeomRelationshipIgnoreInputPointsRequest) returns (GeomRelationshipIgnoreInputPointsResult);

message GeomRelationshipIgnoreInputPointsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GeomRelationshipIgnoreInputPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Geom Relationship Reuse Ignored Input Points {/* #geom-relationship-reuse-ignored-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points)

`/briosa.RelationshipOperations/GeomRelationshipReuseIgnoredInputPoints` · Operation ID: `relationship_operations.geom_relationship_reuse_ignored_input_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GeomRelationshipReuseIgnoredInputPoints(GeomRelationshipReuseIgnoredInputPointsRequest) returns (GeomRelationshipReuseIgnoredInputPointsResult);

message GeomRelationshipReuseIgnoredInputPointsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GeomRelationshipReuseIgnoredInputPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Auto Vectors {/* #get-geom-relationship-auto-vectors */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors)

`/briosa.RelationshipOperations/GetGeomRelationshipAutoVectors` · Operation ID: `relationship_operations.get_geom_relationship_auto_vectors`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `auto_vectors_nominal_enabled` | `optional bool` | Auto Vectors Nominal (AVN) - Enabled? | — |
| Result | 2 | `auto_vectors_nominal_name` | `optional CollectionObjectName` | Auto Vectors Nominal (AVN) - Name | — |
| Result | 3 | `auto_vectors_fit_enabled` | `optional bool` | Auto Vectors Fit (AVF) - Enabled? | — |
| Result | 4 | `auto_vectors_fit_name` | `optional CollectionObjectName` | Auto Vectors Fit (AVF) - Name | — |
| Result | 5 | `points_type` | `optional string` | Points Type | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipAutoVectors(GetGeomRelationshipAutoVectorsRequest) returns (GetGeomRelationshipAutoVectorsResult);

message GetGeomRelationshipAutoVectorsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipAutoVectorsResult {
  optional bool auto_vectors_nominal_enabled = 1;
  optional CollectionObjectName auto_vectors_nominal_name = 2;
  optional bool auto_vectors_fit_enabled = 3;
  optional CollectionObjectName auto_vectors_fit_name = 4;
  optional string points_type = 5;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `auto_vectors_nominal_enabled` | MP qualifier: AVN. |
| `auto_vectors_nominal_name` | MP qualifier: AVN. |
| `auto_vectors_fit_enabled` | MP qualifier: AVF. |
| `auto_vectors_fit_name` | MP qualifier: AVF. |

## Get Geom Relationship Cardinal Points {/* #get-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points)

`/briosa.RelationshipOperations/GetGeomRelationshipCardinalPoints` · Operation ID: `relationship_operations.get_geom_relationship_cardinal_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `cardinal_point_name_list` | `repeated PointName` | Cardinal Point Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipCardinalPoints(GetGeomRelationshipCardinalPointsRequest) returns (GetGeomRelationshipCardinalPointsResult);

message GetGeomRelationshipCardinalPointsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipCardinalPointsResult {
  repeated PointName cardinal_point_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Criteria {/* #get-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria)

`/briosa.RelationshipOperations/GetGeomRelationshipCriteria` · Operation ID: `relationship_operations.get_geom_relationship_criteria`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `criteria` | `optional string` | Criteria | Empty |
| Result | 1 | `nominal` | `optional double` | Nominal | — |
| Result | 2 | `measured` | `optional double` | Measured | — |
| Result | 3 | `delta` | `optional double` | Delta | — |
| Result | 4 | `low_tolerance` | `optional double` | Low Tolerance | — |
| Result | 5 | `high_tolerance` | `optional double` | High Tolerance | — |
| Result | 6 | `optimization_delta_weight` | `optional double` | Optimization: Delta Weight | — |
| Result | 7 | `optimization_out_of_tolerance_weight` | `optional double` | Optimization: Out of Tolerance Weight | — |
| Result | 8 | `is_within_tolerance` | `optional string` | Is within Tolerance? | — |
| Result | 9 | `has_uncertainty` | `optional bool` | Has Uncertainty? | — |
| Result | 10 | `uncertainty` | `double` | Uncertainty | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipCriteria(GetGeomRelationshipCriteriaRequest) returns (GetGeomRelationshipCriteriaResult);

message GetGeomRelationshipCriteriaRequest {
  optional CollectionObjectName relationship_name = 1;
  optional string criteria = 2;
}

message GetGeomRelationshipCriteriaResult {
  optional double nominal = 1;
  optional double measured = 2;
  optional double delta = 3;
  optional double low_tolerance = 4;
  optional double high_tolerance = 5;
  optional double optimization_delta_weight = 6;
  optional double optimization_out_of_tolerance_weight = 7;
  optional string is_within_tolerance = 8;
  optional bool has_uncertainty = 9;
  double uncertainty = 10;
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Measured Avg Point {/* #get-geom-relationship-measured-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point)

`/briosa.RelationshipOperations/GetGeomRelationshipMeasuredAvgPoint` · Operation ID: `relationship_operations.get_geom_relationship_measured_avg_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `measured_average_point` | `optional PointName` | Measured Average Point | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipMeasuredAvgPoint(GetGeomRelationshipMeasuredAvgPointRequest) returns (GetGeomRelationshipMeasuredAvgPointResult);

message GetGeomRelationshipMeasuredAvgPointRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipMeasuredAvgPointResult {
  optional PointName measured_average_point = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Measured Geometry {/* #get-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry)

`/briosa.RelationshipOperations/GetGeomRelationshipMeasuredGeometry` · Operation ID: `relationship_operations.get_geom_relationship_measured_geometry`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `measured_geometry` | `optional CollectionObjectName` | Measured Geometry | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipMeasuredGeometry(GetGeomRelationshipMeasuredGeometryRequest) returns (GetGeomRelationshipMeasuredGeometryResult);

message GetGeomRelationshipMeasuredGeometryRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipMeasuredGeometryResult {
  optional CollectionObjectName measured_geometry = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Nominal Avg Point {/* #get-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point)

`/briosa.RelationshipOperations/GetGeomRelationshipNominalAvgPoint` · Operation ID: `relationship_operations.get_geom_relationship_nominal_avg_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `nominal_average_point` | `optional PointName` | Nominal Average Point | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipNominalAvgPoint(GetGeomRelationshipNominalAvgPointRequest) returns (GetGeomRelationshipNominalAvgPointResult);

message GetGeomRelationshipNominalAvgPointRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipNominalAvgPointResult {
  optional PointName nominal_average_point = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Nominal Geometry {/* #get-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry)

`/briosa.RelationshipOperations/GetGeomRelationshipNominalGeometry` · Operation ID: `relationship_operations.get_geom_relationship_nominal_geometry`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `nominal_geometry` | `optional CollectionObjectName` | Nominal Geometry | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipNominalGeometry(GetGeomRelationshipNominalGeometryRequest) returns (GetGeomRelationshipNominalGeometryResult);

message GetGeomRelationshipNominalGeometryRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipNominalGeometryResult {
  optional CollectionObjectName nominal_geometry = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Point List {/* #get-geom-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list)

`/briosa.RelationshipOperations/GetGeomRelationshipPointList` · Operation ID: `relationship_operations.get_geom_relationship_point_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `all_points` | `repeated PointName` | All Points | — |
| Result | 2 | `used_points` | `repeated PointName` | Used Points | — |
| Result | 3 | `ignored_points` | `repeated PointName` | Ignored Points | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipPointList(GetGeomRelationshipPointListRequest) returns (GetGeomRelationshipPointListResult);

message GetGeomRelationshipPointListRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipPointListResult {
  repeated PointName all_points = 1;
  repeated PointName used_points = 2;
  repeated PointName ignored_points = 3;
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Projection Plane {/* #get-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane)

`/briosa.RelationshipOperations/GetGeomRelationshipProjectionPlane` · Operation ID: `relationship_operations.get_geom_relationship_projection_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `projection_plane_name` | `optional CollectionObjectName` | Projection Plane Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipProjectionPlane(GetGeomRelationshipProjectionPlaneRequest) returns (GetGeomRelationshipProjectionPlaneResult);

message GetGeomRelationshipProjectionPlaneRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipProjectionPlaneResult {
  optional CollectionObjectName projection_plane_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Pipe Relationship Cut Status {/* #get-pipe-relationship-cut-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status)

`/briosa.RelationshipOperations/GetPipeRelationshipCutStatus` · Operation ID: `relationship_operations.get_pipe_relationship_cut_status`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `pipe_1_cut_available` | `optional bool` | Pipe 1 - Cut Available? | — |
| Result | 2 | `pipe_1_cut_active` | `optional bool` | Pipe 1 - Cut Active? | — |
| Result | 3 | `pipe_2_cut_available` | `optional bool` | Pipe 2 - Cut Available? | — |
| Result | 4 | `pipe_2_cut_active` | `optional bool` | Pipe 2 - Cut Active? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPipeRelationshipCutStatus(GetPipeRelationshipCutStatusRequest) returns (GetPipeRelationshipCutStatusResult);

message GetPipeRelationshipCutStatusRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetPipeRelationshipCutStatusResult {
  optional bool pipe_1_cut_available = 1;
  optional bool pipe_1_cut_active = 2;
  optional bool pipe_2_cut_available = 3;
  optional bool pipe_2_cut_active = 4;
  MpExecutionDetails execution = 1000;
}
```

## Get Pipe Relationship Properties {/* #get-pipe-relationship-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties)

`/briosa.RelationshipOperations/GetPipeRelationshipProperties` · Operation ID: `relationship_operations.get_pipe_relationship_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `pipe_1_object_name` | `optional CollectionObjectName` | Pipe 1 - Object Name | — |
| Result | 2 | `pipe_1_inner_diameter` | `optional double` | Pipe 1 - Inner Diameter | — |
| Result | 3 | `pipe_1_outer_diameter` | `optional double` | Pipe 1 - Outer Diameter | — |
| Result | 4 | `pipe_1_cut_begin` | `optional double` | Pipe 1 - Cut Begin | — |
| Result | 5 | `pipe_1_cut_end` | `optional double` | Pipe 1 - Cut End | — |
| Result | 6 | `pipe_2_object_name` | `optional CollectionObjectName` | Pipe 2 - Object Name | — |
| Result | 7 | `pipe_2_inner_diameter` | `optional double` | Pipe 2 - Inner Diameter | — |
| Result | 8 | `pipe_2_outer_diameter` | `optional double` | Pipe 2 - Outer Diameter | — |
| Result | 9 | `pipe_2_cut_begin` | `optional double` | Pipe 2 - Cut Begin | — |
| Result | 10 | `pipe_2_cut_end` | `optional double` | Pipe 2 - Cut End | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPipeRelationshipProperties(GetPipeRelationshipPropertiesRequest) returns (GetPipeRelationshipPropertiesResult);

message GetPipeRelationshipPropertiesRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetPipeRelationshipPropertiesResult {
  optional CollectionObjectName pipe_1_object_name = 1;
  optional double pipe_1_inner_diameter = 2;
  optional double pipe_1_outer_diameter = 3;
  optional double pipe_1_cut_begin = 4;
  optional double pipe_1_cut_end = 5;
  optional CollectionObjectName pipe_2_object_name = 6;
  optional double pipe_2_inner_diameter = 7;
  optional double pipe_2_outer_diameter = 8;
  optional double pipe_2_cut_begin = 9;
  optional double pipe_2_cut_end = 10;
  MpExecutionDetails execution = 1000;
}
```

## Get Pipe Relationship Weights {/* #get-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights)

`/briosa.RelationshipOperations/GetPipeRelationshipWeights` · Operation ID: `relationship_operations.get_pipe_relationship_weights`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `overall_weight` | `optional double` | Overall Weight | — |
| Result | 2 | `axis_offset` | `optional double` | Axis Offset | — |
| Result | 3 | `axis_alignment` | `optional double` | Axis Alignment | — |
| Result | 4 | `center_pull` | `optional double` | Center Pull | — |
| Result | 5 | `out_of_material_weight` | `optional double` | Out of material - Weight | — |
| Result | 6 | `out_of_material_static_offset` | `optional double` | Out of material - Static Offset | — |
| Result | 7 | `constrain_region_at_od` | `optional bool` | Constrain Region at OD | — |
| Result | 8 | `constrain_id_od_overlap` | `optional bool` | Constrain ID/OD overlap | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPipeRelationshipWeights(GetPipeRelationshipWeightsRequest) returns (GetPipeRelationshipWeightsResult);

message GetPipeRelationshipWeightsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetPipeRelationshipWeightsResult {
  optional double overall_weight = 1;
  optional double axis_offset = 2;
  optional double axis_alignment = 3;
  optional double center_pull = 4;
  optional double out_of_material_weight = 5;
  optional double out_of_material_static_offset = 6;
  optional bool constrain_region_at_od = 7;
  optional bool constrain_id_od_overlap = 8;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Fit Constraints (Scalar Type) {/* #get-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type)

`/briosa.RelationshipOperations/GetRelationshipFitConstraintsScalarType` · Operation ID: `relationship_operations.get_relationship_fit_constraints_scalar_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `use_high_tolerance` | `optional bool` | Use High Tolerance? | — |
| Result | 2 | `high_tolerance` | `optional double` | High Tolerance | — |
| Result | 3 | `use_low_tolerance` | `optional bool` | Use Low Tolerance? | — |
| Result | 4 | `low_tolerance` | `optional double` | Low Tolerance | — |
| Result | 5 | `fit_constraint_options` | `optional FitConstraintScalarOptions` | Fit Constraint Options | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipFitConstraintsScalarType(GetRelationshipFitConstraintsScalarTypeRequest) returns (GetRelationshipFitConstraintsScalarTypeResult);

message GetRelationshipFitConstraintsScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipFitConstraintsScalarTypeResult {
  optional bool use_high_tolerance = 1;
  optional double high_tolerance = 2;
  optional bool use_low_tolerance = 3;
  optional double low_tolerance = 4;
  optional FitConstraintScalarOptions fit_constraint_options = 5;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Outlier Rejection (Scalar Type) {/* #get-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type)

`/briosa.RelationshipOperations/GetRelationshipOutlierRejectionScalarType` · Operation ID: `relationship_operations.get_relationship_outlier_rejection_scalar_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `use_high_limit` | `optional bool` | Use High Limit? | — |
| Result | 2 | `high_limit` | `optional double` | High Limit | — |
| Result | 3 | `use_low_limit` | `optional bool` | Use Low Limit? | — |
| Result | 4 | `low_limit` | `optional double` | Low Limit | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipOutlierRejectionScalarType(GetRelationshipOutlierRejectionScalarTypeRequest) returns (GetRelationshipOutlierRejectionScalarTypeResult);

message GetRelationshipOutlierRejectionScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipOutlierRejectionScalarTypeResult {
  optional bool use_high_limit = 1;
  optional double high_limit = 2;
  optional bool use_low_limit = 3;
  optional double low_limit = 4;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Projection Options {/* #get-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options)

`/briosa.RelationshipOperations/GetRelationshipProjectionOptions` · Operation ID: `relationship_operations.get_relationship_projection_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `ignore_edge_projections` | `optional bool` | Ignore Edge Projections? | — |
| Result | 2 | `probe_offsets_override_target_values` | `optional bool` | Probe Offsets - Override Target Values? | — |
| Result | 3 | `probe_offsets_override_value` | `optional double` | Probe Offsets - Override Value | — |
| Result | 4 | `add_extra_material` | `optional bool` | Add Extra Material? | — |
| Result | 5 | `extra_material_thickness` | `optional double` | Extra Material Thickness | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipProjectionOptions(GetRelationshipProjectionOptionsRequest) returns (GetRelationshipProjectionOptionsResult);

message GetRelationshipProjectionOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipProjectionOptionsResult {
  optional bool ignore_edge_projections = 1;
  optional bool probe_offsets_override_target_values = 2;
  optional double probe_offsets_override_value = 3;
  optional bool add_extra_material = 4;
  optional double extra_material_thickness = 5;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Reporting Frame {/* #get-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame)

`/briosa.RelationshipOperations/GetRelationshipReportingFrame` · Operation ID: `relationship_operations.get_relationship_reporting_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `reporting_frame` | `optional CollectionObjectName` | Reporting Frame | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipReportingFrame(GetRelationshipReportingFrameRequest) returns (GetRelationshipReportingFrameResult);

message GetRelationshipReportingFrameRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipReportingFrameResult {
  optional CollectionObjectName reporting_frame = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Sigmoidal Gap Fit Constraints {/* #get-relationship-sigmoidal-gap-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints)

`/briosa.RelationshipOperations/GetRelationshipSigmoidalGapFitConstraints` · Operation ID: `relationship_operations.get_relationship_sigmoidal_gap_fit_constraints`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Result | 1 | `constraints` | `optional SigmoidalGapFitConstraints` | Gradient Steepness Factor | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipSigmoidalGapFitConstraints(GetRelationshipSigmoidalGapFitConstraintsRequest) returns (GetRelationshipSigmoidalGapFitConstraintsResult);

message GetRelationshipSigmoidalGapFitConstraintsRequest {
  optional CollectionItemName relationship_name = 1;
}

message GetRelationshipSigmoidalGapFitConstraintsResult {
  optional SigmoidalGapFitConstraints constraints = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Sub Sampling Options {/* #get-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options)

`/briosa.RelationshipOperations/GetRelationshipSubSamplingOptions` · Operation ID: `relationship_operations.get_relationship_sub_sampling_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `use_every_ith_point` | `optional bool` | Use every i-th point | — |
| Result | 2 | `i_value` | `optional int32` | i value | — |
| Result | 3 | `use_no_more_than_n_points` | `optional bool` | Use no more than n points | — |
| Result | 4 | `n_value` | `optional int32` | n value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipSubSamplingOptions(GetRelationshipSubSamplingOptionsRequest) returns (GetRelationshipSubSamplingOptionsResult);

message GetRelationshipSubSamplingOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipSubSamplingOptionsResult {
  optional bool use_every_ith_point = 1;
  optional int32 i_value = 2;
  optional bool use_no_more_than_n_points = 3;
  optional int32 n_value = 4;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Tolerance (Scalar Type) {/* #get-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type)

`/briosa.RelationshipOperations/GetRelationshipToleranceScalarType` · Operation ID: `relationship_operations.get_relationship_tolerance_scalar_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `use_high_tolerance` | `optional bool` | Use High Tolerance? | — |
| Result | 2 | `high_tolerance` | `optional double` | High Tolerance | — |
| Result | 3 | `use_low_tolerance` | `optional bool` | Use Low Tolerance? | — |
| Result | 4 | `low_tolerance` | `optional double` | Low Tolerance | — |
| Result | 5 | `tolerance_options` | `optional ToleranceScalarOptions` | Tolerance Options | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipToleranceScalarType(GetRelationshipToleranceScalarTypeRequest) returns (GetRelationshipToleranceScalarTypeResult);

message GetRelationshipToleranceScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipToleranceScalarTypeResult {
  optional bool use_high_tolerance = 1;
  optional double high_tolerance = 2;
  optional bool use_low_tolerance = 3;
  optional double low_tolerance = 4;
  optional ToleranceScalarOptions tolerance_options = 5;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Tolerance (Vector Type) {/* #get-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type)

`/briosa.RelationshipOperations/GetRelationshipToleranceVectorType` · Operation ID: `relationship_operations.get_relationship_tolerance_vector_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `use_high_x_tolerance` | `optional bool` | Use High X Tolerance? | — |
| Result | 2 | `high_x_tolerance` | `optional double` | High X Tolerance | — |
| Result | 3 | `use_high_y_tolerance` | `optional bool` | Use High Y Tolerance? | — |
| Result | 4 | `high_y_tolerance` | `optional double` | High Y Tolerance | — |
| Result | 5 | `use_high_z_tolerance` | `optional bool` | Use High Z Tolerance? | — |
| Result | 6 | `high_z_tolerance` | `optional double` | High Z Tolerance | — |
| Result | 7 | `use_high_mag_tolerance` | `optional bool` | Use High Mag Tolerance? | — |
| Result | 8 | `high_mag_tolerance` | `optional double` | High Mag Tolerance | — |
| Result | 9 | `use_low_x_tolerance` | `optional bool` | Use Low X Tolerance? | — |
| Result | 10 | `low_x_tolerance` | `optional double` | Low X Tolerance | — |
| Result | 11 | `use_low_y_tolerance` | `optional bool` | Use Low Y Tolerance? | — |
| Result | 12 | `low_y_tolerance` | `optional double` | Low Y Tolerance | — |
| Result | 13 | `use_low_z_tolerance` | `optional bool` | Use Low Z Tolerance? | — |
| Result | 14 | `low_z_tolerance` | `optional double` | Low Z Tolerance | — |
| Result | 15 | `use_low_mag_tolerance` | `optional bool` | Use Low Mag Tolerance? | — |
| Result | 16 | `low_mag_tolerance` | `optional double` | Low Mag Tolerance | — |
| Result | 17 | `vector_tolerance` | `optional ToleranceVectorOptions` | Vector Tolerance | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipToleranceVectorType(GetRelationshipToleranceVectorTypeRequest) returns (GetRelationshipToleranceVectorTypeResult);

message GetRelationshipToleranceVectorTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipToleranceVectorTypeResult {
  optional bool use_high_x_tolerance = 1;
  optional double high_x_tolerance = 2;
  optional bool use_high_y_tolerance = 3;
  optional double high_y_tolerance = 4;
  optional bool use_high_z_tolerance = 5;
  optional double high_z_tolerance = 6;
  optional bool use_high_mag_tolerance = 7;
  optional double high_mag_tolerance = 8;
  optional bool use_low_x_tolerance = 9;
  optional double low_x_tolerance = 10;
  optional bool use_low_y_tolerance = 11;
  optional double low_y_tolerance = 12;
  optional bool use_low_z_tolerance = 13;
  optional double low_z_tolerance = 14;
  optional bool use_low_mag_tolerance = 15;
  optional double low_mag_tolerance = 16;
  optional ToleranceVectorOptions vector_tolerance = 17;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Type {/* #get-relationship-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-type)

`/briosa.RelationshipOperations/GetRelationshipType` · Operation ID: `relationship_operations.get_relationship_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `relationship_type` | `optional string` | Relationship Type | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipType(GetRelationshipTypeRequest) returns (GetRelationshipTypeResult);

message GetRelationshipTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipTypeResult {
  optional string relationship_type = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Weighting {/* #get-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting)

`/briosa.RelationshipOperations/GetRelationshipWeighting` · Operation ID: `relationship_operations.get_relationship_weighting`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1 | `weight` | `optional double` | Weight | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipWeighting(GetRelationshipWeightingRequest) returns (GetRelationshipWeightingResult);

message GetRelationshipWeightingRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipWeightingResult {
  optional double weight = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make Pipe Fitting Relationship {/* #make-pipe-fitting-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship)

`/briosa.RelationshipOperations/MakePipeFittingRelationship` · Operation ID: `relationship_operations.make_pipe_fitting_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `pipe_1_object_name` | `optional CollectionObjectName` | Pipe 1 - Object Name | Required |
| Request | 3 | `pipe_2_object_name` | `optional CollectionObjectName` | Pipe 2 - Object Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePipeFittingRelationship(MakePipeFittingRelationshipRequest) returns (MakePipeFittingRelationshipResult);

message MakePipeFittingRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName pipe_1_object_name = 2;
  optional CollectionObjectName pipe_2_object_name = 3;
}

message MakePipeFittingRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Pipe Relationship Cut {/* #make-pipe-relationship-cut */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut)

`/briosa.RelationshipOperations/MakePipeRelationshipCut` · Operation ID: `relationship_operations.make_pipe_relationship_cut`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `pipe_1_make_cut` | `optional bool` | Pipe 1 - Make Cut | true |
| Request | 3 | `pipe_1_create_frame` | `optional bool` | Pipe 1 - Create Frame | false |
| Request | 4 | `pipe_1_frame_name` | `optional CollectionObjectName` | Pipe 1 - Frame Name | Required |
| Request | 5 | `pipe_2_make_cut` | `optional bool` | Pipe 2 - Make Cut | true |
| Request | 6 | `pipe_2_create_frame` | `optional bool` | Pipe 2 - Create Frame | false |
| Request | 7 | `pipe_2_frame_name` | `optional CollectionObjectName` | Pipe 2 - Frame Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePipeRelationshipCut(MakePipeRelationshipCutRequest) returns (MakePipeRelationshipCutResult);

message MakePipeRelationshipCutRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool pipe_1_make_cut = 2;
  optional bool pipe_1_create_frame = 3;
  optional CollectionObjectName pipe_1_frame_name = 4;
  optional bool pipe_2_make_cut = 5;
  optional bool pipe_2_create_frame = 6;
  optional CollectionObjectName pipe_2_frame_name = 7;
}

message MakePipeRelationshipCutResult {
  MpExecutionDetails execution = 1000;
}
```

## Pipe Relationship Force Cut to Frame {/* #pipe-relationship-force-cut-to-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame)

`/briosa.RelationshipOperations/PipeRelationshipForceCutToFrame` · Operation ID: `relationship_operations.pipe_relationship_force_cut_to_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `pipe_1_force_cut_to_frame` | `optional bool` | Pipe 1 - Force Cut to Frame? | true |
| Request | 3 | `pipe_1_frame_name` | `optional CollectionObjectName` | Pipe 1 - Frame Name | Required |
| Request | 4 | `pipe_2_force_cut_to_frame` | `optional bool` | Pipe 2 - Force Cut to Frame? | true |
| Request | 5 | `pipe_2_frame_name` | `optional CollectionObjectName` | Pipe 2 - Frame Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc PipeRelationshipForceCutToFrame(PipeRelationshipForceCutToFrameRequest) returns (PipeRelationshipForceCutToFrameResult);

message PipeRelationshipForceCutToFrameRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool pipe_1_force_cut_to_frame = 2;
  optional CollectionObjectName pipe_1_frame_name = 3;
  optional bool pipe_2_force_cut_to_frame = 4;
  optional CollectionObjectName pipe_2_frame_name = 5;
}

message PipeRelationshipForceCutToFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Geom Relationship Auto Measure Nominal Feature {/* #set-geom-relationship-auto-measure-nominal-feature */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature)

`/briosa.RelationshipOperations/SetGeomRelationshipAutoMeasureNominalFeature` · Operation ID: `relationship_operations.set_geom_relationship_auto_measure_nominal_feature`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `trap_clouds` | `optional bool` | Trap Clouds? (FALSE = Geometry) | true |
| Request | 3 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 4 | `measurement_mode` | `optional string` | Measurement Mode | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeomRelationshipAutoMeasureNominalFeature(SetGeomRelationshipAutoMeasureNominalFeatureRequest) returns (SetGeomRelationshipAutoMeasureNominalFeatureResult);

message SetGeomRelationshipAutoMeasureNominalFeatureRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool trap_clouds = 2;
  optional CollectionInstrumentId instrument_id = 3;
  optional string measurement_mode = 4;
}

message SetGeomRelationshipAutoMeasureNominalFeatureResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `trap_clouds` | False selects geometry. |

## Set Geom Relationship Auto Vectors Nominal (AVN) {/* #set-geom-relationship-auto-vectors-nominal-avn */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

`/briosa.RelationshipOperations/SetGeomRelationshipAutoVectorsNominalAvn` · Operation ID: `relationship_operations.set_geom_relationship_auto_vectors_nominal_avn`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `create_auto_vectors_avn` | `optional bool` | Create Auto Vectors AVN | false |
| Request | 3 | `points_type` | `optional PointFilterInputType` | Points Type | Cardinal Points |
| Request | 4 | `use_vector_group_custom_prefix` | `optional bool` | Use Vector Group Custom Prefix? | false |
| Request | 5 | `vector_group_custom_prefix` | `optional string` | Vector Group Custom Prefix | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeomRelationshipAutoVectorsNominalAvn(SetGeomRelationshipAutoVectorsNominalAvnRequest) returns (SetGeomRelationshipAutoVectorsNominalAvnResult);

message SetGeomRelationshipAutoVectorsNominalAvnRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool create_auto_vectors_avn = 2;
  optional PointFilterInputType points_type = 3;
  optional bool use_vector_group_custom_prefix = 4;
  optional string vector_group_custom_prefix = 5;
}

message SetGeomRelationshipAutoVectorsNominalAvnResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Geom Relationship Cardinal Points {/* #set-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points)

`/briosa.RelationshipOperations/SetGeomRelationshipCardinalPoints` · Operation ID: `relationship_operations.set_geom_relationship_cardinal_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `create_cardinal_pts_when_fitting` | `optional bool` | Create Cardinal Pts when Fitting? | true |
| Request | 3 | `prefix_cardinal_pts_name_with_rel_name` | `optional bool` | Prefix Cardinal Pts name with Rel name? | true |
| Request | 4 | `cardinal_pts_group_name` | `optional string` | Cardinal Pts Group Name | GR-Cardinal Pts |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeomRelationshipCardinalPoints(SetGeomRelationshipCardinalPointsRequest) returns (SetGeomRelationshipCardinalPointsResult);

message SetGeomRelationshipCardinalPointsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool create_cardinal_pts_when_fitting = 2;
  optional bool prefix_cardinal_pts_name_with_rel_name = 3;
  optional string cardinal_pts_group_name = 4;
}

message SetGeomRelationshipCardinalPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Geom Relationship Criteria {/* #set-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria)

`/briosa.RelationshipOperations/SetGeomRelationshipCriteria` · Operation ID: `relationship_operations.set_geom_relationship_criteria`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `criteria` | `optional string` | Criteria | Empty |
| Request | 3 | `show_in_report` | `optional bool` | Show in Report | true |
| Request | 4 | `tolerance_options` | `optional ToleranceScalarOptions` | Tolerance Options | 0.000000 |
| Request | 5 | `optimization_delta_weight` | `optional double` | Optimization: Delta Weight | 0.000000 |
| Request | 6 | `optimization_out_of_tolerance_weight` | `optional double` | Optimization: Out of Tolerance Weight | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeomRelationshipCriteria(SetGeomRelationshipCriteriaRequest) returns (SetGeomRelationshipCriteriaResult);

message SetGeomRelationshipCriteriaRequest {
  optional CollectionObjectName relationship_name = 1;
  optional string criteria = 2;
  optional bool show_in_report = 3;
  optional ToleranceScalarOptions tolerance_options = 4;
  optional double optimization_delta_weight = 5;
  optional double optimization_out_of_tolerance_weight = 6;
}

message SetGeomRelationshipCriteriaResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Geom Relationship Measured Geometry {/* #set-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry)

`/briosa.RelationshipOperations/SetGeomRelationshipMeasuredGeometry` · Operation ID: `relationship_operations.set_geom_relationship_measured_geometry`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `measured_geometry` | `optional CollectionObjectName` | Measured Geometry | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeomRelationshipMeasuredGeometry(SetGeomRelationshipMeasuredGeometryRequest) returns (SetGeomRelationshipMeasuredGeometryResult);

message SetGeomRelationshipMeasuredGeometryRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName measured_geometry = 2;
}

message SetGeomRelationshipMeasuredGeometryResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Geom Relationship Nominal Avg Point {/* #set-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point)

`/briosa.RelationshipOperations/SetGeomRelationshipNominalAvgPoint` · Operation ID: `relationship_operations.set_geom_relationship_nominal_avg_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `compare_to_nominal` | `optional bool` | Compare To Nominal? | true |
| Request | 3 | `nominal_average_point` | `optional PointName` | Nominal Average Point | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeomRelationshipNominalAvgPoint(SetGeomRelationshipNominalAvgPointRequest) returns (SetGeomRelationshipNominalAvgPointResult);

message SetGeomRelationshipNominalAvgPointRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool compare_to_nominal = 2;
  optional PointName nominal_average_point = 3;
}

message SetGeomRelationshipNominalAvgPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Geom Relationship Nominal Geometry {/* #set-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry)

`/briosa.RelationshipOperations/SetGeomRelationshipNominalGeometry` · Operation ID: `relationship_operations.set_geom_relationship_nominal_geometry`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `compare_to_nominal` | `optional bool` | Compare To Nominal? | true |
| Request | 3 | `nominal_geometry` | `optional CollectionObjectName` | Nominal Geometry | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeomRelationshipNominalGeometry(SetGeomRelationshipNominalGeometryRequest) returns (SetGeomRelationshipNominalGeometryResult);

message SetGeomRelationshipNominalGeometryRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool compare_to_nominal = 2;
  optional CollectionObjectName nominal_geometry = 3;
}

message SetGeomRelationshipNominalGeometryResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Geom Relationship Projection Plane {/* #set-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane)

`/briosa.RelationshipOperations/SetGeomRelationshipProjectionPlane` · Operation ID: `relationship_operations.set_geom_relationship_projection_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `project_to_plane` | `optional bool` | Project to Plane? | true |
| Request | 3 | `projection_plane_name` | `optional CollectionObjectName` | Projection Plane Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeomRelationshipProjectionPlane(SetGeomRelationshipProjectionPlaneRequest) returns (SetGeomRelationshipProjectionPlaneResult);

message SetGeomRelationshipProjectionPlaneRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool project_to_plane = 2;
  optional CollectionObjectName projection_plane_name = 3;
}

message SetGeomRelationshipProjectionPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Object to Object Direction Relationship Fit Constraints {/* #set-object-to-object-direction-relationship-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

`/briosa.RelationshipOperations/SetObjectToObjectDirectionRelationshipFitConstraints` · Operation ID: `relationship_operations.set_object_to_object_direction_relationship_fit_constraints`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `angle_between_vectors_fit_constraints` | `optional FitConstraintScalarOptions` | Angle Between Vectors Fit Constraints | 0.000000 |
| Request | 3 | `mutual_perpendicular_length_fit_constraints` | `optional FitConstraintScalarOptions` | Mutual Perpendicular Length Fit Constraints | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetObjectToObjectDirectionRelationshipFitConstraints(SetObjectToObjectDirectionRelationshipFitConstraintsRequest) returns (SetObjectToObjectDirectionRelationshipFitConstraintsResult);

message SetObjectToObjectDirectionRelationshipFitConstraintsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional FitConstraintScalarOptions angle_between_vectors_fit_constraints = 2;
  optional FitConstraintScalarOptions mutual_perpendicular_length_fit_constraints = 3;
}

message SetObjectToObjectDirectionRelationshipFitConstraintsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Object to Object Direction Relationship Tolerances {/* #set-object-to-object-direction-relationship-tolerances */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-tolerances)

`/briosa.RelationshipOperations/SetObjectToObjectDirectionRelationshipTolerances` · Operation ID: `relationship_operations.set_object_to_object_direction_relationship_tolerances`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `angle_between_vectors_tolerances` | `optional ToleranceScalarOptions` | Angle Between Vectors Tolerances | Required |
| Request | 3 | `mutual_perpendicular_length_tolerances` | `optional ToleranceScalarOptions` | Mutual Perpendicular Length Tolerances | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetObjectToObjectDirectionRelationshipTolerances(SetObjectToObjectDirectionRelationshipTolerancesRequest) returns (SetObjectToObjectDirectionRelationshipTolerancesResult);

message SetObjectToObjectDirectionRelationshipTolerancesRequest {
  optional CollectionItemName relationship_name = 1;
  optional ToleranceScalarOptions angle_between_vectors_tolerances = 2;
  optional ToleranceScalarOptions mutual_perpendicular_length_tolerances = 3;
}

message SetObjectToObjectDirectionRelationshipTolerancesResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Pipe Relationship Segment Properties {/* #set-pipe-relationship-segment-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties)

`/briosa.RelationshipOperations/SetPipeRelationshipSegmentProperties` · Operation ID: `relationship_operations.set_pipe_relationship_segment_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `pipe_1_inner_diameter` | `optional double` | Pipe 1 - Inner Diameter | 0.000000 |
| Request | 3 | `pipe_1_outer_diameter` | `optional double` | Pipe 1 - Outer Diameter | 0.000000 |
| Request | 4 | `pipe_1_cut_begin` | `optional double` | Pipe 1 - Cut Begin | 0.000000 |
| Request | 5 | `pipe_1_cut_end` | `optional double` | Pipe 1 - Cut End | 0.000000 |
| Request | 6 | `pipe_2_inner_diameter` | `optional double` | Pipe 2 - Inner Diameter | 0.000000 |
| Request | 7 | `pipe_2_outer_diameter` | `optional double` | Pipe 2 - Outer Diameter | 0.000000 |
| Request | 8 | `pipe_2_cut_begin` | `optional double` | Pipe 2 - Cut Begin | 0.000000 |
| Request | 9 | `pipe_2_cut_end` | `optional double` | Pipe 2 - Cut End | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPipeRelationshipSegmentProperties(SetPipeRelationshipSegmentPropertiesRequest) returns (SetPipeRelationshipSegmentPropertiesResult);

message SetPipeRelationshipSegmentPropertiesRequest {
  optional CollectionObjectName relationship_name = 1;
  optional double pipe_1_inner_diameter = 2;
  optional double pipe_1_outer_diameter = 3;
  optional double pipe_1_cut_begin = 4;
  optional double pipe_1_cut_end = 5;
  optional double pipe_2_inner_diameter = 6;
  optional double pipe_2_outer_diameter = 7;
  optional double pipe_2_cut_begin = 8;
  optional double pipe_2_cut_end = 9;
}

message SetPipeRelationshipSegmentPropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Pipe Relationship Weights {/* #set-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights)

`/briosa.RelationshipOperations/SetPipeRelationshipWeights` · Operation ID: `relationship_operations.set_pipe_relationship_weights`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `overall_weight` | `optional double` | Overall Weight | 1.000000 |
| Request | 3 | `axis_offset` | `optional double` | Axis Offset | 2.000000 |
| Request | 4 | `axis_alignment` | `optional double` | Axis Alignment | 1.000000 |
| Request | 5 | `center_pull` | `optional double` | Center Pull | 0.100000 |
| Request | 6 | `out_of_material_weight` | `optional double` | Out of material - Weight | 10.000000 |
| Request | 7 | `out_of_material_offset` | `optional double` | Out of material - Offset | 1.000000 |
| Request | 8 | `constrain_region_at_od` | `optional bool` | Constrain Region at OD | false |
| Request | 9 | `constrain_id_od_overlap` | `optional bool` | Constrain ID/OD overlap | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPipeRelationshipWeights(SetPipeRelationshipWeightsRequest) returns (SetPipeRelationshipWeightsResult);

message SetPipeRelationshipWeightsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional double overall_weight = 2;
  optional double axis_offset = 3;
  optional double axis_alignment = 4;
  optional double center_pull = 5;
  optional double out_of_material_weight = 6;
  optional double out_of_material_offset = 7;
  optional bool constrain_region_at_od = 8;
  optional bool constrain_id_od_overlap = 9;
}

message SetPipeRelationshipWeightsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Auto Vectors Fit (AVF) {/* #set-relationship-auto-vectors-fit-avf */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf)

`/briosa.RelationshipOperations/SetRelationshipAutoVectorsFitAvf` · Operation ID: `relationship_operations.set_relationship_auto_vectors_fit_avf`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `create_auto_vectors_avf` | `optional bool` | Create Auto Vectors AVF | false |
| Request | 3 | `use_vector_group_custom_prefix` | `optional bool` | Use Vector Group Custom Prefix? | false |
| Request | 4 | `vector_group_custom_prefix` | `optional string` | Vector Group Custom Prefix | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipAutoVectorsFitAvf(SetRelationshipAutoVectorsFitAvfRequest) returns (SetRelationshipAutoVectorsFitAvfResult);

message SetRelationshipAutoVectorsFitAvfRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool create_auto_vectors_avf = 2;
  optional bool use_vector_group_custom_prefix = 3;
  optional string vector_group_custom_prefix = 4;
}

message SetRelationshipAutoVectorsFitAvfResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Auto Vectors Group Default Prefix {/* #set-relationship-auto-vectors-group-default-prefix */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix)

`/briosa.RelationshipOperations/SetRelationshipAutoVectorsGroupDefaultPrefix` · Operation ID: `relationship_operations.set_relationship_auto_vectors_group_default_prefix`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geom_rel_avn_vg_default_prefix` | `optional string` | Geom Rel AVN VG Default Prefix | GR-AVN- |
| Request | 2 | `geom_rel_avf_vg_default_prefix` | `optional string` | Geom Rel AVF VG Default Prefix | GR-AVF- |
| Request | 3 | `non_geom_rel_vg_default_prefix` | `optional string` | Non-Geom Rel VG Default Prefix | Auto Vectors: |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipAutoVectorsGroupDefaultPrefix(SetRelationshipAutoVectorsGroupDefaultPrefixRequest) returns (SetRelationshipAutoVectorsGroupDefaultPrefixResult);

message SetRelationshipAutoVectorsGroupDefaultPrefixRequest {
  optional string geom_rel_avn_vg_default_prefix = 1;
  optional string geom_rel_avf_vg_default_prefix = 2;
  optional string non_geom_rel_vg_default_prefix = 3;
}

message SetRelationshipAutoVectorsGroupDefaultPrefixResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Desired Meas Count {/* #set-relationship-desired-meas-count */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count)

`/briosa.RelationshipOperations/SetRelationshipDesiredMeasCount` · Operation ID: `relationship_operations.set_relationship_desired_meas_count`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `desired_measurement_count` | `optional int32` | Desired Measurement Count | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipDesiredMeasCount(SetRelationshipDesiredMeasCountRequest) returns (SetRelationshipDesiredMeasCountResult);

message SetRelationshipDesiredMeasCountRequest {
  optional CollectionObjectName relationship_name = 1;
  optional int32 desired_measurement_count = 2;
}

message SetRelationshipDesiredMeasCountResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Dormant Status {/* #set-relationship-dormant-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status)

`/briosa.RelationshipOperations/SetRelationshipDormantStatus` · Operation ID: `relationship_operations.set_relationship_dormant_status`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships` | `repeated CollectionItemName` | Relationships | Required |
| Request | 2 | `dormant_status` | `optional bool` | Dormant Status | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipDormantStatus(SetRelationshipDormantStatusRequest) returns (SetRelationshipDormantStatusResult);

message SetRelationshipDormantStatusRequest {
  repeated CollectionItemName relationships = 1;
  optional bool dormant_status = 2;
}

message SetRelationshipDormantStatusResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Fit Constraints (Scalar Type) {/* #set-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type)

`/briosa.RelationshipOperations/SetRelationshipFitConstraintsScalarType` · Operation ID: `relationship_operations.set_relationship_fit_constraints_scalar_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `fit_constraint_options` | `optional FitConstraintScalarOptions` | Fit Constraint Options | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipFitConstraintsScalarType(SetRelationshipFitConstraintsScalarTypeRequest) returns (SetRelationshipFitConstraintsScalarTypeResult);

message SetRelationshipFitConstraintsScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional FitConstraintScalarOptions fit_constraint_options = 2;
}

message SetRelationshipFitConstraintsScalarTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Orientation Fit Constraints (Vector Type) {/* #set-relationship-orientation-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

`/briosa.RelationshipOperations/SetRelationshipOrientationFitConstraintsVectorType` · Operation ID: `relationship_operations.set_relationship_orientation_fit_constraints_vector_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `orientation_vector_constraint` | `optional ToleranceVectorOptions` | Orientation Vector Constraint | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipOrientationFitConstraintsVectorType(SetRelationshipOrientationFitConstraintsVectorTypeRequest) returns (SetRelationshipOrientationFitConstraintsVectorTypeResult);

message SetRelationshipOrientationFitConstraintsVectorTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional ToleranceVectorOptions orientation_vector_constraint = 2;
}

message SetRelationshipOrientationFitConstraintsVectorTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Outlier Rejection (Scalar Type) {/* #set-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type)

`/briosa.RelationshipOperations/SetRelationshipOutlierRejectionScalarType` · Operation ID: `relationship_operations.set_relationship_outlier_rejection_scalar_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipOutlierRejectionScalarType(SetRelationshipOutlierRejectionScalarTypeRequest) returns (SetRelationshipOutlierRejectionScalarTypeResult);

message SetRelationshipOutlierRejectionScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message SetRelationshipOutlierRejectionScalarTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Position Fit Constraints (Vector Type) {/* #set-relationship-position-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type)

`/briosa.RelationshipOperations/SetRelationshipPositionFitConstraintsVectorType` · Operation ID: `relationship_operations.set_relationship_position_fit_constraints_vector_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `position_vector_constraint` | `optional ToleranceVectorOptions` | Position Vector Constraint | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipPositionFitConstraintsVectorType(SetRelationshipPositionFitConstraintsVectorTypeRequest) returns (SetRelationshipPositionFitConstraintsVectorTypeResult);

message SetRelationshipPositionFitConstraintsVectorTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional ToleranceVectorOptions position_vector_constraint = 2;
}

message SetRelationshipPositionFitConstraintsVectorTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Projection Options {/* #set-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options)

`/briosa.RelationshipOperations/SetRelationshipProjectionOptions` · Operation ID: `relationship_operations.set_relationship_projection_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `projection_options` | `optional ProjectionOptions` | Projection Options | Object To Probe Vectors |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipProjectionOptions(SetRelationshipProjectionOptionsRequest) returns (SetRelationshipProjectionOptionsResult);

message SetRelationshipProjectionOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional ProjectionOptions projection_options = 2;
}

message SetRelationshipProjectionOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Reporting Frame {/* #set-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame)

`/briosa.RelationshipOperations/SetRelationshipReportingFrame` · Operation ID: `relationship_operations.set_relationship_reporting_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `reporting_frame` | `optional CollectionObjectName` | Reporting Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipReportingFrame(SetRelationshipReportingFrameRequest) returns (SetRelationshipReportingFrameResult);

message SetRelationshipReportingFrameRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName reporting_frame = 2;
}

message SetRelationshipReportingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Sigmoidal Gap Fit Constraints {/* #set-relationship-sigmoidal-gap-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints)

`/briosa.RelationshipOperations/SetRelationshipSigmoidalGapFitConstraints` · Operation ID: `relationship_operations.set_relationship_sigmoidal_gap_fit_constraints`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `use_sigmoidal_gap_constraints` | `optional bool` | Use Sigmoidal Gap Constraints | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipSigmoidalGapFitConstraints(SetRelationshipSigmoidalGapFitConstraintsRequest) returns (SetRelationshipSigmoidalGapFitConstraintsResult);

message SetRelationshipSigmoidalGapFitConstraintsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool use_sigmoidal_gap_constraints = 2;
}

message SetRelationshipSigmoidalGapFitConstraintsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Sub Sampling Options {/* #set-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options)

`/briosa.RelationshipOperations/SetRelationshipSubSamplingOptions` · Operation ID: `relationship_operations.set_relationship_sub_sampling_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `use_every_ith_point` | `optional bool` | Use every i-th point | false |
| Request | 3 | `i_value` | `optional int32` | i value | 20 |
| Request | 4 | `use_no_more_than_n_points` | `optional bool` | Use no more than n points | true |
| Request | 5 | `n_value` | `optional int32` | n value | 10000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipSubSamplingOptions(SetRelationshipSubSamplingOptionsRequest) returns (SetRelationshipSubSamplingOptionsResult);

message SetRelationshipSubSamplingOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool use_every_ith_point = 2;
  optional int32 i_value = 3;
  optional bool use_no_more_than_n_points = 4;
  optional int32 n_value = 5;
}

message SetRelationshipSubSamplingOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Tolerance (Scalar Type) {/* #set-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type)

`/briosa.RelationshipOperations/SetRelationshipToleranceScalarType` · Operation ID: `relationship_operations.set_relationship_tolerance_scalar_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `tolerance_options` | `optional ToleranceScalarOptions` | Tolerance Options | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipToleranceScalarType(SetRelationshipToleranceScalarTypeRequest) returns (SetRelationshipToleranceScalarTypeResult);

message SetRelationshipToleranceScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional ToleranceScalarOptions tolerance_options = 2;
}

message SetRelationshipToleranceScalarTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Tolerance (Vector Type) {/* #set-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type)

`/briosa.RelationshipOperations/SetRelationshipToleranceVectorType` · Operation ID: `relationship_operations.set_relationship_tolerance_vector_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `vector_tolerance` | `optional ToleranceVectorOptions` | Vector Tolerance | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipToleranceVectorType(SetRelationshipToleranceVectorTypeRequest) returns (SetRelationshipToleranceVectorTypeResult);

message SetRelationshipToleranceVectorTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional ToleranceVectorOptions vector_tolerance = 2;
}

message SetRelationshipToleranceVectorTypeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Voxel Cloud Display {/* #set-relationship-voxel-cloud-display */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display)

`/briosa.RelationshipOperations/SetRelationshipVoxelCloudDisplay` · Operation ID: `relationship_operations.set_relationship_voxel_cloud_display`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `enable_voxel_cloud_display` | `optional bool` | Enable Voxel Cloud Display? | true |
| Request | 3 | `voxel_size` | `optional double` | Voxel Size (-1.0 autodetect) | -1.000000 |
| Request | 4 | `min_pts_count_per_voxel` | `optional int32` | Min Pts Count Per Voxel | 3 |
| Request | 5 | `voxel_rendering_diameter` | `optional double` | Voxel Rendering Diameter % (-1.0 fast) | 125.000000 |
| Request | 6 | `surface_analysis_mode` | `optional SurfaceAnalysisMode` | Surface Analysis Mode | Relationship |
| Request | 7 | `colorization_options` | `optional ColorizationOptions` | Colorization Options | Red |
| Request | 8 | `show_color_bar_in_view` | `optional bool` | Show Color Bar in View? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipVoxelCloudDisplay(SetRelationshipVoxelCloudDisplayRequest) returns (SetRelationshipVoxelCloudDisplayResult);

message SetRelationshipVoxelCloudDisplayRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool enable_voxel_cloud_display = 2;
  optional double voxel_size = 3;
  optional int32 min_pts_count_per_voxel = 4;
  optional double voxel_rendering_diameter = 5;
  optional SurfaceAnalysisMode surface_analysis_mode = 6;
  optional ColorizationOptions colorization_options = 7;
  optional bool show_color_bar_in_view = 8;
}

message SetRelationshipVoxelCloudDisplayResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `voxel_size` | -1.0 selects automatic detection. |
| `voxel_rendering_diameter` | -1.0 selects fast rendering. |

## Set Relationship Weighting {/* #set-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting)

`/briosa.RelationshipOperations/SetRelationshipWeighting` · Operation ID: `relationship_operations.set_relationship_weighting`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `weight` | `optional double` | Weight | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipWeighting(SetRelationshipWeightingRequest) returns (SetRelationshipWeightingResult);

message SetRelationshipWeightingRequest {
  optional CollectionObjectName relationship_name = 1;
  optional double weight = 2;
}

message SetRelationshipWeightingResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Weights Normalized {/* #set-relationship-weights-normalized */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized)

`/briosa.RelationshipOperations/SetRelationshipWeightsNormalized` · Operation ID: `relationship_operations.set_relationship_weights_normalized`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `optional CollectionName` | Collection Name | Required |
| Request | 2 | `pick_weighting_mode` | `optional RelWeightingMode` | Pick Weighting Mode | Normalize on equation count |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipWeightsNormalized(SetRelationshipWeightsNormalizedRequest) returns (SetRelationshipWeightsNormalizedResult);

message SetRelationshipWeightsNormalizedRequest {
  optional CollectionName collection_name = 1;
  optional RelWeightingMode pick_weighting_mode = 2;
}

message SetRelationshipWeightsNormalizedResult {
  MpExecutionDetails execution = 1000;
}
```

## Generate Geometry Relationship Summary {/* #generate-geometry-relationship-summary */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary)

`/briosa.RelationshipOperations/GenerateGeometryRelationshipSummary` · Operation ID: `relationship_operations.generate_geometry_relationship_summary`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_ref_list` | `repeated CollectionItemName` | Relationship Ref List | Required |
| Request | 2 | `summary_table_name` | `optional string` | Summary Table Name | Geometry Relationship Summary |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GenerateGeometryRelationshipSummary(GenerateGeometryRelationshipSummaryRequest) returns (GenerateGeometryRelationshipSummaryResult);

message GenerateGeometryRelationshipSummaryRequest {
  repeated CollectionItemName relationship_ref_list = 1;
  optional string summary_table_name = 2;
}

message GenerateGeometryRelationshipSummaryResult {
  MpExecutionDetails execution = 1000;
}
```

## Edit Geometry Relationship Point List {/* #edit-geometry-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list)

`/briosa.RelationshipOperations/EditGeometryRelationshipPointList` · Operation ID: `relationship_operations.edit_geometry_relationship_point_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `point_edit_mode` | `optional GeometryRelationshipPointEditMode` | Point Edit Mode | Point List |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EditGeometryRelationshipPointList(EditGeometryRelationshipPointListRequest) returns (EditGeometryRelationshipPointListResult);

message EditGeometryRelationshipPointListRequest {
  optional CollectionItemName relationship_name = 1;
  optional GeometryRelationshipPointEditMode point_edit_mode = 2;
}

message EditGeometryRelationshipPointListResult {
  MpExecutionDetails execution = 1000;
}
```

## Filter Geometry Relationship Outlier Cloud Points {/* #filter-geometry-relationship-outlier-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

`/briosa.RelationshipOperations/FilterGeometryRelationshipOutlierCloudPoints` · Operation ID: `relationship_operations.filter_geometry_relationship_outlier_cloud_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `sigma_threshold` | `optional double` | Sigma Threshold | 3.000000 |
| Request | 3 | `modify_existing_input_clouds` | `optional bool` | Modify Existing Input Clouds | false |
| Result | 1 | `metrics` | `optional GeometryRelationshipOutlierFilterMetrics` | Exclude Point Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FilterGeometryRelationshipOutlierCloudPoints(FilterGeometryRelationshipOutlierCloudPointsRequest) returns (FilterGeometryRelationshipOutlierCloudPointsResult);

message FilterGeometryRelationshipOutlierCloudPointsRequest {
  optional CollectionItemName relationship_name = 1;
  optional double sigma_threshold = 2;
  optional bool modify_existing_input_clouds = 3;
}

message FilterGeometryRelationshipOutlierCloudPointsResult {
  optional GeometryRelationshipOutlierFilterMetrics metrics = 1;
  MpExecutionDetails execution = 1000;
}
```

## Relationship Watch Window Template {/* #relationship-watch-window-template */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template)

`/briosa.RelationshipOperations/RelationshipWatchWindowTemplate` · Operation ID: `relationship_operations.relationship_watch_window_template`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `watch_window_template_name` | `optional CollectionObjectName` | Watch Window Template Name | Required |
| Request | 2 | `linear_precision` | `optional int32` | Linear Precision | 4 |
| Request | 3 | `angular_precision` | `optional int32` | Angular Precision | 3 |
| Request | 4 | `font` | `optional Font` | Font | Message defaults |
| Request | 5 | `text_color` | `optional Color` | Text Color | Message defaults |
| Request | 6 | `background_color` | `optional Color` | Background Color | Message defaults |
| Request | 7 | `highlight_color` | `optional Color` | Highlight Color | Message defaults |
| Request | 8 | `show_deviation_x` | `optional bool` | Show Deviation X (Rx)? | true |
| Request | 9 | `show_deviation_y` | `optional bool` | Show Deviation Y (Ry)? | true |
| Request | 10 | `show_deviation_z` | `optional bool` | Show Deviation Z (Rz)? | true |
| Request | 11 | `show_deviation_magnitude` | `optional bool` | Show Deviation Mag? | true |
| Request | 12 | `udp_network_transmit_settings` | `optional RelationshipWatchWindowUdpSettings` | UDP Network Transmit Settings | Required |
| Request | 13 | `transparent_background` | `optional bool` | Transparent Background? | false |
| Request | 14 | `hide_units` | `optional bool` | Hide Units? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RelationshipWatchWindowTemplate(RelationshipWatchWindowTemplateRequest) returns (RelationshipWatchWindowTemplateResult);

message RelationshipWatchWindowTemplateRequest {
  optional CollectionObjectName watch_window_template_name = 1;
  optional int32 linear_precision = 2;
  optional int32 angular_precision = 3;
  optional Font font = 4;
  optional Color text_color = 5;
  optional Color background_color = 6;
  optional Color highlight_color = 7;
  optional bool show_deviation_x = 8;
  optional bool show_deviation_y = 9;
  optional bool show_deviation_z = 10;
  optional bool show_deviation_magnitude = 11;
  optional RelationshipWatchWindowUdpSettings udp_network_transmit_settings = 12;
  optional bool transparent_background = 13;
  optional bool hide_units = 14;
}

message RelationshipWatchWindowTemplateResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `show_deviation_x` | MP qualifier: Rx. |
| `show_deviation_y` | MP qualifier: Ry. |
| `show_deviation_z` | MP qualifier: Rz. |

## Make Point to Point Relationship {/* #make-point-to-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship)

`/briosa.RelationshipOperations/MakePointToPointRelationship` · Operation ID: `relationship_operations.make_point_to_point_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `first_point_name` | `optional PointName` | First Point Name | Required |
| Request | 3 | `second_point_name` | `optional PointName` | Second Point Name | Required |
| Request | 4 | `tolerance` | `optional ToleranceVectorOptions` | Tolerance | Required |
| Request | 5 | `constraint` | `optional ToleranceVectorOptions` | Constraint | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointToPointRelationship(MakePointToPointRelationshipRequest) returns (MakePointToPointRelationshipResult);

message MakePointToPointRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional PointName first_point_name = 2;
  optional PointName second_point_name = 3;
  optional ToleranceVectorOptions tolerance = 4;
  optional ToleranceVectorOptions constraint = 5;
}

message MakePointToPointRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Frame to Frame Relationship {/* #make-frame-to-frame-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship)

`/briosa.RelationshipOperations/MakeFrameToFrameRelationship` · Operation ID: `relationship_operations.make_frame_to_frame_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `first_frame_name` | `optional CollectionObjectName` | First Frame Name | Required |
| Request | 3 | `second_frame_name` | `optional CollectionObjectName` | Second Frame Name | Required |
| Request | 4 | `orientation_tolerance` | `optional ToleranceScalarOptions` | Orientation Tolerance | Required |
| Request | 5 | `position_tolerance` | `optional ToleranceVectorOptions` | Position Tolerance | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeFrameToFrameRelationship(MakeFrameToFrameRelationshipRequest) returns (MakeFrameToFrameRelationshipResult);

message MakeFrameToFrameRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional CollectionObjectName first_frame_name = 2;
  optional CollectionObjectName second_frame_name = 3;
  optional ToleranceScalarOptions orientation_tolerance = 4;
  optional ToleranceVectorOptions position_tolerance = 5;
}

message MakeFrameToFrameRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Points to Objects Relationship {/* #make-points-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship)

`/briosa.RelationshipOperations/MakePointsToObjectsRelationship` · Operation ID: `relationship_operations.make_points_to_objects_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `points_in_relationship` | `repeated PointName` | Points in Relationship | Required |
| Request | 3 | `objects_in_relationship` | `repeated CollectionObjectName` | Objects in Relationship | Required |
| Request | 4 | `projection_options` | `optional ProjectionOptions` | Projection Options | Required |
| Request | 5 | `auto_update_a_vector_group` | `optional bool` | Auto Update a Vector Group? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointsToObjectsRelationship(MakePointsToObjectsRelationshipRequest) returns (MakePointsToObjectsRelationshipResult);

message MakePointsToObjectsRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  repeated PointName points_in_relationship = 2;
  repeated CollectionObjectName objects_in_relationship = 3;
  optional ProjectionOptions projection_options = 4;
  optional bool auto_update_a_vector_group = 5;
}

message MakePointsToObjectsRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Points to Points Relationship {/* #make-points-to-points-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship)

`/briosa.RelationshipOperations/MakePointsToPointsRelationship` · Operation ID: `relationship_operations.make_points_to_points_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `nominal_points` | `repeated PointName` | Nominal Points | Required |
| Request | 3 | `measured_points` | `repeated PointName` | Measured Points | Required |
| Request | 4 | `auto_update_a_vector_group` | `optional bool` | Auto Update a Vector Group? | false |
| Request | 5 | `tolerance` | `optional ToleranceVectorOptions` | Tolerance | Required |
| Request | 6 | `constraint` | `optional ToleranceVectorOptions` | Constraint | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointsToPointsRelationship(MakePointsToPointsRelationshipRequest) returns (MakePointsToPointsRelationshipResult);

message MakePointsToPointsRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  repeated PointName nominal_points = 2;
  repeated PointName measured_points = 3;
  optional bool auto_update_a_vector_group = 4;
  optional ToleranceVectorOptions tolerance = 5;
  optional ToleranceVectorOptions constraint = 6;
}

message MakePointsToPointsRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Groups to Objects Relationship {/* #make-groups-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship)

`/briosa.RelationshipOperations/MakeGroupsToObjectsRelationship` · Operation ID: `relationship_operations.make_groups_to_objects_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `point_groups_in_relationship` | `repeated CollectionObjectName` | Point Groups in Relationship | Required |
| Request | 3 | `objects_in_relationship` | `repeated CollectionObjectName` | Objects in Relationship | Required |
| Request | 4 | `projection_options` | `optional ProjectionOptions` | Projection Options | Required |
| Request | 5 | `auto_update_a_vector_group` | `optional bool` | Auto Update a Vector Group? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeGroupsToObjectsRelationship(MakeGroupsToObjectsRelationshipRequest) returns (MakeGroupsToObjectsRelationshipResult);

message MakeGroupsToObjectsRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  repeated CollectionObjectName point_groups_in_relationship = 2;
  repeated CollectionObjectName objects_in_relationship = 3;
  optional ProjectionOptions projection_options = 4;
  optional bool auto_update_a_vector_group = 5;
}

message MakeGroupsToObjectsRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Object to Object Direction Relationship {/* #make-object-to-object-direction-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship)

`/briosa.RelationshipOperations/MakeObjectToObjectDirectionRelationship` · Operation ID: `relationship_operations.make_object_to_object_direction_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `first_object_in_relationship` | `optional CollectionObjectName` | First Object in Relationship | Required |
| Request | 3 | `second_object_in_relationship` | `optional CollectionObjectName` | Second Object in Relationship | Required |
| Request | 4 | `nominal_angle` | `optional double` | Nominal Angle | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeObjectToObjectDirectionRelationship(MakeObjectToObjectDirectionRelationshipRequest) returns (MakeObjectToObjectDirectionRelationshipResult);

message MakeObjectToObjectDirectionRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional CollectionObjectName first_object_in_relationship = 2;
  optional CollectionObjectName second_object_in_relationship = 3;
  optional double nominal_angle = 4;
}

message MakeObjectToObjectDirectionRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Point Clouds to Objects Relationship {/* #make-point-clouds-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship)

`/briosa.RelationshipOperations/MakePointCloudsToObjectsRelationship` · Operation ID: `relationship_operations.make_point_clouds_to_objects_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `point_clouds_in_relationship` | `repeated CollectionObjectName` | Point Clouds in Relationship | Required |
| Request | 3 | `objects_in_relationship` | `repeated CollectionObjectName` | Objects in Relationship | Required |
| Request | 4 | `projection_options` | `optional ProjectionOptions` | Projection Options | Required |
| Request | 5 | `auto_update_a_vector_group` | `optional bool` | Auto Update a Vector Group? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointCloudsToObjectsRelationship(MakePointCloudsToObjectsRelationshipRequest) returns (MakePointCloudsToObjectsRelationshipResult);

message MakePointCloudsToObjectsRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  repeated CollectionObjectName point_clouds_in_relationship = 2;
  repeated CollectionObjectName objects_in_relationship = 3;
  optional ProjectionOptions projection_options = 4;
  optional bool auto_update_a_vector_group = 5;
}

message MakePointCloudsToObjectsRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Group to Group Relationship {/* #make-group-to-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship)

`/briosa.RelationshipOperations/MakeGroupToGroupRelationship` · Operation ID: `relationship_operations.make_group_to_group_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `first_group_name` | `optional CollectionObjectName` | First Group Name | Required |
| Request | 3 | `second_group_name` | `optional CollectionObjectName` | Second Group Name | Required |
| Request | 4 | `auto_update_a_vector_group` | `optional bool` | Auto Update a Vector Group? | false |
| Request | 5 | `tolerance` | `optional ToleranceVectorOptions` | Tolerance | Required |
| Request | 6 | `constraint` | `optional ToleranceVectorOptions` | Constraint | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeGroupToGroupRelationship(MakeGroupToGroupRelationshipRequest) returns (MakeGroupToGroupRelationshipResult);

message MakeGroupToGroupRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional CollectionObjectName first_group_name = 2;
  optional CollectionObjectName second_group_name = 3;
  optional bool auto_update_a_vector_group = 4;
  optional ToleranceVectorOptions tolerance = 5;
  optional ToleranceVectorOptions constraint = 6;
}

message MakeGroupToGroupRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Group to Nominal Group Relationship {/* #make-group-to-nominal-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship)

`/briosa.RelationshipOperations/MakeGroupToNominalGroupRelationship` · Operation ID: `relationship_operations.make_group_to_nominal_group_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `nominal_group_name` | `optional CollectionObjectName` | Nominal Group Name | Required |
| Request | 3 | `measured_group_name` | `optional CollectionObjectName` | Measured Group Name | Required |
| Request | 4 | `auto_update_a_vector_group` | `optional bool` | Auto Update a Vector Group? | false |
| Request | 5 | `use_closest_point` | `optional bool` | Use Closest Point? | true |
| Request | 6 | `display_closest_point_watch_window` | `optional bool` | Display Closest Point Watch Window? | false |
| Request | 7 | `use_view_zooming_with_proximity` | `optional bool` | Use View Zooming With Proximity? | false |
| Request | 8 | `ignore_points_beyond_threshold` | `optional bool` | Ignore Points Beyond Threshold? | false |
| Request | 9 | `proximity_threshold` | `optional double` | Proximity Threshold? | 0.010000 |
| Request | 10 | `tolerance` | `optional ToleranceVectorOptions` | Tolerance | Required |
| Request | 11 | `constraint` | `optional ToleranceVectorOptions` | Constraint | Required |
| Request | 12 | `fit_weight` | `optional double` | Fit Weight | 1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeGroupToNominalGroupRelationship(MakeGroupToNominalGroupRelationshipRequest) returns (MakeGroupToNominalGroupRelationshipResult);

message MakeGroupToNominalGroupRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional CollectionObjectName nominal_group_name = 2;
  optional CollectionObjectName measured_group_name = 3;
  optional bool auto_update_a_vector_group = 4;
  optional bool use_closest_point = 5;
  optional bool display_closest_point_watch_window = 6;
  optional bool use_view_zooming_with_proximity = 7;
  optional bool ignore_points_beyond_threshold = 8;
  optional double proximity_threshold = 9;
  optional ToleranceVectorOptions tolerance = 10;
  optional ToleranceVectorOptions constraint = 11;
  optional double fit_weight = 12;
}

message MakeGroupToNominalGroupRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Average Point Relationship {/* #make-average-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship)

`/briosa.RelationshipOperations/MakeAveragePointRelationship` · Operation ID: `relationship_operations.make_average_point_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `points_in_relationship` | `repeated PointName` | Points in Relationship | Required |
| Request | 3 | `average_point_name` | `optional PointName` | Average Point Name (Optional) | Omitted |
| Request | 4 | `nominal_point_name` | `optional PointName` | Nominal Point Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeAveragePointRelationship(MakeAveragePointRelationshipRequest) returns (MakeAveragePointRelationshipResult);

message MakeAveragePointRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  repeated PointName points_in_relationship = 2;
  optional PointName average_point_name = 3;
  optional PointName nominal_point_name = 4;
}

message MakeAveragePointRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Geometry Fit Only Relationship {/* #make-geometry-fit-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship)

`/briosa.RelationshipOperations/MakeGeometryFitOnlyRelationship` · Operation ID: `relationship_operations.make_geometry_fit_only_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `point_groups_to_fit` | `repeated CollectionObjectName` | Point Groups to Fit | Required |
| Request | 3 | `geometry_type` | `optional GeometryType` | Geometry Type | Required |
| Request | 4 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name (Optional) | Omitted |
| Request | 5 | `fit_profile_name` | `optional string` | Fit Profile Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeGeometryFitOnlyRelationship(MakeGeometryFitOnlyRelationshipRequest) returns (MakeGeometryFitOnlyRelationshipResult);

message MakeGeometryFitOnlyRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  repeated CollectionObjectName point_groups_to_fit = 2;
  optional GeometryType geometry_type = 3;
  optional CollectionObjectName resulting_object_name = 4;
  optional string fit_profile_name = 5;
}

message MakeGeometryFitOnlyRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Geometry Fit and Compare to Nominal Relationship {/* #make-geometry-fit-and-compare-to-nominal-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

`/briosa.RelationshipOperations/MakeGeometryFitAndCompareToNominalRelationship` · Operation ID: `relationship_operations.make_geometry_fit_and_compare_to_nominal_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `nominal_geometry` | `optional CollectionObjectName` | Nominal Geometry | Required |
| Request | 3 | `point_groups_to_fit` | `repeated CollectionObjectName` | Point Groups to Fit | Required |
| Request | 4 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name (Optional) | Omitted |
| Request | 5 | `fit_profile_name` | `optional string` | Fit Profile Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeGeometryFitAndCompareToNominalRelationship(MakeGeometryFitAndCompareToNominalRelationshipRequest) returns (MakeGeometryFitAndCompareToNominalRelationshipResult);

message MakeGeometryFitAndCompareToNominalRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional CollectionObjectName nominal_geometry = 2;
  repeated CollectionObjectName point_groups_to_fit = 3;
  optional CollectionObjectName resulting_object_name = 4;
  optional string fit_profile_name = 5;
}

message MakeGeometryFitAndCompareToNominalRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Geometry Compare Only Relationship {/* #make-geometry-compare-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship)

`/briosa.RelationshipOperations/MakeGeometryCompareOnlyRelationship` · Operation ID: `relationship_operations.make_geometry_compare_only_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `nominal_geometry` | `optional CollectionObjectName` | Nominal Geometry | Required |
| Request | 3 | `measured_geometry` | `optional CollectionObjectName` | Measured Geometry | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeGeometryCompareOnlyRelationship(MakeGeometryCompareOnlyRelationshipRequest) returns (MakeGeometryCompareOnlyRelationshipResult);

message MakeGeometryCompareOnlyRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional CollectionObjectName nominal_geometry = 2;
  optional CollectionObjectName measured_geometry = 3;
}

message MakeGeometryCompareOnlyRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Dynamic Point Relationship {/* #make-dynamic-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship)

`/briosa.RelationshipOperations/MakeDynamicPointRelationship` · Operation ID: `relationship_operations.make_dynamic_point_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `construction_mode` | `optional DynamicPointMode` | Construction Mode | Required |
| Request | 3 | `first_reference_geometry` | `optional CollectionObjectName` | First Reference Geometry | Required |
| Request | 4 | `second_reference_geometry` | `optional CollectionObjectName` | Second Reference Geometry | Required |
| Request | 5 | `third_reference_geometry` | `optional CollectionObjectName` | Third Reference Geometry | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeDynamicPointRelationship(MakeDynamicPointRelationshipRequest) returns (MakeDynamicPointRelationshipResult);

message MakeDynamicPointRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional DynamicPointMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
  optional CollectionObjectName third_reference_geometry = 5;
}

message MakeDynamicPointRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Dynamic Line Relationship {/* #make-dynamic-line-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship)

`/briosa.RelationshipOperations/MakeDynamicLineRelationship` · Operation ID: `relationship_operations.make_dynamic_line_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `construction_mode` | `optional DynamicLineMode` | Construction Mode | Required |
| Request | 3 | `first_reference_geometry` | `optional CollectionObjectName` | First Reference Geometry | Required |
| Request | 4 | `second_reference_geometry` | `optional CollectionObjectName` | Second Reference Geometry | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeDynamicLineRelationship(MakeDynamicLineRelationshipRequest) returns (MakeDynamicLineRelationshipResult);

message MakeDynamicLineRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional DynamicLineMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
}

message MakeDynamicLineRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Dynamic Plane Relationship {/* #make-dynamic-plane-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship)

`/briosa.RelationshipOperations/MakeDynamicPlaneRelationship` · Operation ID: `relationship_operations.make_dynamic_plane_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `construction_mode` | `optional DynamicPlaneMode` | Construction Mode | Required |
| Request | 3 | `first_reference_geometry` | `optional CollectionObjectName` | First Reference Geometry | Required |
| Request | 4 | `second_reference_geometry` | `optional CollectionObjectName` | Second Reference Geometry | Required |
| Request | 5 | `offset_plane_offset` | `optional double` | Offset Plane Offset | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeDynamicPlaneRelationship(MakeDynamicPlaneRelationshipRequest) returns (MakeDynamicPlaneRelationshipResult);

message MakeDynamicPlaneRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional DynamicPlaneMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
  optional double offset_plane_offset = 5;
}

message MakeDynamicPlaneRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Dynamic Circle Relationship {/* #make-dynamic-circle-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship)

`/briosa.RelationshipOperations/MakeDynamicCircleRelationship` · Operation ID: `relationship_operations.make_dynamic_circle_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `construction_mode` | `optional DynamicCircleMode` | Construction Mode | Required |
| Request | 3 | `first_reference_geometry` | `optional CollectionObjectName` | First Reference Geometry | Required |
| Request | 4 | `second_reference_geometry` | `optional CollectionObjectName` | Second Reference Geometry | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeDynamicCircleRelationship(MakeDynamicCircleRelationshipRequest) returns (MakeDynamicCircleRelationshipResult);

message MakeDynamicCircleRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional DynamicCircleMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
}

message MakeDynamicCircleRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Dynamic Ellipse Relationship {/* #make-dynamic-ellipse-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship)

`/briosa.RelationshipOperations/MakeDynamicEllipseRelationship` · Operation ID: `relationship_operations.make_dynamic_ellipse_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `construction_mode` | `optional DynamicEllipseMode` | Construction Mode | Required |
| Request | 3 | `first_reference_geometry` | `optional CollectionObjectName` | First Reference Geometry | Required |
| Request | 4 | `second_reference_geometry` | `optional CollectionObjectName` | Second Reference Geometry | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeDynamicEllipseRelationship(MakeDynamicEllipseRelationshipRequest) returns (MakeDynamicEllipseRelationshipResult);

message MakeDynamicEllipseRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional DynamicEllipseMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
}

message MakeDynamicEllipseRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Vector Group To Vector Group Relationship {/* #make-vector-group-to-vector-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship)

`/briosa.RelationshipOperations/MakeVectorGroupToVectorGroupRelationship` · Operation ID: `relationship_operations.make_vector_group_to_vector_group_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_vg_to_vg_relationship` | `optional CollectionItemName` | New VG To VG Relationship | Required |
| Request | 2 | `reference_vector_group` | `optional CollectionObjectName` | Reference Vector Group | Required |
| Request | 3 | `corresponding_vector_group` | `optional CollectionObjectName` | Corresponding Vector Group | Required |
| Request | 4 | `set_opposing_vector_group_polarity` | `optional bool` | Set Opposing Vector Group Polarity | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeVectorGroupToVectorGroupRelationship(MakeVectorGroupToVectorGroupRelationshipRequest) returns (MakeVectorGroupToVectorGroupRelationshipResult);

message MakeVectorGroupToVectorGroupRelationshipRequest {
  optional CollectionItemName new_vg_to_vg_relationship = 1;
  optional CollectionObjectName reference_vector_group = 2;
  optional CollectionObjectName corresponding_vector_group = 3;
  optional bool set_opposing_vector_group_polarity = 4;
}

message MakeVectorGroupToVectorGroupRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector Group To Vector Group Cylindrical Zone {/* #set-vector-group-to-vector-group-cylindrical-zone */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

`/briosa.RelationshipOperations/SetVectorGroupToVectorGroupCylindricalZone` · Operation ID: `relationship_operations.set_vector_group_to_vector_group_cylindrical_zone`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vg_to_vg_relationship` | `optional CollectionItemName` | VG To VG Relationship | Required |
| Request | 2 | `radial_offset` | `optional double` | Radial Offset | 1.000000 |
| Request | 3 | `minimum_axial_offset` | `optional double` | Minimum Axial Offset | -10.000000 |
| Request | 4 | `maximum_axial_offset` | `optional double` | Maximum Axial Offset | 10.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorGroupToVectorGroupCylindricalZone(SetVectorGroupToVectorGroupCylindricalZoneRequest) returns (SetVectorGroupToVectorGroupCylindricalZoneResult);

message SetVectorGroupToVectorGroupCylindricalZoneRequest {
  optional CollectionItemName vg_to_vg_relationship = 1;
  optional double radial_offset = 2;
  optional double minimum_axial_offset = 3;
  optional double maximum_axial_offset = 4;
}

message SetVectorGroupToVectorGroupCylindricalZoneResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector Group To Vector Group Fit Weights {/* #set-vector-group-to-vector-group-fit-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights)

`/briosa.RelationshipOperations/SetVectorGroupToVectorGroupFitWeights` · Operation ID: `relationship_operations.set_vector_group_to_vector_group_fit_weights`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vg_to_vg_relationship` | `optional CollectionItemName` | VG To VG Relationship | Required |
| Request | 2 | `minimum_gap` | `optional double` | Minimum Gap | 0.000000 |
| Request | 3 | `minimum_gap_fit_weight` | `optional double` | Minimum Gap Fit Weight | 10.000000 |
| Request | 4 | `maximum_gap` | `optional double` | Maximum Gap | 0.000000 |
| Request | 5 | `maximum_gap_fit_weight` | `optional double` | Maximum Gap Fit Weight | 10.000000 |
| Request | 6 | `nominal_gap` | `optional double` | Nominal Gap | 0.000000 |
| Request | 7 | `nominal_gap_fit_weight` | `optional double` | Nominal Gap Fit Weight | 1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorGroupToVectorGroupFitWeights(SetVectorGroupToVectorGroupFitWeightsRequest) returns (SetVectorGroupToVectorGroupFitWeightsResult);

message SetVectorGroupToVectorGroupFitWeightsRequest {
  optional CollectionItemName vg_to_vg_relationship = 1;
  optional double minimum_gap = 2;
  optional double minimum_gap_fit_weight = 3;
  optional double maximum_gap = 4;
  optional double maximum_gap_fit_weight = 5;
  optional double nominal_gap = 6;
  optional double nominal_gap_fit_weight = 7;
}

message SetVectorGroupToVectorGroupFitWeightsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector Group To Vector Group Fit Gradient Factor {/* #set-vector-group-to-vector-group-fit-gradient-factor */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

`/briosa.RelationshipOperations/SetVectorGroupToVectorGroupFitGradientFactor` · Operation ID: `relationship_operations.set_vector_group_to_vector_group_fit_gradient_factor`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vg_to_vg_relationship` | `optional CollectionItemName` | VG To VG Relationship | Required |
| Request | 2 | `fit_gradient_factor` | `optional double` | Fit Gradient Factor | 50.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorGroupToVectorGroupFitGradientFactor(SetVectorGroupToVectorGroupFitGradientFactorRequest) returns (SetVectorGroupToVectorGroupFitGradientFactorResult);

message SetVectorGroupToVectorGroupFitGradientFactorRequest {
  optional CollectionItemName vg_to_vg_relationship = 1;
  optional double fit_gradient_factor = 2;
}

message SetVectorGroupToVectorGroupFitGradientFactorResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector Group To Vector Group Relative Polarity {/* #set-vector-group-to-vector-group-relative-polarity */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-relative-polarity)

`/briosa.RelationshipOperations/SetVectorGroupToVectorGroupRelativePolarity` · Operation ID: `relationship_operations.set_vector_group_to_vector_group_relative_polarity`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vg_to_vg_relationship` | `optional CollectionItemName` | VG To VG Relationship | Required |
| Request | 2 | `set_opposing_vector_group_polarity` | `optional bool` | Set Opposing Vector Group Polarity | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorGroupToVectorGroupRelativePolarity(SetVectorGroupToVectorGroupRelativePolarityRequest) returns (SetVectorGroupToVectorGroupRelativePolarityResult);

message SetVectorGroupToVectorGroupRelativePolarityRequest {
  optional CollectionItemName vg_to_vg_relationship = 1;
  optional bool set_opposing_vector_group_polarity = 2;
}

message SetVectorGroupToVectorGroupRelativePolarityResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Relationship {/* #delete-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#delete-relationship)

`/briosa.RelationshipOperations/DeleteRelationship` · Operation ID: `relationship_operations.delete_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteRelationship(DeleteRelationshipRequest) returns (DeleteRelationshipResult);

message DeleteRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
}

message DeleteRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Optimization Search Options {/* #set-optimization-search-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-search-options)

`/briosa.RelationshipOperations/SetOptimizationSearchOptions` · Operation ID: `relationship_operations.set_optimization_search_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `max_number_of_step_size_reduction` | `optional int32` | Max Number of Step Size Reduction | 5 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetOptimizationSearchOptions(SetOptimizationSearchOptionsRequest) returns (SetOptimizationSearchOptionsResult);

message SetOptimizationSearchOptionsRequest {
  optional int32 max_number_of_step_size_reduction = 1;
}

message SetOptimizationSearchOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Optimization Perturbation Parameters {/* #set-optimization-perturbation-parameters */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-perturbation-parameters)

`/briosa.RelationshipOperations/SetOptimizationPerturbationParameters` · Operation ID: `relationship_operations.set_optimization_perturbation_parameters`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `length_perturbation` | `optional double` | Length Perturbation | 0.000100 |
| Request | 2 | `angular_perturbation` | `optional double` | Angular Perturbation | 0.000100 |
| Request | 3 | `damping` | `optional double` | Damping  | 1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetOptimizationPerturbationParameters(SetOptimizationPerturbationParametersRequest) returns (SetOptimizationPerturbationParametersResult);

message SetOptimizationPerturbationParametersRequest {
  optional double length_perturbation = 1;
  optional double angular_perturbation = 2;
  optional double damping = 3;
}

message SetOptimizationPerturbationParametersResult {
  MpExecutionDetails execution = 1000;
}
```

## Do Relationship Fit {/* #do-relationship-fit */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#do-relationship-fit)

`/briosa.RelationshipOperations/DoRelationshipFit` · Operation ID: `relationship_operations.do_relationship_fit`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_containing_relationships` | `optional string` | Collection Containing Relationships | Required |
| Request | 2 | `objects_to_move` | `repeated CollectionObjectName` | Objects to Move | Required |
| Request | 3 | `instruments_to_move` | `repeated CollectionInstrumentId` | Instruments to Move | Required |
| Request | 4 | `solver_mode` | `optional SolverMode` | Solver Mode | Gauss-Newton |
| Request | 5 | `motion_to_allow` | `optional FitDofOptions` | Motion to allow | Required |
| Request | 6 | `enable_randomized_start` | `optional bool` | Enable Randomized Start | false |
| Request | 7 | `use_fit_dialog` | `optional bool` | Use Fit Dialog | false |
| Result | 1 | `transform_in_reference` | `optional Transform` | Transform In Reference | — |
| Result | 2 | `transform_in_working` | `optional WorldTransform` | Transform In Working | — |
| Result | 3 | `transform_in_world` | `optional WorldTransform` | Transform In World | — |
| Result | 4 | `fit_objective_value` | `optional double` | Fit Objective Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DoRelationshipFit(DoRelationshipFitRequest) returns (DoRelationshipFitResult);

message DoRelationshipFitRequest {
  optional string collection_containing_relationships = 1;
  repeated CollectionObjectName objects_to_move = 2;
  repeated CollectionInstrumentId instruments_to_move = 3;
  optional SolverMode solver_mode = 4;
  optional FitDofOptions motion_to_allow = 5;
  optional bool enable_randomized_start = 6;
  optional bool use_fit_dialog = 7;
}

message DoRelationshipFitResult {
  optional Transform transform_in_reference = 1;
  optional WorldTransform transform_in_working = 2;
  optional WorldTransform transform_in_world = 3;
  optional double fit_objective_value = 4;
  MpExecutionDetails execution = 1000;
}
```

## Move Collections by Minimizing Relationships {/* #move-collections-by-minimizing-relationships */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#move-collections-by-minimizing-relationships)

`/briosa.RelationshipOperations/MoveCollectionsByMinimizingRelationships` · Operation ID: `relationship_operations.move_collections_by_minimizing_relationships`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collections_to_move` | `repeated string` | Collections To Move | Empty |
| Request | 2 | `relationships_to_minimize` | `repeated CollectionItemName` | Relationships To Minimize | Required |
| Request | 3 | `solver_mode` | `optional SolverMode` | Solver Mode | Gauss-Newton |
| Request | 4 | `motion_to_allow` | `optional FitDofOptions` | Motion to allow | Required |
| Request | 5 | `use_fit_dialog` | `optional bool` | Use Fit Dialog | false |
| Request | 6 | `convergence_threshold` | `optional double` | Convergence Threshold | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MoveCollectionsByMinimizingRelationships(MoveCollectionsByMinimizingRelationshipsRequest) returns (MoveCollectionsByMinimizingRelationshipsResult);

message MoveCollectionsByMinimizingRelationshipsRequest {
  repeated string collections_to_move = 1;
  repeated CollectionItemName relationships_to_minimize = 2;
  optional SolverMode solver_mode = 3;
  optional FitDofOptions motion_to_allow = 4;
  optional bool use_fit_dialog = 5;
  optional double convergence_threshold = 6;
}

message MoveCollectionsByMinimizingRelationshipsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get General Relationship Statistics {/* #get-general-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-general-relationship-statistics)

`/briosa.RelationshipOperations/GetGeneralRelationshipStatistics` · Operation ID: `relationship_operations.get_general_relationship_statistics`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Result | 1 | `absolute_max_deviation` | `optional double` | Absolute Max Deviation | — |
| Result | 2 | `rms` | `optional double` | RMS | — |
| Result | 3 | `has_signed_deviation` | `optional bool` | Has Signed Deviation? | — |
| Result | 4 | `signed_max_deviation` | `optional double` | Signed Max Deviation | — |
| Result | 5 | `signed_min_deviation` | `optional double` | Signed Min Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeneralRelationshipStatistics(GetGeneralRelationshipStatisticsRequest) returns (GetGeneralRelationshipStatisticsResult);

message GetGeneralRelationshipStatisticsRequest {
  optional CollectionItemName relationship_name = 1;
}

message GetGeneralRelationshipStatisticsResult {
  optional double absolute_max_deviation = 1;
  optional double rms = 2;
  optional bool has_signed_deviation = 3;
  optional double signed_max_deviation = 4;
  optional double signed_min_deviation = 5;
  MpExecutionDetails execution = 1000;
}
```

## Get Points to Objects Relationship Statistics {/* #get-points-to-objects-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-objects-relationship-statistics)

`/briosa.RelationshipOperations/GetPointsToObjectsRelationshipStatistics` · Operation ID: `relationship_operations.get_points_to_objects_relationship_statistics`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Result | 1 | `absolute_max_deviation` | `optional double` | Absolute Max Deviation | — |
| Result | 2 | `max_deviation` | `optional double` | Max Deviation | — |
| Result | 3 | `min_deviation` | `optional double` | Min Deviation | — |
| Result | 4 | `avg_deviation` | `optional double` | Avg Deviation | — |
| Result | 5 | `rms` | `optional double` | RMS | — |
| Result | 6 | `candidate_point_count` | `optional int32` | # of Candidate Points | — |
| Result | 7 | `sampled_point_count` | `optional int32` | # of Points Sampled | — |
| Result | 8 | `rejected_point_count` | `optional int32` | # of Points Rejected | — |
| Result | 9 | `used_point_count` | `optional int32` | # of Points Used | — |
| Result | 10 | `out_of_tolerance_point_count` | `optional int32` | # of Points Out of Tolerance | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPointsToObjectsRelationshipStatistics(GetPointsToObjectsRelationshipStatisticsRequest) returns (GetPointsToObjectsRelationshipStatisticsResult);

message GetPointsToObjectsRelationshipStatisticsRequest {
  optional CollectionItemName relationship_name = 1;
}

message GetPointsToObjectsRelationshipStatisticsResult {
  optional double absolute_max_deviation = 1;
  optional double max_deviation = 2;
  optional double min_deviation = 3;
  optional double avg_deviation = 4;
  optional double rms = 5;
  optional int32 candidate_point_count = 6;
  optional int32 sampled_point_count = 7;
  optional int32 rejected_point_count = 8;
  optional int32 used_point_count = 9;
  optional int32 out_of_tolerance_point_count = 10;
  MpExecutionDetails execution = 1000;
}
```

## Start/Stop Relationship Trapping {/* #startstop-relationship-trapping */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#startstop-relationship-trapping)

`/briosa.RelationshipOperations/StartStopRelationshipTrapping` · Operation ID: `relationship_operations.start_stop_relationship_trapping`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 3 | `start_trapping` | `optional bool` | Start Trapping (FALSE = Stop) | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc StartStopRelationshipTrapping(StartStopRelationshipTrappingRequest) returns (StartStopRelationshipTrappingResult);

message StartStopRelationshipTrappingRequest {
  optional CollectionItemName relationship_name = 1;
  optional CollectionInstrumentId instrument_id = 2;
  optional bool start_trapping = 3;
}

message StartStopRelationshipTrappingResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Point to Point Relationship Statistics {/* #get-point-to-point-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-point-to-point-relationship-statistics)

`/briosa.RelationshipOperations/GetPointToPointRelationshipStatistics` · Operation ID: `relationship_operations.get_point_to_point_relationship_statistics`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Result | 1 | `delta_x` | `optional double` | Delta X | — |
| Result | 2 | `delta_y` | `optional double` | Delta Y | — |
| Result | 3 | `delta_z` | `optional double` | Delta Z | — |
| Result | 4 | `delta_magnitude` | `optional double` | Delta Magnitude | — |
| Result | 5 | `reference_frame` | `optional CollectionObjectName` | Reference Frame | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPointToPointRelationshipStatistics(GetPointToPointRelationshipStatisticsRequest) returns (GetPointToPointRelationshipStatisticsResult);

message GetPointToPointRelationshipStatisticsRequest {
  optional CollectionItemName relationship_name = 1;
}

message GetPointToPointRelationshipStatisticsResult {
  optional double delta_x = 1;
  optional double delta_y = 2;
  optional double delta_z = 3;
  optional double delta_magnitude = 4;
  optional CollectionObjectName reference_frame = 5;
  MpExecutionDetails execution = 1000;
}
```

## Set Group To Nominal Group View Zooming {/* #set-group-to-nominal-group-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming)

`/briosa.RelationshipOperations/SetGroupToNominalGroupViewZooming` · Operation ID: `relationship_operations.set_group_to_nominal_group_view_zooming`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `use_closest_point` | `optional bool` | Use Closest Point | true |
| Request | 3 | `show_closest_point_watch_window` | `optional bool` | Show Closest Point Watch Window | false |
| Request | 4 | `use_view_zooming` | `optional bool` | Use View Zooming | true |
| Request | 5 | `ignore_points_beyond_threshold` | `optional bool` | Ignore Points Beyond Threshold | true |
| Request | 6 | `proximity_threshold` | `optional double` | Proximity Threshold | 0.010000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGroupToNominalGroupViewZooming(SetGroupToNominalGroupViewZoomingRequest) returns (SetGroupToNominalGroupViewZoomingResult);

message SetGroupToNominalGroupViewZoomingRequest {
  optional CollectionItemName relationship_name = 1;
  optional bool use_closest_point = 2;
  optional bool show_closest_point_watch_window = 3;
  optional bool use_view_zooming = 4;
  optional bool ignore_points_beyond_threshold = 5;
  optional double proximity_threshold = 6;
}

message SetGroupToNominalGroupViewZoomingResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Associated Data {/* #set-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data)

`/briosa.RelationshipOperations/SetRelationshipAssociatedData` · Operation ID: `relationship_operations.set_relationship_associated_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `individual_points` | `optional PointNameList` | Individual Points | Required |
| Request | 3 | `point_groups` | `optional CollectionObjectNameList` | Point Groups | Required |
| Request | 4 | `point_clouds` | `optional CollectionObjectNameList` | Point Clouds | Required |
| Request | 5 | `objects` | `optional CollectionObjectNameList` | Objects | Required |
| Request | 6 | `ignore_empty_arguments` | `optional bool` | Ignore Empty Arguments? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipAssociatedData(SetRelationshipAssociatedDataRequest) returns (SetRelationshipAssociatedDataResult);

message SetRelationshipAssociatedDataRequest {
  optional CollectionItemName relationship_name = 1;
  optional PointNameList individual_points = 2;
  optional CollectionObjectNameList point_groups = 3;
  optional CollectionObjectNameList point_clouds = 4;
  optional CollectionObjectNameList objects = 5;
  optional bool ignore_empty_arguments = 6;
}

message SetRelationshipAssociatedDataResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Associated Data {/* #get-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data)

`/briosa.RelationshipOperations/GetRelationshipAssociatedData` · Operation ID: `relationship_operations.get_relationship_associated_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Result | 1 | `associated_data` | `optional RelationshipAssociatedData` | Objects | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipAssociatedData(GetRelationshipAssociatedDataRequest) returns (GetRelationshipAssociatedDataResult);

message GetRelationshipAssociatedDataRequest {
  optional CollectionItemName relationship_name = 1;
}

message GetRelationshipAssociatedDataResult {
  optional RelationshipAssociatedData associated_data = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Points to Points Relationship Associated Data {/* #set-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data)

`/briosa.RelationshipOperations/SetPointsToPointsRelationshipAssociatedData` · Operation ID: `relationship_operations.set_points_to_points_relationship_associated_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `nominal_points` | `optional PointNameList` | Nominal Points | Required |
| Request | 3 | `actual_points` | `optional PointNameList` | Actual Points | Required |
| Request | 4 | `ignore_empty_arguments` | `optional bool` | Ignore Empty Arguments? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointsToPointsRelationshipAssociatedData(SetPointsToPointsRelationshipAssociatedDataRequest) returns (SetPointsToPointsRelationshipAssociatedDataResult);

message SetPointsToPointsRelationshipAssociatedDataRequest {
  optional CollectionItemName relationship_name = 1;
  optional PointNameList nominal_points = 2;
  optional PointNameList actual_points = 3;
  optional bool ignore_empty_arguments = 4;
}

message SetPointsToPointsRelationshipAssociatedDataResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Points to Points Relationship Associated Data {/* #get-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data)

`/briosa.RelationshipOperations/GetPointsToPointsRelationshipAssociatedData` · Operation ID: `relationship_operations.get_points_to_points_relationship_associated_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Result | 1 | `associated_data` | `optional PointsToPointsRelationshipAssociatedData` | Actual Points | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPointsToPointsRelationshipAssociatedData(GetPointsToPointsRelationshipAssociatedDataRequest) returns (GetPointsToPointsRelationshipAssociatedDataResult);

message GetPointsToPointsRelationshipAssociatedDataRequest {
  optional CollectionItemName relationship_name = 1;
}

message GetPointsToPointsRelationshipAssociatedDataResult {
  optional PointsToPointsRelationshipAssociatedData associated_data = 1;
  MpExecutionDetails execution = 1000;
}
```

## Auto Filter Clouds to Nominal Geometry 3D {/* #auto-filter-clouds-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

`/briosa.RelationshipOperations/AutoFilterCloudsToNominalGeometry3D` · Operation ID: `relationship_operations.auto_filter_clouds_to_nominal_geometry_3d`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_filter_target_relationships` | `repeated CollectionItemName` | Auto Filter Target Relationships | Required |
| Request | 2 | `clouds` | `repeated CollectionObjectName` | Clouds | Required |
| Request | 3 | `cloud_thinning_settings` | `optional CloudThinningOptions` | Cloud Thinning Settings | Message defaults |
| Request | 4 | `filter_proximity_settings_3d` | `optional FilterProximitySettings` | Filter Proximity Settings 3D | Required |
| Request | 5 | `use_feature_specific_filter_settings` | `optional bool` | Use Feature Specific Filter Settings? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoFilterCloudsToNominalGeometry3D(AutoFilterCloudsToNominalGeometry3DRequest) returns (AutoFilterCloudsToNominalGeometry3DResult);

message AutoFilterCloudsToNominalGeometry3DRequest {
  repeated CollectionItemName auto_filter_target_relationships = 1;
  repeated CollectionObjectName clouds = 2;
  optional CloudThinningOptions cloud_thinning_settings = 3;
  optional FilterProximitySettings filter_proximity_settings_3d = 4;
  optional bool use_feature_specific_filter_settings = 5;
}

message AutoFilterCloudsToNominalGeometry3DResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto Filter Clouds to Nominal Geometry 2D {/* #auto-filter-clouds-to-nominal-geometry-2d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

`/briosa.RelationshipOperations/AutoFilterCloudsToNominalGeometry2D` · Operation ID: `relationship_operations.auto_filter_clouds_to_nominal_geometry_2d`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_filter_target_relationships` | `repeated CollectionItemName` | Auto Filter Target Relationships | Required |
| Request | 2 | `clouds` | `repeated CollectionObjectName` | Clouds | Required |
| Request | 3 | `cloud_thinning_settings` | `optional CloudThinningOptions` | Cloud Thinning Settings | Message defaults |
| Request | 4 | `filter_proximity_settings_2d` | `optional FilterProximitySettings` | Filter Proximity Settings 2D | Required |
| Request | 5 | `geometry_extraction_tolerance` | `optional double` | Geometry Extraction Tolerance | 0.010000 |
| Request | 6 | `use_feature_specific_filter_settings` | `optional bool` | Use Feature Specific Filter Settings? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoFilterCloudsToNominalGeometry2D(AutoFilterCloudsToNominalGeometry2DRequest) returns (AutoFilterCloudsToNominalGeometry2DResult);

message AutoFilterCloudsToNominalGeometry2DRequest {
  repeated CollectionItemName auto_filter_target_relationships = 1;
  repeated CollectionObjectName clouds = 2;
  optional CloudThinningOptions cloud_thinning_settings = 3;
  optional FilterProximitySettings filter_proximity_settings_2d = 4;
  optional double geometry_extraction_tolerance = 5;
  optional bool use_feature_specific_filter_settings = 6;
}

message AutoFilterCloudsToNominalGeometry2DResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto Filter Points to Nominal Geometry 3D {/* #auto-filter-points-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

`/briosa.RelationshipOperations/AutoFilterPointsToNominalGeometry3D` · Operation ID: `relationship_operations.auto_filter_points_to_nominal_geometry_3d`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_filter_target_relationships` | `repeated CollectionItemName` | Auto Filter Target Relationships | Required |
| Request | 2 | `points` | `repeated PointName` | Points | Required |
| Request | 3 | `filter_proximity_settings_3d` | `optional FilterProximitySettings` | Filter Proximity Settings 3D | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoFilterPointsToNominalGeometry3D(AutoFilterPointsToNominalGeometry3DRequest) returns (AutoFilterPointsToNominalGeometry3DResult);

message AutoFilterPointsToNominalGeometry3DRequest {
  repeated CollectionItemName auto_filter_target_relationships = 1;
  repeated PointName points = 2;
  optional FilterProximitySettings filter_proximity_settings_3d = 3;
}

message AutoFilterPointsToNominalGeometry3DResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto Filter Points/Groups/Clouds to Surface Faces {/* #auto-filter-pointsgroupsclouds-to-surface-faces */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

`/briosa.RelationshipOperations/AutoFilterPointsGroupsCloudsToSurfaceFaces` · Operation ID: `relationship_operations.auto_filter_points_groups_clouds_to_surface_faces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `points` | `optional PointNameList` | Points | Required |
| Request | 2 | `groups` | `optional CollectionObjectNameList` | Groups | Required |
| Request | 3 | `clouds` | `optional CollectionObjectNameList` | Clouds | Required |
| Request | 4 | `surface_offset` | `optional double` | Surface Offset | 0.100000 |
| Request | 5 | `edge_offset` | `optional double` | Edge Offset | 0.100000 |
| Request | 6 | `offset_direction` | `optional OffsetDirectionType` | Offset Direction | Required |
| Request | 7 | `enforce_max_points_per_face_in_output` | `optional bool` | Enforce Max Pts per Face in Output? | false |
| Request | 8 | `max_points_per_face` | `optional int32` | Max Pts per Face | 0 |
| Request | 9 | `surfaces` | `repeated CollectionObjectName` | Surfaces | Required |
| Request | 10 | `cloud_thinning_settings` | `optional CloudThinningOptions` | Cloud Thinning Settings | Message defaults |
| Request | 11 | `output_cloud_base_name` | `optional string` | Output Cloud Base Name | InspAutoFilteredCloud |
| Request | 12 | `use_face_ids_for_suffix` | `optional bool` | Use Face IDs for suffix | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoFilterPointsGroupsCloudsToSurfaceFaces(AutoFilterPointsGroupsCloudsToSurfaceFacesRequest) returns (AutoFilterPointsGroupsCloudsToSurfaceFacesResult);

message AutoFilterPointsGroupsCloudsToSurfaceFacesRequest {
  optional PointNameList points = 1;
  optional CollectionObjectNameList groups = 2;
  optional CollectionObjectNameList clouds = 3;
  optional double surface_offset = 4;
  optional double edge_offset = 5;
  optional OffsetDirectionType offset_direction = 6;
  optional bool enforce_max_points_per_face_in_output = 7;
  optional int32 max_points_per_face = 8;
  repeated CollectionObjectName surfaces = 9;
  optional CloudThinningOptions cloud_thinning_settings = 10;
  optional string output_cloud_base_name = 11;
  optional bool use_face_ids_for_suffix = 12;
}

message AutoFilterPointsGroupsCloudsToSurfaceFacesResult {
  MpExecutionDetails execution = 1000;
}
```

## Extract Geometry From Point Clouds {/* #extract-geometry-from-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#extract-geometry-from-point-clouds)

`/briosa.RelationshipOperations/ExtractGeometryFromPointClouds` · Operation ID: `relationship_operations.extract_geometry_from_point_clouds`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `geometry_type` | `optional GeometryType` | Geometry Type | Required |
| Request | 3 | `cloud_name` | `optional CollectionObjectName` | Cloud Name | Required |
| Request | 4 | `bounding_points` | `optional PointNameList` | Bounding Points | Required |
| Request | 5 | `seed_points` | `repeated PointName` | Seed Points | Required |
| Request | 6 | `tolerance` | `optional double` | Tolerance | 0.100000 |
| Request | 7 | `reverse_normal` | `optional bool` | Reverse Normal | false |
| Request | 8 | `planar_point_count` | `optional int32` | Planar Point Count | 1000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExtractGeometryFromPointClouds(ExtractGeometryFromPointCloudsRequest) returns (ExtractGeometryFromPointCloudsResult);

message ExtractGeometryFromPointCloudsRequest {
  optional CollectionItemName relationship_name = 1;
  optional GeometryType geometry_type = 2;
  optional CollectionObjectName cloud_name = 3;
  optional PointNameList bounding_points = 4;
  repeated PointName seed_points = 5;
  optional double tolerance = 6;
  optional bool reverse_normal = 7;
  optional int32 planar_point_count = 8;
}

message ExtractGeometryFromPointCloudsResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Points to Objects Map {/* #create-points-to-objects-map */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map)

`/briosa.RelationshipOperations/CreatePointsToObjectsMap` · Operation ID: `relationship_operations.create_points_to_objects_map`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `points` | `optional PointNameList` | Points | Required |
| Request | 2 | `groups` | `optional CollectionObjectNameList` | Groups | Required |
| Request | 3 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Request | 4 | `proximity_tolerance` | `optional double` | Proximity Tolerance | 0.000000 |
| Request | 5 | `points_to_objects_map_name` | `optional string` | Points to Objects Map Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreatePointsToObjectsMap(CreatePointsToObjectsMapRequest) returns (CreatePointsToObjectsMapResult);

message CreatePointsToObjectsMapRequest {
  optional PointNameList points = 1;
  optional CollectionObjectNameList groups = 2;
  repeated CollectionObjectName objects = 3;
  optional double proximity_tolerance = 4;
  optional string points_to_objects_map_name = 5;
}

message CreatePointsToObjectsMapResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Objects From Points to Objects Map (Point List) {/* #get-objects-from-points-to-objects-map-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list)

`/briosa.RelationshipOperations/GetObjectsFromPointsToObjectsMapPointList` · Operation ID: `relationship_operations.get_objects_from_points_to_objects_map_point_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `points_to_objects_map_name` | `optional string` | Points to Objects Map Name | Empty |
| Request | 2 | `points` | `repeated PointName` | Points | Required |
| Result | 1 | `objects` | `repeated CollectionObjectName` | Objects | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetObjectsFromPointsToObjectsMapPointList(GetObjectsFromPointsToObjectsMapPointListRequest) returns (GetObjectsFromPointsToObjectsMapPointListResult);

message GetObjectsFromPointsToObjectsMapPointListRequest {
  optional string points_to_objects_map_name = 1;
  repeated PointName points = 2;
}

message GetObjectsFromPointsToObjectsMapPointListResult {
  repeated CollectionObjectName objects = 1;
  MpExecutionDetails execution = 1000;
}
```

## Compute Geometry Relationship Uncertainties {/* #compute-geometry-relationship-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties)

`/briosa.RelationshipOperations/ComputeGeometryRelationshipUncertainties` · Operation ID: `relationship_operations.compute_geometry_relationship_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `display_results` | `optional bool` | Display Results | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ComputeGeometryRelationshipUncertainties(ComputeGeometryRelationshipUncertaintiesRequest) returns (ComputeGeometryRelationshipUncertaintiesResult);

message ComputeGeometryRelationshipUncertaintiesRequest {
  optional CollectionItemName relationship_name = 1;
  optional bool display_results = 2;
}

message ComputeGeometryRelationshipUncertaintiesResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Cloud to Swatch Relationship {/* #make-cloud-to-swatch-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-cloud-to-swatch-relationship)

`/briosa.RelationshipOperations/MakeCloudToSwatchRelationship` · Operation ID: `relationship_operations.make_cloud_to_swatch_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `input_cloud_name` | `optional CollectionObjectName` | Input Cloud Name | Required |
| Request | 3 | `surface_face_list` | `optional string` | Surface Face List | Empty |
| Request | 4 | `reference_point` | `optional PointName` | Reference Point | Required |
| Request | 5 | `maximum_radial_offset` | `optional double` | Maximum Radial Offset | 0.125000 |
| Request | 6 | `minimum_axial_offset` | `optional double` | Minimum Axial Offset | -0.125000 |
| Request | 7 | `maximum_axial_offset` | `optional double` | Maximum Axial Offset | 0.125000 |
| Request | 8 | `cardinal_point_group_name` | `optional CollectionObjectName` | Cardinal Pt Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCloudToSwatchRelationship(MakeCloudToSwatchRelationshipRequest) returns (MakeCloudToSwatchRelationshipResult);

message MakeCloudToSwatchRelationshipRequest {
  optional CollectionItemName relationship_name = 1;
  optional CollectionObjectName input_cloud_name = 2;
  optional string surface_face_list = 3;
  optional PointName reference_point = 4;
  optional double maximum_radial_offset = 5;
  optional double minimum_axial_offset = 6;
  optional double maximum_axial_offset = 7;
  optional CollectionObjectName cardinal_point_group_name = 8;
}

message MakeCloudToSwatchRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Geom Relationship Criteria Name List {/* #get-geom-relationship-criteria-name-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list)

`/briosa.RelationshipOperations/GetGeomRelationshipCriteriaNameList` · Operation ID: `relationship_operations.get_geom_relationship_criteria_name_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 2 | `include_all_criteria` | `optional bool` | Include All Criteria? | false |
| Result | 1 | `criteria_name_list` | `repeated string` | Criteria Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGeomRelationshipCriteriaNameList(GetGeomRelationshipCriteriaNameListRequest) returns (GetGeomRelationshipCriteriaNameListResult);

message GetGeomRelationshipCriteriaNameListRequest {
  optional CollectionItemName relationship_name = 1;
  optional bool include_all_criteria = 2;
}

message GetGeomRelationshipCriteriaNameListResult {
  repeated string criteria_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Status {/* #get-relationship-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-status)

`/briosa.RelationshipOperations/GetRelationshipStatus` · Operation ID: `relationship_operations.get_relationship_status`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Result | 1 | `status` | `optional RelationshipStatusFlags` | Unmeasured | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipStatus(GetRelationshipStatusRequest) returns (GetRelationshipStatusResult);

message GetRelationshipStatusRequest {
  optional CollectionItemName relationship_name = 1;
}

message GetRelationshipStatusResult {
  optional RelationshipStatusFlags status = 1;
  MpExecutionDetails execution = 1000;
}
```

## Relationship Types {/* #relationship-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Dynamic Relationship Types {/* #dynamic-relationship-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Relationship Fit and Statistics Types {/* #relationship-fit-and-statistics-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Associated-Data and Auto-Filter Types {/* #associated-data-and-auto-filter-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Final Reconciled Subgroup Types {/* #final-reconciled-subgroup-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa/tree/3306d43253a1e4e41b75b83360ad4f6f2b7f60b7/targets/2026.1.0529.7)
