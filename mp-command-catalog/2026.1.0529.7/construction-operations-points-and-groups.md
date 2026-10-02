---
title: Construction Operations / Points and Groups in SA 2026.1.0529.7
sidebar_label: Points and Groups
description: Reviewed point and group construction MP commands for exact SpatialAnalyzer target 2026.1.0529.7.
---

# Construction Operations / Points and Groups

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> Construction Operations <span aria-hidden="true">/</span> Points and Groups</p>

Fifty-three commands are **Current** operations. Four portable Point
Name and list helpers are excluded in favor of local client-language values.

| MP Command | Briosa Status |
| --- | --- |
| [Construct Point (Fit to Points)](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-fit-to-points) | **Current** |
| [Construct a Point in Working Coordinates](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-in-working-coordinates) | **Current** |
| [Construct Point From Survey Target Center](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-survey-target-center) | **Current** |
| [Set Point Position in Working Coordinates](/mp-command-catalog/commands/construction-operations-points-and-groups#set-point-position-in-working-coordinates) | **Current** |
| [Transform Points by Delta (About Working Frame)](/mp-command-catalog/commands/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame) | **Current** |
| [Construct a Point at line MidPoint](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-line-midpoint) | **Current** |
| [Construct Point Group from Point Name Ref List](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list) | **Current** |
| [Construct Point Groups from Vector Groups](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-groups-from-vector-groups) | **Current** |
| [Construct Point Group from Point Cloud](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-cloud) | **Current** |
| [Construct Point From Cloud Point - Runtime Select](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select) | **Current** |
| [Construct a Point at Circle Center](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-circle-center) | **Current** |
| [Construct Point at Intersection of Planes](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-planes) | **Current** |
| [Construct Point at Intersection of Two Lines](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines) | **Current** |
| [Construct Point at Intersection of Plane and Line](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line) | **Current** |
| [Construct Point at Intersection of 2 B-Splines](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines) | **Current** |
| [Construct Point at intersection of B-Spline and Surfaces](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces) | **Current** |
| [Construct Points at Intersection of Circle and Line](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line) | **Current** |
| [Construct Points at Intersection of Principle Object Axes and Surfaces](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces) | **Current** |
| [Construct Points from Cylinder](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-cylinder) | **Current** |
| [Construct a Point at Projection of Point onto An Object](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object) | **Current** |
| [Construct Points at Projection on Surfaces - Parallel to WCF Axis](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis) | **Current** |
| [Construct Points at Projection on Surfaces - Radial from WCF Axis](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis) | **Current** |
| [Construct Points at Projection on Surfaces - Spherical from WCF Origin](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin) | **Current** |
| [Get Gradient At Projected Point On Surface](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface) | **Current** |
| [Get Gradient At Projected Point On Surface Edge](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge) | **Current** |
| [Construct Points By Projecting Points On Mesh Along Direction](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction) | **Current** |
| [Construct Points Spaced at a Distance on Curves](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves) | **Current** |
| [Construct Points N-Spaced on Curves](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-n-spaced-on-curves) | **Current** |
| [Construct Points on Curves Using Max Chordal Deviation](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation) | **Current** |
| [Construct Points on Objects Vertices](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-objects-vertices) | **Current** |
| [Construct Points on Surface(s) by Clicking](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking) | **Current** |
| [Construct Points From Surface Faces - Runtime Select](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select) | **Current** |
| [Construct Points From Surfaces On UV Grid](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid) | **Current** |
| [Construct Point at Object Origin](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-object-origin) | **Current** |
| [Construct Points Shifted in Working Frame](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-shifted-in-working-frame) | **Current** |
| [Construct Points Cylindrically Shifted](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-cylindrically-shifted) | **Current** |
| [Construct Points WildCard Selection](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-wildcard-selection) | **Current** |
| [Construct Points Subset with greatest spacing](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing) | **Current** |
| [Construct Points Layout on Grid](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-layout-on-grid) | **Current** |
| [Construct Points Auto-Correspond 2 groups Proximity](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity) | **Current** |
| [Construct Points Auto-Correspond 2 groups Inter-Point Distance](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance) | **Current** |
| [Average a set of Groups](/mp-command-catalog/commands/construction-operations-points-and-groups#average-a-set-of-groups) | **Current** |
| [Copy Groups Excluding Obscured Points](/mp-command-catalog/commands/construction-operations-points-and-groups#copy-groups-excluding-obscured-points) | **Current** |
| [Make a Point Name from Strings](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-from-strings) | **Excluded** |
| [Make a Point Name - Runtime Select](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---runtime-select) | **Current** |
| [Make a Point Name - Ensure Unique](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---ensure-unique) | **Current** |
| [Make a Point Name Ref List](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list) | **Excluded** |
| [Make a Point Name Ref List From a Group](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group) | **Current** |
| [Make a Point Name Ref List - Runtime Select](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select) | **Current** |
| [Make a Point Name Ref List - Wildcard Select](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select) | **Current** |
| [Append two Point Name Ref Lists](/mp-command-catalog/commands/construction-operations-points-and-groups#append-two-point-name-ref-lists) | **Excluded** |
| [Subtract two Point Name Ref Lists](/mp-command-catalog/commands/construction-operations-points-and-groups#subtract-two-point-name-ref-lists) | **Excluded** |
| [Clear Hidden Point Bar Database](/mp-command-catalog/commands/construction-operations-points-and-groups#clear-hidden-point-bar-database) | **Current** |
| [Create Hidden Point Rod](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point-rod) | **Current** |
| [Get Hidden Point Rod Index by Name](/mp-command-catalog/commands/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name) | **Current** |
| [Delete Hidden Point Rod](/mp-command-catalog/commands/construction-operations-points-and-groups#delete-hidden-point-rod) | **Current** |
| [Create Hidden Point](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point) | **Current** |

[Open the canonical Points and Groups command reference →](/mp-command-catalog/commands/construction-operations-points-and-groups)
