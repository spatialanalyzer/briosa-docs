---
title: Construction Operations / Circles
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Circles

[SA 2026.1.0529.7](/api/python/construction-operations-circles) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-circles)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Circle {/* #construct-circle */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circle) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circle)

```python
async def construct_circle(
        self,
        circle_name: CollectionObjectName,
        circle_center: Vector,
        circle_normal: Vector,
        circle_radius: float,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Circles From Surface Faces - Runtime Select {/* #construct-circles-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)

```python
async def construct_circles_from_surface_faces_runtime_select(
        self,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Circles (Lines) From Surfaces {/* #construct-circles-lines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-lines-from-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circles-lines-from-surfaces)

```python
async def construct_circles_lines_from_surfaces(
        self,
        surfaces: Iterable[CollectionObjectName],
        circle_line_mode: CircleLineMode,
        *,
        minimum_diameter: float = 0.0,
        maximum_diameter: float = 0.0,
        tolerance: float = 0.02,
        single_surface: bool = False,
        destination_collection_name: CollectionName | None = None,
        base_name: str = "Geometry Object",
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2024.1.0508.5)
