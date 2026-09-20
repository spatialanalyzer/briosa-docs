---
title: Construction Operations / Scale Bars
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Scale Bars

[SA 2026.1.0529.7](/api/grpc/construction-operations-scale-bars) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-scale-bars)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Scale Bar {/* #construct-scale-bar */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-scale-bars#construct-scale-bar)

`/briosa.ConstructionOperations/ConstructScaleBar` · Operation ID: `construction_operations.construct_scale_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `scale_bar_name` | `optional CollectionItemName` | Scale Bar Name | Required |
| Request | 2 | `begin_target` | `optional PointName` | Begin Target | Required |
| Request | 3 | `end_target` | `optional PointName` | End Target | Required |
| Request | 4 | `length` | `optional double` | Length | 0 |
| Request | 5 | `uncertainty` | `optional double` | Uncertainty | 0 |
| Request | 6 | `use_relative_tolerances` | `optional bool` | Use Relative Tolerances? | true |
| Request | 7 | `use_high_tolerances` | `optional bool` | Use High Tolerances? | false |
| Request | 8 | `use_low_tolerances` | `optional bool` | Use Low Tolerances? | false |
| Request | 9 | `high_tolerance` | `optional double` | High Tolerance | 0 |
| Request | 10 | `low_tolerance` | `optional double` | Low Tolerance | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ConstructScaleBar(ConstructScaleBarRequest) returns (ConstructScaleBarResult);

message ConstructScaleBarRequest {
  optional CollectionItemName scale_bar_name = 1;
  optional PointName begin_target = 2;
  optional PointName end_target = 3;
  optional double length = 4;
  optional double uncertainty = 5;
  optional bool use_relative_tolerances = 6;
  optional bool use_high_tolerances = 7;
  optional bool use_low_tolerances = 8;
  optional double high_tolerance = 9;
  optional double low_tolerance = 10;
}

message ConstructScaleBarResult {
  MpExecutionDetails execution = 1000;
}
```

## ConstructScaleBar {/* #constructscalebar */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
