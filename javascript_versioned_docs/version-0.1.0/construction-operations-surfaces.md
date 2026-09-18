---
title: Construction Operations / Surfaces
description: Briosa 0.1.0 JavaScript and TypeScript APIs for surface construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Surfaces

## Types

```ts
export type SurfaceDissectionMode = 'entireSolid' | 'selectFaces';

export interface ConstructSurfacesFromObjectsInput {
  readonly objects: Iterable<CollectionObjectName>;
}

export interface ConstructSurfaceFromBSplinesInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly bSplineList: Iterable<CollectionObjectName>;
}

export interface ConstructSurfaceFromCylinderInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly cylinderName: CollectionObjectName;
  readonly internalCylinder?: boolean;
  readonly useThetaExtentMode?: boolean;
}

export interface ConstructSurfaceFromPlaneInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly planeName: CollectionObjectName;
}

export interface ConstructSurfaceFromSphereInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly sphereName: CollectionObjectName;
}

export interface ConstructSurfaceFromConeInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly coneName: CollectionObjectName;
}

export interface ConstructSurfaceFromCollectionOfSurfacesInput {
  readonly surfacesToCombine: Iterable<CollectionObjectName>;
  readonly resultingSurfaceName: CollectionObjectName;
  readonly hideOriginalSurfaces?: boolean;
  readonly deleteOriginalSurfaces?: boolean;
  readonly enableSewingTolerance?: boolean;
  readonly sewingTolerance?: number;
}

export interface ConstructSurfaceFitFromNominalSurfacesAndActualDataInput {
  readonly nominalSurface: CollectionObjectName;
  readonly actualDataPointList: Iterable<PointName>;
  readonly resultingSurfaceName: CollectionObjectName;
}

export interface ConstructSurfaceByDissectingSurfacesInput {
  readonly dissectionMode: SurfaceDissectionMode;
}

export interface ConstructSurfacesByDissectingSurfacesFromRefListInput {
  readonly surfacesToDissect: Iterable<CollectionObjectName>;
}

export interface ConstructSurfaceFromPointGroupsInput {
  readonly groupNameList: Iterable<CollectionObjectName>;
  readonly resultingSurfaceName: CollectionObjectName;
  readonly bSplineFitOptions?: BSplineFitOptions;
}

export interface ConstructSurfacesByProjectingPointsInput {
  readonly projectionTargetNameList: Iterable<CollectionObjectName>;
  readonly pointList: Iterable<PointName>;
  readonly resultingSurfaceName: CollectionObjectName;
}

export interface ConstructSurfaceByOffsettingSurfaceInput {
  readonly referenceSurface: Iterable<CollectionObjectName>;
  readonly surfaceOffset?: number;
  readonly hideOriginalSurface?: boolean;
}

export interface ConstructSurfaceFromAnnotationLinksInput {
  readonly annotationList: Iterable<CollectionObjectName>;
  readonly resultingSurfaceName: CollectionObjectName;
}

export interface ConstructGeometryFromSurfacesInput {
  readonly surfaces: Iterable<CollectionObjectName>;
  readonly minimumDiameter?: number;
  readonly maximumDiameter?: number;
  readonly referenceFrame?: CollectionObjectName;
  readonly destinationCollectionName?: CollectionName;
  readonly baseName?: string;
}
```

Defaults are `internalCylinder: true`, `useThetaExtentMode: false`, hide
combined originals `true`, delete originals `false`, sewing disabled, sewing
tolerance `-1`, surface offset `0`, hide offset originals `true`, both geometry
diameter bounds `0`, and geometry base name `Geometry Object`.

## Functions

```ts
function constructSurfacesFromObjects(
  briosa: BriosaClient,
  input: ConstructSurfacesFromObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceFromBSplines(
  briosa: BriosaClient,
  input: ConstructSurfaceFromBSplinesInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceFromCylinder(
  briosa: BriosaClient,
  input: ConstructSurfaceFromCylinderInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceFromPlane(
  briosa: BriosaClient,
  input: ConstructSurfaceFromPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceFromSphere(
  briosa: BriosaClient,
  input: ConstructSurfaceFromSphereInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceFromCone(
  briosa: BriosaClient,
  input: ConstructSurfaceFromConeInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceFromCollectionOfSurfaces(
  briosa: BriosaClient,
  input: ConstructSurfaceFromCollectionOfSurfacesInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceFitFromNominalSurfacesAndActualData(
  briosa: BriosaClient,
  input: ConstructSurfaceFitFromNominalSurfacesAndActualDataInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceByDissectingSurfaces(
  briosa: BriosaClient,
  input: ConstructSurfaceByDissectingSurfacesInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;

function constructSurfacesByDissectingSurfacesFromRefList(
  briosa: BriosaClient,
  input: ConstructSurfacesByDissectingSurfacesFromRefListInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;

function constructSurfaceFromPointGroups(
  briosa: BriosaClient,
  input: ConstructSurfaceFromPointGroupsInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfacesByProjectingPoints(
  briosa: BriosaClient,
  input: ConstructSurfacesByProjectingPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceByOffsettingSurface(
  briosa: BriosaClient,
  input: ConstructSurfaceByOffsettingSurfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSurfaceFromAnnotationLinks(
  briosa: BriosaClient,
  input: ConstructSurfaceFromAnnotationLinksInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructGeometryFromSurfaces(
  briosa: BriosaClient,
  input: ConstructGeometryFromSurfacesInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

## Examples

```ts
await constructSurfacesFromObjects(briosa, {objects});
await constructSurfaceFromBSplines(briosa, {resultingSurfaceName, bSplineList});
await constructSurfaceFromCylinder(briosa, {resultingSurfaceName, cylinderName});
await constructSurfaceFromPlane(briosa, {resultingSurfaceName, planeName});
await constructSurfaceFromSphere(briosa, {resultingSurfaceName, sphereName});
await constructSurfaceFromCone(briosa, {resultingSurfaceName, coneName});
await constructSurfaceFromCollectionOfSurfaces(briosa, {
  surfacesToCombine,
  resultingSurfaceName,
});
await constructSurfaceFitFromNominalSurfacesAndActualData(briosa, {
  nominalSurface,
  actualDataPointList,
  resultingSurfaceName,
});
const selectedSurfaces = await constructSurfaceByDissectingSurfaces(briosa, {
  dissectionMode: 'selectFaces',
});
const dissectedSurfaces = await constructSurfacesByDissectingSurfacesFromRefList(
  briosa,
  {surfacesToDissect},
);
await constructSurfaceFromPointGroups(briosa, {groupNameList, resultingSurfaceName});
await constructSurfacesByProjectingPoints(briosa, {
  projectionTargetNameList,
  pointList,
  resultingSurfaceName,
});
await constructSurfaceByOffsettingSurface(briosa, {
  referenceSurface,
  surfaceOffset: 5,
});
await constructSurfaceFromAnnotationLinks(briosa, {annotationList, resultingSurfaceName});
const cylinders = await constructGeometryFromSurfaces(briosa, {
  surfaces,
  minimumDiameter: 10,
  maximumDiameter: 100,
  destinationCollectionName,
});
```

Face selection is operator-interactive, and an abort does not prove the SA
interaction stopped.

:::warning[SA 2026.1 Partial Contract]

`constructGeometryFromSurfaces` extracts cylinder geometry only. It
intentionally has no geometry-mode property because the SDK cannot reliably
select the MP's line, circle, or cylinder mode.

:::

Briosa adds no operation-specific geometry or list-cardinality safeguards, and
none of these calls is automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-surfaces) · [gRPC](/api/grpc/construction-operations-surfaces)
