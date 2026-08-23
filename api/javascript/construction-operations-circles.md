---
title: Construction Operations / Circles
description: Next Briosa JavaScript and TypeScript APIs for selected circle-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Circles

## Construct Circle

```ts
export interface ConstructCircleInput {
  readonly circleName: CollectionObjectName;
  readonly circleCenter: Vector;
  readonly circleNormal: Vector;
  readonly circleRadius: number;
}
function constructCircle(
  briosa: BriosaClient,
  input: ConstructCircleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Circles From Surface Faces - Runtime Select

```ts
function constructCirclesFromSurfaceFacesRuntimeSelect(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped.

## Construct Circles (Lines) From Surfaces

```ts
export type CircleLineMode = 'circle' | 'line';
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
function constructCirclesLinesFromSurfaces(
  briosa: BriosaClient,
  input: ConstructCirclesLinesFromSurfacesInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

Returns the complete `Geometry Objects` output list.
