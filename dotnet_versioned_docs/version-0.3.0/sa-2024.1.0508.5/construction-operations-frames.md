---
title: Construction Operations / Frames
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Frames

[SA 2026.1.0529.7](/api/dotnet/construction-operations-frames) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-frames)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Frame with Wizard {/* #construct-frame-with-wizard */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-with-wizard) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-with-wizard)

```csharp
public Task ConstructFrameWithWizardAsync(
        CollectionObjectName newFrameName,
        bool waitForCompletion = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame {/* #construct-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame)

```csharp
public Task ConstructFrameAsync(
        CollectionObjectName newFrameName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame From Transform In World {/* #construct-frame-from-transform-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-from-transform-in-world) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-from-transform-in-world)

```csharp
public Task ConstructFrameFromTransformInWorldAsync(
        CollectionObjectName newFrameName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame on Instrument Base {/* #construct-frame-on-instrument-base */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-on-instrument-base) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-on-instrument-base)

```csharp
public Task ConstructFrameOnInstrumentBaseAsync(
        CollectionInstrumentId instrumentId,
        string? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame on Object {/* #construct-frame-on-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-on-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-on-object)

```csharp
public Task ConstructFrameOnObjectAsync(
        CollectionObjectName referenceObject,
        CollectionObjectName? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, 3 Points {/* #construct-frame-3-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-3-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-3-points)

```csharp
public Task ConstructFrameThreePointsAsync(
        FrameConstructionMethod constructionMethod,
        PointName originPoint,
        PointName primaryAxisPoint,
        PointName secondaryAxisPoint,
        string? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, at Point, with working Z, and clocked axis {/* #construct-frame-at-point-with-working-z-and-clocked-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-at-point-with-working-z-and-clocked-axis) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-at-point-with-working-z-and-clocked-axis)

```csharp
public Task ConstructFrameAtPointWithWorkingZAndClockedAxisAsync(
        PointName originPoint,
        AxisIdentifier clockedAxis,
        PointName clockingPoint,
        string? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, Pick origin and point on X axis - clock Z along working Z {/* #construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-pick-origin-and-point-on-x-axis---clock-z-along-working-z)

```csharp
public Task ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZAsync(
        PointName originPoint,
        PointName pointOnXAxis,
        string? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, Known Origin, Object Direction, Object Direction {/* #construct-frame-known-origin-object-direction-object-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-known-origin-object-direction-object-direction) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-known-origin-object-direction-object-direction)

```csharp
public Task ConstructFrameKnownOriginObjectDirectionObjectDirectionAsync(
        PointName knownPoint,
        Vector knownPointValueInNewFrame,
        CollectionObjectName primaryAxisObject,
        AxisIdentifier primaryAxisDefinesWhichAxis,
        CollectionObjectName secondaryAxisObject,
        AxisIdentifier secondaryAxisDefinesWhichAxis,
        CollectionObjectName? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame, 3 Planes {/* #construct-frame-3-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-3-planes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-3-planes)

```csharp
public Task ConstructFrameThreePlanesAsync(
        CollectionObjectName xPlane,
        double xValueOnPlane,
        CollectionObjectName yPlane,
        double yValueOnPlane,
        CollectionObjectName zPlane,
        double zValueOnPlane,
        CollectionObjectName? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame - Copy And Make Left Handed {/* #construct-frame---copy-and-make-left-handed */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame---copy-and-make-left-handed) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame---copy-and-make-left-handed)

```csharp
public Task ConstructFrameCopyAndMakeLeftHandedAsync(
        CollectionObjectName referenceFrame,
        FrameAxis axisToReverse,
        CollectionObjectName? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame - Average of Other Object Frames {/* #construct-frame---average-of-other-object-frames */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame---average-of-other-object-frames) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame---average-of-other-object-frames)

```csharp
public Task ConstructFrameAverageOfOtherObjectFramesAsync(
        IEnumerable<CollectionObjectName> objects,
        CollectionObjectName? frameName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame at Robot Link {/* #construct-frame-at-robot-link */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-at-robot-link) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-at-robot-link)

```csharp
public Task ConstructFrameAtRobotLinkAsync(
        CollectionMachineId machineId,
        string linkName,
        CollectionObjectName resultingFrame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frame From Point Measurement Probing Frames {/* #construct-frame-from-point-measurement-probing-frames */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frame-from-point-measurement-probing-frames) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frame-from-point-measurement-probing-frames)

```csharp
public Task ConstructFrameFromPointMeasurementProbingFramesAsync(
        IEnumerable<PointName> pointList,
        bool showFrame = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror Cube Frame {/* #construct-mirror-cube-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-mirror-cube-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-mirror-cube-frame)

```csharp
public Task<double> ConstructMirrorCubeFrameAsync(
        CollectionObjectName mirrorCubeFrameName,
        PointName pointName,
        bool useCurrentMeasurementsMarkedAsMirrorShots = true,
        double nominalCubeFaceAngle = 90,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frames By Projecting Frames On Mesh Along Frame Direction {/* #construct-frames-by-projecting-frames-on-mesh-along-frame-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-frame-direction) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-frame-direction)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionAsync(
        IEnumerable<CollectionObjectName> referenceFrameNames,
        CollectionObjectName baseNameForProjectedFrames,
        CollectionObjectName meshServingAsProjectionTarget,
        bool biDirectionalProjection = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Frames By Projecting Frames On Mesh Along Reference Direction {/* #construct-frames-by-projecting-frames-on-mesh-along-reference-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-reference-direction) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#construct-frames-by-projecting-frames-on-mesh-along-reference-direction)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionAsync(
        IEnumerable<CollectionObjectName> referenceFrameNames,
        CollectionObjectName baseNameForProjectedFrames,
        CollectionObjectName objectProvidingDirectionReference,
        CollectionObjectName meshServingAsProjectionTarget,
        bool biDirectionalProjection = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Surface To Mesh Offset Along Reference Direction {/* #add-surface-to-mesh-offset-along-reference-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-frames#add-surface-to-mesh-offset-along-reference-direction) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-frames#add-surface-to-mesh-offset-along-reference-direction)

```csharp
public Task AddSurfaceToMeshOffsetAlongReferenceDirectionAsync(
        IEnumerable<CollectionObjectName> referenceFrameNames,
        CollectionObjectName surfaceForOffsetDistanceComputation,
        string collectionForResultFrames,
        CollectionObjectName objectProvidingDirectionReference,
        CollectionObjectName meshServingAsProjectionTarget,
        double surfaceOffsetRange = 10,
        bool biDirectionalProjection = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Choice Types {/* #shared-choice-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
