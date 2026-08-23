---
title: Construction Operations / Circles
description: Next gRPC contracts for selected circle-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Circles

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and are never automatically replayed.

## Construct Circle

| Contract Item | Value |
| --- | --- |
| RPC | `ConstructCircle` |
| Operation ID | `construction_operations.construct_circle` |
| Route | `/briosa.ConstructionOperations/ConstructCircle` |
| Validation | At Risk - fixture validation required |

```proto
message ConstructCircleRequest {
  optional CollectionObjectName circle_name = 1;
  optional Vector circle_center = 2;
  optional Vector circle_normal = 3;
  optional double circle_radius = 4;
}
message ConstructCircleResult { MpExecutionDetails execution = 1000; }
```

All four fields are required. Their values are passed through without
Briosa-specific geometry-range validation.

## Construct Circles From Surface Faces - Runtime Select

| Contract Item | Value |
| --- | --- |
| RPC | `ConstructCirclesFromSurfaceFacesRuntimeSelect` |
| Operation ID | `construction_operations.construct_circles_from_surface_faces_runtime_select` |
| Route | `/briosa.ConstructionOperations/ConstructCirclesFromSurfaceFacesRuntimeSelect` |
| Validation | At Risk - interactive fixture validation required |

The request is empty and the result contains execution details. The operator
selects faces in SpatialAnalyzer; cancellation does not prove the interaction
stopped.

## Construct Circles (Lines) From Surfaces

| Contract Item | Value |
| --- | --- |
| RPC | `ConstructCirclesLinesFromSurfaces` |
| Operation ID | `construction_operations.construct_circles_lines_from_surfaces` |
| Route | `/briosa.ConstructionOperations/ConstructCirclesLinesFromSurfaces` |
| Validation | At Risk - setter probe and fixture validation required |

```proto
enum CircleLineMode {
  CIRCLE_LINE_MODE_UNSPECIFIED = 0;
  CIRCLE_LINE_MODE_CIRCLE = 1;
  CIRCLE_LINE_MODE_LINE = 2;
}
message ConstructCirclesLinesFromSurfacesRequest {
  repeated CollectionObjectName surfaces = 1;
  optional double minimum_diameter = 2;
  optional double maximum_diameter = 3;
  optional double tolerance = 4;
  optional bool single_surface = 5;
  optional CircleLineMode circle_line_mode = 6;
  optional CollectionName destination_collection_name = 7;
  optional string base_name = 8;
}
message ConstructCirclesLinesFromSurfacesResult {
  repeated CollectionObjectName geometry_objects = 1;
  MpExecutionDetails execution = 1000;
}
```

`surfaces` and a non-unspecified mode are required. Defaults are 0, 0, 0.02,
false, omitted destination collection, and `Geometry Object`. SpatialAnalyzer
determines how supplied diameter values affect execution.
