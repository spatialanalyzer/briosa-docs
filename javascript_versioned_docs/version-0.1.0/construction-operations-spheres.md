---
title: Construction Operations / Spheres
description: Briosa 0.1.0 JavaScript and TypeScript APIs for sphere construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Spheres

## Types

```ts
export interface ConstructSphereInput {
  readonly sphereName: CollectionObjectName;
  readonly sphereCenterInWorkingCoordinates: Vector;
  readonly sphereRadius: number;
}
```

## Functions

```ts
function constructSphere(
  briosa: BriosaClient,
  input: ConstructSphereInput,
  options?: BriosaCallOptions,
): Promise<void>;

function constructSpheresFromSurfaceFacesRuntimeSelect(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await constructSphere(briosa, {
  sphereName: sphere,
  sphereCenterInWorkingCoordinates: {x: 0, y: 0, z: 0},
  sphereRadius: 25,
});
```

Briosa adds no radius safeguards. Runtime face selection is operator-interactive;
Escape is an MP failure, and an abort does not prove the interaction stopped.
Neither call is automatically replayed.

[Catalog](/mp-command-catalog/commands/construction-operations-spheres) · [gRPC](/api/grpc/0.5.1/construction-operations-spheres)
