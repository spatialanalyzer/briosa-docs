---
title: Construction Operations / Circles
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Circles

[SA 2026.1.0529.7](/api/dotnet/construction-operations-circles) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-circles)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Construct Circle {/* #construct-circle */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circle) · [gRPC Contract](/api/grpc/construction-operations-circles#construct-circle)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructCircleAsync(
        CollectionObjectName circleName,
        Vector circleCenter,
        Vector circleNormal,
        double circleRadius,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Circles From Surface Faces - Runtime Select {/* #construct-circles-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-circles#construct-circles-from-surface-faces---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task ConstructCirclesFromSurfaceFacesRuntimeSelectAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Circles (Lines) From Surfaces {/* #construct-circles-lines-from-surfaces */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-circles#construct-circles-lines-from-surfaces) · [gRPC Contract](/api/grpc/construction-operations-circles#construct-circles-lines-from-surfaces)

Client 0.5.0 removed this method with behavioral contract major 3. SpatialAnalyzer returned MP code -1 for both the Circle and the Line mode on both exact targets. No replacement extracts circles or lines from surfaces on these exact targets. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7)
