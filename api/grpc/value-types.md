---
title: MP Value Types
description: Server 0.7.0 exact-target protobuf values for SA 2026.1.0529.7.
---

# MP Value Types

[SA 2026.1.0529.7](/api/grpc/value-types) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/value-types)

These are the released Server **0.7.0** protobuf values for **SA 2026.1.0529.7**. Preserve reserved numbers and exact-target domains. Client libraries expose their own handwritten representations.

## `AngularUnits`

```proto
enum AngularUnits {
  ANGULAR_UNITS_UNSPECIFIED = 0;
  ANGULAR_UNITS_DEGREES = 1;
  ANGULAR_UNITS_DEGREES_MINUTES_SECONDS = 2;
  ANGULAR_UNITS_RADIANS = 3;
  ANGULAR_UNITS_MILLIRADIANS = 4;
  ANGULAR_UNITS_GONS_GRAD = 5;
  ANGULAR_UNITS_MILS = 6;
  ANGULAR_UNITS_ARCSECONDS = 7;
  ANGULAR_UNITS_DEGREES_MINUTES = 8;
}
```

## `AsciiFileFormat`

```proto
enum AsciiFileFormat {
  ASCII_FILE_FORMAT_UNSPECIFIED = 0;
  ASCII_FILE_FORMAT_X_Y_Z = 1;
  ASCII_FILE_FORMAT_X_Y_Z_OFFSET_OFFSET2 = 2;
  ASCII_FILE_FORMAT_X_Y_Z_NOTES = 3;
  ASCII_FILE_FORMAT_RADIUS_THETA_PHI = 4;
  ASCII_FILE_FORMAT_RADIUS_THETA_Z = 5;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z = 6;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_NOTES = 7;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_OFFSET_OFFSET2 = 8;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_UX_UY_UZ = 9;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_TX_TY_TZ_TD = 10;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_WX_WY_WZ_WMAG = 11;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_HIGH_LOW_TOLERANCE = 12;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_TX_TY_TZ_TD_WX_WY_WZ = 13;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_WX_WY_WZ_TX_TY_TZ_TD = 14;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_HIGH_LOW_TOLERANCE_WX_WY_WZ = 15;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_WX_WY_WZ_HIGH_LOW_TOLERANCE = 16;
  ASCII_FILE_FORMAT_POINT_NAME_RADIUS_THETA_PHI = 17;
  ASCII_FILE_FORMAT_POINT_NAME_RADIUS_THETA_Z = 18;
  ASCII_FILE_FORMAT_POINT_NAME_X_Y_Z_GROUP_NAME = 19;
  ASCII_FILE_FORMAT_POINT_NAME_Y_X_Z_GROUP_NAME = 20;
  ASCII_FILE_FORMAT_GROUP_NAME_POINT_NAME_X_Y_Z = 21;
  ASCII_FILE_FORMAT_GROUP_NAME_POINT_NAME_X_Y_Z_OFFSET_OFFSET2 = 22;
  ASCII_FILE_FORMAT_GROUP_NAME_POINT_NAME_X_Y_Z_NOTES = 23;
  ASCII_FILE_FORMAT_GROUP_NAME_POINT_NAME_X_Y_Z_UX_UY_UZ = 24;
  ASCII_FILE_FORMAT_GROUP_NAME_POINT_NAME_RADIUS_THETA_PHI = 25;
  ASCII_FILE_FORMAT_GROUP_NAME_POINT_NAME_RADIUS_THETA_Z = 26;
  ASCII_FILE_FORMAT_COLLECTION_GROUP_POINT_X_Y_Z = 27;
  ASCII_FILE_FORMAT_COLLECTION_GROUP_POINT_X_Y_Z_NOTES = 28;
  ASCII_FILE_FORMAT_COLLECTION_GROUP_POINT_RADIUS_THETA_PHI = 29;
  ASCII_FILE_FORMAT_COLLECTION_GROUP_POINT_RADIUS_THETA_Z = 30;
  ASCII_FILE_FORMAT_X_Y_Z_I_J_K = 31;
  ASCII_FILE_FORMAT_VECTOR_NAME_X_Y_Z_I_J_K = 32;
  ASCII_FILE_FORMAT_VECTOR_NAME_X_Y_Z_DX_DY_DZ_SIGNED_MAGNITUDE = 33;
  ASCII_FILE_FORMAT_VECTOR_GROUP_NAME_VECTOR_NAME_X_Y_Z_I_J_K = 34;
  ASCII_FILE_FORMAT_VECTOR_GROUP_NAME_VECTOR_NAME_X_Y_Z_DX_DY_DZ_SIGNED_MAGNITUDE = 35;
  ASCII_FILE_FORMAT_FRAME_NAME_X_Y_Z_RX_RY_RZ_TIMESTAMP = 36;
  ASCII_FILE_FORMAT_FRAME_NAME_X_Y_Z_EULER_X_Y_Z_TIMESTAMP = 37;
  ASCII_FILE_FORMAT_FRAME_NAME_X_Y_Z_EULER_Z_Y_X_TIMESTAMP = 38;
  ASCII_FILE_FORMAT_FRAME_NAME_X_Y_Z_EULER_Z_Y_Z_TIMESTAMP = 39;
  ASCII_FILE_FORMAT_FRAME_NAME_X_Y_Z_EULER_Z_X_Z_TIMESTAMP = 40;
  ASCII_FILE_FORMAT_FRAME_NAME_TRANSFORMATION_MATRIX_TIMESTAMP = 41;
  ASCII_FILE_FORMAT_TRANSFORMATION_MATRIX_TIMESTAMP = 42;
  ASCII_FILE_FORMAT_FRAME_NAME_X_Y_Z_QUATERNION_TIMESTAMP = 43;
  ASCII_FILE_FORMAT_PLANE_NAME_X_Y_Z_DX_DY_DZ_PLANE_SIZE = 44;
}
```

## `AxisIdentifier`

```proto
enum AxisIdentifier {
  AXIS_IDENTIFIER_UNSPECIFIED = 0;
  AXIS_IDENTIFIER_POSITIVE_X = 1;
  AXIS_IDENTIFIER_NEGATIVE_X = 2;
  AXIS_IDENTIFIER_POSITIVE_Y = 3;
  AXIS_IDENTIFIER_NEGATIVE_Y = 4;
  AXIS_IDENTIFIER_POSITIVE_Z = 5;
  AXIS_IDENTIFIER_NEGATIVE_Z = 6;
}
```

## `BSplineFitOptions`

```proto
message BSplineFitOptions {
  optional bool open_curve = 1;
  optional bool use_interpolation_for_fit = 2;
  optional int32 number_of_control_points = 3;
  optional int32 degree_of_curve = 4;
  optional BSplinePointSortMode sort_method = 5;
  optional bool span_any_gap = 6;
  optional double termination_gap_length = 7;
  optional bool ignore_proximate_points = 8;
  optional double proximate_point_threshold = 9;
  optional bool use_global_tessellation_options = 10;
  optional double maximum_chordal_deviation = 11;
  optional double maximum_trim_edge_angle = 12;
  optional double termination_average_multiplier = 13;
  optional double extension = 14;
}
```

## `BSplinePointSortMode`

```proto
enum BSplinePointSortMode {
  B_SPLINE_POINT_SORT_MODE_UNSPECIFIED = 0;
  B_SPLINE_POINT_SORT_MODE_USE_SELECTION_ORDER = 1;
  B_SPLINE_POINT_SORT_MODE_CLOSEST_NEIGHBORS_FROM_FIRST_SELECTION = 2;
  B_SPLINE_POINT_SORT_MODE_CLOSEST_NEIGHBORS_IN_CURVE_DIRECTION = 3;
}
```

## `BaseColorType`

```proto
enum BaseColorType {
  BASE_COLOR_TYPE_UNSPECIFIED = 0;
  BASE_COLOR_TYPE_RED = 1;
  BASE_COLOR_TYPE_GREEN = 2;
  BASE_COLOR_TYPE_BLUE = 3;
}
```

## `BaseMidColorType`

```proto
enum BaseMidColorType {
  BASE_MID_COLOR_TYPE_UNSPECIFIED = 0;
  BASE_MID_COLOR_TYPE_RED = 1;
  BASE_MID_COLOR_TYPE_GREEN = 2;
  BASE_MID_COLOR_TYPE_GRAY = 3;
  BASE_MID_COLOR_TYPE_BLUE = 4;
}
```

