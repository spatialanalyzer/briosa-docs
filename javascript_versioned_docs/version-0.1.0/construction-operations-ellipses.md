---
title: Construction Operations / Ellipses
description: Briosa 0.1.0 JavaScript and TypeScript API for the selected ellipse-construction MP command.
toc_max_heading_level: 2
---

# Construction Operations / Ellipses

## Construct Ellipse

```ts
export interface ConstructEllipseInput {
  readonly ellipseName: CollectionObjectName;
  readonly centerCoordinate: Vector;
  readonly normalDirection: Vector;
  readonly majorAxisRadius: number;
  readonly minorAxisRadius: number;
}

function constructEllipse(
  briosa: BriosaClient,
  input: ConstructEllipseInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Every value is required and passed through without client-side geometry
validation. The client never automatically replays this operation.

[Catalog](/mp-command-catalog/commands/construction-operations-ellipses#construct-ellipse) · [gRPC](/api/grpc/0.5.1/construction-operations-ellipses#construct-ellipse)
