---
title: Analysis Operations
description: Next Briosa Python APIs for supported Analysis Operations MP commands.
toc_max_heading_level: 2
---

# Analysis Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Angle Between Line and Plane

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Angle Between Line and Plane](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane) · [gRPC contract](/api/grpc/analysis-operations#angle-between-line-and-plane)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `selected_line` | `CollectionObjectName` | `Selected Line` | Required |
| `selected_plane` | `CollectionObjectName` | `Selected Plane` | Required |
| `nominal_angle` | `float` | `Nominal Angle` | 0.000000 |
| `angle_tolerance_0_0_for_none` | `float` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `angle` | `float` | `Angle` |

```python
async def angle_between_line_and_plane(
    self,
    selected_line: CollectionObjectName,
    selected_plane: CollectionObjectName,
    *,
    nominal_angle: float = 0.000000,
    angle_tolerance_0_0_for_none: float = 0.000000,
) -> float: ...
```

```python
await briosa.angle_between_line_and_plane(selected_line=..., selected_plane=...)
```

Returns the MP output `Angle` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Angle Between Two Lines

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Angle Between Two Lines](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines) · [gRPC contract](/api/grpc/analysis-operations#angle-between-two-lines)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `line_1` | `CollectionObjectName` | `Line 1` | Required |
| `line_2` | `CollectionObjectName` | `Line 2` | Required |
| `nominal_angle` | `float` | `Nominal Angle` | 0.000000 |
| `angle_tolerance_0_0_for_none` | `float` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `angle` | `float` | `Angle` |

```python
async def angle_between_two_lines(
    self,
    line_1: CollectionObjectName,
    line_2: CollectionObjectName,
    *,
    nominal_angle: float = 0.000000,
    angle_tolerance_0_0_for_none: float = 0.000000,
) -> float: ...
```

```python
await briosa.angle_between_two_lines(line_1=..., line_2=...)
```

Returns the MP output `Angle` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Angle Between Two Planes' normals

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Angle Between Two Planes' normals](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals) · [gRPC contract](/api/grpc/analysis-operations#angle-between-two-planes-normals)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `plane_a` | `CollectionObjectName` | `Plane A` | Required |
| `plane_b` | `CollectionObjectName` | `Plane B` | Required |
| `nominal_angle` | `float` | `Nominal Angle` | 0.000000 |
| `angle_tolerance_0_0_for_none` | `float` | `Angle Tolerance (0.0 for none)` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `angle` | `float` | `Angle` |

```python
async def angle_between_two_planes_normals(
    self,
    plane_a: CollectionObjectName,
    plane_b: CollectionObjectName,
    *,
    nominal_angle: float = 0.000000,
    angle_tolerance_0_0_for_none: float = 0.000000,
) -> float: ...
```

```python
await briosa.angle_between_two_planes_normals(plane_a=..., plane_b=...)
```

Returns the MP output `Angle` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Best Fit Transformation - Group to Group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Best Fit Transformation - Group to Group](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group) · [gRPC contract](/api/grpc/analysis-operations#best-fit-transformation---group-to-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reference_group` | `CollectionObjectName` | `Reference Group` | Required |
| `corresponding_group` | `CollectionObjectName` | `Corresponding Group` | Required |
| `show_interface` | `bool` | `Show Interface` | false |
| `rms_tolerance_0_0_for_none` | `float` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximum_absolute_tolerance_0_0_for_none` | `float` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `allow_scale` | `bool` | `Allow Scale` | false |
| `allow_x` | `bool` | `Allow X` | true |
| `allow_y` | `bool` | `Allow Y` | true |
| `allow_z` | `bool` | `Allow Z` | true |
| `allow_rx` | `bool` | `Allow Rx` | true |
| `allow_ry` | `bool` | `Allow Ry` | true |
| `allow_rz` | `bool` | `Allow Rz` | true |
| `lock_degrees_of_freedom` | `bool` | `Lock Degrees of Freedom` | false |
| `generate_event` | `bool` | `Generate Event` | false |
| `file_path_for_csv_text_report_requires_show_interface_true` | `FileReference` | `File Path for CSV Text Report (requires Show Interface = TRUE)` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `transform_in_working` | `Transform` | `Transform in Working` |
| `optimum_transform` | `WorldTransform` | `Optimum Transform` |
| `rms_deviation` | `float` | `RMS Deviation` |
| `maximum_absolute_deviation` | `float` | `Maximum Absolute Deviation` |
| `number_of_unknowns` | `int` | `Number of Unknowns` |
| `number_of_equations` | `int` | `Number of Equations` |
| `robustness` | `float` | `Robustness` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class BestFitTransformationGroupToGroupResult:
    transform_in_working: Transform
    optimum_transform: WorldTransform
    rms_deviation: float
    maximum_absolute_deviation: float
    number_of_unknowns: int
    number_of_equations: int
    robustness: float

async def best_fit_transformation_group_to_group(
    self,
    reference_group: CollectionObjectName,
    corresponding_group: CollectionObjectName,
    *,
    show_interface: bool = False,
    rms_tolerance_0_0_for_none: float = 0.000000,
    maximum_absolute_tolerance_0_0_for_none: float = 0.000000,
    allow_scale: bool = False,
    allow_x: bool = True,
    allow_y: bool = True,
    allow_z: bool = True,
    allow_rx: bool = True,
    allow_ry: bool = True,
    allow_rz: bool = True,
    lock_degrees_of_freedom: bool = False,
    generate_event: bool = False,
    file_path_for_csv_text_report_requires_show_interface_true: FileReference,
) -> BestFitTransformationGroupToGroupResult: ...
```

```python
await briosa.best_fit_transformation_group_to_group(reference_group=..., corresponding_group=..., file_path_for_csv_text_report_requires_show_interface_true=...)
```

Returns the 7 MP outputs in the named `BestFitTransformationGroupToGroupResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Compute Group to Group Orientation (Rx,Ry,Rz)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Compute Group to Group Orientation (Rx,Ry,Rz)](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz) · [gRPC contract](/api/grpc/analysis-operations#compute-group-to-group-orientation-rxryrz)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reference_group` | `CollectionObjectName` | `Reference Group` | Required |
| `corresponding_group` | `CollectionObjectName` | `Corresponding Group` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `rx` | `float` | `Rx` |
| `ry` | `float` | `Ry` |
| `rz` | `float` | `Rz` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ComputeGroupToGroupOrientationRxRyRzResult:
    rx: float
    ry: float
    rz: float

async def compute_group_to_group_orientation_rx_ry_rz(
    self,
    reference_group: CollectionObjectName,
    corresponding_group: CollectionObjectName,
) -> ComputeGroupToGroupOrientationRxRyRzResult: ...
```

```python
await briosa.compute_group_to_group_orientation_rx_ry_rz(reference_group=..., corresponding_group=...)
```

Returns the 3 MP outputs in the named `ComputeGroupToGroupOrientationRxRyRzResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Create Point Uncertainty Cloud Point Sets

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Create Point Uncertainty Cloud Point Sets](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets) · [gRPC contract](/api/grpc/analysis-operations#create-point-uncertainty-cloud-point-sets)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name_list` | `Iterable[PointName]` | `Point Name List` | Required |
| `number_of_samples` | `int` | `Number of Samples` | 1000 |
| `uncertainty_reference_frame_mode` | `str` | `Uncertainty Reference Frame Mode` | With respect to WORLD |
| `grouping_mode` | `str` | `Grouping mode` | Group per point |
| `point_set_mode` | `str` | `Point set mode` | Point clouds |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `point_groups` | `list[CollectionObjectName]` | `Point Groups` |
| `point_sets` | `list[CollectionObjectName]` | `Point Sets` |
| `point_clouds` | `list[CollectionObjectName]` | `Point Clouds` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CreatePointUncertaintyCloudPointSetsResult:
    point_groups: list[CollectionObjectName]
    point_sets: list[CollectionObjectName]
    point_clouds: list[CollectionObjectName]

async def create_point_uncertainty_cloud_point_sets(
    self,
    point_name_list: Iterable[PointName],
    *,
    number_of_samples: int = 1000,
    uncertainty_reference_frame_mode: str = "With respect to WORLD",
    grouping_mode: str = "Group per point",
    point_set_mode: str = "Point clouds",
) -> CreatePointUncertaintyCloudPointSetsResult: ...
```

```python
await briosa.create_point_uncertainty_cloud_point_sets(point_name_list=...)
```

Returns the 3 MP outputs in the named `CreatePointUncertaintyCloudPointSetsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Create Point Uncertainty Fields

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Create Point Uncertainty Fields](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields) · [gRPC contract](/api/grpc/analysis-operations#create-point-uncertainty-fields)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name_list` | `Iterable[PointName]` | `Point Name List` | Required |
| `number_of_samples` | `int` | `Number of Samples` | 1000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def create_point_uncertainty_fields(
    self,
    point_name_list: Iterable[PointName],
    *,
    number_of_samples: int = 1000,
) -> None: ...
```

```python
await briosa.create_point_uncertainty_fields(point_name_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Fit Geometry to Point Group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Fit Geometry to Point Group](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-point-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometry_type` | `GeometryType` | `Geometry Type` | Required |
| `group_to_fit` | `CollectionObjectName` | `Group To Fit` | Required |
| `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `report_deviations` | `bool` | `Report Deviations` | false |
| `fit_interface_tolerance_1_0_use_profile` | `float` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignore_out_of_tolerance_points` | `bool` | `Ignore Out of Tolerance Points` | false |
| `starting_condition_geometry_optional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def fit_geometry_to_point_group(
    self,
    geometry_type: GeometryType,
    group_to_fit: CollectionObjectName,
    resulting_object_name: CollectionObjectName,
    *,
    fit_profile_name: str = '',
    report_deviations: bool = False,
    fit_interface_tolerance_1_0_use_profile: float = -1.000000,
    ignore_out_of_tolerance_points: bool = False,
    starting_condition_geometry_optional: CollectionObjectName,
) -> None: ...
```

```python
await briosa.fit_geometry_to_point_group(geometry_type=..., group_to_fit=..., resulting_object_name=..., starting_condition_geometry_optional=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Fit Geometry to Point Group Projected to Plane

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Fit Geometry to Point Group Projected to Plane](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-point-group-projected-to-plane)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometry_type` | `GeometryType` | `Geometry Type` | Required |
| `group_to_fit` | `CollectionObjectName` | `Group To Fit` | Required |
| `plane_name` | `CollectionObjectName` | `Plane Name` | Required |
| `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `report_deviations` | `bool` | `Report Deviations` | false |
| `fit_interface_tolerance_1_0_use_profile` | `float` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignore_out_of_tolerance_points` | `bool` | `Ignore Out of Tolerance Points` | false |
| `starting_condition_geometry_optional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def fit_geometry_to_point_group_projected_to_plane(
    self,
    geometry_type: GeometryType,
    group_to_fit: CollectionObjectName,
    plane_name: CollectionObjectName,
    resulting_object_name: CollectionObjectName,
    *,
    fit_profile_name: str = '',
    report_deviations: bool = False,
    fit_interface_tolerance_1_0_use_profile: float = -1.000000,
    ignore_out_of_tolerance_points: bool = False,
    starting_condition_geometry_optional: CollectionObjectName,
) -> None: ...
```

```python
await briosa.fit_geometry_to_point_group_projected_to_plane(geometry_type=..., group_to_fit=..., plane_name=..., resulting_object_name=..., starting_condition_geometry_optional=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Fit Geometry to Points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Fit Geometry to Points](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points) · [gRPC contract](/api/grpc/analysis-operations#fit-geometry-to-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometry_type` | `GeometryType` | `Geometry Type` | Required |
| `points_to_fit` | `Iterable[PointName]` | `Points to Fit` | Required |
| `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `report_deviations` | `bool` | `Report Deviations` | false |
| `fit_interface_tolerance_1_0_use_profile` | `float` | `Fit Interface Tolerance (-1.0 use profile)` | -1.000000 |
| `ignore_out_of_tolerance_points` | `bool` | `Ignore Out of Tolerance Points` | false |
| `starting_condition_geometry_optional` | `CollectionObjectName` | `Starting Condition Geometry (optional)` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def fit_geometry_to_points(
    self,
    geometry_type: GeometryType,
    points_to_fit: Iterable[PointName],
    resulting_object_name: CollectionObjectName,
    *,
    fit_profile_name: str = '',
    report_deviations: bool = False,
    fit_interface_tolerance_1_0_use_profile: float = -1.000000,
    ignore_out_of_tolerance_points: bool = False,
    starting_condition_geometry_optional: CollectionObjectName,
) -> None: ...
```

```python
await briosa.fit_geometry_to_points(geometry_type=..., points_to_fit=..., resulting_object_name=..., starting_condition_geometry_optional=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get B-Spline Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get B-Spline Properties](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties) · [gRPC contract](/api/grpc/analysis-operations#get-b-spline-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `b_spline_name` | `CollectionObjectName` | `B-Spline Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `degree` | `int` | `Degree` |
| `knots` | `int` | `Knots` |
| `control_points` | `int` | `Control Points` |
| `range_min` | `float` | `Range Min` |
| `range_max` | `float` | `Range Max` |
| `length` | `float` | `Length` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetBSplinePropertiesResult:
    degree: int
    knots: int
    control_points: int
    range_min: float
    range_max: float
    length: float

async def get_bspline_properties(
    self,
    b_spline_name: CollectionObjectName,
) -> GetBSplinePropertiesResult: ...
```

```python
await briosa.get_bspline_properties(b_spline_name=...)
```

Returns the 6 MP outputs in the named `GetBSplinePropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Circle Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Circle Properties](/mp-command-catalog/commands/analysis-operations#get-circle-properties) · [gRPC contract](/api/grpc/analysis-operations#get-circle-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circle_name` | `CollectionObjectName` | `Circle Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `center_coordinate` | `Vector` | `Center Coordinate` |
| `normal_direction` | `Vector` | `Normal Direction` |
| `radius` | `float` | `Radius` |
| `diameter` | `float` | `Diameter` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetCirclePropertiesResult:
    center_coordinate: Vector
    normal_direction: Vector
    radius: float
    diameter: float

async def get_circle_properties(
    self,
    circle_name: CollectionObjectName,
) -> GetCirclePropertiesResult: ...
```

```python
await briosa.get_circle_properties(circle_name=...)
```

Returns the 4 MP outputs in the named `GetCirclePropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Cone Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Cone Properties](/mp-command-catalog/commands/analysis-operations#get-cone-properties) · [gRPC contract](/api/grpc/analysis-operations#get-cone-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cone_name` | `CollectionObjectName` | `Cone Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `cone_end_point_in_working_coordinates` | `Vector` | `Cone End Point (in working coordinates)` |
| `cone_axis_in_working_coordinates` | `Vector` | `Cone Axis (in working coordinates)` |
| `cone_length` | `float` | `Cone Length` |
| `cone_theta_start` | `float` | `Cone Theta Start` |
| `cone_theta_span` | `float` | `Cone Theta Span` |
| `cone_included_angle` | `float` | `Cone Included Angle` |
| `cut_length_from_apex` | `float` | `Cut Length from Apex` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetConePropertiesResult:
    cone_end_point_in_working_coordinates: Vector
    cone_axis_in_working_coordinates: Vector
    cone_length: float
    cone_theta_start: float
    cone_theta_span: float
    cone_included_angle: float
    cut_length_from_apex: float

async def get_cone_properties(
    self,
    cone_name: CollectionObjectName,
) -> GetConePropertiesResult: ...
```

```python
await briosa.get_cone_properties(cone_name=...)
```

Returns the 7 MP outputs in the named `GetConePropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Coordinate for i-th Point in Point Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Coordinate for i-th Point in Point Set](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-coordinate-for-i-th-point-in-point-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_set` | `CollectionObjectName` | `Point Set` | Required |
| `point_set_index` | `int` | `Point Set Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `point_name` | `str` | `Point Name` |
| `point_coordinates` | `Vector` | `Point Coordinates` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetCoordinateForIthPointInPointSetResult:
    point_name: str
    point_coordinates: Vector

async def get_coordinate_for_ith_point_in_point_set(
    self,
    point_set: CollectionObjectName,
    *,
    point_set_index: int = 0,
) -> GetCoordinateForIthPointInPointSetResult: ...
```

```python
await briosa.get_coordinate_for_ith_point_in_point_set(point_set=...)
```

Returns the 2 MP outputs in the named `GetCoordinateForIthPointInPointSetResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Cylinder Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Cylinder Properties](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties) · [gRPC contract](/api/grpc/analysis-operations#get-cylinder-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cylinder_name` | `CollectionObjectName` | `Cylinder Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `begin_coordinate` | `Vector` | `Begin Coordinate` |
| `end_coordinate` | `Vector` | `End Coordinate` |
| `axis_direction` | `Vector` | `Axis Direction` |
| `length` | `float` | `Length` |
| `radius` | `float` | `Radius` |
| `diameter` | `float` | `Diameter` |
| `nominals_point_inward` | `bool` | `Nominals Point Inward` |
| `facets` | `int` | `Facets` |
| `enable_theta_extent_display_mode` | `bool` | `Enable Theta Extent Display Mode` |
| `theta_start_in_degrees` | `float` | `Theta Start in Degrees` |
| `theta_span_in_degrees` | `float` | `Theta Span in Degrees` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetCylinderPropertiesResult:
    begin_coordinate: Vector
    end_coordinate: Vector
    axis_direction: Vector
    length: float
    radius: float
    diameter: float
    nominals_point_inward: bool
    facets: int
    enable_theta_extent_display_mode: bool
    theta_start_in_degrees: float
    theta_span_in_degrees: float

async def get_cylinder_properties(
    self,
    cylinder_name: CollectionObjectName,
) -> GetCylinderPropertiesResult: ...
```

```python
await briosa.get_cylinder_properties(cylinder_name=...)
```

Returns the 11 MP outputs in the named `GetCylinderPropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Ellipse Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Ellipse Properties](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties) · [gRPC contract](/api/grpc/analysis-operations#get-ellipse-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ellipse_name` | `CollectionObjectName` | `Ellipse Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `center_coordinate` | `Vector` | `Center Coordinate` |
| `normal_direction` | `Vector` | `Normal Direction` |
| `major_axis_radius` | `float` | `Major Axis Radius` |
| `minor_axis_radius` | `float` | `Minor Axis Radius` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetEllipsePropertiesResult:
    center_coordinate: Vector
    normal_direction: Vector
    major_axis_radius: float
    minor_axis_radius: float

async def get_ellipse_properties(
    self,
    ellipse_name: CollectionObjectName,
) -> GetEllipsePropertiesResult: ...
```

```python
await briosa.get_ellipse_properties(ellipse_name=...)
```

Returns the 4 MP outputs in the named `GetEllipsePropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Euler Parameters for Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Euler Parameters for Frame](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame) · [gRPC contract](/api/grpc/analysis-operations#get-euler-parameters-for-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame` | `CollectionObjectName` | `Frame` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `x` | `float` | `X` |
| `y` | `float` | `Y` |
| `z` | `float` | `Z` |
| `e1` | `float` | `e1` |
| `e2` | `float` | `e2` |
| `e3` | `float` | `e3` |
| `e4` | `float` | `e4` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetEulerParametersForFrameResult:
    x: float
    y: float
    z: float
    e1: float
    e2: float
    e3: float
    e4: float

async def get_euler_parameters_for_frame(
    self,
    frame: CollectionObjectName,
) -> GetEulerParametersForFrameResult: ...
```

```python
await briosa.get_euler_parameters_for_frame(frame=...)
```

Returns the 7 MP outputs in the named `GetEulerParametersForFrameResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Euler Parameters for i-th Frame in Frame Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Euler Parameters for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame_set` | `CollectionObjectName` | `Frame Set` | Required |
| `frame_set_index` | `int` | `Frame Set Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `x` | `float` | `X` |
| `y` | `float` | `Y` |
| `z` | `float` | `Z` |
| `e1` | `float` | `e1` |
| `e2` | `float` | `e2` |
| `e3` | `float` | `e3` |
| `e4` | `float` | `e4` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetEulerParametersForIthFrameInFrameSetResult:
    x: float
    y: float
    z: float
    e1: float
    e2: float
    e3: float
    e4: float

async def get_euler_parameters_for_ith_frame_in_frame_set(
    self,
    frame_set: CollectionObjectName,
    *,
    frame_set_index: int = 0,
) -> GetEulerParametersForIthFrameInFrameSetResult: ...
```

```python
await briosa.get_euler_parameters_for_ith_frame_in_frame_set(frame_set=...)
```

Returns the 7 MP outputs in the named `GetEulerParametersForIthFrameInFrameSetResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get i-th Collection Name

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get i-th Collection Name](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name) · [gRPC contract](/api/grpc/analysis-operations#get-i-th-collection-name)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collection_index` | `int` | `Collection Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `resultant_name` | `str` | `Resultant Name` |

```python
async def get_ith_collection_name(
    self,
    *,
    collection_index: int = 0,
) -> str: ...
```

```python
await briosa.get_ith_collection_name()
```

Returns the MP output `Resultant Name` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get i-th Point From Group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get i-th Point From Group](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group) · [gRPC contract](/api/grpc/analysis-operations#get-i-th-point-from-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `group_name` | `CollectionObjectName` | `Group Name` | Required |
| `point_index` | `int` | `Point Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `complete_point_name` | `PointName` | `Complete Point Name` |
| `point_name_only` | `str` | `Point Name Only` |
| `vector_in_working` | `Vector` | `Vector in Working` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetIthPointFromGroupResult:
    complete_point_name: PointName
    point_name_only: str
    vector_in_working: Vector

async def get_ith_point_from_group(
    self,
    group_name: CollectionObjectName,
    *,
    point_index: int = 0,
) -> GetIthPointFromGroupResult: ...
```

```python
await briosa.get_ith_point_from_group(group_name=...)
```

Returns the 3 MP outputs in the named `GetIthPointFromGroupResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Line Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Line Properties](/mp-command-catalog/commands/analysis-operations#get-line-properties) · [gRPC contract](/api/grpc/analysis-operations#get-line-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `line_name` | `CollectionObjectName` | `Line Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `begin_coordinate` | `Vector` | `Begin Coordinate` |
| `end_coordinate` | `Vector` | `End Coordinate` |
| `delta_components` | `Vector` | `Delta Components` |
| `length` | `float` | `Length` |
| `angle_about_x_from_y_in_yz_plane` | `float` | `Angle about +X from +Y in YZ plane` |
| `angle_about_y_from_z_in_xz_plane` | `float` | `Angle about +Y from +Z in XZ plane` |
| `angle_about_z_from_x_in_xy_plane` | `float` | `Angle about +Z from +X in XY plane` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetLinePropertiesResult:
    begin_coordinate: Vector
    end_coordinate: Vector
    delta_components: Vector
    length: float
    angle_about_x_from_y_in_yz_plane: float
    angle_about_y_from_z_in_xz_plane: float
    angle_about_z_from_x_in_xy_plane: float

async def get_line_properties(
    self,
    line_name: CollectionObjectName,
) -> GetLinePropertiesResult: ...
```

```python
await briosa.get_line_properties(line_name=...)
```

Returns the 7 MP outputs in the named `GetLinePropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Measurement Auxiliary Data

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Measurement Auxiliary Data](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-auxiliary-data)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |
| `auxiliary_name` | `str` | `Auxiliary Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `float` | `Value` |
| `units` | `str` | `Units` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetMeasurementAuxiliaryDataResult:
    value: float
    units: str

async def get_measurement_auxiliary_data(
    self,
    point_name: PointName,
    *,
    auxiliary_name: str = '',
) -> GetMeasurementAuxiliaryDataResult: ...
```

```python
await briosa.get_measurement_auxiliary_data(point_name=...)
```

Returns the 2 MP outputs in the named `GetMeasurementAuxiliaryDataResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Measurement Info Data

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Measurement Info Data](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-info-data)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `info_data` | `str` | `Info Data` |

```python
async def get_measurement_info_data(
    self,
    point_name: PointName,
) -> str: ...
```

```python
await briosa.get_measurement_info_data(point_name=...)
```

Returns the MP output `Info Data` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Measurement Weather Data

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Measurement Weather Data](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data) · [gRPC contract](/api/grpc/analysis-operations#get-measurement-weather-data)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `temperature_deg_f` | `float` | `Temperature (deg F)` |
| `pressure_in_hg` | `float` | `Pressure (in. Hg)` |
| `humidity_rh` | `float` | `Humidity (% RH)` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetMeasurementWeatherDataResult:
    temperature_deg_f: float
    pressure_in_hg: float
    humidity_rh: float

async def get_measurement_weather_data(
    self,
    point_name: PointName,
) -> GetMeasurementWeatherDataResult: ...
```

```python
await briosa.get_measurement_weather_data(point_name=...)
```

Returns the 3 MP outputs in the named `GetMeasurementWeatherDataResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Number of Collections

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Number of Collections](/mp-command-catalog/commands/analysis-operations#get-number-of-collections) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-collections)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `total_count` | `int` | `Total Count` |

```python
async def get_number_of_collections(self) -> int: ...
```

```python
await briosa.get_number_of_collections()
```

Returns the MP output `Total Count` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Number of Frames In Frame Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Number of Frames In Frame Set](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-frames-in-frame-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame_set_container` | `CollectionObjectName` | `Frame Set Container` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `total_count` | `int` | `Total Count` |

```python
async def get_number_of_frames_in_frame_set(
    self,
    frame_set_container: CollectionObjectName,
) -> int: ...
```

```python
await briosa.get_number_of_frames_in_frame_set(frame_set_container=...)
```

Returns the MP output `Total Count` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Number of Points in Group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Number of Points in Group](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-points-in-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `group_name` | `CollectionObjectName` | `Group Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `total_count` | `int` | `Total Count` |

```python
async def get_number_of_points_in_group(
    self,
    group_name: CollectionObjectName,
) -> int: ...
```

```python
await briosa.get_number_of_points_in_group(group_name=...)
```

Returns the MP output `Total Count` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Number of Points In Point Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Number of Points In Point Set](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-number-of-points-in-point-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_set_container` | `CollectionObjectName` | `Point Set Container` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `total_count` | `int` | `Total Count` |

```python
async def get_number_of_points_in_point_set(
    self,
    point_set_container: CollectionObjectName,
) -> int: ...
```

```python
await briosa.get_number_of_points_in_point_set(point_set_container=...)
```

Returns the MP output `Total Count` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Object Reporting Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Object Reporting Frame](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame) · [gRPC contract](/api/grpc/analysis-operations#get-object-reporting-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_name` | `CollectionObjectName` | `Object Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `reporting_frame` | `CollectionObjectName` | `Reporting Frame` |

```python
async def get_object_reporting_frame(
    self,
    object_name: CollectionObjectName,
) -> CollectionObjectName: ...
```

```python
await briosa.get_object_reporting_frame(object_name=...)
```

Returns the MP output `Reporting Frame` directly as `CollectionObjectName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Plane Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Plane Properties](/mp-command-catalog/commands/analysis-operations#get-plane-properties) · [gRPC contract](/api/grpc/analysis-operations#get-plane-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `plane_name` | `CollectionObjectName` | `Plane Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `normal_direction` | `Vector` | `Normal Direction` |
| `point_on_plane` | `Vector` | `Point on Plane` |
| `d_parameter` | `float` | `D Parameter` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPlanePropertiesResult:
    normal_direction: Vector
    point_on_plane: Vector
    d_parameter: float

async def get_plane_properties(
    self,
    plane_name: CollectionObjectName,
) -> GetPlanePropertiesResult: ...
```

```python
await briosa.get_plane_properties(plane_name=...)
```

Returns the 3 MP outputs in the named `GetPlanePropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point Coordinate

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Point Coordinate](/mp-command-catalog/commands/analysis-operations#get-point-coordinate) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `vector_representation` | `Vector` | `Vector Representation` |
| `x_value` | `float` | `X Value` |
| `y_value` | `float` | `Y Value` |
| `z_value` | `float` | `Z Value` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointCoordinateResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float

async def get_point_coordinate(
    self,
    point_name: PointName,
) -> GetPointCoordinateResult: ...
```

```python
await briosa.get_point_coordinate(point_name=...)
```

Returns the 4 MP outputs in the named `GetPointCoordinateResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point Coordinate (Cylindrical)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Point Coordinate (Cylindrical)](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate-cylindrical)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `radius_value` | `float` | `Radius Value` |
| `theta_value` | `float` | `Theta Value` |
| `z_value` | `float` | `Z Value` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointCoordinateCylindricalResult:
    radius_value: float
    theta_value: float
    z_value: float

async def get_point_coordinate_cylindrical(
    self,
    point_name: PointName,
) -> GetPointCoordinateCylindricalResult: ...
```

```python
await briosa.get_point_coordinate_cylindrical(point_name=...)
```

Returns the 3 MP outputs in the named `GetPointCoordinateCylindricalResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point Coordinate (Polar)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Point Coordinate (Polar)](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar) · [gRPC contract](/api/grpc/analysis-operations#get-point-coordinate-polar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `radius_value` | `float` | `Radius Value` |
| `theta_value` | `float` | `Theta Value` |
| `phi_value` | `float` | `Phi Value` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointCoordinatePolarResult:
    radius_value: float
    theta_value: float
    phi_value: float

async def get_point_coordinate_polar(
    self,
    point_name: PointName,
) -> GetPointCoordinatePolarResult: ...
```

```python
await briosa.get_point_coordinate_polar(point_name=...)
```

Returns the 3 MP outputs in the named `GetPointCoordinatePolarResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Point Properties](/mp-command-catalog/commands/analysis-operations#get-point-properties) · [gRPC contract](/api/grpc/analysis-operations#get-point-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `planar_offset` | `float` | `Planar Offset` |
| `radial_offset` | `float` | `Radial Offset` |
| `ux` | `float` | `Ux` |
| `uy` | `float` | `Uy` |
| `uz` | `float` | `Uz` |
| `umag` | `float` | `Umag` |
| `position_tolerance` | `ToleranceVectorOptions` | `Position Tolerance` |
| `component_weights` | `Vector` | `Component Weights` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointPropertiesResult:
    planar_offset: float
    radial_offset: float
    ux: float
    uy: float
    uz: float
    umag: float
    position_tolerance: ToleranceVectorOptions
    component_weights: Vector

async def get_point_properties(
    self,
    point_name: PointName,
) -> GetPointPropertiesResult: ...
```

```python
await briosa.get_point_properties(point_name=...)
```

Returns the 8 MP outputs in the named `GetPointPropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point To Line Distance

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Point To Line Distance](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance) · [gRPC contract](/api/grpc/analysis-operations#get-point-to-line-distance)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point` | `PointName` | `Point` | Required |
| `line` | `CollectionObjectName` | `Line` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `vector_representation` | `Vector` | `Vector Representation` |
| `x_value` | `float` | `X Value` |
| `y_value` | `float` | `Y Value` |
| `z_value` | `float` | `Z Value` |
| `magnitude` | `float` | `Magnitude` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointToLineDistanceResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
    magnitude: float

async def get_point_to_line_distance(
    self,
    point: PointName,
    line: CollectionObjectName,
) -> GetPointToLineDistanceResult: ...
```

```python
await briosa.get_point_to_line_distance(point=..., line=...)
```

Returns the 5 MP outputs in the named `GetPointToLineDistanceResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point To Point Distance

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Point To Point Distance](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance) · [gRPC contract](/api/grpc/analysis-operations#get-point-to-point-distance)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `first_point` | `PointName` | `First Point` | Required |
| `second_point` | `PointName` | `Second Point` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `vector_representation` | `Vector` | `Vector Representation` |
| `x_value` | `float` | `X Value` |
| `y_value` | `float` | `Y Value` |
| `z_value` | `float` | `Z Value` |
| `magnitude` | `float` | `Magnitude` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointToPointDistanceResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
    magnitude: float

async def get_point_to_point_distance(
    self,
    first_point: PointName,
    second_point: PointName,
) -> GetPointToPointDistanceResult: ...
```

```python
await briosa.get_point_to_point_distance(first_point=..., second_point=...)
```

Returns the 5 MP outputs in the named `GetPointToPointDistanceResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point Tolerance

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Point Tolerance](/mp-command-catalog/commands/analysis-operations#get-point-tolerance) · [gRPC contract](/api/grpc/analysis-operations#get-point-tolerance)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `use_high_x_tolerance` | `bool` | `Use High X Tolerance?` |
| `high_x_tolerance` | `float` | `High X Tolerance` |
| `use_high_y_tolerance` | `bool` | `Use High Y Tolerance?` |
| `high_y_tolerance` | `float` | `High Y Tolerance` |
| `use_high_z_tolerance` | `bool` | `Use High Z Tolerance?` |
| `high_z_tolerance` | `float` | `High Z Tolerance` |
| `use_high_mag_tolerance` | `bool` | `Use High Mag Tolerance?` |
| `high_mag_tolerance` | `float` | `High Mag Tolerance` |
| `use_low_x_tolerance` | `bool` | `Use Low X Tolerance?` |
| `low_x_tolerance` | `float` | `Low X Tolerance` |
| `use_low_y_tolerance` | `bool` | `Use Low Y Tolerance?` |
| `low_y_tolerance` | `float` | `Low Y Tolerance` |
| `use_low_z_tolerance` | `bool` | `Use Low Z Tolerance?` |
| `low_z_tolerance` | `float` | `Low Z Tolerance` |
| `use_low_mag_tolerance` | `bool` | `Use Low Mag Tolerance?` |
| `low_mag_tolerance` | `float` | `Low Mag Tolerance` |
| `vector_tolerance` | `ToleranceVectorOptions` | `Vector Tolerance` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointToleranceResult:
    use_high_x_tolerance: bool
    high_x_tolerance: float
    use_high_y_tolerance: bool
    high_y_tolerance: float
    use_high_z_tolerance: bool
    high_z_tolerance: float
    use_high_mag_tolerance: bool
    high_mag_tolerance: float
    use_low_x_tolerance: bool
    low_x_tolerance: float
    use_low_y_tolerance: bool
    low_y_tolerance: float
    use_low_z_tolerance: bool
    low_z_tolerance: float
    use_low_mag_tolerance: bool
    low_mag_tolerance: float
    vector_tolerance: ToleranceVectorOptions

async def get_point_tolerance(
    self,
    point_name: PointName,
) -> GetPointToleranceResult: ...
```

```python
await briosa.get_point_tolerance(point_name=...)
```

Returns the 17 MP outputs in the named `GetPointToleranceResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Slot Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Slot Properties](/mp-command-catalog/commands/analysis-operations#get-slot-properties) · [gRPC contract](/api/grpc/analysis-operations#get-slot-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `slot_name` | `CollectionObjectName` | `Slot Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `slot_transform_in_working_coordinates` | `Transform` | `Slot Transform (in working coordinates` |
| `center_in_working_coordinates` | `Vector` | `Center (in working coordinates)` |
| `normal_direction_in_working_coordinates` | `Vector` | `Normal Direction (in working coordinates)` |
| `slot_length` | `float` | `Slot Length` |
| `slot_width` | `float` | `Slot Width` |
| `round_slot_type` | `bool` | `Round Slot Type` |
| `centerline_pt_1_in_working_coordinates` | `Vector` | `Centerline Pt. 1 (in working coordinates)` |
| `centerline_pt_2_in_working_coordinates` | `Vector` | `Centerline Pt. 2 (in working coordinates)` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetSlotPropertiesResult:
    slot_transform_in_working_coordinates: Transform
    center_in_working_coordinates: Vector
    normal_direction_in_working_coordinates: Vector
    slot_length: float
    slot_width: float
    round_slot_type: bool
    centerline_pt_1_in_working_coordinates: Vector
    centerline_pt_2_in_working_coordinates: Vector

async def get_slot_properties(
    self,
    slot_name: CollectionObjectName,
) -> GetSlotPropertiesResult: ...
```

```python
await briosa.get_slot_properties(slot_name=...)
```

Returns the 8 MP outputs in the named `GetSlotPropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Sphere Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Sphere Properties](/mp-command-catalog/commands/analysis-operations#get-sphere-properties) · [gRPC contract](/api/grpc/analysis-operations#get-sphere-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sphere_name` | `CollectionObjectName` | `Sphere Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `center_coordinate` | `Vector` | `Center Coordinate` |
| `radius` | `float` | `Radius` |
| `diameter` | `float` | `Diameter` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetSpherePropertiesResult:
    center_coordinate: Vector
    radius: float
    diameter: float

async def get_sphere_properties(
    self,
    sphere_name: CollectionObjectName,
) -> GetSpherePropertiesResult: ...
```

```python
await briosa.get_sphere_properties(sphere_name=...)
```

Returns the 3 MP outputs in the named `GetSpherePropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Surface Physical Stats

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Surface Physical Stats](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats) · [gRPC contract](/api/grpc/analysis-operations#get-surface-physical-stats)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surface_name` | `CollectionObjectName` | `Surface Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `volume` | `float` | `Volume` |
| `area` | `float` | `Area` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetSurfacePhysicalStatsResult:
    volume: float
    area: float

async def get_surface_physical_stats(
    self,
    surface_name: CollectionObjectName,
) -> GetSurfacePhysicalStatsResult: ...
```

```python
await briosa.get_surface_physical_stats(surface_name=...)
```

Returns the 2 MP outputs in the named `GetSurfacePhysicalStatsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Timestamp for i-th Frame in Frame Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Timestamp for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame_set` | `CollectionObjectName` | `Frame Set` | Required |
| `frame_set_index` | `int` | `Frame Set Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `timestamp` | `float` | `Timestamp` |

```python
async def get_timestamp_for_ith_frame_in_frame_set(
    self,
    frame_set: CollectionObjectName,
    *,
    frame_set_index: int = 0,
) -> float: ...
```

```python
await briosa.get_timestamp_for_ith_frame_in_frame_set(frame_set=...)
```

Returns the MP output `Timestamp` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Timestamp for i-th Point in Point Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Timestamp for i-th Point in Point Set](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set) · [gRPC contract](/api/grpc/analysis-operations#get-timestamp-for-i-th-point-in-point-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_set` | `CollectionObjectName` | `Point Set` | Required |
| `point_set_index` | `int` | `Point Set Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `timestamp` | `float` | `Timestamp` |

```python
async def get_timestamp_for_ith_point_in_point_set(
    self,
    point_set: CollectionObjectName,
    *,
    point_set_index: int = 0,
) -> float: ...
```

```python
await briosa.get_timestamp_for_ith_point_in_point_set(point_set=...)
```

Returns the MP output `Timestamp` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Torus Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Torus Properties](/mp-command-catalog/commands/analysis-operations#get-torus-properties) · [gRPC contract](/api/grpc/analysis-operations#get-torus-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `torus_name` | `CollectionObjectName` | `Torus Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `center_coordinate` | `Vector` | `Center Coordinate` |
| `normal_direction` | `Vector` | `Normal Direction` |
| `major_radius` | `float` | `Major Radius` |
| `minor_radius` | `float` | `Minor Radius` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetTorusPropertiesResult:
    center_coordinate: Vector
    normal_direction: Vector
    major_radius: float
    minor_radius: float

async def get_torus_properties(
    self,
    torus_name: CollectionObjectName,
) -> GetTorusPropertiesResult: ...
```

```python
await briosa.get_torus_properties(torus_name=...)
```

Returns the 4 MP outputs in the named `GetTorusPropertiesResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Transform for i-th Frame in Frame Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Transform for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#get-transform-for-i-th-frame-in-frame-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame_set` | `CollectionObjectName` | `Frame Set` | Required |
| `frame_set_index` | `int` | `Frame Set Index` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `transform_in_working` | `Transform` | `Transform in Working` |

```python
async def get_transform_for_ith_frame_in_frame_set(
    self,
    frame_set: CollectionObjectName,
    *,
    frame_set_index: int = 0,
) -> Transform: ...
```

```python
await briosa.get_transform_for_ith_frame_in_frame_set(frame_set=...)
```

Returns the MP output `Transform in Working` directly as `Transform`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Group To Surface Fit

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Group To Surface Fit](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit) · [gRPC contract](/api/grpc/analysis-operations#group-to-surface-fit)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `group_to_fit` | `CollectionObjectName` | `Group to Fit` | Required |
| `surface` | `CollectionObjectName` | `Surface` | Required |
| `do_conventional_fit` | `bool` | `Do Conventional Fit` | false |
| `rms_tolerance_0_0_for_none` | `float` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximum_absolute_tolerance_0_0_for_none` | `float` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `optimum_transform` | `WorldTransform` | `Optimum Transform` |
| `rms_deviation` | `float` | `RMS Deviation` |
| `maximum_absolute_deviation` | `float` | `Maximum Absolute Deviation` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GroupToSurfaceFitResult:
    optimum_transform: WorldTransform
    rms_deviation: float
    maximum_absolute_deviation: float

async def group_to_surface_fit(
    self,
    group_to_fit: CollectionObjectName,
    surface: CollectionObjectName,
    *,
    do_conventional_fit: bool = False,
    rms_tolerance_0_0_for_none: float = 0.000000,
    maximum_absolute_tolerance_0_0_for_none: float = 0.000000,
) -> GroupToSurfaceFitResult: ...
```

```python
await briosa.group_to_surface_fit(group_to_fit=..., surface=...)
```

Returns the 3 MP outputs in the named `GroupToSurfaceFitResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Import Geometry Fit Profiles

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Import Geometry Fit Profiles](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles) · [gRPC contract](/api/grpc/analysis-operations#import-geometry-fit-profiles)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometry_fit_profiles_file_path` | `FileReference` | `Geometry Fit Profiles File Path` | Required |
| `overwrite_profiles_with_same_name` | `bool` | `Overwrite Profiles with Same Name?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def import_geometry_fit_profiles(
    self,
    geometry_fit_profiles_file_path: FileReference,
    *,
    overwrite_profiles_with_same_name: bool = False,
) -> None: ...
```

```python
await briosa.import_geometry_fit_profiles(geometry_fit_profiles_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Is Object of Type

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Is Object of Type](/mp-command-catalog/commands/analysis-operations#is-object-of-type) · [gRPC contract](/api/grpc/analysis-operations#is-object-of-type)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_name` | `CollectionObjectName` | `Object Name` | Required |
| `object_type` | `ObjectType` | `Object Type` | Any |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `resultant` | `bool` | `Resultant` |

```python
async def is_object_of_type(
    self,
    object_name: CollectionObjectName,
    *,
    object_type: ObjectType = ObjectType.ANY,
) -> bool: ...
```

```python
await briosa.is_object_of_type(object_name=...)
```

Returns the MP output `Resultant` directly as `bool`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Circle Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Circle Fit Profile](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-circle-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `override_radial_offset_1_0_use_current` | `float` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measured_side_for_planar_offset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `override_planar_offset_1_0_use_current` | `float` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planar_offset_direction` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `lock_radius_1_0_do_not_lock` | `float` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `circle_computation_technique` | `CompTechnique` | `Circle Computation Technique` | Standard |
| `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_center` | `bool` | `Cardinal Pt.1: Center?` | true |
| `cardinal_pt_2_point_on_normal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_circle_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
    override_radial_offset_1_0_use_current: float = -1.000000,
    measured_side_for_planar_offset: MeasuredSideForPlanarOffset = MeasuredSideForPlanarOffset.ABOVE_PLANE,
    override_planar_offset_1_0_use_current: float = -1.000000,
    planar_offset_direction: NormalDirection = NormalDirection.PROBING_DIRECTION,
    lock_radius_1_0_do_not_lock: float = -1.000000,
    circle_computation_technique: CompTechnique = CompTechnique.STANDARD,
    reverse_normal_vector_after_fit: bool = False,
    make_cardinal_points: bool = True,
    cardinal_pt_1_center: bool = True,
    cardinal_pt_2_point_on_normal: bool = True,
) -> None: ...
```

```python
await briosa.make_circle_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Cone Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Cone Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-cone-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `override_radial_offset_1_0_use_current` | `float` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lock_angle_in_degrees_1_0_do_not_lock` | `float` | `Lock Angle in degrees (-1.0 do not lock)` | -1.000000 |
| `use_exhaustive_search` | `bool` | `Use Exhaustive Search?` | true |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_vertex` | `bool` | `Cardinal Pt.1: Vertex?` | true |
| `cardinal_pt_2_point_on_axis` | `bool` | `Cardinal Pt.2: Point on Axis?` | true |
| `cardinal_pt_3_cut_point_on_axis` | `bool` | `Cardinal Pt.3: Cut Point on Axis?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_cone_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
    override_radial_offset_1_0_use_current: float = -1.000000,
    lock_angle_in_degrees_1_0_do_not_lock: float = -1.000000,
    use_exhaustive_search: bool = True,
    make_cardinal_points: bool = True,
    cardinal_pt_1_vertex: bool = True,
    cardinal_pt_2_point_on_axis: bool = True,
    cardinal_pt_3_cut_point_on_axis: bool = True,
) -> None: ...
```

