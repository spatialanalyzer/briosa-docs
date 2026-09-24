---
title: Event Operations
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Event Operations

[SA 2026.1.0529.7](/api/grpc/event-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/event-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Event {/* #delete-event */}

[MP Catalog](/mp-command-catalog/commands/event-operations#delete-event)

`/briosa.EventOperations/DeleteEvent` · Operation ID: `event_operations.delete_event`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `event_name` | `optional CollectionObjectName` | Event Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteEvent(DeleteEventRequest) returns (DeleteEventResult);

message DeleteEventRequest {
  optional CollectionObjectName event_name = 1;
}

message DeleteEventResult {
  MpExecutionDetails execution = 1000;
}
```

## Export Event Ref List {/* #export-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#export-event-ref-list)

`/briosa.EventOperations/ExportEventRefList` · Operation ID: `event_operations.export_event_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `event_list` | `repeated CollectionItemName` | Event List | Required |
| Request | 2 | `file_path` | `optional FileReference` | File Path | Required |
| Request | 3 | `decimal_precision` | `optional int32` | Decimal Precision | 6 |
| Request | 4 | `overwrite_existing_file` | `optional bool` | Overwrite existing file? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ExportEventRefList(ExportEventRefListRequest) returns (ExportEventRefListResult);

message ExportEventRefListRequest {
  repeated CollectionItemName event_list = 1;
  optional FileReference file_path = 2;
  optional int32 decimal_precision = 3;
  optional bool overwrite_existing_file = 4;
}

message ExportEventRefListResult {
  MpExecutionDetails execution = 1000;
}
```

## Get i-th Event From Event Ref List {/* #get-i-th-event-from-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#get-i-th-event-from-event-ref-list)

`/briosa.EventOperations/GetIthEventFromEventRefList` · Operation ID: `event_operations.get_ith_event_from_event_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `event_list` | `repeated CollectionItemName` | Event List | Required |
| Request | 2 | `event_index` | `optional int32` | Event Index | 0 |
| Result | 1 | `resultant_item` | `optional CollectionItemName` | Resultant Item | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetIthEventFromEventRefList(GetIthEventFromEventRefListRequest) returns (GetIthEventFromEventRefListResult);

message GetIthEventFromEventRefListRequest {
  repeated CollectionItemName event_list = 1;
  optional int32 event_index = 2;
}

message GetIthEventFromEventRefListResult {
  optional CollectionItemName resultant_item = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Number of Events in Event Ref List {/* #get-number-of-events-in-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#get-number-of-events-in-event-ref-list)

`/briosa.EventOperations/GetNumberOfEventsInEventRefList` · Operation ID: `event_operations.get_number_of_events_in_event_ref_list`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `event_list` | `repeated CollectionItemName` | Event List | Required |
| Result | 1 | `total_count` | `optional int32` | Total Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetNumberOfEventsInEventRefList(GetNumberOfEventsInEventRefListRequest) returns (GetNumberOfEventsInEventRefListResult);

message GetNumberOfEventsInEventRefListRequest {
  repeated CollectionItemName event_list = 1;
}

message GetNumberOfEventsInEventRefListResult {
  optional int32 total_count = 1;
  MpExecutionDetails execution = 1000;
}
```

## Rename Event {/* #rename-event */}

[MP Catalog](/mp-command-catalog/commands/event-operations#rename-event)

`/briosa.EventOperations/RenameEvent` · Operation ID: `event_operations.rename_event`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_event_name` | `optional CollectionObjectName` | Original Event Name | Required |
| Request | 2 | `new_event_name` | `optional CollectionObjectName` | New Event Name | Required |
| Request | 3 | `overwrite_if_exists` | `optional bool` | Overwrite if exists? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
