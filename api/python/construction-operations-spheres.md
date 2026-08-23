---
title: Construction Operations / Spheres
description: Next Briosa Python APIs for sphere construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Spheres

## construct_sphere

```python
async def construct_sphere(
    self,
    sphere_name: CollectionObjectName,
    sphere_center_in_working_coordinates: Vector,
    sphere_radius: float,
) -> None: ...
```

Briosa adds no radius validation and never automatically replays the call.

```python
await briosa.construction_operations.construct_sphere(
    sphere,
    Vector(0.0, 0.0, 0.0),
    sphere_radius=25.0,
)
```

## construct_spheres_from_surface_faces_runtime_select

```python
async def construct_spheres_from_surface_faces_runtime_select(self) -> None: ...
```

The operator selects CAD faces in SpatialAnalyzer. Escape is an MP failure;
task cancellation does not prove the interaction stopped. The call is never
automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-spheres) · [gRPC](/api/grpc/construction-operations-spheres)
