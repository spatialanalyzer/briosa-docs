---
title: MP Value Types
description: Released client 0.2.0 MP value types and choices for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# MP Value Types

[SA 2026.1.0529.7](/api/python/value-types) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/value-types)

These declarations describe the handwritten client **0.2.0** for **SA 2026.1.0529.7**. Generated transport types remain private. Operation pages define required inputs and omission behavior. Numeric protobuf values and public language values are separate representations; do not substitute values from another target.

## `ActiveUnits`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ActiveUnits:
    length: str
    angular: str
    temperature: str
```

## `AngularUnits`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class AngularUnits(str, Enum):
    DEGREES = "degrees"
    DEGREES_MINUTES_SECONDS = "degrees_minutes_seconds"
    RADIANS = "radians"
    MILLIRADIANS = "milliradians"
    GONS_GRAD = "gons_grad"
    MILS = "mils"
    ARCSECONDS = "arcseconds"
    DEGREES_MINUTES = "degrees_minutes"
    DEFAULT = DEGREES
```

## `AsciiFileFormat`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class AsciiFileFormat(str, Enum):
    X_Y_Z = "x_y_z"
    X_Y_Z_OFFSET_OFFSET2 = "x_y_z_offset_offset2"
    X_Y_Z_NOTES = "x_y_z_notes"
    RADIUS_THETA_PHI = "radius_theta_phi"
    RADIUS_THETA_Z = "radius_theta_z"
    POINT_NAME_X_Y_Z = "point_name_x_y_z"
    POINT_NAME_X_Y_Z_NOTES = "point_name_x_y_z_notes"
    POINT_NAME_X_Y_Z_OFFSET_OFFSET2 = "point_name_x_y_z_offset_offset2"
    POINT_NAME_X_Y_Z_UX_UY_UZ = "point_name_x_y_z_ux_uy_uz"
    POINT_NAME_X_Y_Z_TX_TY_TZ_TD = "point_name_x_y_z_tx_ty_tz_td"
    POINT_NAME_X_Y_Z_WX_WY_WZ_WMAG = "point_name_x_y_z_wx_wy_wz_wmag"
    POINT_NAME_X_Y_Z_HIGH_LOW_TOLERANCE = "point_name_x_y_z_high_low_tolerance"
    POINT_NAME_X_Y_Z_TX_TY_TZ_TD_WX_WY_WZ = "point_name_x_y_z_tx_ty_tz_td_wx_wy_wz"
    POINT_NAME_X_Y_Z_WX_WY_WZ_TX_TY_TZ_TD = "point_name_x_y_z_wx_wy_wz_tx_ty_tz_td"
    POINT_NAME_X_Y_Z_HIGH_LOW_TOLERANCE_WX_WY_WZ = (
        "point_name_x_y_z_high_low_tolerance_wx_wy_wz"
    )
    POINT_NAME_X_Y_Z_WX_WY_WZ_HIGH_LOW_TOLERANCE = (
        "point_name_x_y_z_wx_wy_wz_high_low_tolerance"
    )
    POINT_NAME_RADIUS_THETA_PHI = "point_name_radius_theta_phi"
    POINT_NAME_RADIUS_THETA_Z = "point_name_radius_theta_z"
    POINT_NAME_X_Y_Z_GROUP_NAME = "point_name_x_y_z_group_name"
    POINT_NAME_Y_X_Z_GROUP_NAME = "point_name_y_x_z_group_name"
    GROUP_NAME_POINT_NAME_X_Y_Z = "group_name_point_name_x_y_z"
    GROUP_NAME_POINT_NAME_X_Y_Z_OFFSET_OFFSET2 = (
        "group_name_point_name_x_y_z_offset_offset2"
    )
    GROUP_NAME_POINT_NAME_X_Y_Z_NOTES = "group_name_point_name_x_y_z_notes"
    GROUP_NAME_POINT_NAME_X_Y_Z_UX_UY_UZ = "group_name_point_name_x_y_z_ux_uy_uz"
    GROUP_NAME_POINT_NAME_RADIUS_THETA_PHI = "group_name_point_name_radius_theta_phi"
    GROUP_NAME_POINT_NAME_RADIUS_THETA_Z = "group_name_point_name_radius_theta_z"
    COLLECTION_GROUP_POINT_X_Y_Z = "collection_group_point_x_y_z"
    COLLECTION_GROUP_POINT_X_Y_Z_NOTES = "collection_group_point_x_y_z_notes"
    COLLECTION_GROUP_POINT_RADIUS_THETA_PHI = "collection_group_point_radius_theta_phi"
    COLLECTION_GROUP_POINT_RADIUS_THETA_Z = "collection_group_point_radius_theta_z"
    X_Y_Z_I_J_K = "x_y_z_i_j_k"
    VECTOR_NAME_X_Y_Z_I_J_K = "vector_name_x_y_z_i_j_k"
    VECTOR_NAME_X_Y_Z_DX_DY_DZ_SIGNED_MAGNITUDE = (
        "vector_name_x_y_z_dx_dy_dz_signed_magnitude"
    )
    VECTOR_GROUP_NAME_VECTOR_NAME_X_Y_Z_I_J_K = (
        "vector_group_name_vector_name_x_y_z_i_j_k"
    )
    VECTOR_GROUP_NAME_VECTOR_NAME_X_Y_Z_DX_DY_DZ_SIGNED_MAGNITUDE = (
        "vector_group_name_vector_name_x_y_z_dx_dy_dz_signed_magnitude"
    )
    FRAME_NAME_X_Y_Z_RX_RY_RZ_TIMESTAMP = "frame_name_x_y_z_rx_ry_rz_timestamp"
    FRAME_NAME_X_Y_Z_EULER_X_Y_Z_TIMESTAMP = "frame_name_x_y_z_euler_x_y_z_timestamp"
    FRAME_NAME_X_Y_Z_EULER_Z_Y_X_TIMESTAMP = "frame_name_x_y_z_euler_z_y_x_timestamp"
    FRAME_NAME_X_Y_Z_EULER_Z_Y_Z_TIMESTAMP = "frame_name_x_y_z_euler_z_y_z_timestamp"
    FRAME_NAME_X_Y_Z_EULER_Z_X_Z_TIMESTAMP = "frame_name_x_y_z_euler_z_x_z_timestamp"
    FRAME_NAME_TRANSFORMATION_MATRIX_TIMESTAMP = (
        "frame_name_transformation_matrix_timestamp"
    )
    TRANSFORMATION_MATRIX_TIMESTAMP = "transformation_matrix_timestamp"
    FRAME_NAME_X_Y_Z_QUATERNION_TIMESTAMP = "frame_name_x_y_z_quaternion_timestamp"
    PLANE_NAME_X_Y_Z_DX_DY_DZ_PLANE_SIZE = "plane_name_x_y_z_dx_dy_dz_plane_size"
```

## `AskForStringPullDownVersionResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class AskForStringPullDownVersionResult:
    answer: str
    answer_index: int
```

## `AxisIdentifier`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class AxisIdentifier(Enum):
    POSITIVE_X = "+X"
    NEGATIVE_X = "-X"
    POSITIVE_Y = "+Y"
    NEGATIVE_Y = "-Y"
    POSITIVE_Z = "+Z"
    NEGATIVE_Z = "-Z"
```

## `BSplineFitOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True)
class BSplineFitOptions:
    open_curve: bool = True
    use_interpolation_for_fit: bool = True
    number_of_control_points: int = 8
    degree_of_curve: int = 3
    sort_method: BSplinePointSortMode = BSplinePointSortMode.USE_SELECTION_ORDER
    span_any_gap: bool = True
    termination_gap_length: float = 0.0
    ignore_proximate_points: bool = False
    proximate_point_threshold: float = 0.0
    use_global_tessellation_options: bool = True
    maximum_chordal_deviation: float = 0.05
    maximum_trim_edge_angle: float = 15.0
    termination_average_multiplier: float = 10.0
    extension: float = 0.0
```

## `BSplinePointSortMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class BSplinePointSortMode(str, Enum):
    USE_SELECTION_ORDER = "use_selection_order"
    CLOSEST_NEIGHBORS_FROM_FIRST_SELECTION = "closest_neighbors_from_first_selection"
    CLOSEST_NEIGHBORS_IN_CURVE_DIRECTION = "closest_neighbors_in_curve_direction"
```

## `BaseColorType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class BaseColorType(str, Enum):
    RED = "red"
    GREEN = "green"
    BLUE = "blue"
```

## `BaseMidColorType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class BaseMidColorType(str, Enum):
    RED = "red"
    GREEN = "green"
    GRAY = "gray"
    BLUE = "blue"
```

## `BestFitTransformationGroupToGroupResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `CalibrationApplianceNodeStatus`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CalibrationApplianceNodeStatus:
    instrument_connected: bool
    calibration_appliance_connected: bool
