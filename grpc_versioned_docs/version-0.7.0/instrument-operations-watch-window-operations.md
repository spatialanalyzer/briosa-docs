---
title: Instrument Operations / Watch Window Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / Watch Window Operations

[SA 2026.1.0529.7](/api/grpc/instrument-operations-watch-window-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Watch Point To Point {/* #watch-point-to-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point)

`/briosa.InstrumentOperations/WatchPointToPoint` · Operation ID: `instrument_operations.watch_point_to_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `reference_point` | `optional PointName` | Reference Point | Required |
| Request | 3 | `watch_window_properties` | `optional CollectionObjectName` | 3 DOF Watch Window Properties | Required |
| Request | 4 | `measurement_mode` | `optional string` | Measurement Mode | Empty |
| Request | 5 | `pause_mp_until_closed` | `optional bool` | Pause MP Until Closed | false |
| Request | 6 | `window_top_left_x` | `optional int32` | Window Top Left X Position | 0 |
| Request | 7 | `window_top_left_y` | `optional int32` | Window Top Left Y Position | 0 |
| Request | 8 | `window_width` | `optional int32` | Window Width | 0 |
| Request | 9 | `window_height` | `optional int32` | Window Height | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

message WatchPointToPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Watch Point To Objects {/* #watch-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects)

`/briosa.InstrumentOperations/WatchPointToObjects` · Operation ID: `instrument_operations.watch_point_to_objects`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `objects_to_consider` | `repeated CollectionObjectName` | Objects to Consider | Required |
| Request | 3 | `projection_options` | `optional ProjectionOptions` | Projection Options | Required |
| Request | 4 | `watch_window_properties` | `optional CollectionObjectName` | 3 DOF Watch Window Properties | Required |
| Request | 5 | `measurement_mode` | `optional string` | Measurement Mode | Empty |
| Request | 6 | `pause_mp_until_closed` | `optional bool` | Pause MP Until Closed | false |
| Request | 7 | `window_top_left_x` | `optional int32` | Window Top Left X Position | 0 |
| Request | 8 | `window_top_left_y` | `optional int32` | Window Top Left Y Position | 0 |
| Request | 9 | `window_width` | `optional int32` | Window Width | 0 |
| Request | 10 | `window_height` | `optional int32` | Window Height | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

message WatchPointToObjectsResult {
  MpExecutionDetails execution = 1000;
}
```

## Watch Point To Edge {/* #watch-point-to-edge */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge)

`/briosa.InstrumentOperations/WatchPointToEdge` · Operation ID: `instrument_operations.watch_point_to_edge`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `projection_reference_objects` | `repeated CollectionObjectName` | Projection Reference Objects | Required |
| Request | 3 | `measurement_reference_objects` | `repeated CollectionObjectName` | Measurement Reference Objects  | Required |
| Request | 4 | `projection_options` | `optional ProjectionOptions` | Projection Options | Required |
| Request | 5 | `watch_window_properties` | `optional CollectionObjectName` | 3 DOF Watch Window Properties | Required |
| Request | 6 | `measurement_mode` | `optional string` | Measurement Mode | Empty |
| Request | 7 | `pause_mp_until_closed` | `optional bool` | Pause MP Until Closed | false |
| Request | 8 | `window_top_left_x` | `optional int32` | Window Top Left X Position | 0 |
| Request | 9 | `window_top_left_y` | `optional int32` | Window Top Left Y Position | 0 |
| Request | 10 | `window_width` | `optional int32` | Window Width | 0 |
| Request | 11 | `window_height` | `optional int32` | Window Height | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

message WatchPointToEdgeResult {
  MpExecutionDetails execution = 1000;
}
```

## Watch Closest Point {/* #watch-closest-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point)

`/briosa.InstrumentOperations/WatchClosestPoint` · Operation ID: `instrument_operations.watch_closest_point`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `groups_to_consider` | `repeated CollectionObjectName` | Groups to Consider | Required |
| Request | 3 | `watch_window_properties` | `optional CollectionObjectName` | 3 DOF Watch Window Properties | Required |
| Request | 4 | `measurement_mode` | `optional string` | Measurement Mode | Empty |
| Request | 5 | `pause_mp_until_closed` | `optional bool` | Pause MP Until Closed | false |
| Request | 6 | `window_top_left_x` | `optional int32` | Window Top Left X Position | 0 |
| Request | 7 | `window_top_left_y` | `optional int32` | Window Top Left Y Position | 0 |
| Request | 8 | `window_width` | `optional int32` | Window Width | 0 |
| Request | 9 | `window_height` | `optional int32` | Window Height | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

message WatchClosestPointResult {
  MpExecutionDetails execution = 1000;
}
```

## Watch Instrument {/* #watch-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument)

`/briosa.InstrumentOperations/WatchInstrument` · Operation ID: `instrument_operations.watch_instrument`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `pause_mp_until_closed` | `optional bool` | Pause MP Until Closed | false |
| Request | 3 | `watch_window_properties` | `optional CollectionObjectName` | 3 DOF Watch Window Properties | Required |
| Request | 4 | `window_top_left_x` | `optional int32` | Window Top Left X Position | 0 |
| Request | 5 | `window_top_left_y` | `optional int32` | Window Top Left Y Position | 0 |
| Request | 6 | `window_width` | `optional int32` | Window Width | 0 |
| Request | 7 | `window_height` | `optional int32` | Window Height | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

message WatchInstrumentResult {
  MpExecutionDetails execution = 1000;
}
```

## Watch Point To Point With View Zooming {/* #watch-point-to-point-with-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming)

`/briosa.InstrumentOperations/WatchPointToPointWithViewZooming` · Operation ID: `instrument_operations.watch_point_to_point_with_view_zooming`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument's ID | Required |
| Request | 2 | `reference_point` | `optional PointName` | Reference Point | Required |
| Request | 3 | `update` | `optional bool` | Update(TRUE),Close(FALSE) | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
