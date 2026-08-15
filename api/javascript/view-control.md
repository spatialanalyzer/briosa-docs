---
title: View Control
description: Next Briosa JavaScript and TypeScript APIs for supported View Control MP commands.
toc_max_heading_level: 2
---

# View Control

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Auto-Scale

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Auto-Scale](/mp-command-catalog/commands/view-control#auto-scale) · [gRPC contract](/api/grpc/view-control#auto-scale)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function autoScale(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await autoScale(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Center Graphics About Object(s)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Center Graphics About Object(s)](/mp-command-catalog/commands/view-control#center-graphics-about-objects) · [gRPC contract](/api/grpc/view-control#center-graphics-about-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectType` | `ObjectType` | `Object Type` | Any |
| `collectionWildcardCriteria` | `string` | `Collection Wildcard Criteria` | * |
| `objectWildcardCriteria` | `string` | `Object Wildcard Criteria` | * |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CenterGraphicsAboutObjectsInput {
  readonly objectType?: ObjectType;
  readonly collectionWildcardCriteria?: string;
  readonly objectWildcardCriteria?: string;
}

function centerGraphicsAboutObjects(
  briosa: BriosaClient,
  input?: CenterGraphicsAboutObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await centerGraphicsAboutObjects(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Center Graphics About Point

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Center Graphics About Point](/mp-command-catalog/commands/view-control#center-graphics-about-point) · [gRPC contract](/api/grpc/view-control#center-graphics-about-point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointName` | `PointName` | `Point Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CenterGraphicsAboutPointInput {
  readonly pointName: PointName;
}

function centerGraphicsAboutPoint(
  briosa: BriosaClient,
  input: CenterGraphicsAboutPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await centerGraphicsAboutPoint(briosa, { pointName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Define point of view

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Define point of view](/mp-command-catalog/commands/view-control#define-point-of-view) · [gRPC contract](/api/grpc/view-control#define-point-of-view)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `viewName` | `ViewName` | `View Name` | Required |
| `rotationX` | `number` | `Rotation (x)` | 0.000000 |
| `rotationY` | `number` | `Rotation (y)` | 0.000000 |
| `rotationZ` | `number` | `Rotation (z)` | 0.000000 |
| `restoreZoomSettings` | `boolean` | `Restore Zoom Settings?` | false |
| `scaleFactor` | `number` | `Scale Factor` | 1.000000 |
| `originX` | `number` | `Origin (x)` | 0.000000 |
| `originY` | `number` | `Origin (y)` | 0.000000 |
| `restoreRenderMode` | `boolean` | `Restore Render Mode?` | false |
| `renderingMode` | `RenderModeType` | `Rendering Mode` | Wireframe |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DefinePointOfViewInput {
  readonly viewName: ViewName;
  readonly rotationX?: number;
  readonly rotationY?: number;
  readonly rotationZ?: number;
  readonly restoreZoomSettings?: boolean;
  readonly scaleFactor?: number;
  readonly originX?: number;
  readonly originY?: number;
  readonly restoreRenderMode?: boolean;
  readonly renderingMode?: RenderModeType;
}

function definePointOfView(
  briosa: BriosaClient,
  input: DefinePointOfViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await definePointOfView(briosa, { viewName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Active Clipping Planes

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Active Clipping Planes](/mp-command-catalog/commands/view-control#get-active-clipping-planes) · [gRPC contract](/api/grpc/view-control#get-active-clipping-planes)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `objects` | `readonly CollectionObjectName[]` | `Objects` |

```ts
function getActiveClippingPlanes(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

```ts
await getActiveClippingPlanes(briosa);
```

Returns the MP output `Objects` directly as `readonly CollectionObjectName[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get point of view parameters

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get point of view parameters](/mp-command-catalog/commands/view-control#get-point-of-view-parameters) · [gRPC contract](/api/grpc/view-control#get-point-of-view-parameters)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `viewName` | `ViewName` | `View Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `rotationX` | `number` | `Rotation (x)` |
| `rotationY` | `number` | `Rotation (y)` |
| `rotationZ` | `number` | `Rotation (z)` |
| `restoreZoomSettings` | `boolean` | `Restore Zoom Settings?` |
| `scaleFactor` | `number` | `Scale Factor` |
| `originX` | `number` | `Origin (x)` |
| `originY` | `number` | `Origin (y)` |
| `restoreRenderMode` | `boolean` | `Restore Render Mode?` |

```ts
export interface GetPointOfViewParametersResult {
  readonly rotationX: number;
  readonly rotationY: number;
  readonly rotationZ: number;
  readonly restoreZoomSettings: boolean;
  readonly scaleFactor: number;
  readonly originX: number;
  readonly originY: number;
  readonly restoreRenderMode: boolean;
}

export interface GetPointOfViewParametersInput {
  readonly viewName: ViewName;
}

function getPointOfViewParameters(
  briosa: BriosaClient,
  input: GetPointOfViewParametersInput,
  options?: BriosaCallOptions,
): Promise<GetPointOfViewParametersResult>;
```

```ts
await getPointOfViewParameters(briosa, { viewName: ... });
```

Returns the 8 MP outputs in the named `GetPointOfViewParametersResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Hide All Callout Views

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Hide All Callout Views](/mp-command-catalog/commands/view-control#hide-all-callout-views) · [gRPC contract](/api/grpc/view-control#hide-all-callout-views)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function hideAllCalloutViews(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await hideAllCalloutViews(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Hide Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Hide Objects](/mp-command-catalog/commands/view-control#hide-objects) · [gRPC contract](/api/grpc/view-control#hide-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToHide` | `Iterable<CollectionObjectName>` | `Objects To Hide` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface HideObjectsInput {
  readonly objectsToHide: Iterable<CollectionObjectName>;
}

function hideObjects(
  briosa: BriosaClient,
  input: HideObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await hideObjects(briosa, { objectsToHide: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Highlight Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Highlight Objects](/mp-command-catalog/commands/view-control#highlight-objects) · [gRPC contract](/api/grpc/view-control#highlight-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectNamesEmptyToClearAll` | `Iterable<CollectionObjectName>` | `Object Names (Empty to clear all)` | Required |
| `highLightObjects` | `boolean` | `HighLight Objects?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface HighlightObjectsInput {
  readonly objectNamesEmptyToClearAll: Iterable<CollectionObjectName>;
  readonly highLightObjects?: boolean;
}

function highlightObjects(
  briosa: BriosaClient,
  input: HighlightObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await highlightObjects(briosa, { objectNamesEmptyToClearAll: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Highlight Point

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Highlight Point](/mp-command-catalog/commands/view-control#highlight-point) · [gRPC contract](/api/grpc/view-control#highlight-point)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNameEmptyToClearAll` | `PointName` | `Point Name (Empty to clear all)` | Required |
| `showPoint` | `boolean` | `Show Point?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface HighlightPointInput {
  readonly pointNameEmptyToClearAll: PointName;
  readonly showPoint?: boolean;
}

function highlightPoint(
  briosa: BriosaClient,
  input: HighlightPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await highlightPoint(briosa, { pointNameEmptyToClearAll: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Highlight Relationships

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Highlight Relationships](/mp-command-catalog/commands/view-control#highlight-relationships) · [gRPC contract](/api/grpc/view-control#highlight-relationships)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipsEmptyToClearAll` | `Iterable<CollectionObjectName>` | `Relationships (Empty to clear all)` | Required |
| `highLightRelationships` | `boolean` | `HighLight Relationships?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface HighlightRelationshipsInput {
  readonly relationshipsEmptyToClearAll: Iterable<CollectionObjectName>;
  readonly highLightRelationships?: boolean;
}

function highlightRelationships(
  briosa: BriosaClient,
  input: HighlightRelationshipsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await highlightRelationships(briosa, { relationshipsEmptyToClearAll: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Load Ribbon Bar from XML File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Load Ribbon Bar from XML File](/mp-command-catalog/commands/view-control#load-ribbon-bar-from-xml-file) · [gRPC contract](/api/grpc/view-control#load-ribbon-bar-from-xml-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface LoadRibbonBarFromXmlFileInput {
  readonly filePath: FileReference;
}

function loadRibbonBarFromXmlFile(
  briosa: BriosaClient,
  input: LoadRibbonBarFromXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await loadRibbonBarFromXmlFile(briosa, { filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Refresh Views

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Refresh Views](/mp-command-catalog/commands/view-control#refresh-views) · [gRPC contract](/api/grpc/view-control#refresh-views)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function refreshViews(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await refreshViews(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Reset Ribbon Bar to Default

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Reset Ribbon Bar to Default](/mp-command-catalog/commands/view-control#reset-ribbon-bar-to-default) · [gRPC contract](/api/grpc/view-control#reset-ribbon-bar-to-default)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function resetRibbonBarToDefault(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await resetRibbonBarToDefault(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Save point of view

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Save point of view](/mp-command-catalog/commands/view-control#save-point-of-view) · [gRPC contract](/api/grpc/view-control#save-point-of-view)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `viewName` | `ViewName` | `View Name` | Required |
| `restoreZoomSettings` | `boolean` | `Restore Zoom Settings?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SavePointOfViewInput {
  readonly viewName: ViewName;
  readonly restoreZoomSettings?: boolean;
}

function savePointOfView(
  briosa: BriosaClient,
  input: SavePointOfViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await savePointOfView(briosa, { viewName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Background Color

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Background Color](/mp-command-catalog/commands/view-control#set-background-color) · [gRPC contract](/api/grpc/view-control#set-background-color)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `solidColorName` | `Color` | `Solid Color Name` | RGB 255, 0, 0 |
| `gradientStartColorName` | `Color` | `Gradient Start Color Name` | RGB 255, 0, 0 |
| `gradientEndColorName` | `Color` | `Gradient End Color Name` | RGB 255, 0, 0 |
| `highlightColor` | `Color` | `Highlight Color` | RGB 255, 0, 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetBackgroundColorInput {
  readonly solidColorName?: Color;
  readonly gradientStartColorName?: Color;
  readonly gradientEndColorName?: Color;
  readonly highlightColor?: Color;
}

function setBackgroundColor(
  briosa: BriosaClient,
  input?: SetBackgroundColorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setBackgroundColor(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set MP's Window State

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set MP's Window State](/mp-command-catalog/commands/view-control#set-mps-window-state) · [gRPC contract](/api/grpc/view-control#set-mps-window-state)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mpWindowState` | `WindowState` | `MP Window State` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetMpWindowStateInput {
  readonly mpWindowState: WindowState;
}

function setMpWindowState(
  briosa: BriosaClient,
  input: SetMpWindowStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setMpWindowState(briosa, { mpWindowState: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Object(s) Color

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Object(s) Color](/mp-command-catalog/commands/view-control#set-objects-color) · [gRPC contract](/api/grpc/view-control#set-objects-color)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToChange` | `Iterable<CollectionObjectName>` | `Objects to change` | Required |
| `newWorkingColorName` | `Color` | `New Working Color Name` | RGB 255, 0, 0 |
| `autoIncrement` | `boolean` | `Auto Increment` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetObjectsColorInput {
  readonly objectsToChange: Iterable<CollectionObjectName>;
  readonly newWorkingColorName?: Color;
  readonly autoIncrement?: boolean;
}

function setObjectsColor(
  briosa: BriosaClient,
  input: SetObjectsColorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setObjectsColor(briosa, { objectsToChange: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Object(s) Translucency

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Object(s) Translucency](/mp-command-catalog/commands/view-control#set-objects-translucency) · [gRPC contract](/api/grpc/view-control#set-objects-translucency)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToChange` | `Iterable<CollectionObjectName>` | `Objects to change` | Required |
| `renderingType` | `TranslucencyType` | `Rendering Type` | Required |
| `opacityValue` | `number` | `Opacity Value` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetObjectsTranslucencyInput {
  readonly objectsToChange: Iterable<CollectionObjectName>;
  readonly renderingType: TranslucencyType;
  readonly opacityValue?: number;
}

function setObjectsTranslucency(
  briosa: BriosaClient,
  input: SetObjectsTranslucencyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setObjectsTranslucency(briosa, { objectsToChange: ..., renderingType: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set point of view

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set point of view](/mp-command-catalog/commands/view-control#set-point-of-view) · [gRPC contract](/api/grpc/view-control#set-point-of-view)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `viewName` | `ViewName` | `View Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPointOfViewInput {
  readonly viewName: ViewName;
}

function setPointOfView(
  briosa: BriosaClient,
  input: SetPointOfViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPointOfView(briosa, { viewName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Point of View from Frame

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Point of View from Frame](/mp-command-catalog/commands/view-control#set-point-of-view-from-frame) · [gRPC contract](/api/grpc/view-control#set-point-of-view-from-frame)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame` | `CollectionObjectName` | `Frame` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPointOfViewFromFrameInput {
  readonly frame: CollectionObjectName;
}

function setPointOfViewFromFrame(
  briosa: BriosaClient,
  input: SetPointOfViewFromFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPointOfViewFromFrame(briosa, { frame: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Point of View from Instrument Updates

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Point of View from Instrument Updates](/mp-command-catalog/commands/view-control#set-point-of-view-from-instrument-updates) · [gRPC contract](/api/grpc/view-control#set-point-of-view-from-instrument-updates)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentId` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| `displayViewControl` | `boolean` | `Display View Control` | true |
| `enableSetViewpointFromInstrumentUpdates` | `boolean` | `Enable Set Viewpoint From Instrument Updates` | false |
| `updateViewPercent` | `number` | `Update View Percent` | 75.000000 |
| `clipBehindProbe` | `boolean` | `Clip Behind Probe` | false |
| `automaticZoomWhenTrapping` | `boolean` | `Automatic Zoom When Trapping` | false |
| `enableDirectionalCloudPoints` | `boolean` | `Enable Directional Cloud Points` | false |
| `angleResetThreshold` | `number` | `Angle Reset Threshold` | 45.000000 |
| `animationSteps` | `number` | `Animation Steps` | 8 |
| `referenceFrameObject` | `CollectionObjectName` | `Reference Frame Object` | Required |
| `useScanStripeForViewFocus` | `boolean` | `Use Scan Stripe for View Focus` | true |
| `zoomFactor` | `number` | `Zoom Factor` | 1.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPointOfViewFromInstrumentUpdatesInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly displayViewControl?: boolean;
  readonly enableSetViewpointFromInstrumentUpdates?: boolean;
  readonly updateViewPercent?: number;
  readonly clipBehindProbe?: boolean;
  readonly automaticZoomWhenTrapping?: boolean;
  readonly enableDirectionalCloudPoints?: boolean;
  readonly angleResetThreshold?: number;
  readonly animationSteps?: number;
  readonly referenceFrameObject: CollectionObjectName;
  readonly useScanStripeForViewFocus?: boolean;
  readonly zoomFactor?: number;
}

function setPointOfViewFromInstrumentUpdates(
  briosa: BriosaClient,
  input: SetPointOfViewFromInstrumentUpdatesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPointOfViewFromInstrumentUpdates(briosa, { instrumentId: ..., referenceFrameObject: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Render Mode Type

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Render Mode Type](/mp-command-catalog/commands/view-control#set-render-mode-type) · [gRPC contract](/api/grpc/view-control#set-render-mode-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `renderingMode` | `RenderModeType` | `Rendering Mode` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRenderModeTypeInput {
  readonly renderingMode: RenderModeType;
}

function setRenderModeType(
  briosa: BriosaClient,
  input: SetRenderModeTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRenderModeType(briosa, { renderingMode: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set SA's Window Pos

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set SA's Window Pos](/mp-command-catalog/commands/view-control#set-sas-window-pos) · [gRPC contract](/api/grpc/view-control#set-sas-window-pos)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `posX` | `number` | `Pos X` | 0 |
| `posY` | `number` | `Pos Y` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetSaWindowPosInput {
  readonly posX?: number;
  readonly posY?: number;
}

function setSaWindowPos(
  briosa: BriosaClient,
  input?: SetSaWindowPosInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setSaWindowPos(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set SA's Window Size

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set SA's Window Size](/mp-command-catalog/commands/view-control#set-sas-window-size) · [gRPC contract](/api/grpc/view-control#set-sas-window-size)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `width` | `number` | `Width` | 0 |
| `height` | `number` | `Height` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetSaWindowSizeInput {
  readonly width?: number;
  readonly height?: number;
}

function setSaWindowSize(
  briosa: BriosaClient,
  input?: SetSaWindowSizeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setSaWindowSize(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set SA's Window State

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set SA's Window State](/mp-command-catalog/commands/view-control#set-sas-window-state) · [gRPC contract](/api/grpc/view-control#set-sas-window-state)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saWindowState` | `WindowState` | `SA Window State` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetSaWindowStateInput {
  readonly saWindowState: WindowState;
}

function setSaWindowState(
  briosa: BriosaClient,
  input: SetSaWindowStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setSaWindowState(briosa, { saWindowState: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Target Labels Use Full Names

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Target Labels Use Full Names](/mp-command-catalog/commands/view-control#set-target-labels-use-full-names) · [gRPC contract](/api/grpc/view-control#set-target-labels-use-full-names)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `useFullNames` | `boolean` | `Use Full Names?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetTargetLabelsUseFullNamesInput {
  readonly useFullNames?: boolean;
}

function setTargetLabelsUseFullNames(
  briosa: BriosaClient,
  input?: SetTargetLabelsUseFullNamesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setTargetLabelsUseFullNames(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Toolkit Visibility

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Toolkit Visibility](/mp-command-catalog/commands/view-control#set-toolkit-visibility) · [gRPC contract](/api/grpc/view-control#set-toolkit-visibility)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `showToolkit` | `boolean` | `Show Toolkit?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetToolkitVisibilityInput {
  readonly showToolkit?: boolean;
}

function setToolkitVisibility(
  briosa: BriosaClient,
  input?: SetToolkitVisibilityInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setToolkitVisibility(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set View Clipping Plane

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set View Clipping Plane](/mp-command-catalog/commands/view-control#set-view-clipping-plane) · [gRPC contract](/api/grpc/view-control#set-view-clipping-plane)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object` | `CollectionObjectName` | `Object` | Required |
| `removeClippingPlane` | `boolean` | `Remove Clipping Plane?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetViewClippingPlaneInput {
  readonly object: CollectionObjectName;
  readonly removeClippingPlane?: boolean;
}

function setViewClippingPlane(
  briosa: BriosaClient,
  input: SetViewClippingPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setViewClippingPlane(briosa, { object: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Working Color

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Working Color](/mp-command-catalog/commands/view-control#set-working-color) · [gRPC contract](/api/grpc/view-control#set-working-color)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `newWorkingColorName` | `Color` | `New Working Color Name` | RGB 255, 0, 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetWorkingColorInput {
  readonly newWorkingColorName?: Color;
}

function setWorkingColor(
  briosa: BriosaClient,
  input?: SetWorkingColorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setWorkingColor(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Working Color Auto Increment

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Working Color Auto Increment](/mp-command-catalog/commands/view-control#set-working-color-auto-increment) · [gRPC contract](/api/grpc/view-control#set-working-color-auto-increment)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `autoIncrement` | `boolean` | `Auto Increment` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetWorkingColorAutoIncrementInput {
  readonly autoIncrement?: boolean;
}

function setWorkingColorAutoIncrement(
  briosa: BriosaClient,
  input?: SetWorkingColorAutoIncrementInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setWorkingColorAutoIncrement(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show / Hide by Object Type

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show / Hide by Object Type](/mp-command-catalog/commands/view-control#show--hide-by-object-type) · [gRPC contract](/api/grpc/view-control#show--hide-by-object-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `allCollections` | `boolean` | `All Collections?` | false |
| `specificCollection` | `CollectionName` | `Specific Collection` | Required |
| `objectTypeToShowHide` | `ObjectType` | `Object Type To Show / Hide` | Any |
| `hideShowFalse` | `boolean` | `Hide? (Show = FALSE)` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideByObjectTypeInput {
  readonly allCollections?: boolean;
  readonly specificCollection: CollectionName;
  readonly objectTypeToShowHide?: ObjectType;
  readonly hideShowFalse?: boolean;
}

function showHideByObjectType(
  briosa: BriosaClient,
  input: ShowHideByObjectTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideByObjectType(briosa, { specificCollection: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show / Hide Callout View

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show / Hide Callout View](/mp-command-catalog/commands/view-control#show--hide-callout-view) · [gRPC contract](/api/grpc/view-control#show--hide-callout-view)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `calloutViewToShow` | `CollectionObjectName` | `Callout View To Show` | Required |
| `showCalloutView` | `boolean` | `Show Callout View?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideCalloutViewInput {
  readonly calloutViewToShow: CollectionObjectName;
  readonly showCalloutView?: boolean;
}

function showHideCalloutView(
  briosa: BriosaClient,
  input: ShowHideCalloutViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideCalloutView(briosa, { calloutViewToShow: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show / Hide Dimension

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show / Hide Dimension](/mp-command-catalog/commands/view-control#show--hide-dimension) · [gRPC contract](/api/grpc/view-control#show--hide-dimension)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimensionName` | `CollectionObjectName` | `Dimension Name` | Required |
| `showDimension` | `boolean` | `Show Dimension?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideDimensionInput {
  readonly dimensionName: CollectionObjectName;
  readonly showDimension?: boolean;
}

function showHideDimension(
  briosa: BriosaClient,
  input: ShowHideDimensionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideDimension(briosa, { dimensionName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show / Hide Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show / Hide Points](/mp-command-catalog/commands/view-control#show--hide-points) · [gRPC contract](/api/grpc/view-control#show--hide-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointNames` | `Iterable<PointName>` | `Point Names` | Required |
| `showHideFalse` | `boolean` | `Show? (Hide = FALSE)` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHidePointsInput {
  readonly pointNames: Iterable<PointName>;
  readonly showHideFalse?: boolean;
}

function showHidePoints(
  briosa: BriosaClient,
  input: ShowHidePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHidePoints(briosa, { pointNames: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show by Object Type

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show by Object Type](/mp-command-catalog/commands/view-control#show-by-object-type) · [gRPC contract](/api/grpc/view-control#show-by-object-type)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectTypeToShow` | `CollectionObjectName` | `Object Type To Show` | Required |
| `allCollections` | `boolean` | `All Collections?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowByObjectTypeInput {
  readonly objectTypeToShow: CollectionObjectName;
  readonly allCollections?: boolean;
}

function showByObjectType(
  briosa: BriosaClient,
  input: ShowByObjectTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showByObjectType(briosa, { objectTypeToShow: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show Items in Tree

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show Items in Tree](/mp-command-catalog/commands/view-control#show-items-in-tree) · [gRPC contract](/api/grpc/view-control#show-items-in-tree)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collapseAllOtherItems` | `boolean` | `Collapse all other Items?` | true |
| `points` | `Iterable<PointName>` | `Points` | Required |
| `objects` | `Iterable<CollectionObjectName>` | `Objects` | Required |
| `instruments` | `Iterable<CollectionInstrumentId>` | `Instruments` | Required |
| `featureChecks` | `Iterable<CollectionObjectName>` | `Feature Checks` | Required |
| `datums` | `Iterable<CollectionObjectName>` | `Datums` | Required |
| `collections` | `Iterable<string>` | `Collections` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowItemsInTreeInput {
  readonly collapseAllOtherItems?: boolean;
  readonly points: Iterable<PointName>;
  readonly objects: Iterable<CollectionObjectName>;
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly featureChecks: Iterable<CollectionObjectName>;
  readonly datums: Iterable<CollectionObjectName>;
  readonly collections: Iterable<string>;
}

function showItemsInTree(
  briosa: BriosaClient,
  input: ShowItemsInTreeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showItemsInTree(briosa, { points: ..., objects: ..., instruments: ..., featureChecks: ..., datums: ..., collections: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show Labels

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show Labels](/mp-command-catalog/commands/view-control#show-labels) · [gRPC contract](/api/grpc/view-control#show-labels)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointLabelsOn` | `boolean` | `Point Labels On?` | false |
| `objectsLabelsOn` | `boolean` | `Objects Labels On?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowLabelsInput {
  readonly pointLabelsOn?: boolean;
  readonly objectsLabelsOn?: boolean;
}

function showLabels(
  briosa: BriosaClient,
  input?: ShowLabelsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showLabels(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show Objects

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show Objects](/mp-command-catalog/commands/view-control#show-objects) · [gRPC contract](/api/grpc/view-control#show-objects)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectsToShow` | `Iterable<CollectionObjectName>` | `Objects To Show` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowObjectsInput {
  readonly objectsToShow: Iterable<CollectionObjectName>;
}

function showObjects(
  briosa: BriosaClient,
  input: ShowObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showObjects(briosa, { objectsToShow: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show/Hide Annotations for Datums

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show/Hide Annotations for Datums](/mp-command-catalog/commands/view-control#showhide-annotations-for-datums) · [gRPC contract](/api/grpc/view-control#showhide-annotations-for-datums)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `datumNameList` | `Iterable<CollectionObjectName>` | `Datum Name List` | Required |
| `show` | `boolean` | `Show?` | false |
| `highlight` | `boolean` | `Highlight?` | false |
| `setInspectionView` | `boolean` | `Set Inspection View?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideAnnotationsForDatumsInput {
  readonly datumNameList: Iterable<CollectionObjectName>;
  readonly show?: boolean;
  readonly highlight?: boolean;
  readonly setInspectionView?: boolean;
}

function showHideAnnotationsForDatums(
  briosa: BriosaClient,
  input: ShowHideAnnotationsForDatumsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideAnnotationsForDatums(briosa, { datumNameList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show/Hide Annotations for Feature Checks

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show/Hide Annotations for Feature Checks](/mp-command-catalog/commands/view-control#showhide-annotations-for-feature-checks) · [gRPC contract](/api/grpc/view-control#showhide-annotations-for-feature-checks)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `featureCheckNameList` | `Iterable<CollectionObjectName>` | `Feature Check Name List` | Required |
| `show` | `boolean` | `Show?` | false |
| `highlight` | `boolean` | `Highlight?` | false |
| `setInspectionView` | `boolean` | `Set Inspection View?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideAnnotationsForFeatureChecksInput {
  readonly featureCheckNameList: Iterable<CollectionObjectName>;
  readonly show?: boolean;
  readonly highlight?: boolean;
  readonly setInspectionView?: boolean;
}

function showHideAnnotationsForFeatureChecks(
  briosa: BriosaClient,
  input: ShowHideAnnotationsForFeatureChecksInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideAnnotationsForFeatureChecks(briosa, { featureCheckNameList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show/Hide Inspection Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show/Hide Inspection Bar](/mp-command-catalog/commands/view-control#showhide-inspection-bar) · [gRPC contract](/api/grpc/view-control#showhide-inspection-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `showInspectionBar` | `boolean` | `Show Inspection Bar?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideInspectionBarInput {
  readonly showInspectionBar?: boolean;
}

function showHideInspectionBar(
  briosa: BriosaClient,
  input?: ShowHideInspectionBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideInspectionBar(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show/Hide Instrument Interface

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show/Hide Instrument Interface](/mp-command-catalog/commands/view-control#showhide-instrument-interface) · [gRPC contract](/api/grpc/view-control#showhide-instrument-interface)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentId` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| `minimizeInterface` | `boolean` | `Minimize Interface?` | false |
| `hideInterface` | `boolean` | `Hide Interface?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideInstrumentInterfaceInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly minimizeInterface?: boolean;
  readonly hideInterface?: boolean;
}

function showHideInstrumentInterface(
  briosa: BriosaClient,
  input: ShowHideInstrumentInterfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideInstrumentInterface(briosa, { instrumentId: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show/Hide Instrument Probe Tip

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show/Hide Instrument Probe Tip](/mp-command-catalog/commands/view-control#showhide-instrument-probe-tip) · [gRPC contract](/api/grpc/view-control#showhide-instrument-probe-tip)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `showInstrumentProbeTip` | `boolean` | `Show Instrument Probe Tip?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideInstrumentProbeTipInput {
  readonly showInstrumentProbeTip?: boolean;
}

function showHideInstrumentProbeTip(
  briosa: BriosaClient,
  input?: ShowHideInstrumentProbeTipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideInstrumentProbeTip(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show/Hide Instruments

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show/Hide Instruments](/mp-command-catalog/commands/view-control#showhide-instruments) · [gRPC contract](/api/grpc/view-control#showhide-instruments)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentIDs` | `Iterable<CollectionInstrumentId>` | `Instrument IDs` | Required |
| `showInstruments` | `boolean` | `Show Instruments?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideInstrumentsInput {
  readonly instrumentIDs: Iterable<CollectionInstrumentId>;
  readonly showInstruments?: boolean;
}

function showHideInstruments(
  briosa: BriosaClient,
  input: ShowHideInstrumentsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideInstruments(briosa, { instrumentIDs: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show/Hide Relationship Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show/Hide Relationship Report](/mp-command-catalog/commands/view-control#showhide-relationship-report) · [gRPC contract](/api/grpc/view-control#showhide-relationship-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionName` | `CollectionName` | `Collection Name` | Required |
| `showRelationshipReport` | `boolean` | `Show Relationship Report` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideRelationshipReportInput {
  readonly collectionName: CollectionName;
  readonly showRelationshipReport?: boolean;
}

function showHideRelationshipReport(
  briosa: BriosaClient,
  input: ShowHideRelationshipReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideRelationshipReport(briosa, { collectionName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Show/Hide Relationship Watch

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Show/Hide Relationship Watch](/mp-command-catalog/commands/view-control#showhide-relationship-watch) · [gRPC contract](/api/grpc/view-control#showhide-relationship-watch)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `showRelationshipWatch` | `boolean` | `Show Relationship Watch` | false |
| `relationshipWatchWindowProperties` | `CollectionObjectName` | `Relationship Watch Window Properties` | Required |
| `windowTopLeftXPosition` | `number` | `Window Top Left X Position` | 0 |
| `windowTopLeftYPosition` | `number` | `Window Top Left Y Position` | 0 |
| `windowWidth` | `number` | `Window Width` | 0 |
| `windowHeight` | `number` | `Window Height` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ShowHideRelationshipWatchInput {
  readonly relationshipName: CollectionObjectName;
  readonly showRelationshipWatch?: boolean;
  readonly relationshipWatchWindowProperties: CollectionObjectName;
  readonly windowTopLeftXPosition?: number;
  readonly windowTopLeftYPosition?: number;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
}

function showHideRelationshipWatch(
  briosa: BriosaClient,
  input: ShowHideRelationshipWatchInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await showHideRelationshipWatch(briosa, { relationshipName: ..., relationshipWatchWindowProperties: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
