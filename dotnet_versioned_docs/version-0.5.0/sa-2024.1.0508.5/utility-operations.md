---
title: Utility Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Utility Operations

[SA 2026.1.0529.7](/api/dotnet/utility-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/utility-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Close All Watch Windows {/* #close-all-watch-windows */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#close-all-watch-windows) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#close-all-watch-windows)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task CloseAllWatchWindowsAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Folder {/* #delete-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-folder)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteFolderAsync(
        string folderPath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `folderPath` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

## Delete Items {/* #delete-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-items)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteItemsAsync(
        IEnumerable<CollectionItemName> itemList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Objects {/* #delete-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#delete-objects)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteObjectsAsync(
        IEnumerable<CollectionObjectName> objectNames,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Language {/* #get-active-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-language) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-active-language)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetActiveLanguageResult> GetActiveLanguageAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Units {/* #get-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-units) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-active-units)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<ActiveUnits> GetActiveUnitsAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Angular Representation {/* #get-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-angular-representation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-angular-representation)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<bool> GetAngularRepresentationAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `Value0360` | False selects the +/-180 angular representation. |

## Get Collection Notes {/* #get-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-collection-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-collection-notes)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetCollectionNotesAsync(
        CollectionName collection,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folder Collections {/* #get-folder-collections */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-collections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folder-collections)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetFolderCollectionsAsync(
        string folderPath = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folder Notes {/* #get-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folder-notes)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetFolderNotesAsync(
        string folderPath = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folders by Wildcard {/* #get-folders-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-folders-by-wildcard)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetFoldersByWildcardAsync(
        string searchString = "",
        bool caseSensitiveSearch = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Object Notes {/* #get-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-object-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-object-notes)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetObjectNotesAsync(
        CollectionObjectName @object,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value Double {/* #get-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `external_io` · **Duration Class:** `quick`

```csharp
public Task<double> GetOpcDaTagValueDoubleAsync(
        string opcServerDaTagName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value Integer {/* #get-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-integer)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `external_io` · **Duration Class:** `quick`

```csharp
public Task<int> GetOpcDaTagValueIntegerAsync(
        string opcServerDaTagName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value String {/* #get-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-opc-da-tag-value-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `external_io` · **Duration Class:** `quick`

```csharp
public Task<string> GetOpcDaTagValueStringAsync(
        string opcServerDaTagName = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Notes {/* #get-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-point-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-point-notes)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string[]> GetPointNotesAsync(
        PointName point,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Screen Resolution {/* #get-screen-resolution */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-screen-resolution) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-screen-resolution)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetScreenResolutionResult> GetScreenResolutionAsync(
        int display = -1,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `display` | -1 selects the primary display. |

## Get Working Frame Properties {/* #get-working-frame-properties */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-working-frame-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#get-working-frame-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<WorkingFrameProperties> GetWorkingFramePropertiesAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Increment Point Name {/* #increment-point-name */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#increment-point-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#increment-point-name)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointName> IncrementPointNameAsync(
        PointName basePointName,
        int increment = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock Imported Items {/* #lock-imported-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lock-imported-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lock-imported-items)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task LockImportedItemsAsync(
        bool lockItems = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock/Unlock Selected Items {/* #lockunlock-selected-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lockunlock-selected-items)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task LockUnlockSelectedItemsAsync(
        IEnumerable<CollectionItemName> itemList,
        IEnumerable<CollectionInstrumentId> instruments,
        bool lockItems = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock/Unlock Trapping Control {/* #lockunlock-trapping-control */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#lockunlock-trapping-control)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task LockUnlockTrappingControlAsync(
        IEnumerable<CollectionItemName> relationshipRefList,
        IEnumerable<CollectionItemName> featureCheckRefList,
        IEnumerable<CollectionObjectName> datumRefList,
        bool lockOutTrapping = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Collection to Folder {/* #move-collection-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-collection-to-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-collection-to-folder)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MoveCollectionToFolderAsync(
        CollectionName collection,
        string folderPath = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Folder to Folder {/* #move-folder-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-folder-to-folder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-folder-to-folder)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MoveFolderToFolderAsync(
        string sourceFolderPath = "",
        string destinationFolderPath = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Instruments Drag Graphically {/* #move-instruments-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-instruments-drag-graphically)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task MoveInstrumentsDragGraphicallyAsync(
        IEnumerable<CollectionInstrumentId> instruments,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects Drag Graphically {/* #move-objects-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#move-objects-drag-graphically)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task MoveObjectsDragGraphicallyAsync(
        IEnumerable<CollectionObjectName> objects,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scale Objects {/* #scale-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#scale-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#scale-objects)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ScaleObjectsAsync(
        IEnumerable<CollectionObjectName> objects,
        double scaleFactor,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `scaleFactor` | Required (major 3): an omitted value is rejected before dispatch instead of being sent as 0. |

## Set Active Custom Language {/* #set-active-custom-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-custom-language) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-active-custom-language)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task SetActiveCustomLanguageAsync(
        FileReference languageFileName,
        Font font,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Units {/* #set-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-units) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-active-units)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetActiveUnitsAsync(
        DistanceUnits length,
        bool displayInchFractions,
        double inchFractionDenominator,
        bool simplifyInchFraction,
        TemperatureUnits temperature,
        AngularUnits angular,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Angular Representation {/* #set-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-angular-representation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-angular-representation)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetAngularRepresentationAsync(
        bool value0360 = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `value0360` | False selects the +/-180 angular representation. |

## Set Auto Event Creation {/* #set-auto-event-creation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-auto-event-creation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-auto-event-creation)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetAutoEventCreationAsync(
        bool active = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Automatic Backup State {/* #set-automatic-backup-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-automatic-backup-state)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetAutomaticBackupStateAsync(
        bool autoJobFileRestorePointsActive = true,
        bool autoMeasurementsBackupActive = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Automatic Relationship Construction State {/* #set-automatic-relationship-construction-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-automatic-relationship-construction-state)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetAutomaticRelationshipConstructionStateAsync(
        bool active = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Notes {/* #set-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-collection-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-collection-notes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCollectionNotesAsync(
        CollectionName collection,
        IEnumerable<string> notes,
        bool append = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set Decimal Digits for Display {/* #set-decimal-digits-for-display */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-decimal-digits-for-display)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetDecimalDigitsForDisplayAsync(
        int length = 4,
        int angle = 4,
        int scale = 6,
        int unitVector = 6,
        int weight = 3,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Folder Notes {/* #set-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-folder-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-folder-notes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetFolderNotesAsync(
        string folderPath,
        IEnumerable<string> notes,
        bool append = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set Interaction Mode {/* #set-interaction-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-interaction-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-interaction-mode)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `saInteractionMode` to Sa Interaction Mode Manual or Sa Interaction Mode Automatic also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task SetInteractionModeAsync(
        SaInteractionMode saInteractionMode,
        MpInteractionMode measurementPlanInteractionMode,
        MpDialogInteractionMode measurementPlanDialogInteractionMode,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Logging State {/* #set-logging-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-logging-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-logging-state)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetLoggingStateAsync(
        bool active = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Notification Cancel Override {/* #set-notification-cancel-override */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-notification-cancel-override)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetNotificationCancelOverrideAsync(
        bool prohibitCancel = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object Notes {/* #set-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-object-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-object-notes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetObjectNotesAsync(
        CollectionObjectName @object,
        IEnumerable<string> notes,
        bool append = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set OPC DA Tag Value Double {/* #set-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `external_io` · **Duration Class:** `quick`

```csharp
public Task SetOpcDaTagValueDoubleAsync(
        string opcServerDaTagName = "",
        double value = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value Integer {/* #set-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-integer)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `external_io` · **Duration Class:** `quick`

```csharp
public Task SetOpcDaTagValueIntegerAsync(
        string opcServerDaTagName = "",
        int value = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value String {/* #set-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-opc-da-tag-value-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `external_io` · **Duration Class:** `quick`

```csharp
public Task SetOpcDaTagValueStringAsync(
        string opcServerDaTagName = "",
        string value = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Notes {/* #set-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-point-notes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-point-notes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetPointNotesAsync(
        PointName point,
        IEnumerable<string> notes,
        bool append = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set User Interface Profile {/* #set-user-interface-profile */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-user-interface-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-user-interface-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```csharp
public Task SetUserInterfaceProfileAsync(
        string profileName,
        FileReference? profileFileName = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `profileFileName` | Optional (major 3): omitted when absent; an empty path is rejected. |

## Set View Idle Update Frequency {/* #set-view-idle-update-frequency */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-view-idle-update-frequency)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetViewIdleUpdateFrequencyAsync(
        int idleCount = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set WildCard Asterisk Mode {/* #set-wildcard-asterisk-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-wildcard-asterisk-mode)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetWildCardAsteriskModeAsync(
        bool autoWrapSearchString = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Frame {/* #set-working-frame */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-working-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#set-working-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetWorkingFrameAsync(
        CollectionObjectName newWorkingFrameName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Status Dialog {/* #status-dialog */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#status-dialog) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#status-dialog)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task StatusDialogAsync(
        string dialogTitle = "",
        string textMessage = "",
        int currentPosition = 0,
        int upperLimit = 0,
        bool suppressTimeRemaining = true,
        bool closeDialog = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Trim Log File {/* #trim-log-file */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#trim-log-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#trim-log-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task TrimLogFileAsync(
        int numberOfEntriesToKeep = 10,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Write to Log {/* #write-to-log */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#write-to-log) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/utility-operations#write-to-log)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task WriteToLogAsync(
        string logEntry = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
