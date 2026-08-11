---
title: Start, Use, and Stop Briosa
description: Understand how a Briosa client prepares a verified session and safely cleans it up.
---

# Start, Use, and Stop Briosa

The Briosa clients give your application one predictable way to prepare
SpatialAnalyzer automation, use it, and clean it up. You create a client, start
it, call MP commands, and stop it when your application is finished.

:::note[Status: Next]

This page defines the Lifecycle Foundation planned for Briosa `v0.2`. The .NET,
Python, and JavaScript/TypeScript clients will implement this contract together
with the matching Briosa server release.

:::

Creating a client does not launch a process or contact a server. All external
work begins with the explicit asynchronous start operation. This makes startup
failures visible at a predictable point and prevents an ordinary MP command
from unexpectedly starting infrastructure.

## Choose Who Runs the Briosa Server

The same lifecycle supports two ways to run Briosa:

| Mode | Best Fit | What the Client Owns |
| --- | --- | --- |
| Client-owned server | Most desktop applications, scripts, and first-time users | The exact Briosa server process launched for this client |
| Externally managed server | Applications or operators that start Briosa themselves | The client connection only |

### Client-Owned Server

This is the default. The client locates the server distribution for its exact
SpatialAnalyzer target, chooses an available loopback endpoint, launches the
server, verifies it, and remembers that it owns that server generation.

When the client stops, it also stops only the Briosa server process it launched.
Your application does not need to choose a port or manage the server process.

### Externally Managed Server

Supply a loopback endpoint when another part of your application or an operator
starts the Briosa server. The client connects to that endpoint and performs the
same readiness and compatibility checks as client-owned mode. The v0.2 clients
reject non-loopback endpoints because Briosa has not yet established its remote
security model.

Stopping the client releases its connection but never terminates the supplied
server. The system that started the server remains responsible for it.

## SpatialAnalyzer Remains Separate

Both modes make the same v0.2 assumption: SpatialAnalyzer is installed and
licensed separately, and the matching SpatialAnalyzer application is already
running before the client starts.

The client does not install, launch, close, or forcefully terminate
SpatialAnalyzer. Stopping Briosa does not close an open SA job or discard work
in the SpatialAnalyzer application.

## What Start Verifies

The start operation does more than open a connection. Before it allows an MP
command, the client:

1. Locates or launches the selected Briosa server
2. Confirms that the server is responding
3. Waits until the server is ready to execute MP commands
4. Verifies the exact SpatialAnalyzer target and the locked protocol identity
5. Captures the operations admitted by the running server

The client publishes the new session only after every check succeeds. An MP
command called before startup completes fails through the client lifecycle
error boundary and is not sent to the server.

The captured operation list is checked again for each client method. If the
running server does not admit that method, the call fails locally as a
capability error before an MP command is submitted.

## Stop, Restart, and Final Cleanup

The explicit stop operation closes command admission, releases the current
connection, and performs bounded cleanup of resources the client owns. It
leaves the client dormant so the same client can be started again later.

Every new start creates and verifies a new session, even when it reconnects to
the same external endpoint. Compatibility or readiness from an earlier session
is never assumed to remain valid.

Each language also offers its normal asynchronous resource-management pattern:

- .NET supports `IAsyncDisposable`
- Python supports `aclose()` and `async with`
- JavaScript supports `Symbol.asyncDispose` and `await using`

These conveniences follow the same ownership rules as explicit stop. They do
not add another way to execute MP commands, and they never close
SpatialAnalyzer.

## Timeouts, Cancellation, and Startup Failure

Startup has its own timeout because preparing a verified session is different
from running an MP command. The default startup timeout is 30 seconds. A client
may also have an optional command timeout; by default, the client adds no extra
command deadline.

Cancelling a caller's wait does not turn partial startup into a usable session.
If client-owned startup fails, the client performs bounded cleanup of the exact
server process it launched. If external startup fails, the client releases its
own connection and leaves the supplied server running.

After failure, the client returns to its reusable dormant state. Fix the cause
and call start again. No partial or unverified session is retained.

Once stop or cleanup begins, owned-resource cleanup continues within its bound
even if one caller stops waiting. Cancellation never changes which resources
the client is allowed to terminate.

## Overlapping Lifecycle Calls

The client coordinates lifecycle calls so only one session can be active:

- Concurrent starts share one startup attempt
- Cancelling one start caller does not cancel a startup still awaited by another
  caller
- Starting an already ready client succeeds without creating another session
- Stop requested during startup prevents that partial session from being
  published and cleans it up
- Concurrent stops share one cleanup operation
- Commands are accepted only while one fully verified session is ready

Callers that depend on MP command order should still await those commands in
sequence. A concurrency-safe client does not make SpatialAnalyzer execute MP
commands in parallel.

## Language API References

- [.NET lifecycle API](/api/dotnet/lifecycle)
- [Python lifecycle API](/api/python/lifecycle)
- [JavaScript and TypeScript lifecycle API](/api/javascript/lifecycle)

For the server checks behind startup, see
[Readiness Is More Than Connection](./readiness).
