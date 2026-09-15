---
title: GDT Operations / GDT Construction
description: Unreleased Briosa .NET APIs for the GDT Construction MP commands.
toc_max_heading_level: 2
---

# GDT Operations / GDT Construction

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## Shared Types

```csharp
public sealed record SurfaceFaceList(string Value);

public enum GdtFeatureType
{
    Diameter,
    Radius,
    DistanceBetween,
    Width,
    Length,
    AngleBetween,
    Angularity,
    Perpendicularity,
    Parallelism,
    Circularity,
    Concentricity,
    Cylindricity,
    Straightness,
    SurfaceProfile,
    LineProfile,
    CompositeSurfaceProfile,
    Flatness,
    TruePosition,
    CompositeTruePosition,
    CircularRunout,
    TotalRunout,
}

public enum GdtToleranceZoneType
{
    None,
    Cylindrical,
    Planar,
    Spherical,
    RadialArc,
    RadialPlanar,
    Boundary,
    PlanarMedian,
    Surface,
}

public sealed record MakeGdtFeatureCheckAnnotationOptions
{
    public required string FeatureAnnotationName { get; init; }
    public GdtFeatureType FeatureType { get; init; } = GdtFeatureType.TruePosition;
    public IReadOnlyList<CollectionObjectName> Objects { get; init; } = [];
    public IReadOnlyList<CollectionItemName> GeometryRelationships { get; init; } = [];
    public SurfaceFaceList? SurfaceFaces { get; init; }
    public bool DecomposeMultipleFeatures { get; init; }
    public bool AutoCreateDiameterChecks { get; init; }
    public bool AutoCreateSlotWidthChecks { get; init; }
    public bool AutoCreateSlotLengthChecks { get; init; }
    public string DatumReferences { get; init; } = "";
    public string Tolerance { get; init; } = "";
    public bool IsSlot { get; init; }
    public bool PerUnitLengthOrArea { get; init; }
    public bool CircularArea { get; init; }
    public double PerUnitAreaLengthDistance { get; init; }
    public double PerUnitAreaLengthStepOverPercent { get; init; } = 50.0;
    public double PerUnitAreaWidthDistance { get; init; }
    public double PerUnitAreaWidthStepOverPercent { get; init; } = 50.0;
    public double PerUnitAreaCircleDiameter { get; init; }
    public double PerUnitAreaDiameterStepOver { get; init; } = 50.0;
    public CollectionObjectName? AuxiliaryObject { get; init; }
    public CollectionItemName? AuxiliaryGeometryRelationship { get; init; }
    public bool UseNominalForDimensionTolerance { get; init; } = true;
    public bool UseReferenceObjectForNominal { get; init; } = true;
    public double NominalDimensionTolerance { get; init; }
    public double LowDimensionTolerance { get; init; } = -0.1;
    public double HighDimensionTolerance { get; init; } = 0.1;
    public GdtToleranceZoneType ToleranceZoneType { get; init; } = GdtToleranceZoneType.None;
    public bool UseProjectedToleranceZone { get; init; }
    public double ProjectedToleranceZone { get; init; }
}

public sealed record MakeGdtDatumAnnotationOptions
{
    public required string DatumName { get; init; }
    public IReadOnlyList<CollectionObjectName> Objects { get; init; } = [];
    public IReadOnlyList<CollectionItemName> GeometryRelationships { get; init; } = [];
    public SurfaceFaceList? SurfaceFaces { get; init; }
    public CollectionObjectName? AuxiliaryObject { get; init; }
    public CollectionItemName? AuxiliaryGeometryRelationship { get; init; }
    public bool IsSlot { get; init; }
    public bool ForceSurfaceFeature { get; init; }
}
```

`SurfaceFaceList.Value` is an opaque SpatialAnalyzer value. Pass values
returned by the Surface Face List methods unchanged.

## MakeSurfaceFaceListRuntimeSelectAsync

```csharp
public Task<SurfaceFaceList> MakeSurfaceFaceListRuntimeSelectAsync(
    CancellationToken cancellationToken = default);

var faces = await briosa.GdtOperations.MakeSurfaceFaceListRuntimeSelectAsync();
```

