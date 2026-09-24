---
title: Construction Operations / Callout Views and Callouts
description: Unreleased dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Callout Views and Callouts

[SA 2026.1.0529.7](/api/dotnet/construction-operations-callout-views-and-callouts) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-callout-views-and-callouts)

This reference covers **SA 2026.1.0529.7**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Create Vector Callout {/* #create-vector-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-vector-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-vector-callout)

```csharp
public Task CreateVectorCalloutAsync(
        CollectionItemName destinationCalloutView,
        CollectionObjectName vectorGroupName,
        string vectorName,
        double viewXPosition = 0.0,
        double viewYPosition = 0.0,
        bool showCollection = false,
        bool showVectorGroup = false,
        bool showVectorName = true,
        bool showDx = true,
        bool showDy = true,
        bool showDz = true,
        bool showDMag = true,
        bool showToleranceColor = true,
        bool showOutOfToleranceValue = false,
        bool showToleranceRange = false,
        bool showVectorColor = false,
        bool showStartPoint = false,
        bool showEndPoint = false,
        bool showUnits = false,
        IEnumerable<string>? additionalNotes = null,
        bool attachCalloutToEndPoint = false,
        bool useDefaultPlacement = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Min/Max Vector Group Callout {/* #create-minmax-vector-group-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout)

```csharp
public Task CreateMinMaxVectorGroupCalloutAsync(
        CollectionItemName destinationCalloutView,
        CollectionObjectName vectorGroupName,
        int numberOfVectorsWithHighestMag = 1,
        int numberOfVectorsWithLowestMag = 1,
        bool showCollection = false,
        bool showVectorGroup = false,
        bool showVectorName = true,
        bool showDx = false,
        bool showDy = false,
        bool showDz = false,
        bool showDMag = true,
        bool showToleranceColor = true,
        bool toleranceColorBlueGreenRed = false,
        bool showOutOfToleranceValue = true,
        bool showToleranceRange = false,
        bool showVectorColor = true,
        bool showStartPoint = false,
        bool showEndPoint = false,
        bool showUnits = false,
        bool attachCalloutToEndPoint = true,
        bool useDefaultPlacement = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Callout {/* #create-point-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-point-callout)

```csharp
public Task CreatePointCalloutAsync(
        CollectionItemName destinationCalloutView,
        PointName point,
        double viewXPosition = 0.0,
        double viewYPosition = 0.0,
        bool showPointCollection = false,
        bool showPointGroup = true,
        bool showPointTarget = true,
        bool showX = true,
        bool showY = true,
        bool showZ = true,
        bool showUnits = false,
        bool showUx = false,
        bool showUy = false,
        bool showUz = false,
        bool showUMag = false,
        CoordinateSystemType desiredCoordinateSystem = CoordinateSystemType.Cartesian,
        IEnumerable<string>? notes = null,
        bool useDefaultPlacement = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `showX` | MP qualifier: R. |
| `showY` | MP qualifier: Theta. |
| `showZ` | MP qualifier: Phi. |
| `showUx` | MP qualifier: Ur. |
| `showUy` | MP qualifier: Utheta. |
| `showUz` | MP qualifier: Uphi. |

## Create Point Comparison Callout {/* #create-point-comparison-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-comparison-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-point-comparison-callout)

```csharp
public Task CreatePointComparisonCalloutAsync(
        CollectionItemName destinationCalloutView,
        PointName firstPoint,
        PointName secondPoint,
        double viewXPosition = 0.0,
        double viewYPosition = 0.0,
        bool showFirstPointCollection = false,
        bool showFirstPointGroup = true,
        bool showFirstPointTarget = true,
        bool showFirstPointCoordinates = false,
        bool showSecondPointCollection = false,
        bool showSecondPointGroup = true,
        bool showSecondPointTarget = true,
        bool showSecondPointCoordinates = false,
        bool showDx = true,
        bool showDy = true,
        bool showDz = true,
        bool showDMag = true,
        string? additionalXComments = null,
        string? additionalYComments = null,
        string? additionalZComments = null,
        IEnumerable<string>? additionalNotes = null,
        bool useDefaultPlacement = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Relationship Callout {/* #create-relationship-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-relationship-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-relationship-callout)

```csharp
public Task CreateRelationshipCalloutAsync(
        CollectionItemName destinationCalloutView,
        CollectionItemName relationshipName,
        double viewXPosition = 0.0,
        double viewYPosition = 0.0,
        IEnumerable<string>? additionalNotes = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Picture Callout {/* #create-picture-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-picture-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-picture-callout)

```csharp
public Task CreatePictureCalloutAsync(
        CollectionItemName destinationCalloutView,
        CollectionItemName pictureName,
        double viewXPosition = 0.4,
        double viewYPosition = 0.6,
        int scaleImagePercent = 100,
        CollectionItemName? objectForCalloutAnchorPoint = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Text Callout {/* #create-text-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-text-callout) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#create-text-callout)

```csharp
public Task CreateTextCalloutAsync(
        CollectionItemName destinationCalloutView,
        IEnumerable<string> text,
        double viewXPosition = 0.4,
        double viewYPosition = 0.6,
        PointName? calloutAnchorPoint = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Callout View Ref List - WildCard Selection {/* #make-a-callout-view-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#make-a-callout-view-ref-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#make-a-callout-view-ref-list---wildcard-selection)

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeCalloutViewRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string calloutViewWildcardCriteria = "*",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Default Callout View Properties {/* #set-default-callout-view-properties */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-default-callout-view-properties) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-default-callout-view-properties)

```csharp
public Task SetDefaultCalloutViewPropertiesAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Callout View Properties {/* #set-callout-view-properties */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-callout-view-properties) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-callout-view-properties)

```csharp
public Task SetCalloutViewPropertiesAsync(
        IEnumerable<CollectionItemName> calloutViews,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Callout View {/* #delete-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#delete-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#delete-callout-view)

```csharp
public Task DeleteCalloutViewAsync(
        CollectionItemName calloutView,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Callout View {/* #rename-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#rename-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#rename-callout-view)

```csharp
public Task RenameCalloutViewAsync(
        CollectionItemName originalCalloutViewName,
        CollectionItemName newCalloutViewName,
        bool overwriteIfExists = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Arrange Callout View {/* #auto-arrange-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#auto-arrange-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#auto-arrange-callout-view)

```csharp
public Task AutoArrangeCalloutViewAsync(
        CollectionItemName calloutView,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Callouts in Callout View {/* #get-number-of-callouts-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#get-number-of-callouts-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#get-number-of-callouts-in-callout-view)

```csharp
public Task<int> GetNumberOfCalloutsInCalloutViewAsync(
        CollectionItemName calloutView,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get I-th Callout Position in Callout View {/* #get-i-th-callout-position-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#get-i-th-callout-position-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#get-i-th-callout-position-in-callout-view)

```csharp
public Task<CalloutPosition> GetIthCalloutPositionInCalloutViewAsync(
        CollectionItemName calloutView,
        int calloutViewIndex,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set I-th Callout Position in Callout View {/* #set-i-th-callout-position-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-i-th-callout-position-in-callout-view) · [gRPC Contract](/api/grpc/construction-operations-callout-views-and-callouts#set-i-th-callout-position-in-callout-view)

```csharp
public Task SetIthCalloutPositionInCalloutViewAsync(
        CollectionItemName calloutView,
        int calloutViewIndex,
        int xPosition,
        int yPosition,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Callout Values {/* #shared-callout-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/d9dc263acf3e41fe8fea6e88533a954394eb9ad4/targets/2026.1.0529.7)
