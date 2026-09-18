---
title: Construction Operations / Polygonized Surfaces
description: Briosa 0.1.0 Python API for polygonized-surface construction.
toc_max_heading_level: 2
---

# Construction Operations / Polygonized Surfaces

## Shared Type

```python
class MeshOrientationType(StrEnum):
    USE_CURRENT_POINT_OF_VIEW = "Use Current Point of View"
    USE_CURRENT_WORKING_FRAME = "Use Current Working Frame"
```

## construct_polygonized_surface_from_point_clouds

```python
async def construct_polygonized_surface_from_point_clouds(
    self,
    point_cloud_list: Iterable[CollectionObjectName],
    mesh_orientation: MeshOrientationType,
    polygonized_surface_name: CollectionObjectName,
    *,
    grid_resolution: float = 0.0,
) -> None: ...
```

The point-cloud list must be nonempty. Orientation is required because the MP
Editor export does not provide a valid default. The working-frame choice uses
the current working frame's Z axis. No resolution or point-density safeguards
are added, and the call is never automatically replayed.

```python
await briosa.construction_operations.construct_polygonized_surface_from_point_clouds(
    point_clouds,
    MeshOrientationType.USE_CURRENT_WORKING_FRAME,
    destination_surface,
    grid_resolution=0.05,
)
```

[Catalog](/mp-command-catalog/commands/construction-operations-polygonized-surfaces) · [gRPC](/api/grpc/construction-operations-polygonized-surfaces)
