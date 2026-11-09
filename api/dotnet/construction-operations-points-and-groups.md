---
title: Construction Operations / Points and Groups
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Points and Groups

[SA 2026.1.0529.7](/api/dotnet/construction-operations-points-and-groups) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-points-and-groups)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Construct Point (Fit to Points) {/* #construct-point-fit-to-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-fit-to-points) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-fit-to-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointFitToPointsAsync(
        IEnumerable<PointName> pointNames,
        PointName resultingPointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point in Working Coordinates {/* #construct-a-point-in-working-coordinates */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-in-working-coordinates) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-a-point-in-working-coordinates)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointInWorkingCoordinatesAsync(
        PointName pointName,
        Vector workingCoordinates,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point From Survey Target Center {/* #construct-point-from-survey-target-center */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-survey-target-center) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-from-survey-target-center)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointFromSurveyTargetCenterAsync(
        CollectionObjectName cloudContainingTarget,
        PointName referenceSeedPoint,
        PointName resultCenterPointName,
        SurveyTargetType surveyTargetType = SurveyTargetType.Triangle,
        double searchDiameter = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Position in Working Coordinates {/* #set-point-position-in-working-coordinates */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#set-point-position-in-working-coordinates) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#set-point-position-in-working-coordinates)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetPointPositionInWorkingCoordinatesAsync(
        PointName pointName,
        Vector positionInWorkingCoordinates,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Points by Delta (About Working Frame) {/* #transform-points-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task TransformPointsByDeltaAboutWorkingFrameAsync(
        IEnumerable<PointName> pointNameList,
        Vector deltaInWorkingCoordinates,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at line MidPoint {/* #construct-a-point-at-line-midpoint */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-line-midpoint) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-a-point-at-line-midpoint)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointAtLineMidpointAsync(
        CollectionObjectName lineName,
        PointName pointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Group from Point Name Ref List {/* #construct-point-group-from-point-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointGroupFromPointNameRefListAsync(
        IEnumerable<PointName> pointNameList,
        CollectionObjectName groupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Groups from Vector Groups {/* #construct-point-groups-from-vector-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-groups-from-vector-groups) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-groups-from-vector-groups)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructPointGroupsFromVectorGroupsAsync(
        IEnumerable<CollectionObjectName> vectorGroups,
        string optionalGroupNameSuffix = "",
        bool makeVectorBeginPoints = false,
        bool makeVectorEndPoints = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Group from Point Cloud {/* #construct-point-group-from-point-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-cloud) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-group-from-point-cloud)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointGroupFromPointCloudAsync(
        CollectionObjectName cloudName,
        CollectionObjectName pointGroupName,
        string pointPrefix = "pt",
        int startingPointNumber = 0,
        double pointOffset = 0.0,
        bool subSampling = false,
        double subSamplingDistance = 0.5,
        bool showProgress = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point From Cloud Point - Runtime Select {/* #construct-point-from-cloud-point---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<Vector> ConstructPointFromCloudPointRuntimeSelectAsync(
        PointName constructedPointName,
        string selectionPrompt = "Select cloud point",
        bool constructPoint = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at Circle Center {/* #construct-a-point-at-circle-center */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-circle-center) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-a-point-at-circle-center)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointAtCircleCenterAsync(
        CollectionObjectName circleName,
        PointName pointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Planes {/* #construct-point-at-intersection-of-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-planes) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-planes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointAtIntersectionOfPlanesAsync(
        CollectionObjectName plane1Name,
        CollectionObjectName plane2Name,
        CollectionObjectName plane3Name,
        PointName pointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Two Lines {/* #construct-point-at-intersection-of-two-lines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointAtIntersectionOfTwoLinesAsync(
        CollectionObjectName firstLineName,
        CollectionObjectName secondLineName,
        PointName resultingPointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Plane and Line {/* #construct-point-at-intersection-of-plane-and-line */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointAtIntersectionOfPlaneAndLineAsync(
        CollectionObjectName planeName,
        CollectionObjectName lineName,
        PointName resultingPointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of 2 B-Splines {/* #construct-point-at-intersection-of-2-b-splines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointAtIntersectionOfTwoBSplinesAsync(
        CollectionObjectName firstBSplineName,
        CollectionObjectName secondBSplineName,
        PointName pointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at intersection of B-Spline and Surfaces {/* #construct-point-at-intersection-of-b-spline-and-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointAtIntersectionOfBSplineAndSurfacesAsync(
        CollectionObjectName bSplineName,
        IEnumerable<CollectionObjectName> surfaceList,
        PointName pointName,
        double approximationTolerance = 0.001,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Intersection of Circle and Line {/* #construct-points-at-intersection-of-circle-and-line */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsAtIntersectionOfCircleAndLineAsync(
        CollectionObjectName circleName,
        CollectionObjectName lineName,
        PointName basePointNameForResults,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Intersection of Principle Object Axes and Surfaces {/* #construct-points-at-intersection-of-principle-object-axes-and-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesAsync(
        IEnumerable<CollectionObjectName> axisObjectList,
        IEnumerable<CollectionObjectName> surfaceList,
        CollectionObjectName resultantGroupName,
        string pointSuffix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points from Cylinder {/* #construct-points-from-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-cylinder) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-from-cylinder)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsFromCylinderAsync(
        CollectionObjectName cylinderName,
        CollectionObjectName groupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at Projection of Point onto An Object {/* #construct-a-point-at-projection-of-point-onto-an-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointAtProjectionOfPointOntoObjectAsync(
        PointName pointToProject,
        CollectionObjectName objectName,
        PointName resultingPointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Parallel to WCF Axis {/* #construct-points-at-projection-on-surfaces---parallel-to-wcf-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisAsync(
        IEnumerable<CollectionObjectName> surfaceList,
        IEnumerable<PointName> pointNames,
        WcfAxis axis,
        string groupNameToContainNewPoints = "",
        string pointNamePrefix = "",
        string pointNameSuffix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Radial from WCF Axis {/* #construct-points-at-projection-on-surfaces---radial-from-wcf-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisAsync(
        IEnumerable<CollectionObjectName> surfaceList,
        IEnumerable<PointName> pointNames,
        WcfAxis axis,
        string groupNameToContainNewPoints = "",
        string pointNamePrefix = "",
        string pointNameSuffix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Spherical from WCF Origin {/* #construct-points-at-projection-on-surfaces---spherical-from-wcf-origin */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginAsync(
        IEnumerable<CollectionObjectName> surfaceList,
        IEnumerable<PointName> pointNames,
        string groupNameToContainNewPoints = "",
        string pointNamePrefix = "",
        string pointNameSuffix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Gradient At Projected Point On Surface {/* #get-gradient-at-projected-point-on-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<ProjectedPointGradient> GetGradientAtProjectedPointOnSurfaceAsync(
        PointName pointToProject,
        CollectionObjectName surfaceName,
        bool generateOutputVectorLines = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Gradient At Projected Point On Surface Edge {/* #get-gradient-at-projected-point-on-surface-edge */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<ProjectedPointGradient> GetGradientAtProjectedPointOnSurfaceEdgeAsync(
        PointName pointToProject,
        CollectionObjectName surfaceEdge,
        CollectionObjectName surfaceName,
        Vector edgeOffsetDirection,
        double edgeOffsetDistance = 0.01,
        bool generateOutputVectorLines = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `surfaceEdge` | MP qualifier: B-Spline. |

## Construct Points By Projecting Points On Mesh Along Direction {/* #construct-points-by-projecting-points-on-mesh-along-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<PointName>> ConstructPointsByProjectingPointsOnMeshAlongDirectionAsync(
        IEnumerable<PointName> referencePointNames,
        CollectionObjectName groupNameForProjectedPoints,
        CollectionObjectName objectProvidingDirectionReference,
        CollectionObjectName meshServingAsProjectionTarget,
        bool biDirectionalProjection = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Spaced at a Distance on Curves {/* #construct-points-spaced-at-a-distance-on-curves */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsSpacedAtDistanceOnCurvesAsync(
        IEnumerable<CollectionObjectName> bSplineList,
        CollectionObjectName resultantGroupName,
        double distanceBetweenPoints = 0.5,
        string resultantPointNamePrefix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points N-Spaced on Curves {/* #construct-points-n-spaced-on-curves */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-n-spaced-on-curves) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-n-spaced-on-curves)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsNSpacedOnCurvesAsync(
        IEnumerable<CollectionObjectName> bSplineList,
        CollectionObjectName resultantGroupName,
        int numberOfEvenlySpacedPoints = 10,
        string resultantPointNamePrefix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Curves Using Max Chordal Deviation {/* #construct-points-on-curves-using-max-chordal-deviation */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsOnCurvesUsingMaxChordalDeviationAsync(
        IEnumerable<CollectionObjectName> bSplineList,
        CollectionObjectName resultantGroupName,
        double maximumChordalDeviation = 0.05,
        double maximumTrimEdgeAngle = 15.0,
        double maximumChordLength = 0.0,
        string resultantPointNamePrefix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Objects Vertices {/* #construct-points-on-objects-vertices */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-objects-vertices) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-on-objects-vertices)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsOnObjectVerticesAsync(
        IEnumerable<CollectionObjectName> objectNameList,
        CollectionObjectName resultantGroupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Surface(s) by Clicking {/* #construct-points-on-surfaces-by-clicking */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task ConstructPointsOnSurfacesByClickingAsync(
        CollectionObjectName groupNameForPoints,
        string firstPointName = "p0",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points From Surface Faces - Runtime Select {/* #construct-points-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task ConstructPointsFromSurfaceFacesRuntimeSelectAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points From Surfaces On UV Grid {/* #construct-points-from-surfaces-on-uv-grid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsFromSurfacesOnUvGridAsync(
        IEnumerable<CollectionObjectName> surfaceList,
        EdgePointMode edgePointMode,
        string uvPointGroupBaseName = "UV Points",
        bool makeEachLineSeparateGroup = false,
        int numberOfUGrids = 5,
        int numberOfVGrids = 5,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Object Origin {/* #construct-point-at-object-origin */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-object-origin) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-point-at-object-origin)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<ObjectOriginResult> ConstructPointAtObjectOriginAsync(
        CollectionObjectName objectName,
        PointName resultantPointName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Shifted in Working Frame {/* #construct-points-shifted-in-working-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-shifted-in-working-frame) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-shifted-in-working-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsShiftedInWorkingFrameAsync(
        IEnumerable<PointName> originalPoints,
        CollectionObjectName groupForNewPoints,
        Vector shiftVector,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Cylindrically Shifted {/* #construct-points-cylindrically-shifted */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-cylindrically-shifted) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-cylindrically-shifted)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsCylindricallyShiftedAsync(
        CollectionObjectName referenceObjectName,
        IEnumerable<PointName> originalPoints,
        CollectionObjectName groupForNewPoints,
        double radialShift = 0.0,
        double thetaShift = 0.0,
        double planarShift = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `thetaShift` | Angle in degrees. |

## Construct Points WildCard Selection {/* #construct-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsWildcardSelectionAsync(
        IEnumerable<CollectionObjectName> groupsToSelectFrom,
        PointName wildcardSelectionNames,
        CollectionObjectName groupForNewPoints,
        bool includePriorCompleteName = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Subset with greatest spacing {/* #construct-points-subset-with-greatest-spacing */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsSubsetWithGreatestSpacingAsync(
        IEnumerable<PointName> pointsToSubsample,
        CollectionObjectName groupForSubset,
        int subsetSize = 10,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Layout on Grid {/* #construct-points-layout-on-grid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-layout-on-grid) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-layout-on-grid)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsLayoutOnGridAsync(
        CollectionObjectName groupName,
        string pointPrefix = "p",
        double xMin = 0.0,
        double xMax = 100.0,
        int xCount = 10,
        double yMin = 0.0,
        double yMax = 50.0,
        int yCount = 10,
        double zMin = 0.0,
        double zMax = 0.0,
        int zCount = 1,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Auto-Correspond 2 groups Proximity {/* #construct-points-auto-correspond-2-groups-proximity */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsAutoCorrespondTwoGroupsProximityAsync(
        CollectionObjectName referenceGroup,
        CollectionObjectName groupToBeCopied,
        CollectionObjectName groupToContainMatchedPoints,
        double samePointTolerance = 0.25,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Auto-Correspond 2 groups Inter-Point Distance {/* #construct-points-auto-correspond-2-groups-inter-point-distance */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceAsync(
        CollectionObjectName referenceGroup,
        CollectionObjectName groupToBeCopied,
        CollectionObjectName groupToContainMatchedPoints,
        double samePointTolerance = 0.1,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Average a set of Groups {/* #average-a-set-of-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#average-a-set-of-groups) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#average-a-set-of-groups)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GroupAverageResult> AverageSetOfGroupsAsync(
        IEnumerable<CollectionObjectName> groupNames,
        CollectionObjectName resultingGroupName,
        double rmsTolerance = 0.0,
        double maximumAbsoluteTolerance = 0.0,
        double maximumAverageTolerance = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Groups Excluding Obscured Points {/* #copy-groups-excluding-obscured-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#copy-groups-excluding-obscured-points) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#copy-groups-excluding-obscured-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task CopyGroupsExcludingObscuredPointsAsync(
        CollectionInstrumentId instrumentId,
        IEnumerable<CollectionObjectName> groupNames,
        CollectionName newCollectionName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name - Runtime Select {/* #make-a-point-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<PointName> MakePointNameRuntimeSelectAsync(
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name - Ensure Unique {/* #make-a-point-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---ensure-unique) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name---ensure-unique)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointName> MakePointNameEnsureUniqueAsync(
        PointName pointName,
        bool useNumberSuffix = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List From a Group {/* #make-a-point-name-ref-list-from-a-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<PointName>> MakePointNameRefListFromGroupAsync(
        CollectionObjectName groupName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List - Runtime Select {/* #make-a-point-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<IReadOnlyList<PointName>> MakePointNameRefListRuntimeSelectAsync(
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List - Wildcard Select {/* #make-a-point-name-ref-list---wildcard-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<PointName>> MakePointNameRefListWildcardSelectAsync(
        string collectionWildcardCriteria = "*",
        string groupNameWildcardCriteria = "*",
        string pointNameWildcardCriteria = "*",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Hidden Point Bar Database {/* #clear-hidden-point-bar-database */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#clear-hidden-point-bar-database) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#clear-hidden-point-bar-database)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task ClearHiddenPointBarDatabaseAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Hidden Point Rod {/* #create-hidden-point-rod */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point-rod) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#create-hidden-point-rod)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<int> CreateHiddenPointRodAsync(
        string hiddenPointRodName,
        double aToBDistance = 0.0,
        double aToCDistance = 0.0,
        double interPointTolerance = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `aToBDistance` | MP qualifier: Target to Target. |
| `aToCDistance` | MP qualifier: Target to Tip. |

## Get Hidden Point Rod Index by Name {/* #get-hidden-point-rod-index-by-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<int> GetHiddenPointRodIndexByNameAsync(
        string hiddenPointRodName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Hidden Point Rod {/* #delete-hidden-point-rod */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#delete-hidden-point-rod) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#delete-hidden-point-rod)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteHiddenPointRodAsync(
        int hiddenPointRodIndex = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Hidden Point {/* #create-hidden-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point) · [gRPC Contract](/api/grpc/construction-operations-points-and-groups#create-hidden-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task CreateHiddenPointAsync(
        PointName endAPointName,
        PointName endBPointName,
        PointName pointNameToCreate,
        int hiddenPointRodIndex = 0,
        bool overwriteExistingPoint = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Basic Point and Group Construction {/* #basic-point-and-group-construction */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Intersections and Projections {/* #intersections-and-projections */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Gradients, Meshes, and Curves {/* #gradients-meshes-and-curves */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Surface, Layout, and Group Workflows {/* #surface-layout-and-group-workflows */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Point-Name Queries {/* #point-name-queries */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Hidden Point Bar {/* #hidden-point-bar */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Example {/* #example */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7)
