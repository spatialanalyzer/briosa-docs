---
title: Construction Operations / Lines
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Lines

[SA 2026.1.0529.7](/api/javascript/construction-operations-lines) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-lines)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Line 2 Points {/* #construct-line-2-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-points) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-2-points)

```ts
export interface ConstructLineTwoPointsInput {
  readonly lineName: CollectionObjectName;
  readonly firstPoint: PointName;
  readonly secondPoint: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructLineTwoPoints(
    input: ConstructLineTwoPointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line 2 Points (Vector Notation) {/* #construct-line-2-points-vector-notation */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-points-vector-notation) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-2-points-vector-notation)

```ts
export interface ConstructLineTwoPointsVectorNotationInput {
  readonly lineName: CollectionObjectName;
  readonly firstVector: Vector;
  readonly secondVector: Vector;
}

// Member of BriosaClient
interface BriosaClient {
  constructLineTwoPointsVectorNotation(
    input: ConstructLineTwoPointsVectorNotationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line Normal to Object {/* #construct-line-normal-to-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-normal-to-object) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-normal-to-object)

```ts
export interface ConstructLineNormalToObjectInput {
  readonly lineName: CollectionObjectName;
  readonly object: CollectionObjectName;
  readonly lineLength?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructLineNormalToObject(
    input: ConstructLineNormalToObjectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line - Project Line to Object Reference Plane {/* #construct-line---project-line-to-object-reference-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line---project-line-to-object-reference-plane) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line---project-line-to-object-reference-plane)

```ts
export interface ConstructLineProjectLineToObjectReferencePlaneInput {
  readonly lineToCreate: CollectionObjectName;
  readonly lineToProject: CollectionObjectName;
  readonly objectToProjectTo: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructLineProjectLineToObjectReferencePlane(
    input: ConstructLineProjectLineToObjectReferencePlaneInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line - Normal to Object through Point {/* #construct-line---normal-to-object-through-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line---normal-to-object-through-point) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line---normal-to-object-through-point)

```ts
export interface ConstructLineNormalToObjectThroughPointInput {
  readonly lineToCreate: CollectionObjectName;
  readonly objectName: CollectionObjectName;
  readonly pointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructLineNormalToObjectThroughPoint(
    input: ConstructLineNormalToObjectThroughPointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line 2 Plane Intersection {/* #construct-line-2-plane-intersection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-plane-intersection) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-2-plane-intersection)

```ts
export interface ConstructLineTwoPlaneIntersectionInput {
  readonly lineName: CollectionObjectName;
  readonly firstPlane: CollectionObjectName;
  readonly secondPlane: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructLineTwoPlaneIntersection(
    input: ConstructLineTwoPlaneIntersectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Lines From Surface Faces - Runtime Select {/* #construct-lines-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-lines-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-lines-from-surface-faces---runtime-select)

```ts
// Member of BriosaClient
interface BriosaClient {
  constructLinesFromSurfaceFacesRuntimeSelect(
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line Center of Slot {/* #construct-line-center-of-slot */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-center-of-slot) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-center-of-slot)

```ts
export interface ConstructLineCenterOfSlotInput {
  readonly lineName: CollectionObjectName;
  readonly slotName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructLineCenterOfSlot(
    input: ConstructLineCenterOfSlotInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line From Instrument Shot {/* #construct-line-from-instrument-shot */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-from-instrument-shot) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-from-instrument-shot)

```ts
export interface ConstructLineFromInstrumentShotInput {
  readonly pointName: PointName;
  readonly lineName: CollectionObjectName;
  readonly observationIndex?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructLineFromInstrumentShot(
    input: ConstructLineFromInstrumentShotInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
