---
title: Construction Operations / Other MP Types
description: Released gRPC contracts for selected Other MP Types commands.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay. Runtime
selection calls may continue inside SpatialAnalyzer after their RPC is
cancelled or times out.

## Shared Types

`SystemString` uses the exact target's reviewed choices:

```proto
enum SystemString {
  SYSTEM_STRING_UNSPECIFIED = 0;
  SYSTEM_STRING_SA_VERSION = 1;
  SYSTEM_STRING_XIT_FILENAME = 2;
  SYSTEM_STRING_MP_FILENAME = 3;
  SYSTEM_STRING_MP_FILENAME_FULL_PATH = 4;
  SYSTEM_STRING_DATE_AND_TIME = 5;
  SYSTEM_STRING_DATE = 6;
  SYSTEM_STRING_DATE_SHORT = 7;
  SYSTEM_STRING_TIME = 8;
  SYSTEM_STRING_KEY_SERIAL_NUMBER = 9;
  SYSTEM_STRING_COMPANY_NAME = 10;
  SYSTEM_STRING_USER_NAME = 11;
  SYSTEM_STRING_LICENSE_USER_NAME = 12;
  SYSTEM_STRING_WINDOWS_USER_NAME = 13;
  SYSTEM_STRING_COMPUTER_NAME = 14;
}
```

