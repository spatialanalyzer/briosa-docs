---
title: Construction Operations / Other MP Types
description: Briosa 0.1.0 .NET APIs for selected Other MP Types commands.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

The client remains stateless: MP variables and live SA selections are read or
changed only when a method is called. No method is automatically replayed.

## Shared Values

```csharp
public enum SystemString
{
    SaVersion,
    XitFilename,
    MpFilename,
    MpFilenameFullPath,
    DateAndTime,
    Date,
    DateShort,
    Time,
    KeySerialNumber,
    CompanyName,
    UserName,
    LicenseUserName,
    WindowsUserName,
    ComputerName,
}

public sealed record FixedXyzTransformComponents(
    double X, double Y, double Z, double Rx, double Ry, double Rz);
public sealed record FixedXyzTransformVectors(Vector PositionInWorking, Vector OrientationInWorking);
public sealed record TransformAxes(Vector Origin, Vector XAxis, Vector YAxis, Vector ZAxis);
public sealed record WorldFixedXyzTransformComponents(
    double X, double Y, double Z, double Rx, double Ry, double Rz, double Scale);
public sealed record EulerXyzTransformComponents(
    double X, double Y, double Z, double Rx, double Ry, double Rz);
public sealed record EulerZyxTransformComponents(
    double X, double Y, double Z, double Rz, double Ry, double Rx);
public sealed record EulerZyzTransformComponents(
    double X, double Y, double Z, double FirstRz, double Ry, double SecondRz);
public sealed record EulerZxzTransformComponents(
    double X, double Y, double Z, double FirstRz, double Rx, double SecondRz);
public sealed record WorldFixedXyzTransformVectors(
    Vector PositionInWorking, Vector OrientationInWorking, double Scale);
```

`ItemType`, `ObjectType`, `Color`, `Transform`, `WorldTransform`, and the
identity types are shared Briosa values.

## Make a System String

```csharp
public Task<string> MakeSystemStringAsync(
    SystemString stringContent,
    string? formatString = null,
    CancellationToken cancellationToken = default);
```

The optional format applies to date/time choices. Results such as user or
license-registration information are never logged by default.

## Make a Collection Name - Runtime Select

```csharp
public Task<CollectionName> MakeCollectionNameRuntimeSelectAsync(
    string userPrompt = "",
    CancellationToken cancellationToken = default);
```

## Make a Collection Item Name Reference List - WildCard Selection

```csharp
public Task<IReadOnlyList<CollectionItemName>>
    MakeCollectionItemNameRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string itemWildcardCriteria = "*",
        ItemType itemType = ItemType.Any,
        CancellationToken cancellationToken = default);
```

## Make a Collection Object Name - Runtime Select

```csharp
public Task<CollectionObjectName> MakeCollectionObjectNameRuntimeSelectAsync(
    string userPrompt = "",
    ObjectType objectType = ObjectType.Any,
    CancellationToken cancellationToken = default);
```

## Make a Collection Object Name - Ensure Unique

```csharp
public Task<CollectionObjectName> MakeCollectionObjectNameEnsureUniqueAsync(
    CollectionObjectName collectionObjectName,
    bool useNumberSuffix = false,
    CancellationToken cancellationToken = default);
```

The returned value is the first MP argument after SpatialAnalyzer mutates it.

## Make a Collection Object Name Reference List- Runtime Select

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    MakeCollectionObjectNameRefListRuntimeSelectAsync(
        string userPrompt = "",
        ObjectType objectType = ObjectType.Any,
        CancellationToken cancellationToken = default);
```

## Make a Collection Object Name Reference List- WildCard Selection

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    MakeCollectionObjectNameRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string objectWildcardCriteria = "*",
        ObjectType objectType = ObjectType.Any,
        CancellationToken cancellationToken = default);
```

## Make a Collection Object Name Ref List - By Type

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    MakeCollectionObjectNameRefListByTypeAsync(
        string collection,
        ObjectType objectType = ObjectType.Any,
        CancellationToken cancellationToken = default);
```

## Make a Collection Object Name Ref List - By Type and Color

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    MakeCollectionObjectNameRefListByTypeAndColorAsync(
        string collection,
        ObjectType objectType = ObjectType.Any,
        Color? objectColor = null,
        CancellationToken cancellationToken = default);
```

An omitted color maps to the MP default `new Color(255, 0, 0)`.

## Make a Collection Object Name Ref List from all Groups in a Collection

```csharp
public Task<IReadOnlyList<CollectionObjectName>>
    MakeCollectionObjectNameRefListFromAllGroupsInCollectionAsync(
        CollectionName collectionName,
        CancellationToken cancellationToken = default);
```

## Get Collection Instrument Ref List Variable

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>>
    GetCollectionInstrumentRefListVariableAsync(
        string name,
        CancellationToken cancellationToken = default);
```

The value is read from MP state on every call.

## Set Collection Instrument Ref List Variable

```csharp
public Task SetCollectionInstrumentRefListVariableAsync(
    string name,
    IEnumerable<CollectionInstrumentId> value,
    CancellationToken cancellationToken = default);
```

## Add Collection Instruments to a Ref List - WildCard Selection

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>>
    AddCollectionInstrumentsToRefListWildcardSelectionAsync(
        IEnumerable<CollectionInstrumentId> collectionInstrumentRefList,
        string collectionWildcardCriteria = "*",
        string instrumentWildcardCriteria = "*",
        CancellationToken cancellationToken = default);
```

