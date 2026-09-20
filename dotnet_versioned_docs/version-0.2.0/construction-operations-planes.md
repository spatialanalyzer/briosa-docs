---
title: Construction Operations / Planes
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Planes

[SA 2026.1.0529.7](/api/dotnet/construction-operations-planes) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-planes)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Plane {/* #construct-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-plane) · [gRPC Contract](/api/grpc/construction-operations-planes#construct-plane)

```csharp
public Task ConstructPlaneAsync(
        CollectionObjectName planeName,
        Vector planeCenter,
        Vector planeNormal,
        double planeEdgeDimension = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Plane, Normal to Object, Through Point {/* #construct-plane-normal-to-object-through-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-plane-normal-to-object-through-point) · [gRPC Contract](/api/grpc/construction-operations-planes#construct-plane-normal-to-object-through-point)

```csharp
public Task ConstructPlaneNormalToObjectThroughPointAsync(
        CollectionObjectName resultantPlaneName,
        CollectionObjectName normalToObjectName,
        PointName throughPointName,
        double planeEdgeDimension = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Planes, Bounding Point Group {/* #construct-planes-bounding-point-group */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-bounding-point-group) · [gRPC Contract](/api/grpc/construction-operations-planes#construct-planes-bounding-point-group)

```csharp
public Task ConstructPlanesBoundingPointGroupAsync(
        CollectionObjectName referencePlaneName,
        CollectionObjectName groupToBound,
        CollectionObjectName? resultingHighPlaneName = null,
        CollectionObjectName? resultingLowPlaneName = null,
        bool overrideTargetPointOffsets = false,
        double offsetValue = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Planes, Bisect 2 Planes {/* #construct-planes-bisect-2-planes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-bisect-2-planes) · [gRPC Contract](/api/grpc/construction-operations-planes#construct-planes-bisect-2-planes)

```csharp
public Task ConstructPlanesBisectTwoPlanesAsync(
        CollectionObjectName resultantPlaneName,
        CollectionObjectName firstPlane,
        CollectionObjectName secondPlane,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shift Plane {/* #shift-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#shift-plane) · [gRPC Contract](/api/grpc/construction-operations-planes#shift-plane)

```csharp
public Task ShiftPlaneAsync(
        CollectionObjectName plane,
        double shiftAlongNormal = 0.0,
        double growBoundsByFactor = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Planes From Surface Faces - Runtime Select {/* #construct-planes-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-planes#construct-planes-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-planes#construct-planes-from-surface-faces---runtime-select)

```csharp
public Task ConstructPlanesFromSurfaceFacesRuntimeSelectAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
