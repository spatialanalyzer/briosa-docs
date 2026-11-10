---
title: Windows Deployment
---

# Windows Deployment

Use [Briosa Installer](/install) to manage server packages, including installation,
verification, repair, and removal. That guide also records current download
availability. This page covers the server package layout, manual extraction,
diagnostics, and startup.

Installer 0.3.0 also registers committed products in the 64-bit Windows Registry.
Use its registration rescan for existing custom stores. Registry entries are
discovery hints backed by receipts; they never select a machine-wide default.
See [Compatible Side-by-Side Installations](./installation-selection) for the
new client selection contract and migration guidance.

Briosa release archives are self-contained .NET 10 Windows x64 products for one
exact SpatialAnalyzer target:

```text
briosa-0.10.0-sa-<exact-sa-target>-win-x64.zip
```

Choose exact target `2024.1.0508.5` or `2026.1.0529.7` from the [Server 0.10.0 assets](https://github.com/spatialanalyzer/briosa/releases/tag/v0.10.0){/* release-pending */}. Use the adjacent ZIP checksum and provenance. Schema-3 packages require Installer **0.3.0** or later. Manual extraction alone does not create a registered, committed package-store receipt; use Installer to manage discovery, or an explicitly selected validated server path as described in [Installation Selection](./installation-selection). Raw gRPC users should also read [Protocol Artifacts](./protocol-artifacts).

The archive does not contain SpatialAnalyzer, its installer, SDK executable,
original type library, license material, or vendor documentation.

## Verify and Extract

<Steps>

1. Verify the ZIP against its adjacent `.sha256` file.
2. Extract the complete top-level directory.
3. Keep the server, worker, and approved interop assembly together.
4. Run `./Briosa.Server.exe diagnostics` before startup.

</Steps>

Offline diagnostics report safe build coordinates and package-layout checks.
They do not activate COM, connect to SpatialAnalyzer, or expose paths,
hostnames, license information, or raw diagnostics.

## Start Securely

The package binds cleartext HTTP/2 to `127.0.0.1:50051` by default:

```powershell
./Briosa.Server.exe
```

Keep the endpoint loopback-only. The baseline has no remote client
authentication, per-operation authorization, or TLS configuration. Deploying
Briosa beside SpatialAnalyzer on another machine and connecting to it securely
is [planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156),
not supported by current releases or the v1 contract.

The packaged `appsettings.json` admits operations through the `standard`
[admission profile](./operation-admission.md). Server 0.10.0 refuses to start
when it finds the retired `Briosa:Security:Operations:Allow` or `Deny` arrays,
or no `Profile`.

## Worker Time Bounds

The server chooses each request's execution budget from its operation's
duration class. A request that turns on operator UI runs under the interactive
budget. Each value is a .NET `TimeSpan` (`hh:mm:ss`); the server refuses to
start, naming the key, when a value is malformed, not positive, or above its
maximum.

| Configuration Key (Environment Variable Form) | Bounds | Default | Maximum |
| --- | --- | --- | --- |
| `Briosa__Worker__ExecutionWatchdogTimeout` | Execution of `quick` operations | 30 seconds | 10 minutes |
| `Briosa__Worker__LongRunningExecutionWatchdogTimeout` | Execution of `long_running` operations | 10 minutes | 2 hours; not shorter than the quick budget |
| `Briosa__Worker__InteractiveExecutionWatchdogTimeout` | Execution of `interactive` operations | 30 minutes | 8 hours; not shorter than the quick budget |
| `Briosa__Worker__ReadinessProbeTimeout` | The execution-readiness probe after an explicit connect | 30 seconds | 10 minutes |
| `Briosa__Worker__StartupTimeout` | Worker launch, COM activation, `ConnectEx`, and Connect's application association | 10 seconds | 5 minutes |
| `Briosa__SpatialAnalyzer__ApplicationStartupTimeout` | `LaunchSpatialAnalyzer`'s wait for the application window | 30 seconds | 10 minutes |
| `Briosa__SpatialAnalyzer__ApplicationShutdownTimeout` | `CloseOwnedSpatialAnalyzer`'s wait for the owned application to exit | 30 seconds | 10 minutes |

A Connect takes up to twice `StartupTimeout` plus `ReadinessProbeTimeout`, plus
fixed 5-second cleanup bounds: 60 seconds to a typed failure at the defaults.
When an execution budget expires after dispatch, the server terminates the
worker and reports a watchdog timeout whose outcome is unknown; the command is
never replayed.

A caller deadline or cancellation stops that caller from waiting; it does not
prove that synchronous COM work stopped. A request that is still queued when its
caller cancels is abandoned and never executed. An accepted start, connect,
reconnect, recovery, or launch continues under its own bound even if the caller
stops waiting. If Briosa reports operator recovery required, establish a clean
SpatialAnalyzer/SDK ownership state before restarting.

## SpatialAnalyzer Interaction Mode

Job state or an argument value can make SpatialAnalyzer open a blocking dialog
even when no caller asked for UI, such as a wildcard selection that matches
nothing. The dialog holds the MP, and with it the single SDK worker, until
someone dismisses it. `Briosa__SpatialAnalyzer__InteractionMode` sets
SpatialAnalyzer's interaction mode for Briosa:

| Value | Effect |
| --- | --- |
| `Unchanged` (default) | Briosa never sets the mode. SpatialAnalyzer keeps the mode it has. |
| `Silent` | Recommended for unattended stations. SpatialAnalyzer shows the fewest dialogs. |
| `Automatic` | SpatialAnalyzer's middle setting. |
| `Manual` | SpatialAnalyzer's most interactive setting. |

With any value other than `Unchanged`, each SDK generation applies the mode
after its readiness probe and before it reports ready. SpatialAnalyzer keeps the
mode across restarts and has no getter, so Briosa cannot restore the operator's
previous mode. In the licensed probe sessions, `Silent` turned each observed
blocking dialog into an immediate MP failure while operator prompts still
worked; those are observations of bounded sessions, not vendor guarantees.

When a command still stalls past its budget while a SpatialAnalyzer modal
dialog is open, Briosa reports the diagnostic `sa-modal-dialog-open` with
operator-intervention guidance. Read and dismiss the dialog in SpatialAnalyzer
before recovering the SDK; Briosa never dismisses a dialog.

For the full package contract, use the
[authoritative Windows guide](https://github.com/spatialanalyzer/briosa/blob/2960705eb3152646513dca2b5d2043cd7cfffb75/targets/2026.1.0529.7/docs/operations/windows-package.md).{/* release-pending */}
