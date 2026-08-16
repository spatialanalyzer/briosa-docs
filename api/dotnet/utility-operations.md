---
title: Utility Operations
description: Next Briosa .NET APIs for supported Utility Operations MP commands.
toc_max_heading_level: 2
---

# Utility Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Close All Watch Windows

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Close All Watch Windows](/mp-command-catalog/commands/utility-operations#close-all-watch-windows) · [gRPC contract](/api/grpc/utility-operations#close-all-watch-windows)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CloseAllWatchWindowsAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CloseAllWatchWindowsAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Folder

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Folder](/mp-command-catalog/commands/utility-operations#delete-folder) · [gRPC contract](/api/grpc/utility-operations#delete-folder)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folderPath` | `string` | `Folder Path` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteFolderAsync(
    string folderPath = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteFolderAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Items

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Items](/mp-command-catalog/commands/utility-operations#delete-items) · [gRPC contract](/api/grpc/utility-operations#delete-items)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `itemList` | `IEnumerable<CollectionItemName>` | `Item List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteItemsAsync(
    IEnumerable<CollectionItemName> itemList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteItemsAsync(itemList: itemList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Delete Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Delete Objects](/mp-command-catalog/commands/utility-operations#delete-objects) · [gRPC contract](/api/grpc/utility-operations#delete-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectNames` | `IEnumerable<CollectionObjectName>` | `Object Names` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteObjectsAsync(
    IEnumerable<CollectionObjectName> objectNames,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteObjectsAsync(objectNames: objectNames);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Active Language

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Active Language](/mp-command-catalog/commands/utility-operations#get-active-language) · [gRPC contract](/api/grpc/utility-operations#get-active-language)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `LanguageFileName` | `FileReference` | `Language File Name` |
| `CustomLanguage` | `bool` | `Custom Language?` |

```csharp
public sealed record GetActiveLanguageResult
{
    public required FileReference LanguageFileName { get; init; }

    public required bool CustomLanguage { get; init; }
}

public Task<GetActiveLanguageResult> GetActiveLanguageAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetActiveLanguageAsync();
```

Returns the 2 MP outputs in the named `GetActiveLanguageResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Active Units

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Active Units](/mp-command-catalog/commands/utility-operations#get-active-units) · [gRPC contract](/api/grpc/utility-operations#get-active-units)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Length` | `string` | `Length` |
| `Angular` | `string` | `Angular` |
| `Temperature` | `string` | `Temperature` |

```csharp
public sealed record ActiveUnits
{
    public required string Length { get; init; }

    public required string Angular { get; init; }

    public required string Temperature { get; init; }
}

public Task<ActiveUnits> GetActiveUnitsAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetActiveUnitsAsync();
```

Returns the 3 MP outputs in the named `ActiveUnits` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Angular Representation

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Angular Representation](/mp-command-catalog/commands/utility-operations#get-angular-representation) · [gRPC contract](/api/grpc/utility-operations#get-angular-representation)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value0360False180` | `bool` | `0-360, (FALSE = +/-180)` |

```csharp
public Task<bool> GetAngularRepresentationAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetAngularRepresentationAsync();
```

Returns the MP output `0-360, (FALSE = +/-180)` directly as `bool`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Collection Notes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Collection Notes](/mp-command-catalog/commands/utility-operations#get-collection-notes) · [gRPC contract](/api/grpc/utility-operations#get-collection-notes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Notes` | `string[]` | `Notes` |

```csharp
public Task<string[]> GetCollectionNotesAsync(
    CollectionName collection,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetCollectionNotesAsync(collection: collection);
```

Returns the MP output `Notes` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Folder Collections

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Folder Collections](/mp-command-catalog/commands/utility-operations#get-folder-collections) · [gRPC contract](/api/grpc/utility-operations#get-folder-collections)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folderPath` | `string` | `Folder Path` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CollectionList` | `string[]` | `Collection List` |

```csharp
public Task<string[]> GetFolderCollectionsAsync(
    string folderPath = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetFolderCollectionsAsync();
```

Returns the MP output `Collection List` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Folder Notes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Folder Notes](/mp-command-catalog/commands/utility-operations#get-folder-notes) · [gRPC contract](/api/grpc/utility-operations#get-folder-notes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folderPath` | `string` | `Folder Path` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Notes` | `string[]` | `Notes` |

```csharp
public Task<string[]> GetFolderNotesAsync(
    string folderPath = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetFolderNotesAsync();
```

Returns the MP output `Notes` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Folders by Wildcard

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Folders by Wildcard](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard) · [gRPC contract](/api/grpc/utility-operations#get-folders-by-wildcard)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `searchString` | `string` | `Search String` | Empty |
| `caseSensitiveSearch` | `bool` | `Case Sensitive Search` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `FolderList` | `string[]` | `Folder List` |

```csharp
public Task<string[]> GetFoldersByWildcardAsync(
    string searchString = "",
    bool caseSensitiveSearch = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetFoldersByWildcardAsync();
```

Returns the MP output `Folder List` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Object Notes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Object Notes](/mp-command-catalog/commands/utility-operations#get-object-notes) · [gRPC contract](/api/grpc/utility-operations#get-object-notes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `@object` | `CollectionObjectName` | `Object` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Notes` | `string[]` | `Notes` |

```csharp
public Task<string[]> GetObjectNotesAsync(
    CollectionObjectName @object,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetObjectNotesAsync(@object: @object);
```

Returns the MP output `Notes` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get OPC DA Tag Value Double

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get OPC DA Tag Value Double](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-double)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `double` | `Value` |

```csharp
public Task<double> GetOpcDaTagValueDoubleAsync(
    string opcServerDaTagName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetOpcDaTagValueDoubleAsync();
```

Returns the MP output `Value` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get OPC DA Tag Value Integer

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get OPC DA Tag Value Integer](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-integer)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `int` | `Value` |

