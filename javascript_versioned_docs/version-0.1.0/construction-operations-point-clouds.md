---
title: Construction Operations / Point Clouds
description: Briosa 0.1.0 JavaScript and TypeScript APIs for selected point-cloud construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Point Clouds

## Shared Types

```ts
export type CloudThinningMode = "None" | "Random" | "Nth Point";

export interface CloudThinningOptions {
  readonly mode?: CloudThinningMode;
  readonly pointIncrement?: number;
  readonly minimumNumberOfPoints?: number;
  readonly maximumNumberOfPoints?: number;
}
```

Omitted thinning values use `"Nth Point"`, `5`, `100`, and `20000`.

## Input Types

```ts
export interface ConstructPointCloudsFromExistingPointGroupInput {
  readonly pointGroupName: CollectionObjectName;
  readonly cloudName: CollectionObjectName;
}
export interface ConstructPointCloudsFromExistingCloudPointsRuntimeSelectInput {
  readonly cloudName: CollectionObjectName;
}
export interface ConstructPointCloudsFromExistingCloudsUniformSpacingInput {
  readonly existingPointCloudList: Iterable<CollectionObjectName>;
  readonly newCloudName: CollectionObjectName;
  readonly desiredPointSpacing?: number;
  readonly minimumPointsPerOutputPoint?: number;
  readonly hideOriginalPointClouds?: boolean;
}
export interface ConstructPointCloudFromExistingCloudsInput {
  readonly existingPointCloudList: Iterable<CollectionObjectName>;
  readonly newCloudName: CollectionObjectName;
  readonly cloudThinningSettings?: CloudThinningOptions;
  readonly hideOriginalPointClouds?: boolean;
  readonly setCloudPointRgbFromVoxels?: boolean;
}
export interface ConstructPointCloudFromVisibleCloudPointsInput {
  readonly sourceClouds: Iterable<CollectionObjectName>;
  readonly destinationCloudName: CollectionObjectName;
}
export interface ConstructBoundaryPointsFromCloudInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly destinationCloudName: CollectionObjectName;
}
export interface ConstructPointCloudLimitingProbingDirectionsInput {
  readonly sourceCloudName: CollectionObjectName;
  readonly normalToObjectName: CollectionObjectName;
  readonly destinationCloudName: CollectionObjectName;
  readonly acceptanceAngle?: number;
  readonly hideSourceCloud?: boolean;
}
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
export interface ExtractSphereCentersFromPointCloudInput {
  readonly cloudName: CollectionObjectName;
  readonly groupNameForPoints: CollectionObjectName;
  readonly desiredDiameter?: number;
  readonly extractionTolerance?: number;
  readonly minimumPointCount?: number;
  readonly performFinalFit?: boolean;
  readonly finalFitConeAngle?: number;
}
```

## Functions

```ts
function constructPointCloudsFromExistingPointGroup(
  briosa: BriosaClient,
  input: ConstructPointCloudsFromExistingPointGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructPointCloudsFromExistingCloudPointsRuntimeSelect(
  briosa: BriosaClient,
  input: ConstructPointCloudsFromExistingCloudPointsRuntimeSelectInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructPointCloudsFromExistingCloudsUniformSpacing(
  briosa: BriosaClient,
  input: ConstructPointCloudsFromExistingCloudsUniformSpacingInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructPointCloudFromExistingClouds(
  briosa: BriosaClient,
  input: ConstructPointCloudFromExistingCloudsInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructPointCloudFromVisibleCloudPoints(
  briosa: BriosaClient,
  input: ConstructPointCloudFromVisibleCloudPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructBoundaryPointsFromCloud(
  briosa: BriosaClient,
  input: ConstructBoundaryPointsFromCloudInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructPointCloudLimitingProbingDirections(
  briosa: BriosaClient,
  input: ConstructPointCloudLimitingProbingDirectionsInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructCrossSectionCloud(
  briosa: BriosaClient,
  input: ConstructCrossSectionCloudInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructCrossSectionCloudUserSelect(
  briosa: BriosaClient,
  input: ConstructCrossSectionCloudUserSelectInput,
  options?: BriosaCallOptions,
): Promise<void>;

function extractSphereCentersFromPointCloud(
  briosa: BriosaClient,
  input: ExtractSphereCentersFromPointCloudInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

Uniform spacing defaults to `0.02`; cloud RGB defaults to `false`. User Select
has no maximum-section field because the exact SDK binding does not expose it.
The runtime-selection operation may continue in SpatialAnalyzer after an abort.
The client adds no cloud or numeric safeguards and never automatically replays
these calls.

[Catalog](/mp-command-catalog/commands/construction-operations-point-clouds) · [gRPC](/api/grpc/0.5.1/construction-operations-point-clouds)
