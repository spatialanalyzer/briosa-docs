---
title: GDT Operations / GDT Construction
description: Next Briosa Python APIs for the GDT Construction MP commands.
toc_max_heading_level: 2
---

# GDT Operations / GDT Construction

:::note[Next Python Contract]

These coroutines define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

## Shared Types

```python
from dataclasses import dataclass, field
from enum import Enum
from typing import Sequence

@dataclass(frozen=True)
class SurfaceFaceList:
    value: str

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

`SurfaceFaceList.value` is an opaque SpatialAnalyzer value. Pass values
returned by the Surface Face List methods unchanged.

## make_surface_face_list_runtime_select

```python
async def make_surface_face_list_runtime_select() -> SurfaceFaceList: ...

faces = await briosa.gdt_operations.make_surface_face_list_runtime_select()
```

This coroutine displays SpatialAnalyzer's runtime Surface-face selector.

## make_surface_face_list_from_surface

```python
async def make_surface_face_list_from_surface(
    surface: CollectionObjectName,
) -> SurfaceFaceList: ...

faces = await briosa.gdt_operations.make_surface_face_list_from_surface(surface)
```

## make_gdt_feature_check_annotation

```python
async def make_gdt_feature_check_annotation(
    options: MakeGdtFeatureCheckAnnotationOptions,
) -> None: ...

await briosa.gdt_operations.make_gdt_feature_check_annotation(
    MakeGdtFeatureCheckAnnotationOptions(
        feature_annotation_name="Position Check",
        objects=(feature,),
        surface_faces=faces,
    )
)
```

The options object exposes all 30 MP inputs and preserves every exact MP
default. SpatialAnalyzer validates the supplied combination of Objects,
Relationships, Surface faces, Datum references, and tolerance text.

## make_gdt_datum_annotation

```python
async def make_gdt_datum_annotation(
    options: MakeGdtDatumAnnotationOptions,
) -> None: ...

await briosa.gdt_operations.make_gdt_datum_annotation(
    MakeGdtDatumAnnotationOptions(
        datum_name="A",
        objects=(datum_feature,),
    )
)
```

`is_slot` and `force_surface_feature` both default to `False`.

## make_feature_checks

```python
async def make_feature_checks(collection: CollectionName) -> None: ...

await briosa.gdt_operations.make_feature_checks(collection)
```

## make_feature_check_ref_list_from_collection

```python
async def make_feature_check_ref_list_from_collection(
    collection: CollectionName,
) -> Sequence[CollectionItemName]: ...

checks = await briosa.gdt_operations.make_feature_check_ref_list_from_collection(
    collection
)
```

## make_feature_check_reference_list_wildcard_selection

```python
async def make_feature_check_reference_list_wildcard_selection(
    collection_wildcard_criteria: str = "*",
    feature_check_wildcard_criteria: str = "*",
) -> Sequence[CollectionItemName]: ...

checks = await briosa.gdt_operations.make_feature_check_reference_list_wildcard_selection(
    feature_check_wildcard_criteria="Position*"
)
```

## make_annotation_ref_list_from_collection

```python
async def make_annotation_ref_list_from_collection(
    collection: CollectionName,
) -> Sequence[CollectionItemName]: ...

annotations = await briosa.gdt_operations.make_annotation_ref_list_from_collection(
    collection
)
```

## make_annotation_ref_list_wildcard_selection

```python
async def make_annotation_ref_list_wildcard_selection(
    collection_wildcard_criteria: str = "*",
    annotation_wildcard_criteria: str = "*",
) -> Sequence[CollectionItemName]: ...

annotations = await briosa.gdt_operations.make_annotation_ref_list_wildcard_selection(
    annotation_wildcard_criteria="Datum*"
)
```

## delete_feature_checks

```python
async def delete_feature_checks(
    feature_checks: Sequence[CollectionItemName],
) -> None: ...

await briosa.gdt_operations.delete_feature_checks(checks_to_delete)
```

The client adds no confirmation or existence preflight.

## make_datum_ref_list_from_collection

```python
async def make_datum_ref_list_from_collection(
    collection: CollectionName,
) -> Sequence[CollectionObjectName]: ...

datums = await briosa.gdt_operations.make_datum_ref_list_from_collection(collection)
```

All returned lists are detached snapshots of live SA state. The client does not
cache them or automatically replay any operation.

[Catalog](/mp-command-catalog/commands/gdt-construction) · [gRPC](/api/grpc/gdt-construction) · [.NET](/api/dotnet/gdt-construction) · [JavaScript and TypeScript](/api/javascript/gdt-construction)