```csharp
public Task<int> GetOpcDaTagValueIntegerAsync(
    string opcServerDaTagName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetOpcDaTagValueIntegerAsync();
```

Returns the MP output `Value` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get OPC DA Tag Value String

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get OPC DA Tag Value String](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string) · [gRPC contract](/api/grpc/utility-operations#get-opc-da-tag-value-string)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Value` | `string` | `Value` |

```csharp
public Task<string> GetOpcDaTagValueStringAsync(
    string opcServerDaTagName = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetOpcDaTagValueStringAsync();
```

Returns the MP output `Value` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Point Notes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Point Notes](/mp-command-catalog/commands/utility-operations#get-point-notes) · [gRPC contract](/api/grpc/utility-operations#get-point-notes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Notes` | `string[]` | `Notes` |

```csharp
public Task<string[]> GetPointNotesAsync(
    PointName point,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointNotesAsync(point: point);
```

Returns the MP output `Notes` directly as `string[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Screen Resolution

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Screen Resolution](/mp-command-catalog/commands/utility-operations#get-screen-resolution) · [gRPC contract](/api/grpc/utility-operations#get-screen-resolution)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `display1Primary` | `int` | `Display (-1 = Primary)` | -1 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `IntegerWindowTopLeftXPosition` | `int` | `Integer Window Top Left X Position` |
| `IntegerWindowTopLeftYPosition` | `int` | `Integer Window Top Left Y Position` |
| `IntegerWidth` | `int` | `Integer Width` |
| `IntegerHeight` | `int` | `Integer Height` |
| `ViewWidth` | `int` | `View Width` |
| `ViewHeight` | `int` | `View Height` |

```csharp
public sealed record GetScreenResolutionResult
{
    public required int IntegerWindowTopLeftXPosition { get; init; }

    public required int IntegerWindowTopLeftYPosition { get; init; }

    public required int IntegerWidth { get; init; }

    public required int IntegerHeight { get; init; }

    public required int ViewWidth { get; init; }

    public required int ViewHeight { get; init; }
}

public Task<GetScreenResolutionResult> GetScreenResolutionAsync(
    int display1Primary = -1,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetScreenResolutionAsync();
```

Returns the 6 MP outputs in the named `GetScreenResolutionResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Working Frame Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Working Frame Properties](/mp-command-catalog/commands/utility-operations#get-working-frame-properties) · [gRPC contract](/api/grpc/utility-operations#get-working-frame-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `FrameName` | `string` | `Frame Name` |
| `CollectionName` | `string` | `Collection Name` |
| `WorkingFrame` | `CollectionObjectName` | `Working Frame` |

```csharp
public sealed record WorkingFrameProperties
{
    public required string FrameName { get; init; }

    public required string CollectionName { get; init; }

    public required CollectionObjectName WorkingFrame { get; init; }
}

public Task<WorkingFrameProperties> GetWorkingFramePropertiesAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetWorkingFramePropertiesAsync();
```

Returns the 3 MP outputs in the named `WorkingFrameProperties` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Increment Point Name

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Increment Point Name](/mp-command-catalog/commands/utility-operations#increment-point-name) · [gRPC contract](/api/grpc/utility-operations#increment-point-name)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `basePointName` | `PointName` | `'Base' Point Name` | Required |
| `increment` | `int` | `Increment` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ResultantPointName` | `PointName` | `Resultant Point Name` |

```csharp
public Task<PointName> IncrementPointNameAsync(
    PointName basePointName,
    int increment = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.IncrementPointNameAsync(basePointName: basePointName);
```

Returns the MP output `Resultant Point Name` directly as `PointName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Lock Imported Items

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Lock Imported Items](/mp-command-catalog/commands/utility-operations#lock-imported-items) · [gRPC contract](/api/grpc/utility-operations#lock-imported-items)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lockItems` | `bool` | `Lock Items?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task LockImportedItemsAsync(
    bool lockItems = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.LockImportedItemsAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Lock/Unlock Selected Items

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Lock/Unlock Selected Items](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items) · [gRPC contract](/api/grpc/utility-operations#lockunlock-selected-items)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `itemList` | `IEnumerable<CollectionItemName>` | `Item List` | Required |
| `instruments` | `IEnumerable<CollectionInstrumentId>` | `Instruments` | Required |
| `lockItems` | `bool` | `Lock Items?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task LockUnlockSelectedItemsAsync(
    IEnumerable<CollectionItemName> itemList,
    IEnumerable<CollectionInstrumentId> instruments,
    bool lockItems = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.LockUnlockSelectedItemsAsync(itemList: itemList, instruments: instruments);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Lock/Unlock Trapping Control

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Lock/Unlock Trapping Control](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control) · [gRPC contract](/api/grpc/utility-operations#lockunlock-trapping-control)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipRefList` | `IEnumerable<CollectionItemName>` | `Relationship Ref List` | Required |
| `featureCheckRefList` | `IEnumerable<CollectionItemName>` | `Feature Check Ref List` | Required |
| `datumRefList` | `IEnumerable<CollectionObjectName>` | `Datum Ref List` | Required |
| `lockOutTrapping` | `bool` | `Lock Out Trapping?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task LockUnlockTrappingControlAsync(
    IEnumerable<CollectionItemName> relationshipRefList,
    IEnumerable<CollectionItemName> featureCheckRefList,
    IEnumerable<CollectionObjectName> datumRefList,
    bool lockOutTrapping = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.LockUnlockTrappingControlAsync(relationshipRefList: relationshipRefList, featureCheckRefList: featureCheckRefList, datumRefList: datumRefList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Move Collection to Folder

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Move Collection to Folder](/mp-command-catalog/commands/utility-operations#move-collection-to-folder) · [gRPC contract](/api/grpc/utility-operations#move-collection-to-folder)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |
| `folderPath` | `string` | `Folder Path` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MoveCollectionToFolderAsync(
    CollectionName collection,
    string folderPath = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MoveCollectionToFolderAsync(collection: collection);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Move Folder to Folder

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Move Folder to Folder](/mp-command-catalog/commands/utility-operations#move-folder-to-folder) · [gRPC contract](/api/grpc/utility-operations#move-folder-to-folder)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceFolderPath` | `string` | `Source Folder Path` | Empty |
| `destinationFolderPath` | `string` | `Destination Folder Path` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MoveFolderToFolderAsync(
    string sourceFolderPath = "",
    string destinationFolderPath = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MoveFolderToFolderAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Move Instruments Drag Graphically

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Move Instruments Drag Graphically](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically) · [gRPC contract](/api/grpc/utility-operations#move-instruments-drag-graphically)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instruments` | `IEnumerable<CollectionInstrumentId>` | `Instruments` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MoveInstrumentsDragGraphicallyAsync(
    IEnumerable<CollectionInstrumentId> instruments,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MoveInstrumentsDragGraphicallyAsync(instruments: instruments);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Move Objects Drag Graphically

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Move Objects Drag Graphically](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically) · [gRPC contract](/api/grpc/utility-operations#move-objects-drag-graphically)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `IEnumerable<CollectionObjectName>` | `Objects` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MoveObjectsDragGraphicallyAsync(
    IEnumerable<CollectionObjectName> objects,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MoveObjectsDragGraphicallyAsync(objects: objects);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Scale Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Scale Objects](/mp-command-catalog/commands/utility-operations#scale-objects) · [gRPC contract](/api/grpc/utility-operations#scale-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `IEnumerable<CollectionObjectName>` | `Objects` | Required |
| `scaleFactor` | `double` | `Scale Factor` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ScaleObjectsAsync(
    IEnumerable<CollectionObjectName> objects,
    double scaleFactor = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ScaleObjectsAsync(objects: objects);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Active Custom Language

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Active Custom Language](/mp-command-catalog/commands/utility-operations#set-active-custom-language) · [gRPC contract](/api/grpc/utility-operations#set-active-custom-language)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `languageFileName` | `FileReference` | `Language File Name` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetActiveCustomLanguageAsync(
    FileReference languageFileName,
    Font font,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetActiveCustomLanguageAsync(languageFileName: languageFileName, font: font);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Active Units

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Active Units](/mp-command-catalog/commands/utility-operations#set-active-units) · [gRPC contract](/api/grpc/utility-operations#set-active-units)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `length` | `DistanceUnits` | `Length` | Inches |
| `displayInchFractions` | `bool` | `Display Inch Fractions?` | false |
| `inchFractionDenominator` | `double` | `Inch Fraction Denominator?` | 16.000000 |
| `simplifyInchFraction` | `bool` | `Simplify Inch Fraction?` | true |
| `temperature` | `TemperatureUnits` | `Temperature` | Fahrenheit |
| `angular` | `AngularUnits` | `Angular` | Degrees |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.SetActiveUnitsAsync(length: length, displayInchFractions: displayInchFractions, inchFractionDenominator: inchFractionDenominator, simplifyInchFraction: simplifyInchFraction, temperature: temperature, angular: angular);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Angular Representation

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Angular Representation](/mp-command-catalog/commands/utility-operations#set-angular-representation) · [gRPC contract](/api/grpc/utility-operations#set-angular-representation)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `value0360False180` | `bool` | `0-360, (FALSE = +/-180)` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetAngularRepresentationAsync(
    bool value0360False180 = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetAngularRepresentationAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Auto Event Creation

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Auto Event Creation](/mp-command-catalog/commands/utility-operations#set-auto-event-creation) · [gRPC contract](/api/grpc/utility-operations#set-auto-event-creation)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `bool` | `Active?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetAutoEventCreationAsync(
    bool active = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetAutoEventCreationAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Automatic Backup State

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Automatic Backup State](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state) · [gRPC contract](/api/grpc/utility-operations#set-automatic-backup-state)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `autoJobFileRestorePointsActive` | `bool` | `Auto Job File Restore Points Active?` | true |
| `autoMeasurementsBackupActive` | `bool` | `Auto Measurements Backup Active?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetAutomaticBackupStateAsync(
    bool autoJobFileRestorePointsActive = true,
    bool autoMeasurementsBackupActive = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetAutomaticBackupStateAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Automatic Relationship Construction State

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Automatic Relationship Construction State](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state) · [gRPC contract](/api/grpc/utility-operations#set-automatic-relationship-construction-state)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `bool` | `Active?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetAutomaticRelationshipConstructionStateAsync(
    bool active = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetAutomaticRelationshipConstructionStateAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Collection Notes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Collection Notes](/mp-command-catalog/commands/utility-operations#set-collection-notes) · [gRPC contract](/api/grpc/utility-operations#set-collection-notes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection` | `CollectionName` | `Collection` | Required |
| `notes` | `IEnumerable<string>` | `Notes` | Required |
| `appendFalseOverwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetCollectionNotesAsync(
    CollectionName collection,
    IEnumerable<string> notes,
    bool appendFalseOverwrite = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetCollectionNotesAsync(collection: collection, notes: notes);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Decimal Digits for Display

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Decimal Digits for Display](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display) · [gRPC contract](/api/grpc/utility-operations#set-decimal-digits-for-display)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `length` | `int` | `Length` | 4 |
| `angle` | `int` | `Angle` | 4 |
| `scale` | `int` | `Scale` | 6 |
| `unitVector` | `int` | `Unit Vector` | 6 |
| `weight` | `int` | `Weight` | 3 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetDecimalDigitsForDisplayAsync(
    int length = 4,
    int angle = 4,
    int scale = 6,
    int unitVector = 6,
    int weight = 3,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetDecimalDigitsForDisplayAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Folder Notes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Folder Notes](/mp-command-catalog/commands/utility-operations#set-folder-notes) · [gRPC contract](/api/grpc/utility-operations#set-folder-notes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `folderPath` | `string` | `Folder Path` | Empty |
| `notes` | `IEnumerable<string>` | `Notes` | Required |
| `appendFalseOverwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetFolderNotesAsync(
    string folderPath,
    IEnumerable<string> notes,
    bool appendFalseOverwrite = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetFolderNotesAsync(folderPath: folderPath, notes: notes);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Interaction Mode

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Interaction Mode](/mp-command-catalog/commands/utility-operations#set-interaction-mode) · [gRPC contract](/api/grpc/utility-operations#set-interaction-mode)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saInteractionMode` | `SaInteractionMode` | `SA Interaction Mode` | Required |
| `measurementPlanInteractionMode` | `MpInteractionMode` | `Measurement Plan Interaction Mode` | Required |
| `measurementPlanDialogInteractionMode` | `MpDialogInteractionMode` | `Measurement Plan Dialog Interaction Mode` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetInteractionModeAsync(
    SaInteractionMode saInteractionMode,
    MpInteractionMode measurementPlanInteractionMode,
    MpDialogInteractionMode measurementPlanDialogInteractionMode,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetInteractionModeAsync(saInteractionMode: saInteractionMode, measurementPlanInteractionMode: measurementPlanInteractionMode, measurementPlanDialogInteractionMode: measurementPlanDialogInteractionMode);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Logging State

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Logging State](/mp-command-catalog/commands/utility-operations#set-logging-state) · [gRPC contract](/api/grpc/utility-operations#set-logging-state)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `active` | `bool` | `Active?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetLoggingStateAsync(
    bool active = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetLoggingStateAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Notification Cancel Override

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Notification Cancel Override](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override) · [gRPC contract](/api/grpc/utility-operations#set-notification-cancel-override)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `prohibitCancel` | `bool` | `Prohibit Cancel?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetNotificationCancelOverrideAsync(
    bool prohibitCancel = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetNotificationCancelOverrideAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Object Notes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Object Notes](/mp-command-catalog/commands/utility-operations#set-object-notes) · [gRPC contract](/api/grpc/utility-operations#set-object-notes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `@object` | `CollectionObjectName` | `Object` | Required |
| `notes` | `IEnumerable<string>` | `Notes` | Required |
| `appendFalseOverwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetObjectNotesAsync(
    CollectionObjectName @object,
    IEnumerable<string> notes,
    bool appendFalseOverwrite = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetObjectNotesAsync(@object: @object, notes: notes);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set OPC DA Tag Value Double

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set OPC DA Tag Value Double](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-double)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |
| `value` | `double` | `Value` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetOpcDaTagValueDoubleAsync(
    string opcServerDaTagName = "",
    double value = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetOpcDaTagValueDoubleAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set OPC DA Tag Value Integer

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set OPC DA Tag Value Integer](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-integer)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |
| `value` | `int` | `Value` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetOpcDaTagValueIntegerAsync(
    string opcServerDaTagName = "",
    int value = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetOpcDaTagValueIntegerAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set OPC DA Tag Value String

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set OPC DA Tag Value String](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string) · [gRPC contract](/api/grpc/utility-operations#set-opc-da-tag-value-string)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `opcServerDaTagName` | `string` | `OPC Server DA Tag Name` | Empty |
| `value` | `string` | `Value` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetOpcDaTagValueStringAsync(
    string opcServerDaTagName = "",
    string value = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetOpcDaTagValueStringAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Point Notes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Point Notes](/mp-command-catalog/commands/utility-operations#set-point-notes) · [gRPC contract](/api/grpc/utility-operations#set-point-notes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |
| `notes` | `IEnumerable<string>` | `Notes` | Required |
| `appendFalseOverwrite` | `bool` | `Append? (FALSE = Overwrite)` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPointNotesAsync(
    PointName point,
    IEnumerable<string> notes,
    bool appendFalseOverwrite = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPointNotesAsync(point: point, notes: notes);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set User Interface Profile

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set User Interface Profile](/mp-command-catalog/commands/utility-operations#set-user-interface-profile) · [gRPC contract](/api/grpc/utility-operations#set-user-interface-profile)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `profileName` | `string` | `Profile Name` | Default |
| `profileFileNameOptional` | `FileReference` | `Profile File Name (optional)` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetUserInterfaceProfileAsync(
    string profileName,
    FileReference profileFileNameOptional,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetUserInterfaceProfileAsync(profileName: profileName, profileFileNameOptional: profileFileNameOptional);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set View Idle Update Frequency

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set View Idle Update Frequency](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency) · [gRPC contract](/api/grpc/utility-operations#set-view-idle-update-frequency)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `idleCount` | `int` | `Idle Count` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetViewIdleUpdateFrequencyAsync(
    int idleCount = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetViewIdleUpdateFrequencyAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set WildCard Asterisk Mode

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set WildCard Asterisk Mode](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode) · [gRPC contract](/api/grpc/utility-operations#set-wildcard-asterisk-mode)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `autoWrapSearchString` | `bool` | `Auto Wrap Search String?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetWildCardAsteriskModeAsync(
    bool autoWrapSearchString = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetWildCardAsteriskModeAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Working Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Working Frame](/mp-command-catalog/commands/utility-operations#set-working-frame) · [gRPC contract](/api/grpc/utility-operations#set-working-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `newWorkingFrameName` | `CollectionObjectName` | `New Working Frame Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetWorkingFrameAsync(
    CollectionObjectName newWorkingFrameName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetWorkingFrameAsync(newWorkingFrameName: newWorkingFrameName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Status Dialog

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Status Dialog](/mp-command-catalog/commands/utility-operations#status-dialog) · [gRPC contract](/api/grpc/utility-operations#status-dialog)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dialogTitle` | `string` | `Dialog Title` | Empty |
| `textMessage` | `string` | `Text Message` | Empty |
| `currentPosition` | `int` | `Current Position` | 0 |
| `upperLimit` | `int` | `Upper Limit` | 0 |
| `suppressTimeRemaining` | `bool` | `Suppress Time Remaining?` | true |
| `closeDialog` | `bool` | `Close Dialog?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.StatusDialogAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Trim Log File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Trim Log File](/mp-command-catalog/commands/utility-operations#trim-log-file) · [gRPC contract](/api/grpc/utility-operations#trim-log-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `numberOfEntriesToKeep` | `int` | `Number of Entries to Keep` | 10 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task TrimLogFileAsync(
    int numberOfEntriesToKeep = 10,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.TrimLogFileAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Write to Log

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Write to Log](/mp-command-catalog/commands/utility-operations#write-to-log) · [gRPC contract](/api/grpc/utility-operations#write-to-log)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `logEntry` | `string` | `Log Entry` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task WriteToLogAsync(
    string logEntry = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.WriteToLogAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
