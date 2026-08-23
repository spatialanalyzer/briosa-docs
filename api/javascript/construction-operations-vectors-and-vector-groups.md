---
title: Construction Operations / Vectors and Vector Groups
description: Next Briosa JavaScript and TypeScript APIs for selected vector and Vector Group construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

## Types

```ts
export interface ConstructVectorGroupGroupToGroupCompareInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly groupA: CollectionObjectName;
  readonly groupB: CollectionObjectName;
  readonly rmsDeviationTolerance?: number;
  readonly maxAbsoluteDeviationTolerance?: number;
  readonly averageDeviationTolerance?: number;
}

export interface ConstructVectorGroupGroupToGroupCompareResult {
  readonly vectorCount: number;
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
}

export interface ConstructVectorGroupAreaProfileCheckInput {
  readonly referenceVectors: Iterable<VectorName>;
  readonly vectorGroupsToCheck: Iterable<CollectionVectorGroupName>;
  readonly resultantVectorGroupName: CollectionVectorGroupName;
  readonly areaRadius?: number;
  readonly areaTolerance?: number;
}

export interface ConstructVectorGroupFromVectorNameRefListInput {
  readonly vectorNameList: Iterable<VectorName>;
  readonly resultantVectorGroupName: CollectionVectorGroupName;
}

export interface ConstructVectorInWorkingCoordinatesBeginDeltaInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly newVectorName: string;
  readonly beginInWorkingCoordinates: Vector;
  readonly deltaInWorkingCoordinates: Vector;
  readonly isMagnitudeNegative?: boolean;
}

export interface ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeInput {
  readonly vectorGroupName: CollectionObjectName;
  readonly newVectorName: string;
  readonly beginInWorkingCoordinates: Vector;
  readonly directionInWorkingCoordinates: Vector;
  readonly signedMagnitude?: number;
}

export interface ConstructVectorGroupFromRelationshipInput {
  readonly relationshipName: CollectionObjectName;
  readonly vectorGroupName: CollectionVectorGroupName;
}

export interface MakeVectorNameRefListFromVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
}

export interface MakeVectorNameRefListRuntimeSelectInput {
  readonly userPrompt?: string;
}

export interface MakeCollectionVectorGroupNameRefListRuntimeSelectInput {
  readonly userPrompt?: string;
}

export interface MakeVectorNamesUniqueInVectorGroupInput {
  readonly vectorGroupName: CollectionObjectName;
}
```

All numeric comparison tolerances, area values, and signed magnitude default
to `0`; `isMagnitudeNegative` defaults to `false`. The vector-selection prompt
defaults to ` Select Vectors (ENTER when done) `, and the Vector Group prompt
defaults to an empty string.

## Functions

```ts
function constructVectorGroupGroupToGroupCompare(
  briosa: BriosaClient,
  input: ConstructVectorGroupGroupToGroupCompareInput,
  options?: BriosaCallOptions,
): Promise<ConstructVectorGroupGroupToGroupCompareResult>;

function constructVectorGroupAreaProfileCheck(
  briosa: BriosaClient,
  input: ConstructVectorGroupAreaProfileCheckInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructVectorGroupFromVectorNameRefList(
  briosa: BriosaClient,
  input: ConstructVectorGroupFromVectorNameRefListInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructVectorInWorkingCoordinatesBeginDelta(
  briosa: BriosaClient,
  input: ConstructVectorInWorkingCoordinatesBeginDeltaInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructVectorInWorkingCoordinatesBeginDirectionMagnitude(
  briosa: BriosaClient,
  input: ConstructVectorInWorkingCoordinatesBeginDirectionMagnitudeInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructVectorGroupFromRelationship(
  briosa: BriosaClient,
  input: ConstructVectorGroupFromRelationshipInput,
  options?: BriosaCallOptions,
): Promise<void>;

function makeVectorNameRefListFromVectorGroup(
  briosa: BriosaClient,
  input: MakeVectorNameRefListFromVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<readonly VectorName[]>;

function makeVectorNameRefListRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeVectorNameRefListRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<readonly VectorName[]>;

function makeCollectionVectorGroupNameRefListRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeCollectionVectorGroupNameRefListRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionVectorGroupName[]>;

function makeVectorNamesUniqueInVectorGroup(
  briosa: BriosaClient,
  input: MakeVectorNamesUniqueInVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Examples

```ts
const comparison = await constructVectorGroupGroupToGroupCompare(briosa, {
  vectorGroupName,
  groupA,
  groupB,
});
await constructVectorGroupAreaProfileCheck(briosa, {
  referenceVectors,
  vectorGroupsToCheck,
  resultantVectorGroupName,
});
await constructVectorGroupFromVectorNameRefList(briosa, {
  vectorNameList,
  resultantVectorGroupName,
});
await constructVectorInWorkingCoordinatesBeginDelta(briosa, {
  vectorGroupName,
  newVectorName: 'Deviation 1',
  beginInWorkingCoordinates,
  deltaInWorkingCoordinates,
});
await constructVectorInWorkingCoordinatesBeginDirectionMagnitude(briosa, {
  vectorGroupName,
  newVectorName: 'Deviation 2',
  beginInWorkingCoordinates,
  directionInWorkingCoordinates,
  signedMagnitude: 5,
});
await constructVectorGroupFromRelationship(briosa, {relationshipName, vectorGroupName});
const vectorNames = await makeVectorNameRefListFromVectorGroup(briosa, {vectorGroupName});
const selectedVectors = await makeVectorNameRefListRuntimeSelect(briosa);
const selectedGroups = await makeCollectionVectorGroupNameRefListRuntimeSelect(
  briosa,
  {userPrompt: 'Select vector groups'},
);
await makeVectorNamesUniqueInVectorGroup(briosa, {vectorGroupName});
```

Runtime selection is operator-interactive. An `AbortSignal` does not prove that
the SA interaction stopped. None of these functions is automatically replayed
after an unknown execution outcome.

The wildcard-selection command is SDK unavailable for this target. Construct,
decompose, and normalize `Vector` values directly in JavaScript or TypeScript.

[Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups) · [gRPC](/api/grpc/construction-operations-vectors-and-vector-groups)
