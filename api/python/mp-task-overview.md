---
title: MP Task Overview
description: Next Briosa Python APIs for supported MP Task Overview MP commands.
toc_max_heading_level: 2
---

# MP Task Overview

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Add Task Overview Item

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Task Overview Item](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item) · [gRPC contract](/api/grpc/mp-task-overview#add-task-overview-item)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `task_name` | `str` | `Task Name` | Empty |
| `comment_text` | `str` | `Comment Text` | Empty |
| `effort_index` | `float` | `Effort Index` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_task_overview_item(
    self,
    *,
    task_name: str = '',
    comment_text: str = '',
    effort_index: float = 0.000000,
) -> None: ...
```

```python
await briosa.add_task_overview_item()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Create/Clear Task Overview List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Create/Clear Task Overview List](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list) · [gRPC contract](/api/grpc/mp-task-overview#createclear-task-overview-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `task_name_font` | `Font` | `Task Name Font` | MS Shell Dlg |
| `task_comment_font` | `Font` | `Task Comment Font` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def create_clear_task_overview_list(
    self,
    *,
    task_name_font: Font = Font.DEFAULT,
    task_comment_font: Font = Font.DEFAULT,
) -> None: ...
```

```python
await briosa.create_clear_task_overview_list()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Current Task

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Current Task](/mp-command-catalog/commands/mp-task-overview#set-current-task) · [gRPC contract](/api/grpc/mp-task-overview#set-current-task)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `task_index` | `int` | `Task Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_current_task(
    self,
    *,
    task_index: int = 0,
) -> None: ...
```

```python
await briosa.set_current_task()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Overview Image

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Overview Image](/mp-command-catalog/commands/mp-task-overview#set-overview-image) · [gRPC contract](/api/grpc/mp-task-overview#set-overview-image)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `image_path` | `FileReference` | `Image Path` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_overview_image(
    self,
    image_path: FileReference,
) -> None: ...
```

```python
await briosa.set_overview_image(image_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Overview Title

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Overview Title](/mp-command-catalog/commands/mp-task-overview#set-overview-title) · [gRPC contract](/api/grpc/mp-task-overview#set-overview-title)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `overview_title` | `str` | `Overview Title` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_overview_title(
    self,
    *,
    overview_title: str = '',
) -> None: ...
```

```python
await briosa.set_overview_title()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Task Item Comment

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Task Item Comment](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-comment)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `task_index` | `int` | `Task Index` | 0 |
| `task_comment` | `str` | `Task Comment` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_task_item_comment(
    self,
    *,
    task_index: int = 0,
    task_comment: str = '',
) -> None: ...
```

```python
await briosa.set_task_item_comment()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Task Item Completion Values

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Task Item Completion Values](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-completion-values)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `task_index` | `int` | `Task Index` | 0 |
| `increments_completed` | `int` | `Increments Completed` | 0 |
| `total_increments` | `int` | `Total Increments` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_task_item_completion_values(
    self,
    *,
    task_index: int = 0,
    increments_completed: int = 0,
    total_increments: int = 0,
) -> None: ...
```

```python
await briosa.set_task_item_completion_values()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Task Item Name

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Task Item Name](/mp-command-catalog/commands/mp-task-overview#set-task-item-name) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-name)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `task_item_index` | `int` | `Task Item Index` | 0 |
| `task_name` | `str` | `Task Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_task_item_name(
    self,
    *,
    task_item_index: int = 0,
    task_name: str = '',
) -> None: ...
```

```python
await briosa.set_task_item_name()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show Progress for Task Item

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show Progress for Task Item](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item) · [gRPC contract](/api/grpc/mp-task-overview#show-progress-for-task-item)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `task_index` | `int` | `Task Index` | 0 |
| `show_progress` | `bool` | `Show Progress?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_progress_for_task_item(
    self,
    *,
    task_index: int = 0,
    show_progress: bool = False,
) -> None: ...
```

```python
await briosa.show_progress_for_task_item()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Show Task Overview List

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Show Task Overview List](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list) · [gRPC contract](/api/grpc/mp-task-overview#show-task-overview-list)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `show` | `bool` | `Show?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def show_task_overview_list(
    self,
    *,
    show: bool = False,
) -> None: ...
```

```python
await briosa.show_task_overview_list()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
