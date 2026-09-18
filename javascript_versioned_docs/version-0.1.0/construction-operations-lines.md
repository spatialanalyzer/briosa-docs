---
title: Construction Operations / Lines
description: Briosa 0.1.0 JavaScript and TypeScript APIs for selected line-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Lines

These functions preserve MP-compatible inputs and defaults without adding
client-side geometry safeguards. None is automatically replayed.

## Construct Line 2 Points

```ts
export interface ConstructLineTwoPointsInput {
  readonly lineName: CollectionObjectName;
  readonly firstPoint: PointName;
  readonly secondPoint: PointName;
}

function constructLineTwoPoints(
  briosa: BriosaClient,
  input: ConstructLineTwoPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Coincident points are passed through to SpatialAnalyzer.

## Construct Line 2 Points (Vector Notation)

```ts
export interface ConstructLineTwoPointsVectorNotationInput {
  readonly lineName: CollectionObjectName;
  readonly firstVector: Vector;
  readonly secondVector: Vector;
}

function constructLineTwoPointsVectorNotation(
  briosa: BriosaClient,
  input: ConstructLineTwoPointsVectorNotationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Line Normal to Object

```ts
export interface ConstructLineNormalToObjectInput {
  readonly lineName: CollectionObjectName;
  readonly object: CollectionObjectName;
  readonly lineLength?: number;
}

function constructLineNormalToObject(
  briosa: BriosaClient,
  input: ConstructLineNormalToObjectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted `lineLength` maps to 1. Any supplied value is passed through.

## Construct Line - Project Line to Object Reference Plane

```ts
export interface ConstructLineProjectLineToObjectReferencePlaneInput {
  readonly lineToCreate: CollectionObjectName;
  readonly lineToProject: CollectionObjectName;
  readonly objectToProjectTo: CollectionObjectName;
}

function constructLineProjectLineToObjectReferencePlane(
  briosa: BriosaClient,
  input: ConstructLineProjectLineToObjectReferencePlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`objectToProjectTo` retains the MP's `Any` object domain.

## Construct Line - Normal to Object through Point

```ts
export interface ConstructLineNormalToObjectThroughPointInput {
  readonly lineToCreate: CollectionObjectName;
  readonly objectName: CollectionObjectName;
  readonly pointName: PointName;
}

function constructLineNormalToObjectThroughPoint(
  briosa: BriosaClient,
  input: ConstructLineNormalToObjectThroughPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Line 2 Plane Intersection

```ts
export interface ConstructLineTwoPlaneIntersectionInput {
  readonly lineName: CollectionObjectName;
  readonly firstPlane: CollectionObjectName;
  readonly secondPlane: CollectionObjectName;
}

function constructLineTwoPlaneIntersection(
  briosa: BriosaClient,
  input: ConstructLineTwoPlaneIntersectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The client does not prevalidate whether the planes intersect.

## Construct Lines From Surface Faces - Runtime Select

```ts
function constructLinesFromSurfaceFacesRuntimeSelect(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The operator selects faces in SpatialAnalyzer. Aborting the call does not
prove the interaction stopped.

## Construct Line Center of Slot

```ts
export interface ConstructLineCenterOfSlotInput {
  readonly lineName: CollectionObjectName;
  readonly slotName: CollectionObjectName;
}

function constructLineCenterOfSlot(
  briosa: BriosaClient,
  input: ConstructLineCenterOfSlotInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Line From Instrument Shot

```ts
export interface ConstructLineFromInstrumentShotInput {
  readonly pointName: PointName;
  readonly lineName: CollectionObjectName;
  readonly observationIndex?: number;
}

function constructLineFromInstrumentShot(
  briosa: BriosaClient,
  input: ConstructLineFromInstrumentShotInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted `observationIndex` maps to 0. No client-side range rule is added.

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-lines) ·
[gRPC](/api/grpc/construction-operations-lines)