```python
await briosa.make_cone_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Cylinder Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Cylinder Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-cylinder-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `override_radial_offset_1_0_use_current` | `float` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lock_radius_1_0_do_not_lock` | `float` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `locked_radius_fit_method` | `FitMethod` | `Locked Radius Fit Method` | Minimum RMS |
| `constrain_to_nominal_axis` | `bool` | `Constrain to Nominal Axis?` | false |
| `constrain_to_nominal_orientation` | `bool` | `Constrain to Nominal Orientation?` | false |
| `align_with_nominal` | `bool` | `Align with Nominal?` | false |
| `reverse_axis` | `bool` | `Reverse Axis?` | false |
| `set_axis_first_to_last_point` | `bool` | `Set Axis First to Last Point?` | false |
| `cylinder_computation_technique` | `CompTechnique` | `Cylinder Computation Technique` | Standard |
| `use_exhaustive_search` | `bool` | `Use Exhaustive Search?` | false |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_begin_pt` | `bool` | `Cardinal Pt.1: Begin Pt?` | true |
| `cardinal_pt_2_end_pt` | `bool` | `Cardinal Pt.2: End Pt?` | true |
| `cardinal_pt_3_center` | `bool` | `Cardinal Pt.3: Center?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_cylinder_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
    override_radial_offset_1_0_use_current: float = -1.000000,
    lock_radius_1_0_do_not_lock: float = -1.000000,
    locked_radius_fit_method: FitMethod = FitMethod.MINIMUM_RMS,
    constrain_to_nominal_axis: bool = False,
    constrain_to_nominal_orientation: bool = False,
    align_with_nominal: bool = False,
    reverse_axis: bool = False,
    set_axis_first_to_last_point: bool = False,
    cylinder_computation_technique: CompTechnique = CompTechnique.STANDARD,
    use_exhaustive_search: bool = False,
    make_cardinal_points: bool = True,
    cardinal_pt_1_begin_pt: bool = True,
    cardinal_pt_2_end_pt: bool = True,
    cardinal_pt_3_center: bool = True,
) -> None: ...
```

```python
await briosa.make_cylinder_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Ellipse Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Ellipse Fit Profile](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-ellipse-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `override_radial_offset_1_0_use_current` | `float` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measured_side_for_planar_offset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `override_planar_offset_1_0_use_current` | `float` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planar_offset_direction` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_center` | `bool` | `Cardinal Pt.1: Center?` | true |
| `cardinal_pt_2_point_on_normal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |
| `cardinal_pt_3_focal_pt_1` | `bool` | `Cardinal Pt.3: Focal Pt.1?` | true |
| `cardinal_pt_4_focal_pt_2` | `bool` | `Cardinal Pt.4: Focal Pt.2?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_ellipse_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
    override_radial_offset_1_0_use_current: float = -1.000000,
    measured_side_for_planar_offset: MeasuredSideForPlanarOffset = MeasuredSideForPlanarOffset.ABOVE_PLANE,
    override_planar_offset_1_0_use_current: float = -1.000000,
    planar_offset_direction: NormalDirection = NormalDirection.PROBING_DIRECTION,
    reverse_normal_vector_after_fit: bool = False,
    make_cardinal_points: bool = True,
    cardinal_pt_1_center: bool = True,
    cardinal_pt_2_point_on_normal: bool = True,
    cardinal_pt_3_focal_pt_1: bool = True,
    cardinal_pt_4_focal_pt_2: bool = True,
) -> None: ...
```

```python
await briosa.make_ellipse_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Line Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Line Fit Profile](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-line-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_point_a` | `bool` | `Cardinal Pt.1: Point A?` | true |
| `cardinal_pt_2_point_b` | `bool` | `Cardinal Pt.2: Point B?` | true |
| `cardinal_pt_3_mid_point` | `bool` | `Cardinal Pt.3: Mid Point?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_line_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    reverse_normal_vector_after_fit: bool = False,
    make_cardinal_points: bool = True,
    cardinal_pt_1_point_a: bool = True,
    cardinal_pt_2_point_b: bool = True,
    cardinal_pt_3_mid_point: bool = True,
) -> None: ...
```

```python
await briosa.make_line_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Paraboloid Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Paraboloid Fit Profile](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-paraboloid-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `override_radial_offset_1_0_use_current` | `float` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lock_focal_length_1_0_do_not_lock` | `float` | `Lock Focal Length (-1.0 do not lock)` | -1.000000 |
| `degree_of_freedom` | `DegreeOfFreedom` | `Degree of Freedom` | Any |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_vertex` | `bool` | `Cardinal Pt.1: Vertex?` | true |
| `cardinal_pt_2_focal_point` | `bool` | `Cardinal Pt.2: Focal Point?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_paraboloid_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
    override_radial_offset_1_0_use_current: float = -1.000000,
    lock_focal_length_1_0_do_not_lock: float = -1.000000,
    degree_of_freedom: DegreeOfFreedom = DegreeOfFreedom.ANY,
    make_cardinal_points: bool = True,
    cardinal_pt_1_vertex: bool = True,
    cardinal_pt_2_focal_point: bool = True,
) -> None: ...
```

```python
await briosa.make_paraboloid_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Plane Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Plane Fit Profile](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-plane-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `measured_side_for_planar_offset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `override_planar_offset_1_0_use_current` | `float` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planar_offset_direction` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_centroid` | `bool` | `Cardinal Pt.1: Centroid?` | true |
| `cardinal_pt_2_point_on_normal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_plane_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    measured_side_for_planar_offset: MeasuredSideForPlanarOffset = MeasuredSideForPlanarOffset.ABOVE_PLANE,
    override_planar_offset_1_0_use_current: float = -1.000000,
    planar_offset_direction: NormalDirection = NormalDirection.PROBING_DIRECTION,
    reverse_normal_vector_after_fit: bool = False,
    make_cardinal_points: bool = True,
    cardinal_pt_1_centroid: bool = True,
    cardinal_pt_2_point_on_normal: bool = True,
) -> None: ...
```

```python
await briosa.make_plane_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Slot Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Slot Fit Profile](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-slot-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `override_radial_offset_1_0_use_current` | `float` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `measured_side_for_planar_offset` | `MeasuredSideForPlanarOffset` | `Measured Side for Planar Offset` | Above Plane |
| `override_planar_offset_1_0_use_current` | `float` | `Override Planar Offset (-1.0 use current)` | -1.000000 |
| `planar_offset_direction` | `NormalDirection` | `Planar Offset Direction` | Probing Direction |
| `slot_type` | `SlotType` | `Slot Type` | Round |
| `slot_computation_technique` | `CompTechnique` | `Slot Computation Technique` | Standard |
| `reverse_normal_vector_after_fit` | `bool` | `Reverse Normal Vector after fit?` | false |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_center` | `bool` | `Cardinal Pt.1: Center?` | true |
| `cardinal_pt_2_point_on_normal` | `bool` | `Cardinal Pt.2: Point on Normal?` | true |
| `cardinal_pt_3_centerline_pt_1` | `bool` | `Cardinal Pt.3: Centerline Pt.1?` | true |
| `cardinal_pt_4_centerline_pt_2` | `bool` | `Cardinal Pt.4: Centerline Pt.2?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_slot_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
    override_radial_offset_1_0_use_current: float = -1.000000,
    measured_side_for_planar_offset: MeasuredSideForPlanarOffset = MeasuredSideForPlanarOffset.ABOVE_PLANE,
    override_planar_offset_1_0_use_current: float = -1.000000,
    planar_offset_direction: NormalDirection = NormalDirection.PROBING_DIRECTION,
    slot_type: SlotType = SlotType.ROUND,
    slot_computation_technique: CompTechnique = CompTechnique.STANDARD,
    reverse_normal_vector_after_fit: bool = False,
    make_cardinal_points: bool = True,
    cardinal_pt_1_center: bool = True,
    cardinal_pt_2_point_on_normal: bool = True,
    cardinal_pt_3_centerline_pt_1: bool = True,
    cardinal_pt_4_centerline_pt_2: bool = True,
) -> None: ...
```

```python
await briosa.make_slot_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Sphere Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Sphere Fit Profile](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#make-sphere-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `measured_side_for_radial_offset` | `MeasuredSideForRadialOffset` | `Measured Side for Radial Offset` | Outside |
| `override_radial_offset_1_0_use_current` | `float` | `Override Radial Offset (-1.0 use current)` | -1.000000 |
| `lock_radius_1_0_do_not_lock` | `float` | `Lock Radius (-1.0 do not lock)` | -1.000000 |
| `make_cardinal_points` | `bool` | `Make Cardinal Points?` | true |
| `cardinal_pt_1_center` | `bool` | `Cardinal Pt.1: Center?` | true |
| `computation_method` | `SphereFitComputationMode` | `Computation Method` | Standard |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_sphere_fit_profile(
    self,
    *,
    fit_profile_name: str = '',
    measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
    override_radial_offset_1_0_use_current: float = -1.000000,
    lock_radius_1_0_do_not_lock: float = -1.000000,
    make_cardinal_points: bool = True,
    cardinal_pt_1_center: bool = True,
    computation_method: SphereFitComputationMode = SphereFitComputationMode.STANDARD,
) -> None: ...
```

```python
await briosa.make_sphere_fit_profile()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Mushroom Target Hole Inspection

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Mushroom Target Hole Inspection](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection) · [gRPC contract](/api/grpc/analysis-operations#mushroom-target-hole-inspection)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name_prefix_for_intermediate_constructions` | `str` | `Name Prefix for Intermediate Constructions` | Empty |
| `sphere_points_group_name` | `CollectionObjectName` | `Sphere Points Group Name` | Required |
| `sphere_target_radius` | `float` | `Sphere Target Radius` | 0.000000 |
| `target_contact_plane` | `CollectionObjectName` | `Target Contact Plane` | Required |
| `point_to_create_at_hole` | `PointName` | `Point To Create at Hole` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `sphere_fit_rms_error` | `float` | `Sphere Fit RMS Error` |
| `sphere_fit_max_error` | `float` | `Sphere Fit Max Error` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class MushroomTargetHoleInspectionResult:
    sphere_fit_rms_error: float
    sphere_fit_max_error: float

async def mushroom_target_hole_inspection(
    self,
    *,
    name_prefix_for_intermediate_constructions: str = '',
    sphere_points_group_name: CollectionObjectName,
    sphere_target_radius: float = 0.000000,
    target_contact_plane: CollectionObjectName,
    point_to_create_at_hole: PointName,
) -> MushroomTargetHoleInspectionResult: ...
```

```python
await briosa.mushroom_target_hole_inspection(sphere_points_group_name=..., target_contact_plane=..., point_to_create_at_hole=...)
```

Returns the 2 MP outputs in the named `MushroomTargetHoleInspectionResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Patch Normal Shift - Hole / Pin

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Patch Normal Shift - Hole / Pin](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin) · [gRPC contract](/api/grpc/analysis-operations#patch-normal-shift---hole--pin)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `plane_points_group_name` | `CollectionObjectName` | `Plane Points Group Name` | Required |
| `perimeter_points_group_name` | `CollectionObjectName` | `Perimeter Points Group Name` | Required |
| `resulting_point_name` | `PointName` | `Resulting Point Name` | Required |
| `additional_material_thickness` | `float` | `Additional Material Thickness` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def patch_normal_shift_hole_pin(
    self,
    plane_points_group_name: CollectionObjectName,
    perimeter_points_group_name: CollectionObjectName,
    resulting_point_name: PointName,
    *,
    additional_material_thickness: float = 0.000000,
) -> None: ...
```

```python
await briosa.patch_normal_shift_hole_pin(plane_points_group_name=..., perimeter_points_group_name=..., resulting_point_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Patch Normal Shift - Point

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Patch Normal Shift - Point](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point) · [gRPC contract](/api/grpc/analysis-operations#patch-normal-shift---point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `plane_points_group_name` | `CollectionObjectName` | `Plane Points Group Name` | Required |
| `point_to_shift` | `PointName` | `Point to Shift` | Required |
| `resulting_point_name` | `PointName` | `Resulting Point Name` | Required |
| `additional_material_thickness` | `float` | `Additional Material Thickness` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def patch_normal_shift_point(
    self,
    plane_points_group_name: CollectionObjectName,
    point_to_shift: PointName,
    resulting_point_name: PointName,
    *,
    additional_material_thickness: float = 0.000000,
) -> None: ...
```

```python
await briosa.patch_normal_shift_point(plane_points_group_name=..., point_to_shift=..., resulting_point_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Clouds to Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Clouds to Objects](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-clouds-to-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `object_names` | `Iterable[CollectionObjectName]` | `Object Names` | Required |
| `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `proximity` | `float` | `Proximity` | 0.000000 |
| `skip_factor` | `int` | `Skip Factor` | 0 |
| `rms_tolerance_0_0_for_none` | `float` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximum_absolute_tolerance_0_0_for_none` | `float` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `rms_deviation` | `float` | `RMS Deviation` |
| `maximum_absolute_deviation` | `float` | `Maximum Absolute Deviation` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryCloudsToObjectsResult:
    rms_deviation: float
    maximum_absolute_deviation: float

async def query_clouds_to_objects(
    self,
    cloud_names: Iterable[CollectionObjectName],
    object_names: Iterable[CollectionObjectName],
    resulting_object_name: CollectionObjectName,
    *,
    projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
    proximity: float = 0.000000,
    skip_factor: int = 0,
    rms_tolerance_0_0_for_none: float = 0.000000,
    maximum_absolute_tolerance_0_0_for_none: float = 0.000000,
) -> QueryCloudsToObjectsResult: ...
```

```python
await briosa.query_clouds_to_objects(cloud_names=..., object_names=..., resulting_object_name=...)
```

Returns the 2 MP outputs in the named `QueryCloudsToObjectsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Clouds to Surface

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Clouds to Surface](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface) · [gRPC contract](/api/grpc/analysis-operations#query-clouds-to-surface)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloud_names` | `Iterable[CollectionObjectName]` | `Cloud Names` | Required |
| `filter_surface_name` | `CollectionObjectName` | `Filter Surface Name` | Required |
| `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `proximity` | `float` | `Proximity` | 0.000000 |
| `skip_factor` | `int` | `Skip Factor` | 0 |
| `rms_tolerance_0_0_for_none` | `float` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximum_absolute_tolerance_0_0_for_none` | `float` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `rms_deviation` | `float` | `RMS Deviation` |
| `maximum_absolute_deviation` | `float` | `Maximum Absolute Deviation` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryCloudsToSurfaceResult:
    rms_deviation: float
    maximum_absolute_deviation: float

async def query_clouds_to_surface(
    self,
    cloud_names: Iterable[CollectionObjectName],
    filter_surface_name: CollectionObjectName,
    resulting_object_name: CollectionObjectName,
    *,
    projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
    proximity: float = 0.000000,
    skip_factor: int = 0,
    rms_tolerance_0_0_for_none: float = 0.000000,
    maximum_absolute_tolerance_0_0_for_none: float = 0.000000,
) -> QueryCloudsToSurfaceResult: ...
```

```python
await briosa.query_clouds_to_surface(cloud_names=..., filter_surface_name=..., resulting_object_name=...)
```

Returns the 2 MP outputs in the named `QueryCloudsToSurfaceResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Frame to Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Frame to Frame](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame) · [gRPC contract](/api/grpc/analysis-operations#query-frame-to-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reference_frame_name` | `CollectionObjectName` | `Reference Frame Name` | Required |
| `corresponding_frame_name` | `CollectionObjectName` | `Corresponding Frame Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `x` | `float` | `X` |
| `y` | `float` | `Y` |
| `z` | `float` | `Z` |
| `rx_roll` | `float` | `Rx (Roll)` |
| `ry_pitch` | `float` | `Ry (Pitch)` |
| `rz_yaw` | `float` | `Rz (Yaw)` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryFrameToFrameResult:
    x: float
    y: float
    z: float
    rx_roll: float
    ry_pitch: float
    rz_yaw: float

async def query_frame_to_frame(
    self,
    reference_frame_name: CollectionObjectName,
    corresponding_frame_name: CollectionObjectName,
) -> QueryFrameToFrameResult: ...
```

```python
await briosa.query_frame_to_frame(reference_frame_name=..., corresponding_frame_name=...)
```

Returns the 6 MP outputs in the named `QueryFrameToFrameResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Groups to Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Groups to Objects](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-groups-to-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `group_name_list_groups_to_project` | `Iterable[CollectionObjectName]` | `Group Name List (Groups to Project)` | Required |
| `object_name_list_objects_to_project_to` | `Iterable[CollectionObjectName]` | `Object Name List (Objects to Project to)` | Required |
| `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `rms_tolerance_0_0_for_none` | `float` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximum_absolute_tolerance_0_0_for_none` | `float` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `show_results_dialog` | `bool` | `Show Results Dialog?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `rms_deviation` | `float` | `RMS Deviation` |
| `max_absolute_deviation` | `float` | `Max Absolute Deviation` |
| `average_deviation` | `float` | `Average Deviation` |
| `standard_deviation` | `float` | `Standard Deviation` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryGroupsToObjectsResult:
    rms_deviation: float
    max_absolute_deviation: float
    average_deviation: float
    standard_deviation: float

async def query_groups_to_objects(
    self,
    group_name_list_groups_to_project: Iterable[CollectionObjectName],
    object_name_list_objects_to_project_to: Iterable[CollectionObjectName],
    resulting_object_name: CollectionObjectName,
    *,
    projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
    rms_tolerance_0_0_for_none: float = 0.000000,
    maximum_absolute_tolerance_0_0_for_none: float = 0.000000,
    show_results_dialog: bool = False,
) -> QueryGroupsToObjectsResult: ...
```

```python
await briosa.query_groups_to_objects(group_name_list_groups_to_project=..., object_name_list_objects_to_project_to=..., resulting_object_name=...)
```

Returns the 4 MP outputs in the named `QueryGroupsToObjectsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Point to Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Point to Objects](/mp-command-catalog/commands/analysis-operations#query-point-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-point-to-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |
| `objects` | `Iterable[CollectionObjectName]` | `Objects` | Required |
| `ignore_target_offset` | `bool` | `Ignore Target Offset` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `d_x` | `float` | `dX` |
| `d_y` | `float` | `dY` |
| `d_z` | `float` | `dZ` |
| `d_mag` | `float` | `dMag` |
| `resultant_object` | `CollectionObjectName` | `Resultant Object` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryPointToObjectsResult:
    d_x: float
    d_y: float
    d_z: float
    d_mag: float
    resultant_object: CollectionObjectName

async def query_point_to_objects(
    self,
    point_name: PointName,
    objects: Iterable[CollectionObjectName],
    *,
    ignore_target_offset: bool = False,
) -> QueryPointToObjectsResult: ...
```

```python
await briosa.query_point_to_objects(point_name=..., objects=...)
```

Returns the 5 MP outputs in the named `QueryPointToObjectsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Point to Point Along Curve

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Point to Point Along Curve](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve) · [gRPC contract](/api/grpc/analysis-operations#query-point-to-point-along-curve)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `value_1st_point` | `PointName` | `1st Point` | Required |
| `value_2nd_point` | `PointName` | `2nd Point` | Required |
| `curve` | `CollectionObjectName` | `Curve` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `distance_along_curve` | `float` | `Distance Along Curve` |

```python
async def query_point_to_point_along_curve(
    self,
    value_1st_point: PointName,
    value_2nd_point: PointName,
    curve: CollectionObjectName,
) -> float: ...
```

```python
await briosa.query_point_to_point_along_curve(value_1st_point=..., value_2nd_point=..., curve=...)
```

Returns the MP output `Distance Along Curve` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Points to Circle

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Points to Circle](/mp-command-catalog/commands/analysis-operations#query-points-to-circle) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-circle)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circle_name` | `CollectionObjectName` | `Circle Name` | Required |
| `point_group_name` | `CollectionObjectName` | `Point Group Name` | Required |
| `is_inside_measurement` | `bool` | `Is Inside Measurement` | true |
| `auto_scale_vectors_to_of_radius` | `int` | `Auto Scale Vectors to % of Radius` | 40 |
| `vector_group_name_for_radial` | `CollectionObjectName` | `Vector Group Name for Radial` | Required |
| `vector_group_name_for_planar` | `CollectionObjectName` | `Vector Group Name for Planar` | Required |
| `vector_group_name_for_combined` | `CollectionObjectName` | `Vector Group Name for Combined` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def query_points_to_circle(
    self,
    circle_name: CollectionObjectName,
    point_group_name: CollectionObjectName,
    *,
    is_inside_measurement: bool = True,
    auto_scale_vectors_to_of_radius: int = 40,
    vector_group_name_for_radial: CollectionObjectName,
    vector_group_name_for_planar: CollectionObjectName,
    vector_group_name_for_combined: CollectionObjectName,
) -> None: ...
```

```python
await briosa.query_points_to_circle(circle_name=..., point_group_name=..., vector_group_name_for_radial=..., vector_group_name_for_planar=..., vector_group_name_for_combined=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Points to Objects

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Points to Objects](/mp-command-catalog/commands/analysis-operations#query-points-to-objects) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-objects)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_names` | `Iterable[PointName]` | `Point Names` | Required |
| `object_name_list_objects_to_project_to` | `Iterable[CollectionObjectName]` | `Object Name List (Objects to Project to)` | Required |
| `resulting_object_name` | `CollectionObjectName` | `Resulting Object Name` | Required |
| `projection_options` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |
| `rms_tolerance_0_0_for_none` | `float` | `RMS Tolerance (0.0 for none)` | 0.000000 |
| `maximum_absolute_tolerance_0_0_for_none` | `float` | `Maximum Absolute Tolerance (0.0 for none)` | 0.000000 |
| `show_results_dialog` | `bool` | `Show Results Dialog?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `rms_deviation` | `float` | `RMS Deviation` |
| `max_absolute_deviation` | `float` | `Max Absolute Deviation` |
| `average_deviation` | `float` | `Average Deviation` |
| `standard_deviation` | `float` | `Standard Deviation` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryPointsToObjectsResult:
    rms_deviation: float
    max_absolute_deviation: float
    average_deviation: float
    standard_deviation: float

async def query_points_to_objects(
    self,
    point_names: Iterable[PointName],
    object_name_list_objects_to_project_to: Iterable[CollectionObjectName],
    resulting_object_name: CollectionObjectName,
    *,
    projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
    rms_tolerance_0_0_for_none: float = 0.000000,
    maximum_absolute_tolerance_0_0_for_none: float = 0.000000,
    show_results_dialog: bool = False,
) -> QueryPointsToObjectsResult: ...
```

```python
await briosa.query_points_to_objects(point_names=..., object_name_list_objects_to_project_to=..., resulting_object_name=...)
```

Returns the 4 MP outputs in the named `QueryPointsToObjectsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Query Points to Single Point

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Query Points to Single Point](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point) · [gRPC contract](/api/grpc/analysis-operations#query-points-to-single-point)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_names` | `Iterable[PointName]` | `Point Names` | Required |
| `single_point` | `PointName` | `Single Point` | Required |
| `show_vector_properties` | `bool` | `Show Vector Properties?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def query_points_to_single_point(
    self,
    point_names: Iterable[PointName],
    single_point: PointName,
    *,
    show_vector_properties: bool = False,
) -> None: ...
```

```python
await briosa.query_points_to_single_point(point_names=..., single_point=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Re-Compute Calculated Items

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Re-Compute Calculated Items](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) · [gRPC contract](/api/grpc/analysis-operations#re-compute-calculated-items)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `targets_from_shots` | `bool` | `Targets from Shots` | false |
| `hidden_points` | `bool` | `Hidden Points` | false |
| `relationships` | `bool` | `Relationships` | false |
| `refresh_filtered_cloud_data` | `bool` | `Refresh Filtered Cloud Data?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def re_compute_calculated_items(
    self,
    *,
    targets_from_shots: bool = False,
    hidden_points: bool = False,
    relationships: bool = False,
    refresh_filtered_cloud_data: bool = False,
) -> None: ...
```

```python
await briosa.re_compute_calculated_items()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Rename points based on inter-point distance to reference points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Rename points based on inter-point distance to reference points](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points) · [gRPC contract](/api/grpc/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reference_group_name` | `CollectionObjectName` | `Reference Group Name` | Required |
| `group_to_rename_points` | `CollectionObjectName` | `Group To Rename Points` | Required |
| `distance_threshold` | `float` | `Distance Threshold` | 0.000000 |
| `verify_results` | `bool` | `Verify Results?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def rename_points_based_on_inter_point_distance_to_reference_points(
    self,
    reference_group_name: CollectionObjectName,
    group_to_rename_points: CollectionObjectName,
    *,
    distance_threshold: float = 0.000000,
    verify_results: bool = False,
) -> None: ...
```

```python
await briosa.rename_points_based_on_inter_point_distance_to_reference_points(reference_group_name=..., group_to_rename_points=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Rename points based on proximity to reference points

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Rename points based on proximity to reference points](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points) · [gRPC contract](/api/grpc/analysis-operations#rename-points-based-on-proximity-to-reference-points)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reference_group_name` | `CollectionObjectName` | `Reference Group Name` | Required |
| `group_to_rename_points` | `CollectionObjectName` | `Group To Rename Points` | Required |
| `proximity_threshold` | `float` | `Proximity Threshold` | 0.000000 |
| `verify_results` | `bool` | `Verify Results?` | false |
| `rename_all_proximate_points` | `bool` | `Rename All Proximate Points?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def rename_points_based_on_proximity_to_reference_points(
    self,
    reference_group_name: CollectionObjectName,
    group_to_rename_points: CollectionObjectName,
    *,
    proximity_threshold: float = 0.000000,
    verify_results: bool = False,
    rename_all_proximate_points: bool = False,
) -> None: ...
```

```python
await briosa.rename_points_based_on_proximity_to_reference_points(reference_group_name=..., group_to_rename_points=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Reverse B-Splines

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Reverse B-Splines](/mp-command-catalog/commands/analysis-operations#reverse-b-splines) · [gRPC contract](/api/grpc/analysis-operations#reverse-b-splines)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `b_spline_list` | `Iterable[CollectionObjectName]` | `B-Spline List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def reverse_bsplines(
    self,
    b_spline_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.reverse_bsplines(b_spline_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Reverse Plane Normals

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Reverse Plane Normals](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals) · [gRPC contract](/api/grpc/analysis-operations#reverse-plane-normals)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `plane_list` | `Iterable[CollectionObjectName]` | `Plane List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def reverse_plane_normals(
    self,
    plane_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.reverse_plane_normals(plane_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Reverse Surface Normals

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Reverse Surface Normals](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals) · [gRPC contract](/api/grpc/analysis-operations#reverse-surface-normals)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surface_list` | `Iterable[CollectionObjectName]` | `Surface List` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def reverse_surface_normals(
    self,
    surface_list: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.reverse_surface_normals(surface_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Circle Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Circle Properties](/mp-command-catalog/commands/analysis-operations#set-circle-properties) · [gRPC contract](/api/grpc/analysis-operations#set-circle-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `circle_name` | `CollectionObjectName` | `Circle Name` | Required |
| `center_coordinate` | `Vector` | `Center Coordinate` | Required |
| `normal_direction` | `Vector` | `Normal Direction` | Required |
| `radius` | `float` | `Radius` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_circle_properties(
    self,
    circle_name: CollectionObjectName,
    center_coordinate: Vector,
    normal_direction: Vector,
    *,
    radius: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_circle_properties(circle_name=..., center_coordinate=..., normal_direction=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Cone Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Cone Properties](/mp-command-catalog/commands/analysis-operations#set-cone-properties) · [gRPC contract](/api/grpc/analysis-operations#set-cone-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cone_name` | `CollectionObjectName` | `Cone Name` | Required |
| `cone_end_point_in_working_coordinates` | `Vector` | `Cone End Point (in working coordinates)` | Required |
| `cone_axis_in_working_coordinates` | `Vector` | `Cone Axis (in working coordinates)` | Required |
| `cone_length` | `float` | `Cone Length` | 0.000000 |
| `cone_theta_start` | `float` | `Cone Theta Start` | 0.000000 |
| `cone_theta_span` | `float` | `Cone Theta Span` | 0.000000 |
| `cone_included_angle` | `float` | `Cone Included Angle` | 0.000000 |
| `cut_length_from_apex` | `float` | `Cut Length from Apex` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_cone_properties(
    self,
    cone_name: CollectionObjectName,
    cone_end_point_in_working_coordinates: Vector,
    cone_axis_in_working_coordinates: Vector,
    *,
    cone_length: float = 0.000000,
    cone_theta_start: float = 0.000000,
    cone_theta_span: float = 0.000000,
    cone_included_angle: float = 0.000000,
    cut_length_from_apex: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_cone_properties(cone_name=..., cone_end_point_in_working_coordinates=..., cone_axis_in_working_coordinates=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Cylinder Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Cylinder Properties](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties) · [gRPC contract](/api/grpc/analysis-operations#set-cylinder-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cylinder_name` | `CollectionObjectName` | `Cylinder Name` | Required |
| `begin_coordinate` | `Vector` | `Begin Coordinate` | Required |
| `axis_direction` | `Vector` | `Axis Direction` | Required |
| `length` | `float` | `Length` | 0.000000 |
| `diameter` | `float` | `Diameter` | 0.000000 |
| `nominals_point_inward` | `bool` | `Nominals Point Inward` | true |
| `facets` | `int` | `Facets` | 32 |
| `enable_theta_extent_display_mode` | `bool` | `Enable Theta Extent Display Mode` | true |
| `theta_start_in_degrees` | `float` | `Theta Start in Degrees` | 0.000000 |
| `theta_span_in_degrees` | `float` | `Theta Span in Degrees` | 360.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_cylinder_properties(
    self,
    cylinder_name: CollectionObjectName,
    begin_coordinate: Vector,
    axis_direction: Vector,
    *,
    length: float = 0.000000,
    diameter: float = 0.000000,
    nominals_point_inward: bool = True,
    facets: int = 32,
    enable_theta_extent_display_mode: bool = True,
    theta_start_in_degrees: float = 0.000000,
    theta_span_in_degrees: float = 360.000000,
) -> None: ...
```

```python
await briosa.set_cylinder_properties(cylinder_name=..., begin_coordinate=..., axis_direction=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Default Colorization Options

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Default Colorization Options](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options) · [gRPC contract](/api/grpc/analysis-operations#set-default-colorization-options)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `colorization_options` | `ColorizationOptions` | `Colorization Options` | Red |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_default_colorization_options(
    self,
    *,
    colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
) -> None: ...
```

```python
await briosa.set_default_colorization_options()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Ellipse Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Ellipse Properties](/mp-command-catalog/commands/analysis-operations#set-ellipse-properties) · [gRPC contract](/api/grpc/analysis-operations#set-ellipse-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ellipse_name` | `CollectionObjectName` | `Ellipse Name` | Required |
| `center_coordinate` | `Vector` | `Center Coordinate` | Required |
| `normal_direction` | `Vector` | `Normal Direction` | Required |
| `major_axis_radius` | `float` | `Major Axis Radius` | 0.000000 |
| `minor_axis_radius` | `float` | `Minor Axis Radius` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_ellipse_properties(
    self,
    ellipse_name: CollectionObjectName,
    center_coordinate: Vector,
    normal_direction: Vector,
    *,
    major_axis_radius: float = 0.000000,
    minor_axis_radius: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_ellipse_properties(ellipse_name=..., center_coordinate=..., normal_direction=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Geometry Relationship Fit Profile

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Geometry Relationship Fit Profile](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile) · [gRPC contract](/api/grpc/analysis-operations#set-geometry-relationship-fit-profile)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geometry_type` | `GeometryType` | `Geometry Type` | Required |
| `relationship_ref_list` | `Iterable[CollectionItemName]` | `Relationship Ref List` | Required |
| `fit_profile_name` | `str` | `Fit Profile Name` | Empty |
| `apply_cardinal_point_settings` | `bool` | `Apply Cardinal Point Settings` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_geometry_relationship_fit_profile(
    self,
    geometry_type: GeometryType,
    relationship_ref_list: Iterable[CollectionItemName],
    *,
    fit_profile_name: str = '',
    apply_cardinal_point_settings: bool = False,
) -> None: ...
```

```python
await briosa.set_geometry_relationship_fit_profile(geometry_type=..., relationship_ref_list=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Line Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Line Properties](/mp-command-catalog/commands/analysis-operations#set-line-properties) · [gRPC contract](/api/grpc/analysis-operations#set-line-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `line_name` | `CollectionObjectName` | `Line Name` | Required |
| `begin_coordinate` | `Vector` | `Begin Coordinate` | Required |
| `end_coordinate` | `Vector` | `End Coordinate` | Required |
| `length_optional` | `float` | `Length (optional)` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_line_properties(
    self,
    line_name: CollectionObjectName,
    begin_coordinate: Vector,
    end_coordinate: Vector,
    *,
    length_optional: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_line_properties(line_name=..., begin_coordinate=..., end_coordinate=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Measurement Auxiliary Data

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Measurement Auxiliary Data](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data) · [gRPC contract](/api/grpc/analysis-operations#set-measurement-auxiliary-data)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name` | `PointName` | `Point Name` | Required |
| `auxiliary_name` | `str` | `Auxiliary Name` | Empty |
| `value` | `float` | `Value` | 0.000000 |
| `units` | `str` | `Units` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_measurement_auxiliary_data(
    self,
    point_name: PointName,
    *,
    auxiliary_name: str = '',
    value: float = 0.000000,
    units: str = '',
) -> None: ...
```

```python
await briosa.set_measurement_auxiliary_data(point_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Object Reporting Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Object Reporting Frame](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame) · [gRPC contract](/api/grpc/analysis-operations#set-object-reporting-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_name` | `CollectionObjectName` | `Object Name` | Required |
| `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_object_reporting_frame(
    self,
    object_name: CollectionObjectName,
    reporting_frame: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_object_reporting_frame(object_name=..., reporting_frame=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Point Properties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Point Properties](/mp-command-catalog/commands/analysis-operations#set-point-properties) · [gRPC contract](/api/grpc/analysis-operations#set-point-properties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name_list` | `Iterable[PointName]` | `Point Name List` | Required |
| `planar_offset` | `float` | `Planar Offset` | 0.000000 |
| `radial_offset` | `float` | `Radial Offset` | 0.000000 |
| `position_tolerance` | `ToleranceVectorOptions` | `Position Tolerance` | Required |
| `component_weights` | `Vector` | `Component Weights` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_point_properties(
    self,
    point_name_list: Iterable[PointName],
    *,
    planar_offset: float = 0.000000,
    radial_offset: float = 0.000000,
    position_tolerance: ToleranceVectorOptions,
    component_weights: Vector,
) -> None: ...
```

```python
await briosa.set_point_properties(point_name_list=..., position_tolerance=..., component_weights=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Point Weights From Uncertainties

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Point Weights From Uncertainties](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties) · [gRPC contract](/api/grpc/analysis-operations#set-point-weights-from-uncertainties)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_name_list` | `Iterable[PointName]` | `Point Name List` | Required |
| `uncertainty_reference_frame_mode` | `str` | `Uncertainty Reference Frame Mode` | With respect to WORLD |
| `reporting_frame` | `CollectionObjectName` | `Reporting Frame` | Required |
| `weight_normalization_mode` | `str` | `Weight Normalization Mode` | Set to fixed value |
| `fixed_weight_value` | `float` | `Fixed Weight Value` | 1.000000 |
| `output_weighted_point_group` | `CollectionObjectName` | `Output Weighted Point Group` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `output_weighted_point_list` | `list[PointName]` | `Output Weighted Point List` |

```python
async def set_point_weights_from_uncertainties(
    self,
    point_name_list: Iterable[PointName],
    *,
    uncertainty_reference_frame_mode: str = "With respect to WORLD",
    reporting_frame: CollectionObjectName,
    weight_normalization_mode: str = "Set to fixed value",
    fixed_weight_value: float = 1.000000,
    output_weighted_point_group: CollectionObjectName,
) -> list[PointName]: ...
```

```python
await briosa.set_point_weights_from_uncertainties(point_name_list=..., reporting_frame=..., output_weighted_point_group=...)
```

Returns the MP output `Output Weighted Point List` directly as `list[PointName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Transform for i-th Frame in Frame Set

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Transform for i-th Frame in Frame Set](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set) · [gRPC contract](/api/grpc/analysis-operations#set-transform-for-i-th-frame-in-frame-set)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `frame_set` | `CollectionObjectName` | `Frame Set` | Required |
| `frame_set_index` | `int` | `Frame Set Index` | 0 |
| `transform_in_working` | `Transform` | `Transform in Working` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_transform_for_ith_frame_in_frame_set(
    self,
    frame_set: CollectionObjectName,
    *,
    frame_set_index: int = 0,
    transform_in_working: Transform,
) -> None: ...
```

```python
await briosa.set_transform_for_ith_frame_in_frame_set(frame_set=..., transform_in_working=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Sphere Axis Check

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Sphere Axis Check](/mp-command-catalog/commands/analysis-operations#sphere-axis-check) · [gRPC contract](/api/grpc/analysis-operations#sphere-axis-check)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sphere_points_group_name` | `CollectionObjectName` | `Sphere Points Group Name` | Required |
| `sphere_target_radius` | `float` | `Sphere Target Radius` | 0.000000 |
| `point_to_create_at_sphere_center` | `PointName` | `Point To Create at Sphere Center` | Required |
| `line_defining_the_axis` | `CollectionObjectName` | `Line defining the axis` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `sphere_fit_rms_error` | `float` | `Sphere Fit RMS Error` |
| `sphere_fit_max_error` | `float` | `Sphere Fit Max Error` |
| `vector_representation` | `Vector` | `Vector Representation` |
| `x_value` | `float` | `X Value` |
| `y_value` | `float` | `Y Value` |
| `z_value` | `float` | `Z Value` |
| `magnitude` | `float` | `Magnitude` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class SphereAxisCheckResult:
    sphere_fit_rms_error: float
    sphere_fit_max_error: float
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
    magnitude: float

async def sphere_axis_check(
    self,
    sphere_points_group_name: CollectionObjectName,
    *,
    sphere_target_radius: float = 0.000000,
    point_to_create_at_sphere_center: PointName,
    line_defining_the_axis: CollectionObjectName,
) -> SphereAxisCheckResult: ...
```

```python
await briosa.sphere_axis_check(sphere_points_group_name=..., point_to_create_at_sphere_center=..., line_defining_the_axis=...)
```

Returns the 7 MP outputs in the named `SphereAxisCheckResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Temperature Compensate a group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Temperature Compensate a group](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group) · [gRPC contract](/api/grpc/analysis-operations#temperature-compensate-a-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `original_group` | `CollectionObjectName` | `Original Group` | Required |
| `scaling_origin_coordinate_frame` | `FrameName` | `Scaling Origin (coordinate frame)` | Required |
| `material_cte_1_deg_f` | `float` | `Material CTE (1/Deg F)` | 0.000000 |
| `initial_temperature_f` | `float` | `Initial Temperature (F)` | 0.000000 |
| `final_temperature_f` | `float` | `Final Temperature (F)` | 0.000000 |
| `scaled_group_name` | `CollectionObjectName` | `Scaled Group Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def temperature_compensate_a_group(
    self,
    original_group: CollectionObjectName,
    scaling_origin_coordinate_frame: FrameName,
    *,
    material_cte_1_deg_f: float = 0.000000,
    initial_temperature_f: float = 0.000000,
    final_temperature_f: float = 0.000000,
    scaled_group_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.temperature_compensate_a_group(original_group=..., scaling_origin_coordinate_frame=..., scaled_group_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Transform Objects - Frame To Frame

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Transform Objects - Frame To Frame](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame) · [gRPC contract](/api/grpc/analysis-operations#transform-objects---frame-to-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_name_list` | `Iterable[CollectionObjectName]` | `Object Name List` | Required |
| `initial_frame_name` | `CollectionObjectName` | `Initial Frame Name` | Required |
| `destination_frame_name` | `CollectionObjectName` | `Destination Frame Name` | Required |
| `number_of_steps` | `int` | `Number of Steps` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def transform_objects_frame_to_frame(
    self,
    object_name_list: Iterable[CollectionObjectName],
    initial_frame_name: CollectionObjectName,
    destination_frame_name: CollectionObjectName,
    *,
    number_of_steps: int = 0,
) -> None: ...
```

```python
await briosa.transform_objects_frame_to_frame(object_name_list=..., initial_frame_name=..., destination_frame_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Transform Objects by Delta (About Working Frame)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Transform Objects by Delta (About Working Frame)](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame) · [gRPC contract](/api/grpc/analysis-operations#transform-objects-by-delta-about-working-frame)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_transform` | `Iterable[CollectionObjectName]` | `Objects to Transform` | Required |
| `delta_transform` | `Transform` | `Delta Transform` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def transform_objects_by_delta_about_working_frame(
    self,
    objects_to_transform: Iterable[CollectionObjectName],
    delta_transform: Transform,
) -> None: ...
```

```python
await briosa.transform_objects_by_delta_about_working_frame(objects_to_transform=..., delta_transform=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Transform Objects by Delta (World Transform Operator)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Transform Objects by Delta (World Transform Operator)](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator) · [gRPC contract](/api/grpc/analysis-operations#transform-objects-by-delta-world-transform-operator)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_transform` | `Iterable[CollectionObjectName]` | `Objects to Transform` | Required |
| `delta_transform` | `WorldTransform` | `Delta Transform` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def transform_objects_by_delta_world_transform_operator(
    self,
    objects_to_transform: Iterable[CollectionObjectName],
    delta_transform: WorldTransform,
) -> None: ...
```

```python
await briosa.transform_objects_by_delta_world_transform_operator(objects_to_transform=..., delta_transform=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Translate Objects by Delta

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Translate Objects by Delta](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta) · [gRPC contract](/api/grpc/analysis-operations#translate-objects-by-delta)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects_to_translate` | `Iterable[CollectionObjectName]` | `Objects to Translate` | Required |
| `delta_translation` | `Vector` | `Delta Translation` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def translate_objects_by_delta(
    self,
    objects_to_translate: Iterable[CollectionObjectName],
    delta_translation: Vector,
) -> None: ...
```

```python
await briosa.translate_objects_by_delta(objects_to_translate=..., delta_translation=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
