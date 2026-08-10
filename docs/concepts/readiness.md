---
title: Readiness Is More Than Connection
---

# Readiness Is More Than Connection

`ConnectEx` success is attachment evidence, not proof that the SDK execution
channel can run an MP.

Experiments with SA `2026.1.0529.7` showed that several SDK clients can report
successful connections while a second client blocks indefinitely during
`ExecuteStep`. Briosa therefore admits MP work only after all of these are
true:

1. the worker process is control-ready;
2. the worker is attached to SpatialAnalyzer;
3. activated-SDK and connected-SA evidence each exactly match the target; and
4. a bounded, value-discarding execution-channel probe succeeds for the current
   worker generation.

The probe uses the normal serialized SDK path, confirms MP success and expected
output shape, and discards the working-directory value.

## Health Names

| Service Name | Meaning |
| --- | --- |
| `briosa.liveness` | The public host is serving. Worker and SA state do not affect it. |
| `briosa.readiness` | The current worker generation is ready to accept MP work. |

Use the explicit names for deployment checks. Restarting a healthy host merely
because SpatialAnalyzer is unavailable can make diagnosis harder.

If the probe times out or reports an ambiguous execution state, Briosa moves to
operator-recovery-required rather than automatically cycling through new
workers. Establish a clean SDK ownership state before restarting.
