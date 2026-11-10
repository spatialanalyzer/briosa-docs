---
title: MP Value Types
description: Released client 0.5.0 MP value types and choices for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# MP Value Types

[SA 2026.1.0529.7](/api/dotnet/value-types) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/value-types)

These declarations describe the handwritten client **0.5.0** for **SA 2026.1.0529.7**. Generated transport types remain private. Operation pages define required inputs and omission behavior. Numeric protobuf values and public language values are separate representations; do not substitute values from another target.

## `AngularUnits`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum AngularUnits
{
    Degrees = 1,
    DegreesMinutesSeconds = 2,
    Radians = 3,
    Milliradians = 4,
    GonsGrad = 5,
    Mils = 6,
    Arcseconds = 7,
    DegreesMinutes = 8,
}
```

## `AsciiFileFormat`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum AsciiFileFormat
{
    XYZ = 1,
    XYZOffsetOffset2 = 2,
    XYZNotes = 3,
    RadiusThetaPhi = 4,
    RadiusThetaZ = 5,
    PointNameXYZ = 6,
    PointNameXYZNotes = 7,
    PointNameXYZOffsetOffset2 = 8,
    PointNameXYZUxUyUz = 9,
    PointNameXYZTxTyTzTd = 10,
    PointNameXYZWxWyWzWmag = 11,
    PointNameXYZHighLowTolerance = 12,
    PointNameXYZTxTyTzTdWxWyWz = 13,
    PointNameXYZWxWyWzTxTyTzTd = 14,
    PointNameXYZHighLowToleranceWxWyWz = 15,
    PointNameXYZWxWyWzHighLowTolerance = 16,
    PointNameRadiusThetaPhi = 17,
    PointNameRadiusThetaZ = 18,
    PointNameXYZGroupName = 19,
    PointNameYXZGroupName = 20,
    GroupNamePointNameXYZ = 21,
    GroupNamePointNameXYZOffsetOffset2 = 22,
    GroupNamePointNameXYZNotes = 23,
    GroupNamePointNameXYZUxUyUz = 24,
    GroupNamePointNameRadiusThetaPhi = 25,
    GroupNamePointNameRadiusThetaZ = 26,
    CollectionGroupPointXYZ = 27,
    CollectionGroupPointXYZNotes = 28,
    CollectionGroupPointRadiusThetaPhi = 29,
    CollectionGroupPointRadiusThetaZ = 30,
    XYZIjk = 31,
    VectorNameXYZIjk = 32,
    VectorNameXYZDxDyDzSignedMagnitude = 33,
    VectorGroupNameVectorNameXYZIjk = 34,
    VectorGroupNameVectorNameXYZDxDyDzSignedMagnitude = 35,
    FrameNameXYZRxRyRzTimestamp = 36,
    FrameNameXYZEulerXYZTimestamp = 37,
    FrameNameXYZEulerZYXTimestamp = 38,
    FrameNameXYZEulerZYZTimestamp = 39,
    FrameNameXYZEulerZXZTimestamp = 40,
    FrameNameTransformationMatrixTimestamp = 41,
    TransformationMatrixTimestamp = 42,
    FrameNameXYZQuaternionTimestamp = 43,
    PlaneNameXYZDxDyDzPlaneSize = 44,
}
```

## `AxisIdentifier`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum AxisIdentifier
{
    PositiveX = 1,
    NegativeX = 2,
    PositiveY = 3,
    NegativeY = 4,
    PositiveZ = 5,
    NegativeZ = 6,
}
```

## `BSplineFitOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record BSplineFitOptions
{
    public bool OpenCurve { get; init; } = true;
    public bool UseInterpolationForFit { get; init; } = true;
    public int NumberOfControlPoints { get; init; } = 8;
    public int DegreeOfCurve { get; init; } = 3;
    public BSplinePointSortMode SortMethod { get; init; } = BSplinePointSortMode.UseSelectionOrder;
    public bool SpanAnyGap { get; init; } = true;
    public double TerminationGapLength { get; init; } = 0.0;
    public bool IgnoreProximatePoints { get; init; } = false;
    public double ProximatePointThreshold { get; init; } = 0.0;
    public bool UseGlobalTessellationOptions { get; init; } = true;
    public double MaximumChordalDeviation { get; init; } = 0.05;
    public double MaximumTrimEdgeAngle { get; init; } = 15.0;
    public double TerminationAverageMultiplier { get; init; } = 10.0;
    public double Extension { get; init; } = 0.0;
}
```

## `BSplinePointSortMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum BSplinePointSortMode
{
    UseSelectionOrder = 1,
    ClosestNeighborsFromFirstSelection = 2,
    ClosestNeighborsInCurveDirection = 3,
}
```

## `BaseColorType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum BaseColorType { Red = 1, Green = 2, Blue = 3 }
```

## `BaseMidColorType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum BaseMidColorType { Red = 1, Green = 2, Gray = 3, Blue = 4 }
```

## `CalloutViewProperties`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record CalloutViewProperties
{
    public bool LockViewPoint { get; init; }
    public bool RecallWorkingFrame { get; init; }
    public bool RecallVisibleLayer { get; init; }
    public int CalloutLeaderThickness { get; init; } = 2;
    public Color CalloutLeaderColor { get; init; } = new(128, 128, 128);
    public int CalloutBorderThickness { get; init; } = 2;
    public Color CalloutBorderColor { get; init; } = new(0, 0, 255);
    public bool DivideTextWithLines { get; init; }
    public Font Font { get; init; } = new();
}
```

## `ChartName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record ChartName { public required string Name { get; init; } }
```

## `ChartType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ChartType { RunChart = 1, IndividualXMovingRange = 2, BullseyeChart = 3 }
```

## `CloudBoxType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum CloudBoxType
{
    WorldAxisAlignedBox = 1,
    WorkAxisAlignedBox = 2,
    MinimumOrientedBoxUnconditional = 3,
    MinimumOrientedBoxVerifyVolume = 4,
}
```

## `CloudThinningMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum CloudThinningMode
{
    None = 1,
    Random = 2,
    NthPoint = 3,
}
```

## `CloudThinningOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record CloudThinningOptions
{
    public CloudThinningMode Mode { get; init; } = CloudThinningMode.NthPoint;
    public int PointIncrement { get; init; } = 5;
    public int MinimumNumberOfPoints { get; init; } = 100;
    public int MaximumNumberOfPoints { get; init; } = 20000;
}
```

## `CloudToCadAlignmentResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record CloudToCadAlignmentResult
{
    public required double RmsDeviation { get; init; }
    public required double AverageDeviation { get; init; }
    public required double MaximumAbsoluteDeviation { get; init; }
    public required Transform ResultantTransformInWorking { get; init; }
}
```

## `CollectionGroupName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record CollectionGroupName
{
    public required string CollectionName { get; init; }
    public required string GroupName { get; init; }
}
```

## `CollectionInstrumentId`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record CollectionInstrumentId
{
    public required string CollectionName { get; init; }
    public required int InstrumentId { get; init; }
}
```

## `CollectionItemName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record CollectionItemName
{
    public required string CollectionName { get; init; }
    public required string ItemName { get; init; }
    public ItemType? ItemType { get; init; }
}
```

## `CollectionMachineId`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record CollectionMachineId
{
    public required string CollectionName { get; init; }
    public int MachineId { get; init; }
}
```

