---
title: Scale Bar Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Scale Bar Operations MP commands.
toc_max_heading_level: 2
---

# Scale Bar Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Delete Scale Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Scale Bar](/mp-command-catalog/commands/scale-bar-operations#delete-scale-bar) · [gRPC contract](/api/grpc/scale-bar-operations#delete-scale-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scaleBarName` | `CollectionObjectName` | `Scale Bar Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteScaleBarInput {
  readonly scaleBarName: CollectionObjectName;
}

function deleteScaleBar(
  briosa: BriosaClient,
  input: DeleteScaleBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteScaleBar(briosa, { scaleBarName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Scale Bar Stats

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Scale Bar Stats](/mp-command-catalog/commands/scale-bar-operations#get-scale-bar-stats) · [gRPC contract](/api/grpc/scale-bar-operations#get-scale-bar-stats)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scaleBarName` | `CollectionObjectName` | `Scale Bar Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `nominalLength` | `number` | `Nominal Length` |
| `actualLength` | `number` | `Actual Length` |
| `deviation` | `number` | `Deviation` |

```ts
export interface GetScaleBarStatsResult {
  readonly nominalLength: number;
  readonly actualLength: number;
  readonly deviation: number;
}

export interface GetScaleBarStatsInput {
  readonly scaleBarName: CollectionObjectName;
}

function getScaleBarStats(
  briosa: BriosaClient,
  input: GetScaleBarStatsInput,
  options?: BriosaCallOptions,
): Promise<GetScaleBarStatsResult>;
```

```ts
await getScaleBarStats(briosa, { scaleBarName: ... });
```

Returns the 3 MP outputs in the named `GetScaleBarStatsResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Scale Bar Check

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Scale Bar Check](/mp-command-catalog/commands/scale-bar-operations#scale-bar-check) · [gRPC contract](/api/grpc/scale-bar-operations#scale-bar-check)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scaleBarPointA` | `PointName` | `ScaleBar Point A` | Required |
| `scaleBarPointB` | `PointName` | `ScaleBar Point B` | Required |
| `currentTemperatureF` | `number` | `Current Temperature (F)` | 0.000000 |
| `lengthOfBarAt68F` | `number` | `Length of Bar at 68F` | 0.000000 |
| `materialCtePpmF` | `number` | `Material CTE (PPM/F)` | 0.000000 |
| `tolerance` | `number` | `Tolerance` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `deviationAt68F` | `number` | `Deviation at 68F` |

```ts
export interface ScaleBarCheckInput {
  readonly scaleBarPointA: PointName;
  readonly scaleBarPointB: PointName;
  readonly currentTemperatureF?: number;
  readonly lengthOfBarAt68F?: number;
  readonly materialCtePpmF?: number;
  readonly tolerance?: number;
}

function scaleBarCheck(
  briosa: BriosaClient,
  input: ScaleBarCheckInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await scaleBarCheck(briosa, { scaleBarPointA: ..., scaleBarPointB: ... });
```

Returns the MP output `Deviation at 68F` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Inward Positive Normal

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Inward Positive Normal](/mp-command-catalog/commands/scale-bar-operations#set-inward-positive-normal) · [gRPC contract](/api/grpc/scale-bar-operations#set-inward-positive-normal)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |
| `inwardPositive` | `boolean` | `Inward Positive?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetInwardPositiveNormalInput {
  readonly objectName: CollectionObjectName;
  readonly inwardPositive?: boolean;
}

function setInwardPositiveNormal(
  briosa: BriosaClient,
  input: SetInwardPositiveNormalInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setInwardPositiveNormal(briosa, { objectName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
