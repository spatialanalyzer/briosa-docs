---
title: Construction Operations
description: Next gRPC contracts for selected Construction Operations MP commands.
toc_max_heading_level: 2
---

# Construction Operations

:::note[Next Contracts]

These entries define the protocol that the coordinated server and clients must
implement. They are not callable until released.

:::

All RPCs belong to protobuf package `briosa` and the existing service
`briosa.ConstructionOperations`. Every result reserves field `1000` for
`MpExecutionDetails execution`. No operation is automatically replayed after
an unknown execution outcome.

## Mirror Object(s)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Mirror Object(s)](/mp-command-catalog/commands/construction-operations#mirror-objects) |
| Service | `briosa.ConstructionOperations` |
| RPC | `MirrorObjects` |
| Operation ID | `construction_operations.mirror_objects` |
| Route | `/briosa.ConstructionOperations/MirrorObjects` |
| Validation | Licensed setter probe; fixture execution required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | `Object(s)` | Required |
| Request | 2 | `frame_name` | `CollectionObjectName` | `Frame Name` | Required |
| Request | 3 | `frame_plane_to_mirror_around` | `MirrorFramePlane` | `Frame Plane to Mirror Around` | Required |
| Request | 4 | `copy` | `bool` | `Copy? [FALSE = Move]` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
enum MirrorFramePlane {
  MIRROR_FRAME_PLANE_UNSPECIFIED = 0;
  MIRROR_FRAME_PLANE_XY = 1;
  MIRROR_FRAME_PLANE_XZ = 2;
  MIRROR_FRAME_PLANE_YZ = 3;
}

rpc MirrorObjects(MirrorObjectsRequest) returns (MirrorObjectsResult);

message MirrorObjectsRequest {
  repeated CollectionObjectName objects = 1;
  optional CollectionObjectName frame_name = 2;
  optional MirrorFramePlane frame_plane_to_mirror_around = 3;
  optional bool copy = 4;
}

message MirrorObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

Mirrors selected objects across one of a frame's three orthogonal planes. The
server rejects an empty object list and the unspecified plane value.

## Copy Object

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Copy Object](/mp-command-catalog/commands/construction-operations#copy-object) |
| Service | `briosa.ConstructionOperations` |
| RPC | `CopyObject` |
| Operation ID | `construction_operations.copy_object` |
| Route | `/briosa.ConstructionOperations/CopyObject` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_object` | `CollectionObjectName` | `Source Object` | Required |
| Request | 2 | `new_object_name` | `CollectionObjectName` | `New Object Name` | Required |
| Request | 3 | `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc CopyObject(CopyObjectRequest) returns (CopyObjectResult);

message CopyObjectRequest {
  optional CollectionObjectName source_object = 1;
  optional CollectionObjectName new_object_name = 2;
  optional bool overwrite_if_exists = 3;
}

message CopyObjectResult { MpExecutionDetails execution = 1000; }
```

Copies one collection object to a caller-supplied object name.

## Copy Objects to a collection

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Copy Objects to a collection](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection) |
| Service | `briosa.ConstructionOperations` |
| RPC | `CopyObjectsToACollection` |
| Operation ID | `construction_operations.copy_objects_to_a_collection` |
| Route | `/briosa.ConstructionOperations/CopyObjectsToACollection` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_objects` | `repeated CollectionObjectName` | `Source Objects` | Required |
| Request | 2 | `destination_collection_name` | `CollectionName` | `Destination Collection Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc CopyObjectsToACollection(CopyObjectsToACollectionRequest) returns (CopyObjectsToACollectionResult);

message CopyObjectsToACollectionRequest {
  repeated CollectionObjectName source_objects = 1;
  optional CollectionName destination_collection_name = 2;
}

message CopyObjectsToACollectionResult { MpExecutionDetails execution = 1000; }
```

Copies selected objects into a destination collection.

## Move Objects to a collection

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Move Objects to a collection](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection) |
| Service | `briosa.ConstructionOperations` |
| RPC | `MoveObjectsToACollection` |
| Operation ID | `construction_operations.move_objects_to_a_collection` |
| Route | `/briosa.ConstructionOperations/MoveObjectsToACollection` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_objects` | `repeated CollectionObjectName` | `Source Objects` | Required |
| Request | 2 | `destination_collection_name` | `CollectionName` | `Destination Collection Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc MoveObjectsToACollection(MoveObjectsToACollectionRequest) returns (MoveObjectsToACollectionResult);

