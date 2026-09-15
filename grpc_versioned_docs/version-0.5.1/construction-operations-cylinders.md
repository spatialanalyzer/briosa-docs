---
title: Construction Operations / Cylinders
description: Released gRPC contracts for selected cylinder-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Cylinders

All RPCs use `briosa.ConstructionOperations`, return
`MpExecutionDetails execution = 1000`, and are never automatically replayed.
Geometry values are passed through without Briosa-specific range validation.

## Construct Cylinder

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `ConstructCylinder` |
| Operation ID | `construction_operations.construct_cylinder` |
| Route | `/briosa.ConstructionOperations/ConstructCylinder` |
| Validation | At Risk - fixture validation required |

```proto
message ConstructCylinderRequest {
  optional CollectionObjectName cylinder_name = 1;
  optional Vector cylinder_end_point = 2;
  optional Vector cylinder_axis = 3;
  optional double cylinder_diameter = 4;
  optional double cylinder_length = 5;
}
message ConstructCylinderResult {
  MpExecutionDetails execution = 1000;
}
```

Every field is required, and `cylinder_name` must identify a Cylinder. The
server passes all supplied geometry values to the exact MP arguments unchanged.

## Construct Cylinder From End Points

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `ConstructCylinderFromEndPoints` |
| Operation ID | `construction_operations.construct_cylinder_from_end_points` |
| Route | `/briosa.ConstructionOperations/ConstructCylinderFromEndPoints` |
| Validation | At Risk - fixture validation required |

```proto
message ConstructCylinderFromEndPointsRequest {
  optional CollectionObjectName cylinder_name = 1;
  optional Vector cylinder_end_point_a = 2;
  optional Vector cylinder_end_point_b = 3;
  optional double cylinder_diameter = 4;
}
message ConstructCylinderFromEndPointsResult {
  MpExecutionDetails execution = 1000;
}
```

Every field is required. Coincident endpoints and any supplied diameter are
passed through for SpatialAnalyzer to evaluate.

## Construct Cylinders From Surface Faces - Runtime Select

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `ConstructCylindersFromSurfaceFacesRuntimeSelect` |
| Operation ID | `construction_operations.construct_cylinders_from_surface_faces_runtime_select` |
| Route | `/briosa.ConstructionOperations/ConstructCylindersFromSurfaceFacesRuntimeSelect` |
| Validation | At Risk - interactive fixture validation required |

The request is empty and the result contains execution details. The operator
selects faces in SpatialAnalyzer; cancellation does not prove the interaction
stopped.
