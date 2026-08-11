---
title: BriosaClient Lifecycle
description: Configure, start, stop, restart, and dispose of the Briosa .NET client.
---

# `BriosaClient` Lifecycle

`BriosaClient` is the application-scoped entry point for the .NET client. It is
dormant after construction and admits MP command methods only after
`StartAsync()` establishes a verified session.

:::note[Status: Next]

This page defines the .NET lifecycle API planned for Briosa `v0.2`. It is the
public contract for the coordinated implementation and is not available in the
current bootstrap package.

:::

## Client-Owned Server

The parameterless constructor selects the normal client-owned mode:

```csharp
using Briosa;

await using var briosa = new BriosaClient();
await briosa.StartAsync();

string workingDirectory = await briosa.GetWorkingDirectoryAsync();

await briosa.StopAsync();
```

`StartAsync()` locates and launches the exact-target Briosa server, chooses an
owned loopback endpoint, verifies the session, and captures its capabilities.
`StopAsync()` terminates only that owned server generation and leaves the client
available for another start.

## Externally Managed Server

Use `BriosaClientOptions.External()` when your application or an operator owns
the server. The endpoint must be loopback in v0.2:

```csharp
using Briosa;

await using var briosa = new BriosaClient(
    BriosaClientOptions.External(
        new Uri("http://127.0.0.1:50051")));

await briosa.StartAsync();
string workingDirectory = await briosa.GetWorkingDirectoryAsync();
```

Disposal releases the client connection but does not terminate the external
server.

## Public API

```csharp
public sealed record BriosaClientOptions
{
    public static BriosaClientOptions ClientOwned { get; }

    public static BriosaClientOptions External(Uri endpoint);

    public TimeSpan StartupTimeout { get; init; }

    public TimeSpan? CommandTimeout { get; init; }
}

public sealed partial class BriosaClient : IAsyncDisposable
{
    public BriosaClient(BriosaClientOptions? options = null);

    public Task StartAsync(
        CancellationToken cancellationToken = default);

    public Task StopAsync(
        CancellationToken cancellationToken = default);

    public ValueTask DisposeAsync();
}
```

Omitting `options` is equivalent to `BriosaClientOptions.ClientOwned`.
`StartupTimeout` defaults to 30 seconds. `CommandTimeout` defaults to `null`,
which means the client adds no command deadline.

Options are immutable after construction. To change a timeout, derive a new
record value before creating the client:

```csharp
var options = BriosaClientOptions.ClientOwned with
{
    StartupTimeout = TimeSpan.FromSeconds(45),
    CommandTimeout = null,
};

await using var briosa = new BriosaClient(options);
```

## Command Admission

MP methods are available only after `StartAsync()` completes. Startup verifies
server liveness, MP readiness, exact-target identity, protocol identity, and
the admitted capability set as one operation.

Calling an MP method without a ready session throws
`BriosaLifecycleException`. Calling a method omitted from the admitted
capability set throws `BriosaCapabilityException`. Neither failure submits an
MP command.

## Stop and Disposal

`StopAsync()` is reusable. After it completes, another `StartAsync()` creates
and verifies a new session. Calling stop while already dormant succeeds without
creating work.

`DisposeAsync()` performs final asynchronous cleanup and permanently disposes
the client. It follows the same ownership rules as stop. Starting or calling an
MP method after disposal throws `ObjectDisposedException`.

The cancellation token controls how long that caller waits. Once cleanup has
started, owned-resource cleanup continues within its bound even if the wait is
cancelled.

## Lifecycle Failures

Lifecycle failures use handwritten .NET exceptions:

| Exception | Meaning |
| --- | --- |
| `BriosaLifecycleException` | The current client state cannot admit the requested work |
| `BriosaStartupException` | A server could not be located, launched, reached, or made ready |
| `BriosaCompatibilityException` | The server target or protocol identity does not match this package |
| `BriosaCapabilityException` | The ready server does not admit the requested operation |
| `OperationCanceledException` | The caller cancelled its wait |

A failed start cleans up any partially launched owned server and returns the
client to its reusable dormant state. External servers are never terminated by
client cleanup.

- [Understand the shared lifecycle](/docs/concepts/client-lifecycle)
- [Run your first MP command](/docs/getting-started/first-request)
