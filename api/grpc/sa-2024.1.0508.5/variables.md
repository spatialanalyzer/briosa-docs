---
title: Variables
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Variables

[SA 2026.1.0529.7](/api/grpc/variables) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/variables)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Double to Named Double List Variable {/* #add-double-to-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable)

`/briosa.Variables/AddDoubleToNamedDoubleListVariable` · Operation ID: `variables.add_double_to_named_double_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `double_value` | `optional double` | Double Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddDoubleToNamedDoubleListVariable(AddDoubleToNamedDoubleListVariableRequest) returns (AddDoubleToNamedDoubleListVariableResult);

message AddDoubleToNamedDoubleListVariableRequest {
  optional string name = 1;
  optional double double_value = 2;
}

message AddDoubleToNamedDoubleListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Clear Named Double List Variable {/* #clear-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#clear-named-double-list-variable)

`/briosa.Variables/ClearNamedDoubleListVariable` · Operation ID: `variables.clear_named_double_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ClearNamedDoubleListVariable(ClearNamedDoubleListVariableRequest) returns (ClearNamedDoubleListVariableResult);

message ClearNamedDoubleListVariableRequest {
  optional string name = 1;
}

message ClearNamedDoubleListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Variable {/* #delete-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variable)

`/briosa.Variables/DeleteVariable` · Operation ID: `variables.delete_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteVariable(DeleteVariableRequest) returns (DeleteVariableResult);

message DeleteVariableRequest {
  optional string name = 1;
}

message DeleteVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Variables -- Wildcard Match {/* #delete-variables----wildcard-match */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variables----wildcard-match)

`/briosa.Variables/DeleteVariablesWildcardMatch` · Operation ID: `variables.delete_variables_wildcard_match`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `variable_wildcard_criteria` | `optional string` | Variable Wildcard Criteria | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteVariablesWildcardMatch(DeleteVariablesWildcardMatchRequest) returns (DeleteVariablesWildcardMatchResult);

message DeleteVariablesWildcardMatchRequest {
  optional string variable_wildcard_criteria = 1;
}

message DeleteVariablesWildcardMatchResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Boolean Variable {/* #get-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-boolean-variable)

`/briosa.Variables/GetBooleanVariable` · Operation ID: `variables.get_boolean_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `optional bool` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetBooleanVariable(GetBooleanVariableRequest) returns (GetBooleanVariableResult);

message GetBooleanVariableRequest {
  optional string name = 1;
}

message GetBooleanVariableResult {
  optional bool value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Collection Object Name Variable {/* #get-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-name-variable)

`/briosa.Variables/GetCollectionObjectNameVariable` · Operation ID: `variables.get_collection_object_name_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `optional CollectionObjectName` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetCollectionObjectNameVariable(GetCollectionObjectNameVariableRequest) returns (GetCollectionObjectNameVariableResult);

message GetCollectionObjectNameVariableRequest {
  optional string name = 1;
}

message GetCollectionObjectNameVariableResult {
  optional CollectionObjectName value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Collection Object Ref List Variable {/* #get-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable)

`/briosa.Variables/GetCollectionObjectRefListVariable` · Operation ID: `variables.get_collection_object_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `repeated CollectionObjectName` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetCollectionObjectRefListVariable(GetCollectionObjectRefListVariableRequest) returns (GetCollectionObjectRefListVariableResult);

message GetCollectionObjectRefListVariableRequest {
  optional string name = 1;
}

message GetCollectionObjectRefListVariableResult {
  repeated CollectionObjectName value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Double Variable {/* #get-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-double-variable)

`/briosa.Variables/GetDoubleVariable` · Operation ID: `variables.get_double_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `optional double` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetDoubleVariable(GetDoubleVariableRequest) returns (GetDoubleVariableResult);

message GetDoubleVariableRequest {
  optional string name = 1;
}

message GetDoubleVariableResult {
  optional double value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Integer Variable {/* #get-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-integer-variable)

`/briosa.Variables/GetIntegerVariable` · Operation ID: `variables.get_integer_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `optional int32` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetIntegerVariable(GetIntegerVariableRequest) returns (GetIntegerVariableResult);

message GetIntegerVariableRequest {
  optional string name = 1;
}

message GetIntegerVariableResult {
  optional int32 value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Named Double List Variable {/* #get-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable)

`/briosa.Variables/GetNamedDoubleListVariable` · Operation ID: `variables.get_named_double_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `double_list_variable` | `repeated double` | Double List Variable | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetNamedDoubleListVariable(GetNamedDoubleListVariableRequest) returns (GetNamedDoubleListVariableResult);

message GetNamedDoubleListVariableRequest {
  optional string name = 1;
}

message GetNamedDoubleListVariableResult {
  repeated double double_list_variable = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Named Double List Variable Min/Max {/* #get-named-double-list-variable-minmax */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax)

