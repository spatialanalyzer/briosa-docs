---
title: Construction Operations / Circles
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Circles

[SA 2026.1.0529.7](/api/grpc/construction-operations-circles) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-circles)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Circle {/* #construct-circle */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circle)

`/briosa.ConstructionOperations/ConstructCircle` · Operation ID: `construction_operations.construct_circle`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `optional CollectionObjectName` | Circle Name | Required |
| Request | 2 | `circle_center` | `optional Vector` | Circle Center (in working coordinates) | Required |
| Request | 3 | `circle_normal` | `optional Vector` | Circle Normal (in working coordinates) | Required |
| Request | 4 | `circle_radius` | `optional double` | Circle Radius | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCircle(ConstructCircleRequest) returns (ConstructCircleResult);

message ConstructCircleRequest {
  optional CollectionObjectName circle_name = 1;
  optional Vector circle_center = 2;
  optional Vector circle_normal = 3;
  optional double circle_radius = 4;
}

message ConstructCircleResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Circles From Surface Faces - Runtime Select {/* #construct-circles-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructCirclesFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_circles_from_surface_faces_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCirclesFromSurfaceFacesRuntimeSelect(ConstructCirclesFromSurfaceFacesRuntimeSelectRequest) returns (ConstructCirclesFromSurfaceFacesRuntimeSelectResult);

message ConstructCirclesFromSurfaceFacesRuntimeSelectRequest {}

message ConstructCirclesFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Circles (Lines) From Surfaces {/* #construct-circles-lines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-lines-from-surfaces)

`/briosa.ConstructionOperations/ConstructCirclesLinesFromSurfaces` · Operation ID: `construction_operations.construct_circles_lines_from_surfaces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surfaces` | `repeated CollectionObjectName` | Surfaces | Required |
| Request | 2 | `minimum_diameter` | `optional double` | Minimum Diameter | 0.000000 |
| Request | 3 | `maximum_diameter` | `optional double` | Maximum Diameter | 0.000000 |
| Request | 4 | `tolerance` | `optional double` | Tolerance | 0.020000 |
| Request | 5 | `single_surface` | `optional bool` | Single Surface? | false |
| Request | 6 | `circle_line_mode` | `optional CircleLineMode` | Circle Line Mode | Required |
| Request | 7 | `destination_collection_name` | `optional CollectionName` | Destination Collection Name | Required |
| Request | 8 | `base_name` | `optional string` | Base Name | Geometry Object |
| Result | 1 | `geometry_objects` | `repeated CollectionObjectName` | Geometry Objects | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCirclesLinesFromSurfaces(ConstructCirclesLinesFromSurfacesRequest) returns (ConstructCirclesLinesFromSurfacesResult);

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

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
