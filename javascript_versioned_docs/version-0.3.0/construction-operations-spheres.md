---
title: Construction Operations / Spheres
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Spheres

[SA 2026.1.0529.7](/api/javascript/construction-operations-spheres) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-spheres)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Sphere {/* #construct-sphere */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-spheres#construct-sphere) · [gRPC Contract](/api/grpc/construction-operations-spheres#construct-sphere)

```ts
export interface ConstructSphereInput {
  readonly sphereName: CollectionObjectName;
  readonly sphereCenter: Vector;
  readonly sphereRadius: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructSphere(
    input: ConstructSphereInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `sphereCenter` | Expressed in working coordinates. |

## Construct Spheres From Surface Faces - Runtime Select {/* #construct-spheres-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-spheres#construct-spheres-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-spheres#construct-spheres-from-surface-faces---runtime-select)

```ts
// Member of BriosaClient
interface BriosaClient {
  constructSpheresFromSurfaceFacesRuntimeSelect(
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Types {/* #types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Functions {/* #functions */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
