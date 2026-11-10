---
title: GDT Operations / GDT Construction
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# GDT Operations / GDT Construction

[SA 2026.1.0529.7](/api/dotnet/gdt-construction) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/gdt-construction)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Make Surface Face List - Runtime Select {/* #make-surface-face-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-surface-face-list---runtime-select) · [gRPC Contract](/api/grpc/gdt-construction#make-surface-face-list---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<SurfaceFaceList> MakeSurfaceFaceListRuntimeSelectAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Surface Face List From Surface {/* #make-surface-face-list-from-surface */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-surface-face-list-from-surface) · [gRPC Contract](/api/grpc/gdt-construction#make-surface-face-list-from-surface)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<SurfaceFaceList> MakeSurfaceFaceListFromSurfaceAsync(
        CollectionObjectName surface,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make GD&amp;T Feature Check Annotation {/* #make-gdt-feature-check-annotation */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-gdt-feature-check-annotation) · [gRPC Contract](/api/grpc/gdt-construction#make-gdt-feature-check-annotation)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeGdtFeatureCheckAnnotationAsync(
        MakeGdtFeatureCheckAnnotationOptions options,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make GD&amp;T Datum Annotation {/* #make-gdt-datum-annotation */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-gdt-datum-annotation) · [gRPC Contract](/api/grpc/gdt-construction#make-gdt-datum-annotation)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeGdtDatumAnnotationAsync(
        MakeGdtDatumAnnotationOptions options,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Feature Checks {/* #make-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-feature-checks) · [gRPC Contract](/api/grpc/gdt-construction#make-feature-checks)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeFeatureChecksAsync(
        CollectionName collection,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Feature Check Ref List from a Collection {/* #make-a-feature-check-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-feature-check-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-feature-check-ref-list-from-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeFeatureCheckRefListFromCollectionAsync(
        CollectionName collection,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Feature Check Reference List- WildCard Selection {/* #make-a-feature-check-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-feature-check-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-feature-check-reference-list--wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeFeatureCheckReferenceListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string featureCheckWildcardCriteria = "*",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Annotation Ref List from a Collection {/* #make-annotation-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-annotation-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-annotation-ref-list-from-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeAnnotationRefListFromCollectionAsync(
        CollectionName collection,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Annotation Ref List- WildCard Selection {/* #make-annotation-ref-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-annotation-ref-list--wildcard-selection) · [gRPC Contract](/api/grpc/gdt-construction#make-annotation-ref-list--wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeAnnotationRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string annotationWildcardCriteria = "*",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Feature Checks {/* #delete-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#delete-feature-checks) · [gRPC Contract](/api/grpc/gdt-construction#delete-feature-checks)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteFeatureChecksAsync(
        IEnumerable<CollectionItemName> featureChecks,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Datum Ref List from a Collection {/* #make-a-datum-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-datum-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-datum-ref-list-from-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeDatumRefListFromCollectionAsync(
        CollectionName collection,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeSurfaceFaceListRuntimeSelectAsync {/* #makesurfacefacelistruntimeselectasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeSurfaceFaceListFromSurfaceAsync {/* #makesurfacefacelistfromsurfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeGdtFeatureCheckAnnotationAsync {/* #makegdtfeaturecheckannotationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeGdtDatumAnnotationAsync {/* #makegdtdatumannotationasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeFeatureChecksAsync {/* #makefeaturechecksasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeFeatureCheckRefListFromCollectionAsync {/* #makefeaturecheckreflistfromcollectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeFeatureCheckReferenceListWildcardSelectionAsync {/* #makefeaturecheckreferencelistwildcardselectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeAnnotationRefListFromCollectionAsync {/* #makeannotationreflistfromcollectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeAnnotationRefListWildcardSelectionAsync {/* #makeannotationreflistwildcardselectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## DeleteFeatureChecksAsync {/* #deletefeaturechecksasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## MakeDatumRefListFromCollectionAsync {/* #makedatumreflistfromcollectionasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7)
