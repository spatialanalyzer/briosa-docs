---
title: Construction Operations / Frames
description: Briosa 0.1.0 JavaScript and TypeScript APIs for selected frame-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Frames

These APIs preserve the exact MP inputs and defaults. They do not add geometry
validation, and the client never automatically replays any of these mutation
or interactive operations.

## Shared Choice Types

```ts
export type FrameConstructionMethod =
  | 'origin-x-xy'
  | 'origin-x-xz'
  | 'origin-y-yx'
  | 'origin-y-yz'
  | 'origin-z-zx'
  | 'origin-x-zy';

export type AxisIdentifier =
  | 'positive-x'
  | 'negative-x'
  | 'positive-y'
  | 'negative-y'
  | 'positive-z'
  | 'negative-z';

export type FrameAxis = 'x' | 'y' | 'z';
```

The client maps these types to the exact MP choice domains.

## Construct Frame with Wizard

```ts
export interface ConstructFrameWithWizardInput {
  readonly newFrameName: CollectionObjectName;
  readonly waitForCompletion?: boolean;
}

function constructFrameWithWizard(
  briosa: BriosaClient,
  input: ConstructFrameWithWizardInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted `waitForCompletion` maps to `true`. Cancellation does not prove that
SpatialAnalyzer's interactive wizard closed.

## Construct Frame

```ts
export interface ConstructFrameInput {
  readonly newFrameName: CollectionObjectName;
  readonly transformInWorkingCoordinates?: Transform;
}

function constructFrame(
  briosa: BriosaClient,
  input: ConstructFrameInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting the transform uses the MP identity-transform default.

## Construct Frame From Transform In World

```ts
export interface ConstructFrameFromTransformInWorldInput {
  readonly newFrameName: CollectionObjectName;
  readonly transformInWorldCoordinates?: Transform;
}

function constructFrameFromTransformInWorld(
  briosa: BriosaClient,
  input: ConstructFrameFromTransformInWorldInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitting the transform uses the MP identity-transform default.

## Construct Frame on Instrument Base

```ts
export interface ConstructFrameOnInstrumentBaseInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly frameName?: string;
}

