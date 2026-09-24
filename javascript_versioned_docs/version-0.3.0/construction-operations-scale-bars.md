---
title: Construction Operations / Scale Bars
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Scale Bars

[SA 2026.1.0529.7](/api/javascript/construction-operations-scale-bars) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-scale-bars)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Scale Bar {/* #construct-scale-bar */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-scale-bars#construct-scale-bar) · [gRPC Contract](/api/grpc/construction-operations-scale-bars#construct-scale-bar)

```ts
export interface ConstructScaleBarInput {
  readonly scaleBarName: CollectionItemName;
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

// Member of BriosaClient
interface BriosaClient {
  constructScaleBar(
    input: ConstructScaleBarInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Types {/* #types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## constructScaleBar {/* #constructscalebar */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
