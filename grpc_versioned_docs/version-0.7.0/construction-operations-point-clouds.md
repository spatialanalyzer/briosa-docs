---
title: Construction Operations / Point Clouds
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Point Clouds

[SA 2026.1.0529.7](/api/grpc/construction-operations-point-clouds) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Point Clouds from Existing Point Group {/* #construct-point-clouds-from-existing-point-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-point-group)

`/briosa.ConstructionOperations/ConstructPointCloudsFromExistingPointGroup` · Operation ID: `construction_operations.construct_point_clouds_from_existing_point_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_group_name` | `optional CollectionObjectName` | Point Group Name | Required |
| Request | 2 | `cloud_name` | `optional CollectionObjectName` | Cloud Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointCloudsFromExistingPointGroup(ConstructPointCloudsFromExistingPointGroupRequest) returns (ConstructPointCloudsFromExistingPointGroupResult);

message ConstructPointCloudsFromExistingPointGroupRequest {
  optional CollectionObjectName point_group_name = 1;
  optional CollectionObjectName cloud_name = 2;
}

message ConstructPointCloudsFromExistingPointGroupResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point Clouds from Existing Cloud Points - Runtime Select {/* #construct-point-clouds-from-existing-cloud-points---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-cloud-points---runtime-select)

`/briosa.ConstructionOperations/ConstructPointCloudsFromExistingCloudPointsRuntimeSelect` · Operation ID: `construction_operations.construct_point_clouds_from_existing_cloud_points_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `optional CollectionObjectName` | Cloud Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointCloudsFromExistingCloudPointsRuntimeSelect(ConstructPointCloudsFromExistingCloudPointsRuntimeSelectRequest) returns (ConstructPointCloudsFromExistingCloudPointsRuntimeSelectResult);

message ConstructPointCloudsFromExistingCloudPointsRuntimeSelectRequest {
  optional CollectionObjectName cloud_name = 1;
}

message ConstructPointCloudsFromExistingCloudPointsRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point Clouds from Existing Clouds - Uniform Spacing {/* #construct-point-clouds-from-existing-clouds---uniform-spacing */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-clouds---uniform-spacing)

`/briosa.ConstructionOperations/ConstructPointCloudsFromExistingCloudsUniformSpacing` · Operation ID: `construction_operations.construct_point_clouds_from_existing_clouds_uniform_spacing`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `existing_point_cloud_list` | `repeated CollectionObjectName` | Existing Point Cloud List | Required |
| Request | 2 | `desired_point_spacing` | `optional double` | Desired Point Spacing | 0.020000 |
| Request | 3 | `minimum_points_per_output_point` | `optional int32` | Minimum Points Per Output Point | 3 |
| Request | 4 | `new_cloud_name` | `optional CollectionObjectName` | New Cloud Name | Required |
| Request | 5 | `hide_original_point_clouds` | `optional bool` | Hide Original Point Clouds | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointCloudsFromExistingCloudsUniformSpacing(ConstructPointCloudsFromExistingCloudsUniformSpacingRequest) returns (ConstructPointCloudsFromExistingCloudsUniformSpacingResult);

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

## Construct Point Cloud from Existing Clouds {/* #construct-point-cloud-from-existing-clouds */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-existing-clouds)

`/briosa.ConstructionOperations/ConstructPointCloudFromExistingClouds` · Operation ID: `construction_operations.construct_point_cloud_from_existing_clouds`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `existing_point_cloud_list` | `repeated CollectionObjectName` | Existing Point Cloud List | Required |
| Request | 2 | `new_cloud_name` | `optional CollectionObjectName` | New Cloud Name | Required |
| Request | 3 | `cloud_thinning_settings` | `optional CloudThinningOptions` | Cloud Thinning Settings | Message defaults |
| Request | 4 | `hide_original_point_clouds` | `optional bool` | Hide Original Point Clouds | true |
| Request | 5 | `set_cloud_point_rgb_from_voxels` | `optional bool` | Set Cloud Point RGB from Voxels? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointCloudFromExistingClouds(ConstructPointCloudFromExistingCloudsRequest) returns (ConstructPointCloudFromExistingCloudsResult);

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

## Construct Point Cloud from Visible Cloud Points {/* #construct-point-cloud-from-visible-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-visible-cloud-points)

`/briosa.ConstructionOperations/ConstructPointCloudFromVisibleCloudPoints` · Operation ID: `construction_operations.construct_point_cloud_from_visible_cloud_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_clouds` | `repeated CollectionObjectName` | Source Clouds | Required |
| Request | 2 | `destination_cloud_name` | `optional CollectionObjectName` | Destination Cloud Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointCloudFromVisibleCloudPoints(ConstructPointCloudFromVisibleCloudPointsRequest) returns (ConstructPointCloudFromVisibleCloudPointsResult);

message ConstructPointCloudFromVisibleCloudPointsRequest {
  repeated CollectionObjectName source_clouds = 1;
  optional CollectionObjectName destination_cloud_name = 2;
}

message ConstructPointCloudFromVisibleCloudPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Boundary Points from Cloud {/* #construct-boundary-points-from-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-boundary-points-from-cloud)

`/briosa.ConstructionOperations/ConstructBoundaryPointsFromCloud` · Operation ID: `construction_operations.construct_boundary_points_from_cloud`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_cloud_name` | `optional CollectionObjectName` | Source Cloud Name | Required |
| Request | 2 | `destination_cloud_name` | `optional CollectionObjectName` | Destination Cloud Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBoundaryPointsFromCloud(ConstructBoundaryPointsFromCloudRequest) returns (ConstructBoundaryPointsFromCloudResult);

message ConstructBoundaryPointsFromCloudRequest {
  optional CollectionObjectName source_cloud_name = 1;
  optional CollectionObjectName destination_cloud_name = 2;
}

message ConstructBoundaryPointsFromCloudResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Point Cloud Limiting Probing Directions {/* #construct-point-cloud-limiting-probing-directions */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-limiting-probing-directions)

