---
title: StartSpatialAnalyzerSdkAsync
description: Start a new disconnected Briosa-owned SpatialAnalyzer SDK instance from .NET.
---

# `StartSpatialAnalyzerSdkAsync`

[SA 2026.1.0529.7](/api/dotnet/start-spatial-analyzer-sdk) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/start-spatial-analyzer-sdk)

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
| `OperationCanceledException` | The caller stopped waiting. A request cancelled before the server accepted it changed nothing; an accepted one continues under the server's bounds, so refresh SDK state, and the server snapshot before MP work. |

A second lifecycle call while an accepted transition is in progress fails
with `sdk-lifecycle-transition-in-progress` (`StateConflict`,
`RefreshState`): refresh state and retry later.

The method never calls `ConnectEx`, launches SpatialAnalyzer, or closes another
program's SDK engine.
