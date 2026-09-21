---
title: SpatialAnalyzer JavaScript and TypeScript API
sidebar_label: Briosa for JavaScript and TypeScript API
description: Automate SpatialAnalyzer from Node.js with Briosa. Reference JavaScript and TypeScript client lifecycle, MP commands, typed results, and errors.
slug: /sa-2024.1.0508.5
---

# Briosa for JavaScript and TypeScript API

[SA 2026.1.0529.7](/api/javascript) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5)

This section follows the public API of the Briosa JavaScript and TypeScript
client library. Use it to look up client lifecycle, operation methods, result
types, errors, timeouts, and cancellation behavior for Node.js applications.

This is the **0.2.0** client reference for **SA 2024.1.0508.5**.
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

## MP Commands

Browse **MP Commands** in the sidebar for operation signatures, defaults,
result types, and links to the corresponding gRPC contract and MP catalog.
The catalog's Current status describes server availability. Client package
versions and runtime validation are separate claims.

See [Release Status](/docs/releases) for product availability and validation limits.

## Exact Target

This section covers **SA 2024.1.0508.5**. Return to [SA 2026.1.0529.7](/api/javascript). Both references belong to product release 0.2.0.

## Selection and Value Types

See [Installation Selection and Discovery](./installation-selection.md) for client 0.2.0 startup additions, and [MP Value Types](./value-types.md) for exact-target public values.
