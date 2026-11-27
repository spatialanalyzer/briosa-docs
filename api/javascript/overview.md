---
title: Briosa for JavaScript and TypeScript API
sidebar_label: Briosa for JavaScript and TypeScript API
description: Automate SpatialAnalyzer from Node.js with Briosa. Reference JavaScript and TypeScript client lifecycle, MP commands, typed results, and errors.
slug: /
---

# Briosa for JavaScript and TypeScript API

[SA 2026.1.0529.7](/api/javascript) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5)

This section follows the public API of the Briosa JavaScript and TypeScript
client library. Use it to look up client lifecycle, operation methods, result
types, errors, timeouts, and cancellation behavior for Node.js applications.

This is the **0.5.2** client reference for **SA 2026.1.0529.7**.
Client 0.5.1 has the same API, so this reference also describes it.
Use the [SA 2024 reference](/api/javascript/sa-2024.1.0508.5) for the other released exact target. Arguments, choices, and command availability can differ.

:::note[Local Connections]

The JavaScript client launches Briosa only on the same Windows machine as
SpatialAnalyzer. Secure remote connections are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

Start with the [`BriosaClient` lifecycle](/api/javascript/lifecycle) to
understand default startup, explicit SDK and SA control, command admission,
recovery, stop, restart, and cleanup.

For task-oriented examples, start with
[Run your first MP command](/docs/getting-started/first-request). For the
underlying service contract, use the [gRPC API Reference](/api/grpc).

[View the JavaScript client repository](https://github.com/spatialanalyzer/briosa-js)

## Server 0.10 and Client 0.5 Compatibility {/* #contract-major-3 */}

Clients 0.5.0, 0.5.1, and 0.5.2 work with Servers 0.10.0 and 0.10.1 for the
same exact SA target, and client 0.4.0 works with Server 0.9.x. Before launch,
client 0.5.x checks that the installation matches the exact SA target and
declares support for this client, and rejects Server 0.9.x and earlier. Server
0.10.x installs beside Server 0.9.x, and the 0.4.0 packages keep working with Server 0.9.x, so
they remain available for rollback. MP functions take an optional
`onMpCompletion` observer in their call options, nine operations are gone, and
several inputs became required or optional. See the
[Server 0.10 and Client 0.5 migration guide](/docs/server-0-10-and-client-0-5-migration) and the
[client 0.5.0 migration notes](https://github.com/spatialanalyzer/briosa-js/blob/79ed14bf6906c5b079032a9d695cfee2cd62678e/docs/contract-major-3-migration.md)
for every change. The nine removed operations keep their method pages, which
explain the removal; each page's method history keeps the 0.4.0 contract.

## Changes in Clients 0.5.1 and 0.5.2

Use client 0.5.2 for JavaScript and TypeScript applications. It has the same
API as 0.5.1, needs no application changes, and works with the same servers.
It raises the HTTP/2 receive window from 65,535 bytes to 16 MiB on each stream
and on the shared connection. With clients 0.5.0 and 0.5.1, a call that
followed a large response on the same connection could occasionally receive no
reply, with Server 0.10.0 and with a Server 0.10.1 development build. The
observations are consistent with a
[known HTTP/2 defect in ASP.NET Core 10.0.15](https://github.com/dotnet/aspnetcore/issues/70124),
which both servers ship. With one call at a time, the larger window leaves room
for the largest response the client accepts; concurrent large responses share
the connection's window and can still have to wait. See the
[0.5.2 release notes](https://github.com/spatialanalyzer/briosa-js/releases/tag/v0.5.2)
and [briosa#450](https://github.com/spatialanalyzer/briosa/issues/450).

Client 0.5.1 adds to 0.5.0 without changing its MP functions. With Server
0.10.1, it reads what that server adds; with Server 0.10.0, each addition
reports "not available".

- **Startup budget.** An omitted `startupTimeoutMs` grows to the server's
  published startup allowance plus 20 seconds, never below two minutes. A value
  you set is always the budget. See
  [Client Construction](./lifecycle.md#client-construction).
- **Server snapshot.** `lifecycleBounds` reports the server's lifecycle wait
  allowances, and `configuredSpatialAnalyzerInteractionMode` the
  SpatialAnalyzer interaction mode the server is configured to set. See
  [Server Snapshot and Capabilities](./lifecycle.md#server-snapshot-and-capabilities).
- **Policy denials.** `BriosaOperationError.policyDenial`, and the same detail
  on denied capabilities, says which policy step denied a call. Each capability
  lists its reviewed `requestOptions`. None of it changes an error's kind or a
  capability's admission.

## MP Commands

Browse **MP Commands** in the sidebar for operation signatures, defaults,
result types, and links to the corresponding gRPC contract and MP catalog.
The catalog's Current status describes server availability. Client package
versions and runtime validation are separate claims.

See [Release Status](/docs/releases) for product availability and validation limits.

## Exact Target

This section covers **SA 2026.1.0529.7**. Select [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5) for its released signatures and types.

## Selection and Value Types

See [Installation Selection and Discovery](./installation-selection.md) for server selection, [Server Snapshot and Capabilities](./lifecycle.md#server-snapshot-and-capabilities) for the capability snapshot, [MP Completion](./lifecycle.md#mp-completion) and [Operation Errors](./lifecycle.md#operation-errors) for MP outcomes and typed failures, and [MP Value Types](./value-types.md) for exact-target public values.
