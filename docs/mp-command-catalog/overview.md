---
title: MP command catalog
description: Browse the evolving, exact-target catalog of SpatialAnalyzer MP commands and their Briosa support status.
---

# MP command catalog

This catalog describes the retained SpatialAnalyzer MP command surface for each
exact target Briosa reviews. It is broader than the Briosa API: it will include
supported commands, commands being evaluated for v1, and commands Briosa does
not plan or cannot implement.

The first target is SpatialAnalyzer `2026.1.0529.7`.

:::important[Catalog entries are not API]

Only an entry explicitly marked **Supported** describes a committed Briosa
operation. The authoritative contracts and operation registry live in the
[Briosa server repository](https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7).
For a running server, `DiscoveryService/ListCapabilities` reports the subset
currently admitted by policy.

:::

## Browse SA 2026.1.0529.7

| Command group | Published commands | Current contents |
| --- | ---: | --- |
| [Current application context](./2026.1.0529.7/current-context.md) | 4 | working directory, active collection, active units, and working frame |
| [Collection inspection](./2026.1.0529.7/collection-inspection.md) | 2 | collection count and indexed collection names |

These first pages cover the six MP commands currently supported by Briosa.
Additional logical groups will be added as the retained command inventory is
reviewed and dispositioned during v0.x development.

## How to read status

| Status | Meaning |
| --- | --- |
| **Supported** | A committed handwritten Briosa operation exists for this exact target. |
| **Selected for v1** | The project plans to implement it for v1, but it is not yet callable. |
| **Under review** | The command is still being evaluated during v0.x development. |
| **Deferred beyond v1** | It may be useful, but it is outside the v1 surface. |
| **Intentionally excluded** | A reviewed product, policy, safety, or scope decision excludes it. |
| **SDK unavailable** | The reviewed exact-target SDK surface cannot implement it. |

An **At risk** note qualifies validation evidence independently from support
status. A missing fixture, hardware dependency, license, or unexecuted licensed
scenario does not by itself make a command intentionally excluded.

## Coverage during v0.x

The catalog is being built content-first in logical command groups, so absence
from these pages currently means only that the group has not been published.
It is not a support, exclusion, or SpatialAnalyzer-availability claim.

Before the SA `2026.1.0529.7` v1 documentation freeze, every retained command
identity will need a reviewed entry and no command may remain **Under review**.
The disposition work is tracked in
[`spatialanalyzer/briosa#152`](https://github.com/spatialanalyzer/briosa/issues/152).
