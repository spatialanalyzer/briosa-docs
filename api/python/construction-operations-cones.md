---
title: Construction Operations / Cones
description: Next Briosa Python APIs for selected cone-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Cones

## Construct Cone

```python
async def construct_cone(
    self,
    cone_name: CollectionObjectName,
    cone_end_point: Vector,
    cone_axis: Vector,
    cone_length: float,
    cone_theta_start: float,
    cone_theta_span: float,
    cone_included_angle: float,
) -> None: ...
```

Every geometry value is required and passed through without client-side range
validation.

## Construct Cones From Surface Faces - Runtime Select

```python
async def construct_cones_from_surface_faces_runtime_select(self) -> None: ...
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped, and the client never automatically replays this call.

[Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [gRPC](/api/grpc/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)