## `CollectionName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record CollectionName { public required string Name { get; init; } }
```

## `CollectionObjectName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record CollectionObjectName
{
    public required string CollectionName { get; init; }
    public required string ObjectName { get; init; }
    public required ObjectType ObjectType { get; init; }
}
```

## `CollectionVectorGroupName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record CollectionVectorGroupName
{
    public required string CollectionName { get; init; }
    public required string VectorGroupName { get; init; }
}
```

## `CollimationBaselineMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum CollimationBaselineMethod
{
    DeterminedByValue = 1,
    DeterminedFromScale = 2,
    DeterminedFromKnownPoint = 3,
}
```

## `CollimationTiltMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum CollimationTiltMode
{
    FullCollimation = 1,
    NoTiltCollimation = 2,
}
```

## `Color`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record Color
{
    public Color() { }

    public Color(uint red, uint green, uint blue) => (Red, Green, Blue) = (red, green, blue);

    public uint Red { get; init; }
    public uint Green { get; init; }
    public uint Blue { get; init; }
}
```

## `ColorRangeMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ColorRangeMethod
{
    SingleColor = 1,
    Continuous = 2,
    TolerancedContinuous = 3,
    TolerancedGoNoGo = 4,
    TolerancedGoNoGoWithWarning = 5,
    DiscreteColors = 6,
}
```

## `ColorizationOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record ColorizationOptions
{
    public ColorRangeMethod ColorRangeMethod { get; init; } = ColorRangeMethod.Continuous;
    public BaseColorType BaseHighColor { get; init; } = BaseColorType.Blue;
    public BaseMidColorType BaseMidColor { get; init; } = BaseMidColorType.Green;
    public BaseColorType BaseLowColor { get; init; } = BaseColorType.Red;
    public bool DrawTubes { get; init; }
    public bool DrawArrowheads { get; init; } = true;
    public bool IndicateValues { get; init; }
    public double VectorMagnification { get; init; } = 100;
    public int VectorWidth { get; init; } = 1;
    public bool DrawBlotches { get; init; }
    public double BlotchSize { get; init; } = 0.1;
    public bool ShowOutOfToleranceOnly { get; init; }
    public bool ShowColorBarInView { get; init; }
    public bool ShowColorBarPercentages { get; init; } = true;
    public bool ShowColorBarFractions { get; init; }
    public double HighSaturationLimit { get; init; } = 0.5;
    public double LowSaturationLimit { get; init; } = -0.5;
    public double HighTolerance { get; init; } = 0.03;
    public double LowTolerance { get; init; } = -0.03;
}
```

## `CompTechnique`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum CompTechnique { Standard = 1, MaxInscribed = 2, MinCircumscribed = 3 }
```

## `ConstructObjectType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum ConstructObjectType
{
    Any = 1,
    Circles = 2,
    Cones = 3,
    Cylinders = 4,
    Lines = 5,
    Planes = 6,
    Slots = 7,
    Spheres = 8,
    CenterPoints = 9,
    SurfacePoints = 10,
    VertexPoints = 11,
}
```

## `CoordinateSystemType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum CoordinateSystemType { Cartesian = 1, Cylindric = 2, Polar = 3 }
```

## `CurrentTrappingStatus`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record CurrentTrappingStatus
{
    public required bool Active { get; init; }
    public CollectionItemName? FocusedItem { get; init; }
    public CollectionInstrumentId? Instrument { get; init; }
}
```

## `DatasetType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum DatasetType { X = 1, Y = 2, Z = 3, Magnitude = 4 }
```

## `DegreeOfFreedom`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum DegreeOfFreedom { Any = 1, LockFocusLocation = 2, LockVertexLocation = 3 }
```

## `DistanceUnits`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum DistanceUnits { Meters = 1, Centimeters = 2, Millimeters = 3, Feet = 4, Inches = 5, UsSurveyFeet = 6 }
```

## `DoubleVector6`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record DoubleVector6
{
    public required IReadOnlyList<double> Values { get; init; }
}
```

## `DynamicCircleMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum DynamicCircleMode
{
    CylinderAndPlaneHoldPlaneNormal = 1,
    CylinderAndPlaneHoldCylinderAxis = 2,
    ConeAndPlaneHoldPlaneNormal = 3,
    ConeAndPlaneHoldConeAxis = 4,
    SphereAndPlaneIntersection = 5,
    TwoConesIntersection = 6,
    ConeAndCylinderIntersection = 7,
}
```

## `DynamicEllipseMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum DynamicEllipseMode
{
    CylinderAndPlaneIntersection = 1,
    ConeAndPlaneIntersection = 2,
}
```

## `DynamicLineMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum DynamicLineMode
{
    ConeAxis = 1,
    CylinderAxis = 2,
    IntersectionOfTwoPlanes = 3,
    BisectTwoLines = 4,
    SlotCenterlineAlongLength = 5,
}
```

## `DynamicPlaneMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum DynamicPlaneMode
{
    BisectTwoPlanes = 1,
    TwoConesHoldNormalToBestFitPlane = 2,
    TwoConesHoldNormalToFirstConeAxis = 3,
    TwoConesHoldNormalToSecondConeAxis = 4,
    ConeAndCylinderHoldNormalToBestFitPlane = 5,
    ConeAndCylinderHoldNormalToConeAxis = 6,
    ConeAndCylinderHoldNormalToCylinderAxis = 7,
    OffsetPlaneFromPlane = 8,
}
```

## `DynamicPointMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum DynamicPointMode
{
    IntersectionLineAndPlane = 1,
    IntersectionCylinderAndPlane = 2,
    IntersectionConeAndPlane = 3,
    IntersectionThreePlanes = 4,
    MidPointPerpendicularToTwoLines = 5,
}
```

## `EdgePointMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum EdgePointMode
{
    IncludeEdges = 1,
    ExcludeEdges = 2,
    EdgesOnly = 3,
}
```

## `EmbeddedReportFile`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record EmbeddedReportFile
{
    public required string CollectionName { get; init; }
    public required string FileName { get; init; }
}
```

## `ExportDataDelimeterType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ExportDataDelimeterType { Space = 1, Comma = 2, Tab = 3 }
```

## `ExportTargetNameFormat`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ExportTargetNameFormat { CollectionGroupTarget = 1, GroupTarget = 2, Target = 3, None = 4 }
```

## `ExportVectorNameFormat`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ExportVectorNameFormat { CollectionGroupVector = 1, GroupVector = 2, Vector = 3, None = 4 }
```

## `FeatureCheckCylinderEvalOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record FeatureCheckCylinderEvalOptions
{
    public required bool EnableActualDiameterOverride { get; init; }
    public required double ActualDiameterOverride { get; init; }
}
```

## `FeatureCheckDatumReference`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record FeatureCheckDatumReference
{
    public required string ReferenceString { get; init; }
    public required string CadFaces { get; init; }
    public required IReadOnlyList<CollectionObjectName> SaObjects { get; init; }
    public required IReadOnlyList<CollectionObjectName> AuxiliarySaObjects { get; init; }
    public required IReadOnlyList<CollectionItemName> GeometryRelationships { get; init; }
    public required IReadOnlyList<CollectionItemName> AuxiliaryGeometryRelationships { get; init; }
}
```

