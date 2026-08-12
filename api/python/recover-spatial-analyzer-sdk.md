---
title: recover_spatial_analyzer_sdk
description: Replace a lost or faulted SDK without connecting or replaying an MP command from Python.
---

# `recover_spatial_analyzer_sdk`

```python
async def recover_spatial_analyzer_sdk(
    mode: SpatialAnalyzerSdkRecoveryMode,
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerSdkLifecycleState: ...
```

`mode` must be `REPLACE_WITHOUT_REPLAY`. On success, the replacement SDK is
`RUNNING` and `DISCONNECTED`; the previous failure remains in `last_incident`.

```python
sdk = await briosa.recover_spatial_analyzer_sdk(
    SpatialAnalyzerSdkRecoveryMode.REPLACE_WITHOUT_REPLAY,
)
sdk = await briosa.connect_to_spatial_analyzer()
```

Recovery does not call `ConnectEx` or replay or resolve an earlier command.
Failures use `ValueError`, the lifecycle and SDK error boundaries,
`TimeoutError`, or normal task cancellation.
