---
title: Construction Operations / Polygonized Surfaces
description: Briosa 0.1.0 JavaScript and TypeScript API for polygonized-surface construction.
toc_max_heading_level: 2
---

# Construction Operations / Polygonized Surfaces

## Types

```ts
export type MeshOrientationType =
  | "Use Current Point of View"
  | "Use Current Working Frame";

export interface ConstructPolygonizedSurfaceFromPointCloudsInput {
  readonly pointCloudList: Iterable<CollectionObjectName>;
  readonly meshOrientation: MeshOrientationType;
  readonly polygonizedSurfaceName: CollectionObjectName;
  readonly gridResolution?: number;
}
```

## constructPolygonizedSurfaceFromPointClouds

```ts
function constructPolygonizedSurfaceFromPointClouds(
  briosa: BriosaClient,
  input: ConstructPolygonizedSurfaceFromPointCloudsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The point-cloud list must be nonempty. Orientation is required because the MP
Editor export does not provide a valid default. Grid resolution defaults to
`0.0`; no resolution or point-density safeguards are added.

```ts
await constructPolygonizedSurfaceFromPointClouds(briosa, {
  pointCloudList: pointClouds,
  meshOrientation: "Use Current Working Frame",
  polygonizedSurfaceName: destinationSurface,
  gridResolution: 0.05,
});
```

The call depends on live SA state and is never automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-polygonized-surfaces) · [gRPC](/api/grpc/0.5.1/construction-operations-polygonized-surfaces)
