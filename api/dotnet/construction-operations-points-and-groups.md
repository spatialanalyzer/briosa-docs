---
title: Construction Operations / Points and Groups
description: Next Briosa .NET APIs for selected point and group construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Points and Groups

These APIs are the .NET projection of the approved Next gRPC contract. They
preserve MP defaults, execute against live SpatialAnalyzer state, and are never
automatically replayed.

## Shared Types

```csharp
public enum SurveyTargetType { Triangle, Circle }
public enum WcfAxis { X, Y, Z }
public enum EdgePointMode { IncludeEdges, ExcludeEdges, EdgesOnly }

public sealed record ProjectedPointGradient(
    Vector ProjectedPoint,
    Vector NormalVector,
    Vector UDirection,
    Vector VDirection);

public sealed record ObjectOriginResult(
    Vector VectorRepresentation,
    double XValue,
    double YValue,
    double ZValue);

public sealed record GroupAverageResult(
    double RmsDeviation,
    double MaxAbsoluteDeviation,
    double AverageDeviation);
```

## Basic Point and Group Construction

```csharp
public Task ConstructPointFitToPointsAsync(
    IEnumerable<PointName> pointNames,
    PointName resultingPointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointInWorkingCoordinatesAsync(
    PointName pointName,
    Vector workingCoordinates,
    CancellationToken cancellationToken = default);

public Task ConstructPointFromSurveyTargetCenterAsync(
    CollectionObjectName cloudContainingTarget,
    PointName referenceSeedPoint,
    PointName resultCenterPointName,
    SurveyTargetType surveyTargetType = SurveyTargetType.Triangle,
    double searchDiameter = 0.0,
    CancellationToken cancellationToken = default);

public Task SetPointPositionInWorkingCoordinatesAsync(
    PointName pointName,
    Vector positionInWorkingCoordinates,
    CancellationToken cancellationToken = default);

public Task TransformPointsByDeltaAboutWorkingFrameAsync(
    IEnumerable<PointName> pointNameList,
    Vector deltaInWorkingCoordinates,
    CancellationToken cancellationToken = default);

public Task ConstructPointAtLineMidpointAsync(
    CollectionObjectName lineName,
    PointName pointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointGroupFromPointNameRefListAsync(
    IEnumerable<PointName> pointNameList,
    CollectionObjectName groupName,
    CancellationToken cancellationToken = default);

public Task<IReadOnlyList<CollectionObjectName>> ConstructPointGroupsFromVectorGroupsAsync(
    IEnumerable<CollectionObjectName> vectorGroups,
    string optionalGroupNameSuffix = "",
    bool makeVectorBeginPoints = false,
    bool makeVectorEndPoints = false,
    CancellationToken cancellationToken = default);

public Task ConstructPointGroupFromPointCloudAsync(
    CollectionObjectName cloudName,
    CollectionObjectName pointGroupName,
    string pointPrefix = "pt",
    int startingPointNumber = 0,
    double pointOffset = 0.0,
    bool subSampling = false,
    double subSamplingDistance = 0.5,
    bool showProgress = false,
    CancellationToken cancellationToken = default);

public Task<Vector> ConstructPointFromCloudPointRuntimeSelectAsync(
    string selectionPrompt = "Select cloud point",
    bool constructPoint = false,
    PointName? constructedPointName = null,
    CancellationToken cancellationToken = default);
```

Cloud selection is operator-interactive. If `constructPoint` is `false`, the
point name may be omitted. Cancellation does not prove the SA prompt stopped.

## Intersections and Projections

