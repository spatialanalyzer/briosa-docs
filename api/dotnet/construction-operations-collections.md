---
title: Construction Operations / Collections
description: Unreleased Briosa .NET APIs for selected collection-management MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Collections

The current server already exposes `Get Active Collection Name`. These
signatures define its first-party wrapper and the four collection-mutation
methods. Mutation methods are never replayed automatically.

## Set (or construct) default collection

```csharp
public Task SetOrConstructDefaultCollectionAsync(
    CollectionName collectionName,
    CancellationToken cancellationToken = default);
```

Sets the default collection, constructing it when needed.
[Catalog](/mp-command-catalog/commands/construction-operations-collections#set-or-construct-default-collection) · [gRPC](/api/grpc/construction-operations-collections#set-or-construct-default-collection)

## Construct Collection

```csharp
public Task ConstructCollectionAsync(
    CollectionName collectionName,
    string folderPath = "",
    bool makeDefaultCollection = false,
    CancellationToken cancellationToken = default);
```

Constructs a collection with the reviewed MP defaults for folder placement and
default-collection selection.

## Get Active Collection Name

```csharp
public Task<string> GetActiveCollectionNameAsync(
    CancellationToken cancellationToken = default);
```

Returns the required `Currently Active Collection Name` string from the
current gRPC operation. The client does not expose the generated result
envelope.

## Delete Collection

```csharp
public Task DeleteCollectionAsync(
    CollectionName collectionName,
    CancellationToken cancellationToken = default);
```

Deletes one explicitly named collection.

## Delete Collections by Wildcard

```csharp
public sealed record DeleteCollectionsByWildcardResult(
    int NumDeleted,
    int NumFailed);

public Task<DeleteCollectionsByWildcardResult> DeleteCollectionsByWildcardAsync(
    string searchString,
    bool caseSensitiveSearch = true,
    bool allowDeletingAllCollections = false,
    CancellationToken cancellationToken = default);
```

`searchString` is passed through without client-side value validation. Deleting
every collection requires an explicit `allowDeletingAllCollections: true`.
The result preserves both exact MP output counts.

[Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collections-by-wildcard) · [gRPC](/api/grpc/construction-operations-collections#delete-collections-by-wildcard)
