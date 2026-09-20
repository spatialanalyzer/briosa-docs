---
title: MP Task Overview
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# MP Task Overview

[SA 2026.1.0529.7](/api/javascript/mp-task-overview) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/mp-task-overview)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Task Overview Item {/* #add-task-overview-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item) · [gRPC Contract](/api/grpc/mp-task-overview#add-task-overview-item)

```ts
export interface AddTaskOverviewItemInput {
  readonly taskName?: string;
  readonly commentText?: string;
  readonly effortIndex?: number;
}

export declare function addTaskOverviewItem(
  briosa: BriosaClient,
  input: AddTaskOverviewItemInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create/Clear Task Overview List {/* #createclear-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list) · [gRPC Contract](/api/grpc/mp-task-overview#createclear-task-overview-list)

```ts
export interface CreateClearTaskOverviewListInput {
  readonly taskNameFont?: Font;
  readonly taskCommentFont?: Font;
}

export declare function createClearTaskOverviewList(
  briosa: BriosaClient,
  input: CreateClearTaskOverviewListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Current Task {/* #set-current-task */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-current-task) · [gRPC Contract](/api/grpc/mp-task-overview#set-current-task)

```ts
export interface SetCurrentTaskInput {
  readonly taskIndex?: number;
}

export declare function setCurrentTask(
  briosa: BriosaClient,
  input: SetCurrentTaskInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Overview Image {/* #set-overview-image */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-image) · [gRPC Contract](/api/grpc/mp-task-overview#set-overview-image)

```ts
export interface SetOverviewImageInput {
  readonly imagePath: FileReference;
}

export declare function setOverviewImage(
  briosa: BriosaClient,
  input: SetOverviewImageInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Overview Title {/* #set-overview-title */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-title) · [gRPC Contract](/api/grpc/mp-task-overview#set-overview-title)

```ts
export interface SetOverviewTitleInput {
  readonly overviewTitle?: string;
}

export declare function setOverviewTitle(
  briosa: BriosaClient,
  input: SetOverviewTitleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Comment {/* #set-task-item-comment */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-comment)

```ts
export interface SetTaskItemCommentInput {
  readonly taskIndex?: number;
  readonly taskComment?: string;
}

export declare function setTaskItemComment(
  briosa: BriosaClient,
  input: SetTaskItemCommentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Completion Values {/* #set-task-item-completion-values */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-completion-values)

```ts
export interface SetTaskItemCompletionValuesInput {
  readonly taskIndex?: number;
  readonly incrementsCompleted?: number;
  readonly totalIncrements?: number;
}

export declare function setTaskItemCompletionValues(
  briosa: BriosaClient,
  input: SetTaskItemCompletionValuesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Name {/* #set-task-item-name */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-name) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-name)

```ts
export interface SetTaskItemNameInput {
  readonly taskItemIndex?: number;
  readonly taskName?: string;
}

export declare function setTaskItemName(
  briosa: BriosaClient,
  input: SetTaskItemNameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Progress for Task Item {/* #show-progress-for-task-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item) · [gRPC Contract](/api/grpc/mp-task-overview#show-progress-for-task-item)

```ts
export interface ShowProgressForTaskItemInput {
  readonly taskIndex?: number;
  readonly showProgress?: boolean;
}

export declare function showProgressForTaskItem(
  briosa: BriosaClient,
  input: ShowProgressForTaskItemInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Task Overview List {/* #show-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list) · [gRPC Contract](/api/grpc/mp-task-overview#show-task-overview-list)

```ts
export interface ShowTaskOverviewListInput {
  readonly show?: boolean;
}

export declare function showTaskOverviewList(
  briosa: BriosaClient,
  input: ShowTaskOverviewListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2026.1.0529.7)
