---
title: Variables
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Variables

[SA 2026.1.0529.7](/api/javascript/variables) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/variables)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Double to Named Double List Variable {/* #add-double-to-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#add-double-to-named-double-list-variable)

```ts
export interface AddDoubleToNamedDoubleListVariableInput {
  readonly name?: string;
  readonly doubleValue?: number;
}

export declare function addDoubleToNamedDoubleListVariable(
  briosa: BriosaClient,
  input: AddDoubleToNamedDoubleListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Named Double List Variable {/* #clear-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#clear-named-double-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#clear-named-double-list-variable)

```ts
export interface ClearNamedDoubleListVariableInput {
  readonly name?: string;
}

export declare function clearNamedDoubleListVariable(
  briosa: BriosaClient,
  input: ClearNamedDoubleListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Variable {/* #delete-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#delete-variable)

```ts
export interface DeleteVariableInput {
  readonly name?: string;
}

export declare function deleteVariable(
  briosa: BriosaClient,
  input: DeleteVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Variables -- Wildcard Match {/* #delete-variables----wildcard-match */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variables----wildcard-match) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#delete-variables----wildcard-match)

```ts
export interface DeleteVariablesWildcardMatchInput {
  readonly variableWildcardCriteria?: string;
}

export declare function deleteVariablesWildcardMatch(
  briosa: BriosaClient,
  input: DeleteVariablesWildcardMatchInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Boolean Variable {/* #get-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-boolean-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-boolean-variable)

```ts
export interface GetBooleanVariableInput {
  readonly name?: string;
}

