---
title: Construction Operations / Other MP Types
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

[SA 2026.1.0529.7](/api/grpc/construction-operations-other-mp-types) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Make a System String {/* #make-a-system-string */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-system-string)

`/briosa.ConstructionOperations/MakeSystemString` · Operation ID: `construction_operations.make_system_string`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `string_content` | `optional SystemString` | String Content | Required |
| Request | 2 | `format_string` | `optional string` | Format String (Optional) | Omitted |
| Result | 1 | `resultant_string` | `optional string` | Resultant String | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeSystemString(MakeSystemStringRequest) returns (MakeSystemStringResult);

message MakeSystemStringRequest {
  optional SystemString string_content = 1;
  optional string format_string = 2;
}

message MakeSystemStringResult {
  optional string resultant_string = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Name - Runtime Select {/* #make-a-collection-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-name---runtime-select)

`/briosa.ConstructionOperations/MakeCollectionNameRuntimeSelect` · Operation ID: `construction_operations.make_collection_name_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `resultant_collection_name` | `optional CollectionName` | Resultant Collection Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionNameRuntimeSelect(MakeCollectionNameRuntimeSelectRequest) returns (MakeCollectionNameRuntimeSelectResult);

message MakeCollectionNameRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeCollectionNameRuntimeSelectResult {
  optional CollectionName resultant_collection_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Item Name Reference List - WildCard Selection {/* #make-a-collection-item-name-reference-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection)

`/briosa.ConstructionOperations/MakeCollectionItemNameRefListWildcardSelection` · Operation ID: `construction_operations.make_collection_item_name_ref_list_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `item_wildcard_criteria` | `optional string` | Item Wildcard Criteria | * |
| Request | 3 | `item_type` | `optional ItemType` | Item Type | Required |
| Result | 1 | `resultant_collection_item_name_ref_list` | `repeated CollectionItemName` | Resultant Collection Item Name Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionItemNameRefListWildcardSelection(MakeCollectionItemNameRefListWildcardSelectionRequest) returns (MakeCollectionItemNameRefListWildcardSelectionResult);

message MakeCollectionItemNameRefListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1;
  optional string item_wildcard_criteria = 2;
  optional ItemType item_type = 3;
}

message MakeCollectionItemNameRefListWildcardSelectionResult {
  repeated CollectionItemName resultant_collection_item_name_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Object Name - Runtime Select {/* #make-a-collection-object-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select)

`/briosa.ConstructionOperations/MakeCollectionObjectNameRuntimeSelect` · Operation ID: `construction_operations.make_collection_object_name_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Request | 2 | `object_type` | `optional ObjectType` | Object Type | Required |
| Result | 1 | `resultant_collection_object_name` | `optional CollectionObjectName` | Resultant Collection Object Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionObjectNameRuntimeSelect(MakeCollectionObjectNameRuntimeSelectRequest) returns (MakeCollectionObjectNameRuntimeSelectResult);

message MakeCollectionObjectNameRuntimeSelectRequest {
  optional string user_prompt = 1;
  optional ObjectType object_type = 2;
}

message MakeCollectionObjectNameRuntimeSelectResult {
  optional CollectionObjectName resultant_collection_object_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Object Name - Ensure Unique {/* #make-a-collection-object-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique)

`/briosa.ConstructionOperations/MakeCollectionObjectNameEnsureUnique` · Operation ID: `construction_operations.make_collection_object_name_ensure_unique`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_object_name` | `optional CollectionObjectName` | Collection Object Name | Required |
| Request | 2 | `use_number_suffix` | `optional bool` | Use Number Suffix? | false |
| Result | 1 | `collection_object_name` | `optional CollectionObjectName` | Collection Object Name | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionObjectNameEnsureUnique(MakeCollectionObjectNameEnsureUniqueRequest) returns (MakeCollectionObjectNameEnsureUniqueResult);

message MakeCollectionObjectNameEnsureUniqueRequest {
  optional CollectionObjectName collection_object_name = 1;
  optional bool use_number_suffix = 2;
}

message MakeCollectionObjectNameEnsureUniqueResult {
  optional CollectionObjectName collection_object_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Object Name Reference List- Runtime Select {/* #make-a-collection-object-name-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select)

`/briosa.ConstructionOperations/MakeCollectionObjectNameRefListRuntimeSelect` · Operation ID: `construction_operations.make_collection_object_name_ref_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Request | 2 | `object_type` | `optional ObjectType` | Object Type | Required |
| Result | 1 | `resultant_collection_object_name_ref_list` | `repeated CollectionObjectName` | Resultant Collection Object Name Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionObjectNameRefListRuntimeSelect(MakeCollectionObjectNameRefListRuntimeSelectRequest) returns (MakeCollectionObjectNameRefListRuntimeSelectResult);

message MakeCollectionObjectNameRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
  optional ObjectType object_type = 2;
}

message MakeCollectionObjectNameRefListRuntimeSelectResult {
  repeated CollectionObjectName resultant_collection_object_name_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Object Name Reference List- WildCard Selection {/* #make-a-collection-object-name-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection)

`/briosa.ConstructionOperations/MakeCollectionObjectNameRefListWildcardSelection` · Operation ID: `construction_operations.make_collection_object_name_ref_list_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `object_wildcard_criteria` | `optional string` | Object Wildcard Criteria | * |
| Request | 3 | `object_type` | `optional ObjectType` | Object Type | Required |
| Result | 1 | `resultant_collection_object_name_ref_list` | `repeated CollectionObjectName` | Resultant Collection Object Name Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionObjectNameRefListWildcardSelection(MakeCollectionObjectNameRefListWildcardSelectionRequest) returns (MakeCollectionObjectNameRefListWildcardSelectionResult);

message MakeCollectionObjectNameRefListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1;
  optional string object_wildcard_criteria = 2;
  optional ObjectType object_type = 3;
}

message MakeCollectionObjectNameRefListWildcardSelectionResult {
  repeated CollectionObjectName resultant_collection_object_name_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Object Name Ref List - By Type {/* #make-a-collection-object-name-ref-list---by-type */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type)

`/briosa.ConstructionOperations/MakeCollectionObjectNameRefListByType` · Operation ID: `construction_operations.make_collection_object_name_ref_list_by_type`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional string` | Collection | Empty |
| Request | 2 | `object_type` | `optional ObjectType` | Object Type | Required |
| Result | 1 | `resultant_collection_object_name_list` | `repeated CollectionObjectName` | Resultant Collection Object Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionObjectNameRefListByType(MakeCollectionObjectNameRefListByTypeRequest) returns (MakeCollectionObjectNameRefListByTypeResult);

message MakeCollectionObjectNameRefListByTypeRequest {
  optional string collection = 1;
  optional ObjectType object_type = 2;
}

message MakeCollectionObjectNameRefListByTypeResult {
  repeated CollectionObjectName resultant_collection_object_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Object Name Ref List - By Type and Color {/* #make-a-collection-object-name-ref-list---by-type-and-color */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color)

`/briosa.ConstructionOperations/MakeCollectionObjectNameRefListByTypeAndColor` · Operation ID: `construction_operations.make_collection_object_name_ref_list_by_type_and_color`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional string` | Collection | Empty |
| Request | 2 | `object_type` | `optional ObjectType` | Object Type | Required |
| Request | 3 | `object_color` | `optional Color` | Object Color | Message defaults |
| Result | 1 | `resultant_collection_object_name_list` | `repeated CollectionObjectName` | Resultant Collection Object Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionObjectNameRefListByTypeAndColor(MakeCollectionObjectNameRefListByTypeAndColorRequest) returns (MakeCollectionObjectNameRefListByTypeAndColorResult);

message MakeCollectionObjectNameRefListByTypeAndColorRequest {
  optional string collection = 1;
  optional ObjectType object_type = 2;
  optional Color object_color = 3;
}

message MakeCollectionObjectNameRefListByTypeAndColorResult {
  repeated CollectionObjectName resultant_collection_object_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Object Name Ref List from all Groups in a Collection {/* #make-a-collection-object-name-ref-list-from-all-groups-in-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection)

`/briosa.ConstructionOperations/MakeCollectionObjectNameRefListFromAllGroupsInCollection` · Operation ID: `construction_operations.make_collection_object_name_ref_list_from_all_groups_in_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `optional CollectionName` | Collection Name | Required |
| Result | 1 | `collection_object_name_list` | `repeated CollectionObjectName` | Collection Object Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionObjectNameRefListFromAllGroupsInCollection(MakeCollectionObjectNameRefListFromAllGroupsInCollectionRequest) returns (MakeCollectionObjectNameRefListFromAllGroupsInCollectionResult);

message MakeCollectionObjectNameRefListFromAllGroupsInCollectionRequest {
  optional CollectionName collection_name = 1;
}

message MakeCollectionObjectNameRefListFromAllGroupsInCollectionResult {
  repeated CollectionObjectName collection_object_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Collection Instrument Ref List Variable {/* #get-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable)

`/briosa.ConstructionOperations/GetCollectionInstrumentRefListVariable` · Operation ID: `construction_operations.get_collection_instrument_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `repeated CollectionInstrumentId` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetCollectionInstrumentRefListVariable(GetCollectionInstrumentRefListVariableRequest) returns (GetCollectionInstrumentRefListVariableResult);

message GetCollectionInstrumentRefListVariableRequest {
  optional string name = 1;
}

message GetCollectionInstrumentRefListVariableResult {
  repeated CollectionInstrumentId value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Collection Instrument Ref List Variable {/* #set-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable)

`/briosa.ConstructionOperations/SetCollectionInstrumentRefListVariable` · Operation ID: `construction_operations.set_collection_instrument_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `repeated CollectionInstrumentId` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCollectionInstrumentRefListVariable(SetCollectionInstrumentRefListVariableRequest) returns (SetCollectionInstrumentRefListVariableResult);

message SetCollectionInstrumentRefListVariableRequest {
  optional string name = 1;
  repeated CollectionInstrumentId value = 2;
}

message SetCollectionInstrumentRefListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Collection Instruments to a Ref List - WildCard Selection {/* #add-collection-instruments-to-a-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection)

`/briosa.ConstructionOperations/AddCollectionInstrumentsToRefListWildcardSelection` · Operation ID: `construction_operations.add_collection_instruments_to_ref_list_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_instrument_ref_list` | `repeated CollectionInstrumentId` | Collection Instrument Reference List | Required |
| Request | 2 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 3 | `instrument_wildcard_criteria` | `optional string` | Instrument Wildcard Criteria | * |
| Result | 1 | `collection_instrument_ref_list` | `repeated CollectionInstrumentId` | Collection Instrument Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddCollectionInstrumentsToRefListWildcardSelection(AddCollectionInstrumentsToRefListWildcardSelectionRequest) returns (AddCollectionInstrumentsToRefListWildcardSelectionResult);

message AddCollectionInstrumentsToRefListWildcardSelectionRequest {
  repeated CollectionInstrumentId collection_instrument_ref_list = 1;
  optional string collection_wildcard_criteria = 2;
  optional string instrument_wildcard_criteria = 3;
}

message AddCollectionInstrumentsToRefListWildcardSelectionResult {
  repeated CollectionInstrumentId collection_instrument_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Instrument Reference List- Runtime Select {/* #make-a-collection-instrument-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select)

`/briosa.ConstructionOperations/MakeCollectionInstrumentRefListRuntimeSelect` · Operation ID: `construction_operations.make_collection_instrument_ref_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `resultant_collection_instrument_ref_list` | `repeated CollectionInstrumentId` | Resultant Collection Instrument Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionInstrumentRefListRuntimeSelect(MakeCollectionInstrumentRefListRuntimeSelectRequest) returns (MakeCollectionInstrumentRefListRuntimeSelectResult);

message MakeCollectionInstrumentRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeCollectionInstrumentRefListRuntimeSelectResult {
  repeated CollectionInstrumentId resultant_collection_instrument_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Relationship Reference List- WildCard Selection {/* #make-a-relationship-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection)

`/briosa.ConstructionOperations/MakeRelationshipRefListWildcardSelection` · Operation ID: `construction_operations.make_relationship_ref_list_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `relationship_wildcard_criteria` | `optional string` | Relationship Wildcard Criteria | * |
| Result | 1 | `resultant_relationship_ref_list` | `repeated CollectionItemName` | Resultant Relationship Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeRelationshipRefListWildcardSelection(MakeRelationshipRefListWildcardSelectionRequest) returns (MakeRelationshipRefListWildcardSelectionResult);

message MakeRelationshipRefListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1;
  optional string relationship_wildcard_criteria = 2;
}

message MakeRelationshipRefListWildcardSelectionResult {
  repeated CollectionItemName resultant_relationship_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Relationship Reference List- Runtime Select {/* #make-a-relationship-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select)

`/briosa.ConstructionOperations/MakeRelationshipRefListRuntimeSelect` · Operation ID: `construction_operations.make_relationship_ref_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `resultant_relationship_ref_list` | `repeated CollectionItemName` | Resultant Relationship Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeRelationshipRefListRuntimeSelect(MakeRelationshipRefListRuntimeSelectRequest) returns (MakeRelationshipRefListRuntimeSelectResult);

message MakeRelationshipRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeRelationshipRefListRuntimeSelectResult {
  repeated CollectionItemName resultant_relationship_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make an Event Reference List- WildCard Selection {/* #make-an-event-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection)

`/briosa.ConstructionOperations/MakeEventRefListWildcardSelection` · Operation ID: `construction_operations.make_event_ref_list_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `event_wildcard_criteria` | `optional string` | Event Wildcard Criteria | * |
| Result | 1 | `resultant_event_ref_list` | `repeated CollectionItemName` | Resultant Event Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeEventRefListWildcardSelection(MakeEventRefListWildcardSelectionRequest) returns (MakeEventRefListWildcardSelectionResult);

message MakeEventRefListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1;
  optional string event_wildcard_criteria = 2;
}

message MakeEventRefListWildcardSelectionResult {
  repeated CollectionItemName resultant_event_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Instrument ID - Runtime Select {/* #make-a-collection-instrument-id---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select)

`/briosa.ConstructionOperations/MakeCollectionInstrumentIdRuntimeSelect` · Operation ID: `construction_operations.make_collection_instrument_id_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `instrument_id` | `optional CollectionInstrumentId` | Instrument ID | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionInstrumentIdRuntimeSelect(MakeCollectionInstrumentIdRuntimeSelectRequest) returns (MakeCollectionInstrumentIdRuntimeSelectResult);

message MakeCollectionInstrumentIdRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeCollectionInstrumentIdRuntimeSelectResult {
  optional CollectionInstrumentId instrument_id = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Report Ref List from a Collection {/* #make-a-report-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection)

`/briosa.ConstructionOperations/MakeReportRefListFromCollection` · Operation ID: `construction_operations.make_report_ref_list_from_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `optional CollectionName` | Collection Name | Required |
| Result | 1 | `report_list` | `repeated CollectionItemName` | Report List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeReportRefListFromCollection(MakeReportRefListFromCollectionRequest) returns (MakeReportRefListFromCollectionResult);

message MakeReportRefListFromCollectionRequest {
  optional CollectionName collection_name = 1;
}

message MakeReportRefListFromCollectionResult {
  repeated CollectionItemName report_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Report Ref List - Runtime Select {/* #make-a-report-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select)

`/briosa.ConstructionOperations/MakeReportRefListRuntimeSelect` · Operation ID: `construction_operations.make_report_ref_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `report_list` | `repeated CollectionItemName` | Report List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeReportRefListRuntimeSelect(MakeReportRefListRuntimeSelectRequest) returns (MakeReportRefListRuntimeSelectResult);

message MakeReportRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeReportRefListRuntimeSelectResult {
  repeated CollectionItemName report_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Picture Name Ref List - Runtime Select {/* #make-a-picture-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select)

`/briosa.ConstructionOperations/MakePictureNameRefListRuntimeSelect` · Operation ID: `construction_operations.make_picture_name_ref_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `picture_name_list` | `repeated CollectionItemName` | Picture Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakePictureNameRefListRuntimeSelect(MakePictureNameRefListRuntimeSelectRequest) returns (MakePictureNameRefListRuntimeSelectResult);

message MakePictureNameRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakePictureNameRefListRuntimeSelectResult {
  repeated CollectionItemName picture_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Transform from Doubles (Fixed XYZ) {/* #make-a-transform-from-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz)

`/briosa.ConstructionOperations/MakeTransformFromDoublesFixedXyz` · Operation ID: `construction_operations.make_transform_from_doubles_fixed_xyz`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `x` | `optional double` | X | 0.000000 |
| Request | 2 | `y` | `optional double` | Y | 0.000000 |
| Request | 3 | `z` | `optional double` | Z | 0.000000 |
| Request | 4 | `rx` | `optional double` | Rx (Roll) | 0.000000 |
| Request | 5 | `ry` | `optional double` | Ry (Pitch) | 0.000000 |
| Request | 6 | `rz` | `optional double` | Rz (Yaw) | 0.000000 |
| Result | 1 | `resultant_transform` | `optional Transform` | Resultant Transform | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeTransformFromDoublesFixedXyz(MakeTransformFromDoublesFixedXyzRequest) returns (MakeTransformFromDoublesFixedXyzResult);

message MakeTransformFromDoublesFixedXyzRequest {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double rx = 4;
  optional double ry = 5;
  optional double rz = 6;
}

message MakeTransformFromDoublesFixedXyzResult {
  optional Transform resultant_transform = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Transform from Doubles (Euler Parameters) {/* #make-a-transform-from-doubles-euler-parameters */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters)

`/briosa.ConstructionOperations/MakeTransformFromDoublesEulerParameters` · Operation ID: `construction_operations.make_transform_from_doubles_euler_parameters`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `x` | `optional double` | X | 0.000000 |
| Request | 2 | `y` | `optional double` | Y | 0.000000 |
| Request | 3 | `z` | `optional double` | Z | 0.000000 |
| Request | 4 | `e1` | `optional double` | e1 | 0.000000 |
| Request | 5 | `e2` | `optional double` | e2 | 0.000000 |
| Request | 6 | `e3` | `optional double` | e3 | 0.000000 |
| Request | 7 | `e4` | `optional double` | e4 | 0.000000 |
| Result | 1 | `resultant_transform` | `optional Transform` | Resultant Transform | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeTransformFromDoublesEulerParameters(MakeTransformFromDoublesEulerParametersRequest) returns (MakeTransformFromDoublesEulerParametersResult);

message MakeTransformFromDoublesEulerParametersRequest {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double e1 = 4;
  optional double e2 = 5;
  optional double e3 = 6;
  optional double e4 = 7;
}

message MakeTransformFromDoublesEulerParametersResult {
  optional Transform resultant_transform = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Working Transform of Object (Fixed XYZ) {/* #get-working-transform-of-object-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz)

`/briosa.ConstructionOperations/GetWorkingTransformOfObjectFixedXyz` · Operation ID: `construction_operations.get_working_transform_of_object_fixed_xyz`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Result | 1 | `transform` | `optional Transform` | Transform | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetWorkingTransformOfObjectFixedXyz(GetWorkingTransformOfObjectFixedXyzRequest) returns (GetWorkingTransformOfObjectFixedXyzResult);

message GetWorkingTransformOfObjectFixedXyzRequest {
  optional CollectionObjectName object_name = 1;
}

message GetWorkingTransformOfObjectFixedXyzResult {
  optional Transform transform = 1;
  MpExecutionDetails execution = 1000;
}
```

## Invert Transform {/* #invert-transform */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#invert-transform)

`/briosa.ConstructionOperations/InvertTransform` · Operation ID: `construction_operations.invert_transform`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `transform` | `optional Transform` | Transform | Required |
| Result | 1 | `inverse_transform` | `optional Transform` | Inverse Transform | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc InvertTransform(InvertTransformRequest) returns (InvertTransformResult);

message InvertTransformRequest {
  optional Transform transform = 1;
}

message InvertTransformResult {
  optional Transform inverse_transform = 1;
  MpExecutionDetails execution = 1000;
}
```

## Decompose Transform into Doubles (Fixed XYZ) {/* #decompose-transform-into-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz)

`/briosa.ConstructionOperations/DecomposeTransformIntoDoublesFixedXyz` · Operation ID: `construction_operations.decompose_transform_into_doubles_fixed_xyz`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_transform` | `optional Transform` | Input Transform | Required |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `rx` | `optional double` | Rx (Roll) | — |
| Result | 5 | `ry` | `optional double` | Ry (Pitch) | — |
| Result | 6 | `rz` | `optional double` | Rz (Yaw) | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeTransformIntoDoublesFixedXyz(DecomposeTransformIntoDoublesFixedXyzRequest) returns (DecomposeTransformIntoDoublesFixedXyzResult);

message DecomposeTransformIntoDoublesFixedXyzRequest {
  optional Transform input_transform = 1;
}

message DecomposeTransformIntoDoublesFixedXyzResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double rx = 4;
  optional double ry = 5;
  optional double rz = 6;
  MpExecutionDetails execution = 1000;
}
```

## Decompose Transform into Vectors (Fixed XYZ) {/* #decompose-transform-into-vectors-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz)

`/briosa.ConstructionOperations/DecomposeTransformIntoVectorsFixedXyz` · Operation ID: `construction_operations.decompose_transform_into_vectors_fixed_xyz`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_transform` | `optional Transform` | Input Transform | Required |
| Result | 1 | `position_in_working` | `optional Vector` | Position in Working | — |
| Result | 2 | `orientation_in_working` | `optional Vector` | Orientation in Working | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeTransformIntoVectorsFixedXyz(DecomposeTransformIntoVectorsFixedXyzRequest) returns (DecomposeTransformIntoVectorsFixedXyzResult);

message DecomposeTransformIntoVectorsFixedXyzRequest {
  optional Transform input_transform = 1;
}

message DecomposeTransformIntoVectorsFixedXyzResult {
  optional Vector position_in_working = 1;
  optional Vector orientation_in_working = 2;
  MpExecutionDetails execution = 1000;
}
```

## Decompose Transform into Vectors (Origin and Axes) {/* #decompose-transform-into-vectors-origin-and-axes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes)

`/briosa.ConstructionOperations/DecomposeTransformIntoVectorsOriginAndAxes` · Operation ID: `construction_operations.decompose_transform_into_vectors_origin_and_axes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `transform` | `optional Transform` | Transform | Required |
| Result | 1 | `origin` | `optional Vector` | Origin | — |
| Result | 2 | `x_axis` | `optional Vector` | X Axis | — |
| Result | 3 | `y_axis` | `optional Vector` | Y Axis | — |
| Result | 4 | `z_axis` | `optional Vector` | Z Axis | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeTransformIntoVectorsOriginAndAxes(DecomposeTransformIntoVectorsOriginAndAxesRequest) returns (DecomposeTransformIntoVectorsOriginAndAxesResult);

message DecomposeTransformIntoVectorsOriginAndAxesRequest {
  optional Transform transform = 1;
}

message DecomposeTransformIntoVectorsOriginAndAxesResult {
  optional Vector origin = 1;
  optional Vector x_axis = 2;
  optional Vector y_axis = 3;
  optional Vector z_axis = 4;
  MpExecutionDetails execution = 1000;
}
```

## Decompose World Transform Operator into Doubles (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-doubles-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world)

`/briosa.ConstructionOperations/DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorld` · Operation ID: `construction_operations.decompose_world_transform_operator_into_doubles_fixed_xyz_in_world`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_world_transform_operator` | `optional WorldTransform` | Input World Transform Operator | Required |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `rx` | `optional double` | Rx (Roll) | — |
| Result | 5 | `ry` | `optional double` | Ry (Pitch) | — |
| Result | 6 | `rz` | `optional double` | Rz (Yaw) | — |
| Result | 7 | `scale` | `optional double` | Scale | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorld(DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorldRequest) returns (DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorldResult);

message DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorldRequest {
  optional WorldTransform input_world_transform_operator = 1;
}

message DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorldResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double rx = 4;
  optional double ry = 5;
  optional double rz = 6;
  optional double scale = 7;
  MpExecutionDetails execution = 1000;
}
```

## Decompose Transform into Doubles (Euler XYZ) {/* #decompose-transform-into-doubles-euler-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz)

`/briosa.ConstructionOperations/DecomposeTransformIntoDoublesEulerXyz` · Operation ID: `construction_operations.decompose_transform_into_doubles_euler_xyz`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_transform` | `optional Transform` | Input Transform | Required |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `rx` | `optional double` | Euler Rx | — |
| Result | 5 | `ry` | `optional double` | Euler Ry | — |
| Result | 6 | `rz` | `optional double` | Euler Rz | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeTransformIntoDoublesEulerXyz(DecomposeTransformIntoDoublesEulerXyzRequest) returns (DecomposeTransformIntoDoublesEulerXyzResult);

message DecomposeTransformIntoDoublesEulerXyzRequest {
  optional Transform input_transform = 1;
}

message DecomposeTransformIntoDoublesEulerXyzResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double rx = 4;
  optional double ry = 5;
  optional double rz = 6;
  MpExecutionDetails execution = 1000;
}
```

## Decompose Transform into Doubles (Euler ZYX) {/* #decompose-transform-into-doubles-euler-zyx */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx)

`/briosa.ConstructionOperations/DecomposeTransformIntoDoublesEulerZyx` · Operation ID: `construction_operations.decompose_transform_into_doubles_euler_zyx`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_transform` | `optional Transform` | Input Transform | Required |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `rz` | `optional double` | Euler Rz | — |
| Result | 5 | `ry` | `optional double` | Euler Ry | — |
| Result | 6 | `rx` | `optional double` | Euler Rx | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeTransformIntoDoublesEulerZyx(DecomposeTransformIntoDoublesEulerZyxRequest) returns (DecomposeTransformIntoDoublesEulerZyxResult);

message DecomposeTransformIntoDoublesEulerZyxRequest {
  optional Transform input_transform = 1;
}

message DecomposeTransformIntoDoublesEulerZyxResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double rz = 4;
  optional double ry = 5;
  optional double rx = 6;
  MpExecutionDetails execution = 1000;
}
```

## Decompose Transform into Doubles (Euler ZYZ) {/* #decompose-transform-into-doubles-euler-zyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz)

`/briosa.ConstructionOperations/DecomposeTransformIntoDoublesEulerZyz` · Operation ID: `construction_operations.decompose_transform_into_doubles_euler_zyz`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_transform` | `optional Transform` | Input Transform | Required |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `first_rz` | `optional double` | Euler Rz | — |
| Result | 5 | `ry` | `optional double` | Euler Ry | — |
| Result | 6 | `second_rz` | `optional double` | Euler Rz | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeTransformIntoDoublesEulerZyz(DecomposeTransformIntoDoublesEulerZyzRequest) returns (DecomposeTransformIntoDoublesEulerZyzResult);