message MoveObjectsToACollectionRequest {
  repeated CollectionObjectName source_objects = 1;
  optional CollectionName destination_collection_name = 2;
}

message MoveObjectsToACollectionResult { MpExecutionDetails execution = 1000; }
```

Moves selected objects into a destination collection.

## Copy Objects - Point to Point Delta

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Copy Objects - Point to Point Delta](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta) |
| Service | `briosa.ConstructionOperations` |
| RPC | `CopyObjectsPointToPointDelta` |
| Operation ID | `construction_operations.copy_objects_point_to_point_delta` |
| Route | `/briosa.ConstructionOperations/CopyObjectsPointToPointDelta` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_copy` | `repeated CollectionObjectName` | `Objects to Copy` | Required |
| Request | 2 | `first_delta_point` | `PointName` | `First Delta Point` | Required |
| Request | 3 | `second_delta_point` | `PointName` | `Second Delta Point` | Required |
| Request | 4 | `destination_collection_name` | `CollectionName` | `Destination Collection Name (Optional)` | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc CopyObjectsPointToPointDelta(CopyObjectsPointToPointDeltaRequest) returns (CopyObjectsPointToPointDeltaResult);

message CopyObjectsPointToPointDeltaRequest {
  repeated CollectionObjectName objects_to_copy = 1;
  optional PointName first_delta_point = 2;
  optional PointName second_delta_point = 3;
  optional CollectionName destination_collection_name = 4;
}

message CopyObjectsPointToPointDeltaResult { MpExecutionDetails execution = 1000; }
```

Copies selected objects by the delta between two points, optionally into a
different collection.

## Move Objects - Point to Point Delta

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Move Objects - Point to Point Delta](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta) |
| Service | `briosa.ConstructionOperations` |
| RPC | `MoveObjectsPointToPointDelta` |
| Operation ID | `construction_operations.move_objects_point_to_point_delta` |
| Route | `/briosa.ConstructionOperations/MoveObjectsPointToPointDelta` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_move` | `repeated CollectionObjectName` | `Objects to Move` | Required |
| Request | 2 | `first_delta_point` | `PointName` | `First Delta Point` | Required |
| Request | 3 | `second_delta_point` | `PointName` | `Second Delta Point` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc MoveObjectsPointToPointDelta(MoveObjectsPointToPointDeltaRequest) returns (MoveObjectsPointToPointDeltaResult);

message MoveObjectsPointToPointDeltaRequest {
  repeated CollectionObjectName objects_to_move = 1;
  optional PointName first_delta_point = 2;
  optional PointName second_delta_point = 3;
}

message MoveObjectsPointToPointDeltaResult { MpExecutionDetails execution = 1000; }
```

Moves selected objects by the delta between two points.

## Rename Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename Point](/mp-command-catalog/commands/construction-operations#rename-point) |
| Service | `briosa.ConstructionOperations` |
| RPC | `RenamePoint` |
| Operation ID | `construction_operations.rename_point` |
| Route | `/briosa.ConstructionOperations/RenamePoint` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_point_name` | `PointName` | `Original Point Name` | Required |
| Request | 2 | `new_point_name` | `PointName` | `New Point Name` | Required |
| Request | 3 | `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc RenamePoint(RenamePointRequest) returns (RenamePointResult);

message RenamePointRequest {
  optional PointName original_point_name = 1;
  optional PointName new_point_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenamePointResult { MpExecutionDetails execution = 1000; }
```