## `FeatureCheckReportingOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record FeatureCheckReportingOptions
{
    public required bool ShowFeatureControlFrameSummary { get; init; }
    public required bool IncludeTitle { get; init; }
    public required bool ShowDatumAndToleranceSummary { get; init; }
    public required bool ShowFeatureSummary { get; init; }
    public required bool OnlyCreateFailedVectors { get; init; }
    public required bool ShowPointDetails { get; init; }
    public required bool ShowLowerTierTables { get; init; }
}
```

## `FileReference`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record FileReference
{
    public required string Path { get; init; }
    public bool EmbeddedFile { get; init; }
}
```

## `FilterProximitySettings`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record FilterProximitySettings
{
    public required double SurfaceInclusionProximity { get; init; }
    public required double EdgeExclusionProximity { get; init; }
    public required double PlanarInclusionProximity { get; init; }
    public required double PlanarExclusionProximity { get; init; }
    public required double RadialInclusionProximity { get; init; }
    public required double GeometryExtractionTolerance { get; init; }
    public required OffsetDirectionType SurfaceProximityMode { get; init; }
    public required OffsetDirectionType PlanarProximityMode { get; init; }
    public required OffsetDirectionType RadialProximityMode { get; init; }
    public required bool ProjectToPlane { get; init; }
    public required bool AssertPlaneBoundaries { get; init; }
}
```

## `FitConstraintScalarOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public readonly record struct FitConstraintScalarOptions(
    ScalarToleranceLimit High = default,
    ScalarToleranceLimit Low = default);
```

## `FitDofOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record FitDofOptions
{
    public bool AllowX { get; init; } = true;
    public bool AllowY { get; init; } = true;
    public bool AllowZ { get; init; } = true;
    public bool AllowRx { get; init; } = true;
    public bool AllowRy { get; init; } = true;
    public bool AllowRz { get; init; } = true;
    public bool RotateAboutCentroid { get; init; } = true;
}
```

## `FitMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum FitMethod { MinimumRms = 1, BestAxis = 2 }
```

## `Font`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record Font
{
    public string FontName { get; init; } = "MS Shell Dlg";
    public uint Size { get; init; } = 8;
    public Color Color { get; init; } = new() { Red = 0, Green = 0, Blue = 0 };
}
```

## `FrameAxis`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum FrameAxis
{
    X = 1,
    Y = 2,
    Z = 3,
}
```

## `FrameConstructionMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum FrameConstructionMethod
{
    OriginXXy = 1,
    OriginXXz = 2,
    OriginYYx = 3,
    OriginYYz = 4,
    OriginZZx = 5,
    OriginXZy = 6,
}
```

## `FrameName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record FrameName { public required string Name { get; init; } }
```

## `GdtDistanceBetweenMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum GdtDistanceBetweenMode
{
    Centroid = 1,
    MinMax = 2,
}
```

## `GdtEvaluationMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum GdtEvaluationMethod
{
    None = 1,
    Asme1994 = 2,
    Asme2009 = 3,
    Asme2018 = 4,
    Iso1983 = 5,
    Iso2004 = 6,
    Iso2017 = 7,
}
```

## `GdtExtendedEvaluationMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum GdtExtendedEvaluationMethod
{
    LeastSquares = 1,
    HighPoint = 2,
    MinimumSeparation = 3,
    LeastSquaresHighPoint = 4,
    LeastSquares3D = 5,
    LeastSquaresHighPoint1StdDev = 6,
    LeastSquaresHighPoint2StdDev = 7,
    LeastSquaresHighPointHalfway = 8,
    MinimumSeparationHighPoint = 9,
    EqualizedHighPoint = 10,
    EqualizedLsqHighPoint = 11,
}
```

## `GdtFeatureType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum GdtFeatureType
{
    Diameter = 1,
    Radius = 2,
    DistanceBetween = 3,
    Width = 4,
    Length = 5,
    AngleBetween = 6,
    Angularity = 7,
    Perpendicularity = 8,
    Parallelism = 9,
    Circularity = 10,
    Concentricity = 11,
    Cylindricity = 12,
    Straightness = 13,
    SurfaceProfile = 14,
    LineProfile = 15,
    CompositeSurfaceProfile = 16,
    Flatness = 17,
    TruePosition = 18,
    CompositeTruePosition = 19,
    CircularRunout = 20,
    TotalRunout = 21,
}
```

## `GdtMeasurements`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record GdtMeasurements
{
    public required IReadOnlyList<PointName> PointNames { get; init; }
    public required IReadOnlyList<CollectionObjectName> CloudNames { get; init; }
}
```

## `GdtOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record GdtOptions
{
    public required bool UseHighPoints { get; init; }
    public required bool ExtrapolateAxialExtent { get; init; }
    public required bool ExcludeFromAutoEvaluation { get; init; }
    public GdtDistanceBetweenMode? DistanceBetweenMode { get; init; }
    public GdtEvaluationMethod? EvaluationMethod { get; init; }
    public required bool CreateActualFeatures { get; init; }
    public required bool CreateSolvedPoints { get; init; }
    public required double CrossSectionCriteria { get; init; }
    public required bool EnableAutoFeatureDetection { get; init; }
}
```

## `GdtToleranceZoneType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum GdtToleranceZoneType
{
    None = 1,
    Cylindrical = 2,
    Planar = 3,
    Spherical = 4,
    RadialArc = 5,
    RadialPlanar = 6,
    Boundary = 7,
    PlanarMedian = 8,
    Surface = 9,
}
```

## `GeometryRelationshipOutlierFilterMetrics`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record GeometryRelationshipOutlierFilterMetrics
{
    public required double FirstPassRmsError { get; init; }
    public required double FirstPassMaximumError { get; init; }
    public required double FirstPassMinimumError { get; init; }
    public required double FirstPassAverageError { get; init; }
    public required double FinalPassRmsError { get; init; }
    public required double FinalPassMaximumError { get; init; }
    public required double FinalPassMinimumError { get; init; }
    public required double FinalPassAverageError { get; init; }
    public required int TotalInputPointCount { get; init; }
    public required int ExcludePointCount { get; init; }
}
```

## `GeometryRelationshipPointEditMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum GeometryRelationshipPointEditMode
{
    PointList = 1,
    PointGraph = 2,
    SubSamplerSettings = 3,
}
```

## `GeometryType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum GeometryType { Line = 1, Plane = 2, Circle = 3, Sphere = 4, Cylinder = 5, Cone = 6, Paraboloid = 7, Ellipse = 8, Slot = 9, Torus = 10 }
```

## `GroupAverageResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record GroupAverageResult
{
    public required double RmsDeviation { get; init; }
    public required double MaxAbsoluteDeviation { get; init; }
    public required double AverageDeviation { get; init; }
}
```

## `InspectionFilter`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum InspectionFilter
{
    All = 1,
    Checks = 2,
    Datums = 3,
}
```

## `InstrumentPositionReportingFrame`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum InstrumentPositionReportingFrame
{
    InstrumentBase = 1,
    World = 2,
    Working = 3,
}
```

## `InstrumentTargetStatus`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record InstrumentTargetStatus
{
    public required bool IsLocked { get; init; }
    public required string Name { get; init; }
    public required int NumberOfFaces { get; init; }
    public required int LockedFace { get; init; }
}
```