```

## `CalloutPosition`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True)
class CalloutPosition:
    x_position: int
    y_position: int
    x_anchor_position: int
    y_anchor_position: int
    callout_width: int
    callout_height: int
```

## `CalloutViewProperties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True)
class CalloutViewProperties:
    lock_view_point: bool = False
    recall_working_frame: bool = False
    recall_visible_layer: bool = False
    callout_leader_thickness: int = 2
    callout_leader_color: Color = Color(128, 128, 128)
    callout_border_thickness: int = 2
    callout_border_color: Color = Color(0, 0, 255)
    divide_text_with_lines: bool = False
    font: Font = Font()
```

## `ChartName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ChartName:
    name: str
```

## `ChartType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ChartType(str, Enum):
    RUN_CHART = "run_chart"
    INDIVIDUAL_X_MOVING_RANGE = "individual_x_moving_range"
    BULLSEYE_CHART = "bullseye_chart"
```

## `CircleLineMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class CircleLineMode(str, Enum):
    CIRCLE = "circle"
    LINE = "line"
```

## `CloudBoxType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class CloudBoxType(str, Enum):
    WORLD_AXIS_ALIGNED_BOX = "worldAxisAlignedBox"
    WORK_AXIS_ALIGNED_BOX = "workAxisAlignedBox"
    MINIMUM_ORIENTED_BOX_UNCONDITIONAL = "minimumOrientedBoxUnconditional"
    MINIMUM_ORIENTED_BOX_VERIFY_VOLUME = "minimumOrientedBoxVerifyVolume"
```

## `CloudThinningMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class CloudThinningMode(str, Enum):
    NONE = "None"
    RANDOM = "Random"
    NTH_POINT = "Nth Point"
```

## `CloudThinningOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True)
class CloudThinningOptions:
    mode: CloudThinningMode = CloudThinningMode.NTH_POINT
    point_increment: int = 5
    minimum_number_of_points: int = 100
    maximum_number_of_points: int = 20000
```

## `CloudToCadAlignmentResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CloudToCadAlignmentResult:
    rms_deviation: float
    average_deviation: float
    maximum_absolute_deviation: float
    resultant_transform_in_working: Transform
```

## `CollectionGroupName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CollectionGroupName:
    collection_name: str
    group_name: str
```

## `CollectionInstrumentId`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CollectionInstrumentId:
    collection_name: str
    instrument_id: int
```

## `CollectionItemName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CollectionItemName:
    collection_name: str
    item_name: str
    item_type: ItemType | None = None
```

## `CollectionMachineId`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CollectionMachineId:
    collection_name: str
    machine_id: int
```

## `CollectionName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CollectionName:
    name: str
```

## `CollectionObjectName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CollectionObjectName:
    collection_name: str
    object_name: str
    object_type: ObjectType
```

## `CollectionVectorGroupName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CollectionVectorGroupName:
    collection_name: str
    vector_group_name: str
```

## `CollimationBaselineMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class CollimationBaselineMethod(str, Enum):
    DETERMINED_BY_VALUE = "Determined By Value"
    DETERMINED_FROM_SCALE = "Determined From Scale"
    DETERMINED_FROM_KNOWN_POINT = "Determined From Known Point"
```

## `CollimationTiltMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class CollimationTiltMode(str, Enum):
    FULL_COLLIMATION = "Full Collimation"
    NO_TILT_COLLIMATION = "No-Tilt Collimation"
```

## `Color`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True)
class Color:
    red: int
    green: int
    blue: int
```

## `ColorRangeMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ColorRangeMethod(str, Enum):
    SINGLE_COLOR = "single_color"
    CONTINUOUS = "continuous"
    TOLERANCED_CONTINUOUS = "toleranced_continuous"
    TOLERANCED_GO_NO_GO = "toleranced_go_no_go"
    TOLERANCED_GO_NO_GO_WITH_WARNING = "toleranced_go_no_go_with_warning"
    DISCRETE_COLORS = "discrete_colors"
```

## `ColorizationOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ColorizationOptions:
    color_range_method: ColorRangeMethod = ColorRangeMethod.CONTINUOUS
    base_high_color: BaseColorType = BaseColorType.BLUE
    base_mid_color: BaseMidColorType = BaseMidColorType.GREEN
    base_low_color: BaseColorType = BaseColorType.RED
    draw_tubes: bool = False
    draw_arrowheads: bool = True
    indicate_values: bool = False
    vector_magnification: float = 100.0
    vector_width: int = 1
    draw_blotches: bool = False
    blotch_size: float = 0.1
    show_out_of_tolerance_only: bool = False
    show_color_bar_in_view: bool = False
    show_color_bar_percentages: bool = True
    show_color_bar_fractions: bool = False
    high_saturation_limit: float = 0.5
    low_saturation_limit: float = -0.5
    high_tolerance: float = 0.03
    low_tolerance: float = -0.03
    DEFAULT: ClassVar[ColorizationOptions]
```

## `CompTechnique`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class CompTechnique(str, Enum):
    STANDARD = "standard"
    MAX_INSCRIBED = "max_inscribed"
    MIN_CIRCUMSCRIBED = "min_circumscribed"
    DEFAULT = STANDARD
```

## `ComputeGroupToGroupOrientationRxRyRzResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ComputeGroupToGroupOrientationRxRyRzResult:
    rx: float
    ry: float
    rz: float
```

## `ConstructObjectType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class ConstructObjectType(str, Enum):
    ANY = "any"
    CIRCLES = "circles"
    CONES = "cones"
    CYLINDERS = "cylinders"
    LINES = "lines"
    PLANES = "planes"
    SLOTS = "slots"
    SPHERES = "spheres"
    CENTER_POINTS = "center_points"
    SURFACE_POINTS = "surface_points"
    VERTEX_POINTS = "vertex_points"
```

## `ConstructVectorGroupGroupToGroupCompareResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ConstructVectorGroupGroupToGroupCompareResult:
    vector_count: int
    rms_deviation: float
    max_absolute_deviation: float
    average_deviation: float
```

## `CoordinateSystemType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class CoordinateSystemType(str, Enum):
    CARTESIAN = "cartesian"
    CYLINDRIC = "cylindric"
    POLAR = "polar"
    DEFAULT = CARTESIAN
```

## `CreatePointUncertaintyCloudPointSetsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CreatePointUncertaintyCloudPointSetsResult:
    point_groups: list[CollectionObjectName]
    point_sets: list[CollectionObjectName]
    point_clouds: list[CollectionObjectName]
```

## `CurrentTrappingStatus`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CurrentTrappingStatus:
    active: bool
    focused_item: CollectionItemName | None
    instrument: CollectionInstrumentId | None
```

## `DatasetType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class DatasetType(str, Enum):
    X = "x"
    Y = "y"
    Z = "z"
    MAGNITUDE = "magnitude"
```

## `DegreeOfFreedom`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class DegreeOfFreedom(str, Enum):
    ANY = "any"
    LOCK_FOCUS_LOCATION = "lock_focus_location"
    LOCK_VERTEX_LOCATION = "lock_vertex_location"
    DEFAULT = ANY
```

## `DeleteCollectionsByWildcardResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class DeleteCollectionsByWildcardResult:
    num_deleted: int
    num_failed: int
```

## `DeleteFoldersByWildcardResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class DeleteFoldersByWildcardResult:
    num_deleted: int
    num_failed: int
```

## `DirectCadAccessResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class DirectCadAccessResult:
    import_warnings: bool
    import_warning_messages: str
    extents_min: Vector
    extents_max: Vector
```

## `DistanceUnits`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class DistanceUnits(str, Enum):
    METERS = "meters"
    CENTIMETERS = "centimeters"
    MILLIMETERS = "millimeters"
    FEET = "feet"
    INCHES = "inches"
    US_SURVEY_FEET = "us_survey_feet"
```

## `DoubleVector6`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class DoubleVector6:
    values: list[float]
```

## `DriftCheckResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class DriftCheckResult:
    maximum_error: float
    rms_error: float
    instrument_added: bool
    new_instrument: CollectionInstrumentId | None
```

## `DynamicCircleMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class DynamicCircleMode(str, Enum):
    CYLINDER_AND_PLANE_HOLD_PLANE_NORMAL = (
        "Cylinder and Plane Intersection - Hold Plane Normal"
    )
    CYLINDER_AND_PLANE_HOLD_CYLINDER_AXIS = (
        "Cylinder and Plane Intersection - Hold Cylinder Axis"
    )
    CONE_AND_PLANE_HOLD_PLANE_NORMAL = "Cone and Plane Intersection - Hold Plane Normal"
    CONE_AND_PLANE_HOLD_CONE_AXIS = "Cone and Plane Intersection - Hold Cone Axis"
    SPHERE_AND_PLANE_INTERSECTION = "Sphere and Plane Intersection"
    TWO_CONES_INTERSECTION = "Two Cones Intersection"
    CONE_AND_CYLINDER_INTERSECTION = "Cone and Cylinder Intersection"
