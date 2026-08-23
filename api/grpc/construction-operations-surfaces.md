---
title: Construction Operations / Surfaces
description: Next gRPC contracts for surface construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Surfaces

:::note[Next Contracts]

These entries define the protocol that the coordinated server and clients must
implement. They are not callable until released.

:::

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## Shared Surface Dissection Mode

```proto
enum SurfaceDissectionMode {
  SURFACE_DISSECTION_MODE_UNSPECIFIED = 0;
  SURFACE_DISSECTION_MODE_ENTIRE_SOLID = 1;
  SURFACE_DISSECTION_MODE_SELECT_FACES = 2;
}
```

`UNSPECIFIED` is not accepted for an explicit request.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Construct Surfaces From Objects | `ConstructSurfacesFromObjects` | `construction_operations.construct_surfaces_from_objects` |
| Construct Surface From BSplines | `ConstructSurfaceFromBSplines` | `construction_operations.construct_surface_from_b_splines` |
| Construct Surface From Cylinder | `ConstructSurfaceFromCylinder` | `construction_operations.construct_surface_from_cylinder` |
| Construct Surface From Plane | `ConstructSurfaceFromPlane` | `construction_operations.construct_surface_from_plane` |
| Construct Surface From Sphere | `ConstructSurfaceFromSphere` | `construction_operations.construct_surface_from_sphere` |
| Construct Surface From Cone | `ConstructSurfaceFromCone` | `construction_operations.construct_surface_from_cone` |
| Construct Surface From a Collection of Surfaces | `ConstructSurfaceFromCollectionOfSurfaces` | `construction_operations.construct_surface_from_collection_of_surfaces` |
| Construct Surface Fit From Nominal Surfaces and Actual Data | `ConstructSurfaceFitFromNominalSurfacesAndActualData` | `construction_operations.construct_surface_fit_from_nominal_surfaces_and_actual_data` |
| Construct Surface by Dissecting Surface(s) | `ConstructSurfaceByDissectingSurfaces` | `construction_operations.construct_surface_by_dissecting_surfaces` |
| Construct Surfaces by Dissecting Surfaces from Ref List | `ConstructSurfacesByDissectingSurfacesFromRefList` | `construction_operations.construct_surfaces_by_dissecting_surfaces_from_ref_list` |
| Construct Surface From Point Groups | `ConstructSurfaceFromPointGroups` | `construction_operations.construct_surface_from_point_groups` |
| Construct Surfaces By Projecting Points | `ConstructSurfacesByProjectingPoints` | `construction_operations.construct_surfaces_by_projecting_points` |
| Construct surface by offsetting a surface | `ConstructSurfaceByOffsettingSurface` | `construction_operations.construct_surface_by_offsetting_surface` |
| Construct Surface From Annotation Links | `ConstructSurfaceFromAnnotationLinks` | `construction_operations.construct_surface_from_annotation_links` |
| Construct Geometry From Surfaces | `ConstructGeometryFromSurfaces` | `construction_operations.construct_geometry_from_surfaces` |

Each route is `/briosa.ConstructionOperations/<RPC>`.

## ConstructSurfacesFromObjects

```proto
message ConstructSurfacesFromObjectsRequest {
  repeated CollectionObjectName objects = 1;
}

message ConstructSurfacesFromObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

`objects` is required and maps to the exact MP argument `Objects`.

## ConstructSurfaceFromBSplines

```proto
message ConstructSurfaceFromBSplinesRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  repeated CollectionObjectName b_spline_list = 2;
}

message ConstructSurfaceFromBSplinesResult {
  MpExecutionDetails execution = 1000;
}
```

Both inputs are required. `b_spline_list` maps to exact argument `BSpline List`.

## ConstructSurfaceFromCylinder

```proto
message ConstructSurfaceFromCylinderRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  optional CollectionObjectName cylinder_name = 2;
  optional bool internal_cylinder = 3;
  optional bool use_theta_extent_mode = 4;
}

message ConstructSurfaceFromCylinderResult {
  MpExecutionDetails execution = 1000;
}
```

The identities are required. Omitted Boolean fields default to `true` and
`false`, respectively.

## ConstructSurfaceFromPlane

```proto
message ConstructSurfaceFromPlaneRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  optional CollectionObjectName plane_name = 2;
}

message ConstructSurfaceFromPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

Both identities are required.

## ConstructSurfaceFromSphere

```proto
message ConstructSurfaceFromSphereRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  optional CollectionObjectName sphere_name = 2;
}

message ConstructSurfaceFromSphereResult {
  MpExecutionDetails execution = 1000;
}
```

Both identities are required.

## ConstructSurfaceFromCone

```proto
message ConstructSurfaceFromConeRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  optional CollectionObjectName cone_name = 2;
}

message ConstructSurfaceFromConeResult {
  MpExecutionDetails execution = 1000;
}
```

Both identities are required.

## ConstructSurfaceFromCollectionOfSurfaces

