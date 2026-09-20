---
title: Construction Operations / Collections
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Collections

[SA 2026.1.0529.7](/api/dotnet/construction-operations-collections) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-collections)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Set (or construct) default collection {/* #set-or-construct-default-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#set-or-construct-default-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#set-or-construct-default-collection)

```csharp
public Task SetOrConstructDefaultCollectionAsync(
        CollectionName collectionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Collection {/* #construct-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#construct-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#construct-collection)

```csharp
public Task ConstructCollectionAsync(
        CollectionName collectionName,
        string folderPath = "",
        bool makeDefaultCollection = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Collection Name {/* #get-active-collection-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#get-active-collection-name) · [gRPC Contract](/api/grpc/construction-operations-collections#get-active-collection-name)

```csharp
public Task<string> GetActiveCollectionNameAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Collection {/* #delete-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collection) · [gRPC Contract](/api/grpc/construction-operations-collections#delete-collection)

```csharp
public Task DeleteCollectionAsync(
        CollectionName collectionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Collections by Wildcard {/* #delete-collections-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collections-by-wildcard) · [gRPC Contract](/api/grpc/construction-operations-collections#delete-collections-by-wildcard)

```csharp
public Task<DeleteCollectionsByWildcardResult> DeleteCollectionsByWildcardAsync(
        string searchString,
        bool caseSensitiveSearch = true,
        bool allowDeletingAllCollections = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
