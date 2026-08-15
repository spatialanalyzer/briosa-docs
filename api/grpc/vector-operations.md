---
title: Vector Operations
description: Current and next gRPC contracts for supported Vector Operations MP commands.
toc_max_heading_level: 2
---

# Vector Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Add a Vector To Vector Name Ref List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Add a Vector To Vector Name Ref List](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list) |
| Service | `briosa.VectorOperations` |
| RPC | `AddAVectorToVectorNameRefList` |
| Operation ID | `vector_operations.add_a_vector_to_vector_name_ref_list` |
| Route | `/briosa.VectorOperations/AddAVectorToVectorNameRefList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| Request | 2 | `vector_name` | `string` | `Vector Name` | Empty |
| Request | 3 | `vector_name_list` | `repeated VectorName` | `Vector Name List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddAVectorToVectorNameRefList(AddAVectorToVectorNameRefListRequest) returns (AddAVectorToVectorNameRefListResult);

message AddAVectorToVectorNameRefListRequest {
  optional CollectionObjectName vector_group_name = 1;
  optional string vector_name = 2;
  repeated VectorName vector_name_list = 3;
}

message AddAVectorToVectorNameRefListResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Auto-Range and Set Vector Group Colorization (All)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Auto-Range and Set Vector Group Colorization (All)](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all) |
| Service | `briosa.VectorOperations` |
| RPC | `AutoRangeAndSetVectorGroupColorizationAll` |
| Operation ID | `vector_operations.auto_range_and_set_vector_group_colorization_all` |
| Route | `/briosa.VectorOperations/AutoRangeAndSetVectorGroupColorizationAll` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `treat_individually` | `bool` | `Treat Individually?` | false |
| Request | 2 | `colorization_options_uses_mode_only` | `ColorizationOptions` | `Colorization Options (Uses Mode Only)` | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AutoRangeAndSetVectorGroupColorizationAll(AutoRangeAndSetVectorGroupColorizationAllRequest) returns (AutoRangeAndSetVectorGroupColorizationAllResult);

message AutoRangeAndSetVectorGroupColorizationAllRequest {
  optional bool treat_individually = 1;
  optional ColorizationOptions colorization_options_uses_mode_only = 2;
}

message AutoRangeAndSetVectorGroupColorizationAllResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Auto-Range and Set Vector Group Colorization (Selected)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Auto-Range and Set Vector Group Colorization (Selected)](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected) |
| Service | `briosa.VectorOperations` |
| RPC | `AutoRangeAndSetVectorGroupColorizationSelected` |
| Operation ID | `vector_operations.auto_range_and_set_vector_group_colorization_selected` |
| Route | `/briosa.VectorOperations/AutoRangeAndSetVectorGroupColorizationSelected` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_groups_to_be_set` | `repeated CollectionVectorGroupName` | `Vector Groups to be Set` | Required |
| Request | 2 | `treat_individually` | `bool` | `Treat Individually?` | false |
| Request | 3 | `colorization_options_uses_mode_only` | `ColorizationOptions` | `Colorization Options (Uses Mode Only)` | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AutoRangeAndSetVectorGroupColorizationSelected(AutoRangeAndSetVectorGroupColorizationSelectedRequest) returns (AutoRangeAndSetVectorGroupColorizationSelectedResult);

message AutoRangeAndSetVectorGroupColorizationSelectedRequest {
  repeated CollectionVectorGroupName vector_groups_to_be_set = 1;
  optional bool treat_individually = 2;
  optional ColorizationOptions colorization_options_uses_mode_only = 3;
}

message AutoRangeAndSetVectorGroupColorizationSelectedResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete i-th Vector From Vector Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete i-th Vector From Vector Group](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group) |
| Service | `briosa.VectorOperations` |
| RPC | `DeleteIthVectorFromVectorGroup` |
| Operation ID | `vector_operations.delete_ith_vector_from_vector_group` |
| Route | `/briosa.VectorOperations/DeleteIthVectorFromVectorGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| Request | 2 | `vector_index` | `int32` | `Vector Index` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteIthVectorFromVectorGroup(DeleteIthVectorFromVectorGroupRequest) returns (DeleteIthVectorFromVectorGroupResult);

message DeleteIthVectorFromVectorGroupRequest {
  optional CollectionObjectName vector_group_name = 1;
  optional int32 vector_index = 2;
}

message DeleteIthVectorFromVectorGroupResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Vector by Name

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Vector by Name](/mp-command-catalog/commands/vector-operations#delete-vector-by-name) |
| Service | `briosa.VectorOperations` |
| RPC | `DeleteVectorByName` |
| Operation ID | `vector_operations.delete_vector_by_name` |
| Route | `/briosa.VectorOperations/DeleteVectorByName` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| Request | 2 | `vector_name` | `string` | `Vector Name` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteVectorByName(DeleteVectorByNameRequest) returns (DeleteVectorByNameResult);

message DeleteVectorByNameRequest {
  optional CollectionObjectName vector_group_name = 1;
  optional string vector_name = 2;
}

message DeleteVectorByNameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Delete Vectors

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Vectors](/mp-command-catalog/commands/vector-operations#delete-vectors) |
| Service | `briosa.VectorOperations` |
| RPC | `DeleteVectors` |
| Operation ID | `vector_operations.delete_vectors` |
| Route | `/briosa.VectorOperations/DeleteVectors` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_name_list` | `repeated VectorName` | `Vector Name List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteVectors(DeleteVectorsRequest) returns (DeleteVectorsResult);

message DeleteVectorsRequest {
  repeated VectorName vector_name_list = 1;
}

message DeleteVectorsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get i-th Vector From Vector Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get i-th Vector From Vector Group](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group) |
| Service | `briosa.VectorOperations` |
| RPC | `GetIthVectorFromVectorGroup` |
| Operation ID | `vector_operations.get_ith_vector_from_vector_group` |
| Route | `/briosa.VectorOperations/GetIthVectorFromVectorGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| Request | 2 | `vector_index` | `int32` | `Vector Index` | 0 |
| Result | 1 | `vector_name` | `string` | `Vector Name` | — |
| Result | 2 | `begin_in_working` | `Vector` | `Begin in Working` | — |
| Result | 3 | `end_in_working` | `Vector` | `End in Working` | — |
| Result | 4 | `total_delta_in_working` | `Vector` | `Total Delta in Working` | — |
| Result | 5 | `ijk_unit_vector_in_working` | `Vector` | `ijk Unit Vector in Working` | — |
| Result | 6 | `magnitude` | `double` | `Magnitude` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetIthVectorFromVectorGroup(GetIthVectorFromVectorGroupRequest) returns (GetIthVectorFromVectorGroupResult);

message GetIthVectorFromVectorGroupRequest {
  optional CollectionObjectName vector_group_name = 1;
  optional int32 vector_index = 2;
}

message GetIthVectorFromVectorGroupResult {
  optional string vector_name = 1;
  optional Vector begin_in_working = 2;
  optional Vector end_in_working = 3;
  optional Vector total_delta_in_working = 4;
  optional Vector ijk_unit_vector_in_working = 5;
  optional double magnitude = 6;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get i-th Vector From Vector Name Ref List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get i-th Vector From Vector Name Ref List](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list) |
| Service | `briosa.VectorOperations` |
| RPC | `GetIthVectorFromVectorNameRefList` |
| Operation ID | `vector_operations.get_ith_vector_from_vector_name_ref_list` |
| Route | `/briosa.VectorOperations/GetIthVectorFromVectorNameRefList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_name_list` | `repeated VectorName` | `Vector Name List` | Required |
| Request | 2 | `vector_index` | `int32` | `Vector Index` | 0 |
| Result | 1 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | — |
| Result | 2 | `vector_name` | `string` | `Vector Name` | — |
| Result | 3 | `begin_in_working` | `Vector` | `Begin in Working` | — |
| Result | 4 | `end_in_working` | `Vector` | `End in Working` | — |
| Result | 5 | `total_delta_in_working` | `Vector` | `Total Delta in Working` | — |
| Result | 6 | `ijk_unit_vector_in_working` | `Vector` | `ijk Unit Vector in Working` | — |
| Result | 7 | `magnitude` | `double` | `Magnitude` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetIthVectorFromVectorNameRefList(GetIthVectorFromVectorNameRefListRequest) returns (GetIthVectorFromVectorNameRefListResult);

message GetIthVectorFromVectorNameRefListRequest {
  repeated VectorName vector_name_list = 1;
  optional int32 vector_index = 2;
}

message GetIthVectorFromVectorNameRefListResult {
  optional CollectionObjectName vector_group_name = 1;
  optional string vector_name = 2;
  optional Vector begin_in_working = 3;
  optional Vector end_in_working = 4;
  optional Vector total_delta_in_working = 5;
  optional Vector ijk_unit_vector_in_working = 6;
  optional double magnitude = 7;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Number of Vectors in Vector Group

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Number of Vectors in Vector Group](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group) |
| Service | `briosa.VectorOperations` |
| RPC | `GetNumberOfVectorsInVectorGroup` |
| Operation ID | `vector_operations.get_number_of_vectors_in_vector_group` |
| Route | `/briosa.VectorOperations/GetNumberOfVectorsInVectorGroup` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| Result | 1 | `total_count` | `int32` | `Total Count` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetNumberOfVectorsInVectorGroup(GetNumberOfVectorsInVectorGroupRequest) returns (GetNumberOfVectorsInVectorGroupResult);

message GetNumberOfVectorsInVectorGroupRequest {
  optional CollectionObjectName vector_group_name = 1;
}

message GetNumberOfVectorsInVectorGroupResult {
  optional int32 total_count = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Number of Vectors in Vector Name Ref List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Number of Vectors in Vector Name Ref List](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list) |
| Service | `briosa.VectorOperations` |
| RPC | `GetNumberOfVectorsInVectorNameRefList` |
| Operation ID | `vector_operations.get_number_of_vectors_in_vector_name_ref_list` |
| Route | `/briosa.VectorOperations/GetNumberOfVectorsInVectorNameRefList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_name_list` | `repeated VectorName` | `Vector Name List` | Required |
| Result | 1 | `total_count` | `int32` | `Total Count` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetNumberOfVectorsInVectorNameRefList(GetNumberOfVectorsInVectorNameRefListRequest) returns (GetNumberOfVectorsInVectorNameRefListResult);

message GetNumberOfVectorsInVectorNameRefListRequest {
  repeated VectorName vector_name_list = 1;
}

message GetNumberOfVectorsInVectorNameRefListResult {
  optional int32 total_count = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Vector From Vector Group By Name

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Vector From Vector Group By Name](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name) |
| Service | `briosa.VectorOperations` |
| RPC | `GetVectorFromVectorGroupByName` |
| Operation ID | `vector_operations.get_vector_from_vector_group_by_name` |
| Route | `/briosa.VectorOperations/GetVectorFromVectorGroupByName` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| Request | 2 | `vector_name` | `string` | `Vector Name` | Empty |
| Result | 1 | `begin_in_working` | `Vector` | `Begin in Working` | — |
| Result | 2 | `end_in_working` | `Vector` | `End in Working` | — |
| Result | 3 | `total_delta_in_working` | `Vector` | `Total Delta in Working` | — |
| Result | 4 | `ijk_unit_vector_in_working` | `Vector` | `ijk Unit Vector in Working` | — |
| Result | 5 | `magnitude` | `double` | `Magnitude` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetVectorFromVectorGroupByName(GetVectorFromVectorGroupByNameRequest) returns (GetVectorFromVectorGroupByNameResult);

message GetVectorFromVectorGroupByNameRequest {
  optional CollectionObjectName vector_group_name = 1;
  optional string vector_name = 2;
}

message GetVectorFromVectorGroupByNameResult {
  optional Vector begin_in_working = 1;
  optional Vector end_in_working = 2;
  optional Vector total_delta_in_working = 3;
  optional Vector ijk_unit_vector_in_working = 4;
  optional double magnitude = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Vector Group Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Vector Group Properties](/mp-command-catalog/commands/vector-operations#get-vector-group-properties) |
| Service | `briosa.VectorOperations` |
| RPC | `GetVectorGroupProperties` |
| Operation ID | `vector_operations.get_vector_group_properties` |
| Route | `/briosa.VectorOperations/GetVectorGroupProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| Result | 1 | `total_vectors` | `int32` | `Total Vectors` | — |
| Result | 2 | `vectors_in_tolerance` | `int32` | `Vectors In Tolerance` | — |
| Result | 3 | `vectors_out_of_tolerance` | `int32` | `Vectors Out Of Tolerance` | — |
| Result | 4 | `invalid_vectors` | `int32` | `Invalid Vectors` | — |
| Result | 5 | `vectors_in_tolerance_2` | `double` | `% Vectors In Tolerance` | — |
| Result | 6 | `vectors_out_of_tolerance_2` | `double` | `% Vectors Out Of Tolerance` | — |
| Result | 7 | `absolute_max_magnitude` | `double` | `Absolute Max Magnitude` | — |
| Result | 8 | `absolute_min_magnitude` | `double` | `Absolute Min Magnitude` | — |
| Result | 9 | `max_magnitude` | `double` | `Max Magnitude` | — |
| Result | 10 | `min_magnitude` | `double` | `Min Magnitude` | — |
| Result | 11 | `standard_deviation_from_zero` | `double` | `Standard Deviation From Zero` | — |
| Result | 12 | `standard_deviation_from_mean` | `double` | `Standard Deviation From Mean` | — |
| Result | 13 | `avg_magnitude` | `double` | `Avg Magnitude` | — |
| Result | 14 | `avg_of_abs_magnitude` | `double` | `Avg of Abs Magnitude` | — |
| Result | 15 | `high_tolerance_value` | `double` | `High Tolerance Value` | — |
| Result | 16 | `low_tolerance_value` | `double` | `Low Tolerance Value` | — |
| Result | 17 | `rms_value` | `double` | `RMS Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetVectorGroupProperties(GetVectorGroupPropertiesRequest) returns (GetVectorGroupPropertiesResult);

message GetVectorGroupPropertiesRequest {
  optional CollectionObjectName vector_group_name = 1;
}

message GetVectorGroupPropertiesResult {
  optional int32 total_vectors = 1;
  optional int32 vectors_in_tolerance = 2;
  optional int32 vectors_out_of_tolerance = 3;
  optional int32 invalid_vectors = 4;
  optional double vectors_in_tolerance_2 = 5;
  optional double vectors_out_of_tolerance_2 = 6;
  optional double absolute_max_magnitude = 7;
  optional double absolute_min_magnitude = 8;
  optional double max_magnitude = 9;
  optional double min_magnitude = 10;
  optional double standard_deviation_from_zero = 11;
  optional double standard_deviation_from_mean = 12;
  optional double avg_magnitude = 13;
  optional double avg_of_abs_magnitude = 14;
  optional double high_tolerance_value = 15;
  optional double low_tolerance_value = 16;
  optional double rms_value = 17;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Vector Group Colorization Options (All)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Vector Group Colorization Options (All)](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all) |
| Service | `briosa.VectorOperations` |
| RPC | `SetVectorGroupColorizationOptionsAll` |
| Operation ID | `vector_operations.set_vector_group_colorization_options_all` |
| Route | `/briosa.VectorOperations/SetVectorGroupColorizationOptionsAll` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `colorization_options` | `ColorizationOptions` | `Colorization Options` | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetVectorGroupColorizationOptionsAll(SetVectorGroupColorizationOptionsAllRequest) returns (SetVectorGroupColorizationOptionsAllResult);

message SetVectorGroupColorizationOptionsAllRequest {
  optional ColorizationOptions colorization_options = 1;
}

message SetVectorGroupColorizationOptionsAllResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Vector Group Colorization Options (Selected)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Vector Group Colorization Options (Selected)](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected) |
| Service | `briosa.VectorOperations` |
| RPC | `SetVectorGroupColorizationOptionsSelected` |
| Operation ID | `vector_operations.set_vector_group_colorization_options_selected` |
| Route | `/briosa.VectorOperations/SetVectorGroupColorizationOptionsSelected` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_groups_to_be_set` | `repeated CollectionVectorGroupName` | `Vector Groups to be Set` | Required |
| Request | 2 | `colorization_options` | `ColorizationOptions` | `Colorization Options` | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetVectorGroupColorizationOptionsSelected(SetVectorGroupColorizationOptionsSelectedRequest) returns (SetVectorGroupColorizationOptionsSelectedResult);

