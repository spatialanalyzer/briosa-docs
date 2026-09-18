---
title: stop
description: Stop the reusable Python client session and only the Briosa server process it owns.
---

# `stop`

Ends the current client session and returns the client to its reusable dormant
state.

## Signature

```python
async def stop(self) -> None: ...
```

## Arguments

The method has no arguments. Cancelling the awaiting task stops that caller's
wait but does not interrupt bounded owned-resource cleanup.

## Returns

`None` after owned-resource cleanup reaches its bounded final state.

## Example

```python
await briosa.stop()

# The same client can establish another server session.
await briosa.start()
```

## Cleanup Behavior

Stop closes command admission, stops the server launched by this client and its
SDK generation, and releases the channel. It does not close SpatialAnalyzer.
To close a server-launched application,
call `stop_spatial_analyzer_sdk()` and then
`close_owned_spatial_analyzer()` before stopping the owning server.

Calling stop while dormant succeeds. Concurrent stops on the owning event loop
share one cleanup operation.

## Errors

| Error | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is used from another event loop or was finally closed. |
| `asyncio.CancelledError` | This task stopped waiting; owned cleanup continues within its bound. |
