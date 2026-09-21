---
title: Construction Operations / Ellipses
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Ellipses

[SA 2026.1.0529.7](/api/python/construction-operations-ellipses) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-ellipses)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Ellipse {/* #construct-ellipse */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-ellipses#construct-ellipse) · [gRPC Contract](/api/grpc/construction-operations-ellipses#construct-ellipse)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
