---
title: Construction Operations / BSplines
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / BSplines

[SA 2026.1.0529.7](/api/dotnet/construction-operations-bsplines) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-bsplines)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Construct B-Spline From Points {/* #construct-b-spline-from-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines#construct-b-spline-from-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructBSplineFromPointsAsync(
        CollectionObjectName resultingBSplineName,
        IEnumerable<PointName> pointList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);

public Task ConstructBSplineFromPointsAsync(
        CollectionObjectName resultingBSplineName,
        BSplineFitOptions bSplineFitOptions,
        IEnumerable<PointName> pointList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Point Set {/* #construct-b-spline-from-point-set */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines#construct-b-spline-from-point-set)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructBSplineFromPointSetAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName pointSetContainer,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);

public Task ConstructBSplineFromPointSetAsync(
        CollectionObjectName resultingBSplineName,
        BSplineFitOptions bSplineFitOptions,
        CollectionObjectName pointSetContainer,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Several B-Splines {/* #construct-b-spline-from-several-b-splines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-several-b-splines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines#construct-b-spline-from-several-b-splines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructBSplineFromSeveralBSplinesAsync(
        CollectionObjectName resultingBSplineName,
        IEnumerable<CollectionObjectName> bSplineList,
        bool closeResultingBSpline = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Intersection of Plane and Surface {/* #construct-b-spline-from-intersection-of-plane-and-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructBSplineFromIntersectionOfPlaneAndSurfaceAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName planeName,
        CollectionObjectName surfaceName,
        double approximationTolerance = 0.0001,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Intersection of Surfaces {/* #construct-b-spline-from-intersection-of-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructBSplineFromIntersectionOfSurfacesAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName firstSurfaceName,
        CollectionObjectName secondSurfaceName,
        double approximationTolerance = 0.0001,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Surfaces {/* #construct-b-splines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines#construct-b-splines-from-surfaces)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructBSplinesFromSurfacesAsync(
        IEnumerable<CollectionObjectName> surfaceList,
        string? resultingBSplineNamePrefix = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Lines {/* #construct-b-splines-from-lines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-lines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines#construct-b-splines-from-lines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructBSplinesFromLinesAsync(
        IEnumerable<CollectionObjectName> lineList,
        string? resultingBSplineNamePrefix = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Intersection of Plane and Mesh {/* #construct-b-splines-from-intersection-of-plane-and-mesh */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructBSplinesFromIntersectionOfPlaneAndMeshAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName planeName,
        CollectionObjectName meshName,
        int closedLineSegmentLimit = 3,
        int unclosedLineSegmentLimit = 3,
        bool createIntersectionPoints = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## B-Spline Fit Options Value {/* #b-spline-fit-options-value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
