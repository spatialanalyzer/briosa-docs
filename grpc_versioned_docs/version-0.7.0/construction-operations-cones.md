---
title: Construction Operations / Cones
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Cones

[SA 2026.1.0529.7](/api/grpc/construction-operations-cones) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-cones)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Cone {/* #construct-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cone)

`/briosa.ConstructionOperations/ConstructCone` · Operation ID: `construction_operations.construct_cone`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `cone_name` | `optional CollectionObjectName` | Cone Name | Required |
| Request | 2 | `cone_end_point` | `optional Vector` | Cone End Point (in working coordinates) | Required |
| Request | 3 | `cone_axis` | `optional Vector` | Cone Axis (in working coordinates) | Required |
| Request | 4 | `cone_length` | `optional double` | Cone Length | 0.000000 |
| Request | 5 | `cone_theta_start` | `optional double` | Cone Theta Start | 0.000000 |
| Request | 6 | `cone_theta_span` | `optional double` | Cone Theta Span | 0.000000 |
| Request | 7 | `cone_included_angle` | `optional double` | Cone Included Angle | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCone(ConstructConeRequest) returns (ConstructConeResult);

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

## Construct Cones From Surface Faces - Runtime Select {/* #construct-cones-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructConesFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_cones_from_surface_faces_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructConesFromSurfaceFacesRuntimeSelect(ConstructConesFromSurfaceFacesRuntimeSelectRequest) returns (ConstructConesFromSurfaceFacesRuntimeSelectResult);

message ConstructConesFromSurfaceFacesRuntimeSelectRequest {}

message ConstructConesFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
