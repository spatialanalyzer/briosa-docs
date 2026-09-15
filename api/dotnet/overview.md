---
title: Briosa for .NET API
description: Reference documentation for the Briosa .NET client library.
slug: /
---

# Briosa for .NET API

This section follows the public API of the Briosa .NET client library. Use it
to look up client lifecycle, operation methods, result types, exceptions,
timeouts, and cancellation behavior from C# and other .NET languages.

This reference describes the implemented client source API. The first package
has not yet been published. Its reference remains **Unreleased** until a
package version is available; see the repository's source-build instructions.

:::note[Local-Only in v1]

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
The catalog's Current status describes server availability; it does not mean
that this client package has been published.

See [Release Status](/docs/releases) for product availability and validation limits.
