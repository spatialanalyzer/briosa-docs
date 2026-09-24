---
title: Vector Operations
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Vector Operations

[SA 2026.1.0529.7](/api/grpc/vector-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/vector-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add a Vector To Vector Name Ref List {/* #add-a-vector-to-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list)

`/briosa.VectorOperations/AddAVectorToVectorNameRefList` · Operation ID: `vector_operations.add_a_vector_to_vector_name_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 2 | `vector_name` | `optional string` | Vector Name | Empty |
| Request | 3 | `vector_name_list` | `repeated VectorName` | Vector Name List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Auto-Range and Set Vector Group Colorization (All) {/* #auto-range-and-set-vector-group-colorization-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all)

`/briosa.VectorOperations/AutoRangeAndSetVectorGroupColorizationAll` · Operation ID: `vector_operations.auto_range_and_set_vector_group_colorization_all`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `treat_individually` | `optional bool` | Treat Individually? | false |
| Request | 2 | `colorization_options` | `optional ColorizationOptions` | Colorization Options (Uses Mode Only) | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoRangeAndSetVectorGroupColorizationAll(AutoRangeAndSetVectorGroupColorizationAllRequest) returns (AutoRangeAndSetVectorGroupColorizationAllResult);

message AutoRangeAndSetVectorGroupColorizationAllRequest {
  optional bool treat_individually = 1;
  optional ColorizationOptions colorization_options = 2;
}

message AutoRangeAndSetVectorGroupColorizationAllResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `colorization_options` | MP qualifier: Uses Mode Only. |

## Auto-Range and Set Vector Group Colorization (Selected) {/* #auto-range-and-set-vector-group-colorization-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected)

`/briosa.VectorOperations/AutoRangeAndSetVectorGroupColorizationSelected` · Operation ID: `vector_operations.auto_range_and_set_vector_group_colorization_selected`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_groups_to_be_set` | `repeated CollectionVectorGroupName` | Vector Groups to be Set | Required |
| Request | 2 | `treat_individually` | `optional bool` | Treat Individually? | false |
| Request | 3 | `colorization_options` | `optional ColorizationOptions` | Colorization Options (Uses Mode Only) | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoRangeAndSetVectorGroupColorizationSelected(AutoRangeAndSetVectorGroupColorizationSelectedRequest) returns (AutoRangeAndSetVectorGroupColorizationSelectedResult);

message AutoRangeAndSetVectorGroupColorizationSelectedRequest {
  repeated CollectionVectorGroupName vector_groups_to_be_set = 1;
  optional bool treat_individually = 2;
  optional ColorizationOptions colorization_options = 3;
}

message AutoRangeAndSetVectorGroupColorizationSelectedResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `colorization_options` | MP qualifier: Uses Mode Only. |

## Delete i-th Vector From Vector Group {/* #delete-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group)

`/briosa.VectorOperations/DeleteIthVectorFromVectorGroup` · Operation ID: `vector_operations.delete_ith_vector_from_vector_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 2 | `vector_index` | `optional int32` | Vector Index | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Delete Vector by Name {/* #delete-vector-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vector-by-name)

`/briosa.VectorOperations/DeleteVectorByName` · Operation ID: `vector_operations.delete_vector_by_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 2 | `vector_name` | `optional string` | Vector Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Delete Vectors {/* #delete-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vectors)

`/briosa.VectorOperations/DeleteVectors` · Operation ID: `vector_operations.delete_vectors`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_name_list` | `repeated VectorName` | Vector Name List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteVectors(DeleteVectorsRequest) returns (DeleteVectorsResult);

message DeleteVectorsRequest {
  repeated VectorName vector_name_list = 1;
}

message DeleteVectorsResult {
  MpExecutionDetails execution = 1000;
}
```

## Get i-th Vector From Vector Group {/* #get-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group)

`/briosa.VectorOperations/GetIthVectorFromVectorGroup` · Operation ID: `vector_operations.get_ith_vector_from_vector_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 2 | `vector_index` | `optional int32` | Vector Index | 0 |
| Result | 1 | `vector_name` | `optional string` | Vector Name | — |
| Result | 2 | `begin_in_working` | `optional Vector` | Begin in Working | — |
| Result | 3 | `end_in_working` | `optional Vector` | End in Working | — |
| Result | 4 | `total_delta_in_working` | `optional Vector` | Total Delta in Working | — |
| Result | 5 | `ijk_unit_vector_in_working` | `optional Vector` | ijk Unit Vector in Working | — |
| Result | 6 | `magnitude` | `optional double` | Magnitude | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get i-th Vector From Vector Name Ref List {/* #get-i-th-vector-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list)

`/briosa.VectorOperations/GetIthVectorFromVectorNameRefList` · Operation ID: `vector_operations.get_ith_vector_from_vector_name_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_name_list` | `repeated VectorName` | Vector Name List | Required |
| Request | 2 | `vector_index` | `optional int32` | Vector Index | 0 |
| Result | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | — |
| Result | 2 | `vector_name` | `optional string` | Vector Name | — |
| Result | 3 | `begin_in_working` | `optional Vector` | Begin in Working | — |
| Result | 4 | `end_in_working` | `optional Vector` | End in Working | — |
| Result | 5 | `total_delta_in_working` | `optional Vector` | Total Delta in Working | — |
| Result | 6 | `ijk_unit_vector_in_working` | `optional Vector` | ijk Unit Vector in Working | — |
| Result | 7 | `magnitude` | `optional double` | Magnitude | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Number of Vectors in Vector Group {/* #get-number-of-vectors-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group)

`/briosa.VectorOperations/GetNumberOfVectorsInVectorGroup` · Operation ID: `vector_operations.get_number_of_vectors_in_vector_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Result | 1 | `total_count` | `optional int32` | Total Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Number of Vectors in Vector Name Ref List {/* #get-number-of-vectors-in-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list)

`/briosa.VectorOperations/GetNumberOfVectorsInVectorNameRefList` · Operation ID: `vector_operations.get_number_of_vectors_in_vector_name_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_name_list` | `repeated VectorName` | Vector Name List | Required |
| Result | 1 | `total_count` | `optional int32` | Total Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Vector From Vector Group By Name {/* #get-vector-from-vector-group-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name)

`/briosa.VectorOperations/GetVectorFromVectorGroupByName` · Operation ID: `vector_operations.get_vector_from_vector_group_by_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 2 | `vector_name` | `optional string` | Vector Name | Empty |
| Result | 1 | `begin_in_working` | `optional Vector` | Begin in Working | — |
| Result | 2 | `end_in_working` | `optional Vector` | End in Working | — |
| Result | 3 | `total_delta_in_working` | `optional Vector` | Total Delta in Working | — |
| Result | 4 | `ijk_unit_vector_in_working` | `optional Vector` | ijk Unit Vector in Working | — |
| Result | 5 | `magnitude` | `optional double` | Magnitude | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Get Vector Group Properties {/* #get-vector-group-properties */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-group-properties)

`/briosa.VectorOperations/GetVectorGroupProperties` · Operation ID: `vector_operations.get_vector_group_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Result | 1 | `total_vectors` | `optional int32` | Total Vectors | — |
| Result | 2 | `vectors_in_tolerance` | `optional int32` | Vectors In Tolerance | — |
| Result | 3 | `vectors_out_of_tolerance` | `optional int32` | Vectors Out Of Tolerance | — |
| Result | 4 | `invalid_vectors` | `optional int32` | Invalid Vectors | — |
| Result | 5 | `vectors_in_tolerance_2` | `optional double` | % Vectors In Tolerance | — |
| Result | 6 | `vectors_out_of_tolerance_2` | `optional double` | % Vectors Out Of Tolerance | — |
| Result | 7 | `absolute_max_magnitude` | `optional double` | Absolute Max Magnitude | — |
| Result | 8 | `absolute_min_magnitude` | `optional double` | Absolute Min Magnitude | — |
| Result | 9 | `max_magnitude` | `optional double` | Max Magnitude | — |
| Result | 10 | `min_magnitude` | `optional double` | Min Magnitude | — |
| Result | 11 | `standard_deviation_from_zero` | `optional double` | Standard Deviation From Zero | — |
| Result | 12 | `standard_deviation_from_mean` | `optional double` | Standard Deviation From Mean | — |
| Result | 13 | `avg_magnitude` | `optional double` | Avg Magnitude | — |
| Result | 14 | `avg_of_abs_magnitude` | `optional double` | Avg of Abs Magnitude | — |
| Result | 15 | `high_tolerance_value` | `optional double` | High Tolerance Value | — |
| Result | 16 | `low_tolerance_value` | `optional double` | Low Tolerance Value | — |
| Result | 17 | `rms_value` | `optional double` | RMS Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Vector Group Colorization Options (All) {/* #set-vector-group-colorization-options-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all)

`/briosa.VectorOperations/SetVectorGroupColorizationOptionsAll` · Operation ID: `vector_operations.set_vector_group_colorization_options_all`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `colorization_options` | `optional ColorizationOptions` | Colorization Options | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorGroupColorizationOptionsAll(SetVectorGroupColorizationOptionsAllRequest) returns (SetVectorGroupColorizationOptionsAllResult);

message SetVectorGroupColorizationOptionsAllRequest {
  optional ColorizationOptions colorization_options = 1;
}

message SetVectorGroupColorizationOptionsAllResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector Group Colorization Options (Selected) {/* #set-vector-group-colorization-options-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected)

`/briosa.VectorOperations/SetVectorGroupColorizationOptionsSelected` · Operation ID: `vector_operations.set_vector_group_colorization_options_selected`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_groups_to_be_set` | `repeated CollectionVectorGroupName` | Vector Groups to be Set | Required |
| Request | 2 | `colorization_options` | `optional ColorizationOptions` | Colorization Options | Red |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Sort Vectors {/* #sort-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#sort-vectors)

`/briosa.VectorOperations/SortVectors` · Operation ID: `vector_operations.sort_vectors`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_vectors` | `repeated VectorName` | Source Vectors | Required |
| Request | 2 | `sort_method` | `optional string` | Sort Method | Magnitude |
| Request | 3 | `coordinate_system` | `optional CoordinateSystemType` | Coordinate System | Cartesian |
| Request | 4 | `primary_sort_coordinate` | `optional string` | Primary Sort Coordinate | X (R) |
| Request | 5 | `secondary_sort_coordinate` | `optional string` | Secondary Sort Coordinate | Y (Theta) |
| Request | 6 | `tertiary_sort_coordinate` | `optional string` | Tertiary Sort Coordinate | Z (Phi) |
| Request | 7 | `primary_coordinate_granularity` | `optional double` | Primary Coordinate Granularity | 0.000000 |
| Request | 8 | `secondary_coordinate_granularity` | `optional double` | Secondary Coordinate Granularity | 0.000000 |
| Request | 9 | `tertiary_coordinate_granularity` | `optional double` | Tertiary Coordinate Granularity | 0.000000 |
| Request | 10 | `ascending` | `optional bool` | Ascending? | false |
| Result | 1 | `sorted_vectors` | `repeated VectorName` | Sorted Vectors | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
