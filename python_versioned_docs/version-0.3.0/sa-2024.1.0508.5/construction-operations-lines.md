---
title: Construction Operations / Lines
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Lines

[SA 2026.1.0529.7](/api/python/construction-operations-lines) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-lines)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Line 2 Points {/* #construct-line-2-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-line-2-points)

```python
async def construct_line_two_points(
        self,
        line_name: CollectionObjectName,
        first_point: PointName,
        second_point: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line 2 Points (Vector Notation) {/* #construct-line-2-points-vector-notation */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-points-vector-notation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-line-2-points-vector-notation)

```python
async def construct_line_two_points_vector_notation(
        self,
        line_name: CollectionObjectName,
        first_vector: Vector,
        second_vector: Vector,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line Normal to Object {/* #construct-line-normal-to-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-normal-to-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-line-normal-to-object)

```python
async def construct_line_normal_to_object(
        self,
        line_name: CollectionObjectName,
        object: CollectionObjectName,
        *,
        line_length: float = 1,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line - Project Line to Object Reference Plane {/* #construct-line---project-line-to-object-reference-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line---project-line-to-object-reference-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-line---project-line-to-object-reference-plane)

```python
async def construct_line_project_line_to_object_reference_plane(
        self,
        line_to_create: CollectionObjectName,
        line_to_project: CollectionObjectName,
        object_to_project_to: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line - Normal to Object through Point {/* #construct-line---normal-to-object-through-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line---normal-to-object-through-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-line---normal-to-object-through-point)

```python
async def construct_line_normal_to_object_through_point(
        self,
        line_to_create: CollectionObjectName,
        object_name: CollectionObjectName,
        point_name: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line 2 Plane Intersection {/* #construct-line-2-plane-intersection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-plane-intersection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-line-2-plane-intersection)

```python
async def construct_line_two_plane_intersection(
        self,
        line_name: CollectionObjectName,
        first_plane: CollectionObjectName,
        second_plane: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Lines From Surface Faces - Runtime Select {/* #construct-lines-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-lines-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-lines-from-surface-faces---runtime-select)

```python
async def construct_lines_from_surface_faces_runtime_select(
        self,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line Center of Slot {/* #construct-line-center-of-slot */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-center-of-slot) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-line-center-of-slot)

```python
async def construct_line_center_of_slot(
        self,
        line_name: CollectionObjectName,
        slot_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line From Instrument Shot {/* #construct-line-from-instrument-shot */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-from-instrument-shot) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-lines#construct-line-from-instrument-shot)

```python
async def construct_line_from_instrument_shot(
        self,
        point_name: PointName,
        line_name: CollectionObjectName,
        *,
        observation_index: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2024.1.0508.5)
