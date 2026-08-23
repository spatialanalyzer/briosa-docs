---
title: Construction Operations / BSpines Commands
description: Canonical SpatialAnalyzer MP command dispositions for the Construction Operations / BSpines subgroup.
toc_max_heading_level: 2
---

import CatalogFilter from '@site/src/components/CatalogFilter';

# Construction Operations / BSpines Commands

These entries cover the nine commands observed under **Construction Operations
→ BSpines** in SA 2026.1.0529.7. A **Next** entry is a documentation-first
contract, not a claim that the operation is callable in the current release.

<div className="catalog-context-grid">
  <div><span>Reviewed Commands</span><strong>9</strong></div>
  <div><span>Current or Next</span><strong>8</strong></div>
  <div><span>Excluded or Unavailable</span><strong>1</strong></div>
</div>

<CatalogFilter scopedGroup="Construction Operations / BSpines" />

<table className="catalog-command-table">
<thead><tr><th>MP Command</th><th>MP Group Path</th><th>Status</th><th>Validation</th></tr></thead>
<tbody>
<tr data-command="Construct B-Spline Fit Options" data-group="Construction Operations / BSpines" data-status="excluded" data-validation="portable-contract-review">
  <td><a href="#construct-b-spline-fit-options">Construct B-Spline Fit Options</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--excluded">Excluded</span></td><td>Portable contract review</td>
</tr>
<tr data-command="Construct B-Spline From Points" data-group="Construction Operations / BSpines" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-b-spline-from-points">Construct B-Spline From Points</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct B-Spline From Point Set" data-group="Construction Operations / BSpines" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-b-spline-from-point-set">Construct B-Spline From Point Set</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct B-Spline From Several B-Splines" data-group="Construction Operations / BSpines" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-b-spline-from-several-b-splines">Construct B-Spline From Several B-Splines</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct B-Spline From Intersection of Plane and Surface" data-group="Construction Operations / BSpines" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-b-spline-from-intersection-of-plane-and-surface">Construct B-Spline From Intersection of Plane and Surface</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct B-Spline From Intersection of Surfaces" data-group="Construction Operations / BSpines" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-b-spline-from-intersection-of-surfaces">Construct B-Spline From Intersection of Surfaces</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct B-Splines From Surfaces" data-group="Construction Operations / BSpines" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-b-splines-from-surfaces">Construct B-Splines From Surfaces</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct B-Splines From Lines" data-group="Construction Operations / BSpines" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-b-splines-from-lines">Construct B-Splines From Lines</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
<tr data-command="Construct B-Splines From Intersection of Plane and Mesh" data-group="Construction Operations / BSpines" data-status="next" data-validation="at-risk-fixture-validation-required">
  <td><a href="#construct-b-splines-from-intersection-of-plane-and-mesh">Construct B-Splines From Intersection of Plane and Mesh</a></td><td>Construction Operations / BSpines</td>
  <td><span className="catalog-status catalog-status--next">Next</span></td><td>At Risk - fixture validation required</td>
</tr>
</tbody>
</table>

## Construct B-Spline Fit Options

<span className="catalog-status catalog-status--excluded">Excluded</span>

<div className="catalog-command-meta">
  <div><span>Reviewed SA Target</span><strong>2026.1.0529.7</strong></div>
  <div><span>MP Group Path</span><strong>Construction Operations / BSpines</strong></div>
  <div><span>Validation</span><strong>Portable contract review</strong></div>
  <div><span>Alternative</span><strong>Use the Briosa BSplineFitOptions value</strong></div>
</div>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default |
| --- | --- | --- | --- |
| Input | `Open Curve?` | Boolean | true |
| Input | `Use Interpolation For Fit?` | Boolean | true |
| Input | `Number Of Control Points` | Integer | 8 |
| Input | `Degree of Curve` | Integer | 3 |
| Input | `Sort Method` | B-Spline Point Sort Mode Type | Use Selection Order |
| Input | `Span Any Gap?` | Boolean | true |
| Input | `Termination Gap Length` | Double | 0 |
| Input | `Ignore Proximate Points?` | Boolean | false |
| Input | `Proximate Point Threshold` | Double | 0 |
| Input | `Use Global Tesselations?` | Boolean | true |
| Input | `Maximum Chordal Deviation` | Double | 0.05 |
| Input | `Maximum Trim Edge Angle` | Double | 15 |
| Output | `B-Spline Fit Options` | B-Spline Fit Options | - |

