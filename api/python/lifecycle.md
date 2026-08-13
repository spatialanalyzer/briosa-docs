---
title: BriosaClient Lifecycle
description: Complete Next contract for independently managing Briosa, SpatialAnalyzer, and the SpatialAnalyzer SDK from Python.
sidebar_label: Overview and Types
---

# `BriosaClient` Lifecycle

`BriosaClient` controls three separate resources. By default,
[`start()`](./start.md) launches the local Briosa server, starts a disconnected
SDK generation, launches a fresh SpatialAnalyzer application, connects the SDK,
and waits for MP readiness. The individual lifecycle methods remain available
for explicit control, diagnosis, and recovery.

## Methods

| Resource | Method | Result | Purpose |
| --- | --- | --- | --- |
| Briosa | [`start`](./start.md) | `None` | Launch the local server and complete the default ready-for-MP startup procedure |
| SpatialAnalyzer | [`get_spatial_analyzer_state`](./get-spatial-analyzer-state.md) | `SpatialAnalyzerLifecycleState` | Read application and ownership state |
| SpatialAnalyzer | [`launch_spatial_analyzer`](./launch-spatial-analyzer.md) | `SpatialAnalyzerLifecycleState` | Launch the server's approved exact-target application |
| SpatialAnalyzer | [`close_owned_spatial_analyzer`](./close-owned-spatial-analyzer.md) | `SpatialAnalyzerLifecycleState` | Close only an application launched by this server |
| SA SDK | [`get_spatial_analyzer_sdk_state`](./get-spatial-analyzer-sdk-state.md) | `SpatialAnalyzerSdkLifecycleState` | Diagnose SDK process, connection, readiness, and recovery state |
| SA SDK | [`start_spatial_analyzer_sdk`](./start-spatial-analyzer-sdk.md) | `SpatialAnalyzerSdkLifecycleState` | Start a new disconnected SDK generation |
| SA SDK | [`connect_to_spatial_analyzer`](./connect-to-spatial-analyzer.md) | `SpatialAnalyzerSdkLifecycleState` | Connect the current SDK to local SpatialAnalyzer and prove MP readiness |
| SA SDK | [`reconnect_to_spatial_analyzer`](./reconnect-to-spatial-analyzer.md) | `SpatialAnalyzerSdkLifecycleState` | Retry local connection and readiness with the current healthy SDK generation |
| SA SDK | [`stop_spatial_analyzer_sdk`](./stop-spatial-analyzer-sdk.md) | `SpatialAnalyzerSdkLifecycleState` | Stop Briosa's SDK generation while leaving the application running |
| SA SDK | [`recover_spatial_analyzer_sdk`](./recover-spatial-analyzer-sdk.md) | `SpatialAnalyzerSdkLifecycleState` | Replace a lost or faulted SDK generation and leave it disconnected |
| Briosa | [`stop`](./stop.md) | `None` | End the reusable client session and stop only an owned Briosa server |
| Briosa | [`aclose` and `async with`](./asynchronous-context-management.md) | `None` | Perform final client cleanup |

## Client Construction

```python
@dataclass(frozen=True, slots=True)
class BriosaClientOptions:
    command_timeout: float | None = None


@dataclass(frozen=True, slots=True)
class SpatialAnalyzerLaunchOptions:
    job_file_path: str | None = None
    quick_start_instrument_name: str | None = None
    start_minimized: bool = False


@dataclass(frozen=True, slots=True)
class BriosaStartOptions:
    start_spatial_analyzer_sdk: bool = True
    launch_spatial_analyzer: bool = True
    connect_to_spatial_analyzer: bool = True
    launch_options: SpatialAnalyzerLaunchOptions = field(
        default_factory=SpatialAnalyzerLaunchOptions,
    )
    startup_timeout: float = 30.0


class BriosaClient:
    def __init__(
        self,
        options: BriosaClientOptions | None = None,
    ) -> None: ...
```

Construction is dormant. `start()` locates and launches the matching Briosa
server on an owned loopback endpoint. Direct control of a manually started
server uses the public gRPC API rather than a separate first-party client
construction mode.

Timeout values are seconds. `BriosaStartOptions.startup_timeout` bounds the
complete startup procedure requested by that call. SpatialAnalyzer launch, SDK
connection, identity verification, and readiness probing retain their own
server-configured safety bounds. `command_timeout=None` means the client adds
no MP-command deadline.

The three startup switches are independent except that connecting requires the
same startup call to start an SDK generation. Launch options must remain at
their defaults when application launch is disabled. `job_file_path` and
`quick_start_instrument_name` are mutually exclusive.

## SpatialAnalyzer Application State

```python
@dataclass(frozen=True, slots=True)
class SpatialAnalyzerLifecycleState:
    state_revision: int
    application_state: SpatialAnalyzerApplicationState
    ownership: SpatialAnalyzerOwnership
    application_generation: int | None
    diagnostic_code: str | None


class SpatialAnalyzerApplicationState(StrEnum):
    UNSPECIFIED = "unspecified"
    NOT_RUNNING = "not_running"
    STARTING = "starting"
    RUNNING = "running"
    CLOSING = "closing"
    EXITED = "exited"
    AMBIGUOUS = "ambiguous"
    FAULTED = "faulted"


class SpatialAnalyzerOwnership(StrEnum):
    UNSPECIFIED = "unspecified"
    NONE = "none"
    EXTERNAL = "external"
    SERVER_LAUNCHED = "server_launched"
```

