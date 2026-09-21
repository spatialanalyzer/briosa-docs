---
title: Construction Operations / Points and Groups
description: Released gRPC contracts for selected point and group construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Points and Groups

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay. Required
object identities must have the object type described below. Each route is
`/briosa.ConstructionOperations/<RPC>`.

## Shared Types

```proto
enum SurveyTargetType {
  SURVEY_TARGET_TYPE_UNSPECIFIED = 0;
  SURVEY_TARGET_TYPE_TRIANGLE = 1;
  SURVEY_TARGET_TYPE_CIRCLE = 2;
}

enum WcfAxis {
  WCF_AXIS_UNSPECIFIED = 0;
  WCF_AXIS_X = 1;
  WCF_AXIS_Y = 2;
  WCF_AXIS_Z = 3;
}

enum EdgePointMode {
  EDGE_POINT_MODE_UNSPECIFIED = 0;
  EDGE_POINT_MODE_INCLUDE_EDGES = 1;
  EDGE_POINT_MODE_EXCLUDE_EDGES = 2;
  EDGE_POINT_MODE_EDGES_ONLY = 3;
}

message ProjectedPointGradient {
  Vector projected_point = 1;
  Vector normal_vector = 2;
  Vector u_direction = 3;
  Vector v_direction = 4;
}

message ObjectOriginResult {
  Vector vector_representation = 1;
  double x_value = 2;
  double y_value = 3;
  double z_value = 4;
}

message GroupAverageResult {
  double rms_deviation = 1;
  double max_absolute_deviation = 2;
  double average_deviation = 3;
}
```