The returned list is the MP's first argument after mutation.

## Make a Collection Instrument Reference List- Runtime Select

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>>
    MakeCollectionInstrumentRefListRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

## Make a Relationship Reference List- WildCard Selection

```csharp
public Task<IReadOnlyList<CollectionItemName>>
    MakeRelationshipRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string relationshipWildcardCriteria = "*",
        CancellationToken cancellationToken = default);
```

The MP's unavailable relationship-type filter is intentionally omitted.

## Make a Relationship Reference List- Runtime Select

```csharp
public Task<IReadOnlyList<CollectionItemName>>
    MakeRelationshipRefListRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The unavailable relationship-type filter is not exposed.

## Make an Event Reference List- WildCard Selection

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeEventRefListWildcardSelectionAsync(
    string collectionWildcardCriteria = "*",
    string eventWildcardCriteria = "*",
    CancellationToken cancellationToken = default);
```

## Make a Collection Instrument ID - Runtime Select

```csharp
public Task<CollectionInstrumentId> MakeCollectionInstrumentIdRuntimeSelectAsync(
    string userPrompt = "",
    CancellationToken cancellationToken = default);
```

## Make a Report Ref List from a Collection

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeReportRefListFromCollectionAsync(
    CollectionName collectionName,
    CancellationToken cancellationToken = default);
```

## Make a Report Ref List - Runtime Select

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeReportRefListRuntimeSelectAsync(
    string userPrompt = "",
    CancellationToken cancellationToken = default);
```

## Make a Picture Name Ref List - Runtime Select

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakePictureNameRefListRuntimeSelectAsync(
    string userPrompt = "",
    CancellationToken cancellationToken = default);
```

All Runtime Select methods are explicitly interactive. Cancellation does not
prove that the corresponding SpatialAnalyzer selection stopped.

## Make a Transform from Doubles (Fixed XYZ)

```csharp
public Task<Transform> MakeTransformFromDoublesFixedXyzAsync(
    double x = 0,
    double y = 0,
    double z = 0,
    double rx = 0,
    double ry = 0,
    double rz = 0,
    CancellationToken cancellationToken = default);
```

## Make a Transform from Doubles (Euler Parameters)

```csharp
public Task<Transform> MakeTransformFromDoublesEulerParametersAsync(
    double x = 0,
    double y = 0,
    double z = 0,
    double e1 = 0,
    double e2 = 0,
    double e3 = 0,
    double e4 = 0,
    CancellationToken cancellationToken = default);
```

The zero defaults are preserved exactly from the MP editor.

## Get Working Transform of Object (Fixed XYZ)

```csharp
public Task<Transform> GetWorkingTransformOfObjectFixedXyzAsync(
    CollectionObjectName objectName,
    CancellationToken cancellationToken = default);
```

## Invert Transform

```csharp
public Task<Transform> InvertTransformAsync(
    Transform transform,
    CancellationToken cancellationToken = default);
```

## Decompose Transform into Doubles (Fixed XYZ)

```csharp
public Task<FixedXyzTransformComponents> DecomposeTransformIntoDoublesFixedXyzAsync(
    Transform inputTransform,
    CancellationToken cancellationToken = default);
```

## Decompose Transform into Vectors (Fixed XYZ)

```csharp
public Task<FixedXyzTransformVectors> DecomposeTransformIntoVectorsFixedXyzAsync(
    Transform inputTransform,
    CancellationToken cancellationToken = default);
```

## Decompose Transform into Vectors (Origin and Axes)

```csharp
public Task<TransformAxes> DecomposeTransformIntoVectorsOriginAndAxesAsync(
    Transform transform,
    CancellationToken cancellationToken = default);
```

## Decompose World Transform Operator into Doubles (Fixed XYZ in World)

```csharp
public Task<WorldFixedXyzTransformComponents>
    DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorldAsync(
        WorldTransform inputWorldTransformOperator,
        CancellationToken cancellationToken = default);
```

## Decompose Transform into Doubles (Euler XYZ)

```csharp
public Task<EulerXyzTransformComponents> DecomposeTransformIntoDoublesEulerXyzAsync(
    Transform inputTransform,
    CancellationToken cancellationToken = default);
```

## Decompose Transform into Doubles (Euler ZYX)

```csharp
public Task<EulerZyxTransformComponents> DecomposeTransformIntoDoublesEulerZyxAsync(
    Transform inputTransform,
    CancellationToken cancellationToken = default);
```

## Decompose Transform into Doubles (Euler ZYZ)

```csharp
public Task<EulerZyzTransformComponents> DecomposeTransformIntoDoublesEulerZyzAsync(
    Transform inputTransform,
    CancellationToken cancellationToken = default);
```

`FirstRz` and `SecondRz` preserve the MP's repeated `Euler Rz` outputs.

## Decompose Transform into Doubles (Euler ZXZ)

```csharp
public Task<EulerZxzTransformComponents> DecomposeTransformIntoDoublesEulerZxzAsync(
    Transform inputTransform,
    CancellationToken cancellationToken = default);
```

## Decompose World Transform Operator into Vectors (Fixed XYZ in World)

```csharp
public Task<WorldFixedXyzTransformVectors>
    DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorldAsync(
        WorldTransform inputWorldTransformOperator,
        CancellationToken cancellationToken = default);
```

## Related References

[Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types) ·
[gRPC](/api/grpc/0.5.1/construction-operations-other-mp-types)
