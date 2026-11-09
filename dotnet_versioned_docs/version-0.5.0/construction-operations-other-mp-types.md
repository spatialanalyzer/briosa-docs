---
title: Construction Operations / Other MP Types
description: Released dotnet 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

[SA 2026.1.0529.7](/api/dotnet/construction-operations-other-mp-types) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/construction-operations-other-mp-types)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The optional `onMpCompletion` observer reports how a successful call's MP command completed; see [MP Command Outcomes](./lifecycle.md#mp-command-outcomes).

## Make a System String {/* #make-a-system-string */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-system-string) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-system-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<string> MakeSystemStringAsync(
        SystemString stringContent,
        string? formatString = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Name - Runtime Select {/* #make-a-collection-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-name---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-name---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<CollectionName> MakeCollectionNameRuntimeSelectAsync(
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Item Name Reference List - WildCard Selection {/* #make-a-collection-item-name-reference-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeCollectionItemNameRefListWildcardSelectionAsync(
        ItemType itemType,
        string collectionWildcardCriteria = "*",
        string itemWildcardCriteria = "*",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name - Runtime Select {/* #make-a-collection-object-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<CollectionObjectName> MakeCollectionObjectNameRuntimeSelectAsync(
        ObjectType objectType,
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name - Ensure Unique {/* #make-a-collection-object-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<CollectionObjectName> MakeCollectionObjectNameEnsureUniqueAsync(
        CollectionObjectName collectionObjectName,
        bool useNumberSuffix = false,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Reference List- Runtime Select {/* #make-a-collection-object-name-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListRuntimeSelectAsync(
        ObjectType objectType,
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Reference List- WildCard Selection {/* #make-a-collection-object-name-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListWildcardSelectionAsync(
        ObjectType objectType,
        string collectionWildcardCriteria = "*",
        string objectWildcardCriteria = "*",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List - By Type {/* #make-a-collection-object-name-ref-list---by-type */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListByTypeAsync(
        string collection,
        ObjectType objectType,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List - By Type and Color {/* #make-a-collection-object-name-ref-list---by-type-and-color */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListByTypeAndColorAsync(
        string collection,
        ObjectType objectType,
        Color? objectColor = null,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List from all Groups in a Collection {/* #make-a-collection-object-name-ref-list-from-all-groups-in-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionObjectName>> MakeCollectionObjectNameRefListFromAllGroupsInCollectionAsync(
        CollectionName collectionName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Instrument Ref List Variable {/* #get-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>> GetCollectionInstrumentRefListVariableAsync(
        string name,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Instrument Ref List Variable {/* #set-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task SetCollectionInstrumentRefListVariableAsync(
        string name,
        IEnumerable<CollectionInstrumentId> value,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Collection Instruments to a Ref List - WildCard Selection {/* #add-collection-instruments-to-a-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection)

Client 0.5.0 removed this method with behavioral contract major 3. SpatialAnalyzer returned MP code 2 on both exact targets, but the instrument list could not be read back, and the MP documents no other output. A reference list is a client-side value in Briosa, so build the instrument list directly. No released signature
is available in this release. Client 0.4.0 and earlier keep it; its method history shows that contract.

## Make a Collection Instrument Reference List- Runtime Select {/* #make-a-collection-instrument-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<IReadOnlyList<CollectionInstrumentId>> MakeCollectionInstrumentRefListRuntimeSelectAsync(
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Relationship Reference List- WildCard Selection {/* #make-a-relationship-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeRelationshipRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string relationshipWildcardCriteria = "*",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Relationship Reference List- Runtime Select {/* #make-a-relationship-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeRelationshipRefListRuntimeSelectAsync(
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make an Event Reference List- WildCard Selection {/* #make-an-event-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeEventRefListWildcardSelectionAsync(
        string collectionWildcardCriteria = "*",
        string eventWildcardCriteria = "*",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Instrument ID - Runtime Select {/* #make-a-collection-instrument-id---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<CollectionInstrumentId> MakeCollectionInstrumentIdRuntimeSelectAsync(
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Report Ref List from a Collection {/* #make-a-report-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeReportRefListFromCollectionAsync(
        CollectionName collectionName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Report Ref List - Runtime Select {/* #make-a-report-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakeReportRefListRuntimeSelectAsync(
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Picture Name Ref List - Runtime Select {/* #make-a-picture-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```csharp
public Task<IReadOnlyList<CollectionItemName>> MakePictureNameRefListRuntimeSelectAsync(
        string userPrompt = "",
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Transform from Doubles (Fixed XYZ) {/* #make-a-transform-from-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<Transform> MakeTransformFromDoublesFixedXyzAsync(
        double x = 0,
        double y = 0,
        double z = 0,
        double rx = 0,
        double ry = 0,
        double rz = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Transform from Doubles (Euler Parameters) {/* #make-a-transform-from-doubles-euler-parameters */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<Transform> MakeTransformFromDoublesEulerParametersAsync(
        double x = 0,
        double y = 0,
        double z = 0,
        double e1 = 0,
        double e2 = 0,
        double e3 = 0,
        double e4 = 0,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Transform of Object (Fixed XYZ) {/* #get-working-transform-of-object-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<Transform> GetWorkingTransformOfObjectFixedXyzAsync(
        CollectionObjectName objectName,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Invert Transform {/* #invert-transform */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#invert-transform) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#invert-transform)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<Transform> InvertTransformAsync(
        Transform transform,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Fixed XYZ) {/* #decompose-transform-into-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<FixedXyzTransformComponents> DecomposeTransformIntoDoublesFixedXyzAsync(
        Transform inputTransform,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Vectors (Fixed XYZ) {/* #decompose-transform-into-vectors-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<FixedXyzTransformVectors> DecomposeTransformIntoVectorsFixedXyzAsync(
        Transform inputTransform,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Vectors (Origin and Axes) {/* #decompose-transform-into-vectors-origin-and-axes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<TransformAxes> DecomposeTransformIntoVectorsOriginAndAxesAsync(
        Transform transform,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose World Transform Operator into Doubles (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-doubles-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<WorldFixedXyzTransformComponents> DecomposeWorldTransformOperatorIntoDoublesFixedXyzInWorldAsync(
        WorldTransform inputWorldTransformOperator,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler XYZ) {/* #decompose-transform-into-doubles-euler-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<EulerXyzTransformComponents> DecomposeTransformIntoDoublesEulerXyzAsync(
        Transform inputTransform,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZYX) {/* #decompose-transform-into-doubles-euler-zyx */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<EulerZyxTransformComponents> DecomposeTransformIntoDoublesEulerZyxAsync(
        Transform inputTransform,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZYZ) {/* #decompose-transform-into-doubles-euler-zyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<EulerZyzTransformComponents> DecomposeTransformIntoDoublesEulerZyzAsync(
        Transform inputTransform,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZXZ) {/* #decompose-transform-into-doubles-euler-zxz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<EulerZxzTransformComponents> DecomposeTransformIntoDoublesEulerZxzAsync(
        Transform inputTransform,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose World Transform Operator into Vectors (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-vectors-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```csharp
public Task<WorldFixedXyzTransformVectors> DecomposeWorldTransformOperatorIntoVectorsFixedXyzInWorldAsync(
        WorldTransform inputWorldTransformOperator,
        Action<MpCompletion>? onMpCompletion = null,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Values {/* #shared-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/3823369030dc0a286d698a4795b9442b4c7f9bf1/targets/2026.1.0529.7)
