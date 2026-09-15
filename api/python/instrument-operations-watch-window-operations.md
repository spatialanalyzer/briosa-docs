---
title: Instrument Operations / Watch Window Operations
description: Unreleased Briosa Python API for reviewed Watch Window Operations.
toc_max_heading_level: 2
---

# Instrument Operations / Watch Window Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## watch_point_to_point

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-point)

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
) -> None: ...
```

`watch_window_properties` must identify a `3D Template / Watch Window Template`
object. Setting `pause_mp_until_closed=True` can keep the call active until a
user closes the SA watch window. Cancellation does not prove that SA closed the
window or stopped the command, and Briosa never automatically replays it.

## watch_point_to_objects

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-objects)

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
) -> None: ...
```

## watch_point_to_edge

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-edge)

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
) -> None: ...
```

The worker preserves the exact trailing space in the SDK label `Measurement
Reference Objects `.

## watch_closest_point

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-closest-point)

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
) -> None: ...
```

`groups_to_consider` must contain Point Group references.

## watch_instrument

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-instrument)

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
) -> None: ...
```

## watch_point_to_point_with_view_zooming

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming)

```python
async def watch_point_to_point_with_view_zooming(
    self,
    instrument: CollectionInstrumentId,
    reference_point: PointName,
    *,
    update: bool = True,
) -> None: ...
```

`update` maps to `Update(TRUE),Close(FALSE)`. Briosa retains no watch-window
state; callers coordinate the sequence. The object-based methods preserve the
exact MP projection defaults. For pausing methods, cancellation does not prove
that SA closed the window or stopped the command.
