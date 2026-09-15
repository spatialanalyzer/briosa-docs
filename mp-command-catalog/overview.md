---
title: MP Command Catalog
description: Browse the evolving, exact-target catalog of SpatialAnalyzer MP commands and their Briosa support status.
slug: /
---

import Link from '@docusaurus/Link';

# MP Command Catalog

This catalog describes the retained SpatialAnalyzer MP command surface for each
exact target Briosa reviews. It is broader than the Briosa API: it includes
current commands, commands planned for the next release, commands without a
release commitment, and commands Briosa does not plan or cannot implement.

:::important[Status Determines Availability]

**Current** entries are callable today. **Next** entries link to reviewed API
contracts that are not exposed by the released server. The
authoritative implemented contracts and operation registry live in the
[Briosa server repository](https://github.com/spatialanalyzer/briosa). For a
running server, `DiscoveryService/ListCapabilities` reports the subset currently
admitted by policy.

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

[Search and filter the reviewed command index →](./commands/index.md)

## How to Read Status

| Status | Meaning |
| --- | --- |
| **Current** | The operation is implemented in the released server for this exact target; runtime policy and readiness still apply. |
| **Next** | A proposed API is documented, but the current server release does not expose it. |
| **Undecided** | The command is still being evaluated and has no reviewed disposition. |
| **Uncommitted** | The command may be useful, but the project has made no release commitment. |
| **Excluded** | A reviewed product, policy, safety, or scope decision excludes it. |
| **SDK Unavailable** | The reviewed exact-target SDK surface cannot implement it. |

An **At Risk** note qualifies validation evidence independently from support
status. A missing fixture, hardware dependency, license, or unexecuted licensed
scenario does not by itself make a command intentionally excluded.

## Released Availability

The catalog reflects Briosa Server **0.5.1** for SA **2026.1.0529.7**.
Browse command groups to find exact MP labels, inputs, outputs, API links,
and alternatives.

Released server support and client-package publication are separate. The three
client implementations are available as source, but their packages remain
unpublished. See [Release Status](/docs/releases).
