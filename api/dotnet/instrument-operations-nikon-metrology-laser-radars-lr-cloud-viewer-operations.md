---
title: Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations
description: Unreleased Briosa .NET APIs for reviewed Nikon LR Cloud Viewer MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / Nikon Metrology Laser Radars LR / LR Cloud Viewer Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## ClearCloudViewerAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#clear-cloud-viewer)

```csharp
public Task ClearCloudViewerAsync(
    CollectionInstrumentId instrument,
    CancellationToken cancellationToken = default);
```

## SendCloudToSaAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#send-cloud-to-sa)

```csharp
public Task SendCloudToSaAsync(
    CollectionInstrumentId instrument,
    string cloudName,
    CancellationToken cancellationToken = default);
```

All visible viewer points are added to the active SA collection.

## SetCloudViewerFilterAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#set-filter)

```csharp
public Task SetCloudViewerFilterAsync(
    CollectionInstrumentId instrument,
    int filterValue = 0,
    CancellationToken cancellationToken = default);
```

SA describes a `0–100` quality scale; Briosa adds no range validation.

## SaveCloudViewerPointCloudFileAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#save-point-cloud-file)

```csharp
public Task SaveCloudViewerPointCloudFileAsync(
    CollectionInstrumentId instrument,
    string filePath,
    bool saveAsAscii = false,
    CancellationToken cancellationToken = default);
```

## LoadCloudViewerPointCloudFileAsync

[MP command](/mp-command-catalog/commands/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file) · [gRPC contract](/api/grpc/instrument-operations-nikon-metrology-laser-radars-lr-cloud-viewer-operations#load-point-cloud-file)

```csharp
public Task LoadCloudViewerPointCloudFileAsync(
    CollectionInstrumentId instrument,
    string filePath,
    CancellationToken cancellationToken = default);
```

File paths are resolved on the local Briosa and SA machine. Save defaults to
binary; load detects ASCII or binary automatically. Embedded-file values are
not accepted. All methods are never automatically replayed.
