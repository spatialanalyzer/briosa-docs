---
title: Construction Operations / Vectors and Vector Groups
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

[SA 2026.1.0529.7](/api/grpc/construction-operations-vectors-and-vector-groups) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct a Vector Group - Group to Group Compare {/* #construct-a-vector-group---group-to-group-compare */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare)

`/briosa.ConstructionOperations/ConstructVectorGroupGroupToGroupCompare` · Operation ID: `construction_operations.construct_vector_group_group_to_group_compare`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 2 | `group_a` | `optional CollectionObjectName` | Group A | Required |
| Request | 3 | `group_b` | `optional CollectionObjectName` | Group B | Required |
| Request | 4 | `rms_deviation_tolerance` | `optional double` | RMS Deviation Tolerance (0.0 for none) | 0.000000 |
| Request | 5 | `max_absolute_deviation_tolerance` | `optional double` | Max Absolute Deviation Tolerance (0.0 for none) | 0.000000 |
| Request | 6 | `average_deviation_tolerance` | `optional double` | Average Deviation Tolerance (0.0 for none) | 0.000000 |
| Result | 1 | `vector_count` | `int32` | Vector Count | — |
| Result | 2 | `rms_deviation` | `double` | RMS Deviation | — |
| Result | 3 | `max_absolute_deviation` | `double` | Max Absolute Deviation | — |
| Result | 4 | `average_deviation` | `double` | Average Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructVectorGroupGroupToGroupCompare(ConstructVectorGroupGroupToGroupCompareRequest) returns (ConstructVectorGroupGroupToGroupCompareResult);

message ConstructVectorGroupGroupToGroupCompareRequest {
  optional CollectionObjectName vector_group_name = 1;
  optional CollectionObjectName group_a = 2;
  optional CollectionObjectName group_b = 3;
  optional double rms_deviation_tolerance = 4;
  optional double max_absolute_deviation_tolerance = 5;
  optional double average_deviation_tolerance = 6;
}

message ConstructVectorGroupGroupToGroupCompareResult {
  int32 vector_count = 1;
  double rms_deviation = 2;
  double max_absolute_deviation = 3;
  double average_deviation = 4;
  MpExecutionDetails execution = 1000;
}
```

## Construct a Vector Group - Area Profile Check {/* #construct-a-vector-group---area-profile-check */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check)

`/briosa.ConstructionOperations/ConstructVectorGroupAreaProfileCheck` · Operation ID: `construction_operations.construct_vector_group_area_profile_check`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_vectors` | `repeated VectorName` | Reference Vectors | Required |
| Request | 2 | `vector_groups_to_check` | `repeated CollectionVectorGroupName` | Vector Groups to Check | Required |
| Request | 3 | `area_radius` | `optional double` | Area Radius | 0.000000 |
| Request | 4 | `area_tolerance` | `optional double` | Area Tolerance | 0.000000 |
| Request | 5 | `resultant_vector_group_name` | `optional CollectionVectorGroupName` | Resultant Vector Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructVectorGroupAreaProfileCheck(ConstructVectorGroupAreaProfileCheckRequest) returns (ConstructVectorGroupAreaProfileCheckResult);

message ConstructVectorGroupAreaProfileCheckRequest {
  repeated VectorName reference_vectors = 1;
  repeated CollectionVectorGroupName vector_groups_to_check = 2;
  optional double area_radius = 3;
  optional double area_tolerance = 4;
  optional CollectionVectorGroupName resultant_vector_group_name = 5;
}

message ConstructVectorGroupAreaProfileCheckResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct a Vector Group From Vector Name Ref List {/* #construct-a-vector-group-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list)

`/briosa.ConstructionOperations/ConstructVectorGroupFromVectorNameRefList` · Operation ID: `construction_operations.construct_vector_group_from_vector_name_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_name_list` | `repeated VectorName` | Vector Name List | Required |
| Request | 2 | `resultant_vector_group_name` | `optional CollectionVectorGroupName` | Resultant Vector Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructVectorGroupFromVectorNameRefList(ConstructVectorGroupFromVectorNameRefListRequest) returns (ConstructVectorGroupFromVectorNameRefListResult);

message ConstructVectorGroupFromVectorNameRefListRequest {
  repeated VectorName vector_name_list = 1;
  optional CollectionVectorGroupName resultant_vector_group_name = 2;
}

message ConstructVectorGroupFromVectorNameRefListResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct a Vector in Working Coordinates(Begin/Delta) {/* #construct-a-vector-in-working-coordinatesbegindelta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta)

`/briosa.ConstructionOperations/ConstructVectorInWorkingCoordinatesBeginDelta` · Operation ID: `construction_operations.construct_vector_in_working_coordinates_begin_delta`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 2 | `new_vector_name` | `optional string` | New Vector Name | Empty |
| Request | 3 | `begin_in_working_coordinates` | `optional Vector` | 'Begin' in Working Coordinates | Required |
| Request | 4 | `delta_in_working_coordinates` | `optional Vector` | 'Delta' in Working Coordinates | Required |
| Request | 5 | `is_magnitude_negative` | `optional bool` | Is Magnitude Negative | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructVectorInWorkingCoordinatesBeginDelta(ConstructVectorInWorkingCoordinatesBeginDeltaRequest) returns (ConstructVectorInWorkingCoordinatesBeginDeltaResult);

message ConstructVectorInWorkingCoordinatesBeginDeltaRequest {
  optional CollectionObjectName vector_group_name = 1;
  optional string new_vector_name = 2;
  optional Vector begin_in_working_coordinates = 3;
  optional Vector delta_in_working_coordinates = 4;
  optional bool is_magnitude_negative = 5;
}

message ConstructVectorInWorkingCoordinatesBeginDeltaResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct a Vector in Working Coordinates(Begin/Direction/Mag.) {/* #construct-a-vector-in-working-coordinatesbegindirectionmag */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag)

`/briosa.ConstructionOperations/ConstructVectorInWorkingCoordinatesBeginDirectionMagnitude` · Operation ID: `construction_operations.construct_vector_in_working_coordinates_begin_direction_magnitude`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 2 | `new_vector_name` | `optional string` | New Vector Name | Empty |
| Request | 3 | `begin_in_working_coordinates` | `optional Vector` | 'Begin' in Working Coordinates | Required |
| Request | 4 | `direction_in_working_coordinates` | `optional Vector` | 'Direction' in Working Coordinates | Required |
| Request | 5 | `signed_magnitude` | `optional double` | Signed Magnitude | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructVectorInWorkingCoordinatesBeginDirectionMagnitude(ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeRequest) returns (ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeResult);

message ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeRequest {
  optional CollectionObjectName vector_group_name = 1;
  optional string new_vector_name = 2;
  optional Vector begin_in_working_coordinates = 3;
  optional Vector direction_in_working_coordinates = 4;
  optional double signed_magnitude = 5;
}

message ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct a Vector Group From a Relationship {/* #construct-a-vector-group-from-a-relationship */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship)

`/briosa.ConstructionOperations/ConstructVectorGroupFromRelationship` · Operation ID: `construction_operations.construct_vector_group_from_relationship`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `vector_group_name` | `optional CollectionVectorGroupName` | Vector Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructVectorGroupFromRelationship(ConstructVectorGroupFromRelationshipRequest) returns (ConstructVectorGroupFromRelationshipResult);

message ConstructVectorGroupFromRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionVectorGroupName vector_group_name = 2;
}

message ConstructVectorGroupFromRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

## Make a Vector Name Ref List From a Vector Group {/* #make-a-vector-name-ref-list-from-a-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group)

