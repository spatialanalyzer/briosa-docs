---
title: Variables
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Variables

[SA 2026.1.0529.7](/api/dotnet/variables) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/variables)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Add Double to Named Double List Variable {/* #add-double-to-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable) · [gRPC Contract](/api/grpc/variables#add-double-to-named-double-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AddDoubleToNamedDoubleListVariableAsync(
        string name = "",
        double doubleValue = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Named Double List Variable {/* #clear-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#clear-named-double-list-variable) · [gRPC Contract](/api/grpc/variables#clear-named-double-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task ClearNamedDoubleListVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Variable {/* #delete-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variable) · [gRPC Contract](/api/grpc/variables#delete-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteVariableAsync(
        string name,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `name` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

## Delete Variables -- Wildcard Match {/* #delete-variables----wildcard-match */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variables----wildcard-match) · [gRPC Contract](/api/grpc/variables#delete-variables----wildcard-match)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteVariablesWildcardMatchAsync(
        string variableWildcardCriteria,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `variableWildcardCriteria` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

## Get Boolean Variable {/* #get-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-boolean-variable) · [gRPC Contract](/api/grpc/variables#get-boolean-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<bool> GetBooleanVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Object Name Variable {/* #get-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-name-variable) · [gRPC Contract](/api/grpc/variables#get-collection-object-name-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionObjectName> GetCollectionObjectNameVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Object Ref List Variable {/* #get-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-collection-object-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionObjectName[]> GetCollectionObjectRefListVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Double Variable {/* #get-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-double-variable) · [gRPC Contract](/api/grpc/variables#get-double-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<double> GetDoubleVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Integer Variable {/* #get-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-integer-variable) · [gRPC Contract](/api/grpc/variables#get-integer-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<int> GetIntegerVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Named Double List Variable {/* #get-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable) · [gRPC Contract](/api/grpc/variables#get-named-double-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<double[]> GetNamedDoubleListVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Named Double List Variable Min/Max {/* #get-named-double-list-variable-minmax */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax) · [gRPC Contract](/api/grpc/variables#get-named-double-list-variable-minmax)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetNamedDoubleListVariableMinMaxResult> GetNamedDoubleListVariableMinMaxAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Name Ref List Variable {/* #get-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-point-name-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointName[]> GetPointNameRefListVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Name Variable {/* #get-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-variable) · [gRPC Contract](/api/grpc/variables#get-point-name-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointName> GetPointNameVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Ref List Variable {/* #get-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-relationship-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionItemName[]> GetRelationshipRefListVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Report Items Reference List Variable {/* #get-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable) · [gRPC Contract](/api/grpc/variables#get-report-items-reference-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionItemName[]> GetReportItemsReferenceListVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String Ref List Variable {/* #get-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-string-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetStringRefListVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String Variable {/* #get-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-variable) · [gRPC Contract](/api/grpc/variables#get-string-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string> GetStringVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform Variable {/* #get-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-transform-variable) · [gRPC Contract](/api/grpc/variables#get-transform-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<Transform> GetTransformVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Name Ref List Variable {/* #get-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-vector-name-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<VectorName[]> GetVectorNameRefListVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Variable {/* #get-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-variable) · [gRPC Contract](/api/grpc/variables#get-vector-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<Vector> GetVectorVariableAsync(
        string name = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Boolean Variable {/* #set-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-boolean-variable) · [gRPC Contract](/api/grpc/variables#set-boolean-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetBooleanVariableAsync(
        string name = "",
        bool value = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Object Name Variable {/* #set-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-name-variable) · [gRPC Contract](/api/grpc/variables#set-collection-object-name-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCollectionObjectNameVariableAsync(
        string name,
        CollectionObjectName value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Object Ref List Variable {/* #set-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-collection-object-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCollectionObjectRefListVariableAsync(
        string name,
        IEnumerable<CollectionObjectName> value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Double Variable {/* #set-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-double-variable) · [gRPC Contract](/api/grpc/variables#set-double-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetDoubleVariableAsync(
        string name = "",
        double value = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Font Variable {/* #set-font-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-font-variable) · [gRPC Contract](/api/grpc/variables#set-font-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetFontVariableAsync(
        string name,
        Font value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Integer Variable {/* #set-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-integer-variable) · [gRPC Contract](/api/grpc/variables#set-integer-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetIntegerVariableAsync(
        string name = "",
        int value = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Named Double List Variable {/* #set-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-named-double-list-variable) · [gRPC Contract](/api/grpc/variables#set-named-double-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetNamedDoubleListVariableAsync(
        string name,
        IEnumerable<double> doubleListVariable,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Name Ref List Variable {/* #set-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-point-name-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetPointNameRefListVariableAsync(
        string name,
        IEnumerable<PointName> value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Name Variable {/* #set-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-variable) · [gRPC Contract](/api/grpc/variables#set-point-name-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetPointNameVariableAsync(
        string name,
        PointName value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Ref List Variable {/* #set-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-relationship-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipRefListVariableAsync(
        string name,
        IEnumerable<CollectionItemName> value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Items Reference List Variable {/* #set-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable) · [gRPC Contract](/api/grpc/variables#set-report-items-reference-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetReportItemsReferenceListVariableAsync(
        string name,
        IEnumerable<CollectionItemName> value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String Ref List Variable {/* #set-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-string-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetStringRefListVariableAsync(
        string name,
        IEnumerable<string> value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String Variable {/* #set-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-variable) · [gRPC Contract](/api/grpc/variables#set-string-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetStringVariableAsync(
        string name = "",
        string value = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform Variable {/* #set-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-transform-variable) · [gRPC Contract](/api/grpc/variables#set-transform-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetTransformVariableAsync(
        string name,
        Transform value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Name Ref List Variable {/* #set-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-vector-name-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorNameRefListVariableAsync(
        string name,
        IEnumerable<VectorName> value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Variable {/* #set-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-variable) · [gRPC Contract](/api/grpc/variables#set-vector-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorVariableAsync(
        string name,
        Vector value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7)
