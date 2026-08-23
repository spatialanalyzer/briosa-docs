---
title: Construction Operations / Points and Groups in SA 2026.1.0529.7
sidebar_label: Points and Groups
description: Reviewed point and group construction MP commands for exact SpatialAnalyzer target 2026.1.0529.7.
---

# Construction Operations / Points and Groups

<p className="catalog-path">SA 2026.1.0529.7 <span aria-hidden="true">/</span> Construction Operations <span aria-hidden="true">/</span> Points and Groups</p>

Fifty-three commands are selected as **Next** operations. Four portable Point
Name and list helpers are excluded in favor of local client-language values.

| MP Command | Briosa Status |
| --- | --- |
| [Construct Point (Fit to Points)](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-fit-to-points) | **Next** |
| [Construct a Point in Working Coordinates](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-in-working-coordinates) | **Next** |
| [Construct Point From Survey Target Center](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-survey-target-center) | **Next** |
| [Set Point Position in Working Coordinates](/mp-command-catalog/commands/construction-operations-points-and-groups#set-point-position-in-working-coordinates) | **Next** |
| [Transform Points by Delta (About Working Frame)](/mp-command-catalog/commands/construction-operations-points-and-groups#transform-points-by-delta-about-working-frame) | **Next** |
| [Construct a Point at line MidPoint](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-line-midpoint) | **Next** |
| [Construct Point Group from Point Name Ref List](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-name-ref-list) | **Next** |
| [Construct Point Groups from Vector Groups](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-groups-from-vector-groups) | **Next** |
| [Construct Point Group from Point Cloud](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-group-from-point-cloud) | **Next** |
| [Construct Point From Cloud Point - Runtime Select](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-from-cloud-point---runtime-select) | **Next** |
| [Construct a Point at Circle Center](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-circle-center) | **Next** |
| [Construct Point at Intersection of Planes](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-planes) | **Next** |
| [Construct Point at Intersection of Two Lines](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-two-lines) | **Next** |
| [Construct Point at Intersection of Plane and Line](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-plane-and-line) | **Next** |
| [Construct Point at Intersection of 2 B-Splines](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-2-b-splines) | **Next** |
| [Construct Point at intersection of B-Spline and Surfaces](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-intersection-of-b-spline-and-surfaces) | **Next** |
| [Construct Points at Intersection of Circle and Line](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-circle-and-line) | **Next** |
| [Construct Points at Intersection of Principle Object Axes and Surfaces](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-intersection-of-principle-object-axes-and-surfaces) | **Next** |
| [Construct Points from Cylinder](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-cylinder) | **Next** |
| [Construct a Point at Projection of Point onto An Object](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-a-point-at-projection-of-point-onto-an-object) | **Next** |
| [Construct Points at Projection on Surfaces - Parallel to WCF Axis](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---parallel-to-wcf-axis) | **Next** |
| [Construct Points at Projection on Surfaces - Radial from WCF Axis](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---radial-from-wcf-axis) | **Next** |
| [Construct Points at Projection on Surfaces - Spherical from WCF Origin](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-at-projection-on-surfaces---spherical-from-wcf-origin) | **Next** |
| [Get Gradient At Projected Point On Surface](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface) | **Next** |
| [Get Gradient At Projected Point On Surface Edge](/mp-command-catalog/commands/construction-operations-points-and-groups#get-gradient-at-projected-point-on-surface-edge) | **Next** |
| [Construct Points By Projecting Points On Mesh Along Direction](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-by-projecting-points-on-mesh-along-direction) | **Next** |
| [Construct Points Spaced at a Distance on Curves](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-spaced-at-a-distance-on-curves) | **Next** |
| [Construct Points N-Spaced on Curves](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-n-spaced-on-curves) | **Next** |
| [Construct Points on Curves Using Max Chordal Deviation](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-curves-using-max-chordal-deviation) | **Next** |
| [Construct Points on Objects Vertices](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-objects-vertices) | **Next** |
| [Construct Points on Surface(s) by Clicking](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-on-surfaces-by-clicking) | **Next** |
| [Construct Points From Surface Faces - Runtime Select](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surface-faces---runtime-select) | **Next** |
| [Construct Points From Surfaces On UV Grid](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-from-surfaces-on-uv-grid) | **Next** |
| [Construct Point at Object Origin](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-point-at-object-origin) | **Next** |
| [Construct Points Shifted in Working Frame](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-shifted-in-working-frame) | **Next** |
| [Construct Points Cylindrically Shifted](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-cylindrically-shifted) | **Next** |
| [Construct Points WildCard Selection](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-wildcard-selection) | **Next** |
| [Construct Points Subset with greatest spacing](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-subset-with-greatest-spacing) | **Next** |
| [Construct Points Layout on Grid](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-layout-on-grid) | **Next** |
| [Construct Points Auto-Correspond 2 groups Proximity](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-proximity) | **Next** |
| [Construct Points Auto-Correspond 2 groups Inter-Point Distance](/mp-command-catalog/commands/construction-operations-points-and-groups#construct-points-auto-correspond-2-groups-inter-point-distance) | **Next** |
| [Average a set of Groups](/mp-command-catalog/commands/construction-operations-points-and-groups#average-a-set-of-groups) | **Next** |
| [Copy Groups Excluding Obscured Points](/mp-command-catalog/commands/construction-operations-points-and-groups#copy-groups-excluding-obscured-points) | **Next** |
| [Make a Point Name from Strings](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-from-strings) | **Excluded** |
| [Make a Point Name - Runtime Select](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---runtime-select) | **Next** |
| [Make a Point Name - Ensure Unique](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name---ensure-unique) | **Next** |
| [Make a Point Name Ref List](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list) | **Excluded** |
| [Make a Point Name Ref List From a Group](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list-from-a-group) | **Next** |
| [Make a Point Name Ref List - Runtime Select](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---runtime-select) | **Next** |
| [Make a Point Name Ref List - Wildcard Select](/mp-command-catalog/commands/construction-operations-points-and-groups#make-a-point-name-ref-list---wildcard-select) | **Next** |
| [Append two Point Name Ref Lists](/mp-command-catalog/commands/construction-operations-points-and-groups#append-two-point-name-ref-lists) | **Excluded** |
| [Subtract two Point Name Ref Lists](/mp-command-catalog/commands/construction-operations-points-and-groups#subtract-two-point-name-ref-lists) | **Excluded** |
| [Clear Hidden Point Bar Database](/mp-command-catalog/commands/construction-operations-points-and-groups#clear-hidden-point-bar-database) | **Next** |
| [Create Hidden Point Rod](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point-rod) | **Next** |
| [Get Hidden Point Rod Index by Name](/mp-command-catalog/commands/construction-operations-points-and-groups#get-hidden-point-rod-index-by-name) | **Next** |
| [Delete Hidden Point Rod](/mp-command-catalog/commands/construction-operations-points-and-groups#delete-hidden-point-rod) | **Next** |
| [Create Hidden Point](/mp-command-catalog/commands/construction-operations-points-and-groups#create-hidden-point) | **Next** |

[Open the canonical Points and Groups command reference →](/mp-command-catalog/commands/construction-operations-points-and-groups)
