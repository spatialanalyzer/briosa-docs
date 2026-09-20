---
title: GDT Operations / GDT Construction
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# GDT Operations / GDT Construction

[SA 2026.1.0529.7](/api/python/gdt-construction) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/gdt-construction)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Make Surface Face List - Runtime Select {/* #make-surface-face-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-surface-face-list---runtime-select) · [gRPC Contract](/api/grpc/gdt-construction#make-surface-face-list---runtime-select)

```python
async def make_surface_face_list_runtime_select(
        self,
    ) -> SurfaceFaceList: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Surface Face List From Surface {/* #make-surface-face-list-from-surface */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-surface-face-list-from-surface) · [gRPC Contract](/api/grpc/gdt-construction#make-surface-face-list-from-surface)

```python
async def make_surface_face_list_from_surface(
        self,
        surface: CollectionObjectName,
    ) -> SurfaceFaceList: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make GD&amp;T Feature Check Annotation {/* #make-gdt-feature-check-annotation */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-gdt-feature-check-annotation) · [gRPC Contract](/api/grpc/gdt-construction#make-gdt-feature-check-annotation)

```python
async def make_gdt_feature_check_annotation(
        self,
        options: MakeGdtFeatureCheckAnnotationOptions,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make GD&amp;T Datum Annotation {/* #make-gdt-datum-annotation */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-gdt-datum-annotation) · [gRPC Contract](/api/grpc/gdt-construction#make-gdt-datum-annotation)

```python
async def make_gdt_datum_annotation(
        self,
        options: MakeGdtDatumAnnotationOptions,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Feature Checks {/* #make-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-feature-checks) · [gRPC Contract](/api/grpc/gdt-construction#make-feature-checks)

```python
async def make_feature_checks(
        self,
        collection: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Feature Check Ref List from a Collection {/* #make-a-feature-check-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-feature-check-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-feature-check-ref-list-from-a-collection)

```python
async def make_feature_check_ref_list_from_collection(
        self,
        collection: CollectionName,
    ) -> Sequence[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Feature Check Reference List- WildCard Selection {/* #make-a-feature-check-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-feature-check-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-feature-check-reference-list--wildcard-selection)

```python
async def make_feature_check_reference_list_wildcard_selection(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        feature_check_wildcard_criteria: str = "*",
    ) -> Sequence[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Annotation Ref List from a Collection {/* #make-annotation-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-annotation-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-annotation-ref-list-from-a-collection)

```python
async def make_annotation_ref_list_from_collection(
        self,
        collection: CollectionName,
    ) -> Sequence[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Annotation Ref List- WildCard Selection {/* #make-annotation-ref-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-annotation-ref-list--wildcard-selection) · [gRPC Contract](/api/grpc/gdt-construction#make-annotation-ref-list--wildcard-selection)

```python
async def make_annotation_ref_list_wildcard_selection(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        annotation_wildcard_criteria: str = "*",
    ) -> Sequence[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Feature Checks {/* #delete-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#delete-feature-checks) · [gRPC Contract](/api/grpc/gdt-construction#delete-feature-checks)

```python
async def delete_feature_checks(
        self,
        feature_checks: Sequence[CollectionItemName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Datum Ref List from a Collection {/* #make-a-datum-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-datum-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-datum-ref-list-from-a-collection)

```python
async def make_datum_ref_list_from_collection(
        self,
        collection: CollectionName,
    ) -> Sequence[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_surface_face_list_runtime_select {/* #make_surface_face_list_runtime_select */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_surface_face_list_from_surface {/* #make_surface_face_list_from_surface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_gdt_feature_check_annotation {/* #make_gdt_feature_check_annotation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_gdt_datum_annotation {/* #make_gdt_datum_annotation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_feature_checks {/* #make_feature_checks */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_feature_check_ref_list_from_collection {/* #make_feature_check_ref_list_from_collection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_feature_check_reference_list_wildcard_selection {/* #make_feature_check_reference_list_wildcard_selection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_annotation_ref_list_from_collection {/* #make_annotation_ref_list_from_collection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_annotation_ref_list_wildcard_selection {/* #make_annotation_ref_list_wildcard_selection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## delete_feature_checks {/* #delete_feature_checks */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_datum_ref_list_from_collection {/* #make_datum_ref_list_from_collection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
