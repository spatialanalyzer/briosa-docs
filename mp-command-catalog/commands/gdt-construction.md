---
title: GDT Operations / GDT Construction Commands
description: Canonical MP command dispositions for the GDT Operations / GDT Construction subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# GDT Operations / GDT Construction Commands

These entries cover the 11 commands observed under **GDT Operations → GDT
Construction** in SA 2026.1.0529.7.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>11</strong></div>
  <div><span>Current Server Operations</span><strong>11</strong></div>
  <div><span>Excluded or Unavailable</span><strong>0</strong></div>
</div>

<CatalogFilter scopedGroup="GDT Operations / GDT Construction" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Make Surface Face List - Runtime Select" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-interactive-surface-fixture"><td><a href="#make-surface-face-list---runtime-select">Make Surface Face List - Runtime Select</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - interactive surface fixture</td></tr>
<tr data-command="Make Surface Face List From Surface" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-surface-fixture"><td><a href="#make-surface-face-list-from-surface">Make Surface Face List From Surface</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - surface fixture</td></tr>
<tr data-command="Make GD&amp;T Feature Check Annotation" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-annotation-fixture"><td><a href="#make-gdt-feature-check-annotation">Make GD&amp;T Feature Check Annotation</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T Annotation fixture</td></tr>
<tr data-command="Make GD&amp;T Datum Annotation" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-annotation-fixture"><td><a href="#make-gdt-datum-annotation">Make GD&amp;T Datum Annotation</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T Annotation fixture</td></tr>
<tr data-command="Make Feature Checks" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#make-feature-checks">Make Feature Checks</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Make a Feature Check Ref List from a Collection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#make-a-feature-check-ref-list-from-a-collection">Make a Feature Check Ref List from a Collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Make a Feature Check Reference List- WildCard Selection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-live-state-gdt-fixture"><td><a href="#make-a-feature-check-reference-list--wildcard-selection">Make a Feature Check Reference List- WildCard Selection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - live-state GD&amp;T fixture</td></tr>
<tr data-command="Make Annotation Ref List from a Collection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#make-annotation-ref-list-from-a-collection">Make Annotation Ref List from a Collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
<tr data-command="Make Annotation Ref List- WildCard Selection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-live-state-gdt-fixture"><td><a href="#make-annotation-ref-list--wildcard-selection">Make Annotation Ref List- WildCard Selection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - live-state GD&amp;T fixture</td></tr>
<tr data-command="Delete Feature Checks" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-destructive-gdt-fixture"><td><a href="#delete-feature-checks">Delete Feature Checks</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - destructive GD&amp;T fixture</td></tr>
<tr data-command="Make a Datum Ref List from a Collection" data-group="GDT Operations / GDT Construction" data-status="current" data-validation="at-risk-gdt-fixture"><td><a href="#make-a-datum-ref-list-from-a-collection">Make a Datum Ref List from a Collection</a></td><td><span className="catalog-status catalog-status--current">Current</span></td><td>At Risk - GD&amp;T fixture</td></tr>
</tbody>
</table>

## Make Surface Face List - Runtime Select

<span className="catalog-status catalog-status--current">Current</span>

Prompts the operator to select Surface faces in SpatialAnalyzer and returns a
`SurfaceFaceList`. This is intentionally interactive and displays SA UI only
when the caller invokes it.

## Make Surface Face List From Surface

<span className="catalog-status catalog-status--current">Current</span>

Returns a `SurfaceFaceList` containing the faces of a selected Surface. This
provides a non-interactive source for the Annotation-construction operations.

## Make GD&T Feature Check Annotation

<span className="catalog-status catalog-status--current">Current</span>

Creates a GD&T Feature Check Annotation using the full 30-input MP contract.
Feature type and tolerance-zone choices are typed. Object, Relationship, and
Surface-face inputs remain independent so developers can use the same
combinations supported by the MP command.

The API preserves the exact MP defaults, including `True Position`, disabled
automatic companion checks, 50-percent step-over values, nominal-based
dimension tolerance, a range of `-0.1` to `0.1`, and no projected tolerance
zone.

## Make GD&T Datum Annotation

<span className="catalog-status catalog-status--current">Current</span>

Creates a Datum Annotation from Objects, Geometry Relationships, Surface faces,
and optional auxiliary references. Slot and force-surface-feature behavior both
default to `false`.

## Make Feature Checks

<span className="catalog-status catalog-status--current">Current</span>

Creates Feature Checks for the Datums and Annotations in a selected Collection.
SpatialAnalyzer owns the live construction state and resulting objects.

## Make a Feature Check Ref List from a Collection

<span className="catalog-status catalog-status--current">Current</span>

Returns the Feature Checks currently contained in a selected Collection as
structured identities.

## Make a Feature Check Reference List- WildCard Selection

<span className="catalog-status catalog-status--current">Current</span>

Queries live SA state using Collection and Feature Check wildcard criteria.
Both criteria default to `*`.

## Make Annotation Ref List from a Collection

<span className="catalog-status catalog-status--current">Current</span>

Returns the Annotations currently contained in a selected Collection as
structured identities.

## Make Annotation Ref List- WildCard Selection

<span className="catalog-status catalog-status--current">Current</span>

Queries live SA state using Collection and Annotation wildcard criteria. Both
criteria default to `*`.

## Delete Feature Checks

<span className="catalog-status catalog-status--current">Current</span>

Deletes the supplied Feature Checks. Briosa intentionally adds no confirmation,
existence preflight, or additional safeguard; SpatialAnalyzer reports success,
partial success, or failure through the normal execution outcome.

## Make a Datum Ref List from a Collection

<span className="catalog-status catalog-status--current">Current</span>

Returns the Datums currently contained in a selected Collection as structured
identities.

Briosa keeps these operations stateless and never automatically replays a
construction, deletion, wildcard, or interactive call after an unknown
execution outcome.

**API References:** [gRPC](/api/grpc/gdt-construction) · [.NET](/api/dotnet/gdt-construction) · [Python](/api/python/gdt-construction) · [JavaScript and TypeScript](/api/javascript/gdt-construction)
