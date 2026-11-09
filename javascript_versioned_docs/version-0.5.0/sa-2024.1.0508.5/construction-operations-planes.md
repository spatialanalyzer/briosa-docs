---
title: Construction Operations / Planes
description: Released javascript 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Planes

[SA 2026.1.0529.7](/api/javascript/construction-operations-planes) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-planes)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. A method that takes `BriosaCallOptions` can pass `onMpCompletion` to observe how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Construct Plane {/* #construct-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructPlaneInput {
  readonly planeName: CollectionObjectName;
  readonly planeCenter: Vector;
  readonly planeNormal: Vector;
  readonly planeEdgeDimension?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPlane(
    input: ConstructPlaneInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Plane, Normal to Object, Through Point {/* #construct-plane-normal-to-object-through-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-plane-normal-to-object-through-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-plane-normal-to-object-through-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructPlaneNormalToObjectThroughPointInput {
  readonly resultantPlaneName: CollectionObjectName;
  readonly normalToObjectName: CollectionObjectName;
  readonly throughPointName: PointName;
  readonly planeEdgeDimension?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPlaneNormalToObjectThroughPoint(
    input: ConstructPlaneNormalToObjectThroughPointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Planes, Bounding Point Group {/* #construct-planes-bounding-point-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-bounding-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-planes-bounding-point-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructPlanesBoundingPointGroupInput {
  readonly referencePlaneName: CollectionObjectName;
  readonly groupToBound: CollectionObjectName;
  readonly resultingHighPlaneName?: CollectionObjectName;
  readonly resultingLowPlaneName?: CollectionObjectName;
  readonly overrideTargetPointOffsets?: boolean;
  readonly offsetValue?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPlanesBoundingPointGroup(
    input: ConstructPlanesBoundingPointGroupInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `resultingHighPlaneName` | Optional (major 3): when a plane name is absent, SpatialAnalyzer uses its default name. An empty name is rejected. |
| `resultingLowPlaneName` | Optional (major 3): when a plane name is absent, SpatialAnalyzer uses its default name. An empty name is rejected. |

## Construct Planes, Bisect 2 Planes {/* #construct-planes-bisect-2-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-bisect-2-planes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-planes-bisect-2-planes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ConstructPlanesBisectTwoPlanesInput {
  readonly resultantPlaneName: CollectionObjectName;
  readonly firstPlane: CollectionObjectName;
  readonly secondPlane: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPlanesBisectTwoPlanes(
    input: ConstructPlanesBisectTwoPlanesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shift Plane {/* #shift-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#shift-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#shift-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface ShiftPlaneInput {
  readonly plane: CollectionObjectName;
  readonly shiftAlongNormal?: number;
  readonly growBoundsByFactor?: number;
}

// Member of BriosaClient
interface BriosaClient {
  shiftPlane(
    input: ShiftPlaneInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Planes From Surface Faces - Runtime Select {/* #construct-planes-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-planes#construct-planes-from-surface-faces---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```ts
// Member of BriosaClient
interface BriosaClient {
  constructPlanesFromSurfaceFacesRuntimeSelect(
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2024.1.0508.5)