## `CalloutViewProperties`

```proto
message CalloutViewProperties {
  optional bool lock_view_point = 1;
  optional bool recall_working_frame = 2;
  optional bool recall_visible_layer = 3;
  optional int32 callout_leader_thickness = 4;
  optional Color callout_leader_color = 5;
  optional int32 callout_border_thickness = 6;
  optional Color callout_border_color = 7;
  optional bool divide_text_with_lines = 8;
  optional Font font = 9;
}
```

## `ChartName`

```proto
message ChartName {
  optional string name = 1;
}
```

## `ChartType`

```proto
enum ChartType {
  CHART_TYPE_UNSPECIFIED = 0;
  CHART_TYPE_RUN_CHART = 1;
  CHART_TYPE_INDIVIDUAL_X_MOVING_RANGE = 2;
  CHART_TYPE_BULLSEYE_CHART = 3;
}
```

## `CircleLineMode`

```proto
enum CircleLineMode {
  CIRCLE_LINE_MODE_UNSPECIFIED = 0;
  CIRCLE_LINE_MODE_CIRCLE = 1;
  CIRCLE_LINE_MODE_LINE = 2;
}
```

## `CloudBoxType`

```proto
enum CloudBoxType {
  CLOUD_BOX_TYPE_UNSPECIFIED = 0;
  CLOUD_BOX_TYPE_WORLD_AXIS_ALIGNED_BOX = 1;
  CLOUD_BOX_TYPE_WORK_AXIS_ALIGNED_BOX = 2;
  CLOUD_BOX_TYPE_MINIMUM_ORIENTED_BOX_UNCONDITIONAL = 3;
  CLOUD_BOX_TYPE_MINIMUM_ORIENTED_BOX_VERIFY_VOLUME = 4;
}
```

## `CloudThinningMode`

```proto
enum CloudThinningMode {
  CLOUD_THINNING_MODE_UNSPECIFIED = 0;
  CLOUD_THINNING_MODE_NONE = 1;
  CLOUD_THINNING_MODE_RANDOM = 2;
  CLOUD_THINNING_MODE_NTH_POINT = 3;
}
```

## `CloudThinningOptions`

```proto
message CloudThinningOptions {
  optional CloudThinningMode mode = 1;
  optional int32 point_increment = 2;
  optional int32 minimum_number_of_points = 3;
  optional int32 maximum_number_of_points = 4;
}
```

## `CloudToCadAlignmentResult`

```proto
message CloudToCadAlignmentResult {
  double rms_deviation = 1;
  double average_deviation = 2;
  double maximum_absolute_deviation = 3;
  optional Transform resultant_transform_in_working = 4;
}
```

## `CollectionGroupName`

```proto
message CollectionGroupName {
  optional string collection_name = 1;
  optional string group_name = 2;
}
```

## `CollectionInstrumentId`

```proto
message CollectionInstrumentId {
  optional string collection_name = 1;
  optional int32 instrument_id = 2;
}
```

## `CollectionItemName`

```proto
message CollectionItemName {
  optional string collection_name = 1;
  optional string item_name = 2;
  optional ItemType item_type = 3;
}
```

## `CollectionMachineId`

```proto
message CollectionMachineId {
  optional string collection_name = 1;
  optional int32 machine_id = 2;
}
```

## `CollectionName`

```proto
message CollectionName {
  optional string name = 1;
}
```

## `CollectionObjectName`

```proto
message CollectionObjectName {
  optional string collection_name = 1;
  optional string object_name = 2;
  ObjectType object_type = 3;
}
```

## `CollectionObjectNameList`

```proto
message CollectionObjectNameList {
  repeated CollectionObjectName values = 1;
}
```

## `CollectionVectorGroupName`

```proto
message CollectionVectorGroupName {
  optional string collection_name = 1;
  optional string vector_group_name = 2;
}
```

## `CollimationBaselineMethod`

```proto
enum CollimationBaselineMethod {
  COLLIMATION_BASELINE_METHOD_UNSPECIFIED = 0;
  COLLIMATION_BASELINE_METHOD_DETERMINED_BY_VALUE = 1;
  COLLIMATION_BASELINE_METHOD_DETERMINED_FROM_SCALE = 2;
  COLLIMATION_BASELINE_METHOD_DETERMINED_FROM_KNOWN_POINT = 3;
}
```

## `CollimationTiltMode`

```proto
enum CollimationTiltMode {
  COLLIMATION_TILT_MODE_UNSPECIFIED = 0;
  COLLIMATION_TILT_MODE_FULL_COLLIMATION = 1;
  COLLIMATION_TILT_MODE_NO_TILT_COLLIMATION = 2;
}
```

## `Color`

```proto
message Color {
  optional uint32 red = 1;
  optional uint32 green = 2;
  optional uint32 blue = 3;
}
```

## `ColorRangeMethod`

```proto
enum ColorRangeMethod {
  COLOR_RANGE_METHOD_UNSPECIFIED = 0;
  COLOR_RANGE_METHOD_SINGLE_COLOR = 1;
  COLOR_RANGE_METHOD_CONTINUOUS = 2;
  COLOR_RANGE_METHOD_TOLERANCED_CONTINUOUS = 3;
  COLOR_RANGE_METHOD_TOLERANCED_GO_NO_GO = 4;
  COLOR_RANGE_METHOD_TOLERANCED_GO_NO_GO_WITH_WARNING = 5;
  COLOR_RANGE_METHOD_DISCRETE_COLORS = 6;
}
```

## `ColorizationOptions`

```proto
message ColorizationOptions {
  optional ColorRangeMethod color_range_method = 1;
  optional BaseColorType base_high_color = 2;
  optional BaseMidColorType base_mid_color = 3;
  optional BaseColorType base_low_color = 4;
  optional bool draw_tubes = 5;
  optional bool draw_arrowheads = 6;
  optional bool indicate_values = 7;
  optional double vector_magnification = 8;
  optional int32 vector_width = 9;
  optional bool draw_blotches = 10;
  optional double blotch_size = 11;
  optional bool show_out_of_tolerance_only = 12;
  optional bool show_color_bar_in_view = 13;
  optional bool show_color_bar_percentages = 14;
  optional bool show_color_bar_fractions = 15;
  optional double high_saturation_limit = 16;
  optional double low_saturation_limit = 17;
  optional double high_tolerance = 18;
  optional double low_tolerance = 19;
}
```

## `CompTechnique`

```proto
enum CompTechnique {
  COMP_TECHNIQUE_UNSPECIFIED = 0;
  COMP_TECHNIQUE_STANDARD = 1;
  COMP_TECHNIQUE_MAX_INSCRIBED = 2;
  COMP_TECHNIQUE_MIN_CIRCUMSCRIBED = 3;
}
```

## `ConstructObjectType`

```proto
enum ConstructObjectType {
  CONSTRUCT_OBJECT_TYPE_UNSPECIFIED = 0;
  CONSTRUCT_OBJECT_TYPE_ANY = 1;
  CONSTRUCT_OBJECT_TYPE_CIRCLES = 2;
  CONSTRUCT_OBJECT_TYPE_CONES = 3;
  CONSTRUCT_OBJECT_TYPE_CYLINDERS = 4;
  CONSTRUCT_OBJECT_TYPE_LINES = 5;
  CONSTRUCT_OBJECT_TYPE_PLANES = 6;
  CONSTRUCT_OBJECT_TYPE_SLOTS = 7;
  CONSTRUCT_OBJECT_TYPE_SPHERES = 8;
  CONSTRUCT_OBJECT_TYPE_CENTER_POINTS = 9;
  CONSTRUCT_OBJECT_TYPE_SURFACE_POINTS = 10;
  CONSTRUCT_OBJECT_TYPE_VERTEX_POINTS = 11;
}
```

## `CoordinateSystemType`

```proto
enum CoordinateSystemType {
  COORDINATE_SYSTEM_TYPE_UNSPECIFIED = 0;
  COORDINATE_SYSTEM_TYPE_CARTESIAN = 1;
  COORDINATE_SYSTEM_TYPE_CYLINDRIC = 2;
  COORDINATE_SYSTEM_TYPE_POLAR = 3;
}
```

