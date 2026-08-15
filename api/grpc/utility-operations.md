---
title: Utility Operations
description: Current and next gRPC contracts for supported Utility Operations MP commands.
toc_max_heading_level: 2
---

# Utility Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Close All Watch Windows

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Close All Watch Windows](/mp-command-catalog/commands/utility-operations#close-all-watch-windows) |
| Service | `briosa.UtilityOperations` |
| RPC | `CloseAllWatchWindows` |
| Operation ID | `utility_operations.close_all_watch_windows` |
| Route | `/briosa.UtilityOperations/CloseAllWatchWindows` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CloseAllWatchWindows(CloseAllWatchWindowsRequest) returns (CloseAllWatchWindowsResult);

message CloseAllWatchWindowsRequest {
  // No MP inputs.
}

message CloseAllWatchWindowsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Folder

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Folder](/mp-command-catalog/commands/utility-operations#delete-folder) |
| Service | `briosa.UtilityOperations` |
| RPC | `DeleteFolder` |
| Operation ID | `utility_operations.delete_folder` |
| Route | `/briosa.UtilityOperations/DeleteFolder` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `string` | `Folder Path` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteFolder(DeleteFolderRequest) returns (DeleteFolderResult);

message DeleteFolderRequest {
  optional string folder_path = 1;
}

message DeleteFolderResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Items

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Items](/mp-command-catalog/commands/utility-operations#delete-items) |
| Service | `briosa.UtilityOperations` |
| RPC | `DeleteItems` |
| Operation ID | `utility_operations.delete_items` |
| Route | `/briosa.UtilityOperations/DeleteItems` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `item_list` | `repeated CollectionItemName` | `Item List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteItems(DeleteItemsRequest) returns (DeleteItemsResult);

message DeleteItemsRequest {
  repeated CollectionItemName item_list = 1;
}

message DeleteItemsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Objects](/mp-command-catalog/commands/utility-operations#delete-objects) |
| Service | `briosa.UtilityOperations` |
| RPC | `DeleteObjects` |
| Operation ID | `utility_operations.delete_objects` |
| Route | `/briosa.UtilityOperations/DeleteObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_names` | `repeated CollectionObjectName` | `Object Names` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteObjects(DeleteObjectsRequest) returns (DeleteObjectsResult);

message DeleteObjectsRequest {
  repeated CollectionObjectName object_names = 1;
}

message DeleteObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Active Language

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Active Language](/mp-command-catalog/commands/utility-operations#get-active-language) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetActiveLanguage` |
| Operation ID | `utility_operations.get_active_language` |
| Route | `/briosa.UtilityOperations/GetActiveLanguage` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `language_file_name` | `FileReference` | `Language File Name` | — |
| Result | 2 | `custom_language` | `bool` | `Custom Language?` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetActiveLanguage(GetActiveLanguageRequest) returns (GetActiveLanguageResult);

message GetActiveLanguageRequest {
  // No MP inputs.
}

message GetActiveLanguageResult {
  optional FileReference language_file_name = 1;
  optional bool custom_language = 2;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Active Units

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Active Units](/mp-command-catalog/commands/utility-operations#get-active-units) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetActiveUnits` |
| Operation ID | `utility_operations.get_active_units` |
| Route | `/briosa.UtilityOperations/GetActiveUnits` |
| Validation | Released implementation |
| Automatic Replay | Safe for the current read-only operation |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `length` | `string` | `Length` | — |
| Result | 2 | `angular` | `string` | `Angular` | — |
| Result | 3 | `temperature` | `string` | `Temperature` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetActiveUnits(GetActiveUnitsRequest) returns (GetActiveUnitsResult);

message GetActiveUnitsRequest {
  // No MP inputs.
}

message GetActiveUnitsResult {
  optional string length = 1;
  optional string angular = 2;
  optional string temperature = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Angular Representation

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Angular Representation](/mp-command-catalog/commands/utility-operations#get-angular-representation) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetAngularRepresentation` |
| Operation ID | `utility_operations.get_angular_representation` |
| Route | `/briosa.UtilityOperations/GetAngularRepresentation` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `value_0_360_false_180` | `bool` | `0-360, (FALSE = +/-180)` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetAngularRepresentation(GetAngularRepresentationRequest) returns (GetAngularRepresentationResult);

message GetAngularRepresentationRequest {
  // No MP inputs.
}

message GetAngularRepresentationResult {
  optional bool value_0_360_false_180 = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Collection Notes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Collection Notes](/mp-command-catalog/commands/utility-operations#get-collection-notes) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetCollectionNotes` |
| Operation ID | `utility_operations.get_collection_notes` |
| Route | `/briosa.UtilityOperations/GetCollectionNotes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `CollectionName` | `Collection` | Required |
| Result | 1 | `notes` | `repeated string` | `Notes` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetCollectionNotes(GetCollectionNotesRequest) returns (GetCollectionNotesResult);

message GetCollectionNotesRequest {
  optional CollectionName collection = 1;
}

message GetCollectionNotesResult {
  repeated string notes = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Folder Collections

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Folder Collections](/mp-command-catalog/commands/utility-operations#get-folder-collections) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetFolderCollections` |
| Operation ID | `utility_operations.get_folder_collections` |
| Route | `/briosa.UtilityOperations/GetFolderCollections` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `string` | `Folder Path` | Empty |
| Result | 1 | `collection_list` | `repeated string` | `Collection List` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetFolderCollections(GetFolderCollectionsRequest) returns (GetFolderCollectionsResult);

message GetFolderCollectionsRequest {
  optional string folder_path = 1;
}

message GetFolderCollectionsResult {
  repeated string collection_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Folder Notes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Folder Notes](/mp-command-catalog/commands/utility-operations#get-folder-notes) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetFolderNotes` |
| Operation ID | `utility_operations.get_folder_notes` |
| Route | `/briosa.UtilityOperations/GetFolderNotes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `string` | `Folder Path` | Empty |
| Result | 1 | `notes` | `repeated string` | `Notes` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetFolderNotes(GetFolderNotesRequest) returns (GetFolderNotesResult);

message GetFolderNotesRequest {
  optional string folder_path = 1;
}

message GetFolderNotesResult {
  repeated string notes = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Folders by Wildcard

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Folders by Wildcard](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetFoldersByWildcard` |
| Operation ID | `utility_operations.get_folders_by_wildcard` |
| Route | `/briosa.UtilityOperations/GetFoldersByWildcard` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `search_string` | `string` | `Search String` | Empty |
| Request | 2 | `case_sensitive_search` | `bool` | `Case Sensitive Search` | true |
| Result | 1 | `folder_list` | `repeated string` | `Folder List` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetFoldersByWildcard(GetFoldersByWildcardRequest) returns (GetFoldersByWildcardResult);

message GetFoldersByWildcardRequest {
  optional string search_string = 1;
  optional bool case_sensitive_search = 2;
}

message GetFoldersByWildcardResult {
  repeated string folder_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Object Notes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Object Notes](/mp-command-catalog/commands/utility-operations#get-object-notes) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetObjectNotes` |
| Operation ID | `utility_operations.get_object_notes` |
| Route | `/briosa.UtilityOperations/GetObjectNotes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object` | `CollectionObjectName` | `Object` | Required |
| Result | 1 | `notes` | `repeated string` | `Notes` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetObjectNotes(GetObjectNotesRequest) returns (GetObjectNotesResult);

message GetObjectNotesRequest {
  optional CollectionObjectName object = 1;
}

message GetObjectNotesResult {
  repeated string notes = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get OPC DA Tag Value Double

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get OPC DA Tag Value Double](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetOpcDaTagValueDouble` |
| Operation ID | `utility_operations.get_opc_da_tag_value_double` |
| Route | `/briosa.UtilityOperations/GetOpcDaTagValueDouble` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `string` | `OPC Server DA Tag Name` | Empty |
| Result | 1 | `value` | `double` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetOpcDaTagValueDouble(GetOpcDaTagValueDoubleRequest) returns (GetOpcDaTagValueDoubleResult);

message GetOpcDaTagValueDoubleRequest {
  optional string opc_server_da_tag_name = 1;
}

message GetOpcDaTagValueDoubleResult {
  optional double value = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get OPC DA Tag Value Integer

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get OPC DA Tag Value Integer](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetOpcDaTagValueInteger` |
| Operation ID | `utility_operations.get_opc_da_tag_value_integer` |
| Route | `/briosa.UtilityOperations/GetOpcDaTagValueInteger` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `string` | `OPC Server DA Tag Name` | Empty |
| Result | 1 | `value` | `int32` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetOpcDaTagValueInteger(GetOpcDaTagValueIntegerRequest) returns (GetOpcDaTagValueIntegerResult);

message GetOpcDaTagValueIntegerRequest {
  optional string opc_server_da_tag_name = 1;
}

message GetOpcDaTagValueIntegerResult {
  optional int32 value = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get OPC DA Tag Value String

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get OPC DA Tag Value String](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetOpcDaTagValueString` |
| Operation ID | `utility_operations.get_opc_da_tag_value_string` |
| Route | `/briosa.UtilityOperations/GetOpcDaTagValueString` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `string` | `OPC Server DA Tag Name` | Empty |
| Result | 1 | `value` | `string` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetOpcDaTagValueString(GetOpcDaTagValueStringRequest) returns (GetOpcDaTagValueStringResult);

message GetOpcDaTagValueStringRequest {
  optional string opc_server_da_tag_name = 1;
}

message GetOpcDaTagValueStringResult {
  optional string value = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point Notes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point Notes](/mp-command-catalog/commands/utility-operations#get-point-notes) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetPointNotes` |
| Operation ID | `utility_operations.get_point_notes` |
| Route | `/briosa.UtilityOperations/GetPointNotes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `PointName` | `Point` | Required |
| Result | 1 | `notes` | `repeated string` | `Notes` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPointNotes(GetPointNotesRequest) returns (GetPointNotesResult);

message GetPointNotesRequest {
  optional PointName point = 1;
}

message GetPointNotesResult {
  repeated string notes = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Screen Resolution

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Screen Resolution](/mp-command-catalog/commands/utility-operations#get-screen-resolution) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetScreenResolution` |
| Operation ID | `utility_operations.get_screen_resolution` |
| Route | `/briosa.UtilityOperations/GetScreenResolution` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `display_1_primary` | `int32` | `Display (-1 = Primary)` | -1 |
| Result | 1 | `integer_window_top_left_x_position` | `int32` | `Integer Window Top Left X Position` | — |
| Result | 2 | `integer_window_top_left_y_position` | `int32` | `Integer Window Top Left Y Position` | — |
| Result | 3 | `integer_width` | `int32` | `Integer Width` | — |
| Result | 4 | `integer_height` | `int32` | `Integer Height` | — |
| Result | 5 | `view_width` | `int32` | `View Width` | — |
| Result | 6 | `view_height` | `int32` | `View Height` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetScreenResolution(GetScreenResolutionRequest) returns (GetScreenResolutionResult);

message GetScreenResolutionRequest {
  optional int32 display_1_primary = 1;
}

message GetScreenResolutionResult {
  optional int32 integer_window_top_left_x_position = 1;
  optional int32 integer_window_top_left_y_position = 2;
  optional int32 integer_width = 3;
  optional int32 integer_height = 4;
  optional int32 view_width = 5;
  optional int32 view_height = 6;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Working Frame Properties

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Working Frame Properties](/mp-command-catalog/commands/utility-operations#get-working-frame-properties) |
| Service | `briosa.UtilityOperations` |
| RPC | `GetWorkingFrameProperties` |
| Operation ID | `utility_operations.get_working_frame_properties` |
| Route | `/briosa.UtilityOperations/GetWorkingFrameProperties` |
| Validation | Released implementation |
| Automatic Replay | Safe for the current read-only operation |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `frame_name` | `string` | `Frame Name` | — |
| Result | 2 | `collection_name` | `string` | `Collection Name` | — |
| Result | 3 | `working_frame` | `CollectionObjectName` | `Working Frame` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetWorkingFrameProperties(GetWorkingFramePropertiesRequest) returns (GetWorkingFramePropertiesResult);

message GetWorkingFramePropertiesRequest {
  // No MP inputs.
}

message GetWorkingFramePropertiesResult {
  optional string frame_name = 1;
  optional string collection_name = 2;
  optional CollectionObjectName working_frame = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Increment Point Name

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Increment Point Name](/mp-command-catalog/commands/utility-operations#increment-point-name) |
| Service | `briosa.UtilityOperations` |
| RPC | `IncrementPointName` |
| Operation ID | `utility_operations.increment_point_name` |
| Route | `/briosa.UtilityOperations/IncrementPointName` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `base_point_name` | `PointName` | `'Base' Point Name` | Required |
| Request | 2 | `increment` | `int32` | `Increment` | 0 |
| Result | 1 | `resultant_point_name` | `PointName` | `Resultant Point Name` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc IncrementPointName(IncrementPointNameRequest) returns (IncrementPointNameResult);

message IncrementPointNameRequest {
  optional PointName base_point_name = 1;
  optional int32 increment = 2;
}

message IncrementPointNameResult {
  optional PointName resultant_point_name = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Lock Imported Items

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Lock Imported Items](/mp-command-catalog/commands/utility-operations#lock-imported-items) |
| Service | `briosa.UtilityOperations` |
| RPC | `LockImportedItems` |
| Operation ID | `utility_operations.lock_imported_items` |
| Route | `/briosa.UtilityOperations/LockImportedItems` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `lock_items` | `bool` | `Lock Items?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc LockImportedItems(LockImportedItemsRequest) returns (LockImportedItemsResult);

message LockImportedItemsRequest {
  optional bool lock_items = 1;
}

message LockImportedItemsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Lock/Unlock Selected Items

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Lock/Unlock Selected Items](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items) |
| Service | `briosa.UtilityOperations` |
| RPC | `LockUnlockSelectedItems` |
| Operation ID | `utility_operations.lock_unlock_selected_items` |
| Route | `/briosa.UtilityOperations/LockUnlockSelectedItems` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `item_list` | `repeated CollectionItemName` | `Item List` | Required |
| Request | 2 | `instruments` | `repeated CollectionInstrumentId` | `Instruments` | Required |
| Request | 3 | `lock_items` | `bool` | `Lock Items?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc LockUnlockSelectedItems(LockUnlockSelectedItemsRequest) returns (LockUnlockSelectedItemsResult);

message LockUnlockSelectedItemsRequest {
  repeated CollectionItemName item_list = 1;
  repeated CollectionInstrumentId instruments = 2;
  optional bool lock_items = 3;
}

message LockUnlockSelectedItemsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Lock/Unlock Trapping Control

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Lock/Unlock Trapping Control](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control) |
| Service | `briosa.UtilityOperations` |
| RPC | `LockUnlockTrappingControl` |
| Operation ID | `utility_operations.lock_unlock_trapping_control` |
| Route | `/briosa.UtilityOperations/LockUnlockTrappingControl` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_ref_list` | `repeated CollectionItemName` | `Relationship Ref List` | Required |
| Request | 2 | `feature_check_ref_list` | `repeated CollectionItemName` | `Feature Check Ref List` | Required |
| Request | 3 | `datum_ref_list` | `repeated CollectionObjectName` | `Datum Ref List` | Required |
| Request | 4 | `lock_out_trapping` | `bool` | `Lock Out Trapping?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc LockUnlockTrappingControl(LockUnlockTrappingControlRequest) returns (LockUnlockTrappingControlResult);

message LockUnlockTrappingControlRequest {
  repeated CollectionItemName relationship_ref_list = 1;
  repeated CollectionItemName feature_check_ref_list = 2;
  repeated CollectionObjectName datum_ref_list = 3;
  optional bool lock_out_trapping = 4;
}

message LockUnlockTrappingControlResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Move Collection to Folder

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Move Collection to Folder](/mp-command-catalog/commands/utility-operations#move-collection-to-folder) |
| Service | `briosa.UtilityOperations` |
| RPC | `MoveCollectionToFolder` |
| Operation ID | `utility_operations.move_collection_to_folder` |
| Route | `/briosa.UtilityOperations/MoveCollectionToFolder` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `CollectionName` | `Collection` | Required |
| Request | 2 | `folder_path` | `string` | `Folder Path` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MoveCollectionToFolder(MoveCollectionToFolderRequest) returns (MoveCollectionToFolderResult);

message MoveCollectionToFolderRequest {
  optional CollectionName collection = 1;
  optional string folder_path = 2;
}

message MoveCollectionToFolderResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Move Folder to Folder

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Move Folder to Folder](/mp-command-catalog/commands/utility-operations#move-folder-to-folder) |
| Service | `briosa.UtilityOperations` |
| RPC | `MoveFolderToFolder` |
| Operation ID | `utility_operations.move_folder_to_folder` |
| Route | `/briosa.UtilityOperations/MoveFolderToFolder` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_folder_path` | `string` | `Source Folder Path` | Empty |
| Request | 2 | `destination_folder_path` | `string` | `Destination Folder Path` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MoveFolderToFolder(MoveFolderToFolderRequest) returns (MoveFolderToFolderResult);

message MoveFolderToFolderRequest {
  optional string source_folder_path = 1;
  optional string destination_folder_path = 2;
}

message MoveFolderToFolderResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Move Instruments Drag Graphically

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Move Instruments Drag Graphically](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically) |
| Service | `briosa.UtilityOperations` |
| RPC | `MoveInstrumentsDragGraphically` |
| Operation ID | `utility_operations.move_instruments_drag_graphically` |
| Route | `/briosa.UtilityOperations/MoveInstrumentsDragGraphically` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | `repeated CollectionInstrumentId` | `Instruments` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MoveInstrumentsDragGraphically(MoveInstrumentsDragGraphicallyRequest) returns (MoveInstrumentsDragGraphicallyResult);

message MoveInstrumentsDragGraphicallyRequest {
  repeated CollectionInstrumentId instruments = 1;
}

message MoveInstrumentsDragGraphicallyResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Move Objects Drag Graphically

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Move Objects Drag Graphically](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically) |
| Service | `briosa.UtilityOperations` |
| RPC | `MoveObjectsDragGraphically` |
| Operation ID | `utility_operations.move_objects_drag_graphically` |
| Route | `/briosa.UtilityOperations/MoveObjectsDragGraphically` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | `Objects` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MoveObjectsDragGraphically(MoveObjectsDragGraphicallyRequest) returns (MoveObjectsDragGraphicallyResult);

message MoveObjectsDragGraphicallyRequest {
  repeated CollectionObjectName objects = 1;
}

message MoveObjectsDragGraphicallyResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Scale Objects

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Scale Objects](/mp-command-catalog/commands/utility-operations#scale-objects) |
| Service | `briosa.UtilityOperations` |
| RPC | `ScaleObjects` |
| Operation ID | `utility_operations.scale_objects` |
| Route | `/briosa.UtilityOperations/ScaleObjects` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | `Objects` | Required |
| Request | 2 | `scale_factor` | `double` | `Scale Factor` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ScaleObjects(ScaleObjectsRequest) returns (ScaleObjectsResult);

message ScaleObjectsRequest {
  repeated CollectionObjectName objects = 1;
  optional double scale_factor = 2;
}

message ScaleObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Active Custom Language

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Active Custom Language](/mp-command-catalog/commands/utility-operations#set-active-custom-language) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetActiveCustomLanguage` |
| Operation ID | `utility_operations.set_active_custom_language` |
| Route | `/briosa.UtilityOperations/SetActiveCustomLanguage` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `language_file_name` | `FileReference` | `Language File Name` | Required |
| Request | 2 | `font` | `Font` | `Font` | MS Shell Dlg |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetActiveCustomLanguage(SetActiveCustomLanguageRequest) returns (SetActiveCustomLanguageResult);

message SetActiveCustomLanguageRequest {
  optional FileReference language_file_name = 1;
  optional Font font = 2;
}

message SetActiveCustomLanguageResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Active Units

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Active Units](/mp-command-catalog/commands/utility-operations#set-active-units) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetActiveUnits` |
| Operation ID | `utility_operations.set_active_units` |
| Route | `/briosa.UtilityOperations/SetActiveUnits` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `length` | `DistanceUnits` | `Length` | Inches |
| Request | 2 | `display_inch_fractions` | `bool` | `Display Inch Fractions?` | false |
| Request | 3 | `inch_fraction_denominator` | `double` | `Inch Fraction Denominator?` | 16.000000 |
| Request | 4 | `simplify_inch_fraction` | `bool` | `Simplify Inch Fraction?` | true |
| Request | 5 | `temperature` | `TemperatureUnits` | `Temperature` | Fahrenheit |
| Request | 6 | `angular` | `AngularUnits` | `Angular` | Degrees |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetActiveUnits(SetActiveUnitsRequest) returns (SetActiveUnitsResult);

message SetActiveUnitsRequest {
  optional DistanceUnits length = 1;
  optional bool display_inch_fractions = 2;
  optional double inch_fraction_denominator = 3;
  optional bool simplify_inch_fraction = 4;
  optional TemperatureUnits temperature = 5;
  optional AngularUnits angular = 6;
}

message SetActiveUnitsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Angular Representation

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Angular Representation](/mp-command-catalog/commands/utility-operations#set-angular-representation) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetAngularRepresentation` |
| Operation ID | `utility_operations.set_angular_representation` |
| Route | `/briosa.UtilityOperations/SetAngularRepresentation` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `value_0_360_false_180` | `bool` | `0-360, (FALSE = +/-180)` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetAngularRepresentation(SetAngularRepresentationRequest) returns (SetAngularRepresentationResult);

message SetAngularRepresentationRequest {
  optional bool value_0_360_false_180 = 1;
}

message SetAngularRepresentationResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Auto Event Creation

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Auto Event Creation](/mp-command-catalog/commands/utility-operations#set-auto-event-creation) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetAutoEventCreation` |
| Operation ID | `utility_operations.set_auto_event_creation` |
| Route | `/briosa.UtilityOperations/SetAutoEventCreation` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `active` | `bool` | `Active?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetAutoEventCreation(SetAutoEventCreationRequest) returns (SetAutoEventCreationResult);

message SetAutoEventCreationRequest {
  optional bool active = 1;
}

message SetAutoEventCreationResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Automatic Backup State

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Automatic Backup State](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetAutomaticBackupState` |
| Operation ID | `utility_operations.set_automatic_backup_state` |
| Route | `/briosa.UtilityOperations/SetAutomaticBackupState` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_job_file_restore_points_active` | `bool` | `Auto Job File Restore Points Active?` | true |
| Request | 2 | `auto_measurements_backup_active` | `bool` | `Auto Measurements Backup Active?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetAutomaticBackupState(SetAutomaticBackupStateRequest) returns (SetAutomaticBackupStateResult);

message SetAutomaticBackupStateRequest {
  optional bool auto_job_file_restore_points_active = 1;
  optional bool auto_measurements_backup_active = 2;
}

message SetAutomaticBackupStateResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Automatic Relationship Construction State

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Automatic Relationship Construction State](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetAutomaticRelationshipConstructionState` |
| Operation ID | `utility_operations.set_automatic_relationship_construction_state` |
| Route | `/briosa.UtilityOperations/SetAutomaticRelationshipConstructionState` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `active` | `bool` | `Active?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetAutomaticRelationshipConstructionState(SetAutomaticRelationshipConstructionStateRequest) returns (SetAutomaticRelationshipConstructionStateResult);

message SetAutomaticRelationshipConstructionStateRequest {
  optional bool active = 1;
}

message SetAutomaticRelationshipConstructionStateResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Collection Notes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Collection Notes](/mp-command-catalog/commands/utility-operations#set-collection-notes) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetCollectionNotes` |
| Operation ID | `utility_operations.set_collection_notes` |
| Route | `/briosa.UtilityOperations/SetCollectionNotes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `CollectionName` | `Collection` | Required |
| Request | 2 | `notes` | `repeated string` | `Notes` | Required |
| Request | 3 | `append_false_overwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetCollectionNotes(SetCollectionNotesRequest) returns (SetCollectionNotesResult);

message SetCollectionNotesRequest {
  optional CollectionName collection = 1;
  repeated string notes = 2;
  optional bool append_false_overwrite = 3;
}

message SetCollectionNotesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Decimal Digits for Display

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Decimal Digits for Display](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetDecimalDigitsForDisplay` |
| Operation ID | `utility_operations.set_decimal_digits_for_display` |
| Route | `/briosa.UtilityOperations/SetDecimalDigitsForDisplay` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `length` | `int32` | `Length` | 4 |
| Request | 2 | `angle` | `int32` | `Angle` | 4 |
| Request | 3 | `scale` | `int32` | `Scale` | 6 |
| Request | 4 | `unit_vector` | `int32` | `Unit Vector` | 6 |
| Request | 5 | `weight` | `int32` | `Weight` | 3 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetDecimalDigitsForDisplay(SetDecimalDigitsForDisplayRequest) returns (SetDecimalDigitsForDisplayResult);

message SetDecimalDigitsForDisplayRequest {
  optional int32 length = 1;
  optional int32 angle = 2;
  optional int32 scale = 3;
  optional int32 unit_vector = 4;
  optional int32 weight = 5;
}

message SetDecimalDigitsForDisplayResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Folder Notes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Folder Notes](/mp-command-catalog/commands/utility-operations#set-folder-notes) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetFolderNotes` |
| Operation ID | `utility_operations.set_folder_notes` |
| Route | `/briosa.UtilityOperations/SetFolderNotes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `string` | `Folder Path` | Empty |
| Request | 2 | `notes` | `repeated string` | `Notes` | Required |
| Request | 3 | `append_false_overwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetFolderNotes(SetFolderNotesRequest) returns (SetFolderNotesResult);

message SetFolderNotesRequest {
  optional string folder_path = 1;
  repeated string notes = 2;
  optional bool append_false_overwrite = 3;
}

message SetFolderNotesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Interaction Mode

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Interaction Mode](/mp-command-catalog/commands/utility-operations#set-interaction-mode) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetInteractionMode` |
| Operation ID | `utility_operations.set_interaction_mode` |
| Route | `/briosa.UtilityOperations/SetInteractionMode` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_interaction_mode` | `SaInteractionMode` | `SA Interaction Mode` | Required |
| Request | 2 | `measurement_plan_interaction_mode` | `MpInteractionMode` | `Measurement Plan Interaction Mode` | Required |
| Request | 3 | `measurement_plan_dialog_interaction_mode` | `MpDialogInteractionMode` | `Measurement Plan Dialog Interaction Mode` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetInteractionMode(SetInteractionModeRequest) returns (SetInteractionModeResult);

message SetInteractionModeRequest {
  optional SaInteractionMode sa_interaction_mode = 1;
  optional MpInteractionMode measurement_plan_interaction_mode = 2;
  optional MpDialogInteractionMode measurement_plan_dialog_interaction_mode = 3;
}

message SetInteractionModeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Logging State

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Logging State](/mp-command-catalog/commands/utility-operations#set-logging-state) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetLoggingState` |
| Operation ID | `utility_operations.set_logging_state` |
| Route | `/briosa.UtilityOperations/SetLoggingState` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `active` | `bool` | `Active?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetLoggingState(SetLoggingStateRequest) returns (SetLoggingStateResult);

message SetLoggingStateRequest {
  optional bool active = 1;
}

message SetLoggingStateResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Notification Cancel Override

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Notification Cancel Override](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetNotificationCancelOverride` |
| Operation ID | `utility_operations.set_notification_cancel_override` |
| Route | `/briosa.UtilityOperations/SetNotificationCancelOverride` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `prohibit_cancel` | `bool` | `Prohibit Cancel?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetNotificationCancelOverride(SetNotificationCancelOverrideRequest) returns (SetNotificationCancelOverrideResult);

message SetNotificationCancelOverrideRequest {
  optional bool prohibit_cancel = 1;
}

message SetNotificationCancelOverrideResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Object Notes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Object Notes](/mp-command-catalog/commands/utility-operations#set-object-notes) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetObjectNotes` |
| Operation ID | `utility_operations.set_object_notes` |
| Route | `/briosa.UtilityOperations/SetObjectNotes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object` | `CollectionObjectName` | `Object` | Required |
| Request | 2 | `notes` | `repeated string` | `Notes` | Required |
| Request | 3 | `append_false_overwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetObjectNotes(SetObjectNotesRequest) returns (SetObjectNotesResult);

message SetObjectNotesRequest {
  optional CollectionObjectName object = 1;
  repeated string notes = 2;
  optional bool append_false_overwrite = 3;
}

message SetObjectNotesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set OPC DA Tag Value Double

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set OPC DA Tag Value Double](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetOpcDaTagValueDouble` |
| Operation ID | `utility_operations.set_opc_da_tag_value_double` |
| Route | `/briosa.UtilityOperations/SetOpcDaTagValueDouble` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `string` | `OPC Server DA Tag Name` | Empty |
| Request | 2 | `value` | `double` | `Value` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetOpcDaTagValueDouble(SetOpcDaTagValueDoubleRequest) returns (SetOpcDaTagValueDoubleResult);

message SetOpcDaTagValueDoubleRequest {
  optional string opc_server_da_tag_name = 1;
  optional double value = 2;
}

message SetOpcDaTagValueDoubleResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set OPC DA Tag Value Integer

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set OPC DA Tag Value Integer](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetOpcDaTagValueInteger` |
| Operation ID | `utility_operations.set_opc_da_tag_value_integer` |
| Route | `/briosa.UtilityOperations/SetOpcDaTagValueInteger` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `string` | `OPC Server DA Tag Name` | Empty |
| Request | 2 | `value` | `int32` | `Value` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetOpcDaTagValueInteger(SetOpcDaTagValueIntegerRequest) returns (SetOpcDaTagValueIntegerResult);

message SetOpcDaTagValueIntegerRequest {
  optional string opc_server_da_tag_name = 1;
  optional int32 value = 2;
}

message SetOpcDaTagValueIntegerResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set OPC DA Tag Value String

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set OPC DA Tag Value String](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetOpcDaTagValueString` |
| Operation ID | `utility_operations.set_opc_da_tag_value_string` |
| Route | `/briosa.UtilityOperations/SetOpcDaTagValueString` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `string` | `OPC Server DA Tag Name` | Empty |
| Request | 2 | `value` | `string` | `Value` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetOpcDaTagValueString(SetOpcDaTagValueStringRequest) returns (SetOpcDaTagValueStringResult);

message SetOpcDaTagValueStringRequest {
  optional string opc_server_da_tag_name = 1;
  optional string value = 2;
}

message SetOpcDaTagValueStringResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Point Notes

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Point Notes](/mp-command-catalog/commands/utility-operations#set-point-notes) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetPointNotes` |
| Operation ID | `utility_operations.set_point_notes` |
| Route | `/briosa.UtilityOperations/SetPointNotes` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `PointName` | `Point` | Required |
| Request | 2 | `notes` | `repeated string` | `Notes` | Required |
| Request | 3 | `append_false_overwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetPointNotes(SetPointNotesRequest) returns (SetPointNotesResult);

message SetPointNotesRequest {
  optional PointName point = 1;
  repeated string notes = 2;
  optional bool append_false_overwrite = 3;
}

message SetPointNotesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set User Interface Profile

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set User Interface Profile](/mp-command-catalog/commands/utility-operations#set-user-interface-profile) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetUserInterfaceProfile` |
| Operation ID | `utility_operations.set_user_interface_profile` |
| Route | `/briosa.UtilityOperations/SetUserInterfaceProfile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `profile_name` | `string` | `Profile Name` | Default |
| Request | 2 | `profile_file_name_optional` | `FileReference` | `Profile File Name (optional)` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetUserInterfaceProfile(SetUserInterfaceProfileRequest) returns (SetUserInterfaceProfileResult);

message SetUserInterfaceProfileRequest {
  optional string profile_name = 1;
  optional FileReference profile_file_name_optional = 2;
}

message SetUserInterfaceProfileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set View Idle Update Frequency

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set View Idle Update Frequency](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetViewIdleUpdateFrequency` |
| Operation ID | `utility_operations.set_view_idle_update_frequency` |
| Route | `/briosa.UtilityOperations/SetViewIdleUpdateFrequency` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `idle_count` | `int32` | `Idle Count` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetViewIdleUpdateFrequency(SetViewIdleUpdateFrequencyRequest) returns (SetViewIdleUpdateFrequencyResult);

message SetViewIdleUpdateFrequencyRequest {
  optional int32 idle_count = 1;
}

message SetViewIdleUpdateFrequencyResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set WildCard Asterisk Mode

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set WildCard Asterisk Mode](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetWildCardAsteriskMode` |
| Operation ID | `utility_operations.set_wild_card_asterisk_mode` |
| Route | `/briosa.UtilityOperations/SetWildCardAsteriskMode` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_wrap_search_string` | `bool` | `Auto Wrap Search String?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetWildCardAsteriskMode(SetWildCardAsteriskModeRequest) returns (SetWildCardAsteriskModeResult);

message SetWildCardAsteriskModeRequest {
  optional bool auto_wrap_search_string = 1;
}

message SetWildCardAsteriskModeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Working Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Working Frame](/mp-command-catalog/commands/utility-operations#set-working-frame) |
| Service | `briosa.UtilityOperations` |
| RPC | `SetWorkingFrame` |
| Operation ID | `utility_operations.set_working_frame` |
| Route | `/briosa.UtilityOperations/SetWorkingFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_working_frame_name` | `CollectionObjectName` | `New Working Frame Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetWorkingFrame(SetWorkingFrameRequest) returns (SetWorkingFrameResult);

message SetWorkingFrameRequest {
  optional CollectionObjectName new_working_frame_name = 1;
}

message SetWorkingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Status Dialog

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Status Dialog](/mp-command-catalog/commands/utility-operations#status-dialog) |
| Service | `briosa.UtilityOperations` |
| RPC | `StatusDialog` |
| Operation ID | `utility_operations.status_dialog` |
| Route | `/briosa.UtilityOperations/StatusDialog` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dialog_title` | `string` | `Dialog Title` | Empty |
| Request | 2 | `text_message` | `string` | `Text Message` | Empty |
| Request | 3 | `current_position` | `int32` | `Current Position` | 0 |
| Request | 4 | `upper_limit` | `int32` | `Upper Limit` | 0 |
| Request | 5 | `suppress_time_remaining` | `bool` | `Suppress Time Remaining?` | true |
| Request | 6 | `close_dialog` | `bool` | `Close Dialog?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc StatusDialog(StatusDialogRequest) returns (StatusDialogResult);

message StatusDialogRequest {
  optional string dialog_title = 1;
  optional string text_message = 2;
  optional int32 current_position = 3;
  optional int32 upper_limit = 4;
  optional bool suppress_time_remaining = 5;
  optional bool close_dialog = 6;
}

message StatusDialogResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Trim Log File

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Trim Log File](/mp-command-catalog/commands/utility-operations#trim-log-file) |
| Service | `briosa.UtilityOperations` |
| RPC | `TrimLogFile` |
| Operation ID | `utility_operations.trim_log_file` |
| Route | `/briosa.UtilityOperations/TrimLogFile` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `number_of_entries_to_keep` | `int32` | `Number of Entries to Keep` | 10 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc TrimLogFile(TrimLogFileRequest) returns (TrimLogFileResult);

message TrimLogFileRequest {
  optional int32 number_of_entries_to_keep = 1;
}

message TrimLogFileResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Write to Log

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Write to Log](/mp-command-catalog/commands/utility-operations#write-to-log) |
| Service | `briosa.UtilityOperations` |
| RPC | `WriteToLog` |
| Operation ID | `utility_operations.write_to_log` |
| Route | `/briosa.UtilityOperations/WriteToLog` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `log_entry` | `string` | `Log Entry` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc WriteToLog(WriteToLogRequest) returns (WriteToLogResult);

message WriteToLogRequest {
  optional string log_entry = 1;
}

message WriteToLogResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
