---
title: Analysis Operations
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Analysis Operations

[SA 2026.1.0529.7](/api/grpc/analysis-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/analysis-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Angle Between Line and Plane {/* #angle-between-line-and-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane)

`/briosa.AnalysisOperations/AngleBetweenLineAndPlane` · Operation ID: `analysis_operations.angle_between_line_and_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `selected_line` | `optional CollectionObjectName` | Selected Line | Required |
| Request | 2 | `selected_plane` | `optional CollectionObjectName` | Selected Plane | Required |
| Request | 3 | `nominal_angle` | `optional double` | Nominal Angle | 0.000000 |
| Request | 4 | `angle_tolerance` | `optional double` | Angle Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `angle` | `optional double` | Angle | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AngleBetweenLineAndPlane(AngleBetweenLineAndPlaneRequest) returns (AngleBetweenLineAndPlaneResult);

message AngleBetweenLineAndPlaneRequest {
  optional CollectionObjectName selected_line = 1;
  optional CollectionObjectName selected_plane = 2;
  optional double nominal_angle = 3;
  optional double angle_tolerance = 4;
}

message AngleBetweenLineAndPlaneResult {
  optional double angle = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Angle Between Two Lines {/* #angle-between-two-lines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines)

`/briosa.AnalysisOperations/AngleBetweenTwoLines` · Operation ID: `analysis_operations.angle_between_two_lines`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_1` | `optional CollectionObjectName` | Line 1 | Required |
| Request | 2 | `line_2` | `optional CollectionObjectName` | Line 2 | Required |
| Request | 3 | `nominal_angle` | `optional double` | Nominal Angle | 0.000000 |
| Request | 4 | `angle_tolerance` | `optional double` | Angle Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `angle` | `optional double` | Angle | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AngleBetweenTwoLines(AngleBetweenTwoLinesRequest) returns (AngleBetweenTwoLinesResult);

message AngleBetweenTwoLinesRequest {
  optional CollectionObjectName line_1 = 1;
  optional CollectionObjectName line_2 = 2;
  optional double nominal_angle = 3;
  optional double angle_tolerance = 4;
}

message AngleBetweenTwoLinesResult {
  optional double angle = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Angle Between Two Planes' normals {/* #angle-between-two-planes-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals)

`/briosa.AnalysisOperations/AngleBetweenTwoPlanesNormals` · Operation ID: `analysis_operations.angle_between_two_planes_normals`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_a` | `optional CollectionObjectName` | Plane A | Required |
| Request | 2 | `plane_b` | `optional CollectionObjectName` | Plane B | Required |
| Request | 3 | `nominal_angle` | `optional double` | Nominal Angle | 0.000000 |
| Request | 4 | `angle_tolerance` | `optional double` | Angle Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `angle` | `optional double` | Angle | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AngleBetweenTwoPlanesNormals(AngleBetweenTwoPlanesNormalsRequest) returns (AngleBetweenTwoPlanesNormalsResult);

message AngleBetweenTwoPlanesNormalsRequest {
  optional CollectionObjectName plane_a = 1;
  optional CollectionObjectName plane_b = 2;
  optional double nominal_angle = 3;
  optional double angle_tolerance = 4;
}

message AngleBetweenTwoPlanesNormalsResult {
  optional double angle = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Best Fit Transformation - Group to Group {/* #best-fit-transformation---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group)

`/briosa.AnalysisOperations/BestFitTransformationGroupToGroup` · Operation ID: `analysis_operations.best_fit_transformation_group_to_group`

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
| Request | 15 | `file_path_for_csv_text_report` | `optional FileReference` | File Path for CSV Text Report (requires Show Interface = TRUE) | Required |
| Result | 1 | `transform_in_working` | `optional Transform` | Transform in Working | — |
| Result | 2 | `optimum_transform` | `optional WorldTransform` | Optimum Transform | — |
| Result | 3 | `rms_deviation` | `optional double` | RMS Deviation | — |
| Result | 4 | `maximum_absolute_deviation` | `optional double` | Maximum Absolute Deviation | — |
| Result | 5 | `number_of_unknowns` | `optional int32` | Number of Unknowns | — |
| Result | 6 | `number_of_equations` | `optional int32` | Number of Equations | — |
| Result | 7 | `robustness` | `optional double` | Robustness | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc BestFitTransformationGroupToGroup(BestFitTransformationGroupToGroupRequest) returns (BestFitTransformationGroupToGroupResult);

message BestFitTransformationGroupToGroupRequest {
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
  optional FileReference file_path_for_csv_text_report = 15;
}

message BestFitTransformationGroupToGroupResult {
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |
| `file_path_for_csv_text_report` | Requires Show Interface to be true. |

## Compute Group to Group Orientation (Rx,Ry,Rz) {/* #compute-group-to-group-orientation-rxryrz */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz)

`/briosa.AnalysisOperations/ComputeGroupToGroupOrientationRxRyRz` · Operation ID: `analysis_operations.compute_group_to_group_orientation_rx_ry_rz`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group` | `optional CollectionObjectName` | Reference Group | Required |
| Request | 2 | `corresponding_group` | `optional CollectionObjectName` | Corresponding Group | Required |
| Result | 1 | `rx` | `optional double` | Rx | — |
| Result | 2 | `ry` | `optional double` | Ry | — |
| Result | 3 | `rz` | `optional double` | Rz | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Create Point Uncertainty Cloud Point Sets {/* #create-point-uncertainty-cloud-point-sets */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets)

`/briosa.AnalysisOperations/CreatePointUncertaintyCloudPointSets` · Operation ID: `analysis_operations.create_point_uncertainty_cloud_point_sets`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | Point Name List | Required |
| Request | 2 | `number_of_samples` | `optional int32` | Number of Samples | 1000 |
| Request | 3 | `uncertainty_reference_frame_mode` | `optional string` | Uncertainty Reference Frame Mode | With respect to WORLD |
| Request | 4 | `grouping_mode` | `optional string` | Grouping mode | Group per point |
| Request | 5 | `point_set_mode` | `optional string` | Point set mode | Point clouds |
| Result | 1 | `point_groups` | `repeated CollectionObjectName` | Point Groups | — |
| Result | 2 | `point_sets` | `repeated CollectionObjectName` | Point Sets | — |
| Result | 3 | `point_clouds` | `repeated CollectionObjectName` | Point Clouds | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Create Point Uncertainty Fields {/* #create-point-uncertainty-fields */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields)

`/briosa.AnalysisOperations/CreatePointUncertaintyFields` · Operation ID: `analysis_operations.create_point_uncertainty_fields`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | Point Name List | Required |
| Request | 2 | `number_of_samples` | `optional int32` | Number of Samples | 1000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Fit Geometry to Point Group {/* #fit-geometry-to-point-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group)

`/briosa.AnalysisOperations/FitGeometryToPointGroup` · Operation ID: `analysis_operations.fit_geometry_to_point_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_type` | `optional GeometryType` | Geometry Type | Required |
| Request | 2 | `group_to_fit` | `optional CollectionObjectName` | Group To Fit | Required |
| Request | 3 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name | Required |
| Request | 4 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 5 | `report_deviations` | `optional bool` | Report Deviations | false |
| Request | 6 | `fit_interface_tolerance` | `optional double` | Fit Interface Tolerance (-1.0 use profile) | -1.000000 |
| Request | 7 | `ignore_out_of_tolerance_points` | `optional bool` | Ignore Out of Tolerance Points | false |
| Request | 8 | `starting_condition_geometry` | `optional CollectionObjectName` | Starting Condition Geometry (optional) | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FitGeometryToPointGroup(FitGeometryToPointGroupRequest) returns (FitGeometryToPointGroupResult);

message FitGeometryToPointGroupRequest {
  optional GeometryType geometry_type = 1;
  optional CollectionObjectName group_to_fit = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional string fit_profile_name = 4;
  optional bool report_deviations = 5;
  optional double fit_interface_tolerance = 6;
  optional bool ignore_out_of_tolerance_points = 7;
  optional CollectionObjectName starting_condition_geometry = 8;
}

message FitGeometryToPointGroupResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Fit Geometry to Point Group Projected to Plane {/* #fit-geometry-to-point-group-projected-to-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane)

`/briosa.AnalysisOperations/FitGeometryToPointGroupProjectedToPlane` · Operation ID: `analysis_operations.fit_geometry_to_point_group_projected_to_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_type` | `optional GeometryType` | Geometry Type | Required |
| Request | 2 | `group_to_fit` | `optional CollectionObjectName` | Group To Fit | Required |
| Request | 3 | `plane_name` | `optional CollectionObjectName` | Plane Name | Required |
| Request | 4 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name | Required |
| Request | 5 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 6 | `report_deviations` | `optional bool` | Report Deviations | false |
| Request | 7 | `fit_interface_tolerance` | `optional double` | Fit Interface Tolerance (-1.0 use profile) | -1.000000 |
| Request | 8 | `ignore_out_of_tolerance_points` | `optional bool` | Ignore Out of Tolerance Points | false |
| Request | 9 | `starting_condition_geometry` | `optional CollectionObjectName` | Starting Condition Geometry (optional) | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FitGeometryToPointGroupProjectedToPlane(FitGeometryToPointGroupProjectedToPlaneRequest) returns (FitGeometryToPointGroupProjectedToPlaneResult);

message FitGeometryToPointGroupProjectedToPlaneRequest {
  optional GeometryType geometry_type = 1;
  optional CollectionObjectName group_to_fit = 2;
  optional CollectionObjectName plane_name = 3;
  optional CollectionObjectName resulting_object_name = 4;
  optional string fit_profile_name = 5;
  optional bool report_deviations = 6;
  optional double fit_interface_tolerance = 7;
  optional bool ignore_out_of_tolerance_points = 8;
  optional CollectionObjectName starting_condition_geometry = 9;
}

message FitGeometryToPointGroupProjectedToPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Fit Geometry to Points {/* #fit-geometry-to-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points)

`/briosa.AnalysisOperations/FitGeometryToPoints` · Operation ID: `analysis_operations.fit_geometry_to_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_type` | `optional GeometryType` | Geometry Type | Required |
| Request | 2 | `points_to_fit` | `repeated PointName` | Points to Fit | Required |
| Request | 3 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name | Required |
| Request | 4 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 5 | `report_deviations` | `optional bool` | Report Deviations | false |
| Request | 6 | `fit_interface_tolerance` | `optional double` | Fit Interface Tolerance (-1.0 use profile) | -1.000000 |
| Request | 7 | `ignore_out_of_tolerance_points` | `optional bool` | Ignore Out of Tolerance Points | false |
| Request | 8 | `starting_condition_geometry` | `optional CollectionObjectName` | Starting Condition Geometry (optional) | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FitGeometryToPoints(FitGeometryToPointsRequest) returns (FitGeometryToPointsResult);

message FitGeometryToPointsRequest {
  optional GeometryType geometry_type = 1;
  repeated PointName points_to_fit = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional string fit_profile_name = 4;
  optional bool report_deviations = 5;
  optional double fit_interface_tolerance = 6;
  optional bool ignore_out_of_tolerance_points = 7;
  optional CollectionObjectName starting_condition_geometry = 8;
}

message FitGeometryToPointsResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Get B-Spline Properties {/* #get-b-spline-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties)

`/briosa.AnalysisOperations/GetBSplineProperties` · Operation ID: `analysis_operations.get_bspline_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `b_spline_name` | `optional CollectionObjectName` | B-Spline Name | Required |
| Result | 1 | `degree` | `optional int32` | Degree | — |
| Result | 2 | `knots` | `optional int32` | Knots | — |
| Result | 3 | `control_points` | `optional int32` | Control Points | — |
| Result | 4 | `range_min` | `optional double` | Range Min | — |
| Result | 5 | `range_max` | `optional double` | Range Max | — |
| Result | 6 | `length` | `optional double` | Length | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Circle Properties {/* #get-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-circle-properties)

`/briosa.AnalysisOperations/GetCircleProperties` · Operation ID: `analysis_operations.get_circle_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `optional CollectionObjectName` | Circle Name | Required |
| Result | 1 | `center_coordinate` | `optional Vector` | Center Coordinate | — |
| Result | 2 | `normal_direction` | `optional Vector` | Normal Direction | — |
| Result | 3 | `radius` | `optional double` | Radius | — |
| Result | 4 | `diameter` | `optional double` | Diameter | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Cone Properties {/* #get-cone-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cone-properties)

`/briosa.AnalysisOperations/GetConeProperties` · Operation ID: `analysis_operations.get_cone_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cone_name` | `optional CollectionObjectName` | Cone Name | Required |
| Result | 1 | `cone_end_point` | `optional Vector` | Cone End Point (in working coordinates) | — |
| Result | 2 | `cone_axis` | `optional Vector` | Cone Axis (in working coordinates) | — |
| Result | 3 | `cone_length` | `optional double` | Cone Length | — |
| Result | 4 | `cone_theta_start` | `optional double` | Cone Theta Start | — |
| Result | 5 | `cone_theta_span` | `optional double` | Cone Theta Span | — |
| Result | 6 | `cone_included_angle` | `optional double` | Cone Included Angle | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetConeProperties(GetConePropertiesRequest) returns (GetConePropertiesResult);

message GetConePropertiesRequest {
  optional CollectionObjectName cone_name = 1;
}

message GetConePropertiesResult {
  optional Vector cone_end_point = 1;
  optional Vector cone_axis = 2;
  optional double cone_length = 3;
  optional double cone_theta_start = 4;
  optional double cone_theta_span = 5;
  optional double cone_included_angle = 6;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `cone_end_point` | Expressed in working coordinates. |
| `cone_axis` | Expressed in working coordinates. |

## Get Coordinate for i-th Point in Point Set {/* #get-coordinate-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set)

`/briosa.AnalysisOperations/GetCoordinateForIthPointInPointSet` · Operation ID: `analysis_operations.get_coordinate_for_ith_point_in_point_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_set` | `optional CollectionObjectName` | Point Set | Required |
| Request | 2 | `point_set_index` | `optional int32` | Point Set Index | 0 |
| Result | 1 | `point_name` | `optional string` | Point Name | — |
| Result | 2 | `point_coordinates` | `optional Vector` | Point Coordinates | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Cylinder Properties {/* #get-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties)

`/briosa.AnalysisOperations/GetCylinderProperties` · Operation ID: `analysis_operations.get_cylinder_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cylinder_name` | `optional CollectionObjectName` | Cylinder Name | Required |
| Result | 1 | `begin_coordinate` | `optional Vector` | Begin Coordinate | — |
| Result | 2 | `end_coordinate` | `optional Vector` | End Coordinate | — |
| Result | 3 | `axis_direction` | `optional Vector` | Axis Direction | — |
| Result | 4 | `length` | `optional double` | Length | — |
| Result | 5 | `radius` | `optional double` | Radius | — |
| Result | 6 | `diameter` | `optional double` | Diameter | — |
| Result | 7 | `nominals_point_inward` | `optional bool` | Nominals Point Inward | — |
| Result | 8 | `facets` | `optional int32` | Facets | — |
| Result | 9 | `enable_theta_extent_display_mode` | `optional bool` | Enable Theta Extent Display Mode | — |
| Result | 10 | `theta_start_in_degrees` | `optional double` | Theta Start in Degrees | — |
| Result | 11 | `theta_span_in_degrees` | `optional double` | Theta Span in Degrees | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Ellipse Properties {/* #get-ellipse-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties)

`/briosa.AnalysisOperations/GetEllipseProperties` · Operation ID: `analysis_operations.get_ellipse_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ellipse_name` | `optional CollectionObjectName` | Ellipse Name | Required |
| Result | 1 | `center_coordinate` | `optional Vector` | Center Coordinate | — |
| Result | 2 | `normal_direction` | `optional Vector` | Normal Direction | — |
| Result | 3 | `major_axis_radius` | `optional double` | Major Axis Radius | — |
| Result | 4 | `minor_axis_radius` | `optional double` | Minor Axis Radius | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Euler Parameters for Frame {/* #get-euler-parameters-for-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame)

`/briosa.AnalysisOperations/GetEulerParametersForFrame` · Operation ID: `analysis_operations.get_euler_parameters_for_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame` | `optional CollectionObjectName` | Frame | Required |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `e1` | `optional double` | e1 | — |
| Result | 5 | `e2` | `optional double` | e2 | — |
| Result | 6 | `e3` | `optional double` | e3 | — |
| Result | 7 | `e4` | `optional double` | e4 | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Euler Parameters for i-th Frame in Frame Set {/* #get-euler-parameters-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set)

`/briosa.AnalysisOperations/GetEulerParametersForIthFrameInFrameSet` · Operation ID: `analysis_operations.get_euler_parameters_for_ith_frame_in_frame_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set` | `optional CollectionObjectName` | Frame Set | Required |
| Request | 2 | `frame_set_index` | `optional int32` | Frame Set Index | 0 |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `e1` | `optional double` | e1 | — |
| Result | 5 | `e2` | `optional double` | e2 | — |
| Result | 6 | `e3` | `optional double` | e3 | — |
| Result | 7 | `e4` | `optional double` | e4 | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get i-th Collection Name {/* #get-i-th-collection-name */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name)

`/briosa.AnalysisOperations/GetIthCollectionName` · Operation ID: `analysis_operations.get_ith_collection_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_index` | `optional int32` | Collection Index | 0 |
| Result | 1 | `resultant_name` | `optional string` | Resultant Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get i-th Point From Group {/* #get-i-th-point-from-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group)

`/briosa.AnalysisOperations/GetIthPointFromGroup` · Operation ID: `analysis_operations.get_ith_point_from_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Request | 2 | `point_index` | `optional int32` | Point Index | 0 |
| Result | 1 | `complete_point_name` | `optional PointName` | Complete Point Name | — |
| Result | 2 | `point_name_only` | `optional string` | Point Name Only | — |
| Result | 3 | `vector_in_working` | `optional Vector` | Vector in Working | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Line Properties {/* #get-line-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-line-properties)

`/briosa.AnalysisOperations/GetLineProperties` · Operation ID: `analysis_operations.get_line_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Result | 1 | `begin_coordinate` | `optional Vector` | Begin Coordinate | — |
| Result | 2 | `end_coordinate` | `optional Vector` | End Coordinate | — |
| Result | 3 | `delta_components` | `optional Vector` | Delta Components | — |
| Result | 4 | `length` | `optional double` | Length | — |
| Result | 5 | `angle_about_x_from_y_in_yz_plane` | `optional double` | Angle about +X from +Y in YZ plane | — |
| Result | 6 | `angle_about_y_from_z_in_xz_plane` | `optional double` | Angle about +Y from +Z in XZ plane | — |
| Result | 7 | `angle_about_z_from_x_in_xy_plane` | `optional double` | Angle about +Z from +X in XY plane | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Measurement Auxiliary Data {/* #get-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data)

`/briosa.AnalysisOperations/GetMeasurementAuxiliaryData` · Operation ID: `analysis_operations.get_measurement_auxiliary_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 2 | `auxiliary_name` | `optional string` | Auxiliary Name | Empty |
| Result | 1 | `value` | `optional double` | Value | — |
| Result | 2 | `units` | `optional string` | Units | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Measurement Info Data {/* #get-measurement-info-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data)

`/briosa.AnalysisOperations/GetMeasurementInfoData` · Operation ID: `analysis_operations.get_measurement_info_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1 | `info_data` | `optional string` | Info Data | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Measurement Weather Data {/* #get-measurement-weather-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data)

`/briosa.AnalysisOperations/GetMeasurementWeatherData` · Operation ID: `analysis_operations.get_measurement_weather_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1 | `temperature` | `optional double` | Temperature (deg F) | — |
| Result | 2 | `pressure` | `optional double` | Pressure (in. Hg) | — |
| Result | 3 | `humidity` | `optional double` | Humidity (% RH) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetMeasurementWeatherData(GetMeasurementWeatherDataRequest) returns (GetMeasurementWeatherDataResult);

message GetMeasurementWeatherDataRequest {
  optional PointName point_name = 1;
}

message GetMeasurementWeatherDataResult {
  optional double temperature = 1;
  optional double pressure = 2;
  optional double humidity = 3;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in inches of mercury. |
| `humidity` | Relative humidity in percent. |

## Get Number of Collections {/* #get-number-of-collections */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-collections)

`/briosa.AnalysisOperations/GetNumberOfCollections` · Operation ID: `analysis_operations.get_number_of_collections`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `total_count` | `optional int32` | Total Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Number of Frames In Frame Set {/* #get-number-of-frames-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set)

`/briosa.AnalysisOperations/GetNumberOfFramesInFrameSet` · Operation ID: `analysis_operations.get_number_of_frames_in_frame_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set_container` | `optional CollectionObjectName` | Frame Set Container | Required |
| Result | 1 | `total_count` | `optional int32` | Total Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Number of Points in Group {/* #get-number-of-points-in-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group)

`/briosa.AnalysisOperations/GetNumberOfPointsInGroup` · Operation ID: `analysis_operations.get_number_of_points_in_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Result | 1 | `total_count` | `optional int32` | Total Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Number of Points In Point Set {/* #get-number-of-points-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set)

`/briosa.AnalysisOperations/GetNumberOfPointsInPointSet` · Operation ID: `analysis_operations.get_number_of_points_in_point_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_set_container` | `optional CollectionObjectName` | Point Set Container | Required |
| Result | 1 | `total_count` | `optional int32` | Total Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Object Reporting Frame {/* #get-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame)

`/briosa.AnalysisOperations/GetObjectReportingFrame` · Operation ID: `analysis_operations.get_object_reporting_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Result | 1 | `reporting_frame` | `optional CollectionObjectName` | Reporting Frame | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Plane Properties {/* #get-plane-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-plane-properties)

`/briosa.AnalysisOperations/GetPlaneProperties` · Operation ID: `analysis_operations.get_plane_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_name` | `optional CollectionObjectName` | Plane Name | Required |
| Result | 1 | `normal_direction` | `optional Vector` | Normal Direction | — |
| Result | 2 | `point_on_plane` | `optional Vector` | Point on Plane | — |
| Result | 3 | `d_parameter` | `optional double` | D Parameter | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Point Coordinate {/* #get-point-coordinate */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate)

`/briosa.AnalysisOperations/GetPointCoordinate` · Operation ID: `analysis_operations.get_point_coordinate`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1 | `vector_representation` | `optional Vector` | Vector Representation | — |
| Result | 2 | `x_value` | `optional double` | X Value | — |
| Result | 3 | `y_value` | `optional double` | Y Value | — |
| Result | 4 | `z_value` | `optional double` | Z Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Point Coordinate (Cylindrical) {/* #get-point-coordinate-cylindrical */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical)

`/briosa.AnalysisOperations/GetPointCoordinateCylindrical` · Operation ID: `analysis_operations.get_point_coordinate_cylindrical`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1 | `radius_value` | `optional double` | Radius Value | — |
| Result | 2 | `theta_value` | `optional double` | Theta Value | — |
| Result | 3 | `z_value` | `optional double` | Z Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Point Coordinate (Polar) {/* #get-point-coordinate-polar */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar)

`/briosa.AnalysisOperations/GetPointCoordinatePolar` · Operation ID: `analysis_operations.get_point_coordinate_polar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1 | `radius_value` | `optional double` | Radius Value | — |
| Result | 2 | `theta_value` | `optional double` | Theta Value | — |
| Result | 3 | `phi_value` | `optional double` | Phi Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Point Properties {/* #get-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-properties)

`/briosa.AnalysisOperations/GetPointProperties` · Operation ID: `analysis_operations.get_point_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1 | `planar_offset` | `optional double` | Planar Offset | — |
| Result | 2 | `radial_offset` | `optional double` | Radial Offset | — |
| Result | 3 | `ux` | `optional double` | Ux | — |
| Result | 4 | `uy` | `optional double` | Uy | — |
| Result | 5 | `uz` | `optional double` | Uz | — |
| Result | 6 | `umag` | `optional double` | Umag | — |
| Result | 7 | `position_tolerance` | `optional ToleranceVectorOptions` | Position Tolerance | — |
| Result | 8 | `component_weights` | `optional Vector` | Component Weights | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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
  optional ToleranceVectorOptions position_tolerance = 7;
  optional Vector component_weights = 8;
  MpExecutionDetails execution = 1000;
}
```

## Get Point To Line Distance {/* #get-point-to-line-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance)

`/briosa.AnalysisOperations/GetPointToLineDistance` · Operation ID: `analysis_operations.get_point_to_line_distance`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point | Required |
| Request | 2 | `line` | `optional CollectionObjectName` | Line | Required |
| Result | 1 | `vector_representation` | `optional Vector` | Vector Representation | — |
| Result | 2 | `x_value` | `optional double` | X Value | — |
| Result | 3 | `y_value` | `optional double` | Y Value | — |
| Result | 4 | `z_value` | `optional double` | Z Value | — |
| Result | 5 | `magnitude` | `optional double` | Magnitude | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Point To Point Distance {/* #get-point-to-point-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance)

`/briosa.AnalysisOperations/GetPointToPointDistance` · Operation ID: `analysis_operations.get_point_to_point_distance`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `first_point` | `optional PointName` | First Point | Required |
| Request | 2 | `second_point` | `optional PointName` | Second Point | Required |
| Result | 1 | `vector_representation` | `optional Vector` | Vector Representation | — |
| Result | 2 | `x_value` | `optional double` | X Value | — |
| Result | 3 | `y_value` | `optional double` | Y Value | — |
| Result | 4 | `z_value` | `optional double` | Z Value | — |
| Result | 5 | `magnitude` | `optional double` | Magnitude | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Point Tolerance {/* #get-point-tolerance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-tolerance)

`/briosa.AnalysisOperations/GetPointTolerance` · Operation ID: `analysis_operations.get_point_tolerance`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
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
  optional ToleranceVectorOptions vector_tolerance = 17;
  MpExecutionDetails execution = 1000;
}
```

