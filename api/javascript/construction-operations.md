---
title: Construction Operations
description: Next Briosa JavaScript and TypeScript APIs for selected Construction Operations MP commands.
toc_max_heading_level: 2
---

# Construction Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands use one
readonly input object; call controls remain a separate final value. All
operations on this page resolve without a command value and are never replayed
automatically.

## Mirror Object(s)

:::note[Status: Next]
Validation: Licensed setter probe; fixture execution required.
:::

[Mirror Object(s)](/mp-command-catalog/commands/construction-operations#mirror-objects) · [gRPC contract](/api/grpc/construction-operations#mirror-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `Iterable<CollectionObjectName>` | `Object(s)` | Required |
| `frameName` | `CollectionObjectName` | `Frame Name` | Required |
| `framePlaneToMirrorAround` | `MirrorFramePlane` | `Frame Plane to Mirror Around` | Required |
| `copy` | `boolean` | `Copy? [FALSE = Move]` | true |

```ts
export type MirrorFramePlane = 'xy' | 'xz' | 'yz';

export interface MirrorObjectsInput {
  readonly objects: Iterable<CollectionObjectName>;
  readonly frameName: CollectionObjectName;
  readonly framePlaneToMirrorAround: MirrorFramePlane;
  readonly copy?: boolean;
}

function mirrorObjects(
  briosa: BriosaClient,
  input: MirrorObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await mirrorObjects(briosa, { objects, frameName, framePlaneToMirrorAround: 'xy' });
```

Mirrors selected objects across one of a frame's orthogonal planes.

## Copy Object

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Copy Object](/mp-command-catalog/commands/construction-operations#copy-object) · [gRPC contract](/api/grpc/construction-operations#copy-object)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceObject` | `CollectionObjectName` | `Source Object` | Required |
| `newObjectName` | `CollectionObjectName` | `New Object Name` | Required |
| `overwriteIfExists` | `boolean` | `Overwrite if exists?` | false |

```ts
export interface CopyObjectInput {
  readonly sourceObject: CollectionObjectName;
  readonly newObjectName: CollectionObjectName;
  readonly overwriteIfExists?: boolean;
}

function copyObject(
  briosa: BriosaClient,
  input: CopyObjectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await copyObject(briosa, { sourceObject, newObjectName });
```

Copies one collection object to a caller-supplied object name.

## Copy Objects to a collection

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Copy Objects to a collection](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection) · [gRPC contract](/api/grpc/construction-operations#copy-objects-to-a-collection)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceObjects` | `Iterable<CollectionObjectName>` | `Source Objects` | Required |
| `destinationCollectionName` | `CollectionName` | `Destination Collection Name` | Required |

```ts
export interface CopyObjectsToACollectionInput {
  readonly sourceObjects: Iterable<CollectionObjectName>;
  readonly destinationCollectionName: CollectionName;
}

function copyObjectsToACollection(
  briosa: BriosaClient,
  input: CopyObjectsToACollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await copyObjectsToACollection(briosa, { sourceObjects, destinationCollectionName });
```

Copies selected objects into a destination collection.

## Move Objects to a collection

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Move Objects to a collection](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection) · [gRPC contract](/api/grpc/construction-operations#move-objects-to-a-collection)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceObjects` | `Iterable<CollectionObjectName>` | `Source Objects` | Required |
| `destinationCollectionName` | `CollectionName` | `Destination Collection Name` | Required |

```ts
export interface MoveObjectsToACollectionInput {
  readonly sourceObjects: Iterable<CollectionObjectName>;
  readonly destinationCollectionName: CollectionName;
}

function moveObjectsToACollection(
  briosa: BriosaClient,
  input: MoveObjectsToACollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await moveObjectsToACollection(briosa, { sourceObjects, destinationCollectionName });
```

Moves selected objects into a destination collection.

## Copy Objects - Point to Point Delta

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Copy Objects - Point to Point Delta](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta) · [gRPC contract](/api/grpc/construction-operations#copy-objects---point-to-point-delta)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToCopy` | `Iterable<CollectionObjectName>` | `Objects to Copy` | Required |
| `firstDeltaPoint` | `PointName` | `First Delta Point` | Required |
| `secondDeltaPoint` | `PointName` | `Second Delta Point` | Required |
| `destinationCollectionName` | `CollectionName` | `Destination Collection Name (Optional)` | Omitted |

```ts
export interface CopyObjectsPointToPointDeltaInput {
  readonly objectsToCopy: Iterable<CollectionObjectName>;
  readonly firstDeltaPoint: PointName;
  readonly secondDeltaPoint: PointName;
  readonly destinationCollectionName?: CollectionName;
}

function copyObjectsPointToPointDelta(
  briosa: BriosaClient,
  input: CopyObjectsPointToPointDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await copyObjectsPointToPointDelta(briosa, { objectsToCopy, firstDeltaPoint, secondDeltaPoint });
```

Copies objects by the delta between two points.

## Move Objects - Point to Point Delta

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Move Objects - Point to Point Delta](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta) · [gRPC contract](/api/grpc/construction-operations#move-objects---point-to-point-delta)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToMove` | `Iterable<CollectionObjectName>` | `Objects to Move` | Required |
| `firstDeltaPoint` | `PointName` | `First Delta Point` | Required |
| `secondDeltaPoint` | `PointName` | `Second Delta Point` | Required |

```ts
export interface MoveObjectsPointToPointDeltaInput {
  readonly objectsToMove: Iterable<CollectionObjectName>;
  readonly firstDeltaPoint: PointName;
  readonly secondDeltaPoint: PointName;
}

function moveObjectsPointToPointDelta(
  briosa: BriosaClient,
  input: MoveObjectsPointToPointDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await moveObjectsPointToPointDelta(briosa, { objectsToMove, firstDeltaPoint, secondDeltaPoint });
```

Moves objects by the delta between two points.

## Rename Point

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Rename Point](/mp-command-catalog/commands/construction-operations#rename-point) · [gRPC contract](/api/grpc/construction-operations#rename-point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalPointName` | `PointName` | `Original Point Name` | Required |
| `newPointName` | `PointName` | `New Point Name` | Required |
| `overwriteIfExists` | `boolean` | `Overwrite if exists?` | false |

```ts
export interface RenamePointInput {
  readonly originalPointName: PointName;
  readonly newPointName: PointName;
  readonly overwriteIfExists?: boolean;
}

function renamePoint(
  briosa: BriosaClient,
  input: RenamePointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renamePoint(briosa, { originalPointName, newPointName });
```

Renames one point.

## Rename Points with Name Pattern

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Rename Points with Name Pattern](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern) · [gRPC contract](/api/grpc/construction-operations#rename-points-with-name-pattern)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `Iterable<PointName>` | `Point Names` | Required |
| `namePattern` | `string` | `Name Pattern` | `NewName_%d` |
| `startValue` | `number` | `Start Value` | 1 |

```ts
export interface RenamePointsWithNamePatternInput {
  readonly pointNames: Iterable<PointName>;
  readonly namePattern?: string;
  readonly startValue?: number;
}

function renamePointsWithNamePattern(
  briosa: BriosaClient,
  input: RenamePointsWithNamePatternInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renamePointsWithNamePattern(briosa, { pointNames });
```

Renames points using a numbered `%d` name pattern.

## Rename Collection

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Rename Collection](/mp-command-catalog/commands/construction-operations#rename-collection) · [gRPC contract](/api/grpc/construction-operations#rename-collection)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalCollectionName` | `CollectionName` | `Original Collection Name` | Required |
| `newCollectionName` | `CollectionName` | `New Collection Name` | Required |

```ts
export interface RenameCollectionInput {
  readonly originalCollectionName: CollectionName;
  readonly newCollectionName: CollectionName;
}

function renameCollection(
  briosa: BriosaClient,
  input: RenameCollectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renameCollection(briosa, { originalCollectionName, newCollectionName });
```

Renames one collection.

## Rename Object

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Rename Object](/mp-command-catalog/commands/construction-operations#rename-object) · [gRPC contract](/api/grpc/construction-operations#rename-object)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalObjectName` | `CollectionObjectName` | `Original Object Name` | Required |
| `newObjectName` | `CollectionObjectName` | `New Object Name` | Required |
| `overwriteIfExists` | `boolean` | `Overwrite if exists?` | false |

```ts
export interface RenameObjectInput {
  readonly originalObjectName: CollectionObjectName;
  readonly newObjectName: CollectionObjectName;
  readonly overwriteIfExists?: boolean;
}

function renameObject(
  briosa: BriosaClient,
  input: RenameObjectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renameObject(briosa, { originalObjectName, newObjectName });
```

Renames one collection object.

## Rename Item

:::note[Status: Next]
Validation: At Risk — fixture validation required.
:::

[Rename Item](/mp-command-catalog/commands/construction-operations#rename-item) · [gRPC contract](/api/grpc/construction-operations#rename-item)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalItemName` | `CollectionItemName` | `Original Item Name` | Required |
| `newItemName` | `CollectionItemName` | `New Item Name` | Required |
| `overwriteIfExists` | `boolean` | `Overwrite if exists?` | false |

```ts
export interface RenameItemInput {
  readonly originalItemName: CollectionItemName;
  readonly newItemName: CollectionItemName;
  readonly overwriteIfExists?: boolean;
}

function renameItem(
  briosa: BriosaClient,
  input: RenameItemInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renameItem(briosa, { originalItemName, newItemName });
```

Renames one collection item from SpatialAnalyzer's broader item domain.

## Delete Points

:::note[Status: Next]
Validation: At Risk — destructive fixture validation required.
:::

[Delete Points](/mp-command-catalog/commands/construction-operations#delete-points) · [gRPC contract](/api/grpc/construction-operations#delete-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `Iterable<PointName>` | `Point Names` | Required |

```ts
export interface DeletePointsInput {
  readonly pointNames: Iterable<PointName>;
}

function deletePoints(
  briosa: BriosaClient,
  input: DeletePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deletePoints(briosa, { pointNames });
```

Deletes the selected points.

## Delete Points WildCard Selection

:::note[Status: Next]
Validation: At Risk — destructive fixture validation required.
:::

[Delete Points WildCard Selection](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection) · [gRPC contract](/api/grpc/construction-operations#delete-points-wildcard-selection)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupsToDeleteFrom` | `Iterable<CollectionObjectName>` | `Groups to Delete From` | Required |
| `wildcardSelectionNames` | `PointName` | `WildCard Selection Names` | Required |

```ts
export interface DeletePointsWildcardSelectionInput {
  readonly groupsToDeleteFrom: Iterable<CollectionObjectName>;
  readonly wildcardSelectionNames: PointName;
}

function deletePointsWildcardSelection(
  briosa: BriosaClient,
  input: DeletePointsWildcardSelectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deletePointsWildcardSelection(briosa, { groupsToDeleteFrom, wildcardSelectionNames });
```

Deletes matching points within the supplied groups.

## Construct Objects From Surface Faces - Runtime Select

:::note[Status: Next]
Validation: At Risk — interactive fixture validation required.
:::

[Construct Objects From Surface Faces - Runtime Select](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) · [gRPC contract](/api/grpc/construction-operations#construct-objects-from-surface-faces---runtime-select)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectType` | `ConstructObjectType` | `Object Type` | Required |
| `pointOffset` | `number` | `Point Offset` | 0 |

```ts
export type ConstructObjectType =
  | 'any'
  | 'circles'
  | 'cones'
  | 'cylinders'
  | 'lines'
  | 'planes'
  | 'slots'
  | 'spheres'
  | 'center_points'
  | 'surface_points'
  | 'vertex_points';

export interface ConstructObjectsFromSurfaceFacesRuntimeSelectInput {
  readonly objectType: ConstructObjectType;
  readonly pointOffset?: number;
}

function constructObjectsFromSurfaceFacesRuntimeSelect(
  briosa: BriosaClient,
  input: ConstructObjectsFromSurfaceFacesRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await constructObjectsFromSurfaceFacesRuntimeSelect(briosa, {
  objectType: 'planes',
});
```

The operator selects surface faces in SpatialAnalyzer while this call is in
progress. Pass a specific type to avoid an extra type-selection dialog, or pass
`'any'` when the operator should choose the type at runtime. Cancellation does
not prove that the SpatialAnalyzer interaction stopped.
