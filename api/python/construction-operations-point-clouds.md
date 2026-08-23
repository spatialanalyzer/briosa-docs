---
title: Construction Operations / Point Clouds
description: Next Briosa Python APIs for selected point-cloud construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Point Clouds

## Shared Types

```python
class CloudThinningMode(StrEnum):
    NONE = "None"
    RANDOM = "Random"
    NTH_POINT = "Nth Point"

@dataclass(frozen=True)
class CloudThinningOptions:
    mode: CloudThinningMode = CloudThinningMode.NTH_POINT
    point_increment: int = 5
    minimum_number_of_points: int = 100
    maximum_number_of_points: int = 20000
```

## Point-Cloud Construction

```python
async def construct_point_clouds_from_existing_point_group(
    self,
    point_group_name: CollectionObjectName,
    cloud_name: CollectionObjectName,
) -> None: ...

async def construct_point_clouds_from_existing_cloud_points_runtime_select(
    self,
    cloud_name: CollectionObjectName,
) -> None: ...

async def construct_point_clouds_from_existing_clouds_uniform_spacing(
    self,
    existing_point_cloud_list: Iterable[CollectionObjectName],
    new_cloud_name: CollectionObjectName,
    *,
    desired_point_spacing: float = 0.02,
    minimum_points_per_output_point: int = 3,
    hide_original_point_clouds: bool = True,
) -> None: ...

async def construct_point_cloud_from_existing_clouds(
    self,
    existing_point_cloud_list: Iterable[CollectionObjectName],
    new_cloud_name: CollectionObjectName,
    *,
    cloud_thinning_settings: CloudThinningOptions | None = None,
    hide_original_point_clouds: bool = True,
    set_cloud_point_rgb_from_voxels: bool = False,
) -> None: ...

async def construct_point_cloud_from_visible_cloud_points(
    self,
    source_clouds: Iterable[CollectionObjectName],
    destination_cloud_name: CollectionObjectName,
) -> None: ...

async def construct_boundary_points_from_cloud(
    self,
    source_cloud_name: CollectionObjectName,
    destination_cloud_name: CollectionObjectName,
) -> None: ...

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

`None` thinning settings use the shared defaults. The runtime-selection method
is operator-interactive; cancellation does not prove the SpatialAnalyzer prompt
stopped.

## Cross-Section Clouds

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

The User Select API intentionally omits maximum section count because the exact
SDK binding does not expose it.

## Extract Sphere Centers from Point Cloud

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

The result is SpatialAnalyzer's `Number of Points Extracted`. The client adds no
point-cloud or numeric safeguards and never automatically replays these calls.

[Catalog](/mp-command-catalog/commands/construction-operations-point-clouds) · [gRPC](/api/grpc/construction-operations-point-clouds)
