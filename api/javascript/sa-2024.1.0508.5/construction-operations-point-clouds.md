---
title: Construction Operations / Point Clouds
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Point Clouds

[SA 2026.1.0529.7](/api/javascript/construction-operations-point-clouds) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-point-clouds)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Point Clouds from Existing Point Group {/* #construct-point-clouds-from-existing-point-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-clouds-from-existing-point-group)

```ts
export interface ConstructPointCloudsFromExistingPointGroupInput {
  readonly pointGroupName: CollectionObjectName;
  readonly cloudName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointCloudsFromExistingPointGroup(
    input: ConstructPointCloudsFromExistingPointGroupInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Clouds from Existing Cloud Points - Runtime Select {/* #construct-point-clouds-from-existing-cloud-points---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-cloud-points---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-clouds-from-existing-cloud-points---runtime-select)

```ts
export interface ConstructPointCloudsFromExistingCloudPointsRuntimeSelectInput {
  readonly cloudName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointCloudsFromExistingCloudPointsRuntimeSelect(
    input: ConstructPointCloudsFromExistingCloudPointsRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Clouds from Existing Clouds - Uniform Spacing {/* #construct-point-clouds-from-existing-clouds---uniform-spacing */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-clouds---uniform-spacing) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-clouds-from-existing-clouds---uniform-spacing)

```ts
export interface ConstructPointCloudsFromExistingCloudsUniformSpacingInput {
  readonly existingPointCloudList: Iterable<CollectionObjectName>;
  readonly newCloudName: CollectionObjectName;
  readonly desiredPointSpacing?: number;
  readonly minimumPointsPerOutputPoint?: number;
  readonly hideOriginalPointClouds?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointCloudsFromExistingCloudsUniformSpacing(
    input: ConstructPointCloudsFromExistingCloudsUniformSpacingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud from Existing Clouds {/* #construct-point-cloud-from-existing-clouds */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-existing-clouds) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-cloud-from-existing-clouds)

```ts
export interface ConstructPointCloudFromExistingCloudsInput {
  readonly existingPointCloudList: Iterable<CollectionObjectName>;
  readonly newCloudName: CollectionObjectName;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly hideOriginalPointClouds?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointCloudFromExistingClouds(
    input: ConstructPointCloudFromExistingCloudsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud from Visible Cloud Points {/* #construct-point-cloud-from-visible-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-visible-cloud-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-cloud-from-visible-cloud-points)

```ts
export interface ConstructPointCloudFromVisibleCloudPointsInput {
  readonly sourceClouds: Iterable<CollectionObjectName>;
  readonly destinationCloudName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointCloudFromVisibleCloudPoints(
    input: ConstructPointCloudFromVisibleCloudPointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Boundary Points from Cloud {/* #construct-boundary-points-from-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-boundary-points-from-cloud) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-boundary-points-from-cloud)

```ts
export interface ConstructBoundaryPointsFromCloudInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly destinationCloudName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructBoundaryPointsFromCloud(
    input: ConstructBoundaryPointsFromCloudInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud Limiting Probing Directions {/* #construct-point-cloud-limiting-probing-directions */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-limiting-probing-directions) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-cloud-limiting-probing-directions)

```ts
export interface ConstructPointCloudLimitingProbingDirectionsInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly normalToObjectName: CollectionObjectName;
  readonly destinationCloudName: CollectionObjectName;
  readonly acceptanceAngle?: number;
  readonly hideSourceCloud?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointCloudLimitingProbingDirections(
    input: ConstructPointCloudLimitingProbingDirectionsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cross Section Cloud {/* #construct-cross-section-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-cross-section-cloud) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-cross-section-cloud)

```ts
export interface ConstructCrossSectionCloudInput {
  readonly crossSectionCloudName: CollectionObjectName;
  readonly inputClouds: Iterable<CollectionObjectName>;
  readonly cylindricalCrossSectionMode?: boolean;
  readonly startDistance?: number;
  readonly sectionSpacing?: number;
  readonly proximityThreshold?: number;
  readonly maximumSectionCount?: number;
  readonly limitCrossSectionExtent?: boolean;
  readonly radiusLimit?: number;
  readonly projectToReferenceSurface?: boolean;
  readonly referenceObject?: CollectionObjectName;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly updateExistingCloud?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructCrossSectionCloud(
    input: ConstructCrossSectionCloudInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cross Section Cloud - User Select {/* #construct-cross-section-cloud---user-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-cross-section-cloud---user-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-cross-section-cloud---user-select)

```ts
export interface ConstructCrossSectionCloudUserSelectInput {
  readonly crossSectionCloudName: CollectionObjectName;
  readonly referencePlanes: Iterable<CollectionObjectName>;
  readonly inputClouds: Iterable<CollectionObjectName>;
  readonly proximityThreshold?: number;
  readonly limitCrossSectionExtent?: boolean;
  readonly radiusLimit?: number;
  readonly projectToReferenceSurface?: boolean;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly updateExistingCloud?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructCrossSectionCloudUserSelect(
    input: ConstructCrossSectionCloudUserSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Extract Sphere Centers from Point Cloud {/* #extract-sphere-centers-from-point-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#extract-sphere-centers-from-point-cloud) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#extract-sphere-centers-from-point-cloud)

```ts
export interface ExtractSphereCentersFromPointCloudInput {
  readonly cloudName: CollectionObjectName;
  readonly groupNameForPoints: CollectionObjectName;
  readonly desiredDiameter?: number;
  readonly extractionTolerance?: number;
  readonly minimumPointCount?: number;
  readonly performFinalFit?: boolean;
  readonly finalFitConeAngle?: number;
}

// Member of BriosaClient
interface BriosaClient {
  extractSphereCentersFromPointCloud(
    input: ExtractSphereCentersFromPointCloudInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Input Types {/* #input-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Functions {/* #functions */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