`ItemType` is the shared exact-target enum spanning `Any` plus the 41 named SA
item categories from `Alignment` through `Vector Group`. `ObjectType`, `Color`,
`Transform`, `WorldTransform`, `Vector`, and the structured identity messages
are shared Briosa protocol types.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Make a System String | `MakeSystemString` | `construction_operations.make_system_string` |
| Make a Collection Name - Runtime Select | `MakeCollectionNameRuntimeSelect` | `construction_operations.make_collection_name_runtime_select` |
| Make a Collection Item Name Reference List - WildCard Selection | `MakeCollectionItemNameRefListWildcardSelection` | `construction_operations.make_collection_item_name_ref_list_wildcard_selection` |
| Make a Collection Object Name - Runtime Select | `MakeCollectionObjectNameRuntimeSelect` | `construction_operations.make_collection_object_name_runtime_select` |
| Make a Collection Object Name - Ensure Unique | `MakeCollectionObjectNameEnsureUnique` | `construction_operations.make_collection_object_name_ensure_unique` |
| Make a Collection Object Name Reference List- Runtime Select | `MakeCollectionObjectNameRefListRuntimeSelect` | `construction_operations.make_collection_object_name_ref_list_runtime_select` |
| Make a Collection Object Name Reference List- WildCard Selection | `MakeCollectionObjectNameRefListWildcardSelection` | `construction_operations.make_collection_object_name_ref_list_wildcard_selection` |
| Make a Collection Object Name Ref List - By Type | `MakeCollectionObjectNameRefListByType` | `construction_operations.make_collection_object_name_ref_list_by_type` |
| Make a Collection Object Name Ref List - By Type and Color | `MakeCollectionObjectNameRefListByTypeAndColor` | `construction_operations.make_collection_object_name_ref_list_by_type_and_color` |
| Make a Collection Object Name Ref List from all Groups in a Collection | `MakeCollectionObjectNameRefListFromAllGroupsInCollection` | `construction_operations.make_collection_object_name_ref_list_from_all_groups_in_collection` |
| Get Collection Instrument Ref List Variable | `GetCollectionInstrumentRefListVariable` | `construction_operations.get_collection_instrument_ref_list_variable` |
| Set Collection Instrument Ref List Variable | `SetCollectionInstrumentRefListVariable` | `construction_operations.set_collection_instrument_ref_list_variable` |
| Add Collection Instruments to a Ref List - WildCard Selection | `AddCollectionInstrumentsToRefListWildcardSelection` | `construction_operations.add_collection_instruments_to_ref_list_wildcard_selection` |
| Make a Collection Instrument Reference List- Runtime Select | `MakeCollectionInstrumentRefListRuntimeSelect` | `construction_operations.make_collection_instrument_ref_list_runtime_select` |
| Make a Relationship Reference List- WildCard Selection | `MakeRelationshipRefListWildcardSelection` | `construction_operations.make_relationship_ref_list_wildcard_selection` |
| Make a Relationship Reference List- Runtime Select | `MakeRelationshipRefListRuntimeSelect` | `construction_operations.make_relationship_ref_list_runtime_select` |
| Make an Event Reference List- WildCard Selection | `MakeEventRefListWildcardSelection` | `construction_operations.make_event_ref_list_wildcard_selection` |
| Make a Collection Instrument ID - Runtime Select | `MakeCollectionInstrumentIdRuntimeSelect` | `construction_operations.make_collection_instrument_id_runtime_select` |
| Make a Report Ref List from a Collection | `MakeReportRefListFromCollection` | `construction_operations.make_report_ref_list_from_collection` |
| Make a Report Ref List - Runtime Select | `MakeReportRefListRuntimeSelect` | `construction_operations.make_report_ref_list_runtime_select` |
| Make a Picture Name Ref List - Runtime Select | `MakePictureNameRefListRuntimeSelect` | `construction_operations.make_picture_name_ref_list_runtime_select` |
| Make a Transform from Doubles (Fixed XYZ) | `MakeTransformFromDoublesFixedXyz` | `construction_operations.make_transform_from_doubles_fixed_xyz` |
| Make a Transform from Doubles (Euler Parameters) | `MakeTransformFromDoublesEulerParameters` | `construction_operations.make_transform_from_doubles_euler_parameters` |
| Get Working Transform of Object (Fixed XYZ) | `GetWorkingTransformOfObjectFixedXyz` | `construction_operations.get_working_transform_of_object_fixed_xyz` |
| Invert Transform | `InvertTransform` | `construction_operations.invert_transform` |
| Decompose Transform into Doubles (Fixed XYZ) | `DecomposeTransformIntoDoublesFixedXyz` | `construction_operations.decompose_transform_into_doubles_fixed_xyz` |
| Decompose Transform into Vectors (Fixed XYZ) | `DecomposeTransformIntoVectorsFixedXyz` | `construction_operations.decompose_transform_into_vectors_fixed_xyz` |
| Decompose Transform into Vectors (Origin and Axes) | `DecomposeTransformIntoVectorsOriginAndAxes` | `construction_operations.decompose_transform_into_vectors_origin_and_axes` |
| Decompose World Transform Operator into Doubles (Fixed XYZ in World) | `DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorld` | `construction_operations.decompose_world_transform_operator_into_doubles_fixed_xyz_in_world` |
| Decompose Transform into Doubles (Euler XYZ) | `DecomposeTransformIntoDoublesEulerXyz` | `construction_operations.decompose_transform_into_doubles_euler_xyz` |
| Decompose Transform into Doubles (Euler ZYX) | `DecomposeTransformIntoDoublesEulerZyx` | `construction_operations.decompose_transform_into_doubles_euler_zyx` |
| Decompose Transform into Doubles (Euler ZYZ) | `DecomposeTransformIntoDoublesEulerZyz` | `construction_operations.decompose_transform_into_doubles_euler_zyz` |
| Decompose Transform into Doubles (Euler ZXZ) | `DecomposeTransformIntoDoublesEulerZxz` | `construction_operations.decompose_transform_into_doubles_euler_zxz` |
| Decompose World Transform Operator into Vectors (Fixed XYZ in World) | `DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorld` | `construction_operations.decompose_world_transform_operator_into_vectors_fixed_xyz_in_world` |

Each route is `/briosa.ConstructionOperations/<RPC>`.

## Make a System String

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

`string_content` is required. `format_string` is optional and applies to the
date/time choices. The server never logs `resultant_string`.

## Make a Collection Name - Runtime Select

```proto
rpc MakeCollectionNameRuntimeSelect(MakeCollectionNameRuntimeSelectRequest) returns (MakeCollectionNameRuntimeSelectResult);
message MakeCollectionNameRuntimeSelectRequest { optional string user_prompt = 1; }
message MakeCollectionNameRuntimeSelectResult {
  optional CollectionName resultant_collection_name = 1;
  MpExecutionDetails execution = 1000;
}
```

Omitted `user_prompt` maps to the MP's empty prompt.

## Make a Collection Item Name Reference List - WildCard Selection

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

Omitted criteria map to `*`; omitted `item_type` maps to `Any`.

## Make a Collection Object Name - Runtime Select

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

The prompt defaults to empty and the object type defaults to `Any`.

## Make a Collection Object Name - Ensure Unique

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

