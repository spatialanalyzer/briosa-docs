---
title: Windows Control Center
description: Monitor and manage a local Briosa server from the Windows notification area.
---

# Windows Control Center

Control Center provides a tray icon, server status, readable activity, and local
lifecycle controls. Its light and dark themes match Briosa Installer, with Windows
high-contrast settings taking priority.

:::note Availability
Control Center is included in [Briosa 0.5.1](https://github.com/spatialanalyzer/briosa/releases/tag/v0.5.1)
and later Windows server packages. Briosa Installer **0.2.0** and later provide
the **Open Control Center** action. Get both through [Install Briosa](/install).
Earlier server packages omit the companion. Server **0.7.0** includes Control Center for both **2024.1.0508.5** and **2026.1.0529.7**. Select the installed distribution matching your application. Control Center shares the server release version.
:::

## Open Control Center

In Briosa Installer, select an installed server and choose **Open Control Center**.
This verifies the package and opens its window. Choose **Start server** when ready.
The action appears only for packages that include the companion.

From an extracted server package:

```powershell
.\Briosa.ControlCenter.exe --show
```

Launching without `--show` starts a managed API host in the background. An
interactive launch of packaged `Briosa.Server.exe`, including a client-library
launch, automatically creates a hidden tray monitor. Windows may put its icon
in the notification-area overflow.

Right-click the icon for status, activity, endpoint copying, and available actions.
Closing the window hides it. **Exit tray application** leaves the server running.
Reopening the same package reconnects to its running server.

## Understand Status and Ownership

**Overview** separates the API host, SDK, SpatialAnalyzer application, version
evidence, and execution readiness. Starting the host leaves the SDK stopped.
Separately open a licensed exact-target SpatialAnalyzer installation, then select
**Start SDK** and **Connect** in a managed Control Center.

Existing [readiness requirements](../concepts/readiness.md) apply. Attachment
alone does not mean commands can run. Lost observation marks retained values
stale and disables management controls.

| Server Ownership | Available Controls |
| --- | --- |
| Started by Control Center | State-dependent SDK actions and server stop/restart |
| Started by a client or another launcher | Monitoring, activity, endpoint copying, and support export |

Reopening can recover management of a server that Control Center previously
started. A matching port or executable name alone never grants ownership.

## Set Up Version Evidence

Briosa observes the executable version of the SDK process it activates. Windows
can select an older registered SDK even when the correct SA application is open.
An observed mismatch blocks connection and cannot be overridden by configuration.

The connected SA version requires separate operator evidence. With the managed
server stopped, open **Connection setup**, enter the verified running SA version
and a non-sensitive reference to your verification record, and save. Check which
SA instance owns SDK communication when several are open. Leave the optional SDK
fallback fields empty when its version is observed automatically.

Start the server and SDK, then connect. Settings apply to future servers launched
by this Control Center and are saved privately per distribution. Empty field pairs
preserve existing server/environment configuration. Recheck evidence after
changing SDK registration or the SA application. References are excluded from
worker environments, logs, and support exports.

If Windows selects an older SDK, stop the SDK and use the matching SA
installation's `SpatialAnalyzerSDK-register-server.bat` with administrator rights.
This affects other COM clients; Control Center never changes registration
automatically. Start a new SDK generation afterward. Reconnect cannot change the
activated executable or supply missing evidence.

## Recover or Stop

- **Connect** attaches a started SDK. **Reconnect** is available when the current
  generation's connection state permits it.
- **Recover SDK** replaces a faulted generation without connecting or replaying.
  Correct competing-client or environment problems first.
- **Restart server** waits for confirmed shutdown before starting a replacement.
  Its SDK begins stopped; clients must establish the new runtime generation.
- **Stop server** shuts down the managed host and worker. SpatialAnalyzer stays open.

Unconfirmed actions are never automatically retried. An earlier unknown command
outcome remains separate from restored availability. Inspect SpatialAnalyzer
before deciding whether to run the command again; see
[Execution Outcomes](../concepts/execution-outcomes.md).

## Read Activity and Export Support Information

**Activity** shows curated metadata from the existing per-instance logs. Search
by operation, diagnostic code, or correlation ID; filter severity, pause updates,
jump to the latest event, and use Ctrl+C to copy selected rows.

The viewer retains at most 2,000 recent events. Logs are best effort: a missing
record cannot establish whether a command ran. See
[Server Logging and Telemetry](logging.md) for file retention settings.

Normal health reports while commands are unavailable are informational readiness
entries. Health-check exceptions remain errors.

**Details & support** includes offline package diagnostics and a ZIP export of
safe version, lifecycle, and recent activity information. Exports exclude endpoint
addresses, local paths, configuration, credentials, raw exceptions, and MP values.
Exporting saves a local file; it does not upload anything.

This page also contains notification preferences and **App theme**: Windows,
Light, or Dark. Preferences live outside the package and survive its removal.

## Run Without a Tray Icon

For unattended or headless launches:

```powershell
.\Briosa.Server.exe --Briosa:Desktop:Mode=Disabled
```

The equivalent environment setting is `Briosa__Desktop__Mode=Disabled`.
Default `Auto` mode requires an interactive Windows session and an installed
companion. Installation and updates remain separate from startup. Close Control
Center and stop its server before repairing or removing an in-use package.

Fake-worker and Windows UI/package tests cover the desktop flow. A
[local licensed check](https://github.com/spatialanalyzer/briosa/blob/1bf724d/targets/2026.1.0529.7/docs/testing/evidence/control-center-local-2026-09-15.md)
also verified connection and read-only commands against SA 2026.1.0529.7. It does
not establish live fault-recovery behavior or compatibility with other releases.
