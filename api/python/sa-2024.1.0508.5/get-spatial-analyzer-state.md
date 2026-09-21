---
title: get_spatial_analyzer_state
description: Read SpatialAnalyzer application and ownership state from Python.
---

# `get_spatial_analyzer_state`

[SA 2026.1.0529.7](/api/python/get-spatial-analyzer-state) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/get-spatial-analyzer-state)

Reads SpatialAnalyzer application state without changing the application or
SA SDK.

## Signature

```python
async def get_spatial_analyzer_state(
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerLifecycleState: ...
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `timeout` | `float \| None` | `None` | Optional caller wait timeout in seconds. |

## Returns

A point-in-time application state containing ownership, the application
generation, and a safe diagnostic code. SDK state is returned separately by
`get_spatial_analyzer_sdk_state()`.

## Example

```python
application = await briosa.get_spatial_analyzer_state()

if application.application_state is SpatialAnalyzerApplicationState.RUNNING:
    sdk = await briosa.get_spatial_analyzer_sdk_state()
```

## Raises

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started. |
| `BriosaProtocolError` | The server returned an invalid state shape. |
| `TimeoutError` | The caller timeout expired. |
| `asyncio.CancelledError` | The task was cancelled. |

The method is safe to repeat and exposes no process IDs, paths, registry data,
or SDK status codes.
