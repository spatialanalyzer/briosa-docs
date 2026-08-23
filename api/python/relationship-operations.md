---
title: Relationship Operations
description: Next Briosa Python APIs for supported Relationship Operations MP commands.
toc_max_heading_level: 2
---

# Relationship Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Wave B Root-Group Types

```python
class GeometryRelationshipPointEditMode(StrEnum):
    POINT_LIST = "Point List"
    POINT_GRAPH = "Point Graph"
    SUB_SAMPLER_SETTINGS = "Sub-Sampler Settings"

@dataclass(frozen=True, slots=True, kw_only=True)
class GeometryRelationshipOutlierFilterMetrics:
    first_pass_rms_error: float
    first_pass_maximum_error: float
    first_pass_minimum_error: float
    first_pass_average_error: float
    final_pass_rms_error: float
    final_pass_maximum_error: float
    final_pass_minimum_error: float
    final_pass_average_error: float
    total_input_point_count: int
    exclude_point_count: int

@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipWatchWindowUdpSettings:
    enabled: bool = False
    broadcast: bool = True
    ip_address: str = ""
    port: int = 10000

@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipWatchWindowTemplateOptions:
    linear_precision: int = 4
    angular_precision: int = 3
    font: Font = Font()
    text_color: Color = Color(red=0, green=0, blue=255)
    background_color: Color = Color(red=255, green=255, blue=255)
    highlight_color: Color = Color(red=255, green=0, blue=0)
    show_deviation_x_rx: bool = True
    show_deviation_y_ry: bool = True
    show_deviation_z_rz: bool = True
    show_deviation_magnitude: bool = True
    udp_network_transmit_settings: RelationshipWatchWindowUdpSettings = (
        RelationshipWatchWindowUdpSettings()
    )
    transparent_background: bool = False
    hide_units: bool = False
```

## Generate Geometry Relationship Summary

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary) · [gRPC contract](/api/grpc/relationship-operations#generate-geometry-relationship-summary)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_ref_list` | `Iterable[CollectionItemName]` | `Relationship Ref List` | Required |
| `summary_table_name` | `str` | `Summary Table Name` | `"Geometry Relationship Summary"` |

```python
async def generate_geometry_relationship_summary(
    self,
    relationship_ref_list: Iterable[CollectionItemName],
    *,
    summary_table_name: str = "Geometry Relationship Summary",
) -> None: ...
```

## Edit Geometry Relationship Point List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list) · [gRPC contract](/api/grpc/relationship-operations#edit-geometry-relationship-point-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `point_edit_mode` | `GeometryRelationshipPointEditMode` | `Point Edit Mode` | `POINT_LIST` |

```python
async def edit_geometry_relationship_point_list(
    self,
    relationship_name: CollectionObjectName,
    *,
    point_edit_mode: GeometryRelationshipPointEditMode = GeometryRelationshipPointEditMode.POINT_LIST,
) -> None: ...
```

This operation opens an SA dialog. Cancellation or timeout does not prove that
the interaction stopped.

## Filter Geometry Relationship Outlier Cloud Points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [gRPC contract](/api/grpc/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `sigma_threshold` | `float` | `Sigma Threshold` | `3.0` |
| `modify_existing_input_clouds` | `bool` | `Modify Existing Input Clouds` | `False` |

```python
async def filter_geometry_relationship_outlier_cloud_points(
    self,
    relationship_name: CollectionObjectName,
    *,
    sigma_threshold: float = 3.0,
    modify_existing_input_clouds: bool = False,
) -> GeometryRelationshipOutlierFilterMetrics: ...
```

The result preserves all eight error metrics and both point counts reported by
the exact MP command.

## Relationship Watch Window Template

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template) · [gRPC contract](/api/grpc/relationship-operations#relationship-watch-window-template)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `watch_window_template_name` | `CollectionObjectName \| None` | `Watch Window Template Name` | Exact empty `Relationship Template` identity |
| `options` | `RelationshipWatchWindowTemplateOptions \| None` | Remaining template settings | All exact MP defaults |

```python
async def relationship_watch_window_template(
    self,
    *,
    watch_window_template_name: CollectionObjectName | None = None,
    options: RelationshipWatchWindowTemplateOptions | None = None,
) -> None: ...
```

UDP transmission is disabled by default. The option value keeps every exact
font, color, precision, display, and UDP default available to callers.

## Make Point to Point Relationship

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-point-to-point-relationship)

```python
async def make_point_to_point_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_point_name: PointName,
    second_point_name: PointName,
    *,
    tolerance: ToleranceVectorOptions | None = None,
    constraint: ToleranceVectorOptions | None = None,
) -> None: ...
```

Omitted option values use the distinct exact MP tolerance and constraint
defaults. Briosa adds no point or constraint preflight.

## Make Frame to Frame Relationship

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[MP command](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-frame-to-frame-relationship)

```python
async def make_frame_to_frame_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_frame_name: CollectionObjectName,
    second_frame_name: CollectionObjectName,
    *,
    orientation_tolerance: ToleranceScalarOptions | None = None,
    position_tolerance: ToleranceVectorOptions | None = None,
) -> None: ...
```

Omitted tolerances use the exact all-limits-disabled zero defaults. None of
these methods retains Relationship state or automatically replays uncertain
work.