### Briosa Disposition

The MP command only packages settings for another MP command. Briosa exposes
the same concept as a normal `BSplineFitOptions` request value, so callers can
construct it directly in their language without a network round trip or
server-held MP variable. This excludes only the redundant constructor RPC; it
does not exclude the fit-options capability.

The public value keeps the MP-facing `useInterpolationForFit` meaning. For this
target, the exact SDK export represents the MP default `true` through its
lower-level `Fit = FALSE` field, so that translation remains an internal server
responsibility.

## Construct B-Spline From Points

<span className="catalog-status catalog-status--next">Next</span>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting B-Spline Name` | Collection Object Name | See MP definition | Required |
| Input | `B-Spline Fit Options` | B-Spline Fit Options | SA defaults | `BSplineFitOptions` defaults |
| Input | `Point List` | Point Name Ref List | See MP definition | Required |

### Briosa Disposition

Selected for the Next surface with a strongly typed fit-options value and an
ordered point-name list. At least three suitable points and licensed geometry
validation are required before the implementation can be marked validated.

### API References

| gRPC | .NET | Python | JavaScript / TypeScript |
| --- | --- | --- | --- |
| [RPC](/api/grpc/construction-operations-bsplines#construct-b-spline-from-points) | [Method](/api/dotnet/construction-operations-bsplines#construct-b-spline-from-points) | [Coroutine](/api/python/construction-operations-bsplines#construct-b-spline-from-points) | [Function](/api/javascript/construction-operations-bsplines#construct-b-spline-from-points) |

## Construct B-Spline From Point Set

<span className="catalog-status catalog-status--next">Next</span>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting B-Spline Name` | Collection Object Name | See MP definition | Required |
| Input | `B-Spline Fit Options` | B-Spline Fit Options | SA defaults | `BSplineFitOptions` defaults |
| Input | `Point Set Container` | Collection Object Name | See MP definition | Required |

### Briosa Disposition

Selected for the Next surface. The point-set container must identify an SA
Point Set, and licensed geometry validation remains outstanding.

### API References

