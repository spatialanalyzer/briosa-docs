---
title: Event Operations
description: Next Briosa Python APIs for supported Event Operations MP commands.
toc_max_heading_level: 2
---

# Event Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Delete Event

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Event](/mp-command-catalog/commands/event-operations#delete-event) · [gRPC contract](/api/grpc/event-operations#delete-event)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `event_name` | `CollectionObjectName` | `Event Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_event(
    self,
    event_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_event(event_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Export Event Ref List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Export Event Ref List](/mp-command-catalog/commands/event-operations#export-event-ref-list) · [gRPC contract](/api/grpc/event-operations#export-event-ref-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `event_list` | `Iterable[CollectionObjectName]` | `Event List` | Required |
| `file_path` | `FileReference` | `File Path` | Required |
| `decimal_precision` | `int` | `Decimal Precision` | 6 |
| `overwrite_existing_file` | `bool` | `Overwrite existing file?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def export_event_ref_list(
    self,
    event_list: Iterable[CollectionObjectName],
    file_path: FileReference,
    *,
    decimal_precision: int = 6,
    overwrite_existing_file: bool = False,
) -> None: ...
```

```python
await briosa.export_event_ref_list(event_list=..., file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get i-th Event From Event Ref List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get i-th Event From Event Ref List](/mp-command-catalog/commands/event-operations#get-i-th-event-from-event-ref-list) · [gRPC contract](/api/grpc/event-operations#get-i-th-event-from-event-ref-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `event_list` | `Iterable[CollectionObjectName]` | `Event List` | Required |
| `event_index` | `int` | `Event Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `resultant_item` | `CollectionObjectName` | `Resultant Item` |

```python
async def get_ith_event_from_event_ref_list(
    self,
    event_list: Iterable[CollectionObjectName],
    *,
    event_index: int = 0,
) -> CollectionObjectName: ...
```

```python
await briosa.get_ith_event_from_event_ref_list(event_list=...)
```

Returns the MP output `Resultant Item` directly as `CollectionObjectName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Number of Events in Event Ref List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Number of Events in Event Ref List](/mp-command-catalog/commands/event-operations#get-number-of-events-in-event-ref-list) · [gRPC contract](/api/grpc/event-operations#get-number-of-events-in-event-ref-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `event_list` | `Iterable[CollectionObjectName]` | `Event List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `total_count` | `int` | `Total Count` |

```python
async def get_number_of_events_in_event_ref_list(
    self,
    event_list: Iterable[CollectionObjectName],
) -> int: ...
```

```python
await briosa.get_number_of_events_in_event_ref_list(event_list=...)
```

Returns the MP output `Total Count` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Rename Event

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Rename Event](/mp-command-catalog/commands/event-operations#rename-event) · [gRPC contract](/api/grpc/event-operations#rename-event)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `original_event_name` | `CollectionObjectName` | `Original Event Name` | Required |
| `new_event_name` | `CollectionObjectName` | `New Event Name` | Required |
| `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def rename_event(
    self,
    original_event_name: CollectionObjectName,
    new_event_name: CollectionObjectName,
    *,
    overwrite_if_exists: bool = False,
) -> None: ...
```

```python
await briosa.rename_event(original_event_name=..., new_event_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
