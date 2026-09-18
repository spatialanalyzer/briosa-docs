---
title: Cloud and Mesh Operations
description: Briosa 0.1.0 Python APIs for supported Cloud and Mesh Operations MP commands.
toc_max_heading_level: 2
---

# Cloud and Mesh Operations

Exact MP command words map mechanically to `snake_case`. Required parameters
precede keyword-only defaulted inputs, and generated gRPC messages never escape.

## Cloud Display Control

:::note[Validation]

Validation: Portable contract review.

:::

[Cloud Display Control](/mp-command-catalog/commands/cloud-and-mesh-operations#cloud-display-control) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#cloud-display-control)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `thin_draw_increment` | `int` | `Thin (Draw Increment)` | 1 |
| `point_size` | `int` | `Point Size` | 1 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```python
async def cloud_display_control(
    self,
    *,
    thin_draw_increment: int = 1,
    point_size: int = 1,
) -> None: ...
```

```python
await briosa.cloud_display_control()
```

Adjusts SpatialAnalyzer cloud drawing density and point size.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Reset Cloud Bounding Box

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Reset Cloud Bounding Box](/mp-command-catalog/commands/cloud-and-mesh-operations#reset-cloud-bounding-box) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#reset-cloud-bounding-box)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_name` | `CollectionObjectName` | `Cloud Name` | Required |
| `cloud_box_type` | `CloudBoxType` | `Cloud Box Type` | World Axis Aligned Box |
| `show_bounding_box` | `bool` | `Show Bounding Box?` | true |
| `use_all_points` | `bool` | `Use All Points?` | false |
| `desired_point_count` | `int` | `Desired Point Count` | 1000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `x_axis_dimension` | `float` | `X-Axis Dimension` |
| `y_axis_dimension` | `float` | `Y-Axis Dimension` |
| `z_axis_dimension` | `float` | `Z-Axis Dimension` |
| `x_axis_in_world` | `Vector` | `X-Axis (in WORLD)` |
| `y_axis_in_world` | `Vector` | `Y-Axis (in WORLD)` |
| `z_axis_in_world` | `Vector` | `Z-Axis (in WORLD)` |
| `centroid_in_world` | `Vector` | `Centroid (in WORLD)` |
| `reference_transform_in_world` | `Transform` | `Reference Transform (in WORLD)` |
| `reference_transform_in_working` | `Transform` | `Reference Transform (in WORKING)` |
| `points_used_for_bounding_box` | `int` | `Points Used for Bounding Box` |

```python
@dataclass(frozen=True, slots=True)
class ResetCloudBoundingBoxResult:
    x_axis_dimension: float
    y_axis_dimension: float
    z_axis_dimension: float
    x_axis_in_world: Vector
    y_axis_in_world: Vector
    z_axis_in_world: Vector
    centroid_in_world: Vector
    reference_transform_in_world: Transform
    reference_transform_in_working: Transform
    points_used_for_bounding_box: int

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

```python
await briosa.reset_cloud_bounding_box(cloud_name=...)
```

Recomputes one cloud bounding box and returns its dimensions, axes, centroid, transforms, and sample count.

Returns all 10 MP outputs in the frozen, slotted `ResetCloudBoundingBoxResult` value. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Get Cloud Point Count

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Get Cloud Point Count](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-point-count) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#get-cloud-point-count)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_name` | `CollectionObjectName` | `Cloud Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `points_count` | `int` | `Points Count` |
| `planar_offset` | `float` | `Planar Offset` |
| `radial_offset` | `float` | `Radial Offset` |
| `active_clipping_planes` | `int` | `Active Clipping Planes` |

```python
@dataclass(frozen=True, slots=True)
class GetCloudPointCountResult:
    points_count: int
    planar_offset: float
    radial_offset: float
    active_clipping_planes: int

async def get_cloud_point_count(
    self,
    cloud_name: CollectionObjectName,
) -> GetCloudPointCountResult: ...
```

```python
await briosa.get_cloud_point_count(cloud_name=...)
```

Returns the selected cloud point count and current clipping-related values.

Returns all 4 MP outputs in the frozen, slotted `GetCloudPointCountResult` value. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Set Cloud Default Clipping Plane

:::note[Validation]

Validation: Licensed SA 2026.1.0529.7 probe.

:::

[Set Cloud Default Clipping Plane](/mp-command-catalog/commands/cloud-and-mesh-operations#set-cloud-default-clipping-plane) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#set-cloud-default-clipping-plane)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `enable_cloud_clipping` | `bool` | `Enable Cloud Clipping?` | false |
| `reference_object` | `CollectionObjectName | None` | `Reference Object` | Omitted when disabling |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```python
async def set_cloud_default_clipping_plane(
    self,
    *,
    enable_cloud_clipping: bool = False,
    reference_object: CollectionObjectName | None = None,
) -> None: ...
```

```python
await briosa.set_cloud_default_clipping_plane()
```

Controls the default clipping plane for newly measured clouds. The exact SDK cannot set the MP Clipping Options value, so enabling uses SpatialAnalyzer current default clipping components. Briosa defaults to disabled to avoid an interactive object selector; reference_object is required only when enabling.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Raster Scan Edge Inspection

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Raster Scan Edge Inspection](/mp-command-catalog/commands/cloud-and-mesh-operations#raster-scan-edge-inspection) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#raster-scan-edge-inspection)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `edge_surface_name` | `CollectionObjectName` | `Edge Surface Name` | Required |
| `b_spline_edge_list` | `Iterable[CollectionObjectName]` | `BSpline Edge List` | Required |
| `prefix_for_output_groups` | `CollectionObjectName` | `Prefix for Output Groups` | Required |
| `tolerance` | `float` | `Tolerance` | 0.000000 |
| `minimum_good_points_per_unit_length` | `int` | `Minimum Number of Good Points per Unit Length` | 0 |
| `maximum_bad_points_percentage` | `float` | `Maximum Percentage of Bad Points (0-100)` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `summary_result` | `str` | `Summary Result` |

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

```python
await briosa.raster_scan_edge_inspection(cloud_names=..., edge_surface_name=..., b_spline_edge_list=..., prefix_for_output_groups=...)
```

Runs the legacy raster-scan edge inspection workflow and returns the SA summary result.

Returns the MP output `Summary Result` directly as `str`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## New Raster Scan Edge Inspection

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[New Raster Scan Edge Inspection](/mp-command-catalog/commands/cloud-and-mesh-operations#new-raster-scan-edge-inspection) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#new-raster-scan-edge-inspection)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `edge_cloud_names` | `Iterable[CollectionObjectName]` | `Edge Cloud Names` | Required |
| `edge_surface_name` | `CollectionObjectName` | `Edge Surface Name` | Required |
| `edge_b_spline_name` | `CollectionObjectName` | `Edge BSpline Name` | Required |
| `output_prefix` | `CollectionObjectName` | `Output Prefix` | Required |
| `inspection_increment` | `float` | `Inspection Increment` | 0.000000 |
| `proximity_filter_distance` | `float` | `Proximity Filter Distance` | 0.000000 |
| `edge_bias_value` | `float` | `Edge Bias Value` | 0.000000 |
| `error_tolerance` | `float` | `Error Tolerance` | 0.000000 |
| `use_cosine_projection_method` | `bool` | `Use Cosine Projection Method` | false |
| `minimum_edge_points_per_segment` | `int` | `Minimum Number of Edge Points per segment` | 0 |
| `intermediate_calculation_results_file` | `FileReference | None` | `Intermediate Calculation Results File(optional)` | Omitted |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `summary_result` | `str` | `Summary Result` |

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

```python
await briosa.new_raster_scan_edge_inspection(edge_cloud_names=..., edge_surface_name=..., edge_b_spline_name=..., output_prefix=...)
```

Runs the newer raster-scan edge inspection workflow and optionally writes intermediate calculations.

Returns the MP output `Summary Result` directly as `str`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Clear Cloud Point Deviations

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Clear Cloud Point Deviations](/mp-command-catalog/commands/cloud-and-mesh-operations#clear-cloud-point-deviations) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#clear-cloud-point-deviations)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_name` | `CollectionObjectName` | `Cloud Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```python
async def clear_cloud_point_deviations(
    self,
    cloud_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.clear_cloud_point_deviations(cloud_name=...)
```

Clears point-deviation data stored on the selected cloud.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Enable All Cloud Cross Sections

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Enable All Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#enable-all-cloud-cross-sections)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cross_section_cloud_name` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```python
async def enable_all_cloud_cross_sections(
    self,
    cross_section_cloud_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.enable_all_cloud_cross_sections(cross_section_cloud_name=...)
```

Enables every cross section in one cross-section cloud.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Enable/Disable Cloud Cross Sections

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Enable/Disable Cloud Cross Sections](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#enabledisable-cloud-cross-sections)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cross_section_cloud_name` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| `cross_section_id` | `int` | `Cross Section ID` | 0 |
| `enable` | `bool` | `Enable (TRUE) / Disable (FALSE)?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```python
async def enable_disable_cloud_cross_sections(
    self,
    cross_section_cloud_name: CollectionObjectName,
    *,
    cross_section_id: int = 0,
    enable: bool = True,
) -> None: ...
```

```python
await briosa.enable_disable_cloud_cross_sections(cross_section_cloud_name=...)
```

Enables or disables one identified cross section.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Enable Single Cloud Cross Section

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Enable Single Cloud Cross Section](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#enable-single-cloud-cross-section)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cross_section_cloud_name` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |
| `cross_section_id` | `int` | `Cross Section ID` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```python
async def enable_single_cloud_cross_section(
    self,
    cross_section_cloud_name: CollectionObjectName,
    *,
    cross_section_id: int = 0,
) -> None: ...
```

```python
await briosa.enable_single_cloud_cross_section(cross_section_cloud_name=...)
```

Enables one cross section and leaves it as the single enabled section.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Get Number of Cross Sections in Cross Section Cloud

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Get Number of Cross Sections in Cross Section Cloud](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cross_section_cloud_name` | `CollectionObjectName` | `Cross Section Cloud Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `cross_section_count` | `int` | `Cross Section Count` |

```python
async def get_number_of_cross_sections_in_cross_section_cloud(
    self,
    cross_section_cloud_name: CollectionObjectName,
) -> int: ...
```

```python
await briosa.get_number_of_cross_sections_in_cross_section_cloud(cross_section_cloud_name=...)
```

Returns the number of cross sections in the selected cross-section cloud.

Returns the MP output `Cross Section Count` directly as `int`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Filter Clouds to Plane

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Plane](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-plane) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-plane)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `filter_plane_name` | `CollectionObjectName` | `Filter Plane's Name` | Required |
| `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| `proximity` | `float` | `Proximity` | 0.000000 |
| `allowable_offset_direction` | `OffsetDirectionType` | `Allowable Offset Dir` | Both |
| `output_type` | `PointOutputType` | `Output Type` | Points |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.filter_clouds_to_plane(cloud_names=..., filter_plane_name=..., output_group_name=...)
```

