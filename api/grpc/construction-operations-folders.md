---
title: Construction Operations / Folders
description: Next gRPC contracts for selected folder-management MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Folders

Both RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and are never automatically replayed.

## Construct Folder(s)

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `ConstructFolders` |
| Operation ID | `construction_operations.construct_folders` |
| Route | `/briosa.ConstructionOperations/ConstructFolders` |
| Validation | At Risk - fixture validation required |

```proto
message ConstructFoldersRequest {
  optional string folder_path = 1;
}
message ConstructFoldersResult {
  MpExecutionDetails execution = 1000;
}
```

`folder_path` is required but passed through without Briosa-specific value
validation. SpatialAnalyzer interprets the folder and hierarchy syntax.

## Delete Folders by Wildcard

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `DeleteFoldersByWildcard` |
| Operation ID | `construction_operations.delete_folders_by_wildcard` |
| Route | `/briosa.ConstructionOperations/DeleteFoldersByWildcard` |
| Validation | At Risk - destructive fixture validation required |

```proto
message DeleteFoldersByWildcardRequest {
  optional string search_string = 1;
  optional bool case_sensitive_search = 2;
  optional bool allow_deleting_all_folders = 3;
}
message DeleteFoldersByWildcardResult {
  optional int32 num_deleted = 1;
  optional int32 num_failed = 2;
  MpExecutionDetails execution = 1000;
}
```

`search_string` is required but passed through without value validation.
Omitted Boolean fields map to `true` and `false`, respectively. Both result
counts are required after successful MP execution.
