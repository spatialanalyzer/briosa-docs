---
title: start
description: Launch the local Briosa server and perform the default SpatialAnalyzer startup procedure from JavaScript or TypeScript.
---

# `start`

[SA 2026.1.0529.7](/api/javascript/start) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/start)

Launches a local Briosa server, starts its disconnected SDK, launches a fresh
exact-target SpatialAnalyzer application, connects the SDK locally, and waits
until MP execution is ready.

## Signature

```ts
start(options?: BriosaStartOptions): Promise<void>;
```

Omitting `options` uses the default startup procedure.

## Startup Options

| Property | Default | Meaning |
| --- | --- | --- |
| `serverSelection` | `{}` | [Per-application server selection](./installation-selection.md). |
| `startSpatialAnalyzerSdk` | `true` | Start a new disconnected SDK generation. |
| `launchSpatialAnalyzer` | `true` | Launch a fresh exact-target SpatialAnalyzer application. |
| `connectToSpatialAnalyzer` | `true` | Connect the new SDK generation and establish MP readiness. |
| `launchOptions` | Empty | Controlled initial job, instrument quick-start, and window-state options. |
| `startupTimeoutMs` | `120_000` | One overall budget, in milliseconds, for the complete startup procedure requested by this call, whichever phases are selected. |
| `signal` | `undefined` | Aborts this caller's wait only; the start continues until it completes or its budget expires. |

`connectToSpatialAnalyzer: true` requires
`startSpatialAnalyzerSdk: true`. Non-default launch options require
`launchSpatialAnalyzer: true`.

The 120-second startup budget covers the server's default worst case of about
100 seconds for a start that launches SpatialAnalyzer, with a 20-second margin.
If you raise the server's `Briosa:Worker:StartupTimeout`,
`Briosa:Worker:ReadinessProbeTimeout`, or
`Briosa:SpatialAnalyzer:ApplicationStartupTimeout`, raise the budget too, to at
least 3 times `StartupTimeout`, plus `ReadinessProbeTimeout`, plus
`ApplicationStartupTimeout` when launching, plus 10 seconds, plus a margin. When
the budget expires, `start()` rejects with `BriosaStartupError` and diagnostic
`startup-timeout`. The server finishes an SDK start or connection it has
accepted, so an abandoned start may still produce a ready generation: read the
SDK state before retrying.

## Example

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from 'briosa';

const briosa = createBriosaClient();
await briosa.start();

const workingDirectory = await getWorkingDirectory(briosa);
```

To attach to an eligible SpatialAnalyzer application that is already running:

```ts
await briosa.start({
  launchSpatialAnalyzer: false,
});
```

To start only the Briosa control plane:

```ts
await briosa.start({
  startSpatialAnalyzerSdk: false,
  launchSpatialAnalyzer: false,
  connectToSpatialAnalyzer: false,
});
```

After a control-plane-only start, start and connect the SDK yourself, then call
`getServerSnapshot()` before MP work; see
[Server Snapshot and Capabilities](./lifecycle.md#server-snapshot-and-capabilities).

## Server Logging

`BriosaStartOptions.logging` accepts an optional `BriosaLoggingOptions`:

```ts
await briosa.start({
  logging: {
    minimumLevel: 'Debug',
    consoleEnabled: false,
    maxFileSizeMiB: 20,
    retainedFileCount: 10,
  },
});
```

Additional properties are `categoryLevels`, `fileEnabled`, `fileDirectory`,
`maxAgeDays`, and `maxTotalSizeMiB`. Levels use the `BriosaLogLevel` string union:
`Trace`, `Debug`, `Information`, `Warning`, `Error`, `Critical`, or `None`.

These controls require builds containing
[the observability implementation](https://github.com/spatialanalyzer/briosa/issues/165).
Omitted fields preserve server configuration. Values are validated before
launch; the server validates the effective combined configuration. Custom
directories must be absolute Windows paths. Logging controls apply when this
client launches its server and cannot reconfigure a running process.

See [Server Logging and Telemetry](/docs/deployment/logging) for defaults,
retention behavior, and the metadata boundary at every verbosity level.

## Behavior

- Selects and launches the exact-target local server on an owned loopback
  endpoint.
- Verifies server and protocol identity.
- Performs only the SDK-start, SpatialAnalyzer-launch, and connection phases
  selected in `BriosaStartOptions`, in that order.
- Supplies `launchOptions` to the application launch phase.
- Verifies SDK/SA identity and execution readiness when connection is requested.
- Loads capabilities and shares one startup attempt across concurrent callers
  in the same JavaScript realm.

Success means every requested phase completed. It does not imply MP readiness
when connection was deliberately disabled.

Manually starting `Briosa.Server.exe` starts no SDK or SA application; raw gRPC
callers invoke those lifecycle RPCs explicitly.

If an SDK, application, or connection phase fails after the server becomes
available, the client preserves the control plane for state inspection and
recovery. `stop()` remains available to clean up resources owned by that client
session.

## Rejections

| Error | Meaning |
| --- | --- |
| `BriosaStartupError` | The server or default startup procedure could not complete, including `startup-timeout` when `startupTimeoutMs` expires. |
| `BriosaSpatialAnalyzerError` | A fresh exact-target application could not be launched. |
| `BriosaSpatialAnalyzerSdkError` | SDK startup or connection failed. |
| `BriosaCompatibilityError` | Server, SDK, or connected SA identity does not match the package target. |
| `TypeError` | Startup options contain an invalid combination or malformed value. |
| `BriosaCallAbortedError` | The caller aborted its wait. The start continues until it completes or its budget expires; read the SDK state before retrying. |
| `BriosaLifecycleError` | The handle was finally disposed. |
