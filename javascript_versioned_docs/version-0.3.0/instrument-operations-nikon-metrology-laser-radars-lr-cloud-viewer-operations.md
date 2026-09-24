---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations

[SA 2026.1.0529.7](/api/javascript/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Clear Cloud Viewer {/* #clear-cloud-viewer */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)

```ts
// Member of BriosaClient
interface BriosaClient {
  clearCloudViewer(
    input: CloudViewerInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Send Cloud To SA {/* #send-cloud-to-sa */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)

```ts
// Member of BriosaClient
interface BriosaClient {
  sendCloudToSa(
    input: SendCloudToSaInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Filter {/* #set-filter */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)

```ts
// Member of BriosaClient
interface BriosaClient {
  setCloudViewerFilter(
    input: SetCloudViewerFilterInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Point Cloud File {/* #save-point-cloud-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)

```ts
// Member of BriosaClient
interface BriosaClient {
  saveCloudViewerPointCloudFile(
    input: SaveCloudViewerPointCloudFileInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load Point Cloud File {/* #load-point-cloud-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [gRPC Contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)

```ts
// Member of BriosaClient
interface BriosaClient {
  loadCloudViewerPointCloudFile(
    input: LoadCloudViewerPointCloudFileInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## clearCloudViewer {/* #clearcloudviewer */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## sendCloudToSa {/* #sendcloudtosa */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## setCloudViewerFilter {/* #setcloudviewerfilter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## saveCloudViewerPointCloudFile {/* #savecloudviewerpointcloudfile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## loadCloudViewerPointCloudFile {/* #loadcloudviewerpointcloudfile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2026.1.0529.7)
