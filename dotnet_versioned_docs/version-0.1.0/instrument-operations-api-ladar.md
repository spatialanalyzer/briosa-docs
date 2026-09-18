---
title: Instrument Operations / API - LADAR
description: Briosa 0.1.0 .NET APIs for API - LADAR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

## SetLadarAutoMeasPointAsync

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-point) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-point)

```csharp
public Task SetLadarAutoMeasPointAsync(
    CollectionInstrumentId instrument,
    int sampleTimeMilliseconds = 0,
    CancellationToken cancellationToken = default);
```

The exact MP default is `0` despite the MP label documenting `1–2000`.

## SetLadarAutoMeasSphereAsync

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-sphere) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-sphere)

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

## SetLadarFeatureMeasSphereAsync

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-sphere) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-sphere)

```csharp
public Task SetLadarFeatureMeasSphereAsync(
    CollectionInstrumentId instrument,
    double scanLineSpacing = 0.05,
    CancellationToken cancellationToken = default);
```

## SetLadarFeatureMeasCircleAsync

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-circle) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-circle)

```csharp
public Task SetLadarFeatureMeasCircleAsync(
    CollectionInstrumentId instrument,
    double scanLineSpacing = 0.05,
    double widthOfExtraAreaAroundScan = 0.0,
    CancellationToken cancellationToken = default);
```

## SetLadarFeatureMeasSlotAsync

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-slot) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-slot)

```csharp
public Task SetLadarFeatureMeasSlotAsync(
    CollectionInstrumentId instrument,
    double scanLineSpacing = 0.05,
    double widthOfExtraAreaAroundScan = 0.0,
    CancellationToken cancellationToken = default);
```

## SetLadarFeatureMeasCylinderAsync

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder) · [gRPC contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder)

```csharp
public Task SetLadarFeatureMeasCylinderAsync(
    CollectionInstrumentId instrument,
    double scanLineSpacing = 0.05,
    double widthOfExtraAreaAroundScan = 0.0,
    CancellationToken cancellationToken = default);
```

Briosa does not convert units or add ranges to these instrument-specific
settings. The calls are never automatically replayed.
