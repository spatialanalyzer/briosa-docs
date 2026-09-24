---
title: Construction Operations / Polygonized Surfaces
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Polygonized Surfaces

[SA 2026.1.0529.7](/api/javascript/construction-operations-polygonized-surfaces) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-polygonized-surfaces)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Polygonized Surface from Point Clouds {/* #construct-polygonized-surface-from-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-polygonized-surfaces#construct-polygonized-surface-from-point-clouds) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-polygonized-surfaces#construct-polygonized-surface-from-point-clouds)

```ts
export interface ConstructPolygonizedSurfaceFromPointCloudsInput {
  readonly pointCloudList: Iterable<CollectionObjectName>;
  readonly meshOrientation: MeshOrientationType;
  readonly polygonizedSurfaceName: CollectionObjectName;
  readonly gridResolution?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPolygonizedSurfaceFromPointClouds(
    input: ConstructPolygonizedSurfaceFromPointCloudsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Types {/* #types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## constructPolygonizedSurfaceFromPointClouds {/* #constructpolygonizedsurfacefrompointclouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2024.1.0508.5)
