---
title: reconnect_to_spatial_analyzer
description: Re-establish an unhealthy local SpatialAnalyzer connection using Briosa's current live SDK instance from Python.
---

# `reconnect_to_spatial_analyzer`

```python
async def reconnect_to_spatial_analyzer(
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerSdkLifecycleState: ...
```

Reconnect calls `ConnectEx("localhost", ...)` again on the current live SDK
generation, repeats verification, and never replays an MP command.

```python
sdk = await briosa.get_spatial_analyzer_sdk_state()

if sdk.connection_state is not SpatialAnalyzerConnectionState.CONNECTED:
    sdk = await briosa.reconnect_to_spatial_analyzer()
```

If the SDK process or worker is unhealthy, recover it first and explicitly
connect the replacement. Failures use the normal lifecycle, SpatialAnalyzer,
SDK, compatibility, timeout, and cancellation error boundaries.
