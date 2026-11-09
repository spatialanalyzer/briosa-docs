---
title: Construction Operations / Polygonized Surfaces
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Polygonized Surfaces

[SA 2026.1.0529.7](/api/python/construction-operations-polygonized-surfaces) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-polygonized-surfaces)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Construct Polygonized Surface from Point Clouds {/* #construct-polygonized-surface-from-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-polygonized-surfaces#construct-polygonized-surface-from-point-clouds) · [gRPC Contract](/api/grpc/construction-operations-polygonized-surfaces#construct-polygonized-surface-from-point-clouds)

Client 0.5.0 removed this method with behavioral contract major 3. On both exact targets SpatialAnalyzer reported an improper argument and returned no MP result, and the worker stalled until its watchdog ended it. No replacement polygonizes point clouds on these exact targets. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Shared Type {/* #shared-type */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_polygonized_surface_from_point_clouds {/* #construct_polygonized_surface_from_point_clouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2026.1.0529.7)
