---
title: Construction Operations / Vectors and Vector Groups
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Vectors and Vector Groups

[SA 2026.1.0529.7](/api/python/construction-operations-vectors-and-vector-groups) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-vectors-and-vector-groups)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Construct a Vector Group - Group to Group Compare {/* #construct-a-vector-group---group-to-group-compare */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group---group-to-group-compare)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_vector_group_group_to_group_compare(
        self,
        vector_group_name: CollectionObjectName,
        group_a: CollectionObjectName,
        group_b: CollectionObjectName,
        *,
        rms_deviation_tolerance: float = 0.0,
        max_absolute_deviation_tolerance: float = 0.0,
        average_deviation_tolerance: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> ConstructVectorGroupGroupToGroupCompareResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group - Area Profile Check {/* #construct-a-vector-group---area-profile-check */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_vector_group_area_profile_check(
        self,
        reference_vectors: Iterable[VectorName],
        vector_groups_to_check: Iterable[CollectionVectorGroupName],
        resultant_vector_group_name: CollectionVectorGroupName,
        *,
        area_radius: float = 0.0,
        area_tolerance: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group From Vector Name Ref List {/* #construct-a-vector-group-from-vector-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_vector_group_from_vector_name_ref_list(
        self,
        vector_name_list: Iterable[VectorName],
        resultant_vector_group_name: CollectionVectorGroupName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector in Working Coordinates(Begin/Delta) {/* #construct-a-vector-in-working-coordinatesbegindelta */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindelta)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_vector_in_working_coordinates_begin_delta(
        self,
        vector_group_name: CollectionObjectName,
        new_vector_name: str,
        begin_in_working_coordinates: Vector,
        delta_in_working_coordinates: Vector,
        *,
        is_magnitude_negative: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector in Working Coordinates(Begin/Direction/Mag.) {/* #construct-a-vector-in-working-coordinatesbegindirectionmag */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-in-working-coordinatesbegindirectionmag)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_vector_in_working_coordinates_begin_direction_magnitude(
        self,
        vector_group_name: CollectionObjectName,
        new_vector_name: str,
        begin_in_working_coordinates: Vector,
        direction_in_working_coordinates: Vector,
        *,
        signed_magnitude: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Vector Group From a Relationship {/* #construct-a-vector-group-from-a-relationship */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def construct_vector_group_from_relationship(
        self,
        relationship_name: CollectionObjectName,
        vector_group_name: CollectionVectorGroupName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Vector Name Ref List From a Vector Group {/* #make-a-vector-name-ref-list-from-a-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list-from-a-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_vector_name_ref_list_from_vector_group(
        self,
        vector_group_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[VectorName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Vector Name Ref List - Runtime Select {/* #make-a-vector-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-vector-name-ref-list---runtime-select)

Client 0.5.0 removed this method with behavioral contract major 3. No operator could complete its selection on either exact target in a licensed session, so it is unverified. SpatialAnalyzer never rejected it. It can return in a later 3.x revision once a licensed session verifies it. Build a vector name list directly, or from a vector group with Make a Vector Name Ref List From a Vector Group. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Make a Collection Vector Group Name Ref List - Runtime Select {/* #make-a-collection-vector-group-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-a-collection-vector-group-name-ref-list---runtime-select)

Client 0.5.0 removed this method with behavioral contract major 3. SpatialAnalyzer returned MP code 2 on both exact targets, but the selected vector groups could not be read back. No replacement selects vector groups at run time on these exact targets. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Make Vector Names Unique in Vector Group {/* #make-vector-names-unique-in-vector-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group) · [gRPC Contract](/api/grpc/construction-operations-vectors-and-vector-groups#make-vector-names-unique-in-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def make_vector_names_unique_in_vector_group(
        self,
        vector_group_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## construct_vector_group_group_to_group_compare {/* #construct_vector_group_group_to_group_compare */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_vector_group_area_profile_check {/* #construct_vector_group_area_profile_check */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_vector_group_from_vector_name_ref_list {/* #construct_vector_group_from_vector_name_ref_list */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_vector_in_working_coordinates_begin_delta {/* #construct_vector_in_working_coordinates_begin_delta */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_vector_in_working_coordinates_begin_direction_magnitude {/* #construct_vector_in_working_coordinates_begin_direction_magnitude */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_vector_group_from_relationship {/* #construct_vector_group_from_relationship */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_vector_name_ref_list_from_vector_group {/* #make_vector_name_ref_list_from_vector_group */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_vector_name_ref_list_runtime_select {/* #make_vector_name_ref_list_runtime_select */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_collection_vector_group_name_ref_list_runtime_select {/* #make_collection_vector_group_name_ref_list_runtime_select */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_vector_names_unique_in_vector_group {/* #make_vector_names_unique_in_vector_group */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2026.1.0529.7)
