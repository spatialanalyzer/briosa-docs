---
title: Construction Operations / Cones
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Cones

[SA 2026.1.0529.7](/api/dotnet/construction-operations-cones) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-cones)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Cone {/* #construct-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cone)

```csharp
public Task ConstructConeAsync(
        CollectionObjectName coneName,
        Vector coneEndPoint,
        Vector coneAxis,
        double coneLength,
        double coneThetaStart,
        double coneThetaSpan,
        double coneIncludedAngle,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cones From Surface Faces - Runtime Select {/* #construct-cones-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)

```csharp
public Task ConstructConesFromSurfaceFacesRuntimeSelectAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
