---
title: launch_spatial_analyzer
description: Launch the exact SpatialAnalyzer application approved for the connected Briosa target from Python.
---

# `launch_spatial_analyzer`

Launches a new exact-target SpatialAnalyzer application. The method does not
start or connect the SA SDK or make MP methods ready. A disconnected SDK may
already be running.

## Signature

```python
async def launch_spatial_analyzer(
    options: SpatialAnalyzerLaunchOptions | None = None,
    *,
    timeout: float | None = None,
) -> SpatialAnalyzerLifecycleState: ...
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `options` | `SpatialAnalyzerLaunchOptions \| None` | `None` | Controlled application startup inputs. |
| `timeout` | `float \| None` | `None` | Optional caller wait timeout in seconds. |

`SpatialAnalyzerLaunchOptions` provides:

| Field | Default | Meaning |
| --- | --- | --- |
| `job_file_path` | `None` | Absolute path to an SA job file on the local Briosa machine. |
| `quick_start_instrument_name` | `None` | Start a new job and quick-start the named SA instrument. |
| `start_minimized` | `False` | Start SpatialAnalyzer minimized. |

`job_file_path` and `quick_start_instrument_name` are mutually exclusive.

## Returns

The resulting application state. On success, `application_state` is `RUNNING`,
`ownership` is `SERVER_LAUNCHED`, and `application_generation` is present.

## Example

```python
from briosa import SpatialAnalyzerLaunchOptions


application = await briosa.launch_spatial_analyzer(
    SpatialAnalyzerLaunchOptions(
        job_file_path=r"C:\Jobs\Inspection.xit64",
        start_minimized=True,
    ),
)
sdk = await briosa.connect_to_spatial_analyzer()
```

The client retains the application generation and supplies it automatically
when the owned application is closed.

## Raises

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerError` | Launch failed, timed out, or application selection is ambiguous. |
| `ValueError` | Launch options are invalid, conflicting, or malformed. |
| `TimeoutError` | The caller timeout expired; inspect application state. |
| `asyncio.CancelledError` | The task was cancelled; inspect application state. |

The method accepts no executable path, arbitrary argument list, launch-time MP,
or option to close existing applications.
