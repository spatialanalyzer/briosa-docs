---
title: BriosaClient Lifecycle
description: Released client API for independently managing Briosa, SpatialAnalyzer, and the SpatialAnalyzer SDK from Python.
sidebar_label: Overview and Types
---

# `BriosaClient` Lifecycle

[SA 2026.1.0529.7](/api/python/lifecycle) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/lifecycle)

`BriosaClient` controls three separate resources. By default,
[`start()`](./start.md) launches the local Briosa server, starts a disconnected
SDK generation, launches a fresh SpatialAnalyzer application, connects the SDK,
and waits for MP readiness. The individual lifecycle methods remain available
for explicit control, diagnosis, and recovery.

## Methods

| Resource | Method | Result | Purpose |
| --- | --- | --- | --- |
| Briosa | [`start`](./start.md) | `None` | Launch the local server and complete the default ready-for-MP startup procedure |
| Briosa | [`get_server_snapshot`](#server-snapshot-and-capabilities) | `BriosaServerSnapshot` | Read server identity, readiness, the admission profile, and the admitted operations |
| Briosa | [`list_capabilities`](#server-snapshot-and-capabilities) | `BriosaCapabilityListing` | List the admitted operations, and optionally the denied ones, for diagnosis |
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
    startup_timeout: float = 120.0


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
complete startup procedure requested by that call. Its 120-second default
covers the server's default worst case of about 100 seconds for a start that
launches SpatialAnalyzer, with a 20-second margin. If you raise the server's
`Briosa:Worker:StartupTimeout`, `Briosa:Worker:ReadinessProbeTimeout`, or
`Briosa:SpatialAnalyzer:ApplicationStartupTimeout`, raise the startup budget
too. SpatialAnalyzer launch, SDK connection, identity verification, and
readiness probing retain their own server-configured safety bounds.
`command_timeout=None` means the client adds no MP-command deadline.

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
lifecycle failures map to `BriosaSpatialAnalyzerSdkError`. MP-operation
failures use the [operation error hierarchy](#operation-errors); the SDK
incident is also visible through `get_spatial_analyzer_sdk_state()`.

```python
class SpatialAnalyzerLifecycleFailureKind(StrEnum):
    UNSPECIFIED = "unspecified"
    VALIDATION = "validation"
    STATE_CONFLICT = "state_conflict"
    APPLICATION_NOT_FOUND = "application_not_found"
    APPLICATION_AMBIGUOUS = "application_ambiguous"
    LAUNCH_FAILED = "launch_failed"
    NOT_OWNED = "not_owned"
    SDK_NOT_STOPPED = "sdk_not_stopped"
    TIMEOUT = "timeout"
    INTERNAL = "internal"
    CALLER_CANCELLED = "caller_cancelled"
    CALLER_DEADLINE_EXCEEDED = "caller_deadline_exceeded"


class SpatialAnalyzerSdkLifecycleFailureKind(StrEnum):
    UNSPECIFIED = "unspecified"
    VALIDATION = "validation"
    STATE_CONFLICT = "state_conflict"
    APPLICATION_NOT_FOUND = "application_not_found"
    APPLICATION_AMBIGUOUS = "application_ambiguous"
    SDK_ALREADY_ACTIVE = "sdk_already_active"
    SDK_NOT_RUNNING = "sdk_not_running"
    SDK_START_FAILED = "sdk_start_failed"
    SDK_STOP_FAILED = "sdk_stop_failed"
    RECOVERY_NOT_REQUIRED = "recovery_not_required"
    SDK_RECOVERY_FAILED = "sdk_recovery_failed"
    IDENTITY_MISMATCH = "identity_mismatch"
    OPERATOR_ACTION_REQUIRED = "operator_action_required"
    TIMEOUT = "timeout"
    INTERNAL = "internal"
    SDK_ALREADY_CONNECTED = "sdk_already_connected"
    SDK_CONNECTION_FAILED = "sdk_connection_failed"
    RECONNECT_NOT_REQUIRED = "reconnect_not_required"
    SDK_RECOVERY_REQUIRED = "sdk_recovery_required"
    CALLER_CANCELLED = "caller_cancelled"
    CALLER_DEADLINE_EXCEEDED = "caller_deadline_exceeded"
```

`CALLER_CANCELLED` and `CALLER_DEADLINE_EXCEEDED` (contract major 3) describe
the caller's own interruption, never a state conflict, and the client never
retries them. gRPC rarely delivers them: cancelling the awaiting task raises
`asyncio.CancelledError`, and a lifecycle `timeout` raises
`BriosaTransportError` with `transport-deadline-exceeded`.

### After an Abandoned Lifecycle Call

A contract-major-3 server finishes a start, connection, reconnection, or
recovery it has accepted under its own bounds, even after the caller stops
waiting through a `timeout`, the startup budget, or task cancellation.

- After a cancelled or timed-out lifecycle call, refresh state with
  `get_spatial_analyzer_sdk_state()` before deciding what to do: the startup
  you abandoned may still produce a ready generation. Call
  `get_server_snapshot()` to reopen MP calls on it.
- Treat `sdk-lifecycle-transition-in-progress` (`STATE_CONFLICT`,
  `REFRESH_STATE`) as "refresh and retry later". Stop a generation you own only
  after the accepted transition has ended.
- After a launch timeout, the server may still bring SpatialAnalyzer to
  `RUNNING`. Refresh application state before launching again, and treat
  `application-lifecycle-transition-in-progress` the same way.

## Server Snapshot and Capabilities

```python
async def get_server_snapshot(
    *,
    timeout: float | None = None,
) -> BriosaServerSnapshot: ...

async def list_capabilities(
    *,
    include_denied: bool = False,
    timeout: float | None = None,
) -> BriosaCapabilityListing: ...


@dataclass(frozen=True, slots=True)
class BriosaServerSnapshot:
    briosa_version: str
    source_revision: str
    protocol_package: str
    spatial_analyzer_target: str
    ready_for_mp: bool
    operations: tuple[BriosaOperationCapability, ...]
    admission_profile: str
    policy_fingerprint: str


@dataclass(frozen=True, slots=True)
class BriosaOperationCapability:
    operation_id: str
    grpc_service: str
    rpc: str
    fully_qualified_method: str
    risk_flags: tuple[OperationRiskFlag, ...] = ()
    duration_class: OperationDurationClass = OperationDurationClass.UNSPECIFIED
    validation_status: OperationValidationStatus = OperationValidationStatus.UNSPECIFIED
    admission: OperationAdmission = OperationAdmission.UNSPECIFIED


@dataclass(frozen=True, slots=True, kw_only=True)
class BriosaCapabilityListing:
    admission_profile: str
    policy_fingerprint: str
    operations: tuple[BriosaOperationCapability, ...]


class OperationRiskFlag(StrEnum):
    UNSPECIFIED = "unspecified"
    FILESYSTEM_METADATA = "filesystem_metadata"
    FILESYSTEM_READ = "filesystem_read"
    FILESYSTEM_WRITE = "filesystem_write"
    FILESYSTEM_DELETE = "filesystem_delete"
    DESTRUCTIVE = "destructive"
    CODE_EXECUTION = "code_execution"
    PHYSICAL_MOTION = "physical_motion"
    DEVICE_SESSION = "device_session"
    DEVICE_CONFIG = "device_config"
    INTERACTIVE_UI = "interactive_ui"
    EXTERNAL_IO = "external_io"
    UNKNOWN = "unknown"


class OperationDurationClass(StrEnum):
    UNSPECIFIED = "unspecified"
    QUICK = "quick"
    LONG_RUNNING = "long_running"
    INTERACTIVE = "interactive"
    UNKNOWN = "unknown"


class OperationValidationStatus(StrEnum):
    UNSPECIFIED = "unspecified"
    NO_RECORDED_GAP = "no_recorded_gap"
    FIXTURE_PENDING = "fixture_pending"
    AT_RISK_UNVALIDATED = "at_risk_unvalidated"
    UNKNOWN = "unknown"


class OperationAdmission(StrEnum):
    UNSPECIFIED = "unspecified"
    ADMITTED = "admitted"
    DENIED_PROFILE = "denied_profile"
    DENIED_FLAG = "denied_flag"
    DENIED_OVERRIDE = "denied_override"
    DENIED_EXCLUSIVE = "denied_exclusive"
    DENIED_UNREVIEWED = "denied_unreviewed"
    UNKNOWN = "unknown"
```

- The snapshot reports the server's resolved `admission_profile` (`read-only`,
  `standard`, `device`, or `full`) and an opaque `policy_fingerprint`. Compare
  the fingerprint only for equality.
- Each capability carries its reviewed `risk_flags` (an ordered set; empty
  means no reviewed risk applies), `duration_class`, `validation_status`, and
  `admission`. A value that a later 3.x revision adds maps to `UNKNOWN`.
  Validation status is informational.
- The snapshot's operations are the admitted ones only. The client takes
  admission from the server and never pre-validates a call or its options; the
  server decides.
- `list_capabilities(include_denied=True)` is a diagnostic listing that also
  returns each denied operation, with its denial reason in `admission`. The
  listing's `admitted` and `denied` properties split `operations` by
  `admission`. It never makes an operation callable or changes the admitted set.
  `BriosaServerSnapshot.supports(fully_qualified_method)` reports whether the
  snapshot admits a method.
- The packaged `standard` profile does not admit device sessions, device
  configuration, motion, code execution, external IO, file deletion, or
  operator UI. The seven `device_config` operations need `Profile=device`,
  `full`, or an override; interactive operations need the explicit
  `Flags:interactive_ui=allow` opt-in. Methods for denied and exclusive
  operations remain, and a denied call fails with `POLICY_DENIED` and
  `NOT_STARTED`.

MP admission needs both the SDK state and the client's latest snapshot to
report readiness. When the startup did not connect the SDK, or after an
abandoned lifecycle call, call `get_server_snapshot()` once the connection
succeeds.

## MP Completion

```python
MpCompletionObserver = Callable[[MpCompletion], object]


@dataclass(frozen=True, slots=True, kw_only=True)
class MpCompletion:
    state: MpExecutionState
    mp_result_code: int


class MpExecutionState(StrEnum):
    UNSPECIFIED = "unspecified"
    SUCCEEDED = "succeeded"
    EXECUTE_STEP_REJECTED = "execute_step_rejected"
    FAILED = "failed"
    RESULT_UNAVAILABLE = "result_unavailable"
    ARGUMENT_REJECTED = "argument_rejected"
    PARTIAL_SUCCESS = "partial_success"
```

Every MP method takes the keyword-only `on_mp_completion` observer (contract
major 3). An MP that returns code 4 (PARTIAL SUCCESS) did its work, but not all
of its intended effect. The method returns its outputs as usual and never
raises or retries. The observer receives one `MpCompletion`, `SUCCEEDED` with
MP code 2 or `PARTIAL_SUCCESS` with code 4, before the method returns:

```python
completions: list[MpCompletion] = []
directory = await briosa.get_working_directory(on_mp_completion=completions.append)
if completions[0].state is MpExecutionState.PARTIAL_SUCCESS:
    ...
```

The client checks every MP success, whether or not you pass an observer: the
execution details must pair `SUCCEEDED` with MP code 2 or `PARTIAL_SUCCESS`
with code 4. Anything else, including a missing code, is `BriosaProtocolError`
(`mp-completion-invalid`). The observer runs before the outputs are mapped, so
it hears of a success even when the outputs then fail to map. A failed call
reports no completion, and return types never change.

## Operation Errors

```python
class BriosaOperationError(BriosaError):
    status_code: RpcStatusCode
    failure: OperationFailure
    completion_unknown: bool
    reconciliation_required: bool


class BriosaTransportError(BriosaError):
    status_code: RpcStatusCode
    diagnostic_code: str


@dataclass(frozen=True, slots=True, kw_only=True)
class OperationFailure:
    operation_id: str
    kind: OperationFailureKind
    diagnostic_code: str
    execution_disposition: ExecutionDisposition
    recovery_guidance: RecoveryGuidance
    replay_guidance: ReplayGuidance
    replay_safety: ReplaySafety
    mp_execution: MpExecutionDetails | None = None
    worker_generation: int | None = None


@dataclass(frozen=True, slots=True, kw_only=True)
class MpExecutionDetails:
    state: MpExecutionState
    mp_result_code: int | None = None
    output_retrievals: tuple[OutputRetrievalDetails, ...] = ()


@dataclass(frozen=True, slots=True, kw_only=True)
class OutputRetrievalDetails:
    field_name: str
    state: OutputRetrievalState
    diagnostic_code: str | None = None


class OperationFailureKind(StrEnum):
    UNSPECIFIED = "unspecified"
    VALIDATION = "validation"
    UNSUPPORTED = "unsupported"
    SPATIAL_ANALYZER_UNAVAILABLE = "spatial_analyzer_unavailable"
    WORKER_UNAVAILABLE = "worker_unavailable"
    CALLER_CANCELLED = "caller_cancelled"
    CALLER_DEADLINE_EXCEEDED = "caller_deadline_exceeded"
    WORKER_WATCHDOG_TIMEOUT = "worker_watchdog_timeout"
    WORKER_FAILURE = "worker_failure"
    EXECUTE_STEP_REJECTED = "execute_step_rejected"
    MP_FAILURE = "mp_failure"
    OUTPUT_RETRIEVAL_FAILURE = "output_retrieval_failure"
    INTERNAL = "internal"
    POLICY_DENIED = "policy_denied"
    MP_RESULT_RETRIEVAL_FAILURE = "mp_result_retrieval_failure"
    SDK_ARGUMENT_REJECTED = "sdk_argument_rejected"
    OVERLOADED = "overloaded"
    SDK_CALL_FAULTED = "sdk_call_faulted"


class OutputRetrievalState(StrEnum):
    UNSPECIFIED = "unspecified"
    RETRIEVED = "retrieved"
    NOT_ATTEMPTED = "not_attempted"
    FAILED = "failed"


class RecoveryGuidance(StrEnum):
    UNSPECIFIED = "unspecified"
    NONE = "none"
    WAIT_FOR_READINESS = "wait_for_readiness"
    WORKER_REPLACEMENT = "worker_replacement"
    OPERATOR_INTERVENTION_REQUIRED = "operator_intervention_required"


class ReplayGuidance(StrEnum):
    UNSPECIFIED = "unspecified"
    DO_NOT_REPLAY = "do_not_replay"
    MAY_REPLAY = "may_replay"
    RECONCILE_BEFORE_REPLAY = "reconcile_before_replay"


class ReplaySafety(StrEnum):
    UNSPECIFIED = "unspecified"
    SAFE = "safe"
    UNSAFE = "unsafe"
    UNKNOWN = "unknown"


class RpcStatusCode(StrEnum):
    OK = "ok"
    CANCELLED = "cancelled"
    UNKNOWN = "unknown"
    INVALID_ARGUMENT = "invalid_argument"
    DEADLINE_EXCEEDED = "deadline_exceeded"
    NOT_FOUND = "not_found"
    ALREADY_EXISTS = "already_exists"
    PERMISSION_DENIED = "permission_denied"
    RESOURCE_EXHAUSTED = "resource_exhausted"
    FAILED_PRECONDITION = "failed_precondition"
    ABORTED = "aborted"
    OUT_OF_RANGE = "out_of_range"
    UNIMPLEMENTED = "unimplemented"
    INTERNAL = "internal"
    UNAVAILABLE = "unavailable"
    DATA_LOSS = "data_loss"
    UNAUTHENTICATED = "unauthenticated"
```

`BriosaOperationError` carries a valid typed operation failure;
`BriosaTransportError` reports a transport failure without one. Its
`diagnostic_code` is `transport-` followed by the gRPC status name in lower
kebab case, such as `transport-deadline-exceeded` or `transport-unavailable`
(a malformed typed detail reports `typed-error-malformed`).
Task cancellation stays `asyncio.CancelledError`.

- **MP execution details.** `OperationFailure.mp_execution` carries the
  server's value-free MP state, code, and output retrievals, and keeps
  `PARTIAL_SUCCESS` distinct, for example when code 4 came without an output.
  Four operations document code 4 as leaving the work undone and report it as
  an ordinary `MP_FAILURE` with code 4:
  `construct_point_from_survey_target_center`, `open_sa_file`,
  `open_template_file`, and `set_report_options_for_object`.
- **SDK call faults.** `SDK_CALL_FAULTED` reports that an SDK call threw during
  the MP sequence. The execution disposition gives the phase: `NOT_STARTED`
  (nothing ran), `STARTED_OUTCOME_UNKNOWN` (reconcile before any replay), or
  `COMPLETED` (an output getter failed after MP success). It is never folded
  into `INTERNAL` or a retrieval failure.
- **Modal dialogs.** A watchdog timeout or readiness failure caused by an open
  SpatialAnalyzer dialog reports diagnostic `sa-modal-dialog-open`, with
  recovery guidance `OPERATOR_INTERVENTION_REQUIRED` for operations. Replacing
  the worker doesn't clear the dialog: an operator must close it, and the
  client never retries. Unattended stations can set the server option
  `Briosa:SpatialAnalyzer:InteractionMode` to `Silent`; the default is
  `Unchanged`. SpatialAnalyzer keeps the mode across restarts and has no getter
  for it, and the client never sets it.
- **Rejected arguments.** An argument you leave unset is never sent as an empty
  value, 0, or false, and the client doesn't pre-validate empty values. The
  server rejects them before dispatch with `VALIDATION` and `NOT_STARTED`.
- **No automatic replay.** The client never retries an MP operation; follow
  the failure's replay guidance.

## Complete Example

```python
import asyncio

from briosa import BriosaClient


async def main():
    async with BriosaClient() as briosa:
        working_directory = await briosa.get_working_directory()


asyncio.run(main())
```

This is the default fresh-application procedure. Pass `BriosaStartOptions` to
select a different startup sequence or controlled application launch inputs.
Ordinary client stop or context exit never closes SpatialAnalyzer.

Client methods are coroutines. Call them inside an `async` function, and run
that function with `asyncio.run()` as shown here. Shorter examples elsewhere
in this reference show only the statements inside such a function.
