---
title: Construction Operations / BSpines
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / BSpines

[SA 2026.1.0529.7](/api/dotnet/construction-operations-bsplines) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-bsplines)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct B-Spline From Points {/* #construct-b-spline-from-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-points) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-points)

```csharp
public Task ConstructBSplineFromPointsAsync(
        CollectionObjectName resultingBSplineName,
        IEnumerable<PointName> pointList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Point Set {/* #construct-b-spline-from-point-set */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-point-set) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-point-set)

```csharp
public Task ConstructBSplineFromPointSetAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName pointSetContainer,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Several B-Splines {/* #construct-b-spline-from-several-b-splines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-several-b-splines) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-several-b-splines)

```csharp
public Task ConstructBSplineFromSeveralBSplinesAsync(
        CollectionObjectName resultingBSplineName,
        IEnumerable<CollectionObjectName> bSplineList,
        bool closeResultingBSpline = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Intersection of Plane and Surface {/* #construct-b-spline-from-intersection-of-plane-and-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface)

```csharp
public Task ConstructBSplineFromIntersectionOfPlaneAndSurfaceAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName planeName,
        CollectionObjectName surfaceName,
        double approximationTolerance = 0.0001,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Spline From Intersection of Surfaces {/* #construct-b-spline-from-intersection-of-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces)

```csharp
public Task ConstructBSplineFromIntersectionOfSurfacesAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName firstSurfaceName,
        CollectionObjectName secondSurfaceName,
        double approximationTolerance = 0.0001,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Surfaces {/* #construct-b-splines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-surfaces) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-surfaces)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructBSplinesFromSurfacesAsync(
        IEnumerable<CollectionObjectName> surfaceList,
        string? resultingBSplineNamePrefix = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Lines {/* #construct-b-splines-from-lines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-lines) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-lines)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructBSplinesFromLinesAsync(
        IEnumerable<CollectionObjectName> lineList,
        string? resultingBSplineNamePrefix = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct B-Splines From Intersection of Plane and Mesh {/* #construct-b-splines-from-intersection-of-plane-and-mesh */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) · [gRPC Contract](/api/grpc/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructBSplinesFromIntersectionOfPlaneAndMeshAsync(
        CollectionObjectName resultingBSplineName,
        CollectionObjectName planeName,
        CollectionObjectName meshName,
        int closedLineSegmentLimit = 3,
        int unclosedLineSegmentLimit = 3,
        bool createIntersectionPoints = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## B-Spline Fit Options Value {/* #b-spline-fit-options-value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
