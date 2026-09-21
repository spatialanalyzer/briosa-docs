---
title: Instrument Operations / Watch Window Operations
description: Briosa 0.1.0 .NET API for reviewed Watch Window Operations.
toc_max_heading_level: 2
---

# Instrument Operations / Watch Window Operations

## WatchPointToPointAsync

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point) · [gRPC contract](/api/grpc/0.5.1/instrument-operations-watch-window-operations#watch-point-to-point)

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

`watchWindowProperties` must identify a `3D Template / Watch Window Template`
object. Setting `pauseMpUntilClosed` to `true` can keep the call active until a
user closes the SA watch window. Cancellation does not prove that SA closed the
window or stopped the command, and Briosa never automatically replays it.

## WatchPointToObjectsAsync

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects) · [gRPC contract](/api/grpc/0.5.1/instrument-operations-watch-window-operations#watch-point-to-objects)

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

## WatchPointToEdgeAsync

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge) · [gRPC contract](/api/grpc/0.5.1/instrument-operations-watch-window-operations#watch-point-to-edge)

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

The worker preserves the exact trailing space in the SDK label `Measurement
Reference Objects `.

## WatchClosestPointAsync

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point) · [gRPC contract](/api/grpc/0.5.1/instrument-operations-watch-window-operations#watch-closest-point)

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

`groupsToConsider` must contain Point Group references.

## WatchInstrumentAsync

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument) · [gRPC contract](/api/grpc/0.5.1/instrument-operations-watch-window-operations#watch-instrument)

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

## WatchPointToPointWithViewZoomingAsync

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming) · [gRPC contract](/api/grpc/0.5.1/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming)

```csharp
public Task WatchPointToPointWithViewZoomingAsync(
    CollectionInstrumentId instrument,
    PointName referencePoint,
    bool update = true,
    CancellationToken cancellationToken = default);
```

`update` maps to `Update(TRUE),Close(FALSE)`. Briosa retains no watch-window
state; callers coordinate the sequence. The projection defaults used by the
object-based methods preserve the exact MP values. For pausing methods,
cancellation does not prove that SA closed the window or stopped the command.
