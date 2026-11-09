---
title: Construction Operations / Folders
description: Released grpc 0.10.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Folders

[SA 2026.1.0529.7](/api/grpc/construction-operations-folders) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-folders)

This reference covers **SA 2026.1.0529.7**, Server **0.10.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Folder(s) {/* #construct-folders */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-folders#construct-folders)

`/briosa.ConstructionOperations/ConstructFolders` · Operation ID: `construction_operations.construct_folders`

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `optional string` | Folder Path | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructFolders(ConstructFoldersRequest) returns (ConstructFoldersResult);

message ConstructFoldersRequest {
  optional string folder_path = 1;
}

message ConstructFoldersResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Folders by Wildcard {/* #delete-folders-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-folders#delete-folders-by-wildcard)

`/briosa.ConstructionOperations/DeleteFoldersByWildcard` · Operation ID: `construction_operations.delete_folders_by_wildcard`

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `search_string` | `optional string` | Search String | Required |
| Request | 2 | `case_sensitive_search` | `optional bool` | Case Sensitive Search | true |
| Request | 3 | `allow_deleting_all_folders` | `optional bool` | Allow Deleting all Folders | false |
| Result | 1 | `num_deleted` | `optional int32` | Num Deleted | — |
| Result | 2 | `num_failed` | `optional int32` | Num Failed | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteFoldersByWildcard(DeleteFoldersByWildcardRequest) returns (DeleteFoldersByWildcardResult);

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

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `search_string` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

[Candidate Source](https://github.com/spatialanalyzer/briosa/tree/2960705eb3152646513dca2b5d2043cd7cfffb75/targets/2026.1.0529.7)
