---
title: Scale Bar Operations
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Scale Bar Operations

[SA 2026.1.0529.7](/api/grpc/scale-bar-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/scale-bar-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Scale Bar {/* #delete-scale-bar */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#delete-scale-bar)

`/briosa.ScaleBarOperations/DeleteScaleBar` · Operation ID: `scale_bar_operations.delete_scale_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `scale_bar_name` | `optional CollectionObjectName` | Scale Bar Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteScaleBar(DeleteScaleBarRequest) returns (DeleteScaleBarResult);

message DeleteScaleBarRequest {
  optional CollectionObjectName scale_bar_name = 1;
}

message DeleteScaleBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Scale Bar Stats {/* #get-scale-bar-stats */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#get-scale-bar-stats)

`/briosa.ScaleBarOperations/GetScaleBarStats` · Operation ID: `scale_bar_operations.get_scale_bar_stats`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `scale_bar_name` | `optional CollectionObjectName` | Scale Bar Name | Required |
| Result | 1 | `nominal_length` | `optional double` | Nominal Length | — |
| Result | 2 | `actual_length` | `optional double` | Actual Length | — |
| Result | 3 | `deviation` | `optional double` | Deviation | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetScaleBarStats(GetScaleBarStatsRequest) returns (GetScaleBarStatsResult);

message GetScaleBarStatsRequest {
  optional CollectionObjectName scale_bar_name = 1;
}

message GetScaleBarStatsResult {
  optional double nominal_length = 1;
  optional double actual_length = 2;
  optional double deviation = 3;
  MpExecutionDetails execution = 1000;
}
```

## Scale Bar Check {/* #scale-bar-check */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#scale-bar-check)

`/briosa.ScaleBarOperations/ScaleBarCheck` · Operation ID: `scale_bar_operations.scale_bar_check`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `scale_bar_point_a` | `optional PointName` | ScaleBar Point A | Required |
| Request | 2 | `scale_bar_point_b` | `optional PointName` | ScaleBar Point B | Required |
| Request | 3 | `current_temperature` | `optional double` | Current Temperature (F) | 0.000000 |
| Request | 4 | `length_of_bar_at_68f` | `optional double` | Length of Bar at 68F | 0.000000 |
| Request | 5 | `material_cte` | `optional double` | Material CTE (PPM/F) | 0.000000 |
| Request | 6 | `tolerance` | `optional double` | Tolerance | 0.000000 |
| Result | 1 | `deviation_at_68f` | `optional double` | Deviation at 68F | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ScaleBarCheck(ScaleBarCheckRequest) returns (ScaleBarCheckResult);

message ScaleBarCheckRequest {
  optional PointName scale_bar_point_a = 1;
  optional PointName scale_bar_point_b = 2;
  optional double current_temperature = 3;
  optional double length_of_bar_at_68f = 4;
  optional double material_cte = 5;
  optional double tolerance = 6;
}

message ScaleBarCheckResult {
  optional double deviation_at_68f = 1;
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `current_temperature` | Temperature in degrees Fahrenheit. |
| `material_cte` | Coefficient in parts per million per degree Fahrenheit. |

## Set Inward Positive Normal {/* #set-inward-positive-normal */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#set-inward-positive-normal)

`/briosa.ScaleBarOperations/SetInwardPositiveNormal` · Operation ID: `scale_bar_operations.set_inward_positive_normal`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Request | 2 | `inward_positive` | `optional bool` | Inward Positive? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetInwardPositiveNormal(SetInwardPositiveNormalRequest) returns (SetInwardPositiveNormalResult);

message SetInwardPositiveNormalRequest {
  optional CollectionObjectName object_name = 1;
  optional bool inward_positive = 2;
}

message SetInwardPositiveNormalResult {
  MpExecutionDetails execution = 1000;
}
```

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