## Enable/Disable Relationships for Optimization

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Enable/Disable Relationships for Optimization](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) · [gRPC contract](/api/grpc/relationship-operations#enabledisable-relationships-for-optimization)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `Iterable[CollectionItemName]` | `Relationships` | Required |
| `enable` | `bool` | `Enable?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def enable_disable_relationships_for_optimization(
    self,
    relationships: Iterable[CollectionItemName],
    *,
    enable: bool = False,
) -> None: ...
```

```python
await briosa.enable_disable_relationships_for_optimization(relationships=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Dynamic Relationship Types

```python
class DynamicPointMode(StrEnum):
    INTERSECTION_LINE_AND_PLANE = "Intersection of Line and Plane"
    INTERSECTION_CYLINDER_AND_PLANE = "Intersection of Cylinder and Plane"
    INTERSECTION_CONE_AND_PLANE = "Intersection of Cone and Plane"
    INTERSECTION_THREE_PLANES = "Intersection of Three Planes"
    MID_POINT_PERPENDICULAR_TO_TWO_LINES = "Mid-Point of Perpendicular to Two Lines"

class DynamicLineMode(StrEnum):
    CONE_AXIS = "Cone Axis"
    CYLINDER_AXIS = "Cylinder Axis"
    INTERSECTION_OF_TWO_PLANES = "Intersection of Two Planes"
    BISECT_TWO_LINES = "Bisect Two Lines"
    SLOT_CENTERLINE_ALONG_LENGTH = "Slot Centerline Along Length"

class DynamicPlaneMode(StrEnum):
    BISECT_TWO_PLANES = "Bisect Two Planes"
    TWO_CONES_HOLD_NORMAL_TO_BEST_FIT_PLANE = "Two Cones Intersection - Hold Normal to Best-Fit Plane"
    TWO_CONES_HOLD_NORMAL_TO_FIRST_CONE_AXIS = "Two Cones Intersection - Hold Normal to First Cone Axis"
    TWO_CONES_HOLD_NORMAL_TO_SECOND_CONE_AXIS = "Two Cones Intersection - Hold Normal to Second Cone Axis"
    CONE_AND_CYLINDER_HOLD_NORMAL_TO_BEST_FIT_PLANE = "Cone and Cylinder Intersection - Hold Normal to Best-Fit Plane"
    CONE_AND_CYLINDER_HOLD_NORMAL_TO_CONE_AXIS = "Cone and Cylinder Intersection - Hold Normal to Cone Axis"
    CONE_AND_CYLINDER_HOLD_NORMAL_TO_CYLINDER_AXIS = "Cone and Cylinder Intersection - Hold Normal to Cylinder Axis"
    OFFSET_PLANE_FROM_PLANE = "Offset Plane From Plane"

class DynamicCircleMode(StrEnum):
    CYLINDER_AND_PLANE_HOLD_PLANE_NORMAL = "Cylinder and Plane Intersection - Hold Plane Normal"
    CYLINDER_AND_PLANE_HOLD_CYLINDER_AXIS = "Cylinder and Plane Intersection - Hold Cylinder Axis"
    CONE_AND_PLANE_HOLD_PLANE_NORMAL = "Cone and Plane Intersection - Hold Plane Normal"
    CONE_AND_PLANE_HOLD_CONE_AXIS = "Cone and Plane Intersection - Hold Cone Axis"
    SPHERE_AND_PLANE_INTERSECTION = "Sphere and Plane Intersection"
    TWO_CONES_INTERSECTION = "Two Cones Intersection"
    CONE_AND_CYLINDER_INTERSECTION = "Cone and Cylinder Intersection"

class DynamicEllipseMode(StrEnum):
    CYLINDER_AND_PLANE_INTERSECTION = "Cylinder and Plane Intersection"
    CONE_AND_PLANE_INTERSECTION = "Cone and Plane Intersection"
```

The Python value uses a correctly spelled first-cone-axis label; the client and
server map it to SA's exact misspelled SDK literal.

## Make Points to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-points-to-objects-relationship)

```python
async def make_points_to_objects_relationship(
    self,
    relationship_name: CollectionObjectName,
    points_in_relationship: Iterable[PointName],
    objects_in_relationship: Iterable[CollectionObjectName],
    *,
    projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
    auto_update_a_vector_group: bool = False,
) -> None: ...
```

The projection default is `Object To Probe Vectors` with every projection
control disabled.

## Make Points to Points Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-points-to-points-relationship)

```python
async def make_points_to_points_relationship(
    self,
    relationship_name: CollectionObjectName,
    nominal_points: Iterable[PointName],
    measured_points: Iterable[PointName],
    *,
    auto_update_a_vector_group: bool = False,
    tolerance: ToleranceVectorOptions | None = None,
    constraint: ToleranceVectorOptions | None = None,
) -> None: ...
```

Omitted tolerance and constraint values use their distinct exact MP defaults.

## Make Groups to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-groups-to-objects-relationship)

```python
async def make_groups_to_objects_relationship(
    self,
    relationship_name: CollectionObjectName,
    point_groups_in_relationship: Iterable[CollectionObjectName],
    objects_in_relationship: Iterable[CollectionObjectName],
    *,
    projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
    auto_update_a_vector_group: bool = False,
) -> None: ...
```

## Make Object to Object Direction Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-object-to-object-direction-relationship)

```python
async def make_object_to_object_direction_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_object_in_relationship: CollectionObjectName,
    second_object_in_relationship: CollectionObjectName,
    *,
    nominal_angle: float = 0.0,
) -> None: ...
```

## Make Point Clouds to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-point-clouds-to-objects-relationship)

```python
async def make_point_clouds_to_objects_relationship(
    self,
    relationship_name: CollectionObjectName,
    point_clouds_in_relationship: Iterable[CollectionObjectName],
    objects_in_relationship: Iterable[CollectionObjectName],
    *,
    projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
    auto_update_a_vector_group: bool = False,
) -> None: ...
```

## Make Group to Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-group-to-group-relationship)

```python
async def make_group_to_group_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_group_name: CollectionObjectName,
    second_group_name: CollectionObjectName,
    *,
    auto_update_a_vector_group: bool = False,
    tolerance: ToleranceVectorOptions | None = None,
    constraint: ToleranceVectorOptions | None = None,
) -> None: ...
```

## Make Group to Nominal Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-group-to-nominal-group-relationship)

```python
async def make_group_to_nominal_group_relationship(
    self,
    relationship_name: CollectionObjectName,
    nominal_group_name: CollectionObjectName,
    measured_group_name: CollectionObjectName,
    *,
    auto_update_a_vector_group: bool = False,
    use_closest_point: bool = True,
    display_closest_point_watch_window: bool = False,
    use_view_zooming_with_proximity: bool = False,
    ignore_points_beyond_threshold: bool = False,
    proximity_threshold: float = 0.01,
    tolerance: ToleranceVectorOptions | None = None,
    constraint: ToleranceVectorOptions | None = None,
    fit_weight: float = 1.0,
) -> None: ...
```

The defaults preserve closest-point matching without opening a watch window or
changing view zoom.

## Make Average Point Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-average-point-relationship)

```python
async def make_average_point_relationship(
    self,
    relationship_name: CollectionObjectName,
    points_in_relationship: Iterable[PointName],
    *,
    average_point_name: PointName | None = None,
    nominal_point_name: PointName | None = None,
) -> None: ...
```

## Make Geometry Fit Only Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-geometry-fit-only-relationship)

```python
async def make_geometry_fit_only_relationship(
    self,
    relationship_name: CollectionObjectName,
    point_groups_to_fit: Iterable[CollectionObjectName],
    geometry_type: GeometryType,
    *,
    resulting_object_name: CollectionObjectName | None = None,
    fit_profile_name: str | None = None,
) -> None: ...
```

## Make Geometry Fit and Compare to Nominal Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

```python
async def make_geometry_fit_and_compare_to_nominal_relationship(
    self,
    relationship_name: CollectionObjectName,
    nominal_geometry: CollectionObjectName,
    point_groups_to_fit: Iterable[CollectionObjectName],
    *,
    resulting_object_name: CollectionObjectName | None = None,
    fit_profile_name: str | None = None,
) -> None: ...
```

The client preserves MP partial success through Briosa's execution outcome.
These coroutines retain no Relationship state and never replay uncertain work.

## Relationship Fit and Statistics Types

```python
class SolverMode(StrEnum):
    GAUSS_NEWTON = "Gauss-Newton"
    LEVENBERG_MARQUARDT = "Levenberg-Marquardt"
    GAUSS_NEWTON_WITH_GRADIENT_SEARCH = "Gauss-Newton /w Gradient Search"
    DIRECT_SEARCH = "Direct Search"

@dataclass(frozen=True, slots=True, kw_only=True)
class FitDofOptions:
    allow_x: bool = True
    allow_y: bool = True
    allow_z: bool = True
    allow_rx: bool = True
    allow_ry: bool = True
    allow_rz: bool = True
    rotate_about_centroid: bool = True

@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipFitResult:
    transform_in_reference: Transform
    transform_in_working: WorldTransform
    transform_in_world: WorldTransform
    fit_objective_value: float

@dataclass(frozen=True, slots=True, kw_only=True)
class GeneralRelationshipStatistics:
    absolute_max_deviation: float
    rms: float
    has_signed_deviation: bool
    signed_max_deviation: float
    signed_min_deviation: float

@dataclass(frozen=True, slots=True, kw_only=True)
class PointsToObjectsRelationshipStatistics:
    absolute_max_deviation: float
    max_deviation: float
    min_deviation: float
    avg_deviation: float
    rms: float
    candidate_point_count: int
    sampled_point_count: int
    rejected_point_count: int
    used_point_count: int
    out_of_tolerance_point_count: int

@dataclass(frozen=True, slots=True, kw_only=True)
class PointToPointRelationshipStatistics:
    delta_x: float
    delta_y: float
    delta_z: float
    delta_magnitude: float
    reference_frame: CollectionObjectName
