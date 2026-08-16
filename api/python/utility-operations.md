---
title: Utility Operations
description: Next Briosa Python APIs for supported Utility Operations MP commands.
toc_max_heading_level: 2
---

# Utility Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Close All Watch Windows

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Close All Watch Windows](/mp-command-catalog/commands/utility-operations#close-all-watch-windows) · [gRPC contract](/api/grpc/utility-operations#close-all-watch-windows)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def close_all_watch_windows(self) -> None: ...
```

```python
await briosa.close_all_watch_windows()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Folder

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Folder](/mp-command-catalog/commands/utility-operations#delete-folder) · [gRPC contract](/api/grpc/utility-operations#delete-folder)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folder_path` | `str` | `Folder Path` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_folder(
    self,
    *,
    folder_path: str = '',
) -> None: ...
```

```python
await briosa.delete_folder()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Items

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Items](/mp-command-catalog/commands/utility-operations#delete-items) · [gRPC contract](/api/grpc/utility-operations#delete-items)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `item_list` | `Iterable[CollectionItemName]` | `Item List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_items(
    self,
    item_list: Iterable[CollectionItemName],
) -> None: ...
```

```python
await briosa.delete_items(item_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Objects](/mp-command-catalog/commands/utility-operations#delete-objects) · [gRPC contract](/api/grpc/utility-operations#delete-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_names` | `Iterable[CollectionObjectName]` | `Object Names` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_objects(
    self,
    object_names: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.delete_objects(object_names=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Active Language

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Active Language](/mp-command-catalog/commands/utility-operations#get-active-language) · [gRPC contract](/api/grpc/utility-operations#get-active-language)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `language_file_name` | `FileReference` | `Language File Name` |
| `custom_language` | `bool` | `Custom Language?` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetActiveLanguageResult:
    language_file_name: FileReference
    custom_language: bool

async def get_active_language(self) -> GetActiveLanguageResult: ...
```

```python
await briosa.get_active_language()
```

Returns the 2 MP outputs in the named `GetActiveLanguageResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Active Units

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Active Units](/mp-command-catalog/commands/utility-operations#get-active-units) · [gRPC contract](/api/grpc/utility-operations#get-active-units)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `length` | `str` | `Length` |
| `angular` | `str` | `Angular` |
| `temperature` | `str` | `Temperature` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ActiveUnits:
    length: str
    angular: str
    temperature: str

async def get_active_units(self) -> ActiveUnits: ...
```

```python
await briosa.get_active_units()
```

Returns the 3 MP outputs in the named `ActiveUnits` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Angular Representation

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Angular Representation](/mp-command-catalog/commands/utility-operations#get-angular-representation) · [gRPC contract](/api/grpc/utility-operations#get-angular-representation)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value_0_360_false_180` | `bool` | `0-360, (FALSE = +/-180)` |

```python
async def get_angular_representation(self) -> bool: ...
```

```python
await briosa.get_angular_representation()
```

Returns the MP output `0-360, (FALSE = +/-180)` directly as `bool`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Collection Notes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Collection Notes](/mp-command-catalog/commands/utility-operations#get-collection-notes) · [gRPC contract](/api/grpc/utility-operations#get-collection-notes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `notes` | `list[str]` | `Notes` |

```python
async def get_collection_notes(
    self,
    collection: CollectionName,
) -> list[str]: ...
```

```python
await briosa.get_collection_notes(collection=...)
```

Returns the MP output `Notes` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Folder Collections

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Folder Collections](/mp-command-catalog/commands/utility-operations#get-folder-collections) · [gRPC contract](/api/grpc/utility-operations#get-folder-collections)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folder_path` | `str` | `Folder Path` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `collection_list` | `list[str]` | `Collection List` |

```python
async def get_folder_collections(
    self,
    *,
    folder_path: str = '',
) -> list[str]: ...
```

```python
await briosa.get_folder_collections()
```

Returns the MP output `Collection List` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Folder Notes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Folder Notes](/mp-command-catalog/commands/utility-operations#get-folder-notes) · [gRPC contract](/api/grpc/utility-operations#get-folder-notes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folder_path` | `str` | `Folder Path` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `notes` | `list[str]` | `Notes` |

```python
async def get_folder_notes(
    self,
    *,
    folder_path: str = '',
) -> list[str]: ...
```

```python
await briosa.get_folder_notes()
```

Returns the MP output `Notes` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Folders by Wildcard

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Folders by Wildcard](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard) · [gRPC contract](/api/grpc/utility-operations#get-folders-by-wildcard)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `search_string` | `str` | `Search String` | Empty |
| `case_sensitive_search` | `bool` | `Case Sensitive Search` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `folder_list` | `list[str]` | `Folder List` |

```python
async def get_folders_by_wildcard(
    self,
    *,
    search_string: str = '',
    case_sensitive_search: bool = True,
) -> list[str]: ...
```

```python
await briosa.get_folders_by_wildcard()
```

Returns the MP output `Folder List` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Object Notes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Object Notes](/mp-command-catalog/commands/utility-operations#get-object-notes) · [gRPC contract](/api/grpc/utility-operations#get-object-notes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object` | `CollectionObjectName` | `Object` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `notes` | `list[str]` | `Notes` |

```python
async def get_object_notes(
    self,
    object: CollectionObjectName,
) -> list[str]: ...
```

```python
await briosa.get_object_notes(object=...)
```

Returns the MP output `Notes` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get OPC DA Tag Value Double

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get OPC DA Tag Value Double](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-double)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opc_server_da_tag_name` | `str` | `OPC Server DA Tag Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `float` | `Value` |

```python
async def get_opc_da_tag_value_double(
    self,
    *,
    opc_server_da_tag_name: str = '',
) -> float: ...
```

```python
await briosa.get_opc_da_tag_value_double()
```

Returns the MP output `Value` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get OPC DA Tag Value Integer

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get OPC DA Tag Value Integer](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-integer)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opc_server_da_tag_name` | `str` | `OPC Server DA Tag Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `int` | `Value` |