```

## `DynamicEllipseMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class DynamicEllipseMode(str, Enum):
    CYLINDER_AND_PLANE_INTERSECTION = "Cylinder and Plane Intersection"
    CONE_AND_PLANE_INTERSECTION = "Cone and Plane Intersection"
```

## `DynamicLineMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class DynamicLineMode(str, Enum):
    CONE_AXIS = "Cone Axis"
    CYLINDER_AXIS = "Cylinder Axis"
    INTERSECTION_OF_TWO_PLANES = "Intersection of Two Planes"
    BISECT_TWO_LINES = "Bisect Two Lines"
    SLOT_CENTERLINE_ALONG_LENGTH = "Slot Centerline Along Length"
```

## `DynamicPlaneMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class DynamicPlaneMode(str, Enum):
    BISECT_TWO_PLANES = "Bisect Two Planes"
    TWO_CONES_HOLD_NORMAL_TO_BEST_FIT_PLANE = (
        "Two Cones Intersection - Hold Normal to Best-Fit Plane"
    )
    TWO_CONES_HOLD_NORMAL_TO_FIRST_CONE_AXIS = (
        "Two Cones Intersection - Hold Normal to First Cone Axis"
    )
    TWO_CONES_HOLD_NORMAL_TO_SECOND_CONE_AXIS = (
        "Two Cones Intersection - Hold Normal to Second Cone Axis"
    )
    CONE_AND_CYLINDER_HOLD_NORMAL_TO_BEST_FIT_PLANE = (
        "Cone and Cylinder Intersection - Hold Normal to Best-Fit Plane"
    )
    CONE_AND_CYLINDER_HOLD_NORMAL_TO_CONE_AXIS = (
        "Cone and Cylinder Intersection - Hold Normal to Cone Axis"
    )
    CONE_AND_CYLINDER_HOLD_NORMAL_TO_CYLINDER_AXIS = (
        "Cone and Cylinder Intersection - Hold Normal to Cylinder Axis"
    )
    OFFSET_PLANE_FROM_PLANE = "Offset Plane From Plane"
```

## `DynamicPointMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class DynamicPointMode(str, Enum):
    INTERSECTION_LINE_AND_PLANE = "Intersection of Line and Plane"
    INTERSECTION_CYLINDER_AND_PLANE = "Intersection of Cylinder and Plane"
    INTERSECTION_CONE_AND_PLANE = "Intersection of Cone and Plane"
    INTERSECTION_THREE_PLANES = "Intersection of Three Planes"
    MID_POINT_PERPENDICULAR_TO_TWO_LINES = "Mid-Point of Perpendicular to Two Lines"
```

## `EdgePointMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class EdgePointMode(str, Enum):
    INCLUDE_EDGES = "Include Edges"
    EXCLUDE_EDGES = "Exclude Edges"
    EDGES_ONLY = "Edges Only"
```

## `EmbeddedReportFile`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class EmbeddedReportFile:
    collection_name: str
    file_name: str
```

## `EulerXyzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class EulerXyzTransformComponents:
    x: float
    y: float
    z: float
    rx: float
    ry: float
    rz: float
```

## `EulerZxzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class EulerZxzTransformComponents:
    x: float
    y: float
    z: float
    first_rz: float
    rx: float
    second_rz: float
```

## `EulerZyxTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class EulerZyxTransformComponents:
    x: float
    y: float
    z: float
    rz: float
    ry: float
    rx: float
```

## `EulerZyzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class EulerZyzTransformComponents:
    x: float
    y: float
    z: float
    first_rz: float
    ry: float
    second_rz: float
```

## `EvaluateFeatureCheckResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class EvaluateFeatureCheckResult:
    check_evaluated: bool
    check_result: str
    non_unique_result: bool
    measured_deviation_upper: float
    distance_out_of_tolerance_upper: float
    eval_delta_transform_upper: WorldTransform
    measured_deviation_lower: float
    distance_out_of_tolerance_lower: float
    eval_delta_transform_lower: WorldTransform
    check_type: str
    tolerance_type: str
    tolerance_simple: float
    tolerance_composite_upper: float
    tolerance_composite_lower: float
    tolerance_range_min: float
    tolerance_range_max: float
    tolerance_nominal_plus_minus_nominal: float
    tolerance_nominal_plus_minus_minus: float
    tolerance_nominal_plus_minus_plus: float
```

## `EvaluateFeatureChecksResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class EvaluateFeatureChecksResult:
    total_passed: int
    total_failed: int
    total_incomplete: int
```

## `ExportDataDelimeterType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ExportDataDelimeterType(str, Enum):
    SPACE = "space"
    COMMA = "comma"
    TAB = "tab"
```

## `ExportTargetNameFormat`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ExportTargetNameFormat(str, Enum):
    COLLECTION_GROUP_TARGET = "collection_group_target"
    GROUP_TARGET = "group_target"
    TARGET = "target"
    NONE = "none"
```

## `ExportVectorNameFormat`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ExportVectorNameFormat(str, Enum):
    COLLECTION_GROUP_VECTOR = "collection_group_vector"
    GROUP_VECTOR = "group_vector"
    VECTOR = "vector"
    NONE = "none"
```

## `FeatureCheckCylinderEvalOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FeatureCheckCylinderEvalOptions:
    enable_actual_diameter_override: bool
    actual_diameter_override: float
```

## `FeatureCheckDatumReference`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FeatureCheckDatumReference:
    reference_string: str
    cad_faces: str
    sa_objects: list[CollectionObjectName]
    auxiliary_sa_objects: list[CollectionObjectName]
    geometry_relationships: list[CollectionItemName]
    auxiliary_geometry_relationships: list[CollectionItemName]
```

## `FeatureCheckDatumReferencesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FeatureCheckDatumReferencesResult:
    datum_1: FeatureCheckDatumReference
    datum_2: FeatureCheckDatumReference
    datum_3: FeatureCheckDatumReference
```

## `FeatureCheckReportingOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FeatureCheckReportingOptions:
    show_feature_control_frame_summary: bool
    include_title: bool
    show_datum_and_tolerance_summary: bool
    show_feature_summary: bool
    only_create_failed_vectors: bool
    show_point_details: bool
    show_lower_tier_tables: bool
```

## `FileReference`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FileReference:
    path: str
    embedded_file: bool = False
```

## `FilterProximitySettings`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FilterProximitySettings:
    surface_inclusion_proximity: float = 0.1
    edge_exclusion_proximity: float = 0.1
    planar_inclusion_proximity: float = 0.5
    planar_exclusion_proximity: float = 0.1
    radial_inclusion_proximity: float = 0.1
    geometry_extraction_tolerance: float = 0.01
    surface_proximity_mode: OffsetDirectionType = OffsetDirectionType.BOTH
    planar_proximity_mode: OffsetDirectionType = OffsetDirectionType.BOTH
    radial_proximity_mode: OffsetDirectionType = OffsetDirectionType.BOTH
    project_to_plane: bool = True
    assert_plane_boundaries: bool = False
```

## `FitConstraintScalarOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FitConstraintScalarOptions:
    high: ScalarToleranceLimit = field(default_factory=ScalarToleranceLimit)
    low: ScalarToleranceLimit = field(default_factory=ScalarToleranceLimit)
    DEFAULT: ClassVar[FitConstraintScalarOptions]
```

## `FitDofOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FitDofOptions:
    allow_x: bool = True
    allow_y: bool = True
    allow_z: bool = True
    allow_rx: bool = True
    allow_ry: bool = True
    allow_rz: bool = True
    rotate_about_centroid: bool = True
```

## `FitErrorResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FitErrorResult:
    rms_error: float
    maximum_error: float
```

## `FitMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class FitMethod(str, Enum):
    MINIMUM_RMS = "minimum_rms"
    BEST_AXIS = "best_axis"
    DEFAULT = MINIMUM_RMS
```

## `FixedXyzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class FixedXyzTransformComponents:
    x: float
    y: float
    z: float
    rx: float
    ry: float
    rz: float
```

## `FixedXyzTransformVectors`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class FixedXyzTransformVectors:
    position_in_working: Vector
    orientation_in_working: Vector
```

## `Font`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class Font:
    font_name: str = "MS Shell Dlg"
    size: int = 8
    color: Color = field(default_factory=lambda: Color(red=0, green=0, blue=0))
    DEFAULT: ClassVar[Font]
```

## `FrameAxis`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class FrameAxis(Enum):
    X = "X"
    Y = "Y"
    Z = "Z"
```

## `FrameConstructionMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class FrameConstructionMethod(Enum):
    ORIGIN_X_XY = "Origin,X,XY"
    ORIGIN_X_XZ = "Origin,X,XZ"
    ORIGIN_Y_YX = "Origin,Y,YX"
    ORIGIN_Y_YZ = "Origin,Y,YZ"
    ORIGIN_Z_ZX = "Origin,Z,ZX"
    ORIGIN_X_ZY = "Origin,X,ZY"
