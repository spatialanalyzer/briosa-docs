---
title: Instrument Operations / Watch Window Operations
description: Next Briosa JavaScript and TypeScript API for reviewed Watch Window Operations.
toc_max_heading_level: 2
---

# Instrument Operations / Watch Window Operations

:::note[Next JavaScript and TypeScript Contract]

Six of the seven reviewed subgroup commands have approved functions. They are
not released support until this documentation is versioned for a published
package. `Watch Window Template 3D` remains Uncommitted.

:::

## watchPointToPoint

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-point)

```ts
export interface WatchPointToPointInput {
  readonly instrument: CollectionInstrumentId;
  readonly referencePoint: PointName;
  readonly watchWindowProperties: CollectionObjectName;
  readonly measurementMode?: string;
  readonly pauseMpUntilClosed?: boolean;
  readonly windowTopLeftX?: number;
  readonly windowTopLeftY?: number;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
}

function watchPointToPoint(
  briosa: BriosaClient,
  input: WatchPointToPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`watchWindowProperties` must identify a `3D Template / Watch Window Template`
object. `measurementMode` defaults to an empty string, the Boolean defaults to
`false`, and every geometry value defaults to `0`.

Setting `pauseMpUntilClosed: true` can keep the call active until a user closes
the SA watch window. Cancellation does not prove that SA closed the window or
stopped the command, and Briosa never automatically replays it.

## watchPointToObjects

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-objects)

```ts
export interface WatchPointToObjectsInput {
  readonly instrument: CollectionInstrumentId;
  readonly objectsToConsider: readonly CollectionObjectName[];
  readonly projectionOptions: ProjectionOptions;
  readonly watchWindowProperties: CollectionObjectName;
  readonly measurementMode?: string;
  readonly pauseMpUntilClosed?: boolean;
  readonly windowTopLeftX?: number;
  readonly windowTopLeftY?: number;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
}

function watchPointToObjects(
  briosa: BriosaClient,
  input: WatchPointToObjectsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## watchPointToEdge

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-edge)

```ts
export interface WatchPointToEdgeInput {
  readonly instrument: CollectionInstrumentId;
  readonly projectionReferenceObjects: readonly CollectionObjectName[];
  readonly measurementReferenceObjects: readonly CollectionObjectName[];
  readonly projectionOptions: ProjectionOptions;
  readonly watchWindowProperties: CollectionObjectName;
  readonly measurementMode?: string;
  readonly pauseMpUntilClosed?: boolean;
  readonly windowTopLeftX?: number;
  readonly windowTopLeftY?: number;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
}

function watchPointToEdge(
  briosa: BriosaClient,
  input: WatchPointToEdgeInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The worker preserves the exact trailing space in the SDK label `Measurement
Reference Objects `.

## watchClosestPoint

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-closest-point)

```ts
export interface WatchClosestPointInput {
  readonly instrument: CollectionInstrumentId;
  readonly groupsToConsider: readonly CollectionObjectName[];
  readonly watchWindowProperties: CollectionObjectName;
  readonly measurementMode?: string;
  readonly pauseMpUntilClosed?: boolean;
  readonly windowTopLeftX?: number;
  readonly windowTopLeftY?: number;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
}

function watchClosestPoint(
  briosa: BriosaClient,
  input: WatchClosestPointInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`groupsToConsider` must contain Point Group references.

## watchInstrument

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-instrument)

```ts
export interface WatchInstrumentInput {
  readonly instrument: CollectionInstrumentId;
  readonly watchWindowProperties: CollectionObjectName;
  readonly pauseMpUntilClosed?: boolean;
  readonly windowTopLeftX?: number;
  readonly windowTopLeftY?: number;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
}

function watchInstrument(
  briosa: BriosaClient,
  input: WatchInstrumentInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## watchPointToPointWithViewZooming

[MP command](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming) · [gRPC contract](/api/grpc/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming)

```ts
export interface WatchPointToPointWithViewZoomingInput {
  readonly instrument: CollectionInstrumentId;
  readonly referencePoint: PointName;
  readonly update?: boolean;
}

function watchPointToPointWithViewZooming(
  briosa: BriosaClient,
  input: WatchPointToPointWithViewZoomingInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`update` defaults to `true` and maps to `Update(TRUE),Close(FALSE)`. Briosa
retains no watch-window state; callers coordinate the sequence. The
object-based methods preserve exact MP projection defaults. For pausing
methods, cancellation does not prove that SA closed the window or stopped the
command.
