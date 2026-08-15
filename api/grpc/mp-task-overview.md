---
title: MP Task Overview
description: Current and next gRPC contracts for supported MP Task Overview MP commands.
toc_max_heading_level: 2
---

# MP Task Overview

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Add Task Overview Item

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Task Overview Item](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item) |
| Service | `briosa.MpTaskOverview` |
| RPC | `AddTaskOverviewItem` |
| Operation ID | `mp_task_overview.add_task_overview_item` |
| Route | `/briosa.MpTaskOverview/AddTaskOverviewItem` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_name` | `string` | `Task Name` | Empty |
| Request | 2 | `comment_text` | `string` | `Comment Text` | Empty |
| Request | 3 | `effort_index` | `double` | `Effort Index` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddTaskOverviewItem(AddTaskOverviewItemRequest) returns (AddTaskOverviewItemResult);

message AddTaskOverviewItemRequest {
  optional string task_name = 1;
  optional string comment_text = 2;
  optional double effort_index = 3;
}

message AddTaskOverviewItemResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Create/Clear Task Overview List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Create/Clear Task Overview List](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list) |
| Service | `briosa.MpTaskOverview` |
| RPC | `CreateClearTaskOverviewList` |
| Operation ID | `mp_task_overview.create_clear_task_overview_list` |
| Route | `/briosa.MpTaskOverview/CreateClearTaskOverviewList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_name_font` | `Font` | `Task Name Font` | MS Shell Dlg |
| Request | 2 | `task_comment_font` | `Font` | `Task Comment Font` | MS Shell Dlg |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CreateClearTaskOverviewList(CreateClearTaskOverviewListRequest) returns (CreateClearTaskOverviewListResult);

message CreateClearTaskOverviewListRequest {
  optional Font task_name_font = 1;
  optional Font task_comment_font = 2;
}

message CreateClearTaskOverviewListResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Current Task

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Current Task](/mp-command-catalog/commands/mp-task-overview#set-current-task) |
| Service | `briosa.MpTaskOverview` |
| RPC | `SetCurrentTask` |
| Operation ID | `mp_task_overview.set_current_task` |
| Route | `/briosa.MpTaskOverview/SetCurrentTask` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_index` | `int32` | `Task Index` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCurrentTask(SetCurrentTaskRequest) returns (SetCurrentTaskResult);

message SetCurrentTaskRequest {
  optional int32 task_index = 1;
}

message SetCurrentTaskResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Overview Image

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Overview Image](/mp-command-catalog/commands/mp-task-overview#set-overview-image) |
| Service | `briosa.MpTaskOverview` |
| RPC | `SetOverviewImage` |
| Operation ID | `mp_task_overview.set_overview_image` |
| Route | `/briosa.MpTaskOverview/SetOverviewImage` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `image_path` | `FileReference` | `Image Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetOverviewImage(SetOverviewImageRequest) returns (SetOverviewImageResult);

message SetOverviewImageRequest {
  optional FileReference image_path = 1;
}

message SetOverviewImageResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Overview Title

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Overview Title](/mp-command-catalog/commands/mp-task-overview#set-overview-title) |
| Service | `briosa.MpTaskOverview` |
| RPC | `SetOverviewTitle` |
| Operation ID | `mp_task_overview.set_overview_title` |
| Route | `/briosa.MpTaskOverview/SetOverviewTitle` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `overview_title` | `string` | `Overview Title` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetOverviewTitle(SetOverviewTitleRequest) returns (SetOverviewTitleResult);

message SetOverviewTitleRequest {
  optional string overview_title = 1;
}

message SetOverviewTitleResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Task Item Comment

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Task Item Comment](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment) |
| Service | `briosa.MpTaskOverview` |
| RPC | `SetTaskItemComment` |
| Operation ID | `mp_task_overview.set_task_item_comment` |
| Route | `/briosa.MpTaskOverview/SetTaskItemComment` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_index` | `int32` | `Task Index` | 0 |
| Request | 2 | `task_comment` | `string` | `Task Comment` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetTaskItemComment(SetTaskItemCommentRequest) returns (SetTaskItemCommentResult);

message SetTaskItemCommentRequest {
  optional int32 task_index = 1;
  optional string task_comment = 2;
}

message SetTaskItemCommentResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Task Item Completion Values

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Task Item Completion Values](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values) |
| Service | `briosa.MpTaskOverview` |
| RPC | `SetTaskItemCompletionValues` |
| Operation ID | `mp_task_overview.set_task_item_completion_values` |
| Route | `/briosa.MpTaskOverview/SetTaskItemCompletionValues` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_index` | `int32` | `Task Index` | 0 |
| Request | 2 | `increments_completed` | `int32` | `Increments Completed` | 0 |
| Request | 3 | `total_increments` | `int32` | `Total Increments` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetTaskItemCompletionValues(SetTaskItemCompletionValuesRequest) returns (SetTaskItemCompletionValuesResult);

message SetTaskItemCompletionValuesRequest {
  optional int32 task_index = 1;
  optional int32 increments_completed = 2;
  optional int32 total_increments = 3;
}

message SetTaskItemCompletionValuesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Task Item Name

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Task Item Name](/mp-command-catalog/commands/mp-task-overview#set-task-item-name) |
| Service | `briosa.MpTaskOverview` |
| RPC | `SetTaskItemName` |
| Operation ID | `mp_task_overview.set_task_item_name` |
| Route | `/briosa.MpTaskOverview/SetTaskItemName` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_item_index` | `int32` | `Task Item Index` | 0 |
| Request | 2 | `task_name` | `string` | `Task Name` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetTaskItemName(SetTaskItemNameRequest) returns (SetTaskItemNameResult);

message SetTaskItemNameRequest {
  optional int32 task_item_index = 1;
  optional string task_name = 2;
}

message SetTaskItemNameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show Progress for Task Item

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show Progress for Task Item](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item) |
| Service | `briosa.MpTaskOverview` |
| RPC | `ShowProgressForTaskItem` |
| Operation ID | `mp_task_overview.show_progress_for_task_item` |
| Route | `/briosa.MpTaskOverview/ShowProgressForTaskItem` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_index` | `int32` | `Task Index` | 0 |
| Request | 2 | `show_progress` | `bool` | `Show Progress?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowProgressForTaskItem(ShowProgressForTaskItemRequest) returns (ShowProgressForTaskItemResult);

message ShowProgressForTaskItemRequest {
  optional int32 task_index = 1;
  optional bool show_progress = 2;
}

message ShowProgressForTaskItemResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Show Task Overview List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Show Task Overview List](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list) |
| Service | `briosa.MpTaskOverview` |
| RPC | `ShowTaskOverviewList` |
| Operation ID | `mp_task_overview.show_task_overview_list` |
| Route | `/briosa.MpTaskOverview/ShowTaskOverviewList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show` | `bool` | `Show?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ShowTaskOverviewList(ShowTaskOverviewListRequest) returns (ShowTaskOverviewListResult);

message ShowTaskOverviewListRequest {
  optional bool show = 1;
}

message ShowTaskOverviewListResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