function constructFrameOnInstrumentBase(
  briosa: BriosaClient,
  input: ConstructFrameOnInstrumentBaseInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Frame on Object

```ts
export interface ConstructFrameOnObjectInput {
  readonly referenceObject: CollectionObjectName;
  readonly frameName?: CollectionObjectName;
}

function constructFrameOnObject(
  briosa: BriosaClient,
  input: ConstructFrameOnObjectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Frame, 3 Points

```ts
export interface ConstructFrameThreePointsInput {
  readonly constructionMethod: FrameConstructionMethod;
  readonly originPoint: PointName;
  readonly primaryAxisPoint: PointName;
  readonly secondaryAxisPoint: PointName;
  readonly frameName?: string;
}

function constructFrameThreePoints(
  briosa: BriosaClient,
  input: ConstructFrameThreePointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Frame, at Point, with working Z, and clocked axis

```ts
export interface ConstructFrameAtPointWithWorkingZAndClockedAxisInput {
  readonly originPoint: PointName;
  readonly clockedAxis: AxisIdentifier;
  readonly clockingPoint: PointName;
  readonly frameName?: string;
}

function constructFrameAtPointWithWorkingZAndClockedAxis(
  briosa: BriosaClient,
  input: ConstructFrameAtPointWithWorkingZAndClockedAxisInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Frame, Pick origin and point on X axis - clock Z along working Z

```ts
export interface ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZInput {
  readonly originPoint: PointName;
  readonly pointOnXAxis: PointName;
  readonly frameName?: string;
}

function constructFramePickOriginAndPointOnXAxisClockZAlongWorkingZ(
  briosa: BriosaClient,
  input: ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Frame, Known Origin, Object Direction, Object Direction

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

function constructFrameKnownOriginObjectDirectionObjectDirection(
  briosa: BriosaClient,
  input: ConstructFrameKnownOriginObjectDirectionObjectDirectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Frame, 3 Planes

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

function constructFrameThreePlanes(
  briosa: BriosaClient,
  input: ConstructFrameThreePlanesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The server preserves the exact MP binding spellings for the X and Y values.

## Construct Frame - Copy And Make Left Handed

```ts
export interface ConstructFrameCopyAndMakeLeftHandedInput {
  readonly referenceFrame: CollectionObjectName;
  readonly axisToReverse: FrameAxis;
  readonly frameName?: CollectionObjectName;
}

function constructFrameCopyAndMakeLeftHanded(
  briosa: BriosaClient,
  input: ConstructFrameCopyAndMakeLeftHandedInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

`FrameAxis` is intentionally unsigned because the MP choice is X, Y, or Z.

## Construct Frame - Average of Other Object Frames

```ts
export interface ConstructFrameAverageOfOtherObjectFramesInput {
  readonly objects: Iterable<CollectionObjectName>;
  readonly frameName?: CollectionObjectName;
}

function constructFrameAverageOfOtherObjectFrames(
  briosa: BriosaClient,
  input: ConstructFrameAverageOfOtherObjectFramesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The client does not impose a minimum number of objects.

## Construct Frame at Robot Link

```ts
export interface ConstructFrameAtRobotLinkInput {
  readonly machineId: CollectionMachineId;
  readonly linkName: string;
  readonly resultingFrame: CollectionObjectName;
}

function constructFrameAtRobotLink(
  briosa: BriosaClient,
  input: ConstructFrameAtRobotLinkInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

## Construct Frame From Point Measurement Probing Frames

```ts
export interface ConstructFrameFromPointMeasurementProbingFramesInput {
  readonly pointList: Iterable<PointName>;
  readonly showFrame?: boolean;
}

function constructFrameFromPointMeasurementProbingFrames(
  briosa: BriosaClient,
  input: ConstructFrameFromPointMeasurementProbingFramesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted `showFrame` maps to `false`; no minimum list size is imposed.

## Construct Mirror Cube Frame

```ts
export interface ConstructMirrorCubeFrameInput {
  readonly mirrorCubeFrameName: CollectionObjectName;
  readonly pointName: PointName;
  readonly useCurrentMeasurementsMarkedAsMirrorShots?: boolean;
  readonly nominalCubeFaceAngle?: number;
}

function constructMirrorCubeFrame(
  briosa: BriosaClient,
  input: ConstructMirrorCubeFrameInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The optional values map to `true` and 90. The result is the MP
`Total Angular Error` output.

## Construct Frames By Projecting Frames On Mesh Along Frame Direction

```ts
export interface ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionInput {
  readonly referenceFrameNames: Iterable<CollectionObjectName>;
  readonly baseNameForProjectedFrames: CollectionObjectName;
  readonly meshServingAsProjectionTarget: CollectionObjectName;
  readonly biDirectionalProjection?: boolean;
}

function constructFramesByProjectingFramesOnMeshAlongFrameDirection(
  briosa: BriosaClient,
  input: ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionInput,
  options?: BriosaCallOptions,
): Promise<ReadonlyArray<CollectionObjectName>>;
```

Omitted `biDirectionalProjection` maps to `true`. The result is the exact MP
`Resultant Frame Name List` output.

## Construct Frames By Projecting Frames On Mesh Along Reference Direction

```ts
export interface ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionInput {
  readonly referenceFrameNames: Iterable<CollectionObjectName>;
  readonly baseNameForProjectedFrames: CollectionObjectName;
  readonly objectProvidingDirectionReference: CollectionObjectName;
  readonly meshServingAsProjectionTarget: CollectionObjectName;
  readonly biDirectionalProjection?: boolean;
}

function constructFramesByProjectingFramesOnMeshAlongReferenceDirection(
  briosa: BriosaClient,
  input: ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionInput,
  options?: BriosaCallOptions,
): Promise<ReadonlyArray<CollectionObjectName>>;
```

## Add Surface To Mesh Offset Along Reference Direction

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

function addSurfaceToMeshOffsetAlongReferenceDirection(
  briosa: BriosaClient,
  input: AddSurfaceToMeshOffsetAlongReferenceDirectionInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

Omitted values map to 10 and `true`. All values are passed through without
client-side geometry validation.

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-frames) ·
[gRPC](/api/grpc/0.5.1/construction-operations-frames)
