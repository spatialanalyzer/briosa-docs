---
title: Construction Operations / Planes
description: Briosa 0.1.0 Python APIs for the selected plane-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Planes

## Construct Plane

```python
async def construct_plane(
    self,
    plane_name: CollectionObjectName,
    plane_center: Vector,
    plane_normal: Vector,
    plane_edge_dimension: float = 0.0,
) -> None: ...
```

## Construct Plane, Normal to Object, Through Point

```python
async def construct_plane_normal_to_object_through_point(
    self,
    resultant_plane_name: CollectionObjectName,
    normal_to_object_name: CollectionObjectName,
    through_point_name: PointName,
    plane_edge_dimension: float = 0.0,
) -> None: ...
```

## Construct Planes, Bounding Point Group

```python
async def construct_planes_bounding_point_group(
    self,
    reference_plane_name: CollectionObjectName,
    group_to_bound: CollectionObjectName,
    resulting_high_plane_name: CollectionObjectName | None = None,
    resulting_low_plane_name: CollectionObjectName | None = None,
    override_target_point_offsets: bool = False,
    offset_value: float = 0.0,
) -> None: ...
```

Omitted result identities use `HighPlane` and `LowPlane` in the active
collection.

## Construct Planes, Bisect 2 Planes

```python
async def construct_planes_bisect_two_planes(
    self,
    resultant_plane_name: CollectionObjectName,
    first_plane: CollectionObjectName,
    second_plane: CollectionObjectName,
) -> None: ...
```

## Shift Plane

```python
async def shift_plane(
    self,
    plane: CollectionObjectName,
    shift_along_normal: float = 0.0,
    grow_bounds_by_factor: float = 0.0,
) -> None: ...
```

## Construct Planes From Surface Faces - Runtime Select

```python
async def construct_planes_from_surface_faces_runtime_select(self) -> None: ...
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped.

The client passes all values through without additional geometry safeguards
and never automatically replays these operations.

[Catalog](/mp-command-catalog/commands/construction-operations-planes) · [gRPC](/api/grpc/0.5.1/construction-operations-planes)
