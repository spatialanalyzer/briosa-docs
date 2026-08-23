---
title: Relationship Operations
description: Current and next gRPC contracts for supported Relationship Operations MP commands.
toc_max_heading_level: 2
---

# Relationship Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Enable/Disable Relationships for Optimization

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Enable/Disable Relationships for Optimization](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) |
| Service | `briosa.RelationshipOperations` |
| RPC | `EnableDisableRelationshipsForOptimization` |
| Operation ID | `relationship_operations.enable_disable_relationships_for_optimization` |
| Route | `/briosa.RelationshipOperations/EnableDisableRelationshipsForOptimization` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships` | `repeated CollectionItemName` | `Relationships` | Required |
| Request | 2 | `enable` | `bool` | `Enable?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Wave B Root-Group Types

```proto
enum GeometryRelationshipPointEditMode {
  GEOMETRY_RELATIONSHIP_POINT_EDIT_MODE_UNSPECIFIED = 0;
  GEOMETRY_RELATIONSHIP_POINT_EDIT_MODE_POINT_LIST = 1;
  GEOMETRY_RELATIONSHIP_POINT_EDIT_MODE_POINT_GRAPH = 2;
  GEOMETRY_RELATIONSHIP_POINT_EDIT_MODE_SUB_SAMPLER_SETTINGS = 3;
}

message GeometryRelationshipOutlierFilterMetrics {
  double first_pass_rms_error = 1;
  double first_pass_maximum_error = 2;
  double first_pass_minimum_error = 3;
  double first_pass_average_error = 4;
  double final_pass_rms_error = 5;
  double final_pass_maximum_error = 6;
  double final_pass_minimum_error = 7;
  double final_pass_average_error = 8;
  int32 total_input_point_count = 9;
  int32 exclude_point_count = 10;
}

message RelationshipWatchWindowUdpSettings {
  optional bool enabled = 1;
  optional bool broadcast = 2;
  optional string ip_address = 3;
  optional int32 port = 4;
}
```

## Generate Geometry Relationship Summary

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `GenerateGeometryRelationshipSummary` |
| Operation ID | `relationship_operations.generate_geometry_relationship_summary` |
| Validation | At Risk - Relationship fixture |

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

The list is required and `summary_table_name` defaults to
`Geometry Relationship Summary`.

## Edit Geometry Relationship Point List

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `EditGeometryRelationshipPointList` |
| Operation ID | `relationship_operations.edit_geometry_relationship_point_list` |
| Validation | At Risk - Interactive relationship fixture |

```proto
rpc EditGeometryRelationshipPointList(EditGeometryRelationshipPointListRequest) returns (EditGeometryRelationshipPointListResult);
message EditGeometryRelationshipPointListRequest {
  optional CollectionObjectName relationship_name = 1;
  optional GeometryRelationshipPointEditMode point_edit_mode = 2;
}
message EditGeometryRelationshipPointListResult {
  MpExecutionDetails execution = 1000;
}
```

The mode defaults to `POINT_LIST`. The call opens the corresponding SA dialog;
a deadline or cancellation does not prove that the interaction stopped.

## Filter Geometry Relationship Outlier Cloud Points

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `FilterGeometryRelationshipOutlierCloudPoints` |
| Operation ID | `relationship_operations.filter_geometry_relationship_outlier_cloud_points` |
| Validation | At Risk - Cloud relationship fixture |

```proto
rpc FilterGeometryRelationshipOutlierCloudPoints(FilterGeometryRelationshipOutlierCloudPointsRequest) returns (FilterGeometryRelationshipOutlierCloudPointsResult);
message FilterGeometryRelationshipOutlierCloudPointsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional double sigma_threshold = 2;
  optional bool modify_existing_input_clouds = 3;
}
message FilterGeometryRelationshipOutlierCloudPointsResult {
  optional GeometryRelationshipOutlierFilterMetrics metrics = 1;
  MpExecutionDetails execution = 1000;
}
```

The threshold defaults to `3`; cloud mutation defaults to `false`. All ten
exact outputs are preserved in `metrics`.

## Relationship Watch Window Template

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `RelationshipWatchWindowTemplate` |
| Operation ID | `relationship_operations.relationship_watch_window_template` |
| Validation | At Risk - Watch-window relationship fixture |

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
  optional bool show_deviation_x_rx = 8;
  optional bool show_deviation_y_ry = 9;
  optional bool show_deviation_z_rz = 10;
  optional bool show_deviation_magnitude = 11;
  optional RelationshipWatchWindowUdpSettings udp_network_transmit_settings = 12;
  optional bool transparent_background = 13;
  optional bool hide_units = 14;
}
message RelationshipWatchWindowTemplateResult {
  MpExecutionDetails execution = 1000;
}
```

Omitted fields use the complete exact MP defaults. UDP transmission is disabled
by default; broadcast is enabled, the address is empty, and the port is
`10000`.

## Make Point to Point Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakePointToPointRelationship` |
| Operation ID | `relationship_operations.make_point_to_point_relationship` |
| Validation | At Risk - Relationship fixture |

```proto
rpc MakePointToPointRelationship(MakePointToPointRelationshipRequest) returns (MakePointToPointRelationshipResult);
message MakePointToPointRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional PointName first_point_name = 2;
  optional PointName second_point_name = 3;
  optional ToleranceVectorOptions tolerance = 4;
  optional ToleranceVectorOptions constraint = 5;
}
message MakePointToPointRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

Omitting the two option messages uses their distinct exact MP tolerance and
constraint defaults. Briosa adds no Point or constraint preflight.

## Make Frame to Frame Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeFrameToFrameRelationship` |
| Operation ID | `relationship_operations.make_frame_to_frame_relationship` |
| Validation | At Risk - Relationship fixture |

```proto
rpc MakeFrameToFrameRelationship(MakeFrameToFrameRelationshipRequest) returns (MakeFrameToFrameRelationshipResult);
message MakeFrameToFrameRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName first_frame_name = 2;
  optional CollectionObjectName second_frame_name = 3;
  optional ToleranceScalarOptions orientation_tolerance = 4;
  optional ToleranceVectorOptions position_tolerance = 5;
}
message MakeFrameToFrameRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

Omitting either tolerance message uses the exact all-limits-disabled zero
default. None of these six RPCs is automatically replayed.

## Dynamic Relationship Types

```proto
enum DynamicPointMode {
  DYNAMIC_POINT_MODE_UNSPECIFIED = 0;
  DYNAMIC_POINT_MODE_INTERSECTION_LINE_AND_PLANE = 1;
  DYNAMIC_POINT_MODE_INTERSECTION_CYLINDER_AND_PLANE = 2;
  DYNAMIC_POINT_MODE_INTERSECTION_CONE_AND_PLANE = 3;
  DYNAMIC_POINT_MODE_INTERSECTION_THREE_PLANES = 4;
  DYNAMIC_POINT_MODE_MID_POINT_PERPENDICULAR_TO_TWO_LINES = 5;
}
enum DynamicLineMode {
  DYNAMIC_LINE_MODE_UNSPECIFIED = 0;
  DYNAMIC_LINE_MODE_CONE_AXIS = 1;
  DYNAMIC_LINE_MODE_CYLINDER_AXIS = 2;
  DYNAMIC_LINE_MODE_INTERSECTION_OF_TWO_PLANES = 3;
  DYNAMIC_LINE_MODE_BISECT_TWO_LINES = 4;
  DYNAMIC_LINE_MODE_SLOT_CENTERLINE_ALONG_LENGTH = 5;
}
enum DynamicPlaneMode {
  DYNAMIC_PLANE_MODE_UNSPECIFIED = 0;
  DYNAMIC_PLANE_MODE_BISECT_TWO_PLANES = 1;
  DYNAMIC_PLANE_MODE_TWO_CONES_HOLD_NORMAL_TO_BEST_FIT_PLANE = 2;
  DYNAMIC_PLANE_MODE_TWO_CONES_HOLD_NORMAL_TO_FIRST_CONE_AXIS = 3;
  DYNAMIC_PLANE_MODE_TWO_CONES_HOLD_NORMAL_TO_SECOND_CONE_AXIS = 4;
  DYNAMIC_PLANE_MODE_CONE_AND_CYLINDER_HOLD_NORMAL_TO_BEST_FIT_PLANE = 5;
  DYNAMIC_PLANE_MODE_CONE_AND_CYLINDER_HOLD_NORMAL_TO_CONE_AXIS = 6;
  DYNAMIC_PLANE_MODE_CONE_AND_CYLINDER_HOLD_NORMAL_TO_CYLINDER_AXIS = 7;
  DYNAMIC_PLANE_MODE_OFFSET_PLANE_FROM_PLANE = 8;
}
enum DynamicCircleMode {
  DYNAMIC_CIRCLE_MODE_UNSPECIFIED = 0;
  DYNAMIC_CIRCLE_MODE_CYLINDER_AND_PLANE_HOLD_PLANE_NORMAL = 1;
  DYNAMIC_CIRCLE_MODE_CYLINDER_AND_PLANE_HOLD_CYLINDER_AXIS = 2;
  DYNAMIC_CIRCLE_MODE_CONE_AND_PLANE_HOLD_PLANE_NORMAL = 3;
  DYNAMIC_CIRCLE_MODE_CONE_AND_PLANE_HOLD_CONE_AXIS = 4;
  DYNAMIC_CIRCLE_MODE_SPHERE_AND_PLANE_INTERSECTION = 5;
  DYNAMIC_CIRCLE_MODE_TWO_CONES_INTERSECTION = 6;
  DYNAMIC_CIRCLE_MODE_CONE_AND_CYLINDER_INTERSECTION = 7;
}
enum DynamicEllipseMode {
  DYNAMIC_ELLIPSE_MODE_UNSPECIFIED = 0;
  DYNAMIC_ELLIPSE_MODE_CYLINDER_AND_PLANE_INTERSECTION = 1;
  DYNAMIC_ELLIPSE_MODE_CONE_AND_PLANE_INTERSECTION = 2;
}
```

The worker maps `DYNAMIC_PLANE_MODE_TWO_CONES_HOLD_NORMAL_TO_FIRST_CONE_AXIS`
to SA's exact misspelled `Twp Cones...` SDK literal.

## Make Points to Objects Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakePointsToObjectsRelationship` |
| Operation ID | `relationship_operations.make_points_to_objects_relationship` |
| Validation | At Risk - Points and objects fixture |

