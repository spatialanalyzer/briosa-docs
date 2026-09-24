---
title: Utility Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Utility Operations

[SA 2026.1.0529.7](/api/dotnet/utility-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/utility-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Close All Watch Windows {/* #close-all-watch-windows */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#close-all-watch-windows) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#close-all-watch-windows)

```csharp
public Task CloseAllWatchWindowsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Folder {/* #delete-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-folder)

```csharp
public Task DeleteFolderAsync(
        string folderPath = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Items {/* #delete-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-items)

```csharp
public Task DeleteItemsAsync(
        IEnumerable<CollectionItemName> itemList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Objects {/* #delete-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-objects)

```csharp
public Task DeleteObjectsAsync(
        IEnumerable<CollectionObjectName> objectNames,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Language {/* #get-active-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-language) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-active-language)

```csharp
public Task<GetActiveLanguageResult> GetActiveLanguageAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Units {/* #get-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-units) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-active-units)

```csharp
public Task<ActiveUnits> GetActiveUnitsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Angular Representation {/* #get-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-angular-representation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-angular-representation)

```csharp
public Task<bool> GetAngularRepresentationAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `Value0360` | False selects the +/-180 angular representation. |

## Get Collection Notes {/* #get-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-collection-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-collection-notes)

```csharp
public Task<string[]> GetCollectionNotesAsync(
        CollectionName collection,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folder Collections {/* #get-folder-collections */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-collections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folder-collections)

```csharp
public Task<string[]> GetFolderCollectionsAsync(
        string folderPath = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folder Notes {/* #get-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folder-notes)

```csharp
public Task<string[]> GetFolderNotesAsync(
        string folderPath = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folders by Wildcard {/* #get-folders-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folders-by-wildcard)

```csharp
public Task<string[]> GetFoldersByWildcardAsync(
        string searchString = "",
        bool caseSensitiveSearch = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Object Notes {/* #get-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-object-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-object-notes)

```csharp
public Task<string[]> GetObjectNotesAsync(
        CollectionObjectName @object,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value Double {/* #get-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-double)

```csharp
public Task<double> GetOpcDaTagValueDoubleAsync(
        string opcServerDaTagName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value Integer {/* #get-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-integer)

```csharp
public Task<int> GetOpcDaTagValueIntegerAsync(
        string opcServerDaTagName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value String {/* #get-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-string)

```csharp
public Task<string> GetOpcDaTagValueStringAsync(
        string opcServerDaTagName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Notes {/* #get-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-point-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-point-notes)

```csharp
public Task<string[]> GetPointNotesAsync(
        PointName point,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Screen Resolution {/* #get-screen-resolution */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-screen-resolution) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-screen-resolution)

```csharp
public Task<GetScreenResolutionResult> GetScreenResolutionAsync(
        int display = -1,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `display` | -1 selects the primary display. |

## Get Working Frame Properties {/* #get-working-frame-properties */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-working-frame-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-working-frame-properties)

```csharp
public Task<WorkingFrameProperties> GetWorkingFramePropertiesAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Increment Point Name {/* #increment-point-name */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#increment-point-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#increment-point-name)

```csharp
public Task<PointName> IncrementPointNameAsync(
        PointName basePointName,
        int increment = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock Imported Items {/* #lock-imported-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lock-imported-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lock-imported-items)

```csharp
public Task LockImportedItemsAsync(
        bool lockItems = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock/Unlock Selected Items {/* #lockunlock-selected-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lockunlock-selected-items)

```csharp
public Task LockUnlockSelectedItemsAsync(
        IEnumerable<CollectionItemName> itemList,
        IEnumerable<CollectionInstrumentId> instruments,
        bool lockItems = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock/Unlock Trapping Control {/* #lockunlock-trapping-control */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lockunlock-trapping-control)

```csharp
public Task LockUnlockTrappingControlAsync(
        IEnumerable<CollectionItemName> relationshipRefList,
        IEnumerable<CollectionItemName> featureCheckRefList,
        IEnumerable<CollectionObjectName> datumRefList,
        bool lockOutTrapping = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Collection to Folder {/* #move-collection-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-collection-to-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-collection-to-folder)

```csharp
public Task MoveCollectionToFolderAsync(
        CollectionName collection,
        string folderPath = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Folder to Folder {/* #move-folder-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-folder-to-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-folder-to-folder)

```csharp
public Task MoveFolderToFolderAsync(
        string sourceFolderPath = "",
        string destinationFolderPath = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Instruments Drag Graphically {/* #move-instruments-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-instruments-drag-graphically)

```csharp
public Task MoveInstrumentsDragGraphicallyAsync(
        IEnumerable<CollectionInstrumentId> instruments,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects Drag Graphically {/* #move-objects-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-objects-drag-graphically)

```csharp
public Task MoveObjectsDragGraphicallyAsync(
        IEnumerable<CollectionObjectName> objects,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scale Objects {/* #scale-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#scale-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#scale-objects)

```csharp
public Task ScaleObjectsAsync(
        IEnumerable<CollectionObjectName> objects,
        double scaleFactor = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Custom Language {/* #set-active-custom-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-custom-language) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-active-custom-language)

```csharp
public Task SetActiveCustomLanguageAsync(
        FileReference languageFileName,
        Font font,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Units {/* #set-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-units) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-active-units)

```csharp
public Task SetActiveUnitsAsync(
        DistanceUnits length,
        bool displayInchFractions,
        double inchFractionDenominator,
        bool simplifyInchFraction,
        TemperatureUnits temperature,
        AngularUnits angular,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Angular Representation {/* #set-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-angular-representation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-angular-representation)

```csharp
public Task SetAngularRepresentationAsync(
        bool value0360 = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `value0360` | False selects the +/-180 angular representation. |

## Set Auto Event Creation {/* #set-auto-event-creation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-auto-event-creation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-auto-event-creation)

```csharp
public Task SetAutoEventCreationAsync(
        bool active = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Automatic Backup State {/* #set-automatic-backup-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-automatic-backup-state)

```csharp
public Task SetAutomaticBackupStateAsync(
        bool autoJobFileRestorePointsActive = true,
        bool autoMeasurementsBackupActive = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Automatic Relationship Construction State {/* #set-automatic-relationship-construction-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-automatic-relationship-construction-state)

```csharp
public Task SetAutomaticRelationshipConstructionStateAsync(
        bool active = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Notes {/* #set-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-collection-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-collection-notes)

```csharp
public Task SetCollectionNotesAsync(
        CollectionName collection,
        IEnumerable<string> notes,
        bool append = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set Decimal Digits for Display {/* #set-decimal-digits-for-display */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-decimal-digits-for-display)

```csharp
public Task SetDecimalDigitsForDisplayAsync(
        int length = 4,
        int angle = 4,
        int scale = 6,
        int unitVector = 6,
        int weight = 3,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Folder Notes {/* #set-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-folder-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-folder-notes)

```csharp
public Task SetFolderNotesAsync(
        string folderPath,
        IEnumerable<string> notes,
        bool append = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set Interaction Mode {/* #set-interaction-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-interaction-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-interaction-mode)

```csharp
public Task SetInteractionModeAsync(
        SaInteractionMode saInteractionMode,
        MpInteractionMode measurementPlanInteractionMode,
        MpDialogInteractionMode measurementPlanDialogInteractionMode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Logging State {/* #set-logging-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-logging-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-logging-state)

```csharp
public Task SetLoggingStateAsync(
        bool active = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Notification Cancel Override {/* #set-notification-cancel-override */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-notification-cancel-override)

```csharp
public Task SetNotificationCancelOverrideAsync(
        bool prohibitCancel = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object Notes {/* #set-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-object-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-object-notes)

```csharp
public Task SetObjectNotesAsync(
        CollectionObjectName @object,
        IEnumerable<string> notes,
        bool append = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set OPC DA Tag Value Double {/* #set-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-double)

```csharp
public Task SetOpcDaTagValueDoubleAsync(
        string opcServerDaTagName = "",
        double value = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value Integer {/* #set-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-integer)

```csharp
public Task SetOpcDaTagValueIntegerAsync(
        string opcServerDaTagName = "",
        int value = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value String {/* #set-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-string)

```csharp
public Task SetOpcDaTagValueStringAsync(
        string opcServerDaTagName = "",
        string value = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Notes {/* #set-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-point-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-point-notes)

```csharp
public Task SetPointNotesAsync(
        PointName point,
        IEnumerable<string> notes,
        bool append = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set User Interface Profile {/* #set-user-interface-profile */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-user-interface-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-user-interface-profile)

```csharp
public Task SetUserInterfaceProfileAsync(
        string profileName,
        FileReference profileFileName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `profileFileName` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Set View Idle Update Frequency {/* #set-view-idle-update-frequency */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-view-idle-update-frequency)

```csharp
public Task SetViewIdleUpdateFrequencyAsync(
        int idleCount = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set WildCard Asterisk Mode {/* #set-wildcard-asterisk-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-wildcard-asterisk-mode)

```csharp
public Task SetWildCardAsteriskModeAsync(
        bool autoWrapSearchString = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Frame {/* #set-working-frame */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-working-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-working-frame)

```csharp
public Task SetWorkingFrameAsync(
        CollectionObjectName newWorkingFrameName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Status Dialog {/* #status-dialog */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#status-dialog) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#status-dialog)

```csharp
public Task StatusDialogAsync(
        string dialogTitle = "",
        string textMessage = "",
        int currentPosition = 0,
        int upperLimit = 0,
        bool suppressTimeRemaining = true,
        bool closeDialog = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Trim Log File {/* #trim-log-file */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#trim-log-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#trim-log-file)

```csharp
public Task TrimLogFileAsync(
        int numberOfEntriesToKeep = 10,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Write to Log {/* #write-to-log */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#write-to-log) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#write-to-log)

```csharp
public Task WriteToLogAsync(
        string logEntry = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
