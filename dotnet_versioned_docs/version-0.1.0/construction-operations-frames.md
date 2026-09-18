---
title: Construction Operations / Frames
description: Briosa 0.1.0 .NET APIs for selected frame-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Frames

These APIs preserve the exact MP inputs and defaults. They do not add geometry
validation, and the client never automatically replays any of these mutation
or interactive operations.

## Shared Choice Types

```csharp
public enum FrameConstructionMethod
{
    OriginXXy,
    OriginXXz,
    OriginYYx,
    OriginYYz,
    OriginZZx,
    OriginXZy,
}

public enum AxisIdentifier
{
    PositiveX,
    NegativeX,
    PositiveY,
    NegativeY,
    PositiveZ,
    NegativeZ,
}

public enum FrameAxis { X, Y, Z }
```

`FrameConstructionMethod` corresponds to the exact MP labels `Origin,X,XY`,
`Origin,X,XZ`, `Origin,Y,YX`, `Origin,Y,YZ`, `Origin,Z,ZX`, and
`Origin,X,ZY` in that order.

## Construct Frame with Wizard

```csharp
public Task ConstructFrameWithWizardAsync(
    CollectionObjectName newFrameName,
    bool waitForCompletion = true,
    CancellationToken cancellationToken = default);
```

This opens SpatialAnalyzer's interactive wizard. Cancellation does not prove
that the wizard closed.

## Construct Frame

```csharp
public Task ConstructFrameAsync(
    CollectionObjectName newFrameName,
    CancellationToken cancellationToken = default);

public Task ConstructFrameAsync(
    CollectionObjectName newFrameName,
    Transform transformInWorkingCoordinates,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the MP identity-transform default.

## Construct Frame From Transform In World

```csharp
public Task ConstructFrameFromTransformInWorldAsync(
    CollectionObjectName newFrameName,
    CancellationToken cancellationToken = default);

public Task ConstructFrameFromTransformInWorldAsync(
    CollectionObjectName newFrameName,
    Transform transformInWorldCoordinates,
    CancellationToken cancellationToken = default);
```

The shorter overload uses the MP identity-transform default.

## Construct Frame on Instrument Base

```csharp
public Task ConstructFrameOnInstrumentBaseAsync(
    CollectionInstrumentId instrumentId,
    string? frameName = null,
    CancellationToken cancellationToken = default);
```

Omitting `frameName` leaves the optional MP argument unset.

## Construct Frame on Object

```csharp
public Task ConstructFrameOnObjectAsync(
    CollectionObjectName referenceObject,
    CollectionObjectName? frameName = null,
    CancellationToken cancellationToken = default);
```

## Construct Frame, 3 Points

```csharp
public Task ConstructFrameThreePointsAsync(
    FrameConstructionMethod constructionMethod,
    PointName originPoint,
    PointName primaryAxisPoint,
    PointName secondaryAxisPoint,
    string? frameName = null,
    CancellationToken cancellationToken = default);
```

## Construct Frame, at Point, with working Z, and clocked axis

```csharp
public Task ConstructFrameAtPointWithWorkingZAndClockedAxisAsync(
    PointName originPoint,
    AxisIdentifier clockedAxis,
    PointName clockingPoint,
    string? frameName = null,
    CancellationToken cancellationToken = default);
```

## Construct Frame, Pick origin and point on X axis - clock Z along working Z

```csharp
public Task ConstructFramePickOriginAndPointOnXAxisClockZAlongWorkingZAsync(
    PointName originPoint,
    PointName pointOnXAxis,
    string? frameName = null,
    CancellationToken cancellationToken = default);
```

## Construct Frame, Known Origin, Object Direction, Object Direction

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

## Construct Frame, 3 Planes

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

The server preserves the exact MP binding spellings for the X and Y values.

## Construct Frame - Copy And Make Left Handed

```csharp
public Task ConstructFrameCopyAndMakeLeftHandedAsync(
    CollectionObjectName referenceFrame,
    FrameAxis axisToReverse,
    CollectionObjectName? frameName = null,
    CancellationToken cancellationToken = default);
```

`FrameAxis` is intentionally unsigned because the MP choice is X, Y, or Z.

## Construct Frame - Average of Other Object Frames

```csharp
public Task ConstructFrameAverageOfOtherObjectFramesAsync(
    IEnumerable<CollectionObjectName> objects,
    CollectionObjectName? frameName = null,
    CancellationToken cancellationToken = default);
```

The client does not impose a minimum number of objects.

## Construct Frame at Robot Link

```csharp
public Task ConstructFrameAtRobotLinkAsync(
    CollectionMachineId machineId,
    string linkName,
    CollectionObjectName resultingFrame,
    CancellationToken cancellationToken = default);
```

## Construct Frame From Point Measurement Probing Frames

```csharp
public Task ConstructFrameFromPointMeasurementProbingFramesAsync(
    IEnumerable<PointName> pointList,
    bool showFrame = false,
    CancellationToken cancellationToken = default);
```

The client does not impose a minimum list size.

## Construct Mirror Cube Frame

```csharp
public Task<double> ConstructMirrorCubeFrameAsync(
    CollectionObjectName mirrorCubeFrameName,
    PointName pointName,
    bool useCurrentMeasurementsMarkedAsMirrorShots = true,
    double nominalCubeFaceAngle = 90,
    CancellationToken cancellationToken = default);
```

The returned `double` is the MP `Total Angular Error` output.

## Construct Frames By Projecting Frames On Mesh Along Frame Direction

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    ConstructFramesByProjectingFramesOnMeshAlongFrameDirectionAsync(
        IEnumerable<CollectionObjectName> referenceFrameNames,
        CollectionObjectName baseNameForProjectedFrames,
        CollectionObjectName meshServingAsProjectionTarget,
        bool biDirectionalProjection = true,
        CancellationToken cancellationToken = default);
```

The returned list is the exact MP `Resultant Frame Name List` output.

## Construct Frames By Projecting Frames On Mesh Along Reference Direction

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    ConstructFramesByProjectingFramesOnMeshAlongReferenceDirectionAsync(
        IEnumerable<CollectionObjectName> referenceFrameNames,
        CollectionObjectName baseNameForProjectedFrames,
        CollectionObjectName objectProvidingDirectionReference,
        CollectionObjectName meshServingAsProjectionTarget,
        bool biDirectionalProjection = true,
        CancellationToken cancellationToken = default);
```

## Add Surface To Mesh Offset Along Reference Direction

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

All values are passed through without client-side geometry validation.

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-frames) ·
[gRPC](/api/grpc/construction-operations-frames)
