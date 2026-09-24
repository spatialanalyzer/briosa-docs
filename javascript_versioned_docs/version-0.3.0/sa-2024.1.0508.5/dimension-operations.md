---
title: Dimension Operations
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Dimension Operations

[SA 2026.1.0529.7](/api/javascript/dimension-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/dimension-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Dimension {/* #delete-dimension */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#delete-dimension) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/dimension-operations#delete-dimension)

```ts
export interface DeleteDimensionInput {
  readonly dimensionName: CollectionObjectName;
}

export declare function deleteDimension(
  briosa: BriosaClient,
  input: DeleteDimensionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Dimension Value {/* #get-dimension-value */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#get-dimension-value) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/dimension-operations#get-dimension-value)

```ts
export interface GetDimensionValueInput {
  readonly dimensionName: CollectionObjectName;
}

export declare function getDimensionValue(
  briosa: BriosaClient,
  input: GetDimensionValueInput,
  options?: BriosaCallOptions,
): Promise<GetDimensionValueResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Dimension Tolerance {/* #set-dimension-tolerance */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#set-dimension-tolerance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/dimension-operations#set-dimension-tolerance)

```ts
export interface SetDimensionToleranceInput {
  readonly dimensionName: CollectionItemName;
  readonly enableNominal?: boolean;
  readonly enableHigh?: boolean;
  readonly enableLow?: boolean;
  readonly nominal?: number;
  readonly highTolerance?: number;
  readonly lowTolerance?: number;
}

export declare function setDimensionTolerance(
  briosa: BriosaClient,
  input: SetDimensionToleranceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2024.1.0508.5)