Filters cloud points by proximity to a plane. Briosa supplies non-interactive Both and Points defaults where the MP Editor export is blank.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Filter Clouds to Group

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Group](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-group) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `filter_group_name` | `CollectionObjectName` | `Filter Group's Name` | Required |
| `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| `proximity` | `float` | `Proximity (0 for Closest Point only)` | 0.000000 |
| `maximum_number_of_points` | `int` | `Maximum Number of Points (0 for Unlimited)` | 0 |
| `output_type` | `PointOutputType` | `Output Type` | Points |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.filter_clouds_to_group(cloud_names=..., filter_group_name=..., output_group_name=...)
```

Filters clouds by proximity to a point group.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Filter Clouds to Surface

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Surface](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-surface) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-surface)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `filter_surface_name` | `CollectionObjectName` | `Filter Surface's Name` | Required |
| `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| `low_proximity` | `float` | `Low Proximity` | 0.000000 |
| `high_proximity` | `float` | `High Proximity` | 0.000000 |
| `skip_factor` | `int` | `Skip Factor` | 0 |
| `output_type` | `PointOutputType` | `Output Type` | Points |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.filter_clouds_to_surface(cloud_names=..., filter_surface_name=..., output_group_name=...)
```

Filters clouds to a surface using low and high proximity limits.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Filter Clouds to BSplines

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to BSplines](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-bsplines) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-bsplines)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `filter_b_spline_names` | `Iterable[CollectionObjectName]` | `Filter BSpline Names` | Required |
| `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimum_proximity` | `float` | `Minimum Proximity` | 0.000000 |
| `maximum_proximity` | `float` | `Maximum Proximity` | 0.000000 |
| `output_type` | `PointOutputType` | `Output Type` | Points |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.filter_clouds_to_bsplines(cloud_names=..., filter_b_spline_names=..., output_group_name=...)
```

Filters clouds by proximity to one or more BSplines.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Filter Clouds to Line Segment

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Line Segment](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-line-segment) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-line-segment)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `first_line_end_point` | `PointName` | `First Line End Point` | Required |
| `second_line_end_point` | `PointName` | `Second Line End Point` | Required |
| `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimum_proximity` | `float` | `Minimum Proximity` | 0.000000 |
| `maximum_proximity` | `float` | `Maximum Proximity` | 0.000000 |
| `output_type` | `PointOutputType` | `Output Type` | Points |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.filter_clouds_to_line_segment(cloud_names=..., first_line_end_point=..., second_line_end_point=..., output_group_name=...)
```

