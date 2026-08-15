---
title: Scale Bar Operations
description: Current and next gRPC contracts for supported Scale Bar Operations MP commands.
toc_max_heading_level: 2
---

# Scale Bar Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Delete Scale Bar

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Scale Bar](/mp-command-catalog/commands/scale-bar-operations#delete-scale-bar) |
| Service | `briosa.ScaleBarOperations` |
| RPC | `DeleteScaleBar` |
| Operation ID | `scale_bar_operations.delete_scale_bar` |
| Route | `/briosa.ScaleBarOperations/DeleteScaleBar` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `scale_bar_name` | `CollectionObjectName` | `Scale Bar Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteScaleBar(DeleteScaleBarRequest) returns (DeleteScaleBarResult);

message DeleteScaleBarRequest {
  optional CollectionObjectName scale_bar_name = 1;
}

message DeleteScaleBarResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Scale Bar Stats

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Scale Bar Stats](/mp-command-catalog/commands/scale-bar-operations#get-scale-bar-stats) |
| Service | `briosa.ScaleBarOperations` |
| RPC | `GetScaleBarStats` |
| Operation ID | `scale_bar_operations.get_scale_bar_stats` |
| Route | `/briosa.ScaleBarOperations/GetScaleBarStats` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `scale_bar_name` | `CollectionObjectName` | `Scale Bar Name` | Required |
| Result | 1 | `nominal_length` | `double` | `Nominal Length` | — |
| Result | 2 | `actual_length` | `double` | `Actual Length` | — |
| Result | 3 | `deviation` | `double` | `Deviation` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Scale Bar Check

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Scale Bar Check](/mp-command-catalog/commands/scale-bar-operations#scale-bar-check) |
| Service | `briosa.ScaleBarOperations` |
| RPC | `ScaleBarCheck` |
| Operation ID | `scale_bar_operations.scale_bar_check` |
| Route | `/briosa.ScaleBarOperations/ScaleBarCheck` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `scale_bar_point_a` | `PointName` | `ScaleBar Point A` | Required |
| Request | 2 | `scale_bar_point_b` | `PointName` | `ScaleBar Point B` | Required |
| Request | 3 | `current_temperature_f` | `double` | `Current Temperature (F)` | 0.000000 |
| Request | 4 | `length_of_bar_at_68f` | `double` | `Length of Bar at 68F` | 0.000000 |
| Request | 5 | `material_cte_ppm_f` | `double` | `Material CTE (PPM/F)` | 0.000000 |
| Request | 6 | `tolerance` | `double` | `Tolerance` | 0.000000 |
| Result | 1 | `deviation_at_68f` | `double` | `Deviation at 68F` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ScaleBarCheck(ScaleBarCheckRequest) returns (ScaleBarCheckResult);

message ScaleBarCheckRequest {
  optional PointName scale_bar_point_a = 1;
  optional PointName scale_bar_point_b = 2;
  optional double current_temperature_f = 3;
  optional double length_of_bar_at_68f = 4;
  optional double material_cte_ppm_f = 5;
  optional double tolerance = 6;
}

message ScaleBarCheckResult {
  optional double deviation_at_68f = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Inward Positive Normal

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Inward Positive Normal](/mp-command-catalog/commands/scale-bar-operations#set-inward-positive-normal) |
| Service | `briosa.ScaleBarOperations` |
| RPC | `SetInwardPositiveNormal` |
| Operation ID | `scale_bar_operations.set_inward_positive_normal` |
| Route | `/briosa.ScaleBarOperations/SetInwardPositiveNormal` |
| Validation | At Risk — fixture or interactive validation required |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `CollectionObjectName` | `Object Name` | Required |
| Request | 2 | `inward_positive` | `bool` | `Inward Positive?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

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

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
