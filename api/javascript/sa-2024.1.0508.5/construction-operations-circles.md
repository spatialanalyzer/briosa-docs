---
title: Construction Operations / Circles
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Circles

[SA 2026.1.0529.7](/api/javascript/construction-operations-circles) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-circles)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Circle {/* #construct-circle */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circle) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circle)

```ts
export interface ConstructCircleInput {
  readonly circleName: CollectionObjectName;
  readonly circleCenter: Vector;
  readonly circleNormal: Vector;
  readonly circleRadius: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructCircle(
    input: ConstructCircleInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Circles From Surface Faces - Runtime Select {/* #construct-circles-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)

```ts
// Member of BriosaClient
interface BriosaClient {
  constructCirclesFromSurfaceFacesRuntimeSelect(
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Circles (Lines) From Surfaces {/* #construct-circles-lines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-lines-from-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-circles#construct-circles-lines-from-surfaces)

```ts
export interface ConstructCirclesLinesFromSurfacesInput {
  readonly surfaces: Iterable<CollectionObjectName>;
  readonly circleLineMode: CircleLineMode;
  readonly minimumDiameter?: number;
  readonly maximumDiameter?: number;
  readonly tolerance?: number;
  readonly singleSurface?: boolean;
  readonly destinationCollectionName?: CollectionName;
  readonly baseName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructCirclesLinesFromSurfaces(
    input: ConstructCirclesLinesFromSurfacesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
