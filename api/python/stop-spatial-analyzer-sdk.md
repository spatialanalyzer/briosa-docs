---
title: stop_spatial_analyzer_sdk
description: Stop Briosa's current SpatialAnalyzer SDK generation while leaving SpatialAnalyzer running from Python.
---

# `stop_spatial_analyzer_sdk`

Closes MP admission and stops Briosa's current SDK generation without closing
SpatialAnalyzer or the public Briosa server.

## Signature

```python
async def stop_spatial_analyzer_sdk(
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerSdkLifecycleState: ...
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `timeout` | `float \| None` | `None` | Optional caller wait timeout in seconds. |

The client supplies the current SDK generation guard automatically.

## Returns

On success, SDK state is `STOPPED`, MP readiness is false, and there is no
current SDK generation.

## Example

```python
sdk = await briosa.stop_spatial_analyzer_sdk()

# SpatialAnalyzer and the Briosa server are still running.
```

## Raises

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerSdkError` | No matching SDK generation exists, it changed, or shutdown failed. |
| `TimeoutError` | The caller timeout expired; inspect SDK state. |
| `asyncio.CancelledError` | The task was cancelled; inspect SDK state. |

The method never closes SpatialAnalyzer and never makes an interrupted MP
command safe to replay.