```proto
rpc MakePointsToObjectsRelationship(MakePointsToObjectsRelationshipRequest) returns (MakePointsToObjectsRelationshipResult);
message MakePointsToObjectsRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  repeated PointName points_in_relationship = 2;
  repeated CollectionObjectName objects_in_relationship = 3;
  optional ProjectionOptions projection_options = 4;
  optional bool auto_update_a_vector_group = 5;
}
message MakePointsToObjectsRelationshipResult { MpExecutionDetails execution = 1000; }
```

The two lists are required. Omitted projection options use `Object To Probe
Vectors` with every projection option disabled; Vector Group auto-update
defaults to `false`.

## Make Points to Points Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakePointsToPointsRelationship` |
| Operation ID | `relationship_operations.make_points_to_points_relationship` |
| Validation | At Risk - Paired-points fixture |

```proto
rpc MakePointsToPointsRelationship(MakePointsToPointsRelationshipRequest) returns (MakePointsToPointsRelationshipResult);
message MakePointsToPointsRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  repeated PointName nominal_points = 2;
  repeated PointName measured_points = 3;
  optional bool auto_update_a_vector_group = 4;
  optional ToleranceVectorOptions tolerance = 5;
  optional ToleranceVectorOptions constraint = 6;
}
message MakePointsToPointsRelationshipResult { MpExecutionDetails execution = 1000; }
```

Both Point lists are required. Auto-update defaults to `false`. Omitted
tolerance and constraint messages use their distinct exact MP defaults.

## Make Groups to Objects Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeGroupsToObjectsRelationship` |
| Operation ID | `relationship_operations.make_groups_to_objects_relationship` |
| Validation | At Risk - Groups and objects fixture |

```proto
rpc MakeGroupsToObjectsRelationship(MakeGroupsToObjectsRelationshipRequest) returns (MakeGroupsToObjectsRelationshipResult);
message MakeGroupsToObjectsRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  repeated CollectionObjectName point_groups_in_relationship = 2;
  repeated CollectionObjectName objects_in_relationship = 3;
  optional ProjectionOptions projection_options = 4;
  optional bool auto_update_a_vector_group = 5;
}
message MakeGroupsToObjectsRelationshipResult { MpExecutionDetails execution = 1000; }
```

The two lists are required. Projection and auto-update use the same exact
defaults as `MakePointsToObjectsRelationship`.

## Make Object to Object Direction Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeObjectToObjectDirectionRelationship` |
| Operation ID | `relationship_operations.make_object_to_object_direction_relationship` |
| Validation | At Risk - Geometry fixture |

```proto
rpc MakeObjectToObjectDirectionRelationship(MakeObjectToObjectDirectionRelationshipRequest) returns (MakeObjectToObjectDirectionRelationshipResult);
message MakeObjectToObjectDirectionRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName first_object_in_relationship = 2;
  optional CollectionObjectName second_object_in_relationship = 3;
  optional double nominal_angle = 4;
}
message MakeObjectToObjectDirectionRelationshipResult { MpExecutionDetails execution = 1000; }
```

All three identities are required. `nominal_angle` defaults to `0`.

## Make Point Clouds to Objects Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakePointCloudsToObjectsRelationship` |
| Operation ID | `relationship_operations.make_point_clouds_to_objects_relationship` |
| Validation | At Risk - Cloud fixture |

```proto
rpc MakePointCloudsToObjectsRelationship(MakePointCloudsToObjectsRelationshipRequest) returns (MakePointCloudsToObjectsRelationshipResult);
message MakePointCloudsToObjectsRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  repeated CollectionObjectName point_clouds_in_relationship = 2;
  repeated CollectionObjectName objects_in_relationship = 3;
  optional ProjectionOptions projection_options = 4;
  optional bool auto_update_a_vector_group = 5;
}
message MakePointCloudsToObjectsRelationshipResult { MpExecutionDetails execution = 1000; }
```

Both lists are required. Projection and auto-update preserve the exact defaults.

## Make Group to Group Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeGroupToGroupRelationship` |
| Operation ID | `relationship_operations.make_group_to_group_relationship` |
| Validation | At Risk - Paired-groups fixture |

```proto
rpc MakeGroupToGroupRelationship(MakeGroupToGroupRelationshipRequest) returns (MakeGroupToGroupRelationshipResult);
message MakeGroupToGroupRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName first_group_name = 2;
  optional CollectionObjectName second_group_name = 3;
  optional bool auto_update_a_vector_group = 4;
  optional ToleranceVectorOptions tolerance = 5;
  optional ToleranceVectorOptions constraint = 6;
}
message MakeGroupToGroupRelationshipResult { MpExecutionDetails execution = 1000; }
```

Omitted auto-update, tolerance, and constraint fields use the same exact
defaults as the paired-Point form.

## Make Group to Nominal Group Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeGroupToNominalGroupRelationship` |
| Operation ID | `relationship_operations.make_group_to_nominal_group_relationship` |
| Validation | At Risk - Nominal-group fixture |

```proto
rpc MakeGroupToNominalGroupRelationship(MakeGroupToNominalGroupRelationshipRequest) returns (MakeGroupToNominalGroupRelationshipResult);
message MakeGroupToNominalGroupRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
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
message MakeGroupToNominalGroupRelationshipResult { MpExecutionDetails execution = 1000; }
```

The exact defaults are auto-update `false`, closest-point matching `true`, the
three display/threshold controls `false`, threshold `0.01`, the standard
Relationship tolerance and constraint defaults, and fit weight `1`.

## Make Average Point Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeAveragePointRelationship` |
| Operation ID | `relationship_operations.make_average_point_relationship` |
| Validation | At Risk - Average-point fixture |

```proto
rpc MakeAveragePointRelationship(MakeAveragePointRelationshipRequest) returns (MakeAveragePointRelationshipResult);
message MakeAveragePointRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  repeated PointName points_in_relationship = 2;
  optional PointName average_point_name = 3;
  optional PointName nominal_point_name = 4;
}
message MakeAveragePointRelationshipResult { MpExecutionDetails execution = 1000; }
```

The Point list is required. The Average Point and Nominal Point identities are
independently optional.

## Make Geometry Fit Only Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeGeometryFitOnlyRelationship` |
| Operation ID | `relationship_operations.make_geometry_fit_only_relationship` |
| Validation | At Risk - Geometry-fit fixture |

```proto
rpc MakeGeometryFitOnlyRelationship(MakeGeometryFitOnlyRelationshipRequest) returns (MakeGeometryFitOnlyRelationshipResult);
message MakeGeometryFitOnlyRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  repeated CollectionObjectName point_groups_to_fit = 2;
  optional GeometryType geometry_type = 3;
  optional CollectionObjectName resulting_object_name = 4;
  optional string fit_profile_name = 5;
}
message MakeGeometryFitOnlyRelationshipResult { MpExecutionDetails execution = 1000; }
```

Relationship identity, Point Groups, and geometry type are required. The
resulting object and fit-profile inputs are optional.

## Make Geometry Fit and Compare to Nominal Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeGeometryFitAndCompareToNominalRelationship` |
| Operation ID | `relationship_operations.make_geometry_fit_and_compare_to_nominal_relationship` |
| Validation | At Risk - Geometry-fit fixture |

```proto
rpc MakeGeometryFitAndCompareToNominalRelationship(MakeGeometryFitAndCompareToNominalRelationshipRequest) returns (MakeGeometryFitAndCompareToNominalRelationshipResult);
message MakeGeometryFitAndCompareToNominalRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName nominal_geometry = 2;
  repeated CollectionObjectName point_groups_to_fit = 3;
  optional CollectionObjectName resulting_object_name = 4;
  optional string fit_profile_name = 5;
}
message MakeGeometryFitAndCompareToNominalRelationshipResult { MpExecutionDetails execution = 1000; }
```

The first three inputs are required. For both geometry-fit RPCs, MP result code
`4` remains a completed partial-success outcome in `execution`; it is not
collapsed into complete success or transport failure. No RPC is automatically
replayed.

## Relationship Fit and Statistics Types

```proto
enum SolverMode {
  SOLVER_MODE_UNSPECIFIED = 0;
  SOLVER_MODE_GAUSS_NEWTON = 1;
  SOLVER_MODE_LEVENBERG_MARQUARDT = 2;
  SOLVER_MODE_GAUSS_NEWTON_WITH_GRADIENT_SEARCH = 3;
  SOLVER_MODE_DIRECT_SEARCH = 4;
}

message FitDofOptions {
  optional bool allow_x = 1;
  optional bool allow_y = 2;
  optional bool allow_z = 3;
  optional bool allow_rx = 4;
  optional bool allow_ry = 5;
  optional bool allow_rz = 6;
  optional bool rotate_about_centroid = 7;
}
```

Omitted `FitDofOptions` allows every translation and rotation and rotates about
the centroid, matching all seven exact `true` values.