## SpatialAnalyzer SDK State

```python
@dataclass(frozen=True, slots=True)
class SpatialAnalyzerSdkLifecycleState:
    state_revision: int
    sdk_state: SpatialAnalyzerSdkState
    sdk_generation: int | None
    application_generation: int | None
    connection_state: SpatialAnalyzerConnectionState
    execution_readiness_state: SpatialAnalyzerExecutionReadinessState
    ready_for_mp: bool
    recovery_state: SpatialAnalyzerSdkRecoveryState
    last_incident: SpatialAnalyzerSdkIncident | None
    diagnostic_code: str | None


@dataclass(frozen=True, slots=True)
class SpatialAnalyzerSdkIncident:
    sdk_generation: int
    termination_kind: SpatialAnalyzerSdkTerminationKind
    execution_disposition: ExecutionDisposition | None
    operation_id: str | None
    diagnostic_code: str | None


class SpatialAnalyzerSdkState(StrEnum):
    UNSPECIFIED = "unspecified"
    STOPPED = "stopped"
    STARTING = "starting"
    RUNNING = "running"
    CONNECTING = "connecting"
    VERIFYING = "verifying"
    READY = "ready"
    STOPPING = "stopping"
    RECOVERING = "recovering"
    FAULTED = "faulted"


class SpatialAnalyzerSdkRecoveryState(StrEnum):
    UNSPECIFIED = "unspecified"
    NOT_REQUIRED = "not_required"
    RECOVERY_AVAILABLE = "recovery_available"
    OPERATOR_ACTION_REQUIRED = "operator_action_required"
    BLOCKED = "blocked"


class SpatialAnalyzerSdkTerminationKind(StrEnum):
    UNSPECIFIED = "unspecified"
    START_FAILED = "start_failed"
    SDK_PROCESS_EXITED = "sdk_process_exited"
    SDK_CONNECTION_LOST = "sdk_connection_lost"
    WORKER_PROCESS_EXITED = "worker_process_exited"
    CONTROL_CHANNEL_LOST = "control_channel_lost"
    WATCHDOG_TERMINATED = "watchdog_terminated"


class SpatialAnalyzerSdkRecoveryMode(StrEnum):
    REPLACE_WITHOUT_REPLAY = "replace_without_replay"


class SpatialAnalyzerConnectionState(StrEnum):
    UNSPECIFIED = "unspecified"
    DISCONNECTED = "disconnected"
    CONNECTING = "connecting"
    CONNECTED = "connected"
    FAULTED = "faulted"
    STOPPING = "stopping"


class SpatialAnalyzerExecutionReadinessState(StrEnum):
    UNSPECIFIED = "unspecified"
    UNVERIFIED = "unverified"
    VERIFYING = "verifying"
    EXECUTION_READY = "execution_ready"
    COMPETING_CLIENT_SUSPECTED = "competing_client_suspected"
    OPERATOR_RECOVERY_REQUIRED = "operator_recovery_required"


class ExecutionDisposition(StrEnum):
    UNSPECIFIED = "unspecified"
    NOT_STARTED = "not_started"
    STARTED_OUTCOME_UNKNOWN = "started_outcome_unknown"
    COMPLETED = "completed"
```

These enums preserve the public gRPC terms. In particular,
`STARTED_OUTCOME_UNKNOWN` is not converted to a generic connectivity error.

The client retains application and SDK generations and supplies generation
guards automatically. Callers never pass process IDs or generation values.

## Lifecycle Errors

```python
class BriosaSpatialAnalyzerError(BriosaError):
    kind: SpatialAnalyzerLifecycleFailureKind
    diagnostic_code: str
    recovery_guidance: LifecycleRecoveryGuidance
    state: SpatialAnalyzerLifecycleState


class BriosaSpatialAnalyzerSdkError(BriosaError):
    kind: SpatialAnalyzerSdkLifecycleFailureKind
    diagnostic_code: str
    recovery_guidance: LifecycleRecoveryGuidance
    state: SpatialAnalyzerSdkLifecycleState
```

The client decodes the typed lifecycle error detail returned by the relevant
service. An SDK identity mismatch maps to `BriosaCompatibilityError`; other SDK
lifecycle failures map to `BriosaSpatialAnalyzerSdkError`. Normal task
cancellation remains `asyncio.CancelledError`. MP-operation failures continue
to use the operation error hierarchy; the SDK incident is also visible through
`get_spatial_analyzer_sdk_state()`.

## Complete Example

```python
from briosa import BriosaClient


async with BriosaClient() as briosa:
    working_directory = await briosa.get_working_directory()
```

This is the default fresh-application procedure. Pass `BriosaStartOptions` to
select a different startup sequence or controlled application launch inputs.
Ordinary client stop or context exit never closes SpatialAnalyzer.