```csharp
public Task ConstructPointAtCircleCenterAsync(
    CollectionObjectName circleName,
    PointName pointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointAtIntersectionOfPlanesAsync(
    CollectionObjectName plane1Name,
    CollectionObjectName plane2Name,
    CollectionObjectName plane3Name,
    PointName pointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointAtIntersectionOfTwoLinesAsync(
    CollectionObjectName firstLineName,
    CollectionObjectName secondLineName,
    PointName resultingPointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointAtIntersectionOfPlaneAndLineAsync(
    CollectionObjectName planeName,
    CollectionObjectName lineName,
    PointName resultingPointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointAtIntersectionOfTwoBSplinesAsync(
    CollectionObjectName firstBSplineName,
    CollectionObjectName secondBSplineName,
    PointName pointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointAtIntersectionOfBSplineAndSurfacesAsync(
    CollectionObjectName bSplineName,
    IEnumerable<CollectionObjectName> surfaceList,
    PointName pointName,
    double approximationTolerance = 0.001,
    CancellationToken cancellationToken = default);

public Task ConstructPointsAtIntersectionOfCircleAndLineAsync(
    CollectionObjectName circleName,
    CollectionObjectName lineName,
    PointName basePointNameForResults,
    CancellationToken cancellationToken = default);

public Task ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesAsync(
    IEnumerable<CollectionObjectName> axisObjectList,
    IEnumerable<CollectionObjectName> surfaceList,
    CollectionObjectName resultantGroupName,
    string pointSuffix = "",
    CancellationToken cancellationToken = default);

public Task ConstructPointsFromCylinderAsync(
    CollectionObjectName cylinderName,
    CollectionObjectName groupName,
    CancellationToken cancellationToken = default);

public Task ConstructPointAtProjectionOfPointOntoObjectAsync(
    PointName pointToProject,
    CollectionObjectName objectName,
    PointName resultingPointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisAsync(
    IEnumerable<CollectionObjectName> surfaceList,
    IEnumerable<PointName> pointNames,
    WcfAxis axis,
    string groupNameToContainNewPoints = "",
    string pointNamePrefix = "",
    string pointNameSuffix = "",
    CancellationToken cancellationToken = default);

public Task ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisAsync(
    IEnumerable<CollectionObjectName> surfaceList,
    IEnumerable<PointName> pointNames,
    WcfAxis axis,
    string groupNameToContainNewPoints = "",
    string pointNamePrefix = "",
    string pointNameSuffix = "",
    CancellationToken cancellationToken = default);

public Task ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginAsync(
    IEnumerable<CollectionObjectName> surfaceList,
    IEnumerable<PointName> pointNames,
    string groupNameToContainNewPoints = "",
    string pointNamePrefix = "",
    string pointNameSuffix = "",
    CancellationToken cancellationToken = default);
```

The WCF projection methods require an explicit X, Y, or Z axis because the MP
Editor export has no valid default. The client maps spherical prefix and suffix
to their matching MP arguments.

## Gradients, Meshes, and Curves

```csharp
public Task<ProjectedPointGradient> GetGradientAtProjectedPointOnSurfaceAsync(
    PointName pointToProject,
    CollectionObjectName surfaceName,
    bool generateOutputVectorLines = false,
    CancellationToken cancellationToken = default);

public Task<ProjectedPointGradient> GetGradientAtProjectedPointOnSurfaceEdgeAsync(
    PointName pointToProject,
    CollectionObjectName surfaceEdgeBSpline,
    CollectionObjectName surfaceName,
    Vector? edgeOffsetDirection = null,
    double edgeOffsetDistance = 0.01,
    bool generateOutputVectorLines = false,
    CancellationToken cancellationToken = default);

public Task<IReadOnlyList<PointName>> ConstructPointsByProjectingPointsOnMeshAlongDirectionAsync(
    IEnumerable<PointName> referencePointNames,
    CollectionObjectName groupNameForProjectedPoints,
    CollectionObjectName objectProvidingDirectionReference,
    CollectionObjectName meshServingAsProjectionTarget,
    bool biDirectionalProjection = true,
    CancellationToken cancellationToken = default);

public Task ConstructPointsSpacedAtDistanceOnCurvesAsync(
    IEnumerable<CollectionObjectName> bSplineList,
    CollectionObjectName resultantGroupName,
    double distanceBetweenPoints = 0.5,
    string resultantPointNamePrefix = "",
    CancellationToken cancellationToken = default);

public Task ConstructPointsNSpacedOnCurvesAsync(
    IEnumerable<CollectionObjectName> bSplineList,
    CollectionObjectName resultantGroupName,
    int numberOfEvenlySpacedPoints = 10,
    string resultantPointNamePrefix = "",
    CancellationToken cancellationToken = default);

public Task ConstructPointsOnCurvesUsingMaxChordalDeviationAsync(
    IEnumerable<CollectionObjectName> bSplineList,
    CollectionObjectName resultantGroupName,
    double maximumChordalDeviation = 0.05,
    double maximumTrimEdgeAngle = 15.0,
    double maximumChordLength = 0.0,
    string resultantPointNamePrefix = "",
    CancellationToken cancellationToken = default);
```

