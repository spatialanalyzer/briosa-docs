---
title: Construction Operations / BSplines
description: Released gRPC contracts for selected Construction Operations / BSplines MP commands.
toc_max_heading_level: 2
---

# Construction Operations / BSplines

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs belong to protobuf package `briosa` and the existing service
`briosa.ConstructionOperations`. Every result reserves field `1000` for
`MpExecutionDetails execution`. No operation is automatically replayed after
an unknown execution outcome.

## B-Spline Fit Options Value

`BSplineFitOptions` is a request value rather than an RPC. It replaces the MP
command `Construct B-Spline Fit Options`, which only packages settings for use
by another MP command.

```proto
enum BSplinePointSortMode {
  B_SPLINE_POINT_SORT_MODE_UNSPECIFIED = 0;
  B_SPLINE_POINT_SORT_MODE_USE_SELECTION_ORDER = 1;
  B_SPLINE_POINT_SORT_MODE_CLOSEST_NEIGHBORS_FROM_FIRST_SELECTION = 2;
  B_SPLINE_POINT_SORT_MODE_CLOSEST_NEIGHBORS_IN_CURVE_DIRECTION = 3;
}

message BSplineFitOptions {
  optional bool open_curve = 1;
  optional bool use_interpolation_for_fit = 2;
  optional int32 number_of_control_points = 3;
  optional int32 degree_of_curve = 4;
  optional BSplinePointSortMode sort_method = 5;
  optional bool span_any_gap = 6;
  optional double termination_gap_length = 7;
  optional bool ignore_proximate_points = 8;
  optional double proximate_point_threshold = 9;
  optional bool use_global_tessellation_options = 10;
  optional double maximum_chordal_deviation = 11;
  optional double maximum_trim_edge_angle = 12;
  optional double termination_average_multiplier = 13;
  optional double extension = 14;
}
```

| Field | Briosa Default |
| --- | --- |
| `open_curve` | true |
| `use_interpolation_for_fit` | true |
| `number_of_control_points` | 8 |
| `degree_of_curve` | 3 |
| `sort_method` | `USE_SELECTION_ORDER` |
| `span_any_gap` | true |
| `termination_gap_length` | 0 |
| `ignore_proximate_points` | false |
| `proximate_point_threshold` | 0 |
| `use_global_tessellation_options` | true |
| `maximum_chordal_deviation` | 0.05 |
| `maximum_trim_edge_angle` | 15 |
| `termination_average_multiplier` | 10 |
| `extension` | 0 |

The public field `use_interpolation_for_fit` preserves the MP-facing meaning.
For SA 2026.1.0529.7, the server maps that value to the exact SDK's inverse
lower-level `Fit` representation. The unspecified sort mode is invalid when
explicitly supplied; omission selects the documented default.

## Construct B-Spline From Points

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct B-Spline From Points](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-points) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructBSplineFromPoints` |
| Operation ID | `construction_operations.construct_b_spline_from_points` |
| Route | `/briosa.ConstructionOperations/ConstructBSplineFromPoints` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| Request | 2 | `b_spline_fit_options` | `BSplineFitOptions` | `B-Spline Fit Options` | Message defaults |
| Request | 3 | `point_list` | `repeated PointName` | `Point List` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConstructBSplineFromPoints(ConstructBSplineFromPointsRequest)
    returns (ConstructBSplineFromPointsResult);

message ConstructBSplineFromPointsRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  optional BSplineFitOptions b_spline_fit_options = 2;
  repeated PointName point_list = 3;
}

message ConstructBSplineFromPointsResult {
  MpExecutionDetails execution = 1000;
}
```

The server rejects an empty point list. SpatialAnalyzer determines whether the
supplied points and options form a valid curve.

## Construct B-Spline From Point Set

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct B-Spline From Point Set](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-point-set) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructBSplineFromPointSet` |
| Operation ID | `construction_operations.construct_b_spline_from_point_set` |
| Route | `/briosa.ConstructionOperations/ConstructBSplineFromPointSet` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| Request | 2 | `b_spline_fit_options` | `BSplineFitOptions` | `B-Spline Fit Options` | Message defaults |
| Request | 3 | `point_set_container` | `CollectionObjectName` | `Point Set Container` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConstructBSplineFromPointSet(ConstructBSplineFromPointSetRequest)
    returns (ConstructBSplineFromPointSetResult);

message ConstructBSplineFromPointSetRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  optional BSplineFitOptions b_spline_fit_options = 2;
  optional CollectionObjectName point_set_container = 3;
}

message ConstructBSplineFromPointSetResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct B-Spline From Several B-Splines

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct B-Spline From Several B-Splines](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-several-b-splines) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructBSplineFromSeveralBSplines` |
| Operation ID | `construction_operations.construct_b_spline_from_several_b_splines` |
| Route | `/briosa.ConstructionOperations/ConstructBSplineFromSeveralBSplines` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| Request | 2 | `b_spline_list` | `repeated CollectionObjectName` | `B-Spline List` | Required |
| Request | 3 | `close_resulting_b_spline` | `bool` | `Close Resulting B-Spline` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConstructBSplineFromSeveralBSplines(
    ConstructBSplineFromSeveralBSplinesRequest)
    returns (ConstructBSplineFromSeveralBSplinesResult);

message ConstructBSplineFromSeveralBSplinesRequest {
  optional CollectionObjectName resulting_b_spline_name = 1;
  repeated CollectionObjectName b_spline_list = 2;
  optional bool close_resulting_b_spline = 3;
}

