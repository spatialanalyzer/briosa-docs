---
title: GDT Operations / GDT Construction
description: Released gRPC contracts for the GDT Construction MP commands.
toc_max_heading_level: 2
---

# GDT Operations / GDT Construction

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs use `briosa.GdtOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## Shared Types

```proto
message SurfaceFaceList {
  string value = 1;
}

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

`SurfaceFaceList` represents SpatialAnalyzer's Surface-face selection value.
Its serialized `value` is intentionally opaque to Briosa. Callers normally
obtain it from one of the two Surface Face List RPCs and pass it unchanged to
an Annotation-construction RPC.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Make Surface Face List - Runtime Select | `MakeSurfaceFaceListRuntimeSelect` | `gdt_operations.make_surface_face_list_runtime_select` |
| Make Surface Face List From Surface | `MakeSurfaceFaceListFromSurface` | `gdt_operations.make_surface_face_list_from_surface` |
| Make GD&amp;T Feature Check Annotation | `MakeGdtFeatureCheckAnnotation` | `gdt_operations.make_gdt_feature_check_annotation` |
| Make GD&amp;T Datum Annotation | `MakeGdtDatumAnnotation` | `gdt_operations.make_gdt_datum_annotation` |
| Make Feature Checks | `MakeFeatureChecks` | `gdt_operations.make_feature_checks` |
| Make a Feature Check Ref List from a Collection | `MakeFeatureCheckRefListFromCollection` | `gdt_operations.make_feature_check_ref_list_from_collection` |
| Make a Feature Check Reference List- WildCard Selection | `MakeFeatureCheckReferenceListWildcardSelection` | `gdt_operations.make_feature_check_reference_list_wildcard_selection` |
| Make Annotation Ref List from a Collection | `MakeAnnotationRefListFromCollection` | `gdt_operations.make_annotation_ref_list_from_collection` |
| Make Annotation Ref List- WildCard Selection | `MakeAnnotationRefListWildcardSelection` | `gdt_operations.make_annotation_ref_list_wildcard_selection` |
| Delete Feature Checks | `DeleteFeatureChecks` | `gdt_operations.delete_feature_checks` |
| Make a Datum Ref List from a Collection | `MakeDatumRefListFromCollection` | `gdt_operations.make_datum_ref_list_from_collection` |

Each route is `/briosa.GdtOperations/<RPC>`.

## Surface Face Lists

```proto
message MakeSurfaceFaceListRuntimeSelectRequest {}
message MakeSurfaceFaceListRuntimeSelectResult {
  optional SurfaceFaceList surface_faces = 1;
  MpExecutionDetails execution = 1000;
}

message MakeSurfaceFaceListFromSurfaceRequest {
  optional CollectionObjectName surface = 1;
}
message MakeSurfaceFaceListFromSurfaceResult {
  optional SurfaceFaceList surface_faces = 1;
  MpExecutionDetails execution = 1000;
}
```

`MakeSurfaceFaceListRuntimeSelect` is explicitly interactive. The non-interactive
RPC requires a Surface identity. Both return the same composable value type.

## Feature Check Annotation Construction

```proto
message MakeGdtFeatureCheckAnnotationRequest {
  string feature_annotation_name = 1;
  optional GdtFeatureType feature_type = 2;
  repeated CollectionObjectName objects = 3;
  repeated CollectionItemName geometry_relationships = 4;
  optional SurfaceFaceList surface_faces = 5;
  optional bool decompose_multiple_features = 6;
  optional bool auto_create_diameter_checks = 7;
  optional bool auto_create_slot_width_checks = 8;
  optional bool auto_create_slot_length_checks = 9;
  optional string datum_references = 10;
  optional string tolerance = 11;
  optional bool is_slot = 12;
  optional bool per_unit_length_or_area = 13;
  optional bool circular_area = 14;
  optional double per_unit_area_length_distance = 15;
  optional double per_unit_area_length_step_over_percent = 16;
  optional double per_unit_area_width_distance = 17;
  optional double per_unit_area_width_step_over_percent = 18;
  optional double per_unit_area_circle_diameter = 19;
  optional double per_unit_area_diameter_step_over = 20;
  optional CollectionObjectName auxiliary_object = 21;
  optional CollectionItemName auxiliary_geometry_relationship = 22;
  optional bool use_nominal_for_dimension_tolerance = 23;
  optional bool use_reference_object_for_nominal = 24;
  optional double nominal_dimension_tolerance = 25;
  optional double low_dimension_tolerance = 26;
  optional double high_dimension_tolerance = 27;
  optional GdtToleranceZoneType tolerance_zone_type = 28;
  optional bool use_projected_tolerance_zone = 29;
  optional double projected_tolerance_zone = 30;
}
message MakeGdtFeatureCheckAnnotationResult {
  MpExecutionDetails execution = 1000;
}
```

