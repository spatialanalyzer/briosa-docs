---
title: Construction Operations / Planes
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Planes

[SA 2026.1.0529.7](/api/python/construction-operations-planes) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-planes)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Plane {/* #construct-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-plane)

```python
async def construct_plane(
        self,
        plane_name: CollectionObjectName,
        plane_center: Vector,
        plane_normal: Vector,
        *,
        plane_edge_dimension: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Plane, Normal to Object, Through Point {/* #construct-plane-normal-to-object-through-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-plane-normal-to-object-through-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-plane-normal-to-object-through-point)

```python
async def construct_plane_normal_to_object_through_point(
        self,
        resultant_plane_name: CollectionObjectName,
        normal_to_object_name: CollectionObjectName,
        through_point_name: PointName,
        *,
        plane_edge_dimension: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Planes, Bounding Point Group {/* #construct-planes-bounding-point-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-bounding-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-planes-bounding-point-group)

```python
async def construct_planes_bounding_point_group(
        self,
        reference_plane_name: CollectionObjectName,
        group_to_bound: CollectionObjectName,
        *,
        resulting_high_plane_name: CollectionObjectName | None = None,
        resulting_low_plane_name: CollectionObjectName | None = None,
        override_target_point_offsets: bool = False,
        offset_value: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Planes, Bisect 2 Planes {/* #construct-planes-bisect-2-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-bisect-2-planes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-planes-bisect-2-planes)

```python
async def construct_planes_bisect_two_planes(
        self,
        resultant_plane_name: CollectionObjectName,
        first_plane: CollectionObjectName,
        second_plane: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shift Plane {/* #shift-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#shift-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#shift-plane)

```python
async def shift_plane(
        self,
        plane: CollectionObjectName,
        *,
        shift_along_normal: float = 0.0,
        grow_bounds_by_factor: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Planes From Surface Faces - Runtime Select {/* #construct-planes-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-planes-from-surface-faces---runtime-select)

```python
async def construct_planes_from_surface_faces_runtime_select(
        self,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2024.1.0508.5)