```

## `FrameName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class FrameName:
    name: str
```

## `GdtDistanceBetweenMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class GdtDistanceBetweenMode(Enum):
    CENTROID = "Centroid"
    MIN_MAX = "Min/Max"
```

## `GdtEvaluationMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class GdtEvaluationMethod(Enum):
    NONE = "None"
    ASME_1994 = "ASME 1994"
    ASME_2009 = "ASME 2009"
    ASME_2018 = "ASME 2018"
    ISO_1983 = "ISO 1983"
    ISO_2004 = "ISO 2004"
    ISO_2017 = "ISO 2017"
```

## `GdtExtendedEvaluationMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class GdtExtendedEvaluationMethod(Enum):
    LEAST_SQUARES = "Least Squares"
    HIGH_POINT = "High Point"
    MINIMUM_SEPARATION = "Minimum Separation"
    LEAST_SQUARES_HIGH_POINT = "Least Squares High Point"
    LEAST_SQUARES_3D = "Least Squares 3D"
    LEAST_SQUARES_HIGH_POINT_1_STD_DEV = "Least Squares High Point 1 STD DEV"
    LEAST_SQUARES_HIGH_POINT_2_STD_DEV = "Least Squares High Point 2 STD DEV"
    LEAST_SQUARES_HIGH_POINT_HALFWAY = "Least Squares High Point Halfway"
    MINIMUM_SEPARATION_HIGH_POINT = "Minimum Separation High Point"
    EQUALIZED_HIGH_POINT = "Equalized High Point"
    EQUALIZED_LSQ_HIGH_POINT = "Equalized LSQ High Point"
```

## `GdtFeatureType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class GdtFeatureType(Enum):
    DIAMETER = "diameter"
    RADIUS = "radius"
    DISTANCE_BETWEEN = "distance_between"
    WIDTH = "width"
    LENGTH = "length"
    ANGLE_BETWEEN = "angle_between"
    ANGULARITY = "angularity"
    PERPENDICULARITY = "perpendicularity"
    PARALLELISM = "parallelism"
    CIRCULARITY = "circularity"
    CONCENTRICITY = "concentricity"
    CYLINDRICITY = "cylindricity"
    STRAIGHTNESS = "straightness"
    SURFACE_PROFILE = "surface_profile"
    LINE_PROFILE = "line_profile"
    COMPOSITE_SURFACE_PROFILE = "composite_surface_profile"
    FLATNESS = "flatness"
    TRUE_POSITION = "true_position"
    COMPOSITE_TRUE_POSITION = "composite_true_position"
    CIRCULAR_RUNOUT = "circular_runout"
    TOTAL_RUNOUT = "total_runout"
```

## `GdtMeasurements`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GdtMeasurements:
    point_names: list[PointName]
    cloud_names: list[CollectionObjectName]
```

## `GdtOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GdtOptions:
    use_high_points: bool
    extrapolate_axial_extent: bool
    exclude_from_auto_evaluation: bool
    distance_between_mode: GdtDistanceBetweenMode | None
    evaluation_method: GdtEvaluationMethod | None
    create_actual_features: bool
    create_solved_points: bool
    cross_section_criteria: float
    enable_auto_feature_detection: bool
```

## `GdtToleranceZoneType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class GdtToleranceZoneType(Enum):
    NONE = "none"
    CYLINDRICAL = "cylindrical"
    PLANAR = "planar"
    SPHERICAL = "spherical"
    RADIAL_ARC = "radial_arc"
    RADIAL_PLANAR = "radial_planar"
    BOUNDARY = "boundary"
    PLANAR_MEDIAN = "planar_median"
    SURFACE = "surface"
```

## `GeneralRelationshipStatistics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GeneralRelationshipStatistics:
    absolute_max_deviation: float
    rms: float
    has_signed_deviation: bool
    signed_max_deviation: float
    signed_min_deviation: float
```

## `GeometryRelationshipOutlierFilterMetrics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GeometryRelationshipOutlierFilterMetrics:
    first_pass_rms_error: float
    first_pass_maximum_error: float
    first_pass_minimum_error: float
    first_pass_average_error: float
    final_pass_rms_error: float
    final_pass_maximum_error: float
    final_pass_minimum_error: float
    final_pass_average_error: float
    total_input_point_count: int
    exclude_point_count: int
```

## `GeometryRelationshipPointEditMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class GeometryRelationshipPointEditMode(str, Enum):
    POINT_LIST = "Point List"
    POINT_GRAPH = "Point Graph"
    SUB_SAMPLER_SETTINGS = "Sub-Sampler Settings"
```

## `GeometryType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class GeometryType(str, Enum):
    LINE = "line"
    PLANE = "plane"
    CIRCLE = "circle"
    SPHERE = "sphere"
    CYLINDER = "cylinder"
    CONE = "cone"
    PARABOLOID = "paraboloid"
    ELLIPSE = "ellipse"
    SLOT = "slot"
    TORUS = "torus"
```

## `GetActiveLanguageResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetActiveLanguageResult:
    language_file_name: FileReference
    custom_language: bool
```

## `GetBSplinePropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetBSplinePropertiesResult:
    degree: int
    knots: int
    control_points: int
    range_min: float
    range_max: float
    length: float
```

## `GetCirclePropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetCirclePropertiesResult:
    center_coordinate: Vector
    normal_direction: Vector
    radius: float
    diameter: float
```

## `GetCloudPointCountResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True)
class GetCloudPointCountResult:
    points_count: int
    planar_offset: float
    radial_offset: float
    active_clipping_planes: int
```

## `GetCloudRGBValuesNearPointResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True)
class GetCloudRGBValuesNearPointResult:
    low_value: int
    high_value: int
    average_value: int
    standard_deviation: int
```

## `GetCloudRGBValuesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True)
class GetCloudRGBValuesResult:
    low_value: int
    high_value: int
    average_value: int
    standard_deviation: int
```

## `GetConePropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `GetCoordinateForIthPointInPointSetResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetCoordinateForIthPointInPointSetResult:
    point_name: str
    point_coordinates: Vector
```

## `GetCylinderPropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `GetDimensionValueResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetDimensionValueResult:
    dimensions_value: float
    nominal_value_enabled: bool
    high_tolerance_enabled: bool
    low_tolerance_enabled: bool
    nominal_value: float
    high_tolerance: float
    low_tolerance: float
```

## `GetEllipsePropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetEllipsePropertiesResult:
    center_coordinate: Vector
    normal_direction: Vector
    major_axis_radius: float
    minor_axis_radius: float
```

## `GetEulerParametersForFrameResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `GetEulerParametersForIthFrameInFrameSetResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `GetGeomRelationshipAutoVectorsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetGeomRelationshipAutoVectorsResult:
    auto_vectors_nominal_avn_enabled: bool
    auto_vectors_nominal_avn_name: CollectionObjectName
    auto_vectors_fit_avf_enabled: bool
    auto_vectors_fit_avf_name: CollectionObjectName
    points_type: str
```

## `GetGeomRelationshipCriteriaResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetGeomRelationshipCriteriaResult:
    nominal: float
    measured: float
    delta: float
    low_tolerance: float
    high_tolerance: float
    optimization_delta_weight: float
    optimization_out_of_tolerance_weight: float
    is_within_tolerance: str
    has_uncertainty: bool
    uncertainty: float
```

## `GetGeomRelationshipPointListResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetGeomRelationshipPointListResult:
    all_points: list[PointName]
    used_points: list[PointName]
    ignored_points: list[PointName]
```

## `GetIthPointFromGroupResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetIthPointFromGroupResult:
    complete_point_name: PointName
    point_name_only: str
    vector_in_working: Vector
```

## `GetIthVectorFromVectorGroupResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetIthVectorFromVectorGroupResult:
    vector_name: str
    begin_in_working: Vector
    end_in_working: Vector
    total_delta_in_working: Vector
    ijk_unit_vector_in_working: Vector
    magnitude: float
```

## `GetIthVectorFromVectorNameRefListResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetIthVectorFromVectorNameRefListResult:
    vector_group_name: CollectionObjectName
    vector_name: str
    begin_in_working: Vector
    end_in_working: Vector
    total_delta_in_working: Vector
    ijk_unit_vector_in_working: Vector
    magnitude: float
```

## `GetLinePropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `GetMeasurementAuxiliaryDataResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetMeasurementAuxiliaryDataResult:
    value: float
    units: str
```

## `GetMeasurementWeatherDataResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetMeasurementWeatherDataResult:
    temperature_deg_f: float
    pressure_in_hg: float
    humidity_rh: float
```

## `GetNamedDoubleListVariableMinMaxResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetNamedDoubleListVariableMinMaxResult:
    minimum_value: float
    maximum_value: float
```

## `GetPipeRelationshipCutStatusResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPipeRelationshipCutStatusResult:
    pipe_1_cut_available: bool
    pipe_1_cut_active: bool
    pipe_2_cut_available: bool
    pipe_2_cut_active: bool
