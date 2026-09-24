---
title: Instrument Operations / API - LADAR
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

[SA 2026.1.0529.7](/api/dotnet/instrument-operations-api-ladar) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/instrument-operations-api-ladar)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Set LADAR AutoMeas Point {/* #set-ladar-automeas-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-point) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-point)

```csharp
public Task SetLadarAutoMeasPointAsync(
        CollectionInstrumentId instrument,
        int sampleTimeMilliseconds = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR AutoMeas Sphere {/* #set-ladar-automeas-sphere */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-sphere) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-sphere)

```csharp
public Task SetLadarAutoMeasSphereAsync(
        CollectionInstrumentId instrument,
        double sphereRadius = 1.1875,
        double scanLineSpacing = 0.05,
        bool sendCenterPoint = true,
        bool sendSphere = false,
        bool sendMeasuredCloud = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Sphere {/* #set-ladar-featuremeas-sphere */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-sphere) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-sphere)

```csharp
public Task SetLadarFeatureMeasSphereAsync(
        CollectionInstrumentId instrument,
        double scanLineSpacing = 0.05,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Circle {/* #set-ladar-featuremeas-circle */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-circle) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-circle)

```csharp
public Task SetLadarFeatureMeasCircleAsync(
        CollectionInstrumentId instrument,
        double scanLineSpacing = 0.05,
        double widthOfExtraAreaAroundScan = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Slot {/* #set-ladar-featuremeas-slot */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-slot) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-slot)

```csharp
public Task SetLadarFeatureMeasSlotAsync(
        CollectionInstrumentId instrument,
        double scanLineSpacing = 0.05,
        double widthOfExtraAreaAroundScan = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Cylinder {/* #set-ladar-featuremeas-cylinder */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder)

```csharp
public Task SetLadarFeatureMeasCylinderAsync(
        CollectionInstrumentId instrument,
        double scanLineSpacing = 0.05,
        double widthOfExtraAreaAroundScan = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## SetLadarAutoMeasPointAsync {/* #setladarautomeaspointasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetLadarAutoMeasSphereAsync {/* #setladarautomeassphereasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetLadarFeatureMeasSphereAsync {/* #setladarfeaturemeassphereasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetLadarFeatureMeasCircleAsync {/* #setladarfeaturemeascircleasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetLadarFeatureMeasSlotAsync {/* #setladarfeaturemeasslotasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## SetLadarFeatureMeasCylinderAsync {/* #setladarfeaturemeascylinderasync */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2026.1.0529.7)