Filters clouds by proximity to a line segment defined by two SA points.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Filter Clouds to Vector Groups - Resolve points

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Vector Groups - Resolve points](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `vector_group_names` | `Iterable[CollectionObjectName]` | `Vector Group Names` | Required |
| `output_group_name` | `CollectionObjectName` | `Output Group Name` | Required |
| `minimum_proximity` | `float` | `Minimum Proximity` | 0.000000 |
| `maximum_proximity` | `float` | `Maximum Proximity` | 0.000000 |
| `maximum_distance_from_vector_begin` | `float` | `Maximum Distance From Vector Begin` | 0.000000 |
| `minimum_number_of_required_points` | `int` | `Minimum number of required points` | 0 |
| `output_type` | `PointOutputType` | `Output Type` | Points |
| `include_proximity_points` | `bool` | `Include Proximity Points?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.filter_clouds_to_vector_groups_resolve_points(cloud_names=..., vector_group_names=..., output_group_name=...)
```

Resolves cloud points against vector groups. The exact 2026.1 target includes the Include Proximity Points input absent from ObjectiveSA 2024.1.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Filter Clouds to Vector Groups - Resolve Clouds

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Filter Clouds to Vector Groups - Resolve Clouds](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-clouds)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `vector_group_names` | `Iterable[CollectionObjectName]` | `Vector Group Names` | Required |
| `radial_cutoff` | `float` | `Radial Cutoff` | 0.100000 |
| `lower_cutoff` | `float` | `Lower Cutoff` | -0.100000 |
| `upper_cutoff` | `float` | `Upper Cutoff` | 0.100000 |
| `output_collection_name` | `str` | `Output Collection Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `filtered_clouds` | `tuple[CollectionObjectName, ...]` | `Filtered Clouds` |

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

```python
await briosa.filter_clouds_to_vector_groups_resolve_clouds(cloud_names=..., vector_group_names=..., output_collection_name=...)
```

Creates filtered clouds from vector-group cutoffs and returns the resulting cloud references.

Returns the MP output `Filtered Clouds` directly as `tuple[CollectionObjectName, ...]`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## RGB Cloud Point Filter

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[RGB Cloud Point Filter](/mp-command-catalog/commands/cloud-and-mesh-operations#rgb-cloud-point-filter) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#rgb-cloud-point-filter)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filter_name` | `str` | `Filter Name` | Default Filter |
| `clouds_to_be_filtered` | `Iterable[CollectionObjectName]` | `Clouds To Be Filtered` | Required |
| `red_enabled` | `bool` | `Red Enabled` | true |
| `red_high_enabled` | `bool` | `Red High Enabled` | false |
| `red_high_threshold` | `int` | `Red High Threshold` | 255 |
| `red_low_enabled` | `bool` | `Red Low Enabled` | false |
| `red_low_threshold` | `int` | `Red Low Threshold` | 0 |
| `green_enabled` | `bool` | `Green Enabled` | true |
| `green_high_enabled` | `bool` | `Green High Enabled` | false |
| `green_high_threshold` | `int` | `Green High Threshold` | 255 |
| `green_low_enabled` | `bool` | `Green Low Enabled` | false |
| `green_low_threshold` | `int` | `Green Low Threshold` | 0 |
| `blue_enabled` | `bool` | `Blue Enabled` | true |
| `blue_high_enabled` | `bool` | `Blue High Enabled` | false |
| `blue_high_threshold` | `int` | `Blue High Threshold` | 255 |
| `blue_low_enabled` | `bool` | `Blue Low Enabled` | false |
| `blue_low_threshold` | `int` | `Blue Low Threshold` | 0 |
| `gray_scale_enabled` | `bool` | `Gray Scale Enabled` | false |
| `gray_scale_high_enabled` | `bool` | `Gray Scale High Enabled` | false |
| `gray_scale_high_threshold` | `int` | `Gray Scale High Threshold` | 255 |
| `gray_scale_low_enabled` | `bool` | `Gray Scale Low Enabled` | false |
| `gray_scale_low_threshold` | `int` | `Gray Scale Low Threshold` | 0 |
| `rgb_filter_operation` | `RGBFilterOperation` | `RGB Filter Operation` | Reset and Apply Filter |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.rgb_cloud_point_filter(clouds_to_be_filtered=...)
```

Applies the selected RGB, intensity, and grayscale thresholds to one or more clouds.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Get Cloud RGB Values

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Get Cloud RGB Values](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#get-cloud-rgb-values)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_cloud_name` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `rgb_color_channel` | `RGBColorChannel` | `RGB Color Channel` | Intensity |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `low_value` | `int` | `Low Value` |
| `high_value` | `int` | `High Value` |
| `average_value` | `int` | `Average Value` |
| `standard_deviation` | `int` | `Standard Deviation` |