```

## `GetPipeRelationshipPropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPipeRelationshipPropertiesResult:
    pipe_1_object_name: CollectionObjectName
    pipe_1_inner_diameter: float
    pipe_1_outer_diameter: float
    pipe_1_cut_begin: float
    pipe_1_cut_end: float
    pipe_2_object_name: CollectionObjectName
    pipe_2_inner_diameter: float
    pipe_2_outer_diameter: float
    pipe_2_cut_begin: float
    pipe_2_cut_end: float
```

## `GetPipeRelationshipWeightsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPipeRelationshipWeightsResult:
    overall_weight: float
    axis_offset: float
    axis_alignment: float
    center_pull: float
    out_of_material_weight: float
    out_of_material_static_offset: float
    constrain_region_at_od: bool
    constrain_id_od_overlap: bool
```

## `GetPlanePropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPlanePropertiesResult:
    normal_direction: Vector
    point_on_plane: Vector
    d_parameter: float
```

## `GetPointCoordinateCylindricalResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointCoordinateCylindricalResult:
    radius_value: float
    theta_value: float
    z_value: float
```

## `GetPointCoordinatePolarResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointCoordinatePolarResult:
    radius_value: float
    theta_value: float
    phi_value: float
```

## `GetPointCoordinateResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointCoordinateResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
```

## `GetPointOfViewParametersResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointOfViewParametersResult:
    rotation_x: float
    rotation_y: float
    rotation_z: float
    restore_zoom_settings: bool
    scale_factor: float
    origin_x: float
    origin_y: float
    restore_render_mode: bool
```

## `GetPointPropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `GetPointToLineDistanceResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointToLineDistanceResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
    magnitude: float
```

## `GetPointToPointDistanceResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetPointToPointDistanceResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
    magnitude: float
```

## `GetPointToleranceResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `GetRelationshipFitConstraintsScalarTypeResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipFitConstraintsScalarTypeResult:
    use_high_tolerance: bool
    high_tolerance: float
    use_low_tolerance: bool
    low_tolerance: float
    fit_constraint_options: FitConstraintScalarOptions
```

## `GetRelationshipOutlierRejectionScalarTypeResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipOutlierRejectionScalarTypeResult:
    use_high_limit: bool
    high_limit: float
    use_low_limit: bool
    low_limit: float
```

## `GetRelationshipProjectionOptionsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipProjectionOptionsResult:
    ignore_edge_projections: bool
    probe_offsets_override_target_values: bool
    probe_offsets_override_value: float
    add_extra_material: bool
    extra_material_thickness: float
```

## `GetRelationshipSubSamplingOptionsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipSubSamplingOptionsResult:
    use_every_ith_point: bool
    i_value: int
    use_no_more_than_n_points: bool
    n_value: int
```

## `GetRelationshipToleranceScalarTypeResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipToleranceScalarTypeResult:
    use_high_tolerance: bool
    high_tolerance: float
    use_low_tolerance: bool
    low_tolerance: float
    tolerance_options: ToleranceScalarOptions
```

## `GetRelationshipToleranceVectorTypeResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetRelationshipToleranceVectorTypeResult:
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
```

## `GetReportTagValueResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetReportTagValueResult:
    tag_value_as_string: str
    tag_value_as_integer: int
    tag_value_as_double: float
```

## `GetScaleBarStatsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetScaleBarStatsResult:
    nominal_length: float
    actual_length: float
    deviation: float
```

## `GetScreenResolutionResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetScreenResolutionResult:
    integer_window_top_left_x_position: int
    integer_window_top_left_y_position: int
    integer_width: int
    integer_height: int
    view_width: int
    view_height: int
```

## `GetSlotPropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `GetSpherePropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetSpherePropertiesResult:
    center_coordinate: Vector
    radius: float
    diameter: float
```

## `GetSurfacePhysicalStatsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetSurfacePhysicalStatsResult:
    volume: float
    area: float
```

## `GetTorusPropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetTorusPropertiesResult:
    center_coordinate: Vector
    normal_direction: Vector
    major_radius: float
    minor_radius: float
```

## `GetVectorFromVectorGroupByNameResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetVectorFromVectorGroupByNameResult:
    begin_in_working: Vector
    end_in_working: Vector
    total_delta_in_working: Vector
    ijk_unit_vector_in_working: Vector
    magnitude: float
```

## `GetVectorGroupPropertiesResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetVectorGroupPropertiesResult:
    total_vectors: int
    vectors_in_tolerance: int
    vectors_out_of_tolerance: int
    invalid_vectors: int
    vectors_in_tolerance_2: float
    vectors_out_of_tolerance_2: float
    absolute_max_magnitude: float
    absolute_min_magnitude: float
    max_magnitude: float
    min_magnitude: float
    standard_deviation_from_zero: float
    standard_deviation_from_mean: float
    avg_magnitude: float
    avg_of_abs_magnitude: float
    high_tolerance_value: float
    low_tolerance_value: float
    rms_value: float
```

## `GroupAverageResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True)
class GroupAverageResult:
    rms_deviation: float
    max_absolute_deviation: float
    average_deviation: float
```

## `GroupToSurfaceFitResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GroupToSurfaceFitResult:
    optimum_transform: WorldTransform
    rms_deviation: float
    maximum_absolute_deviation: float
```

## `InspectionFilter`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class InspectionFilter(str, Enum):
    ALL = "ALL"
    CHECKS = "CHECKS"
    DATUMS = "DATUMS"
```

## `InstrumentBestFitResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentBestFitResult:
    transform_in_working: Transform
    optimum_transform: WorldTransform
    rms_deviation: float
    maximum_absolute_deviation: float
    number_of_unknowns: int
    number_of_equations: int
    robustness: float
```

## `InstrumentModelResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentModelResult:
    name: str
    model: str
```

## `InstrumentPositionReportingFrame`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class InstrumentPositionReportingFrame(str, Enum):
    INSTRUMENT_BASE = "Instrument Base"
    WORLD = "World"
    WORKING = "Working"
```

## `InstrumentPositionUpdate`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentPositionUpdate:
    x_or_r: float
    y_or_theta_degrees: float
    z_or_phi_degrees: float
    time_since_update_seconds: float
    timestamp_approximate: str
```

## `InstrumentTargetStatus`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentTargetStatus:
    is_locked: bool
    name: str
    number_of_faces: int
    locked_face: int
```

## `InstrumentTargetsAndModeProfiles`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentTargetsAndModeProfiles:
    mode_profiles: list[str]
    target_names: list[str]
```

## `InstrumentTypeName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True)
class InstrumentTypeName:
    value: str
```

## `InstrumentWeatherSetting`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentWeatherSetting:
    temperature_fahrenheit: float
    pressure_mmhg: float
    relative_humidity_percent: float
    set_automatically: bool
```

## `InstrumentXyzUncertainties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentXyzUncertainties:
    x_uncertainty: float
    y_uncertainty: float
    z_uncertainty: float
```

## `ItemType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ItemType(str, Enum):
    ANY = "any"
    ALIGNMENT = "alignment"
    ANNOTATION = "annotation"
    B_SPLINE = "b_spline"
    CALIBRATION_APPLIANCE_NODE = "calibration_appliance_node"
    CALLOUT_VIEW = "callout_view"
    CHART = "chart"
    CIRCLE = "circle"
    CLOUD = "cloud"
    ENHANCED_CLOUD = "enhanced_cloud"
    SCAN_STRIPE_CLOUD = "scan_stripe_cloud"
    CROSS_SECTION_CLOUD = "cross_section_cloud"
    CONE = "cone"
    CYLINDER = "cylinder"
    DATUM = "datum"
    DIMENSION = "dimension"
    ELLIPSE = "ellipse"
    EVENT = "event"
    FEATURE_CHECK = "feature_check"
    FRAME = "frame"
    FRAME_SET = "frame_set"
    LINE = "line"
    PARABOLOID = "paraboloid"
    PERIMETER = "perimeter"
    PICTURE = "picture"
    PLANE = "plane"
    POINT_GROUP = "point_group"
    POINT_SET = "point_set"
    POLY_SURFACE = "poly_surface"
    RELATIONSHIP = "relationship"
    SA_DOC = "sa_doc"
    SA_REPORT = "sa_report"
    SA_REPORT_TEMPLATE = "sa_report_template"
    SCALE_BAR = "scale_bar"
    SCAN_STRIPE_MESH = "scan_stripe_mesh"
    SLOT = "slot"
    SPHERE = "sphere"
    SURFACE = "surface"
    TABLE = "table"
    TCP_FIXTURE = "tcp_fixture"
    TORUS = "torus"
    VECTOR_GROUP = "vector_group"
```

## `LastInstrumentIndexResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class LastInstrumentIndexResult:
    instrument_index: int
    instrument: CollectionInstrumentId
