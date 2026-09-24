---
title: View Control
description: Unreleased javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# View Control

[SA 2026.1.0529.7](/api/javascript/view-control) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/view-control)

This reference covers **SA 2026.1.0529.7**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Auto-Scale {/* #auto-scale */}

[MP Catalog](/mp-command-catalog/commands/view-control#auto-scale) · [gRPC Contract](/api/grpc/view-control#auto-scale)

```ts
export declare function autoScale(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Center Graphics About Object(s) {/* #center-graphics-about-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#center-graphics-about-objects) · [gRPC Contract](/api/grpc/view-control#center-graphics-about-objects)

```ts
export interface CenterGraphicsAboutObjectsInput {
  readonly objectType?: ObjectType;
  readonly collectionWildcardCriteria?: string;
  readonly objectWildcardCriteria?: string;
}

export declare function centerGraphicsAboutObjects(
  briosa: BriosaClient,
  input: CenterGraphicsAboutObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Center Graphics About Point {/* #center-graphics-about-point */}

[MP Catalog](/mp-command-catalog/commands/view-control#center-graphics-about-point) · [gRPC Contract](/api/grpc/view-control#center-graphics-about-point)

```ts
export interface CenterGraphicsAboutPointInput {
  readonly pointName: PointName;
}

export declare function centerGraphicsAboutPoint(
  briosa: BriosaClient,
  input: CenterGraphicsAboutPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Define point of view {/* #define-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#define-point-of-view) · [gRPC Contract](/api/grpc/view-control#define-point-of-view)

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

export declare function definePointOfView(
  briosa: BriosaClient,
  input: DefinePointOfViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Clipping Planes {/* #get-active-clipping-planes */}

[MP Catalog](/mp-command-catalog/commands/view-control#get-active-clipping-planes) · [gRPC Contract](/api/grpc/view-control#get-active-clipping-planes)

```ts
export declare function getActiveClippingPlanes(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get point of view parameters {/* #get-point-of-view-parameters */}

[MP Catalog](/mp-command-catalog/commands/view-control#get-point-of-view-parameters) · [gRPC Contract](/api/grpc/view-control#get-point-of-view-parameters)

```ts
export interface GetPointOfViewParametersInput {
  readonly viewName: ViewName;
}

export declare function getPointOfViewParameters(
  briosa: BriosaClient,
  input: GetPointOfViewParametersInput,
  options?: BriosaCallOptions,
): Promise<GetPointOfViewParametersResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Hide All Callout Views {/* #hide-all-callout-views */}

[MP Catalog](/mp-command-catalog/commands/view-control#hide-all-callout-views) · [gRPC Contract](/api/grpc/view-control#hide-all-callout-views)

```ts
export declare function hideAllCalloutViews(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Hide Objects {/* #hide-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#hide-objects) · [gRPC Contract](/api/grpc/view-control#hide-objects)

```ts
export interface HideObjectsInput {
  readonly objectsToHide: Iterable<CollectionObjectName>;
}

export declare function hideObjects(
  briosa: BriosaClient,
  input: HideObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Highlight Objects {/* #highlight-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-objects) · [gRPC Contract](/api/grpc/view-control#highlight-objects)

```ts
export interface HighlightObjectsInput {
  readonly objectNames: Iterable<CollectionObjectName>;
  readonly highLightObjects?: boolean;
}

export declare function highlightObjects(
  briosa: BriosaClient,
  input: HighlightObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `objectNames` | An empty selection clears all highlights. |

## Highlight Point {/* #highlight-point */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-point) · [gRPC Contract](/api/grpc/view-control#highlight-point)

```ts
export interface HighlightPointInput {
  readonly pointName: PointName;
  readonly showPoint?: boolean;
}

export declare function highlightPoint(
  briosa: BriosaClient,
  input: HighlightPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `pointName` | An empty selection clears all highlights. |

## Highlight Relationships {/* #highlight-relationships */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-relationships) · [gRPC Contract](/api/grpc/view-control#highlight-relationships)

```ts
export interface HighlightRelationshipsInput {
  readonly relationships: Iterable<CollectionItemName>;
  readonly highLightRelationships?: boolean;
}

export declare function highlightRelationships(
  briosa: BriosaClient,
  input: HighlightRelationshipsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `relationships` | An empty selection clears all highlights. |

## Load Ribbon Bar from XML File {/* #load-ribbon-bar-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/view-control#load-ribbon-bar-from-xml-file) · [gRPC Contract](/api/grpc/view-control#load-ribbon-bar-from-xml-file)

```ts
export interface LoadRibbonBarFromXmlFileInput {
  readonly filePath: FileReference;
}

export declare function loadRibbonBarFromXmlFile(
  briosa: BriosaClient,
  input: LoadRibbonBarFromXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Views {/* #refresh-views */}

[MP Catalog](/mp-command-catalog/commands/view-control#refresh-views) · [gRPC Contract](/api/grpc/view-control#refresh-views)

```ts
export declare function refreshViews(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reset Ribbon Bar to Default {/* #reset-ribbon-bar-to-default */}

[MP Catalog](/mp-command-catalog/commands/view-control#reset-ribbon-bar-to-default) · [gRPC Contract](/api/grpc/view-control#reset-ribbon-bar-to-default)

```ts
export declare function resetRibbonBarToDefault(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save point of view {/* #save-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#save-point-of-view) · [gRPC Contract](/api/grpc/view-control#save-point-of-view)

```ts
export interface SavePointOfViewInput {
  readonly viewName: ViewName;
  readonly restoreZoomSettings?: boolean;
}

export declare function savePointOfView(
  briosa: BriosaClient,
  input: SavePointOfViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Background Color {/* #set-background-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-background-color) · [gRPC Contract](/api/grpc/view-control#set-background-color)

```ts
export interface SetBackgroundColorInput {
  readonly solidColorName?: Color;
  readonly gradientStartColorName?: Color;
  readonly gradientEndColorName?: Color;
  readonly highlightColor?: Color;
}

export declare function setBackgroundColor(
  briosa: BriosaClient,
  input: SetBackgroundColorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set MP's Window State {/* #set-mps-window-state */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-mps-window-state) · [gRPC Contract](/api/grpc/view-control#set-mps-window-state)

```ts
export interface SetMpWindowStateInput {
  readonly mpWindowState: WindowState;
}

export declare function setMpWindowState(
  briosa: BriosaClient,
  input: SetMpWindowStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object(s) Color {/* #set-objects-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-objects-color) · [gRPC Contract](/api/grpc/view-control#set-objects-color)

```ts
export interface SetObjectsColorInput {
  readonly objectsToChange: Iterable<CollectionObjectName>;
  readonly newWorkingColorName?: Color;
  readonly autoIncrement?: boolean;
}

export declare function setObjectsColor(
  briosa: BriosaClient,
  input: SetObjectsColorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object(s) Translucency {/* #set-objects-translucency */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-objects-translucency) · [gRPC Contract](/api/grpc/view-control#set-objects-translucency)

```ts
export interface SetObjectsTranslucencyInput {
  readonly objectsToChange: Iterable<CollectionObjectName>;
  readonly renderingType: TranslucencyType;
  readonly opacityValue?: number;
}

export declare function setObjectsTranslucency(
  briosa: BriosaClient,
  input: SetObjectsTranslucencyInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set point of view {/* #set-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view) · [gRPC Contract](/api/grpc/view-control#set-point-of-view)

```ts
export interface SetPointOfViewInput {
  readonly viewName: ViewName;
}

export declare function setPointOfView(
  briosa: BriosaClient,
  input: SetPointOfViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point of View from Frame {/* #set-point-of-view-from-frame */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view-from-frame) · [gRPC Contract](/api/grpc/view-control#set-point-of-view-from-frame)

```ts
export interface SetPointOfViewFromFrameInput {
  readonly frame: CollectionObjectName;
}

export declare function setPointOfViewFromFrame(
  briosa: BriosaClient,
  input: SetPointOfViewFromFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point of View from Instrument Updates {/* #set-point-of-view-from-instrument-updates */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view-from-instrument-updates) · [gRPC Contract](/api/grpc/view-control#set-point-of-view-from-instrument-updates)

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

export declare function setPointOfViewFromInstrumentUpdates(
  briosa: BriosaClient,
  input: SetPointOfViewFromInstrumentUpdatesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Render Mode Type {/* #set-render-mode-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-render-mode-type) · [gRPC Contract](/api/grpc/view-control#set-render-mode-type)

```ts
export interface SetRenderModeTypeInput {
  readonly renderingMode: RenderModeType;
}

export declare function setRenderModeType(
  briosa: BriosaClient,
  input: SetRenderModeTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window Pos {/* #set-sas-window-pos */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-pos) · [gRPC Contract](/api/grpc/view-control#set-sas-window-pos)

```ts
export interface SetSaWindowPosInput {
  readonly posX?: number;
  readonly posY?: number;
}

export declare function setSaWindowPos(
  briosa: BriosaClient,
  input: SetSaWindowPosInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window Size {/* #set-sas-window-size */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-size) · [gRPC Contract](/api/grpc/view-control#set-sas-window-size)

```ts
export interface SetSaWindowSizeInput {
  readonly width?: number;
  readonly height?: number;
}

export declare function setSaWindowSize(
  briosa: BriosaClient,
  input: SetSaWindowSizeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window State {/* #set-sas-window-state */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-state) · [gRPC Contract](/api/grpc/view-control#set-sas-window-state)

```ts
export interface SetSaWindowStateInput {
  readonly saWindowState: WindowState;
}

export declare function setSaWindowState(
  briosa: BriosaClient,
  input: SetSaWindowStateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Target Labels Use Full Names {/* #set-target-labels-use-full-names */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-target-labels-use-full-names) · [gRPC Contract](/api/grpc/view-control#set-target-labels-use-full-names)

```ts
export interface SetTargetLabelsUseFullNamesInput {
  readonly useFullNames?: boolean;
}

export declare function setTargetLabelsUseFullNames(
  briosa: BriosaClient,
  input: SetTargetLabelsUseFullNamesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Toolkit Visibility {/* #set-toolkit-visibility */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-toolkit-visibility) · [gRPC Contract](/api/grpc/view-control#set-toolkit-visibility)

```ts
export interface SetToolkitVisibilityInput {
  readonly showToolkit?: boolean;
}

export declare function setToolkitVisibility(
  briosa: BriosaClient,
  input: SetToolkitVisibilityInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set View Clipping Plane {/* #set-view-clipping-plane */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-view-clipping-plane) · [gRPC Contract](/api/grpc/view-control#set-view-clipping-plane)

```ts
export interface SetViewClippingPlaneInput {
  readonly object: CollectionObjectName;
  readonly removeClippingPlane?: boolean;
}

export declare function setViewClippingPlane(
  briosa: BriosaClient,
  input: SetViewClippingPlaneInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Color {/* #set-working-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-working-color) · [gRPC Contract](/api/grpc/view-control#set-working-color)

```ts
export interface SetWorkingColorInput {
  readonly newWorkingColorName?: Color;
}

export declare function setWorkingColor(
  briosa: BriosaClient,
  input: SetWorkingColorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Color Auto Increment {/* #set-working-color-auto-increment */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-working-color-auto-increment) · [gRPC Contract](/api/grpc/view-control#set-working-color-auto-increment)

```ts
export interface SetWorkingColorAutoIncrementInput {
  readonly autoIncrement?: boolean;
}

export declare function setWorkingColorAutoIncrement(
  briosa: BriosaClient,
  input: SetWorkingColorAutoIncrementInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide by Object Type {/* #show--hide-by-object-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-by-object-type) · [gRPC Contract](/api/grpc/view-control#show--hide-by-object-type)

```ts
export interface ShowHideByObjectTypeInput {
  readonly allCollections?: boolean;
  readonly specificCollection: CollectionName;
  readonly objectTypeToShowHide?: ObjectType;
  readonly hide?: boolean;
}

export declare function showHideByObjectType(
  briosa: BriosaClient,
  input: ShowHideByObjectTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `hide` | False shows the objects. |

## Show / Hide Callout View {/* #show--hide-callout-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-callout-view) · [gRPC Contract](/api/grpc/view-control#show--hide-callout-view)

```ts
export interface ShowHideCalloutViewInput {
  readonly calloutViewToShow: CollectionItemName;
  readonly showCalloutView?: boolean;
}

export declare function showHideCalloutView(
  briosa: BriosaClient,
  input: ShowHideCalloutViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide Dimension {/* #show--hide-dimension */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-dimension) · [gRPC Contract](/api/grpc/view-control#show--hide-dimension)

```ts
export interface ShowHideDimensionInput {
  readonly dimensionName: CollectionItemName;
  readonly showDimension?: boolean;
}

export declare function showHideDimension(
  briosa: BriosaClient,
  input: ShowHideDimensionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide Points {/* #show--hide-points */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-points) · [gRPC Contract](/api/grpc/view-control#show--hide-points)

```ts
export interface ShowHidePointsInput {
  readonly pointNames: Iterable<PointName>;
  readonly show?: boolean;
}

export declare function showHidePoints(
  briosa: BriosaClient,
  input: ShowHidePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `show` | False hides the points. |

## Show by Object Type {/* #show-by-object-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-by-object-type) · [gRPC Contract](/api/grpc/view-control#show-by-object-type)

```ts
export interface ShowByObjectTypeInput {
  readonly objectTypeToShow: CollectionObjectName;
  readonly allCollections?: boolean;
}

export declare function showByObjectType(
  briosa: BriosaClient,
  input: ShowByObjectTypeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Items in Tree {/* #show-items-in-tree */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-items-in-tree) · [gRPC Contract](/api/grpc/view-control#show-items-in-tree)

```ts
export interface ShowItemsInTreeInput {
  readonly collapseAllOtherItems?: boolean;
  readonly points: Iterable<PointName>;
  readonly objects: Iterable<CollectionObjectName>;
  readonly instruments: Iterable<CollectionInstrumentId>;
  readonly featureChecks: Iterable<CollectionItemName>;
  readonly datums: Iterable<CollectionObjectName>;
  readonly collections: Iterable<string>;
}

export declare function showItemsInTree(
  briosa: BriosaClient,
  input: ShowItemsInTreeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Labels {/* #show-labels */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-labels) · [gRPC Contract](/api/grpc/view-control#show-labels)

```ts
export interface ShowLabelsInput {
  readonly pointLabelsOn?: boolean;
  readonly objectsLabelsOn?: boolean;
}

export declare function showLabels(
  briosa: BriosaClient,
  input: ShowLabelsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Objects {/* #show-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-objects) · [gRPC Contract](/api/grpc/view-control#show-objects)

```ts
export interface ShowObjectsInput {
  readonly objectsToShow: Iterable<CollectionObjectName>;
}

export declare function showObjects(
  briosa: BriosaClient,
  input: ShowObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Annotations for Datums {/* #showhide-annotations-for-datums */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-annotations-for-datums) · [gRPC Contract](/api/grpc/view-control#showhide-annotations-for-datums)

```ts
export interface ShowHideAnnotationsForDatumsInput {
  readonly datumNameList: Iterable<CollectionObjectName>;
  readonly show?: boolean;
  readonly highlight?: boolean;
  readonly setInspectionView?: boolean;
}

export declare function showHideAnnotationsForDatums(
  briosa: BriosaClient,
  input: ShowHideAnnotationsForDatumsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Annotations for Feature Checks {/* #showhide-annotations-for-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-annotations-for-feature-checks) · [gRPC Contract](/api/grpc/view-control#showhide-annotations-for-feature-checks)

```ts
export interface ShowHideAnnotationsForFeatureChecksInput {
  readonly featureCheckNameList: Iterable<CollectionItemName>;
  readonly show?: boolean;
  readonly highlight?: boolean;
  readonly setInspectionView?: boolean;
}

export declare function showHideAnnotationsForFeatureChecks(
  briosa: BriosaClient,
  input: ShowHideAnnotationsForFeatureChecksInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Inspection Bar {/* #showhide-inspection-bar */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-inspection-bar) · [gRPC Contract](/api/grpc/view-control#showhide-inspection-bar)

```ts
export interface ShowHideInspectionBarInput {
  readonly showInspectionBar?: boolean;
}

export declare function showHideInspectionBar(
  briosa: BriosaClient,
  input: ShowHideInspectionBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instrument Interface {/* #showhide-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instrument-interface) · [gRPC Contract](/api/grpc/view-control#showhide-instrument-interface)

```ts
export interface ShowHideInstrumentInterfaceInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly minimizeInterface?: boolean;
  readonly hideInterface?: boolean;
}

export declare function showHideInstrumentInterface(
  briosa: BriosaClient,
  input: ShowHideInstrumentInterfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instrument Probe Tip {/* #showhide-instrument-probe-tip */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instrument-probe-tip) · [gRPC Contract](/api/grpc/view-control#showhide-instrument-probe-tip)

```ts
export interface ShowHideInstrumentProbeTipInput {
  readonly showInstrumentProbeTip?: boolean;
}

export declare function showHideInstrumentProbeTip(
  briosa: BriosaClient,
  input: ShowHideInstrumentProbeTipInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instruments {/* #showhide-instruments */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instruments) · [gRPC Contract](/api/grpc/view-control#showhide-instruments)

```ts
export interface ShowHideInstrumentsInput {
  readonly instrumentIDs: Iterable<CollectionInstrumentId>;
  readonly showInstruments?: boolean;
}

export declare function showHideInstruments(
  briosa: BriosaClient,
  input: ShowHideInstrumentsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Relationship Report {/* #showhide-relationship-report */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-relationship-report) · [gRPC Contract](/api/grpc/view-control#showhide-relationship-report)

```ts
export interface ShowHideRelationshipReportInput {
  readonly collectionName: CollectionName;
  readonly showRelationshipReport?: boolean;
}

export declare function showHideRelationshipReport(
  briosa: BriosaClient,
  input: ShowHideRelationshipReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Relationship Watch {/* #showhide-relationship-watch */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-relationship-watch) · [gRPC Contract](/api/grpc/view-control#showhide-relationship-watch)

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

export declare function showHideRelationshipWatch(
  briosa: BriosaClient,
  input: ShowHideRelationshipWatchInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/f98eef683c941bf289c1d0ec411c13a1903bcca4/targets/2026.1.0529.7)
