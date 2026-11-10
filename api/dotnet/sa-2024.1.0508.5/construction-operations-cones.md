---
title: Construction Operations / Cones
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Cones

[SA 2026.1.0529.7](/api/dotnet/construction-operations-cones) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-cones)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Construct Cone {/* #construct-cone */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cone)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ConstructConeAsync(
        CollectionObjectName coneName,
        Vector coneEndPoint,
        Vector coneAxis,
        double coneLength,
        double coneThetaStart,
        double coneThetaSpan,
        double coneIncludedAngle,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Cones From Surface Faces - Runtime Select {/* #construct-cones-from-surface-faces---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-cones#construct-cones-from-surface-faces---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-cones#construct-cones-from-surface-faces---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task ConstructConesFromSurfaceFacesRuntimeSelectAsync(
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
