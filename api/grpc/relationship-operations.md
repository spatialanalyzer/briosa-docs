---
title: Relationship Operations
description: Current and next gRPC contracts for supported Relationship Operations MP commands.
toc_max_heading_level: 2
---

# Relationship Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Enable/Disable Relationships for Optimization

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Enable/Disable Relationships for Optimization](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) |
| Service | `briosa.RelationshipOperations` |
| RPC | `EnableDisableRelationshipsForOptimization` |
| Operation ID | `relationship_operations.enable_disable_relationships_for_optimization` |
| Route | `/briosa.RelationshipOperations/EnableDisableRelationshipsForOptimization` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships` | `repeated CollectionObjectName` | `Relationships` | Required |
| Request | 2 | `enable` | `bool` | `Enable?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc EnableDisableRelationshipsForOptimization(EnableDisableRelationshipsForOptimizationRequest) returns (EnableDisableRelationshipsForOptimizationResult);

message EnableDisableRelationshipsForOptimizationRequest {
  repeated CollectionObjectName relationships = 1;
  optional bool enable = 2;
}

message EnableDisableRelationshipsForOptimizationResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Geom Relationship Ignore Input Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Geom Relationship Ignore Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GeomRelationshipIgnoreInputPoints` |
| Operation ID | `relationship_operations.geom_relationship_ignore_input_points` |
| Route | `/briosa.RelationshipOperations/GeomRelationshipIgnoreInputPoints` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GeomRelationshipIgnoreInputPoints(GeomRelationshipIgnoreInputPointsRequest) returns (GeomRelationshipIgnoreInputPointsResult);

message GeomRelationshipIgnoreInputPointsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GeomRelationshipIgnoreInputPointsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Geom Relationship Reuse Ignored Input Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Geom Relationship Reuse Ignored Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GeomRelationshipReuseIgnoredInputPoints` |
| Operation ID | `relationship_operations.geom_relationship_reuse_ignored_input_points` |
| Route | `/briosa.RelationshipOperations/GeomRelationshipReuseIgnoredInputPoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GeomRelationshipReuseIgnoredInputPoints(GeomRelationshipReuseIgnoredInputPointsRequest) returns (GeomRelationshipReuseIgnoredInputPointsResult);

message GeomRelationshipReuseIgnoredInputPointsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GeomRelationshipReuseIgnoredInputPointsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Auto Vectors

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Auto Vectors](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipAutoVectors` |
| Operation ID | `relationship_operations.get_geom_relationship_auto_vectors` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipAutoVectors` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `auto_vectors_nominal_avn_enabled` | `bool` | `Auto Vectors Nominal (AVN) - Enabled?` | — |
| Result | 2 | `auto_vectors_nominal_avn_name` | `CollectionObjectName` | `Auto Vectors Nominal (AVN) - Name` | — |
| Result | 3 | `auto_vectors_fit_avf_enabled` | `bool` | `Auto Vectors Fit (AVF) - Enabled?` | — |
| Result | 4 | `auto_vectors_fit_avf_name` | `CollectionObjectName` | `Auto Vectors Fit (AVF) - Name` | — |
| Result | 5 | `points_type` | `string` | `Points Type` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipAutoVectors(GetGeomRelationshipAutoVectorsRequest) returns (GetGeomRelationshipAutoVectorsResult);

message GetGeomRelationshipAutoVectorsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipAutoVectorsResult {
  optional bool auto_vectors_nominal_avn_enabled = 1;
  optional CollectionObjectName auto_vectors_nominal_avn_name = 2;
  optional bool auto_vectors_fit_avf_enabled = 3;
  optional CollectionObjectName auto_vectors_fit_avf_name = 4;
  optional string points_type = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Cardinal Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipCardinalPoints` |
| Operation ID | `relationship_operations.get_geom_relationship_cardinal_points` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipCardinalPoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `cardinal_point_name_list` | `repeated PointName` | `Cardinal Point Name List` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipCardinalPoints(GetGeomRelationshipCardinalPointsRequest) returns (GetGeomRelationshipCardinalPointsResult);

message GetGeomRelationshipCardinalPointsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipCardinalPointsResult {
  repeated PointName cardinal_point_name_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Criteria

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipCriteria` |
| Operation ID | `relationship_operations.get_geom_relationship_criteria` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipCriteria` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `criteria` | `string` | `Criteria` | Empty |
| Result | 1 | `nominal` | `double` | `Nominal` | — |
| Result | 2 | `measured` | `double` | `Measured` | — |
| Result | 3 | `delta` | `double` | `Delta` | — |
| Result | 4 | `low_tolerance` | `double` | `Low Tolerance` | — |
| Result | 5 | `high_tolerance` | `double` | `High Tolerance` | — |
| Result | 6 | `optimization_delta_weight` | `double` | `Optimization: Delta Weight` | — |
| Result | 7 | `optimization_out_of_tolerance_weight` | `double` | `Optimization: Out of Tolerance Weight` | — |
| Result | 8 | `is_within_tolerance` | `string` | `Is within Tolerance?` | — |
| Result | 9 | `has_uncertainty` | `bool` | `Has Uncertainty?` | — |
| Result | 10 | `uncertainty` | `double` | `Uncertainty` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipCriteria(GetGeomRelationshipCriteriaRequest) returns (GetGeomRelationshipCriteriaResult);

message GetGeomRelationshipCriteriaRequest {
  optional CollectionObjectName relationship_name = 1;
  optional string criteria = 2;
}

message GetGeomRelationshipCriteriaResult {
  optional double nominal = 1;
  optional double measured = 2;
  optional double delta = 3;
  optional double low_tolerance = 4;
  optional double high_tolerance = 5;
  optional double optimization_delta_weight = 6;
  optional double optimization_out_of_tolerance_weight = 7;
  optional string is_within_tolerance = 8;
  optional bool has_uncertainty = 9;
  optional double uncertainty = 10;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Measured Avg Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Measured Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipMeasuredAvgPoint` |
| Operation ID | `relationship_operations.get_geom_relationship_measured_avg_point` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipMeasuredAvgPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `measured_average_point` | `PointName` | `Measured Average Point` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipMeasuredAvgPoint(GetGeomRelationshipMeasuredAvgPointRequest) returns (GetGeomRelationshipMeasuredAvgPointResult);

message GetGeomRelationshipMeasuredAvgPointRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipMeasuredAvgPointResult {
  optional PointName measured_average_point = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Measured Geometry

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipMeasuredGeometry` |
| Operation ID | `relationship_operations.get_geom_relationship_measured_geometry` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipMeasuredGeometry` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `measured_geometry` | `CollectionObjectName` | `Measured Geometry` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipMeasuredGeometry(GetGeomRelationshipMeasuredGeometryRequest) returns (GetGeomRelationshipMeasuredGeometryResult);

message GetGeomRelationshipMeasuredGeometryRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipMeasuredGeometryResult {
  optional CollectionObjectName measured_geometry = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Nominal Avg Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipNominalAvgPoint` |
| Operation ID | `relationship_operations.get_geom_relationship_nominal_avg_point` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipNominalAvgPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `nominal_average_point` | `PointName` | `Nominal Average Point` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipNominalAvgPoint(GetGeomRelationshipNominalAvgPointRequest) returns (GetGeomRelationshipNominalAvgPointResult);

message GetGeomRelationshipNominalAvgPointRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipNominalAvgPointResult {
  optional PointName nominal_average_point = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Nominal Geometry

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipNominalGeometry` |
| Operation ID | `relationship_operations.get_geom_relationship_nominal_geometry` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipNominalGeometry` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `nominal_geometry` | `CollectionObjectName` | `Nominal Geometry` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipNominalGeometry(GetGeomRelationshipNominalGeometryRequest) returns (GetGeomRelationshipNominalGeometryResult);

message GetGeomRelationshipNominalGeometryRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipNominalGeometryResult {
  optional CollectionObjectName nominal_geometry = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Point List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Point List](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipPointList` |
| Operation ID | `relationship_operations.get_geom_relationship_point_list` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipPointList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `all_points` | `repeated PointName` | `All Points` | — |
| Result | 2 | `used_points` | `repeated PointName` | `Used Points` | — |
| Result | 3 | `ignored_points` | `repeated PointName` | `Ignored Points` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipPointList(GetGeomRelationshipPointListRequest) returns (GetGeomRelationshipPointListResult);

message GetGeomRelationshipPointListRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipPointListResult {
  repeated PointName all_points = 1;
  repeated PointName used_points = 2;
  repeated PointName ignored_points = 3;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Geom Relationship Projection Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetGeomRelationshipProjectionPlane` |
| Operation ID | `relationship_operations.get_geom_relationship_projection_plane` |
| Route | `/briosa.RelationshipOperations/GetGeomRelationshipProjectionPlane` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `projection_plane_name` | `CollectionObjectName` | `Projection Plane Name` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetGeomRelationshipProjectionPlane(GetGeomRelationshipProjectionPlaneRequest) returns (GetGeomRelationshipProjectionPlaneResult);

message GetGeomRelationshipProjectionPlaneRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetGeomRelationshipProjectionPlaneResult {
  optional CollectionObjectName projection_plane_name = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Pipe Relationship Cut Status

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Pipe Relationship Cut Status](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetPipeRelationshipCutStatus` |
| Operation ID | `relationship_operations.get_pipe_relationship_cut_status` |
| Route | `/briosa.RelationshipOperations/GetPipeRelationshipCutStatus` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `pipe_1_cut_available` | `bool` | `Pipe 1 - Cut Available?` | — |
| Result | 2 | `pipe_1_cut_active` | `bool` | `Pipe 1 - Cut Active?` | — |
| Result | 3 | `pipe_2_cut_available` | `bool` | `Pipe 2 - Cut Available?` | — |
| Result | 4 | `pipe_2_cut_active` | `bool` | `Pipe 2 - Cut Active?` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPipeRelationshipCutStatus(GetPipeRelationshipCutStatusRequest) returns (GetPipeRelationshipCutStatusResult);

message GetPipeRelationshipCutStatusRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetPipeRelationshipCutStatusResult {
  optional bool pipe_1_cut_available = 1;
  optional bool pipe_1_cut_active = 2;
  optional bool pipe_2_cut_available = 3;
  optional bool pipe_2_cut_active = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Pipe Relationship Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Pipe Relationship Properties](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetPipeRelationshipProperties` |
| Operation ID | `relationship_operations.get_pipe_relationship_properties` |
| Route | `/briosa.RelationshipOperations/GetPipeRelationshipProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `pipe_1_object_name` | `CollectionObjectName` | `Pipe 1 - Object Name` | — |
| Result | 2 | `pipe_1_inner_diameter` | `double` | `Pipe 1 - Inner Diameter` | — |
| Result | 3 | `pipe_1_outer_diameter` | `double` | `Pipe 1 - Outer Diameter` | — |
| Result | 4 | `pipe_1_cut_begin` | `double` | `Pipe 1 - Cut Begin` | — |
| Result | 5 | `pipe_1_cut_end` | `double` | `Pipe 1 - Cut End` | — |
| Result | 6 | `pipe_2_object_name` | `CollectionObjectName` | `Pipe 2 - Object Name` | — |
| Result | 7 | `pipe_2_inner_diameter` | `double` | `Pipe 2 - Inner Diameter` | — |
| Result | 8 | `pipe_2_outer_diameter` | `double` | `Pipe 2 - Outer Diameter` | — |
| Result | 9 | `pipe_2_cut_begin` | `double` | `Pipe 2 - Cut Begin` | — |
| Result | 10 | `pipe_2_cut_end` | `double` | `Pipe 2 - Cut End` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPipeRelationshipProperties(GetPipeRelationshipPropertiesRequest) returns (GetPipeRelationshipPropertiesResult);

message GetPipeRelationshipPropertiesRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetPipeRelationshipPropertiesResult {
  optional CollectionObjectName pipe_1_object_name = 1;
  optional double pipe_1_inner_diameter = 2;
  optional double pipe_1_outer_diameter = 3;
  optional double pipe_1_cut_begin = 4;
  optional double pipe_1_cut_end = 5;
  optional CollectionObjectName pipe_2_object_name = 6;
  optional double pipe_2_inner_diameter = 7;
  optional double pipe_2_outer_diameter = 8;
  optional double pipe_2_cut_begin = 9;
  optional double pipe_2_cut_end = 10;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Pipe Relationship Weights

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetPipeRelationshipWeights` |
| Operation ID | `relationship_operations.get_pipe_relationship_weights` |
| Route | `/briosa.RelationshipOperations/GetPipeRelationshipWeights` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `overall_weight` | `double` | `Overall Weight` | — |
| Result | 2 | `axis_offset` | `double` | `Axis Offset` | — |
| Result | 3 | `axis_alignment` | `double` | `Axis Alignment` | — |
| Result | 4 | `center_pull` | `double` | `Center Pull` | — |
| Result | 5 | `out_of_material_weight` | `double` | `Out of material - Weight` | — |
| Result | 6 | `out_of_material_static_offset` | `double` | `Out of material - Static Offset` | — |
| Result | 7 | `constrain_region_at_od` | `bool` | `Constrain Region at OD` | — |
| Result | 8 | `constrain_id_od_overlap` | `bool` | `Constrain ID/OD overlap` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetPipeRelationshipWeights(GetPipeRelationshipWeightsRequest) returns (GetPipeRelationshipWeightsResult);

message GetPipeRelationshipWeightsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetPipeRelationshipWeightsResult {
  optional double overall_weight = 1;
  optional double axis_offset = 2;
  optional double axis_alignment = 3;
  optional double center_pull = 4;
  optional double out_of_material_weight = 5;
  optional double out_of_material_static_offset = 6;
  optional bool constrain_region_at_od = 7;
  optional bool constrain_id_od_overlap = 8;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Fit Constraints (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipFitConstraintsScalarType` |
| Operation ID | `relationship_operations.get_relationship_fit_constraints_scalar_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipFitConstraintsScalarType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_high_tolerance` | `bool` | `Use High Tolerance?` | — |
| Result | 2 | `high_tolerance` | `double` | `High Tolerance` | — |
| Result | 3 | `use_low_tolerance` | `bool` | `Use Low Tolerance?` | — |
| Result | 4 | `low_tolerance` | `double` | `Low Tolerance` | — |
| Result | 5 | `fit_constraint_options` | `FitConstraintScalarOptions` | `Fit Constraint Options` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipFitConstraintsScalarType(GetRelationshipFitConstraintsScalarTypeRequest) returns (GetRelationshipFitConstraintsScalarTypeResult);

message GetRelationshipFitConstraintsScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipFitConstraintsScalarTypeResult {
  optional bool use_high_tolerance = 1;
  optional double high_tolerance = 2;
  optional bool use_low_tolerance = 3;
  optional double low_tolerance = 4;
  optional FitConstraintScalarOptions fit_constraint_options = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Outlier Rejection (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipOutlierRejectionScalarType` |
| Operation ID | `relationship_operations.get_relationship_outlier_rejection_scalar_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipOutlierRejectionScalarType` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_high_limit` | `bool` | `Use High Limit?` | — |
| Result | 2 | `high_limit` | `double` | `High Limit` | — |
| Result | 3 | `use_low_limit` | `bool` | `Use Low Limit?` | — |
| Result | 4 | `low_limit` | `double` | `Low Limit` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipOutlierRejectionScalarType(GetRelationshipOutlierRejectionScalarTypeRequest) returns (GetRelationshipOutlierRejectionScalarTypeResult);

message GetRelationshipOutlierRejectionScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipOutlierRejectionScalarTypeResult {
  optional bool use_high_limit = 1;
  optional double high_limit = 2;
  optional bool use_low_limit = 3;
  optional double low_limit = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Projection Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipProjectionOptions` |
| Operation ID | `relationship_operations.get_relationship_projection_options` |
| Route | `/briosa.RelationshipOperations/GetRelationshipProjectionOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `ignore_edge_projections` | `bool` | `Ignore Edge Projections?` | — |
| Result | 2 | `probe_offsets_override_target_values` | `bool` | `Probe Offsets - Override Target Values?` | — |
| Result | 3 | `probe_offsets_override_value` | `double` | `Probe Offsets - Override Value` | — |
| Result | 4 | `add_extra_material` | `bool` | `Add Extra Material?` | — |
| Result | 5 | `extra_material_thickness` | `double` | `Extra Material Thickness` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipProjectionOptions(GetRelationshipProjectionOptionsRequest) returns (GetRelationshipProjectionOptionsResult);

message GetRelationshipProjectionOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipProjectionOptionsResult {
  optional bool ignore_edge_projections = 1;
  optional bool probe_offsets_override_target_values = 2;
  optional double probe_offsets_override_value = 3;
  optional bool add_extra_material = 4;
  optional double extra_material_thickness = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Reporting Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipReportingFrame` |
| Operation ID | `relationship_operations.get_relationship_reporting_frame` |
| Route | `/briosa.RelationshipOperations/GetRelationshipReportingFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipReportingFrame(GetRelationshipReportingFrameRequest) returns (GetRelationshipReportingFrameResult);

message GetRelationshipReportingFrameRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipReportingFrameResult {
  optional CollectionObjectName reporting_frame = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Sub Sampling Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipSubSamplingOptions` |
| Operation ID | `relationship_operations.get_relationship_sub_sampling_options` |
| Route | `/briosa.RelationshipOperations/GetRelationshipSubSamplingOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_every_ith_point` | `bool` | `Use every i-th point` | — |
| Result | 2 | `i_value` | `int32` | `i value` | — |
| Result | 3 | `use_no_more_than_n_points` | `bool` | `Use no more than n points` | — |
| Result | 4 | `n_value` | `int32` | `n value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipSubSamplingOptions(GetRelationshipSubSamplingOptionsRequest) returns (GetRelationshipSubSamplingOptionsResult);

message GetRelationshipSubSamplingOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipSubSamplingOptionsResult {
  optional bool use_every_ith_point = 1;
  optional int32 i_value = 2;
  optional bool use_no_more_than_n_points = 3;
  optional int32 n_value = 4;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Tolerance (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipToleranceScalarType` |
| Operation ID | `relationship_operations.get_relationship_tolerance_scalar_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipToleranceScalarType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_high_tolerance` | `bool` | `Use High Tolerance?` | — |
| Result | 2 | `high_tolerance` | `double` | `High Tolerance` | — |
| Result | 3 | `use_low_tolerance` | `bool` | `Use Low Tolerance?` | — |
| Result | 4 | `low_tolerance` | `double` | `Low Tolerance` | — |
| Result | 5 | `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipToleranceScalarType(GetRelationshipToleranceScalarTypeRequest) returns (GetRelationshipToleranceScalarTypeResult);

message GetRelationshipToleranceScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipToleranceScalarTypeResult {
  optional bool use_high_tolerance = 1;
  optional double high_tolerance = 2;
  optional bool use_low_tolerance = 3;
  optional double low_tolerance = 4;
  optional ToleranceScalarOptions tolerance_options = 5;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Tolerance (Vector Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipToleranceVectorType` |
| Operation ID | `relationship_operations.get_relationship_tolerance_vector_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipToleranceVectorType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `use_high_x_tolerance` | `bool` | `Use High X Tolerance?` | — |
| Result | 2 | `high_x_tolerance` | `double` | `High X Tolerance` | — |
| Result | 3 | `use_high_y_tolerance` | `bool` | `Use High Y Tolerance?` | — |
| Result | 4 | `high_y_tolerance` | `double` | `High Y Tolerance` | — |
| Result | 5 | `use_high_z_tolerance` | `bool` | `Use High Z Tolerance?` | — |
| Result | 6 | `high_z_tolerance` | `double` | `High Z Tolerance` | — |
| Result | 7 | `use_high_mag_tolerance` | `bool` | `Use High Mag Tolerance?` | — |
| Result | 8 | `high_mag_tolerance` | `double` | `High Mag Tolerance` | — |
| Result | 9 | `use_low_x_tolerance` | `bool` | `Use Low X Tolerance?` | — |
| Result | 10 | `low_x_tolerance` | `double` | `Low X Tolerance` | — |
| Result | 11 | `use_low_y_tolerance` | `bool` | `Use Low Y Tolerance?` | — |
| Result | 12 | `low_y_tolerance` | `double` | `Low Y Tolerance` | — |
| Result | 13 | `use_low_z_tolerance` | `bool` | `Use Low Z Tolerance?` | — |
| Result | 14 | `low_z_tolerance` | `double` | `Low Z Tolerance` | — |
| Result | 15 | `use_low_mag_tolerance` | `bool` | `Use Low Mag Tolerance?` | — |
| Result | 16 | `low_mag_tolerance` | `double` | `Low Mag Tolerance` | — |
| Result | 17 | `vector_tolerance` | `Vector` | `Vector Tolerance` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipToleranceVectorType(GetRelationshipToleranceVectorTypeRequest) returns (GetRelationshipToleranceVectorTypeResult);

message GetRelationshipToleranceVectorTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipToleranceVectorTypeResult {
  optional bool use_high_x_tolerance = 1;
  optional double high_x_tolerance = 2;
  optional bool use_high_y_tolerance = 3;
  optional double high_y_tolerance = 4;
  optional bool use_high_z_tolerance = 5;
  optional double high_z_tolerance = 6;
  optional bool use_high_mag_tolerance = 7;
  optional double high_mag_tolerance = 8;
  optional bool use_low_x_tolerance = 9;
  optional double low_x_tolerance = 10;
  optional bool use_low_y_tolerance = 11;
  optional double low_y_tolerance = 12;
  optional bool use_low_z_tolerance = 13;
  optional double low_z_tolerance = 14;
  optional bool use_low_mag_tolerance = 15;
  optional double low_mag_tolerance = 16;
  optional Vector vector_tolerance = 17;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Type

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Type](/mp-command-catalog/commands/relationship-operations#get-relationship-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipType` |
| Operation ID | `relationship_operations.get_relationship_type` |
| Route | `/briosa.RelationshipOperations/GetRelationshipType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `relationship_type` | `string` | `Relationship Type` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipType(GetRelationshipTypeRequest) returns (GetRelationshipTypeResult);

message GetRelationshipTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipTypeResult {
  optional string relationship_type = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Relationship Weighting

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Relationship Weighting](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) |
| Service | `briosa.RelationshipOperations` |
| RPC | `GetRelationshipWeighting` |
| Operation ID | `relationship_operations.get_relationship_weighting` |
| Route | `/briosa.RelationshipOperations/GetRelationshipWeighting` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1 | `weight` | `double` | `Weight` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetRelationshipWeighting(GetRelationshipWeightingRequest) returns (GetRelationshipWeightingResult);

message GetRelationshipWeightingRequest {
  optional CollectionObjectName relationship_name = 1;
}

message GetRelationshipWeightingResult {
  optional double weight = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make Pipe Fitting Relationship

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make Pipe Fitting Relationship](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) |
| Service | `briosa.RelationshipOperations` |
| RPC | `MakePipeFittingRelationship` |
| Operation ID | `relationship_operations.make_pipe_fitting_relationship` |
| Route | `/briosa.RelationshipOperations/MakePipeFittingRelationship` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `pipe_1_object_name` | `CollectionObjectName` | `Pipe 1 - Object Name` | Required |
| Request | 3 | `pipe_2_object_name` | `CollectionObjectName` | `Pipe 2 - Object Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakePipeFittingRelationship(MakePipeFittingRelationshipRequest) returns (MakePipeFittingRelationshipResult);

message MakePipeFittingRelationshipRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName pipe_1_object_name = 2;
  optional CollectionObjectName pipe_2_object_name = 3;
}

message MakePipeFittingRelationshipResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Make pipe Relationship Cut

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Make pipe Relationship Cut](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) |
| Service | `briosa.RelationshipOperations` |
| RPC | `MakePipeRelationshipCut` |
| Operation ID | `relationship_operations.make_pipe_relationship_cut` |
| Route | `/briosa.RelationshipOperations/MakePipeRelationshipCut` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `pipe_1_make_cut` | `bool` | `Pipe 1 - Make Cut` | true |
| Request | 3 | `pipe_1_create_frame` | `bool` | `Pipe 1 - Create Frame` | false |
| Request | 4 | `pipe_1_frame_name` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| Request | 5 | `pipe_2_make_cut` | `bool` | `Pipe 2 - Make Cut` | true |
| Request | 6 | `pipe_2_create_frame` | `bool` | `Pipe 2 - Create Frame` | false |
| Request | 7 | `pipe_2_frame_name` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MakePipeRelationshipCut(MakePipeRelationshipCutRequest) returns (MakePipeRelationshipCutResult);

message MakePipeRelationshipCutRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool pipe_1_make_cut = 2;
  optional bool pipe_1_create_frame = 3;
  optional CollectionObjectName pipe_1_frame_name = 4;
  optional bool pipe_2_make_cut = 5;
  optional bool pipe_2_create_frame = 6;
  optional CollectionObjectName pipe_2_frame_name = 7;
}

message MakePipeRelationshipCutResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Pipe Relationship Force Cut to Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Pipe Relationship Force Cut to Frame](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) |
| Service | `briosa.RelationshipOperations` |
| RPC | `PipeRelationshipForceCutToFrame` |
| Operation ID | `relationship_operations.pipe_relationship_force_cut_to_frame` |
| Route | `/briosa.RelationshipOperations/PipeRelationshipForceCutToFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `pipe_1_force_cut_to_frame` | `bool` | `Pipe 1 - Force Cut to Frame?` | true |
| Request | 3 | `pipe_1_frame_name` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| Request | 4 | `pipe_2_force_cut_to_frame` | `bool` | `Pipe 2 - Force Cut to Frame?` | true |
| Request | 5 | `pipe_2_frame_name` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc PipeRelationshipForceCutToFrame(PipeRelationshipForceCutToFrameRequest) returns (PipeRelationshipForceCutToFrameResult);

message PipeRelationshipForceCutToFrameRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool pipe_1_force_cut_to_frame = 2;
  optional CollectionObjectName pipe_1_frame_name = 3;
  optional bool pipe_2_force_cut_to_frame = 4;
  optional CollectionObjectName pipe_2_frame_name = 5;
}

message PipeRelationshipForceCutToFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Auto Measure Nominal Feature

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Auto Measure Nominal Feature](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipAutoMeasureNominalFeature` |
| Operation ID | `relationship_operations.set_geom_relationship_auto_measure_nominal_feature` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipAutoMeasureNominalFeature` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `trap_clouds_false_geometry` | `bool` | `Trap Clouds? (FALSE = Geometry)` | true |
| Request | 3 | `instrument_id` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 4 | `measurement_mode` | `string` | `Measurement Mode` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipAutoMeasureNominalFeature(SetGeomRelationshipAutoMeasureNominalFeatureRequest) returns (SetGeomRelationshipAutoMeasureNominalFeatureResult);

message SetGeomRelationshipAutoMeasureNominalFeatureRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool trap_clouds_false_geometry = 2;
  optional CollectionInstrumentId instrument_id = 3;
  optional string measurement_mode = 4;
}

message SetGeomRelationshipAutoMeasureNominalFeatureResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Auto Vectors Nominal (AVN)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Auto Vectors Nominal (AVN)](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipAutoVectorsNominalAvn` |
| Operation ID | `relationship_operations.set_geom_relationship_auto_vectors_nominal_avn` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipAutoVectorsNominalAvn` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `create_auto_vectors_avn` | `bool` | `Create Auto Vectors AVN` | false |
| Request | 3 | `points_type` | `PointFilterInputType` | `Points Type` | Cardinal Points |
| Request | 4 | `use_vector_group_custom_prefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| Request | 5 | `vector_group_custom_prefix` | `string` | `Vector Group Custom Prefix` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipAutoVectorsNominalAvn(SetGeomRelationshipAutoVectorsNominalAvnRequest) returns (SetGeomRelationshipAutoVectorsNominalAvnResult);

message SetGeomRelationshipAutoVectorsNominalAvnRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool create_auto_vectors_avn = 2;
  optional PointFilterInputType points_type = 3;
  optional bool use_vector_group_custom_prefix = 4;
  optional string vector_group_custom_prefix = 5;
}

message SetGeomRelationshipAutoVectorsNominalAvnResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Cardinal Points

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipCardinalPoints` |
| Operation ID | `relationship_operations.set_geom_relationship_cardinal_points` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipCardinalPoints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `create_cardinal_pts_when_fitting` | `bool` | `Create Cardinal Pts when Fitting?` | true |
| Request | 3 | `prefix_cardinal_pts_name_with_rel_name` | `bool` | `Prefix Cardinal Pts name with Rel name?` | true |
| Request | 4 | `cardinal_pts_group_name` | `string` | `Cardinal Pts Group Name` | GR-Cardinal Pts |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipCardinalPoints(SetGeomRelationshipCardinalPointsRequest) returns (SetGeomRelationshipCardinalPointsResult);

message SetGeomRelationshipCardinalPointsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool create_cardinal_pts_when_fitting = 2;
  optional bool prefix_cardinal_pts_name_with_rel_name = 3;
  optional string cardinal_pts_group_name = 4;
}

message SetGeomRelationshipCardinalPointsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Criteria

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipCriteria` |
| Operation ID | `relationship_operations.set_geom_relationship_criteria` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipCriteria` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `criteria` | `string` | `Criteria` | Empty |
| Request | 3 | `show_in_report` | `bool` | `Show in Report` | true |
| Request | 4 | `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` | 0.000000 |
| Request | 5 | `optimization_delta_weight` | `double` | `Optimization: Delta Weight` | 0.000000 |
| Request | 6 | `optimization_out_of_tolerance_weight` | `double` | `Optimization: Out of Tolerance Weight` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipCriteria(SetGeomRelationshipCriteriaRequest) returns (SetGeomRelationshipCriteriaResult);

message SetGeomRelationshipCriteriaRequest {
  optional CollectionObjectName relationship_name = 1;
  optional string criteria = 2;
  optional bool show_in_report = 3;
  optional ToleranceScalarOptions tolerance_options = 4;
  optional double optimization_delta_weight = 5;
  optional double optimization_out_of_tolerance_weight = 6;
}

message SetGeomRelationshipCriteriaResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Measured Geometry

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipMeasuredGeometry` |
| Operation ID | `relationship_operations.set_geom_relationship_measured_geometry` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipMeasuredGeometry` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `measured_geometry` | `CollectionObjectName` | `Measured Geometry` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipMeasuredGeometry(SetGeomRelationshipMeasuredGeometryRequest) returns (SetGeomRelationshipMeasuredGeometryResult);

message SetGeomRelationshipMeasuredGeometryRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName measured_geometry = 2;
}

message SetGeomRelationshipMeasuredGeometryResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Nominal Avg Point

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipNominalAvgPoint` |
| Operation ID | `relationship_operations.set_geom_relationship_nominal_avg_point` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipNominalAvgPoint` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `compare_to_nominal` | `bool` | `Compare To Nominal?` | true |
| Request | 3 | `nominal_average_point` | `PointName` | `Nominal Average Point` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipNominalAvgPoint(SetGeomRelationshipNominalAvgPointRequest) returns (SetGeomRelationshipNominalAvgPointResult);

message SetGeomRelationshipNominalAvgPointRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool compare_to_nominal = 2;
  optional PointName nominal_average_point = 3;
}

message SetGeomRelationshipNominalAvgPointResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Nominal Geometry

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipNominalGeometry` |
| Operation ID | `relationship_operations.set_geom_relationship_nominal_geometry` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipNominalGeometry` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `compare_to_nominal` | `bool` | `Compare To Nominal?` | true |
| Request | 3 | `nominal_geometry` | `CollectionObjectName` | `Nominal Geometry` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipNominalGeometry(SetGeomRelationshipNominalGeometryRequest) returns (SetGeomRelationshipNominalGeometryResult);

message SetGeomRelationshipNominalGeometryRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool compare_to_nominal = 2;
  optional CollectionObjectName nominal_geometry = 3;
}

message SetGeomRelationshipNominalGeometryResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Geom Relationship Projection Plane

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetGeomRelationshipProjectionPlane` |
| Operation ID | `relationship_operations.set_geom_relationship_projection_plane` |
| Route | `/briosa.RelationshipOperations/SetGeomRelationshipProjectionPlane` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `project_to_plane` | `bool` | `Project to Plane?` | true |
| Request | 3 | `projection_plane_name` | `CollectionObjectName` | `Projection Plane Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetGeomRelationshipProjectionPlane(SetGeomRelationshipProjectionPlaneRequest) returns (SetGeomRelationshipProjectionPlaneResult);

message SetGeomRelationshipProjectionPlaneRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool project_to_plane = 2;
  optional CollectionObjectName projection_plane_name = 3;
}

message SetGeomRelationshipProjectionPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Object to Object Direction Relationship Fit Constraints

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Object to Object Direction Relationship Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetObjectToObjectDirectionRelationshipFitConstraints` |
| Operation ID | `relationship_operations.set_object_to_object_direction_relationship_fit_constraints` |
| Route | `/briosa.RelationshipOperations/SetObjectToObjectDirectionRelationshipFitConstraints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `angle_between_vectors_fit_constraints` | `FitConstraintScalarOptions` | `Angle Between Vectors Fit Constraints` | 0.000000 |
| Request | 3 | `mutual_perpendicular_length_fit_constraints` | `FitConstraintScalarOptions` | `Mutual Perpendicular Length Fit Constraints` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetObjectToObjectDirectionRelationshipFitConstraints(SetObjectToObjectDirectionRelationshipFitConstraintsRequest) returns (SetObjectToObjectDirectionRelationshipFitConstraintsResult);

message SetObjectToObjectDirectionRelationshipFitConstraintsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional FitConstraintScalarOptions angle_between_vectors_fit_constraints = 2;
  optional FitConstraintScalarOptions mutual_perpendicular_length_fit_constraints = 3;
}

message SetObjectToObjectDirectionRelationshipFitConstraintsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Pipe Relationship Segment Properties

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Pipe Relationship Segment Properties](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetPipeRelationshipSegmentProperties` |
| Operation ID | `relationship_operations.set_pipe_relationship_segment_properties` |
| Route | `/briosa.RelationshipOperations/SetPipeRelationshipSegmentProperties` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `pipe_1_inner_diameter` | `double` | `Pipe 1 - Inner Diameter` | 0.000000 |
| Request | 3 | `pipe_1_outer_diameter` | `double` | `Pipe 1 - Outer Diameter` | 0.000000 |
| Request | 4 | `pipe_1_cut_begin` | `double` | `Pipe 1 - Cut Begin` | 0.000000 |
| Request | 5 | `pipe_1_cut_end` | `double` | `Pipe 1 - Cut End` | 0.000000 |
| Request | 6 | `pipe_2_inner_diameter` | `double` | `Pipe 2 - Inner Diameter` | 0.000000 |
| Request | 7 | `pipe_2_outer_diameter` | `double` | `Pipe 2 - Outer Diameter` | 0.000000 |
| Request | 8 | `pipe_2_cut_begin` | `double` | `Pipe 2 - Cut Begin` | 0.000000 |
| Request | 9 | `pipe_2_cut_end` | `double` | `Pipe 2 - Cut End` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetPipeRelationshipSegmentProperties(SetPipeRelationshipSegmentPropertiesRequest) returns (SetPipeRelationshipSegmentPropertiesResult);

message SetPipeRelationshipSegmentPropertiesRequest {
  optional CollectionObjectName relationship_name = 1;
  optional double pipe_1_inner_diameter = 2;
  optional double pipe_1_outer_diameter = 3;
  optional double pipe_1_cut_begin = 4;
  optional double pipe_1_cut_end = 5;
  optional double pipe_2_inner_diameter = 6;
  optional double pipe_2_outer_diameter = 7;
  optional double pipe_2_cut_begin = 8;
  optional double pipe_2_cut_end = 9;
}

message SetPipeRelationshipSegmentPropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Pipe Relationship Weights

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetPipeRelationshipWeights` |
| Operation ID | `relationship_operations.set_pipe_relationship_weights` |
| Route | `/briosa.RelationshipOperations/SetPipeRelationshipWeights` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `overall_weight` | `double` | `Overall Weight` | 1.000000 |
| Request | 3 | `axis_offset` | `double` | `Axis Offset` | 2.000000 |
| Request | 4 | `axis_alignment` | `double` | `Axis Alignment` | 1.000000 |
| Request | 5 | `center_pull` | `double` | `Center Pull` | 0.100000 |
| Request | 6 | `out_of_material_weight` | `double` | `Out of material - Weight` | 10.000000 |
| Request | 7 | `out_of_material_offset` | `double` | `Out of material - Offset` | 1.000000 |
| Request | 8 | `constrain_region_at_od` | `bool` | `Constrain Region at OD` | false |
| Request | 9 | `constrain_id_od_overlap` | `bool` | `Constrain ID/OD overlap` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetPipeRelationshipWeights(SetPipeRelationshipWeightsRequest) returns (SetPipeRelationshipWeightsResult);

message SetPipeRelationshipWeightsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional double overall_weight = 2;
  optional double axis_offset = 3;
  optional double axis_alignment = 4;
  optional double center_pull = 5;
  optional double out_of_material_weight = 6;
  optional double out_of_material_offset = 7;
  optional bool constrain_region_at_od = 8;
  optional bool constrain_id_od_overlap = 9;
}

message SetPipeRelationshipWeightsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Auto Vectors Fit (AVF)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Auto Vectors Fit (AVF)](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipAutoVectorsFitAvf` |
| Operation ID | `relationship_operations.set_relationship_auto_vectors_fit_avf` |
| Route | `/briosa.RelationshipOperations/SetRelationshipAutoVectorsFitAvf` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `create_auto_vectors_avf` | `bool` | `Create Auto Vectors AVF` | false |
| Request | 3 | `use_vector_group_custom_prefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| Request | 4 | `vector_group_custom_prefix` | `string` | `Vector Group Custom Prefix` | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipAutoVectorsFitAvf(SetRelationshipAutoVectorsFitAvfRequest) returns (SetRelationshipAutoVectorsFitAvfResult);

message SetRelationshipAutoVectorsFitAvfRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool create_auto_vectors_avf = 2;
  optional bool use_vector_group_custom_prefix = 3;
  optional string vector_group_custom_prefix = 4;
}

message SetRelationshipAutoVectorsFitAvfResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Auto Vectors Group Default Prefix

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Auto Vectors Group Default Prefix](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipAutoVectorsGroupDefaultPrefix` |
| Operation ID | `relationship_operations.set_relationship_auto_vectors_group_default_prefix` |
| Route | `/briosa.RelationshipOperations/SetRelationshipAutoVectorsGroupDefaultPrefix` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `geom_rel_avn_vg_default_prefix` | `string` | `Geom Rel AVN VG Default Prefix` | GR-AVN- |
| Request | 2 | `geom_rel_avf_vg_default_prefix` | `string` | `Geom Rel AVF VG Default Prefix` | GR-AVF- |
| Request | 3 | `non_geom_rel_vg_default_prefix` | `string` | `Non-Geom Rel VG Default Prefix` | Auto Vectors:  |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipAutoVectorsGroupDefaultPrefix(SetRelationshipAutoVectorsGroupDefaultPrefixRequest) returns (SetRelationshipAutoVectorsGroupDefaultPrefixResult);

message SetRelationshipAutoVectorsGroupDefaultPrefixRequest {
  optional string geom_rel_avn_vg_default_prefix = 1;
  optional string geom_rel_avf_vg_default_prefix = 2;
  optional string non_geom_rel_vg_default_prefix = 3;
}

message SetRelationshipAutoVectorsGroupDefaultPrefixResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Desired Meas Count

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Desired Meas Count](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipDesiredMeasCount` |
| Operation ID | `relationship_operations.set_relationship_desired_meas_count` |
| Route | `/briosa.RelationshipOperations/SetRelationshipDesiredMeasCount` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `desired_measurement_count` | `int32` | `Desired Measurement Count` | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipDesiredMeasCount(SetRelationshipDesiredMeasCountRequest) returns (SetRelationshipDesiredMeasCountResult);

message SetRelationshipDesiredMeasCountRequest {
  optional CollectionObjectName relationship_name = 1;
  optional int32 desired_measurement_count = 2;
}

message SetRelationshipDesiredMeasCountResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Dormant Status

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Dormant Status](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipDormantStatus` |
| Operation ID | `relationship_operations.set_relationship_dormant_status` |
| Route | `/briosa.RelationshipOperations/SetRelationshipDormantStatus` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships` | `repeated CollectionObjectName` | `Relationships` | Required |
| Request | 2 | `dormant_status` | `bool` | `Dormant Status` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipDormantStatus(SetRelationshipDormantStatusRequest) returns (SetRelationshipDormantStatusResult);

message SetRelationshipDormantStatusRequest {
  repeated CollectionObjectName relationships = 1;
  optional bool dormant_status = 2;
}

message SetRelationshipDormantStatusResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Fit Constraints (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipFitConstraintsScalarType` |
| Operation ID | `relationship_operations.set_relationship_fit_constraints_scalar_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipFitConstraintsScalarType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `fit_constraint_options` | `FitConstraintScalarOptions` | `Fit Constraint Options` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipFitConstraintsScalarType(SetRelationshipFitConstraintsScalarTypeRequest) returns (SetRelationshipFitConstraintsScalarTypeResult);

message SetRelationshipFitConstraintsScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional FitConstraintScalarOptions fit_constraint_options = 2;
}

message SetRelationshipFitConstraintsScalarTypeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Orientation Fit Constraints (Vector Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Orientation Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipOrientationFitConstraintsVectorType` |
| Operation ID | `relationship_operations.set_relationship_orientation_fit_constraints_vector_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipOrientationFitConstraintsVectorType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `orientation_vector_constraint` | `Vector` | `Orientation Vector Constraint` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipOrientationFitConstraintsVectorType(SetRelationshipOrientationFitConstraintsVectorTypeRequest) returns (SetRelationshipOrientationFitConstraintsVectorTypeResult);

message SetRelationshipOrientationFitConstraintsVectorTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional Vector orientation_vector_constraint = 2;
}

message SetRelationshipOrientationFitConstraintsVectorTypeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Outlier Rejection (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipOutlierRejectionScalarType` |
| Operation ID | `relationship_operations.set_relationship_outlier_rejection_scalar_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipOutlierRejectionScalarType` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipOutlierRejectionScalarType(SetRelationshipOutlierRejectionScalarTypeRequest) returns (SetRelationshipOutlierRejectionScalarTypeResult);

message SetRelationshipOutlierRejectionScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
}

message SetRelationshipOutlierRejectionScalarTypeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Position Fit Constraints (Vector Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Position Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipPositionFitConstraintsVectorType` |
| Operation ID | `relationship_operations.set_relationship_position_fit_constraints_vector_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipPositionFitConstraintsVectorType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `position_vector_constraint` | `Vector` | `Position Vector Constraint` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipPositionFitConstraintsVectorType(SetRelationshipPositionFitConstraintsVectorTypeRequest) returns (SetRelationshipPositionFitConstraintsVectorTypeResult);

message SetRelationshipPositionFitConstraintsVectorTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional Vector position_vector_constraint = 2;
}

message SetRelationshipPositionFitConstraintsVectorTypeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Projection Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipProjectionOptions` |
| Operation ID | `relationship_operations.set_relationship_projection_options` |
| Route | `/briosa.RelationshipOperations/SetRelationshipProjectionOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipProjectionOptions(SetRelationshipProjectionOptionsRequest) returns (SetRelationshipProjectionOptionsResult);

message SetRelationshipProjectionOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional ProjectionOptions projection_options = 2;
}

message SetRelationshipProjectionOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Reporting Frame

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipReportingFrame` |
| Operation ID | `relationship_operations.set_relationship_reporting_frame` |
| Route | `/briosa.RelationshipOperations/SetRelationshipReportingFrame` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipReportingFrame(SetRelationshipReportingFrameRequest) returns (SetRelationshipReportingFrameResult);

message SetRelationshipReportingFrameRequest {
  optional CollectionObjectName relationship_name = 1;
  optional CollectionObjectName reporting_frame = 2;
}

message SetRelationshipReportingFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Sigmoidal Gap Fit Constraints

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Sigmoidal Gap Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipSigmoidalGapFitConstraints` |
| Operation ID | `relationship_operations.set_relationship_sigmoidal_gap_fit_constraints` |
| Route | `/briosa.RelationshipOperations/SetRelationshipSigmoidalGapFitConstraints` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `use_sigmoidal_gap_constraints` | `bool` | `Use Sigmoidal Gap Constraints` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipSigmoidalGapFitConstraints(SetRelationshipSigmoidalGapFitConstraintsRequest) returns (SetRelationshipSigmoidalGapFitConstraintsResult);

message SetRelationshipSigmoidalGapFitConstraintsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool use_sigmoidal_gap_constraints = 2;
}

