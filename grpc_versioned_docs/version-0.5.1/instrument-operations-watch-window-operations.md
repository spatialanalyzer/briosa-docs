---
title: Instrument Operations / Watch Window Operations
description: Released gRPC contract for reviewed Watch Window Operations.
toc_max_heading_level: 2
---

# Instrument Operations / Watch Window Operations

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

`Watch Window Template 3D` remains Uncommitted pending exact-target signature clarification.

The RPCs use `briosa.InstrumentOperations`, return
`MpExecutionDetails execution = 1000`, and are never automatically replayed.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Watch Point To Point | `WatchPointToPoint` | `instrument_operations.watch_point_to_point` |
| Watch Point To Objects | `WatchPointToObjects` | `instrument_operations.watch_point_to_objects` |
| Watch Point To Edge | `WatchPointToEdge` | `instrument_operations.watch_point_to_edge` |
| Watch Closest Point | `WatchClosestPoint` | `instrument_operations.watch_closest_point` |
| Watch Instrument | `WatchInstrument` | `instrument_operations.watch_instrument` |
| Watch Point To Point With View Zooming | `WatchPointToPointWithViewZooming` | `instrument_operations.watch_point_to_point_with_view_zooming` |

## Watch Point To Point

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point)

**Operation ID:** `instrument_operations.watch_point_to_point`

```proto
rpc WatchPointToPoint(WatchPointToPointRequest) returns (WatchPointToPointResult);
message WatchPointToPointRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName reference_point = 2;
  optional CollectionObjectName watch_window_properties = 3;
  optional string measurement_mode = 4;
  optional bool pause_mp_until_closed = 5;
  optional int32 window_top_left_x = 6;
  optional int32 window_top_left_y = 7;
  optional int32 window_width = 8;
  optional int32 window_height = 9;
}
message WatchPointToPointResult { MpExecutionDetails execution = 1000; }
```

`watch_window_properties` identifies a `3D Template / Watch Window Template`
object. `measurement_mode` defaults to an empty string. The Boolean defaults to
`false`, and all four window geometry values default to `0`.

When `pause_mp_until_closed` is `true`, the RPC may remain active until a user
closes the SA watch window. Client cancellation does not prove that SA closed
the window or stopped the underlying command.

For SA 2026.1.0529.7, the exact SDK binding uses `3 DOF Watch Window
Properties` even though the installed command-reference page describes that
position as a numeric tolerance. This contract follows the exact-target SDK
binding.

## Watch Point To Objects

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects)

```proto
rpc WatchPointToObjects(WatchPointToObjectsRequest) returns (WatchPointToObjectsResult);
message WatchPointToObjectsRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName objects_to_consider = 2;
  optional ProjectionOptions projection_options = 3;
  optional CollectionObjectName watch_window_properties = 4;
  optional string measurement_mode = 5;
  optional bool pause_mp_until_closed = 6;
  optional int32 window_top_left_x = 7;
  optional int32 window_top_left_y = 8;
  optional int32 window_width = 9;
  optional int32 window_height = 10;
}
message WatchPointToObjectsResult { MpExecutionDetails execution = 1000; }
```

The object list, projection options, and watch-window template are required.
The exact projection defaults use `Object To Probe Vectors`, disabled options,
and zero numeric values. The mode defaults to `""`, pause defaults to `false`,
and all placement values default to `0`.

## Watch Point To Edge

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge)

```proto
rpc WatchPointToEdge(WatchPointToEdgeRequest) returns (WatchPointToEdgeResult);
message WatchPointToEdgeRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName projection_reference_objects = 2;
  repeated CollectionObjectName measurement_reference_objects = 3;
  optional ProjectionOptions projection_options = 4;
  optional CollectionObjectName watch_window_properties = 5;
  optional string measurement_mode = 6;
  optional bool pause_mp_until_closed = 7;
  optional int32 window_top_left_x = 8;
  optional int32 window_top_left_y = 9;
  optional int32 window_width = 10;
  optional int32 window_height = 11;
}
message WatchPointToEdgeResult { MpExecutionDetails execution = 1000; }
```

Both object lists are required. The worker maps
`measurement_reference_objects` to the exact SDK label `Measurement Reference
Objects `, including its trailing space. Other defaults match
`WatchPointToObjects`.

## Watch Closest Point

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point)

```proto
rpc WatchClosestPoint(WatchClosestPointRequest) returns (WatchClosestPointResult);
message WatchClosestPointRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName groups_to_consider = 2;
  optional CollectionObjectName watch_window_properties = 3;
  optional string measurement_mode = 4;
  optional bool pause_mp_until_closed = 5;
  optional int32 window_top_left_x = 6;
  optional int32 window_top_left_y = 7;
  optional int32 window_width = 8;
  optional int32 window_height = 9;
}
message WatchClosestPointResult { MpExecutionDetails execution = 1000; }
```

`groups_to_consider` contains Point Group references. The template is required;
the mode, pause, and placement fields use the same defaults described above.

## Watch Instrument

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument)

```proto
rpc WatchInstrument(WatchInstrumentRequest) returns (WatchInstrumentResult);
message WatchInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool pause_mp_until_closed = 2;
  optional CollectionObjectName watch_window_properties = 3;
  optional int32 window_top_left_x = 4;
  optional int32 window_top_left_y = 5;
  optional int32 window_width = 6;
  optional int32 window_height = 7;
}
message WatchInstrumentResult { MpExecutionDetails execution = 1000; }
```

The watch-window template is required. Pause defaults to `false`, and every
placement field defaults to `0`.

## Watch Point To Point With View Zooming

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming)

```proto
rpc WatchPointToPointWithViewZooming(WatchPointToPointWithViewZoomingRequest) returns (WatchPointToPointWithViewZoomingResult);
message WatchPointToPointWithViewZoomingRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName reference_point = 2;
  optional bool update = 3;
}
message WatchPointToPointWithViewZoomingResult {
  MpExecutionDetails execution = 1000;
}
```

`update` maps to `Update(TRUE),Close(FALSE)` and defaults to `true`. Briosa
retains no watch-window state; callers coordinate update and close operations
against live SA state.

For every pausing watch operation, client cancellation does not prove that SA
closed the window or stopped the underlying command.
