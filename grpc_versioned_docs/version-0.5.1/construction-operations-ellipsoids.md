---
title: Construction Operations / Ellipsoids
description: Released gRPC contract for the selected ellipsoid-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

## Construct Ellipsoid

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `ConstructEllipsoid` |
| Operation ID | `construction_operations.construct_ellipsoid` |
| Route | `/briosa.ConstructionOperations/ConstructEllipsoid` |
| Validation | At Risk - fixture validation required |

```proto
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

`ellipse_name` is required and must identify an Ellipsoid. Omitted values map
to radii 5, 4, and 3; magnification 1; `false`; an identity transform; and RGB
255, 0, 255. Values are passed through without Briosa-specific geometry
validation. The operation is never automatically replayed.