export declare function getBooleanVariable(
  briosa: BriosaClient,
  input: GetBooleanVariableInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Object Name Variable {/* #get-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-name-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-collection-object-name-variable)

```ts
export interface GetCollectionObjectNameVariableInput {
  readonly name?: string;
}

export declare function getCollectionObjectNameVariable(
  briosa: BriosaClient,
  input: GetCollectionObjectNameVariableInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Object Ref List Variable {/* #get-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-collection-object-ref-list-variable)

```ts
export interface GetCollectionObjectRefListVariableInput {
  readonly name?: string;
}

export declare function getCollectionObjectRefListVariable(
  briosa: BriosaClient,
  input: GetCollectionObjectRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Double Variable {/* #get-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-double-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-double-variable)

```ts
export interface GetDoubleVariableInput {
  readonly name?: string;
}

export declare function getDoubleVariable(
  briosa: BriosaClient,
  input: GetDoubleVariableInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Integer Variable {/* #get-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-integer-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-integer-variable)

```ts
export interface GetIntegerVariableInput {
  readonly name?: string;
}

export declare function getIntegerVariable(
  briosa: BriosaClient,
  input: GetIntegerVariableInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Named Double List Variable {/* #get-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-named-double-list-variable)

```ts
export interface GetNamedDoubleListVariableInput {
  readonly name?: string;
}

export declare function getNamedDoubleListVariable(
  briosa: BriosaClient,
  input: GetNamedDoubleListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly number[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Named Double List Variable Min/Max {/* #get-named-double-list-variable-minmax */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-named-double-list-variable-minmax)

```ts
export interface GetNamedDoubleListVariableMinMaxInput {
  readonly name?: string;
}

export declare function getNamedDoubleListVariableMinMax(
  briosa: BriosaClient,
  input: GetNamedDoubleListVariableMinMaxInput,
  options?: BriosaCallOptions,
): Promise<GetNamedDoubleListVariableMinMaxResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Name Ref List Variable {/* #get-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-point-name-ref-list-variable)

```ts
export interface GetPointNameRefListVariableInput {
  readonly name?: string;
}

export declare function getPointNameRefListVariable(
  briosa: BriosaClient,
  input: GetPointNameRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly PointName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Name Variable {/* #get-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-point-name-variable)

```ts
export interface GetPointNameVariableInput {
  readonly name?: string;
}

export declare function getPointNameVariable(
  briosa: BriosaClient,
  input: GetPointNameVariableInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Ref List Variable {/* #get-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-relationship-ref-list-variable)

```ts
export interface GetRelationshipRefListVariableInput {
  readonly name?: string;
}

export declare function getRelationshipRefListVariable(
  briosa: BriosaClient,
  input: GetRelationshipRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Report Items Reference List Variable {/* #get-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-report-items-reference-list-variable)

```ts
export interface GetReportItemsReferenceListVariableInput {
  readonly name?: string;
}

export declare function getReportItemsReferenceListVariable(
  briosa: BriosaClient,
  input: GetReportItemsReferenceListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String Ref List Variable {/* #get-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-string-ref-list-variable)

```ts
export interface GetStringRefListVariableInput {
  readonly name?: string;
}

export declare function getStringRefListVariable(
  briosa: BriosaClient,
  input: GetStringRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String Variable {/* #get-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-string-variable)

```ts
export interface GetStringVariableInput {
  readonly name?: string;
}

export declare function getStringVariable(
  briosa: BriosaClient,
  input: GetStringVariableInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform Variable {/* #get-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-transform-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-transform-variable)

```ts
export interface GetTransformVariableInput {
  readonly name?: string;
}

export declare function getTransformVariable(
  briosa: BriosaClient,
  input: GetTransformVariableInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Name Ref List Variable {/* #get-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-vector-name-ref-list-variable)

```ts
export interface GetVectorNameRefListVariableInput {
  readonly name?: string;
}

export declare function getVectorNameRefListVariable(
  briosa: BriosaClient,
  input: GetVectorNameRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly VectorName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Variable {/* #get-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#get-vector-variable)

```ts
export interface GetVectorVariableInput {
  readonly name?: string;
}

export declare function getVectorVariable(
  briosa: BriosaClient,
  input: GetVectorVariableInput,
  options?: BriosaCallOptions,
): Promise<Vector>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Boolean Variable {/* #set-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-boolean-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-boolean-variable)

```ts
export interface SetBooleanVariableInput {
  readonly name?: string;
  readonly value?: boolean;
}

export declare function setBooleanVariable(
  briosa: BriosaClient,
  input: SetBooleanVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Object Name Variable {/* #set-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-name-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-collection-object-name-variable)

```ts
export interface SetCollectionObjectNameVariableInput {
  readonly name?: string;
  readonly value: CollectionObjectName;
}

export declare function setCollectionObjectNameVariable(
  briosa: BriosaClient,
  input: SetCollectionObjectNameVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Object Ref List Variable {/* #set-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-collection-object-ref-list-variable)

```ts
export interface SetCollectionObjectRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<CollectionObjectName>;
}

export declare function setCollectionObjectRefListVariable(
  briosa: BriosaClient,
  input: SetCollectionObjectRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Double Variable {/* #set-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-double-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-double-variable)

```ts
export interface SetDoubleVariableInput {
  readonly name?: string;
  readonly value?: number;
}

export declare function setDoubleVariable(
  briosa: BriosaClient,
  input: SetDoubleVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Font Variable {/* #set-font-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-font-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-font-variable)

```ts
export interface SetFontVariableInput {
  readonly name?: string;
  readonly value?: Font;
}

export declare function setFontVariable(
  briosa: BriosaClient,
  input: SetFontVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Integer Variable {/* #set-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-integer-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-integer-variable)

```ts
export interface SetIntegerVariableInput {
  readonly name?: string;
  readonly value?: number;
}

export declare function setIntegerVariable(
  briosa: BriosaClient,
  input: SetIntegerVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Named Double List Variable {/* #set-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-named-double-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-named-double-list-variable)

```ts
export interface SetNamedDoubleListVariableInput {
  readonly name?: string;
  readonly doubleListVariable: Iterable<number>;
}

export declare function setNamedDoubleListVariable(
  briosa: BriosaClient,
  input: SetNamedDoubleListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Name Ref List Variable {/* #set-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-point-name-ref-list-variable)

```ts
export interface SetPointNameRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<PointName>;
}

export declare function setPointNameRefListVariable(
  briosa: BriosaClient,
  input: SetPointNameRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Name Variable {/* #set-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-point-name-variable)

```ts
export interface SetPointNameVariableInput {
  readonly name?: string;
  readonly value: PointName;
}

export declare function setPointNameVariable(
  briosa: BriosaClient,
  input: SetPointNameVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Ref List Variable {/* #set-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-relationship-ref-list-variable)

```ts
export interface SetRelationshipRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<CollectionItemName>;
}

export declare function setRelationshipRefListVariable(
  briosa: BriosaClient,
  input: SetRelationshipRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Items Reference List Variable {/* #set-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-report-items-reference-list-variable)

```ts
export interface SetReportItemsReferenceListVariableInput {
  readonly name?: string;
  readonly value: Iterable<CollectionItemName>;
}

export declare function setReportItemsReferenceListVariable(
  briosa: BriosaClient,
  input: SetReportItemsReferenceListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String Ref List Variable {/* #set-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-string-ref-list-variable)

```ts
export interface SetStringRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<string>;
}

export declare function setStringRefListVariable(
  briosa: BriosaClient,
  input: SetStringRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String Variable {/* #set-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-string-variable)

```ts
export interface SetStringVariableInput {
  readonly name?: string;
  readonly value?: string;
}

export declare function setStringVariable(
  briosa: BriosaClient,
  input: SetStringVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform Variable {/* #set-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-transform-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-transform-variable)

```ts
export interface SetTransformVariableInput {
  readonly name?: string;
  readonly value: Transform;
}

export declare function setTransformVariable(
  briosa: BriosaClient,
  input: SetTransformVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Name Ref List Variable {/* #set-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-vector-name-ref-list-variable)

```ts
export interface SetVectorNameRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<VectorName>;
}

export declare function setVectorNameRefListVariable(
  briosa: BriosaClient,
  input: SetVectorNameRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Variable {/* #set-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/variables#set-vector-variable)

```ts
export interface SetVectorVariableInput {
  readonly name?: string;
  readonly value: Vector;
}

export declare function setVectorVariable(
  briosa: BriosaClient,
  input: SetVectorVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2024.1.0508.5)
