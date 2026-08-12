---
title: start
description: Launch the local Briosa server and perform the default SpatialAnalyzer startup procedure from JavaScript or TypeScript.
---

# `start`

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
| `startSpatialAnalyzerSdk` | `true` | Start a new disconnected SDK generation. |
| `launchSpatialAnalyzer` | `true` | Launch a fresh exact-target SpatialAnalyzer application. |
| `connectToSpatialAnalyzer` | `true` | Connect the new SDK generation and establish MP readiness. |
| `launchOptions` | Empty | Controlled initial job, instrument quick-start, and window-state options. |
| `startupTimeoutMs` | `30_000` | Bounds the complete startup procedure requested by this call. |
| `signal` | `undefined` | Aborts this caller's wait. |

`connectToSpatialAnalyzer: true` requires
`startSpatialAnalyzerSdk: true`. Non-default launch options require
`launchSpatialAnalyzer: true`.

## Example

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from '@spatialanalyzer/briosa';

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
| `BriosaStartupError` | The server or default startup procedure could not complete. |
| `BriosaSpatialAnalyzerError` | A fresh exact-target application could not be launched. |
| `BriosaSpatialAnalyzerSdkError` | SDK startup or connection failed. |
| `BriosaCompatibilityError` | Server, SDK, or connected SA identity does not match the package target. |
| `TypeError` | Startup options contain an invalid combination or malformed value. |
| `BriosaCallAbortedError` | The caller aborted its wait after startup may have crossed a lifecycle boundary. |
| `BriosaLifecycleError` | The handle was finally disposed. |
