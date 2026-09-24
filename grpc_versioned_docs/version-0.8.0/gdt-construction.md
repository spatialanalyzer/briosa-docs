---
title: GDT Operations / GDT Construction
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# GDT Operations / GDT Construction

[SA 2026.1.0529.7](/api/grpc/gdt-construction) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/gdt-construction)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Make Surface Face List - Runtime Select {/* #make-surface-face-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-surface-face-list---runtime-select)

`/briosa.GdtOperations/MakeSurfaceFaceListRuntimeSelect` · Operation ID: `gdt_operations.make_surface_face_list_runtime_select`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `surface_faces` | `optional SurfaceFaceList` | Selected Surface Faces | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeSurfaceFaceListRuntimeSelect(MakeSurfaceFaceListRuntimeSelectRequest) returns (MakeSurfaceFaceListRuntimeSelectResult);

message MakeSurfaceFaceListRuntimeSelectRequest {}

message MakeSurfaceFaceListRuntimeSelectResult {
  optional SurfaceFaceList surface_faces = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make Surface Face List From Surface {/* #make-surface-face-list-from-surface */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-surface-face-list-from-surface)

`/briosa.GdtOperations/MakeSurfaceFaceListFromSurface` · Operation ID: `gdt_operations.make_surface_face_list_from_surface`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `surface` | `optional CollectionObjectName` | Surface Name | Required |
| Result | 1 | `surface_faces` | `optional SurfaceFaceList` | Selected Surface Faces | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeSurfaceFaceListFromSurface(MakeSurfaceFaceListFromSurfaceRequest) returns (MakeSurfaceFaceListFromSurfaceResult);

message MakeSurfaceFaceListFromSurfaceRequest {
  optional CollectionObjectName surface = 1;
}

