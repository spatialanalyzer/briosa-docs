---
title: GDT Operations / GDT Construction Commands
description: Canonical MP command dispositions for the GDT Operations / GDT Construction subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# GDT Operations / GDT Construction Commands

These entries cover the 11 commands observed under **GDT Operations → GDT
Construction** in SA 2026.1.0529.7.

<p>Choose an SA target to filter command availability. Summary counts describe the 2026 baseline; each command below records its target-specific status.</p>

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>11</strong></div>
  <div><span>Current Server Operations</span><strong>11</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter showTargetFilter scopedGroup="GDT Operations / GDT Construction" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-target="2026.1.0529.7" data-command="Make Surface Face List - Runtime Select" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-interactive-surface-fixture"><td><a href="#make-surface-face-list---runtime-select">Make Surface Face List - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive surface fixture</td></tr>
<tr data-command="Make Surface Face List - Runtime Select" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-surface-face-list---runtime-select">Make Surface Face List - Runtime Select</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Surface Face List From Surface" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-surface-fixture"><td><a href="#make-surface-face-list-from-surface">Make Surface Face List From Surface</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - surface fixture</td></tr>
<tr data-command="Make Surface Face List From Surface" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-surface-face-list-from-surface">Make Surface Face List From Surface</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make GD&amp;T Feature Check Annotation" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-annotation-fixture"><td><a href="#make-gdt-feature-check-annotation">Make GD&amp;T Feature Check Annotation</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T Annotation fixture</td></tr>
<tr data-command="Make GD&amp;T Feature Check Annotation" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-gdt-feature-check-annotation">Make GD&amp;T Feature Check Annotation</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make GD&amp;T Datum Annotation" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-annotation-fixture"><td><a href="#make-gdt-datum-annotation">Make GD&amp;T Datum Annotation</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T Annotation fixture</td></tr>
<tr data-command="Make GD&amp;T Datum Annotation" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-gdt-datum-annotation">Make GD&amp;T Datum Annotation</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Feature Checks" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#make-feature-checks">Make Feature Checks</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Make Feature Checks" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-feature-checks">Make Feature Checks</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make a Feature Check Ref List from a Collection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#make-a-feature-check-ref-list-from-a-collection">Make a Feature Check Ref List from a Collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Make a Feature Check Ref List from a Collection" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-a-feature-check-ref-list-from-a-collection">Make a Feature Check Ref List from a Collection</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make a Feature Check Reference List- WildCard Selection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-live-state-gdt-fixture"><td><a href="#make-a-feature-check-reference-list--wildcard-selection">Make a Feature Check Reference List- WildCard Selection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - live-state GD&amp;T fixture</td></tr>
<tr data-command="Make a Feature Check Reference List- WildCard Selection" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-a-feature-check-reference-list--wildcard-selection">Make a Feature Check Reference List- WildCard Selection</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Annotation Ref List from a Collection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#make-annotation-ref-list-from-a-collection">Make Annotation Ref List from a Collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Make Annotation Ref List from a Collection" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-annotation-ref-list-from-a-collection">Make Annotation Ref List from a Collection</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make Annotation Ref List- WildCard Selection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-live-state-gdt-fixture"><td><a href="#make-annotation-ref-list--wildcard-selection">Make Annotation Ref List- WildCard Selection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - live-state GD&amp;T fixture</td></tr>
<tr data-command="Make Annotation Ref List- WildCard Selection" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-annotation-ref-list--wildcard-selection">Make Annotation Ref List- WildCard Selection</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Delete Feature Checks" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-destructive-gdt-fixture"><td><a href="#delete-feature-checks">Delete Feature Checks</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - destructive GD&amp;T fixture</td></tr>
<tr data-command="Delete Feature Checks" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#delete-feature-checks">Delete Feature Checks</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
<tr data-target="2026.1.0529.7" data-command="Make a Datum Ref List from a Collection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#make-a-datum-ref-list-from-a-collection">Make a Datum Ref List from a Collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Make a Datum Ref List from a Collection" data-group="Construction Operations / GDT" data-status="next" data-validation="at-risk-no-2024-runtime-validation" data-target="2024.1.0508.5" hidden>
  <td><a href="#make-a-datum-ref-list-from-a-collection">Make a Datum Ref List from a Collection</a></td>
  <td><span className="catalog-status catalog-status--next">Next</span></td>
  <td>At Risk — no 2024 runtime validation</td>
</tr>
</tbody>
</table>

## Make Surface Face List - Runtime Select

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-interactive-surface-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk interactive surface fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Output | `Selected Surface Faces` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Prompts the operator to select Surface faces in SpatialAnalyzer and returns a
`SurfaceFaceList`. This is intentionally interactive and displays SA UI only
when the caller invokes it.

