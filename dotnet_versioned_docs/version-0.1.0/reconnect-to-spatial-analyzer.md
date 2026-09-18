---
title: ReconnectToSpatialAnalyzerAsync
description: Re-establish an unhealthy local SpatialAnalyzer connection using Briosa's current live SDK instance.
---

# `ReconnectToSpatialAnalyzerAsync`

Calls `ConnectEx("localhost", ...)` again on the current live SDK generation,
then repeats identity verification and the execution-readiness proof.

## Signature

```csharp
public Task<SpatialAnalyzerSdkLifecycleState> ReconnectToSpatialAnalyzerAsync(
    CancellationToken cancellationToken = default);
```

## Example

```csharp
SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.GetSpatialAnalyzerSdkStateAsync();

if (sdk.ConnectionState != SpatialAnalyzerConnectionState.Connected)
{
    sdk = await briosa.ReconnectToSpatialAnalyzerAsync();
}
```

Reconnect preserves the current SDK generation and never replays an MP command.
If the SDK process or worker is unhealthy, recover it first and then connect the
replacement explicitly.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerException` | No local SDK-addressable application is available. |
| `BriosaSpatialAnalyzerSdkException` | Reconnect is unnecessary, the SDK must be recovered, or reconnection failed. |
| `BriosaCompatibilityException` | Runtime identity evidence does not match the target. |
| `OperationCanceledException` | The caller cancelled its wait; inspect SDK state. |
