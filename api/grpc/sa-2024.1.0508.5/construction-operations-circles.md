---
title: Construction Operations / Circles
description: Released grpc 0.10.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Circles

[SA 2026.1.0529.7](/api/grpc/construction-operations-circles) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-circles)

This reference covers **SA 2024.1.0508.5**, Server **0.10.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Circle {/* #construct-circle */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circle)

`/briosa.ConstructionOperations/ConstructCircle` · Operation ID: `construction_operations.construct_circle`

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `circle_name` | `optional CollectionObjectName` | Circle Name | Required |
| Request | 2 | `circle_center` | `optional Vector` | Circle Center (in working coordinates) | Required |
| Request | 3 | `circle_normal` | `optional Vector` | Circle Normal (in working coordinates) | Required |
| Request | 4 | `circle_radius` | `optional double` | Circle Radius | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCircle(ConstructCircleRequest) returns (ConstructCircleResult);

message ConstructCircleRequest {
  optional CollectionObjectName circle_name = 1;
  optional Vector circle_center = 2;
  optional Vector circle_normal = 3;
  optional double circle_radius = 4;
}

message ConstructCircleResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Circles From Surface Faces - Runtime Select {/* #construct-circles-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)

`/briosa.ConstructionOperations/ConstructCirclesFromSurfaceFacesRuntimeSelect` · Operation ID: `construction_operations.construct_circles_from_surface_faces_runtime_select`

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructCirclesFromSurfaceFacesRuntimeSelect(ConstructCirclesFromSurfaceFacesRuntimeSelectRequest) returns (ConstructCirclesFromSurfaceFacesRuntimeSelectResult);

message ConstructCirclesFromSurfaceFacesRuntimeSelectRequest {}

message ConstructCirclesFromSurfaceFacesRuntimeSelectResult {
  MpExecutionDetails execution = 1000;
}
```

## Construct Circles (Lines) From Surfaces {/* #construct-circles-lines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-lines-from-surfaces)

Contract major 3 removed this operation from Server 0.10.0. SpatialAnalyzer returned MP code -1 for both the Circle and the Line mode on both exact targets. No replacement extracts circles or lines from surfaces on these exact targets. No released signature
is available in this release. Server 0.9.2 and earlier keep it; its method history shows that contract.

[Candidate Source](https://github.com/spatialanalyzer/briosa/tree/2960705eb3152646513dca2b5d2043cd7cfffb75/targets/2024.1.0508.5)