## Make Surface Face List From Surface

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-surface-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk surface fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Surface Name` | Collection Object Name |
| Output | `Selected Surface Faces` | String |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns a `SurfaceFaceList` containing the faces of a selected Surface. This
provides a non-interactive source for the Annotation-construction operations.

## Make GD&T Feature Check Annotation

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-gdt-annotation-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk gdt annotation fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Annotation Name` | String |
| Input | `Feature Type` | String |
| Input | `Objects` | Collection Object Name Ref List |
| Input | `Geometry Relationships` | Collection Object Name Ref List |
| Input | `Surface Faces` | String |
| Input | `Decompose Multiple Features?` | Boolean |
| Input | `Auto Create Diameter Checks?` | Boolean |
| Input | `Auto Create Slot Width Checks?` | Boolean |
| Input | `Auto Create Slot Length Checks?` | Boolean |
| Input | `Datum References` | String |
| Input | `Tolerance` | String |
| Input | `Is Slot?` | Boolean |
| Input | `Per unit length/area` | Boolean |
| Input | `Circular area? (Rectangular default)` | Boolean |
| Input | `Per unit (area) length distance` | Double |
| Input | `Per unit (area) length step over %` | Double |
| Input | `Per unit area width distance` | Double |
| Input | `Per unit area width step over %` | Double |
| Input | `Per unit area circle diameter` | Double |
| Input | `Per unit area diameter step over` | Double |
| Input | `Auxiliary Object` | Collection Object Name |
| Input | `Auxiliary Geometry Relationship` | Collection Object Name |
| Input | `Use Nominal for Dimension Tolerance` | Boolean |
| Input | `Use Reference Object for Nominal` | Boolean |
| Input | `Nominal Dimension Tolerance` | Double |
| Input | `Low Dimension Tolerance` | Double |
| Input | `High Dimension Tolerance` | Double |
| Input | `Tolerance Zone Type` | String |
| Input | `Use Projected Tolerance Zone?` | Boolean |
| Input | `Projected Tolerance Zone` | Double |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a GD&T Feature Check Annotation using the full 30-input MP contract.
Feature type and tolerance-zone choices are typed. Object, Relationship, and
Surface-face inputs remain independent so developers can use the same
combinations supported by the MP command.

The API preserves the exact MP defaults, including `True Position`, disabled
automatic companion checks, 50-percent step-over values, nominal-based
dimension tolerance, a range of `-0.1` to `0.1`, and no projected tolerance
zone.

## Make GD&T Datum Annotation

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-gdt-annotation-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk gdt annotation fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

Collection-object inputs use the [2024 collection/name binding](/mp-command-catalog/2024.1.0508.5/review-notes#collection-object-bindings).

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Datum Name` | String |
| Input | `Objects` | Collection Object Name Ref List |
| Input | `Geometry Relationships` | Collection Object Name Ref List |
| Input | `Surface Faces` | String |
| Input | `Auxiliary Object` | Collection Object Name |
| Input | `Auxiliary Geometry Relationship` | Collection Object Name |
| Input | `Is Slot?` | Boolean |
| Input | `Force Surface Feature?` | Boolean |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates a Datum Annotation from Objects, Geometry Relationships, Surface faces,
and optional auxiliary references. Slot and force-surface-feature behavior both
default to `false`.

## Make Feature Checks

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection Name` | Collection Name |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Creates Feature Checks for the Datums and Annotations in a selected Collection.
SpatialAnalyzer owns the live construction state and resulting objects.

## Make a Feature Check Ref List from a Collection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection Name` | Collection Name |
| Output | `Feature Check Ref List` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the Feature Checks currently contained in a selected Collection as
structured identities.

## Make a Feature Check Reference List- WildCard Selection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-live-state-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk live state gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection Wildcard Criteria` | String |
| Input | `Feature Check Wildcard Criteria` | String |
| Output | `Resultant Feature Check Reference List` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Queries live SA state using Collection and Feature Check wildcard criteria.
Both criteria default to `*`.

## Make Annotation Ref List from a Collection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection Name` | Collection Name |
| Output | `Resultant Annotation Reference List` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the Annotations currently contained in a selected Collection as
structured identities.

## Make Annotation Ref List- WildCard Selection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-live-state-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk live state gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection Wildcard Criteria` | String |
| Input | `Annotation Wildcard Criteria` | String |
| Output | `Resultant Annotation Reference List` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Queries live SA state using Collection and Annotation wildcard criteria. Both
criteria default to `*`.

## Delete Feature Checks

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-destructive-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk destructive gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Feature Check Name List` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Deletes the supplied Feature Checks. Briosa intentionally adds no confirmation,
existence preflight, or additional safeguard; SpatialAnalyzer reports success,
partial success, or failure through the normal execution outcome.

## Make a Datum Ref List from a Collection

<div className="catalog-target-contexts">
<div className="catalog-target-context" data-target="2026.1.0529.7" data-status="current" data-group="GDT Operations / GDT Construction" data-validation="at-risk-gdt-fixture">
  <strong>SA 2026.1.0529.7</strong> <span className="catalog-status catalog-status--current">Current</span>
  <span className="catalog-target-group">GDT Operations / GDT Construction</span>
  <span className="catalog-target-validation">At risk gdt fixture</span>
</div>
<div className="catalog-target-context" data-target="2024.1.0508.5" data-status="next" data-group="Construction Operations / GDT" data-validation="at-risk-no-2024-runtime-validation">
  <strong>SA 2024.1.0508.5</strong> <span className="catalog-status catalog-status--next">Next</span>
  <span className="catalog-target-group">Construction Operations / GDT</span>
  <span className="catalog-target-validation">At Risk — no 2024 runtime validation</span>
</div>
</div>

<details className="catalog-target-review">
<summary>SA 2024.1.0508.5: Signature and Disposition</summary>

Planned for the 2024 target; implementation and runtime validation are pending.

The MP inputs, outputs, and choices match the 2026 counterpart. Its disposition rationale also applies to 2024.

**Captured 2024 Argument Signature**

| Direction | Exact MP Argument | Argument Kind |
| --- | --- | --- |
| Input | `Collection Name` | Collection Name |
| Output | `Datum Ref List` | Collection Object Name Ref List |

</details>

<p className="catalog-reference-scope">Reference below: SA 2026.1.0529.7. API links and Briosa defaults apply to that target.</p>

Returns the Datums currently contained in a selected Collection as structured
identities.

Briosa keeps these operations stateless and never automatically replays a
construction, deletion, wildcard, or interactive call after an unknown
execution outcome.

**API References:** [gRPC](/api/grpc/gdt-construction) · [.NET](/api/dotnet/gdt-construction) · [Python](/api/python/gdt-construction) · [JavaScript and TypeScript](/api/javascript/gdt-construction)
