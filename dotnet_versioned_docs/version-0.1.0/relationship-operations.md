---
title: Relationship Operations
description: Briosa 0.1.0 .NET APIs for supported Relationship Operations MP commands.
toc_max_heading_level: 2
---

# Relationship Operations

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Enable/Disable Relationships for Optimization

[Enable/Disable Relationships for Optimization](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#enabledisable-relationships-for-optimization)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `IEnumerable<CollectionItemName>` | `Relationships` | Required |
| `enable` | `bool` | `Enable?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task EnableDisableRelationshipsForOptimizationAsync(
    IEnumerable<CollectionItemName> relationships,
    bool enable = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.EnableDisableRelationshipsForOptimizationAsync(relationships: relationships);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Relationship Types

```csharp
public enum GeometryRelationshipPointEditMode
{
    PointList,
    PointGraph,
    SubSamplerSettings,
}

public sealed record GeometryRelationshipOutlierFilterMetrics(
    double FirstPassRmsError,
    double FirstPassMaximumError,
    double FirstPassMinimumError,
    double FirstPassAverageError,
    double FinalPassRmsError,
    double FinalPassMaximumError,
    double FinalPassMinimumError,
    double FinalPassAverageError,
    int TotalInputPointCount,
    int ExcludePointCount);

public sealed record RelationshipWatchWindowUdpSettings
{
    public bool Enabled { get; init; }
    public bool Broadcast { get; init; } = true;
    public string IpAddress { get; init; } = "";
    public int Port { get; init; } = 10000;
}

public sealed record RelationshipWatchWindowTemplateOptions
{
    public int LinearPrecision { get; init; } = 4;
    public int AngularPrecision { get; init; } = 3;
    public Font Font { get; init; } = new();
    public Color TextColor { get; init; } = new(0, 0, 255);
    public Color BackgroundColor { get; init; } = new(255, 255, 255);
    public Color HighlightColor { get; init; } = new(255, 0, 0);
    public bool ShowDeviationXRx { get; init; } = true;
    public bool ShowDeviationYRy { get; init; } = true;
    public bool ShowDeviationZRz { get; init; } = true;
    public bool ShowDeviationMagnitude { get; init; } = true;
    public RelationshipWatchWindowUdpSettings UdpNetworkTransmitSettings { get; init; } = new();
    public bool TransparentBackground { get; init; }
    public bool HideUnits { get; init; }
}
```

## Generate Geometry Relationship Summary

[MP command](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#generate-geometry-relationship-summary)

```csharp
public Task GenerateGeometryRelationshipSummaryAsync(
    IEnumerable<CollectionItemName> relationshipRefList,
    string summaryTableName = "Geometry Relationship Summary",
    CancellationToken cancellationToken = default);
```

## Edit Geometry Relationship Point List

[MP command](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#edit-geometry-relationship-point-list)

```csharp
public Task EditGeometryRelationshipPointListAsync(
    CollectionObjectName relationshipName,
    GeometryRelationshipPointEditMode pointEditMode = GeometryRelationshipPointEditMode.PointList,
    CancellationToken cancellationToken = default);
```

The method opens an SA dialog. Cancellation does not prove that the interaction
stopped.

## Filter Geometry Relationship Outlier Cloud Points

[MP command](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

```csharp
public Task<GeometryRelationshipOutlierFilterMetrics> FilterGeometryRelationshipOutlierCloudPointsAsync(
    CollectionObjectName relationshipName,
    double sigmaThreshold = 3.0,
    bool modifyExistingInputClouds = false,
    CancellationToken cancellationToken = default);
```

## Relationship Watch Window Template

[MP command](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#relationship-watch-window-template)

```csharp
public Task RelationshipWatchWindowTemplateAsync(
    CancellationToken cancellationToken = default);

public Task RelationshipWatchWindowTemplateAsync(
    CollectionObjectName? watchWindowTemplateName,
    RelationshipWatchWindowTemplateOptions? options = null,
    CancellationToken cancellationToken = default);
```

The shorter overload uses every exact MP default. `null` options preserve every
default while allowing a caller-supplied template identity.

## Make Point to Point Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-point-to-point-relationship)

```csharp
public Task MakePointToPointRelationshipAsync(
    CollectionObjectName relationshipName,
    PointName firstPointName,
    PointName secondPointName,
    ToleranceVectorOptions? tolerance = null,
    ToleranceVectorOptions? constraint = null,
    CancellationToken cancellationToken = default);
```

The server maps omitted option values to the distinct exact MP tolerance and
constraint defaults.

## Make Frame to Frame Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-frame-to-frame-relationship)

```csharp
public Task MakeFrameToFrameRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName firstFrameName,
    CollectionObjectName secondFrameName,
    ToleranceScalarOptions? orientationTolerance = null,
    ToleranceVectorOptions? positionTolerance = null,
    CancellationToken cancellationToken = default);
```

Omitted tolerance values use the exact all-limits-disabled defaults. These
methods retain no Relationship state and are never automatically replayed.

## Dynamic Relationship Types

```csharp
public enum DynamicPointMode
{
    IntersectionLineAndPlane,
    IntersectionCylinderAndPlane,
    IntersectionConeAndPlane,
    IntersectionThreePlanes,
    MidPointPerpendicularToTwoLines,
}

public enum DynamicLineMode
{
    ConeAxis,
    CylinderAxis,
    IntersectionOfTwoPlanes,
    BisectTwoLines,
    SlotCenterlineAlongLength,
}

public enum DynamicPlaneMode
{
    BisectTwoPlanes,
    TwoConesHoldNormalToBestFitPlane,
    TwoConesHoldNormalToFirstConeAxis,
    TwoConesHoldNormalToSecondConeAxis,
    ConeAndCylinderHoldNormalToBestFitPlane,
    ConeAndCylinderHoldNormalToConeAxis,
    ConeAndCylinderHoldNormalToCylinderAxis,
    OffsetPlaneFromPlane,
}

public enum DynamicCircleMode
{
    CylinderAndPlaneHoldPlaneNormal,
    CylinderAndPlaneHoldCylinderAxis,
    ConeAndPlaneHoldPlaneNormal,
    ConeAndPlaneHoldConeAxis,
    SphereAndPlaneIntersection,
    TwoConesIntersection,
    ConeAndCylinderIntersection,
}

public enum DynamicEllipseMode
{
    CylinderAndPlaneIntersection,
    ConeAndPlaneIntersection,
}
```

`TwoConesHoldNormalToFirstConeAxis` maps internally to SA's exact misspelled
`Twp Cones...` SDK literal.

## Make Points to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-points-to-objects-relationship)

```csharp
public Task MakePointsToObjectsRelationshipAsync(
    CollectionObjectName relationshipName,
    IEnumerable<PointName> pointsInRelationship,
    IEnumerable<CollectionObjectName> objectsInRelationship,
    ProjectionOptions? projectionOptions = null,
    bool autoUpdateAVectorGroup = false,
    CancellationToken cancellationToken = default);
```

`null` projection options use the exact `Object To Probe Vectors` default with
all projection controls disabled.

## Make Points to Points Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-points-to-points-relationship)

```csharp
public Task MakePointsToPointsRelationshipAsync(
    CollectionObjectName relationshipName,
    IEnumerable<PointName> nominalPoints,
    IEnumerable<PointName> measuredPoints,
    bool autoUpdateAVectorGroup = false,
    ToleranceVectorOptions? tolerance = null,
    ToleranceVectorOptions? constraint = null,
    CancellationToken cancellationToken = default);
```

Omitted tolerance and constraint values use their distinct exact MP defaults.

## Make Groups to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-groups-to-objects-relationship)

```csharp
public Task MakeGroupsToObjectsRelationshipAsync(
    CollectionObjectName relationshipName,
    IEnumerable<CollectionObjectName> pointGroupsInRelationship,
    IEnumerable<CollectionObjectName> objectsInRelationship,
    ProjectionOptions? projectionOptions = null,
    bool autoUpdateAVectorGroup = false,
    CancellationToken cancellationToken = default);
```

## Make Object to Object Direction Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-object-to-object-direction-relationship)

```csharp
public Task MakeObjectToObjectDirectionRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName firstObjectInRelationship,
    CollectionObjectName secondObjectInRelationship,
    double nominalAngle = 0.0,
    CancellationToken cancellationToken = default);
