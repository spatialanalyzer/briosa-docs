---
title: GetSpatialAnalyzerSdkStateAsync
description: Diagnose SpatialAnalyzer SDK process, connection, readiness, incident, and recovery state from .NET.
---

# `GetSpatialAnalyzerSdkStateAsync`

Reads the independently managed SA SDK state. Use it after an unexpected SDK
exit, connection failure, worker failure, or cancelled lifecycle transition.

## Signature

```csharp
public Task<SpatialAnalyzerSdkLifecycleState> GetSpatialAnalyzerSdkStateAsync(
    CancellationToken cancellationToken = default);
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `cancellationToken` | `CancellationToken` | `default` | Cancels this caller's wait. |

## Returns

A point-in-time `SpatialAnalyzerSdkLifecycleState`. `LastIncident` identifies
the most recent unexpected SDK-generation loss and remains available after a
successful recovery.

## Diagnostic Example

```csharp
SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.GetSpatialAnalyzerSdkStateAsync();

if (sdk.LastIncident?.ExecutionDisposition ==
    ExecutionDisposition.StartedOutcomeUnknown)
{
    // Reconcile SpatialAnalyzer state before considering command replay.
}

if (sdk.RecoveryState == SpatialAnalyzerSdkRecoveryState.RecoveryAvailable)
{
    sdk = await briosa.RecoverSpatialAnalyzerSdkAsync(
        SpatialAnalyzerSdkRecoveryMode.ReplaceWithoutReplay);
    sdk = await briosa.ConnectToSpatialAnalyzerAsync();
}
```

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started. |
| `BriosaProtocolException` | The server returned an invalid state or incident shape. |
| `OperationCanceledException` | The caller cancelled its wait. |

For an active generation, the server refreshes tracked SDK-process and worker
liveness before responding. The method does not execute an MP command or start,
stop, or recover the SDK, though detecting a lost process can publish a faulted
state.