## Make Geometry Compare Only Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeGeometryCompareOnlyRelationship` |
| Operation ID | `relationship_operations.make_geometry_compare_only_relationship` |
| Validation | At Risk - Geometry fixture |

```proto
rpc MakeGeometryCompareOnlyRelationship(MakeGeometryCompareOnlyRelationshipRequest) returns (MakeGeometryCompareOnlyRelationshipResult);
message MakeGeometryCompareOnlyRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName nominal_geometry = 2;
  optional CollectionObjectName measured_geometry = 3;
}
message MakeGeometryCompareOnlyRelationshipResult { MpExecutionDetails execution = 1000; }
```

All three identities are required.

## Make Dynamic Point Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeDynamicPointRelationship` |
| Operation ID | `relationship_operations.make_dynamic_point_relationship` |
| Validation | At Risk - Dynamic-geometry fixture |

```proto
rpc MakeDynamicPointRelationship(MakeDynamicPointRelationshipRequest) returns (MakeDynamicPointRelationshipResult);
message MakeDynamicPointRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional DynamicPointMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
  optional CollectionObjectName third_reference_geometry = 5;
}
message MakeDynamicPointRelationshipResult { MpExecutionDetails execution = 1000; }
```

The first two references are required, while the third is optional and is used
by construction modes that need it. The mode defaults to line/Plane
intersection.

## Make Dynamic Line Relationship

```proto
rpc MakeDynamicLineRelationship(MakeDynamicLineRelationshipRequest) returns (MakeDynamicLineRelationshipResult);
message MakeDynamicLineRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional DynamicLineMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
}
message MakeDynamicLineRelationshipResult { MpExecutionDetails execution = 1000; }
```

The mode defaults to `INTERSECTION_OF_TWO_PLANES`; both references are required.
The operation ID is `relationship_operations.make_dynamic_line_relationship`.

## Make Dynamic Plane Relationship

```proto
rpc MakeDynamicPlaneRelationship(MakeDynamicPlaneRelationshipRequest) returns (MakeDynamicPlaneRelationshipResult);
message MakeDynamicPlaneRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional DynamicPlaneMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
  optional double offset_plane_offset = 5;
}
message MakeDynamicPlaneRelationshipResult { MpExecutionDetails execution = 1000; }
```

The mode defaults to `BISECT_TWO_PLANES`, the offset defaults to `0`, and the
operation ID is `relationship_operations.make_dynamic_plane_relationship`.

## Make Dynamic Circle Relationship

```proto
rpc MakeDynamicCircleRelationship(MakeDynamicCircleRelationshipRequest) returns (MakeDynamicCircleRelationshipResult);
message MakeDynamicCircleRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional DynamicCircleMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
}
message MakeDynamicCircleRelationshipResult { MpExecutionDetails execution = 1000; }
```

The default mode is `CYLINDER_AND_PLANE_HOLD_PLANE_NORMAL`; the operation ID is
`relationship_operations.make_dynamic_circle_relationship`.

## Make Dynamic Ellipse Relationship

```proto
rpc MakeDynamicEllipseRelationship(MakeDynamicEllipseRelationshipRequest) returns (MakeDynamicEllipseRelationshipResult);
message MakeDynamicEllipseRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional DynamicEllipseMode construction_mode = 2;
  optional CollectionObjectName first_reference_geometry = 3;
  optional CollectionObjectName second_reference_geometry = 4;
}
message MakeDynamicEllipseRelationshipResult { MpExecutionDetails execution = 1000; }
```

The default is `CYLINDER_AND_PLANE_INTERSECTION`; the operation ID is
`relationship_operations.make_dynamic_ellipse_relationship`.

## Make Vector Group To Vector Group Relationship

```proto
rpc MakeVectorGroupToVectorGroupRelationship(MakeVectorGroupToVectorGroupRelationshipRequest) returns (MakeVectorGroupToVectorGroupRelationshipResult);
message MakeVectorGroupToVectorGroupRelationshipRequest {
  optional CollectionObjectName new_vg_to_vg_relationship = 1;
  optional CollectionObjectName reference_vector_group = 2;
  optional CollectionObjectName corresponding_vector_group = 3;
  optional bool set_opposing_vector_group_polarity = 4;
}
message MakeVectorGroupToVectorGroupRelationshipResult { MpExecutionDetails execution = 1000; }
```

All identities are required, polarity defaults to `true`, and the operation ID
is `relationship_operations.make_vector_group_to_vector_group_relationship`.

## Set Vector Group To Vector Group Cylindrical Zone

```proto
rpc SetVectorGroupToVectorGroupCylindricalZone(SetVectorGroupToVectorGroupCylindricalZoneRequest) returns (SetVectorGroupToVectorGroupCylindricalZoneResult);
message SetVectorGroupToVectorGroupCylindricalZoneRequest {
  optional CollectionObjectName vg_to_vg_relationship = 1;
  optional double radial_offset = 2;
  optional double minimum_axial_offset = 3;
  optional double maximum_axial_offset = 4;
}
message SetVectorGroupToVectorGroupCylindricalZoneResult { MpExecutionDetails execution = 1000; }
```

The three offsets default to `1`, `-10`, and `10`. The operation ID is
`relationship_operations.set_vector_group_to_vector_group_cylindrical_zone`.

## Set Vector Group To Vector Group Fit Weights

```proto
rpc SetVectorGroupToVectorGroupFitWeights(SetVectorGroupToVectorGroupFitWeightsRequest) returns (SetVectorGroupToVectorGroupFitWeightsResult);
message SetVectorGroupToVectorGroupFitWeightsRequest {
  optional CollectionObjectName vg_to_vg_relationship = 1;
  optional double minimum_gap = 2;
  optional double minimum_gap_fit_weight = 3;
  optional double maximum_gap = 4;
  optional double maximum_gap_fit_weight = 5;
  optional double nominal_gap = 6;
  optional double nominal_gap_fit_weight = 7;
}
message SetVectorGroupToVectorGroupFitWeightsResult { MpExecutionDetails execution = 1000; }
```

The gap defaults are `0`; the minimum and maximum weights default to `10`, and
the nominal weight defaults to `1`. The operation ID is
`relationship_operations.set_vector_group_to_vector_group_fit_weights`.

## Set Vector Group To Vector Group Fit Gradient Factor

```proto
rpc SetVectorGroupToVectorGroupFitGradientFactor(SetVectorGroupToVectorGroupFitGradientFactorRequest) returns (SetVectorGroupToVectorGroupFitGradientFactorResult);
message SetVectorGroupToVectorGroupFitGradientFactorRequest {
  optional CollectionObjectName vg_to_vg_relationship = 1;
  optional double fit_gradient_factor = 2;
}
message SetVectorGroupToVectorGroupFitGradientFactorResult { MpExecutionDetails execution = 1000; }
```

The factor defaults to `50`. The operation ID is
`relationship_operations.set_vector_group_to_vector_group_fit_gradient_factor`.
All ten RPCs prohibit automatic replay.

## Set Vector Group To Vector Group Relative Polarity

```proto
rpc SetVectorGroupToVectorGroupRelativePolarity(SetVectorGroupToVectorGroupRelativePolarityRequest) returns (SetVectorGroupToVectorGroupRelativePolarityResult);
message SetVectorGroupToVectorGroupRelativePolarityRequest {
  optional CollectionObjectName vg_to_vg_relationship = 1;
  optional bool set_opposing_vector_group_polarity = 2;
}
message SetVectorGroupToVectorGroupRelativePolarityResult { MpExecutionDetails execution = 1000; }
```

Polarity defaults to `true`. The operation ID is
`relationship_operations.set_vector_group_to_vector_group_relative_polarity`.

## Delete Relationship

```proto
rpc DeleteRelationship(DeleteRelationshipRequest) returns (DeleteRelationshipResult);
message DeleteRelationshipRequest { optional CollectionObjectName relationship_name = 1; }
message DeleteRelationshipResult { MpExecutionDetails execution = 1000; }
```

The identity is required. The operation ID is
`relationship_operations.delete_relationship`; the server adds no confirmation.

## Set Optimization Search Options

```proto
rpc SetOptimizationSearchOptions(SetOptimizationSearchOptionsRequest) returns (SetOptimizationSearchOptionsResult);
message SetOptimizationSearchOptionsRequest { optional int32 max_number_of_step_size_reduction = 1; }
message SetOptimizationSearchOptionsResult { MpExecutionDetails execution = 1000; }
```

The exact default is `5`. The operation ID is
`relationship_operations.set_optimization_search_options`.

## Set Optimization Perturbation Parameters

```proto
rpc SetOptimizationPerturbationParameters(SetOptimizationPerturbationParametersRequest) returns (SetOptimizationPerturbationParametersResult);
message SetOptimizationPerturbationParametersRequest {
  optional double length_perturbation = 1;
  optional double angular_perturbation = 2;
  optional double damping = 3;
}
message SetOptimizationPerturbationParametersResult { MpExecutionDetails execution = 1000; }
```

Defaults are `0.0001`, `0.0001`, and `1`. The worker maps `damping` to the
exact SDK argument label, including its trailing space. The operation ID is
`relationship_operations.set_optimization_perturbation_parameters`.

## Do Relationship Fit

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

The Collection is required; either or both move lists may be supplied. Solver
defaults to Gauss-Newton, all motion is enabled about the centroid, randomized
start and the fit dialog default to `false`, and both `WorldTransform` outputs
retain their scale. The operation ID is
`relationship_operations.do_relationship_fit`.

## Move Collections by Minimizing Relationships

