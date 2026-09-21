---
title: Construction Operations / Other MP Types
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

[SA 2026.1.0529.7](/api/javascript/construction-operations-other-mp-types) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-other-mp-types)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Make a System String {/* #make-a-system-string */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-system-string) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-system-string)

```ts
export interface MakeSystemStringInput {
  readonly stringContent: SystemString;
  readonly formatString?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeSystemString(
    input: MakeSystemStringInput,
    callOptions?: BriosaCallOptions,
  ): Promise<string>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Name - Runtime Select {/* #make-a-collection-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-name---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-name---runtime-select)

```ts
export interface MakeCollectionNameRuntimeSelectInput {
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionNameRuntimeSelect(
    input?: MakeCollectionNameRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Item Name Reference List - WildCard Selection {/* #make-a-collection-item-name-reference-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection)

```ts
export interface MakeCollectionItemNameRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly itemWildcardCriteria?: string;
  readonly itemType?: ItemType;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionItemNameRefListWildcardSelection(
    input?: MakeCollectionItemNameRefListWildcardSelectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name - Runtime Select {/* #make-a-collection-object-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select)

```ts
export interface MakeCollectionObjectNameRuntimeSelectInput {
  readonly userPrompt?: string;
  readonly objectType?: ObjectType;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionObjectNameRuntimeSelect(
    input?: MakeCollectionObjectNameRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionObjectName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name - Ensure Unique {/* #make-a-collection-object-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique)

```ts
export interface MakeCollectionObjectNameEnsureUniqueInput {
  readonly collectionObjectName: CollectionObjectName;
  readonly useNumberSuffix?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionObjectNameEnsureUnique(
    input: MakeCollectionObjectNameEnsureUniqueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionObjectName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Reference List- Runtime Select {/* #make-a-collection-object-name-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select)

```ts
export interface MakeCollectionObjectNameRefListRuntimeSelectInput {
  readonly userPrompt?: string;
  readonly objectType?: ObjectType;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionObjectNameRefListRuntimeSelect(
    input?: MakeCollectionObjectNameRefListRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Reference List- WildCard Selection {/* #make-a-collection-object-name-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection)

```ts
export interface MakeCollectionObjectNameRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly objectWildcardCriteria?: string;
  readonly objectType?: ObjectType;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionObjectNameRefListWildcardSelection(
    input?: MakeCollectionObjectNameRefListWildcardSelectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List - By Type {/* #make-a-collection-object-name-ref-list---by-type */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type)

```ts
export interface MakeCollectionObjectNameRefListByTypeInput {
  readonly collection: string;
  readonly objectType?: ObjectType;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionObjectNameRefListByType(
    input: MakeCollectionObjectNameRefListByTypeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List - By Type and Color {/* #make-a-collection-object-name-ref-list---by-type-and-color */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color)

```ts
export interface MakeCollectionObjectNameRefListByTypeAndColorInput {
  readonly collection: string;
  readonly objectType?: ObjectType;
  readonly objectColor?: Color;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionObjectNameRefListByTypeAndColor(
    input: MakeCollectionObjectNameRefListByTypeAndColorInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List from all Groups in a Collection {/* #make-a-collection-object-name-ref-list-from-all-groups-in-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection)

```ts
// Member of BriosaClient
interface BriosaClient {
  makeCollectionObjectNameRefListFromAllGroupsInCollection(
    collectionName: CollectionName,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Instrument Ref List Variable {/* #get-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable)

```ts
// Member of BriosaClient
interface BriosaClient {
  getCollectionInstrumentRefListVariable(
    name: string,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionInstrumentId[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Instrument Ref List Variable {/* #set-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable)

```ts
export interface SetCollectionInstrumentRefListVariableInput {
  readonly name: string;
  readonly value: Iterable<CollectionInstrumentId>;
}

// Member of BriosaClient
interface BriosaClient {
  setCollectionInstrumentRefListVariable(
    input: SetCollectionInstrumentRefListVariableInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Collection Instruments to a Ref List - WildCard Selection {/* #add-collection-instruments-to-a-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection)

```ts
export interface AddCollectionInstrumentsToRefListWildcardSelectionInput {
  readonly collectionInstrumentRefList: Iterable<CollectionInstrumentId>;
  readonly collectionWildcardCriteria?: string;
  readonly instrumentWildcardCriteria?: string;
}

// Member of BriosaClient
interface BriosaClient {
  addCollectionInstrumentsToRefListWildcardSelection(
    input: AddCollectionInstrumentsToRefListWildcardSelectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionInstrumentId[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Instrument Reference List- Runtime Select {/* #make-a-collection-instrument-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select)

```ts
export interface MakeCollectionInstrumentRefListRuntimeSelectInput {
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionInstrumentRefListRuntimeSelect(
    input?: MakeCollectionInstrumentRefListRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionInstrumentId[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Relationship Reference List- WildCard Selection {/* #make-a-relationship-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection)

```ts
export interface MakeRelationshipRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly relationshipWildcardCriteria?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeRelationshipRefListWildcardSelection(
    input?: MakeRelationshipRefListWildcardSelectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Relationship Reference List- Runtime Select {/* #make-a-relationship-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select)

```ts
export interface MakeRelationshipRefListRuntimeSelectInput {
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeRelationshipRefListRuntimeSelect(
    input?: MakeRelationshipRefListRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make an Event Reference List- WildCard Selection {/* #make-an-event-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection)

```ts
export interface MakeEventRefListWildcardSelectionInput {
  readonly collectionWildcardCriteria?: string;
  readonly eventWildcardCriteria?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeEventRefListWildcardSelection(
    input?: MakeEventRefListWildcardSelectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Instrument ID - Runtime Select {/* #make-a-collection-instrument-id---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select)

```ts
export interface MakeCollectionInstrumentIdRuntimeSelectInput {
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeCollectionInstrumentIdRuntimeSelect(
    input?: MakeCollectionInstrumentIdRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<CollectionInstrumentId>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Report Ref List from a Collection {/* #make-a-report-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection)

```ts
// Member of BriosaClient
interface BriosaClient {
  makeReportRefListFromCollection(
    collectionName: CollectionName,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Report Ref List - Runtime Select {/* #make-a-report-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select)

```ts
export interface MakeReportRefListRuntimeSelectInput {
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makeReportRefListRuntimeSelect(
    input?: MakeReportRefListRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Picture Name Ref List - Runtime Select {/* #make-a-picture-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select)

```ts
export interface MakePictureNameRefListRuntimeSelectInput {
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makePictureNameRefListRuntimeSelect(
    input?: MakePictureNameRefListRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Transform from Doubles (Fixed XYZ) {/* #make-a-transform-from-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz)

```ts
export interface MakeTransformFromDoublesFixedXyzInput {
  readonly x?: number;
  readonly y?: number;
  readonly z?: number;
  readonly rx?: number;
  readonly ry?: number;
  readonly rz?: number;
}

// Member of BriosaClient
interface BriosaClient {
  makeTransformFromDoublesFixedXyz(
    input?: MakeTransformFromDoublesFixedXyzInput,
    callOptions?: BriosaCallOptions,
  ): Promise<Transform>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Transform from Doubles (Euler Parameters) {/* #make-a-transform-from-doubles-euler-parameters */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters)

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

// Member of BriosaClient
interface BriosaClient {
  makeTransformFromDoublesEulerParameters(
    input?: MakeTransformFromDoublesEulerParametersInput,
    callOptions?: BriosaCallOptions,
  ): Promise<Transform>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Transform of Object (Fixed XYZ) {/* #get-working-transform-of-object-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz)

```ts
// Member of BriosaClient
interface BriosaClient {
  getWorkingTransformOfObjectFixedXyz(
    objectName: CollectionObjectName,
    callOptions?: BriosaCallOptions,
  ): Promise<Transform>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Invert Transform {/* #invert-transform */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#invert-transform) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#invert-transform)

```ts
// Member of BriosaClient
interface BriosaClient {
  invertTransform(
    transform: Transform,
    callOptions?: BriosaCallOptions,
  ): Promise<Transform>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Fixed XYZ) {/* #decompose-transform-into-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeTransformIntoDoublesFixedXyz(
    inputTransform: Transform,
    callOptions?: BriosaCallOptions,
  ): Promise<FixedXyzTransformComponents>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Vectors (Fixed XYZ) {/* #decompose-transform-into-vectors-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeTransformIntoVectorsFixedXyz(
    inputTransform: Transform,
    callOptions?: BriosaCallOptions,
  ): Promise<FixedXyzTransformVectors>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Vectors (Origin and Axes) {/* #decompose-transform-into-vectors-origin-and-axes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeTransformIntoVectorsOriginAndAxes(
    transform: Transform,
    callOptions?: BriosaCallOptions,
  ): Promise<TransformAxes>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose World Transform Operator into Doubles (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-doubles-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeWorldTransformOperatorIntoDoublesFixedXyzInWorld(
    inputWorldTransformOperator: WorldTransform,
    callOptions?: BriosaCallOptions,
  ): Promise<WorldFixedXyzTransformComponents>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler XYZ) {/* #decompose-transform-into-doubles-euler-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeTransformIntoDoublesEulerXyz(
    inputTransform: Transform,
    callOptions?: BriosaCallOptions,
  ): Promise<EulerXyzTransformComponents>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZYX) {/* #decompose-transform-into-doubles-euler-zyx */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeTransformIntoDoublesEulerZyx(
    inputTransform: Transform,
    callOptions?: BriosaCallOptions,
  ): Promise<EulerZyxTransformComponents>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZYZ) {/* #decompose-transform-into-doubles-euler-zyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeTransformIntoDoublesEulerZyz(
    inputTransform: Transform,
    callOptions?: BriosaCallOptions,
  ): Promise<EulerZyzTransformComponents>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZXZ) {/* #decompose-transform-into-doubles-euler-zxz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeTransformIntoDoublesEulerZxz(
    inputTransform: Transform,
    callOptions?: BriosaCallOptions,
  ): Promise<EulerZxzTransformComponents>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose World Transform Operator into Vectors (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-vectors-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world)

```ts
// Member of BriosaClient
interface BriosaClient {
  decomposeWorldTransformOperatorIntoVectorsFixedXyzInWorld(
    inputWorldTransformOperator: WorldTransform,
    callOptions?: BriosaCallOptions,
  ): Promise<WorldFixedXyzTransformVectors>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Values {/* #shared-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2026.1.0529.7)
