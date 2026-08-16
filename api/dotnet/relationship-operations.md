---
title: Relationship Operations
description: Next Briosa .NET APIs for supported Relationship Operations MP commands.
toc_max_heading_level: 2
---

# Relationship Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Enable/Disable Relationships for Optimization

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Enable/Disable Relationships for Optimization](/mp-command-catalog/commands/relationship-operations#enabledisable-relationships-for-optimization) · [gRPC contract](/api/grpc/relationship-operations#enabledisable-relationships-for-optimization)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `IEnumerable<CollectionItemName>` | `Relationships` | Required |
| `enable` | `bool` | `Enable?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task EnableDisableRelationshipsForOptimizationAsync(
    IEnumerable<CollectionItemName> relationships,
    bool enable = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.EnableDisableRelationshipsForOptimizationAsync(relationships: relationships);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Geom Relationship Ignore Input Points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Geom Relationship Ignore Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-ignore-input-points) · [gRPC contract](/api/grpc/relationship-operations#geom-relationship-ignore-input-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task GeomRelationshipIgnoreInputPointsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GeomRelationshipIgnoreInputPointsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Geom Relationship Reuse Ignored Input Points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Geom Relationship Reuse Ignored Input Points](/mp-command-catalog/commands/relationship-operations#geom-relationship-reuse-ignored-input-points) · [gRPC contract](/api/grpc/relationship-operations#geom-relationship-reuse-ignored-input-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task GeomRelationshipReuseIgnoredInputPointsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GeomRelationshipReuseIgnoredInputPointsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Auto Vectors

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Auto Vectors](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-auto-vectors) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-auto-vectors)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `AutoVectorsNominalAvnEnabled` | `bool` | `Auto Vectors Nominal (AVN) - Enabled?` |
| `AutoVectorsNominalAvnName` | `CollectionObjectName` | `Auto Vectors Nominal (AVN) - Name` |
| `AutoVectorsFitAvfEnabled` | `bool` | `Auto Vectors Fit (AVF) - Enabled?` |
| `AutoVectorsFitAvfName` | `CollectionObjectName` | `Auto Vectors Fit (AVF) - Name` |
| `PointsType` | `string` | `Points Type` |

```csharp
public sealed record GetGeomRelationshipAutoVectorsResult
{
    public required bool AutoVectorsNominalAvnEnabled { get; init; }

    public required CollectionObjectName AutoVectorsNominalAvnName { get; init; }

    public required bool AutoVectorsFitAvfEnabled { get; init; }

    public required CollectionObjectName AutoVectorsFitAvfName { get; init; }

    public required string PointsType { get; init; }
}

public Task<GetGeomRelationshipAutoVectorsResult> GetGeomRelationshipAutoVectorsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipAutoVectorsAsync(relationshipName: relationshipName);
```

Returns the 5 MP outputs in the named `GetGeomRelationshipAutoVectorsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Cardinal Points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-cardinal-points) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-cardinal-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `CardinalPointNameList` | `PointName[]` | `Cardinal Point Name List` |

```csharp
public Task<PointName[]> GetGeomRelationshipCardinalPointsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipCardinalPointsAsync(relationshipName: relationshipName);
```

Returns the MP output `Cardinal Point Name List` directly as `PointName[]`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Criteria

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-criteria) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-criteria)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `criteria` | `string` | `Criteria` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Nominal` | `double` | `Nominal` |
| `Measured` | `double` | `Measured` |
| `Delta` | `double` | `Delta` |
| `LowTolerance` | `double` | `Low Tolerance` |
| `HighTolerance` | `double` | `High Tolerance` |
| `OptimizationDeltaWeight` | `double` | `Optimization: Delta Weight` |
| `OptimizationOutOfToleranceWeight` | `double` | `Optimization: Out of Tolerance Weight` |
| `IsWithinTolerance` | `string` | `Is within Tolerance?` |
| `HasUncertainty` | `bool` | `Has Uncertainty?` |
| `Uncertainty` | `double` | `Uncertainty` |

```csharp
public sealed record GetGeomRelationshipCriteriaResult
{
    public required double Nominal { get; init; }

    public required double Measured { get; init; }

    public required double Delta { get; init; }

    public required double LowTolerance { get; init; }

    public required double HighTolerance { get; init; }

    public required double OptimizationDeltaWeight { get; init; }

    public required double OptimizationOutOfToleranceWeight { get; init; }

    public required string IsWithinTolerance { get; init; }

    public required bool HasUncertainty { get; init; }

    public required double Uncertainty { get; init; }
}

public Task<GetGeomRelationshipCriteriaResult> GetGeomRelationshipCriteriaAsync(
    CollectionObjectName relationshipName,
    string criteria = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipCriteriaAsync(relationshipName: relationshipName);
```

Returns the 10 MP outputs in the named `GetGeomRelationshipCriteriaResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Measured Avg Point

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Measured Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-avg-point) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-measured-avg-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `MeasuredAveragePoint` | `PointName` | `Measured Average Point` |

```csharp
public Task<PointName> GetGeomRelationshipMeasuredAvgPointAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipMeasuredAvgPointAsync(relationshipName: relationshipName);
```

