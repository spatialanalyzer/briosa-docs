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

:::important[Status Determines Availability]

**Current** entries are callable today. **Next** entries link to reviewed API
contracts that the server and client libraries still need to implement. The
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
| **Current** | A committed handwritten Briosa operation exists for this exact target. |
| **Next** | The project has committed it to the next planned release, but it is not yet callable in the current release. |
| **Undecided** | The command is still being evaluated and has no reviewed disposition. |
| **Uncommitted** | The command may be useful, but the project has made no release commitment. |
| **Excluded** | A reviewed product, policy, safety, or scope decision excludes it. |
| **SDK Unavailable** | The reviewed exact-target SDK surface cannot implement it. |

An **At Risk** note qualifies validation evidence independently from support
status. A missing fixture, hardware dependency, license, or unexecuted licensed
scenario does not by itself make a command intentionally excluded.

## Coverage While the Catalog Is Incomplete

Wave A publishes complete dispositions for 18 retained source groups. Those
records appear under 19 MP Editor root groups because 58 relationship-scoped
records were retained with the Analysis source set; 55 have exact Relationship
Operations paths in SA 2026.1.0529.7 and three are documentation-only. Wave B
now also publishes the complete Cloud and Mesh Operations group, the 14
commands directly under the Construction Operations root, the nine-command
BSpines subgroup, the 21-command Callout Views and Callouts subgroup, the
three-command Circles subgroup, the five-command Collections subgroup, and the
two-command Cones subgroup, the three-command Cylinders subgroup, and the
one-command Ellipses subgroup, the one-command Ellipsoids subgroup, and the
two-command Folders subgroup, the 18-command Frames subgroup, the nine-command
Lines subgroup, the 74-command Other MP Types subgroup, and the one-command
Perimeters subgroup, the six-command Planes subgroup, the 11-command Point
Clouds subgroup, the 57-command Points and Groups subgroup, and the one-command
Polygonized Surfaces subgroup, the one-command Scale Bars subgroup, the
two-command Spheres subgroup, and the 15-command Surfaces subgroup. The
14-command Vectors and Vector Groups subgroup completes the Construction
Operations review. Wave B also publishes the complete 43-command GDT Operations
group: 32 GDT Analysis commands and 11 GDT Construction commands.
The complete 19-command Google Sheets Operations group documents 18 exclusions
with official Google client libraries as the recommended alternative and one
SDK-unavailable cell-address getter.
Wave B also includes the complete 175-command Instrument Operations group: the
139-command root plus Advanced Instrument Operations, API - LADAR, Crib Sheet
Operations, Laser Projection, all twelve Nikon Metrology Laser Radars LR root
commands, all five LR Cloud Viewer Operations commands, and all seven Watch
Window Operations commands. The 171 Next operations cover identity,
configuration, collection, history-file, pointing, measurement, position,
comparison, probe-offset, scan-mode, instrument-management, and
observation-management commands plus servo guidance, interface lifecycle,
connection verification, measurement triggering, anchor-frame assignment, and
interface docking, instrument-location, surface-fit, laser-projector, USMN,
best-fit location, transform, instrument-uncertainty, weather,
part-temperature, CTE, scale-factor, operational-check, observation,
visibility, mode/profile, targeting, target-computation, mirror-cube,
collimation, and tracker-target operations. One templated-USMN operation and
`Watch Window Template 3D` remain Uncommitted pending exact-target
clarification, and two MP-only list helpers are Excluded. Thirty-five of the
thirty-six subgroup operations are Next.
All twenty-five Robot Calibration Appliance Node Operations are also Next,
covering node lifecycle, instrument assignment, measurement
configuration and control, appliance addressing, trapping, indexed values,
partial SDK data-array access, display-robot coordination, and connection status.
All thirty-three Robot Operations are Next, covering model-file
loading, deletion, interface control, motion and simulation, machine-specific
parameters, model-link and base-transform configuration, adjusted-goal
workflows, calibration creation, imports, execution and trapping, calibration
frames, robot-pose retrieval, and calibration-appliance scalar and partial
real-array access.
The first ten commands directly under Relationship Operations add six Next
operations for summaries, interactive point-list editing, outlier filtering,
watch-window templates, and Point and Frame Relationships. Four caller-owned
list helpers are Excluded in favor of native collection operations.
The next ten root commands are all Next and cover Point, Group, Point Cloud,
object-direction, average-Point, and geometry-fit Relationship construction.
The third ten root commands are also all Next, covering geometry comparison,
dynamic Point, Line, Plane, Circle, and Ellipse construction, and Vector Group
Relationship creation and configuration.
The fourth ten root commands are all Next and cover Vector Group polarity,
Relationship deletion, optimizer settings, fitting, Collection minimization,
statistics, and instrument trapping.
The fifth ten root commands add nine Next operations for nominal-Group display
settings, Relationship-associated data, and automatic Point and Point Cloud
filtering. The MP-only proximity-settings constructor is Excluded in favor of
ordinary language-client values with the same fields and defaults.
The final five root commands are Next and complete the root-group assessment
with Cloud geometry extraction, named Points-to-Objects maps, geometry
Relationship uncertainty analysis, and Cloud-to-Swatch Relationships.
Four final subgroup observations are also Next. Two correct stale
documentation-only identities, while criteria-name and raw Relationship-status
queries complete the exact-target group. All 114 observed Relationship
Operations commands now have dispositions.
The Wave B disposition review is complete. Every unique command name observed
in the complete SA 2026.1.0529.7 SDK export set is represented in the reviewed
index, alongside the retained documentation-only identities needed to explain
SDK limitations. No published command remains **Undecided**.
