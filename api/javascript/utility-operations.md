---
title: Utility Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Utility Operations MP commands.
toc_max_heading_level: 2
---

# Utility Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Close All Watch Windows

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Close All Watch Windows](/mp-command-catalog/commands/utility-operations#close-all-watch-windows) · [gRPC contract](/api/grpc/utility-operations#close-all-watch-windows)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function closeAllWatchWindows(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await closeAllWatchWindows(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Folder

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Folder](/mp-command-catalog/commands/utility-operations#delete-folder) · [gRPC contract](/api/grpc/utility-operations#delete-folder)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folderPath` | `string` | `Folder Path` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteFolderInput {
  readonly folderPath?: string;
}

function deleteFolder(
  briosa: BriosaClient,
  input?: DeleteFolderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteFolder(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Items

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Items](/mp-command-catalog/commands/utility-operations#delete-items) · [gRPC contract](/api/grpc/utility-operations#delete-items)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `itemList` | `Iterable<CollectionObjectName>` | `Item List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteItemsInput {
  readonly itemList: Iterable<CollectionObjectName>;
}

function deleteItems(
  briosa: BriosaClient,
  input: DeleteItemsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteItems(briosa, { itemList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Objects](/mp-command-catalog/commands/utility-operations#delete-objects) · [gRPC contract](/api/grpc/utility-operations#delete-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectNames` | `Iterable<CollectionObjectName>` | `Object Names` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteObjectsInput {
  readonly objectNames: Iterable<CollectionObjectName>;
}

function deleteObjects(
  briosa: BriosaClient,
  input: DeleteObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteObjects(briosa, { objectNames: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Active Language

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Active Language](/mp-command-catalog/commands/utility-operations#get-active-language) · [gRPC contract](/api/grpc/utility-operations#get-active-language)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `languageFileName` | `FileReference` | `Language File Name` |
| `customLanguage` | `boolean` | `Custom Language?` |

```ts
export interface GetActiveLanguageResult {
  readonly languageFileName: FileReference;
  readonly customLanguage: boolean;
}

function getActiveLanguage(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<GetActiveLanguageResult>;
```

```ts
await getActiveLanguage(briosa);
```

Returns the 2 MP outputs in the named `GetActiveLanguageResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Active Units

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Active Units](/mp-command-catalog/commands/utility-operations#get-active-units) · [gRPC contract](/api/grpc/utility-operations#get-active-units)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `length` | `string` | `Length` |
| `angular` | `string` | `Angular` |
| `temperature` | `string` | `Temperature` |

```ts
export interface ActiveUnits {
  readonly length: string;
  readonly angular: string;
  readonly temperature: string;
}

function getActiveUnits(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<ActiveUnits>;
```

```ts
await getActiveUnits(briosa);
```

Returns the 3 MP outputs in the named `ActiveUnits` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Angular Representation

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Angular Representation](/mp-command-catalog/commands/utility-operations#get-angular-representation) · [gRPC contract](/api/grpc/utility-operations#get-angular-representation)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value0360False180` | `boolean` | `0-360, (FALSE = +/-180)` |

```ts
function getAngularRepresentation(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

```ts
await getAngularRepresentation(briosa);
```

Returns the MP output `0-360, (FALSE = +/-180)` directly as `boolean`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Collection Notes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Collection Notes](/mp-command-catalog/commands/utility-operations#get-collection-notes) · [gRPC contract](/api/grpc/utility-operations#get-collection-notes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `notes` | `readonly string[]` | `Notes` |

```ts
export interface GetCollectionNotesInput {
  readonly collection: CollectionName;
}

function getCollectionNotes(
  briosa: BriosaClient,
  input: GetCollectionNotesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getCollectionNotes(briosa, { collection: ... });
```

Returns the MP output `Notes` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Folder Collections

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Folder Collections](/mp-command-catalog/commands/utility-operations#get-folder-collections) · [gRPC contract](/api/grpc/utility-operations#get-folder-collections)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folderPath` | `string` | `Folder Path` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `collectionList` | `readonly string[]` | `Collection List` |

```ts
export interface GetFolderCollectionsInput {
  readonly folderPath?: string;
}

function getFolderCollections(
  briosa: BriosaClient,
  input?: GetFolderCollectionsInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getFolderCollections(briosa);
```

Returns the MP output `Collection List` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Folder Notes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Folder Notes](/mp-command-catalog/commands/utility-operations#get-folder-notes) · [gRPC contract](/api/grpc/utility-operations#get-folder-notes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folderPath` | `string` | `Folder Path` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `notes` | `readonly string[]` | `Notes` |

```ts
export interface GetFolderNotesInput {
  readonly folderPath?: string;
}

function getFolderNotes(
  briosa: BriosaClient,
  input?: GetFolderNotesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getFolderNotes(briosa);
```

Returns the MP output `Notes` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Folders by Wildcard

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Folders by Wildcard](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard) · [gRPC contract](/api/grpc/utility-operations#get-folders-by-wildcard)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `searchString` | `string` | `Search String` | Empty |
| `caseSensitiveSearch` | `boolean` | `Case Sensitive Search` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `folderList` | `readonly string[]` | `Folder List` |

```ts
export interface GetFoldersByWildcardInput {
  readonly searchString?: string;
  readonly caseSensitiveSearch?: boolean;
}

function getFoldersByWildcard(
  briosa: BriosaClient,
  input?: GetFoldersByWildcardInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getFoldersByWildcard(briosa);
```

Returns the MP output `Folder List` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Object Notes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Object Notes](/mp-command-catalog/commands/utility-operations#get-object-notes) · [gRPC contract](/api/grpc/utility-operations#get-object-notes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object` | `CollectionObjectName` | `Object` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `notes` | `readonly string[]` | `Notes` |

```ts
export interface GetObjectNotesInput {
  readonly object: CollectionObjectName;
}

function getObjectNotes(
  briosa: BriosaClient,
  input: GetObjectNotesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getObjectNotes(briosa, { object: ... });
```

Returns the MP output `Notes` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get OPC DA Tag Value Double

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get OPC DA Tag Value Double](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-double)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `number` | `Value` |

```ts
export interface GetOpcDaTagValueDoubleInput {
  readonly opcServerDaTagName?: string;
}

function getOpcDaTagValueDouble(
  briosa: BriosaClient,
  input?: GetOpcDaTagValueDoubleInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getOpcDaTagValueDouble(briosa);
```

Returns the MP output `Value` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get OPC DA Tag Value Integer

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get OPC DA Tag Value Integer](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-integer)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `number` | `Value` |

```ts
export interface GetOpcDaTagValueIntegerInput {
  readonly opcServerDaTagName?: string;
}

function getOpcDaTagValueInteger(
  briosa: BriosaClient,
  input?: GetOpcDaTagValueIntegerInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getOpcDaTagValueInteger(briosa);
```

Returns the MP output `Value` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get OPC DA Tag Value String

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get OPC DA Tag Value String](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-string)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `string` | `Value` |

```ts
export interface GetOpcDaTagValueStringInput {
  readonly opcServerDaTagName?: string;
}

function getOpcDaTagValueString(
  briosa: BriosaClient,
  input?: GetOpcDaTagValueStringInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await getOpcDaTagValueString(briosa);
```

Returns the MP output `Value` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Point Notes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Point Notes](/mp-command-catalog/commands/utility-operations#get-point-notes) · [gRPC contract](/api/grpc/utility-operations#get-point-notes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `notes` | `readonly string[]` | `Notes` |

```ts
export interface GetPointNotesInput {
  readonly point: PointName;
}

function getPointNotes(
  briosa: BriosaClient,
  input: GetPointNotesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getPointNotes(briosa, { point: ... });
```

Returns the MP output `Notes` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Screen Resolution

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Screen Resolution](/mp-command-catalog/commands/utility-operations#get-screen-resolution) · [gRPC contract](/api/grpc/utility-operations#get-screen-resolution)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `display1Primary` | `number` | `Display (-1 = Primary)` | -1 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `integerWindowTopLeftXPosition` | `number` | `Integer Window Top Left X Position` |
| `integerWindowTopLeftYPosition` | `number` | `Integer Window Top Left Y Position` |
| `integerWidth` | `number` | `Integer Width` |
| `integerHeight` | `number` | `Integer Height` |
| `viewWidth` | `number` | `View Width` |
| `viewHeight` | `number` | `View Height` |

```ts
export interface GetScreenResolutionResult {
  readonly integerWindowTopLeftXPosition: number;
  readonly integerWindowTopLeftYPosition: number;
  readonly integerWidth: number;
  readonly integerHeight: number;
  readonly viewWidth: number;
  readonly viewHeight: number;
}

export interface GetScreenResolutionInput {
  readonly display1Primary?: number;
}

function getScreenResolution(
  briosa: BriosaClient,
  input?: GetScreenResolutionInput,
  options?: BriosaCallOptions,
): Promise<GetScreenResolutionResult>;
```

```ts
await getScreenResolution(briosa);
```

Returns the 6 MP outputs in the named `GetScreenResolutionResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Working Frame Properties

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Working Frame Properties](/mp-command-catalog/commands/utility-operations#get-working-frame-properties) · [gRPC contract](/api/grpc/utility-operations#get-working-frame-properties)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `frameName` | `string` | `Frame Name` |
| `collectionName` | `string` | `Collection Name` |
| `workingFrame` | `CollectionObjectName` | `Working Frame` |

```ts
export interface WorkingFrameProperties {
  readonly frameName: string;
  readonly collectionName: string;
  readonly workingFrame: CollectionObjectName;
}

function getWorkingFrameProperties(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<WorkingFrameProperties>;
```

```ts
await getWorkingFrameProperties(briosa);
```

Returns the 3 MP outputs in the named `WorkingFrameProperties` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Increment Point Name

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Increment Point Name](/mp-command-catalog/commands/utility-operations#increment-point-name) · [gRPC contract](/api/grpc/utility-operations#increment-point-name)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `basePointName` | `PointName` | `'Base' Point Name` | Required |
| `increment` | `number` | `Increment` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `resultantPointName` | `PointName` | `Resultant Point Name` |

```ts
export interface IncrementPointNameInput {
  readonly basePointName: PointName;
  readonly increment?: number;
}

function incrementPointName(
  briosa: BriosaClient,
  input: IncrementPointNameInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

```ts
await incrementPointName(briosa, { basePointName: ... });
```

Returns the MP output `Resultant Point Name` directly as `PointName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Lock Imported Items

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Lock Imported Items](/mp-command-catalog/commands/utility-operations#lock-imported-items) · [gRPC contract](/api/grpc/utility-operations#lock-imported-items)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lockItems` | `boolean` | `Lock Items?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface LockImportedItemsInput {
  readonly lockItems?: boolean;
}

function lockImportedItems(
  briosa: BriosaClient,
  input?: LockImportedItemsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await lockImportedItems(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Lock/Unlock Selected Items

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Lock/Unlock Selected Items](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items) · [gRPC contract](/api/grpc/utility-operations#lockunlock-selected-items)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `itemList` | `Iterable<CollectionObjectName>` | `Item List` | Required |
| `instruments` | `Iterable<CollectionInstrumentId>` | `Instruments` | Required |
| `lockItems` | `boolean` | `Lock Items?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface LockUnlockSelectedItemsInput {
  readonly itemList: Iterable<CollectionObjectName>;
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly lockItems?: boolean;
}

function lockUnlockSelectedItems(
  briosa: BriosaClient,
  input: LockUnlockSelectedItemsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await lockUnlockSelectedItems(briosa, { itemList: ..., instruments: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Lock/Unlock Trapping Control

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Lock/Unlock Trapping Control](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control) · [gRPC contract](/api/grpc/utility-operations#lockunlock-trapping-control)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipRefList` | `Iterable<CollectionObjectName>` | `Relationship Ref List` | Required |
| `featureCheckRefList` | `Iterable<CollectionObjectName>` | `Feature Check Ref List` | Required |
| `datumRefList` | `Iterable<CollectionObjectName>` | `Datum Ref List` | Required |
| `lockOutTrapping` | `boolean` | `Lock Out Trapping?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface LockUnlockTrappingControlInput {
  readonly relationshipRefList: Iterable<CollectionObjectName>;
  readonly featureCheckRefList: Iterable<CollectionObjectName>;
  readonly datumRefList: Iterable<CollectionObjectName>;
  readonly lockOutTrapping?: boolean;
}

function lockUnlockTrappingControl(
  briosa: BriosaClient,
  input: LockUnlockTrappingControlInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await lockUnlockTrappingControl(briosa, { relationshipRefList: ..., featureCheckRefList: ..., datumRefList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Move Collection to Folder

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Move Collection to Folder](/mp-command-catalog/commands/utility-operations#move-collection-to-folder) · [gRPC contract](/api/grpc/utility-operations#move-collection-to-folder)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |
| `folderPath` | `string` | `Folder Path` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MoveCollectionToFolderInput {
  readonly collection: CollectionName;
  readonly folderPath?: string;
}

function moveCollectionToFolder(
  briosa: BriosaClient,
  input: MoveCollectionToFolderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await moveCollectionToFolder(briosa, { collection: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Move Folder to Folder

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Move Folder to Folder](/mp-command-catalog/commands/utility-operations#move-folder-to-folder) · [gRPC contract](/api/grpc/utility-operations#move-folder-to-folder)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceFolderPath` | `string` | `Source Folder Path` | Empty |
| `destinationFolderPath` | `string` | `Destination Folder Path` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MoveFolderToFolderInput {
  readonly sourceFolderPath?: string;
  readonly destinationFolderPath?: string;
}

function moveFolderToFolder(
  briosa: BriosaClient,
  input?: MoveFolderToFolderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await moveFolderToFolder(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Move Instruments Drag Graphically

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Move Instruments Drag Graphically](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically) · [gRPC contract](/api/grpc/utility-operations#move-instruments-drag-graphically)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instruments` | `Iterable<CollectionInstrumentId>` | `Instruments` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MoveInstrumentsDragGraphicallyInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
}

function moveInstrumentsDragGraphically(
  briosa: BriosaClient,
  input: MoveInstrumentsDragGraphicallyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await moveInstrumentsDragGraphically(briosa, { instruments: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Move Objects Drag Graphically

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Move Objects Drag Graphically](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically) · [gRPC contract](/api/grpc/utility-operations#move-objects-drag-graphically)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `Iterable<CollectionObjectName>` | `Objects` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MoveObjectsDragGraphicallyInput {
  readonly objects: Iterable<CollectionObjectName>;
}

function moveObjectsDragGraphically(
  briosa: BriosaClient,
  input: MoveObjectsDragGraphicallyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await moveObjectsDragGraphically(briosa, { objects: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Scale Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Scale Objects](/mp-command-catalog/commands/utility-operations#scale-objects) · [gRPC contract](/api/grpc/utility-operations#scale-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `Iterable<CollectionObjectName>` | `Objects` | Required |
| `scaleFactor` | `number` | `Scale Factor` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ScaleObjectsInput {
  readonly objects: Iterable<CollectionObjectName>;
  readonly scaleFactor?: number;
}

function scaleObjects(
  briosa: BriosaClient,
  input: ScaleObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await scaleObjects(briosa, { objects: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Active Custom Language

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Active Custom Language](/mp-command-catalog/commands/utility-operations#set-active-custom-language) · [gRPC contract](/api/grpc/utility-operations#set-active-custom-language)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `languageFileName` | `FileReference` | `Language File Name` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetActiveCustomLanguageInput {
  readonly languageFileName: FileReference;
  readonly font?: Font;
}

function setActiveCustomLanguage(
  briosa: BriosaClient,
  input: SetActiveCustomLanguageInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setActiveCustomLanguage(briosa, { languageFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Active Units

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Active Units](/mp-command-catalog/commands/utility-operations#set-active-units) · [gRPC contract](/api/grpc/utility-operations#set-active-units)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `length` | `DistanceUnits` | `Length` | Inches |
| `displayInchFractions` | `boolean` | `Display Inch Fractions?` | false |
| `inchFractionDenominator` | `number` | `Inch Fraction Denominator?` | 16.000000 |
| `simplifyInchFraction` | `boolean` | `Simplify Inch Fraction?` | true |
| `temperature` | `TemperatureUnits` | `Temperature` | Fahrenheit |
| `angular` | `AngularUnits` | `Angular` | Degrees |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetActiveUnitsInput {
  readonly length?: DistanceUnits;
  readonly displayInchFractions?: boolean;
  readonly inchFractionDenominator?: number;
  readonly simplifyInchFraction?: boolean;
  readonly temperature?: TemperatureUnits;
  readonly angular?: AngularUnits;
}

function setActiveUnits(
  briosa: BriosaClient,
  input?: SetActiveUnitsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setActiveUnits(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Angular Representation

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Angular Representation](/mp-command-catalog/commands/utility-operations#set-angular-representation) · [gRPC contract](/api/grpc/utility-operations#set-angular-representation)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `value0360False180` | `boolean` | `0-360, (FALSE = +/-180)` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetAngularRepresentationInput {
  readonly value0360False180?: boolean;
}

function setAngularRepresentation(
  briosa: BriosaClient,
  input?: SetAngularRepresentationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setAngularRepresentation(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Auto Event Creation

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Auto Event Creation](/mp-command-catalog/commands/utility-operations#set-auto-event-creation) · [gRPC contract](/api/grpc/utility-operations#set-auto-event-creation)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `boolean` | `Active?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetAutoEventCreationInput {
  readonly active?: boolean;
}

function setAutoEventCreation(
  briosa: BriosaClient,
  input?: SetAutoEventCreationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setAutoEventCreation(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Automatic Backup State

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Automatic Backup State](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state) · [gRPC contract](/api/grpc/utility-operations#set-automatic-backup-state)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `autoJobFileRestorePointsActive` | `boolean` | `Auto Job File Restore Points Active?` | true |
| `autoMeasurementsBackupActive` | `boolean` | `Auto Measurements Backup Active?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetAutomaticBackupStateInput {
  readonly autoJobFileRestorePointsActive?: boolean;
  readonly autoMeasurementsBackupActive?: boolean;
}

function setAutomaticBackupState(
  briosa: BriosaClient,
  input?: SetAutomaticBackupStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setAutomaticBackupState(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Automatic Relationship Construction State

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Automatic Relationship Construction State](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state) · [gRPC contract](/api/grpc/utility-operations#set-automatic-relationship-construction-state)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `boolean` | `Active?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetAutomaticRelationshipConstructionStateInput {
  readonly active?: boolean;
}

function setAutomaticRelationshipConstructionState(
  briosa: BriosaClient,
  input?: SetAutomaticRelationshipConstructionStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setAutomaticRelationshipConstructionState(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Collection Notes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Collection Notes](/mp-command-catalog/commands/utility-operations#set-collection-notes) · [gRPC contract](/api/grpc/utility-operations#set-collection-notes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |
| `notes` | `Iterable<string>` | `Notes` | Required |
| `appendFalseOverwrite` | `boolean` | `Append? (FALSE = Overwrite)` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCollectionNotesInput {
  readonly collection: CollectionName;
  readonly notes: Iterable<string>;
  readonly appendFalseOverwrite?: boolean;
}

function setCollectionNotes(
  briosa: BriosaClient,
  input: SetCollectionNotesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCollectionNotes(briosa, { collection: ..., notes: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Decimal Digits for Display

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Decimal Digits for Display](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display) · [gRPC contract](/api/grpc/utility-operations#set-decimal-digits-for-display)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `length` | `number` | `Length` | 4 |
| `angle` | `number` | `Angle` | 4 |
| `scale` | `number` | `Scale` | 6 |
| `unitVector` | `number` | `Unit Vector` | 6 |
| `weight` | `number` | `Weight` | 3 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetDecimalDigitsForDisplayInput {
  readonly length?: number;
  readonly angle?: number;
  readonly scale?: number;
  readonly unitVector?: number;
  readonly weight?: number;
}

function setDecimalDigitsForDisplay(
  briosa: BriosaClient,
  input?: SetDecimalDigitsForDisplayInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setDecimalDigitsForDisplay(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Folder Notes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Folder Notes](/mp-command-catalog/commands/utility-operations#set-folder-notes) · [gRPC contract](/api/grpc/utility-operations#set-folder-notes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folderPath` | `string` | `Folder Path` | Empty |
| `notes` | `Iterable<string>` | `Notes` | Required |
| `appendFalseOverwrite` | `boolean` | `Append? (FALSE = Overwrite)` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetFolderNotesInput {
  readonly folderPath?: string;
  readonly notes: Iterable<string>;
  readonly appendFalseOverwrite?: boolean;
}

function setFolderNotes(
  briosa: BriosaClient,
  input: SetFolderNotesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setFolderNotes(briosa, { notes: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Interaction Mode

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Interaction Mode](/mp-command-catalog/commands/utility-operations#set-interaction-mode) · [gRPC contract](/api/grpc/utility-operations#set-interaction-mode)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saInteractionMode` | `SaInteractionMode` | `SA Interaction Mode` | Required |
| `measurementPlanInteractionMode` | `MpInteractionMode` | `Measurement Plan Interaction Mode` | Required |
| `measurementPlanDialogInteractionMode` | `MpDialogInteractionMode` | `Measurement Plan Dialog Interaction Mode` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetInteractionModeInput {
  readonly saInteractionMode: SaInteractionMode;
  readonly measurementPlanInteractionMode: MpInteractionMode;
  readonly measurementPlanDialogInteractionMode: MpDialogInteractionMode;
}

function setInteractionMode(
  briosa: BriosaClient,
  input: SetInteractionModeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setInteractionMode(briosa, { saInteractionMode: ..., measurementPlanInteractionMode: ..., measurementPlanDialogInteractionMode: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Logging State

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Logging State](/mp-command-catalog/commands/utility-operations#set-logging-state) · [gRPC contract](/api/grpc/utility-operations#set-logging-state)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `boolean` | `Active?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetLoggingStateInput {
  readonly active?: boolean;
}

function setLoggingState(
  briosa: BriosaClient,
  input?: SetLoggingStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setLoggingState(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Notification Cancel Override

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Notification Cancel Override](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override) · [gRPC contract](/api/grpc/utility-operations#set-notification-cancel-override)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `prohibitCancel` | `boolean` | `Prohibit Cancel?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetNotificationCancelOverrideInput {
  readonly prohibitCancel?: boolean;
}

function setNotificationCancelOverride(
  briosa: BriosaClient,
  input?: SetNotificationCancelOverrideInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setNotificationCancelOverride(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Object Notes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Object Notes](/mp-command-catalog/commands/utility-operations#set-object-notes) · [gRPC contract](/api/grpc/utility-operations#set-object-notes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object` | `CollectionObjectName` | `Object` | Required |
| `notes` | `Iterable<string>` | `Notes` | Required |
| `appendFalseOverwrite` | `boolean` | `Append? (FALSE = Overwrite)` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetObjectNotesInput {
  readonly object: CollectionObjectName;
  readonly notes: Iterable<string>;
  readonly appendFalseOverwrite?: boolean;
}

function setObjectNotes(
  briosa: BriosaClient,
  input: SetObjectNotesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setObjectNotes(briosa, { object: ..., notes: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set OPC DA Tag Value Double

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set OPC DA Tag Value Double](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-double)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |
| `value` | `number` | `Value` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetOpcDaTagValueDoubleInput {
  readonly opcServerDaTagName?: string;
  readonly value?: number;
}

function setOpcDaTagValueDouble(
  briosa: BriosaClient,
  input?: SetOpcDaTagValueDoubleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setOpcDaTagValueDouble(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set OPC DA Tag Value Integer

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set OPC DA Tag Value Integer](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-integer)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |
| `value` | `number` | `Value` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetOpcDaTagValueIntegerInput {
  readonly opcServerDaTagName?: string;
  readonly value?: number;
}

function setOpcDaTagValueInteger(
  briosa: BriosaClient,
  input?: SetOpcDaTagValueIntegerInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setOpcDaTagValueInteger(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set OPC DA Tag Value String

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set OPC DA Tag Value String](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-string)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |
| `value` | `string` | `Value` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetOpcDaTagValueStringInput {
  readonly opcServerDaTagName?: string;
  readonly value?: string;
}

function setOpcDaTagValueString(
  briosa: BriosaClient,
  input?: SetOpcDaTagValueStringInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setOpcDaTagValueString(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Point Notes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Point Notes](/mp-command-catalog/commands/utility-operations#set-point-notes) · [gRPC contract](/api/grpc/utility-operations#set-point-notes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |
| `notes` | `Iterable<string>` | `Notes` | Required |
| `appendFalseOverwrite` | `boolean` | `Append? (FALSE = Overwrite)` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPointNotesInput {
  readonly point: PointName;
  readonly notes: Iterable<string>;
  readonly appendFalseOverwrite?: boolean;
}

function setPointNotes(
  briosa: BriosaClient,
  input: SetPointNotesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPointNotes(briosa, { point: ..., notes: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set User Interface Profile

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set User Interface Profile](/mp-command-catalog/commands/utility-operations#set-user-interface-profile) · [gRPC contract](/api/grpc/utility-operations#set-user-interface-profile)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `profileName` | `string` | `Profile Name` | Default |
| `profileFileNameOptional` | `FileReference` | `Profile File Name (optional)` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetUserInterfaceProfileInput {
  readonly profileName?: string;
  readonly profileFileNameOptional: FileReference;
}

function setUserInterfaceProfile(
  briosa: BriosaClient,
  input: SetUserInterfaceProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setUserInterfaceProfile(briosa, { profileFileNameOptional: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set View Idle Update Frequency

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set View Idle Update Frequency](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency) · [gRPC contract](/api/grpc/utility-operations#set-view-idle-update-frequency)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `idleCount` | `number` | `Idle Count` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetViewIdleUpdateFrequencyInput {
  readonly idleCount?: number;
}

function setViewIdleUpdateFrequency(
  briosa: BriosaClient,
  input?: SetViewIdleUpdateFrequencyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setViewIdleUpdateFrequency(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set WildCard Asterisk Mode

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set WildCard Asterisk Mode](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode) · [gRPC contract](/api/grpc/utility-operations#set-wildcard-asterisk-mode)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `autoWrapSearchString` | `boolean` | `Auto Wrap Search String?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetWildCardAsteriskModeInput {
  readonly autoWrapSearchString?: boolean;
}

function setWildCardAsteriskMode(
  briosa: BriosaClient,
  input?: SetWildCardAsteriskModeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setWildCardAsteriskMode(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Working Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Working Frame](/mp-command-catalog/commands/utility-operations#set-working-frame) · [gRPC contract](/api/grpc/utility-operations#set-working-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `newWorkingFrameName` | `CollectionObjectName` | `New Working Frame Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetWorkingFrameInput {
  readonly newWorkingFrameName: CollectionObjectName;
}

function setWorkingFrame(
  briosa: BriosaClient,
  input: SetWorkingFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setWorkingFrame(briosa, { newWorkingFrameName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Status Dialog

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Status Dialog](/mp-command-catalog/commands/utility-operations#status-dialog) · [gRPC contract](/api/grpc/utility-operations#status-dialog)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dialogTitle` | `string` | `Dialog Title` | Empty |
| `textMessage` | `string` | `Text Message` | Empty |
| `currentPosition` | `number` | `Current Position` | 0 |
| `upperLimit` | `number` | `Upper Limit` | 0 |
| `suppressTimeRemaining` | `boolean` | `Suppress Time Remaining?` | true |
| `closeDialog` | `boolean` | `Close Dialog?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface StatusDialogInput {
  readonly dialogTitle?: string;
  readonly textMessage?: string;
  readonly currentPosition?: number;
  readonly upperLimit?: number;
  readonly suppressTimeRemaining?: boolean;
  readonly closeDialog?: boolean;
}

function statusDialog(
  briosa: BriosaClient,
  input?: StatusDialogInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await statusDialog(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Trim Log File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Trim Log File](/mp-command-catalog/commands/utility-operations#trim-log-file) · [gRPC contract](/api/grpc/utility-operations#trim-log-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `numberOfEntriesToKeep` | `number` | `Number of Entries to Keep` | 10 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface TrimLogFileInput {
  readonly numberOfEntriesToKeep?: number;
}

function trimLogFile(
  briosa: BriosaClient,
  input?: TrimLogFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await trimLogFile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Write to Log

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Write to Log](/mp-command-catalog/commands/utility-operations#write-to-log) · [gRPC contract](/api/grpc/utility-operations#write-to-log)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `logEntry` | `string` | `Log Entry` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface WriteToLogInput {
  readonly logEntry?: string;
}

function writeToLog(
  briosa: BriosaClient,
  input?: WriteToLogInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await writeToLog(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
