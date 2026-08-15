---
title: Vector Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Vector Operations MP commands.
toc_max_heading_level: 2
---

# Vector Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Add a Vector To Vector Name Ref List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add a Vector To Vector Name Ref List](/mp-command-catalog/commands/vector-operations#add-a-vector-to-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#add-a-vector-to-vector-name-ref-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |
| `vectorNameList` | `Iterable<VectorName>` | `Vector Name List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddAVectorToVectorNameRefListInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName?: string;
  readonly vectorNameList: Iterable<VectorName>;
}

function addAVectorToVectorNameRefList(
  briosa: BriosaClient,
  input: AddAVectorToVectorNameRefListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addAVectorToVectorNameRefList(briosa, { vectorGroupName: ..., vectorNameList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Auto-Range and Set Vector Group Colorization (All)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Auto-Range and Set Vector Group Colorization (All)](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-all) · [gRPC contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-all)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `treatIndividually` | `boolean` | `Treat Individually?` | false |
| `colorizationOptionsUsesModeOnly` | `Color` | `Colorization Options (Uses Mode Only)` | Red |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AutoRangeAndSetVectorGroupColorizationAllInput {
  readonly treatIndividually?: boolean;
  readonly colorizationOptionsUsesModeOnly?: Color;
}

function autoRangeAndSetVectorGroupColorizationAll(
  briosa: BriosaClient,
  input?: AutoRangeAndSetVectorGroupColorizationAllInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await autoRangeAndSetVectorGroupColorizationAll(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Auto-Range and Set Vector Group Colorization (Selected)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Auto-Range and Set Vector Group Colorization (Selected)](/mp-command-catalog/commands/vector-operations#auto-range-and-set-vector-group-colorization-selected) · [gRPC contract](/api/grpc/vector-operations#auto-range-and-set-vector-group-colorization-selected)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupsToBeSet` | `Iterable<CollectionVectorGroupName>` | `Vector Groups to be Set` | Required |
| `treatIndividually` | `boolean` | `Treat Individually?` | false |
| `colorizationOptionsUsesModeOnly` | `Color` | `Colorization Options (Uses Mode Only)` | Red |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AutoRangeAndSetVectorGroupColorizationSelectedInput {
  readonly vectorGroupsToBeSet: Iterable<CollectionVectorGroupName>;
  readonly treatIndividually?: boolean;
  readonly colorizationOptionsUsesModeOnly?: Color;
}

