---
title: StopSpatialAnalyzerSdkAsync
description: Stop Briosa's current SpatialAnalyzer SDK generation while leaving SpatialAnalyzer running from .NET.
---

# `StopSpatialAnalyzerSdkAsync`

Closes MP admission and stops Briosa's current SDK generation without closing
SpatialAnalyzer or the public Briosa server.

## Signature

```csharp
public Task<SpatialAnalyzerSdkLifecycleState> StopSpatialAnalyzerSdkAsync(
    CancellationToken cancellationToken = default);
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `cancellationToken` | `CancellationToken` | `default` | Cancels this caller's SDK shutdown wait. |

The client supplies the latest observed SDK generation guard automatically.

## Returns

The resulting SDK state. On success, `SdkState` is `Stopped`, MP readiness is
false, and there is no current SDK generation.

## Example

```csharp
SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.StopSpatialAnalyzerSdkAsync();

// SpatialAnalyzer and the Briosa server are still running.
```

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerSdkException` | No matching SDK generation exists, the generation changed, or shutdown failed. |
| `OperationCanceledException` | The caller cancelled its wait; inspect SDK state. |

The method never closes SpatialAnalyzer and never makes an interrupted MP
command safe to replay.
