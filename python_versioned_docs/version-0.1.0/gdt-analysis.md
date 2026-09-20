---
title: GDT Operations / GDT Analysis
description: Briosa 0.1.0 Python APIs for selected GDT Analysis MP commands.
toc_max_heading_level: 2
---

# GDT Operations / GDT Analysis

## Shared Types

```python
class GdtDistanceBetweenMode(Enum):
    CENTROID = "Centroid"
    MIN_MAX = "Min/Max"

class GdtEvaluationMethod(Enum):
    NONE = "None"
    ASME_1994 = "ASME 1994"
    ASME_2009 = "ASME 2009"
    ASME_2018 = "ASME 2018"
    ISO_1983 = "ISO 1983"
    ISO_2004 = "ISO 2004"
    ISO_2017 = "ISO 2017"

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

@dataclass(frozen=True, slots=True, kw_only=True)
class GdtMeasurements:
    point_names: list[PointName]
    cloud_names: list[CollectionObjectName]

@dataclass(frozen=True, slots=True, kw_only=True)
class FeatureCheckDatumReference:
    reference_string: str
    cad_faces: str
    sa_objects: list[CollectionObjectName]
    auxiliary_sa_objects: list[CollectionObjectName]
    geometry_relationships: list[CollectionItemName]
    auxiliary_geometry_relationships: list[CollectionItemName]

@dataclass(frozen=True, slots=True, kw_only=True)
class FeatureCheckDatumReferencesResult:
    datum_1: FeatureCheckDatumReference
    datum_2: FeatureCheckDatumReference
    datum_3: FeatureCheckDatumReference

@dataclass(frozen=True, slots=True, kw_only=True)
class FeatureCheckCylinderEvalOptions:
    enable_actual_diameter_override: bool
    actual_diameter_override: float

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

@dataclass(frozen=True, slots=True, kw_only=True)
class EvaluateFeatureChecksResult:
    total_passed: int
    total_failed: int
    total_incomplete: int

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

The evaluation result preserves all 19 MP outputs and uses `WorldTransform`
values for the upper and lower evaluation delta transforms.

## Feature Check and Datum Data

```python
async def get_feature_check_datum_references(
    self, feature_check: CollectionItemName,
) -> FeatureCheckDatumReferencesResult: ...

async def get_datum_measurements(
    self, datum: CollectionItemName,
) -> GdtMeasurements: ...

async def set_datum_measurements(
    self,
    datum: CollectionItemName,
    point_names: Iterable[PointName],
    cloud_names: Iterable[CollectionObjectName],
    *,
    replace_existing_measurements: bool = False,
) -> None: ...

async def get_feature_check_measurements(
    self, feature_check: CollectionItemName,
) -> GdtMeasurements: ...

async def set_feature_check_measurements(
    self,
    feature_check: CollectionItemName,
    point_names: Iterable[PointName],
    cloud_names: Iterable[CollectionObjectName],
    *,
    replace_existing_measurements: bool = False,
) -> None: ...

async def get_feature_check_cylinder_eval_options(
    self, feature_check: CollectionItemName,
) -> FeatureCheckCylinderEvalOptions: ...

async def set_feature_check_cylinder_eval_options(
    self,
    feature_check: CollectionItemName,
    *,
    enable_actual_diameter_override: bool = False,
    actual_diameter_override: float = 0.0,
) -> None: ...
```

```python
references = await briosa.gdt_operations.get_feature_check_datum_references(feature_check)
datum_measurements = await briosa.gdt_operations.get_datum_measurements(datum)
await briosa.gdt_operations.set_datum_measurements(datum, point_names, cloud_names)
check_measurements = await briosa.gdt_operations.get_feature_check_measurements(feature_check)
await briosa.gdt_operations.set_feature_check_measurements(
    feature_check,
    point_names,
    cloud_names,
)
cylinder_options = await briosa.gdt_operations.get_feature_check_cylinder_eval_options(
    feature_check,
)
await briosa.gdt_operations.set_feature_check_cylinder_eval_options(
    feature_check,
    enable_actual_diameter_override=True,
    actual_diameter_override=25.0,
)
```

## Filtering and Evaluation

```python
async def feature_inspection_auto_filter(
    self,
    *,
    point_names: Iterable[PointName] | None = None,
    group_names: Iterable[CollectionObjectName] | None = None,
    cloud_names: Iterable[CollectionObjectName] | None = None,
    surface_offset: float = 0.1,
    edge_offset: float = 0.1,
    offset_direction: OffsetDirectionType = OffsetDirectionType.BOTH,
    include_points_within_cylinder_axis_proximity: bool = False,
    enforce_max_points_per_face_in_output: bool = False,
    max_points_per_face: int = 0,
    feature_check_name_list: Iterable[CollectionItemName] | None = None,
    include_datums: bool = True,
    create_cloud_for_each_datum_or_check: bool = False,
) -> None: ...

async def set_global_force_simultaneous_evaluation(
    self, global_simultaneous_evaluation: bool = False,
) -> None: ...

async def evaluate_feature_check(
    self,
    feature_check: CollectionItemName,
    *,
    perform_evaluation: bool = True,
    simultaneous_evaluation: bool = False,
) -> EvaluateFeatureCheckResult: ...

async def evaluate_feature_checks(
    self,
    feature_check_list: Iterable[CollectionItemName],
    *,
    simultaneous_evaluation: bool = False,
    restrict_evaluations_to_listed_checks: bool = False,
) -> EvaluateFeatureChecksResult: ...

