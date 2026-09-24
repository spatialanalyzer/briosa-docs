---
title: Analysis Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Analysis Operations

[SA 2026.1.0529.7](/api/dotnet/analysis-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/analysis-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Angle Between Line and Plane {/* #angle-between-line-and-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-line-and-plane) · [gRPC Contract](/api/grpc/analysis-operations#angle-between-line-and-plane)

```csharp
public Task<double> AngleBetweenLineAndPlaneAsync(
        CollectionObjectName selectedLine,
        CollectionObjectName selectedPlane,
        double nominalAngle = 0.000000,
        double angleTolerance = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angleTolerance` | 0.0 disables this tolerance. |

## Angle Between Two Lines {/* #angle-between-two-lines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-lines) · [gRPC Contract](/api/grpc/analysis-operations#angle-between-two-lines)

```csharp
public Task<double> AngleBetweenTwoLinesAsync(
        CollectionObjectName line1,
        CollectionObjectName line2,
        double nominalAngle = 0.000000,
        double angleTolerance = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angleTolerance` | 0.0 disables this tolerance. |

## Angle Between Two Planes' normals {/* #angle-between-two-planes-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#angle-between-two-planes-normals) · [gRPC Contract](/api/grpc/analysis-operations#angle-between-two-planes-normals)

```csharp
public Task<double> AngleBetweenTwoPlanesNormalsAsync(
        CollectionObjectName planeA,
        CollectionObjectName planeB,
        double nominalAngle = 0.000000,
        double angleTolerance = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `angleTolerance` | 0.0 disables this tolerance. |

## Best Fit Transformation - Group to Group {/* #best-fit-transformation---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#best-fit-transformation---group-to-group) · [gRPC Contract](/api/grpc/analysis-operations#best-fit-transformation---group-to-group)

```csharp
public Task<BestFitTransformationGroupToGroupResult> BestFitTransformationGroupToGroupAsync(
        CollectionObjectName referenceGroup,
        CollectionObjectName correspondingGroup,
        bool showInterface,
        double rmsTolerance,
        double maximumAbsoluteTolerance,
        bool allowScale,
        bool allowX,
        bool allowY,
        bool allowZ,
        bool allowRx,
        bool allowRy,
        bool allowRz,
        bool lockDegreesOfFreedom,
        bool generateEvent,
        FileReference filePathForCsvTextReport,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |
| `filePathForCsvTextReport` | Requires Show Interface to be true. |

## Compute Group to Group Orientation (Rx,Ry,Rz) {/* #compute-group-to-group-orientation-rxryrz */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#compute-group-to-group-orientation-rxryrz) · [gRPC Contract](/api/grpc/analysis-operations#compute-group-to-group-orientation-rxryrz)

```csharp
public Task<ComputeGroupToGroupOrientationRxRyRzResult> ComputeGroupToGroupOrientationRxRyRzAsync(
        CollectionObjectName referenceGroup,
        CollectionObjectName correspondingGroup,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Uncertainty Cloud Point Sets {/* #create-point-uncertainty-cloud-point-sets */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-cloud-point-sets) · [gRPC Contract](/api/grpc/analysis-operations#create-point-uncertainty-cloud-point-sets)

```csharp
public Task<CreatePointUncertaintyCloudPointSetsResult> CreatePointUncertaintyCloudPointSetsAsync(
        IEnumerable<PointName> pointNameList,
        int numberOfSamples = 1000,
        string uncertaintyReferenceFrameMode = "With respect to WORLD",
        string groupingMode = "Group per point",
        string pointSetMode = "Point clouds",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Point Uncertainty Fields {/* #create-point-uncertainty-fields */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#create-point-uncertainty-fields) · [gRPC Contract](/api/grpc/analysis-operations#create-point-uncertainty-fields)

```csharp
public Task CreatePointUncertaintyFieldsAsync(
        IEnumerable<PointName> pointNameList,
        int numberOfSamples = 1000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Fit Geometry to Point Group {/* #fit-geometry-to-point-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group) · [gRPC Contract](/api/grpc/analysis-operations#fit-geometry-to-point-group)

```csharp
public Task FitGeometryToPointGroupAsync(
        GeometryType geometryType,
        CollectionObjectName groupToFit,
        CollectionObjectName resultingObjectName,
        string fitProfileName,
        bool reportDeviations,
        double fitInterfaceTolerance,
        bool ignoreOutOfTolerancePoints,
        CollectionObjectName startingConditionGeometry,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fitInterfaceTolerance` | -1.0 uses the profile tolerance. |
| `startingConditionGeometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Fit Geometry to Point Group Projected to Plane {/* #fit-geometry-to-point-group-projected-to-plane */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-point-group-projected-to-plane) · [gRPC Contract](/api/grpc/analysis-operations#fit-geometry-to-point-group-projected-to-plane)

```csharp
public Task FitGeometryToPointGroupProjectedToPlaneAsync(
        GeometryType geometryType,
        CollectionObjectName groupToFit,
        CollectionObjectName planeName,
        CollectionObjectName resultingObjectName,
        string fitProfileName,
        bool reportDeviations,
        double fitInterfaceTolerance,
        bool ignoreOutOfTolerancePoints,
        CollectionObjectName startingConditionGeometry,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fitInterfaceTolerance` | -1.0 uses the profile tolerance. |
| `startingConditionGeometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Fit Geometry to Points {/* #fit-geometry-to-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#fit-geometry-to-points) · [gRPC Contract](/api/grpc/analysis-operations#fit-geometry-to-points)

```csharp
public Task FitGeometryToPointsAsync(
        GeometryType geometryType,
        IEnumerable<PointName> pointsToFit,
        CollectionObjectName resultingObjectName,
        string fitProfileName,
        bool reportDeviations,
        double fitInterfaceTolerance,
        bool ignoreOutOfTolerancePoints,
        CollectionObjectName startingConditionGeometry,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `fitInterfaceTolerance` | -1.0 uses the profile tolerance. |
| `startingConditionGeometry` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Get B-Spline Properties {/* #get-b-spline-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-b-spline-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-b-spline-properties)

```csharp
public Task<GetBSplinePropertiesResult> GetBSplinePropertiesAsync(
        CollectionObjectName bSplineName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Circle Properties {/* #get-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-circle-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-circle-properties)

```csharp
public Task<GetCirclePropertiesResult> GetCirclePropertiesAsync(
        CollectionObjectName circleName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cone Properties {/* #get-cone-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cone-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-cone-properties)

```csharp
public Task<GetConePropertiesResult> GetConePropertiesAsync(
        CollectionObjectName coneName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `ConeEndPoint` | Expressed in working coordinates. |
| `ConeAxis` | Expressed in working coordinates. |

## Get Coordinate for i-th Point in Point Set {/* #get-coordinate-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-coordinate-for-i-th-point-in-point-set) · [gRPC Contract](/api/grpc/analysis-operations#get-coordinate-for-i-th-point-in-point-set)

```csharp
public Task<GetCoordinateForIthPointInPointSetResult> GetCoordinateForIthPointInPointSetAsync(
        CollectionObjectName pointSet,
        int pointSetIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cylinder Properties {/* #get-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-cylinder-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-cylinder-properties)

```csharp
public Task<GetCylinderPropertiesResult> GetCylinderPropertiesAsync(
        CollectionObjectName cylinderName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Ellipse Properties {/* #get-ellipse-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-ellipse-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-ellipse-properties)

```csharp
public Task<GetEllipsePropertiesResult> GetEllipsePropertiesAsync(
        CollectionObjectName ellipseName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Euler Parameters for Frame {/* #get-euler-parameters-for-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-frame) · [gRPC Contract](/api/grpc/analysis-operations#get-euler-parameters-for-frame)

```csharp
public Task<GetEulerParametersForFrameResult> GetEulerParametersForFrameAsync(
        CollectionObjectName frame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Euler Parameters for i-th Frame in Frame Set {/* #get-euler-parameters-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/analysis-operations#get-euler-parameters-for-i-th-frame-in-frame-set)

```csharp
public Task<GetEulerParametersForIthFrameInFrameSetResult> GetEulerParametersForIthFrameInFrameSetAsync(
        CollectionObjectName frameSet,
        int frameSetIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Collection Name {/* #get-i-th-collection-name */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-collection-name) · [gRPC Contract](/api/grpc/analysis-operations#get-i-th-collection-name)

```csharp
public Task<string> GetIthCollectionNameAsync(
        int collectionIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Point From Group {/* #get-i-th-point-from-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-i-th-point-from-group) · [gRPC Contract](/api/grpc/analysis-operations#get-i-th-point-from-group)

```csharp
public Task<GetIthPointFromGroupResult> GetIthPointFromGroupAsync(
        CollectionObjectName groupName,
        int pointIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Line Properties {/* #get-line-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-line-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-line-properties)

```csharp
public Task<GetLinePropertiesResult> GetLinePropertiesAsync(
        CollectionObjectName lineName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Auxiliary Data {/* #get-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-auxiliary-data) · [gRPC Contract](/api/grpc/analysis-operations#get-measurement-auxiliary-data)

```csharp
public Task<GetMeasurementAuxiliaryDataResult> GetMeasurementAuxiliaryDataAsync(
        PointName pointName,
        string auxiliaryName = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Info Data {/* #get-measurement-info-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-info-data) · [gRPC Contract](/api/grpc/analysis-operations#get-measurement-info-data)

```csharp
public Task<string> GetMeasurementInfoDataAsync(
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Measurement Weather Data {/* #get-measurement-weather-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-measurement-weather-data) · [gRPC Contract](/api/grpc/analysis-operations#get-measurement-weather-data)

```csharp
public Task<GetMeasurementWeatherDataResult> GetMeasurementWeatherDataAsync(
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `Temperature` | Temperature in degrees Fahrenheit. |
| `Pressure` | Pressure in inches of mercury. |
| `Humidity` | Relative humidity in percent. |

## Get Number of Collections {/* #get-number-of-collections */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-collections) · [gRPC Contract](/api/grpc/analysis-operations#get-number-of-collections)

```csharp
public Task<int> GetNumberOfCollectionsAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Frames In Frame Set {/* #get-number-of-frames-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-frames-in-frame-set) · [gRPC Contract](/api/grpc/analysis-operations#get-number-of-frames-in-frame-set)

```csharp
public Task<int> GetNumberOfFramesInFrameSetAsync(
        CollectionObjectName frameSetContainer,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Points in Group {/* #get-number-of-points-in-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-group) · [gRPC Contract](/api/grpc/analysis-operations#get-number-of-points-in-group)

```csharp
public Task<int> GetNumberOfPointsInGroupAsync(
        CollectionObjectName groupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Points In Point Set {/* #get-number-of-points-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-number-of-points-in-point-set) · [gRPC Contract](/api/grpc/analysis-operations#get-number-of-points-in-point-set)

```csharp
public Task<int> GetNumberOfPointsInPointSetAsync(
        CollectionObjectName pointSetContainer,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Object Reporting Frame {/* #get-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-object-reporting-frame) · [gRPC Contract](/api/grpc/analysis-operations#get-object-reporting-frame)

```csharp
public Task<CollectionObjectName> GetObjectReportingFrameAsync(
        CollectionObjectName objectName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Plane Properties {/* #get-plane-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-plane-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-plane-properties)

```csharp
public Task<GetPlanePropertiesResult> GetPlanePropertiesAsync(
        CollectionObjectName planeName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate {/* #get-point-coordinate */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate) · [gRPC Contract](/api/grpc/analysis-operations#get-point-coordinate)

```csharp
public Task<GetPointCoordinateResult> GetPointCoordinateAsync(
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate (Cylindrical) {/* #get-point-coordinate-cylindrical */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-cylindrical) · [gRPC Contract](/api/grpc/analysis-operations#get-point-coordinate-cylindrical)

```csharp
public Task<GetPointCoordinateCylindricalResult> GetPointCoordinateCylindricalAsync(
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Coordinate (Polar) {/* #get-point-coordinate-polar */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-coordinate-polar) · [gRPC Contract](/api/grpc/analysis-operations#get-point-coordinate-polar)

```csharp
public Task<GetPointCoordinatePolarResult> GetPointCoordinatePolarAsync(
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Properties {/* #get-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-point-properties)

```csharp
public Task<GetPointPropertiesResult> GetPointPropertiesAsync(
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point To Line Distance {/* #get-point-to-line-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-line-distance) · [gRPC Contract](/api/grpc/analysis-operations#get-point-to-line-distance)

```csharp
public Task<GetPointToLineDistanceResult> GetPointToLineDistanceAsync(
        PointName point,
        CollectionObjectName line,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point To Point Distance {/* #get-point-to-point-distance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-to-point-distance) · [gRPC Contract](/api/grpc/analysis-operations#get-point-to-point-distance)

```csharp
public Task<GetPointToPointDistanceResult> GetPointToPointDistanceAsync(
        PointName firstPoint,
        PointName secondPoint,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Tolerance {/* #get-point-tolerance */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-point-tolerance) · [gRPC Contract](/api/grpc/analysis-operations#get-point-tolerance)

```csharp
public Task<GetPointToleranceResult> GetPointToleranceAsync(
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Slot Properties {/* #get-slot-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-slot-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-slot-properties)

```csharp
public Task<GetSlotPropertiesResult> GetSlotPropertiesAsync(
        CollectionObjectName slotName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `SlotTransform` | Expressed in working coordinates. |
| `Center` | Expressed in working coordinates. |
| `NormalDirection` | Expressed in working coordinates. |
| `CenterlinePt1` | Expressed in working coordinates. |
| `CenterlinePt2` | Expressed in working coordinates. |

## Get Sphere Properties {/* #get-sphere-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-sphere-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-sphere-properties)

```csharp
public Task<GetSpherePropertiesResult> GetSpherePropertiesAsync(
        CollectionObjectName sphereName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Surface Physical Stats {/* #get-surface-physical-stats */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-surface-physical-stats) · [gRPC Contract](/api/grpc/analysis-operations#get-surface-physical-stats)

```csharp
public Task<GetSurfacePhysicalStatsResult> GetSurfacePhysicalStatsAsync(
        CollectionObjectName surfaceName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Timestamp for i-th Frame in Frame Set {/* #get-timestamp-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/analysis-operations#get-timestamp-for-i-th-frame-in-frame-set)

```csharp
public Task<double> GetTimestampForIthFrameInFrameSetAsync(
        CollectionObjectName frameSet,
        int frameSetIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Timestamp for i-th Point in Point Set {/* #get-timestamp-for-i-th-point-in-point-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-timestamp-for-i-th-point-in-point-set) · [gRPC Contract](/api/grpc/analysis-operations#get-timestamp-for-i-th-point-in-point-set)

```csharp
public Task<double> GetTimestampForIthPointInPointSetAsync(
        CollectionObjectName pointSet,
        int pointSetIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Torus Properties {/* #get-torus-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-torus-properties) · [gRPC Contract](/api/grpc/analysis-operations#get-torus-properties)

```csharp
public Task<GetTorusPropertiesResult> GetTorusPropertiesAsync(
        CollectionObjectName torusName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform for i-th Frame in Frame Set {/* #get-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#get-transform-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/analysis-operations#get-transform-for-i-th-frame-in-frame-set)

```csharp
public Task<Transform> GetTransformForIthFrameInFrameSetAsync(
        CollectionObjectName frameSet,
        int frameSetIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Group To Surface Fit {/* #group-to-surface-fit */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#group-to-surface-fit) · [gRPC Contract](/api/grpc/analysis-operations#group-to-surface-fit)

```csharp
public Task<GroupToSurfaceFitResult> GroupToSurfaceFitAsync(
        CollectionObjectName groupToFit,
        CollectionObjectName surface,
        bool doConventionalFit = false,
        double rmsTolerance = 0.000000,
        double maximumAbsoluteTolerance = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Import Geometry Fit Profiles {/* #import-geometry-fit-profiles */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#import-geometry-fit-profiles) · [gRPC Contract](/api/grpc/analysis-operations#import-geometry-fit-profiles)

```csharp
public Task ImportGeometryFitProfilesAsync(
        FileReference geometryFitProfilesFilePath,
        bool overwriteProfilesWithSameName = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Is Object of Type {/* #is-object-of-type */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#is-object-of-type) · [gRPC Contract](/api/grpc/analysis-operations#is-object-of-type)

```csharp
public Task<bool> IsObjectOfTypeAsync(
        CollectionObjectName objectName,
        ObjectType objectType,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Circle Fit Profile {/* #make-circle-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-circle-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-circle-fit-profile)

```csharp
public Task MakeCircleFitProfileAsync(
        string fitProfileName,
        MeasuredSideForRadialOffset measuredSideForRadialOffset,
        double overrideRadialOffset,
        MeasuredSideForPlanarOffset measuredSideForPlanarOffset,
        double overridePlanarOffset,
        NormalDirection planarOffsetDirection,
        double lockRadius,
        CompTechnique circleComputationTechnique,
        bool reverseNormalVectorAfterFit = false,
        bool makeCardinalPoints = true,
        bool cardinalPt1Center = true,
        bool cardinalPt2PointOnNormal = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `overridePlanarOffset` | -1.0 uses the current offset. |
| `lockRadius` | -1.0 leaves this dimension unlocked. |

## Make Cone Fit Profile {/* #make-cone-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cone-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-cone-fit-profile)

```csharp
public Task MakeConeFitProfileAsync(
        string fitProfileName,
        MeasuredSideForRadialOffset measuredSideForRadialOffset,
        double overrideRadialOffset = -1.000000,
        double lockAngleInDegrees = -1.000000,
        bool useExhaustiveSearch = true,
        bool makeCardinalPoints = true,
        bool cardinalPt1Vertex = true,
        bool cardinalPt2PointOnAxis = true,
        bool cardinalPt3CutPointOnAxis = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `lockAngleInDegrees` | -1.0 leaves this dimension unlocked. |

## Make Cylinder Fit Profile {/* #make-cylinder-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-cylinder-fit-profile)

```csharp
public Task MakeCylinderFitProfileAsync(
        string fitProfileName,
        MeasuredSideForRadialOffset measuredSideForRadialOffset,
        double overrideRadialOffset,
        double lockRadius,
        FitMethod lockedRadiusFitMethod,
        bool constrainToNominalAxis,
        bool constrainToNominalOrientation,
        bool alignWithNominal,
        bool reverseAxis,
        bool setAxisFirstToLastPoint,
        CompTechnique cylinderComputationTechnique,
        bool useExhaustiveSearch = false,
        bool makeCardinalPoints = true,
        bool cardinalPt1BeginPt = true,
        bool cardinalPt2EndPt = true,
        bool cardinalPt3Center = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `lockRadius` | -1.0 leaves this dimension unlocked. |

## Make Ellipse Fit Profile {/* #make-ellipse-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-ellipse-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-ellipse-fit-profile)

```csharp
public Task MakeEllipseFitProfileAsync(
        string fitProfileName,
        MeasuredSideForRadialOffset measuredSideForRadialOffset,
        double overrideRadialOffset,
        MeasuredSideForPlanarOffset measuredSideForPlanarOffset,
        double overridePlanarOffset,
        NormalDirection planarOffsetDirection,
        bool reverseNormalVectorAfterFit = false,
        bool makeCardinalPoints = true,
        bool cardinalPt1Center = true,
        bool cardinalPt2PointOnNormal = true,
        bool cardinalPt3FocalPt1 = true,
        bool cardinalPt4FocalPt2 = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `overridePlanarOffset` | -1.0 uses the current offset. |

## Make Line Fit Profile {/* #make-line-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-line-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-line-fit-profile)

```csharp
public Task MakeLineFitProfileAsync(
        string fitProfileName = "",
        bool reverseNormalVectorAfterFit = false,
        bool makeCardinalPoints = true,
        bool cardinalPt1PointA = true,
        bool cardinalPt2PointB = true,
        bool cardinalPt3MidPoint = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Paraboloid Fit Profile {/* #make-paraboloid-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-paraboloid-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-paraboloid-fit-profile)

```csharp
public Task MakeParaboloidFitProfileAsync(
        string fitProfileName,
        MeasuredSideForRadialOffset measuredSideForRadialOffset,
        double overrideRadialOffset,
        double lockFocalLength,
        DegreeOfFreedom degreeOfFreedom,
        bool makeCardinalPoints = true,
        bool cardinalPt1Vertex = true,
        bool cardinalPt2FocalPoint = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `lockFocalLength` | -1.0 leaves this dimension unlocked. |

## Make Plane Fit Profile {/* #make-plane-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-plane-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-plane-fit-profile)

```csharp
public Task MakePlaneFitProfileAsync(
        string fitProfileName,
        MeasuredSideForPlanarOffset measuredSideForPlanarOffset,
        double overridePlanarOffset,
        NormalDirection planarOffsetDirection,
        bool reverseNormalVectorAfterFit = false,
        bool makeCardinalPoints = true,
        bool cardinalPt1Centroid = true,
        bool cardinalPt2PointOnNormal = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overridePlanarOffset` | -1.0 uses the current offset. |

## Make Slot Fit Profile {/* #make-slot-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-slot-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-slot-fit-profile)

```csharp
public Task MakeSlotFitProfileAsync(
        string fitProfileName,
        MeasuredSideForRadialOffset measuredSideForRadialOffset,
        double overrideRadialOffset,
        MeasuredSideForPlanarOffset measuredSideForPlanarOffset,
        double overridePlanarOffset,
        NormalDirection planarOffsetDirection,
        SlotType slotType,
        CompTechnique slotComputationTechnique,
        bool reverseNormalVectorAfterFit = false,
        bool makeCardinalPoints = true,
        bool cardinalPt1Center = true,
        bool cardinalPt2PointOnNormal = true,
        bool cardinalPt3CenterlinePt1 = true,
        bool cardinalPt4CenterlinePt2 = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `overridePlanarOffset` | -1.0 uses the current offset. |

## Make Sphere Fit Profile {/* #make-sphere-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#make-sphere-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#make-sphere-fit-profile)

```csharp
public Task MakeSphereFitProfileAsync(
        string fitProfileName,
        MeasuredSideForRadialOffset measuredSideForRadialOffset,
        double overrideRadialOffset,
        double lockRadius,
        bool makeCardinalPoints,
        bool cardinalPt1Center,
        SphereFitComputationMode computationMethod,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `overrideRadialOffset` | -1.0 uses the current offset. |
| `lockRadius` | -1.0 leaves this dimension unlocked. |

## Mushroom Target Hole Inspection {/* #mushroom-target-hole-inspection */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#mushroom-target-hole-inspection) · [gRPC Contract](/api/grpc/analysis-operations#mushroom-target-hole-inspection)

```csharp
public Task<MushroomTargetHoleInspectionResult> MushroomTargetHoleInspectionAsync(
        string namePrefixForIntermediateConstructions,
        CollectionObjectName spherePointsGroupName,
        double sphereTargetRadius,
        CollectionObjectName targetContactPlane,
        PointName pointToCreateAtHole,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Patch Normal Shift - Hole / Pin {/* #patch-normal-shift---hole--pin */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---hole--pin) · [gRPC Contract](/api/grpc/analysis-operations#patch-normal-shift---hole--pin)

```csharp
public Task PatchNormalShiftHolePinAsync(
        CollectionObjectName planePointsGroupName,
        CollectionObjectName perimeterPointsGroupName,
        PointName resultingPointName,
        double additionalMaterialThickness = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Patch Normal Shift - Point {/* #patch-normal-shift---point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#patch-normal-shift---point) · [gRPC Contract](/api/grpc/analysis-operations#patch-normal-shift---point)

```csharp
public Task PatchNormalShiftPointAsync(
        CollectionObjectName planePointsGroupName,
        PointName pointToShift,
        PointName resultingPointName,
        double additionalMaterialThickness = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Clouds to Objects {/* #query-clouds-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-objects) · [gRPC Contract](/api/grpc/analysis-operations#query-clouds-to-objects)

```csharp
public Task<QueryCloudsToObjectsResult> QueryCloudsToObjectsAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        IEnumerable<CollectionObjectName> objectNames,
        CollectionObjectName resultingObjectName,
        ProjectionOptions projectionOptions,
        double proximity = 0.000000,
        int skipFactor = 0,
        double rmsTolerance = 0.000000,
        double maximumAbsoluteTolerance = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Query Clouds to Surface {/* #query-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-clouds-to-surface) · [gRPC Contract](/api/grpc/analysis-operations#query-clouds-to-surface)

```csharp
public Task<QueryCloudsToSurfaceResult> QueryCloudsToSurfaceAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        CollectionObjectName filterSurfaceName,
        CollectionObjectName resultingObjectName,
        ProjectionOptions projectionOptions,
        double proximity = 0.000000,
        int skipFactor = 0,
        double rmsTolerance = 0.000000,
        double maximumAbsoluteTolerance = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Query Frame to Frame {/* #query-frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-frame-to-frame) · [gRPC Contract](/api/grpc/analysis-operations#query-frame-to-frame)

```csharp
public Task<QueryFrameToFrameResult> QueryFrameToFrameAsync(
        CollectionObjectName referenceFrameName,
        CollectionObjectName correspondingFrameName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `Rx` | MP qualifier: Roll. |
| `Ry` | MP qualifier: Pitch. |
| `Rz` | MP qualifier: Yaw. |

## Query Groups to Objects {/* #query-groups-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-groups-to-objects) · [gRPC Contract](/api/grpc/analysis-operations#query-groups-to-objects)

```csharp
public Task<QueryGroupsToObjectsResult> QueryGroupsToObjectsAsync(
        IEnumerable<CollectionObjectName> groupNameList,
        IEnumerable<CollectionObjectName> objectNameList,
        CollectionObjectName resultingObjectName,
        ProjectionOptions projectionOptions,
        double rmsTolerance = 0.000000,
        double maximumAbsoluteTolerance = 0.000000,
        bool showResultsDialog = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `groupNameList` | MP qualifier: Groups to Project. |
| `objectNameList` | MP qualifier: Objects to Project to. |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Query Point to Objects {/* #query-point-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-objects) · [gRPC Contract](/api/grpc/analysis-operations#query-point-to-objects)

```csharp
public Task<QueryPointToObjectsResult> QueryPointToObjectsAsync(
        PointName pointName,
        IEnumerable<CollectionObjectName> objects,
        bool ignoreTargetOffset = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Point to Point Along Curve {/* #query-point-to-point-along-curve */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-point-to-point-along-curve) · [gRPC Contract](/api/grpc/analysis-operations#query-point-to-point-along-curve)

```csharp
public Task<double> QueryPointToPointAlongCurveAsync(
        PointName value1stPoint,
        PointName value2ndPoint,
        CollectionObjectName curve,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Points to Circle {/* #query-points-to-circle */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-circle) · [gRPC Contract](/api/grpc/analysis-operations#query-points-to-circle)

```csharp
public Task QueryPointsToCircleAsync(
        CollectionObjectName circleName,
        CollectionObjectName pointGroupName,
        bool isInsideMeasurement,
        int autoScaleVectorsToOfRadius,
        CollectionObjectName vectorGroupNameForRadial,
        CollectionObjectName vectorGroupNameForPlanar,
        CollectionObjectName vectorGroupNameForCombined,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Query Points to Objects {/* #query-points-to-objects */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-objects) · [gRPC Contract](/api/grpc/analysis-operations#query-points-to-objects)

```csharp
public Task<QueryPointsToObjectsResult> QueryPointsToObjectsAsync(
        IEnumerable<PointName> pointNames,
        IEnumerable<CollectionObjectName> objectNameList,
        CollectionObjectName resultingObjectName,
        ProjectionOptions projectionOptions,
        double rmsTolerance = 0.000000,
        double maximumAbsoluteTolerance = 0.000000,
        bool showResultsDialog = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `objectNameList` | MP qualifier: Objects to Project to. |
| `rmsTolerance` | 0.0 disables this tolerance. |
| `maximumAbsoluteTolerance` | 0.0 disables this tolerance. |

## Query Points to Single Point {/* #query-points-to-single-point */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#query-points-to-single-point) · [gRPC Contract](/api/grpc/analysis-operations#query-points-to-single-point)

```csharp
public Task QueryPointsToSinglePointAsync(
        IEnumerable<PointName> pointNames,
        PointName singlePoint,
        bool showVectorProperties = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Re-Compute Calculated Items {/* #re-compute-calculated-items */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) · [gRPC Contract](/api/grpc/analysis-operations#re-compute-calculated-items)

```csharp
public Task ReComputeCalculatedItemsAsync(
        bool targetsFromShots = false,
        bool hiddenPoints = false,
        bool relationships = false,
        bool refreshFilteredCloudData = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename points based on inter-point distance to reference points {/* #rename-points-based-on-inter-point-distance-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points) · [gRPC Contract](/api/grpc/analysis-operations#rename-points-based-on-inter-point-distance-to-reference-points)

```csharp
public Task RenamePointsBasedOnInterPointDistanceToReferencePointsAsync(
        CollectionObjectName referenceGroupName,
        CollectionObjectName groupToRenamePoints,
        double distanceThreshold = 0.000000,
        bool verifyResults = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename points based on proximity to reference points {/* #rename-points-based-on-proximity-to-reference-points */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#rename-points-based-on-proximity-to-reference-points) · [gRPC Contract](/api/grpc/analysis-operations#rename-points-based-on-proximity-to-reference-points)

```csharp
public Task RenamePointsBasedOnProximityToReferencePointsAsync(
        CollectionObjectName referenceGroupName,
        CollectionObjectName groupToRenamePoints,
        double proximityThreshold = 0.000000,
        bool verifyResults = false,
        bool renameAllProximatePoints = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse B-Splines {/* #reverse-b-splines */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-b-splines) · [gRPC Contract](/api/grpc/analysis-operations#reverse-b-splines)

```csharp
public Task ReverseBSplinesAsync(
        IEnumerable<CollectionObjectName> bSplineList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse Plane Normals {/* #reverse-plane-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-plane-normals) · [gRPC Contract](/api/grpc/analysis-operations#reverse-plane-normals)

```csharp
public Task ReversePlaneNormalsAsync(
        IEnumerable<CollectionObjectName> planeList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Reverse Surface Normals {/* #reverse-surface-normals */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#reverse-surface-normals) · [gRPC Contract](/api/grpc/analysis-operations#reverse-surface-normals)

```csharp
public Task ReverseSurfaceNormalsAsync(
        IEnumerable<CollectionObjectName> surfaceList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Circle Properties {/* #set-circle-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-circle-properties) · [gRPC Contract](/api/grpc/analysis-operations#set-circle-properties)

```csharp
public Task SetCirclePropertiesAsync(
        CollectionObjectName circleName,
        Vector centerCoordinate,
        Vector normalDirection,
        double radius = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cone Properties {/* #set-cone-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-cone-properties) · [gRPC Contract](/api/grpc/analysis-operations#set-cone-properties)

```csharp
public Task SetConePropertiesAsync(
        CollectionObjectName coneName,
        Vector coneEndPoint,
        Vector coneAxis,
        double coneLength = 0.000000,
        double coneThetaStart = 0.000000,
        double coneThetaSpan = 0.000000,
        double coneIncludedAngle = 0.000000,
        double cutLengthFromApex = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `coneEndPoint` | Expressed in working coordinates. |
| `coneAxis` | Expressed in working coordinates. |

## Set Cylinder Properties {/* #set-cylinder-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-cylinder-properties) · [gRPC Contract](/api/grpc/analysis-operations#set-cylinder-properties)

```csharp
public Task SetCylinderPropertiesAsync(
        CollectionObjectName cylinderName,
        Vector beginCoordinate,
        Vector axisDirection,
        double length = 0.000000,
        double diameter = 0.000000,
        bool nominalsPointInward = true,
        int facets = 32,
        bool enableThetaExtentDisplayMode = true,
        double thetaStartInDegrees = 0.000000,
        double thetaSpanInDegrees = 360.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Default Colorization Options {/* #set-default-colorization-options */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-default-colorization-options) · [gRPC Contract](/api/grpc/analysis-operations#set-default-colorization-options)

```csharp
public Task SetDefaultColorizationOptionsAsync(
        ColorizationOptions colorizationOptions,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Ellipse Properties {/* #set-ellipse-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-ellipse-properties) · [gRPC Contract](/api/grpc/analysis-operations#set-ellipse-properties)

```csharp
public Task SetEllipsePropertiesAsync(
        CollectionObjectName ellipseName,
        Vector centerCoordinate,
        Vector normalDirection,
        double majorAxisRadius = 0.000000,
        double minorAxisRadius = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geometry Relationship Fit Profile {/* #set-geometry-relationship-fit-profile */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-geometry-relationship-fit-profile) · [gRPC Contract](/api/grpc/analysis-operations#set-geometry-relationship-fit-profile)

```csharp
public Task SetGeometryRelationshipFitProfileAsync(
        GeometryType geometryType,
        IEnumerable<CollectionItemName> relationshipRefList,
        string fitProfileName = "",
        bool applyCardinalPointSettings = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Line Properties {/* #set-line-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-line-properties) · [gRPC Contract](/api/grpc/analysis-operations#set-line-properties)

```csharp
public Task SetLinePropertiesAsync(
        CollectionObjectName lineName,
        Vector beginCoordinate,
        Vector endCoordinate,
        double length = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `length` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Set Measurement Auxiliary Data {/* #set-measurement-auxiliary-data */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-measurement-auxiliary-data) · [gRPC Contract](/api/grpc/analysis-operations#set-measurement-auxiliary-data)

```csharp
public Task SetMeasurementAuxiliaryDataAsync(
        PointName pointName,
        string auxiliaryName = "",
        double value = 0.000000,
        string units = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object Reporting Frame {/* #set-object-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-object-reporting-frame) · [gRPC Contract](/api/grpc/analysis-operations#set-object-reporting-frame)

```csharp
public Task SetObjectReportingFrameAsync(
        CollectionObjectName objectName,
        CollectionObjectName reportingFrame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Properties {/* #set-point-properties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-properties) · [gRPC Contract](/api/grpc/analysis-operations#set-point-properties)

```csharp
public Task SetPointPropertiesAsync(
        IEnumerable<PointName> pointNameList,
        double planarOffset,
        double radialOffset,
        ToleranceVectorOptions positionTolerance,
        Vector componentWeights,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Weights From Uncertainties {/* #set-point-weights-from-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-point-weights-from-uncertainties) · [gRPC Contract](/api/grpc/analysis-operations#set-point-weights-from-uncertainties)

```csharp
public Task<PointName[]> SetPointWeightsFromUncertaintiesAsync(
        IEnumerable<PointName> pointNameList,
        string uncertaintyReferenceFrameMode,
        CollectionObjectName reportingFrame,
        string weightNormalizationMode,
        double fixedWeightValue,
        CollectionObjectName outputWeightedPointGroup,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform for i-th Frame in Frame Set {/* #set-transform-for-i-th-frame-in-frame-set */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#set-transform-for-i-th-frame-in-frame-set) · [gRPC Contract](/api/grpc/analysis-operations#set-transform-for-i-th-frame-in-frame-set)

```csharp
public Task SetTransformForIthFrameInFrameSetAsync(
        CollectionObjectName frameSet,
        int frameSetIndex,
        Transform transformInWorking,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Sphere Axis Check {/* #sphere-axis-check */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#sphere-axis-check) · [gRPC Contract](/api/grpc/analysis-operations#sphere-axis-check)

```csharp
public Task<SphereAxisCheckResult> SphereAxisCheckAsync(
        CollectionObjectName spherePointsGroupName,
        double sphereTargetRadius,
        PointName pointToCreateAtSphereCenter,
        CollectionObjectName lineDefiningTheAxis,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Temperature Compensate a group {/* #temperature-compensate-a-group */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#temperature-compensate-a-group) · [gRPC Contract](/api/grpc/analysis-operations#temperature-compensate-a-group)

```csharp
public Task TemperatureCompensateAGroupAsync(
        CollectionObjectName originalGroup,
        FrameName scalingOrigin,
        double materialCte,
        double initialTemperature,
        double finalTemperature,
        CollectionObjectName scaledGroupName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `scalingOrigin` | MP qualifier: coordinate frame. |
| `materialCte` | Coefficient per degree Fahrenheit. |
| `initialTemperature` | Temperature in degrees Fahrenheit. |
| `finalTemperature` | Temperature in degrees Fahrenheit. |

## Transform Objects - Frame To Frame {/* #transform-objects---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects---frame-to-frame) · [gRPC Contract](/api/grpc/analysis-operations#transform-objects---frame-to-frame)

```csharp
public Task TransformObjectsFrameToFrameAsync(
        IEnumerable<CollectionObjectName> objectNameList,
        CollectionObjectName initialFrameName,
        CollectionObjectName destinationFrameName,
        int numberOfSteps = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Objects by Delta (About Working Frame) {/* #transform-objects-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-about-working-frame) · [gRPC Contract](/api/grpc/analysis-operations#transform-objects-by-delta-about-working-frame)

```csharp
public Task TransformObjectsByDeltaAboutWorkingFrameAsync(
        IEnumerable<CollectionObjectName> objectsToTransform,
        Transform deltaTransform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Objects by Delta (World Transform Operator) {/* #transform-objects-by-delta-world-transform-operator */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#transform-objects-by-delta-world-transform-operator) · [gRPC Contract](/api/grpc/analysis-operations#transform-objects-by-delta-world-transform-operator)

```csharp
public Task TransformObjectsByDeltaWorldTransformOperatorAsync(
        IEnumerable<CollectionObjectName> objectsToTransform,
        WorldTransform deltaTransform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Translate Objects by Delta {/* #translate-objects-by-delta */}

[MP Catalog](/mp-command-catalog/commands/analysis-operations#translate-objects-by-delta) · [gRPC Contract](/api/grpc/analysis-operations#translate-objects-by-delta)

```csharp
public Task TranslateObjectsByDeltaAsync(
        IEnumerable<CollectionObjectName> objectsToTranslate,
        Vector deltaTranslation,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2026.1.0529.7)
