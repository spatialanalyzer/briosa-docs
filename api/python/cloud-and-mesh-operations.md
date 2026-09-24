---
title: Cloud and Mesh Operations
description: Unreleased python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Cloud and Mesh Operations

[SA 2026.1.0529.7](/api/python/cloud-and-mesh-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/cloud-and-mesh-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Cloud Display Control {/* #cloud-display-control */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#cloud-display-control) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#cloud-display-control)

```python
async def cloud_display_control(
        self,
        *,
        thin: int = 1,
        point_size: int = 1,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `thin` | MP qualifier: Draw Increment. |

## Reset Cloud Bounding Box {/* #reset-cloud-bounding-box */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#reset-cloud-bounding-box) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#reset-cloud-bounding-box)

```python
async def reset_cloud_bounding_box(
        self,
        cloud_name: CollectionObjectName,
        *,
        cloud_box_type: CloudBoxType = CloudBoxType.WORLD_AXIS_ALIGNED_BOX,
        show_bounding_box: bool = True,
        use_all_points: bool = False,
        desired_point_count: int = 1000,
    ) -> ResetCloudBoundingBoxResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cloud Point Count {/* #get-cloud-point-count */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-point-count) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#get-cloud-point-count)

```python
async def get_cloud_point_count(
        self,
        cloud_name: CollectionObjectName,
    ) -> GetCloudPointCountResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cloud Default Clipping Plane {/* #set-cloud-default-clipping-plane */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#set-cloud-default-clipping-plane) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#set-cloud-default-clipping-plane)

```python
async def set_cloud_default_clipping_plane(
        self,
        *,
        enable_cloud_clipping: bool = False,
        reference_object: CollectionObjectName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Raster Scan Edge Inspection {/* #raster-scan-edge-inspection */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#raster-scan-edge-inspection) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#raster-scan-edge-inspection)

```python
async def raster_scan_edge_inspection(
        self,
        cloud_names: Iterable[CollectionObjectName],
        edge_surface_name: CollectionObjectName,
        b_spline_edge_list: Iterable[CollectionObjectName],
        prefix_for_output_groups: CollectionObjectName,
        *,
        tolerance: float = 0.0,
        minimum_good_points_per_unit_length: int = 0,
        maximum_bad_points_percentage: float = 0.0,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## New Raster Scan Edge Inspection {/* #new-raster-scan-edge-inspection */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#new-raster-scan-edge-inspection) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#new-raster-scan-edge-inspection)

```python
async def new_raster_scan_edge_inspection(
        self,
        edge_cloud_names: Iterable[CollectionObjectName],
        edge_surface_name: CollectionObjectName,
        edge_b_spline_name: CollectionObjectName,
        output_prefix: CollectionObjectName,
        *,
        inspection_increment: float = 0.0,
        proximity_filter_distance: float = 0.0,
        edge_bias_value: float = 0.0,
        error_tolerance: float = 0.0,
        use_cosine_projection_method: bool = False,
        minimum_edge_points_per_segment: int = 0,
        intermediate_calculation_results_file: FileReference | None = None,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Cloud Point Deviations {/* #clear-cloud-point-deviations */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#clear-cloud-point-deviations) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#clear-cloud-point-deviations)

```python
async def clear_cloud_point_deviations(
        self,
        cloud_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable All Cloud Cross Sections {/* #enable-all-cloud-cross-sections */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#enable-all-cloud-cross-sections)

```python
async def enable_all_cloud_cross_sections(
        self,
        cross_section_cloud_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Cloud Cross Sections {/* #enabledisable-cloud-cross-sections */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#enabledisable-cloud-cross-sections)

```python
async def enable_disable_cloud_cross_sections(
        self,
        cross_section_cloud_name: CollectionObjectName,
        *,
        cross_section_id: int = 0,
        enable: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable Single Cloud Cross Section {/* #enable-single-cloud-cross-section */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#enable-single-cloud-cross-section)

```python
async def enable_single_cloud_cross_section(
        self,
        cross_section_cloud_name: CollectionObjectName,
        *,
        cross_section_id: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Cross Sections in Cross Section Cloud {/* #get-number-of-cross-sections-in-cross-section-cloud */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud)

```python
async def get_number_of_cross_sections_in_cross_section_cloud(
        self,
        cross_section_cloud_name: CollectionObjectName,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Plane {/* #filter-clouds-to-plane */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-plane) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-plane)

```python
async def filter_clouds_to_plane(
        self,
        cloud_names: Iterable[CollectionObjectName],
        filter_plane_name: CollectionObjectName,
        output_group_name: CollectionObjectName,
        *,
        proximity: float = 0.0,
        allowable_offset_direction: OffsetDirectionType = OffsetDirectionType.BOTH,
        output_type: PointOutputType = PointOutputType.POINTS,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Group {/* #filter-clouds-to-group */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-group) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-group)

```python
async def filter_clouds_to_group(
        self,
        cloud_names: Iterable[CollectionObjectName],
        filter_group_name: CollectionObjectName,
        output_group_name: CollectionObjectName,
        *,
        proximity: float = 0.0,
        maximum_number_of_points: int = 0,
        output_type: PointOutputType = PointOutputType.POINTS,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Surface {/* #filter-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-surface) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-surface)

```python
async def filter_clouds_to_surface(
        self,
        cloud_names: Iterable[CollectionObjectName],
        filter_surface_name: CollectionObjectName,
        output_group_name: CollectionObjectName,
        *,
        low_proximity: float = 0.0,
        high_proximity: float = 0.0,
        skip_factor: int = 0,
        output_type: PointOutputType = PointOutputType.POINTS,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to BSplines {/* #filter-clouds-to-bsplines */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-bsplines) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-bsplines)

```python
async def filter_clouds_to_bsplines(
        self,
        cloud_names: Iterable[CollectionObjectName],
        filter_b_spline_names: Iterable[CollectionObjectName],
        output_group_name: CollectionObjectName,
        *,
        minimum_proximity: float = 0.0,
        maximum_proximity: float = 0.0,
        output_type: PointOutputType = PointOutputType.POINTS,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Line Segment {/* #filter-clouds-to-line-segment */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-line-segment) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-line-segment)

```python
async def filter_clouds_to_line_segment(
        self,
        cloud_names: Iterable[CollectionObjectName],
        first_line_end_point: PointName,
        second_line_end_point: PointName,
        output_group_name: CollectionObjectName,
        *,
        minimum_proximity: float = 0.0,
        maximum_proximity: float = 0.0,
        output_type: PointOutputType = PointOutputType.POINTS,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Vector Groups - Resolve points {/* #filter-clouds-to-vector-groups---resolve-points */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points)

```python
async def filter_clouds_to_vector_groups_resolve_points(
        self,
        cloud_names: Iterable[CollectionObjectName],
        vector_group_names: Iterable[CollectionObjectName],
        output_group_name: CollectionObjectName,
        *,
        minimum_proximity: float = 0.0,
        maximum_proximity: float = 0.0,
        maximum_distance_from_vector_begin: float = 0.0,
        minimum_number_of_required_points: int = 0,
        output_type: PointOutputType = PointOutputType.POINTS,
        include_proximity_points: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Vector Groups - Resolve Clouds {/* #filter-clouds-to-vector-groups---resolve-clouds */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds)

```python
async def filter_clouds_to_vector_groups_resolve_clouds(
        self,
        cloud_names: Iterable[CollectionObjectName],
        vector_group_names: Iterable[CollectionObjectName],
        output_collection_name: str,
        *,
        radial_cutoff: float = 0.1,
        lower_cutoff: float = -0.1,
        upper_cutoff: float = 0.1,
    ) -> tuple[CollectionObjectName, ...]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## RGB Cloud Point Filter {/* #rgb-cloud-point-filter */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#rgb-cloud-point-filter) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#rgb-cloud-point-filter)

```python
async def rgb_cloud_point_filter(
        self,
        clouds_to_be_filtered: Iterable[CollectionObjectName],
        *,
        filter_name: str = "Default Filter",
        red_enabled: bool = True,
        red_high_enabled: bool = False,
        red_high_threshold: int = 255,
        red_low_enabled: bool = False,
        red_low_threshold: int = 0,
        green_enabled: bool = True,
        green_high_enabled: bool = False,
        green_high_threshold: int = 255,
        green_low_enabled: bool = False,
        green_low_threshold: int = 0,
        blue_enabled: bool = True,
        blue_high_enabled: bool = False,
        blue_high_threshold: int = 255,
        blue_low_enabled: bool = False,
        blue_low_threshold: int = 0,
        gray_scale_enabled: bool = False,
        gray_scale_high_enabled: bool = False,
        gray_scale_high_threshold: int = 255,
        gray_scale_low_enabled: bool = False,
        gray_scale_low_threshold: int = 0,
        rgb_filter_operation: RGBFilterOperation = RGBFilterOperation.RESET_AND_APPLY_FILTER,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cloud RGB Values {/* #get-cloud-rgb-values */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#get-cloud-rgb-values)

```python
async def get_cloud_rgb_values(
        self,
        source_cloud_name: CollectionObjectName,
        *,
        rgb_color_channel: RGBColorChannel = RGBColorChannel.INTENSITY,
    ) -> GetCloudRGBValuesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cloud RGB Values Near Point {/* #get-cloud-rgb-values-near-point */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values-near-point) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#get-cloud-rgb-values-near-point)

```python
async def get_cloud_rgb_values_near_point(
        self,
        source_cloud_name: CollectionObjectName,
        single_point: PointName,
        *,
        diameter: float = 10.0,
        rgb_color_channel: RGBColorChannel = RGBColorChannel.INTENSITY,
    ) -> GetCloudRGBValuesNearPointResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Subdivide Cloud by Point Spacing {/* #subdivide-cloud-by-point-spacing */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing)

```python
async def subdivide_cloud_by_point_spacing(
        self,
        source_cloud_name: CollectionObjectName,
        new_cloud_name: CollectionObjectName,
        *,
        point_spacing: float = 0.0,
        minimum_points_per_group: int = 0,
        keep_all_groups: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Cloud Points by Radial Distance from Points {/* #delete-cloud-points-by-radial-distance-from-points */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points)

```python
async def delete_cloud_points_by_radial_distance_from_points(
        self,
        cloud_names: Iterable[CollectionObjectName],
        points: Iterable[PointName],
        *,
        radius: float = 0.0,
        delete_inside: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Cloud Points by X Y Z Range {/* #delete-cloud-points-by-x-y-z-range */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range)

```python
async def delete_cloud_points_by_x_y_z_range(
        self,
        cloud_names: Iterable[CollectionObjectName],
        *,
        x_min: float | None = None,
        x_max: float | None = None,
        y_min: float | None = None,
        y_max: float | None = None,
        z_min: float | None = None,
        z_max: float | None = None,
        delete_inside: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate General Mesh {/* #generate-general-mesh */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#generate-general-mesh) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#generate-general-mesh)

```python
async def generate_general_mesh(
        self,
        output_mesh_name: CollectionObjectName,
        clouds_to_mesh: Iterable[CollectionObjectName],
        *,
        maximum_triangle_size: float = 0.05,
        smallest_hole_diameter: float = 0.25,
        finalize: bool = True,
        use_scan_direction_for_point_normal: bool = True,
        json_file: FileReference | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Consolidate Mesh {/* #consolidate-mesh */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#consolidate-mesh) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#consolidate-mesh)

```python
async def consolidate_mesh(
        self,
        mesh: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Mesh Volume {/* #mesh-volume */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-volume) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#mesh-volume)

```python
async def mesh_volume(
        self,
        mesh: CollectionObjectName,
        plane: CollectionObjectName,
    ) -> MeshVolumeResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Mesh Fill Holes {/* #mesh-fill-holes */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-fill-holes) · [gRPC Contract](/api/grpc/cloud-and-mesh-operations#mesh-fill-holes)

```python
async def mesh_fill_holes(
        self,
        mesh: CollectionObjectName,
        *,
        maximum_triangle_length: float = -1.0,
        tension: float = 0.0,
        unconditional_filling: bool = False,
        fill_all_holes: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/62742ed39d1ce8508664c585c906948122e7517d/targets/2026.1.0529.7)
