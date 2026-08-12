---
title: close_owned_spatial_analyzer
description: Close a stopped-SDK SpatialAnalyzer application launched by the current Briosa server from Python.
---

# `close_owned_spatial_analyzer`

Closes only the exact SpatialAnalyzer application launched by the connected
Briosa server.

## Signature

```python
async def close_owned_spatial_analyzer(
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerLifecycleState: ...
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `timeout` | `float \| None` | `None` | Optional caller wait timeout in seconds. |

The client supplies the latest application generation guard automatically.

## Returns

On success, application state is `NOT_RUNNING`, ownership is `NONE`, and the
application generation is `None`.

## Example

```python
await briosa.stop_spatial_analyzer_sdk()
application = await briosa.close_owned_spatial_analyzer()
```

## Preconditions

- The application is still owned by this Briosa server.
- The SA SDK is stopped.
- No other lifecycle transition is active.

## Raises

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerError` | The application is external, changed, still has an active SDK, or did not close. |
| `TimeoutError` | The caller timeout expired; inspect application state. |
| `asyncio.CancelledError` | The task was cancelled; inspect application state. |

The method never closes an externally started application or another program's
SDK process.