```python
@dataclass(frozen=True, slots=True)
class GetCloudRGBValuesResult:
    low_value: int
    high_value: int
    average_value: int
    standard_deviation: int

async def get_cloud_rgb_values(
    self,
    source_cloud_name: CollectionObjectName,
    *,
    rgb_color_channel: RGBColorChannel = RGBColorChannel.INTENSITY,
) -> GetCloudRGBValuesResult: ...
```

```python
await briosa.get_cloud_rgb_values(source_cloud_name=...)
```

Returns channel statistics for a cloud.

Returns all 4 MP outputs in the frozen, slotted `GetCloudRGBValuesResult` value. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Get Cloud RGB Values Near Point

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Get Cloud RGB Values Near Point](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-rgb-values-near-point) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#get-cloud-rgb-values-near-point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_cloud_name` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `single_point` | `PointName` | `Single Point` | Required |
| `diameter` | `float` | `Diameter` | 10.000000 |
| `rgb_color_channel` | `RGBColorChannel` | `RGB Color Channel` | Intensity |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `low_value` | `int` | `Low Value` |
| `high_value` | `int` | `High Value` |
| `average_value` | `int` | `Average Value` |
| `standard_deviation` | `int` | `Standard Deviation` |

```python
@dataclass(frozen=True, slots=True)
class GetCloudRGBValuesNearPointResult:
    low_value: int
    high_value: int
    average_value: int
    standard_deviation: int

async def get_cloud_rgb_values_near_point(
    self,
    source_cloud_name: CollectionObjectName,
    single_point: PointName,
    *,
    diameter: float = 10.0,
    rgb_color_channel: RGBColorChannel = RGBColorChannel.INTENSITY,
) -> GetCloudRGBValuesNearPointResult: ...
```

