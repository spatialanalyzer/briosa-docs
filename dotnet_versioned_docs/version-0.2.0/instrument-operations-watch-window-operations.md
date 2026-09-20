---
title: Instrument Operations / Watch Window Operations
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / Watch Window Operations

[SA 2026.1.0529.7](/api/dotnet/instrument-operations-watch-window-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/instrument-operations-watch-window-operations)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Watch Point To Point {/* #watch-point-to-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point) · [gRPC Contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-point)

```csharp
public Task WatchPointToPointAsync(
        CollectionInstrumentId instrument,
        PointName referencePoint,
        CollectionObjectName watchWindowProperties,
        string measurementMode = "",
        bool pauseMpUntilClosed = false,
        int windowTopLeftX = 0,
        int windowTopLeftY = 0,
        int windowWidth = 0,
        int windowHeight = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Objects {/* #watch-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects) · [gRPC Contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-objects)

```csharp
public Task WatchPointToObjectsAsync(
        CollectionInstrumentId instrument,
        IEnumerable<CollectionObjectName> objectsToConsider,
        ProjectionOptions projectionOptions,
        CollectionObjectName watchWindowProperties,
        string measurementMode = "",
        bool pauseMpUntilClosed = false,
        int windowTopLeftX = 0,
        int windowTopLeftY = 0,
        int windowWidth = 0,
        int windowHeight = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Edge {/* #watch-point-to-edge */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge) · [gRPC Contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-edge)

```csharp
public Task WatchPointToEdgeAsync(
        CollectionInstrumentId instrument,
        IEnumerable<CollectionObjectName> projectionReferenceObjects,
        IEnumerable<CollectionObjectName> measurementReferenceObjects,
        ProjectionOptions projectionOptions,
        CollectionObjectName watchWindowProperties,
        string measurementMode = "",
        bool pauseMpUntilClosed = false,
        int windowTopLeftX = 0,
        int windowTopLeftY = 0,
        int windowWidth = 0,
        int windowHeight = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Closest Point {/* #watch-closest-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point) · [gRPC Contract](/api/grpc/instrument-operations-watch-window-operations#watch-closest-point)

```csharp
public Task WatchClosestPointAsync(
        CollectionInstrumentId instrument,
        IEnumerable<CollectionObjectName> groupsToConsider,
        CollectionObjectName watchWindowProperties,
        string measurementMode = "",
        bool pauseMpUntilClosed = false,
        int windowTopLeftX = 0,
        int windowTopLeftY = 0,
        int windowWidth = 0,
        int windowHeight = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Instrument {/* #watch-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument) · [gRPC Contract](/api/grpc/instrument-operations-watch-window-operations#watch-instrument)

```csharp
public Task WatchInstrumentAsync(
        CollectionInstrumentId instrument,
        CollectionObjectName watchWindowProperties,
        bool pauseMpUntilClosed = false,
        int windowTopLeftX = 0,
        int windowTopLeftY = 0,
        int windowWidth = 0,
        int windowHeight = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Point With View Zooming {/* #watch-point-to-point-with-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming) · [gRPC Contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming)

```csharp
public Task WatchPointToPointWithViewZoomingAsync(
        CollectionInstrumentId instrument,
        PointName referencePoint,
        bool update = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## WatchPointToPointAsync {/* #watchpointtopointasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## WatchPointToObjectsAsync {/* #watchpointtoobjectsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## WatchPointToEdgeAsync {/* #watchpointtoedgeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## WatchClosestPointAsync {/* #watchclosestpointasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## WatchInstrumentAsync {/* #watchinstrumentasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## WatchPointToPointWithViewZoomingAsync {/* #watchpointtopointwithviewzoomingasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
