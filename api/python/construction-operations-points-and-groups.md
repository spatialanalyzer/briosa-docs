---
title: Construction Operations / Points and Groups
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Points and Groups

[SA 2026.1.0529.7](/api/python/construction-operations-points-and-groups) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-points-and-groups)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Construct Point (Fit to Points) {/* #construct-point-fit-to-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-fit-to-points) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-fit-to-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_fit_to_points(
        self,
        point_names: Iterable[PointName],
        resulting_point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point in Working Coordinates {/* #construct-a-point-in-working-coordinates */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-in-working-coordinates) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-a-point-in-working-coordinates)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_in_working_coordinates(
        self,
        point_name: PointName,
        working_coordinates: Vector,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point From Survey Target Center {/* #construct-point-from-survey-target-center */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-survey-target-center) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-from-survey-target-center)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_from_survey_target_center(
        self,
        cloud_containing_target: CollectionObjectName,
        reference_seed_point: PointName,
        result_center_point_name: PointName,
        *,
        survey_target_type: SurveyTargetType = SurveyTargetType.TRIANGLE,
        search_diameter: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Position in Working Coordinates {/* #set-point-position-in-working-coordinates */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#set-point-position-in-working-coordinates) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#set-point-position-in-working-coordinates)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_point_position_in_working_coordinates(
        self,
        point_name: PointName,
        position_in_working_coordinates: Vector,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Points by Delta (About Working Frame) {/* #transform-points-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def transform_points_by_delta_about_working_frame(
        self,
        point_name_list: Iterable[PointName],
        delta_in_working_coordinates: Vector,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at line MidPoint {/* #construct-a-point-at-line-midpoint */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-line-midpoint) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-a-point-at-line-midpoint)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_line_midpoint(
        self,
        line_name: CollectionObjectName,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Group from Point Name Ref List {/* #construct-point-group-from-point-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_group_from_point_name_ref_list(
        self,
        point_name_list: Iterable[PointName],
        group_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Groups from Vector Groups {/* #construct-point-groups-from-vector-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-groups-from-vector-groups) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-groups-from-vector-groups)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_groups_from_vector_groups(
        self,
        vector_groups: Iterable[CollectionObjectName],
        *,
        optional_group_name_suffix: str = "",
        make_vector_begin_points: bool = False,
        make_vector_end_points: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Group from Point Cloud {/* #construct-point-group-from-point-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-cloud) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-group-from-point-cloud)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
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
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point From Cloud Point - Runtime Select {/* #construct-point-from-cloud-point---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```python
async def construct_point_from_cloud_point_runtime_select(
        self,
        *,
        selection_prompt: str = "Select cloud point",
        construct_point: bool = False,
        constructed_point_name: PointName,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> Vector: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at Circle Center {/* #construct-a-point-at-circle-center */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-circle-center) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-a-point-at-circle-center)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_circle_center(
        self,
        circle_name: CollectionObjectName,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Planes {/* #construct-point-at-intersection-of-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-planes) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-planes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_intersection_of_planes(
        self,
        plane_1_name: CollectionObjectName,
        plane_2_name: CollectionObjectName,
        plane_3_name: CollectionObjectName,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Two Lines {/* #construct-point-at-intersection-of-two-lines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_intersection_of_two_lines(
        self,
        first_line_name: CollectionObjectName,
        second_line_name: CollectionObjectName,
        resulting_point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Plane and Line {/* #construct-point-at-intersection-of-plane-and-line */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_intersection_of_plane_and_line(
        self,
        plane_name: CollectionObjectName,
        line_name: CollectionObjectName,
        resulting_point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of 2 B-Splines {/* #construct-point-at-intersection-of-2-b-splines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_intersection_of_two_b_splines(
        self,
        first_b_spline_name: CollectionObjectName,
        second_b_spline_name: CollectionObjectName,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at intersection of B-Spline and Surfaces {/* #construct-point-at-intersection-of-b-spline-and-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_intersection_of_b_spline_and_surfaces(
        self,
        b_spline_name: CollectionObjectName,
        surface_list: Iterable[CollectionObjectName],
        point_name: PointName,
        *,
        approximation_tolerance: float = 0.001,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Intersection of Circle and Line {/* #construct-points-at-intersection-of-circle-and-line */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_at_intersection_of_circle_and_line(
        self,
        circle_name: CollectionObjectName,
        line_name: CollectionObjectName,
        base_point_name_for_results: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Intersection of Principle Object Axes and Surfaces {/* #construct-points-at-intersection-of-principle-object-axes-and-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_at_intersection_of_principal_object_axes_and_surfaces(
        self,
        axis_object_list: Iterable[CollectionObjectName],
        surface_list: Iterable[CollectionObjectName],
        resultant_group_name: CollectionObjectName,
        *,
        point_suffix: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points from Cylinder {/* #construct-points-from-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-cylinder) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-from-cylinder)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_from_cylinder(
        self,
        cylinder_name: CollectionObjectName,
        group_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at Projection of Point onto An Object {/* #construct-a-point-at-projection-of-point-onto-an-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_projection_of_point_onto_object(
        self,
        point_to_project: PointName,
        object_name: CollectionObjectName,
        resulting_point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Parallel to WCF Axis {/* #construct-points-at-projection-on-surfaces---parallel-to-wcf-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_at_projection_on_surfaces_parallel_to_wcf_axis(
        self,
        surface_list: Iterable[CollectionObjectName],
        point_names: Iterable[PointName],
        axis: WcfAxis,
        *,
        group_name_to_contain_new_points: str = "",
        point_name_prefix: str = "",
        point_name_suffix: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Radial from WCF Axis {/* #construct-points-at-projection-on-surfaces---radial-from-wcf-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_at_projection_on_surfaces_radial_from_wcf_axis(
        self,
        surface_list: Iterable[CollectionObjectName],
        point_names: Iterable[PointName],
        axis: WcfAxis,
        *,
        group_name_to_contain_new_points: str = "",
        point_name_prefix: str = "",
        point_name_suffix: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Spherical from WCF Origin {/* #construct-points-at-projection-on-surfaces---spherical-from-wcf-origin */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_at_projection_on_surfaces_spherical_from_wcf_origin(
        self,
        surface_list: Iterable[CollectionObjectName],
        point_names: Iterable[PointName],
        *,
        group_name_to_contain_new_points: str = "",
        point_name_prefix: str = "",
        point_name_suffix: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Gradient At Projected Point On Surface {/* #get-gradient-at-projected-point-on-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_gradient_at_projected_point_on_surface(
        self,
        point_to_project: PointName,
        surface_name: CollectionObjectName,
        *,
        generate_output_vector_lines: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> ProjectedPointGradient: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Gradient At Projected Point On Surface Edge {/* #get-gradient-at-projected-point-on-surface-edge */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_gradient_at_projected_point_on_surface_edge(
        self,
        point_to_project: PointName,
        surface_edge: CollectionObjectName,
        surface_name: CollectionObjectName,
        edge_offset_direction: Vector,
        *,
        edge_offset_distance: float = 0.01,
        generate_output_vector_lines: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> ProjectedPointGradient: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `surface_edge` | MP qualifier: B-Spline. |

## Construct Points By Projecting Points On Mesh Along Direction {/* #construct-points-by-projecting-points-on-mesh-along-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_by_projecting_points_on_mesh_along_direction(
        self,
        reference_point_names: Iterable[PointName],
        group_name_for_projected_points: CollectionObjectName,
        object_providing_direction_reference: CollectionObjectName,
        mesh_serving_as_projection_target: CollectionObjectName,
        *,
        bi_directional_projection: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Spaced at a Distance on Curves {/* #construct-points-spaced-at-a-distance-on-curves */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_spaced_at_distance_on_curves(
        self,
        b_spline_list: Iterable[CollectionObjectName],
        resultant_group_name: CollectionObjectName,
        *,
        distance_between_points: float = 0.5,
        resultant_point_name_prefix: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points N-Spaced on Curves {/* #construct-points-n-spaced-on-curves */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-n-spaced-on-curves) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-n-spaced-on-curves)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_n_spaced_on_curves(
        self,
        b_spline_list: Iterable[CollectionObjectName],
        resultant_group_name: CollectionObjectName,
        *,
        number_of_evenly_spaced_points: int = 10,
        resultant_point_name_prefix: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Curves Using Max Chordal Deviation {/* #construct-points-on-curves-using-max-chordal-deviation */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_on_curves_using_max_chordal_deviation(
        self,
        b_spline_list: Iterable[CollectionObjectName],
        resultant_group_name: CollectionObjectName,
        *,
        maximum_chordal_deviation: float = 0.05,
        maximum_trim_edge_angle: float = 15.0,
        maximum_chord_length: float = 0.0,
        resultant_point_name_prefix: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Objects Vertices {/* #construct-points-on-objects-vertices */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-objects-vertices) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-on-objects-vertices)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_on_object_vertices(
        self,
        object_name_list: Iterable[CollectionObjectName],
        resultant_group_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Surface(s) by Clicking {/* #construct-points-on-surfaces-by-clicking */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```python
async def construct_points_on_surfaces_by_clicking(
        self,
        group_name_for_points: CollectionObjectName,
        *,
        first_point_name: str = "p0",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points From Surface Faces - Runtime Select {/* #construct-points-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```python
async def construct_points_from_surface_faces_runtime_select(
        self,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points From Surfaces On UV Grid {/* #construct-points-from-surfaces-on-uv-grid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_from_surfaces_on_uv_grid(
        self,
        surface_list: Iterable[CollectionObjectName],
        *,
        uv_point_group_base_name: str = "UV Points",
        make_each_line_separate_group: bool = False,
        number_of_u_grids: int = 5,
        number_of_v_grids: int = 5,
        edge_point_mode: EdgePointMode,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Object Origin {/* #construct-point-at-object-origin */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-object-origin) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-object-origin)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_point_at_object_origin(
        self,
        object_name: CollectionObjectName,
        resultant_point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> ObjectOriginResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Shifted in Working Frame {/* #construct-points-shifted-in-working-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-shifted-in-working-frame) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-shifted-in-working-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_shifted_in_working_frame(
        self,
        original_points: Iterable[PointName],
        group_for_new_points: CollectionObjectName,
        shift_vector: Vector,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Cylindrically Shifted {/* #construct-points-cylindrically-shifted */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-cylindrically-shifted) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-cylindrically-shifted)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_cylindrically_shifted(
        self,
        reference_object_name: CollectionObjectName,
        original_points: Iterable[PointName],
        group_for_new_points: CollectionObjectName,
        *,
        radial_shift: float = 0.0,
        theta_shift: float = 0.0,
        planar_shift: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `theta_shift` | Angle in degrees. |

## Construct Points WildCard Selection {/* #construct-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_wildcard_selection(
        self,
        groups_to_select_from: Iterable[CollectionObjectName],
        wildcard_selection_names: PointName,
        group_for_new_points: CollectionObjectName,
        *,
        include_prior_complete_name: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Subset with greatest spacing {/* #construct-points-subset-with-greatest-spacing */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_subset_with_greatest_spacing(
        self,
        points_to_subsample: Iterable[PointName],
        *,
        subset_size: int = 10,
        group_for_subset: CollectionObjectName,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Layout on Grid {/* #construct-points-layout-on-grid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-layout-on-grid) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-layout-on-grid)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
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
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Auto-Correspond 2 groups Proximity {/* #construct-points-auto-correspond-2-groups-proximity */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_auto_correspond_two_groups_proximity(
        self,
        reference_group: CollectionObjectName,
        group_to_be_copied: CollectionObjectName,
        group_to_contain_matched_points: CollectionObjectName,
        *,
        same_point_tolerance: float = 0.25,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Auto-Correspond 2 groups Inter-Point Distance {/* #construct-points-auto-correspond-2-groups-inter-point-distance */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_points_auto_correspond_two_groups_inter_point_distance(
        self,
        reference_group: CollectionObjectName,
        group_to_be_copied: CollectionObjectName,
        group_to_contain_matched_points: CollectionObjectName,
        *,
        same_point_tolerance: float = 0.1,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Average a set of Groups {/* #average-a-set-of-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#average-a-set-of-groups) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#average-a-set-of-groups)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def average_set_of_groups(
        self,
        group_names: Iterable[CollectionObjectName],
        resulting_group_name: CollectionObjectName,
        *,
        rms_tolerance: float = 0.0,
        maximum_absolute_tolerance: float = 0.0,
        maximum_average_tolerance: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GroupAverageResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Groups Excluding Obscured Points {/* #copy-groups-excluding-obscured-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#copy-groups-excluding-obscured-points) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#copy-groups-excluding-obscured-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def copy_groups_excluding_obscured_points(
        self,
        instrument_id: CollectionInstrumentId,
        group_names: Iterable[CollectionObjectName],
        new_collection_name: CollectionName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name - Runtime Select {/* #make-a-point-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```python
async def make_point_name_runtime_select(
        self,
        *,
        user_prompt: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name - Ensure Unique {/* #make-a-point-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---ensure-unique) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name---ensure-unique)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_point_name_ensure_unique(
        self,
        point_name: PointName,
        *,
        use_number_suffix: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List From a Group {/* #make-a-point-name-ref-list-from-a-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_point_name_ref_list_from_group(
        self,
        group_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List - Runtime Select {/* #make-a-point-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```python
async def make_point_name_ref_list_runtime_select(
        self,
        *,
        user_prompt: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List - Wildcard Select {/* #make-a-point-name-ref-list---wildcard-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_point_name_ref_list_wildcard_select(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        group_name_wildcard_criteria: str = "*",
        point_name_wildcard_criteria: str = "*",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Hidden Point Bar Database {/* #clear-hidden-point-bar-database */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#clear-hidden-point-bar-database) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#clear-hidden-point-bar-database)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```python
async def clear_hidden_point_bar_database(
        self,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Hidden Point Rod {/* #create-hidden-point-rod */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point-rod) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#create-hidden-point-rod)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def create_hidden_point_rod(
        self,
        hidden_point_rod_name: str,
        *,
        a_to_b_distance: float = 0.0,
        a_to_c_distance: float = 0.0,
        inter_point_tolerance: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `a_to_b_distance` | MP qualifier: Target to Target. |
| `a_to_c_distance` | MP qualifier: Target to Tip. |

## Get Hidden Point Rod Index by Name {/* #get-hidden-point-rod-index-by-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_hidden_point_rod_index_by_name(
        self,
        hidden_point_rod_name: str,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Hidden Point Rod {/* #delete-hidden-point-rod */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#delete-hidden-point-rod) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#delete-hidden-point-rod)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```python
async def delete_hidden_point_rod(
        self,
        *,
        hidden_point_rod_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Hidden Point {/* #create-hidden-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#create-hidden-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```python
async def create_hidden_point(
        self,
        end_a_point_name: PointName,
        end_b_point_name: PointName,
        point_name_to_create: PointName,
        *,
        hidden_point_rod_index: int = 0,
        overwrite_existing_point: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

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

## Example {/* #example */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2026.1.0529.7)
