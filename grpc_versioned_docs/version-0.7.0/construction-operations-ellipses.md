---
title: Construction Operations / Ellipses
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Ellipses

[SA 2026.1.0529.7](/api/grpc/construction-operations-ellipses) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-ellipses)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Ellipse {/* #construct-ellipse */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-ellipses#construct-ellipse)

`/briosa.ConstructionOperations/ConstructEllipse` · Operation ID: `construction_operations.construct_ellipse`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ellipse_name` | `optional CollectionObjectName` | Ellipse Name | Required |
| Request | 2 | `center_coordinate` | `optional Vector` | Center Coordinate | Required |
| Request | 3 | `normal_direction` | `optional Vector` | Normal Direction | Required |
| Request | 4 | `major_axis_radius` | `optional double` | Major Axis Radius | 0.000000 |
| Request | 5 | `minor_axis_radius` | `optional double` | Minor Axis Radius | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructEllipse(ConstructEllipseRequest) returns (ConstructEllipseResult);

message ConstructEllipseRequest {
  optional CollectionObjectName ellipse_name = 1;
  optional Vector center_coordinate = 2;
  optional Vector normal_direction = 3;
  optional double major_axis_radius = 4;
  optional double minor_axis_radius = 5;
}

message ConstructEllipseResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
