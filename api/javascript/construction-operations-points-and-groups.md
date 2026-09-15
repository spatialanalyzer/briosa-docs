---
title: Construction Operations / Points and Groups
description: Unreleased Briosa JavaScript and TypeScript APIs for selected point and group construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Points and Groups

These functions preserve the approved MP defaults, operate on live
SpatialAnalyzer state, and are never automatically replayed.

## Shared Types

```ts
export type SurveyTargetType = "Triangle" | "Circle";
export type WcfAxis = "X Axis" | "Y Axis" | "Z Axis";
export type EdgePointMode = "Include Edges" | "Exclude Edges" | "Edges Only";

export interface ProjectedPointGradient {
  readonly projectedPoint: Vector;
  readonly normalVector: Vector;
  readonly uDirection: Vector;
  readonly vDirection: Vector;
}

export interface ObjectOriginResult {
  readonly vectorRepresentation: Vector;
  readonly xValue: number;
  readonly yValue: number;
  readonly zValue: number;
}

export interface GroupAverageResult {
  readonly rmsDeviation: number;
  readonly maxAbsoluteDeviation: number;
  readonly averageDeviation: number;
}
```

## Basic Point and Group Inputs

```ts
export interface ConstructPointFitToPointsInput {
  readonly pointNames: Iterable<PointName>;
  readonly resultingPointName: PointName;
}
export interface ConstructPointInWorkingCoordinatesInput {
  readonly pointName: PointName;
  readonly workingCoordinates: Vector;
}
export interface ConstructPointFromSurveyTargetCenterInput {
  readonly cloudContainingTarget: CollectionObjectName;
  readonly referenceSeedPoint: PointName;
  readonly resultCenterPointName: PointName;
  readonly surveyTargetType?: SurveyTargetType;
  readonly searchDiameter?: number;
}
export interface SetPointPositionInWorkingCoordinatesInput {
  readonly pointName: PointName;
  readonly positionInWorkingCoordinates: Vector;
}
export interface TransformPointsByDeltaAboutWorkingFrameInput {
  readonly pointNameList: Iterable<PointName>;
  readonly deltaInWorkingCoordinates: Vector;
}
export interface ConstructPointAtLineMidpointInput {
  readonly lineName: CollectionObjectName;
  readonly pointName: PointName;
}
export interface ConstructPointGroupFromPointNameRefListInput {
  readonly pointNameList: Iterable<PointName>;
  readonly groupName: CollectionObjectName;
}
export interface ConstructPointGroupsFromVectorGroupsInput {
  readonly vectorGroups: Iterable<CollectionObjectName>;
  readonly optionalGroupNameSuffix?: string;
  readonly makeVectorBeginPoints?: boolean;
  readonly makeVectorEndPoints?: boolean;
}
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
export interface ConstructPointFromCloudPointRuntimeSelectInput {
  readonly selectionPrompt?: string;
  readonly constructPoint?: boolean;
  readonly constructedPointName?: PointName;
}
```

Survey target type defaults to `"Triangle"`. Vector-group options default to
empty/false/false. Point-cloud conversion defaults to `"pt"`, 0, 0, false,
0.5, and false. Runtime cloud selection defaults to prompt
`"Select cloud point"` and does not construct a point.

## Intersection and Projection Inputs

