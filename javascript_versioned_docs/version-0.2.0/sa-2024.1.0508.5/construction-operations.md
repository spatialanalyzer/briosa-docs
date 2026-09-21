---
title: Construction Operations
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations

[SA 2026.1.0529.7](/api/javascript/construction-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Mirror Object(s) {/* #mirror-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#mirror-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#mirror-objects)

```ts
export interface MirrorObjectsInput {
  readonly objects: Iterable<CollectionObjectName>;
  readonly frameName: CollectionObjectName;
  readonly framePlaneToMirrorAround: MirrorFramePlane;
  readonly copy?: boolean;
}

export declare function mirrorObjects(
  briosa: BriosaClient,
  input: MirrorObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Object {/* #copy-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-object)

```ts
export interface CopyObjectInput {
  readonly sourceObject: CollectionObjectName;
  readonly newObjectName: CollectionObjectName;
  readonly overwriteIfExists?: boolean;
}

export declare function copyObject(
  briosa: BriosaClient,
  input: CopyObjectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Objects to a collection {/* #copy-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-objects-to-a-collection)

```ts
export interface CopyObjectsToACollectionInput {
  readonly sourceObjects: Iterable<CollectionObjectName>;
  readonly destinationCollectionName: CollectionName;
}

export declare function copyObjectsToACollection(
  briosa: BriosaClient,
  input: CopyObjectsToACollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects to a collection {/* #move-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#move-objects-to-a-collection)

```ts
export interface MoveObjectsToACollectionInput {
  readonly sourceObjects: Iterable<CollectionObjectName>;
  readonly destinationCollectionName: CollectionName;
}

export declare function moveObjectsToACollection(
  briosa: BriosaClient,
  input: MoveObjectsToACollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Objects - Point to Point Delta {/* #copy-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-objects---point-to-point-delta)

```ts
export interface CopyObjectsPointToPointDeltaInput {
  readonly objectsToCopy: Iterable<CollectionObjectName>;
  readonly firstDeltaPoint: PointName;
  readonly secondDeltaPoint: PointName;
  readonly destinationCollectionName?: CollectionName;
}

export declare function copyObjectsPointToPointDelta(
  briosa: BriosaClient,
  input: CopyObjectsPointToPointDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects - Point to Point Delta {/* #move-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#move-objects---point-to-point-delta)

```ts
export interface MoveObjectsPointToPointDeltaInput {
  readonly objectsToMove: Iterable<CollectionObjectName>;
  readonly firstDeltaPoint: PointName;
  readonly secondDeltaPoint: PointName;
}

export declare function moveObjectsPointToPointDelta(
  briosa: BriosaClient,
  input: MoveObjectsPointToPointDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Point {/* #rename-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-point)

```ts
export interface RenamePointInput {
  readonly originalPointName: PointName;
  readonly newPointName: PointName;
  readonly overwriteIfExists?: boolean;
}

export declare function renamePoint(
  briosa: BriosaClient,
  input: RenamePointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Points with Name Pattern {/* #rename-points-with-name-pattern */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-points-with-name-pattern)

```ts
export interface RenamePointsWithNamePatternInput {
  readonly pointNames: Iterable<PointName>;
  readonly namePattern?: string;
  readonly startValue?: number;
}

export declare function renamePointsWithNamePattern(
  briosa: BriosaClient,
  input: RenamePointsWithNamePatternInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Collection {/* #rename-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-collection)

```ts
export interface RenameCollectionInput {
  readonly originalCollectionName: CollectionName;
  readonly newCollectionName: CollectionName;
}

export declare function renameCollection(
  briosa: BriosaClient,
  input: RenameCollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Object {/* #rename-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-object)

```ts
export interface RenameObjectInput {
  readonly originalObjectName: CollectionObjectName;
  readonly newObjectName: CollectionObjectName;
  readonly overwriteIfExists?: boolean;
}

export declare function renameObject(
  briosa: BriosaClient,
  input: RenameObjectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Item {/* #rename-item */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-item) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-item)

```ts
export interface RenameItemInput {
  readonly originalItemName: CollectionItemName;
  readonly newItemName: CollectionItemName;
  readonly overwriteIfExists?: boolean;
}

export declare function renameItem(
  briosa: BriosaClient,
  input: RenameItemInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Points {/* #delete-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#delete-points)

```ts
export interface DeletePointsInput {
  readonly pointNames: Iterable<PointName>;
}

export declare function deletePoints(
  briosa: BriosaClient,
  input: DeletePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Points WildCard Selection {/* #delete-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#delete-points-wildcard-selection)

```ts
export interface DeletePointsWildcardSelectionInput {
  readonly groupsToDeleteFrom: Iterable<CollectionObjectName>;
  readonly wildcardSelectionNames: PointName;
}

export declare function deletePointsWildcardSelection(
  briosa: BriosaClient,
  input: DeletePointsWildcardSelectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Objects From Surface Faces - Runtime Select {/* #construct-objects-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#construct-objects-from-surface-faces---runtime-select)

```ts
export interface ConstructObjectsFromSurfaceFacesRuntimeSelectInput {
  readonly constructPlanes: boolean;
  readonly constructCylinders: boolean;
  readonly constructSpheres: boolean;
  readonly constructCones: boolean;
  readonly constructLines: boolean;
  readonly constructPoints: boolean;
  readonly constructCircles: boolean;
}

export declare function constructObjectsFromSurfaceFacesRuntimeSelect(
  briosa: BriosaClient,
  input: ConstructObjectsFromSurfaceFacesRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
