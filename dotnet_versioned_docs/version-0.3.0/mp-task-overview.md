---
title: MP Task Overview
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# MP Task Overview

[SA 2026.1.0529.7](/api/dotnet/mp-task-overview) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/mp-task-overview)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Task Overview Item {/* #add-task-overview-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item) · [gRPC Contract](/api/grpc/mp-task-overview#add-task-overview-item)

```csharp
public Task AddTaskOverviewItemAsync(
        string taskName = "",
        string commentText = "",
        double effortIndex = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create/Clear Task Overview List {/* #createclear-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list) · [gRPC Contract](/api/grpc/mp-task-overview#createclear-task-overview-list)

```csharp
public Task CreateClearTaskOverviewListAsync(
        Font taskNameFont,
        Font taskCommentFont,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Current Task {/* #set-current-task */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-current-task) · [gRPC Contract](/api/grpc/mp-task-overview#set-current-task)

```csharp
public Task SetCurrentTaskAsync(
        int taskIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Overview Image {/* #set-overview-image */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-image) · [gRPC Contract](/api/grpc/mp-task-overview#set-overview-image)

```csharp
public Task SetOverviewImageAsync(
        FileReference imagePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Overview Title {/* #set-overview-title */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-title) · [gRPC Contract](/api/grpc/mp-task-overview#set-overview-title)

```csharp
public Task SetOverviewTitleAsync(
        string overviewTitle = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Comment {/* #set-task-item-comment */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-comment)

```csharp
public Task SetTaskItemCommentAsync(
        int taskIndex = 0,
        string taskComment = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Completion Values {/* #set-task-item-completion-values */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-completion-values)

```csharp
public Task SetTaskItemCompletionValuesAsync(
        int taskIndex = 0,
        int incrementsCompleted = 0,
        int totalIncrements = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Name {/* #set-task-item-name */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-name) · [gRPC Contract](/api/grpc/mp-task-overview#set-task-item-name)

```csharp
public Task SetTaskItemNameAsync(
        int taskItemIndex = 0,
        string taskName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Progress for Task Item {/* #show-progress-for-task-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item) · [gRPC Contract](/api/grpc/mp-task-overview#show-progress-for-task-item)

```csharp
public Task ShowProgressForTaskItemAsync(
        int taskIndex = 0,
        bool showProgress = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Task Overview List {/* #show-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list) · [gRPC Contract](/api/grpc/mp-task-overview#show-task-overview-list)

```csharp
public Task ShowTaskOverviewListAsync(
        bool show = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2026.1.0529.7)
