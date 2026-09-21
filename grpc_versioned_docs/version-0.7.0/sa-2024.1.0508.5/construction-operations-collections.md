---
title: Construction Operations / Collections
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Collections

[SA 2026.1.0529.7](/api/grpc/construction-operations-collections) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-collections)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Set (or construct) default collection {/* #set-or-construct-default-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#set-or-construct-default-collection)

`/briosa.ConstructionOperations/SetOrConstructDefaultCollection` · Operation ID: `construction_operations.set_or_construct_default_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `optional CollectionName` | Collection Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetOrConstructDefaultCollection(SetOrConstructDefaultCollectionRequest) returns (SetOrConstructDefaultCollectionResult);

message SetOrConstructDefaultCollectionRequest {
  optional CollectionName collection_name = 1;
}

message SetOrConstructDefaultCollectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Collection {/* #construct-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#construct-collection)

`/briosa.ConstructionOperations/ConstructCollection` · Operation ID: `construction_operations.construct_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `optional CollectionName` | Collection Name | Required |
| Request | 2 | `folder_path` | `optional string` | Folder Path | Empty |
| Request | 3 | `make_default_collection` | `optional bool` | Make Default Collection? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCollection(ConstructCollectionRequest) returns (ConstructCollectionResult);

message ConstructCollectionRequest {
  optional CollectionName collection_name = 1;
  optional string folder_path = 2;
  optional bool make_default_collection = 3;
}

message ConstructCollectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Active Collection Name {/* #get-active-collection-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#get-active-collection-name)

`/briosa.ConstructionOperations/GetActiveCollectionName` · Operation ID: `construction_operations.get_active_collection_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `currently_active_collection_name` | `optional string` | Currently Active Collection Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetActiveCollectionName(GetActiveCollectionNameRequest) returns (GetActiveCollectionNameResult);

message GetActiveCollectionNameRequest {}

message GetActiveCollectionNameResult {
  // The MP return argument named "Currently Active Collection Name".
  optional string currently_active_collection_name = 1;
  // Explicit MP and result-only argument retrieval outcome.
  MpExecutionDetails execution = 1000;
}
```

## Delete Collection {/* #delete-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collection)

`/briosa.ConstructionOperations/DeleteCollection` · Operation ID: `construction_operations.delete_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `optional CollectionName` | Name of Collection to Delete | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteCollection(DeleteCollectionRequest) returns (DeleteCollectionResult);

message DeleteCollectionRequest {
  optional CollectionName collection_name = 1;
}

message DeleteCollectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Collections by Wildcard {/* #delete-collections-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-collections#delete-collections-by-wildcard)

`/briosa.ConstructionOperations/DeleteCollectionsByWildcard` · Operation ID: `construction_operations.delete_collections_by_wildcard`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `search_string` | `optional string` | Search String | Empty |
| Request | 2 | `case_sensitive_search` | `optional bool` | Case Sensitive Search | true |
| Request | 3 | `allow_deleting_all_collections` | `optional bool` | Allow Deleting all Collections | false |
| Result | 1 | `num_deleted` | `optional int32` | Num Deleted | — |
| Result | 2 | `num_failed` | `optional int32` | Num Failed | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteCollectionsByWildcard(DeleteCollectionsByWildcardRequest) returns (DeleteCollectionsByWildcardResult);

message DeleteCollectionsByWildcardRequest {
  optional string search_string = 1;
  optional bool case_sensitive_search = 2;
  optional bool allow_deleting_all_collections = 3;
}

message DeleteCollectionsByWildcardResult {
  optional int32 num_deleted = 1;
  optional int32 num_failed = 2;
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