## `InstrumentTypeName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record InstrumentTypeName
{
    public required string Value { get; init; }
}
```

## `ItemType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ItemType
{
    Any = 1,
    Alignment = 2,
    Annotation = 3,
    BSpline = 4,
    CalibrationApplianceNode = 5,
    CalloutView = 6,
    Chart = 7,
    Circle = 8,
    Cloud = 9,
    EnhancedCloud = 10,
    ScanStripeCloud = 11,
    CrossSectionCloud = 12,
    Cone = 13,
    Cylinder = 14,
    Datum = 15,
    Dimension = 16,
    Ellipse = 17,
    Event = 18,
    FeatureCheck = 19,
    Frame = 20,
    FrameSet = 21,
    Line = 22,
    Paraboloid = 23,
    Perimeter = 24,
    Picture = 25,
    Plane = 26,
    PointGroup = 27,
    PointSet = 28,
    PolySurface = 29,
    Relationship = 30,
    SaDoc = 31,
    SaReport = 32,
    SaReportTemplate = 33,
    ScaleBar = 34,
    ScanStripeMesh = 35,
    Slot = 36,
    Sphere = 37,
    Surface = 38,
    Table = 39,
    TcpFixture = 40,
    Torus = 41,
    VectorGroup = 42,
}
```

## `LrFlipTestResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record LrFlipTestResult
{
    public required double FrontRange { get; init; }
    public required double FrontAzimuth { get; init; }
    public required double FrontElevation { get; init; }
    public required double FrontQuality { get; init; }
    public required double BackRange { get; init; }
    public required double BackAzimuth { get; init; }
    public required double BackElevation { get; init; }
    public required double BackQuality { get; init; }
    public required double FrontBackDifferenceRange { get; init; }
    public required double FrontBackDifferenceAzimuth { get; init; }
    public required double FrontBackDifferenceElevation { get; init; }
}
```

## `LrLoSeparationTestResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record LrLoSeparationTestResult
{
    public required int PrimaryLo { get; init; }
    public required int SecondaryLo { get; init; }
    public required int PrimaryLoMeasurementCount { get; init; }
    public required double PrimaryLoRangeMean { get; init; }
    public required double PrimaryLoRangeStandardDeviation { get; init; }
    public required double PrimaryLoQualityMean { get; init; }
    public required double PrimaryLoQualityStandardDeviation { get; init; }
    public required int SecondaryLoMeasurementCount { get; init; }
    public required double SecondaryLoRangeMean { get; init; }
    public required double SecondaryLoRangeStandardDeviation { get; init; }
    public required double SecondaryLoQualityMean { get; init; }
    public required double SecondaryLoQualityStandardDeviation { get; init; }
}
```

## `LrSnrInfo`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record LrSnrInfo
{
    public required double Snr { get; init; }
    public required int SizeOfDataArray { get; init; }
    public required int PeakValueIndex { get; init; }
    public required double PeakValue { get; init; }
    public required double MeasuredRange { get; init; }
}
```

## `MakeGdtDatumAnnotationOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record MakeGdtDatumAnnotationOptions
{
    public required string DatumName { get; init; }
    public required IReadOnlyList<CollectionObjectName> Objects { get; init; }
    public required IReadOnlyList<CollectionItemName> GeometryRelationships { get; init; }
    public SurfaceFaceList? SurfaceFaces { get; init; }
    public required CollectionObjectName AuxiliaryObject { get; init; }
    public required CollectionItemName AuxiliaryGeometryRelationship { get; init; }
    public bool IsSlot { get; init; }
    public bool ForceSurfaceFeature { get; init; }
}
```

## `MakeGdtFeatureCheckAnnotationOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record MakeGdtFeatureCheckAnnotationOptions
{
    public required string FeatureAnnotationName { get; init; }
    public GdtFeatureType FeatureType { get; init; } = GdtFeatureType.TruePosition;
    public required IReadOnlyList<CollectionObjectName> Objects { get; init; }
    public required IReadOnlyList<CollectionItemName> GeometryRelationships { get; init; }
    public SurfaceFaceList? SurfaceFaces { get; init; }
    public bool DecomposeMultipleFeatures { get; init; }
    public bool AutoCreateDiameterChecks { get; init; }
    public bool AutoCreateSlotWidthChecks { get; init; }
    public bool AutoCreateSlotLengthChecks { get; init; }
    public string DatumReferences { get; init; } = "";
    public string Tolerance { get; init; } = "";
    public bool IsSlot { get; init; }
    public bool PerUnitLengthOrArea { get; init; }
    public bool CircularArea { get; init; }
    public double PerUnitLengthDistance { get; init; }
    public double PerUnitLengthStepOverPercent { get; init; } = 50.0;
    public double PerUnitAreaWidthDistance { get; init; }
    public double PerUnitAreaWidthStepOverPercent { get; init; } = 50.0;
    public double PerUnitAreaCircleDiameter { get; init; }
    public double PerUnitAreaDiameterStepOver { get; init; } = 50.0;
    public required CollectionObjectName AuxiliaryObject { get; init; }
    public required CollectionItemName AuxiliaryGeometryRelationship { get; init; }
    public bool UseNominalForDimensionTolerance { get; init; } = true;
    public bool UseReferenceObjectForNominal { get; init; } = true;
    public double NominalDimensionTolerance { get; init; }
    public double LowDimensionTolerance { get; init; } = -0.1;
    public double HighDimensionTolerance { get; init; } = 0.1;
    public GdtToleranceZoneType ToleranceZoneType { get; init; } = GdtToleranceZoneType.None;
    public bool UseProjectedToleranceZone { get; init; }
    public double ProjectedToleranceZone { get; init; }
}
```

## `MeasuredSideForPlanarOffset`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum MeasuredSideForPlanarOffset { AbovePlane = 1, ProbeCenter = 2, BelowPlane = 3 }
```

## `MeasuredSideForRadialOffset`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum MeasuredSideForRadialOffset { Inside = 1, ProbeCenter = 2, Outside = 3 }
```

## `MpDialogInteractionMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum MpDialogInteractionMode { BlockApplicationInteraction = 1, AllowApplicationInteraction = 2 }
```

## `MpInteractionMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum MpInteractionMode { HaltOnFailureOnly = 1, HaltOnFailureOrPartialSuccess = 2, NeverHalt = 3 }
```

## `NormalDirection`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum NormalDirection { ProbingDirection = 1, WorkingOriginPositive = 2, RightHandRule = 3 }
```