```ts
export interface ConstructPointAtCircleCenterInput {
  readonly circleName: CollectionObjectName;
  readonly pointName: PointName;
}
export interface ConstructPointAtIntersectionOfPlanesInput {
  readonly plane1Name: CollectionObjectName;
  readonly plane2Name: CollectionObjectName;
  readonly plane3Name: CollectionObjectName;
  readonly pointName: PointName;
}
export interface ConstructPointAtIntersectionOfTwoLinesInput {
  readonly firstLineName: CollectionObjectName;
  readonly secondLineName: CollectionObjectName;
  readonly resultingPointName: PointName;
}
export interface ConstructPointAtIntersectionOfPlaneAndLineInput {
  readonly planeName: CollectionObjectName;
  readonly lineName: CollectionObjectName;
  readonly resultingPointName: PointName;
}
export interface ConstructPointAtIntersectionOfTwoBSplinesInput {
  readonly firstBSplineName: CollectionObjectName;
  readonly secondBSplineName: CollectionObjectName;
  readonly pointName: PointName;
}
export interface ConstructPointAtIntersectionOfBSplineAndSurfacesInput {
  readonly bSplineName: CollectionObjectName;
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly pointName: PointName;
  readonly approximationTolerance?: number;
}
export interface ConstructPointsAtIntersectionOfCircleAndLineInput {
  readonly circleName: CollectionObjectName;
  readonly lineName: CollectionObjectName;
  readonly basePointNameForResults: PointName;
}
export interface ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesInput {
  readonly axisObjectList: Iterable<CollectionObjectName>;
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
  readonly pointSuffix?: string;
}
export interface ConstructPointsFromCylinderInput {
  readonly cylinderName: CollectionObjectName;
  readonly groupName: CollectionObjectName;
}
export interface ConstructPointAtProjectionOfPointOntoObjectInput {
  readonly pointToProject: PointName;
  readonly objectName: CollectionObjectName;
  readonly resultingPointName: PointName;
}
export interface ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly pointNames: Iterable<PointName>;
  readonly axis: WcfAxis;
  readonly groupNameToContainNewPoints?: string;
  readonly pointNamePrefix?: string;
  readonly pointNameSuffix?: string;
}
export interface ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly pointNames: Iterable<PointName>;
  readonly axis: WcfAxis;
  readonly groupNameToContainNewPoints?: string;
  readonly pointNamePrefix?: string;
  readonly pointNameSuffix?: string;
}
export interface ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly pointNames: Iterable<PointName>;
  readonly groupNameToContainNewPoints?: string;
  readonly pointNamePrefix?: string;
  readonly pointNameSuffix?: string;
}
```

The two WCF operations require X, Y, or Z. B-Spline/surface tolerance defaults
to 0.001. Names default to empty, and spherical prefix/suffix map to their
matching MP fields.

## Gradient, Mesh, and Curve Inputs

```ts
export interface GetGradientAtProjectedPointOnSurfaceInput {
  readonly pointToProject: PointName;
  readonly surfaceName: CollectionObjectName;
  readonly generateOutputVectorLines?: boolean;
}
export interface GetGradientAtProjectedPointOnSurfaceEdgeInput {
  readonly pointToProject: PointName;
  readonly surfaceEdgeBSpline: CollectionObjectName;
  readonly surfaceName: CollectionObjectName;
  readonly edgeOffsetDirection?: Vector;
  readonly edgeOffsetDistance?: number;
  readonly generateOutputVectorLines?: boolean;
}
export interface ConstructPointsByProjectingPointsOnMeshAlongDirectionInput {
  readonly referencePointNames: Iterable<PointName>;
  readonly groupNameForProjectedPoints: CollectionObjectName;
  readonly objectProvidingDirectionReference: CollectionObjectName;
  readonly meshServingAsProjectionTarget: CollectionObjectName;
  readonly biDirectionalProjection?: boolean;
}
export interface ConstructPointsSpacedAtDistanceOnCurvesInput {
  readonly bSplineList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
  readonly distanceBetweenPoints?: number;
  readonly resultantPointNamePrefix?: string;
}
export interface ConstructPointsNSpacedOnCurvesInput {
  readonly bSplineList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
  readonly numberOfEvenlySpacedPoints?: number;
  readonly resultantPointNamePrefix?: string;
}
export interface ConstructPointsOnCurvesUsingMaxChordalDeviationInput {
  readonly bSplineList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
  readonly maximumChordalDeviation?: number;
  readonly maximumTrimEdgeAngle?: number;
  readonly maximumChordLength?: number;
  readonly resultantPointNamePrefix?: string;
}
```

Gradient output lines default to false. Edge offset defaults to the zero vector
and 0.01. Mesh projection defaults to bidirectional. Curve defaults are 0.5,
10, and 0.05/15/0 respectively.

## Surface, Layout, and Group Inputs

