---
title: Construction Operations / Vectors and Vector Groups
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

[SA 2026.1.0529.7](/api/dotnet/construction-operations-vectors-and-vector-groups) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Construct a Vector Group - Group to Group Compare {/* #construct-a-vector-group---group-to-group-compare */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<ConstructVectorGroupGroupToGroupCompareResult> ConstructVectorGroupGroupToGroupCompareAsync(
        CollectionObjectName vectorGroupName,
        CollectionObjectName groupA,
        CollectionObjectName groupB,
        double rmsDeviationTolerance = 0.0,
        double maxAbsoluteDeviationTolerance = 0.0,
        double averageDeviationTolerance = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group - Area Profile Check {/* #construct-a-vector-group---area-profile-check */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructVectorGroupAreaProfileCheckAsync(
        IEnumerable<VectorName> referenceVectors,
        IEnumerable<CollectionVectorGroupName> vectorGroupsToCheck,
        CollectionVectorGroupName resultantVectorGroupName,
        double areaRadius = 0.0,
        double areaTolerance = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group From Vector Name Ref List {/* #construct-a-vector-group-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructVectorGroupFromVectorNameRefListAsync(
        IEnumerable<VectorName> vectorNameList,
        CollectionVectorGroupName resultantVectorGroupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector in Working Coordinates(Begin/Delta) {/* #construct-a-vector-in-working-coordinatesbegindelta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructVectorInWorkingCoordinatesBeginDeltaAsync(
        CollectionObjectName vectorGroupName,
        string newVectorName,
        Vector beginInWorkingCoordinates,
        Vector deltaInWorkingCoordinates,
        bool isMagnitudeNegative = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector in Working Coordinates(Begin/Direction/Mag.) {/* #construct-a-vector-in-working-coordinatesbegindirectionmag */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeAsync(
        CollectionObjectName vectorGroupName,
        string newVectorName,
        Vector beginInWorkingCoordinates,
        Vector directionInWorkingCoordinates,
        double signedMagnitude = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group From a Relationship {/* #construct-a-vector-group-from-a-relationship */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructVectorGroupFromRelationshipAsync(
        CollectionObjectName relationshipName,
        CollectionVectorGroupName vectorGroupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Vector Name Ref List From a Vector Group {/* #make-a-vector-name-ref-list-from-a-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<VectorName>> MakeVectorNameRefListFromVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Vector Name Ref List - Runtime Select {/* #make-a-vector-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select)

Client 0.5.0 removed this method with behavioral contract major 3. No operator could complete its selection on either exact target in a licensed session, so it is unverified. SpatialAnalyzer never rejected it. It can return in a later 3.x revision once a licensed session verifies it. Build a vector name list directly, or from a vector group with Make a Vector Name Ref List From a Vector Group. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Make a Collection Vector Group Name Ref List - Runtime Select {/* #make-a-collection-vector-group-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select)

Client 0.5.0 removed this method with behavioral contract major 3. SpatialAnalyzer returned MP code 2 on both exact targets, but the selected vector groups could not be read back. No replacement selects vector groups at run time on these exact targets. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Make Vector Names Unique in Vector Group {/* #make-vector-names-unique-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeVectorNamesUniqueInVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        Action<MpCompletion>? onMpCompletion = null,
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

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
