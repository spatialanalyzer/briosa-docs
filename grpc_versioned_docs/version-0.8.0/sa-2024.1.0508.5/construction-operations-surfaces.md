---
title: Construction Operations / Surfaces
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Surfaces

[SA 2026.1.0529.7](/api/grpc/construction-operations-surfaces) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Surfaces From Objects {/* #construct-surfaces-from-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-from-objects)

`/briosa.ConstructionOperations/ConstructSurfacesFromObjects` · Operation ID: `construction_operations.construct_surfaces_from_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfacesFromObjects(ConstructSurfacesFromObjectsRequest) returns (ConstructSurfacesFromObjectsResult);

message ConstructSurfacesFromObjectsRequest {
  repeated CollectionObjectName objects = 1;
}

message ConstructSurfacesFromObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Surface From BSplines {/* #construct-surface-from-bsplines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-bsplines)

`/briosa.ConstructionOperations/ConstructSurfaceFromBSplines` · Operation ID: `construction_operations.construct_surface_from_b_splines`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Request | 2 | `b_spline_list` | `repeated CollectionObjectName` | BSpline List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFromBSplines(ConstructSurfaceFromBSplinesRequest) returns (ConstructSurfaceFromBSplinesResult);

message ConstructSurfaceFromBSplinesRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  repeated CollectionObjectName b_spline_list = 2;
}

message ConstructSurfaceFromBSplinesResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Surface From Cylinder {/* #construct-surface-from-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-cylinder)

`/briosa.ConstructionOperations/ConstructSurfaceFromCylinder` · Operation ID: `construction_operations.construct_surface_from_cylinder`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Request | 2 | `cylinder_name` | `optional CollectionObjectName` | Cylinder Name | Required |
| Request | 3 | `internal_cylinder` | `optional bool` | Internal Cylinder? | true |
| Request | 4 | `use_theta_extent_mode` | `optional bool` | Use Theta Extent Mode? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFromCylinder(ConstructSurfaceFromCylinderRequest) returns (ConstructSurfaceFromCylinderResult);

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

## Construct Surface From Plane {/* #construct-surface-from-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-plane)

`/briosa.ConstructionOperations/ConstructSurfaceFromPlane` · Operation ID: `construction_operations.construct_surface_from_plane`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Request | 2 | `plane_name` | `optional CollectionObjectName` | Plane Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFromPlane(ConstructSurfaceFromPlaneRequest) returns (ConstructSurfaceFromPlaneResult);

message ConstructSurfaceFromPlaneRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  optional CollectionObjectName plane_name = 2;
}

message ConstructSurfaceFromPlaneResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Surface From Sphere {/* #construct-surface-from-sphere */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-sphere)

`/briosa.ConstructionOperations/ConstructSurfaceFromSphere` · Operation ID: `construction_operations.construct_surface_from_sphere`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Request | 2 | `sphere_name` | `optional CollectionObjectName` | Sphere Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFromSphere(ConstructSurfaceFromSphereRequest) returns (ConstructSurfaceFromSphereResult);

message ConstructSurfaceFromSphereRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  optional CollectionObjectName sphere_name = 2;
}

message ConstructSurfaceFromSphereResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Surface From Cone {/* #construct-surface-from-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-cone)

`/briosa.ConstructionOperations/ConstructSurfaceFromCone` · Operation ID: `construction_operations.construct_surface_from_cone`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Request | 2 | `cone_name` | `optional CollectionObjectName` | Cone Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFromCone(ConstructSurfaceFromConeRequest) returns (ConstructSurfaceFromConeResult);

message ConstructSurfaceFromConeRequest {
  optional CollectionObjectName resulting_surface_name = 1;
  optional CollectionObjectName cone_name = 2;
}

message ConstructSurfaceFromConeResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Surface From a Collection of Surfaces {/* #construct-surface-from-a-collection-of-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-a-collection-of-surfaces)

`/briosa.ConstructionOperations/ConstructSurfaceFromCollectionOfSurfaces` · Operation ID: `construction_operations.construct_surface_from_collection_of_surfaces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surfaces_to_combine` | `repeated CollectionObjectName` | Surfaces to Combine | Required |
| Request | 2 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Request | 3 | `hide_original_surfaces` | `optional bool` | Hide Original Surfaces? | true |
| Request | 4 | `delete_original_surfaces` | `optional bool` | Delete Original Surfaces? | false |
| Request | 5 | `enable_sewing_tolerance` | `optional bool` | Enable Sewing Tolerance? | false |
| Request | 6 | `sewing_tolerance` | `optional double` | Sewing Tolerance | -1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFromCollectionOfSurfaces(ConstructSurfaceFromCollectionOfSurfacesRequest) returns (ConstructSurfaceFromCollectionOfSurfacesResult);

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

## Construct Surface Fit From Nominal Surfaces and Actual Data {/* #construct-surface-fit-from-nominal-surfaces-and-actual-data */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-fit-from-nominal-surfaces-and-actual-data)

