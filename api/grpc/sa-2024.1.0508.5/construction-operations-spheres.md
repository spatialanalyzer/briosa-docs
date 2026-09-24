---
title: Construction Operations / Spheres
description: Unreleased grpc 0.8.0-dev.1 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Spheres

[SA 2026.1.0529.7](/api/grpc/construction-operations-spheres) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-spheres)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0-dev.1** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Sphere {/* #construct-sphere */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-spheres#construct-sphere)

`/briosa.ConstructionOperations/ConstructSphere` · Operation ID: `construction_operations.construct_sphere`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sphere_name` | `optional CollectionObjectName` | Sphere Name | Required |
| Request | 2 | `sphere_center` | `optional Vector` | Sphere Center (in working coordinates) | Required |
| Request | 3 | `sphere_radius` | `optional double` | Sphere Radius | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSphere(ConstructSphereRequest) returns (ConstructSphereResult);

message ConstructSphereRequest {
  optional CollectionObjectName sphere_name = 1;
  optional Vector sphere_center = 2;
  optional double sphere_radius = 3;
}

message ConstructSphereResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `sphere_center` | Expressed in working coordinates. |

## Construct Spheres From Surface Faces - Runtime Select {/* #construct-spheres-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-spheres#construct-spheres-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructSpheresFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_spheres_from_surface_faces_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructSpheresFromSurfaceFacesRuntimeSelect(ConstructSpheresFromSurfaceFacesRuntimeSelectRequest) returns (ConstructSpheresFromSurfaceFacesRuntimeSelectResult);

message ConstructSpheresFromSurfaceFacesRuntimeSelectRequest {}

message ConstructSpheresFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSphere {/* #constructsphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSpheresFromSurfaceFacesRuntimeSelect {/* #constructspheresfromsurfacefacesruntimeselect */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa/tree/3306d43253a1e4e41b75b83360ad4f6f2b7f60b7/targets/2024.1.0508.5)
