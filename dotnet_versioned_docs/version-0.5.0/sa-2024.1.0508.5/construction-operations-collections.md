---
title: Construction Operations / Collections
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Collections

[SA 2026.1.0529.7](/api/dotnet/construction-operations-collections) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-collections)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Set (or construct) default collection {/* #set-or-construct-default-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#set-or-construct-default-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#set-or-construct-default-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetOrConstructDefaultCollectionAsync(
        CollectionName collectionName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Collection {/* #construct-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#construct-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#construct-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructCollectionAsync(
        CollectionName collectionName,
        string folderPath = "",
        bool makeDefaultCollection = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Collection Name {/* #get-active-collection-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#get-active-collection-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#get-active-collection-name)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string> GetActiveCollectionNameAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Collection {/* #delete-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#delete-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteCollectionAsync(
        CollectionName collectionName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Collections by Wildcard {/* #delete-collections-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collections-by-wildcard) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-collections#delete-collections-by-wildcard)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task<DeleteCollectionsByWildcardResult> DeleteCollectionsByWildcardAsync(
        string searchString,
        bool caseSensitiveSearch = true,
        bool allowDeletingAllCollections = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `searchString` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
