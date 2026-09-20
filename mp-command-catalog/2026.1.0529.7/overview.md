---
title: SA 2026.1.0529.7 Catalog
description: Find SpatialAnalyzer 2026.1.0529.7 MP commands and their availability in Briosa Server 0.7.0.
---

# SA 2026.1.0529.7 Catalog

This catalog preserves the SpatialAnalyzer MP Editor group hierarchy and
explains each reviewed command's availability in **Briosa Server 0.7.0**.

- [Browse the SpatialAnalyzer group tree](./group-hierarchy.md)
- [Search and filter the command index](../commands/index.md)
- [Read the released server API](/api/grpc)
- [Understand command statuses](../overview.md#how-to-read-status)

## Availability

**Current** means the operation is implemented in the released server for this
exact target. Runtime allow/deny policy, isolation rules, and readiness still
determine whether a particular call can run. Query
`DiscoveryService/ListCapabilities` for the admitted surface of your server.

The server registry includes **1,027 MP operations**. The broader catalog also
contains proposed operations, exclusions, and commands unavailable through the
SDK. A catalog entry does not make a command part of the server API.

`Run Crib Sheet`, `Project Objects`, and `Stop Projection` retain **Next** status:
their proposed RPCs are absent from the released service. Their presence in
historical plans or retained protobuf message definitions does not make them callable.

## Validation

Availability and validation are separate. Preserve each command's At Risk
qualification when its fixture, hardware, external software, or licensed test
has not been exercised. A local probe supports only the behavior actually
observed. It does not establish full workflow coverage or protected CI validation.

See [Release Status](/docs/releases) for outstanding validation work and
current requirements before Server 1.0.

## Catalog Coverage

The retained exact-target evidence contains 1,412 command identities. The public
catalog consolidates repeated source routes into canonical command entries and
preserves documentation-only identities where they explain SDK limitations.
The command index is the user-facing list; retained evidence counts are not API
support counts. No published entry currently has an Undecided disposition.
