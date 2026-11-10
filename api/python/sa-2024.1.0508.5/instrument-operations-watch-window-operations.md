---
title: Instrument Operations / Watch Window Operations
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Watch Window Operations

[SA 2026.1.0529.7](/api/python/instrument-operations-watch-window-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/instrument-operations-watch-window-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Watch Point To Point {/* #watch-point-to-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-point-to-point)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

A request that sets `pause_mp_until_closed` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def watch_point_to_point(
        self,
        instrument: CollectionInstrumentId,
        reference_point: PointName,
        watch_window_properties: CollectionObjectName,
        *,
        measurement_mode: str = "",
        pause_mp_until_closed: bool = False,
        window_top_left_x: int = 0,
        window_top_left_y: int = 0,
        window_width: int = 0,
        window_height: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Objects {/* #watch-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-point-to-objects)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

A request that sets `pause_mp_until_closed` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def watch_point_to_objects(
        self,
        instrument: CollectionInstrumentId,
        objects_to_consider: Iterable[CollectionObjectName],
        projection_options: ProjectionOptions,
        watch_window_properties: CollectionObjectName,
        *,
        measurement_mode: str = "",
        pause_mp_until_closed: bool = False,
        window_top_left_x: int = 0,
        window_top_left_y: int = 0,
        window_width: int = 0,
        window_height: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Edge {/* #watch-point-to-edge */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-point-to-edge)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

A request that sets `pause_mp_until_closed` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def watch_point_to_edge(
        self,
        instrument: CollectionInstrumentId,
        projection_reference_objects: Iterable[CollectionObjectName],
        measurement_reference_objects: Iterable[CollectionObjectName],
        projection_options: ProjectionOptions,
        watch_window_properties: CollectionObjectName,
        *,
        measurement_mode: str = "",
        pause_mp_until_closed: bool = False,
        window_top_left_x: int = 0,
        window_top_left_y: int = 0,
        window_width: int = 0,
        window_height: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Closest Point {/* #watch-closest-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-closest-point)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

A request that sets `pause_mp_until_closed` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def watch_closest_point(
        self,
        instrument: CollectionInstrumentId,
        groups_to_consider: Iterable[CollectionObjectName],
        watch_window_properties: CollectionObjectName,
        *,
        measurement_mode: str = "",
        pause_mp_until_closed: bool = False,
        window_top_left_x: int = 0,
        window_top_left_y: int = 0,
        window_width: int = 0,
        window_height: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Instrument {/* #watch-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-instrument)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

A request that sets `pause_mp_until_closed` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```python
async def watch_instrument(
        self,
        instrument: CollectionInstrumentId,
        watch_window_properties: CollectionObjectName,
        *,
        pause_mp_until_closed: bool = False,
        window_top_left_x: int = 0,
        window_top_left_y: int = 0,
        window_width: int = 0,
        window_height: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Point With View Zooming {/* #watch-point-to-point-with-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```python
async def watch_point_to_point_with_view_zooming(
        self,
        instrument: CollectionInstrumentId,
        reference_point: PointName,
        *,
        update: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## watch_point_to_point {/* #watch_point_to_point */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watch_point_to_objects {/* #watch_point_to_objects */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watch_point_to_edge {/* #watch_point_to_edge */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watch_closest_point {/* #watch_closest_point */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watch_instrument {/* #watch_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watch_point_to_point_with_view_zooming {/* #watch_point_to_point_with_view_zooming */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2024.1.0508.5)
