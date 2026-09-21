---
title: Construction Operations / Point Clouds
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Point Clouds

[SA 2026.1.0529.7](/api/python/construction-operations-point-clouds) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-point-clouds)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Point Clouds from Existing Point Group {/* #construct-point-clouds-from-existing-point-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-clouds-from-existing-point-group)

```python
async def construct_point_clouds_from_existing_point_group(
        self,
        point_group_name: CollectionObjectName,
        cloud_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Clouds from Existing Cloud Points - Runtime Select {/* #construct-point-clouds-from-existing-cloud-points---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-cloud-points---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-clouds-from-existing-cloud-points---runtime-select)

```python
async def construct_point_clouds_from_existing_cloud_points_runtime_select(
        self,
        cloud_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Clouds from Existing Clouds - Uniform Spacing {/* #construct-point-clouds-from-existing-clouds---uniform-spacing */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-clouds-from-existing-clouds---uniform-spacing) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-clouds-from-existing-clouds---uniform-spacing)

```python
async def construct_point_clouds_from_existing_clouds_uniform_spacing(
        self,
        existing_point_cloud_list: Iterable[CollectionObjectName],
        new_cloud_name: CollectionObjectName,
        *,
        desired_point_spacing: float = 0.02,
        minimum_points_per_output_point: int = 3,
        hide_original_point_clouds: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud from Existing Clouds {/* #construct-point-cloud-from-existing-clouds */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-existing-clouds) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-cloud-from-existing-clouds)

```python
async def construct_point_cloud_from_existing_clouds(
        self,
        existing_point_cloud_list: Iterable[CollectionObjectName],
        new_cloud_name: CollectionObjectName,
        *,
        cloud_thinning_settings: CloudThinningOptions | None = None,
        hide_original_point_clouds: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud from Visible Cloud Points {/* #construct-point-cloud-from-visible-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-visible-cloud-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-cloud-from-visible-cloud-points)

```python
async def construct_point_cloud_from_visible_cloud_points(
        self,
        source_clouds: Iterable[CollectionObjectName],
        destination_cloud_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Boundary Points from Cloud {/* #construct-boundary-points-from-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-boundary-points-from-cloud) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-boundary-points-from-cloud)

```python
async def construct_boundary_points_from_cloud(
        self,
        source_cloud_name: CollectionObjectName,
        destination_cloud_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Cloud Limiting Probing Directions {/* #construct-point-cloud-limiting-probing-directions */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-limiting-probing-directions) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-point-cloud-limiting-probing-directions)

```python
async def construct_point_cloud_limiting_probing_directions(
        self,
        source_cloud_name: CollectionObjectName,
        normal_to_object_name: CollectionObjectName,
        destination_cloud_name: CollectionObjectName,
        *,
        acceptance_angle: float = 30.0,
        hide_source_cloud: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cross Section Cloud {/* #construct-cross-section-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-cross-section-cloud) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-cross-section-cloud)

```python
async def construct_cross_section_cloud(
        self,
        cross_section_cloud_name: CollectionObjectName,
        input_clouds: Iterable[CollectionObjectName],
        *,
        cylindrical_cross_section_mode: bool = False,
        start_distance: float = 0.0,
        section_spacing: float = 0.0,
        proximity_threshold: float = 0.0,
        maximum_section_count: int = 0,
        limit_cross_section_extent: bool = False,
        radius_limit: float = 0.0,
        project_to_reference_surface: bool = False,
        reference_object: CollectionObjectName | None = None,
        cloud_thinning_settings: CloudThinningOptions | None = None,
        update_existing_cloud: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cross Section Cloud - User Select {/* #construct-cross-section-cloud---user-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#construct-cross-section-cloud---user-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#construct-cross-section-cloud---user-select)

```python
async def construct_cross_section_cloud_user_select(
        self,
        cross_section_cloud_name: CollectionObjectName,
        reference_planes: Iterable[CollectionObjectName],
        input_clouds: Iterable[CollectionObjectName],
        *,
        proximity_threshold: float = 0.0,
        limit_cross_section_extent: bool = False,
        radius_limit: float = 0.0,
        project_to_reference_surface: bool = False,
        cloud_thinning_settings: CloudThinningOptions | None = None,
        update_existing_cloud: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Extract Sphere Centers from Point Cloud {/* #extract-sphere-centers-from-point-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-point-clouds#extract-sphere-centers-from-point-cloud) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-point-clouds#extract-sphere-centers-from-point-cloud)

```python
async def extract_sphere_centers_from_point_cloud(
        self,
        cloud_name: CollectionObjectName,
        group_name_for_points: CollectionObjectName,
        *,
        desired_diameter: float = 0.0,
        extraction_tolerance: float = 0.0,
        minimum_point_count: int = 50,
        perform_final_fit: bool = True,
        final_fit_cone_angle: float = 120.0,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Point-Cloud Construction {/* #point-cloud-construction */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Cross-Section Clouds {/* #cross-section-clouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2024.1.0508.5)
