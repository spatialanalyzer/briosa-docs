---
title: Relationship Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Relationship Operations

[SA 2026.1.0529.7](/api/dotnet/relationship-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/relationship-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Enable/Disable Relationships for Optimization {/* #enabledisable-relationships-for-optimization */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#enabledisable-relationships-for-optimization)

```csharp
public Task EnableDisableRelationshipsForOptimizationAsync(
        IEnumerable<CollectionItemName> relationships,
        bool enable = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Geom Relationship Ignore Input Points {/* #geom-relationship-ignore-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#geom-relationship-ignore-input-points)

```csharp
public Task GeomRelationshipIgnoreInputPointsAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Geom Relationship Reuse Ignored Input Points {/* #geom-relationship-reuse-ignored-input-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#geom-relationship-reuse-ignored-input-points)

```csharp
public Task GeomRelationshipReuseIgnoredInputPointsAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Auto Vectors {/* #get-geom-relationship-auto-vectors */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-auto-vectors)

```csharp
public Task<GetGeomRelationshipAutoVectorsResult> GetGeomRelationshipAutoVectorsAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `AutoVectorsNominalEnabled` | MP qualifier: AVN. |
| `AutoVectorsNominalName` | MP qualifier: AVN. |
| `AutoVectorsFitEnabled` | MP qualifier: AVF. |
| `AutoVectorsFitName` | MP qualifier: AVF. |

## Get Geom Relationship Cardinal Points {/* #get-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-cardinal-points)

```csharp
public Task<PointName[]> GetGeomRelationshipCardinalPointsAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Criteria {/* #get-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria)

```csharp
public Task<GetGeomRelationshipCriteriaResult> GetGeomRelationshipCriteriaAsync(
        CollectionObjectName relationshipName,
        string criteria = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Measured Avg Point {/* #get-geom-relationship-measured-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-avg-point)

```csharp
public Task<PointName> GetGeomRelationshipMeasuredAvgPointAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Measured Geometry {/* #get-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-measured-geometry)

```csharp
public Task<CollectionObjectName> GetGeomRelationshipMeasuredGeometryAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Nominal Avg Point {/* #get-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-avg-point)

```csharp
public Task<PointName> GetGeomRelationshipNominalAvgPointAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Nominal Geometry {/* #get-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-nominal-geometry)

```csharp
public Task<CollectionObjectName> GetGeomRelationshipNominalGeometryAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Point List {/* #get-geom-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-point-list)

```csharp
public Task<GetGeomRelationshipPointListResult> GetGeomRelationshipPointListAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Projection Plane {/* #get-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-projection-plane)

```csharp
public Task<CollectionObjectName> GetGeomRelationshipProjectionPlaneAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Cut Status {/* #get-pipe-relationship-cut-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-cut-status)

```csharp
public Task<GetPipeRelationshipCutStatusResult> GetPipeRelationshipCutStatusAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Properties {/* #get-pipe-relationship-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-properties)

```csharp
public Task<GetPipeRelationshipPropertiesResult> GetPipeRelationshipPropertiesAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Pipe Relationship Weights {/* #get-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-pipe-relationship-weights)

```csharp
public Task<GetPipeRelationshipWeightsResult> GetPipeRelationshipWeightsAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Fit Constraints (Scalar Type) {/* #get-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-fit-constraints-scalar-type)

```csharp
public Task<GetRelationshipFitConstraintsScalarTypeResult> GetRelationshipFitConstraintsScalarTypeAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Outlier Rejection (Scalar Type) {/* #get-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-outlier-rejection-scalar-type)

```csharp
public Task<GetRelationshipOutlierRejectionScalarTypeResult> GetRelationshipOutlierRejectionScalarTypeAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Projection Options {/* #get-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-projection-options)

```csharp
public Task<GetRelationshipProjectionOptionsResult> GetRelationshipProjectionOptionsAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Reporting Frame {/* #get-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-reporting-frame)

```csharp
public Task<CollectionObjectName> GetRelationshipReportingFrameAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Sub Sampling Options {/* #get-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-sub-sampling-options)

```csharp
public Task<GetRelationshipSubSamplingOptionsResult> GetRelationshipSubSamplingOptionsAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Tolerance (Scalar Type) {/* #get-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-scalar-type)

```csharp
public Task<GetRelationshipToleranceScalarTypeResult> GetRelationshipToleranceScalarTypeAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Tolerance (Vector Type) {/* #get-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-tolerance-vector-type)

```csharp
public Task<GetRelationshipToleranceVectorTypeResult> GetRelationshipToleranceVectorTypeAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Type {/* #get-relationship-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-type)

```csharp
public Task<string> GetRelationshipTypeAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Weighting {/* #get-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-weighting)

```csharp
public Task<double> GetRelationshipWeightingAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Pipe Fitting Relationship {/* #make-pipe-fitting-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-pipe-fitting-relationship)

```csharp
public Task MakePipeFittingRelationshipAsync(
        CollectionObjectName relationshipName,
        CollectionObjectName pipe1ObjectName,
        CollectionObjectName pipe2ObjectName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Pipe Relationship Cut {/* #make-pipe-relationship-cut */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-pipe-relationship-cut)

```csharp
public Task MakePipeRelationshipCutAsync(
        CollectionObjectName relationshipName,
        bool pipe1MakeCut,
        bool pipe1CreateFrame,
        CollectionObjectName pipe1FrameName,
        bool pipe2MakeCut,
        bool pipe2CreateFrame,
        CollectionObjectName pipe2FrameName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Pipe Relationship Force Cut to Frame {/* #pipe-relationship-force-cut-to-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#pipe-relationship-force-cut-to-frame)

```csharp
public Task PipeRelationshipForceCutToFrameAsync(
        CollectionObjectName relationshipName,
        bool pipe1ForceCutToFrame,
        CollectionObjectName pipe1FrameName,
        bool pipe2ForceCutToFrame,
        CollectionObjectName pipe2FrameName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Auto Vectors Nominal (AVN) {/* #set-geom-relationship-auto-vectors-nominal-avn */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

```csharp
public Task SetGeomRelationshipAutoVectorsNominalAvnAsync(
        CollectionObjectName relationshipName,
        bool createAutoVectorsAvn,
        PointFilterInputType pointsType,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Cardinal Points {/* #set-geom-relationship-cardinal-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-cardinal-points)

```csharp
public Task SetGeomRelationshipCardinalPointsAsync(
        CollectionObjectName relationshipName,
        bool createCardinalPtsWhenFitting = true,
        bool prefixCardinalPtsNameWithRelName = true,
        string cardinalPtsGroupName = "GR-Cardinal Pts",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Criteria {/* #set-geom-relationship-criteria */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-criteria)

```csharp
public Task SetGeomRelationshipCriteriaAsync(
        CollectionObjectName relationshipName,
        string criteria = "",
        bool showInReport = true,
        ToleranceScalarOptions toleranceOptions = default,
        double optimizationDeltaWeight = 0.000000,
        double optimizationOutOfToleranceWeight = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Measured Geometry {/* #set-geom-relationship-measured-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-measured-geometry)

```csharp
public Task SetGeomRelationshipMeasuredGeometryAsync(
        CollectionObjectName relationshipName,
        CollectionObjectName measuredGeometry,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Nominal Avg Point {/* #set-geom-relationship-nominal-avg-point */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-avg-point)

```csharp
public Task SetGeomRelationshipNominalAvgPointAsync(
        CollectionObjectName relationshipName,
        bool compareToNominal,
        PointName nominalAveragePoint,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Nominal Geometry {/* #set-geom-relationship-nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-nominal-geometry)

```csharp
public Task SetGeomRelationshipNominalGeometryAsync(
        CollectionObjectName relationshipName,
        bool compareToNominal,
        CollectionObjectName nominalGeometry,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Geom Relationship Projection Plane {/* #set-geom-relationship-projection-plane */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-geom-relationship-projection-plane)

```csharp
public Task SetGeomRelationshipProjectionPlaneAsync(
        CollectionObjectName relationshipName,
        bool projectToPlane,
        CollectionObjectName projectionPlaneName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object to Object Direction Relationship Fit Constraints {/* #set-object-to-object-direction-relationship-fit-constraints */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

```csharp
public Task SetObjectToObjectDirectionRelationshipFitConstraintsAsync(
        CollectionObjectName relationshipName,
        FitConstraintScalarOptions angleBetweenVectorsFitConstraints = default,
        FitConstraintScalarOptions mutualPerpendicularLengthFitConstraints = default,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object to Object Direction Relationship Tolerances {/* #set-object-to-object-direction-relationship-tolerances */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-tolerances) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-object-to-object-direction-relationship-tolerances)

```csharp
public Task SetObjectToObjectDirectionRelationshipTolerancesAsync(
        CollectionItemName relationshipName,
        ToleranceScalarOptions? angleBetweenVectorsTolerances = null,
        ToleranceScalarOptions? mutualPerpendicularLengthTolerances = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Pipe Relationship Segment Properties {/* #set-pipe-relationship-segment-properties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-segment-properties)

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
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Pipe Relationship Weights {/* #set-pipe-relationship-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-pipe-relationship-weights)

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
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Auto Vectors Fit (AVF) {/* #set-relationship-auto-vectors-fit-avf */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-auto-vectors-fit-avf)

```csharp
public Task SetRelationshipAutoVectorsFitAvfAsync(
        CollectionObjectName relationshipName,
        bool createAutoVectorsAvf = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Desired Meas Count {/* #set-relationship-desired-meas-count */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-desired-meas-count)

```csharp
public Task SetRelationshipDesiredMeasCountAsync(
        CollectionObjectName relationshipName,
        int desiredMeasurementCount = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Dormant Status {/* #set-relationship-dormant-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-dormant-status)

```csharp
public Task SetRelationshipDormantStatusAsync(
        IEnumerable<CollectionItemName> relationships,
        bool dormantStatus = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Fit Constraints (Scalar Type) {/* #set-relationship-fit-constraints-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-fit-constraints-scalar-type)

```csharp
public Task SetRelationshipFitConstraintsScalarTypeAsync(
        CollectionObjectName relationshipName,
        FitConstraintScalarOptions fitConstraintOptions = default,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Orientation Fit Constraints (Vector Type) {/* #set-relationship-orientation-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

```csharp
public Task SetRelationshipOrientationFitConstraintsVectorTypeAsync(
        CollectionObjectName relationshipName,
        ToleranceVectorOptions orientationVectorConstraint,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Outlier Rejection (Scalar Type) {/* #set-relationship-outlier-rejection-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-outlier-rejection-scalar-type)

```csharp
public Task SetRelationshipOutlierRejectionScalarTypeAsync(
        CollectionObjectName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Position Fit Constraints (Vector Type) {/* #set-relationship-position-fit-constraints-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-position-fit-constraints-vector-type)

```csharp
public Task SetRelationshipPositionFitConstraintsVectorTypeAsync(
        CollectionObjectName relationshipName,
        ToleranceVectorOptions positionVectorConstraint,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Projection Options {/* #set-relationship-projection-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-projection-options)

```csharp
public Task SetRelationshipProjectionOptionsAsync(
        CollectionObjectName relationshipName,
        ProjectionOptions projectionOptions,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Reporting Frame {/* #set-relationship-reporting-frame */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-reporting-frame)

```csharp
public Task SetRelationshipReportingFrameAsync(
        CollectionObjectName relationshipName,
        CollectionObjectName reportingFrame,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Sub Sampling Options {/* #set-relationship-sub-sampling-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-sub-sampling-options)

```csharp
public Task SetRelationshipSubSamplingOptionsAsync(
        CollectionObjectName relationshipName,
        bool useEveryIthPoint = false,
        int iValue = 20,
        bool useNoMoreThanNPoints = true,
        int nValue = 10000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Tolerance (Scalar Type) {/* #set-relationship-tolerance-scalar-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-scalar-type)

```csharp
public Task SetRelationshipToleranceScalarTypeAsync(
        CollectionObjectName relationshipName,
        ToleranceScalarOptions toleranceOptions = default,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Tolerance (Vector Type) {/* #set-relationship-tolerance-vector-type */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-tolerance-vector-type)

```csharp
public Task SetRelationshipToleranceVectorTypeAsync(
        CollectionObjectName relationshipName,
        ToleranceVectorOptions vectorTolerance,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Voxel Cloud Display {/* #set-relationship-voxel-cloud-display */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-voxel-cloud-display)

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
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `voxelSize` | -1.0 selects automatic detection. |
| `voxelRenderingDiameter` | -1.0 selects fast rendering. |

## Set Relationship Weighting {/* #set-relationship-weighting */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-weighting)

```csharp
public Task SetRelationshipWeightingAsync(
        CollectionObjectName relationshipName,
        double weight = 0.000000,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Weights Normalized {/* #set-relationship-weights-normalized */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-weights-normalized)

```csharp
public Task SetRelationshipWeightsNormalizedAsync(
        CollectionName collectionName,
        RelWeightingMode pickWeightingMode,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Geometry Relationship Summary {/* #generate-geometry-relationship-summary */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#generate-geometry-relationship-summary) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#generate-geometry-relationship-summary)

```csharp
public Task GenerateGeometryRelationshipSummaryAsync(
        IEnumerable<CollectionItemName> relationshipRefList,
        string summaryTableName = "Geometry Relationship Summary",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Edit Geometry Relationship Point List {/* #edit-geometry-relationship-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#edit-geometry-relationship-point-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#edit-geometry-relationship-point-list)

```csharp
public Task EditGeometryRelationshipPointListAsync(
        CollectionItemName relationshipName,
        GeometryRelationshipPointEditMode pointEditMode = GeometryRelationshipPointEditMode.PointList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Filter Geometry Relationship Outlier Cloud Points {/* #filter-geometry-relationship-outlier-cloud-points */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#filter-geometry-relationship-outlier-cloud-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#filter-geometry-relationship-outlier-cloud-points)

```csharp
public Task<GeometryRelationshipOutlierFilterMetrics> FilterGeometryRelationshipOutlierCloudPointsAsync(
        CollectionItemName relationshipName,
        double sigmaThreshold = 3.0,
        bool modifyExistingInputClouds = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Relationship Watch Window Template {/* #relationship-watch-window-template */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#relationship-watch-window-template) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#relationship-watch-window-template)

```csharp
public Task RelationshipWatchWindowTemplateAsync(
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `showDeviationX` | MP qualifier: Rx. |
| `showDeviationY` | MP qualifier: Ry. |
| `showDeviationZ` | MP qualifier: Rz. |

## Make Point to Point Relationship {/* #make-point-to-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-to-point-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-point-to-point-relationship)

```csharp
public Task MakePointToPointRelationshipAsync(
        CollectionItemName relationshipName,
        PointName firstPointName,
        PointName secondPointName,
        ToleranceVectorOptions? tolerance = null,
        ToleranceVectorOptions? constraint = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Frame to Frame Relationship {/* #make-frame-to-frame-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-frame-to-frame-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-frame-to-frame-relationship)

```csharp
public Task MakeFrameToFrameRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstFrameName,
        CollectionObjectName secondFrameName,
        ToleranceScalarOptions? orientationTolerance = null,
        ToleranceVectorOptions? positionTolerance = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Points to Objects Relationship {/* #make-points-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-objects-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-points-to-objects-relationship)

```csharp
public Task MakePointsToObjectsRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName> pointsInRelationship,
        IEnumerable<CollectionObjectName> objectsInRelationship,
        ProjectionOptions? projectionOptions = null,
        bool autoUpdateAVectorGroup = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Points to Points Relationship {/* #make-points-to-points-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-points-to-points-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-points-to-points-relationship)

```csharp
public Task MakePointsToPointsRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName> nominalPoints,
        IEnumerable<PointName> measuredPoints,
        bool autoUpdateAVectorGroup = false,
        ToleranceVectorOptions? tolerance = null,
        ToleranceVectorOptions? constraint = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Groups to Objects Relationship {/* #make-groups-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-groups-to-objects-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-groups-to-objects-relationship)

```csharp
public Task MakeGroupsToObjectsRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<CollectionObjectName> pointGroupsInRelationship,
        IEnumerable<CollectionObjectName> objectsInRelationship,
        ProjectionOptions? projectionOptions = null,
        bool autoUpdateAVectorGroup = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Object to Object Direction Relationship {/* #make-object-to-object-direction-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-object-to-object-direction-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-object-to-object-direction-relationship)

```csharp
public Task MakeObjectToObjectDirectionRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstObjectInRelationship,
        CollectionObjectName secondObjectInRelationship,
        double nominalAngle = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Point Clouds to Objects Relationship {/* #make-point-clouds-to-objects-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-point-clouds-to-objects-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-point-clouds-to-objects-relationship)

```csharp
public Task MakePointCloudsToObjectsRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<CollectionObjectName> pointCloudsInRelationship,
        IEnumerable<CollectionObjectName> objectsInRelationship,
        ProjectionOptions? projectionOptions = null,
        bool autoUpdateAVectorGroup = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Group to Group Relationship {/* #make-group-to-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-group-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-group-to-group-relationship)

```csharp
public Task MakeGroupToGroupRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstGroupName,
        CollectionObjectName secondGroupName,
        bool autoUpdateAVectorGroup = false,
        ToleranceVectorOptions? tolerance = null,
        ToleranceVectorOptions? constraint = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Group to Nominal Group Relationship {/* #make-group-to-nominal-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-group-to-nominal-group-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-group-to-nominal-group-relationship)

```csharp
public Task MakeGroupToNominalGroupRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName nominalGroupName,
        CollectionObjectName measuredGroupName,
        bool autoUpdateAVectorGroup = false,
        bool useClosestPoint = true,
        bool displayClosestPointWatchWindow = false,
        bool useViewZoomingWithProximity = false,
        bool ignorePointsBeyondThreshold = false,
        double proximityThreshold = 0.01,
        ToleranceVectorOptions? tolerance = null,
        ToleranceVectorOptions? constraint = null,
        double fitWeight = 1.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Average Point Relationship {/* #make-average-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-average-point-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-average-point-relationship)

```csharp
public Task MakeAveragePointRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName> pointsInRelationship,
        PointName? averagePointName = null,
        PointName? nominalPointName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Fit Only Relationship {/* #make-geometry-fit-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-only-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-only-relationship)

```csharp
public Task MakeGeometryFitOnlyRelationshipAsync(
        CollectionItemName relationshipName,
        IEnumerable<CollectionObjectName> pointGroupsToFit,
        GeometryType geometryType,
        CollectionObjectName? resultingObjectName = null,
        string? fitProfileName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Fit and Compare to Nominal Relationship {/* #make-geometry-fit-and-compare-to-nominal-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-fit-and-compare-to-nominal-relationship)

```csharp
public Task MakeGeometryFitAndCompareToNominalRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName nominalGeometry,
        IEnumerable<CollectionObjectName> pointGroupsToFit,
        CollectionObjectName? resultingObjectName = null,
        string? fitProfileName = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Geometry Compare Only Relationship {/* #make-geometry-compare-only-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-geometry-compare-only-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-geometry-compare-only-relationship)

```csharp
public Task MakeGeometryCompareOnlyRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName nominalGeometry,
        CollectionObjectName measuredGeometry,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Point Relationship {/* #make-dynamic-point-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-point-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-point-relationship)

```csharp
public Task MakeDynamicPointRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicPointMode constructionMode = DynamicPointMode.IntersectionLineAndPlane,
        CollectionObjectName? thirdReferenceGeometry = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Line Relationship {/* #make-dynamic-line-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-line-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-line-relationship)

```csharp
public Task MakeDynamicLineRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicLineMode constructionMode = DynamicLineMode.IntersectionOfTwoPlanes,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Plane Relationship {/* #make-dynamic-plane-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-plane-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-plane-relationship)

```csharp
public Task MakeDynamicPlaneRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicPlaneMode constructionMode = DynamicPlaneMode.BisectTwoPlanes,
        double offsetPlaneOffset = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Circle Relationship {/* #make-dynamic-circle-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-circle-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-circle-relationship)

```csharp
public Task MakeDynamicCircleRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicCircleMode constructionMode = DynamicCircleMode.CylinderAndPlaneHoldPlaneNormal,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Dynamic Ellipse Relationship {/* #make-dynamic-ellipse-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-dynamic-ellipse-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-dynamic-ellipse-relationship)

```csharp
public Task MakeDynamicEllipseRelationshipAsync(
        CollectionItemName relationshipName,
        CollectionObjectName firstReferenceGeometry,
        CollectionObjectName secondReferenceGeometry,
        DynamicEllipseMode constructionMode = DynamicEllipseMode.CylinderAndPlaneIntersection,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Vector Group To Vector Group Relationship {/* #make-vector-group-to-vector-group-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#make-vector-group-to-vector-group-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#make-vector-group-to-vector-group-relationship)

```csharp
public Task MakeVectorGroupToVectorGroupRelationshipAsync(
        CollectionItemName newVgToVgRelationship,
        CollectionObjectName referenceVectorGroup,
        CollectionObjectName correspondingVectorGroup,
        bool setOpposingVectorGroupPolarity = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Cylindrical Zone {/* #set-vector-group-to-vector-group-cylindrical-zone */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-cylindrical-zone)

```csharp
public Task SetVectorGroupToVectorGroupCylindricalZoneAsync(
        CollectionItemName vgToVgRelationship,
        double radialOffset = 1.0,
        double minimumAxialOffset = -10.0,
        double maximumAxialOffset = 10.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Fit Weights {/* #set-vector-group-to-vector-group-fit-weights */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-weights) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-weights)

```csharp
public Task SetVectorGroupToVectorGroupFitWeightsAsync(
        CollectionItemName vgToVgRelationship,
        double minimumGap = 0.0,
        double minimumGapFitWeight = 10.0,
        double maximumGap = 0.0,
        double maximumGapFitWeight = 10.0,
        double nominalGap = 0.0,
        double nominalGapFitWeight = 1.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Fit Gradient Factor {/* #set-vector-group-to-vector-group-fit-gradient-factor */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-fit-gradient-factor)

```csharp
public Task SetVectorGroupToVectorGroupFitGradientFactorAsync(
        CollectionItemName vgToVgRelationship,
        double fitGradientFactor = 50.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group To Vector Group Relative Polarity {/* #set-vector-group-to-vector-group-relative-polarity */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-vector-group-to-vector-group-relative-polarity) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-vector-group-to-vector-group-relative-polarity)

```csharp
public Task SetVectorGroupToVectorGroupRelativePolarityAsync(
        CollectionItemName vgToVgRelationship,
        bool setOpposingVectorGroupPolarity = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Relationship {/* #delete-relationship */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#delete-relationship) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#delete-relationship)

```csharp
public Task DeleteRelationshipAsync(
        CollectionItemName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Optimization Search Options {/* #set-optimization-search-options */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-search-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-optimization-search-options)

```csharp
public Task SetOptimizationSearchOptionsAsync(
        int maxNumberOfStepSizeReduction = 5,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Optimization Perturbation Parameters {/* #set-optimization-perturbation-parameters */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-optimization-perturbation-parameters) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-optimization-perturbation-parameters)

```csharp
public Task SetOptimizationPerturbationParametersAsync(
        double lengthPerturbation = 0.0001,
        double angularPerturbation = 0.0001,
        double damping = 1.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Do Relationship Fit {/* #do-relationship-fit */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#do-relationship-fit)

```csharp
public Task<RelationshipFitResult> DoRelationshipFitAsync(
        string collectionContainingRelationships,
        IEnumerable<CollectionObjectName> objectsToMove,
        IEnumerable<CollectionInstrumentId> instrumentsToMove,
        SolverMode solverMode = SolverMode.GaussNewton,
        FitDofOptions? motionToAllow = null,
        bool useFitDialog = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Collections by Minimizing Relationships {/* #move-collections-by-minimizing-relationships */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#move-collections-by-minimizing-relationships) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#move-collections-by-minimizing-relationships)

```csharp
public Task MoveCollectionsByMinimizingRelationshipsAsync(
        IEnumerable<string> collectionsToMove,
        IEnumerable<CollectionItemName> relationshipsToMinimize,
        SolverMode solverMode = SolverMode.GaussNewton,
        FitDofOptions? motionToAllow = null,
        bool useFitDialog = false,
        double convergenceThreshold = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get General Relationship Statistics {/* #get-general-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-general-relationship-statistics) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-general-relationship-statistics)

```csharp
public Task<GeneralRelationshipStatistics> GetGeneralRelationshipStatisticsAsync(
        CollectionItemName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Points to Objects Relationship Statistics {/* #get-points-to-objects-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-objects-relationship-statistics) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-points-to-objects-relationship-statistics)

```csharp
public Task<PointsToObjectsRelationshipStatistics> GetPointsToObjectsRelationshipStatisticsAsync(
        CollectionItemName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Relationship Trapping {/* #startstop-relationship-trapping */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#startstop-relationship-trapping) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#startstop-relationship-trapping)

```csharp
public Task StartStopRelationshipTrappingAsync(
        CollectionItemName relationshipName,
        CollectionInstrumentId instrumentId,
        bool startTrapping = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point to Point Relationship Statistics {/* #get-point-to-point-relationship-statistics */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-point-to-point-relationship-statistics) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-point-to-point-relationship-statistics)

```csharp
public Task<PointToPointRelationshipStatistics> GetPointToPointRelationshipStatisticsAsync(
        CollectionItemName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Group To Nominal Group View Zooming {/* #set-group-to-nominal-group-view-zooming */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-group-to-nominal-group-view-zooming) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-group-to-nominal-group-view-zooming)

```csharp
public Task SetGroupToNominalGroupViewZoomingAsync(
        CollectionItemName relationshipName,
        bool useClosestPoint = true,
        bool showClosestPointWatchWindow = false,
        bool useViewZooming = true,
        bool ignorePointsBeyondThreshold = true,
        double proximityThreshold = 0.01,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Associated Data {/* #set-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-relationship-associated-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-relationship-associated-data)

```csharp
public Task SetRelationshipAssociatedDataAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName>? individualPoints = null,
        IEnumerable<CollectionObjectName>? pointGroups = null,
        IEnumerable<CollectionObjectName>? pointClouds = null,
        IEnumerable<CollectionObjectName>? objects = null,
        bool ignoreEmptyArguments = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Associated Data {/* #get-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-associated-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-associated-data)

```csharp
public Task<RelationshipAssociatedData> GetRelationshipAssociatedDataAsync(
        CollectionItemName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Points to Points Relationship Associated Data {/* #set-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#set-points-to-points-relationship-associated-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#set-points-to-points-relationship-associated-data)

```csharp
public Task SetPointsToPointsRelationshipAssociatedDataAsync(
        CollectionItemName relationshipName,
        IEnumerable<PointName>? nominalPoints = null,
        IEnumerable<PointName>? actualPoints = null,
        bool ignoreEmptyArguments = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Points to Points Relationship Associated Data {/* #get-points-to-points-relationship-associated-data */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-points-to-points-relationship-associated-data) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-points-to-points-relationship-associated-data)

```csharp
public Task<PointsToPointsRelationshipAssociatedData> GetPointsToPointsRelationshipAssociatedDataAsync(
        CollectionItemName relationshipName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Clouds to Nominal Geometry 3D {/* #auto-filter-clouds-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d)

```csharp
public Task AutoFilterCloudsToNominalGeometry3DAsync(
        IEnumerable<CollectionItemName> autoFilterTargetRelationships,
        IEnumerable<CollectionObjectName> clouds,
        CloudThinningOptions? cloudThinningSettings = null,
        FilterProximitySettings? filterProximitySettings3D = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Clouds to Nominal Geometry 2D {/* #auto-filter-clouds-to-nominal-geometry-2d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d)

```csharp
public Task AutoFilterCloudsToNominalGeometry2DAsync(
        IEnumerable<CollectionItemName> autoFilterTargetRelationships,
        IEnumerable<CollectionObjectName> clouds,
        CloudThinningOptions? cloudThinningSettings = null,
        FilterProximitySettings? filterProximitySettings2D = null,
        double geometryExtractionTolerance = 0.01,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Points to Nominal Geometry 3D {/* #auto-filter-points-to-nominal-geometry-3d */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-points-to-nominal-geometry-3d) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-points-to-nominal-geometry-3d)

```csharp
public Task AutoFilterPointsToNominalGeometry3DAsync(
        IEnumerable<CollectionItemName> autoFilterTargetRelationships,
        IEnumerable<PointName> points,
        FilterProximitySettings? filterProximitySettings3D = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Filter Points/Groups/Clouds to Surface Faces {/* #auto-filter-pointsgroupsclouds-to-surface-faces */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#auto-filter-pointsgroupsclouds-to-surface-faces)

```csharp
public Task AutoFilterPointsGroupsCloudsToSurfaceFacesAsync(
        IEnumerable<CollectionObjectName> surfaces,
        IEnumerable<PointName>? points = null,
        IEnumerable<CollectionObjectName>? groups = null,
        IEnumerable<CollectionObjectName>? clouds = null,
        double surfaceOffset = 0.1,
        double edgeOffset = 0.1,
        OffsetDirectionType offsetDirection = OffsetDirectionType.Both,
        bool enforceMaxPointsPerFaceInOutput = false,
        int maxPointsPerFace = 0,
        CloudThinningOptions? cloudThinningSettings = null,
        string outputCloudBaseName = "InspAutoFilteredCloud",
        bool useFaceIdsForSuffix = true,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Points to Objects Map {/* #create-points-to-objects-map */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#create-points-to-objects-map) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#create-points-to-objects-map)

```csharp
public Task CreatePointsToObjectsMapAsync(
        string pointsToObjectsMapName,
        IEnumerable<CollectionObjectName> objects,
        IEnumerable<PointName>? points = null,
        IEnumerable<CollectionObjectName>? groups = null,
        double proximityTolerance = 0.0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Objects From Points to Objects Map (Point List) {/* #get-objects-from-points-to-objects-map-point-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-objects-from-points-to-objects-map-point-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-objects-from-points-to-objects-map-point-list)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> GetObjectsFromPointsToObjectsMapPointListAsync(
        string pointsToObjectsMapName,
        IEnumerable<PointName> points,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Compute Geometry Relationship Uncertainties {/* #compute-geometry-relationship-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#compute-geometry-relationship-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#compute-geometry-relationship-uncertainties)

```csharp
public Task ComputeGeometryRelationshipUncertaintiesAsync(
        CollectionItemName relationshipName,
        bool displayResults = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Geom Relationship Criteria Name List {/* #get-geom-relationship-criteria-name-list */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria-name-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-geom-relationship-criteria-name-list)

```csharp
public Task<IReadOnlyList<string>> GetGeomRelationshipCriteriaNameListAsync(
        CollectionItemName relationshipName,
        bool includeAllCriteria = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Status {/* #get-relationship-status */}

[MP Catalog](/mp-command-catalog/commands/relationship-operations#get-relationship-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/relationship-operations#get-relationship-status)

```csharp
public Task<RelationshipStatusFlags> GetRelationshipStatusAsync(
        CollectionItemName relationshipName,
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

## Extract Geometry From Point Clouds {/* #extract-geometry-from-point-clouds */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Make Cloud to Swatch Relationship {/* #make-cloud-to-swatch-relationship */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Final Reconciled Subgroup Types {/* #final-reconciled-subgroup-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Get Relationship Sigmoidal Gap Fit Constraints {/* #get-relationship-sigmoidal-gap-fit-constraints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Geom Relationship Auto Measure Nominal Feature {/* #set-geom-relationship-auto-measure-nominal-feature */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Relationship Auto Vectors Group Default Prefix {/* #set-relationship-auto-vectors-group-default-prefix */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Set Relationship Sigmoidal Gap Fit Constraints {/* #set-relationship-sigmoidal-gap-fit-constraints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
