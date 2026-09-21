---
title: Construction Operations / Folders
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Folders

[SA 2026.1.0529.7](/api/javascript/construction-operations-folders) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-folders)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Folder(s) {/* #construct-folders */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-folders#construct-folders) · [gRPC Contract](/api/grpc/construction-operations-folders#construct-folders)

```ts
export interface ConstructFoldersInput {
  readonly folderPath: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructFolders(
    input: ConstructFoldersInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Folders by Wildcard {/* #delete-folders-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-folders#delete-folders-by-wildcard) · [gRPC Contract](/api/grpc/construction-operations-folders#delete-folders-by-wildcard)

```ts
export interface DeleteFoldersByWildcardInput {
  readonly searchString: string;
  readonly caseSensitiveSearch?: boolean;
  readonly allowDeletingAllFolders?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  deleteFoldersByWildcard(
    input: DeleteFoldersByWildcardInput,
    callOptions?: BriosaCallOptions,
  ): Promise<DeleteFoldersByWildcardResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2026.1.0529.7)
