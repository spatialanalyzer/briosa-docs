---
title: Construction Operations / BSpines
description: Briosa 0.1.0 JavaScript and TypeScript APIs for selected Construction Operations / BSpines MP commands.
toc_max_heading_level: 2
---

# Construction Operations / BSpines

## B-Spline Fit Options Value

`BSplineFitOptions` replaces the MP-only `Construct B-Spline Fit Options`
constructor command. An omitted object or property applies the documented
default.

```ts
export type BSplinePointSortMode =
  | 'use_selection_order'
  | 'closest_neighbors_from_first_selection'
  | 'closest_neighbors_in_curve_direction';

export interface BSplineFitOptions {
  readonly openCurve?: boolean;
  readonly useInterpolationForFit?: boolean;
  readonly numberOfControlPoints?: number;
  readonly degreeOfCurve?: number;
  readonly sortMethod?: BSplinePointSortMode;
  readonly spanAnyGap?: boolean;
  readonly terminationGapLength?: number;
  readonly ignoreProximatePoints?: boolean;
  readonly proximatePointThreshold?: number;
  readonly useGlobalTessellationOptions?: boolean;
  readonly maximumChordalDeviation?: number;
  readonly maximumTrimEdgeAngle?: number;
  readonly terminationAverageMultiplier?: number;
  readonly extension?: number;
}
```

| Property | Briosa Default |
| --- | --- |
| `openCurve` | true |
| `useInterpolationForFit` | true |
| `numberOfControlPoints` | 8 |
| `degreeOfCurve` | 3 |
| `sortMethod` | `'use_selection_order'` |
| `spanAnyGap` | true |
| `terminationGapLength` | 0 |
| `ignoreProximatePoints` | false |
| `proximatePointThreshold` | 0 |
| `useGlobalTessellationOptions` | true |
| `maximumChordalDeviation` | 0.05 |
| `maximumTrimEdgeAngle` | 15 |
| `terminationAverageMultiplier` | 10 |
| `extension` | 0 |

`useInterpolationForFit` keeps the MP-facing meaning. Briosa performs the
SA-version-specific translation to the exact SDK representation internally.

