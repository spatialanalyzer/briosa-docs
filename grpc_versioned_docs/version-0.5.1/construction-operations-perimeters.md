---
title: Construction Operations / Perimeters
description: Released gRPC contract for the selected perimeter-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Perimeters

## Construct Perimeter From Points

| Contract Item | Value |
| --- | --- |
| Status | Current |
| RPC | `ConstructPerimeterFromPoints` |
| Operation ID | `construction_operations.construct_perimeter_from_points` |
| Route | `/briosa.ConstructionOperations/ConstructPerimeterFromPoints` |
| Validation | At Risk - fixture validation required |

```proto
message ConstructPerimeterFromPointsRequest {
  optional CollectionObjectName resulting_perimeter_name = 1;
  repeated PointName point_list = 2;
  optional bool open_perimeter = 3;
}

message ConstructPerimeterFromPointsResult {
  MpExecutionDetails execution = 1000;
}
```

`resulting_perimeter_name` and `point_list` are required. The name must
identify a Perimeter. When `open_perimeter` is omitted, it defaults to `false`
and SpatialAnalyzer constructs a closed perimeter. Briosa forwards the ordered
point list without adding its own minimum-count rule; SpatialAnalyzer reports
missing points and lists with fewer than two points. The operation is never
automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-perimeters#construct-perimeter-from-points) · [.NET](/api/dotnet/construction-operations-perimeters#construct-perimeter-from-points) · [Python](/api/python/construction-operations-perimeters#construct-perimeter-from-points) · [JavaScript/TypeScript](/api/javascript/construction-operations-perimeters#construct-perimeter-from-points)
