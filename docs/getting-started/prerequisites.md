---
title: Prerequisites
---

# Prerequisites

For the current exact target you need:

- A Windows x64 workstation
- SpatialAnalyzer `2026.1.0529.7` and its matching SDK, installed separately
- A valid SpatialAnalyzer license for the operations you intend to perform
- No competing Briosa worker, ObjectiveSA probe, SDK experiment, or other SDK
  client connected to the SpatialAnalyzer instance you intend to use
- A first-party Briosa client, or a gRPC client such as
  [grpcurl](https://github.com/fullstorydev/grpcurl) for the source workflow

Building Briosa from source additionally requires the .NET SDK selected by the
server repository's `global.json`. Building this website requires Node.js 24,
but Node.js is not required to run the Briosa server.

:::warning[Match the Exact Release]

A Briosa product is locked to one exact SA release. A machine may have several
releases installed, but the configured target, activated SDK, and connected
application identities must agree before Briosa admits MP work.

:::

## Use a Clean SDK Ownership State

You may start Briosa and its disconnected SDK before SpatialAnalyzer. Before
connecting the SDK, either start exactly one matching application yourself or
ask the running Briosa server to launch a new exact-target application.

When several SpatialAnalyzer instances are open, only the first eligible
instance owns the SDK communication ports. Closing it does not transfer
ownership to an instance that is already open.

If ownership is uncertain, stop Briosa's SDK and other SDK clients, close
every SpatialAnalyzer instance, start a new SDK generation, start exactly one
matching application, wait for it to finish starting, and then connect the SDK.
Launching a new application through Briosa also requires this clean
application state.

## Network Boundary

Current Briosa releases, including the planned v1 contract, are local-only.
The Briosa server, SA SDK, and SpatialAnalyzer application run on the same
Windows machine. Briosa connects the SDK to the local application, and clients
reach Briosa through an unencrypted HTTP/2 loopback endpoint such as
`127.0.0.1:50051`.

Remote authentication, authorization, TLS, and controller-ownership policy are
not implemented. Do not widen the binding, expose it through a proxy or tunnel,
or place it on a shared network. Secure connections to Briosa servers deployed
beside SpatialAnalyzer on other machines are
[planned for a future release](https://github.com/spatialanalyzer/briosa/issues/156).

The default first-party client lifecycle chooses its own loopback endpoint.
Direct gRPC applications work with an endpoint when they run the Briosa server
themselves. See
[Manage Briosa, SDK, and SpatialAnalyzer Lifecycles](../concepts/client-lifecycle)
for the server, application, and SDK lifecycles.

[Run the server →](./run-the-server)
