---
title: Construction Operations / Ellipsoids
description: Unreleased Briosa JavaScript and TypeScript API for the selected ellipsoid-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

## Construct Ellipsoid

```ts
export interface ConstructEllipsoidInput {
  readonly ellipseName: CollectionObjectName;
  readonly xAxisRadius?: number;
  readonly yAxisRadius?: number;
  readonly zAxisRadius?: number;
  readonly magnification?: number;
  readonly uncertaintyEllipsoid?: boolean;
  readonly transformInWorkingCoordinates?: Transform;
  readonly ellipseColor?: Color;
}

function constructEllipsoid(
  briosa: BriosaClient,
  input: ConstructEllipsoidInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted properties map to radii 5, 4, and 3; magnification 1; `false`; an
identity transform; and RGB 255, 0, 255. Values are passed through without
client-side geometry validation. The client never automatically replays this
operation.

[Catalog](/mp-command-catalog/commands/construction-operations-ellipsoids#construct-ellipsoid) · [gRPC](/api/grpc/construction-operations-ellipsoids#construct-ellipsoid)
