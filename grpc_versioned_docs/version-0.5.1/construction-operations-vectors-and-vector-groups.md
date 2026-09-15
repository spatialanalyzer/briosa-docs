---
title: Construction Operations / Vectors and Vector Groups
description: Released gRPC contracts for selected vector and Vector Group construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Construct a Vector Group - Group to Group Compare | `ConstructVectorGroupGroupToGroupCompare` | `construction_operations.construct_vector_group_group_to_group_compare` |
| Construct a Vector Group - Area Profile Check | `ConstructVectorGroupAreaProfileCheck` | `construction_operations.construct_vector_group_area_profile_check` |
| Construct a Vector Group From Vector Name Ref List | `ConstructVectorGroupFromVectorNameRefList` | `construction_operations.construct_vector_group_from_vector_name_ref_list` |
| Construct a Vector in Working Coordinates(Begin/Delta) | `ConstructVectorInWorkingCoordinatesBeginDelta` | `construction_operations.construct_vector_in_working_coordinates_begin_delta` |
| Construct a Vector in Working Coordinates(Begin/Direction/Mag.) | `ConstructVectorInWorkingCoordinatesBeginDirectionMagnitude` | `construction_operations.construct_vector_in_working_coordinates_begin_direction_magnitude` |
| Construct a Vector Group From a Relationship | `ConstructVectorGroupFromRelationship` | `construction_operations.construct_vector_group_from_relationship` |
| Make a Vector Name Ref List From a Vector Group | `MakeVectorNameRefListFromVectorGroup` | `construction_operations.make_vector_name_ref_list_from_vector_group` |
| Make a Vector Name Ref List - Runtime Select | `MakeVectorNameRefListRuntimeSelect` | `construction_operations.make_vector_name_ref_list_runtime_select` |
| Make a Collection Vector Group Name Ref List - Runtime Select | `MakeCollectionVectorGroupNameRefListRuntimeSelect` | `construction_operations.make_collection_vector_group_name_ref_list_runtime_select` |
| Make Vector Names Unique in Vector Group | `MakeVectorNamesUniqueInVectorGroup` | `construction_operations.make_vector_names_unique_in_vector_group` |

Each route is `/briosa.ConstructionOperations/<RPC>`.

## ConstructVectorGroupGroupToGroupCompare

```proto
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

The Vector Group result identity and both Point Groups are required. All three
tolerances default to `0.0`, meaning no tolerance for the corresponding check.

## ConstructVectorGroupAreaProfileCheck

```proto
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

Both lists and the resulting Vector Group identity are required. `area_radius`
and `area_tolerance` preserve the MP default of `0.0`.

## ConstructVectorGroupFromVectorNameRefList

```proto
message ConstructVectorGroupFromVectorNameRefListRequest {
  repeated VectorName vector_name_list = 1;
  optional CollectionVectorGroupName resultant_vector_group_name = 2;
}

message ConstructVectorGroupFromVectorNameRefListResult {
  MpExecutionDetails execution = 1000;
}
```

The list and resulting Vector Group identity are required.

## ConstructVectorInWorkingCoordinatesBeginDelta

```proto
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

The group, name, begin value, and delta value are required.
`is_magnitude_negative` defaults to `false`.

## ConstructVectorInWorkingCoordinatesBeginDirectionMagnitude

```proto
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

The group, name, begin value, and direction are required. `signed_magnitude`
defaults to `0.0`, matching the MP Editor.

## ConstructVectorGroupFromRelationship

```proto
message ConstructVectorGroupFromRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionVectorGroupName vector_group_name = 2;
}

message ConstructVectorGroupFromRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

Both structured identities are required.

## MakeVectorNameRefListFromVectorGroup

```proto
message MakeVectorNameRefListFromVectorGroupRequest {
  optional CollectionObjectName vector_group_name = 1;
}

message MakeVectorNameRefListFromVectorGroupResult {
  repeated VectorName resultant_vector_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The Vector Group identity is required.

## MakeVectorNameRefListRuntimeSelect

```proto
message MakeVectorNameRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeVectorNameRefListRuntimeSelectResult {
  repeated VectorName resultant_vector_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

`user_prompt` defaults to the exact MP text
` Select Vectors (ENTER when done) `. This RPC is operator-interactive;
deadline or cancellation does not prove that the SA interaction stopped.

## MakeCollectionVectorGroupNameRefListRuntimeSelect

```proto
message MakeCollectionVectorGroupNameRefListRuntimeSelectRequest {
  optional string user_prompt = 1;
}

message MakeCollectionVectorGroupNameRefListRuntimeSelectResult {
  repeated CollectionVectorGroupName resultant_collection_vector_group_name_reference_list = 1;
  MpExecutionDetails execution = 1000;
}
```

`user_prompt` defaults to an empty string. This RPC is operator-interactive;
deadline or cancellation does not prove that the SA interaction stopped.

## MakeVectorNamesUniqueInVectorGroup

```proto
message MakeVectorNamesUniqueInVectorGroupRequest {
  optional CollectionObjectName vector_group_name = 1;
}

message MakeVectorNamesUniqueInVectorGroupResult {
  MpExecutionDetails execution = 1000;
}
```

The Vector Group identity is required. SpatialAnalyzer owns the mutation and
resulting names.

`Construct Vectors WildCard Selection` has no RPC because licensed validation
could not establish a working SDK binding. The three portable vector-value MP
helpers have no RPC because callers can perform those operations directly on
the shared `Vector` value.

[Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups) · [.NET](/api/dotnet/construction-operations-vectors-and-vector-groups) · [Python](/api/python/construction-operations-vectors-and-vector-groups) · [JavaScript and TypeScript](/api/javascript/construction-operations-vectors-and-vector-groups)
