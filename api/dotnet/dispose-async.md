---
title: DisposeAsync
description: Perform final asynchronous cleanup of a BriosaClient.
---

# `DisposeAsync`

Performs final client cleanup and permanently disposes the `BriosaClient`.

## Signature

```csharp
public ValueTask DisposeAsync();
```

## Parameters

The method has no parameters.

## Returns

A `ValueTask` representing final asynchronous cleanup.

## Recommended Usage

```csharp
await using var briosa = new BriosaClient();
await briosa.StartAsync();

string workingDirectory = await briosa.GetWorkingDirectoryAsync();
```

The compiler awaits `DisposeAsync()` when the scope exits, including when an
exception leaves the scope.

## Behavior

- Follows the same cleanup rules as `StopAsync()`.
- Stops the server launched by this client and its SDK generation.
- Never calls `CloseOwnedSpatialAnalyzerAsync()` automatically.
- Leaves every SpatialAnalyzer application running.
- Is safe to call more than once.
- Permanently prevents later start, state, lifecycle, or MP calls.

Starting or calling another client method after disposal throws
`ObjectDisposedException`.
