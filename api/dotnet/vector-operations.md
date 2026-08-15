---
title: Vector Operations
description: Next Briosa .NET APIs for supported Vector Operations MP commands.
toc_max_heading_level: 2
---

# Vector Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Add a Vector To Vector Name Ref List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add a Vector To Vector Name Ref List](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#add-a-vector-to-vector-name-ref-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |
| `vectorNameList` | `IEnumerable<VectorName>` | `Vector Name List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddAVectorToVectorNameRefListAsync(
    CollectionObjectName vectorGroupName,
    string vectorName,
    IEnumerable<VectorName> vectorNameList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddAVectorToVectorNameRefListAsync(vectorGroupName: vectorGroupName, vectorName: vectorName, vectorNameList: vectorNameList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Auto-Range and Set Vector Group Colorization (All)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Auto-Range and Set Vector Group Colorization (All)](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all) · [gRPC contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-all)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `treatIndividually` | `bool` | `Treat Individually?` | false |
| `colorizationOptionsUsesModeOnly` | `Color` | `Colorization Options (Uses Mode Only)` | Red |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AutoRangeAndSetVectorGroupColorizationAllAsync(
    bool treatIndividually,
    Color colorizationOptionsUsesModeOnly,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AutoRangeAndSetVectorGroupColorizationAllAsync(treatIndividually: treatIndividually, colorizationOptionsUsesModeOnly: colorizationOptionsUsesModeOnly);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Auto-Range and Set Vector Group Colorization (Selected)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Auto-Range and Set Vector Group Colorization (Selected)](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected) · [gRPC contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-selected)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupsToBeSet` | `IEnumerable<CollectionVectorGroupName>` | `Vector Groups to be Set` | Required |