Omitted enums use `Triangle`, `Include Edges`, or no WCF axis. The two
projection RPCs that take an axis require X, Y, or Z; unspecified and unknown
values fail closed.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Construct Point (Fit to Points) | `ConstructPointFitToPoints` | `construction_operations.construct_point_fit_to_points` |
| Construct a Point in Working Coordinates | `ConstructPointInWorkingCoordinates` | `construction_operations.construct_point_in_working_coordinates` |
| Construct Point From Survey Target Center | `ConstructPointFromSurveyTargetCenter` | `construction_operations.construct_point_from_survey_target_center` |
| Set Point Position in Working Coordinates | `SetPointPositionInWorkingCoordinates` | `construction_operations.set_point_position_in_working_coordinates` |
| Transform Points by Delta (About Working Frame) | `TransformPointsByDeltaAboutWorkingFrame` | `construction_operations.transform_points_by_delta_about_working_frame` |
| Construct a Point at line MidPoint | `ConstructPointAtLineMidpoint` | `construction_operations.construct_point_at_line_midpoint` |
| Construct Point Group from Point Name Ref List | `ConstructPointGroupFromPointNameRefList` | `construction_operations.construct_point_group_from_point_name_ref_list` |
| Construct Point Groups from Vector Groups | `ConstructPointGroupsFromVectorGroups` | `construction_operations.construct_point_groups_from_vector_groups` |
| Construct Point Group from Point Cloud | `ConstructPointGroupFromPointCloud` | `construction_operations.construct_point_group_from_point_cloud` |
| Construct Point From Cloud Point - Runtime Select | `ConstructPointFromCloudPointRuntimeSelect` | `construction_operations.construct_point_from_cloud_point_runtime_select` |
| Construct a Point at Circle Center | `ConstructPointAtCircleCenter` | `construction_operations.construct_point_at_circle_center` |
| Construct Point at Intersection of Planes | `ConstructPointAtIntersectionOfPlanes` | `construction_operations.construct_point_at_intersection_of_planes` |
| Construct Point at Intersection of Two Lines | `ConstructPointAtIntersectionOfTwoLines` | `construction_operations.construct_point_at_intersection_of_two_lines` |
| Construct Point at Intersection of Plane and Line | `ConstructPointAtIntersectionOfPlaneAndLine` | `construction_operations.construct_point_at_intersection_of_plane_and_line` |
| Construct Point at Intersection of 2 B-Splines | `ConstructPointAtIntersectionOfTwoBSplines` | `construction_operations.construct_point_at_intersection_of_two_b_splines` |
| Construct Point at intersection of B-Spline and Surfaces | `ConstructPointAtIntersectionOfBSplineAndSurfaces` | `construction_operations.construct_point_at_intersection_of_b_spline_and_surfaces` |
| Construct Points at Intersection of Circle and Line | `ConstructPointsAtIntersectionOfCircleAndLine` | `construction_operations.construct_points_at_intersection_of_circle_and_line` |
| Construct Points at Intersection of Principle Object Axes and Surfaces | `ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfaces` | `construction_operations.construct_points_at_intersection_of_principal_object_axes_and_surfaces` |
| Construct Points from Cylinder | `ConstructPointsFromCylinder` | `construction_operations.construct_points_from_cylinder` |
| Construct a Point at Projection of Point onto An Object | `ConstructPointAtProjectionOfPointOntoObject` | `construction_operations.construct_point_at_projection_of_point_onto_object` |
| Construct Points at Projection on Surfaces - Parallel to WCF Axis | `ConstructPointsAtProjectionOnSurfacesParallelToWcfAxis` | `construction_operations.construct_points_at_projection_on_surfaces_parallel_to_wcf_axis` |
| Construct Points at Projection on Surfaces - Radial from WCF Axis | `ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxis` | `construction_operations.construct_points_at_projection_on_surfaces_radial_from_wcf_axis` |
| Construct Points at Projection on Surfaces - Spherical from WCF Origin | `ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOrigin` | `construction_operations.construct_points_at_projection_on_surfaces_spherical_from_wcf_origin` |
| Get Gradient At Projected Point On Surface | `GetGradientAtProjectedPointOnSurface` | `construction_operations.get_gradient_at_projected_point_on_surface` |
| Get Gradient At Projected Point On Surface Edge | `GetGradientAtProjectedPointOnSurfaceEdge` | `construction_operations.get_gradient_at_projected_point_on_surface_edge` |
| Construct Points By Projecting Points On Mesh Along Direction | `ConstructPointsByProjectingPointsOnMeshAlongDirection` | `construction_operations.construct_points_by_projecting_points_on_mesh_along_direction` |
| Construct Points Spaced at a Distance on Curves | `ConstructPointsSpacedAtDistanceOnCurves` | `construction_operations.construct_points_spaced_at_distance_on_curves` |
| Construct Points N-Spaced on Curves | `ConstructPointsNSpacedOnCurves` | `construction_operations.construct_points_n_spaced_on_curves` |
| Construct Points on Curves Using Max Chordal Deviation | `ConstructPointsOnCurvesUsingMaxChordalDeviation` | `construction_operations.construct_points_on_curves_using_max_chordal_deviation` |
| Construct Points on Objects Vertices | `ConstructPointsOnObjectVertices` | `construction_operations.construct_points_on_object_vertices` |
| Construct Points on Surface(s) by Clicking | `ConstructPointsOnSurfacesByClicking` | `construction_operations.construct_points_on_surfaces_by_clicking` |
| Construct Points From Surface Faces - Runtime Select | `ConstructPointsFromSurfaceFacesRuntimeSelect` | `construction_operations.construct_points_from_surface_faces_runtime_select` |
| Construct Points From Surfaces On UV Grid | `ConstructPointsFromSurfacesOnUvGrid` | `construction_operations.construct_points_from_surfaces_on_uv_grid` |
| Construct Point at Object Origin | `ConstructPointAtObjectOrigin` | `construction_operations.construct_point_at_object_origin` |
| Construct Points Shifted in Working Frame | `ConstructPointsShiftedInWorkingFrame` | `construction_operations.construct_points_shifted_in_working_frame` |
| Construct Points Cylindrically Shifted | `ConstructPointsCylindricallyShifted` | `construction_operations.construct_points_cylindrically_shifted` |
| Construct Points WildCard Selection | `ConstructPointsWildcardSelection` | `construction_operations.construct_points_wildcard_selection` |
| Construct Points Subset with greatest spacing | `ConstructPointsSubsetWithGreatestSpacing` | `construction_operations.construct_points_subset_with_greatest_spacing` |
| Construct Points Layout on Grid | `ConstructPointsLayoutOnGrid` | `construction_operations.construct_points_layout_on_grid` |
| Construct Points Auto-Correspond 2 groups Proximity | `ConstructPointsAutoCorrespondTwoGroupsProximity` | `construction_operations.construct_points_auto_correspond_two_groups_proximity` |
| Construct Points Auto-Correspond 2 groups Inter-Point Distance | `ConstructPointsAutoCorrespondTwoGroupsInterPointDistance` | `construction_operations.construct_points_auto_correspond_two_groups_inter_point_distance` |
| Average a set of Groups | `AverageSetOfGroups` | `construction_operations.average_set_of_groups` |
| Copy Groups Excluding Obscured Points | `CopyGroupsExcludingObscuredPoints` | `construction_operations.copy_groups_excluding_obscured_points` |
| Make a Point Name - Runtime Select | `MakePointNameRuntimeSelect` | `construction_operations.make_point_name_runtime_select` |
| Make a Point Name - Ensure Unique | `MakePointNameEnsureUnique` | `construction_operations.make_point_name_ensure_unique` |
| Make a Point Name Ref List From a Group | `MakePointNameRefListFromGroup` | `construction_operations.make_point_name_ref_list_from_group` |
| Make a Point Name Ref List - Runtime Select | `MakePointNameRefListRuntimeSelect` | `construction_operations.make_point_name_ref_list_runtime_select` |
| Make a Point Name Ref List - Wildcard Select | `MakePointNameRefListWildcardSelect` | `construction_operations.make_point_name_ref_list_wildcard_select` |
| Clear Hidden Point Bar Database | `ClearHiddenPointBarDatabase` | `construction_operations.clear_hidden_point_bar_database` |
| Create Hidden Point Rod | `CreateHiddenPointRod` | `construction_operations.create_hidden_point_rod` |
| Get Hidden Point Rod Index by Name | `GetHiddenPointRodIndexByName` | `construction_operations.get_hidden_point_rod_index_by_name` |
| Delete Hidden Point Rod | `DeleteHiddenPointRod` | `construction_operations.delete_hidden_point_rod` |
| Create Hidden Point | `CreateHiddenPoint` | `construction_operations.create_hidden_point` |

