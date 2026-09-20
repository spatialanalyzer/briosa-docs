---
title: Construction Operations / Frames
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Frames

[SA 2026.1.0529.7](/api/javascript/construction-operations-frames) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-frames)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Frame with Wizard {/* #construct-frame-with-wizard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-with-wizard) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-with-wizard)

```ts
export interface ConstructFrameWithWizardInput {
  readonly newFrameName: CollectionObjectName;
  readonly waitForCompletion?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameWithWizard(
    input: ConstructFrameWithWizardInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame {/* #construct-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame)

```ts
export interface ConstructFrameInput {
  readonly newFrameName: CollectionObjectName;
  readonly transformInWorkingCoordinates?: Transform;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrame(
    input: ConstructFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame From Transform In World {/* #construct-frame-from-transform-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-from-transform-in-world) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-from-transform-in-world)

```ts
export interface ConstructFrameFromTransformInWorldInput {
  readonly newFrameName: CollectionObjectName;
  readonly transformInWorldCoordinates?: Transform;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameFromTransformInWorld(
    input: ConstructFrameFromTransformInWorldInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame on Instrument Base {/* #construct-frame-on-instrument-base */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-on-instrument-base) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-on-instrument-base)

```ts
export interface ConstructFrameOnInstrumentBaseInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly frameName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameOnInstrumentBase(
    input: ConstructFrameOnInstrumentBaseInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame on Object {/* #construct-frame-on-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-on-object) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-on-object)

```ts
export interface ConstructFrameOnObjectInput {
  readonly referenceObject: CollectionObjectName;
  readonly frameName?: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameOnObject(
    input: ConstructFrameOnObjectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, 3 Points {/* #construct-frame-3-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-3-points) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-3-points)

```ts
export interface ConstructFrameThreePointsInput {
  readonly constructionMethod: FrameConstructionMethod;
  readonly originPoint: PointName;
  readonly primaryAxisPoint: PointName;
  readonly secondaryAxisPoint: PointName;
  readonly frameName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameThreePoints(
    input: ConstructFrameThreePointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, at Point, with working Z, and clocked axis {/* #construct-frame-at-point-with-working-z-and-clocked-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-at-point-with-working-z-and-clocked-axis) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-at-point-with-working-z-and-clocked-axis)

```ts
export interface ConstructFrameAtPointWithWorkingZAndClockedAxisInput {
  readonly originPoint: PointName;
  readonly clockedAxis: AxisIdentifier;
  readonly clockingPoint: PointName;
  readonly frameName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameAtPointWithWorkingZAndClockedAxis(
    input: ConstructFrameAtPointWithWorkingZAndClockedAxisInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, Pick origin and point on X axis - clock Z along working Z {/* #construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z)

```ts
export interface ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZInput {
  readonly originPoint: PointName;
  readonly pointOnXAxis: PointName;
  readonly frameName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructFramePickOriginAndPointOnXAxisClockZAlongWorkingZ(
    input: ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, Known Origin, Object Direction, Object Direction {/* #construct-frame-known-origin-object-direction-object-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-known-origin-object-direction-object-direction) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-known-origin-object-direction-object-direction)

```ts
export interface ConstructFrameKnownOriginObjectDirectionObjectDirectionInput {
  readonly knownPoint: PointName;
  readonly knownPointValueInNewFrame: Vector;
  readonly primaryAxisObject: CollectionObjectName;
  readonly primaryAxisDefinesWhichAxis: AxisIdentifier;
  readonly secondaryAxisObject: CollectionObjectName;
  readonly secondaryAxisDefinesWhichAxis: AxisIdentifier;
  readonly frameName?: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameKnownOriginObjectDirectionObjectDirection(
    input: ConstructFrameKnownOriginObjectDirectionObjectDirectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, 3 Planes {/* #construct-frame-3-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-3-planes) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-3-planes)

```ts
export interface ConstructFrameThreePlanesInput {
  readonly xPlane: CollectionObjectName;
  readonly xValueOnPlane: number;
  readonly yPlane: CollectionObjectName;
  readonly yValueOnPlane: number;
  readonly zPlane: CollectionObjectName;
  readonly zValueOnPlane: number;
  readonly frameName?: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameThreePlanes(
    input: ConstructFrameThreePlanesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame - Copy And Make Left Handed {/* #construct-frame---copy-and-make-left-handed */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame---copy-and-make-left-handed) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame---copy-and-make-left-handed)

```ts
export interface ConstructFrameCopyAndMakeLeftHandedInput {
  readonly referenceFrame: CollectionObjectName;
  readonly axisToReverse: FrameAxis;
  readonly frameName?: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameCopyAndMakeLeftHanded(
    input: ConstructFrameCopyAndMakeLeftHandedInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame - Average of Other Object Frames {/* #construct-frame---average-of-other-object-frames */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame---average-of-other-object-frames) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame---average-of-other-object-frames)

```ts
export interface ConstructFrameAverageOfOtherObjectFramesInput {
  readonly objects: Iterable<CollectionObjectName>;
  readonly frameName?: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameAverageOfOtherObjectFrames(
    input: ConstructFrameAverageOfOtherObjectFramesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame at Robot Link {/* #construct-frame-at-robot-link */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-at-robot-link) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-at-robot-link)

```ts
export interface ConstructFrameAtRobotLinkInput {
  readonly machineId: CollectionMachineId;
  readonly linkName: string;
  readonly resultingFrame: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameAtRobotLink(
    input: ConstructFrameAtRobotLinkInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame From Point Measurement Probing Frames {/* #construct-frame-from-point-measurement-probing-frames */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-from-point-measurement-probing-frames) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frame-from-point-measurement-probing-frames)

```ts
export interface ConstructFrameFromPointMeasurementProbingFramesInput {
  readonly pointList: Iterable<PointName>;
  readonly showFrame?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructFrameFromPointMeasurementProbingFrames(
    input: ConstructFrameFromPointMeasurementProbingFramesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror Cube Frame {/* #construct-mirror-cube-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-mirror-cube-frame) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-mirror-cube-frame)

```ts
export interface ConstructMirrorCubeFrameInput {
  readonly mirrorCubeFrameName: CollectionObjectName;
  readonly pointName: PointName;
  readonly useCurrentMeasurementsMarkedAsMirrorShots?: boolean;
  readonly nominalCubeFaceAngle?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructMirrorCubeFrame(
    input: ConstructMirrorCubeFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frames By Projecting Frames On Mesh Along Frame Direction {/* #construct-frames-by-projecting-frames-on-mesh-along-frame-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-frame-direction) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-frame-direction)

```ts
export interface ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionInput {
  readonly referenceFrameNames: Iterable<CollectionObjectName>;
  readonly baseNameForProjectedFrames: CollectionObjectName;
  readonly meshServingAsProjectionTarget: CollectionObjectName;
  readonly biDirectionalProjection?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructFramesByProjectingFramesOnMeshAlongFrameDirection(
    input: ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<ReadonlyArray<CollectionObjectName>>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frames By Projecting Frames On Mesh Along Reference Direction {/* #construct-frames-by-projecting-frames-on-mesh-along-reference-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-reference-direction) · [gRPC Contract](/api/grpc/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-reference-direction)

```ts
export interface ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionInput {
  readonly referenceFrameNames: Iterable<CollectionObjectName>;
  readonly baseNameForProjectedFrames: CollectionObjectName;
  readonly objectProvidingDirectionReference: CollectionObjectName;
  readonly meshServingAsProjectionTarget: CollectionObjectName;
  readonly biDirectionalProjection?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructFramesByProjectingFramesOnMeshAlongReferenceDirection(
    input: ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<ReadonlyArray<CollectionObjectName>>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Surface To Mesh Offset Along Reference Direction {/* #add-surface-to-mesh-offset-along-reference-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#add-surface-to-mesh-offset-along-reference-direction) · [gRPC Contract](/api/grpc/construction-operations-frames#add-surface-to-mesh-offset-along-reference-direction)

```ts
export interface AddSurfaceToMeshOffsetAlongReferenceDirectionInput {
  readonly referenceFrameNames: Iterable<CollectionObjectName>;
  readonly surfaceForOffsetDistanceComputation: CollectionObjectName;
  readonly collectionForResultFrames: string;
  readonly objectProvidingDirectionReference: CollectionObjectName;
  readonly meshServingAsProjectionTarget: CollectionObjectName;
  readonly surfaceOffsetRange?: number;
  readonly biDirectionalProjection?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  addSurfaceToMeshOffsetAlongReferenceDirection(
    input: AddSurfaceToMeshOffsetAlongReferenceDirectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Choice Types {/* #shared-choice-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2026.1.0529.7)
