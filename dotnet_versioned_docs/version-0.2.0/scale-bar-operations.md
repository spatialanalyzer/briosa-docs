---
title: Scale Bar Operations
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Scale Bar Operations

[SA 2026.1.0529.7](/api/dotnet/scale-bar-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/scale-bar-operations)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Scale Bar {/* #delete-scale-bar */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#delete-scale-bar) · [gRPC Contract](/api/grpc/scale-bar-operations#delete-scale-bar)

```csharp
public Task DeleteScaleBarAsync(
        CollectionObjectName scaleBarName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Scale Bar Stats {/* #get-scale-bar-stats */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#get-scale-bar-stats) · [gRPC Contract](/api/grpc/scale-bar-operations#get-scale-bar-stats)

```csharp
public Task<GetScaleBarStatsResult> GetScaleBarStatsAsync(
        CollectionObjectName scaleBarName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scale Bar Check {/* #scale-bar-check */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#scale-bar-check) · [gRPC Contract](/api/grpc/scale-bar-operations#scale-bar-check)

```csharp
public Task<double> ScaleBarCheckAsync(
        PointName scaleBarPointA,
        PointName scaleBarPointB,
        double currentTemperatureF = 0.000000,
        double lengthOfBarAt68F = 0.000000,
        double materialCtePpmF = 0.000000,
        double tolerance = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Inward Positive Normal {/* #set-inward-positive-normal */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#set-inward-positive-normal) · [gRPC Contract](/api/grpc/scale-bar-operations#set-inward-positive-normal)

```csharp
public Task SetInwardPositiveNormalAsync(
        CollectionObjectName objectName,
        bool inwardPositive = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
