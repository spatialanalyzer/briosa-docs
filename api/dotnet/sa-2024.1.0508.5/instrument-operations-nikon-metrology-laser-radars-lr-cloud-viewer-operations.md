---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations

[SA 2026.1.0529.7](/api/dotnet/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Clear Cloud Viewer {/* #clear-cloud-viewer */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `destructive`, `device_session` · **Duration Class:** `long_running`

```csharp
public Task ClearCloudViewerAsync(
        CollectionInstrumentId instrument,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Send Cloud To SA {/* #send-cloud-to-sa */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task SendCloudToSaAsync(
        CollectionInstrumentId instrument,
        string cloudName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Filter {/* #set-filter */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task SetCloudViewerFilterAsync(
        CollectionInstrumentId instrument,
        int filterValue = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Point Cloud File {/* #save-point-cloud-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `filesystem_write`, `device_session` · **Duration Class:** `long_running`

```csharp
public Task SaveCloudViewerPointCloudFileAsync(
        CollectionInstrumentId instrument,
        string filePath,
        bool saveAsAscii = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load Point Cloud File {/* #load-point-cloud-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `filesystem_read`, `device_session` · **Duration Class:** `long_running`

```csharp
public Task LoadCloudViewerPointCloudFileAsync(
        CollectionInstrumentId instrument,
        string filePath,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## ClearCloudViewerAsync {/* #clearcloudviewerasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SendCloudToSaAsync {/* #sendcloudtosaasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetCloudViewerFilterAsync {/* #setcloudviewerfilterasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SaveCloudViewerPointCloudFileAsync {/* #savecloudviewerpointcloudfileasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## LoadCloudViewerPointCloudFileAsync {/* #loadcloudviewerpointcloudfileasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