```

`WorldTransform` preserves the scale returned with each working/world matrix.

## Make Geometry Compare Only Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-geometry-compare-only-relationship)

```python
async def make_geometry_compare_only_relationship(
    self,
    relationship_name: CollectionObjectName,
    nominal_geometry: CollectionObjectName,
    measured_geometry: CollectionObjectName,
) -> None: ...
```

## Make Dynamic Point Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-point-relationship)

```python
async def make_dynamic_point_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_reference_geometry: CollectionObjectName,
    second_reference_geometry: CollectionObjectName,
    *,
    construction_mode: DynamicPointMode = DynamicPointMode.INTERSECTION_LINE_AND_PLANE,
    third_reference_geometry: CollectionObjectName | None = None,
) -> None: ...
```

The third reference is optional unless the selected construction mode needs it.

## Make Dynamic Line Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-line-relationship)

```python
async def make_dynamic_line_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_reference_geometry: CollectionObjectName,
    second_reference_geometry: CollectionObjectName,
    *,
    construction_mode: DynamicLineMode = DynamicLineMode.INTERSECTION_OF_TWO_PLANES,
) -> None: ...
```

## Make Dynamic Plane Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-plane-relationship)

```python
async def make_dynamic_plane_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_reference_geometry: CollectionObjectName,
    second_reference_geometry: CollectionObjectName,
    *,
    construction_mode: DynamicPlaneMode = DynamicPlaneMode.BISECT_TWO_PLANES,
    offset_plane_offset: float = 0.0,
) -> None: ...
```

## Make Dynamic Circle Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-circle-relationship)

```python
async def make_dynamic_circle_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_reference_geometry: CollectionObjectName,
    second_reference_geometry: CollectionObjectName,
    *,
    construction_mode: DynamicCircleMode = DynamicCircleMode.CYLINDER_AND_PLANE_HOLD_PLANE_NORMAL,
) -> None: ...
```

## Make Dynamic Ellipse Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-dynamic-ellipse-relationship)

```python
async def make_dynamic_ellipse_relationship(
    self,
    relationship_name: CollectionObjectName,
    first_reference_geometry: CollectionObjectName,
    second_reference_geometry: CollectionObjectName,
    *,
    construction_mode: DynamicEllipseMode = DynamicEllipseMode.CYLINDER_AND_PLANE_INTERSECTION,
) -> None: ...
```

## Make Vector Group To Vector Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-vector-group-to-vector-group-relationship)

```python
async def make_vector_group_to_vector_group_relationship(
    self,
    new_vg_to_vg_relationship: CollectionObjectName,
    reference_vector_group: CollectionObjectName,
    corresponding_vector_group: CollectionObjectName,
    *,
    set_opposing_vector_group_polarity: bool = True,
) -> None: ...
```

## Set Vector Group To Vector Group Cylindrical Zone

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [gRPC contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

```python
async def set_vector_group_to_vector_group_cylindrical_zone(
    self,
    vg_to_vg_relationship: CollectionObjectName,
    *,
    radial_offset: float = 1.0,
    minimum_axial_offset: float = -10.0,
    maximum_axial_offset: float = 10.0,
) -> None: ...
```

## Set Vector Group To Vector Group Fit Weights

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [gRPC contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-weights)

```python
async def set_vector_group_to_vector_group_fit_weights(
    self,
    vg_to_vg_relationship: CollectionObjectName,
    *,
    minimum_gap: float = 0.0,
    minimum_gap_fit_weight: float = 10.0,
    maximum_gap: float = 0.0,
    maximum_gap_fit_weight: float = 10.0,
    nominal_gap: float = 0.0,
    nominal_gap_fit_weight: float = 1.0,
) -> None: ...
```

## Set Vector Group To Vector Group Fit Gradient Factor

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [gRPC contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

```python
async def set_vector_group_to_vector_group_fit_gradient_factor(
    self,
    vg_to_vg_relationship: CollectionObjectName,
    *,
    fit_gradient_factor: float = 50.0,
) -> None: ...
```

These coroutines retain no Relationship state and never replay uncertain work.

## Set Vector Group To Vector Group Relative Polarity

```python
async def set_vector_group_to_vector_group_relative_polarity(
    self,
    vg_to_vg_relationship: CollectionObjectName,
    *,
    set_opposing_vector_group_polarity: bool = True,
) -> None: ...
```

## Delete Relationship

```python
async def delete_relationship(
    self,
    relationship_name: CollectionObjectName,
) -> None: ...
```

The client adds no confirmation prompt.

## Set Optimization Search Options

```python
async def set_optimization_search_options(
    self,
    *,
    max_number_of_step_size_reduction: int = 5,
) -> None: ...
```

## Set Optimization Perturbation Parameters

```python
async def set_optimization_perturbation_parameters(
    self,
    *,
    length_perturbation: float = 0.0001,
    angular_perturbation: float = 0.0001,
    damping: float = 1.0,
) -> None: ...
```

## Do Relationship Fit

[MP command](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) · [gRPC contract](/api/grpc/relationship-operations#do-relationship-fit)

```python
async def do_relationship_fit(
    self,
    collection_containing_relationships: str,
    objects_to_move: Iterable[CollectionObjectName],
    instruments_to_move: Iterable[CollectionInstrumentId],
    *,
    solver_mode: SolverMode = SolverMode.GAUSS_NEWTON,
    motion_to_allow: FitDofOptions | None = None,
    enable_randomized_start: bool = False,
    use_fit_dialog: bool = False,
) -> RelationshipFitResult: ...
```

Pass an empty iterable for either move category that is not used. `None` motion
options allow every degree of freedom about the centroid.

## Move Collections by Minimizing Relationships

```python
async def move_collections_by_minimizing_relationships(
    self,
    collections_to_move: Iterable[str],
    relationships_to_minimize: Iterable[CollectionObjectName],
    *,
    solver_mode: SolverMode = SolverMode.GAUSS_NEWTON,
    motion_to_allow: FitDofOptions | None = None,
    use_fit_dialog: bool = False,
    convergence_threshold: float = 0.0,
) -> None: ...
```

## Get General Relationship Statistics

```python
async def get_general_relationship_statistics(
    self,
    relationship_name: CollectionObjectName,
) -> GeneralRelationshipStatistics: ...
```

## Get Points to Objects Relationship Statistics

```python
async def get_points_to_objects_relationship_statistics(
    self,
    relationship_name: CollectionObjectName,
) -> PointsToObjectsRelationshipStatistics: ...
```

The result includes SA 2026.1's `avg_deviation` output.

## Start/Stop Relationship Trapping

```python
async def start_stop_relationship_trapping(
    self,
    relationship_name: CollectionObjectName,
    instrument_id: CollectionInstrumentId,
    *,
    start_trapping: bool = False,
) -> None: ...
```

## Get Point to Point Relationship Statistics

```python
async def get_point_to_point_relationship_statistics(
    self,
    relationship_name: CollectionObjectName,
) -> PointToPointRelationshipStatistics: ...
```

These coroutines retain no Relationship or optimizer state and never replay
uncertain work.

## Associated-Data and Auto-Filter Types

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FilterProximitySettings:
    surface_inclusion_proximity: float = 0.1
    edge_exclusion_proximity: float = 0.1
    planar_inclusion_proximity: float = 0.5
    planar_exclusion_proximity: float = 0.1
    radial_inclusion_proximity: float = 0.1
    geometry_extraction_tolerance: float = 0.01
    surface_proximity_mode: OffsetDirectionType = OffsetDirectionType.BOTH
    planar_proximity_mode: OffsetDirectionType = OffsetDirectionType.BOTH
    radial_proximity_mode: OffsetDirectionType = OffsetDirectionType.BOTH
    project_to_plane: bool = True
    assert_plane_boundaries: bool = False

@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipAssociatedData:
    relationship_type: str
    individual_points: tuple[PointName, ...]
    point_groups: tuple[CollectionObjectName, ...]
    point_clouds: tuple[CollectionObjectName, ...]
    objects: tuple[CollectionObjectName, ...]

@dataclass(frozen=True, slots=True, kw_only=True)
class PointsToPointsRelationshipAssociatedData:
    nominal_points: tuple[PointName, ...]
    actual_points: tuple[PointName, ...]
```

`FilterProximitySettings()` replaces the excluded MP-only value-construction
helper. `CloudThinningOptions` is the shared value documented with Construction
Operations / Point Clouds.

## Set Group To Nominal Group View Zooming