```proto
message ConstructSurfaceFromCollectionOfSurfacesRequest {
  repeated CollectionObjectName surfaces_to_combine = 1;
  optional CollectionObjectName resulting_surface_name = 2;
  optional bool hide_original_surfaces = 3;
  optional bool delete_original_surfaces = 4;
  optional bool enable_sewing_tolerance = 5;
  optional double sewing_tolerance = 6;
}

message ConstructSurfaceFromCollectionOfSurfacesResult {
  MpExecutionDetails execution = 1000;
}
```

The list and resulting identity are required. Omitted settings default to
`true`, `false`, `false`, and `-1.0` in field order.

## ConstructSurfaceFitFromNominalSurfacesAndActualData

```proto
message ConstructSurfaceFitFromNominalSurfacesAndActualDataRequest {
  optional CollectionObjectName nominal_surface = 1;
  repeated PointName actual_data_point_list = 2;
  optional CollectionObjectName resulting_surface_name = 3;
}

message ConstructSurfaceFitFromNominalSurfacesAndActualDataResult {
  MpExecutionDetails execution = 1000;
}
```

All three inputs are required. `nominal_surface` maps to singular exact argument
`Nominal Surface`.

## ConstructSurfaceByDissectingSurfaces

```proto
message ConstructSurfaceByDissectingSurfacesRequest {
  optional SurfaceDissectionMode dissection_mode = 1;
}

message ConstructSurfaceByDissectingSurfacesResult {
  repeated CollectionObjectName resultant_surfaces_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The mode is required. `SELECT_FACES` is operator-interactive. The output name
preserves exact argument `Resultant Surfaces List`.

## ConstructSurfacesByDissectingSurfacesFromRefList

```proto
message ConstructSurfacesByDissectingSurfacesFromRefListRequest {
  repeated CollectionObjectName surfaces_to_dissect = 1;
}

message ConstructSurfacesByDissectingSurfacesFromRefListResult {
  repeated CollectionObjectName resultant_surfaces_list = 1;
  MpExecutionDetails execution = 1000;
}
```

The input list is required.

## ConstructSurfaceFromPointGroups

```proto
message ConstructSurfaceFromPointGroupsRequest {
  repeated CollectionObjectName group_name_list = 1;
  optional BSplineFitOptions b_spline_fit_options = 2;
  optional CollectionObjectName resulting_surface_name = 3;
}

message ConstructSurfaceFromPointGroupsResult {
  MpExecutionDetails execution = 1000;
}
```

The group list and resulting identity are required. Omitted fit options apply
the shared [`BSplineFitOptions` defaults](./construction-operations-bsplines#b-spline-fit-options-value).

## ConstructSurfacesByProjectingPoints

```proto
message ConstructSurfacesByProjectingPointsRequest {
  repeated CollectionObjectName projection_target_name_list = 1;
  repeated PointName point_list = 2;
  optional CollectionObjectName resulting_surface_name = 3;
}

message ConstructSurfacesByProjectingPointsResult {
  MpExecutionDetails execution = 1000;
}
```

All inputs are required.

## ConstructSurfaceByOffsettingSurface

```proto
message ConstructSurfaceByOffsettingSurfaceRequest {
  repeated CollectionObjectName reference_surface = 1;
  optional double surface_offset = 2;
  optional bool hide_original_surface = 3;
}

message ConstructSurfaceByOffsettingSurfaceResult {
  MpExecutionDetails execution = 1000;
}
```

The reference list is required. Omitted settings default to `0.0` and `true`.

## ConstructSurfaceFromAnnotationLinks

```proto
message ConstructSurfaceFromAnnotationLinksRequest {
  repeated CollectionObjectName annotation_list = 1;
  optional CollectionObjectName resulting_surface_name = 2;
}

message ConstructSurfaceFromAnnotationLinksResult {
  MpExecutionDetails execution = 1000;
}
```

Both inputs are required.

## ConstructGeometryFromSurfaces

```proto
message ConstructGeometryFromSurfacesRequest {
  repeated CollectionObjectName surfaces = 1;
  optional double minimum_diameter = 2;
  optional double maximum_diameter = 3;
  optional CollectionObjectName reference_frame = 4;
  optional CollectionName destination_collection_name = 5;
  optional string base_name = 6;
}

message ConstructGeometryFromSurfacesResult {
  repeated CollectionObjectName geometry_objects = 1;
  MpExecutionDetails execution = 1000;
}
```

`surfaces` is required. Diameter bounds default to `0.0`; the frame and
destination are optional; `base_name` defaults to `Geometry Object`.

:::warning[SA 2026.1 Partial Contract]

There is intentionally no `geometry_mode` field. The SDK cannot reliably set
that MP argument: tested typed and string setters failed during execution,
while omission succeeded and returned a Cylinder. This Next contract therefore
supports cylinder extraction only.

:::

Briosa performs no operation-specific geometry or cardinality prevalidation;
SpatialAnalyzer determines each MP outcome.

[Catalog](/mp-command-catalog/commands/construction-operations-surfaces) · [.NET](/api/dotnet/construction-operations-surfaces) · [Python](/api/python/construction-operations-surfaces) · [JavaScript and TypeScript](/api/javascript/construction-operations-surfaces)