```

## `LrFlipTestResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class LrFlipTestResult:
    front_range_inches: float
    front_azimuth_degrees: float
    front_elevation_degrees: float
    front_quality: float
    back_range_inches: float
    back_azimuth_degrees: float
    back_elevation_degrees: float
    back_quality: float
    front_back_difference_range_inches: float
    front_back_difference_azimuth_degrees: float
    front_back_difference_elevation_degrees: float
```

## `LrLoSeparationTestResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class LrLoSeparationTestResult:
    primary_lo_index: int
    secondary_lo_index: int
    primary_lo_measurement_count: int
    primary_lo_range_mean_inches: float
    primary_lo_range_standard_deviation_inches: float
    primary_lo_quality_mean: float
    primary_lo_quality_standard_deviation: float
    secondary_lo_measurement_count: int
    secondary_lo_range_mean_inches: float
    secondary_lo_range_standard_deviation_inches: float
    secondary_lo_quality_mean: float
    secondary_lo_quality_standard_deviation: float
```

## `LrSelfTestResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class LrSelfTestResult:
    reference_arm_length_inches: float
    reference_arm_quality: float
    mirror_measurement_count: int
    mirror_measurement_range_mean_inches: float
    mirror_measurement_range_standard_deviation_inches: float
    mirror_measurement_quality_mean: float
    mirror_measurement_quality_standard_deviation: float
    passed_reference_arm_quality_threshold: bool
    passed_mirror_offset_delta_threshold: bool
    passed_mirror_offset_standard_deviation_threshold: bool
    passed_mirror_mean_quality_threshold: bool
    passed_overall: bool
```

## `LrSnrInfo`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class LrSnrInfo:
    snr: float
    size_of_data_array: int
    peak_value_index: int
    peak_value_db: float
    measured_range_meters: float
```

## `MakeGdtDatumAnnotationOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True)
class MakeGdtDatumAnnotationOptions:
    datum_name: str
    objects: Sequence[CollectionObjectName] = field(default_factory=tuple)
    geometry_relationships: Sequence[CollectionItemName] = field(default_factory=tuple)
    surface_faces: SurfaceFaceList | None = None
    auxiliary_object: CollectionObjectName | None = None
    auxiliary_geometry_relationship: CollectionItemName | None = None
    is_slot: bool = False
    force_surface_feature: bool = False
```

## `MakeGdtFeatureCheckAnnotationOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True)
class MakeGdtFeatureCheckAnnotationOptions:
    feature_annotation_name: str
    feature_type: GdtFeatureType = GdtFeatureType.TRUE_POSITION
    objects: Sequence[CollectionObjectName] = field(default_factory=tuple)
    geometry_relationships: Sequence[CollectionItemName] = field(default_factory=tuple)
    surface_faces: SurfaceFaceList | None = None
    decompose_multiple_features: bool = False
    auto_create_diameter_checks: bool = False
    auto_create_slot_width_checks: bool = False
    auto_create_slot_length_checks: bool = False
    datum_references: str = ""
    tolerance: str = ""
    is_slot: bool = False
    per_unit_length_or_area: bool = False
    circular_area: bool = False
    per_unit_area_length_distance: float = 0.0
    per_unit_area_length_step_over_percent: float = 50.0
    per_unit_area_width_distance: float = 0.0
    per_unit_area_width_step_over_percent: float = 50.0
    per_unit_area_circle_diameter: float = 0.0
    per_unit_area_diameter_step_over: float = 50.0
    auxiliary_object: CollectionObjectName | None = None
    auxiliary_geometry_relationship: CollectionItemName | None = None
    use_nominal_for_dimension_tolerance: bool = True
    use_reference_object_for_nominal: bool = True
    nominal_dimension_tolerance: float = 0.0
    low_dimension_tolerance: float = -0.1
    high_dimension_tolerance: float = 0.1
    tolerance_zone_type: GdtToleranceZoneType = GdtToleranceZoneType.NONE
    use_projected_tolerance_zone: bool = False
    projected_tolerance_zone: float = 0.0
```

## `MeasuredSideForPlanarOffset`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class MeasuredSideForPlanarOffset(str, Enum):
    ABOVE_PLANE = "above_plane"
    PROBE_CENTER = "probe_center"
    BELOW_PLANE = "below_plane"
    DEFAULT = ABOVE_PLANE
```

## `MeasuredSideForRadialOffset`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class MeasuredSideForRadialOffset(str, Enum):
    INSIDE = "inside"
    PROBE_CENTER = "probe_center"
    OUTSIDE = "outside"
    DEFAULT = OUTSIDE
```

## `MeshOrientationType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class MeshOrientationType(str, Enum):
    USE_CURRENT_POINT_OF_VIEW = "Use Current Point of View"
    USE_CURRENT_WORKING_FRAME = "Use Current Working Frame"
```

## `MeshVolumeResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True)
class MeshVolumeResult:
    above: float
    below: float
```

## `MirrorFramePlane`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class MirrorFramePlane(str, Enum):
    XY = "xy"
    XZ = "xz"
    YZ = "yz"
```

## `MpDialogInteractionMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class MpDialogInteractionMode(str, Enum):
    BLOCK_APPLICATION_INTERACTION = "block_application_interaction"
    ALLOW_APPLICATION_INTERACTION = "allow_application_interaction"
```

## `MpInteractionMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class MpInteractionMode(str, Enum):
    HALT_ON_FAILURE_ONLY = "halt_on_failure_only"
    HALT_ON_FAILURE_OR_PARTIAL_SUCCESS = "halt_on_failure_or_partial_success"
    NEVER_HALT = "never_halt"
```

## `MushroomTargetHoleInspectionResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class MushroomTargetHoleInspectionResult:
    sphere_fit_rms_error: float
    sphere_fit_max_error: float
```

## `NormalDirection`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class NormalDirection(str, Enum):
    PROBING_DIRECTION = "probing_direction"
    WORKING_ORIGIN_POSITIVE = "working_origin_positive"
    RIGHT_HAND_RULE = "right_hand_rule"
    DEFAULT = PROBING_DIRECTION
```

## `ObjectOriginResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True)
class ObjectOriginResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
```

## `ObjectType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ObjectType(str, Enum):
    ANY = "any"
    B_SPLINE = "b_spline"
    CIRCLE = "circle"
    CLOUD = "cloud"
    ENHANCED_CLOUD = "enhanced_cloud"
    SCAN_STRIPE_CLOUD = "scan_stripe_cloud"
    CROSS_SECTION_CLOUD = "cross_section_cloud"
    CONE = "cone"
    CYLINDER = "cylinder"
    DATUM = "datum"
    ELLIPSE = "ellipse"
    FRAME = "frame"
    FRAME_SET = "frame_set"
    LINE = "line"
    PARABOLOID = "paraboloid"
    PERIMETER = "perimeter"
    PLANE = "plane"
    POINT_GROUP = "point_group"
    POINT_SET = "point_set"
    POLY_SURFACE = "poly_surface"
    SCAN_STRIPE_MESH = "scan_stripe_mesh"
    SLOT = "slot"
    SPHERE = "sphere"
    SURFACE = "surface"
    TORUS = "torus"
    VECTOR_GROUP = "vector_group"
    DEFAULT = ANY
```

## `ObservationInfo`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ObservationInfo:
    instrument: CollectionInstrumentId
    spherical_values: ObservationSphericalValues
    active: bool
    timestamp: str
    rms_error: float
    temperature_fahrenheit: float
    pressure_in_hg: float
    relative_humidity_percent: float
    info_data: str
```

## `ObservationSphericalValues`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ObservationSphericalValues:
    distance: float
    azimuth: float
    elevation: float
```

## `OffsetDirectionType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class OffsetDirectionType(str, Enum):
    BOTH = "both"
    POSITIVE_ONLY = "positiveOnly"
    NEGATIVE_ONLY = "negativeOnly"
```

## `PerimeterLists`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class PerimeterLists:
    scan_perimeters: list[CollectionObjectName]
    exclusion_perimeters: list[CollectionObjectName]
```

## `PointComparisonResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class PointComparisonResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
    magnitude: float
    resulting_point_name: PointName
```

## `PointDeltaReportOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class PointDeltaReportOptions:
    coordinate_system: CoordinateSystemType = CoordinateSystemType.CARTESIAN
    details_format: str = "Single"
    show_point_a: bool = True
    show_point_b: bool = True
    show_delta: bool = True
    show_magnitude: bool = True
    show_component_1: bool = True
    show_component_2: bool = True
    show_component_3: bool = True
    sort_point_names: bool = False
    show_tolerance_fields: bool = True
    colorize_in_tolerance_fields: bool = True
    DEFAULT: ClassVar[PointDeltaReportOptions]
```

## `PointFilterInputType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class PointFilterInputType(str, Enum):
    CARDINAL_POINTS = "cardinal_points"
    INPUT_POINTS = "input_points"
    NOMINAL_CARDINAL_POINTS = "nominal_cardinal_points"
    DEFAULT = CARDINAL_POINTS