## `CurrentTrappingStatus`

```proto
message CurrentTrappingStatus {
  bool active = 1;
  optional CollectionItemName focused_item = 2;
  optional CollectionInstrumentId instrument = 3;
}
```

## `DatasetType`

```proto
enum DatasetType {
  DATASET_TYPE_UNSPECIFIED = 0;
  DATASET_TYPE_X = 1;
  DATASET_TYPE_Y = 2;
  DATASET_TYPE_Z = 3;
  DATASET_TYPE_MAGNITUDE = 4;
}
```

## `DegreeOfFreedom`

```proto
enum DegreeOfFreedom {
  DEGREE_OF_FREEDOM_UNSPECIFIED = 0;
  DEGREE_OF_FREEDOM_ANY = 1;
  DEGREE_OF_FREEDOM_LOCK_FOCUS_LOCATION = 2;
  DEGREE_OF_FREEDOM_LOCK_VERTEX_LOCATION = 3;
}
```

## `DistanceUnits`

```proto
enum DistanceUnits {
  DISTANCE_UNITS_UNSPECIFIED = 0;
  DISTANCE_UNITS_METERS = 1;
  DISTANCE_UNITS_CENTIMETERS = 2;
  DISTANCE_UNITS_MILLIMETERS = 3;
  DISTANCE_UNITS_FEET = 4;
  DISTANCE_UNITS_INCHES = 5;
  DISTANCE_UNITS_US_SURVEY_FEET = 6;
}
```

## `DoubleVector6`

```proto
message DoubleVector6 {
  repeated double values = 1; // exactly six values
}
```

## `DynamicCircleMode`

```proto
enum DynamicCircleMode {
  DYNAMIC_CIRCLE_MODE_UNSPECIFIED = 0;
  DYNAMIC_CIRCLE_MODE_CYLINDER_AND_PLANE_HOLD_PLANE_NORMAL = 1;
  DYNAMIC_CIRCLE_MODE_CYLINDER_AND_PLANE_HOLD_CYLINDER_AXIS = 2;
  DYNAMIC_CIRCLE_MODE_CONE_AND_PLANE_HOLD_PLANE_NORMAL = 3;
  DYNAMIC_CIRCLE_MODE_CONE_AND_PLANE_HOLD_CONE_AXIS = 4;
  DYNAMIC_CIRCLE_MODE_SPHERE_AND_PLANE_INTERSECTION = 5;
  DYNAMIC_CIRCLE_MODE_TWO_CONES_INTERSECTION = 6;
  DYNAMIC_CIRCLE_MODE_CONE_AND_CYLINDER_INTERSECTION = 7;
}
```

## `DynamicEllipseMode`

```proto
enum DynamicEllipseMode {
  DYNAMIC_ELLIPSE_MODE_UNSPECIFIED = 0;
  DYNAMIC_ELLIPSE_MODE_CYLINDER_AND_PLANE_INTERSECTION = 1;
  DYNAMIC_ELLIPSE_MODE_CONE_AND_PLANE_INTERSECTION = 2;
}
```

## `DynamicLineMode`

```proto
enum DynamicLineMode {
  DYNAMIC_LINE_MODE_UNSPECIFIED = 0;
  DYNAMIC_LINE_MODE_CONE_AXIS = 1;
  DYNAMIC_LINE_MODE_CYLINDER_AXIS = 2;
  DYNAMIC_LINE_MODE_INTERSECTION_OF_TWO_PLANES = 3;
  DYNAMIC_LINE_MODE_BISECT_TWO_LINES = 4;
  DYNAMIC_LINE_MODE_SLOT_CENTERLINE_ALONG_LENGTH = 5;
}
```

## `DynamicPlaneMode`

```proto
enum DynamicPlaneMode {
  DYNAMIC_PLANE_MODE_UNSPECIFIED = 0;
  DYNAMIC_PLANE_MODE_BISECT_TWO_PLANES = 1;
  DYNAMIC_PLANE_MODE_TWO_CONES_HOLD_NORMAL_TO_BEST_FIT_PLANE = 2;
  DYNAMIC_PLANE_MODE_TWO_CONES_HOLD_NORMAL_TO_FIRST_CONE_AXIS = 3;
  DYNAMIC_PLANE_MODE_TWO_CONES_HOLD_NORMAL_TO_SECOND_CONE_AXIS = 4;
  DYNAMIC_PLANE_MODE_CONE_AND_CYLINDER_HOLD_NORMAL_TO_BEST_FIT_PLANE = 5;
  DYNAMIC_PLANE_MODE_CONE_AND_CYLINDER_HOLD_NORMAL_TO_CONE_AXIS = 6;
  DYNAMIC_PLANE_MODE_CONE_AND_CYLINDER_HOLD_NORMAL_TO_CYLINDER_AXIS = 7;
  DYNAMIC_PLANE_MODE_OFFSET_PLANE_FROM_PLANE = 8;
}
```

## `DynamicPointMode`

```proto
enum DynamicPointMode {
  DYNAMIC_POINT_MODE_UNSPECIFIED = 0;
  DYNAMIC_POINT_MODE_INTERSECTION_LINE_AND_PLANE = 1;
  DYNAMIC_POINT_MODE_INTERSECTION_CYLINDER_AND_PLANE = 2;
  DYNAMIC_POINT_MODE_INTERSECTION_CONE_AND_PLANE = 3;
  DYNAMIC_POINT_MODE_INTERSECTION_THREE_PLANES = 4;
  DYNAMIC_POINT_MODE_MID_POINT_PERPENDICULAR_TO_TWO_LINES = 5;
}
```

## `EdgePointMode`

```proto
enum EdgePointMode {
  EDGE_POINT_MODE_UNSPECIFIED = 0;
  EDGE_POINT_MODE_INCLUDE_EDGES = 1;
  EDGE_POINT_MODE_EXCLUDE_EDGES = 2;
  EDGE_POINT_MODE_EDGES_ONLY = 3;
}
```

## `EmbeddedReportFile`

```proto
message EmbeddedReportFile {
  optional string collection_name = 1;
  optional string file_name = 2;
}
```

## `ExportDataDelimeterType`

```proto
enum ExportDataDelimeterType {
  EXPORT_DATA_DELIMETER_TYPE_UNSPECIFIED = 0;
  EXPORT_DATA_DELIMETER_TYPE_SPACE = 1;
  EXPORT_DATA_DELIMETER_TYPE_COMMA = 2;
  EXPORT_DATA_DELIMETER_TYPE_TAB = 3;
}
```

## `ExportTargetNameFormat`

```proto
enum ExportTargetNameFormat {
  EXPORT_TARGET_NAME_FORMAT_UNSPECIFIED = 0;
  EXPORT_TARGET_NAME_FORMAT_COLLECTION_GROUP_TARGET = 1;
  EXPORT_TARGET_NAME_FORMAT_GROUP_TARGET = 2;
  EXPORT_TARGET_NAME_FORMAT_TARGET = 3;
  EXPORT_TARGET_NAME_FORMAT_NONE = 4;
}
```

## `ExportVectorNameFormat`

```proto
enum ExportVectorNameFormat {
  EXPORT_VECTOR_NAME_FORMAT_UNSPECIFIED = 0;
  EXPORT_VECTOR_NAME_FORMAT_COLLECTION_GROUP_VECTOR = 1;
  EXPORT_VECTOR_NAME_FORMAT_GROUP_VECTOR = 2;
  EXPORT_VECTOR_NAME_FORMAT_VECTOR = 3;
  EXPORT_VECTOR_NAME_FORMAT_NONE = 4;
}
```

## `FeatureCheckCylinderEvalOptions`

```proto
message FeatureCheckCylinderEvalOptions {
  bool enable_actual_diameter_override = 1;
  double actual_diameter_override = 2;
}
```

## `FeatureCheckDatumReference`

```proto
message FeatureCheckDatumReference {
  string reference_string = 1;
  string cad_faces = 2;
  repeated CollectionObjectName sa_objects = 3;
  repeated CollectionObjectName auxiliary_sa_objects = 4;
  repeated CollectionItemName geometry_relationships = 5;
  repeated CollectionItemName auxiliary_geometry_relationships = 6;
}
```

## `FeatureCheckReportingOptions`