`/briosa.ConstructionOperations/MakeVectorNameRefListFromVectorGroup` · Operation ID: `construction_operations.make_vector_name_ref_list_from_vector_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Result | 1 | `resultant_vector_name_list` | `repeated VectorName` | Resultant Vector Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeVectorNameRefListFromVectorGroup(MakeVectorNameRefListFromVectorGroupRequest) returns (MakeVectorNameRefListFromVectorGroupResult);

message MakeVectorNameRefListFromVectorGroupRequest {
  optional CollectionObjectName vector_group_name = 1;
}

message MakeVectorNameRefListFromVectorGroupResult {
  repeated VectorName resultant_vector_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Vector Name Ref List - Runtime Select {/* #make-a-vector-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select)

`/briosa.ConstructionOperations/MakeVectorNameRefListRuntimeSelect` · Operation ID: `construction_operations.make_vector_name_ref_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt |  Select Vectors (ENTER when done)  |
| Result | 1 | `resultant_vector_name_list` | `repeated VectorName` | Resultant Vector Name List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeVectorNameRefListRuntimeSelect(MakeVectorNameRefListRuntimeSelectRequest) returns (MakeVectorNameRefListRuntimeSelectResult);

message MakeVectorNameRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeVectorNameRefListRuntimeSelectResult {
  repeated VectorName resultant_vector_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Collection Vector Group Name Ref List - Runtime Select {/* #make-a-collection-vector-group-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select)

`/briosa.ConstructionOperations/MakeCollectionVectorGroupNameRefListRuntimeSelect` · Operation ID: `construction_operations.make_collection_vector_group_name_ref_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `user_prompt` | `optional string` | User Prompt | Empty |
| Result | 1 | `resultant_collection_vector_group_name_reference_list` | `repeated CollectionVectorGroupName` | Resultant Collection Vector Group Name Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCollectionVectorGroupNameRefListRuntimeSelect(MakeCollectionVectorGroupNameRefListRuntimeSelectRequest) returns (MakeCollectionVectorGroupNameRefListRuntimeSelectResult);

message MakeCollectionVectorGroupNameRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeCollectionVectorGroupNameRefListRuntimeSelectResult {
  repeated CollectionVectorGroupName resultant_collection_vector_group_name_reference_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make Vector Names Unique in Vector Group {/* #make-vector-names-unique-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group)

`/briosa.ConstructionOperations/MakeVectorNamesUniqueInVectorGroup` · Operation ID: `construction_operations.make_vector_names_unique_in_vector_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeVectorNamesUniqueInVectorGroup(MakeVectorNamesUniqueInVectorGroupRequest) returns (MakeVectorNamesUniqueInVectorGroupResult);

message MakeVectorNamesUniqueInVectorGroupRequest {
  optional CollectionObjectName vector_group_name = 1;
}

message MakeVectorNamesUniqueInVectorGroupResult {
  MpExecutionDetails execution = 1000;
}
```

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorGroupGroupToGroupCompare {/* #constructvectorgroupgrouptogroupcompare */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorGroupAreaProfileCheck {/* #constructvectorgroupareaprofilecheck */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorGroupFromVectorNameRefList {/* #constructvectorgroupfromvectornamereflist */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorInWorkingCoordinatesBeginDelta {/* #constructvectorinworkingcoordinatesbegindelta */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorInWorkingCoordinatesBeginDirectionMagnitude {/* #constructvectorinworkingcoordinatesbegindirectionmagnitude */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorGroupFromRelationship {/* #constructvectorgroupfromrelationship */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeVectorNameRefListFromVectorGroup {/* #makevectornamereflistfromvectorgroup */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeVectorNameRefListRuntimeSelect {/* #makevectornamereflistruntimeselect */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeCollectionVectorGroupNameRefListRuntimeSelect {/* #makecollectionvectorgroupnamereflistruntimeselect */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeVectorNamesUniqueInVectorGroup {/* #makevectornamesuniqueinvectorgroup */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2024.1.0508.5)
