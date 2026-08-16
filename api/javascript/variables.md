---
title: Variables
description: Next Briosa JavaScript and TypeScript APIs for supported Variables MP commands.
toc_max_heading_level: 2
---

# Variables

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Add Double to Named Double List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Double to Named Double List Variable](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable) · [gRPC contract](/api/grpc/variables#add-double-to-named-double-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `doubleValue` | `number` | `Double Value` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddDoubleToNamedDoubleListVariableInput {
  readonly name?: string;
  readonly doubleValue?: number;
}

function addDoubleToNamedDoubleListVariable(
  briosa: BriosaClient,
  input?: AddDoubleToNamedDoubleListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addDoubleToNamedDoubleListVariable(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Clear Named Double List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Clear Named Double List Variable](/mp-command-catalog/commands/variables#clear-named-double-list-variable) · [gRPC contract](/api/grpc/variables#clear-named-double-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ClearNamedDoubleListVariableInput {
  readonly name?: string;
}

function clearNamedDoubleListVariable(
  briosa: BriosaClient,
  input?: ClearNamedDoubleListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await clearNamedDoubleListVariable(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Variable](/mp-command-catalog/commands/variables#delete-variable) · [gRPC contract](/api/grpc/variables#delete-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteVariableInput {
  readonly name?: string;
}

function deleteVariable(
  briosa: BriosaClient,
  input?: DeleteVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteVariable(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Variables -- Wildcard Match

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Variables -- Wildcard Match](/mp-command-catalog/commands/variables#delete-variables----wildcard-match) · [gRPC contract](/api/grpc/variables#delete-variables----wildcard-match)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `variableWildcardCriteria` | `string` | `Variable Wildcard Criteria` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteVariablesWildcardMatchInput {
  readonly variableWildcardCriteria?: string;
}

function deleteVariablesWildcardMatch(
  briosa: BriosaClient,
  input?: DeleteVariablesWildcardMatchInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteVariablesWildcardMatch(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Boolean Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Boolean Variable](/mp-command-catalog/commands/variables#get-boolean-variable) · [gRPC contract](/api/grpc/variables#get-boolean-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `boolean` | `Value` |

```ts
export interface GetBooleanVariableInput {
  readonly name?: string;
}

function getBooleanVariable(
  briosa: BriosaClient,
  input?: GetBooleanVariableInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

```ts
await getBooleanVariable(briosa);
```

Returns the MP output `Value` directly as `boolean`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Collection Object Name Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Collection Object Name Variable](/mp-command-catalog/commands/variables#get-collection-object-name-variable) · [gRPC contract](/api/grpc/variables#get-collection-object-name-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `CollectionObjectName` | `Value` |

```ts
export interface GetCollectionObjectNameVariableInput {
  readonly name?: string;
}

function getCollectionObjectNameVariable(
  briosa: BriosaClient,
  input?: GetCollectionObjectNameVariableInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

```ts
await getCollectionObjectNameVariable(briosa);
```

Returns the MP output `Value` directly as `CollectionObjectName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Collection Object Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Collection Object Ref List Variable](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-collection-object-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `readonly CollectionObjectName[]` | `Value` |

```ts
export interface GetCollectionObjectRefListVariableInput {
  readonly name?: string;
}

function getCollectionObjectRefListVariable(
  briosa: BriosaClient,
  input?: GetCollectionObjectRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

```ts
await getCollectionObjectRefListVariable(briosa);
```

Returns the MP output `Value` directly as `readonly CollectionObjectName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Double Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Double Variable](/mp-command-catalog/commands/variables#get-double-variable) · [gRPC contract](/api/grpc/variables#get-double-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `number` | `Value` |

```ts
export interface GetDoubleVariableInput {
  readonly name?: string;
}

function getDoubleVariable(
  briosa: BriosaClient,
  input?: GetDoubleVariableInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getDoubleVariable(briosa);
```

Returns the MP output `Value` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Integer Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Integer Variable](/mp-command-catalog/commands/variables#get-integer-variable) · [gRPC contract](/api/grpc/variables#get-integer-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `number` | `Value` |

```ts
export interface GetIntegerVariableInput {
  readonly name?: string;
}

function getIntegerVariable(
  briosa: BriosaClient,
  input?: GetIntegerVariableInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getIntegerVariable(briosa);
```

Returns the MP output `Value` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Named Double List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Named Double List Variable](/mp-command-catalog/commands/variables#get-named-double-list-variable) · [gRPC contract](/api/grpc/variables#get-named-double-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `doubleListVariable` | `readonly number[]` | `Double List Variable` |

```ts
export interface GetNamedDoubleListVariableInput {
  readonly name?: string;
}

function getNamedDoubleListVariable(
  briosa: BriosaClient,
  input?: GetNamedDoubleListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly number[]>;
```

```ts
await getNamedDoubleListVariable(briosa);
```

Returns the MP output `Double List Variable` directly as `readonly number[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Named Double List Variable Min/Max

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Named Double List Variable Min/Max](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax) · [gRPC contract](/api/grpc/variables#get-named-double-list-variable-minmax)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `minimumValue` | `number` | `Minimum Value` |
| `maximumValue` | `number` | `Maximum Value` |

```ts
export interface GetNamedDoubleListVariableMinMaxResult {
  readonly minimumValue: number;
  readonly maximumValue: number;
}

export interface GetNamedDoubleListVariableMinMaxInput {
  readonly name?: string;
}

function getNamedDoubleListVariableMinMax(
  briosa: BriosaClient,
  input?: GetNamedDoubleListVariableMinMaxInput,
  options?: BriosaCallOptions,
): Promise<GetNamedDoubleListVariableMinMaxResult>;
```

```ts
await getNamedDoubleListVariableMinMax(briosa);
```

Returns the 2 MP outputs in the named `GetNamedDoubleListVariableMinMaxResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point Name Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point Name Ref List Variable](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-point-name-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `readonly PointName[]` | `Value` |

```ts
export interface GetPointNameRefListVariableInput {
  readonly name?: string;
}

function getPointNameRefListVariable(
  briosa: BriosaClient,
  input?: GetPointNameRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly PointName[]>;
```

```ts
await getPointNameRefListVariable(briosa);
```

Returns the MP output `Value` directly as `readonly PointName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point Name Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point Name Variable](/mp-command-catalog/commands/variables#get-point-name-variable) · [gRPC contract](/api/grpc/variables#get-point-name-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `PointName` | `Value` |

```ts
export interface GetPointNameVariableInput {
  readonly name?: string;
}

function getPointNameVariable(
  briosa: BriosaClient,
  input?: GetPointNameVariableInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

```ts
await getPointNameVariable(briosa);
```

Returns the MP output `Value` directly as `PointName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Relationship Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Relationship Ref List Variable](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-relationship-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `readonly CollectionItemName[]` | `Value` |

```ts
export interface GetRelationshipRefListVariableInput {
  readonly name?: string;
}

function getRelationshipRefListVariable(
  briosa: BriosaClient,
  input?: GetRelationshipRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

```ts
await getRelationshipRefListVariable(briosa);
```

Returns the MP output `Value` directly as `readonly CollectionItemName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Report Items Reference List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Report Items Reference List Variable](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable) · [gRPC contract](/api/grpc/variables#get-report-items-reference-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `readonly CollectionItemName[]` | `Value` |

```ts
export interface GetReportItemsReferenceListVariableInput {
  readonly name?: string;
}

function getReportItemsReferenceListVariable(
  briosa: BriosaClient,
  input?: GetReportItemsReferenceListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

```ts
await getReportItemsReferenceListVariable(briosa);
```

Returns the MP output `Value` directly as `readonly CollectionItemName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get String Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get String Ref List Variable](/mp-command-catalog/commands/variables#get-string-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-string-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `readonly string[]` | `Value` |

```ts
export interface GetStringRefListVariableInput {
  readonly name?: string;
}

function getStringRefListVariable(
  briosa: BriosaClient,
  input?: GetStringRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getStringRefListVariable(briosa);
```

Returns the MP output `Value` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get String Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get String Variable](/mp-command-catalog/commands/variables#get-string-variable) · [gRPC contract](/api/grpc/variables#get-string-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `string` | `Value` |

```ts
export interface GetStringVariableInput {
  readonly name?: string;
}

function getStringVariable(
  briosa: BriosaClient,
  input?: GetStringVariableInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await getStringVariable(briosa);
```

Returns the MP output `Value` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Transform Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Transform Variable](/mp-command-catalog/commands/variables#get-transform-variable) · [gRPC contract](/api/grpc/variables#get-transform-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `Transform` | `Value` |

```ts
export interface GetTransformVariableInput {
  readonly name?: string;
}

function getTransformVariable(
  briosa: BriosaClient,
  input?: GetTransformVariableInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

```ts
await getTransformVariable(briosa);
```

Returns the MP output `Value` directly as `Transform`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Vector Name Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Vector Name Ref List Variable](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-vector-name-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `readonly VectorName[]` | `Value` |

```ts
export interface GetVectorNameRefListVariableInput {
  readonly name?: string;
}

function getVectorNameRefListVariable(
  briosa: BriosaClient,
  input?: GetVectorNameRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<readonly VectorName[]>;
```

```ts
await getVectorNameRefListVariable(briosa);
```

Returns the MP output `Value` directly as `readonly VectorName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Vector Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Vector Variable](/mp-command-catalog/commands/variables#get-vector-variable) · [gRPC contract](/api/grpc/variables#get-vector-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `Vector` | `Value` |

```ts
export interface GetVectorVariableInput {
  readonly name?: string;
}

function getVectorVariable(
  briosa: BriosaClient,
  input?: GetVectorVariableInput,
  options?: BriosaCallOptions,
): Promise<Vector>;
```

```ts
await getVectorVariable(briosa);
```

Returns the MP output `Value` directly as `Vector`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Boolean Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Boolean Variable](/mp-command-catalog/commands/variables#set-boolean-variable) · [gRPC contract](/api/grpc/variables#set-boolean-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `boolean` | `Value` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetBooleanVariableInput {
  readonly name?: string;
  readonly value?: boolean;
}

function setBooleanVariable(
  briosa: BriosaClient,
  input?: SetBooleanVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setBooleanVariable(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Collection Object Name Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Collection Object Name Variable](/mp-command-catalog/commands/variables#set-collection-object-name-variable) · [gRPC contract](/api/grpc/variables#set-collection-object-name-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `CollectionObjectName` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCollectionObjectNameVariableInput {
  readonly name?: string;
  readonly value: CollectionObjectName;
}

function setCollectionObjectNameVariable(
  briosa: BriosaClient,
  input: SetCollectionObjectNameVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCollectionObjectNameVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Collection Object Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Collection Object Ref List Variable](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-collection-object-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Iterable<CollectionObjectName>` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCollectionObjectRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<CollectionObjectName>;
}

function setCollectionObjectRefListVariable(
  briosa: BriosaClient,
  input: SetCollectionObjectRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCollectionObjectRefListVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Double Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Double Variable](/mp-command-catalog/commands/variables#set-double-variable) · [gRPC contract](/api/grpc/variables#set-double-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `number` | `Value` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetDoubleVariableInput {
  readonly name?: string;
  readonly value?: number;
}

function setDoubleVariable(
  briosa: BriosaClient,
  input?: SetDoubleVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setDoubleVariable(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Font Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Font Variable](/mp-command-catalog/commands/variables#set-font-variable) · [gRPC contract](/api/grpc/variables#set-font-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Font` | `Value` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetFontVariableInput {
  readonly name?: string;
  readonly value?: Font;
}

function setFontVariable(
  briosa: BriosaClient,
  input?: SetFontVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setFontVariable(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Integer Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Integer Variable](/mp-command-catalog/commands/variables#set-integer-variable) · [gRPC contract](/api/grpc/variables#set-integer-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `number` | `Value` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetIntegerVariableInput {
  readonly name?: string;
  readonly value?: number;
}

function setIntegerVariable(
  briosa: BriosaClient,
  input?: SetIntegerVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setIntegerVariable(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Named Double List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Named Double List Variable](/mp-command-catalog/commands/variables#set-named-double-list-variable) · [gRPC contract](/api/grpc/variables#set-named-double-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `doubleListVariable` | `Iterable<number>` | `Double List Variable` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetNamedDoubleListVariableInput {
  readonly name?: string;
  readonly doubleListVariable: Iterable<number>;
}

function setNamedDoubleListVariable(
  briosa: BriosaClient,
  input: SetNamedDoubleListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setNamedDoubleListVariable(briosa, { doubleListVariable: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Point Name Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Point Name Ref List Variable](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-point-name-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Iterable<PointName>` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPointNameRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<PointName>;
}

function setPointNameRefListVariable(
  briosa: BriosaClient,
  input: SetPointNameRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPointNameRefListVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Point Name Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Point Name Variable](/mp-command-catalog/commands/variables#set-point-name-variable) · [gRPC contract](/api/grpc/variables#set-point-name-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `PointName` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPointNameVariableInput {
  readonly name?: string;
  readonly value: PointName;
}

function setPointNameVariable(
  briosa: BriosaClient,
  input: SetPointNameVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPointNameVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Ref List Variable](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-relationship-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Iterable<CollectionItemName>` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<CollectionItemName>;
}

function setRelationshipRefListVariable(
  briosa: BriosaClient,
  input: SetRelationshipRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipRefListVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Report Items Reference List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Report Items Reference List Variable](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable) · [gRPC contract](/api/grpc/variables#set-report-items-reference-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Iterable<CollectionItemName>` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetReportItemsReferenceListVariableInput {
  readonly name?: string;
  readonly value: Iterable<CollectionItemName>;
}

function setReportItemsReferenceListVariable(
  briosa: BriosaClient,
  input: SetReportItemsReferenceListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setReportItemsReferenceListVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set String Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set String Ref List Variable](/mp-command-catalog/commands/variables#set-string-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-string-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Iterable<string>` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetStringRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<string>;
}

function setStringRefListVariable(
  briosa: BriosaClient,
  input: SetStringRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setStringRefListVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set String Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set String Variable](/mp-command-catalog/commands/variables#set-string-variable) · [gRPC contract](/api/grpc/variables#set-string-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `string` | `Value` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetStringVariableInput {
  readonly name?: string;
  readonly value?: string;
}

function setStringVariable(
  briosa: BriosaClient,
  input?: SetStringVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setStringVariable(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Transform Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Transform Variable](/mp-command-catalog/commands/variables#set-transform-variable) · [gRPC contract](/api/grpc/variables#set-transform-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Transform` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetTransformVariableInput {
  readonly name?: string;
  readonly value: Transform;
}

function setTransformVariable(
  briosa: BriosaClient,
  input: SetTransformVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setTransformVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Vector Name Ref List Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Vector Name Ref List Variable](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-vector-name-ref-list-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Iterable<VectorName>` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetVectorNameRefListVariableInput {
  readonly name?: string;
  readonly value: Iterable<VectorName>;
}

function setVectorNameRefListVariable(
  briosa: BriosaClient,
  input: SetVectorNameRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setVectorNameRefListVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Vector Variable

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Vector Variable](/mp-command-catalog/commands/variables#set-vector-variable) · [gRPC contract](/api/grpc/variables#set-vector-variable)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `string` | `Name` | Empty |
| `value` | `Vector` | `Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetVectorVariableInput {
  readonly name?: string;
  readonly value: Vector;
}

function setVectorVariable(
  briosa: BriosaClient,
  input: SetVectorVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setVectorVariable(briosa, { value: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
