---
title: start
description: Launch the local Briosa server and perform the default SpatialAnalyzer startup procedure from Python.
---

# `start`

Launches a local Briosa server, starts its disconnected SDK, launches a fresh
exact-target SpatialAnalyzer application, connects the SDK locally, and waits
until MP execution is ready.

## Signature

```python
async def start(
    self,
    options: BriosaStartOptions | None = None,
) -> None: ...
```

Passing `None` uses `BriosaStartOptions()`.

## Startup Options

| Field | Default | Meaning |
| --- | --- | --- |
| `start_spatial_analyzer_sdk` | `True` | Start a new disconnected SDK generation. |
| `launch_spatial_analyzer` | `True` | Launch a fresh exact-target SpatialAnalyzer application. |
| `connect_to_spatial_analyzer` | `True` | Connect the new SDK generation and establish MP readiness. |
| `launch_options` | Empty | Controlled initial job, instrument quick-start, and window-state options. |
| `startup_timeout` | `30.0` | Bounds the complete requested startup procedure, in seconds. |

`connect_to_spatial_analyzer=True` requires
`start_spatial_analyzer_sdk=True`. Non-default launch options require
`launch_spatial_analyzer=True`.

## Example

```python
from briosa import BriosaClient


briosa = BriosaClient()
await briosa.start()
working_directory = await briosa.get_working_directory()
```

To attach to an eligible SpatialAnalyzer application that is already running:

```python
from briosa import BriosaStartOptions


await briosa.start(
    BriosaStartOptions(launch_spatial_analyzer=False),
)
```

To start only the Briosa control plane:

```python
await briosa.start(
    BriosaStartOptions(
        start_spatial_analyzer_sdk=False,
        launch_spatial_analyzer=False,
        connect_to_spatial_analyzer=False,
    ),
)
```

## Behavior

- Selects and launches the exact-target local server on an owned loopback
  endpoint.
- Verifies server and protocol identity.
- Performs only the SDK-start, SpatialAnalyzer-launch, and connection phases
  selected in `BriosaStartOptions`, in that order.
- Supplies `launch_options` to the application launch phase.
- Verifies SDK/SA identity and execution readiness when connection is requested.
- Loads the admitted capability surface and binds the client to the current
  event loop.

Success means every requested phase completed. It does not imply MP readiness
when connection was deliberately disabled.

Manually starting `Briosa.Server.exe` starts no SDK or SA application; raw gRPC
callers invoke those lifecycle RPCs explicitly.

If an SDK, application, or connection phase fails after the server becomes
available, the client preserves the control plane for state inspection and
recovery. `stop()` remains available to clean up resources owned by that client
session.

## Errors

| Error | Meaning |
| --- | --- |
| `BriosaStartupError` | The server or default startup procedure could not complete. |
| `BriosaSpatialAnalyzerError` | A fresh exact-target application could not be launched. |
| `BriosaSpatialAnalyzerSdkError` | SDK startup or connection failed. |
| `BriosaCompatibilityError` | Server, SDK, or connected SA identity does not match the package target. |
| `BriosaLifecycleError` | The client is used from another event loop. |
| `ValueError` | Startup options contain an invalid combination or malformed value. |
| `asyncio.CancelledError` | This task cancelled its wait after startup may have crossed a lifecycle boundary. |