message ConstructBSplineFromSeveralBSplinesResult {
  MpExecutionDetails execution = 1000;
}
```

The server rejects an empty B-spline list and preserves list order.

## Construct B-Spline From Intersection of Plane and Surface

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct B-Spline From Intersection of Plane and Surface](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructBSplineFromIntersectionOfPlaneAndSurface` |
| Operation ID | `construction_operations.construct_b_spline_from_intersection_of_plane_and_surface` |
| Route | `/briosa.ConstructionOperations/ConstructBSplineFromIntersectionOfPlaneAndSurface` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| Request | 2 | `plane_name` | `CollectionObjectName` | `Plane Name` | Required |
| Request | 3 | `surface_name` | `CollectionObjectName` | `Surface Name` | Required |
| Request | 4 | `approximation_tolerance` | `double` | `Approximation Tolerance` | 0.0001 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConstructBSplineFromIntersectionOfPlaneAndSurface(
    ConstructBSplineFromIntersectionOfPlaneAndSurfaceRequest)
    returns (ConstructBSplineFromIntersectionOfPlaneAndSurfaceResult);

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

## Construct B-Spline From Intersection of Surfaces

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct B-Spline From Intersection of Surfaces](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructBSplineFromIntersectionOfSurfaces` |
| Operation ID | `construction_operations.construct_b_spline_from_intersection_of_surfaces` |
| Route | `/briosa.ConstructionOperations/ConstructBSplineFromIntersectionOfSurfaces` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| Request | 2 | `first_surface_name` | `CollectionObjectName` | `First Surface Name` | Required |
| Request | 3 | `second_surface_name` | `CollectionObjectName` | `Second Surface Name` | Required |
| Request | 4 | `approximation_tolerance` | `double` | `Approximation Tolerance` | 0.0001 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConstructBSplineFromIntersectionOfSurfaces(
    ConstructBSplineFromIntersectionOfSurfacesRequest)
    returns (ConstructBSplineFromIntersectionOfSurfacesResult);

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

SpatialAnalyzer may create more than one curve and derives any additional names
from the requested resulting name.

## Construct B-Splines From Surfaces

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct B-Splines From Surfaces](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-surfaces) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructBSplinesFromSurfaces` |
| Operation ID | `construction_operations.construct_b_splines_from_surfaces` |
| Route | `/briosa.ConstructionOperations/ConstructBSplinesFromSurfaces` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name_prefix` | `string` | `Resulting B-Spline Name prefix (Optional)` | Omitted |
| Request | 2 | `surface_list` | `repeated CollectionObjectName` | `Surface List` | Required |
| Result | 1 | `b_spline_list` | `repeated CollectionObjectName` | `B-Spline List` | Returned |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConstructBSplinesFromSurfaces(ConstructBSplinesFromSurfacesRequest)
    returns (ConstructBSplinesFromSurfacesResult);

message ConstructBSplinesFromSurfacesRequest {
  optional string resulting_b_spline_name_prefix = 1;
  repeated CollectionObjectName surface_list = 2;
}

message ConstructBSplinesFromSurfacesResult {
  repeated CollectionObjectName b_spline_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The server rejects an empty surface list. An omitted prefix is distinct from an
explicitly supplied empty string.

## Construct B-Splines From Lines

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct B-Splines From Lines](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-lines) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructBSplinesFromLines` |
| Operation ID | `construction_operations.construct_b_splines_from_lines` |
| Route | `/briosa.ConstructionOperations/ConstructBSplinesFromLines` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name_prefix` | `string` | `Resulting B-Spline Name prefix (Optional)` | Omitted |
| Request | 2 | `line_list` | `repeated CollectionObjectName` | `Line List` | Required |
| Result | 1 | `b_spline_list` | `repeated CollectionObjectName` | `B-Spline List` | Returned |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConstructBSplinesFromLines(ConstructBSplinesFromLinesRequest)
    returns (ConstructBSplinesFromLinesResult);

message ConstructBSplinesFromLinesRequest {
  optional string resulting_b_spline_name_prefix = 1;
  repeated CollectionObjectName line_list = 2;
}

message ConstructBSplinesFromLinesResult {
  repeated CollectionObjectName b_spline_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The server rejects an empty line list. The exact SA 2026.1 MP argument uses the
hyphenated `B-Spline` spelling.

## Construct B-Splines From Intersection of Plane and Mesh

<span className="catalog-status catalog-status--current">Current</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Construct B-Splines From Intersection of Plane and Mesh](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) |
| Service | `briosa.ConstructionOperations` |
| RPC | `ConstructBSplinesFromIntersectionOfPlaneAndMesh` |
| Operation ID | `construction_operations.construct_b_splines_from_intersection_of_plane_and_mesh` |
| Route | `/briosa.ConstructionOperations/ConstructBSplinesFromIntersectionOfPlaneAndMesh` |
| Validation | At Risk - fixture validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_b_spline_name` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| Request | 2 | `plane_name` | `CollectionObjectName` | `Plane Name` | Required |
| Request | 3 | `mesh_name` | `CollectionObjectName` | `Mesh Name` | Required |
| Request | 4 | `closed_line_segment_limit` | `int32` | `Delete closed lines whose number of segment is less than this value` | 3 |
| Request | 5 | `unclosed_line_segment_limit` | `int32` | `Delete unclosed lines whose number of segment is less than this value` | 3 |
| Request | 6 | `create_intersection_points` | `bool` | `Create Intersection Points?` | true |
| Result | 1 | `b_spline_list` | `repeated CollectionObjectName` | `B-Spline List` | Returned |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | - |

```proto
rpc ConstructBSplinesFromIntersectionOfPlaneAndMesh(
    ConstructBSplinesFromIntersectionOfPlaneAndMeshRequest)
    returns (ConstructBSplinesFromIntersectionOfPlaneAndMeshResult);

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

The server rejects negative segment limits. SpatialAnalyzer determines how
many B-splines and optional intersection points are created.