Renames one point.

## Rename Points with Name Pattern

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename Points with Name Pattern](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern) |
| Service | `briosa.ConstructionOperations` |
| RPC | `RenamePointsWithNamePattern` |
| Operation ID | `construction_operations.rename_points_with_name_pattern` |
| Route | `/briosa.ConstructionOperations/RenamePointsWithNamePattern` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | `Point Names` | Required |
| Request | 2 | `name_pattern` | `string` | `Name Pattern` | `NewName_%d` |
| Request | 3 | `start_value` | `int32` | `Start Value` | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc RenamePointsWithNamePattern(RenamePointsWithNamePatternRequest) returns (RenamePointsWithNamePatternResult);

message RenamePointsWithNamePatternRequest {
  repeated PointName point_names = 1;
  optional string name_pattern = 2;
  optional int32 start_value = 3;
}

message RenamePointsWithNamePatternResult { MpExecutionDetails execution = 1000; }
```

Renames points using a numbered `%d` name pattern.

## Rename Collection

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename Collection](/mp-command-catalog/commands/construction-operations#rename-collection) |
| Service | `briosa.ConstructionOperations` |
| RPC | `RenameCollection` |
| Operation ID | `construction_operations.rename_collection` |
| Route | `/briosa.ConstructionOperations/RenameCollection` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_collection_name` | `CollectionName` | `Original Collection Name` | Required |
| Request | 2 | `new_collection_name` | `CollectionName` | `New Collection Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc RenameCollection(RenameCollectionRequest) returns (RenameCollectionResult);

message RenameCollectionRequest {
  optional CollectionName original_collection_name = 1;
  optional CollectionName new_collection_name = 2;
}

message RenameCollectionResult { MpExecutionDetails execution = 1000; }
```

Renames one collection.

