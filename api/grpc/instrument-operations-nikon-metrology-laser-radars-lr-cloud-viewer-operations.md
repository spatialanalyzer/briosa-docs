---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations
description: Next gRPC contracts for reviewed Nikon LR Cloud Viewer MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations

:::note[Next Contracts]

These five RPCs are approved contracts but are not callable until released.

:::

All RPCs use `briosa.InstrumentOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Clear Cloud Viewer | `ClearCloudViewer` | `instrument_operations.clear_cloud_viewer` |
| Send Cloud To SA | `SendCloudToSa` | `instrument_operations.send_cloud_to_sa` |
| Set Filter | `SetCloudViewerFilter` | `instrument_operations.set_cloud_viewer_filter` |
| Save Point Cloud File | `SaveCloudViewerPointCloudFile` | `instrument_operations.save_cloud_viewer_point_cloud_file` |
| Load Point Cloud File | `LoadCloudViewerPointCloudFile` | `instrument_operations.load_cloud_viewer_point_cloud_file` |

## Clear Cloud Viewer

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)

```proto
rpc ClearCloudViewer(ClearCloudViewerRequest) returns (ClearCloudViewerResult);
message ClearCloudViewerRequest {
  optional CollectionInstrumentId instrument = 1;
}
message ClearCloudViewerResult { MpExecutionDetails execution = 1000; }
```

## Send Cloud To SA

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)

```proto
rpc SendCloudToSa(SendCloudToSaRequest) returns (SendCloudToSaResult);
message SendCloudToSaRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string cloud_name = 2;
}
message SendCloudToSaResult { MpExecutionDetails execution = 1000; }
```

The operation sends all points visible in the selected viewer to the active SA
collection under `cloud_name`.

## Set Filter

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)

```proto
rpc SetCloudViewerFilter(SetCloudViewerFilterRequest) returns (SetCloudViewerFilterResult);
message SetCloudViewerFilterRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 filter_value = 2;
}
message SetCloudViewerFilterResult { MpExecutionDetails execution = 1000; }
```

`filter_value` defaults to `0`. SA describes a `0–100` quality scale; Briosa
adds no range validation.

## Save Point Cloud File

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)

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

`file_path` is a path on the local Briosa and SA machine. `save_as_ascii`
defaults to `false`, selecting the MP's binary format. Embedded files are not
part of this exact-target contract.

## Load Point Cloud File

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)

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

The path is local to the Briosa and SA machine. SA detects ASCII or binary
format. All five operations require the instrument in the active collection and
an active instrument interface.
