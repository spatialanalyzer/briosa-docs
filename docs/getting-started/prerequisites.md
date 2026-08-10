---
title: Prerequisites
---

# Prerequisites

For the current exact target you need:

- a Windows x64 workstation;
- SpatialAnalyzer `2026.1.0529.7` and its matching SDK, installed separately;
- a valid SpatialAnalyzer license for the operations you intend to perform;
- exactly one eligible SpatialAnalyzer instance running before Briosa starts;
- no competing Briosa worker, ObjectiveSA probe, SDK experiment, or other SDK
  client attached to that instance; and
- a gRPC client such as
  [grpcurl](https://github.com/fullstorydev/grpcurl) for the source workflow.

Building Briosa from source additionally requires the .NET SDK selected by the
server repository's `global.json`. Building this website requires Node.js 24,
but Node.js is not required to run the Briosa server.

:::warning[Match the Exact Release]

A Briosa product is locked to one exact SA release. A machine may have several
releases installed, but the configured target, activated SDK, and connected
application identities must agree before Briosa admits MP work.

:::

## Use a Clean SDK Ownership State

When several SpatialAnalyzer instances are open, only the first eligible
instance owns the SDK communication ports. Closing it does not transfer
ownership to an instance that is already open.

If ownership is uncertain, stop Briosa and other SDK clients, close every
SpatialAnalyzer instance, start exactly one matching instance, wait for it to
finish starting, and then start Briosa.

## Network Boundary

The baseline endpoint is unencrypted HTTP/2 on `127.0.0.1:50051`. It is
intentionally loopback-only. Remote authentication, authorization, TLS, and
command-risk policy are not established; do not widen the binding, expose it
through a tunnel, or place it on a shared network.

[Run the server →](./run-the-server)
