---
title: Construction Operations / BSplines
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / BSplines

[SA 2026.1.0529.7](/api/python/construction-operations-bsplines) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-bsplines)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct B-Spline From Points {/* #construct-b-spline-from-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-points) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-points)

```python
async def construct_b_spline_from_points(
        self,
        resulting_b_spline_name: CollectionObjectName,
        point_list: Iterable[PointName],
        *,
        b_spline_fit_options: BSplineFitOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Point Set {/* #construct-b-spline-from-point-set */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-point-set) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-point-set)

```python
async def construct_b_spline_from_point_set(
        self,
        resulting_b_spline_name: CollectionObjectName,
        point_set_container: CollectionObjectName,
        *,
        b_spline_fit_options: BSplineFitOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Several B-Splines {/* #construct-b-spline-from-several-b-splines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-several-b-splines) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-several-b-splines)

```python
async def construct_b_spline_from_several_b_splines(
        self,
        resulting_b_spline_name: CollectionObjectName,
        b_spline_list: Iterable[CollectionObjectName],
        *,
        close_resulting_b_spline: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Intersection of Plane and Surface {/* #construct-b-spline-from-intersection-of-plane-and-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface)

```python
async def construct_b_spline_from_intersection_of_plane_and_surface(
        self,
        resulting_b_spline_name: CollectionObjectName,
        plane_name: CollectionObjectName,
        surface_name: CollectionObjectName,
        *,
        approximation_tolerance: float = 0.0001,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Intersection of Surfaces {/* #construct-b-spline-from-intersection-of-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces)

```python
async def construct_b_spline_from_intersection_of_surfaces(
        self,
        resulting_b_spline_name: CollectionObjectName,
        first_surface_name: CollectionObjectName,
        second_surface_name: CollectionObjectName,
        *,
        approximation_tolerance: float = 0.0001,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Surfaces {/* #construct-b-splines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-surfaces) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-surfaces)

```python
async def construct_b_splines_from_surfaces(
        self,
        surface_list: Iterable[CollectionObjectName],
        *,
        resulting_b_spline_name_prefix: str | None = None,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Lines {/* #construct-b-splines-from-lines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-lines) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-lines)

```python
async def construct_b_splines_from_lines(
        self,
        line_list: Iterable[CollectionObjectName],
        *,
        resulting_b_spline_name_prefix: str | None = None,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Intersection of Plane and Mesh {/* #construct-b-splines-from-intersection-of-plane-and-mesh */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh)

```python
async def construct_b_splines_from_intersection_of_plane_and_mesh(
        self,
        resulting_b_spline_name: CollectionObjectName,
        plane_name: CollectionObjectName,
        mesh_name: CollectionObjectName,
        *,
        closed_line_segment_limit: int = 3,
        unclosed_line_segment_limit: int = 3,
        create_intersection_points: bool = True,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## B-Spline Fit Options Value {/* #b-spline-fit-options-value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
