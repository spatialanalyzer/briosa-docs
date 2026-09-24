---
title: SpatialAnalyzer gRPC API
sidebar_label: Briosa gRPC API
description: Released Briosa gRPC services, protobuf contracts, and supported SpatialAnalyzer MP commands for SA 2024.1.0508.5.
slug: /sa-2024.1.0508.5
---

# Briosa gRPC API

[SA 2026.1.0529.7](/api/grpc) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5)

This reference documents **Briosa Server 0.8.0** for exact SpatialAnalyzer
target **2024.1.0508.5**. It covers lifecycle services, MP operations,
request and result types, and execution outcomes.

Download the server through [Install Briosa](/install). Use the
[.NET](/api/dotnet/sa-2024.1.0508.5), [Python](/api/python/sa-2024.1.0508.5), or
[JavaScript/TypeScript](/api/javascript/sa-2024.1.0508.5) reference for the idiomatic client
source APIs. The three client families are published as version 0.3.0 for both exact targets.

:::warning[Local-Only API]

The client, server, SDK, and SpatialAnalyzer run on the same Windows machine.
The public endpoint is loopback-only. Secure remote connections remain
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

## Lifecycle Services

The public server can be live without an active SpatialAnalyzer application or
SDK. The [lifecycle services](./lifecycle.md) manage these resources separately:

- `briosa.SpatialAnalyzerLifecycle` observes, launches, and closes an owned application.
- `briosa.SpatialAnalyzerSdkLifecycle` starts, connects, reconnects, stops,
  diagnoses, and recovers the isolated SDK generation.

MP execution requires verified runtime identities and a ready execution channel.
Starting or recovering the SDK leaves it disconnected. Stopping the server
never implicitly closes SpatialAnalyzer. Recovery does not replay an earlier
command or establish its unknown outcome.

## MP Operations

Browse **MP Commands** in the sidebar or find an exact MP label in the
[command catalog](/mp-command-catalog). Each operation documents its RPC,
arguments, defaults, results, and validation qualification.

`DiscoveryService/ListCapabilities` reports the operations admitted by the
running server's implementation, isolation rules, and allow/deny policy.
Inclusion in this reference does not override those controls or imply that an
operation is ready to run in the current session.

The server contains both read-only and mutating operations. Follow each
operation's replay guidance; do not retry an ambiguously completed command
automatically. See [Execution Outcomes](/docs/concepts/execution-outcomes).

## Release and Validation Status

This is a released **v0.x API**, with explicit validation limits. Portable tests
and local licensed observations do not establish complete real-SA validation
for every command. Hardware, external software, interactive workflows, and
fixture-dependent operations retain their individual At Risk qualifications.
See [Release Status](/docs/releases) for the current v1.0 gates.

`RunCribSheet`, `ProjectObjects`, and `StopProjection` are released for this target. They are absent from the SA 2026 service.

The [released protobuf source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2024.1.0508.5/proto/briosa)
and handwritten runtime registration define the implemented API. Catalog
membership and retained message types do not create an RPC.

## Exact Target

This section covers **SA 2024.1.0508.5**. Return to [SA 2026.1.0529.7](/api/grpc). Both references belong to product release 0.8.0.

## Discovery and Shared Values

See [Server Discovery](./discovery.md) for identity, compatibility, and capability RPCs; see [MP Value Types](./value-types.md) for exact-target protobuf values.
