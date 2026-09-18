---
title: Construction Operations / Vectors and Vector Groups
description: Briosa 0.1.0 .NET APIs for selected vector and Vector Group construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

## ConstructVectorGroupGroupToGroupCompareAsync

```csharp
public sealed record ConstructVectorGroupGroupToGroupCompareResult(
    int VectorCount,
    double RmsDeviation,
    double MaxAbsoluteDeviation,
    double AverageDeviation);

public Task<ConstructVectorGroupGroupToGroupCompareResult>
    ConstructVectorGroupGroupToGroupCompareAsync(
        CollectionObjectName vectorGroupName,
        CollectionObjectName groupA,
        CollectionObjectName groupB,
        double rmsDeviationTolerance = 0.0,
        double maxAbsoluteDeviationTolerance = 0.0,
        double averageDeviationTolerance = 0.0,
        CancellationToken cancellationToken = default);
```

```csharp
var comparison = await briosa.ConstructionOperations
    .ConstructVectorGroupGroupToGroupCompareAsync(
        vectorGroupName,
        groupA,
        groupB);
```

The three tolerances default to `0.0`, which disables their corresponding
checks.

## ConstructVectorGroupAreaProfileCheckAsync

```csharp
public Task ConstructVectorGroupAreaProfileCheckAsync(
    IEnumerable<VectorName> referenceVectors,
    IEnumerable<CollectionVectorGroupName> vectorGroupsToCheck,
    CollectionVectorGroupName resultantVectorGroupName,
    double areaRadius = 0.0,
    double areaTolerance = 0.0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructVectorGroupAreaProfileCheckAsync(
    referenceVectors,
    vectorGroupsToCheck,
    resultantVectorGroupName);
```

## ConstructVectorGroupFromVectorNameRefListAsync

```csharp
public Task ConstructVectorGroupFromVectorNameRefListAsync(
    IEnumerable<VectorName> vectorNameList,
    CollectionVectorGroupName resultantVectorGroupName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructVectorGroupFromVectorNameRefListAsync(
    vectorNames,
    resultantVectorGroupName);
```

## ConstructVectorInWorkingCoordinatesBeginDeltaAsync

```csharp
public Task ConstructVectorInWorkingCoordinatesBeginDeltaAsync(
    CollectionObjectName vectorGroupName,
    string newVectorName,
    Vector beginInWorkingCoordinates,
    Vector deltaInWorkingCoordinates,
    bool isMagnitudeNegative = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructVectorInWorkingCoordinatesBeginDeltaAsync(
    vectorGroupName,
    "Deviation 1",
    begin,
    delta);
```

## ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeAsync

```csharp
public Task ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeAsync(
    CollectionObjectName vectorGroupName,
    string newVectorName,
    Vector beginInWorkingCoordinates,
    Vector directionInWorkingCoordinates,
    double signedMagnitude = 0.0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations
    .ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeAsync(
        vectorGroupName,
        "Deviation 2",
        begin,
        direction,
        signedMagnitude: 5.0);
```

## ConstructVectorGroupFromRelationshipAsync

```csharp
public Task ConstructVectorGroupFromRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionVectorGroupName vectorGroupName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.ConstructVectorGroupFromRelationshipAsync(
    relationshipName,
    vectorGroupName);
```

## MakeVectorNameRefListFromVectorGroupAsync

```csharp
public Task<IReadOnlyList<VectorName>> MakeVectorNameRefListFromVectorGroupAsync(
    CollectionObjectName vectorGroupName,
    CancellationToken cancellationToken = default);
```

```csharp
var vectorNames = await briosa.ConstructionOperations
    .MakeVectorNameRefListFromVectorGroupAsync(vectorGroupName);
```

## MakeVectorNameRefListRuntimeSelectAsync

```csharp
public Task<IReadOnlyList<VectorName>> MakeVectorNameRefListRuntimeSelectAsync(
    string userPrompt = " Select Vectors (ENTER when done) ",
    CancellationToken cancellationToken = default);
```

```csharp
var selectedVectors = await briosa.ConstructionOperations
    .MakeVectorNameRefListRuntimeSelectAsync();
```

This method opens an operator-interactive selection in SpatialAnalyzer.
Cancellation does not prove that the SA interaction stopped.

## MakeCollectionVectorGroupNameRefListRuntimeSelectAsync

```csharp
public Task<IReadOnlyList<CollectionVectorGroupName>>
    MakeCollectionVectorGroupNameRefListRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

```csharp
var selectedGroups = await briosa.ConstructionOperations
    .MakeCollectionVectorGroupNameRefListRuntimeSelectAsync(
        userPrompt: "Select vector groups");
```

This method is operator-interactive. Cancellation does not prove that the SA
interaction stopped.

## MakeVectorNamesUniqueInVectorGroupAsync

```csharp
public Task MakeVectorNamesUniqueInVectorGroupAsync(
    CollectionObjectName vectorGroupName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ConstructionOperations.MakeVectorNamesUniqueInVectorGroupAsync(
    vectorGroupName);
```

SpatialAnalyzer owns the mutation and resulting names. None of these methods
is automatically replayed after an unknown execution outcome.

The wildcard-selection command is SDK unavailable for this target. Construct,
decompose, and normalize `Vector` values directly in .NET rather than making an
RPC.

[Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups) · [gRPC](/api/grpc/construction-operations-vectors-and-vector-groups)
