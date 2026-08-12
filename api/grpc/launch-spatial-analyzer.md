---
title: LaunchSpatialAnalyzer
description: Launch the exact SpatialAnalyzer application approved for the current Briosa server target.
---

# `LaunchSpatialAnalyzer`

Starts a new exact-target SpatialAnalyzer application. It neither starts nor
connects the SA SDK. A disconnected SDK may already be running. Call
[`ConnectToSpatialAnalyzer`](./connect-to-spatial-analyzer.md) after the
application reaches `RUNNING`.

## Method

```text
briosa.SpatialAnalyzerLifecycle/LaunchSpatialAnalyzer
```

## Request

```protobuf
message LaunchSpatialAnalyzerRequest {
  oneof initial_content {
    string job_file_path = 1;
    string quick_start_instrument_name = 2;
  }

  bool start_minimized = 3;
}
```

| Field | Required | Meaning |
| --- | --- | --- |
| `job_file_path` | No | Absolute path to an SA job file on the local Briosa machine. |
| `quick_start_instrument_name` | No | SA instrument name to pass through the documented quick-start behavior for a new job. |
| `start_minimized` | No | Start the application minimized. Defaults to `false`. |

`job_file_path` and `quick_start_instrument_name` are mutually exclusive.
Omitting both starts a new empty job. The request intentionally contains no
executable path, release identifier, arbitrary command-line arguments, working
directory, environment variables, or close-existing-process option. The
exact-target server resolves its approved installation from trusted local
configuration.

The SA executable also documents launch-time external and embedded MP options.
Briosa does not expose those options in the current contract because they can
begin MP execution before SDK connection, identity verification, and MP
readiness have been established.

## Response

```protobuf
message LaunchSpatialAnalyzerResponse {
  SpatialAnalyzerLifecycleState state = 1;
}
```

Example successful response:

```json
{
  "state": {
    "stateRevision": "4",
    "applicationState": "SPATIAL_ANALYZER_APPLICATION_STATE_RUNNING",
    "ownership": "SPATIAL_ANALYZER_OWNERSHIP_SERVER_LAUNCHED",
    "applicationGeneration": 2
  }
}
```

Retain `application_generation`. Direct gRPC callers must send it to
`CloseOwnedSpatialAnalyzer`. First-party clients manage the generation
automatically.

## Preconditions

- No SDK generation is connected, connecting, verifying, stopping, or
  recovering. A running disconnected SDK is allowed.
- No existing eligible SpatialAnalyzer application already owns the SDK ports.
- The exact-target server can resolve and validate its approved installation.
- No other lifecycle transition is active.

## Behavior

1. Briosa resolves the trusted executable for its compiled exact target.
2. It validates the selected initial content and constructs only the approved
   SpatialAnalyzer arguments.
3. It starts the process without shell interpretation.
4. It retains the exact process handle and creation identity internally.
5. It waits within the configured application-startup bound.
6. It returns `RUNNING` and `SERVER_LAUNCHED` without claiming SDK, instrument,
   job-load, or MP readiness.

The RPC never closes an existing application. If launch fails before a usable
application generation is published, Briosa may clean up only the exact partial
process it created. Briosa does not log the supplied job path or instrument name
by default.

## gRPC Status

| Status | Failure Kind | Meaning |
| --- | --- | --- |
| `OK` | — | A new owned application generation is running. |
| `INVALID_ARGUMENT` | `VALIDATION` | A path or instrument name is blank, malformed, or unsupported. |
| `FAILED_PRECONDITION` | `STATE_CONFLICT` | An application, connected SDK, or lifecycle transition prevents launch. |
| `FAILED_PRECONDITION` | `APPLICATION_AMBIGUOUS` | Existing applications make SDK-port ownership ambiguous. |
| `NOT_FOUND` | `LAUNCH_FAILED` | The approved exact-target installation or requested job file could not be resolved. |
| `UNAVAILABLE` | `LAUNCH_FAILED` | The process exited or failed during startup. |
| `DEADLINE_EXCEEDED` | `TIMEOUT` | The server-side application-startup bound expired. |
| `CANCELLED` | — | The caller cancelled its wait; query application state before another transition. |
| `INTERNAL` | `INTERNAL` | Briosa could not preserve a valid lifecycle state. |

Do not blindly repeat a cancelled or timed-out launch. Call
[`GetSpatialAnalyzerState`](./get-spatial-analyzer-state.md) first.