message SetRelationshipSigmoidalGapFitConstraintsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Sub Sampling Options

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipSubSamplingOptions` |
| Operation ID | `relationship_operations.set_relationship_sub_sampling_options` |
| Route | `/briosa.RelationshipOperations/SetRelationshipSubSamplingOptions` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `use_every_ith_point` | `bool` | `Use every i-th point` | false |
| Request | 3 | `i_value` | `int32` | `i value` | 20 |
| Request | 4 | `use_no_more_than_n_points` | `bool` | `Use no more than n points` | true |
| Request | 5 | `n_value` | `int32` | `n value` | 10000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipSubSamplingOptions(SetRelationshipSubSamplingOptionsRequest) returns (SetRelationshipSubSamplingOptionsResult);

message SetRelationshipSubSamplingOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool use_every_ith_point = 2;
  optional int32 i_value = 3;
  optional bool use_no_more_than_n_points = 4;
  optional int32 n_value = 5;
}

message SetRelationshipSubSamplingOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Tolerance (Scalar Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipToleranceScalarType` |
| Operation ID | `relationship_operations.set_relationship_tolerance_scalar_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipToleranceScalarType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `tolerance_options` | `ToleranceScalarOptions` | `Tolerance Options` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipToleranceScalarType(SetRelationshipToleranceScalarTypeRequest) returns (SetRelationshipToleranceScalarTypeResult);

message SetRelationshipToleranceScalarTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional ToleranceScalarOptions tolerance_options = 2;
}

message SetRelationshipToleranceScalarTypeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Tolerance (Vector Type)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipToleranceVectorType` |
| Operation ID | `relationship_operations.set_relationship_tolerance_vector_type` |
| Route | `/briosa.RelationshipOperations/SetRelationshipToleranceVectorType` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `vector_tolerance` | `Vector` | `Vector Tolerance` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipToleranceVectorType(SetRelationshipToleranceVectorTypeRequest) returns (SetRelationshipToleranceVectorTypeResult);

