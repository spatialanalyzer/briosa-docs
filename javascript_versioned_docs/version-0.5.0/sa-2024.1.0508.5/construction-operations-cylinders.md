---
title: Construction Operations / Cylinders
description: Released javascript 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Cylinders

[SA 2026.1.0529.7](/api/javascript/construction-operations-cylinders) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-cylinders)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. A method that takes `BriosaCallOptions` can pass `onMpCompletion` to observe how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Construct Cylinder {/* #construct-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cylinders#construct-cylinder)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructCylinderInput {
  readonly cylinderName: CollectionObjectName;
  readonly cylinderEndPoint: Vector;
  readonly cylinderAxis: Vector;
  readonly cylinderDiameter: number;
  readonly cylinderLength: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructCylinder(
    input: ConstructCylinderInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cylinder From End Points {/* #construct-cylinder-from-end-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinder-from-end-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cylinders#construct-cylinder-from-end-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructCylinderFromEndPointsInput {
  readonly cylinderName: CollectionObjectName;
  readonly cylinderEndPointA: Vector;
  readonly cylinderEndPointB: Vector;
  readonly cylinderDiameter: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructCylinderFromEndPoints(
    input: ConstructCylinderFromEndPointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cylinders From Surface Faces - Runtime Select {/* #construct-cylinders-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cylinders#construct-cylinders-from-surface-faces---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```ts
// Member of BriosaClient
interface BriosaClient {
  constructCylindersFromSurfaceFacesRuntimeSelect(
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2024.1.0508.5)
