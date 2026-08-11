---
title: BriosaClient Lifecycle
description: Configure, start, stop, and clean up the Briosa JavaScript and TypeScript client.
---

# `BriosaClient` Lifecycle

`createBriosaClient()` returns an opaque, application-scoped client handle.
Creating the handle is dormant. It does not launch a process, open a channel, or
contact a server until `start()` is called.

:::note[Status: Next]

This page defines the JavaScript and TypeScript lifecycle API planned for Briosa
`v0.2`. It is the public contract for the coordinated implementation and is not
available in the current bootstrap package.

:::

## Client-Owned Server

Omitting options selects the normal client-owned mode:

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from '@spatialanalyzer/briosa';

await using briosa = createBriosaClient();
await briosa.start();

const workingDirectory = await getWorkingDirectory(briosa);
```

The client locates and launches the exact-target Briosa server, chooses an owned
loopback endpoint, verifies the session, and captures its capabilities.

## Externally Managed Server

Supply a loopback endpoint when another part of your application or an operator
owns the server:

```ts
import {
  createBriosaClient,
  getWorkingDirectory,
} from '@spatialanalyzer/briosa';

await using briosa = createBriosaClient({
  endpoint: 'http://127.0.0.1:50051',
});

await briosa.start();
const workingDirectory = await getWorkingDirectory(briosa);
```

Asynchronous disposal releases the client connection but does not terminate
the external server.

## Public API

```ts
export interface BriosaClientOptions {
  readonly endpoint?: string;
  readonly startupTimeoutMs?: number;
  readonly commandTimeoutMs?: number | null;
}

export interface BriosaStartOptions {
  readonly signal?: AbortSignal;
}

export interface BriosaClient {
  start(options?: BriosaStartOptions): Promise<void>;
  stop(): Promise<void>;
  [Symbol.asyncDispose](): Promise<void>;
}

export function createBriosaClient(
  options?: BriosaClientOptions,
): BriosaClient;
```

An omitted `endpoint` selects client-owned mode. A non-empty loopback HTTP
endpoint selects externally managed mode. `startupTimeoutMs` defaults to
`30_000`. Omitting `commandTimeoutMs`, or setting it to `null`, means the client
adds no command deadline.

## Command Admission

MP functions are available only after `start()` resolves. Startup verifies
server liveness, MP readiness, exact-target identity, protocol identity, and
the admitted capability set as one operation.

Calling an MP function without a ready session rejects with
`BriosaLifecycleError`. Calling a function omitted from the admitted capability
set rejects with `BriosaCapabilityError`. Neither failure submits an MP command.

## Stop and Asynchronous Disposal

`stop()` ends the current session and leaves the handle reusable. A later
`start()` creates and verifies a new session. Calling stop while already dormant
resolves without creating work.

`Symbol.asyncDispose` delegates to the same stop behavior, which makes
`await using` the normal final-cleanup convenience. It is safe after cleanup has
already occurred and follows the same ownership rules as explicit stop.

`stop()` does not accept an `AbortSignal`. Cleanup is bounded and, once started,
continues for owned resources even when a surrounding task stops waiting for
application shutdown.

## Lifecycle Failures

Lifecycle failures reject through handwritten JavaScript errors:

| Error | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The current client state cannot admit the requested work |
| `BriosaStartupError` | A server could not be located, launched, reached, or made ready |
| `BriosaCompatibilityError` | The server target or protocol identity does not match this package |
| `BriosaCapabilityError` | The ready server does not admit the requested operation |
| `BriosaCallAbortedError` | The caller's `AbortSignal` cancelled its wait |

A failed start cleans up any partially launched owned server and returns the
client to its reusable dormant state. External servers are never terminated by
client cleanup.

The client supports overlapping calls in one JavaScript realm. It promises
neither implicit command ordering nor SpatialAnalyzer parallelism.

- [Understand the shared lifecycle](/docs/concepts/client-lifecycle)
- [Run your first MP command](/docs/getting-started/first-request)