This method displays SpatialAnalyzer's runtime Surface-face selector.

## MakeSurfaceFaceListFromSurfaceAsync

```csharp
public Task<SurfaceFaceList> MakeSurfaceFaceListFromSurfaceAsync(
    CollectionObjectName surface,
    CancellationToken cancellationToken = default);

var faces = await briosa.GdtOperations
    .MakeSurfaceFaceListFromSurfaceAsync(surface);
```

## MakeGdtFeatureCheckAnnotationAsync

```csharp
public Task MakeGdtFeatureCheckAnnotationAsync(
    MakeGdtFeatureCheckAnnotationOptions options,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.MakeGdtFeatureCheckAnnotationAsync(new()
{
    FeatureAnnotationName = "Position Check",
    FeatureType = GdtFeatureType.TruePosition,
    Objects = [feature],
    SurfaceFaces = faces,
});
```

The options record exposes all 30 MP inputs. Its initializers preserve the
exact MP defaults. Briosa does not require one particular mix of Objects,
Relationships, and Surface faces; SpatialAnalyzer validates the definition.

## MakeGdtDatumAnnotationAsync

```csharp
public Task MakeGdtDatumAnnotationAsync(
    MakeGdtDatumAnnotationOptions options,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.MakeGdtDatumAnnotationAsync(new()
{
    DatumName = "A",
    Objects = [datumFeature],
});
```

`IsSlot` and `ForceSurfaceFeature` both default to `false`.

## MakeFeatureChecksAsync

```csharp
public Task MakeFeatureChecksAsync(
    CollectionName collection,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.MakeFeatureChecksAsync(collection);
```

## MakeFeatureCheckRefListFromCollectionAsync

```csharp
public Task<IReadOnlyList<CollectionItemName>>
    MakeFeatureCheckRefListFromCollectionAsync(
        CollectionName collection,
        CancellationToken cancellationToken = default);

var checks = await briosa.GdtOperations
    .MakeFeatureCheckRefListFromCollectionAsync(collection);
```

## MakeFeatureCheckReferenceListWildcardSelectionAsync

```csharp
public Task<IReadOnlyList<CollectionItemName>>
    MakeFeatureCheckReferenceListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string featureCheckWildcardCriteria = "*",
        CancellationToken cancellationToken = default);

var checks = await briosa.GdtOperations
    .MakeFeatureCheckReferenceListWildcardSelectionAsync(
        featureCheckWildcardCriteria: "Position*");
```

## MakeAnnotationRefListFromCollectionAsync

```csharp
public Task<IReadOnlyList<CollectionItemName>>
    MakeAnnotationRefListFromCollectionAsync(
        CollectionName collection,
        CancellationToken cancellationToken = default);

var annotations = await briosa.GdtOperations
    .MakeAnnotationRefListFromCollectionAsync(collection);
```

## MakeAnnotationRefListWildcardSelectionAsync

```csharp
public Task<IReadOnlyList<CollectionItemName>>
    MakeAnnotationRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string annotationWildcardCriteria = "*",
        CancellationToken cancellationToken = default);

var annotations = await briosa.GdtOperations
    .MakeAnnotationRefListWildcardSelectionAsync(
        annotationWildcardCriteria: "Datum*");
```

## DeleteFeatureChecksAsync

```csharp
public Task DeleteFeatureChecksAsync(
    IEnumerable<CollectionItemName> featureChecks,
    CancellationToken cancellationToken = default);

await briosa.GdtOperations.DeleteFeatureChecksAsync(checksToDelete);
```

The client adds no confirmation or existence preflight.

## MakeDatumRefListFromCollectionAsync

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeDatumRefListFromCollectionAsync(
    CollectionName collection,
    CancellationToken cancellationToken = default);

var datums = await briosa.GdtOperations
    .MakeDatumRefListFromCollectionAsync(collection);
```

All returned lists are detached snapshots of live SA state. The client does not
cache them or automatically replay any operation.

[Catalog](/mp-command-catalog/commands/gdt-construction) · [gRPC](/api/grpc/gdt-construction) · [Python](/api/python/gdt-construction) · [JavaScript and TypeScript](/api/javascript/gdt-construction)
