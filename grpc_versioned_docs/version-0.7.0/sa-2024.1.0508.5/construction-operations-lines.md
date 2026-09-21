---
title: Construction Operations / Lines
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Lines

[SA 2026.1.0529.7](/api/grpc/construction-operations-lines) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-lines)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Line 2 Points {/* #construct-line-2-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-points)

`/briosa.ConstructionOperations/ConstructLineTwoPoints` · Operation ID: `construction_operations.construct_line_two_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Request | 2 | `first_point` | `optional PointName` | First Point | Required |
| Request | 3 | `second_point` | `optional PointName` | Second Point | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLineTwoPoints(ConstructLineTwoPointsRequest) returns (ConstructLineTwoPointsResult);

message ConstructLineTwoPointsRequest {
  optional CollectionObjectName line_name = 1;
  optional PointName first_point = 2;
  optional PointName second_point = 3;
}

message ConstructLineTwoPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Line 2 Points (Vector Notation) {/* #construct-line-2-points-vector-notation */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-points-vector-notation)

`/briosa.ConstructionOperations/ConstructLineTwoPointsVectorNotation` · Operation ID: `construction_operations.construct_line_two_points_vector_notation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Request | 2 | `first_vector` | `optional Vector` | First Vector | Required |
| Request | 3 | `second_vector` | `optional Vector` | Second Vector | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLineTwoPointsVectorNotation(ConstructLineTwoPointsVectorNotationRequest) returns (ConstructLineTwoPointsVectorNotationResult);

message ConstructLineTwoPointsVectorNotationRequest {
  optional CollectionObjectName line_name = 1;
  optional Vector first_vector = 2;
  optional Vector second_vector = 3;
}

message ConstructLineTwoPointsVectorNotationResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Line Normal to Object {/* #construct-line-normal-to-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-normal-to-object)

`/briosa.ConstructionOperations/ConstructLineNormalToObject` · Operation ID: `construction_operations.construct_line_normal_to_object`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Request | 2 | `line_length` | `optional double` | Line Length | 1.000000 |
| Request | 3 | `object` | `optional CollectionObjectName` | Object | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLineNormalToObject(ConstructLineNormalToObjectRequest) returns (ConstructLineNormalToObjectResult);

message ConstructLineNormalToObjectRequest {
  optional CollectionObjectName line_name = 1;
  optional double line_length = 2;
  optional CollectionObjectName object = 3;
}

message ConstructLineNormalToObjectResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Line - Project Line to Object Reference Plane {/* #construct-line---project-line-to-object-reference-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line---project-line-to-object-reference-plane)

`/briosa.ConstructionOperations/ConstructLineProjectLineToObjectReferencePlane` · Operation ID: `construction_operations.construct_line_project_line_to_object_reference_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_to_create` | `optional CollectionObjectName` | Line To Create | Required |
| Request | 2 | `line_to_project` | `optional CollectionObjectName` | Line To Project | Required |
| Request | 3 | `object_to_project_to` | `optional CollectionObjectName` | Object to project to | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLineProjectLineToObjectReferencePlane(ConstructLineProjectLineToObjectReferencePlaneRequest) returns (ConstructLineProjectLineToObjectReferencePlaneResult);

message ConstructLineProjectLineToObjectReferencePlaneRequest {
  optional CollectionObjectName line_to_create = 1;
  optional CollectionObjectName line_to_project = 2;
  optional CollectionObjectName object_to_project_to = 3;
}

message ConstructLineProjectLineToObjectReferencePlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Line - Normal to Object through Point {/* #construct-line---normal-to-object-through-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line---normal-to-object-through-point)

`/briosa.ConstructionOperations/ConstructLineNormalToObjectThroughPoint` · Operation ID: `construction_operations.construct_line_normal_to_object_through_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_to_create` | `optional CollectionObjectName` | Line To Create | Required |
| Request | 2 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Request | 3 | `point_name` | `optional PointName` | Point Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLineNormalToObjectThroughPoint(ConstructLineNormalToObjectThroughPointRequest) returns (ConstructLineNormalToObjectThroughPointResult);

message ConstructLineNormalToObjectThroughPointRequest {
  optional CollectionObjectName line_to_create = 1;
  optional CollectionObjectName object_name = 2;
  optional PointName point_name = 3;
}

message ConstructLineNormalToObjectThroughPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Line 2 Plane Intersection {/* #construct-line-2-plane-intersection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-plane-intersection)

`/briosa.ConstructionOperations/ConstructLineTwoPlaneIntersection` · Operation ID: `construction_operations.construct_line_two_plane_intersection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Request | 2 | `first_plane` | `optional CollectionObjectName` | First Plane | Required |
| Request | 3 | `second_plane` | `optional CollectionObjectName` | Second Plane | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLineTwoPlaneIntersection(ConstructLineTwoPlaneIntersectionRequest) returns (ConstructLineTwoPlaneIntersectionResult);

message ConstructLineTwoPlaneIntersectionRequest {
  optional CollectionObjectName line_name = 1;
  optional CollectionObjectName first_plane = 2;
  optional CollectionObjectName second_plane = 3;
}

message ConstructLineTwoPlaneIntersectionResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Lines From Surface Faces - Runtime Select {/* #construct-lines-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-lines-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructLinesFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_lines_from_surface_faces_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLinesFromSurfaceFacesRuntimeSelect(ConstructLinesFromSurfaceFacesRuntimeSelectRequest) returns (ConstructLinesFromSurfaceFacesRuntimeSelectResult);

message ConstructLinesFromSurfaceFacesRuntimeSelectRequest {}

message ConstructLinesFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Line Center of Slot {/* #construct-line-center-of-slot */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-center-of-slot)

`/briosa.ConstructionOperations/ConstructLineCenterOfSlot` · Operation ID: `construction_operations.construct_line_center_of_slot`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Request | 2 | `slot_name` | `optional CollectionObjectName` | Slot Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLineCenterOfSlot(ConstructLineCenterOfSlotRequest) returns (ConstructLineCenterOfSlotResult);

message ConstructLineCenterOfSlotRequest {
  optional CollectionObjectName line_name = 1;
  optional CollectionObjectName slot_name = 2;
}

message ConstructLineCenterOfSlotResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Line From Instrument Shot {/* #construct-line-from-instrument-shot */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-from-instrument-shot)

`/briosa.ConstructionOperations/ConstructLineFromInstrumentShot` · Operation ID: `construction_operations.construct_line_from_instrument_shot`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_name` | `optional PointName` | Point Name | Required |
| Request | 2 | `observation_index` | `optional int32` | Observation Index | 0 |
| Request | 3 | `line_name` | `optional CollectionObjectName` | Line Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructLineFromInstrumentShot(ConstructLineFromInstrumentShotRequest) returns (ConstructLineFromInstrumentShotResult);

message ConstructLineFromInstrumentShotRequest {
  optional PointName point_name = 1;
  optional int32 observation_index = 2;
  optional CollectionObjectName line_name = 3;
}

message ConstructLineFromInstrumentShotResult {
  MpExecutionDetails execution = 1000;
}
```

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
