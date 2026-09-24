---
title: Vector Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Vector Operations

[SA 2026.1.0529.7](/api/dotnet/vector-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/vector-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add a Vector To Vector Name Ref List {/* #add-a-vector-to-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#add-a-vector-to-vector-name-ref-list)

```csharp
public Task AddAVectorToVectorNameRefListAsync(
        CollectionObjectName vectorGroupName,
        string vectorName,
        IEnumerable<VectorName> vectorNameList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Range and Set Vector Group Colorization (All) {/* #auto-range-and-set-vector-group-colorization-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all) · [gRPC Contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-all)

```csharp
public Task AutoRangeAndSetVectorGroupColorizationAllAsync(
        bool treatIndividually,
        ColorizationOptions colorizationOptions,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `colorizationOptions` | MP qualifier: Uses Mode Only. |

## Auto-Range and Set Vector Group Colorization (Selected) {/* #auto-range-and-set-vector-group-colorization-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected) · [gRPC Contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-selected)

```csharp
public Task AutoRangeAndSetVectorGroupColorizationSelectedAsync(
        IEnumerable<CollectionVectorGroupName> vectorGroupsToBeSet,
        bool treatIndividually,
        ColorizationOptions colorizationOptions,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `colorizationOptions` | MP qualifier: Uses Mode Only. |

## Delete i-th Vector From Vector Group {/* #delete-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group) · [gRPC Contract](/api/grpc/vector-operations#delete-i-th-vector-from-vector-group)

```csharp
public Task DeleteIthVectorFromVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        int vectorIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Vector by Name {/* #delete-vector-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vector-by-name) · [gRPC Contract](/api/grpc/vector-operations#delete-vector-by-name)

```csharp
public Task DeleteVectorByNameAsync(
        CollectionObjectName vectorGroupName,
        string vectorName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Vectors {/* #delete-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vectors) · [gRPC Contract](/api/grpc/vector-operations#delete-vectors)

```csharp
public Task DeleteVectorsAsync(
        IEnumerable<VectorName> vectorNameList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Vector From Vector Group {/* #get-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group) · [gRPC Contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-group)

```csharp
public Task<GetIthVectorFromVectorGroupResult> GetIthVectorFromVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        int vectorIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Vector From Vector Name Ref List {/* #get-i-th-vector-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-name-ref-list)

```csharp
public Task<GetIthVectorFromVectorNameRefListResult> GetIthVectorFromVectorNameRefListAsync(
        IEnumerable<VectorName> vectorNameList,
        int vectorIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Vectors in Vector Group {/* #get-number-of-vectors-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group) · [gRPC Contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-group)

```csharp
public Task<int> GetNumberOfVectorsInVectorGroupAsync(
        CollectionObjectName vectorGroupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Vectors in Vector Name Ref List {/* #get-number-of-vectors-in-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-name-ref-list)

```csharp
public Task<int> GetNumberOfVectorsInVectorNameRefListAsync(
        IEnumerable<VectorName> vectorNameList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector From Vector Group By Name {/* #get-vector-from-vector-group-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name) · [gRPC Contract](/api/grpc/vector-operations#get-vector-from-vector-group-by-name)

```csharp
public Task<GetVectorFromVectorGroupByNameResult> GetVectorFromVectorGroupByNameAsync(
        CollectionObjectName vectorGroupName,
        string vectorName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Group Properties {/* #get-vector-group-properties */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-group-properties) · [gRPC Contract](/api/grpc/vector-operations#get-vector-group-properties)

```csharp
public Task<GetVectorGroupPropertiesResult> GetVectorGroupPropertiesAsync(
        CollectionObjectName vectorGroupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Colorization Options (All) {/* #set-vector-group-colorization-options-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all) · [gRPC Contract](/api/grpc/vector-operations#set-vector-group-colorization-options-all)

```csharp
public Task SetVectorGroupColorizationOptionsAllAsync(
        ColorizationOptions colorizationOptions,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Colorization Options (Selected) {/* #set-vector-group-colorization-options-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected) · [gRPC Contract](/api/grpc/vector-operations#set-vector-group-colorization-options-selected)

```csharp
public Task SetVectorGroupColorizationOptionsSelectedAsync(
        IEnumerable<CollectionVectorGroupName> vectorGroupsToBeSet,
        ColorizationOptions colorizationOptions,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Sort Vectors {/* #sort-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#sort-vectors) · [gRPC Contract](/api/grpc/vector-operations#sort-vectors)

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
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2026.1.0529.7)