```proto
rpc MoveCollectionsByMinimizingRelationships(MoveCollectionsByMinimizingRelationshipsRequest) returns (MoveCollectionsByMinimizingRelationshipsResult);
message MoveCollectionsByMinimizingRelationshipsRequest {
  repeated string collections_to_move = 1;
  repeated CollectionObjectName relationships_to_minimize = 2;
  optional SolverMode solver_mode = 3;
  optional FitDofOptions motion_to_allow = 4;
  optional bool use_fit_dialog = 5;
  optional double convergence_threshold = 6;
}
message MoveCollectionsByMinimizingRelationshipsResult { MpExecutionDetails execution = 1000; }
```

Both lists are required. The exact SA 2026.1 convergence default is `0`; the
dialog remains off. The operation ID is
`relationship_operations.move_collections_by_minimizing_relationships`.

## Get General Relationship Statistics

```proto
rpc GetGeneralRelationshipStatistics(GetGeneralRelationshipStatisticsRequest) returns (GetGeneralRelationshipStatisticsResult);
message GetGeneralRelationshipStatisticsRequest { optional CollectionObjectName relationship_name = 1; }
message GetGeneralRelationshipStatisticsResult {
  optional double absolute_max_deviation = 1;
  optional double rms = 2;
  optional bool has_signed_deviation = 3;
  optional double signed_max_deviation = 4;
  optional double signed_min_deviation = 5;
  MpExecutionDetails execution = 1000;
}
```

The operation ID is `relationship_operations.get_general_relationship_statistics`.

## Get Points to Objects Relationship Statistics

```proto
rpc GetPointsToObjectsRelationshipStatistics(GetPointsToObjectsRelationshipStatisticsRequest) returns (GetPointsToObjectsRelationshipStatisticsResult);
message GetPointsToObjectsRelationshipStatisticsRequest { optional CollectionObjectName relationship_name = 1; }
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

All ten SA 2026.1 outputs are preserved. The operation ID is
`relationship_operations.get_points_to_objects_relationship_statistics`.

## Start/Stop Relationship Trapping

```proto
rpc StartStopRelationshipTrapping(StartStopRelationshipTrappingRequest) returns (StartStopRelationshipTrappingResult);
message StartStopRelationshipTrappingRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionInstrumentId instrument_id = 2;
  optional bool start_trapping = 3;
}
message StartStopRelationshipTrappingResult { MpExecutionDetails execution = 1000; }
```

Both identities are required; `start_trapping` defaults to `false` (stop). The
operation ID is `relationship_operations.start_stop_relationship_trapping`.

## Get Point to Point Relationship Statistics

```proto
rpc GetPointToPointRelationshipStatistics(GetPointToPointRelationshipStatisticsRequest) returns (GetPointToPointRelationshipStatisticsResult);
message GetPointToPointRelationshipStatisticsRequest { optional CollectionObjectName relationship_name = 1; }
message GetPointToPointRelationshipStatisticsResult {
  optional double delta_x = 1;
  optional double delta_y = 2;
  optional double delta_z = 3;
  optional double delta_magnitude = 4;
  optional CollectionObjectName reference_frame = 5;
  MpExecutionDetails execution = 1000;
}
```

The operation ID is
`relationship_operations.get_point_to_point_relationship_statistics`. All ten
RPCs prohibit automatic replay.

## Associated-Data and Auto-Filter Types

```proto
message PointNameList {
  repeated PointName values = 1;
}

message CollectionObjectNameList {
  repeated CollectionObjectName values = 1;
}

message FilterProximitySettings {
  optional double surface_inclusion_proximity = 1;
  optional double edge_exclusion_proximity = 2;
  optional double planar_inclusion_proximity = 3;
  optional double planar_exclusion_proximity = 4;
  optional double radial_inclusion_proximity = 5;
  optional double geometry_extraction_tolerance = 6;
  optional OffsetDirectionType surface_proximity_mode = 7;
  optional OffsetDirectionType planar_proximity_mode = 8;
  optional OffsetDirectionType radial_proximity_mode = 9;
  optional bool project_to_plane = 10;
  optional bool assert_plane_boundaries = 11;
}

message RelationshipAssociatedData {
  string relationship_type = 1;
  repeated PointName individual_points = 2;
  repeated CollectionObjectName point_groups = 3;
  repeated CollectionObjectName point_clouds = 4;
  repeated CollectionObjectName objects = 5;
}

message PointsToPointsRelationshipAssociatedData {
  repeated PointName nominal_points = 1;
  repeated PointName actual_points = 2;
}
```

`FilterProximitySettings` replaces the excluded MP-only value-construction
helper. Its exact defaults are `0.1`, `0.1`, `0.5`, `0.1`, `0.1`, `0.01`,
`BOTH` for all three modes, `true`, and `false`. `CloudThinningOptions` is the
shared type documented with Construction Operations / Point Clouds. The list
wrapper messages preserve omitted-versus-supplied presence where the MP setter
can treat those cases differently.

## Set Group To Nominal Group View Zooming

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `SetGroupToNominalGroupViewZooming` |
| Operation ID | `relationship_operations.set_group_to_nominal_group_view_zooming` |
| Validation | At Risk - nominal-group Relationship fixture |

```proto
rpc SetGroupToNominalGroupViewZooming(SetGroupToNominalGroupViewZoomingRequest) returns (SetGroupToNominalGroupViewZoomingResult);
message SetGroupToNominalGroupViewZoomingRequest {
  optional CollectionObjectName relationship_name = 1;
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

The five defaults are `true`, `false`, `true`, `true`, and `0.01`.

## Set Relationship Associated Data

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `SetRelationshipAssociatedData` |
| Operation ID | `relationship_operations.set_relationship_associated_data` |
| Validation | At Risk - Relationship fixture |

```proto
rpc SetRelationshipAssociatedData(SetRelationshipAssociatedDataRequest) returns (SetRelationshipAssociatedDataResult);
message SetRelationshipAssociatedDataRequest {
  optional CollectionObjectName relationship_name = 1;
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

Omitted list messages do not call the corresponding SDK setter.
`ignore_empty_arguments` defaults to `true`.

## Get Relationship Associated Data

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `GetRelationshipAssociatedData` |
| Operation ID | `relationship_operations.get_relationship_associated_data` |
| Validation | At Risk - Relationship fixture |

```proto
rpc GetRelationshipAssociatedData(GetRelationshipAssociatedDataRequest) returns (GetRelationshipAssociatedDataResult);
message GetRelationshipAssociatedDataRequest {
  optional CollectionObjectName relationship_name = 1;
}
message GetRelationshipAssociatedDataResult {
  optional RelationshipAssociatedData associated_data = 1;
  MpExecutionDetails execution = 1000;
}
```

All five exact outputs are preserved.

## Set Points to Points Relationship Associated Data

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `SetPointsToPointsRelationshipAssociatedData` |
| Operation ID | `relationship_operations.set_points_to_points_relationship_associated_data` |
| Validation | At Risk - paired-Points Relationship fixture |

```proto
rpc SetPointsToPointsRelationshipAssociatedData(SetPointsToPointsRelationshipAssociatedDataRequest) returns (SetPointsToPointsRelationshipAssociatedDataResult);
message SetPointsToPointsRelationshipAssociatedDataRequest {
  optional CollectionObjectName relationship_name = 1;
  optional PointNameList nominal_points = 2;
  optional PointNameList actual_points = 3;
  optional bool ignore_empty_arguments = 4;
}
message SetPointsToPointsRelationshipAssociatedDataResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Points to Points Relationship Associated Data

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `GetPointsToPointsRelationshipAssociatedData` |
| Operation ID | `relationship_operations.get_points_to_points_relationship_associated_data` |
| Validation | At Risk - paired-Points Relationship fixture |

```proto
rpc GetPointsToPointsRelationshipAssociatedData(GetPointsToPointsRelationshipAssociatedDataRequest) returns (GetPointsToPointsRelationshipAssociatedDataResult);
message GetPointsToPointsRelationshipAssociatedDataRequest {
  optional CollectionObjectName relationship_name = 1;
}
message GetPointsToPointsRelationshipAssociatedDataResult {
  optional PointsToPointsRelationshipAssociatedData associated_data = 1;
  MpExecutionDetails execution = 1000;
}
```

## Auto Filter Clouds to Nominal Geometry 3D

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `AutoFilterCloudsToNominalGeometry3D` |
| Operation ID | `relationship_operations.auto_filter_clouds_to_nominal_geometry_3d` |
| Validation | At Risk - cloud and Relationship fixture |

```proto
rpc AutoFilterCloudsToNominalGeometry3D(AutoFilterCloudsToNominalGeometry3DRequest) returns (AutoFilterCloudsToNominalGeometry3DResult);
message AutoFilterCloudsToNominalGeometry3DRequest {
  repeated CollectionObjectName auto_filter_target_relationships = 1;
  repeated CollectionObjectName clouds = 2;
  optional CloudThinningOptions cloud_thinning_settings = 3;
  optional FilterProximitySettings filter_proximity_settings_3d = 4;
  optional bool use_feature_specific_filter_settings = 5;
}
message AutoFilterCloudsToNominalGeometry3DResult {
  MpExecutionDetails execution = 1000;
}
```

The two lists are required. Omitted option messages use their exact defaults;
feature-specific filtering defaults to `false`.

## Auto Filter Clouds to Nominal Geometry 2D

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `AutoFilterCloudsToNominalGeometry2D` |
| Operation ID | `relationship_operations.auto_filter_clouds_to_nominal_geometry_2d` |
| Validation | At Risk - cloud and Relationship fixture |

```proto
rpc AutoFilterCloudsToNominalGeometry2D(AutoFilterCloudsToNominalGeometry2DRequest) returns (AutoFilterCloudsToNominalGeometry2DResult);
message AutoFilterCloudsToNominalGeometry2DRequest {
  repeated CollectionObjectName auto_filter_target_relationships = 1;
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

`geometry_extraction_tolerance` defaults to `0.01`. The feature-specific flag
is an exact SA 2026.1 input absent from ObjectiveSA's older target.

## Auto Filter Points to Nominal Geometry 3D

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `AutoFilterPointsToNominalGeometry3D` |
| Operation ID | `relationship_operations.auto_filter_points_to_nominal_geometry_3d` |
| Validation | At Risk - Point and Relationship fixture |

```proto
rpc AutoFilterPointsToNominalGeometry3D(AutoFilterPointsToNominalGeometry3DRequest) returns (AutoFilterPointsToNominalGeometry3DResult);
message AutoFilterPointsToNominalGeometry3DRequest {
  repeated CollectionObjectName auto_filter_target_relationships = 1;
  repeated PointName points = 2;
  optional FilterProximitySettings filter_proximity_settings_3d = 3;
}
message AutoFilterPointsToNominalGeometry3DResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto Filter Points/Groups/Clouds to Surface Faces

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `AutoFilterPointsGroupsCloudsToSurfaceFaces` |
| Operation ID | `relationship_operations.auto_filter_points_groups_clouds_to_surface_faces` |
| Validation | At Risk - Point, Group, Cloud, and Surface fixture |

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

The defaults are `0.1`, `0.1`, `BOTH`, `false`, `0`, the shared thinning
default, `InspAutoFilteredCloud`, and `true`. Surfaces are required. None of
these operations is automatically replayed.

## Extract Geometry From Point Clouds

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `ExtractGeometryFromPointClouds` |
| Operation ID | `relationship_operations.extract_geometry_from_point_clouds` |
| Validation | At Risk - Cloud and geometry-extraction fixture |

```proto
rpc ExtractGeometryFromPointClouds(ExtractGeometryFromPointCloudsRequest) returns (ExtractGeometryFromPointCloudsResult);
message ExtractGeometryFromPointCloudsRequest {
  optional CollectionObjectName relationship_name = 1;
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

Geometry type defaults to `CIRCLE`; tolerance, normal reversal, and planar
Point count default to `0.1`, `false`, and `1000`. This operation has no
ObjectiveSA parity because it was added after ObjectiveSA's SA target.

## Create Points to Objects Map

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `CreatePointsToObjectsMap` |
| Operation ID | `relationship_operations.create_points_to_objects_map` |
| Validation | At Risk - Points-to-objects map fixture |

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

Objects and the map name are required. Points and Groups are independently
optional, and the tolerance defaults to `0`. The server retains no map state.

## Get Objects From Points to Objects Map (Point List)

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `GetObjectsFromPointsToObjectsMapPointList` |
| Operation ID | `relationship_operations.get_objects_from_points_to_objects_map_point_list` |
| Validation | At Risk - Points-to-objects map fixture |

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

The exact SA 2026.1 SDK uses a Point Name Ref List even though installed prose
describes an older singular-Point input.

## Compute Geometry Relationship Uncertainties

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `ComputeGeometryRelationshipUncertainties` |
| Operation ID | `relationship_operations.compute_geometry_relationship_uncertainties` |
| Validation | At Risk - uncertainty Relationship fixture |

```proto
rpc ComputeGeometryRelationshipUncertainties(ComputeGeometryRelationshipUncertaintiesRequest) returns (ComputeGeometryRelationshipUncertaintiesResult);
message ComputeGeometryRelationshipUncertaintiesRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool display_results = 2;
}
message ComputeGeometryRelationshipUncertaintiesResult {
  MpExecutionDetails execution = 1000;
}
```

`display_results` defaults to `false`. SA may make the Relationship dormant
after computing uncertainty; the server does not reverse that native effect.

## Make Cloud to Swatch Relationship

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `MakeCloudToSwatchRelationship` |
| Operation ID | `relationship_operations.make_cloud_to_swatch_relationship` |
| Validation | At Risk - Cloud and Swatch Relationship fixture |

```proto
rpc MakeCloudToSwatchRelationship(MakeCloudToSwatchRelationshipRequest) returns (MakeCloudToSwatchRelationshipResult);
message MakeCloudToSwatchRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
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

