---
title: Construction Operations / Perimeters
description: Briosa 0.1.0 Python API for the selected perimeter-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Perimeters

## Construct Perimeter From Points

```python
async def construct_perimeter_from_points(
    self,
    resulting_perimeter_name: CollectionObjectName,
    point_list: Iterable[PointName],
    *,
    open_perimeter: bool = False,
) -> None: ...
```

The point order determines the perimeter path. The client forwards the list
without imposing a minimum count. SpatialAnalyzer reports missing points and
lists with fewer than two points. `open_perimeter` defaults to `False`, which
creates a closed perimeter. The client never automatically replays this
operation.

[Catalog](/mp-command-catalog/commands/construction-operations-perimeters#construct-perimeter-from-points) · [gRPC](/api/grpc/construction-operations-perimeters#construct-perimeter-from-points)
