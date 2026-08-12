---
title: Readiness Is More Than Connection
---

# Readiness Is More Than Connection

The Briosa server performs these checks when a caller connects or reconnects
its running SA SDK to SpatialAnalyzer. Starting or recovering an SDK leaves it
disconnected and does not run the readiness checks. Application code does not
need to call health or discovery services before every MP command after a
connection is fully verified.

See [Start, Use, and Stop Briosa](./client-lifecycle) for the application-facing
lifecycle.

`ConnectEx` success is connection evidence, not proof that the SDK execution
channel can run an MP.

Experiments with SA `2026.1.0529.7` showed that several SDK clients can report
successful connections while a second client blocks indefinitely during
`ExecuteStep`. Briosa therefore admits MP work only after all of these are
true:

1. the worker process is control-ready;
2. the SDK is connected to SpatialAnalyzer;
3. activated-SDK and connected-SA evidence each exactly match the target; and
4. a bounded, value-discarding execution-channel probe succeeds for the current
   SDK generation.

The probe uses the normal serialized SDK path, confirms MP success and expected
output shape, and discards the working-directory value.

## Health Names

| Service Name | Meaning |
| --- | --- |
| `briosa.liveness` | The public host and lifecycle control plane are serving. Worker and SA state do not affect it. |
| `briosa.readiness` | The current SDK generation is ready to accept MP work. |

Use the explicit names for deployment checks. Restarting a healthy host merely
because SpatialAnalyzer is unavailable can make diagnosis harder.

If the probe times out or reports an ambiguous execution state, Briosa closes
MP admission and reports that operator action is required. If the current SDK
is still healthy, correct the condition and call reconnect. If the SDK or
worker is unhealthy, recover it and then call connect. Neither path replays the
failed probe or any user MP command.
