---
title: Construction Operations / Points and Groups
description: Released javascript 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Points and Groups

[SA 2026.1.0529.7](/api/javascript/construction-operations-points-and-groups) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/construction-operations-points-and-groups)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Point (Fit to Points) {/* #construct-point-fit-to-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-fit-to-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-fit-to-points)

```ts
export interface ConstructPointFitToPointsInput {
  readonly pointNames: Iterable<PointName>;
  readonly resultingPointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointFitToPoints(
    input: ConstructPointFitToPointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point in Working Coordinates {/* #construct-a-point-in-working-coordinates */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-in-working-coordinates) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-a-point-in-working-coordinates)

```ts
export interface ConstructPointInWorkingCoordinatesInput {
  readonly pointName: PointName;
  readonly workingCoordinates: Vector;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointInWorkingCoordinates(
    input: ConstructPointInWorkingCoordinatesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point From Survey Target Center {/* #construct-point-from-survey-target-center */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-survey-target-center) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-from-survey-target-center)

```ts
export interface ConstructPointFromSurveyTargetCenterInput {
  readonly cloudContainingTarget: CollectionObjectName;
  readonly referenceSeedPoint: PointName;
  readonly resultCenterPointName: PointName;
  readonly surveyTargetType?: SurveyTargetType;
  readonly searchDiameter?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointFromSurveyTargetCenter(
    input: ConstructPointFromSurveyTargetCenterInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Position in Working Coordinates {/* #set-point-position-in-working-coordinates */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#set-point-position-in-working-coordinates) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#set-point-position-in-working-coordinates)

```ts
export interface SetPointPositionInWorkingCoordinatesInput {
  readonly pointName: PointName;
  readonly positionInWorkingCoordinates: Vector;
}

// Member of BriosaClient
interface BriosaClient {
  setPointPositionInWorkingCoordinates(
    input: SetPointPositionInWorkingCoordinatesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Points by Delta (About Working Frame) {/* #transform-points-by-delta-about-working-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame)

```ts
export interface TransformPointsByDeltaAboutWorkingFrameInput {
  readonly pointNameList: Iterable<PointName>;
  readonly deltaInWorkingCoordinates: Vector;
}

// Member of BriosaClient
interface BriosaClient {
  transformPointsByDeltaAboutWorkingFrame(
    input: TransformPointsByDeltaAboutWorkingFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at line MidPoint {/* #construct-a-point-at-line-midpoint */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-line-midpoint) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-a-point-at-line-midpoint)

```ts
export interface ConstructPointAtLineMidpointInput {
  readonly lineName: CollectionObjectName;
  readonly pointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtLineMidpoint(
    input: ConstructPointAtLineMidpointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Group from Point Name Ref List {/* #construct-point-group-from-point-name-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list)

```ts
export interface ConstructPointGroupFromPointNameRefListInput {
  readonly pointNameList: Iterable<PointName>;
  readonly groupName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointGroupFromPointNameRefList(
    input: ConstructPointGroupFromPointNameRefListInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Groups from Vector Groups {/* #construct-point-groups-from-vector-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-groups-from-vector-groups) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-groups-from-vector-groups)

```ts
export interface ConstructPointGroupsFromVectorGroupsInput {
  readonly vectorGroups: Iterable<CollectionObjectName>;
  readonly optionalGroupNameSuffix?: string;
  readonly makeVectorBeginPoints?: boolean;
  readonly makeVectorEndPoints?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointGroupsFromVectorGroups(
    input: ConstructPointGroupsFromVectorGroupsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly CollectionObjectName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point Group from Point Cloud {/* #construct-point-group-from-point-cloud */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-cloud) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-group-from-point-cloud)

```ts
export interface ConstructPointGroupFromPointCloudInput {
  readonly cloudName: CollectionObjectName;
  readonly pointGroupName: CollectionObjectName;
  readonly pointPrefix?: string;
  readonly startingPointNumber?: number;
  readonly pointOffset?: number;
  readonly subSampling?: boolean;
  readonly subSamplingDistance?: number;
  readonly showProgress?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointGroupFromPointCloud(
    input: ConstructPointGroupFromPointCloudInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point From Cloud Point - Runtime Select {/* #construct-point-from-cloud-point---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select)

```ts
export interface ConstructPointFromCloudPointRuntimeSelectInput {
  readonly selectionPrompt?: string;
  readonly constructPoint?: boolean;
  readonly constructedPointName?: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointFromCloudPointRuntimeSelect(
    input?: ConstructPointFromCloudPointRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<Vector>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at Circle Center {/* #construct-a-point-at-circle-center */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-circle-center) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-a-point-at-circle-center)

```ts
export interface ConstructPointAtCircleCenterInput {
  readonly circleName: CollectionObjectName;
  readonly pointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtCircleCenter(
    input: ConstructPointAtCircleCenterInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Planes {/* #construct-point-at-intersection-of-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-planes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-at-intersection-of-planes)

```ts
export interface ConstructPointAtIntersectionOfPlanesInput {
  readonly plane1Name: CollectionObjectName;
  readonly plane2Name: CollectionObjectName;
  readonly plane3Name: CollectionObjectName;
  readonly pointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtIntersectionOfPlanes(
    input: ConstructPointAtIntersectionOfPlanesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Two Lines {/* #construct-point-at-intersection-of-two-lines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines)

```ts
export interface ConstructPointAtIntersectionOfTwoLinesInput {
  readonly firstLineName: CollectionObjectName;
  readonly secondLineName: CollectionObjectName;
  readonly resultingPointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtIntersectionOfTwoLines(
    input: ConstructPointAtIntersectionOfTwoLinesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of Plane and Line {/* #construct-point-at-intersection-of-plane-and-line */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line)

```ts
export interface ConstructPointAtIntersectionOfPlaneAndLineInput {
  readonly planeName: CollectionObjectName;
  readonly lineName: CollectionObjectName;
  readonly resultingPointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtIntersectionOfPlaneAndLine(
    input: ConstructPointAtIntersectionOfPlaneAndLineInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Intersection of 2 B-Splines {/* #construct-point-at-intersection-of-2-b-splines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines)

```ts
export interface ConstructPointAtIntersectionOfTwoBSplinesInput {
  readonly firstBSplineName: CollectionObjectName;
  readonly secondBSplineName: CollectionObjectName;
  readonly pointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtIntersectionOfTwoBSplines(
    input: ConstructPointAtIntersectionOfTwoBSplinesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at intersection of B-Spline and Surfaces {/* #construct-point-at-intersection-of-b-spline-and-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces)

```ts
export interface ConstructPointAtIntersectionOfBSplineAndSurfacesInput {
  readonly bSplineName: CollectionObjectName;
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly pointName: PointName;
  readonly approximationTolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtIntersectionOfBSplineAndSurfaces(
    input: ConstructPointAtIntersectionOfBSplineAndSurfacesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Intersection of Circle and Line {/* #construct-points-at-intersection-of-circle-and-line */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line)

```ts
export interface ConstructPointsAtIntersectionOfCircleAndLineInput {
  readonly circleName: CollectionObjectName;
  readonly lineName: CollectionObjectName;
  readonly basePointNameForResults: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsAtIntersectionOfCircleAndLine(
    input: ConstructPointsAtIntersectionOfCircleAndLineInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Intersection of Principle Object Axes and Surfaces {/* #construct-points-at-intersection-of-principle-object-axes-and-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces)

```ts
export interface ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesInput {
  readonly axisObjectList: Iterable<CollectionObjectName>;
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
  readonly pointSuffix?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsAtIntersectionOfPrincipalObjectAxesAndSurfaces(
    input: ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points from Cylinder {/* #construct-points-from-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-cylinder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-from-cylinder)

```ts
export interface ConstructPointsFromCylinderInput {
  readonly cylinderName: CollectionObjectName;
  readonly groupName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsFromCylinder(
    input: ConstructPointsFromCylinderInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct a Point at Projection of Point onto An Object {/* #construct-a-point-at-projection-of-point-onto-an-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object)

```ts
export interface ConstructPointAtProjectionOfPointOntoObjectInput {
  readonly pointToProject: PointName;
  readonly objectName: CollectionObjectName;
  readonly resultingPointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtProjectionOfPointOntoObject(
    input: ConstructPointAtProjectionOfPointOntoObjectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Parallel to WCF Axis {/* #construct-points-at-projection-on-surfaces---parallel-to-wcf-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis)

```ts
export interface ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly pointNames: Iterable<PointName>;
  readonly axis: WcfAxis;
  readonly groupNameToContainNewPoints?: string;
  readonly pointNamePrefix?: string;
  readonly pointNameSuffix?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsAtProjectionOnSurfacesParallelToWcfAxis(
    input: ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Radial from WCF Axis {/* #construct-points-at-projection-on-surfaces---radial-from-wcf-axis */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis)

```ts
export interface ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly pointNames: Iterable<PointName>;
  readonly axis: WcfAxis;
  readonly groupNameToContainNewPoints?: string;
  readonly pointNamePrefix?: string;
  readonly pointNameSuffix?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsAtProjectionOnSurfacesRadialFromWcfAxis(
    input: ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points at Projection on Surfaces - Spherical from WCF Origin {/* #construct-points-at-projection-on-surfaces---spherical-from-wcf-origin */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin)

```ts
export interface ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly pointNames: Iterable<PointName>;
  readonly groupNameToContainNewPoints?: string;
  readonly pointNamePrefix?: string;
  readonly pointNameSuffix?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsAtProjectionOnSurfacesSphericalFromWcfOrigin(
    input: ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Gradient At Projected Point On Surface {/* #get-gradient-at-projected-point-on-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface)

```ts
export interface GetGradientAtProjectedPointOnSurfaceInput {
  readonly pointToProject: PointName;
  readonly surfaceName: CollectionObjectName;
  readonly generateOutputVectorLines?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  getGradientAtProjectedPointOnSurface(
    input: GetGradientAtProjectedPointOnSurfaceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<ProjectedPointGradient>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Gradient At Projected Point On Surface Edge {/* #get-gradient-at-projected-point-on-surface-edge */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge)

```ts
export interface GetGradientAtProjectedPointOnSurfaceEdgeInput {
  readonly pointToProject: PointName;
  readonly surfaceEdge: CollectionObjectName;
  readonly surfaceName: CollectionObjectName;
  readonly edgeOffsetDirection?: Vector;
  readonly edgeOffsetDistance?: number;
  readonly generateOutputVectorLines?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  getGradientAtProjectedPointOnSurfaceEdge(
    input: GetGradientAtProjectedPointOnSurfaceEdgeInput,
    callOptions?: BriosaCallOptions,
  ): Promise<ProjectedPointGradient>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `surfaceEdge` | MP qualifier: B-Spline. |

## Construct Points By Projecting Points On Mesh Along Direction {/* #construct-points-by-projecting-points-on-mesh-along-direction */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction)

```ts
export interface ConstructPointsByProjectingPointsOnMeshAlongDirectionInput {
  readonly referencePointNames: Iterable<PointName>;
  readonly groupNameForProjectedPoints: CollectionObjectName;
  readonly objectProvidingDirectionReference: CollectionObjectName;
  readonly meshServingAsProjectionTarget: CollectionObjectName;
  readonly biDirectionalProjection?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsByProjectingPointsOnMeshAlongDirection(
    input: ConstructPointsByProjectingPointsOnMeshAlongDirectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly PointName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Spaced at a Distance on Curves {/* #construct-points-spaced-at-a-distance-on-curves */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves)

```ts
export interface ConstructPointsSpacedAtDistanceOnCurvesInput {
  readonly bSplineList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
  readonly distanceBetweenPoints?: number;
  readonly resultantPointNamePrefix?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsSpacedAtDistanceOnCurves(
    input: ConstructPointsSpacedAtDistanceOnCurvesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points N-Spaced on Curves {/* #construct-points-n-spaced-on-curves */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-n-spaced-on-curves) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-n-spaced-on-curves)

```ts
export interface ConstructPointsNSpacedOnCurvesInput {
  readonly bSplineList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
  readonly numberOfEvenlySpacedPoints?: number;
  readonly resultantPointNamePrefix?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsNSpacedOnCurves(
    input: ConstructPointsNSpacedOnCurvesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Curves Using Max Chordal Deviation {/* #construct-points-on-curves-using-max-chordal-deviation */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation)

```ts
export interface ConstructPointsOnCurvesUsingMaxChordalDeviationInput {
  readonly bSplineList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
  readonly maximumChordalDeviation?: number;
  readonly maximumTrimEdgeAngle?: number;
  readonly maximumChordLength?: number;
  readonly resultantPointNamePrefix?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsOnCurvesUsingMaxChordalDeviation(
    input: ConstructPointsOnCurvesUsingMaxChordalDeviationInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Objects Vertices {/* #construct-points-on-objects-vertices */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-objects-vertices) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-on-objects-vertices)

```ts
export interface ConstructPointsOnObjectVerticesInput {
  readonly objectNameList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsOnObjectVertices(
    input: ConstructPointsOnObjectVerticesInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points on Surface(s) by Clicking {/* #construct-points-on-surfaces-by-clicking */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking)

```ts
export interface ConstructPointsOnSurfacesByClickingInput {
  readonly groupNameForPoints: CollectionObjectName;
  readonly firstPointName?: string;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsOnSurfacesByClicking(
    input: ConstructPointsOnSurfacesByClickingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points From Surface Faces - Runtime Select {/* #construct-points-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select)

```ts
// Member of BriosaClient
interface BriosaClient {
  constructPointsFromSurfaceFacesRuntimeSelect(
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points From Surfaces On UV Grid {/* #construct-points-from-surfaces-on-uv-grid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid)

```ts
export interface ConstructPointsFromSurfacesOnUvGridInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly uvPointGroupBaseName?: string;
  readonly makeEachLineSeparateGroup?: boolean;
  readonly numberOfUGrids?: number;
  readonly numberOfVGrids?: number;
  readonly edgePointMode?: EdgePointMode;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsFromSurfacesOnUvGrid(
    input: ConstructPointsFromSurfacesOnUvGridInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Point at Object Origin {/* #construct-point-at-object-origin */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-object-origin) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-point-at-object-origin)

```ts
export interface ConstructPointAtObjectOriginInput {
  readonly objectName: CollectionObjectName;
  readonly resultantPointName: PointName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointAtObjectOrigin(
    input: ConstructPointAtObjectOriginInput,
    callOptions?: BriosaCallOptions,
  ): Promise<ObjectOriginResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Shifted in Working Frame {/* #construct-points-shifted-in-working-frame */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-shifted-in-working-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-shifted-in-working-frame)

```ts
export interface ConstructPointsShiftedInWorkingFrameInput {
  readonly originalPoints: Iterable<PointName>;
  readonly groupForNewPoints: CollectionObjectName;
  readonly shiftVector?: Vector;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsShiftedInWorkingFrame(
    input: ConstructPointsShiftedInWorkingFrameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Cylindrically Shifted {/* #construct-points-cylindrically-shifted */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-cylindrically-shifted) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-cylindrically-shifted)

```ts
export interface ConstructPointsCylindricallyShiftedInput {
  readonly referenceObjectName: CollectionObjectName;
  readonly originalPoints: Iterable<PointName>;
  readonly groupForNewPoints: CollectionObjectName;
  readonly radialShift?: number;
  readonly thetaShift?: number;
  readonly planarShift?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsCylindricallyShifted(
    input: ConstructPointsCylindricallyShiftedInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `thetaShift` | Angle in degrees. |

## Construct Points WildCard Selection {/* #construct-points-wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-wildcard-selection)

```ts
export interface ConstructPointsWildcardSelectionInput {
  readonly groupsToSelectFrom: Iterable<CollectionObjectName>;
  readonly wildcardSelectionNames: PointName;
  readonly groupForNewPoints: CollectionObjectName;
  readonly includePriorCompleteName?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsWildcardSelection(
    input: ConstructPointsWildcardSelectionInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Subset with greatest spacing {/* #construct-points-subset-with-greatest-spacing */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing)

```ts
export interface ConstructPointsSubsetWithGreatestSpacingInput {
  readonly pointsToSubsample: Iterable<PointName>;
  readonly subsetSize?: number;
  readonly groupForSubset?: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsSubsetWithGreatestSpacing(
    input: ConstructPointsSubsetWithGreatestSpacingInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Layout on Grid {/* #construct-points-layout-on-grid */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-layout-on-grid) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-layout-on-grid)

```ts
export interface ConstructPointsLayoutOnGridInput {
  readonly groupName: CollectionObjectName;
  readonly pointPrefix?: string;
  readonly xMin?: number;
  readonly xMax?: number;
  readonly xCount?: number;
  readonly yMin?: number;
  readonly yMax?: number;
  readonly yCount?: number;
  readonly zMin?: number;
  readonly zMax?: number;
  readonly zCount?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsLayoutOnGrid(
    input: ConstructPointsLayoutOnGridInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Auto-Correspond 2 groups Proximity {/* #construct-points-auto-correspond-2-groups-proximity */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity)

```ts
export interface ConstructPointsAutoCorrespondTwoGroupsProximityInput {
  readonly referenceGroup: CollectionObjectName;
  readonly groupToBeCopied: CollectionObjectName;
  readonly groupToContainMatchedPoints: CollectionObjectName;
  readonly samePointTolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsAutoCorrespondTwoGroupsProximity(
    input: ConstructPointsAutoCorrespondTwoGroupsProximityInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Points Auto-Correspond 2 groups Inter-Point Distance {/* #construct-points-auto-correspond-2-groups-inter-point-distance */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance)

```ts
export interface ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceInput {
  readonly referenceGroup: CollectionObjectName;
  readonly groupToBeCopied: CollectionObjectName;
  readonly groupToContainMatchedPoints: CollectionObjectName;
  readonly samePointTolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  constructPointsAutoCorrespondTwoGroupsInterPointDistance(
    input: ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Average a set of Groups {/* #average-a-set-of-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#average-a-set-of-groups) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#average-a-set-of-groups)

```ts
export interface AverageSetOfGroupsInput {
  readonly groupNames: Iterable<CollectionObjectName>;
  readonly resultingGroupName: CollectionObjectName;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
  readonly maximumAverageTolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  averageSetOfGroups(
    input: AverageSetOfGroupsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<GroupAverageResult>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy Groups Excluding Obscured Points {/* #copy-groups-excluding-obscured-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#copy-groups-excluding-obscured-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#copy-groups-excluding-obscured-points)

```ts
export interface CopyGroupsExcludingObscuredPointsInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly groupNames: Iterable<CollectionObjectName>;
  readonly newCollectionName: CollectionName;
}

// Member of BriosaClient
interface BriosaClient {
  copyGroupsExcludingObscuredPoints(
    input: CopyGroupsExcludingObscuredPointsInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name - Runtime Select {/* #make-a-point-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#make-a-point-name---runtime-select)

```ts
export interface MakePointNameRuntimeSelectInput {
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makePointNameRuntimeSelect(
    input?: MakePointNameRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<PointName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name - Ensure Unique {/* #make-a-point-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---ensure-unique) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#make-a-point-name---ensure-unique)

```ts
export interface MakePointNameEnsureUniqueInput {
  readonly pointName: PointName;
  readonly useNumberSuffix?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  makePointNameEnsureUnique(
    input: MakePointNameEnsureUniqueInput,
    callOptions?: BriosaCallOptions,
  ): Promise<PointName>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List From a Group {/* #make-a-point-name-ref-list-from-a-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group)

```ts
export interface MakePointNameRefListFromGroupInput {
  readonly groupName: CollectionObjectName;
}

// Member of BriosaClient
interface BriosaClient {
  makePointNameRefListFromGroup(
    input: MakePointNameRefListFromGroupInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly PointName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List - Runtime Select {/* #make-a-point-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select)

```ts
export interface MakePointNameRefListRuntimeSelectInput {
  readonly userPrompt?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makePointNameRefListRuntimeSelect(
    input?: MakePointNameRefListRuntimeSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly PointName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Point Name Ref List - Wildcard Select {/* #make-a-point-name-ref-list---wildcard-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select)

```ts
export interface MakePointNameRefListWildcardSelectInput {
  readonly collectionWildcardCriteria?: string;
  readonly groupNameWildcardCriteria?: string;
  readonly pointNameWildcardCriteria?: string;
}

// Member of BriosaClient
interface BriosaClient {
  makePointNameRefListWildcardSelect(
    input?: MakePointNameRefListWildcardSelectInput,
    callOptions?: BriosaCallOptions,
  ): Promise<readonly PointName[]>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Hidden Point Bar Database {/* #clear-hidden-point-bar-database */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#clear-hidden-point-bar-database) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#clear-hidden-point-bar-database)

```ts
// Member of BriosaClient
interface BriosaClient {
  clearHiddenPointBarDatabase(callOptions?: BriosaCallOptions): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Hidden Point Rod {/* #create-hidden-point-rod */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point-rod) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#create-hidden-point-rod)

```ts
export interface CreateHiddenPointRodInput {
  readonly hiddenPointRodName: string;
  readonly aToBDistance?: number;
  readonly aToCDistance?: number;
  readonly interPointTolerance?: number;
}

// Member of BriosaClient
interface BriosaClient {
  createHiddenPointRod(
    input: CreateHiddenPointRodInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `aToBDistance` | MP qualifier: Target to Target. |
| `aToCDistance` | MP qualifier: Target to Tip. |

## Get Hidden Point Rod Index by Name {/* #get-hidden-point-rod-index-by-name */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name)

```ts
export interface GetHiddenPointRodIndexByNameInput {
  readonly hiddenPointRodName: string;
}

// Member of BriosaClient
interface BriosaClient {
  getHiddenPointRodIndexByName(
    input: GetHiddenPointRodIndexByNameInput,
    callOptions?: BriosaCallOptions,
  ): Promise<number>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Hidden Point Rod {/* #delete-hidden-point-rod */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#delete-hidden-point-rod) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#delete-hidden-point-rod)

```ts
export interface DeleteHiddenPointRodInput {
  readonly hiddenPointRodIndex?: number;
}

// Member of BriosaClient
interface BriosaClient {
  deleteHiddenPointRod(
    input?: DeleteHiddenPointRodInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Hidden Point {/* #create-hidden-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-points-and-groups#create-hidden-point)

```ts
export interface CreateHiddenPointInput {
  readonly endAPointName: PointName;
  readonly endBPointName: PointName;
  readonly pointNameToCreate: PointName;
  readonly hiddenPointRodIndex?: number;
  readonly overwriteExistingPoint?: boolean;
}

// Member of BriosaClient
interface BriosaClient {
  createHiddenPoint(
    input: CreateHiddenPointInput,
    callOptions?: BriosaCallOptions,
  ): Promise<void>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Basic Point and Group Inputs {/* #basic-point-and-group-inputs */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Intersection and Projection Inputs {/* #intersection-and-projection-inputs */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Gradient, Mesh, and Curve Inputs {/* #gradient-mesh-and-curve-inputs */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Surface, Layout, and Group Inputs {/* #surface-layout-and-group-inputs */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Point-Name and Hidden-Point Inputs {/* #point-name-and-hidden-point-inputs */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Functions {/* #functions */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Example {/* #example */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.3.0/targets/2024.1.0508.5)
