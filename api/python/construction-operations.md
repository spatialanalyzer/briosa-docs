---
title: Construction Operations
description: Unreleased Briosa Python APIs for selected Construction Operations MP commands.
toc_max_heading_level: 2
---

# Construction Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

Exact MP command words map mechanically to `snake_case`. All operations on
this page return `None`, use normal asyncio cancellation and timeout controls,
and are never replayed automatically.

## Mirror Object(s)

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: Licensed setter probe; fixture execution required.

:::

[Mirror Object(s)](/mp-command-catalog/commands/construction-operations#mirror-objects) · [gRPC contract](/api/grpc/construction-operations#mirror-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `Iterable[CollectionObjectName]` | `Object(s)` | Required |
| `frame_name` | `CollectionObjectName` | `Frame Name` | Required |
| `frame_plane_to_mirror_around` | `MirrorFramePlane` | `Frame Plane to Mirror Around` | Required |
| `copy` | `bool` | `Copy? [FALSE = Move]` | true |

```python
class MirrorFramePlane(StrEnum):
    XY = "xy"
    XZ = "xz"
    YZ = "yz"

async def mirror_objects(
    self,
    objects: Iterable[CollectionObjectName],
    frame_name: CollectionObjectName,
    frame_plane_to_mirror_around: MirrorFramePlane,
    *,
    copy: bool = True,
) -> None: ...
```

```python
await briosa.mirror_objects(objects, frame, MirrorFramePlane.XY)
```

Mirrors selected objects across one of a frame's orthogonal planes.

## Copy Object

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Copy Object](/mp-command-catalog/commands/construction-operations#copy-object) · [gRPC contract](/api/grpc/construction-operations#copy-object)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_object` | `CollectionObjectName` | `Source Object` | Required |
| `new_object_name` | `CollectionObjectName` | `New Object Name` | Required |
| `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |

```python
async def copy_object(
    self,
    source_object: CollectionObjectName,
    new_object_name: CollectionObjectName,
    *,
    overwrite_if_exists: bool = False,
) -> None: ...
```

```python
await briosa.copy_object(source_object, new_object_name)
```

Copies one collection object to a caller-supplied object name.

## Copy Objects to a collection

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Copy Objects to a collection](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection) · [gRPC contract](/api/grpc/construction-operations#copy-objects-to-a-collection)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_objects` | `Iterable[CollectionObjectName]` | `Source Objects` | Required |
| `destination_collection_name` | `CollectionName` | `Destination Collection Name` | Required |

```python
async def copy_objects_to_a_collection(
    self,
    source_objects: Iterable[CollectionObjectName],
    destination_collection_name: CollectionName,
) -> None: ...
```

```python
await briosa.copy_objects_to_a_collection(source_objects, destination_collection_name)
```

Copies selected objects into a destination collection.

## Move Objects to a collection

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Move Objects to a collection](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection) · [gRPC contract](/api/grpc/construction-operations#move-objects-to-a-collection)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_objects` | `Iterable[CollectionObjectName]` | `Source Objects` | Required |
| `destination_collection_name` | `CollectionName` | `Destination Collection Name` | Required |

```python
async def move_objects_to_a_collection(
    self,
    source_objects: Iterable[CollectionObjectName],
    destination_collection_name: CollectionName,
) -> None: ...
```

```python
await briosa.move_objects_to_a_collection(source_objects, destination_collection_name)
```

Moves selected objects into a destination collection.

## Copy Objects - Point to Point Delta

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Copy Objects - Point to Point Delta](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta) · [gRPC contract](/api/grpc/construction-operations#copy-objects---point-to-point-delta)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_copy` | `Iterable[CollectionObjectName]` | `Objects to Copy` | Required |
| `first_delta_point` | `PointName` | `First Delta Point` | Required |
| `second_delta_point` | `PointName` | `Second Delta Point` | Required |
| `destination_collection_name` | `CollectionName | None` | `Destination Collection Name (Optional)` | None |

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

```python
await briosa.copy_objects_point_to_point_delta(objects_to_copy, first_point, second_point)
```

Copies objects by the delta between two points.

## Move Objects - Point to Point Delta

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Move Objects - Point to Point Delta](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta) · [gRPC contract](/api/grpc/construction-operations#move-objects---point-to-point-delta)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_move` | `Iterable[CollectionObjectName]` | `Objects to Move` | Required |
| `first_delta_point` | `PointName` | `First Delta Point` | Required |
| `second_delta_point` | `PointName` | `Second Delta Point` | Required |

```python
async def move_objects_point_to_point_delta(
    self,
    objects_to_move: Iterable[CollectionObjectName],
    first_delta_point: PointName,
    second_delta_point: PointName,
) -> None: ...
```

```python
await briosa.move_objects_point_to_point_delta(objects_to_move, first_point, second_point)
```

Moves objects by the delta between two points.

## Rename Point

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Point](/mp-command-catalog/commands/construction-operations#rename-point) · [gRPC contract](/api/grpc/construction-operations#rename-point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `original_point_name` | `PointName` | `Original Point Name` | Required |
| `new_point_name` | `PointName` | `New Point Name` | Required |
| `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |

```python
async def rename_point(
    self,
    original_point_name: PointName,
    new_point_name: PointName,
    *,
    overwrite_if_exists: bool = False,
) -> None: ...
```

```python
await briosa.rename_point(original_point_name, new_point_name)
```

Renames one point.

## Rename Points with Name Pattern

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Points with Name Pattern](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern) · [gRPC contract](/api/grpc/construction-operations#rename-points-with-name-pattern)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_names` | `Iterable[PointName]` | `Point Names` | Required |
| `name_pattern` | `str` | `Name Pattern` | `NewName_%d` |
| `start_value` | `int` | `Start Value` | 1 |

```python
async def rename_points_with_name_pattern(
    self,
    point_names: Iterable[PointName],
    *,
    name_pattern: str = "NewName_%d",
    start_value: int = 1,
) -> None: ...
```

```python
await briosa.rename_points_with_name_pattern(point_names)
```

Renames points using a numbered `%d` name pattern.

## Rename Collection

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Collection](/mp-command-catalog/commands/construction-operations#rename-collection) · [gRPC contract](/api/grpc/construction-operations#rename-collection)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `original_collection_name` | `CollectionName` | `Original Collection Name` | Required |
| `new_collection_name` | `CollectionName` | `New Collection Name` | Required |

```python
async def rename_collection(
    self,
    original_collection_name: CollectionName,
    new_collection_name: CollectionName,
) -> None: ...
```

```python
await briosa.rename_collection(original_collection_name, new_collection_name)
```

Renames one collection.

## Rename Object

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Object](/mp-command-catalog/commands/construction-operations#rename-object) · [gRPC contract](/api/grpc/construction-operations#rename-object)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `original_object_name` | `CollectionObjectName` | `Original Object Name` | Required |
| `new_object_name` | `CollectionObjectName` | `New Object Name` | Required |
| `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |

```python
async def rename_object(
    self,
    original_object_name: CollectionObjectName,
    new_object_name: CollectionObjectName,
    *,
    overwrite_if_exists: bool = False,
) -> None: ...
```

```python
await briosa.rename_object(original_object_name, new_object_name)
```

Renames one collection object.

## Rename Item

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Item](/mp-command-catalog/commands/construction-operations#rename-item) · [gRPC contract](/api/grpc/construction-operations#rename-item)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `original_item_name` | `CollectionItemName` | `Original Item Name` | Required |
| `new_item_name` | `CollectionItemName` | `New Item Name` | Required |
| `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |

```python
async def rename_item(
    self,
    original_item_name: CollectionItemName,
    new_item_name: CollectionItemName,
    *,
    overwrite_if_exists: bool = False,
) -> None: ...
```

```python
await briosa.rename_item(original_item_name, new_item_name)
```

Renames one collection item from SpatialAnalyzer's broader item domain.

## Delete Points

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — destructive fixture validation required.

:::

[Delete Points](/mp-command-catalog/commands/construction-operations#delete-points) · [gRPC contract](/api/grpc/construction-operations#delete-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_names` | `Iterable[PointName]` | `Point Names` | Required |

```python
async def delete_points(
    self,
    point_names: Iterable[PointName],
) -> None: ...
```

```python
await briosa.delete_points(point_names)
```

Deletes the selected points.

## Delete Points WildCard Selection

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — destructive fixture validation required.

:::

[Delete Points WildCard Selection](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection) · [gRPC contract](/api/grpc/construction-operations#delete-points-wildcard-selection)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groups_to_delete_from` | `Iterable[CollectionObjectName]` | `Groups to Delete From` | Required |
| `wildcard_selection_names` | `PointName` | `WildCard Selection Names` | Required |

```python
async def delete_points_wildcard_selection(
    self,
    groups_to_delete_from: Iterable[CollectionObjectName],
    wildcard_selection_names: PointName,
) -> None: ...
```

```python
await briosa.delete_points_wildcard_selection(groups, wildcard_point_name)
```

Deletes matching points within the supplied groups.

## Construct Objects From Surface Faces - Runtime Select

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — interactive fixture validation required.

:::

[Construct Objects From Surface Faces - Runtime Select](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) · [gRPC contract](/api/grpc/construction-operations#construct-objects-from-surface-faces---runtime-select)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_type` | `ConstructObjectType` | `Object Type` | Required |
| `point_offset` | `float` | `Point Offset` | 0 |

```python
class ConstructObjectType(StrEnum):
    ANY = "any"
    CIRCLES = "circles"
    CONES = "cones"
    CYLINDERS = "cylinders"
    LINES = "lines"
    PLANES = "planes"
    SLOTS = "slots"
    SPHERES = "spheres"
    CENTER_POINTS = "center_points"
    SURFACE_POINTS = "surface_points"
    VERTEX_POINTS = "vertex_points"


async def construct_objects_from_surface_faces_runtime_select(
    self,
    object_type: ConstructObjectType,
    *,
    point_offset: float = 0.0,
) -> None: ...
```

```python
await briosa.construct_objects_from_surface_faces_runtime_select(
    ConstructObjectType.PLANES,
)
```

The operator selects surface faces in SpatialAnalyzer while this call is in
progress. Pass a specific type to avoid an extra type-selection dialog, or pass
`ConstructObjectType.ANY` when the operator should choose the type at runtime.
Cancellation does not prove that the SpatialAnalyzer interaction stopped.
