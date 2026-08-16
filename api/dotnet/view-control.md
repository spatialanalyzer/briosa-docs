---
title: View Control
description: Next Briosa .NET APIs for supported View Control MP commands.
toc_max_heading_level: 2
---

# View Control

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Auto-Scale

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Auto-Scale](/mp-command-catalog/commands/view-control#auto-scale) · [gRPC contract](/api/grpc/view-control#auto-scale)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task AutoScaleAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AutoScaleAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Center Graphics About Object(s)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Center Graphics About Object(s)](/mp-command-catalog/commands/view-control#center-graphics-about-objects) · [gRPC contract](/api/grpc/view-control#center-graphics-about-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectType` | `ObjectType` | `Object Type` | Any |
| `collectionWildcardCriteria` | `string` | `Collection Wildcard Criteria` | * |
| `objectWildcardCriteria` | `string` | `Object Wildcard Criteria` | * |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CenterGraphicsAboutObjectsAsync(
    ObjectType objectType,
    string collectionWildcardCriteria = "*",
    string objectWildcardCriteria = "*",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CenterGraphicsAboutObjectsAsync(objectType: objectType);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Center Graphics About Point

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Center Graphics About Point](/mp-command-catalog/commands/view-control#center-graphics-about-point) · [gRPC contract](/api/grpc/view-control#center-graphics-about-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task CenterGraphicsAboutPointAsync(
    PointName pointName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.CenterGraphicsAboutPointAsync(pointName: pointName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Define point of view

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Define point of view](/mp-command-catalog/commands/view-control#define-point-of-view) · [gRPC contract](/api/grpc/view-control#define-point-of-view)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `viewName` | `ViewName` | `View Name` | Required |
| `rotationX` | `double` | `Rotation (x)` | 0.000000 |
| `rotationY` | `double` | `Rotation (y)` | 0.000000 |
| `rotationZ` | `double` | `Rotation (z)` | 0.000000 |
| `restoreZoomSettings` | `bool` | `Restore Zoom Settings?` | false |
| `scaleFactor` | `double` | `Scale Factor` | 1.000000 |
| `originX` | `double` | `Origin (x)` | 0.000000 |
| `originY` | `double` | `Origin (y)` | 0.000000 |
| `restoreRenderMode` | `bool` | `Restore Render Mode?` | false |
| `renderingMode` | `RenderModeType` | `Rendering Mode` | Wireframe |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DefinePointOfViewAsync(
    ViewName viewName,
    double rotationX,
    double rotationY,
    double rotationZ,
    bool restoreZoomSettings,
    double scaleFactor,
    double originX,
    double originY,
    bool restoreRenderMode,
    RenderModeType renderingMode,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DefinePointOfViewAsync(viewName: viewName, rotationX: rotationX, rotationY: rotationY, rotationZ: rotationZ, restoreZoomSettings: restoreZoomSettings, scaleFactor: scaleFactor, originX: originX, originY: originY, restoreRenderMode: restoreRenderMode, renderingMode: renderingMode);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Active Clipping Planes

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Active Clipping Planes](/mp-command-catalog/commands/view-control#get-active-clipping-planes) · [gRPC contract](/api/grpc/view-control#get-active-clipping-planes)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Objects` | `CollectionObjectName[]` | `Objects` |

```csharp
public Task<CollectionObjectName[]> GetActiveClippingPlanesAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetActiveClippingPlanesAsync();
```

Returns the MP output `Objects` directly as `CollectionObjectName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get point of view parameters

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get point of view parameters](/mp-command-catalog/commands/view-control#get-point-of-view-parameters) · [gRPC contract](/api/grpc/view-control#get-point-of-view-parameters)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `viewName` | `ViewName` | `View Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RotationX` | `double` | `Rotation (x)` |
| `RotationY` | `double` | `Rotation (y)` |
| `RotationZ` | `double` | `Rotation (z)` |
| `RestoreZoomSettings` | `bool` | `Restore Zoom Settings?` |
| `ScaleFactor` | `double` | `Scale Factor` |
| `OriginX` | `double` | `Origin (x)` |
| `OriginY` | `double` | `Origin (y)` |
| `RestoreRenderMode` | `bool` | `Restore Render Mode?` |

```csharp
public sealed record GetPointOfViewParametersResult
{
    public required double RotationX { get; init; }

    public required double RotationY { get; init; }

    public required double RotationZ { get; init; }

    public required bool RestoreZoomSettings { get; init; }

    public required double ScaleFactor { get; init; }

    public required double OriginX { get; init; }

    public required double OriginY { get; init; }

    public required bool RestoreRenderMode { get; init; }
}

public Task<GetPointOfViewParametersResult> GetPointOfViewParametersAsync(
    ViewName viewName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPointOfViewParametersAsync(viewName: viewName);
```

Returns the 8 MP outputs in the named `GetPointOfViewParametersResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Hide All Callout Views

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Hide All Callout Views](/mp-command-catalog/commands/view-control#hide-all-callout-views) · [gRPC contract](/api/grpc/view-control#hide-all-callout-views)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task HideAllCalloutViewsAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.HideAllCalloutViewsAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Hide Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Hide Objects](/mp-command-catalog/commands/view-control#hide-objects) · [gRPC contract](/api/grpc/view-control#hide-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToHide` | `IEnumerable<CollectionObjectName>` | `Objects To Hide` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task HideObjectsAsync(
    IEnumerable<CollectionObjectName> objectsToHide,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.HideObjectsAsync(objectsToHide: objectsToHide);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Highlight Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Highlight Objects](/mp-command-catalog/commands/view-control#highlight-objects) · [gRPC contract](/api/grpc/view-control#highlight-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectNamesEmptyToClearAll` | `IEnumerable<CollectionObjectName>` | `Object Names (Empty to clear all)` | Required |
| `highLightObjects` | `bool` | `HighLight Objects?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task HighlightObjectsAsync(
    IEnumerable<CollectionObjectName> objectNamesEmptyToClearAll,
    bool highLightObjects = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.HighlightObjectsAsync(objectNamesEmptyToClearAll: objectNamesEmptyToClearAll);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Highlight Point

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Highlight Point](/mp-command-catalog/commands/view-control#highlight-point) · [gRPC contract](/api/grpc/view-control#highlight-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameEmptyToClearAll` | `PointName` | `Point Name (Empty to clear all)` | Required |
| `showPoint` | `bool` | `Show Point?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task HighlightPointAsync(
    PointName pointNameEmptyToClearAll,
    bool showPoint = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.HighlightPointAsync(pointNameEmptyToClearAll: pointNameEmptyToClearAll);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Highlight Relationships

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Highlight Relationships](/mp-command-catalog/commands/view-control#highlight-relationships) · [gRPC contract](/api/grpc/view-control#highlight-relationships)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipsEmptyToClearAll` | `IEnumerable<CollectionItemName>` | `Relationships (Empty to clear all)` | Required |
| `highLightRelationships` | `bool` | `HighLight Relationships?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task HighlightRelationshipsAsync(
    IEnumerable<CollectionItemName> relationshipsEmptyToClearAll,
    bool highLightRelationships = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.HighlightRelationshipsAsync(relationshipsEmptyToClearAll: relationshipsEmptyToClearAll);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Load Ribbon Bar from XML File

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Load Ribbon Bar from XML File](/mp-command-catalog/commands/view-control#load-ribbon-bar-from-xml-file) · [gRPC contract](/api/grpc/view-control#load-ribbon-bar-from-xml-file)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task LoadRibbonBarFromXmlFileAsync(
    FileReference filePath,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.LoadRibbonBarFromXmlFileAsync(filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Refresh Views

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Refresh Views](/mp-command-catalog/commands/view-control#refresh-views) · [gRPC contract](/api/grpc/view-control#refresh-views)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RefreshViewsAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RefreshViewsAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Reset Ribbon Bar to Default

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Reset Ribbon Bar to Default](/mp-command-catalog/commands/view-control#reset-ribbon-bar-to-default) · [gRPC contract](/api/grpc/view-control#reset-ribbon-bar-to-default)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ResetRibbonBarToDefaultAsync(
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ResetRibbonBarToDefaultAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Save point of view

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Save point of view](/mp-command-catalog/commands/view-control#save-point-of-view) · [gRPC contract](/api/grpc/view-control#save-point-of-view)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `viewName` | `ViewName` | `View Name` | Required |
| `restoreZoomSettings` | `bool` | `Restore Zoom Settings?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SavePointOfViewAsync(
    ViewName viewName,
    bool restoreZoomSettings = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SavePointOfViewAsync(viewName: viewName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Background Color

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Background Color](/mp-command-catalog/commands/view-control#set-background-color) · [gRPC contract](/api/grpc/view-control#set-background-color)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `solidColorName` | `Color` | `Solid Color Name` | RGB 255, 0, 0 |
| `gradientStartColorName` | `Color` | `Gradient Start Color Name` | RGB 255, 0, 0 |
| `gradientEndColorName` | `Color` | `Gradient End Color Name` | RGB 255, 0, 0 |
| `highlightColor` | `Color` | `Highlight Color` | RGB 255, 0, 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetBackgroundColorAsync(
    Color solidColorName,
    Color gradientStartColorName,
    Color gradientEndColorName,
    Color highlightColor,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetBackgroundColorAsync(solidColorName: solidColorName, gradientStartColorName: gradientStartColorName, gradientEndColorName: gradientEndColorName, highlightColor: highlightColor);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set MP's Window State

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set MP's Window State](/mp-command-catalog/commands/view-control#set-mps-window-state) · [gRPC contract](/api/grpc/view-control#set-mps-window-state)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mpWindowState` | `WindowState` | `MP Window State` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetMpWindowStateAsync(
    WindowState mpWindowState,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetMpWindowStateAsync(mpWindowState: mpWindowState);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Object(s) Color

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Object(s) Color](/mp-command-catalog/commands/view-control#set-objects-color) · [gRPC contract](/api/grpc/view-control#set-objects-color)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToChange` | `IEnumerable<CollectionObjectName>` | `Objects to change` | Required |
| `newWorkingColorName` | `Color` | `New Working Color Name` | RGB 255, 0, 0 |
| `autoIncrement` | `bool` | `Auto Increment` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetObjectsColorAsync(
    IEnumerable<CollectionObjectName> objectsToChange,
    Color newWorkingColorName,
    bool autoIncrement = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetObjectsColorAsync(objectsToChange: objectsToChange, newWorkingColorName: newWorkingColorName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Object(s) Translucency

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Object(s) Translucency](/mp-command-catalog/commands/view-control#set-objects-translucency) · [gRPC contract](/api/grpc/view-control#set-objects-translucency)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToChange` | `IEnumerable<CollectionObjectName>` | `Objects to change` | Required |
| `renderingType` | `TranslucencyType` | `Rendering Type` | Required |
| `opacityValue` | `double` | `Opacity Value` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetObjectsTranslucencyAsync(
    IEnumerable<CollectionObjectName> objectsToChange,
    TranslucencyType renderingType,
    double opacityValue = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetObjectsTranslucencyAsync(objectsToChange: objectsToChange, renderingType: renderingType);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set point of view

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set point of view](/mp-command-catalog/commands/view-control#set-point-of-view) · [gRPC contract](/api/grpc/view-control#set-point-of-view)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `viewName` | `ViewName` | `View Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPointOfViewAsync(
    ViewName viewName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPointOfViewAsync(viewName: viewName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Point of View from Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Point of View from Frame](/mp-command-catalog/commands/view-control#set-point-of-view-from-frame) · [gRPC contract](/api/grpc/view-control#set-point-of-view-from-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame` | `CollectionObjectName` | `Frame` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPointOfViewFromFrameAsync(
    CollectionObjectName frame,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPointOfViewFromFrameAsync(frame: frame);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Point of View from Instrument Updates

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Point of View from Instrument Updates](/mp-command-catalog/commands/view-control#set-point-of-view-from-instrument-updates) · [gRPC contract](/api/grpc/view-control#set-point-of-view-from-instrument-updates)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentId` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| `displayViewControl` | `bool` | `Display View Control` | true |
| `enableSetViewpointFromInstrumentUpdates` | `bool` | `Enable Set Viewpoint From Instrument Updates` | false |
| `updateViewPercent` | `double` | `Update View Percent` | 75.000000 |
| `clipBehindProbe` | `bool` | `Clip Behind Probe` | false |
| `automaticZoomWhenTrapping` | `bool` | `Automatic Zoom When Trapping` | false |
| `enableDirectionalCloudPoints` | `bool` | `Enable Directional Cloud Points` | false |
| `angleResetThreshold` | `double` | `Angle Reset Threshold` | 45.000000 |
| `animationSteps` | `int` | `Animation Steps` | 8 |
| `referenceFrameObject` | `CollectionObjectName` | `Reference Frame Object` | Required |
| `useScanStripeForViewFocus` | `bool` | `Use Scan Stripe for View Focus` | true |
| `zoomFactor` | `double` | `Zoom Factor` | 1.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPointOfViewFromInstrumentUpdatesAsync(
    CollectionInstrumentId instrumentId,
    bool displayViewControl,
    bool enableSetViewpointFromInstrumentUpdates,
    double updateViewPercent,
    bool clipBehindProbe,
    bool automaticZoomWhenTrapping,
    bool enableDirectionalCloudPoints,
    double angleResetThreshold,
    int animationSteps,
    CollectionObjectName referenceFrameObject,
    bool useScanStripeForViewFocus = true,
    double zoomFactor = 1.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPointOfViewFromInstrumentUpdatesAsync(instrumentId: instrumentId, displayViewControl: displayViewControl, enableSetViewpointFromInstrumentUpdates: enableSetViewpointFromInstrumentUpdates, updateViewPercent: updateViewPercent, clipBehindProbe: clipBehindProbe, automaticZoomWhenTrapping: automaticZoomWhenTrapping, enableDirectionalCloudPoints: enableDirectionalCloudPoints, angleResetThreshold: angleResetThreshold, animationSteps: animationSteps, referenceFrameObject: referenceFrameObject);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Render Mode Type

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Render Mode Type](/mp-command-catalog/commands/view-control#set-render-mode-type) · [gRPC contract](/api/grpc/view-control#set-render-mode-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `renderingMode` | `RenderModeType` | `Rendering Mode` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRenderModeTypeAsync(
    RenderModeType renderingMode,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRenderModeTypeAsync(renderingMode: renderingMode);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set SA's Window Pos

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set SA's Window Pos](/mp-command-catalog/commands/view-control#set-sas-window-pos) · [gRPC contract](/api/grpc/view-control#set-sas-window-pos)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `posX` | `int` | `Pos X` | 0 |
| `posY` | `int` | `Pos Y` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetSaWindowPosAsync(
    int posX = 0,
    int posY = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetSaWindowPosAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set SA's Window Size

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set SA's Window Size](/mp-command-catalog/commands/view-control#set-sas-window-size) · [gRPC contract](/api/grpc/view-control#set-sas-window-size)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `width` | `int` | `Width` | 0 |
| `height` | `int` | `Height` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetSaWindowSizeAsync(
    int width = 0,
    int height = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetSaWindowSizeAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set SA's Window State

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set SA's Window State](/mp-command-catalog/commands/view-control#set-sas-window-state) · [gRPC contract](/api/grpc/view-control#set-sas-window-state)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saWindowState` | `WindowState` | `SA Window State` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetSaWindowStateAsync(
    WindowState saWindowState,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetSaWindowStateAsync(saWindowState: saWindowState);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Target Labels Use Full Names

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Target Labels Use Full Names](/mp-command-catalog/commands/view-control#set-target-labels-use-full-names) · [gRPC contract](/api/grpc/view-control#set-target-labels-use-full-names)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `useFullNames` | `bool` | `Use Full Names?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetTargetLabelsUseFullNamesAsync(
    bool useFullNames = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetTargetLabelsUseFullNamesAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Toolkit Visibility

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Toolkit Visibility](/mp-command-catalog/commands/view-control#set-toolkit-visibility) · [gRPC contract](/api/grpc/view-control#set-toolkit-visibility)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `showToolkit` | `bool` | `Show Toolkit?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetToolkitVisibilityAsync(
    bool showToolkit = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetToolkitVisibilityAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set View Clipping Plane

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set View Clipping Plane](/mp-command-catalog/commands/view-control#set-view-clipping-plane) · [gRPC contract](/api/grpc/view-control#set-view-clipping-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `@object` | `CollectionObjectName` | `Object` | Required |
| `removeClippingPlane` | `bool` | `Remove Clipping Plane?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetViewClippingPlaneAsync(
    CollectionObjectName @object,
    bool removeClippingPlane = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetViewClippingPlaneAsync(@object: @object);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Working Color

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Working Color](/mp-command-catalog/commands/view-control#set-working-color) · [gRPC contract](/api/grpc/view-control#set-working-color)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `newWorkingColorName` | `Color` | `New Working Color Name` | RGB 255, 0, 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetWorkingColorAsync(
    Color newWorkingColorName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetWorkingColorAsync(newWorkingColorName: newWorkingColorName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Working Color Auto Increment

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Working Color Auto Increment](/mp-command-catalog/commands/view-control#set-working-color-auto-increment) · [gRPC contract](/api/grpc/view-control#set-working-color-auto-increment)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `autoIncrement` | `bool` | `Auto Increment` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetWorkingColorAutoIncrementAsync(
    bool autoIncrement = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetWorkingColorAutoIncrementAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show / Hide by Object Type

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show / Hide by Object Type](/mp-command-catalog/commands/view-control#show--hide-by-object-type) · [gRPC contract](/api/grpc/view-control#show--hide-by-object-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `allCollections` | `bool` | `All Collections?` | false |
| `specificCollection` | `CollectionName` | `Specific Collection` | Required |
| `objectTypeToShowHide` | `ObjectType` | `Object Type To Show / Hide` | Any |
| `hideShowFalse` | `bool` | `Hide? (Show = FALSE)` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideByObjectTypeAsync(
    bool allCollections,
    CollectionName specificCollection,
    ObjectType objectTypeToShowHide,
    bool hideShowFalse = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideByObjectTypeAsync(allCollections: allCollections, specificCollection: specificCollection, objectTypeToShowHide: objectTypeToShowHide);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show / Hide Callout View

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show / Hide Callout View](/mp-command-catalog/commands/view-control#show--hide-callout-view) · [gRPC contract](/api/grpc/view-control#show--hide-callout-view)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `calloutViewToShow` | `CollectionItemName` | `Callout View To Show` | Required |
| `showCalloutView` | `bool` | `Show Callout View?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideCalloutViewAsync(
    CollectionItemName calloutViewToShow,
    bool showCalloutView = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideCalloutViewAsync(calloutViewToShow: calloutViewToShow);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show / Hide Dimension

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show / Hide Dimension](/mp-command-catalog/commands/view-control#show--hide-dimension) · [gRPC contract](/api/grpc/view-control#show--hide-dimension)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimensionName` | `CollectionItemName` | `Dimension Name` | Required |
| `showDimension` | `bool` | `Show Dimension?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideDimensionAsync(
    CollectionItemName dimensionName,
    bool showDimension = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideDimensionAsync(dimensionName: dimensionName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show / Hide Points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show / Hide Points](/mp-command-catalog/commands/view-control#show--hide-points) · [gRPC contract](/api/grpc/view-control#show--hide-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `IEnumerable<PointName>` | `Point Names` | Required |
| `showHideFalse` | `bool` | `Show? (Hide = FALSE)` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHidePointsAsync(
    IEnumerable<PointName> pointNames,
    bool showHideFalse = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHidePointsAsync(pointNames: pointNames);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show by Object Type

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show by Object Type](/mp-command-catalog/commands/view-control#show-by-object-type) · [gRPC contract](/api/grpc/view-control#show-by-object-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectTypeToShow` | `CollectionObjectName` | `Object Type To Show` | Required |
| `allCollections` | `bool` | `All Collections?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowByObjectTypeAsync(
    CollectionObjectName objectTypeToShow,
    bool allCollections = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowByObjectTypeAsync(objectTypeToShow: objectTypeToShow);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show Items in Tree

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show Items in Tree](/mp-command-catalog/commands/view-control#show-items-in-tree) · [gRPC contract](/api/grpc/view-control#show-items-in-tree)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collapseAllOtherItems` | `bool` | `Collapse all other Items?` | true |
| `points` | `IEnumerable<PointName>` | `Points` | Required |
| `objects` | `IEnumerable<CollectionObjectName>` | `Objects` | Required |
| `instruments` | `IEnumerable<CollectionInstrumentId>` | `Instruments` | Required |
| `featureChecks` | `IEnumerable<CollectionItemName>` | `Feature Checks` | Required |
| `datums` | `IEnumerable<CollectionObjectName>` | `Datums` | Required |
| `collections` | `IEnumerable<string>` | `Collections` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowItemsInTreeAsync(
    bool collapseAllOtherItems,
    IEnumerable<PointName> points,
    IEnumerable<CollectionObjectName> objects,
    IEnumerable<CollectionInstrumentId> instruments,
    IEnumerable<CollectionItemName> featureChecks,
    IEnumerable<CollectionObjectName> datums,
    IEnumerable<string> collections,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowItemsInTreeAsync(collapseAllOtherItems: collapseAllOtherItems, points: points, objects: objects, instruments: instruments, featureChecks: featureChecks, datums: datums, collections: collections);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show Labels

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show Labels](/mp-command-catalog/commands/view-control#show-labels) · [gRPC contract](/api/grpc/view-control#show-labels)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointLabelsOn` | `bool` | `Point Labels On?` | false |
| `objectsLabelsOn` | `bool` | `Objects Labels On?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowLabelsAsync(
    bool pointLabelsOn = false,
    bool objectsLabelsOn = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowLabelsAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show Objects

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show Objects](/mp-command-catalog/commands/view-control#show-objects) · [gRPC contract](/api/grpc/view-control#show-objects)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToShow` | `IEnumerable<CollectionObjectName>` | `Objects To Show` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowObjectsAsync(
    IEnumerable<CollectionObjectName> objectsToShow,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowObjectsAsync(objectsToShow: objectsToShow);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show/Hide Annotations for Datums

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show/Hide Annotations for Datums](/mp-command-catalog/commands/view-control#showhide-annotations-for-datums) · [gRPC contract](/api/grpc/view-control#showhide-annotations-for-datums)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `datumNameList` | `IEnumerable<CollectionObjectName>` | `Datum Name List` | Required |
| `show` | `bool` | `Show?` | false |
| `highlight` | `bool` | `Highlight?` | false |
| `setInspectionView` | `bool` | `Set Inspection View?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideAnnotationsForDatumsAsync(
    IEnumerable<CollectionObjectName> datumNameList,
    bool show = false,
    bool highlight = false,
    bool setInspectionView = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideAnnotationsForDatumsAsync(datumNameList: datumNameList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show/Hide Annotations for Feature Checks

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show/Hide Annotations for Feature Checks](/mp-command-catalog/commands/view-control#showhide-annotations-for-feature-checks) · [gRPC contract](/api/grpc/view-control#showhide-annotations-for-feature-checks)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `featureCheckNameList` | `IEnumerable<CollectionItemName>` | `Feature Check Name List` | Required |
| `show` | `bool` | `Show?` | false |
| `highlight` | `bool` | `Highlight?` | false |
| `setInspectionView` | `bool` | `Set Inspection View?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideAnnotationsForFeatureChecksAsync(
    IEnumerable<CollectionItemName> featureCheckNameList,
    bool show = false,
    bool highlight = false,
    bool setInspectionView = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideAnnotationsForFeatureChecksAsync(featureCheckNameList: featureCheckNameList);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show/Hide Inspection Bar

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show/Hide Inspection Bar](/mp-command-catalog/commands/view-control#showhide-inspection-bar) · [gRPC contract](/api/grpc/view-control#showhide-inspection-bar)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `showInspectionBar` | `bool` | `Show Inspection Bar?` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideInspectionBarAsync(
    bool showInspectionBar = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideInspectionBarAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show/Hide Instrument Interface

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show/Hide Instrument Interface](/mp-command-catalog/commands/view-control#showhide-instrument-interface) · [gRPC contract](/api/grpc/view-control#showhide-instrument-interface)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentId` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| `minimizeInterface` | `bool` | `Minimize Interface?` | false |
| `hideInterface` | `bool` | `Hide Interface?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideInstrumentInterfaceAsync(
    CollectionInstrumentId instrumentId,
    bool minimizeInterface = false,
    bool hideInterface = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideInstrumentInterfaceAsync(instrumentId: instrumentId);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show/Hide Instrument Probe Tip

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show/Hide Instrument Probe Tip](/mp-command-catalog/commands/view-control#showhide-instrument-probe-tip) · [gRPC contract](/api/grpc/view-control#showhide-instrument-probe-tip)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `showInstrumentProbeTip` | `bool` | `Show Instrument Probe Tip?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideInstrumentProbeTipAsync(
    bool showInstrumentProbeTip = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideInstrumentProbeTipAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show/Hide Instruments

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show/Hide Instruments](/mp-command-catalog/commands/view-control#showhide-instruments) · [gRPC contract](/api/grpc/view-control#showhide-instruments)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentIDs` | `IEnumerable<CollectionInstrumentId>` | `Instrument IDs` | Required |
| `showInstruments` | `bool` | `Show Instruments?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideInstrumentsAsync(
    IEnumerable<CollectionInstrumentId> instrumentIDs,
    bool showInstruments = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideInstrumentsAsync(instrumentIDs: instrumentIDs);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show/Hide Relationship Report

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show/Hide Relationship Report](/mp-command-catalog/commands/view-control#showhide-relationship-report) · [gRPC contract](/api/grpc/view-control#showhide-relationship-report)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionName` | `CollectionName` | `Collection Name` | Required |
| `showRelationshipReport` | `bool` | `Show Relationship Report` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideRelationshipReportAsync(
    CollectionName collectionName,
    bool showRelationshipReport = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideRelationshipReportAsync(collectionName: collectionName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Show/Hide Relationship Watch

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Show/Hide Relationship Watch](/mp-command-catalog/commands/view-control#showhide-relationship-watch) · [gRPC contract](/api/grpc/view-control#showhide-relationship-watch)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `showRelationshipWatch` | `bool` | `Show Relationship Watch` | false |
| `relationshipWatchWindowProperties` | `CollectionObjectName` | `Relationship Watch Window Properties` | Required |
| `windowTopLeftXPosition` | `int` | `Window Top Left X Position` | 0 |
| `windowTopLeftYPosition` | `int` | `Window Top Left Y Position` | 0 |
| `windowWidth` | `int` | `Window Width` | 0 |
| `windowHeight` | `int` | `Window Height` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ShowHideRelationshipWatchAsync(
    CollectionObjectName relationshipName,
    bool showRelationshipWatch,
    CollectionObjectName relationshipWatchWindowProperties,
    int windowTopLeftXPosition = 0,
    int windowTopLeftYPosition = 0,
    int windowWidth = 0,
    int windowHeight = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ShowHideRelationshipWatchAsync(relationshipName: relationshipName, showRelationshipWatch: showRelationshipWatch, relationshipWatchWindowProperties: relationshipWatchWindowProperties);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
