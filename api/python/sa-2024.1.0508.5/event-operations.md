---
title: Event Operations
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Event Operations

[SA 2026.1.0529.7](/api/python/event-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/event-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Delete Event {/* #delete-event */}

[MP Catalog](/mp-command-catalog/commands/event-operations#delete-event) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#delete-event)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```python
async def delete_event(
        self,
        event_name: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Event Ref List {/* #export-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#export-event-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#export-event-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```python
async def export_event_ref_list(
        self,
        event_list: Iterable[CollectionItemName],
        file_path: FileReference,
        *,
        decimal_precision: int = 6,
        overwrite_existing_file: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Event From Event Ref List {/* #get-i-th-event-from-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#get-i-th-event-from-event-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#get-i-th-event-from-event-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_ith_event_from_event_ref_list(
        self,
        event_list: Iterable[CollectionItemName],
        *,
        event_index: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> CollectionItemName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Events in Event Ref List {/* #get-number-of-events-in-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#get-number-of-events-in-event-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#get-number-of-events-in-event-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_number_of_events_in_event_ref_list(
        self,
        event_list: Iterable[CollectionItemName],
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Event {/* #rename-event */}

[MP Catalog](/mp-command-catalog/commands/event-operations#rename-event) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#rename-event)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```python
async def rename_event(
        self,
        original_event_name: CollectionObjectName,
        new_event_name: CollectionObjectName,
        *,
        overwrite_if_exists: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2024.1.0508.5)