Returns the MP output `Measured Average Point` directly as `PointName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Measured Geometry

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-measured-geometry) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-measured-geometry)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `MeasuredGeometry` | `CollectionObjectName` | `Measured Geometry` |

```csharp
public Task<CollectionObjectName> GetGeomRelationshipMeasuredGeometryAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipMeasuredGeometryAsync(relationshipName: relationshipName);
```

Returns the MP output `Measured Geometry` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Nominal Avg Point

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-avg-point) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-avg-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `NominalAveragePoint` | `PointName` | `Nominal Average Point` |

```csharp
public Task<PointName> GetGeomRelationshipNominalAvgPointAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipNominalAvgPointAsync(relationshipName: relationshipName);
```

Returns the MP output `Nominal Average Point` directly as `PointName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Nominal Geometry

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-nominal-geometry) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-nominal-geometry)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `NominalGeometry` | `CollectionObjectName` | `Nominal Geometry` |

```csharp
public Task<CollectionObjectName> GetGeomRelationshipNominalGeometryAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipNominalGeometryAsync(relationshipName: relationshipName);
```

Returns the MP output `Nominal Geometry` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Point List

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Point List](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-point-list) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-point-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `AllPoints` | `PointName[]` | `All Points` |
| `UsedPoints` | `PointName[]` | `Used Points` |
| `IgnoredPoints` | `PointName[]` | `Ignored Points` |

```csharp
public sealed record GetGeomRelationshipPointListResult
{
    public required PointName[] AllPoints { get; init; }

    public required PointName[] UsedPoints { get; init; }

    public required PointName[] IgnoredPoints { get; init; }
}

public Task<GetGeomRelationshipPointListResult> GetGeomRelationshipPointListAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipPointListAsync(relationshipName: relationshipName);
```

Returns the 3 MP outputs in the named `GetGeomRelationshipPointListResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Geom Relationship Projection Plane

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#get-geom-relationship-projection-plane) · [gRPC contract](/api/grpc/relationship-operations#get-geom-relationship-projection-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ProjectionPlaneName` | `CollectionObjectName` | `Projection Plane Name` |

```csharp
public Task<CollectionObjectName> GetGeomRelationshipProjectionPlaneAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetGeomRelationshipProjectionPlaneAsync(relationshipName: relationshipName);
```

Returns the MP output `Projection Plane Name` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Pipe Relationship Cut Status

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Pipe Relationship Cut Status](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-cut-status) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-cut-status)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Pipe1CutAvailable` | `bool` | `Pipe 1 - Cut Available?` |
| `Pipe1CutActive` | `bool` | `Pipe 1 - Cut Active?` |
| `Pipe2CutAvailable` | `bool` | `Pipe 2 - Cut Available?` |
| `Pipe2CutActive` | `bool` | `Pipe 2 - Cut Active?` |

```csharp
public sealed record GetPipeRelationshipCutStatusResult
{
    public required bool Pipe1CutAvailable { get; init; }

    public required bool Pipe1CutActive { get; init; }

    public required bool Pipe2CutAvailable { get; init; }

    public required bool Pipe2CutActive { get; init; }
}

public Task<GetPipeRelationshipCutStatusResult> GetPipeRelationshipCutStatusAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPipeRelationshipCutStatusAsync(relationshipName: relationshipName);
```

Returns the 4 MP outputs in the named `GetPipeRelationshipCutStatusResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Pipe Relationship Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Pipe Relationship Properties](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-properties) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Pipe1ObjectName` | `CollectionObjectName` | `Pipe 1 - Object Name` |
| `Pipe1InnerDiameter` | `double` | `Pipe 1 - Inner Diameter` |
| `Pipe1OuterDiameter` | `double` | `Pipe 1 - Outer Diameter` |
| `Pipe1CutBegin` | `double` | `Pipe 1 - Cut Begin` |
| `Pipe1CutEnd` | `double` | `Pipe 1 - Cut End` |
| `Pipe2ObjectName` | `CollectionObjectName` | `Pipe 2 - Object Name` |
| `Pipe2InnerDiameter` | `double` | `Pipe 2 - Inner Diameter` |
| `Pipe2OuterDiameter` | `double` | `Pipe 2 - Outer Diameter` |
| `Pipe2CutBegin` | `double` | `Pipe 2 - Cut Begin` |
| `Pipe2CutEnd` | `double` | `Pipe 2 - Cut End` |

```csharp
public sealed record GetPipeRelationshipPropertiesResult
{
    public required CollectionObjectName Pipe1ObjectName { get; init; }

    public required double Pipe1InnerDiameter { get; init; }

    public required double Pipe1OuterDiameter { get; init; }

    public required double Pipe1CutBegin { get; init; }

    public required double Pipe1CutEnd { get; init; }

    public required CollectionObjectName Pipe2ObjectName { get; init; }

    public required double Pipe2InnerDiameter { get; init; }

    public required double Pipe2OuterDiameter { get; init; }

    public required double Pipe2CutBegin { get; init; }

    public required double Pipe2CutEnd { get; init; }
}

