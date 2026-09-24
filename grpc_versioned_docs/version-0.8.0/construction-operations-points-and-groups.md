---
title: Construction Operations / Points and Groups
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Points and Groups

[SA 2026.1.0529.7](/api/grpc/construction-operations-points-and-groups) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Point (Fit to Points) {/* #construct-point-fit-to-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-fit-to-points)

`/briosa.ConstructionOperations/ConstructPointFitToPoints` · Operation ID: `construction_operations.construct_point_fit_to_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 2 | `resulting_point_name` | `optional PointName` | Resulting Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointFitToPoints(ConstructPointFitToPointsRequest) returns (ConstructPointFitToPointsResult);

message ConstructPointFitToPointsRequest {
  repeated PointName point_names = 1;
  optional PointName resulting_point_name = 2;
}

message ConstructPointFitToPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct a Point in Working Coordinates {/* #construct-a-point-in-working-coordinates */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-in-working-coordinates)

`/briosa.ConstructionOperations/ConstructPointInWorkingCoordinates` · Operation ID: `construction_operations.construct_point_in_working_coordinates`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 2 | `working_coordinates` | `optional Vector` | Working Coordinates | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointInWorkingCoordinates(ConstructPointInWorkingCoordinatesRequest) returns (ConstructPointInWorkingCoordinatesResult);

message ConstructPointInWorkingCoordinatesRequest {
  optional PointName point_name = 1;
  optional Vector working_coordinates = 2;
}

message ConstructPointInWorkingCoordinatesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point From Survey Target Center {/* #construct-point-from-survey-target-center */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-survey-target-center)

`/briosa.ConstructionOperations/ConstructPointFromSurveyTargetCenter` · Operation ID: `construction_operations.construct_point_from_survey_target_center`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_containing_target` | `optional CollectionObjectName` | Cloud Containing Target | Required |
| Request | 2 | `reference_seed_point` | `optional PointName` | Reference Seed Point | Required |
| Request | 3 | `survey_target_type` | `optional SurveyTargetType` | Survey Target Type | Triangle |
| Request | 4 | `search_diameter` | `optional double` | Search Diameter | 0.000000 |
| Request | 5 | `result_center_point_name` | `optional PointName` | Result Center Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointFromSurveyTargetCenter(ConstructPointFromSurveyTargetCenterRequest) returns (ConstructPointFromSurveyTargetCenterResult);

message ConstructPointFromSurveyTargetCenterRequest {
  optional CollectionObjectName cloud_containing_target = 1;
  optional PointName reference_seed_point = 2;
  optional SurveyTargetType survey_target_type = 3;
  optional double search_diameter = 4;
  optional PointName result_center_point_name = 5;
}

message ConstructPointFromSurveyTargetCenterResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Point Position in Working Coordinates {/* #set-point-position-in-working-coordinates */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#set-point-position-in-working-coordinates)

`/briosa.ConstructionOperations/SetPointPositionInWorkingCoordinates` · Operation ID: `construction_operations.set_point_position_in_working_coordinates`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 2 | `position_in_working_coordinates` | `optional Vector` | Position In Working Coordinates | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointPositionInWorkingCoordinates(SetPointPositionInWorkingCoordinatesRequest) returns (SetPointPositionInWorkingCoordinatesResult);

message SetPointPositionInWorkingCoordinatesRequest {
  optional PointName point_name = 1;
  optional Vector position_in_working_coordinates = 2;
}

message SetPointPositionInWorkingCoordinatesResult {
  MpExecutionDetails execution = 1000;
}
```

## Transform Points by Delta (About Working Frame) {/* #transform-points-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame)

`/briosa.ConstructionOperations/TransformPointsByDeltaAboutWorkingFrame` · Operation ID: `construction_operations.transform_points_by_delta_about_working_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | Point Name List | Required |
| Request | 2 | `delta_in_working_coordinates` | `optional Vector` | Delta In Working Coordinates | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TransformPointsByDeltaAboutWorkingFrame(TransformPointsByDeltaAboutWorkingFrameRequest) returns (TransformPointsByDeltaAboutWorkingFrameResult);

message TransformPointsByDeltaAboutWorkingFrameRequest {
  repeated PointName point_name_list = 1;
  optional Vector delta_in_working_coordinates = 2;
}

message TransformPointsByDeltaAboutWorkingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct a Point at line MidPoint {/* #construct-a-point-at-line-midpoint */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-line-midpoint)

`/briosa.ConstructionOperations/ConstructPointAtLineMidpoint` · Operation ID: `construction_operations.construct_point_at_line_midpoint`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Request | 2 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtLineMidpoint(ConstructPointAtLineMidpointRequest) returns (ConstructPointAtLineMidpointResult);

message ConstructPointAtLineMidpointRequest {
  optional CollectionObjectName line_name = 1;
  optional PointName point_name = 2;
}

message ConstructPointAtLineMidpointResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point Group from Point Name Ref List {/* #construct-point-group-from-point-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list)

`/briosa.ConstructionOperations/ConstructPointGroupFromPointNameRefList` · Operation ID: `construction_operations.construct_point_group_from_point_name_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name_list` | `repeated PointName` | Point Name List | Required |
| Request | 2 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointGroupFromPointNameRefList(ConstructPointGroupFromPointNameRefListRequest) returns (ConstructPointGroupFromPointNameRefListResult);

message ConstructPointGroupFromPointNameRefListRequest {
  repeated PointName point_name_list = 1;
  optional CollectionObjectName group_name = 2;
}

message ConstructPointGroupFromPointNameRefListResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point Groups from Vector Groups {/* #construct-point-groups-from-vector-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-groups-from-vector-groups)

`/briosa.ConstructionOperations/ConstructPointGroupsFromVectorGroups` · Operation ID: `construction_operations.construct_point_groups_from_vector_groups`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_groups` | `repeated CollectionObjectName` | Vector Groups | Required |
| Request | 2 | `optional_group_name_suffix` | `optional string` | Optional Group Name Suffix | Omitted |
| Request | 3 | `make_vector_begin_points` | `optional bool` | Make Vector Begin Points | false |
| Request | 4 | `make_vector_end_points` | `optional bool` | Make Vector End Points | false |
| Result | 1 | `point_groups` | `repeated CollectionObjectName` | Point Groups | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointGroupsFromVectorGroups(ConstructPointGroupsFromVectorGroupsRequest) returns (ConstructPointGroupsFromVectorGroupsResult);

message ConstructPointGroupsFromVectorGroupsRequest {
  repeated CollectionObjectName vector_groups = 1;
  optional string optional_group_name_suffix = 2;
  optional bool make_vector_begin_points = 3;
  optional bool make_vector_end_points = 4;
}

