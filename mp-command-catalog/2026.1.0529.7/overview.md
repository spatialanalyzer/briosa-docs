---
title: SA 2026.1.0529.7 Catalog
description: Review the MP catalog scope and published Briosa entries for SA 2026.1.0529.7.
---

# SA 2026.1.0529.7 Catalog

This catalog documents the MP command surface identified for this exact
SpatialAnalyzer target and shows whether each reviewed command is available
through Briosa.

<div className="catalog-summary-grid">
  <div className="catalog-summary-card">
    <span>Target Catalog Scope</span>
    <strong>1,412</strong>
    <small>Distinct MP command identities identified for documentation</small>
  </div>
  <div className="catalog-summary-card">
    <span>Current Briosa Operations</span>
    <strong>6</strong>
    <small>Implemented and callable for this exact target</small>
  </div>
  <div className="catalog-summary-card">
    <span>Published Catalog Entries</span>
    <strong>1,371</strong>
    <small>Wave A plus reviewed Wave B catalog entries</small>
  </div>
  <div className="catalog-summary-card">
    <span>Selected APIs</span>
    <strong>1,030</strong>
    <small>Current or Next operations with four API contracts</small>
  </div>
</div>

## Browse Commands

- [Browse catalog pages using the SpatialAnalyzer group tree](./group-hierarchy.md)
- [Search and filter the reviewed command index](../commands/index.md)
- [Learn how to use current Briosa operations](/api)
- [Review the catalog status meanings](../overview.md#how-to-read-status)

Catalog pages retain the labels and parent-child relationships shown in the MP
command editor so readers can recognize a command's SpatialAnalyzer location.
Workflow guides may cross-link commands without changing that canonical path.

## Catalog Progress

Wave A is fully dispositioned. Its 752 retained source records reconcile to 740
canonical command entries because repeated installed-document routes are merged
into the same MP identity. Fifty-eight relationship-scoped records retained
with the Analysis source set are published under Relationship Operations; 55
have exact MP Editor observations and three are documentation-only identities.
This prevents duplicate search results while keeping every retained record
accounted for and preserving the exact SA group structure.

Wave B disposition review is complete. Cloud and Mesh Operations contributes 28 reviewed,
selected entries. The Construction Operations root contributes 14 reviewed,
selected entries. Its BSpines subgroup adds nine reviewed commands: eight Next
operations and one redundant MP value-constructor excluded in favor of the
shared `BSplineFitOptions` API type. Callout Views and Callouts adds 21 reviewed
commands: 16 Next operations and five client-local list helpers excluded from
the network API. Circles adds three Next operations. Collections adds four
Next operations alongside the existing Current active-collection query.
Cones adds two Next operations.
The Cylinders subgroup adds three Next operations with MP-compatible geometry
value behavior.
Ellipses adds one Next operation.
Ellipsoids adds one Next operation using the exact target's defaults.
Folders adds two Next operations.
Frames adds 18 Next operations spanning direct construction, equipment,
measurement, probing, and mesh-projection workflows.
Lines adds nine Next operations, including interactive surface selection and
instrument-shot construction.
Other MP Types adds 74 reviewed commands: 34 Next operations for live-state
selection, MP variables, and SpatialAnalyzer transform semantics, plus 40
client-local or SDK-limited exclusions.
Perimeters adds one Next operation that constructs an open or closed perimeter
from an ordered point list.
Planes adds six Next operations spanning direct construction, bounding and
bisecting workflows, plane mutation, and interactive CAD-face selection.
Point Clouds adds 11 reviewed commands: ten Next construction and extraction
operations plus one MP-only thinning-value constructor excluded in favor of
shared API types.
Points and Groups adds 57 reviewed commands: 53 Next operations for point,
group, projection, selection, layout, and Hidden Point Bar workflows, plus four
portable Point Name/list helpers excluded in favor of client-language values.
Polygonized Surfaces adds one Next operation for generating a surface from
point clouds using an explicitly selected live view or working-frame orientation.
Scale Bars adds one Next operation that preserves the MP's nominal,
uncertainty, and relative or absolute tolerance behavior.
Spheres adds two Next operations for direct sphere construction and interactive
construction from selected CAD surface faces.
Surfaces adds 15 Next operations covering surface creation, fitting,
dissection, projection, offsetting, and a documented cylinder-only partial
contract for geometry extraction from surfaces.
Vectors and Vector Groups adds 14 reviewed commands: ten Next operations for
constructing and selecting live SA vectors and Vector Groups, one
SDK-unavailable wildcard operation, and three portable value helpers excluded
in favor of client-language vector operations. This completes the Construction
Operations review.
GDT Analysis adds 32 reviewed commands: 24 Next operations for Datum and
Feature Check data, evaluation, alignment, job options, and reporting, plus
eight portable list and MP-only iterator helpers excluded from the network API.
GDT Construction completes the 43-command GDT Operations group with 11 Next
operations for Surface-face selections, Annotation and Feature Check
construction, live-state reference-list queries, and Feature Check deletion.
The complete Google Sheets Operations group documents 18 exclusions in favor
of official Google client libraries and one SDK-unavailable cell-address
getter.
All 139 Instrument Operations root commands are reviewed. One hundred thirty-six are
Next identity, model, collection,
configuration, history-file, pointing, measurement, position, comparison, and
probe-offset operations plus scan-mode, instrument creation/deletion,
observation management, servo guidance, interface lifecycle, connection
verification, measurement triggering, anchor-frame assignment, and interface
docking operations, instrument location and surface fitting, multi-instrument
measurement, laser-projector alignment, USMN workflows, best-fit location,
instrument transforms, instrument uncertainty settings, weather and part
temperature access, CTE and scale-factor workflows, frame- and delta-based
instrument transforms, operational checks, observation queries and mutation,
fabricated observations, visibility analysis, instrument mode/profile and
targeting control, target-computation options, mirror-cube and collimation
metadata, multi-instrument collimation, and laser-tracker target status.
Templated USMN location is Uncommitted pending an SDK binding probe, and two
MP-only list construction helpers are Excluded.
All twenty-four reviewed commands across Advanced Instrument Operations, API -
LADAR, Crib Sheet Operations, Laser Projection, and Nikon Metrology Laser
Radars LR are Next. All five LR Cloud Viewer Operations are Next. Six Watch
Window Operations are Next, while `Watch Window Template 3D` remains
Uncommitted pending exact-target clarification.
All twenty-five Robot Calibration Appliance Node Operations and all thirty-three
Robot Operations commands are reviewed and selected as Next. The first ten
commands directly under Relationship Operations are also reviewed: six are
Next, while four caller-owned list helpers are Excluded in favor of native
client-language collection operations.
The next ten root commands add ten Next Relationship constructors for Point,
Group, Point Cloud, object-direction, average-Point, and geometry-fit workflows.
The third ten root commands add ten Next geometry-comparison, dynamic-geometry,
and Vector Group Relationship operations.
The fourth ten root commands add ten Next Vector Group, deletion, optimizer,
fit, minimization, statistics, and trapping operations.
The fifth ten root commands add nine Next nominal-Group display,
Relationship-associated-data, and automatic-filtering operations. The MP-only
proximity-settings constructor is Excluded and represented as a client value.
The final five root commands are Next and cover Cloud geometry extraction,
Points-to-Objects map creation and lookup, Relationship uncertainty analysis,
and Cloud-to-Swatch Relationships.
Four final subgroup observations are Next, including corrected exact identities
for Sigmoidal Gap constraints and object-direction tolerances. All 114 exact
Relationship Operations observations now have dispositions.
Selected entries have complete contracts for gRPC, .NET, Python, and
JavaScript/TypeScript. Every unique SDK-observed exact-target command name is
present in the reviewed index; retained documentation-only identities remain
visible where needed to explain SDK-unavailable behavior.
