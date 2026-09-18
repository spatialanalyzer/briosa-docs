---
title: StopAsync
description: Stop the reusable .NET client session and only the Briosa server process it owns.
---

# `StopAsync`

Ends the current client session and returns the client to its reusable dormant
state.

## Signature

```csharp
public Task StopAsync(
    CancellationToken cancellationToken = default);
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `cancellationToken` | `CancellationToken` | `default` | Cancels this caller's wait for cleanup. |

## Returns

A `Task` that completes when owned-resource cleanup has reached its bounded final
state. There is no return value.

## Example

```csharp
await briosa.StopAsync();

// The same client can establish a new server session later.
await briosa.StartAsync();
```

## Cleanup Behavior

Stop closes command admission, stops the server launched by this client and its
SDK generation, and releases the channel. It does not close SpatialAnalyzer.
To close a server-launched application,
call `StopSpatialAnalyzerSdkAsync()` and then
`CloseOwnedSpatialAnalyzerAsync()` before stopping the owning server.

Calling stop while dormant succeeds without creating work. Concurrent stops
share one cleanup operation.

## Exceptions

| Exception | Meaning |
| --- | --- |
| `OperationCanceledException` | This caller stopped waiting. Owned cleanup continues within its bound. |
| `ObjectDisposedException` | Final disposal already completed before this call began. |
