---
title: Analysis Operations
description: Unreleased python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Analysis Operations

[SA 2026.1.0529.7](/api/python/analysis-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/analysis-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Angle Between Line and Plane {/* #angle-between-line-and-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-line-and-plane)

```python
async def angle_between_line_and_plane(
        self,
        selected_line: CollectionObjectName,
        selected_plane: CollectionObjectName,
        *,
        nominal_angle: float = 0.000000,
        angle_tolerance: float = 0.000000,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Angle Between Two Lines {/* #angle-between-two-lines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-two-lines)

```python
async def angle_between_two_lines(
        self,
        line_1: CollectionObjectName,
        line_2: CollectionObjectName,
        *,
        nominal_angle: float = 0.000000,
        angle_tolerance: float = 0.000000,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Angle Between Two Planes' normals {/* #angle-between-two-planes-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#angle-between-two-planes-normals)

```python
async def angle_between_two_planes_normals(
        self,
        plane_a: CollectionObjectName,
        plane_b: CollectionObjectName,
        *,
        nominal_angle: float = 0.000000,
        angle_tolerance: float = 0.000000,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angle_tolerance` | 0.0 disables this tolerance. |

## Best Fit Transformation - Group to Group {/* #best-fit-transformation---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#best-fit-transformation---group-to-group)

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
    ) -> BestFitTransformationGroupToGroupResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |
| `file_path_for_csv_text_report` | Requires Show Interface to be true. |

## Compute Group to Group Orientation (Rx,Ry,Rz) {/* #compute-group-to-group-orientation-rxryrz */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#compute-group-to-group-orientation-rxryrz)

```python
async def compute_group_to_group_orientation_rx_ry_rz(
        self,
        reference_group: CollectionObjectName,
        corresponding_group: CollectionObjectName,
    ) -> ComputeGroupToGroupOrientationRxRyRzResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Uncertainty Cloud Point Sets {/* #create-point-uncertainty-cloud-point-sets */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#create-point-uncertainty-cloud-point-sets)

```python
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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Uncertainty Fields {/* #create-point-uncertainty-fields */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#create-point-uncertainty-fields)

```python
async def create_point_uncertainty_fields(
        self,
        point_name_list: Iterable[PointName],
        *,
        number_of_samples: int = 1000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Fit Geometry to Point Group {/* #fit-geometry-to-point-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-point-group)

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
        starting_condition_geometry: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Fit Geometry to Point Group Projected to Plane {/* #fit-geometry-to-point-group-projected-to-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-point-group-projected-to-plane)

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
        starting_condition_geometry: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Fit Geometry to Points {/* #fit-geometry-to-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#fit-geometry-to-points)

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
        starting_condition_geometry: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fit_interface_tolerance` | -1.0 uses the profile tolerance. |
| `starting_condition_geometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Get B-Spline Properties {/* #get-b-spline-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-b-spline-properties)

```python
async def get_bspline_properties(
        self,
        b_spline_name: CollectionObjectName,
    ) -> GetBSplinePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Circle Properties {/* #get-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-circle-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-circle-properties)

```python
async def get_circle_properties(
        self,
        circle_name: CollectionObjectName,
    ) -> GetCirclePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cone Properties {/* #get-cone-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cone-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-cone-properties)

```python
async def get_cone_properties(
        self,
        cone_name: CollectionObjectName,
    ) -> GetConePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `cone_end_point` | Expressed in working coordinates. |
| `cone_axis` | Expressed in working coordinates. |

## Get Coordinate for i-th Point in Point Set {/* #get-coordinate-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-coordinate-for-i-th-point-in-point-set)

```python
async def get_coordinate_for_ith_point_in_point_set(
        self,
        point_set: CollectionObjectName,
        *,
        point_set_index: int = 0,
    ) -> GetCoordinateForIthPointInPointSetResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cylinder Properties {/* #get-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-cylinder-properties)

```python
async def get_cylinder_properties(
        self,
        cylinder_name: CollectionObjectName,
    ) -> GetCylinderPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Ellipse Properties {/* #get-ellipse-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-ellipse-properties)

```python
async def get_ellipse_properties(
        self,
        ellipse_name: CollectionObjectName,
    ) -> GetEllipsePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Euler Parameters for Frame {/* #get-euler-parameters-for-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-euler-parameters-for-frame)

```python
async def get_euler_parameters_for_frame(
        self,
        frame: CollectionObjectName,
    ) -> GetEulerParametersForFrameResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Euler Parameters for i-th Frame in Frame Set {/* #get-euler-parameters-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set)

```python
async def get_euler_parameters_for_ith_frame_in_frame_set(
        self,
        frame_set: CollectionObjectName,
        *,
        frame_set_index: int = 0,
    ) -> GetEulerParametersForIthFrameInFrameSetResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Collection Name {/* #get-i-th-collection-name */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-i-th-collection-name)

```python
async def get_ith_collection_name(
        self,
        *,
        collection_index: int = 0,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Point From Group {/* #get-i-th-point-from-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-i-th-point-from-group)

```python
async def get_ith_point_from_group(
        self,
        group_name: CollectionObjectName,
        *,
        point_index: int = 0,
    ) -> GetIthPointFromGroupResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Line Properties {/* #get-line-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-line-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-line-properties)

```python
async def get_line_properties(
        self,
        line_name: CollectionObjectName,
    ) -> GetLinePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Auxiliary Data {/* #get-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-auxiliary-data)

```python
async def get_measurement_auxiliary_data(
        self,
        point_name: PointName,
        *,
        auxiliary_name: str = "",
    ) -> GetMeasurementAuxiliaryDataResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Info Data {/* #get-measurement-info-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-info-data)

```python
async def get_measurement_info_data(
        self,
        point_name: PointName,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Weather Data {/* #get-measurement-weather-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-measurement-weather-data)

```python
async def get_measurement_weather_data(
        self,
        point_name: PointName,
    ) -> GetMeasurementWeatherDataResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in inches of mercury. |
| `humidity` | Relative humidity in percent. |

## Get Number of Collections {/* #get-number-of-collections */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-collections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-collections)

```python
async def get_number_of_collections(self) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Frames In Frame Set {/* #get-number-of-frames-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-frames-in-frame-set)

```python
async def get_number_of_frames_in_frame_set(
        self,
        frame_set_container: CollectionObjectName,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Points in Group {/* #get-number-of-points-in-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-points-in-group)

```python
async def get_number_of_points_in_group(
        self,
        group_name: CollectionObjectName,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Points In Point Set {/* #get-number-of-points-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-number-of-points-in-point-set)

```python
async def get_number_of_points_in_point_set(
        self,
        point_set_container: CollectionObjectName,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Object Reporting Frame {/* #get-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-object-reporting-frame)

```python
async def get_object_reporting_frame(
        self,
        object_name: CollectionObjectName,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Plane Properties {/* #get-plane-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-plane-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-plane-properties)

```python
async def get_plane_properties(
        self,
        plane_name: CollectionObjectName,
    ) -> GetPlanePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate {/* #get-point-coordinate */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate)

```python
async def get_point_coordinate(
        self,
        point_name: PointName,
    ) -> GetPointCoordinateResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate (Cylindrical) {/* #get-point-coordinate-cylindrical */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate-cylindrical)

```python
async def get_point_coordinate_cylindrical(
        self,
        point_name: PointName,
    ) -> GetPointCoordinateCylindricalResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate (Polar) {/* #get-point-coordinate-polar */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-coordinate-polar)

```python
async def get_point_coordinate_polar(
        self,
        point_name: PointName,
    ) -> GetPointCoordinatePolarResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Properties {/* #get-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-properties)

```python
async def get_point_properties(
        self,
        point_name: PointName,
    ) -> GetPointPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point To Line Distance {/* #get-point-to-line-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-to-line-distance)

```python
async def get_point_to_line_distance(
        self,
        point: PointName,
        line: CollectionObjectName,
    ) -> GetPointToLineDistanceResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point To Point Distance {/* #get-point-to-point-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-to-point-distance)

```python
async def get_point_to_point_distance(
        self,
        first_point: PointName,
        second_point: PointName,
    ) -> GetPointToPointDistanceResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Tolerance {/* #get-point-tolerance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-tolerance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-point-tolerance)

```python
async def get_point_tolerance(
        self,
        point_name: PointName,
    ) -> GetPointToleranceResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Slot Properties {/* #get-slot-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-slot-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-slot-properties)

```python
async def get_slot_properties(
        self,
        slot_name: CollectionObjectName,
    ) -> GetSlotPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `slot_transform` | Expressed in working coordinates. |
| `center` | Expressed in working coordinates. |
| `normal_direction` | Expressed in working coordinates. |
| `centerline_pt_1` | Expressed in working coordinates. |
| `centerline_pt_2` | Expressed in working coordinates. |

## Get Sphere Properties {/* #get-sphere-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-sphere-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-sphere-properties)

```python
async def get_sphere_properties(
        self,
        sphere_name: CollectionObjectName,
    ) -> GetSpherePropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Surface Physical Stats {/* #get-surface-physical-stats */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-surface-physical-stats)

```python
async def get_surface_physical_stats(
        self,
        surface_name: CollectionObjectName,
    ) -> GetSurfacePhysicalStatsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Timestamp for i-th Frame in Frame Set {/* #get-timestamp-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set)

```python
async def get_timestamp_for_ith_frame_in_frame_set(
        self,
        frame_set: CollectionObjectName,
        *,
        frame_set_index: int = 0,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Timestamp for i-th Point in Point Set {/* #get-timestamp-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-timestamp-for-i-th-point-in-point-set)

```python
async def get_timestamp_for_ith_point_in_point_set(
        self,
        point_set: CollectionObjectName,
        *,
        point_set_index: int = 0,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Torus Properties {/* #get-torus-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-torus-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-torus-properties)

```python
async def get_torus_properties(
        self,
        torus_name: CollectionObjectName,
    ) -> GetTorusPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform for i-th Frame in Frame Set {/* #get-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#get-transform-for-i-th-frame-in-frame-set)

```python
async def get_transform_for_ith_frame_in_frame_set(
        self,
        frame_set: CollectionObjectName,
        *,
        frame_set_index: int = 0,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Group To Surface Fit {/* #group-to-surface-fit */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#group-to-surface-fit)

```python
async def group_to_surface_fit(
        self,
        group_to_fit: CollectionObjectName,
        surface: CollectionObjectName,
        *,
        do_conventional_fit: bool = False,
        rms_tolerance: float = 0.000000,
        maximum_absolute_tolerance: float = 0.000000,
    ) -> GroupToSurfaceFitResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Import Geometry Fit Profiles {/* #import-geometry-fit-profiles */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#import-geometry-fit-profiles)

```python
async def import_geometry_fit_profiles(
        self,
        geometry_fit_profiles_file_path: FileReference,
        *,
        overwrite_profiles_with_same_name: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Is Object of Type {/* #is-object-of-type */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#is-object-of-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#is-object-of-type)

```python
async def is_object_of_type(
        self,
        object_name: CollectionObjectName,
        *,
        object_type: ObjectType = ObjectType.ANY,
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Circle Fit Profile {/* #make-circle-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-circle-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Make Cone Fit Profile {/* #make-cone-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-cone-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_angle_in_degrees` | -1.0 leaves this dimension unlocked. |

## Make Cylinder Fit Profile {/* #make-cylinder-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-cylinder-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Make Ellipse Fit Profile {/* #make-ellipse-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-ellipse-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Line Fit Profile {/* #make-line-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-line-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Paraboloid Fit Profile {/* #make-paraboloid-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-paraboloid-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_focal_length` | -1.0 leaves this dimension unlocked. |

## Make Plane Fit Profile {/* #make-plane-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-plane-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Slot Fit Profile {/* #make-slot-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-slot-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `override_planar_offset` | -1.0 uses the current offset. |

## Make Sphere Fit Profile {/* #make-sphere-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#make-sphere-fit-profile)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `override_radial_offset` | -1.0 uses the current offset. |
| `lock_radius` | -1.0 leaves this dimension unlocked. |

## Mushroom Target Hole Inspection {/* #mushroom-target-hole-inspection */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#mushroom-target-hole-inspection)

```python
async def mushroom_target_hole_inspection(
        self,
        *,
        name_prefix_for_intermediate_constructions: str = "",
        sphere_points_group_name: CollectionObjectName,
        sphere_target_radius: float = 0.000000,
        target_contact_plane: CollectionObjectName,
        point_to_create_at_hole: PointName,
    ) -> MushroomTargetHoleInspectionResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Patch Normal Shift - Hole / Pin {/* #patch-normal-shift---hole--pin */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#patch-normal-shift---hole--pin)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Patch Normal Shift - Point {/* #patch-normal-shift---point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#patch-normal-shift---point)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Clouds to Objects {/* #query-clouds-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-clouds-to-objects)

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
    ) -> QueryCloudsToObjectsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Clouds to Surface {/* #query-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-clouds-to-surface)

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
    ) -> QueryCloudsToSurfaceResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Frame to Frame {/* #query-frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-frame-to-frame)

```python
async def query_frame_to_frame(
        self,
        reference_frame_name: CollectionObjectName,
        corresponding_frame_name: CollectionObjectName,
    ) -> QueryFrameToFrameResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rx` | MP qualifier: Roll. |
| `ry` | MP qualifier: Pitch. |
| `rz` | MP qualifier: Yaw. |

## Query Groups to Objects {/* #query-groups-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-groups-to-objects)

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
    ) -> QueryGroupsToObjectsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `group_name_list` | MP qualifier: Groups to Project. |
| `object_name_list` | MP qualifier: Objects to Project to. |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Point to Objects {/* #query-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-point-to-objects)

```python
async def query_point_to_objects(
        self,
        point_name: PointName,
        objects: Iterable[CollectionObjectName],
        *,
        ignore_target_offset: bool = False,
    ) -> QueryPointToObjectsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Point to Point Along Curve {/* #query-point-to-point-along-curve */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-point-to-point-along-curve)

```python
async def query_point_to_point_along_curve(
        self,
        value_1st_point: PointName,
        value_2nd_point: PointName,
        curve: CollectionObjectName,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Points to Circle {/* #query-points-to-circle */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-circle) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-circle)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Points to Objects {/* #query-points-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-objects)

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
    ) -> QueryPointsToObjectsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `object_name_list` | MP qualifier: Objects to Project to. |
| `rms_tolerance` | 0.0 disables this tolerance. |
| `maximum_absolute_tolerance` | 0.0 disables this tolerance. |

## Query Points to Single Point {/* #query-points-to-single-point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#query-points-to-single-point)

```python
async def query_points_to_single_point(
        self,
        point_names: Iterable[PointName],
        single_point: PointName,
        *,
        show_vector_properties: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Re-Compute Calculated Items {/* #re-compute-calculated-items */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#re-compute-calculated-items)

```python
async def re_compute_calculated_items(
        self,
        *,
        targets_from_shots: bool = False,
        hidden_points: bool = False,
        relationships: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename points based on inter-point distance to reference points {/* #rename-points-based-on-inter-point-distance-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename points based on proximity to reference points {/* #rename-points-based-on-proximity-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#rename-points-based-on-proximity-to-reference-points)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse B-Splines {/* #reverse-b-splines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-b-splines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-b-splines)

```python
async def reverse_bsplines(
        self,
        b_spline_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse Plane Normals {/* #reverse-plane-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-plane-normals)

```python
async def reverse_plane_normals(
        self,
        plane_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse Surface Normals {/* #reverse-surface-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#reverse-surface-normals)

```python
async def reverse_surface_normals(
        self,
        surface_list: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Circle Properties {/* #set-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-circle-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-circle-properties)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cylinder Properties {/* #set-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-cylinder-properties)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Default Colorization Options {/* #set-default-colorization-options */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-default-colorization-options)

```python
async def set_default_colorization_options(
        self,
        *,
        colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geometry Relationship Fit Profile {/* #set-geometry-relationship-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-geometry-relationship-fit-profile)

```python
async def set_geometry_relationship_fit_profile(
        self,
        geometry_type: GeometryType,
        relationship_ref_list: Iterable[CollectionItemName],
        *,
        fit_profile_name: str = "",
        apply_cardinal_point_settings: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Measurement Auxiliary Data {/* #set-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-measurement-auxiliary-data)

```python
async def set_measurement_auxiliary_data(
        self,
        point_name: PointName,
        *,
        auxiliary_name: str = "",
        value: float = 0.000000,
        units: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object Reporting Frame {/* #set-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-object-reporting-frame)

```python
async def set_object_reporting_frame(
        self,
        object_name: CollectionObjectName,
        reporting_frame: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Properties {/* #set-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-point-properties)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Weights From Uncertainties {/* #set-point-weights-from-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-point-weights-from-uncertainties)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform for i-th Frame in Frame Set {/* #set-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#set-transform-for-i-th-frame-in-frame-set)

```python
async def set_transform_for_ith_frame_in_frame_set(
        self,
        frame_set: CollectionObjectName,
        *,
        frame_set_index: int = 0,
        transform_in_working: Transform,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Sphere Axis Check {/* #sphere-axis-check */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#sphere-axis-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#sphere-axis-check)

```python
async def sphere_axis_check(
        self,
        sphere_points_group_name: CollectionObjectName,
        *,
        sphere_target_radius: float = 0.000000,
        point_to_create_at_sphere_center: PointName,
        line_defining_the_axis: CollectionObjectName,
    ) -> SphereAxisCheckResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Temperature Compensate a group {/* #temperature-compensate-a-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#temperature-compensate-a-group)

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
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `scaling_origin` | MP qualifier: coordinate frame. |
| `material_cte` | Coefficient per degree Fahrenheit. |
| `initial_temperature` | Temperature in degrees Fahrenheit. |
| `final_temperature` | Temperature in degrees Fahrenheit. |

## Transform Objects - Frame To Frame {/* #transform-objects---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects---frame-to-frame)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Objects by Delta (About Working Frame) {/* #transform-objects-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects-by-delta-about-working-frame)

```python
async def transform_objects_by_delta_about_working_frame(
        self,
        objects_to_transform: Iterable[CollectionObjectName],
        delta_transform: Transform,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Objects by Delta (World Transform Operator) {/* #transform-objects-by-delta-world-transform-operator */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#transform-objects-by-delta-world-transform-operator)

```python
async def transform_objects_by_delta_world_transform_operator(
        self,
        objects_to_transform: Iterable[CollectionObjectName],
        delta_transform: WorldTransform,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Translate Objects by Delta {/* #translate-objects-by-delta */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/analysis-operations#translate-objects-by-delta)

```python
async def translate_objects_by_delta(
        self,
        objects_to_translate: Iterable[CollectionObjectName],
        delta_translation: Vector,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cone Properties {/* #set-cone-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Ellipse Properties {/* #set-ellipse-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Line Properties {/* #set-line-properties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/62742ed39d1ce8508664c585c906948122e7517d/targets/2024.1.0508.5)
