---
title: Analysis Operations
description: Current and next gRPC contracts for supported Analysis Operations MP commands.
toc_max_heading_level: 2
---

# Analysis Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Angle Between Line and Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Angle Between Line and Plane](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane) |
| Service | `briosa.AnalysisOperations` |
| RPC | `AngleBetweenLineAndPlane` |
| Operation ID | `analysis_operations.angle_between_line_and_plane` |
| Route | `/briosa.AnalysisOperations/AngleBetweenLineAndPlane` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `selected_line` | `CollectionObjectName` | `Selected Line` | Required |
| Request | 2 | `selected_plane` | `CollectionObjectName` | `Selected Plane` | Required |
| Request | 3 | `nominal_angle` | `double` | `Nominal Angle` | 0.000000 |
| Request | 4 | `angle_tolerance_0_0_for_none` | `double` | `Angle Tolerance (0.0 for none)` | 0.000000 |
| Result | 1 | `angle` | `double` | `Angle` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AngleBetweenLineAndPlane(AngleBetweenLineAndPlaneRequest) returns (AngleBetweenLineAndPlaneResult);

message AngleBetweenLineAndPlaneRequest {
  optional CollectionObjectName selected_line = 1;
  optional CollectionObjectName selected_plane = 2;
  optional double nominal_angle = 3;
  optional double angle_tolerance_0_0_for_none = 4;
}

message AngleBetweenLineAndPlaneResult {
  optional double angle = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Angle Between Two Lines

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Angle Between Two Lines](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines) |
| Service | `briosa.AnalysisOperations` |
| RPC | `AngleBetweenTwoLines` |
| Operation ID | `analysis_operations.angle_between_two_lines` |
| Route | `/briosa.AnalysisOperations/AngleBetweenTwoLines` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_1` | `CollectionObjectName` | `Line 1` | Required |
| Request | 2 | `line_2` | `CollectionObjectName` | `Line 2` | Required |
| Request | 3 | `nominal_angle` | `double` | `Nominal Angle` | 0.000000 |
| Request | 4 | `angle_tolerance_0_0_for_none` | `double` | `Angle Tolerance (0.0 for none)` | 0.000000 |
| Result | 1 | `angle` | `double` | `Angle` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AngleBetweenTwoLines(AngleBetweenTwoLinesRequest) returns (AngleBetweenTwoLinesResult);

message AngleBetweenTwoLinesRequest {
  optional CollectionObjectName line_1 = 1;
  optional CollectionObjectName line_2 = 2;
  optional double nominal_angle = 3;
  optional double angle_tolerance_0_0_for_none = 4;
}

message AngleBetweenTwoLinesResult {
  optional double angle = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Angle Between Two Planes' normals

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Angle Between Two Planes' normals](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals) |
| Service | `briosa.AnalysisOperations` |
| RPC | `AngleBetweenTwoPlanesNormals` |
| Operation ID | `analysis_operations.angle_between_two_planes_normals` |
| Route | `/briosa.AnalysisOperations/AngleBetweenTwoPlanesNormals` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_a` | `CollectionObjectName` | `Plane A` | Required |
| Request | 2 | `plane_b` | `CollectionObjectName` | `Plane B` | Required |
| Request | 3 | `nominal_angle` | `double` | `Nominal Angle` | 0.000000 |
| Request | 4 | `angle_tolerance_0_0_for_none` | `double` | `Angle Tolerance (0.0 for none)` | 0.000000 |
| Result | 1 | `angle` | `double` | `Angle` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AngleBetweenTwoPlanesNormals(AngleBetweenTwoPlanesNormalsRequest) returns (AngleBetweenTwoPlanesNormalsResult);

message AngleBetweenTwoPlanesNormalsRequest {
  optional CollectionObjectName plane_a = 1;
  optional CollectionObjectName plane_b = 2;
  optional double nominal_angle = 3;
  optional double angle_tolerance_0_0_for_none = 4;
}

message AngleBetweenTwoPlanesNormalsResult {
  optional double angle = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Best Fit Transformation - Group to Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Best Fit Transformation - Group to Group](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group) |
| Service | `briosa.AnalysisOperations` |
| RPC | `BestFitTransformationGroupToGroup` |
| Operation ID | `analysis_operations.best_fit_transformation_group_to_group` |
| Route | `/briosa.AnalysisOperations/BestFitTransformationGroupToGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group` | `CollectionObjectName` | `Reference Group` | Required |
| Request | 2 | `corresponding_group` | `CollectionObjectName` | `Corresponding Group` | Required |
| Request | 3 | `show_interface` | `bool` | `Show Interface` | false |
| Request | 4 | `rms_tolerance_0_0_for_none` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| Request | 5 | `maximum_absolute_tolerance_0_0_for_none` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| Request | 6 | `allow_scale` | `bool` | `Allow Scale` | false |
| Request | 7 | `allow_x` | `bool` | `Allow X` | true |
| Request | 8 | `allow_y` | `bool` | `Allow Y` | true |
| Request | 9 | `allow_z` | `bool` | `Allow Z` | true |
| Request | 10 | `allow_rx` | `bool` | `Allow Rx` | true |
| Request | 11 | `allow_ry` | `bool` | `Allow Ry` | true |
| Request | 12 | `allow_rz` | `bool` | `Allow Rz` | true |
| Request | 13 | `lock_degrees_of_freedom` | `bool` | `Lock Degrees of Freedom` | false |
| Request | 14 | `generate_event` | `bool` | `Generate Event` | false |
| Request | 15 | `file_path_for_csv_text_report_requires_show_interface_true` | `FileReference` | `File Path for CSV Text Report (requires Show Interface = TRUE)` | Required |
| Result | 1 | `transform_in_working` | `Transform` | `Transform in Working` | — |
| Result | 2 | `optimum_transform` | `Transform` | `Optimum Transform` | — |
| Result | 3 | `rms_deviation` | `double` | `RMS Deviation` | — |
| Result | 4 | `maximum_absolute_deviation` | `double` | `Maximum Absolute Deviation` | — |
| Result | 5 | `number_of_unknowns` | `int32` | `Number of Unknowns` | — |
| Result | 6 | `number_of_equations` | `int32` | `Number of Equations` | — |
| Result | 7 | `robustness` | `double` | `Robustness` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc BestFitTransformationGroupToGroup(BestFitTransformationGroupToGroupRequest) returns (BestFitTransformationGroupToGroupResult);

message BestFitTransformationGroupToGroupRequest {
  optional CollectionObjectName reference_group = 1;
  optional CollectionObjectName corresponding_group = 2;
  optional bool show_interface = 3;
  optional double rms_tolerance_0_0_for_none = 4;
  optional double maximum_absolute_tolerance_0_0_for_none = 5;
  optional bool allow_scale = 6;
  optional bool allow_x = 7;
  optional bool allow_y = 8;
  optional bool allow_z = 9;
  optional bool allow_rx = 10;
  optional bool allow_ry = 11;
  optional bool allow_rz = 12;
  optional bool lock_degrees_of_freedom = 13;
  optional bool generate_event = 14;
  optional FileReference file_path_for_csv_text_report_requires_show_interface_true = 15;
}

message BestFitTransformationGroupToGroupResult {
  optional Transform transform_in_working = 1;
  optional Transform optimum_transform = 2;
  optional double rms_deviation = 3;
  optional double maximum_absolute_deviation = 4;
  optional int32 number_of_unknowns = 5;
  optional int32 number_of_equations = 6;
  optional double robustness = 7;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Compute Group to Group Orientation (Rx,Ry,Rz)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Compute Group to Group Orientation (Rx,Ry,Rz)](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz) |
| Service | `briosa.AnalysisOperations` |
| RPC | `ComputeGroupToGroupOrientationRxRyRz` |
| Operation ID | `analysis_operations.compute_group_to_group_orientation_rx_ry_rz` |
| Route | `/briosa.AnalysisOperations/ComputeGroupToGroupOrientationRxRyRz` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group` | `CollectionObjectName` | `Reference Group` | Required |
| Request | 2 | `corresponding_group` | `CollectionObjectName` | `Corresponding Group` | Required |
| Result | 1 | `rx` | `double` | `Rx` | — |
| Result | 2 | `ry` | `double` | `Ry` | — |
| Result | 3 | `rz` | `double` | `Rz` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ComputeGroupToGroupOrientationRxRyRz(ComputeGroupToGroupOrientationRxRyRzRequest) returns (ComputeGroupToGroupOrientationRxRyRzResult);

message ComputeGroupToGroupOrientationRxRyRzRequest {
  optional CollectionObjectName reference_group = 1;
  optional CollectionObjectName corresponding_group = 2;
}

message ComputeGroupToGroupOrientationRxRyRzResult {
  optional double rx = 1;
  optional double ry = 2;
  optional double rz = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Create Point Uncertainty Cloud Point Sets

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Create Point Uncertainty Cloud Point Sets](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets) |
| Service | `briosa.AnalysisOperations` |
| RPC | `CreatePointUncertaintyCloudPointSets` |
| Operation ID | `analysis_operations.create_point_uncertainty_cloud_point_sets` |
| Route | `/briosa.AnalysisOperations/CreatePointUncertaintyCloudPointSets` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | `Point Name List` | Required |
| Request | 2 | `number_of_samples` | `int32` | `Number of Samples` | 1000 |
| Request | 3 | `uncertainty_reference_frame_mode` | `string` | `Uncertainty Reference Frame Mode` | With respect to WORLD |
| Request | 4 | `grouping_mode` | `string` | `Grouping mode` | Group per point |
| Request | 5 | `point_set_mode` | `string` | `Point set mode` | Point clouds |
| Result | 1 | `point_groups` | `repeated CollectionObjectName` | `Point Groups` | — |
| Result | 2 | `point_sets` | `repeated CollectionObjectName` | `Point Sets` | — |
| Result | 3 | `point_clouds` | `repeated CollectionObjectName` | `Point Clouds` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CreatePointUncertaintyCloudPointSets(CreatePointUncertaintyCloudPointSetsRequest) returns (CreatePointUncertaintyCloudPointSetsResult);

message CreatePointUncertaintyCloudPointSetsRequest {
  repeated PointName point_name_list = 1;
  optional int32 number_of_samples = 2;
  optional string uncertainty_reference_frame_mode = 3;
  optional string grouping_mode = 4;
  optional string point_set_mode = 5;
}

message CreatePointUncertaintyCloudPointSetsResult {
  repeated CollectionObjectName point_groups = 1;
  repeated CollectionObjectName point_sets = 2;
  repeated CollectionObjectName point_clouds = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Create Point Uncertainty Fields

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Create Point Uncertainty Fields](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields) |
| Service | `briosa.AnalysisOperations` |
| RPC | `CreatePointUncertaintyFields` |
| Operation ID | `analysis_operations.create_point_uncertainty_fields` |
| Route | `/briosa.AnalysisOperations/CreatePointUncertaintyFields` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | `Point Name List` | Required |
| Request | 2 | `number_of_samples` | `int32` | `Number of Samples` | 1000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CreatePointUncertaintyFields(CreatePointUncertaintyFieldsRequest) returns (CreatePointUncertaintyFieldsResult);

message CreatePointUncertaintyFieldsRequest {
  repeated PointName point_name_list = 1;
  optional int32 number_of_samples = 2;
}

message CreatePointUncertaintyFieldsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Fit Geometry to Point Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Fit Geometry to Point Group](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group) |
| Service | `briosa.AnalysisOperations` |
| RPC | `FitGeometryToPointGroup` |
| Operation ID | `analysis_operations.fit_geometry_to_point_group` |
| Route | `/briosa.AnalysisOperations/FitGeometryToPointGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_type` | `GeometryType` | `Geometry Type` | Required |
| Request | 2 | `group_to_fit` | `CollectionObjectName` | `Group To Fit` | Required |
| Request | 3 | `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| Request | 4 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 5 | `report_deviations` | `bool` | `Report Deviations` | false |
| Request | 6 | `fit_interface_tolerance_1_0_use_profile` | `double` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| Request | 7 | `ignore_out_of_tolerance_points` | `bool` | `Ignore Out of Tolerance Points` | false |
| Request | 8 | `starting_condition_geometry_optional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc FitGeometryToPointGroup(FitGeometryToPointGroupRequest) returns (FitGeometryToPointGroupResult);

message FitGeometryToPointGroupRequest {
  optional GeometryType geometry_type = 1;
  optional CollectionObjectName group_to_fit = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional string fit_profile_name = 4;
  optional bool report_deviations = 5;
  optional double fit_interface_tolerance_1_0_use_profile = 6;
  optional bool ignore_out_of_tolerance_points = 7;
  optional CollectionObjectName starting_condition_geometry_optional = 8;
}

message FitGeometryToPointGroupResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Fit Geometry to Point Group Projected to Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Fit Geometry to Point Group Projected to Plane](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane) |
| Service | `briosa.AnalysisOperations` |
| RPC | `FitGeometryToPointGroupProjectedToPlane` |
| Operation ID | `analysis_operations.fit_geometry_to_point_group_projected_to_plane` |
| Route | `/briosa.AnalysisOperations/FitGeometryToPointGroupProjectedToPlane` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_type` | `GeometryType` | `Geometry Type` | Required |
| Request | 2 | `group_to_fit` | `CollectionObjectName` | `Group To Fit` | Required |
| Request | 3 | `plane_name` | `CollectionObjectName` | `Plane Name` | Required |
| Request | 4 | `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| Request | 5 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 6 | `report_deviations` | `bool` | `Report Deviations` | false |
| Request | 7 | `fit_interface_tolerance_1_0_use_profile` | `double` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| Request | 8 | `ignore_out_of_tolerance_points` | `bool` | `Ignore Out of Tolerance Points` | false |
| Request | 9 | `starting_condition_geometry_optional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc FitGeometryToPointGroupProjectedToPlane(FitGeometryToPointGroupProjectedToPlaneRequest) returns (FitGeometryToPointGroupProjectedToPlaneResult);

