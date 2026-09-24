---
title: SpatialAnalyzer .NET API
sidebar_label: Briosa for .NET API
description: Use the Briosa .NET client to automate SpatialAnalyzer from C#. Reference client lifecycle, MP commands, typed results, and error handling.
slug: /
---

# Briosa for .NET API

[SA 2026.1.0529.7](/api/dotnet) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5)

This section follows the public API of the Briosa .NET client library. Use it
to look up client lifecycle, operation methods, result types, exceptions,
timeouts, and cancellation behavior from C# and other .NET languages.

This is the **0.3.0** client reference for **SA 2026.1.0529.7**.
Use the [SA 2024 reference](/api/dotnet/sa-2024.1.0508.5) for the other released exact target. Arguments, choices, and command availability can differ.

:::note[Local Connections]

The .NET client launches Briosa only on the same Windows machine as
SpatialAnalyzer. Secure remote connections are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

Start with the [`BriosaClient` lifecycle](/api/dotnet/lifecycle) to understand
default startup, explicit SDK and SA control, command admission, recovery,
stop, restart, and cleanup.

For task-oriented examples, start with
[Run your first MP command](/docs/getting-started/first-request). For the
underlying service contract, use the [gRPC API Reference](/api/grpc).

[View the .NET client repository](https://github.com/spatialanalyzer/briosa-dotnet)

## MP Commands

Browse **MP Commands** in the sidebar for operation signatures, defaults,
result types, and links to the corresponding gRPC contract and MP catalog.
The catalog's Current status describes server availability. Client package
versions and runtime validation are separate claims.

See [Release Status](/docs/releases) for product availability and validation limits.

## Exact Target

This section covers **SA 2026.1.0529.7**. Select [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5) for its released signatures and types.

## Selection and Value Types

See [Installation Selection and Discovery](./installation-selection.md) for client 0.3.0 startup additions, and [MP Value Types](./value-types.md) for exact-target public values.
