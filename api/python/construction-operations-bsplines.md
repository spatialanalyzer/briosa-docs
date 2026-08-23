---
title: Construction Operations / BSpines
description: Next Briosa Python APIs for selected Construction Operations / BSpines MP commands.
toc_max_heading_level: 2
---

# Construction Operations / BSpines

:::note[Next Python Contract]

These coroutines define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

## B-Spline Fit Options Value

`BSplineFitOptions` replaces the MP-only `Construct B-Spline Fit Options`
constructor command. Passing `None` applies these defaults.

```python
class BSplinePointSortMode(StrEnum):
    USE_SELECTION_ORDER = "use_selection_order"
    CLOSEST_NEIGHBORS_FROM_FIRST_SELECTION = "closest_neighbors_from_first_selection"
    CLOSEST_NEIGHBORS_IN_CURVE_DIRECTION = "closest_neighbors_in_curve_direction"


@dataclass(frozen=True, slots=True)
class BSplineFitOptions:
    open_curve: bool = True
    use_interpolation_for_fit: bool = True
    number_of_control_points: int = 8
    degree_of_curve: int = 3
    sort_method: BSplinePointSortMode = BSplinePointSortMode.USE_SELECTION_ORDER
    span_any_gap: bool = True
    termination_gap_length: float = 0.0
    ignore_proximate_points: bool = False
    proximate_point_threshold: float = 0.0
    use_global_tessellation_options: bool = True
    maximum_chordal_deviation: float = 0.05
    maximum_trim_edge_angle: float = 15.0
    termination_average_multiplier: float = 10.0
    extension: float = 0.0
```

`use_interpolation_for_fit` keeps the MP-facing meaning. Briosa performs the
SA-version-specific translation to the exact SDK representation internally.

## Construct B-Spline From Points

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Construct B-Spline From Points](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-points) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `point_list` | `Iterable[PointName]` | `Point List` | Required |
| `b_spline_fit_options` | `BSplineFitOptions \| None` | `B-Spline Fit Options` | Type defaults |

```python
async def construct_b_spline_from_points(
    self,
    resulting_b_spline_name: CollectionObjectName,
    point_list: Iterable[PointName],
    *,
    b_spline_fit_options: BSplineFitOptions | None = None,
) -> None: ...
```

```python
await briosa.construct_b_spline_from_points(
    resulting_b_spline_name,
    point_list,
)
```

The input order is preserved. `None` applies the documented fit-option
defaults.

## Construct B-Spline From Point Set

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Construct B-Spline From Point Set](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-point-set) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-point-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `point_set_container` | `CollectionObjectName` | `Point Set Container` | Required |
| `b_spline_fit_options` | `BSplineFitOptions \| None` | `B-Spline Fit Options` | Type defaults |

```python
async def construct_b_spline_from_point_set(
    self,
    resulting_b_spline_name: CollectionObjectName,
    point_set_container: CollectionObjectName,
    *,
    b_spline_fit_options: BSplineFitOptions | None = None,
) -> None: ...
```

```python
await briosa.construct_b_spline_from_point_set(
    resulting_b_spline_name,
    point_set_container,
)
```

## Construct B-Spline From Several B-Splines

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Construct B-Spline From Several B-Splines](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-several-b-splines) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-several-b-splines)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `b_spline_list` | `Iterable[CollectionObjectName]` | `B-Spline List` | Required |
| `close_resulting_b_spline` | `bool` | `Close Resulting B-Spline` | false |

```python
async def construct_b_spline_from_several_b_splines(
    self,
    resulting_b_spline_name: CollectionObjectName,
    b_spline_list: Iterable[CollectionObjectName],
    *,
    close_resulting_b_spline: bool = False,
) -> None: ...
```

```python
await briosa.construct_b_spline_from_several_b_splines(
    resulting_b_spline_name,
    b_spline_list,
)
```

