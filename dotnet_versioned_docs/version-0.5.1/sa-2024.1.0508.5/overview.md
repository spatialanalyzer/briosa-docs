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

This is the **0.5.1** client reference for **SA 2024.1.0508.5**.
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

## Server 0.10 and Client 0.5 Compatibility {/* #contract-major-3 */}

Clients 0.5.0 and 0.5.1 work with Servers 0.10.0 and 0.10.1 for the same exact
SA target, and client 0.4.0 works with Server 0.9.x. Before launch, client 0.5.x
checks that the installation matches the exact SA target and declares support
for this client, and rejects Server 0.9.x and earlier. Keep client 0.4.0 for
applications that must run against Server 0.9.x; the two clients and servers
install side by side. Every MP method now takes an optional `onMpCompletion`
observer, nine operations are gone, and several inputs became required or
optional. See the
[Server 0.10 and Client 0.5 migration guide](/docs/server-0-10-and-client-0-5-migration)
and the
[client 0.5.0 migration notes](https://github.com/spatialanalyzer/briosa-dotnet/blob/1202f690bb97508e2523909d045bdb8aecc188cb/docs/contract-major-3-migration.md)
for every change.

## Changes in Client 0.5.1

Client 0.5.1 adds to 0.5.0 without changing its MP methods. With Server 0.10.1,
it reads what that server adds; with Server 0.10.0, each addition reports that
the server sent nothing.

- **Startup budget.** When `BriosaStartOptions.StartupTimeout` is left unset,
  the budget grows to the server's published startup allowance plus 20 seconds,
  never below two minutes. A timeout you set is always used as given. See
  [Client Construction](./lifecycle.md#client-construction).
- **Server snapshot.** `LifecycleBounds` reports the server's lifecycle wait
  allowances, and `ConfiguredInteractionMode` the SpatialAnalyzer interaction
  mode the server is configured to set. See
  [Server Snapshot and Admission](./installation-selection.md#server-snapshot-and-admission).
- **Policy denials.** `BriosaOperationException.PolicyDenial`, and the same
  detail on denied capabilities, says which policy step denied a call. Each
  capability lists its reviewed `RequestOptions`. None of it changes a
  failure's kind or a capability's admission.

The [.NET 0.5.1 release notes](https://github.com/spatialanalyzer/briosa-dotnet/releases/tag/v0.5.1)
and the [README](https://github.com/spatialanalyzer/briosa-dotnet/blob/v0.5.1/README.md#051-for-server-010x)
list the four other differences from 0.5.0: three failure-case fixes and the
members that reflection-based serializers now see.

## MP Commands

Browse **MP Commands** in the sidebar for operation signatures, defaults,
result types, and links to the corresponding gRPC contract and MP catalog.
The catalog's Current status describes server availability. Client package
versions and runtime validation are separate claims.

See [Release Status](/docs/releases) for product availability and validation limits.

## Exact Target

This section covers **SA 2024.1.0508.5**. Return to [SA 2026.1.0529.7](/api/dotnet). Both references belong to product release 0.5.1.

## Selection and Value Types

See [Installation Selection and Discovery](./installation-selection.md) for server selection and the capability snapshot, [MP Command Outcomes](./lifecycle.md#mp-command-outcomes) for MP completion and typed failures, and [MP Value Types](./value-types.md) for exact-target public values.
