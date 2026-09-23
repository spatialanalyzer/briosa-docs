---
title: Construction Operations / BSplines
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / BSplines

[SA 2026.1.0529.7](/api/grpc/construction-operations-bsplines) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct B-Spline From Points {/* #construct-b-spline-from-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-points)

`/briosa.ConstructionOperations/ConstructBSplineFromPoints` · Operation ID: `construction_operations.construct_b_spline_from_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `optional CollectionObjectName` | Resulting B-Spline Name | Required |
| Request | 2 | `b_spline_fit_options` | `optional BSplineFitOptions` | B-Spline Fit Options | Message defaults |
| Request | 3 | `point_list` | `repeated PointName` | Point List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBSplineFromPoints(ConstructBSplineFromPointsRequest) returns (ConstructBSplineFromPointsResult);

message ConstructBSplineFromPointsRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  optional BSplineFitOptions b_spline_fit_options = 2;
  repeated PointName point_list = 3;
}

message ConstructBSplineFromPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct B-Spline From Point Set {/* #construct-b-spline-from-point-set */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-point-set)

`/briosa.ConstructionOperations/ConstructBSplineFromPointSet` · Operation ID: `construction_operations.construct_b_spline_from_point_set`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `optional CollectionObjectName` | Resulting B-Spline Name | Required |
| Request | 2 | `b_spline_fit_options` | `optional BSplineFitOptions` | B-Spline Fit Options | Message defaults |
| Request | 3 | `point_set_container` | `optional CollectionObjectName` | Point Set Container | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBSplineFromPointSet(ConstructBSplineFromPointSetRequest) returns (ConstructBSplineFromPointSetResult);

message ConstructBSplineFromPointSetRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  optional BSplineFitOptions b_spline_fit_options = 2;
  optional CollectionObjectName point_set_container = 3;
}

message ConstructBSplineFromPointSetResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct B-Spline From Several B-Splines {/* #construct-b-spline-from-several-b-splines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-several-b-splines)

`/briosa.ConstructionOperations/ConstructBSplineFromSeveralBSplines` · Operation ID: `construction_operations.construct_b_spline_from_several_b_splines`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `optional CollectionObjectName` | Resulting B-Spline Name | Required |
| Request | 2 | `b_spline_list` | `repeated CollectionObjectName` | B-Spline List | Required |
| Request | 3 | `close_resulting_b_spline` | `optional bool` | Close Resulting B-Spline | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBSplineFromSeveralBSplines(ConstructBSplineFromSeveralBSplinesRequest) returns (ConstructBSplineFromSeveralBSplinesResult);

message ConstructBSplineFromSeveralBSplinesRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  repeated CollectionObjectName b_spline_list = 2;
  optional bool close_resulting_b_spline = 3;
}

message ConstructBSplineFromSeveralBSplinesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct B-Spline From Intersection of Plane and Surface {/* #construct-b-spline-from-intersection-of-plane-and-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface)

`/briosa.ConstructionOperations/ConstructBSplineFromIntersectionOfPlaneAndSurface` · Operation ID: `construction_operations.construct_b_spline_from_intersection_of_plane_and_surface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `optional CollectionObjectName` | Resulting B-Spline Name | Required |
| Request | 2 | `plane_name` | `optional CollectionObjectName` | Plane Name | Required |
| Request | 3 | `surface_name` | `optional CollectionObjectName` | Surface Name | Required |
| Request | 4 | `approximation_tolerance` | `optional double` | Approximation Tolerance | 0.0001 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBSplineFromIntersectionOfPlaneAndSurface(ConstructBSplineFromIntersectionOfPlaneAndSurfaceRequest) returns (ConstructBSplineFromIntersectionOfPlaneAndSurfaceResult);

message ConstructBSplineFromIntersectionOfPlaneAndSurfaceRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  optional CollectionObjectName plane_name = 2;
  optional CollectionObjectName surface_name = 3;
  optional double approximation_tolerance = 4;
}

message ConstructBSplineFromIntersectionOfPlaneAndSurfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct B-Spline From Intersection of Surfaces {/* #construct-b-spline-from-intersection-of-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces)

`/briosa.ConstructionOperations/ConstructBSplineFromIntersectionOfSurfaces` · Operation ID: `construction_operations.construct_b_spline_from_intersection_of_surfaces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `optional CollectionObjectName` | Resulting B-Spline Name | Required |
| Request | 2 | `first_surface_name` | `optional CollectionObjectName` | First Surface Name | Required |
| Request | 3 | `second_surface_name` | `optional CollectionObjectName` | Second Surface Name | Required |
| Request | 4 | `approximation_tolerance` | `optional double` | Approximation Tolerance | 0.0001 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBSplineFromIntersectionOfSurfaces(ConstructBSplineFromIntersectionOfSurfacesRequest) returns (ConstructBSplineFromIntersectionOfSurfacesResult);

message ConstructBSplineFromIntersectionOfSurfacesRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  optional CollectionObjectName first_surface_name = 2;
  optional CollectionObjectName second_surface_name = 3;
  optional double approximation_tolerance = 4;
}

message ConstructBSplineFromIntersectionOfSurfacesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct B-Splines From Surfaces {/* #construct-b-splines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-surfaces)

`/briosa.ConstructionOperations/ConstructBSplinesFromSurfaces` · Operation ID: `construction_operations.construct_b_splines_from_surfaces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name_prefix` | `optional string` | Resulting B-Spline Name prefix (Optional) | Omitted |
| Request | 2 | `surface_list` | `repeated CollectionObjectName` | Surface List | Required |
| Result | 1 | `b_spline_list` | `repeated CollectionObjectName` | B-Spline List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBSplinesFromSurfaces(ConstructBSplinesFromSurfacesRequest) returns (ConstructBSplinesFromSurfacesResult);

message ConstructBSplinesFromSurfacesRequest {
  optional string resulting_b_spline_name_prefix = 1;
  repeated CollectionObjectName surface_list = 2;
}

message ConstructBSplinesFromSurfacesResult {
  repeated CollectionObjectName b_spline_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct B-Splines From Lines {/* #construct-b-splines-from-lines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-lines)

`/briosa.ConstructionOperations/ConstructBSplinesFromLines` · Operation ID: `construction_operations.construct_b_splines_from_lines`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name_prefix` | `optional string` | Resulting B-Spline Name prefix (Optional) | Omitted |
| Request | 2 | `line_list` | `repeated CollectionObjectName` | Line List | Required |
| Result | 1 | `b_spline_list` | `repeated CollectionObjectName` | B-Spline List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBSplinesFromLines(ConstructBSplinesFromLinesRequest) returns (ConstructBSplinesFromLinesResult);

message ConstructBSplinesFromLinesRequest {
  optional string resulting_b_spline_name_prefix = 1;
  repeated CollectionObjectName line_list = 2;
}

message ConstructBSplinesFromLinesResult {
  repeated CollectionObjectName b_spline_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct B-Splines From Intersection of Plane and Mesh {/* #construct-b-splines-from-intersection-of-plane-and-mesh */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh)

`/briosa.ConstructionOperations/ConstructBSplinesFromIntersectionOfPlaneAndMesh` · Operation ID: `construction_operations.construct_b_splines_from_intersection_of_plane_and_mesh`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `optional CollectionObjectName` | Resulting B-Spline Name | Required |
| Request | 2 | `plane_name` | `optional CollectionObjectName` | Plane Name | Required |
| Request | 3 | `mesh_name` | `optional CollectionObjectName` | Mesh Name | Required |
| Request | 4 | `closed_line_segment_limit` | `optional int32` | Delete closed lines whose number of segment is less than this value | 3 |
| Request | 5 | `unclosed_line_segment_limit` | `optional int32` | Delete unclosed lines whose number of segment is less than this value | 3 |
| Request | 6 | `create_intersection_points` | `optional bool` | Create Intersection Points? | true |
| Result | 1 | `b_spline_list` | `repeated CollectionObjectName` | B-Spline List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructBSplinesFromIntersectionOfPlaneAndMesh(ConstructBSplinesFromIntersectionOfPlaneAndMeshRequest) returns (ConstructBSplinesFromIntersectionOfPlaneAndMeshResult);

message ConstructBSplinesFromIntersectionOfPlaneAndMeshRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  optional CollectionObjectName plane_name = 2;
  optional CollectionObjectName mesh_name = 3;
  optional int32 closed_line_segment_limit = 4;
  optional int32 unclosed_line_segment_limit = 5;
  optional bool create_intersection_points = 6;
}

message ConstructBSplinesFromIntersectionOfPlaneAndMeshResult {
  repeated CollectionObjectName b_spline_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## B-Spline Fit Options Value {/* #b-spline-fit-options-value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
