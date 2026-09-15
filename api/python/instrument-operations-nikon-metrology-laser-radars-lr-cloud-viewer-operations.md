---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations
description: Unreleased Briosa Python APIs for reviewed Nikon LR Cloud Viewer MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## clear_cloud_viewer

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)

```python
async def clear_cloud_viewer(
    self,
    instrument: CollectionInstrumentId,
) -> None: ...
```

## send_cloud_to_sa

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)

```python
async def send_cloud_to_sa(
    self,
    instrument: CollectionInstrumentId,
    cloud_name: str,
) -> None: ...
```

All visible viewer points are added to the active SA collection.

## set_cloud_viewer_filter

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)

```python
async def set_cloud_viewer_filter(
    self,
    instrument: CollectionInstrumentId,
    *,
    filter_value: int = 0,
) -> None: ...
```

SA describes a `0–100` quality scale; Briosa adds no range validation.

## save_cloud_viewer_point_cloud_file

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)

```python
async def save_cloud_viewer_point_cloud_file(
    self,
    instrument: CollectionInstrumentId,
    file_path: str,
    *,
    save_as_ascii: bool = False,
) -> None: ...
```

## load_cloud_viewer_point_cloud_file

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)

```python
async def load_cloud_viewer_point_cloud_file(
    self,
    instrument: CollectionInstrumentId,
    file_path: str,
) -> None: ...
```

File paths are resolved on the local Briosa and SA machine. Save defaults to
binary; load detects ASCII or binary automatically. Embedded-file values are
not accepted. All coroutines are never automatically replayed.
