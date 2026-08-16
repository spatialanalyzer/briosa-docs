---
title: Variables
description: Current and next gRPC contracts for supported Variables MP commands.
toc_max_heading_level: 2
---

# Variables

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Add Double to Named Double List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add Double to Named Double List Variable](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable) |
| Service | `briosa.Variables` |
| RPC | `AddDoubleToNamedDoubleListVariable` |
| Operation ID | `variables.add_double_to_named_double_list_variable` |
| Route | `/briosa.Variables/AddDoubleToNamedDoubleListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `double_value` | `double` | `Double Value` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Clear Named Double List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Clear Named Double List Variable](/mp-command-catalog/commands/variables#clear-named-double-list-variable) |
| Service | `briosa.Variables` |
| RPC | `ClearNamedDoubleListVariable` |
| Operation ID | `variables.clear_named_double_list_variable` |
| Route | `/briosa.Variables/ClearNamedDoubleListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ClearNamedDoubleListVariable(ClearNamedDoubleListVariableRequest) returns (ClearNamedDoubleListVariableResult);

message ClearNamedDoubleListVariableRequest {
  optional string name = 1;
}

message ClearNamedDoubleListVariableResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Variable](/mp-command-catalog/commands/variables#delete-variable) |
| Service | `briosa.Variables` |
| RPC | `DeleteVariable` |
| Operation ID | `variables.delete_variable` |
| Route | `/briosa.Variables/DeleteVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteVariable(DeleteVariableRequest) returns (DeleteVariableResult);

message DeleteVariableRequest {
  optional string name = 1;
}

message DeleteVariableResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Variables -- Wildcard Match

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Variables -- Wildcard Match](/mp-command-catalog/commands/variables#delete-variables----wildcard-match) |
| Service | `briosa.Variables` |
| RPC | `DeleteVariablesWildcardMatch` |
| Operation ID | `variables.delete_variables_wildcard_match` |
| Route | `/briosa.Variables/DeleteVariablesWildcardMatch` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `variable_wildcard_criteria` | `string` | `Variable Wildcard Criteria` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteVariablesWildcardMatch(DeleteVariablesWildcardMatchRequest) returns (DeleteVariablesWildcardMatchResult);

message DeleteVariablesWildcardMatchRequest {
  optional string variable_wildcard_criteria = 1;
}

message DeleteVariablesWildcardMatchResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Boolean Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Boolean Variable](/mp-command-catalog/commands/variables#get-boolean-variable) |
| Service | `briosa.Variables` |
| RPC | `GetBooleanVariable` |
| Operation ID | `variables.get_boolean_variable` |
| Route | `/briosa.Variables/GetBooleanVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `bool` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Collection Object Name Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Collection Object Name Variable](/mp-command-catalog/commands/variables#get-collection-object-name-variable) |
| Service | `briosa.Variables` |
| RPC | `GetCollectionObjectNameVariable` |
| Operation ID | `variables.get_collection_object_name_variable` |
| Route | `/briosa.Variables/GetCollectionObjectNameVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `CollectionObjectName` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Collection Object Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Collection Object Ref List Variable](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `GetCollectionObjectRefListVariable` |
| Operation ID | `variables.get_collection_object_ref_list_variable` |
| Route | `/briosa.Variables/GetCollectionObjectRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `repeated CollectionObjectName` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Double Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Double Variable](/mp-command-catalog/commands/variables#get-double-variable) |
| Service | `briosa.Variables` |
| RPC | `GetDoubleVariable` |
| Operation ID | `variables.get_double_variable` |
| Route | `/briosa.Variables/GetDoubleVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `double` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Integer Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Integer Variable](/mp-command-catalog/commands/variables#get-integer-variable) |
| Service | `briosa.Variables` |
| RPC | `GetIntegerVariable` |
| Operation ID | `variables.get_integer_variable` |
| Route | `/briosa.Variables/GetIntegerVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `int32` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Named Double List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Named Double List Variable](/mp-command-catalog/commands/variables#get-named-double-list-variable) |
| Service | `briosa.Variables` |
| RPC | `GetNamedDoubleListVariable` |
| Operation ID | `variables.get_named_double_list_variable` |
| Route | `/briosa.Variables/GetNamedDoubleListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `double_list_variable` | `repeated double` | `Double List Variable` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Named Double List Variable Min/Max

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Named Double List Variable Min/Max](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax) |
| Service | `briosa.Variables` |
| RPC | `GetNamedDoubleListVariableMinMax` |
| Operation ID | `variables.get_named_double_list_variable_min_max` |
| Route | `/briosa.Variables/GetNamedDoubleListVariableMinMax` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `minimum_value` | `double` | `Minimum Value` | — |
| Result | 2 | `maximum_value` | `double` | `Maximum Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point Name Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point Name Ref List Variable](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `GetPointNameRefListVariable` |
| Operation ID | `variables.get_point_name_ref_list_variable` |
| Route | `/briosa.Variables/GetPointNameRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `repeated PointName` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Point Name Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Point Name Variable](/mp-command-catalog/commands/variables#get-point-name-variable) |
| Service | `briosa.Variables` |
| RPC | `GetPointNameVariable` |
| Operation ID | `variables.get_point_name_variable` |
| Route | `/briosa.Variables/GetPointNameVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `PointName` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Ref List Variable](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `GetRelationshipRefListVariable` |
| Operation ID | `variables.get_relationship_ref_list_variable` |
| Route | `/briosa.Variables/GetRelationshipRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `repeated CollectionItemName` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Report Items Reference List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Report Items Reference List Variable](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable) |
| Service | `briosa.Variables` |
| RPC | `GetReportItemsReferenceListVariable` |
| Operation ID | `variables.get_report_items_reference_list_variable` |
| Route | `/briosa.Variables/GetReportItemsReferenceListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `repeated CollectionItemName` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get String Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get String Ref List Variable](/mp-command-catalog/commands/variables#get-string-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `GetStringRefListVariable` |
| Operation ID | `variables.get_string_ref_list_variable` |
| Route | `/briosa.Variables/GetStringRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `repeated string` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get String Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get String Variable](/mp-command-catalog/commands/variables#get-string-variable) |
| Service | `briosa.Variables` |
| RPC | `GetStringVariable` |
| Operation ID | `variables.get_string_variable` |
| Route | `/briosa.Variables/GetStringVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `string` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Transform Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Transform Variable](/mp-command-catalog/commands/variables#get-transform-variable) |
| Service | `briosa.Variables` |
| RPC | `GetTransformVariable` |
| Operation ID | `variables.get_transform_variable` |
| Route | `/briosa.Variables/GetTransformVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `Transform` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Vector Name Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Vector Name Ref List Variable](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `GetVectorNameRefListVariable` |
| Operation ID | `variables.get_vector_name_ref_list_variable` |
| Route | `/briosa.Variables/GetVectorNameRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `repeated VectorName` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Vector Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Vector Variable](/mp-command-catalog/commands/variables#get-vector-variable) |
| Service | `briosa.Variables` |
| RPC | `GetVectorVariable` |
| Operation ID | `variables.get_vector_variable` |
| Route | `/briosa.Variables/GetVectorVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Result | 1 | `value` | `Vector` | `Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Boolean Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Boolean Variable](/mp-command-catalog/commands/variables#set-boolean-variable) |
| Service | `briosa.Variables` |
| RPC | `SetBooleanVariable` |
| Operation ID | `variables.set_boolean_variable` |
| Route | `/briosa.Variables/SetBooleanVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `bool` | `Value` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Collection Object Name Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Collection Object Name Variable](/mp-command-catalog/commands/variables#set-collection-object-name-variable) |
| Service | `briosa.Variables` |
| RPC | `SetCollectionObjectNameVariable` |
| Operation ID | `variables.set_collection_object_name_variable` |
| Route | `/briosa.Variables/SetCollectionObjectNameVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `CollectionObjectName` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Collection Object Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Collection Object Ref List Variable](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `SetCollectionObjectRefListVariable` |
| Operation ID | `variables.set_collection_object_ref_list_variable` |
| Route | `/briosa.Variables/SetCollectionObjectRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `repeated CollectionObjectName` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Double Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Double Variable](/mp-command-catalog/commands/variables#set-double-variable) |
| Service | `briosa.Variables` |
| RPC | `SetDoubleVariable` |
| Operation ID | `variables.set_double_variable` |
| Route | `/briosa.Variables/SetDoubleVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `double` | `Value` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Font Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Font Variable](/mp-command-catalog/commands/variables#set-font-variable) |
| Service | `briosa.Variables` |
| RPC | `SetFontVariable` |
| Operation ID | `variables.set_font_variable` |
| Route | `/briosa.Variables/SetFontVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `Font` | `Value` | MS Shell Dlg |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Integer Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Integer Variable](/mp-command-catalog/commands/variables#set-integer-variable) |
| Service | `briosa.Variables` |
| RPC | `SetIntegerVariable` |
| Operation ID | `variables.set_integer_variable` |
| Route | `/briosa.Variables/SetIntegerVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `int32` | `Value` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Named Double List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Named Double List Variable](/mp-command-catalog/commands/variables#set-named-double-list-variable) |
| Service | `briosa.Variables` |
| RPC | `SetNamedDoubleListVariable` |
| Operation ID | `variables.set_named_double_list_variable` |
| Route | `/briosa.Variables/SetNamedDoubleListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `double_list_variable` | `repeated double` | `Double List Variable` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Point Name Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Point Name Ref List Variable](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `SetPointNameRefListVariable` |
| Operation ID | `variables.set_point_name_ref_list_variable` |
| Route | `/briosa.Variables/SetPointNameRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `repeated PointName` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Point Name Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Point Name Variable](/mp-command-catalog/commands/variables#set-point-name-variable) |
| Service | `briosa.Variables` |
| RPC | `SetPointNameVariable` |
| Operation ID | `variables.set_point_name_variable` |
| Route | `/briosa.Variables/SetPointNameVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `PointName` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Ref List Variable](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `SetRelationshipRefListVariable` |
| Operation ID | `variables.set_relationship_ref_list_variable` |
| Route | `/briosa.Variables/SetRelationshipRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `repeated CollectionItemName` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Report Items Reference List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Report Items Reference List Variable](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable) |
| Service | `briosa.Variables` |
| RPC | `SetReportItemsReferenceListVariable` |
| Operation ID | `variables.set_report_items_reference_list_variable` |
| Route | `/briosa.Variables/SetReportItemsReferenceListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `repeated CollectionItemName` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set String Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set String Ref List Variable](/mp-command-catalog/commands/variables#set-string-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `SetStringRefListVariable` |
| Operation ID | `variables.set_string_ref_list_variable` |
| Route | `/briosa.Variables/SetStringRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `repeated string` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set String Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set String Variable](/mp-command-catalog/commands/variables#set-string-variable) |
| Service | `briosa.Variables` |
| RPC | `SetStringVariable` |
| Operation ID | `variables.set_string_variable` |
| Route | `/briosa.Variables/SetStringVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `string` | `Value` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Transform Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Transform Variable](/mp-command-catalog/commands/variables#set-transform-variable) |
| Service | `briosa.Variables` |
| RPC | `SetTransformVariable` |
| Operation ID | `variables.set_transform_variable` |
| Route | `/briosa.Variables/SetTransformVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `Transform` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Vector Name Ref List Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Vector Name Ref List Variable](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable) |
| Service | `briosa.Variables` |
| RPC | `SetVectorNameRefListVariable` |
| Operation ID | `variables.set_vector_name_ref_list_variable` |
| Route | `/briosa.Variables/SetVectorNameRefListVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `repeated VectorName` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Vector Variable

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Vector Variable](/mp-command-catalog/commands/variables#set-vector-variable) |
| Service | `briosa.Variables` |
| RPC | `SetVectorVariable` |
| Operation ID | `variables.set_vector_variable` |
| Route | `/briosa.Variables/SetVectorVariable` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Empty |
| Request | 2 | `value` | `Vector` | `Value` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