## `ObjectOriginResult`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record ObjectOriginResult
{
    public required Vector VectorRepresentation { get; init; }
    public required double XValue { get; init; }
    public required double YValue { get; init; }
    public required double ZValue { get; init; }
}
```

## `ObjectType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ObjectType
{
    Any = 1,
    BSpline = 2,
    Circle = 3,
    Cloud = 4,
    EnhancedCloud = 5,
    ScanStripeCloud = 6,
    CrossSectionCloud = 7,
    Cone = 8,
    Cylinder = 9,
    Datum = 10,
    Ellipse = 11,
    Frame = 12,
    FrameSet = 13,
    Line = 14,
    Paraboloid = 15,
    Perimeter = 16,
    Plane = 17,
    PointGroup = 18,
    PointSet = 19,
    PolySurface = 20,
    ScanStripeMesh = 21,
    Slot = 22,
    Sphere = 23,
    Surface = 24,
    Torus = 25,
    VectorGroup = 26,
}
```

## `ObservationInfo`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record ObservationInfo
{
    public required CollectionInstrumentId Instrument { get; init; }
    public required ObservationSphericalValues SphericalValues { get; init; }
    public required bool Active { get; init; }
    public required string Timestamp { get; init; }
    public required double RmsError { get; init; }
    public required double Temperature { get; init; }
    public required double Pressure { get; init; }
    public required double RelativeHumidity { get; init; }
    public required string InfoData { get; init; }
}
```

## `ObservationSphericalValues`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record ObservationSphericalValues
{
    public required double Distance { get; init; }
    public required double Azimuth { get; init; }
    public required double Elevation { get; init; }
}
```

## `OffsetDirectionType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum OffsetDirectionType
{
    Both = 1,
    PositiveOnly = 2,
    NegativeOnly = 3,
}
```

## `PerimeterLists`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record PerimeterLists
{
    public required IReadOnlyList<CollectionObjectName> ScanPerimeters { get; init; }
    public required IReadOnlyList<CollectionObjectName> ExclusionPerimeters { get; init; }
}
```

## `PointDeltaReportOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record PointDeltaReportOptions
{
    public CoordinateSystemType CoordinateSystem { get; init; } = CoordinateSystemType.Cartesian;
    public string DetailsFormat { get; init; } = "Single";
    public bool ShowPointA { get; init; } = true;
    public bool ShowPointB { get; init; } = true;
    public bool ShowDelta { get; init; } = true;
    public bool ShowMagnitude { get; init; } = true;
    public bool ShowComponent1 { get; init; } = true;
    public bool ShowComponent2 { get; init; } = true;
    public bool ShowComponent3 { get; init; } = true;
    public bool SortPointNames { get; init; }
    public bool ShowToleranceFields { get; init; } = true;
    public bool ColorizeInToleranceFields { get; init; } = true;
}
```

## `PointFilterInputType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum PointFilterInputType { CardinalPoints = 1, InputPoints = 2, NominalCardinalPoints = 3 }
```

## `PointName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record PointName
{
    public required string CollectionName { get; init; }
    public required string GroupName { get; init; }
    public required string TargetName { get; init; }
}
```

## `PointOutputType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum PointOutputType
{
    Points = 1,
    CloudPoints = 2,
}
```

## `PointsToPointsRelationshipAssociatedData`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record PointsToPointsRelationshipAssociatedData
{
    public required IReadOnlyList<PointName> NominalPoints { get; init; }
    public required IReadOnlyList<PointName> ActualPoints { get; init; }
}
```

## `ProjectedPointGradient`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record ProjectedPointGradient
{
    public required Vector ProjectedPoint { get; init; }
    public required Vector NormalVector { get; init; }
    public required Vector UDirection { get; init; }
    public required Vector VDirection { get; init; }
}
```

## `ProjectionOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record ProjectionOptions
{
    public string ProjectionType { get; init; } = "Object To Probe Vectors";
    public bool IgnoreEdgeProjections { get; init; }
    public bool OverrideTargetOffsets { get; init; }
    public double OverrideTargetOffsetsValue { get; init; }
    public bool AddExtraMaterialThickness { get; init; }
    public double ExtraMaterialThicknessValue { get; init; }
}
```

## `RGBColorChannel`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum RGBColorChannel
{
    Red = 1,
    Green = 2,
    Blue = 3,
    Intensity = 4,
}
```

## `RGBFilterOperation`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum RGBFilterOperation
{
    IncrementallyApplyFilter = 1,
    ResetAndApplyFilter = 2,
    ResetAllCloudPointsVisible = 3,
}
```

## `RelWeightingMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum RelWeightingMode { NormalizeEquationCount = 1, NormalizeEquationCountAndToleranceWidth = 2, ResetAllWeights = 3, NormalizeSquareRootEquationCount = 4, NormalizeSquareRootAndToleranceWidth = 5 }
```

## `RelationshipAssociatedData`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record RelationshipAssociatedData
{
    public required string RelationshipType { get; init; }
    public required IReadOnlyList<PointName> IndividualPoints { get; init; }
    public required IReadOnlyList<CollectionObjectName> PointGroups { get; init; }
    public required IReadOnlyList<CollectionObjectName> PointClouds { get; init; }
    public required IReadOnlyList<CollectionObjectName> Objects { get; init; }
}
```

## `RelationshipStatusFlags`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record RelationshipStatusFlags
{
    public required bool Dormant { get; init; }
    public required bool Success { get; init; }
    public required bool Measured { get; init; }
    public required bool Failed { get; init; }
    public required bool Unmeasured { get; init; }
}
```

## `RelationshipWatchWindowTemplateOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record RelationshipWatchWindowTemplateOptions
{
    public int LinearPrecision { get; init; } = 4;
    public int AngularPrecision { get; init; } = 3;
    public Font Font { get; init; } = new();
    public Color TextColor { get; init; } = new(0, 0, 255);
    public Color BackgroundColor { get; init; } = new(255, 255, 255);
    public Color HighlightColor { get; init; } = new(255, 0, 0);
    public bool ShowDeviationX { get; init; } = true;
    public bool ShowDeviationY { get; init; } = true;
    public bool ShowDeviationZ { get; init; } = true;
    public bool ShowDeviationMagnitude { get; init; } = true;
    public bool TransparentBackground { get; init; }
    public bool HideUnits { get; init; }
}
```

## `RelationshipWatchWindowUdpSettings`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record RelationshipWatchWindowUdpSettings
{
    public bool Enabled { get; init; }
    public bool Broadcast { get; init; } = true;
    public string IpAddress { get; init; } = "";
    public int Port { get; init; } = 10000;
}
```

## `RenderModeType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum RenderModeType { Wireframe = 1, HiddenLineRemoved = 2, SolidAndEdges = 3, Solid = 4 }
```

## `ReportOutputOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record ReportOutputOptions
{
    public required ReportOutputType OutputType { get; init; }
    public string? ExternalPath { get; init; }
    public EmbeddedReportFile? EmbeddedFile { get; init; }
}
```

## `ReportOutputType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ReportOutputType { None = 1, SaReport = 2, SaDocument = 3, Pdf = 4, Rtf = 5 }
```

## `ReportPageSettings`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ReportPageSettings { Portrait = 1, Landscape = 2 }
```

## `ReportViewOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record ReportViewOptions
{
    public required ReportViewType ViewType { get; init; }
    public string CollectionName { get; init; } = string.Empty;
    public string CalloutName { get; init; } = string.Empty;
}
```

## `ReportViewType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum ReportViewType { None = 1, CurrentView = 2, CalloutView = 3 }
```

## `RobotActiveJointComponent`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum RobotActiveJointComponent
{
    None = 1,
    X = 2,
    Y = 3,
    Z = 4,
    Rx = 5,
    Ry = 6,
    Rz = 7,
    Alpha = 8,
    A = 9,
    D = 10,
    Theta = 11,
}
```