## Get Slot Properties {/* #get-slot-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-slot-properties)

`/briosa.AnalysisOperations/GetSlotProperties` · Operation ID: `analysis_operations.get_slot_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `slot_name` | `optional CollectionObjectName` | Slot Name | Required |
| Result | 1 | `slot_transform` | `optional Transform` | Slot Transform (in working coordinates | — |
| Result | 2 | `center` | `optional Vector` | Center (in working coordinates) | — |
| Result | 3 | `normal_direction` | `optional Vector` | Normal Direction (in working coordinates) | — |
| Result | 4 | `slot_length` | `optional double` | Slot Length | — |
| Result | 5 | `slot_width` | `optional double` | Slot Width | — |
| Result | 6 | `round_slot_type` | `optional bool` | Round Slot Type | — |
| Result | 7 | `centerline_pt_1` | `optional Vector` | Centerline Pt. 1 (in working coordinates) | — |
| Result | 8 | `centerline_pt_2` | `optional Vector` | Centerline Pt. 2 (in working coordinates) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetSlotProperties(GetSlotPropertiesRequest) returns (GetSlotPropertiesResult);

message GetSlotPropertiesRequest {
  optional CollectionObjectName slot_name = 1;
}

message GetSlotPropertiesResult {
  optional Transform slot_transform = 1;
  optional Vector center = 2;
  optional Vector normal_direction = 3;
  optional double slot_length = 4;
  optional double slot_width = 5;
  optional bool round_slot_type = 6;
  optional Vector centerline_pt_1 = 7;
  optional Vector centerline_pt_2 = 8;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `slot_transform` | Expressed in working coordinates. |
| `center` | Expressed in working coordinates. |
| `normal_direction` | Expressed in working coordinates. |
| `centerline_pt_1` | Expressed in working coordinates. |
| `centerline_pt_2` | Expressed in working coordinates. |

## Get Sphere Properties {/* #get-sphere-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-sphere-properties)

`/briosa.AnalysisOperations/GetSphereProperties` · Operation ID: `analysis_operations.get_sphere_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sphere_name` | `optional CollectionObjectName` | Sphere Name | Required |
| Result | 1 | `center_coordinate` | `optional Vector` | Center Coordinate | — |
| Result | 2 | `radius` | `optional double` | Radius | — |
| Result | 3 | `diameter` | `optional double` | Diameter | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Surface Physical Stats {/* #get-surface-physical-stats */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats)

`/briosa.AnalysisOperations/GetSurfacePhysicalStats` · Operation ID: `analysis_operations.get_surface_physical_stats`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_name` | `optional CollectionObjectName` | Surface Name | Required |
| Result | 1 | `volume` | `optional double` | Volume | — |
| Result | 2 | `area` | `optional double` | Area | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Timestamp for i-th Frame in Frame Set {/* #get-timestamp-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set)

`/briosa.AnalysisOperations/GetTimestampForIthFrameInFrameSet` · Operation ID: `analysis_operations.get_timestamp_for_ith_frame_in_frame_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set` | `optional CollectionObjectName` | Frame Set | Required |
| Request | 2 | `frame_set_index` | `optional int32` | Frame Set Index | 0 |
| Result | 1 | `timestamp` | `optional double` | Timestamp | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Timestamp for i-th Point in Point Set {/* #get-timestamp-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set)

`/briosa.AnalysisOperations/GetTimestampForIthPointInPointSet` · Operation ID: `analysis_operations.get_timestamp_for_ith_point_in_point_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_set` | `optional CollectionObjectName` | Point Set | Required |
| Request | 2 | `point_set_index` | `optional int32` | Point Set Index | 0 |
| Result | 1 | `timestamp` | `optional double` | Timestamp | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Torus Properties {/* #get-torus-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-torus-properties)

`/briosa.AnalysisOperations/GetTorusProperties` · Operation ID: `analysis_operations.get_torus_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `torus_name` | `optional CollectionObjectName` | Torus Name | Required |
| Result | 1 | `center_coordinate` | `optional Vector` | Center Coordinate | — |
| Result | 2 | `normal_direction` | `optional Vector` | Normal Direction | — |
| Result | 3 | `major_radius` | `optional double` | Major Radius | — |
| Result | 4 | `minor_radius` | `optional double` | Minor Radius | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Transform for i-th Frame in Frame Set {/* #get-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set)

`/briosa.AnalysisOperations/GetTransformForIthFrameInFrameSet` · Operation ID: `analysis_operations.get_transform_for_ith_frame_in_frame_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set` | `optional CollectionObjectName` | Frame Set | Required |
| Request | 2 | `frame_set_index` | `optional int32` | Frame Set Index | 0 |
| Result | 1 | `transform_in_working` | `optional Transform` | Transform in Working | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Group To Surface Fit {/* #group-to-surface-fit */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit)