`/briosa.ConstructionOperations/ConstructPointCloudLimitingProbingDirections` · Operation ID: `construction_operations.construct_point_cloud_limiting_probing_directions`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_cloud_name` | `optional CollectionObjectName` | Source Cloud Name | Required |
| Request | 2 | `normal_to_object_name` | `optional CollectionObjectName` | 'Normal to' Object Name | Required |
| Request | 3 | `acceptance_angle` | `optional double` | Acceptance Angle | 30.000000 |
| Request | 4 | `destination_cloud_name` | `optional CollectionObjectName` | Destination Cloud Name | Required |
| Request | 5 | `hide_source_cloud` | `optional bool` | Hide Source Cloud | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPointCloudLimitingProbingDirections(ConstructPointCloudLimitingProbingDirectionsRequest) returns (ConstructPointCloudLimitingProbingDirectionsResult);

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

## Construct Cross Section Cloud {/* #construct-cross-section-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-cross-section-cloud)

`/briosa.ConstructionOperations/ConstructCrossSectionCloud` · Operation ID: `construction_operations.construct_cross_section_cloud`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `optional CollectionObjectName` | Cross Section Cloud Name | Required |
| Request | 2 | `cylindrical_cross_section_mode` | `optional bool` | Cylindrical Cross Section Mode? | false |
| Request | 3 | `start_distance` | `optional double` | Start Distance | 0.000000 |
| Request | 4 | `section_spacing` | `optional double` | Section Spacing | 0.000000 |
| Request | 5 | `proximity_threshold` | `optional double` | Proximity Threshold | 0.000000 |
| Request | 6 | `maximum_section_count` | `optional int32` | Maximum Section Count | 0 |
| Request | 7 | `limit_cross_section_extent` | `optional bool` | Limit Cross Section Extent | false |
| Request | 8 | `radius_limit` | `optional double` | Radius Limit | 0.000000 |
| Request | 9 | `project_to_reference_surface` | `optional bool` | Project to Reference Surface | false |
| Request | 10 | `reference_object` | `optional CollectionObjectName` | Reference Object | Required |
| Request | 11 | `input_clouds` | `repeated CollectionObjectName` | Input Clouds | Required |
| Request | 12 | `cloud_thinning_settings` | `optional CloudThinningOptions` | Cloud Thinning Settings | Message defaults |
| Request | 13 | `update_existing_cloud` | `optional bool` | Update Existing Cloud | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCrossSectionCloud(ConstructCrossSectionCloudRequest) returns (ConstructCrossSectionCloudResult);

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

## Construct Cross Section Cloud - User Select {/* #construct-cross-section-cloud---user-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-cross-section-cloud---user-select)

`/briosa.ConstructionOperations/ConstructCrossSectionCloudUserSelect` · Operation ID: `construction_operations.construct_cross_section_cloud_user_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `optional CollectionObjectName` | Cross Section Cloud Name | Required |
| Request | 2 | `proximity_threshold` | `optional double` | Proximity Threshold | 0.000000 |
| Request | 3 | `limit_cross_section_extent` | `optional bool` | Limit Cross Section Extent | false |
| Request | 4 | `radius_limit` | `optional double` | Radius Limit | 0.000000 |
| Request | 5 | `project_to_reference_surface` | `optional bool` | Project to Reference Surface | false |
| Request | 6 | `reference_planes` | `repeated CollectionObjectName` | Reference Planes | Required |
| Request | 7 | `input_clouds` | `repeated CollectionObjectName` | Input Clouds | Required |
| Request | 8 | `cloud_thinning_settings` | `optional CloudThinningOptions` | Cloud Thinning Settings | Message defaults |
| Request | 9 | `update_existing_cloud` | `optional bool` | Update Existing Cloud | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCrossSectionCloudUserSelect(ConstructCrossSectionCloudUserSelectRequest) returns (ConstructCrossSectionCloudUserSelectResult);

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

## Extract Sphere Centers from Point Cloud {/* #extract-sphere-centers-from-point-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#extract-sphere-centers-from-point-cloud)

`/briosa.ConstructionOperations/ExtractSphereCentersFromPointCloud` · Operation ID: `construction_operations.extract_sphere_centers_from_point_cloud`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `optional CollectionObjectName` | Cloud Name | Required |
| Request | 2 | `desired_diameter` | `optional double` | Desired Diameter | 0.000000 |
| Request | 3 | `extraction_tolerance` | `optional double` | Extraction Tolerance | 0.000000 |
| Request | 4 | `minimum_point_count` | `optional int32` | Minimum Point Count | 50 |
| Request | 5 | `group_name_for_points` | `optional CollectionObjectName` | Group Name for Points | Required |
| Request | 6 | `perform_final_fit` | `optional bool` | Perform Final Fit | true |
| Request | 7 | `final_fit_cone_angle` | `optional double` | Final Fit Cone Angle | 120.000000 |
| Result | 1 | `number_of_points_extracted` | `int32` | Number of Points Extracted | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExtractSphereCentersFromPointCloud(ExtractSphereCentersFromPointCloudRequest) returns (ExtractSphereCentersFromPointCloudResult);

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

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
