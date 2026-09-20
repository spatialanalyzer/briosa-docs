---
title: Construction Operations / Polygonized Surfaces
description: Released gRPC contract for polygonized-surface construction.
toc_max_heading_level: 2
---

# Construction Operations / Polygonized Surfaces

## Shared Type

```proto
enum MeshOrientationType {
  MESH_ORIENTATION_TYPE_UNSPECIFIED = 0;
  MESH_ORIENTATION_TYPE_USE_CURRENT_POINT_OF_VIEW = 1;
  MESH_ORIENTATION_TYPE_USE_CURRENT_WORKING_FRAME = 2;
}
```

Unspecified and unknown values fail closed because the exact MP export does not
contain a valid orientation default.

## ConstructPolygonizedSurfaceFromPointClouds

| Property | Value |
| --- | --- |
| Service | `briosa.ConstructionOperations` |
| Route | `/briosa.ConstructionOperations/ConstructPolygonizedSurfaceFromPointClouds` |
| Operation ID | `construction_operations.construct_polygonized_surface_from_point_clouds` |
| MP Command | `Construct Polygonized Surface from Point Clouds` |

```proto
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

The Point Cloud list, mesh orientation, and destination identity are required.
Grid resolution defaults to `0.0`. The working-frame option uses the current
working frame's Z axis. This operation depends on live SA state, may mutate the
current job, and is never automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-polygonized-surfaces) · [.NET](/api/dotnet/0.1.0/construction-operations-polygonized-surfaces) · [Python](/api/python/0.1.0/construction-operations-polygonized-surfaces) · [JavaScript and TypeScript](/api/javascript/0.1.0/construction-operations-polygonized-surfaces)
