---
title: Construction Operations / Ellipses
description: Released gRPC contract for the selected ellipse-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Ellipses

## Construct Ellipse

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `ConstructEllipse` |
| Operation ID | `construction_operations.construct_ellipse` |
| Route | `/briosa.ConstructionOperations/ConstructEllipse` |
| Validation | At Risk - fixture validation required |

```proto
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

Every field is required, and `ellipse_name` must identify an Ellipse. Values
are passed to the exact MP arguments without Briosa-specific geometry
validation. The operation is never automatically replayed.
