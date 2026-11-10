---
title: Vector Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Vector Operations

[SA 2026.1.0529.7](/api/dotnet/vector-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/vector-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Add a Vector To Vector Name Ref List {/* #add-a-vector-to-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#add-a-vector-to-vector-name-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddAVectorToVectorNameRefListAsync(
        CollectionObjectName vectorGroupName,
        string vectorName,
        IEnumerable<VectorName> vectorNameList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Range and Set Vector Group Colorization (All) {/* #auto-range-and-set-vector-group-colorization-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#auto-range-and-set-vector-group-colorization-all)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AutoRangeAndSetVectorGroupColorizationAllAsync(
        bool treatIndividually,
        ColorizationOptions colorizationOptions,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `colorizationOptions` | MP qualifier: Uses Mode Only. |

## Auto-Range and Set Vector Group Colorization (Selected) {/* #auto-range-and-set-vector-group-colorization-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#auto-range-and-set-vector-group-colorization-selected)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AutoRangeAndSetVectorGroupColorizationSelectedAsync(
        IEnumerable<CollectionVectorGroupName> vectorGroupsToBeSet,
        bool treatIndividually,
        ColorizationOptions colorizationOptions,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `colorizationOptions` | MP qualifier: Uses Mode Only. |

## Delete i-th Vector From Vector Group {/* #delete-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#delete-i-th-vector-from-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteIthVectorFromVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        int vectorIndex,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `vectorIndex` | Required (major 3): an omitted value is rejected before dispatch instead of being sent as 0. |

## Delete Vector by Name {/* #delete-vector-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vector-by-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#delete-vector-by-name)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteVectorByNameAsync(
        CollectionObjectName vectorGroupName,
        string vectorName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `vectorName` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

## Delete Vectors {/* #delete-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vectors) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#delete-vectors)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteVectorsAsync(
        IEnumerable<VectorName> vectorNameList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Vector From Vector Group {/* #get-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#get-i-th-vector-from-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetIthVectorFromVectorGroupResult> GetIthVectorFromVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        int vectorIndex = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Vector From Vector Name Ref List {/* #get-i-th-vector-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#get-i-th-vector-from-vector-name-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetIthVectorFromVectorNameRefListResult> GetIthVectorFromVectorNameRefListAsync(
        IEnumerable<VectorName> vectorNameList,
        int vectorIndex = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Vectors in Vector Group {/* #get-number-of-vectors-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#get-number-of-vectors-in-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<int> GetNumberOfVectorsInVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Vectors in Vector Name Ref List {/* #get-number-of-vectors-in-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#get-number-of-vectors-in-vector-name-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<int> GetNumberOfVectorsInVectorNameRefListAsync(
        IEnumerable<VectorName> vectorNameList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector From Vector Group By Name {/* #get-vector-from-vector-group-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#get-vector-from-vector-group-by-name)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetVectorFromVectorGroupByNameResult> GetVectorFromVectorGroupByNameAsync(
        CollectionObjectName vectorGroupName,
        string vectorName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Group Properties {/* #get-vector-group-properties */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-group-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#get-vector-group-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetVectorGroupPropertiesResult> GetVectorGroupPropertiesAsync(
        CollectionObjectName vectorGroupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Colorization Options (All) {/* #set-vector-group-colorization-options-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#set-vector-group-colorization-options-all)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorGroupColorizationOptionsAllAsync(
        ColorizationOptions colorizationOptions,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Colorization Options (Selected) {/* #set-vector-group-colorization-options-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#set-vector-group-colorization-options-selected)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorGroupColorizationOptionsSelectedAsync(
        IEnumerable<CollectionVectorGroupName> vectorGroupsToBeSet,
        ColorizationOptions colorizationOptions,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Sort Vectors {/* #sort-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#sort-vectors) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/vector-operations#sort-vectors)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<VectorName[]> SortVectorsAsync(
        IEnumerable<VectorName> sourceVectors,
        string sortMethod,
        CoordinateSystemType coordinateSystem,
        string primarySortCoordinate = "X (R)",
        string secondarySortCoordinate = "Y (Theta)",
        string tertiarySortCoordinate = "Z (Phi)",
        double primaryCoordinateGranularity = 0.000000,
        double secondaryCoordinateGranularity = 0.000000,
        double tertiaryCoordinateGranularity = 0.000000,
        bool ascending = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
