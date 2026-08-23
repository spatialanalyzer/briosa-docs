---
title: Construction Operations / Lines
description: Next Briosa Python APIs for selected line-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Lines

These methods preserve MP-compatible inputs and defaults without adding
client-side geometry safeguards. None is automatically replayed.

## Construct Line 2 Points

```python
async def construct_line_two_points(
    self,
    line_name: CollectionObjectName,
    first_point: PointName,
    second_point: PointName,
) -> None: ...
```

Coincident points are passed through to SpatialAnalyzer.

## Construct Line 2 Points (Vector Notation)

```python
async def construct_line_two_points_vector_notation(
    self,
    line_name: CollectionObjectName,
    first_vector: Vector,
    second_vector: Vector,
) -> None: ...
```

## Construct Line Normal to Object

```python
async def construct_line_normal_to_object(
    self,
    line_name: CollectionObjectName,
    object: CollectionObjectName,
    *,
    line_length: float = 1,
) -> None: ...
```

Any line length is passed through to SpatialAnalyzer.

## Construct Line - Project Line to Object Reference Plane

```python
async def construct_line_project_line_to_object_reference_plane(
    self,
    line_to_create: CollectionObjectName,
    line_to_project: CollectionObjectName,
    object_to_project_to: CollectionObjectName,
) -> None: ...
```

`object_to_project_to` retains the MP's `Any` object domain.

## Construct Line - Normal to Object through Point

```python
async def construct_line_normal_to_object_through_point(
    self,
    line_to_create: CollectionObjectName,
    object_name: CollectionObjectName,
    point_name: PointName,
) -> None: ...
```

## Construct Line 2 Plane Intersection

```python
async def construct_line_two_plane_intersection(
    self,
    line_name: CollectionObjectName,
    first_plane: CollectionObjectName,
    second_plane: CollectionObjectName,
) -> None: ...
```

The client does not prevalidate whether the planes intersect.

## Construct Lines From Surface Faces - Runtime Select

```python
async def construct_lines_from_surface_faces_runtime_select(self) -> None: ...
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped.

## Construct Line Center of Slot

```python
async def construct_line_center_of_slot(
    self,
    line_name: CollectionObjectName,
    slot_name: CollectionObjectName,
) -> None: ...
```

## Construct Line From Instrument Shot

```python
async def construct_line_from_instrument_shot(
    self,
    point_name: PointName,
    line_name: CollectionObjectName,
    *,
    observation_index: int = 0,
) -> None: ...
```

No client-side range rule is added for the observation index.

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-lines) ·
[gRPC](/api/grpc/construction-operations-lines)