`/briosa.ConstructionOperations/ConstructSurfaceFitFromNominalSurfacesAndActualData` · Operation ID: `construction_operations.construct_surface_fit_from_nominal_surfaces_and_actual_data`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `nominal_surface` | `optional CollectionObjectName` | Nominal Surface | Required |
| Request | 2 | `actual_data_point_list` | `repeated PointName` | Actual Data Point List | Required |
| Request | 3 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFitFromNominalSurfacesAndActualData(ConstructSurfaceFitFromNominalSurfacesAndActualDataRequest) returns (ConstructSurfaceFitFromNominalSurfacesAndActualDataResult);

message ConstructSurfaceFitFromNominalSurfacesAndActualDataRequest {
  optional CollectionObjectName nominal_surface = 1;
  repeated PointName actual_data_point_list = 2;
  optional CollectionObjectName resulting_surface_name = 3;
}

message ConstructSurfaceFitFromNominalSurfacesAndActualDataResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Surface by Dissecting Surface(s) {/* #construct-surface-by-dissecting-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-by-dissecting-surfaces)

`/briosa.ConstructionOperations/ConstructSurfaceByDissectingSurfaces` · Operation ID: `construction_operations.construct_surface_by_dissecting_surfaces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dissection_mode` | `optional SurfaceDissectionMode` | Dissection Mode | Required |
| Result | 1 | `resultant_surfaces_list` | `repeated CollectionObjectName` | Resultant Surfaces List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceByDissectingSurfaces(ConstructSurfaceByDissectingSurfacesRequest) returns (ConstructSurfaceByDissectingSurfacesResult);

message ConstructSurfaceByDissectingSurfacesRequest {
  optional SurfaceDissectionMode dissection_mode = 1;
}

message ConstructSurfaceByDissectingSurfacesResult {
  repeated CollectionObjectName resultant_surfaces_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct Surfaces by Dissecting Surfaces from Ref List {/* #construct-surfaces-by-dissecting-surfaces-from-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-by-dissecting-surfaces-from-ref-list)

`/briosa.ConstructionOperations/ConstructSurfacesByDissectingSurfacesFromRefList` · Operation ID: `construction_operations.construct_surfaces_by_dissecting_surfaces_from_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surfaces_to_dissect` | `repeated CollectionObjectName` | Surfaces to Dissect | Required |
| Result | 1 | `resultant_surfaces_list` | `repeated CollectionObjectName` | Resultant Surfaces List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfacesByDissectingSurfacesFromRefList(ConstructSurfacesByDissectingSurfacesFromRefListRequest) returns (ConstructSurfacesByDissectingSurfacesFromRefListResult);

message ConstructSurfacesByDissectingSurfacesFromRefListRequest {
  repeated CollectionObjectName surfaces_to_dissect = 1;
}

message ConstructSurfacesByDissectingSurfacesFromRefListResult {
  repeated CollectionObjectName resultant_surfaces_list = 1;
  MpExecutionDetails execution = 1000;
}
```

## Construct Surface From Point Groups {/* #construct-surface-from-point-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-point-groups)

`/briosa.ConstructionOperations/ConstructSurfaceFromPointGroups` · Operation ID: `construction_operations.construct_surface_from_point_groups`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `group_name_list` | `repeated CollectionObjectName` | Group Name List | Required |
| Request | 2 | `b_spline_fit_options` | `optional BSplineFitOptions` | B-Spline Fit Options | Message defaults |
| Request | 3 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFromPointGroups(ConstructSurfaceFromPointGroupsRequest) returns (ConstructSurfaceFromPointGroupsResult);

message ConstructSurfaceFromPointGroupsRequest {
  repeated CollectionObjectName group_name_list = 1;
  optional BSplineFitOptions b_spline_fit_options = 2;
  optional CollectionObjectName resulting_surface_name = 3;
}

message ConstructSurfaceFromPointGroupsResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Surfaces By Projecting Points {/* #construct-surfaces-by-projecting-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-by-projecting-points)

`/briosa.ConstructionOperations/ConstructSurfacesByProjectingPoints` · Operation ID: `construction_operations.construct_surfaces_by_projecting_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `projection_target_name_list` | `repeated CollectionObjectName` | Projection Target Name List | Required |
| Request | 2 | `point_list` | `repeated PointName` | Point List | Required |
| Request | 3 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfacesByProjectingPoints(ConstructSurfacesByProjectingPointsRequest) returns (ConstructSurfacesByProjectingPointsResult);

message ConstructSurfacesByProjectingPointsRequest {
  repeated CollectionObjectName projection_target_name_list = 1;
  repeated PointName point_list = 2;
  optional CollectionObjectName resulting_surface_name = 3;
}

message ConstructSurfacesByProjectingPointsResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct surface by offsetting a surface {/* #construct-surface-by-offsetting-a-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-by-offsetting-a-surface)

`/briosa.ConstructionOperations/ConstructSurfaceByOffsettingSurface` · Operation ID: `construction_operations.construct_surface_by_offsetting_surface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `reference_surface` | `repeated CollectionObjectName` | Reference Surface | Required |
| Request | 2 | `surface_offset` | `optional double` | Surface offset | 0.000000 |
| Request | 3 | `hide_original_surface` | `optional bool` | Hide original surface? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceByOffsettingSurface(ConstructSurfaceByOffsettingSurfaceRequest) returns (ConstructSurfaceByOffsettingSurfaceResult);

message ConstructSurfaceByOffsettingSurfaceRequest {
  repeated CollectionObjectName reference_surface = 1;
  optional double surface_offset = 2;
  optional bool hide_original_surface = 3;
}

message ConstructSurfaceByOffsettingSurfaceResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Surface From Annotation Links {/* #construct-surface-from-annotation-links */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-annotation-links)

