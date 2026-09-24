---
title: Construction Operations
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations

[SA 2026.1.0529.7](/api/grpc/construction-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Mirror Object(s) {/* #mirror-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#mirror-objects)

`/briosa.ConstructionOperations/MirrorObjects` · Operation ID: `construction_operations.mirror_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | Object(s) | Required |
| Request | 2 | `frame_name` | `optional CollectionObjectName` | Frame Name | Required |
| Request | 3 | `frame_plane_to_mirror_around` | `optional MirrorFramePlane` | Frame Plane to Mirror Around | Required |
| Request | 4 | `copy` | `optional bool` | Copy? [FALSE = Move] | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
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

## Copy Object {/* #copy-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-object)

`/briosa.ConstructionOperations/CopyObject` · Operation ID: `construction_operations.copy_object`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_object` | `optional CollectionObjectName` | Source Object | Required |
| Request | 2 | `new_object_name` | `optional CollectionObjectName` | New Object Name | Required |
| Request | 3 | `overwrite_if_exists` | `optional bool` | Overwrite if exists? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CopyObject(CopyObjectRequest) returns (CopyObjectResult);

message CopyObjectRequest {
  optional CollectionObjectName source_object = 1;
  optional CollectionObjectName new_object_name = 2;
  optional bool overwrite_if_exists = 3;
}

message CopyObjectResult {
  MpExecutionDetails execution = 1000;
}
```

## Copy Objects to a collection {/* #copy-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection)

`/briosa.ConstructionOperations/CopyObjectsToACollection` · Operation ID: `construction_operations.copy_objects_to_a_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_objects` | `repeated CollectionObjectName` | Source Objects | Required |
| Request | 2 | `destination_collection_name` | `optional CollectionName` | Destination Collection Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CopyObjectsToACollection(CopyObjectsToACollectionRequest) returns (CopyObjectsToACollectionResult);

message CopyObjectsToACollectionRequest {
  repeated CollectionObjectName source_objects = 1;
  optional CollectionName destination_collection_name = 2;
}

message CopyObjectsToACollectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Move Objects to a collection {/* #move-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection)

`/briosa.ConstructionOperations/MoveObjectsToACollection` · Operation ID: `construction_operations.move_objects_to_a_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_objects` | `repeated CollectionObjectName` | Source Objects | Required |
| Request | 2 | `destination_collection_name` | `optional CollectionName` | Destination Collection Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MoveObjectsToACollection(MoveObjectsToACollectionRequest) returns (MoveObjectsToACollectionResult);

message MoveObjectsToACollectionRequest {
  repeated CollectionObjectName source_objects = 1;
  optional CollectionName destination_collection_name = 2;
}

message MoveObjectsToACollectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Copy Objects - Point to Point Delta {/* #copy-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta)

`/briosa.ConstructionOperations/CopyObjectsPointToPointDelta` · Operation ID: `construction_operations.copy_objects_point_to_point_delta`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_copy` | `repeated CollectionObjectName` | Objects to Copy | Required |
| Request | 2 | `first_delta_point` | `optional PointName` | First Delta Point | Required |
| Request | 3 | `second_delta_point` | `optional PointName` | Second Delta Point | Required |
| Request | 4 | `destination_collection_name` | `optional CollectionName` | Destination Collection Name (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CopyObjectsPointToPointDelta(CopyObjectsPointToPointDeltaRequest) returns (CopyObjectsPointToPointDeltaResult);

message CopyObjectsPointToPointDeltaRequest {
  repeated CollectionObjectName objects_to_copy = 1;
  optional PointName first_delta_point = 2;
  optional PointName second_delta_point = 3;
  optional CollectionName destination_collection_name = 4;
}

message CopyObjectsPointToPointDeltaResult {
  MpExecutionDetails execution = 1000;
}
```

## Move Objects - Point to Point Delta {/* #move-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta)

`/briosa.ConstructionOperations/MoveObjectsPointToPointDelta` · Operation ID: `construction_operations.move_objects_point_to_point_delta`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects_to_move` | `repeated CollectionObjectName` | Objects to Move | Required |
| Request | 2 | `first_delta_point` | `optional PointName` | First Delta Point | Required |
| Request | 3 | `second_delta_point` | `optional PointName` | Second Delta Point | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MoveObjectsPointToPointDelta(MoveObjectsPointToPointDeltaRequest) returns (MoveObjectsPointToPointDeltaResult);

message MoveObjectsPointToPointDeltaRequest {
  repeated CollectionObjectName objects_to_move = 1;
  optional PointName first_delta_point = 2;
  optional PointName second_delta_point = 3;
}

message MoveObjectsPointToPointDeltaResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename Point {/* #rename-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-point)

`/briosa.ConstructionOperations/RenamePoint` · Operation ID: `construction_operations.rename_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_point_name` | `optional PointName` | Original Point Name | Required |
| Request | 2 | `new_point_name` | `optional PointName` | New Point Name | Required |
| Request | 3 | `overwrite_if_exists` | `optional bool` | Overwrite if exists? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenamePoint(RenamePointRequest) returns (RenamePointResult);

message RenamePointRequest {
  optional PointName original_point_name = 1;
  optional PointName new_point_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenamePointResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename Points with Name Pattern {/* #rename-points-with-name-pattern */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern)

`/briosa.ConstructionOperations/RenamePointsWithNamePattern` · Operation ID: `construction_operations.rename_points_with_name_pattern`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | Point Names | Required |
| Request | 2 | `name_pattern` | `optional string` | Name Pattern | NewName_%d |
| Request | 3 | `start_value` | `optional int32` | Start Value | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenamePointsWithNamePattern(RenamePointsWithNamePatternRequest) returns (RenamePointsWithNamePatternResult);

message RenamePointsWithNamePatternRequest {
  repeated PointName point_names = 1;
  optional string name_pattern = 2;
  optional int32 start_value = 3;
}

message RenamePointsWithNamePatternResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename Collection {/* #rename-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-collection)

`/briosa.ConstructionOperations/RenameCollection` · Operation ID: `construction_operations.rename_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_collection_name` | `optional CollectionName` | Original Collection Name | Required |
| Request | 2 | `new_collection_name` | `optional CollectionName` | New Collection Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenameCollection(RenameCollectionRequest) returns (RenameCollectionResult);

message RenameCollectionRequest {
  optional CollectionName original_collection_name = 1;
  optional CollectionName new_collection_name = 2;
}

message RenameCollectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename Object {/* #rename-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-object)

`/briosa.ConstructionOperations/RenameObject` · Operation ID: `construction_operations.rename_object`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_object_name` | `optional CollectionObjectName` | Original Object Name | Required |
| Request | 2 | `new_object_name` | `optional CollectionObjectName` | New Object Name | Required |
| Request | 3 | `overwrite_if_exists` | `optional bool` | Overwrite if exists? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenameObject(RenameObjectRequest) returns (RenameObjectResult);

message RenameObjectRequest {
  optional CollectionObjectName original_object_name = 1;
  optional CollectionObjectName new_object_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenameObjectResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename Item {/* #rename-item */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-item)

`/briosa.ConstructionOperations/RenameItem` · Operation ID: `construction_operations.rename_item`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_item_name` | `optional CollectionItemName` | Original Item Name | Required |
| Request | 2 | `new_item_name` | `optional CollectionItemName` | New Item Name | Required |
| Request | 3 | `overwrite_if_exists` | `optional bool` | Overwrite if exists? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenameItem(RenameItemRequest) returns (RenameItemResult);

message RenameItemRequest {
  optional CollectionItemName original_item_name = 1;
  optional CollectionItemName new_item_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenameItemResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Points {/* #delete-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points)

`/briosa.ConstructionOperations/DeletePoints` · Operation ID: `construction_operations.delete_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_names` | `repeated PointName` | Point Names | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeletePoints(DeletePointsRequest) returns (DeletePointsResult);

message DeletePointsRequest {
  repeated PointName point_names = 1;
}

message DeletePointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Points WildCard Selection {/* #delete-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection)

`/briosa.ConstructionOperations/DeletePointsWildcardSelection` · Operation ID: `construction_operations.delete_points_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `groups_to_delete_from` | `repeated CollectionObjectName` | Groups to Delete From | Required |
| Request | 2 | `wildcard_selection_names` | `optional PointName` | WildCard Selection Names | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeletePointsWildcardSelection(DeletePointsWildcardSelectionRequest) returns (DeletePointsWildcardSelectionResult);

message DeletePointsWildcardSelectionRequest {
  repeated CollectionObjectName groups_to_delete_from = 1;
  optional PointName wildcard_selection_names = 2;
}

message DeletePointsWildcardSelectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Objects From Surface Faces - Runtime Select {/* #construct-objects-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructObjectsFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_objects_from_surface_faces_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_type` | `optional ConstructObjectType` | Object Type | Required |
| Request | 2 | `point_offset` | `optional double` | Point Offset | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructObjectsFromSurfaceFacesRuntimeSelect(ConstructObjectsFromSurfaceFacesRuntimeSelectRequest) returns (ConstructObjectsFromSurfaceFacesRuntimeSelectResult);

message ConstructObjectsFromSurfaceFacesRuntimeSelectRequest {
  optional ConstructObjectType object_type = 1;
  optional double point_offset = 2;
}

message ConstructObjectsFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
