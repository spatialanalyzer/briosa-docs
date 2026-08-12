---
title: Lifecycle Services
description: Next contract for independently managing the Briosa server, SpatialAnalyzer application, and SpatialAnalyzer SDK.
sidebar_label: Overview
---

# Lifecycle Services

Briosa exposes three deliberately separate lifecycles:

| Resource | Controlled through | Can be restarted without the others? |
| --- | --- | --- |
| Briosa gRPC server | A first-party client library, or the process host | — |
| SpatialAnalyzer application | `briosa.SpatialAnalyzerLifecycle` | Yes. The SDK must be stopped first. |
| SpatialAnalyzer SDK | `briosa.SpatialAnalyzerSdkLifecycle` | Yes. SpatialAnalyzer and the public server remain running. |

The public server may be available while neither SpatialAnalyzer nor the SDK is
running. Lifecycle and discovery RPCs remain available in that state. MP RPCs
become available only after a SpatialAnalyzer SDK generation is connected,
identity-verified, and execution-ready.

These RPCs are local-only in current releases and the v1 contract. The client,
Briosa server, SA SDK, and SpatialAnalyzer application operate on the same
Windows machine, and the public API remains on loopback. Secure remote
administration is [planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).
The v1 SDK connection target is local SpatialAnalyzer through
`ConnectEx("localhost", ...)`, not a caller-selected host or IP address.

## SpatialAnalyzer Application Service

```protobuf
service SpatialAnalyzerLifecycle {
  rpc GetSpatialAnalyzerState(GetSpatialAnalyzerStateRequest)
      returns (GetSpatialAnalyzerStateResponse);

  rpc LaunchSpatialAnalyzer(LaunchSpatialAnalyzerRequest)
      returns (LaunchSpatialAnalyzerResponse);

  rpc CloseOwnedSpatialAnalyzer(CloseOwnedSpatialAnalyzerRequest)
      returns (CloseOwnedSpatialAnalyzerResponse);
}
```

| RPC | Purpose |
| --- | --- |
| [`GetSpatialAnalyzerState`](./get-spatial-analyzer-state.md) | Read application and ownership state |
| [`LaunchSpatialAnalyzer`](./launch-spatial-analyzer.md) | Start the exact SpatialAnalyzer application approved for this server target, optionally with controlled initial content |
| [`CloseOwnedSpatialAnalyzer`](./close-owned-spatial-analyzer.md) | Close only an application launched by the current server |

Every successful application RPC returns `SpatialAnalyzerLifecycleState`:

```protobuf
message SpatialAnalyzerLifecycleState {
  uint64 state_revision = 1;
  SpatialAnalyzerApplicationState application_state = 2;
  SpatialAnalyzerOwnership ownership = 3;
  optional int32 application_generation = 4;
  optional string diagnostic_code = 5;
}
```

| Field | Meaning |
| --- | --- |
| `state_revision` | Monotonically increasing application-state revision within the current server process |
| `application_state` | Current safe application state |
| `ownership` | Whether this server may close the selected application |
| `application_generation` | Opaque server-local identity for the selected application; absent when no single application is selected |
| `diagnostic_code` | Optional curated, value-free explanation of the state |

```protobuf
enum SpatialAnalyzerApplicationState {
  SPATIAL_ANALYZER_APPLICATION_STATE_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_APPLICATION_STATE_NOT_RUNNING = 1;
  SPATIAL_ANALYZER_APPLICATION_STATE_STARTING = 2;
  SPATIAL_ANALYZER_APPLICATION_STATE_RUNNING = 3;
  SPATIAL_ANALYZER_APPLICATION_STATE_CLOSING = 4;
  SPATIAL_ANALYZER_APPLICATION_STATE_EXITED = 5;
  SPATIAL_ANALYZER_APPLICATION_STATE_AMBIGUOUS = 6;
  SPATIAL_ANALYZER_APPLICATION_STATE_FAULTED = 7;
}

enum SpatialAnalyzerOwnership {
  SPATIAL_ANALYZER_OWNERSHIP_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_OWNERSHIP_NONE = 1;
  SPATIAL_ANALYZER_OWNERSHIP_EXTERNAL = 2;
  SPATIAL_ANALYZER_OWNERSHIP_SERVER_LAUNCHED = 3;
}
```

`AMBIGUOUS` means Briosa cannot prove which local application owns the SDK
communication ports. `SERVER_LAUNCHED` is granted only when this server retained
the exact process identity created by `LaunchSpatialAnalyzer`. Process-name
discovery never grants ownership.