`/briosa.AnalysisOperations/GroupToSurfaceFit` · Operation ID: `analysis_operations.group_to_surface_fit`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_to_fit` | `optional CollectionObjectName` | Group to Fit | Required |
| Request | 2 | `surface` | `optional CollectionObjectName` | Surface | Required |
| Request | 3 | `do_conventional_fit` | `optional bool` | Do Conventional Fit | false |
| Request | 4 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0.000000 |
| Request | 5 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `optimum_transform` | `optional WorldTransform` | Optimum Transform | — |
| Result | 2 | `rms_deviation` | `optional double` | RMS Deviation | — |
| Result | 3 | `maximum_absolute_deviation` | `optional double` | Maximum Absolute Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GroupToSurfaceFit(GroupToSurfaceFitRequest) returns (GroupToSurfaceFitResult);

message GroupToSurfaceFitRequest {
  optional CollectionObjectName group_to_fit = 1;
  optional CollectionObjectName surface = 2;
  optional bool do_conventional_fit = 3;
  optional double rms_tolerance = 4;
  optional double maximum_absolute_tolerance = 5;
}

message GroupToSurfaceFitResult {
  optional WorldTransform optimum_transform = 1;
  optional double rms_deviation = 2;
  optional double maximum_absolute_deviation = 3;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Import Geometry Fit Profiles {/* #import-geometry-fit-profiles */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles)

`/briosa.AnalysisOperations/ImportGeometryFitProfiles` · Operation ID: `analysis_operations.import_geometry_fit_profiles`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_fit_profiles_file_path` | `optional FileReference` | Geometry Fit Profiles File Path | Required |
| Request | 2 | `overwrite_profiles_with_same_name` | `optional bool` | Overwrite Profiles with Same Name? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Is Object of Type {/* #is-object-of-type */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#is-object-of-type)

`/briosa.AnalysisOperations/IsObjectOfType` · Operation ID: `analysis_operations.is_object_of_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Request | 2 | `object_type` | `optional ObjectType` | Object Type | Any |
| Result | 1 | `resultant` | `optional bool` | Resultant | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Make Circle Fit Profile {/* #make-circle-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile)

`/briosa.AnalysisOperations/MakeCircleFitProfile` · Operation ID: `analysis_operations.make_circle_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `optional MeasuredSideForRadialOffset` | Measured Side for Radial Offset | Outside |
| Request | 3 | `override_radial_offset` | `optional double` | Override Radial Offset (-1.0 use current) | -1.000000 |
| Request | 4 | `measured_side_for_planar_offset` | `optional MeasuredSideForPlanarOffset` | Measured Side for Planar Offset | Above Plane |
| Request | 5 | `override_planar_offset` | `optional double` | Override Planar Offset (-1.0 use current) | -1.000000 |
| Request | 6 | `planar_offset_direction` | `optional NormalDirection` | Planar Offset Direction | Probing Direction |
| Request | 7 | `lock_radius` | `optional double` | Lock Radius (-1.0 do not lock) | -1.000000 |
| Request | 8 | `circle_computation_technique` | `optional CompTechnique` | Circle Computation Technique | Standard |
| Request | 9 | `reverse_normal_vector_after_fit` | `optional bool` | Reverse Normal Vector after fit? | false |
| Request | 10 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 11 | `cardinal_pt_1_center` | `optional bool` | Cardinal Pt.1: Center? | true |
| Request | 12 | `cardinal_pt_2_point_on_normal` | `optional bool` | Cardinal Pt.2: Point on Normal? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCircleFitProfile(MakeCircleFitProfileRequest) returns (MakeCircleFitProfileResult);

message MakeCircleFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset = 3;
  optional MeasuredSideForPlanarOffset measured_side_for_planar_offset = 4;
  optional double override_planar_offset = 5;
  optional NormalDirection planar_offset_direction = 6;
  optional double lock_radius = 7;
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Make Cone Fit Profile {/* #make-cone-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile)

`/briosa.AnalysisOperations/MakeConeFitProfile` · Operation ID: `analysis_operations.make_cone_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `optional MeasuredSideForRadialOffset` | Measured Side for Radial Offset | Outside |
| Request | 3 | `override_radial_offset` | `optional double` | Override Radial Offset (-1.0 use current) | -1.000000 |
| Request | 4 | `lock_angle_in_degrees` | `optional double` | Lock Angle in degrees (-1.0 do not lock) | -1.000000 |
| Request | 5 | `use_exhaustive_search` | `optional bool` | Use Exhaustive Search? | true |
| Request | 6 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 7 | `cardinal_pt_1_vertex` | `optional bool` | Cardinal Pt.1: Vertex? | true |
| Request | 8 | `cardinal_pt_2_point_on_axis` | `optional bool` | Cardinal Pt.2: Point on Axis? | true |
| Request | 9 | `cardinal_pt_3_cut_point_on_axis` | `optional bool` | Cardinal Pt.3: Cut Point on Axis? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeConeFitProfile(MakeConeFitProfileRequest) returns (MakeConeFitProfileResult);

message MakeConeFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset = 3;
  optional double lock_angle_in_degrees = 4;
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_angle_in_degrees` | -1.0 leaves this dimension unlocked. |

## Make Cylinder Fit Profile {/* #make-cylinder-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile)

`/briosa.AnalysisOperations/MakeCylinderFitProfile` · Operation ID: `analysis_operations.make_cylinder_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `optional MeasuredSideForRadialOffset` | Measured Side for Radial Offset | Outside |
| Request | 3 | `override_radial_offset` | `optional double` | Override Radial Offset (-1.0 use current) | -1.000000 |
| Request | 4 | `lock_radius` | `optional double` | Lock Radius (-1.0 do not lock) | -1.000000 |
| Request | 5 | `locked_radius_fit_method` | `optional FitMethod` | Locked Radius Fit Method | Minimum RMS |
| Request | 11 | `cylinder_computation_technique` | `optional CompTechnique` | Cylinder Computation Technique | Standard |
| Request | 12 | `use_exhaustive_search` | `optional bool` | Use Exhaustive Search? | false |
| Request | 13 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 14 | `cardinal_pt_1_begin_pt` | `optional bool` | Cardinal Pt.1: Begin Pt? | true |
| Request | 15 | `cardinal_pt_2_end_pt` | `optional bool` | Cardinal Pt.2: End Pt? | true |
| Request | 16 | `cardinal_pt_3_center` | `optional bool` | Cardinal Pt.3: Center? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCylinderFitProfile(MakeCylinderFitProfileRequest) returns (MakeCylinderFitProfileResult);

message MakeCylinderFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset = 3;
  optional double lock_radius = 4;
  optional FitMethod locked_radius_fit_method = 5;
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Make Ellipse Fit Profile {/* #make-ellipse-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile)

`/briosa.AnalysisOperations/MakeEllipseFitProfile` · Operation ID: `analysis_operations.make_ellipse_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `optional MeasuredSideForRadialOffset` | Measured Side for Radial Offset | Outside |
| Request | 3 | `override_radial_offset` | `optional double` | Override Radial Offset (-1.0 use current) | -1.000000 |
| Request | 4 | `measured_side_for_planar_offset` | `optional MeasuredSideForPlanarOffset` | Measured Side for Planar Offset | Above Plane |
| Request | 5 | `override_planar_offset` | `optional double` | Override Planar Offset (-1.0 use current) | -1.000000 |
| Request | 6 | `planar_offset_direction` | `optional NormalDirection` | Planar Offset Direction | Probing Direction |
| Request | 7 | `reverse_normal_vector_after_fit` | `optional bool` | Reverse Normal Vector after fit? | false |
| Request | 8 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 9 | `cardinal_pt_1_center` | `optional bool` | Cardinal Pt.1: Center? | true |
| Request | 10 | `cardinal_pt_2_point_on_normal` | `optional bool` | Cardinal Pt.2: Point on Normal? | true |
| Request | 11 | `cardinal_pt_3_focal_pt_1` | `optional bool` | Cardinal Pt.3: Focal Pt.1? | true |
| Request | 12 | `cardinal_pt_4_focal_pt_2` | `optional bool` | Cardinal Pt.4: Focal Pt.2? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeEllipseFitProfile(MakeEllipseFitProfileRequest) returns (MakeEllipseFitProfileResult);

message MakeEllipseFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset = 3;
  optional MeasuredSideForPlanarOffset measured_side_for_planar_offset = 4;
  optional double override_planar_offset = 5;
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Line Fit Profile {/* #make-line-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile)

`/briosa.AnalysisOperations/MakeLineFitProfile` · Operation ID: `analysis_operations.make_line_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `reverse_normal_vector_after_fit` | `optional bool` | Reverse Normal Vector after fit? | false |
| Request | 3 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 4 | `cardinal_pt_1_point_a` | `optional bool` | Cardinal Pt.1: Point A? | true |
| Request | 5 | `cardinal_pt_2_point_b` | `optional bool` | Cardinal Pt.2: Point B? | true |
| Request | 6 | `cardinal_pt_3_mid_point` | `optional bool` | Cardinal Pt.3: Mid Point? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Make Paraboloid Fit Profile {/* #make-paraboloid-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile)

`/briosa.AnalysisOperations/MakeParaboloidFitProfile` · Operation ID: `analysis_operations.make_paraboloid_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `optional MeasuredSideForRadialOffset` | Measured Side for Radial Offset | Outside |
| Request | 3 | `override_radial_offset` | `optional double` | Override Radial Offset (-1.0 use current) | -1.000000 |
| Request | 4 | `lock_focal_length` | `optional double` | Lock Focal Length (-1.0 do not lock) | -1.000000 |
| Request | 5 | `degree_of_freedom` | `optional DegreeOfFreedom` | Degree of Freedom | Any |
| Request | 6 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 7 | `cardinal_pt_1_vertex` | `optional bool` | Cardinal Pt.1: Vertex? | true |
| Request | 8 | `cardinal_pt_2_focal_point` | `optional bool` | Cardinal Pt.2: Focal Point? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeParaboloidFitProfile(MakeParaboloidFitProfileRequest) returns (MakeParaboloidFitProfileResult);

message MakeParaboloidFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset = 3;
  optional double lock_focal_length = 4;
  optional DegreeOfFreedom degree_of_freedom = 5;
  optional bool make_cardinal_points = 6;
  optional bool cardinal_pt_1_vertex = 7;
  optional bool cardinal_pt_2_focal_point = 8;
}

message MakeParaboloidFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_focal_length` | -1.0 leaves this dimension unlocked. |

## Make Plane Fit Profile {/* #make-plane-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile)

`/briosa.AnalysisOperations/MakePlaneFitProfile` · Operation ID: `analysis_operations.make_plane_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `measured_side_for_planar_offset` | `optional MeasuredSideForPlanarOffset` | Measured Side for Planar Offset | Above Plane |
| Request | 3 | `override_planar_offset` | `optional double` | Override Planar Offset (-1.0 use current) | -1.000000 |
| Request | 4 | `planar_offset_direction` | `optional NormalDirection` | Planar Offset Direction | Probing Direction |
| Request | 5 | `reverse_normal_vector_after_fit` | `optional bool` | Reverse Normal Vector after fit? | false |
| Request | 6 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 7 | `cardinal_pt_1_centroid` | `optional bool` | Cardinal Pt.1: Centroid? | true |
| Request | 8 | `cardinal_pt_2_point_on_normal` | `optional bool` | Cardinal Pt.2: Point on Normal? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePlaneFitProfile(MakePlaneFitProfileRequest) returns (MakePlaneFitProfileResult);

message MakePlaneFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForPlanarOffset measured_side_for_planar_offset = 2;
  optional double override_planar_offset = 3;
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Slot Fit Profile {/* #make-slot-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile)

`/briosa.AnalysisOperations/MakeSlotFitProfile` · Operation ID: `analysis_operations.make_slot_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `optional MeasuredSideForRadialOffset` | Measured Side for Radial Offset | Outside |
| Request | 3 | `override_radial_offset` | `optional double` | Override Radial Offset (-1.0 use current) | -1.000000 |
| Request | 4 | `measured_side_for_planar_offset` | `optional MeasuredSideForPlanarOffset` | Measured Side for Planar Offset | Above Plane |
| Request | 5 | `override_planar_offset` | `optional double` | Override Planar Offset (-1.0 use current) | -1.000000 |
| Request | 6 | `planar_offset_direction` | `optional NormalDirection` | Planar Offset Direction | Probing Direction |
| Request | 7 | `slot_type` | `optional SlotType` | Slot Type | Round |
| Request | 8 | `slot_computation_technique` | `optional CompTechnique` | Slot Computation Technique | Standard |
| Request | 9 | `reverse_normal_vector_after_fit` | `optional bool` | Reverse Normal Vector after fit? | false |
| Request | 10 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 11 | `cardinal_pt_1_center` | `optional bool` | Cardinal Pt.1: Center? | true |
| Request | 12 | `cardinal_pt_2_point_on_normal` | `optional bool` | Cardinal Pt.2: Point on Normal? | true |
| Request | 13 | `cardinal_pt_3_centerline_pt_1` | `optional bool` | Cardinal Pt.3: Centerline Pt.1? | true |
| Request | 14 | `cardinal_pt_4_centerline_pt_2` | `optional bool` | Cardinal Pt.4: Centerline Pt.2? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeSlotFitProfile(MakeSlotFitProfileRequest) returns (MakeSlotFitProfileResult);

message MakeSlotFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset = 3;
  optional MeasuredSideForPlanarOffset measured_side_for_planar_offset = 4;
  optional double override_planar_offset = 5;
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Sphere Fit Profile {/* #make-sphere-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile)

`/briosa.AnalysisOperations/MakeSphereFitProfile` · Operation ID: `analysis_operations.make_sphere_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 2 | `measured_side_for_radial_offset` | `optional MeasuredSideForRadialOffset` | Measured Side for Radial Offset | Outside |
| Request | 3 | `override_radial_offset` | `optional double` | Override Radial Offset (-1.0 use current) | -1.000000 |
| Request | 4 | `lock_radius` | `optional double` | Lock Radius (-1.0 do not lock) | -1.000000 |
| Request | 5 | `make_cardinal_points` | `optional bool` | Make Cardinal Points? | true |
| Request | 6 | `cardinal_pt_1_center` | `optional bool` | Cardinal Pt.1: Center? | true |
| Request | 7 | `computation_method` | `optional SphereFitComputationMode` | Computation Method | Standard |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeSphereFitProfile(MakeSphereFitProfileRequest) returns (MakeSphereFitProfileResult);

message MakeSphereFitProfileRequest {
  optional string fit_profile_name = 1;
  optional MeasuredSideForRadialOffset measured_side_for_radial_offset = 2;
  optional double override_radial_offset = 3;
  optional double lock_radius = 4;
  optional bool make_cardinal_points = 5;
  optional bool cardinal_pt_1_center = 6;
  optional SphereFitComputationMode computation_method = 7;
}

message MakeSphereFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Mushroom Target Hole Inspection {/* #mushroom-target-hole-inspection */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection)

`/briosa.AnalysisOperations/MushroomTargetHoleInspection` · Operation ID: `analysis_operations.mushroom_target_hole_inspection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name_prefix_for_intermediate_constructions` | `optional string` | Name Prefix for Intermediate Constructions | Empty |
| Request | 2 | `sphere_points_group_name` | `optional CollectionObjectName` | Sphere Points Group Name | Required |
| Request | 3 | `sphere_target_radius` | `optional double` | Sphere Target Radius | 0.000000 |
| Request | 4 | `target_contact_plane` | `optional CollectionObjectName` | Target Contact Plane | Required |
| Request | 5 | `point_to_create_at_hole` | `optional PointName` | Point To Create at Hole | Required |
| Result | 1 | `sphere_fit_rms_error` | `optional double` | Sphere Fit RMS Error | — |
| Result | 2 | `sphere_fit_max_error` | `optional double` | Sphere Fit Max Error | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Patch Normal Shift - Hole / Pin {/* #patch-normal-shift---hole--pin */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin)

`/briosa.AnalysisOperations/PatchNormalShiftHolePin` · Operation ID: `analysis_operations.patch_normal_shift_hole_pin`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_points_group_name` | `optional CollectionObjectName` | Plane Points Group Name | Required |
| Request | 2 | `perimeter_points_group_name` | `optional CollectionObjectName` | Perimeter Points Group Name | Required |
| Request | 3 | `resulting_point_name` | `optional PointName` | Resulting Point Name | Required |
| Request | 4 | `additional_material_thickness` | `optional double` | Additional Material Thickness | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Patch Normal Shift - Point {/* #patch-normal-shift---point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point)

`/briosa.AnalysisOperations/PatchNormalShiftPoint` · Operation ID: `analysis_operations.patch_normal_shift_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_points_group_name` | `optional CollectionObjectName` | Plane Points Group Name | Required |
| Request | 2 | `point_to_shift` | `optional PointName` | Point to Shift | Required |
| Request | 3 | `resulting_point_name` | `optional PointName` | Resulting Point Name | Required |
| Request | 4 | `additional_material_thickness` | `optional double` | Additional Material Thickness | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Query Clouds to Objects {/* #query-clouds-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects)

`/briosa.AnalysisOperations/QueryCloudsToObjects` · Operation ID: `analysis_operations.query_clouds_to_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `object_names` | `repeated CollectionObjectName` | Object Names | Required |
| Request | 3 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name | Required |
| Request | 4 | `projection_options` | `optional ProjectionOptions` | Projection Options | Object To Probe Vectors |
| Request | 5 | `proximity` | `optional double` | Proximity | 0.000000 |
| Request | 6 | `skip_factor` | `optional int32` | Skip Factor | 0 |
| Request | 7 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0.000000 |
| Request | 8 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `rms_deviation` | `optional double` | RMS Deviation | — |
| Result | 2 | `maximum_absolute_deviation` | `optional double` | Maximum Absolute Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc QueryCloudsToObjects(QueryCloudsToObjectsRequest) returns (QueryCloudsToObjectsResult);

message QueryCloudsToObjectsRequest {
  repeated CollectionObjectName cloud_names = 1;
  repeated CollectionObjectName object_names = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional ProjectionOptions projection_options = 4;
  optional double proximity = 5;
  optional int32 skip_factor = 6;
  optional double rms_tolerance = 7;
  optional double maximum_absolute_tolerance = 8;
}

message QueryCloudsToObjectsResult {
  optional double rms_deviation = 1;
  optional double maximum_absolute_deviation = 2;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Clouds to Surface {/* #query-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface)

`/briosa.AnalysisOperations/QueryCloudsToSurface` · Operation ID: `analysis_operations.query_clouds_to_surface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `filter_surface_name` | `optional CollectionObjectName` | Filter Surface Name | Required |
| Request | 3 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name | Required |
| Request | 4 | `projection_options` | `optional ProjectionOptions` | Projection Options | Object To Probe Vectors |
| Request | 5 | `proximity` | `optional double` | Proximity | 0.000000 |
| Request | 6 | `skip_factor` | `optional int32` | Skip Factor | 0 |
| Request | 7 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0.000000 |
| Request | 8 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `rms_deviation` | `optional double` | RMS Deviation | — |
| Result | 2 | `maximum_absolute_deviation` | `optional double` | Maximum Absolute Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc QueryCloudsToSurface(QueryCloudsToSurfaceRequest) returns (QueryCloudsToSurfaceResult);

message QueryCloudsToSurfaceRequest {
  repeated CollectionObjectName cloud_names = 1;
  optional CollectionObjectName filter_surface_name = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional ProjectionOptions projection_options = 4;
  optional double proximity = 5;
  optional int32 skip_factor = 6;
  optional double rms_tolerance = 7;
  optional double maximum_absolute_tolerance = 8;
}

message QueryCloudsToSurfaceResult {
  optional double rms_deviation = 1;
  optional double maximum_absolute_deviation = 2;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Frame to Frame {/* #query-frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame)

`/briosa.AnalysisOperations/QueryFrameToFrame` · Operation ID: `analysis_operations.query_frame_to_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_frame_name` | `optional CollectionObjectName` | Reference Frame Name | Required |
| Request | 2 | `corresponding_frame_name` | `optional CollectionObjectName` | Corresponding Frame Name | Required |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `rx` | `optional double` | Rx (Roll) | — |
| Result | 5 | `ry` | `optional double` | Ry (Pitch) | — |
| Result | 6 | `rz` | `optional double` | Rz (Yaw) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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
  optional double rx = 4;
  optional double ry = 5;
  optional double rz = 6;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rx` | MP qualifier: Roll. |
| `ry` | MP qualifier: Pitch. |
| `rz` | MP qualifier: Yaw. |

## Query Groups to Objects {/* #query-groups-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects)

`/briosa.AnalysisOperations/QueryGroupsToObjects` · Operation ID: `analysis_operations.query_groups_to_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name_list` | `repeated CollectionObjectName` | Group Name List (Groups to Project) | Required |
| Request | 2 | `object_name_list` | `repeated CollectionObjectName` | Object Name List (Objects to Project to) | Required |
| Request | 3 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name | Required |
| Request | 4 | `projection_options` | `optional ProjectionOptions` | Projection Options | Object To Probe Vectors |
| Request | 5 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0.000000 |
| Request | 6 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0.000000 |
| Request | 7 | `show_results_dialog` | `optional bool` | Show Results Dialog? | false |
| Result | 1 | `rms_deviation` | `optional double` | RMS Deviation | — |
| Result | 2 | `max_absolute_deviation` | `optional double` | Max Absolute Deviation | — |
| Result | 3 | `average_deviation` | `optional double` | Average Deviation | — |
| Result | 4 | `standard_deviation` | `optional double` | Standard Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc QueryGroupsToObjects(QueryGroupsToObjectsRequest) returns (QueryGroupsToObjectsResult);

message QueryGroupsToObjectsRequest {
  repeated CollectionObjectName group_name_list = 1;
  repeated CollectionObjectName object_name_list = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional ProjectionOptions projection_options = 4;
  optional double rms_tolerance = 5;
  optional double maximum_absolute_tolerance = 6;
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `group_name_list` | MP qualifier: Groups to Project. |
| `object_name_list` | MP qualifier: Objects to Project to. |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Point to Objects {/* #query-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-objects)

`/briosa.AnalysisOperations/QueryPointToObjects` · Operation ID: `analysis_operations.query_point_to_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 2 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Request | 3 | `ignore_target_offset` | `optional bool` | Ignore Target Offset | false |
| Result | 1 | `d_x` | `optional double` | dX | — |
| Result | 2 | `d_y` | `optional double` | dY | — |
| Result | 3 | `d_z` | `optional double` | dZ | — |
| Result | 4 | `d_mag` | `optional double` | dMag | — |
| Result | 5 | `resultant_object` | `optional CollectionObjectName` | Resultant Object | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Query Point to Point Along Curve {/* #query-point-to-point-along-curve */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve)

`/briosa.AnalysisOperations/QueryPointToPointAlongCurve` · Operation ID: `analysis_operations.query_point_to_point_along_curve`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `value_1st_point` | `optional PointName` | 1st Point | Required |
| Request | 2 | `value_2nd_point` | `optional PointName` | 2nd Point | Required |
| Request | 3 | `curve` | `optional CollectionObjectName` | Curve | Required |
| Result | 1 | `distance_along_curve` | `optional double` | Distance Along Curve | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Query Points to Circle {/* #query-points-to-circle */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-circle)

`/briosa.AnalysisOperations/QueryPointsToCircle` · Operation ID: `analysis_operations.query_points_to_circle`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `optional CollectionObjectName` | Circle Name | Required |
| Request | 2 | `point_group_name` | `optional CollectionObjectName` | Point Group Name | Required |
| Request | 3 | `is_inside_measurement` | `optional bool` | Is Inside Measurement | true |
| Request | 4 | `auto_scale_vectors_to_of_radius` | `optional int32` | Auto Scale Vectors to % of Radius | 40 |
| Request | 5 | `vector_group_name_for_radial` | `optional CollectionObjectName` | Vector Group Name for Radial | Required |
| Request | 6 | `vector_group_name_for_planar` | `optional CollectionObjectName` | Vector Group Name for Planar | Required |
| Request | 7 | `vector_group_name_for_combined` | `optional CollectionObjectName` | Vector Group Name for Combined | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Query Points to Objects {/* #query-points-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-objects)

`/briosa.AnalysisOperations/QueryPointsToObjects` · Operation ID: `analysis_operations.query_points_to_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 2 | `object_name_list` | `repeated CollectionObjectName` | Object Name List (Objects to Project to) | Required |
| Request | 3 | `resulting_object_name` | `optional CollectionObjectName` | Resulting Object Name | Required |
| Request | 4 | `projection_options` | `optional ProjectionOptions` | Projection Options | Object To Probe Vectors |
| Request | 5 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0.000000 |
| Request | 6 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0.000000 |
| Request | 7 | `show_results_dialog` | `optional bool` | Show Results Dialog? | false |
| Result | 1 | `rms_deviation` | `optional double` | RMS Deviation | — |
| Result | 2 | `max_absolute_deviation` | `optional double` | Max Absolute Deviation | — |
| Result | 3 | `average_deviation` | `optional double` | Average Deviation | — |
| Result | 4 | `standard_deviation` | `optional double` | Standard Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc QueryPointsToObjects(QueryPointsToObjectsRequest) returns (QueryPointsToObjectsResult);

message QueryPointsToObjectsRequest {
  repeated PointName point_names = 1;
  repeated CollectionObjectName object_name_list = 2;
  optional CollectionObjectName resulting_object_name = 3;
  optional ProjectionOptions projection_options = 4;
  optional double rms_tolerance = 5;
  optional double maximum_absolute_tolerance = 6;
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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `object_name_list` | MP qualifier: Objects to Project to. |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Points to Single Point {/* #query-points-to-single-point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point)

`/briosa.AnalysisOperations/QueryPointsToSinglePoint` · Operation ID: `analysis_operations.query_points_to_single_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 2 | `single_point` | `optional PointName` | Single Point | Required |
| Request | 3 | `show_vector_properties` | `optional bool` | Show Vector Properties? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Re-Compute Calculated Items {/* #re-compute-calculated-items */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items)

`/briosa.AnalysisOperations/ReComputeCalculatedItems` · Operation ID: `analysis_operations.re_compute_calculated_items`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `targets_from_shots` | `optional bool` | Targets from Shots | false |
| Request | 2 | `hidden_points` | `optional bool` | Hidden Points | false |
| Request | 3 | `relationships` | `optional bool` | Relationships | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ReComputeCalculatedItems(ReComputeCalculatedItemsRequest) returns (ReComputeCalculatedItemsResult);

message ReComputeCalculatedItemsRequest {
  optional bool targets_from_shots = 1;
  optional bool hidden_points = 2;
  optional bool relationships = 3;
}

message ReComputeCalculatedItemsResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename points based on inter-point distance to reference points {/* #rename-points-based-on-inter-point-distance-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points)

`/briosa.AnalysisOperations/RenamePointsBasedOnInterPointDistanceToReferencePoints` · Operation ID: `analysis_operations.rename_points_based_on_inter_point_distance_to_reference_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group_name` | `optional CollectionObjectName` | Reference Group Name | Required |
| Request | 2 | `group_to_rename_points` | `optional CollectionObjectName` | Group To Rename Points | Required |
| Request | 3 | `distance_threshold` | `optional double` | Distance Threshold | 0.000000 |
| Request | 4 | `verify_results` | `optional bool` | Verify Results? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Rename points based on proximity to reference points {/* #rename-points-based-on-proximity-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points)

`/briosa.AnalysisOperations/RenamePointsBasedOnProximityToReferencePoints` · Operation ID: `analysis_operations.rename_points_based_on_proximity_to_reference_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group_name` | `optional CollectionObjectName` | Reference Group Name | Required |
| Request | 2 | `group_to_rename_points` | `optional CollectionObjectName` | Group To Rename Points | Required |
| Request | 3 | `proximity_threshold` | `optional double` | Proximity Threshold | 0.000000 |
| Request | 4 | `verify_results` | `optional bool` | Verify Results? | false |
| Request | 5 | `rename_all_proximate_points` | `optional bool` | Rename All Proximate Points? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Reverse B-Splines {/* #reverse-b-splines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-b-splines)

`/briosa.AnalysisOperations/ReverseBSplines` · Operation ID: `analysis_operations.reverse_bsplines`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `b_spline_list` | `repeated CollectionObjectName` | B-Spline List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ReverseBSplines(ReverseBSplinesRequest) returns (ReverseBSplinesResult);

message ReverseBSplinesRequest {
  repeated CollectionObjectName b_spline_list = 1;
}

message ReverseBSplinesResult {
  MpExecutionDetails execution = 1000;
}
```

## Reverse Plane Normals {/* #reverse-plane-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals)

`/briosa.AnalysisOperations/ReversePlaneNormals` · Operation ID: `analysis_operations.reverse_plane_normals`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_list` | `repeated CollectionObjectName` | Plane List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ReversePlaneNormals(ReversePlaneNormalsRequest) returns (ReversePlaneNormalsResult);

message ReversePlaneNormalsRequest {
  repeated CollectionObjectName plane_list = 1;
}

message ReversePlaneNormalsResult {
  MpExecutionDetails execution = 1000;
}
```

## Reverse Surface Normals {/* #reverse-surface-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals)

`/briosa.AnalysisOperations/ReverseSurfaceNormals` · Operation ID: `analysis_operations.reverse_surface_normals`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_list` | `repeated CollectionObjectName` | Surface List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ReverseSurfaceNormals(ReverseSurfaceNormalsRequest) returns (ReverseSurfaceNormalsResult);

message ReverseSurfaceNormalsRequest {
  repeated CollectionObjectName surface_list = 1;
}

message ReverseSurfaceNormalsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Circle Properties {/* #set-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-circle-properties)

`/briosa.AnalysisOperations/SetCircleProperties` · Operation ID: `analysis_operations.set_circle_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `optional CollectionObjectName` | Circle Name | Required |
| Request | 2 | `center_coordinate` | `optional Vector` | Center Coordinate | Required |
| Request | 3 | `normal_direction` | `optional Vector` | Normal Direction | Required |
| Request | 4 | `radius` | `optional double` | Radius | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Cylinder Properties {/* #set-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties)

`/briosa.AnalysisOperations/SetCylinderProperties` · Operation ID: `analysis_operations.set_cylinder_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cylinder_name` | `optional CollectionObjectName` | Cylinder Name | Required |
| Request | 2 | `begin_coordinate` | `optional Vector` | Begin Coordinate | Required |
| Request | 3 | `axis_direction` | `optional Vector` | Axis Direction | Required |
| Request | 4 | `length` | `optional double` | Length | 0.000000 |
| Request | 5 | `diameter` | `optional double` | Diameter | 0.000000 |
| Request | 6 | `nominals_point_inward` | `optional bool` | Nominals Point Inward | true |
| Request | 7 | `facets` | `optional int32` | Facets | 32 |
| Request | 8 | `enable_theta_extent_display_mode` | `optional bool` | Enable Theta Extent Display Mode | true |
| Request | 9 | `theta_start_in_degrees` | `optional double` | Theta Start in Degrees | 0.000000 |
| Request | 10 | `theta_span_in_degrees` | `optional double` | Theta Span in Degrees | 360.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Default Colorization Options {/* #set-default-colorization-options */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options)

`/briosa.AnalysisOperations/SetDefaultColorizationOptions` · Operation ID: `analysis_operations.set_default_colorization_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `colorization_options` | `optional ColorizationOptions` | Colorization Options | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetDefaultColorizationOptions(SetDefaultColorizationOptionsRequest) returns (SetDefaultColorizationOptionsResult);

message SetDefaultColorizationOptionsRequest {
  optional ColorizationOptions colorization_options = 1;
}

message SetDefaultColorizationOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Geometry Relationship Fit Profile {/* #set-geometry-relationship-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile)

`/briosa.AnalysisOperations/SetGeometryRelationshipFitProfile` · Operation ID: `analysis_operations.set_geometry_relationship_fit_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geometry_type` | `optional GeometryType` | Geometry Type | Required |
| Request | 2 | `relationship_ref_list` | `repeated CollectionItemName` | Relationship Ref List | Required |
| Request | 3 | `fit_profile_name` | `optional string` | Fit Profile Name | Empty |
| Request | 4 | `apply_cardinal_point_settings` | `optional bool` | Apply Cardinal Point Settings | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetGeometryRelationshipFitProfile(SetGeometryRelationshipFitProfileRequest) returns (SetGeometryRelationshipFitProfileResult);

message SetGeometryRelationshipFitProfileRequest {
  optional GeometryType geometry_type = 1;
  repeated CollectionItemName relationship_ref_list = 2;
  optional string fit_profile_name = 3;
  optional bool apply_cardinal_point_settings = 4;
}

message SetGeometryRelationshipFitProfileResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Measurement Auxiliary Data {/* #set-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data)

`/briosa.AnalysisOperations/SetMeasurementAuxiliaryData` · Operation ID: `analysis_operations.set_measurement_auxiliary_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 2 | `auxiliary_name` | `optional string` | Auxiliary Name | Empty |
| Request | 3 | `value` | `optional double` | Value | 0.000000 |
| Request | 4 | `units` | `optional string` | Units | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Object Reporting Frame {/* #set-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame)

`/briosa.AnalysisOperations/SetObjectReportingFrame` · Operation ID: `analysis_operations.set_object_reporting_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Request | 2 | `reporting_frame` | `optional CollectionObjectName` | Reporting Frame | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Point Properties {/* #set-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-properties)

`/briosa.AnalysisOperations/SetPointProperties` · Operation ID: `analysis_operations.set_point_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | Point Name List | Required |
| Request | 2 | `planar_offset` | `optional double` | Planar Offset | 0.000000 |
| Request | 3 | `radial_offset` | `optional double` | Radial Offset | 0.000000 |
| Request | 4 | `position_tolerance` | `optional ToleranceVectorOptions` | Position Tolerance | Required |
| Request | 5 | `component_weights` | `optional Vector` | Component Weights | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointProperties(SetPointPropertiesRequest) returns (SetPointPropertiesResult);

message SetPointPropertiesRequest {
  repeated PointName point_name_list = 1;
  optional double planar_offset = 2;
  optional double radial_offset = 3;
  optional ToleranceVectorOptions position_tolerance = 4;
  optional Vector component_weights = 5;
}

message SetPointPropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Point Weights From Uncertainties {/* #set-point-weights-from-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties)

`/briosa.AnalysisOperations/SetPointWeightsFromUncertainties` · Operation ID: `analysis_operations.set_point_weights_from_uncertainties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | Point Name List | Required |
| Request | 2 | `uncertainty_reference_frame_mode` | `optional string` | Uncertainty Reference Frame Mode | With respect to WORLD |
| Request | 3 | `reporting_frame` | `optional CollectionObjectName` | Reporting Frame | Required |
| Request | 4 | `weight_normalization_mode` | `optional string` | Weight Normalization Mode | Set to fixed value |
| Request | 5 | `fixed_weight_value` | `optional double` | Fixed Weight Value | 1.000000 |
| Request | 6 | `output_weighted_point_group` | `optional CollectionObjectName` | Output Weighted Point Group | Required |
| Result | 1 | `output_weighted_point_list` | `repeated PointName` | Output Weighted Point List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Transform for i-th Frame in Frame Set {/* #set-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set)

`/briosa.AnalysisOperations/SetTransformForIthFrameInFrameSet` · Operation ID: `analysis_operations.set_transform_for_ith_frame_in_frame_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `frame_set` | `optional CollectionObjectName` | Frame Set | Required |
| Request | 2 | `frame_set_index` | `optional int32` | Frame Set Index | 0 |
| Request | 3 | `transform_in_working` | `optional Transform` | Transform in Working | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Sphere Axis Check {/* #sphere-axis-check */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#sphere-axis-check)

`/briosa.AnalysisOperations/SphereAxisCheck` · Operation ID: `analysis_operations.sphere_axis_check`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sphere_points_group_name` | `optional CollectionObjectName` | Sphere Points Group Name | Required |
| Request | 2 | `sphere_target_radius` | `optional double` | Sphere Target Radius | 0.000000 |
| Request | 3 | `point_to_create_at_sphere_center` | `optional PointName` | Point To Create at Sphere Center | Required |
| Request | 4 | `line_defining_the_axis` | `optional CollectionObjectName` | Line defining the axis | Required |
| Result | 1 | `sphere_fit_rms_error` | `optional double` | Sphere Fit RMS Error | — |
| Result | 2 | `sphere_fit_max_error` | `optional double` | Sphere Fit Max Error | — |
| Result | 3 | `vector_representation` | `optional Vector` | Vector Representation | — |
| Result | 4 | `x_value` | `optional double` | X Value | — |
| Result | 5 | `y_value` | `optional double` | Y Value | — |
| Result | 6 | `z_value` | `optional double` | Z Value | — |
| Result | 7 | `magnitude` | `optional double` | Magnitude | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Temperature Compensate a group {/* #temperature-compensate-a-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group)

`/briosa.AnalysisOperations/TemperatureCompensateAGroup` · Operation ID: `analysis_operations.temperature_compensate_a_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_group` | `optional CollectionObjectName` | Original Group | Required |
| Request | 2 | `scaling_origin` | `optional FrameName` | Scaling Origin (coordinate frame) | Required |
| Request | 3 | `material_cte` | `optional double` | Material CTE (1/Deg F) | 0.000000 |
| Request | 4 | `initial_temperature` | `optional double` | Initial Temperature (F) | 0.000000 |
| Request | 5 | `final_temperature` | `optional double` | Final Temperature (F) | 0.000000 |
| Request | 6 | `scaled_group_name` | `optional CollectionObjectName` | Scaled Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TemperatureCompensateAGroup(TemperatureCompensateAGroupRequest) returns (TemperatureCompensateAGroupResult);

message TemperatureCompensateAGroupRequest {
  optional CollectionObjectName original_group = 1;
  optional FrameName scaling_origin = 2;
  optional double material_cte = 3;
  optional double initial_temperature = 4;
  optional double final_temperature = 5;
  optional CollectionObjectName scaled_group_name = 6;
}

message TemperatureCompensateAGroupResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `scaling_origin` | MP qualifier: coordinate frame. |
| `material_cte` | Coefficient per degree Fahrenheit. |
| `initial_temperature` | Temperature in degrees Fahrenheit. |
| `final_temperature` | Temperature in degrees Fahrenheit. |

## Transform Objects - Frame To Frame {/* #transform-objects---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame)

`/briosa.AnalysisOperations/TransformObjectsFrameToFrame` · Operation ID: `analysis_operations.transform_objects_frame_to_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name_list` | `repeated CollectionObjectName` | Object Name List | Required |
| Request | 2 | `initial_frame_name` | `optional CollectionObjectName` | Initial Frame Name | Required |
| Request | 3 | `destination_frame_name` | `optional CollectionObjectName` | Destination Frame Name | Required |
| Request | 4 | `number_of_steps` | `optional int32` | Number of Steps | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Transform Objects by Delta (About Working Frame) {/* #transform-objects-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame)

`/briosa.AnalysisOperations/TransformObjectsByDeltaAboutWorkingFrame` · Operation ID: `analysis_operations.transform_objects_by_delta_about_working_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_transform` | `repeated CollectionObjectName` | Objects to Transform | Required |
| Request | 2 | `delta_transform` | `optional Transform` | Delta Transform | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Transform Objects by Delta (World Transform Operator) {/* #transform-objects-by-delta-world-transform-operator */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator)

`/briosa.AnalysisOperations/TransformObjectsByDeltaWorldTransformOperator` · Operation ID: `analysis_operations.transform_objects_by_delta_world_transform_operator`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_transform` | `repeated CollectionObjectName` | Objects to Transform | Required |
| Request | 2 | `delta_transform` | `optional WorldTransform` | Delta Transform | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TransformObjectsByDeltaWorldTransformOperator(TransformObjectsByDeltaWorldTransformOperatorRequest) returns (TransformObjectsByDeltaWorldTransformOperatorResult);

message TransformObjectsByDeltaWorldTransformOperatorRequest {
  repeated CollectionObjectName objects_to_transform = 1;
  optional WorldTransform delta_transform = 2;
}

message TransformObjectsByDeltaWorldTransformOperatorResult {
  MpExecutionDetails execution = 1000;
}
```

## Translate Objects by Delta {/* #translate-objects-by-delta */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta)

`/briosa.AnalysisOperations/TranslateObjectsByDelta` · Operation ID: `analysis_operations.translate_objects_by_delta`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_translate` | `repeated CollectionObjectName` | Objects to Translate | Required |
| Request | 2 | `delta_translation` | `optional Vector` | Delta Translation | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Cone Properties {/* #set-cone-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Ellipse Properties {/* #set-ellipse-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Line Properties {/* #set-line-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2024.1.0508.5)
