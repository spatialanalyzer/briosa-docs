---
title: Cloud and Mesh Operations
description: Next gRPC contracts for supported Cloud and Mesh Operations MP commands.
toc_max_heading_level: 2
---

# Cloud and Mesh Operations

:::note[Next Contracts]

These entries define the protocol that the coordinated server and clients must
implement. They are not callable until released.

:::

All RPCs belong to protobuf package `briosa` and service
`briosa.CloudAndMeshOperations`. Every result reserves field `1000` for
`MpExecutionDetails execution`. Generated transport types are not the public
surface of the handwritten client libraries.

## Cloud Display Control

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Cloud Display Control](/mp-command-catalog/commands/cloud-and-mesh-operations#cloud-display-control) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `CloudDisplayControl` |
| Operation ID | `cloud_and_mesh_operations.cloud_display_control` |
| Route | `/briosa.CloudAndMeshOperations/CloudDisplayControl` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `thin_draw_increment` | `int32` | `Thin (Draw Increment)` | 1 |
| Request | 2 | `point_size` | `int32` | `Point Size` | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc CloudDisplayControl(CloudDisplayControlRequest) returns (CloudDisplayControlResult);

message CloudDisplayControlRequest {
  optional int32 thin_draw_increment = 1;
  optional int32 point_size = 2;
}

message CloudDisplayControlResult {
  MpExecutionDetails execution = 1000;
}
```

Adjusts SpatialAnalyzer cloud drawing density and point size.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Reset Cloud Bounding Box

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Reset Cloud Bounding Box](/mp-command-catalog/commands/cloud-and-mesh-operations#reset-cloud-bounding-box) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `ResetCloudBoundingBox` |
| Operation ID | `cloud_and_mesh_operations.reset_cloud_bounding_box` |
| Route | `/briosa.CloudAndMeshOperations/ResetCloudBoundingBox` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `CollectionObjectName` | `Cloud Name` | Required |
| Request | 2 | `cloud_box_type` | `CloudBoxType` | `Cloud Box Type` | World Axis Aligned Box |
| Request | 3 | `show_bounding_box` | `bool` | `Show Bounding Box?` | true |
| Request | 4 | `use_all_points` | `bool` | `Use All Points?` | false |
| Request | 5 | `desired_point_count` | `int32` | `Desired Point Count` | 1000 |
| Result | 1 | `x_axis_dimension` | `double` | `X-Axis Dimension` | - |
| Result | 2 | `y_axis_dimension` | `double` | `Y-Axis Dimension` | - |
| Result | 3 | `z_axis_dimension` | `double` | `Z-Axis Dimension` | - |
| Result | 4 | `x_axis_in_world` | `Vector` | `X-Axis (in WORLD)` | - |
| Result | 5 | `y_axis_in_world` | `Vector` | `Y-Axis (in WORLD)` | - |
| Result | 6 | `z_axis_in_world` | `Vector` | `Z-Axis (in WORLD)` | - |
| Result | 7 | `centroid_in_world` | `Vector` | `Centroid (in WORLD)` | - |
| Result | 8 | `reference_transform_in_world` | `Transform` | `Reference Transform (in WORLD)` | - |
| Result | 9 | `reference_transform_in_working` | `Transform` | `Reference Transform (in WORKING)` | - |
| Result | 10 | `points_used_for_bounding_box` | `int32` | `Points Used for Bounding Box` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Recomputes one cloud bounding box and returns its dimensions, axes, centroid, transforms, and sample count.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Get Cloud Point Count

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Cloud Point Count](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-point-count) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `GetCloudPointCount` |
| Operation ID | `cloud_and_mesh_operations.get_cloud_point_count` |
| Route | `/briosa.CloudAndMeshOperations/GetCloudPointCount` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `CollectionObjectName` | `Cloud Name` | Required |
| Result | 1 | `points_count` | `int32` | `Points Count` | - |
| Result | 2 | `planar_offset` | `double` | `Planar Offset` | - |
| Result | 3 | `radial_offset` | `double` | `Radial Offset` | - |
| Result | 4 | `active_clipping_planes` | `int32` | `Active Clipping Planes` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Returns the selected cloud point count and current clipping-related values.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Set Cloud Default Clipping Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Cloud Default Clipping Plane](/mp-command-catalog/commands/cloud-and-mesh-operations#set-cloud-default-clipping-plane) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `SetCloudDefaultClippingPlane` |
| Operation ID | `cloud_and_mesh_operations.set_cloud_default_clipping_plane` |
| Route | `/briosa.CloudAndMeshOperations/SetCloudDefaultClippingPlane` |
| Validation | Licensed SA 2026.1.0529.7 probe |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `enable_cloud_clipping` | `bool` | `Enable Cloud Clipping?` | false |
| Request | 2 | `reference_object` | `CollectionObjectName` | `Reference Object` | Omitted when disabling |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Controls the default clipping plane for newly measured clouds. The exact SDK cannot set the MP Clipping Options value, so enabling uses SpatialAnalyzer current default clipping components. Briosa defaults to disabled to avoid an interactive object selector; reference_object is required only when enabling.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Raster Scan Edge Inspection

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Raster Scan Edge Inspection](/mp-command-catalog/commands/cloud-and-mesh-operations#raster-scan-edge-inspection) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `RasterScanEdgeInspection` |
| Operation ID | `cloud_and_mesh_operations.raster_scan_edge_inspection` |
| Route | `/briosa.CloudAndMeshOperations/RasterScanEdgeInspection` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `edge_surface_name` | `CollectionObjectName` | `Edge Surface Name` | Required |
| Request | 3 | `b_spline_edge_list` | `repeated CollectionObjectName` | `BSpline Edge List` | Required |
| Request | 4 | `prefix_for_output_groups` | `CollectionObjectName` | `Prefix for Output Groups` | Required |
| Request | 5 | `tolerance` | `double` | `Tolerance` | 0.000000 |
| Request | 6 | `minimum_good_points_per_unit_length` | `int32` | `Minimum Number of Good Points per Unit Length` | 0 |
| Request | 7 | `maximum_bad_points_percentage` | `double` | `Maximum Percentage of Bad Points (0-100)` | 0.000000 |
| Result | 1 | `summary_result` | `string` | `Summary Result` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Runs the legacy raster-scan edge inspection workflow and returns the SA summary result.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## New Raster Scan Edge Inspection

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [New Raster Scan Edge Inspection](/mp-command-catalog/commands/cloud-and-mesh-operations#new-raster-scan-edge-inspection) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `NewRasterScanEdgeInspection` |
| Operation ID | `cloud_and_mesh_operations.new_raster_scan_edge_inspection` |
| Route | `/briosa.CloudAndMeshOperations/NewRasterScanEdgeInspection` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `edge_cloud_names` | `repeated CollectionObjectName` | `Edge Cloud Names` | Required |
| Request | 2 | `edge_surface_name` | `CollectionObjectName` | `Edge Surface Name` | Required |
| Request | 3 | `edge_b_spline_name` | `CollectionObjectName` | `Edge BSpline Name` | Required |
| Request | 4 | `output_prefix` | `CollectionObjectName` | `Output Prefix` | Required |
| Request | 5 | `inspection_increment` | `double` | `Inspection Increment` | 0.000000 |
| Request | 6 | `proximity_filter_distance` | `double` | `Proximity Filter Distance` | 0.000000 |
| Request | 7 | `edge_bias_value` | `double` | `Edge Bias Value` | 0.000000 |
| Request | 8 | `error_tolerance` | `double` | `Error Tolerance` | 0.000000 |
| Request | 9 | `use_cosine_projection_method` | `bool` | `Use Cosine Projection Method` | false |
| Request | 10 | `minimum_edge_points_per_segment` | `int32` | `Minimum Number of Edge Points per segment` | 0 |
| Request | 11 | `intermediate_calculation_results_file` | `FileReference` | `Intermediate Calculation Results File(optional)` | Omitted |
| Result | 1 | `summary_result` | `string` | `Summary Result` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Runs the newer raster-scan edge inspection workflow and optionally writes intermediate calculations.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Clear Cloud Point Deviations

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Clear Cloud Point Deviations](/mp-command-catalog/commands/cloud-and-mesh-operations#clear-cloud-point-deviations) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `ClearCloudPointDeviations` |
| Operation ID | `cloud_and_mesh_operations.clear_cloud_point_deviations` |
| Route | `/briosa.CloudAndMeshOperations/ClearCloudPointDeviations` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_name` | `CollectionObjectName` | `Cloud Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ClearCloudPointDeviations(ClearCloudPointDeviationsRequest) returns (ClearCloudPointDeviationsResult);

message ClearCloudPointDeviationsRequest {
  optional CollectionObjectName cloud_name = 1;
}

message ClearCloudPointDeviationsResult {
  MpExecutionDetails execution = 1000;
}
```

Clears point-deviation data stored on the selected cloud.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Enable All Cloud Cross Sections

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Enable All Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `EnableAllCloudCrossSections` |
| Operation ID | `cloud_and_mesh_operations.enable_all_cloud_cross_sections` |
| Route | `/briosa.CloudAndMeshOperations/EnableAllCloudCrossSections` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc EnableAllCloudCrossSections(EnableAllCloudCrossSectionsRequest) returns (EnableAllCloudCrossSectionsResult);

message EnableAllCloudCrossSectionsRequest {
  optional CollectionObjectName cross_section_cloud_name = 1;
}

message EnableAllCloudCrossSectionsResult {
  MpExecutionDetails execution = 1000;
}
```

Enables every cross section in one cross-section cloud.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Enable/Disable Cloud Cross Sections

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Enable/Disable Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `EnableDisableCloudCrossSections` |
| Operation ID | `cloud_and_mesh_operations.enable_disable_cloud_cross_sections` |
| Route | `/briosa.CloudAndMeshOperations/EnableDisableCloudCrossSections` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| Request | 2 | `cross_section_id` | `int32` | `Cross Section ID` | 0 |
| Request | 3 | `enable` | `bool` | `Enable (TRUE) / Disable (FALSE)?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Enables or disables one identified cross section.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Enable Single Cloud Cross Section

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Enable Single Cloud Cross Section](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `EnableSingleCloudCrossSection` |
| Operation ID | `cloud_and_mesh_operations.enable_single_cloud_cross_section` |
| Route | `/briosa.CloudAndMeshOperations/EnableSingleCloudCrossSection` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| Request | 2 | `cross_section_id` | `int32` | `Cross Section ID` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Enables one cross section and leaves it as the single enabled section.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Get Number of Cross Sections in Cross Section Cloud

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Number of Cross Sections in Cross Section Cloud](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `GetNumberOfCrossSectionsInCrossSectionCloud` |
| Operation ID | `cloud_and_mesh_operations.get_number_of_cross_sections_in_cross_section_cloud` |
| Route | `/briosa.CloudAndMeshOperations/GetNumberOfCrossSectionsInCrossSectionCloud` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cross_section_cloud_name` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| Result | 1 | `cross_section_count` | `int32` | `Cross Section Count` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Returns the number of cross sections in the selected cross-section cloud.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Filter Clouds to Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Filter Clouds to Plane](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-plane) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `FilterCloudsToPlane` |
| Operation ID | `cloud_and_mesh_operations.filter_clouds_to_plane` |
| Route | `/briosa.CloudAndMeshOperations/FilterCloudsToPlane` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `filter_plane_name` | `CollectionObjectName` | `Filter Plane's Name` | Required |
| Request | 3 | `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| Request | 4 | `proximity` | `double` | `Proximity` | 0.000000 |
| Request | 5 | `allowable_offset_direction` | `OffsetDirectionType` | `Allowable Offset Dir` | Both |
| Request | 6 | `output_type` | `PointOutputType` | `Output Type` | Points |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Filters cloud points by proximity to a plane. Briosa supplies non-interactive Both and Points defaults where the MP Editor export is blank.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Filter Clouds to Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Filter Clouds to Group](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-group) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `FilterCloudsToGroup` |
| Operation ID | `cloud_and_mesh_operations.filter_clouds_to_group` |
| Route | `/briosa.CloudAndMeshOperations/FilterCloudsToGroup` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `filter_group_name` | `CollectionObjectName` | `Filter Group's Name` | Required |
| Request | 3 | `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| Request | 4 | `proximity` | `double` | `Proximity (0 for Closest Point only)` | 0.000000 |
| Request | 5 | `maximum_number_of_points` | `int32` | `Maximum Number of Points (0 for Unlimited)` | 0 |
| Request | 6 | `output_type` | `PointOutputType` | `Output Type` | Points |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Filters clouds by proximity to a point group.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Filter Clouds to Surface

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Filter Clouds to Surface](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-surface) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `FilterCloudsToSurface` |
| Operation ID | `cloud_and_mesh_operations.filter_clouds_to_surface` |
| Route | `/briosa.CloudAndMeshOperations/FilterCloudsToSurface` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `filter_surface_name` | `CollectionObjectName` | `Filter Surface's Name` | Required |
| Request | 3 | `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| Request | 4 | `low_proximity` | `double` | `Low Proximity` | 0.000000 |
| Request | 5 | `high_proximity` | `double` | `High Proximity` | 0.000000 |
| Request | 6 | `skip_factor` | `int32` | `Skip Factor` | 0 |
| Request | 7 | `output_type` | `PointOutputType` | `Output Type` | Points |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Filters clouds to a surface using low and high proximity limits.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Filter Clouds to BSplines

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Filter Clouds to BSplines](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-bsplines) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `FilterCloudsToBSplines` |
| Operation ID | `cloud_and_mesh_operations.filter_clouds_to_bsplines` |
| Route | `/briosa.CloudAndMeshOperations/FilterCloudsToBSplines` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `filter_b_spline_names` | `repeated CollectionObjectName` | `Filter BSpline Names` | Required |
| Request | 3 | `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| Request | 4 | `minimum_proximity` | `double` | `Minimum Proximity` | 0.000000 |
| Request | 5 | `maximum_proximity` | `double` | `Maximum Proximity` | 0.000000 |
| Request | 6 | `output_type` | `PointOutputType` | `Output Type` | Points |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Filters clouds by proximity to one or more BSplines.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Filter Clouds to Line Segment

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Filter Clouds to Line Segment](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-line-segment) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `FilterCloudsToLineSegment` |
| Operation ID | `cloud_and_mesh_operations.filter_clouds_to_line_segment` |
| Route | `/briosa.CloudAndMeshOperations/FilterCloudsToLineSegment` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `first_line_end_point` | `PointName` | `First Line End Point` | Required |
| Request | 3 | `second_line_end_point` | `PointName` | `Second Line End Point` | Required |
| Request | 4 | `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| Request | 5 | `minimum_proximity` | `double` | `Minimum Proximity` | 0.000000 |
| Request | 6 | `maximum_proximity` | `double` | `Maximum Proximity` | 0.000000 |
| Request | 7 | `output_type` | `PointOutputType` | `Output Type` | Points |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Filters clouds by proximity to a line segment defined by two SA points.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Filter Clouds to Vector Groups - Resolve points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Filter Clouds to Vector Groups - Resolve points](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `FilterCloudsToVectorGroupsResolvePoints` |
| Operation ID | `cloud_and_mesh_operations.filter_clouds_to_vector_groups_resolve_points` |
| Route | `/briosa.CloudAndMeshOperations/FilterCloudsToVectorGroupsResolvePoints` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `vector_group_names` | `repeated CollectionObjectName` | `Vector Group Names` | Required |
| Request | 3 | `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| Request | 4 | `minimum_proximity` | `double` | `Minimum Proximity` | 0.000000 |
| Request | 5 | `maximum_proximity` | `double` | `Maximum Proximity` | 0.000000 |
| Request | 6 | `maximum_distance_from_vector_begin` | `double` | `Maximum Distance From Vector Begin` | 0.000000 |
| Request | 7 | `minimum_number_of_required_points` | `int32` | `Minimum number of required points` | 0 |
| Request | 8 | `output_type` | `PointOutputType` | `Output Type` | Points |
| Request | 9 | `include_proximity_points` | `bool` | `Include Proximity Points?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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
  optional bool include_proximity_points = 9;
}

message FilterCloudsToVectorGroupsResolvePointsResult {
  MpExecutionDetails execution = 1000;
}
```

