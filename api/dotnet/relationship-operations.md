---
title: Relationship Operations
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Relationship Operations

[SA 2026.1.0529.7](/api/dotnet/relationship-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/relationship-operations)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Enable/Disable Relationships for Optimization {/* #enabledisable-relationships-for-optimization */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) · [gRPC Contract](/api/grpc/relationship-operations#enabledisable-relationships-for-optimization)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task EnableDisableRelationshipsForOptimizationAsync(
        IEnumerable<CollectionItemName> relationships,
        bool enable = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Geom Relationship Ignore Input Points {/* #geom-relationship-ignore-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC Contract](/api/grpc/relationship-operations#geom-relationship-ignore-input-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task GeomRelationshipIgnoreInputPointsAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Geom Relationship Reuse Ignored Input Points {/* #geom-relationship-reuse-ignored-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) · [gRPC Contract](/api/grpc/relationship-operations#geom-relationship-reuse-ignored-input-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task GeomRelationshipReuseIgnoredInputPointsAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Auto Vectors {/* #get-geom-relationship-auto-vectors */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-auto-vectors)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetGeomRelationshipAutoVectorsResult> GetGeomRelationshipAutoVectorsAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `AutoVectorsNominalEnabled` | MP qualifier: AVN. |
| `AutoVectorsNominalName` | MP qualifier: AVN. |
| `AutoVectorsFitEnabled` | MP qualifier: AVF. |
| `AutoVectorsFitName` | MP qualifier: AVF. |

## Get Geom Relationship Cardinal Points {/* #get-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-cardinal-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointName[]> GetGeomRelationshipCardinalPointsAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Criteria {/* #get-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-criteria)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetGeomRelationshipCriteriaResult> GetGeomRelationshipCriteriaAsync(
        CollectionObjectName relationshipName,
        string criteria = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Measured Avg Point {/* #get-geom-relationship-measured-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-measured-avg-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointName> GetGeomRelationshipMeasuredAvgPointAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Measured Geometry {/* #get-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-measured-geometry)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionObjectName> GetGeomRelationshipMeasuredGeometryAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Nominal Avg Point {/* #get-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-avg-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointName> GetGeomRelationshipNominalAvgPointAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Nominal Geometry {/* #get-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-geometry)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionObjectName> GetGeomRelationshipNominalGeometryAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Point List {/* #get-geom-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-point-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetGeomRelationshipPointListResult> GetGeomRelationshipPointListAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Projection Plane {/* #get-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-projection-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionObjectName> GetGeomRelationshipProjectionPlaneAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Cut Status {/* #get-pipe-relationship-cut-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) · [gRPC Contract](/api/grpc/relationship-operations#get-pipe-relationship-cut-status)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetPipeRelationshipCutStatusResult> GetPipeRelationshipCutStatusAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Properties {/* #get-pipe-relationship-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) · [gRPC Contract](/api/grpc/relationship-operations#get-pipe-relationship-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetPipeRelationshipPropertiesResult> GetPipeRelationshipPropertiesAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Weights {/* #get-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) · [gRPC Contract](/api/grpc/relationship-operations#get-pipe-relationship-weights)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetPipeRelationshipWeightsResult> GetPipeRelationshipWeightsAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Fit Constraints (Scalar Type) {/* #get-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-fit-constraints-scalar-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetRelationshipFitConstraintsScalarTypeResult> GetRelationshipFitConstraintsScalarTypeAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Outlier Rejection (Scalar Type) {/* #get-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-outlier-rejection-scalar-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetRelationshipOutlierRejectionScalarTypeResult> GetRelationshipOutlierRejectionScalarTypeAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Projection Options {/* #get-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-projection-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetRelationshipProjectionOptionsResult> GetRelationshipProjectionOptionsAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Reporting Frame {/* #get-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-reporting-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionObjectName> GetRelationshipReportingFrameAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Sigmoidal Gap Fit Constraints {/* #get-relationship-sigmoidal-gap-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-sigmoidal-gap-fit-constraints)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<SigmoidalGapFitConstraints> GetRelationshipSigmoidalGapFitConstraintsAsync(
        CollectionItemName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Sub Sampling Options {/* #get-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-sub-sampling-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetRelationshipSubSamplingOptionsResult> GetRelationshipSubSamplingOptionsAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Tolerance (Scalar Type) {/* #get-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-tolerance-scalar-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetRelationshipToleranceScalarTypeResult> GetRelationshipToleranceScalarTypeAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Tolerance (Vector Type) {/* #get-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-tolerance-vector-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GetRelationshipToleranceVectorTypeResult> GetRelationshipToleranceVectorTypeAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Type {/* #get-relationship-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-type) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string> GetRelationshipTypeAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Weighting {/* #get-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-weighting)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<double> GetRelationshipWeightingAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Pipe Fitting Relationship {/* #make-pipe-fitting-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-pipe-fitting-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakePipeFittingRelationshipAsync(
        CollectionObjectName relationshipName,
        CollectionObjectName pipe1ObjectName,
        CollectionObjectName pipe2ObjectName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Pipe Relationship Cut {/* #make-pipe-relationship-cut */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC Contract](/api/grpc/relationship-operations#make-pipe-relationship-cut)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakePipeRelationshipCutAsync(
        CollectionObjectName relationshipName,
        bool pipe1MakeCut,
        bool pipe1CreateFrame,
        CollectionObjectName pipe1FrameName,
        bool pipe2MakeCut,
        bool pipe2CreateFrame,
        CollectionObjectName pipe2FrameName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Pipe Relationship Force Cut to Frame {/* #pipe-relationship-force-cut-to-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) · [gRPC Contract](/api/grpc/relationship-operations#pipe-relationship-force-cut-to-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task PipeRelationshipForceCutToFrameAsync(
        CollectionObjectName relationshipName,
        bool pipe1ForceCutToFrame,
        CollectionObjectName pipe1FrameName,
        bool pipe2ForceCutToFrame,
        CollectionObjectName pipe2FrameName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Auto Measure Nominal Feature {/* #set-geom-relationship-auto-measure-nominal-feature */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-auto-measure-nominal-feature)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```csharp
public Task SetGeomRelationshipAutoMeasureNominalFeatureAsync(
        CollectionObjectName relationshipName,
        bool trapClouds,
        CollectionInstrumentId instrumentId,
        string measurementMode = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `trapClouds` | False selects geometry. |

## Set Geom Relationship Auto Vectors Nominal (AVN) {/* #set-geom-relationship-auto-vectors-nominal-avn */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetGeomRelationshipAutoVectorsNominalAvnAsync(
        CollectionObjectName relationshipName,
        bool createAutoVectorsAvn,
        PointFilterInputType pointsType,
        bool useVectorGroupCustomPrefix = false,
        string vectorGroupCustomPrefix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Cardinal Points {/* #set-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-cardinal-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetGeomRelationshipCardinalPointsAsync(
        CollectionObjectName relationshipName,
        bool createCardinalPtsWhenFitting = true,
        bool prefixCardinalPtsNameWithRelName = true,
        string cardinalPtsGroupName = "GR-Cardinal Pts",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Criteria {/* #set-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-criteria)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetGeomRelationshipCriteriaAsync(
        CollectionObjectName relationshipName,
        string criteria = "",
        bool showInReport = true,
        ToleranceScalarOptions toleranceOptions = default,
        double optimizationDeltaWeight = 0.000000,
        double optimizationOutOfToleranceWeight = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Measured Geometry {/* #set-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-measured-geometry)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetGeomRelationshipMeasuredGeometryAsync(
        CollectionObjectName relationshipName,
        CollectionObjectName measuredGeometry,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Nominal Avg Point {/* #set-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-avg-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetGeomRelationshipNominalAvgPointAsync(
        CollectionObjectName relationshipName,
        bool compareToNominal,
        PointName nominalAveragePoint,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Nominal Geometry {/* #set-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-geometry)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetGeomRelationshipNominalGeometryAsync(
        CollectionObjectName relationshipName,
        bool compareToNominal,
        CollectionObjectName nominalGeometry,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Projection Plane {/* #set-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) · [gRPC Contract](/api/grpc/relationship-operations#set-geom-relationship-projection-plane)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetGeomRelationshipProjectionPlaneAsync(
        CollectionObjectName relationshipName,
        bool projectToPlane,
        CollectionObjectName projectionPlaneName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object to Object Direction Relationship Fit Constraints {/* #set-object-to-object-direction-relationship-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [gRPC Contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetObjectToObjectDirectionRelationshipFitConstraintsAsync(
        CollectionObjectName relationshipName,
        FitConstraintScalarOptions angleBetweenVectorsFitConstraints = default,
        FitConstraintScalarOptions mutualPerpendicularLengthFitConstraints = default,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object to Object Direction Relationship Tolerances {/* #set-object-to-object-direction-relationship-tolerances */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [gRPC Contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-tolerances)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetObjectToObjectDirectionRelationshipTolerancesAsync(
        CollectionItemName relationshipName,
        ToleranceScalarOptions angleBetweenVectorsTolerances,
        ToleranceScalarOptions mutualPerpendicularLengthTolerances,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Pipe Relationship Segment Properties {/* #set-pipe-relationship-segment-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) · [gRPC Contract](/api/grpc/relationship-operations#set-pipe-relationship-segment-properties)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetPipeRelationshipSegmentPropertiesAsync(
        CollectionObjectName relationshipName,
        double pipe1InnerDiameter = 0.000000,
        double pipe1OuterDiameter = 0.000000,
        double pipe1CutBegin = 0.000000,
        double pipe1CutEnd = 0.000000,
        double pipe2InnerDiameter = 0.000000,
        double pipe2OuterDiameter = 0.000000,
        double pipe2CutBegin = 0.000000,
        double pipe2CutEnd = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Pipe Relationship Weights {/* #set-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) · [gRPC Contract](/api/grpc/relationship-operations#set-pipe-relationship-weights)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetPipeRelationshipWeightsAsync(
        CollectionObjectName relationshipName,
        double overallWeight = 1.000000,
        double axisOffset = 2.000000,
        double axisAlignment = 1.000000,
        double centerPull = 0.100000,
        double outOfMaterialWeight = 10.000000,
        double outOfMaterialOffset = 1.000000,
        bool constrainRegionAtOd = false,
        bool constrainIdOdOverlap = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Auto Vectors Fit (AVF) {/* #set-relationship-auto-vectors-fit-avf */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-fit-avf)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipAutoVectorsFitAvfAsync(
        CollectionObjectName relationshipName,
        bool createAutoVectorsAvf = false,
        bool useVectorGroupCustomPrefix = false,
        string vectorGroupCustomPrefix = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Auto Vectors Group Default Prefix {/* #set-relationship-auto-vectors-group-default-prefix */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-group-default-prefix)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipAutoVectorsGroupDefaultPrefixAsync(
        string geomRelAvnVgDefaultPrefix = "GR-AVN-",
        string geomRelAvfVgDefaultPrefix = "GR-AVF-",
        string nonGeomRelVgDefaultPrefix = "Auto Vectors: ",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Desired Meas Count {/* #set-relationship-desired-meas-count */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-desired-meas-count)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipDesiredMeasCountAsync(
        CollectionObjectName relationshipName,
        int desiredMeasurementCount = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Dormant Status {/* #set-relationship-dormant-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-dormant-status)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipDormantStatusAsync(
        IEnumerable<CollectionItemName> relationships,
        bool dormantStatus = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Fit Constraints (Scalar Type) {/* #set-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-fit-constraints-scalar-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipFitConstraintsScalarTypeAsync(
        CollectionObjectName relationshipName,
        FitConstraintScalarOptions fitConstraintOptions = default,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Orientation Fit Constraints (Vector Type) {/* #set-relationship-orientation-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipOrientationFitConstraintsVectorTypeAsync(
        CollectionObjectName relationshipName,
        ToleranceVectorOptions orientationVectorConstraint,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Outlier Rejection (Scalar Type) {/* #set-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-outlier-rejection-scalar-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipOutlierRejectionScalarTypeAsync(
        CollectionObjectName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Position Fit Constraints (Vector Type) {/* #set-relationship-position-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-position-fit-constraints-vector-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipPositionFitConstraintsVectorTypeAsync(
        CollectionObjectName relationshipName,
        ToleranceVectorOptions positionVectorConstraint,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Projection Options {/* #set-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-projection-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipProjectionOptionsAsync(
        CollectionObjectName relationshipName,
        ProjectionOptions projectionOptions,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Reporting Frame {/* #set-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-reporting-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipReportingFrameAsync(
        CollectionObjectName relationshipName,
        CollectionObjectName reportingFrame,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Sigmoidal Gap Fit Constraints {/* #set-relationship-sigmoidal-gap-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipSigmoidalGapFitConstraintsAsync(
        CollectionObjectName relationshipName,
        bool useSigmoidalGapConstraints = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Sub Sampling Options {/* #set-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-sub-sampling-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipSubSamplingOptionsAsync(
        CollectionObjectName relationshipName,
        bool useEveryIthPoint = false,
        int iValue = 20,
        bool useNoMoreThanNPoints = true,
        int nValue = 10000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Tolerance (Scalar Type) {/* #set-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-tolerance-scalar-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipToleranceScalarTypeAsync(
        CollectionObjectName relationshipName,
        ToleranceScalarOptions toleranceOptions = default,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Tolerance (Vector Type) {/* #set-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-tolerance-vector-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipToleranceVectorTypeAsync(
        CollectionObjectName relationshipName,
        ToleranceVectorOptions vectorTolerance,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Voxel Cloud Display {/* #set-relationship-voxel-cloud-display */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-voxel-cloud-display)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipVoxelCloudDisplayAsync(
        CollectionObjectName relationshipName,
        bool enableVoxelCloudDisplay,
        double voxelSize,
        int minPtsCountPerVoxel,
        double voxelRenderingDiameter,
        SurfaceAnalysisMode surfaceAnalysisMode,
        ColorizationOptions colorizationOptions,
        bool showColorBarInView = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `voxelSize` | -1.0 selects automatic detection. |
| `voxelRenderingDiameter` | -1.0 selects fast rendering. |

## Set Relationship Weighting {/* #set-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-weighting)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipWeightingAsync(
        CollectionObjectName relationshipName,
        double weight = 0.000000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Weights Normalized {/* #set-relationship-weights-normalized */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-weights-normalized)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipWeightsNormalizedAsync(
        CollectionName collectionName,
        RelWeightingMode pickWeightingMode,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Geometry Relationship Summary {/* #generate-geometry-relationship-summary */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary) · [gRPC Contract](/api/grpc/relationship-operations#generate-geometry-relationship-summary)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task GenerateGeometryRelationshipSummaryAsync(
        IEnumerable<CollectionItemName> relationshipRefList,
        string summaryTableName = "Geometry Relationship Summary",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Edit Geometry Relationship Point List {/* #edit-geometry-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list) · [gRPC Contract](/api/grpc/relationship-operations#edit-geometry-relationship-point-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task EditGeometryRelationshipPointListAsync(
        CollectionItemName relationshipName,
        GeometryRelationshipPointEditMode pointEditMode = GeometryRelationshipPointEditMode.PointList,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Geometry Relationship Outlier Cloud Points {/* #filter-geometry-relationship-outlier-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [gRPC Contract](/api/grpc/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task<GeometryRelationshipOutlierFilterMetrics> FilterGeometryRelationshipOutlierCloudPointsAsync(
        CollectionItemName relationshipName,
        double sigmaThreshold = 3.0,
        bool modifyExistingInputClouds = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Relationship Watch Window Template {/* #relationship-watch-window-template */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template) · [gRPC Contract](/api/grpc/relationship-operations#relationship-watch-window-template)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task RelationshipWatchWindowTemplateAsync(
        CollectionObjectName watchWindowTemplateName,
        RelationshipWatchWindowUdpSettings udpNetworkTransmitSettings,
        RelationshipWatchWindowTemplateOptions? options = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `showDeviationX` | MP qualifier: Rx. |
| `showDeviationY` | MP qualifier: Ry. |
| `showDeviationZ` | MP qualifier: Rz. |

## Make Point to Point Relationship {/* #make-point-to-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-point-to-point-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakePointToPointRelationshipAsync(
        CollectionItemName relationshipName,
        PointName firstPointName,
        PointName secondPointName,
        ToleranceVectorOptions tolerance,
        ToleranceVectorOptions constraint,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Frame to Frame Relationship {/* #make-frame-to-frame-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-frame-to-frame-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeFrameToFrameRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstFrameName,
        CollectionObjectName secondFrameName,
        ToleranceScalarOptions orientationTolerance,
        ToleranceVectorOptions positionTolerance,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Points to Objects Relationship {/* #make-points-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-points-to-objects-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakePointsToObjectsRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName> pointsInRelationship,
        IEnumerable<CollectionObjectName> objectsInRelationship,
        ProjectionOptions projectionOptions,
        bool autoUpdateAVectorGroup = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Points to Points Relationship {/* #make-points-to-points-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-points-to-points-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakePointsToPointsRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName> nominalPoints,
        IEnumerable<PointName> measuredPoints,
        ToleranceVectorOptions tolerance,
        ToleranceVectorOptions constraint,
        bool autoUpdateAVectorGroup = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Groups to Objects Relationship {/* #make-groups-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-groups-to-objects-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeGroupsToObjectsRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<CollectionObjectName> pointGroupsInRelationship,
        IEnumerable<CollectionObjectName> objectsInRelationship,
        ProjectionOptions projectionOptions,
        bool autoUpdateAVectorGroup = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Object to Object Direction Relationship {/* #make-object-to-object-direction-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-object-to-object-direction-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeObjectToObjectDirectionRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstObjectInRelationship,
        CollectionObjectName secondObjectInRelationship,
        double nominalAngle = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Point Clouds to Objects Relationship {/* #make-point-clouds-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-point-clouds-to-objects-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakePointCloudsToObjectsRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<CollectionObjectName> pointCloudsInRelationship,
        IEnumerable<CollectionObjectName> objectsInRelationship,
        ProjectionOptions projectionOptions,
        bool autoUpdateAVectorGroup = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Group to Group Relationship {/* #make-group-to-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-group-to-group-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeGroupToGroupRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstGroupName,
        CollectionObjectName secondGroupName,
        ToleranceVectorOptions tolerance,
        ToleranceVectorOptions constraint,
        bool autoUpdateAVectorGroup = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Group to Nominal Group Relationship {/* #make-group-to-nominal-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-group-to-nominal-group-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `displayClosestPointWatchWindow` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task MakeGroupToNominalGroupRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName nominalGroupName,
        CollectionObjectName measuredGroupName,
        ToleranceVectorOptions tolerance,
        ToleranceVectorOptions constraint,
        bool autoUpdateAVectorGroup = false,
        bool useClosestPoint = true,
        bool displayClosestPointWatchWindow = false,
        bool useViewZoomingWithProximity = false,
        bool ignorePointsBeyondThreshold = false,
        double proximityThreshold = 0.01,
        double fitWeight = 1.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Average Point Relationship {/* #make-average-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-average-point-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeAveragePointRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName> pointsInRelationship,
        PointName? averagePointName = null,
        PointName? nominalPointName = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Fit Only Relationship {/* #make-geometry-fit-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-geometry-fit-only-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeGeometryFitOnlyRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<CollectionObjectName> pointGroupsToFit,
        GeometryType geometryType,
        CollectionObjectName? resultingObjectName = null,
        string? fitProfileName = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Fit and Compare to Nominal Relationship {/* #make-geometry-fit-and-compare-to-nominal-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeGeometryFitAndCompareToNominalRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName nominalGeometry,
        IEnumerable<CollectionObjectName> pointGroupsToFit,
        CollectionObjectName? resultingObjectName = null,
        string? fitProfileName = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Compare Only Relationship {/* #make-geometry-compare-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-geometry-compare-only-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeGeometryCompareOnlyRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName nominalGeometry,
        CollectionObjectName measuredGeometry,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Point Relationship {/* #make-dynamic-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-point-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeDynamicPointRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicPointMode constructionMode,
        CollectionObjectName thirdReferenceGeometry,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Line Relationship {/* #make-dynamic-line-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-line-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeDynamicLineRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicLineMode constructionMode,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Plane Relationship {/* #make-dynamic-plane-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-plane-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeDynamicPlaneRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicPlaneMode constructionMode,
        double offsetPlaneOffset = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Circle Relationship {/* #make-dynamic-circle-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-circle-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeDynamicCircleRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicCircleMode constructionMode,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Ellipse Relationship {/* #make-dynamic-ellipse-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-dynamic-ellipse-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeDynamicEllipseRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicEllipseMode constructionMode,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Vector Group To Vector Group Relationship {/* #make-vector-group-to-vector-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-vector-group-to-vector-group-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeVectorGroupToVectorGroupRelationshipAsync(
        CollectionItemName newVgToVgRelationship,
        CollectionObjectName referenceVectorGroup,
        CollectionObjectName correspondingVectorGroup,
        bool setOpposingVectorGroupPolarity = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Cylindrical Zone {/* #set-vector-group-to-vector-group-cylindrical-zone */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [gRPC Contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorGroupToVectorGroupCylindricalZoneAsync(
        CollectionItemName vgToVgRelationship,
        double radialOffset = 1.0,
        double minimumAxialOffset = -10.0,
        double maximumAxialOffset = 10.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Fit Weights {/* #set-vector-group-to-vector-group-fit-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [gRPC Contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-weights)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorGroupToVectorGroupFitWeightsAsync(
        CollectionItemName vgToVgRelationship,
        double minimumGap = 0.0,
        double minimumGapFitWeight = 10.0,
        double maximumGap = 0.0,
        double maximumGapFitWeight = 10.0,
        double nominalGap = 0.0,
        double nominalGapFitWeight = 1.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Fit Gradient Factor {/* #set-vector-group-to-vector-group-fit-gradient-factor */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [gRPC Contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorGroupToVectorGroupFitGradientFactorAsync(
        CollectionItemName vgToVgRelationship,
        double fitGradientFactor = 50.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Relative Polarity {/* #set-vector-group-to-vector-group-relative-polarity */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [gRPC Contract](/api/grpc/relationship-operations#set-vector-group-to-vector-group-relative-polarity)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetVectorGroupToVectorGroupRelativePolarityAsync(
        CollectionItemName vgToVgRelationship,
        bool setOpposingVectorGroupPolarity = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Relationship {/* #delete-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#delete-relationship) · [gRPC Contract](/api/grpc/relationship-operations#delete-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```csharp
public Task DeleteRelationshipAsync(
        CollectionItemName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Optimization Search Options {/* #set-optimization-search-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-search-options) · [gRPC Contract](/api/grpc/relationship-operations#set-optimization-search-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetOptimizationSearchOptionsAsync(
        int maxNumberOfStepSizeReduction = 5,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Optimization Perturbation Parameters {/* #set-optimization-perturbation-parameters */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-perturbation-parameters) · [gRPC Contract](/api/grpc/relationship-operations#set-optimization-perturbation-parameters)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetOptimizationPerturbationParametersAsync(
        double lengthPerturbation = 0.0001,
        double angularPerturbation = 0.0001,
        double damping = 1.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Do Relationship Fit {/* #do-relationship-fit */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) · [gRPC Contract](/api/grpc/relationship-operations#do-relationship-fit)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `long_running`

A request that sets `useFitDialog` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task<RelationshipFitResult> DoRelationshipFitAsync(
        string collectionContainingRelationships,
        IEnumerable<CollectionObjectName> objectsToMove,
        IEnumerable<CollectionInstrumentId> instrumentsToMove,
        FitDofOptions motionToAllow,
        SolverMode solverMode = SolverMode.GaussNewton,
        bool enableRandomizedStart = false,
        bool useFitDialog = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Collections by Minimizing Relationships {/* #move-collections-by-minimizing-relationships */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#move-collections-by-minimizing-relationships) · [gRPC Contract](/api/grpc/relationship-operations#move-collections-by-minimizing-relationships)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `long_running`

A request that sets `useFitDialog` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task MoveCollectionsByMinimizingRelationshipsAsync(
        IEnumerable<string> collectionsToMove,
        IEnumerable<CollectionItemName> relationshipsToMinimize,
        FitDofOptions motionToAllow,
        SolverMode solverMode = SolverMode.GaussNewton,
        bool useFitDialog = false,
        double convergenceThreshold = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get General Relationship Statistics {/* #get-general-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-general-relationship-statistics) · [gRPC Contract](/api/grpc/relationship-operations#get-general-relationship-statistics)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<GeneralRelationshipStatistics> GetGeneralRelationshipStatisticsAsync(
        CollectionItemName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Points to Objects Relationship Statistics {/* #get-points-to-objects-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-objects-relationship-statistics) · [gRPC Contract](/api/grpc/relationship-operations#get-points-to-objects-relationship-statistics)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointsToObjectsRelationshipStatistics> GetPointsToObjectsRelationshipStatisticsAsync(
        CollectionItemName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Relationship Trapping {/* #startstop-relationship-trapping */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#startstop-relationship-trapping) · [gRPC Contract](/api/grpc/relationship-operations#startstop-relationship-trapping)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```csharp
public Task StartStopRelationshipTrappingAsync(
        CollectionItemName relationshipName,
        CollectionInstrumentId instrumentId,
        bool startTrapping = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point to Point Relationship Statistics {/* #get-point-to-point-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-point-to-point-relationship-statistics) · [gRPC Contract](/api/grpc/relationship-operations#get-point-to-point-relationship-statistics)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointToPointRelationshipStatistics> GetPointToPointRelationshipStatisticsAsync(
        CollectionItemName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Group To Nominal Group View Zooming {/* #set-group-to-nominal-group-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming) · [gRPC Contract](/api/grpc/relationship-operations#set-group-to-nominal-group-view-zooming)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetGroupToNominalGroupViewZoomingAsync(
        CollectionItemName relationshipName,
        bool useClosestPoint = true,
        bool showClosestPointWatchWindow = false,
        bool useViewZooming = true,
        bool ignorePointsBeyondThreshold = true,
        double proximityThreshold = 0.01,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Associated Data {/* #set-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data) · [gRPC Contract](/api/grpc/relationship-operations#set-relationship-associated-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetRelationshipAssociatedDataAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName> individualPoints,
        IEnumerable<CollectionObjectName> pointGroups,
        IEnumerable<CollectionObjectName> pointClouds,
        IEnumerable<CollectionObjectName> objects,
        bool ignoreEmptyArguments = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Associated Data {/* #get-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-associated-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<RelationshipAssociatedData> GetRelationshipAssociatedDataAsync(
        CollectionItemName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Points to Points Relationship Associated Data {/* #set-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data) · [gRPC Contract](/api/grpc/relationship-operations#set-points-to-points-relationship-associated-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetPointsToPointsRelationshipAssociatedDataAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName> nominalPoints,
        IEnumerable<PointName> actualPoints,
        bool ignoreEmptyArguments = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Points to Points Relationship Associated Data {/* #get-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data) · [gRPC Contract](/api/grpc/relationship-operations#get-points-to-points-relationship-associated-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<PointsToPointsRelationshipAssociatedData> GetPointsToPointsRelationshipAssociatedDataAsync(
        CollectionItemName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Clouds to Nominal Geometry 3D {/* #auto-filter-clouds-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [gRPC Contract](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AutoFilterCloudsToNominalGeometry3DAsync(
        IEnumerable<CollectionItemName> autoFilterTargetRelationships,
        IEnumerable<CollectionObjectName> clouds,
        FilterProximitySettings filterProximitySettings3D,
        CloudThinningOptions? cloudThinningSettings = null,
        bool useFeatureSpecificFilterSettings = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Clouds to Nominal Geometry 2D {/* #auto-filter-clouds-to-nominal-geometry-2d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [gRPC Contract](/api/grpc/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AutoFilterCloudsToNominalGeometry2DAsync(
        IEnumerable<CollectionItemName> autoFilterTargetRelationships,
        IEnumerable<CollectionObjectName> clouds,
        FilterProximitySettings filterProximitySettings2D,
        CloudThinningOptions? cloudThinningSettings = null,
        double geometryExtractionTolerance = 0.01,
        bool useFeatureSpecificFilterSettings = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Points to Nominal Geometry 3D {/* #auto-filter-points-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [gRPC Contract](/api/grpc/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task AutoFilterPointsToNominalGeometry3DAsync(
        IEnumerable<CollectionItemName> autoFilterTargetRelationships,
        IEnumerable<PointName> points,
        FilterProximitySettings filterProximitySettings3D,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Points/Groups/Clouds to Surface Faces {/* #auto-filter-pointsgroupsclouds-to-surface-faces */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [gRPC Contract](/api/grpc/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `long_running`

```csharp
public Task AutoFilterPointsGroupsCloudsToSurfaceFacesAsync(
        IEnumerable<CollectionObjectName> surfaces,
        IEnumerable<PointName> points,
        IEnumerable<CollectionObjectName> groups,
        IEnumerable<CollectionObjectName> clouds,
        OffsetDirectionType offsetDirection,
        double surfaceOffset = 0.1,
        double edgeOffset = 0.1,
        bool enforceMaxPointsPerFaceInOutput = false,
        int maxPointsPerFace = 0,
        CloudThinningOptions? cloudThinningSettings = null,
        string outputCloudBaseName = "InspAutoFilteredCloud",
        bool useFaceIdsForSuffix = true,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Extract Geometry From Point Clouds {/* #extract-geometry-from-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#extract-geometry-from-point-clouds) · [gRPC Contract](/api/grpc/relationship-operations#extract-geometry-from-point-clouds)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task ExtractGeometryFromPointCloudsAsync(
        CollectionItemName relationshipName,
        CollectionObjectName cloudName,
        IEnumerable<PointName> seedPoints,
        GeometryType geometryType,
        IEnumerable<PointName> boundingPoints,
        double tolerance = 0.1,
        bool reverseNormal = false,
        int planarPointCount = 1000,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Points to Objects Map {/* #create-points-to-objects-map */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map) · [gRPC Contract](/api/grpc/relationship-operations#create-points-to-objects-map)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task CreatePointsToObjectsMapAsync(
        string pointsToObjectsMapName,
        IEnumerable<CollectionObjectName> objects,
        IEnumerable<PointName> points,
        IEnumerable<CollectionObjectName> groups,
        double proximityTolerance = 0.0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Objects From Points to Objects Map (Point List) {/* #get-objects-from-points-to-objects-map-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [gRPC Contract](/api/grpc/relationship-operations#get-objects-from-points-to-objects-map-point-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> GetObjectsFromPointsToObjectsMapPointListAsync(
        string pointsToObjectsMapName,
        IEnumerable<PointName> points,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Compute Geometry Relationship Uncertainties {/* #compute-geometry-relationship-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties) · [gRPC Contract](/api/grpc/relationship-operations#compute-geometry-relationship-uncertainties)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `displayResults` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```csharp
public Task ComputeGeometryRelationshipUncertaintiesAsync(
        CollectionItemName relationshipName,
        bool displayResults = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Cloud to Swatch Relationship {/* #make-cloud-to-swatch-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-cloud-to-swatch-relationship) · [gRPC Contract](/api/grpc/relationship-operations#make-cloud-to-swatch-relationship)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task MakeCloudToSwatchRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName inputCloudName,
        string surfaceFaceList,
        PointName referencePoint,
        CollectionObjectName cardinalPointGroupName,
        double maximumRadialOffset = 0.125,
        double minimumAxialOffset = -0.125,
        double maximumAxialOffset = 0.125,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Criteria Name List {/* #get-geom-relationship-criteria-name-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list) · [gRPC Contract](/api/grpc/relationship-operations#get-geom-relationship-criteria-name-list)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<string>> GetGeomRelationshipCriteriaNameListAsync(
        CollectionItemName relationshipName,
        bool includeAllCriteria = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Status {/* #get-relationship-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-status) · [gRPC Contract](/api/grpc/relationship-operations#get-relationship-status)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<RelationshipStatusFlags> GetRelationshipStatusAsync(
        CollectionItemName relationshipName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Relationship Types {/* #relationship-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Dynamic Relationship Types {/* #dynamic-relationship-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Relationship Fit and Statistics Types {/* #relationship-fit-and-statistics-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Associated-Data and Auto-Filter Types {/* #associated-data-and-auto-filter-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Final Reconciled Subgroup Types {/* #final-reconciled-subgroup-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7)
