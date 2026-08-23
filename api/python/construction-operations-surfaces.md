---
title: Construction Operations / Surfaces
description: Next Briosa Python APIs for surface construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Surfaces

:::note[Next Python Contract]

These coroutines define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

```python
class SurfaceDissectionMode(Enum):
    ENTIRE_SOLID = "Entire Solid"
    SELECT_FACES = "Select Faces"
```

## construct_surfaces_from_objects

```python
async def construct_surfaces_from_objects(
    self,
    objects: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.construction_operations.construct_surfaces_from_objects(objects)
```

## construct_surface_from_b_splines

```python
async def construct_surface_from_b_splines(
    self,
    resulting_surface_name: CollectionObjectName,
    b_spline_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_from_b_splines(
    resulting_surface,
    b_splines,
)
```

`b_spline_list` maps to exact MP argument `BSpline List`.

## construct_surface_from_cylinder

```python
async def construct_surface_from_cylinder(
    self,
    resulting_surface_name: CollectionObjectName,
    cylinder_name: CollectionObjectName,
    *,
    internal_cylinder: bool = True,
    use_theta_extent_mode: bool = False,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_from_cylinder(
    resulting_surface,
    cylinder,
)
```

## construct_surface_from_plane

```python
async def construct_surface_from_plane(
    self,
    resulting_surface_name: CollectionObjectName,
    plane_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_from_plane(
    resulting_surface,
    plane,
)
```

## construct_surface_from_sphere

```python
async def construct_surface_from_sphere(
    self,
    resulting_surface_name: CollectionObjectName,
    sphere_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_from_sphere(
    resulting_surface,
    sphere,
)
```

## construct_surface_from_cone

```python
async def construct_surface_from_cone(
    self,
    resulting_surface_name: CollectionObjectName,
    cone_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_from_cone(
    resulting_surface,
    cone,
)
```

## construct_surface_from_collection_of_surfaces

```python
async def construct_surface_from_collection_of_surfaces(
    self,
    surfaces_to_combine: Iterable[CollectionObjectName],
    resulting_surface_name: CollectionObjectName,
    *,
    hide_original_surfaces: bool = True,
    delete_original_surfaces: bool = False,
    enable_sewing_tolerance: bool = False,
    sewing_tolerance: float = -1.0,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_from_collection_of_surfaces(
    surfaces,
    resulting_surface,
)
```

## construct_surface_fit_from_nominal_surfaces_and_actual_data

```python
async def construct_surface_fit_from_nominal_surfaces_and_actual_data(
    self,
    nominal_surface: CollectionObjectName,
    actual_data_point_list: Iterable[PointName],
    resulting_surface_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_fit_from_nominal_surfaces_and_actual_data(
    nominal_surface,
    actual_points,
    resulting_surface,
)
```

## construct_surface_by_dissecting_surfaces

```python
async def construct_surface_by_dissecting_surfaces(
    self,
    dissection_mode: SurfaceDissectionMode,
) -> list[CollectionObjectName]: ...
```

```python
created_surfaces = await briosa.construction_operations.construct_surface_by_dissecting_surfaces(
    SurfaceDissectionMode.SELECT_FACES,
)
```

Face selection is operator-interactive. Task cancellation does not prove the SA
interaction stopped.

## construct_surfaces_by_dissecting_surfaces_from_ref_list

```python
async def construct_surfaces_by_dissecting_surfaces_from_ref_list(
    self,
    surfaces_to_dissect: Iterable[CollectionObjectName],
) -> list[CollectionObjectName]: ...
```

```python
created_surfaces = await briosa.construction_operations.construct_surfaces_by_dissecting_surfaces_from_ref_list(
    surfaces,
)
```

## construct_surface_from_point_groups

```python
async def construct_surface_from_point_groups(
    self,
    group_name_list: Iterable[CollectionObjectName],
    resulting_surface_name: CollectionObjectName,
    *,
    b_spline_fit_options: BSplineFitOptions | None = None,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_from_point_groups(
    point_groups,
    resulting_surface,
)
```

`None` applies the shared
[`BSplineFitOptions` defaults](./construction-operations-bsplines#b-spline-fit-options-value).

## construct_surfaces_by_projecting_points

```python
async def construct_surfaces_by_projecting_points(
    self,
    projection_target_name_list: Iterable[CollectionObjectName],
    point_list: Iterable[PointName],
    resulting_surface_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surfaces_by_projecting_points(
    projection_targets,
    points,
    resulting_surface,
)
```

## construct_surface_by_offsetting_surface

```python
async def construct_surface_by_offsetting_surface(
    self,
    reference_surface: Iterable[CollectionObjectName],
    *,
    surface_offset: float = 0.0,
    hide_original_surface: bool = True,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_by_offsetting_surface(
    surfaces,
    surface_offset=5.0,
)
```

## construct_surface_from_annotation_links

```python
async def construct_surface_from_annotation_links(
    self,
    annotation_list: Iterable[CollectionObjectName],
    resulting_surface_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.construction_operations.construct_surface_from_annotation_links(
    annotations,
    resulting_surface,
)
```

## construct_geometry_from_surfaces

```python
async def construct_geometry_from_surfaces(
    self,
    surfaces: Iterable[CollectionObjectName],
    *,
    minimum_diameter: float = 0.0,
    maximum_diameter: float = 0.0,
    reference_frame: CollectionObjectName | None = None,
    destination_collection_name: CollectionName | None = None,
    base_name: str = "Geometry Object",
) -> list[CollectionObjectName]: ...
```

```python
cylinders = await briosa.construction_operations.construct_geometry_from_surfaces(
    surfaces,
    minimum_diameter=10.0,
    maximum_diameter=100.0,
    destination_collection_name=destination,
)
```

:::warning[SA 2026.1 Partial Contract]

This coroutine extracts cylinder geometry only. It intentionally has no
geometry-mode parameter because the SDK cannot reliably select the MP's line,
circle, or cylinder mode.

:::

Briosa adds no operation-specific geometry or list-cardinality safeguards, and
none of these calls is automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-surfaces) · [gRPC](/api/grpc/construction-operations-surfaces)
