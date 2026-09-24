---
title: Construction Operations / Lines
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Lines

[SA 2026.1.0529.7](/api/dotnet/construction-operations-lines) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-lines)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Line 2 Points {/* #construct-line-2-points */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-points) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-2-points)

```csharp
public Task ConstructLineTwoPointsAsync(
        CollectionObjectName lineName,
        PointName firstPoint,
        PointName secondPoint,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line 2 Points (Vector Notation) {/* #construct-line-2-points-vector-notation */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-points-vector-notation) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-2-points-vector-notation)

```csharp
public Task ConstructLineTwoPointsVectorNotationAsync(
        CollectionObjectName lineName,
        Vector firstVector,
        Vector secondVector,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line Normal to Object {/* #construct-line-normal-to-object */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-normal-to-object) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-normal-to-object)

```csharp
public Task ConstructLineNormalToObjectAsync(
        CollectionObjectName lineName,
        CollectionObjectName @object,
        double lineLength = 1,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line - Project Line to Object Reference Plane {/* #construct-line---project-line-to-object-reference-plane */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line---project-line-to-object-reference-plane) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line---project-line-to-object-reference-plane)

```csharp
public Task ConstructLineProjectLineToObjectReferencePlaneAsync(
        CollectionObjectName lineToCreate,
        CollectionObjectName lineToProject,
        CollectionObjectName objectToProjectTo,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line - Normal to Object through Point {/* #construct-line---normal-to-object-through-point */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line---normal-to-object-through-point) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line---normal-to-object-through-point)

```csharp
public Task ConstructLineNormalToObjectThroughPointAsync(
        CollectionObjectName lineToCreate,
        CollectionObjectName objectName,
        PointName pointName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line 2 Plane Intersection {/* #construct-line-2-plane-intersection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-2-plane-intersection) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-2-plane-intersection)

```csharp
public Task ConstructLineTwoPlaneIntersectionAsync(
        CollectionObjectName lineName,
        CollectionObjectName firstPlane,
        CollectionObjectName secondPlane,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Lines From Surface Faces - Runtime Select {/* #construct-lines-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-lines-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-lines-from-surface-faces---runtime-select)

```csharp
public Task ConstructLinesFromSurfaceFacesRuntimeSelectAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line Center of Slot {/* #construct-line-center-of-slot */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-center-of-slot) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-center-of-slot)

```csharp
public Task ConstructLineCenterOfSlotAsync(
        CollectionObjectName lineName,
        CollectionObjectName slotName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Line From Instrument Shot {/* #construct-line-from-instrument-shot */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-lines#construct-line-from-instrument-shot) · [gRPC Contract](/api/grpc/construction-operations-lines#construct-line-from-instrument-shot)

```csharp
public Task ConstructLineFromInstrumentShotAsync(
        PointName pointName,
        CollectionObjectName lineName,
        int observationIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2026.1.0529.7)
