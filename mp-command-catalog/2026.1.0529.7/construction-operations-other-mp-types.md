---
title: Construction Operations / Other MP Types in SA 2026.1.0529.7
sidebar_label: Other MP Types
description: Reviewed Other MP Types commands for exact SpatialAnalyzer target 2026.1.0529.7.
---

# Construction Operations / Other MP Types

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> Construction Operations <span aria-hidden="true">/</span> Other MP Types</p>

This subgroup contains 74 MP commands. Thirty-four are selected as **Next**
operations because they query SpatialAnalyzer state, preserve MP variables, or
perform SpatialAnalyzer transform conversions. Forty client-local value and
collection helpers, unavailable compound values, and one live-validated SDK
limitation are excluded.

| MP Command | Briosa Status |
| --- | --- |
| [Make a Boolean](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-boolean) | **Excluded** |
| [Make a Integer](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-integer) | **Excluded** |
| [Make a Integer from String](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-integer-from-string) | **Excluded** |
| [Make a Double](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-double) | **Excluded** |
| [Make a Double From an Integer](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-double-from-an-integer) | **Excluded** |
| [Make a Double from String](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-double-from-string) | **Excluded** |
| [Make a Double List](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-double-list) | **Excluded** |
| [Add Double to Double List](/mp-command-catalog/commands/construction-operations-other-mp-types#add-double-to-double-list) | **Excluded** |
| [Make a Boolean From an Integer](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-boolean-from-an-integer) | **Excluded** |
| [Make a String](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-string) | **Excluded** |
| [Make String from Integer](/mp-command-catalog/commands/construction-operations-other-mp-types#make-string-from-integer) | **Excluded** |
| [Make String from Double](/mp-command-catalog/commands/construction-operations-other-mp-types#make-string-from-double) | **Excluded** |
| [Make String from Decimal Degrees Angular Value](/mp-command-catalog/commands/construction-operations-other-mp-types#make-string-from-decimal-degrees-angular-value) | **Excluded** |
| [Make an Incremented String](/mp-command-catalog/commands/construction-operations-other-mp-types#make-an-incremented-string) | **Excluded** |
| [Make a System String](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-system-string) | **Next** |
| [Concatenate Strings](/mp-command-catalog/commands/construction-operations-other-mp-types#concatenate-strings) | **Excluded** |
| [Make a String Ref List](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-string-ref-list) | **Excluded** |
| [Make a String from a String Ref List](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-string-from-a-string-ref-list) | **Excluded** |
| [Make Strings from a Point Name](/mp-command-catalog/commands/construction-operations-other-mp-types#make-strings-from-a-point-name) | **Excluded** |
| [Make Strings from a Collection Object Name](/mp-command-catalog/commands/construction-operations-other-mp-types#make-strings-from-a-collection-object-name) | **Excluded** |
| [Make a Collection Name - Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-name---runtime-select) | **Next** |
| [Make a Collection Item Name from Strings](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-from-strings) | **Excluded** |
| [Make a Collection Item Name Reference List - WildCard Selection](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection) | **Next** |
| [Make a Collection Object Name from Strings](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-from-strings) | **Excluded** |
| [Make a Collection Object Name - Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select) | **Next** |
| [Make a Collection Object Name - Ensure Unique](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique) | **Next** |
| [Make a Collection Object Name Reference List- Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select) | **Next** |
| [Make a Collection Object Name Reference List- WildCard Selection](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection) | **Next** |
| [Make a Collection Object Name Ref List - By Type](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type) | **Next** |
| [Make a Collection Object Name Ref List - By Type and Color](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color) | **Next** |
| [Make a Collection Object Name Ref List](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list) | **Excluded** |
| [Append two Collection Object Name Ref Lists](/mp-command-catalog/commands/construction-operations-other-mp-types#append-two-collection-object-name-ref-lists) | **Excluded** |
| [Add a Collection Object Name to a Ref List](/mp-command-catalog/commands/construction-operations-other-mp-types#add-a-collection-object-name-to-a-ref-list) | **Excluded** |
| [Make a Collection Object Name Ref List from all Groups in a Collection](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection) | **Next** |
| [Make a Collection Instrument Reference List](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-reference-list) | **Excluded** |
| [Get Collection Name and Index from Collection Instrument ID](/mp-command-catalog/commands/construction-operations-other-mp-types#get-collection-name-and-index-from-collection-instrument-id) | **Excluded** |
| [Get Collection Instrument Ref List Variable](/mp-command-catalog/commands/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable) | **Next** |
| [Set Collection Instrument Ref List Variable](/mp-command-catalog/commands/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable) | **Next** |
| [Add a Collection Instrument to a Ref List](/mp-command-catalog/commands/construction-operations-other-mp-types#add-a-collection-instrument-to-a-ref-list) | **Excluded** |
| [Add Collection Instruments to a Ref List - WildCard Selection](/mp-command-catalog/commands/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection) | **Next** |
| [Make a Collection Instrument Reference List- Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select) | **Next** |
| [Make a Relationship Reference List- WildCard Selection](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection) | **Next** |
| [Make a Relationship Reference List- Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select) | **Next** |
| [Make an Event Reference List- WildCard Selection](/mp-command-catalog/commands/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection) | **Next** |
| [Append two Relationship Ref Lists](/mp-command-catalog/commands/construction-operations-other-mp-types#append-two-relationship-ref-lists) | **Excluded** |
| [Make a Collection Instrument ID from a Collection and an Integer](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-id-from-a-collection-and-an-integer) | **Excluded** |
| [Make a Collection Instrument ID - Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select) | **Next** |
| [Make a Collection Machine ID from a Collection and an Integer](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-machine-id-from-a-collection-and-an-integer) | **Excluded** |
| [Make a Report Ref List from a Collection](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection) | **Next** |
| [Make a Report Ref List - Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select) | **Next** |
| [Make a Picture Name Ref List](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-picture-name-ref-list) | **Excluded** |
| [Make a Picture Name Ref List - Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select) | **Next** |
| [Make a Report Items Ref List](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-items-ref-list) | **Excluded** |
| [Make a Transform from Doubles (Fixed XYZ)](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz) | **Next** |
| [Make a Transform from Doubles (Euler Parameters)](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters) | **Next** |
| [Make a Transform from Doubles (Matrix Elements)](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-matrix-elements) | **Excluded** |
| [Make a World Transform Operator (from Transform and Scale)](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-world-transform-operator-from-transform-and-scale) | **Excluded** |
| [Get Working Transform of Object (Fixed XYZ)](/mp-command-catalog/commands/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz) | **Next** |
| [Invert Transform](/mp-command-catalog/commands/construction-operations-other-mp-types#invert-transform) | **Next** |
| [Decompose Transform into Doubles (Fixed XYZ)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz) | **Next** |
| [Decompose Transform into Vectors (Fixed XYZ)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz) | **Next** |
| [Decompose Transform into Vectors (Origin and Axes)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes) | **Next** |
| [Decompose Transform into Doubles (Matrix Elements)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-matrix-elements) | **Excluded** |
| [Decompose World Transform Operator into Doubles (Fixed XYZ in World)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world) | **Next** |
| [Decompose Transform into Doubles (Euler XYZ)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz) | **Next** |
| [Decompose Transform into Doubles (Euler ZYX)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx) | **Next** |
| [Decompose Transform into Doubles (Euler ZYZ)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz) | **Next** |
| [Decompose Transform into Doubles (Euler ZXZ)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz) | **Next** |
| [Decompose World Transform Operator into Vectors (Fixed XYZ in World)](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world) | **Next** |
| [Split String into Two Strings](/mp-command-catalog/commands/construction-operations-other-mp-types#split-string-into-two-strings) | **Excluded** |
| [Convert to Euler Angles from Fixed Angles](/mp-command-catalog/commands/construction-operations-other-mp-types#convert-to-euler-angles-from-fixed-angles) | **Excluded** |
| [Make Projection Options](/mp-command-catalog/commands/construction-operations-other-mp-types#make-projection-options) | **Excluded** |
| [Make Axis Identifier from String](/mp-command-catalog/commands/construction-operations-other-mp-types#make-axis-identifier-from-string) | **Excluded** |
| [Make UDP Settings](/mp-command-catalog/commands/construction-operations-other-mp-types#make-udp-settings) | **Excluded** |

[Open the canonical Other MP Types command reference →](/mp-command-catalog/commands/construction-operations-other-mp-types)