The MP spelling `Principle` remains in the catalog. The public API uses the
correct `Principal` spelling.

## Basic Point and Group Construction

```proto
message ConstructPointFitToPointsRequest {
  repeated PointName point_names = 1;
  optional PointName resulting_point_name = 2;
}
message ConstructPointFitToPointsResult { MpExecutionDetails execution = 1000; }

message ConstructPointInWorkingCoordinatesRequest {
  optional PointName point_name = 1;
  optional Vector working_coordinates = 2;
}
message ConstructPointInWorkingCoordinatesResult { MpExecutionDetails execution = 1000; }

message ConstructPointFromSurveyTargetCenterRequest {
  optional CollectionObjectName cloud_containing_target = 1;
  optional PointName reference_seed_point = 2;
  optional SurveyTargetType survey_target_type = 3;
  optional double search_diameter = 4;
  optional PointName result_center_point_name = 5;
}
message ConstructPointFromSurveyTargetCenterResult { MpExecutionDetails execution = 1000; }

message SetPointPositionInWorkingCoordinatesRequest {
  optional PointName point_name = 1;
  optional Vector position_in_working_coordinates = 2;
}
message SetPointPositionInWorkingCoordinatesResult { MpExecutionDetails execution = 1000; }

message TransformPointsByDeltaAboutWorkingFrameRequest {
  repeated PointName point_name_list = 1;
  optional Vector delta_in_working_coordinates = 2;
}
message TransformPointsByDeltaAboutWorkingFrameResult { MpExecutionDetails execution = 1000; }

message ConstructPointAtLineMidpointRequest {
  optional CollectionObjectName line_name = 1;
  optional PointName point_name = 2;
}
message ConstructPointAtLineMidpointResult { MpExecutionDetails execution = 1000; }

message ConstructPointGroupFromPointNameRefListRequest {
  repeated PointName point_name_list = 1;
  optional CollectionObjectName group_name = 2;
}
message ConstructPointGroupFromPointNameRefListResult { MpExecutionDetails execution = 1000; }

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
message ConstructPointGroupFromPointCloudResult { MpExecutionDetails execution = 1000; }

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

All identities and nonempty lists are required unless described as optional by
the MP itself. Survey target type defaults to `Triangle`; search diameter and
vectors default to zero. Vector-group suffix defaults to empty and both point
creation flags default to `false`. Point-cloud conversion defaults to `pt`,
`0`, `0.0`, `false`, `0.5`, and `false`. Runtime cloud selection defaults to
prompt `Select cloud point`, does not construct a point, and permits the point
name to be omitted.

## Intersections and Projections

```proto
message ConstructPointAtCircleCenterRequest {
  optional CollectionObjectName circle_name = 1;
  optional PointName point_name = 2;
}
message ConstructPointAtCircleCenterResult { MpExecutionDetails execution = 1000; }