```proto
message FeatureCheckReportingOptions {
  bool show_feature_control_frame_summary = 1;
  bool include_title = 2;
  bool show_datum_and_tolerance_summary = 3;
  bool show_feature_summary = 4;
  bool only_create_failed_vectors = 5;
  bool show_point_details = 6;
  bool show_lower_tier_tables = 7;
}
```

## `FileReference`

```proto
message FileReference {
  optional string path = 1;
  optional bool embedded_file = 2;
}
```

## `FilterProximitySettings`

```proto
message FilterProximitySettings {
  optional double surface_inclusion_proximity = 1;
  optional double edge_exclusion_proximity = 2;
  optional double planar_inclusion_proximity = 3;
  optional double planar_exclusion_proximity = 4;
  optional double radial_inclusion_proximity = 5;
  optional double geometry_extraction_tolerance = 6;
  optional OffsetDirectionType surface_proximity_mode = 7;
  optional OffsetDirectionType planar_proximity_mode = 8;
  optional OffsetDirectionType radial_proximity_mode = 9;
  optional bool project_to_plane = 10;
  optional bool assert_plane_boundaries = 11;
}
```

## `FitConstraintScalarOptions`

```proto
message FitConstraintScalarOptions {
  ScalarToleranceLimit high = 1;
  ScalarToleranceLimit low = 2;
}
```

## `FitDofOptions`

```proto
message FitDofOptions {
  optional bool allow_x = 1;
  optional bool allow_y = 2;
  optional bool allow_z = 3;
  optional bool allow_rx = 4;
  optional bool allow_ry = 5;
  optional bool allow_rz = 6;
  optional bool rotate_about_centroid = 7;
}
```

## `FitMethod`

```proto
enum FitMethod {
  FIT_METHOD_UNSPECIFIED = 0;
  FIT_METHOD_MINIMUM_RMS = 1;
  FIT_METHOD_BEST_AXIS = 2;
}
```

## `Font`

```proto
message Font {
  optional string font_name = 1;
  optional uint32 size = 2;
  Color color = 3;
}
```

## `FrameAxis`

```proto
enum FrameAxis {
  FRAME_AXIS_UNSPECIFIED = 0;
  FRAME_AXIS_X = 1;
  FRAME_AXIS_Y = 2;
  FRAME_AXIS_Z = 3;
}
```

## `FrameConstructionMethod`

```proto
enum FrameConstructionMethod {
  FRAME_CONSTRUCTION_METHOD_UNSPECIFIED = 0;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_X_XY = 1;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_X_XZ = 2;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_Y_YX = 3;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_Y_YZ = 4;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_Z_ZX = 5;
  FRAME_CONSTRUCTION_METHOD_ORIGIN_X_ZY = 6;
}
```

## `FrameName`

```proto
message FrameName {
  optional string name = 1;
}
```

## `GdtDistanceBetweenMode`

```proto
enum GdtDistanceBetweenMode {
  GDT_DISTANCE_BETWEEN_MODE_UNSPECIFIED = 0;
  GDT_DISTANCE_BETWEEN_MODE_CENTROID = 1;
  GDT_DISTANCE_BETWEEN_MODE_MIN_MAX = 2;
}
```

## `GdtEvaluationMethod`

```proto
enum GdtEvaluationMethod {
  GDT_EVALUATION_METHOD_UNSPECIFIED = 0;
  GDT_EVALUATION_METHOD_NONE = 1;
  GDT_EVALUATION_METHOD_ASME_1994 = 2;
  GDT_EVALUATION_METHOD_ASME_2009 = 3;
  GDT_EVALUATION_METHOD_ASME_2018 = 4;
  GDT_EVALUATION_METHOD_ISO_1983 = 5;
  GDT_EVALUATION_METHOD_ISO_2004 = 6;
  GDT_EVALUATION_METHOD_ISO_2017 = 7;
}
```

## `GdtExtendedEvaluationMethod`

```proto
enum GdtExtendedEvaluationMethod {
  GDT_EXTENDED_EVALUATION_METHOD_UNSPECIFIED = 0;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES = 1;
  GDT_EXTENDED_EVALUATION_METHOD_HIGH_POINT = 2;
  GDT_EXTENDED_EVALUATION_METHOD_MINIMUM_SEPARATION = 3;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_HIGH_POINT = 4;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_3D = 5;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_HIGH_POINT_1_STD_DEV = 6;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_HIGH_POINT_2_STD_DEV = 7;
  GDT_EXTENDED_EVALUATION_METHOD_LEAST_SQUARES_HIGH_POINT_HALFWAY = 8;
  GDT_EXTENDED_EVALUATION_METHOD_MINIMUM_SEPARATION_HIGH_POINT = 9;
  GDT_EXTENDED_EVALUATION_METHOD_EQUALIZED_HIGH_POINT = 10;
  GDT_EXTENDED_EVALUATION_METHOD_EQUALIZED_LSQ_HIGH_POINT = 11;
}
```

## `GdtFeatureType`

```proto
enum GdtFeatureType {
  GDT_FEATURE_TYPE_UNSPECIFIED = 0;
  GDT_FEATURE_TYPE_DIAMETER = 1;
  GDT_FEATURE_TYPE_RADIUS = 2;
  GDT_FEATURE_TYPE_DISTANCE_BETWEEN = 3;
  GDT_FEATURE_TYPE_WIDTH = 4;
  GDT_FEATURE_TYPE_LENGTH = 5;
  GDT_FEATURE_TYPE_ANGLE_BETWEEN = 6;
  GDT_FEATURE_TYPE_ANGULARITY = 7;
  GDT_FEATURE_TYPE_PERPENDICULARITY = 8;
  GDT_FEATURE_TYPE_PARALLELISM = 9;
  GDT_FEATURE_TYPE_CIRCULARITY = 10;
  GDT_FEATURE_TYPE_CONCENTRICITY = 11;
  GDT_FEATURE_TYPE_CYLINDRICITY = 12;
  GDT_FEATURE_TYPE_STRAIGHTNESS = 13;
  GDT_FEATURE_TYPE_SURFACE_PROFILE = 14;
  GDT_FEATURE_TYPE_LINE_PROFILE = 15;
  GDT_FEATURE_TYPE_COMPOSITE_SURFACE_PROFILE = 16;
  GDT_FEATURE_TYPE_FLATNESS = 17;
  GDT_FEATURE_TYPE_TRUE_POSITION = 18;
  GDT_FEATURE_TYPE_COMPOSITE_TRUE_POSITION = 19;
  GDT_FEATURE_TYPE_CIRCULAR_RUNOUT = 20;
  GDT_FEATURE_TYPE_TOTAL_RUNOUT = 21;
}
```

## `GdtMeasurements`

```proto
message GdtMeasurements {
  repeated PointName point_names = 1;
  repeated CollectionObjectName cloud_names = 2;
}
```

## `GdtOptions`

```proto
message GdtOptions {
  bool use_high_points = 1;
  bool extrapolate_axial_extent = 2;
  bool exclude_from_auto_evaluation = 3;
  optional GdtDistanceBetweenMode distance_between_mode = 4;
  optional GdtEvaluationMethod evaluation_method = 5;
  bool create_actual_features = 6;
  bool create_solved_points = 7;
  double cross_section_criteria = 8;
  bool enable_auto_feature_detection = 9;
}
```

## `GdtToleranceZoneType`

```proto
enum GdtToleranceZoneType {
  GDT_TOLERANCE_ZONE_TYPE_UNSPECIFIED = 0;
  GDT_TOLERANCE_ZONE_TYPE_NONE = 1;
  GDT_TOLERANCE_ZONE_TYPE_CYLINDRICAL = 2;
  GDT_TOLERANCE_ZONE_TYPE_PLANAR = 3;
  GDT_TOLERANCE_ZONE_TYPE_SPHERICAL = 4;
  GDT_TOLERANCE_ZONE_TYPE_RADIAL_ARC = 5;
  GDT_TOLERANCE_ZONE_TYPE_RADIAL_PLANAR = 6;
  GDT_TOLERANCE_ZONE_TYPE_BOUNDARY = 7;
  GDT_TOLERANCE_ZONE_TYPE_PLANAR_MEDIAN = 8;
  GDT_TOLERANCE_ZONE_TYPE_SURFACE = 9;
}
```

