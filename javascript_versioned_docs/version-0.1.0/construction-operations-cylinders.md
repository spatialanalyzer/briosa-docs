---
title: Construction Operations / Cylinders
description: Briosa 0.1.0 JavaScript and TypeScript APIs for selected cylinder-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Cylinders

## Construct Cylinder

```ts
export interface ConstructCylinderInput {
  readonly cylinderName: CollectionObjectName;
  readonly cylinderEndPoint: Vector;
  readonly cylinderAxis: Vector;
  readonly cylinderDiameter: number;
  readonly cylinderLength: number;
}

function constructCylinder(
  briosa: BriosaClient,
  input: ConstructCylinderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Every value is required and passed through without client-side geometry
validation.

## Construct Cylinder From End Points

```ts
export interface ConstructCylinderFromEndPointsInput {
  readonly cylinderName: CollectionObjectName;
  readonly cylinderEndPointA: Vector;
  readonly cylinderEndPointB: Vector;
  readonly cylinderDiameter: number;
}

function constructCylinderFromEndPoints(
  briosa: BriosaClient,
  input: ConstructCylinderFromEndPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Coincident endpoints and any diameter value are passed through to
SpatialAnalyzer.

## Construct Cylinders From Surface Faces - Runtime Select

```ts
function constructCylindersFromSurfaceFacesRuntimeSelect(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The operator selects faces in SpatialAnalyzer. Aborting the call does not prove
the interaction stopped, and the client never automatically replays it.
