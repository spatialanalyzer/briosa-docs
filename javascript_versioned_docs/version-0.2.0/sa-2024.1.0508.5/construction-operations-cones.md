---
title: Construction Operations / Cones
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Cones

[SA 2026.1.0529.7](/api/javascript/construction-operations-cones) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-cones)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Cone {/* #construct-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cone)

```ts
export interface ConstructConeInput {
  readonly coneName: CollectionObjectName;
  readonly coneEndPoint: Vector;
  readonly coneAxis: Vector;
  readonly coneLength: number;
  readonly coneThetaStart: number;
  readonly coneThetaSpan: number;
  readonly coneIncludedAngle: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructCone(
    input: ConstructConeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cones From Surface Faces - Runtime Select {/* #construct-cones-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)

```ts
// Member of BriosaClient
interface BriosaClient {
  constructConesFromSurfaceFacesRuntimeSelect(
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
