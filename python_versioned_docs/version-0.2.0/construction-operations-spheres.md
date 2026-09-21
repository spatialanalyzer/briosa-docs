---
title: Construction Operations / Spheres
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Spheres

[SA 2026.1.0529.7](/api/python/construction-operations-spheres) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-spheres)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Sphere {/* #construct-sphere */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-spheres#construct-sphere) · [gRPC Contract](/api/grpc/construction-operations-spheres#construct-sphere)

```python
async def construct_sphere(
        self,
        sphere_name: CollectionObjectName,
        sphere_center_in_working_coordinates: Vector,
        sphere_radius: float,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Spheres From Surface Faces - Runtime Select {/* #construct-spheres-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-spheres#construct-spheres-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-spheres#construct-spheres-from-surface-faces---runtime-select)

```python
async def construct_spheres_from_surface_faces_runtime_select(
        self,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## construct_sphere {/* #construct_sphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_spheres_from_surface_faces_runtime_select {/* #construct_spheres_from_surface_faces_runtime_select */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
