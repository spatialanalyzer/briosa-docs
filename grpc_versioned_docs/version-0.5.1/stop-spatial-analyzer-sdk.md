---
title: StopSpatialAnalyzerSdk
description: Stop one Briosa-owned SDK generation without closing SpatialAnalyzer or the Briosa server.
---

# `StopSpatialAnalyzerSdk`

Ends Briosa's current SDK generation and closes MP command admission while
leaving the SpatialAnalyzer application and public Briosa server running.

## Method

```text
briosa.SpatialAnalyzerSdkLifecycle/StopSpatialAnalyzerSdk
```

## Request

```protobuf
message StopSpatialAnalyzerSdkRequest {
  int32 expected_sdk_generation = 1;
}
```

| Field | Required | Meaning |
| --- | --- | --- |
| `expected_sdk_generation` | Yes | Nonzero SDK generation returned by start, recovery, or state inspection. Stop fails if a newer generation replaced it. |

## Response

```protobuf
message StopSpatialAnalyzerSdkResponse {
  SpatialAnalyzerSdkLifecycleState state = 1;
}
```

Example successful response:

```json
{
  "state": {
    "stateRevision": "13",
    "sdkState": "SPATIAL_ANALYZER_SDK_STATE_STOPPED",
    "connectionState": "SPATIAL_ANALYZER_CONNECTION_STATE_DISCONNECTED",
    "executionReadinessState": "SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_UNVERIFIED",
    "readyForMp": false,
    "recoveryState": "SPATIAL_ANALYZER_SDK_RECOVERY_STATE_NOT_REQUIRED"
  }
}
```

## Preconditions

- The supplied SDK generation is current.
- No other lifecycle transition is active.

A faulted generation can be stopped to abandon it instead of recovering it.
The incident remains available until another incident occurs or the server
process ends.

## Behavior

- MP command admission closes before SDK shutdown begins.
- Queued commands that definitely have not started are rejected as
  `NOT_STARTED`.
- Stop does not claim to cancel an in-flight COM call.
- If a command may have started, its result remains
  `STARTED_OUTCOME_UNKNOWN`; stopping the SDK never makes replay safe.
- Briosa closes the SDK connection, SDK engine, and isolated worker associated
  with the guarded generation.
- SpatialAnalyzer remains open regardless of application ownership.
- Briosa does not close SDK processes owned by other programs.

## gRPC Status

| Status | Failure Kind | Meaning |
| --- | --- | --- |
| `OK` | — | The specified SDK generation stopped and MP readiness is false. |
| `INVALID_ARGUMENT` | `VALIDATION` | The SDK generation is zero or malformed. |
| `ABORTED` | `STATE_CONFLICT` | A newer SDK generation exists. Refresh state. |
| `FAILED_PRECONDITION` | `SDK_NOT_RUNNING` | No current or faulted SDK generation can be stopped. |
| `FAILED_PRECONDITION` | `STATE_CONFLICT` | Another lifecycle transition is active. |
| `UNAVAILABLE` | `SDK_STOP_FAILED` | Graceful SDK shutdown failed; state reports whether forced worker isolation completed. |
| `DEADLINE_EXCEEDED` | `TIMEOUT` | The server-side SDK shutdown bound expired. Query state before another transition. |
| `CANCELLED` | — | The caller cancelled its wait; query state before another transition. |
| `INTERNAL` | `INTERNAL` | Briosa could not preserve a valid lifecycle state. |

The operation is generation-guarded, but a cancelled or timed-out stop is not
blindly repeatable. Refresh state first.