message SetVectorGroupColorizationOptionsSelectedRequest {
  repeated CollectionVectorGroupName vector_groups_to_be_set = 1;
  optional ColorizationOptions colorization_options = 2;
}

message SetVectorGroupColorizationOptionsSelectedResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Sort Vectors

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Sort Vectors](/mp-command-catalog/commands/vector-operations#sort-vectors) |
| Service | `briosa.VectorOperations` |
| RPC | `SortVectors` |
| Operation ID | `vector_operations.sort_vectors` |
| Route | `/briosa.VectorOperations/SortVectors` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_vectors` | `repeated VectorName` | `Source Vectors` | Required |
| Request | 2 | `sort_method` | `string` | `Sort Method` | Magnitude |
| Request | 3 | `coordinate_system` | `CoordinateSystemType` | `Coordinate System` | Cartesian |
| Request | 4 | `primary_sort_coordinate` | `string` | `Primary Sort Coordinate` | X (R) |
| Request | 5 | `secondary_sort_coordinate` | `string` | `Secondary Sort Coordinate` | Y (Theta) |
| Request | 6 | `tertiary_sort_coordinate` | `string` | `Tertiary Sort Coordinate` | Z (Phi) |
| Request | 7 | `primary_coordinate_granularity` | `double` | `Primary Coordinate Granularity` | 0.000000 |
| Request | 8 | `secondary_coordinate_granularity` | `double` | `Secondary Coordinate Granularity` | 0.000000 |
| Request | 9 | `tertiary_coordinate_granularity` | `double` | `Tertiary Coordinate Granularity` | 0.000000 |
| Request | 10 | `ascending` | `bool` | `Ascending?` | false |
| Result | 1 | `sorted_vectors` | `repeated VectorName` | `Sorted Vectors` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SortVectors(SortVectorsRequest) returns (SortVectorsResult);

message SortVectorsRequest {
  repeated VectorName source_vectors = 1;
  optional string sort_method = 2;
  optional CoordinateSystemType coordinate_system = 3;
  optional string primary_sort_coordinate = 4;
  optional string secondary_sort_coordinate = 5;
  optional string tertiary_sort_coordinate = 6;
  optional double primary_coordinate_granularity = 7;
  optional double secondary_coordinate_granularity = 8;
  optional double tertiary_coordinate_granularity = 9;
  optional bool ascending = 10;
}

message SortVectorsResult {
  repeated VectorName sorted_vectors = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