`LaunchSpatialAnalyzer` accepts only controlled SpatialAnalyzer inputs: an
optional local job file, an optional quick-start instrument in place of that
job, and a minimized-window flag. Executable selection, launch polling,
connection retries, and readiness-probe bounds remain trusted server
configuration. The RPC never accepts arbitrary process arguments or closes
machine-wide application processes.

## SpatialAnalyzer SDK Service

```protobuf
service SpatialAnalyzerSdkLifecycle {
  rpc GetSpatialAnalyzerSdkState(GetSpatialAnalyzerSdkStateRequest)
      returns (GetSpatialAnalyzerSdkStateResponse);

  rpc StartSpatialAnalyzerSdk(StartSpatialAnalyzerSdkRequest)
      returns (StartSpatialAnalyzerSdkResponse);

  rpc ConnectToSpatialAnalyzer(ConnectToSpatialAnalyzerRequest)
      returns (ConnectToSpatialAnalyzerResponse);

  rpc ReconnectToSpatialAnalyzer(ReconnectToSpatialAnalyzerRequest)
      returns (ReconnectToSpatialAnalyzerResponse);

  rpc StopSpatialAnalyzerSdk(StopSpatialAnalyzerSdkRequest)
      returns (StopSpatialAnalyzerSdkResponse);

  rpc RecoverSpatialAnalyzerSdk(RecoverSpatialAnalyzerSdkRequest)
      returns (RecoverSpatialAnalyzerSdkResponse);
}
```

| RPC | Purpose |
| --- | --- |
| [`GetSpatialAnalyzerSdkState`](./get-spatial-analyzer-sdk-state.md) | Diagnose SDK process, connection, readiness, and recovery state |
| [`StartSpatialAnalyzerSdk`](./start-spatial-analyzer-sdk.md) | Create a new disconnected SDK generation |
| [`ConnectToSpatialAnalyzer`](./connect-to-spatial-analyzer.md) | Connect the running SDK to local SpatialAnalyzer and establish MP readiness |
| [`ReconnectToSpatialAnalyzer`](./reconnect-to-spatial-analyzer.md) | Re-establish an unhealthy connection using the current live SDK generation |
| [`StopSpatialAnalyzerSdk`](./stop-spatial-analyzer-sdk.md) | Stop Briosa's SDK generation without closing SpatialAnalyzer or the server |
| [`RecoverSpatialAnalyzerSdk`](./recover-spatial-analyzer-sdk.md) | Replace a lost or faulted SDK generation in a disconnected state without replaying an MP command |

The SDK is not merely a connection flag. Briosa owns an isolated SDK/worker
generation, monitors it, and closes MP admission if the SDK engine, its worker,
or its control channel disappears.

## SDK State Shape

Every successful SDK lifecycle RPC returns `SpatialAnalyzerSdkLifecycleState`:

```protobuf
message SpatialAnalyzerSdkLifecycleState {
  uint64 state_revision = 1;
  SpatialAnalyzerSdkState sdk_state = 2;
  optional int32 sdk_generation = 3;
  optional int32 application_generation = 4;
  SpatialAnalyzerConnectionState connection_state = 5;
  SpatialAnalyzerExecutionReadinessState execution_readiness_state = 6;
  bool ready_for_mp = 7;
  SpatialAnalyzerSdkRecoveryState recovery_state = 8;
  optional SpatialAnalyzerSdkIncident last_incident = 9;
  optional string diagnostic_code = 10;
}

message SpatialAnalyzerSdkIncident {
  int32 sdk_generation = 1;
  SpatialAnalyzerSdkTerminationKind termination_kind = 2;
  optional ExecutionDisposition execution_disposition = 3;
  optional string operation_id = 4;
  optional string diagnostic_code = 5;
}
```

| Field | Meaning |
| --- | --- |
| `state_revision` | Monotonically increasing SDK-state revision within the current server process |
| `sdk_state` | Current lifecycle state of Briosa's SDK generation |
| `sdk_generation` | Opaque server-local identity for the current or most recently faulted SDK generation |
| `application_generation` | Application generation currently connected to this SDK; absent while disconnected |
| `connection_state` | SDK-to-SpatialAnalyzer connection state |
| `execution_readiness_state` | State of the generation-bound execution-channel proof |
| `ready_for_mp` | `true` only while MP services admit commands |
| `recovery_state` | Whether recovery is unnecessary, callable, requires operator action, or is blocked |
| `last_incident` | Most recent unexpected SDK-generation loss, retained even after successful recovery |
| `diagnostic_code` | Optional curated, value-free explanation of the current state |

