---
title: Dimension Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Dimension Operations MP commands.
toc_max_heading_level: 2
---

# Dimension Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Delete Dimension

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Dimension](/mp-command-catalog/commands/dimension-operations#delete-dimension) · [gRPC contract](/api/grpc/dimension-operations#delete-dimension)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimensionName` | `CollectionObjectName` | `Dimension Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteDimensionInput {
  readonly dimensionName: CollectionObjectName;
}

function deleteDimension(
  briosa: BriosaClient,
  input: DeleteDimensionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteDimension(briosa, { dimensionName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Dimension Value

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Dimension Value](/mp-command-catalog/commands/dimension-operations#get-dimension-value) · [gRPC contract](/api/grpc/dimension-operations#get-dimension-value)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimensionName` | `CollectionObjectName` | `Dimension Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `dimensionsValue` | `number` | `Dimensions Value` |
| `nominalValueEnabled` | `boolean` | `Nominal Value Enabled?` |
| `highToleranceEnabled` | `boolean` | `High Tolerance Enabled?` |
| `lowToleranceEnabled` | `boolean` | `Low Tolerance Enabled?` |
| `nominalValue` | `number` | `Nominal Value` |
| `highTolerance` | `number` | `High Tolerance` |
| `lowTolerance` | `number` | `Low Tolerance` |

```ts
export interface GetDimensionValueResult {
  readonly dimensionsValue: number;
  readonly nominalValueEnabled: boolean;
  readonly highToleranceEnabled: boolean;
  readonly lowToleranceEnabled: boolean;
  readonly nominalValue: number;
  readonly highTolerance: number;
  readonly lowTolerance: number;
}

export interface GetDimensionValueInput {
  readonly dimensionName: CollectionObjectName;
}

function getDimensionValue(
  briosa: BriosaClient,
  input: GetDimensionValueInput,
  options?: BriosaCallOptions,
): Promise<GetDimensionValueResult>;
```

```ts
await getDimensionValue(briosa, { dimensionName: ... });
```

Returns the 7 MP outputs in the named `GetDimensionValueResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Dimension Tolerance

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Dimension Tolerance](/mp-command-catalog/commands/dimension-operations#set-dimension-tolerance) · [gRPC contract](/api/grpc/dimension-operations#set-dimension-tolerance)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimensionName` | `CollectionObjectName` | `Dimension Name` | Required |
| `enableNominal` | `boolean` | `Enable Nominal` | false |
| `enableHigh` | `boolean` | `Enable High` | false |
| `enableLow` | `boolean` | `Enable Low` | false |
| `nominal` | `number` | `Nominal` | 0.000000 |
| `highTolerance` | `number` | `High Tolerance` | 0.000000 |
| `lowTolerance` | `number` | `Low Tolerance` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetDimensionToleranceInput {
  readonly dimensionName: CollectionObjectName;
  readonly enableNominal?: boolean;
  readonly enableHigh?: boolean;
  readonly enableLow?: boolean;
  readonly nominal?: number;
  readonly highTolerance?: number;
  readonly lowTolerance?: number;
}

function setDimensionTolerance(
  briosa: BriosaClient,
  input: SetDimensionToleranceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setDimensionTolerance(briosa, { dimensionName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