```

## `PointName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class PointName:
    collection_name: str
    group_name: str
    target_name: str
```

## `PointOutputType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class PointOutputType(str, Enum):
    POINTS = "points"
    CLOUD_POINTS = "cloudPoints"
```

## `PointToPointRelationshipStatistics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class PointToPointRelationshipStatistics:
    delta_x: float
    delta_y: float
    delta_z: float
    delta_magnitude: float
    reference_frame: CollectionObjectName
```

## `PointsToObjectsRelationshipStatistics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class PointsToObjectsRelationshipStatistics:
    absolute_max_deviation: float
    max_deviation: float
    min_deviation: float
    avg_deviation: float
    rms: float
    candidate_point_count: int
    sampled_point_count: int
    rejected_point_count: int
    used_point_count: int
    out_of_tolerance_point_count: int
```

## `PointsToPointsRelationshipAssociatedData`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class PointsToPointsRelationshipAssociatedData:
    nominal_points: tuple[PointName, ...]
    actual_points: tuple[PointName, ...]
```

## `ProjectedPointGradient`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True)
class ProjectedPointGradient:
    projected_point: Vector
    normal_vector: Vector
    u_direction: Vector
    v_direction: Vector
```

## `ProjectionOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ProjectionOptions:
    projection_type: str = "Object To Probe Vectors"
    ignore_edge_projections: bool = False
    override_target_offsets: bool = False
    override_target_offsets_value: float = 0.0
    add_extra_material_thickness: bool = False
    extra_material_thickness_value: float = 0.0
    DEFAULT: ClassVar[ProjectionOptions]
```

## `QueryCloudsToObjectsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryCloudsToObjectsResult:
    rms_deviation: float
    maximum_absolute_deviation: float
```

## `QueryCloudsToSurfaceResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryCloudsToSurfaceResult:
    rms_deviation: float
    maximum_absolute_deviation: float
```

## `QueryFrameToFrameResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryFrameToFrameResult:
    x: float
    y: float
    z: float
    rx_roll: float
    ry_pitch: float
    rz_yaw: float
```

## `QueryGroupsToObjectsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryGroupsToObjectsResult:
    rms_deviation: float
    max_absolute_deviation: float
    average_deviation: float
    standard_deviation: float
```

## `QueryPointToObjectsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryPointToObjectsResult:
    d_x: float
    d_y: float
    d_z: float
    d_mag: float
    resultant_object: CollectionObjectName
```

## `QueryPointsToObjectsResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class QueryPointsToObjectsResult:
    rms_deviation: float
    max_absolute_deviation: float
    average_deviation: float
    standard_deviation: float
```

## `RGBColorChannel`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class RGBColorChannel(str, Enum):
    RED = "red"
    GREEN = "green"
    BLUE = "blue"
    INTENSITY = "intensity"
```

## `RGBFilterOperation`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class RGBFilterOperation(str, Enum):
    INCREMENTALLY_APPLY_FILTER = "incrementallyApplyFilter"
    RESET_AND_APPLY_FILTER = "resetAndApplyFilter"
    RESET_ALL_CLOUD_POINTS_VISIBLE = "resetAllCloudPointsVisible"
```

## `RelWeightingMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class RelWeightingMode(str, Enum):
    NORMALIZE_EQUATION_COUNT = "normalize_equation_count"
    NORMALIZE_EQUATION_COUNT_AND_TOLERANCE_WIDTH = (
        "normalize_equation_count_and_tolerance_width"
    )
    RESET_ALL_WEIGHTS = "reset_all_weights"
    NORMALIZE_SQUARE_ROOT_EQUATION_COUNT = "normalize_square_root_equation_count"
    NORMALIZE_SQUARE_ROOT_AND_TOLERANCE_WIDTH = (
        "normalize_square_root_and_tolerance_width"
    )
    DEFAULT = NORMALIZE_EQUATION_COUNT
```

## `RelationshipAssociatedData`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipAssociatedData:
    relationship_type: str
    individual_points: tuple[PointName, ...]
    point_groups: tuple[CollectionObjectName, ...]
    point_clouds: tuple[CollectionObjectName, ...]
    objects: tuple[CollectionObjectName, ...]
```

## `RelationshipFitResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipFitResult:
    transform_in_reference: Transform
    transform_in_working: WorldTransform
    transform_in_world: WorldTransform
    fit_objective_value: float
```

## `RelationshipStatusFlags`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipStatusFlags:
    dormant: bool
    success: bool
    measured: bool
    failed: bool
    unmeasured: bool
```

## `RelationshipWatchWindowTemplateOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipWatchWindowTemplateOptions:
    linear_precision: int = 4
    angular_precision: int = 3
    font: Font = Font()
    text_color: Color = Color(red=0, green=0, blue=255)
    background_color: Color = Color(red=255, green=255, blue=255)
    highlight_color: Color = Color(red=255, green=0, blue=0)
    show_deviation_x_rx: bool = True
    show_deviation_y_ry: bool = True
    show_deviation_z_rz: bool = True
    show_deviation_magnitude: bool = True
    udp_network_transmit_settings: RelationshipWatchWindowUdpSettings = (
        RelationshipWatchWindowUdpSettings()
    )
    transparent_background: bool = False
    hide_units: bool = False
```

## `RelationshipWatchWindowUdpSettings`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class RelationshipWatchWindowUdpSettings:
    enabled: bool = False
    broadcast: bool = True
    ip_address: str = ""
    port: int = 10000
```

## `RenderModeType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class RenderModeType(str, Enum):
    WIREFRAME = "wireframe"
    HIDDEN_LINE_REMOVED = "hidden_line_removed"
    SOLID_AND_EDGES = "solid_and_edges"
    SOLID = "solid"
    DEFAULT = WIREFRAME
```

## `ReportOutputOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ReportOutputOptions:
    output_type: ReportOutputType
    external_path: str | None = None
    embedded_file: EmbeddedReportFile | None = None
    DEFAULT: ClassVar[ReportOutputOptions]
```

## `ReportOutputType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ReportOutputType(str, Enum):
    NONE = "none"
    SA_REPORT = "sa_report"
    SA_DOCUMENT = "sa_document"
    PDF = "pdf"
    RTF = "rtf"
```

## `ReportPageSettings`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ReportPageSettings(str, Enum):
    PORTRAIT = "portrait"
    LANDSCAPE = "landscape"
    DEFAULT = PORTRAIT
```

## `ReportViewOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ReportViewOptions:
    view_type: ReportViewType
    collection_name: str = ""
    callout_name: str = ""
```

## `ReportViewType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class ReportViewType(str, Enum):
    NONE = "none"
    CURRENT_VIEW = "current_view"
    CALLOUT_VIEW = "callout_view"
```

## `ResetCloudBoundingBoxResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True)
class ResetCloudBoundingBoxResult:
    x_axis_dimension: float
    y_axis_dimension: float
    z_axis_dimension: float
    x_axis_in_world: Vector
    y_axis_in_world: Vector
    z_axis_in_world: Vector
    centroid_in_world: Vector
    reference_transform_in_world: Transform
    reference_transform_in_working: Transform
    points_used_for_bounding_box: int
```

## `RobotActiveJointComponent`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class RobotActiveJointComponent(str, Enum):
    NONE = "NONE"
    X = "X"
    Y = "Y"
    Z = "Z"
    RX = "Rx"
    RY = "Ry"
    RZ = "Rz"
    ALPHA = "Alpha"
    A = "A"
    D = "D"
    THETA = "THETA"
```

## `RobotCalibrationMetrics`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class RobotCalibrationMetrics:
    xyz_max: float
    xyz_average: float
    xyz_rms: float
    orient_max: float
    orient_average: float
    orient_rms: float
    robustness: float
```

## `RobotModelLinkConfiguration`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class RobotModelLinkConfiguration:
    link_type: RobotModelLinkType = RobotModelLinkType.DH
    dh_alpha_component: float = 0.0
    dh_a_component: float = 0.0
    dh_d_component: float = 0.0
    dh_theta_component: float = 0.0
    dh_x_axis_deflection_factor: float = 0.0
    dh_y_axis_deflection_factor: float = 0.0
    dh_z_axis_deflection_factor: float = 0.0
    six_dof_x_component: float = 0.0
    six_dof_y_component: float = 0.0
    six_dof_z_component: float = 0.0
    six_dof_rx_component: float = 0.0
    six_dof_ry_component: float = 0.0
    six_dof_rz_component: float = 0.0
    active_joint_component: RobotActiveJointComponent = RobotActiveJointComponent.NONE
    encoder_offset_value: float = 0.0
    minimum_encoder_limit: float = 0.0
    maximum_encoder_limit: float = 0.0
    encoder_sense_negative: bool = False
    include_additional_encoder: bool = False
    additional_encoder_index_offset: int = 0
    additional_encoder_sense_negative: bool = False
    segment_origin_mass_kg: float = 0.0
    segment_cg_mass_kg: float = 0.0
    segment_cg_in_segment: Vector = Vector(0.0, 0.0, 0.0)
```

