---
title: Construction Operations / Ellipses
description: Briosa 0.1.0 Python API for the selected ellipse-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Ellipses

## Construct Ellipse

```python
async def construct_ellipse(
    self,
    ellipse_name: CollectionObjectName,
    center_coordinate: Vector,
    normal_direction: Vector,
    major_axis_radius: float,
    minor_axis_radius: float,
) -> None: ...
```

Every value is required and passed through without client-side geometry
validation. The client never automatically replays this operation.

[Catalog](/mp-command-catalog/commands/construction-operations-ellipses#construct-ellipse) · [gRPC](/api/grpc/0.5.1/construction-operations-ellipses#construct-ellipse)
