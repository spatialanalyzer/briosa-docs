---
title: Construction Operations / Callout Views and Callouts
description: Unreleased Briosa .NET APIs for selected callout-view MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Callout Views and Callouts

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## Shared Callout Values

```csharp
public sealed record Font
{
    public string FontName { get; init; } = "MS Shell Dlg";
    public uint Size { get; init; } = 8;
    public Color Color { get; init; } = new(0, 0, 0);
}

public sealed record CalloutViewProperties
{
    public bool LockViewPoint { get; init; }
    public bool RecallWorkingFrame { get; init; }
    public bool RecallVisibleLayer { get; init; }
    public int CalloutLeaderThickness { get; init; } = 2;
    public Color CalloutLeaderColor { get; init; } = new(128, 128, 128);
    public int CalloutBorderThickness { get; init; } = 2;
    public Color CalloutBorderColor { get; init; } = new(0, 0, 255);
    public bool DivideTextWithLines { get; init; }
    public Font Font { get; init; } = new();
}

public sealed record CalloutPosition(
    int XPosition,
    int YPosition,
    int XAnchorPosition,
    int YAnchorPosition,
    int CalloutWidth,
    int CalloutHeight);
```

## Create Vector Callout

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

The first three parameters are required; the remaining defaults match the MP
Editor. [Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-vector-callout) · [gRPC](/api/grpc/construction-operations-callout-views-and-callouts#create-vector-callout)

## Create Min/Max Vector Group Callout

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

[Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout) · [gRPC](/api/grpc/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout)

## Create Point Callout

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

[Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-callout) · [gRPC](/api/grpc/construction-operations-callout-views-and-callouts#create-point-callout)

## Create Point Comparison Callout

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

[Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-comparison-callout) · [gRPC](/api/grpc/construction-operations-callout-views-and-callouts#create-point-comparison-callout)

## Create Relationship Callout

```csharp
public Task CreateRelationshipCalloutAsync(
    CollectionItemName destinationCalloutView,
    CollectionItemName relationshipName,
    double viewXPosition = 0.0,
    double viewYPosition = 0.0,
    IEnumerable<string>? additionalNotes = null,
    CancellationToken cancellationToken = default);
```

## Create Picture Callout

```csharp
public Task CreatePictureCalloutAsync(
    CollectionItemName destinationCalloutView,
    CollectionItemName pictureName,
    double viewXPosition = 0.4,
    double viewYPosition = 0.6,
    int scaleImagePercent = 100,
    CollectionObjectName? objectForCalloutAnchorPoint = null,
    CancellationToken cancellationToken = default);
```

`scaleImagePercent` must be 10–200.

## Create Text Callout

```csharp
public Task CreateTextCalloutAsync(
    CollectionItemName destinationCalloutView,
    IEnumerable<string> text,
    double viewXPosition = 0.4,
    double viewYPosition = 0.6,
    PointName? calloutAnchorPoint = null,
    CancellationToken cancellationToken = default);
```

## Make a Callout View Ref List - WildCard Selection

```csharp
public Task<IReadOnlyList<CollectionItemName>>
    MakeCalloutViewRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string calloutViewWildcardCriteria = "*",
        CancellationToken cancellationToken = default);
```

The returned identities are an ordinary read-only list; the client holds no MP
reference-list handle.

## Set Default Callout View Properties

```csharp
public Task SetDefaultCalloutViewPropertiesAsync(
    CancellationToken cancellationToken = default);

public Task SetDefaultCalloutViewPropertiesAsync(
    string defaultCalloutViewName,
    CalloutViewProperties properties,
    CancellationToken cancellationToken = default);
```

The parameterless overload uses `Callout 1` and the shared property defaults.

## Set Callout View Properties

```csharp
public Task SetCalloutViewPropertiesAsync(
    IEnumerable<CollectionItemName> calloutViews,
    CancellationToken cancellationToken = default);

public Task SetCalloutViewPropertiesAsync(
    IEnumerable<CollectionItemName> calloutViews,
    CalloutViewProperties properties,
    CancellationToken cancellationToken = default);
```

The list must not be empty. This operation remains At Risk until the exact
SA 2026.1 list binding is validated.

## Delete Callout View

```csharp
public Task DeleteCalloutViewAsync(
    CollectionItemName calloutView,
    CancellationToken cancellationToken = default);
```

This destructive operation is never replayed automatically.

## Rename Callout View

```csharp
public Task RenameCalloutViewAsync(
    CollectionItemName originalCalloutViewName,
    CollectionItemName newCalloutViewName,
    bool overwriteIfExists = false,
    CancellationToken cancellationToken = default);
```

## Auto Arrange Callout View

```csharp
public Task AutoArrangeCalloutViewAsync(
    CollectionItemName calloutView,
    CancellationToken cancellationToken = default);
```

## Get Number of Callouts in Callout View

```csharp
public Task<int> GetNumberOfCalloutsInCalloutViewAsync(
    CollectionItemName calloutView,
    CancellationToken cancellationToken = default);
```

## Get I-th Callout Position in Callout View

```csharp
public Task<CalloutPosition> GetIthCalloutPositionInCalloutViewAsync(
    CollectionItemName calloutView,
    int calloutViewIndex,
    CancellationToken cancellationToken = default);
```

The index is zero-based and must not be negative.

## Set I-th Callout Position in Callout View

```csharp
public Task SetIthCalloutPositionInCalloutViewAsync(
    CollectionItemName calloutView,
    int calloutViewIndex,
    int xPosition,
    int yPosition,
    CancellationToken cancellationToken = default);
```

The index is zero-based and must not be negative.
