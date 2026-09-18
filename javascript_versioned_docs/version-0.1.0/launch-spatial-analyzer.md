---
title: launchSpatialAnalyzer
description: Launch the exact SpatialAnalyzer application approved for the connected Briosa target from JavaScript or TypeScript.
---

# `launchSpatialAnalyzer`

Launches a new exact-target SpatialAnalyzer application. The method does not
start or connect the SA SDK or make MP methods ready. A disconnected SDK may
already be running.

## Signature

```ts
launchSpatialAnalyzer(
  launchOptions?: SpatialAnalyzerLaunchOptions,
  callOptions?: BriosaLifecycleCallOptions,
): Promise<SpatialAnalyzerLifecycleState>;
```

## Parameters

| Parameter | Type | Default | Meaning |
| --- | --- | --- | --- |
| `launchOptions` | `SpatialAnalyzerLaunchOptions` | Empty options | Controlled application startup inputs. |
| `callOptions.signal` | `AbortSignal` | `undefined` | Aborts this caller's launch wait. |

`SpatialAnalyzerLaunchOptions` provides:

| Property | Default | Meaning |
| --- | --- | --- |
| `jobFilePath` | `undefined` | Absolute path to an SA job file on the local Briosa machine. |
| `quickStartInstrumentName` | `undefined` | Start a new job and quick-start the named SA instrument. |
| `startMinimized` | `false` | Start SpatialAnalyzer minimized. |

`jobFilePath` and `quickStartInstrumentName` are mutually exclusive.

## Returns

On success, `applicationState` is `running`, ownership is `serverLaunched`, and
`applicationGeneration` is present.

## Example

```ts
const application = await briosa.launchSpatialAnalyzer({
  jobFilePath: 'C:\\Jobs\\Inspection.xit64',
  startMinimized: true,
});
const sdk = await briosa.connectToSpatialAnalyzer();
```

The client retains the application generation and supplies it automatically
when the owned application is closed.

## Errors

| Error | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The client is not started or another transition is active. |
| `BriosaSpatialAnalyzerError` | Launch failed, timed out, or application selection is ambiguous. |
| `TypeError` | Launch options are invalid, conflicting, or malformed. |
| `BriosaCallAbortedError` | The caller aborted its wait; inspect application state. |

The method accepts no executable path, arbitrary argument list, launch-time MP,
or option to close existing applications.
