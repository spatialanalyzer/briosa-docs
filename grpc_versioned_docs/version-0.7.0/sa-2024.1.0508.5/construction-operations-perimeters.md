---
title: Construction Operations / Perimeters
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Perimeters

[SA 2026.1.0529.7](/api/grpc/construction-operations-perimeters) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-perimeters)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Perimeter From Points {/* #construct-perimeter-from-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-perimeters#construct-perimeter-from-points)

`/briosa.ConstructionOperations/ConstructPerimeterFromPoints` · Operation ID: `construction_operations.construct_perimeter_from_points`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `resulting_perimeter_name` | `optional CollectionObjectName` | Resulting Perimeter Name | Required |
| Request | 2 | `point_list` | `repeated PointName` | Point List | Required |
| Request | 3 | `open_perimeter` | `optional bool` | Open Perimeter? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructPerimeterFromPoints(ConstructPerimeterFromPointsRequest) returns (ConstructPerimeterFromPointsResult);

message ConstructPerimeterFromPointsRequest {
  optional CollectionObjectName resulting_perimeter_name = 1;
  repeated PointName point_list = 2;
  optional bool open_perimeter = 3;
}

message ConstructPerimeterFromPointsResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
