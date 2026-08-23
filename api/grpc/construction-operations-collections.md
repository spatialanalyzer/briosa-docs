---
title: Construction Operations / Collections
description: Current and Next gRPC contracts for selected collection-management MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Collections

All RPCs use `briosa.ConstructionOperations` and return
`MpExecutionDetails execution = 1000`. The current read-only query is safe to
replay. Collection mutations are never automatically replayed.

## Set (or construct) default collection

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `SetOrConstructDefaultCollection` |
| Operation ID | `construction_operations.set_or_construct_default_collection` |
| Route | `/briosa.ConstructionOperations/SetOrConstructDefaultCollection` |
| Validation | At Risk - fixture validation required |

```proto
message SetOrConstructDefaultCollectionRequest {
  optional CollectionName collection_name = 1;
}
message SetOrConstructDefaultCollectionResult {
  MpExecutionDetails execution = 1000;
}
```

`collection_name` is required. SpatialAnalyzer constructs the collection when
it does not already exist, then makes it the default collection.

## Construct Collection

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `ConstructCollection` |
| Operation ID | `construction_operations.construct_collection` |
| Route | `/briosa.ConstructionOperations/ConstructCollection` |
| Validation | At Risk - fixture validation required |

```proto
message ConstructCollectionRequest {
  optional CollectionName collection_name = 1;
  optional string folder_path = 2;
  optional bool make_default_collection = 3;
}
message ConstructCollectionResult {
  MpExecutionDetails execution = 1000;
}
```

`collection_name` is required. Omitted `folder_path` maps to an empty string,
and omitted `make_default_collection` maps to `false`.

## Get Active Collection Name

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `GetActiveCollectionName` |
| Operation ID | `construction_operations.get_active_collection_name` |
| Route | `/briosa.ConstructionOperations/GetActiveCollectionName` |
| Validation | Licensed exact-target validation complete |

```proto
message GetActiveCollectionNameRequest {}
message GetActiveCollectionNameResult {
  optional string currently_active_collection_name = 1;
  MpExecutionDetails execution = 1000;
}
```

The current handwritten operation requires the string result after successful
MP execution and argument retrieval. It is a global-state read classified as
safe to replay.

## Delete Collection

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `DeleteCollection` |
| Operation ID | `construction_operations.delete_collection` |
| Route | `/briosa.ConstructionOperations/DeleteCollection` |
| Validation | At Risk - destructive fixture validation required |

```proto
message DeleteCollectionRequest {
  optional CollectionName collection_name = 1;
}
message DeleteCollectionResult {
  MpExecutionDetails execution = 1000;
}
```

`collection_name` maps to the exact MP argument `Name of Collection to Delete`
and is required.

## Delete Collections by Wildcard

| Contract Item | Value |
| --- | --- |
| Status | Next |
| RPC | `DeleteCollectionsByWildcard` |
| Operation ID | `construction_operations.delete_collections_by_wildcard` |
| Route | `/briosa.ConstructionOperations/DeleteCollectionsByWildcard` |
| Validation | At Risk - destructive fixture validation required |

```proto
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

`search_string` is required but passed through without value validation.
Omitted Boolean fields map to `true` and `false`, respectively. The server
requires both result counts after successful execution and never automatically
replays the call.
