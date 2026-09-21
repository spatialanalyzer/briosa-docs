---
title: Construction Operations / Polygonized Surfaces
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Polygonized Surfaces

[SA 2026.1.0529.7](/api/python/construction-operations-polygonized-surfaces) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-polygonized-surfaces)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Polygonized Surface from Point Clouds {/* #construct-polygonized-surface-from-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-polygonized-surfaces#construct-polygonized-surface-from-point-clouds) · [gRPC Contract](/api/grpc/construction-operations-polygonized-surfaces#construct-polygonized-surface-from-point-clouds)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Type {/* #shared-type */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_polygonized_surface_from_point_clouds {/* #construct_polygonized_surface_from_point_clouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
