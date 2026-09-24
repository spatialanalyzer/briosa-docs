---
title: Construction Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations

[SA 2026.1.0529.7](/api/dotnet/construction-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Mirror Object(s) {/* #mirror-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#mirror-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#mirror-objects)

```csharp
public Task MirrorObjectsAsync(
        IEnumerable<CollectionObjectName> objects,
        CollectionObjectName frameName,
        MirrorFramePlane framePlaneToMirrorAround,
        bool copy = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Object {/* #copy-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-object)

```csharp
public Task CopyObjectAsync(
        CollectionObjectName sourceObject,
        CollectionObjectName newObjectName,
        bool overwriteIfExists = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Objects to a collection {/* #copy-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-objects-to-a-collection)

```csharp
public Task CopyObjectsToACollectionAsync(
        IEnumerable<CollectionObjectName> sourceObjects,
        CollectionName destinationCollectionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects to a collection {/* #move-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#move-objects-to-a-collection)

```csharp
public Task MoveObjectsToACollectionAsync(
        IEnumerable<CollectionObjectName> sourceObjects,
        CollectionName destinationCollectionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Objects - Point to Point Delta {/* #copy-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-objects---point-to-point-delta)

```csharp
public Task CopyObjectsPointToPointDeltaAsync(
        IEnumerable<CollectionObjectName> objectsToCopy,
        PointName firstDeltaPoint,
        PointName secondDeltaPoint,
        CollectionName? destinationCollectionName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects - Point to Point Delta {/* #move-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#move-objects---point-to-point-delta)

```csharp
public Task MoveObjectsPointToPointDeltaAsync(
        IEnumerable<CollectionObjectName> objectsToMove,
        PointName firstDeltaPoint,
        PointName secondDeltaPoint,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Point {/* #rename-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-point)

```csharp
public Task RenamePointAsync(
        PointName originalPointName,
        PointName newPointName,
        bool overwriteIfExists = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Points with Name Pattern {/* #rename-points-with-name-pattern */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-points-with-name-pattern)

```csharp
public Task RenamePointsWithNamePatternAsync(
        IEnumerable<PointName> pointNames,
        string namePattern = "NewName_%d",
        int startValue = 1,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Collection {/* #rename-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-collection)

```csharp
public Task RenameCollectionAsync(
        CollectionName originalCollectionName,
        CollectionName newCollectionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Object {/* #rename-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-object)

```csharp
public Task RenameObjectAsync(
        CollectionObjectName originalObjectName,
        CollectionObjectName newObjectName,
        bool overwriteIfExists = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Item {/* #rename-item */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-item) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-item)

```csharp
public Task RenameItemAsync(
        CollectionItemName originalItemName,
        CollectionItemName newItemName,
        bool overwriteIfExists = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Points {/* #delete-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#delete-points)

```csharp
public Task DeletePointsAsync(
        IEnumerable<PointName> pointNames,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Points WildCard Selection {/* #delete-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#delete-points-wildcard-selection)

```csharp
public Task DeletePointsWildcardSelectionAsync(
        IEnumerable<CollectionObjectName> groupsToDeleteFrom,
        PointName wildcardSelectionNames,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Objects From Surface Faces - Runtime Select {/* #construct-objects-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#construct-objects-from-surface-faces---runtime-select)

```csharp
public Task ConstructObjectsFromSurfaceFacesRuntimeSelectAsync(
        bool constructPlanes,
        bool constructCylinders,
        bool constructSpheres,
        bool constructCones,
        bool constructLines,
        bool constructPoints,
        bool constructCircles,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
