---
title: MP command catalog
description: Browse the evolving, exact-target catalog of SpatialAnalyzer MP commands and their Briosa support status.
---

import Link from '@docusaurus/Link';

# MP command catalog

This catalog describes the retained SpatialAnalyzer MP command surface for each
exact target Briosa reviews. It is broader than the Briosa API: it will include
supported commands, commands being evaluated for v1, and commands Briosa does
not plan or cannot implement.

:::important[Catalog entries are not API]

Only an entry explicitly marked **Supported** describes a committed Briosa
operation. The authoritative contracts and operation registry live in the
[Briosa server repository](https://github.com/spatialanalyzer/briosa).
For a running server, `DiscoveryService/ListCapabilities` reports the subset
currently admitted by policy.

:::

## Browse exact targets

<div className="catalog-group-grid">
  <Link
    className="catalog-group-card"
    to="/docs/mp-command-catalog/2026.1.0529.7/overview">
    <span className="catalog-group-kicker">Current catalog target</span>
    <strong>SpatialAnalyzer 2026.1.0529.7</strong>
    <p>Browse the SA-native group hierarchy and currently published command entries.</p>
    <span className="catalog-group-link">Open target catalog →</span>
  </Link>
</div>

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

The catalog is being built content-first in SpatialAnalyzer's exact-target
group hierarchy. Absence from the published pages currently means only that a
group has not been documented; it is not a support, exclusion, or
SpatialAnalyzer-availability claim.

Before an exact target reaches its v1 documentation freeze, every retained
command identity will need a reviewed entry and no command may remain **Under
review**.
