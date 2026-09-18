---
title: get_spatial_analyzer_sdk_state
description: Diagnose SpatialAnalyzer SDK process, connection, readiness, incident, and recovery state from Python.
---

# `get_spatial_analyzer_sdk_state`

Reads the independently managed SA SDK state. Use it after an unexpected SDK
exit, connection failure, worker failure, or cancelled lifecycle transition.

## Signature

```python
async def get_spatial_analyzer_sdk_state(
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerSdkLifecycleState: ...
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `timeout` | `float \| None` | `None` | Optional caller wait timeout in seconds. |

## Returns

A point-in-time SDK state. `last_incident` identifies the most recent
unexpected SDK-generation loss and remains available after recovery.

## Diagnostic Example

```python
sdk = await briosa.get_spatial_analyzer_sdk_state()

if (
    sdk.last_incident is not None
    and sdk.last_incident.execution_disposition
    is ExecutionDisposition.STARTED_OUTCOME_UNKNOWN
):
    # Reconcile SpatialAnalyzer state before considering command replay.
    pass

if sdk.recovery_state is SpatialAnalyzerSdkRecoveryState.RECOVERY_AVAILABLE:
    sdk = await briosa.recover_spatial_analyzer_sdk(
        SpatialAnalyzerSdkRecoveryMode.REPLACE_WITHOUT_REPLAY,
    )
    sdk = await briosa.connect_to_spatial_analyzer()
```

## Raises

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started. |
| `BriosaProtocolError` | The server returned an invalid state or incident shape. |
| `TimeoutError` | The caller timeout expired. |
| `asyncio.CancelledError` | The task was cancelled. |

For an active generation, the server refreshes tracked SDK-process and worker
liveness before responding. The method does not execute an MP command or start,
stop, or recover the SDK, though detecting a lost process can publish a faulted
state.