message MakeSurfaceFaceListFromSurfaceResult {
  optional SurfaceFaceList surface_faces = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make GD&amp;T Feature Check Annotation {/* #make-gdt-feature-check-annotation */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-gdt-feature-check-annotation)

`/briosa.GdtOperations/MakeGdtFeatureCheckAnnotation` · Operation ID: `gdt_operations.make_gdt_feature_check_annotation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_annotation_name` | `string` | Feature Annotation Name | Empty |
| Request | 2 | `feature_type` | `optional GdtFeatureType` | Feature Type | True Position |
| Request | 3 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Request | 4 | `geometry_relationships` | `repeated CollectionItemName` | Geometry Relationships | Required |
| Request | 5 | `surface_faces` | `optional SurfaceFaceList` | Surface Faces | Empty |
| Request | 6 | `decompose_multiple_features` | `optional bool` | Decompose Multiple Features? | false |
| Request | 7 | `auto_create_diameter_checks` | `optional bool` | Auto Create Diameter Checks? | false |
| Request | 8 | `auto_create_slot_width_checks` | `optional bool` | Auto Create Slot Width Checks? | false |
| Request | 9 | `auto_create_slot_length_checks` | `optional bool` | Auto Create Slot Length Checks? | false |
| Request | 10 | `datum_references` | `optional string` | Datum References | Empty |
| Request | 11 | `tolerance` | `optional string` | Tolerance | Empty |
| Request | 12 | `is_slot` | `optional bool` | Is Slot? | false |
| Request | 13 | `per_unit_length_or_area` | `optional bool` | Per unit length/area | false |
| Request | 14 | `circular_area` | `optional bool` | Circular area? (Rectangular default) | false |
| Request | 15 | `per_unit_length_distance` | `optional double` | Per unit (area) length distance | 0.000000 |
| Request | 16 | `per_unit_length_step_over_percent` | `optional double` | Per unit (area) length step over % | 50.000000 |
| Request | 17 | `per_unit_area_width_distance` | `optional double` | Per unit area width distance | 0.000000 |
| Request | 18 | `per_unit_area_width_step_over_percent` | `optional double` | Per unit area width step over % | 50.000000 |
| Request | 19 | `per_unit_area_circle_diameter` | `optional double` | Per unit area circle diameter | 0.000000 |
| Request | 20 | `per_unit_area_diameter_step_over` | `optional double` | Per unit area diameter step over | 50.000000 |
| Request | 21 | `auxiliary_object` | `optional CollectionObjectName` | Auxiliary Object | Required |
| Request | 22 | `auxiliary_geometry_relationship` | `optional CollectionItemName` | Auxiliary Geometry Relationship | Required |
| Request | 23 | `use_nominal_for_dimension_tolerance` | `optional bool` | Use Nominal for Dimension Tolerance | true |
| Request | 24 | `use_reference_object_for_nominal` | `optional bool` | Use Reference Object for Nominal | true |
| Request | 25 | `nominal_dimension_tolerance` | `optional double` | Nominal Dimension Tolerance | 0.000000 |
| Request | 26 | `low_dimension_tolerance` | `optional double` | Low Dimension Tolerance | -0.100000 |
| Request | 27 | `high_dimension_tolerance` | `optional double` | High Dimension Tolerance | 0.100000 |
| Request | 28 | `tolerance_zone_type` | `optional GdtToleranceZoneType` | Tolerance Zone Type | None |
| Request | 29 | `use_projected_tolerance_zone` | `optional bool` | Use Projected Tolerance Zone? | false |
| Request | 30 | `projected_tolerance_zone` | `optional double` | Projected Tolerance Zone | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeGdtFeatureCheckAnnotation(MakeGdtFeatureCheckAnnotationRequest) returns (MakeGdtFeatureCheckAnnotationResult);

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
  optional double per_unit_length_distance = 15;
  optional double per_unit_length_step_over_percent = 16;
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

## Make GD&amp;T Datum Annotation {/* #make-gdt-datum-annotation */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-gdt-datum-annotation)

`/briosa.GdtOperations/MakeGdtDatumAnnotation` · Operation ID: `gdt_operations.make_gdt_datum_annotation`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `datum_name` | `string` | Datum Name | Empty |
| Request | 2 | `objects` | `repeated CollectionObjectName` | Objects | Required |
| Request | 3 | `geometry_relationships` | `repeated CollectionItemName` | Geometry Relationships | Required |
| Request | 4 | `surface_faces` | `optional SurfaceFaceList` | Surface Faces | Empty |
| Request | 5 | `auxiliary_object` | `optional CollectionObjectName` | Auxiliary Object | Required |
| Request | 6 | `auxiliary_geometry_relationship` | `optional CollectionItemName` | Auxiliary Geometry Relationship | Required |
| Request | 7 | `is_slot` | `optional bool` | Is Slot? | false |
| Request | 8 | `force_surface_feature` | `optional bool` | Force Surface Feature? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeGdtDatumAnnotation(MakeGdtDatumAnnotationRequest) returns (MakeGdtDatumAnnotationResult);

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

message MakeGdtDatumAnnotationResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Feature Checks {/* #make-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-feature-checks)

`/briosa.GdtOperations/MakeFeatureChecks` · Operation ID: `gdt_operations.make_feature_checks`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeFeatureChecks(MakeFeatureChecksRequest) returns (MakeFeatureChecksResult);

message MakeFeatureChecksRequest {
  optional CollectionName collection = 1;
}

message MakeFeatureChecksResult {
  MpExecutionDetails execution = 1000;
}
```

## Make a Feature Check Ref List from a Collection {/* #make-a-feature-check-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-feature-check-ref-list-from-a-collection)

`/briosa.GdtOperations/MakeFeatureCheckRefListFromCollection` · Operation ID: `gdt_operations.make_feature_check_ref_list_from_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection Name | Required |
| Result | 1 | `feature_checks` | `repeated CollectionItemName` | Feature Check Ref List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeFeatureCheckRefListFromCollection(MakeFeatureCheckRefListFromCollectionRequest) returns (MakeFeatureCheckRefListFromCollectionResult);

message MakeFeatureCheckRefListFromCollectionRequest {
  optional CollectionName collection = 1;
}

message MakeFeatureCheckRefListFromCollectionResult {
  repeated CollectionItemName feature_checks = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make a Feature Check Reference List- WildCard Selection {/* #make-a-feature-check-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-feature-check-reference-list--wildcard-selection)

`/briosa.GdtOperations/MakeFeatureCheckReferenceListWildcardSelection` · Operation ID: `gdt_operations.make_feature_check_reference_list_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `feature_check_wildcard_criteria` | `optional string` | Feature Check Wildcard Criteria | * |
| Result | 1 | `feature_checks` | `repeated CollectionItemName` | Resultant Feature Check Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeFeatureCheckReferenceListWildcardSelection(MakeFeatureCheckReferenceListWildcardSelectionRequest) returns (MakeFeatureCheckReferenceListWildcardSelectionResult);

message MakeFeatureCheckReferenceListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1;
  optional string feature_check_wildcard_criteria = 2;
}

message MakeFeatureCheckReferenceListWildcardSelectionResult {
  repeated CollectionItemName feature_checks = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make Annotation Ref List from a Collection {/* #make-annotation-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-annotation-ref-list-from-a-collection)

`/briosa.GdtOperations/MakeAnnotationRefListFromCollection` · Operation ID: `gdt_operations.make_annotation_ref_list_from_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection Name | Required |
| Result | 1 | `annotations` | `repeated CollectionItemName` | Resultant Annotation Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeAnnotationRefListFromCollection(MakeAnnotationRefListFromCollectionRequest) returns (MakeAnnotationRefListFromCollectionResult);

message MakeAnnotationRefListFromCollectionRequest {
  optional CollectionName collection = 1;
}

message MakeAnnotationRefListFromCollectionResult {
  repeated CollectionItemName annotations = 1;
  MpExecutionDetails execution = 1000;
}
```

## Make Annotation Ref List- WildCard Selection {/* #make-annotation-ref-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-annotation-ref-list--wildcard-selection)

`/briosa.GdtOperations/MakeAnnotationRefListWildcardSelection` · Operation ID: `gdt_operations.make_annotation_ref_list_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `annotation_wildcard_criteria` | `optional string` | Annotation Wildcard Criteria | * |
| Result | 1 | `annotations` | `repeated CollectionItemName` | Resultant Annotation Reference List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeAnnotationRefListWildcardSelection(MakeAnnotationRefListWildcardSelectionRequest) returns (MakeAnnotationRefListWildcardSelectionResult);

message MakeAnnotationRefListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1;
  optional string annotation_wildcard_criteria = 2;
}

message MakeAnnotationRefListWildcardSelectionResult {
  repeated CollectionItemName annotations = 1;
  MpExecutionDetails execution = 1000;
}
```

## Delete Feature Checks {/* #delete-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#delete-feature-checks)

`/briosa.GdtOperations/DeleteFeatureChecks` · Operation ID: `gdt_operations.delete_feature_checks`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_checks` | `repeated CollectionItemName` | Feature Check Name List | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteFeatureChecks(DeleteFeatureChecksRequest) returns (DeleteFeatureChecksResult);

message DeleteFeatureChecksRequest {
  repeated CollectionItemName feature_checks = 1;
}

message DeleteFeatureChecksResult {
  MpExecutionDetails execution = 1000;
}
```

## Make a Datum Ref List from a Collection {/* #make-a-datum-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-datum-ref-list-from-a-collection)

`/briosa.GdtOperations/MakeDatumRefListFromCollection` · Operation ID: `gdt_operations.make_datum_ref_list_from_collection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection` | `optional CollectionName` | Collection Name | Required |
| Result | 1 | `datums` | `repeated CollectionObjectName` | Datum Ref List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeDatumRefListFromCollection(MakeDatumRefListFromCollectionRequest) returns (MakeDatumRefListFromCollectionResult);

message MakeDatumRefListFromCollectionRequest {
  optional CollectionName collection = 1;
}

message MakeDatumRefListFromCollectionResult {
  repeated CollectionObjectName datums = 1;
  MpExecutionDetails execution = 1000;
}
```

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Surface Face Lists {/* #surface-face-lists */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Feature Check Annotation Construction {/* #feature-check-annotation-construction */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Datum Annotation and Feature Check Construction {/* #datum-annotation-and-feature-check-construction */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Reference List Queries {/* #reference-list-queries */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
