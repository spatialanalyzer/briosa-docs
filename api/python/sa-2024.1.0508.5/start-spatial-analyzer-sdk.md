---
title: start_spatial_analyzer_sdk
description: Start a new disconnected Briosa-owned SpatialAnalyzer SDK instance from Python.
---

# `start_spatial_analyzer_sdk`

[SA 2026.1.0529.7](/api/python/start-spatial-analyzer-sdk) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/start-spatial-analyzer-sdk)

Starts Briosa's isolated SDK generation without launching or connecting to
SpatialAnalyzer.

```python
async def start_spatial_analyzer_sdk(
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerSdkLifecycleState: ...
```

On success, SDK state is `RUNNING`, connection state is `DISCONNECTED`,
`ready_for_mp` is `False`, and a new SDK generation is present.

```python
sdk = await briosa.start_spatial_analyzer_sdk()
sdk = await briosa.connect_to_spatial_analyzer()
```

The default [`start`](./start.md) procedure invokes this behavior automatically.
Use the method directly after deliberately stopping the SDK or when a future
reviewed startup option delays SDK orchestration.

The method never calls `ConnectEx`, launches SpatialAnalyzer, or closes another
program's SDK engine. Failures use `BriosaLifecycleError`,
`BriosaSpatialAnalyzerSdkError`, `TimeoutError`, or normal task cancellation.
