---
title: Construction Operations / Cylinders
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Cylinders

[SA 2026.1.0529.7](/api/python/construction-operations-cylinders) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-cylinders)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Cylinder {/* #construct-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinder) · [gRPC Contract](/api/grpc/construction-operations-cylinders#construct-cylinder)

```python
async def construct_cylinder(
        self,
        cylinder_name: CollectionObjectName,
        cylinder_end_point: Vector,
        cylinder_axis: Vector,
        cylinder_diameter: float,
        cylinder_length: float,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cylinder From End Points {/* #construct-cylinder-from-end-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinder-from-end-points) · [gRPC Contract](/api/grpc/construction-operations-cylinders#construct-cylinder-from-end-points)

```python
async def construct_cylinder_from_end_points(
        self,
        cylinder_name: CollectionObjectName,
        cylinder_end_point_a: Vector,
        cylinder_end_point_b: Vector,
        cylinder_diameter: float,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cylinders From Surface Faces - Runtime Select {/* #construct-cylinders-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select)

```python
async def construct_cylinders_from_surface_faces_runtime_select(
        self,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
