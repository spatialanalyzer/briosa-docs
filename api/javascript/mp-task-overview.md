---
title: MP Task Overview
description: Next Briosa JavaScript and TypeScript APIs for supported MP Task Overview MP commands.
toc_max_heading_level: 2
---

# MP Task Overview

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Add Task Overview Item

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Task Overview Item](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item) · [gRPC contract](/api/grpc/mp-task-overview#add-task-overview-item)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskName` | `string` | `Task Name` | Empty |
| `commentText` | `string` | `Comment Text` | Empty |
| `effortIndex` | `number` | `Effort Index` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddTaskOverviewItemInput {
  readonly taskName?: string;
  readonly commentText?: string;
  readonly effortIndex?: number;
}

function addTaskOverviewItem(
  briosa: BriosaClient,
  input?: AddTaskOverviewItemInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addTaskOverviewItem(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Create/Clear Task Overview List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Create/Clear Task Overview List](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list) · [gRPC contract](/api/grpc/mp-task-overview#createclear-task-overview-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskNameFont` | `Font` | `Task Name Font` | MS Shell Dlg |
| `taskCommentFont` | `Font` | `Task Comment Font` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CreateClearTaskOverviewListInput {
  readonly taskNameFont?: Font;
  readonly taskCommentFont?: Font;
}

function createClearTaskOverviewList(
  briosa: BriosaClient,
  input?: CreateClearTaskOverviewListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await createClearTaskOverviewList(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Current Task

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Current Task](/mp-command-catalog/commands/mp-task-overview#set-current-task) · [gRPC contract](/api/grpc/mp-task-overview#set-current-task)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskIndex` | `number` | `Task Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCurrentTaskInput {
  readonly taskIndex?: number;
}

function setCurrentTask(
  briosa: BriosaClient,
  input?: SetCurrentTaskInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCurrentTask(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Overview Image

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Overview Image](/mp-command-catalog/commands/mp-task-overview#set-overview-image) · [gRPC contract](/api/grpc/mp-task-overview#set-overview-image)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `imagePath` | `FileReference` | `Image Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetOverviewImageInput {
  readonly imagePath: FileReference;
}

function setOverviewImage(
  briosa: BriosaClient,
  input: SetOverviewImageInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setOverviewImage(briosa, { imagePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Overview Title

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Overview Title](/mp-command-catalog/commands/mp-task-overview#set-overview-title) · [gRPC contract](/api/grpc/mp-task-overview#set-overview-title)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `overviewTitle` | `string` | `Overview Title` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetOverviewTitleInput {
  readonly overviewTitle?: string;
}

function setOverviewTitle(
  briosa: BriosaClient,
  input?: SetOverviewTitleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setOverviewTitle(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Task Item Comment

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Task Item Comment](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-comment)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskIndex` | `number` | `Task Index` | 0 |
| `taskComment` | `string` | `Task Comment` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetTaskItemCommentInput {
  readonly taskIndex?: number;
  readonly taskComment?: string;
}

function setTaskItemComment(
  briosa: BriosaClient,
  input?: SetTaskItemCommentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setTaskItemComment(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Task Item Completion Values

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Task Item Completion Values](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-completion-values)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskIndex` | `number` | `Task Index` | 0 |
| `incrementsCompleted` | `number` | `Increments Completed` | 0 |
| `totalIncrements` | `number` | `Total Increments` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetTaskItemCompletionValuesInput {
  readonly taskIndex?: number;
  readonly incrementsCompleted?: number;
  readonly totalIncrements?: number;
}

function setTaskItemCompletionValues(
  briosa: BriosaClient,
  input?: SetTaskItemCompletionValuesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setTaskItemCompletionValues(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Task Item Name

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Task Item Name](/mp-command-catalog/commands/mp-task-overview#set-task-item-name) · [gRPC contract](/api/grpc/mp-task-overview#set-task-item-name)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskItemIndex` | `number` | `Task Item Index` | 0 |
| `taskName` | `string` | `Task Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetTaskItemNameInput {
  readonly taskItemIndex?: number;
  readonly taskName?: string;
}

function setTaskItemName(
  briosa: BriosaClient,
  input?: SetTaskItemNameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setTaskItemName(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show Progress for Task Item

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show Progress for Task Item](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item) · [gRPC contract](/api/grpc/mp-task-overview#show-progress-for-task-item)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `taskIndex` | `number` | `Task Index` | 0 |
| `showProgress` | `boolean` | `Show Progress?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowProgressForTaskItemInput {
  readonly taskIndex?: number;
  readonly showProgress?: boolean;
}

function showProgressForTaskItem(
  briosa: BriosaClient,
  input?: ShowProgressForTaskItemInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showProgressForTaskItem(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show Task Overview List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show Task Overview List](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list) · [gRPC contract](/api/grpc/mp-task-overview#show-task-overview-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `show` | `boolean` | `Show?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowTaskOverviewListInput {
  readonly show?: boolean;
}

function showTaskOverviewList(
  briosa: BriosaClient,
  input?: ShowTaskOverviewListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showTaskOverviewList(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
