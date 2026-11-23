---
title: Briosa for JavaScript and TypeScript API
sidebar_label: Briosa for JavaScript and TypeScript API
description: Automate SpatialAnalyzer from Node.js with Briosa. Reference JavaScript and TypeScript client lifecycle, MP commands, typed results, and errors.
slug: /sa-2024.1.0508.5
---

# Briosa for JavaScript and TypeScript API

[SA 2026.1.0529.7](/api/javascript) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5)

This section follows the public API of the Briosa JavaScript and TypeScript
client library. Use it to look up client lifecycle, operation methods, result
types, errors, timeouts, and cancellation behavior for Node.js applications.

This is the **0.5.0** client reference for **SA 2024.1.0508.5**.
Use this SA 2024 reference; the [SA 2026 reference](/api/javascript) covers the other released exact target. Arguments, choices, and command availability can differ.

:::note[Local Connections]

The JavaScript client launches Briosa only on the same Windows machine as
SpatialAnalyzer. Secure remote connections are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

Start with the [`BriosaClient` lifecycle](/api/javascript/sa-2024.1.0508.5/lifecycle) to
understand default startup, explicit SDK and SA control, command admission,
recovery, stop, restart, and cleanup.

For task-oriented examples, start with
[Run your first MP command](/docs/getting-started/first-request). For the
underlying service contract, use the [gRPC API Reference](/api/grpc/sa-2024.1.0508.5).

[View the JavaScript client repository](https://github.com/spatialanalyzer/briosa-js)

## Server 0.10 and Client 0.5 Compatibility

Client 0.5.x works with Server 0.10.x (Client 0.5.0 was tested with Server
0.10.0), and Client 0.4.0 works with Server 0.9.x. Before launch, client 0.5.x
checks that the installation matches the exact SA target and declares support
for this client, and rejects Server 0.9.x and earlier. Server 0.10.0 installs
beside Server 0.9.x, and the 0.4.0 packages keep working with Server 0.9.x, so
they remain available for rollback. MP functions take an optional
`onMpCompletion` observer in their call options, nine operations are gone, and
several inputs became required or optional. See the
[Server 0.10 and Client 0.5 migration guide](/docs/server-0-10-and-client-0-5-migration) and the
[client 0.5.0 migration notes](https://github.com/spatialanalyzer/briosa-js/blob/79ed14bf6906c5b079032a9d695cfee2cd62678e/docs/contract-major-3-migration.md)
for every change. The nine removed operations keep their method pages, which
explain the removal; each page's method history keeps the 0.4.0 contract.

## MP Commands

Browse **MP Commands** in the sidebar for operation signatures, defaults,
result types, and links to the corresponding gRPC contract and MP catalog.
The catalog's Current status describes server availability. Client package
versions and runtime validation are separate claims.

See [Release Status](/docs/releases) for product availability and validation limits.

## Exact Target

This section covers **SA 2024.1.0508.5**. Return to [SA 2026.1.0529.7](/api/javascript). Both references belong to product release 0.5.0.

## Selection and Value Types

See [Installation Selection and Discovery](./installation-selection.md) for server selection, [Server Snapshot and Capabilities](./lifecycle.md#server-snapshot-and-capabilities) for the capability snapshot, [MP Completion](./lifecycle.md#mp-completion) and [Operation Errors](./lifecycle.md#operation-errors) for MP outcomes and typed failures, and [MP Value Types](./value-types.md) for exact-target public values.
