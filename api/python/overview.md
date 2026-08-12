---
title: Briosa for Python API
description: Reference documentation for the Briosa Python client library.
slug: /
---

# Briosa for Python API

This section follows the public API of the Briosa Python client library. Use it
to look up asynchronous client lifecycle, operation methods, result types,
exceptions, timeouts, and cancellation behavior.

The first versioned reference will be published with the first supported client
package release. Until then, these pages describe the reviewed public contract
being implemented. Pre-release package checkouts may still expose temporary
bootstrap interfaces.

:::note[Local-Only in v1]

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