```

## Make Point Clouds to Objects Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-point-clouds-to-objects-relationship)

```csharp
public Task MakePointCloudsToObjectsRelationshipAsync(
    CollectionObjectName relationshipName,
    IEnumerable<CollectionObjectName> pointCloudsInRelationship,
    IEnumerable<CollectionObjectName> objectsInRelationship,
    ProjectionOptions? projectionOptions = null,
    bool autoUpdateAVectorGroup = false,
    CancellationToken cancellationToken = default);
```

## Make Group to Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-group-to-group-relationship)

```csharp
public Task MakeGroupToGroupRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName firstGroupName,
    CollectionObjectName secondGroupName,
    bool autoUpdateAVectorGroup = false,
    ToleranceVectorOptions? tolerance = null,
    ToleranceVectorOptions? constraint = null,
    CancellationToken cancellationToken = default);
```

## Make Group to Nominal Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-group-to-nominal-group-relationship)

```csharp
public Task MakeGroupToNominalGroupRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName nominalGroupName,
    CollectionObjectName measuredGroupName,
    bool autoUpdateAVectorGroup = false,
    bool useClosestPoint = true,
    bool displayClosestPointWatchWindow = false,
    bool useViewZoomingWithProximity = false,
    bool ignorePointsBeyondThreshold = false,
    double proximityThreshold = 0.01,
    ToleranceVectorOptions? tolerance = null,
    ToleranceVectorOptions? constraint = null,
    double fitWeight = 1.0,
    CancellationToken cancellationToken = default);
```

The defaults avoid opening the watch window or changing view zoom while
preserving closest-point matching.

## Make Average Point Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-average-point-relationship)

```csharp
public Task MakeAveragePointRelationshipAsync(
    CollectionObjectName relationshipName,
    IEnumerable<PointName> pointsInRelationship,
    PointName? averagePointName = null,
    PointName? nominalPointName = null,
    CancellationToken cancellationToken = default);
```

## Make Geometry Fit Only Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-geometry-fit-only-relationship)

```csharp
public Task MakeGeometryFitOnlyRelationshipAsync(
    CollectionObjectName relationshipName,
    IEnumerable<CollectionObjectName> pointGroupsToFit,
    GeometryType geometryType,
    CollectionObjectName? resultingObjectName = null,
    string? fitProfileName = null,
    CancellationToken cancellationToken = default);
```

## Make Geometry Fit and Compare to Nominal Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

```csharp
public Task MakeGeometryFitAndCompareToNominalRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName nominalGeometry,
    IEnumerable<CollectionObjectName> pointGroupsToFit,
    CollectionObjectName? resultingObjectName = null,
    string? fitProfileName = null,
    CancellationToken cancellationToken = default);
```

The client preserves MP partial success through the normal Briosa execution
outcome model. These methods retain no Relationship state and never
automatically replay uncertain work.

## Relationship Fit and Statistics Types

```csharp
public enum SolverMode
{
    GaussNewton,
    LevenbergMarquardt,
    GaussNewtonWithGradientSearch,
    DirectSearch,
}

public sealed record FitDofOptions
{
    public bool AllowX { get; init; } = true;
    public bool AllowY { get; init; } = true;
    public bool AllowZ { get; init; } = true;
    public bool AllowRx { get; init; } = true;
    public bool AllowRy { get; init; } = true;
    public bool AllowRz { get; init; } = true;
    public bool RotateAboutCentroid { get; init; } = true;
}

public sealed record RelationshipFitResult(
    Transform TransformInReference,
    WorldTransform TransformInWorking,
    WorldTransform TransformInWorld,
    double FitObjectiveValue);

public sealed record GeneralRelationshipStatistics(
    double AbsoluteMaxDeviation,
    double Rms,
    bool HasSignedDeviation,
    double SignedMaxDeviation,
    double SignedMinDeviation);

public sealed record PointsToObjectsRelationshipStatistics(
    double AbsoluteMaxDeviation,
    double MaxDeviation,
    double MinDeviation,
    double AvgDeviation,
    double Rms,
    int CandidatePointCount,
    int SampledPointCount,
    int RejectedPointCount,
    int UsedPointCount,
    int OutOfTolerancePointCount);

public sealed record PointToPointRelationshipStatistics(
    double DeltaX,
    double DeltaY,
    double DeltaZ,
    double DeltaMagnitude,
    CollectionObjectName ReferenceFrame);
```

`WorldTransform` preserves the scale returned with each working/world matrix.

## Make Geometry Compare Only Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-geometry-compare-only-relationship)

```csharp
public Task MakeGeometryCompareOnlyRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName nominalGeometry,
    CollectionObjectName measuredGeometry,
    CancellationToken cancellationToken = default);
```

## Make Dynamic Point Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-dynamic-point-relationship)

```csharp
public Task MakeDynamicPointRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName firstReferenceGeometry,
    CollectionObjectName secondReferenceGeometry,
    DynamicPointMode constructionMode = DynamicPointMode.IntersectionLineAndPlane,
    CollectionObjectName? thirdReferenceGeometry = null,
    CancellationToken cancellationToken = default);
```

The third reference is optional unless the selected construction mode needs it.

## Make Dynamic Line Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-dynamic-line-relationship)

```csharp
public Task MakeDynamicLineRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName firstReferenceGeometry,
    CollectionObjectName secondReferenceGeometry,
    DynamicLineMode constructionMode = DynamicLineMode.IntersectionOfTwoPlanes,
    CancellationToken cancellationToken = default);
```

## Make Dynamic Plane Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-dynamic-plane-relationship)

```csharp
public Task MakeDynamicPlaneRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName firstReferenceGeometry,
    CollectionObjectName secondReferenceGeometry,
    DynamicPlaneMode constructionMode = DynamicPlaneMode.BisectTwoPlanes,
    double offsetPlaneOffset = 0.0,
    CancellationToken cancellationToken = default);
```

## Make Dynamic Circle Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-dynamic-circle-relationship)

```csharp
public Task MakeDynamicCircleRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName firstReferenceGeometry,
    CollectionObjectName secondReferenceGeometry,
    DynamicCircleMode constructionMode = DynamicCircleMode.CylinderAndPlaneHoldPlaneNormal,
    CancellationToken cancellationToken = default);
```

## Make Dynamic Ellipse Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-dynamic-ellipse-relationship)

```csharp
public Task MakeDynamicEllipseRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName firstReferenceGeometry,
    CollectionObjectName secondReferenceGeometry,
    DynamicEllipseMode constructionMode = DynamicEllipseMode.CylinderAndPlaneIntersection,
    CancellationToken cancellationToken = default);
```

## Make Vector Group To Vector Group Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-vector-group-to-vector-group-relationship)

```csharp
public Task MakeVectorGroupToVectorGroupRelationshipAsync(
    CollectionObjectName newVgToVgRelationship,
    CollectionObjectName referenceVectorGroup,
    CollectionObjectName correspondingVectorGroup,
    bool setOpposingVectorGroupPolarity = true,
    CancellationToken cancellationToken = default);
```

## Set Vector Group To Vector Group Cylindrical Zone

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

```csharp
public Task SetVectorGroupToVectorGroupCylindricalZoneAsync(
    CollectionObjectName vgToVgRelationship,
    double radialOffset = 1.0,
    double minimumAxialOffset = -10.0,
    double maximumAxialOffset = 10.0,
    CancellationToken cancellationToken = default);
```

## Set Vector Group To Vector Group Fit Weights

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-vector-group-to-vector-group-fit-weights)

```csharp
public Task SetVectorGroupToVectorGroupFitWeightsAsync(
    CollectionObjectName vgToVgRelationship,
    double minimumGap = 0.0,
    double minimumGapFitWeight = 10.0,
    double maximumGap = 0.0,
    double maximumGapFitWeight = 10.0,
    double nominalGap = 0.0,
    double nominalGapFitWeight = 1.0,
    CancellationToken cancellationToken = default);
```

## Set Vector Group To Vector Group Fit Gradient Factor

[MP command](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

```csharp
public Task SetVectorGroupToVectorGroupFitGradientFactorAsync(
    CollectionObjectName vgToVgRelationship,
    double fitGradientFactor = 50.0,
    CancellationToken cancellationToken = default);
```

These methods retain no Relationship state and never automatically replay
uncertain work.

## Set Vector Group To Vector Group Relative Polarity

```csharp
public Task SetVectorGroupToVectorGroupRelativePolarityAsync(
    CollectionObjectName vgToVgRelationship,
    bool setOpposingVectorGroupPolarity = true,
    CancellationToken cancellationToken = default);
```

## Delete Relationship

```csharp
public Task DeleteRelationshipAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

The client adds no confirmation prompt.

## Set Optimization Search Options