## `RobotModelLinkParameters`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class RobotModelLinkParameters:
    configuration: RobotModelLinkConfiguration
    encoder_value: float
```

## `RobotModelLinkType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class RobotModelLinkType(str, Enum):
    DH = "DH"
    SIX_DOF = "6DOF"
```

## `SaInteractionMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class SaInteractionMode(str, Enum):
    MANUAL = "manual"
    AUTOMATIC = "automatic"
    SILENT = "silent"
```

## `ScalarToleranceLimit`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ScalarToleranceLimit:
    enabled: bool = False
    value: float = 0.0
```

## `ShowUsmnDialog`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class ShowUsmnDialog(str, Enum):
    NO = "No"
    YES = "Yes"
    ON_TOLERANCE_VIOLATION = "On Tolerance Violation"
```

## `SigmoidalGapFitConstraints`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class SigmoidalGapFitConstraints:
    use_sigmoidal_gap_constraints: bool
    minimum_gap_boundary: float
    minimum_gap_weight: float
    maximum_gap_boundary: float
    maximum_gap_weight: float
    nominal_gap: float
    nominal_gap_weight: float
    gradient_steepness_factor: float
```

## `SlotType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class SlotType(str, Enum):
    ROUND = "round"
    SQUARE = "square"
    DEFAULT = ROUND
```

## `SolverMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class SolverMode(str, Enum):
    GAUSS_NEWTON = "Gauss-Newton"
    LEVENBERG_MARQUARDT = "Levenberg-Marquardt"
    GAUSS_NEWTON_WITH_GRADIENT_SEARCH = "Gauss-Newton /w Gradient Search"
    DIRECT_SEARCH = "Direct Search"
```

## `SphereAxisCheckResult`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

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
```

## `SphereFitComputationMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class SphereFitComputationMode(str, Enum):
    STANDARD = "standard"
    MAX_INSCRIBED = "max_inscribed"
    MIN_CIRCUMSCRIBED = "min_circumscribed"
    DEFAULT = STANDARD
```

## `SurfaceAnalysisMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class SurfaceAnalysisMode(str, Enum):
    NONE = "none"
    RELATIONSHIP = "relationship"
    NORMALS = "normals"
    CURVATURE = "curvature"
    DEVIATION_RMS = "deviation_rms"
    DEVIATION_MAX = "deviation_max"
    DEVIATION_AVERAGE = "deviation_average"
    DEVIATION_MIN = "deviation_min"
    DEVIATION_MAX_ABSOLUTE = "deviation_max_absolute"
    DEVIATION_MAX_DELTA = "deviation_max_delta"
    PSEUDO_SURFACE = "pseudo_surface"
    DEFAULT = RELATIONSHIP
```

## `SurfaceDissectionMode`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class SurfaceDissectionMode(Enum):
    ENTIRE_SOLID = "Entire Solid"
    SELECT_FACES = "Select Faces"
```

## `SurfaceFaceList`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True)
class SurfaceFaceList:
    value: str
```

## `SurveyTargetType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class SurveyTargetType(str, Enum):
    TRIANGLE = "Triangle"
    CIRCLE = "Circle"
```

## `SystemString`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class SystemString(str, Enum):
    SA_VERSION = "SA Version"
    XIT_FILENAME = "XIT Filename"
    MP_FILENAME = "MP Filename"
    MP_FILENAME_FULL_PATH = "MP Filename (Full Path)"
    DATE_AND_TIME = "Date & Time"
    DATE = "Date"
    DATE_SHORT = "Date (Short)"
    TIME = "Time"
    KEY_SERIAL_NUMBER = "Key Serial Number"
    COMPANY_NAME = "Company Name"
    USER_NAME = "User Name"
    LICENSE_USER_NAME = "License User Name"
    WINDOWS_USER_NAME = "Windows User Name"
    COMPUTER_NAME = "Computer Name"
```

## `TargetComputationMethod`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class TargetComputationMethod(str, Enum):
    USE_MOST_RECENT_SHOT_FROM_EACH_FACE = "Use most recent shot from each face"
    USE_ONLY_MOST_RECENT_SHOT = "Use only most recent shot"
    DO_NOT_CHANGE_PRIOR_MEASUREMENTS = "Do not change prior measurements at all"
    FORCE_NEW_POINT_FOR_EACH_MEASUREMENT = "Force a new point for each measurement"
    REMOVE_ALL_PRIOR_SHOTS = "Remove all prior shots"
    DEACTIVATE_ALL_PRIOR_SHOTS = "Deactivate all prior shots"
```

## `TcpFixtureUncertainties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class TcpFixtureUncertainties:
    solution_valid: bool
    refined_tcp_in_working: Transform
    uncertainties_in_tcp_fixture_frame: DoubleVector6
    uncertainties_in_working_frame: DoubleVector6
    rms_error: float
    maximum_absolute_error: float
    goodness_of_fit: float
    robustness: float
    result_notes: list[str]
```

## `TemperatureUnits`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class TemperatureUnits(str, Enum):
    FAHRENHEIT = "fahrenheit"
    CELSIUS = "celsius"
    DEFAULT = FAHRENHEIT
```

## `ToleranceLimit`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ToleranceLimit:
    enabled: bool = False
    value: float = 0.0
```

## `ToleranceScalarOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ToleranceScalarOptions:
    high: ScalarToleranceLimit = field(default_factory=ScalarToleranceLimit)
    low: ScalarToleranceLimit = field(default_factory=ScalarToleranceLimit)
    DEFAULT: ClassVar[ToleranceScalarOptions]
```

## `ToleranceVectorOptions`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ToleranceVectorOptions:
    high_x: ToleranceLimit = field(default_factory=ToleranceLimit)
    high_y: ToleranceLimit = field(default_factory=ToleranceLimit)
    high_z: ToleranceLimit = field(default_factory=ToleranceLimit)
    high_magnitude: ToleranceLimit = field(default_factory=ToleranceLimit)
    low_x: ToleranceLimit = field(default_factory=ToleranceLimit)
    low_y: ToleranceLimit = field(default_factory=ToleranceLimit)
    low_z: ToleranceLimit = field(default_factory=ToleranceLimit)
    low_magnitude: ToleranceLimit = field(default_factory=ToleranceLimit)
```

## `TrackerEdmTheodoliteUncertainties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class TrackerEdmTheodoliteUncertainties:
    theta_dispersion_arcseconds: float
    theta_threshold: float
    phi_dispersion_arcseconds: float
    phi_threshold: float
    distance_ppm: float
    distance_threshold: float
```

## `Transform`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class Transform:
    values: tuple[float, ...]
```

## `TransformAxes`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class TransformAxes:
    origin: Vector
    x_axis: Vector
    y_axis: Vector
    z_axis: Vector
```

## `TranslucencyType`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class TranslucencyType(str, Enum):
    SOLID = "solid"
    TRANSLUCENT = "translucent"
    WIREFRAME = "wireframe"
```

## `UncertaintyCovarianceMatrix`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class UncertaintyCovarianceMatrix:
    row_1: DoubleVector6
    row_2: DoubleVector6
    row_3: DoubleVector6
    row_4: DoubleVector6
    row_5: DoubleVector6
    row_6: DoubleVector6
```

## `Vector`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True)
class Vector:
    x: float
    y: float
    z: float
```

## `VectorName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class VectorName:
    collection_name: str
    group_name: str
    name: str
```

## `ViewName`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class ViewName:
    name: str
```

## `WcfAxis`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
class WcfAxis(str, Enum):
    X = "X Axis"
    Y = "Y Axis"
    Z = "Z Axis"
```

## `WindowState`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
class WindowState(str, Enum):
    MAXIMIZE = "maximize"
    MINIMIZE = "minimize"
    RESTORE = "restore"
    SHOW = "show"
    HIDE = "hide"
```

## `WorkingFrameProperties`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_models.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class WorkingFrameProperties:
    frame_name: str
    collection_name: str
    working_frame: CollectionObjectName
```

## `WorldFixedXyzTransformComponents`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class WorldFixedXyzTransformComponents(FixedXyzTransformComponents):
    scale: float
```

## `WorldFixedXyzTransformVectors`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_models.py)

```python
@dataclass(frozen=True)
class WorldFixedXyzTransformVectors:
    position_in_working: Vector
    orientation_in_working: Vector
    scale: float
```

## `WorldTransform`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class WorldTransform:
    transform: Transform
    scale_factor: float
```

## `WrtlChannelStatus`

[Released Declaration](https://github.com/spatialanalyzer/briosa-py/blob/v0.2.0/targets/2026.1.0529.7/src/briosa/wave_b_operation_values.py)

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class WrtlChannelStatus:
    connection_status: bool
    active_channel: int
```
