---
title: MP Task Overview
description: Next Briosa .NET APIs for supported MP Task Overview MP commands.
toc_max_heading_level: 2
---

# MP Task Overview

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Add Task Overview Item

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Task Overview Item](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item) · [gRPC contract](/api/grpc/mp-task-overview#add-task-overview-item)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskName` | `string` | `Task Name` | Empty |
| `commentText` | `string` | `Comment Text` | Empty |
| `effortIndex` | `double` | `Effort Index` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddTaskOverviewItemAsync(
    string taskName = "",
    string commentText = "",
    double effortIndex = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddTaskOverviewItemAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Create/Clear Task Overview List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Create/Clear Task Overview List](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list) · [gRPC contract](/api/grpc/mp-task-overview#createclear-task-overview-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskNameFont` | `Font` | `Task Name Font` | MS Shell Dlg |
| `taskCommentFont` | `Font` | `Task Comment Font` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CreateClearTaskOverviewListAsync(
    Font taskNameFont,
    Font taskCommentFont,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CreateClearTaskOverviewListAsync(taskNameFont: taskNameFont, taskCommentFont: taskCommentFont);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Current Task

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Current Task](/mp-command-catalog/commands/mp-task-overview#set-current-task) · [gRPC contract](/api/grpc/mp-task-overview#set-current-task)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskIndex` | `int` | `Task Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCurrentTaskAsync(
    int taskIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCurrentTaskAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Overview Image

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Overview Image](/mp-command-catalog/commands/mp-task-overview#set-overview-image) · [gRPC contract](/api/grpc/mp-task-overview#set-overview-image)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `imagePath` | `FileReference` | `Image Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetOverviewImageAsync(
    FileReference imagePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetOverviewImageAsync(imagePath: imagePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Overview Title

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Overview Title](/mp-command-catalog/commands/mp-task-overview#set-overview-title) · [gRPC contract](/api/grpc/mp-task-overview#set-overview-title)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `overviewTitle` | `string` | `Overview Title` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetOverviewTitleAsync(
    string overviewTitle = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetOverviewTitleAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Task Item Comment

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Task Item Comment](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-comment)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskIndex` | `int` | `Task Index` | 0 |
| `taskComment` | `string` | `Task Comment` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetTaskItemCommentAsync(
    int taskIndex = 0,
    string taskComment = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetTaskItemCommentAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Task Item Completion Values

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Task Item Completion Values](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-completion-values)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskIndex` | `int` | `Task Index` | 0 |
| `incrementsCompleted` | `int` | `Increments Completed` | 0 |
| `totalIncrements` | `int` | `Total Increments` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetTaskItemCompletionValuesAsync(
    int taskIndex = 0,
    int incrementsCompleted = 0,
    int totalIncrements = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetTaskItemCompletionValuesAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Task Item Name

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Task Item Name](/mp-command-catalog/commands/mp-task-overview#set-task-item-name) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-name)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskItemIndex` | `int` | `Task Item Index` | 0 |
| `taskName` | `string` | `Task Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetTaskItemNameAsync(
    int taskItemIndex = 0,
    string taskName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetTaskItemNameAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show Progress for Task Item

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show Progress for Task Item](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item) · [gRPC contract](/api/grpc/mp-task-overview#show-progress-for-task-item)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskIndex` | `int` | `Task Index` | 0 |
| `showProgress` | `bool` | `Show Progress?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowProgressForTaskItemAsync(
    int taskIndex = 0,
    bool showProgress = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowProgressForTaskItemAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show Task Overview List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show Task Overview List](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list) · [gRPC contract](/api/grpc/mp-task-overview#show-task-overview-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `show` | `bool` | `Show?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowTaskOverviewListAsync(
    bool show = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowTaskOverviewListAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
