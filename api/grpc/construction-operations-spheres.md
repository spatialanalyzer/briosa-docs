---
title: Construction Operations / Spheres
description: Next gRPC contracts for sphere construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Spheres

Both RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Construct Sphere | `ConstructSphere` | `construction_operations.construct_sphere` |
| Construct Spheres From Surface Faces - Runtime Select | `ConstructSpheresFromSurfaceFacesRuntimeSelect` | `construction_operations.construct_spheres_from_surface_faces_runtime_select` |

Each route is `/briosa.ConstructionOperations/<RPC>`.

## ConstructSphere

```proto
message ConstructSphereRequest {
  optional CollectionObjectName sphere_name = 1;
  optional Vector sphere_center_in_working_coordinates = 2;
  optional double sphere_radius = 3;
}

message ConstructSphereResult {
  MpExecutionDetails execution = 1000;
}
```

All three fields are required. Briosa adds no radius validation.

## ConstructSpheresFromSurfaceFacesRuntimeSelect

```proto
message ConstructSpheresFromSurfaceFacesRuntimeSelectRequest {}

message ConstructSpheresFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

The operator selects CAD faces in SpatialAnalyzer. Escape is represented by the
MP failure result. A deadline or cancellation does not prove the interaction
stopped.

[Catalog](/mp-command-catalog/commands/construction-operations-spheres) · [.NET](/api/dotnet/construction-operations-spheres) · [Python](/api/python/construction-operations-spheres) · [JavaScript and TypeScript](/api/javascript/construction-operations-spheres)
