---
title: Construction Operations / Cylinders
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Cylinders

[SA 2026.1.0529.7](/api/grpc/construction-operations-cylinders) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-cylinders)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Cylinder {/* #construct-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinder)

`/briosa.ConstructionOperations/ConstructCylinder` · Operation ID: `construction_operations.construct_cylinder`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cylinder_name` | `optional CollectionObjectName` | Cylinder Name | Required |
| Request | 2 | `cylinder_end_point` | `optional Vector` | Cylinder End Point (in working coordinates) | Required |
| Request | 3 | `cylinder_axis` | `optional Vector` | Cylinder Axis (in working coordinates) | Required |
| Request | 4 | `cylinder_diameter` | `optional double` | Cylinder Diameter | 0.000000 |
| Request | 5 | `cylinder_length` | `optional double` | Cylinder Length | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCylinder(ConstructCylinderRequest) returns (ConstructCylinderResult);

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

## Construct Cylinder From End Points {/* #construct-cylinder-from-end-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinder-from-end-points)

`/briosa.ConstructionOperations/ConstructCylinderFromEndPoints` · Operation ID: `construction_operations.construct_cylinder_from_end_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cylinder_name` | `optional CollectionObjectName` | Cylinder Name | Required |
| Request | 2 | `cylinder_end_point_a` | `optional Vector` | Cylinder End Point A (in working coordinates) | Required |
| Request | 3 | `cylinder_end_point_b` | `optional Vector` | Cylinder End Point B (in working coordinates) | Required |
| Request | 4 | `cylinder_diameter` | `optional double` | Cylinder Diameter | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCylinderFromEndPoints(ConstructCylinderFromEndPointsRequest) returns (ConstructCylinderFromEndPointsResult);

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

## Construct Cylinders From Surface Faces - Runtime Select {/* #construct-cylinders-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructCylindersFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_cylinders_from_surface_faces_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCylindersFromSurfaceFacesRuntimeSelect(ConstructCylindersFromSurfaceFacesRuntimeSelectRequest) returns (ConstructCylindersFromSurfaceFacesRuntimeSelectResult);

message ConstructCylindersFromSurfaceFacesRuntimeSelectRequest {}

message ConstructCylindersFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
