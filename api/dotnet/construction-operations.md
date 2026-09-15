---
title: Construction Operations
description: Unreleased Briosa .NET APIs for selected Construction Operations MP commands.
toc_max_heading_level: 2
---

# Construction Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

Methods preserve the MP command words, use .NET casing, append `Async`, and
expose one final optional `CancellationToken`. All methods on this page can
change SpatialAnalyzer state and are never replayed automatically.

## Mirror Object(s)

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: Licensed setter probe; fixture execution required.

:::

[Mirror Object(s)](/mp-command-catalog/commands/construction-operations#mirror-objects) · [gRPC contract](/api/grpc/construction-operations#mirror-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `IEnumerable<CollectionObjectName>` | `Object(s)` | Required |
| `frameName` | `CollectionObjectName` | `Frame Name` | Required |
| `framePlaneToMirrorAround` | `MirrorFramePlane` | `Frame Plane to Mirror Around` | Required |
| `copy` | `bool` | `Copy? [FALSE = Move]` | true |

```csharp
public enum MirrorFramePlane { XY, XZ, YZ }

public Task MirrorObjectsAsync(
    IEnumerable<CollectionObjectName> objects,
    CollectionObjectName frameName,
    MirrorFramePlane framePlaneToMirrorAround,
    bool copy = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MirrorObjectsAsync(objects, frame, MirrorFramePlane.XY);
```

Mirrors the selected objects across an orthogonal plane of `frameName`.

## Copy Object

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Copy Object](/mp-command-catalog/commands/construction-operations#copy-object) · [gRPC contract](/api/grpc/construction-operations#copy-object)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceObject` | `CollectionObjectName` | `Source Object` | Required |
| `newObjectName` | `CollectionObjectName` | `New Object Name` | Required |
| `overwriteIfExists` | `bool` | `Overwrite if exists?` | false |

```csharp
public Task CopyObjectAsync(
    CollectionObjectName sourceObject,
    CollectionObjectName newObjectName,
    bool overwriteIfExists = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CopyObjectAsync(sourceObject, newObjectName);
```

Copies one collection object to a caller-supplied object name.

## Copy Objects to a collection

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Copy Objects to a collection](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection) · [gRPC contract](/api/grpc/construction-operations#copy-objects-to-a-collection)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceObjects` | `IEnumerable<CollectionObjectName>` | `Source Objects` | Required |
| `destinationCollectionName` | `CollectionName` | `Destination Collection Name` | Required |

```csharp
public Task CopyObjectsToACollectionAsync(
    IEnumerable<CollectionObjectName> sourceObjects,
    CollectionName destinationCollectionName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CopyObjectsToACollectionAsync(sourceObjects, destinationCollectionName);
```

Copies selected objects into a destination collection.

## Move Objects to a collection

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Move Objects to a collection](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection) · [gRPC contract](/api/grpc/construction-operations#move-objects-to-a-collection)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceObjects` | `IEnumerable<CollectionObjectName>` | `Source Objects` | Required |
| `destinationCollectionName` | `CollectionName` | `Destination Collection Name` | Required |

```csharp
public Task MoveObjectsToACollectionAsync(
    IEnumerable<CollectionObjectName> sourceObjects,
    CollectionName destinationCollectionName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MoveObjectsToACollectionAsync(sourceObjects, destinationCollectionName);
```

Moves selected objects into a destination collection.

## Copy Objects - Point to Point Delta

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Copy Objects - Point to Point Delta](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta) · [gRPC contract](/api/grpc/construction-operations#copy-objects---point-to-point-delta)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToCopy` | `IEnumerable<CollectionObjectName>` | `Objects to Copy` | Required |
| `firstDeltaPoint` | `PointName` | `First Delta Point` | Required |
| `secondDeltaPoint` | `PointName` | `Second Delta Point` | Required |
| `destinationCollectionName` | `CollectionName?` | `Destination Collection Name (Optional)` | null |

```csharp
public Task CopyObjectsPointToPointDeltaAsync(
    IEnumerable<CollectionObjectName> objectsToCopy,
    PointName firstDeltaPoint,
    PointName secondDeltaPoint,
    CollectionName? destinationCollectionName = null,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CopyObjectsPointToPointDeltaAsync(objectsToCopy, firstPoint, secondPoint);
```

Copies objects by the delta from `firstDeltaPoint` to `secondDeltaPoint`.

## Move Objects - Point to Point Delta

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Move Objects - Point to Point Delta](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta) · [gRPC contract](/api/grpc/construction-operations#move-objects---point-to-point-delta)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToMove` | `IEnumerable<CollectionObjectName>` | `Objects to Move` | Required |
| `firstDeltaPoint` | `PointName` | `First Delta Point` | Required |
| `secondDeltaPoint` | `PointName` | `Second Delta Point` | Required |

```csharp
public Task MoveObjectsPointToPointDeltaAsync(
    IEnumerable<CollectionObjectName> objectsToMove,
    PointName firstDeltaPoint,
    PointName secondDeltaPoint,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MoveObjectsPointToPointDeltaAsync(objectsToMove, firstPoint, secondPoint);
```

Moves objects by the delta from `firstDeltaPoint` to `secondDeltaPoint`.

## Rename Point

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Point](/mp-command-catalog/commands/construction-operations#rename-point) · [gRPC contract](/api/grpc/construction-operations#rename-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalPointName` | `PointName` | `Original Point Name` | Required |
| `newPointName` | `PointName` | `New Point Name` | Required |
| `overwriteIfExists` | `bool` | `Overwrite if exists?` | false |

```csharp
public Task RenamePointAsync(
    PointName originalPointName,
    PointName newPointName,
    bool overwriteIfExists = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenamePointAsync(originalPointName, newPointName);
```

Renames one point.

## Rename Points with Name Pattern

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Points with Name Pattern](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern) · [gRPC contract](/api/grpc/construction-operations#rename-points-with-name-pattern)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `IEnumerable<PointName>` | `Point Names` | Required |
| `namePattern` | `string` | `Name Pattern` | `NewName_%d` |
| `startValue` | `int` | `Start Value` | 1 |

```csharp
public Task RenamePointsWithNamePatternAsync(
    IEnumerable<PointName> pointNames,
    string namePattern = "NewName_%d",
    int startValue = 1,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenamePointsWithNamePatternAsync(pointNames);
```

Renames points using a numbered `%d` name pattern.

## Rename Collection

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Collection](/mp-command-catalog/commands/construction-operations#rename-collection) · [gRPC contract](/api/grpc/construction-operations#rename-collection)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalCollectionName` | `CollectionName` | `Original Collection Name` | Required |
| `newCollectionName` | `CollectionName` | `New Collection Name` | Required |

```csharp
public Task RenameCollectionAsync(
    CollectionName originalCollectionName,
    CollectionName newCollectionName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenameCollectionAsync(originalCollectionName, newCollectionName);
```

Renames one collection.

## Rename Object

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Object](/mp-command-catalog/commands/construction-operations#rename-object) · [gRPC contract](/api/grpc/construction-operations#rename-object)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalObjectName` | `CollectionObjectName` | `Original Object Name` | Required |
| `newObjectName` | `CollectionObjectName` | `New Object Name` | Required |
| `overwriteIfExists` | `bool` | `Overwrite if exists?` | false |

```csharp
public Task RenameObjectAsync(
    CollectionObjectName originalObjectName,
    CollectionObjectName newObjectName,
    bool overwriteIfExists = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenameObjectAsync(originalObjectName, newObjectName);
```

Renames one collection object.

## Rename Item

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — fixture validation required.

:::

[Rename Item](/mp-command-catalog/commands/construction-operations#rename-item) · [gRPC contract](/api/grpc/construction-operations#rename-item)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalItemName` | `CollectionItemName` | `Original Item Name` | Required |
| `newItemName` | `CollectionItemName` | `New Item Name` | Required |
| `overwriteIfExists` | `bool` | `Overwrite if exists?` | false |

```csharp
public Task RenameItemAsync(
    CollectionItemName originalItemName,
    CollectionItemName newItemName,
    bool overwriteIfExists = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenameItemAsync(originalItemName, newItemName);
```

Renames one collection item from SpatialAnalyzer's broader item domain.

## Delete Points

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — destructive fixture validation required.

:::

[Delete Points](/mp-command-catalog/commands/construction-operations#delete-points) · [gRPC contract](/api/grpc/construction-operations#delete-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `IEnumerable<PointName>` | `Point Names` | Required |

```csharp
public Task DeletePointsAsync(
    IEnumerable<PointName> pointNames,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeletePointsAsync(pointNames);
```

Deletes the selected points.

## Delete Points WildCard Selection

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — destructive fixture validation required.

:::

[Delete Points WildCard Selection](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection) · [gRPC contract](/api/grpc/construction-operations#delete-points-wildcard-selection)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `groupsToDeleteFrom` | `IEnumerable<CollectionObjectName>` | `Groups to Delete From` | Required |
| `wildcardSelectionNames` | `PointName` | `WildCard Selection Names` | Required |

```csharp
public Task DeletePointsWildcardSelectionAsync(
    IEnumerable<CollectionObjectName> groupsToDeleteFrom,
    PointName wildcardSelectionNames,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeletePointsWildcardSelectionAsync(groups, wildcardPointName);
```

Deletes matching points within the supplied groups.

## Construct Objects From Surface Faces - Runtime Select

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

Validation: At Risk — interactive fixture validation required.

:::

[Construct Objects From Surface Faces - Runtime Select](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) · [gRPC contract](/api/grpc/construction-operations#construct-objects-from-surface-faces---runtime-select)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectType` | `ConstructObjectType` | `Object Type` | Required |
| `pointOffset` | `double` | `Point Offset` | 0 |

```csharp
public enum ConstructObjectType
{
    Any,
    Circles,
    Cones,
    Cylinders,
    Lines,
    Planes,
    Slots,
    Spheres,
    CenterPoints,
    SurfacePoints,
    VertexPoints,
}

public Task ConstructObjectsFromSurfaceFacesRuntimeSelectAsync(
    ConstructObjectType objectType,
    double pointOffset = 0.0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructObjectsFromSurfaceFacesRuntimeSelectAsync(
    ConstructObjectType.Planes);
```

The operator selects surface faces in SpatialAnalyzer while this call is in
progress. Pass a specific type to avoid an extra type-selection dialog, or pass
`ConstructObjectType.Any` when the operator should choose the type at runtime.
Cancellation does not prove that the SpatialAnalyzer interaction stopped.
