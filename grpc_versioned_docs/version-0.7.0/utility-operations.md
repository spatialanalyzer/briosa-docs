---
title: Utility Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Utility Operations

[SA 2026.1.0529.7](/api/grpc/utility-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/utility-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Close All Watch Windows {/* #close-all-watch-windows */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#close-all-watch-windows)

`/briosa.UtilityOperations/CloseAllWatchWindows` · Operation ID: `utility_operations.close_all_watch_windows`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CloseAllWatchWindows(CloseAllWatchWindowsRequest) returns (CloseAllWatchWindowsResult);

message CloseAllWatchWindowsRequest {
  // No MP inputs.
}

message CloseAllWatchWindowsResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Folder {/* #delete-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-folder)

`/briosa.UtilityOperations/DeleteFolder` · Operation ID: `utility_operations.delete_folder`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `optional string` | Folder Path | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteFolder(DeleteFolderRequest) returns (DeleteFolderResult);

message DeleteFolderRequest {
  optional string folder_path = 1;
}

message DeleteFolderResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Items {/* #delete-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-items)

`/briosa.UtilityOperations/DeleteItems` · Operation ID: `utility_operations.delete_items`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `item_list` | `repeated CollectionItemName` | Item List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteItems(DeleteItemsRequest) returns (DeleteItemsResult);

message DeleteItemsRequest {
  repeated CollectionItemName item_list = 1;
}

message DeleteItemsResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Objects {/* #delete-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-objects)

`/briosa.UtilityOperations/DeleteObjects` · Operation ID: `utility_operations.delete_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_names` | `repeated CollectionObjectName` | Object Names | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteObjects(DeleteObjectsRequest) returns (DeleteObjectsResult);

message DeleteObjectsRequest {
  repeated CollectionObjectName object_names = 1;
}

message DeleteObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Active Language {/* #get-active-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-language)

`/briosa.UtilityOperations/GetActiveLanguage` · Operation ID: `utility_operations.get_active_language`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `language_file_name` | `optional FileReference` | Language File Name | — |
| Result | 2 | `custom_language` | `optional bool` | Custom Language? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Active Units {/* #get-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-units)

`/briosa.UtilityOperations/GetActiveUnits` · Operation ID: `utility_operations.get_active_units`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `length` | `optional string` | Length | — |
| Result | 2 | `angular` | `optional string` | Angular | — |
| Result | 3 | `temperature` | `optional string` | Temperature | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Angular Representation {/* #get-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-angular-representation)

`/briosa.UtilityOperations/GetAngularRepresentation` · Operation ID: `utility_operations.get_angular_representation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `value_0_360_false_180` | `optional bool` | 0-360, (FALSE = +/-180) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Collection Notes {/* #get-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-collection-notes)

`/briosa.UtilityOperations/GetCollectionNotes` · Operation ID: `utility_operations.get_collection_notes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection | Required |
| Result | 1 | `notes` | `repeated string` | Notes | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Folder Collections {/* #get-folder-collections */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-collections)

`/briosa.UtilityOperations/GetFolderCollections` · Operation ID: `utility_operations.get_folder_collections`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `optional string` | Folder Path | Empty |
| Result | 1 | `collection_list` | `repeated string` | Collection List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Folder Notes {/* #get-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-notes)

`/briosa.UtilityOperations/GetFolderNotes` · Operation ID: `utility_operations.get_folder_notes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `optional string` | Folder Path | Empty |
| Result | 1 | `notes` | `repeated string` | Notes | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Folders by Wildcard {/* #get-folders-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard)

`/briosa.UtilityOperations/GetFoldersByWildcard` · Operation ID: `utility_operations.get_folders_by_wildcard`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `search_string` | `optional string` | Search String | Empty |
| Request | 2 | `case_sensitive_search` | `optional bool` | Case Sensitive Search | true |
| Result | 1 | `folder_list` | `repeated string` | Folder List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Object Notes {/* #get-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-object-notes)

`/briosa.UtilityOperations/GetObjectNotes` · Operation ID: `utility_operations.get_object_notes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object` | `optional CollectionObjectName` | Object | Required |
| Result | 1 | `notes` | `repeated string` | Notes | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get OPC DA Tag Value Double {/* #get-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double)

`/briosa.UtilityOperations/GetOpcDaTagValueDouble` · Operation ID: `utility_operations.get_opc_da_tag_value_double`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `optional string` | OPC Server DA Tag Name | Empty |
| Result | 1 | `value` | `optional double` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get OPC DA Tag Value Integer {/* #get-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer)

`/briosa.UtilityOperations/GetOpcDaTagValueInteger` · Operation ID: `utility_operations.get_opc_da_tag_value_integer`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `optional string` | OPC Server DA Tag Name | Empty |
| Result | 1 | `value` | `optional int32` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get OPC DA Tag Value String {/* #get-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string)

`/briosa.UtilityOperations/GetOpcDaTagValueString` · Operation ID: `utility_operations.get_opc_da_tag_value_string`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `optional string` | OPC Server DA Tag Name | Empty |
| Result | 1 | `value` | `optional string` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Point Notes {/* #get-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-point-notes)

`/briosa.UtilityOperations/GetPointNotes` · Operation ID: `utility_operations.get_point_notes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point | Required |
| Result | 1 | `notes` | `repeated string` | Notes | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Screen Resolution {/* #get-screen-resolution */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-screen-resolution)

`/briosa.UtilityOperations/GetScreenResolution` · Operation ID: `utility_operations.get_screen_resolution`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `display_1_primary` | `optional int32` | Display (-1 = Primary) | -1 |
| Result | 1 | `integer_window_top_left_x_position` | `optional int32` | Integer Window Top Left X Position | — |
| Result | 2 | `integer_window_top_left_y_position` | `optional int32` | Integer Window Top Left Y Position | — |
| Result | 3 | `integer_width` | `optional int32` | Integer Width | — |
| Result | 4 | `integer_height` | `optional int32` | Integer Height | — |
| Result | 5 | `view_width` | `optional int32` | View Width | — |
| Result | 6 | `view_height` | `optional int32` | View Height | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Working Frame Properties {/* #get-working-frame-properties */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-working-frame-properties)

`/briosa.UtilityOperations/GetWorkingFrameProperties` · Operation ID: `utility_operations.get_working_frame_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `frame_name` | `optional string` | Frame Name | — |
| Result | 2 | `collection_name` | `optional string` | Collection Name | — |
| Result | 3 | `working_frame` | `optional CollectionObjectName` | Working Frame | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Increment Point Name {/* #increment-point-name */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#increment-point-name)

`/briosa.UtilityOperations/IncrementPointName` · Operation ID: `utility_operations.increment_point_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `base_point_name` | `optional PointName` | 'Base' Point Name | Required |
| Request | 2 | `increment` | `optional int32` | Increment | 0 |
| Result | 1 | `resultant_point_name` | `optional PointName` | Resultant Point Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Lock Imported Items {/* #lock-imported-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lock-imported-items)

`/briosa.UtilityOperations/LockImportedItems` · Operation ID: `utility_operations.lock_imported_items`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `lock_items` | `optional bool` | Lock Items? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LockImportedItems(LockImportedItemsRequest) returns (LockImportedItemsResult);

message LockImportedItemsRequest {
  optional bool lock_items = 1;
}

message LockImportedItemsResult {
  MpExecutionDetails execution = 1000;
}
```

## Lock/Unlock Selected Items {/* #lockunlock-selected-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items)

`/briosa.UtilityOperations/LockUnlockSelectedItems` · Operation ID: `utility_operations.lock_unlock_selected_items`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `item_list` | `repeated CollectionItemName` | Item List | Required |
| Request | 2 | `instruments` | `repeated CollectionInstrumentId` | Instruments | Required |
| Request | 3 | `lock_items` | `optional bool` | Lock Items? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Lock/Unlock Trapping Control {/* #lockunlock-trapping-control */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control)

`/briosa.UtilityOperations/LockUnlockTrappingControl` · Operation ID: `utility_operations.lock_unlock_trapping_control`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_ref_list` | `repeated CollectionItemName` | Relationship Ref List | Required |
| Request | 2 | `feature_check_ref_list` | `repeated CollectionItemName` | Feature Check Ref List | Required |
| Request | 3 | `datum_ref_list` | `repeated CollectionObjectName` | Datum Ref List | Required |
| Request | 4 | `lock_out_trapping` | `optional bool` | Lock Out Trapping? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Move Collection to Folder {/* #move-collection-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-collection-to-folder)

`/briosa.UtilityOperations/MoveCollectionToFolder` · Operation ID: `utility_operations.move_collection_to_folder`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection | Required |
| Request | 2 | `folder_path` | `optional string` | Folder Path | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Move Folder to Folder {/* #move-folder-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-folder-to-folder)

`/briosa.UtilityOperations/MoveFolderToFolder` · Operation ID: `utility_operations.move_folder_to_folder`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_folder_path` | `optional string` | Source Folder Path | Empty |
| Request | 2 | `destination_folder_path` | `optional string` | Destination Folder Path | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Move Instruments Drag Graphically {/* #move-instruments-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically)

`/briosa.UtilityOperations/MoveInstrumentsDragGraphically` · Operation ID: `utility_operations.move_instruments_drag_graphically`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | `repeated CollectionInstrumentId` | Instruments | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MoveInstrumentsDragGraphically(MoveInstrumentsDragGraphicallyRequest) returns (MoveInstrumentsDragGraphicallyResult);

message MoveInstrumentsDragGraphicallyRequest {
  repeated CollectionInstrumentId instruments = 1;
}

message MoveInstrumentsDragGraphicallyResult {
  MpExecutionDetails execution = 1000;
}
```

## Move Objects Drag Graphically {/* #move-objects-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically)

`/briosa.UtilityOperations/MoveObjectsDragGraphically` · Operation ID: `utility_operations.move_objects_drag_graphically`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MoveObjectsDragGraphically(MoveObjectsDragGraphicallyRequest) returns (MoveObjectsDragGraphicallyResult);

message MoveObjectsDragGraphicallyRequest {
  repeated CollectionObjectName objects = 1;
}

message MoveObjectsDragGraphicallyResult {
  MpExecutionDetails execution = 1000;
}
```

## Scale Objects {/* #scale-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#scale-objects)

`/briosa.UtilityOperations/ScaleObjects` · Operation ID: `utility_operations.scale_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Request | 2 | `scale_factor` | `optional double` | Scale Factor | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Active Custom Language {/* #set-active-custom-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-custom-language)

`/briosa.UtilityOperations/SetActiveCustomLanguage` · Operation ID: `utility_operations.set_active_custom_language`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `language_file_name` | `optional FileReference` | Language File Name | Required |
| Request | 2 | `font` | `optional Font` | Font | MS Shell Dlg |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Active Units {/* #set-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-units)

`/briosa.UtilityOperations/SetActiveUnits` · Operation ID: `utility_operations.set_active_units`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `length` | `optional DistanceUnits` | Length | Inches |
| Request | 2 | `display_inch_fractions` | `optional bool` | Display Inch Fractions? | false |
| Request | 3 | `inch_fraction_denominator` | `optional double` | Inch Fraction Denominator? | 16.000000 |
| Request | 4 | `simplify_inch_fraction` | `optional bool` | Simplify Inch Fraction? | true |
| Request | 5 | `temperature` | `optional TemperatureUnits` | Temperature | Fahrenheit |
| Request | 6 | `angular` | `optional AngularUnits` | Angular | Degrees |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Angular Representation {/* #set-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-angular-representation)

`/briosa.UtilityOperations/SetAngularRepresentation` · Operation ID: `utility_operations.set_angular_representation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `value_0_360_false_180` | `optional bool` | 0-360, (FALSE = +/-180) | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetAngularRepresentation(SetAngularRepresentationRequest) returns (SetAngularRepresentationResult);

message SetAngularRepresentationRequest {
  optional bool value_0_360_false_180 = 1;
}

message SetAngularRepresentationResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Auto Event Creation {/* #set-auto-event-creation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-auto-event-creation)

`/briosa.UtilityOperations/SetAutoEventCreation` · Operation ID: `utility_operations.set_auto_event_creation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `active` | `optional bool` | Active? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetAutoEventCreation(SetAutoEventCreationRequest) returns (SetAutoEventCreationResult);

message SetAutoEventCreationRequest {
  optional bool active = 1;
}

message SetAutoEventCreationResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Automatic Backup State {/* #set-automatic-backup-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state)

`/briosa.UtilityOperations/SetAutomaticBackupState` · Operation ID: `utility_operations.set_automatic_backup_state`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_job_file_restore_points_active` | `optional bool` | Auto Job File Restore Points Active? | true |
| Request | 2 | `auto_measurements_backup_active` | `optional bool` | Auto Measurements Backup Active? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Automatic Relationship Construction State {/* #set-automatic-relationship-construction-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state)

`/briosa.UtilityOperations/SetAutomaticRelationshipConstructionState` · Operation ID: `utility_operations.set_automatic_relationship_construction_state`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `active` | `optional bool` | Active? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetAutomaticRelationshipConstructionState(SetAutomaticRelationshipConstructionStateRequest) returns (SetAutomaticRelationshipConstructionStateResult);

message SetAutomaticRelationshipConstructionStateRequest {
  optional bool active = 1;
}

message SetAutomaticRelationshipConstructionStateResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Collection Notes {/* #set-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-collection-notes)

`/briosa.UtilityOperations/SetCollectionNotes` · Operation ID: `utility_operations.set_collection_notes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection | Required |
| Request | 2 | `notes` | `repeated string` | Notes | Required |
| Request | 3 | `append_false_overwrite` | `optional bool` | Append? (FALSE = Overwrite) | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Decimal Digits for Display {/* #set-decimal-digits-for-display */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display)

`/briosa.UtilityOperations/SetDecimalDigitsForDisplay` · Operation ID: `utility_operations.set_decimal_digits_for_display`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `length` | `optional int32` | Length | 4 |
| Request | 2 | `angle` | `optional int32` | Angle | 4 |
| Request | 3 | `scale` | `optional int32` | Scale | 6 |
| Request | 4 | `unit_vector` | `optional int32` | Unit Vector | 6 |
| Request | 5 | `weight` | `optional int32` | Weight | 3 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Folder Notes {/* #set-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-folder-notes)

`/briosa.UtilityOperations/SetFolderNotes` · Operation ID: `utility_operations.set_folder_notes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `folder_path` | `optional string` | Folder Path | Empty |
| Request | 2 | `notes` | `repeated string` | Notes | Required |
| Request | 3 | `append_false_overwrite` | `optional bool` | Append? (FALSE = Overwrite) | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Interaction Mode {/* #set-interaction-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-interaction-mode)

`/briosa.UtilityOperations/SetInteractionMode` · Operation ID: `utility_operations.set_interaction_mode`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_interaction_mode` | `optional SaInteractionMode` | SA Interaction Mode | Required |
| Request | 2 | `measurement_plan_interaction_mode` | `optional MpInteractionMode` | Measurement Plan Interaction Mode | Required |
| Request | 3 | `measurement_plan_dialog_interaction_mode` | `optional MpDialogInteractionMode` | Measurement Plan Dialog Interaction Mode | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Logging State {/* #set-logging-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-logging-state)

`/briosa.UtilityOperations/SetLoggingState` · Operation ID: `utility_operations.set_logging_state`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `active` | `optional bool` | Active? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetLoggingState(SetLoggingStateRequest) returns (SetLoggingStateResult);

message SetLoggingStateRequest {
  optional bool active = 1;
}

message SetLoggingStateResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Notification Cancel Override {/* #set-notification-cancel-override */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override)

`/briosa.UtilityOperations/SetNotificationCancelOverride` · Operation ID: `utility_operations.set_notification_cancel_override`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `prohibit_cancel` | `optional bool` | Prohibit Cancel? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetNotificationCancelOverride(SetNotificationCancelOverrideRequest) returns (SetNotificationCancelOverrideResult);

message SetNotificationCancelOverrideRequest {
  optional bool prohibit_cancel = 1;
}

message SetNotificationCancelOverrideResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Object Notes {/* #set-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-object-notes)

`/briosa.UtilityOperations/SetObjectNotes` · Operation ID: `utility_operations.set_object_notes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object` | `optional CollectionObjectName` | Object | Required |
| Request | 2 | `notes` | `repeated string` | Notes | Required |
| Request | 3 | `append_false_overwrite` | `optional bool` | Append? (FALSE = Overwrite) | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set OPC DA Tag Value Double {/* #set-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double)

`/briosa.UtilityOperations/SetOpcDaTagValueDouble` · Operation ID: `utility_operations.set_opc_da_tag_value_double`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `optional string` | OPC Server DA Tag Name | Empty |
| Request | 2 | `value` | `optional double` | Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set OPC DA Tag Value Integer {/* #set-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer)

`/briosa.UtilityOperations/SetOpcDaTagValueInteger` · Operation ID: `utility_operations.set_opc_da_tag_value_integer`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `optional string` | OPC Server DA Tag Name | Empty |
| Request | 2 | `value` | `optional int32` | Value | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set OPC DA Tag Value String {/* #set-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string)

`/briosa.UtilityOperations/SetOpcDaTagValueString` · Operation ID: `utility_operations.set_opc_da_tag_value_string`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `opc_server_da_tag_name` | `optional string` | OPC Server DA Tag Name | Empty |
| Request | 2 | `value` | `optional string` | Value | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Point Notes {/* #set-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-point-notes)

`/briosa.UtilityOperations/SetPointNotes` · Operation ID: `utility_operations.set_point_notes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `optional PointName` | Point | Required |
| Request | 2 | `notes` | `repeated string` | Notes | Required |
| Request | 3 | `append_false_overwrite` | `optional bool` | Append? (FALSE = Overwrite) | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set User Interface Profile {/* #set-user-interface-profile */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-user-interface-profile)

`/briosa.UtilityOperations/SetUserInterfaceProfile` · Operation ID: `utility_operations.set_user_interface_profile`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `profile_name` | `optional string` | Profile Name | Default |
| Request | 2 | `profile_file_name_optional` | `optional FileReference` | Profile File Name (optional) | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set View Idle Update Frequency {/* #set-view-idle-update-frequency */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency)

`/briosa.UtilityOperations/SetViewIdleUpdateFrequency` · Operation ID: `utility_operations.set_view_idle_update_frequency`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `idle_count` | `optional int32` | Idle Count | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetViewIdleUpdateFrequency(SetViewIdleUpdateFrequencyRequest) returns (SetViewIdleUpdateFrequencyResult);

message SetViewIdleUpdateFrequencyRequest {
  optional int32 idle_count = 1;
}

message SetViewIdleUpdateFrequencyResult {
  MpExecutionDetails execution = 1000;
}
```

## Set WildCard Asterisk Mode {/* #set-wildcard-asterisk-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode)

`/briosa.UtilityOperations/SetWildCardAsteriskMode` · Operation ID: `utility_operations.set_wild_card_asterisk_mode`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `auto_wrap_search_string` | `optional bool` | Auto Wrap Search String? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetWildCardAsteriskMode(SetWildCardAsteriskModeRequest) returns (SetWildCardAsteriskModeResult);

message SetWildCardAsteriskModeRequest {
  optional bool auto_wrap_search_string = 1;
}

message SetWildCardAsteriskModeResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Working Frame {/* #set-working-frame */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-working-frame)

`/briosa.UtilityOperations/SetWorkingFrame` · Operation ID: `utility_operations.set_working_frame`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_working_frame_name` | `optional CollectionObjectName` | New Working Frame Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetWorkingFrame(SetWorkingFrameRequest) returns (SetWorkingFrameResult);

message SetWorkingFrameRequest {
  optional CollectionObjectName new_working_frame_name = 1;
}

message SetWorkingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

## Status Dialog {/* #status-dialog */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#status-dialog)

`/briosa.UtilityOperations/StatusDialog` · Operation ID: `utility_operations.status_dialog`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dialog_title` | `optional string` | Dialog Title | Empty |
| Request | 2 | `text_message` | `optional string` | Text Message | Empty |
| Request | 3 | `current_position` | `optional int32` | Current Position | 0 |
| Request | 4 | `upper_limit` | `optional int32` | Upper Limit | 0 |
| Request | 5 | `suppress_time_remaining` | `optional bool` | Suppress Time Remaining? | true |
| Request | 6 | `close_dialog` | `optional bool` | Close Dialog? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Trim Log File {/* #trim-log-file */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#trim-log-file)

`/briosa.UtilityOperations/TrimLogFile` · Operation ID: `utility_operations.trim_log_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `number_of_entries_to_keep` | `optional int32` | Number of Entries to Keep | 10 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc TrimLogFile(TrimLogFileRequest) returns (TrimLogFileResult);

message TrimLogFileRequest {
  optional int32 number_of_entries_to_keep = 1;
}

message TrimLogFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Write to Log {/* #write-to-log */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#write-to-log)

`/briosa.UtilityOperations/WriteToLog` · Operation ID: `utility_operations.write_to_log`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `log_entry` | `optional string` | Log Entry | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc WriteToLog(WriteToLogRequest) returns (WriteToLogResult);

message WriteToLogRequest {
  optional string log_entry = 1;
}

message WriteToLogResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