async def generate_feature_check_summary(
    self,
    feature_check_list: Iterable[CollectionItemName],
    *,
    summary_table_name: str = "GDT Feature Check Summary",
) -> None: ...
```

```python
await briosa.gdt_operations.feature_inspection_auto_filter(
    point_names=measured_points,
    feature_check_name_list=feature_checks,
)
await briosa.gdt_operations.set_global_force_simultaneous_evaluation(True)
result = await briosa.gdt_operations.evaluate_feature_check(feature_check)
totals = await briosa.gdt_operations.evaluate_feature_checks(feature_checks)
await briosa.gdt_operations.generate_feature_check_summary(feature_checks)
```

## Trapping and Datum Alignment

```python
async def start_stop_feature_check_trapping(
    self,
    feature_check: CollectionItemName,
    instrument_id: CollectionInstrumentId,
    *,
    start_trapping: bool = False,
) -> None: ...

async def enable_disable_datum_alignment_for_feature_check(
    self,
    feature_check: CollectionItemName,
    *,
    enable_datum_alignment: bool = True,
    enable_custom_initial_alignment: bool = False,
    enable_initial_datum_alignment: bool = True,
    alignment: CollectionItemName | None = None,
) -> None: ...

async def datum_alignment(
    self,
    feature_check: CollectionItemName,
    objects_to_move: Iterable[CollectionObjectName],
    instruments_to_move: Iterable[CollectionInstrumentId],
    *,
    apply_feature_check_transform: bool = False,
) -> None: ...
```

```python
await briosa.gdt_operations.start_stop_feature_check_trapping(
    feature_check,
    instrument_id,
    start_trapping=True,
)
await briosa.gdt_operations.enable_disable_datum_alignment_for_feature_check(feature_check)
await briosa.gdt_operations.datum_alignment(
    feature_check,
    objects_to_move,
    instruments_to_move,
)
```

Briosa does not retain a parallel model of trapping or alignment state and does
not add movement safeguards.

## GD&T Options

```python
async def get_gdt_options(self) -> GdtOptions: ...

async def set_gdt_options(
    self,
    *,
    use_high_points: bool = False,
    extrapolate_axial_extent: bool = True,
    exclude_from_auto_evaluation: bool = True,
    distance_between_mode: GdtDistanceBetweenMode = GdtDistanceBetweenMode.CENTROID,
    evaluation_method: GdtEvaluationMethod = GdtEvaluationMethod.NONE,
    create_actual_features: bool = False,
    create_solved_points: bool = False,
    cross_section_criteria: float = 0.039370,
    enable_auto_feature_detection: bool = True,
) -> None: ...

async def set_gdt_extended_options(
    self,
    *,
    use_extended_options: bool = True,
    circle: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
    cone: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
    cylinder: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
    ellipse: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
    line: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
    open_slot: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
    plane: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
    slot: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
    sphere: GdtExtendedEvaluationMethod = GdtExtendedEvaluationMethod.LEAST_SQUARES,
) -> None: ...

async def get_gdt_extended_options(self) -> bool: ...
```

```python
options = await briosa.gdt_operations.get_gdt_options()
await briosa.gdt_operations.set_gdt_options()
await briosa.gdt_operations.set_gdt_extended_options()
extended_options_enabled = await briosa.gdt_operations.get_gdt_extended_options()
```

The exact getter returns seven `GdtOptions` properties;
`distance_between_mode` and `evaluation_method` are `None`. The extended getter
returns only `Use Extended Options`; each setter geometry accepts only its
documented subset of the shared extended-method enum.

## Reporting and Annotation Refresh

```python
async def refresh_datums_feature_checks_from_annotations(
    self, collection: CollectionName,
) -> None: ...

async def set_feature_check_reporting_frame(
    self,
    feature_check: CollectionItemName,
    reporting_frame: CollectionObjectName,
) -> None: ...

async def get_feature_check_reporting_frame(
    self, feature_check: CollectionItemName,
) -> CollectionObjectName: ...

async def set_feature_check_reporting_options(
    self,
    feature_check: CollectionItemName,
    *,
    show_feature_control_frame_summary: bool = True,
    include_title: bool = False,
    show_datum_and_tolerance_summary: bool = False,
    show_feature_summary: bool = False,
    only_create_failed_vectors: bool = False,
    show_point_details_summary: bool = False,
    show_lower_tier_tables: bool = False,
) -> None: ...

async def get_feature_check_reporting_options(
    self, feature_check: CollectionItemName,
) -> FeatureCheckReportingOptions: ...
```

```python
await briosa.gdt_operations.refresh_datums_feature_checks_from_annotations(collection)
await briosa.gdt_operations.set_feature_check_reporting_frame(feature_check, reporting_frame)
frame = await briosa.gdt_operations.get_feature_check_reporting_frame(feature_check)
await briosa.gdt_operations.set_feature_check_reporting_options(feature_check)
reporting = await briosa.gdt_operations.get_feature_check_reporting_options(feature_check)
```

:::warning[Partial Reporting-Options Contract]

The exact SDK cannot bind `Vector Creation`. These coroutines omit it and leave
the current SA setting unchanged. The getter returns the seven available
Boolean options.

:::

None of the mutation or evaluation calls is automatically replayed after an
unknown execution outcome.

[Catalog](/mp-command-catalog/commands/gdt-analysis) · [gRPC](/api/grpc/0.5.1/gdt-analysis)