`last_incident.execution_disposition` is present only when the incident was
associated with an admitted MP request. `STARTED_OUTCOME_UNKNOWN` means the
caller must reconcile application state before deciding whether to repeat that
operation. SDK replacement restores availability; it never proves the command
did not run.

```protobuf
enum SpatialAnalyzerSdkState {
  SPATIAL_ANALYZER_SDK_STATE_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_SDK_STATE_STOPPED = 1;
  SPATIAL_ANALYZER_SDK_STATE_STARTING = 2;
  SPATIAL_ANALYZER_SDK_STATE_RUNNING = 3;
  SPATIAL_ANALYZER_SDK_STATE_CONNECTING = 4;
  SPATIAL_ANALYZER_SDK_STATE_VERIFYING = 5;
  SPATIAL_ANALYZER_SDK_STATE_READY = 6;
  SPATIAL_ANALYZER_SDK_STATE_STOPPING = 7;
  SPATIAL_ANALYZER_SDK_STATE_RECOVERING = 8;
  SPATIAL_ANALYZER_SDK_STATE_FAULTED = 9;
}

enum SpatialAnalyzerSdkRecoveryState {
  SPATIAL_ANALYZER_SDK_RECOVERY_STATE_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_SDK_RECOVERY_STATE_NOT_REQUIRED = 1;
  SPATIAL_ANALYZER_SDK_RECOVERY_STATE_RECOVERY_AVAILABLE = 2;
  SPATIAL_ANALYZER_SDK_RECOVERY_STATE_OPERATOR_ACTION_REQUIRED = 3;
  SPATIAL_ANALYZER_SDK_RECOVERY_STATE_BLOCKED = 4;
}

enum SpatialAnalyzerSdkTerminationKind {
  SPATIAL_ANALYZER_SDK_TERMINATION_KIND_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_SDK_TERMINATION_KIND_START_FAILED = 1;
  SPATIAL_ANALYZER_SDK_TERMINATION_KIND_SDK_PROCESS_EXITED = 2;
  SPATIAL_ANALYZER_SDK_TERMINATION_KIND_SDK_CONNECTION_LOST = 3;
  SPATIAL_ANALYZER_SDK_TERMINATION_KIND_WORKER_PROCESS_EXITED = 4;
  SPATIAL_ANALYZER_SDK_TERMINATION_KIND_CONTROL_CHANNEL_LOST = 5;
  SPATIAL_ANALYZER_SDK_TERMINATION_KIND_WATCHDOG_TERMINATED = 6;
}

enum SpatialAnalyzerSdkRecoveryMode {
  SPATIAL_ANALYZER_SDK_RECOVERY_MODE_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_SDK_RECOVERY_MODE_REPLACE_WITHOUT_REPLAY = 1;
}
```

`SpatialAnalyzerConnectionState` and
`SpatialAnalyzerExecutionReadinessState` retain their definitions from
`DiscoveryService`. `ExecutionDisposition` is the shared operation-outcome
enum: `NOT_STARTED`, `STARTED_OUTCOME_UNKNOWN`, or `COMPLETED`.

## Monitoring and Unexpected SDK Exit

While an SDK generation is active, Briosa monitors the isolated worker, SDK
engine process, and control channel. It also updates SDK state immediately when
an SDK call proves the connection is no longer usable.

If another program closes the SA SDK engine:

1. Briosa closes MP admission for that SDK generation.
2. The affected call receives a typed operation failure. Its execution
   disposition states what Briosa can prove.
3. `GetSpatialAnalyzerSdkState` reports the failed generation and incident.
4. The SDK remains faulted until a caller requests recovery after any required
   operator action.
5. `RecoverSpatialAnalyzerSdk` creates a new disconnected SDK generation.
6. A caller explicitly connects the replacement when SpatialAnalyzer is
   available.

Briosa never retries the interrupted MP command as part of recovery.

## Generation Guards

Application and SDK generation values are opaque and valid only for the
current Briosa server process. Direct gRPC callers pass the observed generation
on transitions that could affect a resource. A stale request fails with
`ABORTED` instead of stopping, closing, or replacing a newer generation.

First-party clients retain these values and supply the guards automatically.

## Typed Failure Details

Application lifecycle failures use canonical gRPC status codes and, when a
structured detail is available, a serialized `SpatialAnalyzerLifecycleError`
in `briosa-spatial-analyzer-lifecycle-error-bin` response metadata.

