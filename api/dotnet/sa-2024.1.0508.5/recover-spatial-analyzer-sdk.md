---
title: RecoverSpatialAnalyzerSdkAsync
description: Replace a lost or faulted SDK instance without connecting or replaying an MP command from .NET.
---

# `RecoverSpatialAnalyzerSdkAsync`

[SA 2026.1.0529.7](/api/dotnet/recover-spatial-analyzer-sdk) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/recover-spatial-analyzer-sdk)

Replaces the current faulted SDK generation after any required operator action
is complete.

## Signature

```csharp
public Task<SpatialAnalyzerSdkLifecycleState> RecoverSpatialAnalyzerSdkAsync(
    CancellationToken cancellationToken = default);
```

The client always requests `ReplaceWithoutReplay` recovery and supplies the
failed SDK generation guard automatically.

## Returns

On success, the replacement is `Running` and `Disconnected`, and the previous
failure remains in `LastIncident`.

## Example

```csharp
SpatialAnalyzerSdkLifecycleState sdk =
    await briosa.RecoverSpatialAnalyzerSdkAsync();

sdk = await briosa.ConnectToSpatialAnalyzerAsync();
```

Recovery neither calls `ConnectEx` nor resolves or replays an earlier command.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerSdkException` | Recovery is not available, operator action remains, or replacement failed. |
| `OperationCanceledException` | The caller stopped waiting. A request cancelled before the server accepted it changed nothing; an accepted one continues under the server's bounds, so refresh SDK state, and the server snapshot before MP work. |

A second lifecycle call while an accepted transition is in progress fails
with `sdk-lifecycle-transition-in-progress` (`StateConflict`,
`RefreshState`): refresh state and retry later.