function autoRangeAndSetVectorGroupColorizationSelected(
  briosa: BriosaClient,
  input: AutoRangeAndSetVectorGroupColorizationSelectedInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await autoRangeAndSetVectorGroupColorizationSelected(briosa, { vectorGroupsToBeSet: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete i-th Vector From Vector Group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete i-th Vector From Vector Group](/mp-command-catalog/commands/vector-operations#delete-i-th-vector-from-vector-group) · [gRPC contract](/api/grpc/vector-operations#delete-i-th-vector-from-vector-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorIndex` | `number` | `Vector Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteIthVectorFromVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorIndex?: number;
}

function deleteIthVectorFromVectorGroup(
  briosa: BriosaClient,
  input: DeleteIthVectorFromVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteIthVectorFromVectorGroup(briosa, { vectorGroupName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Vector by Name

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Vector by Name](/mp-command-catalog/commands/vector-operations#delete-vector-by-name) · [gRPC contract](/api/grpc/vector-operations#delete-vector-by-name)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteVectorByNameInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName?: string;
}

function deleteVectorByName(
  briosa: BriosaClient,
  input: DeleteVectorByNameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteVectorByName(briosa, { vectorGroupName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Vectors

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Vectors](/mp-command-catalog/commands/vector-operations#delete-vectors) · [gRPC contract](/api/grpc/vector-operations#delete-vectors)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorNameList` | `Iterable<VectorName>` | `Vector Name List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteVectorsInput {
  readonly vectorNameList: Iterable<VectorName>;
}

function deleteVectors(
  briosa: BriosaClient,
  input: DeleteVectorsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteVectors(briosa, { vectorNameList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get i-th Vector From Vector Group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get i-th Vector From Vector Group](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-group) · [gRPC contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorIndex` | `number` | `Vector Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `vectorName` | `string` | `Vector Name` |
| `beginInWorking` | `Vector` | `Begin in Working` |
| `endInWorking` | `Vector` | `End in Working` |
| `totalDeltaInWorking` | `Vector` | `Total Delta in Working` |
| `ijkUnitVectorInWorking` | `Vector` | `ijk Unit Vector in Working` |
| `magnitude` | `number` | `Magnitude` |

```ts
export interface GetIthVectorFromVectorGroupResult {
  readonly vectorName: string;
  readonly beginInWorking: Vector;
  readonly endInWorking: Vector;
  readonly totalDeltaInWorking: Vector;
  readonly ijkUnitVectorInWorking: Vector;
  readonly magnitude: number;
}

export interface GetIthVectorFromVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorIndex?: number;
}

function getIthVectorFromVectorGroup(
  briosa: BriosaClient,
  input: GetIthVectorFromVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<GetIthVectorFromVectorGroupResult>;
```

```ts
await getIthVectorFromVectorGroup(briosa, { vectorGroupName: ... });
```

Returns the 6 MP outputs in the named `GetIthVectorFromVectorGroupResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get i-th Vector From Vector Name Ref List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get i-th Vector From Vector Name Ref List](/mp-command-catalog/commands/vector-operations#get-i-th-vector-from-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#get-i-th-vector-from-vector-name-ref-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorNameList` | `Iterable<VectorName>` | `Vector Name List` | Required |
| `vectorIndex` | `number` | `Vector Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` |
| `vectorName` | `string` | `Vector Name` |
| `beginInWorking` | `Vector` | `Begin in Working` |
| `endInWorking` | `Vector` | `End in Working` |
| `totalDeltaInWorking` | `Vector` | `Total Delta in Working` |
| `ijkUnitVectorInWorking` | `Vector` | `ijk Unit Vector in Working` |
| `magnitude` | `number` | `Magnitude` |

```ts
export interface GetIthVectorFromVectorNameRefListResult {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName: string;
  readonly beginInWorking: Vector;
  readonly endInWorking: Vector;
  readonly totalDeltaInWorking: Vector;
  readonly ijkUnitVectorInWorking: Vector;
  readonly magnitude: number;
}

export interface GetIthVectorFromVectorNameRefListInput {
  readonly vectorNameList: Iterable<VectorName>;
  readonly vectorIndex?: number;
}

function getIthVectorFromVectorNameRefList(
  briosa: BriosaClient,
  input: GetIthVectorFromVectorNameRefListInput,
  options?: BriosaCallOptions,
): Promise<GetIthVectorFromVectorNameRefListResult>;
```

```ts
await getIthVectorFromVectorNameRefList(briosa, { vectorNameList: ... });
```

Returns the 7 MP outputs in the named `GetIthVectorFromVectorNameRefListResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Number of Vectors in Vector Group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Number of Vectors in Vector Group](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-group) · [gRPC contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `totalCount` | `number` | `Total Count` |

```ts
export interface GetNumberOfVectorsInVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
}

function getNumberOfVectorsInVectorGroup(
  briosa: BriosaClient,
  input: GetNumberOfVectorsInVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getNumberOfVectorsInVectorGroup(briosa, { vectorGroupName: ... });
```

Returns the MP output `Total Count` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Number of Vectors in Vector Name Ref List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Number of Vectors in Vector Name Ref List](/mp-command-catalog/commands/vector-operations#get-number-of-vectors-in-vector-name-ref-list) · [gRPC contract](/api/grpc/vector-operations#get-number-of-vectors-in-vector-name-ref-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorNameList` | `Iterable<VectorName>` | `Vector Name List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `totalCount` | `number` | `Total Count` |

```ts
export interface GetNumberOfVectorsInVectorNameRefListInput {
  readonly vectorNameList: Iterable<VectorName>;
}

function getNumberOfVectorsInVectorNameRefList(
  briosa: BriosaClient,
  input: GetNumberOfVectorsInVectorNameRefListInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getNumberOfVectorsInVectorNameRefList(briosa, { vectorNameList: ... });
```

Returns the MP output `Total Count` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Vector From Vector Group By Name

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Vector From Vector Group By Name](/mp-command-catalog/commands/vector-operations#get-vector-from-vector-group-by-name) · [gRPC contract](/api/grpc/vector-operations#get-vector-from-vector-group-by-name)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `beginInWorking` | `Vector` | `Begin in Working` |
| `endInWorking` | `Vector` | `End in Working` |
| `totalDeltaInWorking` | `Vector` | `Total Delta in Working` |
| `ijkUnitVectorInWorking` | `Vector` | `ijk Unit Vector in Working` |
| `magnitude` | `number` | `Magnitude` |

```ts
export interface GetVectorFromVectorGroupByNameResult {
  readonly beginInWorking: Vector;
  readonly endInWorking: Vector;
  readonly totalDeltaInWorking: Vector;
  readonly ijkUnitVectorInWorking: Vector;
  readonly magnitude: number;
}

export interface GetVectorFromVectorGroupByNameInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly vectorName?: string;
}

function getVectorFromVectorGroupByName(
  briosa: BriosaClient,
  input: GetVectorFromVectorGroupByNameInput,
  options?: BriosaCallOptions,
): Promise<GetVectorFromVectorGroupByNameResult>;
```

```ts
await getVectorFromVectorGroupByName(briosa, { vectorGroupName: ... });
```

Returns the 5 MP outputs in the named `GetVectorFromVectorGroupByNameResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Vector Group Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Vector Group Properties](/mp-command-catalog/commands/vector-operations#get-vector-group-properties) · [gRPC contract](/api/grpc/vector-operations#get-vector-group-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `totalVectors` | `number` | `Total Vectors` |
| `vectorsInTolerance` | `number` | `Vectors In Tolerance` |
| `vectorsOutOfTolerance` | `number` | `Vectors Out Of Tolerance` |
| `invalidVectors` | `number` | `Invalid Vectors` |
| `vectorsInTolerance2` | `number` | `% Vectors In Tolerance` |
| `vectorsOutOfTolerance2` | `number` | `% Vectors Out Of Tolerance` |
| `absoluteMaxMagnitude` | `number` | `Absolute Max Magnitude` |
| `absoluteMinMagnitude` | `number` | `Absolute Min Magnitude` |
| `maxMagnitude` | `number` | `Max Magnitude` |
| `minMagnitude` | `number` | `Min Magnitude` |
| `standardDeviationFromZero` | `number` | `Standard Deviation From Zero` |
| `standardDeviationFromMean` | `number` | `Standard Deviation From Mean` |
| `avgMagnitude` | `number` | `Avg Magnitude` |
| `avgOfAbsMagnitude` | `number` | `Avg of Abs Magnitude` |
| `highToleranceValue` | `number` | `High Tolerance Value` |
| `lowToleranceValue` | `number` | `Low Tolerance Value` |
| `rmsValue` | `number` | `RMS Value` |

```ts
export interface GetVectorGroupPropertiesResult {
  readonly totalVectors: number;
  readonly vectorsInTolerance: number;
  readonly vectorsOutOfTolerance: number;
  readonly invalidVectors: number;
  readonly vectorsInTolerance2: number;
  readonly vectorsOutOfTolerance2: number;
  readonly absoluteMaxMagnitude: number;
  readonly absoluteMinMagnitude: number;
  readonly maxMagnitude: number;
  readonly minMagnitude: number;
  readonly standardDeviationFromZero: number;
  readonly standardDeviationFromMean: number;
  readonly avgMagnitude: number;
  readonly avgOfAbsMagnitude: number;
  readonly highToleranceValue: number;
  readonly lowToleranceValue: number;
  readonly rmsValue: number;
}

export interface GetVectorGroupPropertiesInput {
  readonly vectorGroupName: CollectionObjectName;
}

function getVectorGroupProperties(
  briosa: BriosaClient,
  input: GetVectorGroupPropertiesInput,
  options?: BriosaCallOptions,
): Promise<GetVectorGroupPropertiesResult>;
```

```ts
await getVectorGroupProperties(briosa, { vectorGroupName: ... });
```

Returns the 17 MP outputs in the named `GetVectorGroupPropertiesResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Vector Group Colorization Options (All)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Vector Group Colorization Options (All)](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-all) · [gRPC contract](/api/grpc/vector-operations#set-vector-group-colorization-options-all)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `colorizationOptions` | `Color` | `Colorization Options` | Red |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetVectorGroupColorizationOptionsAllInput {
  readonly colorizationOptions?: Color;
}

function setVectorGroupColorizationOptionsAll(
  briosa: BriosaClient,
  input?: SetVectorGroupColorizationOptionsAllInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setVectorGroupColorizationOptionsAll(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Vector Group Colorization Options (Selected)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Vector Group Colorization Options (Selected)](/mp-command-catalog/commands/vector-operations#set-vector-group-colorization-options-selected) · [gRPC contract](/api/grpc/vector-operations#set-vector-group-colorization-options-selected)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroupsToBeSet` | `Iterable<CollectionVectorGroupName>` | `Vector Groups to be Set` | Required |
| `colorizationOptions` | `Color` | `Colorization Options` | Red |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetVectorGroupColorizationOptionsSelectedInput {
  readonly vectorGroupsToBeSet: Iterable<CollectionVectorGroupName>;
  readonly colorizationOptions?: Color;
}

function setVectorGroupColorizationOptionsSelected(
  briosa: BriosaClient,
  input: SetVectorGroupColorizationOptionsSelectedInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setVectorGroupColorizationOptionsSelected(briosa, { vectorGroupsToBeSet: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Sort Vectors

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Sort Vectors](/mp-command-catalog/commands/vector-operations#sort-vectors) · [gRPC contract](/api/grpc/vector-operations#sort-vectors)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceVectors` | `Iterable<VectorName>` | `Source Vectors` | Required |
| `sortMethod` | `string` | `Sort Method` | Magnitude |
| `coordinateSystem` | `CoordinateSystemType` | `Coordinate System` | Cartesian |
| `primarySortCoordinate` | `string` | `Primary Sort Coordinate` | X (R) |
| `secondarySortCoordinate` | `string` | `Secondary Sort Coordinate` | Y (Theta) |
| `tertiarySortCoordinate` | `string` | `Tertiary Sort Coordinate` | Z (Phi) |
| `primaryCoordinateGranularity` | `number` | `Primary Coordinate Granularity` | 0.000000 |
| `secondaryCoordinateGranularity` | `number` | `Secondary Coordinate Granularity` | 0.000000 |
| `tertiaryCoordinateGranularity` | `number` | `Tertiary Coordinate Granularity` | 0.000000 |
| `ascending` | `boolean` | `Ascending?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `sortedVectors` | `readonly VectorName[]` | `Sorted Vectors` |

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

function sortVectors(
  briosa: BriosaClient,
  input: SortVectorsInput,
  options?: BriosaCallOptions,
): Promise<readonly VectorName[]>;
```

```ts
await sortVectors(briosa, { sourceVectors: ... });
```

Returns the MP output `Sorted Vectors` directly as `readonly VectorName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
