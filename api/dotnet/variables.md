---
title: Variables
description: Next Briosa .NET APIs for supported Variables MP commands.
toc_max_heading_level: 2
---

# Variables

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Add Double to Named Double List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Add Double to Named Double List Variable](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable) · [gRPC contract](/api/grpc/variables#add-double-to-named-double-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `doubleValue` | `double` | `Double Value` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AddDoubleToNamedDoubleListVariableAsync(
    string name = "",
    double doubleValue = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AddDoubleToNamedDoubleListVariableAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Clear Named Double List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Clear Named Double List Variable](/mp-command-catalog/commands/variables#clear-named-double-list-variable) · [gRPC contract](/api/grpc/variables#clear-named-double-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ClearNamedDoubleListVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ClearNamedDoubleListVariableAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Variable](/mp-command-catalog/commands/variables#delete-variable) · [gRPC contract](/api/grpc/variables#delete-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteVariableAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Variables -- Wildcard Match

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Variables -- Wildcard Match](/mp-command-catalog/commands/variables#delete-variables----wildcard-match) · [gRPC contract](/api/grpc/variables#delete-variables----wildcard-match)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `variableWildcardCriteria` | `string` | `Variable Wildcard Criteria` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteVariablesWildcardMatchAsync(
    string variableWildcardCriteria = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteVariablesWildcardMatchAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Boolean Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Boolean Variable](/mp-command-catalog/commands/variables#get-boolean-variable) · [gRPC contract](/api/grpc/variables#get-boolean-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `bool` | `Value` |

```csharp
public Task<bool> GetBooleanVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetBooleanVariableAsync();
```

Returns the MP output `Value` directly as `bool`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Collection Object Name Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Collection Object Name Variable](/mp-command-catalog/commands/variables#get-collection-object-name-variable) · [gRPC contract](/api/grpc/variables#get-collection-object-name-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `CollectionObjectName` | `Value` |

```csharp
public Task<CollectionObjectName> GetCollectionObjectNameVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCollectionObjectNameVariableAsync();
```

Returns the MP output `Value` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Collection Object Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Collection Object Ref List Variable](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-collection-object-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `CollectionObjectName[]` | `Value` |

```csharp
public Task<CollectionObjectName[]> GetCollectionObjectRefListVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCollectionObjectRefListVariableAsync();
```

Returns the MP output `Value` directly as `CollectionObjectName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Double Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Double Variable](/mp-command-catalog/commands/variables#get-double-variable) · [gRPC contract](/api/grpc/variables#get-double-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `double` | `Value` |

```csharp
public Task<double> GetDoubleVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetDoubleVariableAsync();
```

Returns the MP output `Value` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Integer Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Integer Variable](/mp-command-catalog/commands/variables#get-integer-variable) · [gRPC contract](/api/grpc/variables#get-integer-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `int` | `Value` |

```csharp
public Task<int> GetIntegerVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetIntegerVariableAsync();
```

Returns the MP output `Value` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Named Double List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Named Double List Variable](/mp-command-catalog/commands/variables#get-named-double-list-variable) · [gRPC contract](/api/grpc/variables#get-named-double-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `DoubleListVariable` | `double[]` | `Double List Variable` |

```csharp
public Task<double[]> GetNamedDoubleListVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNamedDoubleListVariableAsync();
```

Returns the MP output `Double List Variable` directly as `double[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Named Double List Variable Min/Max

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Named Double List Variable Min/Max](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax) · [gRPC contract](/api/grpc/variables#get-named-double-list-variable-minmax)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `MinimumValue` | `double` | `Minimum Value` |
| `MaximumValue` | `double` | `Maximum Value` |

```csharp
public sealed record GetNamedDoubleListVariableMinMaxResult
{
    public required double MinimumValue { get; init; }

    public required double MaximumValue { get; init; }
}

public Task<GetNamedDoubleListVariableMinMaxResult> GetNamedDoubleListVariableMinMaxAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNamedDoubleListVariableMinMaxAsync();
```

Returns the 2 MP outputs in the named `GetNamedDoubleListVariableMinMaxResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point Name Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point Name Ref List Variable](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-point-name-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `PointName[]` | `Value` |

```csharp
public Task<PointName[]> GetPointNameRefListVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointNameRefListVariableAsync();
```

Returns the MP output `Value` directly as `PointName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point Name Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point Name Variable](/mp-command-catalog/commands/variables#get-point-name-variable) · [gRPC contract](/api/grpc/variables#get-point-name-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `PointName` | `Value` |

```csharp
public Task<PointName> GetPointNameVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointNameVariableAsync();
```

Returns the MP output `Value` directly as `PointName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Ref List Variable](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-relationship-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `CollectionItemName[]` | `Value` |

```csharp
public Task<CollectionObjectName[]> GetRelationshipRefListVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipRefListVariableAsync();
```

Returns the MP output `Value` directly as `CollectionItemName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Report Items Reference List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Report Items Reference List Variable](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable) · [gRPC contract](/api/grpc/variables#get-report-items-reference-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `CollectionItemName[]` | `Value` |

```csharp
public Task<CollectionObjectName[]> GetReportItemsReferenceListVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetReportItemsReferenceListVariableAsync();
```

Returns the MP output `Value` directly as `CollectionItemName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get String Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get String Ref List Variable](/mp-command-catalog/commands/variables#get-string-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-string-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `string[]` | `Value` |

```csharp
public Task<string[]> GetStringRefListVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetStringRefListVariableAsync();
```

Returns the MP output `Value` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get String Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get String Variable](/mp-command-catalog/commands/variables#get-string-variable) · [gRPC contract](/api/grpc/variables#get-string-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `string` | `Value` |

```csharp
public Task<string> GetStringVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetStringVariableAsync();
```

Returns the MP output `Value` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Transform Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Transform Variable](/mp-command-catalog/commands/variables#get-transform-variable) · [gRPC contract](/api/grpc/variables#get-transform-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `Transform` | `Value` |

```csharp
public Task<Transform> GetTransformVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetTransformVariableAsync();
```

Returns the MP output `Value` directly as `Transform`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Vector Name Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Vector Name Ref List Variable](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-vector-name-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `VectorName[]` | `Value` |

```csharp
public Task<VectorName[]> GetVectorNameRefListVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetVectorNameRefListVariableAsync();
```

Returns the MP output `Value` directly as `VectorName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Vector Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Vector Variable](/mp-command-catalog/commands/variables#get-vector-variable) · [gRPC contract](/api/grpc/variables#get-vector-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `Vector` | `Value` |

```csharp
public Task<Vector> GetVectorVariableAsync(
    string name = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetVectorVariableAsync();
```

Returns the MP output `Value` directly as `Vector`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Boolean Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Boolean Variable](/mp-command-catalog/commands/variables#set-boolean-variable) · [gRPC contract](/api/grpc/variables#set-boolean-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `bool` | `Value` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetBooleanVariableAsync(
    string name = "",
    bool value = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetBooleanVariableAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Collection Object Name Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Collection Object Name Variable](/mp-command-catalog/commands/variables#set-collection-object-name-variable) · [gRPC contract](/api/grpc/variables#set-collection-object-name-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `CollectionObjectName` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCollectionObjectNameVariableAsync(
    string name,
    CollectionObjectName value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCollectionObjectNameVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Collection Object Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Collection Object Ref List Variable](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-collection-object-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `IEnumerable<CollectionObjectName>` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCollectionObjectRefListVariableAsync(
    string name,
    IEnumerable<CollectionObjectName> value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCollectionObjectRefListVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Double Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Double Variable](/mp-command-catalog/commands/variables#set-double-variable) · [gRPC contract](/api/grpc/variables#set-double-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `double` | `Value` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetDoubleVariableAsync(
    string name = "",
    double value = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetDoubleVariableAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Font Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Font Variable](/mp-command-catalog/commands/variables#set-font-variable) · [gRPC contract](/api/grpc/variables#set-font-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Font` | `Value` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetFontVariableAsync(
    string name,
    Font value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetFontVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Integer Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Integer Variable](/mp-command-catalog/commands/variables#set-integer-variable) · [gRPC contract](/api/grpc/variables#set-integer-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `int` | `Value` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetIntegerVariableAsync(
    string name = "",
    int value = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetIntegerVariableAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Named Double List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Named Double List Variable](/mp-command-catalog/commands/variables#set-named-double-list-variable) · [gRPC contract](/api/grpc/variables#set-named-double-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `doubleListVariable` | `IEnumerable<double>` | `Double List Variable` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetNamedDoubleListVariableAsync(
    string name,
    IEnumerable<double> doubleListVariable,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetNamedDoubleListVariableAsync(name: name, doubleListVariable: doubleListVariable);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Point Name Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Point Name Ref List Variable](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-point-name-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `IEnumerable<PointName>` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPointNameRefListVariableAsync(
    string name,
    IEnumerable<PointName> value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPointNameRefListVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Point Name Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Point Name Variable](/mp-command-catalog/commands/variables#set-point-name-variable) · [gRPC contract](/api/grpc/variables#set-point-name-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `PointName` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPointNameVariableAsync(
    string name,
    PointName value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPointNameVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Ref List Variable](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-relationship-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `IEnumerable<CollectionItemName>` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipRefListVariableAsync(
    string name,
    IEnumerable<CollectionItemName> value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipRefListVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Report Items Reference List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Report Items Reference List Variable](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable) · [gRPC contract](/api/grpc/variables#set-report-items-reference-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `IEnumerable<CollectionItemName>` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetReportItemsReferenceListVariableAsync(
    string name,
    IEnumerable<CollectionItemName> value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetReportItemsReferenceListVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set String Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set String Ref List Variable](/mp-command-catalog/commands/variables#set-string-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-string-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `IEnumerable<string>` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetStringRefListVariableAsync(
    string name,
    IEnumerable<string> value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetStringRefListVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set String Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set String Variable](/mp-command-catalog/commands/variables#set-string-variable) · [gRPC contract](/api/grpc/variables#set-string-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `string` | `Value` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetStringVariableAsync(
    string name = "",
    string value = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetStringVariableAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Transform Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Transform Variable](/mp-command-catalog/commands/variables#set-transform-variable) · [gRPC contract](/api/grpc/variables#set-transform-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Transform` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetTransformVariableAsync(
    string name,
    Transform value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetTransformVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Vector Name Ref List Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Vector Name Ref List Variable](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-vector-name-ref-list-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `IEnumerable<VectorName>` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetVectorNameRefListVariableAsync(
    string name,
    IEnumerable<VectorName> value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetVectorNameRefListVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Vector Variable

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Vector Variable](/mp-command-catalog/commands/variables#set-vector-variable) · [gRPC contract](/api/grpc/variables#set-vector-variable)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Vector` | `Value` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetVectorVariableAsync(
    string name,
    Vector value,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetVectorVariableAsync(name: name, value: value);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
