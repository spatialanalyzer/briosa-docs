---
title: Briosa for .NET API
sidebar_label: Briosa for .NET API
description: Use the Briosa .NET client to automate SpatialAnalyzer from C#. Reference client lifecycle, MP commands, typed results, and error handling.
slug: /sa-2024.1.0508.5
---

# Briosa for .NET API

[SA 2026.1.0529.7](/api/dotnet) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5)

This section follows the public API of the Briosa .NET client library. Use it
to look up client lifecycle, operation methods, result types, exceptions,
timeouts, and cancellation behavior from C# and other .NET languages.

This is the **0.5.0** client reference for **SA 2024.1.0508.5**.
Use this SA 2024 reference; the [SA 2026 reference](/api/dotnet) covers the other released exact target. Arguments, choices, and command availability can differ.

:::note[Local Connections]

The .NET client launches Briosa only on the same Windows machine as
SpatialAnalyzer. Secure remote connections are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

Start with the [`BriosaClient` lifecycle](/api/dotnet/sa-2024.1.0508.5/lifecycle) to understand
default startup, explicit SDK and SA control, command admission, recovery,
stop, restart, and cleanup.

For task-oriented examples, start with
[Run your first MP command](/docs/getting-started/first-request). For the
underlying service contract, use the [gRPC API Reference](/api/grpc/sa-2024.1.0508.5).

[View the .NET client repository](https://github.com/spatialanalyzer/briosa-dotnet)

## Contract Major 3

Client 0.5.0 selects only servers of behavioral contract major 3, which Server
0.10.0 introduces. Keep client 0.4.0 for applications that must run against
Server 0.9.x; the two clients and servers install side by side. Every MP method
now takes an optional `onMpCompletion` observer, nine operations are gone, and
several inputs became required or optional. See the
[client 0.5.0 migration notes](https://github.com/spatialanalyzer/briosa-dotnet/blob/3823369030dc0a286d698a4795b9442b4c7f9bf1/docs/contract-major-3-migration.md)
for every change.

## MP Commands

Browse **MP Commands** in the sidebar for operation signatures, defaults,
result types, and links to the corresponding gRPC contract and MP catalog.
The catalog's Current status describes server availability. Client package
versions and runtime validation are separate claims.

See [Release Status](/docs/releases) for product availability and validation limits.

## Exact Target

This section covers **SA 2024.1.0508.5**. Return to [SA 2026.1.0529.7](/api/dotnet). Both references belong to product release 0.5.0.

## Selection and Value Types

See [Installation Selection and Discovery](./installation-selection.md) for server selection and the capability snapshot, [MP Command Outcomes](./lifecycle.md#mp-command-outcomes) for MP completion and typed failures, and [MP Value Types](./value-types.md) for exact-target public values.