```ts
export interface ConstructPointsOnObjectVerticesInput {
  readonly objectNameList: Iterable<CollectionObjectName>;
  readonly resultantGroupName: CollectionObjectName;
}
export interface ConstructPointsOnSurfacesByClickingInput {
  readonly groupNameForPoints: CollectionObjectName;
  readonly firstPointName?: string;
}
export interface ConstructPointsFromSurfacesOnUvGridInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly uvPointGroupBaseName?: string;
  readonly makeEachLineSeparateGroup?: boolean;
  readonly numberOfUGrids?: number;
  readonly numberOfVGrids?: number;
  readonly edgePointMode?: EdgePointMode;
}
export interface ConstructPointAtObjectOriginInput {
  readonly objectName: CollectionObjectName;
  readonly resultantPointName: PointName;
}
export interface ConstructPointsShiftedInWorkingFrameInput {
  readonly originalPoints: Iterable<PointName>;
  readonly groupForNewPoints: CollectionObjectName;
  readonly shiftVector?: Vector;
}
export interface ConstructPointsCylindricallyShiftedInput {
  readonly referenceObjectName: CollectionObjectName;
  readonly originalPoints: Iterable<PointName>;
  readonly groupForNewPoints: CollectionObjectName;
  readonly radialShift?: number;
  readonly thetaShiftDegrees?: number;
  readonly planarShift?: number;
}
export interface ConstructPointsWildcardSelectionInput {
  readonly groupsToSelectFrom: Iterable<CollectionObjectName>;
  readonly wildcardSelectionNames: PointName;
  readonly groupForNewPoints: CollectionObjectName;
  readonly includePriorCompleteName?: boolean;
}
export interface ConstructPointsSubsetWithGreatestSpacingInput {
  readonly pointsToSubsample: Iterable<PointName>;
  readonly subsetSize?: number;
  readonly groupForSubset?: CollectionObjectName;
}
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
export interface ConstructPointsAutoCorrespondTwoGroupsProximityInput {
  readonly referenceGroup: CollectionObjectName;
  readonly groupToBeCopied: CollectionObjectName;
  readonly groupToContainMatchedPoints: CollectionObjectName;
  readonly samePointTolerance?: number;
}
export interface ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceInput {
  readonly referenceGroup: CollectionObjectName;
  readonly groupToBeCopied: CollectionObjectName;
  readonly groupToContainMatchedPoints: CollectionObjectName;
  readonly samePointTolerance?: number;
}
export interface AverageSetOfGroupsInput {
  readonly groupNames: Iterable<CollectionObjectName>;
  readonly resultingGroupName: CollectionObjectName;
  readonly rmsTolerance?: number;
  readonly maximumAbsoluteTolerance?: number;
  readonly maximumAverageTolerance?: number;
}
export interface CopyGroupsExcludingObscuredPointsInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly groupNames: Iterable<CollectionObjectName>;
  readonly newCollectionName: CollectionName;
}
```

Clicking starts at `p0`. UV grids default to `UV Points`, one combined group,
5 by 5, and `Include Edges`. An omitted shift is zero and an omitted subset
group is `Spaced Points`. PointGrid defaults are prefix `p`, X 0–100/10, Y
0–50/10, and Z 0–0/1. Auto-correspond tolerances are 0.25 and 0.1; average
tolerances are zero (none).

## Point-Name and Hidden-Point Inputs

```ts
export interface MakePointNameRuntimeSelectInput {
  readonly userPrompt?: string;
}
export interface MakePointNameEnsureUniqueInput {
  readonly pointName: PointName;
  readonly useNumberSuffix?: boolean;
}
export interface MakePointNameRefListFromGroupInput {
  readonly groupName: CollectionObjectName;
}
export interface MakePointNameRefListRuntimeSelectInput {
  readonly userPrompt?: string;
}
export interface MakePointNameRefListWildcardSelectInput {
  readonly collectionWildcardCriteria?: string;
  readonly groupNameWildcardCriteria?: string;
  readonly pointNameWildcardCriteria?: string;
}
export interface CreateHiddenPointRodInput {
  readonly hiddenPointRodName: string;
  readonly targetToTargetDistance?: number;
  readonly targetToTipDistance?: number;
  readonly interPointTolerance?: number;
}
export interface GetHiddenPointRodIndexByNameInput {
  readonly hiddenPointRodName: string;
}
export interface DeleteHiddenPointRodInput {
  readonly hiddenPointRodIndex?: number;
}
export interface CreateHiddenPointInput {
  readonly endAPointName: PointName;
  readonly endBPointName: PointName;
  readonly pointNameToCreate: PointName;
  readonly hiddenPointRodIndex?: number;
  readonly overwriteExistingPoint?: boolean;
}
```

Prompts default to empty, unique-number suffixing to false, and all wildcard
criteria to `*`. Rod distances/tolerance default to 0, rod index to 0, and
overwrite to false.

## Functions

Every input-taking function has the shape
`function name(briosa, input, options?): Promise<TResult>`. The two no-input
functions take `(briosa, options?)`.

