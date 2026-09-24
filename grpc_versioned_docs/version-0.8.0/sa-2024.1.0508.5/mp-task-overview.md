---
title: MP Task Overview
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# MP Task Overview

[SA 2026.1.0529.7](/api/grpc/mp-task-overview) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/mp-task-overview)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Task Overview Item {/* #add-task-overview-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item)

`/briosa.MpTaskOverview/AddTaskOverviewItem` · Operation ID: `mp_task_overview.add_task_overview_item`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_name` | `optional string` | Task Name | Empty |
| Request | 2 | `comment_text` | `optional string` | Comment Text | Empty |
| Request | 3 | `effort_index` | `optional double` | Effort Index | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Create/Clear Task Overview List {/* #createclear-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list)

`/briosa.MpTaskOverview/CreateClearTaskOverviewList` · Operation ID: `mp_task_overview.create_clear_task_overview_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_name_font` | `optional Font` | Task Name Font | MS Shell Dlg |
| Request | 2 | `task_comment_font` | `optional Font` | Task Comment Font | MS Shell Dlg |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Current Task {/* #set-current-task */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-current-task)

`/briosa.MpTaskOverview/SetCurrentTask` · Operation ID: `mp_task_overview.set_current_task`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_index` | `optional int32` | Task Index | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCurrentTask(SetCurrentTaskRequest) returns (SetCurrentTaskResult);

message SetCurrentTaskRequest {
  optional int32 task_index = 1;
}

message SetCurrentTaskResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Overview Image {/* #set-overview-image */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-image)

`/briosa.MpTaskOverview/SetOverviewImage` · Operation ID: `mp_task_overview.set_overview_image`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `image_path` | `optional FileReference` | Image Path | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetOverviewImage(SetOverviewImageRequest) returns (SetOverviewImageResult);

message SetOverviewImageRequest {
  optional FileReference image_path = 1;
}

message SetOverviewImageResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Overview Title {/* #set-overview-title */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-title)

`/briosa.MpTaskOverview/SetOverviewTitle` · Operation ID: `mp_task_overview.set_overview_title`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `overview_title` | `optional string` | Overview Title | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetOverviewTitle(SetOverviewTitleRequest) returns (SetOverviewTitleResult);

message SetOverviewTitleRequest {
  optional string overview_title = 1;
}

message SetOverviewTitleResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Task Item Comment {/* #set-task-item-comment */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment)

`/briosa.MpTaskOverview/SetTaskItemComment` · Operation ID: `mp_task_overview.set_task_item_comment`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_index` | `optional int32` | Task Index | 0 |
| Request | 2 | `task_comment` | `optional string` | Task Comment | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Task Item Completion Values {/* #set-task-item-completion-values */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values)

`/briosa.MpTaskOverview/SetTaskItemCompletionValues` · Operation ID: `mp_task_overview.set_task_item_completion_values`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_index` | `optional int32` | Task Index | 0 |
| Request | 2 | `increments_completed` | `optional int32` | Increments Completed | 0 |
| Request | 3 | `total_increments` | `optional int32` | Total Increments | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Task Item Name {/* #set-task-item-name */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-name)

`/briosa.MpTaskOverview/SetTaskItemName` · Operation ID: `mp_task_overview.set_task_item_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_item_index` | `optional int32` | Task Item Index | 0 |
| Request | 2 | `task_name` | `optional string` | Task Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Show Progress for Task Item {/* #show-progress-for-task-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item)

`/briosa.MpTaskOverview/ShowProgressForTaskItem` · Operation ID: `mp_task_overview.show_progress_for_task_item`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `task_index` | `optional int32` | Task Index | 0 |
| Request | 2 | `show_progress` | `optional bool` | Show Progress? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Show Task Overview List {/* #show-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list)

`/briosa.MpTaskOverview/ShowTaskOverviewList` · Operation ID: `mp_task_overview.show_task_overview_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show` | `optional bool` | Show? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShowTaskOverviewList(ShowTaskOverviewListRequest) returns (ShowTaskOverviewListResult);

message ShowTaskOverviewListRequest {
  optional bool show = 1;
}

message ShowTaskOverviewListResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2024.1.0508.5)