## Construct B-Spline From Intersection of Plane and Surface

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Construct B-Spline From Intersection of Plane and Surface](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `plane_name` | `CollectionObjectName` | `Plane Name` | Required |
| `surface_name` | `CollectionObjectName` | `Surface Name` | Required |
| `approximation_tolerance` | `float` | `Approximation Tolerance` | 0.0001 |

```python
async def construct_b_spline_from_intersection_of_plane_and_surface(
    self,
    resulting_b_spline_name: CollectionObjectName,
    plane_name: CollectionObjectName,
    surface_name: CollectionObjectName,
    *,
    approximation_tolerance: float = 0.0001,
) -> None: ...
```

```python
await briosa.construct_b_spline_from_intersection_of_plane_and_surface(
    resulting_b_spline_name,
    plane_name,
    surface_name,
)
```

## Construct B-Spline From Intersection of Surfaces

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Construct B-Spline From Intersection of Surfaces](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `first_surface_name` | `CollectionObjectName` | `First Surface Name` | Required |
| `second_surface_name` | `CollectionObjectName` | `Second Surface Name` | Required |
| `approximation_tolerance` | `float` | `Approximation Tolerance` | 0.0001 |

```python
async def construct_b_spline_from_intersection_of_surfaces(
    self,
    resulting_b_spline_name: CollectionObjectName,
    first_surface_name: CollectionObjectName,
    second_surface_name: CollectionObjectName,
    *,
    approximation_tolerance: float = 0.0001,
) -> None: ...
```

```python
await briosa.construct_b_spline_from_intersection_of_surfaces(
    resulting_b_spline_name,
    first_surface_name,
    second_surface_name,
)
```

SpatialAnalyzer may derive additional result names when the intersection
creates more than one curve.

## Construct B-Splines From Surfaces

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Construct B-Splines From Surfaces](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-surfaces) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-surfaces)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surface_list` | `Iterable[CollectionObjectName]` | `Surface List` | Required |
| `resulting_b_spline_name_prefix` | `str \| None` | `Resulting B-Spline Name prefix (Optional)` | Omitted |
| Return | `list[CollectionObjectName]` | `B-Spline List` | Returned |

```python
async def construct_b_splines_from_surfaces(
    self,
    surface_list: Iterable[CollectionObjectName],
    *,
    resulting_b_spline_name_prefix: str | None = None,
) -> list[CollectionObjectName]: ...
```

```python
b_splines = await briosa.construct_b_splines_from_surfaces(surface_list)
```

## Construct B-Splines From Lines

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Construct B-Splines From Lines](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-lines) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-lines)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `line_list` | `Iterable[CollectionObjectName]` | `Line List` | Required |
| `resulting_b_spline_name_prefix` | `str \| None` | `Resulting B-Spline Name prefix (Optional)` | Omitted |
| Return | `list[CollectionObjectName]` | `B-Spline List` | Returned |

```python
async def construct_b_splines_from_lines(
    self,
    line_list: Iterable[CollectionObjectName],
    *,
    resulting_b_spline_name_prefix: str | None = None,
) -> list[CollectionObjectName]: ...
```

```python
b_splines = await briosa.construct_b_splines_from_lines(line_list)
```

## Construct B-Splines From Intersection of Plane and Mesh

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Construct B-Splines From Intersection of Plane and Mesh](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) · [gRPC contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `plane_name` | `CollectionObjectName` | `Plane Name` | Required |
| `mesh_name` | `CollectionObjectName` | `Mesh Name` | Required |
| `closed_line_segment_limit` | `int` | `Delete closed lines whose number of segment is less than this value` | 3 |
| `unclosed_line_segment_limit` | `int` | `Delete unclosed lines whose number of segment is less than this value` | 3 |
| `create_intersection_points` | `bool` | `Create Intersection Points?` | true |
| Return | `list[CollectionObjectName]` | `B-Spline List` | Returned |

```python
async def construct_b_splines_from_intersection_of_plane_and_mesh(
    self,
    resulting_b_spline_name: CollectionObjectName,
    plane_name: CollectionObjectName,
    mesh_name: CollectionObjectName,
    *,
    closed_line_segment_limit: int = 3,
    unclosed_line_segment_limit: int = 3,
    create_intersection_points: bool = True,
) -> list[CollectionObjectName]: ...
```

```python
b_splines = await briosa.construct_b_splines_from_intersection_of_plane_and_mesh(
    resulting_b_spline_name,
    plane_name,
    mesh_name,
)
```

Negative segment limits are rejected before the request is sent.
