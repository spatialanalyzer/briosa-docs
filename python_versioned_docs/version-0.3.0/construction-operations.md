---
title: Construction Operations
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations

[SA 2026.1.0529.7](/api/python/construction-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Mirror Object(s) {/* #mirror-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#mirror-objects) · [gRPC Contract](/api/grpc/construction-operations#mirror-objects)

```python
async def mirror_objects(
        self,
        objects: Iterable[CollectionObjectName],
        frame_name: CollectionObjectName,
        frame_plane_to_mirror_around: MirrorFramePlane,
        *,
        copy: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Object {/* #copy-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-object) · [gRPC Contract](/api/grpc/construction-operations#copy-object)

```python
async def copy_object(
        self,
        source_object: CollectionObjectName,
        new_object_name: CollectionObjectName,
        *,
        overwrite_if_exists: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Objects to a collection {/* #copy-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection) · [gRPC Contract](/api/grpc/construction-operations#copy-objects-to-a-collection)

```python
async def copy_objects_to_a_collection(
        self,
        source_objects: Iterable[CollectionObjectName],
        destination_collection_name: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects to a collection {/* #move-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection) · [gRPC Contract](/api/grpc/construction-operations#move-objects-to-a-collection)

```python
async def move_objects_to_a_collection(
        self,
        source_objects: Iterable[CollectionObjectName],
        destination_collection_name: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Objects - Point to Point Delta {/* #copy-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta) · [gRPC Contract](/api/grpc/construction-operations#copy-objects---point-to-point-delta)

```python
async def copy_objects_point_to_point_delta(
        self,
        objects_to_copy: Iterable[CollectionObjectName],
        first_delta_point: PointName,
        second_delta_point: PointName,
        *,
        destination_collection_name: CollectionName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects - Point to Point Delta {/* #move-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta) · [gRPC Contract](/api/grpc/construction-operations#move-objects---point-to-point-delta)

```python
async def move_objects_point_to_point_delta(
        self,
        objects_to_move: Iterable[CollectionObjectName],
        first_delta_point: PointName,
        second_delta_point: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Point {/* #rename-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-point) · [gRPC Contract](/api/grpc/construction-operations#rename-point)

```python
async def rename_point(
        self,
        original_point_name: PointName,
        new_point_name: PointName,
        *,
        overwrite_if_exists: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Points with Name Pattern {/* #rename-points-with-name-pattern */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern) · [gRPC Contract](/api/grpc/construction-operations#rename-points-with-name-pattern)

```python
async def rename_points_with_name_pattern(
        self,
        point_names: Iterable[PointName],
        *,
        name_pattern: str = "NewName_%d",
        start_value: int = 1,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Collection {/* #rename-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-collection) · [gRPC Contract](/api/grpc/construction-operations#rename-collection)

```python
async def rename_collection(
        self,
        original_collection_name: CollectionName,
        new_collection_name: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Object {/* #rename-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-object) · [gRPC Contract](/api/grpc/construction-operations#rename-object)

```python
async def rename_object(
        self,
        original_object_name: CollectionObjectName,
        new_object_name: CollectionObjectName,
        *,
        overwrite_if_exists: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Item {/* #rename-item */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-item) · [gRPC Contract](/api/grpc/construction-operations#rename-item)

```python
async def rename_item(
        self,
        original_item_name: CollectionItemName,
        new_item_name: CollectionItemName,
        *,
        overwrite_if_exists: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Points {/* #delete-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points) · [gRPC Contract](/api/grpc/construction-operations#delete-points)

```python
async def delete_points(
        self,
        point_names: Iterable[PointName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Points WildCard Selection {/* #delete-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations#delete-points-wildcard-selection)

```python
async def delete_points_wildcard_selection(
        self,
        groups_to_delete_from: Iterable[CollectionObjectName],
        wildcard_selection_names: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Objects From Surface Faces - Runtime Select {/* #construct-objects-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations#construct-objects-from-surface-faces---runtime-select)

```python
async def construct_objects_from_surface_faces_runtime_select(
        self,
        object_type: ConstructObjectType,
        *,
        point_offset: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