The three offsets default to `0.125`, `-0.125`, and `0.125`. The remaining
identities and exact `Surface Face List` string are required. None of these
operations is automatically replayed.

## Final Reconciled Subgroup Types

```proto
message SigmoidalGapFitConstraints {
  bool use_sigmoidal_gap_constraints = 1;
  double minimum_gap_boundary = 2;
  double minimum_gap_weight = 3;
  double maximum_gap_boundary = 4;
  double maximum_gap_weight = 5;
  double nominal_gap = 6;
  double nominal_gap_weight = 7;
  double gradient_steepness_factor = 8;
}

message RelationshipStatusFlags {
  bool dormant = 1;
  bool success = 2;
  bool measured = 3;
  bool failed = 4;
  bool unmeasured = 5;
}
```

The status flags are preserved independently and are not collapsed into a
Briosa enum.

## Get Relationship Sigmoidal Gap Fit Constraints

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `GetRelationshipSigmoidalGapFitConstraints` |
| Operation ID | `relationship_operations.get_relationship_sigmoidal_gap_fit_constraints` |
| Validation | At Risk - Relationship fixture |

```proto
rpc GetRelationshipSigmoidalGapFitConstraints(GetRelationshipSigmoidalGapFitConstraintsRequest) returns (GetRelationshipSigmoidalGapFitConstraintsResult);
message GetRelationshipSigmoidalGapFitConstraintsRequest {
  optional CollectionObjectName relationship_name = 1;
}
message GetRelationshipSigmoidalGapFitConstraintsResult {
  optional SigmoidalGapFitConstraints constraints = 1;
  MpExecutionDetails execution = 1000;
}
```

The RPC uses the exact MP word `Sigmoidal` and returns all eight exact values.

## Set Object to Object Direction Relationship Tolerances

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `SetObjectToObjectDirectionRelationshipTolerances` |
| Operation ID | `relationship_operations.set_object_to_object_direction_relationship_tolerances` |
| Validation | At Risk - object-direction Relationship fixture |

```proto
rpc SetObjectToObjectDirectionRelationshipTolerances(SetObjectToObjectDirectionRelationshipTolerancesRequest) returns (SetObjectToObjectDirectionRelationshipTolerancesResult);
message SetObjectToObjectDirectionRelationshipTolerancesRequest {
  optional CollectionObjectName relationship_name = 1;
  optional ToleranceScalarOptions angle_between_vectors_tolerances = 2;
  optional ToleranceScalarOptions mutual_perpendicular_length_tolerances = 3;
}
message SetObjectToObjectDirectionRelationshipTolerancesResult {
  MpExecutionDetails execution = 1000;
}
```

Each omitted tolerance value uses the exact all-limits-disabled zero default.

## Get Geom Relationship Criteria Name List

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `GetGeomRelationshipCriteriaNameList` |
| Operation ID | `relationship_operations.get_geom_relationship_criteria_name_list` |
| Validation | At Risk - geometry Relationship fixture |

```proto
rpc GetGeomRelationshipCriteriaNameList(GetGeomRelationshipCriteriaNameListRequest) returns (GetGeomRelationshipCriteriaNameListResult);
message GetGeomRelationshipCriteriaNameListRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool include_all_criteria = 2;
}
message GetGeomRelationshipCriteriaNameListResult {
  repeated string criteria_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

`include_all_criteria` defaults to `false`.

## Get Relationship Status

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `GetRelationshipStatus` |
| Operation ID | `relationship_operations.get_relationship_status` |
| Validation | At Risk - Relationship fixture |

```proto
rpc GetRelationshipStatus(GetRelationshipStatusRequest) returns (GetRelationshipStatusResult);
message GetRelationshipStatusRequest {
  optional CollectionObjectName relationship_name = 1;
}
message GetRelationshipStatusResult {
  optional RelationshipStatusFlags status = 1;
  MpExecutionDetails execution = 1000;
}
```

No assumption is made that the five SA flags are mutually exclusive. None of
these operations is automatically replayed.

## Geom Relationship Ignore Input Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Geom Relationship Ignore Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GeomRelationshipIgnoreInputPoints` |
| Operation ID | `relationship_operations.geom_relationship_ignore_input_points` |
| Route | `/briosa.RelationshipOperations/GeomRelationshipIgnoreInputPoints` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GeomRelationshipIgnoreInputPoints(GeomRelationshipIgnoreInputPointsRequest) returns (GeomRelationshipIgnoreInputPointsResult);

message GeomRelationshipIgnoreInputPointsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GeomRelationshipIgnoreInputPointsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Geom Relationship Reuse Ignored Input Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Geom Relationship Reuse Ignored Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GeomRelationshipReuseIgnoredInputPoints` |
| Operation ID | `relationship_operations.geom_relationship_reuse_ignored_input_points` |
| Route | `/briosa.RelationshipOperations/GeomRelationshipReuseIgnoredInputPoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GeomRelationshipReuseIgnoredInputPoints(GeomRelationshipReuseIgnoredInputPointsRequest) returns (GeomRelationshipReuseIgnoredInputPointsResult);