## Rename Object

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename Object](/mp-command-catalog/commands/construction-operations#rename-object) |
| Service | `briosa.ConstructionOperations` |
| RPC | `RenameObject` |
| Operation ID | `construction_operations.rename_object` |
| Route | `/briosa.ConstructionOperations/RenameObject` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_object_name` | `CollectionObjectName` | `Original Object Name` | Required |
| Request | 2 | `new_object_name` | `CollectionObjectName` | `New Object Name` | Required |
| Request | 3 | `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc RenameObject(RenameObjectRequest) returns (RenameObjectResult);

message RenameObjectRequest {
  optional CollectionObjectName original_object_name = 1;
  optional CollectionObjectName new_object_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenameObjectResult { MpExecutionDetails execution = 1000; }
```

Renames one collection object.

## Rename Item

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename Item](/mp-command-catalog/commands/construction-operations#rename-item) |
| Service | `briosa.ConstructionOperations` |
| RPC | `RenameItem` |
| Operation ID | `construction_operations.rename_item` |
| Route | `/briosa.ConstructionOperations/RenameItem` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_item_name` | `CollectionItemName` | `Original Item Name` | Required |
| Request | 2 | `new_item_name` | `CollectionItemName` | `New Item Name` | Required |
| Request | 3 | `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc RenameItem(RenameItemRequest) returns (RenameItemResult);

message RenameItemRequest {
  optional CollectionItemName original_item_name = 1;
  optional CollectionItemName new_item_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenameItemResult { MpExecutionDetails execution = 1000; }
```

Renames one collection item from SpatialAnalyzer's broader item domain.

## Delete Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Points](/mp-command-catalog/commands/construction-operations#delete-points) |
| Service | `briosa.ConstructionOperations` |
| RPC | `DeletePoints` |
| Operation ID | `construction_operations.delete_points` |
| Route | `/briosa.ConstructionOperations/DeletePoints` |
| Validation | At Risk - destructive fixture validation required |
| Automatic Replay | Prohibited; destructive command with no replay proof |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | `Point Names` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc DeletePoints(DeletePointsRequest) returns (DeletePointsResult);

message DeletePointsRequest { repeated PointName point_names = 1; }
message DeletePointsResult { MpExecutionDetails execution = 1000; }
```

Deletes the selected points.

## Delete Points WildCard Selection

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Points WildCard Selection](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection) |
| Service | `briosa.ConstructionOperations` |
| RPC | `DeletePointsWildcardSelection` |
| Operation ID | `construction_operations.delete_points_wildcard_selection` |
| Route | `/briosa.ConstructionOperations/DeletePointsWildcardSelection` |
| Validation | At Risk - destructive fixture validation required |
| Automatic Replay | Prohibited; destructive command with no replay proof |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `groups_to_delete_from` | `repeated CollectionObjectName` | `Groups to Delete From` | Required |
| Request | 2 | `wildcard_selection_names` | `PointName` | `WildCard Selection Names` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc DeletePointsWildcardSelection(DeletePointsWildcardSelectionRequest) returns (DeletePointsWildcardSelectionResult);

message DeletePointsWildcardSelectionRequest {
  repeated CollectionObjectName groups_to_delete_from = 1;
  optional PointName wildcard_selection_names = 2;
}

message DeletePointsWildcardSelectionResult { MpExecutionDetails execution = 1000; }
```

Deletes points matching a SpatialAnalyzer wildcard point-name selection within
the supplied groups.

## Construct Objects From Surface Faces - Runtime Select

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct Objects From Surface Faces - Runtime Select](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructObjectsFromSurfaceFacesRuntimeSelect` |
| Operation ID | `construction_operations.construct_objects_from_surface_faces_runtime_select` |
| Route | `/briosa.ConstructionOperations/ConstructObjectsFromSurfaceFacesRuntimeSelect` |
| Validation | At Risk - interactive fixture validation required |
| Automatic Replay | Prohibited; an interrupted interactive operation may have an unknown outcome |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_type` | `ConstructObjectType` | `Object Type` | Required |
| Request | 2 | `point_offset` | `double` | `Point Offset` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
enum ConstructObjectType {
  CONSTRUCT_OBJECT_TYPE_UNSPECIFIED = 0;
  CONSTRUCT_OBJECT_TYPE_ANY = 1;
  CONSTRUCT_OBJECT_TYPE_CIRCLES = 2;
  CONSTRUCT_OBJECT_TYPE_CONES = 3;
  CONSTRUCT_OBJECT_TYPE_CYLINDERS = 4;
  CONSTRUCT_OBJECT_TYPE_LINES = 5;
  CONSTRUCT_OBJECT_TYPE_PLANES = 6;
  CONSTRUCT_OBJECT_TYPE_SLOTS = 7;
  CONSTRUCT_OBJECT_TYPE_SPHERES = 8;
  CONSTRUCT_OBJECT_TYPE_CENTER_POINTS = 9;
  CONSTRUCT_OBJECT_TYPE_SURFACE_POINTS = 10;
  CONSTRUCT_OBJECT_TYPE_VERTEX_POINTS = 11;
}

rpc ConstructObjectsFromSurfaceFacesRuntimeSelect(
    ConstructObjectsFromSurfaceFacesRuntimeSelectRequest)
    returns (ConstructObjectsFromSurfaceFacesRuntimeSelectResult);

message ConstructObjectsFromSurfaceFacesRuntimeSelectRequest {
  optional ConstructObjectType object_type = 1;
  optional double point_offset = 2;
}

message ConstructObjectsFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

The operator selects surface faces in SpatialAnalyzer while the call is in
progress. A specific object type avoids the additional type-selection dialog;
`ANY` deliberately leaves that choice to the operator. The server rejects the
unspecified enum value. A client deadline or cancellation does not prove that
the SpatialAnalyzer interaction stopped.
