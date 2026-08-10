---
title: MP Command Catalog
description: Browse the evolving, exact-target catalog of SpatialAnalyzer MP commands and their Briosa support status.
slug: /
---

import Link from '@docusaurus/Link';

# MP Command Catalog

This catalog describes the retained SpatialAnalyzer MP command surface for each
exact target Briosa reviews. It is broader than the Briosa API: it will include
current commands, commands planned for the next release, commands without a
release commitment, and commands Briosa does not plan or cannot implement.

:::important[Catalog Entries Are Not API]

Only an entry explicitly marked **Current** describes a committed Briosa
operation. The authoritative contracts and operation registry live in the
[Briosa server repository](https://github.com/spatialanalyzer/briosa).
For a running server, `DiscoveryService/ListCapabilities` reports the subset
currently admitted by policy.

:::

## Browse Exact Targets

<div className="catalog-group-grid">
  <Link
    className="catalog-group-card"
    to="/mp-command-catalog/2026.1.0529.7/overview">
    <span className="catalog-group-kicker">Current Catalog Target</span>
    <strong>SpatialAnalyzer 2026.1.0529.7</strong>
    <p>Browse the SA-native group hierarchy and currently published command entries.</p>
    <span className="catalog-group-link">Open target catalog →</span>
  </Link>
</div>

## How Command Pages Are Organized

Exact-target pages preserve the MP Editor group hierarchy for one
SpatialAnalyzer release. They act as version-specific navigation and link to a
canonical command entry.

Canonical command pages document each MP command once. A command entry records
its reviewed SA availability, group history, signature revisions, Briosa
support, and replacement guidance when applicable. This keeps one searchable
command result even when the same signature appears in several SA releases.

[View the canonical File Operations command format →](./commands/file-operations.md)

## How to Read Status

| Status | Meaning |
| --- | --- |
| **Current** | A committed handwritten Briosa operation exists for this exact target. |
| **Next** | The project has committed it to the next planned release, but it is not yet callable in the current release. |
| **Undecided** | The command is still being evaluated and has no reviewed disposition. |
| **Uncommitted** | The command may be useful, but the project has made no release commitment. |
| **Excluded** | A reviewed product, policy, safety, or scope decision excludes it. |
| **SDK Unavailable** | The reviewed exact-target SDK surface cannot implement it. |

An **At risk** note qualifies validation evidence independently from support
status. A missing fixture, hardware dependency, license, or unexecuted licensed
scenario does not by itself make a command intentionally excluded.

## Coverage While the Catalog Is Incomplete

The catalog is being built content-first in SpatialAnalyzer's exact-target
group hierarchy. Absence from the published pages currently means only that a
group has not been documented; it is not a support, exclusion, or
SpatialAnalyzer-availability claim.

Before an exact target reaches a documentation freeze, every retained command
identity will need a reviewed entry and no command may remain **Undecided**.
