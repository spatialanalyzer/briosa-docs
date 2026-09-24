---
title: GDT Operations / GDT Analysis
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# GDT Operations / GDT Analysis

[SA 2026.1.0529.7](/api/python/gdt-analysis) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/gdt-analysis)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Get Feature Check Datum References {/* #get-feature-check-datum-references */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-datum-references) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-datum-references)

```python
async def get_feature_check_datum_references(
        self,
        feature_check: CollectionItemName,
    ) -> FeatureCheckDatumReferencesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Datum Measurements {/* #get-datum-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-datum-measurements) · [gRPC Contract](/api/grpc/gdt-analysis#get-datum-measurements)

```python
async def get_datum_measurements(
        self,
        datum: CollectionItemName,
    ) -> GdtMeasurements: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Datum Measurements {/* #set-datum-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-datum-measurements) · [gRPC Contract](/api/grpc/gdt-analysis#set-datum-measurements)

```python
async def set_datum_measurements(
        self,
        datum: CollectionItemName,
        point_names: Iterable[PointName],
        cloud_names: Iterable[CollectionObjectName],
        *,
        replace_existing_measurements: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Measurements {/* #get-feature-check-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-measurements) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-measurements)

```python
async def get_feature_check_measurements(
        self,
        feature_check: CollectionItemName,
    ) -> GdtMeasurements: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Measurements {/* #set-feature-check-measurements */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-measurements) · [gRPC Contract](/api/grpc/gdt-analysis#set-feature-check-measurements)

```python
async def set_feature_check_measurements(
        self,
        feature_check: CollectionItemName,
        point_names: Iterable[PointName],
        cloud_names: Iterable[CollectionObjectName],
        *,
        replace_existing_measurements: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Cylinder Eval Options {/* #get-feature-check-cylinder-eval-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-cylinder-eval-options) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-cylinder-eval-options)

```python
async def get_feature_check_cylinder_eval_options(
        self,
        feature_check: CollectionItemName,
    ) -> FeatureCheckCylinderEvalOptions: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Cylinder Eval Options {/* #set-feature-check-cylinder-eval-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-cylinder-eval-options) · [gRPC Contract](/api/grpc/gdt-analysis#set-feature-check-cylinder-eval-options)

```python
async def set_feature_check_cylinder_eval_options(
        self,
        feature_check: CollectionItemName,
        *,
        enable_actual_diameter_override: bool = False,
        actual_diameter_override: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Feature Inspection Auto Filter {/* #feature-inspection-auto-filter */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#feature-inspection-auto-filter) · [gRPC Contract](/api/grpc/gdt-analysis#feature-inspection-auto-filter)

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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Global Force Simultaneous Evaluation {/* #set-global-force-simultaneous-evaluation */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-global-force-simultaneous-evaluation) · [gRPC Contract](/api/grpc/gdt-analysis#set-global-force-simultaneous-evaluation)

```python
async def set_global_force_simultaneous_evaluation(
        self,
        *,
        global_simultaneous_evaluation: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Evaluate Feature Check {/* #evaluate-feature-check */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-check) · [gRPC Contract](/api/grpc/gdt-analysis#evaluate-feature-check)

```python
async def evaluate_feature_check(
        self,
        feature_check: CollectionItemName,
        *,
        perform_evaluation: bool = True,
        simultaneous_evaluation: bool = False,
    ) -> EvaluateFeatureCheckResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Evaluate Feature Checks {/* #evaluate-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#evaluate-feature-checks) · [gRPC Contract](/api/grpc/gdt-analysis#evaluate-feature-checks)

```python
async def evaluate_feature_checks(
        self,
        feature_check_list: Iterable[CollectionItemName],
        *,
        simultaneous_evaluation: bool = False,
        restrict_evaluations_to_listed_checks: bool = False,
    ) -> EvaluateFeatureChecksResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Feature Check Summary {/* #generate-feature-check-summary */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#generate-feature-check-summary) · [gRPC Contract](/api/grpc/gdt-analysis#generate-feature-check-summary)

```python
async def generate_feature_check_summary(
        self,
        feature_check_list: Iterable[CollectionItemName],
        *,
        summary_table_name: str = "GDT Feature Check Summary",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Feature Check Trapping {/* #startstop-feature-check-trapping */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#startstop-feature-check-trapping) · [gRPC Contract](/api/grpc/gdt-analysis#startstop-feature-check-trapping)

```python
async def start_stop_feature_check_trapping(
        self,
        feature_check: CollectionItemName,
        instrument_id: CollectionInstrumentId,
        *,
        start_trapping: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Datum Alignment for Feature Check {/* #enabledisable-datum-alignment-for-feature-check */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#enabledisable-datum-alignment-for-feature-check) · [gRPC Contract](/api/grpc/gdt-analysis#enabledisable-datum-alignment-for-feature-check)

```python
async def enable_disable_datum_alignment_for_feature_check(
        self,
        feature_check: CollectionItemName,
        *,
        enable_datum_alignment: bool = True,
        enable_custom_initial_alignment: bool = False,
        enable_initial_datum_alignment: bool = True,
        alignment: CollectionItemName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Datum Alignment {/* #datum-alignment */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#datum-alignment) · [gRPC Contract](/api/grpc/gdt-analysis#datum-alignment)

```python
async def datum_alignment(
        self,
        feature_check: CollectionItemName,
        objects_to_move: Iterable[CollectionObjectName],
        instruments_to_move: Iterable[CollectionInstrumentId],
        *,
        apply_feature_check_transform: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get GD&amp;T Options {/* #get-gdt-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-gdt-options) · [gRPC Contract](/api/grpc/gdt-analysis#get-gdt-options)

```python
async def get_gdt_options(
        self,
    ) -> GdtOptions: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set GD&amp;T Options {/* #set-gdt-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-gdt-options) · [gRPC Contract](/api/grpc/gdt-analysis#set-gdt-options)

```python
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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set GD&amp;T Extended Options {/* #set-gdt-extended-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-gdt-extended-options) · [gRPC Contract](/api/grpc/gdt-analysis#set-gdt-extended-options)

```python
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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get GD&amp;T Extended Options {/* #get-gdt-extended-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-gdt-extended-options) · [gRPC Contract](/api/grpc/gdt-analysis#get-gdt-extended-options)

```python
async def get_gdt_extended_options(
        self,
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Datums/Feature Checks from Annotations {/* #refresh-datumsfeature-checks-from-annotations */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#refresh-datumsfeature-checks-from-annotations) · [gRPC Contract](/api/grpc/gdt-analysis#refresh-datumsfeature-checks-from-annotations)

```python
async def refresh_datums_feature_checks_from_annotations(
        self,
        collection: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Reporting Frame {/* #set-feature-check-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-frame) · [gRPC Contract](/api/grpc/gdt-analysis#set-feature-check-reporting-frame)

```python
async def set_feature_check_reporting_frame(
        self,
        feature_check: CollectionItemName,
        reporting_frame: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Reporting Frame {/* #get-feature-check-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-frame) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-reporting-frame)

```python
async def get_feature_check_reporting_frame(
        self,
        feature_check: CollectionItemName,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Feature Check Reporting Options {/* #set-feature-check-reporting-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-options) · [gRPC Contract](/api/grpc/gdt-analysis#set-feature-check-reporting-options)

```python
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
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Feature Check Reporting Options {/* #get-feature-check-reporting-options */}

[MP Catalog](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-options) · [gRPC Contract](/api/grpc/gdt-analysis#get-feature-check-reporting-options)

```python
async def get_feature_check_reporting_options(
        self,
        feature_check: CollectionItemName,
    ) -> FeatureCheckReportingOptions: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Feature Check and Datum Data {/* #feature-check-and-datum-data */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Filtering and Evaluation {/* #filtering-and-evaluation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Trapping and Datum Alignment {/* #trapping-and-datum-alignment */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## GD&T Options {/* #gdt-options */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Reporting and Annotation Refresh {/* #reporting-and-annotation-refresh */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
