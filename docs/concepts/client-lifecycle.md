---
title: Manage Briosa, SDK, and SpatialAnalyzer Lifecycles
description: Understand how the Briosa server, SpatialAnalyzer application, and SpatialAnalyzer SDK are managed independently.
---

# Manage Briosa, SDK, and SpatialAnalyzer Lifecycles

Briosa keeps three resources independently manageable:

| Resource | What It Provides | What Stopping It Does Not Do |
| --- | --- | --- |
| Briosa server | The local API and lifecycle control plane | It does not close SpatialAnalyzer |
| SpatialAnalyzer application | The desktop application that owns your SA data and MP environment | It does not automatically start the SA SDK |
| SpatialAnalyzer SDK | Briosa's isolated path for executing MP commands | It does not close SpatialAnalyzer or stop the public server |

This separation lets you keep the control plane available without starting SA,
restart a failed SDK without restarting Briosa, and leave SpatialAnalyzer open
when your client exits.

:::note[Status: Next]

This page defines the Lifecycle Foundation planned for Briosa `v0.2`. The .NET,
Python, and JavaScript/TypeScript clients will implement this contract together
with the matching Briosa server release.

:::

## Starting the Server Does Not Start SA

Starting `Briosa.Server.exe` manually starts only the local gRPC server. It does
not create an SA SDK instance, launch SpatialAnalyzer, or call `ConnectEx`.

This gives direct gRPC users explicit control over every lifecycle transition.
The server can remain available for status and recovery calls even when neither
the SDK nor SpatialAnalyzer is running.

The current release is local-only. The server listens on loopback, and its SDK
connects to local SpatialAnalyzer with `ConnectEx("localhost", ...)`. Secure
remote Briosa connections are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

## The Default Client Startup Is Convenient

The first-party clients provide a default startup procedure for the most common
case. Calling `StartAsync()` in .NET or `start()` in Python and JavaScript:

1. Launches the matching local Briosa server.
2. Starts a new disconnected SA SDK instance.
3. Launches a fresh exact-target SpatialAnalyzer application.
4. Connects the SDK to local SpatialAnalyzer.
5. Verifies runtime identity and MP execution readiness.

The call returns only when MP commands are ready. Startup options can disable
any of the SDK-start, application-launch, or connection phases. This supports
attaching to an eligible application that is already running, starting a
disconnected SDK for later use, launching SA without starting the SDK, or
starting only the Briosa control plane.

When application launch is selected, clients can request a local SA job file,
an instrument quick-start for a new job, or a minimized window. Briosa does not
accept an executable path, arbitrary process arguments, or launch-time MP
execution from clients.

## Explicit gRPC Lifecycle Sequence

Direct gRPC users control the same resources through separate RPCs:

1. Call `StartSpatialAnalyzerSdk` to create Briosa's SDK instance. It starts in
   `RUNNING` and `DISCONNECTED` state.
2. Optionally call `LaunchSpatialAnalyzer` to start a fresh exact-target SA
   application. You can skip this step when an eligible application is already
   running. The request may select one local job file or one quick-start
   instrument and may start the window minimized.
3. Call `ConnectToSpatialAnalyzer`. The SDK calls
   `ConnectEx("localhost", ...)`, verifies the connected runtime, proves the MP
   execution channel, and opens MP admission.

Starting the SDK never launches or connects to SpatialAnalyzer. Launching
SpatialAnalyzer never connects the SDK. A separate connect call is always
required before MP work.

## Choosing the SpatialAnalyzer Application

You may start the matching SpatialAnalyzer release yourself or ask Briosa to
launch its approved exact-target application.

An application you started remains externally owned. Briosa may connect to it,
but will not close it. When Briosa launches SpatialAnalyzer, it retains the
exact process identity so a later explicit close can affect only that process.

Launching a fresh application never closes an existing SpatialAnalyzer or SDK
process. If another application already owns the SDK ports, launch fails and
requires the user to resolve the conflict. Machine-wide process termination is
not part of the current lifecycle contract.

The SA SDK cannot select an arbitrary local window. The first eligible
SpatialAnalyzer application owns the SDK communication ports. Briosa fails
closed when it cannot identify a compatible, unambiguous target.

## Connection and Readiness Are Separate Claims

`ConnectEx` success proves only that the SDK attached to a SpatialAnalyzer
application. `ConnectToSpatialAnalyzer` also verifies that the activated SDK
and connected application match the exact Briosa target, then proves the MP
execution channel within a bounded watchdog.

MP methods become available only when the SDK reports `READY` and
`ready_for_mp` is true.

## Diagnose and Recover the SDK

The SA SDK is a separate process and can disappear while Briosa and
SpatialAnalyzer remain running. Briosa closes MP admission and records an SDK
incident when it loses the SDK engine, worker, connection, or control channel.

The SDK-state API reports:

- Which SDK generation failed
- What caused the loss
- Whether recovery is available or operator action is required
- Whether an affected command definitely did not start or may have completed
  with an unknown outcome

Use the language client's state method to inspect that information:

| Language | State Method |
| --- | --- |
| .NET | `GetSpatialAnalyzerSdkStateAsync()` |
| Python | `get_spatial_analyzer_sdk_state()` |
| JavaScript/TypeScript | `getSpatialAnalyzerSdkState()` |

Use reconnect when the current SDK generation is still healthy but its SA
connection or readiness needs to be re-established. Reconnect calls
`ConnectEx("localhost", ...)` again on that same SDK generation.

Use recovery when the SDK or its worker is unhealthy. Recovery replaces the
failed generation and leaves the replacement `RUNNING` and `DISCONNECTED`.
Call the connect method afterward to establish MP readiness.

Neither reconnect nor recovery retries an interrupted MP command. If the last
incident reports `STARTED_OUTCOME_UNKNOWN`, inspect or reconcile
SpatialAnalyzer state before deciding whether to issue that command again.

## Stop Resources Deliberately

The SDK stop method closes MP admission and ends the current SDK generation.
SpatialAnalyzer and the Briosa server remain running.

Closing SpatialAnalyzer is never part of ordinary client cleanup. Briosa will
close only an application that the current server can prove it launched, and
only after an explicit close request.

Client stop or disposal shuts down the server that the client launched and its
SDK generation, but leaves SpatialAnalyzer open. This remains true when the
default client startup procedure launched the SA application.

## Timeouts and Overlapping Calls

Client startup options expose one overall startup timeout. Application launch,
SDK startup, connection, identity verification, recovery, and MP execution
retain separate server-configured safety bounds. Cancelling a caller's wait
does not reverse a transition that may already have occurred. Query application
or SDK state before trying another transition.

The server serializes application and SDK lifecycle transitions. A conflicting
request fails clearly instead of racing another launch, start, connect,
reconnect, stop, recovery, or close.

## API References

- [gRPC lifecycle APIs](/api/grpc/lifecycle)
- [.NET lifecycle APIs](/api/dotnet/lifecycle)
- [Python lifecycle APIs](/api/python/lifecycle)
- [JavaScript and TypeScript lifecycle APIs](/api/javascript/lifecycle)
- [Readiness Is More Than Connection](./readiness)