| `treatIndividually` | `bool` | `Treat Individually?` | false |
| `colorizationOptionsUsesModeOnly` | `Color` | `Colorization Options (Uses Mode Only)` | Red |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AutoRangeAndSetVectorGroupColorizationSelectedAsync(
    IEnumerable<CollectionVectorGroupName> vectorGroupsToBeSet,
    bool treatIndividually,
    Color colorizationOptionsUsesModeOnly,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AutoRangeAndSetVectorGroupColorizationSelectedAsync(vectorGroupsToBeSet: vectorGroupsToBeSet, treatIndividually: treatIndividually, colorizationOptionsUsesModeOnly: colorizationOptionsUsesModeOnly);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete i-th Vector From Vector Group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete i-th Vector From Vector Group](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group) · [gRPC contract](/api/grpc/vector-operations#delete-i-th-vector-from-vector-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorIndex` | `int` | `Vector Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteIthVectorFromVectorGroupAsync(
    CollectionObjectName vectorGroupName,
    int vectorIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteIthVectorFromVectorGroupAsync(vectorGroupName: vectorGroupName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Vector by Name

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Vector by Name](/mp-command-catalog/commands/vector-operations#delete-vector-by-name) · [gRPC contract](/api/grpc/vector-operations#delete-vector-by-name)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteVectorByNameAsync(
    CollectionObjectName vectorGroupName,
    string vectorName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteVectorByNameAsync(vectorGroupName: vectorGroupName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Vectors

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Vectors](/mp-command-catalog/commands/vector-operations#delete-vectors) · [gRPC contract](/api/grpc/vector-operations#delete-vectors)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorNameList` | `IEnumerable<VectorName>` | `Vector Name List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteVectorsAsync(
    IEnumerable<VectorName> vectorNameList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteVectorsAsync(vectorNameList: vectorNameList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get i-th Vector From Vector Group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get i-th Vector From Vector Group](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group) · [gRPC contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorIndex` | `int` | `Vector Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `VectorName` | `string` | `Vector Name` |
| `BeginInWorking` | `Vector` | `Begin in Working` |
| `EndInWorking` | `Vector` | `End in Working` |
| `TotalDeltaInWorking` | `Vector` | `Total Delta in Working` |
| `IjkUnitVectorInWorking` | `Vector` | `ijk Unit Vector in Working` |
| `Magnitude` | `double` | `Magnitude` |

```csharp
public sealed record GetIthVectorFromVectorGroupResult
{
    public required string VectorName { get; init; }

    public required Vector BeginInWorking { get; init; }

    public required Vector EndInWorking { get; init; }

    public required Vector TotalDeltaInWorking { get; init; }

    public required Vector IjkUnitVectorInWorking { get; init; }

    public required double Magnitude { get; init; }
}

public Task<GetIthVectorFromVectorGroupResult> GetIthVectorFromVectorGroupAsync(
    CollectionObjectName vectorGroupName,
    int vectorIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetIthVectorFromVectorGroupAsync(vectorGroupName: vectorGroupName);
```

Returns the 6 MP outputs in the named `GetIthVectorFromVectorGroupResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get i-th Vector From Vector Name Ref List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get i-th Vector From Vector Name Ref List](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-name-ref-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorNameList` | `IEnumerable<VectorName>` | `Vector Name List` | Required |
| `vectorIndex` | `int` | `Vector Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `VectorGroupName` | `CollectionObjectName` | `Vector Group Name` |
| `VectorName` | `string` | `Vector Name` |
| `BeginInWorking` | `Vector` | `Begin in Working` |
| `EndInWorking` | `Vector` | `End in Working` |
| `TotalDeltaInWorking` | `Vector` | `Total Delta in Working` |
| `IjkUnitVectorInWorking` | `Vector` | `ijk Unit Vector in Working` |
| `Magnitude` | `double` | `Magnitude` |

```csharp
public sealed record GetIthVectorFromVectorNameRefListResult
{
    public required CollectionObjectName VectorGroupName { get; init; }

    public required string VectorName { get; init; }

    public required Vector BeginInWorking { get; init; }

    public required Vector EndInWorking { get; init; }

    public required Vector TotalDeltaInWorking { get; init; }

    public required Vector IjkUnitVectorInWorking { get; init; }

    public required double Magnitude { get; init; }
}

public Task<GetIthVectorFromVectorNameRefListResult> GetIthVectorFromVectorNameRefListAsync(
    IEnumerable<VectorName> vectorNameList,
    int vectorIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetIthVectorFromVectorNameRefListAsync(vectorNameList: vectorNameList);
```

Returns the 7 MP outputs in the named `GetIthVectorFromVectorNameRefListResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Number of Vectors in Vector Group

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Number of Vectors in Vector Group](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group) · [gRPC contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-group)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TotalCount` | `int` | `Total Count` |

```csharp
public Task<int> GetNumberOfVectorsInVectorGroupAsync(
    CollectionObjectName vectorGroupName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNumberOfVectorsInVectorGroupAsync(vectorGroupName: vectorGroupName);
```

Returns the MP output `Total Count` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Number of Vectors in Vector Name Ref List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Number of Vectors in Vector Name Ref List](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-name-ref-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorNameList` | `IEnumerable<VectorName>` | `Vector Name List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TotalCount` | `int` | `Total Count` |

```csharp
public Task<int> GetNumberOfVectorsInVectorNameRefListAsync(
    IEnumerable<VectorName> vectorNameList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNumberOfVectorsInVectorNameRefListAsync(vectorNameList: vectorNameList);
```

Returns the MP output `Total Count` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Vector From Vector Group By Name

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Vector From Vector Group By Name](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name) · [gRPC contract](/api/grpc/vector-operations#get-vector-from-vector-group-by-name)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `BeginInWorking` | `Vector` | `Begin in Working` |
| `EndInWorking` | `Vector` | `End in Working` |
| `TotalDeltaInWorking` | `Vector` | `Total Delta in Working` |
| `IjkUnitVectorInWorking` | `Vector` | `ijk Unit Vector in Working` |
| `Magnitude` | `double` | `Magnitude` |

```csharp
public sealed record GetVectorFromVectorGroupByNameResult
{
    public required Vector BeginInWorking { get; init; }

    public required Vector EndInWorking { get; init; }

    public required Vector TotalDeltaInWorking { get; init; }

    public required Vector IjkUnitVectorInWorking { get; init; }

    public required double Magnitude { get; init; }
}

public Task<GetVectorFromVectorGroupByNameResult> GetVectorFromVectorGroupByNameAsync(
    CollectionObjectName vectorGroupName,
    string vectorName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetVectorFromVectorGroupByNameAsync(vectorGroupName: vectorGroupName);
```

Returns the 5 MP outputs in the named `GetVectorFromVectorGroupByNameResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Vector Group Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Vector Group Properties](/mp-command-catalog/commands/vector-operations#get-vector-group-properties) · [gRPC contract](/api/grpc/vector-operations#get-vector-group-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TotalVectors` | `int` | `Total Vectors` |
| `VectorsInTolerance` | `int` | `Vectors In Tolerance` |
| `VectorsOutOfTolerance` | `int` | `Vectors Out Of Tolerance` |
| `InvalidVectors` | `int` | `Invalid Vectors` |
| `VectorsInTolerance2` | `double` | `% Vectors In Tolerance` |
| `VectorsOutOfTolerance2` | `double` | `% Vectors Out Of Tolerance` |
| `AbsoluteMaxMagnitude` | `double` | `Absolute Max Magnitude` |
| `AbsoluteMinMagnitude` | `double` | `Absolute Min Magnitude` |
| `MaxMagnitude` | `double` | `Max Magnitude` |
| `MinMagnitude` | `double` | `Min Magnitude` |
| `StandardDeviationFromZero` | `double` | `Standard Deviation From Zero` |
| `StandardDeviationFromMean` | `double` | `Standard Deviation From Mean` |
| `AvgMagnitude` | `double` | `Avg Magnitude` |
| `AvgOfAbsMagnitude` | `double` | `Avg of Abs Magnitude` |
| `HighToleranceValue` | `double` | `High Tolerance Value` |
| `LowToleranceValue` | `double` | `Low Tolerance Value` |
| `RmsValue` | `double` | `RMS Value` |

```csharp
public sealed record GetVectorGroupPropertiesResult
{
    public required int TotalVectors { get; init; }

    public required int VectorsInTolerance { get; init; }

    public required int VectorsOutOfTolerance { get; init; }

    public required int InvalidVectors { get; init; }

    public required double VectorsInTolerance2 { get; init; }

    public required double VectorsOutOfTolerance2 { get; init; }

    public required double AbsoluteMaxMagnitude { get; init; }

    public required double AbsoluteMinMagnitude { get; init; }

    public required double MaxMagnitude { get; init; }

    public required double MinMagnitude { get; init; }

    public required double StandardDeviationFromZero { get; init; }

    public required double StandardDeviationFromMean { get; init; }

    public required double AvgMagnitude { get; init; }

    public required double AvgOfAbsMagnitude { get; init; }

    public required double HighToleranceValue { get; init; }

    public required double LowToleranceValue { get; init; }

    public required double RmsValue { get; init; }
}

public Task<GetVectorGroupPropertiesResult> GetVectorGroupPropertiesAsync(
    CollectionObjectName vectorGroupName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetVectorGroupPropertiesAsync(vectorGroupName: vectorGroupName);
```

Returns the 17 MP outputs in the named `GetVectorGroupPropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Vector Group Colorization Options (All)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Vector Group Colorization Options (All)](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all) · [gRPC contract](/api/grpc/vector-operations#set-vector-group-colorization-options-all)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `colorizationOptions` | `Color` | `Colorization Options` | Red |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetVectorGroupColorizationOptionsAllAsync(
    Color colorizationOptions,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetVectorGroupColorizationOptionsAllAsync(colorizationOptions: colorizationOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Vector Group Colorization Options (Selected)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Vector Group Colorization Options (Selected)](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected) · [gRPC contract](/api/grpc/vector-operations#set-vector-group-colorization-options-selected)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupsToBeSet` | `IEnumerable<CollectionVectorGroupName>` | `Vector Groups to be Set` | Required |
| `colorizationOptions` | `Color` | `Colorization Options` | Red |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetVectorGroupColorizationOptionsSelectedAsync(
    IEnumerable<CollectionVectorGroupName> vectorGroupsToBeSet,
    Color colorizationOptions,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetVectorGroupColorizationOptionsSelectedAsync(vectorGroupsToBeSet: vectorGroupsToBeSet, colorizationOptions: colorizationOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Sort Vectors

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Sort Vectors](/mp-command-catalog/commands/vector-operations#sort-vectors) · [gRPC contract](/api/grpc/vector-operations#sort-vectors)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceVectors` | `IEnumerable<VectorName>` | `Source Vectors` | Required |
| `sortMethod` | `string` | `Sort Method` | Magnitude |
| `coordinateSystem` | `CoordinateSystemType` | `Coordinate System` | Cartesian |
| `primarySortCoordinate` | `string` | `Primary Sort Coordinate` | X (R) |
| `secondarySortCoordinate` | `string` | `Secondary Sort Coordinate` | Y (Theta) |
| `tertiarySortCoordinate` | `string` | `Tertiary Sort Coordinate` | Z (Phi) |
| `primaryCoordinateGranularity` | `double` | `Primary Coordinate Granularity` | 0.000000 |
| `secondaryCoordinateGranularity` | `double` | `Secondary Coordinate Granularity` | 0.000000 |
| `tertiaryCoordinateGranularity` | `double` | `Tertiary Coordinate Granularity` | 0.000000 |
| `ascending` | `bool` | `Ascending?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `SortedVectors` | `VectorName[]` | `Sorted Vectors` |

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

```csharp
await briosa.SortVectorsAsync(sourceVectors: sourceVectors, sortMethod: sortMethod, coordinateSystem: coordinateSystem);
```

Returns the MP output `Sorted Vectors` directly as `VectorName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