A null edge offset is the zero vector. Mesh projection returns the Point Names
reported by SA.

## Surface, Layout, and Group Workflows

```csharp
public Task ConstructPointsOnObjectVerticesAsync(
    IEnumerable<CollectionObjectName> objectNameList,
    CollectionObjectName resultantGroupName,
    CancellationToken cancellationToken = default);

public Task ConstructPointsOnSurfacesByClickingAsync(
    CollectionObjectName groupNameForPoints,
    string firstPointName = "p0",
    CancellationToken cancellationToken = default);

public Task ConstructPointsFromSurfaceFacesRuntimeSelectAsync(
    CancellationToken cancellationToken = default);

public Task ConstructPointsFromSurfacesOnUvGridAsync(
    IEnumerable<CollectionObjectName> surfaceList,
    string uvPointGroupBaseName = "UV Points",
    bool makeEachLineSeparateGroup = false,
    int numberOfUGrids = 5,
    int numberOfVGrids = 5,
    EdgePointMode edgePointMode = EdgePointMode.IncludeEdges,
    CancellationToken cancellationToken = default);

public Task<ObjectOriginResult> ConstructPointAtObjectOriginAsync(
    CollectionObjectName objectName,
    PointName resultantPointName,
    CancellationToken cancellationToken = default);

public Task ConstructPointsShiftedInWorkingFrameAsync(
    IEnumerable<PointName> originalPoints,
    CollectionObjectName groupForNewPoints,
    Vector? shiftVector = null,
    CancellationToken cancellationToken = default);

public Task ConstructPointsCylindricallyShiftedAsync(
    CollectionObjectName referenceObjectName,
    IEnumerable<PointName> originalPoints,
    CollectionObjectName groupForNewPoints,
    double radialShift = 0.0,
    double thetaShiftDegrees = 0.0,
    double planarShift = 0.0,
    CancellationToken cancellationToken = default);

public Task ConstructPointsWildcardSelectionAsync(
    IEnumerable<CollectionObjectName> groupsToSelectFrom,
    PointName wildcardSelectionNames,
    CollectionObjectName groupForNewPoints,
    bool includePriorCompleteName = false,
    CancellationToken cancellationToken = default);

public Task ConstructPointsSubsetWithGreatestSpacingAsync(
    IEnumerable<PointName> pointsToSubsample,
    int subsetSize = 10,
    CollectionObjectName? groupForSubset = null,
    CancellationToken cancellationToken = default);

public Task ConstructPointsLayoutOnGridAsync(
    CollectionObjectName groupName,
    string pointPrefix = "p",
    double xMin = 0.0,
    double xMax = 100.0,
    int xCount = 10,
    double yMin = 0.0,
    double yMax = 50.0,
    int yCount = 10,
    double zMin = 0.0,
    double zMax = 0.0,
    int zCount = 1,
    CancellationToken cancellationToken = default);

public Task ConstructPointsAutoCorrespondTwoGroupsProximityAsync(
    CollectionObjectName referenceGroup,
    CollectionObjectName groupToBeCopied,
    CollectionObjectName groupToContainMatchedPoints,
    double samePointTolerance = 0.25,
    CancellationToken cancellationToken = default);

public Task ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceAsync(
    CollectionObjectName referenceGroup,
    CollectionObjectName groupToBeCopied,
    CollectionObjectName groupToContainMatchedPoints,
    double samePointTolerance = 0.1,
    CancellationToken cancellationToken = default);

public Task<GroupAverageResult> AverageSetOfGroupsAsync(
    IEnumerable<CollectionObjectName> groupNames,
    CollectionObjectName resultingGroupName,
    double rmsTolerance = 0.0,
    double maximumAbsoluteTolerance = 0.0,
    double maximumAverageTolerance = 0.0,
    CancellationToken cancellationToken = default);

public Task CopyGroupsExcludingObscuredPointsAsync(
    CollectionInstrumentId instrumentId,
    IEnumerable<CollectionObjectName> groupNames,
    CollectionName newCollectionName,
    CancellationToken cancellationToken = default);
```

