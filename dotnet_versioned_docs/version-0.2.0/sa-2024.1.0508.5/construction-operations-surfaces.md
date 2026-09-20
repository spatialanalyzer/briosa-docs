---
title: Construction Operations / Surfaces
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Surfaces

[SA 2026.1.0529.7](/api/dotnet/construction-operations-surfaces) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-surfaces)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Surfaces From Objects {/* #construct-surfaces-from-objects */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-from-objects) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-from-objects)

```csharp
public Task ConstructSurfacesFromObjectsAsync(
        IEnumerable<CollectionObjectName> objects,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From BSplines {/* #construct-surface-from-bsplines */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-bsplines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-bsplines)

```csharp
public Task ConstructSurfaceFromBSplinesAsync(
        CollectionObjectName resultingSurfaceName,
        IEnumerable<CollectionObjectName> bSplineList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Cylinder {/* #construct-surface-from-cylinder */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-cylinder) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-cylinder)

```csharp
public Task ConstructSurfaceFromCylinderAsync(
        CollectionObjectName resultingSurfaceName,
        CollectionObjectName cylinderName,
        bool internalCylinder = true,
        bool useThetaExtentMode = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Plane {/* #construct-surface-from-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-plane)

```csharp
public Task ConstructSurfaceFromPlaneAsync(
        CollectionObjectName resultingSurfaceName,
        CollectionObjectName planeName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Sphere {/* #construct-surface-from-sphere */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-sphere) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-sphere)

```csharp
public Task ConstructSurfaceFromSphereAsync(
        CollectionObjectName resultingSurfaceName,
        CollectionObjectName sphereName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Cone {/* #construct-surface-from-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-cone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-cone)

```csharp
public Task ConstructSurfaceFromConeAsync(
        CollectionObjectName resultingSurfaceName,
        CollectionObjectName coneName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From a Collection of Surfaces {/* #construct-surface-from-a-collection-of-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-a-collection-of-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-a-collection-of-surfaces)

```csharp
public Task ConstructSurfaceFromCollectionOfSurfacesAsync(
        IEnumerable<CollectionObjectName> surfacesToCombine,
        CollectionObjectName resultingSurfaceName,
        bool hideOriginalSurfaces = true,
        bool deleteOriginalSurfaces = false,
        bool enableSewingTolerance = false,
        double sewingTolerance = -1.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface Fit From Nominal Surfaces and Actual Data {/* #construct-surface-fit-from-nominal-surfaces-and-actual-data */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-fit-from-nominal-surfaces-and-actual-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-fit-from-nominal-surfaces-and-actual-data)

```csharp
public Task ConstructSurfaceFitFromNominalSurfacesAndActualDataAsync(
        CollectionObjectName nominalSurface,
        IEnumerable<PointName> actualDataPointList,
        CollectionObjectName resultingSurfaceName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface by Dissecting Surface(s) {/* #construct-surface-by-dissecting-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-by-dissecting-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-by-dissecting-surfaces)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructSurfaceByDissectingSurfacesAsync(
        SurfaceDissectionMode dissectionMode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surfaces by Dissecting Surfaces from Ref List {/* #construct-surfaces-by-dissecting-surfaces-from-ref-list */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-by-dissecting-surfaces-from-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-by-dissecting-surfaces-from-ref-list)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructSurfacesByDissectingSurfacesFromRefListAsync(
        IEnumerable<CollectionObjectName> surfacesToDissect,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Point Groups {/* #construct-surface-from-point-groups */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-point-groups) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-point-groups)

```csharp
public Task ConstructSurfaceFromPointGroupsAsync(
        IEnumerable<CollectionObjectName> groupNameList,
        CollectionObjectName resultingSurfaceName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surfaces By Projecting Points {/* #construct-surfaces-by-projecting-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surfaces-by-projecting-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surfaces-by-projecting-points)

```csharp
public Task ConstructSurfacesByProjectingPointsAsync(
        IEnumerable<CollectionObjectName> projectionTargetNameList,
        IEnumerable<PointName> pointList,
        CollectionObjectName resultingSurfaceName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct surface by offsetting a surface {/* #construct-surface-by-offsetting-a-surface */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-by-offsetting-a-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-by-offsetting-a-surface)

```csharp
public Task ConstructSurfaceByOffsettingSurfaceAsync(
        IEnumerable<CollectionObjectName> referenceSurface,
        double surfaceOffset = 0.0,
        bool hideOriginalSurface = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Surface From Annotation Links {/* #construct-surface-from-annotation-links */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-surface-from-annotation-links) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-surface-from-annotation-links)

```csharp
public Task ConstructSurfaceFromAnnotationLinksAsync(
        IEnumerable<CollectionObjectName> annotationList,
        CollectionObjectName resultingSurfaceName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Geometry From Surfaces {/* #construct-geometry-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-surfaces#construct-geometry-from-surfaces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-surfaces#construct-geometry-from-surfaces)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> ConstructGeometryFromSurfacesAsync(
        IEnumerable<CollectionObjectName> surfaces,
        double minimumDiameter = 0.0,
        double maximumDiameter = 0.0,
        CollectionObjectName? referenceFrame = null,
        CollectionName? destinationCollectionName = null,
        string baseName = "Geometry Object",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## ConstructSurfacesFromObjectsAsync {/* #constructsurfacesfromobjectsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromBSplinesAsync {/* #constructsurfacefrombsplinesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromCylinderAsync {/* #constructsurfacefromcylinderasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromPlaneAsync {/* #constructsurfacefromplaneasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromSphereAsync {/* #constructsurfacefromsphereasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromConeAsync {/* #constructsurfacefromconeasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromCollectionOfSurfacesAsync {/* #constructsurfacefromcollectionofsurfacesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFitFromNominalSurfacesAndActualDataAsync {/* #constructsurfacefitfromnominalsurfacesandactualdataasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceByDissectingSurfacesAsync {/* #constructsurfacebydissectingsurfacesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfacesByDissectingSurfacesFromRefListAsync {/* #constructsurfacesbydissectingsurfacesfromreflistasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromPointGroupsAsync {/* #constructsurfacefrompointgroupsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfacesByProjectingPointsAsync {/* #constructsurfacesbyprojectingpointsasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceByOffsettingSurfaceAsync {/* #constructsurfacebyoffsettingsurfaceasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructSurfaceFromAnnotationLinksAsync {/* #constructsurfacefromannotationlinksasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## ConstructGeometryFromSurfacesAsync {/* #constructgeometryfromsurfacesasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2024.1.0508.5)