## `GeometryRelationshipOutlierFilterMetrics`

```proto
message GeometryRelationshipOutlierFilterMetrics {
  double first_pass_rms_error = 1;
  double first_pass_maximum_error = 2;
  double first_pass_minimum_error = 3;
  double first_pass_average_error = 4;
  double final_pass_rms_error = 5;
  double final_pass_maximum_error = 6;
  double final_pass_minimum_error = 7;
  double final_pass_average_error = 8;
  int32 total_input_point_count = 9;
  int32 exclude_point_count = 10;
}
```

## `GeometryRelationshipPointEditMode`

```proto
enum GeometryRelationshipPointEditMode {
  GEOMETRY_RELATIONSHIP_POINT_EDIT_MODE_UNSPECIFIED = 0;
  GEOMETRY_RELATIONSHIP_POINT_EDIT_MODE_POINT_LIST = 1;
  GEOMETRY_RELATIONSHIP_POINT_EDIT_MODE_POINT_GRAPH = 2;
  GEOMETRY_RELATIONSHIP_POINT_EDIT_MODE_SUB_SAMPLER_SETTINGS = 3;
}
```

## `GeometryType`

```proto
enum GeometryType {
  GEOMETRY_TYPE_UNSPECIFIED = 0;
  GEOMETRY_TYPE_LINE = 1;
  GEOMETRY_TYPE_PLANE = 2;
  GEOMETRY_TYPE_CIRCLE = 3;
  GEOMETRY_TYPE_SPHERE = 4;
  GEOMETRY_TYPE_CYLINDER = 5;
  GEOMETRY_TYPE_CONE = 6;
  GEOMETRY_TYPE_PARABOLOID = 7;
  GEOMETRY_TYPE_ELLIPSE = 8;
  GEOMETRY_TYPE_SLOT = 9;
  GEOMETRY_TYPE_TORUS = 10;
}
```

## `GroupAverageResult`

```proto
message GroupAverageResult {
  double rms_deviation = 1;
  double max_absolute_deviation = 2;
  double average_deviation = 3;
}
```

## `InspectionFilter`

```proto
enum InspectionFilter {
  INSPECTION_FILTER_UNSPECIFIED = 0;
  INSPECTION_FILTER_ALL = 1;
  INSPECTION_FILTER_CHECKS = 2;
  INSPECTION_FILTER_DATUMS = 3;
}
```

## `InstrumentPositionReportingFrame`

```proto
enum InstrumentPositionReportingFrame {
  INSTRUMENT_POSITION_REPORTING_FRAME_UNSPECIFIED = 0;
  INSTRUMENT_POSITION_REPORTING_FRAME_INSTRUMENT_BASE = 1;
  INSTRUMENT_POSITION_REPORTING_FRAME_WORLD = 2;
  INSTRUMENT_POSITION_REPORTING_FRAME_WORKING = 3;
}
```

## `InstrumentTargetStatus`

```proto
message InstrumentTargetStatus {
  bool is_locked = 1;
  string name = 2;
  int32 number_of_faces = 3;
  int32 locked_face = 4;
}
```

## `InstrumentTypeName`

```proto
message InstrumentTypeName {
  string value = 1;
}
```

## `ItemType`

```proto
enum ItemType {
  ITEM_TYPE_UNSPECIFIED = 0;
  ITEM_TYPE_ANY = 1;
  ITEM_TYPE_ALIGNMENT = 2;
  ITEM_TYPE_ANNOTATION = 3;
  ITEM_TYPE_B_SPLINE = 4;
  ITEM_TYPE_CALIBRATION_APPLIANCE_NODE = 5;
  ITEM_TYPE_CALLOUT_VIEW = 6;
  ITEM_TYPE_CHART = 7;
  ITEM_TYPE_CIRCLE = 8;
  ITEM_TYPE_CLOUD = 9;
  ITEM_TYPE_ENHANCED_CLOUD = 10;
  ITEM_TYPE_SCAN_STRIPE_CLOUD = 11;
  ITEM_TYPE_CROSS_SECTION_CLOUD = 12;
  ITEM_TYPE_CONE = 13;
  ITEM_TYPE_CYLINDER = 14;
  ITEM_TYPE_DATUM = 15;
  ITEM_TYPE_DIMENSION = 16;
  ITEM_TYPE_ELLIPSE = 17;
  ITEM_TYPE_EVENT = 18;
  ITEM_TYPE_FEATURE_CHECK = 19;
  ITEM_TYPE_FRAME = 20;
  ITEM_TYPE_FRAME_SET = 21;
  ITEM_TYPE_LINE = 22;
  ITEM_TYPE_PARABOLOID = 23;
  ITEM_TYPE_PERIMETER = 24;
  ITEM_TYPE_PICTURE = 25;
  ITEM_TYPE_PLANE = 26;
  ITEM_TYPE_POINT_GROUP = 27;
  ITEM_TYPE_POINT_SET = 28;
  ITEM_TYPE_POLY_SURFACE = 29;
  ITEM_TYPE_RELATIONSHIP = 30;
  ITEM_TYPE_SA_DOC = 31;
  ITEM_TYPE_SA_REPORT = 32;
  ITEM_TYPE_SA_REPORT_TEMPLATE = 33;
  ITEM_TYPE_SCALE_BAR = 34;
  ITEM_TYPE_SCAN_STRIPE_MESH = 35;
  ITEM_TYPE_SLOT = 36;
  ITEM_TYPE_SPHERE = 37;
  ITEM_TYPE_SURFACE = 38;
  ITEM_TYPE_TABLE = 39;
  ITEM_TYPE_TCP_FIXTURE = 40;
  ITEM_TYPE_TORUS = 41;
  ITEM_TYPE_VECTOR_GROUP = 42;
}
```

## `LrFlipTestResult`

```proto
message LrFlipTestResult {
  double front_range = 1;
  double front_azimuth = 2;
  double front_elevation = 3;
  double front_quality = 4;
  double back_range = 5;
  double back_azimuth = 6;
  double back_elevation = 7;
  double back_quality = 8;
  double front_back_difference_range = 9;
  double front_back_difference_azimuth = 10;
  double front_back_difference_elevation = 11;
}
```

## `LrLoSeparationTestResult`

```proto
message LrLoSeparationTestResult {
  int32 primary_lo = 1;
  int32 secondary_lo = 2;
  int32 primary_lo_measurement_count = 3;
  double primary_lo_range_mean = 4;
  double primary_lo_range_standard_deviation = 5;
  double primary_lo_quality_mean = 6;
  double primary_lo_quality_standard_deviation = 7;
  int32 secondary_lo_measurement_count = 8;
  double secondary_lo_range_mean = 9;
  double secondary_lo_range_standard_deviation = 10;
  double secondary_lo_quality_mean = 11;
  double secondary_lo_quality_standard_deviation = 12;
}
```

## `LrSnrInfo`

```proto
message LrSnrInfo {
  double snr = 1;
  int32 size_of_data_array = 2;
  int32 peak_value_index = 3;
  double peak_value = 4;
  double measured_range = 5;
}
```

## `MeasuredSideForPlanarOffset`

```proto
enum MeasuredSideForPlanarOffset {
  MEASURED_SIDE_FOR_PLANAR_OFFSET_UNSPECIFIED = 0;
  MEASURED_SIDE_FOR_PLANAR_OFFSET_ABOVE_PLANE = 1;
  MEASURED_SIDE_FOR_PLANAR_OFFSET_PROBE_CENTER = 2;
  MEASURED_SIDE_FOR_PLANAR_OFFSET_BELOW_PLANE = 3;
}
```

## `MeasuredSideForRadialOffset`

```proto
enum MeasuredSideForRadialOffset {
  MEASURED_SIDE_FOR_RADIAL_OFFSET_UNSPECIFIED = 0;
  MEASURED_SIDE_FOR_RADIAL_OFFSET_INSIDE = 1;
  MEASURED_SIDE_FOR_RADIAL_OFFSET_PROBE_CENTER = 2;
  MEASURED_SIDE_FOR_RADIAL_OFFSET_OUTSIDE = 3;
}
```

## `MeshOrientationType`