`/briosa.Variables/GetNamedDoubleListVariableMinMax` · Operation ID: `variables.get_named_double_list_variable_min_max`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `minimum_value` | `optional double` | Minimum Value | — |
| Result | 2 | `maximum_value` | `optional double` | Maximum Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetNamedDoubleListVariableMinMax(GetNamedDoubleListVariableMinMaxRequest) returns (GetNamedDoubleListVariableMinMaxResult);

message GetNamedDoubleListVariableMinMaxRequest {
  optional string name = 1;
}

message GetNamedDoubleListVariableMinMaxResult {
  optional double minimum_value = 1;
  optional double maximum_value = 2;
  MpExecutionDetails execution = 1000;
}
```

## Get Point Name Ref List Variable {/* #get-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable)

`/briosa.Variables/GetPointNameRefListVariable` · Operation ID: `variables.get_point_name_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `repeated PointName` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPointNameRefListVariable(GetPointNameRefListVariableRequest) returns (GetPointNameRefListVariableResult);

message GetPointNameRefListVariableRequest {
  optional string name = 1;
}

message GetPointNameRefListVariableResult {
  repeated PointName value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Point Name Variable {/* #get-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-variable)

`/briosa.Variables/GetPointNameVariable` · Operation ID: `variables.get_point_name_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `optional PointName` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetPointNameVariable(GetPointNameVariableRequest) returns (GetPointNameVariableResult);

message GetPointNameVariableRequest {
  optional string name = 1;
}

message GetPointNameVariableResult {
  optional PointName value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Relationship Ref List Variable {/* #get-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable)

`/briosa.Variables/GetRelationshipRefListVariable` · Operation ID: `variables.get_relationship_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `repeated CollectionItemName` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetRelationshipRefListVariable(GetRelationshipRefListVariableRequest) returns (GetRelationshipRefListVariableResult);

message GetRelationshipRefListVariableRequest {
  optional string name = 1;
}

message GetRelationshipRefListVariableResult {
  repeated CollectionItemName value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Report Items Reference List Variable {/* #get-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable)

`/briosa.Variables/GetReportItemsReferenceListVariable` · Operation ID: `variables.get_report_items_reference_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `repeated CollectionItemName` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetReportItemsReferenceListVariable(GetReportItemsReferenceListVariableRequest) returns (GetReportItemsReferenceListVariableResult);

message GetReportItemsReferenceListVariableRequest {
  optional string name = 1;
}

message GetReportItemsReferenceListVariableResult {
  repeated CollectionItemName value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get String Ref List Variable {/* #get-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-ref-list-variable)

`/briosa.Variables/GetStringRefListVariable` · Operation ID: `variables.get_string_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `repeated string` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetStringRefListVariable(GetStringRefListVariableRequest) returns (GetStringRefListVariableResult);

message GetStringRefListVariableRequest {
  optional string name = 1;
}

message GetStringRefListVariableResult {
  repeated string value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get String Variable {/* #get-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-variable)

`/briosa.Variables/GetStringVariable` · Operation ID: `variables.get_string_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `optional string` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetStringVariable(GetStringVariableRequest) returns (GetStringVariableResult);

message GetStringVariableRequest {
  optional string name = 1;
}

message GetStringVariableResult {
  optional string value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Transform Variable {/* #get-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-transform-variable)

`/briosa.Variables/GetTransformVariable` · Operation ID: `variables.get_transform_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `optional Transform` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetTransformVariable(GetTransformVariableRequest) returns (GetTransformVariableResult);

message GetTransformVariableRequest {
  optional string name = 1;
}

message GetTransformVariableResult {
  optional Transform value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Vector Name Ref List Variable {/* #get-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable)

`/briosa.Variables/GetVectorNameRefListVariable` · Operation ID: `variables.get_vector_name_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `repeated VectorName` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetVectorNameRefListVariable(GetVectorNameRefListVariableRequest) returns (GetVectorNameRefListVariableResult);

message GetVectorNameRefListVariableRequest {
  optional string name = 1;
}

message GetVectorNameRefListVariableResult {
  repeated VectorName value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Vector Variable {/* #get-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-variable)

`/briosa.Variables/GetVectorVariable` · Operation ID: `variables.get_vector_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Result | 1 | `value` | `optional Vector` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetVectorVariable(GetVectorVariableRequest) returns (GetVectorVariableResult);

message GetVectorVariableRequest {
  optional string name = 1;
}

message GetVectorVariableResult {
  optional Vector value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Boolean Variable {/* #set-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-boolean-variable)

`/briosa.Variables/SetBooleanVariable` · Operation ID: `variables.set_boolean_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional bool` | Value | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetBooleanVariable(SetBooleanVariableRequest) returns (SetBooleanVariableResult);

message SetBooleanVariableRequest {
  optional string name = 1;
  optional bool value = 2;
}

message SetBooleanVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Collection Object Name Variable {/* #set-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-name-variable)

`/briosa.Variables/SetCollectionObjectNameVariable` · Operation ID: `variables.set_collection_object_name_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional CollectionObjectName` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCollectionObjectNameVariable(SetCollectionObjectNameVariableRequest) returns (SetCollectionObjectNameVariableResult);

message SetCollectionObjectNameVariableRequest {
  optional string name = 1;
  optional CollectionObjectName value = 2;
}

message SetCollectionObjectNameVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Collection Object Ref List Variable {/* #set-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable)

`/briosa.Variables/SetCollectionObjectRefListVariable` · Operation ID: `variables.set_collection_object_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `repeated CollectionObjectName` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCollectionObjectRefListVariable(SetCollectionObjectRefListVariableRequest) returns (SetCollectionObjectRefListVariableResult);

message SetCollectionObjectRefListVariableRequest {
  optional string name = 1;
  repeated CollectionObjectName value = 2;
}

message SetCollectionObjectRefListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Double Variable {/* #set-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-double-variable)

`/briosa.Variables/SetDoubleVariable` · Operation ID: `variables.set_double_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional double` | Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetDoubleVariable(SetDoubleVariableRequest) returns (SetDoubleVariableResult);

message SetDoubleVariableRequest {
  optional string name = 1;
  optional double value = 2;
}

message SetDoubleVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Font Variable {/* #set-font-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-font-variable)

`/briosa.Variables/SetFontVariable` · Operation ID: `variables.set_font_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional Font` | Value | MS Shell Dlg |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetFontVariable(SetFontVariableRequest) returns (SetFontVariableResult);

message SetFontVariableRequest {
  optional string name = 1;
  optional Font value = 2;
}

message SetFontVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Integer Variable {/* #set-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-integer-variable)

`/briosa.Variables/SetIntegerVariable` · Operation ID: `variables.set_integer_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional int32` | Value | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetIntegerVariable(SetIntegerVariableRequest) returns (SetIntegerVariableResult);

message SetIntegerVariableRequest {
  optional string name = 1;
  optional int32 value = 2;
}

message SetIntegerVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Named Double List Variable {/* #set-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-named-double-list-variable)

`/briosa.Variables/SetNamedDoubleListVariable` · Operation ID: `variables.set_named_double_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `double_list_variable` | `repeated double` | Double List Variable | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetNamedDoubleListVariable(SetNamedDoubleListVariableRequest) returns (SetNamedDoubleListVariableResult);

message SetNamedDoubleListVariableRequest {
  optional string name = 1;
  repeated double double_list_variable = 2;
}

message SetNamedDoubleListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Point Name Ref List Variable {/* #set-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable)

`/briosa.Variables/SetPointNameRefListVariable` · Operation ID: `variables.set_point_name_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `repeated PointName` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointNameRefListVariable(SetPointNameRefListVariableRequest) returns (SetPointNameRefListVariableResult);

message SetPointNameRefListVariableRequest {
  optional string name = 1;
  repeated PointName value = 2;
}

message SetPointNameRefListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Point Name Variable {/* #set-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-variable)

`/briosa.Variables/SetPointNameVariable` · Operation ID: `variables.set_point_name_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional PointName` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointNameVariable(SetPointNameVariableRequest) returns (SetPointNameVariableResult);

message SetPointNameVariableRequest {
  optional string name = 1;
  optional PointName value = 2;
}

message SetPointNameVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Ref List Variable {/* #set-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable)

`/briosa.Variables/SetRelationshipRefListVariable` · Operation ID: `variables.set_relationship_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `repeated CollectionItemName` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipRefListVariable(SetRelationshipRefListVariableRequest) returns (SetRelationshipRefListVariableResult);

message SetRelationshipRefListVariableRequest {
  optional string name = 1;
  repeated CollectionItemName value = 2;
}

message SetRelationshipRefListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Report Items Reference List Variable {/* #set-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable)

`/briosa.Variables/SetReportItemsReferenceListVariable` · Operation ID: `variables.set_report_items_reference_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `repeated CollectionItemName` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetReportItemsReferenceListVariable(SetReportItemsReferenceListVariableRequest) returns (SetReportItemsReferenceListVariableResult);

message SetReportItemsReferenceListVariableRequest {
  optional string name = 1;
  repeated CollectionItemName value = 2;
}

message SetReportItemsReferenceListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set String Ref List Variable {/* #set-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-ref-list-variable)

`/briosa.Variables/SetStringRefListVariable` · Operation ID: `variables.set_string_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `repeated string` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetStringRefListVariable(SetStringRefListVariableRequest) returns (SetStringRefListVariableResult);

message SetStringRefListVariableRequest {
  optional string name = 1;
  repeated string value = 2;
}

message SetStringRefListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set String Variable {/* #set-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-variable)

`/briosa.Variables/SetStringVariable` · Operation ID: `variables.set_string_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional string` | Value | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetStringVariable(SetStringVariableRequest) returns (SetStringVariableResult);

message SetStringVariableRequest {
  optional string name = 1;
  optional string value = 2;
}

message SetStringVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Transform Variable {/* #set-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-transform-variable)

`/briosa.Variables/SetTransformVariable` · Operation ID: `variables.set_transform_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional Transform` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetTransformVariable(SetTransformVariableRequest) returns (SetTransformVariableResult);

message SetTransformVariableRequest {
  optional string name = 1;
  optional Transform value = 2;
}

message SetTransformVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector Name Ref List Variable {/* #set-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable)

`/briosa.Variables/SetVectorNameRefListVariable` · Operation ID: `variables.set_vector_name_ref_list_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `repeated VectorName` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorNameRefListVariable(SetVectorNameRefListVariableRequest) returns (SetVectorNameRefListVariableResult);

message SetVectorNameRefListVariableRequest {
  optional string name = 1;
  repeated VectorName value = 2;
}

message SetVectorNameRefListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector Variable {/* #set-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-variable)

`/briosa.Variables/SetVectorVariable` · Operation ID: `variables.set_vector_variable`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `optional string` | Name | Empty |
| Request | 2 | `value` | `optional Vector` | Value | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorVariable(SetVectorVariableRequest) returns (SetVectorVariableResult);

message SetVectorVariableRequest {
  optional string name = 1;
  optional Vector value = 2;
}

message SetVectorVariableResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
