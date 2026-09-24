---
title: Construction Operations / Cones
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Cones

[SA 2026.1.0529.7](/api/python/construction-operations-cones) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-cones)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Cone {/* #construct-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cone)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cones From Surface Faces - Runtime Select {/* #construct-cones-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)

```python
async def construct_cones_from_surface_faces_runtime_select(
        self,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2024.1.0508.5)
