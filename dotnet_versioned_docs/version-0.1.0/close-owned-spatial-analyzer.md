---
title: CloseOwnedSpatialAnalyzerAsync
description: Close a stopped-SDK SpatialAnalyzer application launched by the current Briosa server from .NET.
---

# `CloseOwnedSpatialAnalyzerAsync`

Closes only the exact SpatialAnalyzer application launched by the connected
Briosa server.

## Signature

```csharp
public Task<SpatialAnalyzerLifecycleState> CloseOwnedSpatialAnalyzerAsync(
    CancellationToken cancellationToken = default);
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `cancellationToken` | `CancellationToken` | `default` | Cancels this caller's close wait. |

The client supplies the latest observed application generation automatically.

## Returns

The resulting application state. On success, `ApplicationState` is
`NotRunning`, ownership is `None`, and `ApplicationGeneration` is `null`.

## Example

```csharp
await briosa.StopSpatialAnalyzerSdkAsync();

SpatialAnalyzerLifecycleState application =
    await briosa.CloseOwnedSpatialAnalyzerAsync();
```

## Preconditions

- The application is still owned by this Briosa server.
- The SA SDK is stopped.
- No other lifecycle transition is active.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerException` | The application is external, changed, still has an active SDK, or did not close within the server bound. |
| `OperationCanceledException` | The caller cancelled its wait; inspect application state. |

The method never closes externally started SpatialAnalyzer applications or SDK
processes owned by another program.
