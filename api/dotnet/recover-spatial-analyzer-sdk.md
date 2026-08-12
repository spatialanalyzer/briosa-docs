---
title: RecoverSpatialAnalyzerSdkAsync
description: Replace a lost or faulted SDK instance without connecting or replaying an MP command from .NET.
---

# `RecoverSpatialAnalyzerSdkAsync`

Replaces the current faulted SDK generation after any required operator action
is complete.

## Signature

```csharp
public Task<SpatialAnalyzerSdkLifecycleState> RecoverSpatialAnalyzerSdkAsync(
    SpatialAnalyzerSdkRecoveryMode mode,
    CancellationToken cancellationToken = default);
```

`mode` must be `ReplaceWithoutReplay`. The client supplies the failed SDK
generation guard automatically.

## Returns

On success, the replacement is `Running` and `Disconnected`, and the previous
failure remains in `LastIncident`.

## Example

```csharp
SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.RecoverSpatialAnalyzerSdkAsync(
        SpatialAnalyzerSdkRecoveryMode.ReplaceWithoutReplay);

sdk = await briosa.ConnectToSpatialAnalyzerAsync();
```

Recovery neither calls `ConnectEx` nor resolves or replays an earlier command.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `ArgumentOutOfRangeException` | `mode` is not a defined recovery mode. |
| `BriosaLifecycleException` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerSdkException` | Recovery is not available, operator action remains, or replacement failed. |
| `OperationCanceledException` | The caller cancelled its wait; inspect SDK state. |
