---
title: Dimension Operations
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Dimension Operations

[SA 2026.1.0529.7](/api/dotnet/dimension-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/dimension-operations)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Dimension {/* #delete-dimension */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#delete-dimension) · [gRPC Contract](/api/grpc/dimension-operations#delete-dimension)

```csharp
public Task DeleteDimensionAsync(
        CollectionObjectName dimensionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Dimension Value {/* #get-dimension-value */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#get-dimension-value) · [gRPC Contract](/api/grpc/dimension-operations#get-dimension-value)

```csharp
public Task<GetDimensionValueResult> GetDimensionValueAsync(
        CollectionObjectName dimensionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Dimension Tolerance {/* #set-dimension-tolerance */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#set-dimension-tolerance) · [gRPC Contract](/api/grpc/dimension-operations#set-dimension-tolerance)

```csharp
public Task SetDimensionToleranceAsync(
        CollectionItemName dimensionName,
        bool enableNominal = false,
        bool enableHigh = false,
        bool enableLow = false,
        double nominal = 0.000000,
        double highTolerance = 0.000000,
        double lowTolerance = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2026.1.0529.7)