Resolves cloud points against vector groups. The exact 2026.1 target includes the Include Proximity Points input absent from ObjectiveSA 2024.1.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Filter Clouds to Vector Groups - Resolve Clouds

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Filter Clouds to Vector Groups - Resolve Clouds](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `FilterCloudsToVectorGroupsResolveClouds` |
| Operation ID | `cloud_and_mesh_operations.filter_clouds_to_vector_groups_resolve_clouds` |
| Route | `/briosa.CloudAndMeshOperations/FilterCloudsToVectorGroupsResolveClouds` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `vector_group_names` | `repeated CollectionObjectName` | `Vector Group Names` | Required |
| Request | 3 | `radial_cutoff` | `double` | `Radial Cutoff` | 0.100000 |
| Request | 4 | `lower_cutoff` | `double` | `Lower Cutoff` | -0.100000 |
| Request | 5 | `upper_cutoff` | `double` | `Upper Cutoff` | 0.100000 |
| Request | 6 | `output_collection_name` | `string` | `Output Collection Name` | Required |
| Result | 1 | `filtered_clouds` | `repeated CollectionObjectName` | `Filtered Clouds` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc FilterCloudsToVectorGroupsResolveClouds(FilterCloudsToVectorGroupsResolveCloudsRequest) returns (FilterCloudsToVectorGroupsResolveCloudsResult);

message FilterCloudsToVectorGroupsResolveCloudsRequest {
  repeated CollectionObjectName cloud_names = 1;
  repeated CollectionObjectName vector_group_names = 2;
  optional double radial_cutoff = 3;
  optional double lower_cutoff = 4;
  optional double upper_cutoff = 5;
  optional string output_collection_name = 6;
}

message FilterCloudsToVectorGroupsResolveCloudsResult {
  repeated CollectionObjectName filtered_clouds = 1;
  MpExecutionDetails execution = 1000;
}
```

Creates filtered clouds from vector-group cutoffs and returns the resulting cloud references.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## RGB Cloud Point Filter

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [RGB Cloud Point Filter](/mp-command-catalog/commands/cloud-and-mesh-operations#rgb-cloud-point-filter) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `RGBCloudPointFilter` |
| Operation ID | `cloud_and_mesh_operations.rgb_cloud_point_filter` |
| Route | `/briosa.CloudAndMeshOperations/RGBCloudPointFilter` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `filter_name` | `string` | `Filter Name` | Default Filter |
| Request | 2 | `clouds_to_be_filtered` | `repeated CollectionObjectName` | `Clouds To Be Filtered` | Required |
| Request | 3 | `red_enabled` | `bool` | `Red Enabled` | true |
| Request | 4 | `red_high_enabled` | `bool` | `Red High Enabled` | false |
| Request | 5 | `red_high_threshold` | `int32` | `Red High Threshold` | 255 |
| Request | 6 | `red_low_enabled` | `bool` | `Red Low Enabled` | false |
| Request | 7 | `red_low_threshold` | `int32` | `Red Low Threshold` | 0 |
| Request | 8 | `green_enabled` | `bool` | `Green Enabled` | true |
| Request | 9 | `green_high_enabled` | `bool` | `Green High Enabled` | false |
| Request | 10 | `green_high_threshold` | `int32` | `Green High Threshold` | 255 |
| Request | 11 | `green_low_enabled` | `bool` | `Green Low Enabled` | false |
| Request | 12 | `green_low_threshold` | `int32` | `Green Low Threshold` | 0 |
| Request | 13 | `blue_enabled` | `bool` | `Blue Enabled` | true |
| Request | 14 | `blue_high_enabled` | `bool` | `Blue High Enabled` | false |
| Request | 15 | `blue_high_threshold` | `int32` | `Blue High Threshold` | 255 |
| Request | 16 | `blue_low_enabled` | `bool` | `Blue Low Enabled` | false |
| Request | 17 | `blue_low_threshold` | `int32` | `Blue Low Threshold` | 0 |
| Request | 18 | `gray_scale_enabled` | `bool` | `Gray Scale Enabled` | false |
| Request | 19 | `gray_scale_high_enabled` | `bool` | `Gray Scale High Enabled` | false |
| Request | 20 | `gray_scale_high_threshold` | `int32` | `Gray Scale High Threshold` | 255 |
| Request | 21 | `gray_scale_low_enabled` | `bool` | `Gray Scale Low Enabled` | false |
| Request | 22 | `gray_scale_low_threshold` | `int32` | `Gray Scale Low Threshold` | 0 |
| Request | 23 | `rgb_filter_operation` | `RGBFilterOperation` | `RGB Filter Operation` | Reset and Apply Filter |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Applies the selected RGB, intensity, and grayscale thresholds to one or more clouds.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Get Cloud RGB Values

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Cloud RGB Values](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `GetCloudRGBValues` |
| Operation ID | `cloud_and_mesh_operations.get_cloud_rgb_values` |
| Route | `/briosa.CloudAndMeshOperations/GetCloudRGBValues` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_cloud_name` | `CollectionObjectName` | `Source Cloud Name` | Required |
| Request | 2 | `rgb_color_channel` | `RGBColorChannel` | `RGB Color Channel` | Intensity |
| Result | 1 | `low_value` | `int32` | `Low Value` | - |
| Result | 2 | `high_value` | `int32` | `High Value` | - |
| Result | 3 | `average_value` | `int32` | `Average Value` | - |
| Result | 4 | `standard_deviation` | `int32` | `Standard Deviation` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc GetCloudRGBValues(GetCloudRGBValuesRequest) returns (GetCloudRGBValuesResult);

message GetCloudRGBValuesRequest {
  optional CollectionObjectName source_cloud_name = 1;
  optional RGBColorChannel rgb_color_channel = 2;
}

message GetCloudRGBValuesResult {
  optional int32 low_value = 1;
  optional int32 high_value = 2;
  optional int32 average_value = 3;
  optional int32 standard_deviation = 4;
  MpExecutionDetails execution = 1000;
}
```

Returns channel statistics for a cloud.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Get Cloud RGB Values Near Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Cloud RGB Values Near Point](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values-near-point) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `GetCloudRGBValuesNearPoint` |
| Operation ID | `cloud_and_mesh_operations.get_cloud_rgb_values_near_point` |
| Route | `/briosa.CloudAndMeshOperations/GetCloudRGBValuesNearPoint` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_cloud_name` | `CollectionObjectName` | `Source Cloud Name` | Required |
| Request | 2 | `single_point` | `PointName` | `Single Point` | Required |
| Request | 3 | `diameter` | `double` | `Diameter` | 10.000000 |
| Request | 4 | `rgb_color_channel` | `RGBColorChannel` | `RGB Color Channel` | Intensity |
| Result | 1 | `low_value` | `int32` | `Low Value` | - |
| Result | 2 | `high_value` | `int32` | `High Value` | - |
| Result | 3 | `average_value` | `int32` | `Average Value` | - |
| Result | 4 | `standard_deviation` | `int32` | `Standard Deviation` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc GetCloudRGBValuesNearPoint(GetCloudRGBValuesNearPointRequest) returns (GetCloudRGBValuesNearPointResult);

message GetCloudRGBValuesNearPointRequest {
  optional CollectionObjectName source_cloud_name = 1;
  optional PointName single_point = 2;
  optional double diameter = 3;
  optional RGBColorChannel rgb_color_channel = 4;
}

message GetCloudRGBValuesNearPointResult {
  optional int32 low_value = 1;
  optional int32 high_value = 2;
  optional int32 average_value = 3;
  optional int32 standard_deviation = 4;
  MpExecutionDetails execution = 1000;
}
```

Returns channel statistics for cloud points within a diameter around an SA point.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Subdivide Cloud by Point Spacing

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Subdivide Cloud by Point Spacing](/mp-command-catalog/commands/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `SubdivideCloudByPointSpacing` |
| Operation ID | `cloud_and_mesh_operations.subdivide_cloud_by_point_spacing` |
| Route | `/briosa.CloudAndMeshOperations/SubdivideCloudByPointSpacing` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_cloud_name` | `CollectionObjectName` | `Source Cloud Name` | Required |
| Request | 2 | `point_spacing` | `double` | `Point Spacing` | 0.000000 |
| Request | 3 | `minimum_points_per_group` | `int32` | `Minimum Points Per Group` | 0 |
| Request | 4 | `new_cloud_name` | `CollectionObjectName` | `New Cloud Name` | Required |
| Request | 5 | `keep_all_groups` | `bool` | `Keep All Groups?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc SubdivideCloudByPointSpacing(SubdivideCloudByPointSpacingRequest) returns (SubdivideCloudByPointSpacingResult);

message SubdivideCloudByPointSpacingRequest {
  optional CollectionObjectName source_cloud_name = 1;
  optional double point_spacing = 2;
  optional int32 minimum_points_per_group = 3;
  optional CollectionObjectName new_cloud_name = 4;
  optional bool keep_all_groups = 5;
}

message SubdivideCloudByPointSpacingResult {
  MpExecutionDetails execution = 1000;
}
```

Subdivides an enhanced cloud by point spacing into a new enhanced cloud.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Delete Cloud Points by Radial Distance from Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Cloud Points by Radial Distance from Points](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `DeleteCloudPointsByRadialDistanceFromPoints` |
| Operation ID | `cloud_and_mesh_operations.delete_cloud_points_by_radial_distance_from_points` |
| Route | `/briosa.CloudAndMeshOperations/DeleteCloudPointsByRadialDistanceFromPoints` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `points` | `repeated PointName` | `Points` | Required |
| Request | 3 | `radius` | `double` | `Radius` | 0.000000 |
| Request | 4 | `delete_inside` | `bool` | `Delete Inside` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Deletes cloud points inside or outside the radial neighborhoods of selected SA points.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Delete Cloud Points by X Y Z Range

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Cloud Points by X Y Z Range](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `DeleteCloudPointsByXYZRange` |
| Operation ID | `cloud_and_mesh_operations.delete_cloud_points_by_x_y_z_range` |
| Route | `/briosa.CloudAndMeshOperations/DeleteCloudPointsByXYZRange` |
| Validation | At Risk — destructive fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cloud_names` | `repeated CollectionObjectName` | `Cloud Names` | Required |
| Request | 2 | `x_min` | `double` | `X Min` | Omitted |
| Request | 3 | `x_max` | `double` | `X Max` | Omitted |
| Request | 4 | `y_min` | `double` | `Y Min` | Omitted |
| Request | 5 | `y_max` | `double` | `Y Max` | Omitted |
| Request | 6 | `z_min` | `double` | `Z Min` | Omitted |
| Request | 7 | `z_max` | `double` | `Z Max` | Omitted |
| Request | 8 | `delete_inside` | `bool` | `Delete Inside` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Deletes cloud points inside or outside supplied axis bounds. A licensed 2026.1.0529.7 probe confirmed that each exported NOT_SUPPORTED optional bound is accepted through SetDoubleArg; omitting a bound preserves MP Ignore. Destructive fixture semantics still require validation.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Generate General Mesh

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Generate General Mesh](/mp-command-catalog/commands/cloud-and-mesh-operations#generate-general-mesh) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `GenerateGeneralMesh` |
| Operation ID | `cloud_and_mesh_operations.generate_general_mesh` |
| Route | `/briosa.CloudAndMeshOperations/GenerateGeneralMesh` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `output_mesh_name` | `CollectionObjectName` | `Output Mesh Name` | Required |
| Request | 2 | `clouds_to_mesh` | `repeated CollectionObjectName` | `Clouds to Mesh` | Required |
| Request | 3 | `maximum_triangle_size` | `double` | `Maximum Triangle Size` | 0.050000 |
| Request | 4 | `smallest_hole_diameter` | `double` | `Smallest Hole Diameter` | 0.250000 |
| Request | 5 | `finalize` | `bool` | `Finalize` | true |
| Request | 6 | `use_scan_direction_for_point_normal` | `bool` | `Use Scan Direction For Point Normal` | true |
| Request | 7 | `json_file` | `FileReference` | `JSON File(optional)` | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Generates a scan-stripe mesh from one or more clouds and can optionally write a JSON file.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Consolidate Mesh

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Consolidate Mesh](/mp-command-catalog/commands/cloud-and-mesh-operations#consolidate-mesh) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `ConsolidateMesh` |
| Operation ID | `cloud_and_mesh_operations.consolidate_mesh` |
| Route | `/briosa.CloudAndMeshOperations/ConsolidateMesh` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mesh` | `CollectionObjectName` | `Mesh` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConsolidateMesh(ConsolidateMeshRequest) returns (ConsolidateMeshResult);

message ConsolidateMeshRequest {
  optional CollectionObjectName mesh = 1;
}

message ConsolidateMeshResult {
  MpExecutionDetails execution = 1000;
}
```

Consolidates the selected scan-stripe mesh.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Mesh Volume

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Mesh Volume](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-volume) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `MeshVolume` |
| Operation ID | `cloud_and_mesh_operations.mesh_volume` |
| Route | `/briosa.CloudAndMeshOperations/MeshVolume` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mesh` | `CollectionObjectName` | `Mesh` | Required |
| Request | 2 | `plane` | `CollectionObjectName` | `Plane` | Required |
| Result | 1 | `above` | `double` | `Above` | - |
| Result | 2 | `below` | `double` | `Below` | - |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

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

Returns the mesh volume above and below the selected plane.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.

## Mesh Fill Holes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Mesh Fill Holes](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-fill-holes) |
| Service | `briosa.CloudAndMeshOperations` |
| RPC | `MeshFillHoles` |
| Operation ID | `cloud_and_mesh_operations.mesh_fill_holes` |
| Route | `/briosa.CloudAndMeshOperations/MeshFillHoles` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `mesh` | `CollectionObjectName` | `Mesh` | Required |
| Request | 2 | `maximum_triangle_length` | `double` | `Maximum Triangle Length` | -1.000000 |
| Request | 3 | `tension` | `double` | `Tension` | 0.000000 |
| Request | 4 | `unconditional_filling` | `bool` | `Unconditional Filling?` | false |
| Request | 5 | `fill_all_holes` | `bool` | `Fill All Holes?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc MeshFillHoles(MeshFillHolesRequest) returns (MeshFillHolesResult);

message MeshFillHolesRequest {
  optional CollectionObjectName mesh = 1;
  optional double maximum_triangle_length = 2;
  optional double tension = 3;
  optional bool unconditional_filling = 4;
  optional bool fill_all_holes = 5;
}

message MeshFillHolesResult {
  MpExecutionDetails execution = 1000;
}
```

Fills holes in the selected mesh. Briosa keeps Fill All Holes true by default so the command does not open an interactive hole-selection dialog.

The request preserves MP input order and the result preserves MP output order.
The server validates required and conditional presence before enqueue. Caller
cancellation does not establish that in-flight SpatialAnalyzer work stopped,
and the operation is never replayed automatically.