`feature_annotation_name` is required. All reference lists may be empty and
all three reference sources may be combined; SpatialAnalyzer determines
whether the supplied definition is sufficient.

Defaults in field order are `True Position`, empty lists, no Surface faces,
four `false` construction flags, empty Datum-reference and tolerance strings,
`false`, `false`, `false`, `0.0`, `50.0`, `0.0`, `50.0`, `0.0`, `50.0`, no
auxiliary references, `true`, `true`, `0.0`, `-0.1`, `0.1`, `None`, `false`,
and `0.0`.

## Datum Annotation and Feature Check Construction

```proto
message MakeGdtDatumAnnotationRequest {
  string datum_name = 1;
  repeated CollectionObjectName objects = 2;
  repeated CollectionItemName geometry_relationships = 3;
  optional SurfaceFaceList surface_faces = 4;
  optional CollectionObjectName auxiliary_object = 5;
  optional CollectionItemName auxiliary_geometry_relationship = 6;
  optional bool is_slot = 7;
  optional bool force_surface_feature = 8;
}
message MakeGdtDatumAnnotationResult { MpExecutionDetails execution = 1000; }

message MakeFeatureChecksRequest {
  optional CollectionName collection = 1;
}
message MakeFeatureChecksResult { MpExecutionDetails execution = 1000; }
```

`datum_name` and `collection` are required. Reference lists may be empty,
auxiliary references are optional, and both Datum flags default to `false`.
Briosa does not add construction sequencing or retain Annotation state.

## Reference List Queries

```proto
message MakeFeatureCheckRefListFromCollectionRequest {
  optional CollectionName collection = 1;
}
message MakeFeatureCheckRefListFromCollectionResult {
  repeated CollectionItemName feature_checks = 1;
  MpExecutionDetails execution = 1000;
}

message MakeFeatureCheckReferenceListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1;
  optional string feature_check_wildcard_criteria = 2;
}
message MakeFeatureCheckReferenceListWildcardSelectionResult {
  repeated CollectionItemName feature_checks = 1;
  MpExecutionDetails execution = 1000;
}

message MakeAnnotationRefListFromCollectionRequest {
  optional CollectionName collection = 1;
}
message MakeAnnotationRefListFromCollectionResult {
  repeated CollectionItemName annotations = 1;
  MpExecutionDetails execution = 1000;
}

message MakeAnnotationRefListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1;
  optional string annotation_wildcard_criteria = 2;
}
message MakeAnnotationRefListWildcardSelectionResult {
  repeated CollectionItemName annotations = 1;
  MpExecutionDetails execution = 1000;
}

message MakeDatumRefListFromCollectionRequest {
  optional CollectionName collection = 1;
}
message MakeDatumRefListFromCollectionResult {
  repeated CollectionObjectName datums = 1;
  MpExecutionDetails execution = 1000;
}
```

Collection identities are required for collection-based queries. Every
wildcard criterion defaults to `*`. Results are detached structured lists;
Briosa does not cache or track their relationship to later SA state.

## Delete Feature Checks

```proto
message DeleteFeatureChecksRequest {
  repeated CollectionItemName feature_checks = 1;
}
message DeleteFeatureChecksResult { MpExecutionDetails execution = 1000; }
```

The list is required. Briosa does not add a confirmation or existence preflight.
The MP result distinguishes complete success, partial success, and failure.

[Catalog](/mp-command-catalog/commands/gdt-construction) · [.NET](/api/dotnet/0.1.0/gdt-construction) · [Python](/api/python/0.1.0/gdt-construction) · [JavaScript and TypeScript](/api/javascript/0.1.0/gdt-construction)