message DecomposeTransformIntoDoublesEulerZyzRequest {
  optional Transform input_transform = 1;
}

message DecomposeTransformIntoDoublesEulerZyzResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double first_rz = 4;
  optional double ry = 5;
  optional double second_rz = 6;
  MpExecutionDetails execution = 1000;
}
```

## Decompose Transform into Doubles (Euler ZXZ) {/* #decompose-transform-into-doubles-euler-zxz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz)

`/briosa.ConstructionOperations/DecomposeTransformIntoDoublesEulerZxz` · Operation ID: `construction_operations.decompose_transform_into_doubles_euler_zxz`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_transform` | `optional Transform` | Input Transform | Required |
| Result | 1 | `x` | `optional double` | X | — |
| Result | 2 | `y` | `optional double` | Y | — |
| Result | 3 | `z` | `optional double` | Z | — |
| Result | 4 | `first_rz` | `optional double` | Euler Rz | — |
| Result | 5 | `rx` | `optional double` | Euler Rx | — |
| Result | 6 | `second_rz` | `optional double` | Euler Rz | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeTransformIntoDoublesEulerZxz(DecomposeTransformIntoDoublesEulerZxzRequest) returns (DecomposeTransformIntoDoublesEulerZxzResult);

message DecomposeTransformIntoDoublesEulerZxzRequest {
  optional Transform input_transform = 1;
}

message DecomposeTransformIntoDoublesEulerZxzResult {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
  optional double first_rz = 4;
  optional double rx = 5;
  optional double second_rz = 6;
  MpExecutionDetails execution = 1000;
}
```

## Decompose World Transform Operator into Vectors (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-vectors-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world)

`/briosa.ConstructionOperations/DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorld` · Operation ID: `construction_operations.decompose_world_transform_operator_into_vectors_fixed_xyz_in_world`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_world_transform_operator` | `optional WorldTransform` | Input World Transform Operator | Required |
| Result | 1 | `position_in_working` | `optional Vector` | Position in Working | — |
| Result | 2 | `orientation_in_working` | `optional Vector` | Orientation in Working | — |
| Result | 3 | `scale` | `optional double` | Scale | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorld(DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorldRequest) returns (DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorldResult);

message DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorldRequest {
  optional WorldTransform input_world_transform_operator = 1;
}

message DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorldResult {
  optional Vector position_in_working = 1;
  optional Vector orientation_in_working = 2;
  optional double scale = 3;
  MpExecutionDetails execution = 1000;
}
```

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
