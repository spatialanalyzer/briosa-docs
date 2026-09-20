---
title: Construction Operations / Ellipsoids
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Ellipsoids

[SA 2026.1.0529.7](/api/javascript/construction-operations-ellipsoids) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-ellipsoids)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Ellipsoid {/* #construct-ellipsoid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-ellipsoids#construct-ellipsoid) · [gRPC Contract](/api/grpc/construction-operations-ellipsoids#construct-ellipsoid)

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

// Member of BriosaClient
interface BriosaClient {
  constructEllipsoid(
    input: ConstructEllipsoidInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2026.1.0529.7)
