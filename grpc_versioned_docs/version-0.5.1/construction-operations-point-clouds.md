---
title: Construction Operations / Point Clouds
description: Released gRPC contracts for selected point-cloud construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Point Clouds

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## Shared Types

```proto
enum CloudThinningMode {
  CLOUD_THINNING_MODE_UNSPECIFIED = 0;
  CLOUD_THINNING_MODE_NONE = 1;
  CLOUD_THINNING_MODE_RANDOM = 2;
  CLOUD_THINNING_MODE_NTH_POINT = 3;
}

message CloudThinningOptions {
  optional CloudThinningMode mode = 1;
  optional int32 point_increment = 2;
  optional int32 minimum_number_of_points = 3;
  optional int32 maximum_number_of_points = 4;
}
```

An omitted value uses `NTH_POINT`, `5`, `100`, and `20000`. An omitted field
inside a supplied value uses the corresponding default. Unknown enum values
fail closed.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Construct Point Clouds from Existing Point Group | `ConstructPointCloudsFromExistingPointGroup` | `construction_operations.construct_point_clouds_from_existing_point_group` |
| Construct Point Clouds from Existing Cloud Points - Runtime Select | `ConstructPointCloudsFromExistingCloudPointsRuntimeSelect` | `construction_operations.construct_point_clouds_from_existing_cloud_points_runtime_select` |
| Construct Point Clouds from Existing Clouds - Uniform Spacing | `ConstructPointCloudsFromExistingCloudsUniformSpacing` | `construction_operations.construct_point_clouds_from_existing_clouds_uniform_spacing` |
| Construct Point Cloud from Existing Clouds | `ConstructPointCloudFromExistingClouds` | `construction_operations.construct_point_cloud_from_existing_clouds` |
| Construct Point Cloud from Visible Cloud Points | `ConstructPointCloudFromVisibleCloudPoints` | `construction_operations.construct_point_cloud_from_visible_cloud_points` |
| Construct Boundary Points from Cloud | `ConstructBoundaryPointsFromCloud` | `construction_operations.construct_boundary_points_from_cloud` |
| Construct Point Cloud Limiting Probing Directions | `ConstructPointCloudLimitingProbingDirections` | `construction_operations.construct_point_cloud_limiting_probing_directions` |
| Construct Cross Section Cloud | `ConstructCrossSectionCloud` | `construction_operations.construct_cross_section_cloud` |
| Construct Cross Section Cloud - User Select | `ConstructCrossSectionCloudUserSelect` | `construction_operations.construct_cross_section_cloud_user_select` |
| Extract Sphere Centers from Point Cloud | `ExtractSphereCentersFromPointCloud` | `construction_operations.extract_sphere_centers_from_point_cloud` |

Each route is `/briosa.ConstructionOperations/<RPC>`.

## Construct Point Clouds from Existing Point Group

```proto
message ConstructPointCloudsFromExistingPointGroupRequest {
  optional CollectionObjectName point_group_name = 1;
  optional CollectionObjectName cloud_name = 2;
}
message ConstructPointCloudsFromExistingPointGroupResult {
  MpExecutionDetails execution = 1000;
}
```

Both identities are required and must identify a Point Group and Cloud.

## Construct Point Clouds from Existing Cloud Points - Runtime Select

