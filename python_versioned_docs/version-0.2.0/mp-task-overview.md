---
title: MP Task Overview
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# MP Task Overview

[SA 2026.1.0529.7](/api/python/mp-task-overview) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/mp-task-overview)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Task Overview Item {/* #add-task-overview-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item) · [gRPC Contract](/api/grpc/mp-task-overview#add-task-overview-item)

```python
async def add_task_overview_item(
        self,
        *,
        task_name: str = "",
        comment_text: str = "",
        effort_index: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create/Clear Task Overview List {/* #createclear-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list) · [gRPC Contract](/api/grpc/mp-task-overview#createclear-task-overview-list)

```python
async def create_clear_task_overview_list(
        self,
        *,
        task_name_font: Font = Font.DEFAULT,
        task_comment_font: Font = Font.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Current Task {/* #set-current-task */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-current-task) · [gRPC Contract](/api/grpc/mp-task-overview#set-current-task)

```python
async def set_current_task(
        self,
        *,
        task_index: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Overview Image {/* #set-overview-image */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-image) · [gRPC Contract](/api/grpc/mp-task-overview#set-overview-image)

```python
async def set_overview_image(
        self,
        image_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Overview Title {/* #set-overview-title */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-title) · [gRPC Contract](/api/grpc/mp-task-overview#set-overview-title)

```python
async def set_overview_title(
        self,
        *,
        overview_title: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Comment {/* #set-task-item-comment */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-comment)

```python
async def set_task_item_comment(
        self,
        *,
        task_index: int = 0,
        task_comment: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Completion Values {/* #set-task-item-completion-values */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-completion-values)

```python
async def set_task_item_completion_values(
        self,
        *,
        task_index: int = 0,
        increments_completed: int = 0,
        total_increments: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Name {/* #set-task-item-name */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-name) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-name)

```python
async def set_task_item_name(
        self,
        *,
        task_item_index: int = 0,
        task_name: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Progress for Task Item {/* #show-progress-for-task-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item) · [gRPC Contract](/api/grpc/mp-task-overview#show-progress-for-task-item)

```python
async def show_progress_for_task_item(
        self,
        *,
        task_index: int = 0,
        show_progress: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Task Overview List {/* #show-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list) · [gRPC Contract](/api/grpc/mp-task-overview#show-task-overview-list)

```python
async def show_task_overview_list(
        self,
        *,
        show: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
