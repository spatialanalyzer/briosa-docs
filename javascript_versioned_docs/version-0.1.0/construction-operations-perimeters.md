---
title: Construction Operations / Perimeters
description: Briosa 0.1.0 JavaScript and TypeScript API for the selected perimeter-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Perimeters

## Construct Perimeter From Points

```ts
export interface ConstructPerimeterFromPointsInput {
  readonly resultingPerimeterName: CollectionObjectName;
  readonly pointList: Iterable<PointName>;
  readonly openPerimeter?: boolean;
}

function constructPerimeterFromPoints(
  briosa: BriosaClient,
  input: ConstructPerimeterFromPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The point order determines the perimeter path. The client forwards the list
without imposing a minimum count. SpatialAnalyzer reports missing points and
lists with fewer than two points. `openPerimeter` defaults to `false`, which
creates a closed perimeter. The client never automatically replays this
operation.

[Catalog](/mp-command-catalog/commands/construction-operations-perimeters#construct-perimeter-from-points) · [gRPC](/api/grpc/construction-operations-perimeters#construct-perimeter-from-points)