```ts
function constructPointFitToPoints(briosa: BriosaClient, input: ConstructPointFitToPointsInput, options?: BriosaCallOptions): Promise<void>;
function constructPointInWorkingCoordinates(briosa: BriosaClient, input: ConstructPointInWorkingCoordinatesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointFromSurveyTargetCenter(briosa: BriosaClient, input: ConstructPointFromSurveyTargetCenterInput, options?: BriosaCallOptions): Promise<void>;
function setPointPositionInWorkingCoordinates(briosa: BriosaClient, input: SetPointPositionInWorkingCoordinatesInput, options?: BriosaCallOptions): Promise<void>;
function transformPointsByDeltaAboutWorkingFrame(briosa: BriosaClient, input: TransformPointsByDeltaAboutWorkingFrameInput, options?: BriosaCallOptions): Promise<void>;
function constructPointAtLineMidpoint(briosa: BriosaClient, input: ConstructPointAtLineMidpointInput, options?: BriosaCallOptions): Promise<void>;
function constructPointGroupFromPointNameRefList(briosa: BriosaClient, input: ConstructPointGroupFromPointNameRefListInput, options?: BriosaCallOptions): Promise<void>;
function constructPointGroupsFromVectorGroups(briosa: BriosaClient, input: ConstructPointGroupsFromVectorGroupsInput, options?: BriosaCallOptions): Promise<readonly CollectionObjectName[]>;
function constructPointGroupFromPointCloud(briosa: BriosaClient, input: ConstructPointGroupFromPointCloudInput, options?: BriosaCallOptions): Promise<void>;
function constructPointFromCloudPointRuntimeSelect(briosa: BriosaClient, input?: ConstructPointFromCloudPointRuntimeSelectInput, options?: BriosaCallOptions): Promise<Vector>;

function constructPointAtCircleCenter(briosa: BriosaClient, input: ConstructPointAtCircleCenterInput, options?: BriosaCallOptions): Promise<void>;
function constructPointAtIntersectionOfPlanes(briosa: BriosaClient, input: ConstructPointAtIntersectionOfPlanesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointAtIntersectionOfTwoLines(briosa: BriosaClient, input: ConstructPointAtIntersectionOfTwoLinesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointAtIntersectionOfPlaneAndLine(briosa: BriosaClient, input: ConstructPointAtIntersectionOfPlaneAndLineInput, options?: BriosaCallOptions): Promise<void>;
function constructPointAtIntersectionOfTwoBSplines(briosa: BriosaClient, input: ConstructPointAtIntersectionOfTwoBSplinesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointAtIntersectionOfBSplineAndSurfaces(briosa: BriosaClient, input: ConstructPointAtIntersectionOfBSplineAndSurfacesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsAtIntersectionOfCircleAndLine(briosa: BriosaClient, input: ConstructPointsAtIntersectionOfCircleAndLineInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsAtIntersectionOfPrincipalObjectAxesAndSurfaces(briosa: BriosaClient, input: ConstructPointsAtIntersectionOfPrincipalObjectAxesAndSurfacesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsFromCylinder(briosa: BriosaClient, input: ConstructPointsFromCylinderInput, options?: BriosaCallOptions): Promise<void>;
function constructPointAtProjectionOfPointOntoObject(briosa: BriosaClient, input: ConstructPointAtProjectionOfPointOntoObjectInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsAtProjectionOnSurfacesParallelToWcfAxis(briosa: BriosaClient, input: ConstructPointsAtProjectionOnSurfacesParallelToWcfAxisInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsAtProjectionOnSurfacesRadialFromWcfAxis(briosa: BriosaClient, input: ConstructPointsAtProjectionOnSurfacesRadialFromWcfAxisInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsAtProjectionOnSurfacesSphericalFromWcfOrigin(briosa: BriosaClient, input: ConstructPointsAtProjectionOnSurfacesSphericalFromWcfOriginInput, options?: BriosaCallOptions): Promise<void>;

function getGradientAtProjectedPointOnSurface(briosa: BriosaClient, input: GetGradientAtProjectedPointOnSurfaceInput, options?: BriosaCallOptions): Promise<ProjectedPointGradient>;
function getGradientAtProjectedPointOnSurfaceEdge(briosa: BriosaClient, input: GetGradientAtProjectedPointOnSurfaceEdgeInput, options?: BriosaCallOptions): Promise<ProjectedPointGradient>;
function constructPointsByProjectingPointsOnMeshAlongDirection(briosa: BriosaClient, input: ConstructPointsByProjectingPointsOnMeshAlongDirectionInput, options?: BriosaCallOptions): Promise<readonly PointName[]>;
function constructPointsSpacedAtDistanceOnCurves(briosa: BriosaClient, input: ConstructPointsSpacedAtDistanceOnCurvesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsNSpacedOnCurves(briosa: BriosaClient, input: ConstructPointsNSpacedOnCurvesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsOnCurvesUsingMaxChordalDeviation(briosa: BriosaClient, input: ConstructPointsOnCurvesUsingMaxChordalDeviationInput, options?: BriosaCallOptions): Promise<void>;

function constructPointsOnObjectVertices(briosa: BriosaClient, input: ConstructPointsOnObjectVerticesInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsOnSurfacesByClicking(briosa: BriosaClient, input: ConstructPointsOnSurfacesByClickingInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsFromSurfaceFacesRuntimeSelect(briosa: BriosaClient, options?: BriosaCallOptions): Promise<void>;
function constructPointsFromSurfacesOnUvGrid(briosa: BriosaClient, input: ConstructPointsFromSurfacesOnUvGridInput, options?: BriosaCallOptions): Promise<void>;
function constructPointAtObjectOrigin(briosa: BriosaClient, input: ConstructPointAtObjectOriginInput, options?: BriosaCallOptions): Promise<ObjectOriginResult>;
function constructPointsShiftedInWorkingFrame(briosa: BriosaClient, input: ConstructPointsShiftedInWorkingFrameInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsCylindricallyShifted(briosa: BriosaClient, input: ConstructPointsCylindricallyShiftedInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsWildcardSelection(briosa: BriosaClient, input: ConstructPointsWildcardSelectionInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsSubsetWithGreatestSpacing(briosa: BriosaClient, input: ConstructPointsSubsetWithGreatestSpacingInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsLayoutOnGrid(briosa: BriosaClient, input: ConstructPointsLayoutOnGridInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsAutoCorrespondTwoGroupsProximity(briosa: BriosaClient, input: ConstructPointsAutoCorrespondTwoGroupsProximityInput, options?: BriosaCallOptions): Promise<void>;
function constructPointsAutoCorrespondTwoGroupsInterPointDistance(briosa: BriosaClient, input: ConstructPointsAutoCorrespondTwoGroupsInterPointDistanceInput, options?: BriosaCallOptions): Promise<void>;
function averageSetOfGroups(briosa: BriosaClient, input: AverageSetOfGroupsInput, options?: BriosaCallOptions): Promise<GroupAverageResult>;
function copyGroupsExcludingObscuredPoints(briosa: BriosaClient, input: CopyGroupsExcludingObscuredPointsInput, options?: BriosaCallOptions): Promise<void>;

function makePointNameRuntimeSelect(briosa: BriosaClient, input?: MakePointNameRuntimeSelectInput, options?: BriosaCallOptions): Promise<PointName>;
function makePointNameEnsureUnique(briosa: BriosaClient, input: MakePointNameEnsureUniqueInput, options?: BriosaCallOptions): Promise<PointName>;
function makePointNameRefListFromGroup(briosa: BriosaClient, input: MakePointNameRefListFromGroupInput, options?: BriosaCallOptions): Promise<readonly PointName[]>;
function makePointNameRefListRuntimeSelect(briosa: BriosaClient, input?: MakePointNameRefListRuntimeSelectInput, options?: BriosaCallOptions): Promise<readonly PointName[]>;
function makePointNameRefListWildcardSelect(briosa: BriosaClient, input?: MakePointNameRefListWildcardSelectInput, options?: BriosaCallOptions): Promise<readonly PointName[]>;

function clearHiddenPointBarDatabase(briosa: BriosaClient, options?: BriosaCallOptions): Promise<void>;
function createHiddenPointRod(briosa: BriosaClient, input: CreateHiddenPointRodInput, options?: BriosaCallOptions): Promise<number>;
function getHiddenPointRodIndexByName(briosa: BriosaClient, input: GetHiddenPointRodIndexByNameInput, options?: BriosaCallOptions): Promise<number>;
function deleteHiddenPointRod(briosa: BriosaClient, input?: DeleteHiddenPointRodInput, options?: BriosaCallOptions): Promise<void>;
function createHiddenPoint(briosa: BriosaClient, input: CreateHiddenPointInput, options?: BriosaCallOptions): Promise<void>;
```

## Example

```ts
const result = await averageSetOfGroups(briosa, {
  groupNames: groups,
  resultingGroupName: averagedGroup,
  rmsTolerance: 0.05,
});

console.log(result.rmsDeviation);
```

Clearing the Hidden Point Bar database removes every current-job rod without
confirmation. Rod indices are unstable live SA state. Average and hidden-point
tolerance failures may preserve outputs as partial success. Interactive calls
may outlive an abort or deadline; callers own state across calls.

[Catalog](/mp-command-catalog/commands/construction-operations-points-and-groups) · [gRPC](/api/grpc/construction-operations-points-and-groups)
