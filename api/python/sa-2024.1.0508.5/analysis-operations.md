---
title: Analysis Operations
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Analysis Operations

[SA 2026.1.0529.7](/api/python/analysis-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/analysis-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Angle Between Line and Plane {/* #angle-between-line-and-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-line-and-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def angle_between_line_and_plane(
        self,
        selected_line: CollectionObjectName,
        selected_plane: CollectionObjectName,
        *,
        nominal_angle: float = 0.000000,
        angle_tolerance: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Angle Between Two Lines {/* #angle-between-two-lines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-two-lines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def angle_between_two_lines(
        self,
        line_1: CollectionObjectName,
        line_2: CollectionObjectName,
        *,
        nominal_angle: float = 0.000000,
        angle_tolerance: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Angle Between Two Planes' normals {/* #angle-between-two-planes-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-two-planes-normals)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def angle_between_two_planes_normals(
        self,
        plane_a: CollectionObjectName,
        plane_b: CollectionObjectName,
        *,
        nominal_angle: float = 0.000000,
        angle_tolerance: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Best Fit Transformation - Group to Group {/* #best-fit-transformation---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#best-fit-transformation---group-to-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

A request that sets `show_interface` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def best_fit_transformation_group_to_group(
        self,
        reference_group: CollectionObjectName,
        corresponding_group: CollectionObjectName,
        *,
        show_interface: bool = False,
        rms_tolerance: float = 0.000000,
        maximum_absolute_tolerance: float = 0.000000,
        allow_scale: bool = False,
        allow_x: bool = True,
        allow_y: bool = True,
        allow_z: bool = True,
        allow_rx: bool = True,
        allow_ry: bool = True,
        allow_rz: bool = True,
        lock_degrees_of_freedom: bool = False,
        generate_event: bool = False,
        file_path_for_csv_text_report: FileReference,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> BestFitTransformationGroupToGroupResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |
| `file_path_for_csv_text_report` | Requires Show Interface to be true. |

## Compute Group to Group Orientation (Rx,Ry,Rz) {/* #compute-group-to-group-orientation-rxryrz */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#compute-group-to-group-orientation-rxryrz)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def compute_group_to_group_orientation_rx_ry_rz(
        self,
        reference_group: CollectionObjectName,
        corresponding_group: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> ComputeGroupToGroupOrientationRxRyRzResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Uncertainty Cloud Point Sets {/* #create-point-uncertainty-cloud-point-sets */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#create-point-uncertainty-cloud-point-sets)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def create_point_uncertainty_cloud_point_sets(
        self,
        point_name_list: Iterable[PointName],
        *,
        number_of_samples: int = 1000,
        uncertainty_reference_frame_mode: str = "With respect to WORLD",
        grouping_mode: str = "Group per point",
        point_set_mode: str = "Point clouds",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> CreatePointUncertaintyCloudPointSetsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Uncertainty Fields {/* #create-point-uncertainty-fields */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#create-point-uncertainty-fields)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def create_point_uncertainty_fields(
        self,
        point_name_list: Iterable[PointName],
        *,
        number_of_samples: int = 1000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Fit Geometry to Point Group {/* #fit-geometry-to-point-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-point-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `report_deviations` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def fit_geometry_to_point_group(
        self,
        geometry_type: GeometryType,
        group_to_fit: CollectionObjectName,
        resulting_object_name: CollectionObjectName,
        *,
        fit_profile_name: str = "",
        report_deviations: bool = False,
        fit_interface_tolerance: float = -1.000000,
        ignore_out_of_tolerance_points: bool = False,
        starting_condition_geometry: CollectionObjectName | None = None,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional (major 3): omitted when absent, so SpatialAnalyzer fits without a starting geometry; an empty name is rejected. |

## Fit Geometry to Point Group Projected to Plane {/* #fit-geometry-to-point-group-projected-to-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-point-group-projected-to-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `report_deviations` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def fit_geometry_to_point_group_projected_to_plane(
        self,
        geometry_type: GeometryType,
        group_to_fit: CollectionObjectName,
        plane_name: CollectionObjectName,
        resulting_object_name: CollectionObjectName,
        *,
        fit_profile_name: str = "",
        report_deviations: bool = False,
        fit_interface_tolerance: float = -1.000000,
        ignore_out_of_tolerance_points: bool = False,
        starting_condition_geometry: CollectionObjectName | None = None,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional (major 3): omitted when absent, so SpatialAnalyzer fits without a starting geometry; an empty name is rejected. |

## Fit Geometry to Points {/* #fit-geometry-to-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `report_deviations` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def fit_geometry_to_points(
        self,
        geometry_type: GeometryType,
        points_to_fit: Iterable[PointName],
        resulting_object_name: CollectionObjectName,
        *,
        fit_profile_name: str = "",
        report_deviations: bool = False,
        fit_interface_tolerance: float = -1.000000,
        ignore_out_of_tolerance_points: bool = False,
        starting_condition_geometry: CollectionObjectName | None = None,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional (major 3): omitted when absent, so SpatialAnalyzer fits without a starting geometry; an empty name is rejected. |

## Get B-Spline Properties {/* #get-b-spline-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-b-spline-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_bspline_properties(
        self,
        b_spline_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetBSplinePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Circle Properties {/* #get-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-circle-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-circle-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_circle_properties(
        self,
        circle_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetCirclePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cone Properties {/* #get-cone-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cone-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-cone-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_cone_properties(
        self,
        cone_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetConePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `cone_end_point` | Expressed in working coordinates. |
| `cone_axis` | Expressed in working coordinates. |

## Get Coordinate for i-th Point in Point Set {/* #get-coordinate-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-coordinate-for-i-th-point-in-point-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_coordinate_for_ith_point_in_point_set(
        self,
        point_set: CollectionObjectName,
        *,
        point_set_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetCoordinateForIthPointInPointSetResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cylinder Properties {/* #get-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-cylinder-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_cylinder_properties(
        self,
        cylinder_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetCylinderPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Ellipse Properties {/* #get-ellipse-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-ellipse-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_ellipse_properties(
        self,
        ellipse_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetEllipsePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Euler Parameters for Frame {/* #get-euler-parameters-for-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-euler-parameters-for-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_euler_parameters_for_frame(
        self,
        frame: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetEulerParametersForFrameResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Euler Parameters for i-th Frame in Frame Set {/* #get-euler-parameters-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_euler_parameters_for_ith_frame_in_frame_set(
        self,
        frame_set: CollectionObjectName,
        *,
        frame_set_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetEulerParametersForIthFrameInFrameSetResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Collection Name {/* #get-i-th-collection-name */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-i-th-collection-name)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_ith_collection_name(
        self,
        *,
        collection_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Point From Group {/* #get-i-th-point-from-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-i-th-point-from-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_ith_point_from_group(
        self,
        group_name: CollectionObjectName,
        *,
        point_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetIthPointFromGroupResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Line Properties {/* #get-line-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-line-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-line-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_line_properties(
        self,
        line_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetLinePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Auxiliary Data {/* #get-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-auxiliary-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_measurement_auxiliary_data(
        self,
        point_name: PointName,
        *,
        auxiliary_name: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetMeasurementAuxiliaryDataResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Info Data {/* #get-measurement-info-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-info-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_measurement_info_data(
        self,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Weather Data {/* #get-measurement-weather-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-weather-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_measurement_weather_data(
        self,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetMeasurementWeatherDataResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in inches of mercury. |
| `humidity` | Relative humidity in percent. |

## Get Number of Collections {/* #get-number-of-collections */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-collections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-collections)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_number_of_collections(
        self, *, on_mp_completion: MpCompletionObserver | None = None
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Frames In Frame Set {/* #get-number-of-frames-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-frames-in-frame-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_number_of_frames_in_frame_set(
        self,
        frame_set_container: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Points in Group {/* #get-number-of-points-in-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-points-in-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_number_of_points_in_group(
        self,
        group_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Points In Point Set {/* #get-number-of-points-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-points-in-point-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_number_of_points_in_point_set(
        self,
        point_set_container: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Object Reporting Frame {/* #get-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-object-reporting-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_object_reporting_frame(
        self,
        object_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Plane Properties {/* #get-plane-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-plane-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-plane-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_plane_properties(
        self,
        plane_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetPlanePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate {/* #get-point-coordinate */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_point_coordinate(
        self,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetPointCoordinateResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate (Cylindrical) {/* #get-point-coordinate-cylindrical */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate-cylindrical)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_point_coordinate_cylindrical(
        self,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetPointCoordinateCylindricalResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate (Polar) {/* #get-point-coordinate-polar */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate-polar)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_point_coordinate_polar(
        self,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetPointCoordinatePolarResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Properties {/* #get-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_point_properties(
        self,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetPointPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point To Line Distance {/* #get-point-to-line-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-to-line-distance)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_point_to_line_distance(
        self,
        point: PointName,
        line: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetPointToLineDistanceResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point To Point Distance {/* #get-point-to-point-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-to-point-distance)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_point_to_point_distance(
        self,
        first_point: PointName,
        second_point: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetPointToPointDistanceResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Tolerance {/* #get-point-tolerance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-tolerance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-tolerance)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_point_tolerance(
        self,
        point_name: PointName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetPointToleranceResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Slot Properties {/* #get-slot-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-slot-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-slot-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_slot_properties(
        self,
        slot_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetSlotPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `slot_transform` | Expressed in working coordinates. |
| `center` | Expressed in working coordinates. |
| `normal_direction` | Expressed in working coordinates. |
| `centerline_pt_1` | Expressed in working coordinates. |
| `centerline_pt_2` | Expressed in working coordinates. |

## Get Sphere Properties {/* #get-sphere-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-sphere-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-sphere-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_sphere_properties(
        self,
        sphere_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetSpherePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Surface Physical Stats {/* #get-surface-physical-stats */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-surface-physical-stats)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_surface_physical_stats(
        self,
        surface_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetSurfacePhysicalStatsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Timestamp for i-th Frame in Frame Set {/* #get-timestamp-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_timestamp_for_ith_frame_in_frame_set(
        self,
        frame_set: CollectionObjectName,
        *,
        frame_set_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Timestamp for i-th Point in Point Set {/* #get-timestamp-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-timestamp-for-i-th-point-in-point-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_timestamp_for_ith_point_in_point_set(
        self,
        point_set: CollectionObjectName,
        *,
        point_set_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Torus Properties {/* #get-torus-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-torus-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-torus-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_torus_properties(
        self,
        torus_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GetTorusPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform for i-th Frame in Frame Set {/* #get-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-transform-for-i-th-frame-in-frame-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_transform_for_ith_frame_in_frame_set(
        self,
        frame_set: CollectionObjectName,
        *,
        frame_set_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Group To Surface Fit {/* #group-to-surface-fit */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#group-to-surface-fit)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def group_to_surface_fit(
        self,
        group_to_fit: CollectionObjectName,
        surface: CollectionObjectName,
        *,
        do_conventional_fit: bool = False,
        rms_tolerance: float = 0.000000,
        maximum_absolute_tolerance: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> GroupToSurfaceFitResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Import Geometry Fit Profiles {/* #import-geometry-fit-profiles */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#import-geometry-fit-profiles)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read`, `destructive` · **Duration Class:** `quick`

```python
async def import_geometry_fit_profiles(
        self,
        geometry_fit_profiles_file_path: FileReference,
        *,
        overwrite_profiles_with_same_name: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Is Object of Type {/* #is-object-of-type */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#is-object-of-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#is-object-of-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def is_object_of_type(
        self,
        object_name: CollectionObjectName,
        *,
        object_type: ObjectType = ObjectType.ANY,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Circle Fit Profile {/* #make-circle-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-circle-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_circle_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
        override_radial_offset: float = -1.000000,
        measured_side_for_planar_offset: MeasuredSideForPlanarOffset = MeasuredSideForPlanarOffset.ABOVE_PLANE,
        override_planar_offset: float = -1.000000,
        planar_offset_direction: NormalDirection = NormalDirection.PROBING_DIRECTION,
        lock_radius: float = -1.000000,
        circle_computation_technique: CompTechnique = CompTechnique.STANDARD,
        reverse_normal_vector_after_fit: bool = False,
        make_cardinal_points: bool = True,
        cardinal_pt_1_center: bool = True,
        cardinal_pt_2_point_on_normal: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Make Cone Fit Profile {/* #make-cone-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-cone-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_cone_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
        override_radial_offset: float = -1.000000,
        lock_angle_in_degrees: float = -1.000000,
        use_exhaustive_search: bool = True,
        make_cardinal_points: bool = True,
        cardinal_pt_1_vertex: bool = True,
        cardinal_pt_2_point_on_axis: bool = True,
        cardinal_pt_3_cut_point_on_axis: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_angle_in_degrees` | -1.0 leaves this dimension unlocked. |

## Make Cylinder Fit Profile {/* #make-cylinder-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-cylinder-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_cylinder_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
        override_radial_offset: float = -1.000000,
        lock_radius: float = -1.000000,
        locked_radius_fit_method: FitMethod = FitMethod.MINIMUM_RMS,
        cylinder_computation_technique: CompTechnique = CompTechnique.STANDARD,
        use_exhaustive_search: bool = False,
        make_cardinal_points: bool = True,
        cardinal_pt_1_begin_pt: bool = True,
        cardinal_pt_2_end_pt: bool = True,
        cardinal_pt_3_center: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Make Ellipse Fit Profile {/* #make-ellipse-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-ellipse-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_ellipse_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
        override_radial_offset: float = -1.000000,
        measured_side_for_planar_offset: MeasuredSideForPlanarOffset = MeasuredSideForPlanarOffset.ABOVE_PLANE,
        override_planar_offset: float = -1.000000,
        planar_offset_direction: NormalDirection = NormalDirection.PROBING_DIRECTION,
        reverse_normal_vector_after_fit: bool = False,
        make_cardinal_points: bool = True,
        cardinal_pt_1_center: bool = True,
        cardinal_pt_2_point_on_normal: bool = True,
        cardinal_pt_3_focal_pt_1: bool = True,
        cardinal_pt_4_focal_pt_2: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Line Fit Profile {/* #make-line-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-line-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_line_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        reverse_normal_vector_after_fit: bool = False,
        make_cardinal_points: bool = True,
        cardinal_pt_1_point_a: bool = True,
        cardinal_pt_2_point_b: bool = True,
        cardinal_pt_3_mid_point: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Paraboloid Fit Profile {/* #make-paraboloid-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-paraboloid-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_paraboloid_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
        override_radial_offset: float = -1.000000,
        lock_focal_length: float = -1.000000,
        degree_of_freedom: DegreeOfFreedom = DegreeOfFreedom.ANY,
        make_cardinal_points: bool = True,
        cardinal_pt_1_vertex: bool = True,
        cardinal_pt_2_focal_point: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_focal_length` | -1.0 leaves this dimension unlocked. |

## Make Plane Fit Profile {/* #make-plane-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-plane-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_plane_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        measured_side_for_planar_offset: MeasuredSideForPlanarOffset = MeasuredSideForPlanarOffset.ABOVE_PLANE,
        override_planar_offset: float = -1.000000,
        planar_offset_direction: NormalDirection = NormalDirection.PROBING_DIRECTION,
        reverse_normal_vector_after_fit: bool = False,
        make_cardinal_points: bool = True,
        cardinal_pt_1_centroid: bool = True,
        cardinal_pt_2_point_on_normal: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Slot Fit Profile {/* #make-slot-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-slot-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_slot_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
        override_radial_offset: float = -1.000000,
        measured_side_for_planar_offset: MeasuredSideForPlanarOffset = MeasuredSideForPlanarOffset.ABOVE_PLANE,
        override_planar_offset: float = -1.000000,
        planar_offset_direction: NormalDirection = NormalDirection.PROBING_DIRECTION,
        slot_type: SlotType = SlotType.ROUND,
        slot_computation_technique: CompTechnique = CompTechnique.STANDARD,
        reverse_normal_vector_after_fit: bool = False,
        make_cardinal_points: bool = True,
        cardinal_pt_1_center: bool = True,
        cardinal_pt_2_point_on_normal: bool = True,
        cardinal_pt_3_centerline_pt_1: bool = True,
        cardinal_pt_4_centerline_pt_2: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Sphere Fit Profile {/* #make-sphere-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-sphere-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_sphere_fit_profile(
        self,
        *,
        fit_profile_name: str = "",
        measured_side_for_radial_offset: MeasuredSideForRadialOffset = MeasuredSideForRadialOffset.OUTSIDE,
        override_radial_offset: float = -1.000000,
        lock_radius: float = -1.000000,
        make_cardinal_points: bool = True,
        cardinal_pt_1_center: bool = True,
        computation_method: SphereFitComputationMode = SphereFitComputationMode.STANDARD,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Mushroom Target Hole Inspection {/* #mushroom-target-hole-inspection */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#mushroom-target-hole-inspection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def mushroom_target_hole_inspection(
        self,
        *,
        name_prefix_for_intermediate_constructions: str = "",
        sphere_points_group_name: CollectionObjectName,
        sphere_target_radius: float = 0.000000,
        target_contact_plane: CollectionObjectName,
        point_to_create_at_hole: PointName,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> MushroomTargetHoleInspectionResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Patch Normal Shift - Hole / Pin {/* #patch-normal-shift---hole--pin */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#patch-normal-shift---hole--pin)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def patch_normal_shift_hole_pin(
        self,
        plane_points_group_name: CollectionObjectName,
        perimeter_points_group_name: CollectionObjectName,
        resulting_point_name: PointName,
        *,
        additional_material_thickness: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Patch Normal Shift - Point {/* #patch-normal-shift---point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#patch-normal-shift---point)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def patch_normal_shift_point(
        self,
        plane_points_group_name: CollectionObjectName,
        point_to_shift: PointName,
        resulting_point_name: PointName,
        *,
        additional_material_thickness: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Clouds to Objects {/* #query-clouds-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-clouds-to-objects)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def query_clouds_to_objects(
        self,
        cloud_names: Iterable[CollectionObjectName],
        object_names: Iterable[CollectionObjectName],
        resulting_object_name: CollectionObjectName,
        *,
        projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
        proximity: float = 0.000000,
        skip_factor: int = 0,
        rms_tolerance: float = 0.000000,
        maximum_absolute_tolerance: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> QueryCloudsToObjectsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Clouds to Surface {/* #query-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-clouds-to-surface)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def query_clouds_to_surface(
        self,
        cloud_names: Iterable[CollectionObjectName],
        filter_surface_name: CollectionObjectName,
        resulting_object_name: CollectionObjectName,
        *,
        projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
        proximity: float = 0.000000,
        skip_factor: int = 0,
        rms_tolerance: float = 0.000000,
        maximum_absolute_tolerance: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> QueryCloudsToSurfaceResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Frame to Frame {/* #query-frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-frame-to-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def query_frame_to_frame(
        self,
        reference_frame_name: CollectionObjectName,
        corresponding_frame_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> QueryFrameToFrameResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `rx` | MP qualifier: Roll. |
| `ry` | MP qualifier: Pitch. |
| `rz` | MP qualifier: Yaw. |

## Query Groups to Objects {/* #query-groups-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-groups-to-objects)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `show_results_dialog` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def query_groups_to_objects(
        self,
        group_name_list: Iterable[CollectionObjectName],
        object_name_list: Iterable[CollectionObjectName],
        resulting_object_name: CollectionObjectName,
        *,
        projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
        rms_tolerance: float = 0.000000,
        maximum_absolute_tolerance: float = 0.000000,
        show_results_dialog: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> QueryGroupsToObjectsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `group_name_list` | MP qualifier: Groups to Project. |
| `object_name_list` | MP qualifier: Objects to Project to. |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Point to Objects {/* #query-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-point-to-objects)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def query_point_to_objects(
        self,
        point_name: PointName,
        objects: Iterable[CollectionObjectName],
        *,
        ignore_target_offset: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> QueryPointToObjectsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Point to Point Along Curve {/* #query-point-to-point-along-curve */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-point-to-point-along-curve)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def query_point_to_point_along_curve(
        self,
        value_1st_point: PointName,
        value_2nd_point: PointName,
        curve: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Points to Circle {/* #query-points-to-circle */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-circle) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-circle)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Points to Objects {/* #query-points-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-objects)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `show_results_dialog` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def query_points_to_objects(
        self,
        point_names: Iterable[PointName],
        object_name_list: Iterable[CollectionObjectName],
        resulting_object_name: CollectionObjectName,
        *,
        projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
        rms_tolerance: float = 0.000000,
        maximum_absolute_tolerance: float = 0.000000,
        show_results_dialog: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> QueryPointsToObjectsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `object_name_list` | MP qualifier: Objects to Project to. |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Points to Single Point {/* #query-points-to-single-point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-single-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `show_vector_properties` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def query_points_to_single_point(
        self,
        point_names: Iterable[PointName],
        single_point: PointName,
        *,
        show_vector_properties: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Re-Compute Calculated Items {/* #re-compute-calculated-items */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#re-compute-calculated-items)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def re_compute_calculated_items(
        self,
        *,
        targets_from_shots: bool = False,
        hidden_points: bool = False,
        relationships: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename points based on inter-point distance to reference points {/* #rename-points-based-on-inter-point-distance-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `verify_results` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def rename_points_based_on_inter_point_distance_to_reference_points(
        self,
        reference_group_name: CollectionObjectName,
        group_to_rename_points: CollectionObjectName,
        *,
        distance_threshold: float = 0.000000,
        verify_results: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename points based on proximity to reference points {/* #rename-points-based-on-proximity-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#rename-points-based-on-proximity-to-reference-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `verify_results` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def rename_points_based_on_proximity_to_reference_points(
        self,
        reference_group_name: CollectionObjectName,
        group_to_rename_points: CollectionObjectName,
        *,
        proximity_threshold: float = 0.000000,
        verify_results: bool = False,
        rename_all_proximate_points: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse B-Splines {/* #reverse-b-splines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-b-splines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-b-splines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def reverse_bsplines(
        self,
        b_spline_list: Iterable[CollectionObjectName],
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse Plane Normals {/* #reverse-plane-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-plane-normals)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def reverse_plane_normals(
        self,
        plane_list: Iterable[CollectionObjectName],
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse Surface Normals {/* #reverse-surface-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-surface-normals)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def reverse_surface_normals(
        self,
        surface_list: Iterable[CollectionObjectName],
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Circle Properties {/* #set-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-circle-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-circle-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_circle_properties(
        self,
        circle_name: CollectionObjectName,
        center_coordinate: Vector,
        normal_direction: Vector,
        *,
        radius: float = 0.000000,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cylinder Properties {/* #set-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-cylinder-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Default Colorization Options {/* #set-default-colorization-options */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-default-colorization-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_default_colorization_options(
        self,
        *,
        colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geometry Relationship Fit Profile {/* #set-geometry-relationship-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-geometry-relationship-fit-profile)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_geometry_relationship_fit_profile(
        self,
        geometry_type: GeometryType,
        relationship_ref_list: Iterable[CollectionItemName],
        *,
        fit_profile_name: str = "",
        apply_cardinal_point_settings: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Measurement Auxiliary Data {/* #set-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-measurement-auxiliary-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_measurement_auxiliary_data(
        self,
        point_name: PointName,
        *,
        auxiliary_name: str = "",
        value: float = 0.000000,
        units: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object Reporting Frame {/* #set-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-object-reporting-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_object_reporting_frame(
        self,
        object_name: CollectionObjectName,
        reporting_frame: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Properties {/* #set-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-point-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_point_properties(
        self,
        point_name_list: Iterable[PointName],
        *,
        planar_offset: float = 0.000000,
        radial_offset: float = 0.000000,
        position_tolerance: ToleranceVectorOptions,
        component_weights: Vector,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Weights From Uncertainties {/* #set-point-weights-from-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-point-weights-from-uncertainties)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform for i-th Frame in Frame Set {/* #set-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-transform-for-i-th-frame-in-frame-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_transform_for_ith_frame_in_frame_set(
        self,
        frame_set: CollectionObjectName,
        *,
        frame_set_index: int = 0,
        transform_in_working: Transform,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Sphere Axis Check {/* #sphere-axis-check */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#sphere-axis-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#sphere-axis-check)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def sphere_axis_check(
        self,
        sphere_points_group_name: CollectionObjectName,
        *,
        sphere_target_radius: float = 0.000000,
        point_to_create_at_sphere_center: PointName,
        line_defining_the_axis: CollectionObjectName,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> SphereAxisCheckResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Temperature Compensate a group {/* #temperature-compensate-a-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#temperature-compensate-a-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def temperature_compensate_a_group(
        self,
        original_group: CollectionObjectName,
        scaling_origin: FrameName,
        *,
        material_cte: float = 0.000000,
        initial_temperature: float = 0.000000,
        final_temperature: float = 0.000000,
        scaled_group_name: CollectionObjectName,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `scaling_origin` | MP qualifier: coordinate frame. |
| `material_cte` | Coefficient per degree Fahrenheit. |
| `initial_temperature` | Temperature in degrees Fahrenheit. |
| `final_temperature` | Temperature in degrees Fahrenheit. |

## Transform Objects - Frame To Frame {/* #transform-objects---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects---frame-to-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def transform_objects_frame_to_frame(
        self,
        object_name_list: Iterable[CollectionObjectName],
        initial_frame_name: CollectionObjectName,
        destination_frame_name: CollectionObjectName,
        *,
        number_of_steps: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Objects by Delta (About Working Frame) {/* #transform-objects-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects-by-delta-about-working-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def transform_objects_by_delta_about_working_frame(
        self,
        objects_to_transform: Iterable[CollectionObjectName],
        delta_transform: Transform,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Objects by Delta (World Transform Operator) {/* #transform-objects-by-delta-world-transform-operator */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects-by-delta-world-transform-operator)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def transform_objects_by_delta_world_transform_operator(
        self,
        objects_to_transform: Iterable[CollectionObjectName],
        delta_transform: WorldTransform,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Translate Objects by Delta {/* #translate-objects-by-delta */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#translate-objects-by-delta)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def translate_objects_by_delta(
        self,
        objects_to_translate: Iterable[CollectionObjectName],
        delta_translation: Vector,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cone Properties {/* #set-cone-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Ellipse Properties {/* #set-ellipse-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Line Properties {/* #set-line-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2024.1.0508.5)
