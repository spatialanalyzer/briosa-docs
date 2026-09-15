---
title: Construction Operations / Lines
description: Released gRPC contracts for selected line-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Lines

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and are never automatically replayed.

## RPC Index

| MP Command | RPC | Operation ID | Validation |
| --- | --- | --- | --- |
| Construct Line 2 Points | `ConstructLineTwoPoints` | `construction_operations.construct_line_two_points` | At Risk - fixture |
| Construct Line 2 Points (Vector Notation) | `ConstructLineTwoPointsVectorNotation` | `construction_operations.construct_line_two_points_vector_notation` | At Risk - fixture |
| Construct Line Normal to Object | `ConstructLineNormalToObject` | `construction_operations.construct_line_normal_to_object` | At Risk - fixture |
| Construct Line - Project Line to Object Reference Plane | `ConstructLineProjectLineToObjectReferencePlane` | `construction_operations.construct_line_project_line_to_object_reference_plane` | At Risk - fixture |
| Construct Line - Normal to Object through Point | `ConstructLineNormalToObjectThroughPoint` | `construction_operations.construct_line_normal_to_object_through_point` | At Risk - fixture |
| Construct Line 2 Plane Intersection | `ConstructLineTwoPlaneIntersection` | `construction_operations.construct_line_two_plane_intersection` | At Risk - fixture |
| Construct Lines From Surface Faces - Runtime Select | `ConstructLinesFromSurfaceFacesRuntimeSelect` | `construction_operations.construct_lines_from_surface_faces_runtime_select` | At Risk - interactive fixture |
| Construct Line Center of Slot | `ConstructLineCenterOfSlot` | `construction_operations.construct_line_center_of_slot` | At Risk - fixture |
| Construct Line From Instrument Shot | `ConstructLineFromInstrumentShot` | `construction_operations.construct_line_from_instrument_shot` | At Risk - instrument-measurement fixture |

Each route is `/briosa.ConstructionOperations/<RPC>`.

## Construct Line 2 Points

```proto
message ConstructLineTwoPointsRequest {
  optional CollectionObjectName line_name = 1;
  optional PointName first_point = 2;
  optional PointName second_point = 3;
}
message ConstructLineTwoPointsResult { MpExecutionDetails execution = 1000; }
```

All three fields are required.

## Construct Line 2 Points (Vector Notation)

```proto
message ConstructLineTwoPointsVectorNotationRequest {
  optional CollectionObjectName line_name = 1;
  optional Vector first_vector = 2;
  optional Vector second_vector = 3;
}
message ConstructLineTwoPointsVectorNotationResult {
  MpExecutionDetails execution = 1000;
}
```

All three fields are required and passed through without geometry validation.

## Construct Line Normal to Object

```proto
message ConstructLineNormalToObjectRequest {
  optional CollectionObjectName line_name = 1;
  optional double line_length = 2;
  optional CollectionObjectName object = 3;
}
message ConstructLineNormalToObjectResult {
  MpExecutionDetails execution = 1000;
}
```

The names are required. Omitted `line_length` maps to the MP default of 1.

## Construct Line - Project Line to Object Reference Plane

```proto
message ConstructLineProjectLineToObjectReferencePlaneRequest {
  optional CollectionObjectName line_to_create = 1;
  optional CollectionObjectName line_to_project = 2;
  optional CollectionObjectName object_to_project_to = 3;
}
message ConstructLineProjectLineToObjectReferencePlaneResult {
  MpExecutionDetails execution = 1000;
}
```

All fields are required. The final field retains the MP's `Any` object domain.

## Construct Line - Normal to Object through Point

```proto
message ConstructLineNormalToObjectThroughPointRequest {
  optional CollectionObjectName line_to_create = 1;
  optional CollectionObjectName object_name = 2;
  optional PointName point_name = 3;
}
message ConstructLineNormalToObjectThroughPointResult {
  MpExecutionDetails execution = 1000;
}
```

All fields are required.

## Construct Line 2 Plane Intersection

```proto
message ConstructLineTwoPlaneIntersectionRequest {
  optional CollectionObjectName line_name = 1;
  optional CollectionObjectName first_plane = 2;
  optional CollectionObjectName second_plane = 3;
}
message ConstructLineTwoPlaneIntersectionResult {
  MpExecutionDetails execution = 1000;
}
```

All fields are required. Briosa does not prevalidate the plane relationship.

## Construct Lines From Surface Faces - Runtime Select

```proto
message ConstructLinesFromSurfaceFacesRuntimeSelectRequest {}
message ConstructLinesFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

This operator-interactive operation has no MP arguments. Cancellation does not
prove that the interaction stopped.

## Construct Line Center of Slot

```proto
message ConstructLineCenterOfSlotRequest {
  optional CollectionObjectName line_name = 1;
  optional CollectionObjectName slot_name = 2;
}
message ConstructLineCenterOfSlotResult {
  MpExecutionDetails execution = 1000;
}
```

Both fields are required.

## Construct Line From Instrument Shot

```proto
message ConstructLineFromInstrumentShotRequest {
  optional PointName point_name = 1;
  optional int32 observation_index = 2;
  optional CollectionObjectName line_name = 3;
}
message ConstructLineFromInstrumentShotResult {
  MpExecutionDetails execution = 1000;
}
```

The names are required. Omitted `observation_index` maps to the MP default of
0. Values are passed through to SpatialAnalyzer without a client-side range
rule.

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-lines) ·
[.NET](/api/dotnet/construction-operations-lines) ·
[Python](/api/python/construction-operations-lines) ·
[JavaScript/TypeScript](/api/javascript/construction-operations-lines)
