---
title: Event Operations
description: Current and next gRPC contracts for supported Event Operations MP commands.
toc_max_heading_level: 2
---

# Event Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Delete Event

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Event](/mp-command-catalog/commands/event-operations#delete-event) |
| Service | `briosa.EventOperations` |
| RPC | `DeleteEvent` |
| Operation ID | `event_operations.delete_event` |
| Route | `/briosa.EventOperations/DeleteEvent` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `event_name` | `CollectionObjectName` | `Event Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteEvent(DeleteEventRequest) returns (DeleteEventResult);

message DeleteEventRequest {
  optional CollectionObjectName event_name = 1;
}

message DeleteEventResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Export Event Ref List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Export Event Ref List](/mp-command-catalog/commands/event-operations#export-event-ref-list) |
| Service | `briosa.EventOperations` |
| RPC | `ExportEventRefList` |
| Operation ID | `event_operations.export_event_ref_list` |
| Route | `/briosa.EventOperations/ExportEventRefList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `event_list` | `repeated CollectionObjectName` | `Event List` | Required |
| Request | 2 | `file_path` | `FileReference` | `File Path` | Required |
| Request | 3 | `decimal_precision` | `int32` | `Decimal Precision` | 6 |
| Request | 4 | `overwrite_existing_file` | `bool` | `Overwrite existing file?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ExportEventRefList(ExportEventRefListRequest) returns (ExportEventRefListResult);

message ExportEventRefListRequest {
  repeated CollectionObjectName event_list = 1;
  optional FileReference file_path = 2;
  optional int32 decimal_precision = 3;
  optional bool overwrite_existing_file = 4;
}

message ExportEventRefListResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get i-th Event From Event Ref List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get i-th Event From Event Ref List](/mp-command-catalog/commands/event-operations#get-i-th-event-from-event-ref-list) |
| Service | `briosa.EventOperations` |
| RPC | `GetIthEventFromEventRefList` |
| Operation ID | `event_operations.get_ith_event_from_event_ref_list` |
| Route | `/briosa.EventOperations/GetIthEventFromEventRefList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `event_list` | `repeated CollectionObjectName` | `Event List` | Required |
| Request | 2 | `event_index` | `int32` | `Event Index` | 0 |
| Result | 1 | `resultant_item` | `CollectionObjectName` | `Resultant Item` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetIthEventFromEventRefList(GetIthEventFromEventRefListRequest) returns (GetIthEventFromEventRefListResult);

message GetIthEventFromEventRefListRequest {
  repeated CollectionObjectName event_list = 1;
  optional int32 event_index = 2;
}

message GetIthEventFromEventRefListResult {
  optional CollectionObjectName resultant_item = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Number of Events in Event Ref List

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Number of Events in Event Ref List](/mp-command-catalog/commands/event-operations#get-number-of-events-in-event-ref-list) |
| Service | `briosa.EventOperations` |
| RPC | `GetNumberOfEventsInEventRefList` |
| Operation ID | `event_operations.get_number_of_events_in_event_ref_list` |
| Route | `/briosa.EventOperations/GetNumberOfEventsInEventRefList` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `event_list` | `repeated CollectionObjectName` | `Event List` | Required |
| Result | 1 | `total_count` | `int32` | `Total Count` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetNumberOfEventsInEventRefList(GetNumberOfEventsInEventRefListRequest) returns (GetNumberOfEventsInEventRefListResult);

message GetNumberOfEventsInEventRefListRequest {
  repeated CollectionObjectName event_list = 1;
}

message GetNumberOfEventsInEventRefListResult {
  optional int32 total_count = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Rename Event

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Rename Event](/mp-command-catalog/commands/event-operations#rename-event) |
| Service | `briosa.EventOperations` |
| RPC | `RenameEvent` |
| Operation ID | `event_operations.rename_event` |
| Route | `/briosa.EventOperations/RenameEvent` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_event_name` | `CollectionObjectName` | `Original Event Name` | Required |
| Request | 2 | `new_event_name` | `CollectionObjectName` | `New Event Name` | Required |
| Request | 3 | `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RenameEvent(RenameEventRequest) returns (RenameEventResult);

message RenameEventRequest {
  optional CollectionObjectName original_event_name = 1;
  optional CollectionObjectName new_event_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenameEventResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