## `RobotCalibrationMetrics`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record RobotCalibrationMetrics
{
    public required double XyzMax { get; init; }
    public required double XyzAverage { get; init; }
    public required double XyzRms { get; init; }
    public required double OrientMax { get; init; }
    public required double OrientAverage { get; init; }
    public required double OrientRms { get; init; }
    public required double Robustness { get; init; }
}
```

## `RobotModelLinkConfiguration`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record RobotModelLinkConfiguration
{
    public required RobotModelLinkType LinkType { get; init; }
    public required double DhAlphaComponent { get; init; }
    public required double DhAComponent { get; init; }
    public required double DhDComponent { get; init; }
    public required double DhThetaComponent { get; init; }
    public required double DhXAxisDeflectionFactor { get; init; }
    public required double DhYAxisDeflectionFactor { get; init; }
    public required double DhZAxisDeflectionFactor { get; init; }
    public required double SixDofXComponent { get; init; }
    public required double SixDofYComponent { get; init; }
    public required double SixDofZComponent { get; init; }
    public required double SixDofRxComponent { get; init; }
    public required double SixDofRyComponent { get; init; }
    public required double SixDofRzComponent { get; init; }
    public required RobotActiveJointComponent ActiveJointComponent { get; init; }
    public required double EncoderOffsetValue { get; init; }
    public required double MinimumEncoderLimit { get; init; }
    public required double MaximumEncoderLimit { get; init; }
    public required bool EncoderSenseNegative { get; init; }
    public required bool IncludeAdditionalEncoder { get; init; }
    public required int AdditionalEncoderIndexOffset { get; init; }
    public required bool AdditionalEncoderSenseNegative { get; init; }
    public required double SegmentOriginMassKg { get; init; }
    public required double SegmentCgMassKg { get; init; }
    public required Vector SegmentCgInSegment { get; init; }
}
```

## `RobotModelLinkType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum RobotModelLinkType
{
    Dh = 1,
    SixDof = 2,
}
```

## `SaInteractionMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum SaInteractionMode { Manual = 1, Automatic = 2, Silent = 3 }
```

## `ScalarToleranceLimit`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public readonly record struct ScalarToleranceLimit(bool Enabled = false, double Value = 0);
```

## `ShowUsmnDialog`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum ShowUsmnDialog
{
    No = 1,
    Yes = 2,
    OnToleranceViolation = 3,
}
```

## `SigmoidalGapFitConstraints`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record SigmoidalGapFitConstraints
{
    public required bool UseSigmoidalGapConstraints { get; init; }
    public required double MinimumGapBoundary { get; init; }
    public required double MinimumGapWeight { get; init; }
    public required double MaximumGapBoundary { get; init; }
    public required double MaximumGapWeight { get; init; }
    public required double NominalGap { get; init; }
    public required double NominalGapWeight { get; init; }
    public required double GradientSteepnessFactor { get; init; }
}
```

## `SlotType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum SlotType { Round = 1, Square = 2 }
```

## `SolverMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum SolverMode
{
    GaussNewton = 1,
    LevenbergMarquardt = 2,
    GaussNewtonWithGradientSearch = 3,
    DirectSearch = 4,
}
```

## `SphereFitComputationMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum SphereFitComputationMode { Standard = 1, MaxInscribed = 2, MinCircumscribed = 3 }
```

## `SurfaceAnalysisMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum SurfaceAnalysisMode { None = 1, Relationship = 2, Normals = 3, Curvature = 4, DeviationRms = 5, DeviationMax = 6, DeviationAverage = 7, DeviationMin = 8, DeviationMaxAbsolute = 9, DeviationMaxDelta = 10, PseudoSurface = 11 }
```

## `SurfaceDissectionMode`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum SurfaceDissectionMode
{
    EntireSolid = 1,
    SelectFaces = 2,
}
```

## `SurfaceFaceList`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record SurfaceFaceList
{
    public required string Value { get; init; }
}
```

## `SurveyTargetType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum SurveyTargetType
{
    Triangle = 1,
    Circle = 2,
}
```

## `SystemString`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum SystemString
{
    SaVersion = 1,
    XitFilename = 2,
    MpFilename = 3,
    MpFilenameFullPath = 4,
    DateAndTime = 5,
    Date = 6,
    DateShort = 7,
    Time = 8,
    KeySerialNumber = 9,
    CompanyName = 10,
    UserName = 11,
    LicenseUserName = 12,
    WindowsUserName = 13,
    ComputerName = 14,
}
```

## `TargetComputationMethod`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum TargetComputationMethod
{
    UseMostRecentShotFromEachFace = 1,
    UseOnlyMostRecentShot = 2,
    DoNotChangePriorMeasurements = 3,
    ForceNewPointForEachMeasurement = 4,
    RemoveAllPriorShots = 5,
    DeactivateAllPriorShots = 6,
}
```

## `TcpFixtureUncertainties`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record TcpFixtureUncertainties
{
    public required bool SolutionValid { get; init; }
    public required Transform RefinedTcpInWorking { get; init; }
    public required DoubleVector6 UncertaintiesInTcpFixtureFrame { get; init; }
    public required DoubleVector6 UncertaintiesInWorkingFrame { get; init; }
    public required double RmsError { get; init; }
    public required double MaximumAbsoluteError { get; init; }
    public required double GoodnessOfFit { get; init; }
    public required double Robustness { get; init; }
    public required IReadOnlyList<string> ResultNotes { get; init; }
}
```

## `TemperatureUnits`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum TemperatureUnits { Fahrenheit = 1, Celsius = 2 }
```

## `ToleranceLimit`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public readonly record struct ToleranceLimit(bool Enabled = false, double Value = 0);
```

## `ToleranceScalarOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public readonly record struct ToleranceScalarOptions(
    ScalarToleranceLimit High = default,
    ScalarToleranceLimit Low = default);
```

## `ToleranceVectorOptions`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record ToleranceVectorOptions
{
    public static ToleranceVectorOptions NoLimits { get; } = new();

    public ToleranceLimit HighX { get; init; }
    public ToleranceLimit HighY { get; init; }
    public ToleranceLimit HighZ { get; init; }
    public ToleranceLimit HighMagnitude { get; init; }
    public ToleranceLimit LowX { get; init; }
    public ToleranceLimit LowY { get; init; }
    public ToleranceLimit LowZ { get; init; }
    public ToleranceLimit LowMagnitude { get; init; }
}
```

## `Transform`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record Transform
{
    public static Transform Identity => new()
    {
        Values =
        [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ],
    };

    public required double[] Values { get; init; }
}
```

## `TranslucencyType`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum TranslucencyType { Solid = 1, Translucent = 2, Wireframe = 3 }
```

## `UncertaintyCovarianceMatrix`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record UncertaintyCovarianceMatrix
{
    public required DoubleVector6 Row1 { get; init; }
    public required DoubleVector6 Row2 { get; init; }
    public required DoubleVector6 Row3 { get; init; }
    public required DoubleVector6 Row4 { get; init; }
    public required DoubleVector6 Row5 { get; init; }
    public required DoubleVector6 Row6 { get; init; }
}
```

## `Vector`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record Vector
{
    public Vector() { }

    public Vector(double x, double y, double z) => (X, Y, Z) = (x, y, z);

    public double X { get; init; }
    public double Y { get; init; }
    public double Z { get; init; }
}
```

