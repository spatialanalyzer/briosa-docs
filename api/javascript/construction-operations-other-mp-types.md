---
title: Construction Operations / Other MP Types
description: Unreleased Briosa JavaScript and TypeScript APIs for selected Other MP Types commands.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

The functions do not retain SpatialAnalyzer or MP state, and none is
automatically replayed.

## Shared Values

```ts
export type SystemString =
  | "SA Version"
  | "XIT Filename"
  | "MP Filename"
  | "MP Filename (Full Path)"
  | "Date & Time"
  | "Date"
  | "Date (Short)"
  | "Time"
  | "Key Serial Number"
  | "Company Name"
  | "User Name"
  | "License User Name"
  | "Windows User Name"
  | "Computer Name";

export interface FixedXyzTransformComponents {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly rx: number;
  readonly ry: number;
  readonly rz: number;
}
export interface FixedXyzTransformVectors {
  readonly positionInWorking: Vector;
  readonly orientationInWorking: Vector;
}
export interface TransformAxes {
  readonly origin: Vector;
  readonly xAxis: Vector;
  readonly yAxis: Vector;
  readonly zAxis: Vector;
}
export interface WorldFixedXyzTransformComponents extends FixedXyzTransformComponents {
  readonly scale: number;
}
export interface EulerXyzTransformComponents extends FixedXyzTransformComponents {}
export interface EulerZyxTransformComponents {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly rz: number;
  readonly ry: number;
  readonly rx: number;
}
export interface EulerZyzTransformComponents {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly firstRz: number;
  readonly ry: number;
  readonly secondRz: number;
}
export interface EulerZxzTransformComponents {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly firstRz: number;
  readonly rx: number;
  readonly secondRz: number;
}
export interface WorldFixedXyzTransformVectors {
  readonly positionInWorking: Vector;
  readonly orientationInWorking: Vector;
  readonly scale: number;
}
```

`ItemType`, `ObjectType`, `Color`, `Transform`, `WorldTransform`, and the
identity interfaces are shared Briosa values.

## Make a System String