```proto
enum MeshOrientationType {
  MESH_ORIENTATION_TYPE_UNSPECIFIED = 0;
  MESH_ORIENTATION_TYPE_USE_CURRENT_POINT_OF_VIEW = 1;
  MESH_ORIENTATION_TYPE_USE_CURRENT_WORKING_FRAME = 2;
}
```

## `MirrorFramePlane`

```proto
enum MirrorFramePlane {
  MIRROR_FRAME_PLANE_UNSPECIFIED = 0;
  MIRROR_FRAME_PLANE_XY = 1;
  MIRROR_FRAME_PLANE_XZ = 2;
  MIRROR_FRAME_PLANE_YZ = 3;
}
```

## `MpDialogInteractionMode`

```proto
enum MpDialogInteractionMode {
  MP_DIALOG_INTERACTION_MODE_UNSPECIFIED = 0;
  MP_DIALOG_INTERACTION_MODE_BLOCK_APPLICATION_INTERACTION = 1;
  MP_DIALOG_INTERACTION_MODE_ALLOW_APPLICATION_INTERACTION = 2;
}
```

## `MpExecutionDetails`

```proto
message MpExecutionDetails {
  MpExecutionState state = 1;
  optional int32 mp_result_code = 2;
  repeated OutputRetrievalDetails output_retrievals = 3;
}
```

## `MpExecutionState`

```proto
enum MpExecutionState {
  MP_EXECUTION_STATE_UNSPECIFIED = 0;
  MP_EXECUTION_STATE_SUCCEEDED = 1;
  MP_EXECUTION_STATE_EXECUTE_STEP_REJECTED = 2;
  MP_EXECUTION_STATE_FAILED = 3;
  MP_EXECUTION_STATE_RESULT_UNAVAILABLE = 4;
  MP_EXECUTION_STATE_ARGUMENT_REJECTED = 5;
}
```

## `MpInteractionMode`

```proto
enum MpInteractionMode {
  MP_INTERACTION_MODE_UNSPECIFIED = 0;
  MP_INTERACTION_MODE_HALT_ON_FAILURE_ONLY = 1;
  MP_INTERACTION_MODE_HALT_ON_FAILURE_OR_PARTIAL_SUCCESS = 2;
  MP_INTERACTION_MODE_NEVER_HALT = 3;
}
```

## `NormalDirection`

```proto
enum NormalDirection {
  NORMAL_DIRECTION_UNSPECIFIED = 0;
  NORMAL_DIRECTION_PROBING_DIRECTION = 1;
  NORMAL_DIRECTION_WORKING_ORIGIN_POSITIVE = 2;
  NORMAL_DIRECTION_RIGHT_HAND_RULE = 3;
}
```

## `ObjectOriginResult`

```proto
message ObjectOriginResult {
  Vector vector_representation = 1;
  double x_value = 2;
  double y_value = 3;
  double z_value = 4;
}
```

## `ObjectType`

```proto
enum ObjectType {
  OBJECT_TYPE_UNSPECIFIED = 0;
  OBJECT_TYPE_ANY = 1;
  OBJECT_TYPE_B_SPLINE = 2;
  OBJECT_TYPE_CIRCLE = 3;
  OBJECT_TYPE_CLOUD = 4;
  OBJECT_TYPE_ENHANCED_CLOUD = 5;
  OBJECT_TYPE_SCAN_STRIPE_CLOUD = 6;
  OBJECT_TYPE_CROSS_SECTION_CLOUD = 7;
  OBJECT_TYPE_CONE = 8;
  OBJECT_TYPE_CYLINDER = 9;
  OBJECT_TYPE_DATUM = 10;
  OBJECT_TYPE_ELLIPSE = 11;
  OBJECT_TYPE_FRAME = 12;
  OBJECT_TYPE_FRAME_SET = 13;
  OBJECT_TYPE_LINE = 14;
  OBJECT_TYPE_PARABOLOID = 15;
  OBJECT_TYPE_PERIMETER = 16;
  OBJECT_TYPE_PLANE = 17;
  OBJECT_TYPE_POINT_GROUP = 18;
  OBJECT_TYPE_POINT_SET = 19;
  OBJECT_TYPE_POLY_SURFACE = 20;
  OBJECT_TYPE_SCAN_STRIPE_MESH = 21;
  OBJECT_TYPE_SLOT = 22;
  OBJECT_TYPE_SPHERE = 23;
  OBJECT_TYPE_SURFACE = 24;
  OBJECT_TYPE_TORUS = 25;
  OBJECT_TYPE_VECTOR_GROUP = 26;
}
```

## `ObservationInfo`

```proto
message ObservationInfo {
  optional CollectionInstrumentId instrument = 1;
  optional ObservationSphericalValues spherical_values = 2;
  bool active = 3;
  string timestamp = 4;
  double rms_error = 5;
  double temperature = 6;
  double pressure = 7;
  double relative_humidity = 8;
  string info_data = 9;
}
```

## `ObservationSphericalValues`

```proto
message ObservationSphericalValues {
  double distance = 1;
  double azimuth = 2;
  double elevation = 3;
}
```

## `OffsetDirectionType`

```proto
enum OffsetDirectionType {
  OFFSET_DIRECTION_TYPE_UNSPECIFIED = 0;
  OFFSET_DIRECTION_TYPE_BOTH = 1;
  OFFSET_DIRECTION_TYPE_POSITIVE_ONLY = 2;
  OFFSET_DIRECTION_TYPE_NEGATIVE_ONLY = 3;
}
```

## `OutputRetrievalDetails`

```proto
message OutputRetrievalDetails {
  string field_name = 1;
  OutputRetrievalState state = 2;
  optional string diagnostic_code = 3;
}
```

## `OutputRetrievalState`

```proto
enum OutputRetrievalState {
  OUTPUT_RETRIEVAL_STATE_UNSPECIFIED = 0;
  OUTPUT_RETRIEVAL_STATE_RETRIEVED = 1;
  OUTPUT_RETRIEVAL_STATE_NOT_ATTEMPTED = 2;
  OUTPUT_RETRIEVAL_STATE_FAILED = 3;
}
```

## `PerimeterLists`

```proto
message PerimeterLists {
  repeated CollectionObjectName scan_perimeters = 1;
  repeated CollectionObjectName exclusion_perimeters = 2;
}
```

## `PointDeltaReportOptions`

```proto
message PointDeltaReportOptions {
  optional CoordinateSystemType coordinate_system = 1;
  optional string details_format = 2;
  optional bool show_point_a = 3;
  optional bool show_point_b = 4;
  optional bool show_delta = 5;
  optional bool show_magnitude = 6;
  optional bool show_component_1 = 7;
  optional bool show_component_2 = 8;
  optional bool show_component_3 = 9;
  optional bool sort_point_names = 10;
  optional bool show_tolerance_fields = 11;
  optional bool colorize_in_tolerance_fields = 12;
}
```

## `PointFilterInputType`

```proto
enum PointFilterInputType {
  POINT_FILTER_INPUT_TYPE_UNSPECIFIED = 0;
  POINT_FILTER_INPUT_TYPE_CARDINAL_POINTS = 1;
  POINT_FILTER_INPUT_TYPE_INPUT_POINTS = 2;
  POINT_FILTER_INPUT_TYPE_NOMINAL_CARDINAL_POINTS = 3;
}
```

## `PointName`

```proto
message PointName {
  optional string collection_name = 1;
  optional string group_name = 2;
  optional string target_name = 3;
}
```

## `PointNameList`

```proto
message PointNameList {
  repeated PointName values = 1;
}
```

## `PointOutputType`

```proto
enum PointOutputType {
  POINT_OUTPUT_TYPE_UNSPECIFIED = 0;
  POINT_OUTPUT_TYPE_POINTS = 1;
  POINT_OUTPUT_TYPE_CLOUD_POINTS = 2;
}
```

## `PointsToPointsRelationshipAssociatedData`

```proto
message PointsToPointsRelationshipAssociatedData {
  repeated PointName nominal_points = 1;
  repeated PointName actual_points = 2;
}
```

## `ProjectedPointGradient`

```proto
message ProjectedPointGradient {
  Vector projected_point = 1;
  Vector normal_vector = 2;
  Vector u_direction = 3;
  Vector v_direction = 4;
}
```

## `ProjectionOptions`