message ConstructPointGroupsFromVectorGroupsResult {
  repeated CollectionObjectName point_groups = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct Point Group from Point Cloud {/* #construct-point-group-from-point-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-cloud)

`/briosa.ConstructionOperations/ConstructPointGroupFromPointCloud` · Operation ID: `construction_operations.construct_point_group_from_point_cloud`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `optional CollectionObjectName` | Cloud Name | Required |
| Request | 2 | `point_group_name` | `optional CollectionObjectName` | Point Group Name | Required |
| Request | 3 | `point_prefix` | `optional string` | Point Prefix | pt |
| Request | 4 | `starting_point_number` | `optional int32` | Starting Point Number | 0 |
| Request | 5 | `point_offset` | `optional double` | Point Offset | 0.000000 |
| Request | 6 | `sub_sampling` | `optional bool` | Sub-Sampling? | false |
| Request | 7 | `sub_sampling_distance` | `optional double` | Sub-Sampling Distance | 0.500000 |
| Request | 8 | `show_progress` | `optional bool` | Show Progress? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointGroupFromPointCloud(ConstructPointGroupFromPointCloudRequest) returns (ConstructPointGroupFromPointCloudResult);

message ConstructPointGroupFromPointCloudRequest {
  optional CollectionObjectName cloud_name = 1;
  optional CollectionObjectName point_group_name = 2;
  optional string point_prefix = 3;
  optional int32 starting_point_number = 4;
  optional double point_offset = 5;
  optional bool sub_sampling = 6;
  optional double sub_sampling_distance = 7;
  optional bool show_progress = 8;
}

message ConstructPointGroupFromPointCloudResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point From Cloud Point - Runtime Select {/* #construct-point-from-cloud-point---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select)

`/briosa.ConstructionOperations/ConstructPointFromCloudPointRuntimeSelect` · Operation ID: `construction_operations.construct_point_from_cloud_point_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `selection_prompt` | `optional string` | Selection Prompt | Select cloud point |
| Request | 2 | `construct_point` | `optional bool` | Construct Point? | false |
| Request | 3 | `constructed_point_name` | `optional PointName` | Constructed Point Name | Required |
| Result | 1 | `selection_cloud_point_coordinates` | `Vector` | Selection Cloud Point Coordinates | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointFromCloudPointRuntimeSelect(ConstructPointFromCloudPointRuntimeSelectRequest) returns (ConstructPointFromCloudPointRuntimeSelectResult);

message ConstructPointFromCloudPointRuntimeSelectRequest {
  optional string selection_prompt = 1;
  optional bool construct_point = 2;
  optional PointName constructed_point_name = 3;
}

message ConstructPointFromCloudPointRuntimeSelectResult {
  Vector selection_cloud_point_coordinates = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct a Point at Circle Center {/* #construct-a-point-at-circle-center */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-circle-center)

`/briosa.ConstructionOperations/ConstructPointAtCircleCenter` · Operation ID: `construction_operations.construct_point_at_circle_center`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `optional CollectionObjectName` | Circle Name | Required |
| Request | 2 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtCircleCenter(ConstructPointAtCircleCenterRequest) returns (ConstructPointAtCircleCenterResult);

message ConstructPointAtCircleCenterRequest {
  optional CollectionObjectName circle_name = 1;
  optional PointName point_name = 2;
}

message ConstructPointAtCircleCenterResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point at Intersection of Planes {/* #construct-point-at-intersection-of-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-planes)

`/briosa.ConstructionOperations/ConstructPointAtIntersectionOfPlanes` · Operation ID: `construction_operations.construct_point_at_intersection_of_planes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_1_name` | `optional CollectionObjectName` | Plane 1 Name | Required |
| Request | 2 | `plane_2_name` | `optional CollectionObjectName` | Plane 2 Name | Required |
| Request | 3 | `plane_3_name` | `optional CollectionObjectName` | Plane 3 Name | Required |
| Request | 4 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtIntersectionOfPlanes(ConstructPointAtIntersectionOfPlanesRequest) returns (ConstructPointAtIntersectionOfPlanesResult);

message ConstructPointAtIntersectionOfPlanesRequest {
  optional CollectionObjectName plane_1_name = 1;
  optional CollectionObjectName plane_2_name = 2;
  optional CollectionObjectName plane_3_name = 3;
  optional PointName point_name = 4;
}

message ConstructPointAtIntersectionOfPlanesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point at Intersection of Two Lines {/* #construct-point-at-intersection-of-two-lines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines)

`/briosa.ConstructionOperations/ConstructPointAtIntersectionOfTwoLines` · Operation ID: `construction_operations.construct_point_at_intersection_of_two_lines`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `first_line_name` | `optional CollectionObjectName` | First Line Name | Required |
| Request | 2 | `second_line_name` | `optional CollectionObjectName` | Second Line Name | Required |
| Request | 3 | `resulting_point_name` | `optional PointName` | Resulting Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtIntersectionOfTwoLines(ConstructPointAtIntersectionOfTwoLinesRequest) returns (ConstructPointAtIntersectionOfTwoLinesResult);

message ConstructPointAtIntersectionOfTwoLinesRequest {
  optional CollectionObjectName first_line_name = 1;
  optional CollectionObjectName second_line_name = 2;
  optional PointName resulting_point_name = 3;
}

message ConstructPointAtIntersectionOfTwoLinesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point at Intersection of Plane and Line {/* #construct-point-at-intersection-of-plane-and-line */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line)

`/briosa.ConstructionOperations/ConstructPointAtIntersectionOfPlaneAndLine` · Operation ID: `construction_operations.construct_point_at_intersection_of_plane_and_line`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_name` | `optional CollectionObjectName` | Plane Name | Required |
| Request | 2 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Request | 3 | `resulting_point_name` | `optional PointName` | Resulting Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtIntersectionOfPlaneAndLine(ConstructPointAtIntersectionOfPlaneAndLineRequest) returns (ConstructPointAtIntersectionOfPlaneAndLineResult);

message ConstructPointAtIntersectionOfPlaneAndLineRequest {
  optional CollectionObjectName plane_name = 1;
  optional CollectionObjectName line_name = 2;
  optional PointName resulting_point_name = 3;
}

message ConstructPointAtIntersectionOfPlaneAndLineResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point at Intersection of 2 B-Splines {/* #construct-point-at-intersection-of-2-b-splines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines)

`/briosa.ConstructionOperations/ConstructPointAtIntersectionOfTwoBSplines` · Operation ID: `construction_operations.construct_point_at_intersection_of_two_b_splines`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `first_b_spline_name` | `optional CollectionObjectName` | First B-Spline Name | Required |
| Request | 2 | `second_b_spline_name` | `optional CollectionObjectName` | Second B-Spline Name | Required |
| Request | 3 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtIntersectionOfTwoBSplines(ConstructPointAtIntersectionOfTwoBSplinesRequest) returns (ConstructPointAtIntersectionOfTwoBSplinesResult);

message ConstructPointAtIntersectionOfTwoBSplinesRequest {
  optional CollectionObjectName first_b_spline_name = 1;
  optional CollectionObjectName second_b_spline_name = 2;
  optional PointName point_name = 3;
}

message ConstructPointAtIntersectionOfTwoBSplinesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point at intersection of B-Spline and Surfaces {/* #construct-point-at-intersection-of-b-spline-and-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces)

`/briosa.ConstructionOperations/ConstructPointAtIntersectionOfBSplineAndSurfaces` · Operation ID: `construction_operations.construct_point_at_intersection_of_b_spline_and_surfaces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `b_spline_name` | `optional CollectionObjectName` | B-Spline Name | Required |
| Request | 2 | `surface_list` | `repeated CollectionObjectName` | Surface List | Required |
| Request | 3 | `approximation_tolerance` | `optional double` | Approximation Tolerance | 0.001000 |
| Request | 4 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtIntersectionOfBSplineAndSurfaces(ConstructPointAtIntersectionOfBSplineAndSurfacesRequest) returns (ConstructPointAtIntersectionOfBSplineAndSurfacesResult);

message ConstructPointAtIntersectionOfBSplineAndSurfacesRequest {
  optional CollectionObjectName b_spline_name = 1;
  repeated CollectionObjectName surface_list = 2;
  optional double approximation_tolerance = 3;
  optional PointName point_name = 4;
}

message ConstructPointAtIntersectionOfBSplineAndSurfacesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points at Intersection of Circle and Line {/* #construct-points-at-intersection-of-circle-and-line */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line)

`/briosa.ConstructionOperations/ConstructPointsAtIntersectionOfCircleAndLine` · Operation ID: `construction_operations.construct_points_at_intersection_of_circle_and_line`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `optional CollectionObjectName` | Circle Name | Required |
| Request | 2 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Request | 3 | `base_point_name_for_results` | `optional PointName` | Base Point Name for results | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsAtIntersectionOfCircleAndLine(ConstructPointsAtIntersectionOfCircleAndLineRequest) returns (ConstructPointsAtIntersectionOfCircleAndLineResult);

message ConstructPointsAtIntersectionOfCircleAndLineRequest {
  optional CollectionObjectName circle_name = 1;
  optional CollectionObjectName line_name = 2;
  optional PointName base_point_name_for_results = 3;
}

message ConstructPointsAtIntersectionOfCircleAndLineResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points at Intersection of Principle Object Axes and Surfaces {/* #construct-points-at-intersection-of-principle-object-axes-and-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces)

`/briosa.ConstructionOperations/ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfaces` · Operation ID: `construction_operations.construct_points_at_intersection_of_principal_object_axes_and_surfaces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `axis_object_list` | `repeated CollectionObjectName` | Axis Object List | Required |
| Request | 2 | `surface_list` | `repeated CollectionObjectName` | Surface List | Required |
| Request | 3 | `point_suffix` | `optional string` | Point Suffix (optional) | Omitted |
| Request | 4 | `resultant_group_name` | `optional CollectionObjectName` | Resultant Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfaces(ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesRequest) returns (ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesResult);

message ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesRequest {
  repeated CollectionObjectName axis_object_list = 1;
  repeated CollectionObjectName surface_list = 2;
  optional string point_suffix = 3;
  optional CollectionObjectName resultant_group_name = 4;
}

message ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points from Cylinder {/* #construct-points-from-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-cylinder)

`/briosa.ConstructionOperations/ConstructPointsFromCylinder` · Operation ID: `construction_operations.construct_points_from_cylinder`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cylinder_name` | `optional CollectionObjectName` | Cylinder Name | Required |
| Request | 2 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsFromCylinder(ConstructPointsFromCylinderRequest) returns (ConstructPointsFromCylinderResult);

message ConstructPointsFromCylinderRequest {
  optional CollectionObjectName cylinder_name = 1;
  optional CollectionObjectName group_name = 2;
}

message ConstructPointsFromCylinderResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct a Point at Projection of Point onto An Object {/* #construct-a-point-at-projection-of-point-onto-an-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object)

`/briosa.ConstructionOperations/ConstructPointAtProjectionOfPointOntoObject` · Operation ID: `construction_operations.construct_point_at_projection_of_point_onto_object`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_to_project` | `optional PointName` | Point to Project | Required |
| Request | 2 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Request | 3 | `resulting_point_name` | `optional PointName` | Resulting Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtProjectionOfPointOntoObject(ConstructPointAtProjectionOfPointOntoObjectRequest) returns (ConstructPointAtProjectionOfPointOntoObjectResult);

message ConstructPointAtProjectionOfPointOntoObjectRequest {
  optional PointName point_to_project = 1;
  optional CollectionObjectName object_name = 2;
  optional PointName resulting_point_name = 3;
}

message ConstructPointAtProjectionOfPointOntoObjectResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points at Projection on Surfaces - Parallel to WCF Axis {/* #construct-points-at-projection-on-surfaces---parallel-to-wcf-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis)

`/briosa.ConstructionOperations/ConstructPointsAtProjectionOnSurfacesParallelToWcfAxis` · Operation ID: `construction_operations.construct_points_at_projection_on_surfaces_parallel_to_wcf_axis`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_list` | `repeated CollectionObjectName` | Surface List | Required |
| Request | 2 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 3 | `group_name_to_contain_new_points` | `optional string` | Group Name to Contain New Points | Empty |
| Request | 4 | `point_name_prefix` | `optional string` | Point Name Prefix | Empty |
| Request | 5 | `point_name_suffix` | `optional string` | Point Name Suffix | Empty |
| Request | 6 | `axis` | `optional WcfAxis` | Axis | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsAtProjectionOnSurfacesParallelToWcfAxis(ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisRequest) returns (ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisResult);

message ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisRequest {
  repeated CollectionObjectName surface_list = 1;
  repeated PointName point_names = 2;
  optional string group_name_to_contain_new_points = 3;
  optional string point_name_prefix = 4;
  optional string point_name_suffix = 5;
  optional WcfAxis axis = 6;
}

message ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points at Projection on Surfaces - Radial from WCF Axis {/* #construct-points-at-projection-on-surfaces---radial-from-wcf-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis)

`/briosa.ConstructionOperations/ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxis` · Operation ID: `construction_operations.construct_points_at_projection_on_surfaces_radial_from_wcf_axis`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_list` | `repeated CollectionObjectName` | Surface List | Required |
| Request | 2 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 3 | `group_name_to_contain_new_points` | `optional string` | Group Name to Contain New Points | Empty |
| Request | 4 | `point_name_prefix` | `optional string` | Point Name Prefix | Empty |
| Request | 5 | `point_name_suffix` | `optional string` | Point Name Suffix | Empty |
| Request | 6 | `axis` | `optional WcfAxis` | Axis | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxis(ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisRequest) returns (ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisResult);

message ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisRequest {
  repeated CollectionObjectName surface_list = 1;
  repeated PointName point_names = 2;
  optional string group_name_to_contain_new_points = 3;
  optional string point_name_prefix = 4;
  optional string point_name_suffix = 5;
  optional WcfAxis axis = 6;
}

message ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points at Projection on Surfaces - Spherical from WCF Origin {/* #construct-points-at-projection-on-surfaces---spherical-from-wcf-origin */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin)

`/briosa.ConstructionOperations/ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOrigin` · Operation ID: `construction_operations.construct_points_at_projection_on_surfaces_spherical_from_wcf_origin`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_list` | `repeated CollectionObjectName` | Surface List | Required |
| Request | 2 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 3 | `group_name_to_contain_new_points` | `optional string` | Group Name to Contain New Points | Empty |
| Request | 4 | `point_name_prefix` | `optional string` | Point Name Prefix | Empty |
| Request | 5 | `point_name_suffix` | `optional string` | Point Name Suffix | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOrigin(ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginRequest) returns (ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginResult);

message ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginRequest {
  repeated CollectionObjectName surface_list = 1;
  repeated PointName point_names = 2;
  optional string group_name_to_contain_new_points = 3;
  optional string point_name_prefix = 4;
  optional string point_name_suffix = 5;
}

message ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Gradient At Projected Point On Surface {/* #get-gradient-at-projected-point-on-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface)

`/briosa.ConstructionOperations/GetGradientAtProjectedPointOnSurface` · Operation ID: `construction_operations.get_gradient_at_projected_point_on_surface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_to_project` | `optional PointName` | Point to Project | Required |
| Request | 2 | `surface_name` | `optional CollectionObjectName` | Surface Name | Required |
| Request | 3 | `generate_output_vector_lines` | `optional bool` | Generate output vector lines? | false |
| Result | 1 | `gradient` | `ProjectedPointGradient` | See Typed Binding | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGradientAtProjectedPointOnSurface(GetGradientAtProjectedPointOnSurfaceRequest) returns (GetGradientAtProjectedPointOnSurfaceResult);

message GetGradientAtProjectedPointOnSurfaceRequest {
  optional PointName point_to_project = 1;
  optional CollectionObjectName surface_name = 2;
  optional bool generate_output_vector_lines = 3;
}

message GetGradientAtProjectedPointOnSurfaceResult {
  ProjectedPointGradient gradient = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Gradient At Projected Point On Surface Edge {/* #get-gradient-at-projected-point-on-surface-edge */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge)

`/briosa.ConstructionOperations/GetGradientAtProjectedPointOnSurfaceEdge` · Operation ID: `construction_operations.get_gradient_at_projected_point_on_surface_edge`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_to_project` | `optional PointName` | Point to Project | Required |
| Request | 2 | `surface_edge` | `optional CollectionObjectName` | Surface Edge (B-Spline) | Required |
| Request | 3 | `surface_name` | `optional CollectionObjectName` | Surface Name | Required |
| Request | 4 | `edge_offset_direction` | `optional Vector` | Edge Offset Direction | Required |
| Request | 5 | `edge_offset_distance` | `optional double` | Edge Offset Distance | 0.01 |
| Request | 6 | `generate_output_vector_lines` | `optional bool` | Generate output vector lines? | false |
| Result | 1 | `gradient` | `ProjectedPointGradient` | See Typed Binding | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetGradientAtProjectedPointOnSurfaceEdge(GetGradientAtProjectedPointOnSurfaceEdgeRequest) returns (GetGradientAtProjectedPointOnSurfaceEdgeResult);

message GetGradientAtProjectedPointOnSurfaceEdgeRequest {
  optional PointName point_to_project = 1;
  optional CollectionObjectName surface_edge = 2;
  optional CollectionObjectName surface_name = 3;
  optional Vector edge_offset_direction = 4;
  optional double edge_offset_distance = 5;
  optional bool generate_output_vector_lines = 6;
}

message GetGradientAtProjectedPointOnSurfaceEdgeResult {
  ProjectedPointGradient gradient = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `surface_edge` | MP qualifier: B-Spline. |

## Construct Points By Projecting Points On Mesh Along Direction {/* #construct-points-by-projecting-points-on-mesh-along-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction)

`/briosa.ConstructionOperations/ConstructPointsByProjectingPointsOnMeshAlongDirection` · Operation ID: `construction_operations.construct_points_by_projecting_points_on_mesh_along_direction`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_point_names` | `repeated PointName` | Reference Point Names | Required |
| Request | 2 | `group_name_for_projected_points` | `optional CollectionObjectName` | Group Name For Projected Points | Required |
| Request | 3 | `object_providing_direction_reference` | `optional CollectionObjectName` | Object Providing Direction Reference | Required |
| Request | 4 | `bi_directional_projection` | `optional bool` | Bi-directional projection? | true |
| Request | 5 | `mesh_serving_as_projection_target` | `optional CollectionObjectName` | Mesh Serving As Projection Target | Required |
| Result | 1 | `resultant_point_name_list` | `repeated PointName` | Resultant Point Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsByProjectingPointsOnMeshAlongDirection(ConstructPointsByProjectingPointsOnMeshAlongDirectionRequest) returns (ConstructPointsByProjectingPointsOnMeshAlongDirectionResult);

message ConstructPointsByProjectingPointsOnMeshAlongDirectionRequest {
  repeated PointName reference_point_names = 1;
  optional CollectionObjectName group_name_for_projected_points = 2;
  optional CollectionObjectName object_providing_direction_reference = 3;
  optional bool bi_directional_projection = 4;
  optional CollectionObjectName mesh_serving_as_projection_target = 5;
}

message ConstructPointsByProjectingPointsOnMeshAlongDirectionResult {
  repeated PointName resultant_point_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct Points Spaced at a Distance on Curves {/* #construct-points-spaced-at-a-distance-on-curves */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves)

`/briosa.ConstructionOperations/ConstructPointsSpacedAtDistanceOnCurves` · Operation ID: `construction_operations.construct_points_spaced_at_distance_on_curves`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `b_spline_list` | `repeated CollectionObjectName` | B-Spline List | Required |
| Request | 2 | `distance_between_points` | `optional double` | Distance Between Points | 0.500000 |
| Request | 3 | `resultant_group_name` | `optional CollectionObjectName` | Resultant Group Name | Required |
| Request | 4 | `resultant_point_name_prefix` | `optional string` | Resultant Point Name Prefix | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsSpacedAtDistanceOnCurves(ConstructPointsSpacedAtDistanceOnCurvesRequest) returns (ConstructPointsSpacedAtDistanceOnCurvesResult);

message ConstructPointsSpacedAtDistanceOnCurvesRequest {
  repeated CollectionObjectName b_spline_list = 1;
  optional double distance_between_points = 2;
  optional CollectionObjectName resultant_group_name = 3;
  optional string resultant_point_name_prefix = 4;
}

message ConstructPointsSpacedAtDistanceOnCurvesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points N-Spaced on Curves {/* #construct-points-n-spaced-on-curves */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-n-spaced-on-curves)

`/briosa.ConstructionOperations/ConstructPointsNSpacedOnCurves` · Operation ID: `construction_operations.construct_points_n_spaced_on_curves`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `b_spline_list` | `repeated CollectionObjectName` | B-Spline List | Required |
| Request | 2 | `number_of_evenly_spaced_points` | `optional int32` | Number of Evenly Spaced Points | 10 |
| Request | 3 | `resultant_group_name` | `optional CollectionObjectName` | Resultant Group Name | Required |
| Request | 4 | `resultant_point_name_prefix` | `optional string` | Resultant Point Name Prefix | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsNSpacedOnCurves(ConstructPointsNSpacedOnCurvesRequest) returns (ConstructPointsNSpacedOnCurvesResult);

message ConstructPointsNSpacedOnCurvesRequest {
  repeated CollectionObjectName b_spline_list = 1;
  optional int32 number_of_evenly_spaced_points = 2;
  optional CollectionObjectName resultant_group_name = 3;
  optional string resultant_point_name_prefix = 4;
}

message ConstructPointsNSpacedOnCurvesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points on Curves Using Max Chordal Deviation {/* #construct-points-on-curves-using-max-chordal-deviation */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation)

`/briosa.ConstructionOperations/ConstructPointsOnCurvesUsingMaxChordalDeviation` · Operation ID: `construction_operations.construct_points_on_curves_using_max_chordal_deviation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `b_spline_list` | `repeated CollectionObjectName` | B-Spline List | Required |
| Request | 2 | `maximum_chordal_deviation` | `optional double` | Maximum Chordal Deviation | 0.050000 |
| Request | 3 | `maximum_trim_edge_angle` | `optional double` | Maximum Trim Edge Angle | 15.000000 |
| Request | 4 | `maximum_chord_length` | `optional double` | Maximum Chord Length | 0.000000 |
| Request | 5 | `resultant_group_name` | `optional CollectionObjectName` | Resultant Group Name | Required |
| Request | 6 | `resultant_point_name_prefix` | `optional string` | Resultant Point Name Prefix | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsOnCurvesUsingMaxChordalDeviation(ConstructPointsOnCurvesUsingMaxChordalDeviationRequest) returns (ConstructPointsOnCurvesUsingMaxChordalDeviationResult);

message ConstructPointsOnCurvesUsingMaxChordalDeviationRequest {
  repeated CollectionObjectName b_spline_list = 1;
  optional double maximum_chordal_deviation = 2;
  optional double maximum_trim_edge_angle = 3;
  optional double maximum_chord_length = 4;
  optional CollectionObjectName resultant_group_name = 5;
  optional string resultant_point_name_prefix = 6;
}

message ConstructPointsOnCurvesUsingMaxChordalDeviationResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points on Objects Vertices {/* #construct-points-on-objects-vertices */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-objects-vertices)

`/briosa.ConstructionOperations/ConstructPointsOnObjectVertices` · Operation ID: `construction_operations.construct_points_on_object_vertices`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name_list` | `repeated CollectionObjectName` | Object Name List | Required |
| Request | 2 | `resultant_group_name` | `optional CollectionObjectName` | Resultant Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsOnObjectVertices(ConstructPointsOnObjectVerticesRequest) returns (ConstructPointsOnObjectVerticesResult);

message ConstructPointsOnObjectVerticesRequest {
  repeated CollectionObjectName object_name_list = 1;
  optional CollectionObjectName resultant_group_name = 2;
}

message ConstructPointsOnObjectVerticesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points on Surface(s) by Clicking {/* #construct-points-on-surfaces-by-clicking */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking)

`/briosa.ConstructionOperations/ConstructPointsOnSurfacesByClicking` · Operation ID: `construction_operations.construct_points_on_surfaces_by_clicking`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name_for_points` | `optional CollectionObjectName` | Group Name for Points | Required |
| Request | 2 | `first_point_name` | `optional string` | First Point Name | p0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsOnSurfacesByClicking(ConstructPointsOnSurfacesByClickingRequest) returns (ConstructPointsOnSurfacesByClickingResult);

message ConstructPointsOnSurfacesByClickingRequest {
  optional CollectionObjectName group_name_for_points = 1;
  optional string first_point_name = 2;
}

message ConstructPointsOnSurfacesByClickingResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points From Surface Faces - Runtime Select {/* #construct-points-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructPointsFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_points_from_surface_faces_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsFromSurfaceFacesRuntimeSelect(ConstructPointsFromSurfaceFacesRuntimeSelectRequest) returns (ConstructPointsFromSurfaceFacesRuntimeSelectResult);

message ConstructPointsFromSurfaceFacesRuntimeSelectRequest {}

message ConstructPointsFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points From Surfaces On UV Grid {/* #construct-points-from-surfaces-on-uv-grid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid)

`/briosa.ConstructionOperations/ConstructPointsFromSurfacesOnUvGrid` · Operation ID: `construction_operations.construct_points_from_surfaces_on_uv_grid`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface_list` | `repeated CollectionObjectName` | Surface List | Required |
| Request | 2 | `uv_point_group_base_name` | `optional string` | UV Point Group Base Name | UV Points |
| Request | 3 | `make_each_line_separate_group` | `optional bool` | Make Each Line Separate Group? | false |
| Request | 4 | `number_of_u_grids` | `optional int32` | Number of U Grids | 5 |
| Request | 5 | `number_of_v_grids` | `optional int32` | Number of V Grids | 5 |
| Request | 6 | `edge_point_mode` | `optional EdgePointMode` | Edge Point Mode | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsFromSurfacesOnUvGrid(ConstructPointsFromSurfacesOnUvGridRequest) returns (ConstructPointsFromSurfacesOnUvGridResult);

message ConstructPointsFromSurfacesOnUvGridRequest {
  repeated CollectionObjectName surface_list = 1;
  optional string uv_point_group_base_name = 2;
  optional bool make_each_line_separate_group = 3;
  optional int32 number_of_u_grids = 4;
  optional int32 number_of_v_grids = 5;
  optional EdgePointMode edge_point_mode = 6;
}

message ConstructPointsFromSurfacesOnUvGridResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point at Object Origin {/* #construct-point-at-object-origin */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-object-origin)

`/briosa.ConstructionOperations/ConstructPointAtObjectOrigin` · Operation ID: `construction_operations.construct_point_at_object_origin`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Request | 2 | `resultant_point_name` | `optional PointName` | Resultant Point Name | Required |
| Result | 1 | `origin` | `ObjectOriginResult` | Z Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointAtObjectOrigin(ConstructPointAtObjectOriginRequest) returns (ConstructPointAtObjectOriginResult);

message ConstructPointAtObjectOriginRequest {
  optional CollectionObjectName object_name = 1;
  optional PointName resultant_point_name = 2;
}

message ConstructPointAtObjectOriginResult {
  ObjectOriginResult origin = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct Points Shifted in Working Frame {/* #construct-points-shifted-in-working-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-shifted-in-working-frame)

`/briosa.ConstructionOperations/ConstructPointsShiftedInWorkingFrame` · Operation ID: `construction_operations.construct_points_shifted_in_working_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_points` | `repeated PointName` | Original Points | Required |
| Request | 2 | `group_for_new_points` | `optional CollectionObjectName` | Group for New Points | Required |
| Request | 3 | `shift_vector` | `optional Vector` | Shift Vector | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsShiftedInWorkingFrame(ConstructPointsShiftedInWorkingFrameRequest) returns (ConstructPointsShiftedInWorkingFrameResult);

message ConstructPointsShiftedInWorkingFrameRequest {
  repeated PointName original_points = 1;
  optional CollectionObjectName group_for_new_points = 2;
  optional Vector shift_vector = 3;
}

message ConstructPointsShiftedInWorkingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points Cylindrically Shifted {/* #construct-points-cylindrically-shifted */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-cylindrically-shifted)

`/briosa.ConstructionOperations/ConstructPointsCylindricallyShifted` · Operation ID: `construction_operations.construct_points_cylindrically_shifted`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_object_name` | `optional CollectionObjectName` | Reference Object Name | Required |
| Request | 2 | `original_points` | `repeated PointName` | Original Points | Required |
| Request | 3 | `group_for_new_points` | `optional CollectionObjectName` | Group for New Points | Required |
| Request | 4 | `radial_shift` | `optional double` | Radial Shift | 0.000000 |
| Request | 5 | `theta_shift` | `optional double` | Theta Shift (degrees) | 0.000000 |
| Request | 6 | `planar_shift` | `optional double` | Planar Shift | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsCylindricallyShifted(ConstructPointsCylindricallyShiftedRequest) returns (ConstructPointsCylindricallyShiftedResult);

message ConstructPointsCylindricallyShiftedRequest {
  optional CollectionObjectName reference_object_name = 1;
  repeated PointName original_points = 2;
  optional CollectionObjectName group_for_new_points = 3;
  optional double radial_shift = 4;
  optional double theta_shift = 5;
  optional double planar_shift = 6;
}

message ConstructPointsCylindricallyShiftedResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `theta_shift` | Angle in degrees. |

## Construct Points WildCard Selection {/* #construct-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-wildcard-selection)

`/briosa.ConstructionOperations/ConstructPointsWildcardSelection` · Operation ID: `construction_operations.construct_points_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `groups_to_select_from` | `repeated CollectionObjectName` | Groups to Select From | Required |
| Request | 2 | `wildcard_selection_names` | `optional PointName` | WildCard Selection Names | Required |
| Request | 3 | `group_for_new_points` | `optional CollectionObjectName` | Group for New Points | Required |
| Request | 4 | `include_prior_complete_name` | `optional bool` | Include prior complete name | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsWildcardSelection(ConstructPointsWildcardSelectionRequest) returns (ConstructPointsWildcardSelectionResult);

message ConstructPointsWildcardSelectionRequest {
  repeated CollectionObjectName groups_to_select_from = 1;
  optional PointName wildcard_selection_names = 2;
  optional CollectionObjectName group_for_new_points = 3;
  optional bool include_prior_complete_name = 4;
}

message ConstructPointsWildcardSelectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points Subset with greatest spacing {/* #construct-points-subset-with-greatest-spacing */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing)

`/briosa.ConstructionOperations/ConstructPointsSubsetWithGreatestSpacing` · Operation ID: `construction_operations.construct_points_subset_with_greatest_spacing`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `points_to_subsample` | `repeated PointName` | Points to Subsample | Required |
| Request | 2 | `subset_size` | `optional int32` | Subset Size | 10 |
| Request | 3 | `group_for_subset` | `optional CollectionObjectName` | Group for Subset | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsSubsetWithGreatestSpacing(ConstructPointsSubsetWithGreatestSpacingRequest) returns (ConstructPointsSubsetWithGreatestSpacingResult);

message ConstructPointsSubsetWithGreatestSpacingRequest {
  repeated PointName points_to_subsample = 1;
  optional int32 subset_size = 2;
  optional CollectionObjectName group_for_subset = 3;
}

message ConstructPointsSubsetWithGreatestSpacingResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points Layout on Grid {/* #construct-points-layout-on-grid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-layout-on-grid)

`/briosa.ConstructionOperations/ConstructPointsLayoutOnGrid` · Operation ID: `construction_operations.construct_points_layout_on_grid`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Request | 2 | `point_prefix` | `optional string` | Point Prefix | p |
| Request | 3 | `x_min` | `optional double` | X Min | 0.000000 |
| Request | 4 | `x_max` | `optional double` | X Max | 100.000000 |
| Request | 5 | `x_count` | `optional int32` | X Count | 10 |
| Request | 6 | `y_min` | `optional double` | Y Min | 0.000000 |
| Request | 7 | `y_max` | `optional double` | Y Max | 50.000000 |
| Request | 8 | `y_count` | `optional int32` | Y Count | 10 |
| Request | 9 | `z_min` | `optional double` | Z Min | 0.000000 |
| Request | 10 | `z_max` | `optional double` | Z Max | 0.000000 |
| Request | 11 | `z_count` | `optional int32` | Z Count | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsLayoutOnGrid(ConstructPointsLayoutOnGridRequest) returns (ConstructPointsLayoutOnGridResult);

message ConstructPointsLayoutOnGridRequest {
  optional CollectionObjectName group_name = 1;
  optional string point_prefix = 2;
  optional double x_min = 3;
  optional double x_max = 4;
  optional int32 x_count = 5;
  optional double y_min = 6;
  optional double y_max = 7;
  optional int32 y_count = 8;
  optional double z_min = 9;
  optional double z_max = 10;
  optional int32 z_count = 11;
}

message ConstructPointsLayoutOnGridResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points Auto-Correspond 2 groups Proximity {/* #construct-points-auto-correspond-2-groups-proximity */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity)

`/briosa.ConstructionOperations/ConstructPointsAutoCorrespondTwoGroupsProximity` · Operation ID: `construction_operations.construct_points_auto_correspond_two_groups_proximity`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group` | `optional CollectionObjectName` | Reference group (known point names) | Required |
| Request | 2 | `group_to_be_copied` | `optional CollectionObjectName` | Group to be copied (unknown point names) | Required |
| Request | 3 | `same_point_tolerance` | `optional double` | Auto-correspond same-point tolerance | 0.250000 |
| Request | 4 | `group_to_contain_matched_points` | `optional CollectionObjectName` | Group to contain matched points | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsAutoCorrespondTwoGroupsProximity(ConstructPointsAutoCorrespondTwoGroupsProximityRequest) returns (ConstructPointsAutoCorrespondTwoGroupsProximityResult);

message ConstructPointsAutoCorrespondTwoGroupsProximityRequest {
  optional CollectionObjectName reference_group = 1;
  optional CollectionObjectName group_to_be_copied = 2;
  optional double same_point_tolerance = 3;
  optional CollectionObjectName group_to_contain_matched_points = 4;
}

message ConstructPointsAutoCorrespondTwoGroupsProximityResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Points Auto-Correspond 2 groups Inter-Point Distance {/* #construct-points-auto-correspond-2-groups-inter-point-distance */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance)

`/briosa.ConstructionOperations/ConstructPointsAutoCorrespondTwoGroupsInterPointDistance` · Operation ID: `construction_operations.construct_points_auto_correspond_two_groups_inter_point_distance`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_group` | `optional CollectionObjectName` | Reference group (known point names) | Required |
| Request | 2 | `group_to_be_copied` | `optional CollectionObjectName` | Group to be copied (unknown point names) | Required |
| Request | 3 | `same_point_tolerance` | `optional double` | Auto-correspond same-point tolerance | 0.100000 |
| Request | 4 | `group_to_contain_matched_points` | `optional CollectionObjectName` | Group to contain matched points | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointsAutoCorrespondTwoGroupsInterPointDistance(ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceRequest) returns (ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceResult);

message ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceRequest {
  optional CollectionObjectName reference_group = 1;
  optional CollectionObjectName group_to_be_copied = 2;
  optional double same_point_tolerance = 3;
  optional CollectionObjectName group_to_contain_matched_points = 4;
}

message ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceResult {
  MpExecutionDetails execution = 1000;
}
```

## Average a set of Groups {/* #average-a-set-of-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#average-a-set-of-groups)

`/briosa.ConstructionOperations/AverageSetOfGroups` · Operation ID: `construction_operations.average_set_of_groups`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_names` | `repeated CollectionObjectName` | Group Names | Required |
| Request | 2 | `resulting_group_name` | `optional CollectionObjectName` | Resulting Group Name | Required |
| Request | 3 | `rms_tolerance` | `optional double` | RMS Tolerance (0.0 for none) | 0 |
| Request | 4 | `maximum_absolute_tolerance` | `optional double` | Maximum Absolute Tolerance (0.0 for none) | 0 |
| Request | 5 | `maximum_average_tolerance` | `optional double` | Maximum Average Tolerance (0.0 for none) | 0 |
| Result | 1 | `statistics` | `GroupAverageResult` | Average Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AverageSetOfGroups(AverageSetOfGroupsRequest) returns (AverageSetOfGroupsResult);

message AverageSetOfGroupsRequest {
  repeated CollectionObjectName group_names = 1;
  optional CollectionObjectName resulting_group_name = 2;
  optional double rms_tolerance = 3;
  optional double maximum_absolute_tolerance = 4;
  optional double maximum_average_tolerance = 5;
}

message AverageSetOfGroupsResult {
  GroupAverageResult statistics = 1;
  MpExecutionDetails execution = 1000;
}
```

## Copy Groups Excluding Obscured Points {/* #copy-groups-excluding-obscured-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#copy-groups-excluding-obscured-points)

`/briosa.ConstructionOperations/CopyGroupsExcludingObscuredPoints` · Operation ID: `construction_operations.copy_groups_excluding_obscured_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `group_names` | `repeated CollectionObjectName` | Group Names | Required |
| Request | 3 | `new_collection_name` | `optional CollectionName` | New Collection Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CopyGroupsExcludingObscuredPoints(CopyGroupsExcludingObscuredPointsRequest) returns (CopyGroupsExcludingObscuredPointsResult);

message CopyGroupsExcludingObscuredPointsRequest {
  optional CollectionInstrumentId instrument_id = 1;
  repeated CollectionObjectName group_names = 2;
  optional CollectionName new_collection_name = 3;
}

message CopyGroupsExcludingObscuredPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Make a Point Name - Runtime Select {/* #make-a-point-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---runtime-select)

`/briosa.ConstructionOperations/MakePointNameRuntimeSelect` · Operation ID: `construction_operations.make_point_name_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `resultant_point_name` | `PointName` | Resultant Point Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointNameRuntimeSelect(MakePointNameRuntimeSelectRequest) returns (MakePointNameRuntimeSelectResult);

message MakePointNameRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakePointNameRuntimeSelectResult {
  PointName resultant_point_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Point Name - Ensure Unique {/* #make-a-point-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---ensure-unique)

`/briosa.ConstructionOperations/MakePointNameEnsureUnique` · Operation ID: `construction_operations.make_point_name_ensure_unique`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 2 | `use_number_suffix` | `optional bool` | Use Number Suffix? | false |
| Result | 1 | `resultant_point_name` | `PointName` | Point Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointNameEnsureUnique(MakePointNameEnsureUniqueRequest) returns (MakePointNameEnsureUniqueResult);

message MakePointNameEnsureUniqueRequest {
  optional PointName point_name = 1;
  optional bool use_number_suffix = 2;
}

message MakePointNameEnsureUniqueResult {
  PointName resultant_point_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Point Name Ref List From a Group {/* #make-a-point-name-ref-list-from-a-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group)

`/briosa.ConstructionOperations/MakePointNameRefListFromGroup` · Operation ID: `construction_operations.make_point_name_ref_list_from_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name` | `optional CollectionObjectName` | Group Name | Required |
| Result | 1 | `resultant_point_name_list` | `repeated PointName` | Resultant Point Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointNameRefListFromGroup(MakePointNameRefListFromGroupRequest) returns (MakePointNameRefListFromGroupResult);

message MakePointNameRefListFromGroupRequest {
  optional CollectionObjectName group_name = 1;
}

message MakePointNameRefListFromGroupResult {
  repeated PointName resultant_point_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Point Name Ref List - Runtime Select {/* #make-a-point-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select)

`/briosa.ConstructionOperations/MakePointNameRefListRuntimeSelect` · Operation ID: `construction_operations.make_point_name_ref_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `resultant_point_name_list` | `repeated PointName` | Resultant Point Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointNameRefListRuntimeSelect(MakePointNameRefListRuntimeSelectRequest) returns (MakePointNameRefListRuntimeSelectResult);

message MakePointNameRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakePointNameRefListRuntimeSelectResult {
  repeated PointName resultant_point_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Point Name Ref List - Wildcard Select {/* #make-a-point-name-ref-list---wildcard-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select)

`/briosa.ConstructionOperations/MakePointNameRefListWildcardSelect` · Operation ID: `construction_operations.make_point_name_ref_list_wildcard_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `group_name_wildcard_criteria` | `optional string` | Group Name Wildcard Criteria | * |
| Request | 3 | `point_name_wildcard_criteria` | `optional string` | Point Name Wildcard Criteria | * |
| Result | 1 | `resultant_point_name_list` | `repeated PointName` | Resultant Point Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePointNameRefListWildcardSelect(MakePointNameRefListWildcardSelectRequest) returns (MakePointNameRefListWildcardSelectResult);

message MakePointNameRefListWildcardSelectRequest {
  optional string collection_wildcard_criteria = 1;
  optional string group_name_wildcard_criteria = 2;
  optional string point_name_wildcard_criteria = 3;
}

message MakePointNameRefListWildcardSelectResult {
  repeated PointName resultant_point_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Clear Hidden Point Bar Database {/* #clear-hidden-point-bar-database */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#clear-hidden-point-bar-database)

`/briosa.ConstructionOperations/ClearHiddenPointBarDatabase` · Operation ID: `construction_operations.clear_hidden_point_bar_database`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ClearHiddenPointBarDatabase(ClearHiddenPointBarDatabaseRequest) returns (ClearHiddenPointBarDatabaseResult);

message ClearHiddenPointBarDatabaseRequest {}

message ClearHiddenPointBarDatabaseResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Hidden Point Rod {/* #create-hidden-point-rod */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point-rod)

`/briosa.ConstructionOperations/CreateHiddenPointRod` · Operation ID: `construction_operations.create_hidden_point_rod`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `hidden_point_rod_name` | `optional string` | Hidden Point Rod Name | Empty |
| Request | 2 | `a_to_b_distance` | `optional double` | A to B (Target to Target) Distance | 0.000000 |
| Request | 3 | `a_to_c_distance` | `optional double` | A to C (Target to Tip) Distance | 0.000000 |
| Request | 4 | `inter_point_tolerance` | `optional double` | A to B Inter-point Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `hidden_point_rod_index` | `int32` | Hidden Point Rod Index | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateHiddenPointRod(CreateHiddenPointRodRequest) returns (CreateHiddenPointRodResult);

message CreateHiddenPointRodRequest {
  optional string hidden_point_rod_name = 1;
  optional double a_to_b_distance = 2;
  optional double a_to_c_distance = 3;
  optional double inter_point_tolerance = 4;
}

message CreateHiddenPointRodResult {
  int32 hidden_point_rod_index = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `a_to_b_distance` | MP qualifier: Target to Target. |
| `a_to_c_distance` | MP qualifier: Target to Tip. |

## Get Hidden Point Rod Index by Name {/* #get-hidden-point-rod-index-by-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name)

`/briosa.ConstructionOperations/GetHiddenPointRodIndexByName` · Operation ID: `construction_operations.get_hidden_point_rod_index_by_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `hidden_point_rod_name` | `optional string` | Hidden Point Rod Name | Empty |
| Result | 1 | `hidden_point_rod_index` | `int32` | Hidden Point Rod Index | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetHiddenPointRodIndexByName(GetHiddenPointRodIndexByNameRequest) returns (GetHiddenPointRodIndexByNameResult);

message GetHiddenPointRodIndexByNameRequest {
  optional string hidden_point_rod_name = 1;
}

message GetHiddenPointRodIndexByNameResult {
  int32 hidden_point_rod_index = 1;
  MpExecutionDetails execution = 1000;
}
```

## Delete Hidden Point Rod {/* #delete-hidden-point-rod */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#delete-hidden-point-rod)

`/briosa.ConstructionOperations/DeleteHiddenPointRod` · Operation ID: `construction_operations.delete_hidden_point_rod`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `hidden_point_rod_index` | `optional int32` | Hidden Point Rod Index | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteHiddenPointRod(DeleteHiddenPointRodRequest) returns (DeleteHiddenPointRodResult);

message DeleteHiddenPointRodRequest {
  optional int32 hidden_point_rod_index = 1;
}

message DeleteHiddenPointRodResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Hidden Point {/* #create-hidden-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point)

`/briosa.ConstructionOperations/CreateHiddenPoint` · Operation ID: `construction_operations.create_hidden_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `end_a_point_name` | `optional PointName` | End A Point Name | Required |
| Request | 2 | `end_b_point_name` | `optional PointName` | End B Point Name | Required |
| Request | 3 | `hidden_point_rod_index` | `optional int32` | Hidden Point Rod Index | 0 |
| Request | 4 | `overwrite_existing_point` | `optional bool` | Overwrite existing point? | false |
| Request | 5 | `point_name_to_create` | `optional PointName` | Point Name To Create | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateHiddenPoint(CreateHiddenPointRequest) returns (CreateHiddenPointResult);

message CreateHiddenPointRequest {
  optional PointName end_a_point_name = 1;
  optional PointName end_b_point_name = 2;
  optional int32 hidden_point_rod_index = 3;
  optional bool overwrite_existing_point = 4;
  optional PointName point_name_to_create = 5;
}

message CreateHiddenPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Basic Point and Group Construction {/* #basic-point-and-group-construction */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Intersections and Projections {/* #intersections-and-projections */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Gradients, Meshes, and Curves {/* #gradients-meshes-and-curves */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Surface, Layout, and Group Workflows {/* #surface-layout-and-group-workflows */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Point-Name Queries {/* #point-name-queries */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Hidden Point Bar {/* #hidden-point-bar */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Execution Semantics {/* #execution-semantics */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
