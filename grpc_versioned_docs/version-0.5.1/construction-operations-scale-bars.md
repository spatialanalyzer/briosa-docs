---
title: Construction Operations / Scale Bars
description: Released gRPC contract for scale-bar construction.
toc_max_heading_level: 2
---

# Construction Operations / Scale Bars

## ConstructScaleBar

| Property | Value |
| --- | --- |
| Service | `briosa.ConstructionOperations` |
| Route | `/briosa.ConstructionOperations/ConstructScaleBar` |
| Operation ID | `construction_operations.construct_scale_bar` |
| MP Command | `Construct Scale Bar` |

```proto
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

The scale-bar identity and both Point Names are required. Omitted settings use
`0.0`, `0.0`, `true`, `false`, `false`, `0.0`, and `0.0` in field order.
Relative high/low values are offsets from nominal; absolute values are upper
and lower bounds. Briosa adds no validation across the tolerance fields,
preserves partial or failed MP outcomes, and never automatically replays the
operation.

[Catalog](/mp-command-catalog/commands/construction-operations-scale-bars) · [.NET](/api/dotnet/0.1.0/construction-operations-scale-bars) · [Python](/api/python/0.1.0/construction-operations-scale-bars) · [JavaScript and TypeScript](/api/javascript/0.1.0/construction-operations-scale-bars)