message ConstructPointAtIntersectionOfPlanesRequest {
  optional CollectionObjectName plane_1_name = 1;
  optional CollectionObjectName plane_2_name = 2;
  optional CollectionObjectName plane_3_name = 3;
  optional PointName point_name = 4;
}
message ConstructPointAtIntersectionOfPlanesResult { MpExecutionDetails execution = 1000; }

message ConstructPointAtIntersectionOfTwoLinesRequest {
  optional CollectionObjectName first_line_name = 1;
  optional CollectionObjectName second_line_name = 2;
  optional PointName resulting_point_name = 3;
}
message ConstructPointAtIntersectionOfTwoLinesResult { MpExecutionDetails execution = 1000; }

message ConstructPointAtIntersectionOfPlaneAndLineRequest {
  optional CollectionObjectName plane_name = 1;
  optional CollectionObjectName line_name = 2;
  optional PointName resulting_point_name = 3;
}
message ConstructPointAtIntersectionOfPlaneAndLineResult { MpExecutionDetails execution = 1000; }

message ConstructPointAtIntersectionOfTwoBSplinesRequest {
  optional CollectionObjectName first_b_spline_name = 1;
  optional CollectionObjectName second_b_spline_name = 2;
  optional PointName point_name = 3;
}
message ConstructPointAtIntersectionOfTwoBSplinesResult { MpExecutionDetails execution = 1000; }

message ConstructPointAtIntersectionOfBSplineAndSurfacesRequest {
  optional CollectionObjectName b_spline_name = 1;
  repeated CollectionObjectName surface_list = 2;
  optional double approximation_tolerance = 3;
  optional PointName point_name = 4;
}
message ConstructPointAtIntersectionOfBSplineAndSurfacesResult { MpExecutionDetails execution = 1000; }

message ConstructPointsAtIntersectionOfCircleAndLineRequest {
  optional CollectionObjectName circle_name = 1;
  optional CollectionObjectName line_name = 2;
  optional PointName base_point_name_for_results = 3;
}
message ConstructPointsAtIntersectionOfCircleAndLineResult { MpExecutionDetails execution = 1000; }

message ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesRequest {
  repeated CollectionObjectName axis_object_list = 1;
  repeated CollectionObjectName surface_list = 2;
  optional string point_suffix = 3;
  optional CollectionObjectName resultant_group_name = 4;
}
message ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesResult { MpExecutionDetails execution = 1000; }

message ConstructPointsFromCylinderRequest {
  optional CollectionObjectName cylinder_name = 1;
  optional CollectionObjectName group_name = 2;
}
message ConstructPointsFromCylinderResult { MpExecutionDetails execution = 1000; }

message ConstructPointAtProjectionOfPointOntoObjectRequest {
  optional PointName point_to_project = 1;
  optional CollectionObjectName object_name = 2;
  optional PointName resulting_point_name = 3;
}
message ConstructPointAtProjectionOfPointOntoObjectResult { MpExecutionDetails execution = 1000; }

message ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisRequest {
  repeated CollectionObjectName surface_list = 1;
  repeated PointName point_names = 2;
  optional string group_name_to_contain_new_points = 3;
  optional string point_name_prefix = 4;
  optional string point_name_suffix = 5;
  optional WcfAxis axis = 6;
}
message ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisResult { MpExecutionDetails execution = 1000; }

message ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisRequest {
  repeated CollectionObjectName surface_list = 1;
  repeated PointName point_names = 2;
  optional string group_name_to_contain_new_points = 3;
  optional string point_name_prefix = 4;
  optional string point_name_suffix = 5;
  optional WcfAxis axis = 6;
}
message ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisResult { MpExecutionDetails execution = 1000; }

message ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginRequest {
  repeated CollectionObjectName surface_list = 1;
  repeated PointName point_names = 2;
  optional string group_name_to_contain_new_points = 3;
  optional string point_name_prefix = 4;
  optional string point_name_suffix = 5;
}
message ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginResult { MpExecutionDetails execution = 1000; }
```

All geometric identities and lists are required. B-Spline/surface intersection
tolerance defaults to `0.001`; names and suffixes default to empty. The two WCF
axis operations require an explicit axis because the exact export contains no
valid default.

## Gradients, Meshes, and Curves

```proto
message GetGradientAtProjectedPointOnSurfaceRequest {
  optional PointName point_to_project = 1;
  optional CollectionObjectName surface_name = 2;
  optional bool generate_output_vector_lines = 3;
}
message GetGradientAtProjectedPointOnSurfaceResult {
  ProjectedPointGradient gradient = 1;
  MpExecutionDetails execution = 1000;
}

message GetGradientAtProjectedPointOnSurfaceEdgeRequest {
  optional PointName point_to_project = 1;
  optional CollectionObjectName surface_edge_b_spline = 2;
  optional CollectionObjectName surface_name = 3;
  optional Vector edge_offset_direction = 4;
  optional double edge_offset_distance = 5;
  optional bool generate_output_vector_lines = 6;
}
message GetGradientAtProjectedPointOnSurfaceEdgeResult {
  ProjectedPointGradient gradient = 1;
  MpExecutionDetails execution = 1000;
}

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

message ConstructPointsSpacedAtDistanceOnCurvesRequest {
  repeated CollectionObjectName b_spline_list = 1;
  optional double distance_between_points = 2;
  optional CollectionObjectName resultant_group_name = 3;
  optional string resultant_point_name_prefix = 4;
}
message ConstructPointsSpacedAtDistanceOnCurvesResult { MpExecutionDetails execution = 1000; }

message ConstructPointsNSpacedOnCurvesRequest {
  repeated CollectionObjectName b_spline_list = 1;
  optional int32 number_of_evenly_spaced_points = 2;
  optional CollectionObjectName resultant_group_name = 3;
  optional string resultant_point_name_prefix = 4;
}
message ConstructPointsNSpacedOnCurvesResult { MpExecutionDetails execution = 1000; }

message ConstructPointsOnCurvesUsingMaxChordalDeviationRequest {
  repeated CollectionObjectName b_spline_list = 1;
  optional double maximum_chordal_deviation = 2;
  optional double maximum_trim_edge_angle = 3;
  optional double maximum_chord_length = 4;
  optional CollectionObjectName resultant_group_name = 5;
  optional string resultant_point_name_prefix = 6;
}
message ConstructPointsOnCurvesUsingMaxChordalDeviationResult { MpExecutionDetails execution = 1000; }
```

Output-vector creation defaults to `false`. Edge offset defaults to the zero
vector and `0.01`. Mesh projection defaults to bidirectional `true` and returns
the resultant Point Names. Curve defaults are respectively `0.5`, `10`, and
`0.05`/`15.0`/`0.0`; prefixes default to empty.

## Surface, Layout, and Group Workflows

```proto
message ConstructPointsOnObjectVerticesRequest {
  repeated CollectionObjectName object_name_list = 1;
  optional CollectionObjectName resultant_group_name = 2;
}
message ConstructPointsOnObjectVerticesResult { MpExecutionDetails execution = 1000; }

