---
title: stop
description: Stop the reusable JavaScript client session and only the Briosa server process it owns.
---

# `stop`

Ends the current client session and returns the handle to its reusable dormant
state.

## Signature

```ts
stop(): Promise<void>;
```

## Arguments

The method has no arguments and intentionally accepts no `AbortSignal`. Once
owned-resource cleanup begins, it runs to its bounded conclusion.

## Returns

A promise that resolves with `undefined` after owned-resource cleanup reaches its
bounded final state.

## Example

```ts
await briosa.stop();

// The same handle can establish another server session.
await briosa.start();
```

## Cleanup Behavior

Stop closes command admission, stops the server launched by this client and its
SDK generation, and releases the channel. It does not close SpatialAnalyzer.
To close a server-launched application,
call `stopSpatialAnalyzerSdk()` and then `closeOwnedSpatialAnalyzer()` before
stopping the owning server.

Calling stop while dormant resolves successfully. Concurrent stops share one
cleanup operation.

## Rejections

`BriosaLifecycleError` is thrown when the handle was finally disposed before
the call began. Cleanup failures are reported without granting the client
authority over unrelated processes.
