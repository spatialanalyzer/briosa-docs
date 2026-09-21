---
title: Construction Operations / Other MP Types
description: Released dotnet 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

[SA 2026.1.0529.7](/api/dotnet/construction-operations-other-mp-types) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-other-mp-types)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Make a System String {/* #make-a-system-string */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-system-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-system-string)

```csharp
public Task<string> MakeSystemStringAsync(
        SystemString stringContent,
        string? formatString = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Name - Runtime Select {/* #make-a-collection-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-name---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-name---runtime-select)

```csharp
public Task<CollectionName> MakeCollectionNameRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Item Name Reference List - WildCard Selection {/* #make-a-collection-item-name-reference-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection)

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeCollectionItemNameRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string itemWildcardCriteria = "*",
        ItemType itemType = ItemType.Any,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name - Runtime Select {/* #make-a-collection-object-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select)

```csharp
public Task<CollectionObjectName> MakeCollectionObjectNameRuntimeSelectAsync(
        string userPrompt = "",
        ObjectType objectType = ObjectType.Any,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name - Ensure Unique {/* #make-a-collection-object-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique)

```csharp
public Task<CollectionObjectName> MakeCollectionObjectNameEnsureUniqueAsync(
        CollectionObjectName collectionObjectName,
        bool useNumberSuffix = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Reference List- Runtime Select {/* #make-a-collection-object-name-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListRuntimeSelectAsync(
        string userPrompt = "",
        ObjectType objectType = ObjectType.Any,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Reference List- WildCard Selection {/* #make-a-collection-object-name-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string objectWildcardCriteria = "*",
        ObjectType objectType = ObjectType.Any,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List - By Type {/* #make-a-collection-object-name-ref-list---by-type */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListByTypeAsync(
        string collection,
        ObjectType objectType = ObjectType.Any,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List - By Type and Color {/* #make-a-collection-object-name-ref-list---by-type-and-color */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListByTypeAndColorAsync(
        string collection,
        ObjectType objectType = ObjectType.Any,
        Color? objectColor = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List from all Groups in a Collection {/* #make-a-collection-object-name-ref-list-from-all-groups-in-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection)

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListFromAllGroupsInCollectionAsync(
        CollectionName collectionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Instrument Ref List Variable {/* #get-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable)

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>> GetCollectionInstrumentRefListVariableAsync(
        string name,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Instrument Ref List Variable {/* #set-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable)

```csharp
public Task SetCollectionInstrumentRefListVariableAsync(
        string name,
        IEnumerable<CollectionInstrumentId> value,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Collection Instruments to a Ref List - WildCard Selection {/* #add-collection-instruments-to-a-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection)

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>> AddCollectionInstrumentsToRefListWildcardSelectionAsync(
        IEnumerable<CollectionInstrumentId> collectionInstrumentRefList,
        string collectionWildcardCriteria = "*",
        string instrumentWildcardCriteria = "*",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Instrument Reference List- Runtime Select {/* #make-a-collection-instrument-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select)

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>> MakeCollectionInstrumentRefListRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Relationship Reference List- WildCard Selection {/* #make-a-relationship-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection)

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeRelationshipRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string relationshipWildcardCriteria = "*",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Relationship Reference List- Runtime Select {/* #make-a-relationship-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select)

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeRelationshipRefListRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make an Event Reference List- WildCard Selection {/* #make-an-event-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection)

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeEventRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string eventWildcardCriteria = "*",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Instrument ID - Runtime Select {/* #make-a-collection-instrument-id---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select)

```csharp
public Task<CollectionInstrumentId> MakeCollectionInstrumentIdRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Report Ref List from a Collection {/* #make-a-report-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection)

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeReportRefListFromCollectionAsync(
        CollectionName collectionName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Report Ref List - Runtime Select {/* #make-a-report-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select)

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeReportRefListRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Picture Name Ref List - Runtime Select {/* #make-a-picture-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select)

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakePictureNameRefListRuntimeSelectAsync(
        string userPrompt = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Transform from Doubles (Fixed XYZ) {/* #make-a-transform-from-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Transform from Doubles (Euler Parameters) {/* #make-a-transform-from-doubles-euler-parameters */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Transform of Object (Fixed XYZ) {/* #get-working-transform-of-object-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz)

```csharp
public Task<Transform> GetWorkingTransformOfObjectFixedXyzAsync(
        CollectionObjectName objectName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Invert Transform {/* #invert-transform */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#invert-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#invert-transform)

```csharp
public Task<Transform> InvertTransformAsync(
        Transform transform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Fixed XYZ) {/* #decompose-transform-into-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz)

```csharp
public Task<FixedXyzTransformComponents> DecomposeTransformIntoDoublesFixedXyzAsync(
        Transform inputTransform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Vectors (Fixed XYZ) {/* #decompose-transform-into-vectors-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz)

```csharp
public Task<FixedXyzTransformVectors> DecomposeTransformIntoVectorsFixedXyzAsync(
        Transform inputTransform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Vectors (Origin and Axes) {/* #decompose-transform-into-vectors-origin-and-axes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes)

```csharp
public Task<TransformAxes> DecomposeTransformIntoVectorsOriginAndAxesAsync(
        Transform transform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose World Transform Operator into Doubles (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-doubles-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world)

```csharp
public Task<WorldFixedXyzTransformComponents> DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorldAsync(
        WorldTransform inputWorldTransformOperator,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler XYZ) {/* #decompose-transform-into-doubles-euler-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz)

```csharp
public Task<EulerXyzTransformComponents> DecomposeTransformIntoDoublesEulerXyzAsync(
        Transform inputTransform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZYX) {/* #decompose-transform-into-doubles-euler-zyx */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx)

```csharp
public Task<EulerZyxTransformComponents> DecomposeTransformIntoDoublesEulerZyxAsync(
        Transform inputTransform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZYZ) {/* #decompose-transform-into-doubles-euler-zyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz)

```csharp
public Task<EulerZyzTransformComponents> DecomposeTransformIntoDoublesEulerZyzAsync(
        Transform inputTransform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZXZ) {/* #decompose-transform-into-doubles-euler-zxz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz)

```csharp
public Task<EulerZxzTransformComponents> DecomposeTransformIntoDoublesEulerZxzAsync(
        Transform inputTransform,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose World Transform Operator into Vectors (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-vectors-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world)

```csharp
public Task<WorldFixedXyzTransformVectors> DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorldAsync(
        WorldTransform inputWorldTransformOperator,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Values {/* #shared-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.2.0/targets/2024.1.0508.5)