message ConstructPointsOnSurfacesByClickingRequest {
  optional CollectionObjectName group_name_for_points = 1;
  optional string first_point_name = 2;
}
message ConstructPointsOnSurfacesByClickingResult { MpExecutionDetails execution = 1000; }

message ConstructPointsFromSurfaceFacesRuntimeSelectRequest {}
message ConstructPointsFromSurfaceFacesRuntimeSelectResult { MpExecutionDetails execution = 1000; }

message ConstructPointsFromSurfacesOnUvGridRequest {
  repeated CollectionObjectName surface_list = 1;
  optional string uv_point_group_base_name = 2;
  optional bool make_each_line_separate_group = 3;
  optional int32 number_of_u_grids = 4;
  optional int32 number_of_v_grids = 5;
  optional EdgePointMode edge_point_mode = 6;
}
message ConstructPointsFromSurfacesOnUvGridResult { MpExecutionDetails execution = 1000; }

message ConstructPointAtObjectOriginRequest {
  optional CollectionObjectName object_name = 1;
  optional PointName resultant_point_name = 2;
}
message ConstructPointAtObjectOriginResult {
  ObjectOriginResult origin = 1;
  MpExecutionDetails execution = 1000;
}

message ConstructPointsShiftedInWorkingFrameRequest {
  repeated PointName original_points = 1;
  optional CollectionObjectName group_for_new_points = 2;
  optional Vector shift_vector = 3;
}
message ConstructPointsShiftedInWorkingFrameResult { MpExecutionDetails execution = 1000; }

message ConstructPointsCylindricallyShiftedRequest {
  optional CollectionObjectName reference_object_name = 1;
  repeated PointName original_points = 2;
  optional CollectionObjectName group_for_new_points = 3;
  optional double radial_shift = 4;
  optional double theta_shift_degrees = 5;
  optional double planar_shift = 6;
}
message ConstructPointsCylindricallyShiftedResult { MpExecutionDetails execution = 1000; }

message ConstructPointsWildcardSelectionRequest {
  repeated CollectionObjectName groups_to_select_from = 1;
  optional PointName wildcard_selection_names = 2;
  optional CollectionObjectName group_for_new_points = 3;
  optional bool include_prior_complete_name = 4;
}
message ConstructPointsWildcardSelectionResult { MpExecutionDetails execution = 1000; }

message ConstructPointsSubsetWithGreatestSpacingRequest {
  repeated PointName points_to_subsample = 1;
  optional int32 subset_size = 2;
  optional CollectionObjectName group_for_subset = 3;
}
message ConstructPointsSubsetWithGreatestSpacingResult { MpExecutionDetails execution = 1000; }

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
message ConstructPointsLayoutOnGridResult { MpExecutionDetails execution = 1000; }

message ConstructPointsAutoCorrespondTwoGroupsProximityRequest {
  optional CollectionObjectName reference_group = 1;
  optional CollectionObjectName group_to_be_copied = 2;
  optional double same_point_tolerance = 3;
  optional CollectionObjectName group_to_contain_matched_points = 4;
}
message ConstructPointsAutoCorrespondTwoGroupsProximityResult { MpExecutionDetails execution = 1000; }

message ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceRequest {
  optional CollectionObjectName reference_group = 1;
  optional CollectionObjectName group_to_be_copied = 2;
  optional double same_point_tolerance = 3;
  optional CollectionObjectName group_to_contain_matched_points = 4;
}
message ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceResult { MpExecutionDetails execution = 1000; }

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

