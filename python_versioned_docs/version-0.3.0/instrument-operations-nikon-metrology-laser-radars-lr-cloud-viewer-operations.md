---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations

[SA 2026.1.0529.7](/api/python/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Clear Cloud Viewer {/* #clear-cloud-viewer */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)

```python
async def clear_cloud_viewer(
        self,
        instrument: CollectionInstrumentId,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Send Cloud To SA {/* #send-cloud-to-sa */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)

```python
async def send_cloud_to_sa(
        self,
        instrument: CollectionInstrumentId,
        cloud_name: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Filter {/* #set-filter */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)

```python
async def set_cloud_viewer_filter(
        self,
        instrument: CollectionInstrumentId,
        *,
        filter_value: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Point Cloud File {/* #save-point-cloud-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)

```python
async def save_cloud_viewer_point_cloud_file(
        self,
        instrument: CollectionInstrumentId,
        file_path: str,
        *,
        save_as_ascii: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load Point Cloud File {/* #load-point-cloud-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)

```python
async def load_cloud_viewer_point_cloud_file(
        self,
        instrument: CollectionInstrumentId,
        file_path: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## clear_cloud_viewer {/* #clear_cloud_viewer */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## send_cloud_to_sa {/* #send_cloud_to_sa */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_cloud_viewer_filter {/* #set_cloud_viewer_filter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## save_cloud_viewer_point_cloud_file {/* #save_cloud_viewer_point_cloud_file */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## load_cloud_viewer_point_cloud_file {/* #load_cloud_viewer_point_cloud_file */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
