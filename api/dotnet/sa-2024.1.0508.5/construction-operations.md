---
title: Construction Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations

[SA 2026.1.0529.7](/api/dotnet/construction-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Mirror Object(s) {/* #mirror-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#mirror-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#mirror-objects)

Client 0.5.0 removed this method with behavioral contract major 3. SpatialAnalyzer returned MP code -1 on both exact targets. No replacement mirrors objects on these exact targets. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Copy Object {/* #copy-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-object)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task CopyObjectAsync(
        CollectionObjectName sourceObject,
        CollectionObjectName newObjectName,
        bool overwriteIfExists = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Objects to a collection {/* #copy-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects-to-a-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-objects-to-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task CopyObjectsToACollectionAsync(
        IEnumerable<CollectionObjectName> sourceObjects,
        CollectionName destinationCollectionName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects to a collection {/* #move-objects-to-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects-to-a-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#move-objects-to-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MoveObjectsToACollectionAsync(
        IEnumerable<CollectionObjectName> sourceObjects,
        CollectionName destinationCollectionName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Objects - Point to Point Delta {/* #copy-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#copy-objects---point-to-point-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#copy-objects---point-to-point-delta)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task CopyObjectsPointToPointDeltaAsync(
        IEnumerable<CollectionObjectName> objectsToCopy,
        PointName firstDeltaPoint,
        PointName secondDeltaPoint,
        CollectionName? destinationCollectionName = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects - Point to Point Delta {/* #move-objects---point-to-point-delta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#move-objects---point-to-point-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#move-objects---point-to-point-delta)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MoveObjectsPointToPointDeltaAsync(
        IEnumerable<CollectionObjectName> objectsToMove,
        PointName firstDeltaPoint,
        PointName secondDeltaPoint,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Point {/* #rename-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task RenamePointAsync(
        PointName originalPointName,
        PointName newPointName,
        bool overwriteIfExists = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Points with Name Pattern {/* #rename-points-with-name-pattern */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-points-with-name-pattern) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-points-with-name-pattern)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task RenamePointsWithNamePatternAsync(
        IEnumerable<PointName> pointNames,
        string namePattern = "NewName_%d",
        int startValue = 1,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Collection {/* #rename-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task RenameCollectionAsync(
        CollectionName originalCollectionName,
        CollectionName newCollectionName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Object {/* #rename-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-object)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task RenameObjectAsync(
        CollectionObjectName originalObjectName,
        CollectionObjectName newObjectName,
        bool overwriteIfExists = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Item {/* #rename-item */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#rename-item) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#rename-item)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task RenameItemAsync(
        CollectionItemName originalItemName,
        CollectionItemName newItemName,
        bool overwriteIfExists = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Points {/* #delete-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#delete-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeletePointsAsync(
        IEnumerable<PointName> pointNames,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Points WildCard Selection {/* #delete-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#delete-points-wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#delete-points-wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeletePointsWildcardSelectionAsync(
        IEnumerable<CollectionObjectName> groupsToDeleteFrom,
        PointName wildcardSelectionNames,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Objects From Surface Faces - Runtime Select {/* #construct-objects-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations#construct-objects-from-surface-faces---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task ConstructObjectsFromSurfaceFacesRuntimeSelectAsync(
        bool constructPlanes,
        bool constructCylinders,
        bool constructSpheres,
        bool constructCones,
        bool constructLines,
        bool constructPoints,
        bool constructCircles,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