```proto
message ProjectionOptions {
  optional string projection_type = 1;
  optional bool ignore_edge_projections = 2;
  optional bool override_target_offsets = 3;
  optional double override_target_offsets_value = 4;
  optional bool add_extra_material_thickness = 5;
  optional double extra_material_thickness_value = 6;
}
```

## `RGBColorChannel`

```proto
enum RGBColorChannel {
  RGB_COLOR_CHANNEL_UNSPECIFIED = 0;
  RGB_COLOR_CHANNEL_RED = 1;
  RGB_COLOR_CHANNEL_GREEN = 2;
  RGB_COLOR_CHANNEL_BLUE = 3;
  RGB_COLOR_CHANNEL_INTENSITY = 4;
}
```

## `RGBFilterOperation`

```proto
enum RGBFilterOperation {
  RGB_FILTER_OPERATION_UNSPECIFIED = 0;
  RGB_FILTER_OPERATION_INCREMENTALLY_APPLY_FILTER = 1;
  RGB_FILTER_OPERATION_RESET_AND_APPLY_FILTER = 2;
  RGB_FILTER_OPERATION_RESET_ALL_CLOUD_POINTS_VISIBLE = 3;
}
```

## `RelWeightingMode`

```proto
enum RelWeightingMode {
  REL_WEIGHTING_MODE_UNSPECIFIED = 0;
  REL_WEIGHTING_MODE_NORMALIZE_EQUATION_COUNT = 1;
  REL_WEIGHTING_MODE_NORMALIZE_EQUATION_COUNT_AND_TOLERANCE_WIDTH = 2;
  REL_WEIGHTING_MODE_RESET_ALL_WEIGHTS = 3;
  REL_WEIGHTING_MODE_NORMALIZE_SQUARE_ROOT_EQUATION_COUNT = 4;
  REL_WEIGHTING_MODE_NORMALIZE_SQUARE_ROOT_AND_TOLERANCE_WIDTH = 5;
}
```

## `RelationshipAssociatedData`

```proto
message RelationshipAssociatedData {
  string relationship_type = 1;
  repeated PointName individual_points = 2;
  repeated CollectionObjectName point_groups = 3;
  repeated CollectionObjectName point_clouds = 4;
  repeated CollectionObjectName objects = 5;
}
```

## `RelationshipStatusFlags`

```proto
message RelationshipStatusFlags {
  bool dormant = 1;
  bool success = 2;
  bool measured = 3;
  bool failed = 4;
  bool unmeasured = 5;
}
```

## `RelationshipWatchWindowUdpSettings`

```proto
message RelationshipWatchWindowUdpSettings {
  optional bool enabled = 1;
  optional bool broadcast = 2;
  optional string ip_address = 3;
  optional int32 port = 4;
}
```

## `RenderModeType`

```proto
enum RenderModeType {
  RENDER_MODE_TYPE_UNSPECIFIED = 0;
  RENDER_MODE_TYPE_WIREFRAME = 1;
  RENDER_MODE_TYPE_HIDDEN_LINE_REMOVED = 2;
  RENDER_MODE_TYPE_SOLID_AND_EDGES = 3;
  RENDER_MODE_TYPE_SOLID = 4;
}
```

## `ReportOutputOptions`

```proto
message ReportOutputOptions {
  optional ReportOutputType output_type = 1;
  oneof destination {
    string external_path = 2;
    EmbeddedReportFile embedded_file = 3;
  }
}
```

## `ReportOutputType`

```proto
enum ReportOutputType {
  REPORT_OUTPUT_TYPE_UNSPECIFIED = 0;
  REPORT_OUTPUT_TYPE_NONE = 1;
  REPORT_OUTPUT_TYPE_SA_REPORT = 2;
  REPORT_OUTPUT_TYPE_SA_DOCUMENT = 3;
  REPORT_OUTPUT_TYPE_PDF = 4;
  REPORT_OUTPUT_TYPE_RTF = 5;
}
```

## `ReportPageSettings`

```proto
enum ReportPageSettings {
  REPORT_PAGE_SETTINGS_UNSPECIFIED = 0;
  REPORT_PAGE_SETTINGS_PORTRAIT = 1;
  REPORT_PAGE_SETTINGS_LANDSCAPE = 2;
}
```

## `ReportViewOptions`

```proto
message ReportViewOptions {
  optional ReportViewType view_type = 1;
  optional string collection_name = 2;
  optional string callout_name = 3;
}
```

## `ReportViewType`

```proto
enum ReportViewType {
  REPORT_VIEW_TYPE_UNSPECIFIED = 0;
  REPORT_VIEW_TYPE_NONE = 1;
  REPORT_VIEW_TYPE_CURRENT_VIEW = 2;
  REPORT_VIEW_TYPE_CALLOUT_VIEW = 3;
}
```

## `RobotActiveJointComponent`

```proto
enum RobotActiveJointComponent {
  ROBOT_ACTIVE_JOINT_COMPONENT_UNSPECIFIED = 0;
  ROBOT_ACTIVE_JOINT_COMPONENT_NONE = 1;
  ROBOT_ACTIVE_JOINT_COMPONENT_X = 2;
  ROBOT_ACTIVE_JOINT_COMPONENT_Y = 3;
  ROBOT_ACTIVE_JOINT_COMPONENT_Z = 4;
  ROBOT_ACTIVE_JOINT_COMPONENT_RX = 5;
  ROBOT_ACTIVE_JOINT_COMPONENT_RY = 6;
  ROBOT_ACTIVE_JOINT_COMPONENT_RZ = 7;
  ROBOT_ACTIVE_JOINT_COMPONENT_ALPHA = 8;
  ROBOT_ACTIVE_JOINT_COMPONENT_A = 9;
  ROBOT_ACTIVE_JOINT_COMPONENT_D = 10;
  ROBOT_ACTIVE_JOINT_COMPONENT_THETA = 11;
}
```

## `RobotCalibrationMetrics`

```proto
message RobotCalibrationMetrics {
  double xyz_max = 1;
  double xyz_average = 2;
  double xyz_rms = 3;
  double orient_max = 4;
  double orient_average = 5;
  double orient_rms = 6;
  double robustness = 7;
}
```

## `RobotModelLinkType`

```proto
enum RobotModelLinkType {
  ROBOT_MODEL_LINK_TYPE_UNSPECIFIED = 0;
  ROBOT_MODEL_LINK_TYPE_DH = 1;
  ROBOT_MODEL_LINK_TYPE_SIX_DOF = 2;
}
```

## `SaInteractionMode`

```proto
enum SaInteractionMode {
  SA_INTERACTION_MODE_UNSPECIFIED = 0;
  SA_INTERACTION_MODE_MANUAL = 1;
  SA_INTERACTION_MODE_AUTOMATIC = 2;
  SA_INTERACTION_MODE_SILENT = 3;
}
```

## `ScalarToleranceLimit`

```proto
message ScalarToleranceLimit {
  optional bool enabled = 1;
  optional double value = 2;
}
```

## `ShowUsmnDialog`

```proto
enum ShowUsmnDialog {
  SHOW_USMN_DIALOG_UNSPECIFIED = 0;
  SHOW_USMN_DIALOG_NO = 1;
  SHOW_USMN_DIALOG_YES = 2;
  SHOW_USMN_DIALOG_ON_TOLERANCE_VIOLATION = 3;
}
```

## `SigmoidalGapFitConstraints`

```proto
message SigmoidalGapFitConstraints {
  bool use_sigmoidal_gap_constraints = 1;
  double minimum_gap_boundary = 2;
  double minimum_gap_weight = 3;
  double maximum_gap_boundary = 4;
  double maximum_gap_weight = 5;
  double nominal_gap = 6;
  double nominal_gap_weight = 7;
  double gradient_steepness_factor = 8;
}
```

## `SlotType`

```proto
enum SlotType {
  SLOT_TYPE_UNSPECIFIED = 0;
  SLOT_TYPE_ROUND = 1;
  SLOT_TYPE_SQUARE = 2;
}
```

## `SolverMode`

```proto
enum SolverMode {
  SOLVER_MODE_UNSPECIFIED = 0;
  SOLVER_MODE_GAUSS_NEWTON = 1;
  SOLVER_MODE_LEVENBERG_MARQUARDT = 2;
  SOLVER_MODE_GAUSS_NEWTON_WITH_GRADIENT_SEARCH = 3;
  SOLVER_MODE_DIRECT_SEARCH = 4;
}
```

