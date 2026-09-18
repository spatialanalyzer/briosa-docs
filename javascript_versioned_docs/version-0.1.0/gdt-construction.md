---
title: GDT Operations / GDT Construction
description: Briosa 0.1.0 JavaScript and TypeScript APIs for the GDT Construction MP commands.
toc_max_heading_level: 2
---

# GDT Operations / GDT Construction

## Shared Types

```ts
export interface SurfaceFaceList {
  readonly value: string;
}

export enum GdtFeatureType {
  Diameter = "diameter",
  Radius = "radius",
  DistanceBetween = "distanceBetween",
  Width = "width",
  Length = "length",
  AngleBetween = "angleBetween",
  Angularity = "angularity",
  Perpendicularity = "perpendicularity",
  Parallelism = "parallelism",
  Circularity = "circularity",
  Concentricity = "concentricity",
  Cylindricity = "cylindricity",
  Straightness = "straightness",
  SurfaceProfile = "surfaceProfile",
  LineProfile = "lineProfile",
  CompositeSurfaceProfile = "compositeSurfaceProfile",
  Flatness = "flatness",
  TruePosition = "truePosition",
  CompositeTruePosition = "compositeTruePosition",
  CircularRunout = "circularRunout",
  TotalRunout = "totalRunout",
}

export enum GdtToleranceZoneType {
  None = "none",
  Cylindrical = "cylindrical",
  Planar = "planar",
  Spherical = "spherical",
  RadialArc = "radialArc",
  RadialPlanar = "radialPlanar",
  Boundary = "boundary",
  PlanarMedian = "planarMedian",
  Surface = "surface",
}

export interface MakeGdtFeatureCheckAnnotationOptions {
  featureAnnotationName: string;
  featureType?: GdtFeatureType;
  objects?: readonly CollectionObjectName[];
  geometryRelationships?: readonly CollectionItemName[];
  surfaceFaces?: SurfaceFaceList;
  decomposeMultipleFeatures?: boolean;
  autoCreateDiameterChecks?: boolean;
  autoCreateSlotWidthChecks?: boolean;
  autoCreateSlotLengthChecks?: boolean;
  datumReferences?: string;
  tolerance?: string;
  isSlot?: boolean;
  perUnitLengthOrArea?: boolean;
  circularArea?: boolean;
  perUnitAreaLengthDistance?: number;
  perUnitAreaLengthStepOverPercent?: number;
  perUnitAreaWidthDistance?: number;
  perUnitAreaWidthStepOverPercent?: number;
  perUnitAreaCircleDiameter?: number;
  perUnitAreaDiameterStepOver?: number;
  auxiliaryObject?: CollectionObjectName;
  auxiliaryGeometryRelationship?: CollectionItemName;
  useNominalForDimensionTolerance?: boolean;
  useReferenceObjectForNominal?: boolean;
  nominalDimensionTolerance?: number;
  lowDimensionTolerance?: number;
  highDimensionTolerance?: number;
  toleranceZoneType?: GdtToleranceZoneType;
  useProjectedToleranceZone?: boolean;
  projectedToleranceZone?: number;
}

export interface MakeGdtDatumAnnotationOptions {
  datumName: string;
  objects?: readonly CollectionObjectName[];
  geometryRelationships?: readonly CollectionItemName[];
  surfaceFaces?: SurfaceFaceList;
  auxiliaryObject?: CollectionObjectName;
  auxiliaryGeometryRelationship?: CollectionItemName;
  isSlot?: boolean;
  forceSurfaceFeature?: boolean;
}
```

`SurfaceFaceList.value` is an opaque SpatialAnalyzer value. Pass values
returned by the Surface Face List functions unchanged.

## makeSurfaceFaceListRuntimeSelect

```ts
function makeSurfaceFaceListRuntimeSelect(): Promise<SurfaceFaceList>;

const faces = await briosa.gdtOperations.makeSurfaceFaceListRuntimeSelect();
```

This function displays SpatialAnalyzer's runtime Surface-face selector.

## makeSurfaceFaceListFromSurface

