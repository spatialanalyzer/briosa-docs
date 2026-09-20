---
title: Construction Operations / Vectors and Vector Groups
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

[SA 2026.1.0529.7](/api/dotnet/construction-operations-vectors-and-vector-groups) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct a Vector Group - Group to Group Compare {/* #construct-a-vector-group---group-to-group-compare */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare)

```csharp
public Task<ConstructVectorGroupGroupToGroupCompareResult> ConstructVectorGroupGroupToGroupCompareAsync(
        CollectionObjectName vectorGroupName,
        CollectionObjectName groupA,
        CollectionObjectName groupB,
        double rmsDeviationTolerance = 0.0,
        double maxAbsoluteDeviationTolerance = 0.0,
        double averageDeviationTolerance = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group - Area Profile Check {/* #construct-a-vector-group---area-profile-check */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check)

```csharp
public Task ConstructVectorGroupAreaProfileCheckAsync(
        IEnumerable<VectorName> referenceVectors,
        IEnumerable<CollectionVectorGroupName> vectorGroupsToCheck,
        CollectionVectorGroupName resultantVectorGroupName,
        double areaRadius = 0.0,
        double areaTolerance = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group From Vector Name Ref List {/* #construct-a-vector-group-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list)

```csharp
public Task ConstructVectorGroupFromVectorNameRefListAsync(
        IEnumerable<VectorName> vectorNameList,
        CollectionVectorGroupName resultantVectorGroupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector in Working Coordinates(Begin/Delta) {/* #construct-a-vector-in-working-coordinatesbegindelta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta)

```csharp
public Task ConstructVectorInWorkingCoordinatesBeginDeltaAsync(
        CollectionObjectName vectorGroupName,
        string newVectorName,
        Vector beginInWorkingCoordinates,
        Vector deltaInWorkingCoordinates,
        bool isMagnitudeNegative = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector in Working Coordinates(Begin/Direction/Mag.) {/* #construct-a-vector-in-working-coordinatesbegindirectionmag */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag)

```csharp
public Task ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeAsync(
        CollectionObjectName vectorGroupName,
        string newVectorName,
        Vector beginInWorkingCoordinates,
        Vector directionInWorkingCoordinates,
        double signedMagnitude = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group From a Relationship {/* #construct-a-vector-group-from-a-relationship */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship)

```csharp
public Task ConstructVectorGroupFromRelationshipAsync(
        CollectionObjectName relationshipName,
        CollectionVectorGroupName vectorGroupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Vector Name Ref List From a Vector Group {/* #make-a-vector-name-ref-list-from-a-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group)

```csharp
public Task<IReadOnlyList<VectorName>> MakeVectorNameRefListFromVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Vector Name Ref List - Runtime Select {/* #make-a-vector-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select)

```csharp
public Task<IReadOnlyList<VectorName>> MakeVectorNameRefListRuntimeSelectAsync(
        string userPrompt = " Select Vectors (ENTER when done) ",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Vector Group Name Ref List - Runtime Select {/* #make-a-collection-vector-group-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select)

```csharp
public Task<IReadOnlyList<CollectionVectorGroupName>> MakeCollectionVectorGroupNameRefListRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Vector Names Unique in Vector Group {/* #make-vector-names-unique-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group)

```csharp
public Task MakeVectorNamesUniqueInVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## ConstructVectorGroupGroupToGroupCompareAsync {/* #constructvectorgroupgrouptogroupcompareasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorGroupAreaProfileCheckAsync {/* #constructvectorgroupareaprofilecheckasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorGroupFromVectorNameRefListAsync {/* #constructvectorgroupfromvectornamereflistasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorInWorkingCoordinatesBeginDeltaAsync {/* #constructvectorinworkingcoordinatesbegindeltaasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeAsync {/* #constructvectorinworkingcoordinatesbegindirectionmagnitudeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructVectorGroupFromRelationshipAsync {/* #constructvectorgroupfromrelationshipasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeVectorNameRefListFromVectorGroupAsync {/* #makevectornamereflistfromvectorgroupasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeVectorNameRefListRuntimeSelectAsync {/* #makevectornamereflistruntimeselectasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeCollectionVectorGroupNameRefListRuntimeSelectAsync {/* #makecollectionvectorgroupnamereflistruntimeselectasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeVectorNamesUniqueInVectorGroupAsync {/* #makevectornamesuniqueinvectorgroupasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
