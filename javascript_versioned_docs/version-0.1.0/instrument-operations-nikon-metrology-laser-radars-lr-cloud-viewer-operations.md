---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations
description: Briosa 0.1.0 JavaScript and TypeScript APIs for reviewed Nikon LR Cloud Viewer MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations

```ts
export interface CloudViewerInstrumentInput {
  readonly instrument: CollectionInstrumentId;
}
```

## clearCloudViewer

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)

```ts
function clearCloudViewer(
  briosa: BriosaClient,
  input: CloudViewerInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## sendCloudToSa

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)

```ts
export interface SendCloudToSaInput extends CloudViewerInstrumentInput {
  readonly cloudName: string;
}

function sendCloudToSa(
  briosa: BriosaClient,
  input: SendCloudToSaInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

All visible viewer points are added to the active SA collection.

## setCloudViewerFilter

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)

```ts
export interface SetCloudViewerFilterInput extends CloudViewerInstrumentInput {
  readonly filterValue?: number;
}

function setCloudViewerFilter(
  briosa: BriosaClient,
  input: SetCloudViewerFilterInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`filterValue` defaults to `0`. SA describes a `0–100` quality scale; Briosa
adds no range validation.

## saveCloudViewerPointCloudFile

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)

```ts
export interface SaveCloudViewerPointCloudFileInput extends CloudViewerInstrumentInput {
  readonly filePath: string;
  readonly saveAsAscii?: boolean;
}

function saveCloudViewerPointCloudFile(
  briosa: BriosaClient,
  input: SaveCloudViewerPointCloudFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## loadCloudViewerPointCloudFile

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)

```ts
export interface LoadCloudViewerPointCloudFileInput extends CloudViewerInstrumentInput {
  readonly filePath: string;
}

function loadCloudViewerPointCloudFile(
  briosa: BriosaClient,
  input: LoadCloudViewerPointCloudFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

File paths are resolved on the local Briosa and SA machine. Save defaults to
binary; load detects ASCII or binary automatically. Embedded-file values are
not accepted. All functions are never automatically replayed.
