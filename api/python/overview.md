---
title: Briosa for Python API
sidebar_label: Briosa for Python API
description: Use the asynchronous Briosa Python client to automate SpatialAnalyzer. Reference client lifecycle, MP commands, typed results, and error handling.
slug: /
---

# Briosa for Python API

[SA 2026.1.0529.7](/api/python) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5)

This section follows the public API of the Briosa Python client library. Use it
to look up asynchronous client lifecycle, operation methods, result types,
exceptions, timeouts, and cancellation behavior.

This is the **0.5.1** client reference for **SA 2026.1.0529.7**.
Use the [SA 2024 reference](/api/python/sa-2024.1.0508.5) for the other released exact target. Arguments, choices, and command availability can differ.

:::note[Local Connections]

The Python client launches Briosa only on the same Windows machine as
SpatialAnalyzer. Secure remote connections are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

Start with the [`BriosaClient` lifecycle](/api/python/lifecycle) to understand
default startup, explicit SDK and SA control, command admission, recovery,
stop, restart, and cleanup.

For task-oriented examples, start with
[Run your first MP command](/docs/getting-started/first-request). For the
underlying service contract, use the [gRPC API Reference](/api/grpc).

[View the Python client repository](https://github.com/spatialanalyzer/briosa-py)

## MP Commands

Browse **MP Commands** in the sidebar for operation signatures, defaults,
result types, and links to the corresponding gRPC contract and MP catalog.
The catalog's Current status describes server availability. Client package
versions and runtime validation are separate claims.

Clients 0.5.0 and 0.5.1 work with Servers 0.10.0 and 0.10.1 for the same exact
SA target; client 0.4.0 works with Server 0.9.x. Before launch, the client
checks that the installation matches the exact SA target and declares support
for this client, and rejects Server 0.9.x and earlier. Every MP method takes the keyword-only `on_mp_completion`
observer, which reports a [partial success](./lifecycle.md#mp-completion)
without changing the return value. The
[lifecycle overview](./lifecycle.md#server-snapshot-and-capabilities) also
covers capability discovery and the [operation errors](./lifecycle.md#operation-errors).

See [Release Status](/docs/releases) for product availability and validation limits.

## Changes in Client 0.5.1

Client 0.5.1 adds to 0.5.0 without changing its MP methods. With Server 0.10.1,
it reads what that server adds; with Server 0.10.0, each addition is `None` or
`UNKNOWN`.

- **Startup budget.** An omitted `startup_timeout` grows to the server's
  published startup allowance plus 20 seconds, never below two minutes. An
  explicit value is always used as given. See
  [Client Construction](./lifecycle.md#client-construction).
- **Server snapshot.** `lifecycle_bounds` reports the server's lifecycle wait
  allowances, and `configured_interaction_mode` the SpatialAnalyzer interaction
  mode the server is configured to set. See
  [Server Snapshot and Capabilities](./lifecycle.md#server-snapshot-and-capabilities).
- **Policy denials.** `OperationFailure.policy_denial`, and the same detail on
  denied capabilities, says which policy step denied a call. Each capability
  lists its reviewed `request_options`. None of it changes a failure's kind or
  a capability's admission.
- **Python 3.10.** A startup-budget expiry raises `BriosaStartupError`, which on
  Python 3.10 also derives from `asyncio.TimeoutError`, and a `stop()` during a
  hung startup now closes the client's resources on the first call.

The fields 0.5.1 added stay out of `repr()`, equality, and hashing, but
`dataclasses.fields()`, `astuple()`, and `asdict()` include them. The README of
each target lists the known edge-case differences from 0.5.0:
[SA 2026.1.0529.7](https://github.com/spatialanalyzer/briosa-py/blob/v0.5.1/targets/2026.1.0529.7/README.md#new-in-051-server-0101).

## Exact Target

This section covers **SA 2026.1.0529.7**. Select [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5) for its released signatures and types.

## Selection and Value Types

See [Installation Selection and Discovery](./installation-selection.md) for server selection, and [MP Value Types](./value-types.md) for exact-target public values.
