---
title: Construction Operations / Folders
description: Briosa 0.1.0 .NET APIs for selected folder-management MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Folders

## Construct Folder(s)

```csharp
public Task ConstructFoldersAsync(
    string folderPath,
    CancellationToken cancellationToken = default);
```

`folderPath` is passed through unchanged and can describe a nested hierarchy.

## Delete Folders by Wildcard

```csharp
public sealed record DeleteFoldersByWildcardResult(
    int NumDeleted,
    int NumFailed);

public Task<DeleteFoldersByWildcardResult> DeleteFoldersByWildcardAsync(
    string searchString,
    bool caseSensitiveSearch = true,
    bool allowDeletingAllFolders = false,
    CancellationToken cancellationToken = default);
```

The result preserves both exact MP outputs. The client does not validate the
search value and never automatically replays this destructive operation.

[Catalog](/mp-command-catalog/commands/construction-operations-folders#delete-folders-by-wildcard) · [gRPC](/api/grpc/0.5.1/construction-operations-folders#delete-folders-by-wildcard)
