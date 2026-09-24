---
title: Scale Bar Operations
description: Unreleased javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Scale Bar Operations

[SA 2026.1.0529.7](/api/javascript/scale-bar-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/scale-bar-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Scale Bar {/* #delete-scale-bar */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#delete-scale-bar) · [gRPC Contract](/api/grpc/scale-bar-operations#delete-scale-bar)

```ts
export interface DeleteScaleBarInput {
  readonly scaleBarName: CollectionObjectName;
}

export declare function deleteScaleBar(
  briosa: BriosaClient,
  input: DeleteScaleBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Scale Bar Stats {/* #get-scale-bar-stats */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#get-scale-bar-stats) · [gRPC Contract](/api/grpc/scale-bar-operations#get-scale-bar-stats)

```ts
export interface GetScaleBarStatsInput {
  readonly scaleBarName: CollectionObjectName;
}

export declare function getScaleBarStats(
  briosa: BriosaClient,
  input: GetScaleBarStatsInput,
  options?: BriosaCallOptions,
): Promise<GetScaleBarStatsResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scale Bar Check {/* #scale-bar-check */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#scale-bar-check) · [gRPC Contract](/api/grpc/scale-bar-operations#scale-bar-check)

```ts
export interface ScaleBarCheckInput {
  readonly scaleBarPointA: PointName;
  readonly scaleBarPointB: PointName;
  readonly currentTemperature?: number;
  readonly lengthOfBarAt68F?: number;
  readonly materialCte?: number;
  readonly tolerance?: number;
}

export declare function scaleBarCheck(
  briosa: BriosaClient,
  input: ScaleBarCheckInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `currentTemperature` | Temperature in degrees Fahrenheit. |
| `materialCte` | Coefficient in parts per million per degree Fahrenheit. |

## Set Inward Positive Normal {/* #set-inward-positive-normal */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#set-inward-positive-normal) · [gRPC Contract](/api/grpc/scale-bar-operations#set-inward-positive-normal)

```ts
export interface SetInwardPositiveNormalInput {
  readonly objectName: CollectionObjectName;
  readonly inwardPositive?: boolean;
}

export declare function setInwardPositiveNormal(
  briosa: BriosaClient,
  input: SetInwardPositiveNormalInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/f98eef683c941bf289c1d0ec411c13a1903bcca4/targets/2026.1.0529.7)