## `VectorName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record VectorName
{
    public required string CollectionName { get; init; }
    public required string GroupName { get; init; }
    public required string Name { get; init; }
}
```

## `ViewName`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record ViewName { public required string Name { get; init; } }
```

## `WcfAxis`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public enum WcfAxis
{
    X = 1,
    Y = 2,
    Z = 3,
}
```

## `WindowState`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public enum WindowState { Maximize = 1, Minimize = 2, Restore = 3, Show = 4, Hide = 5 }
```

## `WorldTransform`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/OperationValues.cs)

```csharp
public sealed record WorldTransform
{
    public required Transform Transform { get; init; }
    public required double ScaleFactor { get; init; }
}
```

## `WrtlChannelStatus`

[Candidate Declaration](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7/src/Briosa.Client/WaveBOperationValues.cs)

```csharp
public sealed record WrtlChannelStatus
{
    public required bool ConnectionStatus { get; init; }
    public required int ActiveChannel { get; init; }
}
```


## `CalibrationApplianceNodeStatus`

```csharp
public sealed record CalibrationApplianceNodeStatus
{
    public required bool InstrumentConnected { get; init; }
    public required bool CalibrationApplianceConnected { get; init; }
}
```

## `CalloutPosition`

```csharp
public sealed record CalloutPosition
{
    public required int XPosition { get; init; }
    public required int YPosition { get; init; }
    public required int XAnchorPosition { get; init; }
    public required int YAnchorPosition { get; init; }
    public required int CalloutWidth { get; init; }
    public required int CalloutHeight { get; init; }
}
```

## `ConstructVectorGroupGroupToGroupCompareResult`

```csharp
public sealed record ConstructVectorGroupGroupToGroupCompareResult
{
    public required int VectorCount { get; init; }
    public required double RmsDeviation { get; init; }
    public required double MaxAbsoluteDeviation { get; init; }
    public required double AverageDeviation { get; init; }
}
```

## `DeleteCollectionsByWildcardResult`

```csharp
public sealed record DeleteCollectionsByWildcardResult
{
    public required int NumDeleted { get; init; }
    public required int NumFailed { get; init; }
}
```

## `DeleteFoldersByWildcardResult`

```csharp
public sealed record DeleteFoldersByWildcardResult
{
    public required int NumDeleted { get; init; }
    public required int NumFailed { get; init; }
}
```

## `DriftCheckResult`

```csharp
public sealed record DriftCheckResult
{
    public required double MaximumError { get; init; }
    public required double RmsError { get; init; }
    public required bool InstrumentAdded { get; init; }
    public CollectionInstrumentId? NewInstrument { get; init; }
}
```

## `EulerXyzTransformComponents`

```csharp
public sealed record EulerXyzTransformComponents
{
    public required double X { get; init; }
    public required double Y { get; init; }
    public required double Z { get; init; }
    public required double Rx { get; init; }
    public required double Ry { get; init; }
    public required double Rz { get; init; }
}
```

## `EulerZxzTransformComponents`

```csharp
public sealed record EulerZxzTransformComponents
{
    public required double X { get; init; }
    public required double Y { get; init; }
    public required double Z { get; init; }
    public required double FirstRz { get; init; }
    public required double Rx { get; init; }
    public required double SecondRz { get; init; }
}
```

## `EulerZyxTransformComponents`

```csharp
public sealed record EulerZyxTransformComponents
{
    public required double X { get; init; }
    public required double Y { get; init; }
    public required double Z { get; init; }
    public required double Rz { get; init; }
    public required double Ry { get; init; }
    public required double Rx { get; init; }
}
```

## `EulerZyzTransformComponents`

```csharp
public sealed record EulerZyzTransformComponents
{
    public required double X { get; init; }
    public required double Y { get; init; }
    public required double Z { get; init; }
    public required double FirstRz { get; init; }
    public required double Ry { get; init; }
    public required double SecondRz { get; init; }
}
```

## `EvaluateFeatureCheckResult`

```csharp
public sealed record EvaluateFeatureCheckResult
{
    public required bool CheckEvaluated { get; init; }
    public required string CheckResult { get; init; }
    public required bool NonUniqueResult { get; init; }
    public required double MeasuredDeviationUpper { get; init; }
    public required double DistanceOutOfToleranceUpper { get; init; }
    public required WorldTransform EvalDeltaTransformUpper { get; init; }
    public required double MeasuredDeviationLower { get; init; }
    public required double DistanceOutOfToleranceLower { get; init; }
    public required WorldTransform EvalDeltaTransformLower { get; init; }
    public required string CheckType { get; init; }
    public required string ToleranceType { get; init; }
    public required double ToleranceSimple { get; init; }
    public required double ToleranceCompositeUpper { get; init; }
    public required double ToleranceCompositeLower { get; init; }
    public required double ToleranceRangeMin { get; init; }
    public required double ToleranceRangeMax { get; init; }
    public required double ToleranceNominalPlusMinusNominal { get; init; }
    public required double ToleranceNominalPlusMinusMinus { get; init; }
    public required double ToleranceNominalPlusMinusPlus { get; init; }
}
```

## `EvaluateFeatureChecksResult`

```csharp
public sealed record EvaluateFeatureChecksResult
{
    public required int TotalPassed { get; init; }
    public required int TotalFailed { get; init; }
    public required int TotalIncomplete { get; init; }
}
```

## `FeatureCheckDatumReferencesResult`

```csharp
public sealed record FeatureCheckDatumReferencesResult
{
    public required FeatureCheckDatumReference Datum1 { get; init; }
    public required FeatureCheckDatumReference Datum2 { get; init; }
    public required FeatureCheckDatumReference Datum3 { get; init; }
}
```

## `FitErrorResult`

```csharp
public sealed record FitErrorResult
{
    public required double RmsError { get; init; }
    public required double MaximumError { get; init; }
}
```

## `FixedXyzTransformComponents`

```csharp
public sealed record FixedXyzTransformComponents
{
    public required double X { get; init; }
    public required double Y { get; init; }
    public required double Z { get; init; }
    public required double Rx { get; init; }
    public required double Ry { get; init; }
    public required double Rz { get; init; }
}
```

## `FixedXyzTransformVectors`

```csharp
public sealed record FixedXyzTransformVectors
{
    public required Vector PositionInWorking { get; init; }
    public required Vector OrientationInWorking { get; init; }
}
```

## `GeneralRelationshipStatistics`

```csharp
public sealed record GeneralRelationshipStatistics
{
    public required double AbsoluteMaxDeviation { get; init; }
    public required double Rms { get; init; }
    public required bool HasSignedDeviation { get; init; }
    public required double SignedMaxDeviation { get; init; }
    public required double SignedMinDeviation { get; init; }
}
```

## `GetCloudPointCountResult`

```csharp
public sealed record GetCloudPointCountResult
{
    public required int PointsCount { get; init; }

    public required double PlanarOffset { get; init; }

    public required double RadialOffset { get; init; }

    public required int ActiveClippingPlanes { get; init; }

}
```

## `GetCloudRGBValuesNearPointResult`