```proto
message ConstructPointCloudsFromExistingCloudPointsRuntimeSelectRequest {
  optional CollectionObjectName cloud_name = 1;
}
message ConstructPointCloudsFromExistingCloudPointsRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

The destination Cloud identity is required. The operator selects points in
SpatialAnalyzer; cancellation does not prove the interaction stopped.

## Construct Point Clouds from Existing Clouds - Uniform Spacing

```proto
message ConstructPointCloudsFromExistingCloudsUniformSpacingRequest {
  repeated CollectionObjectName existing_point_cloud_list = 1;
  optional double desired_point_spacing = 2;
  optional int32 minimum_points_per_output_point = 3;
  optional CollectionObjectName new_cloud_name = 4;
  optional bool hide_original_point_clouds = 5;
}
message ConstructPointCloudsFromExistingCloudsUniformSpacingResult {
  MpExecutionDetails execution = 1000;
}
```

The cloud list and destination are required. Omitted settings use `0.02`, `3`,
and `true`.

## Construct Point Cloud from Existing Clouds

```proto
message ConstructPointCloudFromExistingCloudsRequest {
  repeated CollectionObjectName existing_point_cloud_list = 1;
  optional CollectionObjectName new_cloud_name = 2;
  optional CloudThinningOptions cloud_thinning_settings = 3;
  optional bool hide_original_point_clouds = 4;
  optional bool set_cloud_point_rgb_from_voxels = 5;
}
message ConstructPointCloudFromExistingCloudsResult {
  MpExecutionDetails execution = 1000;
}
```

The cloud list and destination are required. Thinning uses the shared defaults,
hide-original defaults to `true`, and the SA 2026.1 RGB option defaults to
`false`.

## Construct Point Cloud from Visible Cloud Points

```proto
message ConstructPointCloudFromVisibleCloudPointsRequest {
  repeated CollectionObjectName source_clouds = 1;
  optional CollectionObjectName destination_cloud_name = 2;
}
message ConstructPointCloudFromVisibleCloudPointsResult {
  MpExecutionDetails execution = 1000;
}
```

The source list and destination are required. SpatialAnalyzer uses its live
visibility and clipping state.

## Construct Boundary Points from Cloud

```proto
message ConstructBoundaryPointsFromCloudRequest {
  optional CollectionObjectName source_cloud_name = 1;
  optional CollectionObjectName destination_cloud_name = 2;
}
message ConstructBoundaryPointsFromCloudResult {
  MpExecutionDetails execution = 1000;
}
```

Both Cloud identities are required. Suitable scan-stripe data is required for
licensed validation.

## Construct Point Cloud Limiting Probing Directions

```proto
message ConstructPointCloudLimitingProbingDirectionsRequest {
  optional CollectionObjectName source_cloud_name = 1;
  optional CollectionObjectName normal_to_object_name = 2;
  optional double acceptance_angle = 3;
  optional CollectionObjectName destination_cloud_name = 4;
  optional bool hide_source_cloud = 5;
}
message ConstructPointCloudLimitingProbingDirectionsResult {
  MpExecutionDetails execution = 1000;
}
```

The three identities are required. The angle defaults to `30.0` and hide-source
defaults to `false`.

## Construct Cross Section Cloud

```proto
message ConstructCrossSectionCloudRequest {
  optional CollectionObjectName cross_section_cloud_name = 1;
  optional bool cylindrical_cross_section_mode = 2;
  optional double start_distance = 3;
  optional double section_spacing = 4;
  optional double proximity_threshold = 5;
  optional int32 maximum_section_count = 6;
  optional bool limit_cross_section_extent = 7;
  optional double radius_limit = 8;
  optional bool project_to_reference_surface = 9;
  optional CollectionObjectName reference_object = 10;
  repeated CollectionObjectName input_clouds = 11;
  optional CloudThinningOptions cloud_thinning_settings = 12;
  optional bool update_existing_cloud = 13;
}
message ConstructCrossSectionCloudResult {
  MpExecutionDetails execution = 1000;
}
```

The destination and input-cloud list are required. The reference object remains
optional and is passed as the MP's empty `Any` identity when omitted. Other
settings preserve their zero, `false`, or shared thinning defaults.

## Construct Cross Section Cloud - User Select

```proto
message ConstructCrossSectionCloudUserSelectRequest {
  optional CollectionObjectName cross_section_cloud_name = 1;
  optional double proximity_threshold = 2;
  optional bool limit_cross_section_extent = 3;
  optional double radius_limit = 4;
  optional bool project_to_reference_surface = 5;
  repeated CollectionObjectName reference_planes = 6;
  repeated CollectionObjectName input_clouds = 7;
  optional CloudThinningOptions cloud_thinning_settings = 8;
  optional bool update_existing_cloud = 9;
}
message ConstructCrossSectionCloudUserSelectResult {
  MpExecutionDetails execution = 1000;
}
```

The destination, reference-plane list, and input-cloud list are required. The
exact SDK binding does not expose the `Maximum Section Count` described by the
installed documentation, so this request intentionally omits it.

## Extract Sphere Centers from Point Cloud

```proto
message ExtractSphereCentersFromPointCloudRequest {
  optional CollectionObjectName cloud_name = 1;
  optional double desired_diameter = 2;
  optional double extraction_tolerance = 3;
  optional int32 minimum_point_count = 4;
  optional CollectionObjectName group_name_for_points = 5;
  optional bool perform_final_fit = 6;
  optional double final_fit_cone_angle = 7;
}
message ExtractSphereCentersFromPointCloudResult {
  int32 number_of_points_extracted = 1;
  MpExecutionDetails execution = 1000;
}
```

The source Cloud and destination Point Group identities are required. Omitted
settings use `0.0`, `0.0`, `50`, `true`, and `120.0` in argument order.

[Catalog](/mp-command-catalog/commands/construction-operations-point-clouds) · [.NET](/api/dotnet/construction-operations-point-clouds) · [Python](/api/python/construction-operations-point-clouds) · [JavaScript/TypeScript](/api/javascript/construction-operations-point-clouds)