```python
await briosa.get_cloud_rgb_values_near_point(source_cloud_name=..., single_point=...)
```

Returns channel statistics for cloud points within a diameter around an SA point.

Returns all 4 MP outputs in the frozen, slotted `GetCloudRGBValuesNearPointResult` value. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Subdivide Cloud by Point Spacing

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Subdivide Cloud by Point Spacing](/mp-command-catalog/commands/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#subdivide-cloud-by-point-spacing)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_cloud_name` | `CollectionObjectName` | `Source Cloud Name` | Required |
| `point_spacing` | `float` | `Point Spacing` | 0.000000 |
| `minimum_points_per_group` | `int` | `Minimum Points Per Group` | 0 |
| `new_cloud_name` | `CollectionObjectName` | `New Cloud Name` | Required |
| `keep_all_groups` | `bool` | `Keep All Groups?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.subdivide_cloud_by_point_spacing(source_cloud_name=..., new_cloud_name=...)
```

Subdivides an enhanced cloud by point spacing into a new enhanced cloud.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Delete Cloud Points by Radial Distance from Points

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Delete Cloud Points by Radial Distance from Points](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `points` | `Iterable[PointName]` | `Points` | Required |
| `radius` | `float` | `Radius` | 0.000000 |
| `delete_inside` | `bool` | `Delete Inside` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.delete_cloud_points_by_radial_distance_from_points(cloud_names=..., points=...)
```

Deletes cloud points inside or outside the radial neighborhoods of selected SA points.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Delete Cloud Points by X Y Z Range

:::note[Validation]

Validation: At Risk — destructive fixture validation required.

:::

[Delete Cloud Points by X Y Z Range](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `x_min` | `float | None` | `X Min` | Omitted |
| `x_max` | `float | None` | `X Max` | Omitted |
| `y_min` | `float | None` | `Y Min` | Omitted |
| `y_max` | `float | None` | `Y Max` | Omitted |
| `z_min` | `float | None` | `Z Min` | Omitted |
| `z_max` | `float | None` | `Z Max` | Omitted |
| `delete_inside` | `bool` | `Delete Inside` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.delete_cloud_points_by_x_y_z_range(cloud_names=...)
```

Deletes cloud points inside or outside supplied axis bounds. A licensed 2026.1.0529.7 probe confirmed that each exported NOT_SUPPORTED optional bound is accepted through SetDoubleArg; omitting a bound preserves MP Ignore. Destructive fixture semantics still require validation.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Generate General Mesh

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Generate General Mesh](/mp-command-catalog/commands/cloud-and-mesh-operations#generate-general-mesh) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#generate-general-mesh)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `output_mesh_name` | `CollectionObjectName` | `Output Mesh Name` | Required |
| `clouds_to_mesh` | `Iterable[CollectionObjectName]` | `Clouds to Mesh` | Required |
| `maximum_triangle_size` | `float` | `Maximum Triangle Size` | 0.050000 |
| `smallest_hole_diameter` | `float` | `Smallest Hole Diameter` | 0.250000 |
| `finalize` | `bool` | `Finalize` | true |
| `use_scan_direction_for_point_normal` | `bool` | `Use Scan Direction For Point Normal` | true |
| `json_file` | `FileReference | None` | `JSON File(optional)` | Omitted |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.generate_general_mesh(output_mesh_name=..., clouds_to_mesh=...)
```

Generates a scan-stripe mesh from one or more clouds and can optionally write a JSON file.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Consolidate Mesh

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Consolidate Mesh](/mp-command-catalog/commands/cloud-and-mesh-operations#consolidate-mesh) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#consolidate-mesh)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

```python
async def consolidate_mesh(
    self,
    mesh: CollectionObjectName,
) -> None: ...
```

```python
await briosa.consolidate_mesh(mesh=...)
```

Consolidates the selected scan-stripe mesh.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Mesh Volume

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Mesh Volume](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-volume) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#mesh-volume)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |
| `plane` | `CollectionObjectName` | `Plane` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `above` | `float` | `Above` |
| `below` | `float` | `Below` |

```python
@dataclass(frozen=True, slots=True)
class MeshVolumeResult:
    above: float
    below: float

async def mesh_volume(
    self,
    mesh: CollectionObjectName,
    plane: CollectionObjectName,
) -> MeshVolumeResult: ...
```

```python
await briosa.mesh_volume(mesh=..., plane=...)
```

Returns the mesh volume above and below the selected plane.

Returns all 2 MP outputs in the frozen, slotted `MeshVolumeResult` value. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.

## Mesh Fill Holes

:::note[Validation]

Validation: At Risk — fixture or interactive validation required.

:::

[Mesh Fill Holes](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-fill-holes) · [gRPC contract](/api/grpc/cloud-and-mesh-operations#mesh-fill-holes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |
| `maximum_triangle_length` | `float` | `Maximum Triangle Length` | -1.000000 |
| `tension` | `float` | `Tension` | 0.000000 |
| `unconditional_filling` | `bool` | `Unconditional Filling?` | false |
| `fill_all_holes` | `bool` | `Fill All Holes?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| - | None | - |

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

```python
await briosa.mesh_fill_holes(mesh=...)
```

Fills holes in the selected mesh. Briosa keeps Fill All Holes true by default so the command does not open an interactive hole-selection dialog.

Returns `None`. Normal asyncio cancellation and timeout tools remain caller controls; the client does not replay uncertain work.
