---
title: Construction Operations / Planes
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Planes

[SA 2026.1.0529.7](/api/grpc/construction-operations-planes) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-planes)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Plane {/* #construct-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-plane)

`/briosa.ConstructionOperations/ConstructPlane` · Operation ID: `construction_operations.construct_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane_name` | `optional CollectionObjectName` | Plane Name | Required |
| Request | 2 | `plane_center` | `optional Vector` | Plane Center (in working coordinates) | Required |
| Request | 3 | `plane_normal` | `optional Vector` | Plane Normal (in working coordinates) | Required |
| Request | 4 | `plane_edge_dimension` | `optional double` | Plane Edge Dimension | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPlane(ConstructPlaneRequest) returns (ConstructPlaneResult);

message ConstructPlaneRequest {
  optional CollectionObjectName plane_name = 1;
  optional Vector plane_center = 2;
  optional Vector plane_normal = 3;
  optional double plane_edge_dimension = 4;
}

message ConstructPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Plane, Normal to Object, Through Point {/* #construct-plane-normal-to-object-through-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-plane-normal-to-object-through-point)

`/briosa.ConstructionOperations/ConstructPlaneNormalToObjectThroughPoint` · Operation ID: `construction_operations.construct_plane_normal_to_object_through_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resultant_plane_name` | `optional CollectionObjectName` | Resultant Plane Name | Required |
| Request | 2 | `normal_to_object_name` | `optional CollectionObjectName` | 'Normal to' Object Name | Required |
| Request | 3 | `through_point_name` | `optional PointName` | 'Through' Point Name | Required |
| Request | 4 | `plane_edge_dimension` | `optional double` | Plane Edge Dimension | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPlaneNormalToObjectThroughPoint(ConstructPlaneNormalToObjectThroughPointRequest) returns (ConstructPlaneNormalToObjectThroughPointResult);

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

## Construct Planes, Bounding Point Group {/* #construct-planes-bounding-point-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-bounding-point-group)

`/briosa.ConstructionOperations/ConstructPlanesBoundingPointGroup` · Operation ID: `construction_operations.construct_planes_bounding_point_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_plane_name` | `optional CollectionObjectName` | Reference Plane Name | Required |
| Request | 2 | `group_to_bound` | `optional CollectionObjectName` | Group to bound | Required |
| Request | 3 | `resulting_high_plane_name` | `optional CollectionObjectName` | Resulting 'High' Plane Name | Required |
| Request | 4 | `resulting_low_plane_name` | `optional CollectionObjectName` | Resulting 'Low' Plane Name | Required |
| Request | 5 | `override_target_point_offsets` | `optional bool` | Override Target/Point Offsets | false |
| Request | 6 | `offset_value` | `optional double` | Offset Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPlanesBoundingPointGroup(ConstructPlanesBoundingPointGroupRequest) returns (ConstructPlanesBoundingPointGroupResult);

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

## Construct Planes, Bisect 2 Planes {/* #construct-planes-bisect-2-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-bisect-2-planes)

`/briosa.ConstructionOperations/ConstructPlanesBisectTwoPlanes` · Operation ID: `construction_operations.construct_planes_bisect_two_planes`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resultant_plane_name` | `optional CollectionObjectName` | Resultant Plane Name | Required |
| Request | 2 | `first_plane` | `optional CollectionObjectName` | First Plane | Required |
| Request | 3 | `second_plane` | `optional CollectionObjectName` | Second Plane | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPlanesBisectTwoPlanes(ConstructPlanesBisectTwoPlanesRequest) returns (ConstructPlanesBisectTwoPlanesResult);

message ConstructPlanesBisectTwoPlanesRequest {
  optional CollectionObjectName resultant_plane_name = 1;
  optional CollectionObjectName first_plane = 2;
  optional CollectionObjectName second_plane = 3;
}

message ConstructPlanesBisectTwoPlanesResult {
  MpExecutionDetails execution = 1000;
}
```

## Shift Plane {/* #shift-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#shift-plane)

`/briosa.ConstructionOperations/ShiftPlane` · Operation ID: `construction_operations.shift_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `plane` | `optional CollectionObjectName` | Plane | Required |
| Request | 2 | `shift_along_normal` | `optional double` | Shift Along Normal | 0.000000 |
| Request | 3 | `grow_bounds_by_factor` | `optional double` | Grow Bounds by Factor | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ShiftPlane(ShiftPlaneRequest) returns (ShiftPlaneResult);

message ShiftPlaneRequest {
  optional CollectionObjectName plane = 1;
  optional double shift_along_normal = 2;
  optional double grow_bounds_by_factor = 3;
}

message ShiftPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Planes From Surface Faces - Runtime Select {/* #construct-planes-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructPlanesFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_planes_from_surface_faces_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPlanesFromSurfaceFacesRuntimeSelect(ConstructPlanesFromSurfaceFacesRuntimeSelectRequest) returns (ConstructPlanesFromSurfaceFacesRuntimeSelectResult);

message ConstructPlanesFromSurfaceFacesRuntimeSelectRequest {}

message ConstructPlanesFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
