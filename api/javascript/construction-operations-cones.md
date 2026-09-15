---
title: Construction Operations / Cones
description: Unreleased Briosa JavaScript and TypeScript APIs for selected cone-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Cones

## Construct Cone

```ts
export interface ConstructConeInput {
  readonly coneName: CollectionObjectName;
  readonly coneEndPoint: Vector;
  readonly coneAxis: Vector;
  readonly coneLength: number;
  readonly coneThetaStart: number;
  readonly coneThetaSpan: number;
  readonly coneIncludedAngle: number;
}

function constructCone(
  briosa: BriosaClient,
  input: ConstructConeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Every geometry value is required and passed through without client-side range
validation.

## Construct Cones From Surface Faces - Runtime Select

```ts
function constructConesFromSurfaceFacesRuntimeSelect(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The operator selects faces in SpatialAnalyzer. Aborting the call does not prove
the interaction stopped, and the client never automatically replays it.

[Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [gRPC](/api/grpc/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)
