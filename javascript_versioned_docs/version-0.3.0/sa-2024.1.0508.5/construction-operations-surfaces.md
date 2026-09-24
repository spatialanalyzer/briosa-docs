---
title: Construction Operations / Surfaces
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Surfaces

[SA 2026.1.0529.7](/api/javascript/construction-operations-surfaces) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-surfaces)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Surfaces From Objects {/* #construct-surfaces-from-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-from-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-from-objects)

```ts
export interface ConstructSurfacesFromObjectsInput {
  readonly objects: Iterable<CollectionObjectName>;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfacesFromObjects(
    input: ConstructSurfacesFromObjectsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From BSplines {/* #construct-surface-from-bsplines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-bsplines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-bsplines)

```ts
export interface ConstructSurfaceFromBSplinesInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly bSplineList: Iterable<CollectionObjectName>;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFromBSplines(
    input: ConstructSurfaceFromBSplinesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Cylinder {/* #construct-surface-from-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-cylinder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-cylinder)

```ts
export interface ConstructSurfaceFromCylinderInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly cylinderName: CollectionObjectName;
  readonly internalCylinder?: boolean;
  readonly useThetaExtentMode?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFromCylinder(
    input: ConstructSurfaceFromCylinderInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Plane {/* #construct-surface-from-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-plane)

```ts
export interface ConstructSurfaceFromPlaneInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly planeName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFromPlane(
    input: ConstructSurfaceFromPlaneInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Sphere {/* #construct-surface-from-sphere */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-sphere) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-sphere)

```ts
export interface ConstructSurfaceFromSphereInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly sphereName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFromSphere(
    input: ConstructSurfaceFromSphereInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Cone {/* #construct-surface-from-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-cone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-cone)

```ts
export interface ConstructSurfaceFromConeInput {
  readonly resultingSurfaceName: CollectionObjectName;
  readonly coneName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFromCone(
    input: ConstructSurfaceFromConeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From a Collection of Surfaces {/* #construct-surface-from-a-collection-of-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-a-collection-of-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-a-collection-of-surfaces)

```ts
export interface ConstructSurfaceFromCollectionOfSurfacesInput {
  readonly surfacesToCombine: Iterable<CollectionObjectName>;
  readonly resultingSurfaceName: CollectionObjectName;
  readonly hideOriginalSurfaces?: boolean;
  readonly deleteOriginalSurfaces?: boolean;
  readonly enableSewingTolerance?: boolean;
  readonly sewingTolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFromCollectionOfSurfaces(
    input: ConstructSurfaceFromCollectionOfSurfacesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface Fit From Nominal Surfaces and Actual Data {/* #construct-surface-fit-from-nominal-surfaces-and-actual-data */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-fit-from-nominal-surfaces-and-actual-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-fit-from-nominal-surfaces-and-actual-data)

```ts
export interface ConstructSurfaceFitFromNominalSurfacesAndActualDataInput {
  readonly nominalSurface: CollectionObjectName;
  readonly actualDataPointList: Iterable<PointName>;
  readonly resultingSurfaceName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFitFromNominalSurfacesAndActualData(
    input: ConstructSurfaceFitFromNominalSurfacesAndActualDataInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface by Dissecting Surface(s) {/* #construct-surface-by-dissecting-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-by-dissecting-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-by-dissecting-surfaces)

```ts
export interface ConstructSurfaceByDissectingSurfacesInput {
  readonly dissectionMode: SurfaceDissectionMode;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceByDissectingSurfaces(
    input: ConstructSurfaceByDissectingSurfacesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surfaces by Dissecting Surfaces from Ref List {/* #construct-surfaces-by-dissecting-surfaces-from-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-by-dissecting-surfaces-from-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-by-dissecting-surfaces-from-ref-list)

```ts
export interface ConstructSurfacesByDissectingSurfacesFromRefListInput {
  readonly surfacesToDissect: Iterable<CollectionObjectName>;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfacesByDissectingSurfacesFromRefList(
    input: ConstructSurfacesByDissectingSurfacesFromRefListInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Point Groups {/* #construct-surface-from-point-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-point-groups) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-point-groups)

```ts
export interface ConstructSurfaceFromPointGroupsInput {
  readonly groupNameList: Iterable<CollectionObjectName>;
  readonly resultingSurfaceName: CollectionObjectName;
  readonly bSplineFitOptions?: BSplineFitOptions;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFromPointGroups(
    input: ConstructSurfaceFromPointGroupsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surfaces By Projecting Points {/* #construct-surfaces-by-projecting-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-by-projecting-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-by-projecting-points)

```ts
export interface ConstructSurfacesByProjectingPointsInput {
  readonly projectionTargetNameList: Iterable<CollectionObjectName>;
  readonly pointList: Iterable<PointName>;
  readonly resultingSurfaceName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfacesByProjectingPoints(
    input: ConstructSurfacesByProjectingPointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct surface by offsetting a surface {/* #construct-surface-by-offsetting-a-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-by-offsetting-a-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-by-offsetting-a-surface)

```ts
export interface ConstructSurfaceByOffsettingSurfaceInput {
  readonly referenceSurface: Iterable<CollectionObjectName>;
  readonly surfaceOffset?: number;
  readonly hideOriginalSurface?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceByOffsettingSurface(
    input: ConstructSurfaceByOffsettingSurfaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Annotation Links {/* #construct-surface-from-annotation-links */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-annotation-links) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-annotation-links)

```ts
export interface ConstructSurfaceFromAnnotationLinksInput {
  readonly annotationList: Iterable<CollectionObjectName>;
  readonly resultingSurfaceName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructSurfaceFromAnnotationLinks(
    input: ConstructSurfaceFromAnnotationLinksInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Geometry From Surfaces {/* #construct-geometry-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-geometry-from-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-geometry-from-surfaces)

```ts
export interface ConstructGeometryFromSurfacesInput {
  readonly surfaces: Iterable<CollectionObjectName>;
  readonly minimumDiameter?: number;
  readonly maximumDiameter?: number;
  readonly referenceFrame?: CollectionObjectName;
  readonly destinationCollectionName?: CollectionName;
  readonly baseName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructGeometryFromSurfaces(
    input: ConstructGeometryFromSurfacesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Types {/* #types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Functions {/* #functions */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Examples {/* #examples */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2024.1.0508.5)
