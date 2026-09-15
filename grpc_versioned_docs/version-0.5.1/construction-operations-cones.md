---
title: Construction Operations / Cones
description: Released gRPC contracts for selected cone-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Cones

Both RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and are never automatically replayed.

## Construct Cone

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `ConstructCone` |
| Operation ID | `construction_operations.construct_cone` |
| Route | `/briosa.ConstructionOperations/ConstructCone` |
| Validation | At Risk - fixture validation required |

```proto
message ConstructConeRequest {
  optional CollectionObjectName cone_name = 1;
  optional Vector cone_end_point = 2;
  optional Vector cone_axis = 3;
  optional double cone_length = 4;
  optional double cone_theta_start = 5;
  optional double cone_theta_span = 6;
  optional double cone_included_angle = 7;
}
message ConstructConeResult {
  MpExecutionDetails execution = 1000;
}
```

Every field is required, and `cone_name` must identify a Cone. The server
passes the geometry values through without Briosa-specific range validation;
SpatialAnalyzer determines the execution outcome.

## Construct Cones From Surface Faces - Runtime Select

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `ConstructConesFromSurfaceFacesRuntimeSelect` |
| Operation ID | `construction_operations.construct_cones_from_surface_faces_runtime_select` |
| Route | `/briosa.ConstructionOperations/ConstructConesFromSurfaceFacesRuntimeSelect` |
| Validation | At Risk - interactive fixture validation required |

The request is empty and the result contains execution details. The operator
selects faces in SpatialAnalyzer; cancellation does not prove the interaction
stopped.
