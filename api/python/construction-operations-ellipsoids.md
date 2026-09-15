---
title: Construction Operations / Ellipsoids
description: Unreleased Briosa Python API for the selected ellipsoid-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

## Construct Ellipsoid

```python
async def construct_ellipsoid(
    self,
    ellipse_name: CollectionObjectName,
    *,
    x_axis_radius: float = 5.0,
    y_axis_radius: float = 4.0,
    z_axis_radius: float = 3.0,
    magnification: float = 1.0,
    uncertainty_ellipsoid: bool = False,
    transform_in_working_coordinates: Transform | None = None,
    ellipse_color: Color | None = None,
) -> None: ...
```

`None` maps to the identity transform and RGB 255, 0, 255, respectively.
Values are passed through without client-side geometry validation. The client
never automatically replays this operation.

[Catalog](/mp-command-catalog/commands/construction-operations-ellipsoids#construct-ellipsoid) · [gRPC](/api/grpc/construction-operations-ellipsoids#construct-ellipsoid)