public Task<GetPipeRelationshipPropertiesResult> GetPipeRelationshipPropertiesAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPipeRelationshipPropertiesAsync(relationshipName: relationshipName);
```

Returns the 10 MP outputs in the named `GetPipeRelationshipPropertiesResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Pipe Relationship Weights

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#get-pipe-relationship-weights) · [gRPC contract](/api/grpc/relationship-operations#get-pipe-relationship-weights)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `OverallWeight` | `double` | `Overall Weight` |
| `AxisOffset` | `double` | `Axis Offset` |
| `AxisAlignment` | `double` | `Axis Alignment` |
| `CenterPull` | `double` | `Center Pull` |
| `OutOfMaterialWeight` | `double` | `Out of material - Weight` |
| `OutOfMaterialStaticOffset` | `double` | `Out of material - Static Offset` |
| `ConstrainRegionAtOd` | `bool` | `Constrain Region at OD` |
| `ConstrainIdOdOverlap` | `bool` | `Constrain ID/OD overlap` |

```csharp
public sealed record GetPipeRelationshipWeightsResult
{
    public required double OverallWeight { get; init; }

    public required double AxisOffset { get; init; }

    public required double AxisAlignment { get; init; }

    public required double CenterPull { get; init; }

    public required double OutOfMaterialWeight { get; init; }

    public required double OutOfMaterialStaticOffset { get; init; }

    public required bool ConstrainRegionAtOd { get; init; }

    public required bool ConstrainIdOdOverlap { get; init; }
}

public Task<GetPipeRelationshipWeightsResult> GetPipeRelationshipWeightsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetPipeRelationshipWeightsAsync(relationshipName: relationshipName);
```

Returns the 8 MP outputs in the named `GetPipeRelationshipWeightsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Fit Constraints (Scalar Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-fit-constraints-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-fit-constraints-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighTolerance` | `bool` | `Use High Tolerance?` |
| `HighTolerance` | `double` | `High Tolerance` |
| `UseLowTolerance` | `bool` | `Use Low Tolerance?` |
| `LowTolerance` | `double` | `Low Tolerance` |
| `FitConstraintOptions` | `FitConstraintScalarOptions` | `Fit Constraint Options` |

```csharp
public sealed record GetRelationshipFitConstraintsScalarTypeResult
{
    public required bool UseHighTolerance { get; init; }

    public required double HighTolerance { get; init; }

    public required bool UseLowTolerance { get; init; }

    public required double LowTolerance { get; init; }

    public required FitConstraintScalarOptions FitConstraintOptions { get; init; }
}

public Task<GetRelationshipFitConstraintsScalarTypeResult> GetRelationshipFitConstraintsScalarTypeAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipFitConstraintsScalarTypeAsync(relationshipName: relationshipName);
```

Returns the 5 MP outputs in the named `GetRelationshipFitConstraintsScalarTypeResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Outlier Rejection (Scalar Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-outlier-rejection-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-outlier-rejection-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighLimit` | `bool` | `Use High Limit?` |
| `HighLimit` | `double` | `High Limit` |
| `UseLowLimit` | `bool` | `Use Low Limit?` |
| `LowLimit` | `double` | `Low Limit` |

```csharp
public sealed record GetRelationshipOutlierRejectionScalarTypeResult
{
    public required bool UseHighLimit { get; init; }

    public required double HighLimit { get; init; }

    public required bool UseLowLimit { get; init; }

    public required double LowLimit { get; init; }
}

public Task<GetRelationshipOutlierRejectionScalarTypeResult> GetRelationshipOutlierRejectionScalarTypeAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipOutlierRejectionScalarTypeAsync(relationshipName: relationshipName);
```

Returns the 4 MP outputs in the named `GetRelationshipOutlierRejectionScalarTypeResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Projection Options

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#get-relationship-projection-options) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-projection-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `IgnoreEdgeProjections` | `bool` | `Ignore Edge Projections?` |
| `ProbeOffsetsOverrideTargetValues` | `bool` | `Probe Offsets - Override Target Values?` |
| `ProbeOffsetsOverrideValue` | `double` | `Probe Offsets - Override Value` |
| `AddExtraMaterial` | `bool` | `Add Extra Material?` |
| `ExtraMaterialThickness` | `double` | `Extra Material Thickness` |

```csharp
public sealed record GetRelationshipProjectionOptionsResult
{
    public required bool IgnoreEdgeProjections { get; init; }

    public required bool ProbeOffsetsOverrideTargetValues { get; init; }

    public required double ProbeOffsetsOverrideValue { get; init; }

    public required bool AddExtraMaterial { get; init; }

    public required double ExtraMaterialThickness { get; init; }
}

public Task<GetRelationshipProjectionOptionsResult> GetRelationshipProjectionOptionsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipProjectionOptionsAsync(relationshipName: relationshipName);
```

Returns the 5 MP outputs in the named `GetRelationshipProjectionOptionsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Reporting Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#get-relationship-reporting-frame) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-reporting-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ReportingFrame` | `CollectionObjectName` | `Reporting Frame` |

```csharp
public Task<CollectionObjectName> GetRelationshipReportingFrameAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipReportingFrameAsync(relationshipName: relationshipName);
```

