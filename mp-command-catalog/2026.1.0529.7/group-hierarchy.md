---
title: Exact-Target Group Hierarchy
description: SpatialAnalyzer MP root groups and subgroups catalogued for SA 2026.1.0529.7.
---

# Exact-Target Group Hierarchy

This is the SpatialAnalyzer MP group tree catalogued for SA `2026.1.0529.7`.
Expand a root group to see its direct commands and nested subgroup paths.

The counts are observed `SetStep` entries. They describe the size of each group,
not Briosa support, release commitment, or final retained catalog coverage.

<div className="catalog-tree">

<details className="catalog-tree-branch">
<summary><strong>Accumulator Math Operations</strong><span>8 observations · 1 group path</span></summary>

- Root group — 8

</details>

<details className="catalog-tree-branch">
<summary><strong>Analysis Operations</strong><span>122 observations · 2 group paths</span></summary>

- Root group — 112
- Geometry Fit Profiles — 10

</details>

<details className="catalog-tree-branch">
<summary><strong>Cloud and Mesh Operations</strong><span>28 observations · 4 group paths</span></summary>

- Root group — 7
- Cloud Cross Sections — 4
- Cloud Filters — 13
- Mesh Operations — 4

</details>

<details className="catalog-tree-branch">
<summary><strong>Construction Operations</strong><span>270 observations · 22 group paths</span></summary>

- Root group — 14
- BSplines — 9
- Callout Views and Callouts — 21
- Circles — 3
- Collections — 5
- Cones — 2
- Cylinders — 3
- Ellipses — 1
- Ellipsoids — 1
- Folders — 2
- Frames — 18
- Lines — 9
- Other MP Types — 74
- Perimeters — 1
- Planes — 6
- Point Clouds — 11
- Points and Groups — 57
- Polygonized Surfaces — 1
- Scale Bars — 1
- Spheres — 2
- Surfaces — 15
- Vectors and Vector Groups — 14

</details>

<details className="catalog-tree-branch">
<summary><strong>Dimension Operations</strong><span>20 observations · 1 group path</span></summary>

- Root group — 20

</details>

<details className="catalog-tree-branch">
<summary><strong>Event Operations</strong><span>6 observations · 1 group path</span></summary>

- Root group — 6

</details>

<details className="catalog-tree-branch">
<summary><strong>Excel Direct Connect</strong><span>17 observations · 3 group paths</span></summary>

- Root group — 8
- Read — 4
- Write — 5

</details>

<details className="catalog-tree-branch">
<summary><strong>File Operations</strong><span>125 observations · 10 group paths</span></summary>

- [Root group — 36](./file-operations.md)
- ASCII Data File Operations — 5
- Data Share Operations — 16
- Database Operations — 3
- File Export — 17
  - QDAS File Export — 4
    - QDAS Catalog — 4
- File Import — 19
- JSON — 8
- XML — 13

</details>

<details className="catalog-tree-branch">
<summary><strong>GDT Operations</strong><span>43 observations · 2 group paths</span></summary>

- GDT Analysis — 32
- GDT Construction — 11

</details>

<details className="catalog-tree-branch">
<summary><strong>Google Sheets Operations</strong><span>19 observations · 3 group paths</span></summary>

- Root group — 8
- Google Sheets Read Operations — 5
- Google Sheets Write Operations — 6

</details>

<details className="catalog-tree-branch">
<summary><strong>Instrument Operations</strong><span>175 observations · 8 group paths</span></summary>

- Root group — 139
- Advanced Instrument Operations — 3
- API - LADAR — 6
- Crib Sheet Operations — 1
- Laser Projection — 2
- Nikon Metrology Laser Radars LR — 12
  - LR Cloud Viewer Operations — 5
- Watch Window Operations — 7

</details>

<details className="catalog-tree-branch">
<summary><strong>MP Subroutines</strong><span>4 observations · 1 group path</span></summary>

- Root group — 4

</details>

<details className="catalog-tree-branch">
<summary><strong>MP Task Overview</strong><span>11 observations · 1 group path</span></summary>

- Root group — 11

</details>

<details className="catalog-tree-branch">
<summary><strong>MS Office Reporting Operations</strong><span>13 observations · 1 group path</span></summary>

- Root group — 13

</details>

<details className="catalog-tree-branch">
<summary><strong>Process Flow Operations</strong><span>23 observations · 1 group path</span></summary>

- Root group — 23

</details>

<details className="catalog-tree-branch">
<summary><strong>Relationship Operations</strong><span>114 observations · 4 group paths</span></summary>

- Root group — 55
- Pipe Relationships — 8
- Relationship Attributes — 41
- Relationship Attributes Scalar Types — 10

</details>

<details className="catalog-tree-branch">
<summary><strong>Reporting Operations</strong><span>73 observations · 3 group paths</span></summary>

- Root group — 46
- Custom Report Tables — 13
- Report Bar — 14

</details>

<details className="catalog-tree-branch">
<summary><strong>Robot Calibration Appliance Node Operations</strong><span>25 observations · 1 group path</span></summary>

- Root group — 25

</details>

<details className="catalog-tree-branch">
<summary><strong>Robot Operations</strong><span>33 observations · 1 group path</span></summary>

- Root group — 33

</details>

<details className="catalog-tree-branch">
<summary><strong>Scalar Math Operations</strong><span>21 observations · 1 group path</span></summary>

- Root group — 21

</details>

<details className="catalog-tree-branch">
<summary><strong>Scale Bar Operations</strong><span>5 observations · 1 group path</span></summary>

- Root group — 5

</details>

<details className="catalog-tree-branch">
<summary><strong>Utility Operations</strong><span>89 observations · 8 group paths</span></summary>

- Root group — 31
- Folders — 5
- Language — 3
- Network — 6
- Notes — 8
- OPC DA Server — 6
- OPC UA Client — 25
- Units — 5

</details>

<details className="catalog-tree-branch">
<summary><strong>Variables</strong><span>41 observations · 1 group path</span></summary>

- Root group — 41

</details>

<details className="catalog-tree-branch">
<summary><strong>Vector Operations</strong><span>25 observations · 2 group paths</span></summary>

- Root group — 18
- Vector Math Operations — 7

</details>

<details className="catalog-tree-branch">
<summary><strong>View Control</strong><span>50 observations · 6 group paths</span></summary>

- Root group — 13
- Colors — 7
- Hide/Show Operations — 19
- Highlight Operations — 3
- Point of View — 6
- Ribbon Bar — 2

</details>

</div>

## Identity and Reconciliation Notes

The same MP step name can occur in more than one group. For example, `Save` is
observed under both `Excel Direct Connect` and `File Operations`; the group path
is therefore part of how readers and reviewers distinguish the commands.

The retained 1,412-command inventory combines these 1,360 SDK observations
with installed-document evidence. Some documentation-only paths and some
installed-document labels differ from this SDK-observed tree. Those differences
are evidence to review during catalog authoring, not permission to rename or
relocate a command automatically.
