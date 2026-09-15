---
title: Construction Operations / Cylinders
description: Unreleased Briosa Python APIs for selected cylinder-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Cylinders

## Construct Cylinder

```python
async def construct_cylinder(
    self,
    cylinder_name: CollectionObjectName,
    cylinder_end_point: Vector,
    cylinder_axis: Vector,
    cylinder_diameter: float,
    cylinder_length: float,
) -> None: ...
```

Every value is required and passed through without client-side geometry
validation.

## Construct Cylinder From End Points

```python
async def construct_cylinder_from_end_points(
    self,
    cylinder_name: CollectionObjectName,
    cylinder_end_point_a: Vector,
    cylinder_end_point_b: Vector,
    cylinder_diameter: float,
) -> None: ...
```

Coincident endpoints and any diameter value are passed through to
SpatialAnalyzer.

## Construct Cylinders From Surface Faces - Runtime Select

```python
async def construct_cylinders_from_surface_faces_runtime_select(self) -> None: ...
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped, and the client never automatically replays this call.
