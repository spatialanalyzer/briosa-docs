---
title: ConnectToSpatialAnalyzerAsync
description: Connect Briosa's running SA SDK instance to local SpatialAnalyzer from .NET.
---

# `ConnectToSpatialAnalyzerAsync`

[SA 2026.1.0529.7](/api/dotnet/connect-to-spatial-analyzer) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/connect-to-spatial-analyzer)

Connects the current Briosa-owned SDK generation to the local SpatialAnalyzer
application that owns the SDK communication ports, then establishes MP
readiness.

## Signature

```csharp
public Task<SpatialAnalyzerSdkLifecycleState> ConnectToSpatialAnalyzerAsync(
    CancellationToken cancellationToken = default);
```

The client supplies the current SDK generation guard automatically.

## Returns

On success, SDK state is `Ready`, connection state is `Connected`, execution
readiness is `ExecutionReady`, and `ReadyForMp` is `true`.

## Example

```csharp
SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.ConnectToSpatialAnalyzerAsync();
```

The method calls `ConnectEx("localhost", ...)`; it never selects a particular SA
window or accepts a remote host.

After a connection you start yourself, as in control-plane-only mode, call
[`GetServerSnapshotAsync`](./installation-selection.md#server-snapshot-and-admission)
before MP work: MP admission needs both the snapshot and the SDK state to
report readiness.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerException` | No local SDK-addressable application is available. |
| `BriosaSpatialAnalyzerSdkException` | No live disconnected SDK exists, connection failed, or operator action is required. |
| `BriosaCompatibilityException` | The activated SDK or connected application does not exactly match the target. |
| `OperationCanceledException` | The caller stopped waiting. A request cancelled before the server accepted it changed nothing; an accepted one continues under the server's bounds, so refresh SDK state, and the server snapshot before MP work. |

A second lifecycle call while an accepted transition is in progress fails
with `sdk-lifecycle-transition-in-progress` (`StateConflict`,
`RefreshState`): refresh state and retry later.