The name is required. `use_number_suffix` defaults to false. The result returns
the MP's mutated first argument; its getter remains an at-risk validation item.

## Make a Collection Object Name Reference List- Runtime Select

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

The prompt defaults to empty and the type defaults to `Any`.

## Make a Collection Object Name Reference List- WildCard Selection

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

Both criteria default to `*`; the type defaults to `Any`.

## Make a Collection Object Name Ref List - By Type

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

`collection` is required; `object_type` defaults to `Any`.

## Make a Collection Object Name Ref List - By Type and Color

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

`collection` is required. Omitted type maps to `Any`; omitted color maps to
RGB `(255, 0, 0)`.

## Make a Collection Object Name Ref List from all Groups in a Collection

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

`collection_name` is required.

## Get Collection Instrument Ref List Variable

```proto
rpc GetCollectionInstrumentRefListVariable(GetCollectionInstrumentRefListVariableRequest) returns (GetCollectionInstrumentRefListVariableResult);
message GetCollectionInstrumentRefListVariableRequest { optional string name = 1; }
message GetCollectionInstrumentRefListVariableResult {
  repeated CollectionInstrumentId value = 1;
  MpExecutionDetails execution = 1000;
}
```

`name` is required. Briosa reads MP state directly and does not cache it.

## Set Collection Instrument Ref List Variable

```proto
rpc SetCollectionInstrumentRefListVariable(SetCollectionInstrumentRefListVariableRequest) returns (SetCollectionInstrumentRefListVariableResult);
message SetCollectionInstrumentRefListVariableRequest {
  optional string name = 1;
  repeated CollectionInstrumentId value = 2;
}
message SetCollectionInstrumentRefListVariableResult { MpExecutionDetails execution = 1000; }
```

`name` and `value` are required; an empty list is a valid explicit value.

## Add Collection Instruments to a Ref List - WildCard Selection

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

The starting list is required and may be empty. Both criteria default to `*`.
The result retrieves the MP's mutated first argument.

## Make a Collection Instrument Reference List- Runtime Select

