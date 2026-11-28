---
title: Briosa gRPC API
sidebar_label: Briosa gRPC API
description: Released Briosa gRPC services, protobuf contracts, and supported SpatialAnalyzer MP commands for SA 2026.1.0529.7.
slug: /
---

# Briosa gRPC API

[SA 2026.1.0529.7](/api/grpc) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5)

This reference documents **Briosa Server 0.10.2** for exact SpatialAnalyzer
target **2026.1.0529.7**. It covers lifecycle services, MP operations,
request and result types, and execution outcomes.

Download the server through [Install Briosa](/install). Use the
[.NET](/api/dotnet), [Python](/api/python), or
[JavaScript/TypeScript](/api/javascript) reference for the idiomatic client
source APIs. The .NET and Python clients are published as version 0.5.1 and the
JavaScript/TypeScript client as version 0.5.2, for both exact targets. For the
matching SA target, Server 0.10.2 works with clients 0.5.0 and 0.5.1 in all
three languages and with JavaScript/TypeScript client 0.5.2. No new client
release accompanies Server 0.10.2, and published clients ignore the new
response and error fields.

:::warning[Local-Only API]

The client, server, SDK, and SpatialAnalyzer run on the same Windows machine.
The public endpoint is loopback-only. Secure remote connections remain
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

:::

## Changes in Server 0.10.2

Server 0.10.2 is a compatible update to Server 0.10.1 (and includes everything
from Server 0.10.1 when upgrading from 0.10.0). Bindings generated from the
0.10.0 or 0.10.1 exact-target protocol artifact keep working; regenerate from
the 0.10.2 artifact to read the new fields. Sending `briosa-caller-restriction`
uses ordinary gRPC request metadata and needs no regenerated bindings. Keep a
gRPC client receive limit of at least 4 MiB to receive results up to the 1 MiB
worker budget.

- **Request validation details.** When field validation fails, the
  `OperationError` trailer (`briosa-operation-error-bin`) now includes optional
  `request_validation` (`RequestValidationDetails`), naming the first invalid
  request field (`field_path`, exact protobuf field names separated by dots,
  omitting indices for repeated message fields) and the constraint it failed
  (`RequestFieldConstraint`), with no request value. Status text, failure kind,
  diagnostic code, disposition, and replay guidance are unchanged. See
  [Request Validation Details](./discovery.md#request-validation-details).
- **MP command name and bundled descriptor.** `DiscoveryService/ListCapabilities`
  sets `OperationCapability.mp_step` (field 14) on every listed capability,
  admitted or denied, to the exact SpatialAnalyzer MP command name the operation
  executes. Both Windows x64 server packages also include
  `descriptor/briosa.protoset`, byte-identical to the descriptor in the matching
  protocol artifact, so tools such as `grpcurl` can describe and call a packaged
  server without gRPC server reflection. See [Server Discovery](./discovery.md).
- **Per-call caller restriction (`briosa-caller-restriction`).** An MP operation
  call can carry one ASCII gRPC metadata header, `briosa-caller-restriction`, to
  narrow admission for that single call (`profile=<profile>` and/or
  `deny=<flag>[,<flag>...]`). It runs after server policy admits the call and
  never widens server configuration. Denials report
  `POLICY_DENIAL_RULE_CALLER_PROFILE` or `POLICY_DENIAL_RULE_CALLER_FLAG` with
  `caller_admission_profile` or `caller_denied_flag` in `PolicyDenialDetails`;
  malformed headers fail closed before policy with `INVALID_ARGUMENT`,
  `VALIDATION`, and diagnostic `caller-restriction-invalid`. Server 0.10.1 and
  earlier silently ignore this header, so any caller relying on it must first
  query `GetServerInfo` and verify `compatibility.major` `3` and
  `compatibility.revision` `2` or later. See
  [Policy Denial Details](./discovery.md#policy-denial-details) and
  [Operation Admission](/docs/deployment/operation-admission#caller-restriction).

No RPC or MP operation was added or removed, and `policy_fingerprint` is
unchanged. `GetServerInfoResponse.compatibility` reports `major` `3` and
`revision` `2`. See [Release Status](/docs/releases) for the full release
summary.

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
but are not exposed by the 0.10.2 service. Their reference pages state that limit.

The [released protobuf source](https://github.com/spatialanalyzer/briosa/tree/v0.10.2/targets/2026.1.0529.7/proto/briosa)
and handwritten runtime registration define the implemented API. Catalog
membership and retained message types do not create an RPC.

## Exact Target

This section covers **SA 2026.1.0529.7**. Select [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5) for its released signatures and types.

## Discovery and Shared Values

See [Server Discovery](./discovery.md) for identity, compatibility, and capability RPCs; see [MP Value Types](./value-types.md) for exact-target protobuf values.
