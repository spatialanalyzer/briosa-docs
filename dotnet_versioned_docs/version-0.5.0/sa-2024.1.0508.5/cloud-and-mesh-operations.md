---
title: Cloud and Mesh Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Cloud and Mesh Operations

[SA 2026.1.0529.7](/api/dotnet/cloud-and-mesh-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/cloud-and-mesh-operations)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Cloud Display Control {/* #cloud-display-control */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#cloud-display-control) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#cloud-display-control)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task CloudDisplayControlAsync(
        int thin = 1,
        int pointSize = 1,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `thin` | MP qualifier: Draw Increment. |

## Reset Cloud Bounding Box {/* #reset-cloud-bounding-box */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#reset-cloud-bounding-box) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#reset-cloud-bounding-box)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<ResetCloudBoundingBoxResult> ResetCloudBoundingBoxAsync(
        CollectionObjectName cloudName,
        CloudBoxType cloudBoxType = CloudBoxType.WorldAxisAlignedBox,
        bool showBoundingBox = true,
        bool useAllPoints = false,
        int desiredPointCount = 1000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Cloud Point Count {/* #get-cloud-point-count */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-cloud-point-count) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#get-cloud-point-count)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetCloudPointCountResult> GetCloudPointCountAsync(
        CollectionObjectName cloudName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Cloud Default Clipping Plane {/* #set-cloud-default-clipping-plane */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#set-cloud-default-clipping-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#set-cloud-default-clipping-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCloudDefaultClippingPlaneAsync(
        bool enableCloudClipping = false,
        CollectionObjectName? referenceObject = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Raster Scan Edge Inspection {/* #raster-scan-edge-inspection */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#raster-scan-edge-inspection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#raster-scan-edge-inspection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string> RasterScanEdgeInspectionAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        CollectionObjectName edgeSurfaceName,
        IEnumerable<CollectionObjectName> bSplineEdgeList,
        CollectionObjectName prefixForOutputGroups,
        double tolerance = 0.0,
        int minimumGoodPointsPerUnitLength = 0,
        double maximumBadPointsPercentage = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## New Raster Scan Edge Inspection {/* #new-raster-scan-edge-inspection */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#new-raster-scan-edge-inspection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#new-raster-scan-edge-inspection)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```csharp
public Task<string> NewRasterScanEdgeInspectionAsync(
        IEnumerable<CollectionObjectName> edgeCloudNames,
        CollectionObjectName edgeSurfaceName,
        CollectionObjectName edgeBSplineName,
        CollectionObjectName outputPrefix,
        double inspectionIncrement = 0.0,
        double proximityFilterDistance = 0.0,
        double edgeBiasValue = 0.0,
        double errorTolerance = 0.0,
        bool useCosineProjectionMethod = false,
        int minimumEdgePointsPerSegment = 0,
        FileReference? intermediateCalculationResultsFile = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable All Cloud Cross Sections {/* #enable-all-cloud-cross-sections */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-all-cloud-cross-sections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#enable-all-cloud-cross-sections)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task EnableAllCloudCrossSectionsAsync(
        CollectionObjectName crossSectionCloudName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Cloud Cross Sections {/* #enabledisable-cloud-cross-sections */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enabledisable-cloud-cross-sections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#enabledisable-cloud-cross-sections)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task EnableDisableCloudCrossSectionsAsync(
        CollectionObjectName crossSectionCloudName,
        int crossSectionId = 0,
        bool enable = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable Single Cloud Cross Section {/* #enable-single-cloud-cross-section */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#enable-single-cloud-cross-section) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#enable-single-cloud-cross-section)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task EnableSingleCloudCrossSectionAsync(
        CollectionObjectName crossSectionCloudName,
        int crossSectionId = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Cross Sections in Cross Section Cloud {/* #get-number-of-cross-sections-in-cross-section-cloud */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#get-number-of-cross-sections-in-cross-section-cloud)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<int> GetNumberOfCrossSectionsInCrossSectionCloudAsync(
        CollectionObjectName crossSectionCloudName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Plane {/* #filter-clouds-to-plane */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#filter-clouds-to-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task FilterCloudsToPlaneAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        CollectionObjectName filterPlaneName,
        CollectionObjectName outputGroupName,
        double proximity = 0.0,
        OffsetDirectionType allowableOffsetDirection = OffsetDirectionType.Both,
        PointOutputType outputType = PointOutputType.Points,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Group {/* #filter-clouds-to-group */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#filter-clouds-to-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task FilterCloudsToGroupAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        CollectionObjectName filterGroupName,
        CollectionObjectName outputGroupName,
        double proximity = 0.0,
        int maximumNumberOfPoints = 0,
        PointOutputType outputType = PointOutputType.Points,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Surface {/* #filter-clouds-to-surface */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-surface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#filter-clouds-to-surface)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task FilterCloudsToSurfaceAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        CollectionObjectName filterSurfaceName,
        CollectionObjectName outputGroupName,
        double lowProximity = 0.0,
        double highProximity = 0.0,
        int skipFactor = 0,
        PointOutputType outputType = PointOutputType.Points,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to BSplines {/* #filter-clouds-to-bsplines */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-bsplines) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#filter-clouds-to-bsplines)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task FilterCloudsToBSplinesAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        IEnumerable<CollectionObjectName> filterBSplineNames,
        CollectionObjectName outputGroupName,
        double minimumProximity = 0.0,
        double maximumProximity = 0.0,
        PointOutputType outputType = PointOutputType.Points,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Line Segment {/* #filter-clouds-to-line-segment */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-line-segment) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#filter-clouds-to-line-segment)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task FilterCloudsToLineSegmentAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        PointName firstLineEndPoint,
        PointName secondLineEndPoint,
        CollectionObjectName outputGroupName,
        double minimumProximity = 0.0,
        double maximumProximity = 0.0,
        PointOutputType outputType = PointOutputType.Points,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Clouds to Vector Groups - Resolve points {/* #filter-clouds-to-vector-groups---resolve-points */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task FilterCloudsToVectorGroupsResolvePointsAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        IEnumerable<CollectionObjectName> vectorGroupNames,
        CollectionObjectName outputGroupName,
        double minimumProximity = 0.0,
        double maximumProximity = 0.0,
        double maximumDistanceFromVectorBegin = 0.0,
        int minimumNumberOfRequiredPoints = 0,
        PointOutputType outputType = PointOutputType.Points,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## RGB Cloud Point Filter {/* #rgb-cloud-point-filter */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#rgb-cloud-point-filter) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#rgb-cloud-point-filter)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task RGBCloudPointFilterAsync(
        IEnumerable<CollectionObjectName> cloudsToBeFiltered,
        string filterName = "Default Filter",
        bool redEnabled = true,
        bool redHighEnabled = false,
        int redHighThreshold = 255,
        bool redLowEnabled = false,
        int redLowThreshold = 0,
        bool greenEnabled = true,
        bool greenHighEnabled = false,
        int greenHighThreshold = 255,
        bool greenLowEnabled = false,
        int greenLowThreshold = 0,
        bool blueEnabled = true,
        bool blueHighEnabled = false,
        int blueHighThreshold = 255,
        bool blueLowEnabled = false,
        int blueLowThreshold = 0,
        bool grayScaleEnabled = false,
        bool grayScaleHighEnabled = false,
        int grayScaleHighThreshold = 255,
        bool grayScaleLowEnabled = false,
        int grayScaleLowThreshold = 0,
        RGBFilterOperation rgbFilterOperation = RGBFilterOperation.ResetAndApplyFilter,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Cloud Points by Radial Distance from Points {/* #delete-cloud-points-by-radial-distance-from-points */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#delete-cloud-points-by-radial-distance-from-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteCloudPointsByRadialDistanceFromPointsAsync(
        IEnumerable<CollectionObjectName> cloudNames,
        IEnumerable<PointName> points,
        double radius = 0.0,
        bool deleteInside = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Cloud Points by X Y Z Range {/* #delete-cloud-points-by-x-y-z-range */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#delete-cloud-points-by-x-y-z-range)

Client 0.5.0 removed this method with behavioral contract major 3. With bounds set, SpatialAnalyzer returned MP code -1 on both exact targets and deleted no points. No X Y Z box delete replaces it. Delete Cloud Points by Radial Distance from Points deletes by distance from points instead; its semantics differ, and it has no licensed validation yet. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Generate General Mesh {/* #generate-general-mesh */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#generate-general-mesh) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#generate-general-mesh)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `long_running`

```csharp
public Task GenerateGeneralMeshAsync(
        CollectionObjectName outputMeshName,
        IEnumerable<CollectionObjectName> cloudsToMesh,
        double maximumTriangleSize = 0.05,
        double smallestHoleDiameter = 0.25,
        bool finalize = true,
        bool useScanDirectionForPointNormal = true,
        FileReference? jsonFile = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Mesh Volume {/* #mesh-volume */}

[MP Catalog](/mp-command-catalog/commands/cloud-and-mesh-operations#mesh-volume) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/cloud-and-mesh-operations#mesh-volume)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<MeshVolumeResult> MeshVolumeAsync(
        CollectionObjectName mesh,
        CollectionObjectName plane,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Cloud Point Deviations {/* #clear-cloud-point-deviations */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Filter Clouds to Vector Groups - Resolve Clouds {/* #filter-clouds-to-vector-groups---resolve-clouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Cloud RGB Values {/* #get-cloud-rgb-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Cloud RGB Values Near Point {/* #get-cloud-rgb-values-near-point */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Subdivide Cloud by Point Spacing {/* #subdivide-cloud-by-point-spacing */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Consolidate Mesh {/* #consolidate-mesh */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Mesh Fill Holes {/* #mesh-fill-holes */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2024.1.0508.5)
