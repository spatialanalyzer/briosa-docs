---
title: Dimension Operations
description: Next Briosa .NET APIs for supported Dimension Operations MP commands.
toc_max_heading_level: 2
---

# Dimension Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Delete Dimension

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Dimension](/mp-command-catalog/commands/dimension-operations#delete-dimension) · [gRPC contract](/api/grpc/dimension-operations#delete-dimension)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimensionName` | `CollectionObjectName` | `Dimension Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteDimensionAsync(
    CollectionObjectName dimensionName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteDimensionAsync(dimensionName: dimensionName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Dimension Value

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Dimension Value](/mp-command-catalog/commands/dimension-operations#get-dimension-value) · [gRPC contract](/api/grpc/dimension-operations#get-dimension-value)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimensionName` | `CollectionObjectName` | `Dimension Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `DimensionsValue` | `double` | `Dimensions Value` |
| `NominalValueEnabled` | `bool` | `Nominal Value Enabled?` |
| `HighToleranceEnabled` | `bool` | `High Tolerance Enabled?` |
| `LowToleranceEnabled` | `bool` | `Low Tolerance Enabled?` |
| `NominalValue` | `double` | `Nominal Value` |
| `HighTolerance` | `double` | `High Tolerance` |
| `LowTolerance` | `double` | `Low Tolerance` |

```csharp
public sealed record GetDimensionValueResult
{
    public required double DimensionsValue { get; init; }

    public required bool NominalValueEnabled { get; init; }

    public required bool HighToleranceEnabled { get; init; }

    public required bool LowToleranceEnabled { get; init; }

    public required double NominalValue { get; init; }

    public required double HighTolerance { get; init; }

    public required double LowTolerance { get; init; }
}

public Task<GetDimensionValueResult> GetDimensionValueAsync(
    CollectionObjectName dimensionName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetDimensionValueAsync(dimensionName: dimensionName);
```

Returns the 7 MP outputs in the named `GetDimensionValueResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Dimension Tolerance

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Dimension Tolerance](/mp-command-catalog/commands/dimension-operations#set-dimension-tolerance) · [gRPC contract](/api/grpc/dimension-operations#set-dimension-tolerance)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimensionName` | `CollectionObjectName` | `Dimension Name` | Required |
| `enableNominal` | `bool` | `Enable Nominal` | false |
| `enableHigh` | `bool` | `Enable High` | false |
| `enableLow` | `bool` | `Enable Low` | false |
| `nominal` | `double` | `Nominal` | 0.000000 |
| `highTolerance` | `double` | `High Tolerance` | 0.000000 |
| `lowTolerance` | `double` | `Low Tolerance` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetDimensionToleranceAsync(
    CollectionObjectName dimensionName,
    bool enableNominal = false,
    bool enableHigh = false,
    bool enableLow = false,
    double nominal = 0.000000,
    double highTolerance = 0.000000,
    double lowTolerance = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetDimensionToleranceAsync(dimensionName: dimensionName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
