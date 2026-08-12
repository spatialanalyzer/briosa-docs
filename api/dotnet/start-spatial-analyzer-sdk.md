---
title: StartSpatialAnalyzerSdkAsync
description: Start a new disconnected Briosa-owned SpatialAnalyzer SDK instance from .NET.
---

# `StartSpatialAnalyzerSdkAsync`

Starts Briosa's isolated SA SDK generation without launching or connecting to
SpatialAnalyzer.

## Signature

```csharp
public Task<SpatialAnalyzerSdkLifecycleState> StartSpatialAnalyzerSdkAsync(
    CancellationToken cancellationToken = default);
```

## Returns

On success, `SdkState` is `Running`, `ConnectionState` is `Disconnected`,
`ReadyForMp` is `false`, and a new `SdkGeneration` is present.

## Example

```csharp
SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.StartSpatialAnalyzerSdkAsync();

sdk = await briosa.ConnectToSpatialAnalyzerAsync();
```

The default [`StartAsync`](./start.md) procedure calls this method's RPC
automatically. Applications use it directly after deliberately stopping the SDK
or when a future reviewed startup option delays SDK orchestration.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerSdkException` | An SDK is already active, startup failed, or recovery is required. |
| `OperationCanceledException` | The caller cancelled its wait; inspect SDK state. |

The method never calls `ConnectEx`, launches SpatialAnalyzer, or closes another
program's SDK engine.
