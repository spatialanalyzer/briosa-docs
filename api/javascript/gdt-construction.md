---
title: GDT Operations / GDT Construction
description: Released javascript 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# GDT Operations / GDT Construction

[SA 2026.1.0529.7](/api/javascript/gdt-construction) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/gdt-construction)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. A method that takes `BriosaCallOptions` can pass `onMpCompletion` to observe how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Make Surface Face List - Runtime Select {/* #make-surface-face-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-surface-face-list---runtime-select) · [gRPC Contract](/api/grpc/gdt-construction#make-surface-face-list---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeSurfaceFaceListRuntimeSelect(
    callOptions?: BriosaCallOptions,
  ): Promise<SurfaceFaceList>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Surface Face List From Surface {/* #make-surface-face-list-from-surface */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-surface-face-list-from-surface) · [gRPC Contract](/api/grpc/gdt-construction#make-surface-face-list-from-surface)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeSurfaceFaceListFromSurface(
    surface: CollectionObjectName,
    callOptions?: BriosaCallOptions,
  ): Promise<SurfaceFaceList>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make GD&amp;T Feature Check Annotation {/* #make-gdt-feature-check-annotation */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-gdt-feature-check-annotation) · [gRPC Contract](/api/grpc/gdt-construction#make-gdt-feature-check-annotation)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeGdtFeatureCheckAnnotation(
    options: MakeGdtFeatureCheckAnnotationOptions,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make GD&amp;T Datum Annotation {/* #make-gdt-datum-annotation */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-gdt-datum-annotation) · [gRPC Contract](/api/grpc/gdt-construction#make-gdt-datum-annotation)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeGdtDatumAnnotation(
    options: MakeGdtDatumAnnotationOptions,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Feature Checks {/* #make-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-feature-checks) · [gRPC Contract](/api/grpc/gdt-construction#make-feature-checks)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeFeatureChecks(
    collection: CollectionName,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Feature Check Ref List from a Collection {/* #make-a-feature-check-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-feature-check-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-feature-check-ref-list-from-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeFeatureCheckRefListFromCollection(
    collection: CollectionName,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Feature Check Reference List- WildCard Selection {/* #make-a-feature-check-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-feature-check-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-feature-check-reference-list--wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeFeatureCheckReferenceListWildcardSelection(
    options?: {
      collectionWildcardCriteria?: string;
      featureCheckWildcardCriteria?: string;
    },
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Annotation Ref List from a Collection {/* #make-annotation-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-annotation-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-annotation-ref-list-from-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeAnnotationRefListFromCollection(
    collection: CollectionName,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Annotation Ref List- WildCard Selection {/* #make-annotation-ref-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-annotation-ref-list--wildcard-selection) · [gRPC Contract](/api/grpc/gdt-construction#make-annotation-ref-list--wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeAnnotationRefListWildcardSelection(
    options?: {
      collectionWildcardCriteria?: string;
      annotationWildcardCriteria?: string;
    },
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionItemName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Feature Checks {/* #delete-feature-checks */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#delete-feature-checks) · [gRPC Contract](/api/grpc/gdt-construction#delete-feature-checks)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  deleteFeatureChecks(
    featureChecks: readonly CollectionItemName[],
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Datum Ref List from a Collection {/* #make-a-datum-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/gdt-construction#make-a-datum-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/gdt-construction#make-a-datum-ref-list-from-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
// Member of BriosaClient
interface BriosaClient {
  makeDatumRefListFromCollection(
    collection: CollectionName,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeSurfaceFaceListRuntimeSelect {/* #makesurfacefacelistruntimeselect */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeSurfaceFaceListFromSurface {/* #makesurfacefacelistfromsurface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeGdtFeatureCheckAnnotation {/* #makegdtfeaturecheckannotation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeGdtDatumAnnotation {/* #makegdtdatumannotation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeFeatureChecks {/* #makefeaturechecks */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeFeatureCheckRefListFromCollection {/* #makefeaturecheckreflistfromcollection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeFeatureCheckReferenceListWildcardSelection {/* #makefeaturecheckreferencelistwildcardselection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeAnnotationRefListFromCollection {/* #makeannotationreflistfromcollection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeAnnotationRefListWildcardSelection {/* #makeannotationreflistwildcardselection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## deleteFeatureChecks {/* #deletefeaturechecks */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## makeDatumRefListFromCollection {/* #makedatumreflistfromcollection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/c6691dff8e9a7af9d6c4accf422074dab7287e8c/targets/2026.1.0529.7)