`groupForSubset` omitted means the MP identity `Spaced Points`. Layout creates
the exact-target `PointGrid` object. Average tolerance failures may return
statistics as partial success. The two surface-selection calls are
operator-interactive.

## Point-Name Queries

```csharp
public Task<PointName> MakePointNameRuntimeSelectAsync(
    string userPrompt = "",
    CancellationToken cancellationToken = default);

public Task<PointName> MakePointNameEnsureUniqueAsync(
    PointName pointName,
    bool useNumberSuffix = false,
    CancellationToken cancellationToken = default);

public Task<IReadOnlyList<PointName>> MakePointNameRefListFromGroupAsync(
    CollectionObjectName groupName,
    CancellationToken cancellationToken = default);

public Task<IReadOnlyList<PointName>> MakePointNameRefListRuntimeSelectAsync(
    string userPrompt = "",
    CancellationToken cancellationToken = default);

public Task<IReadOnlyList<PointName>> MakePointNameRefListWildcardSelectAsync(
    string collectionWildcardCriteria = "*",
    string groupNameWildcardCriteria = "*",
    string pointNameWildcardCriteria = "*",
    CancellationToken cancellationToken = default);
```

These calls query or interact with live SA state. Ordinary Point Name creation
and list append/subtraction are local .NET operations and have no RPC.

## Hidden Point Bar

```csharp
public Task ClearHiddenPointBarDatabaseAsync(
    CancellationToken cancellationToken = default);

public Task<int> CreateHiddenPointRodAsync(
    string hiddenPointRodName,
    double targetToTargetDistance = 0.0,
    double targetToTipDistance = 0.0,
    double interPointTolerance = 0.0,
    CancellationToken cancellationToken = default);

public Task<int> GetHiddenPointRodIndexByNameAsync(
    string hiddenPointRodName,
    CancellationToken cancellationToken = default);

public Task DeleteHiddenPointRodAsync(
    int hiddenPointRodIndex = 0,
    CancellationToken cancellationToken = default);

public Task CreateHiddenPointAsync(
    PointName endAPointName,
    PointName endBPointName,
    PointName pointNameToCreate,
    int hiddenPointRodIndex = 0,
    bool overwriteExistingPoint = false,
    CancellationToken cancellationToken = default);
```

Clearing removes every current-job rod without confirmation. Rod indices are
unstable live SA state. Hidden-point tolerance failure may be partial success.

## Example

```csharp
var result = await briosa.ConstructionOperations.AverageSetOfGroupsAsync(
    groupNames,
    averagedGroup,
    rmsTolerance: 0.05);

Console.WriteLine(result.RmsDeviation);
```

Callers own state across multiple calls. A deadline or cancellation on an
interactive operation does not prove the SA interaction stopped.

[Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups) · [gRPC](/api/grpc/construction-operations-points-and-groups)
