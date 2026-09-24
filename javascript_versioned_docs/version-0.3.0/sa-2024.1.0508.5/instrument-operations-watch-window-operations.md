---
title: Instrument Operations / Watch Window Operations
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations / Watch Window Operations

[SA 2026.1.0529.7](/api/javascript/instrument-operations-watch-window-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/instrument-operations-watch-window-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Watch Point To Point {/* #watch-point-to-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-point-to-point)

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

// Member of BriosaClient
interface BriosaClient {
  watchPointToPoint(
    input: WatchPointToPointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Objects {/* #watch-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-point-to-objects)

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

// Member of BriosaClient
interface BriosaClient {
  watchPointToObjects(
    input: WatchPointToObjectsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Edge {/* #watch-point-to-edge */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-edge) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-point-to-edge)

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

// Member of BriosaClient
interface BriosaClient {
  watchPointToEdge(
    input: WatchPointToEdgeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Closest Point {/* #watch-closest-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-closest-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-closest-point)

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

// Member of BriosaClient
interface BriosaClient {
  watchClosestPoint(
    input: WatchClosestPointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Instrument {/* #watch-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-instrument)

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

// Member of BriosaClient
interface BriosaClient {
  watchInstrument(
    input: WatchInstrumentInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Watch Point To Point With View Zooming {/* #watch-point-to-point-with-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-watch-window-operations#watch-point-to-point-with-view-zooming)

```ts
export interface WatchPointToPointWithViewZoomingInput {
  readonly instrument: CollectionInstrumentId;
  readonly referencePoint: PointName;
  readonly update?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  watchPointToPointWithViewZooming(
    input: WatchPointToPointWithViewZoomingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## watchPointToPoint {/* #watchpointtopoint */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watchPointToObjects {/* #watchpointtoobjects */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watchPointToEdge {/* #watchpointtoedge */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watchClosestPoint {/* #watchclosestpoint */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watchInstrument {/* #watchinstrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## watchPointToPointWithViewZooming {/* #watchpointtopointwithviewzooming */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2024.1.0508.5)
