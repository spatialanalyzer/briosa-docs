---
title: Construction Operations / Surfaces
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Surfaces

[SA 2026.1.0529.7](/api/python/construction-operations-surfaces) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-surfaces)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Surfaces From Objects {/* #construct-surfaces-from-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-from-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-from-objects)

```python
async def construct_surfaces_from_objects(
        self,
        objects: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From BSplines {/* #construct-surface-from-bsplines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-bsplines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-bsplines)

```python
async def construct_surface_from_b_splines(
        self,
        resulting_surface_name: CollectionObjectName,
        b_spline_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Cylinder {/* #construct-surface-from-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-cylinder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-cylinder)

```python
async def construct_surface_from_cylinder(
        self,
        resulting_surface_name: CollectionObjectName,
        cylinder_name: CollectionObjectName,
        *,
        internal_cylinder: bool = True,
        use_theta_extent_mode: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Plane {/* #construct-surface-from-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-plane)

```python
async def construct_surface_from_plane(
        self,
        resulting_surface_name: CollectionObjectName,
        plane_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Sphere {/* #construct-surface-from-sphere */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-sphere) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-sphere)

```python
async def construct_surface_from_sphere(
        self,
        resulting_surface_name: CollectionObjectName,
        sphere_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Cone {/* #construct-surface-from-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-cone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-cone)

```python
async def construct_surface_from_cone(
        self,
        resulting_surface_name: CollectionObjectName,
        cone_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From a Collection of Surfaces {/* #construct-surface-from-a-collection-of-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-a-collection-of-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-a-collection-of-surfaces)

```python
async def construct_surface_from_collection_of_surfaces(
        self,
        surfaces_to_combine: Iterable[CollectionObjectName],
        resulting_surface_name: CollectionObjectName,
        *,
        hide_original_surfaces: bool = True,
        delete_original_surfaces: bool = False,
        enable_sewing_tolerance: bool = False,
        sewing_tolerance: float = -1.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface Fit From Nominal Surfaces and Actual Data {/* #construct-surface-fit-from-nominal-surfaces-and-actual-data */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-fit-from-nominal-surfaces-and-actual-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-fit-from-nominal-surfaces-and-actual-data)

```python
async def construct_surface_fit_from_nominal_surfaces_and_actual_data(
        self,
        nominal_surface: CollectionObjectName,
        actual_data_point_list: Iterable[PointName],
        resulting_surface_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface by Dissecting Surface(s) {/* #construct-surface-by-dissecting-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-by-dissecting-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-by-dissecting-surfaces)

```python
async def construct_surface_by_dissecting_surfaces(
        self,
        dissection_mode: SurfaceDissectionMode,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surfaces by Dissecting Surfaces from Ref List {/* #construct-surfaces-by-dissecting-surfaces-from-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-by-dissecting-surfaces-from-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-by-dissecting-surfaces-from-ref-list)

```python
async def construct_surfaces_by_dissecting_surfaces_from_ref_list(
        self,
        surfaces_to_dissect: Iterable[CollectionObjectName],
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Point Groups {/* #construct-surface-from-point-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-point-groups) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-point-groups)

```python
async def construct_surface_from_point_groups(
        self,
        group_name_list: Iterable[CollectionObjectName],
        resulting_surface_name: CollectionObjectName,
        *,
        b_spline_fit_options: BSplineFitOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surfaces By Projecting Points {/* #construct-surfaces-by-projecting-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-by-projecting-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-by-projecting-points)

```python
async def construct_surfaces_by_projecting_points(
        self,
        projection_target_name_list: Iterable[CollectionObjectName],
        point_list: Iterable[PointName],
        resulting_surface_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct surface by offsetting a surface {/* #construct-surface-by-offsetting-a-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-by-offsetting-a-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-by-offsetting-a-surface)

```python
async def construct_surface_by_offsetting_surface(
        self,
        reference_surface: Iterable[CollectionObjectName],
        *,
        surface_offset: float = 0.0,
        hide_original_surface: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Annotation Links {/* #construct-surface-from-annotation-links */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-annotation-links) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-annotation-links)

```python
async def construct_surface_from_annotation_links(
        self,
        annotation_list: Iterable[CollectionObjectName],
        resulting_surface_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Geometry From Surfaces {/* #construct-geometry-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-geometry-from-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-geometry-from-surfaces)

```python
async def construct_geometry_from_surfaces(
        self,
        surfaces: Iterable[CollectionObjectName],
        *,
        minimum_diameter: float = 0.0,
        maximum_diameter: float = 0.0,
        reference_frame: CollectionObjectName | None = None,
        destination_collection_name: CollectionName | None = None,
        base_name: str = "Geometry Object",
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## construct_surfaces_from_objects {/* #construct_surfaces_from_objects */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_from_b_splines {/* #construct_surface_from_b_splines */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_from_cylinder {/* #construct_surface_from_cylinder */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_from_plane {/* #construct_surface_from_plane */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_from_sphere {/* #construct_surface_from_sphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_from_cone {/* #construct_surface_from_cone */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_from_collection_of_surfaces {/* #construct_surface_from_collection_of_surfaces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_fit_from_nominal_surfaces_and_actual_data {/* #construct_surface_fit_from_nominal_surfaces_and_actual_data */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_by_dissecting_surfaces {/* #construct_surface_by_dissecting_surfaces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surfaces_by_dissecting_surfaces_from_ref_list {/* #construct_surfaces_by_dissecting_surfaces_from_ref_list */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_from_point_groups {/* #construct_surface_from_point_groups */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surfaces_by_projecting_points {/* #construct_surfaces_by_projecting_points */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_by_offsetting_surface {/* #construct_surface_by_offsetting_surface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_surface_from_annotation_links {/* #construct_surface_from_annotation_links */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_geometry_from_surfaces {/* #construct_geometry_from_surfaces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2024.1.0508.5)
