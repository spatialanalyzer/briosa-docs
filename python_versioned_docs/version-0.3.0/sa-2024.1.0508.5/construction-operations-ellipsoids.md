---
title: Construction Operations / Ellipsoids
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

[SA 2026.1.0529.7](/api/python/construction-operations-ellipsoids) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-ellipsoids)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Ellipsoid {/* #construct-ellipsoid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-ellipsoids#construct-ellipsoid) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-ellipsoids#construct-ellipsoid)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2024.1.0508.5)
