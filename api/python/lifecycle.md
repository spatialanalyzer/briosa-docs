---
title: BriosaClient Lifecycle
description: Configure, start, stop, restart, and close the Briosa Python client.
---

# `BriosaClient` Lifecycle

`BriosaClient` is an application-scoped asynchronous client. Construction is
dormant and does not bind the client to an event loop. The first `start()` or
asynchronous context entry establishes its verified session and owning event
loop.

:::note[Status: Next]

This page defines the Python lifecycle API planned for Briosa `v0.2`. It is the
public contract for the coordinated implementation and is not available in the
current bootstrap package.

:::

## Client-Owned Server

Omitting options selects the normal client-owned mode. `async with` starts the
client and performs final cleanup when the scope exits:

```python
from briosa import BriosaClient


async with BriosaClient() as briosa:
    working_directory = await briosa.get_working_directory()
```

The client locates and launches the exact-target Briosa server, chooses an owned
loopback endpoint, verifies the session, and captures its capabilities.

## Externally Managed Server

Supply a loopback endpoint when another part of your application or an operator
owns the server:

```python
from briosa import BriosaClient, BriosaClientOptions


options = BriosaClientOptions(
    endpoint="http://127.0.0.1:50051",
)

async with BriosaClient(options) as briosa:
    working_directory = await briosa.get_working_directory()
```

Context exit releases the client connection but does not terminate the external
server.

## Public API

```python
from dataclasses import dataclass
from types import TracebackType
from typing import Self


@dataclass(frozen=True, slots=True)
class BriosaClientOptions:
    endpoint: str | None = None
    startup_timeout: float = 30.0
    command_timeout: float | None = None


class BriosaClient:
    def __init__(
        self,
        options: BriosaClientOptions | None = None,
    ) -> None: ...

    async def start(self) -> None: ...

    async def stop(self) -> None: ...

    async def aclose(self) -> None: ...

    async def __aenter__(self) -> Self: ...

    async def __aexit__(
        self,
        exc_type: type[BaseException] | None,
        exc: BaseException | None,
        traceback: TracebackType | None,
    ) -> None: ...
```

An omitted `endpoint` selects client-owned mode. A non-empty loopback HTTP
endpoint selects externally managed mode. Timeout values are seconds.
`command_timeout` defaults to `None`, which means the client adds no command
deadline.

## Command Admission

MP methods are available only after `start()` completes. Startup verifies
server liveness, MP readiness, exact-target identity, protocol identity, and
the admitted capability set as one operation.

Calling an MP method without a ready session raises `BriosaLifecycleError`.
Calling a method omitted from the admitted capability set raises
`BriosaCapabilityError`. Neither failure submits an MP command.

## Stop, Close, and Context Management

`stop()` ends the current session and leaves the client reusable. A later
`start()` creates and verifies a new session. Calling stop while already dormant
succeeds without creating work.

`aclose()` performs final cleanup and permanently closes the client. It is safe
to call more than once. Starting or calling an MP method after final close raises
`BriosaLifecycleError`.

Entering `async with` calls `start()`. Exiting calls `aclose()`, including when
an exception leaves the block.

Normal asyncio cancellation controls how long a caller waits. Once cleanup has
started, owned-resource cleanup continues within its bound even if that task is
cancelled.

## Lifecycle Failures

Lifecycle failures use handwritten Python errors:

| Error | Meaning |
| --- | --- |
| `BriosaLifecycleError` | The current client state cannot admit the requested work |
| `BriosaStartupError` | A server could not be located, launched, reached, or made ready |
| `BriosaCompatibilityError` | The server target or protocol identity does not match this package |
| `BriosaCapabilityError` | The ready server does not admit the requested operation |
| `asyncio.CancelledError` | The caller cancelled its wait |

A failed start cleans up any partially launched owned server and returns the
client to its reusable dormant state. External servers are never terminated by
client cleanup.

The client supports overlapping tasks on the event loop that owns it. It makes
no cross-thread or cross-event-loop guarantee.

- [Understand the shared lifecycle](/docs/concepts/client-lifecycle)
- [Run your first MP command](/docs/getting-started/first-request)
