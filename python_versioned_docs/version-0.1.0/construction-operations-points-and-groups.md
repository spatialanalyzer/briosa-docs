---
title: Construction Operations / Points and Groups
description: Briosa 0.1.0 Python APIs for selected point and group construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Points and Groups

These asynchronous methods preserve the approved MP defaults, operate on live
SpatialAnalyzer state, and are never automatically replayed.

## Shared Types

```python
class SurveyTargetType(StrEnum):
    TRIANGLE = "Triangle"
    CIRCLE = "Circle"

class WcfAxis(StrEnum):
    X = "X Axis"
    Y = "Y Axis"
    Z = "Z Axis"

class EdgePointMode(StrEnum):
    INCLUDE_EDGES = "Include Edges"
    EXCLUDE_EDGES = "Exclude Edges"
    EDGES_ONLY = "Edges Only"

@dataclass(frozen=True)
class ProjectedPointGradient:
    projected_point: Vector
    normal_vector: Vector
    u_direction: Vector
    v_direction: Vector

@dataclass(frozen=True)
class ObjectOriginResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float

@dataclass(frozen=True)
class GroupAverageResult:
    rms_deviation: float
    max_absolute_deviation: float
    average_deviation: float
```

## Basic Point and Group Construction

```python
async def construct_point_fit_to_points(
    self,
    point_names: Iterable[PointName],
    resulting_point_name: PointName,
) -> None: ...

async def construct_point_in_working_coordinates(
    self,
    point_name: PointName,
    working_coordinates: Vector,
) -> None: ...

async def construct_point_from_survey_target_center(
    self,
    cloud_containing_target: CollectionObjectName,
    reference_seed_point: PointName,
    result_center_point_name: PointName,
    *,
    survey_target_type: SurveyTargetType = SurveyTargetType.TRIANGLE,
    search_diameter: float = 0.0,
) -> None: ...

async def set_point_position_in_working_coordinates(
    self,
    point_name: PointName,
    position_in_working_coordinates: Vector,
) -> None: ...

async def transform_points_by_delta_about_working_frame(
    self,
    point_name_list: Iterable[PointName],
    delta_in_working_coordinates: Vector,
) -> None: ...

async def construct_point_at_line_midpoint(
    self,
    line_name: CollectionObjectName,
    point_name: PointName,
) -> None: ...

async def construct_point_group_from_point_name_ref_list(
    self,
    point_name_list: Iterable[PointName],
    group_name: CollectionObjectName,
) -> None: ...

async def construct_point_groups_from_vector_groups(
    self,
    vector_groups: Iterable[CollectionObjectName],
    *,
    optional_group_name_suffix: str = "",
    make_vector_begin_points: bool = False,
    make_vector_end_points: bool = False,
) -> list[CollectionObjectName]: ...

async def construct_point_group_from_point_cloud(
    self,
    cloud_name: CollectionObjectName,
    point_group_name: CollectionObjectName,
    *,
    point_prefix: str = "pt",
    starting_point_number: int = 0,
    point_offset: float = 0.0,
    sub_sampling: bool = False,
    sub_sampling_distance: float = 0.5,
    show_progress: bool = False,
) -> None: ...

async def construct_point_from_cloud_point_runtime_select(
    self,
    *,
    selection_prompt: str = "Select cloud point",
    construct_point: bool = False,
    constructed_point_name: PointName | None = None,
) -> Vector: ...
```

Cloud selection is operator-interactive. When `construct_point` is false, the
Point Name may be omitted. Task cancellation does not prove the SA prompt
stopped.

## Intersections and Projections

