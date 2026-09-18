---
title: Construction Operations / Folders
description: Briosa 0.1.0 JavaScript and TypeScript APIs for selected folder-management MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Folders

## Construct Folder(s)

```ts
export interface ConstructFoldersInput {
  readonly folderPath: string;
}

function constructFolders(
  briosa: BriosaClient,
  input: ConstructFoldersInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`folderPath` is passed through unchanged and can describe a nested hierarchy.

## Delete Folders by Wildcard

```ts
export interface DeleteFoldersByWildcardInput {
  readonly searchString: string;
  readonly caseSensitiveSearch?: boolean;
  readonly allowDeletingAllFolders?: boolean;
}

export interface DeleteFoldersByWildcardResult {
  readonly numDeleted: number;
  readonly numFailed: number;
}

function deleteFoldersByWildcard(
  briosa: BriosaClient,
  input: DeleteFoldersByWildcardInput,
  options?: BriosaCallOptions,
): Promise<DeleteFoldersByWildcardResult>;
```

The result preserves both exact MP outputs. The client does not validate the
search value and never automatically replays this destructive operation.

[Catalog](/mp-command-catalog/commands/construction-operations-folders#delete-folders-by-wildcard) · [gRPC](/api/grpc/construction-operations-folders#delete-folders-by-wildcard)