| gRPC | .NET | Python | JavaScript / TypeScript |
| --- | --- | --- | --- |
| [RPC](/api/grpc/construction-operations-bsplines#construct-b-spline-from-point-set) | [Method](/api/dotnet/construction-operations-bsplines#construct-b-spline-from-point-set) | [Coroutine](/api/python/construction-operations-bsplines#construct-b-spline-from-point-set) | [Function](/api/javascript/construction-operations-bsplines#construct-b-spline-from-point-set) |

## Construct B-Spline From Several B-Splines

<span className="catalog-status catalog-status--next">Next</span>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting B-Spline Name` | Collection Object Name | See MP definition | Required |
| Input | `B-Spline List` | Collection Object Name Ref List | See MP definition | Required |
| Input | `Close Resulting B-Spline` | Boolean | false | false |

### Briosa Disposition

Selected for the Next surface. Briosa preserves the supplied B-spline order
and does not close the result unless the caller requests it.

### API References

| gRPC | .NET | Python | JavaScript / TypeScript |
| --- | --- | --- | --- |
| [RPC](/api/grpc/construction-operations-bsplines#construct-b-spline-from-several-b-splines) | [Method](/api/dotnet/construction-operations-bsplines#construct-b-spline-from-several-b-splines) | [Coroutine](/api/python/construction-operations-bsplines#construct-b-spline-from-several-b-splines) | [Function](/api/javascript/construction-operations-bsplines#construct-b-spline-from-several-b-splines) |

## Construct B-Spline From Intersection of Plane and Surface

<span className="catalog-status catalog-status--next">Next</span>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting B-Spline Name` | Collection Object Name | See MP definition | Required |
| Input | `Plane Name` | Collection Object Name | See MP definition | Required |
| Input | `Surface Name` | Collection Object Name | See MP definition | Required |
| Input | `Approximation Tolerance` | Double | 0.0001 | 0.0001 |

### Briosa Disposition

Selected for the Next surface with the exact MP tolerance default. Licensed
plane-and-surface fixtures are still required.

### API References

| gRPC | .NET | Python | JavaScript / TypeScript |
| --- | --- | --- | --- |
| [RPC](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) | [Method](/api/dotnet/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) | [Coroutine](/api/python/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) | [Function](/api/javascript/construction-operations-bsplines#construct-b-spline-from-intersection-of-plane-and-surface) |

## Construct B-Spline From Intersection of Surfaces

<span className="catalog-status catalog-status--next">Next</span>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting B-Spline Name` | Collection Object Name | See MP definition | Required |
| Input | `First Surface Name` | Collection Object Name | See MP definition | Required |
| Input | `Second Surface Name` | Collection Object Name | See MP definition | Required |
| Input | `Approximation Tolerance` | Double | 0.0001 | 0.0001 |

### Briosa Disposition

Selected for the Next surface. Exact SDK and MP documentation agree on the
signature, although the installed help places its page under Ellipsoids rather
than the MP Editor's BSpines group. Briosa follows the exact MP Editor group.

### API References

| gRPC | .NET | Python | JavaScript / TypeScript |
| --- | --- | --- | --- |
| [RPC](/api/grpc/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) | [Method](/api/dotnet/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) | [Coroutine](/api/python/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) | [Function](/api/javascript/construction-operations-bsplines#construct-b-spline-from-intersection-of-surfaces) |

## Construct B-Splines From Surfaces

<span className="catalog-status catalog-status--next">Next</span>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting B-Spline Name prefix (Optional)` | String | Empty | Omitted |
| Input | `Surface List` | Collection Object Name Ref List | See MP definition | Required |
| Output | `B-Spline List` | Collection Object Name Ref List | - | Returned |

### Briosa Disposition

Selected for the Next surface. Briosa returns every created B-spline identity
and omits the optional prefix unless the caller supplies one.

### API References

| gRPC | .NET | Python | JavaScript / TypeScript |
| --- | --- | --- | --- |
| [RPC](/api/grpc/construction-operations-bsplines#construct-b-splines-from-surfaces) | [Method](/api/dotnet/construction-operations-bsplines#construct-b-splines-from-surfaces) | [Coroutine](/api/python/construction-operations-bsplines#construct-b-splines-from-surfaces) | [Function](/api/javascript/construction-operations-bsplines#construct-b-splines-from-surfaces) |

## Construct B-Splines From Lines

<span className="catalog-status catalog-status--next">Next</span>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting B-Spline Name prefix (Optional)` | String | Empty | Omitted |
| Input | `Line List` | Collection Object Name Ref List | See MP definition | Required |
| Output | `B-Spline List` | Collection Object Name Ref List | - | Returned |

### Briosa Disposition

Selected for the Next surface. The SA 2026.1 exact argument uses `B-Spline`
with a hyphen; Briosa does not copy ObjectiveSA's older `B_Spline` spelling.

### API References

| gRPC | .NET | Python | JavaScript / TypeScript |
| --- | --- | --- | --- |
| [RPC](/api/grpc/construction-operations-bsplines#construct-b-splines-from-lines) | [Method](/api/dotnet/construction-operations-bsplines#construct-b-splines-from-lines) | [Coroutine](/api/python/construction-operations-bsplines#construct-b-splines-from-lines) | [Function](/api/javascript/construction-operations-bsplines#construct-b-splines-from-lines) |

## Construct B-Splines From Intersection of Plane and Mesh

<span className="catalog-status catalog-status--next">Next</span>

### MP Signature

| Direction | Argument | MP Type | MP Editor Default | Briosa Default |
| --- | --- | --- | --- | --- |
| Input | `Resulting B-Spline Name` | Collection Object Name | See MP definition | Required |
| Input | `Plane Name` | Collection Object Name | See MP definition | Required |
| Input | `Mesh Name` | Collection Object Name | See MP definition | Required |
| Input | `Delete closed lines whose number of segment is less than this value` | Integer | 3 | 3 |
| Input | `Delete unclosed lines whose number of segment is less than this value` | Integer | 3 | 3 |
| Input | `Create Intersection Points?` | Boolean | true | true |
| Output | `B-Spline List` | Collection Object Name Ref List | - | Returned |

### Briosa Disposition

Selected for the Next surface. The result may contain several B-splines, so
the API returns the complete MP output list rather than only echoing the
requested base name.

### API References

| gRPC | .NET | Python | JavaScript / TypeScript |
| --- | --- | --- | --- |
| [RPC](/api/grpc/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) | [Method](/api/dotnet/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) | [Coroutine](/api/python/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) | [Function](/api/javascript/construction-operations-bsplines#construct-b-splines-from-intersection-of-plane-and-mesh) |
