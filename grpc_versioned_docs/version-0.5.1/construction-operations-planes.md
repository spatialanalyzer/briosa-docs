---
title: Construction Operations / Planes
description: Released gRPC contracts for the selected plane-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Planes

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## RPC Index

| MP Command | RPC | Operation ID | Validation |
| --- | --- | --- | --- |
| Construct Plane | `ConstructPlane` | `construction_operations.construct_plane` | At Risk - fixture |
| Construct Plane, Normal to Object, Through Point | `ConstructPlaneNormalToObjectThroughPoint` | `construction_operations.construct_plane_normal_to_object_through_point` | At Risk - fixture |
| Construct Planes, Bounding Point Group | `ConstructPlanesBoundingPointGroup` | `construction_operations.construct_planes_bounding_point_group` | At Risk - fixture |
| Construct Planes, Bisect 2 Planes | `ConstructPlanesBisectTwoPlanes` | `construction_operations.construct_planes_bisect_two_planes` | At Risk - fixture |
| Shift Plane | `ShiftPlane` | `construction_operations.shift_plane` | At Risk - fixture |
| Construct Planes From Surface Faces - Runtime Select | `ConstructPlanesFromSurfaceFacesRuntimeSelect` | `construction_operations.construct_planes_from_surface_faces_runtime_select` | At Risk - interactive fixture |

Each route is `/briosa.ConstructionOperations/<RPC>`.

## Construct Plane

```proto
message ConstructPlaneRequest {
  optional CollectionObjectName plane_name = 1;
  optional Vector plane_center = 2;
  optional Vector plane_normal = 3;
  optional double plane_edge_dimension = 4;
}
message ConstructPlaneResult { MpExecutionDetails execution = 1000; }
```

The name, center, and normal are required. `plane_edge_dimension` defaults to
`0.0`. SpatialAnalyzer validates the geometry.

## Construct Plane, Normal to Object, Through Point

```proto
message ConstructPlaneNormalToObjectThroughPointRequest {
  optional CollectionObjectName resultant_plane_name = 1;
  optional CollectionObjectName normal_to_object_name = 2;
  optional PointName through_point_name = 3;
  optional double plane_edge_dimension = 4;
}
message ConstructPlaneNormalToObjectThroughPointResult {
  MpExecutionDetails execution = 1000;
}
```

The three identities are required. The result identity must identify a Plane.
`plane_edge_dimension` defaults to `0.0`.

## Construct Planes, Bounding Point Group

```proto
message ConstructPlanesBoundingPointGroupRequest {
  optional CollectionObjectName reference_plane_name = 1;
  optional CollectionObjectName group_to_bound = 2;
  optional CollectionObjectName resulting_high_plane_name = 3;
  optional CollectionObjectName resulting_low_plane_name = 4;
  optional bool override_target_point_offsets = 5;
  optional double offset_value = 6;
}
message ConstructPlanesBoundingPointGroupResult {
  MpExecutionDetails execution = 1000;
}
```

The reference plane and point group are required. Omitted result identities
use the exact MP defaults `HighPlane` and `LowPlane` in SpatialAnalyzer's
active collection. The offset override defaults to `false`, and the offset
value defaults to `0.0`.

## Construct Planes, Bisect 2 Planes

```proto
message ConstructPlanesBisectTwoPlanesRequest {
  optional CollectionObjectName resultant_plane_name = 1;
  optional CollectionObjectName first_plane = 2;
  optional CollectionObjectName second_plane = 3;
}
message ConstructPlanesBisectTwoPlanesResult {
  MpExecutionDetails execution = 1000;
}
```

All three Plane identities are required. SpatialAnalyzer validates their
existence and geometry.

## Shift Plane

```proto
message ShiftPlaneRequest {
  optional CollectionObjectName plane = 1;
  optional double shift_along_normal = 2;
  optional double grow_bounds_by_factor = 3;
}
message ShiftPlaneResult { MpExecutionDetails execution = 1000; }
```

`plane` is required. Both numeric fields preserve the MP default of `0.0`.
Briosa does not add range or no-op validation.

## Construct Planes From Surface Faces - Runtime Select

```proto
message ConstructPlanesFromSurfaceFacesRuntimeSelectRequest {}
message ConstructPlanesFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

This operator-interactive operation has no MP arguments. Cancellation does not
prove that the interaction stopped.

[Catalog](/mp-command-catalog/commands/construction-operations-planes) · [.NET](/api/dotnet/construction-operations-planes) · [Python](/api/python/construction-operations-planes) · [JavaScript/TypeScript](/api/javascript/construction-operations-planes)