```python
async def construct_point_at_circle_center(
    self, circle_name: CollectionObjectName, point_name: PointName
) -> None: ...

async def construct_point_at_intersection_of_planes(
    self,
    plane_1_name: CollectionObjectName,
    plane_2_name: CollectionObjectName,
    plane_3_name: CollectionObjectName,
    point_name: PointName,
) -> None: ...

async def construct_point_at_intersection_of_two_lines(
    self,
    first_line_name: CollectionObjectName,
    second_line_name: CollectionObjectName,
    resulting_point_name: PointName,
) -> None: ...

async def construct_point_at_intersection_of_plane_and_line(
    self,
    plane_name: CollectionObjectName,
    line_name: CollectionObjectName,
    resulting_point_name: PointName,
) -> None: ...

async def construct_point_at_intersection_of_two_b_splines(
    self,
    first_b_spline_name: CollectionObjectName,
    second_b_spline_name: CollectionObjectName,
    point_name: PointName,
) -> None: ...

async def construct_point_at_intersection_of_b_spline_and_surfaces(
    self,
    b_spline_name: CollectionObjectName,
    surface_list: Iterable[CollectionObjectName],
    point_name: PointName,
    *,
    approximation_tolerance: float = 0.001,
) -> None: ...

async def construct_points_at_intersection_of_circle_and_line(
    self,
    circle_name: CollectionObjectName,
    line_name: CollectionObjectName,
    base_point_name_for_results: PointName,
) -> None: ...

async def construct_points_at_intersection_of_principal_object_axes_and_surfaces(
    self,
    axis_object_list: Iterable[CollectionObjectName],
    surface_list: Iterable[CollectionObjectName],
    resultant_group_name: CollectionObjectName,
    *,
    point_suffix: str = "",
) -> None: ...

async def construct_points_from_cylinder(
    self,
    cylinder_name: CollectionObjectName,
    group_name: CollectionObjectName,
) -> None: ...

async def construct_point_at_projection_of_point_onto_object(
    self,
    point_to_project: PointName,
    object_name: CollectionObjectName,
    resulting_point_name: PointName,
) -> None: ...

async def construct_points_at_projection_on_surfaces_parallel_to_wcf_axis(
    self,
    surface_list: Iterable[CollectionObjectName],
    point_names: Iterable[PointName],
    axis: WcfAxis,
    *,
    group_name_to_contain_new_points: str = "",
    point_name_prefix: str = "",
    point_name_suffix: str = "",
) -> None: ...

async def construct_points_at_projection_on_surfaces_radial_from_wcf_axis(
    self,
    surface_list: Iterable[CollectionObjectName],
    point_names: Iterable[PointName],
    axis: WcfAxis,
    *,
    group_name_to_contain_new_points: str = "",
    point_name_prefix: str = "",
    point_name_suffix: str = "",
) -> None: ...

async def construct_points_at_projection_on_surfaces_spherical_from_wcf_origin(
    self,
    surface_list: Iterable[CollectionObjectName],
    point_names: Iterable[PointName],
    *,
    group_name_to_contain_new_points: str = "",
    point_name_prefix: str = "",
    point_name_suffix: str = "",
) -> None: ...
```

The two WCF projection methods require an axis. Spherical prefix and suffix map
to their matching MP arguments.

## Gradients, Meshes, and Curves

```python
async def get_gradient_at_projected_point_on_surface(
    self,
    point_to_project: PointName,
    surface_name: CollectionObjectName,
    *,
    generate_output_vector_lines: bool = False,
) -> ProjectedPointGradient: ...

async def get_gradient_at_projected_point_on_surface_edge(
    self,
    point_to_project: PointName,
    surface_edge_b_spline: CollectionObjectName,
    surface_name: CollectionObjectName,
    *,
    edge_offset_direction: Vector | None = None,
    edge_offset_distance: float = 0.01,
    generate_output_vector_lines: bool = False,
) -> ProjectedPointGradient: ...

async def construct_points_by_projecting_points_on_mesh_along_direction(
    self,
    reference_point_names: Iterable[PointName],
    group_name_for_projected_points: CollectionObjectName,
    object_providing_direction_reference: CollectionObjectName,
    mesh_serving_as_projection_target: CollectionObjectName,
    *,
    bi_directional_projection: bool = True,
) -> list[PointName]: ...

async def construct_points_spaced_at_distance_on_curves(
    self,
    b_spline_list: Iterable[CollectionObjectName],
    resultant_group_name: CollectionObjectName,
    *,
    distance_between_points: float = 0.5,
    resultant_point_name_prefix: str = "",
) -> None: ...

async def construct_points_n_spaced_on_curves(
    self,
    b_spline_list: Iterable[CollectionObjectName],
    resultant_group_name: CollectionObjectName,
    *,
    number_of_evenly_spaced_points: int = 10,
    resultant_point_name_prefix: str = "",
) -> None: ...

async def construct_points_on_curves_using_max_chordal_deviation(
    self,
    b_spline_list: Iterable[CollectionObjectName],
    resultant_group_name: CollectionObjectName,
    *,
    maximum_chordal_deviation: float = 0.05,
    maximum_trim_edge_angle: float = 15.0,
    maximum_chord_length: float = 0.0,
    resultant_point_name_prefix: str = "",
) -> None: ...
```

`None` edge offset means the zero vector. Mesh projection returns SA's
resultant Point Name list.

## Surface, Layout, and Group Workflows