message SetRelationshipToleranceVectorTypeRequest {
  optional CollectionObjectName relationship_name = 1;
  optional Vector vector_tolerance = 2;
}

message SetRelationshipToleranceVectorTypeResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Voxel Cloud Display

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Voxel Cloud Display](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipVoxelCloudDisplay` |
| Operation ID | `relationship_operations.set_relationship_voxel_cloud_display` |
| Route | `/briosa.RelationshipOperations/SetRelationshipVoxelCloudDisplay` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `enable_voxel_cloud_display` | `bool` | `Enable Voxel Cloud Display?` | true |
| Request | 3 | `voxel_size_1_0_autodetect` | `double` | `Voxel Size (-1.0 autodetect)` | -1.000000 |
| Request | 4 | `min_pts_count_per_voxel` | `int32` | `Min Pts Count Per Voxel` | 3 |
| Request | 5 | `voxel_rendering_diameter_1_0_fast` | `double` | `Voxel Rendering Diameter % (-1.0 fast)` | 125.000000 |
| Request | 6 | `surface_analysis_mode` | `SurfaceAnalysisMode` | `Surface Analysis Mode` | Relationship |
| Request | 7 | `colorization_options` | `Color` | `Colorization Options` | Red |
| Request | 8 | `show_color_bar_in_view` | `bool` | `Show Color Bar in View?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipVoxelCloudDisplay(SetRelationshipVoxelCloudDisplayRequest) returns (SetRelationshipVoxelCloudDisplayResult);

message SetRelationshipVoxelCloudDisplayRequest {
  optional CollectionObjectName relationship_name = 1;
  optional bool enable_voxel_cloud_display = 2;
  optional double voxel_size_1_0_autodetect = 3;
  optional int32 min_pts_count_per_voxel = 4;
  optional double voxel_rendering_diameter_1_0_fast = 5;
  optional SurfaceAnalysisMode surface_analysis_mode = 6;
  optional Color colorization_options = 7;
  optional bool show_color_bar_in_view = 8;
}

message SetRelationshipVoxelCloudDisplayResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Weighting

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Weighting](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipWeighting` |
| Operation ID | `relationship_operations.set_relationship_weighting` |
| Route | `/briosa.RelationshipOperations/SetRelationshipWeighting` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| Request | 2 | `weight` | `double` | `Weight` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipWeighting(SetRelationshipWeightingRequest) returns (SetRelationshipWeightingResult);

message SetRelationshipWeightingRequest {
  optional CollectionObjectName relationship_name = 1;
  optional double weight = 2;
}

message SetRelationshipWeightingResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Relationship Weights Normalized

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Relationship Weights Normalized](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) |
| Service | `briosa.RelationshipOperations` |
| RPC | `SetRelationshipWeightsNormalized` |
| Operation ID | `relationship_operations.set_relationship_weights_normalized` |
| Route | `/briosa.RelationshipOperations/SetRelationshipWeightsNormalized` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_name` | `CollectionName` | `Collection Name` | Required |
| Request | 2 | `pick_weighting_mode` | `RelWeightingMode` | `Pick Weighting Mode` | Normalize on equation count |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetRelationshipWeightsNormalized(SetRelationshipWeightsNormalizedRequest) returns (SetRelationshipWeightsNormalizedResult);

message SetRelationshipWeightsNormalizedRequest {
  optional CollectionName collection_name = 1;
  optional RelWeightingMode pick_weighting_mode = 2;
}

message SetRelationshipWeightsNormalizedResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