```proto
rpc MakeCollectionInstrumentRefListRuntimeSelect(MakeCollectionInstrumentRefListRuntimeSelectRequest) returns (MakeCollectionInstrumentRefListRuntimeSelectResult);
message MakeCollectionInstrumentRefListRuntimeSelectRequest { optional string user_prompt = 1; }
message MakeCollectionInstrumentRefListRuntimeSelectResult {
  repeated CollectionInstrumentId resultant_collection_instrument_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The prompt defaults to empty.

## Make a Relationship Reference List- WildCard Selection

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

Both criteria default to `*`. The unavailable MP `Relationship Type Filter`
is intentionally absent from the request.

## Make a Relationship Reference List- Runtime Select

```proto
rpc MakeRelationshipRefListRuntimeSelect(MakeRelationshipRefListRuntimeSelectRequest) returns (MakeRelationshipRefListRuntimeSelectResult);
message MakeRelationshipRefListRuntimeSelectRequest { optional string user_prompt = 1; }
message MakeRelationshipRefListRuntimeSelectResult {
  repeated CollectionItemName resultant_relationship_ref_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The prompt defaults to empty. The unavailable relationship-type filter is not
exposed.

## Make an Event Reference List- WildCard Selection

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

Both criteria default to `*`.

## Make a Collection Instrument ID - Runtime Select

```proto
rpc MakeCollectionInstrumentIdRuntimeSelect(MakeCollectionInstrumentIdRuntimeSelectRequest) returns (MakeCollectionInstrumentIdRuntimeSelectResult);
message MakeCollectionInstrumentIdRuntimeSelectRequest { optional string user_prompt = 1; }
message MakeCollectionInstrumentIdRuntimeSelectResult {
  optional CollectionInstrumentId instrument_id = 1;
  MpExecutionDetails execution = 1000;
}
```

The prompt defaults to empty.

## Make a Report Ref List from a Collection

```proto
rpc MakeReportRefListFromCollection(MakeReportRefListFromCollectionRequest) returns (MakeReportRefListFromCollectionResult);
message MakeReportRefListFromCollectionRequest { optional CollectionName collection_name = 1; }
message MakeReportRefListFromCollectionResult {
  repeated CollectionItemName report_list = 1;
  MpExecutionDetails execution = 1000;
}
```

`collection_name` is required.

## Make a Report Ref List - Runtime Select

```proto
rpc MakeReportRefListRuntimeSelect(MakeReportRefListRuntimeSelectRequest) returns (MakeReportRefListRuntimeSelectResult);
message MakeReportRefListRuntimeSelectRequest { optional string user_prompt = 1; }
message MakeReportRefListRuntimeSelectResult {
  repeated CollectionItemName report_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The prompt defaults to empty.

## Make a Picture Name Ref List - Runtime Select

```proto
rpc MakePictureNameRefListRuntimeSelect(MakePictureNameRefListRuntimeSelectRequest) returns (MakePictureNameRefListRuntimeSelectResult);
message MakePictureNameRefListRuntimeSelectRequest { optional string user_prompt = 1; }
message MakePictureNameRefListRuntimeSelectResult {
  repeated CollectionItemName picture_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The prompt defaults to empty.

## Make a Transform from Doubles (Fixed XYZ)

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

Every omitted component maps to the MP default of zero.

## Make a Transform from Doubles (Euler Parameters)

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

Every omitted component maps to zero, including all four Euler parameters.

## Get Working Transform of Object (Fixed XYZ)

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

`object_name` is required and retains the MP's `Any` object domain.

## Invert Transform

```proto
rpc InvertTransform(InvertTransformRequest) returns (InvertTransformResult);
message InvertTransformRequest { optional Transform transform = 1; }
message InvertTransformResult {
  optional Transform inverse_transform = 1;
  MpExecutionDetails execution = 1000;
}
```

`transform` is required.

## Decompose Transform into Doubles (Fixed XYZ)

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

Fields 4 through 6 map to `Rx (Roll)`, `Ry (Pitch)`, and `Rz (Yaw)`.

## Decompose Transform into Vectors (Fixed XYZ)

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

`input_transform` is required.

## Decompose Transform into Vectors (Origin and Axes)

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

`transform` is required.

## Decompose World Transform Operator into Doubles (Fixed XYZ in World)

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

The world transform is required. Fields 4 through 6 map to the MP roll, pitch,
and yaw outputs.

## Decompose Transform into Doubles (Euler XYZ)

```proto
rpc DecomposeTransformIntoDoublesEulerXyz(DecomposeTransformIntoDoublesEulerXyzRequest) returns (DecomposeTransformIntoDoublesEulerXyzResult);
message DecomposeTransformIntoDoublesEulerXyzRequest { optional Transform input_transform = 1; }
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

`rx`, `ry`, and `rz` preserve the MP output order.

## Decompose Transform into Doubles (Euler ZYX)

```proto
rpc DecomposeTransformIntoDoublesEulerZyx(DecomposeTransformIntoDoublesEulerZyxRequest) returns (DecomposeTransformIntoDoublesEulerZyxResult);
message DecomposeTransformIntoDoublesEulerZyxRequest { optional Transform input_transform = 1; }
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

The angle fields preserve the exact `Rz`, `Ry`, `Rx` MP order.

## Decompose Transform into Doubles (Euler ZYZ)

```proto
rpc DecomposeTransformIntoDoublesEulerZyz(DecomposeTransformIntoDoublesEulerZyzRequest) returns (DecomposeTransformIntoDoublesEulerZyzResult);
message DecomposeTransformIntoDoublesEulerZyzRequest { optional Transform input_transform = 1; }
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

`first_rz` and `second_rz` disambiguate the MP's repeated `Euler Rz` labels.

## Decompose Transform into Doubles (Euler ZXZ)

```proto
rpc DecomposeTransformIntoDoublesEulerZxz(DecomposeTransformIntoDoublesEulerZxzRequest) returns (DecomposeTransformIntoDoublesEulerZxzResult);
message DecomposeTransformIntoDoublesEulerZxzRequest { optional Transform input_transform = 1; }
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

The two `rz` fields preserve the repeated MP outputs without a name collision.

## Decompose World Transform Operator into Vectors (Fixed XYZ in World)

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

The world transform is required. The field names retain the exact MP output
labels even though the command title says “in World.”

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types) ·
[.NET](/api/dotnet/0.1.0/construction-operations-other-mp-types) ·
[Python](/api/python/0.1.0/construction-operations-other-mp-types) ·
[JavaScript/TypeScript](/api/javascript/0.1.0/construction-operations-other-mp-types)
