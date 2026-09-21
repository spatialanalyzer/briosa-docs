---
title: Construction Operations / Point Clouds
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Point Clouds

[SA 2026.1.0529.7](/api/dotnet/construction-operations-point-clouds) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-point-clouds)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Point Clouds from Existing Point Group {/* #construct-point-clouds-from-existing-point-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-point-group) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-point-clouds-from-existing-point-group)

```csharp
public Task ConstructPointCloudsFromExistingPointGroupAsync(
        CollectionObjectName pointGroupName,
        CollectionObjectName cloudName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Clouds from Existing Cloud Points - Runtime Select {/* #construct-point-clouds-from-existing-cloud-points---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-cloud-points---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-point-clouds-from-existing-cloud-points---runtime-select)

```csharp
public Task ConstructPointCloudsFromExistingCloudPointsRuntimeSelectAsync(
        CollectionObjectName cloudName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Clouds from Existing Clouds - Uniform Spacing {/* #construct-point-clouds-from-existing-clouds---uniform-spacing */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-clouds---uniform-spacing) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-point-clouds-from-existing-clouds---uniform-spacing)

```csharp
public Task ConstructPointCloudsFromExistingCloudsUniformSpacingAsync(
        IEnumerable<CollectionObjectName> existingPointCloudList,
        CollectionObjectName newCloudName,
        double desiredPointSpacing = 0.02,
        int minimumPointsPerOutputPoint = 3,
        bool hideOriginalPointClouds = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud from Existing Clouds {/* #construct-point-cloud-from-existing-clouds */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-existing-clouds) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-point-cloud-from-existing-clouds)

```csharp
public Task ConstructPointCloudFromExistingCloudsAsync(
        IEnumerable<CollectionObjectName> existingPointCloudList,
        CollectionObjectName newCloudName,
        CloudThinningOptions? cloudThinningSettings = null,
        bool hideOriginalPointClouds = true,
        bool setCloudPointRgbFromVoxels = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud from Visible Cloud Points {/* #construct-point-cloud-from-visible-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-visible-cloud-points) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-point-cloud-from-visible-cloud-points)

```csharp
public Task ConstructPointCloudFromVisibleCloudPointsAsync(
        IEnumerable<CollectionObjectName> sourceClouds,
        CollectionObjectName destinationCloudName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Boundary Points from Cloud {/* #construct-boundary-points-from-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-boundary-points-from-cloud) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-boundary-points-from-cloud)

```csharp
public Task ConstructBoundaryPointsFromCloudAsync(
        CollectionObjectName sourceCloudName,
        CollectionObjectName destinationCloudName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud Limiting Probing Directions {/* #construct-point-cloud-limiting-probing-directions */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-limiting-probing-directions) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-point-cloud-limiting-probing-directions)

```csharp
public Task ConstructPointCloudLimitingProbingDirectionsAsync(
        CollectionObjectName sourceCloudName,
        CollectionObjectName normalToObjectName,
        CollectionObjectName destinationCloudName,
        double acceptanceAngle = 30.0,
        bool hideSourceCloud = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cross Section Cloud {/* #construct-cross-section-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-cross-section-cloud) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-cross-section-cloud)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cross Section Cloud - User Select {/* #construct-cross-section-cloud---user-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-cross-section-cloud---user-select) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#construct-cross-section-cloud---user-select)

```csharp
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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Extract Sphere Centers from Point Cloud {/* #extract-sphere-centers-from-point-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#extract-sphere-centers-from-point-cloud) · [gRPC Contract](/api/grpc/construction-operations-point-clouds#extract-sphere-centers-from-point-cloud)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Point-Cloud Construction {/* #point-cloud-construction */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Cross-Section Clouds {/* #cross-section-clouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