message CopyGroupsExcludingObscuredPointsRequest {
  optional CollectionInstrumentId instrument_id = 1;
  repeated CollectionObjectName group_names = 2;
  optional CollectionName new_collection_name = 3;
}
message CopyGroupsExcludingObscuredPointsResult { MpExecutionDetails execution = 1000; }
```

The two interactive surface operations rely on the SpatialAnalyzer UI;
deadline or cancellation does not prove that the interaction stopped. Clicking
starts at `p0`. UV-grid defaults are `UV Points`, one combined group, 5 by 5,
and `Include Edges`. Shift values default to zero, wildcard inclusion defaults
to `false`, and greatest-spacing defaults to 10 points in `Spaced Points`.
PointGrid layout defaults to prefix `p`, X 0–100/10, Y 0–50/10, and Z 0–0/1.
Auto-correspond tolerances are `0.25` and `0.1`. Average tolerances are zero
(none); tolerance failure may still return statistics as partial success.

## Point-Name Queries

```proto
message MakePointNameRuntimeSelectRequest { optional string user_prompt = 1; }
message MakePointNameRuntimeSelectResult {
  PointName resultant_point_name = 1;
  MpExecutionDetails execution = 1000;
}

message MakePointNameEnsureUniqueRequest {
  optional PointName point_name = 1;
  optional bool use_number_suffix = 2;
}
message MakePointNameEnsureUniqueResult {
  PointName resultant_point_name = 1;
  MpExecutionDetails execution = 1000;
}

message MakePointNameRefListFromGroupRequest {
  optional CollectionObjectName group_name = 1;
}
message MakePointNameRefListFromGroupResult {
  repeated PointName resultant_point_name_list = 1;
  MpExecutionDetails execution = 1000;
}

message MakePointNameRefListRuntimeSelectRequest { optional string user_prompt = 1; }
message MakePointNameRefListRuntimeSelectResult {
  repeated PointName resultant_point_name_list = 1;
  MpExecutionDetails execution = 1000;
}

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

Runtime prompts default to empty. Unique-name number suffixing defaults to
`false`. Wildcard criteria each default to `*`. These RPCs query or interact
with live SpatialAnalyzer state; portable Point Name and list construction,
append, and subtraction remain client-local operations.

## Hidden Point Bar

```proto
message ClearHiddenPointBarDatabaseRequest {}
message ClearHiddenPointBarDatabaseResult { MpExecutionDetails execution = 1000; }

message CreateHiddenPointRodRequest {
  optional string hidden_point_rod_name = 1;
  optional double target_to_target_distance = 2;
  optional double target_to_tip_distance = 3;
  optional double inter_point_tolerance = 4;
}
message CreateHiddenPointRodResult {
  int32 hidden_point_rod_index = 1;
  MpExecutionDetails execution = 1000;
}

message GetHiddenPointRodIndexByNameRequest { optional string hidden_point_rod_name = 1; }
message GetHiddenPointRodIndexByNameResult {
  int32 hidden_point_rod_index = 1;
  MpExecutionDetails execution = 1000;
}

message DeleteHiddenPointRodRequest { optional int32 hidden_point_rod_index = 1; }
message DeleteHiddenPointRodResult { MpExecutionDetails execution = 1000; }

message CreateHiddenPointRequest {
  optional PointName end_a_point_name = 1;
  optional PointName end_b_point_name = 2;
  optional int32 hidden_point_rod_index = 3;
  optional bool overwrite_existing_point = 4;
  optional PointName point_name_to_create = 5;
}
message CreateHiddenPointResult { MpExecutionDetails execution = 1000; }
```

Clearing deletes every Hidden Point Bar definition in the current job without
confirmation. Rod distances and tolerance default to `0.0`; rod index defaults
to `0`; overwrite defaults to `false`. Rod indices are live, unstable SA state
that callers must manage. Hidden-point tolerance failure may be partial success.

## Execution Semantics

Every selected operation may mutate the current job or depend on live SA state.
Briosa serializes each individual MP step but does not cache, lease, or isolate
the application state between calls. Callers own multi-call workflow state.
Interactive calls may outlive a transport deadline, and no operation in this
group is automatically replayed after an ambiguous outcome.

[Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups) · [.NET](/api/dotnet/0.1.0/construction-operations-points-and-groups) · [Python](/api/python/0.1.0/construction-operations-points-and-groups) · [JavaScript and TypeScript](/api/javascript/0.1.0/construction-operations-points-and-groups)
