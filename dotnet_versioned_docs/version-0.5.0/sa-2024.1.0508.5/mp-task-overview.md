---
title: MP Task Overview
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# MP Task Overview

[SA 2026.1.0529.7](/api/dotnet/mp-task-overview) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/mp-task-overview)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Add Task Overview Item {/* #add-task-overview-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#add-task-overview-item) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#add-task-overview-item)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddTaskOverviewItemAsync(
        string taskName = "",
        string commentText = "",
        double effortIndex = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create/Clear Task Overview List {/* #createclear-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#createclear-task-overview-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#createclear-task-overview-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task CreateClearTaskOverviewListAsync(
        Font taskNameFont,
        Font taskCommentFont,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Current Task {/* #set-current-task */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-current-task) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#set-current-task)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCurrentTaskAsync(
        int taskIndex = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Overview Image {/* #set-overview-image */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-image) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#set-overview-image)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task SetOverviewImageAsync(
        FileReference imagePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Overview Title {/* #set-overview-title */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-overview-title) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#set-overview-title)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetOverviewTitleAsync(
        string overviewTitle = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Comment {/* #set-task-item-comment */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-comment) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#set-task-item-comment)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetTaskItemCommentAsync(
        int taskIndex = 0,
        string taskComment = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Completion Values {/* #set-task-item-completion-values */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-completion-values) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#set-task-item-completion-values)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetTaskItemCompletionValuesAsync(
        int taskIndex = 0,
        int incrementsCompleted = 0,
        int totalIncrements = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Task Item Name {/* #set-task-item-name */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#set-task-item-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#set-task-item-name)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetTaskItemNameAsync(
        int taskItemIndex = 0,
        string taskName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Progress for Task Item {/* #show-progress-for-task-item */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-progress-for-task-item) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#show-progress-for-task-item)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ShowProgressForTaskItemAsync(
        int taskIndex = 0,
        bool showProgress = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Task Overview List {/* #show-task-overview-list */}

[MP Catalog](/mp-command-catalog/commands/mp-task-overview#show-task-overview-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-task-overview#show-task-overview-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ShowTaskOverviewListAsync(
        bool show = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
