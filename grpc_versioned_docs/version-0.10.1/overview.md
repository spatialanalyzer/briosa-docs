---
title: Briosa gRPC API
sidebar_label: Briosa gRPC API
description: Released Briosa gRPC services, protobuf contracts, and supported SpatialAnalyzer MP commands for SA 2026.1.0529.7.
slug: /
---

# Briosa gRPC API

[SA 2026.1.0529.7](/api/grpc) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5)

This reference documents **Briosa Server 0.10.1** for exact SpatialAnalyzer
target **2026.1.0529.7**. It covers lifecycle services, MP operations,
request and result types, and execution outcomes.

Download the server through [Install Briosa](/install). Use the
[.NET](/api/dotnet), [Python](/api/python), or
[JavaScript/TypeScript](/api/javascript) reference for the idiomatic client
source APIs. The .NET and Python clients are published as version 0.5.1 and the
JavaScript/TypeScript client as version 0.5.2, for both exact targets. For the
matching SA target, Server 0.10.1 works with clients 0.5.0 and 0.5.1 in all
three languages and with JavaScript/TypeScript client 0.5.2.

:::warning[Local-Only API]

The client, server, SDK, and SpatialAnalyzer run on the same Windows machine.
The public endpoint is loopback-only. Secure remote connections remain
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

## Changes in Server 0.10.1

Server 0.10.1 is a compatible update to Server 0.10.0. Bindings generated from
the 0.10.0 protocol artifact keep working; regenerate from the 0.10.1 artifact
to read the new fields.

- **Larger results.** Inbound requests stay limited to 64 KiB (65,536 bytes),
  while the worker's result budget rises from 64 KiB to 1 MiB (1,048,576 bytes).
  The public protobuf message can differ in size from the worker frame. Set your
  gRPC client's receive limit to at least 4 MiB to receive results up to that
  budget. If the completed worker result frame exceeds 1 MiB, the call returns
  `DATA_LOSS` with disposition `COMPLETED`, replay guidance `DO_NOT_REPLAY`,
  and the original MP result code. When no output getter faulted, the failure
  kind is `OUTPUT_RETRIEVAL_FAILURE` with diagnostic
  `worker-output-encoding-rejected`. If an output getter also faulted, the
  failure kind is `SDK_CALL_FAULTED`. Outputs retained in the frame are
  reported as retrieved, and outputs dropped for size carry
  `worker-output-encoding-rejected`.
- **Discovery.** `GetServerInfo` publishes the server's lifecycle wait
  allowances and its configured SpatialAnalyzer interaction mode.
  `ListCapabilities` adds each operation's reviewed request options and, for a
  denied entry, the policy step that denied it. See
  [Server Discovery](./discovery.md).
- **Policy denials.** A `POLICY_DENIED` failure carries `policy_denial` in its
  `OperationError` trailer. See
  [Policy Denial Details](./discovery.md#policy-denial-details).
- **Readiness.** When the worker's execution consumer fails, health checks,
  `GetServerInfo`, `GetSpatialAnalyzerSdkState`, and the `briosa.ready` gauge
  now report not ready (`worker-execution-consumer-failed`) at once.

No RPC or MP operation was added or removed. Policy denials keep their status
codes, failure kinds, dispositions, guidance, and diagnostic codes, and
`policy_fingerprint` is unchanged. See [Release Status](/docs/releases) for the
full release summary.

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

`DiscoveryService/ListCapabilities` reports the operations that the running
server's admission profile admits, with each operation's reviewed risk flags,
duration class, validation status, and admission. Each operation page shows the
profiles that admit it, its risk flags, and its duration class; see
[Operation Admission](/docs/deployment/operation-admission). Inclusion in this
reference does not override those controls or imply that an operation is ready
to run in the current session.

Server 0.10.0 removed nine operations on these exact targets: eight
failed end to end on both targets (three of them reached MP code `2` but returned
no usable list), and the ninth was removed unverified because no operator could
complete the selection. Their pages remain as unavailable views that explain the
removal and link to the contract that Server 0.9.2 and earlier serve.

The server contains both read-only and mutating operations. Follow each
operation's replay guidance; do not retry an ambiguously completed command
automatically. See [Execution Outcomes](/docs/concepts/execution-outcomes).

## Release and Validation Status

This is a released **v0.x API**, with explicit validation limits. Portable tests
and local licensed observations do not establish complete real-SA validation
for every command. Hardware, external software, interactive workflows, and
fixture-dependent operations retain their individual At Risk qualifications.
See [Release Status](/docs/releases) for the current v1.0 gates.

`RunCribSheet`, `ProjectObjects`, and `StopProjection` are documented proposals
but are not exposed by the 0.10.1 service. Their reference pages state that limit.

The [released protobuf source](https://github.com/spatialanalyzer/briosa/tree/v0.10.1/targets/2026.1.0529.7/proto/briosa)
and handwritten runtime registration define the implemented API. Catalog
membership and retained message types do not create an RPC.

## Exact Target

This section covers **SA 2026.1.0529.7**. Select [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5) for its released signatures and types.

## Discovery and Shared Values

See [Server Discovery](./discovery.md) for identity, compatibility, and capability RPCs; see [MP Value Types](./value-types.md) for exact-target protobuf values.
