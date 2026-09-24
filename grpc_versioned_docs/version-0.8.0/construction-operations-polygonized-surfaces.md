---
title: Construction Operations / Polygonized Surfaces
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Polygonized Surfaces

[SA 2026.1.0529.7](/api/grpc/construction-operations-polygonized-surfaces) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-polygonized-surfaces)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Polygonized Surface from Point Clouds {/* #construct-polygonized-surface-from-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-polygonized-surfaces#construct-polygonized-surface-from-point-clouds)

`/briosa.ConstructionOperations/ConstructPolygonizedSurfaceFromPointClouds` · Operation ID: `construction_operations.construct_polygonized_surface_from_point_clouds`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_cloud_list` | `repeated CollectionObjectName` | Point Cloud List | Required |
| Request | 2 | `mesh_orientation` | `optional MeshOrientationType` | Mesh Orientation | Required |
| Request | 3 | `grid_resolution` | `optional double` | Grid Resolution | 0 |
| Request | 4 | `polygonized_surface_name` | `optional CollectionObjectName` | Polygonized Surface Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPolygonizedSurfaceFromPointClouds(ConstructPolygonizedSurfaceFromPointCloudsRequest) returns (ConstructPolygonizedSurfaceFromPointCloudsResult);

message ConstructPolygonizedSurfaceFromPointCloudsRequest {
  repeated CollectionObjectName point_cloud_list = 1;
  optional MeshOrientationType mesh_orientation = 2;
  optional double grid_resolution = 3;
  optional CollectionObjectName polygonized_surface_name = 4;
}

message ConstructPolygonizedSurfaceFromPointCloudsResult {
  MpExecutionDetails execution = 1000;
}
```

## Shared Type {/* #shared-type */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructPolygonizedSurfaceFromPointClouds {/* #constructpolygonizedsurfacefrompointclouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
