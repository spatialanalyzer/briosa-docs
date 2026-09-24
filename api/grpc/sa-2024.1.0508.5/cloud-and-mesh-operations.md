---
title: Cloud and Mesh Operations
description: Unreleased grpc 0.8.0-dev.1 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Cloud and Mesh Operations

[SA 2026.1.0529.7](/api/grpc/cloud-and-mesh-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0-dev.1** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Cloud Display Control {/* #cloud-display-control */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#cloud-display-control)

`/briosa.CloudAndMeshOperations/CloudDisplayControl` · Operation ID: `cloud_and_mesh_operations.cloud_display_control`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `thin` | `optional int32` | Thin (Draw Increment) | 1 |
| Request | 2 | `point_size` | `optional int32` | Point Size | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CloudDisplayControl(CloudDisplayControlRequest) returns (CloudDisplayControlResult);

message CloudDisplayControlRequest {
  optional int32 thin = 1;
  optional int32 point_size = 2;
}

message CloudDisplayControlResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `thin` | MP qualifier: Draw Increment. |

## Reset Cloud Bounding Box {/* #reset-cloud-bounding-box */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#reset-cloud-bounding-box)

`/briosa.CloudAndMeshOperations/ResetCloudBoundingBox` · Operation ID: `cloud_and_mesh_operations.reset_cloud_bounding_box`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `optional CollectionObjectName` | Cloud Name | Required |
| Request | 2 | `cloud_box_type` | `optional CloudBoxType` | Cloud Box Type | World Axis Aligned Box |
| Request | 3 | `show_bounding_box` | `optional bool` | Show Bounding Box? | true |
| Request | 4 | `use_all_points` | `optional bool` | Use All Points? | false |
| Request | 5 | `desired_point_count` | `optional int32` | Desired Point Count | 1000 |
| Result | 1 | `x_axis_dimension` | `optional double` | X-Axis Dimension | — |
| Result | 2 | `y_axis_dimension` | `optional double` | Y-Axis Dimension | — |
| Result | 3 | `z_axis_dimension` | `optional double` | Z-Axis Dimension | — |
| Result | 4 | `x_axis_in_world` | `optional Vector` | X-Axis (in WORLD) | — |
| Result | 5 | `y_axis_in_world` | `optional Vector` | Y-Axis (in WORLD) | — |
| Result | 6 | `z_axis_in_world` | `optional Vector` | Z-Axis (in WORLD) | — |
| Result | 7 | `centroid_in_world` | `optional Vector` | Centroid (in WORLD) | — |
| Result | 8 | `reference_transform_in_world` | `optional Transform` | Reference Transform (in WORLD) | — |
| Result | 9 | `reference_transform_in_working` | `optional Transform` | Reference Transform (in WORKING) | — |
| Result | 10 | `points_used_for_bounding_box` | `optional int32` | Points Used for Bounding Box | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ResetCloudBoundingBox(ResetCloudBoundingBoxRequest) returns (ResetCloudBoundingBoxResult);

message ResetCloudBoundingBoxRequest {
  optional CollectionObjectName cloud_name = 1;
  optional CloudBoxType cloud_box_type = 2;
  optional bool show_bounding_box = 3;
  optional bool use_all_points = 4;
  optional int32 desired_point_count = 5;
}

message ResetCloudBoundingBoxResult {
  optional double x_axis_dimension = 1;
  optional double y_axis_dimension = 2;
  optional double z_axis_dimension = 3;
  optional Vector x_axis_in_world = 4;
  optional Vector y_axis_in_world = 5;
  optional Vector z_axis_in_world = 6;
  optional Vector centroid_in_world = 7;
  optional Transform reference_transform_in_world = 8;
  optional Transform reference_transform_in_working = 9;
  optional int32 points_used_for_bounding_box = 10;
  MpExecutionDetails execution = 1000;
}
```

## Get Cloud Point Count {/* #get-cloud-point-count */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-point-count)

`/briosa.CloudAndMeshOperations/GetCloudPointCount` · Operation ID: `cloud_and_mesh_operations.get_cloud_point_count`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `optional CollectionObjectName` | Cloud Name | Required |
| Result | 1 | `points_count` | `optional int32` | Points Count | — |
| Result | 2 | `planar_offset` | `optional double` | Planar Offset | — |
| Result | 3 | `radial_offset` | `optional double` | Radial Offset | — |
| Result | 4 | `active_clipping_planes` | `optional int32` | Active Clipping Planes | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetCloudPointCount(GetCloudPointCountRequest) returns (GetCloudPointCountResult);

message GetCloudPointCountRequest {
  optional CollectionObjectName cloud_name = 1;
}

message GetCloudPointCountResult {
  optional int32 points_count = 1;
  optional double planar_offset = 2;
  optional double radial_offset = 3;
  optional int32 active_clipping_planes = 4;
  MpExecutionDetails execution = 1000;
}
```

## Set Cloud Default Clipping Plane {/* #set-cloud-default-clipping-plane */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#set-cloud-default-clipping-plane)

`/briosa.CloudAndMeshOperations/SetCloudDefaultClippingPlane` · Operation ID: `cloud_and_mesh_operations.set_cloud_default_clipping_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `enable_cloud_clipping` | `optional bool` | Enable Cloud Clipping? | false |
| Request | 2 | `reference_object` | `optional CollectionObjectName` | Reference Object | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCloudDefaultClippingPlane(SetCloudDefaultClippingPlaneRequest) returns (SetCloudDefaultClippingPlaneResult);

message SetCloudDefaultClippingPlaneRequest {
  optional bool enable_cloud_clipping = 1;
  optional CollectionObjectName reference_object = 2;
}

message SetCloudDefaultClippingPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Raster Scan Edge Inspection {/* #raster-scan-edge-inspection */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#raster-scan-edge-inspection)

`/briosa.CloudAndMeshOperations/RasterScanEdgeInspection` · Operation ID: `cloud_and_mesh_operations.raster_scan_edge_inspection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `edge_surface_name` | `optional CollectionObjectName` | Edge Surface Name | Required |
| Request | 3 | `b_spline_edge_list` | `repeated CollectionObjectName` | BSpline Edge List | Required |
| Request | 4 | `prefix_for_output_groups` | `optional CollectionObjectName` | Prefix for Output Groups | Required |
| Request | 5 | `tolerance` | `optional double` | Tolerance | 0.000000 |
| Request | 6 | `minimum_good_points_per_unit_length` | `optional int32` | See Typed Binding | Required |
| Request | 7 | `maximum_bad_points_percentage` | `optional double` | See Typed Binding | Required |
| Result | 1 | `summary_result` | `optional string` | Summary Result | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RasterScanEdgeInspection(RasterScanEdgeInspectionRequest) returns (RasterScanEdgeInspectionResult);

message RasterScanEdgeInspectionRequest {
  repeated CollectionObjectName cloud_names = 1;
  optional CollectionObjectName edge_surface_name = 2;
  repeated CollectionObjectName b_spline_edge_list = 3;
  optional CollectionObjectName prefix_for_output_groups = 4;
  optional double tolerance = 5;
  optional int32 minimum_good_points_per_unit_length = 6;
  optional double maximum_bad_points_percentage = 7;
}

message RasterScanEdgeInspectionResult {
  optional string summary_result = 1;
  MpExecutionDetails execution = 1000;
}
```

## New Raster Scan Edge Inspection {/* #new-raster-scan-edge-inspection */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#new-raster-scan-edge-inspection)

`/briosa.CloudAndMeshOperations/NewRasterScanEdgeInspection` · Operation ID: `cloud_and_mesh_operations.new_raster_scan_edge_inspection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `edge_cloud_names` | `repeated CollectionObjectName` | Edge Cloud Names | Required |
| Request | 2 | `edge_surface_name` | `optional CollectionObjectName` | Edge Surface Name | Required |
| Request | 3 | `edge_b_spline_name` | `optional CollectionObjectName` | Edge BSpline Name | Required |
| Request | 4 | `output_prefix` | `optional CollectionObjectName` | Output Prefix | Required |
| Request | 5 | `inspection_increment` | `optional double` | Inspection Increment | 0.000000 |
| Request | 6 | `proximity_filter_distance` | `optional double` | Proximity Filter Distance | 0.000000 |
| Request | 7 | `edge_bias_value` | `optional double` | Edge Bias Value | 0.000000 |
| Request | 8 | `error_tolerance` | `optional double` | Error Tolerance | 0.000000 |
| Request | 9 | `use_cosine_projection_method` | `optional bool` | Use Cosine Projection Method | false |
| Request | 10 | `minimum_edge_points_per_segment` | `optional int32` | Minimum Number of Edge Points per segment | 0 |
| Request | 11 | `intermediate_calculation_results_file` | `optional FileReference` | Intermediate Calculation Results File(optional) | Omitted |
| Result | 1 | `summary_result` | `optional string` | Summary Result | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc NewRasterScanEdgeInspection(NewRasterScanEdgeInspectionRequest) returns (NewRasterScanEdgeInspectionResult);

message NewRasterScanEdgeInspectionRequest {
  repeated CollectionObjectName edge_cloud_names = 1;
  optional CollectionObjectName edge_surface_name = 2;
  optional CollectionObjectName edge_b_spline_name = 3;
  optional CollectionObjectName output_prefix = 4;
  optional double inspection_increment = 5;
  optional double proximity_filter_distance = 6;
  optional double edge_bias_value = 7;
  optional double error_tolerance = 8;
  optional bool use_cosine_projection_method = 9;
  optional int32 minimum_edge_points_per_segment = 10;
  optional FileReference intermediate_calculation_results_file = 11;
}

message NewRasterScanEdgeInspectionResult {
  optional string summary_result = 1;
  MpExecutionDetails execution = 1000;
}
```

## Enable All Cloud Cross Sections {/* #enable-all-cloud-cross-sections */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections)

`/briosa.CloudAndMeshOperations/EnableAllCloudCrossSections` · Operation ID: `cloud_and_mesh_operations.enable_all_cloud_cross_sections`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `optional CollectionObjectName` | Cross Section Cloud Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EnableAllCloudCrossSections(EnableAllCloudCrossSectionsRequest) returns (EnableAllCloudCrossSectionsResult);

message EnableAllCloudCrossSectionsRequest {
  optional CollectionObjectName cross_section_cloud_name = 1;
}

message EnableAllCloudCrossSectionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Enable/Disable Cloud Cross Sections {/* #enabledisable-cloud-cross-sections */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections)

`/briosa.CloudAndMeshOperations/EnableDisableCloudCrossSections` · Operation ID: `cloud_and_mesh_operations.enable_disable_cloud_cross_sections`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `optional CollectionObjectName` | Cross Section Cloud Name | Required |
| Request | 2 | `cross_section_id` | `optional int32` | Cross Section ID | 0 |
| Request | 3 | `enable` | `optional bool` | Enable (TRUE) / Disable (FALSE)? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EnableDisableCloudCrossSections(EnableDisableCloudCrossSectionsRequest) returns (EnableDisableCloudCrossSectionsResult);

message EnableDisableCloudCrossSectionsRequest {
  optional CollectionObjectName cross_section_cloud_name = 1;
  optional int32 cross_section_id = 2;
  optional bool enable = 3;
}

message EnableDisableCloudCrossSectionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Enable Single Cloud Cross Section {/* #enable-single-cloud-cross-section */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section)

`/briosa.CloudAndMeshOperations/EnableSingleCloudCrossSection` · Operation ID: `cloud_and_mesh_operations.enable_single_cloud_cross_section`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `optional CollectionObjectName` | Cross Section Cloud Name | Required |
| Request | 2 | `cross_section_id` | `optional int32` | Cross Section ID | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc EnableSingleCloudCrossSection(EnableSingleCloudCrossSectionRequest) returns (EnableSingleCloudCrossSectionResult);

message EnableSingleCloudCrossSectionRequest {
  optional CollectionObjectName cross_section_cloud_name = 1;
  optional int32 cross_section_id = 2;
}

message EnableSingleCloudCrossSectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Number of Cross Sections in Cross Section Cloud {/* #get-number-of-cross-sections-in-cross-section-cloud */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud)

`/briosa.CloudAndMeshOperations/GetNumberOfCrossSectionsInCrossSectionCloud` · Operation ID: `cloud_and_mesh_operations.get_number_of_cross_sections_in_cross_section_cloud`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `optional CollectionObjectName` | Cross Section Cloud Name | Required |
| Result | 1 | `cross_section_count` | `optional int32` | Cross Section Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetNumberOfCrossSectionsInCrossSectionCloud(GetNumberOfCrossSectionsInCrossSectionCloudRequest) returns (GetNumberOfCrossSectionsInCrossSectionCloudResult);

message GetNumberOfCrossSectionsInCrossSectionCloudRequest {
  optional CollectionObjectName cross_section_cloud_name = 1;
}

message GetNumberOfCrossSectionsInCrossSectionCloudResult {
  optional int32 cross_section_count = 1;
  MpExecutionDetails execution = 1000;
}
```

## Filter Clouds to Plane {/* #filter-clouds-to-plane */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-plane)

`/briosa.CloudAndMeshOperations/FilterCloudsToPlane` · Operation ID: `cloud_and_mesh_operations.filter_clouds_to_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `filter_plane_name` | `optional CollectionObjectName` | Filter Plane's Name | Required |
| Request | 3 | `output_group_name` | `optional CollectionObjectName` | Output Group Name | Required |
| Request | 4 | `proximity` | `optional double` | Proximity | 0.000000 |
| Request | 5 | `allowable_offset_direction` | `optional OffsetDirectionType` | Allowable Offset Dir | Both |
| Request | 6 | `output_type` | `optional PointOutputType` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FilterCloudsToPlane(FilterCloudsToPlaneRequest) returns (FilterCloudsToPlaneResult);

message FilterCloudsToPlaneRequest {
  repeated CollectionObjectName cloud_names = 1;
  optional CollectionObjectName filter_plane_name = 2;
  optional CollectionObjectName output_group_name = 3;
  optional double proximity = 4;
  optional OffsetDirectionType allowable_offset_direction = 5;
  optional PointOutputType output_type = 6;
}

message FilterCloudsToPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Filter Clouds to Group {/* #filter-clouds-to-group */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-group)

`/briosa.CloudAndMeshOperations/FilterCloudsToGroup` · Operation ID: `cloud_and_mesh_operations.filter_clouds_to_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `filter_group_name` | `optional CollectionObjectName` | Filter Group's Name | Required |
| Request | 3 | `output_group_name` | `optional CollectionObjectName` | Output Group Name | Required |
| Request | 4 | `proximity` | `optional double` | Proximity (0 for Closest Point only) | 0.000000 |
| Request | 5 | `maximum_number_of_points` | `optional int32` | Maximum Number of Points (0 for Unlimited) | 0 |
| Request | 6 | `output_type` | `optional PointOutputType` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FilterCloudsToGroup(FilterCloudsToGroupRequest) returns (FilterCloudsToGroupResult);

message FilterCloudsToGroupRequest {
  repeated CollectionObjectName cloud_names = 1;
  optional CollectionObjectName filter_group_name = 2;
  optional CollectionObjectName output_group_name = 3;
  optional double proximity = 4;
  optional int32 maximum_number_of_points = 5;
  optional PointOutputType output_type = 6;
}

message FilterCloudsToGroupResult {
  MpExecutionDetails execution = 1000;
}
```

## Filter Clouds to Surface {/* #filter-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-surface)

`/briosa.CloudAndMeshOperations/FilterCloudsToSurface` · Operation ID: `cloud_and_mesh_operations.filter_clouds_to_surface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `filter_surface_name` | `optional CollectionObjectName` | Filter Surface's Name | Required |
| Request | 3 | `output_group_name` | `optional CollectionObjectName` | Output Group Name | Required |
| Request | 4 | `low_proximity` | `optional double` | Low Proximity | 0.000000 |
| Request | 5 | `high_proximity` | `optional double` | High Proximity | 0.000000 |
| Request | 6 | `skip_factor` | `optional int32` | Skip Factor | 0 |
| Request | 7 | `output_type` | `optional PointOutputType` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FilterCloudsToSurface(FilterCloudsToSurfaceRequest) returns (FilterCloudsToSurfaceResult);

message FilterCloudsToSurfaceRequest {
  repeated CollectionObjectName cloud_names = 1;
  optional CollectionObjectName filter_surface_name = 2;
  optional CollectionObjectName output_group_name = 3;
  optional double low_proximity = 4;
  optional double high_proximity = 5;
  optional int32 skip_factor = 6;
  optional PointOutputType output_type = 7;
}

message FilterCloudsToSurfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Filter Clouds to BSplines {/* #filter-clouds-to-bsplines */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-bsplines)

`/briosa.CloudAndMeshOperations/FilterCloudsToBSplines` · Operation ID: `cloud_and_mesh_operations.filter_clouds_to_bsplines`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `filter_b_spline_names` | `repeated CollectionObjectName` | Filter BSpline Names | Required |
| Request | 3 | `output_group_name` | `optional CollectionObjectName` | Output Group Name | Required |
| Request | 4 | `minimum_proximity` | `optional double` | Minimum Proximity | 0.000000 |
| Request | 5 | `maximum_proximity` | `optional double` | Maximum Proximity | 0.000000 |
| Request | 6 | `output_type` | `optional PointOutputType` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FilterCloudsToBSplines(FilterCloudsToBSplinesRequest) returns (FilterCloudsToBSplinesResult);

message FilterCloudsToBSplinesRequest {
  repeated CollectionObjectName cloud_names = 1;
  repeated CollectionObjectName filter_b_spline_names = 2;
  optional CollectionObjectName output_group_name = 3;
  optional double minimum_proximity = 4;
  optional double maximum_proximity = 5;
  optional PointOutputType output_type = 6;
}

message FilterCloudsToBSplinesResult {
  MpExecutionDetails execution = 1000;
}
```

## Filter Clouds to Line Segment {/* #filter-clouds-to-line-segment */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-line-segment)

`/briosa.CloudAndMeshOperations/FilterCloudsToLineSegment` · Operation ID: `cloud_and_mesh_operations.filter_clouds_to_line_segment`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `first_line_end_point` | `optional PointName` | First Line End Point | Required |
| Request | 3 | `second_line_end_point` | `optional PointName` | Second Line End Point | Required |
| Request | 4 | `output_group_name` | `optional CollectionObjectName` | Output Group Name | Required |
| Request | 5 | `minimum_proximity` | `optional double` | Minimum Proximity | 0.000000 |
| Request | 6 | `maximum_proximity` | `optional double` | Maximum Proximity | 0.000000 |
| Request | 7 | `output_type` | `optional PointOutputType` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FilterCloudsToLineSegment(FilterCloudsToLineSegmentRequest) returns (FilterCloudsToLineSegmentResult);

message FilterCloudsToLineSegmentRequest {
  repeated CollectionObjectName cloud_names = 1;
  optional PointName first_line_end_point = 2;
  optional PointName second_line_end_point = 3;
  optional CollectionObjectName output_group_name = 4;
  optional double minimum_proximity = 5;
  optional double maximum_proximity = 6;
  optional PointOutputType output_type = 7;
}

message FilterCloudsToLineSegmentResult {
  MpExecutionDetails execution = 1000;
}
```

## Filter Clouds to Vector Groups - Resolve points {/* #filter-clouds-to-vector-groups---resolve-points */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points)

`/briosa.CloudAndMeshOperations/FilterCloudsToVectorGroupsResolvePoints` · Operation ID: `cloud_and_mesh_operations.filter_clouds_to_vector_groups_resolve_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `vector_group_names` | `repeated CollectionObjectName` | Vector Group Names | Required |
| Request | 3 | `output_group_name` | `optional CollectionObjectName` | Output Group Name | Required |
| Request | 4 | `minimum_proximity` | `optional double` | Minimum Proximity | 0.000000 |
| Request | 5 | `maximum_proximity` | `optional double` | Maximum Proximity | 0.000000 |
| Request | 6 | `maximum_distance_from_vector_begin` | `optional double` | Maximum Distance From Vector Begin | 0.000000 |
| Request | 7 | `minimum_number_of_required_points` | `optional int32` | Minimum number of required points | 0 |
| Request | 8 | `output_type` | `optional PointOutputType` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc FilterCloudsToVectorGroupsResolvePoints(FilterCloudsToVectorGroupsResolvePointsRequest) returns (FilterCloudsToVectorGroupsResolvePointsResult);

message FilterCloudsToVectorGroupsResolvePointsRequest {
  repeated CollectionObjectName cloud_names = 1;
  repeated CollectionObjectName vector_group_names = 2;
  optional CollectionObjectName output_group_name = 3;
  optional double minimum_proximity = 4;
  optional double maximum_proximity = 5;
  optional double maximum_distance_from_vector_begin = 6;
  optional int32 minimum_number_of_required_points = 7;
  optional PointOutputType output_type = 8;
}

message FilterCloudsToVectorGroupsResolvePointsResult {
  MpExecutionDetails execution = 1000;
}
```

## RGB Cloud Point Filter {/* #rgb-cloud-point-filter */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#rgb-cloud-point-filter)

`/briosa.CloudAndMeshOperations/RGBCloudPointFilter` · Operation ID: `cloud_and_mesh_operations.rgb_cloud_point_filter`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `filter_name` | `optional string` | Filter Name | Default Filter |
| Request | 2 | `clouds_to_be_filtered` | `repeated CollectionObjectName` | Clouds To Be Filtered | Required |
| Request | 3 | `red_enabled` | `optional bool` | Red Enabled | true |
| Request | 4 | `red_high_enabled` | `optional bool` | Red High Enabled | false |
| Request | 5 | `red_high_threshold` | `optional int32` | Red High Threshold | 255 |
| Request | 6 | `red_low_enabled` | `optional bool` | Red Low Enabled | false |
| Request | 7 | `red_low_threshold` | `optional int32` | Red Low Threshold | 0 |
| Request | 8 | `green_enabled` | `optional bool` | Green Enabled | true |
| Request | 9 | `green_high_enabled` | `optional bool` | Green High Enabled | false |
| Request | 10 | `green_high_threshold` | `optional int32` | Green High Threshold | 255 |
| Request | 11 | `green_low_enabled` | `optional bool` | Green Low Enabled | false |
| Request | 12 | `green_low_threshold` | `optional int32` | Green Low Threshold | 0 |
| Request | 13 | `blue_enabled` | `optional bool` | Blue Enabled | true |
| Request | 14 | `blue_high_enabled` | `optional bool` | Blue High Enabled | false |
| Request | 15 | `blue_high_threshold` | `optional int32` | Blue High Threshold | 255 |
| Request | 16 | `blue_low_enabled` | `optional bool` | Blue Low Enabled | false |
| Request | 17 | `blue_low_threshold` | `optional int32` | Blue Low Threshold | 0 |
| Request | 18 | `gray_scale_enabled` | `optional bool` | Gray Scale Enabled | false |
| Request | 19 | `gray_scale_high_enabled` | `optional bool` | Gray Scale High Enabled | false |
| Request | 20 | `gray_scale_high_threshold` | `optional int32` | Gray Scale High Threshold | 255 |
| Request | 21 | `gray_scale_low_enabled` | `optional bool` | Gray Scale Low Enabled | false |
| Request | 22 | `gray_scale_low_threshold` | `optional int32` | Gray Scale Low Threshold | 0 |
| Request | 23 | `rgb_filter_operation` | `optional RGBFilterOperation` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RGBCloudPointFilter(RGBCloudPointFilterRequest) returns (RGBCloudPointFilterResult);

message RGBCloudPointFilterRequest {
  optional string filter_name = 1;
  repeated CollectionObjectName clouds_to_be_filtered = 2;
  optional bool red_enabled = 3;
  optional bool red_high_enabled = 4;
  optional int32 red_high_threshold = 5;
  optional bool red_low_enabled = 6;
  optional int32 red_low_threshold = 7;
  optional bool green_enabled = 8;
  optional bool green_high_enabled = 9;
  optional int32 green_high_threshold = 10;
  optional bool green_low_enabled = 11;
  optional int32 green_low_threshold = 12;
  optional bool blue_enabled = 13;
  optional bool blue_high_enabled = 14;
  optional int32 blue_high_threshold = 15;
  optional bool blue_low_enabled = 16;
  optional int32 blue_low_threshold = 17;
  optional bool gray_scale_enabled = 18;
  optional bool gray_scale_high_enabled = 19;
  optional int32 gray_scale_high_threshold = 20;
  optional bool gray_scale_low_enabled = 21;
  optional int32 gray_scale_low_threshold = 22;
  optional RGBFilterOperation rgb_filter_operation = 23;
}

message RGBCloudPointFilterResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Cloud Points by Radial Distance from Points {/* #delete-cloud-points-by-radial-distance-from-points */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points)

`/briosa.CloudAndMeshOperations/DeleteCloudPointsByRadialDistanceFromPoints` · Operation ID: `cloud_and_mesh_operations.delete_cloud_points_by_radial_distance_from_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `points` | `repeated PointName` | Points | Required |
| Request | 3 | `radius` | `optional double` | Radius | 0.000000 |
| Request | 4 | `delete_inside` | `optional bool` | Delete Inside | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteCloudPointsByRadialDistanceFromPoints(DeleteCloudPointsByRadialDistanceFromPointsRequest) returns (DeleteCloudPointsByRadialDistanceFromPointsResult);

message DeleteCloudPointsByRadialDistanceFromPointsRequest {
  repeated CollectionObjectName cloud_names = 1;
  repeated PointName points = 2;
  optional double radius = 3;
  optional bool delete_inside = 4;
}

message DeleteCloudPointsByRadialDistanceFromPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Cloud Points by X Y Z Range {/* #delete-cloud-points-by-x-y-z-range */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range)

`/briosa.CloudAndMeshOperations/DeleteCloudPointsByXYZRange` · Operation ID: `cloud_and_mesh_operations.delete_cloud_points_by_xyz_range`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | Cloud Names | Required |
| Request | 2 | `x_min` | `optional double` | See Typed Binding | Required |
| Request | 3 | `x_max` | `optional double` | See Typed Binding | Required |
| Request | 4 | `y_min` | `optional double` | See Typed Binding | Required |
| Request | 5 | `y_max` | `optional double` | See Typed Binding | Required |
| Request | 6 | `z_min` | `optional double` | See Typed Binding | Required |
| Request | 7 | `z_max` | `optional double` | See Typed Binding | Required |
| Request | 8 | `delete_inside` | `optional bool` | Delete Inside | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteCloudPointsByXYZRange(DeleteCloudPointsByXYZRangeRequest) returns (DeleteCloudPointsByXYZRangeResult);

message DeleteCloudPointsByXYZRangeRequest {
  repeated CollectionObjectName cloud_names = 1;
  optional double x_min = 2;
  optional double x_max = 3;
  optional double y_min = 4;
  optional double y_max = 5;
  optional double z_min = 6;
  optional double z_max = 7;
  optional bool delete_inside = 8;
}

message DeleteCloudPointsByXYZRangeResult {
  MpExecutionDetails execution = 1000;
}
```

## Generate General Mesh {/* #generate-general-mesh */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#generate-general-mesh)

`/briosa.CloudAndMeshOperations/GenerateGeneralMesh` · Operation ID: `cloud_and_mesh_operations.generate_general_mesh`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `output_mesh_name` | `optional CollectionObjectName` | Output Mesh Name | Required |
| Request | 2 | `clouds_to_mesh` | `repeated CollectionObjectName` | Clouds to Mesh | Required |
| Request | 3 | `maximum_triangle_size` | `optional double` | Maximum Triangle Size | 0.050000 |
| Request | 4 | `smallest_hole_diameter` | `optional double` | Smallest Hole Diameter | 0.250000 |
| Request | 5 | `finalize` | `optional bool` | Finalize | true |
| Request | 6 | `use_scan_direction_for_point_normal` | `optional bool` | Use Scan Direction For Point Normal | true |
| Request | 7 | `json_file` | `optional FileReference` | JSON File(optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GenerateGeneralMesh(GenerateGeneralMeshRequest) returns (GenerateGeneralMeshResult);

message GenerateGeneralMeshRequest {
  optional CollectionObjectName output_mesh_name = 1;
  repeated CollectionObjectName clouds_to_mesh = 2;
  optional double maximum_triangle_size = 3;
  optional double smallest_hole_diameter = 4;
  optional bool finalize = 5;
  optional bool use_scan_direction_for_point_normal = 6;
  optional FileReference json_file = 7;
}

message GenerateGeneralMeshResult {
  MpExecutionDetails execution = 1000;
}
```

## Mesh Volume {/* #mesh-volume */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-volume)

`/briosa.CloudAndMeshOperations/MeshVolume` · Operation ID: `cloud_and_mesh_operations.mesh_volume`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mesh` | `optional CollectionObjectName` | Mesh | Required |
| Request | 2 | `plane` | `optional CollectionObjectName` | Plane | Required |
| Result | 1 | `above` | `optional double` | Above | — |
| Result | 2 | `below` | `optional double` | Below | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MeshVolume(MeshVolumeRequest) returns (MeshVolumeResult);

message MeshVolumeRequest {
  optional CollectionObjectName mesh = 1;
  optional CollectionObjectName plane = 2;
}

message MeshVolumeResult {
  optional double above = 1;
  optional double below = 2;
  MpExecutionDetails execution = 1000;
}
```

## Clear Cloud Point Deviations {/* #clear-cloud-point-deviations */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Filter Clouds to Vector Groups - Resolve Clouds {/* #filter-clouds-to-vector-groups---resolve-clouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Cloud RGB Values {/* #get-cloud-rgb-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Cloud RGB Values Near Point {/* #get-cloud-rgb-values-near-point */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Subdivide Cloud by Point Spacing {/* #subdivide-cloud-by-point-spacing */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Consolidate Mesh {/* #consolidate-mesh */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Mesh Fill Holes {/* #mesh-fill-holes */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa/tree/3306d43253a1e4e41b75b83360ad4f6f2b7f60b7/targets/2024.1.0508.5)