```protobuf
message SpatialAnalyzerLifecycleError {
  string rpc = 1;
  SpatialAnalyzerLifecycleFailureKind kind = 2;
  string diagnostic_code = 3;
  SpatialAnalyzerLifecycleState state = 4;
  LifecycleRecoveryGuidance recovery_guidance = 5;
}

enum SpatialAnalyzerLifecycleFailureKind {
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_VALIDATION = 1;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_STATE_CONFLICT = 2;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_APPLICATION_NOT_FOUND = 3;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_APPLICATION_AMBIGUOUS = 4;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_LAUNCH_FAILED = 5;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_NOT_OWNED = 6;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_SDK_NOT_STOPPED = 7;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_TIMEOUT = 8;
  SPATIAL_ANALYZER_LIFECYCLE_FAILURE_KIND_INTERNAL = 9;
}
```

SDK lifecycle failures carry a serialized
`SpatialAnalyzerSdkLifecycleError` in
`briosa-spatial-analyzer-sdk-lifecycle-error-bin` response metadata.

```protobuf
message SpatialAnalyzerSdkLifecycleError {
  string rpc = 1;
  SpatialAnalyzerSdkLifecycleFailureKind kind = 2;
  string diagnostic_code = 3;
  SpatialAnalyzerSdkLifecycleState state = 4;
  LifecycleRecoveryGuidance recovery_guidance = 5;
}

enum SpatialAnalyzerSdkLifecycleFailureKind {
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_VALIDATION = 1;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_STATE_CONFLICT = 2;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_APPLICATION_NOT_FOUND = 3;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_APPLICATION_AMBIGUOUS = 4;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_SDK_ALREADY_ACTIVE = 5;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_SDK_NOT_RUNNING = 6;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_SDK_START_FAILED = 7;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_SDK_STOP_FAILED = 8;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_RECOVERY_NOT_REQUIRED = 9;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_SDK_RECOVERY_FAILED = 10;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_IDENTITY_MISMATCH = 11;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_OPERATOR_ACTION_REQUIRED = 12;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_TIMEOUT = 13;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_INTERNAL = 14;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_SDK_ALREADY_CONNECTED = 15;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_SDK_CONNECTION_FAILED = 16;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_RECONNECT_NOT_REQUIRED = 17;
  SPATIAL_ANALYZER_SDK_LIFECYCLE_FAILURE_KIND_SDK_RECOVERY_REQUIRED = 18;
}

enum LifecycleRecoveryGuidance {
  LIFECYCLE_RECOVERY_GUIDANCE_UNSPECIFIED = 0;
  LIFECYCLE_RECOVERY_GUIDANCE_NONE = 1;
  LIFECYCLE_RECOVERY_GUIDANCE_REFRESH_STATE = 2;
  LIFECYCLE_RECOVERY_GUIDANCE_RETRY_AFTER_STATE_CHANGE = 3;
  LIFECYCLE_RECOVERY_GUIDANCE_CORRECT_ENVIRONMENT = 4;
  LIFECYCLE_RECOVERY_GUIDANCE_STOP_SDK_FIRST = 5;
  LIFECYCLE_RECOVERY_GUIDANCE_RECOVER_SDK_WITHOUT_REPLAY = 6;
  LIFECYCLE_RECOVERY_GUIDANCE_OPERATOR_ACTION_REQUIRED = 7;
}
```

Failure details contain no executable path, process ID, SDK status code,
registry value, license information, identity evidence reference, MP argument,
or MP result. An MP call interrupted by SDK loss separately returns the normal
typed operation error, including its execution disposition and replay guidance.

## Lifecycle Rules

- Starting SpatialAnalyzer and starting the SDK are separate operations.
- Starting the SDK does not launch or connect to SpatialAnalyzer.
- Connecting or reconnecting is the only transition that calls
  `ConnectEx("localhost", ...)` and attempts to establish MP readiness.
- Stopping or recovering the SDK never closes SpatialAnalyzer or the public
  Briosa server.
- Closing SpatialAnalyzer requires the SDK to be stopped first.
- Stopping the Briosa server stops its owned SDK generation, but never closes
  SpatialAnalyzer.
- Briosa never closes arbitrary SpatialAnalyzer or SDK processes that it did
  not create and still identify exactly.
- Lifecycle transitions are serialized. A conflicting transition fails rather
  than racing another request.
- These RPCs are loopback-only. Remote administration requires a later release
  with authenticated transport, authorization, and exclusive-controller policy.

See [Manage Briosa, SDK, and SpatialAnalyzer Lifecycles](/docs/concepts/client-lifecycle)
for the end-to-end workflow.
