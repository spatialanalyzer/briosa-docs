---
title: GetSpatialAnalyzerState
description: Read the current SpatialAnalyzer application and ownership state.
---

# `GetSpatialAnalyzerState`

Returns a low-sensitivity snapshot of the SpatialAnalyzer application selected
by this Briosa server. SDK state is intentionally returned by
[`GetSpatialAnalyzerSdkState`](./get-spatial-analyzer-sdk-state.md) instead.

## Method

```text
briosa.SpatialAnalyzerLifecycle/GetSpatialAnalyzerState
```

## Request

```protobuf
message GetSpatialAnalyzerStateRequest {}
```

The request has no fields.

## Response

```protobuf
message GetSpatialAnalyzerStateResponse {
  SpatialAnalyzerLifecycleState state = 1;
}
```

Example response for an application that was already running:

```json
{
  "state": {
    "stateRevision": "7",
    "applicationState": "SPATIAL_ANALYZER_APPLICATION_STATE_RUNNING",
    "ownership": "SPATIAL_ANALYZER_OWNERSHIP_EXTERNAL",
    "applicationGeneration": 3
  }
}
```

See the [application state definition](./lifecycle.md#spatialanalyzer-application-service)
for every field and enum value.

## Behavior

- The response is a point-in-time observation, not a lease.
- The call does not launch, close, or otherwise change SpatialAnalyzer.
- `state_revision` changes whenever application or ownership state changes.
- `application_generation` changes when the selected application changes.
- Process discovery may report `AMBIGUOUS`; Briosa never guesses which process
  owns the SDK communication ports.
- The RPC remains available when no SDK is running and MP services are not
  ready.

## gRPC Status

| Status | Meaning |
| --- | --- |
| `OK` | A state snapshot was returned. |
| `CANCELLED` | The caller cancelled the request. |
| `DEADLINE_EXCEEDED` | The caller deadline expired. |
| `INTERNAL` | Briosa could not produce a valid safe snapshot. |

The request is safe to repeat.
