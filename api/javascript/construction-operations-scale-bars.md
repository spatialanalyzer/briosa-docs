---
title: Construction Operations / Scale Bars
description: Next Briosa JavaScript and TypeScript API for scale-bar construction.
toc_max_heading_level: 2
---

# Construction Operations / Scale Bars

## Types

```ts
export interface ConstructScaleBarInput {
  readonly scaleBarName: CollectionObjectName;
  readonly beginTarget: PointName;
  readonly endTarget: PointName;
  readonly length?: number;
  readonly uncertainty?: number;
  readonly useRelativeTolerances?: boolean;
  readonly useHighTolerances?: boolean;
  readonly useLowTolerances?: boolean;
  readonly highTolerance?: number;
  readonly lowTolerance?: number;
}
```

Omitted settings use 0, 0, true, false, false, 0, and 0 in declaration order.

## constructScaleBar

```ts
function constructScaleBar(
  briosa: BriosaClient,
  input: ConstructScaleBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Relative high/low values are offsets from nominal; absolute values are the
actual upper and lower bounds. No validation is added across these fields and
the call is never automatically replayed.

```ts
await constructScaleBar(briosa, {
  scaleBarName: scaleBar,
  beginTarget: beginPoint,
  endTarget: endPoint,
  length: 64,
  uncertainty: 0.001,
  useHighTolerances: true,
  useLowTolerances: true,
  highTolerance: 0.005,
  lowTolerance: -0.005,
});
```

[Catalog](/mp-command-catalog/commands/construction-operations-scale-bars) · [gRPC](/api/grpc/construction-operations-scale-bars)
