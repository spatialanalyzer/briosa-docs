---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations

[SA 2026.1.0529.7](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Clear Cloud Viewer {/* #clear-cloud-viewer */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)

`/briosa.InstrumentOperations/ClearCloudViewer` · Operation ID: `instrument_operations.clear_cloud_viewer`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ClearCloudViewer(ClearCloudViewerRequest) returns (ClearCloudViewerResult);

message ClearCloudViewerRequest {
  optional CollectionInstrumentId instrument = 1;
}

message ClearCloudViewerResult {
  MpExecutionDetails execution = 1000;
}
```

## Send Cloud To SA {/* #send-cloud-to-sa */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)

`/briosa.InstrumentOperations/SendCloudToSa` · Operation ID: `instrument_operations.send_cloud_to_sa`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `cloud_name` | `optional string` | Cloud Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SendCloudToSa(SendCloudToSaRequest) returns (SendCloudToSaResult);

message SendCloudToSaRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string cloud_name = 2;
}

message SendCloudToSaResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Filter {/* #set-filter */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)

`/briosa.InstrumentOperations/SetCloudViewerFilter` · Operation ID: `instrument_operations.set_cloud_viewer_filter`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `filter_value` | `optional int32` | Filter Value | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCloudViewerFilter(SetCloudViewerFilterRequest) returns (SetCloudViewerFilterResult);

message SetCloudViewerFilterRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 filter_value = 2;
}

message SetCloudViewerFilterResult {
  MpExecutionDetails execution = 1000;
}
```

## Save Point Cloud File {/* #save-point-cloud-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)

`/briosa.InstrumentOperations/SaveCloudViewerPointCloudFile` · Operation ID: `instrument_operations.save_cloud_viewer_point_cloud_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `file_path` | `optional string` | File Path | Omitted |
| Request | 3 | `save_as_ascii` | `optional bool` | Save as Ascii | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SaveCloudViewerPointCloudFile(SaveCloudViewerPointCloudFileRequest) returns (SaveCloudViewerPointCloudFileResult);

message SaveCloudViewerPointCloudFileRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string file_path = 2;
  optional bool save_as_ascii = 3;
}

message SaveCloudViewerPointCloudFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Load Point Cloud File {/* #load-point-cloud-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)

`/briosa.InstrumentOperations/LoadCloudViewerPointCloudFile` · Operation ID: `instrument_operations.load_cloud_viewer_point_cloud_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `optional CollectionInstrumentId` | Instrument ID | Required |
| Request | 2 | `file_path` | `optional string` | File Path | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc LoadCloudViewerPointCloudFile(LoadCloudViewerPointCloudFileRequest) returns (LoadCloudViewerPointCloudFileResult);

message LoadCloudViewerPointCloudFileRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string file_path = 2;
}

message LoadCloudViewerPointCloudFileResult {
  MpExecutionDetails execution = 1000;
}
```

## RPC Index {/* #rpc-index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2026.1.0529.7)
