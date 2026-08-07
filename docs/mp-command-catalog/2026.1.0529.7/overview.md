---
title: SA 2026.1.0529.7 catalog
description: Browse the SpatialAnalyzer-native MP group hierarchy and published Briosa catalog entries for SA 2026.1.0529.7.
---

import Link from '@docusaurus/Link';

# SA 2026.1.0529.7 catalog

The primary navigation on this target follows SpatialAnalyzer's own MP command
grouping. It does not regroup commands around Briosa services or workflows.

<div className="catalog-summary-grid">
  <div className="catalog-summary-card">
    <span>Top-level SA groups</span>
    <strong>25</strong>
    <small>Observed in the exact-target SDK outputs</small>
  </div>
  <div className="catalog-summary-card">
    <span>Group files</span>
    <strong>89</strong>
    <small>Root groups and nested subgroups</small>
  </div>
  <div className="catalog-summary-card">
    <span>SDK step observations</span>
    <strong>1,360</strong>
    <small>Evidence, not a support count</small>
  </div>
  <div className="catalog-summary-card">
    <span>Retained identities</span>
    <strong>1,412</strong>
    <small>SDK and installed-document evidence reconciled</small>
  </div>
</div>

:::info[How the SA group path is preserved]

The exact-target SDK output filename records the command's group path.
`ConstructionOperations.txt` is the root `Construction Operations` group;
`ConstructionOperations_BSplines.txt` is the
`Construction Operations / B-Splines` subgroup. Additional underscore-separated
segments add additional subgroup levels.

:::

## Published groups

These pages currently contain all six commands supported by Briosa. The count
on each card is the number of published catalog entries, not the number of MP
commands present in that SpatialAnalyzer group.

<div className="catalog-group-grid">
  <Link className="catalog-group-card" to="/docs/mp-command-catalog/2026.1.0529.7/analysis-operations">
    <span className="catalog-group-kicker">Root group</span>
    <strong>Analysis Operations</strong>
    <p>Collection-count and indexed collection-name inspection.</p>
    <span className="catalog-group-link">2 published commands →</span>
  </Link>
  <Link className="catalog-group-card" to="/docs/mp-command-catalog/2026.1.0529.7/construction-operations/collections">
    <span className="catalog-group-kicker">Subgroup</span>
    <strong>Construction Operations / Collections</strong>
    <p>Read the currently active collection name.</p>
    <span className="catalog-group-link">1 published command →</span>
  </Link>
  <Link className="catalog-group-card" to="/docs/mp-command-catalog/2026.1.0529.7/file-operations">
    <span className="catalog-group-kicker">Root group</span>
    <strong>File Operations</strong>
    <p>Read the current SpatialAnalyzer working directory.</p>
    <span className="catalog-group-link">1 published command →</span>
  </Link>
  <Link className="catalog-group-card" to="/docs/mp-command-catalog/2026.1.0529.7/utility-operations">
    <span className="catalog-group-kicker">Root group</span>
    <strong>Utility Operations</strong>
    <p>Read the current working-frame properties.</p>
    <span className="catalog-group-link">1 published command →</span>
  </Link>
  <Link className="catalog-group-card" to="/docs/mp-command-catalog/2026.1.0529.7/utility-operations/units">
    <span className="catalog-group-kicker">Subgroup</span>
    <strong>Utility Operations / Units</strong>
    <p>Read the active length, angular, and temperature units.</p>
    <span className="catalog-group-link">1 published command →</span>
  </Link>
</div>

## Explore the complete group tree

The [exact-target group hierarchy](./group-hierarchy.md) lists every root group
and subgroup represented by the 89 SDK output files. Large groups such as
`Instrument Operations` and nested paths such as
`File Operations / File Export / QDAS File Export / QDAS Catalog` remain
navigable without placing individual commands in the global sidebar.

The retained inventory also includes 52 documentation-only identities. When an
installed-document path differs from the SDK-output hierarchy, catalog work
must preserve both observations and review the placement instead of silently
inventing a mapping.

## Disposition work

During v0.x, unpublished groups and absent commands have no implied status.
Reviewed entries will be added in content batches under
[`spatialanalyzer/briosa#152`](https://github.com/spatialanalyzer/briosa/issues/152).
