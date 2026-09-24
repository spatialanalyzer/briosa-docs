---
title: Variables
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Variables

[SA 2026.1.0529.7](/api/dotnet/variables) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/variables)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Double to Named Double List Variable {/* #add-double-to-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#add-double-to-named-double-list-variable)

```csharp
public Task AddDoubleToNamedDoubleListVariableAsync(
        string name = "",
        double doubleValue = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Named Double List Variable {/* #clear-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#clear-named-double-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#clear-named-double-list-variable)

```csharp
public Task ClearNamedDoubleListVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Variable {/* #delete-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#delete-variable)

```csharp
public Task DeleteVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Variables -- Wildcard Match {/* #delete-variables----wildcard-match */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variables----wildcard-match) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#delete-variables----wildcard-match)

```csharp
public Task DeleteVariablesWildcardMatchAsync(
        string variableWildcardCriteria = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Boolean Variable {/* #get-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-boolean-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-boolean-variable)

```csharp
public Task<bool> GetBooleanVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Object Name Variable {/* #get-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-name-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-collection-object-name-variable)

```csharp
public Task<CollectionObjectName> GetCollectionObjectNameVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Object Ref List Variable {/* #get-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-collection-object-ref-list-variable)

```csharp
public Task<CollectionObjectName[]> GetCollectionObjectRefListVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Double Variable {/* #get-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-double-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-double-variable)

```csharp
public Task<double> GetDoubleVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Integer Variable {/* #get-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-integer-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-integer-variable)

```csharp
public Task<int> GetIntegerVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Named Double List Variable {/* #get-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-named-double-list-variable)

```csharp
public Task<double[]> GetNamedDoubleListVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Named Double List Variable Min/Max {/* #get-named-double-list-variable-minmax */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-named-double-list-variable-minmax)

```csharp
public Task<GetNamedDoubleListVariableMinMaxResult> GetNamedDoubleListVariableMinMaxAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Name Ref List Variable {/* #get-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-point-name-ref-list-variable)

```csharp
public Task<PointName[]> GetPointNameRefListVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Name Variable {/* #get-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-point-name-variable)

```csharp
public Task<PointName> GetPointNameVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Ref List Variable {/* #get-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-relationship-ref-list-variable)

```csharp
public Task<CollectionObjectName[]> GetRelationshipRefListVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Report Items Reference List Variable {/* #get-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-report-items-reference-list-variable)

```csharp
public Task<CollectionObjectName[]> GetReportItemsReferenceListVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String Ref List Variable {/* #get-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-string-ref-list-variable)

```csharp
public Task<string[]> GetStringRefListVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String Variable {/* #get-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-string-variable)

```csharp
public Task<string> GetStringVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform Variable {/* #get-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-transform-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-transform-variable)

```csharp
public Task<Transform> GetTransformVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Name Ref List Variable {/* #get-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-vector-name-ref-list-variable)

```csharp
public Task<VectorName[]> GetVectorNameRefListVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Variable {/* #get-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-vector-variable)

```csharp
public Task<Vector> GetVectorVariableAsync(
        string name = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Boolean Variable {/* #set-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-boolean-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-boolean-variable)

```csharp
public Task SetBooleanVariableAsync(
        string name = "",
        bool value = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Object Name Variable {/* #set-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-name-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-collection-object-name-variable)

```csharp
public Task SetCollectionObjectNameVariableAsync(
        string name,
        CollectionObjectName value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Object Ref List Variable {/* #set-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-collection-object-ref-list-variable)

```csharp
public Task SetCollectionObjectRefListVariableAsync(
        string name,
        IEnumerable<CollectionObjectName> value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Double Variable {/* #set-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-double-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-double-variable)

```csharp
public Task SetDoubleVariableAsync(
        string name = "",
        double value = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Font Variable {/* #set-font-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-font-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-font-variable)

```csharp
public Task SetFontVariableAsync(
        string name,
        Font value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Integer Variable {/* #set-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-integer-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-integer-variable)

```csharp
public Task SetIntegerVariableAsync(
        string name = "",
        int value = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Named Double List Variable {/* #set-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-named-double-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-named-double-list-variable)

```csharp
public Task SetNamedDoubleListVariableAsync(
        string name,
        IEnumerable<double> doubleListVariable,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Name Ref List Variable {/* #set-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-point-name-ref-list-variable)

```csharp
public Task SetPointNameRefListVariableAsync(
        string name,
        IEnumerable<PointName> value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Name Variable {/* #set-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-point-name-variable)

```csharp
public Task SetPointNameVariableAsync(
        string name,
        PointName value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Ref List Variable {/* #set-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-relationship-ref-list-variable)

```csharp
public Task SetRelationshipRefListVariableAsync(
        string name,
        IEnumerable<CollectionItemName> value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Items Reference List Variable {/* #set-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-report-items-reference-list-variable)

```csharp
public Task SetReportItemsReferenceListVariableAsync(
        string name,
        IEnumerable<CollectionItemName> value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String Ref List Variable {/* #set-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-string-ref-list-variable)

```csharp
public Task SetStringRefListVariableAsync(
        string name,
        IEnumerable<string> value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String Variable {/* #set-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-string-variable)

```csharp
public Task SetStringVariableAsync(
        string name = "",
        string value = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform Variable {/* #set-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-transform-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-transform-variable)

```csharp
public Task SetTransformVariableAsync(
        string name,
        Transform value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Name Ref List Variable {/* #set-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-vector-name-ref-list-variable)

```csharp
public Task SetVectorNameRefListVariableAsync(
        string name,
        IEnumerable<VectorName> value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Variable {/* #set-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-vector-variable)

```csharp
public Task SetVectorVariableAsync(
        string name,
        Vector value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
