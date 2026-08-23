---
title: Construction Operations / Planes
description: Next Briosa JavaScript and TypeScript APIs for the selected plane-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Planes

```ts
export interface ConstructPlaneInput {
  readonly planeName: CollectionObjectName;
  readonly planeCenter: Vector;
  readonly planeNormal: Vector;
  readonly planeEdgeDimension?: number;
}

export interface ConstructPlaneNormalToObjectThroughPointInput {
  readonly resultantPlaneName: CollectionObjectName;
  readonly normalToObjectName: CollectionObjectName;
  readonly throughPointName: PointName;
  readonly planeEdgeDimension?: number;
}

export interface ConstructPlanesBoundingPointGroupInput {
  readonly referencePlaneName: CollectionObjectName;
  readonly groupToBound: CollectionObjectName;
  readonly resultingHighPlaneName?: CollectionObjectName;
  readonly resultingLowPlaneName?: CollectionObjectName;
  readonly overrideTargetPointOffsets?: boolean;
  readonly offsetValue?: number;
}

export interface ConstructPlanesBisectTwoPlanesInput {
  readonly resultantPlaneName: CollectionObjectName;
  readonly firstPlane: CollectionObjectName;
  readonly secondPlane: CollectionObjectName;
}

export interface ShiftPlaneInput {
  readonly plane: CollectionObjectName;
  readonly shiftAlongNormal?: number;
  readonly growBoundsByFactor?: number;
}
```

## Construct Plane

```ts
function constructPlane(
  briosa: BriosaClient,
  input: ConstructPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Plane, Normal to Object, Through Point

```ts
function constructPlaneNormalToObjectThroughPoint(
  briosa: BriosaClient,
  input: ConstructPlaneNormalToObjectThroughPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Planes, Bounding Point Group

```ts
function constructPlanesBoundingPointGroup(
  briosa: BriosaClient,
  input: ConstructPlanesBoundingPointGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted result identities use `HighPlane` and `LowPlane` in the active
collection. All omitted numeric fields use `0`, and the offset override uses
`false`.

## Construct Planes, Bisect 2 Planes

```ts
function constructPlanesBisectTwoPlanes(
  briosa: BriosaClient,
  input: ConstructPlanesBisectTwoPlanesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Shift Plane

```ts
function shiftPlane(
  briosa: BriosaClient,
  input: ShiftPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Planes From Surface Faces - Runtime Select

```ts
function constructPlanesFromSurfaceFacesRuntimeSelect(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The operator selects faces in SpatialAnalyzer. Aborting the call does not
prove the interaction stopped.

The client passes all values through without additional geometry safeguards
and never automatically replays these operations.

[Catalog](/mp-command-catalog/commands/construction-operations-planes) · [gRPC](/api/grpc/construction-operations-planes)
