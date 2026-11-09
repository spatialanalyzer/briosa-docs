---
title: reconnectToSpatialAnalyzer
description: Re-establish an unhealthy local SpatialAnalyzer connection using Briosa's current live SDK instance.
---

# `reconnectToSpatialAnalyzer`

[SA 2026.1.0529.7](/api/javascript/reconnect-to-spatial-analyzer) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/reconnect-to-spatial-analyzer)

```ts
reconnectToSpatialAnalyzer(
  options?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerSdkLifecycleState>;
```

Reconnect calls `ConnectEx("localhost", ...)` again on the current live SDK
generation, repeats verification, and never replays an MP command.

```ts
let sdk = await briosa.getSpatialAnalyzerSdkState();

if (sdk.connectionState !== 'connected') {
  sdk = await briosa.reconnectToSpatialAnalyzer();
}
```

If the SDK process or worker is unhealthy, recover it first and explicitly
connect the replacement. As after a connection, MP admission needs a server
snapshot that reports readiness; call
[`getServerSnapshot()`](./lifecycle.md#server-snapshot-and-capabilities) when
this session's startup did not connect.

Failures use the normal lifecycle, SpatialAnalyzer, SDK, compatibility, and abort
error boundaries.

Aborting the `signal` rejects with `BriosaCallAbortedError` and stops only your
wait. The server finishes a reconnection it has accepted under its own bounds, so
refresh with `getSpatialAnalyzerSdkState()` before deciding what to do. A second
lifecycle call while an accepted transition is in progress fails with
`sdk-lifecycle-transition-in-progress` (`stateConflict`, `refreshState`): refresh
state and retry later. See
[After an Aborted Lifecycle Call](./lifecycle.md#after-an-aborted-lifecycle-call).