`/briosa.ConstructionOperations/ConstructSurfaceFromAnnotationLinks` · Operation ID: `construction_operations.construct_surface_from_annotation_links`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `annotation_list` | `repeated CollectionObjectName` | Annotation List | Required |
| Request | 2 | `resulting_surface_name` | `optional CollectionObjectName` | Resulting Surface Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSurfaceFromAnnotationLinks(ConstructSurfaceFromAnnotationLinksRequest) returns (ConstructSurfaceFromAnnotationLinksResult);

message ConstructSurfaceFromAnnotationLinksRequest {
  repeated CollectionObjectName annotation_list = 1;
  optional CollectionObjectName resulting_surface_name = 2;
}

message ConstructSurfaceFromAnnotationLinksResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Geometry From Surfaces {/* #construct-geometry-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-geometry-from-surfaces)

`/briosa.ConstructionOperations/ConstructGeometryFromSurfaces` · Operation ID: `construction_operations.construct_geometry_from_surfaces`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surfaces` | `repeated CollectionObjectName` | Surfaces | Required |
| Request | 2 | `minimum_diameter` | `optional double` | Minimum Diameter | 0 |
| Request | 3 | `maximum_diameter` | `optional double` | Maximum Diameter | 0 |
| Request | 4 | `reference_frame` | `optional CollectionObjectName` | Reference Frame | Omitted |
| Request | 5 | `destination_collection_name` | `optional CollectionName` | Destination Collection Name | Omitted |
| Request | 6 | `base_name` | `optional string` | Base Name | Geometry Object |
| Result | 1 | `geometry_objects` | `repeated CollectionObjectName` | Geometry Objects | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructGeometryFromSurfaces(ConstructGeometryFromSurfacesRequest) returns (ConstructGeometryFromSurfacesResult);

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

## Shared Surface Dissection Mode {/* #shared-surface-dissection-mode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfacesFromObjects {/* #constructsurfacesfromobjects */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromBSplines {/* #constructsurfacefrombsplines */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromCylinder {/* #constructsurfacefromcylinder */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromPlane {/* #constructsurfacefromplane */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromSphere {/* #constructsurfacefromsphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromCone {/* #constructsurfacefromcone */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromCollectionOfSurfaces {/* #constructsurfacefromcollectionofsurfaces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFitFromNominalSurfacesAndActualData {/* #constructsurfacefitfromnominalsurfacesandactualdata */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceByDissectingSurfaces {/* #constructsurfacebydissectingsurfaces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfacesByDissectingSurfacesFromRefList {/* #constructsurfacesbydissectingsurfacesfromreflist */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromPointGroups {/* #constructsurfacefrompointgroups */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfacesByProjectingPoints {/* #constructsurfacesbyprojectingpoints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceByOffsettingSurface {/* #constructsurfacebyoffsettingsurface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromAnnotationLinks {/* #constructsurfacefromannotationlinks */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructGeometryFromSurfaces {/* #constructgeometryfromsurfaces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2024.1.0508.5)
