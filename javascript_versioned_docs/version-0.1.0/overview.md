---
title: Briosa for JavaScript and TypeScript API
description: Reference documentation for the Briosa JavaScript and TypeScript client library.
slug: /
---

# Briosa for JavaScript and TypeScript API

This section follows the public API of the Briosa JavaScript and TypeScript
client library. Use it to look up client lifecycle, operation methods, result
types, errors, timeouts, and cancellation behavior for Node.js applications.

This is the **0.1.0** client reference for **SA 2026.1.0529.7**.
Separate 0.1.0 packages are available for SA 2024.1.0508.5. Their exact-target
arguments, choices, and available commands can differ; do not assume a 2026
signature applies to 2024. See [Install the Exact-Target Client](/docs/getting-started/run-the-server#install-the-exact-target-client)
for both package identities, and the [SA 2024 review notes](/mp-command-catalog/2024.1.0508.5/review-notes)
for reviewed differences. The installed package supplies its exact API types.

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

## MP Commands

Browse **MP Commands** in the sidebar for operation signatures, defaults,
result types, and links to the corresponding gRPC contract and MP catalog.
The catalog's Current status describes server availability. Client package
versions and runtime validation are separate claims.

See [Release Status](/docs/releases) for product availability and validation limits.