```python
async def get_opc_da_tag_value_integer(
    self,
    *,
    opc_server_da_tag_name: str = '',
) -> int: ...
```

```python
await briosa.get_opc_da_tag_value_integer()
```

Returns the MP output `Value` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get OPC DA Tag Value String

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get OPC DA Tag Value String](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-string)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opc_server_da_tag_name` | `str` | `OPC Server DA Tag Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `str` | `Value` |

```python
async def get_opc_da_tag_value_string(
    self,
    *,
    opc_server_da_tag_name: str = '',
) -> str: ...
```

```python
await briosa.get_opc_da_tag_value_string()
```

Returns the MP output `Value` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point Notes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Point Notes](/mp-command-catalog/commands/utility-operations#get-point-notes) · [gRPC contract](/api/grpc/utility-operations#get-point-notes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `notes` | `list[str]` | `Notes` |

```python
async def get_point_notes(
    self,
    point: PointName,
) -> list[str]: ...
```

```python
await briosa.get_point_notes(point=...)
```

Returns the MP output `Notes` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Screen Resolution

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Screen Resolution](/mp-command-catalog/commands/utility-operations#get-screen-resolution) · [gRPC contract](/api/grpc/utility-operations#get-screen-resolution)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `display_1_primary` | `int` | `Display (-1 = Primary)` | -1 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `integer_window_top_left_x_position` | `int` | `Integer Window Top Left X Position` |
| `integer_window_top_left_y_position` | `int` | `Integer Window Top Left Y Position` |
| `integer_width` | `int` | `Integer Width` |
| `integer_height` | `int` | `Integer Height` |
| `view_width` | `int` | `View Width` |
| `view_height` | `int` | `View Height` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetScreenResolutionResult:
    integer_window_top_left_x_position: int
    integer_window_top_left_y_position: int
    integer_width: int
    integer_height: int
    view_width: int
    view_height: int

async def get_screen_resolution(
    self,
    *,
    display_1_primary: int = -1,
) -> GetScreenResolutionResult: ...
```

```python
await briosa.get_screen_resolution()
```

Returns the 6 MP outputs in the named `GetScreenResolutionResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Working Frame Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Working Frame Properties](/mp-command-catalog/commands/utility-operations#get-working-frame-properties) · [gRPC contract](/api/grpc/utility-operations#get-working-frame-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `frame_name` | `str` | `Frame Name` |
| `collection_name` | `str` | `Collection Name` |
| `working_frame` | `CollectionObjectName` | `Working Frame` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class WorkingFrameProperties:
    frame_name: str
    collection_name: str
    working_frame: CollectionObjectName

async def get_working_frame_properties(self) -> WorkingFrameProperties: ...
```

```python
await briosa.get_working_frame_properties()
```

Returns the 3 MP outputs in the named `WorkingFrameProperties` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Increment Point Name

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Increment Point Name](/mp-command-catalog/commands/utility-operations#increment-point-name) · [gRPC contract](/api/grpc/utility-operations#increment-point-name)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `base_point_name` | `PointName` | `'Base' Point Name` | Required |
| `increment` | `int` | `Increment` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `resultant_point_name` | `PointName` | `Resultant Point Name` |

```python
async def increment_point_name(
    self,
    base_point_name: PointName,
    *,
    increment: int = 0,
) -> PointName: ...
```

```python
await briosa.increment_point_name(base_point_name=...)
```

Returns the MP output `Resultant Point Name` directly as `PointName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Lock Imported Items

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Lock Imported Items](/mp-command-catalog/commands/utility-operations#lock-imported-items) · [gRPC contract](/api/grpc/utility-operations#lock-imported-items)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lock_items` | `bool` | `Lock Items?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def lock_imported_items(
    self,
    *,
    lock_items: bool = False,
) -> None: ...
```

```python
await briosa.lock_imported_items()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Lock/Unlock Selected Items

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Lock/Unlock Selected Items](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items) · [gRPC contract](/api/grpc/utility-operations#lockunlock-selected-items)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `item_list` | `Iterable[CollectionItemName]` | `Item List` | Required |
| `instruments` | `Iterable[CollectionInstrumentId]` | `Instruments` | Required |
| `lock_items` | `bool` | `Lock Items?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def lock_unlock_selected_items(
    self,
    item_list: Iterable[CollectionItemName],
    instruments: Iterable[CollectionInstrumentId],
    *,
    lock_items: bool = False,
) -> None: ...
```

```python
await briosa.lock_unlock_selected_items(item_list=..., instruments=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Lock/Unlock Trapping Control

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Lock/Unlock Trapping Control](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control) · [gRPC contract](/api/grpc/utility-operations#lockunlock-trapping-control)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_ref_list` | `Iterable[CollectionItemName]` | `Relationship Ref List` | Required |
| `feature_check_ref_list` | `Iterable[CollectionItemName]` | `Feature Check Ref List` | Required |
| `datum_ref_list` | `Iterable[CollectionObjectName]` | `Datum Ref List` | Required |
| `lock_out_trapping` | `bool` | `Lock Out Trapping?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def lock_unlock_trapping_control(
    self,
    relationship_ref_list: Iterable[CollectionItemName],
    feature_check_ref_list: Iterable[CollectionItemName],
    datum_ref_list: Iterable[CollectionObjectName],
    *,
    lock_out_trapping: bool = False,
) -> None: ...
```

```python
await briosa.lock_unlock_trapping_control(relationship_ref_list=..., feature_check_ref_list=..., datum_ref_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Move Collection to Folder

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Move Collection to Folder](/mp-command-catalog/commands/utility-operations#move-collection-to-folder) · [gRPC contract](/api/grpc/utility-operations#move-collection-to-folder)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |
| `folder_path` | `str` | `Folder Path` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def move_collection_to_folder(
    self,
    collection: CollectionName,
    *,
    folder_path: str = '',
) -> None: ...
```

```python
await briosa.move_collection_to_folder(collection=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Move Folder to Folder

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Move Folder to Folder](/mp-command-catalog/commands/utility-operations#move-folder-to-folder) · [gRPC contract](/api/grpc/utility-operations#move-folder-to-folder)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `source_folder_path` | `str` | `Source Folder Path` | Empty |
| `destination_folder_path` | `str` | `Destination Folder Path` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def move_folder_to_folder(
    self,
    *,
    source_folder_path: str = '',
    destination_folder_path: str = '',
) -> None: ...
```

```python
await briosa.move_folder_to_folder()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Move Instruments Drag Graphically

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Move Instruments Drag Graphically](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically) · [gRPC contract](/api/grpc/utility-operations#move-instruments-drag-graphically)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instruments` | `Iterable[CollectionInstrumentId]` | `Instruments` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def move_instruments_drag_graphically(
    self,
    instruments: Iterable[CollectionInstrumentId],
) -> None: ...
```

```python
await briosa.move_instruments_drag_graphically(instruments=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Move Objects Drag Graphically

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Move Objects Drag Graphically](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically) · [gRPC contract](/api/grpc/utility-operations#move-objects-drag-graphically)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `Iterable[CollectionObjectName]` | `Objects` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def move_objects_drag_graphically(
    self,
    objects: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.move_objects_drag_graphically(objects=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Scale Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Scale Objects](/mp-command-catalog/commands/utility-operations#scale-objects) · [gRPC contract](/api/grpc/utility-operations#scale-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `Iterable[CollectionObjectName]` | `Objects` | Required |
| `scale_factor` | `float` | `Scale Factor` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def scale_objects(
    self,
    objects: Iterable[CollectionObjectName],
    *,
    scale_factor: float = 0.000000,
) -> None: ...
```

```python
await briosa.scale_objects(objects=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Active Custom Language

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Active Custom Language](/mp-command-catalog/commands/utility-operations#set-active-custom-language) · [gRPC contract](/api/grpc/utility-operations#set-active-custom-language)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `language_file_name` | `FileReference` | `Language File Name` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_active_custom_language(
    self,
    language_file_name: FileReference,
    *,
    font: Font = Font.DEFAULT,
) -> None: ...
```

```python
await briosa.set_active_custom_language(language_file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Active Units

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Active Units](/mp-command-catalog/commands/utility-operations#set-active-units) · [gRPC contract](/api/grpc/utility-operations#set-active-units)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `length` | `DistanceUnits` | `Length` | Inches |
| `display_inch_fractions` | `bool` | `Display Inch Fractions?` | false |
| `inch_fraction_denominator` | `float` | `Inch Fraction Denominator?` | 16.000000 |
| `simplify_inch_fraction` | `bool` | `Simplify Inch Fraction?` | true |
| `temperature` | `TemperatureUnits` | `Temperature` | Fahrenheit |
| `angular` | `AngularUnits` | `Angular` | Degrees |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_active_units(
    self,
    *,
    length: DistanceUnits = DistanceUnits.INCHES,
    display_inch_fractions: bool = False,
    inch_fraction_denominator: float = 16.000000,
    simplify_inch_fraction: bool = True,
    temperature: TemperatureUnits = TemperatureUnits.FAHRENHEIT,
    angular: AngularUnits = AngularUnits.DEGREES,
) -> None: ...
```

```python
await briosa.set_active_units()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Angular Representation

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Angular Representation](/mp-command-catalog/commands/utility-operations#set-angular-representation) · [gRPC contract](/api/grpc/utility-operations#set-angular-representation)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `value_0_360_false_180` | `bool` | `0-360, (FALSE = +/-180)` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_angular_representation(
    self,
    *,
    value_0_360_false_180: bool = False,
) -> None: ...
```

```python
await briosa.set_angular_representation()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Auto Event Creation

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Auto Event Creation](/mp-command-catalog/commands/utility-operations#set-auto-event-creation) · [gRPC contract](/api/grpc/utility-operations#set-auto-event-creation)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `bool` | `Active?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_auto_event_creation(
    self,
    *,
    active: bool = False,
) -> None: ...
```

```python
await briosa.set_auto_event_creation()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Automatic Backup State

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Automatic Backup State](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state) · [gRPC contract](/api/grpc/utility-operations#set-automatic-backup-state)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `auto_job_file_restore_points_active` | `bool` | `Auto Job File Restore Points Active?` | true |
| `auto_measurements_backup_active` | `bool` | `Auto Measurements Backup Active?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_automatic_backup_state(
    self,
    *,
    auto_job_file_restore_points_active: bool = True,
    auto_measurements_backup_active: bool = True,
) -> None: ...
```

```python
await briosa.set_automatic_backup_state()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Automatic Relationship Construction State

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Automatic Relationship Construction State](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state) · [gRPC contract](/api/grpc/utility-operations#set-automatic-relationship-construction-state)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `bool` | `Active?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_automatic_relationship_construction_state(
    self,
    *,
    active: bool = False,
) -> None: ...
```

```python
await briosa.set_automatic_relationship_construction_state()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Collection Notes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Collection Notes](/mp-command-catalog/commands/utility-operations#set-collection-notes) · [gRPC contract](/api/grpc/utility-operations#set-collection-notes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |
| `notes` | `Iterable[str]` | `Notes` | Required |
| `append_false_overwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_collection_notes(
    self,
    collection: CollectionName,
    notes: Iterable[str],
    *,
    append_false_overwrite: bool = True,
) -> None: ...
```

```python
await briosa.set_collection_notes(collection=..., notes=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Decimal Digits for Display

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Decimal Digits for Display](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display) · [gRPC contract](/api/grpc/utility-operations#set-decimal-digits-for-display)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `length` | `int` | `Length` | 4 |
| `angle` | `int` | `Angle` | 4 |
| `scale` | `int` | `Scale` | 6 |
| `unit_vector` | `int` | `Unit Vector` | 6 |
| `weight` | `int` | `Weight` | 3 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_decimal_digits_for_display(
    self,
    *,
    length: int = 4,
    angle: int = 4,
    scale: int = 6,
    unit_vector: int = 6,
    weight: int = 3,
) -> None: ...
```

```python
await briosa.set_decimal_digits_for_display()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Folder Notes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Folder Notes](/mp-command-catalog/commands/utility-operations#set-folder-notes) · [gRPC contract](/api/grpc/utility-operations#set-folder-notes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folder_path` | `str` | `Folder Path` | Empty |
| `notes` | `Iterable[str]` | `Notes` | Required |
| `append_false_overwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_folder_notes(
    self,
    *,
    folder_path: str = '',
    notes: Iterable[str],
    append_false_overwrite: bool = True,
) -> None: ...
```

```python
await briosa.set_folder_notes(notes=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Interaction Mode

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Interaction Mode](/mp-command-catalog/commands/utility-operations#set-interaction-mode) · [gRPC contract](/api/grpc/utility-operations#set-interaction-mode)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sa_interaction_mode` | `SaInteractionMode` | `SA Interaction Mode` | Required |
| `measurement_plan_interaction_mode` | `MpInteractionMode` | `Measurement Plan Interaction Mode` | Required |
| `measurement_plan_dialog_interaction_mode` | `MpDialogInteractionMode` | `Measurement Plan Dialog Interaction Mode` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_interaction_mode(
    self,
    sa_interaction_mode: SaInteractionMode,
    measurement_plan_interaction_mode: MpInteractionMode,
    measurement_plan_dialog_interaction_mode: MpDialogInteractionMode,
) -> None: ...
```

```python
await briosa.set_interaction_mode(sa_interaction_mode=..., measurement_plan_interaction_mode=..., measurement_plan_dialog_interaction_mode=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Logging State

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Logging State](/mp-command-catalog/commands/utility-operations#set-logging-state) · [gRPC contract](/api/grpc/utility-operations#set-logging-state)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `bool` | `Active?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_logging_state(
    self,
    *,
    active: bool = False,
) -> None: ...
```

```python
await briosa.set_logging_state()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Notification Cancel Override

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Notification Cancel Override](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override) · [gRPC contract](/api/grpc/utility-operations#set-notification-cancel-override)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `prohibit_cancel` | `bool` | `Prohibit Cancel?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_notification_cancel_override(
    self,
    *,
    prohibit_cancel: bool = True,
) -> None: ...
```

```python
await briosa.set_notification_cancel_override()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Object Notes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Object Notes](/mp-command-catalog/commands/utility-operations#set-object-notes) · [gRPC contract](/api/grpc/utility-operations#set-object-notes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object` | `CollectionObjectName` | `Object` | Required |
| `notes` | `Iterable[str]` | `Notes` | Required |
| `append_false_overwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_object_notes(
    self,
    object: CollectionObjectName,
    notes: Iterable[str],
    *,
    append_false_overwrite: bool = True,
) -> None: ...
```

```python
await briosa.set_object_notes(object=..., notes=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set OPC DA Tag Value Double

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set OPC DA Tag Value Double](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-double)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opc_server_da_tag_name` | `str` | `OPC Server DA Tag Name` | Empty |
| `value` | `float` | `Value` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_opc_da_tag_value_double(
    self,
    *,
    opc_server_da_tag_name: str = '',
    value: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_opc_da_tag_value_double()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set OPC DA Tag Value Integer

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set OPC DA Tag Value Integer](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-integer)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opc_server_da_tag_name` | `str` | `OPC Server DA Tag Name` | Empty |
| `value` | `int` | `Value` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_opc_da_tag_value_integer(
    self,
    *,
    opc_server_da_tag_name: str = '',
    value: int = 0,
) -> None: ...
```

```python
await briosa.set_opc_da_tag_value_integer()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set OPC DA Tag Value String

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set OPC DA Tag Value String](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-string)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opc_server_da_tag_name` | `str` | `OPC Server DA Tag Name` | Empty |
| `value` | `str` | `Value` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_opc_da_tag_value_string(
    self,
    *,
    opc_server_da_tag_name: str = '',
    value: str = '',
) -> None: ...
```

```python
await briosa.set_opc_da_tag_value_string()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Point Notes

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Point Notes](/mp-command-catalog/commands/utility-operations#set-point-notes) · [gRPC contract](/api/grpc/utility-operations#set-point-notes)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |
| `notes` | `Iterable[str]` | `Notes` | Required |
| `append_false_overwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_point_notes(
    self,
    point: PointName,
    notes: Iterable[str],
    *,
    append_false_overwrite: bool = True,
) -> None: ...
```

```python
await briosa.set_point_notes(point=..., notes=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set User Interface Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set User Interface Profile](/mp-command-catalog/commands/utility-operations#set-user-interface-profile) · [gRPC contract](/api/grpc/utility-operations#set-user-interface-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `profile_name` | `str` | `Profile Name` | Default |
| `profile_file_name_optional` | `FileReference` | `Profile File Name (optional)` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_user_interface_profile(
    self,
    *,
    profile_name: str = "Default",
    profile_file_name_optional: FileReference,
) -> None: ...
```

```python
await briosa.set_user_interface_profile(profile_file_name_optional=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set View Idle Update Frequency

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set View Idle Update Frequency](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency) · [gRPC contract](/api/grpc/utility-operations#set-view-idle-update-frequency)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `idle_count` | `int` | `Idle Count` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_view_idle_update_frequency(
    self,
    *,
    idle_count: int = 0,
) -> None: ...
```

```python
await briosa.set_view_idle_update_frequency()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set WildCard Asterisk Mode

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set WildCard Asterisk Mode](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode) · [gRPC contract](/api/grpc/utility-operations#set-wildcard-asterisk-mode)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `auto_wrap_search_string` | `bool` | `Auto Wrap Search String?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_wild_card_asterisk_mode(
    self,
    *,
    auto_wrap_search_string: bool = True,
) -> None: ...
```

```python
await briosa.set_wild_card_asterisk_mode()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Working Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Working Frame](/mp-command-catalog/commands/utility-operations#set-working-frame) · [gRPC contract](/api/grpc/utility-operations#set-working-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `new_working_frame_name` | `CollectionObjectName` | `New Working Frame Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_working_frame(
    self,
    new_working_frame_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_working_frame(new_working_frame_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Status Dialog

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Status Dialog](/mp-command-catalog/commands/utility-operations#status-dialog) · [gRPC contract](/api/grpc/utility-operations#status-dialog)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dialog_title` | `str` | `Dialog Title` | Empty |
| `text_message` | `str` | `Text Message` | Empty |
| `current_position` | `int` | `Current Position` | 0 |
| `upper_limit` | `int` | `Upper Limit` | 0 |
| `suppress_time_remaining` | `bool` | `Suppress Time Remaining?` | true |
| `close_dialog` | `bool` | `Close Dialog?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def status_dialog(
    self,
    *,
    dialog_title: str = '',
    text_message: str = '',
    current_position: int = 0,
    upper_limit: int = 0,
    suppress_time_remaining: bool = True,
    close_dialog: bool = False,
) -> None: ...
```

```python
await briosa.status_dialog()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Trim Log File

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Trim Log File](/mp-command-catalog/commands/utility-operations#trim-log-file) · [gRPC contract](/api/grpc/utility-operations#trim-log-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `number_of_entries_to_keep` | `int` | `Number of Entries to Keep` | 10 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def trim_log_file(
    self,
    *,
    number_of_entries_to_keep: int = 10,
) -> None: ...
```

```python
await briosa.trim_log_file()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Write to Log

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Write to Log](/mp-command-catalog/commands/utility-operations#write-to-log) · [gRPC contract](/api/grpc/utility-operations#write-to-log)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `log_entry` | `str` | `Log Entry` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def write_to_log(
    self,
    *,
    log_entry: str = '',
) -> None: ...
```

```python
await briosa.write_to_log()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