message FitGeometryToPointGroupProjectedToPlaneRequest {
  optional GeometryType geometry_type = 1;
  optional CollectionObjectName group_to_fit = 2;
  optional CollectionObjectName plane_name = 3;
  optional CollectionObjectName resulting_object_name = 4;
  optional string fit_profile_name = 5;
  optional bool report_deviations = 6;
  optional double fit_interface_tolerance_1_0_use_profile = 7;
  optional bool ignore_out_of_tolerance_points = 8;
  optional CollectionObjectName starting_condition_geometry_optional = 9;
}

message FitGeometryToPointGroupProjectedToPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Fit Geometry to Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Fit Geometry to Points](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points) |
| Service | `briosa.AnalysisOperations` |
| RPC | `FitGeometryToPoints` |
| Operation ID | `analysis_operations.fit_geometry_to_points` |
| Route | `/briosa.AnalysisOperations/FitGeometryToPoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_type` | `GeometryType` | `Geometry Type` | Required |
| Request | 2 | `points_to_fit` | `repeated PointName` | `Points to Fit` | Required |
| Request | 3 | `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| Request | 4 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 5 | `report_deviations` | `bool` | `Report Deviations` | false |
| Request | 6 | `fit_interface_tolerance_1_0_use_profile` | `double` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| Request | 7 | `ignore_out_of_tolerance_points` | `bool` | `Ignore Out of Tolerance Points` | false |
| Request | 8 | `starting_condition_geometry_optional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc FitGeometryToPoints(FitGeometryToPointsRequest) returns (FitGeometryToPointsResult);

message FitGeometryToPointsRequest {
  optional GeometryType geometry_type = 1;
  repeated PointName points_to_fit = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional string fit_profile_name = 4;
  optional bool report_deviations = 5;
  optional double fit_interface_tolerance_1_0_use_profile = 6;
  optional bool ignore_out_of_tolerance_points = 7;
  optional CollectionObjectName starting_condition_geometry_optional = 8;
}

message FitGeometryToPointsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get B-Spline Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get B-Spline Properties](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetBSplineProperties` |
| Operation ID | `analysis_operations.get_b_spline_properties` |
| Route | `/briosa.AnalysisOperations/GetBSplineProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `b_spline_name` | `CollectionObjectName` | `B-Spline Name` | Required |
| Result | 1 | `degree` | `int32` | `Degree` | — |
| Result | 2 | `knots` | `int32` | `Knots` | — |
| Result | 3 | `control_points` | `int32` | `Control Points` | — |
| Result | 4 | `range_min` | `double` | `Range Min` | — |
| Result | 5 | `range_max` | `double` | `Range Max` | — |
| Result | 6 | `length` | `double` | `Length` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetBSplineProperties(GetBSplinePropertiesRequest) returns (GetBSplinePropertiesResult);

message GetBSplinePropertiesRequest {
  optional CollectionObjectName b_spline_name = 1;
}

message GetBSplinePropertiesResult {
  optional int32 degree = 1;
  optional int32 knots = 2;
  optional int32 control_points = 3;
  optional double range_min = 4;
  optional double range_max = 5;
  optional double length = 6;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Circle Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Circle Properties](/mp-command-catalog/commands/analysis-operations#get-circle-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetCircleProperties` |
| Operation ID | `analysis_operations.get_circle_properties` |
| Route | `/briosa.AnalysisOperations/GetCircleProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `CollectionObjectName` | `Circle Name` | Required |
| Result | 1 | `center_coordinate` | `Vector` | `Center Coordinate` | — |
| Result | 2 | `normal_direction` | `Vector` | `Normal Direction` | — |
| Result | 3 | `radius` | `double` | `Radius` | — |
| Result | 4 | `diameter` | `double` | `Diameter` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetCircleProperties(GetCirclePropertiesRequest) returns (GetCirclePropertiesResult);

message GetCirclePropertiesRequest {
  optional CollectionObjectName circle_name = 1;
}

message GetCirclePropertiesResult {
  optional Vector center_coordinate = 1;
  optional Vector normal_direction = 2;
  optional double radius = 3;
  optional double diameter = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Cone Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Cone Properties](/mp-command-catalog/commands/analysis-operations#get-cone-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetConeProperties` |
| Operation ID | `analysis_operations.get_cone_properties` |
| Route | `/briosa.AnalysisOperations/GetConeProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cone_name` | `CollectionObjectName` | `Cone Name` | Required |
| Result | 1 | `cone_end_point_in_working_coordinates` | `Vector` | `Cone End Point (in working coordinates)` | — |
| Result | 2 | `cone_axis_in_working_coordinates` | `Vector` | `Cone Axis (in working coordinates)` | — |
| Result | 3 | `cone_length` | `double` | `Cone Length` | — |
| Result | 4 | `cone_theta_start` | `double` | `Cone Theta Start` | — |
| Result | 5 | `cone_theta_span` | `double` | `Cone Theta Span` | — |
| Result | 6 | `cone_included_angle` | `double` | `Cone Included Angle` | — |
| Result | 7 | `cut_length_from_apex` | `double` | `Cut Length from Apex` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetConeProperties(GetConePropertiesRequest) returns (GetConePropertiesResult);

message GetConePropertiesRequest {
  optional CollectionObjectName cone_name = 1;
}

message GetConePropertiesResult {
  optional Vector cone_end_point_in_working_coordinates = 1;
  optional Vector cone_axis_in_working_coordinates = 2;
  optional double cone_length = 3;
  optional double cone_theta_start = 4;
  optional double cone_theta_span = 5;
  optional double cone_included_angle = 6;
  optional double cut_length_from_apex = 7;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Coordinate for i-th Point in Point Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Coordinate for i-th Point in Point Set](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetCoordinateForIthPointInPointSet` |
| Operation ID | `analysis_operations.get_coordinate_for_ith_point_in_point_set` |
| Route | `/briosa.AnalysisOperations/GetCoordinateForIthPointInPointSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_set` | `CollectionObjectName` | `Point Set` | Required |
| Request | 2 | `point_set_index` | `int32` | `Point Set Index` | 0 |
| Result | 1 | `point_name` | `string` | `Point Name` | — |
| Result | 2 | `point_coordinates` | `Vector` | `Point Coordinates` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetCoordinateForIthPointInPointSet(GetCoordinateForIthPointInPointSetRequest) returns (GetCoordinateForIthPointInPointSetResult);

message GetCoordinateForIthPointInPointSetRequest {
  optional CollectionObjectName point_set = 1;
  optional int32 point_set_index = 2;
}

message GetCoordinateForIthPointInPointSetResult {
  optional string point_name = 1;
  optional Vector point_coordinates = 2;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Cylinder Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Cylinder Properties](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetCylinderProperties` |
| Operation ID | `analysis_operations.get_cylinder_properties` |
| Route | `/briosa.AnalysisOperations/GetCylinderProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cylinder_name` | `CollectionObjectName` | `Cylinder Name` | Required |
| Result | 1 | `begin_coordinate` | `Vector` | `Begin Coordinate` | — |
| Result | 2 | `end_coordinate` | `Vector` | `End Coordinate` | — |
| Result | 3 | `axis_direction` | `Vector` | `Axis Direction` | — |
| Result | 4 | `length` | `double` | `Length` | — |
| Result | 5 | `radius` | `double` | `Radius` | — |
| Result | 6 | `diameter` | `double` | `Diameter` | — |
| Result | 7 | `nominals_point_inward` | `bool` | `Nominals Point Inward` | — |
| Result | 8 | `facets` | `int32` | `Facets` | — |
| Result | 9 | `enable_theta_extent_display_mode` | `bool` | `Enable Theta Extent Display Mode` | — |
| Result | 10 | `theta_start_in_degrees` | `double` | `Theta Start in Degrees` | — |
| Result | 11 | `theta_span_in_degrees` | `double` | `Theta Span in Degrees` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetCylinderProperties(GetCylinderPropertiesRequest) returns (GetCylinderPropertiesResult);

message GetCylinderPropertiesRequest {
  optional CollectionObjectName cylinder_name = 1;
}

message GetCylinderPropertiesResult {
  optional Vector begin_coordinate = 1;
  optional Vector end_coordinate = 2;
  optional Vector axis_direction = 3;
  optional double length = 4;
  optional double radius = 5;
  optional double diameter = 6;
  optional bool nominals_point_inward = 7;
  optional int32 facets = 8;
  optional bool enable_theta_extent_display_mode = 9;
  optional double theta_start_in_degrees = 10;
  optional double theta_span_in_degrees = 11;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Ellipse Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Ellipse Properties](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetEllipseProperties` |
| Operation ID | `analysis_operations.get_ellipse_properties` |
| Route | `/briosa.AnalysisOperations/GetEllipseProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ellipse_name` | `CollectionObjectName` | `Ellipse Name` | Required |
| Result | 1 | `center_coordinate` | `Vector` | `Center Coordinate` | — |
| Result | 2 | `normal_direction` | `Vector` | `Normal Direction` | — |
| Result | 3 | `major_axis_radius` | `double` | `Major Axis Radius` | — |
| Result | 4 | `minor_axis_radius` | `double` | `Minor Axis Radius` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetEllipseProperties(GetEllipsePropertiesRequest) returns (GetEllipsePropertiesResult);

message GetEllipsePropertiesRequest {
  optional CollectionObjectName ellipse_name = 1;
}

message GetEllipsePropertiesResult {
  optional Vector center_coordinate = 1;
  optional Vector normal_direction = 2;
  optional double major_axis_radius = 3;
  optional double minor_axis_radius = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Euler Parameters for Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Euler Parameters for Frame](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetEulerParametersForFrame` |
| Operation ID | `analysis_operations.get_euler_parameters_for_frame` |
| Route | `/briosa.AnalysisOperations/GetEulerParametersForFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame` | `CollectionObjectName` | `Frame` | Required |
| Result | 1 | `x` | `double` | `X` | — |
| Result | 2 | `y` | `double` | `Y` | — |
| Result | 3 | `z` | `double` | `Z` | — |
| Result | 4 | `e1` | `double` | `e1` | — |
| Result | 5 | `e2` | `double` | `e2` | — |
| Result | 6 | `e3` | `double` | `e3` | — |
| Result | 7 | `e4` | `double` | `e4` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetEulerParametersForFrame(GetEulerParametersForFrameRequest) returns (GetEulerParametersForFrameResult);

message GetEulerParametersForFrameRequest {
  optional CollectionObjectName frame = 1;
}

message GetEulerParametersForFrameResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double e1 = 4;
  optional double e2 = 5;
  optional double e3 = 6;
  optional double e4 = 7;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Euler Parameters for i-th Frame in Frame Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Euler Parameters for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetEulerParametersForIthFrameInFrameSet` |
| Operation ID | `analysis_operations.get_euler_parameters_for_ith_frame_in_frame_set` |
| Route | `/briosa.AnalysisOperations/GetEulerParametersForIthFrameInFrameSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set` | `CollectionObjectName` | `Frame Set` | Required |
| Request | 2 | `frame_set_index` | `int32` | `Frame Set Index` | 0 |
| Result | 1 | `x` | `double` | `X` | — |
| Result | 2 | `y` | `double` | `Y` | — |
| Result | 3 | `z` | `double` | `Z` | — |
| Result | 4 | `e1` | `double` | `e1` | — |
| Result | 5 | `e2` | `double` | `e2` | — |
| Result | 6 | `e3` | `double` | `e3` | — |
| Result | 7 | `e4` | `double` | `e4` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetEulerParametersForIthFrameInFrameSet(GetEulerParametersForIthFrameInFrameSetRequest) returns (GetEulerParametersForIthFrameInFrameSetResult);

message GetEulerParametersForIthFrameInFrameSetRequest {
  optional CollectionObjectName frame_set = 1;
  optional int32 frame_set_index = 2;
}

message GetEulerParametersForIthFrameInFrameSetResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double e1 = 4;
  optional double e2 = 5;
  optional double e3 = 6;
  optional double e4 = 7;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get i-th Collection Name

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get i-th Collection Name](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetIthCollectionName` |
| Operation ID | `analysis_operations.get_ith_collection_name` |
| Route | `/briosa.AnalysisOperations/GetIthCollectionName` |
| Validation | Released implementation |
| Automatic Replay | Safe for the current read-only operation |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_index` | `int32` | `Collection Index` | 0 |
| Result | 1 | `resultant_name` | `string` | `Resultant Name` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetIthCollectionName(GetIthCollectionNameRequest) returns (GetIthCollectionNameResult);

message GetIthCollectionNameRequest {
  optional int32 collection_index = 1;
}

message GetIthCollectionNameResult {
  optional string resultant_name = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get i-th Point From Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get i-th Point From Group](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetIthPointFromGroup` |
| Operation ID | `analysis_operations.get_ith_point_from_group` |
| Route | `/briosa.AnalysisOperations/GetIthPointFromGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name` | `CollectionObjectName` | `Group Name` | Required |
| Request | 2 | `point_index` | `int32` | `Point Index` | 0 |
| Result | 1 | `complete_point_name` | `PointName` | `Complete Point Name` | — |
| Result | 2 | `point_name_only` | `string` | `Point Name Only` | — |
| Result | 3 | `vector_in_working` | `Vector` | `Vector in Working` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetIthPointFromGroup(GetIthPointFromGroupRequest) returns (GetIthPointFromGroupResult);

message GetIthPointFromGroupRequest {
  optional CollectionObjectName group_name = 1;
  optional int32 point_index = 2;
}

message GetIthPointFromGroupResult {
  optional PointName complete_point_name = 1;
  optional string point_name_only = 2;
  optional Vector vector_in_working = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Line Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Line Properties](/mp-command-catalog/commands/analysis-operations#get-line-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetLineProperties` |
| Operation ID | `analysis_operations.get_line_properties` |
| Route | `/briosa.AnalysisOperations/GetLineProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `CollectionObjectName` | `Line Name` | Required |
| Result | 1 | `begin_coordinate` | `Vector` | `Begin Coordinate` | — |
| Result | 2 | `end_coordinate` | `Vector` | `End Coordinate` | — |
| Result | 3 | `delta_components` | `Vector` | `Delta Components` | — |
| Result | 4 | `length` | `double` | `Length` | — |
| Result | 5 | `angle_about_x_from_y_in_yz_plane` | `double` | `Angle about +X from +Y in YZ plane` | — |
| Result | 6 | `angle_about_y_from_z_in_xz_plane` | `double` | `Angle about +Y from +Z in XZ plane` | — |
| Result | 7 | `angle_about_z_from_x_in_xy_plane` | `double` | `Angle about +Z from +X in XY plane` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetLineProperties(GetLinePropertiesRequest) returns (GetLinePropertiesResult);

message GetLinePropertiesRequest {
  optional CollectionObjectName line_name = 1;
}

message GetLinePropertiesResult {
  optional Vector begin_coordinate = 1;
  optional Vector end_coordinate = 2;
  optional Vector delta_components = 3;
  optional double length = 4;
  optional double angle_about_x_from_y_in_yz_plane = 5;
  optional double angle_about_y_from_z_in_xz_plane = 6;
  optional double angle_about_z_from_x_in_xy_plane = 7;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Measurement Auxiliary Data

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Measurement Auxiliary Data](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetMeasurementAuxiliaryData` |
| Operation ID | `analysis_operations.get_measurement_auxiliary_data` |
| Route | `/briosa.AnalysisOperations/GetMeasurementAuxiliaryData` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Request | 2 | `auxiliary_name` | `string` | `Auxiliary Name` | Empty |
| Result | 1 | `value` | `double` | `Value` | — |
| Result | 2 | `units` | `string` | `Units` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetMeasurementAuxiliaryData(GetMeasurementAuxiliaryDataRequest) returns (GetMeasurementAuxiliaryDataResult);

message GetMeasurementAuxiliaryDataRequest {
  optional PointName point_name = 1;
  optional string auxiliary_name = 2;
}

message GetMeasurementAuxiliaryDataResult {
  optional double value = 1;
  optional string units = 2;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Measurement Info Data

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Measurement Info Data](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetMeasurementInfoData` |
| Operation ID | `analysis_operations.get_measurement_info_data` |
| Route | `/briosa.AnalysisOperations/GetMeasurementInfoData` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Result | 1 | `info_data` | `string` | `Info Data` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetMeasurementInfoData(GetMeasurementInfoDataRequest) returns (GetMeasurementInfoDataResult);

message GetMeasurementInfoDataRequest {
  optional PointName point_name = 1;
}

message GetMeasurementInfoDataResult {
  optional string info_data = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Measurement Weather Data

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Measurement Weather Data](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetMeasurementWeatherData` |
| Operation ID | `analysis_operations.get_measurement_weather_data` |
| Route | `/briosa.AnalysisOperations/GetMeasurementWeatherData` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Result | 1 | `temperature_deg_f` | `double` | `Temperature (deg F)` | — |
| Result | 2 | `pressure_in_hg` | `double` | `Pressure (in. Hg)` | — |
| Result | 3 | `humidity_rh` | `double` | `Humidity (% RH)` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetMeasurementWeatherData(GetMeasurementWeatherDataRequest) returns (GetMeasurementWeatherDataResult);

message GetMeasurementWeatherDataRequest {
  optional PointName point_name = 1;
}

message GetMeasurementWeatherDataResult {
  optional double temperature_deg_f = 1;
  optional double pressure_in_hg = 2;
  optional double humidity_rh = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Number of Collections

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Number of Collections](/mp-command-catalog/commands/analysis-operations#get-number-of-collections) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetNumberOfCollections` |
| Operation ID | `analysis_operations.get_number_of_collections` |
| Route | `/briosa.AnalysisOperations/GetNumberOfCollections` |
| Validation | Released implementation |
| Automatic Replay | Safe for the current read-only operation |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `total_count` | `int32` | `Total Count` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetNumberOfCollections(GetNumberOfCollectionsRequest) returns (GetNumberOfCollectionsResult);

message GetNumberOfCollectionsRequest {
  // No MP inputs.
}

message GetNumberOfCollectionsResult {
  optional int32 total_count = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Number of Frames In Frame Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Number of Frames In Frame Set](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetNumberOfFramesInFrameSet` |
| Operation ID | `analysis_operations.get_number_of_frames_in_frame_set` |
| Route | `/briosa.AnalysisOperations/GetNumberOfFramesInFrameSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set_container` | `CollectionObjectName` | `Frame Set Container` | Required |
| Result | 1 | `total_count` | `int32` | `Total Count` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetNumberOfFramesInFrameSet(GetNumberOfFramesInFrameSetRequest) returns (GetNumberOfFramesInFrameSetResult);

message GetNumberOfFramesInFrameSetRequest {
  optional CollectionObjectName frame_set_container = 1;
}

message GetNumberOfFramesInFrameSetResult {
  optional int32 total_count = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Number of Points in Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Number of Points in Group](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetNumberOfPointsInGroup` |
| Operation ID | `analysis_operations.get_number_of_points_in_group` |
| Route | `/briosa.AnalysisOperations/GetNumberOfPointsInGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name` | `CollectionObjectName` | `Group Name` | Required |
| Result | 1 | `total_count` | `int32` | `Total Count` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetNumberOfPointsInGroup(GetNumberOfPointsInGroupRequest) returns (GetNumberOfPointsInGroupResult);

message GetNumberOfPointsInGroupRequest {
  optional CollectionObjectName group_name = 1;
}

message GetNumberOfPointsInGroupResult {
  optional int32 total_count = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Number of Points In Point Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Number of Points In Point Set](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetNumberOfPointsInPointSet` |
| Operation ID | `analysis_operations.get_number_of_points_in_point_set` |
| Route | `/briosa.AnalysisOperations/GetNumberOfPointsInPointSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_set_container` | `CollectionObjectName` | `Point Set Container` | Required |
| Result | 1 | `total_count` | `int32` | `Total Count` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetNumberOfPointsInPointSet(GetNumberOfPointsInPointSetRequest) returns (GetNumberOfPointsInPointSetResult);

message GetNumberOfPointsInPointSetRequest {
  optional CollectionObjectName point_set_container = 1;
}

message GetNumberOfPointsInPointSetResult {
  optional int32 total_count = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Object Reporting Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Object Reporting Frame](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetObjectReportingFrame` |
| Operation ID | `analysis_operations.get_object_reporting_frame` |
| Route | `/briosa.AnalysisOperations/GetObjectReportingFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `CollectionObjectName` | `Object Name` | Required |
| Result | 1 | `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetObjectReportingFrame(GetObjectReportingFrameRequest) returns (GetObjectReportingFrameResult);

message GetObjectReportingFrameRequest {
  optional CollectionObjectName object_name = 1;
}

message GetObjectReportingFrameResult {
  optional CollectionObjectName reporting_frame = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Plane Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Plane Properties](/mp-command-catalog/commands/analysis-operations#get-plane-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetPlaneProperties` |
| Operation ID | `analysis_operations.get_plane_properties` |
| Route | `/briosa.AnalysisOperations/GetPlaneProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_name` | `CollectionObjectName` | `Plane Name` | Required |
| Result | 1 | `normal_direction` | `Vector` | `Normal Direction` | — |
| Result | 2 | `point_on_plane` | `Vector` | `Point on Plane` | — |
| Result | 3 | `d_parameter` | `double` | `D Parameter` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPlaneProperties(GetPlanePropertiesRequest) returns (GetPlanePropertiesResult);

message GetPlanePropertiesRequest {
  optional CollectionObjectName plane_name = 1;
}

message GetPlanePropertiesResult {
  optional Vector normal_direction = 1;
  optional Vector point_on_plane = 2;
  optional double d_parameter = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point Coordinate

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point Coordinate](/mp-command-catalog/commands/analysis-operations#get-point-coordinate) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetPointCoordinate` |
| Operation ID | `analysis_operations.get_point_coordinate` |
| Route | `/briosa.AnalysisOperations/GetPointCoordinate` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Result | 1 | `vector_representation` | `Vector` | `Vector Representation` | — |
| Result | 2 | `x_value` | `double` | `X Value` | — |
| Result | 3 | `y_value` | `double` | `Y Value` | — |
| Result | 4 | `z_value` | `double` | `Z Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPointCoordinate(GetPointCoordinateRequest) returns (GetPointCoordinateResult);

message GetPointCoordinateRequest {
  optional PointName point_name = 1;
}

message GetPointCoordinateResult {
  optional Vector vector_representation = 1;
  optional double x_value = 2;
  optional double y_value = 3;
  optional double z_value = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point Coordinate (Cylindrical)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point Coordinate (Cylindrical)](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetPointCoordinateCylindrical` |
| Operation ID | `analysis_operations.get_point_coordinate_cylindrical` |
| Route | `/briosa.AnalysisOperations/GetPointCoordinateCylindrical` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Result | 1 | `radius_value` | `double` | `Radius Value` | — |
| Result | 2 | `theta_value` | `double` | `Theta Value` | — |
| Result | 3 | `z_value` | `double` | `Z Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPointCoordinateCylindrical(GetPointCoordinateCylindricalRequest) returns (GetPointCoordinateCylindricalResult);

message GetPointCoordinateCylindricalRequest {
  optional PointName point_name = 1;
}

message GetPointCoordinateCylindricalResult {
  optional double radius_value = 1;
  optional double theta_value = 2;
  optional double z_value = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point Coordinate (Polar)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point Coordinate (Polar)](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetPointCoordinatePolar` |
| Operation ID | `analysis_operations.get_point_coordinate_polar` |
| Route | `/briosa.AnalysisOperations/GetPointCoordinatePolar` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Result | 1 | `radius_value` | `double` | `Radius Value` | — |
| Result | 2 | `theta_value` | `double` | `Theta Value` | — |
| Result | 3 | `phi_value` | `double` | `Phi Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPointCoordinatePolar(GetPointCoordinatePolarRequest) returns (GetPointCoordinatePolarResult);

message GetPointCoordinatePolarRequest {
  optional PointName point_name = 1;
}

message GetPointCoordinatePolarResult {
  optional double radius_value = 1;
  optional double theta_value = 2;
  optional double phi_value = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point Properties](/mp-command-catalog/commands/analysis-operations#get-point-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetPointProperties` |
| Operation ID | `analysis_operations.get_point_properties` |
| Route | `/briosa.AnalysisOperations/GetPointProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Result | 1 | `planar_offset` | `double` | `Planar Offset` | — |
| Result | 2 | `radial_offset` | `double` | `Radial Offset` | — |
| Result | 3 | `ux` | `double` | `Ux` | — |
| Result | 4 | `uy` | `double` | `Uy` | — |
| Result | 5 | `uz` | `double` | `Uz` | — |
| Result | 6 | `umag` | `double` | `Umag` | — |
| Result | 7 | `position_tolerance` | `Vector` | `Position Tolerance` | — |
| Result | 8 | `component_weights` | `Vector` | `Component Weights` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPointProperties(GetPointPropertiesRequest) returns (GetPointPropertiesResult);

message GetPointPropertiesRequest {
  optional PointName point_name = 1;
}

message GetPointPropertiesResult {
  optional double planar_offset = 1;
  optional double radial_offset = 2;
  optional double ux = 3;
  optional double uy = 4;
  optional double uz = 5;
  optional double umag = 6;
  optional Vector position_tolerance = 7;
  optional Vector component_weights = 8;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point To Line Distance

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point To Line Distance](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetPointToLineDistance` |
| Operation ID | `analysis_operations.get_point_to_line_distance` |
| Route | `/briosa.AnalysisOperations/GetPointToLineDistance` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `PointName` | `Point` | Required |
| Request | 2 | `line` | `CollectionObjectName` | `Line` | Required |
| Result | 1 | `vector_representation` | `Vector` | `Vector Representation` | — |
| Result | 2 | `x_value` | `double` | `X Value` | — |
| Result | 3 | `y_value` | `double` | `Y Value` | — |
| Result | 4 | `z_value` | `double` | `Z Value` | — |
| Result | 5 | `magnitude` | `double` | `Magnitude` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPointToLineDistance(GetPointToLineDistanceRequest) returns (GetPointToLineDistanceResult);

message GetPointToLineDistanceRequest {
  optional PointName point = 1;
  optional CollectionObjectName line = 2;
}

message GetPointToLineDistanceResult {
  optional Vector vector_representation = 1;
  optional double x_value = 2;
  optional double y_value = 3;
  optional double z_value = 4;
  optional double magnitude = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point To Point Distance

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point To Point Distance](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetPointToPointDistance` |
| Operation ID | `analysis_operations.get_point_to_point_distance` |
| Route | `/briosa.AnalysisOperations/GetPointToPointDistance` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `first_point` | `PointName` | `First Point` | Required |
| Request | 2 | `second_point` | `PointName` | `Second Point` | Required |
| Result | 1 | `vector_representation` | `Vector` | `Vector Representation` | — |
| Result | 2 | `x_value` | `double` | `X Value` | — |
| Result | 3 | `y_value` | `double` | `Y Value` | — |
| Result | 4 | `z_value` | `double` | `Z Value` | — |
| Result | 5 | `magnitude` | `double` | `Magnitude` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPointToPointDistance(GetPointToPointDistanceRequest) returns (GetPointToPointDistanceResult);

message GetPointToPointDistanceRequest {
  optional PointName first_point = 1;
  optional PointName second_point = 2;
}

message GetPointToPointDistanceResult {
  optional Vector vector_representation = 1;
  optional double x_value = 2;
  optional double y_value = 3;
  optional double z_value = 4;
  optional double magnitude = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point Tolerance

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point Tolerance](/mp-command-catalog/commands/analysis-operations#get-point-tolerance) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetPointTolerance` |
| Operation ID | `analysis_operations.get_point_tolerance` |
| Route | `/briosa.AnalysisOperations/GetPointTolerance` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
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
| Result | 17 | `vector_tolerance` | `Vector` | `Vector Tolerance` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPointTolerance(GetPointToleranceRequest) returns (GetPointToleranceResult);

message GetPointToleranceRequest {
  optional PointName point_name = 1;
}

message GetPointToleranceResult {
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
  optional Vector vector_tolerance = 17;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Slot Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Slot Properties](/mp-command-catalog/commands/analysis-operations#get-slot-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetSlotProperties` |
| Operation ID | `analysis_operations.get_slot_properties` |
| Route | `/briosa.AnalysisOperations/GetSlotProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `slot_name` | `CollectionObjectName` | `Slot Name` | Required |
| Result | 1 | `slot_transform_in_working_coordinates` | `Transform` | `Slot Transform (in working coordinates` | — |
| Result | 2 | `center_in_working_coordinates` | `Vector` | `Center (in working coordinates)` | — |
| Result | 3 | `normal_direction_in_working_coordinates` | `Vector` | `Normal Direction (in working coordinates)` | — |
| Result | 4 | `slot_length` | `double` | `Slot Length` | — |
| Result | 5 | `slot_width` | `double` | `Slot Width` | — |
| Result | 6 | `round_slot_type` | `bool` | `Round Slot Type` | — |
| Result | 7 | `centerline_pt_1_in_working_coordinates` | `Vector` | `Centerline Pt. 1 (in working coordinates)` | — |
| Result | 8 | `centerline_pt_2_in_working_coordinates` | `Vector` | `Centerline Pt. 2 (in working coordinates)` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetSlotProperties(GetSlotPropertiesRequest) returns (GetSlotPropertiesResult);

message GetSlotPropertiesRequest {
  optional CollectionObjectName slot_name = 1;
}

message GetSlotPropertiesResult {
  optional Transform slot_transform_in_working_coordinates = 1;
  optional Vector center_in_working_coordinates = 2;
  optional Vector normal_direction_in_working_coordinates = 3;
  optional double slot_length = 4;
  optional double slot_width = 5;
  optional bool round_slot_type = 6;
  optional Vector centerline_pt_1_in_working_coordinates = 7;
  optional Vector centerline_pt_2_in_working_coordinates = 8;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Sphere Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Sphere Properties](/mp-command-catalog/commands/analysis-operations#get-sphere-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetSphereProperties` |
| Operation ID | `analysis_operations.get_sphere_properties` |
| Route | `/briosa.AnalysisOperations/GetSphereProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sphere_name` | `CollectionObjectName` | `Sphere Name` | Required |
| Result | 1 | `center_coordinate` | `Vector` | `Center Coordinate` | — |
| Result | 2 | `radius` | `double` | `Radius` | — |
| Result | 3 | `diameter` | `double` | `Diameter` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetSphereProperties(GetSpherePropertiesRequest) returns (GetSpherePropertiesResult);

message GetSpherePropertiesRequest {
  optional CollectionObjectName sphere_name = 1;
}

message GetSpherePropertiesResult {
  optional Vector center_coordinate = 1;
  optional double radius = 2;
  optional double diameter = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Surface Physical Stats

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Surface Physical Stats](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetSurfacePhysicalStats` |
| Operation ID | `analysis_operations.get_surface_physical_stats` |
| Route | `/briosa.AnalysisOperations/GetSurfacePhysicalStats` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_name` | `CollectionObjectName` | `Surface Name` | Required |
| Result | 1 | `volume` | `double` | `Volume` | — |
| Result | 2 | `area` | `double` | `Area` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetSurfacePhysicalStats(GetSurfacePhysicalStatsRequest) returns (GetSurfacePhysicalStatsResult);

message GetSurfacePhysicalStatsRequest {
  optional CollectionObjectName surface_name = 1;
}

message GetSurfacePhysicalStatsResult {
  optional double volume = 1;
  optional double area = 2;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Timestamp for i-th Frame in Frame Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Timestamp for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetTimestampForIthFrameInFrameSet` |
| Operation ID | `analysis_operations.get_timestamp_for_ith_frame_in_frame_set` |
| Route | `/briosa.AnalysisOperations/GetTimestampForIthFrameInFrameSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set` | `CollectionObjectName` | `Frame Set` | Required |
| Request | 2 | `frame_set_index` | `int32` | `Frame Set Index` | 0 |
| Result | 1 | `timestamp` | `double` | `Timestamp` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetTimestampForIthFrameInFrameSet(GetTimestampForIthFrameInFrameSetRequest) returns (GetTimestampForIthFrameInFrameSetResult);

message GetTimestampForIthFrameInFrameSetRequest {
  optional CollectionObjectName frame_set = 1;
  optional int32 frame_set_index = 2;
}

message GetTimestampForIthFrameInFrameSetResult {
  optional double timestamp = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Timestamp for i-th Point in Point Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Timestamp for i-th Point in Point Set](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetTimestampForIthPointInPointSet` |
| Operation ID | `analysis_operations.get_timestamp_for_ith_point_in_point_set` |
| Route | `/briosa.AnalysisOperations/GetTimestampForIthPointInPointSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_set` | `CollectionObjectName` | `Point Set` | Required |
| Request | 2 | `point_set_index` | `int32` | `Point Set Index` | 0 |
| Result | 1 | `timestamp` | `double` | `Timestamp` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetTimestampForIthPointInPointSet(GetTimestampForIthPointInPointSetRequest) returns (GetTimestampForIthPointInPointSetResult);

message GetTimestampForIthPointInPointSetRequest {
  optional CollectionObjectName point_set = 1;
  optional int32 point_set_index = 2;
}

message GetTimestampForIthPointInPointSetResult {
  optional double timestamp = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Torus Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Torus Properties](/mp-command-catalog/commands/analysis-operations#get-torus-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetTorusProperties` |
| Operation ID | `analysis_operations.get_torus_properties` |
| Route | `/briosa.AnalysisOperations/GetTorusProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `torus_name` | `CollectionObjectName` | `Torus Name` | Required |
| Result | 1 | `center_coordinate` | `Vector` | `Center Coordinate` | — |
| Result | 2 | `normal_direction` | `Vector` | `Normal Direction` | — |
| Result | 3 | `major_radius` | `double` | `Major Radius` | — |
| Result | 4 | `minor_radius` | `double` | `Minor Radius` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetTorusProperties(GetTorusPropertiesRequest) returns (GetTorusPropertiesResult);

message GetTorusPropertiesRequest {
  optional CollectionObjectName torus_name = 1;
}

message GetTorusPropertiesResult {
  optional Vector center_coordinate = 1;
  optional Vector normal_direction = 2;
  optional double major_radius = 3;
  optional double minor_radius = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Transform for i-th Frame in Frame Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Transform for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GetTransformForIthFrameInFrameSet` |
| Operation ID | `analysis_operations.get_transform_for_ith_frame_in_frame_set` |
| Route | `/briosa.AnalysisOperations/GetTransformForIthFrameInFrameSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set` | `CollectionObjectName` | `Frame Set` | Required |
| Request | 2 | `frame_set_index` | `int32` | `Frame Set Index` | 0 |
| Result | 1 | `transform_in_working` | `Transform` | `Transform in Working` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetTransformForIthFrameInFrameSet(GetTransformForIthFrameInFrameSetRequest) returns (GetTransformForIthFrameInFrameSetResult);

message GetTransformForIthFrameInFrameSetRequest {
  optional CollectionObjectName frame_set = 1;
  optional int32 frame_set_index = 2;
}

message GetTransformForIthFrameInFrameSetResult {
  optional Transform transform_in_working = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Group To Surface Fit

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Group To Surface Fit](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit) |
| Service | `briosa.AnalysisOperations` |
| RPC | `GroupToSurfaceFit` |
| Operation ID | `analysis_operations.group_to_surface_fit` |
| Route | `/briosa.AnalysisOperations/GroupToSurfaceFit` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_to_fit` | `CollectionObjectName` | `Group to Fit` | Required |
| Request | 2 | `surface` | `CollectionObjectName` | `Surface` | Required |
| Request | 3 | `do_conventional_fit` | `bool` | `Do Conventional Fit` | false |
| Request | 4 | `rms_tolerance_0_0_for_none` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| Request | 5 | `maximum_absolute_tolerance_0_0_for_none` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| Result | 1 | `optimum_transform` | `Transform` | `Optimum Transform` | — |
| Result | 2 | `rms_deviation` | `double` | `RMS Deviation` | — |
| Result | 3 | `maximum_absolute_deviation` | `double` | `Maximum Absolute Deviation` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GroupToSurfaceFit(GroupToSurfaceFitRequest) returns (GroupToSurfaceFitResult);

message GroupToSurfaceFitRequest {
  optional CollectionObjectName group_to_fit = 1;
  optional CollectionObjectName surface = 2;
  optional bool do_conventional_fit = 3;
  optional double rms_tolerance_0_0_for_none = 4;
  optional double maximum_absolute_tolerance_0_0_for_none = 5;
}

message GroupToSurfaceFitResult {
  optional Transform optimum_transform = 1;
  optional double rms_deviation = 2;
  optional double maximum_absolute_deviation = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Import Geometry Fit Profiles

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Import Geometry Fit Profiles](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles) |
| Service | `briosa.AnalysisOperations` |
| RPC | `ImportGeometryFitProfiles` |
| Operation ID | `analysis_operations.import_geometry_fit_profiles` |
| Route | `/briosa.AnalysisOperations/ImportGeometryFitProfiles` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_fit_profiles_file_path` | `FileReference` | `Geometry Fit Profiles File Path` | Required |
| Request | 2 | `overwrite_profiles_with_same_name` | `bool` | `Overwrite Profiles with Same Name?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ImportGeometryFitProfiles(ImportGeometryFitProfilesRequest) returns (ImportGeometryFitProfilesResult);

message ImportGeometryFitProfilesRequest {
  optional FileReference geometry_fit_profiles_file_path = 1;
  optional bool overwrite_profiles_with_same_name = 2;
}

message ImportGeometryFitProfilesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Is Object of Type

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Is Object of Type](/mp-command-catalog/commands/analysis-operations#is-object-of-type) |
| Service | `briosa.AnalysisOperations` |
| RPC | `IsObjectOfType` |
| Operation ID | `analysis_operations.is_object_of_type` |
| Route | `/briosa.AnalysisOperations/IsObjectOfType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `CollectionObjectName` | `Object Name` | Required |
| Request | 2 | `object_type` | `ObjectType` | `Object Type` | Any |
| Result | 1 | `resultant` | `bool` | `Resultant` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc IsObjectOfType(IsObjectOfTypeRequest) returns (IsObjectOfTypeResult);

message IsObjectOfTypeRequest {
  optional CollectionObjectName object_name = 1;
  optional ObjectType object_type = 2;
}

message IsObjectOfTypeResult {
  optional bool resultant = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Circle Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Circle Fit Profile](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakeCircleFitProfile` |
| Operation ID | `analysis_operations.make_circle_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakeCircleFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| Request | 3 | `override_radial_offset_1_0_use_current` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| Request | 4 | `measured_side_for_planar_offset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| Request | 5 | `override_planar_offset_1_0_use_current` | `double` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| Request | 6 | `planar_offset_direction` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| Request | 7 | `lock_radius_1_0_do_not_lock` | `double` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| Request | 8 | `circle_computation_technique` | `CompTechnique` | `Circle Computation Technique` | Standard |
| Request | 9 | `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| Request | 10 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 11 | `cardinal_pt_1_center` | `bool` | `Cardinal Pt.1: Center?` | true |
| Request | 12 | `cardinal_pt_2_point_on_normal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeCircleFitProfile(MakeCircleFitProfileRequest) returns (MakeCircleFitProfileResult);

message MakeCircleFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset_1_0_use_current = 3;
  optional MeasuredSideForPlanarOffset measured_side_for_planar_offset = 4;
  optional double override_planar_offset_1_0_use_current = 5;
  optional NormalDirection planar_offset_direction = 6;
  optional double lock_radius_1_0_do_not_lock = 7;
  optional CompTechnique circle_computation_technique = 8;
  optional bool reverse_normal_vector_after_fit = 9;
  optional bool make_cardinal_points = 10;
  optional bool cardinal_pt_1_center = 11;
  optional bool cardinal_pt_2_point_on_normal = 12;
}

message MakeCircleFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Cone Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Cone Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakeConeFitProfile` |
| Operation ID | `analysis_operations.make_cone_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakeConeFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| Request | 3 | `override_radial_offset_1_0_use_current` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| Request | 4 | `lock_angle_in_degrees_1_0_do_not_lock` | `double` | `Lock Angle in degrees (-1.0 do not lock)` | -1.000000 |
| Request | 5 | `use_exhaustive_search` | `bool` | `Use Exhaustive Search?` | true |
| Request | 6 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 7 | `cardinal_pt_1_vertex` | `bool` | `Cardinal Pt.1: Vertex?` | true |
| Request | 8 | `cardinal_pt_2_point_on_axis` | `bool` | `Cardinal Pt.2: Point on Axis?` | true |
| Request | 9 | `cardinal_pt_3_cut_point_on_axis` | `bool` | `Cardinal Pt.3: Cut Point on Axis?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeConeFitProfile(MakeConeFitProfileRequest) returns (MakeConeFitProfileResult);

message MakeConeFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset_1_0_use_current = 3;
  optional double lock_angle_in_degrees_1_0_do_not_lock = 4;
  optional bool use_exhaustive_search = 5;
  optional bool make_cardinal_points = 6;
  optional bool cardinal_pt_1_vertex = 7;
  optional bool cardinal_pt_2_point_on_axis = 8;
  optional bool cardinal_pt_3_cut_point_on_axis = 9;
}

message MakeConeFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Cylinder Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Cylinder Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakeCylinderFitProfile` |
| Operation ID | `analysis_operations.make_cylinder_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakeCylinderFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| Request | 3 | `override_radial_offset_1_0_use_current` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| Request | 4 | `lock_radius_1_0_do_not_lock` | `double` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| Request | 5 | `locked_radius_fit_method` | `FitMethod` | `Locked Radius Fit Method` | Minimum RMS |
| Request | 6 | `constrain_to_nominal_axis` | `bool` | `Constrain to Nominal Axis?` | false |
| Request | 7 | `constrain_to_nominal_orientation` | `bool` | `Constrain to Nominal Orientation?` | false |
| Request | 8 | `align_with_nominal` | `bool` | `Align with Nominal?` | false |
| Request | 9 | `reverse_axis` | `bool` | `Reverse Axis?` | false |
| Request | 10 | `set_axis_first_to_last_point` | `bool` | `Set Axis First to Last Point?` | false |
| Request | 11 | `cylinder_computation_technique` | `CompTechnique` | `Cylinder Computation Technique` | Standard |
| Request | 12 | `use_exhaustive_search` | `bool` | `Use Exhaustive Search?` | false |
| Request | 13 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 14 | `cardinal_pt_1_begin_pt` | `bool` | `Cardinal Pt.1: Begin Pt?` | true |
| Request | 15 | `cardinal_pt_2_end_pt` | `bool` | `Cardinal Pt.2: End Pt?` | true |
| Request | 16 | `cardinal_pt_3_center` | `bool` | `Cardinal Pt.3: Center?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeCylinderFitProfile(MakeCylinderFitProfileRequest) returns (MakeCylinderFitProfileResult);

message MakeCylinderFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset_1_0_use_current = 3;
  optional double lock_radius_1_0_do_not_lock = 4;
  optional FitMethod locked_radius_fit_method = 5;
  optional bool constrain_to_nominal_axis = 6;
  optional bool constrain_to_nominal_orientation = 7;
  optional bool align_with_nominal = 8;
  optional bool reverse_axis = 9;
  optional bool set_axis_first_to_last_point = 10;
  optional CompTechnique cylinder_computation_technique = 11;
  optional bool use_exhaustive_search = 12;
  optional bool make_cardinal_points = 13;
  optional bool cardinal_pt_1_begin_pt = 14;
  optional bool cardinal_pt_2_end_pt = 15;
  optional bool cardinal_pt_3_center = 16;
}

message MakeCylinderFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Ellipse Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Ellipse Fit Profile](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakeEllipseFitProfile` |
| Operation ID | `analysis_operations.make_ellipse_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakeEllipseFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| Request | 3 | `override_radial_offset_1_0_use_current` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| Request | 4 | `measured_side_for_planar_offset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| Request | 5 | `override_planar_offset_1_0_use_current` | `double` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| Request | 6 | `planar_offset_direction` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| Request | 7 | `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| Request | 8 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 9 | `cardinal_pt_1_center` | `bool` | `Cardinal Pt.1: Center?` | true |
| Request | 10 | `cardinal_pt_2_point_on_normal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |
| Request | 11 | `cardinal_pt_3_focal_pt_1` | `bool` | `Cardinal Pt.3: Focal Pt.1?` | true |
| Request | 12 | `cardinal_pt_4_focal_pt_2` | `bool` | `Cardinal Pt.4: Focal Pt.2?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeEllipseFitProfile(MakeEllipseFitProfileRequest) returns (MakeEllipseFitProfileResult);

message MakeEllipseFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset_1_0_use_current = 3;
  optional MeasuredSideForPlanarOffset measured_side_for_planar_offset = 4;
  optional double override_planar_offset_1_0_use_current = 5;
  optional NormalDirection planar_offset_direction = 6;
  optional bool reverse_normal_vector_after_fit = 7;
  optional bool make_cardinal_points = 8;
  optional bool cardinal_pt_1_center = 9;
  optional bool cardinal_pt_2_point_on_normal = 10;
  optional bool cardinal_pt_3_focal_pt_1 = 11;
  optional bool cardinal_pt_4_focal_pt_2 = 12;
}

message MakeEllipseFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Line Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Line Fit Profile](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakeLineFitProfile` |
| Operation ID | `analysis_operations.make_line_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakeLineFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| Request | 3 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 4 | `cardinal_pt_1_point_a` | `bool` | `Cardinal Pt.1: Point A?` | true |
| Request | 5 | `cardinal_pt_2_point_b` | `bool` | `Cardinal Pt.2: Point B?` | true |
| Request | 6 | `cardinal_pt_3_mid_point` | `bool` | `Cardinal Pt.3: Mid Point?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeLineFitProfile(MakeLineFitProfileRequest) returns (MakeLineFitProfileResult);

message MakeLineFitProfileRequest {
  optional string fit_profile_name = 1;
  optional bool reverse_normal_vector_after_fit = 2;
  optional bool make_cardinal_points = 3;
  optional bool cardinal_pt_1_point_a = 4;
  optional bool cardinal_pt_2_point_b = 5;
  optional bool cardinal_pt_3_mid_point = 6;
}

message MakeLineFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Paraboloid Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Paraboloid Fit Profile](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakeParaboloidFitProfile` |
| Operation ID | `analysis_operations.make_paraboloid_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakeParaboloidFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| Request | 3 | `override_radial_offset_1_0_use_current` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| Request | 4 | `lock_focal_length_1_0_do_not_lock` | `double` | `Lock Focal Length (-1.0 do not lock)` | -1.000000 |
| Request | 5 | `degree_of_freedom` | `DegreeOfFreedom` | `Degree of Freedom` | Any |
| Request | 6 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 7 | `cardinal_pt_1_vertex` | `bool` | `Cardinal Pt.1: Vertex?` | true |
| Request | 8 | `cardinal_pt_2_focal_point` | `bool` | `Cardinal Pt.2: Focal Point?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeParaboloidFitProfile(MakeParaboloidFitProfileRequest) returns (MakeParaboloidFitProfileResult);

message MakeParaboloidFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset_1_0_use_current = 3;
  optional double lock_focal_length_1_0_do_not_lock = 4;
  optional DegreeOfFreedom degree_of_freedom = 5;
  optional bool make_cardinal_points = 6;
  optional bool cardinal_pt_1_vertex = 7;
  optional bool cardinal_pt_2_focal_point = 8;
}

message MakeParaboloidFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Plane Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Plane Fit Profile](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakePlaneFitProfile` |
| Operation ID | `analysis_operations.make_plane_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakePlaneFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `measured_side_for_planar_offset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| Request | 3 | `override_planar_offset_1_0_use_current` | `double` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| Request | 4 | `planar_offset_direction` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| Request | 5 | `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| Request | 6 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 7 | `cardinal_pt_1_centroid` | `bool` | `Cardinal Pt.1: Centroid?` | true |
| Request | 8 | `cardinal_pt_2_point_on_normal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakePlaneFitProfile(MakePlaneFitProfileRequest) returns (MakePlaneFitProfileResult);

message MakePlaneFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForPlanarOffset measured_side_for_planar_offset = 2;
  optional double override_planar_offset_1_0_use_current = 3;
  optional NormalDirection planar_offset_direction = 4;
  optional bool reverse_normal_vector_after_fit = 5;
  optional bool make_cardinal_points = 6;
  optional bool cardinal_pt_1_centroid = 7;
  optional bool cardinal_pt_2_point_on_normal = 8;
}

message MakePlaneFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Slot Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Slot Fit Profile](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakeSlotFitProfile` |
| Operation ID | `analysis_operations.make_slot_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakeSlotFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| Request | 3 | `override_radial_offset_1_0_use_current` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| Request | 4 | `measured_side_for_planar_offset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| Request | 5 | `override_planar_offset_1_0_use_current` | `double` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| Request | 6 | `planar_offset_direction` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| Request | 7 | `slot_type` | `SlotType` | `Slot Type` | Round |
| Request | 8 | `slot_computation_technique` | `CompTechnique` | `Slot Computation Technique` | Standard |
| Request | 9 | `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| Request | 10 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 11 | `cardinal_pt_1_center` | `bool` | `Cardinal Pt.1: Center?` | true |
| Request | 12 | `cardinal_pt_2_point_on_normal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |
| Request | 13 | `cardinal_pt_3_centerline_pt_1` | `bool` | `Cardinal Pt.3: Centerline Pt.1?` | true |
| Request | 14 | `cardinal_pt_4_centerline_pt_2` | `bool` | `Cardinal Pt.4: Centerline Pt.2?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeSlotFitProfile(MakeSlotFitProfileRequest) returns (MakeSlotFitProfileResult);

message MakeSlotFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset_1_0_use_current = 3;
  optional MeasuredSideForPlanarOffset measured_side_for_planar_offset = 4;
  optional double override_planar_offset_1_0_use_current = 5;
  optional NormalDirection planar_offset_direction = 6;
  optional SlotType slot_type = 7;
  optional CompTechnique slot_computation_technique = 8;
  optional bool reverse_normal_vector_after_fit = 9;
  optional bool make_cardinal_points = 10;
  optional bool cardinal_pt_1_center = 11;
  optional bool cardinal_pt_2_point_on_normal = 12;
  optional bool cardinal_pt_3_centerline_pt_1 = 13;
  optional bool cardinal_pt_4_centerline_pt_2 = 14;
}

message MakeSlotFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Sphere Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Sphere Fit Profile](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MakeSphereFitProfile` |
| Operation ID | `analysis_operations.make_sphere_fit_profile` |
| Route | `/briosa.AnalysisOperations/MakeSphereFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| Request | 3 | `override_radial_offset_1_0_use_current` | `double` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| Request | 4 | `lock_radius_1_0_do_not_lock` | `double` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| Request | 5 | `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| Request | 6 | `cardinal_pt_1_center` | `bool` | `Cardinal Pt.1: Center?` | true |
| Request | 7 | `computation_method` | `SphereFitComputationMode` | `Computation Method` | Standard |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakeSphereFitProfile(MakeSphereFitProfileRequest) returns (MakeSphereFitProfileResult);

message MakeSphereFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset_1_0_use_current = 3;
  optional double lock_radius_1_0_do_not_lock = 4;
  optional bool make_cardinal_points = 5;
  optional bool cardinal_pt_1_center = 6;
  optional SphereFitComputationMode computation_method = 7;
}

message MakeSphereFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Mushroom Target Hole Inspection

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Mushroom Target Hole Inspection](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection) |
| Service | `briosa.AnalysisOperations` |
| RPC | `MushroomTargetHoleInspection` |
| Operation ID | `analysis_operations.mushroom_target_hole_inspection` |
| Route | `/briosa.AnalysisOperations/MushroomTargetHoleInspection` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name_prefix_for_intermediate_constructions` | `string` | `Name Prefix for Intermediate Constructions` | Empty |
| Request | 2 | `sphere_points_group_name` | `CollectionObjectName` | `Sphere Points Group Name` | Required |
| Request | 3 | `sphere_target_radius` | `double` | `Sphere Target Radius` | 0.000000 |
| Request | 4 | `target_contact_plane` | `CollectionObjectName` | `Target Contact Plane` | Required |
| Request | 5 | `point_to_create_at_hole` | `PointName` | `Point To Create at Hole` | Required |
| Result | 1 | `sphere_fit_rms_error` | `double` | `Sphere Fit RMS Error` | — |
| Result | 2 | `sphere_fit_max_error` | `double` | `Sphere Fit Max Error` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MushroomTargetHoleInspection(MushroomTargetHoleInspectionRequest) returns (MushroomTargetHoleInspectionResult);

message MushroomTargetHoleInspectionRequest {
  optional string name_prefix_for_intermediate_constructions = 1;
  optional CollectionObjectName sphere_points_group_name = 2;
  optional double sphere_target_radius = 3;
  optional CollectionObjectName target_contact_plane = 4;
  optional PointName point_to_create_at_hole = 5;
}

message MushroomTargetHoleInspectionResult {
  optional double sphere_fit_rms_error = 1;
  optional double sphere_fit_max_error = 2;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Patch Normal Shift - Hole / Pin

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Patch Normal Shift - Hole / Pin](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin) |
| Service | `briosa.AnalysisOperations` |
| RPC | `PatchNormalShiftHolePin` |
| Operation ID | `analysis_operations.patch_normal_shift_hole_pin` |
| Route | `/briosa.AnalysisOperations/PatchNormalShiftHolePin` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_points_group_name` | `CollectionObjectName` | `Plane Points Group Name` | Required |
| Request | 2 | `perimeter_points_group_name` | `CollectionObjectName` | `Perimeter Points Group Name` | Required |
| Request | 3 | `resulting_point_name` | `PointName` | `Resulting Point Name` | Required |
| Request | 4 | `additional_material_thickness` | `double` | `Additional Material Thickness` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc PatchNormalShiftHolePin(PatchNormalShiftHolePinRequest) returns (PatchNormalShiftHolePinResult);

message PatchNormalShiftHolePinRequest {
  optional CollectionObjectName plane_points_group_name = 1;
  optional CollectionObjectName perimeter_points_group_name = 2;
  optional PointName resulting_point_name = 3;
  optional double additional_material_thickness = 4;
}

message PatchNormalShiftHolePinResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Patch Normal Shift - Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Patch Normal Shift - Point](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point) |
| Service | `briosa.AnalysisOperations` |
| RPC | `PatchNormalShiftPoint` |
| Operation ID | `analysis_operations.patch_normal_shift_point` |
| Route | `/briosa.AnalysisOperations/PatchNormalShiftPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_points_group_name` | `CollectionObjectName` | `Plane Points Group Name` | Required |
| Request | 2 | `point_to_shift` | `PointName` | `Point to Shift` | Required |
| Request | 3 | `resulting_point_name` | `PointName` | `Resulting Point Name` | Required |
| Request | 4 | `additional_material_thickness` | `double` | `Additional Material Thickness` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc PatchNormalShiftPoint(PatchNormalShiftPointRequest) returns (PatchNormalShiftPointResult);

message PatchNormalShiftPointRequest {
  optional CollectionObjectName plane_points_group_name = 1;
  optional PointName point_to_shift = 2;
  optional PointName resulting_point_name = 3;
  optional double additional_material_thickness = 4;
}

message PatchNormalShiftPointResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Clouds to Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Clouds to Objects](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryCloudsToObjects` |
| Operation ID | `analysis_operations.query_clouds_to_objects` |
| Route | `/briosa.AnalysisOperations/QueryCloudsToObjects` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `object_names` | `repeated CollectionObjectName` | `Object Names` | Required |
| Request | 3 | `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| Request | 4 | `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| Request | 5 | `proximity` | `double` | `Proximity` | 0.000000 |
| Request | 6 | `skip_factor` | `int32` | `Skip Factor` | 0 |
| Request | 7 | `rms_tolerance_0_0_for_none` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| Request | 8 | `maximum_absolute_tolerance_0_0_for_none` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| Result | 1 | `rms_deviation` | `double` | `RMS Deviation` | — |
| Result | 2 | `maximum_absolute_deviation` | `double` | `Maximum Absolute Deviation` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryCloudsToObjects(QueryCloudsToObjectsRequest) returns (QueryCloudsToObjectsResult);

message QueryCloudsToObjectsRequest {
  repeated CollectionObjectName cloud_names = 1;
  repeated CollectionObjectName object_names = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional ProjectionOptions projection_options = 4;
  optional double proximity = 5;
  optional int32 skip_factor = 6;
  optional double rms_tolerance_0_0_for_none = 7;
  optional double maximum_absolute_tolerance_0_0_for_none = 8;
}

message QueryCloudsToObjectsResult {
  optional double rms_deviation = 1;
  optional double maximum_absolute_deviation = 2;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Clouds to Surface

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Clouds to Surface](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryCloudsToSurface` |
| Operation ID | `analysis_operations.query_clouds_to_surface` |
| Route | `/briosa.AnalysisOperations/QueryCloudsToSurface` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `filter_surface_name` | `CollectionObjectName` | `Filter Surface Name` | Required |
| Request | 3 | `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| Request | 4 | `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| Request | 5 | `proximity` | `double` | `Proximity` | 0.000000 |
| Request | 6 | `skip_factor` | `int32` | `Skip Factor` | 0 |
| Request | 7 | `rms_tolerance_0_0_for_none` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| Request | 8 | `maximum_absolute_tolerance_0_0_for_none` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| Result | 1 | `rms_deviation` | `double` | `RMS Deviation` | — |
| Result | 2 | `maximum_absolute_deviation` | `double` | `Maximum Absolute Deviation` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryCloudsToSurface(QueryCloudsToSurfaceRequest) returns (QueryCloudsToSurfaceResult);

message QueryCloudsToSurfaceRequest {
  repeated CollectionObjectName cloud_names = 1;
  optional CollectionObjectName filter_surface_name = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional ProjectionOptions projection_options = 4;
  optional double proximity = 5;
  optional int32 skip_factor = 6;
  optional double rms_tolerance_0_0_for_none = 7;
  optional double maximum_absolute_tolerance_0_0_for_none = 8;
}

message QueryCloudsToSurfaceResult {
  optional double rms_deviation = 1;
  optional double maximum_absolute_deviation = 2;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Frame to Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Frame to Frame](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryFrameToFrame` |
| Operation ID | `analysis_operations.query_frame_to_frame` |
| Route | `/briosa.AnalysisOperations/QueryFrameToFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_frame_name` | `CollectionObjectName` | `Reference Frame Name` | Required |
| Request | 2 | `corresponding_frame_name` | `CollectionObjectName` | `Corresponding Frame Name` | Required |
| Result | 1 | `x` | `double` | `X` | — |
| Result | 2 | `y` | `double` | `Y` | — |
| Result | 3 | `z` | `double` | `Z` | — |
| Result | 4 | `rx_roll` | `double` | `Rx (Roll)` | — |
| Result | 5 | `ry_pitch` | `double` | `Ry (Pitch)` | — |
| Result | 6 | `rz_yaw` | `double` | `Rz (Yaw)` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryFrameToFrame(QueryFrameToFrameRequest) returns (QueryFrameToFrameResult);

message QueryFrameToFrameRequest {
  optional CollectionObjectName reference_frame_name = 1;
  optional CollectionObjectName corresponding_frame_name = 2;
}

message QueryFrameToFrameResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double rx_roll = 4;
  optional double ry_pitch = 5;
  optional double rz_yaw = 6;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Groups to Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Groups to Objects](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryGroupsToObjects` |
| Operation ID | `analysis_operations.query_groups_to_objects` |
| Route | `/briosa.AnalysisOperations/QueryGroupsToObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name_list_groups_to_project` | `repeated CollectionObjectName` | `Group Name List (Groups to Project)` | Required |
| Request | 2 | `object_name_list_objects_to_project_to` | `repeated CollectionObjectName` | `Object Name List (Objects to Project to)` | Required |
| Request | 3 | `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| Request | 4 | `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| Request | 5 | `rms_tolerance_0_0_for_none` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| Request | 6 | `maximum_absolute_tolerance_0_0_for_none` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| Request | 7 | `show_results_dialog` | `bool` | `Show Results Dialog?` | false |
| Result | 1 | `rms_deviation` | `double` | `RMS Deviation` | — |
| Result | 2 | `max_absolute_deviation` | `double` | `Max Absolute Deviation` | — |
| Result | 3 | `average_deviation` | `double` | `Average Deviation` | — |
| Result | 4 | `standard_deviation` | `double` | `Standard Deviation` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryGroupsToObjects(QueryGroupsToObjectsRequest) returns (QueryGroupsToObjectsResult);

message QueryGroupsToObjectsRequest {
  repeated CollectionObjectName group_name_list_groups_to_project = 1;
  repeated CollectionObjectName object_name_list_objects_to_project_to = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional ProjectionOptions projection_options = 4;
  optional double rms_tolerance_0_0_for_none = 5;
  optional double maximum_absolute_tolerance_0_0_for_none = 6;
  optional bool show_results_dialog = 7;
}

message QueryGroupsToObjectsResult {
  optional double rms_deviation = 1;
  optional double max_absolute_deviation = 2;
  optional double average_deviation = 3;
  optional double standard_deviation = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Point to Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Point to Objects](/mp-command-catalog/commands/analysis-operations#query-point-to-objects) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryPointToObjects` |
| Operation ID | `analysis_operations.query_point_to_objects` |
| Route | `/briosa.AnalysisOperations/QueryPointToObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Request | 2 | `objects` | `repeated CollectionObjectName` | `Objects` | Required |
| Request | 3 | `ignore_target_offset` | `bool` | `Ignore Target Offset` | false |
| Result | 1 | `d_x` | `double` | `dX` | — |
| Result | 2 | `d_y` | `double` | `dY` | — |
| Result | 3 | `d_z` | `double` | `dZ` | — |
| Result | 4 | `d_mag` | `double` | `dMag` | — |
| Result | 5 | `resultant_object` | `CollectionObjectName` | `Resultant Object` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryPointToObjects(QueryPointToObjectsRequest) returns (QueryPointToObjectsResult);

message QueryPointToObjectsRequest {
  optional PointName point_name = 1;
  repeated CollectionObjectName objects = 2;
  optional bool ignore_target_offset = 3;
}

message QueryPointToObjectsResult {
  optional double d_x = 1;
  optional double d_y = 2;
  optional double d_z = 3;
  optional double d_mag = 4;
  optional CollectionObjectName resultant_object = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Point to Point Along Curve

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Point to Point Along Curve](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryPointToPointAlongCurve` |
| Operation ID | `analysis_operations.query_point_to_point_along_curve` |
| Route | `/briosa.AnalysisOperations/QueryPointToPointAlongCurve` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `value_1st_point` | `PointName` | `1st Point` | Required |
| Request | 2 | `value_2nd_point` | `PointName` | `2nd Point` | Required |
| Request | 3 | `curve` | `CollectionObjectName` | `Curve` | Required |
| Result | 1 | `distance_along_curve` | `double` | `Distance Along Curve` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryPointToPointAlongCurve(QueryPointToPointAlongCurveRequest) returns (QueryPointToPointAlongCurveResult);

message QueryPointToPointAlongCurveRequest {
  optional PointName value_1st_point = 1;
  optional PointName value_2nd_point = 2;
  optional CollectionObjectName curve = 3;
}

message QueryPointToPointAlongCurveResult {
  optional double distance_along_curve = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Points to Circle

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Points to Circle](/mp-command-catalog/commands/analysis-operations#query-points-to-circle) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryPointsToCircle` |
| Operation ID | `analysis_operations.query_points_to_circle` |
| Route | `/briosa.AnalysisOperations/QueryPointsToCircle` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `CollectionObjectName` | `Circle Name` | Required |
| Request | 2 | `point_group_name` | `CollectionObjectName` | `Point Group Name` | Required |
| Request | 3 | `is_inside_measurement` | `bool` | `Is Inside Measurement` | true |
| Request | 4 | `auto_scale_vectors_to_of_radius` | `int32` | `Auto Scale Vectors to % of Radius` | 40 |
| Request | 5 | `vector_group_name_for_radial` | `CollectionObjectName` | `Vector Group Name for Radial` | Required |
| Request | 6 | `vector_group_name_for_planar` | `CollectionObjectName` | `Vector Group Name for Planar` | Required |
| Request | 7 | `vector_group_name_for_combined` | `CollectionObjectName` | `Vector Group Name for Combined` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryPointsToCircle(QueryPointsToCircleRequest) returns (QueryPointsToCircleResult);

message QueryPointsToCircleRequest {
  optional CollectionObjectName circle_name = 1;
  optional CollectionObjectName point_group_name = 2;
  optional bool is_inside_measurement = 3;
  optional int32 auto_scale_vectors_to_of_radius = 4;
  optional CollectionObjectName vector_group_name_for_radial = 5;
  optional CollectionObjectName vector_group_name_for_planar = 6;
  optional CollectionObjectName vector_group_name_for_combined = 7;
}

message QueryPointsToCircleResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Points to Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Points to Objects](/mp-command-catalog/commands/analysis-operations#query-points-to-objects) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryPointsToObjects` |
| Operation ID | `analysis_operations.query_points_to_objects` |
| Route | `/briosa.AnalysisOperations/QueryPointsToObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | `Point Names` | Required |
| Request | 2 | `object_name_list_objects_to_project_to` | `repeated CollectionObjectName` | `Object Name List (Objects to Project to)` | Required |
| Request | 3 | `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| Request | 4 | `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| Request | 5 | `rms_tolerance_0_0_for_none` | `double` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| Request | 6 | `maximum_absolute_tolerance_0_0_for_none` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| Request | 7 | `show_results_dialog` | `bool` | `Show Results Dialog?` | false |
| Result | 1 | `rms_deviation` | `double` | `RMS Deviation` | — |
| Result | 2 | `max_absolute_deviation` | `double` | `Max Absolute Deviation` | — |
| Result | 3 | `average_deviation` | `double` | `Average Deviation` | — |
| Result | 4 | `standard_deviation` | `double` | `Standard Deviation` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryPointsToObjects(QueryPointsToObjectsRequest) returns (QueryPointsToObjectsResult);

message QueryPointsToObjectsRequest {
  repeated PointName point_names = 1;
  repeated CollectionObjectName object_name_list_objects_to_project_to = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional ProjectionOptions projection_options = 4;
  optional double rms_tolerance_0_0_for_none = 5;
  optional double maximum_absolute_tolerance_0_0_for_none = 6;
  optional bool show_results_dialog = 7;
}

message QueryPointsToObjectsResult {
  optional double rms_deviation = 1;
  optional double max_absolute_deviation = 2;
  optional double average_deviation = 3;
  optional double standard_deviation = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Query Points to Single Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Query Points to Single Point](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point) |
| Service | `briosa.AnalysisOperations` |
| RPC | `QueryPointsToSinglePoint` |
| Operation ID | `analysis_operations.query_points_to_single_point` |
| Route | `/briosa.AnalysisOperations/QueryPointsToSinglePoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | `Point Names` | Required |
| Request | 2 | `single_point` | `PointName` | `Single Point` | Required |
| Request | 3 | `show_vector_properties` | `bool` | `Show Vector Properties?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc QueryPointsToSinglePoint(QueryPointsToSinglePointRequest) returns (QueryPointsToSinglePointResult);

message QueryPointsToSinglePointRequest {
  repeated PointName point_names = 1;
  optional PointName single_point = 2;
  optional bool show_vector_properties = 3;
}

message QueryPointsToSinglePointResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Re-Compute Calculated Items

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Re-Compute Calculated Items](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) |
| Service | `briosa.AnalysisOperations` |
| RPC | `ReComputeCalculatedItems` |
| Operation ID | `analysis_operations.re_compute_calculated_items` |
| Route | `/briosa.AnalysisOperations/ReComputeCalculatedItems` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `targets_from_shots` | `bool` | `Targets from Shots` | false |
| Request | 2 | `hidden_points` | `bool` | `Hidden Points` | false |
| Request | 3 | `relationships` | `bool` | `Relationships` | false |
| Request | 4 | `refresh_filtered_cloud_data` | `bool` | `Refresh Filtered Cloud Data?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ReComputeCalculatedItems(ReComputeCalculatedItemsRequest) returns (ReComputeCalculatedItemsResult);

message ReComputeCalculatedItemsRequest {
  optional bool targets_from_shots = 1;
  optional bool hidden_points = 2;
  optional bool relationships = 3;
  optional bool refresh_filtered_cloud_data = 4;
}

message ReComputeCalculatedItemsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Rename points based on inter-point distance to reference points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename points based on inter-point distance to reference points](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points) |
| Service | `briosa.AnalysisOperations` |
| RPC | `RenamePointsBasedOnInterPointDistanceToReferencePoints` |
| Operation ID | `analysis_operations.rename_points_based_on_inter_point_distance_to_reference_points` |
| Route | `/briosa.AnalysisOperations/RenamePointsBasedOnInterPointDistanceToReferencePoints` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group_name` | `CollectionObjectName` | `Reference Group Name` | Required |
| Request | 2 | `group_to_rename_points` | `CollectionObjectName` | `Group To Rename Points` | Required |
| Request | 3 | `distance_threshold` | `double` | `Distance Threshold` | 0.000000 |
| Request | 4 | `verify_results` | `bool` | `Verify Results?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RenamePointsBasedOnInterPointDistanceToReferencePoints(RenamePointsBasedOnInterPointDistanceToReferencePointsRequest) returns (RenamePointsBasedOnInterPointDistanceToReferencePointsResult);

message RenamePointsBasedOnInterPointDistanceToReferencePointsRequest {
  optional CollectionObjectName reference_group_name = 1;
  optional CollectionObjectName group_to_rename_points = 2;
  optional double distance_threshold = 3;
  optional bool verify_results = 4;
}

message RenamePointsBasedOnInterPointDistanceToReferencePointsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Rename points based on proximity to reference points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename points based on proximity to reference points](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points) |
| Service | `briosa.AnalysisOperations` |
| RPC | `RenamePointsBasedOnProximityToReferencePoints` |
| Operation ID | `analysis_operations.rename_points_based_on_proximity_to_reference_points` |
| Route | `/briosa.AnalysisOperations/RenamePointsBasedOnProximityToReferencePoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group_name` | `CollectionObjectName` | `Reference Group Name` | Required |
| Request | 2 | `group_to_rename_points` | `CollectionObjectName` | `Group To Rename Points` | Required |
| Request | 3 | `proximity_threshold` | `double` | `Proximity Threshold` | 0.000000 |
| Request | 4 | `verify_results` | `bool` | `Verify Results?` | false |
| Request | 5 | `rename_all_proximate_points` | `bool` | `Rename All Proximate Points?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RenamePointsBasedOnProximityToReferencePoints(RenamePointsBasedOnProximityToReferencePointsRequest) returns (RenamePointsBasedOnProximityToReferencePointsResult);

message RenamePointsBasedOnProximityToReferencePointsRequest {
  optional CollectionObjectName reference_group_name = 1;
  optional CollectionObjectName group_to_rename_points = 2;
  optional double proximity_threshold = 3;
  optional bool verify_results = 4;
  optional bool rename_all_proximate_points = 5;
}

message RenamePointsBasedOnProximityToReferencePointsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Reverse B-Splines

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Reverse B-Splines](/mp-command-catalog/commands/analysis-operations#reverse-b-splines) |
| Service | `briosa.AnalysisOperations` |
| RPC | `ReverseBSplines` |
| Operation ID | `analysis_operations.reverse_b_splines` |
| Route | `/briosa.AnalysisOperations/ReverseBSplines` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `b_spline_list` | `repeated CollectionObjectName` | `B-Spline List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ReverseBSplines(ReverseBSplinesRequest) returns (ReverseBSplinesResult);

message ReverseBSplinesRequest {
  repeated CollectionObjectName b_spline_list = 1;
}

message ReverseBSplinesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Reverse Plane Normals

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Reverse Plane Normals](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals) |
| Service | `briosa.AnalysisOperations` |
| RPC | `ReversePlaneNormals` |
| Operation ID | `analysis_operations.reverse_plane_normals` |
| Route | `/briosa.AnalysisOperations/ReversePlaneNormals` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_list` | `repeated CollectionObjectName` | `Plane List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ReversePlaneNormals(ReversePlaneNormalsRequest) returns (ReversePlaneNormalsResult);

message ReversePlaneNormalsRequest {
  repeated CollectionObjectName plane_list = 1;
}

message ReversePlaneNormalsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Reverse Surface Normals

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Reverse Surface Normals](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals) |
| Service | `briosa.AnalysisOperations` |
| RPC | `ReverseSurfaceNormals` |
| Operation ID | `analysis_operations.reverse_surface_normals` |
| Route | `/briosa.AnalysisOperations/ReverseSurfaceNormals` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_list` | `repeated CollectionObjectName` | `Surface List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ReverseSurfaceNormals(ReverseSurfaceNormalsRequest) returns (ReverseSurfaceNormalsResult);

message ReverseSurfaceNormalsRequest {
  repeated CollectionObjectName surface_list = 1;
}

message ReverseSurfaceNormalsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Circle Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Circle Properties](/mp-command-catalog/commands/analysis-operations#set-circle-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetCircleProperties` |
| Operation ID | `analysis_operations.set_circle_properties` |
| Route | `/briosa.AnalysisOperations/SetCircleProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `CollectionObjectName` | `Circle Name` | Required |
| Request | 2 | `center_coordinate` | `Vector` | `Center Coordinate` | Required |
| Request | 3 | `normal_direction` | `Vector` | `Normal Direction` | Required |
| Request | 4 | `radius` | `double` | `Radius` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCircleProperties(SetCirclePropertiesRequest) returns (SetCirclePropertiesResult);

message SetCirclePropertiesRequest {
  optional CollectionObjectName circle_name = 1;
  optional Vector center_coordinate = 2;
  optional Vector normal_direction = 3;
  optional double radius = 4;
}

message SetCirclePropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Cone Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Cone Properties](/mp-command-catalog/commands/analysis-operations#set-cone-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetConeProperties` |
| Operation ID | `analysis_operations.set_cone_properties` |
| Route | `/briosa.AnalysisOperations/SetConeProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cone_name` | `CollectionObjectName` | `Cone Name` | Required |
| Request | 2 | `cone_end_point_in_working_coordinates` | `Vector` | `Cone End Point (in working coordinates)` | Required |
| Request | 3 | `cone_axis_in_working_coordinates` | `Vector` | `Cone Axis (in working coordinates)` | Required |
| Request | 4 | `cone_length` | `double` | `Cone Length` | 0.000000 |
| Request | 5 | `cone_theta_start` | `double` | `Cone Theta Start` | 0.000000 |
| Request | 6 | `cone_theta_span` | `double` | `Cone Theta Span` | 0.000000 |
| Request | 7 | `cone_included_angle` | `double` | `Cone Included Angle` | 0.000000 |
| Request | 8 | `cut_length_from_apex` | `double` | `Cut Length from Apex` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetConeProperties(SetConePropertiesRequest) returns (SetConePropertiesResult);

message SetConePropertiesRequest {
  optional CollectionObjectName cone_name = 1;
  optional Vector cone_end_point_in_working_coordinates = 2;
  optional Vector cone_axis_in_working_coordinates = 3;
  optional double cone_length = 4;
  optional double cone_theta_start = 5;
  optional double cone_theta_span = 6;
  optional double cone_included_angle = 7;
  optional double cut_length_from_apex = 8;
}

message SetConePropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Cylinder Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Cylinder Properties](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetCylinderProperties` |
| Operation ID | `analysis_operations.set_cylinder_properties` |
| Route | `/briosa.AnalysisOperations/SetCylinderProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cylinder_name` | `CollectionObjectName` | `Cylinder Name` | Required |
| Request | 2 | `begin_coordinate` | `Vector` | `Begin Coordinate` | Required |
| Request | 3 | `axis_direction` | `Vector` | `Axis Direction` | Required |
| Request | 4 | `length` | `double` | `Length` | 0.000000 |
| Request | 5 | `diameter` | `double` | `Diameter` | 0.000000 |
| Request | 6 | `nominals_point_inward` | `bool` | `Nominals Point Inward` | true |
| Request | 7 | `facets` | `int32` | `Facets` | 32 |
| Request | 8 | `enable_theta_extent_display_mode` | `bool` | `Enable Theta Extent Display Mode` | true |
| Request | 9 | `theta_start_in_degrees` | `double` | `Theta Start in Degrees` | 0.000000 |
| Request | 10 | `theta_span_in_degrees` | `double` | `Theta Span in Degrees` | 360.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCylinderProperties(SetCylinderPropertiesRequest) returns (SetCylinderPropertiesResult);

message SetCylinderPropertiesRequest {
  optional CollectionObjectName cylinder_name = 1;
  optional Vector begin_coordinate = 2;
  optional Vector axis_direction = 3;
  optional double length = 4;
  optional double diameter = 5;
  optional bool nominals_point_inward = 6;
  optional int32 facets = 7;
  optional bool enable_theta_extent_display_mode = 8;
  optional double theta_start_in_degrees = 9;
  optional double theta_span_in_degrees = 10;
}

message SetCylinderPropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Default Colorization Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Default Colorization Options](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetDefaultColorizationOptions` |
| Operation ID | `analysis_operations.set_default_colorization_options` |
| Route | `/briosa.AnalysisOperations/SetDefaultColorizationOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `colorization_options` | `Color` | `Colorization Options` | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetDefaultColorizationOptions(SetDefaultColorizationOptionsRequest) returns (SetDefaultColorizationOptionsResult);

message SetDefaultColorizationOptionsRequest {
  optional Color colorization_options = 1;
}

message SetDefaultColorizationOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Ellipse Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Ellipse Properties](/mp-command-catalog/commands/analysis-operations#set-ellipse-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetEllipseProperties` |
| Operation ID | `analysis_operations.set_ellipse_properties` |
| Route | `/briosa.AnalysisOperations/SetEllipseProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ellipse_name` | `CollectionObjectName` | `Ellipse Name` | Required |
| Request | 2 | `center_coordinate` | `Vector` | `Center Coordinate` | Required |
| Request | 3 | `normal_direction` | `Vector` | `Normal Direction` | Required |
| Request | 4 | `major_axis_radius` | `double` | `Major Axis Radius` | 0.000000 |
| Request | 5 | `minor_axis_radius` | `double` | `Minor Axis Radius` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetEllipseProperties(SetEllipsePropertiesRequest) returns (SetEllipsePropertiesResult);

message SetEllipsePropertiesRequest {
  optional CollectionObjectName ellipse_name = 1;
  optional Vector center_coordinate = 2;
  optional Vector normal_direction = 3;
  optional double major_axis_radius = 4;
  optional double minor_axis_radius = 5;
}

message SetEllipsePropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geometry Relationship Fit Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geometry Relationship Fit Profile](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetGeometryRelationshipFitProfile` |
| Operation ID | `analysis_operations.set_geometry_relationship_fit_profile` |
| Route | `/briosa.AnalysisOperations/SetGeometryRelationshipFitProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_type` | `GeometryType` | `Geometry Type` | Required |
| Request | 2 | `relationship_ref_list` | `repeated CollectionObjectName` | `Relationship Ref List` | Required |
| Request | 3 | `fit_profile_name` | `string` | `Fit Profile Name` | Empty |
| Request | 4 | `apply_cardinal_point_settings` | `bool` | `Apply Cardinal Point Settings` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeometryRelationshipFitProfile(SetGeometryRelationshipFitProfileRequest) returns (SetGeometryRelationshipFitProfileResult);

message SetGeometryRelationshipFitProfileRequest {
  optional GeometryType geometry_type = 1;
  repeated CollectionObjectName relationship_ref_list = 2;
  optional string fit_profile_name = 3;
  optional bool apply_cardinal_point_settings = 4;
}

message SetGeometryRelationshipFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Line Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Line Properties](/mp-command-catalog/commands/analysis-operations#set-line-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetLineProperties` |
| Operation ID | `analysis_operations.set_line_properties` |
| Route | `/briosa.AnalysisOperations/SetLineProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `CollectionObjectName` | `Line Name` | Required |
| Request | 2 | `begin_coordinate` | `Vector` | `Begin Coordinate` | Required |
| Request | 3 | `end_coordinate` | `Vector` | `End Coordinate` | Required |
| Request | 4 | `length_optional` | `double` | `Length (optional)` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetLineProperties(SetLinePropertiesRequest) returns (SetLinePropertiesResult);

message SetLinePropertiesRequest {
  optional CollectionObjectName line_name = 1;
  optional Vector begin_coordinate = 2;
  optional Vector end_coordinate = 3;
  optional double length_optional = 4;
}

message SetLinePropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Measurement Auxiliary Data

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Measurement Auxiliary Data](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetMeasurementAuxiliaryData` |
| Operation ID | `analysis_operations.set_measurement_auxiliary_data` |
| Route | `/briosa.AnalysisOperations/SetMeasurementAuxiliaryData` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `PointName` | `Point Name` | Required |
| Request | 2 | `auxiliary_name` | `string` | `Auxiliary Name` | Empty |
| Request | 3 | `value` | `double` | `Value` | 0.000000 |
| Request | 4 | `units` | `string` | `Units` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetMeasurementAuxiliaryData(SetMeasurementAuxiliaryDataRequest) returns (SetMeasurementAuxiliaryDataResult);

message SetMeasurementAuxiliaryDataRequest {
  optional PointName point_name = 1;
  optional string auxiliary_name = 2;
  optional double value = 3;
  optional string units = 4;
}

message SetMeasurementAuxiliaryDataResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Object Reporting Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Object Reporting Frame](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetObjectReportingFrame` |
| Operation ID | `analysis_operations.set_object_reporting_frame` |
| Route | `/briosa.AnalysisOperations/SetObjectReportingFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `CollectionObjectName` | `Object Name` | Required |
| Request | 2 | `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetObjectReportingFrame(SetObjectReportingFrameRequest) returns (SetObjectReportingFrameResult);

message SetObjectReportingFrameRequest {
  optional CollectionObjectName object_name = 1;
  optional CollectionObjectName reporting_frame = 2;
}

message SetObjectReportingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Point Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Point Properties](/mp-command-catalog/commands/analysis-operations#set-point-properties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetPointProperties` |
| Operation ID | `analysis_operations.set_point_properties` |
| Route | `/briosa.AnalysisOperations/SetPointProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | `Point Name List` | Required |
| Request | 2 | `planar_offset` | `double` | `Planar Offset` | 0.000000 |
| Request | 3 | `radial_offset` | `double` | `Radial Offset` | 0.000000 |
| Request | 4 | `position_tolerance` | `Vector` | `Position Tolerance` | Required |
| Request | 5 | `component_weights` | `Vector` | `Component Weights` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetPointProperties(SetPointPropertiesRequest) returns (SetPointPropertiesResult);

message SetPointPropertiesRequest {
  repeated PointName point_name_list = 1;
  optional double planar_offset = 2;
  optional double radial_offset = 3;
  optional Vector position_tolerance = 4;
  optional Vector component_weights = 5;
}

message SetPointPropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Point Weights From Uncertainties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Point Weights From Uncertainties](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetPointWeightsFromUncertainties` |
| Operation ID | `analysis_operations.set_point_weights_from_uncertainties` |
| Route | `/briosa.AnalysisOperations/SetPointWeightsFromUncertainties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | `Point Name List` | Required |
| Request | 2 | `uncertainty_reference_frame_mode` | `string` | `Uncertainty Reference Frame Mode` | With respect to WORLD |
| Request | 3 | `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | Required |
| Request | 4 | `weight_normalization_mode` | `string` | `Weight Normalization Mode` | Set to fixed value |
| Request | 5 | `fixed_weight_value` | `double` | `Fixed Weight Value` | 1.000000 |
| Request | 6 | `output_weighted_point_group` | `CollectionObjectName` | `Output Weighted Point Group` | Required |
| Result | 1 | `output_weighted_point_list` | `repeated PointName` | `Output Weighted Point List` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetPointWeightsFromUncertainties(SetPointWeightsFromUncertaintiesRequest) returns (SetPointWeightsFromUncertaintiesResult);

message SetPointWeightsFromUncertaintiesRequest {
  repeated PointName point_name_list = 1;
  optional string uncertainty_reference_frame_mode = 2;
  optional CollectionObjectName reporting_frame = 3;
  optional string weight_normalization_mode = 4;
  optional double fixed_weight_value = 5;
  optional CollectionObjectName output_weighted_point_group = 6;
}

message SetPointWeightsFromUncertaintiesResult {
  repeated PointName output_weighted_point_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Transform for i-th Frame in Frame Set

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Transform for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SetTransformForIthFrameInFrameSet` |
| Operation ID | `analysis_operations.set_transform_for_ith_frame_in_frame_set` |
| Route | `/briosa.AnalysisOperations/SetTransformForIthFrameInFrameSet` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set` | `CollectionObjectName` | `Frame Set` | Required |
| Request | 2 | `frame_set_index` | `int32` | `Frame Set Index` | 0 |
| Request | 3 | `transform_in_working` | `Transform` | `Transform in Working` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetTransformForIthFrameInFrameSet(SetTransformForIthFrameInFrameSetRequest) returns (SetTransformForIthFrameInFrameSetResult);

message SetTransformForIthFrameInFrameSetRequest {
  optional CollectionObjectName frame_set = 1;
  optional int32 frame_set_index = 2;
  optional Transform transform_in_working = 3;
}

message SetTransformForIthFrameInFrameSetResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Sphere Axis Check

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Sphere Axis Check](/mp-command-catalog/commands/analysis-operations#sphere-axis-check) |
| Service | `briosa.AnalysisOperations` |
| RPC | `SphereAxisCheck` |
| Operation ID | `analysis_operations.sphere_axis_check` |
| Route | `/briosa.AnalysisOperations/SphereAxisCheck` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sphere_points_group_name` | `CollectionObjectName` | `Sphere Points Group Name` | Required |
| Request | 2 | `sphere_target_radius` | `double` | `Sphere Target Radius` | 0.000000 |
| Request | 3 | `point_to_create_at_sphere_center` | `PointName` | `Point To Create at Sphere Center` | Required |
| Request | 4 | `line_defining_the_axis` | `CollectionObjectName` | `Line defining the axis` | Required |
| Result | 1 | `sphere_fit_rms_error` | `double` | `Sphere Fit RMS Error` | — |
| Result | 2 | `sphere_fit_max_error` | `double` | `Sphere Fit Max Error` | — |
| Result | 3 | `vector_representation` | `Vector` | `Vector Representation` | — |
| Result | 4 | `x_value` | `double` | `X Value` | — |
| Result | 5 | `y_value` | `double` | `Y Value` | — |
| Result | 6 | `z_value` | `double` | `Z Value` | — |
| Result | 7 | `magnitude` | `double` | `Magnitude` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SphereAxisCheck(SphereAxisCheckRequest) returns (SphereAxisCheckResult);

message SphereAxisCheckRequest {
  optional CollectionObjectName sphere_points_group_name = 1;
  optional double sphere_target_radius = 2;
  optional PointName point_to_create_at_sphere_center = 3;
  optional CollectionObjectName line_defining_the_axis = 4;
}

message SphereAxisCheckResult {
  optional double sphere_fit_rms_error = 1;
  optional double sphere_fit_max_error = 2;
  optional Vector vector_representation = 3;
  optional double x_value = 4;
  optional double y_value = 5;
  optional double z_value = 6;
  optional double magnitude = 7;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Temperature Compensate a group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Temperature Compensate a group](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group) |
| Service | `briosa.AnalysisOperations` |
| RPC | `TemperatureCompensateAGroup` |
| Operation ID | `analysis_operations.temperature_compensate_a_group` |
| Route | `/briosa.AnalysisOperations/TemperatureCompensateAGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_group` | `CollectionObjectName` | `Original Group` | Required |
| Request | 2 | `scaling_origin_coordinate_frame` | `FrameName` | `Scaling Origin (coordinate frame)` | Required |
| Request | 3 | `material_cte_1_deg_f` | `double` | `Material CTE (1/Deg F)` | 0.000000 |
| Request | 4 | `initial_temperature_f` | `double` | `Initial Temperature (F)` | 0.000000 |
| Request | 5 | `final_temperature_f` | `double` | `Final Temperature (F)` | 0.000000 |
| Request | 6 | `scaled_group_name` | `CollectionObjectName` | `Scaled Group Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc TemperatureCompensateAGroup(TemperatureCompensateAGroupRequest) returns (TemperatureCompensateAGroupResult);

message TemperatureCompensateAGroupRequest {
  optional CollectionObjectName original_group = 1;
  optional FrameName scaling_origin_coordinate_frame = 2;
  optional double material_cte_1_deg_f = 3;
  optional double initial_temperature_f = 4;
  optional double final_temperature_f = 5;
  optional CollectionObjectName scaled_group_name = 6;
}

message TemperatureCompensateAGroupResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Transform Objects - Frame To Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Transform Objects - Frame To Frame](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame) |
| Service | `briosa.AnalysisOperations` |
| RPC | `TransformObjectsFrameToFrame` |
| Operation ID | `analysis_operations.transform_objects_frame_to_frame` |
| Route | `/briosa.AnalysisOperations/TransformObjectsFrameToFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name_list` | `repeated CollectionObjectName` | `Object Name List` | Required |
| Request | 2 | `initial_frame_name` | `CollectionObjectName` | `Initial Frame Name` | Required |
| Request | 3 | `destination_frame_name` | `CollectionObjectName` | `Destination Frame Name` | Required |
| Request | 4 | `number_of_steps` | `int32` | `Number of Steps` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc TransformObjectsFrameToFrame(TransformObjectsFrameToFrameRequest) returns (TransformObjectsFrameToFrameResult);

message TransformObjectsFrameToFrameRequest {
  repeated CollectionObjectName object_name_list = 1;
  optional CollectionObjectName initial_frame_name = 2;
  optional CollectionObjectName destination_frame_name = 3;
  optional int32 number_of_steps = 4;
}

message TransformObjectsFrameToFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Transform Objects by Delta (About Working Frame)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Transform Objects by Delta (About Working Frame)](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame) |
| Service | `briosa.AnalysisOperations` |
| RPC | `TransformObjectsByDeltaAboutWorkingFrame` |
| Operation ID | `analysis_operations.transform_objects_by_delta_about_working_frame` |
| Route | `/briosa.AnalysisOperations/TransformObjectsByDeltaAboutWorkingFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_transform` | `repeated CollectionObjectName` | `Objects to Transform` | Required |
| Request | 2 | `delta_transform` | `Transform` | `Delta Transform` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc TransformObjectsByDeltaAboutWorkingFrame(TransformObjectsByDeltaAboutWorkingFrameRequest) returns (TransformObjectsByDeltaAboutWorkingFrameResult);

message TransformObjectsByDeltaAboutWorkingFrameRequest {
  repeated CollectionObjectName objects_to_transform = 1;
  optional Transform delta_transform = 2;
}

message TransformObjectsByDeltaAboutWorkingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Transform Objects by Delta (World Transform Operator)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Transform Objects by Delta (World Transform Operator)](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator) |
| Service | `briosa.AnalysisOperations` |
| RPC | `TransformObjectsByDeltaWorldTransformOperator` |
| Operation ID | `analysis_operations.transform_objects_by_delta_world_transform_operator` |
| Route | `/briosa.AnalysisOperations/TransformObjectsByDeltaWorldTransformOperator` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_transform` | `repeated CollectionObjectName` | `Objects to Transform` | Required |
| Request | 2 | `delta_transform` | `Transform` | `Delta Transform` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc TransformObjectsByDeltaWorldTransformOperator(TransformObjectsByDeltaWorldTransformOperatorRequest) returns (TransformObjectsByDeltaWorldTransformOperatorResult);

message TransformObjectsByDeltaWorldTransformOperatorRequest {
  repeated CollectionObjectName objects_to_transform = 1;
  optional Transform delta_transform = 2;
}

message TransformObjectsByDeltaWorldTransformOperatorResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Translate Objects by Delta

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Translate Objects by Delta](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta) |
| Service | `briosa.AnalysisOperations` |
| RPC | `TranslateObjectsByDelta` |
| Operation ID | `analysis_operations.translate_objects_by_delta` |
| Route | `/briosa.AnalysisOperations/TranslateObjectsByDelta` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_translate` | `repeated CollectionObjectName` | `Objects to Translate` | Required |
| Request | 2 | `delta_translation` | `Vector` | `Delta Translation` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc TranslateObjectsByDelta(TranslateObjectsByDeltaRequest) returns (TranslateObjectsByDeltaResult);

message TranslateObjectsByDeltaRequest {
  repeated CollectionObjectName objects_to_translate = 1;
  optional Vector delta_translation = 2;
}

message TranslateObjectsByDeltaResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