```csharp
public Task SetOptimizationSearchOptionsAsync(
    int maxNumberOfStepSizeReduction = 5,
    CancellationToken cancellationToken = default);
```

## Set Optimization Perturbation Parameters

```csharp
public Task SetOptimizationPerturbationParametersAsync(
    double lengthPerturbation = 0.0001,
    double angularPerturbation = 0.0001,
    double damping = 1.0,
    CancellationToken cancellationToken = default);
```

## Do Relationship Fit

[MP command](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#do-relationship-fit)

```csharp
public Task<RelationshipFitResult> DoRelationshipFitAsync(
    string collectionContainingRelationships,
    IEnumerable<CollectionObjectName> objectsToMove,
    IEnumerable<CollectionInstrumentId> instrumentsToMove,
    SolverMode solverMode = SolverMode.GaussNewton,
    FitDofOptions? motionToAllow = null,
    bool enableRandomizedStart = false,
    bool useFitDialog = false,
    CancellationToken cancellationToken = default);
```

Pass an empty sequence for either move category that is not used. `null` motion
options allow every degree of freedom about the centroid. No fit dialog is
shown by default.

## Move Collections by Minimizing Relationships

[MP command](/mp-command-catalog/commands/relationship-operations#move-collections-by-minimizing-relationships) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#move-collections-by-minimizing-relationships)

```csharp
public Task MoveCollectionsByMinimizingRelationshipsAsync(
    IEnumerable<string> collectionsToMove,
    IEnumerable<CollectionObjectName> relationshipsToMinimize,
    SolverMode solverMode = SolverMode.GaussNewton,
    FitDofOptions? motionToAllow = null,
    bool useFitDialog = false,
    double convergenceThreshold = 0.0,
    CancellationToken cancellationToken = default);
```

## Get General Relationship Statistics

```csharp
public Task<GeneralRelationshipStatistics> GetGeneralRelationshipStatisticsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

## Get Points to Objects Relationship Statistics

```csharp
public Task<PointsToObjectsRelationshipStatistics> GetPointsToObjectsRelationshipStatisticsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

The result includes SA 2026.1's `AvgDeviation` output.

## Start/Stop Relationship Trapping

```csharp
public Task StartStopRelationshipTrappingAsync(
    CollectionObjectName relationshipName,
    CollectionInstrumentId instrumentId,
    bool startTrapping = false,
    CancellationToken cancellationToken = default);
```

## Get Point to Point Relationship Statistics

```csharp
public Task<PointToPointRelationshipStatistics> GetPointToPointRelationshipStatisticsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

These methods retain no Relationship or optimizer state and never
automatically replay uncertain work.

## Associated-Data and Auto-Filter Types

```csharp
public sealed record FilterProximitySettings(
    double SurfaceInclusionProximity = 0.1,
    double EdgeExclusionProximity = 0.1,
    double PlanarInclusionProximity = 0.5,
    double PlanarExclusionProximity = 0.1,
    double RadialInclusionProximity = 0.1,
    double GeometryExtractionTolerance = 0.01,
    OffsetDirectionType SurfaceProximityMode = OffsetDirectionType.Both,
    OffsetDirectionType PlanarProximityMode = OffsetDirectionType.Both,
    OffsetDirectionType RadialProximityMode = OffsetDirectionType.Both,
    bool ProjectToPlane = true,
    bool AssertPlaneBoundaries = false);

public sealed record RelationshipAssociatedData(
    string RelationshipType,
    IReadOnlyList<PointName> IndividualPoints,
    IReadOnlyList<CollectionObjectName> PointGroups,
    IReadOnlyList<CollectionObjectName> PointClouds,
    IReadOnlyList<CollectionObjectName> Objects);

public sealed record PointsToPointsRelationshipAssociatedData(
    IReadOnlyList<PointName> NominalPoints,
    IReadOnlyList<PointName> ActualPoints);
```

Constructing `FilterProximitySettings` locally replaces the excluded MP-only
`Make Auto Filter Proximity Settings` helper. `CloudThinningOptions` is the
shared client value documented with Construction Operations / Point Clouds.

## Set Group To Nominal Group View Zooming

[MP command](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-group-to-nominal-group-view-zooming)

```csharp
public Task SetGroupToNominalGroupViewZoomingAsync(
    CollectionObjectName relationshipName,
    bool useClosestPoint = true,
    bool showClosestPointWatchWindow = false,
    bool useViewZooming = true,
    bool ignorePointsBeyondThreshold = true,
    double proximityThreshold = 0.01,
    CancellationToken cancellationToken = default);
```

## Set Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-associated-data)

```csharp
public Task SetRelationshipAssociatedDataAsync(
    CollectionItemName relationshipName,
    IEnumerable<PointName>? individualPoints = null,
    IEnumerable<CollectionObjectName>? pointGroups = null,
    IEnumerable<CollectionObjectName>? pointClouds = null,
    IEnumerable<CollectionObjectName>? objects = null,
    bool ignoreEmptyArguments = true,
    CancellationToken cancellationToken = default);
```

`null` omits that exact SDK setter; a supplied empty sequence remains a
supplied list. The client retains no associated-data state.

## Get Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-associated-data)

```csharp
public Task<RelationshipAssociatedData> GetRelationshipAssociatedDataAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

## Set Points to Points Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-points-to-points-relationship-associated-data)

```csharp
public Task SetPointsToPointsRelationshipAssociatedDataAsync(
    CollectionItemName relationshipName,
    IEnumerable<PointName>? nominalPoints = null,
    IEnumerable<PointName>? actualPoints = null,
    bool ignoreEmptyArguments = true,
    CancellationToken cancellationToken = default);
```

## Get Points to Points Relationship Associated Data

[MP command](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-points-to-points-relationship-associated-data)

```csharp
public Task<PointsToPointsRelationshipAssociatedData> GetPointsToPointsRelationshipAssociatedDataAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

## Auto Filter Clouds to Nominal Geometry 3D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

```csharp
public Task AutoFilterCloudsToNominalGeometry3DAsync(
    IEnumerable<CollectionItemName> autoFilterTargetRelationships,
    IEnumerable<CollectionObjectName> clouds,
    CloudThinningOptions? cloudThinningSettings = null,
    FilterProximitySettings? filterProximitySettings3D = null,
    bool useFeatureSpecificFilterSettings = false,
    CancellationToken cancellationToken = default);
```

## Auto Filter Clouds to Nominal Geometry 2D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

```csharp
public Task AutoFilterCloudsToNominalGeometry2DAsync(
    IEnumerable<CollectionItemName> autoFilterTargetRelationships,
    IEnumerable<CollectionObjectName> clouds,
    CloudThinningOptions? cloudThinningSettings = null,
    FilterProximitySettings? filterProximitySettings2D = null,
    double geometryExtractionTolerance = 0.01,
    bool useFeatureSpecificFilterSettings = false,
    CancellationToken cancellationToken = default);
```

The feature-specific flag is part of the exact SA 2026.1 command even though
it is absent from ObjectiveSA's SA 2024.1 implementation.

## Auto Filter Points to Nominal Geometry 3D

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

```csharp
public Task AutoFilterPointsToNominalGeometry3DAsync(
    IEnumerable<CollectionItemName> autoFilterTargetRelationships,
    IEnumerable<PointName> points,
    FilterProximitySettings? filterProximitySettings3D = null,
    CancellationToken cancellationToken = default);
```

## Auto Filter Points/Groups/Clouds to Surface Faces

[MP command](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

```csharp
public Task AutoFilterPointsGroupsCloudsToSurfaceFacesAsync(
    IEnumerable<CollectionObjectName> surfaces,
    IEnumerable<PointName>? points = null,
    IEnumerable<CollectionObjectName>? groups = null,
    IEnumerable<CollectionObjectName>? clouds = null,
    double surfaceOffset = 0.1,
    double edgeOffset = 0.1,
    OffsetDirectionType offsetDirection = OffsetDirectionType.Both,
    bool enforceMaxPointsPerFaceInOutput = false,
    int maxPointsPerFace = 0,
    CloudThinningOptions? cloudThinningSettings = null,
    string outputCloudBaseName = "InspAutoFilteredCloud",
    bool useFaceIdsForSuffix = true,
    CancellationToken cancellationToken = default);
```

The required Surface list comes first so all remaining inputs can preserve
their MP defaults. These methods do not preflight SA state or replay uncertain
work.

## Extract Geometry From Point Clouds

[MP command](/mp-command-catalog/commands/relationship-operations#extract-geometry-from-point-clouds) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#extract-geometry-from-point-clouds)

```csharp
public Task ExtractGeometryFromPointCloudsAsync(
    CollectionItemName relationshipName,
    CollectionObjectName cloudName,
    IEnumerable<PointName> seedPoints,
    GeometryType geometryType = GeometryType.Circle,
    IEnumerable<PointName>? boundingPoints = null,
    double tolerance = 0.1,
    bool reverseNormal = false,
    int planarPointCount = 1000,
    CancellationToken cancellationToken = default);
```

This SA 2026.1 operation has no ObjectiveSA SA 2024.1 counterpart.

## Create Points to Objects Map

[MP command](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#create-points-to-objects-map)

```csharp
public Task CreatePointsToObjectsMapAsync(
    string pointsToObjectsMapName,
    IEnumerable<CollectionObjectName> objects,
    IEnumerable<PointName>? points = null,
    IEnumerable<CollectionObjectName>? groups = null,
    double proximityTolerance = 0.0,
    CancellationToken cancellationToken = default);
```

The map remains owned by SA. The client retains no local map registry or
intermediate workflow state.

## Get Objects From Points to Objects Map (Point List)

[MP command](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-objects-from-points-to-objects-map-point-list)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> GetObjectsFromPointsToObjectsMapPointListAsync(
    string pointsToObjectsMapName,
    IEnumerable<PointName> points,
    CancellationToken cancellationToken = default);
```

This method follows the exact SA 2026.1 Point-list binding.

## Compute Geometry Relationship Uncertainties

[MP command](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#compute-geometry-relationship-uncertainties)

```csharp
public Task ComputeGeometryRelationshipUncertaintiesAsync(
    CollectionItemName relationshipName,
    bool displayResults = false,
    CancellationToken cancellationToken = default);
```

SA may make the Relationship dormant after computing uncertainty.

## Make Cloud to Swatch Relationship

[MP command](/mp-command-catalog/commands/relationship-operations#make-cloud-to-swatch-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-cloud-to-swatch-relationship)

```csharp
public Task MakeCloudToSwatchRelationshipAsync(
    CollectionItemName relationshipName,
    CollectionObjectName inputCloudName,
    string surfaceFaceList,
    PointName referencePoint,
    CollectionObjectName cardinalPointGroupName,
    double maximumRadialOffset = 0.125,
    double minimumAxialOffset = -0.125,
    double maximumAxialOffset = 0.125,
    CancellationToken cancellationToken = default);
```

This exact-target operation has no ObjectiveSA implementation. The client adds
no Swatch preflight and never automatically replays uncertain work.

## Final Reconciled Subgroup Types

```csharp
public sealed record SigmoidalGapFitConstraints(
    bool UseSigmoidalGapConstraints,
    double MinimumGapBoundary,
    double MinimumGapWeight,
    double MaximumGapBoundary,
    double MaximumGapWeight,
    double NominalGap,
    double NominalGapWeight,
    double GradientSteepnessFactor);

public sealed record RelationshipStatusFlags(
    bool Dormant,
    bool Success,
    bool Measured,
    bool Failed,
    bool Unmeasured);
```

## Get Relationship Sigmoidal Gap Fit Constraints

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints)

```csharp
public Task<SigmoidalGapFitConstraints> GetRelationshipSigmoidalGapFitConstraintsAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

The method uses the exact MP word `Sigmoidal` and returns all eight values.

## Set Object to Object Direction Relationship Tolerances

[MP command](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-object-to-object-direction-relationship-tolerances)

```csharp
public Task SetObjectToObjectDirectionRelationshipTolerancesAsync(
    CollectionItemName relationshipName,
    ToleranceScalarOptions? angleBetweenVectorsTolerances = null,
    ToleranceScalarOptions? mutualPerpendicularLengthTolerances = null,
    CancellationToken cancellationToken = default);
```

Omitted tolerance values use the exact all-limits-disabled zero defaults.

## Get Geom Relationship Criteria Name List

[MP command](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-criteria-name-list)

```csharp
public Task<IReadOnlyList<string>> GetGeomRelationshipCriteriaNameListAsync(
    CollectionItemName relationshipName,
    bool includeAllCriteria = false,
    CancellationToken cancellationToken = default);
```

## Get Relationship Status

[MP command](/mp-command-catalog/commands/relationship-operations#get-relationship-status) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-status)

```csharp
public Task<RelationshipStatusFlags> GetRelationshipStatusAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

All five raw SA flags are returned without an invented client status enum.
These methods retain no Relationship state and never replay uncertain work.

## Geom Relationship Ignore Input Points

[Geom Relationship Ignore Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#geom-relationship-ignore-input-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task GeomRelationshipIgnoreInputPointsAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GeomRelationshipIgnoreInputPointsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Geom Relationship Reuse Ignored Input Points

[Geom Relationship Reuse Ignored Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#geom-relationship-reuse-ignored-input-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task GeomRelationshipReuseIgnoredInputPointsAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GeomRelationshipReuseIgnoredInputPointsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Auto Vectors

[Get Geom Relationship Auto Vectors](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-auto-vectors)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `AutoVectorsNominalAvnEnabled` | `bool` | `Auto Vectors Nominal (AVN) - Enabled?` |
| `AutoVectorsNominalAvnName` | `CollectionObjectName` | `Auto Vectors Nominal (AVN) - Name` |
| `AutoVectorsFitAvfEnabled` | `bool` | `Auto Vectors Fit (AVF) - Enabled?` |
| `AutoVectorsFitAvfName` | `CollectionObjectName` | `Auto Vectors Fit (AVF) - Name` |
| `PointsType` | `string` | `Points Type` |

```csharp
public sealed record GetGeomRelationshipAutoVectorsResult
{
    public required bool AutoVectorsNominalAvnEnabled { get; init; }

    public required CollectionObjectName AutoVectorsNominalAvnName { get; init; }

    public required bool AutoVectorsFitAvfEnabled { get; init; }

    public required CollectionObjectName AutoVectorsFitAvfName { get; init; }

    public required string PointsType { get; init; }
}

public Task<GetGeomRelationshipAutoVectorsResult> GetGeomRelationshipAutoVectorsAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipAutoVectorsAsync(relationshipName: relationshipName);
```

Returns the 5 MP outputs in the named `GetGeomRelationshipAutoVectorsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Cardinal Points

[Get Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-cardinal-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CardinalPointNameList` | `PointName[]` | `Cardinal Point Name List` |

```csharp
public Task<PointName[]> GetGeomRelationshipCardinalPointsAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipCardinalPointsAsync(relationshipName: relationshipName);
```

Returns the MP output `Cardinal Point Name List` directly as `PointName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Criteria

[Get Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-criteria)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `criteria` | `string` | `Criteria` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Nominal` | `double` | `Nominal` |
| `Measured` | `double` | `Measured` |
| `Delta` | `double` | `Delta` |
| `LowTolerance` | `double` | `Low Tolerance` |
| `HighTolerance` | `double` | `High Tolerance` |
| `OptimizationDeltaWeight` | `double` | `Optimization: Delta Weight` |
| `OptimizationOutOfToleranceWeight` | `double` | `Optimization: Out of Tolerance Weight` |
| `IsWithinTolerance` | `string` | `Is within Tolerance?` |
| `HasUncertainty` | `bool` | `Has Uncertainty?` |
| `Uncertainty` | `double` | `Uncertainty` |

```csharp
public sealed record GetGeomRelationshipCriteriaResult
{
    public required double Nominal { get; init; }

    public required double Measured { get; init; }

    public required double Delta { get; init; }

    public required double LowTolerance { get; init; }

    public required double HighTolerance { get; init; }

    public required double OptimizationDeltaWeight { get; init; }

    public required double OptimizationOutOfToleranceWeight { get; init; }

    public required string IsWithinTolerance { get; init; }

    public required bool HasUncertainty { get; init; }

    public required double Uncertainty { get; init; }
}

public Task<GetGeomRelationshipCriteriaResult> GetGeomRelationshipCriteriaAsync(
    CollectionItemName relationshipName,
    string criteria = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipCriteriaAsync(relationshipName: relationshipName);
```

Returns the 10 MP outputs in the named `GetGeomRelationshipCriteriaResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Measured Avg Point

[Get Geom Relationship Measured Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-measured-avg-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `MeasuredAveragePoint` | `PointName` | `Measured Average Point` |

```csharp
public Task<PointName> GetGeomRelationshipMeasuredAvgPointAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipMeasuredAvgPointAsync(relationshipName: relationshipName);
```

Returns the MP output `Measured Average Point` directly as `PointName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Measured Geometry

[Get Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-measured-geometry)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `MeasuredGeometry` | `CollectionObjectName` | `Measured Geometry` |

```csharp
public Task<CollectionObjectName> GetGeomRelationshipMeasuredGeometryAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipMeasuredGeometryAsync(relationshipName: relationshipName);
```

Returns the MP output `Measured Geometry` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Nominal Avg Point

[Get Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-nominal-avg-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `NominalAveragePoint` | `PointName` | `Nominal Average Point` |

```csharp
public Task<PointName> GetGeomRelationshipNominalAvgPointAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipNominalAvgPointAsync(relationshipName: relationshipName);
```

Returns the MP output `Nominal Average Point` directly as `PointName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Nominal Geometry

[Get Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-nominal-geometry)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `NominalGeometry` | `CollectionObjectName` | `Nominal Geometry` |

```csharp
public Task<CollectionObjectName> GetGeomRelationshipNominalGeometryAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipNominalGeometryAsync(relationshipName: relationshipName);
```

Returns the MP output `Nominal Geometry` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Point List

[Get Geom Relationship Point List](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-point-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `AllPoints` | `PointName[]` | `All Points` |
| `UsedPoints` | `PointName[]` | `Used Points` |
| `IgnoredPoints` | `PointName[]` | `Ignored Points` |

```csharp
public sealed record GetGeomRelationshipPointListResult
{
    public required PointName[] AllPoints { get; init; }

    public required PointName[] UsedPoints { get; init; }

    public required PointName[] IgnoredPoints { get; init; }
}

public Task<GetGeomRelationshipPointListResult> GetGeomRelationshipPointListAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipPointListAsync(relationshipName: relationshipName);
```

Returns the 3 MP outputs in the named `GetGeomRelationshipPointListResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Projection Plane

[Get Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-geom-relationship-projection-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ProjectionPlaneName` | `CollectionObjectName` | `Projection Plane Name` |

```csharp
public Task<CollectionObjectName> GetGeomRelationshipProjectionPlaneAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipProjectionPlaneAsync(relationshipName: relationshipName);
```

Returns the MP output `Projection Plane Name` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Pipe Relationship Cut Status

[Get Pipe Relationship Cut Status](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-pipe-relationship-cut-status)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Pipe1CutAvailable` | `bool` | `Pipe 1 - Cut Available?` |
| `Pipe1CutActive` | `bool` | `Pipe 1 - Cut Active?` |
| `Pipe2CutAvailable` | `bool` | `Pipe 2 - Cut Available?` |
| `Pipe2CutActive` | `bool` | `Pipe 2 - Cut Active?` |

```csharp
public sealed record GetPipeRelationshipCutStatusResult
{
    public required bool Pipe1CutAvailable { get; init; }

    public required bool Pipe1CutActive { get; init; }

    public required bool Pipe2CutAvailable { get; init; }

    public required bool Pipe2CutActive { get; init; }
}

public Task<GetPipeRelationshipCutStatusResult> GetPipeRelationshipCutStatusAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPipeRelationshipCutStatusAsync(relationshipName: relationshipName);
```

Returns the 4 MP outputs in the named `GetPipeRelationshipCutStatusResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Pipe Relationship Properties

[Get Pipe Relationship Properties](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-pipe-relationship-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Pipe1ObjectName` | `CollectionObjectName` | `Pipe 1 - Object Name` |
| `Pipe1InnerDiameter` | `double` | `Pipe 1 - Inner Diameter` |
| `Pipe1OuterDiameter` | `double` | `Pipe 1 - Outer Diameter` |
| `Pipe1CutBegin` | `double` | `Pipe 1 - Cut Begin` |
| `Pipe1CutEnd` | `double` | `Pipe 1 - Cut End` |
| `Pipe2ObjectName` | `CollectionObjectName` | `Pipe 2 - Object Name` |
| `Pipe2InnerDiameter` | `double` | `Pipe 2 - Inner Diameter` |
| `Pipe2OuterDiameter` | `double` | `Pipe 2 - Outer Diameter` |
| `Pipe2CutBegin` | `double` | `Pipe 2 - Cut Begin` |
| `Pipe2CutEnd` | `double` | `Pipe 2 - Cut End` |

```csharp
public sealed record GetPipeRelationshipPropertiesResult
{
    public required CollectionObjectName Pipe1ObjectName { get; init; }

    public required double Pipe1InnerDiameter { get; init; }

    public required double Pipe1OuterDiameter { get; init; }

    public required double Pipe1CutBegin { get; init; }

    public required double Pipe1CutEnd { get; init; }

    public required CollectionObjectName Pipe2ObjectName { get; init; }

    public required double Pipe2InnerDiameter { get; init; }

    public required double Pipe2OuterDiameter { get; init; }

    public required double Pipe2CutBegin { get; init; }

    public required double Pipe2CutEnd { get; init; }
}

public Task<GetPipeRelationshipPropertiesResult> GetPipeRelationshipPropertiesAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPipeRelationshipPropertiesAsync(relationshipName: relationshipName);
```

Returns the 10 MP outputs in the named `GetPipeRelationshipPropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Pipe Relationship Weights

[Get Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-pipe-relationship-weights)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `OverallWeight` | `double` | `Overall Weight` |
| `AxisOffset` | `double` | `Axis Offset` |
| `AxisAlignment` | `double` | `Axis Alignment` |
| `CenterPull` | `double` | `Center Pull` |
| `OutOfMaterialWeight` | `double` | `Out of material - Weight` |
| `OutOfMaterialStaticOffset` | `double` | `Out of material - Static Offset` |
| `ConstrainRegionAtOd` | `bool` | `Constrain Region at OD` |
| `ConstrainIdOdOverlap` | `bool` | `Constrain ID/OD overlap` |

```csharp
public sealed record GetPipeRelationshipWeightsResult
{
    public required double OverallWeight { get; init; }

    public required double AxisOffset { get; init; }

    public required double AxisAlignment { get; init; }

    public required double CenterPull { get; init; }

    public required double OutOfMaterialWeight { get; init; }

    public required double OutOfMaterialStaticOffset { get; init; }

    public required bool ConstrainRegionAtOd { get; init; }

    public required bool ConstrainIdOdOverlap { get; init; }
}

public Task<GetPipeRelationshipWeightsResult> GetPipeRelationshipWeightsAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPipeRelationshipWeightsAsync(relationshipName: relationshipName);
```

Returns the 8 MP outputs in the named `GetPipeRelationshipWeightsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Fit Constraints (Scalar Type)

[Get Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-fit-constraints-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighTolerance` | `bool` | `Use High Tolerance?` |
| `HighTolerance` | `double` | `High Tolerance` |
| `UseLowTolerance` | `bool` | `Use Low Tolerance?` |
| `LowTolerance` | `double` | `Low Tolerance` |
| `FitConstraintOptions` | `FitConstraintScalarOptions` | `Fit Constraint Options` |

```csharp
public sealed record GetRelationshipFitConstraintsScalarTypeResult
{
    public required bool UseHighTolerance { get; init; }

    public required double HighTolerance { get; init; }

    public required bool UseLowTolerance { get; init; }

    public required double LowTolerance { get; init; }

    public required FitConstraintScalarOptions FitConstraintOptions { get; init; }
}

public Task<GetRelationshipFitConstraintsScalarTypeResult> GetRelationshipFitConstraintsScalarTypeAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipFitConstraintsScalarTypeAsync(relationshipName: relationshipName);
```

Returns the 5 MP outputs in the named `GetRelationshipFitConstraintsScalarTypeResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Outlier Rejection (Scalar Type)

[Get Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-outlier-rejection-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighLimit` | `bool` | `Use High Limit?` |
| `HighLimit` | `double` | `High Limit` |
| `UseLowLimit` | `bool` | `Use Low Limit?` |
| `LowLimit` | `double` | `Low Limit` |

```csharp
public sealed record GetRelationshipOutlierRejectionScalarTypeResult
{
    public required bool UseHighLimit { get; init; }

    public required double HighLimit { get; init; }

    public required bool UseLowLimit { get; init; }

    public required double LowLimit { get; init; }
}

public Task<GetRelationshipOutlierRejectionScalarTypeResult> GetRelationshipOutlierRejectionScalarTypeAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipOutlierRejectionScalarTypeAsync(relationshipName: relationshipName);
```

Returns the 4 MP outputs in the named `GetRelationshipOutlierRejectionScalarTypeResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Projection Options

[Get Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-projection-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `IgnoreEdgeProjections` | `bool` | `Ignore Edge Projections?` |
| `ProbeOffsetsOverrideTargetValues` | `bool` | `Probe Offsets - Override Target Values?` |
| `ProbeOffsetsOverrideValue` | `double` | `Probe Offsets - Override Value` |
| `AddExtraMaterial` | `bool` | `Add Extra Material?` |
| `ExtraMaterialThickness` | `double` | `Extra Material Thickness` |

```csharp
public sealed record GetRelationshipProjectionOptionsResult
{
    public required bool IgnoreEdgeProjections { get; init; }

    public required bool ProbeOffsetsOverrideTargetValues { get; init; }

    public required double ProbeOffsetsOverrideValue { get; init; }

    public required bool AddExtraMaterial { get; init; }

    public required double ExtraMaterialThickness { get; init; }
}

public Task<GetRelationshipProjectionOptionsResult> GetRelationshipProjectionOptionsAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipProjectionOptionsAsync(relationshipName: relationshipName);
```

Returns the 5 MP outputs in the named `GetRelationshipProjectionOptionsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Reporting Frame

[Get Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-reporting-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ReportingFrame` | `CollectionObjectName` | `Reporting Frame` |

```csharp
public Task<CollectionObjectName> GetRelationshipReportingFrameAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipReportingFrameAsync(relationshipName: relationshipName);
```

Returns the MP output `Reporting Frame` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Sub Sampling Options

[Get Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-sub-sampling-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseEveryIthPoint` | `bool` | `Use every i-th point` |
| `IValue` | `int` | `i value` |
| `UseNoMoreThanNPoints` | `bool` | `Use no more than n points` |
| `NValue` | `int` | `n value` |

```csharp
public sealed record GetRelationshipSubSamplingOptionsResult
{
    public required bool UseEveryIthPoint { get; init; }

    public required int IValue { get; init; }

    public required bool UseNoMoreThanNPoints { get; init; }

    public required int NValue { get; init; }
}

public Task<GetRelationshipSubSamplingOptionsResult> GetRelationshipSubSamplingOptionsAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipSubSamplingOptionsAsync(relationshipName: relationshipName);
```

Returns the 4 MP outputs in the named `GetRelationshipSubSamplingOptionsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Tolerance (Scalar Type)

[Get Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-tolerance-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighTolerance` | `bool` | `Use High Tolerance?` |
| `HighTolerance` | `double` | `High Tolerance` |
| `UseLowTolerance` | `bool` | `Use Low Tolerance?` |
| `LowTolerance` | `double` | `Low Tolerance` |
| `ToleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` |

```csharp
public sealed record GetRelationshipToleranceScalarTypeResult
{
    public required bool UseHighTolerance { get; init; }

    public required double HighTolerance { get; init; }

    public required bool UseLowTolerance { get; init; }

    public required double LowTolerance { get; init; }

    public required ToleranceScalarOptions ToleranceOptions { get; init; }
}

public Task<GetRelationshipToleranceScalarTypeResult> GetRelationshipToleranceScalarTypeAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipToleranceScalarTypeAsync(relationshipName: relationshipName);
```

Returns the 5 MP outputs in the named `GetRelationshipToleranceScalarTypeResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Tolerance (Vector Type)

[Get Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-tolerance-vector-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighXTolerance` | `bool` | `Use High X Tolerance?` |
| `HighXTolerance` | `double` | `High X Tolerance` |
| `UseHighYTolerance` | `bool` | `Use High Y Tolerance?` |
| `HighYTolerance` | `double` | `High Y Tolerance` |
| `UseHighZTolerance` | `bool` | `Use High Z Tolerance?` |
| `HighZTolerance` | `double` | `High Z Tolerance` |
| `UseHighMagTolerance` | `bool` | `Use High Mag Tolerance?` |
| `HighMagTolerance` | `double` | `High Mag Tolerance` |
| `UseLowXTolerance` | `bool` | `Use Low X Tolerance?` |
| `LowXTolerance` | `double` | `Low X Tolerance` |
| `UseLowYTolerance` | `bool` | `Use Low Y Tolerance?` |
| `LowYTolerance` | `double` | `Low Y Tolerance` |
| `UseLowZTolerance` | `bool` | `Use Low Z Tolerance?` |
| `LowZTolerance` | `double` | `Low Z Tolerance` |
| `UseLowMagTolerance` | `bool` | `Use Low Mag Tolerance?` |
| `LowMagTolerance` | `double` | `Low Mag Tolerance` |
| `VectorTolerance` | `ToleranceVectorOptions` | `Vector Tolerance` |

```csharp
public sealed record GetRelationshipToleranceVectorTypeResult
{
    public required bool UseHighXTolerance { get; init; }

    public required double HighXTolerance { get; init; }

    public required bool UseHighYTolerance { get; init; }

    public required double HighYTolerance { get; init; }

    public required bool UseHighZTolerance { get; init; }

    public required double HighZTolerance { get; init; }

    public required bool UseHighMagTolerance { get; init; }

    public required double HighMagTolerance { get; init; }

    public required bool UseLowXTolerance { get; init; }

    public required double LowXTolerance { get; init; }

    public required bool UseLowYTolerance { get; init; }

    public required double LowYTolerance { get; init; }

    public required bool UseLowZTolerance { get; init; }

    public required double LowZTolerance { get; init; }

    public required bool UseLowMagTolerance { get; init; }

    public required double LowMagTolerance { get; init; }

    public required ToleranceVectorOptions VectorTolerance { get; init; }
}

public Task<GetRelationshipToleranceVectorTypeResult> GetRelationshipToleranceVectorTypeAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipToleranceVectorTypeAsync(relationshipName: relationshipName);
```

Returns the 17 MP outputs in the named `GetRelationshipToleranceVectorTypeResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Type

[Get Relationship Type](/mp-command-catalog/commands/relationship-operations#get-relationship-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RelationshipType` | `string` | `Relationship Type` |

```csharp
public Task<string> GetRelationshipTypeAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipTypeAsync(relationshipName: relationshipName);
```

Returns the MP output `Relationship Type` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Weighting

[Get Relationship Weighting](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#get-relationship-weighting)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Weight` | `double` | `Weight` |

```csharp
public Task<double> GetRelationshipWeightingAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipWeightingAsync(relationshipName: relationshipName);
```

Returns the MP output `Weight` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Pipe Fitting Relationship

[Make Pipe Fitting Relationship](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-pipe-fitting-relationship)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `pipe1ObjectName` | `CollectionObjectName` | `Pipe 1 - Object Name` | Required |
| `pipe2ObjectName` | `CollectionObjectName` | `Pipe 2 - Object Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakePipeFittingRelationshipAsync(
    CollectionItemName relationshipName,
    CollectionObjectName pipe1ObjectName,
    CollectionObjectName pipe2ObjectName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakePipeFittingRelationshipAsync(relationshipName: relationshipName, pipe1ObjectName: pipe1ObjectName, pipe2ObjectName: pipe2ObjectName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Pipe Relationship Cut

[Make Pipe Relationship Cut](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#make-pipe-relationship-cut)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `pipe1MakeCut` | `bool` | `Pipe 1 - Make Cut` | true |
| `pipe1CreateFrame` | `bool` | `Pipe 1 - Create Frame` | false |
| `pipe1FrameName` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe2MakeCut` | `bool` | `Pipe 2 - Make Cut` | true |
| `pipe2CreateFrame` | `bool` | `Pipe 2 - Create Frame` | false |
| `pipe2FrameName` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakePipeRelationshipCutAsync(
    CollectionItemName relationshipName,
    bool pipe1MakeCut,
    bool pipe1CreateFrame,
    CollectionObjectName pipe1FrameName,
    bool pipe2MakeCut,
    bool pipe2CreateFrame,
    CollectionObjectName pipe2FrameName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakePipeRelationshipCutAsync(relationshipName: relationshipName, pipe1MakeCut: pipe1MakeCut, pipe1CreateFrame: pipe1CreateFrame, pipe1FrameName: pipe1FrameName, pipe2MakeCut: pipe2MakeCut, pipe2CreateFrame: pipe2CreateFrame, pipe2FrameName: pipe2FrameName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Pipe Relationship Force Cut to Frame

[Pipe Relationship Force Cut to Frame](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#pipe-relationship-force-cut-to-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `pipe1ForceCutToFrame` | `bool` | `Pipe 1 - Force Cut to Frame?` | true |
| `pipe1FrameName` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe2ForceCutToFrame` | `bool` | `Pipe 2 - Force Cut to Frame?` | true |
| `pipe2FrameName` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task PipeRelationshipForceCutToFrameAsync(
    CollectionItemName relationshipName,
    bool pipe1ForceCutToFrame,
    CollectionObjectName pipe1FrameName,
    bool pipe2ForceCutToFrame,
    CollectionObjectName pipe2FrameName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.PipeRelationshipForceCutToFrameAsync(relationshipName: relationshipName, pipe1ForceCutToFrame: pipe1ForceCutToFrame, pipe1FrameName: pipe1FrameName, pipe2ForceCutToFrame: pipe2ForceCutToFrame, pipe2FrameName: pipe2FrameName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Auto Measure Nominal Feature

[Set Geom Relationship Auto Measure Nominal Feature](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-geom-relationship-auto-measure-nominal-feature)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `trapCloudsFalseGeometry` | `bool` | `Trap Clouds? (FALSE = Geometry)` | true |
| `instrumentId` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `measurementMode` | `string` | `Measurement Mode` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipAutoMeasureNominalFeatureAsync(
    CollectionItemName relationshipName,
    bool trapCloudsFalseGeometry,
    CollectionInstrumentId instrumentId,
    string measurementMode = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipAutoMeasureNominalFeatureAsync(relationshipName: relationshipName, trapCloudsFalseGeometry: trapCloudsFalseGeometry, instrumentId: instrumentId);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Auto Vectors Nominal (AVN)

[Set Geom Relationship Auto Vectors Nominal (AVN)](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `createAutoVectorsAvn` | `bool` | `Create Auto Vectors AVN` | false |
| `pointsType` | `PointFilterInputType` | `Points Type` | Cardinal Points |
| `useVectorGroupCustomPrefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| `vectorGroupCustomPrefix` | `string` | `Vector Group Custom Prefix` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipAutoVectorsNominalAvnAsync(
    CollectionItemName relationshipName,
    bool createAutoVectorsAvn,
    PointFilterInputType pointsType,
    bool useVectorGroupCustomPrefix = false,
    string vectorGroupCustomPrefix = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipAutoVectorsNominalAvnAsync(relationshipName: relationshipName, createAutoVectorsAvn: createAutoVectorsAvn, pointsType: pointsType);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Cardinal Points

[Set Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-geom-relationship-cardinal-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `createCardinalPtsWhenFitting` | `bool` | `Create Cardinal Pts when Fitting?` | true |
| `prefixCardinalPtsNameWithRelName` | `bool` | `Prefix Cardinal Pts name with Rel name?` | true |
| `cardinalPtsGroupName` | `string` | `Cardinal Pts Group Name` | GR-Cardinal Pts |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipCardinalPointsAsync(
    CollectionItemName relationshipName,
    bool createCardinalPtsWhenFitting = true,
    bool prefixCardinalPtsNameWithRelName = true,
    string cardinalPtsGroupName = "GR-Cardinal Pts",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipCardinalPointsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Criteria

[Set Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-geom-relationship-criteria)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `criteria` | `string` | `Criteria` | Empty |
| `showInReport` | `bool` | `Show in Report` | true |
| `toleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |
| `optimizationDeltaWeight` | `double` | `Optimization: Delta Weight` | 0.000000 |
| `optimizationOutOfToleranceWeight` | `double` | `Optimization: Out of Tolerance Weight` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipCriteriaAsync(
    CollectionItemName relationshipName,
    string criteria = "",
    bool showInReport = true,
    ToleranceScalarOptions toleranceOptions = default,
    double optimizationDeltaWeight = 0.000000,
    double optimizationOutOfToleranceWeight = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipCriteriaAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Measured Geometry

[Set Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-geom-relationship-measured-geometry)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `measuredGeometry` | `CollectionObjectName` | `Measured Geometry` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipMeasuredGeometryAsync(
    CollectionItemName relationshipName,
    CollectionObjectName measuredGeometry,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipMeasuredGeometryAsync(relationshipName: relationshipName, measuredGeometry: measuredGeometry);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Nominal Avg Point

[Set Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-geom-relationship-nominal-avg-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `compareToNominal` | `bool` | `Compare To Nominal?` | true |
| `nominalAveragePoint` | `PointName` | `Nominal Average Point` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipNominalAvgPointAsync(
    CollectionItemName relationshipName,
    bool compareToNominal,
    PointName nominalAveragePoint,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipNominalAvgPointAsync(relationshipName: relationshipName, compareToNominal: compareToNominal, nominalAveragePoint: nominalAveragePoint);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Nominal Geometry

[Set Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-geom-relationship-nominal-geometry)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `compareToNominal` | `bool` | `Compare To Nominal?` | true |
| `nominalGeometry` | `CollectionObjectName` | `Nominal Geometry` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipNominalGeometryAsync(
    CollectionItemName relationshipName,
    bool compareToNominal,
    CollectionObjectName nominalGeometry,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipNominalGeometryAsync(relationshipName: relationshipName, compareToNominal: compareToNominal, nominalGeometry: nominalGeometry);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Projection Plane

[Set Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-geom-relationship-projection-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `projectToPlane` | `bool` | `Project to Plane?` | true |
| `projectionPlaneName` | `CollectionObjectName` | `Projection Plane Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipProjectionPlaneAsync(
    CollectionItemName relationshipName,
    bool projectToPlane,
    CollectionObjectName projectionPlaneName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipProjectionPlaneAsync(relationshipName: relationshipName, projectToPlane: projectToPlane, projectionPlaneName: projectionPlaneName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Object to Object Direction Relationship Fit Constraints

[Set Object to Object Direction Relationship Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `angleBetweenVectorsFitConstraints` | `FitConstraintScalarOptions` | `Angle Between Vectors Fit Constraints` | Both limits disabled |
| `mutualPerpendicularLengthFitConstraints` | `FitConstraintScalarOptions` | `Mutual Perpendicular Length Fit Constraints` | Both limits disabled |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetObjectToObjectDirectionRelationshipFitConstraintsAsync(
    CollectionItemName relationshipName,
    FitConstraintScalarOptions angleBetweenVectorsFitConstraints = default,
    FitConstraintScalarOptions mutualPerpendicularLengthFitConstraints = default,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetObjectToObjectDirectionRelationshipFitConstraintsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Pipe Relationship Segment Properties

[Set Pipe Relationship Segment Properties](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-pipe-relationship-segment-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `pipe1InnerDiameter` | `double` | `Pipe 1 - Inner Diameter` | 0.000000 |
| `pipe1OuterDiameter` | `double` | `Pipe 1 - Outer Diameter` | 0.000000 |
| `pipe1CutBegin` | `double` | `Pipe 1 - Cut Begin` | 0.000000 |
| `pipe1CutEnd` | `double` | `Pipe 1 - Cut End` | 0.000000 |
| `pipe2InnerDiameter` | `double` | `Pipe 2 - Inner Diameter` | 0.000000 |
| `pipe2OuterDiameter` | `double` | `Pipe 2 - Outer Diameter` | 0.000000 |
| `pipe2CutBegin` | `double` | `Pipe 2 - Cut Begin` | 0.000000 |
| `pipe2CutEnd` | `double` | `Pipe 2 - Cut End` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPipeRelationshipSegmentPropertiesAsync(
    CollectionItemName relationshipName,
    double pipe1InnerDiameter = 0.000000,
    double pipe1OuterDiameter = 0.000000,
    double pipe1CutBegin = 0.000000,
    double pipe1CutEnd = 0.000000,
    double pipe2InnerDiameter = 0.000000,
    double pipe2OuterDiameter = 0.000000,
    double pipe2CutBegin = 0.000000,
    double pipe2CutEnd = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPipeRelationshipSegmentPropertiesAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Pipe Relationship Weights

[Set Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-pipe-relationship-weights)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `overallWeight` | `double` | `Overall Weight` | 1.000000 |
| `axisOffset` | `double` | `Axis Offset` | 2.000000 |
| `axisAlignment` | `double` | `Axis Alignment` | 1.000000 |
| `centerPull` | `double` | `Center Pull` | 0.100000 |
| `outOfMaterialWeight` | `double` | `Out of material - Weight` | 10.000000 |
| `outOfMaterialOffset` | `double` | `Out of material - Offset` | 1.000000 |
| `constrainRegionAtOd` | `bool` | `Constrain Region at OD` | false |
| `constrainIdOdOverlap` | `bool` | `Constrain ID/OD overlap` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetPipeRelationshipWeightsAsync(
    CollectionItemName relationshipName,
    double overallWeight = 1.000000,
    double axisOffset = 2.000000,
    double axisAlignment = 1.000000,
    double centerPull = 0.100000,
    double outOfMaterialWeight = 10.000000,
    double outOfMaterialOffset = 1.000000,
    bool constrainRegionAtOd = false,
    bool constrainIdOdOverlap = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetPipeRelationshipWeightsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Auto Vectors Fit (AVF)

[Set Relationship Auto Vectors Fit (AVF)](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-auto-vectors-fit-avf)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `createAutoVectorsAvf` | `bool` | `Create Auto Vectors AVF` | false |
| `useVectorGroupCustomPrefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| `vectorGroupCustomPrefix` | `string` | `Vector Group Custom Prefix` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipAutoVectorsFitAvfAsync(
    CollectionItemName relationshipName,
    bool createAutoVectorsAvf = false,
    bool useVectorGroupCustomPrefix = false,
    string vectorGroupCustomPrefix = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipAutoVectorsFitAvfAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Auto Vectors Group Default Prefix

[Set Relationship Auto Vectors Group Default Prefix](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-auto-vectors-group-default-prefix)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geomRelAvnVgDefaultPrefix` | `string` | `Geom Rel AVN VG Default Prefix` | GR-AVN- |
| `geomRelAvfVgDefaultPrefix` | `string` | `Geom Rel AVF VG Default Prefix` | GR-AVF- |
| `nonGeomRelVgDefaultPrefix` | `string` | `Non-Geom Rel VG Default Prefix` | Auto Vectors:  |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipAutoVectorsGroupDefaultPrefixAsync(
    string geomRelAvnVgDefaultPrefix = "GR-AVN-",
    string geomRelAvfVgDefaultPrefix = "GR-AVF-",
    string nonGeomRelVgDefaultPrefix = "Auto Vectors: ",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipAutoVectorsGroupDefaultPrefixAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Desired Meas Count

[Set Relationship Desired Meas Count](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-desired-meas-count)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `desiredMeasurementCount` | `int` | `Desired Measurement Count` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipDesiredMeasCountAsync(
    CollectionItemName relationshipName,
    int desiredMeasurementCount = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipDesiredMeasCountAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Dormant Status

[Set Relationship Dormant Status](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-dormant-status)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `IEnumerable<CollectionItemName>` | `Relationships` | Required |
| `dormantStatus` | `bool` | `Dormant Status` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipDormantStatusAsync(
    IEnumerable<CollectionItemName> relationships,
    bool dormantStatus = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipDormantStatusAsync(relationships: relationships);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Fit Constraints (Scalar Type)

[Set Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-fit-constraints-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `fitConstraintOptions` | `FitConstraintScalarOptions` | `Fit Constraint Options` | Both limits disabled |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipFitConstraintsScalarTypeAsync(
    CollectionItemName relationshipName,
    FitConstraintScalarOptions fitConstraintOptions = default,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipFitConstraintsScalarTypeAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Orientation Fit Constraints (Vector Type)

[Set Relationship Orientation Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `orientationVectorConstraint` | `ToleranceVectorOptions` | `Orientation Vector Constraint` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipOrientationFitConstraintsVectorTypeAsync(
    CollectionItemName relationshipName,
    ToleranceVectorOptions orientationVectorConstraint,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipOrientationFitConstraintsVectorTypeAsync(relationshipName: relationshipName, orientationVectorConstraint: orientationVectorConstraint);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Outlier Rejection (Scalar Type)

[Set Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-outlier-rejection-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipOutlierRejectionScalarTypeAsync(
    CollectionItemName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipOutlierRejectionScalarTypeAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Position Fit Constraints (Vector Type)

[Set Relationship Position Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-position-fit-constraints-vector-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `positionVectorConstraint` | `ToleranceVectorOptions` | `Position Vector Constraint` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipPositionFitConstraintsVectorTypeAsync(
    CollectionItemName relationshipName,
    ToleranceVectorOptions positionVectorConstraint,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipPositionFitConstraintsVectorTypeAsync(relationshipName: relationshipName, positionVectorConstraint: positionVectorConstraint);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Projection Options

[Set Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-projection-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipProjectionOptionsAsync(
    CollectionItemName relationshipName,
    ProjectionOptions projectionOptions,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipProjectionOptionsAsync(relationshipName: relationshipName, projectionOptions: projectionOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Reporting Frame

[Set Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-reporting-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipReportingFrameAsync(
    CollectionItemName relationshipName,
    CollectionObjectName reportingFrame,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipReportingFrameAsync(relationshipName: relationshipName, reportingFrame: reportingFrame);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Sigmoidal Gap Fit Constraints

[Set Relationship Sigmoidal Gap Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `useSigmoidalGapConstraints` | `bool` | `Use Sigmoidal Gap Constraints` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipSigmoidalGapFitConstraintsAsync(
    CollectionItemName relationshipName,
    bool useSigmoidalGapConstraints = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipSigmoidalGapFitConstraintsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Sub Sampling Options

[Set Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-sub-sampling-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `useEveryIthPoint` | `bool` | `Use every i-th point` | false |
| `iValue` | `int` | `i value` | 20 |
| `useNoMoreThanNPoints` | `bool` | `Use no more than n points` | true |
| `nValue` | `int` | `n value` | 10000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipSubSamplingOptionsAsync(
    CollectionItemName relationshipName,
    bool useEveryIthPoint = false,
    int iValue = 20,
    bool useNoMoreThanNPoints = true,
    int nValue = 10000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipSubSamplingOptionsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Tolerance (Scalar Type)

[Set Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-tolerance-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `toleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipToleranceScalarTypeAsync(
    CollectionItemName relationshipName,
    ToleranceScalarOptions toleranceOptions = default,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipToleranceScalarTypeAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Tolerance (Vector Type)

[Set Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-tolerance-vector-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `vectorTolerance` | `ToleranceVectorOptions` | `Vector Tolerance` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipToleranceVectorTypeAsync(
    CollectionItemName relationshipName,
    ToleranceVectorOptions vectorTolerance,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipToleranceVectorTypeAsync(relationshipName: relationshipName, vectorTolerance: vectorTolerance);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Voxel Cloud Display

[Set Relationship Voxel Cloud Display](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-voxel-cloud-display)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `enableVoxelCloudDisplay` | `bool` | `Enable Voxel Cloud Display?` | true |
| `voxelSize10Autodetect` | `double` | `Voxel Size (-1.0 autodetect)` | -1.000000 |
| `minPtsCountPerVoxel` | `int` | `Min Pts Count Per Voxel` | 3 |
| `voxelRenderingDiameter10Fast` | `double` | `Voxel Rendering Diameter % (-1.0 fast)` | 125.000000 |
| `surfaceAnalysisMode` | `SurfaceAnalysisMode` | `Surface Analysis Mode` | Relationship |
| `colorizationOptions` | `ColorizationOptions` | `Colorization Options` | Red |
| `showColorBarInView` | `bool` | `Show Color Bar in View?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipVoxelCloudDisplayAsync(
    CollectionItemName relationshipName,
    bool enableVoxelCloudDisplay,
    double voxelSize10Autodetect,
    int minPtsCountPerVoxel,
    double voxelRenderingDiameter10Fast,
    SurfaceAnalysisMode surfaceAnalysisMode,
    ColorizationOptions colorizationOptions,
    bool showColorBarInView = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipVoxelCloudDisplayAsync(relationshipName: relationshipName, enableVoxelCloudDisplay: enableVoxelCloudDisplay, voxelSize10Autodetect: voxelSize10Autodetect, minPtsCountPerVoxel: minPtsCountPerVoxel, voxelRenderingDiameter10Fast: voxelRenderingDiameter10Fast, surfaceAnalysisMode: surfaceAnalysisMode, colorizationOptions: colorizationOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Weighting

[Set Relationship Weighting](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-weighting)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionItemName` | `Relationship Name` | Required |
| `weight` | `double` | `Weight` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipWeightingAsync(
    CollectionItemName relationshipName,
    double weight = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipWeightingAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Weights Normalized

[Set Relationship Weights Normalized](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) · [gRPC contract](/api/grpc/0.5.1/relationship-operations#set-relationship-weights-normalized)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionName` | `CollectionName` | `Collection Name` | Required |
| `pickWeightingMode` | `RelWeightingMode` | `Pick Weighting Mode` | Normalize on equation count |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipWeightsNormalizedAsync(
    CollectionName collectionName,
    RelWeightingMode pickWeightingMode,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipWeightsNormalizedAsync(collectionName: collectionName, pickWeightingMode: pickWeightingMode);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
