---
title: View Control
description: Unreleased dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# View Control

[SA 2026.1.0529.7](/api/dotnet/view-control) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/view-control)

This reference covers **SA 2024.1.0508.5**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Auto-Scale {/* #auto-scale */}

[MP Catalog](/mp-command-catalog/commands/view-control#auto-scale) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#auto-scale)

```csharp
public Task AutoScaleAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Center Graphics About Object(s) {/* #center-graphics-about-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#center-graphics-about-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#center-graphics-about-objects)

```csharp
public Task CenterGraphicsAboutObjectsAsync(
        ObjectType objectType,
        string collectionWildcardCriteria = "*",
        string objectWildcardCriteria = "*",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Center Graphics About Point {/* #center-graphics-about-point */}

[MP Catalog](/mp-command-catalog/commands/view-control#center-graphics-about-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#center-graphics-about-point)

```csharp
public Task CenterGraphicsAboutPointAsync(
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Define point of view {/* #define-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#define-point-of-view) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#define-point-of-view)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Clipping Planes {/* #get-active-clipping-planes */}

[MP Catalog](/mp-command-catalog/commands/view-control#get-active-clipping-planes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#get-active-clipping-planes)

```csharp
public Task<CollectionObjectName[]> GetActiveClippingPlanesAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get point of view parameters {/* #get-point-of-view-parameters */}

[MP Catalog](/mp-command-catalog/commands/view-control#get-point-of-view-parameters) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#get-point-of-view-parameters)

```csharp
public Task<GetPointOfViewParametersResult> GetPointOfViewParametersAsync(
        ViewName viewName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Hide All Callout Views {/* #hide-all-callout-views */}

[MP Catalog](/mp-command-catalog/commands/view-control#hide-all-callout-views) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#hide-all-callout-views)

```csharp
public Task HideAllCalloutViewsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Hide Objects {/* #hide-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#hide-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#hide-objects)

```csharp
public Task HideObjectsAsync(
        IEnumerable<CollectionObjectName> objectsToHide,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Highlight Objects {/* #highlight-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#highlight-objects)

```csharp
public Task HighlightObjectsAsync(
        IEnumerable<CollectionObjectName> objectNames,
        bool highLightObjects = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `objectNames` | An empty selection clears all highlights. |

## Highlight Point {/* #highlight-point */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#highlight-point)

```csharp
public Task HighlightPointAsync(
        PointName pointName,
        bool showPoint = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `pointName` | An empty selection clears all highlights. |

## Highlight Relationships {/* #highlight-relationships */}

[MP Catalog](/mp-command-catalog/commands/view-control#highlight-relationships) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#highlight-relationships)

```csharp
public Task HighlightRelationshipsAsync(
        IEnumerable<CollectionItemName> relationships,
        bool highLightRelationships = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `relationships` | An empty selection clears all highlights. |

## Load Ribbon Bar from XML File {/* #load-ribbon-bar-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/view-control#load-ribbon-bar-from-xml-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#load-ribbon-bar-from-xml-file)

```csharp
public Task LoadRibbonBarFromXmlFileAsync(
        FileReference filePath,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Views {/* #refresh-views */}

[MP Catalog](/mp-command-catalog/commands/view-control#refresh-views) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#refresh-views)

```csharp
public Task RefreshViewsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reset Ribbon Bar to Default {/* #reset-ribbon-bar-to-default */}

[MP Catalog](/mp-command-catalog/commands/view-control#reset-ribbon-bar-to-default) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#reset-ribbon-bar-to-default)

```csharp
public Task ResetRibbonBarToDefaultAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save point of view {/* #save-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#save-point-of-view) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#save-point-of-view)

```csharp
public Task SavePointOfViewAsync(
        ViewName viewName,
        bool restoreZoomSettings = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Background Color {/* #set-background-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-background-color) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-background-color)

```csharp
public Task SetBackgroundColorAsync(
        Color solidColorName,
        Color gradientStartColorName,
        Color gradientEndColorName,
        Color highlightColor,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set MP's Window State {/* #set-mps-window-state */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-mps-window-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-mps-window-state)

```csharp
public Task SetMpWindowStateAsync(
        WindowState mpWindowState,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object(s) Color {/* #set-objects-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-objects-color) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-objects-color)

```csharp
public Task SetObjectsColorAsync(
        IEnumerable<CollectionObjectName> objectsToChange,
        Color newWorkingColorName,
        bool autoIncrement = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object(s) Translucency {/* #set-objects-translucency */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-objects-translucency) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-objects-translucency)

```csharp
public Task SetObjectsTranslucencyAsync(
        IEnumerable<CollectionObjectName> objectsToChange,
        TranslucencyType renderingType,
        double opacityValue = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set point of view {/* #set-point-of-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-point-of-view)

```csharp
public Task SetPointOfViewAsync(
        ViewName viewName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point of View from Frame {/* #set-point-of-view-from-frame */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view-from-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-point-of-view-from-frame)

```csharp
public Task SetPointOfViewFromFrameAsync(
        CollectionObjectName frame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point of View from Instrument Updates {/* #set-point-of-view-from-instrument-updates */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-point-of-view-from-instrument-updates) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-point-of-view-from-instrument-updates)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Render Mode Type {/* #set-render-mode-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-render-mode-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-render-mode-type)

```csharp
public Task SetRenderModeTypeAsync(
        RenderModeType renderingMode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window Pos {/* #set-sas-window-pos */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-pos) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-sas-window-pos)

```csharp
public Task SetSaWindowPosAsync(
        int posX = 0,
        int posY = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window Size {/* #set-sas-window-size */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-size) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-sas-window-size)

```csharp
public Task SetSaWindowSizeAsync(
        int width = 0,
        int height = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set SA's Window State {/* #set-sas-window-state */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-sas-window-state) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-sas-window-state)

```csharp
public Task SetSaWindowStateAsync(
        WindowState saWindowState,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Target Labels Use Full Names {/* #set-target-labels-use-full-names */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-target-labels-use-full-names) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-target-labels-use-full-names)

```csharp
public Task SetTargetLabelsUseFullNamesAsync(
        bool useFullNames = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Toolkit Visibility {/* #set-toolkit-visibility */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-toolkit-visibility) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-toolkit-visibility)

```csharp
public Task SetToolkitVisibilityAsync(
        bool showToolkit = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set View Clipping Plane {/* #set-view-clipping-plane */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-view-clipping-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-view-clipping-plane)

```csharp
public Task SetViewClippingPlaneAsync(
        CollectionObjectName @object,
        bool removeClippingPlane = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Color {/* #set-working-color */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-working-color) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-working-color)

```csharp
public Task SetWorkingColorAsync(
        Color newWorkingColorName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Color Auto Increment {/* #set-working-color-auto-increment */}

[MP Catalog](/mp-command-catalog/commands/view-control#set-working-color-auto-increment) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#set-working-color-auto-increment)

```csharp
public Task SetWorkingColorAutoIncrementAsync(
        bool autoIncrement = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide by Object Type {/* #show--hide-by-object-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-by-object-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#show--hide-by-object-type)

```csharp
public Task ShowHideByObjectTypeAsync(
        bool allCollections,
        CollectionName specificCollection,
        ObjectType objectTypeToShowHide,
        bool hide = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `hide` | False shows the objects. |

## Show / Hide Callout View {/* #show--hide-callout-view */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-callout-view) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#show--hide-callout-view)

```csharp
public Task ShowHideCalloutViewAsync(
        CollectionItemName calloutViewToShow,
        bool showCalloutView = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide Dimension {/* #show--hide-dimension */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-dimension) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#show--hide-dimension)

```csharp
public Task ShowHideDimensionAsync(
        CollectionItemName dimensionName,
        bool showDimension = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show / Hide Points {/* #show--hide-points */}

[MP Catalog](/mp-command-catalog/commands/view-control#show--hide-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#show--hide-points)

```csharp
public Task ShowHidePointsAsync(
        IEnumerable<PointName> pointNames,
        bool show = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `show` | False hides the points. |

## Show by Object Type {/* #show-by-object-type */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-by-object-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#show-by-object-type)

```csharp
public Task ShowByObjectTypeAsync(
        CollectionObjectName objectTypeToShow,
        bool allCollections = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Items in Tree {/* #show-items-in-tree */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-items-in-tree) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#show-items-in-tree)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Labels {/* #show-labels */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-labels) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#show-labels)

```csharp
public Task ShowLabelsAsync(
        bool pointLabelsOn = false,
        bool objectsLabelsOn = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show Objects {/* #show-objects */}

[MP Catalog](/mp-command-catalog/commands/view-control#show-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#show-objects)

```csharp
public Task ShowObjectsAsync(
        IEnumerable<CollectionObjectName> objectsToShow,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Annotations for Datums {/* #showhide-annotations-for-datums */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-annotations-for-datums) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#showhide-annotations-for-datums)

```csharp
public Task ShowHideAnnotationsForDatumsAsync(
        IEnumerable<CollectionObjectName> datumNameList,
        bool show = false,
        bool highlight = false,
        bool setInspectionView = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Annotations for Feature Checks {/* #showhide-annotations-for-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-annotations-for-feature-checks) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#showhide-annotations-for-feature-checks)

```csharp
public Task ShowHideAnnotationsForFeatureChecksAsync(
        IEnumerable<CollectionItemName> featureCheckNameList,
        bool show = false,
        bool highlight = false,
        bool setInspectionView = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Inspection Bar {/* #showhide-inspection-bar */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-inspection-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#showhide-inspection-bar)

```csharp
public Task ShowHideInspectionBarAsync(
        bool showInspectionBar = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instrument Interface {/* #showhide-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instrument-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#showhide-instrument-interface)

```csharp
public Task ShowHideInstrumentInterfaceAsync(
        CollectionInstrumentId instrumentId,
        bool minimizeInterface = false,
        bool hideInterface = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instrument Probe Tip {/* #showhide-instrument-probe-tip */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instrument-probe-tip) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#showhide-instrument-probe-tip)

```csharp
public Task ShowHideInstrumentProbeTipAsync(
        bool showInstrumentProbeTip = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Instruments {/* #showhide-instruments */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-instruments) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#showhide-instruments)

```csharp
public Task ShowHideInstrumentsAsync(
        IEnumerable<CollectionInstrumentId> instrumentIDs,
        bool showInstruments = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Relationship Report {/* #showhide-relationship-report */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-relationship-report) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#showhide-relationship-report)

```csharp
public Task ShowHideRelationshipReportAsync(
        CollectionName collectionName,
        bool showRelationshipReport = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Show/Hide Relationship Watch {/* #showhide-relationship-watch */}

[MP Catalog](/mp-command-catalog/commands/view-control#showhide-relationship-watch) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/view-control#showhide-relationship-watch)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/d9dc263acf3e41fe8fea6e88533a954394eb9ad4/targets/2024.1.0508.5)
