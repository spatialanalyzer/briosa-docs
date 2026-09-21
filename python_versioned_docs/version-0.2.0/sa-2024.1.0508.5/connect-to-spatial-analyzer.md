---
title: connect_to_spatial_analyzer
description: Connect Briosa's running SA SDK instance to local SpatialAnalyzer from Python.
---

# `connect_to_spatial_analyzer`

[SA 2026.1.0529.7](/api/python/connect-to-spatial-analyzer) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/connect-to-spatial-analyzer)

```python
async def connect_to_spatial_analyzer(
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerSdkLifecycleState: ...
```

Calls `ConnectEx("localhost", ...)` on Briosa's current SDK, verifies exact SDK
and connected-SA identity, proves execution readiness, and opens MP admission.
The client supplies the current SDK generation guard automatically.

```python
sdk = await briosa.connect_to_spatial_analyzer()
```

On success, SDK state is `READY`, connection state is `CONNECTED`, and
`ready_for_mp` is `True`. The method does not launch SpatialAnalyzer, select a
window, replace the SDK, or accept a remote host.

Failures use the normal lifecycle, SpatialAnalyzer, SDK, compatibility,
timeout, and cancellation error boundaries.