```csharp
public sealed record GetCloudRGBValuesNearPointResult
{
    public required int LowValue { get; init; }

    public required int HighValue { get; init; }

    public required int AverageValue { get; init; }

    public required int StandardDeviation { get; init; }

}
```

## `GetCloudRGBValuesResult`

```csharp
public sealed record GetCloudRGBValuesResult
{
    public required int LowValue { get; init; }

    public required int HighValue { get; init; }

    public required int AverageValue { get; init; }

    public required int StandardDeviation { get; init; }

}
```

## `InstrumentBestFitResult`

```csharp
public sealed record InstrumentBestFitResult
{
    public required Transform TransformInWorking { get; init; }
    public required WorldTransform OptimumTransform { get; init; }
    public required double RmsDeviation { get; init; }
    public required double MaximumAbsoluteDeviation { get; init; }
    public required int NumberOfUnknowns { get; init; }
    public required int NumberOfEquations { get; init; }
    public required double Robustness { get; init; }
}
```

## `InstrumentModelResult`

```csharp
public sealed record InstrumentModelResult
{
    public required string Name { get; init; }
    public required string Model { get; init; }
}
```

## `InstrumentPositionUpdate`

```csharp
public sealed record InstrumentPositionUpdate
{
    public required double XOrR { get; init; }
    public required double YOrTheta { get; init; }
    public required double ZOrPhi { get; init; }
    public required double TimeSinceUpdate { get; init; }
    public required string Timestamp { get; init; }
}
```

## `InstrumentTargetsAndModeProfiles`

```csharp
public sealed record InstrumentTargetsAndModeProfiles
{
    public required IReadOnlyList<string> ModeProfiles { get; init; }
    public required IReadOnlyList<string> TargetNames { get; init; }
}
```

## `InstrumentWeatherSetting`

```csharp
public sealed record InstrumentWeatherSetting
{
    public required double Temperature { get; init; }
    public required double Pressure { get; init; }
    public required double RelativeHumidity { get; init; }
    public required bool SetAutomatically { get; init; }
}
```

## `InstrumentXyzUncertainties`

```csharp
public sealed record InstrumentXyzUncertainties
{
    public required double XUncertainty { get; init; }
    public required double YUncertainty { get; init; }
    public required double ZUncertainty { get; init; }
}
```

## `LastInstrumentIndexResult`

```csharp
public sealed record LastInstrumentIndexResult
{
    public required int InstrumentIndex { get; init; }
    public required CollectionInstrumentId Instrument { get; init; }
}
```

## `LrSelfTestResult`

```csharp
public sealed record LrSelfTestResult
{
    public required double ReferenceArmLength { get; init; }
    public required double ReferenceArmQuality { get; init; }
    public required int MirrorMeasurementCount { get; init; }
    public required double MirrorMeasurementRangeMean { get; init; }
    public required double MirrorMeasurementRangeStandardDeviation { get; init; }
    public required double MirrorMeasurementQualityMean { get; init; }
    public required double MirrorMeasurementQualityStandardDeviation { get; init; }
    public required bool PassedReferenceArmQualityThreshold { get; init; }
    public required bool PassedMirrorOffsetDeltaThreshold { get; init; }
    public required bool PassedMirrorOffsetStandardDeviationThreshold { get; init; }
    public required bool PassedMirrorMeanQualityThreshold { get; init; }
    public required bool PassedOverall { get; init; }
}
```

## `MeshVolumeResult`

```csharp
public sealed record MeshVolumeResult
{
    public required double Above { get; init; }

    public required double Below { get; init; }

}
```

## `PointComparisonResult`

```csharp
public sealed record PointComparisonResult
{
    public required Vector VectorRepresentation { get; init; }
    public required double XValue { get; init; }
    public required double YValue { get; init; }
    public required double ZValue { get; init; }
    public required double Magnitude { get; init; }
    public required PointName ResultingPointName { get; init; }
}
```

## `PointToPointRelationshipStatistics`

```csharp
public sealed record PointToPointRelationshipStatistics
{
    public required double DeltaX { get; init; }
    public required double DeltaY { get; init; }
    public required double DeltaZ { get; init; }
    public required double DeltaMagnitude { get; init; }
    public required CollectionObjectName ReferenceFrame { get; init; }
}
```

## `PointsToObjectsRelationshipStatistics`

```csharp
public sealed record PointsToObjectsRelationshipStatistics
{
    public required double AbsoluteMaxDeviation { get; init; }
    public required double MaxDeviation { get; init; }
    public required double MinDeviation { get; init; }
    public required double AvgDeviation { get; init; }
    public required double Rms { get; init; }
    public required int CandidatePointCount { get; init; }
    public required int SampledPointCount { get; init; }
    public required int RejectedPointCount { get; init; }
    public required int UsedPointCount { get; init; }
    public required int OutOfTolerancePointCount { get; init; }
}
```

## `RelationshipFitResult`

```csharp
public sealed record RelationshipFitResult
{
    public required Transform TransformInReference { get; init; }
    public required WorldTransform TransformInWorking { get; init; }
    public required WorldTransform TransformInWorld { get; init; }
    public required double FitObjectiveValue { get; init; }
}
```

## `ResetCloudBoundingBoxResult`

```csharp
public sealed record ResetCloudBoundingBoxResult
{
    public required double XAxisDimension { get; init; }

    public required double YAxisDimension { get; init; }

    public required double ZAxisDimension { get; init; }

    public required Vector XAxisInWorld { get; init; }

    public required Vector YAxisInWorld { get; init; }

    public required Vector ZAxisInWorld { get; init; }

    public required Vector CentroidInWorld { get; init; }

    public required Transform ReferenceTransformInWorld { get; init; }

    public required Transform ReferenceTransformInWorking { get; init; }

    public required int PointsUsedForBoundingBox { get; init; }

}
```

## `RobotModelLinkParameters`

```csharp
public sealed record RobotModelLinkParameters
{
    public required RobotModelLinkConfiguration Configuration { get; init; }
    public required double EncoderValue { get; init; }
}
```

## `TrackerEdmTheodoliteUncertainties`

```csharp
public sealed record TrackerEdmTheodoliteUncertainties
{
    public required double ThetaDispersion { get; init; }
    public required double ThetaThreshold { get; init; }
    public required double PhiDispersion { get; init; }
    public required double PhiThreshold { get; init; }
    public required double Distance { get; init; }
    public required double DistanceThreshold { get; init; }
}
```

## `TransformAxes`

```csharp
public sealed record TransformAxes
{
    public required Vector Origin { get; init; }
    public required Vector XAxis { get; init; }
    public required Vector YAxis { get; init; }
    public required Vector ZAxis { get; init; }
}
```

## `WorldFixedXyzTransformComponents`

```csharp
public sealed record WorldFixedXyzTransformComponents
{
    public required double X { get; init; }
    public required double Y { get; init; }
    public required double Z { get; init; }
    public required double Rx { get; init; }
    public required double Ry { get; init; }
    public required double Rz { get; init; }
    public required double Scale { get; init; }
}
```

## `WorldFixedXyzTransformVectors`

```csharp
public sealed record WorldFixedXyzTransformVectors
{
    public required Vector PositionInWorking { get; init; }
    public required Vector OrientationInWorking { get; init; }
    public required double Scale { get; init; }
}
```
