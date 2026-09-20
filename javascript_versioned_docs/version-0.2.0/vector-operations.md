---
title: Vector Operations
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Vector Operations

[SA 2026.1.0529.7](/api/javascript/vector-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/vector-operations)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add a Vector To Vector Name Ref List {/* #add-a-vector-to-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#add-a-vector-to-vector-name-ref-list)

```ts
export interface AddAVectorToVectorNameRefListInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName?: string;
  readonly vectorNameList: Iterable<VectorName>;
}

export declare function addAVectorToVectorNameRefList(
  briosa: BriosaClient,
  input: AddAVectorToVectorNameRefListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Range and Set Vector Group Colorization (All) {/* #auto-range-and-set-vector-group-colorization-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all) · [gRPC Contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-all)

```ts
export interface AutoRangeAndSetVectorGroupColorizationAllInput {
  readonly treatIndividually?: boolean;
  readonly colorizationOptionsUsesModeOnly?: ColorizationOptions;
}

export declare function autoRangeAndSetVectorGroupColorizationAll(
  briosa: BriosaClient,
  input: AutoRangeAndSetVectorGroupColorizationAllInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Range and Set Vector Group Colorization (Selected) {/* #auto-range-and-set-vector-group-colorization-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected) · [gRPC Contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-selected)

```ts
export interface AutoRangeAndSetVectorGroupColorizationSelectedInput {
  readonly vectorGroupsToBeSet: Iterable<CollectionVectorGroupName>;
  readonly treatIndividually?: boolean;
  readonly colorizationOptionsUsesModeOnly?: ColorizationOptions;
}

export declare function autoRangeAndSetVectorGroupColorizationSelected(
  briosa: BriosaClient,
  input: AutoRangeAndSetVectorGroupColorizationSelectedInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete i-th Vector From Vector Group {/* #delete-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group) · [gRPC Contract](/api/grpc/vector-operations#delete-i-th-vector-from-vector-group)

```ts
export interface DeleteIthVectorFromVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorIndex?: number;
}

export declare function deleteIthVectorFromVectorGroup(
  briosa: BriosaClient,
  input: DeleteIthVectorFromVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Vector by Name {/* #delete-vector-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vector-by-name) · [gRPC Contract](/api/grpc/vector-operations#delete-vector-by-name)

```ts
export interface DeleteVectorByNameInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName?: string;
}

export declare function deleteVectorByName(
  briosa: BriosaClient,
  input: DeleteVectorByNameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Vectors {/* #delete-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#delete-vectors) · [gRPC Contract](/api/grpc/vector-operations#delete-vectors)

```ts
export interface DeleteVectorsInput {
  readonly vectorNameList: Iterable<VectorName>;
}

export declare function deleteVectors(
  briosa: BriosaClient,
  input: DeleteVectorsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Vector From Vector Group {/* #get-i-th-vector-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group) · [gRPC Contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-group)

```ts
export interface GetIthVectorFromVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorIndex?: number;
}

export declare function getIthVectorFromVectorGroup(
  briosa: BriosaClient,
  input: GetIthVectorFromVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<GetIthVectorFromVectorGroupResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Vector From Vector Name Ref List {/* #get-i-th-vector-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-name-ref-list)

```ts
export interface GetIthVectorFromVectorNameRefListInput {
  readonly vectorNameList: Iterable<VectorName>;
  readonly vectorIndex?: number;
}

export declare function getIthVectorFromVectorNameRefList(
  briosa: BriosaClient,
  input: GetIthVectorFromVectorNameRefListInput,
  options?: BriosaCallOptions,
): Promise<GetIthVectorFromVectorNameRefListResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Vectors in Vector Group {/* #get-number-of-vectors-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group) · [gRPC Contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-group)

```ts
export interface GetNumberOfVectorsInVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
}

export declare function getNumberOfVectorsInVectorGroup(
  briosa: BriosaClient,
  input: GetNumberOfVectorsInVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Vectors in Vector Name Ref List {/* #get-number-of-vectors-in-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list) · [gRPC Contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-name-ref-list)

```ts
export interface GetNumberOfVectorsInVectorNameRefListInput {
  readonly vectorNameList: Iterable<VectorName>;
}

export declare function getNumberOfVectorsInVectorNameRefList(
  briosa: BriosaClient,
  input: GetNumberOfVectorsInVectorNameRefListInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector From Vector Group By Name {/* #get-vector-from-vector-group-by-name */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name) · [gRPC Contract](/api/grpc/vector-operations#get-vector-from-vector-group-by-name)

```ts
export interface GetVectorFromVectorGroupByNameInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName?: string;
}

export declare function getVectorFromVectorGroupByName(
  briosa: BriosaClient,
  input: GetVectorFromVectorGroupByNameInput,
  options?: BriosaCallOptions,
): Promise<GetVectorFromVectorGroupByNameResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Group Properties {/* #get-vector-group-properties */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#get-vector-group-properties) · [gRPC Contract](/api/grpc/vector-operations#get-vector-group-properties)

```ts
export interface GetVectorGroupPropertiesInput {
  readonly vectorGroupName: CollectionObjectName;
}

export declare function getVectorGroupProperties(
  briosa: BriosaClient,
  input: GetVectorGroupPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetVectorGroupPropertiesResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Colorization Options (All) {/* #set-vector-group-colorization-options-all */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all) · [gRPC Contract](/api/grpc/vector-operations#set-vector-group-colorization-options-all)

```ts
export interface SetVectorGroupColorizationOptionsAllInput {
  readonly colorizationOptions?: ColorizationOptions;
}

export declare function setVectorGroupColorizationOptionsAll(
  briosa: BriosaClient,
  input: SetVectorGroupColorizationOptionsAllInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Colorization Options (Selected) {/* #set-vector-group-colorization-options-selected */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected) · [gRPC Contract](/api/grpc/vector-operations#set-vector-group-colorization-options-selected)

```ts
export interface SetVectorGroupColorizationOptionsSelectedInput {
  readonly vectorGroupsToBeSet: Iterable<CollectionVectorGroupName>;
  readonly colorizationOptions?: ColorizationOptions;
}

export declare function setVectorGroupColorizationOptionsSelected(
  briosa: BriosaClient,
  input: SetVectorGroupColorizationOptionsSelectedInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Sort Vectors {/* #sort-vectors */}

[MP Catalog](/mp-command-catalog/commands/vector-operations#sort-vectors) · [gRPC Contract](/api/grpc/vector-operations#sort-vectors)

```ts
export interface SortVectorsInput {
  readonly sourceVectors: Iterable<VectorName>;
  readonly sortMethod?: string;
  readonly coordinateSystem?: CoordinateSystemType;
  readonly primarySortCoordinate?: string;
  readonly secondarySortCoordinate?: string;
  readonly tertiarySortCoordinate?: string;
  readonly primaryCoordinateGranularity?: number;
  readonly secondaryCoordinateGranularity?: number;
  readonly tertiaryCoordinateGranularity?: number;
  readonly ascending?: boolean;
}

export declare function sortVectors(
  briosa: BriosaClient,
  input: SortVectorsInput,
  options?: BriosaCallOptions,
): Promise<readonly VectorName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2026.1.0529.7)