message GeomRelationshipReuseIgnoredInputPointsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GeomRelationshipReuseIgnoredInputPointsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Auto Vectors

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Auto Vectors](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipAutoVectors` |
| Operation ID | `relationship_operations.get_geom_relationship_auto_vectors` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipAutoVectors` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `auto_vectors_nominal_avn_enabled` | `bool` | `Auto Vectors Nominal (AVN) - Enabled?` | — |
| Result | 2 | `auto_vectors_nominal_avn_name` | `CollectionObjectName` | `Auto Vectors Nominal (AVN) - Name` | — |
| Result | 3 | `auto_vectors_fit_avf_enabled` | `bool` | `Auto Vectors Fit (AVF) - Enabled?` | — |
| Result | 4 | `auto_vectors_fit_avf_name` | `CollectionObjectName` | `Auto Vectors Fit (AVF) - Name` | — |
| Result | 5 | `points_type` | `string` | `Points Type` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipAutoVectors(GetGeomRelationshipAutoVectorsRequest) returns (GetGeomRelationshipAutoVectorsResult);

message GetGeomRelationshipAutoVectorsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipAutoVectorsResult {
  optional bool auto_vectors_nominal_avn_enabled = 1;
  optional CollectionObjectName auto_vectors_nominal_avn_name = 2;
  optional bool auto_vectors_fit_avf_enabled = 3;
  optional CollectionObjectName auto_vectors_fit_avf_name = 4;
  optional string points_type = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Cardinal Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipCardinalPoints` |
| Operation ID | `relationship_operations.get_geom_relationship_cardinal_points` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipCardinalPoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `cardinal_point_name_list` | `repeated PointName` | `Cardinal Point Name List` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Criteria

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipCriteria` |
| Operation ID | `relationship_operations.get_geom_relationship_criteria` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipCriteria` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `criteria` | `string` | `Criteria` | Empty |
| Result | 1 | `nominal` | `double` | `Nominal` | — |
| Result | 2 | `measured` | `double` | `Measured` | — |
| Result | 3 | `delta` | `double` | `Delta` | — |
| Result | 4 | `low_tolerance` | `double` | `Low Tolerance` | — |
| Result | 5 | `high_tolerance` | `double` | `High Tolerance` | — |
| Result | 6 | `optimization_delta_weight` | `double` | `Optimization: Delta Weight` | — |
| Result | 7 | `optimization_out_of_tolerance_weight` | `double` | `Optimization: Out of Tolerance Weight` | — |
| Result | 8 | `is_within_tolerance` | `string` | `Is within Tolerance?` | — |
| Result | 9 | `has_uncertainty` | `bool` | `Has Uncertainty?` | — |
| Result | 10 | `uncertainty` | `double` | `Uncertainty` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Measured Avg Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Measured Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipMeasuredAvgPoint` |
| Operation ID | `relationship_operations.get_geom_relationship_measured_avg_point` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipMeasuredAvgPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `measured_average_point` | `PointName` | `Measured Average Point` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Measured Geometry

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipMeasuredGeometry` |
| Operation ID | `relationship_operations.get_geom_relationship_measured_geometry` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipMeasuredGeometry` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `measured_geometry` | `CollectionObjectName` | `Measured Geometry` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Nominal Avg Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipNominalAvgPoint` |
| Operation ID | `relationship_operations.get_geom_relationship_nominal_avg_point` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipNominalAvgPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `nominal_average_point` | `PointName` | `Nominal Average Point` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Nominal Geometry

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipNominalGeometry` |
| Operation ID | `relationship_operations.get_geom_relationship_nominal_geometry` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipNominalGeometry` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `nominal_geometry` | `CollectionObjectName` | `Nominal Geometry` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Point List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Point List](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipPointList` |
| Operation ID | `relationship_operations.get_geom_relationship_point_list` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipPointList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `all_points` | `repeated PointName` | `All Points` | — |
| Result | 2 | `used_points` | `repeated PointName` | `Used Points` | — |
| Result | 3 | `ignored_points` | `repeated PointName` | `Ignored Points` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Projection Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipProjectionPlane` |
| Operation ID | `relationship_operations.get_geom_relationship_projection_plane` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipProjectionPlane` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `projection_plane_name` | `CollectionObjectName` | `Projection Plane Name` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Pipe Relationship Cut Status

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Pipe Relationship Cut Status](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetPipeRelationshipCutStatus` |
| Operation ID | `relationship_operations.get_pipe_relationship_cut_status` |
| Route | `/briosa.RelationshipOperations/GetPipeRelationshipCutStatus` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `pipe_1_cut_available` | `bool` | `Pipe 1 - Cut Available?` | — |
| Result | 2 | `pipe_1_cut_active` | `bool` | `Pipe 1 - Cut Active?` | — |
| Result | 3 | `pipe_2_cut_available` | `bool` | `Pipe 2 - Cut Available?` | — |
| Result | 4 | `pipe_2_cut_active` | `bool` | `Pipe 2 - Cut Active?` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Pipe Relationship Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Pipe Relationship Properties](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetPipeRelationshipProperties` |
| Operation ID | `relationship_operations.get_pipe_relationship_properties` |
| Route | `/briosa.RelationshipOperations/GetPipeRelationshipProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `pipe_1_object_name` | `CollectionObjectName` | `Pipe 1 - Object Name` | — |
| Result | 2 | `pipe_1_inner_diameter` | `double` | `Pipe 1 - Inner Diameter` | — |
| Result | 3 | `pipe_1_outer_diameter` | `double` | `Pipe 1 - Outer Diameter` | — |
| Result | 4 | `pipe_1_cut_begin` | `double` | `Pipe 1 - Cut Begin` | — |
| Result | 5 | `pipe_1_cut_end` | `double` | `Pipe 1 - Cut End` | — |
| Result | 6 | `pipe_2_object_name` | `CollectionObjectName` | `Pipe 2 - Object Name` | — |
| Result | 7 | `pipe_2_inner_diameter` | `double` | `Pipe 2 - Inner Diameter` | — |
| Result | 8 | `pipe_2_outer_diameter` | `double` | `Pipe 2 - Outer Diameter` | — |
| Result | 9 | `pipe_2_cut_begin` | `double` | `Pipe 2 - Cut Begin` | — |
| Result | 10 | `pipe_2_cut_end` | `double` | `Pipe 2 - Cut End` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Pipe Relationship Weights

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetPipeRelationshipWeights` |
| Operation ID | `relationship_operations.get_pipe_relationship_weights` |
| Route | `/briosa.RelationshipOperations/GetPipeRelationshipWeights` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `overall_weight` | `double` | `Overall Weight` | — |
| Result | 2 | `axis_offset` | `double` | `Axis Offset` | — |
| Result | 3 | `axis_alignment` | `double` | `Axis Alignment` | — |
| Result | 4 | `center_pull` | `double` | `Center Pull` | — |
| Result | 5 | `out_of_material_weight` | `double` | `Out of material - Weight` | — |
| Result | 6 | `out_of_material_static_offset` | `double` | `Out of material - Static Offset` | — |
| Result | 7 | `constrain_region_at_od` | `bool` | `Constrain Region at OD` | — |
| Result | 8 | `constrain_id_od_overlap` | `bool` | `Constrain ID/OD overlap` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Fit Constraints (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipFitConstraintsScalarType` |
| Operation ID | `relationship_operations.get_relationship_fit_constraints_scalar_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipFitConstraintsScalarType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_high_tolerance` | `bool` | `Use High Tolerance?` | — |
| Result | 2 | `high_tolerance` | `double` | `High Tolerance` | — |
| Result | 3 | `use_low_tolerance` | `bool` | `Use Low Tolerance?` | — |
| Result | 4 | `low_tolerance` | `double` | `Low Tolerance` | — |
| Result | 5 | `fit_constraint_options` | `FitConstraintScalarOptions` | `Fit Constraint Options` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Outlier Rejection (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipOutlierRejectionScalarType` |
| Operation ID | `relationship_operations.get_relationship_outlier_rejection_scalar_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipOutlierRejectionScalarType` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_high_limit` | `bool` | `Use High Limit?` | — |
| Result | 2 | `high_limit` | `double` | `High Limit` | — |
| Result | 3 | `use_low_limit` | `bool` | `Use Low Limit?` | — |
| Result | 4 | `low_limit` | `double` | `Low Limit` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Projection Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipProjectionOptions` |
| Operation ID | `relationship_operations.get_relationship_projection_options` |
| Route | `/briosa.RelationshipOperations/GetRelationshipProjectionOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `ignore_edge_projections` | `bool` | `Ignore Edge Projections?` | — |
| Result | 2 | `probe_offsets_override_target_values` | `bool` | `Probe Offsets - Override Target Values?` | — |
| Result | 3 | `probe_offsets_override_value` | `double` | `Probe Offsets - Override Value` | — |
| Result | 4 | `add_extra_material` | `bool` | `Add Extra Material?` | — |
| Result | 5 | `extra_material_thickness` | `double` | `Extra Material Thickness` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Reporting Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipReportingFrame` |
| Operation ID | `relationship_operations.get_relationship_reporting_frame` |
| Route | `/briosa.RelationshipOperations/GetRelationshipReportingFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Sub Sampling Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipSubSamplingOptions` |
| Operation ID | `relationship_operations.get_relationship_sub_sampling_options` |
| Route | `/briosa.RelationshipOperations/GetRelationshipSubSamplingOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_every_ith_point` | `bool` | `Use every i-th point` | — |
| Result | 2 | `i_value` | `int32` | `i value` | — |
| Result | 3 | `use_no_more_than_n_points` | `bool` | `Use no more than n points` | — |
| Result | 4 | `n_value` | `int32` | `n value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Tolerance (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipToleranceScalarType` |
| Operation ID | `relationship_operations.get_relationship_tolerance_scalar_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipToleranceScalarType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_high_tolerance` | `bool` | `Use High Tolerance?` | — |
| Result | 2 | `high_tolerance` | `double` | `High Tolerance` | — |
| Result | 3 | `use_low_tolerance` | `bool` | `Use Low Tolerance?` | — |
| Result | 4 | `low_tolerance` | `double` | `Low Tolerance` | — |
| Result | 5 | `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Tolerance (Vector Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipToleranceVectorType` |
| Operation ID | `relationship_operations.get_relationship_tolerance_vector_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipToleranceVectorType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_high_x_tolerance` | `bool` | `Use High X Tolerance?` | — |
| Result | 2 | `high_x_tolerance` | `double` | `High X Tolerance` | — |
| Result | 3 | `use_high_y_tolerance` | `bool` | `Use High Y Tolerance?` | — |
| Result | 4 | `high_y_tolerance` | `double` | `High Y Tolerance` | — |
| Result | 5 | `use_high_z_tolerance` | `bool` | `Use High Z Tolerance?` | — |
| Result | 6 | `high_z_tolerance` | `double` | `High Z Tolerance` | — |
| Result | 7 | `use_high_mag_tolerance` | `bool` | `Use High Mag Tolerance?` | — |
| Result | 8 | `high_mag_tolerance` | `double` | `High Mag Tolerance` | — |
| Result | 9 | `use_low_x_tolerance` | `bool` | `Use Low X Tolerance?` | — |
| Result | 10 | `low_x_tolerance` | `double` | `Low X Tolerance` | — |
| Result | 11 | `use_low_y_tolerance` | `bool` | `Use Low Y Tolerance?` | — |
| Result | 12 | `low_y_tolerance` | `double` | `Low Y Tolerance` | — |
| Result | 13 | `use_low_z_tolerance` | `bool` | `Use Low Z Tolerance?` | — |
| Result | 14 | `low_z_tolerance` | `double` | `Low Z Tolerance` | — |
| Result | 15 | `use_low_mag_tolerance` | `bool` | `Use Low Mag Tolerance?` | — |
| Result | 16 | `low_mag_tolerance` | `double` | `Low Mag Tolerance` | — |
| Result | 17 | `vector_tolerance` | `ToleranceVectorOptions` | `Vector Tolerance` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Type

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Type](/mp-command-catalog/commands/relationship-operations#get-relationship-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipType` |
| Operation ID | `relationship_operations.get_relationship_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `relationship_type` | `string` | `Relationship Type` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Weighting

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Weighting](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipWeighting` |
| Operation ID | `relationship_operations.get_relationship_weighting` |
| Route | `/briosa.RelationshipOperations/GetRelationshipWeighting` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `weight` | `double` | `Weight` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Pipe Fitting Relationship

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Pipe Fitting Relationship](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) |
| Service | `briosa.RelationshipOperations` |
| RPC | `MakePipeFittingRelationship` |
| Operation ID | `relationship_operations.make_pipe_fitting_relationship` |
| Route | `/briosa.RelationshipOperations/MakePipeFittingRelationship` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `pipe_1_object_name` | `CollectionObjectName` | `Pipe 1 - Object Name` | Required |
| Request | 3 | `pipe_2_object_name` | `CollectionObjectName` | `Pipe 2 - Object Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Pipe Relationship Cut

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Pipe Relationship Cut](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) |
| Service | `briosa.RelationshipOperations` |
| RPC | `MakePipeRelationshipCut` |
| Operation ID | `relationship_operations.make_pipe_relationship_cut` |
| Route | `/briosa.RelationshipOperations/MakePipeRelationshipCut` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `pipe_1_make_cut` | `bool` | `Pipe 1 - Make Cut` | true |
| Request | 3 | `pipe_1_create_frame` | `bool` | `Pipe 1 - Create Frame` | false |
| Request | 4 | `pipe_1_frame_name` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| Request | 5 | `pipe_2_make_cut` | `bool` | `Pipe 2 - Make Cut` | true |
| Request | 6 | `pipe_2_create_frame` | `bool` | `Pipe 2 - Create Frame` | false |
| Request | 7 | `pipe_2_frame_name` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Pipe Relationship Force Cut to Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Pipe Relationship Force Cut to Frame](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) |
| Service | `briosa.RelationshipOperations` |
| RPC | `PipeRelationshipForceCutToFrame` |
| Operation ID | `relationship_operations.pipe_relationship_force_cut_to_frame` |
| Route | `/briosa.RelationshipOperations/PipeRelationshipForceCutToFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `pipe_1_force_cut_to_frame` | `bool` | `Pipe 1 - Force Cut to Frame?` | true |
| Request | 3 | `pipe_1_frame_name` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| Request | 4 | `pipe_2_force_cut_to_frame` | `bool` | `Pipe 2 - Force Cut to Frame?` | true |
| Request | 5 | `pipe_2_frame_name` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Auto Measure Nominal Feature

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Auto Measure Nominal Feature](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipAutoMeasureNominalFeature` |
| Operation ID | `relationship_operations.set_geom_relationship_auto_measure_nominal_feature` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipAutoMeasureNominalFeature` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `trap_clouds_false_geometry` | `bool` | `Trap Clouds? (FALSE = Geometry)` | true |
| Request | 3 | `instrument_id` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 4 | `measurement_mode` | `string` | `Measurement Mode` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipAutoMeasureNominalFeature(SetGeomRelationshipAutoMeasureNominalFeatureRequest) returns (SetGeomRelationshipAutoMeasureNominalFeatureResult);

message SetGeomRelationshipAutoMeasureNominalFeatureRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool trap_clouds_false_geometry = 2;
  optional CollectionInstrumentId instrument_id = 3;
  optional string measurement_mode = 4;
}

message SetGeomRelationshipAutoMeasureNominalFeatureResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Auto Vectors Nominal (AVN)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Auto Vectors Nominal (AVN)](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipAutoVectorsNominalAvn` |
| Operation ID | `relationship_operations.set_geom_relationship_auto_vectors_nominal_avn` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipAutoVectorsNominalAvn` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `create_auto_vectors_avn` | `bool` | `Create Auto Vectors AVN` | false |
| Request | 3 | `points_type` | `PointFilterInputType` | `Points Type` | Cardinal Points |
| Request | 4 | `use_vector_group_custom_prefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| Request | 5 | `vector_group_custom_prefix` | `string` | `Vector Group Custom Prefix` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Cardinal Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipCardinalPoints` |
| Operation ID | `relationship_operations.set_geom_relationship_cardinal_points` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipCardinalPoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `create_cardinal_pts_when_fitting` | `bool` | `Create Cardinal Pts when Fitting?` | true |
| Request | 3 | `prefix_cardinal_pts_name_with_rel_name` | `bool` | `Prefix Cardinal Pts name with Rel name?` | true |
| Request | 4 | `cardinal_pts_group_name` | `string` | `Cardinal Pts Group Name` | GR-Cardinal Pts |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Criteria

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipCriteria` |
| Operation ID | `relationship_operations.set_geom_relationship_criteria` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipCriteria` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `criteria` | `string` | `Criteria` | Empty |
| Request | 3 | `show_in_report` | `bool` | `Show in Report` | true |
| Request | 4 | `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |
| Request | 5 | `optimization_delta_weight` | `double` | `Optimization: Delta Weight` | 0.000000 |
| Request | 6 | `optimization_out_of_tolerance_weight` | `double` | `Optimization: Out of Tolerance Weight` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Measured Geometry

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipMeasuredGeometry` |
| Operation ID | `relationship_operations.set_geom_relationship_measured_geometry` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipMeasuredGeometry` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `measured_geometry` | `CollectionObjectName` | `Measured Geometry` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Nominal Avg Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipNominalAvgPoint` |
| Operation ID | `relationship_operations.set_geom_relationship_nominal_avg_point` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipNominalAvgPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `compare_to_nominal` | `bool` | `Compare To Nominal?` | true |
| Request | 3 | `nominal_average_point` | `PointName` | `Nominal Average Point` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Nominal Geometry

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipNominalGeometry` |
| Operation ID | `relationship_operations.set_geom_relationship_nominal_geometry` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipNominalGeometry` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `compare_to_nominal` | `bool` | `Compare To Nominal?` | true |
| Request | 3 | `nominal_geometry` | `CollectionObjectName` | `Nominal Geometry` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Projection Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipProjectionPlane` |
| Operation ID | `relationship_operations.set_geom_relationship_projection_plane` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipProjectionPlane` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `project_to_plane` | `bool` | `Project to Plane?` | true |
| Request | 3 | `projection_plane_name` | `CollectionObjectName` | `Projection Plane Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Object to Object Direction Relationship Fit Constraints

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Object to Object Direction Relationship Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetObjectToObjectDirectionRelationshipFitConstraints` |
| Operation ID | `relationship_operations.set_object_to_object_direction_relationship_fit_constraints` |
| Route | `/briosa.RelationshipOperations/SetObjectToObjectDirectionRelationshipFitConstraints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `angle_between_vectors_fit_constraints` | `FitConstraintScalarOptions` | `Angle Between Vectors Fit Constraints` | Both limits disabled |
| Request | 3 | `mutual_perpendicular_length_fit_constraints` | `FitConstraintScalarOptions` | `Mutual Perpendicular Length Fit Constraints` | Both limits disabled |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Pipe Relationship Segment Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Pipe Relationship Segment Properties](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetPipeRelationshipSegmentProperties` |
| Operation ID | `relationship_operations.set_pipe_relationship_segment_properties` |
| Route | `/briosa.RelationshipOperations/SetPipeRelationshipSegmentProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `pipe_1_inner_diameter` | `double` | `Pipe 1 - Inner Diameter` | 0.000000 |
| Request | 3 | `pipe_1_outer_diameter` | `double` | `Pipe 1 - Outer Diameter` | 0.000000 |
| Request | 4 | `pipe_1_cut_begin` | `double` | `Pipe 1 - Cut Begin` | 0.000000 |
| Request | 5 | `pipe_1_cut_end` | `double` | `Pipe 1 - Cut End` | 0.000000 |
| Request | 6 | `pipe_2_inner_diameter` | `double` | `Pipe 2 - Inner Diameter` | 0.000000 |
| Request | 7 | `pipe_2_outer_diameter` | `double` | `Pipe 2 - Outer Diameter` | 0.000000 |
| Request | 8 | `pipe_2_cut_begin` | `double` | `Pipe 2 - Cut Begin` | 0.000000 |
| Request | 9 | `pipe_2_cut_end` | `double` | `Pipe 2 - Cut End` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Pipe Relationship Weights

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetPipeRelationshipWeights` |
| Operation ID | `relationship_operations.set_pipe_relationship_weights` |
| Route | `/briosa.RelationshipOperations/SetPipeRelationshipWeights` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `overall_weight` | `double` | `Overall Weight` | 1.000000 |
| Request | 3 | `axis_offset` | `double` | `Axis Offset` | 2.000000 |
| Request | 4 | `axis_alignment` | `double` | `Axis Alignment` | 1.000000 |
| Request | 5 | `center_pull` | `double` | `Center Pull` | 0.100000 |
| Request | 6 | `out_of_material_weight` | `double` | `Out of material - Weight` | 10.000000 |
| Request | 7 | `out_of_material_offset` | `double` | `Out of material - Offset` | 1.000000 |
| Request | 8 | `constrain_region_at_od` | `bool` | `Constrain Region at OD` | false |
| Request | 9 | `constrain_id_od_overlap` | `bool` | `Constrain ID/OD overlap` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Auto Vectors Fit (AVF)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Auto Vectors Fit (AVF)](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipAutoVectorsFitAvf` |
| Operation ID | `relationship_operations.set_relationship_auto_vectors_fit_avf` |
| Route | `/briosa.RelationshipOperations/SetRelationshipAutoVectorsFitAvf` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `create_auto_vectors_avf` | `bool` | `Create Auto Vectors AVF` | false |
| Request | 3 | `use_vector_group_custom_prefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| Request | 4 | `vector_group_custom_prefix` | `string` | `Vector Group Custom Prefix` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Auto Vectors Group Default Prefix

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Auto Vectors Group Default Prefix](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipAutoVectorsGroupDefaultPrefix` |
| Operation ID | `relationship_operations.set_relationship_auto_vectors_group_default_prefix` |
| Route | `/briosa.RelationshipOperations/SetRelationshipAutoVectorsGroupDefaultPrefix` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geom_rel_avn_vg_default_prefix` | `string` | `Geom Rel AVN VG Default Prefix` | GR-AVN- |
| Request | 2 | `geom_rel_avf_vg_default_prefix` | `string` | `Geom Rel AVF VG Default Prefix` | GR-AVF- |
| Request | 3 | `non_geom_rel_vg_default_prefix` | `string` | `Non-Geom Rel VG Default Prefix` | Auto Vectors:  |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Desired Meas Count

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Desired Meas Count](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipDesiredMeasCount` |
| Operation ID | `relationship_operations.set_relationship_desired_meas_count` |
| Route | `/briosa.RelationshipOperations/SetRelationshipDesiredMeasCount` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `desired_measurement_count` | `int32` | `Desired Measurement Count` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Dormant Status

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Dormant Status](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipDormantStatus` |
| Operation ID | `relationship_operations.set_relationship_dormant_status` |
| Route | `/briosa.RelationshipOperations/SetRelationshipDormantStatus` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships` | `repeated CollectionItemName` | `Relationships` | Required |
| Request | 2 | `dormant_status` | `bool` | `Dormant Status` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Fit Constraints (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipFitConstraintsScalarType` |
| Operation ID | `relationship_operations.set_relationship_fit_constraints_scalar_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipFitConstraintsScalarType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `fit_constraint_options` | `FitConstraintScalarOptions` | `Fit Constraint Options` | Both limits disabled |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Orientation Fit Constraints (Vector Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Orientation Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipOrientationFitConstraintsVectorType` |
| Operation ID | `relationship_operations.set_relationship_orientation_fit_constraints_vector_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipOrientationFitConstraintsVectorType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `orientation_vector_constraint` | `ToleranceVectorOptions` | `Orientation Vector Constraint` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Outlier Rejection (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipOutlierRejectionScalarType` |
| Operation ID | `relationship_operations.set_relationship_outlier_rejection_scalar_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipOutlierRejectionScalarType` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipOutlierRejectionScalarType(SetRelationshipOutlierRejectionScalarTypeRequest) returns (SetRelationshipOutlierRejectionScalarTypeResult);

message SetRelationshipOutlierRejectionScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message SetRelationshipOutlierRejectionScalarTypeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Position Fit Constraints (Vector Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Position Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipPositionFitConstraintsVectorType` |
| Operation ID | `relationship_operations.set_relationship_position_fit_constraints_vector_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipPositionFitConstraintsVectorType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `position_vector_constraint` | `ToleranceVectorOptions` | `Position Vector Constraint` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Projection Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipProjectionOptions` |
| Operation ID | `relationship_operations.set_relationship_projection_options` |
| Route | `/briosa.RelationshipOperations/SetRelationshipProjectionOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Reporting Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipReportingFrame` |
| Operation ID | `relationship_operations.set_relationship_reporting_frame` |
| Route | `/briosa.RelationshipOperations/SetRelationshipReportingFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Sigmoidal Gap Fit Constraints

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Sigmoidal Gap Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipSigmoidalGapFitConstraints` |
| Operation ID | `relationship_operations.set_relationship_sigmoidal_gap_fit_constraints` |
| Route | `/briosa.RelationshipOperations/SetRelationshipSigmoidalGapFitConstraints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `use_sigmoidal_gap_constraints` | `bool` | `Use Sigmoidal Gap Constraints` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Sub Sampling Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipSubSamplingOptions` |
| Operation ID | `relationship_operations.set_relationship_sub_sampling_options` |
| Route | `/briosa.RelationshipOperations/SetRelationshipSubSamplingOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `use_every_ith_point` | `bool` | `Use every i-th point` | false |
| Request | 3 | `i_value` | `int32` | `i value` | 20 |
| Request | 4 | `use_no_more_than_n_points` | `bool` | `Use no more than n points` | true |
| Request | 5 | `n_value` | `int32` | `n value` | 10000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Tolerance (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipToleranceScalarType` |
| Operation ID | `relationship_operations.set_relationship_tolerance_scalar_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipToleranceScalarType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Tolerance (Vector Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipToleranceVectorType` |
| Operation ID | `relationship_operations.set_relationship_tolerance_vector_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipToleranceVectorType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `vector_tolerance` | `ToleranceVectorOptions` | `Vector Tolerance` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Voxel Cloud Display

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Voxel Cloud Display](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipVoxelCloudDisplay` |
| Operation ID | `relationship_operations.set_relationship_voxel_cloud_display` |
| Route | `/briosa.RelationshipOperations/SetRelationshipVoxelCloudDisplay` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `enable_voxel_cloud_display` | `bool` | `Enable Voxel Cloud Display?` | true |
| Request | 3 | `voxel_size_1_0_autodetect` | `double` | `Voxel Size (-1.0 autodetect)` | -1.000000 |
| Request | 4 | `min_pts_count_per_voxel` | `int32` | `Min Pts Count Per Voxel` | 3 |
| Request | 5 | `voxel_rendering_diameter_1_0_fast` | `double` | `Voxel Rendering Diameter % (-1.0 fast)` | 125.000000 |
| Request | 6 | `surface_analysis_mode` | `SurfaceAnalysisMode` | `Surface Analysis Mode` | Relationship |
| Request | 7 | `colorization_options` | `ColorizationOptions` | `Colorization Options` | Red |
| Request | 8 | `show_color_bar_in_view` | `bool` | `Show Color Bar in View?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipVoxelCloudDisplay(SetRelationshipVoxelCloudDisplayRequest) returns (SetRelationshipVoxelCloudDisplayResult);

message SetRelationshipVoxelCloudDisplayRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool enable_voxel_cloud_display = 2;
  optional double voxel_size_1_0_autodetect = 3;
  optional int32 min_pts_count_per_voxel = 4;
  optional double voxel_rendering_diameter_1_0_fast = 5;
  optional SurfaceAnalysisMode surface_analysis_mode = 6;
  optional ColorizationOptions colorization_options = 7;
  optional bool show_color_bar_in_view = 8;
}

message SetRelationshipVoxelCloudDisplayResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Weighting

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Weighting](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipWeighting` |
| Operation ID | `relationship_operations.set_relationship_weighting` |
| Route | `/briosa.RelationshipOperations/SetRelationshipWeighting` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `weight` | `double` | `Weight` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Weights Normalized

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Weights Normalized](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipWeightsNormalized` |
| Operation ID | `relationship_operations.set_relationship_weights_normalized` |
| Route | `/briosa.RelationshipOperations/SetRelationshipWeightsNormalized` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `CollectionName` | `Collection Name` | Required |
| Request | 2 | `pick_weighting_mode` | `RelWeightingMode` | `Pick Weighting Mode` | Normalize on equation count |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