```ts
export interface MakeSystemStringInput {
  readonly stringContent: SystemString;
  readonly formatString?: string;
}
function makeSystemString(
  briosa: BriosaClient,
  input: MakeSystemStringInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The returned value is never logged by default because some choices expose user
or license-registration information.

## Make a Collection Name - Runtime Select

```ts
export interface MakeCollectionNameRuntimeSelectInput { readonly userPrompt?: string; }
function makeCollectionNameRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeCollectionNameRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<CollectionName>;
```

## Make a Collection Item Name Reference List - WildCard Selection

```ts
export interface MakeCollectionItemNameRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly itemWildcardCriteria?: string;
  readonly itemType?: ItemType;
}
function makeCollectionItemNameRefListWildcardSelection(
  briosa: BriosaClient,
  input?: MakeCollectionItemNameRefListWildcardSelectionInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionItemName[]>;
```

Omitted wildcard criteria map to `*`; omitted `itemType` maps to `Any`.

## Make a Collection Object Name - Runtime Select

```ts
export interface MakeCollectionObjectNameRuntimeSelectInput {
  readonly userPrompt?: string;
  readonly objectType?: ObjectType;
}
function makeCollectionObjectNameRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeCollectionObjectNameRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

## Make a Collection Object Name - Ensure Unique

```ts
export interface MakeCollectionObjectNameEnsureUniqueInput {
  readonly collectionObjectName: CollectionObjectName;
  readonly useNumberSuffix?: boolean;
}
function makeCollectionObjectNameEnsureUnique(
  briosa: BriosaClient,
  input: MakeCollectionObjectNameEnsureUniqueInput,
  options?: BriosaCallOptions,
): Promise<CollectionObjectName>;
```

The returned value is the first MP argument after SpatialAnalyzer mutates it.

## Make a Collection Object Name Reference List- Runtime Select

```ts
export interface MakeCollectionObjectNameRefListRuntimeSelectInput {
  readonly userPrompt?: string;
  readonly objectType?: ObjectType;
}
function makeCollectionObjectNameRefListRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeCollectionObjectNameRefListRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

## Make a Collection Object Name Reference List- WildCard Selection

```ts
export interface MakeCollectionObjectNameRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly objectWildcardCriteria?: string;
  readonly objectType?: ObjectType;
}
function makeCollectionObjectNameRefListWildcardSelection(
  briosa: BriosaClient,
  input?: MakeCollectionObjectNameRefListWildcardSelectionInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

## Make a Collection Object Name Ref List - By Type

```ts
export interface MakeCollectionObjectNameRefListByTypeInput {
  readonly collection: string;
  readonly objectType?: ObjectType;
}
function makeCollectionObjectNameRefListByType(
  briosa: BriosaClient,
  input: MakeCollectionObjectNameRefListByTypeInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

## Make a Collection Object Name Ref List - By Type and Color

```ts
export interface MakeCollectionObjectNameRefListByTypeAndColorInput {
  readonly collection: string;
  readonly objectType?: ObjectType;
  readonly objectColor?: Color;
}
function makeCollectionObjectNameRefListByTypeAndColor(
  briosa: BriosaClient,
  input: MakeCollectionObjectNameRefListByTypeAndColorInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

Omitted `objectColor` maps to RGB `(255, 0, 0)`.

## Make a Collection Object Name Ref List from all Groups in a Collection

```ts
function makeCollectionObjectNameRefListFromAllGroupsInCollection(
  briosa: BriosaClient,
  collectionName: CollectionName,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

## Get Collection Instrument Ref List Variable

```ts
function getCollectionInstrumentRefListVariable(
  briosa: BriosaClient,
  name: string,
  options?: BriosaCallOptions,
): Promise<readonly CollectionInstrumentId[]>;
```

The value is read from MP state on every call.

## Set Collection Instrument Ref List Variable

```ts
export interface SetCollectionInstrumentRefListVariableInput {
  readonly name: string;
  readonly value: Iterable<CollectionInstrumentId>;
}
function setCollectionInstrumentRefListVariable(
  briosa: BriosaClient,
  input: SetCollectionInstrumentRefListVariableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Add Collection Instruments to a Ref List - WildCard Selection

```ts
export interface AddCollectionInstrumentsToRefListWildcardSelectionInput {
  readonly collectionInstrumentRefList: Iterable<CollectionInstrumentId>;
  readonly collectionWildcardCriteria?: string;
  readonly instrumentWildcardCriteria?: string;
}
function addCollectionInstrumentsToRefListWildcardSelection(
  briosa: BriosaClient,
  input: AddCollectionInstrumentsToRefListWildcardSelectionInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionInstrumentId[]>;
```

The result is the MP's first argument after mutation. Both criteria default to
`*`.

## Make a Collection Instrument Reference List- Runtime Select

```ts
export interface MakeCollectionInstrumentRefListRuntimeSelectInput { readonly userPrompt?: string; }
function makeCollectionInstrumentRefListRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeCollectionInstrumentRefListRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionInstrumentId[]>;
```

## Make a Relationship Reference List- WildCard Selection

```ts
export interface MakeRelationshipRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly relationshipWildcardCriteria?: string;
}
function makeRelationshipRefListWildcardSelection(
  briosa: BriosaClient,
  input?: MakeRelationshipRefListWildcardSelectionInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionItemName[]>;
```

The unavailable MP relationship-type filter is intentionally omitted.

## Make a Relationship Reference List- Runtime Select

```ts
export interface MakeRelationshipRefListRuntimeSelectInput { readonly userPrompt?: string; }
function makeRelationshipRefListRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeRelationshipRefListRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionItemName[]>;
```

## Make an Event Reference List- WildCard Selection

```ts
export interface MakeEventRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly eventWildcardCriteria?: string;
}
function makeEventRefListWildcardSelection(
  briosa: BriosaClient,
  input?: MakeEventRefListWildcardSelectionInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionItemName[]>;
```

## Make a Collection Instrument ID - Runtime Select

```ts
export interface MakeCollectionInstrumentIdRuntimeSelectInput { readonly userPrompt?: string; }
function makeCollectionInstrumentIdRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeCollectionInstrumentIdRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<CollectionInstrumentId>;
```

## Make a Report Ref List from a Collection

```ts
function makeReportRefListFromCollection(
  briosa: BriosaClient,
  collectionName: CollectionName,
  options?: BriosaCallOptions,
): Promise<readonly CollectionItemName[]>;
```

## Make a Report Ref List - Runtime Select

```ts
export interface MakeReportRefListRuntimeSelectInput { readonly userPrompt?: string; }
function makeReportRefListRuntimeSelect(
  briosa: BriosaClient,
  input?: MakeReportRefListRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionItemName[]>;
```

## Make a Picture Name Ref List - Runtime Select

```ts
export interface MakePictureNameRefListRuntimeSelectInput { readonly userPrompt?: string; }
function makePictureNameRefListRuntimeSelect(
  briosa: BriosaClient,
  input?: MakePictureNameRefListRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionItemName[]>;
```

Runtime-selection functions are explicitly interactive. Aborting a call does
not prove that the SpatialAnalyzer interaction stopped.

## Make a Transform from Doubles (Fixed XYZ)

```ts
export interface MakeTransformFromDoublesFixedXyzInput {
  readonly x?: number;
  readonly y?: number;
  readonly z?: number;
  readonly rx?: number;
  readonly ry?: number;
  readonly rz?: number;
}
function makeTransformFromDoublesFixedXyz(
  briosa: BriosaClient,
  input?: MakeTransformFromDoublesFixedXyzInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

Every omitted component maps to zero.

## Make a Transform from Doubles (Euler Parameters)

```ts
export interface MakeTransformFromDoublesEulerParametersInput {
  readonly x?: number;
  readonly y?: number;
  readonly z?: number;
  readonly e1?: number;
  readonly e2?: number;
  readonly e3?: number;
  readonly e4?: number;
}
function makeTransformFromDoublesEulerParameters(
  briosa: BriosaClient,
  input?: MakeTransformFromDoublesEulerParametersInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

The zero defaults are preserved exactly from the MP editor.

## Get Working Transform of Object (Fixed XYZ)

```ts
function getWorkingTransformOfObjectFixedXyz(
  briosa: BriosaClient,
  objectName: CollectionObjectName,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

## Invert Transform

```ts
function invertTransform(
  briosa: BriosaClient,
  transform: Transform,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

## Decompose Transform into Doubles (Fixed XYZ)

```ts
function decomposeTransformIntoDoublesFixedXyz(
  briosa: BriosaClient,
  inputTransform: Transform,
  options?: BriosaCallOptions,
): Promise<FixedXyzTransformComponents>;
```

## Decompose Transform into Vectors (Fixed XYZ)

```ts
function decomposeTransformIntoVectorsFixedXyz(
  briosa: BriosaClient,
  inputTransform: Transform,
  options?: BriosaCallOptions,
): Promise<FixedXyzTransformVectors>;
```

## Decompose Transform into Vectors (Origin and Axes)

```ts
function decomposeTransformIntoVectorsOriginAndAxes(
  briosa: BriosaClient,
  transform: Transform,
  options?: BriosaCallOptions,
): Promise<TransformAxes>;
```

## Decompose World Transform Operator into Doubles (Fixed XYZ in World)

```ts
function decomposeWorldTransformOperatorIntoDoublesFixedXyzInWorld(
  briosa: BriosaClient,
  inputWorldTransformOperator: WorldTransform,
  options?: BriosaCallOptions,
): Promise<WorldFixedXyzTransformComponents>;
```

## Decompose Transform into Doubles (Euler XYZ)

```ts
function decomposeTransformIntoDoublesEulerXyz(
  briosa: BriosaClient,
  inputTransform: Transform,
  options?: BriosaCallOptions,
): Promise<EulerXyzTransformComponents>;
```

## Decompose Transform into Doubles (Euler ZYX)

```ts
function decomposeTransformIntoDoublesEulerZyx(
  briosa: BriosaClient,
  inputTransform: Transform,
  options?: BriosaCallOptions,
): Promise<EulerZyxTransformComponents>;
```

## Decompose Transform into Doubles (Euler ZYZ)

```ts
function decomposeTransformIntoDoublesEulerZyz(
  briosa: BriosaClient,
  inputTransform: Transform,
  options?: BriosaCallOptions,
): Promise<EulerZyzTransformComponents>;
```

`firstRz` and `secondRz` preserve the repeated MP output labels.

## Decompose Transform into Doubles (Euler ZXZ)

```ts
function decomposeTransformIntoDoublesEulerZxz(
  briosa: BriosaClient,
  inputTransform: Transform,
  options?: BriosaCallOptions,
): Promise<EulerZxzTransformComponents>;
```

## Decompose World Transform Operator into Vectors (Fixed XYZ in World)

```ts
function decomposeWorldTransformOperatorIntoVectorsFixedXyzInWorld(
  briosa: BriosaClient,
  inputWorldTransformOperator: WorldTransform,
  options?: BriosaCallOptions,
): Promise<WorldFixedXyzTransformVectors>;
```

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types) ·
[gRPC](/api/grpc/construction-operations-other-mp-types)
