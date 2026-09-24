---
title: Construction Operations / Ellipsoids
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

[SA 2026.1.0529.7](/api/grpc/construction-operations-ellipsoids) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-ellipsoids)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Ellipsoid {/* #construct-ellipsoid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-ellipsoids#construct-ellipsoid)

`/briosa.ConstructionOperations/ConstructEllipsoid` · Operation ID: `construction_operations.construct_ellipsoid`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ellipse_name` | `optional CollectionObjectName` | Ellipse Name | Required |
| Request | 2 | `x_axis_radius` | `optional double` | X-Axis Radius | 5.000000 |
| Request | 3 | `y_axis_radius` | `optional double` | Y-Axis Radius | 4.000000 |
| Request | 4 | `z_axis_radius` | `optional double` | Z-Axis Radius | 3.000000 |
| Request | 5 | `magnification` | `optional double` | Magnification | 1.000000 |
| Request | 6 | `uncertainty_ellipsoid` | `optional bool` | Uncertainty Ellipsoid? | false |
| Request | 7 | `transform_in_working_coordinates` | `optional Transform` | Transform in Working Coordinates | Required |
| Request | 8 | `ellipse_color` | `optional Color` | Ellipse Color | Message defaults |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructEllipsoid(ConstructEllipsoidRequest) returns (ConstructEllipsoidResult);

message ConstructEllipsoidRequest {
  optional CollectionObjectName ellipse_name = 1;
  optional double x_axis_radius = 2;
  optional double y_axis_radius = 3;
  optional double z_axis_radius = 4;
  optional double magnification = 5;
  optional bool uncertainty_ellipsoid = 6;
  optional Transform transform_in_working_coordinates = 7;
  optional Color ellipse_color = 8;
}

message ConstructEllipsoidResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