## `SphereFitComputationMode`

```proto
enum SphereFitComputationMode {
  SPHERE_FIT_COMPUTATION_MODE_UNSPECIFIED = 0;
  SPHERE_FIT_COMPUTATION_MODE_STANDARD = 1;
  SPHERE_FIT_COMPUTATION_MODE_MAX_INSCRIBED = 2;
  SPHERE_FIT_COMPUTATION_MODE_MIN_CIRCUMSCRIBED = 3;
}
```

## `SurfaceAnalysisMode`

```proto
enum SurfaceAnalysisMode {
  SURFACE_ANALYSIS_MODE_UNSPECIFIED = 0;
  SURFACE_ANALYSIS_MODE_NONE = 1;
  SURFACE_ANALYSIS_MODE_RELATIONSHIP = 2;
  SURFACE_ANALYSIS_MODE_NORMALS = 3;
  SURFACE_ANALYSIS_MODE_CURVATURE = 4;
  SURFACE_ANALYSIS_MODE_DEVIATION_RMS = 5;
  SURFACE_ANALYSIS_MODE_DEVIATION_MAX = 6;
  SURFACE_ANALYSIS_MODE_DEVIATION_AVERAGE = 7;
  SURFACE_ANALYSIS_MODE_DEVIATION_MIN = 8;
  SURFACE_ANALYSIS_MODE_DEVIATION_MAX_ABSOLUTE = 9;
  SURFACE_ANALYSIS_MODE_DEVIATION_MAX_DELTA = 10;
  SURFACE_ANALYSIS_MODE_PSEUDO_SURFACE = 11;
}
```

## `SurfaceDissectionMode`

```proto
enum SurfaceDissectionMode {
  SURFACE_DISSECTION_MODE_UNSPECIFIED = 0;
  SURFACE_DISSECTION_MODE_ENTIRE_SOLID = 1;
  SURFACE_DISSECTION_MODE_SELECT_FACES = 2;
}
```

## `SurfaceFaceList`

```proto
message SurfaceFaceList {
  string value = 1;
}
```

## `SurveyTargetType`

```proto
enum SurveyTargetType {
  SURVEY_TARGET_TYPE_UNSPECIFIED = 0;
  SURVEY_TARGET_TYPE_TRIANGLE = 1;
  SURVEY_TARGET_TYPE_CIRCLE = 2;
}
```

## `SystemString`

```proto
enum SystemString {
  SYSTEM_STRING_UNSPECIFIED = 0;
  SYSTEM_STRING_SA_VERSION = 1;
  SYSTEM_STRING_XIT_FILENAME = 2;
  SYSTEM_STRING_MP_FILENAME = 3;
  SYSTEM_STRING_MP_FILENAME_FULL_PATH = 4;
  SYSTEM_STRING_DATE_AND_TIME = 5;
  SYSTEM_STRING_DATE = 6;
  SYSTEM_STRING_DATE_SHORT = 7;
  SYSTEM_STRING_TIME = 8;
  SYSTEM_STRING_KEY_SERIAL_NUMBER = 9;
  SYSTEM_STRING_COMPANY_NAME = 10;
  SYSTEM_STRING_USER_NAME = 11;
  SYSTEM_STRING_LICENSE_USER_NAME = 12;
  SYSTEM_STRING_WINDOWS_USER_NAME = 13;
  SYSTEM_STRING_COMPUTER_NAME = 14;
}
```

## `TargetComputationMethod`

```proto
enum TargetComputationMethod {
  TARGET_COMPUTATION_METHOD_UNSPECIFIED = 0;
  TARGET_COMPUTATION_METHOD_USE_MOST_RECENT_SHOT_FROM_EACH_FACE = 1;
  TARGET_COMPUTATION_METHOD_USE_ONLY_MOST_RECENT_SHOT = 2;
  TARGET_COMPUTATION_METHOD_DO_NOT_CHANGE_PRIOR_MEASUREMENTS = 3;
  TARGET_COMPUTATION_METHOD_FORCE_NEW_POINT_FOR_EACH_MEASUREMENT = 4;
  TARGET_COMPUTATION_METHOD_REMOVE_ALL_PRIOR_SHOTS = 5;
  TARGET_COMPUTATION_METHOD_DEACTIVATE_ALL_PRIOR_SHOTS = 6;
}
```

## `TcpFixtureUncertainties`

```proto
message TcpFixtureUncertainties {
  bool solution_valid = 1;
  optional Transform refined_tcp_in_working = 2;
  optional DoubleVector6 uncertainties_in_tcp_fixture_frame = 3;
  optional DoubleVector6 uncertainties_in_working_frame = 4;
  double rms_error = 5;
  double maximum_absolute_error = 6;
  double goodness_of_fit = 7;
  double robustness = 8;
  repeated string result_notes = 9;
}
```

## `TemperatureUnits`

```proto
enum TemperatureUnits {
  TEMPERATURE_UNITS_UNSPECIFIED = 0;
  TEMPERATURE_UNITS_FAHRENHEIT = 1;
  TEMPERATURE_UNITS_CELSIUS = 2;
}
```

## `ToleranceLimit`

```proto
message ToleranceLimit {
  optional bool enabled = 1;
  optional double value = 2;
}
```

## `ToleranceScalarOptions`

```proto
message ToleranceScalarOptions {
  ScalarToleranceLimit high = 1;
  ScalarToleranceLimit low = 2;
}
```

## `ToleranceVectorOptions`

```proto
message ToleranceVectorOptions {
  optional ToleranceLimit high_x = 1;
  optional ToleranceLimit high_y = 2;
  optional ToleranceLimit high_z = 3;
  optional ToleranceLimit high_magnitude = 4;
  optional ToleranceLimit low_x = 5;
  optional ToleranceLimit low_y = 6;
  optional ToleranceLimit low_z = 7;
  optional ToleranceLimit low_magnitude = 8;
}
```

## `Transform`

```proto
message Transform {
  repeated double values = 1;
}
```

## `TranslucencyType`

```proto
enum TranslucencyType {
  TRANSLUCENCY_TYPE_UNSPECIFIED = 0;
  TRANSLUCENCY_TYPE_SOLID = 1;
  TRANSLUCENCY_TYPE_TRANSLUCENT = 2;
  TRANSLUCENCY_TYPE_WIREFRAME = 3;
}
```

## `UncertaintyCovarianceMatrix`

```proto
message UncertaintyCovarianceMatrix {
  optional DoubleVector6 row_1 = 1;
  optional DoubleVector6 row_2 = 2;
  optional DoubleVector6 row_3 = 3;
  optional DoubleVector6 row_4 = 4;
  optional DoubleVector6 row_5 = 5;
  optional DoubleVector6 row_6 = 6;
}
```

## `Vector`

```proto
message Vector {
  optional double x = 1;
  optional double y = 2;
  optional double z = 3;
}
```

## `VectorName`

```proto
message VectorName {
  optional string collection_name = 1;
  optional string group_name = 2;
  optional string name = 3;
}
```

## `ViewName`

```proto
message ViewName {
  optional string name = 1;
}
```

## `WcfAxis`

```proto
enum WcfAxis {
  WCF_AXIS_UNSPECIFIED = 0;
  WCF_AXIS_X = 1;
  WCF_AXIS_Y = 2;
  WCF_AXIS_Z = 3;
}
```

## `WindowState`

```proto
enum WindowState {
  WINDOW_STATE_UNSPECIFIED = 0;
  WINDOW_STATE_MAXIMIZE = 1;
  WINDOW_STATE_MINIMIZE = 2;
  WINDOW_STATE_RESTORE = 3;
  WINDOW_STATE_SHOW = 4;
  WINDOW_STATE_HIDE = 5;
}
```

## `WorldTransform`

```proto
message WorldTransform {
  optional Transform transform = 1;
  optional double scale_factor = 2;
}
```

## `WrtlChannelStatus`

```proto
message WrtlChannelStatus {
  bool connection_status = 1;
  int32 active_channel = 2;
}
```

[Candidate Source](https://github.com/spatialanalyzer/briosa/tree/3306d43253a1e4e41b75b83360ad4f6f2b7f60b7/targets/2026.1.0529.7/proto/briosa)
