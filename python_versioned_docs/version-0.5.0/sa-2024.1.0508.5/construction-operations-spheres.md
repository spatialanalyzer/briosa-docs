---
title: Construction Operations / Spheres
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Spheres

[SA 2026.1.0529.7](/api/python/construction-operations-spheres) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-spheres)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Construct Sphere {/* #construct-sphere */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-spheres#construct-sphere) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-spheres#construct-sphere)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_sphere(
        self,
        sphere_name: CollectionObjectName,
        sphere_center: Vector,
        sphere_radius: float,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `sphere_center` | Expressed in working coordinates. |

## Construct Spheres From Surface Faces - Runtime Select {/* #construct-spheres-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-spheres#construct-spheres-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-spheres#construct-spheres-from-surface-faces---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```python
async def construct_spheres_from_surface_faces_runtime_select(
        self,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## construct_sphere {/* #construct_sphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_spheres_from_surface_faces_runtime_select {/* #construct_spheres_from_surface_faces_runtime_select */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2024.1.0508.5)