[MP command](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming) · [gRPC contract](/api/grpc/relationship-operations#set-group-to-nominal-group-view-zooming)

```python
async def set_group_to_nominal_group_view_zooming(
    self,
    relationship_name: CollectionObjectName,
    *,
    use_closest_point: bool = True,
    show_closest_point_watch_window: bool = False,
    use_view_zooming: bool = True,
    ignore_points_beyond_threshold: bool = True,
    proximity_threshold: float = 0.01,
) -> None: ...
```

## Set Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-associated-data)

```python
async def set_relationship_associated_data(
    self,
    relationship_name: CollectionObjectName,
    *,
    individual_points: Iterable[PointName] | None = None,
    point_groups: Iterable[CollectionObjectName] | None = None,
    point_clouds: Iterable[CollectionObjectName] | None = None,
    objects: Iterable[CollectionObjectName] | None = None,
    ignore_empty_arguments: bool = True,
) -> None: ...
```

`None` omits that exact SDK setter; an empty iterable remains a supplied list.

## Get Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-associated-data)

```python
async def get_relationship_associated_data(
    self,
    relationship_name: CollectionObjectName,
) -> RelationshipAssociatedData: ...
```

## Set Points to Points Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data) · [gRPC contract](/api/grpc/relationship-operations#set-points-to-points-relationship-associated-data)

```python
async def set_points_to_points_relationship_associated_data(
    self,
    relationship_name: CollectionObjectName,
    *,
    nominal_points: Iterable[PointName] | None = None,
    actual_points: Iterable[PointName] | None = None,
    ignore_empty_arguments: bool = True,
) -> None: ...
```

## Get Points to Points Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data) · [gRPC contract](/api/grpc/relationship-operations#get-points-to-points-relationship-associated-data)

```python
async def get_points_to_points_relationship_associated_data(
    self,
    relationship_name: CollectionObjectName,
) -> PointsToPointsRelationshipAssociatedData: ...
```

## Auto Filter Clouds to Nominal Geometry 3D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [gRPC contract](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

```python
async def auto_filter_clouds_to_nominal_geometry_3d(
    self,
    auto_filter_target_relationships: Iterable[CollectionObjectName],
    clouds: Iterable[CollectionObjectName],
    *,
    cloud_thinning_settings: CloudThinningOptions | None = None,
    filter_proximity_settings_3d: FilterProximitySettings | None = None,
    use_feature_specific_filter_settings: bool = False,
) -> None: ...
```

## Auto Filter Clouds to Nominal Geometry 2D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [gRPC contract](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

```python
async def auto_filter_clouds_to_nominal_geometry_2d(
    self,
    auto_filter_target_relationships: Iterable[CollectionObjectName],
    clouds: Iterable[CollectionObjectName],
    *,
    cloud_thinning_settings: CloudThinningOptions | None = None,
    filter_proximity_settings_2d: FilterProximitySettings | None = None,
    geometry_extraction_tolerance: float = 0.01,
    use_feature_specific_filter_settings: bool = False,
) -> None: ...
```

The feature-specific flag comes from the exact SA 2026.1 command and defaults
to `False`.

## Auto Filter Points to Nominal Geometry 3D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [gRPC contract](/api/grpc/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

```python
async def auto_filter_points_to_nominal_geometry_3d(
    self,
    auto_filter_target_relationships: Iterable[CollectionObjectName],
    points: Iterable[PointName],
    *,
    filter_proximity_settings_3d: FilterProximitySettings | None = None,
) -> None: ...
```

## Auto Filter Points/Groups/Clouds to Surface Faces

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [gRPC contract](/api/grpc/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

```python
async def auto_filter_points_groups_clouds_to_surface_faces(
    self,
    surfaces: Iterable[CollectionObjectName],
    *,
    points: Iterable[PointName] | None = None,
    groups: Iterable[CollectionObjectName] | None = None,
    clouds: Iterable[CollectionObjectName] | None = None,
    surface_offset: float = 0.1,
    edge_offset: float = 0.1,
    offset_direction: OffsetDirectionType = OffsetDirectionType.BOTH,
    enforce_max_points_per_face_in_output: bool = False,
    max_points_per_face: int = 0,
    cloud_thinning_settings: CloudThinningOptions | None = None,
    output_cloud_base_name: str = "InspAutoFilteredCloud",
    use_face_ids_for_suffix: bool = True,
) -> None: ...
```

The client retains no filter or Relationship state, performs no SA preflight,
and never automatically replays uncertain work.

## Extract Geometry From Point Clouds

[MP command](/mp-command-catalog/commands/relationship-operations#extract-geometry-from-point-clouds) · [gRPC contract](/api/grpc/relationship-operations#extract-geometry-from-point-clouds)

```python
async def extract_geometry_from_point_clouds(
    self,
    relationship_name: CollectionObjectName,
    cloud_name: CollectionObjectName,
    seed_points: Iterable[PointName],
    *,
    geometry_type: GeometryType = GeometryType.CIRCLE,
    bounding_points: Iterable[PointName] | None = None,
    tolerance: float = 0.1,
    reverse_normal: bool = False,
    planar_point_count: int = 1000,
) -> None: ...
```

This SA 2026.1 operation has no ObjectiveSA SA 2024.1 counterpart.

## Create Points to Objects Map

[MP command](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map) · [gRPC contract](/api/grpc/relationship-operations#create-points-to-objects-map)

```python
async def create_points_to_objects_map(
    self,
    points_to_objects_map_name: str,
    objects: Iterable[CollectionObjectName],
    *,
    points: Iterable[PointName] | None = None,
    groups: Iterable[CollectionObjectName] | None = None,
    proximity_tolerance: float = 0.0,
) -> None: ...
```

SA owns the named map; the client retains no local workflow state.

## Get Objects From Points to Objects Map (Point List)

[MP command](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [gRPC contract](/api/grpc/relationship-operations#get-objects-from-points-to-objects-map-point-list)

```python
async def get_objects_from_points_to_objects_map_point_list(
    self,
    points_to_objects_map_name: str,
    points: Iterable[PointName],
) -> tuple[CollectionObjectName, ...]: ...
```

The exact target uses a Point list rather than the older singular-Point form
described by the installed prose.

## Compute Geometry Relationship Uncertainties

[MP command](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties) · [gRPC contract](/api/grpc/relationship-operations#compute-geometry-relationship-uncertainties)

```python
async def compute_geometry_relationship_uncertainties(
    self,
    relationship_name: CollectionObjectName,
    *,
    display_results: bool = False,
) -> None: ...
```

SA may make the Relationship dormant after the computation.

## Make Cloud to Swatch Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-cloud-to-swatch-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-cloud-to-swatch-relationship)

```python
async def make_cloud_to_swatch_relationship(
    self,
    relationship_name: CollectionObjectName,
    input_cloud_name: CollectionObjectName,
    surface_face_list: str,
    reference_point: PointName,
    cardinal_point_group_name: CollectionObjectName,
    *,
    maximum_radial_offset: float = 0.125,
    minimum_axial_offset: float = -0.125,
    maximum_axial_offset: float = 0.125,
) -> None: ...
```

This exact-target operation has no ObjectiveSA implementation. These
coroutines do not preflight SA state or automatically replay uncertain work.

## Final Reconciled Subgroup Types

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class SigmoidalGapFitConstraints:
    use_sigmoidal_gap_constraints: bool
    minimum_gap_boundary: float
    minimum_gap_weight: float
    maximum_gap_boundary: float
    maximum_gap_weight: float
    nominal_gap: float
    nominal_gap_weight: float
    gradient_steepness_factor: float

@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipStatusFlags:
    dormant: bool
    success: bool
    measured: bool
    failed: bool
    unmeasured: bool
```

## Get Relationship Sigmoidal Gap Fit Constraints

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints)

```python
async def get_relationship_sigmoidal_gap_fit_constraints(
    self,
    relationship_name: CollectionObjectName,
) -> SigmoidalGapFitConstraints: ...
```

## Set Object to Object Direction Relationship Tolerances

[MP command](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [gRPC contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-tolerances)

```python
async def set_object_to_object_direction_relationship_tolerances(
    self,
    relationship_name: CollectionObjectName,
    *,
    angle_between_vectors_tolerances: ToleranceScalarOptions | None = None,
    mutual_perpendicular_length_tolerances: ToleranceScalarOptions | None = None,
) -> None: ...
```

Omitted tolerance values use the exact all-limits-disabled zero defaults.

## Get Geom Relationship Criteria Name List

[MP command](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-criteria-name-list)

```python
async def get_geom_relationship_criteria_name_list(
    self,
    relationship_name: CollectionObjectName,
    *,
    include_all_criteria: bool = False,
) -> tuple[str, ...]: ...
```

## Get Relationship Status

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-status) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-status)

```python
async def get_relationship_status(
    self,
    relationship_name: CollectionObjectName,
) -> RelationshipStatusFlags: ...
```

The result preserves all five raw SA flags. These coroutines retain no
Relationship state and never replay uncertain work.

## Geom Relationship Ignore Input Points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Geom Relationship Ignore Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC contract](/api/grpc/relationship-operations#geom-relationship-ignore-input-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def geom_relationship_ignore_input_points(
    self,
    relationship_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.geom_relationship_ignore_input_points(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Geom Relationship Reuse Ignored Input Points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Geom Relationship Reuse Ignored Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) · [gRPC contract](/api/grpc/relationship-operations#geom-relationship-reuse-ignored-input-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def geom_relationship_reuse_ignored_input_points(
    self,
    relationship_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.geom_relationship_reuse_ignored_input_points(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Auto Vectors

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Auto Vectors](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-auto-vectors)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `auto_vectors_nominal_avn_enabled` | `bool` | `Auto Vectors Nominal (AVN) - Enabled?` |
| `auto_vectors_nominal_avn_name` | `CollectionObjectName` | `Auto Vectors Nominal (AVN) - Name` |
| `auto_vectors_fit_avf_enabled` | `bool` | `Auto Vectors Fit (AVF) - Enabled?` |
| `auto_vectors_fit_avf_name` | `CollectionObjectName` | `Auto Vectors Fit (AVF) - Name` |
| `points_type` | `str` | `Points Type` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetGeomRelationshipAutoVectorsResult:
    auto_vectors_nominal_avn_enabled: bool
    auto_vectors_nominal_avn_name: CollectionObjectName
    auto_vectors_fit_avf_enabled: bool
    auto_vectors_fit_avf_name: CollectionObjectName
    points_type: str

async def get_geom_relationship_auto_vectors(
    self,
    relationship_name: CollectionObjectName,
) -> GetGeomRelationshipAutoVectorsResult: ...
```

```python
await briosa.get_geom_relationship_auto_vectors(relationship_name=...)
```

Returns the 5 MP outputs in the named `GetGeomRelationshipAutoVectorsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Cardinal Points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-cardinal-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `cardinal_point_name_list` | `list[PointName]` | `Cardinal Point Name List` |

```python
async def get_geom_relationship_cardinal_points(
    self,
    relationship_name: CollectionObjectName,
) -> list[PointName]: ...
```

```python
await briosa.get_geom_relationship_cardinal_points(relationship_name=...)
```

Returns the MP output `Cardinal Point Name List` directly as `list[PointName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Criteria

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-criteria)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `criteria` | `str` | `Criteria` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `nominal` | `float` | `Nominal` |
| `measured` | `float` | `Measured` |
| `delta` | `float` | `Delta` |
| `low_tolerance` | `float` | `Low Tolerance` |
| `high_tolerance` | `float` | `High Tolerance` |
| `optimization_delta_weight` | `float` | `Optimization: Delta Weight` |
| `optimization_out_of_tolerance_weight` | `float` | `Optimization: Out of Tolerance Weight` |
| `is_within_tolerance` | `str` | `Is within Tolerance?` |
| `has_uncertainty` | `bool` | `Has Uncertainty?` |
| `uncertainty` | `float` | `Uncertainty` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetGeomRelationshipCriteriaResult:
    nominal: float
    measured: float
    delta: float
    low_tolerance: float
    high_tolerance: float
    optimization_delta_weight: float
    optimization_out_of_tolerance_weight: float
    is_within_tolerance: str
    has_uncertainty: bool
    uncertainty: float

async def get_geom_relationship_criteria(
    self,
    relationship_name: CollectionObjectName,
    *,
    criteria: str = '',
) -> GetGeomRelationshipCriteriaResult: ...
```

```python
await briosa.get_geom_relationship_criteria(relationship_name=...)
```

Returns the 10 MP outputs in the named `GetGeomRelationshipCriteriaResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Measured Avg Point

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Measured Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-measured-avg-point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `measured_average_point` | `PointName` | `Measured Average Point` |

```python
async def get_geom_relationship_measured_avg_point(
    self,
    relationship_name: CollectionObjectName,
) -> PointName: ...
```

```python
await briosa.get_geom_relationship_measured_avg_point(relationship_name=...)
```

Returns the MP output `Measured Average Point` directly as `PointName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Measured Geometry

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-measured-geometry)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `measured_geometry` | `CollectionObjectName` | `Measured Geometry` |

```python
async def get_geom_relationship_measured_geometry(
    self,
    relationship_name: CollectionObjectName,
) -> CollectionObjectName: ...
```

```python
await briosa.get_geom_relationship_measured_geometry(relationship_name=...)
```

Returns the MP output `Measured Geometry` directly as `CollectionObjectName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Nominal Avg Point

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-avg-point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `nominal_average_point` | `PointName` | `Nominal Average Point` |

```python
async def get_geom_relationship_nominal_avg_point(
    self,
    relationship_name: CollectionObjectName,
) -> PointName: ...
```

```python
await briosa.get_geom_relationship_nominal_avg_point(relationship_name=...)
```

Returns the MP output `Nominal Average Point` directly as `PointName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Nominal Geometry

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-geometry)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `nominal_geometry` | `CollectionObjectName` | `Nominal Geometry` |

```python
async def get_geom_relationship_nominal_geometry(
    self,
    relationship_name: CollectionObjectName,
) -> CollectionObjectName: ...
```

```python
await briosa.get_geom_relationship_nominal_geometry(relationship_name=...)
```

Returns the MP output `Nominal Geometry` directly as `CollectionObjectName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Point List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Point List](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-point-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `all_points` | `list[PointName]` | `All Points` |
| `used_points` | `list[PointName]` | `Used Points` |
| `ignored_points` | `list[PointName]` | `Ignored Points` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetGeomRelationshipPointListResult:
    all_points: list[PointName]
    used_points: list[PointName]
    ignored_points: list[PointName]

async def get_geom_relationship_point_list(
    self,
    relationship_name: CollectionObjectName,
) -> GetGeomRelationshipPointListResult: ...
```

```python
await briosa.get_geom_relationship_point_list(relationship_name=...)
```

Returns the 3 MP outputs in the named `GetGeomRelationshipPointListResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Geom Relationship Projection Plane

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-projection-plane)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `projection_plane_name` | `CollectionObjectName` | `Projection Plane Name` |

```python
async def get_geom_relationship_projection_plane(
    self,
    relationship_name: CollectionObjectName,
) -> CollectionObjectName: ...
```

```python
await briosa.get_geom_relationship_projection_plane(relationship_name=...)
```

Returns the MP output `Projection Plane Name` directly as `CollectionObjectName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Pipe Relationship Cut Status

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Pipe Relationship Cut Status](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-cut-status)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `pipe_1_cut_available` | `bool` | `Pipe 1 - Cut Available?` |
| `pipe_1_cut_active` | `bool` | `Pipe 1 - Cut Active?` |
| `pipe_2_cut_available` | `bool` | `Pipe 2 - Cut Available?` |
| `pipe_2_cut_active` | `bool` | `Pipe 2 - Cut Active?` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPipeRelationshipCutStatusResult:
    pipe_1_cut_available: bool
    pipe_1_cut_active: bool
    pipe_2_cut_available: bool
    pipe_2_cut_active: bool

async def get_pipe_relationship_cut_status(
    self,
    relationship_name: CollectionObjectName,
) -> GetPipeRelationshipCutStatusResult: ...
```

```python
await briosa.get_pipe_relationship_cut_status(relationship_name=...)
```

Returns the 4 MP outputs in the named `GetPipeRelationshipCutStatusResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Pipe Relationship Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Pipe Relationship Properties](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `pipe_1_object_name` | `CollectionObjectName` | `Pipe 1 - Object Name` |
| `pipe_1_inner_diameter` | `float` | `Pipe 1 - Inner Diameter` |
| `pipe_1_outer_diameter` | `float` | `Pipe 1 - Outer Diameter` |
| `pipe_1_cut_begin` | `float` | `Pipe 1 - Cut Begin` |
| `pipe_1_cut_end` | `float` | `Pipe 1 - Cut End` |
| `pipe_2_object_name` | `CollectionObjectName` | `Pipe 2 - Object Name` |
| `pipe_2_inner_diameter` | `float` | `Pipe 2 - Inner Diameter` |
| `pipe_2_outer_diameter` | `float` | `Pipe 2 - Outer Diameter` |
| `pipe_2_cut_begin` | `float` | `Pipe 2 - Cut Begin` |
| `pipe_2_cut_end` | `float` | `Pipe 2 - Cut End` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPipeRelationshipPropertiesResult:
    pipe_1_object_name: CollectionObjectName
    pipe_1_inner_diameter: float
    pipe_1_outer_diameter: float
    pipe_1_cut_begin: float
    pipe_1_cut_end: float
    pipe_2_object_name: CollectionObjectName
    pipe_2_inner_diameter: float
    pipe_2_outer_diameter: float
    pipe_2_cut_begin: float
    pipe_2_cut_end: float

async def get_pipe_relationship_properties(
    self,
    relationship_name: CollectionObjectName,
) -> GetPipeRelationshipPropertiesResult: ...
```

```python
await briosa.get_pipe_relationship_properties(relationship_name=...)
```

Returns the 10 MP outputs in the named `GetPipeRelationshipPropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Pipe Relationship Weights

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-weights)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `overall_weight` | `float` | `Overall Weight` |
| `axis_offset` | `float` | `Axis Offset` |
| `axis_alignment` | `float` | `Axis Alignment` |
| `center_pull` | `float` | `Center Pull` |
| `out_of_material_weight` | `float` | `Out of material - Weight` |
| `out_of_material_static_offset` | `float` | `Out of material - Static Offset` |
| `constrain_region_at_od` | `bool` | `Constrain Region at OD` |
| `constrain_id_od_overlap` | `bool` | `Constrain ID/OD overlap` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPipeRelationshipWeightsResult:
    overall_weight: float
    axis_offset: float
    axis_alignment: float
    center_pull: float
    out_of_material_weight: float
    out_of_material_static_offset: float
    constrain_region_at_od: bool
    constrain_id_od_overlap: bool

async def get_pipe_relationship_weights(
    self,
    relationship_name: CollectionObjectName,
) -> GetPipeRelationshipWeightsResult: ...
```

```python
await briosa.get_pipe_relationship_weights(relationship_name=...)
```

Returns the 8 MP outputs in the named `GetPipeRelationshipWeightsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Fit Constraints (Scalar Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-fit-constraints-scalar-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `use_high_tolerance` | `bool` | `Use High Tolerance?` |
| `high_tolerance` | `float` | `High Tolerance` |
| `use_low_tolerance` | `bool` | `Use Low Tolerance?` |
| `low_tolerance` | `float` | `Low Tolerance` |
| `fit_constraint_options` | `FitConstraintScalarOptions` | `Fit Constraint Options` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipFitConstraintsScalarTypeResult:
    use_high_tolerance: bool
    high_tolerance: float
    use_low_tolerance: bool
    low_tolerance: float
    fit_constraint_options: FitConstraintScalarOptions

async def get_relationship_fit_constraints_scalar_type(
    self,
    relationship_name: CollectionObjectName,
) -> GetRelationshipFitConstraintsScalarTypeResult: ...
```

```python
await briosa.get_relationship_fit_constraints_scalar_type(relationship_name=...)
```

Returns the 5 MP outputs in the named `GetRelationshipFitConstraintsScalarTypeResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Outlier Rejection (Scalar Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-outlier-rejection-scalar-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `use_high_limit` | `bool` | `Use High Limit?` |
| `high_limit` | `float` | `High Limit` |
| `use_low_limit` | `bool` | `Use Low Limit?` |
| `low_limit` | `float` | `Low Limit` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipOutlierRejectionScalarTypeResult:
    use_high_limit: bool
    high_limit: float
    use_low_limit: bool
    low_limit: float

async def get_relationship_outlier_rejection_scalar_type(
    self,
    relationship_name: CollectionObjectName,
) -> GetRelationshipOutlierRejectionScalarTypeResult: ...
```

```python
await briosa.get_relationship_outlier_rejection_scalar_type(relationship_name=...)
```

Returns the 4 MP outputs in the named `GetRelationshipOutlierRejectionScalarTypeResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Projection Options

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-projection-options)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `ignore_edge_projections` | `bool` | `Ignore Edge Projections?` |
| `probe_offsets_override_target_values` | `bool` | `Probe Offsets - Override Target Values?` |
| `probe_offsets_override_value` | `float` | `Probe Offsets - Override Value` |
| `add_extra_material` | `bool` | `Add Extra Material?` |
| `extra_material_thickness` | `float` | `Extra Material Thickness` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipProjectionOptionsResult:
    ignore_edge_projections: bool
    probe_offsets_override_target_values: bool
    probe_offsets_override_value: float
    add_extra_material: bool
    extra_material_thickness: float

async def get_relationship_projection_options(
    self,
    relationship_name: CollectionObjectName,
) -> GetRelationshipProjectionOptionsResult: ...
```

```python
await briosa.get_relationship_projection_options(relationship_name=...)
```

Returns the 5 MP outputs in the named `GetRelationshipProjectionOptionsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Reporting Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-reporting-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `reporting_frame` | `CollectionObjectName` | `Reporting Frame` |

```python
async def get_relationship_reporting_frame(
    self,
    relationship_name: CollectionObjectName,
) -> CollectionObjectName: ...
```

```python
await briosa.get_relationship_reporting_frame(relationship_name=...)
```

Returns the MP output `Reporting Frame` directly as `CollectionObjectName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Sub Sampling Options

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-sub-sampling-options)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `use_every_ith_point` | `bool` | `Use every i-th point` |
| `i_value` | `int` | `i value` |
| `use_no_more_than_n_points` | `bool` | `Use no more than n points` |
| `n_value` | `int` | `n value` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipSubSamplingOptionsResult:
    use_every_ith_point: bool
    i_value: int
    use_no_more_than_n_points: bool
    n_value: int

async def get_relationship_sub_sampling_options(
    self,
    relationship_name: CollectionObjectName,
) -> GetRelationshipSubSamplingOptionsResult: ...
```

```python
await briosa.get_relationship_sub_sampling_options(relationship_name=...)
```

Returns the 4 MP outputs in the named `GetRelationshipSubSamplingOptionsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Tolerance (Scalar Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-tolerance-scalar-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `use_high_tolerance` | `bool` | `Use High Tolerance?` |
| `high_tolerance` | `float` | `High Tolerance` |
| `use_low_tolerance` | `bool` | `Use Low Tolerance?` |
| `low_tolerance` | `float` | `Low Tolerance` |
| `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipToleranceScalarTypeResult:
    use_high_tolerance: bool
    high_tolerance: float
    use_low_tolerance: bool
    low_tolerance: float
    tolerance_options: ToleranceScalarOptions

async def get_relationship_tolerance_scalar_type(
    self,
    relationship_name: CollectionObjectName,
) -> GetRelationshipToleranceScalarTypeResult: ...
```

```python
await briosa.get_relationship_tolerance_scalar_type(relationship_name=...)
```

Returns the 5 MP outputs in the named `GetRelationshipToleranceScalarTypeResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Tolerance (Vector Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-tolerance-vector-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `use_high_x_tolerance` | `bool` | `Use High X Tolerance?` |
| `high_x_tolerance` | `float` | `High X Tolerance` |
| `use_high_y_tolerance` | `bool` | `Use High Y Tolerance?` |
| `high_y_tolerance` | `float` | `High Y Tolerance` |
| `use_high_z_tolerance` | `bool` | `Use High Z Tolerance?` |
| `high_z_tolerance` | `float` | `High Z Tolerance` |
| `use_high_mag_tolerance` | `bool` | `Use High Mag Tolerance?` |
| `high_mag_tolerance` | `float` | `High Mag Tolerance` |
| `use_low_x_tolerance` | `bool` | `Use Low X Tolerance?` |
| `low_x_tolerance` | `float` | `Low X Tolerance` |
| `use_low_y_tolerance` | `bool` | `Use Low Y Tolerance?` |
| `low_y_tolerance` | `float` | `Low Y Tolerance` |
| `use_low_z_tolerance` | `bool` | `Use Low Z Tolerance?` |
| `low_z_tolerance` | `float` | `Low Z Tolerance` |
| `use_low_mag_tolerance` | `bool` | `Use Low Mag Tolerance?` |
| `low_mag_tolerance` | `float` | `Low Mag Tolerance` |
| `vector_tolerance` | `ToleranceVectorOptions` | `Vector Tolerance` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipToleranceVectorTypeResult:
    use_high_x_tolerance: bool
    high_x_tolerance: float
    use_high_y_tolerance: bool
    high_y_tolerance: float
    use_high_z_tolerance: bool
    high_z_tolerance: float
    use_high_mag_tolerance: bool
    high_mag_tolerance: float
    use_low_x_tolerance: bool
    low_x_tolerance: float
    use_low_y_tolerance: bool
    low_y_tolerance: float
    use_low_z_tolerance: bool
    low_z_tolerance: float
    use_low_mag_tolerance: bool
    low_mag_tolerance: float
    vector_tolerance: ToleranceVectorOptions

async def get_relationship_tolerance_vector_type(
    self,
    relationship_name: CollectionObjectName,
) -> GetRelationshipToleranceVectorTypeResult: ...
```

```python
await briosa.get_relationship_tolerance_vector_type(relationship_name=...)
```

Returns the 17 MP outputs in the named `GetRelationshipToleranceVectorTypeResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Type

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Type](/mp-command-catalog/commands/relationship-operations#get-relationship-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `relationship_type` | `str` | `Relationship Type` |

```python
async def get_relationship_type(
    self,
    relationship_name: CollectionObjectName,
) -> str: ...
```

```python
await briosa.get_relationship_type(relationship_name=...)
```

Returns the MP output `Relationship Type` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Weighting

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Relationship Weighting](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-weighting)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `weight` | `float` | `Weight` |

```python
async def get_relationship_weighting(
    self,
    relationship_name: CollectionObjectName,
) -> float: ...
```

```python
await briosa.get_relationship_weighting(relationship_name=...)
```

Returns the MP output `Weight` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Pipe Fitting Relationship

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Pipe Fitting Relationship](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-pipe-fitting-relationship)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe_1_object_name` | `CollectionObjectName` | `Pipe 1 - Object Name` | Required |
| `pipe_2_object_name` | `CollectionObjectName` | `Pipe 2 - Object Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_pipe_fitting_relationship(
    self,
    relationship_name: CollectionObjectName,
    pipe_1_object_name: CollectionObjectName,
    pipe_2_object_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.make_pipe_fitting_relationship(relationship_name=..., pipe_1_object_name=..., pipe_2_object_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make pipe Relationship Cut

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make pipe Relationship Cut](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC contract](/api/grpc/relationship-operations#make-pipe-relationship-cut)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe_1_make_cut` | `bool` | `Pipe 1 - Make Cut` | true |
| `pipe_1_create_frame` | `bool` | `Pipe 1 - Create Frame` | false |
| `pipe_1_frame_name` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe_2_make_cut` | `bool` | `Pipe 2 - Make Cut` | true |
| `pipe_2_create_frame` | `bool` | `Pipe 2 - Create Frame` | false |
| `pipe_2_frame_name` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_pipe_relationship_cut(
    self,
    relationship_name: CollectionObjectName,
    *,
    pipe_1_make_cut: bool = True,
    pipe_1_create_frame: bool = False,
    pipe_1_frame_name: CollectionObjectName,
    pipe_2_make_cut: bool = True,
    pipe_2_create_frame: bool = False,
    pipe_2_frame_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.make_pipe_relationship_cut(relationship_name=..., pipe_1_frame_name=..., pipe_2_frame_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Pipe Relationship Force Cut to Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Pipe Relationship Force Cut to Frame](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) · [gRPC contract](/api/grpc/relationship-operations#pipe-relationship-force-cut-to-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe_1_force_cut_to_frame` | `bool` | `Pipe 1 - Force Cut to Frame?` | true |
| `pipe_1_frame_name` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe_2_force_cut_to_frame` | `bool` | `Pipe 2 - Force Cut to Frame?` | true |
| `pipe_2_frame_name` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def pipe_relationship_force_cut_to_frame(
    self,
    relationship_name: CollectionObjectName,
    *,
    pipe_1_force_cut_to_frame: bool = True,
    pipe_1_frame_name: CollectionObjectName,
    pipe_2_force_cut_to_frame: bool = True,
    pipe_2_frame_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.pipe_relationship_force_cut_to_frame(relationship_name=..., pipe_1_frame_name=..., pipe_2_frame_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geom Relationship Auto Measure Nominal Feature

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geom Relationship Auto Measure Nominal Feature](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-auto-measure-nominal-feature)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `trap_clouds_false_geometry` | `bool` | `Trap Clouds? (FALSE = Geometry)` | true |
| `instrument_id` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `measurement_mode` | `str` | `Measurement Mode` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geom_relationship_auto_measure_nominal_feature(
    self,
    relationship_name: CollectionObjectName,
    *,
    trap_clouds_false_geometry: bool = True,
    instrument_id: CollectionInstrumentId,
    measurement_mode: str = '',
) -> None: ...
```

```python
await briosa.set_geom_relationship_auto_measure_nominal_feature(relationship_name=..., instrument_id=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geom Relationship Auto Vectors Nominal (AVN)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geom Relationship Auto Vectors Nominal (AVN)](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `create_auto_vectors_avn` | `bool` | `Create Auto Vectors AVN` | false |
| `points_type` | `PointFilterInputType` | `Points Type` | Cardinal Points |
| `use_vector_group_custom_prefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| `vector_group_custom_prefix` | `str` | `Vector Group Custom Prefix` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geom_relationship_auto_vectors_nominal_avn(
    self,
    relationship_name: CollectionObjectName,
    *,
    create_auto_vectors_avn: bool = False,
    points_type: PointFilterInputType = PointFilterInputType.CARDINAL_POINTS,
    use_vector_group_custom_prefix: bool = False,
    vector_group_custom_prefix: str = '',
) -> None: ...
```

```python
await briosa.set_geom_relationship_auto_vectors_nominal_avn(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geom Relationship Cardinal Points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-cardinal-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `create_cardinal_pts_when_fitting` | `bool` | `Create Cardinal Pts when Fitting?` | true |
| `prefix_cardinal_pts_name_with_rel_name` | `bool` | `Prefix Cardinal Pts name with Rel name?` | true |
| `cardinal_pts_group_name` | `str` | `Cardinal Pts Group Name` | GR-Cardinal Pts |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geom_relationship_cardinal_points(
    self,
    relationship_name: CollectionObjectName,
    *,
    create_cardinal_pts_when_fitting: bool = True,
    prefix_cardinal_pts_name_with_rel_name: bool = True,
    cardinal_pts_group_name: str = "GR-Cardinal Pts",
) -> None: ...
```

```python
await briosa.set_geom_relationship_cardinal_points(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geom Relationship Criteria

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-criteria)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `criteria` | `str` | `Criteria` | Empty |
| `show_in_report` | `bool` | `Show in Report` | true |
| `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |
| `optimization_delta_weight` | `float` | `Optimization: Delta Weight` | 0.000000 |
| `optimization_out_of_tolerance_weight` | `float` | `Optimization: Out of Tolerance Weight` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geom_relationship_criteria(
    self,
    relationship_name: CollectionObjectName,
    *,
    criteria: str = '',
    show_in_report: bool = True,
    tolerance_options: ToleranceScalarOptions = ToleranceScalarOptions.DEFAULT,
    optimization_delta_weight: float = 0.000000,
    optimization_out_of_tolerance_weight: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_geom_relationship_criteria(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geom Relationship Measured Geometry

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-measured-geometry)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `measured_geometry` | `CollectionObjectName` | `Measured Geometry` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geom_relationship_measured_geometry(
    self,
    relationship_name: CollectionObjectName,
    measured_geometry: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_geom_relationship_measured_geometry(relationship_name=..., measured_geometry=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geom Relationship Nominal Avg Point

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-avg-point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `compare_to_nominal` | `bool` | `Compare To Nominal?` | true |
| `nominal_average_point` | `PointName` | `Nominal Average Point` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geom_relationship_nominal_avg_point(
    self,
    relationship_name: CollectionObjectName,
    *,
    compare_to_nominal: bool = True,
    nominal_average_point: PointName,
) -> None: ...
```

```python
await briosa.set_geom_relationship_nominal_avg_point(relationship_name=..., nominal_average_point=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geom Relationship Nominal Geometry

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-geometry)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `compare_to_nominal` | `bool` | `Compare To Nominal?` | true |
| `nominal_geometry` | `CollectionObjectName` | `Nominal Geometry` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geom_relationship_nominal_geometry(
    self,
    relationship_name: CollectionObjectName,
    *,
    compare_to_nominal: bool = True,
    nominal_geometry: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_geom_relationship_nominal_geometry(relationship_name=..., nominal_geometry=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geom Relationship Projection Plane

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-projection-plane)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `project_to_plane` | `bool` | `Project to Plane?` | true |
| `projection_plane_name` | `CollectionObjectName` | `Projection Plane Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geom_relationship_projection_plane(
    self,
    relationship_name: CollectionObjectName,
    *,
    project_to_plane: bool = True,
    projection_plane_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_geom_relationship_projection_plane(relationship_name=..., projection_plane_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Object to Object Direction Relationship Fit Constraints

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Object to Object Direction Relationship Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [gRPC contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `angle_between_vectors_fit_constraints` | `FitConstraintScalarOptions` | `Angle Between Vectors Fit Constraints` | Both limits disabled |
| `mutual_perpendicular_length_fit_constraints` | `FitConstraintScalarOptions` | `Mutual Perpendicular Length Fit Constraints` | Both limits disabled |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_object_to_object_direction_relationship_fit_constraints(
    self,
    relationship_name: CollectionObjectName,
    *,
    angle_between_vectors_fit_constraints: FitConstraintScalarOptions = FitConstraintScalarOptions.DEFAULT,
    mutual_perpendicular_length_fit_constraints: FitConstraintScalarOptions = FitConstraintScalarOptions.DEFAULT,
) -> None: ...
```

```python
await briosa.set_object_to_object_direction_relationship_fit_constraints(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Pipe Relationship Segment Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Pipe Relationship Segment Properties](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) · [gRPC contract](/api/grpc/relationship-operations#set-pipe-relationship-segment-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe_1_inner_diameter` | `float` | `Pipe 1 - Inner Diameter` | 0.000000 |
| `pipe_1_outer_diameter` | `float` | `Pipe 1 - Outer Diameter` | 0.000000 |
| `pipe_1_cut_begin` | `float` | `Pipe 1 - Cut Begin` | 0.000000 |
| `pipe_1_cut_end` | `float` | `Pipe 1 - Cut End` | 0.000000 |
| `pipe_2_inner_diameter` | `float` | `Pipe 2 - Inner Diameter` | 0.000000 |
| `pipe_2_outer_diameter` | `float` | `Pipe 2 - Outer Diameter` | 0.000000 |
| `pipe_2_cut_begin` | `float` | `Pipe 2 - Cut Begin` | 0.000000 |
| `pipe_2_cut_end` | `float` | `Pipe 2 - Cut End` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_pipe_relationship_segment_properties(
    self,
    relationship_name: CollectionObjectName,
    *,
    pipe_1_inner_diameter: float = 0.000000,
    pipe_1_outer_diameter: float = 0.000000,
    pipe_1_cut_begin: float = 0.000000,
    pipe_1_cut_end: float = 0.000000,
    pipe_2_inner_diameter: float = 0.000000,
    pipe_2_outer_diameter: float = 0.000000,
    pipe_2_cut_begin: float = 0.000000,
    pipe_2_cut_end: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_pipe_relationship_segment_properties(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Pipe Relationship Weights

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) · [gRPC contract](/api/grpc/relationship-operations#set-pipe-relationship-weights)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `overall_weight` | `float` | `Overall Weight` | 1.000000 |
| `axis_offset` | `float` | `Axis Offset` | 2.000000 |
| `axis_alignment` | `float` | `Axis Alignment` | 1.000000 |
| `center_pull` | `float` | `Center Pull` | 0.100000 |
| `out_of_material_weight` | `float` | `Out of material - Weight` | 10.000000 |
| `out_of_material_offset` | `float` | `Out of material - Offset` | 1.000000 |
| `constrain_region_at_od` | `bool` | `Constrain Region at OD` | false |
| `constrain_id_od_overlap` | `bool` | `Constrain ID/OD overlap` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_pipe_relationship_weights(
    self,
    relationship_name: CollectionObjectName,
    *,
    overall_weight: float = 1.000000,
    axis_offset: float = 2.000000,
    axis_alignment: float = 1.000000,
    center_pull: float = 0.100000,
    out_of_material_weight: float = 10.000000,
    out_of_material_offset: float = 1.000000,
    constrain_region_at_od: bool = False,
    constrain_id_od_overlap: bool = False,
) -> None: ...
```

```python
await briosa.set_pipe_relationship_weights(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Auto Vectors Fit (AVF)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Auto Vectors Fit (AVF)](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-fit-avf)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `create_auto_vectors_avf` | `bool` | `Create Auto Vectors AVF` | false |
| `use_vector_group_custom_prefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| `vector_group_custom_prefix` | `str` | `Vector Group Custom Prefix` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_auto_vectors_fit_avf(
    self,
    relationship_name: CollectionObjectName,
    *,
    create_auto_vectors_avf: bool = False,
    use_vector_group_custom_prefix: bool = False,
    vector_group_custom_prefix: str = '',
) -> None: ...
```

```python
await briosa.set_relationship_auto_vectors_fit_avf(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Auto Vectors Group Default Prefix

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Auto Vectors Group Default Prefix](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-group-default-prefix)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geom_rel_avn_vg_default_prefix` | `str` | `Geom Rel AVN VG Default Prefix` | GR-AVN- |
| `geom_rel_avf_vg_default_prefix` | `str` | `Geom Rel AVF VG Default Prefix` | GR-AVF- |
| `non_geom_rel_vg_default_prefix` | `str` | `Non-Geom Rel VG Default Prefix` | Auto Vectors:  |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_auto_vectors_group_default_prefix(
    self,
    *,
    geom_rel_avn_vg_default_prefix: str = "GR-AVN-",
    geom_rel_avf_vg_default_prefix: str = "GR-AVF-",
    non_geom_rel_vg_default_prefix: str = "Auto Vectors: ",
) -> None: ...
```

```python
await briosa.set_relationship_auto_vectors_group_default_prefix()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Desired Meas Count

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Desired Meas Count](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-desired-meas-count)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `desired_measurement_count` | `int` | `Desired Measurement Count` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_desired_meas_count(
    self,
    relationship_name: CollectionObjectName,
    *,
    desired_measurement_count: int = 0,
) -> None: ...
```

```python
await briosa.set_relationship_desired_meas_count(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Dormant Status

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Dormant Status](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-dormant-status)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `Iterable[CollectionItemName]` | `Relationships` | Required |
| `dormant_status` | `bool` | `Dormant Status` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_dormant_status(
    self,
    relationships: Iterable[CollectionItemName],
    *,
    dormant_status: bool = False,
) -> None: ...
```

```python
await briosa.set_relationship_dormant_status(relationships=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Fit Constraints (Scalar Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-fit-constraints-scalar-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `fit_constraint_options` | `FitConstraintScalarOptions` | `Fit Constraint Options` | Both limits disabled |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_fit_constraints_scalar_type(
    self,
    relationship_name: CollectionObjectName,
    *,
    fit_constraint_options: FitConstraintScalarOptions = FitConstraintScalarOptions.DEFAULT,
) -> None: ...
```

```python
await briosa.set_relationship_fit_constraints_scalar_type(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Orientation Fit Constraints (Vector Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Orientation Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `orientation_vector_constraint` | `ToleranceVectorOptions` | `Orientation Vector Constraint` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_orientation_fit_constraints_vector_type(
    self,
    relationship_name: CollectionObjectName,
    orientation_vector_constraint: ToleranceVectorOptions,
) -> None: ...
```

```python
await briosa.set_relationship_orientation_fit_constraints_vector_type(relationship_name=..., orientation_vector_constraint=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Outlier Rejection (Scalar Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-outlier-rejection-scalar-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_outlier_rejection_scalar_type(
    self,
    relationship_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_relationship_outlier_rejection_scalar_type(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Position Fit Constraints (Vector Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Position Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-position-fit-constraints-vector-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `position_vector_constraint` | `ToleranceVectorOptions` | `Position Vector Constraint` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_position_fit_constraints_vector_type(
    self,
    relationship_name: CollectionObjectName,
    position_vector_constraint: ToleranceVectorOptions,
) -> None: ...
```

```python
await briosa.set_relationship_position_fit_constraints_vector_type(relationship_name=..., position_vector_constraint=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Projection Options

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-projection-options)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_projection_options(
    self,
    relationship_name: CollectionObjectName,
    *,
    projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
) -> None: ...
```

```python
await briosa.set_relationship_projection_options(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Reporting Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-reporting-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_reporting_frame(
    self,
    relationship_name: CollectionObjectName,
    reporting_frame: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_relationship_reporting_frame(relationship_name=..., reporting_frame=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Sigmoidal Gap Fit Constraints

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Sigmoidal Gap Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `use_sigmoidal_gap_constraints` | `bool` | `Use Sigmoidal Gap Constraints` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_sigmoidal_gap_fit_constraints(
    self,
    relationship_name: CollectionObjectName,
    *,
    use_sigmoidal_gap_constraints: bool = True,
) -> None: ...
```

```python
await briosa.set_relationship_sigmoidal_gap_fit_constraints(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Sub Sampling Options

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-sub-sampling-options)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `use_every_ith_point` | `bool` | `Use every i-th point` | false |
| `i_value` | `int` | `i value` | 20 |
| `use_no_more_than_n_points` | `bool` | `Use no more than n points` | true |
| `n_value` | `int` | `n value` | 10000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_sub_sampling_options(
    self,
    relationship_name: CollectionObjectName,
    *,
    use_every_ith_point: bool = False,
    i_value: int = 20,
    use_no_more_than_n_points: bool = True,
    n_value: int = 10000,
) -> None: ...
```

```python
await briosa.set_relationship_sub_sampling_options(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Tolerance (Scalar Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-tolerance-scalar-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_tolerance_scalar_type(
    self,
    relationship_name: CollectionObjectName,
    *,
    tolerance_options: ToleranceScalarOptions = ToleranceScalarOptions.DEFAULT,
) -> None: ...
```

```python
await briosa.set_relationship_tolerance_scalar_type(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Tolerance (Vector Type)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-tolerance-vector-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `vector_tolerance` | `ToleranceVectorOptions` | `Vector Tolerance` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_tolerance_vector_type(
    self,
    relationship_name: CollectionObjectName,
    vector_tolerance: ToleranceVectorOptions,
) -> None: ...
```

```python
await briosa.set_relationship_tolerance_vector_type(relationship_name=..., vector_tolerance=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Voxel Cloud Display

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Voxel Cloud Display](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-voxel-cloud-display)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `enable_voxel_cloud_display` | `bool` | `Enable Voxel Cloud Display?` | true |
| `voxel_size_1_0_autodetect` | `float` | `Voxel Size (-1.0 autodetect)` | -1.000000 |
| `min_pts_count_per_voxel` | `int` | `Min Pts Count Per Voxel` | 3 |
| `voxel_rendering_diameter_1_0_fast` | `float` | `Voxel Rendering Diameter % (-1.0 fast)` | 125.000000 |
| `surface_analysis_mode` | `SurfaceAnalysisMode` | `Surface Analysis Mode` | Relationship |
| `colorization_options` | `ColorizationOptions` | `Colorization Options` | Red |
| `show_color_bar_in_view` | `bool` | `Show Color Bar in View?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_voxel_cloud_display(
    self,
    relationship_name: CollectionObjectName,
    *,
    enable_voxel_cloud_display: bool = True,
    voxel_size_1_0_autodetect: float = -1.000000,
    min_pts_count_per_voxel: int = 3,
    voxel_rendering_diameter_1_0_fast: float = 125.000000,
    surface_analysis_mode: SurfaceAnalysisMode = SurfaceAnalysisMode.RELATIONSHIP,
    colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
    show_color_bar_in_view: bool = False,
) -> None: ...
```

```python
await briosa.set_relationship_voxel_cloud_display(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Weighting

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Weighting](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-weighting)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `weight` | `float` | `Weight` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_weighting(
    self,
    relationship_name: CollectionObjectName,
    *,
    weight: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_relationship_weighting(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Weights Normalized

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Weights Normalized](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-weights-normalized)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection_name` | `CollectionName` | `Collection Name` | Required |
| `pick_weighting_mode` | `RelWeightingMode` | `Pick Weighting Mode` | Normalize on equation count |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_weights_normalized(
    self,
    collection_name: CollectionName,
    *,
    pick_weighting_mode: RelWeightingMode = RelWeightingMode.NORMALIZE_EQUATION_COUNT,
) -> None: ...
```

```python
await briosa.set_relationship_weights_normalized(collection_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