```ts
function makeSurfaceFaceListFromSurface(
  surface: CollectionObjectName,
): Promise<SurfaceFaceList>;

const faces = await briosa.gdtOperations.makeSurfaceFaceListFromSurface(surface);
```

## makeGdtFeatureCheckAnnotation

```ts
function makeGdtFeatureCheckAnnotation(
  options: MakeGdtFeatureCheckAnnotationOptions,
): Promise<void>;

await briosa.gdtOperations.makeGdtFeatureCheckAnnotation({
  featureAnnotationName: "Position Check",
  featureType: GdtFeatureType.TruePosition,
  objects: [feature],
  surfaceFaces: faces,
});
```

The input exposes all 30 MP arguments. Omitted properties preserve the exact
defaults: `TruePosition`, empty lists, no Surface faces, disabled construction
flags, empty Datum-reference and tolerance strings, zero distances, 50-percent
step-over values, nominal-based dimension tolerance, `-0.1` and `0.1` range
limits, `None`, and no projected tolerance zone.

SpatialAnalyzer validates the supplied combination of Objects, Relationships,
Surface faces, Datum references, and tolerance text.

## makeGdtDatumAnnotation

```ts
function makeGdtDatumAnnotation(
  options: MakeGdtDatumAnnotationOptions,
): Promise<void>;

await briosa.gdtOperations.makeGdtDatumAnnotation({
  datumName: "A",
  objects: [datumFeature],
});
```

`isSlot` and `forceSurfaceFeature` both default to `false`.

## makeFeatureChecks

```ts
function makeFeatureChecks(collection: CollectionName): Promise<void>;

await briosa.gdtOperations.makeFeatureChecks(collection);
```

## makeFeatureCheckRefListFromCollection

```ts
function makeFeatureCheckRefListFromCollection(
  collection: CollectionName,
): Promise<readonly CollectionItemName[]>;

const checks = await briosa.gdtOperations
  .makeFeatureCheckRefListFromCollection(collection);
```

## makeFeatureCheckReferenceListWildcardSelection

```ts
function makeFeatureCheckReferenceListWildcardSelection(options?: {
  collectionWildcardCriteria?: string;
  featureCheckWildcardCriteria?: string;
}): Promise<readonly CollectionItemName[]>;

const checks = await briosa.gdtOperations
  .makeFeatureCheckReferenceListWildcardSelection({
    featureCheckWildcardCriteria: "Position*",
  });
```

Both wildcard criteria default to `*`.

## makeAnnotationRefListFromCollection

```ts
function makeAnnotationRefListFromCollection(
  collection: CollectionName,
): Promise<readonly CollectionItemName[]>;

const annotations = await briosa.gdtOperations
  .makeAnnotationRefListFromCollection(collection);
```

## makeAnnotationRefListWildcardSelection

```ts
function makeAnnotationRefListWildcardSelection(options?: {
  collectionWildcardCriteria?: string;
  annotationWildcardCriteria?: string;
}): Promise<readonly CollectionItemName[]>;

const annotations = await briosa.gdtOperations
  .makeAnnotationRefListWildcardSelection({
    annotationWildcardCriteria: "Datum*",
  });
```

Both wildcard criteria default to `*`.

## deleteFeatureChecks

```ts
function deleteFeatureChecks(
  featureChecks: readonly CollectionItemName[],
): Promise<void>;

await briosa.gdtOperations.deleteFeatureChecks(checksToDelete);
```

The client adds no confirmation or existence preflight.

## makeDatumRefListFromCollection

```ts
function makeDatumRefListFromCollection(
  collection: CollectionName,
): Promise<readonly CollectionObjectName[]>;

const datums = await briosa.gdtOperations
  .makeDatumRefListFromCollection(collection);
```

All returned lists are detached snapshots of live SA state. The client does not
cache them or automatically replay any operation.

[Catalog](/mp-command-catalog/commands/gdt-construction) · [gRPC](/api/grpc/gdt-construction) · [.NET](/api/dotnet/gdt-construction) · [Python](/api/python/gdt-construction)
