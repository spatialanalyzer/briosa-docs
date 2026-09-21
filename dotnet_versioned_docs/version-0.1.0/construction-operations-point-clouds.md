---
title: Construction Operations / Point Clouds
description: Briosa 0.1.0 .NET APIs for selected point-cloud construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Point Clouds

## Shared Types

```csharp
public enum CloudThinningMode { None, Random, NthPoint }

public sealed record CloudThinningOptions(
    CloudThinningMode Mode = CloudThinningMode.NthPoint,
    int PointIncrement = 5,
    int MinimumNumberOfPoints = 100,
    int MaximumNumberOfPoints = 20000);
```

## Point-Cloud Construction

```csharp
public Task ConstructPointCloudsFromExistingPointGroupAsync(
    CollectionObjectName pointGroupName,
    CollectionObjectName cloudName,
    CancellationToken cancellationToken = default);

public Task ConstructPointCloudsFromExistingCloudPointsRuntimeSelectAsync(
    CollectionObjectName cloudName,
    CancellationToken cancellationToken = default);

public Task ConstructPointCloudsFromExistingCloudsUniformSpacingAsync(
    IEnumerable<CollectionObjectName> existingPointCloudList,
    CollectionObjectName newCloudName,
    double desiredPointSpacing = 0.02,
    int minimumPointsPerOutputPoint = 3,
    bool hideOriginalPointClouds = true,
    CancellationToken cancellationToken = default);

public Task ConstructPointCloudFromExistingCloudsAsync(
    IEnumerable<CollectionObjectName> existingPointCloudList,
    CollectionObjectName newCloudName,
    CloudThinningOptions? cloudThinningSettings = null,
    bool hideOriginalPointClouds = true,
    bool setCloudPointRgbFromVoxels = false,
    CancellationToken cancellationToken = default);

public Task ConstructPointCloudFromVisibleCloudPointsAsync(
    IEnumerable<CollectionObjectName> sourceClouds,
    CollectionObjectName destinationCloudName,
    CancellationToken cancellationToken = default);

public Task ConstructBoundaryPointsFromCloudAsync(
    CollectionObjectName sourceCloudName,
    CollectionObjectName destinationCloudName,
    CancellationToken cancellationToken = default);

public Task ConstructPointCloudLimitingProbingDirectionsAsync(
    CollectionObjectName sourceCloudName,
    CollectionObjectName normalToObjectName,
    CollectionObjectName destinationCloudName,
    double acceptanceAngle = 30.0,
    bool hideSourceCloud = false,
    CancellationToken cancellationToken = default);
```

A null thinning value uses the shared defaults. The runtime-selection method is
operator-interactive; cancellation does not prove the SpatialAnalyzer prompt
stopped.

## Cross-Section Clouds

```csharp
public Task ConstructCrossSectionCloudAsync(
    CollectionObjectName crossSectionCloudName,
    IEnumerable<CollectionObjectName> inputClouds,
    bool cylindricalCrossSectionMode = false,
    double startDistance = 0.0,
    double sectionSpacing = 0.0,
    double proximityThreshold = 0.0,
    int maximumSectionCount = 0,
    bool limitCrossSectionExtent = false,
    double radiusLimit = 0.0,
    bool projectToReferenceSurface = false,
    CollectionObjectName? referenceObject = null,
    CloudThinningOptions? cloudThinningSettings = null,
    bool updateExistingCloud = false,
    CancellationToken cancellationToken = default);

public Task ConstructCrossSectionCloudUserSelectAsync(
    CollectionObjectName crossSectionCloudName,
    IEnumerable<CollectionObjectName> referencePlanes,
    IEnumerable<CollectionObjectName> inputClouds,
    double proximityThreshold = 0.0,
    bool limitCrossSectionExtent = false,
    double radiusLimit = 0.0,
    bool projectToReferenceSurface = false,
    CloudThinningOptions? cloudThinningSettings = null,
    bool updateExistingCloud = false,
    CancellationToken cancellationToken = default);
```

`ConstructCrossSectionCloudUserSelectAsync` deliberately has no maximum-section
parameter because the exact SDK binding does not expose one.

## Extract Sphere Centers from Point Cloud

```csharp
public Task<int> ExtractSphereCentersFromPointCloudAsync(
    CollectionObjectName cloudName,
    CollectionObjectName groupNameForPoints,
    double desiredDiameter = 0.0,
    double extractionTolerance = 0.0,
    int minimumPointCount = 50,
    bool performFinalFit = true,
    double finalFitConeAngle = 120.0,
    CancellationToken cancellationToken = default);
```

The result is SpatialAnalyzer's `Number of Points Extracted`. The client adds no
point-cloud or numeric safeguards and never automatically replays these calls.

[Catalog](/mp-command-catalog/commands/construction-operations-point-clouds) · [gRPC](/api/grpc/0.5.1/construction-operations-point-clouds)