Returns the MP output `Reporting Frame` directly as `CollectionObjectName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Sub Sampling Options

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#get-relationship-sub-sampling-options) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-sub-sampling-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseEveryIthPoint` | `bool` | `Use every i-th point` |
| `IValue` | `int` | `i value` |
| `UseNoMoreThanNPoints` | `bool` | `Use no more than n points` |
| `NValue` | `int` | `n value` |

```csharp
public sealed record GetRelationshipSubSamplingOptionsResult
{
    public required bool UseEveryIthPoint { get; init; }

    public required int IValue { get; init; }

    public required bool UseNoMoreThanNPoints { get; init; }

    public required int NValue { get; init; }
}

public Task<GetRelationshipSubSamplingOptionsResult> GetRelationshipSubSamplingOptionsAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipSubSamplingOptionsAsync(relationshipName: relationshipName);
```

Returns the 4 MP outputs in the named `GetRelationshipSubSamplingOptionsResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Tolerance (Scalar Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-tolerance-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighTolerance` | `bool` | `Use High Tolerance?` |
| `HighTolerance` | `double` | `High Tolerance` |
| `UseLowTolerance` | `bool` | `Use Low Tolerance?` |
| `LowTolerance` | `double` | `Low Tolerance` |
| `ToleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` |

```csharp
public sealed record GetRelationshipToleranceScalarTypeResult
{
    public required bool UseHighTolerance { get; init; }

    public required double HighTolerance { get; init; }

    public required bool UseLowTolerance { get; init; }

    public required double LowTolerance { get; init; }

    public required ToleranceScalarOptions ToleranceOptions { get; init; }
}

public Task<GetRelationshipToleranceScalarTypeResult> GetRelationshipToleranceScalarTypeAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipToleranceScalarTypeAsync(relationshipName: relationshipName);
```

Returns the 5 MP outputs in the named `GetRelationshipToleranceScalarTypeResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Tolerance (Vector Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#get-relationship-tolerance-vector-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-tolerance-vector-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UseHighXTolerance` | `bool` | `Use High X Tolerance?` |
| `HighXTolerance` | `double` | `High X Tolerance` |
| `UseHighYTolerance` | `bool` | `Use High Y Tolerance?` |
| `HighYTolerance` | `double` | `High Y Tolerance` |
| `UseHighZTolerance` | `bool` | `Use High Z Tolerance?` |
| `HighZTolerance` | `double` | `High Z Tolerance` |
| `UseHighMagTolerance` | `bool` | `Use High Mag Tolerance?` |
| `HighMagTolerance` | `double` | `High Mag Tolerance` |
| `UseLowXTolerance` | `bool` | `Use Low X Tolerance?` |
| `LowXTolerance` | `double` | `Low X Tolerance` |
| `UseLowYTolerance` | `bool` | `Use Low Y Tolerance?` |
| `LowYTolerance` | `double` | `Low Y Tolerance` |
| `UseLowZTolerance` | `bool` | `Use Low Z Tolerance?` |
| `LowZTolerance` | `double` | `Low Z Tolerance` |
| `UseLowMagTolerance` | `bool` | `Use Low Mag Tolerance?` |
| `LowMagTolerance` | `double` | `Low Mag Tolerance` |
| `VectorTolerance` | `ToleranceVectorOptions` | `Vector Tolerance` |

```csharp
public sealed record GetRelationshipToleranceVectorTypeResult
{
    public required bool UseHighXTolerance { get; init; }

    public required double HighXTolerance { get; init; }

    public required bool UseHighYTolerance { get; init; }

    public required double HighYTolerance { get; init; }

    public required bool UseHighZTolerance { get; init; }

    public required double HighZTolerance { get; init; }

    public required bool UseHighMagTolerance { get; init; }

    public required double HighMagTolerance { get; init; }

    public required bool UseLowXTolerance { get; init; }

    public required double LowXTolerance { get; init; }

    public required bool UseLowYTolerance { get; init; }

    public required double LowYTolerance { get; init; }

    public required bool UseLowZTolerance { get; init; }

    public required double LowZTolerance { get; init; }

    public required bool UseLowMagTolerance { get; init; }

    public required double LowMagTolerance { get; init; }

    public required ToleranceVectorOptions VectorTolerance { get; init; }
}

public Task<GetRelationshipToleranceVectorTypeResult> GetRelationshipToleranceVectorTypeAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipToleranceVectorTypeAsync(relationshipName: relationshipName);
```

Returns the 17 MP outputs in the named `GetRelationshipToleranceVectorTypeResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Type

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Type](/mp-command-catalog/commands/relationship-operations#get-relationship-type) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `RelationshipType` | `string` | `Relationship Type` |

```csharp
public Task<string> GetRelationshipTypeAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipTypeAsync(relationshipName: relationshipName);
```

Returns the MP output `Relationship Type` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Relationship Weighting

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Get Relationship Weighting](/mp-command-catalog/commands/relationship-operations#get-relationship-weighting) · [gRPC contract](/api/grpc/relationship-operations#get-relationship-weighting)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Weight` | `double` | `Weight` |

```csharp
public Task<double> GetRelationshipWeightingAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetRelationshipWeightingAsync(relationshipName: relationshipName);
```

