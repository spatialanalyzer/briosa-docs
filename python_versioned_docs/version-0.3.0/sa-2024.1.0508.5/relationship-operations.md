---
title: Relationship Operations
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Relationship Operations

[SA 2026.1.0529.7](/api/python/relationship-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/relationship-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Enable/Disable Relationships for Optimization {/* #enabledisable-relationships-for-optimization */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#enabledisable-relationships-for-optimization)

```python
async def enable_disable_relationships_for_optimization(
        self,
        relationships: Iterable[CollectionItemName],
        *,
        enable: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Geom Relationship Ignore Input Points {/* #geom-relationship-ignore-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#geom-relationship-ignore-input-points)

```python
async def geom_relationship_ignore_input_points(
        self,
        relationship_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Geom Relationship Reuse Ignored Input Points {/* #geom-relationship-reuse-ignored-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#geom-relationship-reuse-ignored-input-points)

```python
async def geom_relationship_reuse_ignored_input_points(
        self,
        relationship_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Auto Vectors {/* #get-geom-relationship-auto-vectors */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-auto-vectors)

```python
async def get_geom_relationship_auto_vectors(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetGeomRelationshipAutoVectorsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `auto_vectors_nominal_enabled` | MP qualifier: AVN. |
| `auto_vectors_nominal_name` | MP qualifier: AVN. |
| `auto_vectors_fit_enabled` | MP qualifier: AVF. |
| `auto_vectors_fit_name` | MP qualifier: AVF. |

## Get Geom Relationship Cardinal Points {/* #get-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-cardinal-points)

```python
async def get_geom_relationship_cardinal_points(
        self,
        relationship_name: CollectionObjectName,
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Criteria {/* #get-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria)

```python
async def get_geom_relationship_criteria(
        self,
        relationship_name: CollectionObjectName,
        *,
        criteria: str = "",
    ) -> GetGeomRelationshipCriteriaResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Measured Avg Point {/* #get-geom-relationship-measured-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-avg-point)

```python
async def get_geom_relationship_measured_avg_point(
        self,
        relationship_name: CollectionObjectName,
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Measured Geometry {/* #get-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-geometry)

```python
async def get_geom_relationship_measured_geometry(
        self,
        relationship_name: CollectionObjectName,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Nominal Avg Point {/* #get-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-avg-point)

```python
async def get_geom_relationship_nominal_avg_point(
        self,
        relationship_name: CollectionObjectName,
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Nominal Geometry {/* #get-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-geometry)

```python
async def get_geom_relationship_nominal_geometry(
        self,
        relationship_name: CollectionObjectName,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Point List {/* #get-geom-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-point-list)

```python
async def get_geom_relationship_point_list(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetGeomRelationshipPointListResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Projection Plane {/* #get-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-projection-plane)

```python
async def get_geom_relationship_projection_plane(
        self,
        relationship_name: CollectionObjectName,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Cut Status {/* #get-pipe-relationship-cut-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-cut-status)

```python
async def get_pipe_relationship_cut_status(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetPipeRelationshipCutStatusResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Properties {/* #get-pipe-relationship-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-properties)

```python
async def get_pipe_relationship_properties(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetPipeRelationshipPropertiesResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Weights {/* #get-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-weights)

```python
async def get_pipe_relationship_weights(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetPipeRelationshipWeightsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Fit Constraints (Scalar Type) {/* #get-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-fit-constraints-scalar-type)

```python
async def get_relationship_fit_constraints_scalar_type(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetRelationshipFitConstraintsScalarTypeResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Outlier Rejection (Scalar Type) {/* #get-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-outlier-rejection-scalar-type)

```python
async def get_relationship_outlier_rejection_scalar_type(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetRelationshipOutlierRejectionScalarTypeResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Projection Options {/* #get-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-projection-options)

```python
async def get_relationship_projection_options(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetRelationshipProjectionOptionsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Reporting Frame {/* #get-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-reporting-frame)

```python
async def get_relationship_reporting_frame(
        self,
        relationship_name: CollectionObjectName,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Sub Sampling Options {/* #get-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-sub-sampling-options)

```python
async def get_relationship_sub_sampling_options(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetRelationshipSubSamplingOptionsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Tolerance (Scalar Type) {/* #get-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-scalar-type)

```python
async def get_relationship_tolerance_scalar_type(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetRelationshipToleranceScalarTypeResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Tolerance (Vector Type) {/* #get-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-vector-type)

```python
async def get_relationship_tolerance_vector_type(
        self,
        relationship_name: CollectionObjectName,
    ) -> GetRelationshipToleranceVectorTypeResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Type {/* #get-relationship-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-type)

```python
async def get_relationship_type(
        self,
        relationship_name: CollectionObjectName,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Weighting {/* #get-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-weighting)

```python
async def get_relationship_weighting(
        self,
        relationship_name: CollectionObjectName,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Pipe Fitting Relationship {/* #make-pipe-fitting-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-pipe-fitting-relationship)

```python
async def make_pipe_fitting_relationship(
        self,
        relationship_name: CollectionObjectName,
        pipe_1_object_name: CollectionObjectName,
        pipe_2_object_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Pipe Relationship Cut {/* #make-pipe-relationship-cut */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-pipe-relationship-cut)

```python
async def make_pipe_relationship_cut(
        self,
        relationship_name: CollectionObjectName,
        *,
        pipe_1_make_cut: bool = True,
        pipe_1_create_frame: bool = False,
        pipe_1_frame_name: CollectionObjectName,
        pipe_2_make_cut: bool = True,
        pipe_2_create_frame: bool = False,
        pipe_2_frame_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Pipe Relationship Force Cut to Frame {/* #pipe-relationship-force-cut-to-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#pipe-relationship-force-cut-to-frame)

```python
async def pipe_relationship_force_cut_to_frame(
        self,
        relationship_name: CollectionObjectName,
        *,
        pipe_1_force_cut_to_frame: bool = True,
        pipe_1_frame_name: CollectionObjectName,
        pipe_2_force_cut_to_frame: bool = True,
        pipe_2_frame_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Auto Vectors Nominal (AVN) {/* #set-geom-relationship-auto-vectors-nominal-avn */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

```python
async def set_geom_relationship_auto_vectors_nominal_avn(
        self,
        relationship_name: CollectionObjectName,
        *,
        create_auto_vectors_avn: bool = False,
        points_type: PointFilterInputType = PointFilterInputType.CARDINAL_POINTS,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Cardinal Points {/* #set-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-cardinal-points)

```python
async def set_geom_relationship_cardinal_points(
        self,
        relationship_name: CollectionObjectName,
        *,
        create_cardinal_pts_when_fitting: bool = True,
        prefix_cardinal_pts_name_with_rel_name: bool = True,
        cardinal_pts_group_name: str = "GR-Cardinal Pts",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Criteria {/* #set-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-criteria)

```python
async def set_geom_relationship_criteria(
        self,
        relationship_name: CollectionObjectName,
        *,
        criteria: str = "",
        show_in_report: bool = True,
        tolerance_options: ToleranceScalarOptions = ToleranceScalarOptions.DEFAULT,
        optimization_delta_weight: float = 0.000000,
        optimization_out_of_tolerance_weight: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Measured Geometry {/* #set-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-measured-geometry)

```python
async def set_geom_relationship_measured_geometry(
        self,
        relationship_name: CollectionObjectName,
        measured_geometry: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Nominal Avg Point {/* #set-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-avg-point)

```python
async def set_geom_relationship_nominal_avg_point(
        self,
        relationship_name: CollectionObjectName,
        *,
        compare_to_nominal: bool = True,
        nominal_average_point: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Nominal Geometry {/* #set-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-geometry)

```python
async def set_geom_relationship_nominal_geometry(
        self,
        relationship_name: CollectionObjectName,
        *,
        compare_to_nominal: bool = True,
        nominal_geometry: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Projection Plane {/* #set-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-projection-plane)

```python
async def set_geom_relationship_projection_plane(
        self,
        relationship_name: CollectionObjectName,
        *,
        project_to_plane: bool = True,
        projection_plane_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object to Object Direction Relationship Fit Constraints {/* #set-object-to-object-direction-relationship-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

```python
async def set_object_to_object_direction_relationship_fit_constraints(
        self,
        relationship_name: CollectionObjectName,
        *,
        angle_between_vectors_fit_constraints: FitConstraintScalarOptions = FitConstraintScalarOptions.DEFAULT,
        mutual_perpendicular_length_fit_constraints: FitConstraintScalarOptions = FitConstraintScalarOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object to Object Direction Relationship Tolerances {/* #set-object-to-object-direction-relationship-tolerances */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-tolerances)

```python
async def set_object_to_object_direction_relationship_tolerances(
        self,
        relationship_name: CollectionItemName,
        *,
        angle_between_vectors_tolerances: ToleranceScalarOptions | None = None,
        mutual_perpendicular_length_tolerances: ToleranceScalarOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Pipe Relationship Segment Properties {/* #set-pipe-relationship-segment-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-segment-properties)

```python
async def set_pipe_relationship_segment_properties(
        self,
        relationship_name: CollectionObjectName,
        *,
        pipe_1_inner_diameter: float = 0.000000,
        pipe_1_outer_diameter: float = 0.000000,
        pipe_1_cut_begin: float = 0.000000,
        pipe_1_cut_end: float = 0.000000,
        pipe_2_inner_diameter: float = 0.000000,
        pipe_2_outer_diameter: float = 0.000000,
        pipe_2_cut_begin: float = 0.000000,
        pipe_2_cut_end: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Pipe Relationship Weights {/* #set-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-weights)

```python
async def set_pipe_relationship_weights(
        self,
        relationship_name: CollectionObjectName,
        *,
        overall_weight: float = 1.000000,
        axis_offset: float = 2.000000,
        axis_alignment: float = 1.000000,
        center_pull: float = 0.100000,
        out_of_material_weight: float = 10.000000,
        out_of_material_offset: float = 1.000000,
        constrain_region_at_od: bool = False,
        constrain_id_od_overlap: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Auto Vectors Fit (AVF) {/* #set-relationship-auto-vectors-fit-avf */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-auto-vectors-fit-avf)

```python
async def set_relationship_auto_vectors_fit_avf(
        self,
        relationship_name: CollectionObjectName,
        *,
        create_auto_vectors_avf: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Desired Meas Count {/* #set-relationship-desired-meas-count */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-desired-meas-count)

```python
async def set_relationship_desired_meas_count(
        self,
        relationship_name: CollectionObjectName,
        *,
        desired_measurement_count: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Dormant Status {/* #set-relationship-dormant-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-dormant-status)

```python
async def set_relationship_dormant_status(
        self,
        relationships: Iterable[CollectionItemName],
        *,
        dormant_status: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Fit Constraints (Scalar Type) {/* #set-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-fit-constraints-scalar-type)

```python
async def set_relationship_fit_constraints_scalar_type(
        self,
        relationship_name: CollectionObjectName,
        *,
        fit_constraint_options: FitConstraintScalarOptions = FitConstraintScalarOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Orientation Fit Constraints (Vector Type) {/* #set-relationship-orientation-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

```python
async def set_relationship_orientation_fit_constraints_vector_type(
        self,
        relationship_name: CollectionObjectName,
        orientation_vector_constraint: ToleranceVectorOptions,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Outlier Rejection (Scalar Type) {/* #set-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-outlier-rejection-scalar-type)

```python
async def set_relationship_outlier_rejection_scalar_type(
        self,
        relationship_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Position Fit Constraints (Vector Type) {/* #set-relationship-position-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-position-fit-constraints-vector-type)

```python
async def set_relationship_position_fit_constraints_vector_type(
        self,
        relationship_name: CollectionObjectName,
        position_vector_constraint: ToleranceVectorOptions,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Projection Options {/* #set-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-projection-options)

```python
async def set_relationship_projection_options(
        self,
        relationship_name: CollectionObjectName,
        *,
        projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Reporting Frame {/* #set-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-reporting-frame)

```python
async def set_relationship_reporting_frame(
        self,
        relationship_name: CollectionObjectName,
        reporting_frame: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Sub Sampling Options {/* #set-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-sub-sampling-options)

```python
async def set_relationship_sub_sampling_options(
        self,
        relationship_name: CollectionObjectName,
        *,
        use_every_ith_point: bool = False,
        i_value: int = 20,
        use_no_more_than_n_points: bool = True,
        n_value: int = 10000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Tolerance (Scalar Type) {/* #set-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-scalar-type)

```python
async def set_relationship_tolerance_scalar_type(
        self,
        relationship_name: CollectionObjectName,
        *,
        tolerance_options: ToleranceScalarOptions = ToleranceScalarOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Tolerance (Vector Type) {/* #set-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-vector-type)

```python
async def set_relationship_tolerance_vector_type(
        self,
        relationship_name: CollectionObjectName,
        vector_tolerance: ToleranceVectorOptions,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Voxel Cloud Display {/* #set-relationship-voxel-cloud-display */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-voxel-cloud-display)

```python
async def set_relationship_voxel_cloud_display(
        self,
        relationship_name: CollectionObjectName,
        *,
        enable_voxel_cloud_display: bool = True,
        voxel_size: float = -1.000000,
        min_pts_count_per_voxel: int = 3,
        voxel_rendering_diameter: float = 125.000000,
        surface_analysis_mode: SurfaceAnalysisMode = SurfaceAnalysisMode.RELATIONSHIP,
        colorization_options: ColorizationOptions = ColorizationOptions.DEFAULT,
        show_color_bar_in_view: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `voxel_size` | -1.0 selects automatic detection. |
| `voxel_rendering_diameter` | -1.0 selects fast rendering. |

## Set Relationship Weighting {/* #set-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-weighting)

```python
async def set_relationship_weighting(
        self,
        relationship_name: CollectionObjectName,
        *,
        weight: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Weights Normalized {/* #set-relationship-weights-normalized */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-weights-normalized)

```python
async def set_relationship_weights_normalized(
        self,
        collection_name: CollectionName,
        *,
        pick_weighting_mode: RelWeightingMode = RelWeightingMode.NORMALIZE_EQUATION_COUNT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Geometry Relationship Summary {/* #generate-geometry-relationship-summary */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#generate-geometry-relationship-summary)

```python
async def generate_geometry_relationship_summary(
        self,
        relationship_ref_list: Iterable[CollectionItemName],
        *,
        summary_table_name: str = "Geometry Relationship Summary",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Edit Geometry Relationship Point List {/* #edit-geometry-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#edit-geometry-relationship-point-list)

```python
async def edit_geometry_relationship_point_list(
        self,
        relationship_name: CollectionItemName,
        *,
        point_edit_mode: GeometryRelationshipPointEditMode = GeometryRelationshipPointEditMode.POINT_LIST,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Geometry Relationship Outlier Cloud Points {/* #filter-geometry-relationship-outlier-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

```python
async def filter_geometry_relationship_outlier_cloud_points(
        self,
        relationship_name: CollectionItemName,
        *,
        sigma_threshold: float = 3.0,
        modify_existing_input_clouds: bool = False,
    ) -> GeometryRelationshipOutlierFilterMetrics: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Relationship Watch Window Template {/* #relationship-watch-window-template */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#relationship-watch-window-template)

```python
async def relationship_watch_window_template(
        self,
        *,
        watch_window_template_name: CollectionObjectName | None = None,
        options: RelationshipWatchWindowTemplateOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `show_deviation_x` | MP qualifier: Rx. |
| `show_deviation_y` | MP qualifier: Ry. |
| `show_deviation_z` | MP qualifier: Rz. |

## Make Point to Point Relationship {/* #make-point-to-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-point-to-point-relationship)

```python
async def make_point_to_point_relationship(
        self,
        relationship_name: CollectionItemName,
        first_point_name: PointName,
        second_point_name: PointName,
        *,
        tolerance: ToleranceVectorOptions | None = None,
        constraint: ToleranceVectorOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Frame to Frame Relationship {/* #make-frame-to-frame-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-frame-to-frame-relationship)

```python
async def make_frame_to_frame_relationship(
        self,
        relationship_name: CollectionItemName,
        first_frame_name: CollectionObjectName,
        second_frame_name: CollectionObjectName,
        *,
        orientation_tolerance: ToleranceScalarOptions | None = None,
        position_tolerance: ToleranceVectorOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Points to Objects Relationship {/* #make-points-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-points-to-objects-relationship)

```python
async def make_points_to_objects_relationship(
        self,
        relationship_name: CollectionItemName,
        points_in_relationship: Iterable[PointName],
        objects_in_relationship: Iterable[CollectionObjectName],
        *,
        projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
        auto_update_a_vector_group: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Points to Points Relationship {/* #make-points-to-points-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-points-to-points-relationship)

```python
async def make_points_to_points_relationship(
        self,
        relationship_name: CollectionItemName,
        nominal_points: Iterable[PointName],
        measured_points: Iterable[PointName],
        *,
        auto_update_a_vector_group: bool = False,
        tolerance: ToleranceVectorOptions | None = None,
        constraint: ToleranceVectorOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Groups to Objects Relationship {/* #make-groups-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-groups-to-objects-relationship)

```python
async def make_groups_to_objects_relationship(
        self,
        relationship_name: CollectionItemName,
        point_groups_in_relationship: Iterable[CollectionObjectName],
        objects_in_relationship: Iterable[CollectionObjectName],
        *,
        projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
        auto_update_a_vector_group: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Object to Object Direction Relationship {/* #make-object-to-object-direction-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-object-to-object-direction-relationship)

```python
async def make_object_to_object_direction_relationship(
        self,
        relationship_name: CollectionItemName,
        first_object_in_relationship: CollectionObjectName,
        second_object_in_relationship: CollectionObjectName,
        *,
        nominal_angle: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Point Clouds to Objects Relationship {/* #make-point-clouds-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-point-clouds-to-objects-relationship)

```python
async def make_point_clouds_to_objects_relationship(
        self,
        relationship_name: CollectionItemName,
        point_clouds_in_relationship: Iterable[CollectionObjectName],
        objects_in_relationship: Iterable[CollectionObjectName],
        *,
        projection_options: ProjectionOptions = ProjectionOptions.DEFAULT,
        auto_update_a_vector_group: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Group to Group Relationship {/* #make-group-to-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-group-to-group-relationship)

```python
async def make_group_to_group_relationship(
        self,
        relationship_name: CollectionItemName,
        first_group_name: CollectionObjectName,
        second_group_name: CollectionObjectName,
        *,
        auto_update_a_vector_group: bool = False,
        tolerance: ToleranceVectorOptions | None = None,
        constraint: ToleranceVectorOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Group to Nominal Group Relationship {/* #make-group-to-nominal-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-group-to-nominal-group-relationship)

```python
async def make_group_to_nominal_group_relationship(
        self,
        relationship_name: CollectionItemName,
        nominal_group_name: CollectionObjectName,
        measured_group_name: CollectionObjectName,
        *,
        auto_update_a_vector_group: bool = False,
        use_closest_point: bool = True,
        display_closest_point_watch_window: bool = False,
        use_view_zooming_with_proximity: bool = False,
        ignore_points_beyond_threshold: bool = False,
        proximity_threshold: float = 0.01,
        tolerance: ToleranceVectorOptions | None = None,
        constraint: ToleranceVectorOptions | None = None,
        fit_weight: float = 1.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Average Point Relationship {/* #make-average-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-average-point-relationship)

```python
async def make_average_point_relationship(
        self,
        relationship_name: CollectionItemName,
        points_in_relationship: Iterable[PointName],
        *,
        average_point_name: PointName | None = None,
        nominal_point_name: PointName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Fit Only Relationship {/* #make-geometry-fit-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-only-relationship)

```python
async def make_geometry_fit_only_relationship(
        self,
        relationship_name: CollectionItemName,
        point_groups_to_fit: Iterable[CollectionObjectName],
        geometry_type: GeometryType,
        *,
        resulting_object_name: CollectionObjectName | None = None,
        fit_profile_name: str | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Fit and Compare to Nominal Relationship {/* #make-geometry-fit-and-compare-to-nominal-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

```python
async def make_geometry_fit_and_compare_to_nominal_relationship(
        self,
        relationship_name: CollectionItemName,
        nominal_geometry: CollectionObjectName,
        point_groups_to_fit: Iterable[CollectionObjectName],
        *,
        resulting_object_name: CollectionObjectName | None = None,
        fit_profile_name: str | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Compare Only Relationship {/* #make-geometry-compare-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-compare-only-relationship)

```python
async def make_geometry_compare_only_relationship(
        self,
        relationship_name: CollectionItemName,
        nominal_geometry: CollectionObjectName,
        measured_geometry: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Point Relationship {/* #make-dynamic-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-point-relationship)

```python
async def make_dynamic_point_relationship(
        self,
        relationship_name: CollectionItemName,
        first_reference_geometry: CollectionObjectName,
        second_reference_geometry: CollectionObjectName,
        *,
        construction_mode: DynamicPointMode = DynamicPointMode.INTERSECTION_LINE_AND_PLANE,
        third_reference_geometry: CollectionObjectName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Line Relationship {/* #make-dynamic-line-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-line-relationship)

```python
async def make_dynamic_line_relationship(
        self,
        relationship_name: CollectionItemName,
        first_reference_geometry: CollectionObjectName,
        second_reference_geometry: CollectionObjectName,
        *,
        construction_mode: DynamicLineMode = DynamicLineMode.INTERSECTION_OF_TWO_PLANES,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Plane Relationship {/* #make-dynamic-plane-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-plane-relationship)

```python
async def make_dynamic_plane_relationship(
        self,
        relationship_name: CollectionItemName,
        first_reference_geometry: CollectionObjectName,
        second_reference_geometry: CollectionObjectName,
        *,
        construction_mode: DynamicPlaneMode = DynamicPlaneMode.BISECT_TWO_PLANES,
        offset_plane_offset: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Circle Relationship {/* #make-dynamic-circle-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-circle-relationship)

```python
async def make_dynamic_circle_relationship(
        self,
        relationship_name: CollectionItemName,
        first_reference_geometry: CollectionObjectName,
        second_reference_geometry: CollectionObjectName,
        *,
        construction_mode: DynamicCircleMode = DynamicCircleMode.CYLINDER_AND_PLANE_HOLD_PLANE_NORMAL,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Ellipse Relationship {/* #make-dynamic-ellipse-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-ellipse-relationship)

```python
async def make_dynamic_ellipse_relationship(
        self,
        relationship_name: CollectionItemName,
        first_reference_geometry: CollectionObjectName,
        second_reference_geometry: CollectionObjectName,
        *,
        construction_mode: DynamicEllipseMode = DynamicEllipseMode.CYLINDER_AND_PLANE_INTERSECTION,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Vector Group To Vector Group Relationship {/* #make-vector-group-to-vector-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-vector-group-to-vector-group-relationship)

```python
async def make_vector_group_to_vector_group_relationship(
        self,
        new_vg_to_vg_relationship: CollectionItemName,
        reference_vector_group: CollectionObjectName,
        corresponding_vector_group: CollectionObjectName,
        *,
        set_opposing_vector_group_polarity: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Cylindrical Zone {/* #set-vector-group-to-vector-group-cylindrical-zone */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

```python
async def set_vector_group_to_vector_group_cylindrical_zone(
        self,
        vg_to_vg_relationship: CollectionItemName,
        *,
        radial_offset: float = 1.0,
        minimum_axial_offset: float = -10.0,
        maximum_axial_offset: float = 10.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Fit Weights {/* #set-vector-group-to-vector-group-fit-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-weights)

```python
async def set_vector_group_to_vector_group_fit_weights(
        self,
        vg_to_vg_relationship: CollectionItemName,
        *,
        minimum_gap: float = 0.0,
        minimum_gap_fit_weight: float = 10.0,
        maximum_gap: float = 0.0,
        maximum_gap_fit_weight: float = 10.0,
        nominal_gap: float = 0.0,
        nominal_gap_fit_weight: float = 1.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Fit Gradient Factor {/* #set-vector-group-to-vector-group-fit-gradient-factor */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

```python
async def set_vector_group_to_vector_group_fit_gradient_factor(
        self,
        vg_to_vg_relationship: CollectionItemName,
        *,
        fit_gradient_factor: float = 50.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Relative Polarity {/* #set-vector-group-to-vector-group-relative-polarity */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-relative-polarity)

```python
async def set_vector_group_to_vector_group_relative_polarity(
        self,
        vg_to_vg_relationship: CollectionItemName,
        *,
        set_opposing_vector_group_polarity: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Relationship {/* #delete-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#delete-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#delete-relationship)

```python
async def delete_relationship(
        self,
        relationship_name: CollectionItemName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Optimization Search Options {/* #set-optimization-search-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-search-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-optimization-search-options)

```python
async def set_optimization_search_options(
        self,
        *,
        max_number_of_step_size_reduction: int = 5,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Optimization Perturbation Parameters {/* #set-optimization-perturbation-parameters */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-perturbation-parameters) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-optimization-perturbation-parameters)

```python
async def set_optimization_perturbation_parameters(
        self,
        *,
        length_perturbation: float = 0.0001,
        angular_perturbation: float = 0.0001,
        damping: float = 1.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Do Relationship Fit {/* #do-relationship-fit */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#do-relationship-fit)

```python
async def do_relationship_fit(
        self,
        collection_containing_relationships: str,
        objects_to_move: Iterable[CollectionObjectName],
        instruments_to_move: Iterable[CollectionInstrumentId],
        *,
        solver_mode: SolverMode = SolverMode.GAUSS_NEWTON,
        motion_to_allow: FitDofOptions | None = None,
        use_fit_dialog: bool = False,
    ) -> RelationshipFitResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Collections by Minimizing Relationships {/* #move-collections-by-minimizing-relationships */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#move-collections-by-minimizing-relationships) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#move-collections-by-minimizing-relationships)

```python
async def move_collections_by_minimizing_relationships(
        self,
        collections_to_move: Iterable[str],
        relationships_to_minimize: Iterable[CollectionItemName],
        *,
        solver_mode: SolverMode = SolverMode.GAUSS_NEWTON,
        motion_to_allow: FitDofOptions | None = None,
        use_fit_dialog: bool = False,
        convergence_threshold: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get General Relationship Statistics {/* #get-general-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-general-relationship-statistics) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-general-relationship-statistics)

```python
async def get_general_relationship_statistics(
        self,
        relationship_name: CollectionItemName,
    ) -> GeneralRelationshipStatistics: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Points to Objects Relationship Statistics {/* #get-points-to-objects-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-objects-relationship-statistics) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-points-to-objects-relationship-statistics)

```python
async def get_points_to_objects_relationship_statistics(
        self,
        relationship_name: CollectionItemName,
    ) -> PointsToObjectsRelationshipStatistics: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Relationship Trapping {/* #startstop-relationship-trapping */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#startstop-relationship-trapping) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#startstop-relationship-trapping)

```python
async def start_stop_relationship_trapping(
        self,
        relationship_name: CollectionItemName,
        instrument_id: CollectionInstrumentId,
        *,
        start_trapping: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point to Point Relationship Statistics {/* #get-point-to-point-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-point-to-point-relationship-statistics) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-point-to-point-relationship-statistics)

```python
async def get_point_to_point_relationship_statistics(
        self,
        relationship_name: CollectionItemName,
    ) -> PointToPointRelationshipStatistics: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Group To Nominal Group View Zooming {/* #set-group-to-nominal-group-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-group-to-nominal-group-view-zooming)

```python
async def set_group_to_nominal_group_view_zooming(
        self,
        relationship_name: CollectionItemName,
        *,
        use_closest_point: bool = True,
        show_closest_point_watch_window: bool = False,
        use_view_zooming: bool = True,
        ignore_points_beyond_threshold: bool = True,
        proximity_threshold: float = 0.01,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Associated Data {/* #set-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-associated-data)

```python
async def set_relationship_associated_data(
        self,
        relationship_name: CollectionItemName,
        *,
        individual_points: Iterable[PointName] | None = None,
        point_groups: Iterable[CollectionObjectName] | None = None,
        point_clouds: Iterable[CollectionObjectName] | None = None,
        objects: Iterable[CollectionObjectName] | None = None,
        ignore_empty_arguments: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Associated Data {/* #get-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-associated-data)

```python
async def get_relationship_associated_data(
        self,
        relationship_name: CollectionItemName,
    ) -> RelationshipAssociatedData: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Points to Points Relationship Associated Data {/* #set-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-points-to-points-relationship-associated-data)

```python
async def set_points_to_points_relationship_associated_data(
        self,
        relationship_name: CollectionItemName,
        *,
        nominal_points: Iterable[PointName] | None = None,
        actual_points: Iterable[PointName] | None = None,
        ignore_empty_arguments: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Points to Points Relationship Associated Data {/* #get-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-points-to-points-relationship-associated-data)

```python
async def get_points_to_points_relationship_associated_data(
        self,
        relationship_name: CollectionItemName,
    ) -> PointsToPointsRelationshipAssociatedData: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Clouds to Nominal Geometry 3D {/* #auto-filter-clouds-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

```python
async def auto_filter_clouds_to_nominal_geometry_3d(
        self,
        auto_filter_target_relationships: Iterable[CollectionItemName],
        clouds: Iterable[CollectionObjectName],
        *,
        cloud_thinning_settings: CloudThinningOptions | None = None,
        filter_proximity_settings_3d: FilterProximitySettings | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Clouds to Nominal Geometry 2D {/* #auto-filter-clouds-to-nominal-geometry-2d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

```python
async def auto_filter_clouds_to_nominal_geometry_2d(
        self,
        auto_filter_target_relationships: Iterable[CollectionItemName],
        clouds: Iterable[CollectionObjectName],
        *,
        cloud_thinning_settings: CloudThinningOptions | None = None,
        filter_proximity_settings_2d: FilterProximitySettings | None = None,
        geometry_extraction_tolerance: float = 0.01,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Points to Nominal Geometry 3D {/* #auto-filter-points-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

```python
async def auto_filter_points_to_nominal_geometry_3d(
        self,
        auto_filter_target_relationships: Iterable[CollectionItemName],
        points: Iterable[PointName],
        *,
        filter_proximity_settings_3d: FilterProximitySettings | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Points/Groups/Clouds to Surface Faces {/* #auto-filter-pointsgroupsclouds-to-surface-faces */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

```python
async def auto_filter_points_groups_clouds_to_surface_faces(
        self,
        surfaces: Iterable[CollectionObjectName],
        *,
        points: Iterable[PointName] | None = None,
        groups: Iterable[CollectionObjectName] | None = None,
        clouds: Iterable[CollectionObjectName] | None = None,
        surface_offset: float = 0.1,
        edge_offset: float = 0.1,
        offset_direction: OffsetDirectionType = OffsetDirectionType.BOTH,
        enforce_max_points_per_face_in_output: bool = False,
        max_points_per_face: int = 0,
        cloud_thinning_settings: CloudThinningOptions | None = None,
        output_cloud_base_name: str = "InspAutoFilteredCloud",
        use_face_ids_for_suffix: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Points to Objects Map {/* #create-points-to-objects-map */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#create-points-to-objects-map)

```python
async def create_points_to_objects_map(
        self,
        points_to_objects_map_name: str,
        objects: Iterable[CollectionObjectName],
        *,
        points: Iterable[PointName] | None = None,
        groups: Iterable[CollectionObjectName] | None = None,
        proximity_tolerance: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Objects From Points to Objects Map (Point List) {/* #get-objects-from-points-to-objects-map-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-objects-from-points-to-objects-map-point-list)

```python
async def get_objects_from_points_to_objects_map_point_list(
        self,
        points_to_objects_map_name: str,
        points: Iterable[PointName],
    ) -> tuple[CollectionObjectName, ...]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Compute Geometry Relationship Uncertainties {/* #compute-geometry-relationship-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#compute-geometry-relationship-uncertainties)

```python
async def compute_geometry_relationship_uncertainties(
        self,
        relationship_name: CollectionItemName,
        *,
        display_results: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Criteria Name List {/* #get-geom-relationship-criteria-name-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria-name-list)

```python
async def get_geom_relationship_criteria_name_list(
        self,
        relationship_name: CollectionItemName,
        *,
        include_all_criteria: bool = False,
    ) -> tuple[str, ...]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Status {/* #get-relationship-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-status)

```python
async def get_relationship_status(
        self,
        relationship_name: CollectionItemName,
    ) -> RelationshipStatusFlags: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Relationship Types {/* #relationship-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Dynamic Relationship Types {/* #dynamic-relationship-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Relationship Fit and Statistics Types {/* #relationship-fit-and-statistics-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Associated-Data and Auto-Filter Types {/* #associated-data-and-auto-filter-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Extract Geometry From Point Clouds {/* #extract-geometry-from-point-clouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Make Cloud to Swatch Relationship {/* #make-cloud-to-swatch-relationship */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Final Reconciled Subgroup Types {/* #final-reconciled-subgroup-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Relationship Sigmoidal Gap Fit Constraints {/* #get-relationship-sigmoidal-gap-fit-constraints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Geom Relationship Auto Measure Nominal Feature {/* #set-geom-relationship-auto-measure-nominal-feature */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Relationship Auto Vectors Group Default Prefix {/* #set-relationship-auto-vectors-group-default-prefix */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Relationship Sigmoidal Gap Fit Constraints {/* #set-relationship-sigmoidal-gap-fit-constraints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2024.1.0508.5)
