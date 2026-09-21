---
title: Utility Operations
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Utility Operations

[SA 2026.1.0529.7](/api/javascript/utility-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/utility-operations)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Close All Watch Windows {/* #close-all-watch-windows */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#close-all-watch-windows) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#close-all-watch-windows)

```ts
export declare function closeAllWatchWindows(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Folder {/* #delete-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-folder)

```ts
export interface DeleteFolderInput {
  readonly folderPath?: string;
}

export declare function deleteFolder(
  briosa: BriosaClient,
  input: DeleteFolderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Items {/* #delete-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-items)

```ts
export interface DeleteItemsInput {
  readonly itemList: Iterable<CollectionItemName>;
}

export declare function deleteItems(
  briosa: BriosaClient,
  input: DeleteItemsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Objects {/* #delete-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-objects)

```ts
export interface DeleteObjectsInput {
  readonly objectNames: Iterable<CollectionObjectName>;
}

export declare function deleteObjects(
  briosa: BriosaClient,
  input: DeleteObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Language {/* #get-active-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-language) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-active-language)

```ts
export declare function getActiveLanguage(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<GetActiveLanguageResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Units {/* #get-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-units) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-active-units)

```ts
export declare function getActiveUnits(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<ActiveUnits>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Angular Representation {/* #get-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-angular-representation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-angular-representation)

```ts
export declare function getAngularRepresentation(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Notes {/* #get-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-collection-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-collection-notes)

```ts
export interface GetCollectionNotesInput {
  readonly collection: CollectionName;
}

export declare function getCollectionNotes(
  briosa: BriosaClient,
  input: GetCollectionNotesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folder Collections {/* #get-folder-collections */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-collections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folder-collections)

```ts
export interface GetFolderCollectionsInput {
  readonly folderPath?: string;
}

export declare function getFolderCollections(
  briosa: BriosaClient,
  input: GetFolderCollectionsInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folder Notes {/* #get-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folder-notes)

```ts
export interface GetFolderNotesInput {
  readonly folderPath?: string;
}

export declare function getFolderNotes(
  briosa: BriosaClient,
  input: GetFolderNotesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folders by Wildcard {/* #get-folders-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folders-by-wildcard)

```ts
export interface GetFoldersByWildcardInput {
  readonly searchString?: string;
  readonly caseSensitiveSearch?: boolean;
}

export declare function getFoldersByWildcard(
  briosa: BriosaClient,
  input: GetFoldersByWildcardInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Object Notes {/* #get-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-object-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-object-notes)

```ts
export interface GetObjectNotesInput {
  readonly object: CollectionObjectName;
}

export declare function getObjectNotes(
  briosa: BriosaClient,
  input: GetObjectNotesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value Double {/* #get-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-double)

```ts
export interface GetOpcDaTagValueDoubleInput {
  readonly opcServerDaTagName?: string;
}

export declare function getOpcDaTagValueDouble(
  briosa: BriosaClient,
  input: GetOpcDaTagValueDoubleInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value Integer {/* #get-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-integer)

```ts
export interface GetOpcDaTagValueIntegerInput {
  readonly opcServerDaTagName?: string;
}

export declare function getOpcDaTagValueInteger(
  briosa: BriosaClient,
  input: GetOpcDaTagValueIntegerInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value String {/* #get-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-string)

```ts
export interface GetOpcDaTagValueStringInput {
  readonly opcServerDaTagName?: string;
}

export declare function getOpcDaTagValueString(
  briosa: BriosaClient,
  input: GetOpcDaTagValueStringInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Notes {/* #get-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-point-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-point-notes)

```ts
export interface GetPointNotesInput {
  readonly point: PointName;
}

export declare function getPointNotes(
  briosa: BriosaClient,
  input: GetPointNotesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Screen Resolution {/* #get-screen-resolution */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-screen-resolution) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-screen-resolution)

```ts
export interface GetScreenResolutionInput {
  readonly display1Primary?: number;
}

export declare function getScreenResolution(
  briosa: BriosaClient,
  input: GetScreenResolutionInput,
  options?: BriosaCallOptions,
): Promise<GetScreenResolutionResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Frame Properties {/* #get-working-frame-properties */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-working-frame-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-working-frame-properties)

```ts
export declare function getWorkingFrameProperties(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<WorkingFrameProperties>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Increment Point Name {/* #increment-point-name */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#increment-point-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#increment-point-name)

```ts
export interface IncrementPointNameInput {
  readonly basePointName: PointName;
  readonly increment?: number;
}

export declare function incrementPointName(
  briosa: BriosaClient,
  input: IncrementPointNameInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock Imported Items {/* #lock-imported-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lock-imported-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lock-imported-items)

```ts
export interface LockImportedItemsInput {
  readonly lockItems?: boolean;
}

export declare function lockImportedItems(
  briosa: BriosaClient,
  input: LockImportedItemsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock/Unlock Selected Items {/* #lockunlock-selected-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lockunlock-selected-items)

```ts
export interface LockUnlockSelectedItemsInput {
  readonly itemList: Iterable<CollectionItemName>;
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly lockItems?: boolean;
}

export declare function lockUnlockSelectedItems(
  briosa: BriosaClient,
  input: LockUnlockSelectedItemsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock/Unlock Trapping Control {/* #lockunlock-trapping-control */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lockunlock-trapping-control)

```ts
export interface LockUnlockTrappingControlInput {
  readonly relationshipRefList: Iterable<CollectionItemName>;
  readonly featureCheckRefList: Iterable<CollectionItemName>;
  readonly datumRefList: Iterable<CollectionObjectName>;
  readonly lockOutTrapping?: boolean;
}

export declare function lockUnlockTrappingControl(
  briosa: BriosaClient,
  input: LockUnlockTrappingControlInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Collection to Folder {/* #move-collection-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-collection-to-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-collection-to-folder)

```ts
export interface MoveCollectionToFolderInput {
  readonly collection: CollectionName;
  readonly folderPath?: string;
}

export declare function moveCollectionToFolder(
  briosa: BriosaClient,
  input: MoveCollectionToFolderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Folder to Folder {/* #move-folder-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-folder-to-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-folder-to-folder)

```ts
export interface MoveFolderToFolderInput {
  readonly sourceFolderPath?: string;
  readonly destinationFolderPath?: string;
}

export declare function moveFolderToFolder(
  briosa: BriosaClient,
  input: MoveFolderToFolderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Instruments Drag Graphically {/* #move-instruments-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-instruments-drag-graphically)

```ts
export interface MoveInstrumentsDragGraphicallyInput {
  readonly instruments: Iterable<CollectionInstrumentId>;
}

export declare function moveInstrumentsDragGraphically(
  briosa: BriosaClient,
  input: MoveInstrumentsDragGraphicallyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects Drag Graphically {/* #move-objects-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-objects-drag-graphically)

```ts
export interface MoveObjectsDragGraphicallyInput {
  readonly objects: Iterable<CollectionObjectName>;
}

export declare function moveObjectsDragGraphically(
  briosa: BriosaClient,
  input: MoveObjectsDragGraphicallyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scale Objects {/* #scale-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#scale-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#scale-objects)

```ts
export interface ScaleObjectsInput {
  readonly objects: Iterable<CollectionObjectName>;
  readonly scaleFactor?: number;
}

export declare function scaleObjects(
  briosa: BriosaClient,
  input: ScaleObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Custom Language {/* #set-active-custom-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-custom-language) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-active-custom-language)

```ts
export interface SetActiveCustomLanguageInput {
  readonly languageFileName: FileReference;
  readonly font?: Font;
}

export declare function setActiveCustomLanguage(
  briosa: BriosaClient,
  input: SetActiveCustomLanguageInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Units {/* #set-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-units) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-active-units)

```ts
export interface SetActiveUnitsInput {
  readonly length?: DistanceUnits;
  readonly displayInchFractions?: boolean;
  readonly inchFractionDenominator?: number;
  readonly simplifyInchFraction?: boolean;
  readonly temperature?: TemperatureUnits;
  readonly angular?: AngularUnits;
}

export declare function setActiveUnits(
  briosa: BriosaClient,
  input: SetActiveUnitsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Angular Representation {/* #set-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-angular-representation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-angular-representation)

```ts
export interface SetAngularRepresentationInput {
  readonly value0360False180?: boolean;
}

export declare function setAngularRepresentation(
  briosa: BriosaClient,
  input: SetAngularRepresentationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Auto Event Creation {/* #set-auto-event-creation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-auto-event-creation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-auto-event-creation)

```ts
export interface SetAutoEventCreationInput {
  readonly active?: boolean;
}

export declare function setAutoEventCreation(
  briosa: BriosaClient,
  input: SetAutoEventCreationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Automatic Backup State {/* #set-automatic-backup-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-automatic-backup-state)

```ts
export interface SetAutomaticBackupStateInput {
  readonly autoJobFileRestorePointsActive?: boolean;
  readonly autoMeasurementsBackupActive?: boolean;
}

export declare function setAutomaticBackupState(
  briosa: BriosaClient,
  input: SetAutomaticBackupStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Automatic Relationship Construction State {/* #set-automatic-relationship-construction-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-automatic-relationship-construction-state)

```ts
export interface SetAutomaticRelationshipConstructionStateInput {
  readonly active?: boolean;
}

export declare function setAutomaticRelationshipConstructionState(
  briosa: BriosaClient,
  input: SetAutomaticRelationshipConstructionStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Notes {/* #set-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-collection-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-collection-notes)

```ts
export interface SetCollectionNotesInput {
  readonly collection: CollectionName;
  readonly notes: Iterable<string>;
  readonly appendFalseOverwrite?: boolean;
}

export declare function setCollectionNotes(
  briosa: BriosaClient,
  input: SetCollectionNotesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Decimal Digits for Display {/* #set-decimal-digits-for-display */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-decimal-digits-for-display)

```ts
export interface SetDecimalDigitsForDisplayInput {
  readonly length?: number;
  readonly angle?: number;
  readonly scale?: number;
  readonly unitVector?: number;
  readonly weight?: number;
}

export declare function setDecimalDigitsForDisplay(
  briosa: BriosaClient,
  input: SetDecimalDigitsForDisplayInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Folder Notes {/* #set-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-folder-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-folder-notes)

```ts
export interface SetFolderNotesInput {
  readonly folderPath?: string;
  readonly notes: Iterable<string>;
  readonly appendFalseOverwrite?: boolean;
}

export declare function setFolderNotes(
  briosa: BriosaClient,
  input: SetFolderNotesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Interaction Mode {/* #set-interaction-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-interaction-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-interaction-mode)

```ts
export interface SetInteractionModeInput {
  readonly saInteractionMode: SaInteractionMode;
  readonly measurementPlanInteractionMode: MpInteractionMode;
  readonly measurementPlanDialogInteractionMode: MpDialogInteractionMode;
}

export declare function setInteractionMode(
  briosa: BriosaClient,
  input: SetInteractionModeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Logging State {/* #set-logging-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-logging-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-logging-state)

```ts
export interface SetLoggingStateInput {
  readonly active?: boolean;
}

export declare function setLoggingState(
  briosa: BriosaClient,
  input: SetLoggingStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Notification Cancel Override {/* #set-notification-cancel-override */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-notification-cancel-override)

```ts
export interface SetNotificationCancelOverrideInput {
  readonly prohibitCancel?: boolean;
}

export declare function setNotificationCancelOverride(
  briosa: BriosaClient,
  input: SetNotificationCancelOverrideInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object Notes {/* #set-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-object-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-object-notes)

```ts
export interface SetObjectNotesInput {
  readonly object: CollectionObjectName;
  readonly notes: Iterable<string>;
  readonly appendFalseOverwrite?: boolean;
}

export declare function setObjectNotes(
  briosa: BriosaClient,
  input: SetObjectNotesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value Double {/* #set-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-double)

```ts
export interface SetOpcDaTagValueDoubleInput {
  readonly opcServerDaTagName?: string;
  readonly value?: number;
}

export declare function setOpcDaTagValueDouble(
  briosa: BriosaClient,
  input: SetOpcDaTagValueDoubleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value Integer {/* #set-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-integer)

```ts
export interface SetOpcDaTagValueIntegerInput {
  readonly opcServerDaTagName?: string;
  readonly value?: number;
}

export declare function setOpcDaTagValueInteger(
  briosa: BriosaClient,
  input: SetOpcDaTagValueIntegerInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value String {/* #set-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-string)

```ts
export interface SetOpcDaTagValueStringInput {
  readonly opcServerDaTagName?: string;
  readonly value?: string;
}

export declare function setOpcDaTagValueString(
  briosa: BriosaClient,
  input: SetOpcDaTagValueStringInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Notes {/* #set-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-point-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-point-notes)

```ts
export interface SetPointNotesInput {
  readonly point: PointName;
  readonly notes: Iterable<string>;
  readonly appendFalseOverwrite?: boolean;
}

export declare function setPointNotes(
  briosa: BriosaClient,
  input: SetPointNotesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set User Interface Profile {/* #set-user-interface-profile */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-user-interface-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-user-interface-profile)

```ts
export interface SetUserInterfaceProfileInput {
  readonly profileName?: string;
  readonly profileFileNameOptional: FileReference;
}

export declare function setUserInterfaceProfile(
  briosa: BriosaClient,
  input: SetUserInterfaceProfileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set View Idle Update Frequency {/* #set-view-idle-update-frequency */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-view-idle-update-frequency)

```ts
export interface SetViewIdleUpdateFrequencyInput {
  readonly idleCount?: number;
}

export declare function setViewIdleUpdateFrequency(
  briosa: BriosaClient,
  input: SetViewIdleUpdateFrequencyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set WildCard Asterisk Mode {/* #set-wildcard-asterisk-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-wildcard-asterisk-mode)

```ts
export interface SetWildCardAsteriskModeInput {
  readonly autoWrapSearchString?: boolean;
}

export declare function setWildCardAsteriskMode(
  briosa: BriosaClient,
  input: SetWildCardAsteriskModeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Frame {/* #set-working-frame */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-working-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-working-frame)

```ts
export interface SetWorkingFrameInput {
  readonly newWorkingFrameName: CollectionObjectName;
}

export declare function setWorkingFrame(
  briosa: BriosaClient,
  input: SetWorkingFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Status Dialog {/* #status-dialog */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#status-dialog) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#status-dialog)

```ts
export interface StatusDialogInput {
  readonly dialogTitle?: string;
  readonly textMessage?: string;
  readonly currentPosition?: number;
  readonly upperLimit?: number;
  readonly suppressTimeRemaining?: boolean;
  readonly closeDialog?: boolean;
}

export declare function statusDialog(
  briosa: BriosaClient,
  input: StatusDialogInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Trim Log File {/* #trim-log-file */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#trim-log-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#trim-log-file)

```ts
export interface TrimLogFileInput {
  readonly numberOfEntriesToKeep?: number;
}

export declare function trimLogFile(
  briosa: BriosaClient,
  input: TrimLogFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Write to Log {/* #write-to-log */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#write-to-log) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#write-to-log)

```ts
export interface WriteToLogInput {
  readonly logEntry?: string;
}

export declare function writeToLog(
  briosa: BriosaClient,
  input: WriteToLogInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
