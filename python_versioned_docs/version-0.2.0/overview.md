---
title: SpatialAnalyzer Python API
sidebar_label: Briosa for Python API
description: Use the asynchronous Briosa Python client to automate SpatialAnalyzer. Reference client lifecycle, MP commands, typed results, and error handling.
slug: /
---

# Briosa for Python API

[SA 2026.1.0529.7](/api/python) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5)

This section follows the public API of the Briosa Python client library. Use it
to look up asynchronous client lifecycle, operation methods, result types,
exceptions, timeouts, and cancellation behavior.

This is the **0.2.0** client reference for **SA 2026.1.0529.7**.
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

See [Release Status](/docs/releases) for product availability and validation limits.

## Exact Target

This section covers **SA 2026.1.0529.7**. Select [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5) for its released signatures and types.

## Selection and Value Types

See [Installation Selection and Discovery](./installation-selection.md) for client 0.2.0 startup additions, and [MP Value Types](./value-types.md) for exact-target public values.