```python
async def construct_points_on_object_vertices(
    self,
    object_name_list: Iterable[CollectionObjectName],
    resultant_group_name: CollectionObjectName,
) -> None: ...

async def construct_points_on_surfaces_by_clicking(
    self,
    group_name_for_points: CollectionObjectName,
    *,
    first_point_name: str = "p0",
) -> None: ...

async def construct_points_from_surface_faces_runtime_select(self) -> None: ...

async def construct_points_from_surfaces_on_uv_grid(
    self,
    surface_list: Iterable[CollectionObjectName],
    *,
    uv_point_group_base_name: str = "UV Points",
    make_each_line_separate_group: bool = False,
    number_of_u_grids: int = 5,
    number_of_v_grids: int = 5,
    edge_point_mode: EdgePointMode = EdgePointMode.INCLUDE_EDGES,
) -> None: ...

async def construct_point_at_object_origin(
    self,
    object_name: CollectionObjectName,
    resultant_point_name: PointName,
) -> ObjectOriginResult: ...

async def construct_points_shifted_in_working_frame(
    self,
    original_points: Iterable[PointName],
    group_for_new_points: CollectionObjectName,
    *,
    shift_vector: Vector | None = None,
) -> None: ...

async def construct_points_cylindrically_shifted(
    self,
    reference_object_name: CollectionObjectName,
    original_points: Iterable[PointName],
    group_for_new_points: CollectionObjectName,
    *,
    radial_shift: float = 0.0,
    theta_shift_degrees: float = 0.0,
    planar_shift: float = 0.0,
) -> None: ...

async def construct_points_wildcard_selection(
    self,
    groups_to_select_from: Iterable[CollectionObjectName],
    wildcard_selection_names: PointName,
    group_for_new_points: CollectionObjectName,
    *,
    include_prior_complete_name: bool = False,
) -> None: ...

async def construct_points_subset_with_greatest_spacing(
    self,
    points_to_subsample: Iterable[PointName],
    *,
    subset_size: int = 10,
    group_for_subset: CollectionObjectName | None = None,
) -> None: ...

async def construct_points_layout_on_grid(
    self,
    group_name: CollectionObjectName,
    *,
    point_prefix: str = "p",
    x_min: float = 0.0,
    x_max: float = 100.0,
    x_count: int = 10,
    y_min: float = 0.0,
    y_max: float = 50.0,
    y_count: int = 10,
    z_min: float = 0.0,
    z_max: float = 0.0,
    z_count: int = 1,
) -> None: ...

async def construct_points_auto_correspond_two_groups_proximity(
    self,
    reference_group: CollectionObjectName,
    group_to_be_copied: CollectionObjectName,
    group_to_contain_matched_points: CollectionObjectName,
    *,
    same_point_tolerance: float = 0.25,
) -> None: ...

async def construct_points_auto_correspond_two_groups_inter_point_distance(
    self,
    reference_group: CollectionObjectName,
    group_to_be_copied: CollectionObjectName,
    group_to_contain_matched_points: CollectionObjectName,
    *,
    same_point_tolerance: float = 0.1,
) -> None: ...

async def average_set_of_groups(
    self,
    group_names: Iterable[CollectionObjectName],
    resulting_group_name: CollectionObjectName,
    *,
    rms_tolerance: float = 0.0,
    maximum_absolute_tolerance: float = 0.0,
    maximum_average_tolerance: float = 0.0,
) -> GroupAverageResult: ...

async def copy_groups_excluding_obscured_points(
    self,
    instrument_id: CollectionInstrumentId,
    group_names: Iterable[CollectionObjectName],
    new_collection_name: CollectionName,
) -> None: ...
```

An omitted subset group uses `Spaced Points`; an omitted shift is the zero
vector. Layout creates `PointGrid`. Tolerance failure while averaging may still
return the three statistics as partial success. Surface-selection methods are
operator-interactive.

## Point-Name Queries

```python
async def make_point_name_runtime_select(
    self, *, user_prompt: str = ""
) -> PointName: ...

async def make_point_name_ensure_unique(
    self,
    point_name: PointName,
    *,
    use_number_suffix: bool = False,
) -> PointName: ...

async def make_point_name_ref_list_from_group(
    self, group_name: CollectionObjectName
) -> list[PointName]: ...

async def make_point_name_ref_list_runtime_select(
    self, *, user_prompt: str = ""
) -> list[PointName]: ...

async def make_point_name_ref_list_wildcard_select(
    self,
    *,
    collection_wildcard_criteria: str = "*",
    group_name_wildcard_criteria: str = "*",
    point_name_wildcard_criteria: str = "*",
) -> list[PointName]: ...
```

These calls query or interact with live SA state. Portable Point Name creation
and list append/subtraction use ordinary Python values and have no RPC.

## Hidden Point Bar

```python
async def clear_hidden_point_bar_database(self) -> None: ...

async def create_hidden_point_rod(
    self,
    hidden_point_rod_name: str,
    *,
    target_to_target_distance: float = 0.0,
    target_to_tip_distance: float = 0.0,
    inter_point_tolerance: float = 0.0,
) -> int: ...

async def get_hidden_point_rod_index_by_name(
    self, hidden_point_rod_name: str
) -> int: ...

async def delete_hidden_point_rod(
    self, *, hidden_point_rod_index: int = 0
) -> None: ...

async def create_hidden_point(
    self,
    end_a_point_name: PointName,
    end_b_point_name: PointName,
    point_name_to_create: PointName,
    *,
    hidden_point_rod_index: int = 0,
    overwrite_existing_point: bool = False,
) -> None: ...
```

Clearing removes every current-job rod without confirmation. Rod indices are
unstable live SA state. Hidden-point tolerance failure may be partial success.

## Example

```python
result = await briosa.construction_operations.average_set_of_groups(
    groups,
    averaged_group,
    rms_tolerance=0.05,
)
print(result.rms_deviation)
```

Callers own state across calls. Cancellation of an interactive coroutine does
not prove the SpatialAnalyzer interaction stopped.

[Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups) · [gRPC](/api/grpc/0.5.1/construction-operations-points-and-groups)