Returns the MP output `Weight` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make Pipe Fitting Relationship

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make Pipe Fitting Relationship](/mp-command-catalog/commands/relationship-operations#make-pipe-fitting-relationship) · [gRPC contract](/api/grpc/relationship-operations#make-pipe-fitting-relationship)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe1ObjectName` | `CollectionObjectName` | `Pipe 1 - Object Name` | Required |
| `pipe2ObjectName` | `CollectionObjectName` | `Pipe 2 - Object Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task MakePipeFittingRelationshipAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName pipe1ObjectName,
    CollectionObjectName pipe2ObjectName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.MakePipeFittingRelationshipAsync(relationshipName: relationshipName, pipe1ObjectName: pipe1ObjectName, pipe2ObjectName: pipe2ObjectName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Make pipe Relationship Cut

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Make pipe Relationship Cut](/mp-command-catalog/commands/relationship-operations#make-pipe-relationship-cut) · [gRPC contract](/api/grpc/relationship-operations#make-pipe-relationship-cut)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe1MakeCut` | `bool` | `Pipe 1 - Make Cut` | true |
| `pipe1CreateFrame` | `bool` | `Pipe 1 - Create Frame` | false |
| `pipe1FrameName` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe2MakeCut` | `bool` | `Pipe 2 - Make Cut` | true |
| `pipe2CreateFrame` | `bool` | `Pipe 2 - Create Frame` | false |
| `pipe2FrameName` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.MakePipeRelationshipCutAsync(relationshipName: relationshipName, pipe1MakeCut: pipe1MakeCut, pipe1CreateFrame: pipe1CreateFrame, pipe1FrameName: pipe1FrameName, pipe2MakeCut: pipe2MakeCut, pipe2CreateFrame: pipe2CreateFrame, pipe2FrameName: pipe2FrameName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Pipe Relationship Force Cut to Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Pipe Relationship Force Cut to Frame](/mp-command-catalog/commands/relationship-operations#pipe-relationship-force-cut-to-frame) · [gRPC contract](/api/grpc/relationship-operations#pipe-relationship-force-cut-to-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe1ForceCutToFrame` | `bool` | `Pipe 1 - Force Cut to Frame?` | true |
| `pipe1FrameName` | `CollectionObjectName` | `Pipe 1 - Frame Name` | Required |
| `pipe2ForceCutToFrame` | `bool` | `Pipe 2 - Force Cut to Frame?` | true |
| `pipe2FrameName` | `CollectionObjectName` | `Pipe 2 - Frame Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task PipeRelationshipForceCutToFrameAsync(
    CollectionObjectName relationshipName,
    bool pipe1ForceCutToFrame,
    CollectionObjectName pipe1FrameName,
    bool pipe2ForceCutToFrame,
    CollectionObjectName pipe2FrameName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.PipeRelationshipForceCutToFrameAsync(relationshipName: relationshipName, pipe1ForceCutToFrame: pipe1ForceCutToFrame, pipe1FrameName: pipe1FrameName, pipe2ForceCutToFrame: pipe2ForceCutToFrame, pipe2FrameName: pipe2FrameName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Auto Measure Nominal Feature

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geom Relationship Auto Measure Nominal Feature](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-measure-nominal-feature) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-auto-measure-nominal-feature)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `trapCloudsFalseGeometry` | `bool` | `Trap Clouds? (FALSE = Geometry)` | true |
| `instrumentId` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `measurementMode` | `string` | `Measurement Mode` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipAutoMeasureNominalFeatureAsync(
    CollectionObjectName relationshipName,
    bool trapCloudsFalseGeometry,
    CollectionInstrumentId instrumentId,
    string measurementMode = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipAutoMeasureNominalFeatureAsync(relationshipName: relationshipName, trapCloudsFalseGeometry: trapCloudsFalseGeometry, instrumentId: instrumentId);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Auto Vectors Nominal (AVN)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geom Relationship Auto Vectors Nominal (AVN)](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `createAutoVectorsAvn` | `bool` | `Create Auto Vectors AVN` | false |
| `pointsType` | `PointFilterInputType` | `Points Type` | Cardinal Points |
| `useVectorGroupCustomPrefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| `vectorGroupCustomPrefix` | `string` | `Vector Group Custom Prefix` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipAutoVectorsNominalAvnAsync(
    CollectionObjectName relationshipName,
    bool createAutoVectorsAvn,
    PointFilterInputType pointsType,
    bool useVectorGroupCustomPrefix = false,
    string vectorGroupCustomPrefix = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipAutoVectorsNominalAvnAsync(relationshipName: relationshipName, createAutoVectorsAvn: createAutoVectorsAvn, pointsType: pointsType);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Cardinal Points

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geom Relationship Cardinal Points](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-cardinal-points) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-cardinal-points)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `createCardinalPtsWhenFitting` | `bool` | `Create Cardinal Pts when Fitting?` | true |
| `prefixCardinalPtsNameWithRelName` | `bool` | `Prefix Cardinal Pts name with Rel name?` | true |
| `cardinalPtsGroupName` | `string` | `Cardinal Pts Group Name` | GR-Cardinal Pts |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipCardinalPointsAsync(
    CollectionObjectName relationshipName,
    bool createCardinalPtsWhenFitting = true,
    bool prefixCardinalPtsNameWithRelName = true,
    string cardinalPtsGroupName = "GR-Cardinal Pts",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipCardinalPointsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Criteria

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geom Relationship Criteria](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-criteria) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-criteria)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `criteria` | `string` | `Criteria` | Empty |
| `showInReport` | `bool` | `Show in Report` | true |
| `toleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |
| `optimizationDeltaWeight` | `double` | `Optimization: Delta Weight` | 0.000000 |
| `optimizationOutOfToleranceWeight` | `double` | `Optimization: Out of Tolerance Weight` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.SetGeomRelationshipCriteriaAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Measured Geometry

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geom Relationship Measured Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-measured-geometry) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-measured-geometry)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `measuredGeometry` | `CollectionObjectName` | `Measured Geometry` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipMeasuredGeometryAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName measuredGeometry,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipMeasuredGeometryAsync(relationshipName: relationshipName, measuredGeometry: measuredGeometry);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Nominal Avg Point

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geom Relationship Nominal Avg Point](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-avg-point) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-avg-point)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `compareToNominal` | `bool` | `Compare To Nominal?` | true |
| `nominalAveragePoint` | `PointName` | `Nominal Average Point` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipNominalAvgPointAsync(
    CollectionObjectName relationshipName,
    bool compareToNominal,
    PointName nominalAveragePoint,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipNominalAvgPointAsync(relationshipName: relationshipName, compareToNominal: compareToNominal, nominalAveragePoint: nominalAveragePoint);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Nominal Geometry

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geom Relationship Nominal Geometry](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-nominal-geometry) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-nominal-geometry)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `compareToNominal` | `bool` | `Compare To Nominal?` | true |
| `nominalGeometry` | `CollectionObjectName` | `Nominal Geometry` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipNominalGeometryAsync(
    CollectionObjectName relationshipName,
    bool compareToNominal,
    CollectionObjectName nominalGeometry,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipNominalGeometryAsync(relationshipName: relationshipName, compareToNominal: compareToNominal, nominalGeometry: nominalGeometry);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Geom Relationship Projection Plane

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Geom Relationship Projection Plane](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-projection-plane) · [gRPC contract](/api/grpc/relationship-operations#set-geom-relationship-projection-plane)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `projectToPlane` | `bool` | `Project to Plane?` | true |
| `projectionPlaneName` | `CollectionObjectName` | `Projection Plane Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetGeomRelationshipProjectionPlaneAsync(
    CollectionObjectName relationshipName,
    bool projectToPlane,
    CollectionObjectName projectionPlaneName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetGeomRelationshipProjectionPlaneAsync(relationshipName: relationshipName, projectToPlane: projectToPlane, projectionPlaneName: projectionPlaneName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Object to Object Direction Relationship Fit Constraints

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Object to Object Direction Relationship Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-object-to-object-direction-relationship-fit-constraints) · [gRPC contract](/api/grpc/relationship-operations#set-object-to-object-direction-relationship-fit-constraints)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `angleBetweenVectorsFitConstraints` | `FitConstraintScalarOptions` | `Angle Between Vectors Fit Constraints` | Both limits disabled |
| `mutualPerpendicularLengthFitConstraints` | `FitConstraintScalarOptions` | `Mutual Perpendicular Length Fit Constraints` | Both limits disabled |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetObjectToObjectDirectionRelationshipFitConstraintsAsync(
    CollectionObjectName relationshipName,
    FitConstraintScalarOptions angleBetweenVectorsFitConstraints = default,
    FitConstraintScalarOptions mutualPerpendicularLengthFitConstraints = default,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetObjectToObjectDirectionRelationshipFitConstraintsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Pipe Relationship Segment Properties

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Pipe Relationship Segment Properties](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-segment-properties) · [gRPC contract](/api/grpc/relationship-operations#set-pipe-relationship-segment-properties)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `pipe1InnerDiameter` | `double` | `Pipe 1 - Inner Diameter` | 0.000000 |
| `pipe1OuterDiameter` | `double` | `Pipe 1 - Outer Diameter` | 0.000000 |
| `pipe1CutBegin` | `double` | `Pipe 1 - Cut Begin` | 0.000000 |
| `pipe1CutEnd` | `double` | `Pipe 1 - Cut End` | 0.000000 |
| `pipe2InnerDiameter` | `double` | `Pipe 2 - Inner Diameter` | 0.000000 |
| `pipe2OuterDiameter` | `double` | `Pipe 2 - Outer Diameter` | 0.000000 |
| `pipe2CutBegin` | `double` | `Pipe 2 - Cut Begin` | 0.000000 |
| `pipe2CutEnd` | `double` | `Pipe 2 - Cut End` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.SetPipeRelationshipSegmentPropertiesAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Pipe Relationship Weights

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Pipe Relationship Weights](/mp-command-catalog/commands/relationship-operations#set-pipe-relationship-weights) · [gRPC contract](/api/grpc/relationship-operations#set-pipe-relationship-weights)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `overallWeight` | `double` | `Overall Weight` | 1.000000 |
| `axisOffset` | `double` | `Axis Offset` | 2.000000 |
| `axisAlignment` | `double` | `Axis Alignment` | 1.000000 |
| `centerPull` | `double` | `Center Pull` | 0.100000 |
| `outOfMaterialWeight` | `double` | `Out of material - Weight` | 10.000000 |
| `outOfMaterialOffset` | `double` | `Out of material - Offset` | 1.000000 |
| `constrainRegionAtOd` | `bool` | `Constrain Region at OD` | false |
| `constrainIdOdOverlap` | `bool` | `Constrain ID/OD overlap` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```csharp
await briosa.SetPipeRelationshipWeightsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Auto Vectors Fit (AVF)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Auto Vectors Fit (AVF)](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-fit-avf)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `createAutoVectorsAvf` | `bool` | `Create Auto Vectors AVF` | false |
| `useVectorGroupCustomPrefix` | `bool` | `Use Vector Group Custom Prefix?` | false |
| `vectorGroupCustomPrefix` | `string` | `Vector Group Custom Prefix` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipAutoVectorsFitAvfAsync(
    CollectionObjectName relationshipName,
    bool createAutoVectorsAvf = false,
    bool useVectorGroupCustomPrefix = false,
    string vectorGroupCustomPrefix = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipAutoVectorsFitAvfAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Auto Vectors Group Default Prefix

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Auto Vectors Group Default Prefix](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-group-default-prefix) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-auto-vectors-group-default-prefix)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `geomRelAvnVgDefaultPrefix` | `string` | `Geom Rel AVN VG Default Prefix` | GR-AVN- |
| `geomRelAvfVgDefaultPrefix` | `string` | `Geom Rel AVF VG Default Prefix` | GR-AVF- |
| `nonGeomRelVgDefaultPrefix` | `string` | `Non-Geom Rel VG Default Prefix` | Auto Vectors:  |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipAutoVectorsGroupDefaultPrefixAsync(
    string geomRelAvnVgDefaultPrefix = "GR-AVN-",
    string geomRelAvfVgDefaultPrefix = "GR-AVF-",
    string nonGeomRelVgDefaultPrefix = "Auto Vectors: ",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipAutoVectorsGroupDefaultPrefixAsync();
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Desired Meas Count

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Desired Meas Count](/mp-command-catalog/commands/relationship-operations#set-relationship-desired-meas-count) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-desired-meas-count)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `desiredMeasurementCount` | `int` | `Desired Measurement Count` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipDesiredMeasCountAsync(
    CollectionObjectName relationshipName,
    int desiredMeasurementCount = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipDesiredMeasCountAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Dormant Status

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Dormant Status](/mp-command-catalog/commands/relationship-operations#set-relationship-dormant-status) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-dormant-status)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `IEnumerable<CollectionItemName>` | `Relationships` | Required |
| `dormantStatus` | `bool` | `Dormant Status` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipDormantStatusAsync(
    IEnumerable<CollectionItemName> relationships,
    bool dormantStatus = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipDormantStatusAsync(relationships: relationships);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Fit Constraints (Scalar Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Fit Constraints (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-fit-constraints-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-fit-constraints-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `fitConstraintOptions` | `FitConstraintScalarOptions` | `Fit Constraint Options` | Both limits disabled |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipFitConstraintsScalarTypeAsync(
    CollectionObjectName relationshipName,
    FitConstraintScalarOptions fitConstraintOptions = default,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipFitConstraintsScalarTypeAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Orientation Fit Constraints (Vector Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Orientation Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-orientation-fit-constraints-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-orientation-fit-constraints-vector-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `orientationVectorConstraint` | `ToleranceVectorOptions` | `Orientation Vector Constraint` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipOrientationFitConstraintsVectorTypeAsync(
    CollectionObjectName relationshipName,
    ToleranceVectorOptions orientationVectorConstraint,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipOrientationFitConstraintsVectorTypeAsync(relationshipName: relationshipName, orientationVectorConstraint: orientationVectorConstraint);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Outlier Rejection (Scalar Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Outlier Rejection (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-outlier-rejection-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-outlier-rejection-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipOutlierRejectionScalarTypeAsync(
    CollectionObjectName relationshipName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipOutlierRejectionScalarTypeAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Position Fit Constraints (Vector Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Position Fit Constraints (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-position-fit-constraints-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-position-fit-constraints-vector-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `positionVectorConstraint` | `ToleranceVectorOptions` | `Position Vector Constraint` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipPositionFitConstraintsVectorTypeAsync(
    CollectionObjectName relationshipName,
    ToleranceVectorOptions positionVectorConstraint,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipPositionFitConstraintsVectorTypeAsync(relationshipName: relationshipName, positionVectorConstraint: positionVectorConstraint);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Projection Options

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Projection Options](/mp-command-catalog/commands/relationship-operations#set-relationship-projection-options) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-projection-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `projectionOptions` | `ProjectionOptions` | `Projection Options` | Object To Probe Vectors |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipProjectionOptionsAsync(
    CollectionObjectName relationshipName,
    ProjectionOptions projectionOptions,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipProjectionOptionsAsync(relationshipName: relationshipName, projectionOptions: projectionOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Reporting Frame

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Reporting Frame](/mp-command-catalog/commands/relationship-operations#set-relationship-reporting-frame) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-reporting-frame)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `reportingFrame` | `CollectionObjectName` | `Reporting Frame` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipReportingFrameAsync(
    CollectionObjectName relationshipName,
    CollectionObjectName reportingFrame,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipReportingFrameAsync(relationshipName: relationshipName, reportingFrame: reportingFrame);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Sigmoidal Gap Fit Constraints

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Sigmoidal Gap Fit Constraints](/mp-command-catalog/commands/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-sigmoidal-gap-fit-constraints)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `useSigmoidalGapConstraints` | `bool` | `Use Sigmoidal Gap Constraints` | true |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipSigmoidalGapFitConstraintsAsync(
    CollectionObjectName relationshipName,
    bool useSigmoidalGapConstraints = true,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipSigmoidalGapFitConstraintsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Sub Sampling Options

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Sub Sampling Options](/mp-command-catalog/commands/relationship-operations#set-relationship-sub-sampling-options) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-sub-sampling-options)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `useEveryIthPoint` | `bool` | `Use every i-th point` | false |
| `iValue` | `int` | `i value` | 20 |
| `useNoMoreThanNPoints` | `bool` | `Use no more than n points` | true |
| `nValue` | `int` | `n value` | 10000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipSubSamplingOptionsAsync(
    CollectionObjectName relationshipName,
    bool useEveryIthPoint = false,
    int iValue = 20,
    bool useNoMoreThanNPoints = true,
    int nValue = 10000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipSubSamplingOptionsAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Tolerance (Scalar Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Tolerance (Scalar Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-scalar-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-tolerance-scalar-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `toleranceOptions` | `ToleranceScalarOptions` | `Tolerance Options` | Both limits disabled |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipToleranceScalarTypeAsync(
    CollectionObjectName relationshipName,
    ToleranceScalarOptions toleranceOptions = default,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipToleranceScalarTypeAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Tolerance (Vector Type)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Tolerance (Vector Type)](/mp-command-catalog/commands/relationship-operations#set-relationship-tolerance-vector-type) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-tolerance-vector-type)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `vectorTolerance` | `ToleranceVectorOptions` | `Vector Tolerance` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipToleranceVectorTypeAsync(
    CollectionObjectName relationshipName,
    ToleranceVectorOptions vectorTolerance,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipToleranceVectorTypeAsync(relationshipName: relationshipName, vectorTolerance: vectorTolerance);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Voxel Cloud Display

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Voxel Cloud Display](/mp-command-catalog/commands/relationship-operations#set-relationship-voxel-cloud-display) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-voxel-cloud-display)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `enableVoxelCloudDisplay` | `bool` | `Enable Voxel Cloud Display?` | true |
| `voxelSize10Autodetect` | `double` | `Voxel Size (-1.0 autodetect)` | -1.000000 |
| `minPtsCountPerVoxel` | `int` | `Min Pts Count Per Voxel` | 3 |
| `voxelRenderingDiameter10Fast` | `double` | `Voxel Rendering Diameter % (-1.0 fast)` | 125.000000 |
| `surfaceAnalysisMode` | `SurfaceAnalysisMode` | `Surface Analysis Mode` | Relationship |
| `colorizationOptions` | `ColorizationOptions` | `Colorization Options` | Red |
| `showColorBarInView` | `bool` | `Show Color Bar in View?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipVoxelCloudDisplayAsync(
    CollectionObjectName relationshipName,
    bool enableVoxelCloudDisplay,
    double voxelSize10Autodetect,
    int minPtsCountPerVoxel,
    double voxelRenderingDiameter10Fast,
    SurfaceAnalysisMode surfaceAnalysisMode,
    ColorizationOptions colorizationOptions,
    bool showColorBarInView = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipVoxelCloudDisplayAsync(relationshipName: relationshipName, enableVoxelCloudDisplay: enableVoxelCloudDisplay, voxelSize10Autodetect: voxelSize10Autodetect, minPtsCountPerVoxel: minPtsCountPerVoxel, voxelRenderingDiameter10Fast: voxelRenderingDiameter10Fast, surfaceAnalysisMode: surfaceAnalysisMode, colorizationOptions: colorizationOptions);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Weighting

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Weighting](/mp-command-catalog/commands/relationship-operations#set-relationship-weighting) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-weighting)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `weight` | `double` | `Weight` | 0.000000 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipWeightingAsync(
    CollectionObjectName relationshipName,
    double weight = 0.000000,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipWeightingAsync(relationshipName: relationshipName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Set Relationship Weights Normalized

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Set Relationship Weights Normalized](/mp-command-catalog/commands/relationship-operations#set-relationship-weights-normalized) · [gRPC contract](/api/grpc/relationship-operations#set-relationship-weights-normalized)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionName` | `CollectionName` | `Collection Name` | Required |
| `pickWeightingMode` | `RelWeightingMode` | `Pick Weighting Mode` | Normalize on equation count |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task SetRelationshipWeightsNormalizedAsync(
    CollectionName collectionName,
    RelWeightingMode pickWeightingMode,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.SetRelationshipWeightsNormalizedAsync(collectionName: collectionName, pickWeightingMode: pickWeightingMode);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
