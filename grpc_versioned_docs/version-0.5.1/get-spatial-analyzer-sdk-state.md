---
title: GetSpatialAnalyzerSdkState
description: Diagnose the current SpatialAnalyzer SDK process, connection, readiness, incident, and recovery state.
---

# `GetSpatialAnalyzerSdkState`

Returns the state of Briosa's independently managed SA SDK generation. Use this
RPC to distinguish a stopped SDK from a failed process, lost connection,
watchdog termination, or recovery that requires operator action.

## Method

```text
briosa.SpatialAnalyzerSdkLifecycle/GetSpatialAnalyzerSdkState
```

## Request

```protobuf
message GetSpatialAnalyzerSdkStateRequest {}
```

The request has no fields.

## Response

```protobuf
message GetSpatialAnalyzerSdkStateResponse {
  SpatialAnalyzerSdkLifecycleState state = 1;
}
```

Example after another program closes the SDK engine while Briosa is idle:

```json
{
  "state": {
    "stateRevision": "18",
    "sdkState": "SPATIAL_ANALYZER_SDK_STATE_FAULTED",
    "sdkGeneration": 5,
    "applicationGeneration": 2,
    "connectionState": "SPATIAL_ANALYZER_CONNECTION_STATE_FAULTED",
    "executionReadinessState": "SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_UNVERIFIED",
    "readyForMp": false,
    "recoveryState": "SPATIAL_ANALYZER_SDK_RECOVERY_STATE_RECOVERY_AVAILABLE",
    "lastIncident": {
      "sdkGeneration": 5,
      "terminationKind": "SPATIAL_ANALYZER_SDK_TERMINATION_KIND_SDK_PROCESS_EXITED",
      "diagnosticCode": "sdk-process-exited"
    },
    "diagnosticCode": "sdk-recovery-available"
  }
}
```

Example after SDK loss during an admitted MP command:

```json
{
  "state": {
    "stateRevision": "24",
    "sdkState": "SPATIAL_ANALYZER_SDK_STATE_FAULTED",
    "sdkGeneration": 7,
    "applicationGeneration": 2,
    "connectionState": "SPATIAL_ANALYZER_CONNECTION_STATE_FAULTED",
    "executionReadinessState": "SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_UNVERIFIED",
    "readyForMp": false,
    "recoveryState": "SPATIAL_ANALYZER_SDK_RECOVERY_STATE_RECOVERY_AVAILABLE",
    "lastIncident": {
      "sdkGeneration": 7,
      "terminationKind": "SPATIAL_ANALYZER_SDK_TERMINATION_KIND_SDK_PROCESS_EXITED",
      "executionDisposition": "EXECUTION_DISPOSITION_STARTED_OUTCOME_UNKNOWN",
      "operationId": "file_operations.get_working_directory",
      "diagnosticCode": "sdk-process-exited-during-execution"
    },
    "diagnosticCode": "sdk-recovery-available"
  }
}
```

## Behavior

- For an active generation, the RPC asks the SDK supervisor to refresh the
  tracked SDK-process and worker-control liveness within a short bound before
  returning.
- Briosa monitors its SDK engine process, isolated worker, and control channel.
- An SDK call that proves the connection unusable updates state immediately.
- The liveness refresh does not execute an MP command and does not replace the
  generation-bound execution-readiness proof.
- The call itself does not start, stop, or recover the SDK.
- `ready_for_mp` becomes false before or atomically with publishing a failed
  generation.
- `last_incident` survives requested recovery so an
  application can diagnose what happened to the previous generation.
- `operation_id` correlates an incident with a typed MP-operation failure. No
  MP arguments or result data appear in lifecycle state.

If `execution_disposition` is `STARTED_OUTCOME_UNKNOWN`, inspect or reconcile
SpatialAnalyzer state before considering any replay. Recovery never changes
that disposition.

## gRPC Status

| Status | Meaning |
| --- | --- |
| `OK` | An SDK state snapshot was returned. |
| `CANCELLED` | The caller cancelled the request. |
| `DEADLINE_EXCEEDED` | The caller deadline expired. |
| `INTERNAL` | Briosa could not produce a valid safe snapshot. |

The request is safe to repeat.