## Construct B-Spline From Points

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Points](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-points) · [gRPC contract](/api/grpc/0.5.1/construction-operations-bsplines#construct-b-spline-from-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `pointList` | `Iterable<PointName>` | `Point List` | Required |
| `bSplineFitOptions` | `BSplineFitOptions` | `B-Spline Fit Options` | Type defaults |

```ts
export interface ConstructBSplineFromPointsInput {
  readonly resultingBSplineName: CollectionObjectName;
  readonly pointList: Iterable<PointName>;
  readonly bSplineFitOptions?: BSplineFitOptions;
}

function constructBSplineFromPoints(
  briosa: BriosaClient,
  input: ConstructBSplineFromPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await constructBSplineFromPoints(briosa, {
  resultingBSplineName,
  pointList,
});
```

The input order is preserved. Omitting `bSplineFitOptions` applies the
documented defaults.

## Construct B-Spline From Point Set

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Point Set](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-point-set) · [gRPC contract](/api/grpc/0.5.1/construction-operations-bsplines#construct-b-spline-from-point-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `pointSetContainer` | `CollectionObjectName` | `Point Set Container` | Required |
| `bSplineFitOptions` | `BSplineFitOptions` | `B-Spline Fit Options` | Type defaults |

```ts
export interface ConstructBSplineFromPointSetInput {
  readonly resultingBSplineName: CollectionObjectName;
  readonly pointSetContainer: CollectionObjectName;
  readonly bSplineFitOptions?: BSplineFitOptions;
}

function constructBSplineFromPointSet(
  briosa: BriosaClient,
  input: ConstructBSplineFromPointSetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await constructBSplineFromPointSet(briosa, {
  resultingBSplineName,
  pointSetContainer,
});
```

## Construct B-Spline From Several B-Splines

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Several B-Splines](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-several-b-splines) · [gRPC contract](/api/grpc/0.5.1/construction-operations-bsplines#construct-b-spline-from-several-b-splines)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `bSplineList` | `Iterable<CollectionObjectName>` | `B-Spline List` | Required |
| `closeResultingBSpline` | `boolean` | `Close Resulting B-Spline` | false |

```ts
export interface ConstructBSplineFromSeveralBSplinesInput {
  readonly resultingBSplineName: CollectionObjectName;
  readonly bSplineList: Iterable<CollectionObjectName>;
  readonly closeResultingBSpline?: boolean;
}

function constructBSplineFromSeveralBSplines(
  briosa: BriosaClient,
  input: ConstructBSplineFromSeveralBSplinesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await constructBSplineFromSeveralBSplines(briosa, {
  resultingBSplineName,
  bSplineList,
});
```

## Construct B-Spline From Intersection of Plane and Surface

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Intersection of Plane and Surface](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) · [gRPC contract](/api/grpc/0.5.1/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `planeName` | `CollectionObjectName` | `Plane Name` | Required |
| `surfaceName` | `CollectionObjectName` | `Surface Name` | Required |
| `approximationTolerance` | `number` | `Approximation Tolerance` | 0.0001 |

```ts
export interface ConstructBSplineFromIntersectionOfPlaneAndSurfaceInput {
  readonly resultingBSplineName: CollectionObjectName;
  readonly planeName: CollectionObjectName;
  readonly surfaceName: CollectionObjectName;
  readonly approximationTolerance?: number;
}

function constructBSplineFromIntersectionOfPlaneAndSurface(
  briosa: BriosaClient,
  input: ConstructBSplineFromIntersectionOfPlaneAndSurfaceInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await constructBSplineFromIntersectionOfPlaneAndSurface(briosa, {
  resultingBSplineName,
  planeName,
  surfaceName,
});
```

## Construct B-Spline From Intersection of Surfaces

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Spline From Intersection of Surfaces](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) · [gRPC contract](/api/grpc/0.5.1/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `firstSurfaceName` | `CollectionObjectName` | `First Surface Name` | Required |
| `secondSurfaceName` | `CollectionObjectName` | `Second Surface Name` | Required |
| `approximationTolerance` | `number` | `Approximation Tolerance` | 0.0001 |

```ts
export interface ConstructBSplineFromIntersectionOfSurfacesInput {
  readonly resultingBSplineName: CollectionObjectName;
  readonly firstSurfaceName: CollectionObjectName;
  readonly secondSurfaceName: CollectionObjectName;
  readonly approximationTolerance?: number;
}

function constructBSplineFromIntersectionOfSurfaces(
  briosa: BriosaClient,
  input: ConstructBSplineFromIntersectionOfSurfacesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await constructBSplineFromIntersectionOfSurfaces(briosa, {
  resultingBSplineName,
  firstSurfaceName,
  secondSurfaceName,
});
```

SpatialAnalyzer may derive additional result names when the intersection
creates more than one curve.

## Construct B-Splines From Surfaces

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Splines From Surfaces](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-surfaces) · [gRPC contract](/api/grpc/0.5.1/construction-operations-bsplines#construct-b-splines-from-surfaces)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `surfaceList` | `Iterable<CollectionObjectName>` | `Surface List` | Required |
| `resultingBSplineNamePrefix` | `string` | `Resulting B-Spline Name prefix (Optional)` | Omitted |
| Return | `readonly CollectionObjectName[]` | `B-Spline List` | Returned |

```ts
export interface ConstructBSplinesFromSurfacesInput {
  readonly surfaceList: Iterable<CollectionObjectName>;
  readonly resultingBSplineNamePrefix?: string;
}

function constructBSplinesFromSurfaces(
  briosa: BriosaClient,
  input: ConstructBSplinesFromSurfacesInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

```ts
const bSplines = await constructBSplinesFromSurfaces(briosa, {surfaceList});
```

## Construct B-Splines From Lines

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Splines From Lines](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-lines) · [gRPC contract](/api/grpc/0.5.1/construction-operations-bsplines#construct-b-splines-from-lines)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `lineList` | `Iterable<CollectionObjectName>` | `Line List` | Required |
| `resultingBSplineNamePrefix` | `string` | `Resulting B-Spline Name prefix (Optional)` | Omitted |
| Return | `readonly CollectionObjectName[]` | `B-Spline List` | Returned |

```ts
export interface ConstructBSplinesFromLinesInput {
  readonly lineList: Iterable<CollectionObjectName>;
  readonly resultingBSplineNamePrefix?: string;
}

function constructBSplinesFromLines(
  briosa: BriosaClient,
  input: ConstructBSplinesFromLinesInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

```ts
const bSplines = await constructBSplinesFromLines(briosa, {lineList});
```

## Construct B-Splines From Intersection of Plane and Mesh

:::note[Validation]

Validation: At Risk — fixture validation required.

:::

[Construct B-Splines From Intersection of Plane and Mesh](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) · [gRPC contract](/api/grpc/0.5.1/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `resultingBSplineName` | `CollectionObjectName` | `Resulting B-Spline Name` | Required |
| `planeName` | `CollectionObjectName` | `Plane Name` | Required |
| `meshName` | `CollectionObjectName` | `Mesh Name` | Required |
| `closedLineSegmentLimit` | `number` | `Delete closed lines whose number of segment is less than this value` | 3 |
| `unclosedLineSegmentLimit` | `number` | `Delete unclosed lines whose number of segment is less than this value` | 3 |
| `createIntersectionPoints` | `boolean` | `Create Intersection Points?` | true |
| Return | `readonly CollectionObjectName[]` | `B-Spline List` | Returned |

```ts
export interface ConstructBSplinesFromIntersectionOfPlaneAndMeshInput {
  readonly resultingBSplineName: CollectionObjectName;
  readonly planeName: CollectionObjectName;
  readonly meshName: CollectionObjectName;
  readonly closedLineSegmentLimit?: number;
  readonly unclosedLineSegmentLimit?: number;
  readonly createIntersectionPoints?: boolean;
}

function constructBSplinesFromIntersectionOfPlaneAndMesh(
  briosa: BriosaClient,
  input: ConstructBSplinesFromIntersectionOfPlaneAndMeshInput,
  options?: BriosaCallOptions,
): Promise<readonly CollectionObjectName[]>;
```

```ts
const bSplines = await constructBSplinesFromIntersectionOfPlaneAndMesh(
  briosa,
  {resultingBSplineName, planeName, meshName},
);
```

Negative segment limits are rejected before the request is sent.
